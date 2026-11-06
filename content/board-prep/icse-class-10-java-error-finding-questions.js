// ICSE Class 10 Computer Applications (Java): find the error questions.
// Intent: "find the error java icse class 10", "syntax logical runtime error
// icse", "error finding questions icse computer", "correct the code icse java".
// Distinct from ic02 (output tracing), ic32 (operators) and ic37 (data types):
// this page is a spot-the-bug drill, ONE error per snippet, each classified as
// syntax, runtime or logical. Every snippet is original and none repeats a
// snippet on the output questions page or the program pages. Inside the 2027
// syllabus only: no recursion. Every snippet on this page was compiled with
// javac 21 (OpenJDK 21.0.12) on 2026-11-06 from scratch files outside the repo.
// The compiler messages are pasted from those javac runs, the exception names
// and messages from java 21 runs (the InputMismatchException run was fed the
// word "ten" on standard input), the logical-error outputs and every corrected
// version were compiled and run the same day.
'use strict';

module.exports = {
  slug: 'icse-class-10-java-error-finding-questions',
  code: 'ic16',
  board: 'icse',
  themeColor: '#6B3A2A',
  dateModified: '2026-11-06',
  title: 'Find the Error Java ICSE Class 10: 40 Questions, Solved',
  description: 'Find the error Java ICSE Class 10: 40 one-bug snippets sorted into syntax, runtime and logical errors, with the real javac messages and the corrected code.',
  ogTitle: 'Find the Error in Java: ICSE Class 10 Questions, Classified',
  ogDesc: 'Forty original one-bug Java snippets for ICSE Class 10, each classified as a syntax, runtime or logical error, with the exact message javac or Java prints and the corrected line. Every snippet was compiled and run in Java 21.',
  twDesc: 'One-bug Java snippets for ICSE Class 10, classified as syntax, runtime or logical errors, with real compiler messages and corrections.',
  headline: 'Find the Error in Java for ICSE Class 10: Syntax, Runtime and Logical Error Questions for 2027',
  courseName: 'ICSE Class 10 Computer Applications (Java) Error Finding and Debugging Practice, Live Online',
  courseDesc: 'Live online practice in finding, naming and correcting errors in ICSE Class 10 Computer Applications Java code for the 2027 examination: syntax errors and the messages BlueJ shows, runtime exceptions such as division by zero and index out of bounds, and logical errors that compile and run but print the wrong answer, drilled in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Find the error',
  navLinks: [['#kinds', 'Error types'], ['#syntax', 'Syntax'], ['#runtime', 'Runtime'], ['#logical', 'Logical'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Find the error questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Find the error 2027',
  h1: 'Find the error in Java, ICSE Class 10: one bug per snippet, named and fixed.',
  lede: 'Find the error Java questions in ICSE Class 10 show a few lines of code with one thing wrong and ask you to name the error, say what kind it is, and write the line correctly. This page gives 40 original snippets, each with exactly one bug, sorted into syntax, runtime and logical errors. Next to each one is what javac or Java actually reported when we ran it, and the fix. In our live mini batch students hunt these bugs against a timer and then watch BlueJ prove them right or wrong.',
  heroNote: 'Live online &middot; 40 one-bug snippets &middot; real compiler messages &middot; syntax, runtime, logical &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Class 10 Java error finding questions.',
  timetable: {
    label: 'When bug hunts are run',
    title: 'Debugging drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, one-bug snippet sets', '5:30', 'PM IST'],
      ['Wednesday, bugs planted in programs', '8:00', 'PM IST'],
      ['Error families named every time', '3', 'kinds'],
      ['Every fix proved in', 'BlueJ', 'live']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same debugging drills one to one, after school in your own time zone, for ICSE students in the Gulf, Singapore and further afield.',
    stamps: ['One bug per snippet', 'Named, typed, fixed']
  },
  picksH2: 'Courses where debugging is practised',
  picksLede: 'The ICSE Java course in which the mini batch runs these bug hunts, the Class 11 and 12 Computer Science course where longer programs make debugging a daily skill, and the data structures course for students who like finding the one line that breaks everything.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where planted bugs are found, named and fixed every week before BlueJ settles the answer.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where programs grow longer and reading compiler messages calmly saves real time.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoys tracking down a wrong answer and wants to test code against edge cases the way working programmers do.' }
  ],
  capsule: 'Find the error questions in ICSE Class 10 Computer Applications give a short Java fragment with one mistake and ask you to identify it, classify it and correct it. There are three kinds. A syntax error breaks the rules of Java, so the compiler refuses the program. A runtime error compiles but stops the program while it runs, such as division by zero or an index out of bounds. A logical error compiles and runs but gives the wrong answer. Modern Age Coders drills all three live in a Tuesday and Wednesday mini batch in India, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="kinds">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are syntax, logical and runtime errors in Java?</p>
      <h2>Syntax, logical and runtime errors in ICSE Java, side by side</h2>
      <p class="bx-lede">A syntax error is caught by the compiler, a runtime error is caught by Java while the program runs, and a logical error is caught by nobody except the person who checks the answer. That one sentence classifies every snippet on this page.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Question</th><th scope="col">Syntax error</th><th scope="col">Runtime error</th><th scope="col">Logical error</th></tr></thead>
        <tbody>
          <tr><td>Does it compile?</td><td>No</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>Does it run to the end?</td><td>It never starts</td><td>No, it stops at the bad line</td><td>Yes</td></tr>
          <tr><td>Who reports it?</td><td>The compiler (javac, or BlueJ's Compile button)</td><td>The Java runtime, as an exception</td><td>Nobody; the output is simply wrong</td></tr>
          <tr><td>Typical cause</td><td>Missing semicolon, wrong type, undeclared variable, misspelt keyword</td><td>Division of an int by zero, bad array or String index, text that is not a number</td><td>Wrong formula, wrong condition, loop one pass short, wrong starting value</td></tr>
          <tr><td>How you find it</td><td>Read the message and the line number</td><td>Read the exception name and the line in the stack trace</td><td>Dry run with known input and compare with the expected answer</td></tr>
          <tr><td>Also called</td><td>Compile-time error</td><td>Exception</td><td>Semantic or logic error</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">How to classify an error in three questions</h3>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Would javac accept every line?</h4><p>Check semicolons, brackets, the types on both sides of each =, the spelling and case of names, and that every variable is declared and set before use. If a line fails, it is a syntax error.</p></li>
      <li class="bx-step"><h4>Could any line crash with legal code?</h4><p>Look for an int divided by something that can be 0, an index that can reach the length, a parse method or nextInt fed text, or a null String. If so, it is a runtime error.</p></li>
      <li class="bx-step"><h4>Does it give the answer the question wanted?</h4><p>Dry run it with small input whose answer you know. If the output differs, it is a logical error; name the line and the wrong idea.</p></li>
    </ol>
    <p class="bx-mt-40">
      A fragment that compiles and runs correctly belongs to a different question shape, tracing, covered on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="syntax">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which syntax errors do ICSE questions use?</p>
      <h2>Syntax error questions ICSE: the code, what javac says, the fix</h2>
      <p class="bx-lede">Cover the last two columns, find the bug, then check. The middle column is the first line javac 21 printed for that fragment; BlueJ shows the same text under the editor.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code with one error</th><th scope="col">javac says</th><th scope="col">Correct it</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>int total = 0</code><br><code>total = total + 45;</code></td><td><code>';' expected</code></td><td><code>int total = 0;</code> Every statement ends with a semicolon</td></tr>
          <tr><td>2</td><td><code>int runs = 64;</code><br><code>system.out.println(runs);</code></td><td><code>package system does not exist</code></td><td><code>System.out.println(runs);</code> Java is case sensitive; System is a class with a capital S</td></tr>
          <tr><td>3</td><td><code>String city = 'Pune';</code></td><td><code>unclosed character literal</code></td><td><code>String city = "Pune";</code> Single quotes hold exactly one char; Strings need double quotes</td></tr>
          <tr><td>4</td><td><code>int weight = 52.5;</code></td><td><code>incompatible types: possible lossy conversion from double to int</code></td><td><code>double weight = 52.5;</code> A decimal literal is a double and cannot be squeezed into an int without a cast</td></tr>
          <tr><td>5</td><td><code>int points;</code><br><code>points = points + 10;</code></td><td><code>variable points might not have been initialized</code></td><td><code>int points = 0;</code> Local variables get no default value</td></tr>
          <tr><td>6</td><td><code>int age = 15;</code><br><code>if (age = 15)</code><br><code>&nbsp;&nbsp;System.out.println("Class 10");</code></td><td><code>incompatible types: int cannot be converted to boolean</code></td><td><code>if (age == 15)</code> One = assigns; == compares</td></tr>
          <tr><td>7</td><td><code>static int cube(int n) {</code><br><code>&nbsp;&nbsp;int c = n * n * n;</code><br><code>}</code></td><td><code>missing return statement</code></td><td>Add <code>return c;</code> before the closing brace; a method declared int must return an int</td></tr>
          <tr><td>8</td><td><code>char grade = "A";</code></td><td><code>incompatible types: String cannot be converted to char</code></td><td><code>char grade = 'A';</code> Double quotes make a String even for one letter</td></tr>
          <tr><td>9</td><td><code>void greet() { ... }</code><br><code>// inside static main:</code><br><code>greet();</code></td><td><code>non-static method greet() cannot be referenced from a static context</code></td><td>Declare it <code>static void greet()</code>, or call it through an object of the class</td></tr>
          <tr><td>10</td><td><code>for (int k = 1; k &lt;= 5; k++) {</code><br><code>&nbsp;&nbsp;System.out.print(k);</code><br><code>}</code><br><code>System.out.println(k);</code></td><td><code>cannot find symbol</code> (symbol: variable k)</td><td>Declare <code>int k;</code> before the loop and write <code>for (k = 1; k &lt;= 5; k++)</code>. A variable declared in the for header dies when the loop ends</td></tr>
          <tr><td>11</td><td><code>int score = 70;</code><br><code>int score = 85;</code></td><td><code>variable score is already defined in method main(String[])</code></td><td><code>score = 85;</code> Declare once, assign as often as you like</td></tr>
          <tr><td>12</td><td><code>if (x &gt; 5)</code><br><code>&nbsp;&nbsp;System.out.println("big");</code><br><code>&nbsp;&nbsp;System.out.println("checked");</code><br><code>else</code><br><code>&nbsp;&nbsp;System.out.println("small");</code></td><td><code>'else' without 'if'</code></td><td>Put the two println lines inside <code>{ }</code>. Without braces the if owns only one statement</td></tr>
          <tr><td>13</td><td><code>String word = "BlueJ";</code><br><code>System.out.println(word.length);</code></td><td><code>cannot find symbol</code> (symbol: variable length)</td><td><code>word.length()</code> For a String, length is a method</td></tr>
          <tr><td>14</td><td><code>int[] marks = {80, 75, 91};</code><br><code>System.out.println(marks.length());</code></td><td><code>cannot find symbol</code> (symbol: method length())</td><td><code>marks.length</code> For an array, length is a field, no brackets</td></tr>
          <tr><td>15</td><td><code>int r = Math.round(4.6);</code></td><td><code>incompatible types: possible lossy conversion from long to int</code></td><td><code>long r = Math.round(4.6);</code> or <code>int r = (int) Math.round(4.6);</code> round of a double returns long</td></tr>
          <tr><td>16</td><td><code>switch (day) {</code><br><code>&nbsp;&nbsp;case 1: ... break;</code><br><code>&nbsp;&nbsp;case 2: ... break;</code><br><code>&nbsp;&nbsp;case 2: ... break;</code><br><code>}</code></td><td><code>duplicate case label</code></td><td>Change the third label to <code>case 3:</code> Each case value may appear once</td></tr>
          <tr><td>17</td><td><code>static void area(int s) {</code><br><code>&nbsp;&nbsp;return s * s;</code><br><code>}</code></td><td><code>incompatible types: unexpected return value</code></td><td><code>static int area(int s)</code> A void method cannot hand back a value</td></tr>
          <tr><td>18</td><td><code>while (n &gt; 0) {</code><br><code>&nbsp;&nbsp;n--;</code><br><code>&nbsp;&nbsp;break;</code><br><code>&nbsp;&nbsp;System.out.println(n);</code><br><code>}</code></td><td><code>unreachable statement</code></td><td>Move the println above the break, or delete it. Java refuses code that can never run</td></tr>
          <tr><td>19</td><td><code>boolean pass = 1;</code></td><td><code>incompatible types: int cannot be converted to boolean</code></td><td><code>boolean pass = true;</code> Java booleans are only true and false, never 0 or 1</td></tr>
          <tr><td>20</td><td><code>float rate = 7.5;</code></td><td><code>incompatible types: possible lossy conversion from double to float</code></td><td><code>float rate = 7.5f;</code> A literal with a decimal point is double unless it carries f</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Snippet 3 is a useful warning: javac reported three errors for that single line, because one bad quote confuses everything after it. Always fix the first message first and compile again. Snippets 4, 15, 19 and 20 are all about types, which have their own page:
      <a class="bx-link" href="/icse-class-10-data-types-and-input-java">data types, input and type casting in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="runtime">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What is a runtime error in Java, with an example?</p>
      <h2>Runtime error questions: the exception Java throws and why</h2>
      <p class="bx-lede">A runtime error is code that compiles but stops while it runs, because a value at that moment makes the operation impossible. Java names the problem in an exception. Each message below is copied from a java 21 run of the snippet.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code with one error</th><th scope="col">Java stops with</th><th scope="col">Correct it</th></tr></thead>
        <tbody>
          <tr><td>21</td><td><code>int boxes = 48, children = 0;</code><br><code>System.out.println(boxes / children);</code></td><td><code>ArithmeticException: / by zero</code></td><td>Test first: <code>if (children != 0)</code> before dividing</td></tr>
          <tr><td>22</td><td><code>int n = 17;</code><br><code>System.out.println(n % 0);</code></td><td><code>ArithmeticException: / by zero</code></td><td>The remainder operator divides too, so a zero divisor crashes it in the same way</td></tr>
          <tr><td>23</td><td><code>int[] runs = {12, 40, 7, 33, 9};</code><br><code>for (int i = 0; i &lt;= runs.length; i++)</code><br><code>&nbsp;&nbsp;sum += runs[i];</code></td><td><code>ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5</code></td><td><code>i &lt; runs.length</code> The last index is length minus 1</td></tr>
          <tr><td>24</td><td><code>String code = "ICSE";</code><br><code>System.out.println(code.charAt(code.length()));</code></td><td><code>StringIndexOutOfBoundsException: Index 4 out of bounds for length 4</code></td><td><code>code.charAt(code.length() - 1)</code> prints E</td></tr>
          <tr><td>25</td><td><code>String s = "Kolkata";</code><br><code>System.out.println(s.substring(3, 9));</code></td><td><code>StringIndexOutOfBoundsException: Range [3, 9) out of bounds for length 7</code></td><td><code>s.substring(3)</code> prints kata. The end index may be at most the length</td></tr>
          <tr><td>26</td><td><code>int fee = Integer.parseInt("12.5");</code></td><td><code>NumberFormatException: For input string: "12.5"</code></td><td><code>double fee = Double.parseDouble("12.5");</code> parseInt accepts whole numbers only</td></tr>
          <tr><td>27</td><td><code>Scanner sc = new Scanner(System.in);</code><br><code>int qty = sc.nextInt();</code><br><code>// the user types: ten</code></td><td><code>java.util.InputMismatchException</code></td><td>The code is legal; the input is not. Tell the user to enter digits, or read with <code>next()</code> and check before converting</td></tr>
          <tr><td>28</td><td><code>String pet = null;</code><br><code>System.out.println(pet.length());</code></td><td><code>NullPointerException: Cannot invoke "String.length()" because "pet" is null</code></td><td>Give the String a value first, for example <code>String pet = "cat";</code></td></tr>
          <tr><td>29</td><td><code>int size = -3;</code><br><code>int[] list = new int[size];</code></td><td><code>NegativeArraySizeException: -3</code></td><td>Check that the size read from the user is positive before creating the array</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Not an error: snippet 30</b><span>the same division with double</span></figcaption>
  <pre>double boxes = 48, children = 0;
System.out.println(boxes / children);
System.out.println(0.0 / 0);

<i>// Output:</i>
<i>// Infinity</i>
<i>// NaN</i></pre>
  <p class="bx-code-note">Division by zero crashes only integer arithmetic. With a double on either side Java prints Infinity or NaN and carries on, which makes this a logical error if the program was supposed to refuse.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Expression</th><th scope="col">Result</th><th scope="col">Error type</th></tr></thead>
          <tbody>
            <tr><td><code>48 / 0</code> (int)</td><td>ArithmeticException</td><td>Runtime</td></tr>
            <tr><td><code>48 % 0</code> (int)</td><td>ArithmeticException</td><td>Runtime</td></tr>
            <tr><td><code>48.0 / 0</code></td><td class="bx-num">Infinity</td><td>None, or logical</td></tr>
            <tr><td><code>0.0 / 0</code></td><td class="bx-num">NaN, not a number</td><td>None, or logical</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Index errors are the commonest runtime bug inside Section B answers. Programs that walk through Strings and arrays safely are worked through on
      <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 String programs</a> and
      <a class="bx-link" href="/icse-class-10-2d-array-programs">2D array programs</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="logical">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do you find a logical error when nothing complains?</p>
      <h2>Logical error examples in Java: compiles, runs, prints the wrong answer</h2>
      <p class="bx-lede">A logical error shows up only when the output is compared with the expected answer. "Printed" is what the faulty code gave when run; the last column is what the fix gave.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code with one error</th><th scope="col">Printed</th><th scope="col">Correct it</th><th scope="col">Now prints</th></tr></thead>
        <tbody>
          <tr><td>31</td><td><code>int a = 7, b = 8, c = 8;</code><br><code>double avg = (a + b + c) / 3;</code></td><td class="bx-num">7.0</td><td><code>(a + b + c) / 3.0</code> so the division is done in double</td><td class="bx-num">7.666666666666667</td></tr>
          <tr><td>32</td><td><code>int f = 0;</code><br><code>for (int i = 1; i &lt;= 5; i++) f *= i;</code></td><td class="bx-num">0</td><td><code>int f = 1;</code> A product must start at 1</td><td class="bx-num">120</td></tr>
          <tr><td>33</td><td><code>int s = 0;</code><br><code>for (int i = 1; i &lt; 10; i++) s += i;</code><br><code>// meant: sum of 1 to 10</code></td><td class="bx-num">45</td><td><code>i &lt;= 10</code> The loop stopped one pass short</td><td class="bx-num">55</td></tr>
          <tr><td>34</td><td><code>int marks = 25;</code><br><code>if (marks &gt;= 40);</code><br><code>&nbsp;&nbsp;System.out.println("Pass");</code></td><td class="bx-num">Pass</td><td>Delete the semicolon after the condition; it is an empty statement that the if controls</td><td>(nothing)</td></tr>
          <tr><td>35</td><td><code>String ans = "YES".toLowerCase();</code><br><code>System.out.println(ans == "yes");</code></td><td class="bx-num">false</td><td><code>ans.equals("yes")</code> == compares references, not the characters</td><td class="bx-num">true</td></tr>
          <tr><td>36</td><td><code>int p = 3, q = 9;</code><br><code>p = q;</code><br><code>q = p;</code><br><code>System.out.println(p + " " + q);</code></td><td class="bx-num">9 9</td><td>Use a third variable: <code>int t = p; p = q; q = t;</code></td><td class="bx-num">9 3</td></tr>
          <tr><td>37</td><td><code>int got = 430;</code><br><code>double pct = got / 500 * 100;</code></td><td class="bx-num">0.0</td><td><code>got * 100.0 / 500</code> 430 / 500 is 0 in int arithmetic</td><td class="bx-num">86.0</td></tr>
          <tr><td>38</td><td><code>int[] temps = {-4, -9, -2, -7};</code><br><code>int max = 0;</code><br><code>for (int v : temps) if (v &gt; max) max = v;</code></td><td class="bx-num">0</td><td><code>int max = temps[0];</code> Start from a real element, not from 0</td><td class="bx-num">-2</td></tr>
          <tr><td>39</td><td><code>int n = -7;</code><br><code>String t = n % 2 == 1 ? "odd" : "even";</code></td><td class="bx-num">even</td><td><code>n % 2 != 0</code> -7 % 2 is -1, not 1</td><td class="bx-num">odd</td></tr>
          <tr><td>40</td><td><code>int sc = 92;</code><br><code>if (sc &gt;= 60) gr = "C";</code><br><code>else if (sc &gt;= 75) gr = "B";</code><br><code>else if (sc &gt;= 90) gr = "A";</code></td><td class="bx-num">C</td><td>Test the highest band first: 90, then 75, then 60</td><td class="bx-num">A</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A logical error that never ends</b><span>the infinite loop</span></figcaption>
  <pre>int i = 1;
while (i &lt;= 10) {
    System.out.println(i);
    i--;
}

<i>// Fix: i++ instead of i--</i></pre>
  <p class="bx-code-note">This compiles and never crashes, so it is not a syntax or runtime error. It is a logical error: the update moves i away from the exit. In our test, a counter added to the loop showed i at -999999 after a million passes, still running.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Pass</th><th scope="col">i printed</th><th scope="col">i after i--</th><th scope="col">i &lt;= 10?</th></tr></thead>
          <tbody>
            <tr><td class="bx-num">1</td><td class="bx-num">1</td><td class="bx-num">0</td><td>true</td></tr>
            <tr><td class="bx-num">2</td><td class="bx-num">0</td><td class="bx-num">-1</td><td>true</td></tr>
            <tr><td class="bx-num">3</td><td class="bx-num">-1</td><td class="bx-num">-2</td><td>true</td></tr>
            <tr><td>and so on</td><td>falls forever</td><td>never above 10</td><td>always true</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Loops that stop a pass early or never stop are drilled with iteration counts on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs for ICSE Class 10</a>, and integer division, the cause of snippets 31 and 37, is traced step by step on
      <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="correct">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do you answer "correct the code" in the exam?</p>
      <h2>Correct the code ICSE Java: rewriting a program that has one bug</h2>
      <p class="bx-lede">Write the corrected line in full, name the error type in one word, and give a one-line reason. Rewriting the whole program wastes time unless the question asks for it. Here are two Section B style methods, each with one bug, the way they come up in class.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Faulty</b><span>sum of the even digits</span></figcaption>
  <pre>static int evenDigitSum(int n) {
    int sum = 0;
    while (n &gt; 0) {
        int d = n % 10;
        if (d % 2 == 0)
            sum = d;
        n /= 10;
    }
    return sum;
}
<i>// evenDigitSum(58246) returns 8</i></pre>
  <p class="bx-code-note">Logical error. The line sum = d replaces the total instead of adding to it, so only the last even digit reached (8, the leftmost) survives.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Corrected</b><span>one line changed</span></figcaption>
  <pre>static int evenDigitSum(int n) {
    int sum = 0;
    while (n &gt; 0) {
        int d = n % 10;
        if (d % 2 == 0)
            sum += d;
        n /= 10;
    }
    return sum;
}
<i>// evenDigitSum(58246) returns 20</i></pre>
  <p class="bx-code-note">6 + 4 + 2 + 8 is 20. The answer in the exam: "sum = d; should be sum += d; logical error, the total is overwritten."</p>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Faulty</b><span>count the capital letters</span></figcaption>
  <pre>static int capitals(String s) {
    int c = 0;
    for (int i = 1; i &lt; s.length(); i++)
        if (Character.isUpperCase(s.charAt(i)))
            c++;
    return c;
}
<i>// capitals("Delhi Public School") returns 2</i></pre>
  <p class="bx-code-note">Logical error. The loop starts at index 1, so the D at index 0 is never checked.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Corrected</b><span>start at index 0</span></figcaption>
  <pre>static int capitals(String s) {
    int c = 0;
    for (int i = 0; i &lt; s.length(); i++)
        if (Character.isUpperCase(s.charAt(i)))
            c++;
    return c;
}
<i>// capitals("Delhi Public School") returns 3</i></pre>
  <p class="bx-code-note">Test with a word whose first letter matters. A test string such as "india Gate" would have hidden this bug completely.</p>
</figure>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Quote the line, then rewrite it</h3><p>Copy the faulty line exactly, write "should be", then the corrected line. The examiner sees at once that you found the right line and fixed it the right way.</p></div>
      <div class="bx-card"><h3>Name the type in one word</h3><p>Syntax, runtime or logical. If the question asks which type, a correct fix with no label can still lose the mark.</p></div>
      <div class="bx-card"><h3>Fix the cause, not the symptom</h3><p>For snippet 23 the cause is the &lt;= in the loop test. Wrapping the addition in a check on i hides the crash but leaves the wrong loop in place.</p></div>
      <div class="bx-card"><h3>Test with input that can expose the bug</h3><p>Try zero, a negative number, the first and last positions, and an input whose answer you know. Bugs live at the edges.</p></div>
    </div>
    <p class="bx-mt-40">
      Errors also appear as one-mark items in Question 1; see
      <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>, and for a full spread of Section A shapes,
      <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are error finding questions taught live?</p>
      <h2>Error finding questions ICSE computer: how the mini batch hunts bugs</h2>
      <p class="bx-lede">Debugging improves when a student commits to an answer, sees the real compiler message, and explains the gap aloud. That is the loop each class repeats.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: a timed set of planted bugs</h4><p>At the 5:30 PM IST class each student gets eight to ten fragments, each hiding one error. They write the faulty line, the type and the fix on paper before anything is compiled.</p></li>
      <li class="bx-step"><h4>BlueJ decides, on a shared screen</h4><p>The teacher compiles or runs each fragment while the group watches. The real message or exception appears, so a guess of "runtime" for a missing semicolon is corrected on the spot.</p></li>
      <li class="bx-step"><h4>The student who got it wrong explains why</h4><p>Saying "I thought the if owned both lines" fixes the idea behind the bug, and the whole batch hears it.</p></li>
      <li class="bx-step"><h4>Wednesday: bugs inside whole programs</h4><p>At the 8:00 PM IST class a complete Section B program arrives with one fault planted in it. Students find it by testing with chosen inputs, the habit that catches their own mistakes in the board paper.</p></li>
      <li class="bx-step"><h4>Mock tests and an error log</h4><p>From December, full two-hour papers are marked the way the board marks them, and every lost mark goes into the student's error log with its type, so revision targets real weak spots.</p></li>
    </ol>
    <p class="bx-mt-40">
      With at most six students, every wrong answer is discussed. The weekly program list that these bugs are planted in is on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>, and the mock paper ladder is on
      <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the ICSE specimen paper and mock tests page</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Hunt bugs in the mini batch, or debug one to one',
  chooseLede: 'Both formats use the same one-bug fragments, the same BlueJ checks and the same error log. Families in India choose the evening mini batch or a private slot; ICSE students abroad learn one to one. Billing is monthly, and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A timed set of planted bugs every Tuesday',
    'Every guess checked by compiling in BlueJ',
    'Wrong answers explained aloud and logged'
  ],
  choosePersonal: [
    'A slot the family picks, in India or abroad',
    'Your child\'s own Section B code debugged line by line',
    'Extra time on the error type they miss most',
    'Testing with edge-case inputs built into every program',
    'Same teachers, same 2027 syllabus, same compiler checks'
  ],
  chooseAfter: 'A student whose programs often fail to compile, or who freezes at a screen of red messages, gains a lot from a few one to one sessions spent reading errors together. A student who wants weekly practice across both sections of the paper usually does better in the batch. Fees appear in your own currency.',
  zonesH2: 'Debugging practice for ICSE students outside India',
  zonesLede: 'ICSE schools abroad sit the same Computer Applications paper, and javac prints the same messages in every country. Outside India the bug hunts run one to one, at an after-school hour in the student\'s own time zone.',
  zonesAfter: 'The slot is fixed after the free demo and can shift around school tests. How classes work for overseas families is explained on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about error finding',
  faqH2: 'What students ask about find the error questions in ICSE Java',
  faqs: [
    ['What are the three types of errors in Java for ICSE Class 10?', 'Syntax errors, runtime errors and logical errors. A syntax error breaks the grammar of Java, so the program does not compile. A runtime error compiles but stops the program while it runs, for example dividing an int by zero. A logical error compiles and runs to the end but produces a wrong result because the idea in the code is wrong.'],
    ['What is the difference between a syntax error and a logical error?', 'A syntax error is found by the compiler before the program runs, and it comes with a message and a line number. A logical error is invisible to the compiler and to Java: the program runs normally and prints an answer, just the wrong one. You find a logical error only by checking the output against an answer you already know.'],
    ['Is division by zero a syntax, runtime or logical error?', 'For int values it is a runtime error. The code compiles, then Java stops with ArithmeticException: / by zero when the line runs. The same happens with the % operator. With double values there is no crash: Java prints Infinity or NaN, so if the program should have refused that input, the mistake is logical.'],
    ['Is a missing semicolon a syntax error?', 'Yes. javac reports "\';\' expected" and points to the end of the line where the semicolon belongs. The program cannot run until it is fixed. Note the opposite case too: an extra semicolon straight after if (...) or for (...) compiles happily and becomes a logical error.'],
    ['Is an infinite loop a runtime error or a logical error?', 'An infinite loop is a logical error. The code is legal and Java does not throw any exception; the loop simply never reaches its exit because the update moves the variable the wrong way or never changes it. You notice it only because the program never finishes, so you trace the loop variable to find the fault.'],
    ['Is ArrayIndexOutOfBoundsException a runtime error?', 'Yes. Using an index below 0 or equal to or above the array length compiles without complaint, but Java throws ArrayIndexOutOfBoundsException when that line runs, with a message such as "Index 5 out of bounds for length 5". The usual cause is a loop test that says "less than or equal to length" where it should say "less than length".'],
    ['How do I write the answer to a correct the code question in ICSE?', 'Quote the faulty line, write the corrected line next to it, and name the error type if asked. Add one short reason, such as "a char literal needs single quotes". Rewrite the full program only when the question says so. Make one change per error, since examiners look for the specific line that was wrong.'],
    ['Is using == to compare Strings an error in Java?', 'It compiles and runs, so it is not a syntax or runtime error, but it usually gives the wrong answer, which makes it a logical error. == checks whether two variables point to the same String object, not whether they hold the same characters. Use equals, or equalsIgnoreCase when case should not matter.'],
    ['Are find the error questions asked in the ICSE Computer Applications paper?', 'Questions asking students to name the type of an error, or to correct a faulty statement, have appeared in Section A of past ICSE Computer Applications papers, as one-mark or two-mark parts. Section B rewards the same skill indirectly, because a program with a bug in it loses marks for the wrong output.'],
    ['Do you teach error finding in live classes?', 'Yes. The ICSE mini batch runs a timed set of planted bugs every Tuesday at 5:30 PM IST, checks every answer by compiling in BlueJ on a shared screen, and plants a bug inside Wednesday\'s full program. Students who need closer help take personalised one to one classes at a time the family chooses.']
  ],
  startH2: 'Book a free live debugging class',
  startHtml: `        <p>In the free demo your child gets a short set of Java fragments, each hiding one bug, names the line and the error type, then watches BlueJ compile and run them with the mentor. Afterwards you hear plainly which kinds of error your child misses and whether the mini batch or one to one is the better fit.</p>
        <p>Prefer to look around first? See <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Find the error 2027'
};
