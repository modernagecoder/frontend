// CBSE Class 10 AI (417): MCQ bank for 2026-27, grouped by the current unit names.
// Intent: "class 10 AI MCQ", "AI class 10 chapter wise MCQ", "417 MCQ with answers",
// "evaluating models class 10 MCQ", "NLP class 10 MCQ", "computer vision class 10 MCQ".
// Distinct from ciq (question shapes for every mark band) and csq (solving the
// sample paper): this page IS the objective bank, 36 original MCQs, each with four
// options, the answer and a one-line reason, answers kept in the HTML inside
// <details> so readers can self-mark and crawlers still read them.
// Theory MCQs come only from Part A and Units 1, 2, 3, 5, 6; Units 4 and 7 are a
// short group labelled practical only. Paper weighting is quoted from the 2025-26
// sample paper (the 2026-27 417 SQP is not out); assertion-reason for 417 is NOT
// claimed (only IT 402 is confirmed).
// Every numerical was recomputed with python3 on 2026-11-06 (scratch cb01.py):
// confusion matrix TP 54, FP 6, FN 36, TN 104 gives accuracy 0.79, precision 0.90,
// recall 0.60, F1 0.72 (plain average 0.75), wrong predictions 42; all-healthy
// model 95/100 = 0.95, recall 0; perceptron 0.4 + 0 + 0.2 - 0.5 = 0.1 (no bias
// 0.6, middle input taken as 1 gives 0.8, weights alone 1.3); 640 x 480 = 307,200
// pixels, x 3 = 921,600; RGB 200 x 100 x 3 = 60,000, grayscale 20,000; 2^8 = 256;
// tokens of the sample sentence = 9, unique lowercased words = 6; BoW vector
// [2, 1, 1, 0]; IDF log10(4/4) = 0; median of 9, 3, 10, 4, 4 = 4 (mean 6);
// np.median([1, 4, 9, 7]) = 5.5 (np.mean 5.25), run with numpy.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-mcq-questions',
  code: 'cb01',
  board: 'cbse',
  themeColor: '#2E5266',
  dateModified: '2026-11-06',
  title: 'Class 10 AI MCQ 2026-27 (417) with Answers, Unit-Wise',
  description: 'Class 10 AI MCQ for CBSE 417, 2026-27: 36 original questions sorted by the new unit names, each with its answer and a one-line reason. Practised live.',
  ogTitle: 'Class 10 AI MCQ with Answers, by the 2026-27 Unit Names',
  ogDesc: '36 original CBSE Class 10 AI (417) MCQs grouped by the 2026-27 units: Part A, project cycle and ethics, modeling, evaluating models, computer vision and NLP, with answers, reasons, the traps and how Section A is marked.',
  twDesc: '36 original 417 MCQs by the 2026-27 units, each with the answer and a one-line reason, plus the commonest traps.',
  headline: 'Class 10 AI MCQ for 2026-27: 36 Questions by the New Unit Names, with Answers and Reasons',
  courseName: 'CBSE Class 10 AI (417) MCQ Practice, Live Online',
  courseDesc: 'Live online MCQ practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: timed objective sets for Part A and every theory unit, answers marked live with the reason behind each option, weak units re-drilled the following week and full Section A rounds inside timed mock tests, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; MCQ bank',
  navLinks: [['#weightage', 'How MCQs count'], ['#bank-a', 'MCQ bank'], ['#traps', 'Traps'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'MCQ questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; MCQ bank 2026-27',
  h1: 'Class 10 AI MCQ for 2026-27, sorted by the units you will actually be examined on.',
  lede: 'This class 10 AI MCQ bank follows the 2026-27 CBSE 417 unit names, not the older chapter list many question banks still use. There are 36 original questions, each with four options, the answer and one line on why it is right or why the tempting option is wrong. Tap Answer to check yourself. In our Monday and Wednesday batch, sets like these are timed, marked live and the weakest unit comes back the next week.',
  heroNote: 'Live online &middot; 36 original MCQs below &middot; timed sets marked in class &middot; weak units re-drilled &middot; Section A inside every mock &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live MCQ practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When the MCQ sets are run',
    title: 'MCQ practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, one-unit timed set', '9:00', 'PM IST'],
      ['Wednesday, mixed-unit round', '9:00', 'PM IST'],
      ['Original MCQs on this page', '36', 'answered'],
      ['Section A inside each mock', '24', 'marks']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and East Africa:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour.',
    stamps: ['Objective 24 of 50', 'No negative marking']
  },
  picksH2: 'Courses behind this MCQ practice',
  picksLede: 'The 417 course whose Class 10 batch runs these timed sets, the Python course for the practical-only units, and the Orange course for the no-code tools that options in the paper often name.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: each unit taught, then tested as a timed objective set that is marked in class with the reason for every option.' },
    { slug: 'python-complete-masterclass-teens', code: 'Units 4 and 7 / Python', h3: 'Python for Teens', p: 'NumPy, Matplotlib and the small programs behind the practical exam, where questions like the median and scatter ones below turn into code.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code tools / Orange', h3: 'Visual ML with Orange', p: 'Hands-on with the no-code tool the curriculum uses for data, image and text case studies, so tool-based options stop being guesses.' }
  ],
  capsule: 'Class 10 AI MCQ practice for 2026-27 should follow the current CBSE 417 units: Part A employability skills, then Unit 1 (AI Project Cycle and Ethical Frameworks), Unit 2 (Advanced Concepts of Modeling), Unit 3 (Evaluating Models), Unit 5 (Computer Vision) and Unit 6 (Natural Language Processing). Units 4 and 7 are practical only. In the 2025-26 sample paper, objective questions carried 24 of the 50 theory marks: any 4 of 6 from Part A and any 20 of 24 from the AI units, with no negative marking. Modern Age Coders drills these MCQs live in a Monday and Wednesday 9:00 PM IST batch, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="weightage">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How much are MCQs worth?</p>
      <h2>How class 10 AI MCQs are weighted in the 417 paper</h2>
      <p class="bx-lede">The 417 sample paper for 2026-27 is not out yet and the curriculum is unchanged, so the honest guide is the 2025-26 sample paper and its blueprint. Here is its objective section.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Group in this bank</th><th scope="col">One-mark objective items printed (2025-26)</th><th scope="col">You answer</th></tr></thead>
        <tbody>
          <tr><td>Part A: Communication, Self-Management, ICT, Entrepreneurial and Green Skills</td><td class="bx-num">6</td><td>any 4</td></tr>
          <tr><td>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI</td><td class="bx-num">5</td><td rowspan="5">any 20 of the 24</td></tr>
          <tr><td>Unit 2: Advanced Concepts of Modeling in AI</td><td class="bx-num">4</td></tr>
          <tr><td>Unit 3: Evaluating Models</td><td class="bx-num">6</td></tr>
          <tr><td>Unit 5: Computer Vision</td><td class="bx-num">4</td></tr>
          <tr><td>Unit 6: Natural Language Processing</td><td class="bx-num">5</td></tr>
          <tr><td>Unit 4: Statistical Data and Unit 7: Advance Python</td><td class="bx-num">0</td><td>practical only</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the numbers mean for practice</h3>
        <ul class="bx-check">
          <li><b>24 of 50 theory marks.</b> Almost half the written paper, one mark per item.</li>
          <li><b>No negative marking.</b> Leave nothing blank.</li>
          <li><b>Built-in choice.</b> Two Part A items and four AI items can be skipped, so one weak unit need not cost a mark.</li>
          <li><b>Evaluating Models leads</b> with six of the 24 AI items, several of them calculations.</li>
        </ul>
      </div>
      <div>
        <h3>Why the unit names matter</h3>
        <p>Many free banks still use the earlier chapter titles, such as Data Science or Evaluation. In 2026-27, data handling sits in Unit 4, which is examined only in the practical, so an old-style bank mixes theory and practical items. This bank uses the current names, so you can see which items count in Section A.</p>
        <p>The full blueprint, written questions included, is on <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">CBSE Class 10 AI exam date and paper pattern</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="bank-a">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Part A and Unit 1</p>
      <h2>Class 10 AI MCQ with answers: Part A and the project cycle unit</h2>
      <p class="bx-lede">Questions 1 to 10. Try each before opening the answer, then read the reason: it names the option most students wrongly pick.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Part A: employability skills (one per unit)</h3>
        <ol class="bx-qlist">
          <li>During a group discussion, Arjun nods and keeps eye contact while a classmate speaks. This is
            <br>(a) verbal communication <br>(b) written communication <br>(c) non-verbal communication <br>(d) visual communication
            <details><summary>Answer</summary> <b>(c)</b> No words are used, only body language. Visual communication means charts, signs and pictures.</details></li>
          <li>In a SMART goal, the letter M stands for
            <br>(a) Meaningful <br>(b) Measurable <br>(c) Motivating <br>(d) Manageable
            <details><summary>Answer</summary> <b>(b)</b> You must be able to track progress. "Manageable" is the trap: being realistic is what the A, achievable, covers.</details></li>
          <li>Which of these protects a computer from viruses that arrive with downloads?
            <br>(a) defragmenting the disk <br>(b) installing and updating antivirus software <br>(c) raising screen brightness <br>(d) deleting temporary files
            <details><summary>Answer</summary> <b>(b)</b> The others are care and maintenance tasks; none of them stops harmful software.</details></li>
          <li>Meera sees that students near her school cannot buy healthy snacks, and starts a small stall. Which entrepreneurial quality does she show first?
            <br>(a) spotting an opportunity <br>(b) avoiding every risk <br>(c) following instructions <br>(d) waiting for a job offer
            <details><summary>Answer</summary> <b>(a)</b> An entrepreneur starts by noticing an unmet need. Starting a stall involves risk, so (b) contradicts the story.</details></li>
          <li>Using compost and crop rotation in place of chemical fertilisers is part of
            <br>(a) organic farming <br>(b) monoculture <br>(c) deforestation <br>(d) heavy pesticide use
            <details><summary>Answer</summary> <b>(a)</b> Organic farming keeps soil healthy without synthetic chemicals; monoculture repeats one crop and drains it.</details></li>
        </ol>
        <p>Every Part A unit, with its short answers as well, is covered on <a class="bx-link" href="/cbse-class-10-ai-employability-skills-part-a">Part A employability skills</a>.</p>
      </div>
      <div>
        <h3>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI</h3>
        <ol class="bx-qlist" start="6">
          <li>Which stage of the AI project cycle comes straight after Data Acquisition?
            <br>(a) Modelling <br>(b) Data Exploration <br>(c) Problem Scoping <br>(d) Evaluation
            <details><summary>Answer</summary> <b>(b)</b> Collected data is explored and visualised before a model is chosen. Jumping to (a) is the usual slip.</details></li>
          <li>In the 4Ws problem canvas, which W asks how solving the problem will benefit the people affected?
            <br>(a) Who <br>(b) What <br>(c) Where <br>(d) Why
            <details><summary>Answer</summary> <b>(d)</b> Why records the value of the solution. What describes the problem itself, which is why it tempts.</details></li>
          <li>A set of ethical rules written only for hospitals and medical AI is
            <br>(a) a value-based framework <br>(b) a sector-based framework <br>(c) a rule-based model <br>(d) a utility-based framework
            <details><summary>Answer</summary> <b>(b)</b> It is built for one sector, healthcare. Bioethics is the standard example of a sector-based framework.</details></li>
          <li>A city picks the traffic AI that cuts total travel time for the most people, even though a few roads get slower. Which approach is this?
            <br>(a) rights-based <br>(b) virtue-based <br>(c) utility-based <br>(d) sector-based
            <details><summary>Answer</summary> <b>(c)</b> It weighs the overall benefit against the harm. A rights-based approach would protect every road user first.</details></li>
          <li>Which of these is NOT one of the four principles of bioethics?
            <br>(a) respect for autonomy <br>(b) do not harm <br>(c) ensure maximum benefit <br>(d) maximise the hospital's income
            <details><summary>Answer</summary> <b>(d)</b> The fourth principle is justice, meaning fair treatment. Income appears nowhere in the four.</details></li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="evaluating">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Units 2 and 3</p>
      <h2>Modeling and evaluating models: class 10 MCQ, including the numericals</h2>
      <p class="bx-lede">Questions 11 to 22. Unit 3 carries the most objective items, and five of its seven below need a quick calculation.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Unit 2: Advanced Concepts of Modeling in AI</h3>
        <ol class="bx-qlist" start="11">
          <li>A spam filter gets better every week as users mark new emails as spam. It follows
            <br>(a) a rule-based approach <br>(b) a learning-based approach <br>(c) a fixed if-else checklist <br>(d) no model at all
            <details><summary>Answer</summary> <b>(b)</b> It learns from fresh labelled data. A rule-based system changes only when a person rewrites the rules.</details></li>
          <li>A model predicts tomorrow's highest temperature in degrees Celsius. This is
            <br>(a) classification <br>(b) clustering <br>(c) regression <br>(d) association
            <details><summary>Answer</summary> <b>(c)</b> The output is a continuous number. Labels such as "hot" or "cold" would make it classification.</details></li>
          <li>An online shop groups its customers by buying habits, with no labels given. It uses
            <br>(a) supervised learning, classification <br>(b) unsupervised learning, clustering <br>(c) supervised learning, regression <br>(d) reinforcement learning
            <details><summary>Answer</summary> <b>(b)</b> No labels means unsupervised, and grouping means clustering. Association finds items bought together, not groups of people.</details></li>
          <li>A perceptron has inputs 1, 0 and 1, weights 0.4, 0.7 and 0.2, and a bias of -0.5. What is the weighted sum plus bias?
            <br>(a) 0.6 <br>(b) 0.8 <br>(c) 0.1 <br>(d) 1.3
            <details><summary>Answer</summary> <b>(c)</b> 0.4 + 0 + 0.2 - 0.5 = 0.1. Option (a) forgets the bias; (b) treats the middle input as 1.</details></li>
          <li>Which deep learning network is designed for images, using small filters that slide across the picture?
            <br>(a) ANN <br>(b) CNN <br>(c) a decision tree <br>(d) a rule-based system
            <details><summary>Answer</summary> <b>(b)</b> A convolutional neural network. ANN is the general family, so it is close but not the specific answer.</details></li>
        </ol>
      </div>
      <div>
        <h3>Unit 3: Evaluating Models</h3>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Use for questions 16 to 19</b><span>disease = positive</span></figcaption>
  <pre>A model screens 200 X-ray reports.
It flags 60 as positive; 54 of them
really have the disease. Of the 140
it calls negative, 36 have it.

              Reality: Yes  Reality: No
Predicted Yes   TP = 54      FP = 6
Predicted No    FN = 36      TN = 104</pre>
  <p class="bx-code-note">Build the matrix from the words first. Every option below that looks right but is not comes from a swapped cell or a skipped formula.</p>
</figure>
        <ol class="bx-qlist bx-mt-40" start="16">
          <li>The precision of this model is
            <br>(a) 0.60 <br>(b) 0.79 <br>(c) 0.90 <br>(d) 0.72
            <details><summary>Answer</summary> <b>(c)</b> TP / (TP + FP) = 54 / 60 = 0.90. Option (a) is the recall.</details></li>
          <li>The recall of this model is
            <br>(a) 0.60 <br>(b) 0.90 <br>(c) 0.27 <br>(d) 0.79
            <details><summary>Answer</summary> <b>(a)</b> TP / (TP + FN) = 54 / 90 = 0.60. Option (c) divides TP by all 200 reports, which no metric does.</details></li>
          <li>The F1 score is
            <br>(a) 0.75 <br>(b) 0.72 <br>(c) 0.79 <br>(d) 0.54
            <details><summary>Answer</summary> <b>(b)</b> 2 x 0.90 x 0.60 / (0.90 + 0.60) = 1.08 / 1.50 = 0.72. Option (a) is the plain average, the most common mistake.</details></li>
          <li>The accuracy, and the number of wrong predictions, are
            <br>(a) 0.79 and 42 <br>(b) 0.90 and 20 <br>(c) 0.72 and 56 <br>(d) 0.79 and 36
            <details><summary>Answer</summary> <b>(a)</b> (54 + 104) / 200 = 0.79, and wrong = FP + FN = 6 + 36 = 42. Option (d) counts only the false negatives.</details></li>
          <li>For a disease test, which error is most dangerous, so which metric matters most?
            <br>(a) false positives, precision <br>(b) false negatives, recall <br>(c) true negatives, accuracy <br>(d) true positives, precision
            <details><summary>Answer</summary> <b>(b)</b> A missed patient goes untreated. For a spam filter the answer flips to precision.</details></li>
          <li>Of 100 patients, 5 have a rare disease. A lazy model calls everyone healthy. Its accuracy is
            <br>(a) 5% <br>(b) 50% <br>(c) 95% <br>(d) 100%
            <details><summary>Answer</summary> <b>(c)</b> 95 of 100 are right, yet its recall is 0. Accuracy flatters a model when one class is rare.</details></li>
          <li>Why is a model not tested on the same data it was trained on?
            <br>(a) testing would be slower <br>(b) the score would be over-optimistic and hide overfitting <br>(c) training data has no labels <br>(d) the data would be deleted
            <details><summary>Answer</summary> <b>(b)</b> A model can memorise its training data, so only unseen test data shows how it will really perform.</details></li>
        </ol>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="cvnlp">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Units 5 and 6, then the practical units</p>
      <h2>Computer vision class 10 MCQ and NLP class 10 MCQ, with the counting questions</h2>
      <p class="bx-lede">Questions 23 to 36. Pixel and token counts are where a careful student and a rushed one part ways.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Unit 5: Computer Vision</h3>
        <ol class="bx-qlist" start="23">
          <li>A self-driving car's camera draws a box around every pedestrian and cyclist in a frame. Which task is this?
            <br>(a) image classification <br>(b) object detection <br>(c) instance segmentation <br>(d) image processing only
            <details><summary>Answer</summary> <b>(b)</b> It finds and locates many objects with boxes. Segmentation would trace each object's exact outline in pixels.</details></li>
          <li>How many pixels are there in an image of resolution 640 x 480?
            <br>(a) 1,120 <br>(b) 307,200 <br>(c) 921,600 <br>(d) 30,720
            <details><summary>Answer</summary> <b>(b)</b> 640 x 480 = 307,200. Option (c) is three times that, the count of RGB values, not pixels.</details></li>
          <li>A colour (RGB) image is 200 x 100 pixels. How many numbers does it store?
            <br>(a) 20,000 <br>(b) 300 <br>(c) 60,000 <br>(d) 600
            <details><summary>Answer</summary> <b>(c)</b> Each pixel holds a red, a green and a blue value: 200 x 100 x 3. Option (a) would be the grayscale version.</details></li>
          <li>In a grayscale byte image, a pixel value of 0 means
            <br>(a) pure white <br>(b) pure black <br>(c) mid grey <br>(d) a missing pixel
            <details><summary>Answer</summary> <b>(b)</b> 0 is no brightness and 255 is full brightness, white. Reversing the two is a frequent slip.</details></li>
          <li>Why does a byte image allow exactly 256 pixel values?
            <br>(a) a byte has 8 bits, and 2 to the power 8 is 256 <br>(b) screens show only 256 colours <br>(c) each pixel uses 256 bytes <br>(d) cameras record 256 shades
            <details><summary>Answer</summary> <b>(a)</b> Eight bits give 256 patterns, which is why values run from 0 to 255.</details></li>
        </ol>
      </div>
      <div>
        <h3>Unit 6: Natural Language Processing</h3>
        <ol class="bx-qlist" start="28">
          <li>How many tokens does the sentence "AI helps doctors, and doctors help patients." produce?
            <br>(a) 7 <br>(b) 6 <br>(c) 9 <br>(d) 8
            <details><summary>Answer</summary> <b>(c)</b> Seven words plus the comma plus the full stop. Punctuation marks are tokens too.</details></li>
          <li>After lowercasing and dropping punctuation, how many unique words does that sentence give a Bag of Words dictionary?
            <br>(a) 9 <br>(b) 7 <br>(c) 6 <br>(d) 5
            <details><summary>Answer</summary> <b>(c)</b> "doctors" repeats: ai, helps, doctors, and, help, patients. Option (d) wrongly merges "help" and "helps", which happens only after stemming.</details></li>
          <li>With the dictionary [rain, go, away, come], the vector for "rain rain go away" is
            <br>(a) [1, 1, 1, 0] <br>(b) [2, 1, 1, 0] <br>(c) [2, 1, 1, 1] <br>(d) [1, 2, 1, 0]
            <details><summary>Answer</summary> <b>(b)</b> Bag of Words counts occurrences in dictionary order. Option (a) only marks presence.</details></li>
          <li>"studies" becomes "studi" with one technique and "study" with another. Which pairing is right?
            <br>(a) stemming gives studi, lemmatisation gives study <br>(b) lemmatisation gives studi, stemming gives study <br>(c) both give study <br>(d) tokenisation gives studi
            <details><summary>Answer</summary> <b>(a)</b> Stemming chops the ending and may leave a non-word; lemmatisation returns a real dictionary word.</details></li>
          <li>A word appears in all 4 documents of a corpus. With IDF taken as log(N / documents containing the word), its IDF is
            <br>(a) 4 <br>(b) 1 <br>(c) 0 <br>(d) 0.25
            <details><summary>Answer</summary> <b>(c)</b> log(4 / 4) = log 1 = 0, so its TFIDF is 0: a word found everywhere tells the documents apart not at all.</details></li>
          <li>"The chair sang a song" is grammatically correct but makes no sense. At which stage does it fail?
            <br>(a) lexical analysis <br>(b) syntactic analysis <br>(c) semantic analysis <br>(d) tokenisation
            <details><summary>Answer</summary> <b>(c)</b> The grammar passes the syntactic check; the meaning fails the semantic one.</details></li>
        </ol>
      </div>
    </div>
    <h3 class="bx-mt-40">Units 4 and 7: practical only, not in the theory paper</h3>
    <p>These units carry no Section A items, but the practical exam and viva ask students to predict what a program prints.</p>
    <ol class="bx-qlist" start="34">
      <li>For the data 9, 3, 10, 4, 4, the median is
        <br>(a) 10 <br>(b) 6 <br>(c) 4 <br>(d) 3
        <details><summary>Answer</summary> <b>(c)</b> Sort first: 3, 4, 4, 9, 10, so the middle value is 4. Option (a) is the middle of the unsorted list and (b) is the mean.</details></li>
      <li>What does <code>print(np.median([1, 4, 9, 7]))</code> show?
        <br>(a) 9 <br>(b) 5.5 <br>(c) 5.25 <br>(d) 4
        <details><summary>Answer</summary> <b>(b)</b> Sorted, the list is 1, 4, 7, 9; with an even count the median is (4 + 7) / 2. Option (c) is the mean.</details></li>
      <li>Which Matplotlib call draws a scatter chart of x against y?
        <br>(a) <code>plt.plot(x, y)</code> <br>(b) <code>plt.scatter(x, y)</code> <br>(c) <code>plt.bar(x, y)</code> <br>(d) <code>plt.hist(x)</code>
        <details><summary>Answer</summary> <b>(b)</b> <code>plt.plot</code> joins the points into a line chart by default.</details></li>
    </ol>
    <p>The programs behind these three are written out on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="traps">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How do students lose easy marks?</p>
      <h2>MCQ technique for 417, and the traps that cost the most</h2>
      <p class="bx-lede">Objective marks are rarely lost on unstudied topics. They go to distractors built from half-remembered ideas. These are the patterns we see most when marking class sets.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Trap</th><th scope="col">What it looks like</th><th scope="col">The habit that beats it</th></tr></thead>
        <tbody>
          <tr><td>Swapped cells</td><td>Precision and recall both appear as options, from FP and FN reversed</td><td>Draw the matrix with Reality across the top every time, even for a one-mark item</td></tr>
          <tr><td>Average for F1</td><td>An option equal to (P + R) / 2</td><td>Write 2PR / (P + R) beside the question before choosing</td></tr>
          <tr><td>Forgotten punctuation</td><td>Token counts one or two short</td><td>Circle each comma and full stop before counting</td></tr>
          <tr><td>Pixels versus values</td><td>A figure three times too large or too small</td><td>Ask: does the question want pixels, or numbers stored?</td></tr>
          <tr><td>Family versus member</td><td>ANN when the answer is CNN; supervised when it is classification</td><td>Pick the most specific option that is still true</td></tr>
          <tr><td>Close definitions</td><td>Clustering against association; stemming against lemmatisation</td><td>Learn one example of each that cannot belong to the other</td></tr>
          <tr><td>The NOT question</td><td>Three true statements and one odd one out</td><td>Underline NOT, then mark each option true or false on its own</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Read all four first</h3><p>It catches the option that is true but less specific than the one the examiner wants.</p></div>
      <div class="bx-card"><h3>Eliminate, then decide</h3><p>Strike the plainly wrong ones. With no negative marking, a choice between the last two is always worth making.</p></div>
      <div class="bx-card"><h3>Choose your skips early</h3><p>On a first read, mark the four AI items you are least sure of, answer the rest in order, then return if time allows.</p></div>
    </div>
    <p class="bx-mt-40">
      We have not seen CBSE confirm assertion and reason items for 417, so this bank keeps to four-option MCQs;
      judging a reason against a claim is still drilled in class. Written answers for every unit are on <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are MCQs drilled in class?</p>
      <h2>How the live batch turns an MCQ bank into marks</h2>
      <p class="bx-lede">A bank worked alone gives a score. It rarely shows why the misses happened or whether they will happen again in February. That is what a teacher adds.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Timed sets, marked live</h3><p>After each unit, the Monday class sits a fresh set of ten to twelve items against the clock. Answers are then gone through on screen, and for every option the class says why it is right or why it is a trap.</p></div>
      <div class="bx-card"><h3>Weak units come back</h3><p>Each student's misses are logged by unit. The unit with the most misses returns in the Wednesday mixed round, with new numbers, so a remembered answer is no help and only the method scores.</p></div>
      <div class="bx-card"><h3>Section A inside full mocks</h3><p>From December, each full timed mock opens with a complete objective section. Students practise picking their four skips, then see their score by unit with the reasons still fresh.</p></div>
    </div>
    <p class="bx-mt-40">
      Any student can stop a set to ask why an option fails, and the teacher works it through on the shared screen. The mock calendar is on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>,
      and the term plan that the sets sit inside is on <a class="bx-link" href="/cbse-class-10-ai-board-exam-preparation">CBSE Class 10 AI board exam preparation</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Drill these MCQs in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Same question sets, same marking, same teachers. The batch gives a fixed rhythm with classmates to race against the clock; one to one moves at your child\'s pace on the units they keep missing. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'A timed objective set after every unit',
    'Mixed-unit rounds on Wednesdays',
    'Full Section A inside every mock from December'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Sets built only from the units your child misses most',
    'Numerical MCQs repeated with new figures until steady',
    'Every wrong option talked through, one student at a time',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who scores well on most units but keeps dropping marks on confusion matrices or token counts often fixes it in a few one to one sessions. A student who has not yet covered every unit gains more from the batch, where the whole syllabus is taught and tested in order. Fees are shown in your own currency.',
  zonesH2: 'Class 10 AI MCQ practice for CBSE students in the Gulf and abroad',
  zonesLede: 'A CBSE school in Dubai, Riyadh or Nairobi sets the same 417 paper, so the same objective section is waiting at the end of the year. Here is the batch hour in local time this winter.',
  zonesAfter: 'If 9:00 PM IST lands too late where you live, personalised one to one runs at an hour you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI MCQs',
  faqH2: 'What students and parents ask about class 10 AI MCQs',
  faqs: [
    ['Where can I find class 10 AI MCQ with answers for 2026-27?', 'This page has 36 original MCQs for CBSE 417, sorted by the 2026-27 unit names: Part A employability skills, then Units 1, 2, 3, 5 and 6, plus three practical-only items for Units 4 and 7. Each has four options, the answer and a one-line reason.'],
    ['How many MCQs are there in the CBSE Class 10 AI 417 paper?', 'In the 2025-26 sample paper, the objective section printed 30 one-mark items and students answered 24: any 4 of 6 from Part A and any 20 of 24 from the AI units. The 2026-27 sample paper for 417 is not out yet.'],
    ['Is there negative marking in class 10 AI MCQs?', 'No. The 2025-26 sample paper has no negative marking in the objective section, so attempt every item, using elimination when unsure.'],
    ['Which unit has the most MCQs in Class 10 AI?', 'Evaluating Models, with 6 of the 24 AI objective items in the 2025-26 blueprint, many of them confusion matrix calculations. Units 1 and 6 follow with 5 each, and Units 2 and 5 have 4 each.'],
    ['Are MCQs asked from Statistical Data and Advance Python?', 'Not in the theory paper. Units 4 and 7 are assessed through the practical: the file, the practical exam and the viva. Examiners there ask what a short NumPy or Matplotlib program will show.'],
    ['Are assertion reason questions asked in CBSE Class 10 AI?', 'We cannot confirm it for 417. Assertion and reason items are confirmed for the related IT 402 paper, but the 2026-27 sample paper for 417 is not out. We still practise judging whether a reason explains a claim.'],
    ['How should I practise AI class 10 chapter wise MCQ?', 'One unit at a time first, timed at about a minute per item, then mixed sets once every unit is done. Read the reason for every option, and redo the weakest unit a week later with new numbers.'],
    ['Are numerical MCQs asked in Class 10 AI?', 'Yes. Expect confusion matrix metrics (accuracy, precision, recall, F1 score), the perceptron weighted sum, pixel and RGB value counts, token counts and Bag of Words vectors.'],
    ['How long should I spend on Section A?', 'Our mocks give the objective section about 45 to 50 minutes of the two hours, leaving the rest for written answers.'],
    ['Is MCQ practice included in your classes, or is it extra?', 'It is part of ordinary teaching: timed sets, live marking, re-drills and mocks are all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Sit a free live MCQ set with a teacher',
  startHtml: `        <p>In the free first class your child takes a short timed set from two units, then goes through it with the teacher option by option, including the confusion matrix and token-count items that catch most students. You will see how the marking works, and afterwards the mentor tells you plainly which units need the most work and whether the batch or one to one suits your child better.</p>
        <p>Want the full picture of the subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI MCQ'
};
