'use strict';
// CCEA GCSE Mathematics help (ag- maths door, Northern Ireland; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (CCEA PDFs via curl + PyMuPDF):
//  - CCEA GCSE Mathematics specification, from September 2017, Version 2 (8 June 2017). Verbatim:
//    "Students take two units, one from M1, M2, M3 or M4 and one from M5, M6, M7 or M8. To receive an award,
//    one of these must be a completion test."; M1 and M2 Foundation "External written examination with
//    calculator 1 hour 45 mins 45%"; M3 and M4 Higher "External written examination with calculator 2 hours
//    45%"; M5 and M6 Foundation Completion Test, Paper 1 without calculator 1 hour, Paper 2 with calculator 1
//    hour, 55%; M7 and M8 Higher Completion Test, papers of 1 hour 15 mins each, 55%; final grade ranges "M1
//    and M5 D–G", "M2 and M6 C*–G", "M3 and M7 B–E", "M4 and M8 A*–D" (restated without dashes on the page);
//    "Examinations for Units M1, M2, M3 and M4 take place at the same time, so candidates can take only one
//    examination."; "Students must take at least 40 percent of the assessment (based on unit weightings) at
//    the end of the course as terminal assessment."; nine grades "A* A B C* C D E F G"; Functional
//    Mathematics Level 1 through M1, Level 1 or Level 2 through M2; M6 includes converting "numbers from
//    decimal to binary (base 2)".
//  - CCEA GCSE Chief Examiner's Report, Mathematics, Summer Series 2025. Verbatim: "Where candidates had been
//    entered at the appropriate level, which was usually the case, they presented evidence of having been
//    very well prepared"; M71: "Some candidates with very high scores would be better suited to the M8
//    papers and those with very low scores to the M6 papers."; M81: "some candidates were clearly entered at
//    a level above their ability span"; M4: marks "ranged from 1 to 100"; M4 problem topics (bounds,
//    quadratic from a triangle's area, circle theorem reasoning, algebraic fractions, histograms and the
//    median); "Candidates should be reminded that if they leave multiple solutions to one question without
//    writing an answer in the answer line then the worst solution is marked."; estimation instructions
//    ignored; money notation; handwriting of 1 and 7, 0 and 6.
// Spine: the pathway sets the ceiling. CCEA GCSE Maths is two units chosen from eight, and each pairing has
// a fixed grade range, so the school's entry decision caps the grades available before a pupil sits
// anything. The 2025 report names candidates entered too high and too low.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'CCEA MATHS', blurb: 'Two units from eight, and each pairing fixes the grades available. In 2025 examiners named candidates entered too high and too low.' },
  slug: 'ccea-gcse-maths-help',
  code: 'ccm',
  accent: '#822517',
  accentRationale: 'CCEA maths: a deep brick red from the solver (7.66:1 on every paper tint, dE 8.1 from the nearest used accent), clearly apart from the indigo and plum of the two CCEA computing pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CCEA GCSE Maths help',
  title: 'CCEA GCSE Maths Help | M1 to M8, and Which Pathway',
  description: 'CCEA GCSE Maths help in Northern Ireland: two units from eight, and the pairing a school chooses fixes the grades on offer. What the 2025 report says about entry.',
  ogDescription: 'In CCEA GCSE Maths, the units a pupil is entered for decide which grades are possible. The 2025 report found some entered too high and some too low.',
  twitterDescription: 'CCEA GCSE Mathematics: the four pathways from M1 to M8, the C* grade, completion tests, and what examiners saw in 2025.',
  pageName: 'CCEA GCSE Maths Help',
  webPageDescription: 'Live online tuition for CCEA GCSE Mathematics in Northern Ireland, built from the specification and CCEA\'s 2025 Chief Examiner\'s report.',
  courseDescription: 'Live online teaching for CCEA GCSE Mathematics candidates at Foundation and Higher tier, from M1 to M8, including non-calculator completion papers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CCEA GCSE Maths',
  navLinks: [
    { href: '#pathways', label: 'The four pathways' },
    { href: '#entry', label: 'Entry level' },
    { href: '#papers', label: 'What examiners saw' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; CCEA GCSE &middot; Years 11 and 12',
  h1: 'CCEA GCSE Maths help',
  lede: 'CCEA\'s GCSE Mathematics works differently from the English boards. Every pupil sits exactly two units: one from M1, M2, M3 or M4, and one completion test from M5, M6, M7 or M8. Each pairing comes with a fixed range of grades. A pupil entered for M3 and M7 can be awarded a B and no higher; only M4 and M8 open the way to A and A*. So the most consequential decision in a Northern Irish pupil\'s maths GCSE is often made by the school, before any paper is sat. CCEA\'s 2025 Chief Examiner\'s report shows why it matters: of one Higher paper it wrote that "Some candidates with very high scores would be better suited to the M8 papers and those with very low scores to the M6 papers." This page explains the pathways, the C* grade, what the 2025 examiners saw, and how to prepare for whichever units a pupil is entered for.',
  secondaryCta: { href: '#pathways', label: 'The four pathways' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for CCEA GCSE Maths.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From CCEA\'s specification and 2025 Chief Examiner\'s report',
  spec: [
    ['Qualification', 'CCEA GCSE Mathematics'],
    ['Units sat', 'Two: one of M1 to M4, one of M5 to M8'],
    ['First unit', 'Calculator paper, 45 per cent'],
    ['Completion test', 'Non-calculator and calculator papers, 55 per cent'],
    ['Grades', 'A*, A, B, C*, C, D, E, F, G'],
    ['Pathway', 'Fixes the grades available'],
    ['Group', 'Five to ten at one stage'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CCEA GCSE Mathematics is assessed through two units. Each pupil takes one of M1, M2, M3 or M4, a calculator paper worth 45 per cent, and one completion test from M5, M6, M7 or M8, made up of a non-calculator paper and a calculator paper, worth 55 per cent. The pairings form four pathways with fixed grade ranges: M1 with M5 gives D to G; M2 with M6 gives C* to G; M3 with M7 gives B to E; and M4 with M8 gives A* to D. Northern Ireland uses nine grades, including C* between B and C. Foundation units M1 and M2 can also award Functional Mathematics. The 2025 Chief Examiner\'s report said most candidates were entered at the right level, but noted some who would have been better suited to a higher or a lower pathway. Modern Age Coders teaches CCEA GCSE Maths at both tiers, and helps families understand the pathway a pupil is on. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for CCEA GCSE Maths',
    lede: 'We teach the CCEA specification through courses that serve more than one curriculum. Each card opens its syllabus.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'CM / 01', title: 'GCSE Mathematics', note: 'Foundation and Higher content across number, algebra, geometry and statistics.' },
      { course: 'igcse-mathematics-mastery', code: 'CM / 02', title: 'IGCSE Mathematics', note: 'Extra algebra and geometry depth for pupils aiming at the M4 and M8 pathway.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'CM / 03', title: 'Lower Secondary Maths', note: 'For pupils rebuilding foundations before M1, M2 or a move up a pathway.' }
    ]
  },

  sections: [
    {
      id: 'pathways', tint: 'tint', eyebrow: 'The four pathways',
      h2: 'Two units, four pathways, four grade ranges',
      lede: 'From the CCEA GCSE Mathematics specification, version 2, for first teaching from September 2017.',
      body: [
        { kind: 'table', caption: 'The recommended pathways', head: ['Pathway', 'First unit (45 per cent)', 'Completion test (55 per cent)', 'Final grades available'], rows: [
          ['Foundation, option 1', 'M1: calculator, 1 hour 45 minutes', 'M5: non-calculator 1 hour, then calculator 1 hour', 'D to G'],
          ['Foundation, option 2', 'M2: calculator, 1 hour 45 minutes', 'M6: non-calculator 1 hour, then calculator 1 hour', 'C* to G'],
          ['Higher, option 1', 'M3: calculator, 2 hours', 'M7: non-calculator 1 hour 15 minutes, then calculator 1 hour 15 minutes', 'B to E'],
          ['Higher, option 2', 'M4: calculator, 2 hours', 'M8: non-calculator 1 hour 15 minutes, then calculator 1 hour 15 minutes', 'A* to D']
        ] },
        { kind: 'p', html: 'The first units, M1 to M4, are sat at the same time, so a pupil can enter only one of them in any series. The completion tests are timetabled together on a different day, with the calculator paper straight after the non-calculator one. At least 40 per cent of the assessment must be taken at the end of the course, so the completion test is usually the final exam.' },
        { kind: 'two', mt: true,
          leftH3: 'The C* grade',
          left: [
            'Northern Ireland reports GCSE results on nine grades: A*, A, B, C*, C, D, E, F and G. C* sits between B and C.',
            'It matters here because the M2 and M6 Foundation pathway reaches C* at the top, so a strong Foundation pupil is not capped at C.'
          ],
          rightH3: 'Functional Mathematics',
          right: [
            'The Foundation units also award Functional Mathematics: Level 1 through M1, and Level 1 or Level 2 through M2. A Level 2 appears as an endorsement on the GCSE certificate.',
            'It is a practical qualification in its own right, which some pupils and employers value.'
          ] },
        { kind: 'source', html: 'Source: the CCEA GCSE Mathematics specification and the Chief Examiner\'s Report, Mathematics, Summer Series 2025, each downloadable from the <a class="ag-inline-link" href="https://ccea.org.uk/key-stage-4/gcse/subjects/gcse-mathematics-2017" rel="noopener" target="_blank">CCEA GCSE Mathematics pages</a>.' }
      ]
    },
    {
      id: 'entry', tint: 'deep', eyebrow: 'Entry level',
      h2: 'The pathway sets the ceiling',
      lede: 'The single decision with the biggest effect on the grade, and the one families are least often told about.',
      body: [
        { kind: 'p', html: 'Because each pairing has a fixed grade range, the pathway works like a ceiling and a floor. A pupil on M3 and M7 cannot be awarded an A however well they do, and a pupil on M4 and M8 who struggles may fall below the range. The 2025 report was generally positive about entries, "Where candidates had been entered at the appropriate level, which was usually the case", but it named both kinds of mismatch.' },
        { kind: 'table', mt: true, caption: 'What the 2025 examiners said about entry', head: ['Paper', 'The comment'], rows: [
          ['M71, Higher non-calculator', '"Some candidates with very high scores would be better suited to the M8 papers and those with very low scores to the M6 papers."'],
          ['M81, Higher non-calculator', '"some candidates were clearly entered at a level above their ability span"'],
          ['M4, Higher', 'Marks on the papers the supervising examiner marked ranged from 1 to 100'],
          ['M51, Foundation non-calculator', 'Marks from single figures to the forties, showing candidates of very different abilities entered for the same paper']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions worth asking the school',
          left: [
            'Which pathway is my child on, and which grades does it allow? When was that decided, and on what evidence?',
            'If my child\'s results improve, is there a point at which a move up to M4 and M8, or M2 and M6, is still possible?'
          ],
          rightH3: 'Why a move is not always right',
          right: [
            'A higher pathway demands harder content and offers a lower floor. A pupil entered too high can end with a worse grade than the lower pathway would have given.',
            'The right answer depends on secure performance on the harder content, which is what our first lesson tries to measure honestly.'
          ] }
      ]
    },
    {
      id: 'papers', tint: '', eyebrow: 'What examiners saw',
      h2: 'Where the 2025 candidates lost marks',
      lede: 'From the Chief Examiner\'s report across the eight units and their papers.',
      body: [
        { kind: 'table', caption: 'Recurring issues in 2025', head: ['Issue', 'What the report saw'], rows: [
          ['Following instructions', 'Asked to estimate, some candidates calculated exact answers on a calculator and received no marks'],
          ['Money notation', 'Answers to one decimal place for money, or 441 pence written as if it were pounds'],
          ['Multiple answers', 'Where more than one solution is left without a clear answer, the worst solution is marked'],
          ['Handwriting', 'Digits such as 1 and 7, or 0 and 6, sometimes indistinguishable'],
          ['Higher algebra', 'Brackets in algebra, and simplifying and adding algebraic fractions, caused problems on M4'],
          ['Higher reasoning', 'Circle theorem reasoning, bounds, histograms and estimating the median stretched even able candidates']
        ] },
        { kind: 'p', html: 'The multiple-answer rule is worth learning by heart. The M4 report states: "Candidates should be reminded that if they leave multiple solutions to one question without writing an answer in the answer line then the worst solution is marked." A pupil who tries two methods and leaves both is marked on the weaker one. Crossing out the abandoned attempt, or writing the chosen answer on the line, protects the better work.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Show the working', p: 'Examiners repeatedly credited method marks where the final answer was wrong. Working is not optional insurance; it is where many marks come from.' },
          { h3: 'Read the instruction word', p: 'Estimate means round and approximate first. Show means demonstrate the result, not just state it. The 2025 papers withheld marks for ignoring both.' },
          { h3: 'Money as money', p: 'Two decimal places for pounds and pence, and a sense check that 4.41 is not 441. Foundation papers in particular lost marks here.' }
        ] }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Preparing',
      h2: 'Preparing for the units a pupil is actually sitting',
      lede: 'Content differs by unit, so preparation should follow the pathway.',
      body: [
        { kind: 'table', caption: 'What each stage asks for', head: ['Stage', 'Focus', 'Practice'], rows: [
          ['First unit, M1 to M4', 'A long calculator paper across the unit\'s content', 'Full timed papers at the right unit, with efficient calculator use'],
          ['Completion test, paper 1', 'Non-calculator number and algebra', 'Short daily practice by hand: fractions, percentages, estimation'],
          ['Completion test, paper 2', 'Calculator questions, straight after paper 1', 'Back-to-back timed practice, since the papers run consecutively'],
          ['Moving up a pathway', 'The extra content of the higher unit', 'Secure the new topics before any change of entry is discussed']
        ] },
        { kind: 'p', html: 'Some units contain content pupils elsewhere never meet. The Foundation completion test M6, for example, includes converting numbers between decimal and binary, which pupils who also study computing will recognise. Past papers for each unit are on CCEA\'s site, and practising the exact unit a pupil is entered for, rather than generic GCSE questions, is the most efficient preparation.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the content of the pupil\'s own units, at the right tier, with past papers from CCEA for each unit.',
            'Give families a frank view of whether a pupil is secure on their pathway, or ready for the next one.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'The authority to change a school\'s entry, or certainty about which pathway is right. That is a decision for the school, informed by evidence.',
            'A course written only for CCEA, or a guaranteed grade. We teach the specification through broader courses.'
          ] },
        { kind: 'p', html: 'For computing, see <a class="ag-inline-link" href="/ccea-gcse-digital-technology-programming-help">the CCEA Digital Technology programming page</a>. For younger children, <a class="ag-inline-link" href="/transfer-test-maths-practice-northern-ireland">the transfer test maths page</a> covers the Year 7 test, and <a class="ag-inline-link" href="/coding-and-ai-classes-in-northern-ireland">the Northern Ireland page</a> the wider system.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs across the two GCSE years',
    lede: 'Placement follows secure performance on a pupil\'s own units, and on the next pathway up.',
    table: { caption: 'What a CCEA GCSE Maths candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Secure on the current units', 'Year 11', 'The content of the entered first unit and completion test, done accurately'],
      ['2. Non-calculator fluency', 'Year 11', 'Number, fractions, percentages and estimation by hand, for paper 1'],
      ['3. Exam habits', 'Before the first unit', 'Working shown, instructions followed, one clear answer per question, money written properly'],
      ['4. The next pathway, if suitable', 'Year 12', 'The extra content of the higher unit secured, with evidence to discuss with the school']
    ] },
    left: { h3: 'Rung three is quick', ps: [
      'The report\'s habits take weeks to build and protect marks on every paper.',
      'Pupils who also code may like the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Rung four needs evidence', ps: [
      'A move up is only sensible when the harder content is secure. We say honestly when it is not.',
      'Lessons lighten around each series.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Northern Irish GCSE pupils',
    lede: 'By tier and purpose. The free lesson sets the starting point.',
    bands: [
      { num: 'I', h3: 'GCSE content', sub: 'Foundation and Higher', courses: [
        { code: 'UK / CM1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Every strand, at Foundation and at Higher.' },
        { code: 'UK / CM1 / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Harder algebra and geometry for M4 and M8 candidates.' },
        { code: 'UK / CM1 / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Gaps from earlier years closed before M1 or M2.' }
      ] },
      { num: 'II', h3: 'Number skills', sub: 'For the non-calculator papers', courses: [
        { code: 'UK / CM2 / 01', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, reliable number facts for the non-calculator papers.' },
        { code: 'UK / CM2 / 02', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation techniques for pupils who enjoy number patterns.' },
        { code: 'UK / CM2 / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Histograms, medians and probability, which stretched 2025 Higher candidates.' }
      ] },
      { num: 'III', h3: 'Beyond GCSE', sub: 'For confident pupils', courses: [
        { code: 'UK / CM3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'The next step after an M4 and M8 pathway.' },
        { code: 'UK / CM3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Reasoning problems, like the circle theorem questions that stretched M4.' },
        { code: 'UK / CM3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Number patterns explored in code as well as on paper.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Taught to the pupil\'s own units',
    lede: 'Our teachers are in India, which never changes its clocks, so Northern Ireland is four and a half hours behind in summer and five and a half in winter. Lessons are timed in UK hours.',
    slots: [
      { time: 'After school', l: 'The usual slot in Years 11 and 12.' },
      { time: 'Evening', l: 'Around sport, music or jobs.' },
      { time: 'Saturday', l: 'Room for a full paper under timing.' }
    ],
    cells: [
      { h3: 'Unit-specific papers', p: 'Practice from CCEA past papers for the exact units a pupil is entered for.' },
      { h3: 'Back-to-back timing', p: 'Completion papers practised consecutively, as they are sat.' },
      { h3: 'One clear answer', p: 'Abandoned attempts crossed out, so the better work is the one marked.' },
      { h3: 'Instruction words', p: 'Estimate, show and explain treated as instructions, never as decoration.' },
      { h3: 'Honest placement', p: 'A clear view of whether a pupil is secure on their pathway or ready for the next.' },
      { h3: 'Small groups', p: 'Five to ten pupils at one rung, on the same pathway.' }
    ]
  },

  projectsH2: 'Projects our students made in class',
  projectsLede: 'A handful of things students built during ordinary lessons, nothing assessed. The rest live in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' Google reviews, as posted.',

  fees: {
    h2: 'Fees for CCEA GCSE maths lessons',
    lede: 'One monthly fee in US dollars, at the rate all families outside India pay. The first lesson is free; we bill only once a course and a weekly time are in place.',
    free: ['A lesson on the pupil\'s own CCEA units', 'An honest view of the pathway', 'A phone number is enough to book'],
    group: ['Five to ten pupils on one pathway', 'The same teacher through Years 11 and 12', 'Unit-specific past papers weekly', 'Lighter weeks around each series'],
    one: ['A teacher for one pupil', 'Planned around the pupil\'s units and dates', 'Suits a pupil hoping to move up a pathway']
  },

  faq: {
    eyebrow: 'Questions about CCEA GCSE Maths',
    h2: 'What families in Northern Ireland ask',
    items: [
      { q: 'How is CCEA GCSE Maths assessed?', a: 'Through two units: one of M1, M2, M3 or M4, a calculator paper worth 45 per cent, and one completion test from M5, M6, M7 or M8, a non-calculator paper followed by a calculator paper, worth 55 per cent.' },
      { q: 'Which grades can my child get?', a: 'It depends on the pairing. M1 with M5 allows D to G, M2 with M6 allows C* to G, M3 with M7 allows B to E, and M4 with M8 allows A* to D.' },
      { q: 'What is a C*?', a: 'Northern Ireland uses nine GCSE grades: A*, A, B, C*, C, D, E, F and G. C* sits between B and C.' },
      { q: 'Can a pupil on M3 and M7 get an A?', a: 'No. That pairing allows grades B to E. Only the M4 and M8 pairing allows A and A*.' },
      { q: 'Who decides the pathway?', a: 'The school enters pupils for units. The 2025 Chief Examiner\'s report said most were entered at the right level, but noted some who would have been better suited to a higher or lower pathway.' },
      { q: 'Can a pupil sit more than one of M1 to M4?', a: 'Not in the same series. Those four units are examined at the same time, so a pupil can enter only one of them in each session.' },
      { q: 'What happens if I leave two answers?', a: 'The report reminds candidates that if more than one solution is left without a clear answer on the answer line, the worst solution is marked. Cross out the attempt you do not want.' },
      { q: 'What is Functional Mathematics?', a: 'A practical qualification awarded through the Foundation units: Level 1 through M1, and Level 1 or Level 2 through M2. A Level 2 is endorsed on the GCSE certificate.' },
      { q: 'Is your course written just for CCEA?', a: 'No. We teach the CCEA specification through courses built for more than one curriculum, using CCEA\'s past papers for each unit.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Then one monthly fee in US dollars, less for a group place than one to one, as listed in the fees section, and nothing is paid in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for families in Northern Ireland',
    lede: 'The transfer test, computing, and the wider system.',
    items: [
      { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test maths practice', p: 'The Year 7 test for grammar school entry.' },
      { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA GCSE Digital Technology, programming', p: 'The computing GCSE where Unit 4 is written by hand.' },
      { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI classes in Northern Ireland', p: 'Primary to A level, and how it fits together.' },
      { href: '/sentinus-young-innovators-coding-help', label: 'Sentinus Young Innovators', p: 'Northern Ireland\'s showcase for young scientists and makers.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'The UK competition ladder, for pupils beyond the syllabus.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will call at a UK time that suits. The lesson uses questions from the pupil\'s own CCEA units and ends with a view on the pathway.',
    readFirst: 'Would you rather read first? Each <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains who our method suits, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows student work.',
    note: 'Messaging on WhatsApp is the quickest way and costs nothing from a UK phone. Replies come from our team in India, on a number beginning +91.',
    formNote: 'No card, no contract; one reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Northern Ireland', links: [
        { href: '/transfer-test-maths-practice-northern-ireland', label: 'Transfer test maths' },
        { href: '/ccea-gcse-digital-technology-programming-help', label: 'CCEA Digital Technology' },
        { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Coding and AI in Northern Ireland' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Maths', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/sentinus-young-innovators-coding-help', label: 'Sentinus Young Innovators' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'CCEA GCSE maths, live on UK time'
  },

  personalityCss: `
.ag-root.ag-ccm .ag-hero h1 { letter-spacing: -0.025em; font-weight: 700; }
.ag-root.ag-ccm .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-ccm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-ccm .ag-table caption { text-align: left; font-weight: 680; }
.ag-root.ag-ccm .ag-table th:first-child { width: 23%; }
.ag-root.ag-ccm .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  mustMention: ['M1', 'M8', 'completion test', 'C*', 'A* to D', 'B to E', 'better suited to the M8 papers', 'worst solution is marked', 'Functional Mathematics', '45 per cent'],

  dossier: {
    curriculumAuthority: 'Northern Ireland, CCEA GCSE Mathematics. Specification from September 2017, Version 2 (8 June 2017): "Students take two units, one from M1, M2, M3 or M4 and one from M5, M6, M7 or M8. To receive an award, one of these must be a completion test."; M1 and M2 Foundation calculator papers of 1 hour 45 mins, 45%; M3 and M4 Higher calculator papers of 2 hours, 45%; M5 and M6 Foundation completion tests (Paper 1 without calculator 1 hour, Paper 2 with calculator 1 hour), 55%; M7 and M8 Higher completion tests (two papers of 1 hour 15 mins), 55%; final grade ranges M1 and M5 D to G, M2 and M6 C* to G, M3 and M7 B to E, M4 and M8 A* to D; M1 to M4 examined at the same time, one entry per session; completion papers consecutive; "Students must take at least 40 percent of the assessment (based on unit weightings) at the end of the course as terminal assessment."; nine grades A*, A, B, C*, C, D, E, F, G; Functional Mathematics Level 1 (M1) and Level 1 or 2 (M2), Level 2 endorsed on the certificate; M6 includes decimal to binary conversion. CCEA GCSE Chief Examiner\'s Report, Mathematics, Summer Series 2025: "Where candidates had been entered at the appropriate level, which was usually the case, they presented evidence of having been very well prepared"; M71: "Some candidates with very high scores would be better suited to the M8 papers and those with very low scores to the M6 papers."; M81: "some candidates were clearly entered at a level above their ability span"; M4 marks ranged from 1 to 100; M4 problem topics; "Candidates should be reminded that if they leave multiple solutions to one question without writing an answer in the answer line then the worst solution is marked."; estimation instructions; money notation; handwriting.',
    localProject: 'The pathway sets the ceiling. CCEA GCSE Mathematics is two units chosen from eight, and each pairing fixes the grades available, from D to G on M1 and M5 up to A* to D on M4 and M8, with Northern Ireland\'s C* grade in between. The page sets out the four pathways with timings and weights, explains C* and Functional Mathematics, then builds on the 2025 Chief Examiner\'s report, which found most entries right but named candidates better suited to a higher or lower pathway, and turns that into questions families can ask a school. It lists the report\'s recurring issues (instructions, money notation, the worst-solution rule, handwriting, Higher algebra and reasoning) and closes with unit-specific preparation and honest limits: we do not decide entries or promise grades. Lesson family: a qualification where an entry decision matters as much as the exam.',
    requiredMentions: ['completion test', 'C*', 'better suited to the M8 papers', 'worst solution is marked'],
    sources: [
      { claim: 'CCEA GCSE Mathematics specification, version 2: units, pathways, timings, weights, grade ranges, terminal rule, grades and Functional Mathematics.', url: 'https://ccea.org.uk/downloads/docs/Specifications/GCSE/GCSE%20Mathematics%20(2017)/GCSE%20Mathematics%20(2017)-specification-Standard.pdf' },
      { claim: 'CCEA GCSE Chief Examiner\'s Report, Mathematics, Summer Series 2025: comments on entry levels, unit overviews and recurring issues.', url: 'https://ccea.org.uk/downloads/docs/ExamMod-Reports/GCSE/GCSE%20Mathematics%20(2017)/2025/GCSE%20Mathematics%20(2017)-Summer2025-Report.pdf' }
    ],
    rejectedClaims: [
      'Grade boundaries, entry numbers or pass rates: none read at a primary source for this build.',
      'Changes from the 2022-2023 addendum: read, and it applied only to support materials for the November 2022 and Summer 2023 series, leaving the structure unchanged.',
      'Advice on which pathway a particular pupil should take: a school decision; we give an honest view only.',
      'Any promise about a grade, which we decline.'
    ]
  }
};
