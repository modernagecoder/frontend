// ICSE Class 10 Computer Applications: internal assessment (100 marks) - the lab
// assignments many schools call the "computer project", CISCE's four marking
// criteria, and the external examiner. Intent: "icse computer applications project
// class 10", "icse computer project file", "icse class 10 computer internal
// assessment", "icse computer applications practical file".
// FACTS verified 2026-10-13 against CISCE's ICSE 2027 Computer Applications syllabus
// (cisce.org/wp-content/uploads/2025/03/18.-Computer-Applications.pdf): minimum 20
// laboratory assignments; NO separate project prescribed; internal examiner 50 +
// external examiner 50; criteria class design 10, variable description 10, coding and
// documentation 10, execution or output 20; external examiner nominated by the head
// of school, may be a teacher not teaching the subject in that section.
'use strict';

module.exports = {
  slug: 'icse-class-10-computer-applications-project-and-internal-assessment',
  code: 'ipj',
  board: 'icse',
  themeColor: '#6A3A2A',
  title: 'ICSE Computer Applications Project and Internal Assessment 2027',
  description: 'ICSE Class 10 Computer Applications internal assessment 2027: 20+ Java lab assignments, the four CISCE marking criteria, file ideas and the external examiner.',
  ogTitle: 'ICSE Class 10 Computer Applications Project and Internal Assessment Guide',
  ogDesc: 'The 100-mark internal assessment for ICSE Computer Applications: twenty or more Java lab assignments, the four criteria CISCE marks them on, project file ideas and the examiner questions to rehearse.',
  twDesc: 'The 100-mark ICSE Computer Applications internal assessment: lab file, marking criteria and examiner rehearsal.',
  headline: 'ICSE Class 10 Computer Applications Project and Internal Assessment',
  courseName: 'ICSE Class 10 Computer Applications (Java) with Internal Assessment Support, Live',
  courseDesc: 'Live online ICSE Class 10 Computer Applications (Java with BlueJ) for the 2027 examination, including the 100-mark internal assessment: a lab file of at least twenty programs built across the year against CISCE\'s four marking criteria, and an examiner rehearsal, every Tuesday at 5:30 PM and Wednesday at 8 PM IST in a mini batch, or one to one at a time the family chooses.',
  knowsAbout: ['ICSE Computer Applications Internal Assessment', 'Java Lab Assignments', 'BlueJ', 'Object-Oriented Programming', 'CISCE ICSE Class 10 Examination'],
  brandTag: 'ICSE CA &middot; Project',
  navLinks: [['#marks', 'The 100 marks'], ['#file', 'Lab file'], ['#ideas', 'Bigger programs'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Project and internal assessment']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Internal assessment and project file 2027',
  h1: 'ICSE Class 10 Computer Applications project and internal assessment, done properly.',
  lede: 'On the ICSE mark sheet, Computer Applications has two halves of equal weight: the two-hour written paper and a 100-mark internal assessment built from lab work across the year. Families pour energy into the first and leave the second to a rushed January, when a lab file of twenty programs, the file many schools call the computer project, has to appear at once. This page explains what CISCE actually asks for, the four criteria it is marked on, how a strong lab file is built, bigger program ideas that sit squarely on the syllabus, and how our live classes get it finished, understood and rehearsed before the examiner arrives.',
  heroNote: 'Live online &middot; lab file built one program a week &middot; every entry checked against CISCE\'s four criteria &middot; examiner rehearsal &middot; live doubts in BlueJ &middot; first class free',
  waText: 'Hello Modern Age Coders. I need help with the ICSE Class 10 Computer Applications project file and internal assessment.',
  timetable: {
    label: 'The internal assessment',
    title: 'Internal 100',
    right: 'ICSE 2027',
    rows: [
      ['Lab assignments, minimum', '20', ''],
      ['Subject teacher', '50', 'marks'],
      ['External examiner', '50', 'marks'],
      ['Execution or output', '20', '/ 50']
    ],
    zones: '<b>In India:</b> the mini batch, Tuesday 5:30 PM and Wednesday 8:00 PM IST. <b>Outside India:</b> personalised one to one at a time set in your own time zone.',
    stamps: ['Theory 100 &middot; Internal 100', 'BlueJ']
  },
  picksH2: 'The courses where the lab file gets built',
  picksLede: 'The ICSE Java course where every lab program is written in class, the senior course the same skills lead into, and data structures for the student who wants bigger programs.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'Lab file / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Wednesday labs produce one finished, documented program a week, so the file passes twenty before the winter and every entry meets the marking criteria.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC CS', h3: 'Computer Science Class 11 and 12', p: 'The ISC course where object-oriented design, recursion and data structures continue, building directly on a strong Class 10 lab file.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Stretch / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who finishes the syllabus early and wants bigger programs with real searching, sorting and design decisions behind them.' }
  ],
  capsule: 'The ICSE Class 10 Computer Applications internal assessment for 2027 is worth 100 marks, the same as the written paper. CISCE\'s syllabus asks for a minimum of twenty laboratory assignments in Java across the year, marked 50 by the subject teacher and 50 by an external examiner, each out of 50 on four criteria: class design (10), variable description (10), coding and documentation (10) and execution or output (20). The syllabus does not prescribe a separate project; many schools simply call the lab file the computer project. Modern Age Coders builds that file one documented program a week in a live BlueJ lab and rehearses the examiner session, in a Tuesday 5:30 PM and Wednesday 8 PM IST mini batch or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="marks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What does CISCE actually ask for?</p>
      <h2>Twenty lab assignments, two examiners and four criteria</h2>
      <p class="bx-lede">CISCE's 2027 syllabus pairs the written paper with internal assessment of equal weight and spells out how that half is marked. Most families have never read it, which is why the same avoidable marks are lost every year.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>What it is made of</h3>
        <p>Students complete a minimum of twenty laboratory assignments during the year: programs that need design, implementation and testing and that use the concepts taught in class. The teacher keeps a record of every assignment and evaluates them at the end of the year, and each must carry an appropriate list of variables, comment statements and its output. Fifty marks come from the subject teacher and fifty from an external examiner.</p>
        <p>The syllabus does not prescribe a separate project. Many schools call the finished lab file the computer project, and some set one larger program of their own, so always follow your school's instructions and dates on top of what follows here.</p>
      </div>
      <div>
        <h3>Who the external examiner is</h3>
        <p>The external examiner is nominated by the head of the school and may be a teacher from the same school who does not teach the subject to that class. That is why understanding matters more than volume: an examiner who asks why a loop stops where it does, or why a field is private, is testing whether the work on the page is really the student's.</p>
        <p>A file copied from a guide book can look complete and still fall apart in five minutes of questions. A file written by the student, one program a week, survives any question because every line has a reason the student remembers. The written paper's pattern and dates are on <a class="bx-link" href="/icse-class-10-computer-applications-exam-date-and-paper-pattern">the exam date and paper pattern page</a>.</p>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-marks">
        <thead><tr><th scope="col">Criterion</th><th scope="col">Marks</th><th scope="col">What the syllabus asks the marker to check</th><th scope="col">The habit that secures it</th></tr></thead>
        <tbody>
          <tr><td>Class design</td><td class="bx-num">10</td><td>A suitable class or classes, attributes of the right types, proper encapsulation, a well designed interface</td><td>Private fields, a constructor, methods that each do one job</td></tr>
          <tr><td>Variable description</td><td class="bx-num">10</td><td>A table of every variable: name, data type, purpose</td><td>Written the same evening the program is written, never in January</td></tr>
          <tr><td>Coding and documentation</td><td class="bx-num">10</td><td>Good names, sensible conditions and loops, error handling, layout, and class, variable and method documentation</td><td>Comments on each method; meaningful names instead of a, b and x</td></tr>
          <tr><td>Execution or output</td><td class="bx-num">20</td><td>Does the program run correctly on all sample input?</td><td>Test with a tricky input before pasting the output</td></tr>
          <tr class="bx-total"><td>Per examiner</td><td class="bx-num">50</td><td>Graded excellent, good, fair or poor on each criterion</td><td>Two examiners, 100 marks in all</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Execution carries twice the weight of each other criterion, so a program that fails on an awkward input costs more than any amount of untidy formatting. The other thirty marks reward exactly what the written paper's Section B also asks for, which is why a well-kept lab file is the best Section B revision there is.</p>
  </div>
</section>`,

`<section class="bx-section" id="file">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What makes a strong lab file?</p>
      <h2>Twenty-plus programs that cover the syllabus, not twenty of the same kind</h2>
      <p class="bx-lede">The syllabus says the teacher should see most of its components used across the assignments. A file of twenty number programs meets the count and misses that. The plan below spreads across every unit.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-marks">
        <thead><tr><th scope="col">Group</th><th scope="col">Programs</th><th scope="col">Syllabus unit</th><th scope="col">Example</th></tr></thead>
        <tbody>
          <tr><td>Input, compute, output</td><td class="bx-num">3</td><td>Revision of Class IX</td><td>Electricity bill with slab rates using if-else-if</td></tr>
          <tr><td>Loops and special numbers</td><td class="bx-num">3</td><td>Revision of Class IX</td><td>Armstrong, palindrome and perfect number checks</td></tr>
          <tr><td>Menu-driven programs</td><td class="bx-num">2</td><td>Conditional constructs</td><td>A switch menu for area of shapes or series sums</td></tr>
          <tr><td>Classes and constructors</td><td class="bx-num">3</td><td>Class, constructors, encapsulation</td><td>A Student or Product class with private fields and a parameterised constructor</td></tr>
          <tr><td>User-defined methods</td><td class="bx-num">2</td><td>Methods and overloading</td><td>An overloaded volume() for cube, cuboid and sphere</td></tr>
          <tr><td>Library and wrapper classes</td><td class="bx-num">2</td><td>Library classes</td><td>Character methods to count letters, digits and spaces</td></tr>
          <tr><td>Arrays</td><td class="bx-num">4</td><td>Arrays</td><td>Linear and binary search, bubble and selection sort, a double dimensional array printed as a matrix</td></tr>
          <tr><td>String handling</td><td class="bx-num">4</td><td>String handling</td><td>Word count, reversing words, a palindrome word, alphabetical order of characters</td></tr>
          <tr class="bx-total"><td>Lab file</td><td class="bx-num">23</td><td>Every unit</td><td>Each with a variable description, comments and real output</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Every program documented</h3><p>Each entry carries the question, the program with comments, a variable description listing every variable with its type and purpose, and the actual output from BlueJ. Those are three of the four marking criteria, secured by a checklist rather than by luck.</p></div>
      <div class="bx-card"><h3>Every program written in class</h3><p>In our Wednesday lab, the program is written by the student in BlueJ with the teacher watching, run, corrected and documented the same evening. Nothing enters the file that the student did not write, which is exactly what the external examiner probes.</p></div>
      <div class="bx-card"><h3>One a week, not twenty in January</h3><p>At one program a week from the start of the session, the file passes twenty before winter. Students who start in December write the file instead of revising for the paper, and usually do both badly.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="worked">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What does a lab entry look like?</p>
      <h2>One lab program, entered carelessly and entered well</h2>
      <p class="bx-lede">Write a program to input a word and check whether it is a palindrome (reads the same backwards), ignoring case.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The careless entry</b><span>what examiners see too often</span></figcaption>
  <pre>import java.util.*;
class p {
 void main() {
  Scanner s = new Scanner(System.in);
  String a = s.next(), b = "";
  for (int i = a.length()-1; i >= 0; i--)
   b = b + a.charAt(i);
  if (a.equals(b)) System.out.println("yes");
  else System.out.println("no");
 }
}
<i># No comments, no variable description,</i>
<i># no output, and "Madam" prints "no"</i>
<i># because case was never handled.</i></pre>
  <p class="bx-code-note">It compiles and mostly works, which is why it gets into files. It fails the question's own condition, so it loses execution marks on the one input that matters, and gives the examiner nothing to read but code.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The strong entry</b><span>what the four criteria reward</span></figcaption>
  <pre><i>// checks whether a word is a palindrome, ignoring case</i>
class PalindromeWord {
  public static void main(String[] args) {
    java.util.Scanner in = new java.util.Scanner(System.in);
    System.out.print("Enter a word: ");
    String word = in.next().toUpperCase();
    String rev = "";
    for (int i = word.length() - 1; i >= 0; i--)
      rev = rev + word.charAt(i);   <i>// build reverse</i>
    if (word.equals(rev))
      System.out.println(word + " is a palindrome");
    else
      System.out.println(word + " is not a palindrome");
  }
}
<b>Variable description</b>
word  String  the word, in upper case
rev   String  the word reversed
i     int     loop index, last char to first
<b>Output</b>  Enter a word: Madam
        MADAM is a palindrome</pre>
  <p class="bx-code-note">A clear name, comments, the case condition handled with toUpperCase(), a variable description and a real run on the tricky input. Each criterion is visibly met, and the student can explain every line because they wrote it in class.</p>
</figure>
    </div>
    <p class="bx-mt-40">
      The difference is not cleverness. It is a checklist applied to every entry: question copied, program
      tested on an awkward input, comments added, variable description written, real output pasted. Our
      Wednesday lab ends each program with that checklist until it is automatic. More program families are
      worked on <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Java programs practice</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" id="ideas">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What if the school asks for a project?</p>
      <h2>Eight bigger programs that sit squarely on the ICSE syllabus</h2>
      <p class="bx-lede">Some schools ask for one larger program on top of the twenty assignments, and strong students often add one anyway. A good one uses classes, constructors, methods, arrays and strings in a single program that solves a small real problem: ambitious enough to show skill, small enough to explain fully.</p>
    </div>
    <div class="bx-grid-2">
      <div class="bx-card"><h3>School library manager</h3><p>A Book class with private fields and a constructor, an array of books, search by title or author, and issue and return methods that update availability. Covers classes, encapsulation, arrays and string comparison.</p></div>
      <div class="bx-card"><h3>Report card generator</h3><p>A double dimensional array of marks for several students and subjects, totals and averages by row and column, grades from a slab, and the topper found by search. Covers 2D arrays, loops and methods.</p></div>
      <div class="bx-card"><h3>Canteen billing system</h3><p>A switch-driven menu, an Item class, quantity input, a running bill with a discount slab, and a printed receipt. Covers constructors, menus, conditional logic and formatted output.</p></div>
      <div class="bx-card"><h3>Text analyser</h3><p>Input a sentence and report the word count, longest word, vowel frequency, words starting with a capital and the sentence with words reversed. Covers String methods, Character wrapper methods and loops.</p></div>
      <div class="bx-card"><h3>Number explorer</h3><p>A menu that checks a number against several special-number definitions, palindrome, Armstrong, perfect, prime, Niven, using one method per check and overloading where it fits. Covers methods, loops and modular design.</p></div>
      <div class="bx-card"><h3>Simple bank account</h3><p>An Account class with a private balance, a parameterised constructor, deposit and withdraw methods that refuse invalid amounts, and a short transaction menu. Covers encapsulation and object state.</p></div>
      <div class="bx-card"><h3>Quiz program</h3><p>Arrays of questions, options and answers, a score that updates as the user answers, and a final grade with feedback. Covers parallel arrays, input handling and conditional logic.</p></div>
      <div class="bx-card"><h3>Sorting visualiser</h3><p>Input a list, then show bubble sort and selection sort pass by pass, counting comparisons and swaps for each. Covers arrays and both sort techniques in the syllabus, and gives the examiner plenty to ask about.</p></div>
    </div>
    <p class="bx-mt-40">
      Whatever your school asks for in format, the qualities that score map straight onto CISCE's four
      criteria: sensible class design, clear coding with each class and method documented, a complete variable
      description, and output that is correct on every sample input. In our classes, a larger program, where the
      school wants one, is chosen by the end of the first term, built in stages alongside the lab file and
      reviewed monthly, so it never becomes a January emergency.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="examiner">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do you prepare for the external examiner?</p>
      <h2>A rehearsal with a teacher your child has not met</h2>
      <p class="bx-lede">Since the external examiner may be a teacher who has never taught your child, the rehearsal uses one too. Answering questions about your own code is a skill, and it can be practised.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>File walk-through</h4><p>The student opens the file and walks the rehearsal examiner through three programs of the examiner's choosing, explaining the logic aloud without reading the code line by line.</p></li>
      <li class="bx-step"><h4>Why questions</h4><p>Why is this field private? Why a while loop here and not a for loop? What must be true of the array before binary search works? Each question targets a syllabus concept the program uses.</p></li>
      <li class="bx-step"><h4>Change one thing</h4><p>The examiner asks for a small change, count only vowels, sort in descending order, refuse negative deposits, and the student makes it live in BlueJ. Students who wrote their own programs find this easy.</p></li>
      <li class="bx-step"><h4>The design conversation</h4><p>For the biggest program in the file: what problem does it solve, which classes did you design and why, what would you add with more time? Students practise answering in two or three clear sentences, not a speech.</p></li>
      <li class="bx-step"><h4>Feedback and a second run</h4><p>Weak answers are noted, revisited in the next class, and the rehearsal is repeated briefly before the school's assessment date. Doubts are taken live throughout.</p></li>
    </ol>
  </div>
</section>`
  ],
  chooseH2: 'Build the lab file in the mini batch, or on your own timetable',
  chooseLede: 'Internal assessment support is part of the course in both formats, not an add-on. Families in India choose by timing and how much one-to-one attention their child needs; outside India the course runs one to one. Billed monthly, no admission fee, cancel at any month end.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'A mini batch of up to six ICSE Class 10 students',
    'One documented lab program a week in the Wednesday lab',
    'Every entry checked against the four criteria',
    'Examiner rehearsal before the school\'s assessment'
  ],
  choosePersonal: [
    'Days and time set by you, any time zone',
    'A lab file rescued quickly if the deadline is close',
    'Sessions built around your school\'s own submission dates',
    'Extra depth for an ambitious larger program',
    'Same teachers, same CISCE syllabus, same BlueJ setup'
  ],
  chooseAfter: 'If the school\'s submission date is only weeks away, personalised one to one is usually the right call: the teacher can work through the missing programs at the pace the deadline needs. The free demo ends with a plain answer on what is realistic. Fees appear in your own currency.',
  zonesH2: 'Internal assessment help for ICSE students abroad',
  zonesLede: 'ICSE schools outside India follow the same CISCE scheme, so the lab file and the examiner rehearsal work the same way. Outside India the course runs as personalised one to one, set inside the hours after school:',
  zonesAfter: 'The class time is agreed with you after the free demo and moves when the school calendar does. More for families overseas is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the internal assessment',
  faqH2: 'What families ask about the ICSE Computer Applications lab file and internal assessment',
  faqs: [
    ['How many marks is the ICSE Computer Applications internal assessment?', 'One hundred marks, the same weight as the two-hour written paper. CISCE\'s 2027 syllabus asks for at least twenty laboratory assignments during the year, with fifty marks from the subject teacher and fifty from an external examiner, each marking out of fifty on class design, variable description, coding and documentation, and execution or output.'],
    ['How are the lab assignments marked?', 'On four criteria, each graded excellent, good, fair or poor: class design out of 10, variable description out of 10, coding and documentation out of 10, and execution or output out of 20, making 50. The subject teacher and the external examiner each award marks out of 50 this way, for 100 in all.'],
    ['Is a project compulsory in ICSE Class 10 Computer Applications?', 'Not in CISCE\'s 2027 syllabus, which asks for a minimum of twenty laboratory assignments and does not prescribe a separate project. Many schools call the finished lab file the computer project, and some set one larger program of their own, so follow your school\'s instructions. Good larger programs include a library manager, a report card with a 2D array, a billing system or a text analyser.'],
    ['How many programs should the lab file have?', 'At least twenty, and a strong file usually has a few more so it can cover every syllabus unit: input and computation, loops and special numbers, menus, classes and constructors, methods and overloading, library classes, arrays and strings. Each program should have comments, a variable description and its real output.'],
    ['Who is the external examiner?', 'Under CISCE\'s rules, the external examiner is nominated by the head of the school and may be a teacher from the same school who does not teach the subject to that class. The four CISCE criteria do not include a viva, but many examiners run programs from the file and ask the student to explain choices such as access specifiers, loop types or search methods, so students should be ready to.'],
    ['Can you write the lab file for my child?', 'No, and it would not help: the external examiner\'s questions are designed to find out whether the student understands the work. Your child writes every program in class with guidance, documents it and rehearses explaining it, so the work and the marks are genuinely theirs.'],
    ['When should the lab file be finished?', 'Before your school\'s internal assessment dates, which the school announces. We aim for the file to pass twenty programs before winter by writing one a week from the start of the session, so January can go to the written paper.'],
    ['We are late. Can the lab file still be done?', 'Usually, yes. With personalised one to one, a teacher can work through the missing programs in order of syllabus coverage so the file still spans every unit. The free demo is the quickest way to get an honest plan for your child\'s deadline.'],
    ['Do ICSE students abroad have the same internal assessment?', 'Yes. ICSE schools outside India follow the CISCE scheme, so the internal assessment works the same way. CISCE lists ICSE schools abroad in the UAE, Singapore, Indonesia and Thailand; outside India we teach the course personalised one to one, at a time set in the local time zone of the family.'],
    ['Is internal assessment help charged separately?', 'No. Lab file support and the examiner rehearsal are part of the monthly fee for the mini batch or personalised one to one, shown on this page in your own currency. There is no admission fee, and the first class is a free demo.']
  ],
  startH2: 'The free demo includes a lab file check',
  startHtml: `        <p>Bring your child's current lab file to the demo, however unfinished. The teacher looks through it with you against the four criteria, notes which syllabus units are missing, and then works one program live in BlueJ, writing, documenting and running it, so you see exactly how the Wednesday lab builds the file. You leave with a list of what the file still needs.</p>
        <p>Preparing for the written paper too? See <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the specimen paper and mock tests</a>, and <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the syllabus explained</a> unit by unit.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Internal assessment 2027'
};
