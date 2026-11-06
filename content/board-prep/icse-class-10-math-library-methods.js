// ICSE Class 10 Computer Applications (Java): Mathematical library methods.
// Intent: "math library methods icse", "Math.pow Math.sqrt output icse",
// "Math.round Math.ceil Math.floor icse", "mathematical functions java class
// 10". Distinct from ic02 (output questions across every trap, four Math
// rows), ic12 (wrapper and library classes) and ic37 (data types and input):
// this page owns the return-type table for every syllabus Math method, the
// Math output traps, compile errors from storing a Math result in an int,
// formulas written as Java expressions, Math.random ranges and two programs.
// Syllabus checked 2026-11-06 against Oswal's reproductions of the 2026-27
// ICSE Computer Applications syllabus: the Class 10 unit "Revision of Class IX
// syllabus" includes mathematical library methods, and the Class IX unit lists
// exactly pow(x,y), sqrt(x), cbrt(x), ceil(x), floor(x), round(x), abs(a),
// max(a,b), min(a,b) and random(). Trigonometric, log, exp, rint and signum
// are not in that list and are left out. None of the Math calls on this page
// repeats an argument used on a sibling board page.
// Every snippet, compiler message and program on this page was compiled with
// javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch
// files outside the repo; outputs are pasted from those runs. The random
// ranges were checked by running each expression a million or more times and
// printing the smallest and largest values produced.
'use strict';

module.exports = {
  slug: 'icse-class-10-math-library-methods',
  code: 'ic23',
  board: 'icse',
  themeColor: '#5E3A55',
  title: 'Math Library Methods ICSE: Return Types and Output Traps',
  description: 'Math library methods for ICSE Class 10 (2027): all ten syllabus methods with return types, Math.round, ceil and floor traps, and outputs run in Java.',
  ogTitle: 'Math Library Methods for ICSE Class 10, with Return Types and Traps',
  ogDesc: 'The ten Math methods in the ICSE Computer Applications syllabus in one return-type table, twenty output traps on round, ceil, floor, pow and sqrt, the compile errors students make, formulas as Java expressions, Math.random ranges and two programs, every line run in Java 21.',
  twDesc: 'Every syllabus Math method with its return type, the output traps, and two programs, all run in Java 21.',
  headline: 'Math Library Methods for ICSE Class 10: Return Types, Output Traps and Java Expressions',
  courseName: 'ICSE Class 10 Computer Applications (Java) Math Library Methods, Live Online',
  courseDesc: 'Live online teaching of the ICSE Computer Applications mathematical library methods for the 2027 examination: Math.pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random, their return types and output traps, writing formulas as Java expressions, random numbers in a range, and short programs, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Math methods',
  navLinks: [['#returns', 'Return types'], ['#traps', 'Output traps'], ['#expressions', 'Expressions'], ['#random', 'Math.random'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Math library methods']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Math library methods 2027',
  h1: 'Math library methods for ICSE: what each one returns, and where the marks slip.',
  lede: 'The Math library methods in ICSE Computer Applications are only ten, and every one of them is easy to call. Marks are lost on what they return: 25.0 instead of 25, -6 instead of -7, -0.0 instead of 0. This page puts all ten syllabus methods in one return-type table, then works through the output traps, the compile errors, formulas written as Java expressions and Math.random ranges. Every result was run in Java 21, and the same traps are drilled every week in our live mini batch.',
  heroNote: 'Live online &middot; all ten syllabus Math methods &middot; 20 output traps run in Java &middot; formulas as expressions &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live classes on Math library methods for ICSE Class 10.',
  timetable: {
    label: 'When Math methods are drilled',
    title: 'Math methods',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, return-type and output drills', '5:30', 'PM IST'],
      ['Wednesday, formulas inside programs', '8:00', 'PM IST'],
      ['Syllabus Math methods', '10', 'covered'],
      ['Output traps in rotation', '20', 'run']
    ],
    zones: '<b>In India:</b> the mini batch on both evenings, six students at most. <b>Outside India:</b> the same drills one to one, after school in your own time zone.',
    stamps: ['Return type is the answer', 'Every output run']
  },
  picksH2: 'Courses where Math methods are practised',
  picksLede: 'The ICSE Java course where the mini batch drills these return types weekly, the Class 11 and 12 Computer Science course where the same methods return in longer ISC programs, and the data structures course for students curious about how numeric code is reasoned about.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with a short Math return-type drill at the start of the Tuesday class.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC, where the same Math calls sit inside bigger number programs.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who likes floors, ceilings and square roots enough to meet them in binary search and complexity.' }
  ],
  capsule: 'The Math library methods in ICSE Computer Applications are the static methods of Java\'s Math class in java.lang: pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. Most marks depend on return types. pow, sqrt, cbrt, ceil, floor and random always return double, so whole answers print with .0; round of a double returns a long with no decimal; abs, max and min return the type of their arguments after promotion. They are part of the Class 9 syllabus that the 2027 Class 10 paper revises. Modern Age Coders drills them live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="returns">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which Math methods are in the ICSE syllabus, and what does each return?</p>
      <h2>Mathematical functions in Java Class 10: the return-type table</h2>
      <p class="bx-lede">The syllabus lists ten methods of the Math class, all static and all in the package java.lang, which every program imports automatically. The return type column is the one to learn by heart, because it decides how the answer prints.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Method</th><th scope="col">What it gives</th><th scope="col">Returns</th><th scope="col">Example</th><th scope="col">Output</th></tr></thead>
        <tbody>
          <tr><td><code>Math.pow(x, y)</code></td><td>x raised to the power y</td><td>double</td><td><code>Math.pow(5, 2)</code></td><td class="bx-num">25.0</td></tr>
          <tr><td><code>Math.sqrt(x)</code></td><td>square root of x</td><td>double</td><td><code>Math.sqrt(81)</code></td><td class="bx-num">9.0</td></tr>
          <tr><td><code>Math.cbrt(x)</code></td><td>cube root of x</td><td>double</td><td><code>Math.cbrt(64)</code></td><td class="bx-num">4.0</td></tr>
          <tr><td><code>Math.ceil(x)</code></td><td>smallest whole number not less than x</td><td>double</td><td><code>Math.ceil(6.1)</code></td><td class="bx-num">7.0</td></tr>
          <tr><td><code>Math.floor(x)</code></td><td>largest whole number not more than x</td><td>double</td><td><code>Math.floor(6.9)</code></td><td class="bx-num">6.0</td></tr>
          <tr><td><code>Math.round(x)</code></td><td>nearest whole number, halves go up</td><td>long for a double, int for a float</td><td><code>Math.round(6.5)</code></td><td class="bx-num">7</td></tr>
          <tr><td><code>Math.abs(a)</code></td><td>value without its sign</td><td>same type as a</td><td><code>Math.abs(-12)</code>, <code>Math.abs(-12.5)</code></td><td class="bx-num">12 12.5</td></tr>
          <tr><td><code>Math.max(a, b)</code></td><td>the larger of two</td><td>the wider of the two types</td><td><code>Math.max(8, 11)</code>, <code>Math.max(8, 11.0)</code></td><td class="bx-num">11 11.0</td></tr>
          <tr><td><code>Math.min(a, b)</code></td><td>the smaller of two</td><td>the wider of the two types</td><td><code>Math.min(-4, 9)</code>, <code>Math.min(-4.0, 9)</code></td><td class="bx-num">-4 -4.0</td></tr>
          <tr><td><code>Math.random()</code></td><td>a random value from 0.0 up to, but not including, 1.0</td><td>double</td><td><code>Math.random()</code></td><td>varies, for example 0.6182...</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Six always give double</h3><p>pow, sqrt, cbrt, ceil, floor and random return double whatever you pass in. Even Math.sqrt of a perfect square prints a decimal point.</p></div>
      <div class="bx-card"><h3>round is the odd one out</h3><p>Math.round of a double returns long, of a float returns int. Either way, the answer has no .0. Halves round upwards, towards positive infinity.</p></div>
      <div class="bx-card"><h3>Three follow their arguments</h3><p>abs, max and min return int for ints and double for doubles. If one argument is int and the other double, the int is promoted first, so the result is double.</p></div>
    </div>
    <p class="bx-mt-40">Your textbook may mention other Math methods such as sin, log or exp. The 2026-27 syllabus list we checked names only the ten above, so this page stays with those. How these methods sit beside the wrapper classes and Character methods is covered on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes for ICSE</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="traps">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Where do Math output questions catch students?</p>
      <h2>Math.round, Math.ceil and Math.floor ICSE: output traps with answers</h2>
      <p class="bx-lede">Nearly every wrong answer on Math comes from one of three slips: a missing or extra .0, rounding a negative half the wrong way, or doing integer division before the method sees the value. Cover the Output column and try each one.</p>
    </div>
    <h3>Rounding, ceiling and floor</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>System.out.println(Math.round(-6.5) + " " + Math.round(-6.51));</code></td><td class="bx-num">-6 -7</td><td>A half rounds up, and up from -6.5 is -6; only past the half does it go to -7</td></tr>
          <tr><td>2</td><td><code>System.out.println(Math.round(4.5) + " " + Math.round(-0.5));</code></td><td class="bx-num">5 0</td><td>Both halves move towards positive infinity</td></tr>
          <tr><td>3</td><td><code>System.out.println(Math.round(-1.5) + " " + Math.floor(-0.5));</code></td><td class="bx-num">-1 -1.0</td><td>round gives a long; floor goes down to the next whole number and gives a double</td></tr>
          <tr><td>4</td><td><code>System.out.println(Math.ceil(-0.4));</code></td><td class="bx-num">-0.0</td><td>Java keeps the minus sign on a zero that came from a negative number</td></tr>
          <tr><td>5</td><td><code>System.out.println(Math.floor(7.0) + " " + Math.ceil(7.0));</code></td><td class="bx-num">7.0 7.0</td><td>A whole number is its own floor and ceiling</td></tr>
          <tr><td>6</td><td><code>System.out.println(Math.floor(-2.2) + Math.ceil(-2.2));</code></td><td class="bx-num">-5.0</td><td>floor of -2.2 is -3.0 (further from zero), ceil is -2.0; two doubles are added</td></tr>
          <tr><td>7</td><td><code>System.out.println(Math.ceil(7 / 2) + " " + Math.ceil(7 / 2.0));</code></td><td class="bx-num">3.0 4.0</td><td>7 / 2 is already 3 before ceil sees it; only 7 / 2.0 keeps the half</td></tr>
          <tr><td>8</td><td><code>System.out.println(Math.round(2.0 / 3 * 100) / 100.0);</code></td><td class="bx-num">0.67</td><td>The standard way to keep two decimal places: scale, round, divide by a double</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Math.pow, Math.sqrt and Math.cbrt output ICSE</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>9</td><td><code>System.out.println(Math.sqrt(-9));</code></td><td class="bx-num">NaN (no error)</td><td>No real square root exists, so Java prints NaN, "not a number"; there is no error</td></tr>
          <tr><td>10</td><td><code>System.out.println(Math.pow(-8, 1.0 / 3) + " " + Math.cbrt(-8));</code></td><td class="bx-num">NaN -2.0</td><td>pow cannot take a fractional power of a negative base; cbrt handles negatives</td></tr>
          <tr><td>11</td><td><code>System.out.println(Math.pow(4, 0.5) + " " + Math.pow(10, -2));</code></td><td class="bx-num">2.0 0.01</td><td>Power 0.5 is a square root; a negative power is a reciprocal</td></tr>
          <tr><td>12</td><td><code>System.out.println(Math.pow(0, 0) + " " + Math.sqrt(0));</code></td><td class="bx-num">1.0 0.0</td><td>Anything to the power 0 is 1.0 in Java, including 0</td></tr>
          <tr><td>13</td><td><code>System.out.println((int) Math.sqrt(30));</code></td><td class="bx-num">5</td><td>The cast cuts 5.477... down to 5; it does not round</td></tr>
          <tr><td>14</td><td><code>System.out.println(Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2)));</code></td><td class="bx-num">5.0</td><td>Nested calls work inside out: 9.0 + 16.0, then the root</td></tr>
          <tr><td>15</td><td><code>System.out.println(Math.round(Math.sqrt(50)) + Math.round(Math.cbrt(30)));</code></td><td class="bx-num">10</td><td>7 + 3 are two longs added as numbers, because no String comes first</td></tr>
          <tr><td>16</td><td><code>System.out.println("" + Math.round(Math.sqrt(50)) + Math.round(Math.cbrt(30)));</code></td><td class="bx-num">73</td><td>The empty String first turns every + into joining</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">abs, max and min</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>17</td><td><code>System.out.println(Math.max('a', 'b'));</code></td><td class="bx-num">98</td><td>chars are promoted to int, so the code of 'b' is printed, not the letter</td></tr>
          <tr><td>18</td><td><code>System.out.println(Math.abs(-7 / 2) + " " + Math.abs(-7.0 / 2));</code></td><td class="bx-num">3 3.5</td><td>-7 / 2 is -3 in int arithmetic before abs ever runs</td></tr>
          <tr><td>19</td><td><code>System.out.println(Math.max(Math.min(15, 10), 12));</code></td><td class="bx-num">12</td><td>Inner call first: min gives 10, then max of 10 and 12</td></tr>
          <tr><td>20</td><td><code>System.out.println(Math.min(Math.abs(-3), -Math.abs(3)));</code></td><td class="bx-num">-3</td><td>The unary minus outside abs makes the second value -3</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Storing a Math result in an int</b><span>javac 21</span></figcaption>
  <pre>int a = Math.round(3.7);      <i>// line 3</i>
int b = Math.pow(2, 5);       <i>// line 4</i>
int c = Math.sqrt(36);        <i>// line 5</i>

<i>// javac says:</i>
E.java:3: error: incompatible types: possible lossy conversion from long to int
E.java:4: error: incompatible types: possible lossy conversion from double to int
E.java:5: error: incompatible types: possible lossy conversion from double to int</pre>
  <p class="bx-code-note">Java will not quietly shrink a long or a double into an int. This is a favourite error-finding question.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Three ways that compile</b><span>run in Java 21</span></figcaption>
  <pre>int d = Math.round(3.7f);     <i>// float in, int out</i>
long e = Math.round(3.7);     <i>// double in, long out</i>
int f = (int) Math.pow(2, 5); <i>// explicit cast</i>
System.out.println(d + " " + e + " " + f);

<i>// Output:</i>
4 4 32</pre>
  <p class="bx-code-note">Pick the variable type that matches the return type, or cast on purpose. A cast truncates: (int) 4.99 is 4.</p>
</figure>
    </div>
    <p class="bx-mt-40">Math rows sit among every other kind of trap on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>, and the error side is on <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Class 10 Java error finding questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="expressions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you write a formula as a Java expression?</p>
      <h2>Writing mathematical expressions in Java with Math methods</h2>
      <p class="bx-lede">A two-mark Section A part often gives a formula and asks for the Java expression. Replace each root and power with its Math method, write every multiplication sign, and add brackets wherever a fraction bar or a root covers more than one term.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Formula</th><th scope="col">Java expression</th><th scope="col">Checked with</th><th scope="col">Result</th></tr></thead>
        <tbody>
          <tr><td>distance = &radic;((x2 &minus; x1)&sup2; + (y2 &minus; y1)&sup2;)</td><td><code>Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))</code></td><td>(1, 2) and (4, 6)</td><td class="bx-num">5.0</td></tr>
          <tr><td>roots of ax&sup2; + bx + c = 0</td><td><code>(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)</code> and the same with &minus;</td><td>a = 1, b = &minus;5, c = 6</td><td class="bx-num">3.0 2.0</td></tr>
          <tr><td>amount = P(1 + r/100)<sup>n</sup></td><td><code>p * Math.pow(1 + r / 100, n)</code></td><td>P = 10000, r = 8, n = 2</td><td class="bx-num">11664.000000000002</td></tr>
          <tr><td>|a &minus; 5b| &divide; larger of a, b</td><td><code>Math.abs(a - b * 5) / Math.max(a, b)</code></td><td>a = 7.5, b = 2</td><td class="bx-num">0.3333333333333333</td></tr>
          <tr><td>&#8731;(2.4ab)</td><td><code>Math.cbrt(a * b * 2.4)</code></td><td>a = 7.5, b = 2</td><td class="bx-num">3.3019272488946267</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The compound interest row is worth a second look. The true answer is 11664, but doubles store most decimals approximately, so Java prints a tiny tail. In a program, round the result to two decimal places before printing it.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The fraction that vanished</b><span>run in Java 21</span></figcaption>
  <pre>int r = 3;
<i>// volume of a sphere, 4/3 x 22/7 x r cubed</i>
System.out.println(4 / 3 * 22 / 7 * Math.pow(r, 3));
System.out.println(4.0 / 3 * 22 / 7 * Math.pow(r, 3));

<i>// Output:</i>
81.0
113.14285714285715</pre>
  <p class="bx-code-note">In the first line 4 / 3 is 1 and 22 / 7 then becomes 3, all in int arithmetic, before pow brings in a double. Writing 4.0 fixes the whole chain.</p>
</figure>
      <div>
        <ol class="bx-qlist">
          <li>Every power needs <code>Math.pow</code>; <code>x^2</code> is not a power in Java.</li>
          <li>Every product needs <code>*</code>: <code>2ab</code> is <code>2 * a * b</code>.</li>
          <li>A fraction bar over several terms needs brackets on both top and bottom.</li>
          <li>A root over a sum needs the whole sum inside the brackets of <code>Math.sqrt</code>.</li>
          <li>If the formula has a fraction such as 4/3, write one of the numbers as a double.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Operator precedence, the other half of every expression question, is covered on <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="random">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do you get a random whole number in a range?</p>
      <h2>Math.random in ICSE Java: whole numbers in a range, and two programs</h2>
      <p class="bx-lede">Math.random() gives a double from 0.0 up to but not including 1.0. To get a whole number from low to high, use <code>low + (int) (Math.random() * (high - low + 1))</code>: multiply to stretch the range, cast to cut off the fraction, then shift it.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Goal</th><th scope="col">Expression</th><th scope="col">Smallest and largest seen</th></tr></thead>
        <tbody>
          <tr><td>A dice roll, 1 to 6</td><td><code>(int) (Math.random() * 6) + 1</code></td><td class="bx-num">1 and 6 (a million runs)</td></tr>
          <tr><td>A four-digit code, 1000 to 9999</td><td><code>1000 + (int) (Math.random() * 9000)</code></td><td class="bx-num">1000 and 9999 (two million runs)</td></tr>
          <tr><td>The bracket slip</td><td><code>(int) Math.random() * 6 + 1</code></td><td class="bx-num">1 and 1 (a million runs)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The last row is the trap. The cast applies to Math.random() alone, which is always below 1.0, so it becomes 0 every time and the "dice" always shows 1. Brackets around the multiplication are what make the expression work.</p>
    <div class="bx-dated bx-mt-40">
      <p><b>Program 1.</b> Write a program to input a decimal number and print its absolute value, the square root of its absolute value and its cube root (each to two decimal places), and its rounded value, ceiling, floor and square, using Math methods.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>NumberReport.java</b><span>seven Math calls</span></figcaption>
  <pre>import java.util.Scanner;
class NumberReport {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        double x = sc.nextDouble();
        double ab = Math.abs(x);
        System.out.println("Absolute value: " + ab);
        System.out.println("Square root of |x|: "
            + Math.round(Math.sqrt(ab) * 100) / 100.0);
        System.out.println("Cube root of x: "
            + Math.round(Math.cbrt(x) * 100) / 100.0);
        System.out.println("Rounded: " + Math.round(x));
        System.out.println("Ceiling: " + Math.ceil(x));
        System.out.println("Floor: " + Math.floor(x));
        System.out.println("Square: " + Math.pow(x, 2));
    }
}</pre>
  <p class="bx-code-note">sqrt gets the absolute value, because a negative input would give NaN. cbrt can take x itself.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>sc</td><td>Scanner</td><td>reads the input</td></tr>
              <tr><td>x</td><td>double</td><td>the number entered</td></tr>
              <tr><td>ab</td><td>double</td><td>absolute value of x</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a number: <b>-18.75</b>
Absolute value: 18.75
Square root of |x|: 4.33
Cube root of x: -2.66
Rounded: -19
Ceiling: -18.0
Floor: -19.0
Square: 351.5625</pre>
  <p class="bx-code-note">For a negative number the ceiling is the one nearer zero. -18.75 is past the half, so it rounds to -19.</p>
</figure>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Program 2.</b> Write a program to input a positive integer. If it is a perfect square, print the number whose square it is; otherwise print the perfect squares just below and just above it and the one that is nearer.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>NearSquare.java</b><span>sqrt, floor, ceil, pow, abs</span></figcaption>
  <pre>import java.util.Scanner;
class NearSquare {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        int n = sc.nextInt();
        double root = Math.sqrt(n);
        if (root == Math.floor(root)) {
            System.out.println(n + " is a perfect square of " + (int) root);
        } else {
            int below = (int) Math.pow(Math.floor(root), 2);
            int above = (int) Math.pow(Math.ceil(root), 2);
            System.out.println("Squares either side: " + below + " and " + above);
            if (Math.abs(n - below) &lt; Math.abs(above - n))
                System.out.println("Nearest: " + below);
            else
                System.out.println("Nearest: " + above);
        }
    }
}</pre>
  <p class="bx-code-note">No "equally near" branch is needed: neighbouring squares are always an odd distance apart, so a whole number can never sit exactly halfway.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter a positive integer: <b>196</b>
196 is a perfect square of 14

Enter a positive integer: <b>90</b>
Squares either side: 81 and 100
Nearest: 81

Enter a positive integer: <b>115</b>
Squares either side: 100 and 121
Nearest: 121</pre>
  <p class="bx-code-note">root == Math.floor(root) is the perfect square test: the root has no fractional part. The casts to int are needed because pow returns double.</p>
</figure>
    </div>
    <p class="bx-mt-40">Perfect squares, digit powers and other number tests built on these methods are on <a class="bx-link" href="/icse-special-number-programs-java">ICSE special number programs</a>, and series sums that lean on Math.pow are on <a class="bx-link" href="/icse-class-10-series-programs-java">series programs in Java for ICSE</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="questions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What does Section A ask about Math methods?</p>
      <h2>Math library methods ICSE questions with answers</h2>
      <p class="bx-lede">These questions come in Question 1 as one-mark MCQs and in Question 2 as two-mark parts: give the output, name the return type, or write the expression. Answer each before opening it.</p>
    </div>
    <div class="bx-grid-2">
      <div>
        <h3>One-mark questions</h3>
        <ol class="bx-qlist">
          <li>Which package contains the Math class?
            <details><summary>Answer</summary> java.lang, which is imported into every program automatically.</details></li>
          <li>What is the return type of <code>Math.ceil(5)</code>?
            <details><summary>Answer</summary> double. It returns 5.0.</details></li>
          <li>Give the output of <code>Math.round(8.49) + Math.round(8.5)</code>.
            <details><summary>Answer</summary> 17. 8 + 9, added as long values.</details></li>
          <li>Which Math method returns a value from 0.0 up to but not including 1.0?
            <details><summary>Answer</summary> <code>Math.random()</code>.</details></li>
          <li>Give the output of <code>Math.abs(Math.floor(-3.2))</code>.
            <details><summary>Answer</summary> 4.0. floor of -3.2 is -4.0, and abs of a double is a double.</details></li>
          <li>Which method finds the cube root: <code>Math.sqrt</code>, <code>Math.cbrt</code> or <code>Math.pow</code>?
            <details><summary>Answer</summary> <code>Math.cbrt</code>, which also works for negative numbers.</details></li>
        </ol>
      </div>
      <div>
        <h3>Two-mark questions</h3>
        <ol class="bx-qlist">
          <li>Write the Java expression for &radic;(3x + y&sup2;).
            <details><summary>Answer</summary> <code>Math.sqrt(3 * x + Math.pow(y, 2))</code>, or <code>Math.sqrt(3 * x + y * y)</code>.</details></li>
          <li>Differentiate between <code>Math.ceil()</code> and <code>Math.floor()</code>.
            <details><summary>Answer</summary> ceil returns the smallest whole number greater than or equal to its argument; floor returns the largest whole number less than or equal to it. Both return double: <code>Math.ceil(4.2)</code> is 5.0 and <code>Math.floor(4.2)</code> is 4.0.</details></li>
          <li>Give the output: <code>double d = Math.pow(2, 10) / Math.sqrt(64); System.out.println(d);</code>
            <details><summary>Answer</summary> 128.0. 1024.0 divided by 8.0.</details></li>
          <li>Why does <code>int k = Math.round(9.6);</code> not compile? Correct it.
            <details><summary>Answer</summary> Math.round of a double returns long, which cannot be stored in an int without a cast. Write <code>long k = Math.round(9.6);</code> or <code>int k = (int) Math.round(9.6);</code>.</details></li>
          <li>Write an expression for a random whole number from 10 to 20, both included.
            <details><summary>Answer</summary> <code>10 + (int) (Math.random() * 11)</code>. There are eleven values, so the multiplier is 11.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">One-mark questions from every chapter in the same style are on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are Math methods taught in the mini batch?</p>
      <h2>Ten methods, learned until the return type is automatic</h2>
      <p class="bx-lede">Students rarely forget what sqrt does. They forget that it returns a double. So practice is built around saying the type before the value, every time.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Type first, value second</h4><p>The Tuesday 5:30 PM IST class opens with a rapid round of Math calls. For each one the student names the return type, then the printed value, and a missing .0 counts as wrong.</p></li>
      <li class="bx-step"><h4>Negative numbers on purpose</h4><p>Rounding, ceiling and floor are drilled with negative arguments and halves, because that is where the board's options are built to mislead.</p></li>
      <li class="bx-step"><h4>Formulas to expressions</h4><p>Physics and maths formulas from the student's own school books are turned into Java expressions and run in BlueJ to check the brackets.</p></li>
      <li class="bx-step"><h4>Math inside programs</h4><p>On Wednesday at 8:00 PM IST the methods appear inside full programs, such as number tests and series, written by hand and marked against the board scheme on screen.</p></li>
      <li class="bx-step"><h4>Mock papers from December</h4><p>Complete two-hour papers bring Math questions back in both sections, timed and marked like the real thing.</p></li>
    </ol>
    <p class="bx-mt-40">Math methods are Class 9 content that Class 10 revises; the rest of that revision is on <a class="bx-link" href="/icse-class-9-java-revision-for-class-10">Class 9 Java revision for Class 10</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Drill Math methods in the mini batch, or one to one',
  chooseLede: 'The return-type drills, the negative-number traps and the formula practice are the same in either format. In India, families choose the fixed evening group of up to six or a private slot; ICSE students abroad learn one to one. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'A return-type round at the start of every Tuesday class',
    'Formulas checked in BlueJ on a shared screen',
    'Math questions inside full mock papers from December'
  ],
  choosePersonal: [
    'A slot the family picks, in India or overseas',
    'Practice aimed at the exact Math slips your child makes',
    'School physics and maths formulas used as practice',
    'Harder nested calls once the basics are secure',
    'Same teachers and the same 2027 syllabus'
  ],
  chooseAfter: 'Math methods are a small topic, so a student who mostly needs to fix return types and negative rounding can do it in a few one to one sessions. A student who also wants steady practice on loops, Strings, arrays and classes will get more from the two batch classes each week. Fees are shown in your own currency.',
  zonesH2: 'Math methods practice for ICSE students abroad',
  zonesLede: 'ICSE students in the Gulf, Singapore and elsewhere sit the same Computer Applications paper, with the same Math questions. Outside India we teach one to one, at an evening hour that suits the student\'s time zone.',
  zonesAfter: 'The slot is agreed after the free demo and can shift during school exams. How overseas classes work is explained on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Math methods',
  faqH2: 'What students ask about Math library methods in ICSE',
  faqs: [
    ['Which Math methods are in the ICSE Computer Applications syllabus?', 'The 2026-27 syllabus lists ten methods of the Math class: pow(x, y), sqrt(x), cbrt(x), ceil(x), floor(x), round(x), abs(a), max(a, b), min(a, b) and random(). They are taught in Class 9 and revised in Class 10, and the 2027 paper can ask about any of them in Section A or use them inside a Section B program.'],
    ['What is the return type of Math.pow and Math.sqrt?', 'Both return double, whatever type of argument you pass. So Math.pow(5, 2) prints 25.0 and Math.sqrt(81) prints 9.0. To store the result in an int you must cast it, as in (int) Math.pow(5, 2), and the cast removes any fractional part.'],
    ['What is the difference between Math.round, Math.ceil and Math.floor?', 'Math.ceil moves up to the next whole number and Math.floor moves down; both return double, so 6.1 gives 7.0 and 6.0. Math.round goes to the nearest whole number, with halves moving up, and returns a long for a double argument, so 6.5 gives 7 with no decimal point.'],
    ['What does Math.round(-2.5) return in Java?', 'It returns -2. Java rounds a half towards positive infinity, and the next whole number up from -2.5 is -2. A value just past the half, such as -2.51, rounds to -3. This is one of the most common Math traps in ICSE output questions.'],
    ['Why does Math.sqrt of a negative number print NaN?', 'A negative number has no real square root, so Java returns the special double value NaN, meaning "not a number", instead of stopping with an error. Use Math.cbrt for cube roots of negative numbers, which works, or take Math.abs first if the question allows it.'],
    ['What is the return type of Math.abs, Math.max and Math.min?', 'They return the same type as their arguments: int for int arguments and double for double arguments. If one argument is int and the other is double, the int is promoted first, so Math.max(8, 11.0) returns the double 11.0.'],
    ['How do you generate a random number between 1 and 100 in Java?', 'Use 1 + (int) (Math.random() * 100). Math.random() gives a double from 0.0 up to but not including 1.0; multiplying by 100 stretches it, the cast removes the fraction to give 0 to 99, and adding 1 shifts it to 1 to 100. Keep the brackets around the multiplication.'],
    ['Do I need to import anything to use Math methods in Java?', 'No. The Math class is in the java.lang package, which Java imports into every program automatically. You call its methods through the class name, as in Math.sqrt(x), because they are static; you never create a Math object.'],
    ['Are trigonometric methods like Math.sin in the ICSE 2027 syllabus?', 'The 2026-27 syllabus list we checked names only pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. Some textbooks mention sin, cos, log or exp, but questions should be set from the syllabus list, so learn those ten thoroughly first.'],
    ['Do you teach Math library methods in live classes?', 'Yes. In the ICSE mini batch on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, each Tuesday opens with a return-type drill and the methods are then used inside full programs. Personalised one to one classes are available at a time the family picks, in India or abroad.']
  ],
  startH2: 'Try a free live class on Math methods',
  startHtml: `        <p>In the free demo your child names the return type and output of a quick run of Math calls, including the negative halves and the NaN cases, then turns a formula from their own maths book into a Java expression and runs it in BlueJ. You hear plainly afterwards which slips are costing marks.</p>
        <p>Want to look around first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Math library methods 2027'
};
