// ICSE Class 10 Computer Applications (Java): predict the output questions,
// grouped by the trap each one sets. Intent: "icse computer applications output
// questions", "predict the output java icse", "dry run questions icse class 10",
// "icse java output questions with answers", "loop output questions icse".
// Distinct from iiq (unit-wise important questions, ten mixed outputs), ic16
// (error finding) and ic33 (loop programs): this page is only output tracing,
// sorted into eleven trap families, with dry run trace tables for the hardest.
// Every snippet is original and none repeats a snippet on iiq. Inside the 2027
// syllabus only: no recursion, no StringBuffer, Math and Character methods from
// the syllabus list only. Every snippet on this page was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from a scratch file
// outside the repo; each printed output below is pasted from that run.
'use strict';

module.exports = {
  slug: 'icse-class-10-java-output-questions',
  code: 'ic02',
  board: 'icse',
  themeColor: '#3E4B2C',
  title: 'ICSE Computer Applications Output Questions 2027, Solved',
  description: 'ICSE Computer Applications output questions for 2027: 44 predict the output Java snippets sorted by trap, answers run in Java, with dry run trace tables.',
  ogTitle: 'ICSE Computer Applications Output Questions, Sorted by Trap',
  ogDesc: 'Forty-four original predict the output Java questions for ICSE Class 10, sorted into the traps examiners set: integer division, increments, char arithmetic, Strings, Math return types, loops, switch, ternary, short-circuit, arrays and wrappers. Every answer was run in Java, and the hardest come with a trace table.',
  twDesc: 'Predict the output Java questions for ICSE Class 10, sorted by trap, every answer run in Java, with dry run trace tables.',
  headline: 'ICSE Computer Applications Output Questions for 2027, Sorted by the Trap Each One Sets',
  courseName: 'ICSE Class 10 Computer Applications (Java) Output Tracing Practice, Live Online',
  courseDesc: 'Live online drilling of ICSE Class 10 Computer Applications predict the output questions for the 2027 examination: integer division and type promotion, increment operators, char arithmetic, String and Math method results, loop and nested loop traces, switch, ternary and short-circuit evaluation, arrays and wrapper classes, each traced on paper against a timer and then run in BlueJ on a shared screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Outputs',
  navLinks: [['#operators', 'Operators'], ['#strings', 'Strings and Math'], ['#loops', 'Loops'], ['#technique', 'Exam technique'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Output questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Output questions 2027',
  h1: 'ICSE Computer Applications output questions, sorted by the trap each one sets.',
  lede: 'ICSE Computer Applications output questions look small: four lines of Java and the question "what does this print?". They are built on a short list of traps, and a student who knows the list stops guessing. This page groups 44 original snippets by trap, gives the exact output of each (every one was compiled and run in Java 21), and traces the hardest step by step. In our live mini batch the same traps are drilled against a timer and checked in BlueJ while the class watches.',
  heroNote: 'Live online &middot; 44 traced snippets &middot; eleven trap families &middot; every answer run in BlueJ &middot; Section A drilled weekly &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Class 10 Java output questions.',
  timetable: {
    label: 'When output tracing is drilled',
    title: 'Output drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, timed trace sets', '5:30', 'PM IST'],
      ['Wednesday, traces inside programs', '8:00', 'PM IST'],
      ['Trap families in rotation', '11', 'cycled'],
      ['Every answer checked in', 'BlueJ', 'on screen']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same trace drills one to one, after school in your own time zone, for ICSE students in the UAE, Singapore, Indonesia and beyond.',
    stamps: ['Section A &middot; 40 marks', 'Traced, then run']
  },
  picksH2: 'Courses that train output tracing',
  picksLede: 'The ICSE Java course where the mini batch drills these traps, the Class 11 and 12 Computer Science course where the same tracing habit carries straight into ISC, and the data structures course for the student who wants to see how tracing becomes algorithm analysis.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with a timed set of output questions every Tuesday and each answer run in BlueJ.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving on to ISC Computer Science, where output tracing returns with longer programs and harder loops.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoys dry runs and wants to count steps the way programmers analyse algorithms.' }
  ],
  capsule: 'ICSE Computer Applications output questions give a short Java fragment and ask exactly what it prints. They sit in Section A, the 40 compulsory marks, as one-mark MCQs and two-mark answers. Almost all of them test the same traps: integer division and type promotion, pre and post increment, char arithmetic, String methods and immutability, Math return types, loop counts, switch fall-through, the ternary operator, short-circuit && and ||, array default values and wrapper methods. The reliable method is a written trace table, never a guess. Modern Age Coders drills these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="operators">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Where do the arithmetic traps hide?</p>
      <h2>Predict the output Java ICSE: division, increments and char arithmetic</h2>
      <p class="bx-lede">Cover the Output column, write your answer, then check. Each row names the rule, so a wrong answer tells you exactly what to revise.</p>
    </div>
    <h3>Trap 1: integer division and type promotion</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>int a = 17, b = 5;</code><br><code>double d = a / b;</code><br><code>System.out.println(d);</code></td><td class="bx-num">3.0</td><td>17 / 5 is worked out as int first (3); only then is it widened to 3.0</td></tr>
          <tr><td>2</td><td><code>System.out.println(1 + 2 + "3" + 4 + 5);</code></td><td class="bx-num">3345</td><td>Left to right: 1 + 2 is 3, then the String takes over and every later + joins</td></tr>
          <tr><td>3</td><td><code>System.out.println((double) (9 / 4) + " " + (double) 9 / 4);</code></td><td class="bx-num">2.0 2.25</td><td>Cast after the division keeps the lost fraction lost; cast before saves it</td></tr>
          <tr><td>4</td><td><code>System.out.println(-7 / 2 + " " + -7 % 2);</code></td><td class="bx-num">-3 -1</td><td>Integer division cuts towards zero; the remainder takes the sign of the left operand</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Trap 2: pre and post increment, and compound assignment</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>5</td><td><code>int a = 5;</code><br><code>int b = a++ + ++a;</code><br><code>System.out.println(a + " " + b);</code></td><td class="bx-num">7 12</td><td>a++ gives 5 then a is 6; ++a makes a 7 and gives 7; b is 5 + 7</td></tr>
          <tr><td>6</td><td><code>int k = 3;</code><br><code>k = k++;</code><br><code>System.out.println(k);</code></td><td class="bx-num">3</td><td>The old value 3 is saved, k becomes 4, then the assignment writes 3 back</td></tr>
          <tr><td>7</td><td><code>int m = 10, n = 3;</code><br><code>m -= n-- - --n;</code><br><code>System.out.println(m + " " + n);</code></td><td class="bx-num">8 1</td><td>n-- gives 3 (n is 2), --n gives 1; m is 10 - (3 - 1)</td></tr>
          <tr><td>8</td><td><code>int y = 7;</code><br><code>y /= 2.0;</code><br><code>System.out.println(y);</code></td><td class="bx-num">3</td><td>A compound operator casts back to int silently: (int) 3.5 is 3</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Trap 3: char arithmetic and casting</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>9</td><td><code>char ch = 'a';</code><br><code>ch++;</code><br><code>System.out.println(ch + 1);</code></td><td class="bx-num">99</td><td>ch++ keeps the char type ('b'), but ch + 1 is int arithmetic: 98 + 1</td></tr>
          <tr><td>10</td><td><code>char c = '7';</code><br><code>int n = c - '0';</code><br><code>System.out.println(n * 2 + " " + c * 2);</code></td><td class="bx-num">14 110</td><td>c - '0' turns a digit character into its value; c * 2 doubles the code 55</td></tr>
          <tr><td>11</td><td><code>char p = 'P';</code><br><code>System.out.println(p + 2 + "" + (char) (p + 2));</code></td><td class="bx-num">82R</td><td>80 + 2 is added before the empty String arrives; the cast turns 82 back into R</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trace it: snippet 12</b><span>compound plus increments</span></figcaption>
  <pre>int x = 4;
x += x++ * --x;
System.out.println(x);

<i>// Output: 20</i></pre>
  <p class="bx-code-note">x += e means x = x + (e). Java saves the left x (4) before it evaluates e, so the later changes to x do not touch that saved 4.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Step</th><th scope="col">Value used</th><th scope="col">x after</th></tr></thead>
          <tbody>
            <tr><td>Save left x</td><td class="bx-num">4</td><td class="bx-num">4</td></tr>
            <tr><td>x++</td><td class="bx-num">4</td><td class="bx-num">5</td></tr>
            <tr><td>--x</td><td class="bx-num">4</td><td class="bx-num">4</td></tr>
            <tr><td>4 * 4</td><td class="bx-num">16</td><td class="bx-num">4</td></tr>
            <tr><td>4 + 16 assigned</td><td class="bx-num">20</td><td class="bx-num">20</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Precedence and the rest of this family are on
      <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="strings">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which library method answers catch students out?</p>
      <h2>ICSE Java output questions with answers: Strings, Math and wrapper classes</h2>
      <p class="bx-lede">Two facts settle most of these. A String never changes after it is made, so a method returns a new String that must be stored. And every Math method has a fixed return type, so the number of decimal places in the answer is part of the answer.</p>
    </div>
    <h3>Trap 4: String methods and String immutability</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>13</td><td><code>String s = "board";</code><br><code>s.toUpperCase();</code><br><code>s.concat("exam");</code><br><code>System.out.println(s);</code></td><td class="bx-num">board</td><td>Both results were thrown away; s still points to "board"</td></tr>
          <tr><td>14</td><td><code>String t = "MISSISSIPPI";</code><br><code>System.out.println(t.indexOf("SS", 3) + " " + t.lastIndexOf('I', 7));</code></td><td class="bx-num">5 7</td><td>The search starts at index 3, so the SS at 2 is skipped; lastIndexOf searches backwards from 7</td></tr>
          <tr><td>15</td><td><code>String w = "  Java Exam  ";</code><br><code>System.out.println(w.trim().length() + w.length());</code></td><td class="bx-num">22</td><td>9 + 13: two ints are added. trim removes only the outer spaces</td></tr>
          <tr><td>16</td><td><code>String a = "ICSE", b = "icse";</code><br><code>System.out.println(a.equals(b) + " " + a.equalsIgnoreCase(b) + " " + a.compareToIgnoreCase(b));</code></td><td class="bx-num">false true 0</td><td>Case matters to equals only; 0 means equal when case is ignored</td></tr>
          <tr><td>17</td><td><code>String s = "CAT";</code><br><code>System.out.println(s.compareTo("CATALOG"));</code></td><td class="bx-num">-4</td><td>No character differs, so compareTo returns the difference in lengths: 3 - 7</td></tr>
          <tr><td>18</td><td><code>static void change(String s) {</code><br><code>&nbsp;&nbsp;s = s + "!";</code><br><code>&nbsp;&nbsp;System.out.print(s + " ");</code><br><code>}</code><br><code>// in main:</code><br><code>String s = "Hi";</code><br><code>change(s);</code><br><code>System.out.println(s);</code></td><td class="bx-num">Hi! Hi</td><td>The method builds a new String in its own copy of s; the caller's s is untouched</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Trap 5: Math method return types</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>19</td><td><code>System.out.println(Math.sqrt(16) + Math.cbrt(27));</code></td><td class="bx-num">7.0</td><td>sqrt and cbrt always return double, even for perfect squares and cubes</td></tr>
          <tr><td>20</td><td><code>System.out.println(Math.pow(2, 3) + " " + (int) Math.pow(2, 3));</code></td><td class="bx-num">8.0 8</td><td>pow returns double; only the cast removes the .0</td></tr>
          <tr><td>21</td><td><code>System.out.println(Math.max(3, 7.5) + " " + Math.min(-2, -2.0));</code></td><td class="bx-num">7.5 -2.0</td><td>Mix an int with a double and the int is promoted, so the result is double</td></tr>
          <tr><td>22</td><td><code>System.out.println(Math.floor(-3.5) + " " + Math.round(3.49) + " " + Math.round(-3.51));</code></td><td class="bx-num">-4.0 3 -4</td><td>floor goes down and returns double; round of a double returns a long, so no .0</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Trap 6: wrapper classes and Character methods</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>23</td><td><code>System.out.println(Character.isLetterOrDigit('_') + " " + Character.isWhitespace('\\t'));</code></td><td class="bx-num">false true</td><td>The underscore is neither a letter nor a digit; a tab counts as whitespace</td></tr>
          <tr><td>24</td><td><code>char c = Character.toUpperCase('5');</code><br><code>System.out.println(c + 1);</code></td><td class="bx-num">54</td><td>toUpperCase leaves a digit alone; '5' is code 53, plus 1</td></tr>
          <tr><td>25</td><td><code>String n = "25";</code><br><code>System.out.println(n + 5 + " " + (Integer.parseInt(n) + 5) + " " + Integer.valueOf(n) / 2);</code></td><td class="bx-num">255 30 12</td><td>Joined, then added, then unboxed and divided as int</td></tr>
          <tr><td>26</td><td><code>System.out.println(Double.parseDouble("3") / 2 + Integer.toString(70).length());</code></td><td class="bx-num">3.5</td><td>1.5 plus the length of "70", which is 2</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      The full list of Math methods in the syllabus, with return types, is on
      <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE Class 10</a>, and
      autoboxing, parse methods and the Character tests are on
      <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="loops">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you count what a loop prints?</p>
      <h2>Loop output questions ICSE: iteration counts and nested loops</h2>
      <p class="bx-lede">Loop questions ask for the output, the number of passes, or both. Never count in your head. Write one row per pass with every variable that changes.</p>
    </div>
    <h3>Trap 7: how many times does it run?</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>27</td><td><code>int c = 0;</code><br><code>for (int i = 10; i &gt; 0; i -= 3) c++;</code><br><code>System.out.println(c);</code></td><td class="bx-num">4</td><td>i takes 10, 7, 4 and 1; at -2 the test fails</td></tr>
          <tr><td>28</td><td><code>int n = 50;</code><br><code>do { n += 5; } while (n &lt; 10);</code><br><code>System.out.println(n);</code></td><td class="bx-num">55</td><td>A do-while body always runs once before the condition is checked</td></tr>
          <tr><td>29</td><td><code>int t = 0;</code><br><code>for (int i = 0; i &lt; 5; i++);</code><br><code>{ t++; }</code><br><code>System.out.println(t);</code></td><td class="bx-num">1</td><td>The semicolon is the whole loop body; the block after it runs once</td></tr>
          <tr><td>30</td><td><code>for (int i = 1; i &lt;= 3; i++) {</code><br><code>&nbsp;&nbsp;for (int j = i; j &lt;= 3; j++)</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(j);</code><br><code>&nbsp;&nbsp;System.out.println();</code><br><code>}</code></td><td class="bx-num">123<br>23<br>3</td><td>The inner loop starts at i, so each line is one shorter and starts one higher</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trace it: snippet 31</b><span>digits in a while loop</span></figcaption>
  <pre>int n = 3047, r = 0;
while (n &gt; 0) {
    r = r * 10 + n % 10;
    n /= 10;
}
System.out.println(r);

<i>// Output: 7403</i></pre>
  <p class="bx-code-note">Four passes, one per digit. The middle zero survives because 740 is a real step.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Pass</th><th scope="col">n % 10</th><th scope="col">r</th><th scope="col">n after</th></tr></thead>
          <tbody>
            <tr><td>1</td><td class="bx-num">7</td><td class="bx-num">7</td><td class="bx-num">304</td></tr>
            <tr><td>2</td><td class="bx-num">4</td><td class="bx-num">74</td><td class="bx-num">30</td></tr>
            <tr><td>3</td><td class="bx-num">0</td><td class="bx-num">740</td><td class="bx-num">3</td></tr>
            <tr><td>4</td><td class="bx-num">3</td><td class="bx-num">7403</td><td class="bx-num">0, loop ends</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trace it: snippet 32</b><span>break inside nested loops</span></figcaption>
  <pre>int count = 0;
for (int i = 1; i &lt;= 4; i++)
    for (int j = 1; j &lt;= 4; j++) {
        if (j &gt; i) break;
        count++;
    }
System.out.println(count);

<i>// Output: 10</i></pre>
  <p class="bx-code-note">break leaves only the inner loop; the outer loop carries on, so the count grows 1 + 2 + 3 + 4.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">i</th><th scope="col">j values counted</th><th scope="col">Inner loop stops</th><th scope="col">count</th></tr></thead>
          <tbody>
            <tr><td class="bx-num">1</td><td class="bx-num">1</td><td>break at j = 2</td><td class="bx-num">1</td></tr>
            <tr><td class="bx-num">2</td><td class="bx-num">1, 2</td><td>break at j = 3</td><td class="bx-num">3</td></tr>
            <tr><td class="bx-num">3</td><td class="bx-num">1, 2, 3</td><td>break at j = 4</td><td class="bx-num">6</td></tr>
            <tr><td class="bx-num">4</td><td class="bx-num">1, 2, 3, 4</td><td>test fails at j = 5</td><td class="bx-num">10</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Loops that build whole programs, such as digit sums, factor counts and series, are worked through on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="control">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What about switch, the ternary operator, && and arrays?</p>
      <h2>Dry run questions ICSE Class 10: switch, ternary, short-circuit and arrays</h2>
      <p class="bx-lede">These four traps share one idea: some visible code never runs, or runs more than you expect. Mark which lines execute before writing any output.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td colspan="4"><b>Trap 8: switch fall-through</b></td></tr>
          <tr><td>33</td><td><code>int d = 2;</code><br><code>switch (d) {</code><br><code>&nbsp;&nbsp;case 1: System.out.print("A");</code><br><code>&nbsp;&nbsp;case 2: System.out.print("B");</code><br><code>&nbsp;&nbsp;case 3: System.out.print("C"); break;</code><br><code>&nbsp;&nbsp;default: System.out.print("D");</code><br><code>}</code></td><td class="bx-num">BC</td><td>Execution enters at case 2 and falls into case 3 until the break</td></tr>
          <tr><td>34</td><td><code>char g = 'x';</code><br><code>switch (g) {</code><br><code>&nbsp;&nbsp;case 'a': System.out.print(1);</code><br><code>&nbsp;&nbsp;default: System.out.print(0);</code><br><code>&nbsp;&nbsp;case 'b': System.out.print(2); break;</code><br><code>&nbsp;&nbsp;case 'c': System.out.print(3);</code><br><code>}</code></td><td class="bx-num">02</td><td>default need not be last; with no break it falls into case 'b'</td></tr>
          <tr><td>35</td><td><code>for (int i = 1; i &lt;= 3; i++) {</code><br><code>&nbsp;&nbsp;switch (i) {</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;case 1: System.out.print("x"); break;</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;case 2: System.out.print("y");</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;default: System.out.print("z");</code><br><code>&nbsp;&nbsp;}</code><br><code>}</code></td><td class="bx-num">xyzz</td><td>i = 2 prints y and falls into z; i = 3 goes straight to default</td></tr>
          <tr><td colspan="4"><b>Trap 9: the ternary operator</b></td></tr>
          <tr><td>36</td><td><code>int p = 5;</code><br><code>int q = p++ &gt; 5 ? p : p * 10;</code><br><code>System.out.println(p + " " + q);</code></td><td class="bx-num">6 60</td><td>5 &gt; 5 is false, but p has already become 6 before the false branch runs</td></tr>
          <tr><td>37</td><td><code>System.out.println(true ? 1 : 2.0);</code></td><td class="bx-num">1.0</td><td>The two branches are promoted to one type, double, even though 1 is chosen</td></tr>
          <tr><td colspan="4"><b>Trap 10: short-circuit &amp;&amp; and ||</b></td></tr>
          <tr><td>38</td><td><code>int x = 5, y = 10;</code><br><code>boolean r = (x &gt; 6) &amp;&amp; (++y &gt; 10);</code><br><code>System.out.println(r + " " + y);</code></td><td class="bx-num">false 10</td><td>The left side is false, so ++y is never evaluated</td></tr>
          <tr><td>39</td><td><code>int i = 0;</code><br><code>boolean f = (i++ == 0) &amp;&amp; (i++ == 1) || (i++ == 5);</code><br><code>System.out.println(f + " " + i);</code></td><td class="bx-num">true 2</td><td>&amp;&amp; binds first and is true, so the third i++ is skipped</td></tr>
          <tr><td colspan="4"><b>Trap 11: arrays and default values</b></td></tr>
          <tr><td>40</td><td><code>int[] a = new int[4];</code><br><code>a[1] = 5;</code><br><code>System.out.println(a[0] + a[1] + a.length);</code></td><td class="bx-num">9</td><td>Unset int elements are 0; length is a field, no brackets: 0 + 5 + 4</td></tr>
          <tr><td>41</td><td><code>double[] d = new double[2];</code><br><code>boolean[] f = new boolean[2];</code><br><code>String[] s = new String[2];</code><br><code>char[] c = new char[2];</code><br><code>System.out.println(d[0] + " " + f[1] + " " + s[0] + " " + (int) c[0]);</code></td><td class="bx-num">0.0 false null 0</td><td>Each type has its own default: 0.0, false, null and the character with code 0</td></tr>
          <tr><td>42</td><td><code>int[] p = {1, 2, 3};</code><br><code>int[] q = p;</code><br><code>q[0] = 9;</code><br><code>System.out.println(p[0] + p.length);</code></td><td class="bx-num">12</td><td>q is a second name for the same array, so p[0] is now 9; 9 + 3</td></tr>
          <tr><td>43</td><td><code>int[][] m = {{1, 2, 3}, {4, 5, 6}};</code><br><code>System.out.println(m.length + " " + m[1].length + " " + m[1][2] * m[0][1]);</code></td><td class="bx-num">2 3 12</td><td>m.length counts rows, m[1].length counts columns; 6 * 2</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trace it: snippet 44</b><span>an array that feeds itself</span></figcaption>
  <pre>int[] x = {3, 6, 9, 12};
for (int i = 1; i &lt; x.length; i++)
    x[i] = x[i] + x[i - 1];
System.out.println(x[3]);

<i>// Output: 30</i></pre>
  <p class="bx-code-note">Each pass uses the value the previous pass just changed. Adding the original values gives 21 and loses the mark.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">i</th><th scope="col">Sum worked</th><th scope="col">Array after the pass</th></tr></thead>
          <tbody>
            <tr><td class="bx-num">start</td><td>none</td><td class="bx-num">{3, 6, 9, 12}</td></tr>
            <tr><td class="bx-num">1</td><td class="bx-num">6 + 3</td><td class="bx-num">{3, 9, 9, 12}</td></tr>
            <tr><td class="bx-num">2</td><td class="bx-num">9 + 9</td><td class="bx-num">{3, 9, 18, 12}</td></tr>
            <tr><td class="bx-num">3</td><td class="bx-num">12 + 18</td><td class="bx-num">{3, 9, 18, 30}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="technique">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How should an output answer be written in the exam?</p>
      <h2>Exam technique: writing the trace and showing working in Section A</h2>
      <p class="bx-lede">Section A is 40 compulsory marks: Question 1 is twenty one-mark MCQs and Question 2 is ten parts of two marks each. Output questions appear in both, and each shape needs a slightly different habit.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>In an MCQ, trace before you read the options</h3><p>The wrong options are usually the answers a trap produces. For snippet 9 the choices might be b, c, 98 and 99. A student who skims the options first is drawn to b. Work the answer on the margin, then find it in the list.</p></div>
      <div class="bx-card"><h3>In a two-mark part, show a compact trace</h3><p>Write a small table of the variables that change, then the output on its own line. The output itself must be right; the trace is how you get it right and check it in seconds.</p></div>
      <div class="bx-card"><h3>Copy the layout, not just the values</h3><p>print and println decide where lines break, and a missing space between two printed numbers changes the answer. Write each println as a new line and show spaces where the code prints " ".</p></div>
      <div class="bx-card"><h3>Mark the type of every number</h3><p>Before writing a number, ask: is this int, long or double? That one question catches 3.0 against 3, 8.0 against 8 and 1.0 against 1, which are the commonest slips on this page.</p></div>
      <div class="bx-card"><h3>Tick each line as it runs</h3><p>For switch, short-circuit and ternary questions, put a small tick beside every statement that executes. Lines without a tick produce nothing, however close to the answer they sit.</p></div>
      <div class="bx-card"><h3>Budget the time</h3><p>The paper is two hours for 100 marks, so Section A deserves roughly a minute per mark. A loop of more than five passes earns its trace table; a one-line String call does not.</p></div>
    </div>
    <p class="bx-mt-40">
      When a fragment would not compile at all, the question is about error finding rather than output, and that
      shape has its own page: <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Class 10 Java error finding questions</a>.
      One-mark questions of every other kind are on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How does the mini batch drill output questions?</p>
      <h2>From paper trace to BlueJ run, every week</h2>
      <p class="bx-lede">The skill comes from committing to an answer under time pressure, being wrong, and finding the exact step where the trace went off course.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>A timed set on Tuesday</h4><p>At the 5:30 PM IST class, students get a fresh set of fragments from two or three trap families and write their outputs on paper against the clock. Nobody sees the answers until everyone has committed.</p></li>
      <li class="bx-step"><h4>Run in BlueJ on a shared screen</h4><p>The teacher pastes each fragment into BlueJ and runs it while the group watches. The real output appears beside each student's guess, so there is no arguing about who was right.</p></li>
      <li class="bx-step"><h4>Wrong outputs traced again, aloud</h4><p>A student with a wrong answer re-traces it in front of the group, one variable at a time, until the step that broke is found. Usually it is one of the eleven traps above, and that trap goes on the student's own list.</p></li>
      <li class="bx-step"><h4>Traces inside Wednesday's program</h4><p>At the 8:00 PM IST class, the program of the week is dry run before it is executed, so tracing becomes a way to check one's own Section B code as well.</p></li>
      <li class="bx-step"><h4>Full mock tests from December</h4><p>Output questions then appear inside complete two-hour papers, marked like the board, so the habit holds when the paper is long and the clock is running.</p></li>
    </ol>
    <p class="bx-mt-40">
      With at most six students in the batch, every wrong output in every set gets looked at. The full mock ladder is
      described on <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the ICSE specimen paper and mock tests page</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Drill output questions in the mini batch, or trace one to one',
  chooseLede: 'The snippets, the trace tables and the BlueJ checks are the same in both formats. In India, families pick the fixed evening mini batch or a private slot; ICSE students abroad learn one to one. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A timed output set every Tuesday',
    'Each answer run in BlueJ while the group watches',
    'Wrong outputs re-traced aloud, never skipped'
  ],
  choosePersonal: [
    'Slot chosen by the family, in India or abroad',
    'Time spent only on the traps your child keeps falling into',
    'Trace tables built together until they become a habit',
    'Harder snippets added as accuracy improves',
    'Same teachers, same 2027 syllabus, same BlueJ checks'
  ],
  chooseAfter: 'A student who already writes good programs but drops easy Section A marks to increments, char arithmetic or Math return types often needs only a few one to one sessions on those traps. A student who wants steady practice across all of Section A and Section B is better served by two batch classes a week. Fees are shown in your own currency.',
  zonesH2: 'Output tracing practice for ICSE students outside India',
  zonesLede: 'ICSE schools abroad sit the same Computer Applications paper, so the same eleven traps decide the same Section A marks. Outside India the drills run one to one, in an early evening slot in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and moved around school tests when needed. More on how this works for families overseas is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about output questions',
  faqH2: 'What students ask about ICSE Java output questions',
  faqs: [
    ['How do you solve predict the output questions in Java for ICSE?', 'Trace, do not guess. Write the variables across the top of a small table, add one row each time a statement changes a value, and only then write the output. Before writing any number, decide whether it is an int or a double, and before writing any line, check whether the code used print or println.'],
    ['Where do output questions come in the ICSE Computer Applications paper?', 'In Section A, the 40 compulsory marks. Question 1 has twenty one-mark MCQs, some showing a fragment with four possible outputs. Question 2 has ten two-mark parts, several of which typically ask for an output or a loop count.'],
    ['What are the most common traps in ICSE Java output questions?', 'Integer division, increments, char arithmetic, unstored String results, Math return types, loop counts, switch fall-through, ternary promotion, short-circuit && and ||, array defaults and wrapper methods. Each has original snippets on this page.'],
    ['Why does 5 / 2 give 2 in Java and not 2.5?', 'When both operands are int, Java does integer division and drops the fraction. Make one operand a double, as in 5.0 / 2 or (double) 5 / 2, to get 2.5. Casting after the division, as in (double) (5 / 2), is too late and gives 2.0.'],
    ['What is the difference between x++ and ++x in an output question?', 'Both add 1 to x. x++ gives the old value to the expression and then increases x; ++x increases x first and gives the new value. In a line such as b = a++ + ++a, trace each term separately, left to right, writing down x after every step.'],
    ['Why does Math.sqrt(16) print 4.0 and not 4?', 'Because sqrt, cbrt, pow, ceil and floor all return double, so Java prints a decimal point even when the value is whole. Math.round of a double returns a long, so it prints without .0. Writing 4 instead of 4.0 is marked wrong.'],
    ['How do I count how many times a loop runs?', 'List every value the control variable takes, including the one that makes the test fail, then count the values that passed. For i starting at 10, falling by 3 while it stays above 0, the values are 10, 7, 4 and 1, so the loop runs four times. A do-while loop always runs at least once.'],
    ['What is a dry run in ICSE Class 10?', 'A dry run means executing a program by hand, line by line, while keeping a table of each variable\'s value. It is how output questions are solved, and the fastest way to find a logic error in your own Section B program.'],
    ['Is recursion asked in ICSE 2027 output questions?', 'No. Recursion is not in the ICSE Computer Applications syllabus for 2027, so no output question should need it. Concentrate on operators, loops, nested loops, Strings, Math, wrapper classes and single and double dimensional arrays.'],
    ['Do you teach output questions in live classes?', 'Yes. In the mini batch every Tuesday there is a timed set of output questions, each answer is then run in BlueJ on a shared screen, and every wrong answer is traced again aloud. Students who need more focus can take personalised one to one classes at a time the family chooses.'],
    ['Are these output questions copied from past ICSE papers?', 'No. Every snippet on this page is original, written to test one trap at a time, and every output was checked by compiling and running the code in Java. Past papers use the same kinds of trap, so practising these prepares a student for the real ones.']
  ],
  startH2: 'Try a free live output-tracing class',
  startHtml: `        <p>In the free demo your child predicts the output of a short set of Java fragments against the clock, then watches each one run in BlueJ and re-traces any that went wrong with the mentor. Afterwards you hear plainly which traps cost your child marks, and whether the mini batch or one to one suits them better.</p>
        <p>Want the wider picture first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Output questions 2027'
};
