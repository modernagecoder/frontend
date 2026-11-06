// CBSE Class 10 AI (417): project ideas for the 10-mark project (plus its 5-mark viva),
// session 2026-27. Intent: "class 10 AI project ideas", "AI project for class 10
// SDG", "sentiment analysis project class 10", "coral bleaching project", "easy AI
// project class 10".
// Distinct from cbse-class-10-ai-project-and-practical-file (owns how a project is
// documented through the six stages, the month plan and the common mistakes; its
// examples are waste sorting, rainfall and crops, and park-review sentiment, none
// of which is reused here): this page is the idea bank. Fifteen original ideas,
// five easy, five medium, five stretch, each tied to one Sustainable Development
// Goal, one AI domain (Statistical Data, Computer Vision or NLP) and a one-line
// walk through the project cycle (scope, data, explore, model, evaluate). Then a
// chooser, one filled 4Ws canvas, the ideas to avoid and how projects are guided.
// SDG numbers and names are the UN's 17 goals. Part C marks (project 10, project
// viva 5) are from the 417 curriculum 2026-27 via the series design doc. CBSE's
// sample project (penguin species prediction) is mentioned only as a pointer.
// Numerics recomputed with python3 on 2026-11-06 (scratch writers/cbse-class-10-
// ai-viva-questions/ideas.py): sentiment check 41 / 50 = 0.82; coral test set of
// 60 bleached and 60 healthy, TP 51, FN 9, FP 6, TN 54: accuracy 105 / 120 =
// 0.875, precision 51 / 57 = 0.89, recall 51 / 60 = 0.85.
// Dataset availability is described generically ("open datasets on data-sharing
// sites"); no specific dataset size or licence is claimed.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-project-ideas',
  code: 'cb27',
  board: 'cbse',
  themeColor: '#3D5A3A',
  dateModified: '2026-11-06',
  title: 'Class 10 AI Project Ideas 2026-27: 15 SDG Projects (417)',
  description: 'Class 10 AI project ideas for CBSE 417, 2026-27: 15 SDG-linked projects graded easy to stretch, each mapped to an AI domain and the project cycle.',
  ogTitle: 'Class 10 AI Project Ideas: 15 SDG Projects, Easy to Stretch',
  ogDesc: 'Fifteen original CBSE Class 10 AI (417) project ideas, each linked to a Sustainable Development Goal and one AI domain, with the data, model and metric for every stage of the project cycle: from an easy sentiment analysis project to coral bleaching detection.',
  twDesc: '15 original 417 project ideas, each with its SDG, AI domain, data, model and metric, graded easy, medium and stretch.',
  headline: 'Class 10 AI Project Ideas for 2026-27: 15 SDG-Linked Projects Graded by Difficulty, Each Mapped to an AI Domain',
  courseName: 'CBSE Class 10 AI (417) Project Guidance, Live Online',
  courseDesc: 'Live online guidance for the CBSE Class 10 Artificial Intelligence (417) project, session 2026-27: choosing an idea linked to a Sustainable Development Goal, finding or collecting data, building the model in Orange or Python, evaluating it honestly and rehearsing the project viva, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; project ideas',
  navLinks: [['#choose', 'What makes a good idea'], ['#easy', '15 ideas'], ['#pick', 'Which one for you'], ['#avoid', 'Ideas to avoid'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Project ideas']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Project ideas 2026-27',
  h1: 'Class 10 AI project ideas that are small enough to finish and real enough to defend.',
  lede: 'These class 10 AI project ideas are for the 10-mark project in CBSE 417 Part C and the 5-mark viva that follows it. There are fifteen, graded easy, medium and stretch. Each is tied to one Sustainable Development Goal and one AI domain, Statistical Data, Computer Vision or NLP, and each comes with its data, model and metric for every stage of the project cycle. In our live batch, students pick one in the first term and build it with a teacher checking each stage.',
  heroNote: 'Live online &middot; 15 original project ideas below &middot; each with its SDG and AI domain &middot; built in Orange or Python &middot; project viva rehearsed &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help choosing and building a CBSE Class 10 AI 417 project.',
  timetable: {
    label: 'When projects are guided',
    title: 'Project guidance',
    right: 'CBSE 417',
    rows: [
      ['Monday, concepts behind the model', '9:00', 'PM IST'],
      ['Wednesday, build and review', '9:00', 'PM IST'],
      ['Project ideas on this page', '15', 'with SDGs'],
      ['Project plus project viva', '15', 'marks']
    ],
    zones: 'Local start of the 9:00 PM IST class: <b>Dubai and Muscat</b> 7:30 PM, <b>Riyadh, Doha and Kuwait City</b> 6:30 PM, <b>Kathmandu</b> 9:15 PM. In Singapore and Kuala Lumpur it lands near midnight, so families there book one to one.',
    stamps: ['One SDG each', 'Three AI domains']
  },
  picksH2: 'Courses that help a project get built',
  picksLede: 'The 417 course whose batch guides the project from idea to viva, the Orange course for building the model without code, and the data science course for students who want their project in Python.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'The full 417 course, with the project chosen in the first term and each stage reviewed in the Wednesday lab.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Easy and medium / Orange', h3: 'Visual ML with Orange', p: 'Image, text and table workflows in Orange, the no-code route that most of the ideas below can be built in.' },
    { slug: 'data-science-course-for-teens-python-data', code: 'Stretch / Python', h3: 'Data Science for Teens', p: 'Pandas, charts and simple models in Python, for students taking one of the stretch ideas in code.' }
  ],
  capsule: 'Good class 10 AI project ideas for CBSE 417 are small, linked to one Sustainable Development Goal and built in one AI domain: Statistical Data, Computer Vision or NLP. Easy options include a leaf disease checker, a fruit ripeness sorter or a sentiment analysis project on clinic reviews; harder ones include coral bleaching detection or a complaint classifier. Each should follow the AI project cycle and report real evaluation numbers. The project carries 10 marks and its viva 5. Modern Age Coders guides projects from idea to viva in a live Monday and Wednesday 9:00 PM IST batch, or one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="choose">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. What makes a good project?</p>
      <h2>What makes a good AI project for class 10 SDG work</h2>
      <p class="bx-lede">A good Class 10 AI project answers one clear question about one real problem, uses data you can get, and ends with numbers you can explain. CBSE asks that it relate to the Sustainable Development Goals, and its own sample, penguin species prediction, shows how small the scale can be.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Grade on this page</th><th scope="col">Data</th><th scope="col">Tool</th><th scope="col">Typical build time</th></tr></thead>
        <tbody>
          <tr><td>Easy</td><td>A ready open dataset, or a few dozen photos you take</td><td>Orange, no code</td><td>Three to four weekends</td></tr>
          <tr><td>Medium</td><td>An open dataset that needs cleaning, or a survey you run</td><td>Orange, or short Python</td><td>Five to six weekends</td></tr>
          <tr><td>Stretch</td><td>Data you collect and label yourself</td><td>Python, comparing two models</td><td>Eight weekends or more</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Statistical Data</h3><p>Rows and columns of numbers or categories: readings, surveys, records. The model predicts a label or a value from the columns.</p></div>
      <div class="bx-card"><h3>Computer Vision</h3><p>Images sorted into labelled folders. The model learns to tell the classes apart from pixel patterns.</p></div>
      <div class="bx-card"><h3>Natural Language Processing</h3><p>Short texts such as reviews, headlines or messages. The model scores or sorts them by their words.</p></div>
    </div>
    <p class="bx-mt-40">Build times are from our batch's experience, not a CBSE rule. Easy does not mean fewer marks: a finished, honest easy project beats an abandoned ambitious one.</p>
  </div>
</section>`,

`<section class="bx-section" id="easy">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Fifteen ideas, easy to stretch</p>
      <h2>Easy AI project class 10 ideas, then medium and stretch</h2>
      <p class="bx-lede">Each idea lists its goal, domain and a one-line run through the cycle: scope, data, explore, model, evaluate. All fifteen are written for this page; adapt them to your town and your data.</p>
    </div>
    <h3>Easy: build in Orange with data you can get this week</h3>
    <ol class="bx-qlist">
      <li><b>Leaf health checker.</b> SDG 2, Zero Hunger &middot; Computer Vision.<br>Scope: small farmers notice leaf disease late. Data: your own photos of healthy and spotted leaves from one crop. Explore: view samples in Image Viewer. Model: Image Embedding with Logistic Regression. Evaluate: recall on diseased leaves, since a missed one spreads.</li>
      <li><b>Fruit ripeness sorter.</b> SDG 12, Responsible Consumption &middot; Computer Vision.<br>Scope: shops throw away fruit that ripened unnoticed. Data: photos of bananas at three stages, taken over a week. Explore: are lighting and background consistent? Model: an image classifier in Orange. Evaluate: confusion matrix; which stages get mixed up.</li>
      <li><b>Sentiment analysis of clinic reviews.</b> SDG 3, Good Health &middot; NLP.<br>Scope: what patients praise or complain about at local clinics. Data: public reviews, with names removed. Explore: Word Cloud after preprocessing. Model: Orange's Sentiment Analysis widget. Evaluate: label 50 reviews yourself and count agreement; 41 of 50 would be 0.82.</li>
      <li><b>Air quality band predictor.</b> SDG 11, Sustainable Cities &middot; Statistical Data.<br>Scope: residents cannot read raw pollutant numbers. Data: an open city air-quality dataset. Explore: distributions of PM2.5 by band. Model: a classifier predicting the band from readings. Evaluate: accuracy, then which neighbouring bands it confuses.</li>
      <li><b>Sleep and screen-time survey.</b> SDG 3, Good Health &middot; Statistical Data.<br>Scope: do students who use screens late feel less rested? Data: an anonymous survey of classmates, with consent. Explore: a scatter plot of screen time against sleep hours. Model: a classifier for "rested" or "not rested". Evaluate: accuracy, and an honest note on the small sample.</li>
    </ol>
    <h3 class="bx-mt-40">Medium: more cleaning, a harder question or some Python</h3>
    <ol class="bx-qlist" start="6">
      <li><b>Coral bleaching detection.</b> SDG 14, Life Below Water &middot; Computer Vision.<br>Scope: reef surveys need to flag bleached coral quickly. Data: open image sets of healthy and bleached coral on data-sharing sites. Explore: check the two classes are balanced. Model: Image Embedding with a classifier. Evaluate: recall on bleached coral (worked below).</li>
      <li><b>Misleading headline flagger.</b> SDG 16, Peace and Justice &middot; NLP.<br>Scope: false headlines spread faster than corrections. Data: an open labelled headline dataset. Explore: frequent words in each class. Model: Bag of Words with a classifier. Evaluate: precision, because calling a true story false does harm.</li>
      <li><b>Hand sign alphabet reader.</b> SDG 10, Reduced Inequalities &middot; Computer Vision.<br>Scope: few people can read sign language. Data: your own photos of five letter signs from several hands. Explore: are signs from different hands alike? Model: an image classifier. Evaluate: per-letter accuracy, and which letters look alike.</li>
      <li><b>Forest fire risk from weather.</b> SDG 15, Life on Land &middot; Statistical Data.<br>Scope: forest staff need warning of high-risk days. Data: an open dataset of weather readings with fire or no-fire labels. Explore: temperature and humidity on fire days. Model: a decision tree. Evaluate: recall on fire days.</li>
      <li><b>Household electricity use.</b> SDG 7, Clean Energy &middot; Statistical Data.<br>Scope: families do not know which habits raise their bills. Data: a survey of appliances and monthly units from twenty or more homes. Explore: units against AC hours. Model: classify "high" or "normal" use. Evaluate: accuracy, with the limits of a small sample.</li>
    </ol>
    <h3 class="bx-mt-40">Stretch: your own labelled data, two models compared</h3>
    <ol class="bx-qlist" start="11">
      <li><b>Civic complaint sorter.</b> SDG 11, Sustainable Cities &middot; NLP.<br>Scope: complaints reach the wrong department. Data: 150 or more short complaints you write or collect and label as water, roads or power. Explore: top words per label. Model: Bag of Words, two classifiers compared. Evaluate: confusion matrix across three classes.</li>
      <li><b>Pothole spotter.</b> SDG 9, Infrastructure &middot; Computer Vision.<br>Scope: potholes are reported late. Data: your own road photos, labelled pothole or clear, taken safely from footpaths. Explore: variety of light and surface. Model: two classifiers compared. Evaluate: recall on potholes, then false alarms.</li>
      <li><b>Camera-trap filter.</b> SDG 15, Life on Land &middot; Computer Vision.<br>Scope: volunteers sift thousands of empty trap frames. Data: open camera-trap images labelled animal or empty. Explore: night versus day frames. Model: image classifier in Python or Orange. Evaluate: recall on animal frames, so none are discarded.</li>
      <li><b>Solar output estimator.</b> SDG 7, Clean Energy &middot; Statistical Data.<br>Scope: rooftop owners want to know what a cloudy week costs them in power. Data: open solar generation and weather records. Explore: output against cloud cover. Model: regression in Python or Orange. Evaluate: average error in units, compared with a simple guess.</li>
      <li><b>Mixed-language climate opinions.</b> SDG 13, Climate Action &middot; NLP.<br>Scope: many posts mix Hindi and English, which English sentiment tools misread. Data: 200 or more posts you label positive, negative or neutral. Explore: words the English tool gets wrong. Model: your own Bag of Words classifier against the ready widget. Evaluate: which wins, and on what.</li>
    </ol>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="pick">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Which idea fits you?</p>
      <h2>Choosing your idea, and a coral bleaching project worked through</h2>
      <p class="bx-lede">Pick the idea whose data you can actually get and whose question you care about; that interest is what carries you through the viva.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">If you are</th><th scope="col">Start with</th><th scope="col">Why</th></tr></thead>
        <tbody>
          <tr><td>New to Python and short of time</td><td>Ideas 1, 2 or 3</td><td>All Orange, data ready in days</td></tr>
          <tr><td>Comfortable with tables and charts</td><td>Ideas 4, 9 or 10</td><td>Statistical Data suits the Unit 4 practical too</td></tr>
          <tr><td>Interested in images</td><td>Ideas 6, 8 or 12</td><td>Strong viva talking points on pixels and recall</td></tr>
          <tr><td>Interested in language</td><td>Ideas 3, 7 or 11</td><td>Directly uses the Unit 6 theory</td></tr>
          <tr><td>Confident in Python, aiming high</td><td>Ideas 13, 14 or 15</td><td>Own data and model comparison show depth</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Idea 6: the 4Ws canvas, filled</h3>
        <ul class="bx-check">
          <li><b>Who:</b> reef survey teams and the fishing communities that depend on reefs.</li>
          <li><b>What:</b> bleached coral is spotted late, after many survey photos pile up unchecked.</li>
          <li><b>Where:</b> in survey photos from shallow tropical reefs.</li>
          <li><b>Why:</b> earlier flags let protection efforts start sooner, serving SDG 14.</li>
        </ul>
      </div>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Evaluating idea 6</b><span>bleached = positive</span></figcaption>
  <pre>Test set: 60 bleached, 60 healthy images.

              Actual: bleached  Actual: healthy
Pred bleached     TP = 51          FP = 6
Pred healthy      FN = 9           TN = 54

Accuracy  = 105 / 120 = 0.875
Precision = 51 / 57   = 0.89
Recall    = 51 / 60   = 0.85</pre>
  <p class="bx-code-note">An illustrative result, not a real model's. The sentence that earns viva marks: "Nine bleached corals were missed, so recall matters most; I would add more bleached images."</p>
</figure>
    </div>
    <p class="bx-mt-40">How to write each stage up in the report is on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the project and practical file page</a>, and the metrics above are drilled on <a class="bx-link" href="/cbse-class-10-ai-evaluating-models-questions">evaluating models questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="avoid">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Which ideas cause trouble?</p>
      <h2>Project ideas to avoid, and the safer version of each</h2>
      <p class="bx-lede">Some ideas look exciting but fail on data, ethics or time. Each has a smaller cousin that works.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Risky idea</th><th scope="col">The problem</th><th scope="col">Safer version</th></tr></thead>
        <tbody>
          <tr><td>Face recognition attendance for your class</td><td>Faces of minors collected without proper consent raise privacy issues</td><td>Hand sign reader (idea 8) on your own hands</td></tr>
          <tr><td>An app that diagnoses a disease</td><td>Claims a medical result a student project cannot support</td><td>Leaf health checker (idea 1), or clinic review sentiment (idea 3)</td></tr>
          <tr><td>Predicting the share market</td><td>No clear SDG, and no way to judge success in a term</td><td>Household electricity use (idea 10)</td></tr>
          <tr><td>A chatbot that answers everything</td><td>Too broad to build or evaluate</td><td>Civic complaint sorter (idea 11), one task done well</td></tr>
          <tr><td>Any idea with no data source</td><td>Stalls at data acquisition</td><td>Pick an idea whose data you can see before you commit</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">Ethics is part of the project viva, so mention consent, privacy and possible bias in your report. The vocabulary is revised on <a class="bx-link" href="/cbse-class-10-ai-project-cycle-and-ethics">project cycle and ethics</a>, and the questions you will be asked about your project are on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How is a project guided online?</p>
      <h2>How the live batch takes a project from idea to viva</h2>
      <p class="bx-lede">The teacher never builds the project. The student does, with checkpoints that stop small problems becoming late ones.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Idea and data check</h3><p>Each student shortlists two ideas from a list like this one, then shows the class the data for each. The idea with data in hand wins.</p></div>
      <div class="bx-card"><h3>Stage reviews on screen</h3><p>One Wednesday a month, students share their Orange canvas or notebook, and the teacher asks what each step does and why.</p></div>
      <div class="bx-card"><h3>Evaluation before polish</h3><p>Numbers come before the report: the teacher checks the test split and confusion matrix, then the student writes up what the model gets wrong.</p></div>
    </div>
    <p class="bx-mt-40">If your school asks for a Python project, the libraries are covered on <a class="bx-link" href="/python-for-cbse-class-10-ai">Python for CBSE Class 10 AI</a>; for the Orange route, see <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Build your project in the Monday and Wednesday batch, or one to one',
  chooseLede: 'Both formats follow the same checkpoints with the same teachers. The batch shows students fifteen other projects taking shape, which sharpens their own. One to one gives a project the full hour every time. You pay month by month with no admission fee, and can stop whenever a month ends.',
  chooseBatch: [
    'Live on video every Monday and Wednesday from 9:00 PM IST',
    'A class of fifteen to twenty, all building their own project',
    'Idea and data chosen in the first term',
    'A monthly stage review on the shared screen',
    'Project viva rehearsed before the school date'
  ],
  choosePersonal: [
    'Sessions booked at hours that suit your family',
    'Every session spent on your child\'s own project',
    'Help with data collection plans and consent forms',
    'Python or Orange, whichever the school prefers',
    'The teachers who run the 417 batch'
  ],
  chooseAfter: 'Students starting late, or taking a stretch idea in Python, often move faster one to one. Students still learning the units the project depends on are better placed in the batch, where theory and project move forward side by side. The fee appears in your local currency.',
  zonesH2: 'Class 10 AI project help for CBSE schools in the Gulf and abroad',
  zonesLede: 'CBSE schools abroad set the same Part C project, and local problems make strong SDG links: water in the Gulf, reefs off Oman and the UAE. The batch table below gives its local start for this exam winter.',
  zonesAfter: 'When the batch clashes with your evening, project sessions can be booked one to one at your hour. Families outside India will find timings and formats on <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">our page for Gulf and overseas CBSE students</a>.',
  faqLabel: 'Questions about Class 10 AI projects',
  faqH2: 'Class 10 AI project ideas: questions families ask us',
  faqs: [
    ['What are some easy AI project ideas for class 10?', 'A leaf health checker from photos, a fruit ripeness sorter, a sentiment analysis of clinic reviews, an air quality band predictor or a survey on sleep and screen time. Each can be built in Orange without code, uses data you can get within a week and links to one Sustainable Development Goal.'],
    ['Does the class 10 AI project have to be linked to an SDG?', 'CBSE asks that the Class 10 AI project relate to the Sustainable Development Goals. Name the goal in your problem scoping, explain who benefits, and keep the link specific: for example SDG 14, Life Below Water, for a coral bleaching project, rather than a general claim about helping the planet.'],
    ['How do I do a sentiment analysis project in class 10?', 'Collect short texts such as public reviews, remove names, and load them into Orange with the Corpus widget. Clean them with Preprocess Text, score them with Sentiment Analysis and view the results in a Data Table. To evaluate, label about fifty texts yourself and count how often the tool agrees with you.'],
    ['Is coral bleaching a good class 10 AI project?', 'Yes, as a medium-level Computer Vision project for SDG 14. Use an open image set of healthy and bleached coral, build an image classifier in Orange with Image Embedding, and report recall on bleached coral, since a missed bleached reef is the costly error. Check that both classes have similar numbers of images.'],
    ['What is the class 10 AI project worth in marks?', 'The project carries 10 marks and the viva on it carries 5, out of the 50 practical marks in Part C of CBSE 417. CBSE allows a project, a field visit or a student portfolio for those 10 marks; your school tells you which it expects.'],
    ['Can I make the class 10 AI project without coding?', 'Yes. Orange, which is part of the 417 curriculum, lets you build image, text and table models by connecting widgets. Every idea on this page can be built in Orange, including the stretch ones, though students confident in Python often find comparing models quicker in code.'],
    ['Which AI domain should my project use?', 'One of the three in the curriculum: Statistical Data for tables of numbers, Computer Vision for images, or Natural Language Processing for text. Pick the domain whose data you can most easily get, and keep to one domain so the project stays finishable.'],
    ['Can I use a dataset from the internet for my AI project?', 'Yes, open datasets are fine if you name the source in your report and can explain what each column or folder means. Data you collect yourself, with consent where people are involved, is often easier to defend in the viva because you know exactly how it was made.'],
    ['How long does a class 10 AI project take?', 'An easy Orange project takes about three to four weekends of steady work; a stretch project with your own labelled data can take eight or more. Start in the first term, so the project is finished well before the school practical and the theory paper.'],
    ['Do you help students with their AI project?', 'Yes. The project is guided inside the batch and one to one sessions: choosing an idea, checking the data, reviewing each stage and rehearsing the viva. The student builds the project themselves. There is no separate project charge: it sits inside the monthly fee on this page, the first class is a free demo and nobody pays an admission fee.']
  ],
  startH2: 'Shortlist a project idea in a free class',
  startHtml: `        <p>During the free demo, your child talks through two or three ideas from this page with a teacher, checks which one has data they can actually get, and sketches its 4Ws canvas. You leave with a clear first step, and the mentor tells you whether the batch or one to one would suit the project better.</p>
        <p>Revising the theory your project leans on? The units are summarised on <a class="bx-link" href="/cbse-class-10-ai-notes">Class 10 AI notes, unit wise</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 AI project ideas'
};
