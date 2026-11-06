// ICSE Class 10 Computer Applications (Java): chapter-wise revision notes, one
// page per chapter, in the order of the CISCE 2027 syllabus (Revision of Class
// IX, Class as the basis of all computation, User-defined methods,
// Constructors, Library classes, Encapsulation, Arrays, String handling).
// Intent: "icse computer applications notes", "icse class 10 java notes",
// "computer applications revision notes icse", "chapter wise notes icse
// computer". Distinct from the topic pages (ic21 constructors, ic22 wrappers,
// ic24 encapsulation, ic12 methods): this page is the condensed note for every
// chapter on one sheet each, and links down to the topic page for depth.
// All notes are original; no textbook text is reproduced. Inside the 2027
// syllabus: no recursion. Every Java fragment on this page was compiled with
// javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from a scratch
// file outside the repo; each printed output below is pasted from that run.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-notes',
  code: 'ic17',
  board: 'icse',
  themeColor: '#2E5566',
  title: 'ICSE Computer Applications Notes, Chapter-wise (2027)',
  description: 'ICSE Computer Applications notes for 2027: one original page per chapter in syllabus order, with the terms, rules, Java examples run in BlueJ and exam slips.',
  ogTitle: 'ICSE Computer Applications Notes, One Page per Chapter',
  ogDesc: 'Original chapter-wise revision notes for ICSE Class 10 Computer Applications, in the order of the 2027 syllabus: each chapter as one sheet of terms, rules, a Java example run in Java 21, and the slip that costs marks.',
  twDesc: 'Chapter-wise ICSE Class 10 Java notes for 2027: one sheet per chapter, terms, rules, a run Java example and the common slip.',
  headline: 'ICSE Computer Applications Notes for 2027: One Revision Sheet for Each of the Eight Chapters',
  courseName: 'ICSE Class 10 Computer Applications (Java) Chapter-wise Revision, Live Online',
  courseDesc: 'Live online revision of all eight chapters of ICSE Class 10 Computer Applications for the 2027 examination, in syllabus order: Class IX revision, class as the basis of all computation, user-defined methods, constructors, library classes, encapsulation, arrays and string handling, each chapter closed with a timed Section A set and a Section B program written in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Notes',
  navLinks: [['#order', 'Chapter order'], ['#ch-basics', 'Chapters 1 and 2'], ['#ch-methods', 'Chapters 3 to 6'], ['#ch-data', 'Arrays and strings'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Chapter-wise notes']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Revision notes 2027',
  h1: 'ICSE Computer Applications notes: one revision sheet for every chapter.',
  lede: 'These ICSE Computer Applications notes cover the eight Class 10 chapters in the order the 2027 syllabus lists them. Each chapter is one sheet: the terms you must define in a line, the rules Java follows, a short program that was compiled and run in Java 21, and the slip that most often costs a mark. Use them after a chapter is taught, not instead of it. In our live mini batch every chapter ends with a timed Section A set and one Section B program built from the same sheet.',
  heroNote: 'Live online &middot; 8 chapters, 8 sheets &middot; 2027 syllabus order &middot; Java examples run in BlueJ &middot; Section A and B practice weekly &middot; first class free',
  waText: 'Hello Modern Age Coders. I want chapter-wise revision for ICSE Class 10 Computer Applications.',
  timetable: {
    label: 'When each chapter is revised',
    title: 'Chapter revision',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, the chapter sheet and a timed set', '5:30', 'PM IST'],
      ['Wednesday, a program from that chapter', '8:00', 'PM IST'],
      ['Chapters in the 2027 syllabus', '8', 'in order'],
      ['Notes checked against', 'BlueJ', 'live']
    ],
    zones: '<b>In India:</b> the mini batch takes one chapter at a time at these two times. <b>Outside India:</b> the same chapter sheets are taught one to one, at an after-school hour in your own time zone, for ICSE students in the UAE, Singapore and elsewhere.',
    stamps: ['8 chapters &middot; 1 sheet each', 'Run, not guessed']
  },
  picksH2: 'Courses that turn these notes into marks',
  picksLede: 'The ICSE Java course where each sheet on this page is taught, practised and tested live, the Class 11 and 12 Computer Science course for students heading to ISC, and the data structures course for the student who finishes the arrays chapter wanting more.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'All eight chapters in syllabus order in a mini batch of up to six, with a Section A set and a BlueJ program closing each chapter.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where classes, arrays and strings are the starting point rather than the end.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who liked binary search and sorting and wants to see why some methods are faster than others.' }
  ],
  capsule: 'ICSE Computer Applications notes for Class 10 should follow the eight chapters of the 2027 syllabus in order: Revision of Class IX, Class as the basis of all computation, User-defined methods, Constructors, Library classes, Encapsulation, Arrays and String handling. Good notes give each chapter one sheet: one-line definitions for Section A, the rules Java applies, one short tested program, and the common slip. The paper is two hours for 100 marks, 40 compulsory in Section A and four of six 15-mark programs in Section B. Modern Age Coders revises every chapter live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="order">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are the chapters, and in what order?</p>
      <h2>What are the chapters in ICSE Computer Applications Class 10?</h2>
      <p class="bx-lede">There are eight, and the 2027 syllabus lists them in this order. The order matters for revision: every chapter leans on the one before it, so a gap in chapter 3 shows up again in chapters 4, 7 and 8.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Chapter</th><th scope="col">What the sheet holds</th><th scope="col">Where it scores</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>Revision of Class IX syllabus</td><td>OOP terms, data types, operators, input, Math methods, if, switch, loops</td><td>Most of the Section A outputs and loop counts</td></tr>
          <tr><td class="bx-num">2</td><td>Class as the basis of all computation</td><td>Class, object, state, behaviour, primitive and composite types</td><td>Definitions and one-mark MCQs</td></tr>
          <tr><td class="bx-num">3</td><td>User-defined methods</td><td>Prototype, signature, parameters, return, pure and impure, overloading</td><td>Section B overloading programs</td></tr>
          <tr><td class="bx-num">4</td><td>Constructors</td><td>Default and parameterised constructors, constructor against method</td><td>Class skeleton programs, difference questions</td></tr>
          <tr><td class="bx-num">5</td><td>Library classes</td><td>Wrapper classes, parse and valueOf, Character tests, autoboxing</td><td>Two-mark outputs, string and menu programs</td></tr>
          <tr><td class="bx-num">6</td><td>Encapsulation</td><td>Access specifiers, scope of variables</td><td>Definitions and "will it compile" questions</td></tr>
          <tr><td class="bx-num">7</td><td>Arrays</td><td>1D and 2D arrays, linear and binary search, bubble and selection sort</td><td>A Section B program in almost every paper</td></tr>
          <tr><td class="bx-num">8</td><td>String handling</td><td>String methods, character-by-character processing</td><td>The other near-certain Section B program</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Recursion is not in the 2027 Computer Applications syllabus, so it has no sheet here. Each unit is explained with its marks pattern on <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus page</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="ch-basics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What should the first two sheets say?</p>
      <h2>ICSE Class 10 Java notes: chapters 1 and 2</h2>
      <p class="bx-lede">Chapter 1 is the Class 9 course in compressed form, and the paper treats it as fully examinable. Chapter 2 then names the idea everything else is built on: a class is a blueprint, and an object is one thing made from it.</p>
    </div>
    <h3>Chapter 1: Revision of Class IX syllabus</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 1 example</b><span>ternary, loop, digits</span></figcaption>
  <pre>int marks = 87;
char grade = marks &gt;= 90 ? 'A'
           : marks &gt;= 75 ? 'B' : 'C';
int sum = 0;
for (int d = 4721; d &gt; 0; d /= 10)
    sum += d % 10;
System.out.println(grade + " " + sum);

<i>// Output: B 14</i></pre>
  <p class="bx-code-note">Two Class 9 habits in seven lines: a nested ternary read right to left, and a digit loop that peels the last digit with % 10 and drops it with / 10.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Data types</td><td>Eight primitives: byte, short, int, long, float, double, char, boolean. char is 2 bytes in Unicode.</td></tr>
            <tr><td>Type conversion</td><td>Implicit widens on its own (int to double); explicit needs a cast and may lose data.</td></tr>
            <tr><td>Precedence</td><td>Unary, then * / %, then + -, then relational, then &amp;&amp;, then ||, then ?:, then assignment.</td></tr>
            <tr><td>Input</td><td>Scanner: nextInt, nextDouble, next for one word, nextLine for a whole line.</td></tr>
            <tr><td>Math methods</td><td>sqrt, cbrt, pow, ceil, floor return double; round of a double returns long.</td></tr>
            <tr><td>Loops</td><td>for and while test first (entry controlled); do-while runs once before testing (exit controlled).</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The slip:</b> writing 4 for Math.sqrt(16). The answer is 4.0, and the missing decimal is marked wrong. Students whose Class 9 base is thin should start with <a class="bx-link" href="/icse-class-9-java-revision-for-class-10">the Class 9 Java revision for Class 10</a> before anything else.</p>
    <h3 class="bx-mt-40">Chapter 2: Class as the basis of all computation</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 2 example</b><span>state and behaviour</span></figcaption>
  <pre>class Lamp {
    boolean on;          // state
    int watts;           // state
    void toggle() {      // behaviour
        on = !on;
    }
}
// in main:
Lamp desk = new Lamp();
desk.watts = 9;
desk.toggle();
System.out.println(desk.on + " " + desk.watts);

<i>// Output: true 9</i></pre>
  <p class="bx-code-note">The object starts with default values (false and 0). One call to toggle changes its state.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Class</td><td>A user-defined data type that describes what its objects hold and do.</td></tr>
            <tr><td>Object</td><td>An instance of a class, made with new, with its own copy of the instance variables.</td></tr>
            <tr><td>State</td><td>The values held in the data members at a moment.</td></tr>
            <tr><td>Behaviour</td><td>What the methods let the object do.</td></tr>
            <tr><td>Primitive type</td><td>Built in, holds one value, fixed size: int, char, double and the rest.</td></tr>
            <tr><td>Composite type</td><td>Built from other types: a class, an array, a String.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The slip:</b> calling a class an object. The class is the plan; each object made from it is separate, so changing desk.watts changes nothing in any other Lamp.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="ch-methods">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What do the middle four chapters need on paper?</p>
      <h2>Computer Applications revision notes ICSE: methods, constructors, library classes, encapsulation</h2>
      <p class="bx-lede">These four chapters are where Section A finds its definitions and where Section B finds its class skeletons. Each sheet below is short because the terms are precise: learn the exact wording and the marks follow.</p>
    </div>
    <h3>Chapter 3: User-defined methods</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 3 example</b><span>overloading</span></figcaption>
  <pre>static int area(int s) { return s * s; }
static int area(int l, int b) { return l * b; }
static double area(double r) { return 3.14 * r * r; }
// in main:
System.out.println(area(5) + " " + area(4, 6)
                   + " " + area(2.0));

<i>// Output: 25 24 12.56</i></pre>
  <p class="bx-code-note">Java picks the version whose parameter list matches the call. The return type alone can never tell two versions apart.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Prototype</td><td>The first line of a method: access, return type, name, parameter list.</td></tr>
            <tr><td>Signature</td><td>The name with the number, type and order of the parameters.</td></tr>
            <tr><td>Actual and formal</td><td>Actual parameters are in the call; formal parameters are in the definition.</td></tr>
            <tr><td>Pure method</td><td>Returns a value and changes nothing outside itself.</td></tr>
            <tr><td>Impure method</td><td>Changes the object's data or an array it was given.</td></tr>
            <tr><td>Overloading</td><td>Same name, different parameter lists, in one class.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Overloading programs in board format are worked on <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading</a>.</p>
    <h3 class="bx-mt-40">Chapter 4: Constructors</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 4 example</b><span>two constructors</span></figcaption>
  <pre>class Ticket {
    String name;
    int seats;
    Ticket() { name = "Guest"; seats = 1; }
    Ticket(String n, int s) { name = n; seats = s; }
}
// in main:
Ticket t1 = new Ticket();
Ticket t2 = new Ticket("Asha", 3);
System.out.println(t1.name + " " + t1.seats + " "
                   + t2.name + " " + t2.seats);

<i>// Output: Guest 1 Asha 3</i></pre>
  <p class="bx-code-note">Two constructors in one class is constructor overloading. Which one runs depends on the arguments after new.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Constructor</td><td>A member with the class's name and no return type, run automatically when an object is made.</td></tr>
            <tr><td>Default constructor</td><td>Takes no parameters; Java supplies one only if you write none.</td></tr>
            <tr><td>Parameterised</td><td>Takes parameters and sets the data members from them.</td></tr>
            <tr><td>Against a method</td><td>No return type, same name as class, called by new; a method is called by name.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The slip:</b> writing void before a constructor. It then becomes an ordinary method and never runs on new. More on <a class="bx-link" href="/icse-class-10-constructors-questions">ICSE constructor questions</a>.</p>
    <h3 class="bx-mt-40">Chapter 5: Library classes</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 5 example</b><span>wrappers and Character</span></figcaption>
  <pre>String s = "42";
int n = Integer.parseInt(s) + 8;
Integer boxed = n;              // autoboxing
char c = 'g';
System.out.println(n + " " + Character.toUpperCase(c)
    + " " + Character.isDigit('7') + " " + (boxed + 1));

<i>// Output: 50 G true 51</i></pre>
  <p class="bx-code-note">boxed + 1 unboxes the Integer back to an int, adds, and prints 51.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Wrapper class</td><td>A class that holds one primitive as an object: Integer, Double, Character, Boolean and the rest.</td></tr>
            <tr><td>Autoboxing</td><td>Java turns a primitive into its wrapper object on its own.</td></tr>
            <tr><td>Unboxing</td><td>Java takes the primitive back out of the wrapper on its own.</td></tr>
            <tr><td>parseInt</td><td>Turns a String of digits into an int; "4a" throws an error at run time.</td></tr>
            <tr><td>Character tests</td><td>isLetter, isDigit, isLetterOrDigit, isUpperCase, isLowerCase, isWhitespace.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Every wrapper method in the syllabus, with its return type, is on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.</p>
    <h3 class="bx-mt-40">Chapter 6: Encapsulation</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 6 example</b><span>private data, public door</span></figcaption>
  <pre>class Account {
    private double balance;
    public void deposit(double amt) {
        if (amt &gt; 0) balance += amt;
    }
    public double getBalance() { return balance; }
}
// in main:
Account acc = new Account();
acc.deposit(500);
acc.deposit(-200);
System.out.println(acc.getBalance());

<i>// Output: 500.0</i></pre>
  <p class="bx-code-note">The negative deposit is refused by the method, and no outside code can write to balance directly. That guard is the point of encapsulation.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Encapsulation</td><td>Wrapping data and the methods that use it into one class, and hiding the data.</td></tr>
            <tr><td>private</td><td>Visible only inside its own class.</td></tr>
            <tr><td>default (no keyword)</td><td>Visible inside the same package.</td></tr>
            <tr><td>protected</td><td>Same package, plus subclasses in other packages.</td></tr>
            <tr><td>public</td><td>Visible everywhere.</td></tr>
            <tr><td>Scope</td><td>Local: inside its block. Instance: one per object. Class (static): one shared by all objects.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Scope questions with worked examples are on <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="ch-data">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What goes on the last two sheets?</p>
      <h2>Chapter wise notes ICSE computer: arrays and string handling</h2>
      <p class="bx-lede">Arrays and strings are revised last because they use everything before them, and because together they supply the bulk of Section B. Both chapters come down to one skill: walking through a sequence one index at a time without stepping off the end.</p>
    </div>
    <h3>Chapter 7: Arrays</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 7 example</b><span>binary search</span></figcaption>
  <pre>int[] a = {3, 8, 15, 21, 30, 42};
int key = 21, lo = 0, hi = a.length - 1, pos = -1;
while (lo &lt;= hi) {
    int mid = (lo + hi) / 2;
    if (a[mid] == key) { pos = mid; break; }
    else if (a[mid] &lt; key) lo = mid + 1;
    else hi = mid - 1;
}
System.out.println(pos);

<i>// Output: 3</i></pre>
  <p class="bx-code-note">mid is 2 (15, too small), then 4 (30, too big), then 3 (found). Three checks instead of four, and the gap grows with the array.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>Array</td><td>A set of values of one type under one name, reached by index from 0 to length - 1.</td></tr>
            <tr><td>length</td><td>A field, no brackets: a.length. For a 2D array m, m.length is rows and m[0].length is columns.</td></tr>
            <tr><td>Linear search</td><td>Checks each element in turn; works on any array.</td></tr>
            <tr><td>Binary search</td><td>Halves a sorted array each step; needs the array in order.</td></tr>
            <tr><td>Bubble sort</td><td>Swaps neighbours that are out of order; the largest settles at the end each pass.</td></tr>
            <tr><td>Selection sort</td><td>Finds the smallest of the unsorted part and swaps it into place once per pass.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The slip:</b> a loop that runs while i &lt;= a.length. The last index is a.length - 1, and the extra pass throws ArrayIndexOutOfBoundsException. Full search and sort programs are on <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">sorting and searching programs</a>.</p>
    <h3 class="bx-mt-40">Chapter 8: String handling</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sheet 8 example</b><span>reverse and compare</span></figcaption>
  <pre>String w = "Level";
String r = "";
for (int i = w.length() - 1; i &gt;= 0; i--)
    r += w.charAt(i);
System.out.println(r + " " + r.equalsIgnoreCase(w)
                   + " " + r.equals(w));

<i>// Output: leveL true false</i></pre>
  <p class="bx-code-note">The reverse differs only in case, so it is a palindrome when case is ignored and not one when case counts. Read the question for which it wants.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Method</th><th scope="col">The one-line note</th></tr></thead>
          <tbody>
            <tr><td>length(), charAt(i)</td><td>Number of characters; the character at index i.</td></tr>
            <tr><td>indexOf, lastIndexOf</td><td>First or last position of a character or substring, -1 if absent.</td></tr>
            <tr><td>substring(a, b)</td><td>Characters from a up to, not including, b.</td></tr>
            <tr><td>equals, equalsIgnoreCase</td><td>Compare contents; return boolean.</td></tr>
            <tr><td>compareTo</td><td>Returns 0, a negative or a positive int by dictionary order.</td></tr>
            <tr><td>toUpperCase, trim, replace, concat</td><td>Return a new String; the original never changes.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The slip:</b> comparing two Strings with ==, which checks whether they are the same object, not the same text. Word, vowel and palindrome programs are worked on <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="use-notes">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How should a student revise from notes?</p>
      <h2>How to use these ICSE Computer Applications notes before the 2027 paper</h2>
      <p class="bx-lede">Read a sheet, close it, and write it back from memory. Notes that are only read feel familiar on the day and then fail under the clock; notes that are rewritten stay.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>One sheet per sitting</h3><p>Take one chapter, cover the right-hand column of the table, and say each definition aloud. Any you cannot say in one sentence go on a short list for the next day.</p></div>
      <div class="bx-card"><h3>Type the example, then change it</h3><p>Run each program in BlueJ, then change one value and predict the new output before running it again. That small step turns a note into an output question.</p></div>
      <div class="bx-card"><h3>Write a program from each sheet</h3><p>Chapters 3, 4, 7 and 8 each deserve one full Section B answer in your own hand, with a variable description table, before the chapter counts as revised.</p></div>
      <div class="bx-card"><h3>Mix chapters in week two</h3><p>Once all eight sheets are done, revise two unrelated chapters together. The paper never asks them in order, and switching is what the real Section A feels like.</p></div>
      <div class="bx-card"><h3>Keep the slips on one page</h3><p>Collect every "the slip" line from this page, add your own from mock tests, and read that single page the night before the exam.</p></div>
      <div class="bx-card"><h3>Test under the clock</h3><p>Two hours for 100 marks leaves about a minute a mark. Timed mock papers in the last six weeks tell you which sheet needs one more pass.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is each chapter revised in class?</p>
      <h2>How the mini batch revises one chapter a week</h2>
      <p class="bx-lede">Each sheet on this page is the summary a student should be able to write after a week of live work on that chapter, not a substitute for the week.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: the sheet, built together</h4><p>At the 5:30 PM IST class the teacher builds the chapter's sheet on screen with the group, asking each student to define a term before it is written down, then runs the example in BlueJ.</p></li>
      <li class="bx-step"><h4>A timed Section A set</h4><p>Ten short questions from that chapter only: definitions, outputs, a difference, an error to find. Answers are marked on screen against the way the board credits them.</p></li>
      <li class="bx-step"><h4>Wednesday: one full program</h4><p>At the 8:00 PM IST class each student writes a Section B program from the chapter, with comments and a variable description, and the teacher reads it line by line.</p></li>
      <li class="bx-step"><h4>Doubt time before moving on</h4><p>The last part of Wednesday is kept for questions on any earlier chapter, so a gap is caught before the next chapter depends on it.</p></li>
      <li class="bx-step"><h4>Full papers from December</h4><p>When all eight chapters are done, the batch moves to complete two-hour mock papers marked like the board, and each mistake is sent back to the sheet it came from.</p></li>
    </ol>
    <p class="bx-mt-40">With no more than six students, every definition and every program gets read by the teacher, not sampled.</p>
  </div>
</section>`
  ],
  chooseH2: 'Revise the chapters in the mini batch, or one to one',
  chooseLede: 'The eight sheets, the timed sets and the BlueJ programs are the same either way. In India a family can pick the fixed Tuesday and Wednesday mini batch or a private slot; ICSE students outside India are taught one to one. Monthly billing, no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'At most six ICSE Class 10 students',
    'One chapter sheet built together each week',
    'A Section A set and a Section B program per chapter',
    'Doubt time on earlier chapters every Wednesday'
  ],
  choosePersonal: [
    'A slot the family picks, in India or abroad',
    'Weak chapters first, strong ones only checked',
    'Sheets rewritten from memory with the teacher',
    'Programs read line by line, one student only',
    'Same teachers, same 2027 syllabus order'
  ],
  chooseAfter: 'A student who has been taught every chapter but forgets definitions and slips on outputs usually needs a short run of one to one sessions on the weak sheets. A student who wants the whole syllabus revised in order, with a program every week, does better in the two batch classes. Fees appear in your own currency.',
  zonesH2: 'Chapter-wise revision for ICSE students abroad',
  zonesLede: 'ICSE schools outside India teach the same eight chapters for the same Computer Applications paper. Abroad, the chapter sheets are revised one to one in an evening slot that suits the student\'s own clock.',
  zonesAfter: 'The slot is fixed after the free demo and can shift around school exams. Families overseas can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the notes',
  faqH2: 'What students ask about ICSE Computer Applications notes',
  faqs: [
    ['How many chapters are there in ICSE Computer Applications Class 10?', 'Eight in the 2027 syllabus: Revision of Class IX syllabus, Class as the basis of all computation, User-defined methods, Constructors, Library classes, Encapsulation, Arrays and String handling. Textbooks sometimes split the first one into several smaller chapters, such as operators, input and loops, so a book may show more chapter numbers for the same syllabus.'],
    ['Which chapter is most important in ICSE Computer Applications?', 'For marks, arrays and string handling, because between them they supply most Section B programs. For understanding, the Class IX revision chapter, because Section A outputs and loop counts come from it and every program depends on it. User-defined methods and constructors come next, since class skeleton questions need both.'],
    ['Are these notes enough to score well in ICSE Computer Applications?', 'Notes are a revision tool, not the whole preparation. They help a student recall definitions and rules quickly. Marks in Section B come from writing complete programs by hand, so each sheet should be followed by at least one program written without help and then run in BlueJ to check it.'],
    ['Is recursion part of the ICSE Class 10 Computer Applications syllabus for 2027?', 'No. Recursion does not appear in the 2027 Class 10 Computer Applications syllabus, so these notes leave it out. Some older books and websites still carry it as an extra topic. For the board paper, spend that time on 2D arrays and wrapper classes, which are in.'],
    ['How do I revise Java for the ICSE board exam in one week?', 'Spend the first five days on two chapters a day using one sheet each, writing every definition from memory and one program per day. Use day six for a full timed paper and day seven for the mistakes it showed. Do not start new topics in the final week; deepen the ones you have.'],
    ['What is the difference between a class and an object in ICSE Java?', 'A class is the design that says what data and methods its objects will have. An object is one instance created from that design with new, holding its own values. One class can produce many objects, and changing the data of one object does not change any other.'],
    ['Do I need to learn definitions word for word for ICSE Computer Applications?', 'Not word for word, but the key terms must be present. A definition of encapsulation that does not mention binding data with methods and hiding the data loses marks, however well it is phrased. Learn the one-line version on each sheet and you will have the words examiners look for.'],
    ['Which Math methods are in the ICSE Class 10 syllabus?', 'The mathematical library methods from Class 9 carry into the revision chapter: Math.pow, sqrt, cbrt, ceil, floor, round, abs, max, min and random. The marks usually turn on the return type. Most of them return double, round of a double returns long, and abs, max and min follow the type they are given.'],
    ['Can I get ICSE Computer Applications notes as a PDF?', 'This page is meant to be used on screen or printed from your browser. Better still, copy each sheet by hand into your own notebook: writing it once is itself revision. The tables are short on purpose, so the whole set fits on eight sides of paper.'],
    ['Do you teach ICSE Computer Applications chapter by chapter in live classes?', 'Yes. The mini batch covers one chapter a week in syllabus order: the sheet on Tuesday at 5:30 PM IST with a timed Section A set, and a full program on Wednesday at 8:00 PM IST. Students abroad, or those whose timings clash, take the same plan one to one at a time the family chooses.']
  ],
  startH2: 'Try a free live chapter revision class',
  startHtml: `        <p>In the free demo your child picks a chapter they find hard. The mentor builds that chapter's sheet with them, asks for definitions before giving them, runs the example in BlueJ, and ends with three quick questions. You then hear plainly which chapters look secure and which need work, and whether the mini batch or one to one fits better.</p>
        <p>Want to practise first? Try <a class="bx-link" href="/icse-computer-applications-worksheets">the chapter-wise worksheets with answers</a> or <a class="bx-link" href="/icse-computer-difference-between-questions">the difference between questions</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Chapter-wise notes 2027'
};
