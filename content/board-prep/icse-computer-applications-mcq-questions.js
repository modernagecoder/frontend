// ICSE Class 10 Computer Applications (Java): an original MCQ set mirroring the
// twenty-MCQ Question 1. Intent: "icse computer applications mcq questions",
// "icse computer mcq chapter wise", "objective questions java icse", "icse
// computer mcq with answers", "Q1 mcq icse computer".
// Distinct from ic02 (output tracing only, sorted by trap), ic01 (past Section B
// mapped) and ic06 (assertion-reason and scenario items worked at length): this
// page is the one-mark bank, 32 original MCQs in chapter order, each with the
// answer and a reason for EVERY wrong option, answers inside <details> so a
// reader can self-mark and crawlers still read them.
// Question 1 shapes (concept, output, picture or scenario, assertion-reason,
// jumbled or incomplete code) were checked on 2026-11-06 against solved copies
// of the 2024, 2025 and 2026 papers; no paper item is reproduced. Inside the
// 2027 syllabus only: no recursion. Every code-based item was compiled with
// javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch
// files outside the repo (Mcq.java printed Q9 6, Q10 a 6 b 18, ceil -4.0,
// round sum 1, x 17, switch 52, loop count 4, sum 22, 1245, PUT, 3, -8,
// false q, 154, 4 7, 40 bytes, 2 binary steps, 7/2 = 3, do-while runs 1,
// char 2 bytes); the "no cast needed", identifier and
// overloading items were checked by compiling the wrong options and confirming
// javac rejects each one.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-mcq-questions',
  code: 'ic07',
  board: 'icse',
  themeColor: '#5E3A55',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Applications MCQ Questions 2027, Answered',
  description: 'ICSE Computer Applications MCQ questions for 2027: 32 original Question 1 style MCQs, chapter wise, each with the answer and why every other option is wrong.',
  ogTitle: 'ICSE Computer Applications MCQs, Chapter Wise, Every Option Explained',
  ogDesc: 'Thirty-two original one-mark Java MCQs for ICSE Class 10 in chapter order, written in the shapes Question 1 now uses, including output, scenario and assertion and reason items. Every answer comes with the reason each wrong option fails, and every code item was run in Java.',
  twDesc: '32 original ICSE Computer Applications MCQs for Question 1, chapter wise, with a reason for every wrong option.',
  headline: 'ICSE Computer Applications MCQ Questions for 2027: 32 Question 1 Items, Chapter Wise, with Every Option Explained',
  courseName: 'ICSE Class 10 Computer Applications (Java) MCQ Practice for Question 1, Live Online',
  courseDesc: 'Live online practice of the twenty one-mark MCQs in Question 1 of the ICSE Class 10 Computer Applications paper for 2027: chapter-wise objective sets on data types, operators, Math methods, loops, methods and constructors, Strings, wrapper classes and arrays, plus scenario and assertion and reason items, each timed, marked aloud with the reason every wrong option fails and checked in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Q1 MCQs',
  navLinks: [['#pattern', 'How Q1 is set'], ['#bank-a', 'MCQ bank'], ['#bank-c', 'Strings and arrays'], ['#technique', 'Technique'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'MCQ questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; MCQ for Question 1, 2027',
  h1: 'ICSE Computer Applications MCQ questions, with a reason for every wrong option.',
  lede: 'These ICSE Computer Applications MCQ questions are a self-check for Question 1, the twenty one-mark items that open the paper. There are 32 original questions in chapter order, from data types to 2D arrays, plus the newer scenario and assertion and reason shapes. Each answer explains why the right option is right and why each of the other three is wrong, because that is where marks are really lost. In our mini batch, sets like these are timed and marked aloud every week.',
  heroNote: 'Live online &middot; 32 original MCQs below &middot; every wrong option explained &middot; code items run in Java &middot; timed Question 1 sets &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live MCQ practice for ICSE Computer Applications Question 1.',
  timetable: {
    label: 'When the MCQ sets run',
    title: 'Question 1 drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, a twenty-item timed set', '5:30', 'PM IST'],
      ['Wednesday, weak chapters again', '8:00', 'PM IST'],
      ['Original MCQs on this page', '32', 'explained'],
      ['Question 1 in the paper', '20', 'marks']
    ],
    zones: '<b>In India:</b> the timed sets run at the two batch times above. <b>Abroad:</b> students at ICSE schools in the UAE, Singapore, Indonesia and Thailand take the same sets in a private class once school is over.',
    stamps: ['Question 1 &middot; 20 x 1', 'Every option explained']
  },
  picksH2: 'Courses behind these MCQ sets',
  picksLede: 'The ICSE Java course where the mini batch runs a timed Question 1 set each week, the Class 11 and 12 Computer Science course where the same objective habits carry into ISC, and the algorithms course for students curious about why binary search needs so few steps.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every chapter ends in a timed MCQ set marked option by option.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving on to ISC Computer Science, where the same Java facts return in longer objective and short-answer questions.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who liked the searching and sorting items and wants to measure how fast each method really is.' }
  ],
  capsule: 'ICSE Computer Applications MCQ questions make up Question 1 of the paper: twenty compulsory one-mark items worth 20 of the 40 Section A marks, answered by writing the correct option only. Recent papers mix concept items, output of short Java code, Math and String method results, scenario or picture items, assertion and reason items and incomplete code. The best practice is a timed set followed by checking why every wrong option is wrong. Modern Age Coders runs these timed sets live: in India in a Tuesday and Wednesday evening mini batch, and anywhere in personalised one to one classes.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="pattern">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How is Question 1 set?</p>
      <h2>How Q1 MCQ in ICSE Computer Applications is set</h2>
      <p class="bx-lede">Question 1 is twenty multiple choice items of one mark each, all compulsory, inside the 40-mark Section A. The paper asks for the correct option only, without copying the question. The shapes below were checked against solved copies of the 2024, 2025 and 2026 papers.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Item shape</th><th scope="col">What it tests</th><th scope="col">In this bank</th></tr></thead>
        <tbody>
          <tr><td>Concept and term</td><td>OOP principles, keywords, data type sizes, access specifiers, constructors</td><td>1 to 5, 16 to 19</td></tr>
          <tr><td>Value of an expression</td><td>Precedence, integer division, increments, Math return types</td><td>6 to 10</td></tr>
          <tr><td>Output of a short fragment</td><td>switch fall-through, loop counts, continue, String and Character methods</td><td>11 to 15, 20 to 24</td></tr>
          <tr><td>Arrays and searching</td><td>length, indices, memory, sorting and binary search facts</td><td>25 to 29</td></tr>
          <tr><td>Assertion and reason</td><td>Judging two statements and whether one explains the other</td><td>30 and 31</td></tr>
          <tr><td>Scenario or picture</td><td>Matching an everyday situation to a Java construct</td><td>32</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the shape of Question 1 means for practice</h3>
        <ul class="bx-check">
          <li><b>Twenty marks, no choice.</b> Every item must be attempted; there is nothing to skip.</li>
          <li><b>Many are code.</b> Recent papers carried several output and expression items, so tracing speed matters.</li>
          <li><b>Newer shapes are small but steady.</b> Assertion and reason items appeared in 2024, 2025 and 2026, and so did picture or scenario items.</li>
        </ul>
      </div>
      <div>
        <h3>Why every wrong option is explained</h3>
        <p>Wrong options are built from real slips: dividing as decimals, forgetting a post-increment, expecting Math.round to return a double. Knowing why an option tempts you is what stops you choosing it. Read the reasons even when you were right.</p>
        <p>For long practice in output tracing alone, see <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions sorted by trap</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="bank-a">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Data types, operators and Math</p>
      <h2>ICSE computer MCQ chapter wise: values, data types, operators and Math methods</h2>
      <p class="bx-lede">Items 1 to 10. Pick an option, open the answer, then read the line on each wrong option.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Classes, values and data types</h3>
        <ol class="bx-qlist">
          <li>A class keeps its data members private and lets other classes reach them only through public methods. This is
            <br>(a) inheritance <br>(b) encapsulation <br>(c) polymorphism <br>(d) abstraction
            <details><summary>Answer</summary> <b>(b)</b> Wrapping data with the methods that guard it is encapsulation. Not (a): inheritance is one class acquiring another's members. Not (c): polymorphism is one name with many forms, such as overloading. Not (d): abstraction is showing only essential features; it does not need private data.</details></li>
          <li>How much memory does a <code>char</code> take in Java?
            <br>(a) 1 byte <br>(b) 2 bytes <br>(c) 4 bytes <br>(d) 8 bytes
            <details><summary>Answer</summary> <b>(b)</b> Java stores characters in Unicode, two bytes each. Not (a): one byte is the size of <code>byte</code>, and of char in some other languages. Not (c): four bytes is int or float. Not (d): eight bytes is long or double.</details></li>
          <li>Which is a valid identifier?
            <br>(a) <code>2ndMark</code> <br>(b) <code>total-marks</code> <br>(c) <code>_total2</code> <br>(d) <code>class</code>
            <details><summary>Answer</summary> <b>(c)</b> An identifier may start with a letter, an underscore or a dollar sign and then hold digits. Not (a): it begins with a digit. Not (b): the hyphen is read as minus. Not (d): class is a keyword.</details></li>
          <li>Which literal is of type <code>double</code>?
            <br>(a) <code>25</code> <br>(b) <code>25L</code> <br>(c) <code>25.0</code> <br>(d) <code>'2'</code>
            <details><summary>Answer</summary> <b>(c)</b> A number with a decimal point and no suffix is a double. Not (a): a whole number is an int. Not (b): the L suffix makes it a long. Not (d): single quotes make a char.</details></li>
          <li>Which statement compiles without a cast?
            <br>(a) <code>int i = 4.5;</code> <br>(b) <code>double d = 7;</code> <br>(c) <code>char c = 66.0;</code> <br>(d) <code>long n = 3.0f;</code>
            <details><summary>Answer</summary> <b>(b)</b> int to double is widening, so Java converts it silently and d holds 7.0. Not (a), (c) or (d): each puts a decimal value into a smaller or whole-number type, and javac reports a possible lossy conversion.</details></li>
        </ol>
      </div>
      <div>
        <h3>Operators, expressions and Math</h3>
        <ol class="bx-qlist" start="6">
          <li>The value of <code>17 % 5 * 2 + 10 / 4</code> is
            <br>(a) 6 <br>(b) 6.5 <br>(c) 9 <br>(d) 3
            <details><summary>Answer</summary> <b>(a)</b> % and * go left to right first: 2 * 2 is 4; 10 / 4 is int division, 2; 4 + 2 is 6. Not (b): it treats 10 / 4 as 2.5. Not (c): it works 17 % 10 as if * came first. Not (d): it ignores precedence and divides the whole 14 by 4.</details></li>
          <li><code>int a = 6; int b = a++ * 2 + --a;</code> What is b?
            <br>(a) 20 <br>(b) 18 <br>(c) 19 <br>(d) 17
            <details><summary>Answer</summary> <b>(b)</b> a++ gives 6 and makes a 7; --a makes it 6 again and gives 6; 6 * 2 + 6 is 18. Not (a): it doubles 7, the value after the increment. Not (c): it forgets that --a lowers a before use. Not (d): it decrements from the original 6.</details></li>
          <li><code>Math.ceil(-4.2)</code> returns
            <br>(a) -5.0 <br>(b) -4.0 <br>(c) -4 <br>(d) 4.0
            <details><summary>Answer</summary> <b>(b)</b> ceil moves up the number line, and -4 is above -4.2; it returns a double. Not (a): that is floor. Not (c): ceil never returns an int. Not (d): ceil does not drop the sign.</details></li>
          <li><code>Math.round(2.5) + Math.round(-2.5)</code> is
            <br>(a) 0 <br>(b) 1 <br>(c) 1.0 <br>(d) 5
            <details><summary>Answer</summary> <b>(b)</b> round adds 0.5 and takes the floor: 3 and -2, sum 1. Not (a): it rounds -2.5 to -3, away from zero. Not (c): round of a double returns a long, so no .0. Not (d): it adds the sizes and ignores the sign.</details></li>
          <li><code>int x = 10; x += x-- - 3;</code> x is now
            <br>(a) 16 <br>(b) 17 <br>(c) 7 <br>(d) 6
            <details><summary>Answer</summary> <b>(b)</b> The left x, 10, is saved first; x-- gives 10; 10 + (10 - 3) is 17. Not (a): it adds 7 to the lowered 9. Not (c): it forgets that += adds to the old x. Not (d): it uses 9 - 3 and drops the addition.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The full order of precedence is on <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>, and every Math method with its return type is on <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="bank-b">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Input, loops, methods and constructors</p>
      <h2>Objective questions Java ICSE: conditions, loops, methods and constructors</h2>
      <p class="bx-lede">Items 11 to 19. Loop items reward listing every value of the control variable; method items reward precise definitions.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Input, conditions and loops</h3>
        <ol class="bx-qlist" start="11">
          <li>Which Scanner method reads a full name such as "Riya Sen" in one go?
            <br>(a) <code>next()</code> <br>(b) <code>nextLine()</code> <br>(c) <code>nextString()</code> <br>(d) <code>readLine()</code>
            <details><summary>Answer</summary> <b>(b)</b> nextLine reads up to the end of the line, spaces included. Not (a): next stops at the first space and returns "Riya". Not (c): Scanner has no such method. Not (d): readLine belongs to BufferedReader, not Scanner.</details></li>
          <li><code>int k = 2;</code> <code>switch (k) { case 1: k += 10; case 2: k += 20; case 3: k += 30; break; default: k = 0; }</code> k is now
            <br>(a) 22 <br>(b) 52 <br>(c) 0 <br>(d) 62
            <details><summary>Answer</summary> <b>(b)</b> Entry is at case 2, and with no break it falls into case 3: 2 + 20 + 30. Not (a): it stops at case 2 as if a break were there. Not (c): default is never reached, the break comes first. Not (d): it also adds case 1, which is above the entry point.</details></li>
          <li>How many times does <code>for (int i = 5; i &lt;= 40; i *= 2)</code> run?
            <br>(a) 3 <br>(b) 4 <br>(c) 5 <br>(d) it never stops
            <details><summary>Answer</summary> <b>(b)</b> i takes 5, 10, 20 and 40; at 80 the test fails. Not (a): it drops 40, but the test is &lt;=. Not (c): it counts 80, which fails the test. Not (d): i grows each pass, so the loop ends.</details></li>
          <li><code>int s = 0; for (int i = 1; i &lt;= 10; i += 3) s += i;</code> s is
            <br>(a) 22 <br>(b) 12 <br>(c) 55 <br>(d) 10
            <details><summary>Answer</summary> <b>(a)</b> 1 + 4 + 7 + 10. Not (b): it leaves out 10, the last value that passes. Not (c): it adds every number from 1 to 10. Not (d): it gives the last value of i, not the total.</details></li>
          <li><code>for (int i = 1; i &lt;= 6; i++) { if (i % 3 == 0) continue; System.out.print(i); }</code> prints
            <br>(a) 12 <br>(b) 1245 <br>(c) 36 <br>(d) 123456
            <details><summary>Answer</summary> <b>(b)</b> continue skips the print for 3 and 6 but the loop goes on. Not (a): that is what break would print. Not (c): it prints only the skipped values. Not (d): it ignores the continue.</details></li>
        </ol>
      </div>
      <div>
        <h3>Methods, constructors and access</h3>
        <ol class="bx-qlist" start="16">
          <li>Which is true of a constructor?
            <br>(a) its return type is void <br>(b) it has no return type <br>(c) it may have any name <br>(d) it must be called explicitly
            <details><summary>Answer</summary> <b>(b)</b> A constructor has no return type at all. Not (a): writing void turns it into an ordinary method. Not (c): it must have the class's name. Not (d): it runs by itself when new creates the object.</details></li>
          <li>Which pair can NOT be in the same class?
            <br>(a) <code>int area(int s)</code> and <code>double area(double r)</code> <br>(b) <code>void print(int a, char b)</code> and <code>void print(char b, int a)</code> <br>(c) <code>int sum(int a, int b)</code> and <code>double sum(int x, int y)</code> <br>(d) <code>void put()</code> and <code>void put(String s)</code>
            <details><summary>Answer</summary> <b>(c)</b> The parameter lists match and only the return type differs, so javac says sum is already defined. Not (a): parameter types differ. Not (b): parameter order differs. Not (d): parameter count differs.</details></li>
          <li>A <code>private</code> data member can be used
            <br>(a) anywhere in the program <br>(b) only inside its own class <br>(c) only in main <br>(d) in any class of the same package
            <details><summary>Answer</summary> <b>(b)</b> private limits access to the class that declares it. Not (a): that is public. Not (c): main has no special access. Not (d): that is default, or package, access.</details></li>
          <li>A <code>static</code> data member is
            <br>(a) copied into every object <br>(b) shared by all objects of the class <br>(c) usable only in main <br>(d) a constant that cannot change
            <details><summary>Answer</summary> <b>(b)</b> One copy belongs to the class and every object sees it. Not (a): that describes an instance variable. Not (c): any method of the class can use it. Not (d): that is final.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">One-mark items often turn into two-mark "difference between" parts in Question 2; those are set out on <a class="bx-link" href="/icse-computer-difference-between-questions">difference between questions for ICSE Computer Applications</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="bank-c">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Strings, wrappers, arrays and the newer shapes</p>
      <h2>ICSE computer MCQ with answers: Strings, arrays, assertion and reason</h2>
      <p class="bx-lede">Items 20 to 32. String items test indices and return types; array items test length and memory; the last three use the newer shapes.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Strings, Character and wrapper classes</h3>
        <ol class="bx-qlist" start="20">
          <li><code>"COMPUTER".substring(3, 6)</code> returns
            <br>(a) PUT <br>(b) PUTE <br>(c) MPU <br>(d) MPUT
            <details><summary>Answer</summary> <b>(a)</b> Indices 3, 4 and 5; the end index is left out. Not (b): it includes index 6. Not (c): it counts from 1. Not (d): it counts from 1 and includes the end.</details></li>
          <li><code>"banana".indexOf('a', 2)</code> is
            <br>(a) 1 <br>(b) 3 <br>(c) 5 <br>(d) 2
            <details><summary>Answer</summary> <b>(b)</b> The search starts at index 2 ('n'), and the next 'a' is at 3. Not (a): that 'a' is before the start. Not (c): that is lastIndexOf. Not (d): it returns the start index itself.</details></li>
          <li><code>"Exam".compareTo("Exit")</code> is
            <br>(a) -8 <br>(b) 8 <br>(c) 0 <br>(d) -1
            <details><summary>Answer</summary> <b>(a)</b> The first difference is 'a' (97) against 'i' (105): 97 - 105. Not (b): the subtraction is the wrong way round. Not (c): the strings differ. Not (d): compareTo returns the code difference, not just a sign.</details></li>
          <li><code>Character.isLetter('7') + " " + Character.toLowerCase('Q')</code> gives
            <br>(a) true q <br>(b) false q <br>(c) false Q <br>(d) false 113
            <details><summary>Answer</summary> <b>(b)</b> '7' is a digit, and toLowerCase returns the char q. Not (a): a digit is not a letter. Not (c): the conversion did happen. Not (d): the String join keeps it a character, not a code.</details></li>
          <li><code>Integer.parseInt("12") + 3 + "4"</code> gives
            <br>(a) 154 <br>(b) 1234 <br>(c) 19 <br>(d) 1534
            <details><summary>Answer</summary> <b>(a)</b> 12 + 3 is added first as ints, then "4" is joined. Not (b): it joins all three. Not (c): it adds 4 as a number. Not (d): it joins "15" and "34".</details></li>
        </ol>
        <p>More wrapper and Character items are on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.</p>
      </div>
      <div>
        <h3>Arrays, sorting and searching</h3>
        <ol class="bx-qlist" start="25">
          <li><code>int[] p = {4, 9, 2, 7};</code> <code>p.length + " " + p[p.length - 1]</code> gives
            <br>(a) 4 7 <br>(b) 3 7 <br>(c) 4 2 <br>(d) an error
            <details><summary>Answer</summary> <b>(a)</b> Four elements; the last index is 3, which holds 7. Not (b): length counts elements, not the last index. Not (c): it reads index 2. Not (d): length is a field, written correctly without brackets.</details></li>
          <li>Binary search can be used only when the array is
            <br>(a) of int type <br>(b) sorted <br>(c) of even length <br>(d) free of duplicates
            <details><summary>Answer</summary> <b>(b)</b> Halving works only if order tells you which half to keep. Not (a): Strings and chars can be searched too. Not (c): any length works. Not (d): duplicates do not stop it finding a match.</details></li>
          <li>How many bytes does <code>new double[5]</code> take for its elements?
            <br>(a) 5 <br>(b) 20 <br>(c) 40 <br>(d) 80
            <details><summary>Answer</summary> <b>(c)</b> Five elements of 8 bytes each. Not (a): that is the count, not the size. Not (b): it uses 4 bytes, the size of int or float. Not (d): it doubles the size of a double.</details></li>
          <li>A bubble sort of 6 elements needs at most how many passes?
            <br>(a) 5 <br>(b) 6 <br>(c) 15 <br>(d) 36
            <details><summary>Answer</summary> <b>(a)</b> Each pass fixes one element at the end, and the last one is then in place: n - 1. Not (b): the sixth pass has nothing left to fix. Not (c): 15 is the total comparisons, 5 + 4 + 3 + 2 + 1. Not (d): it multiplies n by n.</details></li>
          <li>Binary search for 56 in <code>{3, 8, 15, 23, 42, 56, 71}</code>: how many elements are compared, the match included?
            <br>(a) 1 <br>(b) 2 <br>(c) 3 <br>(d) 6
            <details><summary>Answer</summary> <b>(b)</b> The middle, 23 at index 3, is smaller, so the search moves right; the middle of 4 to 6 is index 5, which holds 56. Not (a): 56 is not the first middle. Not (c): 42 is never compared. Not (d): that is linear search reaching index 5.</details></li>
        </ol>
        <h3 class="bx-mt-40">The newer shapes</h3>
        <ol class="bx-qlist" start="30">
          <li><b>Assertion (A):</b> <code>int q = 7 / 2;</code> stores 3 in q. <b>Reason (R):</b> dividing one int by another gives an int with the fraction dropped.
            <br>(a) Both true, R explains A <br>(b) Both true, R does not explain A <br>(c) A true, R false <br>(d) A false, R true
            <details><summary>Answer</summary> <b>(a)</b> q is 3, and integer division is exactly why. Not (b): R is the cause, not a side fact. Not (c): R is a correct rule. Not (d): A is true, the code stores 3.</details></li>
          <li><b>Assertion (A):</b> a do-while loop may execute zero times. <b>Reason (R):</b> a do-while loop checks its condition after the body.
            <br>(a) Both true, R explains A <br>(b) Both true, R does not explain A <br>(c) A true, R false <br>(d) A false, R true
            <details><summary>Answer</summary> <b>(d)</b> Because the test comes after the body, the body always runs once, so A is false. Not (a) or (b): A is false. Not (c): R is the correct rule; it is A that fails.</details></li>
          <li>A vending machine shows a different message for each coin of 1, 2, 5 and 10 and an error for anything else. Which construct fits best?
            <br>(a) a <code>for</code> loop <br>(b) <code>switch</code> with a <code>default</code> <br>(c) a 2D array <br>(d) method overloading
            <details><summary>Answer</summary> <b>(b)</b> One value, several exact cases and a fallback is the switch pattern. Not (a): nothing repeats. Not (c): there is no table of rows and columns. Not (d): overloading means several methods with one name, not several choices of one value.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Assertion and reason and scenario items are worked in depth on <a class="bx-link" href="/icse-computer-applications-competency-questions">ICSE Computer Applications competency based questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="technique">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How should Question 1 be answered?</p>
      <h2>How to score 20 out of 20 in the ICSE Computer Applications MCQ question</h2>
      <p class="bx-lede">Work out the answer first, then find it among the options; reading the options first pulls you towards the slips below.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">The tempting option</th><th scope="col">The slip behind it</th><th scope="col">The check that catches it</th></tr></thead>
        <tbody>
          <tr><td>6.5 for an int expression</td><td>Dividing two ints as decimals</td><td>Mark the type of each operand before dividing</td></tr>
          <tr><td>1.0 for Math.round</td><td>Thinking every Math method returns double</td><td>round of a double returns long; ceil, floor, sqrt and pow return double</td></tr>
          <tr><td>An answer one step off in a loop</td><td>Counting in your head</td><td>List every value of the variable, including the one that fails</td></tr>
          <tr><td>The value after an increment</td><td>Mixing up a++ and ++a</td><td>Write a after each term, left to right</td></tr>
          <tr><td>"Both true, R explains A"</td><td>Judging only the assertion</td><td>Judge A, then R, then ask whether R is the cause of A</td></tr>
        </tbody>
      </table>
    </div>
    <ol class="bx-steps bx-mt-40">
      <li class="bx-step"><h4>Budget about twenty minutes</h4><p>The paper is two hours for 100 marks. Question 1 is 20 marks, so it earns roughly a minute an item; most take less, which buys time for Section B.</p></li>
      <li class="bx-step"><h4>Trace code items on the margin</h4><p>A three-line table of variables is faster than rereading the fragment four times.</p></li>
      <li class="bx-step"><h4>Leave nothing blank</h4><p>Nothing in the paper's instructions says marks are taken away for a wrong option, so when stuck, rule out what you can and choose.</p></li>
    </ol>
    <p class="bx-mt-40">How Question 1 sat inside each recent paper is mapped on <a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">ICSE Computer Applications previous year papers, solved</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are MCQs practised in the live classes?</p>
      <h2>A timed Question 1 every week, marked one option at a time</h2>
      <p class="bx-lede">The batch adds the clock and the marking.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Tuesday: twenty items, twenty minutes</h3><p>Each Tuesday at 5:30 PM IST, a fresh set of twenty original items mixes the week's chapter with older ones. Everyone commits to answers before any is revealed.</p></div>
      <div class="bx-card"><h3>Every option discussed</h3><p>The teacher asks who chose each wrong option and why. The slip is named, and code items are run in BlueJ on a shared screen to settle any doubt.</p></div>
      <div class="bx-card"><h3>Wednesday: the weak chapter again</h3><p>Each Wednesday at 8:00 PM IST, the chapter that cost the most marks comes back as a short set before the Section B program of the week.</p></div>
    </div>
    <p class="bx-mt-40">From December, Question 1 is sat inside full two-hour mock papers. Abroad, the same sets run one to one.</p>
  </div>
</section>`
  ],
  chooseH2: 'MCQ practice in the mini batch, or one to one',
  chooseLede: 'Both formats use the same original Question 1 sets and the same habit of explaining every wrong option. Within India you can join the small evening batch or book private classes; outside India, ICSE Computer Applications is taught one to one only. Fees are billed each month and there is no joining charge.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A twenty-item timed set every Tuesday',
    'Every wrong option named and explained aloud',
    'Code items run in BlueJ on a shared screen'
  ],
  choosePersonal: [
    'Slot chosen by the family, in India or abroad',
    'Sets built from the chapters your child gets wrong',
    'Speed work for students who run out of time',
    'Harder items added as accuracy rises',
    'Batch teachers, 2027 syllabus, BlueJ checks, privately'
  ],
  chooseAfter: 'A student who loses only a few Question 1 marks, always to the same two or three slips, can fix them in a handful of one to one sessions. A student who is unsure across several chapters gains more from two batch classes a week, where MCQs sit beside the programs they come from. The fee is displayed in your own currency.',
  zonesH2: 'Question 1 practice for ICSE students outside India',
  zonesLede: 'ICSE students in the UAE, Singapore, Indonesia and Thailand face the same twenty one-mark items, so the same sets apply. Overseas, the timed sets are done in private classes, set for a free hour after school by local time.',
  zonesAfter: 'The hour is chosen after the free demo and moved when school tests clash. The overseas set-up is explained on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about ICSE MCQs',
  faqH2: 'What students ask about ICSE Computer Applications MCQs',
  faqs: [
    ['How many MCQs are there in the ICSE Computer Applications paper?', 'Question 1 has twenty multiple choice items of one mark each, so 20 marks. They are compulsory and sit inside Section A, which is 40 marks in all; Question 2 makes up the other 20 with ten two-mark parts. Section B, 60 marks, has no MCQs.'],
    ['Are ICSE Computer Applications MCQs chapter wise?', 'In the paper they are mixed, not grouped by chapter. For practice, chapter-wise sets help you find weak topics first. This page groups 32 original items by chapter: data types, operators and Math, loops, methods and constructors, Strings and wrappers, and arrays, then adds the newer assertion and reason and scenario shapes.'],
    ['How do I write MCQ answers in the ICSE Computer Applications paper?', 'Write the item number, the option letter and the answer itself, for example "(iii) (b) 2 bytes". The paper asks for the correct answer only, so do not copy the question. Writing the answer text as well as the letter helps if a number is misread.'],
    ['Are there assertion and reason questions in ICSE Computer Applications MCQs?', 'Yes. Solved copies of the 2024, 2025 and 2026 papers each include assertion and reason items in Question 1, one in 2024 and two in each later year. Judge the assertion and the reason separately, then decide whether the reason actually causes the assertion. Items 30 and 31 above are original practice.'],
    ['Is there negative marking in ICSE Computer Applications MCQs?', 'Nothing in the paper\'s instructions mentions deducting marks for a wrong option, and Question 1 is compulsory. So never leave an item blank: rule out the options you know are wrong and choose between the rest.'],
    ['How long should I spend on Question 1?', 'About twenty minutes is a sensible ceiling in a two-hour, 100-mark paper. Do the theory items in one quick sweep, then trace the code items on the margin. Time saved here goes to the four Section B programs, which carry 60 marks.'],
    ['Are these MCQs from past ICSE papers?', 'No. All 32 items on this page are original, written in the shapes recent Question 1 papers use. Every code item was compiled and run in Java to confirm the answer, and every wrong option was checked against the slip it represents.'],
    ['Do you practise MCQs in live classes?', 'Yes. In the mini batch, Tuesday classes start with a timed twenty-item set, and every wrong option is discussed with the code run in BlueJ when needed. Weak chapters return on Wednesday. A private one to one slot is available for students who want focused help.']
  ],
  startH2: 'Try a free live MCQ class',
  startHtml: `        <p>In the free demo your child answers a short timed set of Question 1 items, then goes through each one with the mentor, including why the tempting wrong options are wrong. Then we tell you which chapters held up under the clock and which format we think fits.</p>
        <p>Want the wider picture? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; MCQ questions for Question 1'
};
