// CBSE Class 10 AI (417): Orange Data Mining, the no-code use cases, 2026-27.
// Intent: "orange data mining class 10 AI", "palmer penguins class 10 AI", "coral
// bleaching project class 10", "statistical data unit 4", "no code AI class 10",
// "teachable machine class 10".
// Distinct from the practical exam page (one table of Orange tasks for exam day),
// the project ideas page (coral as a project idea with its 4Ws and an illustrative
// matrix) and the viva page: this page is the widget-by-widget walkthrough of each
// use case CBSE names, every chain written as a table (no screenshots).
// Which use cases: verified 2026-11-06 in the CBSE 417 curriculum 2026-27
// (cbseacademic.nic.in): Unit 4 "AI project cycle in Orange data mining (Palmer
// penguins case study)", Unit 5 "Build a real-world Classification Model: Coral
// Bleaching (Use Case Walkthrough)", Unit 6 "sentiment analysis process ... with
// the Orange Data Mining tool"; Unit 5 also names Lobe and Teachable Machine
// ("Build a Smart Sorter"). The CBSE / Intel Class 10 handbook adds the Kayla food
// price regression example in Unit 4 (File, Data Table, Linear Regression, Test and
// Score, Predictions).
// Widget chains: read from CBSE's own shared Drive files, downloaded 2026-11-06 and
// parsed as XML (not opened in Orange): "[ODM Template] Palmer Penguin.ows" (File x2,
// Impute, Feature Statistics, Select Columns, Data Sampler 80 percent stratified,
// Data Info x2, Tree, Random Forest, Test and Score, Predictions) and "[ODM
// Template] CV_Project3.ows" plus its steps PDF (Import Images x2, Image Viewer x2,
// Image Embedding x2, Data Table, Logistic Regression, Random Forest, SVM, Test and
// Score, Confusion Matrix, Predictions; classes Bleached and Unbleached). The CBSE
// sentiment folder holds no workflow file we could open, so that chain is the
// standard Orange Text add-on route from the add-on's documentation, and the page
// says so. Embedder facts from the Image Analytics docs (SqueezeNet local and
// default; Inception v3 and others need internet).
// Numbers checked with python3 on 2026-11-06 (scratch calc/cb16.py): CBSE's
// penguins_train.csv has 344 rows, Adelie 152, Gentoo 124, Chinstrap 68, two rows
// with all four measurements missing, mean culmen length 43.92 mm over 342 values;
// its penguins_test.csv is the same 344 rows with the class column renamed; 80
// percent of 344 = 275.2, so about 275 train and 69 test; stratified test shares
// 30.4, 13.6, 24.8. Illustrative matrix (labelled as such) 29/1/0, 2/12/0, 0/0/25:
// 66 of 69 correct = 0.957, Chinstrap recall 12/14 = 0.857, Adelie precision 29/31
// = 0.935. VADER compound scores run with the vaderSentiment package: 0.765,
// -0.4588, 0.0, 0.431, 0.4588 for the five sentences shown.
'use strict';

module.exports = {
  slug: 'orange-data-mining-class-10-ai',
  code: 'cb16',
  board: 'cbse',
  themeColor: '#3B5B4B',
  dateModified: '2026-11-06',
  title: 'Orange Data Mining Class 10 AI: Penguins, Coral, Sentiment',
  description: 'Orange data mining for class 10 AI (CBSE 417, 2026-27): the Palmer penguins, coral bleaching and sentiment use cases, built widget by widget in tables.',
  ogTitle: 'Orange Data Mining for Class 10 AI, Every CBSE Use Case Step by Step',
  ogDesc: 'The no-code use cases the CBSE 417 curriculum names for 2026-27, Palmer penguins, coral bleaching and sentiment analysis, built widget by widget with every connection, setting and readout explained.',
  twDesc: 'Palmer penguins, coral bleaching and sentiment analysis in Orange, each widget chain laid out step by step for CBSE 417.',
  headline: 'Orange Data Mining for Class 10 AI: the Palmer Penguins, Coral Bleaching and Sentiment Analysis Use Cases, Widget by Widget',
  courseName: 'CBSE Class 10 AI (417) Orange and No-Code AI Practice, Live Online',
  courseDesc: 'Live online practice with Orange Data Mining for CBSE Class 10 Artificial Intelligence (417), session 2026-27: the Palmer penguins, coral bleaching and sentiment analysis use cases built widget by widget on a shared screen, every readout explained in the words examiners use, and unseen no-code tasks rehearsed before the practical, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Orange',
  navLinks: [['#usecases', 'Use cases'], ['#penguins', 'Penguins'], ['#coral', 'Coral'], ['#sentiment', 'Sentiment']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Orange Data Mining']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; No-code AI with Orange, 2026-27',
  h1: 'Orange Data Mining for Class 10 AI: every CBSE use case, built widget by widget.',
  lede: 'Orange data mining is the no-code tool the CBSE Class 10 AI curriculum uses for three practical walkthroughs in 2026-27: predicting Palmer penguin species from measurements, spotting coral bleaching in photographs, and judging the sentiment of written reviews. Below, each one is laid out as a table of widgets, with what to connect, what to set and what to read off the screen. In our live batch, students build these on a shared screen and then explain every widget aloud, the way the practical examiner will ask them to.',
  heroNote: 'Live online &middot; penguins, coral and sentiment, step by step &middot; every readout explained &middot; unseen no-code tasks &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Orange Data Mining for CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Orange is built in class',
    title: 'No-code AI with Orange',
    right: 'CBSE 417',
    rows: [
      ['Monday, one use case built live', '9:00', 'PM IST'],
      ['Wednesday, unseen data, same widgets', '9:00', 'PM IST'],
      ['CBSE walkthroughs on this page', '3', 'use cases'],
      ['Practical exam inside Part C', '15', 'marks']
    ],
    zones: '<b>UAE and Oman:</b> 7:30 PM. <b>Saudi Arabia, Qatar, Kuwait and Bahrain:</b> 6:30 PM. <b>Kenya:</b> 6:30 PM. <b>Singapore and Malaysia:</b> one to one at a local hour you choose.',
    stamps: ['Units 4, 5 and 6', 'No code needed']
  },
  picksH2: 'Courses behind these walkthroughs',
  picksLede: 'The Orange course where every widget below is built and explained, the 417 course whose batch runs these use cases inside the full syllabus, and the Python course for students who want to see the same models in code.',
  picks: [
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'The tool / Orange', h3: 'Visual ML with Orange', p: 'File to Predictions on tables, images and text, with time to try other learners and settings until the readouts make sense.' },
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, where each Orange walkthrough sits in the unit it belongs to and is rehearsed before the practical.' },
    { slug: 'python-complete-masterclass-teens', code: 'Same models in code / Python', h3: 'Python for Teens', p: 'Pandas, NumPy and Matplotlib for Unit 7, and the code version of the steps Orange hides behind its widgets.' }
  ],
  capsule: 'Orange data mining in Class 10 AI is the no-code tool CBSE 417 uses for three use case walkthroughs in 2026-27: predicting Palmer penguin species from body measurements (Unit 4, Statistical Data), classifying coral photos as bleached or unbleached (Unit 5, Computer Vision) and scoring the sentiment of text (Unit 6, NLP). Each follows the AI project cycle with widgets such as File, Impute, Data Sampler, Test and Score, Confusion Matrix and Predictions. These units are assessed in the practical. Modern Age Coders builds them live in a Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="usecases">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. Which Orange use cases are in the syllabus?</p>
      <h2>Which no-code AI use cases does CBSE name for Class 10 in 2026-27?</h2>
      <p class="bx-lede">The 2026-27 CBSE 417 curriculum names three Orange walkthroughs, one per practical domain, and the handbook adds a short price-prediction example. All of them are assessed through the practical, not the theory paper.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Use case</th><th scope="col">Unit and domain</th><th scope="col">Model type</th><th scope="col">Orange add-on needed</th></tr></thead>
        <tbody>
          <tr><td>Palmer penguins: predict the species</td><td>Unit 4, Statistical Data</td><td>Classification, three classes</td><td>None, core Orange</td></tr>
          <tr><td>Food price index: predict the price (handbook example)</td><td>Unit 4, Statistical Data</td><td>Regression</td><td>None, core Orange</td></tr>
          <tr><td>Coral bleaching: bleached or unbleached?</td><td>Unit 5, Computer Vision</td><td>Image classification, two classes</td><td>Image Analytics</td></tr>
          <tr><td>Sentiment analysis of reviews or posts</td><td>Unit 6, NLP</td><td>Positive, negative or neutral scoring</td><td>Text</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Before the first class: install and add-ons</h3>
        <ol class="bx-steps">
          <li class="bx-step"><h4>Install Orange</h4><p>Download it from orangedatamining.com and install it like any desktop program.</p></li>
          <li class="bx-step"><h4>Add the two add-ons</h4><p>Open Options, then Add-ons, tick <b>Image Analytics</b> and <b>Text</b>, and restart Orange.</p></li>
          <li class="bx-step"><h4>Check the toolbox</h4><p>The left panel should now show Image Analytics and Text sections beside Data, Visualize, Model and Evaluate.</p></li>
        </ol>
        <p>A missing add-on is the commonest reason a student cannot find Import Images or Sentiment Analysis on the day.</p>
      </div>
      <div>
        <h3>Teachable Machine and Lobe</h3>
        <p>The same curriculum names two more no-code tools for Unit 5: Teachable Machine and Lobe, for a "smart sorter" that tells bottles, cans and paper apart. They train an image model in the browser or an app from photos you take. Orange differs because every step of the project cycle is a visible widget you can open and explain, which is why the walkthroughs below use it.</p>
        <p>Where these units sit in the 50 practical marks is on <a class="bx-link" href="/cbse-class-10-ai-practical-exam-questions">CBSE Class 10 AI practical exam questions</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="penguins">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How do I build the Palmer penguins model?</p>
      <h2>Palmer penguins class 10 AI: the Orange workflow, step by step</h2>
      <p class="bx-lede">The penguins model predicts a penguin's species, Adelie, Chinstrap or Gentoo, from its island and four body measurements. CBSE's own workflow file uses eleven widgets, and each one maps to a stage of the AI project cycle.</p>
    </div>
    <p><b>The data.</b> CBSE's training file has 344 penguins: 152 Adelie, 124 Gentoo and 68 Chinstrap. Columns are species, island, culmen length and culmen depth (the culmen is the upper ridge of the bill), flipper length and body mass. Two penguins have all four measurements missing, which is why the workflow needs Impute.</p>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Step</th><th scope="col">Widget</th><th scope="col">Connect</th><th scope="col">What to set or read</th><th scope="col">Project cycle stage</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>File (renamed TrainData)</td><td>Starts the chain</td><td>Load penguins_train.csv; check species shows as categorical</td><td>Data acquisition</td></tr>
          <tr><td>2</td><td>Impute</td><td>TrainData to Impute</td><td>Fill the missing measurements, for example with the average</td><td>Data exploration</td></tr>
          <tr><td>3</td><td>Feature Statistics</td><td>Impute to Feature Statistics</td><td>Read mean, spread and missing count per column; mean culmen length is about 43.9 mm</td><td>Data exploration</td></tr>
          <tr><td>4</td><td>Select Columns</td><td>Impute to Select Columns</td><td>Move species to <b>Target</b>; keep island and the four measurements as features</td><td>Modelling (set up)</td></tr>
          <tr><td>5</td><td>Data Sampler</td><td>Select Columns to Data Sampler</td><td>Fixed proportion 80 percent, stratified; about 275 penguins train, 69 are held back</td><td>Modelling (split)</td></tr>
          <tr><td>6</td><td>Data Info, twice</td><td>Data Sample to one, Remaining Data to the other</td><td>Confirm the two row counts add up to 344</td><td>Checking the split</td></tr>
          <tr><td>7</td><td>Tree and Random Forest</td><td>Data Sample to each learner</td><td>Defaults are fine to start</td><td>Modelling</td></tr>
          <tr><td>8</td><td>Test and Score</td><td>Data Sample to Data, Remaining Data to Test Data, both learners to Learner</td><td>Choose "Test on test data"; compare CA, Precision, Recall and F1 for the two models</td><td>Evaluation</td></tr>
          <tr><td>9</td><td>File (renamed TestData)</td><td>Starts a second chain</td><td>Load penguins_test.csv</td><td>New data</td></tr>
          <tr><td>10</td><td>Predictions</td><td>TestData to Data; Tree and Random Forest Model outputs to Predictors</td><td>Each row shows the true species beside each model's guess</td><td>Deployment, in miniature</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What the exploration should show</h3>
        <ul class="bx-check">
          <li><b>Island gives a lot away.</b> Gentoo appear only on Biscoe and Chinstrap only on Dream; Adelie live on all three islands.</li>
          <li><b>Flippers separate Gentoo.</b> Their average flipper is about 217 mm against about 190 mm for Adelie.</li>
          <li><b>Culmen length separates Adelie from Chinstrap.</b> About 38.8 mm against about 48.8 mm on average.</li>
        </ul>
        <p>Drop a Scatter Plot on the Impute output with culmen length against flipper length, coloured by species, and the three groups are visible before any model is trained.</p>
      </div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Reading the Confusion Matrix</b><span>illustrative, 69 test penguins</span></figcaption>
  <pre>                 Predicted
Actual      Adelie Chinstrap Gentoo
Adelie        29       1        0
Chinstrap      2      12        0
Gentoo         0       0       25

Correct: 29 + 12 + 25 = 66 of 69
Accuracy: 66 / 69 = 0.957
Chinstrap recall: 12 / 14 = 0.857
Adelie precision: 29 / 31 = 0.935</pre>
  <p class="bx-code-note">Your numbers will differ with each random split. The pattern is typical: Gentoo is never confused, while Adelie and Chinstrap swap a few, because their bodies are similar and Chinstrap has the fewest examples.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">One honest caution about the CBSE test file</h3>
    <p>CBSE's penguins_test.csv holds the same 344 penguins as the training file, with the species column renamed "actual species". So the Predictions table will look almost perfect: the models have already seen those birds. The fair score is the one Test and Score reports on the 69 held-back penguins. If an examiner asks why Predictions looks better than Test and Score, that is the answer, and it is the same idea as never testing on training data in Unit 3. The full evaluation reasoning is on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">CBSE Class 10 AI evaluating models questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="coral">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. How does Orange classify coral photos?</p>
      <h2>Coral bleaching project class 10: the image classification chain in Orange</h2>
      <p class="bx-lede">Orange cannot learn from raw pixels directly. The Image Embedding widget turns every photo into a long row of numbers that describe its features, and from then on an ordinary classifier treats the photos like rows in a table.</p>
    </div>
    <p><b>The data.</b> Two folders, Train and Test. Inside each, one sub-folder per class: Bleached and Unbleached. Import Images reads the sub-folder name as the label, so the folder layout is the labelling.</p>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Step</th><th scope="col">Widget</th><th scope="col">Connect</th><th scope="col">What to set or read</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Import Images (renamed Train Data)</td><td>Starts the chain</td><td>Choose the training folder; it should report two categories</td></tr>
          <tr><td>2</td><td>Image Viewer</td><td>Train Data to Image Viewer</td><td>Scroll the photos; check for blurred, duplicate or wrongly filed images</td></tr>
          <tr><td>3</td><td>Image Embedding</td><td>Train Data to Image Embedding</td><td>SqueezeNet runs offline and is the default; Inception v3 and the others need internet</td></tr>
          <tr><td>4</td><td>Data Table</td><td>Image Embedding to Data Table</td><td>See each image now as a row of numeric columns plus its category</td></tr>
          <tr><td>5</td><td>Logistic Regression, Random Forest, SVM</td><td>Each learner to Test and Score</td><td>Three models, so their scores can be compared</td></tr>
          <tr><td>6</td><td>Test and Score</td><td>Image Embedding to Data</td><td>Cross-validation is a sound choice here; compare CA, F1, Precision and Recall</td></tr>
          <tr><td>7</td><td>Confusion Matrix</td><td>Test and Score to Confusion Matrix</td><td>Switch between learners on its left to see which one misses bleached coral</td></tr>
          <tr><td>8</td><td>Import Images (Test Data), Image Viewer, Image Embedding</td><td>A second chain for the test folder</td><td>Point it at the test folder, not the training one</td></tr>
          <tr><td>9</td><td>Logistic Regression (second copy)</td><td>Train embeddings to its Data</td><td>Trains the chosen model on all training photos</td></tr>
          <tr><td>10</td><td>Predictions</td><td>Test embeddings to Data; the model to Predictors</td><td>Each test photo with its predicted class and probability</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Which model won</h3><p>In the CBSE walkthrough, Logistic Regression gave the best accuracy of the three, which is why the final chain uses it. On your own photos another learner may win; the method of choosing is what earns marks.</p></div>
      <div class="bx-card"><h3>Which error matters</h3><p>A bleached reef predicted as unbleached is a false negative, and it is the costly one, because the reef gets no attention. So read recall for the Bleached class, not only overall accuracy.</p></div>
      <div class="bx-card"><h3>A slip in the steps PDF</h3><p>CBSE's step sheet tells you, at the prediction stage, to select the training folder. Choose the test folder: predicting photos the model trained on proves nothing.</p></div>
    </div>
    <p class="bx-mt-40">Pixels, RGB channels and convolution, the theory behind what Image Embedding does, are on <a class="bx-link" href="/cbse-class-10-ai-computer-vision-questions">CBSE Class 10 AI computer vision questions</a>. Coral as a full project with its 4Ws is on <a class="bx-link" href="/cbse-class-10-ai-project-ideas">CBSE Class 10 AI project ideas</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="sentiment">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. How is sentiment analysis done in Orange?</p>
      <h2>Sentiment analysis in Orange for the NLP unit</h2>
      <p class="bx-lede">Sentiment analysis decides whether a piece of text is positive, negative or neutral. In Orange, the Text add-on loads the texts as a corpus, cleans them, and the Sentiment Analysis widget adds a score to every document.</p>
    </div>
    <p>The curriculum names a sentiment walkthrough for Unit 6, but the shared CBSE folder for it does not hold a workflow file we could open, so the chain below is the standard route the Text add-on documents. Schools may use their own review or tweet dataset.</p>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Step</th><th scope="col">Widget</th><th scope="col">What it does</th><th scope="col">What to set or read</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Corpus (or Import Documents)</td><td>Loads the texts as documents</td><td>Pick the column that holds the text as the text feature</td></tr>
          <tr><td>2</td><td>Preprocess Text</td><td>Text normalisation</td><td>Lowercase, tokenise, remove punctuation and stopwords: the Unit 6 theory, as tick boxes</td></tr>
          <tr><td>3</td><td>Sentiment Analysis</td><td>Scores each document</td><td>Choose <b>Vader</b>: it adds positive, negative, neutral and compound columns; compound runs from -1 to +1</td></tr>
          <tr><td>4</td><td>Data Table</td><td>Shows the scores</td><td>Sort by compound to see the most negative and most positive texts</td></tr>
          <tr><td>5</td><td>Word Cloud</td><td>Shows frequent words</td><td>Compare clouds for the positive and the negative texts</td></tr>
          <tr><td>6</td><td>Box Plot or Distributions</td><td>Summarises the scores</td><td>How many texts fall on each side of zero</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Five sentences, VADER compound score</b><span>run in Python</span></figcaption>
  <pre>"The new library is bright,
 quiet and wonderful."           0.765
"The bus was late again and
 the driver was rude."          -0.459
"The canteen opens at noon."     0.000
"The food was not bad at all."   0.431
"Great, another power cut during
 my online exam."                0.459</pre>
  <p class="bx-code-note">Scored with the VADER lexicon, the method behind Orange's Vader option; Orange may differ in the last decimal. The last line is sarcasm, and the tool calls it positive.</p>
</figure>
      <div>
        <h3>What the five scores teach</h3>
        <ul class="bx-check">
          <li><b>Neutral is real.</b> A plain fact scores 0, neither positive nor negative.</li>
          <li><b>Negation is handled.</b> "Not bad" comes out mildly positive, because VADER reads "not" before "bad".</li>
          <li><b>Sarcasm is not.</b> "Great" pulls the power-cut complaint positive. A lexicon counts words; it does not understand intent.</li>
        </ul>
        <p>That last point answers a favourite viva question on the limits of NLP. Bag of Words and TFIDF, the counting ideas underneath, are worked by hand on <a class="bx-link" href="/bag-of-words-tfidf-class-10-ai">Bag of Words and TFIDF for Class 10 AI</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="nocode">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. What is no-code AI, and what will I be asked?</p>
      <h2>No code AI class 10: price prediction, code versus no-code, and viva questions</h2>
      <p class="bx-lede">No-code AI means building, training and testing a model by dragging and connecting ready-made blocks instead of writing a program. Low-code tools mix blocks with a little code.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>The handbook's regression example</h3>
        <p>In Unit 4 the handbook tells of Kayla, who budgets animal food at a zoo and needs to predict rising food prices without knowing how to code. The chain is short:</p>
        <ol class="bx-steps">
          <li class="bx-step"><h4>File</h4><p>Load the food price index data and set the price index as the target.</p></li>
          <li class="bx-step"><h4>Data Table</h4><p>Look at the rows before modelling.</p></li>
          <li class="bx-step"><h4>Linear Regression</h4><p>File to Linear Regression; the output is a number, so this is regression.</p></li>
          <li class="bx-step"><h4>Test and Score</h4><p>File to Data, Linear Regression to Learner; read RMSE, MAE and R2 instead of accuracy.</p></li>
          <li class="bx-step"><h4>Predictions</h4><p>Data to Data, and the Linear Regression model to Predictors.</p></li>
        </ol>
        <p>The handbook's last step joins Test and Score to Predictions and mentions a logistic model. In Orange, Predictions takes data plus a trained model, as in the last step above, and a price is predicted with linear, not logistic, regression.</p>
      </div>
      <div>
        <h3>Code versus no-code for statistical data</h3>
        <div class="bx-table-wrap"><table class="bx-table">
          <thead><tr><th scope="col">Point</th><th scope="col">Code (Python)</th><th scope="col">No-code (Orange)</th></tr></thead>
          <tbody>
            <tr><td>Skill needed</td><td>Programming</td><td>Understanding the steps</td></tr>
            <tr><td>Flexibility</td><td>Anything you can write</td><td>Only the widgets that exist</td></tr>
            <tr><td>Speed to a first model</td><td>Slower</td><td>Minutes</td></tr>
            <tr><td>Risk</td><td>Bugs in your code</td><td>Trusting outputs without checking them, called automation bias</td></tr>
          </tbody>
        </table></div>
        <p>The handbook also warns that no-code platforms give less control over security, so they suit data that is not sensitive.</p>
      </div>
    </div>
    <h3 class="bx-mt-40">Questions examiners ask at the Orange screen</h3>
    <ol class="bx-qlist">
      <li>Why did you use Select Columns?
        <details><summary>Answer</summary> To mark species as the target, the label the model must predict. Without a target, Test and Score has nothing to check against.</details></li>
      <li>What does Data Sampler do, and why stratified?
        <details><summary>Answer</summary> It splits the data into a training part and a held-back test part. Stratified keeps the same share of each species in both parts.</details></li>
      <li>What does Image Embedding output?
        <details><summary>Answer</summary> A row of numbers per image that describes its features, so a normal classifier can learn from photos.</details></li>
      <li>Which stage of the AI project cycle is Test and Score?
        <details><summary>Answer</summary> Evaluation. Impute and the plots belong to data exploration; the learners to modelling.</details></li>
      <li>Is your sentiment tool always right?
        <details><summary>Answer</summary> No. It scores word lists, so sarcasm and mixed reviews fool it. Checking a sample by hand shows how often it agrees with a person.</details></li>
    </ol>
    <p>More of these, for every practical unit, are on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">CBSE Class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is Orange taught live?</p>
      <h2>How the live batch teaches Orange for the 417 practical</h2>
      <p class="bx-lede">Following a step sheet builds a workflow once. Explaining every widget, and rebuilding it on data you have not seen, is what the practical and its viva reward, so that is what class time goes on.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Built on a shared screen</h3><p>The teacher builds one use case live while students build alongside on their own machines. Each widget is opened, its settings changed and the effect on the readout talked through.</p></div>
      <div class="bx-card"><h3>Same widgets, new data</h3><p>The following class swaps the dataset, fruit photos for coral, shop reviews for tweets, and students rebuild the chain without the step sheet. The gaps show quickly and are fixed in the same session.</p></div>
      <div class="bx-card"><h3>Explain it aloud</h3><p>Every student explains one widget per class in the words an examiner expects: target, held-back data, false negative, embedding. That rehearsal is what turns a working canvas into viva marks.</p></div>
    </div>
    <p class="bx-mt-40">
      Students who are stuck on an add-on install or a broken connection share their screen and it is fixed live. How these walkthroughs feed the project and file is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>, and the project cycle they all follow is on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">AI project cycle and ethics</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Build these Orange workflows in the Monday and Wednesday batch, or one to one',
  chooseLede: 'In the batch, students build each use case alongside classmates and hear each other explain the widgets. One to one goes at your child\'s speed on their own laptop, with every install problem and broken link fixed on the spot. Same syllabus, same teachers, monthly billing, no admission fee, stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students, one teacher',
    'One use case built live each week',
    'The same chain rebuilt on unseen data',
    'Widget explanations rehearsed for the viva'
  ],
  choosePersonal: [
    'Days and time chosen by you, in your own time zone',
    'Orange set up and checked on your own computer',
    'Extra datasets for the use case your child finds hardest',
    'The school\'s own practical tasks practised if you share them',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'A student whose school lab time is short, or who has never installed Orange, often moves fastest one to one, where setup and each workflow are done on their own machine. A student who also needs the theory units gains more from the batch, where Orange sits inside the full 417 course. Fees are shown in your own currency.',
  zonesH2: 'Orange and no-code AI practice for CBSE students in the Gulf and abroad',
  zonesLede: 'CBSE schools abroad set the same practical units, and Orange runs the same on any laptop. Here is the evening batch in your local time this winter.',
  zonesAfter: 'If the batch hour clashes with school or travel, personalised one to one runs at a time you choose. More for families outside India is on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Orange in Class 10 AI',
  faqH2: 'What students ask about Orange Data Mining in class 10 AI',
  faqs: [
    ['What is Orange Data Mining in class 10 AI?', 'Orange is a free, open-source tool for data analysis and machine learning in which you build a model by dragging widgets onto a canvas and connecting them, without writing code. CBSE 417 uses it in 2026-27 for three practical walkthroughs: Palmer penguins (Statistical Data), coral bleaching (Computer Vision) and sentiment analysis (NLP).'],
    ['Is Orange Data Mining in the class 10 AI theory exam?', 'The walkthroughs belong to Units 4, 5 and 6 practical work, which is assessed through the practical file, practical exam and viva. Units 4 and 7 are practical only. Objective items about no-code tools can still appear, so know what Orange is and what its main widgets do.'],
    ['What is the Palmer penguins case study in class 10 AI?', 'It is the Unit 4 use case in which an Orange model predicts a penguin\'s species, Adelie, Chinstrap or Gentoo, from its island, culmen length and depth, flipper length and body mass. CBSE\'s training file has 344 penguins. The workflow runs File, Impute, Select Columns, Data Sampler, Tree and Random Forest, Test and Score, then Predictions.'],
    ['Which widgets are used for the coral bleaching project?', 'Import Images to load photos from Bleached and Unbleached sub-folders, Image Viewer to check them, Image Embedding to turn each photo into numbers, then Logistic Regression, Random Forest and SVM compared in Test and Score with a Confusion Matrix. A second Import Images chain feeds the test photos into Predictions.'],
    ['Why does Image Embedding need the internet?', 'Only some embedders do. SqueezeNet, the default in current versions, runs on your own computer. Inception v3, VGG-16, VGG-19 and the others send images to a server to be embedded, so they need a connection. If the lab has no internet, choose SqueezeNet.'],
    ['How do I do sentiment analysis in Orange?', 'Install the Text add-on, load your texts with Corpus, clean them with Preprocess Text, then connect Sentiment Analysis and choose a method such as Vader. It adds positive, negative, neutral and compound scores. View them in a Data Table sorted by compound, and use Word Cloud to compare frequent words.'],
    ['What is no code AI in class 10?', 'No-code AI means building and testing a model through a visual interface, dragging and connecting blocks, instead of programming. Examples in the curriculum are Orange, Teachable Machine and Lobe. Low-code tools combine blocks with some code. The trade-off is speed and ease against flexibility and control.'],
    ['Is Teachable Machine in the class 10 AI syllabus?', 'Yes. The 2026-27 CBSE 417 curriculum lists Teachable Machine with supervised learning in Unit 2 and, with Lobe, for a smart sorter activity in the Unit 5 practical, where a model learns to tell bottles, cans and paper apart from photos.'],
    ['Why are my Predictions almost 100 percent correct?', 'Usually because you are predicting rows the model was trained on. CBSE\'s penguins test file repeats the training penguins, so it will look near perfect. The honest measure is Test and Score on the data held back by Data Sampler.'],
    ['Is Orange practice part of your regular classes?', 'Yes. Each use case is built live and then rebuilt on fresh data in the batch or one to one, all covered by the monthly fee shown on this page in your own currency. There is no admission fee and the first class is a free demo.']
  ],
  startH2: 'Build a free Orange workflow with a teacher',
  startHtml: `        <p>In the free first class your child builds the penguins workflow with the teacher, from File to Predictions, and explains what three of the widgets do. You will see how the practical is prepared, and the mentor will tell you plainly which parts of the practical need work and whether the batch or one to one suits your child.</p>
        <p>Want to see how the practical units fit the full subject first? Read <a class="bx-link" href="/cbse-class-10-ai-syllabus-explained">the 417 syllabus explained</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Orange Data Mining for Class 10 AI'
};
