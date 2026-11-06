---
title: "Pattern Programs ICSE Class 10 Java, Solved for 2027"
description: "Pattern programs for ICSE Class 10 Java, 2027: twelve star, number, letter and triangle patterns sorted by loop rule, each with code and real output."
canonical: https://learn.modernagecoders.com/icse-class-10-pattern-programs-java
source: src/pages/icse-class-10-pattern-programs-java.html
updated: 2026-10-13
---

> Pattern programs for ICSE Class 10 are Java programs that print a shape, such as a star triangle, a number pyramid or a letter triangle, using nested for loops. The outer loop runs once per row; the inner loop decides how many items that row holds; an optional first inner loop prints leading spaces; and the print statement decides which character appears. Answer three questions for any pattern: how many rows, how many items in row i, and what is printed at row i, column j. Modern Age Coders teaches pattern programs live in a Tuesday and Wednesday mini batch in India, or one to one at the family's time.

## Nested loop patterns in Java for ICSE: the four loop rules

Every pattern is a grid printed one row at a time, so every pattern program is an outer loop for the rows with one or two inner loops inside. What changes from shape to shape is only the limit of the inner loop, whether spaces come first, and what gets printed.

- Rule | The question it answers | Where it lives in the code | Typical form

- Rows | How many lines does the shape have? | The outer loop, ending with System.out.println() | for (i = 1; i <= n; i++)

- Columns | How many items does row i hold? | The limit of the inner loop, written in terms of i | j <= i, j <= n - i + 1, j <= 2 * i - 1

- Spaces | Does row i start further to the right? | A separate inner loop placed before the items | for (s = 1; s <= n - i; s++)

- Characters | What is printed at row i, column j? | The argument of System.out.print | "*", j, i, (i + j) % 2, (char) ('A' + j - 1)

### The three questions, in order

- Count the rows. That number is the outer loop's limit, usually n.

- Write down the item count for rows 1, 2 and 3. If it goes 1, 2, 3 the limit is i; if it goes 5, 4, 3 it is n - i + 1; if it goes 1, 3, 5 it is 2 * i - 1. If the left edge moves, count the spaces the same way.

- Look at one column. If the same column shows the same value on every row, print j. If a whole row repeats one value, print i. If nothing repeats, find the formula in i and j, or a test that picks the edge.

The full-mark answer is the same shape every time: Scanner input for n, the nested loops, a println() after each row and a variable description table. Here is the pyramid, written that way.

```
import java.util.Scanner;
class Pyramid {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {              // rows
            for (int s = 1; s <= n - i; s++)        // spaces
                System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++)    // stars
                System.out.print("*");
            System.out.println();                   // end of the row
        }
    }
}
```

- Variable | Type | Purpose

- n | int | number of rows, read from the user

- i | int | current row, 1 to n

- s | int | counts the leading spaces in row i

- j | int | counts the stars in row i

- sc | Scanner | reads input from the keyboard

```
Enter the number of rows: 5
    *
   ***
  *****
 *******
*********
```

## Triangle pattern ICSE: changing only the inner loop limit

A left-aligned triangle needs no spaces at all. Rows and characters stay fixed while the inner loop's limit decides the shape: j <= i grows, j <= n - i + 1 shrinks.

- Pattern | Items in rows 1, 2, 3 | Inner limit | Printed

- Star triangle | 1, 2, 3 | j <= i | "* "

- Shrinking count | 5, 4, 3 | j <= n - i + 1 | j

- Row repeat | 1, 2, 3 | j <= i | i

```
class RuleColumns {
    static void starTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++)
                System.out.print("* ");
            System.out.println();
        }
    }
    static void shrinkingCount(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i + 1; j++)
                System.out.print(j + " ");
            System.out.println();
        }
    }
    static void rowRepeat(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++)
                System.out.print(i + " ");
            System.out.println();
        }
    }
    public static void main(String args[]) {
        starTriangle(5);
        System.out.println("--");
        shrinkingCount(5);
        System.out.println("--");
        rowRepeat(5);
    }
}
```

```
*
* *
* * *
* * * *
* * * * *
--
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
--
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

### The most common slips with these three

- println inside the inner loop. Every item lands on its own line and the triangle becomes a column.

- n - i instead of n - i + 1. The first row loses one item and the last row is empty. Test the limit with i = 1 and i = n.

- Printing j where the row repeats. If each row shows one value repeated, the value comes from the outer counter, i.

## Star pattern program ICSE: right-aligned triangles, pyramids and the diamond

Add a spaces loop before the items. When row i has n - i spaces, row 1 starts furthest right and row n touches the margin, which turns a left triangle into a right-aligned one and, with 2i - 1 items, into the pyramid above.

```
class RuleSpaces {
    static void rightAligned(int n) {
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j <= i; j++)
                System.out.print("#");
            System.out.println();
        }
    }
    static void diamond(int n) {
        for (int i = 1; i <= n; i++) {              // top half, rows 1 to n
            for (int s = 1; s <= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {          // bottom half, rows n-1 down to 1
            for (int s = 1; s <= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j <= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
    }
    public static void main(String args[]) {
        rightAligned(5);
        System.out.println("--");
        diamond(4);
    }
}
```

```
    #
   ##
  ###
 ####
#####
--
   *
  ***
 *****
*******
 *****
  ***
   *
```

### How many spaces? A quick table for row i of n rows

- Shape | Spaces before row i | Items in row i | Item printed

- Right-aligned triangle | n - i | i | "#" with no space after it

- Pyramid (solid) | n - i | 2 * i - 1 | "*" with no space after it

- Pyramid (spaced stars) | n - i | i | "* ", the trailing space does the widening

- Inverted pyramid | i - 1 | 2 * (n - i) + 1 | "*"

- Diamond | pyramid of n rows, then inverted pyramid of n - 1 rows | as each half | "*"

Spaces are where most pattern answers go wrong under exam pressure, so in the class every student draws the grid on squared paper first and writes the space count beside each row. The same habit of counting each pass is drilled on
[loop programs in Java for ICSE Class 10](/icse-class-10-loop-programs-java).

## Number pattern Java Class 10: letters, 0 and 1, palindromes and hollow shapes

Once the rows, limits and spaces are right, the remaining work is the value printed at position (i, j). It can be a formula, a char made from a number, two loops that climb and then fall, or an if-else that picks the border.

- Pattern | What is printed at (i, j) | Why it works

- 0 1 triangle | (i + j) % 2 | i + j changes parity at each step along a row and each step down a column

- Letter triangle | (char) ('A' + j - 1) | 'A' is 65; adding j - 1 and casting back gives A, B, C

- Palindrome pyramid | j from 1 up to i, then j from i - 1 down to 1 | Two inner loops: one climbs, one falls, so each row reads the same both ways

- Hollow square | "* " when i or j is 1 or n, else two spaces | Only the border passes the test; the gap must be as wide as a star plus its space

- Word triangle | w.substring(0, i) | Row i shows the first i letters, so one loop is enough

```
class RuleChars {
    static void binaryTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++)
                System.out.print((i + j) % 2 + " ");
            System.out.println();
        }
    }
    static void letterTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++)
                System.out.print((char) ('A' + j - 1) + " ");
            System.out.println();
        }
    }
    static void palinPyramid(int n) {
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j <= i; j++)        // climb: 1 to i
                System.out.print(j);
            for (int j = i - 1; j >= 1; j--)    // descend: i-1 to 1
                System.out.print(j);
            System.out.println();
        }
    }
    static void hollowSquare(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
    static void wordTriangle(String w) {
        for (int i = 1; i <= w.length(); i++)
            System.out.println(w.substring(0, i));
    }
    public static void main(String args[]) {
        binaryTriangle(5);
        System.out.println("--");
        letterTriangle(5);
        System.out.println("--");
        palinPyramid(4);
        System.out.println("--");
        hollowSquare(5);
        System.out.println("--");
        wordTriangle("BLUEJ");
    }
}
```

```
0
1 0
0 1 0
1 0 1 0
0 1 0 1 0
--
A
A B
A B C
A B C D
A B C D E
--
   1
  121
 12321
1234321
--
* * * * *
*       *
*       *
*       *
* * * * *
--
B
BL
BLU
BLUE
BLUEJ
```

### Turn one pattern into another: practice changes

Each change below touches one rule only. Make it in BlueJ, predict the output first, then run it.

- In binaryTriangle, print (i + j + 1) % 2. The triangle now starts with 1 instead of 0.

- In letterTriangle, print (char) ('A' + i - 1). Every row repeats one letter: A, B B, C C C.

- In palinPyramid, remove the spaces loop. The rows become a left-aligned stack of palindromes.

- In hollowSquare, add || i == j to the test. A diagonal now crosses the square.

- In wordTriangle, print w.substring(w.length() - i). The word now builds from its last letter: J, EJ, UEJ.

Single letters printed with charAt instead of substring belong to the string family on
[ICSE Class 10 string programs](/icse-class-10-string-programs), and tracing what a pattern prints without running it is practised on
[ICSE Computer Applications output questions](/icse-class-10-java-output-questions).

## Pattern programs in the ICSE 2027 paper, and how they are marked

Patterns appear in two places: as a full Section B program, and very often as one part of a method overloading question, where one version of the method prints a pattern and the others do something else. They also turn up in Section A as short trace questions.

### Inside an overloading question
A recent pattern in board papers has been one method name with two or three parameter lists, one of which prints a number or symbol pattern. The pattern part is often the quickest marks in the question if the loop rules are second nature.

### As a menu choice
A switch menu may offer a pattern as option 1 and a series as option 2. The pattern code goes inside its case, followed by break, and the default case handles a wrong choice.

### As a trace in Section A
A short nested loop is shown and the student writes what it prints. The same rules work backwards: read the limits to find the item count per row.

### What earns the marks
Correct loops and limits, a println at the end of each row, sensible variable names, comments on what each loop does and the variable description table. A shape that is off by one row usually loses part of the logic marks.

### Check two rows by hand
Before moving on, trace row 1 and row n on the margin. Most wrong patterns are wrong at one end, and two quick traces catch both kinds of off-by-one.

### Keep it to for loops
A pattern can be printed with while loops, but for loops show the counter, the limit and the step on one line, which makes the logic easy for the examiner to follow.

Overloading answers with a pattern inside are worked on
[user-defined methods and overloading for ICSE Class 10](/icse-class-10-user-defined-methods-overloading), and how often the pattern-in-overloading question came up in recent years is mapped on
[ICSE Computer Applications previous year papers, solved](/icse-computer-applications-previous-year-papers-solved).

## From squared paper to BlueJ: a pattern lesson in the mini batch

Students see a new shape, plan it with the three questions, write it by hand and only then type it. The plan is the skill; typing is the check.

-
**A fresh shape on the shared screen** At the Tuesday 5:30 PM IST class the teacher shows a pattern nobody has seen before, often a small variation of one on this page.

-
**Rows, limits, spaces and value, written as a plan** Each student writes the four answers in a box before any code: the outer limit, the inner limit in terms of i, the space count and the value printed.

-
**Hand-written program, timed** The program is written on paper against a clock, with a variable description table, as it would be in the paper.

-
**Run in BlueJ, fixed in front of the group** The best and the most instructive wrong answers are typed and run. A tilted pyramid or a missing row is traced back to the one limit that caused it.

-
**Patterns inside full mock papers** From December, patterns appear inside overloading and menu questions in complete two-hour mock papers, marked the way the board marks.

The other program families taught the same way are listed on [ICSE Class 10 Java programs for practice](/icse-class-10-java-programs-practice); the next two to learn after patterns are
[series programs in Java](/icse-class-10-series-programs-java) and
[menu driven programs with switch case](/icse-class-10-menu-driven-programs).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch, where a new pattern is planned and run most weeks until nested loops feel routine.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students going on to ISC Computer Science, where nested loops drive matrices, sorting and longer programs.
- [Python for Teens](/courses/python-complete-masterclass-teens): For the student who likes shapes and wants to see the same loop rules written in Python after the board exam.

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

**How do I solve any pattern program in Java?** Answer three questions before coding. How many rows are there? That is the outer loop. How many items are in row i? That is the inner loop limit, written using i. What is printed at row i, column j? That is the print statement. If the shape is pushed to the right, add a spaces loop before the items. Then trace row 1 and the last row by hand.

**Are pattern programs important for ICSE Class 10?** Yes. They test nested loops, which are part of the 2027 Computer Applications syllabus, and they appear as Section B programs, as one part of method overloading questions and as Section A trace questions. A student who knows the loop rules can usually collect these marks quickly.

**What is the difference between print and println in pattern programs?** print leaves the cursor on the same line, so the items of one row sit side by side. println moves to a new line. In a pattern, print goes inside the inner loop and a single println goes after the inner loop, once per row. Putting println inside the inner loop prints every item on its own line.

**How do you print a star pyramid in Java?** Use an outer loop for i from 1 to n. Inside it, print n - i spaces, then 2 * i - 1 stars with no space between them, then call println. For n = 5 the first row has four spaces and one star, and the last row has nine stars and no spaces.

**How do you print a letter pattern such as A, AB, ABC in Java?** Print (char) ('A' + j - 1) inside the inner loop, where j runs from 1 to i. Adding a number to a char gives an int, so the cast is needed to turn the code back into a letter. Without it the program prints 65, 66 and 67.

**How do you print a 0 and 1 triangle pattern in Java?** Print (i + j) % 2 at row i, column j. The sum i + j changes between odd and even at every step, so the digits alternate along each row and each column. Use (i + j + 1) % 2 instead if the first row must start with 1.

**How do you print a hollow square or hollow triangle?** Loop over every position in the grid and use an if-else. Print the symbol when the position is on the border (first row, last row, first column or last column) and print blanks otherwise. The blank must be as wide as the symbol plus any space printed after it.

**Which loop is best for pattern programs?** The for loop, because the start, the limit and the step of each counter sit on one line, and a pattern is a fixed number of rows and items. While and do-while loops can print patterns too, but they make the limits harder to see and to mark.

**Is recursion used for patterns in ICSE 2027?** No. Recursion is not part of the ICSE Computer Applications syllabus for 2027. Every pattern the paper can ask is printed with nested for loops, sometimes inside a method that takes n, a character or a word as a parameter.

**Do you teach pattern programs in live classes?** Yes. In the ICSE mini batch a new pattern is planned on paper, written against the clock, then run and fixed in BlueJ on a shared screen. Students who need more time on nested loops can take personalised one to one classes at a time the family chooses.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [2D array programs](/icse-class-10-2d-array-programs), [Menu driven and switch case](/icse-class-10-menu-driven-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-pattern-programs-java*
