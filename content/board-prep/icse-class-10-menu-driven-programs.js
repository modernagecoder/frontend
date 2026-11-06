// ICSE Class 10 Computer Applications (Java): menu driven programs and switch
// case. Intent: "menu driven program in java icse", "switch case programs icse
// class 10", "menu driven program section b", "switch case questions icse".
// Distinct angle: a Section B answer template for menu programs, including the
// default case for an invalid choice, then four full programs that each add one
// idea (int menu, char menu with stacked case labels, a repeating do-while menu
// with methods, a pattern-or-series menu) and a set of switch case questions.
// Distinct from the programs hub (a square and circle area menu) and the
// special number page (a spy, Niven and neon menu): none of those menus is
// repeated here. Inside the 2027 syllabus: switch, loops, methods and objects,
// no recursion. Every program and every switch fragment on this page was
// compiled with javac 21 (OpenJDK 21.0.12.1) and run with java 21 on 2026-11-06
// from scratch files outside the repo, fed the inputs shown; each output below
// is pasted from that run (the bold input is what the user typed). The three
// compile errors were produced by javac 21 on the same day.
'use strict';

module.exports = {
  slug: 'icse-class-10-menu-driven-programs',
  code: 'ic14',
  board: 'icse',
  themeColor: '#4A3F6B',
  title: 'Menu Driven Program in Java ICSE: Switch Case, 2027',
  description: 'Menu driven program in Java for ICSE 2027: a Section B answer template with the default case, four switch case programs run in Java, and switch questions.',
  ogTitle: 'Menu Driven Programs in Java for ICSE, with a Section B Template',
  ogDesc: 'A five-part answer template for ICSE Class 10 menu driven programs, including the default case for a wrong choice, four complete switch case programs with variable tables and real sample runs, and switch case questions on fall-through, stacked labels and compile errors.',
  twDesc: 'ICSE Class 10 menu driven programs in Java: a Section B template with the default case, four full programs and switch case questions.',
  headline: 'Menu Driven Program in Java for ICSE 2027: A Section B Template, Four Full Switch Case Programs and the Questions Around Them',
  courseName: 'ICSE Class 10 Computer Applications (Java) Menu Driven and Switch Case Practice, Live Online',
  courseDesc: 'Live online practice of menu driven programs and the switch statement for the ICSE Class 10 Computer Applications 2027 examination: a five-part answer template, int and char menus, stacked case labels, the default case for invalid choices, repeating menus with do-while and methods, and pattern or series menus, written by hand and then run in BlueJ on a shared screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Menus',
  navLinks: [['#template', 'Template'], ['#programs', 'Programs'], ['#repeat', 'Repeating menu'], ['#questions', 'Switch questions'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Menu driven programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Menu driven programs 2027',
  h1: 'Menu driven program in Java for ICSE, with an answer template that never forgets the default case.',
  lede: 'A menu driven program in Java for ICSE shows the user a numbered or lettered list, reads a choice and uses switch to run only the matching task. The marks go to a fixed shape: menu, input, one case per option with its break, and a default case for a wrong choice. This page gives that shape as a five-part Section B template, then four full programs that each add one new idea, all run in Java 21 with the real output. In our live mini batch, students write menus to this template until it is automatic.',
  heroNote: 'Live online &middot; a five-part Section B template &middot; four full menu programs &middot; switch case questions &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 menu driven programs and switch case.',
  timetable: {
    label: 'When menu programs are practised',
    title: 'Menu practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, menus written to the template', '5:30', 'PM IST'],
      ['Wednesday, wrong choices tested in BlueJ', '8:00', 'PM IST'],
      ['Parts in the answer template', '5', 'parts'],
      ['Default case written', 'Every', 'menu']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same menu programs taught one to one, at an evening hour that suits ICSE students in the Gulf, Singapore, Malaysia and beyond.',
    stamps: ['Section B &middot; 15 marks', 'Template, then run']
  },
  picksH2: 'Courses where menu programs are taught',
  picksLede: 'The ICSE Java course in which the mini batch writes these menus, the Class 11 and 12 Computer Science course where menus grow into larger ISC programs, and the data structures course for a student who wants to see how a menu becomes the front of a real application.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where menu programs are written to one template and every wrong choice is tested.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC Computer Science, where menus front longer programs on arrays, strings and objects.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who likes building menus and wants to see stacks, queues and lists driven the same way.' }
  ],
  capsule: 'A menu driven program in Java for ICSE Class 10 prints a list of options, reads the user\'s choice with Scanner, and uses a switch statement to run only the code for that choice. A full-mark Section B answer has five parts: the printed menu, the choice read in, one case per option, a break ending every case, and a default case printing a message such as "Invalid choice" for any other input. Stacked labels let \'A\' and \'a\' share code. Modern Age Coders teaches this live in a Tuesday and Wednesday mini batch in India, or one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="template">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What should a menu driven answer look like in Section B?</p>
      <h2>Menu driven program Section B template: five parts, in order</h2>
      <p class="bx-lede">Write the same five parts every time, whatever the options do. The examiner looks for each part, and a missing default case or a missing break is the commonest way to drop marks on an otherwise working menu.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part</th><th scope="col">What to write</th><th scope="col">Why it matters</th></tr></thead>
        <tbody>
          <tr><td>1. The menu</td><td>One <code>System.out.println</code> per option, numbered or lettered exactly as the question words them</td><td>The user, and the examiner, must see what each choice does</td></tr>
          <tr><td>2. The choice</td><td><code>int ch = sc.nextInt();</code> or <code>char ch = sc.next().charAt(0);</code></td><td>The type of ch decides how the case labels are written</td></tr>
          <tr><td>3. One case per option</td><td><code>case 1:</code> followed by the full logic for that option, including its own input</td><td>Each option is a small program; read only the data that option needs</td></tr>
          <tr><td>4. A break per case</td><td><code>break;</code> as the last line of every case</td><td>Without it, control falls into the next case and runs that code too</td></tr>
          <tr><td>5. The default case</td><td><code>default: System.out.println("Invalid choice");</code></td><td>The question almost always says "for an incorrect choice, display an appropriate message"; this is that message</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Program 1: the template filled in, a temperature menu</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>TempMenu.java</b><span>int choice, two options</span></figcaption>
  <pre>import java.util.Scanner;
class TempMenu {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Celsius to Fahrenheit");     <i>// part 1: menu</i>
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice: ");
        int ch = sc.nextInt();                              <i>// part 2: choice</i>
        switch (ch) {
            case 1:                                         <i>// part 3: one case per option</i>
                System.out.print("Temperature in Celsius: ");
                double c = sc.nextDouble();
                double f = 9.0 / 5 * c + 32;
                System.out.println("In Fahrenheit = " + f);
                break;                                      <i>// part 4</i>
            case 2:
                System.out.print("Temperature in Fahrenheit: ");
                double fa = sc.nextDouble();
                double ce = 5.0 / 9 * (fa - 32);
                System.out.println("In Celsius = " + ce);
                break;
            default:                                        <i>// part 5</i>
                System.out.println("Invalid choice");
        }
    }
}</pre>
  <p class="bx-code-note">9.0 / 5 is written with a decimal point on purpose. 9 / 5 in int arithmetic is 1, and every answer in case 1 would be wrong.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>ch</td><td>int</td><td>menu choice entered by the user</td></tr>
              <tr><td>c, f</td><td>double</td><td>Celsius input and Fahrenheit result (case 1)</td></tr>
              <tr><td>fa, ce</td><td>double</td><td>Fahrenheit input and Celsius result (case 2)</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads keyboard input</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: <b>2</b>
Temperature in Fahrenheit: <b>98.6</b>
In Celsius = 37.0

1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: <b>1</b>
Temperature in Celsius: <b>37</b>
In Fahrenheit = 98.60000000000001

1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
Enter your choice: <b>3</b>
Invalid choice</pre>
  <p class="bx-code-note">The long tail on 98.60000000000001 is how a double stores 1.8; it is correct Java output, not a bug. Always show one run that reaches the default case when you test a menu.</p>
</figure>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you write a menu with letters instead of numbers?</p>
      <h2>Switch case programs ICSE Class 10: a char menu with stacked case labels</h2>
      <p class="bx-lede">Read the choice as a char with <code>sc.next().charAt(0)</code> and put each letter in single quotes. To accept both capital and small letters, stack two labels on one block: <code>case 'G': case 'g':</code>. This is deliberate fall-through, the one place it helps.</p>
    </div>
    <h3>Program 2: GCD or LCM of two numbers, chosen by a letter</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>GcdLcm.java</b><span>char choice, stacked labels</span></figcaption>
  <pre>import java.util.Scanner;
class GcdLcm {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("G. Greatest common divisor");
        System.out.println("L. Lowest common multiple");
        System.out.print("Enter G or L, then two numbers: ");
        char ch = sc.next().charAt(0);
        int a = sc.nextInt(), b = sc.nextInt();
        int x = a, y = b;
        while (y != 0) {          <i>// Euclid: replace (x, y) by (y, x % y)</i>
            int r = x % y;
            x = y;
            y = r;
        }
        int gcd = x;
        switch (ch) {
            case 'G':
            case 'g':
                System.out.println("GCD = " + gcd);
                break;
            case 'L':
            case 'l':
                System.out.println("LCM = " + (a * b / gcd));
                break;
            default:
                System.out.println("Wrong letter, enter G or L");
        }
    }
}</pre>
  <p class="bx-code-note">The GCD is worked out once, before the switch, because both options need it. The LCM then comes from the rule a x b = GCD x LCM.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>ch</td><td>char</td><td>the letter chosen, G or L in either case</td></tr>
              <tr><td>a, b</td><td>int</td><td>the two numbers entered</td></tr>
              <tr><td>x, y</td><td>int</td><td>working copies changed by Euclid's loop</td></tr>
              <tr><td>r</td><td>int</td><td>remainder of x divided by y</td></tr>
              <tr><td>gcd</td><td>int</td><td>greatest common divisor of a and b</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: <b>G 84 36</b>
GCD = 12

G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: <b>l 84 36</b>
LCM = 252

G. Greatest common divisor
L. Lowest common multiple
Enter G or L, then two numbers: <b>x 4 6</b>
Wrong letter, enter G or L</pre>
  <p class="bx-code-note">The small l reaches the LCM block through the stacked label. Copies x and y are used in the loop so that a and b are still intact for the LCM.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Program 3: a pattern or a series, the classic two-option menu</h3>
    <p>Many Section B menus pair a nested loop pattern with the sum of a series. Each case is then a complete small program; the switch only chooses between them.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>PatSeries.java</b><span>pattern or series</span></figcaption>
  <pre>import java.util.Scanner;
class PatSeries {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1. Symbol pattern");
        System.out.println("2. Sum of the series 2/3 + 4/5 + 6/7 + ...");
        System.out.print("Enter choice and n: ");
        int ch = sc.nextInt();
        int n = sc.nextInt();
        switch (ch) {
            case 1:
                for (int i = 1; i &lt;= n; i++) {
                    for (int j = 1; j &lt;= i; j++) {
                        if (j % 2 == 1)
                            System.out.print("* ");
                        else
                            System.out.print("# ");
                    }
                    System.out.println();
                }
                break;
            case 2:
                double s = 0;
                for (int k = 1; k &lt;= n; k++)
                    s = s + (2.0 * k) / (2 * k + 1);
                System.out.println("Sum = " + s);
                break;
            default:
                System.out.println("Choose 1 or 2");
        }
    }
}</pre>
  <p class="bx-code-note">Term k is 2k over 2k + 1. Writing 2.0 * k makes the division real; with 2 * k every term would be 0.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: <b>1 5</b>
*
* #
* # *
* # * #
* # * # *

1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: <b>2 4</b>
Sum = 3.212698412698413

1. Symbol pattern
2. Sum of the series 2/3 + 4/5 + 6/7 + ...
Enter choice and n: <b>7 3</b>
Choose 1 or 2</pre>
  <p class="bx-code-note">Check case 2 by hand for n = 2: 2/3 + 4/5 is about 0.667 + 0.8, which is 1.467. One quick check like this catches a wrong term formula before the examiner does.</p>
</figure>
    </div>
    <p class="bx-mt-40">
      The loop rules behind case 1 are set out on <a class="bx-link" href="/icse-class-10-pattern-programs-java">pattern programs for ICSE</a>, and case 2 belongs to the family on
      <a class="bx-link" href="/icse-class-10-series-programs-java">series programs in Java for ICSE</a>. A menu over three number checks, spy, Niven and neon, is worked on
      <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="repeat">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you make a menu repeat until the user exits?</p>
      <h2>A repeating menu driven program: do-while, methods and an exit option</h2>
      <p class="bx-lede">Wrap the menu and the switch in a do-while loop that runs until the exit choice is entered. do-while fits because the menu must appear at least once. Moving each option's work into a method keeps the switch short and shows user-defined methods at the same time.</p>
    </div>
    <h3>Program 4: a wallet with deposit, withdraw, balance and exit</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Wallet.java</b><span>menu inside do-while</span></figcaption>
  <pre>import java.util.Scanner;
class Wallet {
    double balance = 0;
    void deposit(double amt) {
        balance = balance + amt;
        System.out.println("Deposited. Balance = " + balance);
    }
    void withdraw(double amt) {
        if (amt &gt; balance)
            System.out.println("Not enough balance");
        else {
            balance = balance - amt;
            System.out.println("Withdrawn. Balance = " + balance);
        }
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Wallet w = new Wallet();
        int ch;
        do {
            System.out.println("1. Deposit  2. Withdraw  3. Balance  4. Exit");
            System.out.print("Choice: ");
            ch = sc.nextInt();
            switch (ch) {
                case 1:
                    System.out.print("Amount: ");
                    w.deposit(sc.nextDouble());
                    break;
                case 2:
                    System.out.print("Amount: ");
                    w.withdraw(sc.nextDouble());
                    break;
                case 3:
                    System.out.println("Balance = " + w.balance);
                    break;
                case 4:
                    System.out.println("Thank you");
                    break;
                default:
                    System.out.println("Invalid choice, try again");
            }
        } while (ch != 4);
    }
}</pre>
  <p class="bx-code-note">ch is declared before the do so that the while condition can see it. Declared inside the loop, it would be out of scope and the program would not compile.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Name</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>balance</td><td>double</td><td>instance variable: money held in the wallet</td></tr>
              <tr><td>amt</td><td>double</td><td>parameter: amount to add or take out</td></tr>
              <tr><td>w</td><td>Wallet</td><td>the object whose methods are called</td></tr>
              <tr><td>ch</td><td>int</td><td>menu choice; 4 ends the loop</td></tr>
              <tr><td>deposit, withdraw</td><td>void methods</td><td>do the work of options 1 and 2</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>1</b>
Amount: <b>500</b>
Deposited. Balance = 500.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>2</b>
Amount: <b>800</b>
Not enough balance
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>2</b>
Amount: <b>120</b>
Withdrawn. Balance = 380.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>5</b>
Invalid choice, try again
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>3</b>
Balance = 380.0
1. Deposit  2. Withdraw  3. Balance  4. Exit
Choice: <b>4</b>
Thank you</pre>
  <p class="bx-code-note">Choice 5 reaches default and the loop simply offers the menu again. The withdraw method guards against taking out more than the balance.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Single run or repeating? Read the question</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">If the question says</th><th scope="col">Write</th></tr></thead>
        <tbody>
          <tr><td>"Write a menu driven program to ..." with no mention of repeating</td><td>One menu, one switch, no loop (Programs 1 to 3)</td></tr>
          <tr><td>"... until the user chooses to exit" or "the menu should be displayed repeatedly"</td><td>do-while around the menu and switch, with an exit case (Program 4)</td></tr>
          <tr><td>"Using a switch case and user-defined methods ..."</td><td>Each case calls a method; the method does the work and prints or returns the result</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Methods that return values to a switch, and how to overload them, are covered on
      <a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">user-defined methods and overloading for ICSE Class 10</a>. Bill programs that use a slab ladder instead of a menu are on
      <a class="bx-link" href="/icse-class-10-slab-and-bill-programs">slab and bill programs for ICSE</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="questions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What do switch case questions in Section A ask?</p>
      <h2>Switch case questions ICSE: fall-through, stacked labels, conversions and errors</h2>
      <p class="bx-lede">Short switch questions test four things: what a fragment prints when a break is missing, how to convert an if-else ladder into a switch, which selector types are allowed, and which case labels will not compile. Try each before opening the answer.</p>
    </div>
    <ol class="bx-qlist">
      <li><p><b>Rewrite with switch:</b> marks m (0 to 100) give grade A for 90 and above, B for 70 to 89, C for 60 to 69 and D below 60.</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer</b><span>switch on m / 10</span></figcaption>
  <pre>int m = 74;
char g;
switch (m / 10) {
    case 10:
    case 9: g = 'A'; break;
    case 8:
    case 7: g = 'B'; break;
    case 6: g = 'C'; break;
    default: g = 'D';
}
System.out.println(g);

<i>// Output: B</i></pre>
  <p class="bx-code-note">switch cannot test a range, so divide by 10 to turn each band into one value. 100 / 10 is 10, so case 10 is stacked on case 9.</p>
</figure></li>
      <li><p><b>Predict the output.</b></p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Missing break</b><span>fall-through</span></figcaption>
  <pre>int x = 3;
switch (x) {
    case 3: x += 2;
    case 4: x *= 2; break;
    case 5: x = 0;
}
System.out.println(x);

<i>// Output: 10</i></pre>
  <p class="bx-code-note">Control enters at case 3 (x becomes 5), has no break, so falls into case 4 (x becomes 10) and stops at that break. The new value of x does not send control to case 5: the case is chosen only once, at the top.</p>
</figure></li>
      <li><p><b>Predict the output.</b> The default label does not have to come last.</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>default first</b><span>no matching case</span></figcaption>
  <pre>int k = 7;
switch (k % 3) {
    default: System.out.print("D");
    case 0: System.out.print("Z"); break;
    case 2: System.out.print("T");
}

<i>// Output: DZ</i></pre>
  <p class="bx-code-note">7 % 3 is 1, which has no case, so control goes to default, prints D, falls into case 0, prints Z and breaks.</p>
</figure></li>
      <li><p><b>Can a switch work on a String?</b> Yes. Since Java 7 the selector can be a String, compared with equals behind the scenes.</p>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>String selector</b><span>Java 7 and later</span></figcaption>
  <pre>String op = "MUL";
switch (op) {
    case "ADD": System.out.println(6 + 3); break;
    case "MUL": System.out.println(6 * 3); break;
    default: System.out.println("?");
}

<i>// Output: 18</i></pre>
</figure></li>
    </ol>
    <h3 class="bx-mt-40">Three switch statements that do not compile</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Fragment</th><th scope="col">javac 21 says</th><th scope="col">The rule</th></tr></thead>
        <tbody>
          <tr><td><code>double d = 2.0; switch (d) { case 2.0: ... }</code></td><td>selector type double is not allowed</td><td>With constant case labels, as in every ICSE switch, the selector may be byte, short, char, int, their wrappers, String or an enum; never double, float, long or boolean</td></tr>
          <tr><td><code>case 1: ... break; case 1: ...</code></td><td>duplicate case label</td><td>Each case value may appear only once in a switch</td></tr>
          <tr><td><code>int k = 1; ... case k: ...</code></td><td>constant expression required</td><td>A case label must be a constant or a literal, not a variable</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">switch or if-else: the comparison asked for two marks</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">switch</th><th scope="col">if-else ladder</th></tr></thead>
        <tbody>
          <tr><td>Tests one expression for equality with fixed values</td><td>Can test any condition, including ranges and several variables</td></tr>
          <tr><td>Works with int, char, String and similar types only</td><td>Works with any type, double and boolean included</td></tr>
          <tr><td>Needs break to stop fall-through into the next case</td><td>Runs only the first true branch; no break needed</td></tr>
          <tr><td>Natural fit for a menu of numbered or lettered choices</td><td>Natural fit for slabs, bands and compound conditions</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      More fragments like these, sorted by trap, are on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Computer Applications output questions</a>, and compile errors of every kind are practised on
      <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Class 10 Java error finding questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How are menu programs drilled in the live class?</p>
      <h2>Template first, then every choice tested: a menu lesson in the mini batch</h2>
      <p class="bx-lede">The five-part template is learnt in the first lesson and then reused in every menu afterwards, so the class time goes on the logic inside each case and on testing.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Template from memory</h3><p>At the start of the Tuesday 5:30 PM IST class, students write the empty menu skeleton from memory in under two minutes: menu lines, choice, cases, breaks, default.</p></div>
      <div class="bx-card"><h3>Fill each case</h3><p>The teacher sets a two- or three-option question in board wording. Each case is then planned as its own small program, with its own input and output.</p></div>
      <div class="bx-card"><h3>Test every path</h3><p>At the Wednesday 8:00 PM IST class the programs are run in BlueJ with one input per option and one wrong choice, so a missing default or break shows up on screen.</p></div>
      <div class="bx-card"><h3>Marked like the board</h3><p>Hand-written answers are marked against a scheme with the class watching: logic, syntax, the default message, comments and the variable table.</p></div>
      <div class="bx-card"><h3>Switch questions in rotation</h3><p>Short fall-through, conversion and error questions return in the weekly Section A set so they stay fresh until the exam.</p></div>
      <div class="bx-card"><h3>Menus inside mock papers</h3><p>From December, menu questions appear in full two-hour mock papers alongside the other Section B families.</p></div>
    </div>
    <p class="bx-mt-40">
      The full list of Section B program families, with links to each, is on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Write menu programs in the mini batch, or one to one',
  chooseLede: 'The template, the test-every-path habit and the BlueJ checks are the same in both formats. In India, families choose the fixed evening mini batch or a private slot; ICSE students abroad are taught one to one. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'A menu question in board wording most weeks',
    'Every option and one wrong choice run in BlueJ',
    'Answers marked against a scheme on screen'
  ],
  choosePersonal: [
    'A slot that suits the family, in India or abroad',
    'Focus on what your child misses: break, default or the logic inside',
    'Menus built around the school\'s own worksheets',
    'Repeating menus with methods and objects once basics are firm',
    'The teachers and 2027 syllabus of the batch, taught privately'
  ],
  chooseAfter: 'If your child writes correct logic but keeps losing marks for a missing break or a forgotten default, a few one to one sessions on the template usually settle it. If menus are one of several Section B families still to practise, the twice-weekly batch covers them all in turn. The fee for each format appears in your local currency.',
  zonesH2: 'Menu driven program practice for ICSE students abroad',
  zonesLede: 'ICSE schools overseas write the same Computer Applications paper, so the same switch menus and the same default case decide marks there too. Outside India the lessons are one to one, at an early evening time in the student\'s own zone.',
  zonesAfter: 'The time is agreed after the free demo and can be moved around school exams. How the overseas lessons are arranged is explained on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about menu programs',
  faqH2: 'What students ask about menu driven programs and switch case',
  faqs: [
    ['What is a menu driven program in Java?', 'It is a program that shows the user a list of options, reads which option they want, and then runs only the code for that option. In ICSE Class 10 the choice is read with Scanner and the branching is done with a switch statement, with a default case for a choice that is not on the list.'],
    ['How do you write a menu driven program using switch case in Java?', 'Print the menu with one println per option, read the choice into an int or char, then write switch (choice) with one case per option. Put the full logic for each option inside its case and end it with break. Finish with a default case that prints a message such as "Invalid choice".'],
    ['Why is the default case important in a menu driven program?', 'ICSE questions usually ask for an appropriate message when the user enters a wrong choice, and the default case is where that message goes. Leaving it out means a wrong choice silently does nothing, and the answer misses part of what the question asked.'],
    ['What happens if break is missing in a switch case?', 'Control falls through into the next case and runs its statements too, until it meets a break or the end of the switch. The case is chosen only once, at the top, so changing the variable inside a case does not redirect control. Stacking labels such as case \'A\': case \'a\': uses fall-through on purpose.'],
    ['Can we use a char in a switch statement in Java?', 'Yes. Read the choice with sc.next().charAt(0) and write each label in single quotes, such as case \'G\':. To accept both capital and small letters, stack two labels on the same block of code.'],
    ['Can switch case be used with double or boolean in Java?', 'No. In the switch with constant case labels that ICSE uses, the selector may be byte, short, char, int, their wrapper classes, a String or an enum. A double, float, long or boolean selector does not compile, so use an if-else ladder for those.'],
    ['What is the difference between switch case and if-else in Java?', 'switch compares one expression with fixed constant values and needs break to stop fall-through. if-else can test any condition, including ranges and several variables, and runs only the first true branch. Menus suit switch; slabs and ranges suit if-else.'],
    ['How do you repeat a menu until the user chooses exit?', 'Put the menu and the switch inside a do-while loop and declare the choice variable before the loop. Add an exit option, for example case 4, and end the loop with while (choice != 4). do-while suits a menu because it must be shown at least once.'],
    ['Are menu driven programs asked in the ICSE Class 10 board exam?', 'Menu and switch case questions are a regular Section B shape, often pairing a pattern with a series or two calculations. Switch also appears in Section A as output and conversion questions. Practising the five-part template prepares a student for both.'],
    ['Do you teach menu driven programs in live classes?', 'Yes. In the ICSE mini batch students write menus to the five-part template by hand, then run every option and one wrong choice in BlueJ on a shared screen. Students who need more time can take personalised one to one classes at a time the family chooses.']
  ],
  startH2: 'Try a free live menu driven programs class',
  startHtml: `        <p>In the free demo your child writes the menu skeleton with the mentor, fills in two options from a board-style question, and runs every choice in BlueJ, a wrong one included. Afterwards you hear plainly what is secure and what needs work, and whether the mini batch or one to one fits better.</p>
        <p>Prefer to see the whole subject first? Visit <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Menu driven programs 2027'
};
