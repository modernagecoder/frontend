// CBSE Class 10 AI (417): passing marks, what the rule says, and what happens on a fail.
// Intent: "class 10 AI passing marks", "AI theory passing marks out of 50",
// "417 practical passing marks", "minimum marks skill subject", "what if I fail AI class 10".
// Distinct from cxd (exam date and blueprint), cb25 (marking scheme) and cb31 (second
// exam): this page is the pass line itself, the two readings of CBSE's wording, the
// sixth-subject replacement rule and the routes after a fail.
// Sources read on 2026-11-06, all official:
// - CBSE Secondary Curriculum 2025-26, initial pages (cbseacademic.nic.in): AI 417 listed
//   as optional subject 6 (Group S); "fails in any one of Science, Mathematics, Social
//   Science and passes in the Skill subject offered as sixth optional subject, then that
//   subject will be replaced"; 417 cannot be combined with 165 or 402; the 33 percent
//   condition in each component "has been relaxed vide Notification dated 11/10/2018".
// - CBSE Secondary Curriculum 2026-27, Part 1 (cbseacademic.nic.in): AI listed 50 theory,
//   2 hours, 50 internal; sentence on success in a subject reads "a minimum of 33% marks
//   separately in external and internal assessments, calculated on the combined total".
//   The page quotes neither verbatim at length; it says the wording is not clarified for
//   50:50 skill subjects (design doc lists the separate-vs-combined rule as unconfirmed).
// - CBSE notification No.31/CBSE/CE/2-Board Examination-X/2026 of 14.02.2026, and the
//   LOC circular for the Class X second examination of 17.03.2026: improvement in up to
//   three of Science, Mathematics, Social Science and languages; compartment category;
//   "passed Class X by replacing with the 6th subject"; no improvement of internal
//   assessment.
// - Second board exam date sheet of 23.04.2026: 417 on Wednesday 20 May 2026, 10:30 AM
//   to 12:30 PM. CBSE also posted a 417 marking scheme for that sitting.
// - Post-result facilities notice of 05.08.2026: main result 15.04.2026, second result
//   18.07.2026; scanned copy, verification, re-evaluation.
// - 2027 date sheet of 06.11.2026: 417 on Wednesday 24 February 2027, 10:30 AM to
//   12:30 PM; Class X main exams 16 February to 9 March 2027.
// Numbers recomputed with python3 on 2026-11-06 (scratch calc/pm.py): 33% of 100 = 33,
// of 50 = 16.5; scenario totals 12 + 40 = 52, 20 + 13 = 33, 17 + 17 = 34, 16 + 16 = 32,
// 10 + 22 = 32, with the pass or fail under each reading as tabled.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-passing-marks',
  code: 'cb30',
  board: 'cbse',
  themeColor: '#24485E',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Passing Marks (417): The CBSE Rule Explained',
  description: 'Class 10 AI passing marks for CBSE 417: 33 of 100, what the theory and practical split means, the sixth-subject rule, and what happens if a student fails AI.',
  ogTitle: 'Class 10 AI Passing Marks: What CBSE Actually Says',
  ogDesc: 'The pass mark for CBSE Class 10 Artificial Intelligence (417), the two ways CBSE\'s wording on theory and practical can be read, how AI replaces a failed main subject, and the routes after a fail, from CBSE\'s own documents.',
  twDesc: 'The 417 pass line from CBSE\'s own documents: 33 of 100, the theory and practical question, the sixth-subject rule and the routes after a fail.',
  headline: 'Class 10 AI Passing Marks: The 33 Percent Rule, the Theory and Practical Split, and What a Fail Means',
  courseName: 'CBSE Class 10 AI (417) Board Preparation, Live Online',
  courseDesc: 'Live online preparation for CBSE Class 10 Artificial Intelligence (417), session 2026-27, built to put every student well clear of the pass line: the practical file, project and both vivas finished on a schedule, the theory paper practised in its own question shapes, and timed mock papers marked against the CBSE value points, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Passing marks',
  navLinks: [['#pass-rule', 'Pass mark'], ['#split', 'Theory and practical'], ['#if-fail', 'If you fail'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Passing marks']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Passing marks for the 2027 exam',
  h1: 'Class 10 AI passing marks: 33 out of 100, and the questions behind that number.',
  lede: 'The class 10 AI passing marks are 33 out of 100 for CBSE code 417, a third of a subject split into 50 theory marks and 50 practical marks. Most of the confusion is about whether each half must be passed on its own, and about what a fail in a sixth subject does to the result. This page answers both from CBSE\'s own documents, says plainly where CBSE has left a gap, and shows how our live batch keeps a student far above the line.',
  heroNote: 'Live online &middot; read from CBSE\'s own circulars &middot; practical half finished on schedule &middot; theory drilled in the paper\'s shapes &middot; timed mocks &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help for my child to pass CBSE Class 10 AI 417 comfortably.',
  timetable: {
    label: 'The pass line, and the live classes',
    title: 'Pass line',
    right: 'CBSE 417',
    rows: [
      ['Pass mark for the subject', '33', 'of 100'],
      ['Theory paper, 24 Feb 2027', '50', 'marks'],
      ['Monday, theory class', '9:00', 'PM IST'],
      ['Wednesday, practical class', '9:00', 'PM IST']
    ],
    zones: '<b>Dubai and Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City, Manama:</b> 6:30 PM. <b>Kathmandu:</b> 9:15 PM. <b>Singapore and Kuala Lumpur:</b> one to one at a local hour.',
    stamps: ['33 of 100', 'Sixth subject']
  },
  picksH2: 'Courses that keep a student clear of the pass line',
  picksLede: 'The 417 course whose Class 10 batch runs the theory and practical classes, the Python course behind the school-assessed half, and the maths board course for the main subject that AI so often protects.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Every theory unit taught and tested in the paper\'s shapes, with the practical file, project and vivas closed well before the school assessment.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical half / Python', h3: 'Python for Teens', p: 'The NumPy, pandas and Matplotlib programs that fill the practical file and come up in the practical exam and viva.' },
    { slug: 'cbse-class-10-maths-board-exam-prep-course', code: 'Main subject / maths', h3: 'CBSE Class 10 Maths board prep', p: 'Live maths board preparation, for families who want the main subject safe on its own rather than relying on AI to stand in for it.' }
  ],
  capsule: 'The passing marks for CBSE Class 10 Artificial Intelligence (417) are 33 out of 100: 33 percent of a subject split into a 50-mark theory paper and 50 marks of school practical. CBSE says its old rule of passing each component separately was relaxed in 2018, but its 2026-27 wording mentions both "separately" and "combined total" and has not been clarified for AI, so aim for at least 17 in each half. AI is the optional sixth subject: passed, it can replace one failed subject out of Science, Mathematics and Social Science. Modern Age Coders teaches it live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="pass-rule">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is the pass mark?</p>
      <h2>What are the passing marks for class 10 AI?</h2>
      <p class="bx-lede">A student needs 33 percent of the subject total to pass CBSE Class 10 Artificial Intelligence, which is 33 marks out of 100. That figure is not special to AI: it is the same 33 percent line CBSE applies to every Class 10 subject.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part of the 417 subject</th><th scope="col">Maximum</th><th scope="col">33 percent of it</th><th scope="col">Who marks it</th></tr></thead>
        <tbody>
          <tr><td>Theory paper, two hours (Part A employability skills 10, AI units 40)</td><td class="bx-num">50</td><td class="bx-num">16.5</td><td>CBSE examiners, from the board answer book</td></tr>
          <tr><td>Practical: file 15, practical exam 15, viva 5, project 10, project viva 5</td><td class="bx-num">50</td><td class="bx-num">16.5</td><td>Your school, with an examiner, inside the CBSE window</td></tr>
          <tr><td>Whole subject</td><td class="bx-num">100</td><td class="bx-num">33</td><td>Added together on the marksheet</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Read on 6 November 2026:</b> CBSE's Secondary Curriculum for 2025-26 and for 2026-27 (cbseacademic.nic.in), the two-examination notification of 14 February 2026, the circular on the second examination of 17 March 2026, the post-result notice of 5 August 2026 and the 2027 date sheet issued on 6 November 2026 (cbse.gov.in). What follows reports those documents in plain words.</p>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the 2025-26 curriculum says</h3>
        <p>It sets the general rule as 33 percent in each component of a subject, then adds that this condition was relaxed by a CBSE notification of 11 October 2018. News coverage of that 2018 decision reported the relaxation as theory and internal marks being added together for the pass. Since then, families and schools have read the Class 10 pass line as 33 percent of the combined subject total.</p>
      </div>
      <div>
        <h3>What the 2026-27 curriculum says</h3>
        <p>The newer document, written for the revised scheme that begins with Class IX in 2026-27, describes success in a subject as a minimum of 33 percent "separately in external and internal assessments, calculated on the combined total". That one sentence uses both ideas. CBSE has not published a note explaining how it applies to a skill subject like AI, where the split is 50 and 50 rather than 80 and 20.</p>
      </div>
    </div>
    <p class="bx-mt-40">The honest summary: 33 of 100 is certain; whether each half must also reach 16.5 on its own is not settled in writing for 417. The practical answer is to be nowhere near either line. How the 100 marks are built, unit by unit, is on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the exam date and paper pattern page</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="split">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Does each half count on its own?</p>
      <h2>AI theory passing marks out of 50, and the 417 practical passing marks</h2>
      <p class="bx-lede">If the pass is read on the combined total, no single half has a minimum. If it is read separately, a student needs 16.5 of 50 in the theory paper and 16.5 of 50 in the practical. The table shows where the two readings agree and where they part.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Theory (of 50)</th><th scope="col">Practical (of 50)</th><th scope="col">Total (of 100)</th><th scope="col">Combined reading</th><th scope="col">Separate reading</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">30</td><td class="bx-num">45</td><td class="bx-num">75</td><td>Pass</td><td>Pass</td></tr>
          <tr><td class="bx-num">17</td><td class="bx-num">17</td><td class="bx-num">34</td><td>Pass</td><td>Pass, by half a mark each side</td></tr>
          <tr><td class="bx-num">12</td><td class="bx-num">40</td><td class="bx-num">52</td><td>Pass</td><td>Fail: theory below 16.5</td></tr>
          <tr><td class="bx-num">20</td><td class="bx-num">13</td><td class="bx-num">33</td><td>Pass, exactly on the line</td><td>Fail: practical below 16.5</td></tr>
          <tr><td class="bx-num">16</td><td class="bx-num">16</td><td class="bx-num">32</td><td>Fail</td><td>Fail</td></tr>
          <tr><td class="bx-num">10</td><td class="bx-num">22</td><td class="bx-num">32</td><td>Fail</td><td>Fail</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>The row that worries parents</h3>
        <p>The third row is the real case: a strong practical carrying a weak theory paper. Under the combined reading that student passes comfortably. Under the separate reading the same marks are a fail. Because CBSE has not settled the point for 417 in writing, we plan every student as if the separate reading applied, which means a theory score well above 16.5, not a practical score large enough to cover a thin paper.</p>
      </div>
      <div>
        <h3>Why the theory half is where the risk sits</h3>
        <ul class="bx-check">
          <li><b>The practical is spread over months.</b> A file of at least 15 programs, a project and two vivas reward steady work the student controls.</li>
          <li><b>The theory is one morning.</b> Two hours, 15 of 21 questions answered, marked by an examiner who has never met the student.</li>
          <li><b>Section A is the safety net.</b> 24 objective marks, with no negative marking, are enough on their own to clear 16.5 in theory.</li>
          <li><b>The vocabulary matters.</b> Value points reward the official terms, so a right idea in loose words can still lose marks.</li>
        </ul>
      </div>
    </div>
    <p class="bx-mt-40">What the school checks in the practical half is set out on <a class="bx-link" href="/cbse-class-10-ai-practical-exam-questions">CBSE Class 10 AI practical exam questions</a>, and how examiners award each theory mark is on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the CBSE Class 10 AI marking scheme page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="sixth-subject">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Why is AI called a sixth subject?</p>
      <h2>Minimum marks in a skill subject: how AI sits in the Class 10 result</h2>
      <p class="bx-lede">In the CBSE Class 10 scheme, the five compulsory subjects are two languages, Mathematics, Science and Social Science. Artificial Intelligence is an optional skill subject taken as the sixth, and that position gives it a job beyond its own marks: it can stand in for a failed main subject.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>The replacement rule</h3><p>If a student fails one of Science, Mathematics or Social Science and passes the skill subject offered as the sixth, CBSE replaces the failed subject with the skill subject and works out the Class 10 result on that basis.</p></div>
      <div class="bx-card"><h3>Only one subject</h3><p>The rule speaks of failing "any one" of the three. A passed AI can cover one failed main subject, not two. With more than one fail, the result category comes from the board, and your school will explain it.</p></div>
      <div class="bx-card"><h3>Languages work differently</h3><p>A failed language is replaced by a language taken as an extra subject, and either Hindi or English must remain a passed language. A skill subject is not the route for a failed language.</p></div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Situation in the result</th><th scope="col">What the CBSE scheme does</th><th scope="col">What it means for AI</th></tr></thead>
        <tbody>
          <tr><td>Passes all five main subjects and AI</td><td>A normal pass</td><td>AI shows on the marksheet with its grade</td></tr>
          <tr><td>Fails Mathematics, passes AI with 33 or more</td><td>AI replaces Mathematics and the result is computed as a pass</td><td>Those AI marks just decided the result</td></tr>
          <tr><td>Fails Mathematics and fails AI</td><td>No passed skill subject to replace it</td><td>The student is placed in the category the board sets, usually with a chance in the May sitting</td></tr>
          <tr><td>Passed by replacement, wants the main subject back</td><td>The second examination lists improvement for students passed by replacement</td><td>The failed main subject can be sat again in May</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">One more fact from the same scheme: 417 cannot be taken together with Computer Applications (165) or Information Technology (402). If a school register shows the wrong code, no pass mark will help, so check it early. The choice between AI and its neighbours is compared on <a class="bx-link" href="/ai-417-vs-it-402-class-10">AI 417 vs IT 402</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="if-fail">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What if the worst happens?</p>
      <h2>What happens if a student fails AI in Class 10?</h2>
      <p class="bx-lede">A fail in AI on its own does not undo the five main subjects, because AI is the optional sixth. It does remove the safety net for a weak main subject, it stays on the marksheet, and the May sitting is not a guaranteed second try for AI. Here is what each route looks like, from CBSE's 2026 notices.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Check the marks before anything else</h4><p>After the 2026 results, CBSE offered three post-result steps for Class X: a scanned copy of the evaluated answer book, verification of marks and re-evaluation of whole questions, each online within fixed dates. A student a few marks short of the line should look at the theory answer book first: an untotalled part or a wrongly carried mark is exactly what verification exists for.</p></li>
      <li class="bx-step"><h4>Know that the practical cannot be redone</h4><p>CBSE's circular on the second examination says there is no improvement of internal assessment, because it is a yearlong exercise. The 50 school marks in AI are fixed once uploaded. Only the theory paper can ever be sat again.</p></li>
      <li class="bx-step"><h4>Read the May rules carefully</h4><p>Improvement in the second examination is allowed in up to three of Science, Mathematics, Social Science and the languages. AI is not on that list. Separately, students placed in compartment may sit under the compartment category. The May 2026 date sheet did carry a 417 paper, on 20 May, and CBSE published a marking scheme for it, but no public notice spells out which AI candidates sat it.</p></li>
      <li class="bx-step"><h4>Ask the school, in writing, before the LOC window</h4><p>For the second examination, schools submit the list of candidates in phases, the later ones within days of the main result. That leaves little time to find out. If a fail in AI is a real risk, ask the school in January what category and route would apply, so nobody is guessing in April.</p></li>
    </ol>
    <p class="bx-mt-40">Everything about the May sitting, including who should and should not use it, is on <a class="bx-link" href="/cbse-class-10-ai-second-board-exam">the CBSE second board exam and AI page</a>. CBSE has not said whether a 417 paper will appear in the May 2027 sitting, so plan as if February is the only attempt.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="margin">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do you stay well clear?</p>
      <h2>How to score far above the AI passing marks in the 2027 paper</h2>
      <p class="bx-lede">CBSE issued the 2027 date sheet on 6 November 2026: the Artificial Intelligence paper is on Wednesday 24 February 2027, from 10:30 AM to 12:30 PM IST. Working back from that morning, this is how the live batch makes a pass a formality rather than a hope.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Close the practical half first</h3><p>One program for the file is written, run and explained in each Wednesday class, the project moves in fixed steps, and every finished piece gets a short viva rehearsal. A full 50-mark practical is the cheapest margin in the subject.</p></div>
      <div class="bx-card"><h3>Make Section A automatic</h3><p>Timed objective sets after each unit, with the reason behind every option said aloud. Twenty-four marks that need no writing are the fastest route past 16.5 in theory, and there is no negative marking.</p></div>
      <div class="bx-card"><h3>Learn the two returning long answers cold</h3><p>A confusion matrix case and the four steps of Bag of Words were both four-mark questions in the 2025 paper, the February 2026 paper and the May 2026 paper. A student who can write those two is already well into the written section.</p></div>
      <div class="bx-card"><h3>Use the official words</h3><p>Every written answer in class is marked against CBSE value points on screen, so students hear which term earned the mark and which phrase did not.</p></div>
      <div class="bx-card"><h3>Sit timed mocks in the morning</h3><p>From January, full 50-mark papers are written at 10:30 AM on weekends, matching the exam slot, then reviewed in the next live class with a short list of what to fix.</p></div>
      <div class="bx-card"><h3>Protect the main subjects too</h3><p>AI is a safety net only if it is passed. A student weak in Maths or Science needs both: a strong AI and enough work on the main subject that the net is never used.</p></div>
    </div>
    <p class="bx-mt-40">For a week-by-week version of this plan, see <a class="bx-link" href="/cbse-class-10-ai-revision-plan">the CBSE Class 10 AI revision plan</a>; for a student starting late, <a class="bx-link" href="/cbse-class-10-ai-crash-course">the Class 10 AI crash course</a> compresses it into the weeks left.</p>
  </div>
</section>`
  ],
  chooseH2: 'Get well past the pass line in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats teach the same 417 syllabus with the same teachers and the same marking. The batch suits a student who needs the whole subject in order; one to one suits a student with a specific gap, or a family whose evenings are full. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Theory on Mondays, practical file and project on Wednesdays',
    'Section A sets timed and marked in class',
    'Morning mocks from January, reviewed live'
  ],
  choosePersonal: [
    'Days and time chosen by you, in your own time zone',
    'A plan built around the half your child is weakest in',
    'Practical file and project brought up to date quickly',
    'Theory answers rewritten until they meet the value points',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student whose pre-board theory score sat close to the line usually gains most from a few one to one sessions on written answers. A student who has fallen behind on the practical file is better served by the batch, where a program is completed every week. Fees are shown in your own currency.',
  zonesH2: 'The same pass line for CBSE students in the Gulf and abroad',
  zonesLede: 'A CBSE school in Dubai, Muscat or Nairobi applies the same 33 percent line and the same sixth-subject rule, and its students sit the same AI paper. Here is the batch hour in local time.',
  zonesAfter: 'If 9:00 PM IST falls too late where you live, one to one runs at a local hour you choose. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about the AI pass mark',
  faqH2: 'What families ask about class 10 AI passing marks',
  faqs: [
    ['What are the passing marks for class 10 AI?', 'The pass mark for CBSE Class 10 Artificial Intelligence (417) is 33 percent of the subject total, which is 33 marks out of 100. The subject is made of a 50-mark theory paper written in the board exam and 50 marks of practical assessed in school. The same 33 percent line applies to every Class 10 subject, so AI is not easier or harder to pass than any other on paper.'],
    ['What are the AI theory passing marks out of 50?', 'If the theory paper had to be passed on its own, the line would be 33 percent of 50, which is 16.5. CBSE notes that its separate-component condition was relaxed in 2018, but its 2026-27 curriculum wording mentions both separate and combined, and it has not clarified this for AI. The safe plan is to treat 17 in theory as a floor and aim far above it.'],
    ['What are the 417 practical passing marks?', 'The practical is worth 50 marks: 15 for the practical file, 15 for the practical exam, 5 for its viva, 10 for the project and 5 for the project viva. A third of 50 is 16.5. A student who finishes the file and project on time and rehearses both vivas is working for marks far above that, and our Wednesday classes keep both on schedule.'],
    ['Do you need to pass theory and practical separately in class 10 AI?', 'CBSE has not given a written answer specific to AI. Its 2025-26 curriculum says the rule of 33 percent in each component was relaxed by a 2018 notification, which is why the pass is commonly read on the combined total. Its 2026-27 document uses both separately and combined in one sentence. Until CBSE clarifies, plan to clear 16.5 in each half.'],
    ['Can AI replace a failed subject in CBSE Class 10?', 'Yes, within limits. CBSE\'s scheme says that if a student fails one of Science, Mathematics or Social Science and passes the skill subject taken as the sixth, the skill subject replaces the failed one and the result is computed accordingly. It covers one failed subject only, and it does not apply to a failed language.'],
    ['What happens if I fail AI in class 10 but pass all other subjects?', 'AI is the optional sixth subject, so the five compulsory subjects carry the pass. The AI result still appears on the marksheet, and a fail removes the safety net that a passed AI gives a weak main subject. AI is not on the list of subjects that can be improved in the May sitting, so check the exact route with your school.'],
    ['Can I improve my AI marks in the second board exam?', 'Not under the improvement category. CBSE\'s 2026 notices allow improvement in up to three of Science, Mathematics, Social Science and the languages. A 417 paper was held on 20 May 2026 for other categories, such as compartment, but CBSE has not said whether AI will be in the May 2027 sitting. Internal assessment can never be improved.'],
    ['Is there grace or re-evaluation if I miss the pass mark by a little?', 'After the 2026 results CBSE offered a scanned copy of the answer book, verification of marks and re-evaluation of full questions, all online within fixed dates. A student just below the line should start with the scanned copy of the theory answer book. We do not quote grace marks, because CBSE does not publish a fixed grace rule in its curriculum.'],
    ['When is the CBSE Class 10 AI exam in 2027?', 'CBSE released the 2027 date sheet on 6 November 2026. The Artificial Intelligence (417) paper is on Wednesday 24 February 2027, from 10:30 AM to 12:30 PM IST, on the same morning as Computer Applications and Information Technology. Class 10 main examinations run from 16 February to 9 March 2027.'],
    ['How do your classes help a student who is close to failing AI?', 'We start with a short diagnostic, then fix the cheapest marks first: the practical file and project brought up to date, then Section A drilled until it is automatic, then the two long answers that keep returning. Classes are live on Monday and Wednesday at 9:00 PM IST, or one to one at your time, and the first class is a free demo.']
  ],
  startH2: 'See where your child stands against the line, free',
  startHtml: `        <p>In the free first class your child sits a short timed set from Section A and writes one four-mark answer, which the teacher marks against the CBSE value points on screen. You leave with a straight estimate of where the theory half stands, what is missing from the practical half, and whether the Monday and Wednesday batch or one to one is the quicker way to a safe margin.</p>
        <p>Want the whole subject in one view first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI passing marks'
};
