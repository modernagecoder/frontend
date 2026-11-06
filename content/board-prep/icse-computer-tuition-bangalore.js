// ICSE computer tuition for Bengaluru families: ICSE Class 10 Computer Applications
// (Java with BlueJ) taught live online in two evening slots. Intent: "icse computer
// tuition bangalore", "java tuition bangalore icse", "computer applications tutor
// bengaluru", "icse class 10 java classes bangalore". Written fresh; it shares no
// prose with the Kolkata page or the CBSE AI Bangalore page. Honest framing: no
// centre in Bengaluru; every class is live online. No school counts, no school
// names, no local claims. City fact used: Karnataka's own Class 10 exam is the SSLC.
// Board facts as in the design doc (ICSE CA 2027 paper and internal assessment).
// The Section B String program (WordScan) is original. It was compiled with javac 21
// (OpenJDK 21.0.12) and run with java 21 on 2026-11-06 from a scratch folder outside
// the repo, with the three inputs shown on the page (including the extra-spaces
// case); every output below is pasted from those runs.
'use strict';

module.exports = {
  slug: 'icse-computer-tuition-bangalore',
  code: 'ic25',
  board: 'icse',
  themeColor: '#334E7A',
  dateModified: '2026-11-06',
  title: 'ICSE Computer Tuition Bangalore: Evening Java Classes',
  description: 'ICSE computer tuition in Bangalore, live online on weekday evenings: Class 10 Java with BlueJ, a String program worked in full, lab file support, one to one.',
  ogTitle: 'ICSE Computer Tuition for Bengaluru Students, Weekday Evenings',
  ogDesc: 'Live online ICSE Class 10 Computer Applications for Bengaluru students in two weekday evening slots: what each slot is for, an honest choice between home tutor, centre and online class, a String handling program traced word by word, and support for the school lab file.',
  twDesc: 'ICSE Class 10 Java for Bengaluru students, live online on weekday evenings, with a String program traced and lab file support.',
  headline: 'ICSE Computer Tuition in Bangalore: Two Evening Slots, Taught Live Online',
  courseName: 'ICSE Class 10 Computer Applications (Java with BlueJ) Tuition for Bengaluru Students, Live Online',
  courseDesc: 'Live online ICSE Class 10 Computer Applications tuition for students in Bengaluru preparing for the 2027 examination, taught in two weekday evening slots: String handling, arrays, user-defined methods, classes and constructors in BlueJ, Section B programs traced and marked against the scheme, support for school lab assignments, and timed mock papers, in a mini batch of up to six or one to one at a time the family sets.',
  brandTag: 'ICSE CA &middot; Bengaluru',
  navLinks: [['#blr-evenings', 'Evening slots'], ['#blr-choice', 'Tutor or online'], ['#blr-program', 'String program'], ['#blr-lab', 'Lab file'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'ICSE computer tuition, Bangalore']],
  eyebrow: 'Bengaluru &middot; ICSE Class 10 Computer Applications &middot; Weekday evenings, live online',
  h1: 'ICSE computer tuition in Bangalore, on two weekday evenings, live online.',
  lede: 'ICSE computer tuition in Bangalore does not have to mean another drive across the city after school. Our Class 10 Computer Applications classes run live online on Tuesday and Wednesday evenings, with at most six students and a teacher who watches every program run in BlueJ. We have no centre in Bengaluru and say so up front. What we do have is a fixed weekly rhythm, a clear plan for the 2027 paper, and help with the lab assignments your school sets.',
  heroNote: 'Live online from home &middot; no Bengaluru centre, no travel &middot; weekday evening slots &middot; six students at most &middot; first class free',
  waText: 'Hello Modern Age Coders. We live in Bengaluru and want ICSE Class 10 Java tuition in the evening.',
  timetable: {
    label: 'Evening slots for Bengaluru students',
    title: 'Bengaluru evenings',
    right: 'ICSE CA',
    rows: [
      ['Tuesday evening: concepts, Section A', '5:30', 'PM IST'],
      ['Wednesday night: one program, start to end', '8:00', 'PM IST'],
      ['Your own evening, any weekday', '1-on-1', 'you choose'],
      ['Drive to a centre', 'None', 'online']
    ],
    zones: '<b>In Bengaluru:</b> the times above are your local times. <b>Evenings already booked?</b> Personalised one to one goes on whichever evening is free.',
    stamps: ['Two evenings a week', 'ICSE 2027 syllabus']
  },
  picksH2: 'The ICSE course behind this tuition, and two next steps',
  picksLede: 'Everything on this page is taught inside one course. The other two are where a Bengaluru student who enjoys programming can go once the board exam is over.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The tuition / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications live: concepts on Tuesday, a full program on Wednesday, mock papers before the board exam.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Class 11 and 12 / ISC', h3: 'Computer Science Class 11 and 12', p: 'The natural next course for a student who takes Computer Science in ISC and wants Java to keep growing.' },
    { slug: 'python-complete-masterclass-teens', code: 'A second language / Python', h3: 'Python for Teens', p: 'For the gap after the board exam: a second language that many students meet next, learnt with the habits Java already built.' }
  ],
  capsule: 'Modern Age Coders teaches ICSE computer tuition to Bangalore students live online, in two weekday evening slots: Tuesday at 5:30 PM IST for concepts and Section A questions, and Wednesday at 8:00 PM IST for one complete Section B program. The mini batch takes at most six ICSE Class 10 students and follows the 2027 Computer Applications syllabus in Java with BlueJ, including String handling, arrays, methods and classes, plus support for school lab assignments and timed mock papers. There is no centre in Bengaluru. If neither evening is free, personalised one to one classes run at a time the family chooses.',
  sections: [
`<section class="bx-section bx-section--tint" id="blr-evenings">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. When are the classes?</p>
      <h2>When are the ICSE Class 10 Java classes for Bangalore students?</h2>
      <p class="bx-lede">Two fixed evenings: Tuesday at 5:30 PM IST and Wednesday at 8:00 PM IST, read straight off a Bengaluru clock. Each evening has a different job, so a student always knows what to bring.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Slot</th><th scope="col">What the class does</th><th scope="col">What the student has ready</th><th scope="col">What they leave with</th></tr></thead>
        <tbody>
          <tr><td>Tuesday, 5:30 PM</td><td>A concept taught with live examples, then a burst of Section A questions: outputs, errors, short definitions</td><td>Notebook, last week's worksheet</td><td>A short practice sheet on the same concept</td></tr>
          <tr><td>Wednesday, 8:00 PM</td><td>One Section B program planned, coded in BlueJ, run with test data and marked</td><td>BlueJ open, Tuesday's notes</td><td>A working program and its variable description</td></tr>
          <tr><td>One to one, any agreed evening</td><td>Whatever the student most needs that week: a weak topic, a school lab question to understand, a mock paper review</td><td>Agreed in advance with the teacher</td><td>A specific next step for the coming week</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">The earlier Tuesday class is light on typing on purpose: a student who has just walked in from school can think and answer aloud without setting up a long program. The Wednesday class sits later, after dinner, because writing a 15-mark program properly takes calm, uninterrupted time. A Bengaluru student with sports practice or another tuition on one of these evenings is better off in one to one than missing half the batch every week.</p>
    <p>Both slots are online, so a late finish at school does not mean a late start: there is no road between home and class. The structure of the course, unit by unit, is on <a class="bx-link" href="/icse-class-10-computer-applications-syllabus-explained">the ICSE Computer Applications syllabus explained</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="blr-choice">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Which kind of help suits my child?</p>
      <h2>Computer applications tutor in Bengaluru, a centre, or an online batch?</h2>
      <p class="bx-lede">Each works for a particular kind of student. Pick by what your child needs, not by what is nearest. Here is how we would advise a Bengaluru family, including when we are not the right answer.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>A home tutor makes sense if...</h3><p>your child needs an adult physically beside them to stay on task, or you want one person to cover several subjects in one visit. Ask whether the tutor runs every program on a computer or only checks it on paper.</p></div>
      <div class="bx-card"><h3>A coaching centre makes sense if...</h3><p>your child works better outside the house and the centre is close enough that the journey does not eat the evening. Ask how many students share one teacher in the computer class.</p></div>
      <div class="bx-card"><h3>Our online mini batch makes sense if...</h3><p>your child can follow a screen, benefits from hearing a few classmates reason through a program, and is roughly on pace with school. The two evenings fit around the rest of the week.</p></div>
      <div class="bx-card"><h3>Our one to one makes sense if...</h3><p>your child is behind, aiming for every last mark, or has evenings that change week to week. The teacher spends the whole class on your child's own code.</p></div>
      <div class="bx-card"><h3>We are the wrong choice if...</h3><p>your child is on the Karnataka SSLC or CBSE rather than ICSE, or you want face to face teaching. We teach only ICSE Computer Applications, and only online.</p></div>
      <div class="bx-card"><h3>Whatever you choose, check...</h3><p>that the student writes code every week, runs it, writes the variable description, and is helped with the school lab file without anyone writing it for them.</p></div>
    </div>
    <p class="bx-mt-40">How the small group compares with private classes in more detail is on <a class="bx-link" href="/icse-computer-applications-small-batch-classes">small batch ICSE Computer Applications classes</a> and <a class="bx-link" href="/icse-computer-applications-private-tutor">the ICSE Computer Applications private tutor page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="blr-program">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which program gets built on a Wednesday?</p>
      <h2>A String handling program from the Bengaluru batch, traced word by word</h2>
      <p class="bx-lede">String programs turn up in Section B almost every year, and they punish students who have only memorised one pattern. This one is original: it reads a sentence, rewrites every word with a capital first letter, finds the longest word and counts words that begin and end with the same letter.</p>
    </div>
    <p><b>The question.</b> Write a program to accept a sentence. Print it with the first letter of each word in capitals and the rest in small letters. Also print the longest word with its length, and the number of words whose first and last letters are the same, ignoring case. Words are separated by one or more spaces.</p>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>WordScan.java</b><span>charAt, substring, Character methods</span></figcaption>
  <pre>import java.util.Scanner;

class WordScan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String s = sc.nextLine().trim() + " ";
        String word = "", longest = "", title = "";
        int sameEnds = 0;
        for (int i = 0; i &lt; s.length(); i++) {
            char ch = s.charAt(i);
            if (ch != ' ') {
                word = word + ch;
            } else if (word.length() &gt; 0) {
                if (word.length() &gt; longest.length())
                    longest = word;
                char first = Character.toLowerCase(word.charAt(0));
                char last = Character.toLowerCase(
                                word.charAt(word.length() - 1));
                if (first == last)
                    sameEnds++;
                title = title + Character.toUpperCase(word.charAt(0))
                        + word.substring(1).toLowerCase() + " ";
                word = "";
            }
        }
        System.out.println(title.trim());
        System.out.println("Longest word: " + longest
                           + " (" + longest.length() + " letters)");
        System.out.println("Words that start and end with the same letter: "
                           + sameEnds);
    }
}</pre>
  <p class="bx-code-note">Compiled and run in Java 21 before publishing; outputs below are from those runs.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Three test runs</b><span>normal, mixed case, extra spaces</span></figcaption>
  <pre>Enter a sentence: every evening Anita reads aloud to her level headed sister
Every Evening Anita Reads Aloud To Her Level Headed Sister
Longest word: evening (7 letters)
Words that start and end with the same letter: 2

Enter a sentence: nOON is here
Noon Is Here
Longest word: nOON (4 letters)
Words that start and end with the same letter: 1

Enter a sentence:    two  spaces   between
Two Spaces Between
Longest word: between (7 letters)
Words that start and end with the same letter: 1</pre>
  <p class="bx-code-note">In run one, Anita and level qualify. In run two, the longest word keeps its original case because only the title copy is changed. In run three, the extra spaces never create empty words.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Trace of the second run, one word at a time</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Space reached after</th><th scope="col">word</th><th scope="col">first, last</th><th scope="col">sameEnds</th><th scope="col">longest</th><th scope="col">title so far</th></tr></thead>
        <tbody>
          <tr><td>index 4</td><td>nOON</td><td>n, n</td><td class="bx-num">1</td><td>nOON</td><td>Noon</td></tr>
          <tr><td>index 7</td><td>is</td><td>i, s</td><td class="bx-num">1</td><td>nOON</td><td>Noon Is</td></tr>
          <tr><td>index 12, the space added by the program</td><td>here</td><td>h, e</td><td class="bx-num">1</td><td>nOON (here is not longer)</td><td>Noon Is Here</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">The four ideas this program is really testing</h3>
    <ul class="bx-qlist">
      <li><b>The sentinel space.</b> Adding <code>" "</code> to the end means the last word is processed inside the loop. Forget it, and the last word is silently ignored: a classic lost mark.</li>
      <li><b>Strings do not change in place.</b> <code>word.substring(1).toLowerCase()</code> returns a new String; it has to be joined into <code>title</code> or it is lost.</li>
      <li><b>Comparing chars, not Strings.</b> <code>first == last</code> is correct because both are <code>char</code>. For two Strings, <code>==</code> would be wrong and <code>equals</code> would be needed.</li>
      <li><b>Strictly greater.</b> <code>&gt;</code> keeps the first of two equally long words. Using <code>&gt;=</code> would change the answer when there is a tie, and the question should be read for which one it wants.</li>
    </ul>
    <p class="bx-mt-40">More programs of this kind, from palindrome words to letter frequency, each run in Java, are on <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 String programs</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="blr-week">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How does a full week run?</p>
      <h2>A sample week in the String handling unit, for a Bengaluru ICSE student</h2>
      <p class="bx-lede">In many schools String handling is taught in the second half of Class 10, not long before the preboards, so the weeks are tight. This is how one such week is spread out so that no single evening carries too much.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Tuesday class, 5:30 PM IST</h4><p>The String methods the syllabus names, taught by predicting what each call returns: <code>charAt</code>, <code>indexOf</code>, <code>substring</code>, <code>compareTo</code>, <code>equalsIgnoreCase</code>, <code>replace</code> and the rest. Twelve short output questions follow, answered in writing first and then checked.</p></li>
      <li class="bx-step"><h4>Wednesday class, 8:00 PM IST</h4><p>The WordScan program above: the plan on paper, the code in BlueJ, three test runs including the awkward one, and the variable description. Marks are given against the scheme so the student sees exactly where the 15 go.</p></li>
      <li class="bx-step"><h4>Thursday, at home, 25 minutes</h4><p>A variation of the same program with one change: count vowels in each word instead of matching first and last letters. The student writes it alone and runs it.</p></li>
      <li class="bx-step"><h4>Weekend, at home, 40 minutes</h4><p>A worksheet mixing String outputs with two error-finding questions. Anything left unsolved is the first thing raised on Tuesday.</p></li>
      <li class="bx-step"><h4>School lab period, whenever it falls</h4><p>The school's own assignments carry on as the teacher sets them. If one of them uses Strings, the student now has the method and the test habit to do it independently.</p></li>
    </ol>
    <p class="bx-mt-40">Output questions on String methods, sorted by trap, are on <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Java output questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="blr-lab">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is the lab file supported?</p>
      <h2>School lab assignments and the internal assessment: what we do and what we leave to the school</h2>
      <p class="bx-lede">The internal assessment is the school's process from start to finish. We make the student ready for it: able to write, document, run and defend each program they submit.</p>
    </div>
    <p>CISCE weighs the internal assessment equally with the written paper, 100 marks each. It is awarded on a minimum of twenty laboratory assignments across the year, half the marks by the subject teacher and half by an external examiner. Ten of every fifty go to the variable description, and another ten to coding and documentation, so a program that runs but is not explained can still lose a fifth of its marks.</p>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Marking head (out of 50)</th><th scope="col">What the school does</th><th scope="col">What we add in class</th></tr></thead>
        <tbody>
          <tr><td>Class design, 10</td><td>Sets the assignment question</td><td>The student explains the plan aloud before coding; the teacher asks why each method exists</td></tr>
          <tr><td>Variable description, 10</td><td>States the format it wants</td><td>Every Wednesday program ends with a description table, so writing one becomes routine</td></tr>
          <tr><td>Coding and documentation, 10</td><td>Checks the file</td><td>Comments, indentation and meaningful names are pointed out live, while the code is on screen</td></tr>
          <tr><td>Execution or output, 20</td><td>Sees the program run</td><td>Test runs include awkward input, like the extra-spaces case above, so nothing surprises the student</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Two lines we do not cross. We never write an assignment for a student to submit, and we never change the school's question or format to suit our teaching. What we will do is take a school question the student finds hard, teach the idea behind it with a different example, and then watch the student solve the real one themselves. The complete internal assessment scheme is on <a class="bx-link" href="/icse-class-10-computer-applications-project-and-internal-assessment">the ICSE project and internal assessment page</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Pick the evening batch or a one to one slot in Bengaluru',
  chooseLede: 'The syllabus, teachers and weekly program are identical either way. What changes is who sets the time and how many other students are in the room. Billing is monthly and there is no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM for concepts, Wednesday 8:00 PM for programs',
    'Six students at most, all ICSE Class 10',
    'A Section B program completed every Wednesday',
    'Programs run live in BlueJ, then marked',
    'Timed mock papers before the board exam'
  ],
  choosePersonal: [
    'Any evening the family chooses',
    'Built around your child\'s weakest program families',
    'Help to understand school lab questions',
    'Pace raised or slowed week by week',
    'Same course content and the same checks'
  ],
  chooseAfter: 'For a Bengaluru student keeping up with school, the mini batch is usually enough and the group helps. One to one is worth it when evenings are unpredictable, when there is a lot to catch up on, or when the target is a near-perfect score and every program needs a private review. Fees show in your own currency.',
  zonesLabel: 'Relocating from Bengaluru?',
  zonesH2: 'If your child moves to an ICSE school outside India',
  zonesLede: 'A job move can take a Bengaluru family overseas in the middle of the ICSE years, with the student joining a CISCE school in the new country. Tuition does not have to stop. Outside India the course runs one to one, at an after-school time in the new country.',
  zonesAfter: 'Same teacher, same place in the syllabus, new time zone. For families already abroad, see <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Bengaluru questions',
  faqH2: 'What Bengaluru parents ask about ICSE Java tuition',
  faqs: [
    ['Is there a Modern Age Coders centre in Bangalore?', 'No. We have no centre in Bengaluru and no home tutors there. All ICSE Computer Applications classes are live online: the teacher and up to six students meet on screen, and every program is written and run in BlueJ while the teacher watches. If you need in-person teaching, a local tutor is the better fit.'],
    ['What time are the ICSE computer classes in Bangalore?', 'Class runs twice a week: Tuesdays from 5:30 PM IST and Wednesdays from 8:00 PM IST, and those are simply Bengaluru times. Tuesday covers concepts and Section A questions; Wednesday is for one full Section B program. If neither evening is free, one to one classes run at a time you choose.'],
    ['Which is better for ICSE Class 10 Java, a home tutor or online classes?', 'It depends on the child. A home tutor helps a student who needs someone physically present. Online works well for Java because the subject is done on a screen: the teacher sees the code as it is typed and run. Whichever you choose, make sure programs are actually run, not only checked on paper.'],
    ['Do you teach the Karnataka SSLC computer syllabus?', 'No. We teach only the CISCE ICSE Class 10 Computer Applications syllabus, in Java with BlueJ, for the 2027 examination. Students on the Karnataka state board or CBSE follow different syllabi and would not fit this class.'],
    ['How do you help with ICSE computer lab assignments?', 'Your school decides the questions, the deadlines and the internal marks. Our job is to teach the ideas behind each question, have the student talk through their class design and write a proper variable description, and run each program with awkward test cases. We never write assignments for students to hand in.'],
    ['How many String programs should a student practise for ICSE?', 'Enough to cover the main families rather than a fixed number: word extraction, counting characters, changing case, palindromes, reversing words and comparing Strings. Each new program should be written without looking at an old one, then run with tricky input such as extra spaces or capitals.'],
    ['What does ICSE computer tuition cost in Bengaluru?', 'Both monthly fees, batch and one to one, are printed on this page in your currency. You pay month by month with no admission charge, and the first class costs nothing. When comparing with a local tutor, compare what each hour contains: code written, code run, code marked.'],
    ['Is the batch only for Class 10?', 'The mini batch on this page is for ICSE Class 10 students preparing for the 2027 paper. The course also covers Class 9, and a Class 9 student can start with personalised one to one classes. Ask in the demo which route fits.'],
    ['Can my child join after the preboards?', 'Yes. A student joining late gets a quick diagnostic, then a plan that goes straight to the highest-value work: Section B program families, timed papers and the Section A traps they keep falling into. A winter start is workable if the student commits to the weekly papers.'],
    ['What is the free demo like?', 'Your child writes a short Java program live, with a teacher watching and asking questions. You then hear honestly where they stand, what to fix first, and whether the evening batch or a one to one slot would serve them better.']
  ],
  startH2: 'Book a free evening ICSE Java class from Bengaluru',
  startHtml: `        <p>The demo is a working class: your child writes and runs a short program in BlueJ while the teacher watches, and gets told what is strong and what needs work. You leave knowing whether the Tuesday and Wednesday evenings suit, or whether a private slot would fit your week better.</p>
        <p>Not ready to book? Read <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a> first.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Bengaluru, taught online'
};
