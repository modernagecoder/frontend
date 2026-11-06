// CBSE Class 10 AI (417): case based questions with model answers, 2026-27.
// Intent: "class 10 AI case based questions", "case study questions AI class 10",
// "competency based questions 417", "scenario questions AI class 10".
// Distinct from cb02 (what past papers asked), cb01 (MCQ bank) and the unit pages:
// this page is ORIGINAL case passages, one or more per theory unit, each with the
// expected answer STRUCTURE (what earns each mark), plus Part A situations.
// Case shapes are described from the papers read for cb02 on 2026-11-06: CBSE's
// 2025 main marking scheme (cbse.gov.in), the 2025-26 sample paper marking scheme
// (cbseacademic.nic.in) and the 2026 main marking scheme (set 4, code 104). The 2025
// scheme's examiner note on giving due marks for correct competency in competency-
// based answers is paraphrased, not quoted. Theory cases only from Part A and Units
// 1, 2, 3, 5, 6; Units 4 and 7 are practical only and flagged.
// Every numerical recomputed with python3 on 2026-11-06 (scratch calc/cb.py):
// leopard camera TP 18, FP 12, FN 6, TN 214: n 250, accuracy 0.928, precision 0.60,
// recall 0.75, F1 0.6667 (0.67; plain average 0.675), wrong 18; 1920 x 1080 =
// 2,073,600 pixels, RGB values 6,220,800; BoW "The battery lasts long." / "The
// screen is bright and the battery is weak." dictionary the, battery, lasts, long,
// screen, is, bright, and, weak; vectors [1,1,1,1,0,0,0,0,0] and
// [2,1,0,0,1,2,1,1,1]; tokens of "The battery lasts long." with the full stop = 5;
// perceptron 1 x 0.6 + 0 x 0.3 + 1 x 0.5 - 0.8 = 0.3.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-case-based-questions',
  code: 'cb14',
  board: 'cbse',
  themeColor: '#24485E',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Case Based Questions (417) with Answers, 2026-27',
  description: 'Class 10 AI case based questions for CBSE 417, 2026-27: original case passages for every theory unit, each with a model answer and where every mark sits.',
  ogTitle: 'Class 10 AI Case Based Questions, Unit by Unit, with Model Answers',
  ogDesc: 'Original case study passages for CBSE Class 10 AI (417): project cycle and ethics, modeling, a confusion matrix case, computer vision, NLP and Part A situations, each answered in the structure that earns every mark.',
  twDesc: 'Original 417 case passages for every theory unit, each with a model answer and where each mark comes from.',
  headline: 'Class 10 AI Case Based Questions for 2026-27: Original Passages for Every Unit, Answered Mark by Mark',
  courseName: 'CBSE Class 10 AI (417) Case and Competency Question Practice, Live Online',
  courseDesc: 'Live online practice of case based and competency based questions for CBSE Class 10 Artificial Intelligence (417), session 2026-27: fresh case passages for every theory unit, answers planned in the identify, apply, justify structure, marked on screen against the value points, and case questions inside every timed mock, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Case questions',
  navLinks: [['#shape', 'Answer shape'], ['#u12', 'Units 1 and 2'], ['#u3', 'Unit 3 case'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Case based questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Case based questions 2026-27',
  h1: 'Class 10 AI case based questions, with the answer structure that earns each mark.',
  lede: 'These class 10 AI case based questions are original passages written for the 2026-27 CBSE 417 units, one or more per theory unit. Each is followed by a model answer and a note on where every mark sits, because in a case question the marks go to naming the right idea, applying it to the story and giving a reason, not to length. In our Monday and Wednesday batch, a fresh case is planned, written and marked on screen every week.',
  heroNote: 'Live online &middot; original cases for every unit &middot; model answers &middot; marks shown line by line &middot; cases inside every mock &middot; first class free',
  waText: 'Hello Modern Age Coders. I want live case based question practice for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When cases are worked in class',
    title: 'Case practice',
    right: 'CBSE 417',
    rows: [
      ['Monday, one unit case planned', '9:00', 'PM IST'],
      ['Wednesday, a case written timed', '9:00', 'PM IST'],
      ['Original unit cases on this page', '6', 'answered'],
      ['Four-mark questions to answer', '3', 'of 5']
    ],
    zones: '<b>UAE and Oman:</b> class starts 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>Kenya and Tanzania:</b> 6:30 PM. <b>Nepal:</b> 9:15 PM. <b>Singapore:</b> 11:30 PM, where one to one at an earlier hour works better.',
    stamps: ['Word limit 50 to 80', 'No negative marking']
  },
  picksH2: 'Courses behind this case practice',
  picksLede: 'The 417 course whose Class 10 batch works these cases every week, the Orange course for the no-code case studies the curriculum is built around, and the AI and ML course for students who want the ideas behind the cases in more depth.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: each unit closes with a case passage written to time and marked against the value points.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Case studies / Orange', h3: 'Visual ML with Orange', p: 'The penguin, coral bleaching and sentiment walkthroughs built by hand, so a scenario about them is something your child has actually done.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Going deeper / AI and ML', h3: 'AI and Machine Learning for Teens', p: 'Real models trained and tested, for students who want to see why precision, bias and overfitting behave the way the cases say.' }
  ],
  capsule: 'Class 10 AI case based questions give a short real-world situation and ask you to apply a 417 idea to it: name the AI domain or model, judge an ethical problem with the bioethics principles, build a confusion matrix and choose a metric, count pixels, or run Bag of Words on short texts. In the recent CBSE papers, cases appear as one-mark items, two-mark scenarios and four-mark questions of 50 to 80 words. Answer in three moves: identify, apply to the story, justify. Modern Age Coders practises these live on Monday and Wednesday at 9:00 PM IST, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="shape">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What is a case based question in AI 417?</p>
      <h2>What are case study questions in AI class 10, and how are they marked?</h2>
      <p class="bx-lede">A case based question describes a situation, often a company, a school or a hospital using AI, and asks you to apply a concept to it. CBSE calls this competency: using an idea, not reciting it.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Where cases appear</th><th scope="col">Marks</th><th scope="col">Typical ask, from the recent papers</th></tr></thead>
        <tbody>
          <tr><td>Section A objective items</td><td class="bx-num">1</td><td>Name the outcome (false negative), the model (association) or the NLP application from a two-line situation</td></tr>
          <tr><td>Section B short answers</td><td class="bx-num">2</td><td>Explain false positives and false negatives inside a fraud-detection story; describe how an RGB photo is stored</td></tr>
          <tr><td>Section B long answers</td><td class="bx-num">4</td><td>A biased selection system judged with bioethics; a confusion matrix built from a story; two scenarios matched to AI domains; a Bag of Words table</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>1. Identify</h3><p>Name the exact idea the case points to: the domain, the learning type, the metric, the principle. One clear term, early in the answer, is usually the first mark.</p></div>
      <div class="bx-card"><h3>2. Apply</h3><p>Use the story's own words and numbers. "The model missed 6 leopards" earns what "false negatives are bad" does not.</p></div>
      <div class="bx-card"><h3>3. Justify</h3><p>Give the because. Most four-mark schemes split marks between naming something and explaining why it fits, so an unexplained right answer loses half.</p></div>
    </div>
    <p class="bx-mt-40">CBSE's 2025 marking scheme also told examiners to credit a correct competency even when the wording differs from the scheme. So a sensible answer in your own words is safe, provided it names the idea and ties it to the case. The way marks split across a whole paper is on <a class="bx-link" href="/cbse-class-10-ai-marking-scheme">the 417 marking scheme, explained</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="u12">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Units 1 and 2</p>
      <h2>Case based questions on the project cycle, ethics and modeling</h2>
      <p class="bx-lede">Three original cases. Unit 1 cases test the ethics principles and the stages; Unit 2 cases test whether you can tell one kind of model from another from a description alone.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Case 1. The canteen waste app (Unit 1, 4 marks)</h3>
        <p><i>A school notices that a lot of lunch is thrown away. Students plan an AI app that predicts how many meals to cook each day from attendance, the menu and the weather. They collect three months of canteen records, chart which dishes are wasted most, then train a model and check its predictions against two weeks they kept aside.</i></p>
        <ol class="bx-qlist">
          <li>Fill in the 4Ws for this problem. (2)
            <details><summary>Model answer</summary> Who: the canteen staff and students. What: too much cooked food is wasted. Where: the school canteen, at lunch each day. Why: cooking the right amount saves food and money. <i>Half a mark per W.</i></details></li>
          <li>Name the project cycle stage for (a) charting which dishes are wasted, and (b) checking predictions against the kept-aside fortnight. (2)
            <details><summary>Model answer</summary> (a) Data Exploration, because the data is being visualised to find patterns. (b) Evaluation, because the model is tested on data it did not learn from. <i>One mark each: the stage, plus a few words of reason.</i></details></li>
        </ol>
        <h3 class="bx-mt-40">Case 2. The hospital queue (Unit 1, 4 marks)</h3>
        <p><i>A hospital uses AI to decide which emergency patients are seen first. Staff later find that patients who arrive without phone numbers in their records are pushed down the queue, because the model was trained mostly on patients who had registered online.</i></p>
        <ol class="bx-qlist" start="3">
          <li>Give two reasons the system is unfair, and two bioethics principles it breaks. (4)
            <details><summary>Model answer</summary> Reasons: the training data under-represented patients who register in person, so the model learned a bias; a missing phone number has nothing to do with how ill someone is. Principles: do not harm, since sicker patients may wait too long; give justice, since equal medical need is not treated equally. <i>One mark per reason, one per principle with its link to the case.</i></details></li>
        </ol>
      </div>
      <div>
        <h3>Case 3. A city's three AI projects (Unit 2, 4 marks)</h3>
        <p><i>A city council runs three projects. Project P predicts tomorrow's electricity demand in megawatts from past readings. Project Q sorts thousands of unlabelled complaint emails into groups of similar complaints. Project R trains a traffic-signal controller that gets a reward each time queues get shorter.</i></p>
        <ol class="bx-qlist" start="4">
          <li>Name the learning type and the model for each project, with a reason. (3)
            <details><summary>Model answer</summary> P: supervised learning, regression, because it predicts a number from labelled past data. Q: unsupervised learning, clustering, because the emails have no labels and are grouped by similarity. R: reinforcement learning, because it learns by reward. <i>One mark per project; half for the name, half for the reason.</i></details></li>
          <li>Why would a rule-based approach suit Project R badly? (1)
            <details><summary>Model answer</summary> Traffic changes all the time, and fixed rules cannot adapt to new patterns the way a learning-based system can.</details></li>
        </ol>
        <h3 class="bx-mt-40">A quick neural network item</h3>
        <p><i>A perceptron receives inputs 1, 0 and 1 with weights 0.6, 0.3 and 0.5 and a bias of -0.8. What is the weighted sum plus bias, and which layer of a network does this kind of processing?</i></p>
        <details><summary>Model answer</summary> 0.6 + 0 + 0.5 - 0.8 = 0.3. Processing happens in the hidden layers; the input and output layers only pass data in and out.</details>
        <p class="bx-mt-40">More scenario drills are on <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">Unit 2 modeling questions</a>, and the bioethics case worked in full on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">project cycle and ethics</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="u3">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Unit 3, the numbers case</p>
      <h2>Competency based questions in 417: the evaluating models case</h2>
      <p class="bx-lede">Every recent paper we read had a four-mark confusion matrix case. The competency is not the arithmetic alone: it is reading the story into the right cells and then saying which metric matters for this particular use.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Case 4. Leopard cameras</b><span>4 marks</span></figcaption>
  <pre>Forest staff test an AI on 250 camera-trap
photos. It flags 30 photos as "leopard";
18 of them really show a leopard. It misses
6 photos that do show one. The rest are
correctly marked "no leopard".

(a) Build the confusion matrix.        1
(b) Find accuracy and precision.       1
(c) Find recall and F1.                1
(d) Staff want to count every leopard.
    Which metric should they watch,
    and why?                           1

              Reality: Yes  Reality: No
Predicted Yes   TP = 18      FP = 12
Predicted No    FN = 6       TN = 214

Accuracy  = (18 + 214) / 250 = 0.928
Precision = 18 / 30 = 0.60
Recall    = 18 / 24 = 0.75
F1 = 2 x 0.60 x 0.75 / 1.35 = 0.67 (approx.)</pre>
  <p class="bx-code-note">TN is what is left: 250 - 18 - 12 - 6 = 214. The four cells must add to the total before you go on.</p>
</figure>
      <div>
        <h3>Answer to part (d), and why it carries the mark</h3>
        <p>Recall. The goal is to miss no leopard, and recall measures how many real leopards the model caught, TP / (TP + FN). A false negative here is a leopard left uncounted, which is the costly mistake. Precision matters less: a few empty photos flagged by mistake only cost staff a minute each to check.</p>
        <h3 class="bx-mt-40">What this case teaches about accuracy</h3>
        <p>An accuracy of 0.928 looks excellent, yet the model is wrong on 12 of the 30 photos it flags. Most photos show no leopard, so the large TN cell lifts accuracy. A case that asks "is this a good model?" wants exactly this point: accuracy flatters a model when one class is rare.</p>
        <ul class="bx-check bx-mt-40">
          <li><b>Disease, fraud, missing a leopard:</b> watch recall.</li>
          <li><b>Spam sent to the junk folder, an innocent person flagged:</b> watch precision.</li>
          <li><b>Both mistakes costly:</b> watch F1.</li>
        </ul>
        <p>Ten more graded matrices are on <a class="bx-link" href="/confusion-matrix-class-10-ai-numericals">confusion matrix numericals</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="u56">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Units 5 and 6</p>
      <h2>Scenario questions in AI class 10: computer vision and NLP cases</h2>
      <p class="bx-lede">Computer Vision has only four theory marks, so its cases are short. NLP carries eight, and its long case is nearly always a Bag of Words table with a question or two about the method.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>Case 5. The ticket-free car park (Unit 5)</h3>
        <p><i>A mall's car park camera records 1920 x 1080 colour frames. It must spot every car in a frame and also read each number plate so it can charge the right owner.</i></p>
        <ol class="bx-qlist" start="6">
          <li>How many pixels does one frame have, and how many values does it store? (1)
            <details><summary>Model answer</summary> 1920 x 1080 = 2,073,600 pixels. Each colour pixel stores red, green and blue, so 6,220,800 values.</details></li>
          <li>Which CV task finds every car, and why not plain classification? (2)
            <details><summary>Model answer</summary> Object detection, because there are many cars and each must be located with a box. Classification only says what one image shows, not where or how many.</details></li>
          <li>Reading the plate needs two domains. Name them. (1)
            <details><summary>Model answer</summary> Computer Vision to find the plate and its characters; turning those characters into text the system can use draws on language processing. Give both, each with a reason.</details></li>
        </ol>
        <p>Pixel and RGB questions with more figures are on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">Unit 5 computer vision questions</a>.</p>
      </div>
      <div>
        <h3>Case 6. The phone review desk (Unit 6, 4 marks)</h3>
        <p><i>An online shop wants to sort phone reviews automatically. Two reviews: Review 1, "The battery lasts long." Review 2, "The screen is bright and the battery is weak."</i></p>
        <ol class="bx-qlist" start="9">
          <li>Normalise both reviews and build the dictionary. (2)
            <details><summary>Model answer</summary> Lower case and remove full stops. Dictionary in order of first appearance: the, battery, lasts, long, screen, is, bright, and, weak (9 words). <i>One mark for the steps, one for the complete dictionary.</i></details></li>
          <li>Write the document vector for each review. (1)
            <details><summary>Model answer</summary> Review 1: 1, 1, 1, 1, 0, 0, 0, 0, 0. Review 2: 2, 1, 0, 0, 1, 2, 1, 1, 1. "the" and "is" appear twice in Review 2, so they score 2.</details></li>
          <li>Which NLP application is the shop using, and should its help-desk chatbot be a script bot or a smart bot? (1)
            <details><summary>Model answer</summary> Sentiment analysis, since it judges whether each review is positive or negative. A smart bot, because customers ask open questions a fixed script cannot cover.</details></li>
        </ol>
        <p>How many tokens does Review 1 give before the full stop is removed? Five: four words plus the full stop. Corpora worked to TFIDF are on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">Unit 6 NLP questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="parta">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Part A and the practical units</p>
      <h2>Part A situations, and why Units 4 and 7 have no theory cases</h2>
      <p class="bx-lede">Employability questions are often small cases too: a student, a shopkeeper or a team leader in a situation, and you name the skill. Units 4 and 7 are examined only in the practical, so their scenarios turn up in the lab and the viva instead.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Original Part A situation</th><th scope="col">Expected answer</th></tr></thead>
        <tbody>
          <tr><td>Kabir sets himself "finish three Unit 3 numericals every evening this week". Which goal-setting method is he using, and which letter is the time limit?</td><td>A SMART goal; T, time-bound</td></tr>
          <tr><td>A shop owner switches to cloth bags and solar lights. Which skill area is this, and name one benefit.</td><td>Green skills; it cuts waste and energy use for the future</td></tr>
          <tr><td>Riya clicks a link in an email promising a free phone and is asked for her bank password. What should she do?</td><td>Not share it, delete the email and report it; it is a phishing attempt</td></tr>
          <tr><td>A team leader explains a plan once, clearly, with a chart and no extra words. Which two of the 7 Cs is she following?</td><td>Clear and concise (concrete also fits, because of the chart)</td></tr>
          <tr><td>Aman spots that his building has no place to repair bicycles and opens one on weekends. Which entrepreneurial quality does he show?</td><td>Spotting an opportunity and acting on it; also taking a risk</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Practical-side scenarios to expect in the viva</h3>
        <ul class="bx-check">
          <li>Orange Data Mining: which widget splits data for testing, and what the penguin model's accuracy tells you.</li>
          <li>NumPy: which function finds the median of marks you are given.</li>
          <li>Matplotlib: when a scatter chart suits better than a line chart.</li>
        </ul>
      </div>
      <div>
        <h3>Assertion and reason built on a case</h3>
        <p>Recent papers placed assertion-reason items in Section A, sometimes resting on a short scenario. Treat them as two cases in one: test the claim, test the reason, then ask whether one explains the other. A full set is on <a class="bx-link" href="/cbse-class-10-ai-assertion-reason-questions">assertion and reason questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How are cases practised live?</p>
      <h2>How the live batch builds case-answer habits</h2>
      <p class="bx-lede">Students rarely lose case marks for not knowing the idea. They lose them for writing around it. Habits fix that, and habits come from repetition with feedback.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Plan before writing</h3><p>On Mondays, a new case goes on the shared screen and students jot only the three moves: the term, the line from the story, the reason. The teacher checks plans before anyone writes a full answer.</p></div>
      <div class="bx-card"><h3>Written to the clock</h3><p>On Wednesdays, a four-mark case is written in eight minutes within 50 to 80 words, then marked on screen against value points, with the half marks shown.</p></div>
      <div class="bx-card"><h3>Cases in every mock</h3><p>From December each timed mock includes three long cases, and students practise choosing which three of five to attempt before they start.</p></div>
    </div>
    <p class="bx-mt-40">To see which case shapes the board has already used, read <a class="bx-link" href="/cbse-class-10-ai-previous-year-question-papers">Class 10 AI previous year papers</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Practise case questions in the batch, or one to one',
  chooseLede: 'The same cases and the same marking, in two formats. The batch works a new case every week with classmates writing to the same clock; one to one spends the hour on the units where your child\'s case answers still lose marks. Monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'A fresh case passage for each unit',
    'Four-mark cases written and marked to time',
    'Three long cases in every mock from December'
  ],
  choosePersonal: [
    'Days and time picked by you, in your own time zone',
    'Cases from the units your child finds hardest',
    'Every answer rewritten until it fits 50 to 80 words',
    'Reasons and examples coached, one student at a time',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who knows the theory but writes long, vague case answers often improves fast in a few one to one sessions on structure. A student who is still unsure of the ideas themselves gains more from the batch, where each unit is taught before its case is set. Fees are shown in your own currency.',
  zonesH2: 'Case based question practice for CBSE students abroad',
  zonesLede: 'Case questions read the same in a CBSE school in Doha or Dar es Salaam as in Delhi, and they reward the same answer structure. These are the batch times in local clocks this winter.',
  zonesAfter: 'If the batch hour does not fit your evening, one to one runs at a local time you choose. More for families abroad is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Class 10 AI case questions',
  faqH2: 'What students ask about class 10 AI case based questions',
  faqs: [
    ['What are case based questions in class 10 AI?', 'They describe a short real-world situation, such as a hospital, a shop or a city using AI, and ask you to apply a 417 concept to it: name the domain or model, judge an ethical problem, build a confusion matrix or run Bag of Words. They test use of an idea rather than recall of a definition.'],
    ['How many marks are case based questions worth in the AI 417 paper?', 'They appear across the paper rather than in one block. In the recent papers, cases showed up as one-mark objective items, two-mark scenario answers and four-mark long questions. Of the five four-mark questions printed, you answer three, and in the papers we read several of them were set as cases, the confusion matrix one every time.'],
    ['How do I write a case study answer for AI class 10?', 'Use three moves. Identify the exact idea the case points to; apply it using the case\'s own words and numbers; justify with a because. Keep two-mark answers to 20 to 30 words and four-mark answers to 50 to 80, as printed on the paper.'],
    ['What are competency based questions in 417?', 'Competency based questions check whether you can use what you learned in a new situation. In AI 417 they are mostly case and scenario questions. CBSE\'s 2025 marking scheme told examiners to give due marks when a student shows the right competency in their own words.'],
    ['Which unit has the most case questions in class 10 AI?', 'Evaluating Models gives the most reliable one: a confusion matrix case appeared as a four-mark question in every recent paper we read. Unit 1 ethics cases and Unit 6 Bag of Words cases were also regular. Computer Vision cases are short because the unit carries only four theory marks.'],
    ['Are there case questions on Python or statistical data?', 'Not in the theory paper. Unit 4 Statistical Data and Unit 7 Advance Python are assessed only in the practical, so scenarios from them come up in the lab exam and the viva, for example which NumPy function finds a median.'],
    ['Do I need to draw a table in a confusion matrix case?', 'Yes. Draw the two by two matrix with both axes labelled, reality and prediction, before any formula. Schemes give marks for the table itself, and a labelled table protects you whichever way round the question sets its axes. Then check that the four cells add up to the total given in the case.'],
    ['What are scenario questions in AI class 10?', 'A scenario question is a short case, often one or two lines, that asks you to name something: the AI domain, the learning type, the chatbot type or whether an error is a false positive or a false negative. Name the idea and add a few words of reason from the scenario.'],
    ['Where can I practise more AI class 10 case study questions?', 'This page has six original unit cases and five Part A situations, all with model answers, and each unit page in this series has more. In our classes a fresh case is set every week, planned on Monday and written to time on Wednesday, then marked on screen.'],
    ['Is case practice part of your classes?', 'Yes. Weekly cases, timed writing and mocks with long cases are all covered by the monthly fee shown on this page, in your own currency, for the batch or one to one. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Try a case question free with a teacher',
  startHtml: `        <p>In the free first class your child plans and writes one four-mark case from this page, then sees it marked line by line, with the mark for naming, the mark for applying and the mark for the reason shown separately. Afterwards the mentor tells you plainly where the answers lose marks and whether the batch or one to one suits your child better.</p>
        <p>Want the unit sheets behind these cases? Read <a class="bx-link" href="/cbse-class-10-ai-notes">Class 10 AI notes, unit wise</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI case questions'
};
