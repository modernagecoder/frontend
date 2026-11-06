// ICSE Class 10 Computer Applications (Java): the Encapsulation chapter.
// Intent: "encapsulation icse class 10", "access specifiers java icse",
// "private public protected icse", "data hiding icse", "scope of variables
// icse". Distinct from ic21 (class as the basis of computation, which owns
// instance against class variables and the design-a-class walkthrough) and
// ic11 (constructors): this page owns the access table (same class, same
// package, subclass in another package, any other class), data hiding with
// accessor and mutator methods, the four kinds of variable by scope, shadowing
// and this, scope errors, and one Section B class with private data.
// Scope checked 2026-11-06 against Oswal's reproduction of the 2026-27 ICSE
// Computer Applications syllabus (2027 exam): Unit 6 Encapsulation lists the
// access specifiers private, protected and public with their visibility, and
// the scope of class, instance, argument and local variables. Inheritance is
// not a Class 10 topic, so protected is explained only as far as the table.
// Every program, snippet and compiler message on this page was compiled with
// javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch
// files outside the repo (a two-package Locker test for the access table);
// outputs and error lines are pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-class-10-encapsulation-access-specifiers',
  code: 'ic22',
  board: 'icse',
  themeColor: '#24485E',
  title: 'Encapsulation ICSE Class 10: Access Specifiers and Scope',
  description: 'Encapsulation for ICSE Class 10 (2027): private, default, protected and public in one access table, data hiding, scope of variables, all run in Java.',
  ogTitle: 'Encapsulation for ICSE Class 10, with the Access Table and Scope Rules',
  ogDesc: 'The ICSE Class 10 Encapsulation chapter in one place: board definitions, an access table checked with javac across two packages, data hiding with getters and setters, class, instance, argument and local variables, scope errors, and a Section B class with private data.',
  twDesc: 'Encapsulation for ICSE Class 10: the access table, data hiding, scope of variables and a Section B class, every line run in Java.',
  headline: 'Encapsulation for ICSE Class 10: Access Specifiers, Data Hiding and the Scope of Variables',
  courseName: 'ICSE Class 10 Computer Applications (Java) Encapsulation and Scope, Live Online',
  courseDesc: 'Live online teaching of the ICSE Class 10 Computer Applications Encapsulation chapter for the 2027 examination: access specifiers private, protected and public and the default level, data hiding with accessor and mutator methods, the scope of class, instance, argument and local variables, shadowing and the this keyword, and Section B classes written with private data members, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Encapsulation',
  navLinks: [['#access', 'Access table'], ['#hiding', 'Data hiding'], ['#scope', 'Scope'], ['#program', 'Section B class'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Encapsulation and access specifiers']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Encapsulation 2027',
  h1: 'Encapsulation for ICSE Class 10: who can see what, and for how long.',
  lede: 'Encapsulation in ICSE Class 10 comes down to two questions: which classes can reach a member, and how long a variable lives. The first is answered by the access specifiers, the second by the scope of variables. This page gives the one-line definitions, an access table we checked with the Java compiler across two packages, data hiding with getters and setters, the four kinds of variable, and a Section B class built on private data. In our live mini batch these rules are traced, compiled and written by hand every week.',
  heroNote: 'Live online &middot; access table checked with javac &middot; four kinds of variable &middot; one Section B class with private data &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live classes on encapsulation and access specifiers for ICSE Class 10.',
  timetable: {
    label: 'When encapsulation is taught',
    title: 'Encapsulation week',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, access and scope traces', '5:30', 'PM IST'],
      ['Wednesday, a class with private data', '8:00', 'PM IST'],
      ['Access levels on the table', '4', 'rows'],
      ['Kinds of variable by scope', '4', 'drilled']
    ],
    zones: '<b>In India:</b> both evening classes of the week, in a group of six or fewer. <b>Outside India:</b> the same chapter one to one, in a slot after school in your own time zone.',
    stamps: ['Unit 6 &middot; Encapsulation', 'Compiled, not guessed']
  },
  picksH2: 'Courses where encapsulation is practised',
  picksLede: 'The ICSE Java course where the mini batch writes classes with private data every week, the Class 11 and 12 Computer Science course where encapsulation grows into inheritance, and the data structures course for students who want to see why real libraries hide their fields.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every Section B class is written with private members and public methods.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC, where protected members and inheritance are taught in full.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants to build a stack or a queue whose insides nobody else can break.' }
  ],
  capsule: 'Encapsulation in ICSE Class 10 means wrapping a class\'s data and the methods that use it into one unit, and controlling access to that data. Java does it with access specifiers: private (same class only), default with no keyword (same package), protected (same package and subclasses) and public (everywhere). Making data private and reaching it only through public methods is called data hiding. The same 2027 syllabus unit covers the scope of variables: class, instance, argument and local. Modern Age Coders teaches this chapter live in a Tuesday and Wednesday mini batch in India, or one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="access">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are access specifiers in Java?</p>
      <h2>Access specifiers Java ICSE: private, public, protected and default in one table</h2>
      <p class="bx-lede">An access specifier is a keyword placed before a member that decides which other classes may use it. The ICSE syllabus names three, private, protected and public; a member written with no keyword gets a fourth level, called default or package access.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Specifier</th><th scope="col">Same class</th><th scope="col">Another class, same package</th><th scope="col">Subclass, other package</th><th scope="col">Any other class, other package</th></tr></thead>
        <tbody>
          <tr><td><code>private</code></td><td>Yes</td><td>No</td><td>No</td><td>No</td></tr>
          <tr><td>none (default)</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
          <tr><td><code>protected</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>No</td></tr>
          <tr><td><code>public</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Read the table as a ladder: each row opens one more door than the row above it. We did not copy it from a book. We wrote a class <code>Locker</code> in a package <code>school</code> with one member at each level, then tried to read all four from three places. Here is what javac 21 reported.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>school/Locker.java</b><span>one member per level</span></figcaption>
  <pre>package school;
public class Locker {
    private int code = 4821;
    int row = 3;                  <i>// no keyword: default</i>
    protected String owner = "Tara";
    public int number = 17;
}</pre>
  <p class="bx-code-note">Each member is then printed from Office (package school), SportsLocker (package other, extends Locker) and Visitor (package other, unrelated).</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>What javac said</b><span>6 errors</span></figcaption>
  <pre>school/Office.java:5: error: code has private access in Locker
other/SportsLocker.java:5: error: code has private access in Locker
other/SportsLocker.java:6: error: row is not public in Locker; cannot be accessed from outside package
other/Visitor.java:6: error: code has private access in Locker
other/Visitor.java:7: error: row is not public in Locker; cannot be accessed from outside package
other/Visitor.java:8: error: owner has protected access in Locker</pre>
  <p class="bx-code-note">Every line that is not listed compiled. public number was readable from all three places; private code from none of them.</p>
</figure>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Encapsulation, in one line</h3><p>Binding data and the methods that work on it into a single unit, the class, so that the data is used only in the ways the class allows.</p></div>
      <div class="bx-card"><h3>Data hiding, in one line</h3><p>Keeping data members private so that no code outside the class can read or change them directly.</p></div>
      <div class="bx-card"><h3>Access specifier, in one line</h3><p>A keyword that sets the visibility of a class member: private, protected, public, or none for default access.</p></div>
    </div>
    <p class="bx-mt-40">Inheritance is not part of the ICSE Class 10 syllabus, so for the 2027 paper it is enough to know that protected opens a member to subclasses as well as to its own package. Where a class sits among objects and classes generally is covered on <a class="bx-link" href="/icse-class-10-class-as-basis-of-computation">class as the basis of all computation</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="hiding">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How does a class hide its data?</p>
      <h2>Data hiding ICSE: private members with getter and setter methods</h2>
      <p class="bx-lede">A class hides its data by declaring the members private and offering public methods to read them (accessors, or getters) and to change them (mutators, or setters). The mutator can check a value before accepting it, which is the whole point.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Thermostat.java and Room.java</b><span>run in Java 21</span></figcaption>
  <pre>class Thermostat {
    private double temp = 24.0;

    public double getTemp() {       <i>// accessor</i>
        return temp;
    }

    public void setTemp(double t) { <i>// mutator</i>
        if (t &gt;= 16 &amp;&amp; t &lt;= 30)
            temp = t;
        else
            System.out.println("Rejected: " + t);
    }
}

class Room {
    public static void main(String[] args) {
        Thermostat ac = new Thermostat();
        ac.setTemp(45);
        ac.setTemp(19.5);
        System.out.println(ac.getTemp());
    }
}

<i>// Output:</i>
Rejected: 45.0
19.5</pre>
  <p class="bx-code-note">45 is an int argument, widened to the double 45.0, which is why the message prints 45.0.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Trying to skip the setter</b><span>javac 21</span></figcaption>
  <pre>class Hack {
    public static void main(String[] args) {
        Thermostat ac = new Thermostat();
        ac.temp = 45;                <i>// line 4</i>
        System.out.println(ac.getTemp());
    }
}

<i>// javac says:</i>
Hack.java:4: error: temp has private access in Thermostat
        ac.temp = 45;
          ^</pre>
  <p class="bx-code-note">The program never runs. Because temp is private, the only way to change it is setTemp, and setTemp refuses 45. That refusal is data hiding doing its job.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Encapsulation, data hiding and abstraction: the difference</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Term</th><th scope="col">What it means</th><th scope="col">In the Thermostat class</th></tr></thead>
        <tbody>
          <tr><td>Encapsulation</td><td>Data and methods bundled in one class</td><td>temp, getTemp and setTemp live together in Thermostat</td></tr>
          <tr><td>Data hiding</td><td>Data kept out of reach of other classes</td><td>temp is private, so Room cannot touch it</td></tr>
          <tr><td>Abstraction</td><td>Showing what an object does, not how</td><td>Room calls setTemp without knowing the 16 to 30 rule inside it</td></tr>
        </tbody>
      </table>
    </div>
    <ol class="bx-qlist bx-mt-40">
      <li>Data members are usually private; methods that other classes need are public.</li>
      <li>A getter returns the member's type and takes no parameter: <code>double getTemp()</code>.</li>
      <li>A setter is usually <code>void</code> and takes one parameter of the member's type.</li>
      <li>A private method is allowed: it is a helper used only inside its own class.</li>
      <li>A private member is still fully usable inside its own class, including in <code>main</code> if <code>main</code> belongs to that class.</li>
    </ol>
    <p class="bx-mt-40">The last rule surprises students in output questions: a <code>main</code> written inside the same class can read a private member directly. Constructors that fill private members are on <a class="bx-link" href="/icse-class-10-constructors-questions">ICSE Class 10 constructors questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="scope">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What is the scope of a variable?</p>
      <h2>Scope of variables ICSE: class, instance, argument and local variables</h2>
      <p class="bx-lede">The scope of a variable is the part of the program in which it can be used, and its lifetime is how long it keeps its value. The syllabus names four kinds, and each is decided purely by where the variable is declared.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Kind</th><th scope="col">Declared</th><th scope="col">Usable in</th><th scope="col">Lives</th><th scope="col">Default value?</th></tr></thead>
        <tbody>
          <tr><td>Class variable</td><td>In the class, with <code>static</code></td><td>The whole class; outside it as <code>ClassName.var</code> if access allows</td><td>As long as the program runs; one copy</td><td>Yes (0, 0.0, false, null)</td></tr>
          <tr><td>Instance variable</td><td>In the class, without <code>static</code></td><td>All non-static methods; through an object elsewhere</td><td>As long as its object; one copy per object</td><td>Yes</td></tr>
          <tr><td>Argument variable</td><td>In a method or constructor header</td><td>That method body only</td><td>One call of the method</td><td>No, it receives the passed value</td></tr>
          <tr><td>Local variable</td><td>Inside a method or a block <code>{ }</code></td><td>From its declaration to the end of that block</td><td>Until the block ends</td><td>No, must be assigned before use</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Ticket.java</b><span>all four kinds</span></figcaption>
  <pre>class Ticket {
    static int sold = 0;   <i>// class variable</i>
    int seat;              <i>// instance variable</i>

    Ticket(int s) {        <i>// s: argument variable</i>
        seat = s;
        sold++;
    }

    int price(int rows) {  <i>// rows: argument variable</i>
        int base = 150;    <i>// local variable</i>
        return base + rows * 20;
    }

    public static void main(String[] args) {
        Ticket a = new Ticket(12);
        Ticket b = new Ticket(30);
        System.out.println(a.seat + " " + b.seat + " " + Ticket.sold);
        System.out.println(a.price(3));
    }
}

<i>// Output:</i>
12 30 2
210</pre>
  <p class="bx-code-note">Two objects, so two seats but one sold counter. base and rows vanish when price returns.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Shadow.java</b><span>a parameter hides a member</span></figcaption>
  <pre>class Shadow {
    int marks = 40;

    void update(int marks) {
        marks = marks + 5;
        System.out.println(marks + " " + this.marks);
    }

    void fix(int marks) {
        this.marks = marks;
    }

    public static void main(String[] args) {
        Shadow s = new Shadow();
        s.update(70);
        s.fix(62);
        System.out.println(s.marks);
    }
}

<i>// Output:</i>
75 40
62</pre>
  <p class="bx-code-note">Inside update, plain marks means the parameter, so the member stays 40. this.marks always means the member, which is how fix reaches it.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Scope of variables ICSE: five output questions</h3>
    <p>All five use one class Q with <code>static int count = 10;</code>, <code>int n = 1;</code>, <code>static void bump(int count) { count += 5; }</code> and <code>void twice() { int n = 7; n *= 2; this.n += n; }</code>.</p>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code in main</th><th scope="col">Output</th><th scope="col">The scope rule</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>bump(count);</code><br><code>System.out.println(count);</code></td><td class="bx-num">10</td><td>The parameter count is a separate local copy; the class variable is untouched</td></tr>
          <tr><td>2</td><td><code>Q x = new Q();</code><br><code>x.twice();</code><br><code>System.out.println(x.n);</code></td><td class="bx-num">15</td><td>The local n becomes 14; this.n is the member, 1 + 14</td></tr>
          <tr><td>3</td><td><code>Q p = new Q(), r = new Q();</code><br><code>p.count++; r.count++;</code><br><code>System.out.println(Q.count + " " + p.n);</code></td><td class="bx-num">12 1</td><td>Both objects share the one static count; each has its own n</td></tr>
          <tr><td>4</td><td><code>int total = 0;</code><br><code>for (int i = 1; i &lt;= 4; i++) { int sq = i * i; total += sq; }</code><br><code>System.out.println(total);</code></td><td class="bx-num">30</td><td>sq is created afresh each pass; total lives outside the loop and keeps adding</td></tr>
          <tr><td>5</td><td><code>int k = 3;</code><br><code>{ int m = k * 2; k = m + 1; }</code><br><code>System.out.println(k);</code></td><td class="bx-num">7</td><td>m dies at the closing brace, but the change it made to k survives</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Out of scope</b><span>javac 21</span></figcaption>
  <pre>int sum = 0;
for (int i = 1; i &lt;= 5; i++)
    sum += i;
System.out.println(sum + " " + i);   <i>// line 6</i>

<i>// javac says:</i>
Loop.java:6: error: cannot find symbol
  symbol:   variable i</pre>
  <p class="bx-code-note">i was declared in the for header, so it ends with the loop. Declare it before the loop if it is needed afterwards.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Declared twice</b><span>javac 21</span></figcaption>
  <pre>void show(int x) {
    int x = 5;                       <i>// line 3</i>
    System.out.println(x);
}

<i>// javac says:</i>
Dup.java:3: error: variable x is already defined in method show(int)</pre>
  <p class="bx-code-note">A local variable may hide a data member, but it may not reuse the name of a parameter or another local in the same method.</p>
</figure>
    </div>
    <p class="bx-mt-40">More traces of this kind, mixed with every other trap, sit among the <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="program">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How does encapsulation look in a Section B answer?</p>
      <h2>A Section B class with private data members, solved and run</h2>
      <p class="bx-lede">Section B questions rarely say "encapsulation", but a full-marks class answer uses it: private data members, a constructor, public methods that check values before changing them, and a variable description table. Here is an original question in board shape.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question.</b> Define a class MetroCard with private data members holder (String), cardNo (long) and balance (double). Write a parameterised constructor that stores the name and card number and sets the balance to 0. Write public methods: <code>String getHolder()</code> and <code>double getBalance()</code>; <code>void recharge(double amt)</code> which refuses amounts below 100 and adds a bonus of 5% when the amount is 1000 or more; <code>boolean travel(int stations)</code> which charges a fare of 10 for the first station and 4 for every further station, with a ceiling of 60, deducting it only if the balance is enough; and <code>void display()</code>. In main, read the name, card number, a recharge amount and the stations for two trips, and display the card.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MetroCard.java</b><span>private data, public methods</span></figcaption>
  <pre>import java.util.Scanner;
class MetroCard {
    private String holder;    <i>// name on the card</i>
    private long cardNo;      <i>// card number</i>
    private double balance;   <i>// money left on the card</i>

    public MetroCard(String h, long c) {
        holder = h;
        cardNo = c;
        balance = 0.0;
    }

    public String getHolder() {
        return holder;
    }

    public double getBalance() {
        return balance;
    }

    public void recharge(double amt) {
        if (amt &lt; 100) {
            System.out.println("Minimum recharge is 100");
            return;
        }
        double bonus = (amt &gt;= 1000) ? amt * 0.05 : 0;
        balance = balance + amt + bonus;
    }

    public boolean travel(int stations) {
        int fare = 10 + 4 * (stations - 1);
        if (fare &gt; 60)
            fare = 60;
        if (fare &gt; balance) {
            System.out.println("Low balance, fare " + fare);
            return false;
        }
        balance = balance - fare;
        return true;
    }

    public void display() {
        System.out.println("Card " + cardNo + " (" + holder + ")");
        System.out.println("Balance: " + balance);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name and card number: ");
        String n = sc.next();
        long c = sc.nextLong();
        MetroCard card = new MetroCard(n, c);
        System.out.print("Recharge amount: ");
        card.recharge(sc.nextDouble());
        System.out.print("Stations on each of two trips: ");
        int t1 = sc.nextInt();
        int t2 = sc.nextInt();
        card.travel(t1);
        card.travel(t2);
        card.display();
    }
}</pre>
  <p class="bx-code-note">No method lets the balance be set to any value directly. Money comes in only through recharge and goes out only through travel, and both check first.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Scope</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>holder</td><td>String</td><td>instance, private</td><td>card holder's name</td></tr>
              <tr><td>cardNo</td><td>long</td><td>instance, private</td><td>card number</td></tr>
              <tr><td>balance</td><td>double</td><td>instance, private</td><td>money on the card</td></tr>
              <tr><td>h, c</td><td>String, long</td><td>argument</td><td>values passed to the constructor</td></tr>
              <tr><td>amt</td><td>double</td><td>argument</td><td>amount offered for recharge</td></tr>
              <tr><td>bonus</td><td>double</td><td>local</td><td>5% extra on large recharges</td></tr>
              <tr><td>stations</td><td>int</td><td>argument</td><td>stations travelled on a trip</td></tr>
              <tr><td>fare</td><td>int</td><td>local</td><td>fare for one trip, at most 60</td></tr>
              <tr><td>sc, n, c, t1, t2, card</td><td>various</td><td>local to main</td><td>input reader, inputs and the object</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Name and card number: <b>Kabir 40071</b>
Recharge amount: <b>1000</b>
Stations on each of two trips: <b>6 18</b>
Card 40071 (Kabir)
Balance: 960.0

Name and card number: <b>Mira 40072</b>
Recharge amount: <b>50</b>
Minimum recharge is 100
Stations on each of two trips: <b>2 3</b>
Low balance, fare 14
Low balance, fare 18
Card 40072 (Mira)
Balance: 0.0</pre>
  <p class="bx-code-note">Run 1: 1000 plus a bonus of 50 is 1050. Six stations cost 10 + 4 &times; 5 = 30; eighteen would cost 78, so the ceiling of 60 applies. 1050 &minus; 30 &minus; 60 = 960.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">Adding a Scope column to the variable description table, as above, is not required, but it shows the examiner you know the chapter. More classes written to a specification are on <a class="bx-link" href="/icse-class-10-slab-and-bill-programs">ICSE slab and bill programs</a> and <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="questions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What does Section A ask on this chapter?</p>
      <h2>Encapsulation ICSE Class 10 questions with answers</h2>
      <p class="bx-lede">In Section A, the 40 compulsory marks, this chapter turns up as one-mark MCQs and two-mark definitions or differences. Try each one before opening the answer.</p>
    </div>
    <div class="bx-grid-2">
      <div>
        <h3>One-mark questions</h3>
        <ol class="bx-qlist">
          <li>Which access specifier makes a member visible only inside its own class? (a) public (b) protected (c) private (d) default
            <details><summary>Answer</summary> (c) private.</details></li>
          <li>A member declared with no access specifier can be used by:
            <details><summary>Answer</summary> Any class in the same package, but no class outside it.</details></li>
          <li>Which keyword lets a method reach a data member hidden by a parameter of the same name?
            <details><summary>Answer</summary> <code>this</code>, as in <code>this.marks = marks;</code></details></li>
          <li>Name the kind of variable declared inside a method body.
            <details><summary>Answer</summary> A local variable.</details></li>
          <li>Which kind of variable has exactly one copy however many objects exist?
            <details><summary>Answer</summary> A class variable, declared with <code>static</code>.</details></li>
          <li>Which of these is the most open: protected or default?
            <details><summary>Answer</summary> protected. It allows everything default allows, plus subclasses in other packages.</details></li>
        </ol>
      </div>
      <div>
        <h3>Two-mark questions</h3>
        <ol class="bx-qlist">
          <li>Define encapsulation. How does a class implement it?
            <details><summary>Answer</summary> Encapsulation is wrapping data and the methods that operate on it into a single unit. A class implements it by declaring the data members and methods together, and by keeping the data private and reachable only through its public methods.</details></li>
          <li>Differentiate between private and public members.
            <details><summary>Answer</summary> A private member can be used only inside its own class; a public member can be used by any class in any package. Data members are usually private and the methods others need are public.</details></li>
          <li>State the difference between an instance variable and a local variable.
            <details><summary>Answer</summary> An instance variable is declared in the class outside every method, belongs to an object and gets a default value. A local variable is declared inside a method or block, exists only until that block ends and must be assigned before use.</details></li>
          <li>Why is data hiding useful? Give one example.
            <details><summary>Answer</summary> It stops other classes from putting an object into an impossible state. A private balance can be changed only through a method that refuses a negative amount, so the balance is always valid.</details></li>
          <li>What is the scope of an argument variable?
            <details><summary>Answer</summary> The body of the method or constructor in whose header it is declared. It is created when the method is called, holds the passed value, and ends when the method returns.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Short difference questions from every chapter, in the same two-mark shape, are collected on <a class="bx-link" href="/icse-computer-difference-between-questions">ICSE Computer Applications difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is this chapter taught in the mini batch?</p>
      <h2>Learning access and scope by breaking code on purpose</h2>
      <p class="bx-lede">Students remember the access table best after they have watched the compiler refuse a line they were sure would work. So the week is built around predictions that javac then confirms or rejects.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Predict, then compile</h4><p>At the Tuesday 5:30 PM IST class the teacher shows a two-package project on a shared screen. Each student marks which lines will compile before BlueJ is asked, and the wrong guesses are discussed first.</p></li>
      <li class="bx-step"><h4>Scope traced in a table</h4><p>Fragments with shadowed names, static counters and block-local variables are traced on paper, one column per variable, until the four kinds of variable feel different rather than merely sound different.</p></li>
      <li class="bx-step"><h4>A class written by hand</h4><p>On Wednesday at 8:00 PM IST the group writes a Section B class with private members and checking methods, then marks it against the board scheme on screen, including the variable description table.</p></li>
      <li class="bx-step"><h4>Definitions said aloud</h4><p>The one-line definitions of encapsulation, data hiding and each specifier are rehearsed until each student can say them without notes, which also prepares for the internal assessment viva.</p></li>
      <li class="bx-step"><h4>Back in every mock</h4><p>From December, full two-hour mock papers bring the chapter back inside Section A and inside Section B classes, under the real clock.</p></li>
    </ol>
    <p class="bx-mt-40">The wider chapter-by-chapter plan is on <a class="bx-link" href="/icse-computer-applications-notes">ICSE Computer Applications notes</a>, and the oral side is on <a class="bx-link" href="/icse-computer-applications-viva-questions">ICSE Computer Applications viva questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Learn encapsulation in the mini batch, or one to one',
  chooseLede: 'The access experiments, the scope traces and the Section B class are the same in either format. Families in India choose between the fixed evening group of six and a private slot; ICSE students abroad are taught one to one. Billing is monthly and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'Predict-then-compile access drills on a shared screen',
    'A class with private data written and marked each week',
    'Definitions rehearsed aloud for the viva'
  ],
  choosePersonal: [
    'A slot the family picks, in India or overseas',
    'Extra time on whichever of access or scope is shaky',
    'Your child\'s own school classes refactored to private data',
    'Harder shadowing traces once the basics are steady',
    'Same teachers and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who already writes working classes but loses marks on definitions or scope traces usually needs only a handful of one to one sessions on this chapter. A student who is still unsure how a class should be laid out gains more from the steady weekly rhythm of the batch. Fees appear in your own currency.',
  zonesH2: 'Encapsulation lessons for ICSE students abroad',
  zonesLede: 'The 2027 Computer Applications paper is the same in Dubai or Singapore as it is in Kolkata, and so is this chapter. Outside India we teach it one to one, at an early evening hour in the student\'s own time zone.',
  zonesAfter: 'The time is fixed after the free demo and can move around school tests. How classes run for overseas families is set out on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about encapsulation',
  faqH2: 'What students ask about encapsulation and access specifiers',
  faqs: [
    ['What is encapsulation in Java ICSE Class 10?', 'Encapsulation is the wrapping of data and the methods that act on that data into a single unit called a class. In practice it means keeping the data members private and letting other classes use them only through the class\'s public methods, so the class decides what changes are allowed. It is Unit 6 of the 2026-27 ICSE Computer Applications syllabus.'],
    ['What are the access specifiers in Java for ICSE?', 'The syllabus names private, protected and public. private allows access from the same class only; protected from the same package and from subclasses; public from everywhere. A member with no specifier has default, or package, access: any class in the same package can use it, but nothing outside the package can.'],
    ['What is the difference between private, public and protected?', 'They differ in how far a member can be seen. private stops at the class itself. protected reaches the whole package and any subclass, even one in another package. public reaches every class in every package. Data members are usually private and methods that other classes call are public.'],
    ['What is data hiding in ICSE Computer Applications?', 'Data hiding means keeping a class\'s data members private so that code outside the class cannot read or change them directly. Other classes must go through public methods, which can check every value first. For example, a private balance changed only by a method that refuses negative amounts can never become negative.'],
    ['What is the difference between encapsulation and data hiding?', 'Encapsulation is the bundling of data and methods into one class. Data hiding is one result of it: restricting direct access to that data with the private specifier. A class could bundle data and methods yet leave everything public; that is encapsulated but not hidden, and it is weak design.'],
    ['What is the scope of variables in Java ICSE?', 'Scope is the region of a program where a variable can be used. Class variables (static) and instance variables can be used throughout the class. An argument variable can be used only inside its own method. A local variable can be used only from its declaration to the end of the block in which it is declared.'],
    ['What are the four types of variables in ICSE Class 10?', 'Class variables, declared static with one shared copy; instance variables, declared in the class without static, one copy per object; argument variables, declared in a method header to receive values; and local variables, declared inside a method or block. The syllabus groups all four under the scope of variables in the Encapsulation unit.'],
    ['Can a private variable be accessed outside the class?', 'Not directly. The compiler rejects the line with a message such as "temp has private access in Thermostat". The only way in is through a non-private method of the same class, such as a getter that returns the value or a setter that checks and stores a new one.'],
    ['Is protected access asked in ICSE Class 10 even though inheritance is not in the syllabus?', 'The syllabus lists protected among the access specifiers, so a one-mark question on its visibility is fair. You need the rule, not inheritance programs: protected allows access within the same package and from subclasses in other packages. Writing subclasses is an ISC topic.'],
    ['Do you teach encapsulation and access specifiers in live classes?', 'Yes. The ICSE mini batch meets on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST with six students at most. Students predict which lines compile, trace scope fragments and write a class with private data each week. Personalised one to one classes are available at a time the family chooses, in India or abroad.']
  ],
  startH2: 'Try a free live class on encapsulation',
  startHtml: `        <p>In the free demo your child predicts which lines of a small two-package program will compile, sees BlueJ confirm or reject each guess, and then rewrites one class so its data is private. You then hear honestly which parts of the chapter are secure and whether the mini batch or one to one fits better.</p>
        <p>Prefer to look around first? Read <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or see <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Encapsulation 2027'
};
