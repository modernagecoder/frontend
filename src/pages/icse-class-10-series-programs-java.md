---
title: "Series Programs in Java ICSE Class 10, Solved for 2027"
description: "Series programs in Java for ICSE 2027: sum of series, Fibonacci and factorial series grouped by loop pattern, each print and sum version run in Java."
canonical: https://learn.modernagecoders.com/icse-class-10-series-programs-java
source: src/pages/icse-class-10-series-programs-java.html
updated: 2026-10-13
---

> Series programs in Java for ICSE Class 10 print the first n terms of a sequence or find the sum of a series using one loop. They fall into five loop patterns: the term is a formula in the counter (1/i²), it is built from the previous term (1, 11, 111), it is the sum of the two before it (Fibonacci), the sign alternates, or a factorial or running total grows inside the loop. Use double for fractions and long for large terms. Modern Age Coders teaches them live twice a week in a small ICSE batch in India, with private one to one lessons as the other option.

## Series generation in BlueJ: the five loop patterns

Write the first four terms in a column, then ask where each term comes from. If you can work out term i from i alone, it is pattern 1. If you need the term before it, it is pattern 2. Two terms before it: pattern 3. A sign that flips: pattern 4. A product or total that keeps growing: pattern 5.

- Pattern | Example series | The line that makes the term | On this page

- 1. Term from the counter | 2, 5, 10, 17, ... | term = i * i + 1; | Q2

- 2. Term from the previous term | 1, 11, 111, 1111, ... | t = t * 10 + 1; | Q3

- 3. Term from the two previous terms | 0, 1, 1, 2, 3, 5, ... | c = a + b; a = b; b = c; | Q4

- 4. Alternating sign | 1 - 2 + 3 - 4 + ... | s = s + sign * i; sign = -sign; | Q5

- 5. Running factorial or total | 1! + 2! + 3! + ... | f = f * i; s = s + f; | Q5

### Print version or sum version?

The loop is the same in both. A print version calls System.out.print(term + " ") inside the loop. A sum version declares s = 0 before the loop, adds each term with s = s + term, and prints s once, after the loop. Printing s inside the loop is the most common slip: the answer then shows every partial sum instead of one total.

- Choose | When | Why

- int | Whole-number terms that stay small | Exact and simple

- long | Terms that grow fast: 1, 11, 111, powers, factorials | 13! is already past the int limit of about 2.1 billion

- double | Any term with division or Math.pow | 1 / (i * i) in int arithmetic is 0 for every i above 1

## Sum of series program ICSE: when the term is a formula in i

If term i can be written straight from i, put that formula inside a for loop from 1 to n. Use a decimal point (1.0) or Math.pow whenever the term divides, so Java works in double.

```
class FromCounter {
    static void printTerms(int n) {              // 2, 5, 10, 17, ...
        for (int i = 1; i <= n; i++)
            System.out.print(i * i + 1 + " ");
        System.out.println();
    }
    static void sumTerms(int n) {                // 1 + 1/4 + 1/9 + ... + 1/n^2
        double s = 0;
        for (int i = 1; i <= n; i++)
            s = s + 1.0 / (i * i);
        System.out.println("Sum = " + s);
    }
    static void oddPowers(double x, int n) {     // x + x^3 + x^5 + ... n terms
        double s = 0;
        for (int i = 1; i <= n; i++)
            s = s + Math.pow(x, 2 * i - 1);
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        printTerms(6);
        sumTerms(4);
        oddPowers(2, 4);
    }
}
```

```
2 5 10 17 26 37
Sum = 1.4236111111111112
Sum = 170.0
```

### Finding the formula for term i

- Write i above each term. For 2, 5, 10, 17 the pairs are (1, 2), (2, 5), (3, 10), (4, 17).

- Compare with i, i², 2i and 2i - 1. Each term is one more than i², so term = i * i + 1.

- For powers, look at the exponents. x, x³, x⁵ have exponents 1, 3, 5, which is 2i - 1.

- Check term 4 with the formula before writing the loop. If it is wrong, the whole series is wrong.

Math.pow, Math.sqrt and the other Math methods a series may need, with their return types, are on
[Math library methods for ICSE Class 10](/icse-class-10-math-library-methods).

## Series built from the previous term: 1, 11, 111 and friends

Keep the current term in a variable outside the loop and update it once per pass. The update line is the whole idea: multiply by 10 and add a digit, multiply by a ratio, or add a growing gap.

```
class FromPrevious {
    static void ones(int n) {                    // 1, 11, 111, ...
        long t = 0;
        for (int i = 1; i <= n; i++) {
            t = t * 10 + 1;
            System.out.print(t + " ");
        }
        System.out.println();
    }
    static void sumTwos(int n) {                 // 2 + 22 + 222 + ...
        long t = 0, s = 0;
        for (int i = 1; i <= n; i++) {
            t = t * 10 + 2;
            s = s + t;
        }
        System.out.println("Sum = " + s);
    }
    static void times3(int n) {                  // 1, 3, 9, 27, ...
        long t = 1;
        for (int i = 1; i <= n; i++) {
            System.out.print(t + " ");
            t = t * 3;
        }
        System.out.println();
    }
    static void growingGaps(int n) {             // 1, 2, 4, 7, 11, ...
        int t = 1;
        for (int i = 1; i <= n; i++) {
            System.out.print(t + " ");
            t = t + i;
        }
        System.out.println();
    }
    public static void main(String args[]) {
        ones(5);
        sumTwos(4);
        times3(7);
        growingGaps(8);
    }
}
```

```
1 11 111 1111 11111
Sum = 2468
1 3 9 27 81 243 729
1 2 4 7 11 16 22 29
```

- Pass i | t = t * 10 + 2 | s = s + t

- 1 | 2 | 2

- 2 | 22 | 24

- 3 | 222 | 246

- 4 | 2222 | 2468

The growing-gaps series adds 1, then 2, then 3: the gap is the counter itself. Series like this are easy to misread as a formula in i; the term table in Q1 tells you quickly that the differences, not the terms, follow i. The loop habits behind all of this are practised on
[loop programs in Java for ICSE Class 10](/icse-class-10-loop-programs-java).

## Fibonacci series Java ICSE: two variables that slide along

Each Fibonacci term is the sum of the two before it, starting 0 and 1. Keep the last two terms in a and b; each pass prints a, makes c = a + b, then slides the pair one place: a takes b, and b takes c. No recursion is needed, and recursion is not in the ICSE 2027 syllabus.

```
import java.util.Scanner;
class Fibonacci {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many terms? ");
        int n = sc.nextInt();
        int a = 0, b = 1, sum = 0;
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            sum = sum + a;
            int c = a + b;      // next term
            a = b;              // slide the pair along
            b = c;
        }
        System.out.println();
        System.out.println("Sum of the terms = " + sum);
    }
}
```

- Variable | Type | Purpose

- n | int | number of terms to print

- a, b | int | the current term and the one after it

- c | int | the next term, a + b

- sum | int | total of the printed terms

- i | int | loop counter, 1 to n

```
How many terms? 10
0 1 1 2 3 5 8 13 21 34
Sum of the terms = 88
```

### Fibonacci terms up to a limit: while, not for

When the question gives a largest value instead of a number of terms, the count is unknown, so use while with the limit as the condition.

```
class FibLimit {
    public static void main(String args[]) {
        int a = 0, b = 1;
        while (a <= 100) {
            System.out.print(a + " ");
            int c = a + b;
            a = b;
            b = c;
        }
        System.out.println();
    }
}
```

```
0 1 1 2 3 5 8 13 21 34 55 89
```

Checking whether one given number is a Fibonacci number, and other single-number tests, sit with the number families on
[special number programs in Java for ICSE](/icse-special-number-programs-java).

## Factorial series ICSE and alternating signs, in one loop each

For a sign that flips, keep a variable sign that starts at 1 and is multiplied by -1 every pass, or test whether i is even. For a factorial series, never write a second loop to work out each factorial: multiply the running factorial by i, and it is ready for this term.

```
class SignSeries {
    static void plusMinus(int n) {               // 1 - 2 + 3 - 4 + ... n terms
        int s = 0, sign = 1;
        for (int i = 1; i <= n; i++) {
            s = s + sign * i;
            sign = -sign;
        }
        System.out.println("Sum = " + s);
    }
    static void powerOverIndex(double x, int n) { // x - x^2/2 + x^3/3 - ...
        double s = 0;
        for (int i = 1; i <= n; i++) {
            double term = Math.pow(x, i) / i;
            if (i % 2 == 0)
                s = s - term;
            else
                s = s + term;
        }
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        plusMinus(7);
        plusMinus(10);
        powerOverIndex(2, 4);
    }
}
```

```
Sum = 4
Sum = -5
Sum = -1.3333333333333335
```

```
class FactSeries {
    static void sumOfFactorials(int n) {         // 1! + 2! + 3! + ... + n!
        long f = 1, s = 0;
        for (int i = 1; i <= n; i++) {
            f = f * i;           // f is now i!
            s = s + f;
        }
        System.out.println("Sum = " + s);
    }
    static void expSeries(double x, int n) {     // 1 + x/1! + x^2/2! + ... n terms after 1
        double term = 1, s = 1;
        for (int i = 1; i <= n; i++) {
            term = term * x / i;  // builds x^i / i! from the last term
            s = s + term;
        }
        System.out.println("Sum = " + s);
    }
    static void runningTotals(int n) {           // 1 + (1+2) + (1+2+3) + ...
        int p = 0, s = 0;
        for (int i = 1; i <= n; i++) {
            p = p + i;           // p is now 1 + 2 + ... + i
            s = s + p;
        }
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        sumOfFactorials(5);
        expSeries(1, 10);
        runningTotals(5);
    }
}
```

```
Sum = 153
Sum = 2.7182818011463845
Sum = 35
```

- i | f = f * i | s = s + f

- 1 | 1 | 1

- 2 | 2 | 3

- 3 | 6 | 9

- 4 | 24 | 33

- 5 | 120 | 153

Overloading questions often carry a series in one of their versions; that shape is covered on
[user-defined methods and overloading for ICSE Class 10](/icse-class-10-user-defined-methods-overloading), or as one option of a switch menu on
[menu driven programs for ICSE](/icse-class-10-menu-driven-programs).

## Term table, code, hand check, BlueJ: a series lesson in the mini batch

The hard part of a series question is not the loop but reading the series correctly. Lessons spend their time there.

-
**A new series in board wording** At the Tuesday 5:30 PM IST class, students get a series they have not met, written the way the paper writes it, sometimes with an x to read in.

-
**The term table** Each student writes i beside the first four terms and names the loop pattern, then writes the one line that makes the term.

-
**Hand-written program and a hand sum** The program is written on paper with a variable description table, and the sum of the first three terms is worked by hand as the check value.

-
**Run in BlueJ on a shared screen** At the Wednesday 8:00 PM IST class the programs are run. If BlueJ disagrees with the hand sum, the group traces the loop to find whether the term, the type or the print position was wrong.

-
**Series inside overloading and full mocks** Later in the year the same families come back as parts of whole mock papers, sat in two hours and marked question by question.

Every other Section B family has its own page, linked from [ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice), and nested loops that print shapes instead of numbers are on
[pattern programs for ICSE](/icse-class-10-pattern-programs-java).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): The full Class 9 and 10 syllabus in small groups; every series starts as a term table and ends as a BlueJ run.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): After Class 10, ISC brings series back inside longer programs, and recursion joins the toolkit there.
- [CBSE Class 10 Maths board exam prep](/courses/cbse-class-10-maths-board-exam-prep-course): For the student who finds arithmetic progressions and powers shaky and wants them steady before writing series in code.

Families also look at [Java Programming for Teens](/courses/java-programming-masterclass-for-teens), [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college), [Python for Teens](/courses/python-complete-masterclass-teens), [AI and ML for Teens](/courses/ai-ml-masterclass-teens), [Git and GitHub for Teens](/courses/git-github-version-control-course-for-teens), [Hackathon Prep for Teens](/courses/hackathon-prep-for-teens-coding-ai-build-innovate-win-course), [Full-Stack Web for Teens](/courses/full-stack-web-development-teens-masterclass), [JavaScript for Teens](/courses/javascript-course-for-teens-beginners-interactive-web).

## Batch or personalised, and the fees

Option 1, fixed batch (for families in India): Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, live online, up to six students. Option 2, personalised one to one: days and time chosen by the family; outside India the ICSE course runs one to one only, two private classes a week. Monthly billing, no admission fee, stop at any month end. Fees are shown on the page in the visitor's own currency. The first class is a free demo; a paid priority demo (about 45 to 60 minutes, written skill report afterwards) is also available.

## Class times outside India

- Where you live | Time difference | Usual class window, local time | Format

- India (IST)every Indian city | IST | Tue 5:30 PM, Wed 8:00 PM | Mini batch or 1-on-1

- United Arab EmiratesDubai, Sharjah | 1 h 30 min behind India | 3:00 PM to 9:00 PM | Personalised 1-on-1

- Indonesia and ThailandWest Java, Bangkok area | 1 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

- SingaporeSingapore | 2 h 30 min ahead of India | 3:30 PM to 9:00 PM | Personalised 1-on-1

## Frequently asked questions

**How do you write a series program in Java?** Write the first four terms with their positions 1, 2, 3, 4, and find where each term comes from: a formula in the position, the previous term, the two previous terms, a flipping sign or a growing factorial. Then write one for loop from 1 to n that makes the term and either prints it or adds it to a sum.

**How do you find the sum of a series in Java?** Declare a sum variable before the loop and set it to 0. Inside the loop, work out the current term and add it with s = s + term. Print s once, after the loop ends. Use double for s whenever any term involves division or Math.pow.

**How do you print the Fibonacci series in Java without recursion?** Start with a = 0 and b = 1. In each pass of a loop print a, then set c = a + b, a = b and b = c. For the first n terms use a for loop; for all terms up to a limit use a while loop that runs as long as a has not passed the limit. Recursion is not needed and is not in the ICSE 2027 syllabus.

**How do you write a factorial series program in Java?** Keep a running factorial f that starts at 1 and becomes f * i in each pass, so it equals i! for the current term. Add f, or a term built from it, to the sum. Do not write a separate inner loop for each factorial. Use long, because factorials pass the int limit at 13!.

**Why does my series program print 0 for every term?** Usually because of integer division. In 1 / (i * i) both sides are int, so the answer is 0 for every i above 1. Write 1.0 / (i * i) or cast to double, and make the sum variable a double.

**How do you handle alternating plus and minus signs in a series?** Keep an int sign that starts at 1, multiply each term by sign, and set sign = -sign at the end of every pass. Or test i % 2: add the term when i is odd and subtract it when i is even. Both are accepted.

**How do you print the series 1, 11, 111, 1111 in Java?** Keep a term t that starts at 0, and in each pass set t = t * 10 + 1 and print it. The same idea with + 2 gives 2, 22, 222. Use long, because these terms grow by a factor of ten each time.

**Which is better for series, a for loop or a while loop?** Use for when the number of terms n is given, because the counter doubles as the term position. Use while when the series must stop at a value, such as all terms up to 100, because the number of passes is not known in advance.

**Are series programs important for ICSE Class 10?** They matter a lot. Series test loops, data types and careful reading at once. They come as whole Section B programs, and also as one branch of a larger overloading or menu program. Getting the term right is most of the work.

**Do you teach series programs in live classes?** We do. Each week the small ICSE batch meets a new series, reads it with a term table, writes the program by hand, checks a hand sum and runs it in BlueJ on a shared screen. Private one to one lessons are the alternative when batch times clash.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-series-programs-java*
