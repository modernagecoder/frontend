---
title: "Function Overloading ICSE Class 10: Methods, Programs 2027"
description: "Function overloading for ICSE Class 10: user-defined methods, three board-format programs run in Java, pure and impure methods, call by value, a checklist."
canonical: https://learn.modernagecoders.com/icse-class-10-user-defined-methods-overloading
source: src/pages/icse-class-10-user-defined-methods-overloading.html
updated: 2026-11-06
---

> Function overloading in ICSE Class 10 Computer Applications means defining two or more methods with the same name in one class, each with a different parameter list: a different number of parameters, different types, or a different order of types. Java decides which one to run from the arguments in the call. The return type alone cannot tell overloaded methods apart. Overloading is how the Class 10 syllabus shows polymorphism, and a Section B question often asks for three versions of one method plus a main method that calls them. Modern Age Coders teaches it live in a Tuesday and Wednesday mini batch in India, or one to one.

## User defined methods ICSE: prototype, signature and parameters

A user-defined method is a named block of code written by the programmer, which can take values in through parameters and send one value back with return. Its first line is the prototype; its name with the parameter types is the signature.

```
// prototype (method header):
public double area(double l, double b)
// access   return  name  formal parameters
// specifier type
{
    return l * b;     // body: sends one value back
}

// signature: area(double, double)
// a call with actual parameters:
double r = ob.area(7.5, 4);
```

- Term | Plain meaning | In the example

- Method prototype | The first line of a method: access, return type, name, parameter list | public double area(double l, double b)

- Method signature | The name and the types of the parameters, in order | area(double, double)

- Formal parameters | Variables in the header that receive values | l, b

- Actual parameters | Values written in the call | 7.5, 4

- Return type | Type of the value sent back, or void for none | double

- Static method | Belongs to the class; called without an object | Math.sqrt(16)

- Non-static method | Belongs to each object; called through an object | ob.area(7.5, 4)

Methods live inside a class, so this chapter leans on the one before it: [class as the basis of all computation](/icse-class-10-class-as-basis-of-computation). Access specifiers such as public and private are covered on [encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers).

## Function overloading programs in ICSE board format

An overloading question names the class, names the method and describes each version. The answer is the class with every version written exactly as described, plus a main method that creates an object and calls each one. Below are three original questions in that shape, each with a full answer that was run.

Question A. Design a class Compute to overload a method work() as follows. (i) void work(int n): print the sum of the digits of n. (ii) void work(int a, int b): print the highest common factor of a and b. (iii) void work(String s): print the number of vowels in s. Write a main method to create an object and call all three.

```
class Compute {
    // sum of the digits of n
    void work(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Digit sum = " + sum);
    }

    // highest common factor of a and b
    void work(int a, int b) {
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println("HCF = " + a);
    }

    // number of vowels in s
    void work(String s) {
        int v = 0;
        s = s.toUpperCase();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if ("AEIOU".indexOf(ch) != -1)
                v++;
        }
        System.out.println("Vowels = " + v);
    }

    public static void main(String[] args) {
        Compute ob = new Compute();
        ob.work(4072);
        ob.work(84, 36);
        ob.work("Overloading");
    }
}
```

```
Digit sum = 13
HCF = 12
Vowels = 5
```

- Call | Arguments | Version run

- ob.work(4072) | one int | work(int)

- ob.work(84, 36) | two ints | work(int, int)

- ob.work("Overloading") | one String | work(String)

Question B. Design a class Area with three overloaded methods double area(...): one parameter r returns the area of a circle (take pi as 3.14); two parameters return the area of a rectangle; three sides a, b, c return the area of a triangle by Heron's formula. Print each result from main.

```
class Area {
    double area(double r) {
        return 3.14 * r * r;
    }

    double area(double l, double b) {
        return l * b;
    }

    double area(double a, double b, double c) {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    public static void main(String[] args) {
        Area ob = new Area();
        System.out.println("Circle: " + ob.area(5));
        System.out.println("Rectangle: " + ob.area(7.5, 4));
        System.out.println("Triangle: " + ob.area(13, 14, 15));
    }
}

// Output
Circle: 78.5
Rectangle: 30.0
Triangle: 84.0
```

```
// Question C. Overload void sum():
// sum(int n): 1 + 2 + ... + n
// sum(double x, int n): x/1 + x/2 + ... + x/n
class Series {
    void sum(int n) {
        int s = 0;
        for (int i = 1; i <= n; i++)
            s += i;
        System.out.println("Sum of first " + n + " numbers = " + s);
    }

    void sum(double x, int n) {
        double s = 0;
        for (int i = 1; i <= n; i++)
            s += x / i;
        System.out.println("Series sum = " + s);
    }

    public static void main(String[] args) {
        Series ob = new Series();
        ob.sum(10);
        ob.sum(6.0, 4);
    }
}

// Output
Sum of first 10 numbers = 55
Series sum = 12.5
```

Overloading questions very often wrap series or string tasks, so practise those bodies on their own as well: [series programs in Java](/icse-class-10-series-programs-java) and [ICSE Class 10 string programs](/icse-class-10-string-programs).

## How Java chooses an overloaded method, and what is not overloading

Java first looks for a version whose parameter types match the arguments exactly. If there is none, it allows a widening conversion, such as char to int or int to double. If two versions fit equally well, the program does not compile.

```
static void show(int x)    { System.out.println("int " + x); }
static void show(double x) { System.out.println("double " + x); }
static void show(String x) { System.out.println("String " + x); }
static void show(int x, double y) { System.out.println("int,double " + (x + y)); }
static void show(double x, int y) { System.out.println("double,int " + (x * y)); }
```

- Call | Output | Why

- show(7) | int 7 | Exact match for int

- show(7.0) | double 7.0 | Exact match for double

- show('A') | int 65 | No char version, so char widens to int, the nearest type

- show(9L) | double 9.0 | A long cannot shrink to int, but it can widen to double

- show(5.0f) | double 5.0 | float widens to double

- show("7") | String 7 | A String argument only fits the String version

- show(2, 3.5) | int,double 5.5 | The order of types picks the version

- show(2.5, 4) | double,int 10.0 | Same two types, other order, other version

```
int val(int x) { return x; }
double val(int x) { return x; }

// javac: error: method val(int) is
// already defined in class RetOnly
```

```
static void show(int x, double y) { }
static void show(double x, int y) { }
// ...
show(2, 3);

// javac: error: reference to show is ambiguous
```

Questions that ask for the output of an overloaded call are traced on [ICSE Java output questions](/icse-class-10-java-output-questions), and comparisons such as pure versus impure or static versus non-static are collected on [ICSE difference between questions](/icse-computer-difference-between-questions). Constructors can be overloaded with the same rules; that chapter is on [ICSE Class 10 constructors questions](/icse-class-10-constructors-questions).

## Pure and impure methods, call by value and call by reference in ICSE

A pure method returns a result that depends only on its parameters and changes nothing outside itself. An impure method changes something outside itself, such as a data member of the object or an array it was given. The syllabus asks for pass by value with programs, and pass by reference as a definition with an example.

```
class PureImpure {
    int total = 0;

    // pure: uses only its parameter, changes nothing outside
    int cube(int x) {
        return x * x * x;
    }

    // impure: changes the object's data member
    void addScore(int s) {
        total = total + s;
    }

    public static void main(String[] args) {
        PureImpure ob = new PureImpure();
        System.out.println(ob.cube(3) + " " + ob.cube(3));
        ob.addScore(40);
        ob.addScore(25);
        System.out.println("total = " + ob.total);
    }
}

// Output
27 27
total = 65
```

```
class Passing {
    static void swap(int a, int b) {
        int t = a;
        a = b;
        b = t;
        System.out.println("Inside: a = " + a + ", b = " + b);
    }

    static void doubleAll(int[] arr) {
        for (int i = 0; i < arr.length; i++)
            arr[i] = arr[i] * 2;
    }

    public static void main(String[] args) {
        int a = 30, b = 50;
        swap(a, b);
        System.out.println("After: a = " + a + ", b = " + b);
        int[] m = {3, 5, 7};
        doubleAll(m);
        System.out.println(m[0] + " " + m[1] + " " + m[2]);
    }
}

// Output
Inside: a = 50, b = 30
After: a = 30, b = 50
6 10 14
```

- Point | Call (pass) by value | Call (pass) by reference

- What the method receives | A copy of the value | A reference to the same object or array

- Types passed this way | Primitive types: int, double, char, boolean and the rest | Reference types: arrays and objects

- Change inside the method | Not seen by the caller | Changes to the object's contents are seen by the caller

- Example above | swap(a, b) | doubleAll(m)

Strictly, Java copies the reference itself, which is why assigning a new String or a new array to a parameter does not affect the caller. In the ICSE answer, the definitions in the table are what is expected. Ready-to-learn versions of these definitions are in [ICSE Computer Applications chapter-wise notes](/icse-computer-applications-notes).

## A marking checklist for a 15-mark overloading question

An overloading answer is easy to get mostly right and annoyingly easy to lose marks on. Tick these seven points before moving to the next question. They are the points our teachers mark against in class.

- Class name exactly as given. If the question says class Compute, it is Compute, not Overload or Main.

- Method name identical in every version. work, work and work. A version called work2 is not overloading at all.

- Parameter types and order as stated. If the question says (double x, int n), writing (int n, double x) is a different signature.

- Return type as stated. void versions print; returning versions return and let main print. Swapping the two changes what the question asked for.

- Each body correct on its own. Test each version with one small value you can check by hand, as the outputs above were checked.

- main creates an object and calls every version. Non-static methods need ob.work(...); a version that is never called shows nothing.

- Variable descriptions. Meaningful names or a short description of each variable, as the Section B instructions ask.

- Common slip | Result

- Two versions differ only in return type | Does not compile: "already defined"

- Method declared inside main | Does not compile (illegal start of expression): a method cannot be defined inside another method

- Non-static method called from main without an object | Does not compile: non-static method cannot be referenced from a static context

- Missing return in a non-void version | Does not compile: missing return statement

- Digit loop changes n, then n is printed in the message | Prints 0 instead of the number the user gave

The same checklist idea, applied to every kind of Section B answer, is on [how to score 100 in ICSE Computer Applications](/how-to-score-100-in-icse-computer-applications).

## Methods and overloading in the mini batch

The chapter is learnt by calling methods, watching which version runs, and writing full answers that are ticked against the checklist.

-
**Tuesday: guess the version** At the 5:30 PM IST class students see a set of overloaded headers and a list of calls, and write which version each call runs before BlueJ settles it.

-
**Tuesday: pure or impure?** Short methods are sorted into pure and impure, and value or reference, out loud, so the theory answers come out in the student's own words.

-
**Wednesday: one overloading question, timed** At the 8:00 PM IST class an original question in board shape is answered on paper in about 20 minutes, then typed and run.

-
**Ticked on screen** The teacher marks each answer against the seven points with the student watching, and the missed point becomes the first thing checked next week.

-
**Viva and mocks** Prototype, signature and overloading are favourite oral questions, so they are rehearsed before internal assessment, and overloading appears in the full two-hour mocks from December.

The oral side is covered on [ICSE Computer Applications viva questions](/icse-computer-applications-viva-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every overloading answer is ticked against the same seven-point checklist.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC, where whole programs are split into methods that pass values and objects to each other.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who wants to see how methods with clear inputs and outputs make larger programs easy to test.

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

**What is function overloading in Java ICSE Class 10?** Function overloading means writing two or more methods with the same name in one class, where each has a different parameter list: a different number of parameters, different types, or the same types in a different order. Java picks the version to run by matching the arguments in the call. It is how the Class 10 syllabus shows polymorphism.

**Can methods be overloaded by changing only the return type?** No. Java tells methods apart by their signature, which is the name and the parameter types. Two methods with the same name and parameters but different return types have the same signature, so javac reports that the method is already defined. The parameter list must differ.

**What is the difference between a method prototype and a method signature?** The prototype is the whole first line of the method: access specifier, return type, name and parameter list, for example public double area(double l, double b). The signature is only the name and the parameter types in order, area(double, double). Overloaded methods must have different signatures.

**What is the difference between pure and impure methods?** A pure method returns a value that depends only on its parameters and does not change anything outside itself, so calling it twice with the same arguments gives the same result. An impure method changes something outside itself, such as a data member of the object or the contents of an array passed to it.

**What is call by value and call by reference in ICSE?** In call by value the method receives a copy of a primitive value, so changes inside the method do not affect the caller. In call by reference the method receives a reference to an object or array, so changes made to its contents are seen by the caller. The syllabus asks for call by value with programs and call by reference as a definition with an example.

**What are actual and formal parameters?** Formal parameters are the variables named in the method header that receive values, such as l and b in area(double l, double b). Actual parameters are the values or variables written in the call, such as 7.5 and 4 in ob.area(7.5, 4). Their number, types and order must match a version of the method.

**Which method is called if there is no exact match for the argument?** Java widens the argument to the nearest type that has a version. A char argument goes to an int version before a double one, and a long or float argument goes to a double version. If two versions fit equally well after widening, the call is ambiguous and the program does not compile.

**What is the difference between static and non-static methods?** A static method belongs to the class and can be called without creating an object, like Math.sqrt. A non-static method belongs to each object and is called through an object, like ob.work(5). Calling a non-static method directly from the static main method, without an object, does not compile.

**How many marks is a function overloading question in ICSE?** An overloading program is usually set as a full Section B question, and each Section B question carries 15 marks; students answer any four of the six. Overloading also appears in Section A as short theory or output questions about which version is called.

**Do you teach user-defined methods in live classes?** Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, students predict which overloaded version runs, write a timed overloading answer and have it marked against a checklist on screen. Families who need another time can choose personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-user-defined-methods-overloading*
