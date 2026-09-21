'use strict';
// National 5 Maths tuition online (ag- maths door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (sqa.org.uk PDFs via curl + PyMuPDF):
//  - National 5 Mathematics Course Specification, course code C847 75, course assessment code X847 75,
//    SCQF level 5 (24 SCQF credit points), valid from session 2023-24, May 2023, version 3.0. Verbatim:
//    "Question paper 1 (non-calculator) 40 1 hour"; "Question paper 2 50 1 hour and 30 minutes"; notional
//    length "160 hours"; entry: "the fourth curriculum level or the National 4 Mathematics course or
//    equivalent"; automatic certification of "Numeracy at SCQF level 5"; paper 1 "A calculator cannot be
//    used."; "apply numerical, algebraic, geometric, trigonometric, statistical and reasoning skills,
//    without the aid of a calculator".
//  - Course report 2025, National 5 Mathematics. Verbatim: "Number of resulted entries in 2025: 34,846";
//    A 13,809, 39.6%, minimum mark 64; B 55; C 47; D 38; No award 18.5%; "We have not applied rounding";
//    "The question papers were slightly less demanding than expected. We adjusted the grade boundaries to
//    account for this."; "In question paper 1, many candidates miss out on valuable marks because they do
//    not demonstrate the necessary basic number skills."; "Markers are unlikely to award marks to
//    calculations candidates do elsewhere on the page."; "avoid inappropriate premature rounding that leads
//    to incorrect answers"; nature of roots: 'two real and distinct roots', 'one repeated real root' or 'two
//    equal real roots', 'no real roots'; "not purely concentrate on recent past paper questions" (question
//    13, vectors, "has not featured in recent past papers"); question-level comments summarised on the page.
//  - Qualifications Scotland replaced SQA on 1 February 2026 (the Scottish computing pages carry the
//    verbatim notice; the maths documents are SQA-era and remain current).
// Spine: forty marks with no calculator. National 5 Maths has no coursework at all: two papers, and 40 of
// the 90 marks are earned without a calculator, where the 2025 report says basic number skills cost
// candidates valuable marks. Deliberately distinct from Higher (every line follows the last) and
// Advanced Higher (the words of a proof are marks).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'N5 MATHS', blurb: 'No coursework, two papers, and 40 of the 90 marks earned without a calculator, where the 2025 report says basic number skills cost marks.' },
  slug: 'national-5-maths-tuition-online',
  code: 'nfm',
  accent: '#734555',
  accentRationale: 'National 5 Maths: a dusty rose from the solver (6.29:1 on every paper tint, dE 9.3 from the nearest used accent), warmer than the National 5 Computing magenta so the two N5 pages are clearly different subjects',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'National 5 Maths tuition online',
  title: 'National 5 Maths Tuition Online | 40 Marks, No Calculator',
  description: 'National 5 Maths tuition online: no coursework, two papers, and 40 of the 90 marks earned without a calculator. What the 2025 report says, and how we prepare.',
  ogDescription: 'National 5 Maths is two papers and nothing else, and 40 of the 90 marks come without a calculator. The 2025 report says number skills decide them.',
  twitterDescription: 'National 5 Maths tuition: the non-calculator paper, the exact wording markers want, and why past papers are not the whole course.',
  pageName: 'National 5 Maths Tuition Online',
  webPageDescription: 'Live online tuition for National 5 Mathematics in Scotland, built from the course specification and the 2025 course report.',
  courseDescription: 'Live online teaching for National 5 Mathematics candidates: non-calculator number and algebra, trigonometry, statistics, vectors and exam wording.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'National 5 Maths',
  navLinks: [
    { href: '#papers', label: 'Two papers' },
    { href: '#nocalc', label: 'No calculator' },
    { href: '#wording', label: 'Wording' },
    { href: '#breadth', label: 'Past papers' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; National 5 &middot; S4',
  h1: 'National 5 Maths tuition online',
  lede: 'National 5 Mathematics has no coursework, no assignment and no project. The whole award rests on two question papers sat in the exam diet, and the first of them, 40 of the 90 marks, is taken without a calculator. That is where the 2025 course report put its sharpest warning: "In question paper 1, many candidates miss out on valuable marks because they do not demonstrate the necessary basic number skills." Not advanced topics. Fractions, percentages, simplifying, the arithmetic a calculator normally hides. This page sets out how the course is assessed, where the 2025 candidates dropped marks, the exact wording markers look for, and why working only from recent past papers leaves gaps.',
  secondaryCta: { href: '#nocalc', label: 'The non-calculator paper' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for National 5 Maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From the course specification and 2025 course report',
  spec: [
    ['Course', 'National 5 Mathematics C847 75'],
    ['Paper 1', 'No calculator, 40 marks, 1 hour'],
    ['Paper 2', 'Calculator, 50 marks, 1 hour 30 minutes'],
    ['Coursework', 'None'],
    ['Entries in 2025', '34,846 resulted'],
    ['Awarded by', 'Qualifications Scotland, since February 2026'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'National 5 Mathematics is assessed entirely by two question papers: paper 1, without a calculator, worth 40 marks in one hour, and paper 2, with a calculator, worth 50 marks in an hour and a half. There is no coursework. The course also certifies Numeracy at SCQF level 5. In 2025, 34,846 candidates received a result. The course report said many candidates lost marks on paper 1 through weak basic number skills, and that algebra, the nature of roots, comparing data sets and vectors caused recurring problems. It also warned against preparing only from recent past papers. Modern Age Coders teaches National 5 Maths live, with daily-style non-calculator number work, the exact wording the marking instructions expect, and coverage of the whole specification rather than the last few papers. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for National 5 Maths',
    lede: 'Our maths courses serve several curricula; we teach the National 5 specification inside them. Each card opens a syllabus.',
    items: [
      { course: 'igcse-mathematics-mastery', code: 'N5M / 01', title: 'IGCSE Mathematics', note: 'Surds, indices, quadratics, vectors and trigonometry, most of which National 5 shares.' },
      { course: 'gcse-mathematics-mastery', code: 'N5M / 02', title: 'GCSE Mathematics', note: 'Number and algebra fluency at the level paper 1 demands, taught without a calculator first.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'N5M / 03', title: 'High School Mathematics', note: 'A broad secondary course for students who need gaps filled from earlier years.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'Two papers',
      h2: 'Two papers, no coursework, nowhere else to earn marks',
      lede: 'From the National 5 Mathematics Course Specification, version 3.0, valid from session 2023 to 24.',
      body: [
        { kind: 'table', caption: 'How National 5 Mathematics is assessed', head: ['Component', 'Marks', 'Time', 'Calculator'], rows: [
          ['Question paper 1', '40', '1 hour', 'Not allowed'],
          ['Question paper 2', '50', '1 hour 30 minutes', 'Allowed'],
          ['Coursework', 'None', 'Not applicable', 'Not applicable']
        ] },
        { kind: 'p', html: 'Both papers can test anything in the course: numerical, algebraic, geometric, trigonometric and statistical skills, plus reasoning. The specification suggests about 160 hours of learning, recommends that candidates arrive having achieved the fourth curriculum level or National 4 Mathematics, and awards the Core Skill of Numeracy at SCQF level 5 automatically with the course.' },
        { kind: 'table', mt: true, caption: 'National 5 Mathematics results, 2025', head: ['Measure', 'Published figure'], rows: [
          ['Resulted entries', '34,846 (36,689 in 2024)'],
          ['Grade A', '39.6 per cent, minimum mark 64 of 90'],
          ['Grade C minimum mark', '47 of 90'],
          ['No award', '18.5 per cent']
        ] },
        { kind: 'p', html: 'Grade boundaries move each year. In 2025 the report says "The question papers were slightly less demanding than expected. We adjusted the grade boundaries to account for this." A boundary from one year is no target for the next, which is why we quote these figures only to describe 2025.' },
        { kind: 'source', html: 'Source: the National 5 Mathematics Course Specification, version 3.0, and the National 5 Mathematics course report 2025, both from sqa.org.uk. Qualifications Scotland replaced SQA on 1 February 2026 and confirms the SQA-era documents remain current; the <a class="ag-inline-link" href="/national-5-computing-science-help">National 5 Computing page</a> quotes its notice in full.' }
      ]
    },
    {
      id: 'nocalc', tint: 'deep', eyebrow: 'No calculator',
      h2: 'Forty marks without a calculator',
      lede: 'Paper 1 is where arithmetic, not advanced mathematics, decides the result.',
      body: [
        { kind: 'p', html: 'The specification says paper 1 lets candidates "apply numerical, algebraic, geometric, trigonometric, statistical and reasoning skills, without the aid of a calculator". In practice that means exact fractions, reverse percentages done by hand, surds, indices and algebra, with every step visible. The 2025 report is direct about what went wrong: "In question paper 1, many candidates miss out on valuable marks because they do not demonstrate the necessary basic number skills."' },
        { kind: 'table', mt: true, caption: 'Paper 1 in 2025: where marks slipped', head: ['Question topic', 'What the report saw'], rows: [
          ['Reverse percentage', 'Most did well, but a few could not divide 720 by 8 or by 80 correctly by hand'],
          ['Area of a triangle', 'Some substituted the sine of the wrong expression into the formula'],
          ['Straight line', 'Coordinates swapped in the gradient formula or the line equation'],
          ['Trigonometric graph', 'Many gained no marks, often giving the x-coordinate for the y-coordinate'],
          ['Indices', 'The rule for a power of a power misapplied, or the final simplification left out'],
          ['Resultant vector', 'Many found it in component form; few drew it correctly'],
          ['Algebraic fractions', 'A sign error expanding the numerator bracket'],
          ['Quadratic from a context', 'Many gained no marks constructing or solving it, some solving it as if linear']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Number every day', p: 'The report\'s first recommendation is to "maintain and practise number skills" for paper 1. Short, frequent practice with fractions, percentages and division by hand beats a late cram.' },
          { h3: 'Algebra that holds', p: 'Rearranging, factorising and simplifying cost marks in both papers. The skills are basic; the errors come from rushing and from signs.' },
          { h3: 'Old skills stay live', p: 'One 2025 question needed the area of a rectangle, from years earlier. The report asks candidates to keep previously learned skills in practice.' }
        ] }
      ]
    },
    {
      id: 'wording', tint: '', eyebrow: 'Wording',
      h2: 'The words and habits markers look for',
      lede: 'Several 2025 marks were lost not on the mathematics but on how the answer was stated or where it was written.',
      body: [
        { kind: 'table', caption: 'The nature of the roots of a quadratic: the expected phrases', head: ['Discriminant', 'Expected response'], rows: [
          ['Greater than zero', '"two real and distinct roots"'],
          ['Equal to zero', '"one repeated real root" or "two equal real roots"'],
          ['Less than zero', '"no real roots"']
        ] },
        { kind: 'p', html: 'In 2025 many candidates calculated the discriminant correctly and then wrote something close but wrong, most commonly phrases like no distinct real roots, and lost the mark. The report now lists the expected responses, and practising them word for word is the simplest fix on the paper.' },
        { kind: 'two', mt: true,
          leftH3: 'Comparing data sets',
          left: [
            'A question comparing the weights of two rugby squads with a mean and a standard deviation caught many out. The report lists comments that earned nothing, among them "The French rugby players were more consistent." and statements that one squad\'s results or scores were lower, with no reference to what the measures show.',
            'A valid comment names the measure, says what it shows, and refers to the context: on average the weights were lower, and the weights were more varied, for this group.'
          ],
          rightH3: 'Angles, rounding and units',
          right: [
            'For angles in a diagram, write each angle on the diagram. The report warns: "Markers are unlikely to award marks to calculations candidates do elsewhere on the page."',
            'Avoid "inappropriate premature rounding that leads to incorrect answers", and give units where they belong, which most candidates did well.'
          ] },
        { kind: 'p', html: 'None of this is a trick. It is the marking instructions, which are published, applied consistently. Reading them alongside past papers is part of how we teach.' },
        { kind: 'p', html: 'Paper 2 has its own habits. A calculator removes the arithmetic but not the method: a percentage increase over two years still has to be applied twice, not doubled, and a volume still has to be rounded to the significant figures asked for. In 2025 a few candidates increased by 4 per cent for one year only, or by 8 per cent for two, on a simple appreciation question, and some rounded to the wrong number of figures on a sphere. Setting the working out clearly on the calculator paper protects method marks when a keying slip spoils the final number.' }
      ]
    },
    {
      id: 'breadth', tint: 'tint', eyebrow: 'Past papers',
      h2: 'Past papers are not the whole course',
      lede: 'The 2025 report named a question that had not appeared in recent years, and said so.',
      body: [
        { kind: 'p', html: 'Question 13 on the 2025 paper 1 asked candidates to add or subtract two-dimensional vectors using directed line segments, which the report notes "has not featured in recent past papers". Most candidates managed the component form and few drew the vector. The report\'s advice is plain: prepare for all the skills in the course specification "and not purely concentrate on recent past paper questions".' },
        { kind: 'two', mt: true,
          leftH3: 'How we cover the course',
          left: [
            'We work from the specification\'s list of skills, topic by topic, and use past papers to practise exam technique, not as the syllabus.',
            'Paper 1 skills are practised without a calculator from the first lesson, so the calculator becomes a tool for paper 2 rather than a crutch.'
          ],
          rightH3: 'What we do not claim',
          right: [
            'We do not run a course written only for National 5. Our maths courses serve several curricula, and we teach the National 5 content within them, checked against the specification.',
            'We do not promise a grade. Boundaries move, and the report shows how much depends on steady number and algebra practice.'
          ] },
        { kind: 'p', html: 'For the next step, <a class="ag-inline-link" href="/higher-maths-tuition-online">the Higher Maths page</a> covers what changes at Higher, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-scotland">the Scotland page</a> sets out the whole system. Students who enjoy problem solving may like <a class="ag-inline-link" href="/scottish-mathematical-challenge-practice">the Scottish Mathematical Challenge</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S4',
    lede: 'Placement follows what a student can do without a calculator, which is the fastest honest test.',
    table: { caption: 'What a National 5 candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Number by hand', 'Start of S4', 'Fractions, percentages, reverse percentages and division done confidently without a calculator'],
      ['2. Algebra', 'Autumn', 'Expanding, factorising, rearranging and simplifying, including algebraic fractions and indices'],
      ['3. The course topics', 'Winter', 'Quadratics and the discriminant, trigonometry and its graphs, vectors, statistics, geometry'],
      ['4. Exam habits', 'Spring', 'Expected wording, working on diagrams, no premature rounding, and every skill in the specification practised']
    ] },
    left: { h3: 'Rung one is where paper 1 is won', ps: [
      'The 2025 report pointed at basic number skills first. Ten minutes a day on them is worth more than an extra past paper.',
      'The wider order of topics is set out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> for students who also code.'
    ] },
    right: { h3: 'Rung four is fast to learn', ps: [
      'The expected phrases and habits take a few weeks, then protect marks on every paper.',
      'Lessons ease off during the diet and resume for Higher afterwards.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for S3 and S4',
    lede: 'Grouped by purpose. The free lesson decides the starting point.',
    bands: [
      { num: 'I', h3: 'National 5 content', sub: 'Number, algebra, geometry and statistics', courses: [
        { code: 'UK / N5M1 / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Surds, vectors and quadratics at the right depth.' },
        { code: 'UK / N5M1 / 02', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Non-calculator fluency and algebra, built steadily.' },
        { code: 'UK / N5M1 / 03', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'For students filling gaps from earlier years.' }
      ] },
      { num: 'II', h3: 'Foundations', sub: 'For students who are behind', courses: [
        { code: 'UK / N5M2 / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary mathematics', blurb: 'Fractions, ratio and early algebra, rebuilt properly.' },
        { code: 'UK / N5M2 / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'For younger siblings, or anyone whose number facts wobble.' },
        { code: 'UK / N5M2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Mean, spread and interpretation, pitched older but clear.' }
      ] },
      { num: 'III', h3: 'Beyond National 5', sub: 'Higher and problem solving', courses: [
        { code: 'UK / N5M3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Calculus and more, much of which Higher shares.' },
        { code: 'UK / N5M3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'For students who enjoy hard problems.' },
        { code: 'UK / N5M3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Mathematical ideas explored by writing programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Number first, calculator second',
    lede: 'Our teachers work from India, which keeps one clock all year, so Scotland is four and a half hours behind in summer and five and a half in winter. Lessons are timed in UK hours.',
    slots: [
      { time: 'After school', l: 'Most S4 students choose this.' },
      { time: 'Evening', l: 'Around sport, clubs or part-time work.' },
      { time: 'Weekend', l: 'Room for a full paper under timed conditions.' }
    ],
    cells: [
      { h3: 'Non-calculator warm-ups', p: 'Every lesson opens with number work by hand, because paper 1 depends on it.' },
      { h3: 'Algebra checked line by line', p: 'Signs and brackets checked as they are written, where the 2025 errors came from.' },
      { h3: 'Expected wording', p: 'The phrases from the marking instructions practised until they are automatic.' },
      { h3: 'Whole specification', p: 'Every skill in the course covered, not only what recent papers asked.' },
      { h3: 'Timed papers', p: 'Past papers under exam timing in the spring, marked against the published instructions.' },
      { h3: 'Small groups', p: 'Five to ten S4 students at one rung, checking each other\'s working.' }
    ]
  },

  projectsH2: 'Work by our students in lessons',
  projectsLede: 'Four projects from classes, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, reproduced exactly.',

  fees: {
    h2: 'Fees for National 5 Maths lessons',
    lede: 'Lessons are billed monthly in US dollars, and families everywhere outside India pay the same. Your first lesson costs nothing; we only invoice once a course and a regular weekly slot are in place.',
    free: ['A lesson on real National 5 questions', 'A clear view of number and algebra gaps', 'A phone number is all we need'],
    group: ['Five to ten S4 students on one rung', 'The same teacher through the session', 'Non-calculator practice every week', 'Timed papers in spring'],
    one: ['A teacher for one student', 'A plan built back from the exam date', 'Suits a student rebuilding foundations']
  },

  faq: {
    eyebrow: 'Questions about National 5 Maths',
    h2: 'What S4 students and parents ask',
    items: [
      { q: 'How is National 5 Maths assessed?', a: 'By two question papers only. Paper 1, without a calculator, is worth 40 marks in one hour; paper 2, with a calculator, is worth 50 marks in an hour and a half. There is no coursework.' },
      { q: 'Why does the non-calculator paper matter so much?', a: 'It carries 40 of the 90 marks, and the 2025 course report said many candidates lost marks there through weak basic number skills rather than through the harder topics.' },
      { q: 'What did candidates find hardest in 2025?', a: 'Interpreting a trigonometric graph, constructing and solving a quadratic from a context, drawing a resultant vector, stating the nature of roots correctly, and comparing data sets using the mean and standard deviation.' },
      { q: 'What wording is expected for the nature of roots?', a: 'Two real and distinct roots when the discriminant is positive; one repeated real root, or two equal real roots, when it is zero; and no real roots when it is negative.' },
      { q: 'Are past papers enough?', a: 'No. The 2025 report noted a vectors question that had not featured in recent papers and advised preparing for every skill in the specification rather than only recent questions.' },
      { q: 'What grade boundary do I need?', a: 'Boundaries change every year. In 2025 an A needed 64 of 90 and a C needed 47, after the papers proved slightly less demanding than expected; those figures describe 2025 only.' },
      { q: 'Does the course give a Numeracy award?', a: 'Yes. Achieving National 5 Mathematics automatically certifies the Core Skill of Numeracy at SCQF level 5.' },
      { q: 'Is it still an SQA qualification?', a: 'It is awarded by Qualifications Scotland, which replaced SQA on 1 February 2026. The SQA-era course documents remain current.' },
      { q: 'Do you have a course written just for National 5?', a: 'No. Our maths courses serve several curricula, and we teach the National 5 specification within them. We would rather say that than label a course as something it is not.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson. Regular lessons are then a single monthly charge in US dollars, cheaper in a group than one to one; both prices appear in the fees section, and we never take payment in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Further pages for Scottish students',
    lede: 'The next level, the computing equivalent, and the wider system.',
    items: [
      { href: '/higher-maths-tuition-online', label: 'Higher Maths tuition', p: 'What changes when the working itself earns the marks.' },
      { href: '/national-5-computing-science-help', label: 'National 5 Computing Science', p: 'The other National 5 many maths students take.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Problem solving for pupils who enjoy maths.' },
      { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI classes in Scotland', p: 'Primary to S6, and how the system fits together.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training in the UK', p: 'The competition ladder for strong mathematicians.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our UK hub, with links to every page.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. The lesson includes some non-calculator work and ends with a clear list of gaps.',
    readFirst: 'Not ready to talk yet? Each <a class="ag-inline-link" href="/courses">course listing</a> shows its full syllabus, <a class="ag-inline-link" href="/how-we-teach">our teaching approach</a> explains who it works for and who it does not, and <a class="ag-inline-link" href="/student-labs">student labs</a> has real student work.',
    note: 'A WhatsApp message is the fastest way in and costs nothing from a UK mobile. Our office is in India, which is why the number begins +91.',
    formNote: 'No card, no contract. One reply, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scotland', links: [
        { href: '/higher-maths-tuition-online', label: 'Higher Maths' },
        { href: '/national-5-computing-science-help', label: 'National 5 Computing' },
        { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'Coding and AI in Scotland' }
      ] },
      { h4: 'More', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'National 5 Maths, live, on UK time'
  },

  personalityCss: `
.ag-root.ag-nfm .ag-hero h1 { letter-spacing: -0.024em; font-weight: 700; }
.ag-root.ag-nfm .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-nfm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-nfm .ag-table caption { text-align: left; font-weight: 660; }
.ag-root.ag-nfm .ag-table td:first-child { font-weight: 630; }
.ag-root.ag-nfm .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['40 marks', 'non-calculator', '34,846', 'basic number skills', 'two real and distinct roots', 'recent past papers', 'C847 75', 'Numeracy', 'standard deviation', 'Qualifications Scotland'],

  dossier: {
    curriculumAuthority: 'Scotland, National 5 Mathematics. Course Specification, course code C847 75, course assessment code X847 75, SCQF level 5 (24 SCQF credit points), valid from session 2023-24, May 2023, version 3.0: "Question paper 1 (non-calculator) 40 1 hour"; "Question paper 2 50 1 hour and 30 minutes"; notional 160 hours; entry "the fourth curriculum level or the National 4 Mathematics course or equivalent"; Core Skill "Numeracy at SCQF level 5"; paper 1 "A calculator cannot be used."; "apply numerical, algebraic, geometric, trigonometric, statistical and reasoning skills, without the aid of a calculator". Course report 2025: "Number of resulted entries in 2025: 34,846" (36,689 in 2024); A 39.6% minimum 64; C minimum 47; No award 18.5%; "We have not applied rounding"; "The question papers were slightly less demanding than expected. We adjusted the grade boundaries to account for this."; "In question paper 1, many candidates miss out on valuable marks because they do not demonstrate the necessary basic number skills."; "Markers are unlikely to award marks to calculations candidates do elsewhere on the page."; "avoid inappropriate premature rounding that leads to incorrect answers"; expected nature-of-roots phrases; vectors question "has not featured in recent past papers"; prepare for all skills "and not purely concentrate on recent past paper questions".',
    localProject: 'Forty marks with no calculator. National 5 Mathematics has no coursework: the award rests on two papers, and 40 of 90 marks come from the non-calculator paper, where the 2025 course report says many candidates lost marks through basic number skills. The page sets out the assessment and the 2025 results as published, then walks the paper 1 slips question by question, gives the exact phrases markers expect for the nature of roots and the habits the report asks for (angles on the diagram, no premature rounding, context in data comparisons), and closes on the report\'s warning that recent past papers are not the syllabus. It states honestly that our maths courses are not written only for National 5. Lesson family: an all-exam qualification where arithmetic without a calculator decides more than the hard topics.',
    requiredMentions: ['40 marks', 'basic number skills', 'two real and distinct roots', 'recent past papers'],
    sources: [
      { claim: 'National 5 Mathematics Course Specification, version 3.0: course codes, both question papers with marks and times, entry, notional hours, Numeracy certification, and the paper 1 skills.', url: 'https://www.sqa.org.uk/sqa/files_ccc/n5-course-spec-mathematics.pdf' },
      { claim: 'National 5 Mathematics course report 2025: entries, grade distribution and minimum marks, question-by-question performance, and advice for future candidates.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2025-n5-course-report-mathematics.pdf' }
    ],
    rejectedClaims: [
      'Grade boundaries as targets: 2025 figures described as 2025 only.',
      'Any percentage computed from the published grade table: printed as published, since the report says no rounding was applied but we add nothing.',
      'A course written only for National 5: none exists; the page says so.',
      'Any promise about a grade, which we decline.'
    ]
  }
};
