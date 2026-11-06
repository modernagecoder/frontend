// ICSE Class 10 Computer Applications (Java): Library classes, that is wrapper
// classes, autoboxing and unboxing, and the twelve methods the syllabus lists.
// Intent: "wrapper classes icse class 10", "library classes icse", "autoboxing
// and unboxing", "Integer.parseInt icse", "Character class methods java icse".
// Distinct from ic23 (Math library methods), ic03 (string programs) and ic02
// (output questions, which has four wrapper rows): this page is the Library
// classes chapter itself, every listed method with its exact output, and two
// Section B class-design programs built on those methods.
// Syllabus wording checked 2026-11-06 by web search: Oswal's reproduction of
// the 2026-27 ICSE Computer Applications syllabus (for the 2027 exam) lists
// "Introduction to wrapper classes, methods of wrapper class and their usage
// with respect to numeric and character data types. Autoboxing and Unboxing in
// wrapper classes" and exactly twelve methods: parseInt, parseLong, parseFloat,
// parseDouble, isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase,
// isWhitespace, toLowerCase, toUpperCase. The same list is in the older CISCE
// PDF (2023 upload). The official cisce.org file itself could not be fetched
// from this session, so the page says "the syllabus lists" without quoting a
// page number. valueOf and toString are shown once and labelled as outside the
// list.
// Every method result, snippet and program on this page was compiled with
// javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch
// files outside the repo; outputs, including the NumberFormatException text,
// are pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-class-10-wrapper-and-library-classes',
  code: 'ic12',
  board: 'icse',
  themeColor: '#5A4A2E',
  dateModified: '2026-11-06',
  title: 'Wrapper Classes ICSE Class 10: Every Method, Run in Java',
  description: 'Wrapper classes for ICSE Class 10, 2027: autoboxing and unboxing, Integer.parseInt and all twelve listed methods with exact outputs, plus two programs.',
  ogTitle: 'Wrapper and Library Classes for ICSE Class 10, With Outputs',
  ogDesc: 'The ICSE Class 10 Library classes chapter for 2027: the eight wrapper classes, autoboxing and unboxing, and every parse and Character method the syllabus lists, each with the exact output from Java 21, two Section B programs and Section A questions with answers.',
  twDesc: 'ICSE Class 10 wrapper classes: autoboxing, parseInt and every listed Character method with exact outputs from Java 21.',
  headline: 'Wrapper Classes in ICSE Class 10: Autoboxing, parseInt and Every Character Method With Its Output',
  courseName: 'ICSE Class 10 Computer Applications (Java) Library Classes and Wrapper Classes, Live Online',
  courseDesc: 'Live online teaching of the ICSE Class 10 Computer Applications Library classes chapter for the 2027 examination: the eight wrapper classes, autoboxing and unboxing, the parseInt, parseLong, parseFloat and parseDouble methods, and the Character methods isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase, isWhitespace, toLowerCase and toUpperCase, with output questions traced on paper and Section B programs run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Wrapper classes',
  navLinks: [['#what', 'Wrapper classes'], ['#boxing', 'Autoboxing'], ['#parse', 'parse methods'], ['#character', 'Character'], ['#programs', 'Programs'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Wrapper and library classes']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Library classes 2027',
  h1: 'Wrapper classes for ICSE Class 10, with every method run in Java.',
  lede: 'Wrapper classes in ICSE Class 10 are a short chapter with a long reach: the same twelve methods turn up in one-mark MCQs, in output questions and inside almost every string program in Section B. This page lists all twelve as the 2027 syllabus names them, shows the exact value each returns (every one was run in Java 21, including the inputs that crash), explains autoboxing and unboxing with code, and works two class-design programs that depend on them. In our live mini batch these outputs are traced first and then checked in BlueJ.',
  heroNote: 'Live online &middot; all twelve listed methods &middot; outputs from real Java &middot; autoboxing in code &middot; two Section B programs &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live help with ICSE Class 10 wrapper classes and library classes.',
  timetable: {
    label: 'When library classes are practised',
    title: 'Wrapper practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, method results traced', '5:30', 'PM IST'],
      ['Wednesday, a Character program', '8:00', 'PM IST'],
      ['Methods named in the syllabus', '12', 'run'],
      ['Wrapper classes to recall', '8', 'by name']
    ],
    zones: '<b>In India:</b> the twelve methods come up in both weekly group classes, Tuesday and Wednesday evening. <b>Outside India:</b> a teacher works through the same twelve methods and programs one to one, at an hour that fits school in Muscat, Kuwait or Jakarta.',
    stamps: ['Section A and B', 'Traced, then run']
  },
  picksH2: 'Courses where wrapper classes are used every week',
  picksLede: 'Our BlueJ course for Classes 9 and 10 is where the twelve methods get used week after week. ISC Computer Science leans on Character and parse methods for its string and number questions, and Java for Teens suits a student who wants Java practice outside the board pattern.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'A small Class 9 and 10 group where every string program leans on Character tests and every record program on parseInt.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'ISC Computer Science keeps these methods and puts them inside longer text and number problems, so the habit pays off twice.' },
    { slug: 'python-complete-masterclass-teens', code: 'Second language / Python', h3: 'Python for Teens', p: 'Python calls the same ideas int() and isdigit(); a good second language once the board paper is behind you.' }
  ],
  capsule: 'Wrapper classes in ICSE Class 10 are the library classes that wrap each primitive type in an object: Byte, Short, Integer, Long, Float, Double, Character and Boolean, all in java.lang. The 2027 syllabus lists twelve methods: parseInt, parseLong, parseFloat and parseDouble, which turn a String into a number, and the Character methods isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase, isWhitespace, toLowerCase and toUpperCase. Autoboxing converts a primitive to its wrapper automatically; unboxing does the reverse. Our live classes drill all of it in a small Tuesday and Wednesday evening group in India, with personalised one to one lessons for any family that needs another hour.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="what">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are wrapper classes and library classes?</p>
      <h2>What are wrapper classes in Java? Library classes ICSE definitions</h2>
      <p class="bx-lede">A wrapper class is a library class that stores one value of a primitive type inside an object and gives methods to work with it. A library class is a ready-made class that comes with Java, so a program can use it without writing it.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Primitive type</th><th scope="col">Wrapper class</th><th scope="col">Spelling trap</th></tr></thead>
        <tbody>
          <tr><td><code>byte</code></td><td><code>Byte</code></td><td>Capital B</td></tr>
          <tr><td><code>short</code></td><td><code>Short</code></td><td>Capital S</td></tr>
          <tr><td><code>int</code></td><td><code>Integer</code></td><td>Not "Int": the full word</td></tr>
          <tr><td><code>long</code></td><td><code>Long</code></td><td>Capital L</td></tr>
          <tr><td><code>float</code></td><td><code>Float</code></td><td>Capital F</td></tr>
          <tr><td><code>double</code></td><td><code>Double</code></td><td>Capital D</td></tr>
          <tr><td><code>char</code></td><td><code>Character</code></td><td>Not "Char": the full word</td></tr>
          <tr><td><code>boolean</code></td><td><code>Boolean</code></td><td>Capital B</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">Four facts that answer most one-mark questions</h3>
    <ol class="bx-qlist">
      <li>All eight wrapper classes are in the package <code>java.lang</code>, which every program imports automatically, so no import line is needed.</li>
      <li>Two names differ from their primitive: <code>int</code> becomes <code>Integer</code> and <code>char</code> becomes <code>Character</code>. The other six only gain a capital letter.</li>
      <li>Wrapper classes are needed because some parts of Java work only with objects, and because the conversion and testing methods live in these classes.</li>
      <li><code>String</code> is a library class too, but it is not a wrapper class: there is no primitive type called string.</li>
    </ol>
    <p class="bx-mt-40">
      Primitive and composite types, which this chapter leans on, are defined on
      <a class="bx-link" href="/icse-class-10-class-as-basis-of-computation">class as the basis of all computation</a>,
      and the other big library class in the syllabus, Math, has its own page:
      <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="boxing">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What is autoboxing and unboxing?</p>
      <h2>Autoboxing and unboxing in Java, with output</h2>
      <p class="bx-lede">Autoboxing is the automatic conversion of a primitive value into an object of its wrapper class; unboxing is the automatic conversion of a wrapper object back into its primitive value. Java does both by itself whenever one type is used where the other is expected.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Boxing and unboxing</b><span>run in Java 21</span></figcaption>
  <pre>Integer a = 25;          <i>// autoboxing: int 25 into an Integer</i>
int b = a + 5;           <i>// unboxing: a gives back 25</i>
System.out.println(b);

Double d = 4.5;          <i>// autoboxing</i>
double e = d * 2;        <i>// unboxing, then multiply</i>
System.out.println(e);

Character c = 'k';       <i>// autoboxing a char</i>
char ch = c;             <i>// unboxing</i>
System.out.println(Character.toUpperCase(ch));

Boolean flag = true;
System.out.println(!flag);

<i>// Output</i>
30
9.0
K
false</pre>
  <p class="bx-code-note">No method is called for the conversion; the assignment alone does it. That is what "auto" means in an answer.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Autoboxing</th><th scope="col">Unboxing</th></tr></thead>
          <tbody>
            <tr><td>Direction</td><td>Primitive to wrapper object</td><td>Wrapper object to primitive</td></tr>
            <tr><td>Example</td><td><code>Integer a = 25;</code></td><td><code>int b = a;</code></td></tr>
            <tr><td>Happens when</td><td>A primitive is stored where an object is expected</td><td>An object is used in arithmetic or stored in a primitive</td></tr>
            <tr><td>Who does it</td><td>The Java compiler, automatically</td><td>The Java compiler, automatically</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Two methods outside the twelve on the syllabus list appear in some textbooks: <code>Integer.valueOf("40")</code> returns an Integer object (so <code>Integer.valueOf("40") / 3</code> prints 13 after unboxing), and <code>Integer.toString(70)</code> returns the String "70". They are useful to recognise, but parseInt is the one to learn for the paper.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="parse">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does Integer.parseInt do, and what are the other parse methods?</p>
      <h2>Integer.parseInt ICSE: the four parse methods with exact outputs</h2>
      <p class="bx-lede"><code>Integer.parseInt(s)</code> converts a String of digits into an int, so the value can be used in arithmetic. <code>parseLong</code>, <code>parseFloat</code> and <code>parseDouble</code> do the same for long, float and double. Every result below was printed by Java 21.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Syllabus method</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Note</th></tr></thead>
        <tbody>
          <tr><td><code>int parseInt(String s)</code></td><td><code>Integer.parseInt("472") + 8</code></td><td class="bx-num">480</td><td>Converted, then added. Compare <code>"472" + 8</code>, which joins to 4728</td></tr>
          <tr><td></td><td><code>Integer.parseInt("-35") * 2</code></td><td class="bx-num">-70</td><td>A leading minus sign is allowed</td></tr>
          <tr><td></td><td><code>Integer.parseInt("007")</code></td><td class="bx-num">7</td><td>Leading zeros are dropped; the result is a number, not text</td></tr>
          <tr><td></td><td><code>Integer.parseInt("12.5")</code></td><td class="bx-num">NumberFormatException</td><td>A decimal point is not allowed in an int</td></tr>
          <tr><td></td><td><code>Integer.parseInt(" 42")</code></td><td class="bx-num">NumberFormatException</td><td>A space is not a digit: <code>trim()</code> first</td></tr>
          <tr><td><code>long parseLong(String s)</code></td><td><code>Long.parseLong("9876543210") + 1</code></td><td class="bx-num">9876543211</td><td>Too big for int, fine for long</td></tr>
          <tr><td><code>float parseFloat(String s)</code></td><td><code>Float.parseFloat("2.5") * 2</code></td><td class="bx-num">5.0</td><td>A float result prints with a decimal point</td></tr>
          <tr><td><code>double parseDouble(String s)</code></td><td><code>Double.parseDouble("3") / 2</code></td><td class="bx-num">1.5</td><td>"3" becomes 3.0, so the division is real</td></tr>
          <tr><td></td><td><code>Double.parseDouble("-7.25")</code></td><td class="bx-num">-7.25</td><td>Sign and decimal point both accepted</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The exact message Java 21 printed for the bad input was <code>java.lang.NumberFormatException: For input string: "12.5"</code>. An exam answer only needs the name: the program stops with a NumberFormatException because the String is not a valid int.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A digit character to its value</b><span>two ways</span></figcaption>
  <pre>char dg = '8';
System.out.println(dg - '0' + 1);
System.out.println(Integer.parseInt("" + dg) + 1);

<i>// Output</i>
9
9</pre>
  <p class="bx-code-note">parseInt needs a String, so <code>"" + dg</code> turns the char into one first. Subtracting '0' gives the same value with char arithmetic.</p>
</figure>
      <div>
        <h3>When a program needs parseInt</h3>
        <ol class="bx-qlist">
          <li>A number arrives inside a String, for example a record such as <code>Riya,78,91</code> read with <code>nextLine()</code>.</li>
          <li>Digits are pulled out of a longer String with <code>substring</code> and must then be added or compared.</li>
          <li>A digit character has been collected into a String and needs its numeric value.</li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="character">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Which Character class methods are in the ICSE syllabus?</p>
      <h2>Character class methods in Java for ICSE, each with its output</h2>
      <p class="bx-lede">Eight Character methods are listed: six tests that return boolean and two converters that return char. All are called on the class, as <code>Character.isDigit(ch)</code>, never on a variable.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Syllabus method</th><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Note</th></tr></thead>
        <tbody>
          <tr><td><code>boolean isDigit(char ch)</code></td><td><code>Character.isDigit('7') + " " + Character.isDigit('x')</code></td><td class="bx-num">true false</td><td>Only 0 to 9 count</td></tr>
          <tr><td><code>boolean isLetter(char ch)</code></td><td><code>Character.isLetter('g') + " " + Character.isLetter('9')</code></td><td class="bx-num">true false</td><td>Either case counts as a letter</td></tr>
          <tr><td><code>boolean isLetterOrDigit(char ch)</code></td><td><code>Character.isLetterOrDigit('@') + " " + Character.isLetterOrDigit('Q')</code></td><td class="bx-num">false true</td><td>Symbols and spaces give false</td></tr>
          <tr><td><code>boolean isLowerCase(char ch)</code></td><td><code>Character.isLowerCase('b') + " " + Character.isLowerCase('B') + " " + Character.isLowerCase('5')</code></td><td class="bx-num">true false false</td><td>A digit is neither lower nor upper case</td></tr>
          <tr><td><code>boolean isUpperCase(char ch)</code></td><td><code>Character.isUpperCase('Z') + " " + Character.isUpperCase('#')</code></td><td class="bx-num">true false</td><td>Symbols are not upper case</td></tr>
          <tr><td><code>boolean isWhitespace(char ch)</code></td><td><code>Character.isWhitespace(' ') + " " + Character.isWhitespace('\\n') + " " + Character.isWhitespace('_')</code></td><td class="bx-num">true true false</td><td>Space, tab and new line count; underscore does not</td></tr>
          <tr><td><code>char toLowerCase(char ch)</code></td><td><code>Character.toLowerCase('M') + " " + Character.toLowerCase('m')</code></td><td class="bx-num">m m</td><td>A lowercase letter comes back unchanged</td></tr>
          <tr><td><code>char toUpperCase(char ch)</code></td><td><code>Character.toUpperCase('#')</code></td><td class="bx-num">#</td><td>Anything that is not a letter comes back unchanged</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">The return-type trap: char plus int</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Code</th><th scope="col">Output</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td><code>System.out.println(Character.toUpperCase('a') + 1);</code></td><td class="bx-num">66</td><td>'A' is code 65; a char plus an int is an int</td></tr>
          <tr><td><code>System.out.println((char) (Character.toUpperCase('a') + 1));</code></td><td class="bx-num">B</td><td>The cast turns 66 back into a character</td></tr>
          <tr><td><code>System.out.println("" + Character.toUpperCase('a') + 1);</code></td><td class="bx-num">A1</td><td>The empty String arrives first, so both values are joined</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Toggle the case of a sentence</b><span>run in Java 21</span></figcaption>
  <pre>String s = "Board 2027 Prep";
String t = "";
for (int i = 0; i &lt; s.length(); i++) {
    char x = s.charAt(i);
    if (Character.isUpperCase(x))
        t = t + Character.toLowerCase(x);
    else if (Character.isLowerCase(x))
        t = t + Character.toUpperCase(x);
    else
        t = t + x;            <i>// digits and spaces kept</i>
}
System.out.println(t);

<i>// Output: bOARD 2027 pREP</i></pre>
  <p class="bx-code-note">The final else matters: without it, the digits and spaces would be lost from the result.</p>
</figure>
      <div>
        <h3>How to remember the eight</h3>
        <ol class="bx-qlist">
          <li>Six start with <code>is</code> and answer a yes or no question, so they return boolean.</li>
          <li>Two start with <code>to</code> and hand back a changed character, so they return char.</li>
          <li><code>isWhitespace</code> has a lower-case s in "space"; <code>isLetterOrDigit</code> has capital O and D.</li>
          <li>None of them changes the variable passed in; store the result if you need it.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">These eight methods do most of the work in sentence programs, which are collected on <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>, and longer fragments to trace, sorted by trap, sit on <a class="bx-link" href="/icse-class-10-java-output-questions">the output questions page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="programs">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do wrapper methods appear in Section B?</p>
      <h2>Library classes ICSE programs: two Section B questions, solved and run</h2>
      <p class="bx-lede">Section B rarely says "use wrapper classes". It asks you to classify characters or to pull numbers out of text, and the Character tests and parseInt are the tools that make the answer short. Both questions below are original and set in the class-design format.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question 1.</b> Define a class CharCensus with data members text (String) and upper, lower, digits, spaces, others (int). Write a default constructor to initialise them, <code>void accept()</code> to read a sentence, <code>void count()</code> to count the uppercase letters, lowercase letters, digits, whitespace characters and other characters using Character class methods, and <code>void display()</code>. In main, make one object and invoke the three methods in order.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>CharCensus.java</b><span>Character methods</span></figcaption>
  <pre>import java.util.Scanner;
class CharCensus {
    String text;   <i>// the sentence entered</i>
    int upper;     <i>// uppercase letters</i>
    int lower;     <i>// lowercase letters</i>
    int digits;    <i>// digit characters</i>
    int spaces;    <i>// whitespace characters</i>
    int others;    <i>// everything else</i>

    CharCensus() {                 <i>// default constructor</i>
        text = "";
        upper = 0;
        lower = 0;
        digits = 0;
        spaces = 0;
        others = 0;
    }

    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        text = sc.nextLine();
    }

    void count() {
        for (int i = 0; i &lt; text.length(); i++) {
            char ch = text.charAt(i);
            if (Character.isUpperCase(ch))
                upper++;
            else if (Character.isLowerCase(ch))
                lower++;
            else if (Character.isDigit(ch))
                digits++;
            else if (Character.isWhitespace(ch))
                spaces++;
            else
                others++;
        }
    }

    void display() {
        System.out.println("Uppercase letters : " + upper);
        System.out.println("Lowercase letters : " + lower);
        System.out.println("Digits            : " + digits);
        System.out.println("Spaces            : " + spaces);
        System.out.println("Other characters  : " + others);
    }

    public static void main(String args[]) {
        CharCensus ob = new CharCensus();
        ob.accept();
        ob.count();
        ob.display();
    }
}</pre>
  <p class="bx-code-note">One if-else-if chain means each character is counted exactly once. The final else catches commas, colons and every other symbol.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>text</td><td>String</td><td>the sentence entered</td></tr>
              <tr><td>upper, lower</td><td>int</td><td>counts of uppercase and lowercase letters</td></tr>
              <tr><td>digits</td><td>int</td><td>count of digit characters</td></tr>
              <tr><td>spaces</td><td>int</td><td>count of whitespace characters</td></tr>
              <tr><td>others</td><td>int</td><td>count of all remaining characters</td></tr>
              <tr><td>ch</td><td>char</td><td>the character being tested</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter over the sentence</td></tr>
              <tr><td>ob</td><td>CharCensus</td><td>the object created in main</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a sentence:
<b>ICSE Exam on 17 March, 2027: Room B-12!</b>
Uppercase letters : 8
Lowercase letters : 12
Digits            : 8
Spaces            : 7
Other characters  : 4</pre>
  <p class="bx-code-note">The four others are the comma, the colon, the hyphen and the exclamation mark. 8 + 12 + 8 + 7 + 4 is 39, the length of the sentence.</p>
</figure>
      </div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Question 2.</b> A record is typed as a name followed by marks, separated by commas, for example <code>Riya,78,91,66,84</code>. Define a class MarksLine with data members line, name (String) and total, count, high (int). Write a parameterized constructor <code>MarksLine(String l)</code> to store the record and initialise the other members, <code>void extract()</code> to separate the name and convert each mark with <code>Integer.parseInt()</code>, and <code>void display()</code> to print the name, the number of marks, the total, the highest mark and the average to one decimal place.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MarksLine.java</b><span>parseInt in a program</span></figcaption>
  <pre>import java.util.Scanner;
class MarksLine {
    String line;    <i>// the record, for example Riya,78,91,66</i>
    String name;    <i>// the part before the first comma</i>
    int total;      <i>// sum of the marks</i>
    int count;      <i>// number of marks found</i>
    int high;       <i>// highest mark</i>

    MarksLine(String l) {          <i>// parameterized constructor</i>
        line = l.trim() + ",";      <i>// a comma at the end closes the last part</i>
        name = "";
        total = 0;
        count = 0;
        high = 0;
    }

    void extract() {
        String part = "";
        for (int i = 0; i &lt; line.length(); i++) {
            char ch = line.charAt(i);
            if (ch != ',') {
                part = part + ch;
            } else {
                if (name.equals(""))
                    name = part;                       <i>// first part is the name</i>
                else {
                    int m = Integer.parseInt(part.trim()); <i>// text to int</i>
                    total = total + m;
                    count++;
                    if (m &gt; high)
                        high = m;
                }
                part = "";
            }
        }
    }

    void display() {
        double avg = (double) total / count;
        System.out.println("Name    : " + name);
        System.out.println("Marks   : " + count);
        System.out.println("Total   : " + total);
        System.out.println("Highest : " + high);
        System.out.println("Average : " + Math.round(avg * 10) / 10.0);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter name and marks separated by commas:");
        String s = sc.nextLine();
        MarksLine ob = new MarksLine(s);
        ob.extract();
        ob.display();
    }
}</pre>
  <p class="bx-code-note"><code>part.trim()</code> before parseInt is what lets the record contain a space after a comma; without it the program stops with a NumberFormatException.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>line</td><td>String</td><td>the record with a closing comma added</td></tr>
              <tr><td>name</td><td>String</td><td>the student's name</td></tr>
              <tr><td>total, count, high</td><td>int</td><td>sum, number and highest of the marks</td></tr>
              <tr><td>l</td><td>String</td><td>constructor parameter: the record</td></tr>
              <tr><td>part</td><td>String</td><td>the piece being built between commas</td></tr>
              <tr><td>m</td><td>int</td><td>one mark, converted by parseInt</td></tr>
              <tr><td>avg</td><td>double</td><td>average of the marks</td></tr>
              <tr><td>s, sc, ob</td><td>String, Scanner, MarksLine</td><td>input line, keyboard reader, the object</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter name and marks separated by commas:
<b>Riya,78, 91,66,84</b>
Name    : Riya
Marks   : 4
Total   : 319
Highest : 91
Average : 79.8

Enter name and marks separated by commas:
<b>Kabir,55,60</b>
Name    : Kabir
Marks   : 2
Total   : 115
Highest : 60
Average : 57.5</pre>
  <p class="bx-code-note">319 / 4 is 79.75; <code>Math.round(797.5)</code> is 798, so one decimal place gives 79.8. The space before 91 in the first run is handled by trim.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">The constructor rules both programs rely on are on <a class="bx-link" href="/icse-class-10-constructors-questions">constructors ICSE Class 10 questions</a>, and every other kind of Section B program is gathered in <a class="bx-link" href="/icse-class-10-java-programs-practice">the Java programs practice hub</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="sectiona">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. What do Section A wrapper class questions look like, and how are they taught?</p>
      <h2>Wrapper class questions with answers, and how the batch drills them</h2>
      <p class="bx-lede">Original questions in the shapes of Question 1 and Question 2. Answer each on paper, then open it.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-qlist">
          <li>Name the wrapper class of <code>char</code>.
            <details><summary>Answer</summary> Character.</details></li>
          <li>Which package contains the wrapper classes?
            <details><summary>Answer</summary> java.lang, imported automatically.</details></li>
          <li>Give the output: <code>Character.isLetterOrDigit('$')</code>
            <details><summary>Answer</summary> false. The symbol is neither a letter nor a digit.</details></li>
          <li>What is the return type of <code>Character.toUpperCase(ch)</code>?
            <details><summary>Answer</summary> char.</details></li>
          <li>Define autoboxing with one example.
            <details><summary>Answer</summary> The automatic conversion of a primitive value into an object of its wrapper class, as in <code>Integer n = 45;</code>.</details></li>
          <li>Give the output: <code>System.out.println(Integer.parseInt("15") + Integer.parseInt("5") + "0");</code>
            <details><summary>Answer</summary> 200. The two ints add to 20 first, then "0" is joined on.</details></li>
          <li>Write a statement to convert the String <code>s = "62.5"</code> into a double.
            <details><summary>Answer</summary> <code>double d = Double.parseDouble(s);</code></details></li>
          <li>State one situation in which <code>Integer.parseInt</code> throws an exception.
            <details><summary>Answer</summary> When the String is not a valid whole number, for example "12.5", "4a" or a String with a space in it.</details></li>
        </ol>
      </div>
      <div>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Twelve methods recalled on Tuesday</h4><p>Tuesday evening (5:30 PM IST) opens with every student writing all twelve signatures from memory, return type first, and the group checks spelling and case together.</p></li>
          <li class="bx-step"><h4>Outputs traced, then run</h4><p>Fragments like the tables above get a written answer first; then the mentor types each into BlueJ, and 66 against B settles itself in front of everyone.</p></li>
          <li class="bx-step"><h4>A Character program on Wednesday</h4><p>Wednesday evening (8:00 PM IST) is for one sentence or record program, written by hand with its variable description table, marked against the scheme on screen, then typed and tested with awkward input.</p></li>
          <li class="bx-step"><h4>Mock papers from December</h4><p>Wrapper questions return inside full two-hour papers, marked like the board, with every lost mark discussed in doubt time.</p></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      More one-mark questions across every chapter are on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise wrapper classes in the mini batch, or one to one',
  chooseLede: 'The method tables, the traced outputs and the two programs are taught the same way in both formats. Families in India choose between the small evening group and private lessons; for ICSE students living abroad the classes are always private. Billing is monthly, with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'No more than six ICSE Class 10 students',
    'All twelve methods recalled and spelt correctly',
    'Outputs traced, then run in BlueJ',
    'A character or parse program written each fortnight'
  ],
  choosePersonal: [
    'A slot the family chooses, in India or abroad',
    'Time spent on the methods your child mixes up',
    'Sentence programs built together, then solo',
    'Tougher record and text programs as confidence grows',
    'Same mentors, same 2027 syllabus, same BlueJ checks'
  ],
  chooseAfter: 'A student who mostly confuses return types, or writes Int and Char for the class names, often needs only a few one to one sessions. A student who also needs steady practice on whole Section B programs gets more from the two batch evenings each week. Fees appear in your own currency.',
  zonesH2: 'Wrapper class practice for ICSE students abroad',
  zonesLede: 'An ICSE school in the Gulf or South East Asia sits the very paper a school in Kolkata sits, twelve methods included. Abroad, every lesson is private and lands at an early evening hour by the local clock.',
  zonesAfter: 'The time is agreed after the free demo and can shift around school tests. For how the classes run for families abroad, see <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about wrapper classes',
  faqH2: 'What students ask about wrapper classes in ICSE Class 10',
  faqs: [
    ['What are wrapper classes in Java ICSE Class 10?', 'Wrapper classes are library classes that hold a primitive value inside an object and provide methods for it. There is one for each primitive type: Byte, Short, Integer, Long, Float, Double, Character and Boolean. They are in java.lang, so no import is needed.'],
    ['What are library classes in ICSE?', 'Library classes are ready-made classes supplied with Java, grouped into packages, which a program can use without writing them. For ICSE Class 10 the ones that matter are the wrapper classes, Math, String and Scanner. The Library classes chapter itself covers the wrapper classes and autoboxing.'],
    ['What is autoboxing and unboxing in Java?', 'Autoboxing is Java automatically converting a primitive value into an object of its wrapper class, as in Integer n = 45. Unboxing is the reverse, an Integer object automatically giving back its int, as in int k = n + 1. No method call is written for either.'],
    ['What does Integer.parseInt do in ICSE?', 'Integer.parseInt(String s) converts a String containing a whole number into an int, so it can be used in arithmetic. Integer.parseInt("472") + 8 gives 480, while "472" + 8 gives 4728. If the String is not a valid whole number, such as "12.5", the program stops with a NumberFormatException.'],
    ['Which Character class methods are in the ICSE syllabus?', 'Eight: isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase and isWhitespace, which return boolean, and toLowerCase and toUpperCase, which return char. Each takes one char and is called on the class, as in Character.isDigit(ch).'],
    ['Which wrapper class methods must I learn for ICSE 2027?', 'The syllabus lists twelve: parseInt, parseLong, parseFloat and parseDouble, and the eight Character methods isDigit, isLetter, isLetterOrDigit, isLowerCase, isUpperCase, isWhitespace, toLowerCase and toUpperCase. Learn each one\'s return type as well as what it does.'],
    ['Why does Character.toUpperCase(\'a\') + 1 print 66?', 'toUpperCase returns the char A, whose code is 65. Adding the int 1 to a char gives an int, so 66 is printed. To print the letter B, cast the result back: (char) (Character.toUpperCase(\'a\') + 1).'],
    ['Is String a wrapper class?', 'No. String is a library class in java.lang, but it is not a wrapper class, because there is no primitive type called string for it to wrap. The eight wrapper classes match the eight primitive types exactly.'],
    ['What is the difference between Integer and int?', 'int is a primitive type that stores a whole number directly. Integer is a wrapper class whose object holds an int and offers methods such as parseInt. Java converts between them automatically through autoboxing and unboxing.'],
    ['Do you teach wrapper classes in live classes?', 'Yes. The small group meets twice a week, 5:30 PM IST on Tuesday and 8:00 PM IST on Wednesday; the twelve methods are recalled, their outputs predicted, and Character and parseInt programs written and checked in BlueJ. If those evenings clash with school, personalised one to one lessons go at a time you pick.']
  ],
  startH2: 'Book a free wrapper classes demo',
  startHtml: `        <p>In the free demo your child predicts the output of a handful of parse and Character method calls, sees each run in BlueJ, then starts a short sentence program with the mentor. Afterwards the mentor tells you plainly which methods your child already owns, which need work, and which format fits.</p>
        <p>Want the wider view first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Wrapper classes 2027'
};
