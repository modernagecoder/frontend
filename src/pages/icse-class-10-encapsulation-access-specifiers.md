---
title: "Encapsulation ICSE Class 10: Access Specifiers and Scope"
description: "Encapsulation for ICSE Class 10 (2027): private, default, protected and public in one access table, data hiding, scope of variables, all run in Java."
canonical: https://learn.modernagecoders.com/icse-class-10-encapsulation-access-specifiers
source: src/pages/icse-class-10-encapsulation-access-specifiers.html
updated: 2026-10-13
---

> Encapsulation in ICSE Class 10 means wrapping a class's data and the methods that use it into one unit, and controlling access to that data. Java does it with access specifiers: private (same class only), default with no keyword (same package), protected (same package and subclasses) and public (everywhere). Making data private and reaching it only through public methods is called data hiding. The same 2027 syllabus unit covers the scope of variables: class, instance, argument and local. Modern Age Coders teaches this chapter live in a Tuesday and Wednesday mini batch in India, or one to one at the family's time.

## Access specifiers Java ICSE: private, public, protected and default in one table

An access specifier is a keyword placed before a member that decides which other classes may use it. The ICSE syllabus names three, private, protected and public; a member written with no keyword gets a fourth level, called default or package access.

- Specifier | Same class | Another class, same package | Subclass, other package | Any other class, other package

- private | Yes | No | No | No

- none (default) | Yes | Yes | No | No

- protected | Yes | Yes | Yes | No

- public | Yes | Yes | Yes | Yes

Read the table as a ladder: each row opens one more door than the row above it. We did not copy it from a book. We wrote a class Locker in a package school with one member at each level, then tried to read all four from three places. Here is what javac 21 reported.

```
package school;
public class Locker {
    private int code = 4821;
    int row = 3;                  // no keyword: default
    protected String owner = "Tara";
    public int number = 17;
}
```

```
school/Office.java:5: error: code has private access in Locker
other/SportsLocker.java:5: error: code has private access in Locker
other/SportsLocker.java:6: error: row is not public in Locker; cannot be accessed from outside package
other/Visitor.java:6: error: code has private access in Locker
other/Visitor.java:7: error: row is not public in Locker; cannot be accessed from outside package
other/Visitor.java:8: error: owner has protected access in Locker
```

### Encapsulation, in one line
Binding data and the methods that work on it into a single unit, the class, so that the data is used only in the ways the class allows.

### Data hiding, in one line
Keeping data members private so that no code outside the class can read or change them directly.

### Access specifier, in one line
A keyword that sets the visibility of a class member: private, protected, public, or none for default access.

Inheritance is not part of the ICSE Class 10 syllabus, so for the 2027 paper it is enough to know that protected opens a member to subclasses as well as to its own package. Where a class sits among objects and classes generally is covered on [class as the basis of all computation](/icse-class-10-class-as-basis-of-computation).

## Data hiding ICSE: private members with getter and setter methods

A class hides its data by declaring the members private and offering public methods to read them (accessors, or getters) and to change them (mutators, or setters). The mutator can check a value before accepting it, which is the whole point.

```
class Thermostat {
    private double temp = 24.0;

    public double getTemp() {       // accessor
        return temp;
    }

    public void setTemp(double t) { // mutator
        if (t >= 16 && t <= 30)
            temp = t;
        else
            System.out.println("Rejected: " + t);
    }
}

class Room {
    public static void main(String[] args) {
        Thermostat ac = new Thermostat();
        ac.setTemp(45);
        ac.setTemp(19.5);
        System.out.println(ac.getTemp());
    }
}

// Output:
Rejected: 45.0
19.5
```

```
class Hack {
    public static void main(String[] args) {
        Thermostat ac = new Thermostat();
        ac.temp = 45;                // line 4
        System.out.println(ac.getTemp());
    }
}

// javac says:
Hack.java:4: error: temp has private access in Thermostat
        ac.temp = 45;
          ^
```

### Encapsulation, data hiding and abstraction: the difference

- Term | What it means | In the Thermostat class

- Encapsulation | Data and methods bundled in one class | temp, getTemp and setTemp live together in Thermostat

- Data hiding | Data kept out of reach of other classes | temp is private, so Room cannot touch it

- Abstraction | Showing what an object does, not how | Room calls setTemp without knowing the 16 to 30 rule inside it

- Data members are usually private; methods that other classes need are public.

- A getter returns the member's type and takes no parameter: double getTemp().

- A setter is usually void and takes one parameter of the member's type.

- A private method is allowed: it is a helper used only inside its own class.

- A private member is still fully usable inside its own class, including in main if main belongs to that class.

The last rule surprises students in output questions: a main written inside the same class can read a private member directly. Constructors that fill private members are on [ICSE Class 10 constructors questions](/icse-class-10-constructors-questions).

## Scope of variables ICSE: class, instance, argument and local variables

The scope of a variable is the part of the program in which it can be used, and its lifetime is how long it keeps its value. The syllabus names four kinds, and each is decided purely by where the variable is declared.

- Kind | Declared | Usable in | Lives | Default value?

- Class variable | In the class, with static | The whole class; outside it as ClassName.var if access allows | As long as the program runs; one copy | Yes (0, 0.0, false, null)

- Instance variable | In the class, without static | All non-static methods; through an object elsewhere | As long as its object; one copy per object | Yes

- Argument variable | In a method or constructor header | That method body only | One call of the method | No, it receives the passed value

- Local variable | Inside a method or a block { } | From its declaration to the end of that block | Until the block ends | No, must be assigned before use

```
class Ticket {
    static int sold = 0;   // class variable
    int seat;              // instance variable

    Ticket(int s) {        // s: argument variable
        seat = s;
        sold++;
    }

    int price(int rows) {  // rows: argument variable
        int base = 150;    // local variable
        return base + rows * 20;
    }

    public static void main(String[] args) {
        Ticket a = new Ticket(12);
        Ticket b = new Ticket(30);
        System.out.println(a.seat + " " + b.seat + " " + Ticket.sold);
        System.out.println(a.price(3));
    }
}

// Output:
12 30 2
210
```

```
class Shadow {
    int marks = 40;

    void update(int marks) {
        marks = marks + 5;
        System.out.println(marks + " " + this.marks);
    }

    void fix(int marks) {
        this.marks = marks;
    }

    public static void main(String[] args) {
        Shadow s = new Shadow();
        s.update(70);
        s.fix(62);
        System.out.println(s.marks);
    }
}

// Output:
75 40
62
```

### Scope of variables ICSE: five output questions

All five use one class Q with static int count = 10;, int n = 1;, static void bump(int count) { count += 5; } and void twice() { int n = 7; n *= 2; this.n += n; }.

- # | Code in main | Output | The scope rule

- 1 | bump(count);System.out.println(count); | 10 | The parameter count is a separate local copy; the class variable is untouched

- 2 | Q x = new Q();x.twice();System.out.println(x.n); | 15 | The local n becomes 14; this.n is the member, 1 + 14

- 3 | Q p = new Q(), r = new Q();p.count++; r.count++;System.out.println(Q.count + " " + p.n); | 12 1 | Both objects share the one static count; each has its own n

- 4 | int total = 0;for (int i = 1; i <= 4; i++) { int sq = i * i; total += sq; }System.out.println(total); | 30 | sq is created afresh each pass; total lives outside the loop and keeps adding

- 5 | int k = 3;{ int m = k * 2; k = m + 1; }System.out.println(k); | 7 | m dies at the closing brace, but the change it made to k survives

```
int sum = 0;
for (int i = 1; i <= 5; i++)
    sum += i;
System.out.println(sum + " " + i);   // line 6

// javac says:
Loop.java:6: error: cannot find symbol
  symbol:   variable i
```

```
void show(int x) {
    int x = 5;                       // line 3
    System.out.println(x);
}

// javac says:
Dup.java:3: error: variable x is already defined in method show(int)
```

More traces of this kind, mixed with every other trap, sit among the [ICSE Java output questions](/icse-class-10-java-output-questions).

## A Section B class with private data members, solved and run

Section B questions rarely say "encapsulation", but a full-marks class answer uses it: private data members, a constructor, public methods that check values before changing them, and a variable description table. Here is an original question in board shape.

Question. Define a class MetroCard with private data members holder (String), cardNo (long) and balance (double). Write a parameterised constructor that stores the name and card number and sets the balance to 0. Write public methods: String getHolder() and double getBalance(); void recharge(double amt) which refuses amounts below 100 and adds a bonus of 5% when the amount is 1000 or more; boolean travel(int stations) which charges a fare of 10 for the first station and 4 for every further station, with a ceiling of 60, deducting it only if the balance is enough; and void display(). In main, read the name, card number, a recharge amount and the stations for two trips, and display the card.

```
import java.util.Scanner;
class MetroCard {
    private String holder;    // name on the card
    private long cardNo;      // card number
    private double balance;   // money left on the card

    public MetroCard(String h, long c) {
        holder = h;
        cardNo = c;
        balance = 0.0;
    }

    public String getHolder() {
        return holder;
    }

    public double getBalance() {
        return balance;
    }

    public void recharge(double amt) {
        if (amt < 100) {
            System.out.println("Minimum recharge is 100");
            return;
        }
        double bonus = (amt >= 1000) ? amt * 0.05 : 0;
        balance = balance + amt + bonus;
    }

    public boolean travel(int stations) {
        int fare = 10 + 4 * (stations - 1);
        if (fare > 60)
            fare = 60;
        if (fare > balance) {
            System.out.println("Low balance, fare " + fare);
            return false;
        }
        balance = balance - fare;
        return true;
    }

    public void display() {
        System.out.println("Card " + cardNo + " (" + holder + ")");
        System.out.println("Balance: " + balance);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name and card number: ");
        String n = sc.next();
        long c = sc.nextLong();
        MetroCard card = new MetroCard(n, c);
        System.out.print("Recharge amount: ");
        card.recharge(sc.nextDouble());
        System.out.print("Stations on each of two trips: ");
        int t1 = sc.nextInt();
        int t2 = sc.nextInt();
        card.travel(t1);
        card.travel(t2);
        card.display();
    }
}
```

- Variable | Type | Scope | Purpose

- holder | String | instance, private | card holder's name

- cardNo | long | instance, private | card number

- balance | double | instance, private | money on the card

- h, c | String, long | argument | values passed to the constructor

- amt | double | argument | amount offered for recharge

- bonus | double | local | 5% extra on large recharges

- stations | int | argument | stations travelled on a trip

- fare | int | local | fare for one trip, at most 60

- sc, n, c, t1, t2, card | various | local to main | input reader, inputs and the object

```
Name and card number: Kabir 40071
Recharge amount: 1000
Stations on each of two trips: 6 18
Card 40071 (Kabir)
Balance: 960.0

Name and card number: Mira 40072
Recharge amount: 50
Minimum recharge is 100
Stations on each of two trips: 2 3
Low balance, fare 14
Low balance, fare 18
Card 40072 (Mira)
Balance: 0.0
```

Adding a Scope column to the variable description table, as above, is not required, but it shows the examiner you know the chapter. More classes written to a specification are on [ICSE slab and bill programs](/icse-class-10-slab-and-bill-programs) and [user-defined methods and overloading](/icse-class-10-user-defined-methods-overloading).

## Encapsulation ICSE Class 10 questions with answers

In Section A, the 40 compulsory marks, this chapter turns up as one-mark MCQs and two-mark definitions or differences. Try each one before opening the answer.

### One-mark questions

- Which access specifier makes a member visible only inside its own class? (a) public (b) protected (c) private (d) default
Answer (c) private.

- A member declared with no access specifier can be used by:
Answer Any class in the same package, but no class outside it.

- Which keyword lets a method reach a data member hidden by a parameter of the same name?
Answer this, as in this.marks = marks;

- Name the kind of variable declared inside a method body.
Answer A local variable.

- Which kind of variable has exactly one copy however many objects exist?
Answer A class variable, declared with static.

- Which of these is the most open: protected or default?
Answer protected. It allows everything default allows, plus subclasses in other packages.

### Two-mark questions

- Define encapsulation. How does a class implement it?
Answer Encapsulation is wrapping data and the methods that operate on it into a single unit. A class implements it by declaring the data members and methods together, and by keeping the data private and reachable only through its public methods.

- Differentiate between private and public members.
Answer A private member can be used only inside its own class; a public member can be used by any class in any package. Data members are usually private and the methods others need are public.

- State the difference between an instance variable and a local variable.
Answer An instance variable is declared in the class outside every method, belongs to an object and gets a default value. A local variable is declared inside a method or block, exists only until that block ends and must be assigned before use.

- Why is data hiding useful? Give one example.
Answer It stops other classes from putting an object into an impossible state. A private balance can be changed only through a method that refuses a negative amount, so the balance is always valid.

- What is the scope of an argument variable?
Answer The body of the method or constructor in whose header it is declared. It is created when the method is called, holds the passed value, and ends when the method returns.

Short difference questions from every chapter, in the same two-mark shape, are collected on [ICSE Computer Applications difference between questions](/icse-computer-difference-between-questions).

## Learning access and scope by breaking code on purpose

Students remember the access table best after they have watched the compiler refuse a line they were sure would work. So the week is built around predictions that javac then confirms or rejects.

-
**Predict, then compile** At the Tuesday 5:30 PM IST class the teacher shows a two-package project on a shared screen. Each student marks which lines will compile before BlueJ is asked, and the wrong guesses are discussed first.

-
**Scope traced in a table** Fragments with shadowed names, static counters and block-local variables are traced on paper, one column per variable, until the four kinds of variable feel different rather than merely sound different.

-
**A class written by hand** On Wednesday at 8:00 PM IST the group writes a Section B class with private members and checking methods, then marks it against the board scheme on screen, including the variable description table.

-
**Definitions said aloud** The one-line definitions of encapsulation, data hiding and each specifier are rehearsed until each student can say them without notes, which also prepares for the internal assessment viva.

-
**Back in every mock** From December, full two-hour mock papers bring the chapter back inside Section A and inside Section B classes, under the real clock.

The wider chapter-by-chapter plan is on [ICSE Computer Applications notes](/icse-computer-applications-notes), and the oral side is on [ICSE Computer Applications viva questions](/icse-computer-applications-viva-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every Section B class is written with private members and public methods.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC, where protected members and inheritance are taught in full.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants to build a stack or a queue whose insides nobody else can break.

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

**What is encapsulation in Java ICSE Class 10?** Encapsulation is the wrapping of data and the methods that act on that data into a single unit called a class. In practice it means keeping the data members private and letting other classes use them only through the class's public methods, so the class decides what changes are allowed. It is Unit 6 of the 2026-27 ICSE Computer Applications syllabus.

**What are the access specifiers in Java for ICSE?** The syllabus names private, protected and public. private allows access from the same class only; protected from the same package and from subclasses; public from everywhere. A member with no specifier has default, or package, access: any class in the same package can use it, but nothing outside the package can.

**What is the difference between private, public and protected?** They differ in how far a member can be seen. private stops at the class itself. protected reaches the whole package and any subclass, even one in another package. public reaches every class in every package. Data members are usually private and methods that other classes call are public.

**What is data hiding in ICSE Computer Applications?** Data hiding means keeping a class's data members private so that code outside the class cannot read or change them directly. Other classes must go through public methods, which can check every value first. For example, a private balance changed only by a method that refuses negative amounts can never become negative.

**What is the difference between encapsulation and data hiding?** Encapsulation is the bundling of data and methods into one class. Data hiding is one result of it: restricting direct access to that data with the private specifier. A class could bundle data and methods yet leave everything public; that is encapsulated but not hidden, and it is weak design.

**What is the scope of variables in Java ICSE?** Scope is the region of a program where a variable can be used. Class variables (static) and instance variables can be used throughout the class. An argument variable can be used only inside its own method. A local variable can be used only from its declaration to the end of the block in which it is declared.

**What are the four types of variables in ICSE Class 10?** Class variables, declared static with one shared copy; instance variables, declared in the class without static, one copy per object; argument variables, declared in a method header to receive values; and local variables, declared inside a method or block. The syllabus groups all four under the scope of variables in the Encapsulation unit.

**Can a private variable be accessed outside the class?** Not directly. The compiler rejects the line with a message such as "temp has private access in Thermostat". The only way in is through a non-private method of the same class, such as a getter that returns the value or a setter that checks and stores a new one.

**Is protected access asked in ICSE Class 10 even though inheritance is not in the syllabus?** The syllabus lists protected among the access specifiers, so a one-mark question on its visibility is fair. You need the rule, not inheritance programs: protected allows access within the same package and from subclasses in other packages. Writing subclasses is an ISC topic.

**Do you teach encapsulation and access specifiers in live classes?** Yes. The ICSE mini batch meets on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST with six students at most. Students predict which lines compile, trace scope fragments and write a class with private data each week. Personalised one to one classes are available at a time the family chooses, in India or abroad.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-encapsulation-access-specifiers*
