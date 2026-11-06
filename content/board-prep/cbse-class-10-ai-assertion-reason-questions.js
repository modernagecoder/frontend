// CBSE Class 10 AI (417): assertion and reason practice for 2026-27.
// Intent: "class 10 AI assertion reason questions", "A R questions 417",
// "assertion reason AI class 10 with answers".
// Format confirmed 2026-11-06 from the marking schemes (see design doc): assertion and
// reason items, one mark each, appear in Section A of the 2025 and 2026 AI 417 board
// papers and the 2025-26 sample paper, alongside two-statement items. Option wording
// checked: the 2025-26 SQP prints "correct / incorrect", the 2026 board scheme "true /
// false"; the meaning and the a-to-d order are the same. Topics of the past items are
// DESCRIBED in our own words (2025: green skills and the meaning of AI; 2025-26 SQP:
// virtue-based framework and model error; 2026: bioethics and lowercasing in text
// preprocessing); none is reproduced. No count is promised for 2027.
// Page content: the four options explained, a method, 35 original A-R items by unit
// (Part A and Units 1, 2, 3, 5, 6; Units 4 and 7 are practical only) and three
// two-statement items, each with answer and reasoning.
// Numbers recomputed with python3 on 2026-11-06 (scratch cb29.py): 0.6 + 0.3 - 1 = -0.1;
// TP 30, FP 10, FN 20, TN 40 gives precision 0.75, recall 0.60, wrong predictions 30,
// accuracy 0.70; 50 x 40 RGB = 6,000 values (grayscale 2,000); log(5/5) = 0;
// 98 of 100 correct = 0.98.
'use strict';

const KEY = `<p class="bx-muted" style="font-size:.95rem">Options for every item: (a) both A and R true, R explains A &middot; (b) both true, R does not explain A &middot; (c) A true, R false &middot; (d) A false, R true.</p>`;

module.exports = {
  slug: 'cbse-class-10-ai-assertion-reason-questions',
  code: 'cb29',
  board: 'cbse',
  themeColor: '#7A4A1E',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Assertion Reason Questions with Answers (417)',
  description: 'Class 10 AI assertion reason questions for CBSE 417, 2026-27: the four options explained, then 35 original A-R items by unit with answers and reasoning.',
  ogTitle: 'Class 10 AI Assertion Reason Questions, Unit by Unit, with Answers',
  ogDesc: 'How assertion and reason items work in CBSE Class 10 AI (417), what the four options mean, a three-step method, and 35 original A-R items plus three two-statement items, each answered with its reasoning.',
  twDesc: 'The four A-R options explained, then 35 original Class 10 AI assertion reason items with answers and reasoning.',
  headline: 'Class 10 AI Assertion Reason Questions: The Four Options Explained and 35 Original Items by Unit',
  courseName: 'CBSE Class 10 AI (417) Section A Practice, Live Online',
  courseDesc: 'Live online Section A practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: assertion and reason items, two-statement items and MCQs from every theory unit, solved in class with the reasoning for each option and timed inside full mock papers, every Monday and Wednesday at 9:00 PM IST, or one to one at a time the family chooses.',
  brandTag: '417 &middot; Assertion and reason',
  navLinks: [['#format', 'The format'], ['#method', 'Method'], ['#part-a-u1', 'A-R set'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Assertion and reason questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Assertion and reason 2026-27',
  h1: 'Class 10 AI assertion reason questions: how the four options work, then 35 to practise.',
  lede: 'Class 10 AI assertion reason questions give you two statements and ask how they relate. They have appeared in Section A of the CBSE 417 board papers of 2025 and 2026 and in the 2025-26 sample paper. This page explains the four options, gives a three-step method, then sets 35 original items unit by unit with the answer and the reasoning. In our live batch they are solved aloud, so the logic is heard, not guessed.',
  heroNote: 'Live online &middot; 35 A-R items and 3 two-statement items below &middot; solved with reasons &middot; timed inside mocks &middot; first class free',
  waText: 'Hello Modern Age Coders. I want assertion and reason practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When A-R items are practised',
    title: 'A-R practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, unit items solved aloud', '9:00', 'PM IST'],
      ['Wednesday, mixed Section A round', '9:00', 'PM IST'],
      ['Original A-R items on this page', '35', 'answered'],
      ['Mark per item', '1', 'no negative']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and East Africa:</b> 6:30 PM. <b>Further afield:</b> one to one at a local hour.',
    stamps: ['Judge A, judge R, then link', 'Seen in 2025 and 2026']
  },
  picksH2: 'Courses where the reasoning gets built',
  picksLede: 'A-R items reward understanding why, so the 417 course comes first, with two courses that let students see the reasons behind the statements for themselves.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Each unit is taught, then its Section A items, A-R included, are solved aloud with the reason for every option.' },
    { slug: 'ai-ml-masterclass-teens', code: 'The why / ML', h3: 'AI and ML for Teens', p: 'Train and test real models, and statements about overfitting, recall or labelled data become things you have seen happen.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code / Orange', h3: 'Visual ML with Orange', p: 'Build a confusion matrix and a text model with widgets, the same tool the curriculum uses for its case studies.' }
  ],
  capsule: 'Class 10 AI assertion reason questions give an Assertion (A) and a Reason (R). You choose (a) both true and R explains A, (b) both true but R does not explain A, (c) A true and R false, or (d) A false and R true. Judge A alone, then R alone, and only if both are true ask whether A happens because of R. Such items appeared in Section A of the 2025 and 2026 CBSE 417 papers and the 2025-26 sample paper. Modern Age Coders practises them live on Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="format">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Is this format really in the paper?</p>
      <h2>Are assertion reason questions asked in CBSE Class 10 AI 417?</h2>
      <p class="bx-lede">Yes. One-mark assertion and reason items appeared in Section A of the 2025 and 2026 CBSE Class 10 AI board papers and in the 2025-26 sample paper, together with two-statement items. The 2026-27 sample paper for 417 is not out yet, so we make no promise about how many will appear in 2027.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>What the four options mean</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Option</th><th scope="col">A</th><th scope="col">R</th><th scope="col">Link</th></tr></thead>
          <tbody>
            <tr><td>(a)</td><td>True</td><td>True</td><td>R is the reason A is true</td></tr>
            <tr><td>(b)</td><td>True</td><td>True</td><td>R is true but explains something else</td></tr>
            <tr><td>(c)</td><td>True</td><td>False</td><td>No link to judge</td></tr>
            <tr><td>(d)</td><td>False</td><td>True</td><td>No link to judge</td></tr>
          </tbody></table></div>
        <p>The 2025-26 sample paper words these with "correct" and "incorrect", and the 2026 board paper with "true" and "false". The meaning and the order are the same. There is no option for both false, so if you think both are false, read again.</p>
      </div>
      <div>
        <h3>What the past items tested, in brief</h3>
        <ul class="bx-check">
          <li><b>2025 board paper:</b> one item from Green Skills on sustainable farming, one on what makes a machine artificially intelligent.</li>
          <li><b>2025-26 sample paper:</b> one on the virtue-based framework, one on using error to compare models.</li>
          <li><b>2026 board paper:</b> one on which kind of framework bioethics is, one on lowercasing text before processing.</li>
        </ul>
        <p>So the items can come from Part A as well as the AI units, and each tests one idea you should know cold. Our own items below follow the same shape on different facts.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="method">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do you solve one?</p>
      <h2>How to answer assertion reason AI class 10 items in three steps</h2>
      <p class="bx-lede">Judge each statement on its own first, and test the link last. Most wrong answers come from deciding the link before checking whether both statements are even true.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <ol class="bx-steps">
          <li><b>Judge A alone.</b> Cover R with your hand. Is A true? If not, the answer can only be (d).</li>
          <li><b>Judge R alone.</b> Is R true as a statement of fact? If A is true and R is false, the answer is (c).</li>
          <li><b>Test the link.</b> Both true? Read them as "A, because R". If that sentence explains A, choose (a). If it is true but beside the point, choose (b).</li>
        </ol>
      </div>
      <div class="bx-table-wrap"><table class="bx-table">
        <thead><tr><th scope="col">Trap</th><th scope="col">What it looks like</th></tr></thead>
        <tbody>
          <tr><td>Two true facts, no link</td><td>A about CNNs, R about the layers of an ANN. Both true; (b), not (a).</td></tr>
          <tr><td>R is a definition from the wrong term</td><td>R gives recall's formula and calls it precision. R is false.</td></tr>
          <tr><td>Absolute words</td><td>"always", "every", "only" in A often make it false.</td></tr>
          <tr><td>Reversed subset</td><td>"Every ML model is DL" sounds close to the truth and is false.</td></tr>
        </tbody></table></div>
    </div>
    <h3 class="bx-mt-40">The two-statement format</h3>
    <p>A two-statement item gives Statement 1 and Statement 2, with no link to judge. You choose between both correct, both incorrect, only Statement 1 correct, and only Statement 2 correct. The exact wording and letter order can differ between papers, so read the options on the day. Three are practised at the end of the set below.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="part-a-u1">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Part A and Unit 1</p>
      <h2>Assertion reason AI class 10 with answers: Part A and the project cycle unit</h2>
      <p class="bx-lede">Items 1 to 11. Write your letter for each before opening the answer.</p>
      ${KEY}
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Part A: employability skills</h3>
        <ol class="bx-qlist">
          <li><b>A:</b> Feedback completes the communication cycle. <b>R:</b> Feedback tells the sender whether the message was understood.
            <details><summary>Answer</summary> <b>(a)</b> The cycle closes because the sender learns how the message landed. R is exactly why A holds.</details></li>
          <li><b>A:</b> A SMART goal must have a deadline. <b>R:</b> The S in SMART stands for Simple.
            <details><summary>Answer</summary> <b>(c)</b> A is true, since T is time-bound. R is false: S is Specific.</details></li>
          <li><b>A:</b> Antivirus software should be updated regularly. <b>R:</b> A firewall monitors network traffic.
            <details><summary>Answer</summary> <b>(b)</b> Both true. Updates matter because new viruses keep appearing, which R does not say.</details></li>
          <li><b>A:</b> Entrepreneurs are born, not made. <b>R:</b> Skills such as risk-taking and decision making can be learned.
            <details><summary>Answer</summary> <b>(d)</b> A is a well-known myth. R is true, and is in fact why A is false.</details></li>
          <li><b>A:</b> Solar energy is a renewable resource. <b>R:</b> Solar panels are made in factories.
            <details><summary>Answer</summary> <b>(b)</b> Both true, but sunlight is renewable because nature replaces it daily, not because of where panels are made.</details></li>
        </ol>
      </div>
      <div>
        <h3>Unit 1: AI Project Cycle and Ethical Frameworks</h3>
        <ol class="bx-qlist" start="6">
          <li><b>A:</b> Data Exploration comes before Modelling in the AI project cycle. <b>R:</b> Exploring the data shows patterns that help choose a suitable model.
            <details><summary>Answer</summary> <b>(a)</b> The order exists for the reason R gives.</details></li>
          <li><b>A:</b> A rights-based approach may reject a plan that helps most people. <b>R:</b> It will not break any individual's rights, even for a larger total benefit.
            <details><summary>Answer</summary> <b>(a)</b> Protecting each person comes first in a rights view, which is why it can say no to a popular plan.</details></li>
          <li><b>A:</b> Computer Vision is the AI domain that works with images and video. <b>R:</b> NLP works with text and speech.
            <details><summary>Answer</summary> <b>(b)</b> Both true, but a fact about NLP cannot explain a fact about CV.</details></li>
          <li><b>A:</b> A utility-based framework judges an action by the character of the person acting. <b>R:</b> A utility-based framework aims for the greatest good for the greatest number.
            <details><summary>Answer</summary> <b>(d)</b> A describes the virtue-based framework, so it is false. R is the correct idea of utility.</details></li>
          <li><b>A:</b> An AI trained only on data from one city may treat people elsewhere unfairly. <b>R:</b> Bias in training data can lead to biased predictions.
            <details><summary>Answer</summary> <b>(a)</b> Narrow data is a source of bias, and R names that cause.</details></li>
          <li><b>A:</b> Bioethics rests on four principles. <b>R:</b> One of them is to maximise a hospital's profit.
            <details><summary>Answer</summary> <b>(c)</b> The four are respect for autonomy, do no harm, ensure benefit and justice. Profit is not one.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The ideas behind items 6 to 11 are set out on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">Class 10 AI project cycle and ethics</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="units-2-3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Units 2 and 3</p>
      <h2>A R questions 417: modeling and evaluating models, with numbers</h2>
      <p class="bx-lede">Items 12 to 25. Where a number appears, work it before judging the statement: a single slip turns (a) into (c).</p>
      ${KEY}
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Unit 2: Advanced Concepts of Modeling in AI</h3>
        <ol class="bx-qlist" start="12">
          <li><b>A:</b> Every deep learning model is a machine learning model. <b>R:</b> Deep learning is a subset of machine learning.
            <details><summary>Answer</summary> <b>(a)</b> A follows directly from R.</details></li>
          <li><b>A:</b> Every machine learning model is a deep learning model. <b>R:</b> Machine learning is a subset of AI.
            <details><summary>Answer</summary> <b>(d)</b> The subset runs the other way, so A is false. R is true.</details></li>
          <li><b>A:</b> Predicting the price of a used car is a regression task. <b>R:</b> Classification and regression are both types of supervised learning.
            <details><summary>Answer</summary> <b>(b)</b> Both true. It is regression because price is a continuous number, which R does not say.</details></li>
          <li><b>A:</b> Clustering is a type of supervised learning. <b>R:</b> Clustering groups data that has no labels.
            <details><summary>Answer</summary> <b>(d)</b> No labels means unsupervised, so A is false and R is true.</details></li>
          <li><b>A:</b> A rule-based chatbot cannot answer questions outside its rules. <b>R:</b> A rule-based system does not learn from new data.
            <details><summary>Answer</summary> <b>(a)</b> It cannot adapt because it never learns, which is R.</details></li>
          <li><b>A:</b> Reinforcement learning needs a fully labelled dataset. <b>R:</b> A reinforcement learning agent learns from rewards and penalties.
            <details><summary>Answer</summary> <b>(d)</b> It learns by acting and receiving feedback, not from labels. A is false.</details></li>
          <li><b>A:</b> CNNs are well suited to image tasks. <b>R:</b> An ANN has an input layer, hidden layers and an output layer.
            <details><summary>Answer</summary> <b>(b)</b> Both true. CNNs suit images because their filters pick out visual features, not because of R.</details></li>
          <li><b>A:</b> With inputs 1 and 1, weights 0.6 and 0.3 and a bias of -1, the weighted sum plus bias is negative. <b>R:</b> 0.6 + 0.3 = 0.9, and 0.9 - 1 = -0.1.
            <details><summary>Answer</summary> <b>(a)</b> R is the working that proves A. Forget the bias and you get 0.9, positive, and wrongly pick (d).</details></li>
        </ol>
      </div>
      <div>
        <h3>Unit 3: Evaluating Models</h3>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Use for items 21 and 25</b><span>positive = spam</span></figcaption>
  <pre>              Actual Yes   Actual No
Predicted Yes  TP = 30      FP = 10
Predicted No   FN = 20      TN = 40</pre>
</figure>
        <ol class="bx-qlist bx-mt-40" start="20">
          <li><b>A:</b> A model should be tested on data it did not see in training. <b>R:</b> Training data is usually larger than testing data.
            <details><summary>Answer</summary> <b>(b)</b> Both true. The real reason is that testing on seen data hides overfitting.</details></li>
          <li><b>A:</b> The precision of this model is 0.75. <b>R:</b> Precision = TP / (TP + FN).
            <details><summary>Answer</summary> <b>(c)</b> 30 / 40 = 0.75, so A is true. R gives the recall formula, which would be 30 / 50 = 0.60.</details></li>
          <li><b>A:</b> Accuracy is a reliable measure when 98 of 100 emails are not spam. <b>R:</b> A model that calls every email "not spam" scores 98% accuracy there.
            <details><summary>Answer</summary> <b>(d)</b> R is true, and it shows why A is false: a useless model looks excellent.</details></li>
          <li><b>A:</b> For cancer screening, recall matters more than precision. <b>R:</b> A false negative means a sick patient goes untreated.
            <details><summary>Answer</summary> <b>(a)</b> Recall counts how many real cases are caught, and R names the cost of missing one.</details></li>
          <li><b>A:</b> F1 score is the simple average of precision and recall. <b>R:</b> F1 score balances precision and recall.
            <details><summary>Answer</summary> <b>(d)</b> F1 is 2PR / (P + R), not (P + R) / 2. R is true.</details></li>
          <li><b>A:</b> This model made 30 wrong predictions. <b>R:</b> Wrong predictions = FP + FN.
            <details><summary>Answer</summary> <b>(a)</b> 10 + 20 = 30, worked by R. Its accuracy is (30 + 40) / 100 = 0.70.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More practice on the metrics is on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">CBSE Class 10 AI evaluating models questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="units-5-6">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Units 5 and 6, then two-statement items</p>
      <h2>Computer vision and NLP assertion reason questions, plus two-statement practice</h2>
      <p class="bx-lede">Items 26 to 35, then three two-statement items. Units 4 and 7 are examined only in the practical, so they have no items here.</p>
      ${KEY}
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Unit 5: Computer Vision</h3>
        <ol class="bx-qlist" start="26">
          <li><b>A:</b> A 50 x 40 RGB image stores 6,000 values. <b>R:</b> Each RGB pixel stores three values.
            <details><summary>Answer</summary> <b>(a)</b> 50 x 40 = 2,000 pixels, x 3 = 6,000. R gives the reason for the x 3.</details></li>
          <li><b>A:</b> In a grayscale image, a pixel value of 255 is black. <b>R:</b> Pixel values in a byte image run from 0 to 255.
            <details><summary>Answer</summary> <b>(d)</b> 255 is white and 0 is black, so A is false.</details></li>
          <li><b>A:</b> Object detection can find several objects in one image. <b>R:</b> Image classification gives one label to the whole image.
            <details><summary>Answer</summary> <b>(b)</b> Both true, but a fact about classification does not explain detection.</details></li>
          <li><b>A:</b> Instance segmentation outlines each object pixel by pixel. <b>R:</b> Segmentation is the same as drawing a bounding box.
            <details><summary>Answer</summary> <b>(c)</b> A box is detection. Segmentation traces the exact shape.</details></li>
        </ol>
        <h3 class="bx-mt-40">Two-statement items</h3>
        <ol class="bx-qlist" start="36">
          <li><b>Statement 1:</b> Recall = TP / (TP + FN). <b>Statement 2:</b> Precision matters more than recall for a disease test.
            <details><summary>Answer</summary> Only Statement 1 is correct. For a disease test, missing a patient is worse, so recall matters more.</details></li>
          <li><b>Statement 1:</b> Unsupervised learning works on labelled data. <b>Statement 2:</b> Association finds items that occur together.
            <details><summary>Answer</summary> Only Statement 2 is correct. Unsupervised learning uses unlabelled data.</details></li>
          <li><b>Statement 1:</b> An RGB image has three channels. <b>Statement 2:</b> A grayscale image stores one value per pixel.
            <details><summary>Answer</summary> Both statements are correct.</details></li>
        </ol>
      </div>
      <div>
        <h3>Unit 6: Natural Language Processing</h3>
        <ol class="bx-qlist" start="30">
          <li><b>A:</b> Stopwords are usually removed during text normalisation. <b>R:</b> Words like "is", "the" and "and" occur very often but add little meaning.
            <details><summary>Answer</summary> <b>(a)</b> They are removed precisely because they carry little meaning.</details></li>
          <li><b>A:</b> Lemmatisation gives a meaningful dictionary word. <b>R:</b> Lemmatisation is faster than stemming.
            <details><summary>Answer</summary> <b>(c)</b> Lemmatisation is slower, because it checks a dictionary. A is true.</details></li>
          <li><b>A:</b> A script bot can understand a question it was never programmed for. <b>R:</b> Script bots work from a fixed script.
            <details><summary>Answer</summary> <b>(d)</b> R is true, and it is why A is false.</details></li>
          <li><b>A:</b> A word that appears in all 5 documents of a corpus has a TFIDF of 0. <b>R:</b> Its IDF is log(5 / 5) = log 1 = 0.
            <details><summary>Answer</summary> <b>(a)</b> TFIDF = TF x IDF, and an IDF of 0 makes the product 0.</details></li>
          <li><b>A:</b> "The tree ate its homework" passes the syntax check. <b>R:</b> Semantic analysis checks whether a sentence makes sense.
            <details><summary>Answer</summary> <b>(b)</b> Both true. The grammar is fine, which is why A holds; R is about the next stage.</details></li>
          <li><b>A:</b> Tokenisation splits a sentence into words and symbols. <b>R:</b> Bag of Words keeps the order of words in a sentence.
            <details><summary>Answer</summary> <b>(c)</b> Bag of Words keeps only counts and loses word order.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Plain four-option practice for every unit is on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ questions</a>; text processing is worked on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">CBSE Class 10 AI NLP questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are A-R items practised in class?</p>
      <h2>How our live batch trains the reasoning, not just the answer key</h2>
      <p class="bx-lede">An answer key tells you the letter. It does not tell you which step of your thinking went wrong, and that is what decides the next item.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Solved aloud</h3><p>After a unit, the teacher puts up a handful of A-R items and a student talks through the three steps out loud. The class hears where a "both true" was decided too early.</p></div>
      <div class="bx-card"><h3>Mixed Section A rounds</h3><p>Wednesday rounds mix MCQs, A-R and two-statement items from several units, so students switch formats the way the paper makes them.</p></div>
      <div class="bx-card"><h3>Inside every mock</h3><p>From December, full timed mocks include these formats in Section A, then the items most of the class missed come back the next week with new facts.</p></div>
    </div>
    <p class="bx-mt-40">The mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>, and the 2025 and 2026 papers are discussed on <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">CBSE Class 10 AI previous year question papers</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise Section A reasoning in the batch, or one to one',
  chooseLede: 'In the batch, A-R items come after every unit and inside every mock, with classmates reasoning aloud alongside. One to one suits a student who keeps choosing (a) when the answer is (b): the teacher works on that one habit until it breaks. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'A-R items solved aloud after each unit',
    'Mixed Section A rounds on Wednesdays',
    'All Section A formats inside every mock'
  ],
  choosePersonal: [
    'Days and time chosen by your family',
    'Items picked from the units your child gets wrong',
    'Step-by-step reasoning checked on every miss',
    'New facts on old shapes until the habit holds',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'Most students do not need separate A-R coaching: the format becomes easy once the units are understood, which the batch does in order. One to one makes sense when a student knows the content but keeps losing Section A marks to the link step. Fees appear in your own currency.',
  zonesH2: 'Assertion reason practice for CBSE students in the Gulf and abroad',
  zonesLede: 'Families in Kuwait, Sharjah or Mombasa sit the same 417 paper, with the same Section A formats. Here is the batch hour this winter.',
  zonesAfter: 'If the batch hour is too late locally, one to one runs when it suits you. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about assertion and reason',
  faqH2: 'What students ask about Class 10 AI assertion reason questions',
  faqs: [
    ['Are assertion reason questions asked in CBSE Class 10 AI?', 'Yes. One-mark assertion and reason items appeared in Section A of the 2025 and 2026 CBSE Class 10 AI (417) board papers and in the 2025-26 sample paper, together with two-statement items. The 2026-27 sample paper for 417 is not out yet, so the exact number for 2027 is not known.'],
    ['What are the four options in assertion reason questions?', '(a) Both A and R are true and R is the correct explanation of A. (b) Both are true but R does not explain A. (c) A is true but R is false. (d) A is false but R is true. Some papers say "correct" and "incorrect" in place of true and false; the meaning is the same.'],
    ['How do you solve assertion reason questions quickly?', 'Judge A on its own, then R on its own. If A is false the answer is (d); if A is true and R false, it is (c). Only when both are true do you test the link by reading "A, because R". If that explains A, choose (a); if not, (b).'],
    ['How many marks is an assertion reason question in Class 10 AI?', 'One mark each, in Section A, the objective section. In the 2025-26 sample paper there was no negative marking in that section, so always attempt the item, using the three steps to narrow the options. Most students need under a minute per item once the method is habit.'],
    ['Where can I find assertion reason AI class 10 with answers?', 'This page has 35 original assertion and reason items for CBSE 417 grouped by unit: Part A, then Units 1, 2, 3, 5 and 6, plus three two-statement items. Each has the answer and the reasoning for it. Units 4 and 7 are practical only, so there are none from them.'],
    ['What is the difference between option (a) and option (b)?', 'In both, A and R are true. In (a), R is the reason A is true: "A, because R" makes sense. In (b), R is a true fact but explains something else, often a different term from the same unit. Most mistakes in this format are (a) chosen for a (b) item.'],
    ['What is a two-statement question in Class 10 AI?', 'It gives Statement 1 and Statement 2 with no reason to link. You choose whether both are correct, both incorrect, or only one of them is correct. These appeared alongside assertion and reason items in recent 417 papers and are practised at the end of the set on this page.'],
    ['Which units do assertion reason questions come from?', 'Past items have come from Part A, for example green skills, and from the AI units, such as ethical frameworks, model evaluation and text processing. Any theory unit can supply one, so this page covers Part A and Units 1, 2, 3, 5 and 6.'],
    ['Will there be assertion reason questions in the 2027 Class 10 AI exam?', 'We do not know yet. The format has appeared in the last two board papers and the 2025-26 sample paper, which is why we practise it, but the 2026-27 sample paper for 417 has not been published. We will not promise a count until it is.'],
    ['Are A-R items covered in your classes?', 'Yes. They are solved aloud after each unit and included in every full mock, together with MCQs and two-statement items. This is part of the monthly fee shown on this page, in the batch or one to one, with no admission fee and a free first class.']
  ],
  startH2: 'Solve five A-R items live with a teacher, free',
  startHtml: `        <p>In the free first class your child solves five assertion and reason items aloud with the teacher, using the three steps, and then a short mixed Section A set. You will hear exactly where the reasoning slips, and the mentor will tell you plainly whether the batch or one to one is the better fit.</p>
        <p>Want the full paper layout first? See <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the CBSE Class 10 AI exam date and paper pattern</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Assertion and reason questions'
};
