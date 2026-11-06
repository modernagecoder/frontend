// ICSE Class 10 Computer Applications (Java): how to score 100, written as a
// marks-loss audit. Intent: "how to score 100 in icse computer applications",
// "icse computer full marks tips", "how to prepare icse computer", "icse
// computer exam tips", "mistakes that cost marks icse computer". Distinct from
// ibe (board exam preparation, the season plan) and ixd (exam date and paper
// pattern): this page lists where marks leak, one leak at a time, each with a
// concrete before and after answer, and links out to the topic and question
// pages where each leak is practised.
// No statistics, toppers, pass rates or examiner quotes are invented: the only
// facts used are the 2027 paper structure and internal assessment criteria
// already verified for this series (design doc and project_board_prep_cluster
// memory) and the Section B instruction about variable descriptions or
// mnemonic codes, which appears on past ICSE Computer Applications papers.
// Every Java fragment and program on this page was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from scratch files
// outside the repo; each output shown is pasted from that run.
'use strict';

module.exports = {
  slug: 'how-to-score-100-in-icse-computer-applications',
  code: 'ic10',
  board: 'icse',
  themeColor: '#2F5D50',
  dateModified: '2026-11-06',
  title: 'How to Score 100 in ICSE Computer Applications 2027',
  description: 'How to score 100 in ICSE Computer Applications: a marks-loss audit of the 2027 paper, before and after answers, Java checked, and where to practise each fix.',
  ogTitle: 'How to Score 100 in ICSE Computer Applications: Find the Leaks',
  ogDesc: 'Full marks in ICSE Computer Applications come from losing nothing, not from knowing more. Fourteen places marks leak in the 2027 paper, each with a before and after answer, Java checked by running it, and the page where that fix is practised.',
  twDesc: 'A marks-loss audit for ICSE Computer Applications 2027: before and after answers, Java checked, and where to practise each fix.',
  headline: 'How to Score 100 in ICSE Computer Applications: A Marks-Loss Audit with Before and After Answers',
  courseName: 'ICSE Class 10 Computer Applications (Java) Full-Marks Preparation, Live Online',
  courseDesc: 'Live online full-marks preparation for ICSE Class 10 Computer Applications for the 2027 examination: a marks-loss audit of each student\'s answers, Section A definitions, outputs and differences rewritten to the standard the marking expects, Section B programs written with exact class and method names, variable descriptions and labelled output, and timed two-hour mock papers marked on screen, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Score 100',
  navLinks: [['#marks', 'Where marks are'], ['#audit', 'The audit'], ['#section-a', 'Section A'], ['#section-b', 'Section B'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'How to score 100']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Full marks 2027',
  h1: 'How to score 100 in ICSE Computer Applications: stop the leaks.',
  lede: 'How to score 100 in ICSE Computer Applications is mostly a question of where marks escape, because most students who know the syllabus still lose a few marks to habits: a missing .0, a class name changed, a vague definition, an unlabelled answer. This page is a marks-loss audit of the 2027 paper. Each leak has a before answer, an after answer and the page where the fix is practised; every Java line was run before it went here. Our live mini batch audits each student\'s own answers the same way.',
  heroNote: 'Live online &middot; fourteen leaks, each fixed &middot; before and after answers &middot; mocks marked on screen &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help to score full marks in ICSE Class 10 Computer Applications.',
  timetable: {
    label: 'When answers are audited',
    title: 'Answer audits',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, Section A answers rewritten', '5:30', 'PM IST'],
      ['Wednesday, a Section B program marked', '8:00', 'PM IST'],
      ['Leaks on the audit list', '14', 'tracked'],
      ['Full papers from December', '2 hr', 'timed']
    ],
    zones: '<b>In India:</b> answer audits happen in the mini batch on these two evenings. <b>Outside India:</b> the audit is done privately, with a teacher going through your child\'s own answers at an after-school time that works in the Gulf, Singapore or Indonesia.',
    stamps: ['Sections A and B &middot; 100 marks', 'Audited, rewritten']
  },
  picksH2: 'Courses behind the full-marks audit',
  picksLede: 'Our Class 9 and 10 BlueJ course is where the audit runs every week. Students who keep computing after the board go on to ISC Computer Science, and those who enjoy precise problem solving can try the data structures course.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with every mock answer checked against the leak list on this page.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students taking computing on to ISC, where the same precise answer habits carry into a longer paper and a practical.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For a student who likes getting every case right and wants harder problems to test that habit on.' }
  ],
  capsule: 'To score 100 in ICSE Computer Applications, you need all 40 Section A marks and four complete 15-mark programs in Section B, so the work is less about learning more Java and more about stopping marks from leaking. The common leaks are definitions without an example, outputs written without the exact type or spacing, one-sided difference answers, class and method names changed from the question, missing variable descriptions, unlabelled output, and programs that fail on an edge case such as 1 in a prime check. Modern Age Coders audits these live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="marks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Where are the 100 marks?</p>
      <h2>How to prepare for ICSE Computer: know where every mark sits</h2>
      <p class="bx-lede">The 2027 written paper is 100 marks in two hours, after 15 minutes of reading time: Section A is 40 compulsory marks and Section B asks for any four of six programs at 15 marks each. Full marks on the paper therefore means no slip in 30 Section A answers and four programs with nothing missing.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-table-wrap">
        <table class="bx-marks">
          <thead><tr><th scope="col">Part</th><th scope="col">What it asks</th><th scope="col">Marks</th></tr></thead>
          <tbody>
            <tr><td>Section A, Question 1</td><td>Twenty MCQs, one mark each</td><td class="bx-num">20</td></tr>
            <tr><td>Section A, Question 2</td><td>Ten short parts, two marks each: outputs, errors, definitions, small code</td><td class="bx-num">20</td></tr>
            <tr><td>Section B, Questions 3 to 8</td><td>Answer any four programs</td><td class="bx-num">4 x 15 = 60</td></tr>
            <tr class="bx-total"><td>Written paper</td><td>Two hours, plus 15 minutes reading</td><td class="bx-num">100</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bx-table-wrap">
        <table class="bx-marks">
          <thead><tr><th scope="col">Internal assessment criterion</th><th scope="col">Out of</th></tr></thead>
          <tbody>
            <tr><td>Class design</td><td class="bx-num">10</td></tr>
            <tr><td>Variable description</td><td class="bx-num">10</td></tr>
            <tr><td>Coding and documentation</td><td class="bx-num">10</td></tr>
            <tr><td>Execution or output</td><td class="bx-num">20</td></tr>
            <tr class="bx-total"><td>Per examiner (teacher and external)</td><td class="bx-num">50</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40">Computer Applications is assessed half by the written paper and half by the internal assessment on at least twenty lab assignments, so a full score needs both. Notice what the internal criteria reward: design, variable description and documentation are 30 of the 50 marks each examiner gives, before the program even runs. The lab side is explained on <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">ICSE project and internal assessment</a>, and the paper itself on <a class="bx-link" href="/icse-class-10-computer-applications-exam-date-and-paper-pattern">exam date 2027 and paper pattern</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="audit">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which mistakes cost marks?</p>
      <h2>Mistakes that cost marks in ICSE Computer: the leak list</h2>
      <p class="bx-lede">These are the fourteen places a well-prepared student most often leaks marks. Go through your last test against this list; each leak you find has a specific page to practise on.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">#</th><th scope="col">Leak</th><th scope="col">Where</th><th scope="col">The fix</th><th scope="col">Practise on</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Definition with no example</td><td>Q2</td><td>One plain sentence, then a line of Java that shows it</td><td><a class="bx-link" href="/icse-computer-applications-notes">Notes</a></td></tr>
          <tr><td>2</td><td>Difference answered for one side only</td><td>Q2</td><td>Two columns, same point compared on both sides</td><td><a class="bx-link" href="/icse-computer-difference-between-questions">Differences</a></td></tr>
          <tr><td>3</td><td>8 written where Java prints 8.0</td><td>Q1, Q2</td><td>Decide the type before writing the value</td><td><a class="bx-link" href="/icse-class-10-math-library-methods">Math methods</a></td></tr>
          <tr><td>4</td><td>Output guessed, not traced</td><td>Q1, Q2</td><td>A small trace table for any loop of more than a few passes</td><td><a class="bx-link" href="/icse-class-10-java-output-questions">Outputs</a></td></tr>
          <tr><td>5</td><td>MCQ answered from the options, not the code</td><td>Q1</td><td>Work it in the margin, then find it in the list</td><td><a class="bx-link" href="/icse-computer-applications-mcq-questions">MCQs</a></td></tr>
          <tr><td>6</td><td>Error named but not corrected</td><td>Q2</td><td>State the error and write the corrected line</td><td><a class="bx-link" href="/icse-class-10-java-error-finding-questions">Find the error</a></td></tr>
          <tr><td>7</td><td>Class or method name changed</td><td>Section B</td><td>Copy names, types and order from the question letter for letter</td><td><a class="bx-link" href="/icse-class-10-user-defined-methods-overloading">Methods</a></td></tr>
          <tr><td>8</td><td>Values fixed in the code when the question says accept</td><td>Section B</td><td>Use Scanner for every value the question says to input</td><td><a class="bx-link" href="/icse-class-10-data-types-and-input-java">Input</a></td></tr>
          <tr><td>9</td><td>No variable descriptions</td><td>Section B</td><td>Meaningful names plus a comment or a short table</td><td>Section 4 below</td></tr>
          <tr><td>10</td><td>Output printed with no label or in the wrong format</td><td>Section B</td><td>Print exactly what the question shows, labels and layout included</td><td><a class="bx-link" href="/icse-class-10-pattern-programs-java">Patterns</a></td></tr>
          <tr><td>11</td><td>Edge case wrong: 1 as prime, 0 digits, empty word</td><td>Section B</td><td>Test the smallest and oddest input before moving on</td><td><a class="bx-link" href="/icse-special-number-programs-java">Special numbers</a></td></tr>
          <tr><td>12</td><td>Integer division where a decimal was wanted</td><td>Section B</td><td>Divide by 3.0, or cast before dividing</td><td><a class="bx-link" href="/icse-class-10-operators-in-java">Operators</a></td></tr>
          <tr><td>13</td><td>Strings compared with ==</td><td>Section B</td><td>Use equals() or equalsIgnoreCase()</td><td><a class="bx-link" href="/icse-class-10-string-programs">String programs</a></td></tr>
          <tr><td>14</td><td>A weak Section B question chosen in a hurry</td><td>Reading time</td><td>Rank all six during the 15 minutes; pick the four you can finish fully</td><td><a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">Past papers</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="section-a">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does a full-marks Section A answer look like?</p>
      <h2>ICSE computer exam tips for Section A, with before and after answers</h2>
      <p class="bx-lede">Each pair below shows the same question answered twice. The before answer is the kind that loses a mark or both; the after answer gives the marker nothing to take away.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-card"><h3>Leak 1: "What is a wrapper class?" (2 marks)</h3><p><b>Before:</b> A class that wraps a data type.</p><p><b>After:</b> A wrapper class is a class in java.lang whose object holds one value of a primitive type, for example Integer for int and Character for char. It also provides methods such as <code>Integer.parseInt("25")</code>, which returns the int 25.</p><p>The before answer repeats the name. The after answer defines it, names two pairs and shows one use.</p></div>
      <div class="bx-card"><h3>Leak 2: "Differentiate between break and continue" (2 marks)</h3><p><b>Before:</b> break stops the loop and continue continues it.</p><p><b>After:</b> (i) break ends the loop at once and control goes to the statement after the loop; continue skips only the rest of the current pass and the loop goes on to its next pass. (ii) break is also used to leave a switch; continue is used only inside loops.</p><p>Two numbered points, each comparing both sides of the same idea.</p></div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Leak 3: give the output</b><span>run in Java 21</span></figcaption>
  <pre>System.out.println(Math.pow(2, 3) + " " + Math.sqrt(49) + " " + Math.round(7.5));

<i>// Before:  8 7 8</i>
<i>// After:   8.0 7.0 8</i></pre>
  <p class="bx-code-note">pow and sqrt return double, so Java prints 8.0 and 7.0; round of a double returns a long, so 8 has no decimal point. The before answer has the right numbers and still loses the mark.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Leak 12: an average</b><span>run in Java 21</span></figcaption>
  <pre>int m1 = 78, m2 = 85, m3 = 84;
double before = (m1 + m2 + m3) / 3;
double after = (m1 + m2 + m3) / 3.0;
System.out.println(before + " " + after);

<i>// Output: 82.0 82.33333333333333</i></pre>
  <p class="bx-code-note">Storing in a double does not help: 247 / 3 is worked out as int (82) first. Dividing by 3.0 keeps the fraction.</p>
</figure>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card"><h3>Leak 6: "Find the error and correct it" (2 marks)</h3><p><b>Question:</b> <code>int x = 5; if (x = 5) System.out.println("five");</code></p><p><b>Before:</b> There is an error in the if statement.</p><p><b>After:</b> <code>=</code> is assignment and gives an int, but if needs a boolean. Correct line: <code>if (x == 5) System.out.println("five");</code></p></div>
      <div class="bx-card"><h3>Leak 5: an MCQ on a fragment</h3><p><b>Before:</b> reading the four options first, spotting 8 and ticking it because the arithmetic looks right.</p><p><b>After:</b> working the fragment in the margin to 8.0, then finding 8.0 among the options. Wrong options in output MCQs are very often the answers a common slip produces, so the options are the last thing to read.</p></div>
    </div>
    <p class="bx-mt-40">Thirty Section A answers take about forty minutes at a steady pace. Short case-based questions in Section A are practised on <a class="bx-link" href="/icse-computer-applications-competency-questions">ICSE competency and case study questions</a>, and wrapper methods on <a class="bx-link" href="/icse-class-10-wrapper-and-library-classes">wrapper and library classes</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="section-b">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What does a full-marks Section B program look like?</p>
      <h2>ICSE computer full marks tips for Section B programs</h2>
      <p class="bx-lede">A full-marks program does exactly what the question says, in the names the question uses, with every variable explained and the output printed the way the question shows it. Past ICSE Computer Applications papers instruct that each program be written using variable descriptions or mnemonic codes so the logic is clear, and that flowcharts and algorithms are not required.</p>
    </div>
    <div class="bx-dated">
      <p><b>Question (original).</b> Define a class Student with data members name, m1, m2, m3, avg and grade. Methods: <code>void input()</code> to accept the name and three marks, <code>void compute()</code> to find the average and set grade to 'A' if the average is 80 or more, else 'B', and <code>void display()</code> to print the name, average and grade. Write main to create an object and call the methods.</p>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Before</b><span>works, still loses marks</span></figcaption>
  <pre>import java.util.Scanner;
class Marks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String n = sc.nextLine();
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        double x = (a + b + c) / 3;
        System.out.println(n);
        System.out.println(x);
        System.out.println(x &gt;= 80 ? 'A' : 'B');
    }
}</pre>
  <p class="bx-code-note">Wrong class name. No input(), compute() or display(). No data members. Integer division. Names a, b, c and x describe nothing. Output has no labels.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>After</b><span>every point answered</span></figcaption>
  <pre>import java.util.Scanner;

class Student {
    String name;      <i>// student's name</i>
    int m1, m2, m3;   <i>// marks in three tests</i>
    double avg;       <i>// average of the three tests</i>
    char grade;       <i>// 'A' if avg &gt;= 80, else 'B'</i>

    void input() {
        Scanner sc = new Scanner(System.in);
        name = sc.nextLine();
        m1 = sc.nextInt();
        m2 = sc.nextInt();
        m3 = sc.nextInt();
    }

    void compute() {
        avg = (m1 + m2 + m3) / 3.0;
        grade = (avg &gt;= 80) ? 'A' : 'B';
    }

    void display() {
        System.out.println("Name: " + name);
        System.out.println("Average: " + avg);
        System.out.println("Grade: " + grade);
    }

    public static void main(String[] args) {
        Student ob = new Student();
        ob.input();
        ob.compute();
        ob.display();
    }
}

<i>// Input: Riya Sen / 78 85 84</i>
<i>// Output:</i>
<i>// Name: Riya Sen</i>
<i>// Average: 82.33333333333333</i>
<i>// Grade: A</i></pre>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Leak 11 before</b><span>counts factors from 2</span></figcaption>
  <pre>int c = 0;
for (int i = 2; i &lt; n; i++)
    if (n % i == 0)
        c++;
if (c == 0)
    System.out.println("Prime");
else
    System.out.println("Not prime");

<i>// n = 7: Prime</i>
<i>// n = 9: Not prime</i>
<i>// n = 1: Prime     (wrong)</i></pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Leak 11 after</b><span>counts every factor</span></figcaption>
  <pre>int factors = 0;            <i>// divisors from 1 to n</i>
for (int i = 1; i &lt;= n; i++)
    if (n % i == 0)
        factors++;
if (factors == 2)           <i>// exactly 1 and n</i>
    System.out.println(n + " is a prime number");
else
    System.out.println(n + " is not a prime number");

<i>// n = 7: 7 is a prime number</i>
<i>// n = 9: 9 is not a prime number</i>
<i>// n = 1: 1 is not a prime number</i></pre>
</figure>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Leak 13</b><span>input "yes", run in Java 21</span></figcaption>
  <pre>String ans = sc.next();
if (ans == "yes")
    System.out.println("== says equal");
else
    System.out.println("== says not equal");
if (ans.equals("yes"))
    System.out.println("equals says equal");

<i>// Output:</i>
<i>// == says not equal</i>
<i>// equals says equal</i></pre>
  <p class="bx-code-note">== asks whether two names point to the same String object; a word read by Scanner is a new object, so == is false even when the letters match.</p>
</figure>
      <div>
        <h3>Ten seconds per program before you move on</h3>
        <ul class="bx-check">
          <li><b>Names:</b> class, methods, parameter types and order match the question.</li>
          <li><b>Input:</b> everything the question says to accept is read with Scanner.</li>
          <li><b>Variables:</b> each one has a meaningful name or a comment.</li>
          <li><b>Logic:</b> one ordinary input and one awkward input traced by hand.</li>
          <li><b>Output:</b> labels and layout match the question's sample.</li>
          <li><b>main:</b> creates the object and calls every method the question lists.</li>
        </ul>
      </div>
    </div>
    <p class="bx-mt-40">The program families that fill Section B each have their own page: <a class="bx-link" href="/icse-class-10-2d-array-programs">2D array programs</a>, <a class="bx-link" href="/icse-class-10-sorting-and-searching-programs">sorting and searching</a>, <a class="bx-link" href="/icse-class-10-slab-and-bill-programs">slab and bill programs</a>, <a class="bx-link" href="/icse-class-10-menu-driven-programs">menu driven programs</a> and <a class="bx-link" href="/icse-class-10-constructors-questions">constructors</a>. The full list is on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Java programs practice</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="plan">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How should the last months and the exam itself be used?</p>
      <h2>How to score full marks: from now to the last minute of the paper</h2>
      <p class="bx-lede">The plan is simple: find your own leaks, fix them one at a time, then prove the fixes hold inside full two-hour papers. The 2027 timetable has not been published yet, so count back from your school's preliminary exams instead of a board date.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Audit one old test</h4><p>Take your last school test or a past paper, and next to every lost mark write the leak number from the list above. Most students find their marks cluster in three or four leaks, and those come first.</p></li>
      <li class="bx-step"><h4>Fix by leak, not by chapter</h4><p>Spend a week on each leak you found: Math return types and outputs one week, definitions and differences another, names and variable descriptions in Section B another.</p></li>
      <li class="bx-step"><h4>Write programs on paper</h4><p>The exam is handwritten. Write each practice program by hand first, then type it into BlueJ and run it on the sample input and on one awkward input.</p></li>
      <li class="bx-step"><h4>Full papers under time</h4><p>Sit complete two-hour papers with 15 minutes of reading first. Use the reading time to rank the six Section B questions and choose four you can finish completely.</p></li>
      <li class="bx-step"><h4>Mark against the leak list</h4><p>After each paper, mark it against the fourteen leaks, not just right and wrong. The leak that keeps returning is the one to drill next.</p></li>
      <li class="bx-step"><h4>In the hall: leave ten minutes</h4><p>Keep the last ten minutes for the checklist: types of every output, names in every program, labels on every print line. That is where full marks are protected.</p></li>
    </ol>
    <p class="bx-mt-40">A paper-by-paper mock ladder is on <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">specimen paper and mock tests</a>, the whole-season plan on <a class="bx-link" href="/icse-class-10-computer-applications-board-exam-preparation">ICSE board exam preparation</a>, and the most-asked questions on <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How does the mini batch run the audit?</p>
      <h2>The marks-loss audit in live classes</h2>
      <p class="bx-lede">Each student keeps a personal leak list, and every class works on removing one item from it.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: Section A rewritten</h4><p>At the 5:30 PM IST class students answer a short set of definitions, differences and outputs, then rewrite any answer that lost a mark until it would earn both.</p></li>
      <li class="bx-step"><h4>Wednesday: one program marked</h4><p>At the 8:00 PM IST class a Section B question is answered on paper, typed, run and marked on screen against names, input, variable descriptions, logic and output.</p></li>
      <li class="bx-step"><h4>The leak list updated</h4><p>Leaks that did not appear for three weeks are ticked off; new ones are added. Parents can see which items are closed.</p></li>
      <li class="bx-step"><h4>Doubt time every class</h4><p>The last part of each class is open for any question from school work, the textbook or the lab file.</p></li>
      <li class="bx-step"><h4>Full mocks and lab file checks</h4><p>From December complete two-hour papers are marked the same way, and lab assignments are checked against the four internal criteria before school submission.</p></li>
    </ol>
    <p class="bx-mt-40">With six students at most, every answer gets read, which is the point of an audit. Printed practice sets for each leak are on <a class="bx-link" href="/icse-computer-applications-worksheets">ICSE Computer Applications worksheets</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Audit your answers in the mini batch, or one to one',
  chooseLede: 'In both formats your child keeps a personal leak list and works it down. Families in India can join the fixed Tuesday and Wednesday evenings or book a private hour; for students abroad the course is private only. Fees are monthly, with no admission charge.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Six ICSE Class 10 students at most',
    'Section A answers rewritten every Tuesday',
    'A Section B program marked every Wednesday',
    'A personal leak list, closed item by item'
  ],
  choosePersonal: [
    'Class times agreed with the family, India or abroad',
    'Every minute spent on your child\'s own leaks',
    'Old school tests audited line by line',
    'Mock papers marked with the student watching',
    'The leak list shared with parents'
  ],
  chooseAfter: 'A strong student who drops a handful of marks to the same few habits often closes them in a short run of private sessions. A student losing marks across both sections gains more from the regular pace and timed practice of two batch classes each week. Fees are displayed in your local currency.',
  zonesH2: 'Full-marks preparation for ICSE students abroad',
  zonesLede: 'CISCE schools in the Gulf and South East Asia sit the same Computer Applications paper and the same internal assessment, so the same leaks cost the same marks. Overseas, the audit is done in private classes timed around the local school day.',
  zonesAfter: 'We fix the hour after the free demo and move it for school exams when needed. Families overseas can read more on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about full marks',
  faqH2: 'What students ask about scoring 100 in ICSE Computer Applications',
  faqs: [
    ['Is it possible to score 100 in ICSE Computer Applications?', 'Yes. The paper is objective enough that a complete, correct answer earns full marks: outputs have one right answer and a program either does what was asked or not. Full marks need every Section A answer exact and four Section B programs complete, with names, variable descriptions and output as the question asks.'],
    ['How do I prepare for the ICSE Computer Applications exam?', 'Learn the syllabus chapter by chapter, then switch to practice: output and error questions for Section A, and handwritten programs for each Section B family. In the last months, sit full two-hour papers and mark each one against a list of the mistakes that cost you marks, fixing the commonest first.'],
    ['What are the most common mistakes in ICSE Computer Applications?', 'Writing 8 where Java prints 8.0, changing class or method names from the question, missing variable descriptions, unlabelled output, integer division where a decimal was needed, comparing Strings with ==, one-sided difference answers, and programs that fail on edge cases such as 1 in a prime check.'],
    ['Is a variable description table compulsory in ICSE Computer Applications?', 'Past ICSE Computer Applications papers instruct that each Section B program be written using variable descriptions or mnemonic codes, so meaningful names with short comments meet that instruction. In the internal assessment, variable description is a separate criterion worth 10 of each examiner\'s 50 marks, so a full table belongs in the lab file.'],
    ['Do comments matter in ICSE Computer Applications programs?', 'Comments are one way to give the variable descriptions the paper asks for, and they make the logic easy for the examiner to follow. In the internal assessment, coding and documentation is a separate criterion worth 10 marks per examiner, so lab programs should always be commented.'],
    ['How should I use the 15 minutes of reading time?', 'Read Section B first and rank the six programs by how surely you can finish each. Choose four, note the class and method names in each, and plan the input and output. Then read Section A so the short questions are fresh when writing starts.'],
    ['How many Section B questions should I attempt?', 'The paper asks for any four of the six Section B questions, each worth 15 marks. Choose the four you can finish completely during the reading time, and spend the time saved on checking them rather than starting a fifth.'],
    ['Are flowcharts or algorithms needed in the ICSE Computer Applications paper?', 'No. Past ICSE Computer Applications papers state that flowcharts and algorithms are not required in Section B. The marks go to the program itself, written in Java with variable descriptions or mnemonic names. Time spent drawing a flowchart is better spent tracing the program on one awkward input before moving on.'],
    ['Which chapters are most important for full marks in ICSE Computer?', 'All chapters carry marks, but Section B programs usually come from user-defined methods and overloading, constructors, String handling, single and double dimensional arrays with sorting and searching, and number or series programs. Section A draws on every chapter, including operators, Math methods and wrapper classes.'],
    ['Do you offer live classes to help score 100?', 'Yes. In the ICSE mini batch on Tuesday at 5:30 PM and Wednesday at 8:00 PM IST, each student keeps a leak list, rewrites Section A answers and has a Section B program marked on screen every week, with full two-hour mocks from December. Personalised one to one classes are also available at a time the family chooses.']
  ],
  startH2: 'Try a free live answer audit',
  startHtml: `        <p>Bring a recent school test or any past paper to the free demo. The mentor goes through your child\'s answers with them, marks each lost mark against the leak list, and rewrites one Section A answer and one part of a Section B program together. You leave with the three leaks to fix first, and a clear view of whether the mini batch or one to one suits your child.</p>
        <p>Want more context first? See <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus explained</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; How to score 100 in 2027'
};
