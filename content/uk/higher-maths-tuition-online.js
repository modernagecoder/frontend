'use strict';
// Higher Maths tuition online (ag- maths door, Scotland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (sqa.org.uk PDFs via curl + PyMuPDF):
//  - Higher Mathematics Course Specification, course code C847 76, course assessment code X847 76, SCQF
//    level 6 (24 SCQF credit points), valid from session 2023-24. Verbatim: "Question paper 1
//    (non-calculator) 55 1 hour and 15 minutes"; "Question paper 2 65 1 hour and 30 minutes"; "The notional
//    length of time for candidates to complete the course is 160 hours"; entry: "Candidates should have
//    achieved the National 5 Mathematics course or equivalent".
//  - Course report 2025, Higher Mathematics. Verbatim: resulted entries 18,517 in 2024 and 19,767 in 2025
//    (the PDF text carries a stray character before the 2025 figure); A 8,144, 41.2%, minimum mark 86; B
//    73; C 60; D 47; No award 15.7%; "We have not applied rounding"; "Many candidates missed out on marks
//    due to numerical inaccuracies in their responses."; "The inconsistencies meant that these examples did
//    not gain full marks"; "Each line of working should follow logically from the line above."; "statements
//    that are inconsistent from line to line do not gain full marks"; "Maintain and practise basic numerical
//    skills regularly, particularly fractions and negative numbers."; "Encourage candidates to score out
//    working that does not form part of their final response"; "Provide opportunities for candidates to
//    attempt more challenging and novel questions under exam conditions."; question comments summarised.
// Spine: every line must follow from the one above. Higher Maths marks the route as well as the
// destination: in 2025 correct factorised answers lost marks because the lines leading to them were
// inconsistent. Distinct from National 5 (forty marks without a calculator) and Advanced Higher (the
// words of a proof are marks).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'HIGHER MATHS', blurb: 'In 2025, correct answers lost marks because the lines leading to them did not follow. Higher marks the route, not just the answer.' },
  slug: 'higher-maths-tuition-online',
  code: 'hgm',
  accent: '#3B0F57',
  accentRationale: 'Higher Maths: a deep aubergine from the solver (12.24:1 on every paper tint, dE 10.7 from the nearest used accent), darker and redder than the Higher Computing violet so the two Higher pages stay apart',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Higher Maths tuition online',
  title: 'Higher Maths Tuition Online | Every Line Must Follow',
  description: 'Higher Maths tuition online: in 2025 correct answers lost marks when the working did not follow line by line. The two papers, the notation, and how we prepare.',
  ogDescription: 'Higher Maths marks the route as well as the answer. In 2025, correct factorised forms lost marks because the lines before them were inconsistent.',
  twitterDescription: 'Higher Maths tuition: consistent working, exact notation, nature tables and the habits the 2025 course report asked for.',
  pageName: 'Higher Maths Tuition Online',
  webPageDescription: 'Live online tuition for Higher Mathematics in Scotland, built from the course specification and the 2025 course report.',
  courseDescription: 'Live online teaching for Higher Mathematics candidates: calculus, logarithms, trigonometry and the wave function, vectors, circles, and working that follows line by line.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Higher Maths',
  navLinks: [
    { href: '#papers', label: 'The papers' },
    { href: '#lines', label: 'Line by line' },
    { href: '#notation', label: 'Notation' },
    { href: '#habits', label: 'Exam habits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Scotland &middot; Higher &middot; S5 and S6',
  h1: 'Higher Maths tuition online',
  lede: 'In the 2025 Higher Maths paper, a number of candidates factorised a polynomial and reached the right answer, and still did not get full marks. The course report explains why: the lines of working that led there contradicted each other along the way. "The inconsistencies meant that these examples did not gain full marks". That is the character of Higher. National 5 rewards getting the method and the number right; Higher also marks whether each step genuinely follows from the one before, whether the notation is exact, and whether the conclusion says precisely what was shown. This page sets out the two papers, where the 2025 candidates lost marks on the route rather than the destination, and how we teach working that holds up.',
  secondaryCta: { href: '#lines', label: 'Line by line' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for Higher Maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Taken from the Higher specification and the 2025 course report',
  spec: [
    ['Course', 'Higher Mathematics C847 76'],
    ['Paper 1', 'No calculator, 55 marks, 1 hour 15 minutes'],
    ['Paper 2', 'Calculator, 65 marks, 1 hour 30 minutes'],
    ['Coursework', 'None'],
    ['Entries in 2025', '19,767 resulted'],
    ['Entry', 'National 5 Mathematics or equivalent'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Two exam papers make up the whole of Higher Mathematics. The first, 55 marks in 1 hour 15 minutes, allows no calculator; the second, 65 marks in 1 hour 30 minutes, does. Nothing is assessed in class, and most candidates arrive from National 5 Mathematics. The 2025 diet produced 19,767 results, and the course report that followed said many lost marks to numerical inaccuracy, and that working which did not follow logically from line to line could not gain full marks even when the final answer was right. It also flagged notation such as dx and the constant of integration, nature tables, the wave function, vector pathways and conclusions about collinearity. Modern Age Coders teaches Higher Maths live, with working checked line by line, notation treated as part of the answer, and practice on novel questions under exam timing. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Higher Maths',
    lede: 'These courses serve several curricula, and we teach the Higher specification through them. Each card opens a syllabus.',
    items: [
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'HM / 01', title: 'A Level Maths', note: 'Differentiation, integration, logarithms, radians and vectors, the core of Higher at a similar depth.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'HM / 02', title: 'High School Mathematics', note: 'For students strengthening algebra and functions before the calculus arrives.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'HM / 03', title: 'IB Mathematics', note: 'Rigorous working and notation, useful for students aiming at Advanced Higher next.' }
    ]
  },

  sections: [
    {
      id: 'papers', tint: 'tint', eyebrow: 'The papers',
      h2: 'Two papers, 120 marks, no coursework',
      lede: 'From the Higher Mathematics Course Specification, valid from session 2023 to 24.',
      body: [
        { kind: 'table', caption: 'The Higher papers side by side', head: ['Paper', 'Marks', 'Length', 'Calculator'], rows: [
          ['Paper 1', '55', '1 hour 15 minutes', 'No'],
          ['Paper 2', '65', '1 hour 30 minutes', 'Yes']
        ] },
        { kind: 'p', html: 'The specification suggests about 160 hours and expects candidates to have achieved National 5 Mathematics or equivalent. Without a calculator, the harder mathematics has to be done by hand: in 2025, paper 1 included a tangent, an indefinite integral, logarithms, the double-angle formula, a differential equation and a cubic with its stationary points.' },
        { kind: 'table', mt: true, caption: 'The 2025 Higher results', head: ['Figure', 'As published for 2025'], rows: [
          ['Resulted entries', '19,767 (18,517 in 2024)'],
          ['Grade A', '41.2 per cent, minimum mark 86 of 120'],
          ['Grade C minimum mark', '60 of 120'],
          ['No award', '15.7 per cent']
        ] },
        { kind: 'p', html: 'The report notes that two questions were less demanding than expected and that this was taken into account in setting the boundaries. Boundaries move each year, so the figures above describe 2025 and nothing more.' },
        { kind: 'source', html: 'Figures and rules come from two sqa.org.uk documents: the Higher Mathematics Course Specification and the 2025 Higher Mathematics course report. Since 1 February 2026 the award has belonged to Qualifications Scotland, which keeps those documents in force.' }
      ]
    },
    {
      id: 'lines', tint: 'deep', eyebrow: 'Line by line',
      h2: 'Every line must follow from the one above',
      lede: 'The report\'s most distinctive message about Higher, and the one students find hardest to believe until they see it marked.',
      body: [
        { kind: 'p', html: 'In the 2025 non-calculator paper, question 7 was a polynomial, and part (b) involved factorising it. The report prints examples of working it describes as common: chains in which one line did not equal the next, a bracket appearing and disappearing, a sign changing without reason. Those examples reached the correct factorised form, and the verdict was: "The inconsistencies meant that these examples did not gain full marks". Its advice for teaching is equally direct: "Each line of working should follow logically from the line above."' },
        { kind: 'table', mt: true, caption: 'Where consistency failed in 2025', head: ['Question topic', 'What went wrong'], rows: [
          ['Factorising a polynomial', 'Lines that did not equal each other, even when the final factors were right'],
          ['Completing the square', 'Numeric terms handled loosely, producing inconsistent lines'],
          ['Simultaneous equations', 'Terms scored out mid-working, leaving lines that no longer matched'],
          ['Inverse function', 'Several different expressions each labelled y =, which could not all be true'],
          ['Exponential equation', 'Many inconsistent lines converting between exponential and logarithmic form']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Write it as a chain', p: 'Each line should be equal to the last, or clearly linked to it. If a step is skipped, the next line must still be true on its own.' },
          { h3: 'Correct answers are not enough', p: 'The report is explicit that statements inconsistent from line to line do not gain full marks, whatever the final line says. The route is marked.' },
          { h3: 'Tidy as you go', p: 'Working that is not part of the answer should be scored out, including in the additional space at the back, so the marker reads only the chain you intend.' }
        ] },
        { kind: 'p', html: 'This is also where handwriting matters. The report records candidates losing marks to transcription errors between 3 and 5, 4 and y, and 1 and 7, copying their own working wrongly from one line to the next. Clear, unhurried writing is part of consistent working, not a separate nicety.' }
      ]
    },
    {
      id: 'notation', tint: '', eyebrow: 'Notation',
      h2: 'Notation is part of the answer',
      lede: 'Several 2025 marks were lost on symbols, labels and brackets rather than on the mathematics.',
      body: [
        { kind: 'table', caption: 'Notation slips in the 2025 report', head: ['Area', 'The slip'], rows: [
          ['Derivatives', 'Lines labelled y = when they were derivatives, dy/dx ='],
          ['Integrals', 'No dx in a definite integral; no constant of integration where it belonged, which invalidated working in a differential equation'],
          ['Brackets', 'Missing brackets when substituting into the discriminant or when evaluating a definite integral'],
          ['Inequalities', 'Two separate regions written as one inequality'],
          ['Angles', 'Degrees used throughout a radian question, or degrees and radians mixed in one line'],
          ['Collinearity', 'Conclusions implying the points were parallel or the lines collinear, instead of the points'],
          ['Nature tables', 'Tables that did not meet the minimum requirements, or were labelled incorrectly']
        ] },
        { kind: 'p', html: 'Collinearity is a good example of how precise Higher is. Few candidates in 2025 communicated their conclusion unambiguously. A correct conclusion states that the vectors are parallel and share a point, so the points are collinear; saying the points are parallel, or the lines collinear, confuses objects the mark scheme keeps apart.' },
        { kind: 'two', mt: true,
          leftH3: 'Nature tables',
          left: [
            'The report asks teachers to encourage full nature tables when determining stationary points and confirming a maximum or minimum. In 2025 some solutions fell short of the minimum requirements, with numerical errors evaluating the derivative near the point or wrong labels.',
            'We teach one standard layout and use it every time, so it never has to be improvised in the exam.'
          ],
          rightH3: 'The formulae list',
          right: [
            'Some candidates did not use the double-angle and addition formulae provided, and a few invented identities that are false, such as treating the sine of a difference as a difference of sines.',
            'Knowing what is on the formulae list, and trusting it, saves marks and time.'
          ] }
      ]
    },
    {
      id: 'habits', tint: 'tint', eyebrow: 'Exam habits',
      h2: 'Habits the report asked for',
      lede: 'Beyond the working itself, the 2025 report listed practical habits that separate strong scripts.',
      body: [
        { kind: 'table', caption: 'From the report\'s advice to teachers', head: ['Habit', 'Why it matters'], rows: [
          ['Numerical care', '"Maintain and practise basic numerical skills regularly, particularly fractions and negative numbers." Many marks in paper 1 went to numerical inaccuracy'],
          ['Common factors first', 'Candidates who did not take out a common factor made factorisation harder, and dividing by cos x lost solutions in a trigonometric equation'],
          ['Efficient calculator use', 'In paper 2, many wrote extra lines of working instead of letting the calculator do the arithmetic'],
          ['Vector pathways', 'Many gained no marks determining a pathway in three dimensions, one of the weakest areas in the report'],
          ['Novel questions', '"Provide opportunities for candidates to attempt more challenging and novel questions under exam conditions."']
        ] },
        { kind: 'p', html: 'The final circle question in 2025 was designed to be demanding, and the few who solved it used a remarkable range of approaches: geometry, algebra, similarity, stepping out, gradients, ratios and vectors. Higher rewards flexible thinking on unfamiliar problems, and that only grows from practising problems that are genuinely new rather than repeating familiar ones.' },
        { kind: 'two', mt: true,
          leftH3: 'How we teach it',
          left: [
            'Every piece of written working is read line by line, and any line that does not follow from the last is marked as it would be in the exam.',
            'Notation, nature tables and conclusions are practised in fixed forms until they are automatic, then tested on novel questions under exam timing.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'That our courses were written for Higher alone. They were built for more than one curriculum, and Higher is taught through them against its own specification.',
            'That any grade is assured. Boundaries move, and the report shows how many marks depend on care rather than knowledge.'
          ] },
        { kind: 'p', html: 'Coming from National 5, <a class="ag-inline-link" href="/national-5-maths-tuition-online">the National 5 Maths page</a> covers the non-calculator foundations. Going further, <a class="ag-inline-link" href="/advanced-higher-maths-tuition-online">the Advanced Higher Maths page</a> covers proof and the rest of the S6 course. Strong problem solvers may enjoy <a class="ag-inline-link" href="/maths-olympiad-training-uk">olympiad training</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through S5',
    lede: 'Placement depends on how securely a student writes working, not only on what they know.',
    table: { caption: 'What a Higher Maths candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Algebra and functions', 'Start of S5', 'Factorising, completing the square, composite and inverse functions, logarithms, with every line consistent'],
      ['2. Calculus', 'Autumn', 'Differentiation with the chain rule, integration with the constant, areas, stationary points with full nature tables'],
      ['3. Geometry and trigonometry', 'Winter', 'Circles, vectors in three dimensions and pathways, radians, exact values, the wave function'],
      ['4. Exam habits', 'Spring', 'Precise conclusions, efficient calculator use, novel questions under timing']
    ] },
    left: { h3: 'Rung one sets the standard', ps: [
      'Consistent algebra is learned early or not at all. Every later topic depends on it.',
      'Students who also code may like the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>, where the same habit of exactness applies.'
    ] },
    right: { h3: 'Rung three has the weak spots', ps: [
      'Vector pathways and the wave function were among the hardest areas in 2025.',
      'We slow down while the diet runs and pick up again for Advanced Higher once it ends.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for S5 and S6',
    lede: 'Arranged by where they help. The first lesson decides the order.',
    bands: [
      { num: 'I', h3: 'Higher content', sub: 'Calculus, functions and geometry', courses: [
        { code: 'UK / HM1 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure mathematics at Higher depth and beyond.' },
        { code: 'UK / HM1 / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Algebra and functions made solid.' },
        { code: 'UK / HM1 / 03', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB mathematics', blurb: 'Careful notation and rigorous working.' }
      ] },
      { num: 'II', h3: 'Towards Advanced Higher', sub: 'S6 and university', courses: [
        { code: 'UK / HM2 / 01', slug: 'college-mathematics-complete-masterclass', title: 'University mathematics', blurb: 'Matrices, series and differential equations ahead of time.' },
        { code: 'UK / HM2 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Novel problems and proof, for flexible thinkers.' },
        { code: 'UK / HM2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'For students heading to Advanced Higher Statistics.' }
      ] },
      { num: 'III', h3: 'Maths with code', sub: 'For students who program', courses: [
        { code: 'UK / HM3 / 01', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Mathematical ideas tested by writing programs.' },
        { code: 'UK / HM3 / 02', slug: 'data-analytics-mathematics-masterclass', title: 'Mathematics for data analytics', blurb: 'Where Higher maths meets real data.' },
        { code: 'UK / HM3 / 03', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python, zero to advanced', blurb: 'For students who want to compute as well as calculate.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Working that holds, line after line',
    lede: 'Teachers work from India on a clock that never shifts, putting Scotland four and a half hours behind in summer and five and a half in winter. Times are agreed in UK hours.',
    slots: [
      { time: 'After school', l: 'The common choice in S5 and S6.' },
      { time: 'Evening', l: 'For students with free periods or jobs.' },
      { time: 'Weekend', l: 'Long enough for a full paper and its marking.' }
    ],
    cells: [
      { h3: 'Line-by-line marking', p: 'Written working checked for consistency at every step, as the marking instructions do.' },
      { h3: 'Fixed forms', p: 'One layout for nature tables, one for collinearity conclusions, used every time.' },
      { h3: 'Notation drills', p: 'dx, the constant, brackets and radians, until leaving them out feels wrong.' },
      { h3: 'Novel questions', p: 'Unfamiliar problems under exam timing, as the report recommends.' },
      { h3: 'Calculator sense', p: 'In paper 2 practice, the calculator used for what it does well, with working still recorded.' },
      { h3: 'Five to ten per group', p: 'S5 and S6 students at one rung, reviewing each other\'s chains of working.' }
    ]
  },

  projectsH2: 'What our students have made in class',
  projectsLede: 'Four projects from lessons, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' reviews from Google, unaltered.',

  fees: {
    h2: 'Fees for Higher Maths lessons',
    lede: 'We charge a monthly fee in US dollars, identical for every family outside India. There is no charge for a first lesson, and no invoice until a course and a weekly slot have been agreed.',
    free: ['A lesson on real Higher questions', 'An honest read of how secure the working is', 'We ask only for a phone number'],
    group: ['Five to ten students on one rung', 'The same teacher across S5', 'Working marked line by line each week', 'Timed papers in spring'],
    one: ['A teacher for one student', 'A plan built back from the diet', 'Suits a student repairing algebra habits']
  },

  faq: {
    eyebrow: 'Questions about Higher Maths',
    h2: 'What S5 students and parents ask',
    items: [
      { q: 'How is Higher Maths assessed?', a: 'By two question papers only: paper 1, without a calculator, worth 55 marks in 1 hour 15 minutes, and paper 2, with a calculator, worth 65 marks in 1 hour 30 minutes.' },
      { q: 'Can a correct answer lose marks?', a: 'Yes. The 2025 report describes correct factorised answers that did not gain full marks because the lines of working before them were inconsistent. Each line should follow logically from the one above.' },
      { q: 'What did candidates find hardest in 2025?', a: 'Vector pathways in three dimensions, the wave function and its phase change, sketching a cubic from given conditions, the chain rule with a constant, and stating collinearity conclusions precisely.' },
      { q: 'Why do nature tables matter?', a: 'They are the accepted way to justify the nature of a stationary point. In 2025 some solutions fell short of the minimum requirements or contained labelling and numerical errors.' },
      { q: 'Do I need to use the formulae list?', a: 'Yes, where it helps. The report notes candidates who did not use the double-angle and addition formulae provided, and some who invented incorrect identities instead.' },
      { q: 'What mark do I need for an A?', a: 'There is no fixed figure. The 2025 minimum for an A was 86 of 120 and for a C 60, set after two questions proved easier than intended; the next diet will differ.' },
      { q: 'How many students take Higher Maths?', a: 'In 2025, 19,767 candidates received a result, up from 18,517 in 2024.' },
      { q: 'Who awards Higher Maths now?', a: 'Qualifications Scotland, since it took over from SQA on 1 February 2026. The course documents written under SQA stay in force.' },
      { q: 'Is your course written just for Higher?', a: 'No. The courses we use cover more than one curriculum, and the Higher specification is taught through them topic by topic.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that, lessons are one monthly charge in US dollars, less for a group place than for one to one, both listed in the fees section, and nothing is ever taken up front.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages for Scotland',
    lede: 'The levels either side, and where strong mathematicians go next.',
    items: [
      { href: '/national-5-maths-tuition-online', label: 'National 5 Maths tuition', p: 'The level below, and its non-calculator foundations.' },
      { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher Maths tuition', p: 'The S6 course, where proof enters properly.' },
      { href: '/higher-computing-science-help', label: 'Higher Computing Science', p: 'A natural partner subject for mathematicians.' },
      { href: '/scottish-mathematical-challenge-practice', label: 'Scottish Mathematical Challenge', p: 'Competition puzzles set for Scottish pupils.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'The UK competition ladder.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub for all our pages.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits you. The lesson looks at a real Higher question and how the working is set out, and ends with a plan.',
    readFirst: 'Want to look around first? Every <a class="ag-inline-link" href="/courses">course page</a> lists what it covers, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out who our method suits, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> is there for students who code too.',
    note: 'WhatsApp is the quickest option and free from a UK mobile. Messages land at our office in India, so expect a number starting +91.',
    formNote: 'No card or contract; a single reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Scottish maths', links: [
        { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' },
        { href: '/advanced-higher-maths-tuition-online', label: 'Advanced Higher Maths' },
        { href: '/higher-computing-science-help', label: 'Higher Computing Science' },
        { href: '/coding-and-ai-classes-in-scotland', label: 'The Scottish system' }
      ] },
      { h4: 'Elsewhere', links: [
        { href: '/scottish-mathematical-challenge-practice', label: 'Maths challenge practice' },
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'Every course' }
      ] }
    ],
    bottomRight: 'Higher Maths, taught live on UK time'
  },

  personalityCss: `
.ag-root.ag-hgm .ag-hero h1 { letter-spacing: -0.027em; font-weight: 720; }
.ag-root.ag-hgm .ag-capsule { border-left-width: 4px; border-top: 2px solid var(--ag-accent); }
.ag-root.ag-hgm .ag-section-head h2 { max-width: 25ch; }
.ag-root.ag-hgm .ag-table caption { text-align: left; font-weight: 690; }
.ag-root.ag-hgm .ag-table th:first-child { width: 25%; }
.ag-root.ag-hgm .ag-band-head h3 { letter-spacing: -0.011em; }
`,

  mustMention: ['55 marks', '65 marks', '19,767', 'follow logically from the line above', 'nature tables', 'constant of integration', 'collinear', 'wave function', 'vector pathways', 'C847 76'],

  dossier: {
    curriculumAuthority: 'Scotland, Higher Mathematics. Course Specification, course code C847 76, course assessment code X847 76, SCQF level 6 (24 SCQF credit points), valid from session 2023-24: "Question paper 1 (non-calculator) 55 1 hour and 15 minutes"; "Question paper 2 65 1 hour and 30 minutes"; notional 160 hours; entry National 5 Mathematics or equivalent. Course report 2025: resulted entries 18,517 (2024) and 19,767 (2025); A 41.2% minimum 86; C minimum 60; No award 15.7%; "We have not applied rounding"; "Many candidates missed out on marks due to numerical inaccuracies in their responses."; "The inconsistencies meant that these examples did not gain full marks"; "Each line of working should follow logically from the line above."; "statements that are inconsistent from line to line do not gain full marks"; "Maintain and practise basic numerical skills regularly, particularly fractions and negative numbers."; "Encourage candidates to score out working that does not form part of their final response"; "Provide opportunities for candidates to attempt more challenging and novel questions under exam conditions."; question-level comments on dy/dx labelling, constants of integration, dx, brackets, inequalities, radians, collinearity, nature tables, vector pathways, the wave function, the chain rule, common factors, dividing by cos x, transcription errors, and the final circle question.',
    localProject: 'Every line must follow from the one above. Higher Mathematics marks the route as well as the answer: the 2025 course report describes correct factorised forms that lost marks because the preceding lines contradicted each other, and advises that each line of working follow logically from the last. The page sets out the two papers and the 2025 results as published, lists where consistency failed, treats notation as part of the answer (dy/dx labels, dx, the constant of integration, brackets, radians, collinearity wording, nature tables), and closes with the report\'s habits: numerical care, common factors, efficient calculator use, vector pathways and novel questions. It states honestly that our courses are not written only for Higher. Lesson family: an exam that marks the chain of reasoning, not just its last link.',
    requiredMentions: ['follow logically from the line above', 'nature tables', 'constant of integration', '19,767'],
    sources: [
      { claim: 'Higher Mathematics Course Specification: course codes, both papers with marks and times, notional hours and entry.', url: 'https://www.sqa.org.uk/sqa/files_ccc/h-course-spec-mathematics.pdf' },
      { claim: 'Higher Mathematics course report 2025: entries, grade distribution and minimum marks, question-by-question performance, and advice to teachers.', url: 'https://www.sqa.org.uk/sqa/files_ccc/2025-h-course-report-mathematics.pdf' }
    ],
    rejectedClaims: [
      'Grade boundaries as targets: 2025 figures described as 2025 only.',
      'The detailed algebra of the report\'s inconsistent examples: described, not reproduced, because the PDF text of the equations does not extract reliably.',
      'A course written only for Higher: none exists; the page says so.',
      'Any promise about a grade, which we decline.'
    ]
  }
};
