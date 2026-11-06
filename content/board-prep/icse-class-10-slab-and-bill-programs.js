// ICSE Class 10 Computer Applications (Java): slab and bill programs.
// Intent: "slab programs icse java", "if else programs icse", "electricity
// bill program java", "discount program icse", "conditional statements icse
// class 10". Distinct from ic20 (menu-driven programs), ic11 (constructors)
// and the solved previous-papers page (which retells past Question 3 slab
// classes): this page owns the two kinds of slab (whole-amount bracket against
// band-by-band), and four original board-format classes with variable
// description tables and boundary test runs: an electricity bill (if-else-if
// ladder with fixed band totals), a book fair discount (bracket rate with a
// member type), an income tax with invented practice rates (band peeling with
// Math.min), and a courier charge (switch on zone, Math.ceil for "500 g or
// part"). The tax rates are made up for practice and are said to be so.
// Every program on this page was compiled with javac 21 (OpenJDK 21.0.12) and
// run with java 21 on 2026-11-06 from scratch files outside the repo, at the
// boundary inputs shown; every figure in the trace and test tables is pasted
// from those runs or recomputed with python3.
'use strict';

module.exports = {
  slug: 'icse-class-10-slab-and-bill-programs',
  code: 'ic31',
  board: 'icse',
  themeColor: '#1E4A8C',
  title: 'Slab Programs ICSE Java: Bill, Discount, Tax and Courier',
  description: 'Slab programs in ICSE Java for 2027: electricity bill, discount, tax and courier classes in board format, with variable tables and boundary test runs.',
  ogTitle: 'Slab and Bill Programs for ICSE Class 10 Java, Solved and Tested',
  ogDesc: 'Four original slab programs written the way the ICSE Computer Applications paper asks for them: an electricity bill, a book fair discount, an income tax with practice rates and a courier charge. Each comes with a variable description table, a trace and test runs at every slab boundary, all run in Java 21.',
  twDesc: 'Electricity bill, discount, tax and courier slab programs for ICSE Class 10, each run in Java at every boundary.',
  headline: 'Slab Programs in ICSE Java: Electricity Bill, Discount, Tax and Courier Classes, Solved and Tested',
  courseName: 'ICSE Class 10 Computer Applications (Java) Slab and Bill Programs, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications slab and bill programs for the 2027 examination: if-else-if ladders, band-by-band and whole-amount slabs, electricity bill, discount, tax and courier classes written to a specification with variable description tables, and boundary testing, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Slab programs',
  navLinks: [['#kinds', 'Two kinds of slab'], ['#electricity', 'Electricity bill'], ['#discount', 'Discount and tax'], ['#courier', 'Courier'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Slab and bill programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Slab and bill programs 2027',
  h1: 'Slab programs in ICSE Java: bills, discounts, tax and courier charges, tested at every boundary.',
  lede: 'Slab programs in ICSE Java turn a rate card into an if-else ladder: units, amounts or weights fall into bands, and each band has its own rate. They are a favourite shape for the class-based Section B question, and they are lost on two things: reading the slab the wrong way, and testing nothing at the edges. This page explains the two kinds of slab, then solves four original programs in board format, an electricity bill, a discount, a tax and a courier charge, each run in Java 21 at every boundary.',
  heroNote: 'Live online &middot; four slab classes in board format &middot; variable description tables &middot; every boundary run in Java &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of slab and bill programs for ICSE Class 10.',
  timetable: {
    label: 'When slab programs are practised',
    title: 'Slab week',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, reading the rate card', '5:30', 'PM IST'],
      ['Wednesday, a full class written and marked', '8:00', 'PM IST'],
      ['Slab programs solved here', '4', 'classes'],
      ['Boundary inputs per program', '4+', 'tested']
    ],
    zones: '<b>In India:</b> both weekly evenings in a group of six or fewer. <b>Outside India:</b> the same programs one to one, timed for after school where you live.',
    stamps: ['Section B &middot; 15 marks', 'Tested at the edges']
  },
  picksH2: 'Courses where slab programs are practised',
  picksLede: 'The ICSE Java course where the mini batch writes and marks a slab class most weeks, the Class 11 and 12 Computer Science course where the same decision logic carries into ISC programs, and the data structures course for students who want to test code as carefully as they write it.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with slab classes written by hand and marked against the board scheme.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC, where the same if-else reasoning sits inside larger programs.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoys boundary cases and wants to learn how programmers test systematically.' }
  ],
  capsule: 'Slab programs in ICSE Java calculate a charge from a rate card divided into bands, such as an electricity bill by units, a discount by purchase amount, a tax by income or a courier charge by weight. There are two kinds: a bracket slab applies one rate to the whole amount, and a band slab charges each band at its own rate and adds them. They are written with if-else-if ladders inside a class with accept, compute and display methods and a variable description table. Modern Age Coders teaches them live in a Tuesday and Wednesday mini batch in India, or one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="kinds">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is a slab program, and how many kinds are there?</p>
      <h2>Slab programs ICSE Java: the two ways a rate card can be read</h2>
      <p class="bx-lede">A slab program works out a charge when the rate changes from one band of values to the next. Before writing any code, decide which of two kinds the question describes, because the same table of rates gives very different answers.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Bracket slab (whole amount)</th><th scope="col">Band slab (band by band)</th></tr></thead>
        <tbody>
          <tr><td>How the rate is used</td><td>Find the one band the value falls in; that rate applies to the entire value</td><td>Each band is charged at its own rate; the parts are added</td></tr>
          <tr><td>Typical wording</td><td>"Purchase amount 3001 to 6000: discount 15%"</td><td>"First 100 units at 2.00, next 200 units at 3.50"</td></tr>
          <tr><td>Usual examples</td><td>Discount, commission, grade, fine category</td><td>Electricity and water bills, tax, parcel weight steps</td></tr>
          <tr><td>Code shape</td><td><code>if (amt &lt;= 1000) rate = 5; else if ...</code> then one multiplication</td><td>Each branch adds the full charge of the lower bands to the part above</td></tr>
          <tr><td>At a boundary</td><td>The total can jump down: a bigger amount can cost less</td><td>The total rises smoothly; there is never a jump</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The words that decide it</h3><p>"First", "next", "for every unit above" and "remaining" mean band slab. "If the amount is between" or "on the total purchase" means bracket slab.</p></div>
      <div class="bx-card"><h3>The cost of guessing</h3><p>With the electricity rates below, 450 units billed as a bracket (all units at 5.00, plus the meter charge) gives 2300.0. Read correctly, band by band, it is 1700.0.</p></div>
      <div class="bx-card"><h3>What the paper asks for</h3><p>A class with named data members, a method to accept input, one to calculate and one to display, and a main that creates an object and calls them. A variable description table earns its own credit.</p></div>
    </div>
    <p class="bx-mt-40">If-else ladders that pick a menu option rather than a rate have their own page: <a class="bx-link" href="/icse-class-10-menu-driven-programs">ICSE Class 10 menu-driven programs</a>. Past papers that set a slab class in Question 3 are summarised on <a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">ICSE Computer Applications previous year papers, solved</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="electricity">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How is an electricity bill program written for ICSE?</p>
      <h2>Electricity bill program in Java, in ICSE board format</h2>
      <p class="bx-lede">An electricity bill is the classic band slab. Each branch of the ladder adds the full charge of every lower band, worked out once by hand, to the units above the last boundary at the new rate.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question 1.</b> Define a class ElectricBill with data members name (String), units (int) and bill (double). Write <code>void accept()</code> to input the name and units, <code>void calculate()</code> to compute the bill from the tariff below, and <code>void print()</code> to display the name, units and bill. A fixed meter charge of 50 is added to every bill, and a surcharge of 2.5% is added if the total exceeds 3000. Write main to create an object and call the methods.</p>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Units</th><th scope="col">Rate per unit</th><th scope="col">Full charge of this band</th><th scope="col">Charge of all bands up to here</th></tr></thead>
        <tbody>
          <tr><td>First 100</td><td class="bx-num">2.00</td><td class="bx-num">200</td><td class="bx-num">200</td></tr>
          <tr><td>Next 200 (101 to 300)</td><td class="bx-num">3.50</td><td class="bx-num">700</td><td class="bx-num">900</td></tr>
          <tr><td>Next 300 (301 to 600)</td><td class="bx-num">5.00</td><td class="bx-num">1500</td><td class="bx-num">2400</td></tr>
          <tr><td>Above 600</td><td class="bx-num">6.25</td><td>open</td><td>open</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>ElectricBill.java</b><span>band slab, if-else-if ladder</span></figcaption>
  <pre>import java.util.Scanner;
class ElectricBill {
    String name;    <i>// consumer's name</i>
    int units;      <i>// units consumed</i>
    double bill;    <i>// amount payable</i>

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Consumer name: ");
        name = sc.nextLine();
        System.out.print("Units consumed: ");
        units = sc.nextInt();
    }

    void calculate() {
        double charge;
        if (units &lt;= 100)
            charge = units * 2.00;
        else if (units &lt;= 300)
            charge = 200 + (units - 100) * 3.50;
        else if (units &lt;= 600)
            charge = 900 + (units - 300) * 5.00;
        else
            charge = 2400 + (units - 600) * 6.25;
        bill = charge + 50;
        if (bill &gt; 3000)
            bill = bill + bill * 2.5 / 100;
    }

    void print() {
        System.out.println("Name: " + name);
        System.out.println("Units: " + units);
        System.out.println("Bill: " + bill);
    }

    public static void main(String args[]) {
        ElectricBill ob = new ElectricBill();
        ob.accept();
        ob.calculate();
        ob.print();
    }
}</pre>
  <p class="bx-code-note">200, 900 and 2400 come straight from the last column of the tariff table. Work them out on rough paper first; writing the arithmetic inside the ladder is where most slips happen.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>name</td><td>String</td><td>consumer's name</td></tr>
              <tr><td>units</td><td>int</td><td>units consumed</td></tr>
              <tr><td>bill</td><td>double</td><td>final amount payable</td></tr>
              <tr><td>charge</td><td>double</td><td>energy charge before meter charge and surcharge</td></tr>
              <tr><td>sc</td><td>Scanner</td><td>reads the input</td></tr>
              <tr><td>ob</td><td>ElectricBill</td><td>the object created in main</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Units entered</th><th scope="col">Why this input</th><th scope="col">Bill printed</th></tr></thead>
            <tbody>
              <tr><td class="bx-num">100</td><td>top of band 1</td><td class="bx-num">250.0</td></tr>
              <tr><td class="bx-num">101</td><td>first unit of band 2</td><td class="bx-num">253.5</td></tr>
              <tr><td class="bx-num">300</td><td>top of band 2</td><td class="bx-num">950.0</td></tr>
              <tr><td class="bx-num">450</td><td>middle of band 3</td><td class="bx-num">1700.0</td></tr>
              <tr><td class="bx-num">600</td><td>top of band 3</td><td class="bx-num">2450.0</td></tr>
              <tr><td class="bx-num">680</td><td>band 4, total just under 3000</td><td class="bx-num">2950.0</td></tr>
              <tr><td class="bx-num">800</td><td>surcharge applies</td><td class="bx-num">3792.5</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Consumer name: <b>Asha Menon</b>
Units consumed: <b>800</b>
Name: Asha Menon
Units: 800
Bill: 3792.5</pre>
  <p class="bx-code-note">The surcharge is worked on the bill after the meter charge is added, because the question says "if the total exceeds 3000".</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Step for 800 units</th><th scope="col">Working</th><th scope="col">Value</th></tr></thead>
          <tbody>
            <tr><td>Branch chosen</td><td>800 is above 600</td><td>4th</td></tr>
            <tr><td>Units above 600</td><td>800 &minus; 600</td><td class="bx-num">200</td></tr>
            <tr><td>charge</td><td>2400 + 200 &times; 6.25</td><td class="bx-num">3650.0</td></tr>
            <tr><td>Add meter charge</td><td>3650 + 50</td><td class="bx-num">3700.0</td></tr>
            <tr><td>Surcharge, since 3700 &gt; 3000</td><td>3700 &times; 2.5 / 100</td><td class="bx-num">92.5</td></tr>
            <tr><td>bill</td><td>3700 + 92.5</td><td class="bx-num">3792.5</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="discount">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How are discount and tax programs different?</p>
      <h2>Discount program ICSE and a tax slab: if else programs in board format</h2>
      <p class="bx-lede">A discount is usually a bracket slab: find the one rate and apply it to the whole purchase. A tax is a band slab like the electricity bill, but here it is written a second way, by peeling off one band at a time, which is shorter when there are many bands.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question 2.</b> Define a class BookFair with data members name (String), type (char, M for member or N for non-member), amount, disc and net (double). Write a default constructor, <code>void input()</code>, <code>void compute()</code> to find the discount on the whole amount from the table below and the net amount, and <code>void display()</code> to print the name, amount, discount and net amount on one line. Write main.</p>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Purchase amount</th><th scope="col">Member discount</th><th scope="col">Non-member discount</th></tr></thead>
        <tbody>
          <tr><td>Up to 1000</td><td class="bx-num">5%</td><td class="bx-num">nil</td></tr>
          <tr><td>1001 to 3000</td><td class="bx-num">10%</td><td class="bx-num">5%</td></tr>
          <tr><td>3001 to 6000</td><td class="bx-num">15%</td><td class="bx-num">8%</td></tr>
          <tr><td>Above 6000</td><td class="bx-num">20%</td><td class="bx-num">12%</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>BookFair.java</b><span>bracket slab with a type</span></figcaption>
  <pre>import java.util.Scanner;
class BookFair {
    String name;     <i>// buyer's name</i>
    char type;       <i>// 'M' member, 'N' non-member</i>
    double amount;   <i>// value of books bought</i>
    double disc;     <i>// discount in rupees</i>
    double net;      <i>// amount to pay</i>

    BookFair() {
        name = "";
        type = 'N';
        amount = 0.0;
        disc = 0.0;
        net = 0.0;
    }

    void input() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        name = sc.nextLine();
        System.out.print("Member (M) or non-member (N): ");
        type = Character.toUpperCase(sc.next().charAt(0));
        System.out.print("Purchase amount: ");
        amount = sc.nextDouble();
    }

    void compute() {
        int rate;
        if (amount &lt;= 1000)
            rate = (type == 'M') ? 5 : 0;
        else if (amount &lt;= 3000)
            rate = (type == 'M') ? 10 : 5;
        else if (amount &lt;= 6000)
            rate = (type == 'M') ? 15 : 8;
        else
            rate = (type == 'M') ? 20 : 12;
        disc = amount * rate / 100;
        net = amount - disc;
    }

    void display() {
        System.out.println(name + "\\t" + amount + "\\t" + disc + "\\t" + net);
    }

    public static void main(String args[]) {
        BookFair b = new BookFair();
        b.input();
        b.compute();
        b.display();
    }
}</pre>
  <p class="bx-code-note">One ladder for the amount, and a ternary inside each branch for the type, keeps the program to four branches instead of eight. Character.toUpperCase lets a lower-case m work too.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Input</th><th scope="col">Line printed (name, amount, discount, net)</th></tr></thead>
            <tbody>
              <tr><td>M, 1000</td><td class="bx-num">Riya Sen 1000.0 50.0 950.0</td></tr>
              <tr><td>M, 1001</td><td class="bx-num">Riya Sen 1001.0 100.1 900.9</td></tr>
              <tr><td>M, 3000</td><td class="bx-num">Dev Joshi 3000.0 300.0 2700.0</td></tr>
              <tr><td>M, 3001</td><td class="bx-num">Dev Joshi 3001.0 450.15 2550.85</td></tr>
              <tr><td>n, 7200</td><td class="bx-num">Kavya Iyer 7200.0 864.0 6336.0</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-mt-40">Look at the first two rows: buying one rupee more costs 49.10 less. That jump is normal for a bracket slab and is a good check that the program has read the table as the question intends. In the actual output the four values are separated by tabs.</p>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>name, type</td><td>String, char</td><td>buyer and membership</td></tr>
              <tr><td>amount, disc, net</td><td>double</td><td>purchase, discount and amount payable</td></tr>
              <tr><td>rate</td><td>int</td><td>discount percentage chosen</td></tr>
              <tr><td>sc, b</td><td>Scanner, BookFair</td><td>input reader and the object</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Question 3.</b> Define a class IncomeTax with data members name (String), income and tax (double), a parameterised constructor, <code>void compute()</code> and <code>void display()</code>. The tax is charged band by band: the first 2,50,000 nil, the next 2,50,000 at 5%, the next 5,00,000 at 15% and the rest at 25%, and a surcharge of 3% is then added to the tax. (These rates are invented for practice; they are not any government's rates.)</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>IncomeTax.java</b><span>band slab by peeling</span></figcaption>
  <pre>import java.util.Scanner;
class IncomeTax {
    String name;      <i>// taxpayer's name</i>
    double income;    <i>// annual taxable income</i>
    double tax;       <i>// tax including surcharge</i>

    IncomeTax(String n, double i) {
        name = n;
        income = i;
        tax = 0.0;
    }

    void compute() {
        double rest = income;   <i>// income not yet taxed</i>
        double band;            <i>// the part falling in one slab</i>

        band = Math.min(rest, 250000);      <i>// slab 1: nil</i>
        rest = rest - band;

        band = Math.min(rest, 250000);      <i>// slab 2: 5%</i>
        tax = tax + band * 0.05;
        rest = rest - band;

        band = Math.min(rest, 500000);      <i>// slab 3: 15%</i>
        tax = tax + band * 0.15;
        rest = rest - band;

        tax = tax + rest * 0.25;            <i>// slab 4: 25%</i>
        tax = tax + tax * 3 / 100;          <i>// surcharge 3%</i>
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Income: " + income);
        System.out.println("Tax: " + Math.round(tax * 100) / 100.0);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        String n = sc.nextLine();
        System.out.print("Annual income: ");
        double i = sc.nextDouble();
        IncomeTax ob = new IncomeTax(n, i);
        ob.compute();
        ob.display();
    }
}</pre>
  <p class="bx-code-note">Math.min takes as much of the remaining income as fits in the band. Once rest reaches 0, every later band adds 0, so no if is needed at all.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Income entered</th><th scope="col">Tax before surcharge</th><th scope="col">Tax printed</th></tr></thead>
            <tbody>
              <tr><td class="bx-num">240000</td><td class="bx-num">0</td><td class="bx-num">0.0</td></tr>
              <tr><td class="bx-num">500000</td><td class="bx-num">12500</td><td class="bx-num">12875.0</td></tr>
              <tr><td class="bx-num">820000</td><td class="bx-num">12500 + 48000 = 60500</td><td class="bx-num">62315.0</td></tr>
              <tr><td class="bx-num">1600000</td><td class="bx-num">12500 + 75000 + 150000 = 237500</td><td class="bx-num">244625.0</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>name, income, tax</td><td>String, double, double</td><td>taxpayer, income and tax payable</td></tr>
              <tr><td>rest</td><td>double</td><td>income still to be taxed</td></tr>
              <tr><td>band</td><td>double</td><td>part of the income in the current slab</td></tr>
              <tr><td>n, i</td><td>String, double</td><td>inputs passed to the constructor</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-mt-40">Both styles are correct for a band slab. The ladder with fixed totals, as in the electricity bill, is what most mark schemes show; the peeling style is shorter when there are five or more bands.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="courier">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What about "for every 500 g or part thereof"?</p>
      <h2>Courier charge program: switch for the zone, Math.ceil for the weight steps</h2>
      <p class="bx-lede">"Or part thereof" means any extra weight, however small, is charged as a full step. Math.ceil of the extra weight divided by the step size, written with a double, gives exactly that number of steps.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question 4.</b> Define a class Courier with data members weight (int, in grams), zone (char), express (char) and charge (double). Write <code>void accept()</code>, <code>void compute()</code> and <code>void display()</code>. The first 500 g costs 40, 60 or 90 for zone L (local), S (state) or N (national); every further 500 g or part costs 20, 30 or 45 respectively. Express delivery adds 25% to the charge. For any other zone, print "Invalid zone". Write main.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Courier.java</b><span>switch plus a step slab</span></figcaption>
  <pre>import java.util.Scanner;
class Courier {
    int weight;      <i>// parcel weight in grams</i>
    char zone;       <i>// 'L' local, 'S' state, 'N' national</i>
    char express;    <i>// 'Y' or 'N'</i>
    double charge;   <i>// amount payable</i>

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Weight in grams: ");
        weight = sc.nextInt();
        System.out.print("Zone (L/S/N): ");
        zone = Character.toUpperCase(sc.next().charAt(0));
        System.out.print("Express (Y/N): ");
        express = Character.toUpperCase(sc.next().charAt(0));
    }

    void compute() {
        int first, extra;
        switch (zone) {
            case 'L': first = 40; extra = 20; break;
            case 'S': first = 60; extra = 30; break;
            case 'N': first = 90; extra = 45; break;
            default:
                System.out.println("Invalid zone");
                charge = 0;
                return;
        }
        int steps = 0;
        if (weight &gt; 500)
            steps = (int) Math.ceil((weight - 500) / 500.0);
        charge = first + steps * extra;
        if (express == 'Y')
            charge = charge * 1.25;
    }

    void display() {
        System.out.println("Weight " + weight + " g, zone " + zone + ", charge " + charge);
    }

    public static void main(String args[]) {
        Courier c = new Courier();
        c.accept();
        c.compute();
        c.display();
    }
}</pre>
  <p class="bx-code-note">Dividing by 500.0, not 500, is essential: (1250 / 500) in int arithmetic is 2, and Math.ceil of 2 is still 2, so one step would never be charged.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Weight, zone, express</th><th scope="col">Extra steps</th><th scope="col">Charge printed</th></tr></thead>
            <tbody>
              <tr><td>500, L, N</td><td class="bx-num">0</td><td class="bx-num">40.0</td></tr>
              <tr><td>501, L, N</td><td class="bx-num">1 (1 g is a part)</td><td class="bx-num">60.0</td></tr>
              <tr><td>1000, S, N</td><td class="bx-num">1</td><td class="bx-num">90.0</td></tr>
              <tr><td>1750, N, Y</td><td class="bx-num">3, then &times; 1.25</td><td class="bx-num">281.25</td></tr>
              <tr><td>2300, S, Y</td><td class="bx-num">4, then &times; 1.25</td><td class="bx-num">225.0</td></tr>
              <tr><td>800, X, N</td><td>none</td><td>Invalid zone, then charge 0.0</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bx-table-wrap bx-mt-40">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>weight</td><td>int</td><td>parcel weight in grams</td></tr>
              <tr><td>zone, express</td><td>char</td><td>delivery zone and express choice</td></tr>
              <tr><td>charge</td><td>double</td><td>amount payable</td></tr>
              <tr><td>first, extra</td><td>int</td><td>rates for the first 500 g and each further step</td></tr>
              <tr><td>steps</td><td>int</td><td>number of further 500 g steps</td></tr>
              <tr><td>sc, c</td><td>Scanner, Courier</td><td>input reader and the object</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p class="bx-mt-40">Math.ceil and the other syllabus Math methods, with their return types, are on <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE</a>. Classes with private data and checking methods, the next step up from these, are on <a class="bx-link" href="/icse-class-10-encapsulation-access-specifiers">encapsulation and access specifiers</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="checklist">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do you make sure a slab program earns all 15 marks?</p>
      <h2>Conditional statements ICSE Class 10: a checklist for slab questions</h2>
      <p class="bx-lede">A Section B question is worth 15 marks, and the mark scheme rewards a correct class structure, correct input, correct logic and correct output. Most marks lost on slab programs are lost at a boundary or in a missing piece of structure.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Copy the names exactly</h4><p>Use the class, data member and method names from the question, with the same types and capital letters. A renamed method can cost marks even when it works.</p></li>
      <li class="bx-step"><h4>Decide bracket or band, in writing</h4><p>Write "whole amount" or "band by band" above the rate table on your rough work, then the band totals if it is a band slab.</p></li>
      <li class="bx-step"><h4>Check every boundary sign</h4><p>"Up to 100" is <code>&lt;= 100</code>; "above 600" is <code>&gt; 600</code>; "1001 to 3000" in an else-if after <code>&lt;= 1000</code> needs only <code>&lt;= 3000</code>.</p></li>
      <li class="bx-step"><h4>Keep the fraction</h4><p>Use double for money, and write percentages as <code>* rate / 100</code> on a double, or divide by 100.0. An int division can silently turn a 5% discount into zero.</p></li>
      <li class="bx-step"><h4>Do the extras in the stated order</h4><p>A fixed charge, then a surcharge on the total, is not the same as a surcharge first. Follow the wording of the question line by line.</p></li>
      <li class="bx-step"><h4>Test the edges, not the middle</h4><p>Dry run one value at the top of each band and one just above it. If those agree with the rate table, the middle values will too.</p></li>
      <li class="bx-step"><h4>Finish the paperwork</h4><p>A main that creates the object and calls every method, comments on the data members, and a variable description table.</p></li>
    </ol>
    <h3 class="bx-mt-40">Quick check questions</h3>
    <ol class="bx-qlist">
      <li>Write the condition for "units from 201 to 400, both included", as one boolean expression.
        <details><summary>Answer</summary> <code>units &gt;= 201 &amp;&amp; units &lt;= 400</code>. Inside an else-if ladder that has already handled <code>units &lt;= 200</code>, <code>units &lt;= 400</code> is enough.</details></li>
      <li>With the ElectricBill tariff, what is the bill for 250 units?
        <details><summary>Answer</summary> 200 + 150 &times; 3.50 = 725, plus 50 is 775.0.</details></li>
      <li>Why does <code>disc = amount * (rate / 100);</code> give 0 when rate is an int below 100?
        <details><summary>Answer</summary> rate / 100 is int division, so 15 / 100 is 0 before it is multiplied. Write <code>amount * rate / 100</code> with amount a double, or <code>rate / 100.0</code>.</details></li>
      <li>How many 500 g steps does Math.ceil give for 1501 g after the first 500 g?
        <details><summary>Answer</summary> 3. The extra weight is 1001 g, and 1001 / 500.0 is 2.002, which rounds up to 3.0.</details></li>
    </ol>
    <p class="bx-mt-40">The same marking habits apply to every Section B family on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs practice</a>, and loop-based programs are on <a class="bx-link" href="/icse-class-10-loop-programs-java">loop programs in Java for ICSE</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How does the mini batch practise slab programs?</p>
      <h2>From rate card to tested class in one week</h2>
      <p class="bx-lede">Slab programs reward slow reading and quick testing. The week is split so that Tuesday is spent on reading rate cards and Wednesday on writing and marking a full class.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Read the card aloud</h4><p>At the Tuesday 5:30 PM IST class students get three fresh rate cards and say, for each, whether it is a bracket or band slab and what the band totals are, before any code.</p></li>
      <li class="bx-step"><h4>Guess the boundary outputs</h4><p>For each card the group predicts the charge at the top of each band and one unit above it, then the teacher runs the program in BlueJ on a shared screen.</p></li>
      <li class="bx-step"><h4>Write the class by hand</h4><p>On Wednesday at 8:00 PM IST each student writes a full slab class with its variable description table, on paper, against the clock.</p></li>
      <li class="bx-step"><h4>Marked on screen</h4><p>Answers are marked against a board-style scheme in front of the group, so every lost mark has a named reason.</p></li>
      <li class="bx-step"><h4>Into the lab file and the mocks</h4><p>Good solutions go into the student's laboratory assignments for internal assessment, and slab classes come back in timed mock papers from December.</p></li>
    </ol>
    <p class="bx-mt-40">The lab file side of this work is described on <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">the ICSE project and internal assessment page</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise slab programs in the mini batch, or one to one',
  chooseLede: 'The rate cards, the boundary tests and the board-style marking are identical in both formats. Families in India pick the fixed evening group of six or fewer, or a private slot; ICSE students abroad are taught one to one. Billing is monthly and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'Fresh rate cards read and classified every Tuesday',
    'A full slab class written and marked on Wednesday',
    'Boundary outputs checked in BlueJ on a shared screen'
  ],
  choosePersonal: [
    'A slot the family chooses, in India or overseas',
    'Extra practice on whichever slab kind confuses your child',
    'School homework slab questions worked through together',
    'Timed full Section B answers as the board exam nears',
    'Same teachers and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who writes slab programs that run but keeps misreading the rate card or missing a boundary often needs only a few one to one sessions. A student who is still building confidence with classes, loops and Strings as well is better served by the steady two classes a week of the batch. Fees appear in your own currency.',
  zonesH2: 'Slab program practice for ICSE students abroad',
  zonesLede: 'Students at ICSE schools in the Gulf, Singapore and further away write the same Section B classes in the same 2027 paper. Outside India the practice is one to one, at an after-school hour in the student\'s time zone.',
  zonesAfter: 'The slot is chosen after the free demo and can move around school exams. How classes work for families overseas is explained on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about slab programs',
  faqH2: 'What students ask about slab and bill programs in ICSE',
  faqs: [
    ['What is a slab program in Java ICSE?', 'A slab program calculates a charge when the rate changes from one range of values to the next, such as an electricity bill where the first 100 units cost less per unit than the next 200. It is written with an if-else-if ladder, or sometimes switch, usually inside a class with methods to accept, compute and display.'],
    ['How do you write an electricity bill program in Java for ICSE?', 'Create a class with name, units and bill as data members, and methods to accept input, calculate and print. In the calculate method, use an if-else-if ladder: each branch adds the full charge of all lower bands, worked out beforehand, to the units above the last boundary multiplied by the new rate. Then add any fixed charge or surcharge the question states.'],
    ['What is the difference between a slab rate on the whole amount and band by band?', 'With a whole-amount slab, you find the one range the value falls in and apply that rate to all of it, as in most discount questions. With a band-by-band slab, each part of the value is charged at the rate of its own band and the parts are added, as in electricity bills and tax.'],
    ['How do you write a discount program in ICSE Java?', 'Read the purchase amount and any customer type, use an if-else-if ladder on the amount to choose the discount percentage, then compute discount = amount * rate / 100 and net = amount - discount. If the rate also depends on a type, a ternary or a nested if inside each branch keeps the ladder short.'],
    ['Are slab programs asked in the ICSE Computer Applications board exam?', 'Class-based programs with a slab or rate table have appeared in Section B in several recent papers, usually as the question on class and object. The 2027 specimen paper is not yet confirmed, so treat slab programs as a very likely shape rather than a promise, and practise the other families too.'],
    ['How do you calculate a charge "for every 500 g or part thereof" in Java?', 'Work out the extra weight beyond the first slab, divide it by the step size as a double and apply Math.ceil, then cast to int: steps = (int) Math.ceil((weight - 500) / 500.0). Dividing by 500 as an int would cut off the part step before ceil could round it up.'],
    ['Should I use if-else or switch for slab programs?', 'Use if-else-if for ranges, because switch can only compare one value against fixed constants. switch suits a choice such as a zone letter or a category number. Many good answers use both: switch to pick the rates for a category, then if-else or a formula for the amount.'],
    ['What are conditional statements in ICSE Class 10?', 'They are statements that choose what to run based on a condition: if, if-else, the if-else-if ladder, nested if, the ternary operator and switch-case. The ICSE syllabus covers them in Class 9 and the Class 10 paper re-tests them, most visibly in slab, menu-driven and number-checking programs.'],
    ['Do I need a variable description table in an ICSE slab program?', 'It is expected in the laboratory assignments for internal assessment and is good practice in the board paper. List every variable, its data type and its purpose. Students often include it in Section B answers as well, and it helps the examiner follow your logic.'],
    ['Do you teach slab and bill programs in live classes?', 'Yes. In the ICSE mini batch on Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, students classify rate cards, predict boundary outputs and write a full slab class that is marked against a board-style scheme. Personalised one to one classes are also available at a time the family picks.']
  ],
  startH2: 'Try a free live slab program class',
  startHtml: `        <p>In the free demo your child reads a fresh rate card, decides whether it is charged on the whole amount or band by band, predicts the bill at two boundaries and then sees the program run in BlueJ. Afterwards you get a frank view of what needs work and whether the mini batch or one to one suits better.</p>
        <p>Prefer to read more first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Slab and bill programs 2027'
};
