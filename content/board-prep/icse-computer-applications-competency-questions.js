// ICSE Class 10 Computer Applications (Java): competency based questions, the
// newer question style worked in Java. Intent: "icse computer applications
// competency based questions", "case study questions icse computer", "assertion
// reason icse computer applications", "HOTS questions icse java", "application
// based questions icse computer".
// Distinct from ic07 (the one-mark MCQ bank, two assertion-reason items only),
// ic16 (error finding) and ic02 (output tracing): this page explains what is and
// is not confirmed about the competency style, lists the shapes seen in the
// paper, and works original assertion-reason, case-study and HOTS items.
// What is CONFIRMED was checked on 2026-11-06 against solved copies of the 2024,
// 2025 and 2026 papers: assertion-reason MCQs in Question 1 (one in 2024, two in
// 2025, two in 2026), picture or real-life scenario MCQs in each of those years,
// a jumbled-statements item (2025), find-the-error-and-correct parts in Question
// 2 (2025, 2026), a one-statement rule from a real situation and a fill-in-the-
// blanks code part (2026). What is only REPORTED: news coverage (October 2026)
// of a CISCE release saying the 2027 specimen papers weight higher-order
// competencies at about 50 percent; the reported Class 10 list of 2027 specimens
// did not include Computer Applications, so the page does not claim any 2027
// change to this paper (the design doc lists 2027 ICSE specimen changes as
// unconfirmed). No separate case-study section is claimed for this paper.
// Every Java item was compiled with javac 21 (OpenJDK 21.0.12) and run with
// java 21 on 2026-11-06 from scratch files outside the repo: 'A' + 2 = 67,
// Math.sqrt(25) = 5.0, unstored toUpperCase leaves "board", m[5] on length 5
// throws ArrayIndexOutOfBoundsException, overloaded Box constructors give 1 3,
// binary search for 9 in {9, 4, 7, 1} reports not found, bus case total 43,
// busiest stop 4, full after stop 4 with 34, planter 0.75 L and 1.5 L, ternary
// 0.0, buggy average throws, int-division average 7.0, fixed 7.75, vowels in
// "Education" 5, canRide true, reversed array 10 8 6 4 2.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-competency-questions',
  code: 'ic06',
  board: 'icse',
  themeColor: '#24485E',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Applications Competency Based Questions',
  description: 'ICSE Computer Applications competency based questions: what is confirmed, the shapes in the paper, and worked assertion reason, case study and HOTS items.',
  ogTitle: 'ICSE Computer Applications Competency Questions, Worked in Java',
  ogDesc: 'An honest guide to the competency style in the ICSE Class 10 Computer Applications paper: which question shapes have actually appeared since 2024, what is only reported for 2027, and original assertion and reason, case study and higher-order Java questions worked step by step, every program compiled and run.',
  twDesc: 'What is confirmed about competency questions in ICSE Computer Applications, plus worked assertion reason, case study and HOTS Java items.',
  headline: 'ICSE Computer Applications Competency Based Questions: What Is Confirmed, and Worked Java Items in the Newer Style',
  courseName: 'ICSE Class 10 Computer Applications (Java) Competency and Application Question Practice, Live Online',
  courseDesc: 'Live online practice of the newer question style in the ICSE Class 10 Computer Applications paper for 2027: assertion and reason items, real-life scenario questions, find-and-fix code with the error type named, jumbled statements, fill-in-the-blank code and short case studies, each worked aloud, written in BlueJ and marked, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Competency',
  navLinks: [['#confirmed', 'What is confirmed'], ['#assertion', 'Assertion and reason'], ['#case', 'Case studies'], ['#hots', 'HOTS'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Competency questions']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Competency questions, 2027 exam',
  h1: 'ICSE Computer Applications competency based questions, and what is actually confirmed about them.',
  lede: 'ICSE Computer Applications competency based questions ask a student to use Java in an unfamiliar situation: judge two statements, fix someone else\'s code, or turn an everyday rule into a statement. Since 2024 these shapes have appeared inside the usual paper, not as a new section. This page separates what the papers show from what is only reported for 2027, then works original assertion and reason, case study and higher-order items in Java. In our mini batch they are practised aloud every week.',
  heroNote: 'Live online &middot; confirmed shapes only &middot; six assertion and reason items &middot; two Java case studies &middot; four HOTS items &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live practice of ICSE Computer Applications competency questions.',
  timetable: {
    label: 'When competency items are practised',
    title: 'Application drills',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, assertion and scenario items', '5:30', 'PM IST'],
      ['Wednesday, find-and-fix in BlueJ', '8:00', 'PM IST'],
      ['Question shapes confirmed since 2024', '6', 'in Section A'],
      ['Worked items on this page', '12', 'in Java']
    ],
    zones: '<b>In India:</b> the newer shapes are drilled at the two batch times above. <b>Abroad:</b> ICSE learners in the UAE, Singapore, Indonesia and Thailand get the same drills in private classes set after their school day.',
    stamps: ['Inside Sections A and B', 'Every program run']
  },
  picksH2: 'Courses that build application skills',
  picksLede: 'Three courses: our ICSE Java course, whose weekly classes include these shapes; ISC-level Computer Science, where judging code takes up more of the paper; and an algorithms course for students who like proving why code works.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with assertion, scenario and find-and-fix items worked aloud beside the weekly program.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students going on to ISC Computer Science, where reading, judging and repairing code becomes a larger share of the paper.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who enjoys asking why a search fails on unsorted data and wants to reason about programs more formally.' }
  ],
  capsule: 'ICSE Computer Applications competency based questions test whether a student can apply Java, not just recall it. In the 2024, 2025 and 2026 papers they appeared inside the normal structure: assertion and reason and real-life scenario MCQs in Question 1, find-the-error, write-the-rule and complete-the-code parts in Question 2, and real-world classes in Section B. A separate case-study section has not appeared, and no 2027 Computer Applications specimen has been reported. Modern Age Coders teaches these items in a live mini batch on Tuesday and Wednesday evenings in India, with personalised one to one classes as the other option.',
  sections: [
`<section class="bx-section bx-section--tint" id="confirmed">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What are competency questions, and what is certain?</p>
      <h2>What are competency based questions in ICSE Computer Applications?</h2>
      <p class="bx-lede">A competency based question gives a situation the student has not seen and asks them to apply, analyse or judge Java knowledge in it. In this subject they have so far appeared as new shapes inside the familiar 40 plus 60 mark paper, not as a separate section.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Status</th><th scope="col">What we can say</th><th scope="col">Source</th></tr></thead>
        <tbody>
          <tr><td><b>Confirmed</b></td><td>Assertion and reason MCQs in Question 1: one in 2024, two in 2025, two in 2026</td><td>Solved copies of those board papers</td></tr>
          <tr><td><b>Confirmed</b></td><td>MCQs built on a picture or everyday situation (a shape and its examples, a repeated exercise, the earth's rotation and revolution) in each of those three years</td><td>Same</td></tr>
          <tr><td><b>Confirmed</b></td><td>Question 2 parts asking to name an error type and correct the code (2025, 2026), to write a real-life rule as one statement (2026) and to fill blanks in code (2026)</td><td>Same</td></tr>
          <tr><td><b>Confirmed</b></td><td>Section B Question 3 framed as a real service or device: a student stream, a courier, cloud storage, a step tracker (2023 to 2026)</td><td>Same</td></tr>
          <tr><td><b>Reported</b></td><td>CISCE says its 2027 specimen papers weight higher-order skills (apply, analyse, evaluate, create) at about half the marks</td><td>News reports of an October 2026 CISCE release, not yet checked against the release itself</td></tr>
          <tr><td><b>Not confirmed</b></td><td>A 2027 Class 10 Computer Applications specimen: the reported Class 10 list did not include it. Any change to the paper's layout for 2027. A separate case-study section</td><td>Check cisce.org before relying on any claim</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">So the safe plan for 2027 is the one this page follows: master the shapes that have already appeared, and practise case-style reading in case more of it comes. Where these shapes sat in each paper is mapped on <a class="bx-link" href="/icse-computer-applications-previous-year-papers-solved">ICSE Computer Applications previous year papers, solved</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="assertion">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do assertion and reason items work?</p>
      <h2>Assertion reason ICSE Computer Applications: the method and six worked items</h2>
      <p class="bx-lede">Judge the assertion alone, judge the reason alone, and only if both are true ask whether the reason is why the assertion holds. The four options are: (a) both true and R explains A, (b) both true but R does not explain A, (c) A true and R false, (d) A false and R true.</p>
    </div>
    <ol class="bx-qlist">
      <li><b>A:</b> <code>System.out.println('A' + 2);</code> prints 67. <b>R:</b> a char used in arithmetic is promoted to int.
        <details><summary>Answer</summary> <b>(a)</b> 'A' is 65, promoted to int, plus 2 is 67, and the promotion is exactly why a number prints instead of C.</details></li>
      <li><b>A:</b> <code>System.out.println(Math.sqrt(25));</code> prints 5. <b>R:</b> Math.sqrt returns a double.
        <details><summary>Answer</summary> <b>(d)</b> It prints 5.0, so A is false. R is true, and it is the very reason A fails.</details></li>
      <li><b>A:</b> after <code>String s = "board"; s.toUpperCase();</code> s still holds "board". <b>R:</b> String objects in Java cannot be changed.
        <details><summary>Answer</summary> <b>(a)</b> toUpperCase builds a new String that was never stored; immutability is the cause.</details></li>
      <li><b>A:</b> after <code>int[] m = new int[5];</code> the element m[5] holds 0. <b>R:</b> elements of a new int array start at 0.
        <details><summary>Answer</summary> <b>(d)</b> Valid indices are 0 to 4, so m[5] throws ArrayIndexOutOfBoundsException when run. R is a true rule about indices 0 to 4.</details></li>
      <li><b>A:</b> a class can have two constructors, <code>Box()</code> and <code>Box(int s)</code>. <b>R:</b> a constructor has the same name as its class.
        <details><summary>Answer</summary> <b>(b)</b> Both are true, but constructors can coexist because their parameter lists differ, not because of their name.</details></li>
      <li><b>A:</b> binary search for 9 in <code>{9, 4, 7, 1}</code> reports "not found". <b>R:</b> binary search assumes the array is sorted.
        <details><summary>Answer</summary> <b>(a)</b> The search checks 4, then 7, then 1, always moving right, and never looks at index 0. It fails because the data is not sorted.</details></li>
    </ol>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The trap in (b)</h3><p>Students pick (a) whenever both statements are true. Ask: if R were false, would A still be true? If yes, R does not explain A.</p></div>
      <div class="bx-card"><h3>The trap in (d)</h3><p>An assertion that is almost right, such as "prints 5" for 5.0, is false. Exact output is part of the fact.</p></div>
      <div class="bx-card"><h3>Run it if you can</h3><p>Every item above is a two-line program. While revising, type it into BlueJ: the output settles A in seconds.</p></div>
    </div>
    <p class="bx-mt-40">Two more assertion items sit among the one-mark bank on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="case">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does a case study look like in Java?</p>
      <h2>Case study questions ICSE computer: two worked cases</h2>
      <p class="bx-lede">A case study gives a short real situation and then several linked questions on it. The board has not set a separate case-study section in this paper, but its scenario MCQs and real-world Question 3 classes read the same way, so these two original cases train that reading.</p>
    </div>
    <h3>Case 1: the school bus</h3>
    <p>A school bus makes five stops. The number of students boarding at each is stored as <code>int[] board = {6, 11, 4, 13, 9};</code>. (i) Which construct suits five values of one type? (ii) Find the total and the busiest stop. (iii) The bus is full at 30 or more students; which statement stops counting once it is full? (iv) After which stop is it full?</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>BusStops.java</b><span>parts (ii) to (iv)</span></figcaption>
  <pre>int[] board = {6, 11, 4, 13, 9};
int total = 0, max = 0;
for (int i = 0; i &lt; board.length; i++) {
    total += board[i];
    if (board[i] &gt; board[max])
        max = i;
}
System.out.println("Total boarded: " + total);
System.out.println("Busiest stop: " + (max + 1));
int seats = 0, stop;
for (stop = 0; stop &lt; board.length; stop++) {
    seats += board[stop];
    if (seats &gt;= 30)
        break;
}
System.out.println("Bus full after stop " + (stop + 1) + " with " + seats);</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output and answers</b><span>as run</span></figcaption>
  <pre>Total boarded: 43
Busiest stop: 4
Bus full after stop 4 with 34</pre>
  <p class="bx-code-note">(i) A single dimensional array. (ii) 43, and stop 4 with 13; max holds an index, so the stop number is max + 1. (iii) break, which leaves the loop with stop still pointing at the stop where the bus filled. (iv) Stop 4: 6 + 11 + 4 is 21, and 13 more makes 34.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Case 2: the self-watering planter</h3>
    <p>A planter reads soil moisture as a percentage. Below 20 it gives 1.5 litres, from 20 to under 45 it gives 0.75 litres, otherwise none. (i) Which kind of constructor takes the reading? (ii) Why should moisture be private? (iii) What does a reading of 32 print? (iv) Write the rule as one statement.</p>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Planter.java</b><span>class, constructor, ladder</span></figcaption>
  <pre>public class Planter {
    private int moisture;
    private double litres;
    Planter(int m) { moisture = m; }
    void decide() {
        if (moisture &lt; 20)
            litres = 1.5;
        else if (moisture &lt; 45)
            litres = 0.75;
        else
            litres = 0;
    }
    void show() {
        System.out.println("Moisture " + moisture + "%: water " + litres + " L");
    }
    public static void main(String[] args) {
        Planter p = new Planter(32);
        p.decide();
        p.show();
    }
}</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answers</b><span>output as run</span></figcaption>
  <pre>Moisture 32%: water 0.75 L

<i>// (iv)</i>
litres = moisture &lt; 20 ? 1.5 : moisture &lt; 45 ? 0.75 : 0;</pre>
  <p class="bx-code-note">(i) A parameterised constructor. (ii) So no other class can set an impossible reading; this is encapsulation. (iii) 32 fails the first test and passes the second. A reading of 12 prints 1.5 L, and the ternary in (iv) gives 0.0 for 50.</p>
</figure>
    </div>
    <p class="bx-mt-40">Constructors of every kind are drilled on <a class="bx-link" href="/icse-class-10-constructors-questions">constructors questions for ICSE Class 10</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="hots">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What do HOTS and application items ask?</p>
      <h2>HOTS questions ICSE Java and application based questions, worked</h2>
      <p class="bx-lede">Higher-order items ask you to evaluate or repair code rather than write it from scratch. Four shapes from recent Question 2 papers, each with an original item.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>H1. Name the errors and correct the code</b><span>average of an array</span></figcaption>
  <pre>int[] a = {7, 8, 10, 6};
int sum = 0;
double avg;
for (int i = 1; i &lt;= a.length; i++)
    sum += a[i];
avg = sum / a.length;
System.out.println(avg);</pre>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer</b><span>two errors, two kinds</span></figcaption>
  <pre>for (int i = 0; i &lt; a.length; i++)
    sum += a[i];
avg = (double) sum / a.length;

<i>// prints 7.75</i></pre>
  <p class="bx-code-note">Runtime error: i reaches 4 and a[4] throws ArrayIndexOutOfBoundsException. Logical error: sum / a.length divides two ints, so even with the loop fixed it prints 7.0. Naming the kind of each error earns the mark as much as the fix does.</p>
</figure>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>H2. Put the statements in order</h3><p>To count the vowels in a word: (1) <code>return c;</code> (2) <code>if ("AEIOU".indexOf(w.charAt(i)) &gt;= 0) c++;</code> (3) <code>int c = 0; w = w.toUpperCase();</code> (4) <code>for (int i = 0; i &lt; w.length(); i++)</code>. <b>Answer:</b> 3, 4, 2, 1. For "Education" it returns 5.</p></div>
      <div class="bx-card"><h3>H3. Turn a rule into one statement</h3><p>A ride admits a rider at least 120 cm tall, or any rider with an adult. <b>Answer:</b> <code>boolean canRide = height &gt;= 120 || withAdult;</code> With height 115 and withAdult true it is true; using &amp;&amp; would wrongly refuse that child.</p></div>
      <div class="bx-card"><h3>H4. Fill the blanks to reverse an array in place</h3><p><code>int i = 0, j = r.length - 1;</code> then <code>while (i &lt; j) { int t = r[i]; r[i] = r[j]; r[j] = t; ___; ___; }</code>. <b>Answer:</b> <code>i++</code> and <code>j--</code>. {2, 4, 6, 8, 10} becomes 10 8 6 4 2.</p></div>
    </div>
    <p class="bx-mt-40">A full set of broken programs to repair is on <a class="bx-link" href="/icse-class-10-java-error-finding-questions">ICSE Class 10 Java error finding questions</a>, and tracing practice is on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is the newer style practised live?</p>
      <h2>How the mini batch prepares students for application questions</h2>
      <p class="bx-lede">Competency items reward explaining, so the classes make students explain out loud, then prove the explanation by running the code.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday: judge before you answer</h4><p>In the Tuesday 5:30 PM IST session, assertion and scenario items are answered against a timer, then each student defends their choice before the code is run in BlueJ.</p></li>
      <li class="bx-step"><h4>Wednesday: repair someone else's code</h4><p>In the Wednesday 8:00 PM IST session, the week's program arrives with planted errors. Students name each error's kind, fix it and run it.</p></li>
      <li class="bx-step"><h4>A short case every fortnight</h4><p>A situation in a few lines, then four linked questions, as in the cases above, so reading a scenario becomes routine.</p></li>
      <li class="bx-step"><h4>Inside every mock from December</h4><p>Full two-hour mock papers include these shapes in the proportions recent papers used, marked like the board.</p></li>
    </ol>
    <p class="bx-mt-40">If CISCE publishes a 2027 specimen for this paper, the batch will add its shapes the same week. A wider plan for the whole paper is on <a class="bx-link" href="/how-to-score-100-in-icse-computer-applications">how to score 100 in ICSE Computer Applications</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise the newer style in the mini batch, or one to one',
  chooseLede: 'Whichever format you pick, the assertion, scenario, find-and-fix and case items are the same. Families in India can join the two fixed evening classes or book private time; students overseas study one to one only. There is no admission fee and the fee is charged month by month.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'Up to six ICSE Class 10 students per batch',
    'Assertion and scenario items timed every Tuesday',
    'Planted-error programs repaired every Wednesday',
    'A short case study every fortnight'
  ],
  choosePersonal: [
    'Slot chosen by the family, in India or abroad',
    'More time on the shape your child finds hardest',
    'Your child explains every answer before it is checked',
    'School and past-paper items worked together',
    'Taught to the 2027 syllabus by the batch teachers'
  ],
  chooseAfter: 'A student who writes good programs but freezes when asked to judge a statement or fix unfamiliar code often needs only a few one to one sessions on the reasoning. A student who also wants regular Section B practice is better served by the two weekly batch classes, where the newer items sit beside the program of the week. The fee on this page appears in your local currency.',
  zonesH2: 'Competency practice for ICSE students outside India',
  zonesLede: 'An ICSE school in Dubai or Singapore sets the same Computer Applications paper, newer shapes included. Overseas, each student practises them in private classes placed in a free hour after school, local time.',
  zonesAfter: 'We fix the hour once the free demo is done and shift it in weeks with school tests. Details for families abroad: <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about competency questions',
  faqH2: 'What students ask about competency questions in ICSE Computer Applications',
  faqs: [
    ['What are competency based questions in ICSE Computer Applications?', 'They are questions that ask a student to apply, analyse or evaluate Java knowledge in a new situation instead of recalling a definition. In recent papers they include assertion and reason MCQs, picture or real-life scenario MCQs, find-and-fix code parts, writing an everyday rule as a Java statement and completing code with blanks.'],
    ['Are there case study questions in ICSE Computer Applications?', 'Not as a separate section so far. The 2024 to 2026 papers kept the usual Section A and Section B, with scenario-based MCQs and real-world class questions instead. No 2027 Computer Applications specimen has been reported. Practising short cases still helps, because the reading skill is the same.'],
    ['Are assertion and reason questions asked in ICSE Computer Applications?', 'Yes. They sit among the twenty one-mark MCQs of Question 1. The 2024 paper carried one, and the 2025 and 2026 papers carried two apiece, judging by solved copies. Treat each as three small decisions: is A true, is R true, and does R cause A.'],
    ['How many competency based questions will be in ICSE 2027 Computer Applications?', 'Nobody can say yet for this paper. News reports of an October 2026 CISCE release say the 2027 specimen papers give about half the weight to higher-order skills, but the reported Class 10 list did not include Computer Applications. Check cisce.org for any specimen before trusting a number.'],
    ['What are HOTS questions in ICSE Java?', 'Higher order thinking skill questions ask you to judge, repair or design rather than repeat. In this paper they look like: name the type of error and correct the code, order jumbled statements, fill blanks so a fragment works, or explain why a search or loop gives a wrong result.'],
    ['How do I answer an assertion and reason question?', 'Decide whether the assertion is true, then whether the reason is true, each on its own. If both are true, ask whether the reason causes the assertion; if the assertion would still hold without it, choose "both true but R does not explain A". An assertion with a slightly wrong value, such as 5 for 5.0, is false.'],
    ['How do I prepare for application based questions in ICSE Computer?', 'Practise reading code you did not write. Take programs with planted errors and name each error type, rewrite everyday rules as single Java statements, and run every guess in BlueJ to check it. Past-paper Section B classes, each built around a real service, are good practice too.'],
    ['Is the ICSE Computer Applications paper pattern changing for 2027?', 'Nothing confirmed. The 2027 syllabus keeps a 100-mark paper with Section A of 40 compulsory marks and Section B of any four from six programs. Reports about competency weighting refer to specimen papers in selected subjects; until CISCE publishes something for this paper, prepare for the pattern of recent years.'],
    ['Do you teach competency questions in live classes?', 'Yes. In the mini batch, Tuesday classes time assertion and scenario items, Wednesday classes repair programs with planted errors, and a short case study comes every fortnight. Each answer is explained aloud and checked in BlueJ. A private one to one slot, timed around the family, is the other route.']
  ],
  startH2: 'Try a free live class on the newer question style',
  startHtml: `        <p>In the free demo your child judges a few assertion and reason items, repairs a short program with a planted error and explains each answer to the mentor before it is run. You then get a straight account of how ready your child is for the newer shapes, and which format we would recommend.</p>
        <p>Looking for the wider plan? See <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Competency questions'
};
