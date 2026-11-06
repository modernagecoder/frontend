// ICSE Class 10 Computer Applications (Java): pattern programs. Intent: "pattern
// programs icse", "nested loop patterns java icse", "star pattern program icse",
// "number pattern java class 10", "triangle pattern icse". Distinct angle: every
// pattern is sorted by the loop rule that produces it (rows, columns, spaces,
// characters), so a student can build an unseen pattern from three questions
// instead of memorising shapes. Distinct from the programs hub (Floyd's
// triangle), the previous year page (a countdown triangle n..i inside an
// overloading answer) and the output questions page (a 123 / 23 / 3 trace):
// none of those patterns is repeated here. Inside the 2027 syllabus: for loops,
// nested loops, char arithmetic and substring only, no recursion. Every program
// on this page was compiled with javac 21 (OpenJDK 21.0.12.1) and run with
// java 21 on 2026-11-06 from scratch files outside the repo; each output below
// is pasted from that run (trailing spaces at line ends are not shown).
'use strict';

module.exports = {
  slug: 'icse-class-10-pattern-programs-java',
  code: 'ic13',
  board: 'icse',
  themeColor: '#3E4B2C',
  title: 'Pattern Programs ICSE Class 10 Java, Solved for 2027',
  description: 'Pattern programs for ICSE Class 10 Java, 2027: twelve star, number, letter and triangle patterns sorted by loop rule, each with code and real output.',
  ogTitle: 'Pattern Programs for ICSE, Sorted by the Loop Rule Behind Them',
  ogDesc: 'Twelve nested loop patterns for ICSE Class 10 Computer Applications: star triangles, a pyramid, a diamond, number and letter triangles, a 0 1 triangle, a hollow square and a word triangle, each built from three questions about rows, columns, spaces and characters, with code and the output of a real Java run.',
  twDesc: 'ICSE Class 10 pattern programs in Java, sorted by loop rule, with code and real output for each pattern.',
  headline: 'Pattern Programs for ICSE Class 10 Java in 2027: Twelve Patterns Sorted by the Loop Rule That Builds Them',
  courseName: 'ICSE Class 10 Computer Applications (Java) Pattern Programs Practice, Live Online',
  courseDesc: 'Live online practice of nested loop pattern programs for the ICSE Class 10 Computer Applications 2027 examination: star triangles and pyramids, number and letter triangles, alternating 0 and 1 rows, hollow shapes, diamonds and word triangles, each planned from the row, column, space and character rules, written on paper and then run in BlueJ on a shared screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Patterns',
  navLinks: [['#rules', 'Loop rules'], ['#columns', 'Columns'], ['#spaces', 'Spaces'], ['#characters', 'Characters'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Pattern programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Pattern programs 2027',
  h1: 'Pattern programs for ICSE, built from the loop rule instead of memorised.',
  lede: 'Pattern programs in ICSE Class 10 Java are nested loops that print a shape of stars, numbers or letters. A student who learns twenty shapes by heart is stuck on the twenty-first. This page sorts twelve patterns by the rule behind them, rows, columns, spaces and characters, so any new pattern becomes three quick questions. Each one comes with its code and the output of a real Java 21 run, and in our live mini batch the same patterns are planned on paper before they go into BlueJ.',
  heroNote: 'Live online &middot; twelve patterns with real output &middot; four loop rules &middot; star, number and letter triangles &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 pattern programs in Java.',
  timetable: {
    label: 'When pattern programs are practised',
    title: 'Pattern practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, patterns planned on paper', '5:30', 'PM IST'],
      ['Wednesday, patterns run and fixed', '8:00', 'PM IST'],
      ['Loop rules every pattern uses', '4', 'rules'],
      ['Each answer checked in', 'BlueJ', 'live']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same pattern work one to one, at an after-school hour in the student\'s own time zone, for ICSE schools in the Gulf, Singapore and elsewhere.',
    stamps: ['Section B &middot; nested loops', 'Planned, then run']
  },
  picksH2: 'Courses where pattern programs are taught',
  picksLede: 'The ICSE Java course in which the mini batch practises these patterns, the Class 11 and 12 Computer Science course where nested loops return in ISC programs, and Python for Teens for a student who wants to print the same shapes in a second language.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where a new pattern is planned and run most weeks until nested loops feel routine.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where nested loops drive matrices, sorting and longer programs.' },
    { slug: 'python-complete-masterclass-teens', code: 'Second language / Python', h3: 'Python for Teens', p: 'For the student who likes shapes and wants to see the same loop rules written in Python after the board exam.' }
  ],
  capsule: 'Pattern programs for ICSE Class 10 are Java programs that print a shape, such as a star triangle, a number pyramid or a letter triangle, using nested for loops. The outer loop runs once per row; the inner loop decides how many items that row holds; an optional first inner loop prints leading spaces; and the print statement decides which character appears. Answer three questions for any pattern: how many rows, how many items in row i, and what is printed at row i, column j. Modern Age Coders teaches pattern programs live in a Tuesday and Wednesday mini batch in India, or one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="rules">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How do you write any pattern program in Java?</p>
      <h2>Nested loop patterns in Java for ICSE: the four loop rules</h2>
      <p class="bx-lede">Every pattern is a grid printed one row at a time, so every pattern program is an outer loop for the rows with one or two inner loops inside. What changes from shape to shape is only the limit of the inner loop, whether spaces come first, and what gets printed.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Rule</th><th scope="col">The question it answers</th><th scope="col">Where it lives in the code</th><th scope="col">Typical form</th></tr></thead>
        <tbody>
          <tr><td>Rows</td><td>How many lines does the shape have?</td><td>The outer loop, ending with <code>System.out.println()</code></td><td><code>for (i = 1; i &lt;= n; i++)</code></td></tr>
          <tr><td>Columns</td><td>How many items does row i hold?</td><td>The limit of the inner loop, written in terms of i</td><td><code>j &lt;= i</code>, <code>j &lt;= n - i + 1</code>, <code>j &lt;= 2 * i - 1</code></td></tr>
          <tr><td>Spaces</td><td>Does row i start further to the right?</td><td>A separate inner loop placed before the items</td><td><code>for (s = 1; s &lt;= n - i; s++)</code></td></tr>
          <tr><td>Characters</td><td>What is printed at row i, column j?</td><td>The argument of <code>System.out.print</code></td><td><code>"*"</code>, <code>j</code>, <code>i</code>, <code>(i + j) % 2</code>, <code>(char) ('A' + j - 1)</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">The three questions, in order</h3>
    <ol class="bx-qlist">
      <li><b>Count the rows.</b> That number is the outer loop's limit, usually n.</li>
      <li><b>Write down the item count for rows 1, 2 and 3.</b> If it goes 1, 2, 3 the limit is i; if it goes 5, 4, 3 it is n - i + 1; if it goes 1, 3, 5 it is 2 * i - 1. If the left edge moves, count the spaces the same way.</li>
      <li><b>Look at one column.</b> If the same column shows the same value on every row, print j. If a whole row repeats one value, print i. If nothing repeats, find the formula in i and j, or a test that picks the edge.</li>
    </ol>
    <p>The full-mark answer is the same shape every time: Scanner input for n, the nested loops, a <code>println()</code> after each row and a variable description table. Here is the pyramid, written that way.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Pyramid.java</b><span>all four rules at once</span></figcaption>
  <pre>import java.util.Scanner;
class Pyramid {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int n = sc.nextInt();
        for (int i = 1; i &lt;= n; i++) {              <i>// rows</i>
            for (int s = 1; s &lt;= n - i; s++)        <i>// spaces</i>
                System.out.print(" ");
            for (int j = 1; j &lt;= 2 * i - 1; j++)    <i>// stars</i>
                System.out.print("*");
            System.out.println();                   <i>// end of the row</i>
        }
    }
}</pre>
  <p class="bx-code-note">Row i has n - i spaces and 2i - 1 stars. Check row 1 and row n by hand before writing anything else: 4 spaces and 1 star, then 0 spaces and 9 stars.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>number of rows, read from the user</td></tr>
              <tr><td>i</td><td>int</td><td>current row, 1 to n</td></tr>
              <tr><td>s</td><td>int</td><td>counts the leading spaces in row i</td></tr>
              <tr><td>j</td><td>int</td><td>counts the stars in row i</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads input from the keyboard</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter the number of rows: <b>5</b>
    *
   ***
  *****
 *******
*********</pre>
  <p class="bx-code-note">Print a single space for each gap, not "  ", or the slope doubles and the shape tilts.</p>
</figure>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="columns">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you make a triangle grow or shrink?</p>
      <h2>Triangle pattern ICSE: changing only the inner loop limit</h2>
      <p class="bx-lede">A left-aligned triangle needs no spaces at all. Rows and characters stay fixed while the inner loop's limit decides the shape: <code>j &lt;= i</code> grows, <code>j &lt;= n - i + 1</code> shrinks.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Pattern</th><th scope="col">Items in rows 1, 2, 3</th><th scope="col">Inner limit</th><th scope="col">Printed</th></tr></thead>
        <tbody>
          <tr><td>Star triangle</td><td class="bx-num">1, 2, 3</td><td><code>j &lt;= i</code></td><td><code>"* "</code></td></tr>
          <tr><td>Shrinking count</td><td class="bx-num">5, 4, 3</td><td><code>j &lt;= n - i + 1</code></td><td><code>j</code></td></tr>
          <tr><td>Row repeat</td><td class="bx-num">1, 2, 3</td><td><code>j &lt;= i</code></td><td><code>i</code></td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>RuleColumns.java</b><span>three triangles, three limits</span></figcaption>
  <pre>class RuleColumns {
    static void starTriangle(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= i; j++)
                System.out.print("* ");
            System.out.println();
        }
    }
    static void shrinkingCount(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= n - i + 1; j++)
                System.out.print(j + " ");
            System.out.println();
        }
    }
    static void rowRepeat(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= i; j++)
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
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>*
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
5 5 5 5 5</pre>
  <p class="bx-code-note">starTriangle and rowRepeat share the same loops and differ in one word: the star becomes i. That is the characters rule at work, and the reason to learn rules rather than shapes.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">The most common slips with these three</h3>
    <ul class="bx-qlist">
      <li><b>println inside the inner loop.</b> Every item lands on its own line and the triangle becomes a column.</li>
      <li><b>n - i instead of n - i + 1.</b> The first row loses one item and the last row is empty. Test the limit with i = 1 and i = n.</li>
      <li><b>Printing j where the row repeats.</b> If each row shows one value repeated, the value comes from the outer counter, i.</li>
    </ul>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="spaces">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you push a pattern to the right?</p>
      <h2>Star pattern program ICSE: right-aligned triangles, pyramids and the diamond</h2>
      <p class="bx-lede">Add a spaces loop before the items. When row i has n - i spaces, row 1 starts furthest right and row n touches the margin, which turns a left triangle into a right-aligned one and, with 2i - 1 items, into the pyramid above.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>RuleSpaces.java</b><span>spaces first, then items</span></figcaption>
  <pre>class RuleSpaces {
    static void rightAligned(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int s = 1; s &lt;= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j &lt;= i; j++)
                System.out.print("#");
            System.out.println();
        }
    }
    static void diamond(int n) {
        for (int i = 1; i &lt;= n; i++) {              <i>// top half, rows 1 to n</i>
            for (int s = 1; s &lt;= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j &lt;= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
        for (int i = n - 1; i &gt;= 1; i--) {          <i>// bottom half, rows n-1 down to 1</i>
            for (int s = 1; s &lt;= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j &lt;= 2 * i - 1; j++)
                System.out.print("*");
            System.out.println();
        }
    }
    public static void main(String args[]) {
        rightAligned(5);
        System.out.println("--");
        diamond(4);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>    #
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
   *</pre>
  <p class="bx-code-note">The bottom half of the diamond is the same loop body as the top half, with the outer loop running backwards from n - 1. Starting it at n would print the widest row twice.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">How many spaces? A quick table for row i of n rows</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Shape</th><th scope="col">Spaces before row i</th><th scope="col">Items in row i</th><th scope="col">Item printed</th></tr></thead>
        <tbody>
          <tr><td>Right-aligned triangle</td><td><code>n - i</code></td><td><code>i</code></td><td><code>"#"</code> with no space after it</td></tr>
          <tr><td>Pyramid (solid)</td><td><code>n - i</code></td><td><code>2 * i - 1</code></td><td><code>"*"</code> with no space after it</td></tr>
          <tr><td>Pyramid (spaced stars)</td><td><code>n - i</code></td><td><code>i</code></td><td><code>"* "</code>, the trailing space does the widening</td></tr>
          <tr><td>Inverted pyramid</td><td><code>i - 1</code></td><td><code>2 * (n - i) + 1</code></td><td><code>"*"</code></td></tr>
          <tr><td>Diamond</td><td>pyramid of n rows, then inverted pyramid of n - 1 rows</td><td>as each half</td><td><code>"*"</code></td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Spaces are where most pattern answers go wrong under exam pressure, so in the class every student draws the grid on squared paper first and writes the space count beside each row. The same habit of counting each pass is drilled on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="characters">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do number, letter and 0 1 patterns work?</p>
      <h2>Number pattern Java Class 10: letters, 0 and 1, palindromes and hollow shapes</h2>
      <p class="bx-lede">Once the rows, limits and spaces are right, the remaining work is the value printed at position (i, j). It can be a formula, a char made from a number, two loops that climb and then fall, or an if-else that picks the border.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Pattern</th><th scope="col">What is printed at (i, j)</th><th scope="col">Why it works</th></tr></thead>
        <tbody>
          <tr><td>0 1 triangle</td><td><code>(i + j) % 2</code></td><td>i + j changes parity at each step along a row and each step down a column</td></tr>
          <tr><td>Letter triangle</td><td><code>(char) ('A' + j - 1)</code></td><td>'A' is 65; adding j - 1 and casting back gives A, B, C</td></tr>
          <tr><td>Palindrome pyramid</td><td>j from 1 up to i, then j from i - 1 down to 1</td><td>Two inner loops: one climbs, one falls, so each row reads the same both ways</td></tr>
          <tr><td>Hollow square</td><td><code>"* "</code> when i or j is 1 or n, else two spaces</td><td>Only the border passes the test; the gap must be as wide as a star plus its space</td></tr>
          <tr><td>Word triangle</td><td><code>w.substring(0, i)</code></td><td>Row i shows the first i letters, so one loop is enough</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>RuleChars.java</b><span>the value at row i, column j</span></figcaption>
  <pre>class RuleChars {
    static void binaryTriangle(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= i; j++)
                System.out.print((i + j) % 2 + " ");
            System.out.println();
        }
    }
    static void letterTriangle(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= i; j++)
                System.out.print((char) ('A' + j - 1) + " ");
            System.out.println();
        }
    }
    static void palinPyramid(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int s = 1; s &lt;= n - i; s++)
                System.out.print(" ");
            for (int j = 1; j &lt;= i; j++)        <i>// climb: 1 to i</i>
                System.out.print(j);
            for (int j = i - 1; j &gt;= 1; j--)    <i>// descend: i-1 to 1</i>
                System.out.print(j);
            System.out.println();
        }
    }
    static void hollowSquare(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        }
    }
    static void wordTriangle(String w) {
        for (int i = 1; i &lt;= w.length(); i++)
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
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>0
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
BLUEJ</pre>
  <p class="bx-code-note">Without the cast, 'A' + j - 1 is an int and the letter triangle prints 65, 66, 67. The cast must wrap the whole sum, which is why it sits outside the brackets.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Turn one pattern into another: practice changes</h3>
    <p>Each change below touches one rule only. Make it in BlueJ, predict the output first, then run it.</p>
    <ol class="bx-qlist">
      <li>In <code>binaryTriangle</code>, print <code>(i + j + 1) % 2</code>. The triangle now starts with 1 instead of 0.</li>
      <li>In <code>letterTriangle</code>, print <code>(char) ('A' + i - 1)</code>. Every row repeats one letter: A, B B, C C C.</li>
      <li>In <code>palinPyramid</code>, remove the spaces loop. The rows become a left-aligned stack of palindromes.</li>
      <li>In <code>hollowSquare</code>, add <code>|| i == j</code> to the test. A diagonal now crosses the square.</li>
      <li>In <code>wordTriangle</code>, print <code>w.substring(w.length() - i)</code>. The word now builds from its last letter: J, EJ, UEJ.</li>
    </ol>
    <p class="bx-mt-40">
      Single letters printed with charAt instead of substring belong to the string family on
      <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>, and tracing what a pattern prints without running it is practised on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Computer Applications output questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="exam">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Where do patterns appear in the ICSE paper?</p>
      <h2>Pattern programs in the ICSE 2027 paper, and how they are marked</h2>
      <p class="bx-lede">Patterns appear in two places: as a full Section B program, and very often as one part of a method overloading question, where one version of the method prints a pattern and the others do something else. They also turn up in Section A as short trace questions.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Inside an overloading question</h3><p>A recent pattern in board papers has been one method name with two or three parameter lists, one of which prints a number or symbol pattern. The pattern part is often the quickest marks in the question if the loop rules are second nature.</p></div>
      <div class="bx-card"><h3>As a menu choice</h3><p>A switch menu may offer a pattern as option 1 and a series as option 2. The pattern code goes inside its case, followed by break, and the default case handles a wrong choice.</p></div>
      <div class="bx-card"><h3>As a trace in Section A</h3><p>A short nested loop is shown and the student writes what it prints. The same rules work backwards: read the limits to find the item count per row.</p></div>
      <div class="bx-card"><h3>What earns the marks</h3><p>Correct loops and limits, a println at the end of each row, sensible variable names, comments on what each loop does and the variable description table. A shape that is off by one row usually loses part of the logic marks.</p></div>
      <div class="bx-card"><h3>Check two rows by hand</h3><p>Before moving on, trace row 1 and row n on the margin. Most wrong patterns are wrong at one end, and two quick traces catch both kinds of off-by-one.</p></div>
      <div class="bx-card"><h3>Keep it to for loops</h3><p>A pattern can be printed with while loops, but for loops show the counter, the limit and the step on one line, which makes the logic easy for the examiner to follow.</p></div>
    </div>
    <p class="bx-mt-40">
      Overloading answers with a pattern inside are worked on
      <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading for ICSE Class 10</a>, and how often the pattern-in-overloading question came up in recent years is mapped on
      <a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">ICSE Computer Applications previous year papers, solved</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are patterns taught in the live class?</p>
      <h2>From squared paper to BlueJ: a pattern lesson in the mini batch</h2>
      <p class="bx-lede">Students see a new shape, plan it with the three questions, write it by hand and only then type it. The plan is the skill; typing is the check.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>A fresh shape on the shared screen</h4><p>At the Tuesday 5:30 PM IST class the teacher shows a pattern nobody has seen before, often a small variation of one on this page.</p></li>
      <li class="bx-step"><h4>Rows, limits, spaces and value, written as a plan</h4><p>Each student writes the four answers in a box before any code: the outer limit, the inner limit in terms of i, the space count and the value printed.</p></li>
      <li class="bx-step"><h4>Hand-written program, timed</h4><p>The program is written on paper against a clock, with a variable description table, as it would be in the paper.</p></li>
      <li class="bx-step"><h4>Run in BlueJ, fixed in front of the group</h4><p>The best and the most instructive wrong answers are typed and run. A tilted pyramid or a missing row is traced back to the one limit that caused it.</p></li>
      <li class="bx-step"><h4>Patterns inside full mock papers</h4><p>From December, patterns appear inside overloading and menu questions in complete two-hour mock papers, marked the way the board marks.</p></li>
    </ol>
    <p class="bx-mt-40">
      The other program families taught the same way are listed on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>; the next two to learn after patterns are
      <a class="bx-link" href="/icse-class-10-series-programs-java">series programs in Java</a> and
      <a class="bx-link" href="/icse-class-10-menu-driven-programs">menu driven programs with switch case</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise patterns in the mini batch, or one to one',
  chooseLede: 'Both formats use the four loop rules, the planning box and the BlueJ check. Families in India can choose the fixed evening mini batch or a private slot; ICSE students living abroad are taught one to one. Billing is monthly and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A new pattern planned on paper most weeks',
    'Wrong shapes run and fixed while the group watches',
    'Patterns revisited inside overloading and menu questions'
  ],
  choosePersonal: [
    'A time chosen by the family, in India or abroad',
    'Extra time on whichever rule your child finds hard, often spaces',
    'Shapes chosen to match the school\'s own worksheets',
    'Harder patterns added once the basic triangles are secure',
    'Same teachers, same 2027 syllabus, same BlueJ checks'
  ],
  chooseAfter: 'A student who freezes at any pattern that is not in the textbook usually needs a few one to one sessions on the three questions, and then the shapes stop being a problem. A student who wants all of Section B practised week by week, with patterns as one family among several, fits the twice-weekly batch. Fees are shown in your own currency.',
  zonesH2: 'Pattern program practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India set the same Computer Applications paper, so the same nested loop patterns turn up in their Section B. Overseas, the lessons run one to one at an early evening hour in the student\'s own time zone.',
  zonesAfter: 'The slot is fixed after the free demo and can move around school tests. Families overseas can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about pattern programs',
  faqH2: 'What students ask about ICSE pattern programs',
  faqs: [
    ['How do I solve any pattern program in Java?', 'Answer three questions before coding. How many rows are there? That is the outer loop. How many items are in row i? That is the inner loop limit, written using i. What is printed at row i, column j? That is the print statement. If the shape is pushed to the right, add a spaces loop before the items. Then trace row 1 and the last row by hand.'],
    ['Are pattern programs important for ICSE Class 10?', 'Yes. They test nested loops, which are part of the 2027 Computer Applications syllabus, and they appear as Section B programs, as one part of method overloading questions and as Section A trace questions. A student who knows the loop rules can usually collect these marks quickly.'],
    ['What is the difference between print and println in pattern programs?', 'print leaves the cursor on the same line, so the items of one row sit side by side. println moves to a new line. In a pattern, print goes inside the inner loop and a single println goes after the inner loop, once per row. Putting println inside the inner loop prints every item on its own line.'],
    ['How do you print a star pyramid in Java?', 'Use an outer loop for i from 1 to n. Inside it, print n - i spaces, then 2 * i - 1 stars with no space between them, then call println. For n = 5 the first row has four spaces and one star, and the last row has nine stars and no spaces.'],
    ['How do you print a letter pattern such as A, AB, ABC in Java?', 'Print (char) (\'A\' + j - 1) inside the inner loop, where j runs from 1 to i. Adding a number to a char gives an int, so the cast is needed to turn the code back into a letter. Without it the program prints 65, 66 and 67.'],
    ['How do you print a 0 and 1 triangle pattern in Java?', 'Print (i + j) % 2 at row i, column j. The sum i + j changes between odd and even at every step, so the digits alternate along each row and each column. Use (i + j + 1) % 2 instead if the first row must start with 1.'],
    ['How do you print a hollow square or hollow triangle?', 'Loop over every position in the grid and use an if-else. Print the symbol when the position is on the border (first row, last row, first column or last column) and print blanks otherwise. The blank must be as wide as the symbol plus any space printed after it.'],
    ['Which loop is best for pattern programs?', 'The for loop, because the start, the limit and the step of each counter sit on one line, and a pattern is a fixed number of rows and items. While and do-while loops can print patterns too, but they make the limits harder to see and to mark.'],
    ['Is recursion used for patterns in ICSE 2027?', 'No. Recursion is not part of the ICSE Computer Applications syllabus for 2027. Every pattern the paper can ask is printed with nested for loops, sometimes inside a method that takes n, a character or a word as a parameter.'],
    ['Do you teach pattern programs in live classes?', 'Yes. In the ICSE mini batch a new pattern is planned on paper, written against the clock, then run and fixed in BlueJ on a shared screen. Students who need more time on nested loops can take personalised one to one classes at a time the family chooses.']
  ],
  startH2: 'Try a free live pattern programs class',
  startHtml: `        <p>In the free demo your child meets a pattern they have not seen before, plans it with the mentor using rows, limits, spaces and the printed value, writes the code and runs it in BlueJ. You then hear honestly whether nested loops are already secure, and whether the mini batch or one to one will help more.</p>
        <p>Looking at the whole subject first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Pattern programs 2027'
};
