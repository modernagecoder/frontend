'use strict';
// GCSE Mathematics and Numeracy (Double Award) help, Wales (ag- maths door; UK cluster Phase 3).
// Sources, read raw on 21 September 2026 (WJEC PDFs via curl + PyMuPDF; Qualifications Wales page via curl):
//  - WJEC GCSE Mathematics and Numeracy (Double Award) Specification, for teaching from September 2025,
//    First Award November 2026, Version 5, September 2025, Qualification Approval Number C00/4968/0.
//    Verbatim: Unit 1 "Financial Mathematics and Other Applications of Numeracy", Higher "1 hour 45 minutes
//    (80 marks)", Foundation "1 hour 30 minutes (65 marks)", "30% of qualification", "Questions will be set
//    in personal and other real-world contexts. A calculator will be allowed in this paper."; Unit 2
//    "Non-calculator", same timings and marks, "30% of qualification", "A calculator will not be allowed in
//    this paper."; Unit 3 "Calculator-allowed", Higher "2 hours (90 marks)", Foundation "1 hour 45 minutes
//    (75 marks)", "40% of qualification"; tiers "Higher Tier: A* – D Foundation Tier: C – G"; "Learners may
//    be entered at different tiers across units."; Units 1 and 2 first "summer 2026", then every November
//    and summer; Unit 3 first "November 2026"; "The qualification will be awarded for the first time in
//    November 2026."; eight-grade double-award scale from A*A* to GG; UMS; 1.8 "Personal/ household finance
//    and enterprise" list (wages and salaries including payslips; income tax and National Insurance;
//    savings and investments; loans/repayments; mortgages; appreciation/depreciation; budgeting; bank
//    statements; utility bills; mobile phone and other bills; VAT; best buys; price comparison; finance
//    schemes including buying by instalments; discount/price increase; buying and selling; profit and loss;
//    travel including foreign currencies, exchange rates and commission); simple and compound interest;
//    "Annual Equivalent Rate (AER)"; "Annual Percentage Rate (APR) when comparing financial products,
//    including mortgages"; infographics.
//  - WJEC FAQs (2025). Verbatim: "There is no Single Award GCSE for Mathematics."; no intermediate tier;
//    legacy Maths Numeracy November 2026 series moved to January 2027; mortgages: "compare mortgage products
//    or determine the required deposit amount", with further information "provided within the questions";
//    tax: "tax rates may not match current UK rates"; constructions no longer assessed.
//  - Qualifications Wales blog, 21 February 2025. Verbatim: "we are replacing the existing mathematics and
//    mathematics-numeracy GCSEs with one GCSE Mathematics and Numeracy qualification"; "unlike most other
//    GCSEs, it does not include non-examination assessment"; "learners should be able to obtain a Grade C on
//    the Foundation tier (which is not currently the case)"; the four question contexts.
// Spine: two GCSEs become one, graded as two, and money gets a paper of its own. Dated: the first award
// is November 2026; revise when WJEC publishes the first examiners' report.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'WALES MATHS', blurb: 'Two GCSEs become one double award, graded A*A* to GG, with a whole paper on money. First results in November 2026.' },
  slug: 'gcse-maths-and-numeracy-wales-help',
  code: 'mnw',
  accent: '#6A307E',
  accentRationale: 'Wales maths: a soft violet from the solver (7.29:1 on every paper tint, dE 10.0 from the nearest used accent), set apart from the red and plum of the two WJEC computing pages',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'GCSE Mathematics and Numeracy help, Wales',
  title: 'GCSE Maths and Numeracy Help, Wales | Double Award',
  description: 'Help with WJEC GCSE Mathematics and Numeracy, the new double award: three units, one of them on money, graded A*A* to GG. First results in November 2026.',
  ogDescription: 'Wales has merged two maths GCSEs into one double award graded as two, and given personal finance a paper of its own. Here is how it works.',
  twitterDescription: 'WJEC GCSE Mathematics and Numeracy (Double Award): the three units, the finance paper, mixed tiers, and what November 2026 brings.',
  pageName: 'GCSE Mathematics and Numeracy Help, Wales',
  webPageDescription: 'Live online tuition for the WJEC Made-for-Wales GCSE Mathematics and Numeracy (Double Award), built from the specification, WJEC\'s FAQs and Qualifications Wales.',
  courseDescription: 'Live online teaching for WJEC GCSE Mathematics and Numeracy candidates: financial mathematics, non-calculator number and algebra, geometry, probability and statistics.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'GCSE Maths and Numeracy, Wales',
  navLinks: [
    { href: '#one', label: 'One GCSE, two grades' },
    { href: '#money', label: 'The finance paper' },
    { href: '#tiers', label: 'Tiers and timing' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Wales &middot; WJEC GCSE &middot; Years 10 and 11',
  h1: 'GCSE Mathematics and Numeracy help, Wales',
  lede: 'Until September 2025, many pupils in Wales took two maths GCSEs: Mathematics and Mathematics-Numeracy. From September 2025 they take one, a double award called GCSE Mathematics and Numeracy, which is graded as two GCSEs on a scale from A*A* down to GG. Qualifications Wales describes it simply: "we are replacing the existing mathematics and mathematics-numeracy GCSEs with one GCSE Mathematics and Numeracy qualification". The most striking change is inside it. One of the three units is devoted to money: payslips, income tax and National Insurance, mortgages, interest rates, bills, exchange rates. The first units were available in summer 2026, and the first full results arrive in November 2026. This page explains the structure, the finance paper, the new tiering rules, and how to prepare.',
  secondaryCta: { href: '#money', label: 'The finance paper' },
  wa: 'Hello Modern Age Coders, I would like a free first lesson for GCSE Mathematics and Numeracy in Wales.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; From WJEC\'s specification and FAQs, and Qualifications Wales',
  spec: [
    ['Qualification', 'WJEC GCSE Mathematics and Numeracy (Double Award)'],
    ['Grades', 'Double award, A*A* to GG'],
    ['Unit 1', 'Financial mathematics, calculator, 30 per cent'],
    ['Unit 2', 'Non-calculator, 30 per cent'],
    ['Unit 3', 'Calculator, 40 per cent'],
    ['First award', 'November 2026'],
    ['Lessons', 'Live, in English'],
    ['Start', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'WJEC\'s GCSE Mathematics and Numeracy (Double Award), first taught in September 2025, replaces the separate Mathematics and Mathematics-Numeracy GCSEs in Wales. It is graded as a double award, from A*A* to GG, and assessed entirely by three written exams: Unit 1, Financial Mathematics and Other Applications of Numeracy, calculator allowed, 30 per cent; Unit 2, non-calculator, 30 per cent; and Unit 3, calculator allowed, 40 per cent. Each unit has a Higher tier (A* to D) and a Foundation tier (C to G), and pupils can sit different tiers for different units. Units 1 and 2 were first available in summer 2026; Unit 3 is first available in November 2026, when the first full awards are made. Modern Age Coders teaches the whole course live, with particular care on the finance content, payslips, tax, AER and APR, mortgages and bills, which is unfamiliar territory for many pupils. Lessons are in English. The first lesson is free, then USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for Mathematics and Numeracy',
    lede: 'GCSE content, the finance unit, and broader practice. We teach the WJEC specification through courses written for more than one curriculum.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'MN / 01', title: 'GCSE Mathematics', note: 'Number, algebra, geometry and statistics at both tiers, the core of Units 2 and 3.' },
      { course: 'complete-business-finance-mathematics-mastery', code: 'MN / 02', title: 'Business and Finance Mathematics', note: 'Pitched at older learners, but covers interest, loans, mortgages, VAT and budgeting, much of Unit 1.' },
      { course: 'igcse-mathematics-mastery', code: 'MN / 03', title: 'IGCSE Mathematics', note: 'Extra depth in surds, algebra and trigonometry for Higher-tier pupils.' }
    ]
  },

  sections: [
    {
      id: 'one', tint: 'tint', eyebrow: 'One GCSE, two grades',
      h2: 'One qualification, graded as two',
      lede: 'From the WJEC specification, version 5, September 2025, and Qualifications Wales.',
      body: [
        { kind: 'table', caption: 'The three units', head: ['Unit', 'Calculator', 'Higher tier', 'Foundation tier', 'Weight'], rows: [
          ['1. Financial Mathematics and Other Applications of Numeracy', 'Allowed', '1 hour 45 minutes, 80 marks', '1 hour 30 minutes, 65 marks', '30 per cent'],
          ['2. Non-calculator', 'Not allowed', '1 hour 45 minutes, 80 marks', '1 hour 30 minutes, 65 marks', '30 per cent'],
          ['3. Calculator-allowed', 'Allowed', '2 hours, 90 marks', '1 hour 45 minutes, 75 marks', '40 per cent']
        ] },
        { kind: 'p', html: 'Because it replaces two GCSEs, it is graded as a double award, on an eight-grade scale from A*A* down to GG, with results below that reported as U. There is no single-award option: WJEC\'s FAQs state plainly, "There is no Single Award GCSE for Mathematics." And there is no coursework either. Qualifications Wales notes that, "unlike most other GCSEs, it does not include non-examination assessment", which is one reason the exams are split into units that can be sat before the end of Year 11.' },
        { kind: 'two', mt: true,
          leftH3: 'What changed from the old pair',
          left: [
            'One qualification instead of two, and less assessment overall than taking both old GCSEs, according to Qualifications Wales.',
            'Content that mostly mirrors the old GCSEs, with some modern additions such as infographics alongside the usual charts and graphs.'
          ],
          rightH3: 'What stayed the same',
          right: [
            'Tiering: pupils still sit Higher or Foundation papers, now with only those two tiers and no intermediate tier.',
            'Written exams only, sat in the familiar summer series, now with a November series as well.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.wjec.co.uk/qualifications/gcse-mathematics-and-numeracy-double-award-teaching-from-2025/" rel="noopener" target="_blank">WJEC GCSE Mathematics and Numeracy (Double Award)</a> specification and FAQs, and the Qualifications Wales blog of 21 February 2025 explaining the new double award.' }
      ]
    },
    {
      id: 'money', tint: 'deep', eyebrow: 'The finance paper',
      h2: 'A whole paper on money',
      lede: 'Unit 1 is set in personal and real-world contexts, and much of it is personal finance.',
      body: [
        { kind: 'p', html: 'The specification says Unit 1 questions "will be set in personal and other real-world contexts", with a calculator allowed. Its section on personal and household finance and enterprise lists what pupils should be able to work with, and it reads like a first year of adult life.' },
        { kind: 'table', mt: true, caption: 'Personal and household finance in the specification', head: ['Area', 'Includes'], rows: [
          ['Earning', 'Wages and salaries, including payslips; income tax and National Insurance'],
          ['Saving and borrowing', 'Savings and investments, loans and repayments, mortgages, finance schemes including buying by instalments'],
          ['Interest', 'Simple and compound interest with multipliers, calculations with multiple rates, AER and APR to compare products'],
          ['Running a home', 'Budgeting, bank statements, utility bills, mobile phone and other bills'],
          ['Shopping and selling', 'VAT, value-for-money comparisons, price comparison, discounts and price increases, buying and selling, profit and loss'],
          ['Value over time', 'Appreciation and depreciation'],
          ['Travel', 'Foreign currencies, exchange rates and commission']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Mortgages, sensibly', p: 'WJEC\'s FAQs say pupils should be able to "compare mortgage products or determine the required deposit amount", and that harder information, such as monthly payments, will be provided in the question.' },
          { h3: 'Tax, not this year\'s rates', p: 'Tax questions may use pounds alongside other currencies, and the FAQs warn that "tax rates may not match current UK rates". Pupils must apply the rates given, not the ones they remember.' },
          { h3: 'New vocabulary', p: 'AER, APR, National Insurance, commission: most fifteen-year-olds have never needed these words. WJEC promises glossaries, and unfamiliar terms in questions will be explained.' }
        ] },
        { kind: 'p', html: 'This is where many able mathematicians are caught out. The mathematics in Unit 1 is rarely hard; percentages, multipliers and proportion. What is new is reading a payslip, a bank statement or a tariff table quickly and knowing which numbers matter. That is a skill built by working with real-looking documents, not by more algebra.' }
      ]
    },
    {
      id: 'tiers', tint: '', eyebrow: 'Tiers and timing',
      h2: 'Mixed tiers, and exams twice a year',
      lede: 'Two changes that give schools more flexibility, and give families more decisions to understand.',
      body: [
        { kind: 'table', caption: 'When each unit is available', head: ['Unit', 'First available', 'Then'], rows: [
          ['Unit 1', 'Summer 2026', 'Every November and summer series'],
          ['Unit 2', 'Summer 2026', 'Every November and summer series'],
          ['Unit 3', 'November 2026', 'Every November and summer series'],
          ['Full qualification', 'First awarded November 2026', 'Awarded in November and summer']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Mixed tiers',
          left: [
            'Pupils can sit different tiers for different units: Higher for the finance paper and Foundation for the non-calculator paper, for example. Raw marks are converted to a uniform mark scale for each unit, and those are added together to give the overall grade.',
            'Qualifications Wales explains that the new Foundation tier also fixes an old frustration: "learners should be able to obtain a Grade C on the Foundation tier (which is not currently the case)".'
          ],
          rightH3: 'The last of the old GCSEs',
          right: [
            'Pupils still finishing the old Mathematics or Mathematics-Numeracy GCSEs have resit opportunities in the transition. WJEC has moved the legacy Mathematics-Numeracy November 2026 series to January 2027.',
            'A family unsure which qualification a child is on should check with the school before booking any resit preparation.'
          ] },
        { kind: 'p', html: 'Because the first full awards are made in November 2026, there is not yet an examiners\' report on the new units. We will revise this page when WJEC publishes one. Until then, the specification, the sample assessment materials and the FAQs are the only primary guidance, and they are what we teach from.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Preparing',
      h2: 'How to prepare for three different papers',
      lede: 'Each unit asks for something different, so preparation should differ too.',
      body: [
        { kind: 'table', caption: 'What each unit rewards', head: ['Unit', 'What it rewards', 'How to practise'], rows: [
          ['1. Finance', 'Reading real-world documents and applying percentages and rates accurately', 'Payslips, bills, statements and tariff tables, worked with a calculator'],
          ['2. Non-calculator', 'Number, algebra, geometry and probability without a calculator, including context-free questions', 'Short daily non-calculator practice, fractions, surds and algebra by hand'],
          ['3. Calculator', 'Number, geometry, measures and algebra that need a calculator, plus statistics, in mixed contexts', 'Mixed questions across the whole specification, with efficient calculator use']
        ] },
        { kind: 'p', html: 'The specification asks pupils to be aware that "premature rounding in problems involving multiple steps may affect the accuracy of the final answer", which matters most in the finance paper, where interest and tax calculations run over several steps. Keeping full calculator values until the end is a habit worth building from the first lesson.' },
        { kind: 'two', mt: true,
          leftH3: 'What we do',
          left: [
            'Teach the full content at the tier each unit needs, with finance lessons built around realistic payslips, bills and product comparisons.',
            'Keep non-calculator skills in daily practice for Unit 2, and cover Unit 3\'s statistics and calculator geometry thoroughly.'
          ],
          rightH3: 'What we will not claim',
          right: [
            'Knowledge of how the first papers will be marked. The first examiners\' report has not been published, and we will not guess at it.',
            'A course written only for this qualification, or a grade. We teach the WJEC specification through broader courses, in English.'
          ] },
        { kind: 'p', html: 'For computing in Wales, see <a class="ag-inline-link" href="/wjec-gcse-computer-science-help-wales">the WJEC Computer Science page</a> and <a class="ag-inline-link" href="/wjec-gcse-digital-technology-help-wales">the Digital Technology page</a>; <a class="ag-inline-link" href="/coding-and-ai-classes-in-wales">the Wales page</a> sets out the wider system.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Four rungs through Years 10 and 11',
    lede: 'Placement follows what a pupil can do without help, unit by unit, since tiers can differ.',
    table: { caption: 'What a Mathematics and Numeracy candidate should be able to do', head: ['Rung', 'When', 'What should be true'], rows: [
      ['1. Number fluency', 'Early Year 10', 'Fractions, percentages, ratio and multipliers by hand and on a calculator'],
      ['2. Money', 'Year 10', 'Payslips, tax, bills, interest, AER and APR read and calculated accurately'],
      ['3. Algebra and geometry', 'Year 10 into Year 11', 'Equations, graphs, trigonometry, probability and geometry at the right tier'],
      ['4. Paper by paper', 'Before each series', 'Each unit practised in its own style, with no premature rounding']
    ] },
    left: { h3: 'Rung two is new for everyone', ps: [
      'Few pupils have handled a payslip or compared APRs. A few weeks of realistic documents transforms Unit 1.',
      'The wider order of topics is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a> for pupils who code too.'
    ] },
    right: { h3: 'Rung four repeats', ps: [
      'With November and summer series, a pupil may sit units at different times. We plan back from each date.',
      'Lessons lighten before each series and pick up after it.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Welsh GCSE pupils',
    lede: 'Sorted by unit and purpose. The free lesson chooses the starting point.',
    bands: [
      { num: 'I', h3: 'Core GCSE content', sub: 'Units 2 and 3', courses: [
        { code: 'UK / MN1 / 01', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Both tiers, all strands.' },
        { code: 'UK / MN1 / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE mathematics', blurb: 'Extra stretch for Higher-tier pupils.' },
        { code: 'UK / MN1 / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Foundations rebuilt for pupils who are behind.' }
      ] },
      { num: 'II', h3: 'Money and data', sub: 'Unit 1 and statistics', courses: [
        { code: 'UK / MN2 / 01', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, loans, mortgages and budgeting.' },
        { code: 'UK / MN2 / 02', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Charts, averages and probability explained clearly.' },
        { code: 'UK / MN2 / 03', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'Reading infographics and real data with confidence.' }
      ] },
      { num: 'III', h3: 'Beyond the GCSE', sub: 'For confident pupils', courses: [
        { code: 'UK / MN3 / 01', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'For pupils heading to AS and A level mathematics.' },
        { code: 'UK / MN3 / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition mathematics', blurb: 'Problem solving for those who enjoy a challenge.' },
        { code: 'UK / MN3 / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Mathematics explored by writing programs.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons work',
    h2: 'Three papers, three kinds of practice',
    lede: 'Our teachers are in India, which keeps the same clock all year, so Wales is four and a half hours behind in summer and five and a half in winter. Lessons are booked in UK time.',
    slots: [
      { time: 'After school', l: 'The usual time for Years 10 and 11.' },
      { time: 'Evening', l: 'Around clubs, sport or a part-time job.' },
      { time: 'Weekend', l: 'Space for a full paper and its review.' }
    ],
    cells: [
      { h3: 'Real documents', p: 'Payslips, bills and bank statements used in finance lessons, so Unit 1 contexts feel familiar.' },
      { h3: 'Rates as given', p: 'Tax and interest worked from the rates in the question, never from memory.' },
      { h3: 'By hand for Unit 2', p: 'Non-calculator number and algebra practised every week.' },
      { h3: 'Whole course for Unit 3', p: 'Statistics, geometry and measures covered in full, not left to the end.' },
      { h3: 'Tier by unit', p: 'Each unit taught at the tier the school has chosen for it.' },
      { h3: 'Small groups', p: 'Five to ten pupils at one rung, comparing methods.' }
    ]
  },

  projectsH2: 'Projects from our students\' classes',
  projectsLede: 'Four projects from lessons, none of them assessed. More in <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, as they were written.',

  fees: {
    h2: 'Fees for GCSE maths lessons',
    lede: 'Charged monthly in US dollars, at the single rate every family outside India pays. A first lesson costs nothing, and billing only starts once you have picked a course and a weekly slot.',
    free: ['A lesson on real WJEC-style questions', 'A view on the right tier for each unit', 'A phone number is enough'],
    group: ['Five to ten pupils on one rung', 'The same teacher across the course', 'Finance and non-calculator work weekly', 'Fewer lessons near each series'],
    one: ['A teacher for one pupil', 'Planned around mixed tiers and dates', 'Suits a pupil resitting a unit']
  },

  faq: {
    eyebrow: 'Questions about GCSE Mathematics and Numeracy',
    h2: 'What families in Wales ask',
    items: [
      { q: 'What is GCSE Mathematics and Numeracy?', a: 'A WJEC double award GCSE, first taught in September 2025, that replaces the separate Mathematics and Mathematics-Numeracy GCSEs in Wales. It is assessed by three written exams.' },
      { q: 'How is it graded?', a: 'As a double award, on an eight-grade scale from A*A* down to GG. Results below the minimum are reported as U.' },
      { q: 'What is on the finance paper?', a: 'Unit 1 covers personal and household finance: payslips, income tax and National Insurance, savings, loans and mortgages, interest including AER and APR, bills, VAT, value-for-money comparisons, exchange rates and more, with a calculator.' },
      { q: 'Can my child take different tiers?', a: 'Yes. Each unit has a Higher tier, A* to D, and a Foundation tier, C to G, and pupils can be entered at different tiers across the three units.' },
      { q: 'Can a Foundation pupil get a C?', a: 'Yes. Qualifications Wales changed the tiering so that a Grade C is available on the Foundation tier, which was not the case before.' },
      { q: 'When are the exams?', a: 'Units 1 and 2 were first available in summer 2026 and Unit 3 in November 2026. After that, all three are available every November and summer, and the first full awards are made in November 2026.' },
      { q: 'Is there a single award?', a: 'No. WJEC states that there is no Single Award GCSE for Mathematics. Pupils not ready for the double award may follow an Entry Level route instead.' },
      { q: 'Is there coursework?', a: 'No. It is assessed entirely by written exams, unlike most other GCSEs, which is one reason it is split into units.' },
      { q: 'Do you teach in Welsh?', a: 'No. Our lessons are in English. WJEC publishes its papers in both languages, and Welsh-medium pupils are welcome, but will learn the terms in English.' },
      { q: 'What does it cost?', a: 'Your first lesson is free. Regular lessons are then one monthly fee in US dollars, lower for a group place than for one to one, shown in the fees section, and we never charge in advance.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Other pages for families in Wales',
    lede: 'Computing in Wales, the wider system, and maths beyond the GCSE.',
    items: [
      { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science', p: 'The Unit 2 exam that hands pupils a program they did not write.' },
      { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC GCSE Digital Technology', p: 'The computing GCSE that is mostly made in school.' },
      { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI classes in Wales', p: 'The Welsh system from primary school up.' },
      { href: '/maths-olympiad-training-uk', label: 'Maths olympiad training', p: 'For pupils who want harder problems.' },
      { href: '/ukmt-kangaroo-rounds-practice', label: 'UKMT Kangaroo rounds', p: 'Competition practice open to pupils across the UK.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The UK hub, linking every page.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Leave a number and we will phone at a UK time that suits you. The lesson includes a short finance task and ends with a view on tiers.',
    readFirst: 'Prefer to read first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its content, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> says who our method suits, and <a class="ag-inline-link" href="/student-labs">student labs</a> shows real student work.',
    note: 'WhatsApp is quickest and free from a UK mobile. It reaches our office in India, so look for a number starting +91.',
    formNote: 'No card and no contract; we reply once, with a time.'
  },

  footer: {
    cols: [
      { h4: 'Wales', links: [
        { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC Computer Science' },
        { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC Digital Technology' },
        { href: '/coding-and-ai-classes-in-wales', label: 'Coding and AI in Wales' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK coding classes' }
      ] },
      { h4: 'Maths', links: [
        { href: '/maths-olympiad-training-uk', label: 'Olympiad training' },
        { href: '/ukmt-kangaroo-rounds-practice', label: 'UKMT Kangaroo' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'GCSE maths for Wales, live on UK time'
  },

  personalityCss: `
.ag-root.ag-mnw .ag-hero h1 { letter-spacing: -0.023em; font-weight: 710; }
.ag-root.ag-mnw .ag-capsule { border-left-width: 5px; border-bottom: 2px solid var(--ag-accent); }
.ag-root.ag-mnw .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mnw .ag-table caption { text-align: left; font-weight: 670; }
.ag-root.ag-mnw .ag-table td:first-child { font-weight: 620; }
.ag-root.ag-mnw .ag-band-head h3 { letter-spacing: -0.012em; }
`,

  mustMention: ['Double Award', 'A*A*', 'Financial Mathematics', 'November 2026', 'payslips', 'APR', 'Foundation tier', 'different tiers', 'Mathematics-Numeracy', 'non-calculator'],

  dossier: {
    curriculumAuthority: 'Wales, WJEC GCSE Mathematics and Numeracy (Double Award), Made for Wales, approved by Qualifications Wales. Specification, teaching from September 2025, First Award November 2026, Version 5, September 2025, Qualification Approval Number C00/4968/0: Unit 1 Financial Mathematics and Other Applications of Numeracy, Higher 1 hour 45 minutes (80 marks), Foundation 1 hour 30 minutes (65 marks), 30%, calculator allowed, "Questions will be set in personal and other real-world contexts."; Unit 2 Non-calculator, same timings and marks, 30%, "A calculator will not be allowed in this paper."; Unit 3 Calculator-allowed, Higher 2 hours (90 marks), Foundation 1 hour 45 minutes (75 marks), 40%; tiers Higher A* to D, Foundation C to G; "Learners may be entered at different tiers across units."; Units 1 and 2 first summer 2026, Unit 3 first November 2026, then every November and summer; first award November 2026; double award reported on an eight-grade scale from A*A* to GG; UMS; section 1.8 personal/household finance and enterprise list; simple and compound interest; AER; APR "when comparing financial products, including mortgages"; "premature rounding in problems involving multiple steps may affect the accuracy of the final answer"; infographics. WJEC FAQs: "There is no Single Award GCSE for Mathematics."; no intermediate tier; legacy Maths Numeracy November 2026 series moved to January 2027; mortgages "compare mortgage products or determine the required deposit amount"; "tax rates may not match current UK rates". Qualifications Wales blog, 21 February 2025: "we are replacing the existing mathematics and mathematics-numeracy GCSEs with one GCSE Mathematics and Numeracy qualification"; "unlike most other GCSEs, it does not include non-examination assessment"; "learners should be able to obtain a Grade C on the Foundation tier (which is not currently the case)".',
    localProject: 'Two GCSEs become one, graded as two, and money gets a paper of its own. Wales has replaced its Mathematics and Mathematics-Numeracy GCSEs with WJEC\'s double award GCSE Mathematics and Numeracy, graded A*A* to GG and assessed by three written units, one of them devoted to financial mathematics. The page sets out the units, tiers and weights from the specification, walks the personal-finance content (payslips, tax and National Insurance, mortgages, AER and APR, bills, exchange rates) with WJEC\'s FAQ guidance on mortgages and tax rates, explains mixed tiers, the November and summer series and the Foundation-tier C, notes the legacy resit moved to January 2027, and gives unit-by-unit preparation. It is explicitly dated: the first awards are in November 2026 and no examiners\' report exists yet. Lesson family: a reformed qualification that turns everyday money into examined mathematics.',
    requiredMentions: ['A*A*', 'Financial Mathematics', 'November 2026', 'different tiers'],
    sources: [
      { claim: 'WJEC GCSE Mathematics and Numeracy (Double Award) specification, version 5: units, tiers, timings, marks, weights, availability, first award, grading scale and the personal finance content.', url: 'https://www.wjec.co.uk/media/ojhfscmj/wjec-gcse-mathematics-and-numeracy-specification.pdf' },
      { claim: 'WJEC GCSE Mathematics and Numeracy (Double Award) FAQs: no single award, no intermediate tier, legacy resit moved to January 2027, mortgages, tax rates and constructions.', url: 'https://www.wjec.co.uk/media/w55g2jf3/gcse-mathematics-and-numeracy-double-award-faqs-e.pdf' },
      { claim: 'Qualifications Wales blog, 21 February 2025: the replacement of two GCSEs, no non-examination assessment, the Foundation-tier C, mixed tiers and contexts.', url: 'https://qualifications.wales/news-views/integrating-mathematics-and-numeracy-the-new-double-award-explained/' }
    ],
    rejectedClaims: [
      'Any account of how the first papers were marked: no examiners\' report exists before the first award in November 2026.',
      'Grade boundaries or UMS conversions: WJEC says these are set only after the exams, and none is quoted.',
      'That our finance course covers every Unit 1 topic: it covers interest, loans, mortgages, VAT and budgeting, but not payslips, AER or APR explicitly, and the card says it is pitched older.',
      'Welsh-medium teaching: lessons are in English only.',
      'Any promise about a grade, which we decline.'
    ]
  }
};
