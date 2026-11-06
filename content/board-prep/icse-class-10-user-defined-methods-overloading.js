// ICSE Class 10 Computer Applications (Java): user-defined methods and
// function (method) overloading. Intent: "function overloading icse class 10",
// "user defined methods icse", "pure and impure methods", "call by value and
// call by reference icse", "method prototype and signature". Distinct from ic11
// (constructors, which can also be overloaded but are a separate chapter) and
// ijv (the program-family hub): this page is the methods chapter itself, with
// three overloading programs in board format, a rule table for which version
// Java picks, and a marking checklist for a 15-mark overloading question.
// Scope (third-party copies of the 2026-27 and 2027 syllabus, checked
// 2026-11-06): forms of methods, prototype and signature, actual and formal
// parameters, static and non-static, pure and impure, pass by value with
// programs, pass by reference as definition with an example, returning values,
// and method overloading. No recursion (out of the 2027 syllabus).
// Every program and snippet on this page was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch files
// outside the repo; outputs are pasted from that run, and the two compile
// errors quoted are javac 21's own messages.
'use strict';

module.exports = {
  slug: 'icse-class-10-user-defined-methods-overloading',
  code: 'ic09',
  board: 'icse',
  themeColor: '#334E7A',
  dateModified: '2026-11-06',
  title: 'Function Overloading ICSE Class 10: Methods, Programs 2027',
  description: 'Function overloading for ICSE Class 10: user-defined methods, three board-format programs run in Java, pure and impure methods, call by value, a checklist.',
  ogTitle: 'Function Overloading and User-Defined Methods, ICSE Class 10',
  ogDesc: 'Method overloading programs written the way ICSE Section B marks them, run in Java 21: which version Java calls and why, prototype and signature, pure and impure methods, call by value and call by reference, and a checklist for the 15 marks.',
  twDesc: 'Function overloading for ICSE Class 10 Java: board-format programs run in Java, pure and impure methods, call by value and reference.',
  headline: 'Function Overloading in ICSE Class 10: User-Defined Methods, Programs and a Marking Checklist',
  courseName: 'ICSE Class 10 Computer Applications (Java) User-Defined Methods and Overloading, Live Online',
  courseDesc: 'Live online teaching of the ICSE Class 10 Computer Applications user-defined methods chapter for the 2027 examination: method prototype and signature, actual and formal parameters, static and non-static methods, pure and impure methods, pass by value and pass by reference, return values and method overloading, with overloading programs written in Section B format and run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Methods',
  navLinks: [['#methods', 'Methods'], ['#overloading', 'Overloading'], ['#which', 'Which runs?'], ['#checklist', 'Checklist'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Methods and overloading']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; User-defined methods 2027',
  h1: 'Function overloading in ICSE Class 10, written the way the marks are given.',
  lede: 'Function overloading in ICSE Class 10 means one class with several methods of the same name that differ in their parameters, and it is one of the most predictable Section B questions in Computer Applications. This page covers the whole user-defined methods chapter around it: prototype and signature, pure and impure methods, call by value and call by reference. Three overloading programs are worked in board format and were run in Java 21. In our live mini batch students write these against the clock and are marked on screen.',
  heroNote: 'Live online &middot; three overloading programs, run &middot; which version Java picks &middot; 15-mark checklist &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live help with ICSE Class 10 user-defined methods and function overloading.',
  timetable: {
    label: 'When methods are practised',
    title: 'Methods practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, method calls traced', '5:30', 'PM IST'],
      ['Wednesday, an overloading program', '8:00', 'PM IST'],
      ['Overloading programs on this page', '3', 'run'],
      ['Checklist points per answer', '7', 'ticked']
    ],
    zones: '<b>In India:</b> methods and overloading are covered on these two evenings of the mini batch. <b>Outside India:</b> a private teacher takes your child through the identical programs and checklist, at an hour that suits the local school day, whether you live in Dubai, Jakarta or Singapore.',
    stamps: ['Section B &middot; 15 marks', 'Written, run, ticked']
  },
  picksH2: 'Three courses that build on methods',
  picksLede: 'Overloading answers are written and marked weekly on our BlueJ course for Classes 9 and 10. After the board, ISC Computer Science splits every program into methods, and a data structures course shows methods with clear inputs and outputs holding larger designs together.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every overloading answer is ticked against the same seven-point checklist.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC, where whole programs are split into methods that pass values and objects to each other.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants to see how methods with clear inputs and outputs make larger programs easy to test.' }
  ],
  capsule: 'Function overloading in ICSE Class 10 Computer Applications means defining two or more methods with the same name in one class, each with a different parameter list: a different number of parameters, different types, or a different order of types. Java decides which one to run from the arguments in the call. The return type alone cannot tell overloaded methods apart. Overloading is how the Class 10 syllabus shows polymorphism, and a Section B question often asks for three versions of one method plus a main method that calls them. Modern Age Coders teaches it live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="methods">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are the parts of a user-defined method?</p>
      <h2>User defined methods ICSE: prototype, signature and parameters</h2>
      <p class="bx-lede">A user-defined method is a named block of code written by the programmer, which can take values in through parameters and send one value back with return. Its first line is the prototype; its name with the parameter types is the signature.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>One method, labelled</b><span>header and body</span></figcaption>
  <pre><i>// prototype (method header):</i>
public double area(double l, double b)
<i>// access   return  name  formal parameters</i>
<i>// specifier type</i>
{
    return l * b;     <i>// body: sends one value back</i>
}

<i>// signature: area(double, double)</i>
<i>// a call with actual parameters:</i>
double r = ob.area(7.5, 4);</pre>
  <p class="bx-code-note">The prototype includes the return type and the access specifier. The signature does not: it is only the name and the parameter types, in order. That difference is exactly why overloading cannot rely on return type.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Term</th><th scope="col">Plain meaning</th><th scope="col">In the example</th></tr></thead>
          <tbody>
            <tr><td>Method prototype</td><td>The first line of a method: access, return type, name, parameter list</td><td><code>public double area(double l, double b)</code></td></tr>
            <tr><td>Method signature</td><td>The name and the types of the parameters, in order</td><td><code>area(double, double)</code></td></tr>
            <tr><td>Formal parameters</td><td>Variables in the header that receive values</td><td><code>l</code>, <code>b</code></td></tr>
            <tr><td>Actual parameters</td><td>Values written in the call</td><td><code>7.5</code>, <code>4</code></td></tr>
            <tr><td>Return type</td><td>Type of the value sent back, or <code>void</code> for none</td><td><code>double</code></td></tr>
            <tr><td>Static method</td><td>Belongs to the class; called without an object</td><td><code>Math.sqrt(16)</code></td></tr>
            <tr><td>Non-static method</td><td>Belongs to each object; called through an object</td><td><code>ob.area(7.5, 4)</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Methods live inside a class, so this chapter leans on the one before it: <a class="bx-link" href="/icse-class-10-class-as-basis-of-computation">class as the basis of all computation</a>. Access specifiers such as public and private are covered on <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="overloading">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What does an overloading answer look like?</p>
      <h2>Function overloading programs in ICSE board format</h2>
      <p class="bx-lede">An overloading question names the class, names the method and describes each version. The answer is the class with every version written exactly as described, plus a main method that creates an object and calls each one. Below are three original questions in that shape, each with a full answer that was run.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question A.</b> Design a class Compute to overload a method <code>work()</code> as follows. (i) <code>void work(int n)</code>: print the sum of the digits of n. (ii) <code>void work(int a, int b)</code>: print the highest common factor of a and b. (iii) <code>void work(String s)</code>: print the number of vowels in s. Write a main method to create an object and call all three.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer A: Compute</b><span>three work() methods</span></figcaption>
  <pre>class Compute {
    <i>// sum of the digits of n</i>
    void work(int n) {
        int sum = 0;
        while (n &gt; 0) {
            sum += n % 10;
            n /= 10;
        }
        System.out.println("Digit sum = " + sum);
    }

    <i>// highest common factor of a and b</i>
    void work(int a, int b) {
        while (b != 0) {
            int r = a % b;
            a = b;
            b = r;
        }
        System.out.println("HCF = " + a);
    }

    <i>// number of vowels in s</i>
    void work(String s) {
        int v = 0;
        s = s.toUpperCase();
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if ("AEIOU".indexOf(ch) != -1)
                v++;
        }
        System.out.println("Vowels = " + v);
    }

    public static void main(String[] args) {
        Compute ob = new Compute();
        ob.work(4072);
        ob.work(84, 36);
        ob.work("Overloading");
    }
}</pre>
</figure>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>one line per call</span></figcaption>
  <pre>Digit sum = 13
HCF = 12
Vowels = 5</pre>
  <p class="bx-code-note">4 + 0 + 7 + 2 is 13. The HCF loop is Euclid's method: 84 and 36, then 36 and 12, then 12 and 0. "Overloading" has O, e, o, a and i.</p>
</figure>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Call</th><th scope="col">Arguments</th><th scope="col">Version run</th></tr></thead>
            <tbody>
              <tr><td><code>ob.work(4072)</code></td><td>one int</td><td><code>work(int)</code></td></tr>
              <tr><td><code>ob.work(84, 36)</code></td><td>two ints</td><td><code>work(int, int)</code></td></tr>
              <tr><td><code>ob.work("Overloading")</code></td><td>one String</td><td><code>work(String)</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Question B.</b> Design a class Area with three overloaded methods <code>double area(...)</code>: one parameter r returns the area of a circle (take pi as 3.14); two parameters return the area of a rectangle; three sides a, b, c return the area of a triangle by Heron's formula. Print each result from main.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer B: Area</b><span>methods that return</span></figcaption>
  <pre>class Area {
    double area(double r) {
        return 3.14 * r * r;
    }

    double area(double l, double b) {
        return l * b;
    }

    double area(double a, double b, double c) {
        double s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    public static void main(String[] args) {
        Area ob = new Area();
        System.out.println("Circle: " + ob.area(5));
        System.out.println("Rectangle: " + ob.area(7.5, 4));
        System.out.println("Triangle: " + ob.area(13, 14, 15));
    }
}

<i>// Output</i>
Circle: 78.5
Rectangle: 30.0
Triangle: 84.0</pre>
  <p class="bx-code-note">These are pure methods: they return a value and print nothing, so main does the printing. The int 5 is widened to double to match <code>area(double)</code>.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer C: Series</b><span>overloading with series</span></figcaption>
  <pre><i>// Question C. Overload void sum():</i>
<i>// sum(int n): 1 + 2 + ... + n</i>
<i>// sum(double x, int n): x/1 + x/2 + ... + x/n</i>
class Series {
    void sum(int n) {
        int s = 0;
        for (int i = 1; i &lt;= n; i++)
            s += i;
        System.out.println("Sum of first " + n + " numbers = " + s);
    }

    void sum(double x, int n) {
        double s = 0;
        for (int i = 1; i &lt;= n; i++)
            s += x / i;
        System.out.println("Series sum = " + s);
    }

    public static void main(String[] args) {
        Series ob = new Series();
        ob.sum(10);
        ob.sum(6.0, 4);
    }
}

<i>// Output</i>
Sum of first 10 numbers = 55
Series sum = 12.5</pre>
  <p class="bx-code-note">6/1 + 6/2 + 6/3 + 6/4 = 6 + 3 + 2 + 1.5. Because x is double, x / i is real division.</p>
</figure>
    </div>
    <p class="bx-mt-40">Overloading questions very often wrap series or string tasks, so practise those bodies on their own as well: <a class="bx-link" href="/icse-class-10-series-programs-java">series programs in Java</a> and <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="which">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which overloaded version does Java call?</p>
      <h2>How Java chooses an overloaded method, and what is not overloading</h2>
      <p class="bx-lede">Java first looks for a version whose parameter types match the arguments exactly. If there is none, it allows a widening conversion, such as char to int or int to double. If two versions fit equally well, the program does not compile.</p>
    </div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Five versions of show()</b><span>run in Java 21</span></figcaption>
  <pre>static void show(int x)    { System.out.println("int " + x); }
static void show(double x) { System.out.println("double " + x); }
static void show(String x) { System.out.println("String " + x); }
static void show(int x, double y) { System.out.println("int,double " + (x + y)); }
static void show(double x, int y) { System.out.println("double,int " + (x * y)); }</pre>
</figure>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Call</th><th scope="col">Output</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td><code>show(7)</code></td><td class="bx-num">int 7</td><td>Exact match for int</td></tr>
          <tr><td><code>show(7.0)</code></td><td class="bx-num">double 7.0</td><td>Exact match for double</td></tr>
          <tr><td><code>show('A')</code></td><td class="bx-num">int 65</td><td>No char version, so char widens to int, the nearest type</td></tr>
          <tr><td><code>show(9L)</code></td><td class="bx-num">double 9.0</td><td>A long cannot shrink to int, but it can widen to double</td></tr>
          <tr><td><code>show(5.0f)</code></td><td class="bx-num">double 5.0</td><td>float widens to double</td></tr>
          <tr><td><code>show("7")</code></td><td class="bx-num">String 7</td><td>A String argument only fits the String version</td></tr>
          <tr><td><code>show(2, 3.5)</code></td><td class="bx-num">int,double 5.5</td><td>The order of types picks the version</td></tr>
          <tr><td><code>show(2.5, 4)</code></td><td class="bx-num">double,int 10.0</td><td>Same two types, other order, other version</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Not overloading 1</b><span>return type only</span></figcaption>
  <pre>int val(int x) { return x; }
double val(int x) { return x; }

<i>// javac: error: method val(int) is</i>
<i>// already defined in class RetOnly</i></pre>
  <p class="bx-code-note">Both have the signature <code>val(int)</code>. A different return type does not make a different method.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Not compiling 2</b><span>an ambiguous call</span></figcaption>
  <pre>static void show(int x, double y) { }
static void show(double x, int y) { }
<i>// ...</i>
show(2, 3);

<i>// javac: error: reference to show is ambiguous</i></pre>
  <p class="bx-code-note">Two ints fit both versions after one widening each, and neither is closer, so Java refuses to pick.</p>
</figure>
    </div>
    <p class="bx-mt-40">Questions that ask for the output of an overloaded call are traced on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>, and comparisons such as pure versus impure or static versus non-static are collected on <a class="bx-link" href="/icse-computer-difference-between-questions">ICSE difference between questions</a>. Constructors can be overloaded with the same rules; that chapter is on <a class="bx-link" href="/icse-class-10-constructors-questions">ICSE Class 10 constructors questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="pure">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What are pure and impure methods, and how are values passed?</p>
      <h2>Pure and impure methods, call by value and call by reference in ICSE</h2>
      <p class="bx-lede">A pure method returns a result that depends only on its parameters and changes nothing outside itself. An impure method changes something outside itself, such as a data member of the object or an array it was given. The syllabus asks for pass by value with programs, and pass by reference as a definition with an example.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>PureImpure</b><span>one of each</span></figcaption>
  <pre>class PureImpure {
    int total = 0;

    <i>// pure: uses only its parameter, changes nothing outside</i>
    int cube(int x) {
        return x * x * x;
    }

    <i>// impure: changes the object's data member</i>
    void addScore(int s) {
        total = total + s;
    }

    public static void main(String[] args) {
        PureImpure ob = new PureImpure();
        System.out.println(ob.cube(3) + " " + ob.cube(3));
        ob.addScore(40);
        ob.addScore(25);
        System.out.println("total = " + ob.total);
    }
}

<i>// Output</i>
27 27
total = 65</pre>
  <p class="bx-code-note">Calling cube(3) twice gives 27 twice and nothing else changes. Each call to addScore leaves the object different, which is what makes it impure.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Passing</b><span>value and reference</span></figcaption>
  <pre>class Passing {
    static void swap(int a, int b) {
        int t = a;
        a = b;
        b = t;
        System.out.println("Inside: a = " + a + ", b = " + b);
    }

    static void doubleAll(int[] arr) {
        for (int i = 0; i &lt; arr.length; i++)
            arr[i] = arr[i] * 2;
    }

    public static void main(String[] args) {
        int a = 30, b = 50;
        swap(a, b);
        System.out.println("After: a = " + a + ", b = " + b);
        int[] m = {3, 5, 7};
        doubleAll(m);
        System.out.println(m[0] + " " + m[1] + " " + m[2]);
    }
}

<i>// Output</i>
Inside: a = 50, b = 30
After: a = 30, b = 50
6 10 14</pre>
  <p class="bx-code-note">swap works on copies of 30 and 50, so main's variables do not change. doubleAll receives a reference to the same array, so its changes are seen in main.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Call (pass) by value</th><th scope="col">Call (pass) by reference</th></tr></thead>
        <tbody>
          <tr><td>What the method receives</td><td>A copy of the value</td><td>A reference to the same object or array</td></tr>
          <tr><td>Types passed this way</td><td>Primitive types: int, double, char, boolean and the rest</td><td>Reference types: arrays and objects</td></tr>
          <tr><td>Change inside the method</td><td>Not seen by the caller</td><td>Changes to the object's contents are seen by the caller</td></tr>
          <tr><td>Example above</td><td><code>swap(a, b)</code></td><td><code>doubleAll(m)</code></td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Strictly, Java copies the reference itself, which is why assigning a new String or a new array to a parameter does not affect the caller. In the ICSE answer, the definitions in the table are what is expected. Ready-to-learn versions of these definitions are in <a class="bx-link" href="/icse-computer-applications-notes">ICSE Computer Applications chapter-wise notes</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="checklist">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is an overloading question marked?</p>
      <h2>A marking checklist for a 15-mark overloading question</h2>
      <p class="bx-lede">An overloading answer is easy to get mostly right and annoyingly easy to lose marks on. Tick these seven points before moving to the next question. They are the points our teachers mark against in class.</p>
    </div>
    <ul class="bx-check">
      <li><b>Class name exactly as given.</b> If the question says class Compute, it is Compute, not Overload or Main.</li>
      <li><b>Method name identical in every version.</b> work, work and work. A version called work2 is not overloading at all.</li>
      <li><b>Parameter types and order as stated.</b> If the question says <code>(double x, int n)</code>, writing <code>(int n, double x)</code> is a different signature.</li>
      <li><b>Return type as stated.</b> void versions print; returning versions return and let main print. Swapping the two changes what the question asked for.</li>
      <li><b>Each body correct on its own.</b> Test each version with one small value you can check by hand, as the outputs above were checked.</li>
      <li><b>main creates an object and calls every version.</b> Non-static methods need <code>ob.work(...)</code>; a version that is never called shows nothing.</li>
      <li><b>Variable descriptions.</b> Meaningful names or a short description of each variable, as the Section B instructions ask.</li>
    </ul>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Common slip</th><th scope="col">Result</th></tr></thead>
        <tbody>
          <tr><td>Two versions differ only in return type</td><td>Does not compile: "already defined"</td></tr>
          <tr><td>Method declared inside main</td><td>Does not compile (illegal start of expression): a method cannot be defined inside another method</td></tr>
          <tr><td>Non-static method called from main without an object</td><td>Does not compile: non-static method cannot be referenced from a static context</td></tr>
          <tr><td>Missing return in a non-void version</td><td>Does not compile: missing return statement</td></tr>
          <tr><td>Digit loop changes n, then n is printed in the message</td><td>Prints 0 instead of the number the user gave</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The same checklist idea, applied to every kind of Section B answer, is on <a class="bx-link" href="/how-to-score-100-in-icse-computer-applications">how to score 100 in ICSE Computer Applications</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is this chapter taught live?</p>
      <h2>Methods and overloading in the mini batch</h2>
      <p class="bx-lede">The chapter is learnt by calling methods, watching which version runs, and writing full answers that are ticked against the checklist.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: guess the version</h4><p>At the 5:30 PM IST class students see a set of overloaded headers and a list of calls, and write which version each call runs before BlueJ settles it.</p></li>
      <li class="bx-step"><h4>Tuesday: pure or impure?</h4><p>Short methods are sorted into pure and impure, and value or reference, out loud, so the theory answers come out in the student's own words.</p></li>
      <li class="bx-step"><h4>Wednesday: one overloading question, timed</h4><p>At the 8:00 PM IST class an original question in board shape is answered on paper in about 20 minutes, then typed and run.</p></li>
      <li class="bx-step"><h4>Ticked on screen</h4><p>The teacher marks each answer against the seven points with the student watching, and the missed point becomes the first thing checked next week.</p></li>
      <li class="bx-step"><h4>Viva and mocks</h4><p>Prototype, signature and overloading are favourite oral questions, so they are rehearsed before internal assessment, and overloading appears in the full two-hour mocks from December.</p></li>
    </ol>
    <p class="bx-mt-40">The oral side is covered on <a class="bx-link" href="/icse-computer-applications-viva-questions">ICSE Computer Applications viva questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Learn methods and overloading in the mini batch, or one to one',
  chooseLede: 'Whichever format you pick, your child gets the same overloading questions, the same drills on which version Java calls and the same seven-point checklist. An Indian family may take the two fixed evenings or a private hour; overseas, only private classes are offered. Billing is month to month and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'No more than six ICSE Class 10 students',
    'Overloaded calls predicted, then run in BlueJ',
    'A timed overloading answer each Wednesday',
    'Every answer ticked against the checklist'
  ],
  choosePersonal: [
    'A time the family sets, in India or abroad',
    'Focus on whichever checklist point keeps slipping',
    'Theory definitions rehearsed until they are exact',
    'Harder overloading questions as confidence grows',
    'Checklist and programs identical to the batch'
  ],
  chooseAfter: 'A student who writes working methods but loses marks on names, signatures or a missing main usually needs only a few one to one sessions with the checklist. A student still unsure how parameters and return values work does better with the steady rhythm of two batch classes a week. Fees show in your own currency.',
  zonesH2: 'Learning methods and overloading from outside India',
  zonesLede: 'A CISCE school in the Gulf or South East Asia writes the very same Computer Applications paper, and an overloading program is worth just as much there. Families abroad get private classes, timed to fit after the local school day.',
  zonesAfter: 'We agree the hour once the free demo is done, and shift it when school tests get in the way. More detail for overseas families is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about methods and overloading',
  faqH2: 'What students ask about function overloading and user-defined methods',
  faqs: [
    ['What is function overloading in Java ICSE Class 10?', 'Function overloading means writing two or more methods with the same name in one class, where each has a different parameter list: a different number of parameters, different types, or the same types in a different order. Java picks the version to run by matching the arguments in the call. It is how the Class 10 syllabus shows polymorphism.'],
    ['Can methods be overloaded by changing only the return type?', 'No. Java tells methods apart by their signature, which is the name and the parameter types. Two methods with the same name and parameters but different return types have the same signature, so javac reports that the method is already defined. The parameter list must differ.'],
    ['What is the difference between a method prototype and a method signature?', 'The prototype is the whole first line of the method: access specifier, return type, name and parameter list, for example public double area(double l, double b). The signature is only the name and the parameter types in order, area(double, double). Overloaded methods must have different signatures.'],
    ['What is the difference between pure and impure methods?', 'A pure method returns a value that depends only on its parameters and does not change anything outside itself, so calling it twice with the same arguments gives the same result. An impure method changes something outside itself, such as a data member of the object or the contents of an array passed to it.'],
    ['What is call by value and call by reference in ICSE?', 'In call by value the method receives a copy of a primitive value, so changes inside the method do not affect the caller. In call by reference the method receives a reference to an object or array, so changes made to its contents are seen by the caller. The syllabus asks for call by value with programs and call by reference as a definition with an example.'],
    ['What are actual and formal parameters?', 'Formal parameters are the variables named in the method header that receive values, such as l and b in area(double l, double b). Actual parameters are the values or variables written in the call, such as 7.5 and 4 in ob.area(7.5, 4). Their number, types and order must match a version of the method.'],
    ['Which method is called if there is no exact match for the argument?', 'Java widens the argument to the nearest type that has a version. A char argument goes to an int version before a double one, and a long or float argument goes to a double version. If two versions fit equally well after widening, the call is ambiguous and the program does not compile.'],
    ['What is the difference between static and non-static methods?', 'A static method belongs to the class and can be called without creating an object, like Math.sqrt. A non-static method belongs to each object and is called through an object, like ob.work(5). Calling a non-static method directly from the static main method, without an object, does not compile.'],
    ['How many marks is a function overloading question in ICSE?', 'An overloading program is usually set as a full Section B question, and each Section B question carries 15 marks; students answer any four of the six. Overloading also appears in Section A as short theory or output questions about which version is called.'],
    ['Do you teach user-defined methods in live classes?', 'Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, students predict which overloaded version runs, write a timed overloading answer and have it marked against a checklist on screen. Families who need another time can choose personalised one to one classes.']
  ],
  startH2: 'Try a free live class on methods and overloading',
  startHtml: `        <p>In the free demo your child predicts which overloaded method each call will run, writes one version of an overloading question with the mentor, and runs it in BlueJ. Afterwards you hear which parts of the methods chapter are secure and which need work, and whether the mini batch or one to one fits better.</p>
        <p>Prefer to see the whole subject first? Look at <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Methods and overloading 2027'
};
