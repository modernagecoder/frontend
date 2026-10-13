// ICSE Class 10 Computer Applications (Java): important questions 2027, unit by
// unit, plus the Section B program families. Intent: "icse computer applications
// important questions 2027", "icse class 10 java important programs", "icse
// computer output questions", "icse string programs class 10", "icse 2d array
// programs". Distinct from isq (specimen + mock ladder), ixd (calendar + pattern)
// and java-programs-practice (program sets). Inside the 2027 syllabus only: sort
// and search on 1D arrays; 2D limited to accept, row/column/diagonal sums and
// matrix display; no recursion; only the listed String, wrapper and Character
// methods. Every printed output was compiled and run (javac 22) on 2026-10-13.
'use strict';

module.exports = {
  slug: 'icse-class-10-computer-applications-important-questions',
  code: 'iiq',
  board: 'icse',
  themeColor: '#73304A',
  title: 'ICSE Computer Applications Important Questions 2027, Unit-Wise',
  description: 'ICSE Class 10 Computer Applications (Java) important questions 2027: outputs, string, array and class programs, unit by unit, practised in live classes.',
  ogTitle: 'ICSE Class 10 Computer Applications Important Questions 2027',
  ogDesc: 'The Java question shapes the ICSE paper keeps asking, unit by unit: output tracing, String and Character methods, constructors, overloading, arrays and the six Section B program families, with a program marked the weak way and the full-marks way.',
  twDesc: 'Unit-wise ICSE Java important questions: outputs, strings, arrays, constructors and Section B programs, practised live.',
  headline: 'ICSE Class 10 Computer Applications Important Questions for 2027, Unit by Unit',
  courseName: 'ICSE Class 10 Computer Applications (Java) Important Questions Practice, Live Online',
  courseDesc: 'Live online practice of the important questions for ICSE Class 10 Computer Applications (Java with BlueJ) for the 2027 examination: Section A output tracing, String, wrapper and Character method questions, and the Section B program families of classes, overloading, arrays, strings and number programs, each marked like the board with live doubt solving, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Questions',
  navLinks: [['#outputs', 'Output questions'], ['#units', 'By unit'], ['#program', 'Program marked'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Important questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Important questions 2027',
  h1: 'ICSE Computer Applications important questions for 2027, unit by unit.',
  lede: 'Java questions are unforgiving: one wrong character in a traced output and the mark is gone. Below are the question shapes the ICSE Computer Applications paper keeps returning to, unit by unit, with outputs we ran in Java and a Section B program marked the weak way and the full-marks way. In our live mini batch each shape is practised against a timer, checked in BlueJ on a shared screen and corrected while doubts are still fresh.',
  heroNote: 'Live online &middot; every unit of the 2027 syllabus &middot; outputs checked in BlueJ &middot; all six program families &middot; live doubts every class &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Class 10 Computer Applications important questions.',
  timetable: {
    label: 'Where each question type is practised',
    title: 'Question practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, Section A shapes', '5:30', 'PM IST'],
      ['Wednesday, Section B programs', '8:00', 'PM IST'],
      ['Program families rotated', '6', 'weekly'],
      ['Outputs checked in', 'BlueJ', 'live']
    ],
    zones: '<b>In India:</b> the mini batch at these times. <b>UAE, Singapore, Indonesia, Thailand:</b> the same practice one to one at a local time you choose.',
    stamps: ['Theory 100 &middot; Internal 100', 'Live doubts']
  },
  picksH2: 'Courses where these questions are practised',
  picksLede: 'The ICSE Java course the mini batch runs in, the Class 10 maths board course many families pair with it, and the data structures course for students who want to go beyond the syllabus.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch: Section A shapes on Tuesdays, Section B program families on Wednesdays, every answer checked in BlueJ.' },
    { slug: 'cbse-class-10-maths-board-exam-prep-course', code: 'Same season / maths', h3: 'Class 10 Maths board prep', p: 'Board maths in small live classes, with timed papers and every lost mark worked through again.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who finishes the ICSE searching and sorting programs early and wants the ideas behind them in depth.' }
  ],
  capsule: 'The most important questions for ICSE Class 10 Computer Applications in 2027 fall into two groups. Section A, worth 40 compulsory marks, asks mainly for output tracing, loop counts, String and Character method results, wrapper class conversions, errors to find and single Java statements. Section B, worth 60 marks, gives six programs from six families, of which students write four: a class written to a specification, searching or sorting on an array, a string program, a double dimensional array, a number-property program and method overloading. Modern Age Coders practises each shape live, checked in BlueJ and marked like the board, in a Tuesday and Wednesday evening mini batch in India or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="outputs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which Section A questions cost the most marks?</p>
      <h2>Output questions, answered and checked by running the code</h2>
      <p class="bx-lede">Every output below was compiled and run in Java before it went on this page. Try each one on paper first, then compare. The ones you get wrong show which rule to revise.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Code</th><th scope="col">Output</th><th scope="col">The rule it tests</th></tr></thead>
        <tbody>
          <tr><td><code>String s = "COMPUTER";</code><br><code>System.out.println(s.indexOf('U') + s.lastIndexOf('E'));</code></td><td class="bx-num">10</td><td>Indices start at 0; two int results are added, not joined</td></tr>
          <tr><td><code>System.out.println(s.substring(3, 6).toLowerCase());</code></td><td class="bx-num">put</td><td>The end index is excluded: characters 3, 4 and 5</td></tr>
          <tr><td><code>System.out.println("APPLE".compareTo("APRIL"));</code></td><td class="bx-num">-2</td><td>The first differing characters, P and R, are subtracted</td></tr>
          <tr><td><code>System.out.println(Integer.parseInt("12") + Double.parseDouble("2.5"));</code></td><td class="bx-num">14.5</td><td>Wrapper conversion, then int plus double gives double</td></tr>
          <tr><td><code>System.out.println((int) Character.toUpperCase('b'));</code></td><td class="bx-num">66</td><td>The cast prints the character code of B</td></tr>
          <tr><td><code>System.out.println(Math.round(-2.5) + " " + Math.ceil(-4.2));</code></td><td class="bx-num">-2 -4.0</td><td>round goes towards positive infinity at .5; ceil returns a double</td></tr>
          <tr><td><code>int i = 1, n = 0; while (i &lt; 50) { i *= 3; n++; }</code><br><code>System.out.println(n + " " + i);</code></td><td class="bx-num">4 81</td><td>Count passes with a step table: 3, 9, 27, 81</td></tr>
          <tr><td><code>char c = 'A'; c += 2; System.out.println(c);</code></td><td class="bx-num">C</td><td>Compound assignment keeps the char type</td></tr>
          <tr><td><code>System.out.println("ICSE".charAt(1) + "ICSE".charAt(2));</code></td><td class="bx-num">150</td><td>char plus char is int arithmetic: 67 + 83</td></tr>
          <tr><td><code>System.out.println("" + "ICSE".charAt(1) + "ICSE".charAt(2));</code></td><td class="bx-num">CS</td><td>A String on the left turns every later + into joining</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      The last two rows show why tracing beats guessing. The code looks almost identical, but the answers are 150 and CS.
      In the 2025 specimen, most Section A questions are labelled Understanding or Analysis rather than Recall, and
      this is what that means in practice. On Tuesdays the mini batch works through fresh fragments like these against
      a timer, then runs them in BlueJ on the shared screen, so every wrong answer is traced back to the rule it broke.
    </p>
  </div>
</section>`,

`<section class="bx-section" id="units">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which questions matter in each unit?</p>
      <h2>Important questions for every unit of the 2027 syllabus</h2>
      <p class="bx-lede">The syllabus for 2027 is the same as for 2026. Section A also draws on Class 9 topics, so the first list is revision. Recursion is not in the syllabus, and nor are StringBuffer or insertion sort.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Class 9 revision and classes</h3>
        <ol class="bx-qlist">
          <li>Name the OOP principle shown by a scenario: encapsulation, abstraction, inheritance or polymorphism.</li>
          <li>Size in bytes of char, int, long and double; the default values of boolean and double.</li>
          <li>Precedence: which operator is evaluated first in an expression such as <code>a + b % c * d - e</code>?</li>
          <li>Write the Java expression for a formula with a square root or a power.</li>
          <li>Rewrite an if-else ladder with switch, or a switch with if-else, and explain fall-through.</li>
          <li>Convert a for loop to a while loop and give the number of iterations.</li>
          <li>Nested loops: trace a pattern, or write the loops that print one.</li>
          <li>Class versus object, and primitive versus composite data types, with an example of each.</li>
        </ol>
        <h3>User-defined methods and constructors</h3>
        <ol class="bx-qlist">
          <li>Pure versus impure methods; static versus non-static methods.</li>
          <li>Call by value versus call by reference, with the definition the syllabus asks for.</li>
          <li>Actual versus formal parameters; write a method prototype from a description.</li>
          <li>What makes two methods overloaded? Which call goes to which version?</li>
          <li>Constructor versus method: three differences.</li>
          <li>Default versus parameterised constructor; name the constructor type in a code fragment.</li>
          <li>Constructor overloading: predict what an object holds after each constructor runs.</li>
        </ol>
      </div>
      <div>
        <h3>Library classes and encapsulation</h3>
        <ol class="bx-qlist">
          <li>Define autoboxing and unboxing, with a one-line example of each.</li>
          <li>Outputs of <code>parseInt</code>, <code>parseDouble</code>, <code>valueOf</code> and the Character methods.</li>
          <li>Check a character with <code>isLetter</code>, <code>isDigit</code>, <code>isWhitespace</code> or <code>isUpperCase</code>.</li>
          <li>Why does <code>Integer</code> need no import? (It is in <code>java.lang</code>.)</li>
          <li>Private, protected and public: who can see each member?</li>
          <li>Label the variables in a class as class, instance, argument or local variables.</li>
        </ol>
        <h3>Arrays and strings</h3>
        <ol class="bx-qlist">
          <li>Declare and initialise a single and a double dimensional array; give the index of the last element.</li>
          <li>Linear search versus binary search; the condition binary search needs.</li>
          <li>Trace one pass of bubble sort or selection sort on five numbers.</li>
          <li>Position of an element in a 2D array, and the value of an expression using two elements.</li>
          <li>The length of an array versus <code>length()</code> of a String.</li>
          <li>Outputs of <code>trim</code>, <code>charAt</code>, <code>indexOf</code>, <code>replace</code>, <code>substring</code>, <code>equals</code> and <code>compareTo</code>.</li>
          <li><code>equals</code> versus <code>equalsIgnoreCase</code>, and <code>==</code> versus <code>equals</code> for Strings.</li>
          <li>Sort a String array alphabetically with bubble or selection sort.</li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="families">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which Section B programs should every student be ready for?</p>
      <h2>Six program families, with the programs worth practising in each</h2>
      <p class="bx-lede">Section B offers six programs and students write four. The 2025 specimen gives one from each family below, so a student who keeps all six ready has the full choice on the day.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>A class to a specification</h3><p>A named class with member variables, an <code>accept()</code> method using Scanner, a calculation from a rate or tariff table, a <code>display()</code> in a set format and a <code>main</code> that creates the object. Practise electricity bills, interest by time slabs, discounts by purchase amount and parking charges.</p></div>
      <div class="bx-card"><h3>Searching and sorting</h3><p>Binary search on a given sorted list, linear search with a message for found or not found, and bubble or selection sort in ascending or descending order. All of these use single dimensional arrays only, as the syllabus specifies.</p></div>
      <div class="bx-card"><h3>String programs</h3><p>Change case, replace vowels or consonants by a rule, count words or a given character, check a palindrome word, convert to Pig Latin, print the characters in alphabetical order, and find the longest word. Use only the String and Character methods the syllabus lists.</p></div>
      <div class="bx-card"><h3>Double dimensional arrays</h3><p>Accept a matrix, display it in matrix format, and find the sum of each row, each column, and the left and right diagonals. The 2027 syllabus covers only these 2D tasks, so sorting a 2D array is not on the paper.</p></div>
      <div class="bx-card"><h3>Number programs</h3><p>Check a defined special number from its digits: palindrome numbers, Armstrong-style digit power sums, digit sum against digit count, perfect numbers, and Niven numbers. Digit extraction with <code>% 10</code> and <code>/ 10</code> is the core skill here.</p></div>
      <div class="bx-card"><h3>Method overloading</h3><p>Three methods with the same name and different parameter lists: one prints a nested-loop pattern, one applies a condition, and one evaluates a formula. Students must decide which version each call in <code>main</code> reaches.</p></div>
    </div>
    <p class="bx-mt-40">
      Complete practice sets for each family, with programs set at increasing difficulty, are on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Java programs practice</a>. How the families
      appeared in the latest specimen, and the paper's full design, are on
      <a class="bx-link" href="/icse-class-10-computer-applications-exam-date-and-paper-pattern">ICSE Computer Applications exam date and paper pattern</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="program">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What does a full-marks Section B answer look like?</p>
      <h2>A double dimensional array program, written the weak way and the full-marks way</h2>
      <p class="bx-lede">Write a program to accept a 3 x 3 integer array, display it in matrix format, and print the sums of its left and right diagonals.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The weak answer</b><span>runs into trouble</span></figcaption>
  <pre>int a[][] = new int[3][3];
// input loop ...
int l = 0, r = 0;
for (int i = 0; i &lt; 3; i++) {
    l += a[i][i];
    r += a[i][3 - i];
}
System.out.println(l);
System.out.println(r);

<i># a[i][3 - i] is out of bounds</i>
<i># when i is 0: the program stops.</i>
<i># No matrix display, unlabelled</i>
<i># output, no variable description.</i></pre>
  <p class="bx-code-note">We ran this version: it stops with an ArrayIndexOutOfBoundsException on the first pass. Even with the index fixed, it skips the matrix display the question asked for and prints two bare numbers.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The full-marks answer</b><span>what the paper rewards</span></figcaption>
  <pre>import java.util.Scanner;
class Diagonal {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int[][] a = new int[3][3];
    System.out.println("Enter 9 numbers:");
    for (int i = 0; i &lt; 3; i++)
      for (int j = 0; j &lt; 3; j++)
        a[i][j] = sc.nextInt();
    int left = 0, right = 0;
    for (int i = 0; i &lt; 3; i++) {
      left += a[i][i];
      right += a[i][2 - i];
    }
    for (int i = 0; i &lt; 3; i++) {
      for (int j = 0; j &lt; 3; j++)
        System.out.print(a[i][j] + "\\t");
      System.out.println();
    }
    System.out.println("Left diagonal sum = " + left);
    System.out.println("Right diagonal sum = " + right);
  }
}</pre>
  <p class="bx-code-note">Input 2 7 6 1 8 3 4 5 9 prints the matrix, then "Left diagonal sum = 19" and "Right diagonal sum = 18". The right diagonal index is 2 - i, the last index minus the row.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Variable</th><th scope="col">Data type</th><th scope="col">Purpose</th></tr></thead>
        <tbody>
          <tr><td><code>a</code></td><td>int[][]</td><td>Stores the 3 x 3 matrix entered by the user</td></tr>
          <tr><td><code>i</code>, <code>j</code></td><td>int</td><td>Row and column counters for input, sums and display</td></tr>
          <tr><td><code>left</code></td><td>int</td><td>Sum of the left diagonal, elements where row equals column</td></tr>
          <tr><td><code>right</code></td><td>int</td><td>Sum of the right diagonal, elements where column is 2 minus row</td></tr>
          <tr><td><code>sc</code></td><td>Scanner</td><td>Reads the nine numbers from the keyboard</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      The variable description above uses the name, data type and purpose layout that the ICSE syllabus sets for the
      internal assessment, and Section B expects the same with every program. Writing it takes two minutes and protects
      marks in both halves of the subject. In the Wednesday class, programs like this are written in BlueJ, run with a
      student's own test input, and marked part by part, covering input, logic, the output format the question asked for,
      and the variable description.
    </p>
  </div>
</section>`,

`<section class="bx-section" id="mistakes">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Where do students lose marks they should keep?</p>
      <h2>Eight habits that cost marks, and the fix for each</h2>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <ul class="bx-check">
        <li><b>Using BufferedReader.</b> The paper rules it out for Section B, so use Scanner every time.</li>
        <li><b>Leaving out the variable description.</b> Write the three-column table for every program, even in practice.</li>
        <li><b>Ignoring the output format.</b> If the question shows labelled output or a matrix layout, match it exactly.</li>
        <li><b>Answering a nearby question.</b> Underline what is to be accepted and what is to be printed before writing code.</li>
      </ul>
      <ul class="bx-check">
        <li><b>Off-by-one indices.</b> The last index is length minus one, in arrays and in Strings.</li>
        <li><b>Using == to compare Strings.</b> Use equals or equalsIgnoreCase.</li>
        <li><b>Integer division surprises.</b> 7 / 2 is 3; write 7.0 / 2 when a decimal is wanted.</li>
        <li><b>Going beyond the syllabus.</b> Recursion, StringBuffer and 2D sorting earn nothing extra and add risk.</li>
      </ul>
    </div>
    <p class="bx-mt-40">
      These are the slips that turn up again and again when Java answers are marked. In the mini batch each student's
      repeated slips are pointed out in every review, so the same mistake is fixed once rather than made in every
      paper.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are these questions practised live?</p>
      <h2>A question bank needs someone to mark it</h2>
      <p class="bx-lede">A student practising alone checks whether the program ran. The examiner checks the output format, the variable description and whether the answer fits the question. Live practice teaches the second kind of checking.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Tuesday: shapes against a timer</h3><p>A set of Section A shapes is written in about a minute per mark, then each answer is run in BlueJ on the shared screen. The trace table that got it right is set beside the shortcut that got it wrong.</p></div>
      <div class="bx-card"><h3>Wednesday: one family in depth</h3><p>One program family is written in BlueJ, run with tricky test input such as an empty string, a single-digit number or a repeated value, and marked part by part. Each program then goes into the lab file with its description.</p></div>
      <div class="bx-card"><h3>Doubts settled in the moment</h3><p>Any student can stop the class, share their BlueJ window and have their code read line by line. In a group of four or five, there is time to answer every student's doubt in every class.</p></div>
    </div>
    <p class="bx-mt-40">
      From December the same shapes appear in full two-hour papers. See <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the specimen paper and mock tests page</a>,
      and for the final revision plan, <a class="bx-link" href="/icse-class-10-computer-applications-board-exam-preparation">ICSE Computer Applications board exam preparation</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise in the mini batch, or work one to one on the units that need it',
  chooseLede: 'The question shapes, the program families and the marking are identical in both formats. In India, families choose between a fixed mini batch and a private timetable; students abroad take the course one to one. Monthly billing, no admission fee, stop at any month end.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'A mini batch of four or five ICSE Class 10 students',
    'Section A shapes drilled every Tuesday',
    'All six Section B families rotated on Wednesdays',
    'Live doubts in every class'
  ],
  choosePersonal: [
    'Days and time chosen by you, in India or abroad',
    'Sessions spent only on your child\'s weakest families',
    'Output tracing drilled until it is automatic',
    'Programs set at the level your child is ready for',
    'Same teachers, same CISCE syllabus, same BlueJ setup'
  ],
  chooseAfter: 'If your child is strong in most units but keeps losing marks on strings or double dimensional arrays, a few weeks of personalised one to one is often the quickest fix. For steady practice across the whole syllabus, the mini batch gives two classes a week on a fixed plan. Fees appear in your own currency.',
  zonesH2: 'ICSE Java question practice for students abroad',
  zonesLede: 'ICSE schools in the UAE, Singapore, Indonesia and Thailand follow the same Computer Applications syllabus, so the same question shapes and program families apply. For students there, practice runs as private one to one classes in the early evening, local time.',
  zonesAfter: 'Your mentor sets the slot with you after the demo and changes it around school exams and holidays. Overseas families can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about important questions',
  faqH2: 'What families ask about ICSE Computer Applications important questions',
  faqs: [
    ['What are the most important questions for ICSE Computer Applications 2027?', 'In Section A: output tracing, loop counts, String and Character method results, wrapper class conversions, finding errors and writing single Java statements. In Section B: a class written to a specification, searching and sorting on arrays, string programs, double dimensional array sums, number-property programs and method overloading. Together they cover nearly every mark on the paper.'],
    ['Which chapter is most important in ICSE Class 10 Computer Applications?', 'String handling and arrays are the most important for Section B, because they supply at least two of the six programs and many Section A outputs. User-defined methods and constructors come next, through the class and overloading programs. Class 9 topics such as operators and loops still appear throughout Section A.'],
    ['Are output questions important in ICSE Computer Applications?', 'Yes. Section A is 40 compulsory marks, and much of it asks students to predict outputs, count loop iterations or find what a String method returns. These questions punish guessing, so we teach a step-table method and check every answer by running the code in BlueJ.'],
    ['Which programs are important for ICSE Class 10 Section B?', 'Electricity bill or interest classes written to a specification, binary and linear search, bubble and selection sort, palindrome and Pig Latin string programs, word and character counts, 2D array row, column and diagonal sums, special number checks such as palindrome, perfect and Niven numbers, and method overloading with a pattern.'],
    ['Is recursion in the ICSE 2027 Computer Applications syllabus?', 'No. The 2027 syllabus does not include recursion. It also limits sorting and searching to single dimensional arrays, and covers double dimensional arrays only for input, row, column and diagonal sums, and display. Practising outside the syllabus wastes time in the board year.'],
    ['Can we use BufferedReader in ICSE Section B?', 'No. The specimen paper says BufferedReader and DataInputStream should not be used in Section B programs. Use the Scanner class for input, as the specimen questions themselves ask.'],
    ['Is the variable description compulsory?', 'Section B asks for programs written with variable descriptions or mnemonic codes so the logic is clear, and the internal assessment marks the variable description as one of its four criteria, out of ten. Leaving it out risks marks in both halves of the subject, so our students write one for every program.'],
    ['Do you give a list of important questions or teach them?', 'Both. Students get the shapes and program families unit by unit, but the value is in the live practice: questions written against a timer, outputs checked in BlueJ, programs marked part by part like the board, and doubts answered on the shared screen in every class.'],
    ['Can students abroad practise these questions with you?', 'Yes, one to one. ICSE schools in the UAE, Singapore, Indonesia and Thailand follow the same syllabus. Outside India we teach Computer Applications personalised one to one, at a local time after school, with the same question practice, programs and marking.'],
    ['Is question practice charged separately?', 'No. Question practice, program families and mock papers are part of ordinary teaching, included in the monthly fee for the mini batch or personalised one to one, shown on this page in your own currency. There is no admission fee, and the first class is a free demo.']
  ],
  startH2: 'Try a free live question-practice class',
  startHtml: `        <p>In the free demo your child traces a few Section A outputs against a timer and checks them in BlueJ, then writes part of a Section B program that is marked part by part, with doubts answered live. Afterwards the mentor tells you honestly which units and program families need the most work, and whether the mini batch or personalised one to one suits your child.</p>
        <p>Prefer to begin with the course? Read about <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a> or <a class="bx-link" href="/icse-class-10-bluej-java-coaching">BlueJ Java coaching</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Important questions 2027'
};
