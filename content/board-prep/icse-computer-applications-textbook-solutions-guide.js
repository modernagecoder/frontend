// ICSE Class 10 Computer Applications (Java): a guide to the textbooks schools
// commonly use and how their chapters and exercises map onto the 2027 syllabus
// and the board paper. Intent: "icse computer applications textbook
// solutions", "apc understanding computer applications solutions", "logix kips
// computer applications solutions", "sumita arora icse class 10 solutions",
// "avichal computer applications solutions". This page deliberately reproduces
// NO exercise and NO solution from any book: it maps chapters, describes
// exercise types in our own words, and works one ORIGINAL exercise.
// Book facts verified by web search on 2026-11-06:
//   - Understanding Computer Applications with BlueJ, Class X: Vijay Kumar
//     Pandey and Dilip Kumar Dey, Avichal Publishing Company (APC Books;
//     apcbooks.co.in names the publisher). "APC" and "Avichal" searches are the
//     same book. Chapter numbering not verified across editions, so not given.
//   - Logix ICSE Computer Applications with BlueJ, Class 10: Kips Learning
//     Solutions (retail listings; later "Logix 2.0"). 15 chapter titles and
//     the exercise headings "Multiple Choice Questions" and "Assignment
//     Questions" from the KnowledgeBoat index of the book. Author credit varies
//     between listings, so no author is named.
//   - Sumita Arora, ICSE Computer Applications, a textbook for Class X:
//     Dhanpat Rai (retail listings). 8 chapter titles and exercise headings
//     "Objective Type Questions" and "Assignment Questions" from KnowledgeBoat.
//   - Rupa Pandit, Computer Applications: Textbook for ICSE Class 10: Oswal
//     Publishers (retail listings). Chapter numbering not verified.
// The worked example's Java was compiled with javac 21 (OpenJDK 21.0.12) and
// run with java 21 on 2026-11-06 from a scratch file outside the repo, with the
// inputs SCHOOL, A and GO; outputs below are pasted from those runs, as is the
// char-plus-char result.
'use strict';

module.exports = {
  slug: 'icse-computer-applications-textbook-solutions-guide',
  code: 'ic20',
  board: 'icse',
  themeColor: '#4F4A6E',
  title: 'ICSE Computer Applications Textbook Solutions Guide 2027',
  description: 'ICSE Computer Applications textbook solutions guide for 2027: APC, Logix, Sumita Arora and Rupa Pandit chapters mapped to the syllabus and board questions.',
  ogTitle: 'ICSE Computer Applications Textbooks, Mapped to the Board Paper',
  ogDesc: 'A chapter map of the ICSE Class 10 Computer Applications textbooks schools use (APC Understanding Computer Applications, Kips Logix, Sumita Arora and Rupa Pandit) against the 2027 syllabus, with how each exercise type matches a board question. No copied solutions: one original exercise is worked instead.',
  twDesc: 'ICSE Class 10 Computer Applications textbooks mapped chapter by chapter to the 2027 syllabus and to board question types. No copied solutions.',
  headline: 'ICSE Computer Applications Textbook Solutions: A Chapter Map of the Books and How Their Exercises Match the Board Paper',
  courseName: 'ICSE Class 10 Computer Applications (Java) Textbook Exercise Support, Live Online',
  courseDesc: 'Live online support for ICSE Class 10 Computer Applications textbook exercises for the 2027 examination, whichever book the school uses: objective items, short answers, outputs and programs attempted by the student first, then checked in BlueJ and marked against the board pattern. Taught in India as a six-seat mini batch on Tuesday and Wednesday evenings, and everywhere as private lessons booked around the student\'s week.',
  brandTag: 'ICSE CA &middot; Textbooks',
  navLinks: [['#books', 'The books'], ['#chapter-map', 'Chapter map'], ['#exercise-map', 'Exercise types'], ['#worked', 'Worked example'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Textbook solutions guide']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Textbook guide 2027',
  h1: 'ICSE Computer Applications textbook solutions: which chapter is which, and what each exercise is for.',
  lede: 'Searches for ICSE Computer Applications textbook solutions usually come from a student stuck on one exercise in one book. This guide does something more useful than a copied answer: it maps the chapters of the four books ICSE schools commonly use onto the eight units of the 2027 syllabus, and shows which board question each kind of exercise trains. We reproduce no exercise and no solution. In our live mini batch students attempt their own book\'s exercises first, then check them in BlueJ with a teacher.',
  heroNote: 'Live online &middot; 4 books mapped &middot; 8 syllabus units &middot; exercise types matched to the paper &middot; no copied solutions &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 Computer Applications textbook exercises.',
  timetable: {
    label: 'When textbook exercises are checked',
    title: 'Exercise check',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, objective and short answers', '5:30', 'PM IST'],
      ['Wednesday, the book\'s programs', '8:00', 'PM IST'],
      ['Books we map', '4', 'common'],
      ['Programs checked in', 'BlueJ', 'live']
    ],
    zones: '<b>In India:</b> the mini batch works through the school\'s own textbook exercises at these two times. <b>Outside India:</b> a private teacher checks the same book exercises with your child at an hour that suits your local clock.',
    stamps: ['Any of the four books', 'Attempt first, then check']
  },
  picksH2: 'Courses that work alongside the school textbook',
  picksLede: 'One course follows the syllabus whatever book the school has chosen; the second picks up where Class 10 stops, with ISC Computer Science; the third is for young programmers who outgrow the textbook\'s array chapter.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'All eight units in a mini batch of up to six, with the student\'s own textbook exercises attempted, checked in BlueJ and marked to the board pattern.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'ISC textbooks assume everything in this one. This course bridges the gap with longer programs and more theory.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'Searching and sorting taken past what any school textbook asks, for a teenager who wants harder problems.' }
  ],
  capsule: 'ICSE Computer Applications textbook solutions are most useful when you know which syllabus unit an exercise belongs to and which board question it trains. The books schools commonly use are Understanding Computer Applications with BlueJ (APC, Avichal Publishing Company), Logix Computer Applications with BlueJ (Kips), Sumita Arora\'s ICSE Computer Applications (Dhanpat Rai) and Rupa Pandit\'s Computer Applications (Oswal). All cover the eight 2027 units. Their objective items train Section A, and their programs train the 15-mark Section B questions. Attempt every exercise before checking, then run programs in BlueJ. Modern Age Coders checks book exercises live in a Tuesday and Wednesday mini batch in India, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="books">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which books are these?</p>
      <h2>Which textbooks do ICSE schools use for Computer Applications Class 10?</h2>
      <p class="bx-lede">CISCE does not prescribe one textbook, so schools choose. Four books turn up most often, and two of the commonest searches, "APC" and "Avichal", point to the same one.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Book</th><th scope="col">Author</th><th scope="col">Publisher</th><th scope="col">Worth knowing</th></tr></thead>
        <tbody>
          <tr><td>Understanding Computer Applications with BlueJ, Class X</td><td>Vijay Kumar Pandey and Dilip Kumar Dey</td><td>Avichal Publishing Company (APC Books)</td><td>Searched as "APC" and as "Avichal"; the same book. A Class IX volume comes before it.</td></tr>
          <tr><td>Logix ICSE Computer Applications with BlueJ, Class 10</td><td>Credited differently across listings</td><td>Kips Learning Solutions</td><td>Splits the Class IX revision into many short chapters; later sold as Logix 2.0.</td></tr>
          <tr><td>ICSE Computer Applications, a textbook for Class X</td><td>Sumita Arora</td><td>Dhanpat Rai</td><td>Eight chapters whose titles follow the syllabus units almost word for word.</td></tr>
          <tr><td>Computer Applications: Textbook for ICSE Class 10</td><td>Rupa Pandit</td><td>Oswal Publishers</td><td>Revised editions are listed for recent sessions; check the year printed on the cover.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Editions change most years and chapter numbers can shift between them. The map below matches by chapter <i>title</i>, which is steadier than the number; check it against the edition in your child's bag. This page reproduces no exercise and no solution from any of these books. Every question and answer on it is our own.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="chapter-map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Where is each syllabus unit in my book?</p>
      <h2>Chapter map: Sumita Arora, Logix Kips and APC against the 2027 syllabus</h2>
      <p class="bx-lede">The 2027 syllabus has eight Class 10 units. The books cover all of them but slice them differently, chiefly in how many chapters they give to the Class IX revision unit.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">2027 syllabus unit</th><th scope="col">Sumita Arora (Dhanpat Rai)</th><th scope="col">Logix (Kips)</th><th scope="col">Board weight</th></tr></thead>
        <tbody>
          <tr><td>1. Revision of Class IX syllabus</td><td>Ch 1, Revising Basic Java Concepts</td><td>Ch 1 to 4 and 6 to 10: OOP concepts, introduction to Java, values and data types, operators, input, Math methods, conditional and iterative constructs, nested for loops</td><td>Most Section A outputs and loop counts</td></tr>
          <tr><td>2. Class as the basis of all computation</td><td>Ch 2, Class as Basis of All Computation</td><td>No chapter of its own in the list we checked; class and object ideas open Ch 1</td><td>Definitions, one-mark MCQs</td></tr>
          <tr><td>3. User-defined methods</td><td>Ch 3, User-Defined Methods</td><td>Ch 5, User-Defined Methods</td><td>Overloading programs in Section B</td></tr>
          <tr><td>4. Constructors</td><td>Ch 4, Constructors</td><td>Ch 11, Constructors</td><td>Class skeleton programs, differences</td></tr>
          <tr><td>5. Library classes</td><td>Ch 5, Using Library Classes</td><td>Ch 12, Library Classes</td><td>Two-mark outputs</td></tr>
          <tr><td>6. Encapsulation</td><td>Ch 6, Encapsulation</td><td>Ch 13, Encapsulation and Inheritance</td><td>Access and scope questions</td></tr>
          <tr><td>7. Arrays</td><td>Ch 7, Arrays</td><td>Ch 14, Arrays</td><td>A Section B program most years</td></tr>
          <tr><td>8. String handling</td><td>Ch 8, String Handling</td><td>Ch 15, String Handling</td><td>A Section B program most years</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40">
      <div class="bx-card"><h3>APC Understanding Computer Applications (Avichal)</h3><p>Covers all eight units and begins by revisiting object oriented concepts from Class IX. In the edition indexed online, library classes come early and encapsulation shares a chapter with inheritance, as in Logix. Its numbering has varied between editions, so find a unit by the chapter title in your copy's contents page.</p></div>
      <div class="bx-card"><h3>Rupa Pandit Computer Applications (Oswal)</h3><p>Covers the same units: classes, methods, constructors, library classes, encapsulation, arrays and string handling, after a revision of Class IX material. We have not listed its chapter numbers because they depend on the edition; match by title in the same way.</p></div>
    </div>
    <p class="bx-mt-40">If an edition carries a section on recursion, treat it as reading only: recursion is not in the 2027 Computer Applications syllabus. The unit list itself is explained on <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus page</a>, and each unit is condensed to one sheet on <a class="bx-link" href="/icse-computer-applications-notes">the chapter-wise notes</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="exercise-map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. What is each kind of exercise training?</p>
      <h2>How textbook exercises map to ICSE board question types</h2>
      <p class="bx-lede">Every book ends its chapters with exercises that fall into the same few kinds. Each kind rehearses a particular slot in the two-hour, 100-mark paper, so knowing the slot tells you how to answer it.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Exercise kind in the book</th><th scope="col">Board slot</th><th scope="col">Marks there</th><th scope="col">Answer it like this</th></tr></thead>
        <tbody>
          <tr><td>Multiple choice, fill in the blanks, true or false</td><td>Section A, Question 1</td><td class="bx-num">1 each</td><td>Work it out in the margin before reading the options</td></tr>
          <tr><td>Define, name, give one example</td><td>Section A, Question 2</td><td class="bx-num">2</td><td>One precise sentence with the key words, then a short example</td></tr>
          <tr><td>Differentiate between</td><td>Section A, Question 2</td><td class="bx-num">2</td><td>Two points, each naming a basis and both sides</td></tr>
          <tr><td>Predict the output, dry run</td><td>Section A, Questions 1 and 2</td><td class="bx-num">1 or 2</td><td>A trace table, then the output exactly, decimals and spaces included</td></tr>
          <tr><td>Find and correct the error</td><td>Section A, Question 2</td><td class="bx-num">2</td><td>Name the error and write the corrected line</td></tr>
          <tr><td>Write a statement or expression</td><td>Section A, Question 2</td><td class="bx-num">2</td><td>One line of Java that would compile as written</td></tr>
          <tr><td>Write a program or define a class</td><td>Section B, any four of six</td><td class="bx-num">15</td><td>Full program with comments and a variable description</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Logix heads its exercises Multiple Choice Questions and Assignment Questions; Sumita Arora heads them Objective Type Questions and Assignment Questions. In both, the objective set is Section A practice and the assignment set holds the short answers and programs. Original practice in each shape is on <a class="bx-link" href="/icse-computer-applications-mcq-questions">ICSE Computer Applications MCQ questions</a>, <a class="bx-link" href="/icse-computer-difference-between-questions">difference between questions</a> and <a class="bx-link" href="/icse-class-10-java-output-questions">output questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="use-solutions">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Is it wrong to look at solutions?</p>
      <h2>How to use textbook solutions without losing the learning</h2>
      <p class="bx-lede">A solution read before trying teaches almost nothing; the same solution read after a real attempt teaches a lot. The order is the whole difference.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Attempt it on paper, timed</h4><p>Give a short answer two minutes and a program fifteen to twenty. Write something complete, even if unsure. The exam is handwritten, so the practice should be too.</p></li>
      <li class="bx-step"><h4>Check outputs and programs in BlueJ first</h4><p>Type your answer and run it. The compiler and the output are a more reliable checker than any website, and they cannot be out of date.</p></li>
      <li class="bx-step"><h4>Only then compare with a solution</h4><p>If yours runs correctly but differs from a published answer, both may be fine: there is rarely one right program. If yours fails, find the first line where the two disagree.</p></li>
      <li class="bx-step"><h4>Close it and redo the exercise</h4><p>Write the corrected answer again from memory the next day. If you cannot, you understood the solution only while looking at it.</p></li>
    </ol>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Online answers can be wrong</h3><p>Solution sites are written quickly and edited rarely. Run any program you copy notes from; an answer that fails to compile is common.</p></div>
      <div class="bx-card"><h3>Editions drift</h3><p>An answer for an older edition may sit under the same exercise number as a different question in yours. Match the question text, never just the number.</p></div>
      <div class="bx-card"><h3>The syllabus moves</h3><p>Older answer sets may lean on topics outside the 2027 syllabus, recursion for one. Check each topic against the unit list before spending time on it.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="worked">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What does a well-written answer look like?</p>
      <h2>One original exercise, answered the way the board marks it</h2>
      <p class="bx-lede">This exercise is our own, written in the style of a textbook string assignment. It shows what a complete Section B answer contains: the program, comments, a variable description and the checks you run before you trust it.</p>
    </div>
    <p><b>Exercise.</b> Write a program to input a word and print a new word made by swapping its first and last characters. A one-letter word is printed unchanged. Example: SCHOOL becomes LCHOOS.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Model answer</b><span>swap the end letters</span></figcaption>
  <pre>import java.util.Scanner;
public class SwapEnds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a word: ");
        String w = sc.next();
        int n = w.length();
        String result;
        if (n == 1) result = w;          // nothing to swap
        else result = w.charAt(n - 1)    // last letter first
                    + w.substring(1, n - 1)
                    + w.charAt(0);       // first letter last
        System.out.println(result);
    }
}

<i>// SCHOOL gives LCHOOS
// A gives A
// GO gives OG</i></pre>
  <p class="bx-code-note">For a two-letter word, substring(1, 1) is the empty String, so GO still works. Testing the shortest cases is how you catch a hidden bug.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
          <tbody>
            <tr><td>sc</td><td>Scanner</td><td>Reads the input</td></tr>
            <tr><td>w</td><td>String</td><td>The word entered</td></tr>
            <tr><td>n</td><td>int</td><td>Length of the word</td></tr>
            <tr><td>result</td><td>String</td><td>The word with its ends swapped</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="bx-mt-40"><b>The trap inside it.</b> The expression starts with a char and then adds a String, so Java joins them as text. Had it started with two chars, as in <code>s.charAt(0) + s.charAt(4)</code> for "BlueJ", Java would add their codes and print 140, not BJ. Putting <code>""</code> first, as in <code>"" + s.charAt(0) + s.charAt(4)</code>, prints BJ. More word programs of this kind are on <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How does the class handle the school textbook?</p>
      <h2>Textbook exercises in the mini batch: attempted, run and marked</h2>
      <p class="bx-lede">Whichever of the four books the school uses, the class follows the 2027 syllabus units and fits the book's exercises around them.</p>
    </div>
    <div class="bx-grid-2">
      <div class="bx-card"><h3>Tuesday: the objective set</h3><p>At 5:30 PM IST students bring the objective and short-answer exercises from their own book's current chapter, attempted at home. The teacher marks the doubtful ones on screen, the way the board would.</p></div>
      <div class="bx-card"><h3>Wednesday: the book's programs</h3><p>At 8:00 PM IST one of the chapter's assignment programs is written by hand, then typed into BlueJ and run with tricky inputs while the group watches.</p></div>
      <div class="bx-card"><h3>Doubts from any book</h3><p>A student stuck on an exercise from a different edition or a different book can bring it too. The answer is worked out with them, not handed over.</p></div>
      <div class="bx-card"><h3>Past the book, into papers</h3><p>Once the chapters are done the class moves to full timed papers, described on <a class="bx-link" href="/icse-class-10-computer-applications-specimen-paper-and-mock-tests">the specimen paper and mock tests page</a>.</p></div>
    </div>
  </div>
</section>`
  ],
  chooseH2: 'Work through the textbook in the mini batch, or one to one',
  chooseLede: 'Whichever format you pick, your child\'s own textbook stays at the centre and each answer is marked as the board would mark it. Indian families can join the fixed evening group or book private lessons; families overseas book private lessons. Billed month by month, nothing to pay on joining.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'At most six ICSE Class 10 students',
    'Exercises from any of the four books',
    'Objective sets marked, programs run in BlueJ',
    'Answers worked out, never handed over'
  ],
  choosePersonal: [
    'A time the family chooses, in India or abroad',
    'Your child\'s own book, chapter by chapter',
    'The exercises they skipped, done properly',
    'Every program read line by line',
    'The 2027 unit list, matched to the book in hand'
  ],
  chooseAfter: 'A student who keeps up in school but gets stuck on the book\'s harder assignment programs usually needs a short run of one to one sessions on those. A student who wants each chapter practised and checked every week, book exercises and beyond, fits the twice-weekly group. The monthly fee for each option is listed on this page.',
  zonesH2: 'Textbook support for ICSE students abroad',
  zonesLede: 'ICSE schools outside India use the same books for the same Computer Applications paper. Abroad, textbook exercises are checked one to one in an evening slot on the student\'s own clock.',
  zonesAfter: 'Lesson times are set together once the demo is over, and they bend around term tests. Overseas families will find the details on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about textbooks and solutions',
  faqH2: 'What students ask about ICSE Computer Applications textbook solutions',
  faqs: [
    ['Which book should I use for ICSE Computer Applications Class 10?', 'There is no single right book; the one your school uses is the one to master, because its exercises match what your teacher sets. Understanding Computer Applications with BlueJ (APC), Logix (Kips), Sumita Arora (Dhanpat Rai) and Rupa Pandit (Oswal) all cover the eight 2027 units. Add original practice papers once the chapters are done.'],
    ['Are APC and Avichal Computer Applications the same book?', 'Yes. Understanding Computer Applications with BlueJ by Vijay Kumar Pandey and Dilip Kumar Dey is published by Avichal Publishing Company, whose books carry the APC name. Students search for it both ways, so "APC solutions" and "Avichal solutions" refer to the same book. Check the edition year on your copy.'],
    ['Where can I find APC Understanding Computer Applications solutions?', 'Several websites post answers to the book\'s exercises, of varying accuracy, and this page does not reproduce them. Use them only after your own attempt, and run every program in BlueJ rather than trusting it. A teacher checking your attempt teaches more than any answer key.'],
    ['How many chapters are in the Logix Kips Class 10 Computer Applications book?', 'The edition we checked has fifteen chapters, from Object Oriented Programming Concepts to String Handling. Nine of them revise Class IX topics, such as operators, input and loops, which the 2027 syllabus groups into one revision unit. User-defined methods sits among them as chapter 5, and constructors, library classes, encapsulation, arrays and strings come at the end.'],
    ['Does the Sumita Arora ICSE Class 10 book follow the syllabus?', 'Its eight chapter titles in the edition we checked follow the eight units of the syllabus closely, from Revising Basic Java Concepts to String Handling. That makes it easy to match a chapter to a unit. Exercises are split into objective type questions and assignment questions.'],
    ['Is it wrong to use textbook solutions for ICSE Computer Applications?', 'Not if you attempt the exercise first. Reading a solution before trying gives the feeling of understanding without the skill, and the exam is handwritten with no help. Attempt, run it in BlueJ, compare, then redo it from memory the next day.'],
    ['Are textbook programs enough for ICSE Section B?', 'They are a good base, but Section B programs combine ideas in ways a single chapter does not, such as a class with a constructor and an array method. Once the book is done, practise mixed programs and full timed papers so the combinations feel familiar.'],
    ['Do textbook exercises match the ICSE board paper pattern?', 'Broadly, yes. Objective exercises rehearse the one-mark MCQs of Question 1, short answers, differences and outputs rehearse the two-mark parts of Question 2, and the programs rehearse Section B, where four of six 15-mark questions are attempted.'],
    ['Do you help with textbook exercises in live classes?', 'Yes. In the mini batch students bring their own book\'s exercises: objective sets on Tuesday at 5:30 PM IST, programs on Wednesday at 8:00 PM IST. Each is attempted first, then marked and run in BlueJ. Students abroad, or with clashing timings, get the same help one to one.']
  ],
  startH2: 'Try a free live textbook session',
  startHtml: `        <p>For the free demo, ask your child to bring one textbook exercise they gave up on. The mentor solves it alongside them, runs it in BlueJ and marks it to the board pattern. Afterwards you get a straight account of the chapters that look secure, plus a recommendation between the evening group and private lessons.</p>
        <p>Want to practise first? Try <a class="bx-link" href="/icse-computer-applications-worksheets">the chapter worksheets with answers</a> or <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Textbook guide 2027'
};
