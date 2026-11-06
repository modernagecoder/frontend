// ICSE Class 10 Computer Applications (Java): values, data types, type
// casting and input with Scanner. Intent: "data types in java icse class 10",
// "scanner class input icse", "type conversion java icse", "implicit explicit
// type casting icse", "values and data types icse". Distinct from ic32
// (operators), ic16 (error finding) and the wrapper classes page (parse and
// boxing methods): this page is the primitive type table, literals and escape
// sequences, implicit and explicit conversion with worked results, the Scanner
// method table and the nextInt-then-nextLine pitfall. Every snippet is
// original and none repeats a snippet on the output questions page. Inside
// the 2027 syllabus (values and data types and input in Java are Class 9
// chapters revised and examined in Class 10). Every range, default value,
// cast and program on this page was compiled with javac 21 (OpenJDK 21.0.12)
// and run with java 21 on 2026-11-06 from scratch files outside the repo; the
// ranges were printed from the MIN_VALUE and MAX_VALUE constants, the Scanner
// programs were fed the inputs shown, and the two compile errors quoted are
// javac's own messages.
'use strict';

module.exports = {
  slug: 'icse-class-10-data-types-and-input-java',
  code: 'ic37',
  board: 'icse',
  themeColor: '#7A4A1E',
  dateModified: '2026-11-06',
  title: 'Data Types in Java ICSE Class 10: Casting and Scanner 2027',
  description: 'Data types in Java for ICSE Class 10: the primitive type table, implicit and explicit type casting with results, Scanner methods and the nextLine pitfall.',
  ogTitle: 'Data Types in Java for ICSE Class 10, Casting and Scanner Input',
  ogDesc: 'All eight primitive types with size, range and default value, literals and escape sequences, implicit and explicit type conversion with sixteen worked results, every Scanner method in the syllabus, and the nextInt then nextLine pitfall with its fix. All run in Java 21.',
  twDesc: 'Primitive types, implicit and explicit casting, Scanner methods and the nextLine pitfall for ICSE Class 10 Java, all run in Java.',
  headline: 'Data Types in Java for ICSE Class 10: Primitive Types, Type Casting and Scanner Input for 2027',
  courseName: 'ICSE Class 10 Computer Applications (Java) Data Types, Type Conversion and Input Practice, Live Online',
  courseDesc: 'Live online practice of values and data types and input in Java for ICSE Class 10 Computer Applications in the 2027 examination: the eight primitive types, literals and escape sequences, implicit and explicit type conversion, overflow, and reading input with the Scanner class including the nextLine pitfall, each worked on paper and then run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Data types',
  navLinks: [['#primitive', 'Data types'], ['#casting', 'Type casting'], ['#scanner', 'Scanner'], ['#nextline', 'nextLine pitfall'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Data types and input']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Values, data types and input 2027',
  h1: 'Data types in Java for ICSE Class 10, with casting and Scanner input.',
  lede: 'Data types in Java for ICSE Class 10 decide what a variable can hold, how much memory it takes and what an expression gives back. Questions on them run through the whole paper: name the type of a literal, state the result type of a mixed expression, cast a value, or read input with Scanner. This page has the primitive table with ranges, sixteen conversions worked to their result, the Scanner method table and the one input bug that catches nearly every student. Everything was run in Java 21, and our live mini batch drills it in BlueJ.',
  heroNote: 'Live online &middot; 8 primitive types &middot; 16 casts worked &middot; Scanner methods &middot; the nextLine pitfall fixed &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of data types, type casting and Scanner input for ICSE Class 10.',
  timetable: {
    label: 'When types and input are drilled',
    title: 'Type drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, result-type and casting sets', '5:30', 'PM IST'],
      ['Wednesday, programs with Scanner input', '8:00', 'PM IST'],
      ['Primitive types in the table', '8', 'types'],
      ['Every cast checked in', 'BlueJ', 'live']
    ],
    zones: '<b>India:</b> both evenings above, in a group of up to six. <b>Abroad:</b> private classes only, timed for when school ends where your child lives, from Muscat to Jakarta.',
    stamps: ['Widening is automatic', 'Narrowing needs a cast']
  },
  picksH2: 'Courses that teach types and input properly',
  picksLede: 'Three routes: our ICSE Computer Applications batch, which drills types, casts and Scanner input every week; ISC-level Computer Science for the years after the board; and data structures for a student who wonders how values sit in memory.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Our small-group ICSE course, in which every result type is guessed on paper first and every input program is typed into BlueJ and run.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'Two more years of Java after Class 10, where a wrong type in a long program costs far more time to trace.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'Memory, arrays and how a choice between int and long changes what a program can handle.' }
  ],
  capsule: 'Java has eight primitive data types: byte, short, int and long for whole numbers, float and double for decimals, char for one character and boolean for true or false. String, arrays and objects are non-primitive types. In a mixed expression Java widens the smaller type itself (implicit conversion, or coercion); moving to a smaller type needs an explicit cast, so (int) 9.99 gives 9. ICSE input uses the Scanner class, where nextLine straight after nextInt returns an empty String. Our ICSE mini batch practises all of it on Tuesday and Wednesday evenings in India, with one to one classes for any other time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="primitive">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are the data types in Java?</p>
      <h2>Values and data types ICSE: the eight primitive types</h2>
      <p class="bx-lede">A data type tells Java what kind of value a variable holds, how much memory it uses and which operations are allowed. The ranges and default values below were printed by Java itself from each type's MIN_VALUE and MAX_VALUE constants and from unassigned fields.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Type</th><th scope="col">Holds</th><th scope="col">Size</th><th scope="col">Range</th><th scope="col">Default</th><th scope="col">Literal</th></tr></thead>
        <tbody>
          <tr><td><code>byte</code></td><td>Small whole number</td><td>8 bits</td><td>-128 to 127</td><td class="bx-num">0</td><td>None; <code>byte b = 12;</code> works</td></tr>
          <tr><td><code>short</code></td><td>Whole number</td><td>16 bits</td><td>-32768 to 32767</td><td class="bx-num">0</td><td>None; <code>short s = 900;</code> works</td></tr>
          <tr><td><code>int</code></td><td>Whole number</td><td>32 bits</td><td>-2147483648 to 2147483647</td><td class="bx-num">0</td><td><code>425</code></td></tr>
          <tr><td><code>long</code></td><td>Large whole number</td><td>64 bits</td><td>About &plusmn;9.22 x 10<sup>18</sup></td><td class="bx-num">0</td><td><code>3000000000L</code></td></tr>
          <tr><td><code>float</code></td><td>Decimal, about 7 digits</td><td>32 bits</td><td>Up to about 3.4 x 10<sup>38</sup></td><td class="bx-num">0.0</td><td><code>2.75f</code></td></tr>
          <tr><td><code>double</code></td><td>Decimal, about 15 digits</td><td>64 bits</td><td>Up to about 1.8 x 10<sup>308</sup></td><td class="bx-num">0.0</td><td><code>2.75</code></td></tr>
          <tr><td><code>char</code></td><td>One Unicode character</td><td>16 bits</td><td>Codes 0 to 65535</td><td>Code 0</td><td><code>'k'</code></td></tr>
          <tr><td><code>boolean</code></td><td>true or false</td><td>Not fixed in bits by Java</td><td>true, false</td><td class="bx-num">false</td><td><code>true</code></td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Default values apply to instance variables and array elements only. A local variable inside a method has no default, which is why using one before giving it a value does not compile. String, arrays and class objects are non-primitive (reference) types: their default is null.</p>
    <h3 class="bx-mt-40">Literals and escape sequences</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Literal</th><th scope="col">Type</th><th scope="col">Escape sequence</th><th scope="col">Meaning</th></tr></thead>
        <tbody>
          <tr><td><code>64</code>, <code>-3</code></td><td>int (integer literal)</td><td><code>\\n</code></td><td>New line</td></tr>
          <tr><td><code>64L</code></td><td>long</td><td><code>\\t</code></td><td>Horizontal tab</td></tr>
          <tr><td><code>6.4</code>, <code>6.4e2</code></td><td>double (real literal)</td><td><code>\\\\</code></td><td>One backslash</td></tr>
          <tr><td><code>6.4f</code></td><td>float</td><td><code>\\"</code></td><td>Double quote inside a String</td></tr>
          <tr><td><code>'6'</code></td><td>char (character literal)</td><td><code>\\'</code></td><td>Single quote</td></tr>
          <tr><td><code>"6"</code></td><td>String (string literal)</td><td colspan="2">Run: <code>System.out.println("A\\tB\\\\C\\"D\\'E");</code> printed A, a tab, then B\\C"D'E</td></tr>
          <tr><td><code>true</code>, <code>false</code></td><td>boolean literals (the word null is the null literal)</td><td colspan="2">An escape sequence counts as one character: <code>'\\n'</code> is a single char</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="casting">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What is implicit and explicit type casting in Java?</p>
      <h2>Implicit and explicit type casting ICSE, worked to the result</h2>
      <p class="bx-lede">Implicit conversion (coercion, or widening) is done by Java on its own when a smaller type meets a larger one. Explicit conversion (type casting, or narrowing) is written by the programmer as (type) value and may lose data. The widening order is byte, short, int, long, float, double, with char widening to int.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Code</th><th scope="col">Result (run)</th><th scope="col">Kind and reason</th></tr></thead>
        <tbody>
          <tr><td>1</td><td><code>int a = 7; double x = 2.5;</code><br><code>a + x</code></td><td class="bx-num">9.5</td><td>Implicit: int widened to double</td></tr>
          <tr><td>2</td><td><code>char ch = 'A';</code><br><code>ch + 3</code></td><td class="bx-num">68</td><td>Implicit: char widened to int, code 65 plus 3</td></tr>
          <tr><td>3</td><td><code>short s1 = 10, s2 = 20;</code><br><code>int sum = s1 + s2;</code></td><td class="bx-num">30</td><td>Implicit: short arithmetic is done in int</td></tr>
          <tr><td>4</td><td><code>byte p = 10, q = 20;</code><br><code>byte r = p + q;</code></td><td>Does not compile</td><td>javac: <code>possible lossy conversion from int to byte</code>; write <code>(byte) (p + q)</code></td></tr>
          <tr><td>5</td><td><code>10 / 4 * 4.0</code></td><td class="bx-num">8.0</td><td>10 / 4 is int 2 first; only then widened for * 4.0</td></tr>
          <tr><td>6</td><td><code>5 / 2.0f</code></td><td class="bx-num">2.5</td><td>Implicit: int widened to float</td></tr>
          <tr><td>7</td><td><code>float ff = 1.1f;</code><br><code>double dd = ff;</code></td><td class="bx-num">1.100000023841858</td><td>Implicit widening keeps float's slightly inexact value</td></tr>
          <tr><td>8</td><td><code>(int) 9.99</code> and <code>(int) -9.99</code></td><td class="bx-num">9 and -9</td><td>Explicit: the fraction is cut off, never rounded</td></tr>
          <tr><td>9</td><td><code>(int) 7.5</code> and <code>Math.round(7.5)</code></td><td class="bx-num">7 and 8</td><td>A cast truncates; round rounds</td></tr>
          <tr><td>10</td><td><code>(char) 66</code> and <code>(int) 'z'</code></td><td class="bx-num">B and 122</td><td>Explicit: between a code and its character</td></tr>
          <tr><td>11</td><td><code>(byte) 200</code></td><td class="bx-num">-56</td><td>Explicit narrowing out of range wraps round: 200 minus 256</td></tr>
          <tr><td>12</td><td><code>double avg = (double) (17 + 18) / 2;</code></td><td class="bx-num">17.5</td><td>Explicit: the cast makes 35 a double before the division</td></tr>
          <tr><td>13</td><td><code>char cc = 'A' + 2;</code></td><td class="bx-num">C</td><td>Allowed: a constant that fits in char needs no cast</td></tr>
          <tr><td>14</td><td><code>'a' + 'b'</code> and <code>"" + 'a' + 'b'</code></td><td class="bx-num">195 and ab</td><td>Two chars add as ints (97 + 98); a String first makes them join</td></tr>
          <tr><td>15</td><td><code>int big = 2147483647;</code><br><code>big = big + 1;</code></td><td class="bx-num">-2147483648</td><td>Overflow: past the int maximum the value wraps to the minimum, with no error</td></tr>
          <tr><td>16</td><td><code>86400 * 1000 * 365</code> and <code>86400L * 1000 * 365</code></td><td class="bx-num">1471228928 and 31536000000</td><td>Milliseconds in a year overflow int; one L makes the whole product long</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">
      Writing <code>long n = 3000000000;</code> without the L does not even compile: javac says <code>integer number too large</code>, because a plain whole-number literal is an int. The return type of each Math method, which decides many of these results, is on
      <a class="bx-link" href="/icse-class-10-math-library-methods">Math library methods for ICSE Class 10</a>, and how the operators combine types is on
      <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="scanner">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you take input in Java using the Scanner class?</p>
      <h2>Scanner class input ICSE: every method and what it reads</h2>
      <p class="bx-lede">Import java.util.Scanner (or java.util.*), create one object with new Scanner(System.in), print a prompt, then call the method that matches the type you want. Each next method skips leading spaces and reads one token; nextLine reads everything up to the end of the line.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Method</th><th scope="col">Returns</th><th scope="col">Reads</th><th scope="col">If the input does not fit</th></tr></thead>
        <tbody>
          <tr><td><code>nextInt()</code></td><td>int</td><td>One whole-number token</td><td>InputMismatchException</td></tr>
          <tr><td><code>nextLong()</code>, <code>nextShort()</code>, <code>nextByte()</code></td><td>long, short, byte</td><td>One whole-number token in that type's range</td><td>InputMismatchException</td></tr>
          <tr><td><code>nextDouble()</code>, <code>nextFloat()</code></td><td>double, float</td><td>One number token; 12 is read as 12.0</td><td>InputMismatchException</td></tr>
          <tr><td><code>nextBoolean()</code></td><td>boolean</td><td>The token true or false, in any case</td><td>InputMismatchException</td></tr>
          <tr><td><code>next()</code></td><td>String</td><td>One word: stops at a space</td><td>Always works on text</td></tr>
          <tr><td><code>nextLine()</code></td><td>String</td><td>The rest of the current line, spaces included</td><td>Returns "" if only the line end is left</td></tr>
          <tr><td><code>next().charAt(0)</code></td><td>char</td><td>The first character of the next word</td><td>There is no nextChar() method</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Six methods, one input</b><span>next against nextLine</span></figcaption>
  <pre>Scanner sc = new Scanner(System.in);
String first = sc.next();
String rest = sc.nextLine();
char grade = sc.next().charAt(0);
double fee = sc.nextDouble();
boolean paid = sc.nextBoolean();
long phone = sc.nextLong();

<i>// Input line 1: Ananya Rao Kumar</i>
<i>// Input line 2: B+ 1250.75 true 9876543210</i>
<i>// first = [Ananya]  rest = [ Rao Kumar]</i>
<i>// grade = [B]  fee = [1250.75]</i>
<i>// paid = [true]  phone = [9876543210]</i></pre>
  <p class="bx-code-note">next stopped at the first space; nextLine took the rest, including its leading space. charAt(0) kept only B from the token B+. A ten-digit phone number needs nextLong, since it is beyond the int range.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">To read</th><th scope="col">Use</th></tr></thead>
          <tbody>
            <tr><td>Marks, age, count</td><td><code>nextInt()</code></td></tr>
            <tr><td>Price, percentage, radius</td><td><code>nextDouble()</code></td></tr>
            <tr><td>Phone or account number</td><td><code>nextLong()</code></td></tr>
            <tr><td>One word, such as a city</td><td><code>next()</code></td></tr>
            <tr><td>A full name or sentence</td><td><code>nextLine()</code></td></tr>
            <tr><td>A grade or menu letter</td><td><code>next().charAt(0)</code></td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      Values can also reach a program through initialisation in the code or as method parameters, which BlueJ asks for in a dialog box when the method is called. Converting a String that was read into a number uses the parse methods covered on
      <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="nextline">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Why does nextLine() skip input after nextInt()?</p>
      <h2>The nextLine pitfall: why the text comes back empty, and the fix</h2>
      <p class="bx-lede">nextInt reads the digits but leaves the Enter key, the line end, waiting in the input. The nextLine that follows finds that line end straight away and returns an empty String, so the program never waits for the text. Add one extra nextLine() call after nextInt to use up the leftover line end.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Faulty</b><span>the name is skipped</span></figcaption>
  <pre>import java.util.Scanner;

public class Pitfall2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Flat number: ");
        int flat = in.nextInt();
        System.out.print("Society: ");
        String society = in.nextLine();
        System.out.println(flat + ", " + society + ".");
    }
}
<i>// Typed: 402, Enter, Green Meadows, Enter</i>
<i>// Printed: 402, .</i></pre>
  <p class="bx-code-note">The program printed the second prompt and finished at once: society is the empty String left over from the first line.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Fixed</b><span>one extra line</span></figcaption>
  <pre>import java.util.Scanner;

public class Fixed2 {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Flat number: ");
        int flat = in.nextInt();
        in.nextLine();
        System.out.print("Society: ");
        String society = in.nextLine();
        System.out.println(flat + ", " + society + ".");
    }
}
<i>// Typed: 402, Enter, Green Meadows, Enter</i>
<i>// Printed: 402, Green Meadows.</i></pre>
  <p class="bx-code-note">The lone in.nextLine() reads and throws away the line end after 402, so the next call waits for the society name.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">A Section B input program that avoids the pitfall</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Name first, numbers after</b><span>marks, percentage and band</span></figcaption>
  <pre>import java.util.Scanner;

public class Report {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Name: ");
        String name = sc.nextLine();
        System.out.print("Marks in 5 subjects: ");
        int total = 0;
        for (int k = 1; k &lt;= 5; k++)
            total += sc.nextInt();
        double percent = total / 5.0;
        int rounded = (int) Math.round(percent);
        char band = percent &gt;= 90 ? 'A' : percent &gt;= 75 ? 'B' : 'C';
        System.out.println(name + ": total " + total + ", "
            + percent + "%, rounded " + rounded + ", band " + band);
    }
}
<i>// Input: Ishaan Mehta / 88 92 79 95 82</i>
<i>// Ishaan Mehta: total 436, 87.2%, rounded 87, band B</i></pre>
  <p class="bx-code-note">Reading the full name before any number sidesteps the pitfall entirely. Two casts appear: 5.0 makes the percentage a double, and (int) turns the long from Math.round into an int.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
          <tbody>
            <tr><td><code>name</code></td><td>String</td><td>Full name, read with nextLine</td></tr>
            <tr><td><code>total</code></td><td>int</td><td>Sum of the five marks</td></tr>
            <tr><td><code>k</code></td><td>int</td><td>Loop counter, 1 to 5</td></tr>
            <tr><td><code>percent</code></td><td>double</td><td>Average, with decimals kept</td></tr>
            <tr><td><code>rounded</code></td><td>int</td><td>Percentage to the nearest whole number</td></tr>
            <tr><td><code>band</code></td><td>char</td><td>A, B or C from the percentage</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">
      A wrong token typed into nextInt stops the program with InputMismatchException; that and other crashes are classified on
      <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Java error finding questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="sectiona">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How are data types asked in Section A?</p>
      <h2>Type conversion Java ICSE: the question shapes and how to answer</h2>
      <p class="bx-lede">Section A is 40 compulsory marks of one-mark MCQs and two-mark parts, and this chapter supplies a steady share of both. The shapes repeat, so a fixed answer habit for each one is worth building.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>"Name the data type of"</h3><p>Look at the literal itself: a decimal point means double unless it ends in f; single quotes mean char; double quotes mean String, even for one letter or a digit.</p></div>
      <div class="bx-card"><h3>"State the result type"</h3><p>Find the largest type in the expression after char, byte and short have become int. That type is the answer, and the value must be written in it: 8.0, not 8.</p></div>
      <div class="bx-card"><h3>"Implicit or explicit?"</h3><p>If you can see a (type) in brackets, it is explicit. If Java converts on its own because a smaller type met a bigger one, it is implicit, also called coercion or widening.</p></div>
      <div class="bx-card"><h3>"Primitive or non-primitive?"</h3><p>The eight keywords in the table are primitive. String, arrays and classes are non-primitive, also called reference or composite types.</p></div>
      <div class="bx-card"><h3>"Write the statement to input"</h3><p>Match the method to the type: a ten-digit number needs nextLong, a character needs next().charAt(0). Declare the variable in the same line.</p></div>
      <div class="bx-card"><h3>"Size in bytes"</h3><p>Convert the bits: byte 1, short 2, int 4, long 8, float 4, double 8, char 2. Writing bits when bytes are asked is a common lost mark.</p></div>
    </div>
    <p class="bx-mt-40">
      Mixed one-mark questions from every chapter are on
      <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>, and the Class 9 chapters that this page revises are mapped on
      <a class="bx-link" href="/icse-class-9-java-revision-for-class-10">Class 9 Java revision for Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are data types and input taught live?</p>
      <h2>How the mini batch practises types, casts and input</h2>
      <p class="bx-lede">Types are learnt by predicting a result type before running the code, and input is learnt by typing real values into real programs. The week is split that way.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: predict the type, then the value</h4><p>At 5:30 PM IST the batch gets a timed set of mixed expressions and casts. Each answer is written as a type and a value, such as "double, 8.0".</p></li>
      <li class="bx-step"><h4>BlueJ checks each one live</h4><p>Every expression is run on a shared screen. A missing .0 or a wrongly rounded cast is spotted by the whole group, not just the student who wrote it.</p></li>
      <li class="bx-step"><h4>Wednesday: input programs</h4><p>At 8:00 PM IST students write a Section B program that reads mixed input with Scanner. The nextLine pitfall is triggered on purpose once, so nobody meets it for the first time in an exam.</p></li>
      <li class="bx-step"><h4>Variable lists every time</h4><p>Each program ends with a variable list of name, type and purpose, the habit the ICSE paper asks for in its instructions.</p></li>
      <li class="bx-step"><h4>Full papers from December</h4><p>Timed two-hour mock papers then mix type and input questions into both sections, and each script is marked the way an ICSE examiner would mark it.</p></li>
    </ol>
    <p class="bx-mt-40">
      Data types and input are the base for every program on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise types and input in the mini batch, or one to one',
  chooseLede: 'What changes between the two formats is only the timing and the group. The type drills and input programs are identical. Families abroad are taught privately; families in India may choose. You pay month by month and there is no joining fee.',
  chooseBatch: [
    'Two fixed evenings: Tuesday 5:30 PM and Wednesday 8:00 PM IST',
    'Never more than six students in the group',
    'Timed result-type and casting sets each Tuesday',
    'A Scanner input program written each Wednesday',
    'Every cast and input run in BlueJ on screen'
  ],
  choosePersonal: [
    'Days and hours you choose, wherever you live',
    'Extra time on the conversions your child gets wrong',
    'Their own input programs debugged with them',
    'Class 9 gaps in this chapter filled first',
    'The teachers and 2027 syllabus of the batch, at your pace'
  ],
  chooseAfter: 'A student who joined ICSE Computer Applications late, or whose Class 9 basics are shaky, often needs a few one to one sessions on types and input before the rest of Class 10 makes sense. A student who is already comfortable and wants steady weekly practice across the paper is better served by the batch. Fees are shown in your own currency.',
  zonesH2: 'Data types and input practice for ICSE students abroad',
  zonesLede: 'An ICSE school in the UAE or Singapore follows the same Computer Applications syllabus and paper, so the same type and input questions decide the same marks. Outside India the drills run one to one, after school in the student\'s own time zone.',
  zonesAfter: 'The slot is agreed after the free demo and can move around school tests. How overseas classes run is described on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about data types and input',
  faqH2: 'What students ask about data types and Scanner input in ICSE Java',
  faqs: [
    ['How many data types are there in Java?', 'Java has eight primitive data types: byte, short, int, long, float, double, char and boolean. Besides these there are non-primitive, or reference, types such as String, arrays and classes, which hold a reference to an object rather than the value itself. ICSE expects the eight primitive types with their sizes.'],
    ['What is the difference between primitive and non-primitive data types?', 'Primitive types are built into Java, store the value directly and have a fixed size, such as int at 32 bits. Non-primitive types, such as String, arrays and class types, are created from classes, store a reference to an object, can be null, and can have methods called on them.'],
    ['What is implicit type conversion in Java?', 'Implicit conversion, also called coercion or widening, is the automatic change of a smaller type into a larger one when they meet in an expression or assignment. For example, an int added to a double is converted to double first, so 7 + 2.5 gives 9.5. No data is lost, so Java does it without being asked.'],
    ['What is explicit type casting in Java with an example?', 'Explicit casting is a conversion the programmer writes by putting the target type in brackets before a value. (int) 9.99 gives 9, because the fraction is cut off, and (char) 66 gives B. It is needed whenever a value moves to a smaller type, such as double to int, since data may be lost.'],
    ['What is the size of char in Java?', 'char is 16 bits, which is 2 bytes, because Java stores characters in Unicode. It holds codes from 0 to 65535. This differs from languages that use 1 byte for a character, and ICSE questions sometimes test exactly that difference.'],
    ['Which Scanner method is used to input a character in Java?', 'Scanner has no nextChar method. The usual way is sc.next().charAt(0), which reads the next word as a String and keeps its first character. If the user types more than one character, only the first is kept, so B+ would give B.'],
    ['What is the difference between next() and nextLine()?', 'next() reads one word: it skips leading spaces and stops at the next space or line end. nextLine() reads the whole rest of the current line, spaces included, and then moves past the line end. Use next() for one word such as a city and nextLine() for a full name or a sentence.'],
    ['Why is nextLine() skipped after nextInt()?', 'nextInt() reads the number but leaves the line end from the Enter key in the input. The next nextLine() reads up to that line end at once and returns an empty String, so it looks as if the input was skipped. Call sc.nextLine() once more after nextInt() to use up the leftover line end.'],
    ['What is the default value of a variable in Java?', 'Instance variables and array elements get defaults: 0 for whole-number types, 0.0 for float and double, the character with code 0 for char, false for boolean and null for String and other references. Local variables inside a method get no default and must be assigned before use, or the program will not compile.'],
    ['Do you teach data types and Scanner input in the live ICSE classes?', 'Yes. The mini batch drills result types and casts in timed sets every Tuesday at 5:30 PM IST and writes a Scanner input program every Wednesday at 8:00 PM IST, with every answer run in BlueJ on a shared screen. Students who need gaps filled from Class 9 can take personalised one to one classes.']
  ],
  startH2: 'Book a free live class on data types and input',
  startHtml: `        <p>In the free demo your child predicts the type and value of a few mixed expressions and casts, writes a short Scanner program with the mentor, and watches both run in BlueJ, including the nextLine pitfall and its fix. Afterwards you hear plainly which basics need work and whether the mini batch or one to one suits your child better.</p>
        <p>Want more first? See <a class="bx-link" href="/icse-class-10-operators-in-java">operators in Java for ICSE Class 10</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Data types and input 2027'
};
