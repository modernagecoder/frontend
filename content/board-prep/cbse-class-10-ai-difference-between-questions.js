// CBSE Class 10 AI (417): every "differentiate between" pair in the 2026-27 syllabus,
// each as a comparison table plus a two-point exam answer.
// Intent: "difference between AI ML and DL class 10", "classification vs regression",
// "supervised vs unsupervised", "script bot vs smart bot", "rule based vs learning based",
// "grayscale vs RGB".
// Pairs were taken from the sessions named in the 2026-27 417 curriculum PDF (read
// 2026-11-06): Unit 1 domains and ethical frameworks; Unit 2 AI/ML/DL, rule vs learning,
// the three learning types, classification vs regression, clustering vs association,
// ANN vs CNN; Unit 3 train-test split, accuracy and error, classification metrics;
// Unit 5 theory (CV tasks, pixels, resolution, grayscale and RGB); Unit 6 (natural vs
// computer language, syntax vs semantics, script vs smart bot, normalisation, BoW,
// TFIDF). Convolution, kernels and CNN layers sit in the PRACTICAL part of Unit 5, and
// Units 4 and 7 are practical only, so those pairs are labelled practical and viva.
// Exam evidence described in our own words from the 2026 417 marking scheme: a two-mark
// sector-based vs value-based item and a four-mark AI, ML and DL item with a Venn
// diagram. Nothing is promised for 2027.
// Numbers recomputed with python3 on 2026-11-06 (scratch cb28.py): 100 x 80 grayscale =
// 8,000 values, RGB = 24,000; 2^8 = 256 levels (0 to 255); mean of 2, 3, 3, 12 = 5.0,
// median 3.0; precision 45/50 = 0.90, recall 45/60 = 0.75.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-difference-between-questions',
  code: 'cb28',
  board: 'cbse',
  themeColor: '#4F4A6E',
  dateModified: '2026-11-06',
  title: 'Difference Between AI, ML and DL Class 10: All 417 Pairs',
  description: 'Difference between AI ML and DL class 10, plus every other CBSE 417 differentiate pair for 2026-27, each as a comparison table with a two-point exam answer.',
  ogTitle: 'Difference Between AI, ML and DL Class 10, and Every Other 417 Pair',
  ogDesc: 'Every differentiate question in CBSE Class 10 AI (417), 2026-27: AI vs ML vs DL, classification vs regression, supervised vs unsupervised, script bot vs smart bot, grayscale vs RGB and more, as tables with two-point answers.',
  twDesc: 'Every 417 differentiate pair as a table with a two-point exam answer, starting with AI, ML and DL.',
  headline: 'Difference Between AI, ML and DL Class 10, and Every Other Differentiate Pair in CBSE 417',
  courseName: 'CBSE Class 10 AI (417) Short and Long Answer Practice, Live Online',
  courseDesc: 'Live online writing practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: differentiate and compare questions from every theory unit, answered in class against the marking scheme point by point, with Venn diagrams and tables drawn on screen, every Monday and Wednesday at 9:00 PM IST, or one to one at a time the family chooses.',
  brandTag: '417 &middot; Differentiate pairs',
  navLinks: [['#ai-ml-dl', 'AI, ML and DL'], ['#modeling', 'Modeling pairs'], ['#cv-nlp', 'CV and NLP'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Difference between questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Differentiate questions 2026-27',
  h1: 'Difference between AI, ML and DL in Class 10, and every other pair the 417 paper can ask.',
  lede: 'The difference between AI, ML and DL is the class 10 comparison asked most often, but it is not the only one. This page sets out every differentiate pair in the 2026-27 CBSE 417 syllabus as a short table, then gives a two-point exam answer you can write in under two minutes. In our live classes these are written to time and checked against the marking scheme on screen.',
  heroNote: 'Live online &middot; 34 pairs as tables &middot; two-point answers &middot; Venn diagrams drawn in class &middot; answers checked point by point &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with difference between questions for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When compare questions are written',
    title: 'Differentiate drill',
    right: 'CBSE 417',
    rows: [
      ['Monday, one unit\'s pairs written', '9:00', 'PM IST'],
      ['Wednesday, answers checked on screen', '9:00', 'PM IST'],
      ['Pairs set out on this page', '34', 'tables'],
      ['Points per two-mark answer', '2', 'minimum']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and East Africa:</b> 6:30 PM. <b>Other countries:</b> one to one at a local hour.',
    stamps: ['Two points, both sides', 'Example earns the mark']
  },
  picksH2: 'Courses where these comparisons are taught',
  picksLede: 'The 417 course for the exam itself, the AI and ML course for students who want the ideas behind each pair, and Orange for seeing classification, clustering and evaluation happen without code.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Every unit taught, then its compare questions written to time and checked point by point against the scheme.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Beyond the paper / ML', h3: 'AI and ML for Teens', p: 'Build a classifier and a regressor yourself, and the difference stops being a sentence to memorise.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code / Orange', h3: 'Visual ML with Orange', p: 'Drag a clustering widget beside a classification one and watch labels make the difference.' }
  ],
  capsule: 'AI, ML and DL differ in scope: artificial intelligence is any technique that lets a machine act intelligently, machine learning is the part of AI where the machine learns from data instead of fixed rules, and deep learning is the part of ML that uses many-layered neural networks and very large data, for example to recognise faces. So DL sits inside ML, which sits inside AI. In CBSE Class 10 AI (417), write two clear points per side with an example. Modern Age Coders practises every 417 differentiate pair live, Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="ai-ml-dl">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. The most asked comparison</p>
      <h2>What is the difference between AI, ML and DL in Class 10?</h2>
      <p class="bx-lede">AI is the widest idea, ML is AI that learns from data, and DL is ML that learns through deep neural networks. Each is a subset of the one before it. The 2026 board paper asked this as a four-mark answer with a labelled Venn diagram.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">AI</th><th scope="col">ML</th><th scope="col">DL</th></tr></thead>
          <tbody>
            <tr><td>Meaning</td><td>Any method that makes a machine behave intelligently</td><td>Machines learn patterns from data and improve with experience</td><td>ML using neural networks with many layers</td></tr>
            <tr><td>Scope</td><td>Widest, the umbrella</td><td>Subset of AI</td><td>Subset of ML</td></tr>
            <tr><td>Needs data?</td><td>Not always: rules can be hand-written</td><td>Yes, examples to learn from</td><td>Yes, very large amounts</td></tr>
            <tr><td>Features</td><td>Set by people in rule systems</td><td>Often chosen by people</td><td>Picked out by the network itself</td></tr>
            <tr><td>Example</td><td>A chess program following set rules</td><td>A spam filter trained on marked emails</td><td>Face unlock on a phone</td></tr>
          </tbody>
        </table>
      </div>
      <div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The Venn diagram to draw</b><span>three nested circles</span></figcaption>
  <pre>+-------------------------------+
| Artificial Intelligence       |
|   +-----------------------+   |
|   | Machine Learning      |   |
|   |   +---------------+   |   |
|   |   | Deep Learning |   |   |
|   |   +---------------+   |   |
|   +-----------------------+   |
+-------------------------------+</pre>
  <p class="bx-code-note">Label all three and write one example inside each ring. The diagram is where marks are most often lost: circles drawn side by side instead of one inside another.</p>
</figure>
        <p class="bx-mt-40"><b>Two-point exam answer.</b> (1) AI is the broad field of making machines act intelligently; ML is a subset of AI in which machines learn from data; DL is a subset of ML that uses multi-layered neural networks. (2) AI can work from hand-written rules, ML needs examples, and DL needs very large data but finds features by itself, as in face recognition.</p>
      </div>
    </div>
    <h3 class="bx-mt-40">How a differentiate answer is marked</h3>
    <ol class="bx-steps">
      <li>Each point must say something about BOTH terms. "ML learns from data" alone is half a point.</li>
      <li>Two points for a two-mark item, three or four for a four-mark one, plus any diagram asked for.</li>
      <li>A table is the fastest layout. Add one example per side when the question says "with examples".</li>
    </ol>
  </div>
</section>`,

`<section class="bx-section" id="modeling">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Unit 2, Advanced Concepts of Modeling</p>
      <h2>Rule based vs learning based, supervised vs unsupervised, classification vs regression</h2>
      <p class="bx-lede">Unit 2 holds the largest cluster of compare questions in 417. Each pair below is three rows and a two-point answer.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Rule based vs learning based approach</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Rule based</th><th scope="col">Learning based</th></tr></thead>
          <tbody>
            <tr><td>Source of logic</td><td>Rules written by a developer</td><td>Patterns found in data</td></tr>
            <tr><td>New situations</td><td>Fails outside its rules</td><td>Adapts as it sees more data</td></tr>
            <tr><td>Example</td><td>A quiz bot with fixed answers</td><td>A spam filter that keeps improving</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) A rule based model follows rules a person writes; a learning based model works out its own rules from data. (2) A rule based model is static, while a learning based one adapts as new data arrives.</p>

        <h3 class="bx-mt-40">Supervised vs unsupervised vs reinforcement learning</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Supervised</th><th scope="col">Unsupervised</th><th scope="col">Reinforcement</th></tr></thead>
          <tbody>
            <tr><td>Data</td><td>Labelled</td><td>Unlabelled</td><td>No fixed dataset; learns by acting</td></tr>
            <tr><td>Goal</td><td>Predict the label</td><td>Find hidden groups or links</td><td>Maximise reward over time</td></tr>
            <tr><td>Sub-types</td><td>Classification, regression</td><td>Clustering, association</td><td>Trial, error and reward</td></tr>
            <tr><td>Example</td><td>Cat or dog photos with names</td><td>Grouping shoppers by habit</td><td>A game agent learning to win</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Supervised learning trains on labelled data, unsupervised learning on unlabelled data. (2) Supervised predicts a known kind of output, such as a class; unsupervised discovers groups or links that nobody named, such as customer segments.</p>

        <h3 class="bx-mt-40">ANN vs CNN</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">ANN</th><th scope="col">CNN</th></tr></thead>
          <tbody>
            <tr><td>Built for</td><td>General data, tables and numbers</td><td>Images and other grid data</td></tr>
            <tr><td>Key idea</td><td>Layers of connected nodes</td><td>Filters slide over the image to pick out features</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) An ANN is a general network of connected layers modelled on the brain; a CNN is a kind of deep network designed for images. (2) A CNN finds edges and shapes with sliding filters, which an ordinary ANN does not do.</p>
      </div>
      <div>
        <h3>Classification vs regression</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Classification</th><th scope="col">Regression</th></tr></thead>
          <tbody>
            <tr><td>Output</td><td>A category or label</td><td>A continuous number</td></tr>
            <tr><td>Data type</td><td>Discrete</td><td>Continuous</td></tr>
            <tr><td>Example</td><td>Is this email spam or not?</td><td>What will this flat sell for?</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Classification sorts data into fixed classes; regression predicts a number on a continuous scale. (2) Weather as "rainy or dry" is classification; tomorrow's rainfall in millimetres is regression.</p>

        <h3 class="bx-mt-40">Clustering vs association</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Clustering</th><th scope="col">Association</th></tr></thead>
          <tbody>
            <tr><td>Finds</td><td>Groups of similar items</td><td>Items that occur together</td></tr>
            <tr><td>Example</td><td>Grouping songs by mood</td><td>People who buy bread also buy butter</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Clustering puts similar data points into groups; association finds rules about which items appear together. (2) Clustering answers "who is like whom"; association answers "what goes with what".</p>

        <h3 class="bx-mt-40">Features vs labels, and training data vs testing data</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Pair</th><th scope="col">First</th><th scope="col">Second</th></tr></thead>
          <tbody>
            <tr><td>Feature vs label</td><td>An input property, such as house size</td><td>The answer to predict, such as price</td></tr>
            <tr><td>Training vs testing data</td><td>The part the model learns from, usually the larger share</td><td>Unseen data held back to check the model</td></tr>
          </tbody></table></div>
        <p><b>Answer (training vs testing).</b> (1) Training data teaches the model; testing data is kept aside and used only to measure it. (2) Testing on the training data hides overfitting, because the model may have memorised it.</p>
      </div>
    </div>
    <p class="bx-mt-40">Full question sets for this unit are on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">CBSE Class 10 AI advanced modeling questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="units-1-3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Units 1 and 3</p>
      <h2>Ethical frameworks, AI domains and evaluation metrics: the differentiate pairs</h2>
      <p class="bx-lede">The 2026 board paper set sector-based against value-based frameworks as a two-mark answer. Unit 3 pairs are short but often carry a number.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Sector-based vs value-based framework</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Sector-based</th><th scope="col">Value-based</th></tr></thead>
          <tbody>
            <tr><td>Built around</td><td>One field, such as health or finance</td><td>Core moral principles</td></tr>
            <tr><td>Example</td><td>Bioethics for medical AI</td><td>Rights-based, utility-based, virtue-based</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) A sector-based framework is written for the ethical problems of one industry; a value-based framework applies general principles anywhere. (2) Bioethics is sector-based; utilitarian thinking is value-based.</p>

        <h3 class="bx-mt-40">Rights-based vs utility-based vs virtue-based</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Type</th><th scope="col">Asks</th><th scope="col">Example</th></tr></thead>
          <tbody>
            <tr><td>Rights-based</td><td>Does it respect each person's rights?</td><td>No face data used without consent</td></tr>
            <tr><td>Utility-based</td><td>Does it do the most good overall?</td><td>Traffic AI that cuts total travel time</td></tr>
            <tr><td>Virtue-based</td><td>What would an honest, fair person do?</td><td>Admitting a model's known weakness</td></tr>
          </tbody></table></div>
        <p><b>Answer (rights vs utility).</b> (1) Rights-based thinking protects every individual's rights, even if fewer people benefit; utility-based thinking picks the choice with the greatest overall good. (2) A rights view refuses data taken without consent; a utility view may accept a small harm for a large gain.</p>

        <h3 class="bx-mt-40">Data Science vs Computer Vision vs NLP</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Domain</th><th scope="col">Data it uses</th><th scope="col">Example</th></tr></thead>
          <tbody>
            <tr><td>Data Science</td><td>Numbers and tables</td><td>Forecasting school canteen demand</td></tr>
            <tr><td>Computer Vision</td><td>Images and video</td><td>Reading number plates</td></tr>
            <tr><td>NLP</td><td>Text and speech</td><td>Translating a message</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) The three domains differ by the type of data fed in: numbers, images or language. (2) So a sales forecast is Data Science, a face filter is Computer Vision and a chatbot is NLP.</p>
      </div>
      <div>
        <h3>Accuracy vs error</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Accuracy</th><th scope="col">Error</th></tr></thead>
          <tbody>
            <tr><td>Measures</td><td>Share of predictions that are right</td><td>How far predictions miss the true value</td></tr>
            <tr><td>Better when</td><td>Higher</td><td>Lower</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Accuracy measures how often the model is right; error measures how far its predictions are from the true values. (2) Higher accuracy is better, lower error is better, so a model is chosen by maximising one or minimising the other.</p>

        <h3 class="bx-mt-40">Precision vs recall</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Precision</th><th scope="col">Recall</th></tr></thead>
          <tbody>
            <tr><td>Formula</td><td>TP / (TP + FP)</td><td>TP / (TP + FN)</td></tr>
            <tr><td>Question it answers</td><td>Of the predicted Yes, how many were right?</td><td>Of the real Yes, how many were found?</td></tr>
            <tr><td>Matters most when</td><td>False alarms are costly (spam filter)</td><td>Misses are costly (disease test)</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Precision divides true positives by all predicted positives; recall divides them by all actual positives. (2) With TP 45, FP 5 and FN 15, precision is 45/50 = 0.90 but recall is 45/60 = 0.75: the model is careful but misses cases.</p>

        <h3 class="bx-mt-40">False positive vs false negative</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">False positive</th><th scope="col">False negative</th></tr></thead>
          <tbody>
            <tr><td>Prediction vs reality</td><td>Predicted Yes, really No</td><td>Predicted No, really Yes</td></tr>
            <tr><td>Example</td><td>A real email sent to spam</td><td>A sick patient told they are well</td></tr>
          </tbody></table></div>
        <p>The numericals behind these are worked on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix class 10 AI numericals</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="cv-nlp">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Units 5 and 6</p>
      <h2>Grayscale vs RGB, script bot vs smart bot and the other CV and NLP pairs</h2>
      <p class="bx-lede">Computer vision pairs are mostly about how an image is stored; NLP pairs are about how text is cleaned and understood.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Grayscale vs RGB image</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Grayscale</th><th scope="col">RGB</th></tr></thead>
          <tbody>
            <tr><td>Channels</td><td>One</td><td>Three: red, green, blue</td></tr>
            <tr><td>Value per pixel</td><td>One number, 0 (black) to 255 (white)</td><td>Three numbers, each 0 to 255</td></tr>
            <tr><td>100 x 80 image stores</td><td>8,000 values</td><td>24,000 values</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) A grayscale image has one channel showing only brightness; an RGB image has three channels that mix into colour. (2) An RGB image therefore stores three times as many values for the same size.</p>

        <h3 class="bx-mt-40">Computer vision vs image processing</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Image processing</th><th scope="col">Computer vision</th></tr></thead>
          <tbody>
            <tr><td>Aim</td><td>Change or improve the image</td><td>Understand what the image shows</td></tr>
            <tr><td>Output</td><td>Another image</td><td>A label, a box or a decision</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) Image processing changes an image, for example sharpening or resizing it; computer vision tries to understand what the image shows. (2) Computer vision is the wider field and often uses image processing as a first step, so CV is a superset of image processing.</p>

        <h3 class="bx-mt-40">Classification vs localisation vs detection vs segmentation</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Task</th><th scope="col">Output</th></tr></thead>
          <tbody>
            <tr><td>Image classification</td><td>One label for the whole image</td></tr>
            <tr><td>Classification + localisation</td><td>The label and one box around the single object</td></tr>
            <tr><td>Object detection</td><td>Boxes and labels for many objects</td></tr>
            <tr><td>Instance segmentation</td><td>The exact pixel outline of each object</td></tr>
          </tbody></table></div>
        <h3 class="bx-mt-40">Pixel vs resolution</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Pixel</th><th scope="col">Resolution</th></tr></thead>
          <tbody>
            <tr><td>What it is</td><td>The smallest dot of an image</td><td>How many pixels the image has</td></tr>
            <tr><td>Written as</td><td>One value, or three for colour</td><td>Width x height, such as 1920 x 1080</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) A pixel is a single picture element holding a value; resolution is the count of pixels across and down. (2) Higher resolution means more pixels and finer detail; a pixel itself has no resolution.</p>
        <p><b>Answer (classification vs detection).</b> (1) Classification gives one label for the whole image; object detection finds and labels many objects. (2) Detection also gives each object's position as a box.</p>
      </div>
      <div>
        <h3>Script bot vs smart bot</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Script bot</th><th scope="col">Smart bot</th></tr></thead>
          <tbody>
            <tr><td>Works from</td><td>A fixed script of replies</td><td>AI and NLP, learning from data</td></tr>
            <tr><td>Handles</td><td>Only expected questions</td><td>Varied, open-ended questions</td></tr>
            <tr><td>Example</td><td>A pizza-order bot with buttons</td><td>A voice assistant</td></tr>
          </tbody></table></div>
        <p><b>Answer.</b> (1) A script bot follows a pre-written script and cannot go beyond it; a smart bot uses AI to understand and answer flexibly. (2) Script bots are simple to build and limited; smart bots need data but improve with use.</p>

        <h3 class="bx-mt-40">More NLP pairs</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Pair</th><th scope="col">First</th><th scope="col">Second</th></tr></thead>
          <tbody>
            <tr><td>Human vs computer language</td><td>Can be ambiguous; meaning depends on context</td><td>Exact syntax; one meaning only</td></tr>
            <tr><td>Syntax vs semantics</td><td>Is the grammar right?</td><td>Does it make sense?</td></tr>
            <tr><td>Stemming vs lemmatisation</td><td>Chops the ending, may leave a non-word ("studi")</td><td>Returns a real word ("study"), slower</td></tr>
            <tr><td>Bag of Words vs TFIDF</td><td>Raw count of each word</td><td>Count weighted by how rare the word is across documents</td></tr>
            <tr><td>Sentence segmentation vs tokenisation</td><td>Splits text into sentences</td><td>Splits sentences into words and symbols</td></tr>
          </tbody></table></div>
        <p>Worked counts for these are on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF for Class 10 AI</a> and <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">CBSE Class 10 AI NLP questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="part-a-practical">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Part A and the practical units</p>
      <h2>Difference questions from Part A, and the pairs the viva asks</h2>
      <p class="bx-lede">Part A short answers often ask for a difference too, and the practical viva leans on the Unit 4, 5 and 7 pairs that never appear in the theory paper.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-table-wrap"><table class="bx-table">
        <thead><tr><th scope="col">Part A pair</th><th scope="col">Two-point answer</th></tr></thead>
        <tbody>
          <tr><td>Verbal vs non-verbal communication</td><td>Verbal uses spoken or written words; non-verbal uses gestures, posture and expression.</td></tr>
          <tr><td>Internal vs external motivation</td><td>Internal comes from interest or satisfaction; external comes from rewards, marks or praise.</td></tr>
          <tr><td>Virus vs worm</td><td>A virus needs a host file to be opened; a worm spreads across a network by itself.</td></tr>
          <tr><td>Wage employment vs self-employment</td><td>A wage earner works for someone else for fixed pay; a self-employed person runs their own work and bears the risk.</td></tr>
          <tr><td>Renewable vs non-renewable resources</td><td>Renewable ones, like sunlight and wind, are replaced naturally; non-renewable ones, like coal, run out.</td></tr>
        </tbody></table></div>
      <div class="bx-table-wrap"><table class="bx-table">
        <thead><tr><th scope="col">Practical and viva pair</th><th scope="col">Two-point answer</th></tr></thead>
        <tbody>
          <tr><td>Mean vs median (Unit 7)</td><td>Mean adds and divides; median is the middle value after sorting. For 2, 3, 3, 12 the mean is 5, the median 3, so median resists an outlier.</td></tr>
          <tr><td>Python list vs NumPy array (Unit 7)</td><td>A list can mix types; a NumPy array holds one type and does maths on all items at once.</td></tr>
          <tr><td>Code vs no-code AI (Unit 4)</td><td>Code AI is written in a language such as Python; no-code AI is built by dragging blocks, as in Orange.</td></tr>
          <tr><td>Convolution vs pooling (Unit 5 practical)</td><td>Convolution slides a kernel to pick out features; pooling shrinks the result and keeps the strongest values.</td></tr>
          <tr><td>Max vs average pooling (Unit 5 practical)</td><td>Max keeps the largest value in each window; average keeps the mean of the window.</td></tr>
        </tbody></table></div>
    </div>
    <p class="bx-mt-40">The two-mark Part A answers are explained on <a class="bx-link" href="/cbse-class-10-ai-employability-skills-part-a">Part A employability skills</a>, and the viva itself on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">CBSE Class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are these practised in class?</p>
      <h2>How the live batch turns comparison tables into full marks</h2>
      <p class="bx-lede">Reading a table is easy. Writing two clean points from memory in ninety seconds is the skill the paper tests, so that is what we practise.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Written to the clock</h3><p>Monday's class ends with three pairs from the unit just taught. Students write them in a shared doc or on paper held to the camera, two minutes each.</p></div>
      <div class="bx-card"><h3>Checked point by point</h3><p>On Wednesday the teacher marks a few answers on screen against scheme-style points. A point that names only one term is struck out, and the class sees why.</p></div>
      <div class="bx-card"><h3>Venns and tables drawn live</h3><p>Diagram questions, like AI, ML and DL, are drawn on the shared board until every student can do them unprompted in the mocks.</p></div>
    </div>
    <p class="bx-mt-40">These sit inside the timed papers on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>; every other question shape is on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise compare questions in the batch, or one to one',
  chooseLede: 'The batch writes and checks the pairs unit by unit through the year, alongside the rest of the syllabus. One to one is for a student who knows the ideas but loses marks in the writing: answers are rebuilt line by line until each point covers both terms. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'Pairs written to time after every unit',
    'Answers marked on screen against scheme points',
    'Compare questions inside every full mock'
  ],
  choosePersonal: [
    'Days and time picked by your family',
    'Every written answer read and corrected',
    'Weak units drilled until both sides are covered',
    'Venn and table layouts practised one to one',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'If your child says "I knew it but lost marks", the gap is usually in writing, and a few one to one sessions close it. If whole units are still new, the batch covers them in order with the compare questions built in. Fees are shown in your own currency.',
  zonesH2: 'Difference between questions for CBSE students abroad',
  zonesLede: 'The 417 paper written in a CBSE school in Muscat or Doha is the same one written in Delhi, so the same compare questions come up. Here is the batch hour this winter.',
  zonesAfter: 'Where 9:00 PM IST falls too late, one to one is booked at a local hour. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about difference questions',
  faqH2: 'What students ask about difference between questions in Class 10 AI',
  faqs: [
    ['What is the difference between AI, ML and DL in Class 10?', 'AI is the broad field of making machines behave intelligently, including by fixed rules. ML is a subset of AI where machines learn patterns from data. DL is a subset of ML that uses neural networks with many layers and large data, and finds features by itself, as in face recognition. Draw three nested circles to show it.'],
    ['How do I write a difference between answer in CBSE Class 10 AI?', 'Write each point so it says something about both terms, give two points for a two-mark question and three or four for a four-mark one, and add an example per side when asked. A small table is the quickest, clearest layout and examiners can see each point at a glance.'],
    ['What is the difference between classification and regression?', 'Classification predicts a category, such as spam or not spam, from discrete classes. Regression predicts a continuous number, such as a house price or tomorrow\'s temperature. Both are types of supervised learning, so both need labelled training data. If the answer is a word, it is classification; if it is a measurement, regression.'],
    ['What is the difference between supervised and unsupervised learning?', 'Supervised learning trains on labelled data and predicts a known kind of output, through classification or regression. Unsupervised learning uses unlabelled data and finds its own groups or links, through clustering or association. Reinforcement learning is the third type: it learns by trial, error and reward.'],
    ['What is the difference between a script bot and a smart bot?', 'A script bot follows a fixed set of pre-written replies and cannot handle questions outside its script, like a menu-driven order bot. A smart bot uses AI and NLP to understand varied questions and improves with data, like a voice assistant. Script bots are easy to build; smart bots are more flexible.'],
    ['What is the difference between rule based and learning based AI?', 'In a rule based approach a developer writes the rules and the system follows them, so it cannot adapt beyond them. In a learning based approach the machine works out its own rules from data and keeps improving as new data arrives. A fixed quiz bot is rule based; a spam filter is learning based.'],
    ['What is the difference between grayscale and RGB images?', 'A grayscale image has one channel, so each pixel holds one value from 0 (black) to 255 (white). An RGB image has three channels, red, green and blue, so each pixel holds three values. An RGB image of the same size stores three times as many numbers.'],
    ['Which differentiate questions came in the 2026 Class 10 AI paper?', 'The 2026 board paper asked for the difference between sector-based and value-based ethical frameworks as a two-mark answer, and for AI, ML and DL with a labelled Venn diagram as a four-mark answer. We do not predict which pairs will appear in 2027, so this page covers every pair in the syllabus.'],
    ['Are convolution and pooling asked in the Class 10 AI theory paper?', 'In the 2026-27 curriculum, the convolution operator, kernels and CNN layers sit in the practical part of Unit 5. They are more likely in the practical exam and viva. ANN against CNN is in Unit 2 theory, so that comparison can appear in the written paper.'],
    ['Do your classes cover difference questions?', 'Yes, as part of ordinary teaching. After each unit students write its pairs to time, and the teacher marks them on screen against scheme-style points. This is included in the monthly fee shown on this page, in the batch or one to one, with no admission fee and a free first class.']
  ],
  startH2: 'Write three difference answers with a teacher, free',
  startHtml: `        <p>In the free first class your child writes three short compare answers, starting with AI, ML and DL, and the teacher marks them live, point by point. You will see exactly where marks slip, and the mentor will say plainly whether the batch or one to one suits your child.</p>
        <p>New to the subject? Start with <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Difference between questions'
};
