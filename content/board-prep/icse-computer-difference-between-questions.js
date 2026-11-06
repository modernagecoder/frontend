// ICSE Class 10 Computer Applications (Java): every "differentiate between" or
// "state the difference" pair in the 2027 syllabus, each answered in the
// two-point format a two-mark Section A part needs, grouped by chapter, as
// tables. Intent: "difference between questions icse computer", "linear vs
// binary search", "call by value vs call by reference", "pure vs impure
// method", "= vs ==", "while vs do while". Distinct from ic17 (notes, one
// sheet per chapter) and the topic pages: this page is only comparisons, with
// a short code proof for the pairs students most often get backwards. All
// wording is original. Inside the 2027 syllabus: no recursion. Every Java
// fragment and printed result on this page was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from a scratch file
// outside the repo; each output below is pasted from that run.
'use strict';

const pair = (n, title, rows) =>
  `          <tr><td colspan="3"><b>${n}. ${title}</b></td></tr>\n` +
  rows.map(r => `          <tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('\n');

const table = (a, b, body) => `    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Basis</th><th scope="col">${a}</th><th scope="col">${b}</th></tr></thead>
        <tbody>
${body}
        </tbody>
      </table>
    </div>`;

module.exports = {
  slug: 'icse-computer-difference-between-questions',
  code: 'ic30',
  board: 'icse',
  themeColor: '#4A3F6B',
  title: 'Difference Between Questions ICSE Computer Applications 2027',
  description: 'Difference between questions for ICSE Computer Applications 2027: 40 Java pairs by chapter, each in two-point answer format, with code proofs run in Java.',
  ogTitle: 'ICSE Computer Difference Between Questions, Two Points Each',
  ogDesc: 'Forty "differentiate between" pairs from ICSE Class 10 Computer Applications, chapter by chapter, each answered in the two-point format a two-mark part needs: = and ==, while and do-while, call by value and reference, pure and impure methods, linear and binary search, equals and == and more.',
  twDesc: 'Forty ICSE Class 10 Java difference pairs, two exam points each, grouped by chapter, with code proofs run in Java.',
  headline: 'Difference Between Questions in ICSE Computer Applications: Forty Pairs, Two Exam Points Each',
  courseName: 'ICSE Class 10 Computer Applications (Java) Definitions and Differences, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications definition and difference questions for the 2027 examination: two-point answers on operators, loops, methods, constructors, wrapper classes, access specifiers, searching, sorting and String methods, written against the clock, marked on screen and proved in BlueJ where code settles the point, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Differences',
  navLinks: [['#format', 'Answer format'], ['#diff-basics', 'Operators and loops'], ['#diff-oop', 'Methods and classes'], ['#diff-data', 'Arrays and strings'], ['#proofs', 'Code proofs']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Difference between questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Differences 2027',
  h1: 'Difference between questions in ICSE Computer Applications, two points each.',
  lede: 'Difference between questions in ICSE Computer Applications ask you to set two Java ideas side by side, usually for two marks in Section A. This page answers forty of them, every pair the 2027 syllabus makes likely, grouped by chapter. Each pair gets exactly two points on a named basis, which is the shape that earns both marks. Where students tend to mix a pair up, a short program run in Java 21 settles it. In our mini batch these are written against the clock and marked on screen.',
  heroNote: 'Live online &middot; 40 pairs &middot; two points per pair &middot; grouped by chapter &middot; code proofs run in BlueJ &middot; first class free',
  waText: 'Hello Modern Age Coders. I want practice with ICSE Class 10 Java difference questions.',
  timetable: {
    label: 'When differences are practised',
    title: 'Difference drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, pairs written to time', '5:30', 'PM IST'],
      ['Wednesday, pairs proved in code', '8:00', 'PM IST'],
      ['Pairs in rotation', '40', 'by chapter'],
      ['Points per answer', '2', 'on a basis']
    ],
    zones: '<b>In India:</b> the mini batch drills these pairs at the two times above. <b>Outside India:</b> the same drills run one to one, after school in your own time zone, for ICSE students in the UAE, Qatar, Singapore and beyond.',
    stamps: ['Section A &middot; 2 marks each', 'Basis, then two points']
  },
  picksH2: 'Courses that drill definitions and differences',
  picksLede: 'The ICSE Java course where these pairs are written and marked each week, the Class 11 and 12 Computer Science course where the same comparisons return in ISC theory, and the data structures course for the student who wants to know why binary search wins.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'All eight chapters in a mini batch of up to six, with difference pairs written to time and marked on screen every Tuesday.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where compare and contrast questions return with more depth.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants to measure why one search or sort is faster than another.' }
  ],
  capsule: 'Difference between questions in ICSE Computer Applications ask for two points that separate a pair of Java ideas, such as = and ==, while and do-while, call by value and call by reference, pure and impure methods, linear and binary search, or equals() and ==. They are usually two-mark parts of Section A. The answer that earns both marks names a basis for each point and states both sides of it, in a table or two matched sentences. This page answers forty pairs from the 2027 syllabus that way. Modern Age Coders drills them live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="format">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How is a difference answer marked?</p>
      <h2>How do you answer difference between questions in ICSE Computer?</h2>
      <p class="bx-lede">Give two points, and make each point a matched pair: one basis, both sides. A point that describes only one side of the pair leaves the examiner to guess the contrast, and often loses the mark.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer</th><th scope="col">What was written</th><th scope="col">Likely result</th></tr></thead>
        <tbody>
          <tr><td>One-sided</td><td>"while checks the condition first."</td><td>Weak: says nothing about do-while</td></tr>
          <tr><td>One matched point</td><td>"while tests before the body; do-while tests after it."</td><td>One of two marks</td></tr>
          <tr><td>Two matched points</td><td>"Test: while tests before the body; do-while after it. Runs: while may run zero times; do-while runs at least once."</td><td>Both marks</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Name the basis</h3><p>Start each point with what is being compared: purpose, return type, when it runs, what it needs. The basis keeps both halves about the same thing.</p></div>
      <div class="bx-card"><h3>Table or two sentences</h3><p>A three-column table (basis, first, second) is fastest to write and to mark. Two sentences joined by "whereas" work just as well.</p></div>
      <div class="bx-card"><h3>Add an example if it is quick</h3><p>A one-line example, such as 17 / 5 is 3 and 17 % 5 is 2, can rescue a point whose wording comes out vague.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="diff-basics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which pairs come from the Class IX revision chapter?</p>
      <h2>= vs ==, while vs do while, and the other operator and loop pairs</h2>
      <p class="bx-lede">The revision chapter supplies the most difference questions, because it holds the most look-alike pairs. These fifteen cover operators, conversion, input, Math and loops.</p>
    </div>
${table('First', 'Second', [
  pair(1, '= and ==', [['Job', '= assigns: it stores the right-hand value in the variable on its left', '== compares: it tests whether two values are equal'], ['Result', 'The assigned value, of the variable\'s type', 'A boolean, true or false']]),
  pair(2, '/ and %', [['Gives', 'The quotient of a division', 'The remainder of a division'], ['Example', '17 / 5 is 3 (int division)', '17 % 5 is 2']]),
  pair(3, 'Prefix (++a) and postfix (a++)', [['Order', 'Changes the value first, then uses it', 'Uses the value first, then changes it'], ['Example', 'q = 3; ++q * 2 is 8', 'p = 3; p++ * 2 is 6']]),
  pair(4, 'while and do-while', [['Test', 'Before the body: entry controlled', 'After the body: exit controlled'], ['Minimum runs', 'Zero, if the test is false at the start', 'One, always']]),
  pair(5, 'for and while', [['Used when', 'The number of passes is known in advance', 'The loop runs until a condition changes'], ['Layout', 'Start, test and update in one header', 'Start before the loop, update inside the body']]),
  pair(6, 'break and continue', [['Effect', 'Leaves the loop (or switch) at once', 'Skips the rest of this pass only'], ['Next step', 'The statement after the loop runs', 'The loop moves to its next pass']]),
  pair(7, 'if-else and switch', [['Tests', 'Any boolean condition, including ranges', 'Equality with fixed case values only'], ['Types', 'Works with any type, double included', 'int, char or String (not double or boolean)']]),
  pair(8, 'Implicit and explicit type conversion', [['Done by', 'Java, automatically', 'The programmer, with a cast such as (int)'], ['Direction', 'Smaller to larger type, so nothing is lost', 'Usually larger to smaller, so data may be lost']]),
  pair(9, 'print() and println()', [['Cursor after', 'Stays on the same line', 'Moves to the next line'], ['Empty call', 'print() with no argument does not compile', 'println() alone prints a blank line']]),
  pair(10, 'next() and nextLine() of Scanner', [['Reads', 'One word, up to a space', 'The whole line, spaces included'], ['Use for', 'A single token such as a name with no spaces', 'A full sentence']]),
  pair(11, 'Math.ceil() and Math.floor()', [['Rounds to', 'The smallest whole number not less than the value', 'The largest whole number not greater than the value'], ['Example', 'Math.ceil(-4.2) is -4.0', 'Math.floor(-4.2) is -5.0']]),
  pair(12, 'Character literal and String literal', [['Written in', 'Single quotes: \'A\'', 'Double quotes: "A"'], ['Holds', 'Exactly one character, type char', 'Any number of characters, type String']]),
  pair(13, 'Keyword and identifier', [['Meaning', 'A reserved word with a fixed meaning to Java', 'A name the programmer chooses'], ['Example', 'class, int, while', 'total, marks, findMax']]),
  pair(14, '&amp;&amp; and ||', [['True when', 'Both conditions are true', 'At least one condition is true'], ['Skips the right side when', 'The left side is false', 'The left side is true']]),
  pair(15, 'Syntax error and logical error', [['Found by', 'The compiler, before the program runs', 'Only by checking the output'], ['Example', 'A missing semicolon', 'Using &gt; where &gt;= was needed']])
].join('\n'))}
    <p class="bx-mt-40">Precedence and more operator traps are on <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>, and loop conversions on <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="diff-oop">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which pairs come from classes, methods, constructors, wrappers and encapsulation?</p>
      <h2>Call by value vs call by reference, pure vs impure method, and the class pairs</h2>
      <p class="bx-lede">Chapters 2 to 6 give seventeen pairs. Several are set nearly every year in some form, so the wording below is worth learning closely.</p>
    </div>
${table('First', 'Second', [
  pair(16, 'Class and object', [['What it is', 'A blueprint, a user-defined data type', 'An instance made from that blueprint'], ['Memory', 'No memory for data until objects are made', 'Takes memory for its own data members when made with new']]),
  pair(17, 'Primitive and composite data types', [['Built from', 'Built into Java', 'Made from primitive and other types'], ['Example and size', 'int, char, double, with fixed sizes', 'String, arrays, classes, sizes vary']]),
  pair(18, 'Call by value and call by reference', [['What is passed', 'A copy of the value (primitives)', 'A reference to the same object (arrays, objects)'], ['Effect on caller', 'Changes inside the method do not reach the caller', 'Changes to the object inside the method are seen by the caller']]),
  pair(19, 'Pure and impure method', [['Changes state', 'No: it changes nothing outside itself', 'Yes: it changes a data member or a passed object'], ['Same input', 'Always gives the same result', 'Its effect may differ as the state changes']]),
  pair(20, 'Actual and formal parameters', [['Found in', 'The method call', 'The method definition'], ['Example', '5 in area(5)', 's in int area(int s)']]),
  pair(21, 'Static and non-static method', [['Called by', 'The class name, with no object needed', 'An object of the class'], ['Can use', 'Only static members directly', 'Both static and instance members']]),
  pair(22, 'void method and method with a return type', [['Returns', 'Nothing', 'One value of the stated type'], ['Call used as', 'A statement on its own', 'A value inside an expression or assignment']]),
  pair(23, 'Constructor and method', [['Name and return type', 'Same name as the class, no return type', 'Any name, must declare a return type or void'], ['How it runs', 'Automatically, when new makes an object', 'Only when called by name']]),
  pair(24, 'Default and parameterised constructor', [['Parameters', 'None', 'One or more'], ['Initial values', 'Fixed or default values for every object', 'Values passed in, so each object can differ']]),
  pair(25, 'Autoboxing and unboxing', [['Converts', 'A primitive into its wrapper object', 'A wrapper object back into its primitive'], ['Example', 'Integer k = 25;', 'int j = k;']]),
  pair(26, 'Primitive type and wrapper class', [['Nature', 'A plain value such as int', 'An object such as Integer holding that value'], ['Methods', 'Has none', 'Has methods such as parseInt and toString']]),
  pair(27, 'Integer.parseInt() and Integer.valueOf()', [['Returns', 'A primitive int', 'An Integer object'], ['Example', 'int a = Integer.parseInt("15");', 'Integer b = Integer.valueOf("15");']]),
  pair(28, 'Character.isUpperCase() and Character.toUpperCase()', [['Returns', 'boolean: is it a capital?', 'char: the capital form'], ['Example', 'isUpperCase(\'k\') is false', 'toUpperCase(\'k\') is \'K\'']]),
  pair(29, 'private and public', [['Visible in', 'Its own class only', 'Every class'], ['Typical use', 'Data members, to hide them', 'Methods that other classes must call']]),
  pair(30, 'Local and instance variable', [['Declared', 'Inside a method or block', 'Inside the class, outside every method'], ['Lifetime', 'Only while the method or block runs', 'As long as the object exists']]),
  pair(31, 'Instance and class (static) variable', [['Copies', 'One per object', 'One shared by every object'], ['Declared with', 'No static keyword', 'The static keyword']]),
  pair(32, 'Encapsulation and abstraction', [['Means', 'Binding data with its methods and hiding the data', 'Showing only essential features, hiding details of how'], ['Achieved by', 'A class with private data and public methods', 'Exposing what an object does, not how it does it']])
].join('\n'))}
    <p class="bx-mt-40">These chapters have their own pages: <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading</a>, <a class="bx-link" href="/icse-class-10-constructors-questions">constructors</a>, <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a> and <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="diff-data">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Which pairs come from arrays and strings?</p>
      <h2>Linear vs binary search, bubble vs selection sort, equals() vs ==</h2>
      <p class="bx-lede">The last two chapters give eight pairs. Linear against binary search is the one most often set; equals() against == is the one most often answered backwards.</p>
    </div>
${table('First', 'Second', [
  pair(33, 'Linear search and binary search', [['Array needed', 'Any order', 'Sorted order only'], ['Method', 'Checks elements one by one from the start', 'Checks the middle and discards half each step, so far fewer checks on a large array']]),
  pair(34, 'Bubble sort and selection sort', [['Compares', 'Neighbouring elements, swapping when out of order', 'The current position with the smallest (or largest) of the rest'], ['Swaps per pass', 'Possibly many', 'At most one']]),
  pair(35, 'length and length()', [['Belongs to', 'An array: a field, no brackets', 'A String: a method, with brackets'], ['Example', 'arr.length', 's.length()']]),
  pair(36, 'Single and double dimensional array', [['Index', 'One subscript: a[i]', 'Two subscripts: m[r][c]'], ['Shape', 'A list', 'A table of rows and columns']]),
  pair(37, 'equals() and == for Strings', [['Compares', 'The characters in the two Strings', 'Whether both names refer to the same object'], ['Use', 'To test text for equality', 'Not for text; it can say false for equal text']]),
  pair(38, 'equals() and compareTo()', [['Returns', 'boolean', 'int: zero, negative or positive'], ['Tells you', 'Only whether they are equal', 'Their dictionary order as well']]),
  pair(39, 'equals() and equalsIgnoreCase()', [['Case', 'Matters: "Java" and "java" differ', 'Ignored: "Java" and "java" match'], ['Same in both', 'Return type is boolean', 'Return type is boolean']]),
  pair(40, 'indexOf() and charAt()', [['Given', 'A character or substring', 'A position (index)'], ['Returns', 'An int position, or -1 if absent', 'The char at that position']])
].join('\n'))}
    <p class="bx-mt-40">The programs behind these pairs are on <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">sorting and searching programs</a> and <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="proofs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Which pairs are easiest to mix up?</p>
      <h2>Four differences proved in Java code</h2>
      <p class="bx-lede">When you cannot remember which side is which, a three-line program settles it. Each fragment below was run in Java 21, and the output is the proof.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Pairs 1 and 4</b><span>= vs ==, while vs do-while</span></figcaption>
  <pre>int a = 4;
boolean same = (a == 5);   // compares
a = 5;                     // assigns
System.out.println(same + " " + a);

int w = 10, d = 10, wc = 0, dc = 0;
while (w &lt; 5) { wc++; w++; }
do { dc++; d++; } while (d &lt; 5);
System.out.println(wc + " " + dc);

<i>// Output: false 5
//         0 1</i></pre>
  <p class="bx-code-note">The condition is false from the start, yet the do-while body still runs once.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Pairs 18 and 37</b><span>value vs reference, equals vs ==</span></figcaption>
  <pre>static void bump(int x) { x = x + 10; }
static void bumpAll(int[] arr) {
    for (int i = 0; i &lt; arr.length; i++) arr[i] += 10;
}
// in main:
int n = 1;
int[] m = {1, 2};
bump(n);
bumpAll(m);
System.out.println(n + " " + m[0] + " " + m[1]);

String s1 = "exam";
String s2 = new String("exam");
System.out.println((s1 == s2) + " " + s1.equals(s2));

<i>// Output: 1 11 12
//         false true</i></pre>
  <p class="bx-code-note">The int keeps its value; the array changes. Same text, different objects, so == says false.</p>
</figure>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are difference questions practised in class?</p>
      <h2>Writing pairs against the clock in the mini batch</h2>
      <p class="bx-lede">Knowing a difference and writing it in two matched points in under two minutes are separate skills. The class trains the second.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Five pairs, ten minutes</h4><p>At the Tuesday 5:30 PM IST class, students write five pairs from the chapter in hand, two points each, on a timer.</p></li>
      <li class="bx-step"><h4>Marked on screen</h4><p>Answers are shown together and each point is marked as an examiner would: matched or one-sided, precise or vague.</p></li>
      <li class="bx-step"><h4>Proved in BlueJ</h4><p>Any pair the group argues about is settled at the Wednesday 8:00 PM IST class by running a short program, like the two above.</p></li>
      <li class="bx-step"><h4>Back in mock papers</h4><p>From December the same pairs appear inside full two-hour papers, where the time pressure is real.</p></li>
    </ol>
    <p class="bx-mt-40">Other two-mark shapes, outputs and error spotting, are practised on <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise difference questions in the mini batch, or one to one',
  chooseLede: 'The forty pairs, the timed drills and the BlueJ proofs are the same in both formats. In India a family picks the Tuesday and Wednesday mini batch or a private slot; ICSE students abroad learn one to one. Monthly billing, no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students',
    'Five pairs written to time every Tuesday',
    'Each point marked matched or one-sided',
    'Disputed pairs settled by running code'
  ],
  choosePersonal: [
    'A slot the family chooses, in India or abroad',
    'Only the pairs your child keeps reversing',
    'Wording tightened point by point',
    'Definitions and differences drilled together',
    'Same teachers, same 2027 syllabus'
  ],
  chooseAfter: 'A student who understands Java well but writes one-sided or vague differences usually needs only a few one to one sessions on answer shape. A student who wants all of Section A practised every week, differences included, is better served by the two batch classes. Fees appear in your own currency.',
  zonesH2: 'Difference question practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India set the same Computer Applications paper, so the same pairs come up. Abroad these drills run one to one at an evening time on the student\'s own clock.',
  zonesAfter: 'The slot is set after the free demo and can shift around school tests. Families overseas can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about difference questions',
  faqH2: 'What students ask about ICSE Computer difference questions',
  faqs: [
    ['How many points should I write in an ICSE difference between question?', 'Two, for a two-mark question, and each point should cover both sides of the pair on the same basis. Writing three or four points does not earn extra marks, and it uses time Section A cannot spare. If the question asks for one difference, give one matched point.'],
    ['Should I write differences in a table in the ICSE exam?', 'A table with three columns, the basis and the two items, is the clearest way and is quick to mark. Two sentences joined by "whereas" are equally acceptable. What matters is that each point compares the same feature of both items, not a different feature of each.'],
    ['What is the difference between linear search and binary search?', 'Linear search checks each element in turn and works on an array in any order. Binary search needs a sorted array; it checks the middle element and discards half of the remaining array at each step. On a large sorted array binary search needs far fewer comparisons.'],
    ['What is the difference between call by value and call by reference in Java?', 'In call by value a copy of a primitive is passed, so changes inside the method do not affect the caller\'s variable. In call by reference, as the ICSE syllabus describes it for arrays and objects, the method receives a reference to the same object, so changes it makes to that object are seen by the caller.'],
    ['What is the difference between pure and impure methods?', 'A pure method returns a value and changes nothing outside itself, so the same inputs always give the same result. An impure method changes the state of something outside itself, such as a data member of the object or an array it was passed.'],
    ['What is the difference between = and == in Java?', 'The single = is the assignment operator: it stores a value in a variable. The double == is a relational operator: it compares two values and gives true or false. Writing = inside an if condition with an int is a compile error in Java.'],
    ['What is the difference between while and do while loop?', 'while is entry controlled: it tests the condition before the body, so the body may run zero times. do-while is exit controlled: it tests after the body, so the body always runs at least once. do-while also ends with a semicolon after its condition.'],
    ['What is the difference between equals() and == for Strings?', 'equals() compares the characters of two Strings and returns true when the text matches. == compares whether two names point to the same object in memory, so two Strings with the same text can still give false. Always use equals() to compare text.'],
    ['Are difference questions asked every year in ICSE Computer Applications?', 'Two-mark difference questions appear regularly in Section A, though the exact pairs change from paper to paper. That is why this page covers every likely pair from the 2027 syllabus rather than a short list. Learn the two points for each and any pair the paper picks is covered.'],
    ['Do you practise difference questions in live classes?', 'Yes. In the mini batch students write five pairs against a timer every Tuesday at 5:30 PM IST, and each point is marked on screen. Any disputed pair is settled in BlueJ on Wednesday at 8:00 PM IST. Students abroad, or with clashing timings, do the same one to one.']
  ],
  startH2: 'Try a free live difference drill',
  startHtml: `        <p>In the free demo your child writes a few difference pairs against the clock, and the mentor marks each point on screen as matched or one-sided, then proves a disputed pair in BlueJ. You leave knowing which chapters your child can explain precisely and whether the mini batch or one to one suits them.</p>
        <p>Prefer to revise first? See <a class="bx-link" href="/icse-computer-applications-notes">the chapter-wise notes</a> or <a class="bx-link" href="/icse-computer-applications-worksheets">the chapter worksheets with answers</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Difference questions 2027'
};
