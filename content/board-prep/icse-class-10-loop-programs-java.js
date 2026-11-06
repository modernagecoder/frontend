// ICSE Class 10 Computer Applications (Java): loops and loop conversion.
// Intent: "loop programs icse class 10", "for while do while icse", "convert
// for loop to while icse", "nested loops icse", "iterative constructs java".
// Distinct from ic02 (output tracing), the pattern and series program pages
// and ic16 (error finding): this page is about the loop constructs themselves,
// converting one loop into another, counting iterations, nested loops with
// break and continue, and two loop-shaped Section B programs (a sentinel
// do-while and Euclid's GCD). No pattern or series programs here. Every
// snippet is original and none repeats a snippet on the output questions
// page. Inside the 2027 syllabus: no recursion. Every loop, count and
// program on this page was compiled with javac 21 (OpenJDK 21.0.12) and run
// with java 21 on 2026-11-06 from scratch files outside the repo; the two
// Scanner programs were run with the inputs shown, and every count and final
// value below is pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-class-10-loop-programs-java',
  code: 'ic33',
  board: 'icse',
  themeColor: '#2E5566',
  dateModified: '2026-11-06',
  title: 'Loop Programs ICSE Class 10: for, while, do-while 2027',
  description: 'Loop programs ICSE Class 10: for, while and do-while compared, loop conversion worked both ways, iteration-count drills, nested loops, break and continue.',
  ogTitle: 'Loop Programs for ICSE Class 10: Conversion and Counting Drills',
  ogDesc: 'The three Java loops for ICSE Class 10 compared, the same loop converted from for to while to do-while, ten iteration-count drills with final values, nested loops, break and continue, and two full loop programs. Every count was run in Java 21.',
  twDesc: 'for, while and do-while for ICSE Class 10: loop conversion, iteration counts, nested loops, break and continue, all run in Java.',
  headline: 'Loop Programs for ICSE Class 10: for, while and do-while, Loop Conversion and Iteration Counts for 2027',
  courseName: 'ICSE Class 10 Computer Applications (Java) Loops and Iterative Constructs Practice, Live Online',
  courseDesc: 'Live online practice of iterative constructs for ICSE Class 10 Computer Applications in the 2027 examination: for, while and do-while loops, converting one loop into another, counting iterations and final values, nested loops, break and continue, and loop-based Section B programs, each written on paper and then run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Loops',
  navLinks: [['#kinds', 'Three loops'], ['#convert', 'Conversion'], ['#count', 'Counting'], ['#nested', 'Nested loops'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Loop programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Iterative constructs 2027',
  h1: 'Loop programs for ICSE Class 10: convert them, count them, nest them.',
  lede: 'Loop programs in ICSE Class 10 are tested in two ways: short Section A questions that ask you to convert a loop or count its passes, and Section B programs that are built on a loop. This page covers both. It compares for, while and do-while, converts the same loop all three ways, gives ten counting drills with final values, then nested loops, break and continue, and two full programs. Every loop was run in Java 21. In our live mini batch these drills are timed and then run in BlueJ.',
  heroNote: 'Live online &middot; loop conversion both ways &middot; 10 counting drills &middot; nested loops &middot; break and continue &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Class 10 loop programs in Java.',
  timetable: {
    label: 'When loops are practised',
    title: 'Loop drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, conversion and counting', '5:30', 'PM IST'],
      ['Wednesday, a loop program built', '8:00', 'PM IST'],
      ['Loop types converted between', '3', 'ways'],
      ['Every count proved in', 'BlueJ', 'live']
    ],
    zones: '<b>Inside India:</b> join the group on both evenings shown. <b>Elsewhere:</b> one to one loop practice, booked for a local after-school hour in the UAE, Oman, Singapore or anywhere an ICSE school runs.',
    stamps: ['Entry and exit controlled', 'Every pass counted']
  },
  picksH2: 'Courses where loops are built properly',
  picksLede: 'The ICSE Java course where the mini batch converts, counts and builds loops every week, the Class 11 and 12 Computer Science course where nested loops grow into matrix and search work, and the data structures course for students who want to count loop steps the way algorithms are analysed.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every loop is converted, counted on paper and then run in BlueJ.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where nested loops drive matrices, searching and number problems.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who likes counting passes and wants to learn how programmers measure the cost of a loop.' }
  ],
  capsule: 'Loop programs in ICSE Class 10 use Java\'s three iterative constructs. for suits a known number of passes; while is entry controlled and may run zero times; do-while is exit controlled and always runs at least once. Any loop converts into the others by moving the initialisation before the loop and the update to the end of the body, but a do-while differs when its condition starts false. Section A asks for conversions and counts; Section B programs are built on loops. Loops are taught live in our ICSE evening mini batch in India, and one to one everywhere.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="kinds">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is the difference between for, while and do-while?</p>
      <h2>for, while and do-while in ICSE Java, compared</h2>
      <p class="bx-lede">for and while test the condition before each pass, so they are entry controlled and can run zero times. do-while tests after each pass, so it is exit controlled and always runs at least once. Choose for when the count is known, while when it is not, do-while when the body must run first.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Feature</th><th scope="col">for</th><th scope="col">while</th><th scope="col">do-while</th></tr></thead>
        <tbody>
          <tr><td>Where the test is</td><td>Before each pass</td><td>Before each pass</td><td>After each pass</td></tr>
          <tr><td>Control type</td><td>Entry controlled</td><td>Entry controlled</td><td>Exit controlled</td></tr>
          <tr><td>Least number of passes</td><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">1</td></tr>
          <tr><td>Best used when</td><td>The number of passes is known</td><td>It depends on data, such as digits left</td><td>The body must run once, such as a menu or input check</td></tr>
          <tr><td>Initialisation and update</td><td>Both inside the header</td><td>Before the loop and inside the body</td><td>Before the loop and inside the body</td></tr>
          <tr><td>Semicolon</td><td>None after the header</td><td>None after the condition</td><td>Required after <code>while (...)</code></td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Infinite loop</h3><p>A loop whose condition never becomes false: <code>for ( ; ; )</code>, <code>while (true)</code>, or a test the variable can jump past. <code>i != 10</code> with <code>i += 2</code> from 1 skips 10 for ever; our run stopped it after 1,000 passes with i at 2001.</p></div>
      <div class="bx-card"><h3>Empty loop</h3><p>A loop with no statement in its body, such as <code>for (int i = 0; i &lt; 1000; i++);</code>. It only uses up time, so older textbooks call it a delay loop.</p></div>
      <div class="bx-card"><h3>Finite loop</h3><p>A loop with a condition that is certain to fail after a fixed number of passes. Every loop in a Section B answer should be finite, and your trace should prove it.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="convert">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you convert a for loop to a while loop in ICSE?</p>
      <h2>Convert for loop to while in ICSE, and on to do-while</h2>
      <p class="bx-lede">Move the initialisation above the loop, keep the condition in the while brackets, and put the update as the last statement of the body. For do-while, keep the same three pieces but move the test to the end, after a semicolon-terminated while.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>for</b><span>multiples of 5 up to 25</span></figcaption>
  <pre>for (int i = 5; i &lt;= 25; i += 5)
    System.out.print(i + " ");

<i>// Output: 5 10 15 20 25</i></pre>
  <p class="bx-code-note">Initialisation i = 5, condition i &lt;= 25, update i += 5, all in one header.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>while</b><span>the same loop</span></figcaption>
  <pre>int i = 5;
while (i &lt;= 25) {
    System.out.print(i + " ");
    i += 5;
}
<i>// Output: 5 10 15 20 25</i></pre>
  <p class="bx-code-note">Braces are now needed, because the body holds two statements: the print and the update.</p>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>do-while</b><span>the same loop again</span></figcaption>
  <pre>int i = 5;
do {
    System.out.print(i + " ");
    i += 5;
} while (i &lt;= 25);
<i>// Output: 5 10 15 20 25</i></pre>
  <p class="bx-code-note">Same output, because the condition is true at the start. Note the semicolon after while (i &lt;= 25).</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>while to for</b><span>digit sum the other way round</span></figcaption>
  <pre>// while version
int n = 1234, s = 0;
while (n != 0) {
    s += n % 10;
    n /= 10;
}
// for version
int n, s = 0;
for (n = 1234; n != 0; n /= 10)
    s += n % 10;
<i>// Both give s = 10, n = 0</i></pre>
  <p class="bx-code-note">Going from while to for, lift the update n /= 10 out of the body into the third part of the header.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">When conversion changes the answer</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Code</th><th scope="col">Passes (run)</th><th scope="col">k after</th></tr></thead>
        <tbody>
          <tr><td><code>int k = 20, c = 0;</code><br><code>while (k &lt; 10) { c++; k++; }</code></td><td class="bx-num">0</td><td class="bx-num">20</td></tr>
          <tr><td><code>int k = 20, c = 0;</code><br><code>do { c++; k++; } while (k &lt; 10);</code></td><td class="bx-num">1</td><td class="bx-num">21</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      If a question asks you to convert into do-while, check the starting values: when the condition is false at the start, the two are not equivalent, and saying so earns credit. Loops that print shapes have their own conversion habits on
      <a class="bx-link" href="/icse-class-10-pattern-programs-java">pattern programs for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="count">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How many times will the loop execute?</p>
      <h2>Iterative constructs in Java: ten iteration-count drills</h2>
      <p class="bx-lede">List every value the loop variable takes, including the one that fails the test, then count the values that passed. For a counting loop that adds a fixed step, the shortcut is (last value reached minus first) divided by step, plus 1. Cover the right two columns and try each.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Loop</th><th scope="col">Values that pass</th><th scope="col">Passes</th><th scope="col">Variable after</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>for (i = 3; i &lt;= 30; i += 3)</code></td><td>3, 6, ... 30</td><td class="bx-num">10</td><td class="bx-num">i = 33</td></tr>
          <tr><td>2</td><td><code>for (i = 100; i &gt;= 1; i /= 2)</code></td><td>100, 50, 25, 12, 6, 3, 1</td><td class="bx-num">7</td><td class="bx-num">i = 0</td></tr>
          <tr><td>3</td><td><code>for (i = 1; i &lt; 50; i *= 3)</code></td><td>1, 3, 9, 27</td><td class="bx-num">4</td><td class="bx-num">i = 81</td></tr>
          <tr><td>4</td><td><code>int x = 15;</code><br><code>while (x &gt; 0) x -= 4;</code></td><td>15, 11, 7, 3</td><td class="bx-num">4</td><td class="bx-num">x = -1</td></tr>
          <tr><td>5</td><td><code>int i = 0;</code><br><code>do { i += 7; } while (i &lt; 30);</code></td><td>Body runs, then i is 7, 14, 21, 28, 35</td><td class="bx-num">5</td><td class="bx-num">i = 35</td></tr>
          <tr><td>6</td><td><code>for (int i = 10; i &lt; 10; i++)</code></td><td>None: 10 &lt; 10 is false</td><td class="bx-num">0</td><td>Not in scope</td></tr>
          <tr><td>7</td><td><code>for (ch = 'a'; ch &lt;= 'z'; ch += 5)</code></td><td>a, f, k, p, u, z</td><td class="bx-num">6</td><td>Code 127, past z</td></tr>
          <tr><td>8</td><td><code>int n = 64, k = 0;</code><br><code>while (n &gt; 1) { n /= 2; k++; }</code></td><td>n = 64, 32, 16, 8, 4, 2</td><td class="bx-num">6</td><td class="bx-num">n = 1, k = 6</td></tr>
          <tr><td>9</td><td><code>for (i = 1, j = 10; i &lt; j; i++, j--)</code></td><td>(1,10) (2,9) (3,8) (4,7) (5,6)</td><td class="bx-num">5</td><td class="bx-num">i = 6, j = 5</td></tr>
          <tr><td>10</td><td><code>int i = 1;</code><br><code>while (i != 10) i += 2;</code></td><td>1, 3, 5, 7, 9, 11 ...</td><td>Never stops</td><td>Odd values skip 10</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Drill 1 matches the shortcut: (30 minus 3) divided by 3, plus 1, is 10. The shortcut fails for loops that multiply or divide (drills 2, 3 and 8), so list those values. In drills 2 and 3 the variable is declared outside the loop, which is why its final value can be asked. More loops traced to their printed output are on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="nested">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do nested loops, break and continue work?</p>
      <h2>Nested loops ICSE: counting inner passes, with break and continue</h2>
      <p class="bx-lede">In a nested loop the inner loop runs completely for every single pass of the outer loop. break leaves only the loop it sits in; continue skips the rest of the current pass and goes to the next one.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Nested loop</th><th scope="col">Inner passes per outer i</th><th scope="col">Total inner passes (run)</th></tr></thead>
        <tbody>
          <tr><td><code>for (i = 1; i &lt;= 5; i++)</code><br><code>&nbsp;&nbsp;for (j = 1; j &lt;= 4; j++)</code></td><td>4 every time</td><td class="bx-num">5 x 4 = 20</td></tr>
          <tr><td><code>for (i = 1; i &lt;= 5; i++)</code><br><code>&nbsp;&nbsp;for (j = i; j &lt;= 5; j++)</code></td><td>5, 4, 3, 2, 1</td><td class="bx-num">15</td></tr>
          <tr><td><code>for (i = 1; i &lt;= 4; i++)</code><br><code>&nbsp;&nbsp;for (j = 1; j &lt;= i * 2; j++)</code></td><td>2, 4, 6, 8</td><td class="bx-num">20</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Nested loop with break</b><span>primes from 10 to 30</span></figcaption>
  <pre>for (int n = 10; n &lt;= 30; n++) {
    boolean prime = true;
    for (int d = 2; d * d &lt;= n; d++) {
        if (n % d == 0) {
            prime = false;
            break;
        }
    }
    if (prime)
        System.out.print(n + " ");
}
<i>// Output: 11 13 17 19 23 29</i></pre>
  <p class="bx-code-note">break ends the divisor search as soon as one divisor is found; the outer loop simply moves to the next n.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">n</th><th scope="col">Divisors tried</th><th scope="col">Result</th></tr></thead>
          <tbody>
            <tr><td class="bx-num">10</td><td>2 divides, break</td><td>not prime</td></tr>
            <tr><td class="bx-num">11</td><td>2, 3 (4 x 4 &gt; 11 ends it)</td><td>prime</td></tr>
            <tr><td class="bx-num">15</td><td>2, then 3 divides, break</td><td>not prime</td></tr>
            <tr><td class="bx-num">25</td><td>2, 3, 4, then 5 divides, break</td><td>not prime</td></tr>
            <tr><td class="bx-num">29</td><td>2, 3, 4, 5 (6 x 6 &gt; 29)</td><td>prime</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Jump statement</th><th scope="col">Code</th><th scope="col">Result (run)</th><th scope="col">What happened</th></tr></thead>
        <tbody>
          <tr><td>continue</td><td><code>for (int i = 1; i &lt;= 10; i++) {</code><br><code>&nbsp;&nbsp;if (i % 3 == 0) continue;</code><br><code>&nbsp;&nbsp;s += i;</code><br><code>}</code></td><td class="bx-num">s = 37</td><td>3, 6 and 9 skipped: 55 minus 18</td></tr>
          <tr><td>break</td><td><code>for (n = 51; ; n++)</code><br><code>&nbsp;&nbsp;if (n % 7 == 0) break;</code></td><td class="bx-num">n = 56</td><td>A for with no condition stops only at the break</td></tr>
          <tr><td>break on a total</td><td><code>for (i = 1; i &lt;= 20; i++) {</code><br><code>&nbsp;&nbsp;if (s &gt; 30) break;</code><br><code>&nbsp;&nbsp;s += i;</code><br><code>}</code></td><td class="bx-num">s = 36, i = 9</td><td>s passes 30 after adding 8; the test at i = 9 breaks</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Nested loops are the engine of two whole program families:
      <a class="bx-link" href="/icse-class-10-2d-array-programs">2D array programs</a> and
      <a class="bx-link" href="/icse-class-10-series-programs-java">series programs in Java</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What do loop programs look like in Section B?</p>
      <h2>Two loop programs for ICSE Class 10, written and run</h2>
      <p class="bx-lede">Section B is any four of six programs at 15 marks each, and nearly every one has a loop at its heart. These two show the loops this page has not yet used for real work: a do-while that reads until a stop value, and a while loop whose number of passes nobody knows in advance.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>do-while with a sentinel</b><span>read until 0 is entered</span></figcaption>
  <pre>import java.util.Scanner;

public class Sentinel {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int pos = 0, neg = 0, total = 0, num;
        do {
            System.out.print("Enter a number (0 to stop): ");
            num = in.nextInt();
            if (num &gt; 0) pos++;
            else if (num &lt; 0) neg++;
            total += num;
        } while (num != 0);
        System.out.println();
        System.out.println("Positive: " + pos);
        System.out.println("Negative: " + neg);
        System.out.println("Total: " + total);
    }
}
<i>// Input: 8 -3 15 -6 4 0</i>
<i>// Positive: 3</i>
<i>// Negative: 2</i>
<i>// Total: 18</i></pre>
  <p class="bx-code-note">do-while fits because a number must be read before the stop test can mean anything. The 0 adds nothing to the total and counts as neither sign.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>while with an unknown count</b><span>GCD and LCM by Euclid</span></figcaption>
  <pre>import java.util.Scanner;

public class Gcd {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter two numbers: ");
        int a = in.nextInt(), b = in.nextInt();
        int x = a, y = b;
        while (y != 0) {
            int r = x % y;
            x = y;
            y = r;
        }
        System.out.println("GCD = " + x);
        System.out.println("LCM = " + (a * b / x));
    }
}
<i>// Input: 84 36</i>
<i>// GCD = 12</i>
<i>// LCM = 252</i></pre>
  <p class="bx-code-note">Pass 1: 84 % 36 is 12, so x, y become 36, 12. Pass 2: 36 % 12 is 0, so x, y become 12, 0 and the loop ends. Copies x and y keep a and b safe for the LCM.</p>
</figure>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Name the loop type in a comment</h3><p>A one-line comment such as "exit controlled: input must be read first" shows the examiner you chose the loop on purpose.</p></div>
      <div class="bx-card"><h3>Keep the original input</h3><p>When a loop destroys a number by dividing it, work on a copy, as the GCD program does. Many lost marks come from printing a variable that the loop has already reduced to 0.</p></div>
      <div class="bx-card"><h3>Describe the variables</h3><p>The ICSE paper asks for programs written with variable descriptions or meaningful names. List each loop counter with its purpose, not just its type.</p></div>
    </div>
    <p class="bx-mt-40">
      The full list of program families with loops at their core, from special numbers to menus, is on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a> and
      <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are loops taught in the live classes?</p>
      <h2>How the mini batch practises loops every week</h2>
      <p class="bx-lede">Loops are learnt by counting passes on paper until the count is always right, then writing programs where the loop does real work. Each week covers both.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: convert and count</h4><p>At the 5:30 PM IST class students get a set of loops to convert between for, while and do-while, and a set to count, with the final value of the variable asked as well.</p></li>
      <li class="bx-step"><h4>BlueJ settles every count</h4><p>The teacher adds a counter to each loop and runs it on a shared screen, so the right count is shown, not argued.</p></li>
      <li class="bx-step"><h4>The missed value found</h4><p>A wrong count is nearly always one missing or extra value in the list. The student reads their list aloud until the gap shows up.</p></li>
      <li class="bx-step"><h4>Wednesday: a loop program</h4><p>At the 8:00 PM IST class the batch writes a full Section B program around a loop: digits, factors, sentinel input or nested search, with a variable list.</p></li>
      <li class="bx-step"><h4>Loops under exam conditions</h4><p>From December the batch sits complete mock papers, where conversions sit in Section A and loop programs in Section B, each scored to the ICSE marking pattern.</p></li>
    </ol>
    <p class="bx-mt-40">
      Loop mistakes that compile but give wrong answers, such as stopping one pass short, are collected on
      <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Java error finding questions</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise loops in the mini batch, or one to one',
  chooseLede: 'The conversion sets, counting drills and BlueJ checks are the same in both formats. Families in India pick the evening mini batch or a private slot; ICSE students abroad learn one to one. Monthly billing, no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM IST and Wednesday 8:00 PM IST',
    'Six students at most, so every count gets checked',
    'Conversion and counting sets every Tuesday',
    'A full loop program built every Wednesday',
    'Every count proved by running it in BlueJ'
  ],
  choosePersonal: [
    'A slot the family picks, in India or abroad',
    'Extra work on nested loops if those are the weak spot',
    'Your child\'s own programs checked loop by loop',
    'Harder counting drills as accuracy grows',
    'Same teachers, same 2027 syllabus, same BlueJ checks'
  ],
  chooseAfter: 'A student who can write simple loops but loses track inside nested ones often needs a handful of one to one sessions to fix the counting habit. A student who wants loops practised alongside the rest of the syllabus every week is better placed in the batch. Fees are shown in your own currency.',
  zonesH2: 'Loop practice for ICSE students outside India',
  zonesLede: 'ICSE schools in the Gulf and South East Asia sit the same Computer Applications paper, with the same conversion and counting questions. Outside India these drills run one to one, after school in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and can move around school exams. The overseas arrangement is described on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about loops',
  faqH2: 'What students ask about loop programs in ICSE Class 10',
  faqs: [
    ['What are iterative constructs in Java?', 'Iterative constructs are statements that repeat a block of code while a condition holds. Java has three: the for loop, the while loop and the do-while loop. ICSE calls them iterative constructs, and they also cover nested loops and the jump statements break and continue that change how a loop runs.'],
    ['What is the difference between while and do-while?', 'while checks its condition before each pass, so it is entry controlled and may not run at all. do-while checks after each pass, so it is exit controlled and always runs at least once. A do-while also needs a semicolon after its closing while (condition).'],
    ['How do you convert a for loop into a while loop?', 'Take the three parts of the for header apart. Write the initialisation as a statement before the loop, put the condition inside while ( ), and make the update the last statement inside the loop body, adding braces if the body now has more than one statement. The output stays the same.'],
    ['How do you find how many times a loop will execute?', 'Write down every value the loop variable takes, starting from the first, and stop at the first value that makes the condition false. Count the values before it. For a loop that adds a fixed step, (last value reached minus first value) divided by the step, plus 1, gives the same answer quickly.'],
    ['What is an entry controlled and an exit controlled loop?', 'An entry controlled loop tests its condition before running the body, so it can run zero times; for and while are entry controlled. An exit controlled loop runs the body first and tests afterwards, so it runs at least once; do-while is the only exit controlled loop in Java.'],
    ['What is the difference between break and continue?', 'break ends the loop immediately and control moves to the first statement after it. continue ends only the current pass: the rest of the body is skipped and the loop goes on to its next pass, running the update first in a for loop. In nested loops both affect only the innermost loop they sit in.'],
    ['What is a nested loop in Java with an example?', 'A nested loop is a loop placed inside the body of another loop. The inner loop completes all its passes for each single pass of the outer loop. If the outer loop runs 5 times and the inner loop 4 times, the inner body runs 20 times. Nested loops are used for patterns, tables and 2D arrays.'],
    ['What is an infinite loop? Give an example.', 'An infinite loop is one whose condition never becomes false, so it never ends on its own. A for loop with all three header parts left empty, and while (true), are deliberate examples. A common accidental one starts i at 1, adds 2 each pass and tests i != 10; i is always odd, so it never equals 10.'],
    ['Which loop is best for ICSE Section B programs?', 'Use for when the number of passes is known, such as running through the digits of a fixed range or the elements of an array. Use while when the count depends on the data, such as reducing a number digit by digit. Use do-while for menus and input that must be read before it can be checked.'],
    ['Do you teach loops in the live ICSE classes?', 'Yes. The mini batch practises conversion and counting every Tuesday at 5:30 PM IST and builds a full loop program every Wednesday at 8:00 PM IST, with every answer run in BlueJ on a shared screen. Families who want a different time, or students outside India, take personalised one to one classes.']
  ],
  startH2: 'Book a free live class on loops',
  startHtml: `        <p>In the free demo your child converts a loop between for, while and do-while, counts the passes of a few tricky ones, and then watches each loop run in BlueJ with the mentor. Afterwards you get a plain account of where the counting goes wrong and whether the mini batch or one to one suits your child better.</p>
        <p>Want to see more first? Try <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a> or see <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Loop programs 2027'
};
