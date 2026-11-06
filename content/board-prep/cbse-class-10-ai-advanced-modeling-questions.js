// CBSE Class 10 AI (417), Unit 2 Advanced Concepts of Modeling in AI: every
// question shape for the 11-mark unit. Intent: "advanced concepts of modeling in AI
// class 10", "supervised unsupervised reinforcement learning class 10",
// "classification vs regression class 10", "clustering vs association", "neural
// network class 10", "rule based vs learning based".
// Distinct from cb04/cb05 (Unit 3) and from the cross-unit important-questions and
// MCQ pages: this page maps Unit 2, explains rule-based against learning-based with
// two tiny programs, runs a fifteen-scenario "classify this" drill, sets out the
// classification/regression and clustering/association differences, works a
// perceptron, and gives written answers by mark band. Topic list follows the
// 2025-26 curriculum headings as summarised by school notes checked 2026-11-06
// (AI/ML/DL, data terms, rule vs learning, supervised/unsupervised/reinforcement,
// classification, regression, clustering, association, ANN, CNN, perceptron).
// Dimensionality reduction is NOT claimed. Weighting: Unit 2 = 11 theory marks;
// 4 objective items in the 2025-26 sample paper (same source as cb01).
// Python run with python3 on 2026-11-06 (scratch cb0456/cb06_rule.py,
// cb06_learn.py, cb06.py): rule program prints spam, not spam, spam; learning
// program prints 97.5, "9 grape", "150 guava" (means 190 and 5); perceptron weights
// 0.6, 0.3, 0.5, bias -0.7: (1,1,0) 0.2 -> 1, (0,1,1) 0.1 -> 1, (1,0,0) -0.1 -> 0,
// (0,0,1) -0.2 -> 0; Q10 0.4 + 0.3 - 0.5 = 0.2 -> 1, with bias -0.8 gives -0.1 -> 0.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-advanced-modeling-questions',
  code: 'cb06',
  board: 'cbse',
  themeColor: '#4A3F6B',
  dateModified: '2026-11-06',
  title: 'Advanced Concepts of Modeling in AI Class 10: Questions',
  description: 'Advanced concepts of modeling in AI class 10 (CBSE 417, Unit 2), 2026-27: every question shape, a 15-scenario classify drill and model answers.',
  ogTitle: 'Advanced Concepts of Modeling in AI Class 10: Every Question Shape',
  ogDesc: 'Unit 2 of CBSE AI 417 for 2026-27: rule-based against learning-based, supervised, unsupervised and reinforcement learning, classification against regression, clustering against association, neural networks and the perceptron, with a 15-scenario drill and written answers.',
  twDesc: 'Unit 2 of CBSE AI 417: a 15-scenario classify-this drill, the key differences in tables, a perceptron worked out and model answers.',
  headline: 'Advanced Concepts of Modeling in AI Class 10: Every Question Shape for Unit 2 of CBSE 417, 2026-27',
  courseName: 'CBSE Class 10 AI (417) Unit 2 Advanced Modeling, Live Online',
  courseDesc: 'Live online teaching of Unit 2, Advanced Concepts of Modeling in AI, for CBSE Class 10 Artificial Intelligence (417), session 2026-27: rule-based and learning-based models, supervised, unsupervised and reinforcement learning, classification, regression, clustering, association and neural networks, practised as scenario drills and written answers marked in class every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Unit 2',
  navLinks: [['#map', 'Unit map'], ['#rule', 'Rule or learning'], ['#drill', 'Scenario drill'], ['#nn', 'Neural networks'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Advanced modeling questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 2, Advanced Concepts of Modeling, 2026-27',
  h1: 'Advanced concepts of modeling in AI class 10: every question shape, drilled.',
  lede: 'Advanced concepts of modeling in AI class 10 is Unit 2 of CBSE 417, and at 11 marks it is the heaviest unit in the 2026-27 theory paper. Its questions come in a few repeating shapes: define and differentiate, name the type of learning from a short scenario, label the parts of a neural network, and explain a model in four marks. This page takes each shape in turn, with a fifteen-scenario drill and model answers you can check yourself against.',
  heroNote: 'Live online &middot; 15-scenario drill below &middot; differences in tables &middot; written answers marked in class &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Unit 2 Advanced Concepts of Modeling for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Unit 2 is taught',
    title: 'Advanced Modeling',
    right: 'CBSE 417',
    rows: [
      ['Monday, one model family in depth', '9:00', 'PM IST'],
      ['Wednesday, scenario sorting round', '9:00', 'PM IST'],
      ['Unit 2 in the theory paper', '11', 'marks'],
      ['Scenarios in the drill below', '15', 'sorted']
    ],
    zones: '<b>Gulf states on UAE time:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait, Bahrain:</b> 6:30 PM. <b>East Africa:</b> 6:30 PM. <b>South-East Asia:</b> too late for the batch, so one to one at an hour that suits.',
    stamps: ['Unit 2: 11 of 50', 'Heaviest theory unit']
  },
  picksH2: 'Courses behind this Unit 2 teaching',
  picksLede: 'The 417 course whose Class 10 batch teaches the unit, the Orange course where students build classification and clustering models without code, and the AI and ML course for those who want to train the models they read about.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course: Unit 2 taught one model family at a time, then drilled with fresh scenarios and written answers marked in class.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'No-code models / Orange', h3: 'Visual ML with Orange', p: 'Drag-and-drop classification, regression and clustering on real datasets, so each category in Unit 2 is something your child has actually built.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Go further / AI and ML', h3: 'AI and ML for Teens', p: 'Python models from a first classifier to a small neural network, for students who want to see the perceptron idea run.' }
  ],
  capsule: 'Advanced Concepts of Modeling in AI is Unit 2 of CBSE Class 10 AI (417), worth 11 of the 50 theory marks in 2026-27. It covers AI, machine learning and deep learning; features, labels and training and testing data; rule-based against learning-based models; supervised learning (classification and regression), unsupervised learning (clustering and association) and reinforcement learning; and neural networks, with ANN, CNN and the perceptron. Most questions ask you to define, differentiate or identify the model type in a scenario. Modern Age Coders teaches it live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="map">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What does Unit 2 cover?</p>
      <h2>What is in advanced concepts of modeling in AI class 10?</h2>
      <p class="bx-lede">Unit 2 explains how an AI model learns and which family a model belongs to. It moves from AI, ML and DL, through the words used for data, to the three ways machines learn and the neural networks behind deep learning.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Topic</th><th scope="col">One-line idea</th><th scope="col">How it is usually asked</th></tr></thead>
        <tbody>
          <tr><td>AI, ML and DL</td><td>DL is a part of ML, which is a part of AI</td><td>Objective item; draw or explain the nesting</td></tr>
          <tr><td>Data terms</td><td>Features are the inputs, the label is the answer to predict</td><td>Identify features and label in a small table</td></tr>
          <tr><td>Rule-based and learning-based</td><td>People write the rules, or the model finds them in data</td><td>Two-mark difference with examples</td></tr>
          <tr><td>Supervised, unsupervised, reinforcement</td><td>Labelled data, unlabelled data, or rewards from trial and error</td><td>Name the type for a scenario</td></tr>
          <tr><td>Classification and regression</td><td>Predict a category, or predict a number</td><td>Scenario; difference</td></tr>
          <tr><td>Clustering and association</td><td>Group similar items, or find items that occur together</td><td>Scenario; difference</td></tr>
          <tr class="bx-total"><td>Neural networks</td><td>Layers of connected nodes; ANN in general, CNN for images</td><td>Label layers; perceptron sum; four-mark explanation</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Features and labels in one example</h3>
        <p>A table of past students lists hours studied, attendance and mock score, and a last column saying whether each student passed. The first three columns are <b>features</b>, the facts the model looks at. "Passed" is the <b>label</b>, the answer it learns to predict. Data that carries that last column is labelled data; without it, it is unlabelled.</p>
      </div>
      <div>
        <h3>Why the unit carries the most marks</h3>
        <p>In the 2025-26 sample paper, Unit 2 supplied four objective items, and its ideas also feed Units 3, 5 and 6: you cannot evaluate a classifier, or see why a CNN suits images, without them. The same terms come back on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models questions and answers</a>, where Unit 2's classifiers are scored.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="rule">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Rule-based or learning-based?</p>
      <h2>Rule based vs learning based AI: what is the difference?</h2>
      <p class="bx-lede">In a rule-based model, a person writes the rules and the machine only follows them. In a learning-based model, the machine works out its own rules from examples, and can improve when given new data.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Rule-based</b><span>a person wrote the rule</span></figcaption>
  <pre>emails = ["win a free prize now",
          "maths class moved to 4 pm",
          "free prize inside, click"]
for e in emails:
    print("spam" if "free prize" in e
          else "not spam")

<i># Output: spam, not spam, spam</i></pre>
  <p class="bx-code-note">It catches only the exact phrase it was given. "You have won a gift" slips through until someone adds another rule.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Learning-based</b><span>the cut-off comes from data</span></figcaption>
  <pre>grams = {"guava": [180, 200, 190],
         "grape": [5, 6, 4]}
avg = {f: sum(g) / len(g)
       for f, g in grams.items()}
cut = (avg["guava"] + avg["grape"]) / 2
print(cut)
for g in [9, 150]:
    print(g, "guava" if g &gt; cut else "grape")

<i># Output: 97.5, then 9 grape, 150 guava</i></pre>
  <p class="bx-code-note">Nobody typed 97.5. The program found it from labelled weights; feed it new fruit and the cut-off moves by itself.</p>
</figure>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Rule-based</th><th scope="col">Learning-based</th></tr></thead>
        <tbody>
          <tr><td>Who makes the rules</td><td>A developer</td><td>The model, from data</td></tr>
          <tr><td>Needs training data?</td><td>No</td><td>Yes</td></tr>
          <tr><td>Handles new situations</td><td>Only ones the rules foresee</td><td>Can adapt as data grows</td></tr>
          <tr><td>Easy to explain?</td><td>Yes, every rule is visible</td><td>Often harder</td></tr>
          <tr><td>Example</td><td>A help-desk bot with fixed questions and replies</td><td>A video app recommending what to watch next</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Neither program is something the theory paper asks you to write; they show the idea. Comparison questions of this kind, across all seven units, are gathered on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">CBSE Class 10 AI difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="drill">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. The classify-this drill</p>
      <h2>Supervised, unsupervised or reinforcement learning? Fifteen class 10 scenarios</h2>
      <p class="bx-lede">For each scenario, name the type of learning and, where it applies, the sub-type. Ask two questions: are the right answers given in the data, and is the output a category, a number, a group, a pattern or a reward?</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <ol class="bx-qlist">
        <li>A bank labels past loan applications "repaid" or "defaulted" and trains a model to judge new ones.
          <details><summary>Answer</summary> <b>Supervised, classification.</b> Labels are given and the output is one of two categories.</details></li>
        <li>A model predicts how many litres of milk a dairy will sell next Sunday.
          <details><summary>Answer</summary> <b>Supervised, regression.</b> The output is a quantity, not a category.</details></li>
        <li>A music app sorts millions of songs into groups by tempo and mood, with no genres given.
          <details><summary>Answer</summary> <b>Unsupervised, clustering.</b> No labels; similar songs are grouped.</details></li>
        <li>A stationery shop finds that pencil boxes and erasers are usually bought together.
          <details><summary>Answer</summary> <b>Unsupervised, association.</b> It finds items that occur together, not groups of customers.</details></li>
        <li>A computer learns chess by playing itself, winning points for victories and losing them for defeats.
          <details><summary>Answer</summary> <b>Reinforcement learning.</b> No labelled moves; rewards and penalties guide it.</details></li>
        <li>An app reads a photo of a leaf and names the plant species.
          <details><summary>Answer</summary> <b>Supervised, classification.</b> Trained on photos labelled with species names.</details></li>
        <li>A model estimates a used scooter's resale value from its age and kilometres driven.
          <details><summary>Answer</summary> <b>Supervised, regression.</b> The output is a continuous value.</details></li>
        <li>A school groups students by their study habits so that each group gets its own revision plan, with no groups decided in advance.
          <details><summary>Answer</summary> <b>Unsupervised, clustering.</b> The groups emerge from the data.</details></li>
      </ol>
      <ol class="bx-qlist" start="9">
        <li>A robot vacuum learns the quickest path round a room, scoring points for clean floor and losing them for bumps.
          <details><summary>Answer</summary> <b>Reinforcement learning.</b> It improves through reward and penalty.</details></li>
        <li>A model predicts tomorrow's air quality index as a number.
          <details><summary>Answer</summary> <b>Supervised, regression.</b> A number, learnt from past readings with known values.</details></li>
        <li>The same model instead says whether tomorrow's air will be "good", "moderate" or "poor".
          <details><summary>Answer</summary> <b>Supervised, classification.</b> Same data, but now the output is a category. The output decides, not the topic.</details></li>
        <li>A streaming site notices that viewers who watch one cooking show often watch a particular travel show next.
          <details><summary>Answer</summary> <b>Unsupervised, association.</b> A rule of the form "if this, then often that".</details></li>
        <li>An email service learns from mails users have marked as spam.
          <details><summary>Answer</summary> <b>Supervised, classification.</b> Users' marks are the labels.</details></li>
        <li>A news site gathers thousands of untagged articles into topics such as sport and politics on its own.
          <details><summary>Answer</summary> <b>Unsupervised, clustering.</b> Even if the groups look like topics, nobody labelled them.</details></li>
        <li>A game character learns to cross a level, earning points for coins and losing a life for each fall.
          <details><summary>Answer</summary> <b>Reinforcement learning.</b> Trial, error and a score.</details></li>
      </ol>
    </div>
    <p class="bx-mt-40">In class this drill is run against a timer with new scenarios every week, and each student must say the reason aloud, not just the type. A no-code version, where students build a classifier and a clustering model themselves, is on <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange data mining for Class 10 AI</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="compare">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. The two pairs students mix up</p>
      <h2>Classification vs regression, and clustering vs association, class 10</h2>
      <p class="bx-lede">Classification predicts a category and regression predicts a number; both are supervised. Clustering forms groups of similar items and association finds items that occur together; both are unsupervised.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col"></th><th scope="col">Classification</th><th scope="col">Regression</th></tr></thead>
          <tbody>
            <tr><td>Output</td><td>A label from a fixed set</td><td>A continuous number</td></tr>
            <tr><td>Data</td><td>Labelled</td><td>Labelled</td></tr>
            <tr><td>Example</td><td>Will this train be late: yes or no?</td><td>How many minutes late will it be?</td></tr>
            <tr><td>Scored with</td><td>Confusion matrix metrics</td><td>Error between predicted and actual</td></tr>
          </tbody>
        </table>
      </div>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col"></th><th scope="col">Clustering</th><th scope="col">Association</th></tr></thead>
          <tbody>
            <tr><td>Finds</td><td>Groups of similar records</td><td>Items that occur together</td></tr>
            <tr><td>Data</td><td>Unlabelled</td><td>Unlabelled</td></tr>
            <tr><td>Example</td><td>Grouping shoppers by spending habits</td><td>Shoppers who buy bread often buy butter</td></tr>
            <tr><td>Result looks like</td><td>Group 1, group 2, group 3</td><td>If A, then often B</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>The output test</h3><p>Cover the scenario's topic and look only at what comes out. A category means classification, a number means regression. Questions 10 and 11 above use the same data to prove it.</p></div>
      <div class="bx-card"><h3>The groups or links test</h3><p>If the result is a set of groups of people or things, it is clustering. If it is a link between items, it is association.</p></div>
      <div class="bx-card"><h3>Clustering is not classification</h3><p>Both end in groups, but classification sorts into groups decided in advance using labels; clustering discovers the groups with no labels at all.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="nn">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Neural networks</p>
      <h2>Neural network class 10: layers, ANN and CNN, and the perceptron</h2>
      <p class="bx-lede">A neural network is a model made of layers of connected nodes, loosely modelled on the brain: an input layer takes the data, hidden layers process it, and an output layer gives the result. Deep learning uses networks with many hidden layers.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>A perceptron decides</b><span>go to the park? 1 = yes</span></figcaption>
  <pre>inputs (1 = yes, 0 = no):
  x1 sunny     weight 0.6
  x2 holiday   weight 0.3
  x3 homework  weight 0.5
bias = -0.7

total = 0.6 x1 + 0.3 x2 + 0.5 x3 - 0.7
output 1 if total &gt; 0, else 0</pre>
  <p class="bx-code-note">The weights show how much each input matters; the bias shifts how easily the perceptron says yes. A bigger weight on sunny means the weather matters most.</p>
</figure>
      <div class="bx-table-wrap">
        <table class="bx-table">
          <thead><tr><th scope="col">Sunny</th><th scope="col">Holiday</th><th scope="col">Homework done</th><th scope="col">Total</th><th scope="col">Output</th></tr></thead>
          <tbody>
            <tr><td class="bx-num">1</td><td class="bx-num">1</td><td class="bx-num">0</td><td>0.6 + 0.3 - 0.7 = 0.2</td><td class="bx-num">1</td></tr>
            <tr><td class="bx-num">0</td><td class="bx-num">1</td><td class="bx-num">1</td><td>0.3 + 0.5 - 0.7 = 0.1</td><td class="bx-num">1</td></tr>
            <tr><td class="bx-num">1</td><td class="bx-num">0</td><td class="bx-num">0</td><td>0.6 - 0.7 = -0.1</td><td class="bx-num">0</td></tr>
            <tr><td class="bx-num">0</td><td class="bx-num">0</td><td class="bx-num">1</td><td>0.5 - 0.7 = -0.2</td><td class="bx-num">0</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>ANN and CNN in one line each</h3>
        <ul class="bx-check">
          <li><b>ANN, artificial neural network:</b> the general layered network, used for tasks such as predicting prices or powering a support chatbot.</li>
          <li><b>CNN, convolutional neural network:</b> a network built for images, which slides small filters across a picture to pick out edges, shapes and then whole objects.</li>
        </ul>
        <p>The CNN returns in Unit 5, on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">computer vision questions</a>.</p>
      </div>
      <div>
        <h3>What a neural network question usually asks</h3>
        <ul class="bx-check">
          <li>Name the three layers and what each does.</li>
          <li>Say what weights and bias are.</li>
          <li>Work out a perceptron total, as in the table.</li>
          <li>Give one use of an ANN and one of a CNN.</li>
          <li>Say why deep learning needs a lot of data.</li>
        </ul>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="qa">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. Written answers</p>
      <h2>Advanced modeling class 10 questions and answers, by marks</h2>
      <p class="bx-lede">Ten original questions, from one mark to four. The bold words in each model answer are the points an examiner looks for; an answer that misses one usually loses that mark.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>One and two marks</h3>
        <ol class="bx-qlist">
          <li>Which is the widest of the three: AI, machine learning or deep learning?
            <details><summary>Answer</summary> <b>AI.</b> ML sits inside AI and DL sits inside ML.</details></li>
          <li>In a dataset of houses with area, rooms and price, which column is the label if we want to predict price?
            <details><summary>Answer</summary> <b>Price.</b> Area and rooms are features.</details></li>
          <li>Name the type of learning in which an agent learns from rewards and penalties.
            <details><summary>Answer</summary> <b>Reinforcement learning.</b></details></li>
          <li>Give two differences between supervised and unsupervised learning.
            <details><summary>Answer</summary> Supervised learning uses <b>labelled data</b>; unsupervised uses <b>unlabelled data</b>. Supervised predicts a <b>known kind of answer</b> (a class or a number); unsupervised <b>discovers structure</b> such as groups or associations.</details></li>
          <li>Why is a learning-based model better suited to spam filtering than a rule-based one?
            <details><summary>Answer</summary> Spammers keep <b>changing their wording</b>, so fixed rules soon miss new spam. A learning-based model <b>learns from newly marked emails</b> and adapts without anyone rewriting rules.</details></li>
          <li>State one difference between classification and clustering.
            <details><summary>Answer</summary> Classification sorts data into <b>categories defined in advance, using labels</b>; clustering <b>finds its own groups in unlabelled data</b>.</details></li>
        </ol>
      </div>
      <div>
        <h3>Four marks</h3>
        <ol class="bx-qlist" start="7">
          <li>Explain the three categories of machine learning, with one example each.
            <details><summary>Answer</summary> <b>Supervised</b>: learns from labelled data, such as predicting exam results from past marked records (1). <b>Unsupervised</b>: finds patterns in unlabelled data, such as grouping customers (1). <b>Reinforcement</b>: learns by trial and error with rewards, such as a robot learning to walk (1). One clear example for each (1).</details></li>
          <li>A city wants to (a) predict the number of buses needed each hour and (b) group bus stops with similar crowd patterns. Name the model type for each and justify.
            <details><summary>Answer</summary> (a) <b>Regression</b>, supervised (1): the output is a number learnt from past hourly records (1). (b) <b>Clustering</b>, unsupervised (1): stops are grouped by similarity with no labels given (1).</details></li>
          <li>Draw and explain the structure of an artificial neural network.
            <details><summary>Answer</summary> Diagram of three columns of nodes joined by lines (1). <b>Input layer</b> receives the features (1). <b>Hidden layers</b> process the data using weights and bias (1). <b>Output layer</b> gives the prediction (1).</details></li>
          <li>A perceptron has inputs 1 and 1, weights 0.4 and 0.3 and bias -0.5. It outputs 1 if the total is above 0. Find the total and the output, and say what would happen with a bias of -0.8.
            <details><summary>Answer</summary> Total = 0.4 + 0.3 - 0.5 = <b>0.2</b> (1), above 0, so output <b>1</b> (1). With bias -0.8 the total is 0.7 - 0.8 = <b>-0.1</b> (1), so output <b>0</b>: a more negative bias makes a yes harder to reach (1).</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">
      In the batch, these answers are written to the clock and marked on screen point by point, and the scenario drill comes back every week with new cases until no student hesitates. Unit 2 objective items are in <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">the class 10 AI MCQ bank</a>, revision notes for every unit are on <a class="bx-link" href="/cbse-class-10-ai-notes">CBSE Class 10 AI notes</a>, and the oral version of these questions is rehearsed on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">the viva questions page</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Learn Unit 2 in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats teach the unit one model family at a time and test it with scenarios the student has not seen. The batch keeps every unit moving on a set rhythm, with classmates calling out their reasons; one to one stays on the pairs your child keeps confusing. Monthly billing, no admission fee, stop at any month end.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One model family taught per class, with examples on screen',
    'A timed scenario-sorting round every Wednesday',
    'Unit 2 written answers inside every full mock'
  ],
  choosePersonal: [
    'Class days and hours your family picks, in your time zone',
    'Extra scenarios on the pairs your child mixes up',
    'Neural network diagrams drawn and explained aloud',
    'Four-mark answers rewritten until every point is in',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student who knows the definitions but still calls clustering "classification" under time pressure usually needs a handful of one to one sessions spent only on scenarios. A student starting the unit from scratch is better in the batch, where Unit 2 leads straight into Unit 3 and each idea is used again soon after it is taught. Fees appear in your own currency.',
  zonesH2: 'Unit 2 classes for CBSE families in the Gulf and abroad',
  zonesLede: 'CBSE schools in Abu Dhabi, Dammam, Manama or Kampala set the same 417 paper, and Unit 2 is its heaviest theory unit there too. These are the local batch times this winter.',
  zonesAfter: 'If the batch hour does not suit your household, one to one is scheduled at a time you choose. Family details for students abroad are on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Unit 2',
  faqH2: 'What students ask about advanced concepts of modeling',
  faqs: [
    ['What is advanced concepts of modeling in AI class 10?', 'It is Unit 2 of CBSE Class 10 Artificial Intelligence (417). It explains how AI models learn: AI, machine learning and deep learning, features and labels, rule-based and learning-based models, supervised, unsupervised and reinforcement learning with their sub-types, and neural networks including ANN, CNN and the perceptron.'],
    ['How many marks is Unit 2 in CBSE Class 10 AI?', 'Advanced Concepts of Modeling in AI carries 11 of the 50 theory marks in the 417 curriculum for 2026-27, the most of any unit. In the 2025-26 sample paper it supplied four of the objective items in the AI part, with the rest of its marks in written answers.'],
    ['What is the difference between supervised, unsupervised and reinforcement learning?', 'Supervised learning trains on labelled data, so the right answers are known. Unsupervised learning works on unlabelled data and finds its own structure, such as groups. Reinforcement learning has no dataset of answers at all: an agent tries actions and learns from rewards and penalties.'],
    ['What is the difference between classification and regression in class 10?', 'Both are supervised learning. Classification predicts a category, such as spam or not spam, or pass or fail. Regression predicts a continuous number, such as a temperature, a price or a delivery time. Look at the output: a label means classification, a quantity means regression.'],
    ['What is the difference between clustering and association?', 'Both are unsupervised. Clustering places similar records in the same group, for example customers with similar spending. Association finds items or events that tend to occur together, for example people who buy notebooks often buy pens. Groups mean clustering; if-this-then-that links mean association.'],
    ['What is the difference between rule based and learning based AI?', 'In rule-based AI, a developer writes every rule and the system follows them, so it cannot cope with cases the rules did not foresee. In learning-based AI, the model works out patterns from training data and can improve as new data arrives. A fixed-reply help-desk bot is rule-based; a recommendation system is learning-based.'],
    ['What is a neural network in class 10 AI?', 'A neural network is a model made of layers of connected nodes: an input layer that takes the data, one or more hidden layers that process it using weights and bias, and an output layer that gives the result. Networks with many hidden layers are what deep learning uses.'],
    ['What is the difference between ANN and CNN?', 'An artificial neural network (ANN) is the general layered network used for many tasks, such as predicting values. A convolutional neural network (CNN) is a special kind designed for images: it slides small filters over the picture to detect edges and shapes, which makes it the standard choice in computer vision.'],
    ['How do I identify the type of learning in a scenario question?', 'Ask first whether the data comes with correct answers. If yes, it is supervised; then check if the output is a category (classification) or a number (regression). If no labels and the result is groups, it is clustering; if it is items found together, association. If learning comes from rewards, it is reinforcement.'],
    ['Do your classes cover Unit 2, and how much do they cost?', 'Yes. Unit 2 is taught in the Monday and Wednesday 9:00 PM IST batch with weekly scenario drills and marked written answers, or in personalised one to one at your time. The monthly fee shown on this page, in your own currency, covers it. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Try a free Unit 2 class with a teacher',
  startHtml: `        <p>In the free first class your child sorts a round of fresh scenarios into supervised, unsupervised and reinforcement learning, explaining each choice to the teacher, then works one perceptron total on screen. Afterwards the mentor tells you which parts of the unit are solid, which pairs are still being confused, and whether the batch or one to one is the better fit.</p>
        <p>Want the wider view first? Read <a class="bx-link" href="/cbse-class-10-ai-important-questions">CBSE Class 10 AI important questions</a> across all units.</p>`,
  footerTag: 'CBSE 417 &middot; Unit 2 Advanced Modeling'
};
