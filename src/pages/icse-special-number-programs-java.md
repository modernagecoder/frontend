---
title: "Special Number Programs in Java for ICSE Class 10, 2027"
description: "Special number programs in Java for ICSE: spy, Niven, duck, Armstrong, neon, magic and perfect, built on one digit template, every program run in Java 21."
canonical: https://learn.modernagecoders.com/icse-special-number-programs-java
source: src/pages/icse-special-number-programs-java.html
updated: 2026-10-13
---

> Special number programs in Java for ICSE test a number for a named property using its digits. A spy number has equal digit sum and digit product (1124); a Niven number is divisible by its digit sum (156); a neon number equals the digit sum of its square (9); an Armstrong number equals the sum of its digits each raised to the number of digits (153); a duck number has a zero after its first non-zero digit (4070). All of them use one loop: d = n % 10, use d, n = n / 10. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.

## Special numbers in Java ICSE: seventeen definitions in one table

Each special number is defined by one rule about its digits, factors or square. The example in every row was recomputed in Java. The last column names the change you make to the digit template for that number.

- Number | Rule in one sentence | Example, checked | What changes in the template

- Spy | Sum of digits equals product of digits | 1124: 1+1+2+4 = 8 = 1x1x2x4 | Keep a sum and a product

- Niven (Harshad) | Divisible by the sum of its digits | 156: sum 12, 156 / 12 = 13 | Sum, then n % sum == 0

- Neon | Sum of the digits of its square equals the number | 9: 81, 8+1 = 9 | Run the loop on n * n

- Armstrong | Sum of each digit raised to the number of digits equals the number | 153 = 1+125+27; 1634 | Count digits first, add Math.pow(d, k)

- Duck | Has a zero somewhere after its first non-zero digit | 4070 yes; 0045 no | Read as a String, test charAt

- Magic | Adding the digits again and again ends at 1 | 199, 19, 10, 1 | Repeat the sum while the result is above 9

- Perfect | Sum of its factors below itself equals the number | 28 = 1+2+4+7+14 | No digits: loop over factors

- Automorphic | Its square ends in the number itself | 76: 5776 | Compare n * n % 10k with n

- Disarium | Sum of each digit raised to its position from the left equals the number | 135 = 1+9+125 | Power k, then k-- each pass

- Special (Krishnamurthy) | Sum of the factorials of its digits equals the number | 145 = 1!+4!+5! | Add fact(d)

- Buzz | Divisible by 7 or ends in 7 | 49 and 107 | No loop: n % 7 and n % 10

- Pronic | Product of two consecutive integers | 56 = 7x8 | Loop i while i * (i + 1) <= n

- Sunny | The next number, n + 1, is a perfect square | 80: 81 = 9x9 | Math.sqrt(n + 1) has no fraction

- Tech | Even digit count; square of the sum of its two halves equals the number | 2025: (20+25)2 | Split with / and % by 10k/2

- Happy | Replacing it by the sum of the squares of its digits, again and again, ends at 1 | 19, 82, 68, 100, 1 | Add d * d, repeat

- Palindrome number | Reads the same reversed | 12321 | Build rev = rev * 10 + d

- Twisted prime | Prime, and still prime with its digits reversed | 13 and 31 | Reverse, then two prime checks

We do not attach board years to these numbers. A year tag is only worth printing once it has been checked against the actual paper, and the programs here are written to teach the method, not to copy a question. Schools sometimes define a number slightly differently (Magic and Duck vary most), so when a question gives its own definition, that definition wins.

## The digit-extraction template every number program uses

Yes. Take the last digit with n % 10, use it, and drop it with n / 10, until n is 0. Work on a copy so the original number is still there for the final comparison.

```
int t = n;            // copy: keep n for the answer
while (t > 0) {
    int d = t % 10;   // 1. take the last digit
    ... use d ...       // 2. sum, product, power, factorial
    t = t / 10;       // 3. drop the last digit
}
// now compare the result with n
```

- Pass | d = t % 10 | sum | product | t after

- start | none | 0 | 1 | 1124

- 1 | 4 | 4 | 4 | 112

- 2 | 2 | 6 | 8 | 11

- 3 | 1 | 7 | 8 | 1

- 4 | 1 | 8 | 8 | 0, loop ends

The dry run for 1124: sum 8 equals product 8, so 1124 is a spy number. Notice the product starts at 1 and the sum at 0; starting the product at 0 is the most common reason a spy program says no to every number.

### Copy before the loop
The loop destroys t. If you loop on n itself, the final sum == n compares against 0 and every answer is wrong.

### Right digit first
The template meets the digits from the right. That is fine for sums and products; for position-based rules such as Disarium, count the digits first and count down.

### Guard the zero
For Niven, a 0 input would mean dividing by a digit sum of 0. One n > 0 test in the condition avoids the crash.

## Spy number program, Niven number in Java and neon, as one menu program

Put the template into small methods, sumDigits, productDigits and countDigits, and each check becomes one line. A switch menu over three numbers is exactly the shape of many Section B questions, and it shows user-defined methods at the same time.

```
import java.util.Scanner;
class Digits {
    // The one template: take the last digit, use it, drop it.
    static int sumDigits(int n) {
        int s = 0;
        while (n > 0) {
            int d = n % 10;     // last digit
            s = s + d;          // use it
            n = n / 10;         // drop it
        }
        return s;
    }
    static int productDigits(int n) {
        int p = 1;
        while (n > 0) {
            p = p * (n % 10);
            n = n / 10;
        }
        return p;
    }
    static int countDigits(int n) {
        int c = 0;
        do {
            c++;
            n = n / 10;
        } while (n > 0);
        return c;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Spy  2. Niven  3. Neon");
        System.out.print("Enter choice and number: ");
        int ch = sc.nextInt();
        int n = sc.nextInt();
        switch (ch) {
            case 1:
                if (sumDigits(n) == productDigits(n))
                    System.out.println(n + " is a Spy number");
                else
                    System.out.println(n + " is not a Spy number");
                break;
            case 2:
                if (n > 0 && n % sumDigits(n) == 0)
                    System.out.println(n + " is a Niven number");
                else
                    System.out.println(n + " is not a Niven number");
                break;
            case 3:
                if (sumDigits(n * n) == n)
                    System.out.println(n + " is a Neon number");
                else
                    System.out.println(n + " is not a Neon number");
                break;
            default:
                System.out.println("Wrong choice");
        }
    }
}
```

- Variable | Type | Purpose

- n | int | the number to test (a copy inside each method)

- ch | int | menu choice, 1 to 3

- d | int | the last digit

- s, p, c | int | digit sum, digit product, digit count

```
1. Spy  2. Niven  3. Neon
Enter choice and number: 1 1124
1124 is a Spy number

1. Spy  2. Niven  3. Neon
Enter choice and number: 1 1236
1236 is not a Spy number

1. Spy  2. Niven  3. Neon
Enter choice and number: 2 156
156 is a Niven number

1. Spy  2. Niven  3. Neon
Enter choice and number: 3 9
9 is a Neon number
```

### Spy numbers in a range, and why neon numbers are rare

A favourite variation asks for every number of a kind between two limits. Wrap the check in a for loop. The same methods do the work.

```
class RangeScan {
    static int sumDigits(int n) {
        int s = 0;
        while (n > 0) { s += n % 10; n /= 10; }
        return s;
    }
    static int productDigits(int n) {
        int p = 1;
        while (n > 0) { p *= n % 10; n /= 10; }
        return p;
    }
    public static void main(String args[]) {
        System.out.print("Spy numbers from 100 to 1500: ");
        int c = 0;
        for (int n = 100; n <= 1500; n++)
            if (sumDigits(n) == productDigits(n)) { System.out.print(n + " "); c++; }
        System.out.println("(" + c + ")");
        System.out.print("Neon numbers below 10000: ");
        for (int n = 1; n < 10000; n++)
            if (sumDigits(n * n) == n) System.out.print(n + " ");
        System.out.println();
    }
}
```

```
Spy numbers from 100 to 1500: 123 132 213 231 312 321 1124 1142 1214 1241 1412 1421 (12)
Neon numbers below 10000: 1 9
```

## Armstrong number program ICSE, duck number, magic and perfect numbers

Armstrong needs the digit count before the loop. Duck needs the number as text, because an int cannot remember leading zeros. Magic repeats the template inside another loop. Perfect does not use digits at all; it loops over possible factors.

### Armstrong number for any number of digits

```
import java.util.Scanner;
class ArmstrongN {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int k = String.valueOf(n).length();     // number of digits
        int t = n, sum = 0;
        while (t > 0) {
            int d = t % 10;
            sum = sum + (int) Math.pow(d, k);   // digit raised to k
            t = t / 10;
        }
        if (sum == n)
            System.out.println(n + " is an Armstrong number");
        else
            System.out.println(n + " is not an Armstrong number (sum = " + sum + ")");
    }
}
```

- Variable | Type | Purpose

- n | int | the number entered

- k | int | number of digits

- t | int | working copy of n

- d | int | the last digit

- sum | int | sum of d to the power k

```
Enter a number: 1634
1634 is an Armstrong number
Enter a number: 371
371 is an Armstrong number
Enter a number: 1220
1220 is not an Armstrong number (sum = 33)
```

### Duck number, read as a String

```
import java.util.Scanner;
class Duck {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        String s = sc.next();                   // read as text so leading zeros survive
        int i = 0;
        while (i < s.length() && s.charAt(i) == '0')
            i++;                                // skip the leading zeros
        boolean duck = false;
        for (int j = i + 1; j < s.length(); j++) {
            if (s.charAt(j) == '0') {
                duck = true;                    // a zero after the first real digit
                break;
            }
        }
        System.out.println(s + (duck ? " is a Duck number" : " is not a Duck number"));
    }
}
```

- Variable | Type | Purpose

- s | String | the number as typed

- i | int | index of the first non-zero digit

- j | int | loop counter after that digit

- duck | boolean | true once a later zero is found

```
Enter the number: 4070
4070 is a Duck number
Enter the number: 0703
0703 is a Duck number
Enter the number: 0045
0045 is not a Duck number
Enter the number: 5678
5678 is not a Duck number
```

### Magic and perfect numbers in one program

```
import java.util.Scanner;
class MagicPerfect {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        // Magic: keep adding the digits until one digit is left
        int m = n;
        while (m > 9) {
            int s = 0;
            while (m > 0) {
                s = s + m % 10;
                m = m / 10;
            }
            m = s;
        }
        System.out.println(n + (m == 1 ? " is" : " is not") + " a Magic number (ends at " + m + ")");
        // Perfect: the factors below n add up to n
        int f = 0;
        for (int i = 1; i < n; i++)
            if (n % i == 0)
                f = f + i;
        System.out.println(n + (f == n ? " is" : " is not") + " a Perfect number (factor sum = " + f + ")");
    }
}
```

- Variable | Type | Purpose

- n | int | the number entered

- m | int | repeated digit sum

- s | int | digit sum of one round

- f | int | sum of factors below n

- i | int | possible factor

```
Enter a number: 199
199 is a Magic number (ends at 1)
199 is not a Perfect number (factor sum = 1)
Enter a number: 28
28 is a Magic number (ends at 1)
28 is a Perfect number (factor sum = 28)
Enter a number: 50
50 is not a Magic number (ends at 5)
50 is not a Perfect number (factor sum = 43)
```

### Special and Disarium numbers: two sums in one pass

```
import java.util.Scanner;
class SpecialDisarium {
    static int fact(int d) {                    // d! for one digit
        int f = 1;
        for (int i = 2; i <= d; i++)
            f = f * i;
        return f;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int k = String.valueOf(n).length();     // position of the last digit
        int t = n, sf = 0, sp = 0;
        while (t > 0) {
            int d = t % 10;
            sf = sf + fact(d);                  // Special: add d!
            sp = sp + (int) Math.pow(d, k);     // Disarium: d to the power of its position
            k--;                                // the next digit sits one place to the left
            t = t / 10;
        }
        System.out.println("Sum of digit factorials = " + sf + (sf == n ? ", Special number" : ", not Special"));
        System.out.println("Sum of positional powers = " + sp + (sp == n ? ", Disarium number" : ", not Disarium"));
    }
}
```

- Variable | Type | Purpose

- n | int | the number entered

- k | int | position of the current digit

- t, d | int | working copy, last digit

- sf | int | sum of digit factorials

- sp | int | sum of positional powers

- f, i | int | factorial and its counter, in fact()

```
Enter a number: 145
Sum of digit factorials = 145, Special number
Sum of positional powers = 142, not Disarium
Enter a number: 135
Sum of digit factorials = 127, not Special
Sum of positional powers = 135, Disarium number
Enter a number: 89
Sum of digit factorials = 403200, not Special
Sum of positional powers = 89, Disarium number
```

Number palindromes and digit reversal also appear with the other loop programs on
[loop programs in Java for ICSE Class 10](/icse-class-10-loop-programs-java), and the method-writing rules used above are on
[user-defined methods and overloading for ICSE Class 10](/icse-class-10-user-defined-methods-overloading).

## Template first, then a new number every week

Students who memorise seventeen programs forget them by March. Students who own the template can write an eighteenth number they have never seen. The live classes are built round that second habit.

-
**The template, traced by hand** In the first class the digit loop is dry run on paper for two or three numbers until each student can fill a pass table without help.

-
**A new number every Tuesday** At 5:30 PM IST the mentor gives a definition, sometimes one from the table above and sometimes an unfamiliar one, and the group writes the program from the template against a timer.

-
**Marked against the scheme on screen** Answers are marked in front of everyone: the copy before the loop, the right starting values, the comparison, the comments and the variable table each earn their share.

-
**Run with edge cases on Wednesday** At 8:00 PM IST the programs are run in BlueJ with 0, a single digit, a number with a zero inside and a number with leading zeros, so the weak spots show before the exam.

-
**Worksheets, doubt time and mock papers** Each fortnight ends with a worksheet of unseen numbers; from December the same questions arrive inside full timed papers.

Number programs often sit inside a menu with two choices; that shape is covered on
[ICSE Class 10 menu driven programs](/icse-class-10-menu-driven-programs). The full list of program families is on
[ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where every special number is written from one digit template and run in BlueJ.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students moving to ISC Computer Science, where these numbers come back as class methods and with recursion.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who asks why a range scan is slow and wants to count the steps properly.

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

**What is a spy number in Java?** A spy number is one whose digit sum equals its digit product. For 1124, the sum 1 + 1 + 2 + 4 is 8 and the product 1 x 1 x 2 x 4 is also 8, so it is a spy number. In Java, keep a sum starting at 0 and a product starting at 1, and fill both with the same digit loop.

**What is a Niven number in Java?** A Niven number, also called a Harshad number, is divisible by the sum of its digits. 156 has digit sum 12, and 156 divided by 12 is exactly 13, so it is a Niven number. Find the digit sum with the template, then test n % sum == 0, making sure the number is above 0 first.

**What is a duck number in ICSE?** A duck number has at least one zero after its first non-zero digit, such as 4070 or 0703. Leading zeros alone do not count, so 0045 is not a duck number. Read the input as a String with next(), skip the leading zeros, then look for a zero in the rest with charAt.

**How do you write an Armstrong number program for ICSE?** Count the digits first and call the count k. Then use the digit loop to add each digit raised to the power k with (int) Math.pow(d, k). If the total equals the original number, it is an Armstrong number. 153 works with k = 3 and 1634 with k = 4.

**What is a neon number?** A neon number equals the sum of the digits of its square. 9 squared is 81, and 8 + 1 is 9, so 9 is a neon number. Run the digit-sum loop on n * n and compare with n. Between 1 and 9999 the only neon numbers are 1 and 9.

**What is the difference between a magic number and a happy number?** Both repeat a step until a single value is reached. A magic number adds its digits again and again until one digit is left, and that digit must be 1, as in 199, 19, 10, 1. A happy number adds the squares of its digits each time, as in 19, 82, 68, 100, 1.

**What is a perfect number in Java?** A perfect number equals the sum of its factors other than itself. 28 is perfect because 1 + 2 + 4 + 7 + 14 is 28; 6 and 496 are the other common examples. In Java, loop i from 1 to n minus 1, add i whenever n % i == 0, then compare the total with n.

**What is the difference between Armstrong and Disarium numbers?** Both raise digits to powers. An Armstrong number raises every digit to the same power, the number of digits, as in 153. A Disarium number raises each digit to its own position from the left, as in 135, which is 1 + 3 squared + 5 cubed.

**Do I have to memorise every special number program?** No. Memorise the definitions and one template: take d = n % 10, use d, then n = n / 10, all on a copy of n. Every program on this page is that loop with one line changed. If the exam gives an unfamiliar number with its definition, the same template still works.

**Which special number programs come in the ICSE board exam?** Number-property programs are a regular Section B shape, and the question normally states the definition it wants. We have not printed year tags here because we only tag a year after checking the real paper. Practise the template with all seventeen definitions and any of them is manageable.

**Do you teach special number programs in live classes?** Yes. In the mini batch on Tuesday and Wednesday evenings in India, students write a new number from the template each week, have it marked against the scheme on screen and then run it in BlueJ with edge cases. Families abroad, or who need another time, can take personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-special-number-programs-java*
