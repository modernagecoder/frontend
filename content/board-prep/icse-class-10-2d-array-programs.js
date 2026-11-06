// ICSE Class 10 Computer Applications (Java): 2D array (double dimensional
// array) programs. Intent: "2d array programs icse class 10", "double
// dimensional array icse", "sum of diagonal elements java", "row and column sum
// program", "matrix programs icse java". Distinct from ic05 (sorting and
// searching, single dimensional only) and ijv (the program-family hub): this
// page is only the double dimensional array, with index diagrams for both
// diagonals and five board-format programs.
// Scope check (2026-11-06): third-party copies of the CISCE 2027 Computer
// Applications syllabus (Oswal 2026-27, Aglasem 2027) list declaration,
// initialisation and accepting data of a double dimensional array, the sum of
// elements in a row, a column and the left and right diagonals, and display in
// matrix format; sorting, searching and "array as a composite type" are tied to
// single dimensional arrays. Nothing here goes beyond that: no matrix
// multiplication, no transpose, no ragged arrays, no recursion.
// Every program and snippet on this page was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch files
// outside the repo, with the sample input shown; each output below is pasted
// from that run (the Scanner prompt lines are left out of the output blocks).
'use strict';

module.exports = {
  slug: 'icse-class-10-2d-array-programs',
  code: 'ic08',
  board: 'icse',
  themeColor: '#3B5B4B',
  dateModified: '2026-11-06',
  title: '2D Array Programs ICSE Class 10: Java Matrix Programs 2027',
  description: '2D array programs for ICSE Class 10: row, column and diagonal sums, largest element and search, each run in Java 21 with sample input and output.',
  ogTitle: '2D Array Programs for ICSE Class 10, Run and Explained',
  ogDesc: 'Five board-format double dimensional array programs for ICSE Computer Applications 2027, with index diagrams for the left and right diagonals, sample input and output from a real run, and the slips that cost marks.',
  twDesc: 'Double dimensional array programs for ICSE Class 10 Java: diagonals, row and column sums, largest element and search, each run in Java.',
  headline: '2D Array Programs for ICSE Class 10: Double Dimensional Arrays, Diagonals and Matrix Sums',
  courseName: 'ICSE Class 10 Computer Applications (Java) Double Dimensional Array Programs, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications double dimensional array programs for the 2027 examination: declaring, initialising and accepting a matrix, displaying it in matrix format, row sums, column sums, left and right diagonal sums, largest and smallest elements with their positions and searching a matrix, each written in board format and run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; 2D arrays',
  navLinks: [['#basics', 'Basics'], ['#diagonals', 'Diagonals'], ['#programs', 'Programs'], ['#slips', 'Slips'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, '2D array programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Double dimensional arrays 2027',
  h1: '2D array programs for ICSE Class 10, with the diagonals drawn out.',
  lede: 'These 2D array programs for ICSE Class 10 cover exactly what the 2027 Computer Applications syllabus asks of a double dimensional array: accept it, show it as a matrix, and add up its rows, columns and two diagonals. Every program below is written the way a Section B answer should look, was compiled and run in Java 21 with the input shown, and comes with the one index rule that makes it work. In our live mini batch the same programs are typed in BlueJ, broken on purpose and fixed.',
  heroNote: 'Live online &middot; five full matrix programs &middot; index diagrams for both diagonals &middot; run in BlueJ every week &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Class 10 2D array programs.',
  timetable: {
    label: 'When matrix programs are practised',
    title: 'Matrix practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, index drills and dry runs', '5:30', 'PM IST'],
      ['Wednesday, a full matrix program', '8:00', 'PM IST'],
      ['Board-format programs on this page', '5', 'run'],
      ['Sizes tested in class', '3x3 to 5x5', 'odd and even']
    ],
    zones: '<b>In India:</b> matrix programs sit inside the mini batch at these two times. <b>Outside India:</b> the same programs are taught one to one, at an after-school hour in your own time zone, for ICSE students in the Gulf, Singapore and elsewhere.',
    stamps: ['Section B &middot; 15 marks', 'Typed, run, checked']
  },
  picksH2: 'Courses where matrix programs are taught',
  picksLede: 'The ICSE Java course in which these double dimensional array programs are written every week, the ISC Computer Science course where matrices come back with more operations, and the data structures course for a student who wants to see grids used for real problems.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch. Matrix programs are written by hand first, then typed and run in BlueJ.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students heading to ISC, where double dimensional arrays return with longer and harder matrix tasks.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who likes grids and wants to see them used in path finding and dynamic programming.' }
  ],
  capsule: '2D array programs in ICSE Class 10 use a double dimensional array, int[][] a = new int[m][n], filled by two nested for loops: the outer loop walks the rows and the inner loop walks the columns. The 2027 syllabus asks students to accept a matrix, display it in matrix format, and find the sum of a row, a column and the left and right diagonals. The left diagonal holds the cells where row equals column; the right diagonal holds the cells where row plus column equals n minus 1. Modern Age Coders teaches these programs live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="basics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What does the syllabus expect?</p>
      <h2>What is a double dimensional array in ICSE Class 10?</h2>
      <p class="bx-lede">A double dimensional array is a table of values of one type, reached with two indexes: the first picks the row, the second picks the column. Both start at 0, so a 3 by 4 array has rows 0 to 2 and columns 0 to 3.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Declare, fill, measure</b><span>three ways in</span></figcaption>
  <pre><i>// 1. declare with a size: every cell starts at 0</i>
int[][] q = new int[2][3];

<i>// 2. declare and initialise in one line</i>
int[][] p = {{4, 1, 7}, {2, 9, 5}};

<i>// 3. accept from the keyboard</i>
for (int i = 0; i &lt; m; i++)
    for (int j = 0; j &lt; n; j++)
        a[i][j] = sc.nextInt();

System.out.println(p.length + " " + p[0].length + " " + p[1][2]);
System.out.println(q[1][1]);

<i>// Output:</i>
<i>// 2 3 5</i>
<i>// 0</i></pre>
  <p class="bx-code-note"><code>p.length</code> is the number of rows; <code>p[0].length</code> is the number of columns in row 0. Neither has brackets after <code>length</code>.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Syllabus item (2027)</th><th scope="col">What a program must do</th><th scope="col">On this page</th></tr></thead>
          <tbody>
            <tr><td>Declaration and initialisation</td><td>Create the array with a size or with a list of values</td><td>Above</td></tr>
            <tr><td>Accepting data</td><td>Fill every cell with nested loops and Scanner</td><td>Programs 1 to 5</td></tr>
            <tr><td>Display in matrix format</td><td>Print one row per line, values spaced</td><td>Program 1</td></tr>
            <tr><td>Sum of a row and of a column</td><td>Fix one index, loop the other</td><td>Programs 1 and 5</td></tr>
            <tr><td>Left and right diagonal sums</td><td>One loop, two index rules</td><td>Program 2</td></tr>
            <tr><td>Accessing elements</td><td>Visit each cell to compare or match it</td><td>Programs 3 and 4</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Sorting, binary search and passing an array as a composite type are listed against single dimensional arrays only, so they are practised on <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">ICSE sorting and searching programs</a>, not here. Matrix multiplication and transposing are not in the Class 10 list either; a student who meets them in an old guidebook can leave them for ISC.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="diagonals">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you find the diagonals?</p>
      <h2>Sum of diagonal elements in Java: the two index rules</h2>
      <p class="bx-lede">In a square matrix of order n, a cell is on the left diagonal when its row index equals its column index, and on the right diagonal when row plus column equals n minus 1. Read the two diagrams below once and the rules stop being something to memorise.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
      <p><b>Order 4 (even):</b> L is the left diagonal, R the right. No cell is on both.</p>
      <div class="bx-table-wrap">
        <table class="bx-table" style="white-space:nowrap">
          <thead><tr><th scope="col">i \\ j</th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr></thead>
          <tbody>
            <tr><th scope="row">0</th><td class="bx-num" style="background:var(--bx-accent-soft)">[0][0] L</td><td class="bx-num">[0][1]</td><td class="bx-num">[0][2]</td><td class="bx-num" style="background:var(--bx-accent-soft)">[0][3] R</td></tr>
            <tr><th scope="row">1</th><td class="bx-num">[1][0]</td><td class="bx-num" style="background:var(--bx-accent-soft)">[1][1] L</td><td class="bx-num" style="background:var(--bx-accent-soft)">[1][2] R</td><td class="bx-num">[1][3]</td></tr>
            <tr><th scope="row">2</th><td class="bx-num">[2][0]</td><td class="bx-num" style="background:var(--bx-accent-soft)">[2][1] R</td><td class="bx-num" style="background:var(--bx-accent-soft)">[2][2] L</td><td class="bx-num">[2][3]</td></tr>
            <tr><th scope="row">3</th><td class="bx-num" style="background:var(--bx-accent-soft)">[3][0] R</td><td class="bx-num">[3][1]</td><td class="bx-num">[3][2]</td><td class="bx-num" style="background:var(--bx-accent-soft)">[3][3] L</td></tr>
          </tbody>
        </table>
      </div>
      </div>
      <div>
      <p><b>Order 5 (odd):</b> the centre cell [2][2] belongs to both diagonals.</p>
      <div class="bx-table-wrap">
        <table class="bx-table" style="white-space:nowrap">
          <thead><tr><th scope="col">i \\ j</th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th></tr></thead>
          <tbody>
            <tr><th scope="row">0</th><td class="bx-num" style="background:var(--bx-accent-soft)">L</td><td></td><td></td><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">R</td></tr>
            <tr><th scope="row">1</th><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">L</td><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">R</td><td></td></tr>
            <tr><th scope="row">2</th><td></td><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">L R</td><td></td><td></td></tr>
            <tr><th scope="row">3</th><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">R</td><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">L</td><td></td></tr>
            <tr><th scope="row">4</th><td class="bx-num" style="background:var(--bx-accent-soft)">R</td><td></td><td></td><td></td><td class="bx-num" style="background:var(--bx-accent-soft)">L</td></tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Diagonal</th><th scope="col">Also called</th><th scope="col">Index rule</th><th scope="col">Cell in row i</th><th scope="col">Loops needed</th></tr></thead>
        <tbody>
          <tr><td>Left</td><td>Main or principal diagonal</td><td><code>i == j</code></td><td><code>a[i][i]</code></td><td>One</td></tr>
          <tr><td>Right</td><td>Secondary diagonal</td><td><code>i + j == n - 1</code></td><td><code>a[i][n - 1 - i]</code></td><td>One</td></tr>
          <tr><td>Both together</td><td>Sum of both diagonals</td><td>Add both, then remove the centre once if n is odd</td><td><code>a[n / 2][n / 2]</code> is the shared cell</td><td>One</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program 2: DiagonalSum</b><span>left, right and both</span></figcaption>
  <pre>import java.util.Scanner;

class DiagonalSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Order of the square matrix: ");
        int n = sc.nextInt();
        int[][] a = new int[n][n];
        System.out.println("Enter " + (n * n) + " numbers:");
        for (int i = 0; i &lt; n; i++)
            for (int j = 0; j &lt; n; j++)
                a[i][j] = sc.nextInt();
        int left = 0, right = 0;
        for (int i = 0; i &lt; n; i++) {
            left += a[i][i];            <i>// row = column</i>
            right += a[i][n - 1 - i];   <i>// row + column = n - 1</i>
        }
        System.out.println("Left diagonal sum = " + left);
        System.out.println("Right diagonal sum = " + right);
        int both = left + right;
        if (n % 2 == 1)
            both -= a[n / 2][n / 2];    <i>// centre is on both diagonals</i>
        System.out.println("Both diagonals together = " + both);
        if (left == right)
            System.out.println("The two diagonal sums are equal");
        else
            System.out.println("The two diagonal sums are not equal");
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Two runs</b><span>even and odd order</span></figcaption>
  <pre><i>// Sample input 1</i>
4
5 1 2 8
3 6 9 0
4 7 2 1
6 2 3 4

<i>// Output</i>
Left diagonal sum = 17
Right diagonal sum = 30
Both diagonals together = 47
The two diagonal sums are not equal

<i>// Sample input 2</i>
3
4 9 2
3 5 7
8 1 6

<i>// Output</i>
Left diagonal sum = 15
Right diagonal sum = 15
Both diagonals together = 25
The two diagonal sums are equal</pre>
  <p class="bx-code-note">Run 1: 5 + 6 + 2 + 4 and 8 + 9 + 7 + 6. Run 2: the centre 5 is counted once, so 15 + 15 - 5 = 25.</p>
</figure>
    </div>
    <p class="bx-mt-40">A nested loop with <code>if (i == j)</code> and <code>if (i + j == n - 1)</code> inside also gives 17 and 30 for the first input, and an examiner will accept it. It checks all sixteen cells to use eight, so the single loop above is the cleaner answer to learn. Loop counting of this kind is drilled on <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE Class 10</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does a full Section B answer look like?</p>
      <h2>Row and column sum program in Java, in board format</h2>
      <p class="bx-lede">To add a row, hold the row index still and move the column index; to add a column, do the reverse. Program 1 does both, and prints the matrix in matrix format with each row total at the end of its line and the column totals underneath.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program 1: RowColumnSum</b><span>any m by n matrix</span></figcaption>
  <pre>import java.util.Scanner;

class RowColumnSum {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Rows: ");
        int m = sc.nextInt();
        System.out.print("Columns: ");
        int n = sc.nextInt();
        int[][] a = new int[m][n];
        System.out.println("Enter " + (m * n) + " numbers row by row:");
        for (int i = 0; i &lt; m; i++)
            for (int j = 0; j &lt; n; j++)
                a[i][j] = sc.nextInt();
        int grand = 0;
        <i>// each row, then its sum at the end of the line</i>
        for (int i = 0; i &lt; m; i++) {
            int rowSum = 0;
            for (int j = 0; j &lt; n; j++) {
                System.out.print(a[i][j] + "\\t");
                rowSum += a[i][j];
            }
            System.out.println("| " + rowSum);
            grand += rowSum;
        }
        <i>// column sums: outer loop over j, inner over i</i>
        for (int j = 0; j &lt; n; j++) {
            int colSum = 0;
            for (int i = 0; i &lt; m; i++)
                colSum += a[i][j];
            System.out.print(colSum + "\\t");
        }
        System.out.println("| " + grand);
    }
}</pre>
</figure>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Run</b><span>3 rows, 4 columns</span></figcaption>
  <pre><i>// Sample input</i>
3
4
2 7 1 5
4 0 6 3
8 2 9 1

<i>// Output</i>
2	7	1	5	| 15
4	0	6	3	| 13
8	2	9	1	| 20
14	9	16	9	| 48</pre>
  <p class="bx-code-note">The last line is the four column totals, then the grand total 48, which equals 15 + 13 + 20. Checking that the two agree is a free way to catch a wrong loop.</p>
</figure>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td><code>m</code>, <code>n</code></td><td>int</td><td>Number of rows and columns</td></tr>
              <tr><td><code>a</code></td><td>int[][]</td><td>The matrix entered by the user</td></tr>
              <tr><td><code>i</code>, <code>j</code></td><td>int</td><td>Row and column index</td></tr>
              <tr><td><code>rowSum</code></td><td>int</td><td>Total of the current row, reset for each row</td></tr>
              <tr><td><code>colSum</code></td><td>int</td><td>Total of the current column, reset for each column</td></tr>
              <tr><td><code>grand</code></td><td>int</td><td>Total of every element</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">That variable description table is the habit Section B rewards: the paper asks for programs written with variable descriptions or mnemonic names so the logic is clear. Why it matters for the last few marks is on <a class="bx-link" href="/how-to-score-100-in-icse-computer-applications">how to score 100 in ICSE Computer Applications</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="more-programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Which other matrix programs should I practise?</p>
      <h2>Matrix programs ICSE Java: largest element, search and the highest row</h2>
      <p class="bx-lede">Three more shapes use the same two loops: compare every cell, match every cell, or total each row into a single dimensional array and compare the totals. Each is a full program, run with the input shown.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program 3: LargestSmallest</b><span>value and position</span></figcaption>
  <pre>import java.util.Scanner;

class LargestSmallest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] t = new int[3][4];
        System.out.println("Enter 12 temperatures, 3 rows of 4:");
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 4; j++)
                t[i][j] = sc.nextInt();
        int max = t[0][0], min = t[0][0];
        int maxR = 0, maxC = 0, minR = 0, minC = 0;
        for (int i = 0; i &lt; 3; i++) {
            for (int j = 0; j &lt; 4; j++) {
                if (t[i][j] &gt; max) {
                    max = t[i][j];
                    maxR = i;
                    maxC = j;
                }
                if (t[i][j] &lt; min) {
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

<i>// Sample input</i>
31 28 35 30
26 33 29 24
36 27 32 25

<i>// Output</i>
Largest = 36 at row 2, column 0
Smallest = 24 at row 1, column 3</pre>
  <p class="bx-code-note">Start max and min at <code>t[0][0]</code>, never at 0: with all negative values, a max that starts at 0 would never change.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program 4: MatrixSearch</b><span>every position of a value</span></figcaption>
  <pre>import java.util.Scanner;

class MatrixSearch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] g = new int[4][4];
        System.out.println("Enter 16 numbers:");
        for (int i = 0; i &lt; 4; i++)
            for (int j = 0; j &lt; 4; j++)
                g[i][j] = sc.nextInt();
        System.out.print("Number to search: ");
        int key = sc.nextInt();
        int found = 0;
        for (int i = 0; i &lt; 4; i++) {
            for (int j = 0; j &lt; 4; j++) {
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

<i>// Sample input: the 16 numbers, then 8</i>
3 8 1 6
7 2 8 4
9 5 0 8
1 6 3 2
8

<i>// Output</i>
Found at [0][1]
Found at [1][2]
Found at [2][3]
8 occurs 3 time(s)

<i>// Same matrix, searching 11</i>
11 is not in the matrix</pre>
  <p class="bx-code-note">A counter, not a boolean, lets one variable answer both "is it there?" and "how many times?".</p>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Program 5: HighestRow</b><span>row totals in a 1D array</span></figcaption>
  <pre>import java.util.Scanner;

class HighestRow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] marks = new int[4][3];
        int[] total = new int[4];
        System.out.println("Marks of 4 students in 3 tests:");
        for (int i = 0; i &lt; 4; i++) {
            for (int j = 0; j &lt; 3; j++) {
                marks[i][j] = sc.nextInt();
                total[i] += marks[i][j];
            }
        }
        int best = 0;
        for (int i = 1; i &lt; 4; i++)
            if (total[i] &gt; total[best])
                best = i;
        for (int i = 0; i &lt; 4; i++)
            System.out.println("Student " + (i + 1) + " total = " + total[i]);
        System.out.println("Highest total: student " + (best + 1));
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Run</b><span>4 students, 3 tests</span></figcaption>
  <pre><i>// Sample input</i>
62 70 58
81 77 90
74 88 69
90 65 80

<i>// Output</i>
Student 1 total = 190
Student 2 total = 248
Student 3 total = 231
Student 4 total = 235
Highest total: student 2</pre>
  <p class="bx-code-note">Each row is one student and each column one test, so a row sum is a student total. The row totals are added while the marks are being read, which saves a second pair of loops. Printing <code>best + 1</code> turns index 1 into the human "student 2".</p>
</figure>
    </div>
    <p class="bx-mt-40">When a question asks the user to choose between several of these tasks, the programs sit inside a switch; that wrapper is practised on <a class="bx-link" href="/icse-class-10-menu-driven-programs">menu driven programs for ICSE Class 10</a>. The full map of program families is on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Java programs practice</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="slips">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Where are marks lost on a 2D array question?</p>
      <h2>Double dimensional array ICSE: the slips that cost marks</h2>
      <p class="bx-lede">Most wrong matrix answers come from one of five slips, and four of them still compile. Each row below was tried in Java on a 3 by 4 matrix holding 1 to 12, whose true total is 78.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Slip</th><th scope="col">What happens</th><th scope="col">The fix</th></tr></thead>
        <tbody>
          <tr><td>Inner loop bound written as <code>j &lt; a.length</code></td><td>Runs over 3 columns, not 4; the total comes out as 54 with no error</td><td>Use <code>a[i].length</code> or the column count n for j</td></tr>
          <tr><td><code>i &lt;= a.length</code> as the row test</td><td>Crashes: Index 3 out of bounds for length 3</td><td>Indexes stop one short of the length: use <code>&lt;</code></td></tr>
          <tr><td>rowSum declared once, above both loops</td><td>Each "row total" keeps the earlier rows inside it</td><td>Set <code>rowSum = 0</code> inside the outer loop, before the inner loop</td></tr>
          <tr><td>Indexes swapped, <code>a[j][i]</code>, in a column sum</td><td>Adds rows instead of columns, or crashes when m and n differ</td><td>The first index is always the row: column total is <code>a[i][j]</code> with j fixed outside</td></tr>
          <tr><td>Centre counted twice in "sum of both diagonals"</td><td>For an odd order the answer is too large by the centre value</td><td>Subtract <code>a[n / 2][n / 2]</code> once when n is odd</td></tr>
          <tr><td><code>println</code> inside the inner loop when printing a matrix</td><td>Every value on its own line: not matrix format</td><td><code>print</code> inside, one <code>println()</code> after the inner loop</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Name the class as asked</h3><p>If the question says "define a class Matrix", the class is called Matrix. Write the exact name, and keep any method names the question gives letter for letter.</p></div>
      <div class="bx-card"><h3>Print the matrix before the answer</h3><p>When a question says "display the matrix and its diagonal sums", the display is part of the marks. Print it in rows, then the sums with a label each.</p></div>
      <div class="bx-card"><h3>Dry run a 3 by 3 first</h3><p>Before trusting an n by n loop, trace it on a small odd order by hand. Odd orders expose the centre cell; even orders hide it.</p></div>
    </div>
    <p class="bx-mt-40">Short 2D array questions also turn up in Section A as outputs, such as asking for <code>m.length</code> or one cell of an initialised array. Those are on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>, and compile-error versions are on <a class="bx-link" href="/icse-class-10-java-error-finding-questions">find the error questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are matrix programs taught in the mini batch?</p>
      <h2>From index diagram to running program, in two classes a week</h2>
      <p class="bx-lede">Students learn the index rules on paper, then prove them in BlueJ, then write the whole program against the clock.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: fill in the grid</h4><p>At the 5:30 PM IST class each student gets a blank 4 by 4 and 5 by 5 grid and marks the cells a loop will visit. Disagreements are settled by printing the indexes in BlueJ.</p></li>
      <li class="bx-step"><h4>Tuesday: break it on purpose</h4><p>The teacher changes one bound or one index in a working program and the group predicts what goes wrong before it runs: a wrong total, a crash, or a matrix on one line.</p></li>
      <li class="bx-step"><h4>Wednesday: a full program in 20 minutes</h4><p>At the 8:00 PM IST class, students write a matrix program from a board-style question on paper, with a variable description table, then type it and run it on the sample input.</p></li>
      <li class="bx-step"><h4>Marked like Section B</h4><p>Each answer is marked on screen against the shape a 15-mark question rewards: class and method names as asked, correct input, correct logic, correct display, clear variables.</p></li>
      <li class="bx-step"><h4>Mixed into full mocks</h4><p>From December a matrix question sits inside complete two-hour papers, so the student chooses it, or skips it, as they would on the day.</p></li>
    </ol>
    <p class="bx-mt-40">Printable sets of matrix questions with answers are collected on <a class="bx-link" href="/icse-computer-applications-worksheets">ICSE Computer Applications worksheets</a>, and the syllabus as a whole is laid out on <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus explained</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Learn matrix programs in the mini batch, or one to one',
  chooseLede: 'Both formats use the same index diagrams, the same five programs and the same marking. In India a family can pick the fixed evening mini batch or a private slot; ICSE students abroad are taught one to one. Fees are billed monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'At most six ICSE Class 10 students',
    'Index grids filled in and checked in BlueJ',
    'A timed matrix program written each Wednesday',
    'Every answer marked against the Section B shape'
  ],
  choosePersonal: [
    'A slot the family picks, in India or abroad',
    'Extra time on whichever index rule keeps slipping',
    'Programs typed and debugged side by side',
    'Harder matrix questions once the basics hold',
    'Same teachers and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who can write single dimensional array programs but freezes at two indexes often needs only a handful of one to one sessions on diagrams and dry runs. A student who wants every Section B family covered in rotation is better placed in the two weekly batch classes. Fees appear in your own currency.',
  zonesH2: 'Matrix program practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India set the same Computer Applications paper, so a double dimensional array question can appear there too. Abroad the classes run one to one, at an after-school hour in the student\'s own time zone.',
  zonesAfter: 'The time is fixed after the free demo and can shift around school exams. How the classes work for families overseas is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about 2D arrays',
  faqH2: 'What students ask about 2D array programs in ICSE',
  faqs: [
    ['Are 2D arrays in the ICSE Class 10 syllabus for 2027?', 'Yes. The 2027 Computer Applications syllabus includes double dimensional arrays: declaring and initialising them, accepting data, displaying them in matrix format, and finding the sum of the elements in a row, a column and the left and right diagonals. Sorting and searching techniques are listed for single dimensional arrays.'],
    ['What is the difference between a single and a double dimensional array?', 'A single dimensional array is one row of values reached with one index, such as a[3]. A double dimensional array is a table of rows and columns reached with two indexes, such as a[1][2], meaning row 1, column 2. A single dimensional array needs one loop to visit every element; a double dimensional array needs two nested loops.'],
    ['How do you find the sum of diagonal elements in Java?', 'For a square matrix of order n, use one loop from i = 0 to n - 1. Add a[i][i] to the left diagonal sum and a[i][n - 1 - i] to the right diagonal sum. If the question asks for both diagonals together and n is odd, subtract the centre a[n / 2][n / 2] once, because it lies on both.'],
    ['How do you find the sum of each row and each column of a matrix?', 'For row sums, the outer loop runs over rows and the inner loop over columns, with the sum reset to 0 before each row. For column sums, swap the loops: the outer loop runs over columns, the inner loop over rows, and the element is still written a[i][j]. Printing each total beside its row keeps the output clear.'],
    ['How do you display a 2D array in matrix format?', 'Use print, not println, inside the inner loop, with a tab or spaces after each value. After the inner loop finishes, call System.out.println() once to move to the next line. That prints one row of the matrix per line, which is what matrix format means.'],
    ['What does a.length give for a 2D array in Java?', 'For int[][] a = new int[3][4], a.length is 3, the number of rows, and a[0].length is 4, the number of columns in row 0. Using a.length as the column bound is a common mistake that silently skips or overruns columns.'],
    ['Which is the left diagonal and which is the right diagonal?', 'The left diagonal, also called the main or principal diagonal, runs from the top left corner to the bottom right; its cells have equal row and column indexes. The right diagonal runs from the top right corner to the bottom left; for each of its cells the row and column indexes add up to n minus 1.'],
    ['Can a double dimensional array question come in Section B?', 'Yes. Section B has six programming questions of 15 marks each, of which a student answers any four, and any topic in the syllabus can be set, including double dimensional arrays. A short 2D array question can also appear in Section A as an MCQ or a two-mark output.'],
    ['Is matrix multiplication in the ICSE Class 10 syllabus?', 'It is not listed. The Class 10 syllabus names accepting, displaying, and summing rows, columns and diagonals. Matrix multiplication and transposing belong to ISC Computer Science in Classes 11 and 12, so a Class 10 student can leave them out of board revision.'],
    ['Do you teach 2D array programs in live classes?', 'Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, students mark index grids, predict what a broken program will do, and write a full matrix program against the clock, which is then run in BlueJ and marked on screen. Families who need another time can choose personalised one to one classes.']
  ],
  startH2: 'Try a free live matrix programming class',
  startHtml: `        <p>In the free demo your child marks the two diagonals on a blank grid, writes the diagonal sum loop with the mentor, and runs it on an odd and an even matrix in BlueJ. You hear afterwards which part of the 2D array topic needs work, and whether the mini batch or one to one suits your child.</p>
        <p>Looking at the whole subject first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; 2D array programs 2027'
};
