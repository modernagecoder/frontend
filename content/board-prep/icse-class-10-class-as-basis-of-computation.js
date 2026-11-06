// ICSE Class 10 Computer Applications (Java): the chapter "Class as the Basis
// of all Computation". Intent: "class as the basis of all computation",
// "objects and classes icse", "class as user defined data type", "instance
// variables vs class variables icse". Distinct from ic11 (constructors), ic22
// (encapsulation and access specifiers, where the syllabus places the scope of
// variables) and ic37 (data types and input): this page gives the board
// definitions, the primitive versus composite table, instance against class
// variables with run outputs, and a design-a-class walkthrough with two
// Section B programs.
// Scope checked 2026-11-06 against Oswal's reproduction of the 2026-27 ICSE
// Computer Applications syllabus (for the 2027 exam): objects encapsulate state
// and behaviour; member variables; classes as abstractions for sets of
// objects; class as an object factory; primitive and composite data types;
// real-life examples. Class, instance, argument and local variables are listed
// under Encapsulation (scope of variables), which this page says plainly.
// Every program and snippet on this page was compiled with javac 21 (OpenJDK
// 21.0.12) and run with java 21 on 2026-11-06 from scratch files outside the
// repo; outputs are pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-class-10-class-as-basis-of-computation',
  code: 'ic21',
  board: 'icse',
  themeColor: '#7A4A1E',
  dateModified: '2026-11-06',
  title: 'Class as the Basis of All Computation: ICSE Class 10 Notes',
  description: 'Class as the basis of all computation, ICSE Class 10 (2027): objects and classes, user defined data type, instance vs class variables, two programs run.',
  ogTitle: 'Class as the Basis of All Computation, ICSE Class 10, 2027',
  ogDesc: 'The opening chapter of ICSE Class 10 Computer Applications: board definitions of object, class, state and behaviour, class as an object factory and a user defined data type, primitive against composite types, instance against class variables with outputs from Java 21, and a step-by-step design-a-class walkthrough with two programs.',
  twDesc: 'ICSE Class 10 class as the basis of all computation: definitions, user defined data type, instance vs class variables, two programs run in Java.',
  headline: 'Class as the Basis of All Computation: ICSE Class 10 Definitions, Variables and a Design-a-Class Walkthrough',
  courseName: 'ICSE Class 10 Computer Applications (Java) Objects and Classes, Live Online',
  courseDesc: 'Live online teaching of the ICSE Class 10 Computer Applications chapter Class as the Basis of all Computation for the 2027 examination: objects with state and behaviour, the class as a blueprint and object factory, the class as a user defined data type, primitive and composite types, instance and class variables, object creation with new and reference variables, and designing a complete class from a Section B question, practised on paper and in BlueJ in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Objects and classes',
  navLinks: [['#definitions', 'Definitions'], ['#types', 'Data types'], ['#variables', 'Variables'], ['#design', 'Design a class'], ['#sectiona', 'Questions'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Class as the basis of computation']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Objects and classes 2027',
  h1: 'Class as the basis of all computation, explained for ICSE Class 10.',
  lede: 'Class as the basis of all computation is the first new chapter of ICSE Class 10 Computer Applications, and every Section B answer rests on it: no class, no program. The idea is simple. A Java program is built from classes, and every value it works on either is a primitive or lives inside an object made from a class. This page gives the definitions the examiner wants, the primitive against composite table, instance against class variables with outputs from Java 21, and a walkthrough that turns a Section B question into a finished class. In our live mini batch students practise exactly that turn, from question text to running code.',
  heroNote: 'Live online &middot; board definitions &middot; instance vs class variables, run &middot; design-a-class walkthrough &middot; two programs &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live help with ICSE Class 10 objects and classes.',
  timetable: {
    label: 'When objects and classes are practised',
    title: 'Class design',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, definitions and object traces', '5:30', 'PM IST'],
      ['Wednesday, a class built from a question', '8:00', 'PM IST'],
      ['Steps from question to class', '6', 'each time'],
      ['Programs on this page', '2', 'run']
    ],
    zones: '<b>In India:</b> the chapter runs through both evening classes of the week. <b>Outside India:</b> private lessons cover the same definitions and class designs, booked for a late afternoon or evening in Doha, Riyadh, Singapore or wherever the family lives.',
    stamps: ['Basis of Section B', 'From question to class']
  },
  picksH2: 'Courses built on objects and classes',
  picksLede: 'Classes are the spine of the ICSE BlueJ course, the whole of ISC Computer Science, and every data structure a programmer meets later.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'The Class 9 and 10 course, in a group of six at most, where each fortnight a Section B question is turned into a designed class.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'ISC questions hand you a class diagram and expect objects to be passed, compared and returned; this chapter is the start of that road.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'Stacks, queues and linked lists are just classes whose objects point at each other. A natural next step for a curious student.' }
  ],
  capsule: 'Class as the basis of all computation means that every Java program is written as one or more classes, and all data and work happen inside them. An object is an entity with state (its data members) and behaviour (its member methods). A class is the blueprint that describes such objects, so it works as an object factory. Because the programmer creates it, a class is a user defined, composite data type. Instance variables get a copy in each object; a static class variable is shared. Modern Age Coders teaches this live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="definitions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Why is a class called the basis of all computation?</p>
      <h2>Why is class called the basis of all computation? Definitions in one sentence</h2>
      <p class="bx-lede">A class is called the basis of all computation because in Java every program is written inside a class, and every piece of data the program works on belongs either to a primitive variable or to an object built from a class. These are the definitions the chapter asks for, one sentence each.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Term</th><th scope="col">One-sentence definition</th></tr></thead>
        <tbody>
          <tr><td>Object</td><td>An entity that has a state, the values of its characteristics, and a behaviour, the actions it can perform.</td></tr>
          <tr><td>State</td><td>The data an object holds at a moment, stored in its data members (member variables).</td></tr>
          <tr><td>Behaviour</td><td>What an object can do, written as the member methods of its class.</td></tr>
          <tr><td>Class</td><td>A blueprint or template that declares the data members and member methods shared by a set of similar objects.</td></tr>
          <tr><td>Class as an object factory</td><td>A class can produce any number of objects of the same kind, each with its own state, using <code>new</code>.</td></tr>
          <tr><td>Instance</td><td>An object is called an instance of its class, because it is one concrete example of that blueprint.</td></tr>
          <tr><td>Class as an abstraction</td><td>A class keeps only the features of an object that matter to the program and leaves out the rest.</td></tr>
          <tr><td>User defined data type</td><td>A class is a data type the programmer creates, so variables of that class type can be declared just like <code>int</code> variables.</td></tr>
          <tr><td><code>new</code> operator</td><td>Allocates memory for a new object and returns a reference to it, which is stored in a variable of the class type.</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Objects and classes ICSE: real-life examples</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Class</th><th scope="col">One object of it</th><th scope="col">State (data members)</th><th scope="col">Behaviour (methods)</th></tr></thead>
        <tbody>
          <tr><td>CeilingFan</td><td>The fan in your bedroom</td><td>speed, isOn</td><td>switchOn(), changeSpeed()</td></tr>
          <tr><td>Train</td><td>Tonight's express to Delhi</td><td>number, coaches, currentStation</td><td>depart(), reachStation()</td></tr>
          <tr><td>LibraryBook</td><td>Your copy of a novel</td><td>title, author, issued</td><td>issue(), returnBook()</td></tr>
          <tr><td>WaterTank</td><td>The tank on your roof</td><td>capacity, level</td><td>fill(), use()</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      The constructor, the special method that sets an object's starting state, has its own chapter:
      <a class="bx-link" href="/icse-class-10-constructors-questions">constructors ICSE Class 10 questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="types">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Why is a class a user defined data type?</p>
      <h2>Class as user defined data type: primitive against composite types</h2>
      <p class="bx-lede">A class is a user defined data type because the programmer creates it, and once it exists, variables of that type can be declared and objects of it created. It is composite because one object bundles several values, possibly of different types, together with the methods that use them.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Primitive data type</th><th scope="col">Composite (class) type</th></tr></thead>
        <tbody>
          <tr><td>Who defines it</td><td>Built into Java</td><td>Created by the programmer, or supplied in a library</td></tr>
          <tr><td>Examples</td><td><code>int</code>, <code>double</code>, <code>char</code>, <code>boolean</code> and four more</td><td><code>WaterTank</code>, <code>Batsman</code>, <code>String</code>, <code>Scanner</code></td></tr>
          <tr><td>What a variable holds</td><td>The value itself</td><td>A reference to an object</td></tr>
          <tr><td>How many values</td><td>Exactly one</td><td>Several data members, plus methods</td></tr>
          <tr><td>Size</td><td>Fixed (an int is 4 bytes)</td><td>Depends on the members declared</td></tr>
          <tr><td>Creating a value</td><td><code>int n = 5;</code></td><td><code>WaterTank t = new WaterTank(500);</code></td></tr>
          <tr><td>Default value as a member</td><td>0, 0.0, false or the character with code 0</td><td>null until an object is assigned</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Value against reference</b><span>run in Java 21</span></figcaption>
  <pre>int p = 5;
int q = p;          <i>// q gets a copy of 5</i>
q = 8;
System.out.println(p + " " + q);

Mug m1 = new Mug();
Mug m2 = m1;        <i>// m2 refers to the same mug</i>
m2.ml = 250;
System.out.println(m1.ml);

Mug m3 = new Mug();
Mug m4 = new Mug();
m3.ml = 300;
m4.ml = 300;
System.out.println((m3 == m4) + " " + (m3.ml == m4.ml));

<i>// Output</i>
5 8
250
false true</pre>
  <p class="bx-code-note">Copying a primitive copies the value. Copying a class variable copies only the reference, so both names reach one object. <code>==</code> on two objects asks "same object?", not "same contents?".</p>
</figure>
      <div>
        <h3>Why not every class is treated as a data type</h3>
        <p>A class written only to hold <code>main</code> and run a task is used as a program, not as a type. A class such as <code>WaterTank</code>, from which other code declares variables and creates objects, is the one that behaves as a user defined data type. Examiners accept either view if it is explained in a sentence.</p>
        <h3 class="bx-mt-40">Declaring variables of a class type</h3>
        <ol class="bx-qlist">
          <li><code>WaterTank roof;</code> declares a reference; no tank exists yet.</li>
          <li><code>roof = new WaterTank(1000);</code> creates the object and stores its reference.</li>
          <li><code>WaterTank sump = new WaterTank(2000);</code> does both in one line.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Primitive types, their sizes and how values are read with Scanner are covered on <a class="bx-link" href="/icse-class-10-data-types-and-input-java">data types and input in Java for ICSE Class 10</a>, and the wrapper class for each primitive is on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="variables">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What is the difference between instance variables and class variables?</p>
      <h2>Instance variables vs class variables ICSE, with outputs</h2>
      <p class="bx-lede">An instance variable is a data member declared without <code>static</code>, so every object gets its own copy; a class variable is declared <code>static</code>, so one copy is shared by all objects of the class. The syllabus lists these, together with argument and local variables, under the scope of variables in the Encapsulation chapter, and they are asked alongside this one.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Kind</th><th scope="col">Declared</th><th scope="col">Copies</th><th scope="col">Lives as long as</th><th scope="col">Example</th></tr></thead>
        <tbody>
          <tr><td>Instance variable</td><td>In the class, outside methods, no <code>static</code></td><td>One per object</td><td>The object</td><td><code>int level;</code></td></tr>
          <tr><td>Class variable</td><td>In the class, outside methods, with <code>static</code></td><td>One for the whole class</td><td>The program run</td><td><code>static int tanks;</code></td></tr>
          <tr><td>Argument (parameter) variable</td><td>In a method's brackets</td><td>One per call</td><td>That call</td><td><code>void fill(int litres)</code></td></tr>
          <tr><td>Local variable</td><td>Inside a method or block</td><td>One per call</td><td>That method or block</td><td><code>double pct</code> in display()</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>One shared, one each</b><span>run in Java 21</span></figcaption>
  <pre>class Bulb {
    int watts;              <i>// instance variable</i>
    static int made = 0;    <i>// class variable</i>
    Bulb(int w) {
        watts = w;
        made++;
    }
}
<i>// in main:</i>
Bulb x = new Bulb(9);
Bulb y = new Bulb(12);
x.watts = 15;
System.out.println(x.watts + " " + y.watts + " "
    + Bulb.made + " " + x.made);

<i>// Output: 15 12 2 2</i></pre>
  <p class="bx-code-note">Changing x.watts leaves y.watts alone. Both constructors added to the single <code>made</code>, so it reads 2 through the class name and through x.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Statement</th><th scope="col">x.watts</th><th scope="col">y.watts</th><th scope="col">Bulb.made</th></tr></thead>
          <tbody>
            <tr><td>Start</td><td class="bx-num">none</td><td class="bx-num">none</td><td class="bx-num">0</td></tr>
            <tr><td><code>x = new Bulb(9)</code></td><td class="bx-num">9</td><td class="bx-num">none</td><td class="bx-num">1</td></tr>
            <tr><td><code>y = new Bulb(12)</code></td><td class="bx-num">9</td><td class="bx-num">12</td><td class="bx-num">2</td></tr>
            <tr><td><code>x.watts = 15</code></td><td class="bx-num">15</td><td class="bx-num">12</td><td class="bx-num">2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Access specifiers and the full scope rules are on <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>;
      short answers that compare two terms in a table are collected on <a class="bx-link" href="/icse-computer-difference-between-questions">ICSE Computer Applications difference between questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="design">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do you turn a Section B question into a class?</p>
      <h2>Design a class: from question text to finished program</h2>
      <p class="bx-lede">Read the question twice and pull out its nouns and its verbs: the nouns that describe one thing become data members, the verbs become methods, and anything counted across all objects becomes a static member. Then write the parts in a fixed order.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Name the class</h4><p>Use the name the question gives, with a capital first letter. If none is given, choose a singular noun: Batsman, not Batsmen.</p></li>
      <li class="bx-step"><h4>List the data members</h4><p>One line per member, with its type and a short comment. Mark shared totals or counters <code>static</code>.</p></li>
      <li class="bx-step"><h4>Write the constructor</h4><p>Set every member to a sensible start: 0, 0.0, an empty String, or the value passed in.</p></li>
      <li class="bx-step"><h4>Write one method per task</h4><p>Input, calculation and display are kept separate, with the method names and return types the question states.</p></li>
      <li class="bx-step"><h4>Write main last</h4><p>Create the object or objects with <code>new</code> and call the methods in the order the task needs.</p></li>
      <li class="bx-step"><h4>Add the variable description table</h4><p>Every variable, its type and its purpose. Section B asks for variable descriptions, and they carry marks in internal assessment too.</p></li>
    </ol>
    <div class="bx-dated bx-mt-40">
      <p><b>Question 1.</b> Define a class WaterTank with instance variables capacity and level (int) and a class variable tanks (int) that counts how many tanks have been created. Write a constructor <code>WaterTank(int cap)</code>, <code>void fill(int litres)</code> that reports and removes any overflow, <code>void use(int litres)</code> that refuses to draw more than the tank holds, and <code>void display()</code> showing the level and the percentage full. In main, read the capacities and amounts with Scanner and use two tanks.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>WaterTank.java</b><span>instance and class variables</span></figcaption>
  <pre>import java.util.Scanner;
class WaterTank {
    int capacity;          <i>// instance variable: litres the tank holds</i>
    int level;             <i>// instance variable: litres in it now</i>
    static int tanks = 0;  <i>// class variable: tanks made so far</i>

    WaterTank(int cap) {
        capacity = cap;
        level = 0;
        tanks++;
    }

    void fill(int litres) {
        level = level + litres;
        if (level &gt; capacity) {
            System.out.println("Overflow of " + (level - capacity) + " litres");
            level = capacity;
        }
    }

    void use(int litres) {
        if (litres &gt; level)
            System.out.println("Only " + level + " litres available");
        else
            level = level - litres;
    }

    void display() {
        double pct = level * 100.0 / capacity;
        System.out.println(level + " of " + capacity + " litres (" + pct + "%)");
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Capacity of tank A and tank B: ");
        WaterTank a = new WaterTank(sc.nextInt());
        WaterTank b = new WaterTank(sc.nextInt());
        System.out.print("Litres to pour into A, then into B: ");
        a.fill(sc.nextInt());
        b.fill(sc.nextInt());
        System.out.print("Litres to draw from A: ");
        a.use(sc.nextInt());
        a.display();
        b.display();
        System.out.println("Tanks created: " + WaterTank.tanks);
    }
}</pre>
  <p class="bx-code-note">Each tank keeps its own level, but <code>tanks</code> is one counter for the class, read through the class name in main. Multiplying by 100.0 makes the percentage a double.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>capacity, level</td><td>int</td><td>instance variables: size and contents of one tank</td></tr>
              <tr><td>tanks</td><td>static int</td><td>class variable: number of tanks created</td></tr>
              <tr><td>cap</td><td>int</td><td>constructor parameter: capacity</td></tr>
              <tr><td>litres</td><td>int</td><td>parameter of fill and use</td></tr>
              <tr><td>pct</td><td>double</td><td>local: percentage full</td></tr>
              <tr><td>a, b</td><td>WaterTank</td><td>the two tank objects</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads the inputs</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Capacity of tank A and tank B: <b>500 800</b>
Litres to pour into A, then into B: <b>620 300</b>
Overflow of 120 litres
Litres to draw from A: <b>150</b>
350 of 500 litres (70.0%)
300 of 800 litres (37.5%)
Tanks created: 2</pre>
  <p class="bx-code-note">Tank A takes 620, overflows by 120 and is capped at 500; drawing 150 leaves 350, which is 70 per cent.</p>
</figure>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Question 2.</b> Define a class Batsman with instance variables name (String), runs and balls (int), and a class variable teamRuns (int) holding the total of all batsmen's runs. Write a default constructor, <code>void accept(Scanner sc)</code> to read one player's details and add the runs to teamRuns, <code>double strikeRate()</code> that returns runs per 100 balls to two decimal places (0 if no ball was faced), and <code>void display()</code>. In main, create three batsmen, display them in a table and print the team total.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Batsman.java</b><span>three objects, one shared total</span></figcaption>
  <pre>import java.util.Scanner;
class Batsman {
    String name;              <i>// instance: player's name</i>
    int runs;                 <i>// instance: runs scored</i>
    int balls;                <i>// instance: balls faced</i>
    static int teamRuns = 0;  <i>// class variable: shared by all players</i>

    Batsman() {
        name = "";
        runs = 0;
        balls = 0;
    }

    void accept(Scanner sc) {
        System.out.print("Name, runs and balls: ");
        name = sc.next();
        runs = sc.nextInt();
        balls = sc.nextInt();
        teamRuns = teamRuns + runs;
    }

    double strikeRate() {
        if (balls == 0)
            return 0.0;
        return Math.round(runs * 10000.0 / balls) / 100.0;
    }

    void display() {
        System.out.println(name + "\\t" + runs + "\\t" + balls + "\\t" + strikeRate());
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Batsman p1 = new Batsman();
        Batsman p2 = new Batsman();
        Batsman p3 = new Batsman();
        p1.accept(sc);
        p2.accept(sc);
        p3.accept(sc);
        System.out.println("Name\\tRuns\\tBalls\\tStrike rate");
        p1.display();
        p2.display();
        p3.display();
        System.out.println("Team total = " + Batsman.teamRuns);
    }
}</pre>
  <p class="bx-code-note">One Scanner is made in main and passed to accept, so all three objects read from the same keyboard. A method that returns a value (strikeRate) is called inside display.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>name</td><td>String</td><td>instance: player's name</td></tr>
              <tr><td>runs, balls</td><td>int</td><td>instance: runs scored and balls faced</td></tr>
              <tr><td>teamRuns</td><td>static int</td><td>class variable: total runs of all players</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>keyboard reader, passed to accept</td></tr>
              <tr><td>p1, p2, p3</td><td>Batsman</td><td>the three player objects</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Name, runs and balls: <b>Rohan 47 38</b>
Name, runs and balls: <b>Anaya 82 51</b>
Name, runs and balls: <b>Vikram 9 14</b>
Name    Runs    Balls   Strike rate
Rohan   47      38      123.68
Anaya   82      51      160.78
Vikram  9       14      64.29
Team total = 138</pre>
  <p class="bx-code-note">47 x 100 / 38 is 123.684..., rounded to 123.68. The tabs are shown as spaces here. 47 + 82 + 9 is 138, collected in the one shared teamRuns.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">The same design steps drive bill and tariff questions: see <a class="bx-link" href="/icse-class-10-slab-and-bill-programs">ICSE Class 10 slab and bill programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="sectiona">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What questions come from this chapter in Section A?</p>
      <h2>Objects and classes ICSE questions with answers</h2>
      <p class="bx-lede">Original questions in the one-mark and two-mark shapes of Section A. Commit to an answer before you open it.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-qlist">
          <li>An object's state is stored in its
            <details><summary>Answer</summary> Data members (member variables).</details></li>
          <li>Which keyword makes a data member a class variable?
            <details><summary>Answer</summary> static.</details></li>
          <li>Why is a class called an object factory?
            <details><summary>Answer</summary> Because any number of objects of the same kind can be produced from one class with new, each with its own state.</details></li>
          <li>Name the operator that allocates memory for an object.
            <details><summary>Answer</summary> new.</details></li>
          <li>Is <code>String</code> a primitive type or a composite type?
            <details><summary>Answer</summary> Composite. It is a class in java.lang, so a String variable holds a reference to an object.</details></li>
          <li>Give the output: <code>Bulb x = new Bulb(9); Bulb y = new Bulb(12);</code> then <code>System.out.println(Bulb.made);</code> where the constructor does <code>made++</code> on a static <code>made</code> starting at 0.
            <details><summary>Answer</summary> 2. One shared counter, increased once by each constructor call.</details></li>
        </ol>
      </div>
      <div>
        <ol class="bx-qlist">
          <li>Why is a class known as a user defined data type?
            <details><summary>Answer</summary> Because the programmer creates it, and after that, variables of the class type can be declared and objects of it created, just as variables of a built-in type are.</details></li>
          <li>State two differences between instance variables and class variables.
            <details><summary>Answer</summary> An instance variable is declared without static and each object has its own copy; a class variable is declared static and one copy is shared by all objects. An instance variable is used through an object; a class variable can be used through the class name.</details></li>
          <li>Identify the state and behaviour of a ceiling fan as a Java object.
            <details><summary>Answer</summary> State: speed and whether it is on. Behaviour: switching on or off and changing the speed.</details></li>
          <li>Differentiate between a primitive data type and a composite data type.
            <details><summary>Answer</summary> A primitive type is built into Java and its variable holds one value directly, such as int. A composite type is made from a class, can hold several members, and its variable holds a reference to an object.</details></li>
          <li>Write one statement that declares a reference <code>t</code> of class <code>Train</code> and creates an object using a constructor that takes a train number.
            <details><summary>Answer</summary> <code>Train t = new Train(12301);</code></details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      Questions of this kind across the whole syllabus are on <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is this chapter taught live?</p>
      <h2>How the evening group learns to think in classes</h2>
      <p class="bx-lede">Most students can recite "a class is a blueprint" and still freeze when a Section B question names a class they have never seen. The classes aim at that gap, so the definitions turn into a design habit.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Objects from the room</h3><p>On Tuesday evening each student picks an object near them and names its state and behaviour aloud; the group decides which features a program would keep.</p></div>
      <div class="bx-card"><h3>References traced</h3><p>Short fragments with shared static counters and copied references are traced in a table, then run in BlueJ so nobody argues about the result.</p></div>
      <div class="bx-card"><h3>Nouns and verbs</h3><p>A fresh Section B question is marked up on screen, nouns circled for members and verbs underlined for methods, before a line of code is written.</p></div>
      <div class="bx-card"><h3>Written, then marked</h3><p>On Wednesday evening the class is written by hand with its variable description table and marked against the scheme, part by part.</p></div>
      <div class="bx-card"><h3>Kept for the lab file</h3><p>The finished design goes into the student's laboratory assignments, which count towards internal assessment.</p></div>
      <div class="bx-card"><h3>Back in the mocks</h3><p>Class design returns in every full mock paper from December, under the full two-hour clock.</p></div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Learn objects and classes in a small group, or privately',
  chooseLede: 'The definitions, the traces and the class designs are identical either way. Within India the choice is the two-evening group of six or private lessons at your hour; ICSE families abroad always get private lessons. Monthly billing, no admission fee.',
  chooseBatch: [
    'Live on Tuesday 5:30 PM and Wednesday 8:00 PM IST',
    'At most six students in the group',
    'A new Section B class designed each fortnight',
    'Nouns-to-members method practised on screen',
    'Shared static and reference traps run in BlueJ'
  ],
  choosePersonal: [
    'Lessons at an hour your family chooses',
    'Slower or faster, matched to your child',
    'Class designs drawn up together, then solo',
    'ISC-style classes added for a stronger student',
    'Same mentors and same marking as the group'
  ],
  chooseAfter: 'A child who knows the definitions but cannot start a Section B class usually gains most from a few private lessons on the design steps. A child who needs steady practice of every chapter will get more from the twice-weekly group. Fees on this page show in your currency.',
  zonesH2: 'Objects and classes lessons for ICSE students overseas',
  zonesLede: 'Outside India, ICSE students sit the identical Computer Applications paper, and this chapter underpins every program in it. Lessons abroad are private and timed for the end of the local school day.',
  zonesAfter: 'After the free demo we agree a fixed slot, and it can move in a test week. The overseas arrangement is described on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about classes and objects',
  faqH2: 'What students ask about class as the basis of all computation',
  faqs: [
    ['Why is class called the basis of all computation in Java?', 'Because a Java program cannot exist outside a class. All code is written in classes, and all data either sits in a primitive variable inside a class or is stored in objects created from classes. So every computation a program performs happens within, or on, a class.'],
    ['What is an object in ICSE Class 10?', 'An object is an entity with a state and a behaviour. Its state is the set of values in its data members, such as a fan\'s speed; its behaviour is what it can do, written as member methods, such as changing speed. In Java an object is created from a class with new.'],
    ['What is a class in Java for ICSE?', 'A class is a blueprint or template that declares the data members and member methods common to a group of similar objects. It describes what every object of that kind will have and do, and objects are then created from it.'],
    ['Why is a class called an object factory?', 'Because one class can produce as many objects as the program needs, all with the same structure but each with its own state. Every use of new on the class turns out another object, just as a factory turns out products from one design.'],
    ['Why is a class known as a user defined data type?', 'Because the programmer defines it, and once defined, it can be used like any other type: variables of the class type are declared and objects are stored in them. It is a composite type, since one object holds several values and the methods that use them.'],
    ['What is the difference between instance variables and class variables?', 'An instance variable is declared without static, so every object has its own copy. A class variable is declared static, so a single copy is shared by all objects and can be used through the class name. Changing an instance variable affects one object; changing a class variable affects them all.'],
    ['What is the difference between primitive and composite data types?', 'Primitive types such as int, double, char and boolean are built into Java and hold a single value directly. Composite types are classes, such as String or a class you write; a variable of a composite type holds a reference to an object that may contain many values.'],
    ['Is this chapter asked in Section B of the ICSE paper?', 'Not as a separate question, but every Section B program is a class, so the chapter is used in all of them. Its definitions and differences are asked directly in Section A, as one-mark and two-mark questions.'],
    ['Where do instance and class variables come in the ICSE syllabus?', 'The 2026-27 syllabus for the 2027 exam lists class, instance, argument and local variables under the scope of variables in the Encapsulation chapter. Schools usually teach the instance and class distinction alongside objects and classes, as this page does.'],
    ['Do you teach objects and classes in live classes?', 'Yes. The ICSE group meets on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, with six students at most; definitions are practised aloud and a full class is designed and marked each fortnight. Private one to one lessons are available at a time that suits the family.']
  ],
  startH2: 'Book a free demo on objects and classes',
  startHtml: `        <p>In the free demo your child names the state and behaviour of an everyday object, traces a short static-counter fragment, and turns a Section B question into the skeleton of a class with the mentor. You then hear clearly how ready your child is for Section B and which format, group or private, would help most.</p>
        <p>Prefer to see the whole subject first? Try <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus explained</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Objects and classes 2027'
};
