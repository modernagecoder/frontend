// CBSE Class 10: Artificial Intelligence (417) against Information Technology (402).
// Intent: "AI 417 vs IT 402", "which is better AI or IT class 10", "is AI tougher than IT",
// "easier skill subject class 10".
// Distinct from cb34 (three-way choice with Computer Applications 165, written for Class 9
// parents): this page is the two skill subjects only, side by side, unit by unit, with the
// paper shape, the practical load, the tools and a decision checklist. Neutral: we teach
// 417, not 402, and the page says so.
// Sources, downloaded and read 2026-11-06 (text extracted with pypdf, not paraphrased):
//  - CBSE Dept of Skill Education, 417 Artificial Intelligence Class X curriculum 2026-2027
//    (web_material/curriculums/2026-2027/sec/417-AI-X.pdf): theory 50 + practical 50; Part A
//    2 marks per unit (10 h each); Part B U1 7, U2 11, U3 10, U5 4, U6 8, U4 and U7 practical
//    only; Part C file 15 (min 15 programs), practical exam 15 (U4 to U7), viva 5, project 10,
//    project viva 5; tools named: Jupyter Notebook, NumPy, Matplotlib, csv reading, Orange
//    Data Mining, Teachable Machine.
//  - Same source, 402 Information Technology Class X 2026-2027 (402-IT-X.pdf): course title
//    Domestic Data Entry Operator; Part A 2/3/1/3/1; Part B Writer 8, Calc 10, Base 12,
//    Maintain Healthy, Safe and Secure Working Environment 10; practical exam 20 (Writer 5,
//    Calc 5, Base 10), viva 10, project 10, portfolio 10 (min 5 problems each of Writer,
//    Calc, Base). One contents line of the PDF still says "Web Applications and Security"
//    for Unit 4; the scheme table and chapters 13 to 15 are the health and safety unit.
//  - 402 sample paper 2025-26 blueprint (Curriculum26/SQP_MS_X/402_Information_Tech_SQP.pdf):
//    Part A any 4 of 6 x1 + any 3 of 5 x2; Part B any 20 of 24 x1, any 4 of 6 x2, any 3 of 5
//    x4. 417 2025-26 sample paper shape from the design doc: identical.
//  - Secondary curriculum 2026-27 Part 1 (CurriculumMain27/SecPart1/Curriculum_SecP1_2026-27.pdf):
//    Classes IX and X are a composite course; footnote "Out of the two subjects with codes 165
//    and 402, only one subject can be offered".
// Hours recomputed with python3 (scratch calc/cb20.py): 417 Part B theory 80 h, practical
// 80 h, total with Part A 210; 402 Part B theory 60 h, practical 90 h, total 200; Part B
// marks 40 each; practicals 50 each; sample paper parts 10 + 40 each.
// 2028 scheme: press reports from October 2026 only, labelled reported, not yet notified.
// Left out (unconfirmed): pass rates or average marks for either subject; any rule that
// bars 417 with 402; whether a Class 11 school demands either subject.
'use strict';

module.exports = {
  slug: 'ai-417-vs-it-402-class-10',
  code: 'cb20',
  board: 'cbse',
  themeColor: '#5A4A2E',
  dateModified: '2026-11-06',
  title: 'AI 417 vs IT 402 in Class 10: Syllabus, Marks, Practicals',
  description: 'AI 417 vs IT 402 for CBSE Class 10, 2026-27: both syllabi side by side, the identical paper shape, the practical load, the tools and a checklist to decide.',
  ogTitle: 'AI 417 vs IT 402: the Two CBSE Class 10 Skill Subjects Compared',
  ogDesc: 'Artificial Intelligence (417) and Information Technology (402) compared from the 2026-27 CBSE curricula: units and marks, the theory paper, the 50-mark practical, the software each uses, where each leads, and a checklist for choosing.',
  twDesc: 'AI 417 or IT 402 in Class 10? Units, marks, practicals and tools from both 2026-27 CBSE curricula, plus a decision checklist.',
  headline: 'AI 417 vs IT 402 in CBSE Class 10: Syllabus, Paper, Practicals and Tools, Compared from the 2026-27 Curricula',
  courseName: 'CBSE Class 10 AI (417) Board Preparation, Live Online',
  courseDesc: 'Live online classes for CBSE Class 10 Artificial Intelligence (417), session 2026-27, for students who chose AI over IT: every theory unit taught and tested, the Python and Orange practicals built into a practical file, project and viva rehearsal, and timed mock papers, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 or 402',
  navLinks: [['#side-by-side', 'Side by side'], ['#paper', 'The paper'], ['#tougher', 'Which is tougher'], ['#checklist', 'Checklist']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'AI 417 or IT 402?']],
  eyebrow: 'CBSE Class 10 &middot; Skill subjects &middot; Artificial Intelligence 417 and Information Technology 402 &middot; 2026-27',
  h1: 'AI 417 vs IT 402: what each Class 10 skill subject actually asks of a student.',
  lede: 'Choosing between AI 417 vs IT 402 is easier once you see both 2026-27 CBSE curricula on one page. They share a mark split, a two-hour theory paper and even the same Part A units. Where they part ways is the work itself: AI asks for concepts, small calculations and Python, while IT asks for careful, step-by-step work in office software and a database. This page lays both out, then gives a checklist. We teach the 417 course, so we say plainly where IT is the better fit.',
  heroNote: 'Live online &middot; compared from both official 2026-27 curricula &middot; neutral checklist below &middot; 417 batch Monday and Wednesday &middot; first class free',
  waText: 'Hello Modern Age Coders. We are choosing between AI 417 and IT 402 for Class 10 and want advice.',
  timetable: {
    label: 'When the 417 batch meets',
    title: 'Class 10 AI batch',
    right: 'CBSE 417',
    rows: [
      ['Monday, theory and numericals', '9:00', 'PM IST'],
      ['Wednesday, Python and practicals', '9:00', 'PM IST'],
      ['Practical marks in AI and in IT', '50', 'each'],
      ['Objective marks in each theory paper', '24', 'of 50']
    ],
    zones: '<b>Dubai, Abu Dhabi, Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City, Manama:</b> 6:30 PM. <b>Nairobi and Kampala:</b> 6:30 PM. <b>Singapore:</b> one to one at a local hour.',
    stamps: ['Both curricula 2026-27', 'We teach 417 only']
  },
  picksH2: 'Courses for a student who picks AI 417',
  picksLede: 'If the checklist below points to AI, these are the three courses that carry a Class 10 student through it: the 417 board course itself, Python for the practical file, and Orange for the no-code unit.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Every 417 unit taught in order, the evaluation numericals practised until steady, and the practical file, project and viva prepared alongside.' },
    { slug: 'python-complete-masterclass-teens', code: 'Practical file / Python', h3: 'Python for Teens', p: 'For a student new to code: lists, NumPy, Matplotlib and reading a CSV file, the exact programs the 417 practical exam and file are built from.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Unit 4 / Orange', h3: 'Visual ML with Orange', p: 'The no-code tool CBSE names for the Statistical Data unit and the computer vision and NLP case studies, learned hands-on rather than from screenshots.' }
  ],
  capsule: 'AI 417 vs IT 402: both are CBSE Class 10 skill subjects worth 100 marks, 50 theory in a two-hour paper and 50 practical, and in the 2025-26 sample papers the theory papers had the same shape. The difference is the content. AI 417 covers the AI project cycle, ethics, modeling, model evaluation with calculations, computer vision and NLP, with Python and Orange in the practical. IT 402 covers LibreOffice Writer, Calc and Base plus workplace health and safety. Pick AI for concepts and coding, IT for software procedures. Modern Age Coders teaches 417 live, Monday and Wednesday 9:00 PM IST, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="side-by-side">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is the difference between AI 417 and IT 402?</p>
      <h2>AI 417 vs IT 402 side by side, from the 2026-27 CBSE curricula</h2>
      <p class="bx-lede">AI 417 teaches how AI systems are planned, built and judged, with Python as the practical tool; IT 402 teaches advanced use of a word processor, a spreadsheet and a database, framed around the job of a data entry operator. Both start from the same five employability units.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Point of comparison</th><th scope="col">Artificial Intelligence (417)</th><th scope="col">Information Technology (402)</th></tr></thead>
        <tbody>
          <tr><td>Total marks</td><td>100: theory 50, practical 50</td><td>100: theory 50, practical 50</td></tr>
          <tr><td>Part A, employability skills</td><td>10 marks, 2 per unit</td><td>10 marks: Communication 2, Self-Management 3, ICT 1, Entrepreneurial 3, Green 1</td></tr>
          <tr><td>Part B, the subject itself</td><td>40 marks across five theory units</td><td>40 marks across four units</td></tr>
          <tr><td>Hours suggested by CBSE</td><td>210 in all; Part B 80 theory and 80 practical</td><td>200 in all; Part B 60 theory and 90 practical</td></tr>
          <tr><td>Software</td><td>Python in Jupyter Notebook, NumPy, Matplotlib, CSV files, Orange Data Mining, Teachable Machine</td><td>LibreOffice Writer, Calc and Base</td></tr>
          <tr><td>Coding needed?</td><td>Yes, basic Python, assessed in the practical</td><td>No separate programming language, but the Calc unit includes recording and writing simple macros, a light taste of code</td></tr>
          <tr><td>Calculations in the theory paper</td><td>Yes: accuracy, precision, recall, F1 score and similar</td><td>Spreadsheet formulas and what-if tools, no statistics formulas</td></tr>
          <tr><td>Job role named in the curriculum</td><td>None; the aim is AI readiness and responsible use</td><td>Domestic Data Entry Operator</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>AI 417, Part B units and marks</h3>
        <table class="bx-marks">
          <thead><tr><th scope="col">Unit</th><th scope="col">Theory marks</th></tr></thead>
          <tbody>
            <tr><td>1. Revisiting AI Project Cycle and Ethical Frameworks for AI</td><td class="bx-num">7</td></tr>
            <tr><td>2. Advanced Concepts of Modeling in AI</td><td class="bx-num">11</td></tr>
            <tr><td>3. Evaluating Models</td><td class="bx-num">10</td></tr>
            <tr><td>4. Statistical Data</td><td class="bx-num">practical only</td></tr>
            <tr><td>5. Computer Vision</td><td class="bx-num">4</td></tr>
            <tr><td>6. Natural Language Processing</td><td class="bx-num">8</td></tr>
            <tr><td>7. Advance Python</td><td class="bx-num">practical only</td></tr>
            <tr class="bx-total"><td>Part B theory</td><td class="bx-num">40</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>IT 402, Part B units and marks</h3>
        <table class="bx-marks">
          <thead><tr><th scope="col">Unit</th><th scope="col">Theory marks</th></tr></thead>
          <tbody>
            <tr><td>1. Digital Documentation (Advanced), LibreOffice Writer</td><td class="bx-num">8</td></tr>
            <tr><td>2. Electronic Spreadsheet (Advanced), LibreOffice Calc</td><td class="bx-num">10</td></tr>
            <tr><td>3. Database Management System, LibreOffice Base</td><td class="bx-num">12</td></tr>
            <tr><td>4. Maintain Healthy, Safe and Secure Working Environment</td><td class="bx-num">10</td></tr>
            <tr class="bx-total"><td>Part B theory</td><td class="bx-num">40</td></tr>
          </tbody>
        </table>
        <p class="bx-muted" style="font-size:.92rem;margin-top:14px">One contents line of the 402 PDF still names Unit 4 "Web Applications and Security", an older title. Its scheme table and chapters 13 to 15 are the health, safety and emergencies unit shown here, so check which version a guide book follows.</p>
      </div>
    </div>
    <p class="bx-mt-40">Every AI unit, with what each one really asks, is unpacked on <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>. The Part A units that both subjects share are covered on <a class="bx-link" href="/cbse-class-10-ai-employability-skills-part-a">Part A employability skills</a>, and that page serves an IT student just as well.</p>
  </div>
</section>`,

`<section class="bx-section" id="paper">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Is the board paper different?</p>
      <h2>The theory paper: same shape for AI and IT, different questions</h2>
      <p class="bx-lede">The shape is the same. The 2025-26 sample papers for 417 and 402 both run for two hours, carry 50 marks and offer the same choice in every block, so neither subject has an easier format. What fills the blocks is what differs.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Block in the 2025-26 sample paper</th><th scope="col">Printed, answered</th><th scope="col">Marks</th><th scope="col">Typical AI 417 item</th><th scope="col">Typical IT 402 item</th></tr></thead>
        <tbody>
          <tr><td>Part A one-mark</td><td class="bx-num">6, any 4</td><td class="bx-num">4</td><td colspan="2">Identical topics: communication, self-management, ICT, entrepreneurship, green skills</td></tr>
          <tr><td>Part A two-mark</td><td class="bx-num">5, any 3</td><td class="bx-num">6</td><td colspan="2">Short answers on the same five employability units</td></tr>
          <tr><td>Part B one-mark</td><td class="bx-num">24, any 20</td><td class="bx-num">20</td><td>Which stage of the project cycle, which learning type, compute a precision</td><td>Which menu holds Goal Seek, what a primary key does, which style category applies</td></tr>
          <tr><td>Part B two-mark</td><td class="bx-num">6, any 4</td><td class="bx-num">8</td><td>Define a term, tell two ideas apart, a short count of pixels or tokens</td><td>Steps to insert a table of contents, difference between a form and a report</td></tr>
          <tr><td>Part B four-mark</td><td class="bx-num">5, any 3</td><td class="bx-num">12</td><td>A case study, a confusion matrix with all four metrics, an ethics dilemma</td><td>Write a query or explain relationships between tables, a workplace safety scenario</td></tr>
          <tr class="bx-total"><td>Theory paper</td><td></td><td class="bx-num">50</td><td colspan="2">Two hours, both subjects</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Objective marks match</h3><p>24 of the 50 theory marks are one-mark items in both papers, 4 from Part A and 20 from Part B, so a student who is careful with objective questions benefits equally in either subject.</p></div>
      <div class="bx-card"><h3>AI asks you to calculate</h3><p>Evaluating Models alone carries 10 marks, and its questions often hand you a confusion matrix and ask for a metric. That is arithmetic, done under time, with a formula you must remember.</p></div>
      <div class="bx-card"><h3>IT asks you to recall steps</h3><p>Many 402 questions name a task and ask which menu, tool or sequence of clicks does it. The work is precise memory of the software, which sticks only when each task is actually done on a computer.</p></div>
    </div>
    <div class="bx-dated bx-mt-40">
      <p><b>Checked 6 November 2026:</b> the skill-subject sample papers on cbseacademic.nic.in are still the 2025-26 ones for both 417 and 402. In the 2026 board exams, AI 417, IT 402 and Computer Applications 165 were all set on Friday 27 February, 10:30 AM to 12:30 PM, so a student sits one of them. The 2027 date sheet is not out; the AI blueprint in full is on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the 417 exam date and paper pattern page</a>.</p>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="practicals">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which has the heavier practical?</p>
      <h2>Practical load in AI 417 and IT 402: where the other 50 marks come from</h2>
      <p class="bx-lede">Both practicals are worth 50 marks, but they are built differently. AI puts more weight on a written file of programs; IT puts more on a hands-on test in the three LibreOffice tools and a longer viva.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>AI 417 practical, 50 marks</h3>
        <table class="bx-marks">
          <tbody>
            <tr><td>Practical file, at least 15 programs</td><td class="bx-num">15</td></tr>
            <tr><td>Practical examination: Statistical Data, Computer Vision, NLP, Advance Python</td><td class="bx-num">15</td></tr>
            <tr><td>Viva voce</td><td class="bx-num">5</td></tr>
            <tr><td>Project work, field visit or student portfolio (any one)</td><td class="bx-num">10</td></tr>
            <tr><td>Viva on the project</td><td class="bx-num">5</td></tr>
            <tr class="bx-total"><td>Practical</td><td class="bx-num">50</td></tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>IT 402 practical, 50 marks</h3>
        <table class="bx-marks">
          <tbody>
            <tr><td>Practical exam in Writer</td><td class="bx-num">5</td></tr>
            <tr><td>Practical exam in Calc</td><td class="bx-num">5</td></tr>
            <tr><td>Practical exam in Base</td><td class="bx-num">10</td></tr>
            <tr><td>Viva voce</td><td class="bx-num">10</td></tr>
            <tr><td>Project: a real-world case study, data entered through Base forms, output as Base reports, write-up in Writer</td><td class="bx-num">10</td></tr>
            <tr><td>Portfolio or practical file, at least 5 problems each in Writer, Calc and Base</td><td class="bx-num">10</td></tr>
            <tr class="bx-total"><td>Practical</td><td class="bx-num">50</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the AI practical feels like</h3>
        <ul class="bx-check">
          <li><b>Code that must run.</b> Programs such as adding two lists, mean, median and mode with NumPy, a line chart and a scatter chart, reading a CSV file.</li>
          <li><b>Two theory-free units.</b> Statistical Data and Advance Python are never in the written paper, only here.</li>
          <li><b>A no-code tool too.</b> Orange Data Mining appears for data, and Teachable Machine for image models.</li>
          <li><b>Ten viva marks in all</b>, split between the practical and the project.</li>
        </ul>
      </div>
      <div>
        <h3>What the IT practical feels like</h3>
        <ul class="bx-check">
          <li><b>Base carries the most.</b> Tables, primary keys, queries, forms and reports earn 10 exam marks and run through the project as well.</li>
          <li><b>Precision over invention.</b> Styles, a table of contents, track changes, Scenarios, Goal Seek, linked sheets: each has a right sequence.</li>
          <li><b>Fifteen problems minimum</b> across the three tools for the portfolio.</li>
          <li><b>A ten-mark viva</b> on its own, twice the AI practical viva.</li>
        </ul>
      </div>
    </div>
    <p class="bx-mt-40">A 15-program file for AI, with what each program prints, is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the 417 project and practical file page</a>, and the code behind it is walked through on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>. CBSE itself lists eight suggested programs; any 15-program list is a teacher's choice, ours included.</p>
  </div>
</section>`,

`<section class="bx-section" id="tougher">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Is AI tougher than IT?</p>
      <h2>Is AI tougher than IT, and which is the easier skill subject in Class 10?</h2>
      <p class="bx-lede">Neither is easier for everyone, because the two papers test different habits. AI 417 is harder for a student who dislikes formulas and new code; IT 402 is harder for a student who finds long sequences of menu steps dull and hard to keep straight. CBSE does not publish subject-wise averages for skill subjects, so any claim that one "scores more" is opinion.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Where marks are usually lost</th><th scope="col">In AI 417</th><th scope="col">In IT 402</th></tr></thead>
        <tbody>
          <tr><td>Calculations</td><td>Swapping false positives and false negatives; averaging precision and recall instead of using the F1 formula</td><td>Rare: a formula in a cell, or reading a Goal Seek result</td></tr>
          <tr><td>Close definitions</td><td>Classification against regression, clustering against association, stemming against lemmatisation</td><td>Form against report, query against filter, primary key against foreign key</td></tr>
          <tr><td>Long answers</td><td>Case studies that need the right ethical framework or project-cycle stage named</td><td>Step lists written out of order, missing one click</td></tr>
          <tr><td>Practical</td><td>A program that errors on the day, or a file with programs nobody can explain in the viva</td><td>A Base query that returns the wrong rows, or a project report with no form behind it</td></tr>
          <tr><td>Revision</td><td>Five theory units of concepts; two units only in the practical</td><td>Four units, three of them software you must open and use to remember</td></tr>
        </tbody>
      </table>
    </div>
    <h3 class="bx-mt-40">A two-minute taste of each</h3>
    <div class="bx-code-pair">
      <figure class="bx-code">
        <figcaption class="bx-code-head"><b>An AI 417 style item</b><span>Unit 3</span></figcaption>
        <pre>A plant-disease model checks 100 leaves.
TP = 30, FP = 10, FN = 20, TN = 40.

Precision = 30 / (30 + 10) = 0.75
Recall    = 30 / (30 + 20) = 0.60
F1 = 2 x 0.75 x 0.60 / (0.75 + 0.60)
   = 0.90 / 1.35 = 0.67 (2 d.p.)
Accuracy  = (30 + 40) / 100 = 0.70</pre>
        <p class="bx-code-note">If this felt satisfying, AI suits you. Every figure was rechecked with Python.</p>
      </figure>
      <figure class="bx-code">
        <figcaption class="bx-code-head"><b>An IT 402 style item</b><span>Unit 2</span></figcaption>
        <pre>Marks in B2 come from the formula
=B1*0.4+60 (B1 = practice tests).
You need B2 to reach 90.

Tools &gt; Goal Seek
  Formula cell : B2
  Target value : 90
  Variable cell: B1
Result: B1 = 75</pre>
        <p class="bx-code-note">If you could follow each click, IT suits you. (90 - 60) / 0.4 = 75.</p>
      </figure>
    </div>
    <p class="bx-mt-40">More AI numericals of the left-hand kind, graded from one mark to four, are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals for Class 10 AI</a>. If you are also weighing CBSE Computer Applications, the three-way view is on <a class="bx-link" href="/ai-vs-computer-applications-class-10">AI, IT or Computer Applications</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="checklist">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Which is better for my child?</p>
      <h2>Which is better, AI or IT, in Class 10: a decision checklist</h2>
      <p class="bx-lede">The better subject is the one your child will study steadily for two years, because Classes 9 and 10 form one composite course and CBSE asks students to take in Class 9 only the subjects they will continue in Class 10. Tick the statements that are true, then count.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-card">
        <h3>Lean towards AI 417 if</h3>
        <ul class="bx-check">
          <li>They enjoy a short calculation and want to know why an answer is right.</li>
          <li>They are curious about how apps recognise faces, voices or spam.</li>
          <li>They would like to start Python now rather than in Class 11.</li>
          <li>They are thinking of Computer Science, Informatics Practices or AI in Class 11.</li>
          <li>They can write a clear paragraph on an ethical question.</li>
          <li>The school runs a working Python lab, or you can arrange practice at home.</li>
        </ul>
      </div>
      <div class="bx-card">
        <h3>Lean towards IT 402 if</h3>
        <ul class="bx-check">
          <li>They like neat documents, tidy spreadsheets and getting a task exactly right.</li>
          <li>They prefer learning by doing in software over reading about ideas.</li>
          <li>Formulas and code make them anxious this year.</li>
          <li>They want office and database skills they can use straight away.</li>
          <li>The school's lab has LibreOffice set up and an IT teacher with spare lab time.</li>
          <li>They would rather revise four units than five.</li>
        </ul>
      </div>
    </div>
    <ol class="bx-steps bx-mt-40">
      <li class="bx-step"><h4>Ask the school what it actually offers</h4><p>Not every school runs both. Ask which skill subjects have a teacher and a lab this session, and how the timetable fits.</p></li>
      <li class="bx-step"><h4>Look at one chapter of each together</h4><p>Open a unit of each curriculum with your child for ten minutes. Their reaction is better evidence than any ranking.</p></li>
      <li class="bx-step"><h4>Decide in Class 9 and stay</h4><p>Switching in Class 10 means catching up a year of a new subject, practicals included, so make the call early.</p></li>
      <li class="bx-step"><h4>Plan the practical from day one</h4><p>Half the marks in either subject are practical. Start the file or portfolio in the first term, not in January.</p></li>
    </ol>
    <div class="bx-dated bx-mt-40">
      <p><b>About 2028:</b> press reports in October 2026 describe a changed Class 10 scheme for students who are in Class 9 in 2026-27 and sit the board in 2028, with skill subjects such as AI and IT kept as options. That is reported, not yet notified subject by subject, so we promise nothing about it; the school's circular is the document to go by.</p>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="after-choice">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. What do they lead to, and how is AI taught here?</p>
      <h2>Where AI 417 and IT 402 lead after Class 10, and how we teach 417</h2>
      <p class="bx-lede">Each subject has a direct Class 11 and 12 continuation in CBSE: Artificial Intelligence (843) after 417, Information Technology (802) after 402. Neither is a formal entry rule for Computer Science or Informatics Practices; schools set their own criteria for those.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>After AI 417</h3><p>Python habits, a feel for data and models, and words like precision, recall and bias that turn up again in Class 11 AI, Computer Science and Informatics Practices.</p></div>
      <div class="bx-card"><h3>After IT 402</h3><p>Confident use of documents, spreadsheets and databases, the base for Class 11 IT and for any course where data is kept in tables and reports.</p></div>
      <div class="bx-card"><h3>For both</h3><p>The Part A employability units, the habit of a practical file, and a viva. A Class 10 skill subject does not lock any stream in Class 11.</p></div>
    </div>
    <h3 class="bx-mt-40">If you choose AI: what our live 417 classes cover</h3>
    <p>Our Class 10 board batch is for AI 417 only; we do not run an IT 402 batch. Theory is taught on Mondays at 9:00 PM IST, in the order the paper rewards, and Wednesdays at the same hour are for Python, Orange and the practical file. Evaluating Models gets repeated timed numerical sets until the formulas stop slipping. Each student builds the file program by program, rehearses the viva with a teacher asking follow-up questions, and from December sits full mock papers marked against the scheme on screen. There is open doubt time in every class.</p>
    <p>The batch itself, with the term plan, is on <a class="bx-link" href="/cbse-class-10-ai-classes-online">CBSE Class 10 AI classes online</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Chose AI 417? Study it in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats follow the same 417 syllabus with the same teachers. The batch keeps a steady weekly rhythm alongside other Class 10 AI students; one to one lets a student who joined late, or who finds Python new, catch up at their own pace. Monthly billing, no admission fee.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Theory on Monday, Python and practicals on Wednesday',
    'Practical file built program by program',
    'Viva rehearsal and full mocks from December'
  ],
  choosePersonal: [
    'Days and times you set, in your own time zone',
    'Python from the first line for a student new to code',
    'Extra numerical drills for Evaluating Models',
    'Catch-up plan for a student who switched to AI late',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who chose AI in Class 9 and kept up usually does well in the batch. A student who is moving into AI from IT, or who has not yet written a line of Python, often starts with a few one to one sessions and joins the batch once level. Fees appear in your own currency.',
  zonesH2: 'AI 417 or IT 402 at a CBSE school abroad',
  zonesLede: 'CBSE schools in the Gulf, Africa and Asia offer the same skill subjects, set the same papers and follow the same curricula, though not every school runs both. If your child picked AI, here is when the 9:00 PM IST batch falls locally.',
  zonesAfter: 'Where the batch hour is too late, one to one runs at a time that suits your evening. Families abroad will find more on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about AI 417 and IT 402',
  faqH2: 'What parents and students ask about AI 417 vs IT 402',
  faqs: [
    ['Which is better, AI or IT, in Class 10?', 'Neither is better in general. AI 417 suits a student who likes concepts, short calculations and learning Python; IT 402 suits one who prefers precise, hands-on work in a word processor, spreadsheet and database. Both carry 100 marks, split 50 theory and 50 practical, and both continue into Class 11 and 12 skill subjects. Choose by your child\'s habits and by what the school actually teaches well.'],
    ['Is AI tougher than IT in CBSE Class 10?', 'AI is tougher for students who dislike formulas or code, because its theory paper includes evaluation numericals and its practical needs Python programs that run. IT is tougher for students who struggle to remember exact software steps, because many of its questions ask which menu or tool does a task. The papers themselves have the same shape and the same marks.'],
    ['Which is the easier skill subject in Class 10?', 'There is no official answer, and CBSE does not publish subject-wise averages for skill subjects. A student comfortable with computers but not with maths often finds IT easier; a student who enjoys logic and wants to code often finds AI easier. The practical is 50 marks in both, so steady practical work matters more than which subject you pick.'],
    ['What is the syllabus difference between 417 and 402?', 'Both share Part A employability skills for 10 marks. In Part B, AI 417 covers the AI project cycle and ethics, modeling, evaluating models, computer vision and NLP in theory, with statistical data and Python in the practical. IT 402 covers LibreOffice Writer, Calc and Base, plus a unit on keeping a workplace healthy, safe and secure.'],
    ['Does AI 417 need coding?', 'Yes, at a basic level. The 2026-27 curriculum includes an Advance Python unit, assessed only in the practical, and the practical file needs at least 15 programs, such as finding the mean, median and mode with NumPy, drawing charts with Matplotlib and reading a CSV file. No coding is asked in the written theory paper beyond reading simple output.'],
    ['Can I take both AI 417 and IT 402?', 'In practice, a student takes one. In the 2026 board exams, AI 417, IT 402 and Computer Applications 165 were set in the same slot on the same day, so they could not all be sat. The 2026-27 scheme also says only one of 165 and 402 can be offered. Ask the school which skill subjects it runs before deciding.'],
    ['Can I change from IT to AI in Class 10?', 'CBSE treats Classes 9 and 10 as one composite course and asks students to take in Class 9 only the subjects they will continue in Class 10. Some schools allow a change at the start of Class 10, but the student then has a year of new theory and a full practical to make up. Ask the school first, and plan catch-up classes if it agrees.'],
    ['Which is better for a future in computer science?', 'AI 417 gives a head start in Python and in ideas that reappear in Class 11 Computer Science, Informatics Practices and AI. IT 402 gives strong database and spreadsheet skills. Neither is a formal requirement for Class 11 Computer Science; schools set their own admission criteria, often based on overall and maths marks.'],
    ['Which software is used in IT 402 and in AI 417?', 'IT 402 uses LibreOffice Writer, Calc and Base throughout, including styles, Goal Seek, Scenarios, macros, queries, forms and reports. AI 417 names Python in Jupyter Notebook with NumPy and Matplotlib, CSV files, the no-code Orange Data Mining tool and Google\'s Teachable Machine, which runs in a browser.'],
    ['Do you teach IT 402 as well?', 'No. Our Class 10 board batch is for AI 417 only, on Mondays and Wednesdays at 9:00 PM IST, with personalised one to one at a time the family chooses. If the checklist on this page points to IT, we would rather say so plainly than suggest a subject your child is less suited to.']
  ],
  startH2: 'Still deciding? Sit one free AI class first',
  startHtml: `        <p>The free first class is a normal 417 lesson: a short piece of theory, a confusion matrix to work out, and a few lines of Python run on screen. Many families use it to test the choice before the school deadline. Afterwards the mentor tells you honestly whether AI looks like a good fit for your child, and if it does, whether the batch or one to one makes more sense.</p>
        <p>Want the full list of what AI covers first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; AI 417 or IT 402'
};
