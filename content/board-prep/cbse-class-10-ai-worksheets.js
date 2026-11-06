// CBSE Class 10 AI (417): unit-wise worksheets with answers, session 2026-27.
// Intent: "class 10 AI worksheets", "AI class 10 worksheet with answers",
// "417 unit wise worksheet", "practice sheet AI class 10".
// Distinct from cb01 (objective-only bank) and ciq (answer shapes by mark band): this page
// IS six printable worksheets, one per examined block (Part A, Units 1, 2, 3, 5, 6), each
// mixing MCQ, fill in the blank, true or false with correction, matching, short answer and a
// numerical or case, with the full answer key printed in plain view under the sheet. A
// seventh practice sheet covers the practical-only Units 4 and 7. All questions original.
// Unit marks (Part A 10, U1 7, U2 11, U3 10, U5 4, U6 8; U4 and U7 practical only) are from
// the CBSE 417 Class X curriculum for 2026-2027 (cbseacademic Curriculum27/Sec/417-AI-X.pdf,
// read 2026-11-06). Six AI Project Cycle stages per the CBSE Class X AI Facilitator Handbook.
// Every numerical and the Python output were recomputed with python3 on 2026-11-06 (scratch
// writers/cbse-class-10-ai-worksheets/py/cb19.py): perceptron 0.3 - 0.6 + 0 + 0.2 = -0.1,
// step output 0 (without bias -0.3); spam matrix TP 80 FP 20 FN 40 TN 360 of 500: accuracy
// 0.88, error 0.12, precision 0.80, recall 0.67 (0.6667), F1 0.73 (0.7273; plain average
// 0.73 too, so the reason line uses the formula, not the option), wrong 60; 1920 x 1080 =
// 2,073,600 pixels, x 3 = 6,220,800 values; 3 x 3 convolution of [[1,2,0],[0,1,3],[2,1,1]]
// with [[0,1,0],[1,-4,1],[0,1,0]] = 2, ReLU 2; tokens of "Wow! AI writes poems, songs and
// code." = 10; corpus the cat sat / the dog sat / the cat ran: df the 3, cat 2, sat 2, dog 1,
// ran 1; IDF log10(3/df): 0, 0.176, 0.176, 0.477, 0.477; BoW D2 [1,0,1,1,0]; numpy mean of
// [4, 8, 6, 8, 9] = 7.0, median 8.0, statistics.mode 8; zip-add [11, 22, 33].
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-worksheets',
  code: 'cb19',
  board: 'cbse',
  themeColor: '#73304A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Worksheets 2026-27 (417) with Answers',
  description: 'Class 10 AI worksheets for CBSE 417, 2026-27: one original sheet per examined unit plus Part A, mixed question types, answer key printed under each.',
  ogTitle: 'Class 10 AI Worksheets with Answers, One per Unit',
  ogDesc: 'Six original CBSE Class 10 AI (417) worksheets for 2026-27, one each for Part A and Units 1, 2, 3, 5 and 6, plus a practical sheet for Units 4 and 7, with every answer printed below the sheet.',
  twDesc: 'Original 417 worksheets for 2026-27: MCQ, fill in the blank, true or false, numericals and a case on every sheet, answer key underneath.',
  headline: 'Class 10 AI Worksheets for 2026-27: One Original Sheet per Unit, with the Answer Key Below',
  courseName: 'CBSE Class 10 AI (417) Worksheets and Practice, Live Online',
  courseDesc: 'Live online worksheet practice for CBSE Class 10 Artificial Intelligence (417), session 2026-27: a mixed-format worksheet after every unit, answers checked against the CBSE marking style on a shared screen, a second version of the sheet for the questions a student missed, and a bound revision set before the mocks, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Worksheets',
  navLinks: [['#how', 'How to use'], ['#ws-a', 'Worksheets'], ['#practical', 'Practical sheet'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Worksheets']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Worksheets 2026-27',
  h1: 'Class 10 AI worksheets for 2026-27, one for each unit the board examines, answers underneath.',
  lede: 'These class 10 AI worksheets cover CBSE subject 417 for the 2026-27 session: one sheet for Part A and one for each theory unit, Units 1, 2, 3, 5 and 6, plus a short practice sheet for the two practical-only units. Each sheet mixes question types the way a school test does, so a student meets MCQs, blanks, true or false with a correction, short answers and one calculation or case on the same page. The answer key sits directly under its sheet. In our live batch the same kind of sheet closes every unit and is checked with the class.',
  heroNote: 'Live online &middot; 6 unit worksheets plus a practical sheet &middot; answer keys printed &middot; a fresh version for every miss &middot; first class free',
  waText: 'Hello Modern Age Coders. I want unit-wise worksheet practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When the worksheets are done',
    title: 'Worksheet practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, unit taught, sheet set', '9:00', 'PM IST'],
      ['Wednesday, sheet checked live', '9:00', 'PM IST'],
      ['Worksheets on this page', '7', 'with keys'],
      ['Theory marks they cover', '50', 'of 50']
    ],
    zones: '<b>Dubai, Abu Dhabi, Muscat:</b> 7:30 PM. <b>Riyadh, Doha, Kuwait City, Manama:</b> 6:30 PM. <b>Nairobi:</b> 6:30 PM. <b>London:</b> 3:30 PM in winter. <b>Singapore:</b> one to one at a local hour.',
    stamps: ['One sheet per unit', 'Key below each sheet']
  },
  picksH2: 'Courses these worksheets come from',
  picksLede: 'The 417 course that sets a worksheet after every unit, the Python course behind the practical sheet, and the Orange course for the no-code tool that several sheet questions name.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Every 417 unit taught live and closed with a mixed worksheet, checked in the next class against the way CBSE awards marks.' },
    { slug: 'python-complete-masterclass-teens', code: 'Units 4 and 7 / Python', h3: 'Python for Teens', p: 'Jupyter, NumPy and Matplotlib: the programs the practical sheet asks students to predict, written and run until the output is no surprise.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code / Orange', h3: 'Visual ML with Orange', p: 'Widgets, data tables and test-and-score in the drag-and-drop tool the handbook uses for the statistics, vision and text walkthroughs.' }
  ],
  capsule: 'Class 10 AI worksheets for 2026-27 should follow the examined CBSE 417 blocks: Part A employability skills (10 marks), Unit 1 project cycle and ethics (7), Unit 2 modeling (11), Unit 3 evaluating models (10), Unit 5 computer vision (4) and Unit 6 NLP (8). Units 4 and 7 are tested only in the practical. A good worksheet mixes MCQs, short answers and one numerical or case, with the key printed under it. Modern Age Coders sets and checks a worksheet after every unit in a live Monday and Wednesday 9:00 PM IST batch, or one to one at your own time.',
  sections: [
`<section class="bx-section bx-section--tint" id="how">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is on each sheet?</p>
      <h2>What should a class 10 AI worksheet cover in 2026-27?</h2>
      <p class="bx-lede">A useful 417 unit wise worksheet covers one examined block, uses several question types, and ends with the answer key. The table shows the seven sheets on this page against the marks each block carries in the 2026-2027 curriculum.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Sheet</th><th scope="col">Block it covers</th><th scope="col">Theory marks (2026-27)</th><th scope="col">Question types on the sheet</th></tr></thead>
        <tbody>
          <tr><td>Worksheet 1</td><td>Part A: Communication, Self-Management, ICT, Entrepreneurial and Green Skills</td><td class="bx-num">10</td><td>MCQ, fill in, true or false, short answer</td></tr>
          <tr><td>Worksheet 2</td><td>Unit 1: Revisiting AI Project Cycle and Ethical Frameworks for AI</td><td class="bx-num">7</td><td>MCQ, fill in, matching, case</td></tr>
          <tr><td>Worksheet 3</td><td>Unit 2: Advanced Concepts of Modeling in AI</td><td class="bx-num">11</td><td>MCQ, true or false, perceptron numerical, identify the learning type</td></tr>
          <tr><td>Worksheet 4</td><td>Unit 3: Evaluating Models</td><td class="bx-num">10</td><td>Confusion matrix numerical, MCQ, metric choice, short answer</td></tr>
          <tr><td>Worksheet 5</td><td>Unit 5: Computer Vision</td><td class="bx-num">4</td><td>MCQ, pixel count, convolution step, short answer</td></tr>
          <tr><td>Worksheet 6</td><td>Unit 6: Natural Language Processing</td><td class="bx-num">8</td><td>Token count, TFIDF table, true or false, short answer</td></tr>
          <tr><td>Practice sheet</td><td>Unit 4: Statistical Data and Unit 7: Advance Python</td><td>practical only</td><td>Predict the output, hand statistics, viva prompts</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>How to use a practice sheet for AI class 10</h3>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Revise the unit once, then close the book</h4><p>A worksheet tests recall. Done with notes open, it only tests copying.</p></li>
          <li class="bx-step"><h4>Time yourself</h4><p>Give each sheet about 25 minutes. That is close to the pace a board answer needs.</p></li>
          <li class="bx-step"><h4>Mark with the key, strictly</h4><p>A short answer that misses the keyword in the key loses the mark, as it would in the board paper.</p></li>
          <li class="bx-step"><h4>Redo only the misses a week later</h4><p>Write each wrong item on a slip and try it again without looking. That second try is where the learning happens.</p></li>
        </ol>
      </div>
      <div>
        <h3>Why one sheet per unit, not one long test</h3>
        <p>A single mixed paper hides which unit is weak. One sheet per block shows it at a glance: a student who scores well on Worksheet 2 and badly on Worksheet 4 knows Evaluating Models needs the next hour, not the whole syllabus.</p>
        <p>The sheets keep to the 2026-27 unit names. Older worksheets found online still use chapter titles such as Data Science or Evaluation, which no longer match how the paper is set. If a unit needs revising before you start, the short notes are on <a class="bx-link" href="/cbse-class-10-ai-notes">Class 10 AI notes, unit wise</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="ws-a">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Worksheets 1 and 2</p>
      <h2>AI class 10 worksheet with answers: Part A and Unit 1</h2>
      <p class="bx-lede">Part A carries ten easy marks that students often leave to the last week. Unit 1 is short but asks for ethics in your own words, which is harder than it looks.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Worksheet 1: Part A employability skills</h3>
        <ol class="bx-qlist">
          <li>Which of these is a barrier to effective communication?
            <br>(a) asking a question to check understanding <br>(b) using technical terms with a listener who does not know them <br>(c) keeping a calm tone <br>(d) summarising what the speaker said</li>
          <li>Kabir revises every evening because he enjoys solving problems, not for a reward. His motivation is
            <br>(a) external <br>(b) internal <br>(c) forced <br>(d) peer-based</li>
          <li>Fill in the blank: an entrepreneur who starts a venture mainly to solve a social or environmental problem is called a ________ entrepreneur.</li>
          <li>Fill in the blank: an economy that grows while cutting pollution and saving natural resources is called a ________ economy.</li>
          <li>True or false? Correct it if false: "Helpful feedback only points out what went wrong."</li>
          <li>True or false? Correct it if false: "A strong password mixes capital and small letters, numbers and symbols."</li>
          <li>Short answer (2 marks): give two ways a student can save electricity at home and say why each is a green habit.</li>
        </ol>
      </div>
      <div>
        <h3>Worksheet 2: Unit 1, project cycle and ethical frameworks</h3>
        <ol class="bx-qlist">
          <li>In the six-stage AI project cycle, which stage comes last?
            <br>(a) Evaluation <br>(b) Modelling <br>(c) Deployment <br>(d) Data Exploration</li>
          <li>Fill in the blank: the three domains of AI are Statistical Data, Computer Vision and ________.</li>
          <li>Match each framework type to its idea:
            <br>(i) rights-based &nbsp; (ii) utility-based &nbsp; (iii) virtue-based
            <br>(p) choose the action with the most overall good &nbsp; (q) act as a person of good character would &nbsp; (r) protect each person's dignity and freedoms first</li>
          <li>True or false? Correct it if false: "A value-based framework is written for one industry, such as banking."</li>
          <li>Name the four principles of bioethics.</li>
          <li>Case (4 marks): a hospital tests an AI that ranks emergency patients by urgency. It was trained mostly on data from adult men. Name two principles of bioethics at risk, explain how, and suggest one safeguard.</li>
        </ol>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card">
        <h3>Answer key: Worksheet 1</h3>
        <ol>
          <li><b>(b)</b> Jargon the listener does not share blocks the message. The other three help communication.</li>
          <li><b>(b)</b> Enjoyment of the task itself is internal, or intrinsic, motivation.</li>
          <li><b>social</b></li>
          <li><b>green</b></li>
          <li><b>False.</b> Helpful feedback is specific and timely, and names what went well as well as what to improve.</li>
          <li><b>True.</b> Length of at least eight characters also helps.</li>
          <li>Any two, each with a reason: switch off lights and fans when leaving a room (less power drawn, fewer emissions from power plants); use LED bulbs (same light for less energy); unplug chargers when not in use (no standby waste).</li>
        </ol>
      </div>
      <div class="bx-card">
        <h3>Answer key: Worksheet 2</h3>
        <ol>
          <li><b>(c)</b> Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation, Deployment.</li>
          <li><b>Natural Language Processing (NLP).</b></li>
          <li><b>(i) r, (ii) p, (iii) q.</b></li>
          <li><b>False.</b> A framework written for one industry is sector-based. Value-based frameworks rest on principles such as rights, utility or virtue.</li>
          <li>Respect for autonomy, do not harm (non-maleficence), ensure benefit (beneficence) and justice.</li>
          <li>Justice: women, children and older patients may be ranked unfairly because the data under-represents them. Do not harm: a wrongly low rank could delay urgent care. Safeguard: retrain on data that represents every group, and keep a doctor's review on every ranking. (Two principles 2 marks, safeguard 2 marks.)</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More one-mark drills for all five Part A units are on <a class="bx-link" href="/employability-skills-class-10-mcq">employability skills class 10 MCQ</a>, and Unit 1 in full is on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">the project cycle and ethics page</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="ws-b">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Worksheets 3 and 4</p>
      <h2>417 unit wise worksheet: modeling and evaluating models</h2>
      <p class="bx-lede">Units 2 and 3 together carry 21 of the 40 Part B theory marks, so they get the longest sheets. Both include a calculation. Show the working: in the board paper it earns marks even when the final figure slips.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Worksheet 3: Unit 2, advanced concepts of modeling</h3>
        <ol class="bx-qlist">
          <li>A chess program improves by playing thousands of games and earning points for wins. This is
            <br>(a) supervised learning <br>(b) unsupervised learning <br>(c) reinforcement learning <br>(d) rule-based AI</li>
          <li>Predicting the selling price of a flat from its size and location is
            <br>(a) classification <br>(b) regression <br>(c) clustering <br>(d) association</li>
          <li>Fill in the blank: a neural network has an input layer, one or more ________ layers and an output layer.</li>
          <li>True or false? Correct it if false: "Unsupervised learning needs every example to be labelled."</li>
          <li>Numerical (2 marks): a perceptron has inputs 1, 1 and 0, weights 0.3, -0.6 and 0.9, and a bias of 0.2. Find the weighted sum plus bias. With a step function that outputs 1 only when the sum is above 0, what is the output?</li>
          <li>Short answer (2 marks): give one difference between a rule-based and a learning-based model, with an example of each.</li>
          <li>Name the learning type: (i) an app groups songs by sound with no genre tags; (ii) a bank model learns from past loans marked "repaid" or "defaulted"; (iii) a robot vacuum learns which routes avoid getting stuck.</li>
        </ol>
      </div>
      <div>
        <h3>Worksheet 4: Unit 3, evaluating models</h3>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Use for questions 1 to 4</b><span>spam = positive</span></figcaption>
  <pre>A spam filter checks 500 emails.
It marks 100 as spam; 80 really are.
Of the 400 it lets through, 40 are spam.

             Actual spam   Actual not spam
Said spam      TP = 80         FP = 20
Said not spam  FN = 40         TN = 360</pre>
  <p class="bx-code-note">Fill the four cells from the story yourself before checking them against the grid.</p>
</figure>
        <ol class="bx-qlist bx-mt-40">
          <li>Find the accuracy and the error rate.</li>
          <li>Find the precision and the recall, to two decimal places.</li>
          <li>Find the F1 score and write the formula you used.</li>
          <li>For a spam filter, which mistake costs the user more, and so which metric should be kept high?</li>
          <li>Why is the data split into a training set and a test set? (1 mark)</li>
          <li>True or false? Correct it if false: "A model with 95% accuracy is always a good model."</li>
          <li>Name the three ethical concerns around model evaluation in the handbook, with one line each.</li>
        </ol>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card">
        <h3>Answer key: Worksheet 3</h3>
        <ol>
          <li><b>(c)</b> Rewards and penalties from playing are the mark of reinforcement learning.</li>
          <li><b>(b)</b> A price is a continuous number.</li>
          <li><b>hidden</b></li>
          <li><b>False.</b> Unsupervised learning works on unlabelled data and finds the groups itself.</li>
          <li>0.3 x 1 + (-0.6) x 1 + 0.9 x 0 + 0.2 = <b>-0.1</b>. It is not above 0, so the output is <b>0</b>. (Forgetting the bias gives -0.3; the output is still 0, but the method mark is lost.)</li>
          <li>A rule-based model follows rules a person wrote, for example a chatbot that replies "Open 9 to 5" whenever it sees the word "timings". A learning-based model finds the pattern from data, for example a filter that learns spam from emails users have marked.</li>
          <li>(i) unsupervised, clustering; (ii) supervised, classification; (iii) reinforcement.</li>
        </ol>
      </div>
      <div class="bx-card">
        <h3>Answer key: Worksheet 4</h3>
        <ol>
          <li>Accuracy = (80 + 360) / 500 = <b>0.88</b>, or 88%. Error = 1 - 0.88 = <b>0.12</b>, the 60 wrong predictions out of 500.</li>
          <li>Precision = 80 / (80 + 20) = <b>0.80</b>. Recall = 80 / (80 + 40) = <b>0.67</b>.</li>
          <li>F1 = 2 x P x R / (P + R) = 2 x 0.80 x 0.667 / 1.467 = <b>0.73</b>.</li>
          <li>A false positive: a real email, perhaps an exam result, lands in spam and is missed. So <b>precision</b> should stay high.</li>
          <li>To test the model on data it has never seen, so the score shows how it will do on new data and is not inflated by memorised examples.</li>
          <li><b>False.</b> If 95% of the data belongs to one class, a model that always predicts that class scores 95% and is useless. Check precision and recall too.</li>
          <li>Bias: unfair results for some groups. Transparency: people can see how the model was tested. Accountability: someone is answerable for its errors.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">Ten more matrices of this kind, each solved line by line, are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix class 10 AI numericals</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="ws-c">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Worksheets 5 and 6</p>
      <h2>Computer vision and NLP worksheets for class 10 AI</h2>
      <p class="bx-lede">Unit 5 has only four theory marks but twenty practical hours; Unit 6 has eight theory marks and the longest calculation in the syllabus. Counting carefully is the skill on both sheets.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Worksheet 5: Unit 5, computer vision</h3>
        <ol class="bx-qlist">
          <li>A system outlines the exact shape of a tumour, pixel by pixel, in a scan. This task is
            <br>(a) classification <br>(b) classification with localisation <br>(c) object detection <br>(d) image segmentation</li>
          <li>Fill in the blank: in a byte image each colour value runs from 0 to ________.</li>
          <li>What colour is the RGB pixel (255, 255, 0)?</li>
          <li>Numerical (2 marks): a photo is 1920 x 1080. How many pixels does it have, and how many values does it store as an RGB image?</li>
          <li>Numerical (2 marks): apply the kernel [[0, 1, 0], [1, -4, 1], [0, 1, 0]] to the patch [[1, 2, 0], [0, 1, 3], [2, 1, 1]]. What is the result, and what does ReLU turn it into?</li>
          <li>True or false? Correct it if false: "The pooling layer makes the feature map larger."</li>
          <li>Short answer: how is computer vision different from image processing?</li>
        </ol>
      </div>
      <div>
        <h3>Worksheet 6: Unit 6, natural language processing</h3>
        <ol class="bx-qlist">
          <li>How many tokens are in "Wow! AI writes poems, songs and code."?</li>
          <li>Fill in the blank: words such as "is", "the" and "and", removed because they add little meaning, are called ________.</li>
          <li>True or false? Correct it if false: "Lemmatisation always returns a real dictionary word."</li>
          <li>A sentence is grammatically perfect but makes no sense. Which stage of NLP rejects it?</li>
          <li>Give one difference between a script bot and a smart bot.</li>
          <li>TFIDF (4 marks): for the corpus D1 "the cat sat", D2 "the dog sat", D3 "the cat ran", write the vocabulary, the document frequency of each word and the IDF, taking IDF = log(N / DF) to base 10. Which word in D2 has the highest TFIDF?</li>
        </ol>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div class="bx-card">
        <h3>Answer key: Worksheet 5</h3>
        <ol>
          <li><b>(d)</b> Segmentation labels every pixel. Detection would only draw a box round it.</li>
          <li><b>255</b>, because a byte has 8 bits and 2 to the power 8 is 256 values.</li>
          <li><b>Yellow</b>: full red plus full green, no blue.</li>
          <li>1920 x 1080 = <b>2,073,600</b> pixels; x 3 = <b>6,220,800</b> values.</li>
          <li>Multiply cell by cell and add: (0 + 2 + 0) + (0 - 4 + 3) + (0 + 1 + 0) = <b>2</b>. ReLU keeps positive values, so it stays <b>2</b>.</li>
          <li><b>False.</b> Pooling shrinks the feature map while keeping its strongest features.</li>
          <li>Image processing changes an image, for example sharpening or resizing it. Computer vision extracts meaning from it, for example recognising the face in it.</li>
        </ol>
      </div>
      <div class="bx-card">
        <h3>Answer key: Worksheet 6</h3>
        <ol>
          <li><b>10</b>: seven words, plus "!", "," and ".".</li>
          <li><b>stopwords</b></li>
          <li><b>True.</b> Stemming may leave a non-word; lemmatisation gives the dictionary form.</li>
          <li><b>Semantic analysis</b>, which checks meaning after syntactic analysis has passed the grammar.</li>
          <li>A script bot follows fixed scripted replies and fails off-script; a smart bot learns from data and handles varied questions.</li>
          <li>Vocabulary: the, cat, sat, dog, ran. DF: 3, 2, 2, 1, 1. IDF: log(3/3) = 0, log(3/2) = 0.176, 0.176, log(3/1) = 0.477, 0.477. In D2 "the" scores 0, "sat" 0.176 and "dog" 0.477, so <b>dog</b> is highest: it is the word that sets D2 apart.</li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">The full method, with a longer corpus, is on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF, worked</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="practical">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What about Units 4 and 7?</p>
      <h2>Is there a worksheet for Statistical Data and Advance Python?</h2>
      <p class="bx-lede">Yes, but it practises the practical exam and viva, not the written paper. Units 4 and 7 carry no theory marks in 2026-27; they are tested through the practical exam, the practical file of at least 15 programs and the viva.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Practice sheet: predict the output</b><span>Python 3, NumPy</span></figcaption>
  <pre>import numpy as np
import statistics

a = np.array([4, 8, 6, 8, 9])
print(np.mean(a), np.median(a))
print(statistics.mode([4, 8, 6, 8, 9]))

x = [1, 2, 3]
y = [10, 20, 30]
print([p + q for p, q in zip(x, y)])</pre>
  <p class="bx-code-note">Write the three output lines on paper first, then run the code in Jupyter to check.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Answer key</b><span>output, then why</span></figcaption>
  <pre>7.0 8.0
8
[11, 22, 33]

mean   = 35 / 5 = 7.0
median = middle of 4, 6, 8, 8, 9 = 8.0
mode   = 8, the only value seen twice
zip pairs 1+10, 2+20, 3+30</pre>
  <p class="bx-code-note">NumPy returns decimals, so 7.0 and 8.0, not 7 and 8. Examiners ask why.</p>
</figure>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>By hand, then on the tool</h3>
        <ol class="bx-qlist">
          <li>Find the mean, median and mode of 12, 15, 11, 15, 17. <i>(Key: mean 14, median 15, mode 15.)</i></li>
          <li>Give one difference between a no-code and a low-code AI tool. <i>(Key: no-code needs no programming at all, only drag and drop; low-code lets you add small pieces of code where the visual blocks fall short.)</i></li>
          <li>Which Orange widget would you use to see a dataset as rows and columns? <i>(Key: Data Table.)</i></li>
        </ol>
      </div>
      <div>
        <h3>Viva prompts to answer aloud</h3>
        <ul class="bx-check">
          <li><b>Why use Jupyter Notebook?</b> Code, output and notes sit together, one cell at a time.</li>
          <li><b>What does <code>df.head(10)</code> show?</b> The first ten rows of a DataFrame read from a CSV file.</li>
          <li><b>When is the median more useful than the mean?</b> When a few extreme values pull the mean away from the typical value.</li>
        </ul>
        <p>The suggested programs and a full file plan are on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are worksheets used in class?</p>
      <h2>How the live batch uses worksheets, unit by unit</h2>
      <p class="bx-lede">A worksheet done alone tells a student what they got wrong. Done in class, it also shows why, and the next sheet checks that the reason has stuck.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Set on Monday, checked on Wednesday</h3><p>When a unit finishes, students take its worksheet home. On Wednesday the teacher puts the answers on a shared screen and marks them the way a board examiner would, keyword by keyword, so students see why a half-right answer earns one mark of two.</p></div>
      <div class="bx-card"><h3>A second version for every miss</h3><p>Each student's wrong items are noted. The following week they get a short version B with new numbers and new cases on exactly those items, so a remembered answer is no help.</p></div>
      <div class="bx-card"><h3>A bound set before the mocks</h3><p>In January the unit sheets come back as one mixed revision set, followed by full timed mocks. By then every student has met each question type several times.</p></div>
    </div>
    <p class="bx-mt-40">
      Doubts on any sheet can be raised in class: a student shares the screen and the teacher works the item through for everyone. The plan that places these sheets across the year is on <a class="bx-link" href="/cbse-class-10-ai-revision-plan">the class 10 AI revision plan</a>, and the full timed papers that follow are on <a class="bx-link" href="/cbse-class-10-ai-sample-paper-and-mock-tests">the sample paper and mock tests page</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Work through these worksheets in the batch, or one to one',
  chooseLede: 'The sheets, the keys and the marking are the same either way. The batch moves through the units in order with a class beside you; one to one starts from whichever sheet your child scored lowest on. Billing is monthly, with no admission fee, and you can stop after any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live video class',
    'Fifteen to twenty Class 10 AI students with one teacher',
    'A mixed worksheet closing every unit',
    'Answers checked on a shared screen, keyword by keyword',
    'A bound revision set and mocks from January'
  ],
  choosePersonal: [
    'Your days and your hour, in your own time zone',
    'Starts from the weakest worksheet, not from Unit 1',
    'Version B sheets made only from your child\'s misses',
    'Every short answer rewritten until it earns full marks',
    'The same 417 syllabus and the same teachers'
  ],
  chooseAfter: 'If a student finds most sheets easy but keeps losing marks on one or two, such as the TFIDF table or the confusion matrix, a few one to one sessions usually settle it. A student meeting several units for the first time does better in the batch, where every unit is taught before its sheet is set. Fees appear in your own currency.',
  zonesH2: 'Class 10 AI worksheets for CBSE students outside India',
  zonesLede: 'CBSE schools in the Gulf, Africa and South-East Asia sit the same 417 paper, so the same seven sheets apply. The batch hour falls at these local times this winter.',
  zonesAfter: 'When 9:00 PM IST is too late or too early for your city, one to one runs at a time you set. Families abroad can read more on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI worksheets',
  faqH2: 'What students and parents ask about class 10 AI worksheets',
  faqs: [
    ['Where can I get class 10 AI worksheets with answers?', 'This page has seven original worksheets for CBSE AI 417, session 2026-27: one each for Part A and Units 1, 2, 3, 5 and 6, and a practice sheet for the practical-only Units 4 and 7. Every sheet has its answer key printed directly underneath, with working shown for the numericals.'],
    ['Are these worksheets based on the 2026-27 CBSE syllabus?', 'Yes. They follow the unit names and marks in the CBSE 417 Class X curriculum for 2026-2027: Part A 10 marks, Unit 1 7, Unit 2 11, Unit 3 10, Unit 5 4 and Unit 6 8, with Units 4 and 7 assessed only in the practical. Older worksheets with titles like Data Science or Evaluation follow the earlier chapter list.'],
    ['Is there a unit wise worksheet for Evaluating Models?', 'Yes, Worksheet 4. It gives a spam-filter confusion matrix and asks for accuracy, error, precision, recall and F1, then the right metric for the case, the reason for a train-test split, and the three ethical concerns. The answers are worked step by step in the key below it.'],
    ['How many questions should a class 10 AI worksheet have?', 'Six or seven items that take about 25 minutes is enough for one unit: a couple of MCQs, a blank or true or false, a short answer and one numerical or case. Longer sheets tire students before they reach the question types that carry the most marks.'],
    ['Do worksheets help in the CBSE Class 10 AI board exam?', 'They help most when they are timed, marked strictly against a key and followed by a second attempt at the misses a week later. That cycle shows which unit is weak and fixes the habit behind the mistake, which a single reading of notes does not.'],
    ['Are worksheets needed for Units 4 and 7?', 'Not for the written paper, because Statistical Data and Advance Python carry no theory marks in 2026-27. They are tested in the practical exam, the practical file and the viva, so the practice sheet here asks students to predict program output and answer viva prompts aloud.'],
    ['Can I print these AI class 10 worksheets?', 'Yes. Use your browser\'s print option for personal practice at home. Cover the answer key with a sheet of paper while you work, then mark your answers against it once the timer stops. Keep the marked sheets in one folder, because the wrong items on them become your revision list in January.'],
    ['What is the difference between a worksheet and a sample paper?', 'A worksheet covers one unit in several question types, so it shows exactly which topic is weak. A sample paper covers the whole syllabus in the board format and tests time management. Use worksheets while learning each unit and sample papers from December.'],
    ['Are worksheets included in your Class 10 AI classes?', 'Yes. A worksheet closes every unit, is checked live in the next class, and a version B is made for each student\'s misses. All of it is covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. The first class is a free demo.']
  ],
  startH2: 'Try a worksheet with a teacher, free',
  startHtml: `        <p>In the free first class your child works a short sheet from two units, then the teacher checks it live, explaining where each mark is won or lost, including the numerical items most students rush. Afterwards the mentor tells you plainly which units look weakest and whether the batch or one to one would suit your child.</p>
        <p>Not sure which units are examined in writing? See <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI worksheets'
};
