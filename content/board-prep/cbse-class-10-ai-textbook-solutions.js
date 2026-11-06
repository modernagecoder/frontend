// CBSE Class 10 AI (417): textbook (Facilitator Handbook) solutions guide, session 2026-27.
// Intent: "class 10 AI textbook solutions", "AI class 10 book exercise answers",
// "facilitator handbook solutions", "NCERT AI class 10 solutions".
// Distinct from ciq (important questions by mark band) and cb19 (worksheets): this page maps
// the official CBSE "AI Facilitator Handbook" for Grade X (CBSE with Intel; file
// cbseacademic.nic.in/web_material/Curriculum26/publication/secondary/AI_Facilitators_Handbook_X.pdf,
// downloaded and read 2026-11-06, 181 pages) unit by unit to its end-of-unit exercise TYPES,
// then gives ORIGINAL questions of each type with model answers. No handbook question text,
// case text or answer is reproduced; the handbook's MCQ answer key is not reprinted. Facts
// taken from the file: Part B Units 1 to 6 only (no Unit 7 chapter, no Part A); end-of-unit
// "Test Yourself" MCQ counts from its own answer key page: U1 12, U2 12, U3 10, U4.1 5,
// U4.2 5, U5 12, U6 12; exercise types per unit: MCQ, assertion-reasoning (U1, U2, U3, U5,
// U6), "Reflection Time" short and long answers (all units), case-based questions (U1, U2,
// U3, U5), "answer briefly / in detail" (U4.1). The answer key at the back covers the MCQs
// only. An older 2021 Class 10 handbook (Curriculum21 path) still exists on the site.
// Unit marks from the CBSE 417 Class X curriculum 2026-2027 (Curriculum27/Sec/417-AI-X.pdf).
// The 417 book is not an NCERT textbook: the curriculum PDF and handbook credit CBSE and Intel.
// Numericals recomputed with python3 on 2026-11-06: mango sorter TP 120 FP 30 FN 50 TN 800
// of 1000: accuracy 0.92, precision 0.80, recall 0.71 (0.7059), F1 0.75, wrong 80; IDF for
// a 3-document corpus: log10(3/2) = 0.176, log10(3/1) = 0.477.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-textbook-solutions',
  code: 'cb21',
  board: 'cbse',
  themeColor: '#3E4B2C',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Textbook Solutions 2026-27: Handbook Guide',
  description: 'Class 10 AI textbook solutions for CBSE 417, 2026-27: a unit map of the official AI Facilitator Handbook and original model answers for each exercise type.',
  ogTitle: 'Class 10 AI Textbook Solutions: the CBSE Handbook, Unit by Unit',
  ogDesc: 'What the CBSE AI Facilitator Handbook for Class X asks at the end of each unit, how each exercise type is marked, and original model answers you can learn the method from, for the 2026-27 session.',
  twDesc: 'A map of the CBSE Class X AI handbook exercises for 2026-27, with original model answers for every question type: reflection, case, numerical and assertion-reason.',
  headline: 'Class 10 AI Textbook Solutions for 2026-27: the CBSE Handbook Mapped, with Model Answers for Every Exercise Type',
  courseName: 'CBSE Class 10 AI (417) Handbook Exercises, Taught Live Online',
  courseDesc: 'Live online teaching of the CBSE Class 10 Artificial Intelligence (417) Facilitator Handbook for 2026-27: each unit taught from the handbook, its end-of-unit exercise types answered aloud and in writing, answers checked against CBSE marking on a shared screen, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Handbook answers',
  navLinks: [['#book', 'Which book'], ['#map', 'Chapter map'], ['#answers-1', 'Model answers'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Textbook solutions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Handbook exercise answers 2026-27',
  h1: 'Class 10 AI textbook solutions for 2026-27, built around the official CBSE handbook.',
  lede: 'Most searches for class 10 AI textbook solutions are really about one book: the AI Facilitator Handbook for Class X that CBSE publishes free with Intel. Its MCQ answers are printed at the back, but its reflection questions, case questions and calculations have no printed answers. This page maps the handbook unit by unit to the exercise types it sets, then shows how to answer each type with original model answers. It does not reprint the book\'s questions; it teaches the method, which is what the board marks.',
  heroNote: 'Live online &middot; handbook mapped unit by unit &middot; model answers for every exercise type &middot; answers marked in class &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with the CBSE Class 10 AI 417 handbook exercises.',
  timetable: {
    label: 'When the handbook is taught',
    title: 'Handbook classes',
    right: 'CBSE 417',
    rows: [
      ['Monday, one handbook unit', '9:00', 'PM IST'],
      ['Wednesday, its exercises answered', '9:00', 'PM IST'],
      ['Handbook units mapped below', '6', 'Part B'],
      ['Exercise types with model answers', '6', 'types']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM on both days. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya, Tanzania, Uganda:</b> 6:30 PM. <b>Malaysia and Singapore:</b> one to one at a local hour.',
    stamps: ['Official CBSE handbook', 'Original answers only']
  },
  picksH2: 'Courses that teach from the handbook',
  picksLede: 'The 417 course that follows the handbook unit by unit, the Python course for the practical unit the handbook leaves out, and the Orange course for the no-code walkthroughs the handbook uses.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Each handbook unit taught, then its exercise types answered in writing and marked live, so the method sticks before the board paper.' },
    { slug: 'python-complete-masterclass-teens', code: 'Unit 7 / Python', h3: 'Python for Teens', p: 'Jupyter, NumPy and Matplotlib for Advance Python, the practical-only unit the Class X handbook does not have a chapter for.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Walkthroughs / Orange', h3: 'Visual ML with Orange', p: 'The penguin data, image and sentiment walkthroughs from the handbook, built hands-on in Orange so the case questions make sense.' }
  ],
  capsule: 'Class 10 AI textbook solutions for 2026-27 start with the right book: the CBSE AI Facilitator Handbook for Class X, a free PDF on cbseacademic.nic.in made by CBSE with Intel. It is not an NCERT book. It covers Part B Units 1 to 6, ending each unit with Test Yourself MCQs, assertion-reasoning items, Reflection Time questions and cases. Only the MCQ answers are printed. For the rest, learn the answer method: definition, example, keyword, sized to the marks. Modern Age Coders teaches every handbook unit live, Monday and Wednesday at 9:00 PM IST, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="book">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which book is the textbook?</p>
      <h2>Which textbook is used for CBSE Class 10 AI, and is there an NCERT AI class 10 book?</h2>
      <p class="bx-lede">The textbook for CBSE AI 417 in Class 10 is the AI Facilitator Handbook for Class X, published free by CBSE in collaboration with Intel. There is no NCERT textbook for this subject, so "NCERT AI class 10 solutions" usually means answers to this handbook.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>What the handbook covers, and what it does not</h3>
        <ul class="bx-check">
          <li><b>Part B, Units 1 to 6.</b> Project cycle and ethics, modeling, evaluating models, statistical data, computer vision and NLP, each with sessions, activities and end-of-unit exercises.</li>
          <li><b>Not Part A.</b> The five employability skills units are set out separately; the curriculum points students to the CBSE website for them.</li>
          <li><b>Not Unit 7.</b> Advance Python is in the 2026-27 curriculum and tested in the practical, but the Class X handbook has no chapter on it.</li>
          <li><b>Answers for MCQs only.</b> A one-page key at the back gives the Test Yourself options. Nothing else is answered.</li>
        </ul>
      </div>
      <div>
        <h3>Where to find the right edition</h3>
        <p>On cbseacademic.nic.in, the file to use is <a href="https://cbseacademic.nic.in/web_material/Curriculum26/publication/secondary/AI_Facilitators_Handbook_X.pdf" target="_blank" rel="noopener">AI_Facilitators_Handbook_X.pdf</a>. Its unit list matches the 2026-27 curriculum. An older Class 10 handbook from 2021 is still hosted on the same site; it follows the earlier chapter list, so its exercises do not line up with the current units.</p>
        <p>Private publishers sell textbooks and guides written to the same units. How they compare with the free handbook is covered on <a class="bx-link" href="/best-book-for-cbse-class-10-ai">the best book for Class 10 AI</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. What does each unit ask?</p>
      <h2>AI class 10 book exercise answers: the chapter map</h2>
      <p class="bx-lede">Each handbook unit ends in a fixed set of exercise types. The table maps them, with the marks the unit carries in the 2026-27 theory paper, so you can see where answer practice pays most.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Handbook unit</th><th scope="col">Main sessions</th><th scope="col">End-of-unit exercise types</th><th scope="col">Theory marks 2026-27</th></tr></thead>
        <tbody>
          <tr><td>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI</td><td>Project cycle, AI domains, ethical frameworks, bioethics</td><td>12 MCQs, assertion-reasoning, Reflection Time, a case on business ethics</td><td class="bx-num">7</td></tr>
          <tr><td>Unit 2: Advanced Concepts of Modeling in AI</td><td>AI, ML and DL; rule-based and learning-based models; supervised, unsupervised, reinforcement; neural networks</td><td>12 MCQs, assertion-reasoning, Reflection Time, name-the-learning-type cases</td><td class="bx-num">11</td></tr>
          <tr><td>Unit 3: Evaluating Models</td><td>Train-test split, accuracy and error, confusion matrix, precision, recall, F1, ethics of evaluation</td><td>10 MCQs (several calculated), Reflection Time, assertion-reasoning, choose-the-metric and compute-the-metrics cases</td><td class="bx-num">10</td></tr>
          <tr><td>Unit 4: Statistical Data</td><td>No-code and low-code AI, statistics concepts, Orange on the penguins data</td><td>Two sets of 5 MCQs, answer briefly, answer in detail, Reflection Time</td><td>practical only</td></tr>
          <tr><td>Unit 5: Computer Vision</td><td>CV tasks, pixels, RGB and grayscale, no-code tools, convolution, CNN layers, OpenCV</td><td>12 MCQs, assertion-reasoning, Reflection Time with pixel-colour items, scenario cases</td><td class="bx-num">4</td></tr>
          <tr><td>Unit 6: Natural Language Processing</td><td>NLP stages, chatbots, text normalisation, Bag of Words, TFIDF, sentiment in Orange</td><td>12 MCQs, assertion-reasoning, Reflection Time with normalisation and a step-by-step TFIDF</td><td class="bx-num">8</td></tr>
          <tr><td>Unit 7: Advance Python</td><td>Not in the handbook</td><td>Practical file, practical exam and viva</td><td>practical only</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Reflection Time</h3><p>Short and long answers: define, explain with an example, differentiate, justify a statement. These are the board's 2-mark and 4-mark shapes.</p></div>
      <div class="bx-card"><h3>Cases and scenarios</h3><p>A short situation, then a question that needs a concept applied to it. Unit 3's cases add a calculation.</p></div>
      <div class="bx-card"><h3>Assertion-reasoning</h3><p>Two statements and four fixed options. They appeared in Section A of the 2025 and 2026 board papers.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="answers-1">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How do I answer the written exercises?</p>
      <h2>Facilitator handbook solutions, Units 1 and 2: model answers by question type</h2>
      <p class="bx-lede">A handbook answer scores when it opens with a one-line definition, adds an example, uses the unit's own terms and stops at the length the marks deserve. The questions below are our own, written in the handbook's shapes.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Type: justify why something is needed (Unit 1)</h3>
        <p><b>Q.</b> Why should a team building an AI system follow an ethical framework? (3 marks)</p>
        <p><b>Model answer.</b> An ethical framework is a set of principles that guides decisions about right and wrong. An AI system makes decisions at scale, so a hidden bias or unsafe choice affects thousands of people at once. A framework makes the team check fairness, privacy and harm at each stage of the project cycle, before the system is deployed. For example, a loan-approval AI checked against a rights-based framework would be tested to make sure it does not refuse applicants because of where they live.</p>
        <p class="bx-muted">Why it scores: definition, the reason specific to AI, the link to the project cycle, one concrete example.</p>
        <h3 class="bx-mt-40">Type: apply principles to a case (Unit 1)</h3>
        <p><b>Q.</b> A fitness app's AI shares users' heart-rate data with insurers without asking. Which principle of bioethics is broken, and what should change? (2 marks)</p>
        <p><b>Model answer.</b> Respect for autonomy is broken, because users were not told and did not agree. The app should ask for clear consent and let users refuse without losing the service.</p>
      </div>
      <div>
        <h3>Type: differentiate (Unit 2)</h3>
        <p><b>Q.</b> Differentiate between classification and clustering. (2 marks)</p>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Classification</th><th scope="col">Clustering</th></tr></thead>
            <tbody>
              <tr><td>Supervised: trained on labelled data</td><td>Unsupervised: works on unlabelled data</td></tr>
              <tr><td>Puts each item into a known class</td><td>Finds groups that were not named in advance</td></tr>
              <tr><td>Example: marking a leaf photo "healthy" or "diseased"</td><td>Example: grouping shoppers by buying habits</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-muted">A table with two or three matched rows is the clearest format for any "differentiate" question.</p>
        <h3 class="bx-mt-40">Type: name the learning type and say why (Unit 2)</h3>
        <ol class="bx-qlist">
          <li>A drone learns to land by trying, failing and being scored on each attempt. <b>Reinforcement</b>: it learns from rewards and penalties, not labels.</li>
          <li>A hospital model learns from past scans already marked "fracture" or "no fracture". <b>Supervised</b>: the data is labelled.</li>
          <li>A news site sorts thousands of untagged articles into topic groups. <b>Unsupervised</b>: no labels; it finds the groups itself.</li>
        </ol>
        <p>Every Unit 2 shape, with the neural-network layers, is drilled on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">Unit 2 advanced modeling questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="answers-2">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. And the numerical exercises?</p>
      <h2>NCERT AI class 10 solutions for the numerical exercises: Units 3, 5 and 6</h2>
      <p class="bx-lede">Three handbook units end in work that needs a method, not a memory: metrics from a confusion matrix, pixel colours from RGB values, and TFIDF step by step. Here is each method on our own data.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Unit 3: draw the matrix, then compute the metrics</h3>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Our case</b><span>bad mango = positive</span></figcaption>
  <pre>A camera sorts 1,000 mangoes.
It rejects 150; 120 of them are bad.
It passes 850; 50 of those are bad.

            Actually bad  Actually good
Rejected      TP = 120      FP = 30
Passed        FN = 50       TN = 800

Accuracy  = (120 + 800) / 1000 = 0.92
Precision = 120 / (120 + 30)   = 0.80
Recall    = 120 / (120 + 50)   = 0.71
F1 = 2 x 0.80 x 0.71 / 1.51    = 0.75</pre>
  <p class="bx-code-note">Write each formula before the numbers. The formula alone earns a step mark.</p>
</figure>
        <p class="bx-mt-40"><b>Choose-the-metric type.</b> State which error is worse, then name the metric that controls it.</p>
        <ul class="bx-check">
          <li><b>Smoke alarm:</b> a missed fire is worse than a false alarm, so <b>recall</b>.</li>
          <li><b>Plagiarism checker:</b> wrongly accusing an honest student is worse, so <b>precision</b>.</li>
          <li><b>Mango sorter above:</b> 50 bad mangoes reach customers, so the seller would push recall up.</li>
        </ul>
        <p>Ten more matrices are solved on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>.</p>
      </div>
      <div>
        <h3>Unit 5: colour of a pixel from its RGB values</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">R, G, B</th><th scope="col">Colour</th><th scope="col">Why</th></tr></thead>
            <tbody>
              <tr><td>255, 0, 255</td><td>Magenta</td><td>Full red and full blue, no green</td></tr>
              <tr><td>0, 255, 255</td><td>Cyan</td><td>Full green and full blue</td></tr>
              <tr><td>128, 128, 128</td><td>Mid grey</td><td>Equal values give a shade of grey</td></tr>
              <tr><td>255, 0, 0</td><td>Red</td><td>Only the red channel is on</td></tr>
            </tbody>
          </table>
        </div>
        <p class="bx-muted">Check the order the question gives: some write R, B, G. Read each letter, not the position.</p>
        <h3 class="bx-mt-40">Unit 6: TFIDF, step by step</h3>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Normalise</h4><p>D1 "Riya plays chess.", D2 "Riya reads books.", D3 "Aman plays football." Lowercase and drop the full stops.</p></li>
          <li class="bx-step"><h4>Vocabulary and document frequency</h4><p>riya 2, plays 2, chess 1, reads 1, books 1, aman 1, football 1.</p></li>
          <li class="bx-step"><h4>IDF = log(N / DF), N = 3</h4><p>Words in two documents: log(3/2) = 0.176. Words in one: log(3) = 0.477.</p></li>
          <li class="bx-step"><h4>TFIDF = TF x IDF</h4><p>In D1, "chess" scores 0.477 and "riya" and "plays" 0.176 each, so "chess" is the word that marks D1 out.</p></li>
        </ol>
        <p>The full method on a longer corpus is on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="ar">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How are the other types answered?</p>
      <h2>Assertion-reasoning and Unit 4 answers: the method that fits every handbook exercise</h2>
      <p class="bx-lede">An assertion-reasoning item is solved in three checks: is A true, is R true, and does R explain A. Answer them in that order and the four options become easy to tell apart.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>An assertion-reasoning item of our own</h3>
        <p><b>Assertion (A):</b> A model with high accuracy can still be a poor model.<br><b>Reason (R):</b> When one class is much larger than the other, a model can score high accuracy by always predicting the larger class.</p>
        <ol class="bx-qlist">
          <li>Is A true? Yes.</li>
          <li>Is R true? Yes.</li>
          <li>Does R explain A? Yes: class imbalance is exactly why accuracy can mislead.</li>
        </ol>
        <p><b>Answer:</b> both A and R are true, and R is the correct explanation of A. More items in this format are on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">assertion and reason questions</a>.</p>
      </div>
      <div>
        <h3>Unit 4: answer briefly, then in detail</h3>
        <p><b>Briefly (1 to 2 marks).</b> <i>Do no-code tools need programming knowledge?</i> No. They work by dragging and connecting visual blocks, so a person with no coding background can build a model, though knowing the AI project cycle still helps.</p>
        <p><b>In detail (4 marks).</b> <i>Give the benefits and limits of no-code AI tools.</i> Benefits: quick to build, usable by non-programmers, low cost, results shown visually. Limits: less control over the model, harder to customise for unusual problems, and reliance on what the tool offers. A low-code tool sits between the two, letting small pieces of code be added. Example: Orange, where a decision tree is built from widgets on penguin data.</p>
        <p class="bx-muted">Unit 4 is assessed in the practical and viva, so say these answers aloud as well as writing them.</p>
      </div>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Marks</th><th scope="col">Length to aim for</th><th scope="col">What it must contain</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>one line or a word</td><td>the exact term</td></tr>
          <tr><td>2</td><td>two or three sentences</td><td>definition plus one example or difference</td></tr>
          <tr><td>4</td><td>six to eight sentences or a labelled table</td><td>definition, explanation, two points or steps, an example, the unit's keywords</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is the handbook taught live?</p>
      <h2>How the live batch works through the handbook exercises</h2>
      <p class="bx-lede">Reading a solution shows one answer. Writing your own, then having it marked against what CBSE rewards, is what changes the next answer.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Unit taught from the handbook</h3><p>Monday's class follows the handbook's own sessions, with its examples and no-code walkthroughs done live, so the exercise questions refer to things students have actually seen.</p></div>
      <div class="bx-card"><h3>Exercises answered, then marked</h3><p>On Wednesday students write answers to new questions in the unit's exercise shapes. The teacher marks a few on a shared screen, showing where the keyword was missing or the example too vague.</p></div>
      <div class="bx-card"><h3>Gaps the handbook leaves</h3><p>Part A and Unit 7 are not in the handbook, so the batch adds them: Part A drills from November and Python practicals for the file through the year.</p></div>
    </div>
    <p class="bx-mt-40">
      Any student can stop the class to ask about a handbook exercise they are stuck on, and it is worked through for everyone. Short unit notes to read before attempting the exercises are on <a class="bx-link" href="/cbse-class-10-ai-notes">Class 10 AI notes</a>, and the important questions for each mark band are on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Work through the handbook in the batch, or one to one',
  chooseLede: 'Both follow the handbook in order and mark answers the same way. The batch keeps a steady unit-a-fortnight pace alongside classmates; one to one goes straight to the units and exercise types your child finds hardest. Monthly billing, no admission fee, stop after any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students per teacher',
    'Each handbook unit taught, then its exercise types answered',
    'Written answers marked on screen against CBSE style',
    'Part A and Python practicals added where the handbook stops'
  ],
  choosePersonal: [
    'Days and hours chosen by you, in your time zone',
    'Starts with the hardest handbook unit, not the first',
    'Each written answer redrafted until it earns full marks',
    'Numerical exercises repeated with new data until steady',
    'Same 417 syllabus and the same teachers'
  ],
  chooseAfter: 'A student who understands the handbook but writes answers that come back with half marks often needs only a few one to one sessions on answer structure. A student who has not yet read most units gains more from the batch, which teaches each one before its exercises. Fees are shown in your own currency.',
  zonesH2: 'Help with the Class 10 AI handbook for CBSE students abroad',
  zonesLede: 'CBSE schools outside India teach from the same free handbook and sit the same 417 paper. These are the batch times in the Gulf and East Africa this winter.',
  zonesAfter: 'If 9:00 PM IST does not suit your evening, one to one runs when you choose. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI textbook solutions',
  faqH2: 'What students ask about class 10 AI textbook solutions',
  faqs: [
    ['Which is the textbook for CBSE Class 10 AI 417?', 'The official book is the AI Facilitator Handbook for Class X, published free by CBSE with Intel on cbseacademic.nic.in. Its units match the 2026-27 curriculum for Part B Units 1 to 6. Schools may also use a publisher\'s textbook written to the same units.'],
    ['Is there an NCERT book for class 10 Artificial Intelligence?', 'No. AI 417 is a CBSE skill subject, and its book is the CBSE AI Facilitator Handbook, not an NCERT textbook. Searches for NCERT AI class 10 solutions usually mean answers to the handbook exercises, which this page maps unit by unit.'],
    ['Where can I find the class 10 AI handbook pdf?', 'On cbseacademic.nic.in, under the Skill Education material for AI. The current Class X file is named AI_Facilitators_Handbook_X.pdf. An older 2021 Class 10 handbook is still hosted on the site, but it follows the earlier chapter list, so check that the units match the 2026-27 curriculum.'],
    ['Does the CBSE AI handbook have answers to the exercises?', 'Only for the Test Yourself MCQs, in a one-page answer key at the end of the book. The Reflection Time questions, the cases, the assertion-reasoning items and the calculations have no printed answers, which is why students look for solutions.'],
    ['Are facilitator handbook solutions enough for the board exam?', 'They cover the concepts, but the board paper uses new cases and new numbers. What carries over is the method: definition, example and keywords for written answers, and formula-first working for numericals. Practise that method on fresh questions, then sit timed sample papers.'],
    ['Does the handbook cover Advance Python and Part A?', 'No. The Class X handbook covers Part B Units 1 to 6. Unit 7, Advance Python, is in the 2026-27 curriculum and assessed in the practical, and the Part A employability skills units are set out separately by CBSE. Plan for both alongside the handbook, because together they carry the 10 Part A marks and part of the practical.'],
    ['How should I write answers to handbook reflection questions?', 'Start with a one-line definition in the unit\'s own terms, add an example that fits, and size the answer to the marks: two or three sentences for 2 marks, six to eight or a table for 4. For "differentiate" questions, a two-column table scores most clearly.'],
    ['Is copying answers from solution websites a good idea?', 'Reading a model answer is useful; memorising one is risky, because board questions change the case and the numbers. Write your own answer first, compare it with a model, and note what the model has that yours lacks. That habit improves every later answer.'],
    ['Do your classes teach from the CBSE handbook?', 'Yes. Each unit is taught from the handbook, its exercise types are answered in class and marked live, and Part A and Python practicals are added because the handbook leaves them out. It is all covered by the monthly fee shown on this page, in your own currency, with a free first class.']
  ],
  startH2: 'Bring a handbook exercise to a free class',
  startHtml: `        <p>In the free first class your child can bring a handbook exercise they found hard. The teacher works through how to answer it, then your child writes an answer to a fresh question of the same type and sees it marked. Afterwards the mentor tells you which units need the most work and whether the batch or one to one fits better.</p>
        <p>Want to see the whole subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI handbook answers'
};
