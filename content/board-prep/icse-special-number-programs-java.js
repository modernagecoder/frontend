// ICSE Class 10 Computer Applications (Java): special number programs. Intent:
// "special number programs in java icse", "spy number program", "niven number
// java", "duck number icse", "armstrong number program icse", "neon magic
// perfect number java". Distinct from the two blog lists (one standalone class
// per number with a fixed value) and the programs hub (no number family page):
// this page is built round one digit-extraction template reused through
// methods, a seventeen-row definitions table, a menu program, a range scan and
// combined checks, all with new inputs. No year tags: none was checked against
// a real paper, so none is printed. Inside the 2027 syllabus: no recursion.
// Every program on this page was compiled with javac 21 (OpenJDK 21.0.12) and
// run with java 21 on 2026-11-06 from scratch files outside the repo, fed the
// sample inputs shown; each sample output is pasted from that run. Every
// example in the definitions table was recomputed in Java the same day.
'use strict';

module.exports = {
  slug: 'icse-special-number-programs-java',
  code: 'ic04',
  board: 'icse',
  themeColor: '#4F4A6E',
  title: 'Special Number Programs in Java for ICSE Class 10, 2027',
  description: 'Special number programs in Java for ICSE: spy, Niven, duck, Armstrong, neon, magic and perfect, built on one digit template, every program run in Java 21.',
  ogTitle: 'Special Number Programs in Java for ICSE, on One Template',
  ogDesc: 'A seventeen-row definitions table of the special numbers ICSE Class 10 programs use, one reusable digit-extraction template, and full board-style programs for spy, Niven, neon, Armstrong, duck, magic, perfect, special and Disarium numbers, each with a variable description table and a real sample run.',
  twDesc: 'Spy, Niven, duck, Armstrong, neon, magic and perfect number programs for ICSE Class 10, built on one digit template and run in Java.',
  headline: 'Special Number Programs in Java for ICSE Class 10: One Digit Template, Seventeen Definitions, Full Programs',
  courseName: 'ICSE Class 10 Computer Applications (Java) Number Programs Practice, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications number programs for the 2027 examination: the digit-extraction loop, user-defined methods for digit sum, product and count, spy, Niven, neon, Armstrong, duck, magic, perfect, special and Disarium numbers, menu-driven checks and range scans, written by hand and then run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Number programs',
  navLinks: [['#definitions', 'Definitions'], ['#template', 'The template'], ['#menu', 'Spy, Niven, neon'], ['#more-programs', 'More programs'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Special number programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Special number programs 2027',
  h1: 'Special number programs in Java for ICSE, built on one template.',
  lede: 'Special number programs in Java for ICSE ask you to test whether a number such as 1124 or 156 has a named property: spy, Niven, neon, Armstrong and a dozen more. They look like seventeen different programs. They are really one loop that peels off the last digit, used seventeen ways. This page gives the definitions in one table, the template once, and full programs with Scanner input, comments, variable tables and sample runs from Java 21. In our live mini batch each new number is written from the template, not memorised.',
  heroNote: 'Live online &middot; 17 definitions in one table &middot; one digit template &middot; every program run in Java 21 &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE special number programs in Java.',
  timetable: {
    label: 'When number programs are drilled',
    title: 'Number drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, one new number from the template', '5:30', 'PM IST'],
      ['Wednesday, menu and range programs', '8:00', 'PM IST'],
      ['Special numbers defined', '17', 'in the table'],
      ['Digit loops traced by hand', 'Each', 'week']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same number programs one to one, at an evening hour that suits ICSE families in the UAE, Qatar, Singapore and beyond.',
    stamps: ['Section B &middot; 15 marks each', 'One loop, many numbers']
  },
  picksH2: 'Courses where number programs are taught',
  picksLede: 'The ICSE Java course where the mini batch builds these programs, the Class 11 and 12 Computer Science course where ISC asks for the same numbers inside classes, and the data structures course for a student curious about how fast these loops really are.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every special number is written from one digit template and run in BlueJ.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC Computer Science, where these numbers come back as class methods and with recursion.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who asks why a range scan is slow and wants to count the steps properly.' }
  ],
  capsule: 'Special number programs in Java for ICSE test a number for a named property using its digits. A spy number has equal digit sum and digit product (1124); a Niven number is divisible by its digit sum (156); a neon number equals the digit sum of its square (9); an Armstrong number equals the sum of its digits each raised to the number of digits (153); a duck number has a zero after its first non-zero digit (4070). All of them use one loop: d = n % 10, use d, n = n / 10. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="definitions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What does each special number mean?</p>
      <h2>Special numbers in Java ICSE: seventeen definitions in one table</h2>
      <p class="bx-lede">Each special number is defined by one rule about its digits, factors or square. The example in every row was recomputed in Java. The last column names the change you make to the digit template for that number.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Number</th><th scope="col">Rule in one sentence</th><th scope="col">Example, checked</th><th scope="col">What changes in the template</th></tr></thead>
        <tbody>
          <tr><td>Spy</td><td>Sum of digits equals product of digits</td><td class="bx-num">1124: 1+1+2+4 = 8 = 1x1x2x4</td><td>Keep a sum and a product</td></tr>
          <tr><td>Niven (Harshad)</td><td>Divisible by the sum of its digits</td><td class="bx-num">156: sum 12, 156 / 12 = 13</td><td>Sum, then n % sum == 0</td></tr>
          <tr><td>Neon</td><td>Sum of the digits of its square equals the number</td><td class="bx-num">9: 81, 8+1 = 9</td><td>Run the loop on n * n</td></tr>
          <tr><td>Armstrong</td><td>Sum of each digit raised to the number of digits equals the number</td><td class="bx-num">153 = 1+125+27; 1634</td><td>Count digits first, add Math.pow(d, k)</td></tr>
          <tr><td>Duck</td><td>Has a zero somewhere after its first non-zero digit</td><td class="bx-num">4070 yes; 0045 no</td><td>Read as a String, test charAt</td></tr>
          <tr><td>Magic</td><td>Adding the digits again and again ends at 1</td><td class="bx-num">199, 19, 10, 1</td><td>Repeat the sum while the result is above 9</td></tr>
          <tr><td>Perfect</td><td>Sum of its factors below itself equals the number</td><td class="bx-num">28 = 1+2+4+7+14</td><td>No digits: loop over factors</td></tr>
          <tr><td>Automorphic</td><td>Its square ends in the number itself</td><td class="bx-num">76: 5776</td><td>Compare n * n % 10<sup>k</sup> with n</td></tr>
          <tr><td>Disarium</td><td>Sum of each digit raised to its position from the left equals the number</td><td class="bx-num">135 = 1+9+125</td><td>Power k, then k-- each pass</td></tr>
          <tr><td>Special (Krishnamurthy)</td><td>Sum of the factorials of its digits equals the number</td><td class="bx-num">145 = 1!+4!+5!</td><td>Add fact(d)</td></tr>
          <tr><td>Buzz</td><td>Divisible by 7 or ends in 7</td><td class="bx-num">49 and 107</td><td>No loop: n % 7 and n % 10</td></tr>
          <tr><td>Pronic</td><td>Product of two consecutive integers</td><td class="bx-num">56 = 7x8</td><td>Loop i while i * (i + 1) &lt;= n</td></tr>
          <tr><td>Sunny</td><td>The next number, n + 1, is a perfect square</td><td class="bx-num">80: 81 = 9x9</td><td>Math.sqrt(n + 1) has no fraction</td></tr>
          <tr><td>Tech</td><td>Even digit count; square of the sum of its two halves equals the number</td><td class="bx-num">2025: (20+25)<sup>2</sup></td><td>Split with / and % by 10<sup>k/2</sup></td></tr>
          <tr><td>Happy</td><td>Replacing it by the sum of the squares of its digits, again and again, ends at 1</td><td class="bx-num">19, 82, 68, 100, 1</td><td>Add d * d, repeat</td></tr>
          <tr><td>Palindrome number</td><td>Reads the same reversed</td><td class="bx-num">12321</td><td>Build rev = rev * 10 + d</td></tr>
          <tr><td>Twisted prime</td><td>Prime, and still prime with its digits reversed</td><td class="bx-num">13 and 31</td><td>Reverse, then two prime checks</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      We do not attach board years to these numbers. A year tag is only worth printing once it has been checked against the actual paper, and the programs here are written to teach the method, not to copy a question. Schools sometimes define a number slightly differently (Magic and Duck vary most), so when a question gives its own definition, that definition wins.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="template">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Is there one method that works for all of them?</p>
      <h2>The digit-extraction template every number program uses</h2>
      <p class="bx-lede">Yes. Take the last digit with <code>n % 10</code>, use it, and drop it with <code>n / 10</code>, until n is 0. Work on a copy so the original number is still there for the final comparison.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The template</b><span>three lines in a loop</span></figcaption>
  <pre>int t = n;            <i>// copy: keep n for the answer</i>
while (t &gt; 0) {
    int d = t % 10;   <i>// 1. take the last digit</i>
    <b>... use d ...</b>       <i>// 2. sum, product, power, factorial</i>
    t = t / 10;       <i>// 3. drop the last digit</i>
}
<i>// now compare the result with n</i></pre>
  <p class="bx-code-note">Only step 2 changes from number to number. Steps 1 and 3 never change.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Pass</th><th scope="col">d = t % 10</th><th scope="col">sum</th><th scope="col">product</th><th scope="col">t after</th></tr></thead>
          <tbody>
            <tr><td>start</td><td>none</td><td class="bx-num">0</td><td class="bx-num">1</td><td class="bx-num">1124</td></tr>
            <tr><td>1</td><td class="bx-num">4</td><td class="bx-num">4</td><td class="bx-num">4</td><td class="bx-num">112</td></tr>
            <tr><td>2</td><td class="bx-num">2</td><td class="bx-num">6</td><td class="bx-num">8</td><td class="bx-num">11</td></tr>
            <tr><td>3</td><td class="bx-num">1</td><td class="bx-num">7</td><td class="bx-num">8</td><td class="bx-num">1</td></tr>
            <tr><td>4</td><td class="bx-num">1</td><td class="bx-num">8</td><td class="bx-num">8</td><td class="bx-num">0, loop ends</td></tr>
          </tbody>
        </table>
        <p class="bx-mt-40">The dry run for 1124: sum 8 equals product 8, so 1124 is a spy number. Notice the product starts at 1 and the sum at 0; starting the product at 0 is the most common reason a spy program says no to every number.</p>
      </div>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Copy before the loop</h3><p>The loop destroys t. If you loop on n itself, the final <code>sum == n</code> compares against 0 and every answer is wrong.</p></div>
      <div class="bx-card"><h3>Right digit first</h3><p>The template meets the digits from the right. That is fine for sums and products; for position-based rules such as Disarium, count the digits first and count down.</p></div>
      <div class="bx-card"><h3>Guard the zero</h3><p>For Niven, a 0 input would mean dividing by a digit sum of 0. One <code>n &gt; 0</code> test in the condition avoids the crash.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="menu">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you write the spy, Niven and neon programs?</p>
      <h2>Spy number program, Niven number in Java and neon, as one menu program</h2>
      <p class="bx-lede">Put the template into small methods, <code>sumDigits</code>, <code>productDigits</code> and <code>countDigits</code>, and each check becomes one line. A switch menu over three numbers is exactly the shape of many Section B questions, and it shows user-defined methods at the same time.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Digits.java</b><span>methods plus a menu</span></figcaption>
  <pre>import java.util.Scanner;
class Digits {
    <i>// The one template: take the last digit, use it, drop it.</i>
    static int sumDigits(int n) {
        int s = 0;
        while (n &gt; 0) {
            int d = n % 10;     <i>// last digit</i>
            s = s + d;          <i>// use it</i>
            n = n / 10;         <i>// drop it</i>
        }
        return s;
    }
    static int productDigits(int n) {
        int p = 1;
        while (n &gt; 0) {
            p = p * (n % 10);
            n = n / 10;
        }
        return p;
    }
    static int countDigits(int n) {
        int c = 0;
        do {
            c++;
            n = n / 10;
        } while (n &gt; 0);
        return c;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Spy  2. Niven  3. Neon");
        System.out.print("Enter choice and number: ");
        int ch = sc.nextInt();
        int n = sc.nextInt();
        switch (ch) {
            case 1:
                if (sumDigits(n) == productDigits(n))
                    System.out.println(n + " is a Spy number");
                else
                    System.out.println(n + " is not a Spy number");
                break;
            case 2:
                if (n &gt; 0 &amp;&amp; n % sumDigits(n) == 0)
                    System.out.println(n + " is a Niven number");
                else
                    System.out.println(n + " is not a Niven number");
                break;
            case 3:
                if (sumDigits(n * n) == n)
                    System.out.println(n + " is a Neon number");
                else
                    System.out.println(n + " is not a Neon number");
                break;
            default:
                System.out.println("Wrong choice");
        }
    }
}</pre>
  <p class="bx-code-note">countDigits uses do-while so that 0 is counted as one digit; it is ready for Armstrong and Disarium.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>the number to test (a copy inside each method)</td></tr>
              <tr><td>ch</td><td>int</td><td>menu choice, 1 to 3</td></tr>
              <tr><td>d</td><td>int</td><td>the last digit</td></tr>
              <tr><td>s, p, c</td><td>int</td><td>digit sum, digit product, digit count</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>1. Spy  2. Niven  3. Neon
Enter choice and number: <b>1 1124</b>
1124 is a Spy number

1. Spy  2. Niven  3. Neon
Enter choice and number: <b>1 1236</b>
1236 is not a Spy number

1. Spy  2. Niven  3. Neon
Enter choice and number: <b>2 156</b>
156 is a Niven number

1. Spy  2. Niven  3. Neon
Enter choice and number: <b>3 9</b>
9 is a Neon number</pre>
  <p class="bx-code-note">1236 fails: the sum is 12 but the product is 36.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Spy numbers in a range, and why neon numbers are rare</h3>
    <p>A favourite variation asks for every number of a kind between two limits. Wrap the check in a for loop. The same methods do the work.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>RangeScan.java</b><span>check every number in a range</span></figcaption>
  <pre>class RangeScan {
    static int sumDigits(int n) {
        int s = 0;
        while (n &gt; 0) { s += n % 10; n /= 10; }
        return s;
    }
    static int productDigits(int n) {
        int p = 1;
        while (n &gt; 0) { p *= n % 10; n /= 10; }
        return p;
    }
    public static void main(String args[]) {
        System.out.print("Spy numbers from 100 to 1500: ");
        int c = 0;
        for (int n = 100; n &lt;= 1500; n++)
            if (sumDigits(n) == productDigits(n)) { System.out.print(n + " "); c++; }
        System.out.println("(" + c + ")");
        System.out.print("Neon numbers below 10000: ");
        for (int n = 1; n &lt; 10000; n++)
            if (sumDigits(n * n) == n) System.out.print(n + " ");
        System.out.println();
    }
}</pre>
  <p class="bx-code-note">Short methods on one line save space here; in an exam answer, spread them out and comment them as in Digits.java.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>Java 21</span></figcaption>
  <pre>Spy numbers from 100 to 1500: 123 132 213 231 312 321 1124 1142 1214 1241 1412 1421 (12)
Neon numbers below 10000: 1 9</pre>
  <p class="bx-code-note">The spy numbers in this range are just two digit families rearranged: 1, 2, 3 and 1, 1, 2, 4. Between 1 and 9999 only 1 and 9 are neon numbers, which is why neon questions nearly always give you the number to test.</p>
</figure>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="more-programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What about Armstrong, duck, magic and perfect numbers?</p>
      <h2>Armstrong number program ICSE, duck number, magic and perfect numbers</h2>
      <p class="bx-lede">Armstrong needs the digit count before the loop. Duck needs the number as text, because an int cannot remember leading zeros. Magic repeats the template inside another loop. Perfect does not use digits at all; it loops over possible factors.</p>
    </div>
    <h3>Armstrong number for any number of digits</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>ArmstrongN.java</b><span>power = number of digits</span></figcaption>
  <pre>import java.util.Scanner;
class ArmstrongN {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int k = String.valueOf(n).length();     <i>// number of digits</i>
        int t = n, sum = 0;
        while (t &gt; 0) {
            int d = t % 10;
            sum = sum + (int) Math.pow(d, k);   <i>// digit raised to k</i>
            t = t / 10;
        }
        if (sum == n)
            System.out.println(n + " is an Armstrong number");
        else
            System.out.println(n + " is not an Armstrong number (sum = " + sum + ")");
    }
}</pre>
  <p class="bx-code-note">Math.pow returns a double, so the (int) cast is needed before adding to an int sum.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>the number entered</td></tr>
              <tr><td>k</td><td>int</td><td>number of digits</td></tr>
              <tr><td>t</td><td>int</td><td>working copy of n</td></tr>
              <tr><td>d</td><td>int</td><td>the last digit</td></tr>
              <tr><td>sum</td><td>int</td><td>sum of d to the power k</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter a number: <b>1634</b>
1634 is an Armstrong number
Enter a number: <b>371</b>
371 is an Armstrong number
Enter a number: <b>1220</b>
1220 is not an Armstrong number (sum = 33)</pre>
  <p class="bx-code-note">Many textbook versions cube every digit, which only works for three-digit numbers. Using k makes 1634 work too.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Duck number, read as a String</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Duck.java</b><span>leading zeros do not count</span></figcaption>
  <pre>import java.util.Scanner;
class Duck {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        String s = sc.next();                   <i>// read as text so leading zeros survive</i>
        int i = 0;
        while (i &lt; s.length() &amp;&amp; s.charAt(i) == '0')
            i++;                                <i>// skip the leading zeros</i>
        boolean duck = false;
        for (int j = i + 1; j &lt; s.length(); j++) {
            if (s.charAt(j) == '0') {
                duck = true;                    <i>// a zero after the first real digit</i>
                break;
            }
        }
        System.out.println(s + (duck ? " is a Duck number" : " is not a Duck number"));
    }
}</pre>
  <p class="bx-code-note">If you read the number with nextInt, 0703 arrives as 703 and the leading zero is lost before you can test it.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the number as typed</td></tr>
              <tr><td>i</td><td>int</td><td>index of the first non-zero digit</td></tr>
              <tr><td>j</td><td>int</td><td>loop counter after that digit</td></tr>
              <tr><td>duck</td><td>boolean</td><td>true once a later zero is found</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter the number: <b>4070</b>
4070 is a Duck number
Enter the number: <b>0703</b>
0703 is a Duck number
Enter the number: <b>0045</b>
0045 is not a Duck number
Enter the number: <b>5678</b>
5678 is not a Duck number</pre>
  <p class="bx-code-note">0703 qualifies through the zero between 7 and 3; 0045 has only leading zeros.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Magic and perfect numbers in one program</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MagicPerfect.java</b><span>repeated sum, factor sum</span></figcaption>
  <pre>import java.util.Scanner;
class MagicPerfect {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        <i>// Magic: keep adding the digits until one digit is left</i>
        int m = n;
        while (m &gt; 9) {
            int s = 0;
            while (m &gt; 0) {
                s = s + m % 10;
                m = m / 10;
            }
            m = s;
        }
        System.out.println(n + (m == 1 ? " is" : " is not") + " a Magic number (ends at " + m + ")");
        <i>// Perfect: the factors below n add up to n</i>
        int f = 0;
        for (int i = 1; i &lt; n; i++)
            if (n % i == 0)
                f = f + i;
        System.out.println(n + (f == n ? " is" : " is not") + " a Perfect number (factor sum = " + f + ")");
    }
}</pre>
  <p class="bx-code-note">The outer while keeps going until one digit is left; the inner while is the template.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>the number entered</td></tr>
              <tr><td>m</td><td>int</td><td>repeated digit sum</td></tr>
              <tr><td>s</td><td>int</td><td>digit sum of one round</td></tr>
              <tr><td>f</td><td>int</td><td>sum of factors below n</td></tr>
              <tr><td>i</td><td>int</td><td>possible factor</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter a number: <b>199</b>
199 is a Magic number (ends at 1)
199 is not a Perfect number (factor sum = 1)
Enter a number: <b>28</b>
28 is a Magic number (ends at 1)
28 is a Perfect number (factor sum = 28)
Enter a number: <b>50</b>
50 is not a Magic number (ends at 5)
50 is not a Perfect number (factor sum = 43)</pre>
  <p class="bx-code-note">199 is prime, so its only factor below itself is 1.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Special and Disarium numbers: two sums in one pass</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>SpecialDisarium.java</b><span>factorials and positions</span></figcaption>
  <pre>import java.util.Scanner;
class SpecialDisarium {
    static int fact(int d) {                    <i>// d! for one digit</i>
        int f = 1;
        for (int i = 2; i &lt;= d; i++)
            f = f * i;
        return f;
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int k = String.valueOf(n).length();     <i>// position of the last digit</i>
        int t = n, sf = 0, sp = 0;
        while (t &gt; 0) {
            int d = t % 10;
            sf = sf + fact(d);                  <i>// Special: add d!</i>
            sp = sp + (int) Math.pow(d, k);     <i>// Disarium: d to the power of its position</i>
            k--;                                <i>// the next digit sits one place to the left</i>
            t = t / 10;
        }
        System.out.println("Sum of digit factorials = " + sf + (sf == n ? ", Special number" : ", not Special"));
        System.out.println("Sum of positional powers = " + sp + (sp == n ? ", Disarium number" : ", not Disarium"));
    }
}</pre>
  <p class="bx-code-note">The loop meets the rightmost digit first, so its position is k, the digit count, and k falls by one each pass.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>the number entered</td></tr>
              <tr><td>k</td><td>int</td><td>position of the current digit</td></tr>
              <tr><td>t, d</td><td>int</td><td>working copy, last digit</td></tr>
              <tr><td>sf</td><td>int</td><td>sum of digit factorials</td></tr>
              <tr><td>sp</td><td>int</td><td>sum of positional powers</td></tr>
              <tr><td>f, i</td><td>int</td><td>factorial and its counter, in fact()</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter a number: <b>145</b>
Sum of digit factorials = 145, Special number
Sum of positional powers = 142, not Disarium
Enter a number: <b>135</b>
Sum of digit factorials = 127, not Special
Sum of positional powers = 135, Disarium number
Enter a number: <b>89</b>
Sum of digit factorials = 403200, not Special
Sum of positional powers = 89, Disarium number</pre>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">
      Number palindromes and digit reversal also appear with the other loop programs on
      <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE Class 10</a>, and the method-writing rules used above are on
      <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How are special number programs taught live?</p>
      <h2>Template first, then a new number every week</h2>
      <p class="bx-lede">Students who memorise seventeen programs forget them by March. Students who own the template can write an eighteenth number they have never seen. The live classes are built round that second habit.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>The template, traced by hand</h4><p>In the first class the digit loop is dry run on paper for two or three numbers until each student can fill a pass table without help.</p></li>
      <li class="bx-step"><h4>A new number every Tuesday</h4><p>At 5:30 PM IST the mentor gives a definition, sometimes one from the table above and sometimes an unfamiliar one, and the group writes the program from the template against a timer.</p></li>
      <li class="bx-step"><h4>Marked against the scheme on screen</h4><p>Answers are marked in front of everyone: the copy before the loop, the right starting values, the comparison, the comments and the variable table each earn their share.</p></li>
      <li class="bx-step"><h4>Run with edge cases on Wednesday</h4><p>At 8:00 PM IST the programs are run in BlueJ with 0, a single digit, a number with a zero inside and a number with leading zeros, so the weak spots show before the exam.</p></li>
      <li class="bx-step"><h4>Worksheets, doubt time and mock papers</h4><p>Each fortnight ends with a worksheet of unseen numbers; from December the same questions arrive inside full timed papers.</p></li>
    </ol>
    <p class="bx-mt-40">
      Number programs often sit inside a menu with two choices; that shape is covered on
      <a class="bx-link" href="/icse-class-10-menu-driven-programs">ICSE Class 10 menu driven programs</a>. The full list of program families is on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Learn number programs in the mini batch, or one to one',
  chooseLede: 'The definitions table, the template and the BlueJ test runs are identical in both formats. In India, families choose the fixed evening mini batch or a private slot; ICSE students abroad learn one to one. Billing is monthly with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'No more than six ICSE Class 10 students',
    'A new special number written from the template weekly',
    'Answers marked against the scheme on screen',
    'Edge cases run in BlueJ before the exam finds them'
  ],
  choosePersonal: [
    'A slot the family chooses, in India or abroad',
    'Time spent on the numbers your child mixes up',
    'Pass tables traced together until they are automatic',
    'Unseen definitions once the template is secure',
    'The same mentors and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who confuses Niven with neon, or Armstrong with Disarium, often needs only a few one to one sessions with the definitions table and the template side by side. A student who wants steady weekly practice across every Section B family is better served by the two batch classes. Fees are shown in your own currency.',
  zonesH2: 'Number program practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India sit the same Computer Applications paper, so the same digit loop decides the same Section B marks. Abroad, the practice runs one to one, after school in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and moved around school tests. More on overseas classes is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about special numbers',
  faqH2: 'What students ask about special number programs in Java',
  faqs: [
    ['What is a spy number in Java?', 'A spy number is one whose digit sum equals its digit product. For 1124, the sum 1 + 1 + 2 + 4 is 8 and the product 1 x 1 x 2 x 4 is also 8, so it is a spy number. In Java, keep a sum starting at 0 and a product starting at 1, and fill both with the same digit loop.'],
    ['What is a Niven number in Java?', 'A Niven number, also called a Harshad number, is divisible by the sum of its digits. 156 has digit sum 12, and 156 divided by 12 is exactly 13, so it is a Niven number. Find the digit sum with the template, then test n % sum == 0, making sure the number is above 0 first.'],
    ['What is a duck number in ICSE?', 'A duck number has at least one zero after its first non-zero digit, such as 4070 or 0703. Leading zeros alone do not count, so 0045 is not a duck number. Read the input as a String with next(), skip the leading zeros, then look for a zero in the rest with charAt.'],
    ['How do you write an Armstrong number program for ICSE?', 'Count the digits first and call the count k. Then use the digit loop to add each digit raised to the power k with (int) Math.pow(d, k). If the total equals the original number, it is an Armstrong number. 153 works with k = 3 and 1634 with k = 4.'],
    ['What is a neon number?', 'A neon number equals the sum of the digits of its square. 9 squared is 81, and 8 + 1 is 9, so 9 is a neon number. Run the digit-sum loop on n * n and compare with n. Between 1 and 9999 the only neon numbers are 1 and 9.'],
    ['What is the difference between a magic number and a happy number?', 'Both repeat a step until a single value is reached. A magic number adds its digits again and again until one digit is left, and that digit must be 1, as in 199, 19, 10, 1. A happy number adds the squares of its digits each time, as in 19, 82, 68, 100, 1.'],
    ['What is a perfect number in Java?', 'A perfect number equals the sum of its factors other than itself. 28 is perfect because 1 + 2 + 4 + 7 + 14 is 28; 6 and 496 are the other common examples. In Java, loop i from 1 to n minus 1, add i whenever n % i == 0, then compare the total with n.'],
    ['What is the difference between Armstrong and Disarium numbers?', 'Both raise digits to powers. An Armstrong number raises every digit to the same power, the number of digits, as in 153. A Disarium number raises each digit to its own position from the left, as in 135, which is 1 + 3 squared + 5 cubed.'],
    ['Do I have to memorise every special number program?', 'No. Memorise the definitions and one template: take d = n % 10, use d, then n = n / 10, all on a copy of n. Every program on this page is that loop with one line changed. If the exam gives an unfamiliar number with its definition, the same template still works.'],
    ['Which special number programs come in the ICSE board exam?', 'Number-property programs are a regular Section B shape, and the question normally states the definition it wants. We have not printed year tags here because we only tag a year after checking the real paper. Practise the template with all seventeen definitions and any of them is manageable.'],
    ['Do you teach special number programs in live classes?', 'Yes. In the mini batch on Tuesday and Wednesday evenings in India, students write a new number from the template each week, have it marked against the scheme on screen and then run it in BlueJ with edge cases. Families abroad, or who need another time, can take personalised one to one classes.']
  ],
  startH2: 'Try a free live number programs class',
  startHtml: `        <p>In the free demo your child dry runs the digit template on one number, writes a full program for a second number from its definition, and then tests it in BlueJ with the mentor using awkward inputs. You hear honestly afterwards how secure the template is, and whether the mini batch or one to one fits better.</p>
        <p>Want the broader picture first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Special number programs 2027'
};
