// CBSE Class 10 AI (417): crash course page for 2026-27.
// Intent: "class 10 AI crash course", "AI 417 revision batch", "last month AI class
// 10 classes", "AI class 10 fast track". Angle from series.json: a time-boxed live
// revision plan with the mock-test schedule printed on the page. The page is
// honest that there is no separate crash batch: a late joiner enters the Monday
// and Wednesday batch in its revision and mock phase, or takes one to one, and the
// six-week plan below is what those sessions cover. It counts back from exam day:
// CBSE date sheet released 6 Nov 2026 puts AI 417 on Wed 24 Feb 2027 (2026: 27 Feb).
// python3: Mon 11 Jan 2027 is 44 days before; week 1 = week of Mon 15 Feb (9 days).
// Distinct from cb18 (self-study 30, 7 and 1 day plans), cb13 (a 90-minute one shot
// read), cb12 (tuition routes), cb24 (one to one plan) and cb11 (doubts).
// Mock marks follow the 2025-26 sample paper: Section A objective 24 (Part A any 4
// of 6, Part B any 20 of 24), Section B written 26 (Part A any 3 of 5 x 2 = 6, Part B
// any 4 of 6 x 2 = 8, any 3 of 5 x 4 = 12); 24 + 26 = 50, rechecked with python3.
// TFIDF example recomputed with python3 on 2026-11-06 (scratch
// writers/cbse-class-10-ai-tuition/checks.py): docs "AI helps doctors", "AI helps
// farmers", "farmers grow food"; vectors [1,1,1,0,0,0], [1,1,0,1,0,0], [0,0,0,1,1,1];
// IDF log10(3/2) = 0.176 for ai, helps, farmers; log10(3/1) = 0.477 for doctors,
// grow, food. No class length stated as a fact; no prices typed.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-crash-course',
  code: 'cb17',
  board: 'cbse',
  themeColor: '#334E7A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Crash Course 2026-27 (417): 6-Week Live Plan',
  description: 'Class 10 AI crash course for CBSE 417: a six-week live revision plan, session by session, with the mock test schedule printed and what a late start can fix.',
  ogTitle: 'Class 10 AI Crash Course: Six Weeks, Twelve Sessions, Five Mocks',
  ogDesc: 'A time-boxed live revision plan for CBSE Class 10 AI (417), counted back from exam day: twelve sessions, the mock test schedule with marks, a sample Unit 6 crash session, and an honest note on what six weeks can and cannot fix.',
  twDesc: 'Six weeks to the AI 417 paper: the session plan, the mock schedule with marks, and a sample crash session on NLP.',
  headline: 'Class 10 AI Crash Course for 2026-27: A Six-Week Live Plan with the Mock Schedule',
  courseName: 'CBSE Class 10 AI (417) Crash Revision, Live Online',
  courseDesc: 'A time-boxed live revision plan for CBSE Class 10 Artificial Intelligence (417), session 2026-27: every theory unit revised by marks, the practical file and viva brought up to standard, and a printed schedule of timed mocks, each reviewed in class, in the Monday and Wednesday 9:00 PM IST batch during its revision phase or one to one at times the family chooses.',
  brandTag: '417 &middot; crash course',
  navLinks: [['#reality', 'What six weeks fixes'], ['#six-weeks', 'Session plan'], ['#mock-schedule', 'Mock schedule'], ['#crash-session', 'Sample session']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Crash course']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Crash revision 2026-27',
  h1: 'A class 10 AI crash course with a fixed end date, a fixed plan and five mocks.',
  lede: 'A class 10 AI crash course only works if every session has a job and the mocks are on the calendar before the first class. This one is six weeks of live revision counted back from the day of the 417 paper: twelve sessions, five timed mocks, and the practical file and viva brought up to standard alongside. It runs inside our Monday and Wednesday batch in its revision phase, or one to one.',
  heroNote: 'Live online &middot; six weeks, twelve sessions &middot; five mocks on a printed schedule &middot; every mock reviewed in class &middot; file and viva included &middot; first class free',
  waText: 'Hello Modern Age Coders. I want the crash course for CBSE Class 10 AI 417.',
  timetable: {
    label: 'The crash course at a glance',
    title: 'Crash course',
    right: 'CBSE 417',
    rows: [
      ['Monday session', '9:00', 'PM IST'],
      ['Wednesday session', '9:00', 'PM IST'],
      ['Weeks before the paper', '6', 'weeks'],
      ['Timed mocks on the schedule', '5', 'mocks']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and East Africa:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Counted back from exam day', 'Mocks reviewed live']
  },
  picksH2: 'Courses behind the crash plan',
  picksLede: 'The 417 course whose revision phase the crash plan follows, plus the two companions that rescue a thin practical file fastest.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'Crash / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The board course: in its final weeks the batch moves from teaching to timed papers, reviews and viva practice, which is where a crash student joins.' },
    { slug: 'python-complete-masterclass-teens', code: 'File rescue / Python', h3: 'Python for Teens', p: 'For a practical file that is still short of programs: lists, NumPy and charts, written fast but understood.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Practical / Orange', h3: 'Visual ML with Orange', p: 'The no-code tool the practical units use, so a vision or text task in the practical exam is not a first look.' }
  ],
  capsule: 'A class 10 AI crash course is a short, time-boxed live revision of CBSE 417 before the board exam. A workable plan is six weeks: twelve sessions that revise every theory unit in order of marks (Unit 2 carries 11, Unit 3 10, Unit 6 8, Unit 1 7, Unit 5 4, Part A 10), bring the practical file and viva up to standard, and run five timed mocks, each reviewed. Modern Age Coders runs this inside its Monday and Wednesday 9:00 PM IST batch during the revision phase, or as personalised one to one at the family\'s own time.',
  sections: [
`<section class="bx-section bx-section--tint" id="reality">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Is six weeks enough?</p>
      <h2>Is a class 10 AI crash course enough to score well in 417?</h2>
      <p class="bx-lede">For the theory paper, usually yes: 50 marks over five units and Part A can be revised in six weeks if the student has met the topics at school. The practical half is where a late start hurts, because a file, a project and two vivas cannot all be built in a fortnight. Here is what fits and what does not.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part of the 100 marks</th><th scope="col">Marks</th><th scope="col">Can six weeks fix it?</th><th scope="col">What the crash plan does</th></tr></thead>
        <tbody>
          <tr><td>Section A, objective items</td><td class="bx-num">24</td><td>Yes</td><td>Timed sets by unit, then mixed; traps named</td></tr>
          <tr><td>Section B, written answers</td><td class="bx-num">26</td><td>Yes, with marking</td><td>Answer shapes for 2 and 4 marks, rewritten after marking</td></tr>
          <tr><td>Practical file, at least 15 programs</td><td class="bx-num">15</td><td>Partly: depends on how many exist now</td><td>Three or four programs a week, each understood</td></tr>
          <tr><td>Practical examination</td><td class="bx-num">15</td><td>Yes, if school's date is not too close</td><td>Two practical mocks on unseen tasks</td></tr>
          <tr><td>Viva on the practical</td><td class="bx-num">5</td><td>Yes</td><td>Questions on the student's own programs</td></tr>
          <tr><td>Project</td><td class="bx-num">10</td><td>Only a small one, started at once</td><td>A tight scope chosen in week 1</td></tr>
          <tr><td>Project viva</td><td class="bx-num">5</td><td>Yes, once the project exists</td><td>A rehearsal in week 2 before the paper</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Dates first.</b> The CBSE date sheet released 6 November 2026 puts the AI 417 paper on Wednesday 24 February 2027, 10:30 AM to 12:30 PM IST (in 2026 it was on 27 February). Your school sets the practical examination date, which can come weeks before the theory paper. Count your six weeks back from whichever comes first, and if the practical is very close, the plan swaps its order so the file and viva come first.</p>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="six-weeks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What does each session cover?</p>
      <h2>The six-week AI 417 revision batch plan, session by session</h2>
      <p class="bx-lede">Twelve live sessions, two a week, ordered by marks and difficulty: the heavy units first, Part A in short blocks, mocks from week 3. Counted back from Wednesday 24 February 2027, week 6 is the week of Monday 11 January and week 1 the week of Monday 15 February, leaving 18 to 23 February for the error list and light revision.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Weeks to go</th><th scope="col">Monday session</th><th scope="col">Wednesday session</th><th scope="col">Work between sessions</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">6</td><td>Diagnostic mock (Section A) then Unit 2: model types, perceptron sums</td><td>Unit 3: confusion matrix, precision, recall, F1, which metric when</td><td>Project topic fixed; count the file programs that exist</td></tr>
          <tr><td class="bx-num">5</td><td>Unit 6: normalisation, bag of words, TFIDF; script and smart bots</td><td>Section B drill on Units 2, 3 and 6, marked on screen</td><td>Three file programs: lists and NumPy statistics</td></tr>
          <tr><td class="bx-num">4</td><td>Unit 1: project cycle, 4Ws canvas, ethical frameworks, case questions</td><td>Practical mock 1: unseen program on Units 4 and 7, short viva</td><td>Three file programs: charts and a CSV</td></tr>
          <tr><td class="bx-num">3</td><td>Unit 5: pixels, RGB counts, CV tasks; Part A units 1 to 3</td><td>Full mock 1: 50 marks, two hours, timed</td><td>Rewrite every lost answer; project data gathered</td></tr>
          <tr><td class="bx-num">2</td><td>Review of mock 1 as a doubt session; Part A units 4 and 5</td><td>Full mock 2, then practical mock 2 with project viva rehearsal</td><td>File complete and read aloud once</td></tr>
          <tr><td class="bx-num">1</td><td>Review of mock 2; the error list, unit by unit</td><td>Final mock: a half paper on the weakest two units, then exam-room routine</td><td>Light revision only; sleep before the paper</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Why heavy units first</h3><p>Units 2 and 3 together carry 21 theory marks and need practice, not reading. Starting there leaves time for two rounds of mistakes.</p></div>
      <div class="bx-card"><h3>Why Part A in blocks</h3><p>Ten marks across five units, each quick to learn. Spread through weeks 3 and 2, they never crowd out the numericals.</p></div>
      <div class="bx-card"><h3>Why an error list</h3><p>Every lost mark from the mocks goes on one sheet. The last week revises that sheet, not the whole book.</p></div>
    </div>
    <p class="bx-mt-40">Revising alone, without a class? Use the self-study timetables on <a class="bx-link" href="/cbse-class-10-ai-revision-plan">the Class 10 AI revision plan</a>, or the single long sitting on <a class="bx-link" href="/cbse-class-10-ai-one-shot-revision">the 417 one shot revision</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="mock-schedule">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. When are the tests?</p>
      <h2>The crash course mock test schedule, with marks and timing</h2>
      <p class="bx-lede">Five timed mocks over six weeks: a diagnostic, two full papers, a final half paper and two practical mocks counted as one series. Full mocks follow the 2025-26 sample paper layout, because the 2026-27 sample paper for 417 has not been released.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-marks">
        <thead><tr><th scope="col">Mock</th><th scope="col">Weeks to go</th><th scope="col">What it covers</th><th scope="col">Marks</th><th scope="col">Timed</th></tr></thead>
        <tbody>
          <tr><td>1. Diagnostic</td><td class="bx-num">6</td><td>Section A: Part A any 4 of 6, AI units any 20 of 24</td><td class="bx-num">24</td><td>Yes, objective only</td></tr>
          <tr><td>2. Practical mocks</td><td class="bx-num">4 and 2</td><td>Unseen program on Units 4 to 7, viva on own file; project viva in week 2</td><td class="bx-num">Practical</td><td>Yes</td></tr>
          <tr><td>3. Full mock 1</td><td class="bx-num">3</td><td>Whole theory paper: Section A 24, Section B 26</td><td class="bx-num">50</td><td>Two hours</td></tr>
          <tr><td>4. Full mock 2</td><td class="bx-num">2</td><td>Whole theory paper, new questions, same layout</td><td class="bx-num">50</td><td>Two hours</td></tr>
          <tr><td>5. Final half paper</td><td class="bx-num">1</td><td>The two weakest units from mocks 3 and 4</td><td class="bx-num">Set per student</td><td>Yes</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Inside Section B, as the 2025-26 sample paper set it</h3>
        <table class="bx-marks">
          <thead><tr><th scope="col">Block</th><th scope="col">Choice</th><th scope="col">Marks</th></tr></thead>
          <tbody>
            <tr><td>Part A short answers, 2 marks</td><td>any 3 of 5</td><td class="bx-num">6</td></tr>
            <tr><td>Part B short answers, 2 marks</td><td>any 4 of 6</td><td class="bx-num">8</td></tr>
            <tr><td>Part B long answers, 4 marks</td><td>any 3 of 5</td><td class="bx-num">12</td></tr>
            <tr class="bx-total"><td>Section B total</td><td></td><td class="bx-num">26</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>How each mock is reviewed</h3>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Marked against the scheme</h4><p>Point by point, the way CBSE marking schemes award marks, so students see which line earned what.</p></li>
          <li class="bx-step"><h4>Lost marks sorted</h4><p>Into "did not know", "knew but slipped" and "ran out of time". Each needs a different fix.</p></li>
          <li class="bx-step"><h4>Re-attempted</h4><p>Every lost written answer is rewritten before the next session, and goes on the error list.</p></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The wider set of papers used across the full year is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>, and the way each answer is marked is explained on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the 417 marking scheme</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="crash-session">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What is a crash session like?</p>
      <h2>One crash session in full: Unit 6 NLP in a single sitting</h2>
      <p class="bx-lede">Unit 6, Natural Language Processing, carries 8 theory marks and one calculation that comes up again and again: bag of words, then TFIDF. Here is how the Monday of week 5 covers it, in the order the class runs.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Recall check</h4><p>Five quick questions: what is a token, a stopword, a corpus; stemming against lemmatisation; one script bot and one smart bot.</p></li>
          <li class="bx-step"><h4>Normalise three documents</h4><p>Lower case, split into tokens, no stopwords needed here because the sentences are short.</p></li>
          <li class="bx-step"><h4>Build the dictionary and vectors</h4><p>Six unique words; one row of counts per document.</p></li>
          <li class="bx-step"><h4>Document frequency, then IDF</h4><p>Count how many documents contain each word; IDF = log(N / document frequency), with N = 3.</p></li>
          <li class="bx-step"><h4>Read the result aloud</h4><p>Which word best identifies document 1? The student must say why, not just point.</p></li>
          <li class="bx-step"><h4>Exam turn</h4><p>One four-mark question on the same method with new sentences, timed and marked before the session ends.</p></li>
        </ol>
      </div>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Worked in the session</b><span>log to base 10</span></figcaption>
  <pre>D1: AI helps doctors
D2: AI helps farmers
D3: farmers grow food

         ai helps doctors farmers grow food
D1        1   1     1       0      0    0
D2        1   1     0       1      0    0
D3        0   0     0       1      1    1

Doc freq  2   2     1       2      1    1
IDF     0.176 0.176 0.477 0.176 0.477 0.477

TFIDF for D1:
ai 0.176, helps 0.176, doctors 0.477</pre>
  <p class="bx-code-note">log(3/2) = 0.176 and log(3/1) = 0.477. "doctors" scores highest in D1 because no other document uses it.</p>
</figure>
      </div>
    </div>
    <p class="bx-mt-40">The point the examiner rewards: a word found in fewer documents gets a higher IDF, so it says more about the document it is in. More worked sets are on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">bag of words and TFIDF for Class 10 AI</a>, and the rest of the unit on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">NLP questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="joining-late">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do I join this late?</p>
      <h2>AI class 10 fast track: joining in the last months, batch or one to one</h2>
      <p class="bx-lede">There is no separate crash batch. A student who starts late joins the Monday and Wednesday batch, which by then is in its revision and mock phase, or takes one to one so the six-week plan can start on the day they join. Which suits depends on when you start.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Starting</th><th scope="col">What usually works</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td>November or early December</td><td>The batch, plus a few one to one sessions for any unit school has not yet covered</td><td>There is time for the batch's own revision and full mock series</td></tr>
          <tr><td>Mid December to early January</td><td>The six-week plan above, one to one or batch plus one to one</td><td>The batch is already mid-mock; a private plan can start at week 6</td></tr>
          <tr><td>Less than four weeks before the paper</td><td>One to one, compressed: heavy units, two full mocks, file and viva</td><td>Every session must go on the student's own gaps</td></tr>
          <tr><td>Studying from abroad</td><td>One to one at a local hour, two private classes a week</td><td>Matches the plan's twelve-session rhythm in a home time zone</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">In India the one to one plan is one private class a week; for a twelve-session crash, families usually pair it with the batch or ask the mentor at the free demo how to fit the plan to the weeks left. If the gap is mostly one unit, a short private plan from <a class="bx-link" href="/cbse-class-10-ai-private-tutor">a Class 10 AI private tutor</a> is the faster fix. Students revising on their own can work through <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a> alongside.</p>
  </div>
</section>`
  ],
  chooseH2: 'Crash revision in the evening batch, or one to one from the day you join',
  chooseLede: 'Late in the year the batch is already running papers and reviews, which suits a student who has covered the units at school. One to one starts the six-week plan on day one and spends it on your child\'s gaps. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST',
    'Revision phase: timed papers and live reviews',
    'Practical mocks and viva rehearsal in the lab',
    'Fifteen to twenty students under exam conditions',
    'Suits a student who has met every unit at school'
  ],
  choosePersonal: [
    'The six-week plan starts on the day you join',
    'Order changed if the practical comes first',
    'Every review on your child\'s own lost marks',
    'One private class a week in India, two abroad',
    'Same teachers and mock papers as the batch'
  ],
  chooseAfter: 'A quick way to choose: if the diagnostic mock in the free first class shows gaps in most units, start one to one; if it shows a solid base with a few weak spots, the batch\'s revision phase is enough. Fees appear in your own currency.',
  zonesH2: 'Class 10 AI crash course for CBSE students in the Gulf and abroad',
  zonesLede: 'CBSE schools abroad work to the same CBSE date sheet as schools in India, so the six-week countdown starts on the same day. Here is the batch hour in local time.',
  zonesAfter: 'For a crash plan at a local hour, one to one runs two private classes a week outside India. More is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the Class 10 AI crash course',
  faqH2: 'What students ask about a class 10 AI crash course',
  faqs: [
    ['Is there a crash course for class 10 AI 417?', 'Yes, as a six-week live revision plan. It runs inside our Monday and Wednesday 9:00 PM IST batch during its revision and mock phase, or as one to one starting the day you join. It revises every theory unit by marks, runs five timed mocks and brings the practical file and viva up to standard.'],
    ['Can I prepare class 10 AI in one month?', 'For the theory paper, yes, if you have met the units at school: revise Units 2 and 3 first, then 6, 1 and 5, with Part A in short blocks, and sit at least two full timed mocks. The practical is harder in a month if the file is far from 15 programs, so start that on day one.'],
    ['What should I study in the last month for AI class 10?', 'Practise rather than read. Numericals in Units 3 and 6 (confusion matrix, bag of words, TFIDF), four-mark answer shapes, Part A short answers, and two full timed mocks with every lost mark rewritten. Keep the last two days for the error list and your file programs.'],
    ['How many mock tests should I take before the AI board exam?', 'Two full timed papers is the useful minimum, with a review after each. This plan adds a Section A diagnostic, a final half paper on weak units and two practical mocks. More papers without reviews add little; the review is where the marks come from.'],
    ['Is a crash course enough to score 90 in AI 417?', 'It can be, for a student who already understands most units and needs practice, marking and timing. It is not enough for someone meeting the topics for the first time, or whose file and project are not started. We do not promise a score; the diagnostic in the first class gives an honest view.'],
    ['When does the AI 417 revision batch start?', 'The batch moves into revision and full mocks from December. A crash student can join at any point; one to one starts the six-week plan on the day you join, counted back from your exam or practical date.'],
    ['What if my practical exam is before the crash course ends?', 'The plan is reordered: file programs, the practical mock and both viva rehearsals come first, and theory revision follows. Your school sets the practical date, so tell the mentor at the free demo.'],
    ['Is the AI class 10 fast track only for weak students?', 'No. Many students taking it have done well in school tests but have never sat a full two-hour 417 paper or rehearsed a viva. The mocks and reviews are what they need most.'],
    ['Do I get the mock papers and marking?', 'Yes. Every mock is set in the paper\'s format, marked against the scheme and reviewed in class, and each lost written answer is rewritten. All of it is part of the monthly fee shown on this page.'],
    ['When is the CBSE Class 10 AI exam in 2027?', 'On Wednesday 24 February 2027, from 10:30 AM to 12:30 PM IST, according to the CBSE date sheet released 6 November 2026. In 2026, the AI 417 paper was held on 27 February. Counted back from 24 February, the six-week plan starts in the week of 11 January 2027, or earlier if your school\'s practical date comes first.']
  ],
  startH2: 'Start with a free diagnostic class',
  startHtml: `        <p>The free first class works as week 6, session 1 in small: a short timed objective set, one written answer marked point by point, and a look at how many file programs exist. The mentor then tells you plainly whether the batch's revision phase or a one to one crash plan fits the weeks you have left.</p>
        <p>Want the paper layout first? See <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the 417 exam date and paper pattern</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI crash course'
};
