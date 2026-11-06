// ICSE Class 10 Computer Applications (Java): revising the Class 9 syllabus
// for the Class 10 paper. Intent: "class 9 java revision for class 10 icse",
// "icse class 9 computer topics in class 10", "revision of class 9 syllabus
// icse computer", "java basics icse". Distinct from ic37 (data types and
// input), ic32 (operators), ic33 (loop programs) and ic23 (Math methods),
// which each go deep on one unit: this page maps every Class 9 unit to the
// place it is re-tested in the 2027 paper and gives a short drill per unit,
// with a three-week revision plan.
// Syllabus checked 2026-11-06 against Oswal's reproductions of the 2026-27
// ICSE Computer Applications syllabus: the Class 10 Unit 1 "Revision of
// Class IX syllabus" lists introduction to OOP concepts, elementary concept
// of objects and classes, values and data types, operators, input in Java,
// mathematical library methods, conditional constructs, iterative constructs
// and nested for loops. The Class 9 unit Computing and Ethics is not in that
// Class 10 revision list, and the page says so. No frequency statistics are
// claimed for any topic.
// Every snippet, program, compiler message and exception on this page was
// compiled with javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06
// from scratch files outside the repo; outputs are pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-class-9-java-revision-for-class-10',
  code: 'ic38',
  board: 'icse',
  themeColor: '#24485E',
  title: 'Class 9 Java Revision for Class 10 ICSE, with Drills',
  description: 'Class 9 Java revision for Class 10 ICSE (2027): which Class 9 topics the Class 10 paper re-tests, quick drills on each, all run in Java 21, and a plan.',
  ogTitle: 'Class 9 Java Revision for the ICSE Class 10 Paper',
  ogDesc: 'The Class 10 ICSE Computer Applications syllabus opens with a revision of Class 9. This page maps each Class 9 unit to where the 2027 paper tests it, gives a short drill on data types, operators, input, conditionals, loops and nested loops, and sets out a three-week revision plan. Every answer was run in Java 21.',
  twDesc: 'Which Class 9 Java topics the ICSE Class 10 paper re-tests, with quick drills run in Java 21 and a three-week plan.',
  headline: 'Class 9 Java Revision for ICSE Class 10: What Comes Back in the 2027 Paper, with Quick Drills',
  courseName: 'ICSE Class 9 Java Revision for Class 10 Computer Applications, Live Online',
  courseDesc: 'Live online revision of the ICSE Class 9 Computer Applications syllabus as the Class 10 paper re-tests it for the 2027 examination: OOP concepts, values and data types, operators, Scanner input and errors, Math methods, conditional constructs, loops and nested for loops, with short timed drills and a three-week plan, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Class 9 revision',
  navLinks: [['#map', 'What comes back'], ['#types', 'Data types'], ['#input', 'Operators and input'], ['#loops', 'Conditions and loops'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Class 9 Java revision for Class 10']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Class 9 revision for 2027',
  h1: 'Class 9 Java revision for Class 10 ICSE: the topics that come back, and a drill for each.',
  lede: 'Class 9 Java revision for Class 10 ICSE is not optional: the 2026-27 Class 10 syllabus opens with a unit called "Revision of Class IX syllabus", and the 2027 paper draws on it in both sections. Data types, operators, Scanner input, Math methods, if and switch, loops and nested loops all return. This page maps each Class 9 unit to where it is re-tested, gives a short drill on each with answers run in Java 21, and lays out a three-week plan. Our live mini batch works through the same drills.',
  heroNote: 'Live online &middot; every Class 9 unit mapped to the 2027 paper &middot; drills run in Java 21 &middot; three-week plan &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live revision of Class 9 Java for the ICSE Class 10 paper.',
  timetable: {
    label: 'When Class 9 topics are revised',
    title: 'Class 9 revision',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, timed basics drills', '5:30', 'PM IST'],
      ['Wednesday, programs built on the basics', '8:00', 'PM IST'],
      ['Class 9 units revised', '9', 'mapped'],
      ['Revision plan', '3', 'weeks']
    ],
    zones: '<b>In India:</b> both weekly evenings in a group of six or fewer. <b>Outside India:</b> the same revision one to one, in an after-school slot in your own time zone.',
    stamps: ['Unit 1 &middot; Revision of Class IX', 'Every answer run']
  },
  picksH2: 'Courses where the Java basics are rebuilt',
  picksLede: 'The ICSE Java course that covers Class 9 and Class 10 together in a mini batch, the Class 11 and 12 Computer Science course for students heading to ISC, and the data structures course for those who want strong basics to grow into algorithms.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Two-year ICSE Computer Applications course; Class 10 students in it revise the Class 9 basics through short timed drills.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC, where these same basics carry every longer program.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants loops and conditions to grow into real problem solving.' }
  ],
  capsule: 'Class 9 Java comes back in full in the ICSE Class 10 paper. The 2026-27 Class 10 syllabus begins with a revision of Class 9: OOP concepts, objects and classes, values and data types, operators, Scanner input, Math library methods, if and switch, loops and nested for loops. In the 2027 paper these return as Section A MCQs, outputs and definitions, and as the building blocks of every Section B program. Revise them with short drills: predict, run, correct. Modern Age Coders runs this revision live: an evening mini batch on Tuesdays and Wednesdays inside India, or personalised one to one lessons at a time you pick.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which Class 9 topics does the Class 10 paper test?</p>
      <h2>ICSE Class 9 computer topics in Class 10: where each one comes back</h2>
      <p class="bx-lede">All of the programming units of Class 9 are listed in the Class 10 revision unit, so all of them can be examined in 2027. The table shows how each one usually shows up in the paper's two sections.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Class 9 unit</th><th scope="col">Section A (40 marks, compulsory)</th><th scope="col">Section B (any 4 of 6)</th></tr></thead>
        <tbody>
          <tr><td>Introduction to OOP concepts</td><td>Definitions: abstraction, encapsulation, inheritance, polymorphism</td><td>Not asked on its own</td></tr>
          <tr><td>Objects and classes</td><td>Object, class, state and behaviour</td><td>Every program is a class</td></tr>
          <tr><td>Values and data types</td><td>Sizes, literals, escape sequences, type conversion</td><td>Choosing int, long, double, char</td></tr>
          <tr><td>Operators in Java</td><td>Outputs with increments, %, ternary, precedence</td><td>Every calculation</td></tr>
          <tr><td>Input in Java</td><td>Scanner methods, types of error</td><td>Every accept or input method</td></tr>
          <tr><td>Mathematical library methods</td><td>Return types and outputs, writing expressions</td><td>Roots, powers, rounding inside programs</td></tr>
          <tr><td>Conditional constructs</td><td>Outputs of if, switch and fall-through</td><td>Slab, menu and number-check programs</td></tr>
          <tr><td>Iterative constructs</td><td>Loop counts, loop conversion, break and continue</td><td>Digit, series and number programs</td></tr>
          <tr><td>Nested for loops</td><td>Iteration counts and short outputs</td><td>Patterns and series</td></tr>
          <tr><td>Computing and Ethics</td><td colspan="2">Not in the Class 10 revision list we checked; revise it only if your school asks</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Section A leans on Class 9</h3><p>Much of Question 1 and Question 2 can be answered with Class 9 knowledge alone: types, operators, Math return types and loop counts.</p></div>
      <div class="bx-card"><h3>Section B is built on it</h3><p>Arrays, Strings and classes are Class 10 topics, but every one of those programs runs on Class 9 loops, conditions and input.</p></div>
      <div class="bx-card"><h3>Gaps show up late</h3><p>A shaky Class 9 basic usually appears as a "silly mistake" in a Class 10 program. Fixing the basic fixes the mistake.</p></div>
    </div>
    <p class="bx-mt-40">How the whole 2027 syllabus is laid out, Class 10 units included, is on <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus explained</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="types">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What should you remember about data types?</p>
      <h2>Java basics ICSE: values, data types and type conversion drill</h2>
      <p class="bx-lede">Java has eight primitive types, and Class 10 questions mostly test their sizes, their defaults and what happens when one type is converted to another. Learn the table, then try the drill.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Type</th><th scope="col">Size</th><th scope="col">Default value as a member</th><th scope="col">Example literal</th></tr></thead>
        <tbody>
          <tr><td><code>byte</code></td><td>1 byte</td><td class="bx-num">0</td><td><code>100</code></td></tr>
          <tr><td><code>short</code></td><td>2 bytes</td><td class="bx-num">0</td><td><code>30000</code></td></tr>
          <tr><td><code>int</code></td><td>4 bytes</td><td class="bx-num">0</td><td><code>-45</code></td></tr>
          <tr><td><code>long</code></td><td>8 bytes</td><td class="bx-num">0</td><td><code>3000000000L</code></td></tr>
          <tr><td><code>float</code></td><td>4 bytes</td><td class="bx-num">0.0</td><td><code>2.5f</code></td></tr>
          <tr><td><code>double</code></td><td>8 bytes</td><td class="bx-num">0.0</td><td><code>2.5</code></td></tr>
          <tr><td><code>char</code></td><td>2 bytes</td><td>the character with code 0</td><td><code>'Q'</code></td></tr>
          <tr><td><code>boolean</code></td><td>true or false only</td><td>false</td><td><code>true</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Drill: predict, then check</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Class 9 rule</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>float f = 7 / 4;</code><br><code>System.out.println(f);</code></td><td class="bx-num">1.0</td><td>7 / 4 is int division (1); widening to float only adds .0</td></tr>
          <tr><td>2</td><td><code>char c = 66;</code><br><code>System.out.println(c + "" + (c + 1));</code></td><td class="bx-num">B67</td><td>An int can be stored in a char as a code; c + 1 is int arithmetic</td></tr>
          <tr><td>3</td><td><code>System.out.println((char) ('a' - 32) + " " + (int) 'z');</code></td><td class="bx-num">A 122</td><td>Upper and lower case letters are 32 codes apart</td></tr>
          <tr><td>4</td><td><code>System.out.println(10 / 4 * 4.0 + " " + 10 / 4.0 * 4);</code></td><td class="bx-num">8.0 10.0</td><td>Where the double enters the expression decides what is lost</td></tr>
          <tr><td>5</td><td><code>byte b = 10;</code><br><code>b += 120;</code><br><code>System.out.println(b);</code></td><td class="bx-num">-126</td><td>A byte holds at most 127; the shorthand casts silently and the value wraps round</td></tr>
          <tr><td>6</td><td><code>System.out.println(0.1 + 0.2);</code></td><td class="bx-num">0.30000000000000004</td><td>Most decimals are stored approximately in a double</td></tr>
        </tbody>
      </table>
    </div>
    <ol class="bx-qlist bx-mt-40">
      <li>Implicit conversion (widening) happens automatically from a smaller type to a larger one: int to long, int to double.</li>
      <li>Explicit conversion (casting) is written by the programmer, as in <code>(int) 9.8</code>, which gives 9: the fraction is cut, not rounded.</li>
      <li>In a mixed expression every value is promoted to the widest type present before the operator works.</li>
      <li>Escape sequences such as <code>\\n</code>, <code>\\t</code> and <code>\\"</code> put a new line, a tab and a double quote inside a String.</li>
    </ol>
    <p class="bx-mt-40">This unit and Scanner input have their own deep page: <a class="bx-link" href="/icse-class-10-data-types-and-input-java">data types and input in Java for ICSE</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="input">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which operator, input and error questions come back?</p>
      <h2>Revision of Class 9 syllabus ICSE computer: operators, Scanner input and errors</h2>
      <p class="bx-lede">Operators return as output questions, Scanner returns in every Section B program, and the three types of error return as definitions. One drill covers all three.</p>
    </div>
    <h3>Operator drill</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code (with <code>int p = 9, q = 4;</code>)</th><th scope="col">Output</th><th scope="col">Rule</th></tr></thead>
        <tbody>
          <tr><td>7</td><td><code>System.out.println(p % q + p / q * q);</code></td><td class="bx-num">9</td><td>1 + 8: remainder plus the part divided out gives back p</td></tr>
          <tr><td>8</td><td><code>System.out.println((p &gt; q ? p - q : q - p) + " " + (p != q &amp;&amp; q &gt; 5));</code></td><td class="bx-num">5 false</td><td>Ternary picks a branch; &amp;&amp; needs both sides true</td></tr>
          <tr><td>9</td><td><code>int z = 2;</code><br><code>z *= z + 3;</code><br><code>System.out.println(z);</code></td><td class="bx-num">10</td><td>The whole right side is worked first: 2 &times; 5</td></tr>
          <tr><td>10</td><td><code>int w = 5;</code><br><code>int v = w-- * 2 + --w;</code><br><code>System.out.println(v + " " + w);</code></td><td class="bx-num">13 3</td><td>5 &times; 2, then w goes 4 and 3; 10 + 3</td></tr>
          <tr><td>11</td><td><code>System.out.println(-17 % 5 + " " + 17 % -5 + " " + 5.5 % 2);</code></td><td class="bx-num">-2 2 1.5</td><td>The remainder takes the sign of the left operand; % works on doubles too</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">The Scanner trap every Class 10 student meets</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Skip.java</b><span>nextInt then nextLine</span></figcaption>
  <pre>Scanner sc = new Scanner(System.in);
System.out.print("Roll number: ");
int roll = sc.nextInt();
System.out.print("Full name: ");
String name = sc.nextLine();
System.out.println("[" + roll + "][" + name + "]");

<i>// Typed: 14, Enter, Anya Bose, Enter</i>
<i>// Output:</i>
Roll number: Full name: [14][]</pre>
  <p class="bx-code-note">nextInt reads 14 but leaves the Enter behind. nextLine then reads that empty line at once, so the name is never asked for.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Fixed.java</b><span>one extra line</span></figcaption>
  <pre>Scanner sc = new Scanner(System.in);
System.out.print("Roll number: ");
int roll = sc.nextInt();
sc.nextLine();                 <i>// throw away the Enter</i>
System.out.print("Full name: ");
String name = sc.nextLine();
System.out.println("[" + roll + "][" + name + "]");

<i>// Same input. Output:</i>
Roll number: Full name: [14][Anya Bose]</pre>
  <p class="bx-code-note">Alternatively, read the name first. next() reads one word only, so it cannot read "Anya Bose" either.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Syntax, runtime and logical errors</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Error</th><th scope="col">When it is found</th><th scope="col">Example we ran</th><th scope="col">What Java said</th></tr></thead>
        <tbody>
          <tr><td>Syntax error</td><td>At compile time; the program never runs</td><td><code>int a = 5</code> with no semicolon</td><td><code>Semi.java:3: error: ';' expected</code></td></tr>
          <tr><td>Runtime error</td><td>While running; the program stops</td><td><code>total / count</code> with count 0</td><td><code>java.lang.ArithmeticException: / by zero</code></td></tr>
          <tr><td>Runtime error</td><td>While running, on bad input</td><td>"fourteen" typed for <code>nextInt()</code></td><td><code>java.util.InputMismatchException</code></td></tr>
          <tr><td>Logical error</td><td>Never reported; the output is simply wrong</td><td><code>avg = a + b / 2</code> for a = 8, b = 6</td><td>Prints 11 instead of 7, with no message</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Operators have a full page of their own: <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>. The ten Math methods, also Class 9 content, are on <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="loops">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What about conditions, loops and nested loops?</p>
      <h2>Conditional and iterative constructs: the Class 9 drill for Class 10</h2>
      <p class="bx-lede">Conditions and loops are where Class 9 matters most, because every Class 10 program uses them. Revise them as three skills: choosing the right construct, counting passes exactly, and converting one loop into another.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Rule</th></tr></thead>
        <tbody>
          <tr><td>12</td><td><code>int s = 0;</code><br><code>for (int i = 2; i &lt;= 20; i += 6) s += i;</code><br><code>System.out.println(s);</code></td><td class="bx-num">44</td><td>i is 2, 8, 14 and 20; 26 fails the test</td></tr>
          <tr><td>13</td><td><code>int n = 1;</code><br><code>while (n &lt; 100) n *= 3;</code><br><code>System.out.println(n);</code></td><td class="bx-num">243</td><td>81 is still below 100, so one more pass runs</td></tr>
          <tr><td>14</td><td><code>int k = 0;</code><br><code>do { k += 2; } while (k &gt; 50);</code><br><code>System.out.println(k);</code></td><td class="bx-num">2</td><td>An exit-controlled loop runs once even when the test is false</td></tr>
          <tr><td>15</td><td><code>for (int i = 1; i &lt;= 10; i++) {</code><br><code>&nbsp;&nbsp;if (i % 3 == 0) continue;</code><br><code>&nbsp;&nbsp;if (i &gt; 7) break;</code><br><code>&nbsp;&nbsp;System.out.print(i + " ");</code><br><code>}</code></td><td class="bx-num">1 2 4 5 7</td><td>continue skips 3 and 6; break ends the loop at 8</td></tr>
          <tr><td>16</td><td><code>int cnt = 0;</code><br><code>for (int i = 1; i &lt;= 3; i++)</code><br><code>&nbsp;&nbsp;for (int j = 1; j &lt;= i * 2; j++) cnt++;</code><br><code>System.out.println(cnt);</code></td><td class="bx-num">12</td><td>The inner loop runs 2, 4 and 6 times</td></tr>
          <tr><td>17</td><td><code>int m = 3; String sz;</code><br><code>switch (m) {</code><br><code>&nbsp;&nbsp;case 1: case 2: sz = "low"; break;</code><br><code>&nbsp;&nbsp;case 3: case 4: sz = "mid"; break;</code><br><code>&nbsp;&nbsp;default: sz = "high";</code><br><code>}</code><br><code>System.out.println(sz);</code></td><td class="bx-num">mid</td><td>Stacked case labels share one block</td></tr>
          <tr><td>18</td><td><code>int g = 75;</code><br><code>System.out.println(g &gt;= 90 ? "A" : g &gt;= 60 ? "B" : "C");</code></td><td class="bx-num">B</td><td>A nested ternary is read left to right like an if-else ladder</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>One task, three loops</b><span>run in Java 21</span></figcaption>
  <pre>int s1 = 0;
for (int i = 1; i &lt;= 15; i += 2)
    s1 += i;

int s2 = 0, j = 1;
while (j &lt;= 15) {
    s2 += j;
    j += 2;
}

int s3 = 0, k = 1;
do {
    s3 += k;
    k += 2;
} while (k &lt;= 15);

System.out.println(s1 + " " + s2 + " " + s3);

<i>// Output:</i>
64 64 64</pre>
  <p class="bx-code-note">To convert a for loop, move the start value above the loop and the update to the last line of the body. The three agree here because the do-while condition is true on its first check.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A nested loop grid</b><span>run in Java 21</span></figcaption>
  <pre>for (int i = 0; i &lt; 4; i++) {
    for (int j = 0; j &lt; 4; j++)
        System.out.print((char) ('A' + i + j) + " ");
    System.out.println();
}

<i>// Output:</i>
A B C D
B C D E
C D E F
D E F G</pre>
  <p class="bx-code-note">The outer loop picks the row, the inner loop the column, and println ends each row. Without the cast, the codes 65, 66 and so on would print instead of letters.</p>
</figure>
    </div>
    <p class="bx-mt-40">Patterns built from nested loops are on <a class="bx-link" href="/icse-class-10-pattern-programs-java">ICSE pattern programs in Java</a>, longer loop programs on <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE</a>, and switch-based menus on <a class="bx-link" href="/icse-class-10-menu-driven-programs">ICSE menu-driven programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="plan">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How long should Class 9 revision take?</p>
      <h2>A three-week Class 9 Java revision plan for Class 10</h2>
      <p class="bx-lede">Three weeks of short daily sessions, about 40 minutes each, is enough for most students who studied Class 9 properly. Do it early in Class 10, before arrays and Strings, so the new chapters sit on firm ground.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Week</th><th scope="col">Units</th><th scope="col">Daily work</th><th scope="col">Done when</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>OOP concepts, objects and classes, data types, operators</td><td>Say the definitions aloud; ten output questions a day, traced on paper</td><td>You can give every type's size and predict mixed-type outputs without a slip</td></tr>
          <tr><td>2</td><td>Input, errors, Math methods, conditional constructs</td><td>Write one short program a day with Scanner and an if-else ladder or switch</td><td>You know each Math return type and never lose a line to the nextLine trap</td></tr>
          <tr><td>3</td><td>Loops, loop conversion, nested loops</td><td>Count passes for five loops a day; write one pattern and one digit program</td><td>You can convert any for loop to while and do-while and count passes exactly</td></tr>
        </tbody>
      </table>
    </div>
    <ol class="bx-qlist bx-mt-40">
      <li>Start each session with five minutes on yesterday's mistakes, not new work.</li>
      <li>Trace on paper first, then run in BlueJ. Running first teaches nothing.</li>
      <li>Keep a single page of your own traps; read it before every Class 10 test.</li>
      <li>If one unit keeps going wrong in week 3, give it a fourth week rather than moving on.</li>
    </ol>
    <p class="bx-mt-40">The full Class 10 picture, with month-by-month timing, is on <a class="bx-link" href="/icse-class-10-computer-applications-board-exam-preparation">ICSE Computer Applications board exam preparation</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How does the mini batch revise Class 9?</p>
      <h2>Rebuilding the basics without slowing Class 10 down</h2>
      <p class="bx-lede">Students joining in Class 10 rarely need Class 9 retaught from the start. They need their gaps found quickly and closed, while Class 10 work carries on.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>A diagnostic drill first</h4><p>For a new student, the first few Tuesday 5:30 PM IST classes begin with a brief mixed drill across the Class 9 units. Each student's wrong answers show which units need attention.</p></li>
      <li class="bx-step"><h4>Gaps closed in small doses</h4><p>Ten minutes of each Tuesday class goes to the weakest Class 9 unit in the group, with fresh questions traced on paper and run in BlueJ on a shared screen.</p></li>
      <li class="bx-step"><h4>Basics inside Class 10 programs</h4><p>On Wednesday at 8:00 PM IST, students hand-write a Class 10 program and the mentor marks it line by line using board-style criteria. Slips in types, operators or loops are named as Class 9 slips so students see the link.</p></li>
      <li class="bx-step"><h4>Doubt time</h4><p>Every class keeps time for questions, including ones from school homework on Class 9 topics.</p></li>
      <li class="bx-step"><h4>Mocks from December</h4><p>Full two-hour mock papers test Class 9 and Class 10 content together, the way the 2027 paper will.</p></li>
    </ol>
    <p class="bx-mt-40">With six students at most, every student's Class 9 gaps get looked at individually.</p>
  </div>
</section>`
  ],
  chooseH2: 'Revise Class 9 Java in the mini batch, or one to one',
  chooseLede: 'The diagnostic drill, the traced questions and the three-week plan are the same in either format. Inside India a family can join the two-evening group, capped at six, or book private lessons; students overseas are always taught one to one. Fees are charged month by month and nobody pays an admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'A diagnostic Class 9 drill in the first weeks',
    'The weakest basic revisited each Tuesday',
    'Class 10 programs marked against the board scheme'
  ],
  choosePersonal: [
    'A slot the family chooses, in India or overseas',
    'Revision aimed only at your child\'s Class 9 gaps',
    'A faster plan for a student who joins late',
    'School homework doubts taken in the same session',
    'The same mentors who teach the batch'
  ],
  chooseAfter: 'A student who joins Class 10 with large Class 9 gaps, or who changed schools or boards, often moves fastest with a few weeks of one to one revision before joining the batch. A student with small gaps can revise inside the batch while Class 10 continues. The fee panel above converts to your local currency.',
  zonesH2: 'Class 9 Java revision for ICSE students abroad',
  zonesLede: 'ICSE schools outside India follow the same syllabus, so their Class 10 students meet the same revision unit and the same 2027 paper. Abroad, the revision is one to one, at an after-school time in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and can shift during school exams. Details for overseas families are on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 9 revision',
  faqH2: 'What students ask about Class 9 Java in the Class 10 paper',
  faqs: [
    ['Is the Class 9 syllabus included in the ICSE Class 10 Computer Applications exam?', 'Yes. The 2026-27 Class 10 syllabus begins with a unit called Revision of Class IX syllabus, covering OOP concepts, objects and classes, data types, operators, input, Math methods, conditional constructs, loops and nested for loops. Questions on these can appear in both sections of the 2027 paper.'],
    ['Which Class 9 topics are most important for the Class 10 board exam?', 'Operators, data types and type conversion, Math method return types, conditional constructs and loops matter most, because they appear directly in Section A and are used in every Section B program. OOP definitions and Scanner input are smaller topics but come up regularly as short questions.'],
    ['Is Computing and Ethics from Class 9 asked in the Class 10 paper?', 'Computing and Ethics is a Class 9 unit, but it is not in the Class 10 revision list we checked in the 2026-27 syllabus. Focus your Class 10 revision on the programming units, and revise ethics only if your school includes it in its own tests.'],
    ['How do I revise Class 9 Java quickly for Class 10?', 'Spend about three weeks on short daily sessions: week one on concepts, data types and operators; week two on input, errors, Math methods and conditions; week three on loops and nested loops. Trace every output on paper before running it, and keep a page of the mistakes you made.'],
    ['What are the Java basics for ICSE?', 'The basics are the Class 9 units: what objects and classes are, the eight primitive data types, operators and their precedence, input with the Scanner class, the Math library methods, if-else and switch, the for, while and do-while loops, and nested for loops. Class 10 adds methods, constructors, arrays, Strings, library classes and encapsulation on top of them.'],
    ['What is the difference between a syntax error, a runtime error and a logical error?', 'A syntax error breaks Java\'s grammar, such as a missing semicolon, and is caught when compiling. A runtime error stops a running program, such as dividing an int by zero. A logical error produces wrong output with no message at all, such as a wrong formula. Only the logical error must be found by testing.'],
    ['Why does nextLine() skip input after nextInt()?', 'nextInt() reads the number but leaves the Enter key in the input. The next nextLine() reads that leftover empty line immediately, so it seems to be skipped. Add an extra sc.nextLine() after nextInt() to clear it, or read the String before the number.'],
    ['Do I need to know data type sizes for ICSE Class 10?', 'Yes, they are a standard one-mark question. byte is 1 byte, short 2, int 4, long 8, float 4, double 8 and char 2. boolean holds only true or false. Knowing the ranges also explains why a byte variable can wrap round to a negative value.'],
    ['Do you teach Class 9 topics in the Class 10 live classes?', 'Yes. Our ICSE group meets twice a week, at 5:30 PM IST on Tuesday and 8:00 PM IST on Wednesday; a diagnostic drill finds each student\'s Class 9 gaps, and short weekly drills close them while Class 10 continues. A child who needs more attention can switch to private lessons scheduled around the family.']
  ],
  startH2: 'Try a free live Class 9 revision class',
  startHtml: `        <p>In the free demo your child takes a short mixed drill across the Class 9 units, then traces the wrong answers with the mentor and runs them in BlueJ. You come away knowing exactly which basics need work before Class 10 gets harder, and whether the mini batch or one to one fits better.</p>
        <p>Before booking, you may like to browse the <a class="bx-link" href="/icse-class-10-java-classes-online">ICSE Class 10 Java classes</a> overview, or test yourself with <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">important questions for ICSE Computer Applications</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Class 9 revision for 2027'
};
