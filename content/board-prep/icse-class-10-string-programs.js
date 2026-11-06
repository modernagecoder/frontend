// ICSE Class 10 Computer Applications (Java): string programs. Intent: "icse
// class 10 string programs", "string handling icse", "palindrome word program
// java icse", "pig latin program icse", "frequency of characters java icse",
// "string functions icse". Distinct from the programs hub (one palindrome word,
// one reverse-each-word program) and from the two blog lists (single-word
// palindrome, single-word Pig Latin, one-character count): every program here
// works on a whole sentence or a whole alphabet, and all inputs are new. Inside
// the 2027 syllabus: String and Character methods only, no StringBuffer, no
// split, no recursion. Every program and every method example on this page was
// compiled with javac 21 (OpenJDK 21.0.12) and run with java 21 on 2026-11-06
// from scratch files outside the repo, fed the sample input shown; each sample
// output below is pasted from that run.
'use strict';

module.exports = {
  slug: 'icse-class-10-string-programs',
  code: 'ic03',
  board: 'icse',
  themeColor: '#3D5A3A',
  title: 'ICSE Class 10 String Programs in Java, Solved for 2027',
  description: 'ICSE Class 10 string programs for 2027: palindrome words, Pig Latin, letter frequency and more, each run in Java, plus a String functions cheat table.',
  ogTitle: 'ICSE Class 10 String Programs, Run in Java with Sample Output',
  ogDesc: 'Six full board-style string handling programs for ICSE Class 10 Computer Applications, each with a variable description table, comments and a real sample run, plus a cheat table of the String functions with their return values.',
  twDesc: 'Board-style ICSE Class 10 string programs in Java with variable description tables, sample runs and a String functions cheat table.',
  headline: 'ICSE Class 10 String Programs for 2027: Six Board-Style Programs and a String Functions Cheat Table',
  courseName: 'ICSE Class 10 Computer Applications (Java) String Handling Practice, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications string handling for the 2027 examination: String and Character methods, word-by-word sentence programs, palindrome words, Pig Latin, letter frequency with an array, coding and decoding, and variable description tables, written by hand against a timer and then run in BlueJ on a shared screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Strings',
  navLinks: [['#families', 'Program families'], ['#methods', 'String functions'], ['#palindrome', 'Programs'], ['#frequency', 'Frequency'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'String programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; String programs 2027',
  h1: 'ICSE Class 10 string programs, written the way the board marks them.',
  lede: 'ICSE Class 10 string programs are the Section B questions that hand you a word or a sentence and ask you to take it apart character by character. This page carries six complete programs that work on whole sentences, each with Scanner input, comments, a variable description table and a sample run copied from Java 21, plus a cheat table of the String functions and what each one returns. In our live mini batch the same programs are written on paper first and then run in BlueJ in front of the group.',
  heroNote: 'Live online &middot; six full string programs &middot; String functions cheat table &middot; every sample run from real Java &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 string programs in Java.',
  timetable: {
    label: 'When string handling is practised',
    title: 'String practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, sentence programs on paper', '5:30', 'PM IST'],
      ['Wednesday, run and fix in BlueJ', '8:00', 'PM IST'],
      ['String program families covered', '6', 'in rotation'],
      ['Variable tables checked', 'Every', 'program']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same string programs taught one to one, in an evening slot that suits ICSE students in the Gulf, Singapore and further afield.',
    stamps: ['Section B &middot; 15 marks each', 'Written, then run']
  },
  picksH2: 'Courses where string programs are taught',
  picksLede: 'The ICSE Java course in which the mini batch writes these programs, the Class 11 and 12 Computer Science course where string handling returns at ISC depth, and Java for Teens for a younger sibling or anyone who wants Java without a board paper attached.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with a string handling program written and run every fortnight.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students heading to ISC Computer Science, where sentence programs grow into word sorting and text processing.' },
    { slug: 'python-complete-masterclass-teens', code: 'Second language / Python', h3: 'Python for Teens', p: 'For the student who enjoys text puzzles and wants to see the same string ideas in a second language after the board exam.' }
  ],
  capsule: 'ICSE Class 10 string programs ask you to read a word or sentence with Scanner and process it one character at a time with charAt, length, indexOf, substring and the Character methods. The families the board returns to are palindrome words, Pig Latin, letter frequency, word extraction (counting, capitalising, finding the longest word), coding by shifting letters and spotting double letters. Each answer earns its marks through a working loop, correct method use, comments and a variable description table. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one at the family\'s time.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="families">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What kinds of string programs does ICSE set?</p>
      <h2>String handling ICSE: the six program families</h2>
      <p class="bx-lede">Nearly every Section B string question belongs to one of six families, and all six rest on one loop: walk the string with charAt from index 0 to length() minus 1. Learn the family, and an unseen question becomes a small change to a program you already know.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Family</th><th scope="col">What the question asks</th><th scope="col">The key idea</th><th scope="col">Program below</th></tr></thead>
        <tbody>
          <tr><td>Palindrome</td><td>Check a word, or print every palindrome word in a sentence</td><td>Build the reverse with a backward loop, compare with equals</td><td>Program 1</td></tr>
          <tr><td>Pig Latin</td><td>Move the letters before the first vowel to the end and add AY</td><td>indexOf on "AEIOU" finds a vowel; two substrings rebuild the word</td><td>Program 2</td></tr>
          <tr><td>Frequency</td><td>Count each letter, vowel or character in a string</td><td>An int array of 26 counters, indexed by ch minus 'A'</td><td>Program 3</td></tr>
          <tr><td>Word handling</td><td>Capitalise each word, count words, find words with a property</td><td>A word starts where the character before it is a space</td><td>Program 4</td></tr>
          <tr><td>Coding</td><td>Shift each letter a fixed number of places, keep other characters</td><td>Character arithmetic with % 26 so Z wraps round to A</td><td>Program 5</td></tr>
          <tr><td>Pairs and lengths</td><td>Double letters, consecutive letters, the longest word</td><td>Compare charAt(i) with charAt(i + 1) inside the bounds</td><td>Program 6</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">The word-extraction template</h3>
    <p>Four of the six programs need the words of a sentence one at a time. The ICSE way, without split, is to add one space to the end of the sentence so the last word is closed like the others, then build each word letter by letter:</p>
    <ol class="bx-qlist">
      <li>Read the sentence with <code>nextLine()</code>, then <code>trim()</code> it and add <code>" "</code> at the end.</li>
      <li>Loop over every index. If the character is not a space, add it to <code>w</code>.</li>
      <li>When a space arrives and <code>w</code> is not empty, the word is complete: process it.</li>
      <li>Set <code>w = ""</code> and carry on. The extra space guarantees the last word is processed too.</li>
    </ol>
    <p class="bx-mt-40">
      The programs hub keeps one short example of each program shape across the whole syllabus:
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="methods">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which String functions must you know?</p>
      <h2>String functions ICSE: a cheat table with real return values</h2>
      <p class="bx-lede">These are the String methods ICSE Class 10 programs and output questions lean on. Every result in the last column was printed by Java 21. Learn the return type as well as the value: an int, a char, a boolean and a String are four different answers.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Method</th><th scope="col">Returns</th><th scope="col">Example</th><th scope="col">Result</th></tr></thead>
        <tbody>
          <tr><td><code>length()</code></td><td>int</td><td><code>"  Board Exam  ".length()</code></td><td class="bx-num">14</td></tr>
          <tr><td><code>trim()</code></td><td>String</td><td><code>"  Board Exam  ".trim()</code></td><td class="bx-num">Board Exam</td></tr>
          <tr><td><code>charAt(int)</code></td><td>char</td><td><code>"COMPUTER".charAt(3)</code></td><td class="bx-num">P</td></tr>
          <tr><td><code>indexOf(char)</code></td><td>int</td><td><code>"COMPUTER".indexOf('U')</code> and <code>indexOf('Z')</code></td><td class="bx-num">4 and -1</td></tr>
          <tr><td><code>lastIndexOf(char)</code></td><td>int</td><td><code>"BANANA".lastIndexOf('A')</code></td><td class="bx-num">5</td></tr>
          <tr><td><code>substring(int)</code></td><td>String</td><td><code>"COMPUTER".substring(3)</code></td><td class="bx-num">PUTER</td></tr>
          <tr><td><code>substring(int, int)</code></td><td>String</td><td><code>"COMPUTER".substring(3, 6)</code></td><td class="bx-num">PUT</td></tr>
          <tr><td><code>toLowerCase()</code> / <code>toUpperCase()</code></td><td>String</td><td><code>"COMPUTER".toLowerCase()</code>, <code>"java".toUpperCase()</code></td><td class="bx-num">computer, JAVA</td></tr>
          <tr><td><code>replace(char, char)</code></td><td>String</td><td><code>"PAPER".replace('P', 'T')</code></td><td class="bx-num">TATER</td></tr>
          <tr><td><code>concat(String)</code></td><td>String</td><td><code>"ICSE".concat("2027")</code></td><td class="bx-num">ICSE2027</td></tr>
          <tr><td><code>equals</code> / <code>equalsIgnoreCase</code></td><td>boolean</td><td><code>"Java".equals("JAVA")</code>, <code>"Java".equalsIgnoreCase("JAVA")</code></td><td class="bx-num">false, true</td></tr>
          <tr><td><code>compareTo(String)</code></td><td>int</td><td><code>"APPLE".compareTo("ANT")</code></td><td class="bx-num">2</td></tr>
          <tr><td><code>compareToIgnoreCase(String)</code></td><td>int</td><td><code>"apple".compareToIgnoreCase("APPLE")</code></td><td class="bx-num">0</td></tr>
          <tr><td><code>startsWith</code> / <code>endsWith</code></td><td>boolean</td><td><code>"ICSE".startsWith("IC")</code>, <code>"BlueJ".endsWith("j")</code></td><td class="bx-num">true, false</td></tr>
          <tr><td><code>String.valueOf</code></td><td>String</td><td><code>String.valueOf(45) + 5</code></td><td class="bx-num">455</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>substring(3, 6) stops before 6</h3><p>The end index is excluded, so the result has 6 minus 3, that is three, characters. The commonest slip in the whole table.</p></div>
      <div class="bx-card"><h3>compareTo returns a difference</h3><p>"APPLE" and "ANT" first differ at P and N. P is code 80 and N is 78, so the answer is 2, not 1 and not true.</p></div>
      <div class="bx-card"><h3>Results must be stored</h3><p>A String never changes. <code>s.toUpperCase();</code> on its own line does nothing useful; write <code>s = s.toUpperCase();</code>.</p></div>
    </div>
    <p class="bx-mt-40">
      Character tests such as <code>isLetter</code>, <code>isUpperCase</code> and <code>toUpperCase</code>, used in Programs 3 to 5, are covered with the wrapper classes on
      <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes for ICSE Class 10</a>, and String results as one-mark traps are on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Computer Applications output questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="palindrome">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do you write the palindrome word and Pig Latin programs?</p>
      <h2>Palindrome word program in Java ICSE, and the Pig Latin program</h2>
      <p class="bx-lede">A palindrome word reads the same backwards, such as NOON. The board version usually goes one step further and asks for every palindrome word in a sentence, which is the word-extraction template with a reverse check inside it.</p>
    </div>
    <h3>Program 1: print and count the palindrome words in a sentence</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>PalinWords.java</b><span>palindrome words</span></figcaption>
  <pre>import java.util.Scanner;
class PalinWords {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence in capitals:");
        String s = sc.nextLine().trim() + " ";   <i>// a space at the end closes the last word</i>
        String w = "";                           <i>// the word being built</i>
        int count = 0;
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') {
                w = w + ch;
            } else if (w.length() &gt; 0) {
                String rev = "";
                for (int j = w.length() - 1; j &gt;= 0; j--)
                    rev = rev + w.charAt(j);
                if (w.equals(rev)) {
                    System.out.print(w + " ");
                    count++;
                }
                w = "";                          <i>// start the next word</i>
            }
        }
        System.out.println();
        System.out.println("Number of palindrome words = " + count);
    }
}</pre>
  <p class="bx-code-note">equals is used, not ==, because two Strings with the same letters can be different objects.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the sentence, with one space added at the end</td></tr>
              <tr><td>w</td><td>String</td><td>the word being built</td></tr>
              <tr><td>rev</td><td>String</td><td>w written backwards</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character</td></tr>
              <tr><td>count</td><td>int</td><td>number of palindrome words</td></tr>
              <tr><td>i, j</td><td>int</td><td>loop counters</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a sentence in capitals:
<b>MOM AND DAD SAW A RACECAR AT NOON</b>
MOM DAD A RACECAR NOON
Number of palindrome words = 5</pre>
  <p class="bx-code-note">A single letter, A, counts: it reads the same both ways. SAW reversed is WAS, so it is left out.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Program 2: Pig Latin for every word of a sentence</h3>
    <p>Pig Latin moves the letters before the first vowel to the end of the word and adds AY, so TRAIN becomes AINTRAY. The method <code>pig</code> handles one word, which makes the main loop short and lets you show a user-defined method, something examiners reward.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>PigLatinLine.java</b><span>Pig Latin program</span></figcaption>
  <pre>import java.util.Scanner;
class PigLatinLine {
    <i>// returns the Pig Latin form of one word in capitals</i>
    static String pig(String w) {
        for (int i = 0; i &lt; w.length(); i++) {
            char ch = w.charAt(i);
            if ("AEIOU".indexOf(ch) &gt;= 0)
                return w.substring(i) + w.substring(0, i) + "AY";
        }
        return w + "AY";                         <i>// no vowel: just add AY</i>
    }
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine().trim().toUpperCase() + " ";
        String w = "", out = "";
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ')
                w = w + ch;
            else if (w.length() &gt; 0) {
                out = out + pig(w) + " ";
                w = "";
            }
        }
        System.out.println(out.trim());
    }
}</pre>
  <p class="bx-code-note">"AEIOU".indexOf(ch) &gt;= 0 is a one-line vowel test: it is -1 for any consonant.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>w (in pig)</td><td>String</td><td>one word in capitals</td></tr>
              <tr><td>s</td><td>String</td><td>the sentence in capitals, space added</td></tr>
              <tr><td>w (in main)</td><td>String</td><td>the word being built</td></tr>
              <tr><td>out</td><td>String</td><td>the converted sentence</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a sentence:
<b>robot can spy the train</b>
OBOTRAY ANCAY SPYAY ETHAY AINTRAY</pre>
  <p class="bx-code-note">SPY has no vowel from A, E, I, O, U, so the method returns SPY plus AY. Write that rule into your answer as a comment.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">
      Number palindromes are a different program, built with % 10 and / 10, and they live with the other number families on
      <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java for ICSE</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="frequency">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How do you find the frequency of characters in Java?</p>
      <h2>Frequency of characters in Java ICSE, and word-by-word programs</h2>
      <p class="bx-lede">Use an int array of 26 counters. Convert the string to capitals, and for every letter add one to <code>f[ch - 'A']</code>: 'A' lands in f[0], 'B' in f[1] and 'Z' in f[25]. One pass counts the whole alphabet, which is faster and shorter than 26 separate loops.</p>
    </div>
    <h3>Program 3: frequency of every letter in a string</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>LetterFreq.java</b><span>array of counters</span></figcaption>
  <pre>import java.util.Scanner;
class LetterFreq {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a string:");
        String s = sc.nextLine().toUpperCase();
        int f[] = new int[26];                   <i>// f[0] counts A, f[25] counts Z</i>
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isLetter(ch))
                f[ch - 'A']++;
        }
        System.out.println("Letter\\tFrequency");
        for (int k = 0; k &lt; 26; k++) {
            if (f[k] &gt; 0)
                System.out.println((char) (k + 'A') + "\\t" + f[k]);
        }
    }
}</pre>
  <p class="bx-code-note">(char) (k + 'A') turns the counter number back into its letter for printing.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the input in capitals</td></tr>
              <tr><td>f</td><td>int[]</td><td>26 counters, one per letter</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character</td></tr>
              <tr><td>i, k</td><td>int</td><td>loop counters</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a string:
<b>Board Exam Revision</b>
Letter	Frequency
A	2
B	1
D	1
E	2
I	2
M	1
N	1
O	2
R	2
S	1
V	1
X	1</pre>
  <p class="bx-code-note">Spaces are skipped by isLetter, and letters that never appear are not printed because of the f[k] &gt; 0 test.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Program 4: capitalise each word and count words that begin with a vowel</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>TitleVowel.java</b><span>first letter of each word</span></figcaption>
  <pre>import java.util.Scanner;
class TitleVowel {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String s = sc.nextLine().trim().toLowerCase();
        String out = "";
        int v = 0;
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            boolean first = (i == 0 || s.charAt(i - 1) == ' ');
            if (first &amp;&amp; ch != ' ') {
                if ("aeiou".indexOf(ch) &gt;= 0)
                    v++;                         <i>// word begins with a vowel</i>
                out = out + Character.toUpperCase(ch);
            } else
                out = out + ch;
        }
        System.out.println(out);
        System.out.println("Words beginning with a vowel = " + v);
    }
}</pre>
  <p class="bx-code-note">A word begins at index 0, or wherever the previous character is a space. The || short-circuits, so charAt(i - 1) is never asked for when i is 0.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the sentence in small letters</td></tr>
              <tr><td>out</td><td>String</td><td>the sentence with capitals added</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character</td></tr>
              <tr><td>first</td><td>boolean</td><td>true when ch starts a word</td></tr>
              <tr><td>v</td><td>int</td><td>words beginning with a vowel</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a sentence:
<b>an apple a day keeps exams easy</b>
An Apple A Day Keeps Exams Easy
Words beginning with a vowel = 5</pre>
  <p class="bx-code-note">The five are an, apple, a, exams and easy.</p>
</figure>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="coding">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What about coding messages and double letters?</p>
      <h2>ICSE string programs on letter shifts, double letters and the longest word</h2>
      <p class="bx-lede">These two families test character arithmetic and careful bounds. A letter shift adds a number to a char and uses % 26 to wrap from Z back to A; a double-letter check compares each character with the next one and must stop one place before the end.</p>
    </div>
    <h3>Program 5: code a message by shifting each letter two places</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>ShiftCode.java</b><span>coding with wrap-round</span></figcaption>
  <pre>import java.util.Scanner;
class ShiftCode {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a message:");
        String s = sc.nextLine();
        String code = "";
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isUpperCase(ch))
                ch = (char) ('A' + (ch - 'A' + 2) % 26);
            else if (Character.isLowerCase(ch))
                ch = (char) ('a' + (ch - 'a' + 2) % 26);
            code = code + ch;                    <i>// digits, spaces, signs unchanged</i>
        }
        System.out.println("Coded: " + code);
    }
}</pre>
  <p class="bx-code-note">ch - 'A' gives the letter's place, 0 to 25. Adding 2 and taking % 26 keeps it in range, so Y becomes A and Z becomes B.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the original message</td></tr>
              <tr><td>code</td><td>String</td><td>the coded message</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character, then its coded form</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a message:
<b>Meet at Zoo, 7 pm</b>
Coded: Oggv cv Bqq, 7 ro</pre>
  <p class="bx-code-note">Case is kept, Z wraps to B, and the comma, space and 7 pass through untouched.</p>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Program 6: count double letters and find the longest word</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>DoubleLetters.java</b><span>pairs and lengths</span></figcaption>
  <pre>import java.util.Scanner;
class DoubleLetters {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a sentence in capitals:");
        String s = sc.nextLine().trim() + " ";
        int pairs = 0;
        String w = "", big = "";
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (i &lt; s.length() - 1 &amp;&amp; ch != ' ' &amp;&amp; ch == s.charAt(i + 1))
                pairs++;                         <i>// same letter twice in a row</i>
            if (ch != ' ')
                w = w + ch;
            else {
                if (w.length() &gt; big.length())
                    big = w;                     <i>// keeps the first longest word</i>
                w = "";
            }
        }
        System.out.println("Double letter pairs = " + pairs);
        System.out.println("Longest word = " + big + " (" + big.length() + " letters)");
    }
}</pre>
  <p class="bx-code-note">The test i &lt; s.length() - 1 comes first, so charAt(i + 1) can never run past the end of the string.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>s</td><td>String</td><td>the sentence, space added</td></tr>
              <tr><td>pairs</td><td>int</td><td>count of double letters</td></tr>
              <tr><td>w</td><td>String</td><td>the word being built</td></tr>
              <tr><td>big</td><td>String</td><td>the longest word so far</td></tr>
              <tr><td>ch</td><td>char</td><td>the current character</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter a sentence in capitals:
<b>THE KEEPER ADDED THREE BALLOONS TO THE COFFEE TABLE</b>
Double letter pairs = 7
Longest word = BALLOONS (8 letters)</pre>
  <p class="bx-code-note">EE, DD, EE, LL, OO, FF and EE make seven. BALLOONS holds two pairs.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">
      To put several of these into one program with a choice, see
      <a class="bx-link" href="/icse-class-10-menu-driven-programs">ICSE Class 10 menu driven programs</a>; to sort an array of words alphabetically with compareTo, see
      <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">bubble sort and selection sort for ICSE Class 10</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are string programs taught in the live classes?</p>
      <h2>From a blank page to a marked string program</h2>
      <p class="bx-lede">String programs are lost on small things: a missing space at the end, == instead of equals, an index one past the end. The live classes are arranged to catch those before the exam does.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>One family per week, on paper first</h4><p>At the Tuesday 5:30 PM IST class the mentor sets a fresh question from one family. Students write the whole program by hand, with the variable description table, in a fixed time.</p></li>
      <li class="bx-step"><h4>Marked against the scheme on screen</h4><p>The answers are marked in front of the group the way an examiner would: the loop, the method calls, the output format, the comments and the table each earn their share.</p></li>
      <li class="bx-step"><h4>Run in BlueJ with awkward input</h4><p>On Wednesday at 8:00 PM IST the same programs are typed and run with inputs chosen to break them: a sentence with double spaces, a word with no vowel, a Z at the end.</p></li>
      <li class="bx-step"><h4>Worksheets and doubt time</h4><p>Each family ends with a worksheet of variations, and the next class opens with doubts from it, so nobody carries a confusion into the mock tests.</p></li>
      <li class="bx-step"><h4>Mock papers from December</h4><p>String questions then appear inside full two-hour papers alongside arrays, number programs and classes, timed and marked like the board.</p></li>
    </ol>
    <p class="bx-mt-40">
      These programs also make good entries for the lab file; how the internal assessment record is built is on
      <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">ICSE Computer Applications project and internal assessment</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Practise string programs in the mini batch, or one to one',
  chooseLede: 'The six families, the cheat table and the BlueJ test runs are the same in both formats. In India, families can choose the fixed evening mini batch or a private slot; ICSE students abroad are taught one to one. Billing is monthly with no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'At most six ICSE Class 10 students',
    'A string program written by hand each fortnight',
    'Answers marked against the scheme on screen',
    'Programs tested in BlueJ with awkward input'
  ],
  choosePersonal: [
    'A time the family picks, in India or abroad',
    'Extra time on the family your child finds hardest',
    'Variable description tables written together',
    'Harder sentence programs once the basics hold',
    'The same mentors and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who can write number programs but freezes when a sentence has to be broken into words often needs only a handful of one to one sessions on the extraction template. A student who wants regular practice across every Section B family is better served by the two batch classes each week. Fees appear in your own currency.',
  zonesH2: 'String program practice for ICSE students abroad',
  zonesLede: 'ICSE schools outside India sit the same Computer Applications paper, so the same string families decide the same Section B marks. Abroad, the practice runs one to one in an evening slot in the student\'s own time zone.',
  zonesAfter: 'The slot is fixed after the free demo and can move around school tests. Details for overseas families are on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about string programs',
  faqH2: 'What students ask about ICSE Class 10 string programs',
  faqs: [
    ['What are the important string programs for ICSE Class 10?', 'The families that keep returning are palindrome words, Pig Latin, frequency of letters or vowels, word handling such as capitalising each word or finding the longest word, coding by shifting letters, and double or consecutive letters. All of them use one loop over the string with charAt, so practise the loop until it is automatic.'],
    ['Which String functions are in the ICSE Class 10 syllabus?', 'Programs and output questions regularly use length, charAt, indexOf, lastIndexOf, substring, toLowerCase, toUpperCase, trim, replace, concat, equals, equalsIgnoreCase, compareTo, compareToIgnoreCase, startsWith, endsWith and String.valueOf. For each one, learn the return type as well as an example value, because output questions test both.'],
    ['How do you check if a word is a palindrome in Java ICSE?', 'Build the reverse with a loop from length() minus 1 down to 0, adding each charAt to an empty String, then compare the original and the reverse with equals or equalsIgnoreCase. Do not use == for Strings. To find palindrome words in a sentence, run the same check on each word as it is extracted.'],
    ['How do you write a Pig Latin program in ICSE?', 'Find the index of the first vowel, then return substring(i) + substring(0, i) + "AY". Convert the word to capitals first so one vowel test works, and decide what to do with a word that has no vowel; the usual rule is to add AY to the whole word. Program 2 on this page does this for every word of a sentence.'],
    ['How do you count the frequency of each character in Java?', 'Make an int array of 26 counters, convert the string to one case, and for every letter increase f[ch - \'A\'] by one. After the loop, print each letter whose counter is above zero. For vowels only, five counters or a single test with indexOf on "AEIOU" is enough.'],
    ['Can I use split() in ICSE string programs?', 'split runs in BlueJ, but it works with regular expressions, which are outside the Class 10 course, and you must be able to explain every line you write. It is safer to use the word-extraction template on this page: add one space to the end of the sentence and build each word character by character with charAt.'],
    ['What is the difference between == and equals for Strings?', 'equals compares the characters inside two Strings; == checks whether two variables point to the very same object. Two Strings with identical letters can be different objects, so == may give false. In every ICSE string program, compare text with equals or equalsIgnoreCase.'],
    ['Do I need a variable description table for string programs?', 'Yes, whenever the question asks for one, and it is a good habit for every Section B answer. List each variable, its data type and its purpose in one line. It takes two minutes and shows the examiner you understand your own program.'],
    ['Why does my string program skip the last word?', 'Because a word is processed only when a space arrives, and there is no space after the last word. Add one space to the end of the sentence before the loop, as in s = s.trim() + " ", and the last word is closed like all the others.'],
    ['Do you teach ICSE string programs in live classes?', 'Yes. In the mini batch on Tuesday and Wednesday evenings in India, students write a string program by hand, have it marked against the scheme on screen, then run it in BlueJ with awkward inputs. Families who need another time, or live abroad, can choose personalised one to one classes at their own time.']
  ],
  startH2: 'Book a free live string handling class',
  startHtml: `        <p>In the free demo your child writes one sentence program from this page by hand, with its variable description table, then runs it in BlueJ with the mentor and fixes whatever the test input breaks. Afterwards you hear clearly which string families are secure and which need work, and whether the mini batch or one to one suits better.</p>
        <p>Looking at the whole syllabus first? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; String programs 2027'
};
