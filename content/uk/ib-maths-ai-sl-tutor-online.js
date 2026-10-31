'use strict';
// IB Maths AI SL tutor online (ag- exam door, IB DP Mathematics: applications and interpretation; row UK064).
// ibo.org returns HTTP 403 to curl (earlier writers; uk-map.tsv): not retried. A school-hosted guide copy found by
// search (content.schoolinsites.com) returned 502 then 400: one retry only, then dropped. Read raw on 31 October
// 2026 (copies under keyword-research-2026-09/uk-us-gap/src/ib-maths-ai-sl-tutor-online/):
//  - International Baccalaureate, "Diploma Programme Subject Brief, Mathematics: applications and interpretation,
//    First assessments for SL and HL" 2021, "(c) International Baccalaureate Organization 2019": an unaltered
//    two-page IB PDF hosted on a University of Tartu server (ms-ut.pdf). Verbatim: "there are two different DP
//    subjects in mathematics, Mathematics: analysis and approaches and Mathematics: applications and
//    interpretation"; "Both courses are offered at SL and HL."; AI "recognizes the increasing role that
//    mathematics and technology play in a diverse range of fields in a data-rich world"; "it emphasizes the
//    meaning of mathematics in context"; includes "calculus and statistics"; "Students should expect to develop
//    strong technology skills"; "The IB recommends 240 teaching hours for HL subjects and 150 hours for SL.";
//    "share 60 hours of common content"; recommended hours SL/HL: number and algebra 16/29, functions 31/42,
//    geometry and trigonometry 18/46, statistics and probability 36/52, calculus 19/41, inquiry, modelling and
//    the exploration 30/30, total 150/240 (columns read so that each total matches the brief's own total);
//    assessment at a glance: Paper 1 "Technology allowed." "Compulsory short-response questions", SL 1.5 hours
//    40%, HL 2 hours 30%; Paper 2 "Compulsory extended-response questions", SL 1.5 hours 40%, HL 2 hours 30%;
//    Paper 3 (HL only) "Two compulsory extended-response problem-solving questions", 1 hour, 20%; Exploration
//    internal, 15 hours, 20% at SL and HL; six assessment objectives "common to" both subjects (knowledge and
//    understanding, problem solving, communication and interpretation, technology, reasoning, inquiry
//    approaches); "The exploration is an integral part of the course and its assessment, and is compulsory for
//    both SL and HL students."
//  - IB, Mathematics: analysis and approaches guide, "Published February 2019", partial public copy (readkong.com,
//    first chapters only; same copy as ib-maths-ia-guidance): AI "is for students who are interested in
//    developing their mathematics for describing our world and solving practical problems"; "harnessing the
//    power of technology alongside exploring mathematical models"; AI HL students "will have good algebraic
//    skills and experience of solving real-world problems"; "Each topic begins with SL content which is common to
//    both Mathematics: analysis and approaches and to Mathematics: applications and interpretation."
// NOT verified (ibo.org blocked): the detailed AI syllabus by sub-topic, the IA criteria and marks, exam session
// dates, any later revision of the course. The page names only the five topic areas from the brief.
// Our own, labelled: the cooling-cup modelling example, practice set, SL and HL choice table, plan. Spine: in AI
// every external paper allows technology and statistics carries the most SL teaching hours, so the skill to teach
// is choosing and judging a model, not only computing it. Lesson family: comparing a linear and an exponential
// model on our own data and interpreting the result. We never work on a student's exploration.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'IB MATHS AI SL', label: 'IB Maths AI SL tutor online', blurb: 'Applications and interpretation: technology on every paper, statistics the largest SL topic. Choosing and judging a model, taught.' },
  slug: 'ib-maths-ai-sl-tutor-online',
  code: 'ias',
  accent: '#006036',
  accentRationale: 'IB Maths AI: a deep data green (#006036), 7.55:1 on #FBF8F2 and 6.51:1 on the deepest paper tint, greener and darker than the teal IA page so the two IB maths pages read as siblings, not twins',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IB Maths AI SL tutor online',
  title: 'IB Maths AI SL Tutor Online | Applications and Interpretation',
  description: 'IB Maths AI SL tutor online: the applications and interpretation syllabus by hours, papers and weightings at SL and HL, the exploration, and modelling, taught live.',
  ogDescription: 'IB Mathematics: applications and interpretation, from the IB\'s own subject brief: five topics, two papers at SL, technology allowed throughout.',
  twitterDescription: 'IB Maths AI SL and HL: 150 or 240 hours, statistics the biggest SL topic, Paper 3 at HL only, a 20% exploration. And how to judge a model.',
  pageName: 'IB Maths AI SL Tutor Online',
  webPageDescription: 'A guide for IB Diploma students and families on Mathematics: applications and interpretation at SL and HL, built from the IB subject brief, with live online teaching in groups or one to one.',
  courseDescription: 'Live online teaching of IB Diploma Mathematics: applications and interpretation at SL and HL, covering number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus, with technology used as the course expects.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IB Maths AI SL',
  navLinks: [
    { href: '#syllabus', label: 'Syllabus' },
    { href: '#papers', label: 'Papers' },
    { href: '#choose', label: 'AI or AA' },
    { href: '#model', label: 'Modelling' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'IB Diploma &middot; Applications and interpretation &middot; SL and HL',
  h1: 'IB Maths AI SL tutor online',
  lede: 'IB Mathematics: applications and interpretation, usually shortened to AI, is one of the two maths subjects in the IB Diploma Programme, offered at standard level (SL) and higher level (HL). The IB describes it as a course that "emphasizes the meaning of mathematics in context", with technology allowed on every written paper. At SL it is 150 recommended teaching hours, two papers and an individual exploration. Modern Age Coders teaches both levels in live online lessons, either as a class or privately, in our IB maths AA and AI course. This page sets out the syllabus by hours, the papers and weightings, how AI differs from analysis and approaches, and the modelling judgement the course keeps asking for.',
  secondaryCta: { href: '#papers', label: 'The papers and weightings' },
  wa: 'Hello Modern Age Coders, I would like a free IB Maths AI lesson.',
  heroNote: 'From the IB\'s Mathematics: applications and interpretation subject brief (first assessments 2021), read 31 October 2026 &middot; Not connected with the IB',
  spec: [
    ['Subject', 'Mathematics: applications and interpretation'],
    ['Levels', 'SL and HL'],
    ['Teaching hours', '150 SL, 240 HL'],
    ['Shared with AA', '60 hours of common content'],
    ['Largest SL topic', 'Statistics and probability, 36 hours'],
    ['SL papers', 'Two, 1.5 hours each, 40% each'],
    ['Exploration', '20% at SL and HL'],
    ['We teach', 'Live online, group or 1-on-1']
  ],
  capsuleQ: 'What is IB Maths AI SL?',
  capsule: 'IB Maths AI SL is Mathematics: applications and interpretation at standard level, one of two maths subjects in the International Baccalaureate Diploma Programme. The IB\'s subject brief gives it 150 recommended teaching hours across number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus, plus 30 hours for modelling and the exploration. SL students sit two papers of 1.5 hours, each worth 40 per cent, with technology allowed, and complete an exploration worth 20 per cent. HL adds hours, longer papers and a Paper 3. Our IB Maths AA and AI course covers AI at both levels in live online classes or private lessons.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an IB Maths AI student',
    lede: 'The IB course itself comes first. The statistics course goes deeper into the largest SL topic; the data course suits a student who wants the technology side in real code. Each card opens a syllabus.',
    items: [
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'IBAI / 01', title: 'IB Maths AA and AI, SL and HL', note: 'The full AI syllabus at either level, taught with the calculator and software the course assumes.' },
      { course: 'statistics-probability-maths-course', code: 'IBAI / 02', title: 'Statistics and probability in depth', note: 'Distributions, correlation, regression and hypothesis testing, for the topic with the most SL hours.' },
      { course: 'data-science-course-for-teens-python-data', code: 'IBAI / 03', title: 'Data science for teens', note: 'Python for real data sets, for an AI student who wants to model beyond the calculator.' }
    ]
  },

  sections: [
    {
      id: 'syllabus', tint: 'tint', eyebrow: 'The syllabus',
      h2: 'What is in the IB Maths AI SL syllabus?',
      lede: 'Five topic areas and a block of time for inquiry, modelling and the exploration. The IB\'s subject brief gives the recommended teaching hours for each at SL and HL.',
      body: [
        { kind: 'table', caption: 'Mathematics: applications and interpretation, recommended teaching hours (IB subject brief, first assessments 2021)', head: ['Syllabus component', 'SL hours', 'HL hours'], rows: [
          ['Number and algebra', '16', '29'],
          ['Functions', '31', '42'],
          ['Geometry and trigonometry', '18', '46'],
          ['Statistics and probability', '36', '52'],
          ['Calculus', '19', '41'],
          ['Investigational, problem-solving and modelling skills, and the exploration', '30', '30'],
          ['Total teaching hours (as the brief prints them)', '150', '240']
        ] },
        { kind: 'source', html: 'Source: International Baccalaureate, <a class="ag-inline-link" href="https://www-1.ms.ut.ee/too-ja-praktika/files/MHG-IB.pdf" rel="noopener" target="_blank">DP Subject Brief, Mathematics: applications and interpretation</a> (an unaltered IB document hosted on a university server; ibo.org refused our requests). The sub-topics inside each area are in the full IB guide your school holds. Modern Age Coders is not affiliated with the IB.' },
        { kind: 'two', mt: true,
          leftH3: 'Where the hours go at SL',
          left: [
            'Statistics and probability has the largest share of SL hours, 36, and functions is next at 31. Between them they take more than half of the topic time, so a student weak in either will feel it across the course.',
            'Number and algebra has the fewest SL hours, 16. That is not because algebra does not matter; it is used everywhere else, particularly in functions and calculus.'
          ],
          rightH3: 'Common ground with AA',
          right: [
            'The brief says the two maths subjects "share 60 hours of common content". The AA guide adds that each topic "begins with SL content which is common to both" courses, which is why the first months of AI and AA can look similar in class.',
            'For a student who might switch subjects early in year one, that overlap is useful. After it, the two courses diverge in emphasis and in how technology is used; the brief is blunt about AI: "Students should expect to develop strong technology skills".'
          ] }
      ]
    },
    {
      id: 'papers', tint: 'deep', eyebrow: 'Assessment',
      h2: 'How is IB Maths AI assessed at SL and HL?',
      lede: 'At SL, two written papers and an internal exploration. At HL, the same two papers made longer, plus a third paper. Technology is allowed on every paper.',
      body: [
        { kind: 'table', caption: 'Assessment at a glance, IB subject brief for Mathematics: applications and interpretation', head: ['Component', 'Format', 'SL time', 'SL weight', 'HL time', 'HL weight'], rows: [
          ['Paper 1 (external)', 'Technology allowed; compulsory short-response questions on the syllabus', '1.5 hours', '40%', '2 hours', '30%'],
          ['Paper 2 (external)', 'Technology allowed; compulsory extended-response questions on the syllabus', '1.5 hours', '40%', '2 hours', '30%'],
          ['Paper 3 (external, HL only)', 'Technology allowed. Two compulsory extended-response problem-solving questions', '', '', '1 hour', '20%'],
          ['Exploration (internal)', 'An individual exploration of an area of mathematics', '15 hours', '20%', '15 hours', '20%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What "technology allowed" changes',
          left: [
            'When a calculator does the arithmetic, marks move to setting the problem up, choosing the right tool, and saying what the output means. The brief lists technology as one of six assessment objectives: using it "accurately, appropriately and efficiently both to explore new ideas and to solve problems."',
            'A student who can drive a graphic display calculator but cannot explain what a correlation coefficient says about the data is only halfway there.'
          ],
          rightH3: 'The six assessment objectives',
          right: [
            'The brief says the objectives are common to both maths subjects: knowledge and understanding; problem solving; communication and interpretation; technology; reasoning; and inquiry approaches.',
            'Communication and interpretation is the one AI students most often under-practise. It asks students to "transform common realistic contexts into mathematics" and to "comment on the context", which is exactly the habit we teach below.'
          ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'The exploration', p: 'The brief calls it "an integral part of the course and its assessment", compulsory at SL and HL, written "without the time limitations" of an exam.' },
          { h3: 'Our line on it', p: 'We teach the mathematics a student might use and how mathematical writing works. We do not read, plan, write or edit any part of an exploration.' },
          { h3: 'Further detail', p: 'Exam dates, criteria and markbands sit in IB documents we could not read. Your school\'s DP coordinator has the current ones.' }
        ] },
        { kind: 'p', mt: true, html: 'For both IB maths subjects side by side, see our <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition</a> page.' }
      ]
    },
    {
      id: 'choose', tint: '', eyebrow: 'AI or AA, SL or HL',
      h2: 'Should I take IB Maths AI or AA, and SL or HL?',
      lede: 'The IB\'s own descriptions are the best starting point. AI is "for students who are interested in developing their mathematics for describing our world and solving practical problems"; AA students "enjoy the thrill of mathematical problem solving and generalization."',
      body: [
        { kind: 'table', caption: 'What the IB says about each choice (AA guide and AI subject brief)', head: ['Choice', 'In the IB\'s words'], rows: [
          ['AI', 'Students "interested in harnessing the power of technology alongside exploring mathematical models"'],
          ['AI SL or HL', 'Students "should enjoy seeing mathematics used in real-world contexts and to solve real-world problems"'],
          ['AI HL', 'Students "will have good algebraic skills and experience of solving real-world problems"'],
          ['AA', 'Students who "enjoy the thrill of mathematical problem solving and generalization"'],
          ['Either, at HL', '240 teaching hours rather than 150, and at AI HL a third paper worth 20 per cent']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions we ask a student (ours)',
          left: [
            'Do you enjoy finding out what data says more than proving why a formula works? Do you want maths as a tool for another subject, such as a science, psychology or geography? Are you comfortable with a calculator as part of the method, not a check at the end?',
            'Three yeses usually point to AI. A student who loves algebra for its own sake, or whose university course asks for a particular subject or level, should check that requirement before choosing.'
          ],
          rightH3: 'What we will not do',
          right: [
            'We do not tell students which subject universities prefer, because requirements are set by each university and course and change. The student should read the admissions pages for the courses they are considering.',
            'Nor do we predict grades. Choosing a level is a decision for the student, the family and the school, made with the school\'s knowledge of the student\'s work.'
          ] }
      ]
    },
    {
      id: 'model', tint: 'tint', eyebrow: 'Our lesson family',
      h2: 'How do you choose and judge a model in IB Maths AI?',
      lede: 'Fit more than one model, compare them against the data and the context, then say what each predicts and where it breaks. The data and questions below are ours, invented for teaching; they are not IB questions.',
      body: [
        { kind: 'table', caption: 'Our data: the temperature of a cup of tea above room temperature, every 5 minutes', head: ['Time (minutes)', 'Excess temperature (degrees C)'], rows: [
          ['0', '60'],
          ['5', '45'],
          ['10', '34'],
          ['15', '25'],
          ['20', '19'],
          ['25', '14']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Look before fitting.</b> The drops are 15, 11, 9, 6, 5: getting smaller. A straight line assumes equal drops, so a linear model is already suspect.',
          '<b>Try the linear model.</b> A calculator\'s least-squares line through this data falls by roughly 1.8 degrees a minute. Extended to 40 minutes it predicts a negative excess: the tea colder than the room, which is impossible for a cooling cup.',
          '<b>Try an exponential model.</b> Each 5-minute ratio is close to 0.75 (45/60 = 0.75, 34/45 = 0.76, 25/34 = 0.74). A model of the form T = 60 x 0.75 to the power t/5 fits every row to within about one degree.',
          '<b>Interpret the parameters.</b> 60 is the starting excess; 0.75 means the excess falls by about a quarter every 5 minutes, whatever its size. That matches the physical idea that hotter things lose heat faster.',
          '<b>Predict and judge.</b> At 40 minutes the exponential model gives 60 x 0.75 to the power 8, about 6 degrees above room temperature. It never reaches zero, which is reasonable here. Say also what the model ignores: a lid, stirring, a draught.'
        ] },
        { kind: 'p', mt: true, html: 'Our practice set. (1) For our tea data, use the exponential model to find when the excess first falls below 10 degrees; check with a table of values. (2) A plant\'s height in our invented data is 4, 7, 10, 13, 16 cm in weeks 0 to 4. Which model fits, and why might it fail by week 30? (3) Our invented phone survey gives a correlation coefficient of 0.92 between hours of revision and test mark. Write two sentences on what that does and does not show. Answers, ours: (1) between 30 and 35 minutes, since the model gives about 10.7 at 30 and about 8.0 at 35; (2) linear, adding 3 cm a week, but no plant grows without limit, so a model that levels off would be needed later; (3) a strong positive linear association in this sample, which does not show that revision causes the higher marks or that the pattern holds for other groups.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this lesson family',
          left: [
            'Functions and statistics hold the most SL hours, and modelling ties them together. The brief\'s objectives ask students to transform realistic contexts into mathematics and comment on the context; choosing between models is where both happen at once.',
            'It also uses technology the way the course intends: the calculator fits the curves, and the student decides which curve is believable.'
          ],
          rightH3: 'Mistakes we see most',
          right: [
            'Choosing a model by the highest r or R squared alone, without asking whether its predictions make sense. The linear tea model has a respectable fit over 25 minutes and is still wrong.',
            'Copying calculator output to many decimal places with no units and no sentence. In an AI paper, "about 6 degrees above room temperature after 40 minutes" is the answer; the number alone is half of it.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Two years',
    h2: 'A route through the two Diploma years',
    lede: 'The brief\'s 150 SL hours spread over two years. A typical plan front-loads functions and statistics and leaves time for revision before the papers.',
    table: { caption: 'Our two-year plan for an AI SL student (ours, not an IB scheme)', head: ['When', 'Focus (ours)', 'Secure when'], rows: [
      ['Year 1, first term', 'Number and algebra; the calculator as a tool', 'Equations and sequences solved by hand and by technology'],
      ['Year 1, second and third terms', 'Functions and statistics', 'Linear and exponential models fitted and interpreted in words'],
      ['Year 2, first term', 'Probability, geometry and trigonometry, calculus', 'Rates of change explained in context, not only computed'],
      ['Year 2, second term', 'Mixed short-response and extended-response practice', 'Every answer ends with a sentence about the context'],
      ['Before the exams', 'Timed papers of our own at the published lengths', 'Pacing holds across 1.5 hours with technology']
    ] },
    left: { h3: 'If AI HL is the plan', ps: [
      'HL adds 90 teaching hours, longer papers, and Paper 3: two extended-response problem-solving questions in an hour.',
      'We teach HL students the extra content and give them long, open problems to practise the Paper 3 style.'
    ] },
    right: { h3: 'Related IB pages', ps: [
      'For both maths subjects and the IA rules, see <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition</a>.',
      'For the Diploma computing course, see <a class="ag-inline-link" href="/ib-computer-science-online-tuition">IB computer science</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths, statistics and data courses for IB students',
    lede: 'By focus. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'IB maths', sub: 'Diploma years', courses: [
        { code: 'UK / IAS / 01', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA and AI', blurb: 'Both subjects, SL and HL, taught live.' },
        { code: 'UK / IAS / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The largest AI SL topic, in depth.' },
        { code: 'UK / IAS / 03', slug: 'ap-calculus-exam-prep', title: 'Calculus foundations', blurb: 'Rates of change for HL or a later switch.' }
      ] },
      { num: 'II', h3: 'Before the Diploma', sub: 'Ages 14 to 16', courses: [
        { code: 'UK / IAS / 04', slug: 'igcse-mathematics-mastery', title: 'Secondary maths, core and extended', blurb: 'Algebra and functions to start the DP strong.' },
        { code: 'UK / IAS / 05', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'For a student whose algebra wobbles.' }
      ] },
      { num: 'III', h3: 'Models in code', sub: 'Ages 13 and up', courses: [
        { code: 'UK / IAS / 06', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Fit and test models in Python.' },
        { code: 'UK / IAS / 07', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The programming behind data work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, with the calculator on screen',
    lede: TIMING + ' Our teachers are in India, where clocks do not change, so for UK students India time runs four and a half hours ahead in British summer time and five and a half in winter; students outside the UK see times in their local zone.',
    slots: [
      { time: 'After school', l: 'Evening hours for DP students in the UK.' },
      { time: 'Weekend morning', l: 'For students whose weekday evenings are full of CAS.' },
      { time: 'Before mocks', l: 'A block of timed practice on our own papers.' }
    ],
    cells: [
      { h3: 'Technology taught', p: 'Calculator and software methods shown live, then explained in words.' },
      { h3: 'Context every time', p: 'Each answer ends with what it means for the situation.' },
      { h3: 'Class size', p: 'Either a Diploma class of 15 to 20, or private lessons with your own teacher.' },
      { h3: 'Fresh questions', p: 'Practice is drafted by our teachers; no IB paper is copied.' },
      { h3: 'Exploration untouched', p: 'We teach maths and method, and never work on a student\'s exploration.' },
      { h3: 'No predicted grades', p: 'Grades are for the IB and predictions for the school.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Work from our classes, data models in code among it. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'In parents\' own words, from our Google profile.',

  fees: {
    h2: 'Fees for IB Maths AI lessons',
    lede: 'A single fee each month, charged in your region\'s billing currency, with no term paid in advance. Lesson one is on us.',
    free: ['A lesson on the topic your class is on now', 'A frank view of where marks are being lost', 'Only a phone number to book'],
    group: ['A Diploma class of 15 to 20', 'A single teacher through the Diploma', 'Written answers marked for interpretation', 'A certificate at the end'],
    one: ['One student, one teacher', 'Paced to your school\'s scheme of work', 'Good for HL students and switchers from AA']
  },

  faq: {
    eyebrow: 'IB Maths AI questions',
    h2: 'What students ask about IB Maths AI',
    items: [
      { q: 'What is the IB Maths AI SL syllabus?', a: 'The IB subject brief lists five areas: number and algebra, functions, geometry and trigonometry, statistics and probability, and calculus, with 30 hours for modelling skills and the exploration. Statistics and probability has the most SL hours, 36.' },
      { q: 'How many papers are there in IB Maths AI SL?', a: 'Two. The brief gives Paper 1, short-response questions, and Paper 2, extended-response questions, each 1.5 hours and 40 per cent at SL, with technology allowed on both.' },
      { q: 'What does AI HL add?', a: 'More teaching hours, 240 instead of 150, longer papers of 2 hours each, and Paper 3: two compulsory extended-response problem-solving questions in 1 hour, worth 20 per cent.' },
      { q: 'How much is the IB Maths AI exploration worth?', a: 'The brief gives the internal exploration 20 per cent at both SL and HL, with 15 recommended hours. It is compulsory for every student.' },
      { q: 'Can I use a calculator in IB Maths AI?', a: 'Yes. The IB subject brief marks every AI paper, at SL and HL, as technology allowed. Ask your school which calculator models it uses.' },
      { q: 'Is IB Maths AI SL easier than AA SL?', a: 'The IB presents them as different courses for different interests rather than easier and harder. AI suits students who enjoy maths in practical contexts with technology; AA suits students who enjoy problem solving and generalisation.' },
      { q: 'Where can I find IB Maths AI SL past papers?', a: 'Past papers are IB publications and we do not reproduce them. Your school will tell you which ones it uses and how to get them; our lessons use questions we write.' },
      { q: 'Will you help with my IB Maths AI exploration?', a: 'We teach the mathematics a student might use and how mathematical writing works, using other examples. We do not read, plan, write or edit any part of an exploration.' },
      { q: 'How much do AI and AA have in common?', a: 'The IB subject brief says the two maths subjects share 60 hours of common content. Each topic opens with SL material common to both courses.' },
      { q: 'What times can I book IB Maths AI lessons?', a: TIMING + ' UK students book in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for IB students',
    lede: 'Sister IB pages, the courses before the Diploma, and the UK index.',
    items: [
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition', p: 'Both IB maths subjects, side by side.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science', p: 'Programming and computational thinking in the DP.' },
      { href: '/ib-maths-tutor-uae', label: 'IB maths in the UAE', p: 'For Diploma students in the Gulf.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'The other sixth-form route.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'A common route into the Diploma.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub.' }
    ]
  },

  start: {
    h2: 'Book a free IB Maths AI lesson',
    lede: 'Tell us SL or HL, which year of the Diploma, and the topic your class is on. The first lesson will be on that topic, with technology on screen.',
    readFirst: 'Want to read first? Each <a class="ag-inline-link" href="/courses">course page</a> carries its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons.',
    note: 'Message us on WhatsApp for the fastest answer; it costs nothing on a UK contract. Our team answers from India, so the number starts +91.',
    formNote: 'No card, no contract. One reply with a time in your time zone.'
  },

  footer: {
    cols: [
      { h4: 'IB pages', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/ib-maths-tutor-uae', label: 'IB maths, UAE' },
        { href: '/a-level-maths-tuition-online', label: 'A level maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Fit two models, then say which one you believe and why'
  },

  personalityCss: `
.ag-root.ag-ias .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ias .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-ias .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ias .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ias .ag-table td:nth-child(2) { font-weight: 500; }
`,

  dossier: {
    curriculumAuthority: 'IB DP Subject Brief, Mathematics: applications and interpretation, first assessments 2021, (c) IBO 2019, unaltered copy on a university server (ibo.org returned 403): two DP maths subjects, both at SL and HL; AI description in the IB\'s words; 150 SL and 240 HL hours; 60 hours common with AA; topic hours SL/HL 16/29, 31/42, 18/46, 36/52, 19/41, 30/30; Paper 1 and Paper 2 technology allowed, SL 1.5 hours 40% each, HL 2 hours 30% each; Paper 3 HL 1 hour 20%; exploration 15 hours 20%, compulsory; six assessment objectives common to both subjects. IB AA guide (February 2019, partial copy): AI for describing our world and solving practical problems; harnessing technology; AI HL needs good algebraic skills; topics begin with common SL content.',
    localProject: 'Technology on every paper. The page explains AI SL and HL from the IB\'s own subject brief: the five topic areas with SL and HL hours, the 60 shared hours with AA, every paper\'s format, time and weighting, the compulsory 20 per cent exploration and the six assessment objectives, with the IB\'s own words for choosing AI or AA. It then teaches model choice and judgement, the habit AI\'s technology-allowed papers reward, through our own cooling-cup data set, a five-step comparison of linear and exponential models and a practice set, and states plainly that we never work on an exploration. Lesson family: choosing, interpreting and judging a model.',
    requiredMentions: ['share 60 hours of common content', 'emphasizes the meaning of mathematics in context', 'Students should expect to develop strong technology skills', 'Two compulsory extended-response problem-solving questions', 'accurately, appropriately and efficiently both to explore new ideas and to solve problems.', 'transform common realistic contexts into mathematics', 'an integral part of the course and its assessment', 'enjoy the thrill of mathematical problem solving and generalization.'],
    sources: [
      { claim: 'IB DP Subject Brief, Mathematics: applications and interpretation (first assessments 2021): description, hours by topic, common content, assessment at a glance, objectives, exploration.', url: 'https://www-1.ms.ut.ee/too-ja-praktika/files/MHG-IB.pdf' },
      { claim: 'IB Mathematics: analysis and approaches guide (February 2019), partial public copy: AI and AA descriptions, SL/HL distinction, common SL content.', url: 'https://www.readkong.com/page/mathematics-analysis-and-approaches-guide-holy-heart-of-1953931' },
      { claim: 'IB DP mathematics page (403 to curl; listed for readers, not used as a source).', url: 'https://www.ibo.org/programmes/diploma-programme/curriculum/dp-mathematics/' }
    ],
    rejectedClaims: [
      'Sub-topic content of each AI topic (for example named methods): the full AI guide was not reachable at a primary or school-hosted copy; only the five areas are named.',
      'IA criteria, marks and word or page limits: not in the brief; not stated.',
      'Any later revision of the AI course or first-assessment year beyond 2021: ibo.org returned 403; a search snippet mentioning one could not be verified at source; not stated.',
      'A search-engine summary giving different paper weightings: not used; the weightings are read from the IB brief itself.',
      'University preferences for AA over AI: set by each university; not stated.',
      'Any grade or prediction promise.'
    ]
  }
};
