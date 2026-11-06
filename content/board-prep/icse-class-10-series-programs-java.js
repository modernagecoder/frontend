// ICSE Class 10 Computer Applications (Java): series programs. Intent: "series
// programs in java icse", "sum of series program icse", "fibonacci series java
// icse", "series generation bluej", "factorial series icse". Distinct angle:
// series are grouped by the loop pattern that generates them (term from the
// counter, term from the previous term, term from the two previous terms,
// alternating sign, running factorial or running total), and each group has a
// print version and a sum version. Distinct from the overloading page (1 + 2 +
// ... + n and x/1 + x/2 + ... + x/n) and the menu page (2/3 + 4/5 + ...): none
// of those series is repeated here. Inside the 2027 syllabus: for and while
// loops, Math.pow, int, long and double, no recursion (Fibonacci and factorial
// are done with loops only). Every program on this page was compiled with javac
// 21 (OpenJDK 21.0.12.1) and run with java 21 on 2026-11-06 from scratch files
// outside the repo; each output below is pasted from that run, and every sum
// was also checked by hand (2 + 8 + 32 + 128 = 170, 2 + 22 + 222 + 2222 = 2468,
// 1 + 2 + 6 + 24 + 120 = 153, 1 + 3 + 6 + 10 + 15 = 35).
'use strict';

module.exports = {
  slug: 'icse-class-10-series-programs-java',
  code: 'ic24',
  board: 'icse',
  themeColor: '#3B5B4B',
  title: 'Series Programs in Java ICSE Class 10, Solved for 2027',
  description: 'Series programs in Java for ICSE 2027: sum of series, Fibonacci and factorial series grouped by loop pattern, each print and sum version run in Java.',
  ogTitle: 'Series Programs in Java for ICSE, Grouped by Loop Pattern',
  ogDesc: 'Fourteen series for ICSE Class 10 Computer Applications grouped into five loop patterns: term from the counter, term from the previous term, Fibonacci from the two previous terms, alternating signs, and running factorials and totals. Each has a print or sum version with the output of a real Java run.',
  twDesc: 'ICSE Class 10 series programs in Java grouped by loop pattern: sum of series, Fibonacci and factorial series, each run in Java.',
  headline: 'Series Programs in Java for ICSE Class 10, 2027: Fourteen Series Grouped by the Loop Pattern That Generates Them',
  courseName: 'ICSE Class 10 Computer Applications (Java) Series Programs Practice, Live Online',
  courseDesc: 'Live online practice of series programs for the ICSE Class 10 Computer Applications 2027 examination: printing terms and summing series, terms from the loop counter, terms built from the previous term, the Fibonacci series with loops, alternating signs, factorial series and running totals, each planned with a term table, written by hand and run in BlueJ on a shared screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Series',
  navLinks: [['#patterns', 'Loop patterns'], ['#counter', 'From the counter'], ['#previous', 'From the last term'], ['#fibonacci', 'Fibonacci'], ['#factorial', 'Factorial series'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Series programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Series programs 2027',
  h1: 'Series programs in Java for ICSE, grouped by the loop that generates them.',
  lede: 'Series programs in Java for ICSE either print the first n terms of a sequence or add them up. Every one of them is a single loop, and what differs is where the next term comes from: the loop counter, the term before it, the two terms before it, a sign that flips, or a factorial that grows. This page sorts fourteen series into those five loop patterns, gives a print or sum version of each, with the result Java 21 actually printed, and shows how the same work is done in our live mini batch.',
  heroNote: 'Live online &middot; fourteen series, five loop patterns &middot; print and sum versions &middot; Fibonacci and factorial without recursion &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 series programs in Java.',
  timetable: {
    label: 'When series programs are practised',
    title: 'Series practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, term tables on paper', '5:30', 'PM IST'],
      ['Wednesday, sums checked in BlueJ', '8:00', 'PM IST'],
      ['Loop patterns behind every series', '5', 'patterns'],
      ['Sum checked by hand first', 'Every', 'series']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> private series lessons fitted to the family\'s local evening, wherever the ICSE school is.',
    stamps: ['Section B &middot; loops and methods', 'Term table, then code']
  },
  picksH2: 'Courses where series programs are taught',
  picksLede: 'The ICSE Java course where these series form part of the weekly batch work, the Class 11 and 12 Computer Science course where series return inside ISC programs, and the CBSE Class 10 Maths prep course for a student who wants the sequences and progressions behind them on firmer ground.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'The full Class 9 and 10 syllabus in small groups; every series starts as a term table and ends as a BlueJ run.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'After Class 10, ISC brings series back inside longer programs, and recursion joins the toolkit there.' },
    { slug: 'cbse-class-10-maths-board-exam-prep-course', code: 'Maths support / Class 10', h3: 'CBSE Class 10 Maths board exam prep', p: 'For the student who finds arithmetic progressions and powers shaky and wants them steady before writing series in code.' }
  ],
  capsule: 'Series programs in Java for ICSE Class 10 print the first n terms of a sequence or find the sum of a series using one loop. They fall into five loop patterns: the term is a formula in the counter (1/i²), it is built from the previous term (1, 11, 111), it is the sum of the two before it (Fibonacci), the sign alternates, or a factorial or running total grows inside the loop. Use double for fractions and long for large terms. Modern Age Coders teaches them live twice a week in a small ICSE batch in India, with private one to one lessons as the other option.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="patterns">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How do you recognise which loop a series needs?</p>
      <h2>Series generation in BlueJ: the five loop patterns</h2>
      <p class="bx-lede">Write the first four terms in a column, then ask where each term comes from. If you can work out term i from i alone, it is pattern 1. If you need the term before it, it is pattern 2. Two terms before it: pattern 3. A sign that flips: pattern 4. A product or total that keeps growing: pattern 5.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Pattern</th><th scope="col">Example series</th><th scope="col">The line that makes the term</th><th scope="col">On this page</th></tr></thead>
        <tbody>
          <tr><td>1. Term from the counter</td><td class="bx-num">2, 5, 10, 17, ...</td><td><code>term = i * i + 1;</code></td><td>Q2</td></tr>
          <tr><td>2. Term from the previous term</td><td class="bx-num">1, 11, 111, 1111, ...</td><td><code>t = t * 10 + 1;</code></td><td>Q3</td></tr>
          <tr><td>3. Term from the two previous terms</td><td class="bx-num">0, 1, 1, 2, 3, 5, ...</td><td><code>c = a + b; a = b; b = c;</code></td><td>Q4</td></tr>
          <tr><td>4. Alternating sign</td><td class="bx-num">1 - 2 + 3 - 4 + ...</td><td><code>s = s + sign * i; sign = -sign;</code></td><td>Q5</td></tr>
          <tr><td>5. Running factorial or total</td><td class="bx-num">1! + 2! + 3! + ...</td><td><code>f = f * i; s = s + f;</code></td><td>Q5</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Print version or sum version?</h3>
    <p>The loop is the same in both. A print version calls <code>System.out.print(term + " ")</code> inside the loop. A sum version declares <code>s = 0</code> before the loop, adds each term with <code>s = s + term</code>, and prints <code>s</code> once, after the loop. Printing s inside the loop is the most common slip: the answer then shows every partial sum instead of one total.</p>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Choose</th><th scope="col">When</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td><code>int</code></td><td>Whole-number terms that stay small</td><td>Exact and simple</td></tr>
          <tr><td><code>long</code></td><td>Terms that grow fast: 1, 11, 111, powers, factorials</td><td>13! is already past the int limit of about 2.1 billion</td></tr>
          <tr><td><code>double</code></td><td>Any term with division or Math.pow</td><td>1 / (i * i) in int arithmetic is 0 for every i above 1</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="counter">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you write a sum of series program in Java?</p>
      <h2>Sum of series program ICSE: when the term is a formula in i</h2>
      <p class="bx-lede">If term i can be written straight from i, put that formula inside a for loop from 1 to n. Use a decimal point (1.0) or Math.pow whenever the term divides, so Java works in double.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>FromCounter.java</b><span>pattern 1: term from i</span></figcaption>
  <pre>class FromCounter {
    static void printTerms(int n) {              <i>// 2, 5, 10, 17, ...</i>
        for (int i = 1; i &lt;= n; i++)
            System.out.print(i * i + 1 + " ");
        System.out.println();
    }
    static void sumTerms(int n) {                <i>// 1 + 1/4 + 1/9 + ... + 1/n^2</i>
        double s = 0;
        for (int i = 1; i &lt;= n; i++)
            s = s + 1.0 / (i * i);
        System.out.println("Sum = " + s);
    }
    static void oddPowers(double x, int n) {     <i>// x + x^3 + x^5 + ... n terms</i>
        double s = 0;
        for (int i = 1; i &lt;= n; i++)
            s = s + Math.pow(x, 2 * i - 1);
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        printTerms(6);
        sumTerms(4);
        oddPowers(2, 4);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>2 5 10 17 26 37
Sum = 1.4236111111111112
Sum = 170.0</pre>
  <p class="bx-code-note">In printTerms, i * i + 1 is worked out before the String " " joins it, because * and the first + both act on numbers. oddPowers for x = 2 is 2 + 8 + 32 + 128, which is 170; Math.pow returns double, so Java prints 170.0.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Finding the formula for term i</h3>
    <ol class="bx-qlist">
      <li><b>Write i above each term.</b> For 2, 5, 10, 17 the pairs are (1, 2), (2, 5), (3, 10), (4, 17).</li>
      <li><b>Compare with i, i², 2i and 2i - 1.</b> Each term is one more than i², so term = i * i + 1.</li>
      <li><b>For powers, look at the exponents.</b> x, x³, x⁵ have exponents 1, 3, 5, which is 2i - 1.</li>
      <li><b>Check term 4 with the formula</b> before writing the loop. If it is wrong, the whole series is wrong.</li>
    </ol>
    <p class="bx-mt-40">
      Math.pow, Math.sqrt and the other Math methods a series may need, with their return types, are on
      <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="previous">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What if each term depends on the one before it?</p>
      <h2>Series built from the previous term: 1, 11, 111 and friends</h2>
      <p class="bx-lede">Keep the current term in a variable outside the loop and update it once per pass. The update line is the whole idea: multiply by 10 and add a digit, multiply by a ratio, or add a growing gap.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>FromPrevious.java</b><span>pattern 2: term from the last term</span></figcaption>
  <pre>class FromPrevious {
    static void ones(int n) {                    <i>// 1, 11, 111, ...</i>
        long t = 0;
        for (int i = 1; i &lt;= n; i++) {
            t = t * 10 + 1;
            System.out.print(t + " ");
        }
        System.out.println();
    }
    static void sumTwos(int n) {                 <i>// 2 + 22 + 222 + ...</i>
        long t = 0, s = 0;
        for (int i = 1; i &lt;= n; i++) {
            t = t * 10 + 2;
            s = s + t;
        }
        System.out.println("Sum = " + s);
    }
    static void times3(int n) {                  <i>// 1, 3, 9, 27, ...</i>
        long t = 1;
        for (int i = 1; i &lt;= n; i++) {
            System.out.print(t + " ");
            t = t * 3;
        }
        System.out.println();
    }
    static void growingGaps(int n) {             <i>// 1, 2, 4, 7, 11, ...</i>
        int t = 1;
        for (int i = 1; i &lt;= n; i++) {
            System.out.print(t + " ");
            t = t + i;
        }
        System.out.println();
    }
    public static void main(String args[]) {
        ones(5);
        sumTwos(4);
        times3(7);
        growingGaps(8);
    }
}</pre>
</figure>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>1 11 111 1111 11111
Sum = 2468
1 3 9 27 81 243 729
1 2 4 7 11 16 22 29</pre>
  <p class="bx-code-note">Look at the order of the two lines inside each loop. In ones the term is updated and then printed, so t starts at 0. In times3 it is printed and then updated, so t starts at 1. Both orders work if the starting value matches.</p>
</figure>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Pass i</th><th scope="col">t = t * 10 + 2</th><th scope="col">s = s + t</th></tr></thead>
            <tbody>
              <tr><td class="bx-num">1</td><td class="bx-num">2</td><td class="bx-num">2</td></tr>
              <tr><td class="bx-num">2</td><td class="bx-num">22</td><td class="bx-num">24</td></tr>
              <tr><td class="bx-num">3</td><td class="bx-num">222</td><td class="bx-num">246</td></tr>
              <tr><td class="bx-num">4</td><td class="bx-num">2222</td><td class="bx-num">2468</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">The growing-gaps series adds 1, then 2, then 3: the gap is the counter itself. Series like this are easy to misread as a formula in i; the term table in Q1 tells you quickly that the differences, not the terms, follow i. The loop habits behind all of this are practised on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="fibonacci">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do you print the Fibonacci series in Java for ICSE?</p>
      <h2>Fibonacci series Java ICSE: two variables that slide along</h2>
      <p class="bx-lede">Each Fibonacci term is the sum of the two before it, starting 0 and 1. Keep the last two terms in a and b; each pass prints a, makes c = a + b, then slides the pair one place: a takes b, and b takes c. No recursion is needed, and recursion is not in the ICSE 2027 syllabus.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Fibonacci.java</b><span>first n terms and their sum</span></figcaption>
  <pre>import java.util.Scanner;
class Fibonacci {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many terms? ");
        int n = sc.nextInt();
        int a = 0, b = 1, sum = 0;
        for (int i = 1; i &lt;= n; i++) {
            System.out.print(a + " ");
            sum = sum + a;
            int c = a + b;      <i>// next term</i>
            a = b;              <i>// slide the pair along</i>
            b = c;
        }
        System.out.println();
        System.out.println("Sum of the terms = " + sum);
    }
}</pre>
  <p class="bx-code-note">The order a = b, then b = c matters. Swap those two lines and both a and b take the new value, so the run prints 0 1 2 4 8 16, doubling instead of Fibonacci.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>number of terms to print</td></tr>
              <tr><td>a, b</td><td>int</td><td>the current term and the one after it</td></tr>
              <tr><td>c</td><td>int</td><td>the next term, a + b</td></tr>
              <tr><td>sum</td><td>int</td><td>total of the printed terms</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter, 1 to n</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>How many terms? <b>10</b>
0 1 1 2 3 5 8 13 21 34
Sum of the terms = 88</pre>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Fibonacci terms up to a limit: while, not for</h3>
    <p>When the question gives a largest value instead of a number of terms, the count is unknown, so use while with the limit as the condition.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>FibLimit.java</b><span>terms up to 100</span></figcaption>
  <pre>class FibLimit {
    public static void main(String args[]) {
        int a = 0, b = 1;
        while (a &lt;= 100) {
            System.out.print(a + " ");
            int c = a + b;
            a = b;
            b = c;
        }
        System.out.println();
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>0 1 1 2 3 5 8 13 21 34 55 89</pre>
  <p class="bx-code-note">The next term, 144, fails a &lt;= 100, so the loop stops after 89. A for loop to a fixed n could not know to stop here.</p>
</figure>
    </div>
    <p class="bx-mt-40">
      Checking whether one given number is a Fibonacci number, and other single-number tests, sit with the number families on
      <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java for ICSE</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="factorial">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do you handle alternating signs and factorial series?</p>
      <h2>Factorial series ICSE and alternating signs, in one loop each</h2>
      <p class="bx-lede">For a sign that flips, keep a variable <code>sign</code> that starts at 1 and is multiplied by -1 every pass, or test whether i is even. For a factorial series, never write a second loop to work out each factorial: multiply the running factorial by i, and it is ready for this term.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>SignSeries.java</b><span>pattern 4: alternating sign</span></figcaption>
  <pre>class SignSeries {
    static void plusMinus(int n) {               <i>// 1 - 2 + 3 - 4 + ... n terms</i>
        int s = 0, sign = 1;
        for (int i = 1; i &lt;= n; i++) {
            s = s + sign * i;
            sign = -sign;
        }
        System.out.println("Sum = " + s);
    }
    static void powerOverIndex(double x, int n) { <i>// x - x^2/2 + x^3/3 - ...</i>
        double s = 0;
        for (int i = 1; i &lt;= n; i++) {
            double term = Math.pow(x, i) / i;
            if (i % 2 == 0)
                s = s - term;
            else
                s = s + term;
        }
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        plusMinus(7);
        plusMinus(10);
        powerOverIndex(2, 4);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>Sum = 4
Sum = -5
Sum = -1.3333333333333335</pre>
  <p class="bx-code-note">For x = 2 and four terms: 2 - 2 + 8/3 - 4, which is -4/3. The two methods show both ways of flipping the sign; either earns the marks.</p>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>FactSeries.java</b><span>pattern 5: running factorial and total</span></figcaption>
  <pre>class FactSeries {
    static void sumOfFactorials(int n) {         <i>// 1! + 2! + 3! + ... + n!</i>
        long f = 1, s = 0;
        for (int i = 1; i &lt;= n; i++) {
            f = f * i;           <i>// f is now i!</i>
            s = s + f;
        }
        System.out.println("Sum = " + s);
    }
    static void expSeries(double x, int n) {     <i>// 1 + x/1! + x^2/2! + ... n terms after 1</i>
        double term = 1, s = 1;
        for (int i = 1; i &lt;= n; i++) {
            term = term * x / i;  <i>// builds x^i / i! from the last term</i>
            s = s + term;
        }
        System.out.println("Sum = " + s);
    }
    static void runningTotals(int n) {           <i>// 1 + (1+2) + (1+2+3) + ...</i>
        int p = 0, s = 0;
        for (int i = 1; i &lt;= n; i++) {
            p = p + i;           <i>// p is now 1 + 2 + ... + i</i>
            s = s + p;
        }
        System.out.println("Sum = " + s);
    }
    public static void main(String args[]) {
        sumOfFactorials(5);
        expSeries(1, 10);
        runningTotals(5);
    }
}</pre>
</figure>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>Sum = 153
Sum = 2.7182818011463845
Sum = 35</pre>
  <p class="bx-code-note">1 + 2 + 6 + 24 + 120 is 153. With x = 1 the exp series adds 1/i! terms and creeps towards the number e, 2.71828. The running total adds 1, 3, 6, 10 and 15.</p>
</figure>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">i</th><th scope="col">f = f * i</th><th scope="col">s = s + f</th></tr></thead>
            <tbody>
              <tr><td class="bx-num">1</td><td class="bx-num">1</td><td class="bx-num">1</td></tr>
              <tr><td class="bx-num">2</td><td class="bx-num">2</td><td class="bx-num">3</td></tr>
              <tr><td class="bx-num">3</td><td class="bx-num">6</td><td class="bx-num">9</td></tr>
              <tr><td class="bx-num">4</td><td class="bx-num">24</td><td class="bx-num">33</td></tr>
              <tr><td class="bx-num">5</td><td class="bx-num">120</td><td class="bx-num">153</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">
      Overloading questions often carry a series in one of their versions; that shape is covered on
      <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading for ICSE Class 10</a>, or as one option of a switch menu on
      <a class="bx-link" href="/icse-class-10-menu-driven-programs">menu driven programs for ICSE</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are series taught in the live class?</p>
      <h2>Term table, code, hand check, BlueJ: a series lesson in the mini batch</h2>
      <p class="bx-lede">The hard part of a series question is not the loop but reading the series correctly. Lessons spend their time there.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>A new series in board wording</h4><p>At the Tuesday 5:30 PM IST class, students get a series they have not met, written the way the paper writes it, sometimes with an x to read in.</p></li>
      <li class="bx-step"><h4>The term table</h4><p>Each student writes i beside the first four terms and names the loop pattern, then writes the one line that makes the term.</p></li>
      <li class="bx-step"><h4>Hand-written program and a hand sum</h4><p>The program is written on paper with a variable description table, and the sum of the first three terms is worked by hand as the check value.</p></li>
      <li class="bx-step"><h4>Run in BlueJ on a shared screen</h4><p>At the Wednesday 8:00 PM IST class the programs are run. If BlueJ disagrees with the hand sum, the group traces the loop to find whether the term, the type or the print position was wrong.</p></li>
      <li class="bx-step"><h4>Series inside overloading and full mocks</h4><p>Later in the year the same families come back as parts of whole mock papers, sat in two hours and marked question by question.</p></li>
    </ol>
    <p class="bx-mt-40">
      Every other Section B family has its own page, linked from <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>, and nested loops that print shapes instead of numbers are on
      <a class="bx-link" href="/icse-class-10-pattern-programs-java">pattern programs for ICSE</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise series in the mini batch, or one to one',
  chooseLede: 'In both formats series are read with a term table, written by hand, checked against a hand sum and then run. Families in India choose between the fixed evening mini batch and a private slot; ICSE students abroad study one to one. Billing is monthly with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A fresh series in board wording most weeks',
    'Hand sums compared with BlueJ in front of the group',
    'Series met again as parts of longer questions'
  ],
  choosePersonal: [
    'Lesson times fixed around your child\'s week',
    'Slow, careful work on reading the series, the usual sticking point',
    'Series taken from the school\'s own exercises',
    'Harder x-series and factorial series once the basics hold',
    'The batch teachers and syllabus, one student at a time'
  ],
  chooseAfter: 'Students who can code a loop but misread what the series is asking often need only a handful of one to one sessions on term tables. Students who want every Section B family covered in a steady rhythm are better placed in the twice-weekly batch. Each format\'s fee is listed in your local currency.',
  zonesH2: 'Series program practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India sit the same Computer Applications paper, so the same series turn up in Section B, often inside an overloading question. Families abroad book private lessons, timed for the end of their school day.',
  zonesAfter: 'The slot is settled after the free demo and shifts around school tests when needed. Details for overseas families are on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about series programs',
  faqH2: 'What students ask about ICSE series programs',
  faqs: [
    ['How do you write a series program in Java?', 'Write the first four terms with their positions 1, 2, 3, 4, and find where each term comes from: a formula in the position, the previous term, the two previous terms, a flipping sign or a growing factorial. Then write one for loop from 1 to n that makes the term and either prints it or adds it to a sum.'],
    ['How do you find the sum of a series in Java?', 'Declare a sum variable before the loop and set it to 0. Inside the loop, work out the current term and add it with s = s + term. Print s once, after the loop ends. Use double for s whenever any term involves division or Math.pow.'],
    ['How do you print the Fibonacci series in Java without recursion?', 'Start with a = 0 and b = 1. In each pass of a loop print a, then set c = a + b, a = b and b = c. For the first n terms use a for loop; for all terms up to a limit use a while loop that runs as long as a has not passed the limit. Recursion is not needed and is not in the ICSE 2027 syllabus.'],
    ['How do you write a factorial series program in Java?', 'Keep a running factorial f that starts at 1 and becomes f * i in each pass, so it equals i! for the current term. Add f, or a term built from it, to the sum. Do not write a separate inner loop for each factorial. Use long, because factorials pass the int limit at 13!.'],
    ['Why does my series program print 0 for every term?', 'Usually because of integer division. In 1 / (i * i) both sides are int, so the answer is 0 for every i above 1. Write 1.0 / (i * i) or cast to double, and make the sum variable a double.'],
    ['How do you handle alternating plus and minus signs in a series?', 'Keep an int sign that starts at 1, multiply each term by sign, and set sign = -sign at the end of every pass. Or test i % 2: add the term when i is odd and subtract it when i is even. Both are accepted.'],
    ['How do you print the series 1, 11, 111, 1111 in Java?', 'Keep a term t that starts at 0, and in each pass set t = t * 10 + 1 and print it. The same idea with + 2 gives 2, 22, 222. Use long, because these terms grow by a factor of ten each time.'],
    ['Which is better for series, a for loop or a while loop?', 'Use for when the number of terms n is given, because the counter doubles as the term position. Use while when the series must stop at a value, such as all terms up to 100, because the number of passes is not known in advance.'],
    ['Are series programs important for ICSE Class 10?', 'They matter a lot. Series test loops, data types and careful reading at once. They come as whole Section B programs, and also as one branch of a larger overloading or menu program. Getting the term right is most of the work.'],
    ['Do you teach series programs in live classes?', 'We do. Each week the small ICSE batch meets a new series, reads it with a term table, writes the program by hand, checks a hand sum and runs it in BlueJ on a shared screen. Private one to one lessons are the alternative when batch times clash.']
  ],
  startH2: 'Book a free series lesson, live',
  startHtml: `        <p>During the demo your child reads an unfamiliar series with the mentor, builds the term table, writes the loop and checks a hand sum against BlueJ. Afterwards you get an honest view of where the gaps are, reading, types or loops, and whether the mini batch or one to one suits better.</p>
        <p>Planning the whole year? Start from <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Series programs 2027'
};
