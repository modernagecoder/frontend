---
title: "Menu Driven Program in Java ICSE: Switch Case, 2027"
description: "Menu driven program in Java for ICSE 2027: a Section B answer template with the default case, four switch case programs run in Java, and switch questions."
canonical: https://learn.modernagecoders.com/icse-class-10-menu-driven-programs
source: src/pages/icse-class-10-menu-driven-programs.html
updated: 2026-10-13
---

> A menu driven program in Java for ICSE Class 10 prints a list of options, reads the user's choice with Scanner, and uses a switch statement to run only the code for that choice. A full-mark Section B answer has five parts: the printed menu, the choice read in, one case per option, a break ending every case, and a default case printing a message such as "Invalid choice" for any other input. Stacked labels let 'A' and 'a' share code. Modern Age Coders teaches this live in a Tuesday and Wednesday mini batch in India, or one to one at the family's time.

## Menu driven program Section B template: five parts, in order

Write the same five parts every time, whatever the options do. The examiner looks for each part, and a missing default case or a missing break is the commonest way to drop marks on an otherwise working menu.

- Part | What to write | Why it matters

- 1. The menu | One System.out.println per option, numbered or lettered exactly as the question words them | The user, and the examiner, must see what each choice does

- 2. The choice | int ch = sc.nextInt(); or char ch = sc.next().charAt(0); | The type of ch decides how the case labels are written

- 3. One case per option | case 1: followed by the full logic for that option, including its own input | Each option is a small program; read only the data that option needs

- 4. A break per case | break; as the last line of every case | Without it, control falls into the next case and runs that code too

- 5. The default case | default: System.out.println("Invalid choice"); | The question almost always says "for an incorrect choice, display an appropriate message"; this is that message

### Program 1: the template filled in, a temperature menu

```
import java.util.Scanner;
class TempMenu {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Celsius to Fahrenheit");     // part 1: menu
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice: ");
        int ch = sc.nextInt();                              // part 2: choice
        switch (ch) {
            case 1:                                         // part 3: one case per option
                System.out.print("Temperature in Celsius: ");
                double c = sc.nextDouble();
                double f = 9.0 / 5 * c + 32;
                System.out.println("In Fahrenheit = " + f);
                break;                                      // part 4
            case 2:
                System.out.print("Temperature in Fahrenheit: ");
                double fa = sc.nextDouble();
                double ce = 5.0 / 9 * (fa - 32);
                System.out.println("In Celsius = " + ce);
                break;
            default:                                        // part 5
                System.out.println("Invalid choice");
        }
    }
}
```

- Variable | Type | Purpose

- ch | int | menu choice entered by the user

- c, f | double | Celsius input and Fahrenheit result (case 1)

- fa, ce | double | Fahrenheit input and Celsius result (case 2)

- sc | Scanner | reads keyboard input

```
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: 2
Temperature in Fahrenheit: 98.6
In Celsius = 37.0

1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: 1
Temperature in Celsius: 37
In Fahrenheit = 98.60000000000001

1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: 3
Invalid choice
```

## Switch case programs ICSE Class 10: a char menu with stacked case labels

Read the choice as a char with sc.next().charAt(0) and put each letter in single quotes. To accept both capital and small letters, stack two labels on one block: case 'G': case 'g':. This is deliberate fall-through, the one place it helps.

### Program 2: GCD or LCM of two numbers, chosen by a letter

```
import java.util.Scanner;
class GcdLcm {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("G. Greatest common divisor");
        System.out.println("L. Lowest common multiple");
        System.out.print("Enter G or L, then two numbers: ");
        char ch = sc.next().charAt(0);
        int a = sc.nextInt(), b = sc.nextInt();
        int x = a, y = b;
        while (y != 0) {          // Euclid: replace (x, y) by (y, x % y)
            int r = x % y;
            x = y;
            y = r;
        }
        int gcd = x;
        switch (ch) {
            case 'G':
            case 'g':
                System.out.println("GCD = " + gcd);
                break;
            case 'L':
            case 'l':
                System.out.println("LCM = " + (a * b / gcd));
                break;
            default:
                System.out.println("Wrong letter, enter G or L");
        }
    }
}
```

- Variable | Type | Purpose

- ch | char | the letter chosen, G or L in either case

- a, b | int | the two numbers entered

- x, y | int | working copies changed by Euclid's loop

- r | int | remainder of x divided by y

- gcd | int | greatest common divisor of a and b

```
G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: G 84 36
GCD = 12

G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: l 84 36
LCM = 252

G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: x 4 6
Wrong letter, enter G or L
```

### Program 3: a pattern or a series, the classic two-option menu

Many Section B menus pair a nested loop pattern with the sum of a series. Each case is then a complete small program; the switch only chooses between them.

```
import java.util.Scanner;
class PatSeries {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Symbol pattern");
        System.out.println("2. Sum of the series 2/3 + 4/5 + 6/7 + ...");
        System.out.print("Enter choice and n: ");
        int ch = sc.nextInt();
        int n = sc.nextInt();
        switch (ch) {
            case 1:
                for (int i = 1; i <= n; i++) {
                    for (int j = 1; j <= i; j++) {
                        if (j % 2 == 1)
                            System.out.print("* ");
                        else
                            System.out.print("# ");
                    }
                    System.out.println();
                }
                break;
            case 2:
                double s = 0;
                for (int k = 1; k <= n; k++)
                    s = s + (2.0 * k) / (2 * k + 1);
                System.out.println("Sum = " + s);
                break;
            default:
                System.out.println("Choose 1 or 2");
        }
    }
}
```

```
1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: 1 5
*
* #
* # *
* # * #
* # * # *

1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: 2 4
Sum = 3.212698412698413

1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: 7 3
Choose 1 or 2
```

The loop rules behind case 1 are set out on [pattern programs for ICSE](/icse-class-10-pattern-programs-java), and case 2 belongs to the family on
[series programs in Java for ICSE](/icse-class-10-series-programs-java). A menu over three number checks, spy, Niven and neon, is worked on
[special number programs in Java](/icse-special-number-programs-java).

## A repeating menu driven program: do-while, methods and an exit option

Wrap the menu and the switch in a do-while loop that runs until the exit choice is entered. do-while fits because the menu must appear at least once. Moving each option's work into a method keeps the switch short and shows user-defined methods at the same time.

### Program 4: a wallet with deposit, withdraw, balance and exit

```
import java.util.Scanner;
class Wallet {
    double balance = 0;
    void deposit(double amt) {
        balance = balance + amt;
        System.out.println("Deposited. Balance = " + balance);
    }
    void withdraw(double amt) {
        if (amt > balance)
            System.out.println("Not enough balance");
        else {
            balance = balance - amt;
            System.out.println("Withdrawn. Balance = " + balance);
        }
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Wallet w = new Wallet();
        int ch;
        do {
            System.out.println("1. Deposit  2. Withdraw  3. Balance  4. Exit");
            System.out.print("Choice: ");
            ch = sc.nextInt();
            switch (ch) {
                case 1:
                    System.out.print("Amount: ");
                    w.deposit(sc.nextDouble());
                    break;
                case 2:
                    System.out.print("Amount: ");
                    w.withdraw(sc.nextDouble());
                    break;
                case 3:
                    System.out.println("Balance = " + w.balance);
                    break;
                case 4:
                    System.out.println("Thank you");
                    break;
                default:
                    System.out.println("Invalid choice, try again");
            }
        } while (ch != 4);
    }
}
```

- Name | Type | Purpose

- balance | double | instance variable: money held in the wallet

- amt | double | parameter: amount to add or take out

- w | Wallet | the object whose methods are called

- ch | int | menu choice; 4 ends the loop

- deposit, withdraw | void methods | do the work of options 1 and 2

```
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 1
Amount: 500
Deposited. Balance = 500.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 2
Amount: 800
Not enough balance
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 2
Amount: 120
Withdrawn. Balance = 380.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 5
Invalid choice, try again
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 3
Balance = 380.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: 4
Thank you
```

### Single run or repeating? Read the question

- If the question says | Write

- "Write a menu driven program to ..." with no mention of repeating | One menu, one switch, no loop (Programs 1 to 3)

- "... until the user chooses to exit" or "the menu should be displayed repeatedly" | do-while around the menu and switch, with an exit case (Program 4)

- "Using a switch case and user-defined methods ..." | Each case calls a method; the method does the work and prints or returns the result

Methods that return values to a switch, and how to overload them, are covered on
[user-defined methods and overloading for ICSE Class 10](/icse-class-10-user-defined-methods-overloading). Bill programs that use a slab ladder instead of a menu are on
[slab and bill programs for ICSE](/icse-class-10-slab-and-bill-programs).

## Switch case questions ICSE: fall-through, stacked labels, conversions and errors

Short switch questions test four things: what a fragment prints when a break is missing, how to convert an if-else ladder into a switch, which selector types are allowed, and which case labels will not compile. Try each before opening the answer.

- Rewrite with switch: marks m (0 to 100) give grade A for 90 and above, B for 70 to 89, C for 60 to 69 and D below 60.

```
int m = 74;
char g;
switch (m / 10) {
    case 10:
    case 9: g = 'A'; break;
    case 8:
    case 7: g = 'B'; break;
    case 6: g = 'C'; break;
    default: g = 'D';
}
System.out.println(g);

// Output: B
```

- Predict the output.

```
int x = 3;
switch (x) {
    case 3: x += 2;
    case 4: x *= 2; break;
    case 5: x = 0;
}
System.out.println(x);

// Output: 10
```

- Predict the output. The default label does not have to come last.

```
int k = 7;
switch (k % 3) {
    default: System.out.print("D");
    case 0: System.out.print("Z"); break;
    case 2: System.out.print("T");
}

// Output: DZ
```

- Can a switch work on a String? Yes. Since Java 7 the selector can be a String, compared with equals behind the scenes.

```
String op = "MUL";
switch (op) {
    case "ADD": System.out.println(6 + 3); break;
    case "MUL": System.out.println(6 * 3); break;
    default: System.out.println("?");
}

// Output: 18
```

### Three switch statements that do not compile

- Fragment | javac 21 says | The rule

- double d = 2.0; switch (d) { case 2.0: ... } | selector type double is not allowed | With constant case labels, as in every ICSE switch, the selector may be byte, short, char, int, their wrappers, String or an enum; never double, float, long or boolean

- case 1: ... break; case 1: ... | duplicate case label | Each case value may appear only once in a switch

- int k = 1; ... case k: ... | constant expression required | A case label must be a constant or a literal, not a variable

### switch or if-else: the comparison asked for two marks

- switch | if-else ladder

- Tests one expression for equality with fixed values | Can test any condition, including ranges and several variables

- Works with int, char, String and similar types only | Works with any type, double and boolean included

- Needs break to stop fall-through into the next case | Runs only the first true branch; no break needed

- Natural fit for a menu of numbered or lettered choices | Natural fit for slabs, bands and compound conditions

More fragments like these, sorted by trap, are on [ICSE Computer Applications output questions](/icse-class-10-java-output-questions), and compile errors of every kind are practised on
[ICSE Class 10 Java error finding questions](/icse-class-10-java-error-finding-questions).

## Template first, then every choice tested: a menu lesson in the mini batch

The five-part template is learnt in the first lesson and then reused in every menu afterwards, so the class time goes on the logic inside each case and on testing.

### Template from memory
At the start of the Tuesday 5:30 PM IST class, students write the empty menu skeleton from memory in under two minutes: menu lines, choice, cases, breaks, default.

### Fill each case
The teacher sets a two- or three-option question in board wording. Each case is then planned as its own small program, with its own input and output.

### Test every path
At the Wednesday 8:00 PM IST class the programs are run in BlueJ with one input per option and one wrong choice, so a missing default or break shows up on screen.

### Marked like the board
Hand-written answers are marked against a scheme with the class watching: logic, syntax, the default message, comments and the variable table.

### Switch questions in rotation
Short fall-through, conversion and error questions return in the weekly Section A set so they stay fresh until the exam.

### Menus inside mock papers
From December, menu questions appear in full two-hour mock papers alongside the other Section B families.

The full list of Section B program families, with links to each, is on [ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where menu programs are written to one template and every wrong choice is tested.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC Computer Science, where menus front longer programs on arrays, strings and objects.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who likes building menus and wants to see stacks, queues and lists driven the same way.

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

**What is a menu driven program in Java?** It is a program that shows the user a list of options, reads which option they want, and then runs only the code for that option. In ICSE Class 10 the choice is read with Scanner and the branching is done with a switch statement, with a default case for a choice that is not on the list.

**How do you write a menu driven program using switch case in Java?** Print the menu with one println per option, read the choice into an int or char, then write switch (choice) with one case per option. Put the full logic for each option inside its case and end it with break. Finish with a default case that prints a message such as "Invalid choice".

**Why is the default case important in a menu driven program?** ICSE questions usually ask for an appropriate message when the user enters a wrong choice, and the default case is where that message goes. Leaving it out means a wrong choice silently does nothing, and the answer misses part of what the question asked.

**What happens if break is missing in a switch case?** Control falls through into the next case and runs its statements too, until it meets a break or the end of the switch. The case is chosen only once, at the top, so changing the variable inside a case does not redirect control. Stacking labels such as case 'A': case 'a': uses fall-through on purpose.

**Can we use a char in a switch statement in Java?** Yes. Read the choice with sc.next().charAt(0) and write each label in single quotes, such as case 'G':. To accept both capital and small letters, stack two labels on the same block of code.

**Can switch case be used with double or boolean in Java?** No. In the switch with constant case labels that ICSE uses, the selector may be byte, short, char, int, their wrapper classes, a String or an enum. A double, float, long or boolean selector does not compile, so use an if-else ladder for those.

**What is the difference between switch case and if-else in Java?** switch compares one expression with fixed constant values and needs break to stop fall-through. if-else can test any condition, including ranges and several variables, and runs only the first true branch. Menus suit switch; slabs and ranges suit if-else.

**How do you repeat a menu until the user chooses exit?** Put the menu and the switch inside a do-while loop and declare the choice variable before the loop. Add an exit option, for example case 4, and end the loop with while (choice != 4). do-while suits a menu because it must be shown at least once.

**Are menu driven programs asked in the ICSE Class 10 board exam?** Menu and switch case questions are a regular Section B shape, often pairing a pattern with a series or two calculations. Switch also appears in Section A as output and conversion questions. Practising the five-part template prepares a student for both.

**Do you teach menu driven programs in live classes?** Yes. In the ICSE mini batch students write menus to the five-part template by hand, then run every option and one wrong choice in BlueJ on a shared screen. Students who need more time can take personalised one to one classes at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-menu-driven-programs*
