---
title: "Wrapper Classes ICSE Class 10: Every Method, Run in Java"
description: "Wrapper classes for ICSE Class 10, 2027: autoboxing and unboxing, Integer.parseInt and all twelve listed methods with exact outputs, plus two programs."
canonical: https://learn.modernagecoders.com/icse-class-10-wrapper-and-library-classes
source: src/pages/icse-class-10-wrapper-and-library-classes.html
updated: 2026-11-06
---

> Wrapper classes in ICSE Class 10 are the library classes that wrap each primitive type in an object: Byte, Short, Integer, Long, Float, Double, Character and Boolean, all in java.lang. The 2027 syllabus lists twelve methods: parseInt, parseLong, parseFloat and parseDouble, which turn a String into a number, and the Character methods isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase, isWhitespace, toLowerCase and toUpperCase. Autoboxing converts a primitive to its wrapper automatically; unboxing does the reverse. Our live classes drill all of it in a small Tuesday and Wednesday evening group in India, with personalised one to one lessons for any family that needs another hour.

## What are wrapper classes in Java? Library classes ICSE definitions

A wrapper class is a library class that stores one value of a primitive type inside an object and gives methods to work with it. A library class is a ready-made class that comes with Java, so a program can use it without writing it.

- Primitive type | Wrapper class | Spelling trap

- byte | Byte | Capital B

- short | Short | Capital S

- int | Integer | Not "Int": the full word

- long | Long | Capital L

- float | Float | Capital F

- double | Double | Capital D

- char | Character | Not "Char": the full word

- boolean | Boolean | Capital B

### Four facts that answer most one-mark questions

- All eight wrapper classes are in the package java.lang, which every program imports automatically, so no import line is needed.

- Two names differ from their primitive: int becomes Integer and char becomes Character. The other six only gain a capital letter.

- Wrapper classes are needed because some parts of Java work only with objects, and because the conversion and testing methods live in these classes.

- String is a library class too, but it is not a wrapper class: there is no primitive type called string.

Primitive and composite types, which this chapter leans on, are defined on
[class as the basis of all computation](/icse-class-10-class-as-basis-of-computation),
and the other big library class in the syllabus, Math, has its own page:
[Math library methods for ICSE Class 10](/icse-class-10-math-library-methods).

## Autoboxing and unboxing in Java, with output

Autoboxing is the automatic conversion of a primitive value into an object of its wrapper class; unboxing is the automatic conversion of a wrapper object back into its primitive value. Java does both by itself whenever one type is used where the other is expected.

```
Integer a = 25;          // autoboxing: int 25 into an Integer
int b = a + 5;           // unboxing: a gives back 25
System.out.println(b);

Double d = 4.5;          // autoboxing
double e = d * 2;        // unboxing, then multiply
System.out.println(e);

Character c = 'k';       // autoboxing a char
char ch = c;             // unboxing
System.out.println(Character.toUpperCase(ch));

Boolean flag = true;
System.out.println(!flag);

// Output
30
9.0
K
false
```

- Point | Autoboxing | Unboxing

- Direction | Primitive to wrapper object | Wrapper object to primitive

- Example | Integer a = 25; | int b = a;

- Happens when | A primitive is stored where an object is expected | An object is used in arithmetic or stored in a primitive

- Who does it | The Java compiler, automatically | The Java compiler, automatically

Two methods outside the twelve on the syllabus list appear in some textbooks: Integer.valueOf("40") returns an Integer object (so Integer.valueOf("40") / 3 prints 13 after unboxing), and Integer.toString(70) returns the String "70". They are useful to recognise, but parseInt is the one to learn for the paper.

## Integer.parseInt ICSE: the four parse methods with exact outputs

Integer.parseInt(s) converts a String of digits into an int, so the value can be used in arithmetic. parseLong, parseFloat and parseDouble do the same for long, float and double. Every result below was printed by Java 21.

- Syllabus method | Code | Output | Note

- int parseInt(String s) | Integer.parseInt("472") + 8 | 480 | Converted, then added. Compare "472" + 8, which joins to 4728

- | Integer.parseInt("-35") * 2 | -70 | A leading minus sign is allowed

- | Integer.parseInt("007") | 7 | Leading zeros are dropped; the result is a number, not text

- | Integer.parseInt("12.5") | NumberFormatException | A decimal point is not allowed in an int

- | Integer.parseInt(" 42") | NumberFormatException | A space is not a digit: trim() first

- long parseLong(String s) | Long.parseLong("9876543210") + 1 | 9876543211 | Too big for int, fine for long

- float parseFloat(String s) | Float.parseFloat("2.5") * 2 | 5.0 | A float result prints with a decimal point

- double parseDouble(String s) | Double.parseDouble("3") / 2 | 1.5 | "3" becomes 3.0, so the division is real

- | Double.parseDouble("-7.25") | -7.25 | Sign and decimal point both accepted

The exact message Java 21 printed for the bad input was java.lang.NumberFormatException: For input string: "12.5". An exam answer only needs the name: the program stops with a NumberFormatException because the String is not a valid int.

```
char dg = '8';
System.out.println(dg - '0' + 1);
System.out.println(Integer.parseInt("" + dg) + 1);

// Output
9
9
```

### When a program needs parseInt

- A number arrives inside a String, for example a record such as Riya,78,91 read with nextLine().

- Digits are pulled out of a longer String with substring and must then be added or compared.

- A digit character has been collected into a String and needs its numeric value.

## Character class methods in Java for ICSE, each with its output

Eight Character methods are listed: six tests that return boolean and two converters that return char. All are called on the class, as Character.isDigit(ch), never on a variable.

- Syllabus method | Code | Output | Note

- boolean isDigit(char ch) | Character.isDigit('7') + " " + Character.isDigit('x') | true false | Only 0 to 9 count

- boolean isLetter(char ch) | Character.isLetter('g') + " " + Character.isLetter('9') | true false | Either case counts as a letter

- boolean isLetterOrDigit(char ch) | Character.isLetterOrDigit('@') + " " + Character.isLetterOrDigit('Q') | false true | Symbols and spaces give false

- boolean isLowerCase(char ch) | Character.isLowerCase('b') + " " + Character.isLowerCase('B') + " " + Character.isLowerCase('5') | true false false | A digit is neither lower nor upper case

- boolean isUpperCase(char ch) | Character.isUpperCase('Z') + " " + Character.isUpperCase('#') | true false | Symbols are not upper case

- boolean isWhitespace(char ch) | Character.isWhitespace(' ') + " " + Character.isWhitespace('\n') + " " + Character.isWhitespace('_') | true true false | Space, tab and new line count; underscore does not

- char toLowerCase(char ch) | Character.toLowerCase('M') + " " + Character.toLowerCase('m') | m m | A lowercase letter comes back unchanged

- char toUpperCase(char ch) | Character.toUpperCase('#') | # | Anything that is not a letter comes back unchanged

### The return-type trap: char plus int

- Code | Output | Why

- System.out.println(Character.toUpperCase('a') + 1); | 66 | 'A' is code 65; a char plus an int is an int

- System.out.println((char) (Character.toUpperCase('a') + 1)); | B | The cast turns 66 back into a character

- System.out.println("" + Character.toUpperCase('a') + 1); | A1 | The empty String arrives first, so both values are joined

```
String s = "Board 2027 Prep";
String t = "";
for (int i = 0; i < s.length(); i++) {
    char x = s.charAt(i);
    if (Character.isUpperCase(x))
        t = t + Character.toLowerCase(x);
    else if (Character.isLowerCase(x))
        t = t + Character.toUpperCase(x);
    else
        t = t + x;            // digits and spaces kept
}
System.out.println(t);

// Output: bOARD 2027 pREP
```

### How to remember the eight

- Six start with is and answer a yes or no question, so they return boolean.

- Two start with to and hand back a changed character, so they return char.

- isWhitespace has a lower-case s in "space"; isLetterOrDigit has capital O and D.

- None of them changes the variable passed in; store the result if you need it.

These eight methods do most of the work in sentence programs, which are collected on [ICSE Class 10 string programs](/icse-class-10-string-programs), and longer fragments to trace, sorted by trap, sit on [the output questions page](/icse-class-10-java-output-questions).

## Library classes ICSE programs: two Section B questions, solved and run

Section B rarely says "use wrapper classes". It asks you to classify characters or to pull numbers out of text, and the Character tests and parseInt are the tools that make the answer short. Both questions below are original and set in the class-design format.

Question 1. Define a class CharCensus with data members text (String) and upper, lower, digits, spaces, others (int). Write a default constructor to initialise them, void accept() to read a sentence, void count() to count the uppercase letters, lowercase letters, digits, whitespace characters and other characters using Character class methods, and void display(). In main, make one object and invoke the three methods in order.

```
import java.util.Scanner;
class CharCensus {
    String text;   // the sentence entered
    int upper;     // uppercase letters
    int lower;     // lowercase letters
    int digits;    // digit characters
    int spaces;    // whitespace characters
    int others;    // everything else

    CharCensus() {                 // default constructor
        text = "";
        upper = 0;
        lower = 0;
        digits = 0;
        spaces = 0;
        others = 0;
    }

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        text = sc.nextLine();
    }

    void count() {
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            if (Character.isUpperCase(ch))
                upper++;
            else if (Character.isLowerCase(ch))
                lower++;
            else if (Character.isDigit(ch))
                digits++;
            else if (Character.isWhitespace(ch))
                spaces++;
            else
                others++;
        }
    }

    void display() {
        System.out.println("Uppercase letters : " + upper);
        System.out.println("Lowercase letters : " + lower);
        System.out.println("Digits            : " + digits);
        System.out.println("Spaces            : " + spaces);
        System.out.println("Other characters  : " + others);
    }

    public static void main(String args[]) {
        CharCensus ob = new CharCensus();
        ob.accept();
        ob.count();
        ob.display();
    }
}
```

- Variable | Type | Purpose

- text | String | the sentence entered

- upper, lower | int | counts of uppercase and lowercase letters

- digits | int | count of digit characters

- spaces | int | count of whitespace characters

- others | int | count of all remaining characters

- ch | char | the character being tested

- i | int | loop counter over the sentence

- ob | CharCensus | the object created in main

```
Enter a sentence:
ICSE Exam on 17 March, 2027: Room B-12!
Uppercase letters : 8
Lowercase letters : 12
Digits            : 8
Spaces            : 7
Other characters  : 4
```

Question 2. A record is typed as a name followed by marks, separated by commas, for example Riya,78,91,66,84. Define a class MarksLine with data members line, name (String) and total, count, high (int). Write a parameterized constructor MarksLine(String l) to store the record and initialise the other members, void extract() to separate the name and convert each mark with Integer.parseInt(), and void display() to print the name, the number of marks, the total, the highest mark and the average to one decimal place.

```
import java.util.Scanner;
class MarksLine {
    String line;    // the record, for example Riya,78,91,66
    String name;    // the part before the first comma
    int total;      // sum of the marks
    int count;      // number of marks found
    int high;       // highest mark

    MarksLine(String l) {          // parameterized constructor
        line = l.trim() + ",";      // a comma at the end closes the last part
        name = "";
        total = 0;
        count = 0;
        high = 0;
    }

    void extract() {
        String part = "";
        for (int i = 0; i < line.length(); i++) {
            char ch = line.charAt(i);
            if (ch != ',') {
                part = part + ch;
            } else {
                if (name.equals(""))
                    name = part;                       // first part is the name
                else {
                    int m = Integer.parseInt(part.trim()); // text to int
                    total = total + m;
                    count++;
                    if (m > high)
                        high = m;
                }
                part = "";
            }
        }
    }

    void display() {
        double avg = (double) total / count;
        System.out.println("Name    : " + name);
        System.out.println("Marks   : " + count);
        System.out.println("Total   : " + total);
        System.out.println("Highest : " + high);
        System.out.println("Average : " + Math.round(avg * 10) / 10.0);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name and marks separated by commas:");
        String s = sc.nextLine();
        MarksLine ob = new MarksLine(s);
        ob.extract();
        ob.display();
    }
}
```

- Variable | Type | Purpose

- line | String | the record with a closing comma added

- name | String | the student's name

- total, count, high | int | sum, number and highest of the marks

- l | String | constructor parameter: the record

- part | String | the piece being built between commas

- m | int | one mark, converted by parseInt

- avg | double | average of the marks

- s, sc, ob | String, Scanner, MarksLine | input line, keyboard reader, the object

```
Enter name and marks separated by commas:
Riya,78, 91,66,84
Name    : Riya
Marks   : 4
Total   : 319
Highest : 91
Average : 79.8

Enter name and marks separated by commas:
Kabir,55,60
Name    : Kabir
Marks   : 2
Total   : 115
Highest : 60
Average : 57.5
```

The constructor rules both programs rely on are on [constructors ICSE Class 10 questions](/icse-class-10-constructors-questions), and every other kind of Section B program is gathered in [the Java programs practice hub](/icse-class-10-java-programs-practice).

## Wrapper class questions with answers, and how the batch drills them

Original questions in the shapes of Question 1 and Question 2. Answer each on paper, then open it.

- Name the wrapper class of char.
Answer Character.

- Which package contains the wrapper classes?
Answer java.lang, imported automatically.

- Give the output: Character.isLetterOrDigit('$')
Answer false. The symbol is neither a letter nor a digit.

- What is the return type of Character.toUpperCase(ch)?
Answer char.

- Define autoboxing with one example.
Answer The automatic conversion of a primitive value into an object of its wrapper class, as in Integer n = 45;.

- Give the output: System.out.println(Integer.parseInt("15") + Integer.parseInt("5") + "0");
Answer 200. The two ints add to 20 first, then "0" is joined on.

- Write a statement to convert the String s = "62.5" into a double.
Answer double d = Double.parseDouble(s);

- State one situation in which Integer.parseInt throws an exception.
Answer When the String is not a valid whole number, for example "12.5", "4a" or a String with a space in it.

-
**Twelve methods recalled on Tuesday** Tuesday evening (5:30 PM IST) opens with every student writing all twelve signatures from memory, return type first, and the group checks spelling and case together.

-
**Outputs traced, then run** Fragments like the tables above get a written answer first; then the mentor types each into BlueJ, and 66 against B settles itself in front of everyone.

-
**A Character program on Wednesday** Wednesday evening (8:00 PM IST) is for one sentence or record program, written by hand with its variable description table, marked against the scheme on screen, then typed and tested with awkward input.

-
**Mock papers from December** Wrapper questions return inside full two-hour papers, marked like the board, with every lost mark discussed in doubt time.

More one-mark questions across every chapter are on [ICSE Computer Applications MCQ questions](/icse-computer-applications-mcq-questions).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): A small Class 9 and 10 group where every string program leans on Character tests and every record program on parseInt.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): ISC Computer Science keeps these methods and puts them inside longer text and number problems, so the habit pays off twice.
- [Python for Teens](/courses/python-complete-masterclass-teens): Python calls the same ideas int() and isdigit(); a good second language once the board paper is behind you.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**What are wrapper classes in Java ICSE Class 10?** Wrapper classes are library classes that hold a primitive value inside an object and provide methods for it. There is one for each primitive type: Byte, Short, Integer, Long, Float, Double, Character and Boolean. They are in java.lang, so no import is needed.

**What are library classes in ICSE?** Library classes are ready-made classes supplied with Java, grouped into packages, which a program can use without writing them. For ICSE Class 10 the ones that matter are the wrapper classes, Math, String and Scanner. The Library classes chapter itself covers the wrapper classes and autoboxing.

**What is autoboxing and unboxing in Java?** Autoboxing is Java automatically converting a primitive value into an object of its wrapper class, as in Integer n = 45. Unboxing is the reverse, an Integer object automatically giving back its int, as in int k = n + 1. No method call is written for either.

**What does Integer.parseInt do in ICSE?** Integer.parseInt(String s) converts a String containing a whole number into an int, so it can be used in arithmetic. Integer.parseInt("472") + 8 gives 480, while "472" + 8 gives 4728. If the String is not a valid whole number, such as "12.5", the program stops with a NumberFormatException.

**Which Character class methods are in the ICSE syllabus?** Eight: isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase and isWhitespace, which return boolean, and toLowerCase and toUpperCase, which return char. Each takes one char and is called on the class, as in Character.isDigit(ch).

**Which wrapper class methods must I learn for ICSE 2027?** The syllabus lists twelve: parseInt, parseLong, parseFloat and parseDouble, and the eight Character methods isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase, isWhitespace, toLowerCase and toUpperCase. Learn each one's return type as well as what it does.

**Why does Character.toUpperCase('a') + 1 print 66?** toUpperCase returns the char A, whose code is 65. Adding the int 1 to a char gives an int, so 66 is printed. To print the letter B, cast the result back: (char) (Character.toUpperCase('a') + 1).

**Is String a wrapper class?** No. String is a library class in java.lang, but it is not a wrapper class, because there is no primitive type called string for it to wrap. The eight wrapper classes match the eight primitive types exactly.

**What is the difference between Integer and int?** int is a primitive type that stores a whole number directly. Integer is a wrapper class whose object holds an int and offers methods such as parseInt. Java converts between them automatically through autoboxing and unboxing.

**Do you teach wrapper classes in live classes?** Yes. The small group meets twice a week, 5:30 PM IST on Tuesday and 8:00 PM IST on Wednesday; the twelve methods are recalled, their outputs predicted, and Character and parseInt programs written and checked in BlueJ. If those evenings clash with school, personalised one to one lessons go at a time you pick.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-wrapper-and-library-classes*
