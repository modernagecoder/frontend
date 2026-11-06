// ICSE Class 10 Computer Applications (Java): operators and expressions.
// Intent: "operators in java icse class 10", "increment decrement questions
// icse", "ternary operator icse", "operator precedence java icse",
// "a++ + ++a questions". Distinct from ic02 (output tracing across eleven
// trap families) and ic16 (error finding): this page explains the operator
// families and evaluates the classic increment traps one step at a time, then
// covers precedence, the ternary operator, compound assignment and writing
// Java expressions for formulas. Every snippet is original and none repeats a
// snippet on the output questions page. Inside the 2027 syllabus (operators
// are revised from Class 9 and examined in Class 10). Every expression and
// program on this page was compiled with javac 21 (OpenJDK 21.0.12) and run
// with java 21 on 2026-11-06 from scratch files outside the repo; each value
// below is pasted from that run, and the one compile error quoted (short
// s = s + 5.7) is javac's own message.
'use strict';

module.exports = {
  slug: 'icse-class-10-operators-in-java',
  code: 'ic32',
  board: 'icse',
  themeColor: '#6B3A2A',
  dateModified: '2026-11-06',
  title: 'Operators in Java ICSE Class 10: Increment Traps Solved',
  description: 'Operators in Java for ICSE Class 10: a++ + ++a questions evaluated step by step, the precedence table, the ternary operator and compound assignment.',
  ogTitle: 'Operators in Java for ICSE Class 10, Evaluated Step by Step',
  ogDesc: 'Every operator family in the ICSE Class 10 Java syllabus, with twelve increment and decrement questions worked one step at a time, a precedence and associativity table, ternary conversions, compound assignment and formulas written as Java expressions. All run in Java 21.',
  twDesc: 'Increment and decrement traps worked step by step, the precedence table and the ternary operator for ICSE Class 10 Java.',
  headline: 'Operators in Java for ICSE Class 10: Increment and Decrement Questions, Precedence and the Ternary Operator for 2027',
  courseName: 'ICSE Class 10 Computer Applications (Java) Operators and Expressions Practice, Live Online',
  courseDesc: 'Live online practice of operators and expressions for ICSE Class 10 Computer Applications in the 2027 examination: arithmetic, relational, logical, assignment, increment and decrement and ternary operators, precedence and associativity, compound assignment and turning formulas into Java expressions, each worked on paper and then run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Operators',
  navLinks: [['#kinds', 'Operator types'], ['#increment', 'a++ and ++a'], ['#precedence', 'Precedence'], ['#ternary', 'Ternary'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Operators in Java']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Operators 2027',
  h1: 'Operators in Java for ICSE Class 10, evaluated one step at a time.',
  lede: 'Operators in Java for ICSE Class 10 are a Class 9 chapter that keeps returning in the board paper, mostly as one question: what is the value after a line full of ++ and --? This page answers that with a fixed method and twelve worked examples, then covers operator precedence, the ternary operator, compound assignment and writing formulas as Java expressions. Every value was checked by running the code in Java 21. In our live mini batch these are timed, traced aloud and run in BlueJ.',
  heroNote: 'Live online &middot; 12 increment traps worked &middot; precedence table &middot; ternary conversions &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of operators in Java for ICSE Class 10.',
  timetable: {
    label: 'When expressions are drilled',
    title: 'Operator drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, increment and precedence sets', '5:30', 'PM IST'],
      ['Wednesday, expressions inside programs', '8:00', 'PM IST'],
      ['Values written down per step', 'every', 'operand'],
      ['Answers confirmed in', 'BlueJ', 'live']
    ],
    zones: '<b>Families in India</b> can join these two evenings with at most five classmates. <b>Families overseas</b> book private sessions, set for the late afternoon wherever the student lives.',
    stamps: ['Left to right, then precedence', 'Checked in Java 21']
  },
  picksH2: 'Courses that teach expressions properly',
  picksLede: 'The ICSE Java course where the mini batch works these expressions every week, the Class 11 and 12 Computer Science course where the same operators carry into ISC programs, and the data structures course for students who like exact, step-by-step reasoning.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where increment and precedence questions are worked on paper before BlueJ confirms them.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students heading to ISC Computer Science, where bitwise and shift operators join the ones on this page.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoys exact evaluation and wants to apply it to algorithms and their running time.' }
  ],
  capsule: 'Operators in Java for ICSE Class 10 come in six families: arithmetic, relational, logical, assignment (with compound forms such as +=), increment and decrement, and the ternary operator. The most asked question is a++ + ++a style evaluation. The rule: Java reads operands left to right; a postfix operator hands over the old value and then changes the variable, a prefix operator changes it first; only then do precedence rules combine the values. We drill these expressions live twice a week in an Indian evening mini batch, and privately one to one at a time that suits the family.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="kinds">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are the types of operators in Java?</p>
      <h2>Types of operators in Java for ICSE Class 10</h2>
      <p class="bx-lede">An operator is a symbol that performs an operation on one, two or three operands. ICSE classifies them two ways: by job (arithmetic, relational, logical and so on) and by the number of operands (unary, binary, ternary). Both appear in Section A.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Family</th><th scope="col">Operators</th><th scope="col">Operands</th><th scope="col">Example</th><th scope="col">Result type</th></tr></thead>
        <tbody>
          <tr><td>Arithmetic</td><td><code>+ - * / %</code></td><td>Binary</td><td><code>17 % 5</code> gives 2</td><td>Number</td></tr>
          <tr><td>Unary minus and plus</td><td><code>- +</code></td><td>Unary</td><td><code>-x</code></td><td>Number</td></tr>
          <tr><td>Increment, decrement</td><td><code>++ --</code></td><td>Unary</td><td><code>n++</code>, <code>--n</code></td><td>Number (also char)</td></tr>
          <tr><td>Relational</td><td><code>== != &lt; &gt; &lt;= &gt;=</code></td><td>Binary</td><td><code>8 &gt;= 8</code> gives true</td><td>boolean</td></tr>
          <tr><td>Logical</td><td><code>&amp;&amp; || !</code></td><td>Binary, ! is unary</td><td><code>!(3 &gt; 1)</code> gives false</td><td>boolean</td></tr>
          <tr><td>Assignment</td><td><code>=</code></td><td>Binary</td><td><code>total = 0</code></td><td>Type of the left side</td></tr>
          <tr><td>Compound assignment</td><td><code>+= -= *= /= %=</code></td><td>Binary</td><td><code>q *= 3</code> means <code>q = q * 3</code></td><td>Type of the left side</td></tr>
          <tr><td>Ternary (conditional)</td><td><code>? :</code></td><td>Ternary, the only one</td><td><code>a &gt; b ? a : b</code></td><td>The common type of the two branches</td></tr>
          <tr><td>String join</td><td><code>+</code> with a String</td><td>Binary</td><td><code>"Class " + 10</code></td><td>String</td></tr>
          <tr><td>Object creation</td><td><code>new</code></td><td>Unary</td><td><code>new int[5]</code></td><td>A reference</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Two facts students drop marks on: / between two ints throws away the fraction, and % keeps the sign of the left operand. The full set of division traps sits on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>, and the types that decide every result are on
      <a class="bx-link" href="/icse-class-10-data-types-and-input-java">data types and type casting for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="increment">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you solve a++ + ++a questions?</p>
      <h2>Increment and decrement questions ICSE: the four-step method</h2>
      <p class="bx-lede">Evaluate operands strictly left to right, write down the value each one hands over and what the variable becomes, and only after that apply * / % before + -. Postfix (a++) hands over the old value; prefix (++a) changes the variable first and hands over the new one.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Write the starting values</h4><p>Put every variable in a row at the top of your working, with its value before the statement runs.</p></li>
      <li class="bx-step"><h4>Go operand by operand, left to right</h4><p>For each operand write two things: the value used in the expression, and the variable's value after it. A plain variable just hands over its current value.</p></li>
      <li class="bx-step"><h4>Now apply precedence to the values</h4><p>Replace each operand with its value and work the arithmetic: * / % first, then + -, left to right within a level.</p></li>
      <li class="bx-step"><h4>Assignment happens last</h4><p>The = (or +=) writes its result after everything on the right is done, overwriting any change an increment made to the same variable.</p></li>
    </ol>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Worked example 1</b><span>prefix, postfix, then plain</span></figcaption>
  <pre>int a = 4;
int b = ++a + a++ + a;
System.out.println("a=" + a + " b=" + b);

<i>// Output: a=6 b=16</i></pre>
  <p class="bx-code-note">The third operand is a plain a, but by then two increments have already run, so it is 6, not 4.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Operand</th><th scope="col">Value used</th><th scope="col">a after</th></tr></thead>
          <tbody>
            <tr><td><code>++a</code></td><td class="bx-num">5</td><td class="bx-num">5</td></tr>
            <tr><td><code>a++</code></td><td class="bx-num">5</td><td class="bx-num">6</td></tr>
            <tr><td><code>a</code></td><td class="bx-num">6</td><td class="bx-num">6</td></tr>
            <tr><td>5 + 5 + 6</td><td class="bx-num">b = 16</td><td class="bx-num">6</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Worked example 2</b><span>increments meet precedence</span></figcaption>
  <pre>int p = 3;
p = p++ + p++ * ++p;
System.out.println("p=" + p);

<i>// Output: p=27</i></pre>
  <p class="bx-code-note">Precedence does not change the order the operands are read. Java collects 3, 4 and 6 left to right, and only then does * bind before +: 3 + 4 * 6.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Operand</th><th scope="col">Value used</th><th scope="col">p after</th></tr></thead>
          <tbody>
            <tr><td><code>p++</code></td><td class="bx-num">3</td><td class="bx-num">4</td></tr>
            <tr><td><code>p++</code></td><td class="bx-num">4</td><td class="bx-num">5</td></tr>
            <tr><td><code>++p</code></td><td class="bx-num">6</td><td class="bx-num">6</td></tr>
            <tr><td>3 + 4 * 6</td><td class="bx-num">27</td><td class="bx-num">6</td></tr>
            <tr><td>assigned to p</td><td class="bx-num">27</td><td class="bx-num">27</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3 class="bx-mt-40">Ten more increment and decrement questions, with answers</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Result</th><th scope="col">Values in order</th></tr></thead>
        <tbody>
          <tr><td>3</td><td><code>int x = 10;</code><br><code>int y = x-- - --x + x++;</code></td><td class="bx-num">x = 9, y = 10</td><td>10 (x 9), 8 (x 8), 8 (x 9): 10 - 8 + 8</td></tr>
          <tr><td>4</td><td><code>int m = 7, n = 2;</code><br><code>m += m++ % n + --n;</code></td><td class="bx-num">m = 9, n = 1</td><td>Left m saved as 7; m++ gives 7, 7 % 2 is 1; --n gives 1; 7 + (1 + 1)</td></tr>
          <tr><td>5</td><td><code>int a = 5;</code><br><code>a = a++ + a--;</code></td><td class="bx-num">a = 11</td><td>5 (a 6), 6 (a 5), then 11 overwrites the 5</td></tr>
          <tr><td>6</td><td><code>int i = 2;</code><br><code>i = i++ * i--;</code></td><td class="bx-num">i = 6</td><td>2 (i 3), 3 (i 2): 2 * 3</td></tr>
          <tr><td>7</td><td><code>int k = 9;</code><br><code>int r = k-- / 2 + --k % 3;</code></td><td class="bx-num">r = 5, k = 7</td><td>9 (k 8), 9 / 2 is 4; 7 (k 7), 7 % 3 is 1</td></tr>
          <tr><td>8</td><td><code>int s = 1;</code><br><code>s = s + s++ + ++s;</code></td><td class="bx-num">s = 5</td><td>1, 1 (s 2), 3 (s 3): 1 + 1 + 3</td></tr>
          <tr><td>9</td><td><code>int a = 2, b = 3;</code><br><code>a = a++ * --b + b++ * a;</code></td><td class="bx-num">a = 10, b = 3</td><td>2 (a 3), 2 (b 2), 2 (b 3), 3: 2 * 2 + 2 * 3</td></tr>
          <tr><td>10</td><td><code>int a = 3;</code><br><code>a += a++ + a;</code></td><td class="bx-num">a = 10</td><td>Left a saved as 3; 3 (a 4), 4: 3 + (3 + 4)</td></tr>
          <tr><td>11</td><td><code>int z = 6;</code><br><code>z--;</code><br><code>--z;</code></td><td class="bx-num">z = 4</td><td>On their own line, prefix and postfix do the same thing</td></tr>
          <tr><td>12</td><td><code>char c = 'A';</code><br><code>c++;</code><br><code>c += 2;</code></td><td class="bx-num">c = D</td><td>++ and += keep the char type, so c moves A, B, D</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Question 11 is the free mark: when ++ or -- stands alone as a statement, prefix and postfix are identical. The difference shows only when the value is used inside a bigger expression. More fragments of this kind, mixed with other traps, are on
      <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="precedence">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What is the order of precedence of operators in Java?</p>
      <h2>Operator precedence in Java for ICSE, with associativity</h2>
      <p class="bx-lede">Precedence decides which operator binds first when several share an expression; associativity decides the order between operators of the same level. Brackets override both. The table runs from highest to lowest for the operators in the syllabus.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Level</th><th scope="col">Operators</th><th scope="col">Associativity</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td><code>( )</code> brackets, <code>[ ]</code> array index, <code>.</code> member access</td><td>Left to right</td></tr>
          <tr><td class="bx-num">2</td><td>Postfix <code>a++ a--</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">3</td><td>Prefix <code>++a --a</code>, unary <code>+ -</code>, <code>!</code>, cast <code>(type)</code></td><td>Right to left</td></tr>
          <tr><td class="bx-num">4</td><td><code>* / %</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">5</td><td><code>+ -</code> (and String +)</td><td>Left to right</td></tr>
          <tr><td class="bx-num">6</td><td><code>&lt; &lt;= &gt; &gt;=</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">7</td><td><code>== !=</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">8</td><td><code>&amp;&amp;</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">9</td><td><code>||</code></td><td>Left to right</td></tr>
          <tr><td class="bx-num">10</td><td><code>? :</code></td><td>Right to left</td></tr>
          <tr><td class="bx-num">11</td><td><code>= += -= *= /= %=</code></td><td>Right to left</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Precedence worked on real expressions</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Expression</th><th scope="col">Steps</th><th scope="col">Value</th></tr></thead>
        <tbody>
          <tr><td><code>8 + 12 / 4 * 2 - 3 % 2</code></td><td>12 / 4 = 3, 3 * 2 = 6, 3 % 2 = 1, then 8 + 6 - 1</td><td class="bx-num">13</td></tr>
          <tr><td><code>-3 * -2 + 7 % -4</code></td><td>Unary minus first; 6 + 3 (the remainder takes the sign of 7)</td><td class="bx-num">9</td></tr>
          <tr><td><code>20 - 6 - 4</code> and <code>64 / 8 / 2</code></td><td>Left to right: (20 - 6) - 4, (64 / 8) / 2</td><td class="bx-num">10 and 4</td></tr>
          <tr><td><code>2 + 3 * 4 &gt; 10 &amp;&amp; 15 % 4 == 3</code></td><td>Arithmetic, then &gt; and ==, then &amp;&amp;: true &amp;&amp; true</td><td class="bx-num">true</td></tr>
          <tr><td><code>5 &gt; 3 &amp;&amp; 2 &gt; 4 || !(7 == 7)</code></td><td>&amp;&amp; before ||: (true &amp;&amp; false) || false</td><td class="bx-num">false</td></tr>
          <tr><td><code>10 + 5 + "Java" + 10 * 2</code></td><td>* first gives 20; then left to right: 15, "15Java", "15Java20"</td><td class="bx-num">15Java20</td></tr>
          <tr><td><code>int a = 4, b;</code><br><code>b = a = a * 2 + 1;</code></td><td>= is right to left: a gets 9, then b gets a</td><td class="bx-num">a = 9, b = 9</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      A common slip: high precedence for postfix ++ does not mean it runs "first" across the whole line. It binds tightly to its own variable; the operands are still read left to right, as worked example 2 showed.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="ternary">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What is the ternary operator in Java?</p>
      <h2>Ternary operator ICSE: syntax, if-else conversion and nesting</h2>
      <p class="bx-lede">The ternary operator, condition ? value1 : value2, gives value1 when the condition is true and value2 when it is false. It is the only Java operator with three operands, and ICSE often asks students to rewrite an if-else with it, or the reverse.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>if-else</b><span>as a student writes it first</span></figcaption>
  <pre>int age = 16;
String msg;
if (age &gt;= 18)
    msg = "Adult";
else
    msg = "Minor";
System.out.println(msg);

<i>// Output: Minor</i></pre>
  <p class="bx-code-note">Both branches assign to the same variable. That is the sign an if-else can become one ternary line.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Ternary</b><span>the same logic in one line</span></figcaption>
  <pre>int age = 16;
String msg = age &gt;= 18 ? "Adult" : "Minor";
System.out.println(msg);

<i>// Output: Minor</i></pre>
  <p class="bx-code-note">The condition, then ?, the true value, then :, the false value. No semicolons inside and no braces.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Task</th><th scope="col">Ternary code</th><th scope="col">Result (run)</th></tr></thead>
        <tbody>
          <tr><td>Largest of three: a = 14, b = 29, c = 21</td><td><code>int big = a &gt; b ? (a &gt; c ? a : c) : (b &gt; c ? b : c);</code></td><td class="bx-num">29</td></tr>
          <tr><td>Sign of n = -8</td><td><code>String s = n &gt; 0 ? "positive" : n &lt; 0 ? "negative" : "zero";</code></td><td class="bx-num">negative</td></tr>
          <tr><td>Free delivery above 500 for amount = 650</td><td><code>double fee = amount &gt;= 500 ? 0 : 40;</code></td><td class="bx-num">0.0</td></tr>
          <tr><td>Leap year for y = 2024</td><td><code>boolean leap = (y % 4 == 0 &amp;&amp; y % 100 != 0) || y % 400 == 0;</code><br><code>System.out.println(leap ? "leap" : "not leap");</code></td><td class="bx-num">leap</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Two notes. The nested ternary for the sign reads right to left: everything after the first : is itself a ternary. And the fee prints 0.0, not 0, because the result is stored in a double; the type of a ternary result is part of the answer. When a decision has more than two or three branches, an if-else-if ladder or a switch is clearer, as on
      <a class="bx-link" href="/icse-class-10-menu-driven-programs">menu driven programs in Java for ICSE</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="compound">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do compound assignment and Java expressions work?</p>
      <h2>Compound assignment and writing Java expressions for formulas</h2>
      <p class="bx-lede">A compound operator such as q *= 3 + 2 means q = q * (3 + 2): the whole right side is worked first. It also casts the result back to the type of the variable silently, which a plain = will not do.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Code</th><th scope="col">Result (run)</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td><code>int q = 20;</code><br><code>q %= 6;</code><br><code>q *= 3 + 2;</code></td><td class="bx-num">10</td><td>20 % 6 is 2; then 2 * (3 + 2), not 2 * 3 + 2</td></tr>
          <tr><td><code>int t = 17;</code><br><code>t /= 4;</code><br><code>t -= 2 * 3;</code></td><td class="bx-num">-2</td><td>17 / 4 is 4 in int; 4 - 6</td></tr>
          <tr><td><code>short s = 10;</code><br><code>s += 5.7;</code></td><td class="bx-num">15</td><td>+= works out 15.7 and casts it back to short</td></tr>
          <tr><td><code>short s = 10;</code><br><code>s = s + 5.7;</code></td><td>Does not compile</td><td>javac: <code>incompatible types: possible lossy conversion from double to short</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Write the Java expression: a Section A favourite</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Maths</th><th scope="col">Java expression</th><th scope="col">Checked with</th></tr></thead>
        <tbody>
          <tr><td>ut + &frac12;at&sup2;</td><td><code>u * t + 0.5 * a * t * t</code></td><td>u = 10, t = 4, a = 3 gives 64.0. Writing 1 / 2 gives 40.0, because 1 / 2 is 0 in int</td></tr>
          <tr><td>(a + b) / 2ab</td><td><code>(a + b) / (2 * a * b)</code></td><td>a = 2, b = 3 gives 0.4166666666666667. Without the second bracket it is 15.0</td></tr>
          <tr><td>&radic;(b&sup2; &minus; 4ac)</td><td><code>Math.sqrt(b * b - 4 * a * c)</code></td><td>a = 1, b = -5, c = 6 gives 1.0</td></tr>
          <tr><td>|x &minus; y|&sup3;</td><td><code>Math.pow(Math.abs(x - y), 3)</code></td><td>x = 2, y = 5 gives 27.0</td></tr>
          <tr><td>P(1 + r/100)<sup>n</sup></td><td><code>p * Math.pow(1 + r / 100.0, n)</code></td><td>int p = 1000, r = 10, n = 2 printed 1210.0000000000002, a normal floating point tail. With r / 100 it printed 1000.0, since 10 / 100 is 0</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Two rules cover most of these marks: put brackets round every denominator and every numerator with more than one term, and never let an int / int stand where a fraction is meant. The return type of each Math method is listed on
      <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are operator questions practised in class?</p>
      <h2>How the mini batch drills operators and expressions</h2>
      <p class="bx-lede">Students learn this chapter by writing the value of each operand before writing any answer. The class is built so they cannot skip that step.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: a timed expression set</h4><p>At 5:30 PM IST each student gets a sheet of increment, precedence and ternary items and five minutes per block. Answers go on paper with the operand-by-operand working.</p></li>
      <li class="bx-step"><h4>Each line run in BlueJ</h4><p>The teacher runs every expression while the batch watches, so a wrong value is settled by Java, not by argument.</p></li>
      <li class="bx-step"><h4>The wrong step found aloud</h4><p>A student whose answer differed reads out their working until the operand where it went wrong. In this chapter it is nearly always a postfix value or an assignment overwriting an increment.</p></li>
      <li class="bx-step"><h4>Wednesday: expressions inside programs</h4><p>At the 8:00 PM IST class the week's program uses the same operators for real work, such as compound interest with Math.pow or a ternary grade, so the rules stick in context.</p></li>
      <li class="bx-step"><h4>Expressions inside mock papers</h4><p>Once December arrives, the two-hour practice papers carry increment, precedence and formula items in Section A, graded as strictly as the board grades them.</p></li>
    </ol>
    <p class="bx-mt-40">
      Operators feed straight into loop conditions and counters; those are drilled on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs for ICSE Class 10</a>, and expressions written with one wrong operator turn up on
      <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Java error finding questions</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise operators in the mini batch, or one to one',
  chooseLede: 'The worked method, the timed sets and the BlueJ checks are the same in either format. In India, choose the evening mini batch or a private slot; ICSE students outside India learn one to one. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Live at 5:30 PM IST Tuesday and 8:00 PM IST Wednesday',
    'A batch capped at six ICSE students',
    'Timed increment and precedence sets each Tuesday',
    'Every expression run in BlueJ on a shared screen',
    'Wrong working traced back to the exact operand'
  ],
  choosePersonal: [
    'A slot the family picks, in India or abroad',
    'Extra sets on the operator family your child keeps missing',
    'Formula-to-expression practice from their maths and physics',
    'Pace set by the student, not the group',
    'Same teachers, same 2027 syllabus, same BlueJ checks'
  ],
  chooseAfter: 'A student who understands Java but keeps losing a mark or two to increments and integer division can often fix it in a few focused one to one sessions. A student who wants the whole syllabus practised steadily, Section A and Section B, gains more from two batch classes a week. Fees appear in your own currency.',
  zonesH2: 'Operator practice for ICSE students abroad',
  zonesLede: 'An ICSE school in Dubai or Singapore sits the same Computer Applications paper, and Java evaluates a++ + ++a the same way everywhere. Outside India the drills run one to one, after school in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and can move around school tests. The overseas arrangement is described on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about operators',
  faqH2: 'What students ask about operators in Java for ICSE',
  faqs: [
    ['What is the difference between a++ and ++a in Java?', 'Both increase a by 1. a++ is postfix: it hands the current value to the expression and then increases a. ++a is prefix: it increases a first and hands over the new value. With a = 5, b = a++ makes b 5, while b = ++a makes b 6. In both cases a ends as 6.'],
    ['How do you solve a++ + ++a in Java?', 'Go left to right. With a = 5, a++ hands over 5 and a becomes 6; then ++a makes a 7 and hands over 7. The sum is 5 + 7 = 12 and a ends at 7. Write the value used and the new value of a for each operand before adding anything.'],
    ['What is the precedence of operators in Java for ICSE?', 'From high to low: brackets, postfix ++ and --, prefix ++ and --, unary minus and !, then * / %, then + -, then the comparisons less than and greater than, then == and !=, then &&, then ||, then the ternary operator, and finally the assignment operators. Brackets always override the order.'],
    ['What is the ternary operator in Java with an example?', 'It is the conditional operator: a condition, a question mark, a value for true, a colon and a value for false. Java returns the first value when the condition is true and the second otherwise. For example, a one-line statement can store "even" or "odd" in a String depending on whether n % 2 == 0. It is the only Java operator with three operands.'],
    ['How do you convert if-else to the ternary operator?', 'Check that both branches assign a value to the same variable. Then write that variable and =, followed by the condition, a question mark, the value from the if branch, a colon, and the value from the else branch, ending with one semicolon. The two assignments and the if-else keywords disappear, and the line does exactly the same job.'],
    ['What is the difference between = and == in Java?', '= is the assignment operator: it stores the value on its right in the variable on its left. == is a relational operator: it compares two values and gives true or false. Writing if (x = 5) with an int x does not compile, because the condition of an if must be boolean.'],
    ['What is the difference between / and % in Java?', '/ gives the quotient and % gives the remainder. With two ints, 17 / 5 is 3, because the fraction is dropped, and 17 % 5 is 2. With a negative left operand the remainder is negative: -17 % 5 is -2. The pair is used in every digit-extraction program.'],
    ['What are unary, binary and ternary operators?', 'They are grouped by how many operands they take. Unary operators take one, such as ++, --, unary minus and !. Binary operators take two, such as + - * / %, == and !=, && and ||. The ternary conditional operator takes three: a condition and two values.'],
    ['Does x += 1 do the same as x = x + 1?', 'For an int x, yes. The difference shows with smaller types: for a short or char variable, x += 1 compiles because compound operators cast the result back automatically, while x = x + 1 does not compile, because x + 1 is an int and needs an explicit cast.'],
    ['Do you teach operators in the live ICSE classes?', 'Yes. Operators are revised early in the year and then practised every week through timed Tuesday sets at 5:30 PM IST, with every expression run in BlueJ on a shared screen. They also appear inside the Wednesday programs and the board-style mock tests. Personalised one to one classes are available at a time the family chooses.']
  ],
  startH2: 'Book a free live class on operators',
  startHtml: `        <p>In the free demo your child works a short set of increment, precedence and ternary questions with the mentor, writing the value of each operand, and then sees each line run in BlueJ. You then hear honestly where the marks are slipping and whether the mini batch or one to one would suit your child better.</p>
        <p>Want more practice first? Try <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a> or see <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Operators in Java 2027'
};
