---
title: "2D Array Programs ICSE Class 10: Java Matrix Programs 2027"
description: "2D array programs for ICSE Class 10: row, column and diagonal sums, largest element and search, each run in Java 21 with sample input and output."
canonical: https://learn.modernagecoders.com/icse-class-10-2d-array-programs
source: src/pages/icse-class-10-2d-array-programs.html
updated: 2026-11-06
---

> 2D array programs in ICSE Class 10 use a double dimensional array, int[][] a = new int[m][n], filled by two nested for loops: the outer loop walks the rows and the inner loop walks the columns. The 2027 syllabus asks students to accept a matrix, display it in matrix format, and find the sum of a row, a column and the left and right diagonals. The left diagonal holds the cells where row equals column; the right diagonal holds the cells where row plus column equals n minus 1. Modern Age Coders teaches these programs live in a Tuesday and Wednesday mini batch in India, or one to one.

## What is a double dimensional array in ICSE Class 10?

A double dimensional array is a table of values of one type, reached with two indexes: the first picks the row, the second picks the column. Both start at 0, so a 3 by 4 array has rows 0 to 2 and columns 0 to 3.

```
// 1. declare with a size: every cell starts at 0
int[][] q = new int[2][3];

// 2. declare and initialise in one line
int[][] p = {{4, 1, 7}, {2, 9, 5}};

// 3. accept from the keyboard
for (int i = 0; i < m; i++)
    for (int j = 0; j < n; j++)
        a[i][j] = sc.nextInt();

System.out.println(p.length + " " + p[0].length + " " + p[1][2]);
System.out.println(q[1][1]);

// Output:
// 2 3 5
// 0
```

- Syllabus item (2027) | What a program must do | On this page

- Declaration and initialisation | Create the array with a size or with a list of values | Above

- Accepting data | Fill every cell with nested loops and Scanner | Programs 1 to 5

- Display in matrix format | Print one row per line, values spaced | Program 1

- Sum of a row and of a column | Fix one index, loop the other | Programs 1 and 5

- Left and right diagonal sums | One loop, two index rules | Program 2

- Accessing elements | Visit each cell to compare or match it | Programs 3 and 4

Sorting, binary search and passing an array as a composite type are listed against single dimensional arrays only, so they are practised on [ICSE sorting and searching programs](/icse-class-10-sorting-and-searching-programs), not here. Matrix multiplication and transposing are not in the Class 10 list either; a student who meets them in an old guidebook can leave them for ISC.

## Sum of diagonal elements in Java: the two index rules

In a square matrix of order n, a cell is on the left diagonal when its row index equals its column index, and on the right diagonal when row plus column equals n minus 1. Read the two diagrams below once and the rules stop being something to memorise.

Order 4 (even): L is the left diagonal, R the right. No cell is on both.

- i \ j | 0 | 1 | 2 | 3

- 0 | [0][0] L | [0][1] | [0][2] | [0][3] R

- 1 | [1][0] | [1][1] L | [1][2] R | [1][3]

- 2 | [2][0] | [2][1] R | [2][2] L | [2][3]

- 3 | [3][0] R | [3][1] | [3][2] | [3][3] L

Order 5 (odd): the centre cell [2][2] belongs to both diagonals.

- i \ j | 0 | 1 | 2 | 3 | 4

- 0 | L |  |  |  | R

- 1 |  | L |  | R |

- 2 |  |  | L R |  |

- 3 |  | R |  | L |

- 4 | R |  |  |  | L

- Diagonal | Also called | Index rule | Cell in row i | Loops needed

- Left | Main or principal diagonal | i == j | a[i][i] | One

- Right | Secondary diagonal | i + j == n - 1 | a[i][n - 1 - i] | One

- Both together | Sum of both diagonals | Add both, then remove the centre once if n is odd | a[n / 2][n / 2] is the shared cell | One

```
import java.util.Scanner;

class DiagonalSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Order of the square matrix: ");
        int n = sc.nextInt();
        int[][] a = new int[n][n];
        System.out.println("Enter " + (n * n) + " numbers:");
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                a[i][j] = sc.nextInt();
        int left = 0, right = 0;
        for (int i = 0; i < n; i++) {
            left += a[i][i];            // row = column
            right += a[i][n - 1 - i];   // row + column = n - 1
        }
        System.out.println("Left diagonal sum = " + left);
        System.out.println("Right diagonal sum = " + right);
        int both = left + right;
        if (n % 2 == 1)
            both -= a[n / 2][n / 2];    // centre is on both diagonals
        System.out.println("Both diagonals together = " + both);
        if (left == right)
            System.out.println("The two diagonal sums are equal");
        else
            System.out.println("The two diagonal sums are not equal");
    }
}
```

```
// Sample input 1
4
5 1 2 8
3 6 9 0
4 7 2 1
6 2 3 4

// Output
Left diagonal sum = 17
Right diagonal sum = 30
Both diagonals together = 47
The two diagonal sums are not equal

// Sample input 2
3
4 9 2
3 5 7
8 1 6

// Output
Left diagonal sum = 15
Right diagonal sum = 15
Both diagonals together = 25
The two diagonal sums are equal
```

A nested loop with if (i == j) and if (i + j == n - 1) inside also gives 17 and 30 for the first input, and an examiner will accept it. It checks all sixteen cells to use eight, so the single loop above is the cleaner answer to learn. Loop counting of this kind is drilled on [loop programs in Java for ICSE Class 10](/icse-class-10-loop-programs-java).

## Row and column sum program in Java, in board format

To add a row, hold the row index still and move the column index; to add a column, do the reverse. Program 1 does both, and prints the matrix in matrix format with each row total at the end of its line and the column totals underneath.

```
import java.util.Scanner;

class RowColumnSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Rows: ");
        int m = sc.nextInt();
        System.out.print("Columns: ");
        int n = sc.nextInt();
        int[][] a = new int[m][n];
        System.out.println("Enter " + (m * n) + " numbers row by row:");
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                a[i][j] = sc.nextInt();
        int grand = 0;
        // each row, then its sum at the end of the line
        for (int i = 0; i < m; i++) {
            int rowSum = 0;
            for (int j = 0; j < n; j++) {
                System.out.print(a[i][j] + "\t");
                rowSum += a[i][j];
            }
            System.out.println("| " + rowSum);
            grand += rowSum;
        }
        // column sums: outer loop over j, inner over i
        for (int j = 0; j < n; j++) {
            int colSum = 0;
            for (int i = 0; i < m; i++)
                colSum += a[i][j];
            System.out.print(colSum + "\t");
        }
        System.out.println("| " + grand);
    }
}
```

```
// Sample input
3
4
2 7 1 5
4 0 6 3
8 2 9 1

// Output
2	7	1	5	| 15
4	0	6	3	| 13
8	2	9	1	| 20
14	9	16	9	| 48
```

- Variable | Type | Purpose

- m, n | int | Number of rows and columns

- a | int[][] | The matrix entered by the user

- i, j | int | Row and column index

- rowSum | int | Total of the current row, reset for each row

- colSum | int | Total of the current column, reset for each column

- grand | int | Total of every element

That variable description table is the habit Section B rewards: the paper asks for programs written with variable descriptions or mnemonic names so the logic is clear. Why it matters for the last few marks is on [how to score 100 in ICSE Computer Applications](/how-to-score-100-in-icse-computer-applications).

## Matrix programs ICSE Java: largest element, search and the highest row

Three more shapes use the same two loops: compare every cell, match every cell, or total each row into a single dimensional array and compare the totals. Each is a full program, run with the input shown.

```
import java.util.Scanner;

class LargestSmallest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] t = new int[3][4];
        System.out.println("Enter 12 temperatures, 3 rows of 4:");
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 4; j++)
                t[i][j] = sc.nextInt();
        int max = t[0][0], min = t[0][0];
        int maxR = 0, maxC = 0, minR = 0, minC = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 4; j++) {
                if (t[i][j] > max) {
                    max = t[i][j];
                    maxR = i;
                    maxC = j;
                }
                if (t[i][j] < min) {
                    min = t[i][j];
                    minR = i;
                    minC = j;
                }
            }
        }
        System.out.println("Largest = " + max + " at row " + maxR + ", column " + maxC);
        System.out.println("Smallest = " + min + " at row " + minR + ", column " + minC);
    }
}

// Sample input
31 28 35 30
26 33 29 24
36 27 32 25

// Output
Largest = 36 at row 2, column 0
Smallest = 24 at row 1, column 3
```

```
import java.util.Scanner;

class MatrixSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] g = new int[4][4];
        System.out.println("Enter 16 numbers:");
        for (int i = 0; i < 4; i++)
            for (int j = 0; j < 4; j++)
                g[i][j] = sc.nextInt();
        System.out.print("Number to search: ");
        int key = sc.nextInt();
        int found = 0;
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                if (g[i][j] == key) {
                    System.out.println("Found at [" + i + "][" + j + "]");
                    found++;
                }
            }
        }
        if (found == 0)
            System.out.println(key + " is not in the matrix");
        else
            System.out.println(key + " occurs " + found + " time(s)");
    }
}

// Sample input: the 16 numbers, then 8
3 8 1 6
7 2 8 4
9 5 0 8
1 6 3 2
8

// Output
Found at [0][1]
Found at [1][2]
Found at [2][3]
8 occurs 3 time(s)

// Same matrix, searching 11
11 is not in the matrix
```

```
import java.util.Scanner;

class HighestRow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] marks = new int[4][3];
        int[] total = new int[4];
        System.out.println("Marks of 4 students in 3 tests:");
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 3; j++) {
                marks[i][j] = sc.nextInt();
                total[i] += marks[i][j];
            }
        }
        int best = 0;
        for (int i = 1; i < 4; i++)
            if (total[i] > total[best])
                best = i;
        for (int i = 0; i < 4; i++)
            System.out.println("Student " + (i + 1) + " total = " + total[i]);
        System.out.println("Highest total: student " + (best + 1));
    }
}
```

```
// Sample input
62 70 58
81 77 90
74 88 69
90 65 80

// Output
Student 1 total = 190
Student 2 total = 248
Student 3 total = 231
Student 4 total = 235
Highest total: student 2
```

When a question asks the user to choose between several of these tasks, the programs sit inside a switch; that wrapper is practised on [menu driven programs for ICSE Class 10](/icse-class-10-menu-driven-programs). The full map of program families is on [ICSE Java programs practice](/icse-class-10-java-programs-practice).

## Double dimensional array ICSE: the slips that cost marks

Most wrong matrix answers come from one of five slips, and four of them still compile. Each row below was tried in Java on a 3 by 4 matrix holding 1 to 12, whose true total is 78.

- Slip | What happens | The fix

- Inner loop bound written as j < a.length | Runs over 3 columns, not 4; the total comes out as 54 with no error | Use a[i].length or the column count n for j

- i <= a.length as the row test | Crashes: Index 3 out of bounds for length 3 | Indexes stop one short of the length: use <

- rowSum declared once, above both loops | Each "row total" keeps the earlier rows inside it | Set rowSum = 0 inside the outer loop, before the inner loop

- Indexes swapped, a[j][i], in a column sum | Adds rows instead of columns, or crashes when m and n differ | The first index is always the row: column total is a[i][j] with j fixed outside

- Centre counted twice in "sum of both diagonals" | For an odd order the answer is too large by the centre value | Subtract a[n / 2][n / 2] once when n is odd

- println inside the inner loop when printing a matrix | Every value on its own line: not matrix format | print inside, one println() after the inner loop

### Name the class as asked
If the question says "define a class Matrix", the class is called Matrix. Write the exact name, and keep any method names the question gives letter for letter.

### Print the matrix before the answer
When a question says "display the matrix and its diagonal sums", the display is part of the marks. Print it in rows, then the sums with a label each.

### Dry run a 3 by 3 first
Before trusting an n by n loop, trace it on a small odd order by hand. Odd orders expose the centre cell; even orders hide it.

Short 2D array questions also turn up in Section A as outputs, such as asking for m.length or one cell of an initialised array. Those are on [ICSE Java output questions](/icse-class-10-java-output-questions), and compile-error versions are on [find the error questions](/icse-class-10-java-error-finding-questions).

## From index diagram to running program, in two classes a week

Students learn the index rules on paper, then prove them in BlueJ, then write the whole program against the clock.

-
**Tuesday: fill in the grid** At the 5:30 PM IST class each student gets a blank 4 by 4 and 5 by 5 grid and marks the cells a loop will visit. Disagreements are settled by printing the indexes in BlueJ.

-
**Tuesday: break it on purpose** The teacher changes one bound or one index in a working program and the group predicts what goes wrong before it runs: a wrong total, a crash, or a matrix on one line.

-
**Wednesday: a full program in 20 minutes** At the 8:00 PM IST class, students write a matrix program from a board-style question on paper, with a variable description table, then type it and run it on the sample input.

-
**Marked like Section B** Each answer is marked on screen against the shape a 15-mark question rewards: class and method names as asked, correct input, correct logic, correct display, clear variables.

-
**Mixed into full mocks** From December a matrix question sits inside complete two-hour papers, so the student chooses it, or skips it, as they would on the day.

Printable sets of matrix questions with answers are collected on [ICSE Computer Applications worksheets](/icse-computer-applications-worksheets), and the syllabus as a whole is laid out on [the ICSE Computer Applications syllabus explained](/icse-class-10-computer-applications-syllabus-explained).

## The courses behind this page

- [ICSE Computer Applications, Java with BlueJ](/courses/icse-computer-applications-java-bluej-course): Class 9 and 10 Computer Applications in a mini batch. Matrix programs are written by hand first, then typed and run in BlueJ.
- [Computer Science Class 11 and 12](/courses/cbse-icse-computer-science-class-11-12-python-java-complete-course): For students heading to ISC, where double dimensional arrays return with longer and harder matrix tasks.
- [Data Structures and Algorithms](/courses/data-structures-algorithms-masterclass-college): For the student who likes grids and wants to see them used in path finding and dynamic programming.

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

**Are 2D arrays in the ICSE Class 10 syllabus for 2027?** Yes. The 2027 Computer Applications syllabus includes double dimensional arrays: declaring and initialising them, accepting data, displaying them in matrix format, and finding the sum of the elements in a row, a column and the left and right diagonals. Sorting and searching techniques are listed for single dimensional arrays.

**What is the difference between a single and a double dimensional array?** A single dimensional array is one row of values reached with one index, such as a[3]. A double dimensional array is a table of rows and columns reached with two indexes, such as a[1][2], meaning row 1, column 2. A single dimensional array needs one loop to visit every element; a double dimensional array needs two nested loops.

**How do you find the sum of diagonal elements in Java?** For a square matrix of order n, use one loop from i = 0 to n - 1. Add a[i][i] to the left diagonal sum and a[i][n - 1 - i] to the right diagonal sum. If the question asks for both diagonals together and n is odd, subtract the centre a[n / 2][n / 2] once, because it lies on both.

**How do you find the sum of each row and each column of a matrix?** For row sums, the outer loop runs over rows and the inner loop over columns, with the sum reset to 0 before each row. For column sums, swap the loops: the outer loop runs over columns, the inner loop over rows, and the element is still written a[i][j]. Printing each total beside its row keeps the output clear.

**How do you display a 2D array in matrix format?** Use print, not println, inside the inner loop, with a tab or spaces after each value. After the inner loop finishes, call System.out.println() once to move to the next line. That prints one row of the matrix per line, which is what matrix format means.

**What does a.length give for a 2D array in Java?** For int[][] a = new int[3][4], a.length is 3, the number of rows, and a[0].length is 4, the number of columns in row 0. Using a.length as the column bound is a common mistake that silently skips or overruns columns.

**Which is the left diagonal and which is the right diagonal?** The left diagonal, also called the main or principal diagonal, runs from the top left corner to the bottom right; its cells have equal row and column indexes. The right diagonal runs from the top right corner to the bottom left; for each of its cells the row and column indexes add up to n minus 1.

**Can a double dimensional array question come in Section B?** Yes. Section B has six programming questions of 15 marks each, of which a student answers any four, and any topic in the syllabus can be set, including double dimensional arrays. A short 2D array question can also appear in Section A as an MCQ or a two-mark output.

**Is matrix multiplication in the ICSE Class 10 syllabus?** It is not listed. The Class 10 syllabus names accepting, displaying, and summing rows, columns and diagonals. Matrix multiplication and transposing belong to ISC Computer Science in Classes 11 and 12, so a Class 10 student can leave them out of board revision.

**Do you teach 2D array programs in live classes?** Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, students mark index grids, predict what a broken program will do, and write a full matrix program against the clock, which is then run in BlueJ and marked on screen. Families who need another time can choose personalised one to one classes.

Rated 4.9 across 547 Google reviews. Teaching since 2020, more than 10,000 students. Contact: connect@modernagecoders.com, +91 91233 66161 (call or WhatsApp).

## More pages in this series

**Classes, tuition and batches:** [The Tue and Wed ICSE Java batch](/icse-class-10-java-classes-online), [ICSE Java classes in the Gulf and abroad](/icse-class-10-computer-applications-classes-gulf-and-abroad), [ICSE BlueJ Java coaching](/icse-class-10-bluej-java-coaching), [ICSE computer crash course](/icse-computer-applications-crash-course), [ICSE computer tuition in Kolkata](/icse-computer-tuition-kolkata), [ICSE computer tuition in Bangalore](/icse-computer-tuition-bangalore), [ICSE computer tuition in Mumbai](/icse-computer-tuition-mumbai), [1-on-1 private Java tutor](/icse-computer-applications-private-tutor), [ICSE computer tuition in Lucknow](/icse-computer-tuition-lucknow), [ICSE computer tuition in Pune](/icse-computer-tuition-pune), [ICSE computer tuition near me](/icse-computer-tuition-near-me), [The mini batch, explained](/icse-computer-applications-small-batch-classes).

**Chapter by chapter:** [ICSE Computer Applications syllabus](/icse-class-10-computer-applications-syllabus-explained), [User-defined methods and overloading](/icse-class-10-user-defined-methods-overloading), [Constructors](/icse-class-10-constructors-questions), [Wrapper and library classes](/icse-class-10-wrapper-and-library-classes), [Class as the basis of all computation](/icse-class-10-class-as-basis-of-computation), [Encapsulation and access specifiers](/icse-class-10-encapsulation-access-specifiers), [Math library methods](/icse-class-10-math-library-methods), [Operators and expressions](/icse-class-10-operators-in-java), [Loops and loop conversion](/icse-class-10-loop-programs-java), [Data types, input and type casting](/icse-class-10-data-types-and-input-java), [Class 9 Java revision for Class 10](/icse-class-9-java-revision-for-class-10).

**Programs for Section B:** [ICSE Java programs practice](/icse-class-10-java-programs-practice), [String programs](/icse-class-10-string-programs), [Special number programs](/icse-special-number-programs-java), [Sorting and searching programs](/icse-class-10-sorting-and-searching-programs), [Pattern programs](/icse-class-10-pattern-programs-java), [Menu driven and switch case](/icse-class-10-menu-driven-programs), [Series programs](/icse-class-10-series-programs-java), [Slab and bill programs](/icse-class-10-slab-and-bill-programs).

**Questions and practice:** [ICSE CA important questions](/icse-class-10-computer-applications-important-questions), [Specimen paper and mock tests](/icse-class-10-computer-applications-specimen-paper-and-mock-tests), [Previous year papers, solved](/icse-computer-applications-previous-year-papers-solved), [Predict the output questions](/icse-class-10-java-output-questions), [Competency and case study questions](/icse-computer-applications-competency-questions), [MCQ for Question 1](/icse-computer-applications-mcq-questions), [Viva and oral questions](/icse-computer-applications-viva-questions), [Find the error questions](/icse-class-10-java-error-finding-questions), [Difference between questions](/icse-computer-difference-between-questions).

**Notes and revision:** [Chapter-wise notes](/icse-computer-applications-notes), [Textbook solutions guide](/icse-computer-applications-textbook-solutions-guide), [Worksheets with answers](/icse-computer-applications-worksheets).

**Exam, marks and internal assessment:** [ICSE board exam preparation](/icse-class-10-computer-applications-board-exam-preparation), [Exam date 2027 and paper pattern](/icse-class-10-computer-applications-exam-date-and-paper-pattern), [Project and internal assessment](/icse-class-10-computer-applications-project-and-internal-assessment), [How to score 100](/how-to-score-100-in-icse-computer-applications), [Paper analysis and answer key](/icse-computer-applications-paper-analysis), [Computer or Commercial Applications?](/icse-computer-applications-vs-commercial-applications).

---

*Canonical: https://learn.modernagecoders.com/icse-class-10-2d-array-programs*
