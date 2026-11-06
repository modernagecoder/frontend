// ICSE Class 10 Computer Applications: previous year papers, mapped and solved
// by shape. Intent: "icse computer applications previous year question paper
// solved", "icse computer paper 2025 solved", "icse computer applications
// question paper with answers", "icse computer board paper solutions".
// Distinct from ic28 (paper analysis and answer key for the latest paper), iiq
// (unit-wise important questions) and the specimen page: this page tags every
// Section B question of the 2023, 2024, 2025 and 2026 board papers by program
// family, counts which families repeat, and gives six ORIGINAL programs in the
// same shapes with full solutions. No CISCE paper is reproduced: each question
// is described in our own words. Year contents were checked on 2026-11-06
// against solved copies of the papers (2023 from a publisher's solved-paper PDF;
// 2024, 2025 and 2026 from a solved-paper site, each cross-checked against at
// least one second listing of the same question). Inside the 2027 syllabus: no
// recursion. Every program on this page was compiled with javac 21 (OpenJDK
// 21.0.12) and run with java 21 on 2026-11-06 from scratch files outside the
// repo, with the sample input shown; each output below is pasted from that run.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-previous-year-papers-solved',
  code: 'ic01',
  board: 'icse',
  themeColor: '#2E5566',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Applications Previous Year Papers, Solved',
  description: 'ICSE Computer Applications previous year question paper solved by pattern: 2023 to 2026 Section B tagged by program family, plus six original Java answers.',
  ogTitle: 'ICSE Computer Applications Previous Year Papers, Mapped and Solved',
  ogDesc: 'Every Section B question from the 2023, 2024, 2025 and 2026 ICSE Computer Applications papers, described in plain words and tagged by program family, a count of which families repeat, and six original practice programs in the same shapes with full Java solutions that were compiled and run.',
  twDesc: 'ICSE Computer Applications board papers 2023 to 2026, Section B tagged by program family, with six original solved Java programs.',
  headline: 'ICSE Computer Applications Previous Year Question Papers, Solved by Pattern: Four Years of Section B Mapped',
  courseName: 'ICSE Class 10 Computer Applications (Java) Previous Year Paper Practice, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications previous year board papers for the 2027 examination: Section A solved against the clock, Section B programs written in BlueJ and marked point by point, past questions grouped by program family so the repeating shapes are drilled until they are routine, then full timed papers in the final months, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Past papers',
  navLinks: [['#years', 'Year by year'], ['#repeats', 'What repeats'], ['#practice', 'Solved practice'], ['#method', 'How to use them'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Previous year papers']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Previous year papers 2023 to 2026',
  h1: 'ICSE Computer Applications previous year question papers, solved by the pattern they follow.',
  lede: 'An ICSE Computer Applications previous year question paper solved once teaches one paper. Read four of them side by side and the board\'s habits show. This page lists what Section B asked in 2023, 2024, 2025 and 2026, in our own words, tags each question by program family, counts which families came back, and then gives six original programs in the same shapes with full Java answers, every one compiled and run. In our live mini batch, past questions are solved this way: grouped, timed and marked.',
  heroNote: 'Live online &middot; four board papers mapped &middot; 24 Section B questions tagged &middot; six original solved programs &middot; timed past-paper rounds &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Computer Applications previous year papers.',
  timetable: {
    label: 'When past papers are worked',
    title: 'Past paper rounds',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, Section A from a past year', '5:30', 'PM IST'],
      ['Wednesday, one Section B family', '8:00', 'PM IST'],
      ['Board papers mapped below', '4', 'years'],
      ['Section B questions tagged', '24', 'by family']
    ],
    zones: '<b>In India:</b> past-paper rounds happen at these two batch times. <b>Abroad:</b> ICSE students in the UAE, Singapore, Indonesia and Thailand do the same rounds privately, at an hour after their school closes.',
    stamps: ['Section B &middot; any 4 of 6', 'Compiled and run']
  },
  picksH2: 'Courses that use these past papers',
  picksLede: 'The ICSE Java course where the mini batch works through past board questions family by family, the Class 11 and 12 Computer Science course that the same program-writing habits feed into, and the algorithms course for a student who wants to go past the board.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, where every Section B family from the past papers is taught, written in BlueJ and marked.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students heading to ISC Computer Science, where the class design and array questions on this page grow into longer programs.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoyed the sorting and binary search questions and wants to know why some methods are faster than others.' }
  ],
  capsule: 'An ICSE Computer Applications previous year question paper is most useful when it is solved by pattern. In the 2023, 2024, 2025 and 2026 board papers, Section B (any four of six programs, 15 marks each) always had a class with a calculation, a method overloading question with a nested-loop pattern and a String program; a digit-based number check, a 2D array task and a sorting or searching task came in most years. Section A is 40 compulsory marks. Modern Age Coders works through these past questions with students live, in a Tuesday and Wednesday evening mini batch in India or in personalised one to one classes.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="years">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What did each year's Section B ask?</p>
      <h2>ICSE Computer Applications previous year question paper solved, year by year (2023 to 2026)</h2>
      <p class="bx-lede">Each of these four papers had a Section A of 40 compulsory marks and a Section B of six programs, Questions 3 to 8, of which a candidate writes any four for 15 marks each. The table describes every Section B question in our own words, not the board's, and tags it with the program family it belongs to.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Year</th><th scope="col">Q</th><th scope="col">What it asked, in our words</th><th scope="col">Program family</th></tr></thead>
        <tbody>
          <tr><td rowspan="6"><b>2023</b></td><td>3</td><td>A student class that takes name, age and marks, then allots a stream from four marks bands</td><td>Class and object, if-else ladder</td></tr>
          <tr><td>4</td><td>Ten characters read into an array, arranged in ascending order by bubble sort, both arrays shown</td><td>Sorting (bubble)</td></tr>
          <tr><td>5</td><td>One method name overloaded twice: a five-row grid of repeated digits, and a check comparing the sums of a number's even and odd digits</td><td>Overloading, pattern, digit check</td></tr>
          <tr><td>6</td><td>Count the digits, letters and other characters in a String</td><td>String, character tests</td></tr>
          <tr><td>7</td><td>Search a double array of twenty values for a user's value with linear search and report the position</td><td>Searching (linear)</td></tr>
          <tr><td>8</td><td>Ten integers in an array: add the one-digit values and the two-digit values separately</td><td>1D array, conditions</td></tr>
          <tr><td rowspan="6"><b>2024</b></td><td>3</td><td>A courier class that bills a parcel by weight in three slabs, with an extra charge for international parcels</td><td>Class and object, slab bill</td></tr>
          <tr><td>4</td><td>One method overloaded three ways: a cone's curved surface area, a rows-by-columns number grid, and a quotient or remainder chosen by a character</td><td>Overloading, pattern, Math</td></tr>
          <tr><td>5</td><td>Check whether a number is a palindrome whose digit sum is even</td><td>Number check (digits)</td></tr>
          <tr><td>6</td><td>A 4 by 4 matrix: compare the sums of the two diagonals</td><td>2D array</td></tr>
          <tr><td>7</td><td>Eight given six-digit codes stored in an array and put in ascending order by selection sort</td><td>Sorting (selection)</td></tr>
          <tr><td>8</td><td>Test whether an email address entered by the user has the parts a valid Gmail address needs</td><td>String, searching inside a String</td></tr>
          <tr><td rowspan="6"><b>2025</b></td><td>3</td><td>A cloud storage class that bills gigabytes bought in three slabs</td><td>Class and object, slab bill</td></tr>
          <tr><td>4</td><td>A 4 by 4 integer matrix: square root of the sum of the squares of every element</td><td>2D array, Math</td></tr>
          <tr><td>5</td><td>Decide whether a String has as many capital letters as small letters</td><td>String, character tests</td></tr>
          <tr><td>6</td><td>A given sorted character array searched for the user's character by binary search</td><td>Searching (binary)</td></tr>
          <tr><td>7</td><td>One method overloaded three ways: a symbol pattern, a sum of terms rising in steps of one half, and the larger of two characters' codes</td><td>Overloading, pattern, series</td></tr>
          <tr><td>8</td><td>Find a number's largest and smallest digits and say whether their sum is odd or even</td><td>Number check (digits)</td></tr>
          <tr><td rowspan="6"><b>2026</b></td><td>3</td><td>A step tracker class that turns steps walked into calories and kilometres by two given formulas</td><td>Class and object, formula</td></tr>
          <tr><td>4</td><td>Store a hundred job titles, then count how many match the title the user types</td><td>1D String array, linear scan</td></tr>
          <tr><td>5</td><td>A 4 by 5 matrix: count zeros and non-zeros and decide whether it is sparse</td><td>2D array</td></tr>
          <tr><td>6</td><td>Check a number whose sum of squared digits is even and ends in the same digit as the number</td><td>Number check (digits)</td></tr>
          <tr><td>7</td><td>One method overloaded three ways: a shrinking number triangle, the total of a String's character codes, and the sum to n by formula</td><td>Overloading, pattern, String</td></tr>
          <tr><td>8</td><td>Rebuild a word from its first consonant onwards, move the leading vowels to the end and add a fixed suffix</td><td>String, building a new word</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The 2022 paper was a second-semester paper and earlier papers used an older layout, so they are left out of this count.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="repeats">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which kinds of program keep coming back?</p>
      <h2>Which program families repeat in ICSE computer board papers?</h2>
      <p class="bx-lede">Three families were in all four papers: a class with a calculation, method overloading and a String program. Three more appeared in three of the four. Because a candidate picks four of six, a student strong in the steady families always has four questions to choose from.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Program family</th><th scope="col">2023</th><th scope="col">2024</th><th scope="col">2025</th><th scope="col">2026</th><th scope="col">Papers</th></tr></thead>
        <tbody>
          <tr><td>Class and object with a slab, ladder or formula (always Question 3)</td><td>Q3</td><td>Q3</td><td>Q3</td><td>Q3</td><td class="bx-num">4 of 4</td></tr>
          <tr><td>Method overloading, with a nested-loop pattern inside</td><td>Q5</td><td>Q4</td><td>Q7</td><td>Q7</td><td class="bx-num">4 of 4</td></tr>
          <tr><td>String program (count, test or rebuild)</td><td>Q6</td><td>Q8</td><td>Q5</td><td>Q8</td><td class="bx-num">4 of 4</td></tr>
          <tr><td>Number check built on digit extraction, as its own question</td><td>inside Q5</td><td>Q5</td><td>Q8</td><td>Q6</td><td class="bx-num">3 of 4</td></tr>
          <tr><td>Double dimensional (2D) array</td><td>none</td><td>Q6</td><td>Q4</td><td>Q5</td><td class="bx-num">3 of 4</td></tr>
          <tr><td>Searching: linear or binary</td><td>Q7</td><td>none</td><td>Q6</td><td>Q4</td><td class="bx-num">3 of 4</td></tr>
          <tr><td>Sorting: bubble or selection</td><td>Q4</td><td>Q7</td><td>none</td><td>none</td><td class="bx-num">2 of 4</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the count tells a 2027 candidate</h3>
        <ul class="bx-check">
          <li><b>Question 3 is a gift.</b> A class with three or four methods and a calculation came first every year. Practise it until it takes fifteen minutes.</li>
          <li><b>Overloading carries a pattern.</b> Every overloading question hid a nested-loop pattern inside it, so pattern practice pays twice.</li>
          <li><b>2D arrays have arrived.</b> They were absent in 2023 and present in each of the next three papers, always as a short scan of rows and columns.</li>
          <li><b>Sorting and searching rotate.</b> One of them came every year, so learn bubble sort, selection sort, linear search and binary search, not just one.</li>
        </ul>
      </div>
      <div>
        <h3>Section A changed shape too</h3>
        <p>Question 1 is still twenty one-mark MCQs and Question 2 ten two-mark parts. What changed from 2024 is the style. Solved copies of the papers show one assertion and reason item in 2024 and two each in 2025 and 2026, and every one of those three papers had at least one item built on a real-life picture or scenario, such as an everyday repeat that stands for a nested loop.</p>
        <p>Those newer items are worked on <a class="bx-link" href="/icse-computer-applications-competency-questions">ICSE Computer Applications competency based questions</a>, and an original bank of twenty-mark Question 1 practice is on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.</p>
      </div>
    </div>
    <p class="bx-mt-40">A count of four papers shows habits, not a promise; any family in the 2027 syllabus can be set. That is why the hub of every program family, <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs practice</a>, covers the families that did not appear as well.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="practice">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Where are the solutions in the same shapes?</p>
      <h2>ICSE computer applications question paper with answers: three original programs for the steady families</h2>
      <p class="bx-lede">These are new questions written in the same shapes as the board's, not copies. Try each one in BlueJ before reading the answer.</p>
    </div>
    <h3>Practice 1: class and object with a slab calculation (the Question 3 shape)</h3>
    <p>Define a class <code>CabRide</code> with members <code>name</code>, <code>km</code>, <code>ac</code> (Y or N) and <code>fare</code>. The fare is 18 per km for the first 4 km, 15 per km for the next 6 km and 12 per km beyond 10 km; an AC ride adds 10 percent. Write <code>accept()</code>, <code>calculate()</code>, <code>display()</code> and a <code>main</code> that uses an object.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>CabRide.java</b><span>slab bill in a class</span></figcaption>
  <pre>import java.util.Scanner;
class CabRide {
    String name; double km; char ac; double fare;
    void accept() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Rider name: ");
        name = sc.nextLine();
        System.out.print("Distance in km: ");
        km = sc.nextDouble();
        System.out.print("AC ride (Y/N): ");
        ac = sc.next().charAt(0);
    }
    void calculate() {
        if (km &lt;= 4)
            fare = km * 18;
        else if (km &lt;= 10)
            fare = 4 * 18 + (km - 4) * 15;
        else
            fare = 4 * 18 + 6 * 15 + (km - 10) * 12;
        if (ac == 'Y' || ac == 'y')
            fare = fare + fare * 10 / 100;
    }
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Distance: " + km + " km");
        System.out.println("Fare: " + fare);
    }
    public static void main(String[] args) {
        CabRide ob = new CabRide();
        ob.accept(); ob.calculate(); ob.display();
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Run with 13.5 km, AC</b><span>output</span></figcaption>
  <pre>Name: Asha Rao
Distance: 13.5 km
Fare: 224.4

<i>// 72 + 90 + 3.5 x 12 = 204, plus 10 percent</i>
<i>// 3 km, no AC: Fare: 54.0</i></pre>
  <p class="bx-code-note">The slab rule: each band is charged in full before the next band starts, so the upper branches add the fixed totals of the lower bands. Using 13.5 x 12 for the whole distance is the commonest wrong answer.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Practice 2: method overloading with a pattern inside</h3>
    <p>Overload <code>compute</code>: <code>void compute(int n)</code> prints n rows, row i counting down from n to i; <code>double compute(double r, double h)</code> returns the volume of a cylinder; <code>boolean compute(String s, char ch)</code> returns true when ch occurs more than once in s.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Compute.java</b><span>three signatures, one name</span></figcaption>
  <pre>class Compute {
    void compute(int n) {
        for (int i = 1; i &lt;= n; i++) {
            for (int j = n; j &gt;= i; j--)
                System.out.print(j + " ");
            System.out.println();
        }
    }
    double compute(double r, double h) {
        return Math.PI * r * r * h;
    }
    boolean compute(String s, char ch) {
        int c = 0;
        for (int i = 0; i &lt; s.length(); i++)
            if (s.charAt(i) == ch)
                c++;
        return c &gt; 1;
    }
    public static void main(String[] args) {
        Compute ob = new Compute();
        ob.compute(4);
        System.out.println(ob.compute(7.0, 10.0));
        System.out.println(ob.compute("BLUEJ", 'E') + " " + ob.compute("TEETH", 'E'));
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>as run</span></figcaption>
  <pre>4 3 2 1
4 3 2
4 3
4
1539.3804002589986
false true</pre>
  <p class="bx-code-note">The three versions differ in the number and types of parameters, which is what overloading needs. A different return type alone would not compile. Row i starts the inner loop at n and stops at i, so each row is one shorter.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Practice 3: a digit-based number check</h3>
    <p>A <b>Twin-end number</b> (our own definition) has the same first and last digit, and a digit sum divisible by 3. 2742 qualifies: it starts and ends with 2 and its digits add to 15. Accept a number and say whether it is one.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>TwinEnd.java</b><span>one loop, three facts</span></figcaption>
  <pre>import java.util.Scanner;
class TwinEnd {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        int last = n % 10, first = 0, sum = 0, t = n;
        while (t &gt; 0) {
            int d = t % 10;
            sum = sum + d;
            first = d;
            t = t / 10;
        }
        if (first == last &amp;&amp; sum % 3 == 0)
            System.out.println(n + " is a Twin-end number");
        else
            System.out.println(n + " is not a Twin-end number");
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Four runs</b><span>output</span></figcaption>
  <pre>2742 is a Twin-end number
4504 is not a Twin-end number
3713 is not a Twin-end number
5 is not a Twin-end number</pre>
  <p class="bx-code-note">The last digit to be peeled off is the first digit of the number, so <code>first</code> simply keeps the latest d. Work on a copy, t, so the original n is still there to print. 4504 fails on the sum (13); 5 fails because 5 is not divisible by 3.</p>
</figure>
    </div>
    <p class="bx-mt-40">Dozens more digit checks, each with its loop rule, are on <a class="bx-link" href="/icse-special-number-programs-java">special number programs in Java</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="practice-b">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. And the String, array and search questions?</p>
      <h2>ICSE computer board paper solutions in the same shapes: String, 2D array and binary search</h2>
      <p class="bx-lede">One original question for each family that came in three of the last four papers.</p>
    </div>
    <h3>Practice 4: a String program that rebuilds words</h3>
    <p>Accept a sentence. Print it with the first and last letters of every word swapped, and count the words that begin with a vowel.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>SwapEnds.java</b><span>word by word</span></figcaption>
  <pre>import java.util.Scanner;
class SwapEnds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim() + " ";
        String word = "", result = "";
        int vowelStart = 0;
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') {
                word = word + ch;
            } else if (word.length() &gt; 0) {
                char f = Character.toUpperCase(word.charAt(0));
                if ("AEIOU".indexOf(f) &gt;= 0)
                    vowelStart++;
                int L = word.length();
                if (L &gt; 1)
                    word = word.charAt(L - 1) + word.substring(1, L - 1) + word.charAt(0);
                result = result + word + " ";
                word = "";
            }
        }
        System.out.println(result.trim());
        System.out.println("Words starting with a vowel: " + vowelStart);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Input: the exam is near</b><span>output</span></figcaption>
  <pre>eht mxae si rean
Words starting with a vowel: 2</pre>
  <p class="bx-code-note">Adding one space to the end means the last word is handled by the same branch as the others. The check <code>word.length() &gt; 0</code> skips double spaces, and <code>L &gt; 1</code> leaves a one-letter word such as "a" alone, where substring(1, 0) would crash.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Practice 5: a double dimensional array check</h3>
    <p>Accept a 3 by 3 integer matrix. Say whether it is symmetric (each a[i][j] equals a[j][i]) and print the sum of its boundary elements.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Symmetric.java</b><span>one double loop, two jobs</span></figcaption>
  <pre>import java.util.Scanner;
class Symmetric {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[][] a = new int[3][3];
        System.out.println("Enter 9 elements:");
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 3; j++)
                a[i][j] = sc.nextInt();
        boolean sym = true;
        int boundary = 0;
        for (int i = 0; i &lt; 3; i++)
            for (int j = 0; j &lt; 3; j++) {
                if (a[i][j] != a[j][i])
                    sym = false;
                if (i == 0 || i == 2 || j == 0 || j == 2)
                    boundary += a[i][j];
            }
        System.out.println(sym ? "Symmetric matrix" : "Not a symmetric matrix");
        System.out.println("Sum of boundary elements = " + boundary);
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Two runs</b><span>output</span></figcaption>
  <pre><i>// input 1 4 7 / 4 2 5 / 7 5 3</i>
Symmetric matrix
Sum of boundary elements = 36</pre>
  <p class="bx-code-note">A boundary cell is in the first or last row or column; in a 3 by 3 matrix only the centre is left out. Input 1 to 9 in order prints Not a symmetric matrix and 40.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Practice 6: sort a String array, then binary search it</h3>
    <p>Store six city names, arrange them alphabetically by bubble sort, print them, then search for a city typed by the user with binary search, ignoring case.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>CitySearch.java</b><span>sort first, then halve</span></figcaption>
  <pre>import java.util.Scanner;
class CitySearch {
    public static void main(String[] args) {
        String[] c = {"Pune", "Agra", "Surat", "Kochi", "Delhi", "Bhopal"};
        int n = c.length;
        for (int i = 0; i &lt; n - 1; i++)
            for (int j = 0; j &lt; n - 1 - i; j++)
                if (c[j].compareToIgnoreCase(c[j + 1]) &gt; 0) {
                    String t = c[j]; c[j] = c[j + 1]; c[j + 1] = t;
                }
        for (int i = 0; i &lt; n; i++)
            System.out.print(c[i] + " ");
        System.out.println();
        Scanner sc = new Scanner(System.in);
        System.out.print("City to search: ");
        String key = sc.next();
        int low = 0, high = n - 1, pos = -1;
        while (low &lt;= high) {
            int mid = (low + high) / 2;
            int r = key.compareToIgnoreCase(c[mid]);
            if (r == 0) { pos = mid; break; }
            else if (r &lt; 0) high = mid - 1;
            else low = mid + 1;
        }
        if (pos &gt;= 0)
            System.out.println(key + " found at index " + pos);
        else
            System.out.println(key + " not found");
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Two runs</b><span>output</span></figcaption>
  <pre>Agra Bhopal Delhi Kochi Pune Surat
surat found at index 5

Agra Bhopal Delhi Kochi Pune Surat
Goa not found</pre>
  <p class="bx-code-note">Binary search only works on sorted data, which is why the sort comes first. Strings are compared with compareToIgnoreCase, never with &lt; or ==, and the sign of the result says which half to keep.</p>
</figure>
    </div>
    <p class="bx-mt-40">Each family has a full page of programs: <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 String programs</a>, <a class="bx-link" href="/icse-class-10-2d-array-programs">2D array programs</a> and <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">sorting and searching programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="method">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How should past papers be used?</p>
      <h2>How to solve ICSE Computer Applications previous year papers so they raise your marks</h2>
      <p class="bx-lede">Solve each past paper twice: once by family, early, to learn the shapes, and once whole, timed, near the exam. Reading a solution is not solving a paper.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Group the questions by family first</h4><p>Take all four Question 3s together, then all four overloading questions, and so on. Seeing the same shape four times in a row shows what is fixed and what changes from year to year.</p></li>
      <li class="bx-step"><h4>Write, then run, every Section B answer</h4><p>Write the program on paper as the exam demands, then type it into BlueJ exactly as written. The compiler finds the missing semicolon and the wrong method name that your eye skipped.</p></li>
      <li class="bx-step"><h4>Test with more than the example</h4><p>The example in a question is the easy case. Try a one-digit number, an empty space, the first and last elements of an array, and a value that is not there. The 2025 binary search only proves itself when a missing character is searched.</p></li>
      <li class="bx-step"><h4>Mark against points, not a feeling</h4><p>For each program, check the parts an examiner looks for: the class and method headers asked for, input taken the way the question says, correct logic, the output in the format shown, and the meaningful variable names or short variable description the Section B instructions ask for so the logic is clear. Flowcharts and algorithms are not required.</p></li>
      <li class="bx-step"><h4>Then sit whole papers, timed</h4><p>From January, sit one complete past paper at a time in two hours, choosing your four Section B questions in the first minutes and sticking to the choice.</p></li>
    </ol>
    <p class="bx-mt-40">The latest paper, discussed question by question with an answer key, is on <a class="bx-link" href="/icse-computer-applications-paper-analysis">ICSE Computer Applications paper analysis</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are past papers taught in the live classes?</p>
      <h2>Past board questions, one family a week, marked on a shared screen</h2>
      <p class="bx-lede">The mini batch works through old papers in the order the families repeat, so the steadiest marks are secured first.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Tuesday: Section A from a past year</h3><p>In the 5:30 PM IST Tuesday session, students answer a block of past Question 1 and Question 2 items against a timer. Wrong answers are traced aloud until the mistaken step is found.</p></div>
      <div class="bx-card"><h3>Wednesday: one Section B family</h3><p>In the 8:00 PM IST Wednesday session, the batch takes one family across all four years, then writes a fresh question in the same shape in BlueJ while the teacher watches the screens.</p></div>
      <div class="bx-card"><h3>Marked, not just checked</h3><p>Each program is marked point by point against the parts listed above, then a short worksheet of new questions in the same shape goes home and is run at the next class.</p></div>
      <div class="bx-card"><h3>Whole papers from January</h3><p>Once each family is secure, complete past papers are sat in two hours, marked like the board and reviewed together the following week.</p></div>
    </div>
    <p class="bx-mt-40">With no more than six students in a batch, every program written in class is read by the teacher. Abroad, the same plan runs one to one.</p>
  </div>
</section>`
  ],
  chooseH2: 'Work through past papers in the mini batch, or one to one',
  chooseLede: 'Both formats follow the family-by-family plan above and use the same original practice questions. Indian families may take the Tuesday and Wednesday evening batch or private sessions, while ICSE students living abroad are taught one to one. Payment is monthly and nothing is charged for admission.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'Past Section A items timed every Tuesday',
    'One Section B family written in BlueJ every Wednesday',
    'Whole past papers sat and marked from January'
  ],
  choosePersonal: [
    'Slot chosen by the family, in India or abroad',
    'Start with the families your child finds hardest',
    'Every program read and marked by the teacher',
    'Extra papers added when a family needs it',
    'The batch teachers and the 2027 syllabus, privately'
  ],
  chooseAfter: 'A student who already handles Question 3 and overloading well, and only stumbles on 2D arrays or binary search, can close those gaps in a few one to one sessions. A student who has not yet written a full program in two hours does better with two batch classes every week until the exam. You will see the fee in your local currency.',
  zonesH2: 'Past paper practice for ICSE students outside India',
  zonesLede: 'ICSE schools abroad sit the same Computer Applications paper as schools in India, so the same past questions are the best practice. Overseas, the past-paper rounds are private classes held in the late afternoon or evening of the student\'s own clock.',
  zonesAfter: 'Once the free demo is over we agree an hour, and it can shift in a week of school exams. For the overseas arrangement in full, read <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about previous year papers',
  faqH2: 'What students ask about ICSE Computer Applications previous year papers',
  faqs: [
    ['Where can I find ICSE Computer Applications previous year question papers with solutions?', 'Past board papers are printed in the solved-paper books most ICSE schools recommend, and CISCE publishes specimen papers on cisce.org. This page does not reprint any paper. It describes what Section B asked in 2023, 2024, 2025 and 2026, tags each question by program family and gives original practice programs in the same shapes, with full solutions that were compiled and run.'],
    ['What was asked in the ICSE Computer Applications 2025 paper Section B?', 'In our own words: a cloud storage class billed in three slabs, the square root of the sum of squares of a 4 by 4 matrix, a String with equal capital and small letters, a binary search of a sorted character array, an overloaded method with a symbol pattern, a half-step series and a character comparison, and the parity of the sum of a number\'s largest and smallest digits.'],
    ['How many questions are there in Section B of ICSE Computer Applications?', 'Six, numbered Questions 3 to 8. A candidate answers any four, each worth 15 marks, for 60 marks. Section A, Questions 1 and 2, is 40 compulsory marks: twenty one-mark MCQs and ten two-mark parts. The whole paper is 100 marks in two hours, with reading time before writing starts.'],
    ['Which programs come every year in the ICSE Computer Applications board exam?', 'In the 2023 to 2026 papers, three families came every year: a class with a calculation as Question 3, a method overloading question containing a nested-loop pattern, and a String program. A digit-based number check, a 2D array task and a searching task each came in three of the four years. Sorting came twice.'],
    ['Are 2D array questions asked in ICSE Computer Applications?', 'Yes. Double dimensional arrays are in the 2027 syllabus and a 2D array program appeared in Section B in 2024, 2025 and 2026: comparing diagonal sums, finding the square root of the sum of squares, and counting zeros to test a sparse matrix. Each was a short scan of rows and columns with nested loops.'],
    ['How many previous year papers should I solve for ICSE Computer Applications?', 'At least the last four board papers and the current specimen paper, each solved twice: first question by question grouped by family, then as a whole timed paper. Older papers are useful for extra Section B practice, but their Section A layout differs, so use them for programs rather than for timing.'],
    ['Do ICSE Computer Applications questions repeat from previous years?', 'The exact questions rarely repeat, but the shapes do. Every recent paper opened Section B with a class that calculates a bill or a result, and every one had an overloading question with a pattern. Practising new questions in each repeating shape prepares you better than memorising old answers.'],
    ['Are assertion and reason questions in the ICSE Computer Applications paper?', 'Yes, inside Question 1. Solved copies of the papers show one assertion and reason MCQ in 2024 and two in each of 2025 and 2026. They test the same Java facts as the other MCQs, so the key is to judge the assertion and the reason separately before deciding whether one explains the other.'],
    ['Do you solve previous year papers in your live classes?', 'Yes. In the mini batch, Tuesday classes time past Section A items and Wednesday classes take one Section B family across several years, followed by a fresh question in the same shape written in BlueJ and marked. From January, whole past papers are sat in two hours. Families can also choose personalised one to one classes at their own time.']
  ],
  startH2: 'Try a free live past-paper class',
  startHtml: `        <p>In the free demo your child writes one past-paper style Section B program in BlueJ with the mentor watching, and answers a short timed set of Question 1 items. We then tell you which program families look secure, which need work, and the format we would suggest.</p>
        <p>Prefer to start with the full topic list? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Previous year papers 2023 to 2026'
};
