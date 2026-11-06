// CBSE Class 10 AI (417): unit-wise revision notes for 2026-27.
// Intent: "class 10 AI notes", "AI class 10 notes pdf", "417 revision notes",
// "part B notes class 10 AI", "AI class 10 short notes".
// Distinct from the unit pages (which teach and question one unit in depth), the
// one-shot page (a 90-minute read) and the formula sheet: this page is one compact
// revision SHEET per unit, in the exact order of the CBSE 2026-27 curriculum
// (cbseacademic.nic.in, Curriculum27/Sec/417-AI-X.pdf, read 2026-11-06), each headed
// with its theory marks and whether it is examined in theory or practical.
// Session order and marks are copied as facts from that curriculum: Part A five units
// x 2; U1 7, U2 11, U3 10, U4 practical, U5 4, U6 8, U7 practical; Part C 15/15/5/10/5.
// The curriculum assesses CV theory on tasks, pixels, resolution, pixel value, grayscale
// and RGB; convolution, CNN layers and the no-code tools sit under the practical table,
// and the sheet says so. The eight suggested programs are CBSE's own list.
// No PDF is offered (none exists); the page says to print it with the browser.
// Every numerical recomputed with python3 and numpy on 2026-11-06 (scratch calc):
// TP 35, FP 5, FN 15, TN 45: n 100, accuracy 0.80, error 0.20, precision 0.875,
// recall 0.70, F1 0.7778 (0.78; plain average 0.7875), wrong 20; 64 x 64 grayscale
// 4,096 values, RGB 12,288; IDF log10(4/1) = 0.602, log10(4/2) = 0.301; perceptron
// 0.7 x 0.4 + 0.2 x 1 = 0.48; data 12, 15, 15, 18, 20: mean 16, median 15, mode 15;
// 2^8 = 256.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-notes',
  code: 'cb03',
  board: 'cbse',
  themeColor: '#73304A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Notes 2026-27 (417): Unit-Wise Revision Sheets',
  description: 'Class 10 AI notes for CBSE 417, 2026-27: one revision sheet per unit in the CBSE session order, with unit marks, key terms, formulas and what gets asked.',
  ogTitle: 'Class 10 AI Notes, One Revision Sheet per Unit',
  ogDesc: 'Short, printable revision notes for CBSE Class 10 AI (417) in the order the 2026-27 curriculum teaches it: Part A, the five theory units with their marks, and the two practical-only units, each with key terms, a worked line and what the paper asks.',
  twDesc: 'One printable revision sheet per 417 unit, in CBSE order, with marks, key terms and what the paper asks.',
  headline: 'Class 10 AI Notes for 2026-27: One Revision Sheet per Unit, in the CBSE Order',
  courseName: 'CBSE Class 10 AI (417) Unit-by-Unit Revision, Live Online',
  courseDesc: 'Live online revision of CBSE Class 10 Artificial Intelligence (417), session 2026-27, taught in the curriculum order: every theory unit revised from its key terms to board-style questions, the practical-only units prepared for the lab exam and viva, Part A employability skills covered for its ten marks, with doubts answered in every Monday and Wednesday 9:00 PM IST class, or one to one at a time the family chooses.',
  brandTag: '417 &middot; Notes',
  navLinks: [['#map', 'Unit map'], ['#u12', 'Units 1 and 2'], ['#u3', 'Unit 3'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Notes, unit wise']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Revision notes 2026-27',
  h1: 'Class 10 AI notes for 2026-27, one sheet per unit in the order CBSE teaches it.',
  lede: 'These class 10 AI notes follow the CBSE 417 curriculum for 2026-27 unit by unit, in its own session order. Each sheet opens with the unit\'s theory marks and how it is examined, then gives the terms to know, the lists to learn in order, one worked line where numbers are involved, and the way the board has asked it. Read one sheet a day. In our Monday and Wednesday batch, each sheet becomes a class: taught, questioned and marked.',
  heroNote: 'Live online &middot; one sheet per unit &middot; unit marks on every sheet &middot; worked numbers checked &middot; practical units flagged &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live revision classes for CBSE Class 10 AI 417.',
  timetable: {
    label: 'How the sheets are revised',
    title: 'Unit revision',
    right: 'CBSE 417',
    rows: [
      ['Monday, one unit sheet taught', '9:00', 'PM IST'],
      ['Wednesday, the same unit tested', '9:00', 'PM IST'],
      ['Theory units with marks', '5', 'units'],
      ['Part B theory marks', '40', 'of 50']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM local. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM local. <b>Kenya:</b> 6:30 PM local. <b>Nepal:</b> 9:15 PM local. <b>Singapore and Malaysia:</b> close to midnight, so one to one suits better.',
    stamps: ['Theory 50, practical 50', 'Session 2026-27']
  },
  picksH2: 'Courses behind these revision notes',
  picksLede: 'The 417 course whose Class 10 batch revises unit by unit from these sheets, the Python course for the practical-only Advance Python unit, and the Orange course for the Statistical Data unit and its no-code case studies.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, taught in curriculum order, with each unit closed by a short written test in the board format.' },
    { slug: 'python-complete-masterclass-teens', code: 'Unit 7 / Python', h3: 'Python for Teens', p: 'Jupyter, lists, NumPy and Matplotlib: everything the eight suggested programs and the lab exam need.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Unit 4 / Orange', h3: 'Visual ML with Orange', p: 'The no-code tool behind the penguin, coral bleaching and sentiment walkthroughs, used hands-on rather than read about.' }
  ],
  capsule: 'Class 10 AI notes for 2026-27 should follow the CBSE 417 curriculum in order: Part A employability skills (five units, 2 marks each), then Part B Unit 1, Revisiting AI Project Cycle and Ethical Frameworks (7 marks), Unit 2, Advanced Concepts of Modeling (11), Unit 3, Evaluating Models (10), Unit 5, Computer Vision (4) and Unit 6, Natural Language Processing (8). Unit 4, Statistical Data, and Unit 7, Advance Python, are practical only. Modern Age Coders revises each unit live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Sheet 0. What is in the subject?</p>
      <h2>What do the class 10 AI notes need to cover in 2026-27?</h2>
      <p class="bx-lede">Twelve units: five short Part A units and seven Part B units. This map, taken from the CBSE curriculum for the session, shows each unit's marks and where it is examined. Revise in this order and you follow the school timetable too.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Unit, in CBSE order</th><th scope="col">Theory marks</th><th scope="col">Examined in</th><th scope="col">Sessions the curriculum names</th></tr></thead>
        <tbody>
          <tr><td>Part A, Units 1 to 5: Communication, Self-Management, ICT, Entrepreneurial and Green Skills</td><td class="bx-num">10</td><td>Theory paper</td><td>Two marks per unit</td></tr>
          <tr><td>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI</td><td class="bx-num">7</td><td>Theory paper</td><td>Project cycle, the three domains, ethical frameworks, bioethics case study</td></tr>
          <tr><td>Unit 2: Advanced Concepts of Modeling in AI</td><td class="bx-num">11</td><td>Theory paper</td><td>AI, ML and DL; data terms; rule-based and learning-based; learning types; neural networks</td></tr>
          <tr><td>Unit 3: Evaluating Models</td><td class="bx-num">10</td><td>Theory paper</td><td>Need for evaluation, train-test split, accuracy and error, classification metrics, ethics of evaluation</td></tr>
          <tr><td>Unit 4: Statistical Data</td><td class="bx-num">0</td><td>Practical only</td><td>No-code AI, statistics concepts, Orange, the penguins case study</td></tr>
          <tr><td>Unit 5: Computer Vision</td><td class="bx-num">4</td><td>Theory and practical</td><td>Tasks, pixels, resolution, grayscale and RGB in theory; convolution, CNN and no-code tools in practical</td></tr>
          <tr><td>Unit 6: Natural Language Processing</td><td class="bx-num">8</td><td>Theory and practical</td><td>Applications, stages, chatbots, text normalisation, Bag of Words; sentiment walkthrough in practical</td></tr>
          <tr><td>Unit 7: Advance Python</td><td class="bx-num">0</td><td>Practical only</td><td>Jupyter, virtual environments, packages, Python basics</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Read the marks before you plan</h3>
        <p>Units 2 and 3 together carry 21 of the 40 Part B theory marks, so their sheets deserve the most passes. Computer Vision is only 4 theory marks, yet it fills the most practical hours of any unit, which is why its sheet below separates the two halves.</p>
      </div>
      <div>
        <h3>About a PDF</h3>
        <p>There is no separate download. Use your browser's Print and choose Save as PDF: the sheets below print cleanly, one unit after another. If your school uses an older chapter list, map it to these unit names before you start.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="u12">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Sheets 1 and 2. 18 marks between them</p>
      <h2>Part B notes for class 10 AI: Unit 1 and Unit 2</h2>
      <p class="bx-lede">Unit 1 is mostly lists and one framework to apply. Unit 2 is the largest theory unit and is mostly about telling one kind of model from another.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Sheet 1. Revisiting AI Project Cycle and Ethical Frameworks (7 marks)</h3>
        <ul class="bx-check">
          <li><b>Project cycle, in order:</b> Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation. Some newer CBSE material adds Deployment as a final stage; if your school teaches it, learn it after Evaluation.</li>
          <li><b>4Ws canvas:</b> Who (stakeholders), What (the problem and its evidence), Where (the context or situation), Why (the benefit of solving it). Who is never "When".</li>
          <li><b>Three domains:</b> Statistical Data (numbers and tables), Computer Vision (images and video), Natural Language Processing (text and speech).</li>
          <li><b>Ethical framework:</b> a set of principles that guide right and wrong choices when AI is built and used, so that it does not cause unintended harm.</li>
          <li><b>Two types:</b> sector-based (written for one field, such as bioethics for healthcare) and value-based (rights-based, utility-based, virtue-based).</li>
          <li><b>Four bioethics principles:</b> respect for autonomy, do not harm, ensure maximum benefit, give justice.</li>
        </ul>
        <p><b>Asked as:</b> naming a stage from a description, sorting a framework into its type, and a case where a biased system is judged with the bioethics principles. The full unit is on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">project cycle and ethics</a>.</p>
      </div>
      <div>
        <h3>Sheet 2. Advanced Concepts of Modeling in AI (11 marks)</h3>
        <ul class="bx-check">
          <li><b>AI, ML, DL:</b> AI is the widest idea; ML is AI that learns from data; DL is ML with many-layered neural networks. DL sits inside ML, which sits inside AI.</li>
          <li><b>Data terms:</b> features are the inputs a model uses; a label is the answer it learns to predict; training data teaches; testing data checks.</li>
          <li><b>Rule-based against learning-based:</b> rules are written by people and stay fixed; a learning-based model finds its own patterns and improves with data.</li>
          <li><b>Supervised (labelled):</b> classification gives a category, regression gives a number.</li>
          <li><b>Unsupervised (unlabelled):</b> clustering forms groups, association finds items that occur together.</li>
          <li><b>Reinforcement:</b> an agent learns by reward and penalty, trial after trial.</li>
          <li><b>Deep learning:</b> ANN, the general network; CNN, the network built for images.</li>
          <li><b>Neural network layers:</b> input (receives data, no processing), hidden (all the processing), output (gives the result).</li>
        </ul>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>How a perceptron decides</b><span>one line</span></figcaption>
  <pre>inputs 0.7 and 0.2, weights 0.4 and 1
sum = 0.7 x 0.4 + 0.2 x 1 = 0.48
if 0.48 passes the threshold: fire, else: do not</pre>
  <p class="bx-code-note">Multiply each input by its weight, add, add the bias if one is given, then compare with the threshold.</p>
</figure>
        <p><b>Asked as:</b> classify-this-scenario items, a labelled diagram of the layers, and supervised against unsupervised with examples. Drills are on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">Unit 2 modeling questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="u3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Sheet 3. 10 marks, most of them numbers</p>
      <h2>417 revision notes for Evaluating Models: every formula on one sheet</h2>
      <p class="bx-lede">Evaluation tells you how good a model is before anyone relies on it. The sheet is short because the unit is one table and four formulas, used again and again.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ul class="bx-check">
          <li><b>Why evaluate:</b> to find a model's strengths and weaknesses and improve it in a feedback loop before deployment.</li>
          <li><b>Train-test split:</b> keep part of the data (often 20 to 30 per cent) aside; train on the rest; test on the unseen part. Testing on training data hides overfitting.</li>
          <li><b>Overfitting:</b> the model memorises its training data and does badly on new data.</li>
          <li><b>Accuracy and error:</b> accuracy is the share of correct predictions; error is the share of wrong ones, so the two add to 1.</li>
          <li><b>Confusion matrix:</b> TP (predicted yes, really yes), FP (predicted yes, really no), FN (predicted no, really yes), TN (predicted no, really no).</li>
          <li><b>Pick the metric by the costly mistake:</b> when a miss is dangerous (disease, fraud), recall; when a false alarm is costly (spam to the inbox, a wrong arrest), precision; when both matter, F1.</li>
          <li><b>Ethics of evaluation:</b> bias in the test data, transparency about how the score was found, and accuracy that holds for every group.</li>
        </ul>
      </div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The four formulas, worked once</b><span>TP 35, FP 5, FN 15, TN 45</span></figcaption>
  <pre>Accuracy  = (TP + TN) / total
          = (35 + 45) / 100 = 0.80
Error     = 1 - 0.80 = 0.20
Precision = TP / (TP + FP)
          = 35 / 40 = 0.875
Recall    = TP / (TP + FN)
          = 35 / 50 = 0.70
F1        = 2 x P x R / (P + R)
          = 2 x 0.875 x 0.70 / 1.575
          = 0.78 (approx.)</pre>
  <p class="bx-code-note">The plain average of precision and recall would give 0.7875. F1 is always pulled toward the lower of the two, which is the point of it.</p>
</figure>
    </div>
    <p class="bx-mt-40">Ten graded problems with full working are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="u56">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Sheets 5 and 6. 12 marks between them</p>
      <h2>AI class 10 short notes: Computer Vision and Natural Language Processing</h2>
      <p class="bx-lede">Unit 4 comes between them in the curriculum but is practical only, so its sheet is in the next section. Here are the two domains that the theory paper asks about.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Sheet 5. Computer Vision (4 marks)</h3>
        <ul class="bx-check">
          <li><b>Computer vision:</b> the AI domain that lets machines take in images or video and draw meaning from them. Image processing only changes an image; CV understands it, so CV is the wider idea.</li>
          <li><b>Tasks for one object:</b> classification (what is it?), classification plus localisation (what and where?).</li>
          <li><b>Tasks for many objects:</b> object detection (boxes around each), instance segmentation (exact outline of each).</li>
          <li><b>Pixel:</b> the smallest unit of a digital image. <b>Resolution:</b> width x height in pixels.</li>
          <li><b>Pixel value:</b> in a byte image each pixel is 8 bits, so 2<sup>8</sup> = 256 values, 0 (black) to 255 (white).</li>
          <li><b>Grayscale:</b> one value per pixel. <b>RGB:</b> three values per pixel, one per channel. A 64 x 64 image stores 4,096 values in grayscale and 12,288 in RGB.</li>
          <li><b>Practical side only:</b> convolution with a kernel, CNN layers, and the no-code tools (Teachable Machine, Lobe, Orange with the coral bleaching case).</li>
        </ul>
        <p>Pixel and kernel arithmetic, worked, is on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">Unit 5 computer vision questions</a>.</p>
      </div>
      <div>
        <h3>Sheet 6. Natural Language Processing (8 marks)</h3>
        <ul class="bx-check">
          <li><b>NLP:</b> the AI domain that lets machines read, understand and produce human language, which is ambiguous in ways code never is.</li>
          <li><b>Applications the curriculum lists:</b> voice assistants, auto-generated captions, translation, sentiment analysis, text classification, keyword extraction.</li>
          <li><b>Stages:</b> lexical analysis (words), syntactic analysis (grammar), semantic analysis (meaning), then logical analysis of the whole text.</li>
          <li><b>Chatbots:</b> a script bot follows fixed replies and suits narrow tasks; a smart bot learns, handles open questions and uses large data.</li>
          <li><b>Text normalisation:</b> sentence segmentation, tokenisation, removing stop words and special characters, converting case, then stemming or lemmatisation.</li>
          <li><b>Stemming against lemmatisation:</b> stemming cuts endings and may leave a non-word; lemmatisation returns a dictionary word.</li>
          <li><b>Bag of Words, four steps:</b> normalise, build the dictionary, make a vector per document, stack the vectors into a table.</li>
          <li><b>TFIDF:</b> term frequency x log(N / documents containing the word). In 4 documents, a word in one of them has IDF log10 4 = 0.602; in two of them, 0.301; in all four, 0.</li>
        </ul>
        <p>Corpora worked to the last cell are on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="practical">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Sheets 4, 7 and Part A</p>
      <h2>Notes for the practical-only units and the ten Part A marks</h2>
      <p class="bx-lede">Statistical Data and Advance Python earn their marks in the lab, file and viva, not the written paper. Part A is the reverse: pure theory, ten marks, and often the quickest to secure.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Sheet 4. Statistical Data (practical only)</h3>
        <ul class="bx-check">
          <li><b>No-code AI:</b> building models by dragging blocks instead of writing code; low-code needs a little code.</li>
          <li><b>Statistics to know:</b> mean, median, mode. For 12, 15, 15, 18, 20 they are 16, 15 and 15.</li>
          <li><b>Orange Data Mining:</b> the CBSE no-code tool; the penguin species case study takes data through exploration, modelling and evaluation.</li>
        </ul>
        <h3 class="bx-mt-40">Sheet 7. Advance Python (practical only)</h3>
        <ul class="bx-check">
          <li><b>Setup:</b> Jupyter Notebook, virtual environments, installing packages.</li>
          <li><b>CBSE's eight suggested programs:</b> add two lists element by element; mean, median and mode with NumPy; a line chart; a scatter chart; read a CSV and show ten rows; show a CSV's information; read and display an image; read an image and find its shape.</li>
        </ul>
        <p>Each program, written and explained, is on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
      </div>
      <div>
        <h3>Part A short notes (2 marks per unit)</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Unit</th><th scope="col">Learn these</th></tr></thead>
            <tbody>
              <tr><td>Communication Skills</td><td>The 7 Cs (clear, concise, concrete, correct, coherent, complete, courteous); verbal, non-verbal and visual; parts of speech and sentence types</td></tr>
              <tr><td>Self-Management Skills</td><td>Stress management, self-awareness, self-motivation steps, SMART goals, time management</td></tr>
              <tr><td>ICT Skills</td><td>Device care, viruses and antivirus, spam, keeping personal data safe</td></tr>
              <tr><td>Entrepreneurial Skills</td><td>What entrepreneurs do, their qualities, the entrepreneurship process</td></tr>
              <tr><td>Green Skills</td><td>Sustainable development, the SDGs, organic farming, saving water and energy</td></tr>
            </tbody>
          </table>
        </div>
        <p>Every Part A unit with short answers is on <a class="bx-link" href="/cbse-class-10-ai-employability-skills-part-a">Part A employability skills</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">How do notes become marks?</p>
      <h2>How to revise from AI class 10 notes, and what the live class adds</h2>
      <p class="bx-lede">Notes are for recall, not first learning. A student who reads a sheet and then answers three questions on it remembers far more than one who reads it three times.</p>
    </div>
    <ol class="bx-qlist">
      <li><b>Read one sheet, cover it, write it out.</b> Whatever you could not write is what you revise tomorrow.</li>
      <li><b>Answer in the board's word limits.</b> Turn two bullets into a 20 to 30 word answer and one list into a 50 to 80 word answer.</li>
      <li><b>Redo the worked line with new numbers.</b> The formula sheet is only safe once you can apply it without looking.</li>
      <li><b>Go round the units again in a week</b>, weighted by marks: Units 2 and 3 twice, Computer Vision once.</li>
    </ol>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>A sheet a Monday</h3><p>Each Monday class teaches one unit from its sheet, with examples on screen and every doubt taken as it comes up, not saved for later.</p></div>
      <div class="bx-card"><h3>Tested on Wednesday</h3><p>The Wednesday class opens with a short written test on the same unit, marked in front of the class against the board's value points.</p></div>
      <div class="bx-card"><h3>Full revision before boards</h3><p>From January the batch goes round all the sheets again, in mark order, with timed papers between rounds.</p></div>
    </div>
    <p class="bx-mt-40">For a single sitting through the whole subject, read <a class="bx-link" href="/cbse-class-10-ai-one-shot-revision">the Class 10 AI one shot revision</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Revise unit by unit in the batch, or one to one',
  chooseLede: 'The same sheets and the same teachers, in two formats. The batch revises the units in CBSE order at a steady weekly pace; one to one spends every hour on the units your child finds hardest. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One unit sheet taught, then tested, each week',
    'Practical units prepared for the lab and viva',
    'A second full round of every unit from January'
  ],
  choosePersonal: [
    'Days and time set by you, in your own time zone',
    'Units taken in the order your child needs',
    'Weak sheets taught again with fresh examples',
    'Written answers checked against the word limits',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'If your child has the notes but forgets them in a test, the batch rhythm of teach on Monday, test on Wednesday usually fixes it. If one or two units are the whole problem, a few one to one hours on those sheets is the faster route. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI revision for CBSE students in the Gulf and abroad',
  zonesLede: 'The 417 curriculum and its unit marks are the same in every CBSE school, in Muscat as in Mumbai. These are the batch hours in local time this winter.',
  zonesAfter: 'When the evening class clashes with school or sport, one to one runs at a local hour you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI notes',
  faqH2: 'What students ask about class 10 AI notes',
  faqs: [
    ['Where can I find class 10 AI notes for 2026-27?', 'This page has one revision sheet for each unit of the CBSE 417 curriculum for 2026-27, in the order CBSE lists them, with each unit\'s theory marks. The sheets cover Part A, the five theory units and the two practical-only units.'],
    ['Is there an AI class 10 notes PDF?', 'We do not offer a separate file. Open this page, choose Print in your browser and select Save as PDF; the unit sheets print one after another, with the marks table first. That way your copy always matches the latest version of the page, and you can print only the units you want.'],
    ['Which chapters are in class 10 AI for 2026-27?', 'Part B has seven units: Revisiting AI Project Cycle and Ethical Frameworks, Advanced Concepts of Modeling, Evaluating Models, Statistical Data, Computer Vision, Natural Language Processing and Advance Python. Part A has five employability skills units: communication, self-management, ICT, entrepreneurial and green skills.'],
    ['Which units are practical only in class 10 AI?', 'Unit 4, Statistical Data, and Unit 7, Advance Python. They carry no theory marks and are assessed through the practical file, the practical exam and the viva. Computer Vision and NLP have both a theory part and a practical part.'],
    ['Which unit carries the most marks in class 10 AI?', 'Unit 2, Advanced Concepts of Modeling in AI, with 11 of the 40 Part B theory marks. Unit 3, Evaluating Models, follows with 10, then Natural Language Processing with 8, the project cycle unit with 7 and Computer Vision with 4.'],
    ['Are these notes enough to score full marks?', 'Notes help you recall what you have learned; they do not replace practice. Pair each sheet with questions in the board shapes, written within the word limits, and timed papers near the exam. That is how our classes use them.'],
    ['What are Part B notes in class 10 AI?', 'Part B is the subject-specific half: the seven AI units, worth 40 theory marks. Part A is the employability skills half, worth 10. Sheets 1 to 7 on this page are the Part B notes; the Part A table covers the other ten marks.'],
    ['How many stages does the AI project cycle have in class 10?', 'The five core stages are Problem Scoping, Data Acquisition, Data Exploration, Modelling and Evaluation. Some newer CBSE material adds Deployment as a sixth, final stage, so learn it too if your school teaches it. Learn the order carefully, because papers ask which stage comes straight after a given one.'],
    ['Do I need Python for the class 10 AI theory paper?', 'No. Advance Python is assessed only in the practical, so the written paper does not ask you to write code. For the lab, learn the eight programs CBSE suggests, such as finding mean, median and mode with NumPy, drawing line and scatter charts, and reading a CSV file.'],
    ['Do your classes follow the same order as these notes?', 'Yes. The batch teaches the units in CBSE order, one sheet at a time, and tests each one the same week. All of it is covered by the monthly fee shown on this page, with no admission fee, and the first class is a free demo.']
  ],
  startH2: 'Revise one unit free with a teacher',
  startHtml: `        <p>In the free first class your child revises one unit sheet with a teacher, then answers a few board-style questions on it, marked on screen. Afterwards the mentor tells you plainly which units look secure, which need work, and whether the batch or one to one would suit better.</p>
        <p>Want to see the questions the board has asked before? Read <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">Class 10 AI previous year papers</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI notes'
};
