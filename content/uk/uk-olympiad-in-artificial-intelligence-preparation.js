'use strict';
// UK Olympiad in Artificial Intelligence preparation (ag- competition spoke, UK cluster Phase 2).
// Facts read on 20 September 2026:
//  - ukoai.org: "All secondary school students living in the UK are invited to take the free online
//    UKOAI exam"; "The exam consists of three long-form questions that test programming and mathematical
//    ability in deep learning", with three hours to complete and submit it; the exam expects Python,
//    PyTorch, machine learning, deep learning, transformers and word embeddings; the committee includes
//    Umang Bhatt (University of Cambridge), Euan Ong (Anthropic), James Hindmarch (ARENA), Aaliya Manji
//    (Wise), Chloe Li (ARENA) and Rhea Kumar (BCG). The published cycle is registration January to
//    February 2026, the exam on "Saturday 7th March 2026", interviews in mid-March, a training camp in
//    April or May, an IOAI first round in July 2026 and the main contests in August; high scorers go to
//    video interviews and then a camp, from which "four participants will be selected".
//  - ioai-official.org: "IOAI is the International Science Olympiad in Artificial Intelligence for high
//    school students"; the 3rd edition "will be held in Astana, Republic of Kazakhstan, in 2026 from 2nd
//    until 8th of August"; the 4th is "July 4th - 10th 2027 Singapore, Republic of Singapore".
//  - CONFLICT, recorded on the page: ukoai.org gives the 2026 main contests as "2-8th August 2026 in Abu
//    Dhabi, UAE", the same dates but a different city. The organiser of the international olympiad is
//    followed, and the disagreement is stated rather than hidden.
// Spine: the arithmetic of why this costs so much. Our run of 20 September 2026, in plain Python with no
// libraries: multiplying two n by n matrices takes n cubed multiply-adds, and timing it at n = 50, 100
// and 200 gave 0.012, 0.082 and 0.641 seconds, each doubling costing about seven to eight times as much,
// exactly as n cubed predicts. Attention compares every token with every other, so 128 tokens is 16,384
// pairs and 1,024 tokens is 1,048,576.
// Nothing from the exam or from IOAI tasks is reproduced.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'UKOAI', label: 'UK Olympiad in AI', blurb: 'Three long-form questions in three hours, and a syllabus that names PyTorch and transformers.' },
  slug: 'uk-olympiad-in-artificial-intelligence-preparation',
  code: 'uoa',
  accent: '#3E1E21',
  accentRationale: 'UK Olympiad in AI: a near-black maroon from the solver (12.07:1 on every paper tint), read as a dark brown against the bright crimson of the team challenges and the dark wine of the computing challenge',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'UK Olympiad in AI preparation',
  title: 'UK Olympiad in AI Preparation | UKOAI and the Route to IOAI',
  description: 'Preparing for the UK Olympiad in Artificial Intelligence: a free three-hour exam for UK secondary students, PyTorch and transformers, and the route to the IOAI team.',
  ogDescription: 'The UKOAI exam is three long-form questions in three hours, and its syllabus names PyTorch, transformers and word embeddings. There is no bluffing it.',
  twitterDescription: 'UK Olympiad in AI preparation: a free three-hour exam, and the route to the international olympiad.',
  pageName: 'UK Olympiad in Artificial Intelligence Preparation',
  webPageDescription: 'Preparation guidance for the UK Olympiad in Artificial Intelligence, covering who can sit the free online exam, its format and syllabus, the selection route to the International Olympiad in AI, and the computing arithmetic behind deep learning.',
  courseDescription: 'Live online Python, machine learning and deep learning classes for UK secondary students preparing for the UK Olympiad in Artificial Intelligence.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'UK Olympiad in AI',
  navLinks: [
    { href: '#exam', label: 'The exam' },
    { href: '#cost', label: 'Why it costs so much' },
    { href: '#route', label: 'The IOAI route' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Secondary school students &middot; Free online exam',
  h1: 'UK Olympiad in AI preparation',
  lede: 'Most olympiads test a way of thinking. This one tests a toolkit. The UK Olympiad in Artificial Intelligence is a free online exam open to every secondary school student living in the UK, it lasts three hours, and it contains three long-form questions on programming and mathematics in deep learning, with a syllabus that names Python, PyTorch, machine learning, transformers and word embeddings. There is no version of this that a bright student improvises on the day, and that is the useful thing about it: what to learn is written down, and a student with a year can learn it.',
  secondaryCta: { href: '#cost', label: 'See the arithmetic behind deep learning' },
  wa: 'Hello Modern Age Coders, my child wants to enter the UK Olympiad in AI and I would like a free class.',
  heroNote: 'Quoted from the organisers with the date we read it &middot; A source conflict recorded openly &middot; Nothing promised about selection',
  spec: [
    ['Organiser', 'The UKOAI committee'],
    ['Open to', 'Secondary students living in the UK'],
    ['Cost', 'Free'],
    ['Exam', 'Three long-form questions'],
    ['Length', 'Three hours'],
    ['Expects', 'Python, PyTorch, transformers'],
    ['Then', 'Interviews, then a training camp'],
    ['Team', 'Four, for the international olympiad']
  ],
  capsuleQ: 'In short',
  capsule: 'The UK Olympiad in Artificial Intelligence says that "all secondary school students living in the UK are invited to take the free online UKOAI exam". The exam "consists of three long-form questions that test programming and mathematical ability in deep learning", with three hours to complete and submit it, and the published syllabus expects Python, PyTorch, machine learning, deep learning, transformers and word embeddings. High scorers go to video interviews and then a training camp, from which "four participants will be selected" to represent the UK. The international olympiad describes itself as "the International Science Olympiad in Artificial Intelligence for high school students", and its own site gives the 2026 edition as Astana, Kazakhstan, from 2 to 8 August, and the 2027 edition as Singapore, 4 to 10 July. We teach the Python and the machine learning underneath. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a UKOAI candidate',
    lede: 'The syllabus is public, so the honest question is which part of it a student is missing.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'UOA / 01', title: 'AI and machine learning for teens', note: 'The core: what a model is, how it is trained, and how to tell whether it has learned anything.' },
      { course: 'python-complete-masterclass-teens', code: 'UOA / 02', title: 'Python from start to finish', note: 'Before any of the rest. A three-hour exam is no place to be looking up how a loop works.' },
      { course: 'data-science-course-for-teens-python-data', code: 'UOA / 03', title: 'Data science with Python', note: 'Arrays, data handling and the honest evaluation of a result, which is half of what a long-form question asks for.' }
    ]
  },

  sections: [
    {
      id: 'exam', tint: 'tint', eyebrow: 'The exam',
      h2: 'Three questions, three hours, and a named syllabus',
      lede: 'Facts read at the organisers\' own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'The UK Olympiad in AI as its organisers describe it', head: ['Part', 'What the organiser says', 'What it means for a student'], rows: [
          ['Who can sit it', '"All secondary school students living in the UK are invited to take the free online UKOAI exam"', 'No qualifying round and no school nomination: it is open'],
          ['Cost', 'Free', 'Nothing between a curious student and the paper'],
          ['The exam', '"three long-form questions that test programming and mathematical ability in deep learning"', 'Written answers and code, not multiple choice'],
          ['Length', 'Three hours to complete and submit', 'A long sitting, done online'],
          ['Syllabus', 'Python, PyTorch, machine learning, deep learning, transformers and word embeddings', 'The only UK olympiad whose syllabus names specific tools'],
          ['Next stage', 'High scorers are invited to video interviews', 'A person, not just a paper'],
          ['Then', 'A training camp, from which "four participants will be selected"', 'The camp is where the team is chosen'],
          ['Committee', 'Members from the University of Cambridge, ARENA, Anthropic, Wise and BCG', 'Run by people working in the field']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The published cycle is registration in January and February, the exam on a Saturday in early March, interviews in mid-March and a camp in April or May, with the international olympiad in the summer. The dates on the organiser\'s pages when we read them were for the 2026 cycle, so a student planning for the next one should check the organiser rather than trust a date lifted from a page like this.',
            'What will not change is the shape: an open, free exam early in the spring term. A student in Year 10 or 11 who wants to sit it has the autumn to prepare, which is exactly enough time.'
          ],
          right: [
            'The syllabus deserves a second look because of what it implies. Naming PyTorch means the exam expects a student who has trained something, not one who has read about training. Naming transformers and word embeddings means it expects a student who knows what an embedding is for, not one who can define it.',
            'That makes UKOAI unusually honest about what it wants. Compare it with the <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad</a>, which needs no library at all and tests how a student thinks about a problem.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ukoai.org/" rel="noopener" target="_blank">the UK Olympiad in AI</a> and <a class="ag-inline-link" href="https://ioai-official.org/" rel="noopener" target="_blank">the International Olympiad in AI</a>, read 20 September 2026. Modern Age Coders is not connected with either, nor with any organisation whose staff sit on the UKOAI committee.' }
      ]
    },
    {
      id: 'cost', tint: 'deep', eyebrow: 'The method',
      h2: 'Why deep learning costs what it costs',
      lede: 'A student who understands one piece of arithmetic will understand most of the practical decisions in the field. We ran it in plain Python, with no libraries, so the numbers are ours.',
      body: [
        { kind: 'p', html: 'Almost everything a neural network does is multiplying matrices. Multiplying two n by n matrices takes n cubed multiply-and-add operations, which sounds abstract until you watch the clock. We wrote the three nested loops by hand and timed them.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: plain Python, no libraries', head: ['Matrix size', 'Multiply-adds', 'Time taken', 'Against the previous row'], rows: [
          ['50 by 50', '125,000', '0.012 seconds', '&mdash;'],
          ['100 by 100', '1,000,000', '0.082 seconds', '7.1 times as long'],
          ['200 by 200', '8,000,000', '0.641 seconds', '7.8 times as long']
        ] },
        { kind: 'three', cells: [
          { h3: 'Doubling costs eight times', p: 'Twice the size is two times more rows, two times more columns and two times more terms in each sum. Two cubed is eight, and the clock agreed: 7.1 and 7.8.' },
          { h3: 'Attention is quadratic', p: 'A transformer compares every token with every other, so 128 tokens is 16,384 comparisons and 1,024 tokens is 1,048,576. Eight times the text is sixty-four times the work.' },
          { h3: 'What follows from that', p: 'Context windows, batch sizes, GPUs and the price of training a model all fall out of these two facts. They are not engineering trivia; they are the shape of the subject.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'A student who can do this arithmetic answers a long-form exam question very differently from one who cannot. Asked why a model was trained on short sequences, they can say what the alternative would have cost. Asked to choose between two designs, they can compare them in operations rather than in adjectives.',
            'It also inoculates against the commonest mistake in a three-hour paper: proposing something that would take a week to run and not noticing.'
          ],
          right: [
            'The same arithmetic explains why a laptop is fine for learning and not for competing at the frontier. Nothing in the UKOAI syllabus requires a large machine: PyTorch on a modest computer trains the kind of model the exam is about.',
            'We ran the timings in plain Python precisely because it is slow. A library would have used optimised code and hidden the growth; the naive version shows the arithmetic honestly.'
          ] },
        { kind: 'source', html: 'The timings are ours, run on 20 September 2026 in plain Python with no numerical libraries. The attention figures are the exact counts of pairs for sequences of 128, 256, 512 and 1,024 tokens.' }
      ]
    },
    {
      id: 'route', tint: 'plain', eyebrow: 'The route',
      h2: 'Exam, interview, camp, team of four',
      lede: 'The selection route is longer than most olympiads, and the last stage is not a paper.',
      body: [
        { kind: 'table', caption: 'From an open exam to a national team', head: ['Stage', 'What happens', 'Notes'], rows: [
          ['Registration', 'January to February in the published cycle', 'Open to any UK secondary student'],
          ['The exam', 'Three long-form questions, three hours, online', 'Free, and sat at home rather than in school'],
          ['Interviews', 'High scorers are invited to video interviews in mid-March', 'A conversation, not a second paper'],
          ['Training camp', 'April or May', 'Where the real teaching happens'],
          ['Selection', '"Four participants will be selected from this camp"', 'The team for the international olympiad'],
          ['The olympiad', 'IOAI, for high school students', 'Astana in 2026, 2 to 8 August; Singapore in 2027, 4 to 10 July']
        ] },
        { kind: 'two', mt: true,
          left: [
            'One honest note about a disagreement between sources. The UKOAI site gives the 2026 international contests as 2 to 8 August in Abu Dhabi; the International Olympiad in AI gives the same dates in Astana, Kazakhstan. We follow the olympiad\'s own site for its own venue and record the conflict here rather than quietly picking one, because a reader deserves to know when two official pages disagree.',
            'The practical consequence is small. For a student sitting the exam in March, where the summer contest lands matters far less than what is on the paper.'
          ],
          right: [
            'The interview stage is worth preparing for in a way almost nobody does. A student who can explain a model they built, including what went wrong with it, does better than one who can recite definitions, and that is a conversation a family can practise at the kitchen table.',
            'And a student who does not reach the camp has still spent a winter learning PyTorch, which is the thing that will still matter in five years. Every other page on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> makes the same point, but it is truest here.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a syllabus that names its tools',
    lede: 'A student moves up when they have built the thing, not when they have read about it.',
    table: { caption: 'From Python to a trained model', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 8 to 9', '1. Fluent Python', 'Writes and debugs a hundred-line program without help'],
      ['Years 9 to 10', '2. Data and arrays', 'Loads, cleans and reshapes data without looking up every step'],
      ['Years 10 to 11', '3. A model trained', 'Has trained something, watched it fail, and fixed it'],
      ['Years 11 to 13', '4. Why it works', 'Can explain what an embedding is for and what attention costs']
    ] },
    left: { h3: 'If March is close', ps: [
      'Train one small model end to end this month rather than reading three papers. The exam asks what a student can do.',
      'Do the matrix arithmetic once by hand. It changes how every later answer is written.'
    ] },
    right: { h3: 'If this is the field', ps: [
      'Everything on the UKOAI syllabus is the ordinary working knowledge of the subject, which makes the exam a good map even for a student who never sits it.',
      'The <a class="ag-inline-link" href="/british-informatics-olympiad-preparation">informatics olympiad</a> is the companion for a student who prefers algorithms to models.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses on the UKOAI syllabus',
    lede: 'Arranged by which part of the published syllabus a student still needs.',
    bands: [
      { num: 'I', h3: 'The language', sub: 'Before anything else', courses: [
        { code: 'UOA / A / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Fluency, so the exam is not spent on syntax.' },
        { code: 'UOA / A / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The younger route into the same language.' },
        { code: 'UOA / A / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Counting operations, which this exam rewards.' }
      ] },
      { num: 'II', h3: 'Machine learning', sub: 'The named syllabus', courses: [
        { code: 'UOA / B / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models trained, evaluated and understood.' },
        { code: 'UOA / B / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Arrays, data and honest evaluation.' },
        { code: 'UOA / B / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'The mathematics the long-form questions lean on.' }
      ] },
      { num: 'III', h3: 'The mathematics', sub: 'Underneath the tools', courses: [
        { code: 'UOA / C / 01', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra and calculus at the pace this needs.' },
        { code: 'UOA / C / 02', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A-level maths', blurb: 'The qualification running alongside.' },
        { code: 'UOA / C / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problem solving that transfers to any olympiad.' }
      ] },
      { num: 'IV', h3: 'Building with it', sub: 'Beyond the exam', courses: [
        { code: 'UOA / D / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Somewhere to put a model once it works.' },
        { code: 'UOA / D / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Writing correct code against a clock.' },
        { code: 'UOA / D / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The exam running underneath, board by board.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly sessions where something gets trained',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot for Years 10 to 13.' },
      { time: 'Weekend morning', l: 'Long enough to train and evaluate something properly.' },
      { time: 'Holiday intensives', l: 'For the winter run-up to a March exam.' }
    ],
    cells: [
      { h3: 'Models actually trained', p: 'Every idea arrives as something the student runs, not as a slide about it.' },
      { h3: 'Arithmetic first', p: 'We count the operations before we admire the results, because that is what an exam answer needs.' },
      { h3: 'Five to ten students', p: 'Enough for two designs to be compared, small enough for every notebook to be looked at.' },
      { h3: 'Our own datasets', p: 'Written or chosen by us. No olympiad task is reproduced in a lesson.' },
      { h3: 'One to one when useful', p: 'For a student well ahead of their year or preparing for an interview stage.' },
      { h3: 'Nothing promised', p: 'We cannot influence selection and promise no score, invitation or place.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Four finished pieces of work from students here, one of them a trained model. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects the rest.',
  reviewsLede: 'From our Google profile, in the words families used.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, identical in every country but India, with no registration charge and no tie-in.',
    free: ['A proper lesson with a subject teacher', 'A frank view of what is missing', 'No payment details requested'],
    group: ['Five to ten students at one level', 'The same teacher weekly', 'Notebooks read and discussed', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around the gap in the syllabus', 'Useful before an interview stage']
  },

  faq: {
    eyebrow: 'UK Olympiad in AI questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'Who can enter the UK Olympiad in AI?', a: 'The organiser says all secondary school students living in the UK are invited to take the free online UKOAI exam. There is no qualifying round and no school nomination.' },
      { q: 'What is the exam like?', a: 'Three long-form questions testing programming and mathematical ability in deep learning, with three hours to complete and submit it, sat online.' },
      { q: 'What does it expect a student to know?', a: 'The published syllabus names Python, PyTorch, machine learning, deep learning, transformers and word embeddings. It is the only UK olympiad we know of whose syllabus names specific tools.' },
      { q: 'What happens after the exam?', a: 'High scorers are invited to video interviews, then to a training camp, and four participants are selected from that camp to represent the UK at the International Olympiad in AI.' },
      { q: 'When does it run?', a: 'The cycle published when we read the site was registration in January and February, the exam on a Saturday in early March, interviews mid-March and a camp in April or May. Check the organiser for the current cycle rather than trusting a date copied from anywhere else.' },
      { q: 'Where is the international olympiad held?', a: 'The International Olympiad in AI gives its 2026 edition as Astana, Kazakhstan, from 2 to 8 August, and its 2027 edition as Singapore, 4 to 10 July. The UKOAI site gives the same 2026 dates in Abu Dhabi; we follow the international olympiad for its own venue and record the disagreement.' },
      { q: 'Does my child need a powerful computer?', a: 'No. Nothing on the syllabus requires a large machine, and PyTorch on an ordinary laptop trains the kind of model the exam is about.' },
      { q: 'What is the single most useful thing to understand?', a: 'The arithmetic. Multiplying two n by n matrices takes n cubed operations, so doubling the size costs eight times as much, and attention compares every token with every other, so doubling the text costs four times as much. Most practical decisions in the field follow from those two facts.' },
      { q: 'Is it worth entering if selection is unlikely?', a: 'Yes, because the syllabus is the ordinary working knowledge of the field. A student who prepares and is not selected has still learned the thing that lasts.' },
      { q: 'What do classes cost?', a: 'The first lesson is free. A group place is then USD 100 a month and one-to-one teaching USD 150, with nothing to pay to register.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other routes for a computing student',
    lede: 'The algorithms olympiad, the coding contests, and the whole season in a table.',
    items: [
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Three hours, three questions, no libraries.' },
      { href: '/perse-coding-team-challenge-preparation', label: 'Perse Coding Team Challenge', p: 'Teams of three, hidden tests, January and March.' },
      { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge', p: 'Ten challenges, and a rule against using AI.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every competition we could confirm, laid out by month.' },
      { href: '/ai-and-machine-learning-classes-in-uk', label: 'AI and machine learning classes in the UK', p: 'The subject itself, taught from the beginning.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free AI lesson',
    lede: 'Tell us the year group and what your child has already built. The free lesson trains something small and real, and we say afterwards what we saw.',
    readFirst: 'Rather read first? Syllabuses sit on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp usually gets an answer fastest and is free from a UK mobile. Our number is registered in India, which we state openly, and there is no UK office behind it.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Olympiads', links: [
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'Mathematical olympiad' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/national-cipher-challenge-preparation', label: 'National Cipher Challenge' }
      ] },
      { h4: 'AI courses', links: [
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning' },
        { href: '/courses/data-science-course-for-teens-python-data', label: 'Data science with Python' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/ai-and-machine-learning-classes-in-uk', label: 'AI classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the subject; the committee sets the paper'
  },

  personalityCss: `
.ag-root.ag-uoa .ag-hero h1 { letter-spacing: -0.022em; }
.ag-root.ag-uoa .ag-capsule { border-left-width: 8px; border-radius: 0 7px 7px 0; }
.ag-root.ag-uoa .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-uoa .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.018em; }
.ag-root.ag-uoa .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-uoa .ag-spec dt { letter-spacing: 0.128em; }
.ag-root.ag-uoa .ag-three h3 { letter-spacing: -0.0065em; }
.ag-root.ag-uoa .ag-slots { gap: 1.18rem; }
`,

  mustMention: ['three long-form questions', 'free online UKOAI exam', 'four participants will be selected', 'Astana', '1,048,576', 'n cubed', 'PyTorch']
};
