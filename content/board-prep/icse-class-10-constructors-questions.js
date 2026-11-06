// ICSE Class 10 Computer Applications (Java): the Constructors chapter as the
// board asks it. Intent: "constructors icse class 10 questions", "parameterized
// constructor icse", "default constructor java icse", "constructor overloading",
// "difference between constructor and method". Distinct from ic09 (user-defined
// methods and method overloading), ic21 (class as the basis of computation,
// objects and variables) and ic16 (error finding in general): this page is only
// constructors, with one-sentence definitions, a constructor versus method
// table, two Section B class-design programs and constructor trap snippets.
// Scope checked 2026-11-06 against a reproduction of the 2026-27 syllabus for
// the 2027 exam (Oswal): "Definition of Constructor, characteristics, types of
// constructors, use of constructors, constructor overloading. Default
// constructor, parameterized constructor, constructor overloading, Difference
// between constructor and method." Copy constructors are not named there, so
// they are not taught here. No recursion.
// Every program and snippet on this page was compiled with javac 21 (OpenJDK
// 21.0.12) and run with java 21 on 2026-11-06 from scratch files outside the
// repo; outputs are pasted from those runs, and the compile error quoted is
// javac 21's own message.
'use strict';

module.exports = {
  slug: 'icse-class-10-constructors-questions',
  code: 'ic11',
  board: 'icse',
  themeColor: '#73304A',
  dateModified: '2026-11-06',
  title: 'Constructors ICSE Class 10 Questions with Answers, 2027',
  description: 'Constructors ICSE Class 10 questions for 2027: default and parameterized constructors, overloading, constructor vs method, two programs run in Java.',
  ogTitle: 'Constructors in ICSE Class 10: Questions, Programs and Traps',
  ogDesc: 'The ICSE Class 10 Constructors chapter for 2027: one-sentence definitions, a constructor versus method table, two Section B class-design programs with variable description tables, constructor output traps and Section A questions with answers. Every program was run in Java 21.',
  twDesc: 'ICSE Class 10 constructors: definitions, constructor vs method, overloading programs run in Java, and Section A questions with answers.',
  headline: 'Constructors ICSE Class 10 Questions for 2027: Definitions, Programs, Traps and Answers',
  courseName: 'ICSE Class 10 Computer Applications (Java) Constructors Chapter, Live Online',
  courseDesc: 'Live online teaching of the ICSE Class 10 Computer Applications Constructors chapter for the 2027 examination: what a constructor is and when it runs, default and parameterized constructors, the constructor the compiler supplies, constructor overloading, the this keyword, and the difference between a constructor and a method, with Section B class-design programs written on paper, marked against the scheme and run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Constructors',
  navLinks: [['#what', 'Definitions'], ['#versus', 'Vs method'], ['#programs', 'Programs'], ['#traps', 'Traps'], ['#sectiona', 'Questions'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Constructors']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Constructors 2027',
  h1: 'Constructors ICSE Class 10 questions, with every answer run in Java.',
  lede: 'Constructors ICSE Class 10 questions come in three shapes: a one-line definition, a difference between a constructor and a method, and a Section B class whose first instruction is "a default constructor to initialise the data members". This page answers all three. It gives the definitions the way an examiner wants them, a comparison table, two complete class-design programs with sample runs from Java 21, the traps that turn up as output questions, and a set of Section A questions with answers. Our live mini batch writes these classes against the clock every fortnight.',
  heroNote: 'Live online &middot; definitions in one line &middot; two class-design programs, run &middot; constructor traps &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live help with the ICSE Class 10 Constructors chapter.',
  timetable: {
    label: 'When constructors are practised',
    title: 'Constructor practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, definitions and traps', '5:30', 'PM IST'],
      ['Wednesday, a full class designed', '8:00', 'PM IST'],
      ['Class-design programs on this page', '2', 'run'],
      ['Constructor traps traced', '6', 'snippets']
    ],
    zones: '<b>In India:</b> the Constructors chapter is taught on these two evenings of the mini batch. <b>Outside India:</b> one to one, with the same classes and the same marking, at an after-school hour in your city, from Abu Dhabi to Singapore.',
    stamps: ['Section A and B', 'Designed, then run']
  },
  picksH2: 'Courses that teach constructors properly',
  picksLede: 'The ICSE Java course is where these classes are written each fortnight. ISC Computer Science picks up constructors at once and builds on them, and the data structures course shows why every node and list in real code starts life in a constructor.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every Section B class opens with a constructor that is marked line by line.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC, where every class question starts with a parameterized constructor and objects are passed between methods.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants to see constructors build linked lists, stacks and trees one object at a time.' }
  ],
  capsule: 'Constructors ICSE Class 10 questions test four things. A constructor is a member method with the same name as its class and no return type, not even void, that runs automatically when an object is created with new, to give the data members their starting values. A default constructor takes no parameters; a parameterized constructor takes values; overloading means several constructors that differ in their parameter lists. And a constructor differs from a method in name, return type and how it is called. Modern Age Coders teaches the chapter live in a Tuesday and Wednesday mini batch in India, or one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="what">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is a constructor in Java, in the words ICSE expects?</p>
      <h2>What is a constructor? Definitions for ICSE Class 10 in one sentence each</h2>
      <p class="bx-lede">A constructor is a member method with the same name as the class and no return type, which is called automatically when an object is created and is used to initialise the object's data members. Each term below is worth one mark when written this cleanly.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Term</th><th scope="col">One-sentence definition</th><th scope="col">Smallest example</th></tr></thead>
        <tbody>
          <tr><td>Constructor</td><td>A member method with the same name as its class and no return type, invoked automatically by <code>new</code> to initialise a new object.</td><td><code>Pen() { ink = 100; }</code></td></tr>
          <tr><td>Default constructor</td><td>A constructor with no parameters, which gives every data member a fixed starting value.</td><td><code>Pen() { colour = "blue"; ink = 100; }</code></td></tr>
          <tr><td>Parameterized constructor</td><td>A constructor that receives values as parameters and copies them into the data members of the new object.</td><td><code>Pen(String c, int i) { colour = c; ink = i; }</code></td></tr>
          <tr><td>Compiler-supplied constructor</td><td>If a class defines no constructor at all, Java adds an empty no-argument one, which leaves members at their default values (0, 0.0, false, null).</td><td><code>new Box()</code> works with no constructor written</td></tr>
          <tr><td>Constructor overloading</td><td>Defining more than one constructor in the same class, each with a different number, type or order of parameters.</td><td><code>TimeSpan()</code>, <code>TimeSpan(int)</code>, <code>TimeSpan(int, int)</code></td></tr>
          <tr><td>The <code>this</code> keyword</td><td>A reference to the current object, used inside a constructor when a parameter has the same name as a data member.</td><td><code>this.x = x;</code></td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Characteristics of a constructor (the list examiners mark)</h3>
    <ol class="bx-qlist">
      <li>Its name is exactly the class name, with the same capital letters.</li>
      <li>It has no return type, not even <code>void</code>. Add one and it stops being a constructor.</li>
      <li>It is called automatically, once, when <code>new</code> creates the object; you never call it with a dot.</li>
      <li>It is usually declared <code>public</code> so objects can be created from outside the class.</li>
      <li>It can be overloaded, but a class cannot have two constructors with the same parameter list.</li>
      <li>Once you write any constructor yourself, Java no longer supplies the empty one.</li>
    </ol>
    <p class="bx-mt-40">
      Constructors only make sense once a class is seen as a template for objects, which is the chapter before this one:
      <a class="bx-link" href="/icse-class-10-class-as-basis-of-computation">class as the basis of all computation</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="versus">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How is a constructor different from a method?</p>
      <h2>Difference between constructor and method, ICSE style</h2>
      <p class="bx-lede">A constructor has the class's name and no return type and runs by itself when an object is made; a method has any name, must declare a return type and runs only when it is called. A four-mark difference question wants at least four rows of this table, each written as a pair.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Constructor</th><th scope="col">Method</th></tr></thead>
        <tbody>
          <tr><td>Name</td><td>Same as the class</td><td>Any valid identifier</td></tr>
          <tr><td>Return type</td><td>None, not even void</td><td>Must have one, void or a data type</td></tr>
          <tr><td>How it runs</td><td>Automatically, when <code>new</code> creates an object</td><td>Only when called, as <code>ob.show()</code></td></tr>
          <tr><td>How many times per object</td><td>Once, at creation</td><td>As many times as it is called</td></tr>
          <tr><td>Purpose</td><td>To initialise the data members</td><td>To carry out a task on the data</td></tr>
          <tr><td>If none is written</td><td>Java supplies an empty no-argument one</td><td>Nothing is supplied</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Default constructor versus parameterized constructor</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Default (no-argument)</th><th scope="col">Parameterized</th></tr></thead>
        <tbody>
          <tr><td>Parameters</td><td>None</td><td>One or more</td></tr>
          <tr><td>Starting values</td><td>The same for every object</td><td>Different for each object, sent in by the caller</td></tr>
          <tr><td>Object creation</td><td><code>new Pen()</code></td><td><code>new Pen("black", 40)</code></td></tr>
          <tr><td>Supplied by Java?</td><td>Yes, if no constructor is written</td><td>Never; you must write it</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trap: a return type makes it a method</b><span>compiles and runs</span></figcaption>
  <pre>class Fan {
    int speed;
    Fan(int s) {             <i>// constructor</i>
        speed = s;
    }
    int Fan(int s) {         <i>// a method that happens to share the name</i>
        return s * 2;
    }
    public static void main(String[] args) {
        Fan f = new Fan(3);
        System.out.println(f.speed + " " + f.Fan(3));
    }
}

<i>// Output: 3 6</i></pre>
  <p class="bx-code-note">Java allows a method with the class's name. The <code>int</code> in front is what makes the second one a method, so it runs only when called with a dot.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trap: void Demo() is not a constructor</b><span>compiles and runs</span></figcaption>
  <pre>class Demo {
    void Demo() {
        System.out.println("method, not constructor");
    }
}
<i>// in main:</i>
Demo d = new Demo();
System.out.println("object made");
d.Demo();

<i>// Output</i>
object made
method, not constructor</pre>
  <p class="bx-code-note"><code>new Demo()</code> prints nothing, because the only constructor is the empty one Java supplied. The message appears only when the method is called.</p>
</figure>
    </div>
    <p class="bx-mt-40">
      Overloading methods follows the same rule as overloading constructors, and the methods chapter has its own programs on
      <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and function overloading</a>.
      More two-column answers of this kind are on <a class="bx-link" href="/icse-computer-difference-between-questions">ICSE Computer Applications difference between questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How is a constructor used in a Section B class?</p>
      <h2>Parameterized and default constructor programs in Java for ICSE</h2>
      <p class="bx-lede">Most Section B class-design questions list the data members, then ask for a constructor, then input, calculation and display methods, then a main that creates an object and calls them. Below are two original questions in that shape, each with a variable description table and a sample run copied from Java 21.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question 1.</b> Define a class ExamResult with data members name (String), eng, maths and comp (int), avg (double) and grade (char). Write a default constructor to initialise the data members, <code>void accept()</code> to read the name and three marks, <code>void compute()</code> to find the average and the grade (90 and above A, 75 to below 90 B, 60 to below 75 C, 40 to below 60 D, below 40 E) and <code>void display()</code> to print the name, the average to two decimal places and the grade. Write main to create an object and call the methods.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>ExamResult.java</b><span>default constructor</span></figcaption>
  <pre>import java.util.Scanner;
class ExamResult {
    String name;          <i>// student's name</i>
    int eng, maths, comp; <i>// marks in three subjects</i>
    double avg;           <i>// average of the three</i>
    char grade;           <i>// grade worked out from avg</i>

    ExamResult() {        <i>// default constructor</i>
        name = "";
        eng = 0;
        maths = 0;
        comp = 0;
        avg = 0.0;
        grade = ' ';
    }

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter name: ");
        name = sc.nextLine();
        System.out.print("Enter marks in English, Maths and Computer: ");
        eng = sc.nextInt();
        maths = sc.nextInt();
        comp = sc.nextInt();
    }

    void compute() {
        avg = (eng + maths + comp) / 3.0;
        if (avg &gt;= 90)
            grade = 'A';
        else if (avg &gt;= 75)
            grade = 'B';
        else if (avg &gt;= 60)
            grade = 'C';
        else if (avg &gt;= 40)
            grade = 'D';
        else
            grade = 'E';
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + Math.round(avg * 100) / 100.0);
        System.out.println("Grade: " + grade);
    }

    public static void main(String args[]) {
        ExamResult ob = new ExamResult();
        ob.accept();
        ob.compute();
        ob.display();
    }
}</pre>
  <p class="bx-code-note">Dividing by 3.0, not 3, keeps the fraction. <code>Math.round(avg * 100) / 100.0</code> is the syllabus-safe way to keep two decimal places.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>name</td><td>String</td><td>student's name</td></tr>
              <tr><td>eng, maths, comp</td><td>int</td><td>marks in the three subjects</td></tr>
              <tr><td>avg</td><td>double</td><td>average of the three marks</td></tr>
              <tr><td>grade</td><td>char</td><td>grade decided from avg</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads input from the keyboard</td></tr>
              <tr><td>ob</td><td>ExamResult</td><td>the object created in main</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter name: <b>Ishaan Rao</b>
Enter marks in English, Maths and Computer: <b>88 79 95</b>
Name: Ishaan Rao
Average: 87.33
Grade: B</pre>
  <p class="bx-code-note">262 / 3.0 is 87.333..., rounded to 87.33. Test the lowest slab too: 35, 41 and 38 give an average of 38.0 and grade E.</p>
</figure>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Question 2.</b> Define a class TimeSpan with data members hours and minutes (int). Overload the constructor: <code>TimeSpan()</code> sets both to 0; <code>TimeSpan(int total)</code> converts a number of minutes into hours and minutes; <code>TimeSpan(int h, int m)</code> stores hours and minutes, carrying any extra minutes into hours. Write <code>int toMinutes()</code> and <code>void display()</code>. In main, read the values with Scanner, create one object with each constructor, display all three and print the difference between the second and third in minutes.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>TimeSpan.java</b><span>constructor overloading</span></figcaption>
  <pre>import java.util.Scanner;
class TimeSpan {
    int hours;    <i>// whole hours</i>
    int minutes;  <i>// minutes left over, 0 to 59</i>

    TimeSpan() {                  <i>// default constructor</i>
        hours = 0;
        minutes = 0;
    }

    TimeSpan(int total) {         <i>// from a number of minutes</i>
        hours = total / 60;
        minutes = total % 60;
    }

    TimeSpan(int h, int m) {      <i>// from hours and minutes</i>
        hours = h + m / 60;
        minutes = m % 60;
    }

    int toMinutes() {
        return hours * 60 + minutes;
    }

    void display() {
        System.out.println(hours + " h " + minutes + " min");
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a time in minutes: ");
        int t = sc.nextInt();
        System.out.print("Enter hours and minutes: ");
        int h = sc.nextInt();
        int m = sc.nextInt();
        TimeSpan a = new TimeSpan();
        TimeSpan b = new TimeSpan(t);
        TimeSpan c = new TimeSpan(h, m);
        a.display();
        b.display();
        c.display();
        System.out.println("Difference = "
            + Math.abs(b.toMinutes() - c.toMinutes()) + " min");
    }
}</pre>
  <p class="bx-code-note">Java picks the constructor by the number of arguments: none, one or two. The integer division and remainder by 60 do the conversion.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>hours, minutes</td><td>int</td><td>data members of each object</td></tr>
              <tr><td>total</td><td>int</td><td>parameter: a time in minutes</td></tr>
              <tr><td>h, m</td><td>int</td><td>parameters: hours and minutes</td></tr>
              <tr><td>t</td><td>int</td><td>minutes read in main</td></tr>
              <tr><td>a, b, c</td><td>TimeSpan</td><td>one object per constructor</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads input from the keyboard</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a time in minutes: <b>130</b>
Enter hours and minutes: <b>1 95</b>
0 h 0 min
2 h 10 min
2 h 35 min
Difference = 25 min</pre>
  <p class="bx-code-note">95 minutes carries 1 hour, so 1 h 95 min is stored as 2 h 35 min, that is 155 minutes; 155 minus 130 is 25.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">Bill and slab classes use exactly this skeleton with a different compute method; they are worked on <a class="bx-link" href="/icse-class-10-slab-and-bill-programs">ICSE Class 10 slab and bill programs</a>, and every other program family is listed on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="traps">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What do constructor output questions test?</p>
      <h2>Constructor overloading and default values: output questions</h2>
      <p class="bx-lede">Constructor output questions check two facts: which constructor runs for a given <code>new</code>, and what value a member holds if nobody set it. Cover the Output column and trace each one first.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>class Box { int n; double d; String s; boolean b; char c; }</code><br><code>Box ob = new Box();</code><br><code>System.out.println(ob.n + " " + ob.d + " " + ob.s + " " + ob.b + " " + (int) ob.c);</code></td><td class="bx-num">0 0.0 null false 0</td><td>No constructor written, so Java's empty one runs and every member keeps its default value</td></tr>
          <tr><td>2</td><td><code>class Counter {</code><br><code>&nbsp;&nbsp;static int made = 0;</code><br><code>&nbsp;&nbsp;Counter() { made++; }</code><br><code>}</code><br><code>new Counter(); new Counter();</code><br><code>Counter k = new Counter();</code><br><code>System.out.println(Counter.made);</code></td><td class="bx-num">3</td><td>The constructor runs once per object, even for objects that are never stored in a variable</td></tr>
          <tr><td>3</td><td><code>Point(int x, int y) { x = x; y = y; }</code><br><code>Point p = new Point(3, 4);</code><br><code>System.out.println(p.x + " " + p.y);</code></td><td class="bx-num">0 0</td><td>The parameters hide the data members, so each parameter is copied onto itself and the members stay 0</td></tr>
          <tr><td>4</td><td><code>Point2(int x, int y) { this.x = x; this.y = y; }</code><br><code>Point2 q = new Point2(3, 4);</code><br><code>System.out.println(q.x + " " + q.y);</code></td><td class="bx-num">3 4</td><td><code>this.x</code> names the object's member; plain <code>x</code> names the parameter</td></tr>
          <tr><td>5</td><td><code>Pen() { ...; System.out.print("A "); }</code><br><code>Pen(String c) { ...; System.out.print("B "); }</code><br><code>Pen(String c, int i) { ...; System.out.print("C "); }</code><br><code>Pen p1 = new Pen("red");</code><br><code>Pen p2 = new Pen();</code><br><code>Pen p3 = new Pen("black", 40);</code></td><td class="bx-num">B A C</td><td>The order of the <code>new</code> statements decides the order; the argument list decides which version</td></tr>
          <tr><td>6</td><td><code>Pen p4 = p3;</code><br><code>p4.ink = 10;</code><br><code>System.out.println(p3.ink);</code></td><td class="bx-num">10</td><td>No <code>new</code>, so no constructor runs and no new object exists: p4 and p3 name the same pen</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Error: the missing no-argument constructor</b><span>javac 21</span></figcaption>
  <pre>class Lamp {
    int watts;
    Lamp(int w) {
        watts = w;
    }
    public static void main(String[] args) {
        Lamp a = new Lamp(60);
        Lamp b = new Lamp();      <i>// line 8</i>
        System.out.println(a.watts);
    }
}

<i>// javac says:</i>
Lamp.java:8: error: constructor Lamp in class Lamp cannot be applied to given types;
  required: int
  found:    no arguments</pre>
  <p class="bx-code-note">Writing <code>Lamp(int w)</code> switched off the constructor Java would have supplied. Either write <code>Lamp()</code> as well, or always pass a value.</p>
</figure>
      <div>
        <h3>Four rules that settle every constructor trap</h3>
        <ol class="bx-qlist">
          <li>A constructor runs only when <code>new</code> runs, once per object.</li>
          <li>Members not set by the constructor keep their defaults: 0, 0.0, false, null, and the character with code 0.</li>
          <li>If any constructor is written, the free no-argument one disappears.</li>
          <li>A parameter with the same name as a member hides it, unless <code>this.</code> is used.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      More fragments to trace, sorted by trap, are on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Computer Applications output questions</a>,
      and code that will not compile has its own page: <a class="bx-link" href="/icse-class-10-java-error-finding-questions">Java error finding questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="sectiona">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What do Section A constructor questions look like?</p>
      <h2>Constructors ICSE Class 10 questions with answers for Section A</h2>
      <p class="bx-lede">These are original questions in the shapes Question 1 (one-mark MCQs) and Question 2 (two-mark answers) use. Write your answer before opening each one.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>One-mark questions</h3>
        <ol class="bx-qlist">
          <li>Which of these can be a constructor of class <code>Kite</code>? (a) <code>void Kite()</code> (b) <code>Kite()</code> (c) <code>kite()</code> (d) <code>int Kite()</code>
            <details><summary>Answer</summary> (b). No return type, and the name matches the class exactly, including the capital K.</details></li>
          <li>The constructor Java supplies when none is written takes how many parameters?
            <details><summary>Answer</summary> None. It is a no-argument constructor that leaves the members at their default values.</details></li>
          <li>Which keyword refers to the object whose constructor is running?
            <details><summary>Answer</summary> <code>this</code>.</details></li>
          <li>Two constructors <code>Car(int a)</code> and <code>Car(int b)</code> in one class: will it compile?
            <details><summary>Answer</summary> No. Parameter names do not count; both have the parameter list (int), so the class has the same constructor twice.</details></li>
          <li>What is the default value of a <code>String</code> data member that no constructor sets?
            <details><summary>Answer</summary> The value null, meaning the member does not refer to any String yet.</details></li>
        </ol>
      </div>
      <div>
        <h3>Two-mark questions</h3>
        <ol class="bx-qlist">
          <li>State two differences between a constructor and a method.
            <details><summary>Answer</summary> A constructor has the same name as the class and no return type; a method has any name and must declare a return type. A constructor runs automatically when an object is created; a method runs only when it is called.</details></li>
          <li>What is a parameterized constructor? Give an example.
            <details><summary>Answer</summary> A constructor that receives values through parameters and stores them in the data members. Example: <code>Book(String t, int p) { title = t; pages = p; }</code>, used as <code>new Book("Kim", 320)</code>.</details></li>
          <li>Write a default constructor for class <code>Tank</code> with members <code>double litres</code> and <code>boolean full</code>.
            <details><summary>Answer</summary> <code>Tank() { litres = 0.0; full = false; }</code></details></li>
          <li>What is constructor overloading? Why is it useful?
            <details><summary>Answer</summary> Defining several constructors in one class that differ in their parameter lists. It lets objects be created in different ways, for example with default values or with values supplied by the user.</details></li>
          <li>A class has only <code>Shop(String n)</code>. Why does <code>new Shop()</code> fail, and give one fix.
            <details><summary>Answer</summary> Once a constructor is written, Java does not supply the no-argument one, so no constructor matches an empty argument list. Fix: add <code>Shop() { name = ""; }</code>, or pass a name.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      Constructor items sit alongside every other chapter's one-mark questions on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is the Constructors chapter taught live?</p>
      <h2>How the mini batch turns constructors into marks</h2>
      <p class="bx-lede">Constructors are understood in one lesson and then cost marks for months: a stray void, a member never set, a parameter hiding a member. The weekly routine targets those slips.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Definitions said aloud on Tuesday</h4><p>At the 5:30 PM IST class each student defines a constructor, a default constructor and overloading in one sentence, and the group corrects the wording until it would earn the mark.</p></li>
      <li class="bx-step"><h4>Traps traced against a timer</h4><p>Short fragments like the six above are traced on paper, then run in BlueJ on a shared screen, so the default values and the order of constructors are seen, not just told.</p></li>
      <li class="bx-step"><h4>A full class designed on Wednesday</h4><p>At the 8:00 PM IST class a fresh Section B question is set. Students write the data members, the constructor, the methods, main and the variable description table by hand.</p></li>
      <li class="bx-step"><h4>Marked against the scheme on screen</h4><p>The mentor marks one answer in front of everyone: the constructor, each method, the object creation in main, the comments and the table each earn their share.</p></li>
      <li class="bx-step"><h4>Lab file and mock papers</h4><p>The corrected version goes into the student's lab assignments for internal assessment, and constructors return in the full two-hour mock papers from December.</p></li>
    </ol>
    <p class="bx-mt-40">
      With six students at most, every constructor a student writes is read and marked, not sampled.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Learn constructors in the mini batch, or one to one',
  chooseLede: 'Both formats use the same class-design questions, the same marking and the same BlueJ runs. In India a family can choose the evening mini batch or private classes; ICSE students living abroad are taught one to one. You pay monthly, and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'Constructor definitions corrected word by word',
    'A Section B class written and marked each fortnight',
    'Traps run in BlueJ while the group watches'
  ],
  choosePersonal: [
    'A time the family picks, in India or overseas',
    'Extra classes on the exact slips your child makes',
    'Class designs built together, then alone',
    'Harder ISC-style classes once the basics hold',
    'Same mentors, same 2027 syllabus, same marking'
  ],
  chooseAfter: 'If your child can explain constructors but still writes void in front of them, or forgets to set a member, a short run of one to one classes usually fixes it. If the whole of Section B needs steady practice, the two batch evenings a week give more of it. Fees are shown in your local currency.',
  zonesH2: 'Constructors practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India take the same Computer Applications paper, so the same class-design questions and the same constructor traps decide their marks. Abroad, the chapter is taught one to one, early in the evening by the local clock.',
  zonesAfter: 'We fix the slot after the free demo and move it around school tests when needed. For how this works for families overseas, see <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about constructors',
  faqH2: 'What students ask about constructors in ICSE Class 10',
  faqs: [
    ['What is a constructor in Java ICSE Class 10?', 'A constructor is a member method with the same name as its class and no return type, not even void. It runs automatically, once per object, when new creates the object, and gives the data members their starting values.'],
    ['What is the difference between a constructor and a method?', 'A constructor has the class\'s name, has no return type and runs automatically when an object is made. A method can have any name, must declare a return type such as void or int, and runs only when it is called with the object and a dot. Constructors initialise; methods do the work.'],
    ['What is a parameterized constructor in ICSE?', 'A parameterized constructor receives values through its parameters and copies them into the new object\'s data members, so each object can start with different values. For example, Book(String t, int p) stores a title and a page count, and is used as new Book("Kim", 320).'],
    ['What is a default constructor in Java for ICSE?', 'A default constructor takes no parameters and gives every data member a fixed starting value, such as 0 or an empty String. If a class has no constructor at all, Java adds an empty no-argument constructor, which leaves members at their default values: 0, 0.0, false or null.'],
    ['What is constructor overloading with an example?', 'Constructor overloading means writing more than one constructor in the same class, each with a different parameter list. A TimeSpan class can have TimeSpan(), TimeSpan(int total) and TimeSpan(int h, int m); Java chooses the one whose parameters match the arguments given with new.'],
    ['Can a constructor have a return type?', 'No. Write any return type, even void, and Java treats it as an ordinary method that happens to share the class name. It compiles, but it does not run when the object is created: a favourite output-question trap.'],
    ['Why does new ClassName() give an error when I have written a constructor?', 'Because Java supplies the empty no-argument constructor only when a class has no constructors at all. Once you write a parameterized one, new ClassName() has nothing to match. Write a default constructor as well, or always pass the values the constructor expects.'],
    ['What is the use of the this keyword in a constructor?', 'this refers to the object being created. When a parameter has the same name as a data member, as in Point(int x, int y), the plain name means the parameter, so this.x = x is needed to store the value in the member. Without this, the member stays at 0.'],
    ['Are copy constructors in the ICSE 2027 syllabus?', 'The 2027 syllabus wording for the chapter names the definition, characteristics, types and use of constructors, the default and parameterized constructor, constructor overloading and the difference from a method. Copy constructors are not named, so this page does not teach them for the exam.'],
    ['Do you teach the Constructors chapter in live classes?', 'Yes. In the mini batch, on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, students define, trace and then write full classes with constructors, which are marked on screen and run in BlueJ. Families who want a different time can choose personalised one to one classes.']
  ],
  startH2: 'Try a free live class on constructors',
  startHtml: `        <p>In the free demo your child defines a constructor in one line, traces three short constructor fragments, then writes the opening of a Section B class with the mentor watching. You come away knowing which parts of the chapter are secure and whether the mini batch or one to one suits your child.</p>
        <p>Looking for the bigger picture? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Constructors 2027'
};
