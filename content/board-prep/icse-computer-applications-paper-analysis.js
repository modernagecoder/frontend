// ICSE Class 10 Computer Applications: paper analysis and answer key, a fixed
// URL that is rewritten after each board paper. Intent: "icse computer
// applications answer key", "icse computer paper analysis", "icse computer
// applications paper solution", "icse computer 2027 answer key".
// Distinct from ic01 (previous year papers 2023 to 2026, Section B tagged by
// family across four years, six original practice programs): this page covers
// ONE paper, the March 2026 board paper, in depth: every Section A item
// described in our own words with its answer and the trap, a Section B check
// table of tested inputs and outputs, our own solutions to two 2026 Section B
// questions, difficulty notes per question, and what the page adds on the 2027
// exam day. No CISCE paper is reproduced. The 2026 paper's contents were
// checked on 2026-11-06 against a solved copy of the paper (KnowledgeBoat,
// "Solved 2026 Question Paper ICSE Class 10 Computer Applications") and against
// the Section B listing already verified for ic01. The 2027 ICSE timetable was
// NOT published on cisce.org as of 2026-11-06 (third-party trackers say
// "expected November"), so no 2027 date is stated. The exact 2026 date is
// reported inconsistently by third-party timetables, so the page says "March
// 2026" only. Every Java answer on this page (each Section A output and
// expression, both Section B programs and every row of the Section B check
// table) was compiled with javac 21 (OpenJDK 21.0.12) and run with java 21 on
// 2026-11-06 from scratch files outside the repo; each output is pasted from
// that run. Mark-number examples were also listed with python3.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-paper-analysis',
  code: 'ic28',
  board: 'icse',
  themeColor: '#5A4A2E',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Applications Answer Key and Paper Analysis',
  description: 'ICSE Computer Applications answer key and paper analysis: the 2026 paper section by section, every answer run in Java, difficulty notes, and the 2027 plan.',
  ogTitle: 'ICSE Computer Applications Answer Key, 2026 Paper Analysed',
  ogDesc: 'The 2026 ICSE Computer Applications board paper described section by section in our own words, a Section A answer key with the trap behind each item, tested outputs for every Section B program, difficulty notes, and what this page adds after the 2027 paper.',
  twDesc: 'ICSE Computer Applications answer key and analysis of the 2026 paper, every answer run in Java, plus the 2027 exam day plan.',
  headline: 'ICSE Computer Applications Answer Key and Paper Analysis: the 2026 Paper Section by Section, and the 2027 Exam Day Plan',
  courseName: 'ICSE Class 10 Computer Applications (Java) Board Paper Review, Live Online',
  courseDesc: 'Live online review of the latest ICSE Class 10 Computer Applications board paper for students sitting the 2027 examination: every Section A item answered and traced, every Section B program written in BlueJ and tested with edge inputs, difficulty discussed question by question, then the same paper sat again under time, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Paper analysis',
  navLinks: [['#section-a', 'Section A key'], ['#section-b', 'Section B key'], ['#difficulty', 'Difficulty'], ['#exam-day', '2027 exam day'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Paper analysis and answer key']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Answer key and paper analysis',
  h1: 'ICSE Computer Applications answer key and paper analysis, from the 2026 paper to exam day 2027.',
  lede: 'This ICSE Computer Applications answer key lives at one address and is rewritten after every board paper. Right now it covers the March 2026 paper: each Section A item described in our own words with its answer and the trap it set, tested outputs for all six Section B programs, and our honest reading of which questions were easy and which cost marks. Every answer was run in Java 21 before it went on the page. After the 2027 paper, the same page will carry that paper.',
  heroNote: 'Live online &middot; 30 Section A answers explained &middot; 6 Section B programs tested &middot; every answer run in Java &middot; rewritten after each board paper &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help reviewing the ICSE Computer Applications board paper and answer key.',
  timetable: {
    label: 'When the latest paper is reviewed',
    title: 'Paper review',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, Section A items retraced', '5:30', 'PM IST'],
      ['Wednesday, Section B rewritten in BlueJ', '8:00', 'PM IST'],
      ['Answers on this page run in', 'Java 21', 'before posting'],
      ['Page rewritten after', 'each', 'board paper']
    ],
    zones: '<b>In India:</b> the latest board paper is taken apart in the two evening batch classes. <b>Abroad:</b> ICSE students in the UAE, Singapore, Indonesia and Thailand go through the same review in private sessions fixed to their school day.',
    stamps: ['2026 paper &middot; analysed', '2027 &middot; on exam day']
  },
  picksH2: 'Courses that work through the latest board paper',
  picksLede: 'The ICSE Java course in which the mini batch reviews each new board paper item by item, the Class 11 and 12 Computer Science course for students continuing with Java at ISC, and the algorithms course for anyone who found Section B too easy.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where the newest board paper is answered, traced and rewritten in BlueJ in class.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC Computer Science, where the same Java grows into longer programs, recursion and data structures.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who finished Section B early and wants to learn why one search or sort beats another.' }
  ],
  capsule: 'An ICSE Computer Applications answer key is only useful if every answer has been tested. In the 2026 paper, Section A (40 compulsory marks) mostly tested single facts and short traces, with two assertion and reason items; Section B (any four of six programs at 15 marks) asked for a class with two formulas, a String array count, a sparse matrix, a digit-based number test, an overloading question and a word rebuild. Every answer here was run in Java. Modern Age Coders reviews each new paper live in a Tuesday and Wednesday mini batch in India, or in personalised one to one classes.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="section-a">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What did Section A ask in 2026, and what were the answers?</p>
      <h2>ICSE Computer Applications answer key 2026: Section A, Question 1</h2>
      <p class="bx-lede">Question 1 had twenty one-mark MCQs. Below, each item is described in our own words, not the paper's, with the correct answer and the trap the wrong options were built on. Answers that involve Java were run in Java 21.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Item</th><th scope="col">What it tested, in our words</th><th scope="col">Answer</th><th scope="col">The trap</th></tr></thead>
        <tbody>
          <tr><td>1(i)</td><td>Expanding the abbreviation for the machine that runs bytecode</td><td>Java Virtual Machine</td><td>Two options swap Virtual for Visible</td></tr>
          <tr><td>1(ii)</td><td>Which of four literals needs exactly 2 bytes</td><td>the backslash escape sequence</td><td>It looks like two characters but is one char, and a char is 2 bytes</td></tr>
          <tr><td>1(iii)</td><td>Spotting the accumulator in an update statement</td><td>the variable on both sides</td><td>An accumulator keeps adding to its own old value</td></tr>
          <tr><td>1(iv)</td><td>Which word is not an access specifier</td><td>package</td><td>Default access exists, but package is not a specifier keyword</td></tr>
          <tr><td>1(v)</td><td>Math.pow with an exponent written as an integer division</td><td class="bx-num">36.0</td><td>6/5 is 1, not 1.2, and pow returns double</td></tr>
          <tr><td>1(vi)</td><td>Turning an if-else that assigns one of two values into a ternary</td><td>condition ? true value : false value</td><td>Options swap the two values or misplace the colon</td></tr>
          <tr><td>1(vii)</td><td>Character.toUpperCase on a small letter, then plus 2</td><td class="bx-num">68</td><td>char plus int is int arithmetic: B is 66</td></tr>
          <tr><td>1(viii)</td><td>Naming the objects in two creation statements</td><td>the two reference names, case as written</td><td>The class name is not an object; one option changes the capital letter</td></tr>
          <tr><td>1(ix)</td><td>The earth turning daily while circling the sun yearly, as a Java idea</td><td>nested loop</td><td>One repetition runs inside another</td></tr>
          <tr><td>1(x)</td><td>Return type of a method that sends back YES or NO</td><td>String</td><td>boolean tempts, but the method returns words, not true or false</td></tr>
          <tr><td>1(xi)</td><td>Several calculate() methods in one calculator class</td><td>polymorphism</td><td>Overloading is a form of polymorphism, not of encapsulation</td></tr>
          <tr><td>1(xii)</td><td>Assertion and reason: an int expression with + and /, and a false claim about precedence</td><td>(A) true, (R) false</td><td>3 + 7/2 is 6 because / goes first; the reason says the opposite</td></tr>
          <tr><td>1(xiii)</td><td>Parameter type of parseInt</td><td>String</td><td>It converts text to an int, so it takes text</td></tr>
          <tr><td>1(xiv)</td><td>End index needed to pull a three-letter word out of a longer word starting at index 3</td><td class="bx-num">6</td><td>The end index is excluded, so it is one past the last letter</td></tr>
          <tr><td>1(xv)</td><td>charAt on two elements of a String array joined with a symbol</td><td class="bx-num">d*a</td><td>The String in the middle turns + into joining</td></tr>
          <tr><td>1(xvi)</td><td>Which String method can return a negative value</td><td>compareTo()</td><td>length is never negative; equals returns boolean</td></tr>
          <tr><td>1(xvii)</td><td>A picture of three numbers put in order by neighbouring swaps</td><td>bubble sort</td><td>Selection sort picks the smallest and swaps it once per pass</td></tr>
          <tr><td>1(xviii)</td><td>Bytes taken by a 5 by 5 int array of sales figures</td><td class="bx-num">100</td><td>25 elements times 4 bytes; 25 and 50 are the slips</td></tr>
          <tr><td>1(xix)</td><td>Assertion and reason: does substring change the original String?</td><td>(A) false, (R) true</td><td>Strings are immutable; substring returns a new String</td></tr>
          <tr><td>1(xx)</td><td>What must differ between overloaded constructors</td><td>parameters</td><td>Constructors have no return type to differ in</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">ICSE computer applications paper solution: Question 2, ten parts of two marks</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part</th><th scope="col">What it asked, in our words</th><th scope="col">Answer, as run</th></tr></thead>
        <tbody>
          <tr><td>2(i)</td><td>Rewrite a while loop that subtracts 2 from 10 as a for loop, then print a product</td><td><code>for ( ; b &gt; 0; b -= 2) { }</code> and the program prints <b>0</b>, because b ends at 0</td></tr>
          <tr><td>2(ii)</td><td>Evaluate an expression mixing *, % and three pre-increments or decrements with a = 7, b = 8, c = 2</td><td><b>17</b>: 56 % 3 is 2, then 2 + 8 + 7</td></tr>
          <tr><td>2(iii)</td><td>Java expression for the cube root of x plus the absolute value of y</td><td><code>Math.cbrt(x) + Math.abs(y)</code></td></tr>
          <tr><td>2(iv)</td><td>An age-above-10 eligibility check as a ternary stored in a String</td><td><code>String idStatus = age &gt; 10 ? "Eligible" : "Not eligible";</code> then print it</td></tr>
          <tr><td>2(v)</td><td>substring from index 4 of one word, then endsWith on another</td><td><b>IOUS</b> on one line, <b>false</b> on the next</td></tr>
          <tr><td>2(vi)</td><td>Output and pass count of a do-while that adds 2 from 1 while the value stays at most 6</td><td><b>3, 5, 7</b> on separate lines; the loop runs <b>3</b> times</td></tr>
          <tr><td>2(vii)</td><td>A factorial loop that always prints 0</td><td>Logical error: the product starts at 0. Start it at 1 and it prints 120</td></tr>
          <tr><td>2(viii)</td><td>Index of the largest and smallest values in a 4 by 2 array</td><td>largest at <b>[2][0]</b>, smallest at <b>[1][1]</b></td></tr>
          <tr><td>2(ix)</td><td>Two missing lines that swap two array elements without a third variable, using * and /</td><td><code>x[0] = x[0] * x[1];</code> and <code>x[1] = x[0] / x[1];</code>, printing <b>8 4</b></td></tr>
          <tr><td>2(x)</td><td>Return type of equals(), and a String method with no parameter that returns a String</td><td><b>boolean</b>; any of toUpperCase(), toLowerCase() or trim()</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Assertion and reason items and picture-based items like 1(ix) now come every year; a set of original ones is on <a class="bx-link" href="/icse-computer-applications-competency-questions">ICSE Computer Applications competency based questions</a>, and more trace practice of the 1(v) and 1(vii) kind is on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="section-b">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do I check my Section B programs against the key?</p>
      <h2>ICSE computer applications paper solution 2026: Section B checked by running it</h2>
      <p class="bx-lede">A Section B answer is right when it compiles and gives the right output for the example and for the awkward cases. The table lists inputs we ran through our own solutions to each 2026 question and the exact output, so a student can type their answer into BlueJ and compare.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Q</th><th scope="col">Task, in our words</th><th scope="col">Test input</th><th scope="col">Expected result</th><th scope="col">Where answers went wrong</th></tr></thead>
        <tbody>
          <tr><td>3</td><td>Step tracker class: calories at 0.04 per step, kilometres at 1300 steps to the km</td><td class="bx-num">6500 steps<br>1000 steps</td><td class="bx-num">260.0 cal, 5.0 km<br>40.0 cal, 0.7692307692307693 km</td><td>With an int step count, steps / 1300 is integer division and gives 0 km for 1000 steps; divide by 1300.0</td></tr>
          <tr><td>4</td><td>Store 100 job titles, then count how many match the one the user types</td><td>Manager among six sample titles, three of them Manager</td><td class="bx-num">3</td><td>Comparing Strings with == instead of equals or equalsIgnoreCase</td></tr>
          <tr><td>5</td><td>4 by 5 matrix: count zeros and non-zeros, decide if it is sparse</td><td>a matrix with 11 zeros</td><td class="bx-num">11 zeros, 9 non-zeros, sparse</td><td>Forgetting that "more zeros than non-zeros" is a strict comparison</td></tr>
          <tr><td>6</td><td>Mark number: digit squares add to an even sum ending in the number's last digit</td><td class="bx-num">28<br>358<br>135</td><td class="bx-num">68, Mark<br>98, Mark<br>35, not Mark</td><td>Destroying n in the loop, then comparing the sum with a 0 that used to be n</td></tr>
          <tr><td>7</td><td>Overloaded format: a shrinking number triangle, the total of a String's character codes, and 1 to n by formula</td><td>no argument<br>CAB<br>100</td><td class="bx-num">1 2 3 4 5 down to 5<br>198<br>5050</td><td>Returning the sum from a void version, or printing the codes instead of adding them</td></tr>
          <tr><td>8</td><td>Symbolic word: from the first consonant onwards, then the leading vowels, then TR</td><td>AIRWAYS<br>OUTPUT<br>EAU</td><td class="bx-num">RWAYSAITR<br>TPUTOUTR<br>EAUTR</td><td>Not handling a word that is all vowels, which crashes or prints nothing</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Two of the six, written our way. Neither is the board's model answer; both are the kind of complete program that earns full marks.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MarkCheck.java</b><span>2026 Question 6 shape</span></figcaption>
  <pre>import java.util.Scanner;
class MarkCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int t = n, sq = 0;
        while (t &gt; 0) {
            int d = t % 10;
            sq = sq + d * d;
            t = t / 10;
        }
        boolean even = sq % 2 == 0;
        boolean sameEnd = sq % 10 == n % 10;
        System.out.println("Sum of squares = " + sq);
        if (even &amp;&amp; sameEnd)
            System.out.println(n + " is a Mark number");
        else
            System.out.println(n + " is not a Mark number");
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Three runs</b><span>output</span></figcaption>
  <pre>Sum of squares = 68
28 is a Mark number

Sum of squares = 98
358 is a Mark number

Sum of squares = 35
135 is not a Mark number</pre>
  <p class="bx-code-note">The loop works on a copy, t, so n is still whole when its last digit is compared. Naming the two conditions as booleans makes the final if read like the definition, which helps the examiner follow the logic.</p>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Symbolic.java</b><span>2026 Question 8 shape</span></figcaption>
  <pre>import java.util.Scanner;
class Symbolic {
    static boolean isVowel(char ch) {
        return "AEIOUaeiou".indexOf(ch) &gt;= 0;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String w = sc.next();
        int k = 0;
        while (k &lt; w.length() &amp;&amp; isVowel(w.charAt(k)))
            k++;
        String sym = w.substring(k) + w.substring(0, k) + "TR";
        System.out.println("Symbolic word: " + sym);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Four runs</b><span>output</span></figcaption>
  <pre>Symbolic word: RWAYSAITR
Symbolic word: TPUTOUTR
Symbolic word: EAUTR
Symbolic word: STRENGTHTR</pre>
  <p class="bx-code-note">k counts the leading vowels and stops at the first consonant. The test k &lt; w.length() comes first, so a word of only vowels stops safely at the end; substring(k) is then empty and the word is simply followed by TR. A word that starts with a consonant has k = 0 and is unchanged before TR.</p>
</figure>
    </div>
    <p class="bx-mt-40">The digit loop in Question 6 is the same template behind every number check on <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java</a>, and the zero count in Question 5 is one of the standard tasks on <a class="bx-link" href="/icse-class-10-2d-array-programs">ICSE Class 10 2D array programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="difficulty">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Was the 2026 paper easy or hard?</p>
      <h2>ICSE computer paper analysis: how difficult was each part of the 2026 paper?</h2>
      <p class="bx-lede">Our reading: a fair, mostly direct paper. A student who had written the standard programs in BlueJ through the year could finish it with time to check. Marks were lost to small type and index slips, not to unfamiliar questions. This is our teachers' judgement from working the paper, not a statistic.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part</th><th scope="col">Our difficulty rating</th><th scope="col">Why</th><th scope="col">Time we would budget</th></tr></thead>
        <tbody>
          <tr><td>Question 1, recall items</td><td>Easy</td><td>JVM, access specifiers, parseInt, compareTo and constructor overloading are straight definitions</td><td class="bx-num">5 min</td></tr>
          <tr><td>Question 1, trace items</td><td>Moderate</td><td>The pow exponent, the char plus int, the substring end index and the 2D array size each hide one rule</td><td class="bx-num">10 min</td></tr>
          <tr><td>Question 1, the two assertion and reason items</td><td>Moderate</td><td>Each statement must be judged on its own first; the precedence item rewards knowing why 6 is right</td><td class="bx-num">3 min</td></tr>
          <tr><td>Question 2</td><td>Easy to moderate</td><td>The do-while count, the swap without a third variable and the factorial with a zero start are classic shapes</td><td class="bx-num">20 min</td></tr>
          <tr><td>Section B, Questions 3 and 7</td><td>Easy</td><td>A two-formula class and a three-way overload, both close to textbook exercises</td><td class="bx-num">15 min each</td></tr>
          <tr><td>Section B, Questions 4, 5 and 6</td><td>Easy to moderate</td><td>Short single loops or a double loop; the risks are String comparison and keeping the original number</td><td class="bx-num">15 min each</td></tr>
          <tr><td>Section B, Question 8</td><td>Moderate</td><td>The only rebuild-a-word task; finding the first consonant and joining the pieces in the right order needs care</td><td class="bx-num">20 min</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>What changed from 2025</h3><p>Question 3 used two fixed formulas instead of a slab bill, and no sorting question was set for the second year running. Two assertion and reason items again sat in Question 1.</p></div>
      <div class="bx-card"><h3>The quiet trap of the paper</h3><p>Question 3 stored steps as an int. Dividing it by 1300 gives a whole number of kilometres and silently loses the fraction. Writing 1300.0 fixes it, and it is exactly the integer division rule tested in Section A.</p></div>
      <div class="bx-card"><h3>The best choice of four</h3><p>For most students, Questions 3, 5, 6 and 7 were the safest four: each has one clear loop or formula and a short output. Question 8 suited students confident with substring and character tests.</p></div>
    </div>
    <p class="bx-mt-40">How the 2026 Section B sits beside 2023, 2024 and 2025, family by family, is on <a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">ICSE Computer Applications previous year papers solved</a>; this page stays with the latest paper only.</p>
  </div>
</section>`,

`<section class="bx-section" id="exam-day">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. When will the 2027 answer key be here?</p>
      <h2>ICSE computer 2027 answer key: what this page adds on exam day</h2>
      <p class="bx-lede">After the 2027 Computer Applications paper, this same page is rewritten for it. The 2027 date is not known yet: as of 6 November 2026 CISCE had not published the ICSE 2027 timetable on cisce.org. For comparison, the 2026 timetable was released on 13 November 2025, and the 2026 ICSE examinations ran from 17 February to 30 March 2026.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>The date, once CISCE publishes it</h4><p>When the official 2027 timetable appears on cisce.org, the Computer Applications date goes at the top of this page. Until then we print no date, because the guesses circulating online do not agree.</p></li>
      <li class="bx-step"><h4>Section A, item by item</h4><p>Each of the twenty MCQs and ten short parts is described in our words with its answer and the rule it tested. Anything with code is typed into Java and run before it is posted.</p></li>
      <li class="bx-step"><h4>Section B, tested outputs</h4><p>For all six programs we post test inputs and the exact outputs our own solutions give, including the edge cases, so students can check their memory of what they wrote.</p></li>
      <li class="bx-step"><h4>Difficulty and changes</h4><p>A rating for each part, and a plain note on anything new: a different count of assertion and reason items, a new program family, or a change in layout.</p></li>
      <li class="bx-step"><h4>The 2026 analysis moves, not disappears</h4><p>The 2026 tables stay available lower on the page, so the two papers can be compared side by side.</p></li>
    </ol>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>How to read any unofficial answer key</h3>
        <ul class="bx-check">
          <li>Keys published after the paper, ours included, are unofficial; marks are decided by the board's examiners.</li>
          <li>For a Section B program, a different correct method still earns marks. Compare outputs, not lines of code.</li>
          <li>If a key and your trace disagree on an output, run the code. The compiler settles it.</li>
        </ul>
      </div>
      <div>
        <h3>What to do before the 2027 paper</h3>
        <p>Sit the 2026 paper complete in two hours, mark it with the tables above, and list every item lost by type: integer division, String comparison, an index off by one. Then sit the current specimen paper and the mock tests on <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the ICSE specimen paper and mock tests page</a>. The layout of the 2027 paper is on <a class="bx-link" href="/icse-class-10-computer-applications-exam-date-and-paper-pattern">ICSE Computer Applications exam date and paper pattern</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is the latest paper used in the live classes?</p>
      <h2>Taking the newest board paper apart in the mini batch</h2>
      <p class="bx-lede">A fresh board paper is the closest thing to the real exam a student can practise. The batch does not just read the key; it sits the paper, marks it and fixes each lost mark.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Sat first, discussed later</h3><p>Students write the paper under a two-hour timer before seeing any answer. Their own score is the starting point for everything that follows.</p></div>
      <div class="bx-card"><h3>Tuesday: Section A traced aloud</h3><p>At the 5:30 PM IST class, every Question 1 and 2 item a student missed is traced on a shared screen until the rule behind it is clear, then a fresh item on the same rule is tried.</p></div>
      <div class="bx-card"><h3>Wednesday: Section B rewritten</h3><p>At the 8:00 PM IST class, students type their programs into BlueJ and feed in the test inputs from the table above. Wrong outputs are fixed while the teacher watches.</p></div>
      <div class="bx-card"><h3>Worksheets on the weak spots</h3><p>Each student leaves with a short worksheet built on the items they lost, checked at the next class.</p></div>
      <div class="bx-card"><h3>Doubt time every week</h3><p>The end of each class is kept for questions from school work, so the paper review never crowds out the syllabus.</p></div>
      <div class="bx-card"><h3>Full mocks before the exam</h3><p>From January, complete papers are sat under time and marked like the board, the latest paper among them.</p></div>
    </div>
    <p class="bx-mt-40">A batch never has more than six students, so every paper gets read by the teacher. Abroad, the same review runs one to one.</p>
  </div>
</section>`
  ],
  chooseH2: 'Review the board paper in the mini batch, or one to one',
  chooseLede: 'The answer key, the test inputs and the Java runs are the same in both formats. In India a family can choose the Tuesday and Wednesday evening batch or private sessions; an ICSE student living abroad takes the private format. The fee is billed monthly, and there is no admission charge.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'The latest paper sat under a two-hour timer',
    'Missed Section A items traced on a shared screen',
    'Section B rerun in BlueJ with the key\'s test inputs'
  ],
  choosePersonal: [
    'Slot chosen by the family, in India or abroad',
    'Review starts from the items your child lost',
    'Programs typed and tested together in BlueJ',
    'Extra papers added where a weakness shows',
    'Same teachers, same 2027 syllabus, same key'
  ],
  chooseAfter: 'A student who scored well on the 2026 paper but lost a handful of Section A marks to type rules usually needs only a few private sessions on those rules. A student who could not finish the paper in two hours gains more from two batch classes a week until the exam. The fee appears in your local currency.',
  zonesH2: 'Board paper review for ICSE students outside India',
  zonesLede: 'ICSE schools overseas sit the same Computer Applications paper as schools in India, so the same answer key and the same review apply. Outside India, the review is taught privately at an hour that suits the student\'s own clock.',
  zonesAfter: 'The class time is settled after the free demo and can move around school exams. Families abroad can read the full arrangement on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the answer key',
  faqH2: 'What students ask about the ICSE Computer Applications answer key',
  faqs: [
    ['Where can I find the ICSE Computer Applications answer key?', 'This page carries an answer key for the 2026 board paper: every Section A item described in our own words with its answer and trap, and tested outputs for all six Section B programs. Each answer was run in Java 21. The page is rewritten after the 2027 paper, at the same address.'],
    ['Does CISCE publish an official answer key for ICSE Computer Applications?', 'Keys that appear after the paper, including this one, come from teachers and publishers rather than from a board release, so treat them as unofficial. The board\'s examiners decide the marks. For a program, any correct method earns credit, so compare your outputs with the key rather than your exact lines of code.'],
    ['When is the ICSE Computer Applications exam in 2027?', 'Not announced yet. As of 6 November 2026, CISCE had not published the ICSE 2027 timetable on cisce.org. The 2026 timetable came out on 13 November 2025 and the 2026 examinations ran from 17 February to 30 March 2026. This page will show the 2027 date once the official timetable is out.'],
    ['Was the ICSE Computer Applications 2026 paper easy?', 'In our teachers\' view it was fair and mostly direct. Section A tested single rules and short traces, and Section B asked for familiar programs: a class with formulas, a String array count, a sparse matrix, a number check, an overloading question and a word rebuild. Most lost marks came from integer division and String comparison slips.'],
    ['What came in Section B of the ICSE computer paper 2026?', 'In our words: a step tracker class turning steps into calories and kilometres, a count of matching job titles in a String array, a sparse matrix check on a 4 by 5 array, a Mark number test using squared digits, an overloaded method with a number triangle, a character code total and a formula sum, and a word rebuilt from its first consonant.'],
    ['How many assertion and reason questions were in the 2026 ICSE Computer Applications paper?', 'Two, both in Question 1. One paired a true claim about an integer expression with a false claim about operator precedence; the other paired a false claim that substring changes the original String with a true description of what substring does. Judge each statement alone before deciding whether one explains the other.'],
    ['How do I check my Section B answer if I cannot remember my exact code?', 'Rewrite the program in BlueJ the way you wrote it in the exam, then feed in the test inputs in the Section B table on this page. If your outputs match, including the edge cases such as a word made only of vowels, your logic was right even if your variable names differ.'],
    ['Why does 1000 steps give 0 km in some Question 3 answers?', 'Because the step count was an int, and an int divided by the int 1300 is integer division, which drops the fraction. Dividing by 1300.0, or casting to double first, gives about 0.769 km. It is the same rule Section A tested with the pow exponent written as 6/5.'],
    ['Will ICSE Computer Applications 2027 follow the same pattern as 2026?', 'The 2027 syllabus keeps the same structure: a two-hour, 100-mark paper with Section A of 40 compulsory marks and Section B of six programs, any four at 15 marks each, plus internal assessment. Whether the item styles change is only known on the day, which is why this page is rewritten after the paper.'],
    ['Do you go through the board paper in your live classes?', 'Yes. In the mini batch the latest paper is sat under a two-hour timer, missed Section A items are traced on a shared screen on Tuesday, and Section B programs are rerun in BlueJ with test inputs on Wednesday. Families can also choose personalised one to one classes at a time that suits them.']
  ],
  startH2: 'Try a free live paper-review class',
  startHtml: `        <p>In the free demo your child answers a timed block of items from the latest board paper, then rewrites one Section B program in BlueJ and checks it against the test inputs with the mentor. You then hear which marks would have been lost, why, and whether the mini batch or one to one suits your child.</p>
        <p>Looking for the whole syllabus first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Answer key and paper analysis'
};
