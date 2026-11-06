// ICSE Class 10 Computer Applications (Java): one original worksheet per
// chapter of the 2027 syllabus, eight in all, each with the answer key shown
// directly below it. Intent: "icse computer applications worksheets", "java
// worksheets class 10 icse", "practice sheets icse computer", "chapter wise
// worksheet icse java". Distinct from ic17 (notes), iiq (important questions)
// and ic02 (output questions): each worksheet is a 22-mark sheet that mirrors
// the paper's shapes (one MCQ, three two-mark parts, one 15-mark program) for
// a single chapter. All questions and programs are original. Inside the 2027
// syllabus: no recursion. Every output, every compile error and every program
// on this page was compiled with javac 21 (OpenJDK 21.0.12) and run with java
// 21 on 2026-11-06 from scratch files outside the repo; the programs reading
// input were run with the sample input shown, and each printed result below is
// pasted from that run.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-worksheets',
  code: 'ic29',
  board: 'icse',
  themeColor: '#3E4B2C',
  title: 'ICSE Computer Applications Worksheets with Answers 2027',
  description: 'ICSE Computer Applications worksheets for 2027: eight original Java sheets, one per chapter, each with an MCQ, outputs, a program and the answer key below.',
  ogTitle: 'ICSE Computer Applications Worksheets, One per Chapter',
  ogDesc: 'Eight original Java worksheets for ICSE Class 10 Computer Applications, one for each chapter of the 2027 syllabus. Each sheet carries 22 marks in the paper\'s own shapes, and the answer key, with every program run in Java 21, sits directly below it.',
  twDesc: 'Eight ICSE Class 10 Java worksheets, one per chapter, in board question shapes, answer key below each, every program run in Java.',
  headline: 'ICSE Computer Applications Worksheets for 2027: Eight Chapter Sheets with Answer Keys',
  courseName: 'ICSE Class 10 Computer Applications (Java) Worksheet Practice, Live Online',
  courseDesc: 'Live online worksheet practice for ICSE Class 10 Computer Applications for the 2027 examination: a timed chapter worksheet each week in the shapes of the board paper, one-mark MCQs, two-mark outputs and errors, and a 15-mark Section B program, marked on screen and checked in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Worksheets',
  navLinks: [['#format', 'How they work'], ['#ws-basics', 'Sheets 1 and 2'], ['#ws-methods', 'Sheets 3 and 4'], ['#ws-library', 'Sheets 5 and 6'], ['#ws-data', 'Sheets 7 and 8']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Worksheets with answers']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Worksheets 2027',
  h1: 'ICSE Computer Applications worksheets, one for every chapter, answers below.',
  lede: 'These ICSE Computer Applications worksheets give one sheet to each of the eight Class 10 chapters, in 2027 syllabus order. Every sheet is worth 22 marks and uses the shapes of the real paper: a one-mark MCQ, three two-mark parts and a 15-mark program. The answer key sits right under each sheet, with a reason for every short answer and a full program that was compiled and run in Java 21. In our mini batch a fresh sheet like these is set every week and marked live.',
  heroNote: 'Live online &middot; 8 worksheets &middot; 22 marks each &middot; answer keys run in Java &middot; a new sheet every week in class &middot; first class free',
  waText: 'Hello Modern Age Coders. I want weekly worksheet practice for ICSE Class 10 Computer Applications.',
  timetable: {
    label: 'When worksheets are set and marked',
    title: 'Worksheet week',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, short parts under the clock', '5:30', 'PM IST'],
      ['Wednesday, the 15-mark program', '8:00', 'PM IST'],
      ['Marks on each worksheet', '22', 'per sheet'],
      ['Programs checked in', 'BlueJ', 'on screen']
    ],
    zones: '<b>In India:</b> the mini batch sits each worksheet across these two classes. <b>Outside India:</b> the same sheets are set and marked one to one, after school in your own time zone, for ICSE students in the Gulf, South East Asia and elsewhere.',
    stamps: ['8 sheets &middot; 176 marks', 'Answer key below each']
  },
  picksH2: 'Courses built around weekly practice sheets',
  picksLede: 'The ICSE Java course where a worksheet like these is set and marked every week, the Class 11 and 12 Computer Science course for students continuing to ISC, and the data structures course for the student who finishes Sheet 7 wanting harder arrays.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'All eight chapters in a mini batch of up to six, with a fresh 22-mark worksheet every week, marked on screen.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving on to ISC Computer Science, where the same practice habit meets longer programs.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoyed the sorting sheet and wants to compare algorithms properly.' }
  ],
  capsule: 'ICSE Computer Applications worksheets work best when there is one per chapter and each copies the paper\'s own shapes: a one-mark MCQ like Question 1, two-mark output, error and definition parts like Question 2, and a 15-mark program like Section B. This page gives eight original Java worksheets for the 2027 syllabus, one per chapter, each worth 22 marks, with the answer key directly below and every program run in Java. Sit each in about 25 minutes, then mark it honestly. Modern Age Coders sets and marks a new sheet every week in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="format">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How is each worksheet set out?</p>
      <h2>How do these ICSE Java worksheets for Class 10 work?</h2>
      <p class="bx-lede">Each sheet takes one chapter and asks it in the five shapes the board uses. Do the sheet with the key covered, mark it against the key, and redo anything you lost marks on two days later.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part</th><th scope="col">Shape</th><th scope="col">Marks</th><th scope="col">Mirrors in the paper</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>Multiple choice</td><td class="bx-num">1</td><td>Section A, Question 1</td></tr>
          <tr><td class="bx-num">2 to 4</td><td>Output, error, definition or trace</td><td class="bx-num">2 each</td><td>Section A, Question 2</td></tr>
          <tr><td class="bx-num">5</td><td>Write a program, with comments</td><td class="bx-num">15</td><td>One Section B question</td></tr>
          <tr class="bx-total"><td></td><td>Whole sheet</td><td class="bx-num">22</td><td>About 25 minutes</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Write on paper, not in BlueJ, because the board paper is handwritten. Mark strictly: an output missing a .0 or a space is wrong. Then write the reason beside each lost mark; after eight sheets that list shows which chapter needs another week.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="ws-basics">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Worksheets for chapters 1 and 2</p>
      <h2>Chapter wise worksheet ICSE Java: Class IX revision and the class as the basis of computation</h2>
      <p class="bx-lede">Sheet 1 tests the Class 9 base the whole paper rests on. Sheet 2 checks that the words class, object, state and behaviour are used exactly.</p>
    </div>
    <h3>Worksheet 1: Revision of Class IX syllabus</h3>
    <ol class="bx-qlist">
      <li>Which loop always runs its body at least once? (a) for (b) while (c) do-while (d) none of these <b>[1]</b></li>
      <li>Give the output: <code>int p = 7, q = 2; double r = p / q + p % q; System.out.println(r);</code> <b>[2]</b></li>
      <li>Give the output: <code>System.out.println(Math.ceil(4.1) + Math.round(2.5));</code> <b>[2]</b></li>
      <li>How many times does <code>for (int k = 2; k &lt;= 20; k += 4)</code> run? Show the values of k. <b>[2]</b></li>
      <li>Write a program to input a positive integer and print the sum of its even digits and the count of its odd digits. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(c) do-while</td><td>It is exit controlled: the test comes after the body.</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">4.0</td><td>7 / 2 is 3 in int, 7 % 2 is 1, and the int 4 is stored in a double.</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">8.0</td><td>ceil gives 5.0, round(2.5) gives 3, and double plus long is double.</td></tr>
          <tr><td class="bx-num">4</td><td>5 times</td><td>k is 2, 6, 10, 14, 18; at 22 the test fails.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>even digit sum, odd count</span></figcaption>
  <pre>import java.util.Scanner;
public class Digits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int evenSum = 0, oddCount = 0;
        while (n &gt; 0) {
            int d = n % 10;          // last digit
            if (d % 2 == 0) evenSum += d;
            else oddCount++;
            n /= 10;                 // drop last digit
        }
        System.out.println("Sum of even digits = " + evenSum);
        System.out.println("Count of odd digits = " + oddCount);
    }
}

<i>// Input 40271 gives: Sum of even digits = 6
//                    Count of odd digits = 2</i></pre>
  <p class="bx-code-note">Zero counts as even, so 4 + 2 + 0 is 6. The odd digits are 7 and 1.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
          <tbody>
            <tr><td>n</td><td>int</td><td>The number entered, reduced each pass</td></tr>
            <tr><td>d</td><td>int</td><td>The current last digit</td></tr>
            <tr><td>evenSum</td><td>int</td><td>Running sum of even digits</td></tr>
            <tr><td>oddCount</td><td>int</td><td>Count of odd digits</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <h3 class="bx-mt-40">Worksheet 2: Class as the basis of all computation</h3>
    <ol class="bx-qlist">
      <li>An object is (a) a data type (b) an instance of a class (c) a method (d) a keyword <b>[1]</b></li>
      <li>Classify as primitive or composite: <code>int</code>, <code>String</code>, <code>char[]</code>, <code>double</code>. <b>[2]</b></li>
      <li>A class Fan has data members speed and isOn, and methods start() and setSpeed(int). Name its state and its behaviour. <b>[2]</b></li>
      <li>Fill in the blank: the keyword ______ creates an object and allocates memory for it. Write one statement that uses it for class Fan. <b>[2]</b></li>
      <li>Define a class Pen with data members colour (String) and inkLevel (int), and a method write(int words) that lowers inkLevel by one for every ten words, never below 0. Create a pen in main, set it to "blue" and 100, write 250 words and print both members. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(b)</td><td>A class is the type; each object is one instance of it.</td></tr>
          <tr><td class="bx-num">2</td><td>int, double primitive; String, char[] composite</td><td>Composite types are built from other types.</td></tr>
          <tr><td class="bx-num">3</td><td>State: speed, isOn. Behaviour: start(), setSpeed(int).</td><td>Data members hold state; methods give behaviour.</td></tr>
          <tr><td class="bx-num">4</td><td><code>new</code>; <code>Fan f = new Fan();</code></td><td>new allocates the object and runs the constructor.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>class Pen</span></figcaption>
  <pre>public class Pen {
    String colour;
    int inkLevel;
    void write(int words) {
        inkLevel = inkLevel - words / 10;
        if (inkLevel &lt; 0) inkLevel = 0;
    }
    public static void main(String[] args) {
        Pen p = new Pen();
        p.colour = "blue";
        p.inkLevel = 100;
        p.write(250);
        System.out.println(p.colour + " " + p.inkLevel);
    }
}

<i>// Output: blue 75</i></pre>
  <p class="bx-code-note">250 / 10 is 25, so 100 falls to 75; the guard stops it going negative.</p>
</figure>
    <p class="bx-mt-40">The ideas behind Sheet 2 are explained on <a class="bx-link" href="/icse-class-10-class-as-basis-of-computation">class as the basis of all computation</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="ws-methods">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Worksheets for chapters 3 and 4</p>
      <h2>Practice sheets ICSE computer: user-defined methods and constructors</h2>
      <p class="bx-lede">These two chapters produce the class skeleton questions of Section B, so both sheets end with a class to write in full.</p>
    </div>
    <h3>Worksheet 3: User-defined methods</h3>
    <ol class="bx-qlist">
      <li>Which pair can NOT both appear in one class? (a) <code>int f(int)</code> and <code>int f(double)</code> (b) <code>int f(int)</code> and <code>double f(int)</code> (c) <code>void f()</code> and <code>void f(int)</code> (d) <code>int f(int, char)</code> and <code>int f(char, int)</code> <b>[1]</b></li>
      <li>Give the output: <code>static int twice(int x) { x = x * 2; return x; }</code> and in main <code>int n = 6; int m = twice(n); System.out.println(n + " " + m);</code> <b>[2]</b></li>
      <li>State whether pure or impure: (i) <code>int square(int a)</code> that returns a * a; (ii) <code>void addBonus(int[] marks)</code> that adds 5 to every element. <b>[2]</b></li>
      <li>Write the prototype of a public method isPrime that takes an int and returns true or false. <b>[2]</b></li>
      <li>Write a class with two overloaded methods named check: check(int n) prints whether n is even or odd; check(String s, char ch) prints how many times ch occurs in s. Call both from main. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(b)</td><td>They differ only in return type, which is not part of the signature.</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">6 12</td><td>x is a copy of n, so doubling x leaves n at 6.</td></tr>
          <tr><td class="bx-num">3</td><td>(i) pure, (ii) impure</td><td>(ii) changes the caller's array.</td></tr>
          <tr><td class="bx-num">4</td><td><code>public boolean isPrime(int n)</code></td><td>Access, return type, name, parameter list.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>overloaded check</span></figcaption>
  <pre>public class Check {
    void check(int n) {
        if (n % 2 == 0) System.out.println(n + " is even");
        else System.out.println(n + " is odd");
    }
    void check(String s, char ch) {
        int c = 0;
        for (int i = 0; i &lt; s.length(); i++)
            if (s.charAt(i) == ch) c++;
        System.out.println(ch + " occurs " + c + " times");
    }
    public static void main(String[] args) {
        Check obj = new Check();
        obj.check(15);
        obj.check("banana", 'a');
    }
}

<i>// Output: 15 is odd
//         a occurs 3 times</i></pre>
  <p class="bx-code-note">Java chooses the version by the arguments: one int, or a String and a char.</p>
</figure>
    <p class="bx-mt-40">Three more overloading programs in board format are on <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading</a>.</p>
    <h3 class="bx-mt-40">Worksheet 4: Constructors</h3>
    <ol class="bx-qlist">
      <li>The return type of a constructor is (a) void (b) int (c) the class type (d) it has none <b>[1]</b></li>
      <li>Find the error and correct it: <code>class Box { int side; void Box(int s) { side = s; } }</code> used as <code>Box b = new Box(4);</code> <b>[2]</b></li>
      <li>Give the output: class Counter has <code>Counter() { count = 10; }</code> and <code>Counter(int c) { count = c * 2; }</code>; main makes <code>new Counter()</code> as x and <code>new Counter(7)</code> as y, then prints <code>x.count + y.count</code>. <b>[2]</b></li>
      <li>State two differences between a constructor and a method. <b>[2]</b></li>
      <li>Define a class Student with name and marks, a parameterised constructor, a method grade() that returns 'A' for 80 and above, 'B' for 60 to 79 and 'C' below 60, and display() that prints all three. Test it with Kabir, 72. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(d)</td><td>A constructor has no return type, not even void.</td></tr>
          <tr><td class="bx-num">2</td><td>Remove void: <code>Box(int s) { side = s; }</code></td><td>With void it is a method, so javac reports that no constructor takes an int.</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">24</td><td>10 from the default constructor plus 7 * 2.</td></tr>
          <tr><td class="bx-num">4</td><td>No return type, and the same name as the class; it runs on new, while a method is called by name.</td><td>Any two correct points earn the marks.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>class Student</span></figcaption>
  <pre>public class Student {
    String name;
    int marks;
    Student(String n, int m) {
        name = n;
        marks = m;
    }
    char grade() {
        if (marks &gt;= 80) return 'A';
        else if (marks &gt;= 60) return 'B';
        else return 'C';
    }
    void display() {
        System.out.println(name + " " + marks + " " + grade());
    }
    public static void main(String[] args) {
        Student s = new Student("Kabir", 72);
        s.display();
    }
}

<i>// Output: Kabir 72 B</i></pre>
</figure>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="ws-library">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Worksheets for chapters 5 and 6</p>
      <h2>ICSE Computer Applications worksheets on library classes and encapsulation</h2>
      <p class="bx-lede">Library classes are tested mostly through outputs; encapsulation mostly through whether code compiles. The two sheets lean that way.</p>
    </div>
    <h3>Worksheet 5: Library classes</h3>
    <ol class="bx-qlist">
      <li><code>Character.isLetterOrDigit('$')</code> returns (a) true (b) false (c) '$' (d) an error <b>[1]</b></li>
      <li>Give the output: <code>String a = "12", b = "3"; System.out.println(a + b + " " + (Integer.parseInt(a) + Integer.parseInt(b)));</code> <b>[2]</b></li>
      <li>Give the output: <code>System.out.println(Character.toLowerCase('Q') + "" + (char) ('a' + 2) + Character.isUpperCase('m'));</code> <b>[2]</b></li>
      <li>Define autoboxing and write one statement that shows it. <b>[2]</b></li>
      <li>Write a program to input a sentence and count its uppercase letters, lowercase letters, digits and spaces using Character methods. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(b)</td><td>$ is neither a letter nor a digit.</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">123 15</td><td>The Strings join; the parsed ints add.</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">qcfalse</td><td>The empty String makes the rest join: q, then c, then false.</td></tr>
          <tr><td class="bx-num">4</td><td>Automatic conversion of a primitive to its wrapper object: <code>Integer k = 25;</code></td><td>Java wraps 25 in an Integer without a call.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>count by Character tests</span></figcaption>
  <pre>import java.util.Scanner;
public class CharCount {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine();
        int up = 0, low = 0, dig = 0, sp = 0;
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch)) up++;
            else if (Character.isLowerCase(ch)) low++;
            else if (Character.isDigit(ch)) dig++;
            else if (Character.isWhitespace(ch)) sp++;
        }
        System.out.println("Upper " + up + ", lower " + low
            + ", digits " + dig + ", spaces " + sp);
    }
}

<i>// Input: ICSE Exam 2027 is on Monday
// Output: Upper 6, lower 12, digits 4, spaces 5</i></pre>
  <p class="bx-code-note">nextLine, not next, so the whole sentence with its spaces is read.</p>
</figure>
    <p class="bx-mt-40">Each Character and wrapper method in the syllabus is listed on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.</p>
    <h3 class="bx-mt-40">Worksheet 6: Encapsulation</h3>
    <ol class="bx-qlist">
      <li>Which access specifier limits a member to its own class? (a) public (b) protected (c) private (d) default <b>[1]</b></li>
      <li>In <code>class Visit { static int total; int id; void log(int x) { int y = x + 1; } }</code> name the kind of variable that total, id, x and y each are. <b>[2]</b></li>
      <li>Class Score declares <code>private int score;</code>. Another class runs <code>Score t = new Score(); t.score = 5;</code>. Will it compile? Give the reason. <b>[2]</b></li>
      <li>Fill in the blank: a variable declared static in a class has one copy shared by all objects and is called a ______ variable. <b>[2]</b></li>
      <li>Define a class Thermostat with a private int temp starting at 24, a method setTemp(int t) that accepts only 16 to 30 and prints "Out of range" otherwise, and getTemp(). In main, try 35 and then 21, and print the result. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(c)</td><td>private is visible only inside its class.</td></tr>
          <tr><td class="bx-num">2</td><td>total: class variable; id: instance; x: argument (parameter); y: local</td><td>Decided by where and how each is declared.</td></tr>
          <tr><td class="bx-num">3</td><td>No: "score has private access in Score"</td><td>A private member cannot be reached from another class.</td></tr>
          <tr><td class="bx-num">4</td><td>class (static)</td><td>One copy for the class, not one per object.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>class Thermostat</span></figcaption>
  <pre>public class Thermostat {
    private int temp = 24;
    public void setTemp(int t) {
        if (t &gt;= 16 &amp;&amp; t &lt;= 30) temp = t;
        else System.out.println("Out of range");
    }
    public int getTemp() { return temp; }
    public static void main(String[] args) {
        Thermostat th = new Thermostat();
        th.setTemp(35);
        th.setTemp(21);
        System.out.println(th.getTemp());
    }
}

<i>// Output: Out of range
//         21</i></pre>
  <p class="bx-code-note">Only setTemp can change the private field, and it refuses 35.</p>
</figure>
    <p class="bx-mt-40">Scope and visibility rules are set out on <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="ws-data">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Worksheets for chapters 7 and 8</p>
      <h2>Java worksheets Class 10 ICSE: arrays and string handling</h2>
      <p class="bx-lede">These two sheets carry the most Section B weight, so do each twice: now, and again in the week before the exam.</p>
    </div>
    <h3>Worksheet 7: Arrays</h3>
    <ol class="bx-qlist">
      <li>Binary search needs the array to be (a) sorted (b) of even length (c) of int type only (d) two dimensional <b>[1]</b></li>
      <li>Give the output: <code>int[] v = {4, 9, 2, 7}; int s = 0; for (int i = 0; i &lt; v.length; i += 2) s += v[i]; System.out.println(s + v[v.length - 1]);</code> <b>[2]</b></li>
      <li>For <code>int[][] g = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};</code> give the sum of the left diagonal, g[2][0], and g.length * g[0].length. <b>[2]</b></li>
      <li>Show the array after the first pass of bubble sort, ascending, on {5, 1, 4, 2}. <b>[2]</b></li>
      <li>Write a program to input ten integers into an array, sort them in descending order by selection sort, and print them. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(a)</td><td>Each halving step relies on the order.</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">13</td><td>i is 0 and 2, so s is 4 + 2; then 6 + 7.</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">15, 7, 9</td><td>1 + 5 + 9; row 2 column 0; 3 rows times 3 columns.</td></tr>
          <tr><td class="bx-num">4</td><td class="bx-num">{1, 4, 2, 5}</td><td>Neighbours swap when out of order, so 5 moves to the end.</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>selection sort, descending</span></figcaption>
  <pre>import java.util.Scanner;
public class SortDesc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] a = new int[10];
        System.out.println("Enter 10 integers:");
        for (int i = 0; i &lt; 10; i++) a[i] = sc.nextInt();
        for (int i = 0; i &lt; 9; i++) {
            int big = i;                     // index of largest so far
            for (int j = i + 1; j &lt; 10; j++)
                if (a[j] &gt; a[big]) big = j;
            int t = a[i]; a[i] = a[big]; a[big] = t;
        }
        for (int i = 0; i &lt; 10; i++) System.out.print(a[i] + " ");
        System.out.println();
    }
}

<i>// Input: 12 5 89 -3 40 40 7 0 66 21
// Output: 89 66 40 40 21 12 7 5 0 -3</i></pre>
  <p class="bx-code-note">For descending order, look for the largest of the unsorted part instead of the smallest. One swap per pass.</p>
</figure>
    <p class="bx-mt-40">Bubble sort, linear search and binary search are written in full on <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">sorting and searching programs</a>.</p>
    <h3 class="bx-mt-40">Worksheet 8: String handling</h3>
    <ol class="bx-qlist">
      <li><code>"COMPUTER".substring(3, 6)</code> returns (a) "PUTE" (b) "PUT" (c) "MPU" (d) "MPUT" <b>[1]</b></li>
      <li>Give the output: <code>String s = "Board Exam"; System.out.println(s.indexOf('a') + " " + s.lastIndexOf('a') + " " + s.charAt(s.length() - 1));</code> <b>[2]</b></li>
      <li>Give the output: <code>System.out.println("apple".compareTo("apricot"));</code> <b>[2]</b></li>
      <li>Give the output: <code>String t = "java"; t.toUpperCase(); System.out.println(t + t.replace('a', 'o'));</code> <b>[2]</b></li>
      <li>Write a program to input a sentence and print its longest word and that word's length. If two words tie, print the first. <b>[15]</b></li>
    </ol>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Answer key</th><th scope="col">Answer</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>(b)</td><td>Indices 3, 4 and 5; index 6 is excluded.</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">2 8 m</td><td>The first a is at 2, the last at 8; the last character is m.</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">-2</td><td>First difference at index 2: 'p' (112) minus 'r' (114).</td></tr>
          <tr><td class="bx-num">4</td><td class="bx-num">javajovo</td><td>toUpperCase's result was never stored, so t is still "java".</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Key, part 5</b><span>longest word</span></figcaption>
  <pre>import java.util.Scanner;
public class Longest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim() + " ";   // space marks the last word's end
        String word = "", longest = "";
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') word += ch;
            else {
                if (word.length() &gt; longest.length()) longest = word;
                word = "";
            }
        }
        System.out.println(longest + " " + longest.length());
    }
}

<i>// Input: Practice makes the programs easier
// Output: Practice 8</i></pre>
  <p class="bx-code-note">"programs" also has 8 letters, but the test is &gt; and not &gt;=, so the first word of that length stays.</p>
</figure>
    <p class="bx-mt-40">Palindromes, vowel counts and word rearranging are on <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. What happens to a worksheet in class?</p>
      <h2>How the mini batch sets and marks a worksheet each week</h2>
      <p class="bx-lede">Alone, a worksheet shows what went wrong; in class, a teacher reading the working also shows why.</p>
    </div>
    <div class="bx-grid-2">
      <div class="bx-card"><h3>Short parts on Tuesday</h3><p>At 5:30 PM IST the group sits parts 1 to 4 of a new sheet against a timer. Answers go up on screen together, so each student sees how others reasoned.</p></div>
      <div class="bx-card"><h3>The program on Wednesday</h3><p>At 8:00 PM IST each student writes part 5 by hand, photographs it, and the teacher marks it on screen, then the class runs it in BlueJ.</p></div>
      <div class="bx-card"><h3>Marks against the scheme</h3><p>Each answer is marked the way a board examiner would credit it, so students learn that a right idea in broken Java still loses marks.</p></div>
      <div class="bx-card"><h3>Then full papers</h3><p>From December the weekly sheet grows into a full two-hour mock, described on <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the specimen paper and mock tests page</a>.</p></div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Weekly worksheets in the mini batch, or one to one',
  chooseLede: 'The sheets, the answer keys and the BlueJ checks do not change between formats. Families in India choose the fixed Tuesday and Wednesday mini batch or a private slot; ICSE students abroad are taught one to one. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'No more than six ICSE Class 10 students',
    'A new 22-mark sheet every week',
    'Handwritten programs marked on screen',
    'Lost marks logged chapter by chapter'
  ],
  choosePersonal: [
    'A time the family picks, in India or abroad',
    'Extra sheets on whichever chapter is weakest',
    'Every line of every program read aloud together',
    'Sheets made harder as scores rise',
    'Same teachers, same 2027 syllabus'
  ],
  chooseAfter: 'A student who scores well on short parts but runs out of steam on the 15-mark program often needs only a few one to one sessions on writing programs by hand. A student who wants a sheet every week across all eight chapters is better placed in the two batch classes. Fees are shown in your own currency.',
  zonesH2: 'Worksheet practice for ICSE students abroad',
  zonesLede: 'ICSE schools abroad prepare for the same Computer Applications paper, so the same eight sheets apply. Outside India they are set and marked one to one, at an evening time in the student\'s own zone.',
  zonesAfter: 'The slot is agreed after the free demo and can move around school exams. More on overseas classes is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about worksheets',
  faqH2: 'What students ask about ICSE Computer Applications worksheets',
  faqs: [
    ['Where can I find ICSE Computer Applications worksheets with answers?', 'This page has eight, one for each chapter of the 2027 syllabus, with the answer key directly below each sheet. The short answers carry a reason, and every program in the key was compiled and run in Java, so the answers can be trusted. Do each sheet with the key covered before you check.'],
    ['Are these worksheets based on the 2027 ICSE syllabus?', 'Yes. They follow the eight Class 10 chapters in the 2027 syllabus order, from the Class IX revision chapter to string handling. Two-dimensional arrays and wrapper classes are included because the syllabus includes them. Recursion is left out because it is not in the 2027 Computer Applications syllabus.'],
    ['Should I write the worksheet programs in BlueJ or on paper?', 'On paper first. The board exam is handwritten, with no compiler to catch a missing semicolon or bracket. Once the program is finished on paper, type it into BlueJ exactly as written and run it. Every error BlueJ finds is a mark you would have lost.'],
    ['How do I mark my own ICSE Java worksheet?', 'Be strict. An output missing a decimal point or a space is wrong. A two-mark difference needs two separate points. For a program, check that the class compiles, that the logic gives the right result for the sample input, and that you wrote comments and a variable description. Note the reason for every lost mark.'],
    ['Are these worksheets copied from textbooks or past papers?', 'No. Every question and program here is original, written for this page. They use the same shapes as the board paper, so they are good practice for it, but none is taken from a past paper, a specimen paper or a published book.'],
    ['How many worksheets should I do before the ICSE board exam?', 'At least one per chapter, then mixed sheets that combine chapters, then full timed papers in the last six weeks. Repeating a sheet a week after first doing it shows whether the learning stayed. The arrays and strings sheets are worth doing twice, since they feed Section B most.'],
    ['What is the difference between a worksheet and a sample paper?', 'A worksheet tests one chapter in the paper\'s question shapes and takes about 25 minutes. A sample or specimen paper covers the whole syllabus in two hours. Use worksheets while learning each chapter, and sample papers once every chapter is done.'],
    ['Do you set worksheets in your live ICSE classes?', 'Yes. The mini batch gets a new worksheet each week: short parts on Tuesday at 5:30 PM IST and the program on Wednesday at 8:00 PM IST, both marked on screen. Students abroad, or whose timings clash, get the same sheets one to one at a time the family chooses.']
  ],
  startH2: 'Try a free live worksheet class',
  startHtml: `        <p>In the free demo your child sits the short parts of one worksheet against the clock, then the mentor marks them on screen and runs any doubtful output in BlueJ. You hear afterwards which chapters look solid and which need a sheet or two more, and whether the mini batch or one to one suits your child.</p>
        <p>Revising first? Read <a class="bx-link" href="/icse-computer-applications-notes">the chapter-wise notes</a> or <a class="bx-link" href="/icse-computer-difference-between-questions">the difference between questions</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Worksheets 2027'
};
