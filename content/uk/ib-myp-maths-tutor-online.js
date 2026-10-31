'use strict';
// IB MYP maths tutor online (ag- exam door, IB Middle Years Programme mathematics; UK cluster row UK062).
// ibo.org returns HTTP 403 to curl (recorded by earlier writers and in uk-map.tsv): not retried. Read raw on 31
// October 2026 (copy under keyword-research-2026-09/uk-us-gap/src/ib-myp-maths-tutor-online/hwa.pdf):
//  - International Baccalaureate, "Middle Years Programme Subject Brief, Mathematics, From 2014", "(c)
//    International Baccalaureate Organization 2015": an unaltered copy of IB's PDF hosted by an IB school
//    (hwa.edu.sg). Verbatim: MYP "designed for students aged 11 to 16"; "The framework for MYP mathematics outlines
//    four branches of mathematical study. 1. Number 2. Algebra 3. Geometry and trigonometry 4. Statistics and
//    probability"; "For MYP mathematics, schools can develop courses at two level of challenge: standard and
//    extended." (IB's wording, "level"); "Standard mathematics aims to provide a sound knowledge of basic
//    mathematical principles. Extended mathematics supplements the standard curriculum with additional topics
//    and skills, providing greater breadth and depth of study."; key concepts "form, logic and relationships";
//    related concepts "equivalence, measurement, quantity and justification"; six global contexts; "The MYP
//    requires at least 50 hours of teaching time for each subject area in each year of the programme. For
//    students participating in MYP eAssessment, the IB recommends 70 hours of guided learning each year in MYP
//    years 4 and 5."; "Each mathematics objective corresponds to one of four equally weighted assessment
//    criteria. Each criterion has eight possible achievement levels (1-8), divided into four bands" (the
//    brief prints the range with a dash; the page writes 1 to 8); Criteria A Knowing and understanding, B
//    Investigating patterns, C Communicating, D Applying mathematics in real-life contexts; on-screen
//    examinations "available in mathematics and extended mathematics"; "on-screen examinations comprise three
//    tasks" of 40 marks each (A and C; B and C; C and D); MYP certificate needs "2 hour on-screen examinations"
//    in subjects including mathematics, plus a moderated personal project.
//  - The brief's sample question is not reproduced (IB copyright); IB publications may not be used commercially
//    by tutoring organisations without a licence, so nothing beyond short quoted facts is used.
// NOT verified (ibo.org blocked): any revision of the MYP mathematics framework after this 2015 brief, current
// eAssessment session dates, the 1 to 7 MYP grade boundaries. The page says so and sends families to the school.
// Our own, labelled: the pattern investigation, the criterion checklist, practice tasks, plan. Spine: MYP maths is
// judged against four criteria of eight levels each, not a percentage, so the help that matters is teaching the
// mathematics and the habits each criterion looks for. Lesson family: a Criterion B investigation, from cases to
// a general rule to a justification. No school or teacher is named.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'exam', tag: 'IB MYP MATHS', label: 'IB MYP maths tutor online', blurb: 'MYP maths is judged against four criteria of eight levels each. What standard and extended mean, and how to investigate a pattern.' },
  slug: 'ib-myp-maths-tutor-online',
  code: 'im',
  accent: '#4C6951',
  accentRationale: 'IB MYP maths: a sage spruce (#4C6951), 5.88:1 on #FBF8F2 and 5.07:1 on the deepest paper tint, greyer than the DP teals and greens so the middle-years page sits apart from the Diploma pages',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'IB MYP maths tutor online',
  title: 'IB MYP Maths Tutor Online | Standard, Extended, Criteria A to D',
  description: 'IB MYP maths tutor online: the four branches, standard and extended maths, criteria A to D at eight levels each, the on-screen exam and how we teach it live.',
  ogDescription: 'MYP maths is graded against four criteria, not a percentage. What the IB\'s subject brief says, and how a live tutor can help without doing the work.',
  twitterDescription: 'IB MYP maths: number, algebra, geometry and trigonometry, statistics and probability; standard or extended; criteria A to D; eAssessment tasks.',
  pageName: 'IB MYP Maths Tutor Online',
  webPageDescription: 'A guide for families of IB Middle Years Programme students on MYP mathematics, built from the IB\'s mathematics subject brief, with live online maths teaching for ages 11 to 16 in groups or one to one.',
  courseDescription: 'Live online mathematics for IB MYP students aged 11 to 16, covering number, algebra, geometry and trigonometry, and statistics and probability at standard or extended level, with the investigation and communication habits the MYP criteria look for.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'IB MYP maths',
  navLinks: [
    { href: '#framework', label: 'The framework' },
    { href: '#levels', label: 'Standard or extended' },
    { href: '#criteria', label: 'Criteria A to D' },
    { href: '#investigate', label: 'Investigating' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'IB Middle Years Programme &middot; MYP 1 to 5 &middot; Ages 11 to 16',
  h1: 'IB MYP maths tutor online',
  lede: 'MYP mathematics is the maths course of the International Baccalaureate\'s Middle Years Programme, which the IB designs for students aged 11 to 16. Schools teach it at standard or extended level across four branches: number, algebra, geometry and trigonometry, and statistics and probability. Work is judged against four criteria, each with eight achievement levels, rather than a percentage score. Modern Age Coders teaches MYP maths live online, in a small group or one to one, through our lower secondary mathematics course, alongside whatever your school is covering. This page explains the framework from the IB\'s own subject brief, what each criterion asks for, and how to investigate a pattern the way Criterion B expects.',
  secondaryCta: { href: '#criteria', label: 'What criteria A to D mean' },
  wa: 'Hello Modern Age Coders, I would like a free MYP maths lesson for my child.',
  heroNote: 'From the IB\'s MYP mathematics subject brief (from 2014, published 2015), read 31 October 2026 &middot; Not connected with the IB or any school',
  spec: [
    ['Programme', 'IB Middle Years Programme'],
    ['Ages', '11 to 16, MYP years 1 to 5'],
    ['Branches', 'Number, algebra, geometry and trigonometry, statistics and probability'],
    ['Levels', 'Standard and extended'],
    ['Assessed by', 'Four criteria, A to D'],
    ['Each criterion', 'Eight achievement levels'],
    ['Optional exam', 'On-screen, MYP year 5'],
    ['We teach', 'Live online, group or 1-on-1']
  ],
  capsuleQ: 'What is IB MYP maths?',
  capsule: 'IB MYP mathematics is the mathematics course of the International Baccalaureate Middle Years Programme, for students aged 11 to 16. The IB\'s subject brief says its framework "outlines four branches of mathematical study": number, algebra, geometry and trigonometry, and statistics and probability, and that schools can offer it at two levels of challenge, standard and extended. Students are assessed against four equally weighted criteria, A to D, each with eight achievement levels, and in MYP year 5 may sit an on-screen examination of three 40-mark tasks. Modern Age Coders teaches MYP maths live online, in a group or 1-on-1, through our lower secondary maths mastery course.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for an MYP maths student',
    lede: 'The first fits MYP years 1 to 3; the second carries an MYP 4 or 5 student towards extended content; the third looks ahead to the Diploma. Each card opens a syllabus.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MYP / 01', title: 'Lower secondary maths mastery', note: 'Number, pre-algebra, geometry and data for MYP years 1 to 3, with written explanation in every lesson.' },
      { course: 'igcse-mathematics-mastery', code: 'MYP / 02', title: 'Core and extended secondary maths', note: 'Quadratics, trigonometry, functions and probability at the depth an extended MYP 4 or 5 course reaches.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'MYP / 03', title: 'IB Diploma maths, AA and AI', note: 'For an MYP 5 student who wants to see the Diploma courses before choosing between them.' }
    ]
  },

  sections: [
    {
      id: 'framework', tint: 'tint', eyebrow: 'The framework',
      h2: 'What is in the IB MYP maths syllabus?',
      lede: 'There is no single fixed syllabus. The IB sets a framework of four branches, key and related concepts and global contexts, and each school chooses its content within it. The brief says the framework "offers schools flexibility to determine engaging, relevant, challenging and significant content that meets local and national curriculum requirements."',
      body: [
        { kind: 'table', caption: 'MYP mathematics at a glance, from the IB subject brief (from 2014)', head: ['Element', 'What the brief lists'], rows: [
          ['Branches', 'Number; algebra; geometry and trigonometry; statistics and probability'],
          ['Levels of challenge', 'Standard and extended'],
          ['Key concepts that frame the MYP', 'Form, logic and relationships, among others'],
          ['Related concepts in maths (examples)', 'Equivalence, measurement, quantity and justification'],
          ['Global contexts', 'Identities and relationships; orientation in space and time; personal and cultural expression; scientific and technical innovation; globalization and sustainability; fairness and development'],
          ['Teaching time', 'At least 50 hours per subject in each year; 70 hours of guided learning recommended in MYP years 4 and 5 for eAssessment students'],
          ['Assessment', 'Four equally weighted criteria, A to D, each with eight achievement levels in four bands']
        ] },
        { kind: 'source', html: 'Source: International Baccalaureate, <a class="ag-inline-link" href="https://www.hwa.edu.sg/wp-content/uploads/2021/04/myp-brief_mathematics_2015.pdf" rel="noopener" target="_blank">Middle Years Programme Subject Brief, Mathematics, from 2014</a> (an unaltered copy hosted by an IB school; ibo.org refused our requests). The IB revises its programmes; your school\'s current guide is the final word. Modern Age Coders has no affiliation with the IB.' },
        { kind: 'two', mt: true,
          leftH3: 'What this means for a family',
          left: [
            'Two MYP schools can teach different topics in the same year. A student moving school, or a family comparing notes, should ask for the unit plan rather than assume. The four branches are fixed; the order and examples are not.',
            'That flexibility is why a tutor who only knows one country\'s exam syllabus can be unhelpful. We start from the school\'s unit and the criterion being assessed, then teach the maths underneath.'
          ],
          rightH3: 'The concept-led style',
          right: [
            'The brief says the MYP "promotes sustained inquiry in mathematics by developing conceptual understanding within global contexts". In practice a unit on linear functions might sit inside a context such as fairness and development, and the summative task will ask students to apply the maths there.',
            'Students who are fluent with procedures but have never had to explain why a method works can find this uncomfortable at first. That is the gap we work on.'
          ] }
      ]
    },
    {
      id: 'levels', tint: 'deep', eyebrow: 'Two levels',
      h2: 'What is the difference between MYP standard and extended maths?',
      lede: 'The brief answers in two sentences: "Standard mathematics aims to provide a sound knowledge of basic mathematical principles. Extended mathematics supplements the standard curriculum with additional topics and skills, providing greater breadth and depth of study."',
      body: [
        { kind: 'two',
          leftH3: 'What the brief does and does not say',
          left: [
            'It says schools "can develop courses at two level of challenge", so extended is an addition to standard, not a separate subject. On-screen examinations, it says, "are available in mathematics and extended mathematics".',
            'It does not give a list of extended-only topics in the copy we read, and we will not invent one. Your school\'s scope and sequence shows which topics it treats as extended.'
          ],
          rightH3: 'How we decide which to teach',
          right: [
            'We ask which level the school has placed the student in, and look at the last unit\'s task. A student in extended maths who is struggling usually has a gap in algebraic fluency from an earlier year; we repair that first.',
            'A standard student who is secure and curious can be taught extended topics alongside, without pressure to change sets. The decision about sets belongs to the school.'
          ] },
        { kind: 'table', mt: true, caption: 'Our planning view of standard and extended in MYP 4 and 5 (ours, not the IB\'s list)', head: ['Branch', 'Typical standard work (ours)', 'Where extended work often goes further (ours)'], rows: [
          ['Number', 'Fractions, percentages, standard form, ratio', 'Surds and rational exponents handled confidently'],
          ['Algebra', 'Linear equations and graphs, simple quadratics', 'Quadratic functions, inequalities and simultaneous non-linear equations'],
          ['Geometry and trigonometry', 'Pythagoras, right-angled trigonometry, area and volume', 'Non-right-angled triangles, circle geometry, vectors'],
          ['Statistics and probability', 'Averages, charts, simple probability', 'Conditional probability and comparing distributions']
        ] },
        { kind: 'p', mt: true, html: 'The table above is our own planning tool: the order in which we teach these topics to MYP 4 and 5 students. It is not an IB document, it is not a claim about any school\'s course, and your school may draw the line between standard and extended differently. Check the school\'s unit plans.' }
      ]
    },
    {
      id: 'criteria', tint: '', eyebrow: 'How work is judged',
      h2: 'What are the MYP maths criteria A, B, C and D?',
      lede: 'Four equally weighted criteria. The brief says each "has eight possible achievement levels (1 to 8), divided into four bands with unique descriptors that teachers use to make judgments about students\' work."',
      body: [
        { kind: 'table', caption: 'The four MYP mathematics criteria, as the IB subject brief describes them', head: ['Criterion', 'Name', 'What the brief says students do'], rows: [
          ['A', 'Knowing and understanding', 'Select and apply mathematics to solve problems in familiar and unfamiliar situations, across the four branches'],
          ['B', 'Investigating patterns', 'Work through investigations to become risk-takers, inquirers and critical thinkers'],
          ['C', 'Communicating', 'Use appropriate mathematical language and different forms of representation, orally and in writing'],
          ['D', 'Applying mathematics in real-life contexts', 'Transfer theoretical knowledge to real situations, apply problem-solving strategies, draw valid conclusions and reflect on results']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Not a percentage', p: 'A test can score 6 out of 8 on Criterion A and 3 out of 8 on C. The second number is often the more useful one for a student to hear about.' },
          { h3: 'Bands, not ticks', p: 'Each criterion\'s eight levels sit in four bands, each with its own descriptor. Moving up a band usually needs a different kind of work, not more of the same.' },
          { h3: 'Teacher judgement', p: 'Teachers match work to descriptors. We never grade a school task or predict a level; we teach the skills the descriptors name.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Criterion C is where marks hide',
          left: [
            'Students who get right answers but write only the answers often sit low on communicating. The brief asks for appropriate mathematical language and different forms of representation. In our lessons that means: say what you are finding, show the method in order, and state the result with units.',
            'It is a habit, so we practise it on ordinary exercises, not only on assessed tasks.'
          ],
          rightH3: 'Criterion D needs a judgement',
          right: [
            'Applying maths to a real situation ends with a question the maths cannot answer alone: is this result reasonable here? The brief asks students to "draw valid conclusions and reflect upon their results".',
            'We teach students to finish every applied problem with one sentence on whether the answer makes sense in context, and one on what the model leaves out.'
          ] }
      ]
    },
    {
      id: 'exam', tint: 'tint', eyebrow: 'MYP year 5',
      h2: 'How does the MYP maths on-screen exam work?',
      lede: 'It is optional for a school and its students. The brief says students "seeking IB MYP course results or the IB MYP Certificate" complete "an end-of-course on-screen examination", which in mathematics comprises three tasks.',
      body: [
        { kind: 'table', caption: 'MYP mathematics on-screen examination, as the IB subject brief describes it', head: ['Task', 'Criteria assessed', 'Marks'], rows: [
          ['Knowing and understanding', 'A and C', '40'],
          ['Investigating patterns', 'B and C', '40'],
          ['Applying mathematics in real-life contexts', 'C and D', '40']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What else the brief says',
          left: [
            'On-screen examinations "address all four branches of mathematical study and may include any topics or skills in the MYP mathematics framework." They are available at both levels, mathematics and extended mathematics.',
            'For the MYP certificate the brief lists two-hour on-screen examinations in language and literature, individuals and societies, sciences, mathematics and interdisciplinary learning, an ePortfolio, a moderated personal project, and service as action.'
          ],
          rightH3: 'What we could not check',
          right: [
            'Session dates, grade boundaries and any changes since this brief was published sit on IB pages that refused our requests. Your school\'s MYP coordinator has them.',
            'We do not reproduce IB examination tasks. Our lessons use problems we write, at the level and in the style of the criteria, and we point students to the practice materials their school provides.'
          ] },
        { kind: 'p', mt: true, html: 'Notice that Criterion C appears in all three tasks. Clear communication is assessed every time the student writes maths in the exam, which is one more reason we build it into ordinary lessons from MYP 1.' }
      ]
    },
    {
      id: 'investigate', tint: 'deep', eyebrow: 'Our lesson family',
      h2: 'How do you investigate a pattern for MYP Criterion B?',
      lede: 'Move from a few cases, to a table, to a general rule, to a check, to a reason why. The investigation below is ours, written for this page; it is not an IB task.',
      body: [
        { kind: 'ol', items: [
          '<b>Ask a question.</b> Our example: how many diagonals does a polygon with n sides have?',
          '<b>Try small cases carefully.</b> A triangle has 0 diagonals, a quadrilateral 2, a pentagon 5, a hexagon 9. Draw them; count twice.',
          '<b>Tabulate.</b> Sides 3, 4, 5, 6 give diagonals 0, 2, 5, 9. The differences are 2, 3, 4, so the pattern is not linear.',
          '<b>Conjecture a rule.</b> From each vertex you can draw a diagonal to every other vertex except itself and its two neighbours: n minus 3 diagonals. With n vertices that is n(n minus 3), but each diagonal has been counted from both ends, so the conjecture is n(n minus 3) divided by 2.',
          '<b>Test it on a new case.</b> For an octagon the rule gives 8 x 5 / 2 = 20. Draw an octagon and count: 20.',
          '<b>Justify.</b> Explain in words why the rule must hold for every n, which the vertex argument above already does. A rule that fits the table is a conjecture; a reason makes it a result.'
        ] },
        { kind: 'table', mt: true, caption: 'Our checklist for an investigation, mapped to the criteria the brief names', head: ['Step', 'What to show (ours)', 'Criterion it serves'], rows: [
          ['Cases and table', 'Organised data, not scattered sums', 'B'],
          ['Rule', 'A general statement in words and in algebra', 'B and C'],
          ['Test', 'A new case not used to find the rule', 'B'],
          ['Reason', 'Why the rule works, not only that it does', 'B and C'],
          ['Presentation', 'Labelled diagrams, correct notation, a clear conclusion', 'C']
        ] },
        { kind: 'p', mt: true, html: 'Our practice tasks. Investigate each one through all six steps. (1) Add the first n odd numbers: 1, 1 + 3, 1 + 3 + 5 and so on. What do you notice, and why? (2) How many handshakes happen when n people each shake hands once with everyone else? Compare with the diagonals rule. (3) How many squares of any size are on an n by n grid? Our hints: (1) the totals are square numbers, and an L-shaped layer of dots shows why; (2) n(n minus 1) divided by 2, because each person shakes n minus 1 hands and each handshake is counted twice; (3) the totals 1, 5, 14, 30 are sums of square numbers.' },
        { kind: 'two', mt: true,
          leftH3: 'Why this lesson family',
          left: [
            'Investigating patterns is one of the four criteria and one of the three exam tasks, and it rewards a skill that school timetables rarely leave time to practise slowly: going from examples to a reason.',
            'It also builds the algebra extended maths needs. Writing n(n minus 3) divided by 2 from a counting argument is algebra used for something.'
          ],
          rightH3: 'Where we stop',
          right: [
            'If a student brings a school investigation that will be assessed, we do not work on that task with them. We teach the method on a different problem, like the ones here, and the student applies it alone.',
            'That keeps the assessed work the student\'s own, which is the point of assessing it.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'MYP 1 to 5',
    h2: 'A route through the five MYP years',
    lede: 'The brief requires at least 50 hours of maths teaching each year, and recommends 70 hours of guided learning in years 4 and 5 for students sitting the on-screen exam.',
    table: { caption: 'Our view of what to secure in each MYP year (ours, not an IB sequence)', head: ['MYP year', 'Usual age', 'Maths to secure (ours)'], rows: [
      ['1', '11 to 12', 'Fractions, decimals, negative numbers, writing a method in sentences'],
      ['2', '12 to 13', 'Ratio, simple equations, angles and area, organising data'],
      ['3', '13 to 14', 'Linear graphs, Pythagoras, probability, first full investigations'],
      ['4', '14 to 15', 'Quadratics, trigonometry, statistics; standard or extended set'],
      ['5', '15 to 16', 'Consolidation across all four branches; the on-screen exam if the school enters it']
    ] },
    left: { h3: 'After MYP 5', ps: [
      'Most MYP students go on to the IB Diploma, where maths splits into analysis and approaches or applications and interpretation; see our <a class="ag-inline-link" href="/ib-maths-tuition-online">IB maths tuition page</a>.',
      'Some move to other sixth-form routes; our <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths page</a> covers that path.'
    ] },
    right: { h3: 'Moving into or out of MYP', ps: [
      'A student arriving from a national curriculum is often ahead on procedures and behind on written reasoning. A student leaving MYP for <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE</a> or <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE</a> is the reverse.',
      'Either way, a short diagnostic lesson tells us where to begin.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding courses for MYP students',
    lede: 'By stage. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'MYP 1 to 3', sub: 'Ages 11 to 14', courses: [
        { code: 'UK / IM / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths mastery', blurb: 'The middle years maths that every later topic leans on.' },
        { code: 'UK / IM / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Expressions, equations and graphs built step by step.' },
        { code: 'UK / IM / 03', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems that train the investigating habit.' }
      ] },
      { num: 'II', h3: 'MYP 4 and 5', sub: 'Ages 14 to 16', courses: [
        { code: 'UK / IM / 04', slug: 'igcse-mathematics-mastery', title: 'Core and extended secondary maths', blurb: 'Quadratics, trigonometry and functions in depth.' },
        { code: 'UK / IM / 05', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'One of the four MYP branches, taught fully.' }
      ] },
      { num: 'III', h3: 'Towards the Diploma', sub: 'Ages 15 and up', courses: [
        { code: 'UK / IM / 06', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Diploma maths', blurb: 'Analysis and approaches, applications and interpretation.' },
        { code: 'UK / IM / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Test a pattern on a thousand cases in Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, for MYP students anywhere',
    lede: TIMING + ' Teachers work from India, which keeps a single time zone all year; for UK families India time is four and a half hours ahead in summer and five and a half in winter, and we schedule in your own local time if you are elsewhere.',
    slots: [
      { time: 'After school', l: 'An hour in the early evening, UK time.' },
      { time: 'Weekend morning', l: 'For students with packed weekday activities.' },
      { time: 'Before a unit test', l: 'A short run of lessons on the unit\'s maths.' }
    ],
    cells: [
      { h3: 'Unit by unit', p: 'We follow the school\'s current unit, not a fixed national scheme.' },
      { h3: 'Criteria in mind', p: 'Every lesson practises one of A to D on purpose.' },
      { h3: 'Group or 1-on-1', p: 'A group of 15 to 20 at one level, or a single student with a teacher.' },
      { h3: 'Our own problems', p: 'Practice is written by us; we do not reproduce IB tasks.' },
      { h3: 'Assessed work stays theirs', p: 'We teach the method on other problems and never touch a school task.' },
      { h3: 'No predicted levels', p: 'Achievement levels are the school\'s judgement, never ours.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Projects by students in our classes, from maths models to games. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents\' words from our Google profile.',

  fees: {
    h2: 'Fees for MYP maths lessons',
    lede: 'A monthly fee, shown in the currency we use for your region, paid month by month without a long contract. The first lesson is free.',
    free: ['A diagnostic lesson on your child\'s current unit', 'A plain account of strengths and gaps', 'No card needed to book'],
    group: ['15 to 20 students at one level', 'One teacher through the year', 'Written work marked for clarity as well as answers', 'A certificate at the end'],
    one: ['One student, one teacher', 'Planned around the school\'s unit and criterion', 'Suits extended students and students new to the MYP']
  },

  faq: {
    eyebrow: 'MYP maths questions',
    h2: 'What families ask about IB MYP maths',
    items: [
      { q: 'What topics are in the IB MYP maths syllabus?', a: 'The IB framework has four branches: number, algebra, geometry and trigonometry, and statistics and probability. Each school chooses the content and order within that framework, so ask your school for its unit plans.' },
      { q: 'What is the difference between MYP standard and extended maths?', a: 'The IB brief says standard maths gives a sound knowledge of basic principles, while extended maths adds topics and skills for greater breadth and depth. Extended builds on standard rather than replacing it.' },
      { q: 'How is MYP maths graded?', a: 'Against four equally weighted criteria: knowing and understanding, investigating patterns, communicating, and applying mathematics in real-life contexts. Each criterion has eight achievement levels in four bands.' },
      { q: 'Is there an MYP maths exam?', a: 'Schools may enter MYP year 5 students for an on-screen examination, available in mathematics and extended mathematics. The IB brief describes three tasks of 40 marks each.' },
      { q: 'Are there MYP maths past papers?', a: 'We do not reproduce IB examination material. Your school\'s MYP coordinator can tell you which IB practice materials the school uses; our lessons use problems we write ourselves.' },
      { q: 'How many hours of maths does MYP require?', a: 'The IB brief says at least 50 hours of teaching time for each subject in each year, and recommends 70 hours of guided learning a year in MYP years 4 and 5 for students in eAssessment.' },
      { q: 'Can a tutor help with an MYP maths investigation?', a: 'We teach the method of investigating on different problems and never work on an assessed school task. The student then applies the method alone, so the assessed work stays their own.' },
      { q: 'My child is moving from GCSE or a national curriculum into MYP. Where do we start?', a: 'Usually with written reasoning and investigation, which national courses practise less. A free diagnostic lesson shows whether the maths content itself also needs work.' },
      { q: 'Does MYP maths prepare students for the IB Diploma?', a: 'The IB brief says MYP mathematics on-screen examinations are aligned with understanding and skills that prepare students for IB Diploma Programme maths courses. Most MYP students go on to one of the two Diploma maths courses.' },
      { q: 'When are your lessons?', a: TIMING + ' UK families book in UK time; families elsewhere book in their own time zone.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for IB families',
    lede: 'The Diploma, other secondary courses, and our UK hub.',
    items: [
      { href: '/ib-maths-tuition-online', label: 'IB maths tuition', p: 'Analysis and approaches, applications and interpretation.' },
      { href: '/ib-computer-science-online-tuition', label: 'IB computer science', p: 'The Diploma computing course.' },
      { href: '/igcse-maths-tuition-online', label: 'IGCSE maths tuition', p: 'For students switching to IGCSE.' },
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'For students moving into a UK school.' },
      { href: '/ib-maths-tutor-uae', label: 'IB maths in the UAE', p: 'For IB families in the Gulf.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'All our UK pages.' }
    ]
  },

  start: {
    h2: 'Book a free MYP maths lesson',
    lede: 'Tell us the MYP year, standard or extended, and the current unit. We will teach part of that unit in the first lesson and show you where the gaps are.',
    readFirst: 'Reading first? Every <a class="ag-inline-link" href="/courses">course page</a> lists its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson from start to finish.',
    note: 'WhatsApp is quickest from most countries and free from a UK phone. We reply from India on a +91 number.',
    formNote: 'No card, no contract. One reply, with a time in your time zone.'
  },

  footer: {
    cols: [
      { h4: 'IB pages', links: [
        { href: '/ib-maths-tuition-online', label: 'IB maths tuition' },
        { href: '/ib-computer-science-online-tuition', label: 'IB computer science' },
        { href: '/ib-maths-tutor-uae', label: 'IB maths, UAE' },
        { href: '/igcse-maths-tuition-online', label: 'IGCSE maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Cases, table, rule, test, reason: in that order'
  },

  personalityCss: `
.ag-root.ag-im .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-im .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-im .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-im .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-im .ag-steps li { margin-bottom: 0.4em; }
`,

  dossier: {
    curriculumAuthority: 'International Baccalaureate, Middle Years Programme Subject Brief, Mathematics, from 2014 (c) IBO 2015, unaltered copy hosted by an IB school (ibo.org returned 403): ages 11 to 16; four branches (number, algebra, geometry and trigonometry, statistics and probability); two levels of challenge, standard and extended, with the brief\'s definitions; key concepts form, logic, relationships; related concepts equivalence, measurement, quantity, justification; six global contexts; at least 50 hours per subject per year, 70 hours recommended in years 4 and 5 for eAssessment; four equally weighted criteria A to D with eight levels in four bands; on-screen examinations in mathematics and extended mathematics, three tasks of 40 marks (A and C, B and C, C and D); MYP certificate requirements.',
    localProject: 'Four criteria, not a percentage. The page explains MYP mathematics to families from the IB\'s own subject brief: the four branches, school-chosen content, standard versus extended in the IB\'s words, the four criteria and their eight levels, and the three 40-mark on-screen tasks, with an honest note that later revisions could not be read. It adds a clearly labelled planning table of our own for standard and extended work, then teaches a Criterion B investigation (diagonals of a polygon) in six steps with a mapped checklist and practice tasks, all ours, and states that we never work on an assessed school task. Lesson family: investigating patterns, from cases to justification.',
    requiredMentions: ['four branches of mathematical study', 'Standard mathematics aims to provide a sound knowledge of basic mathematical principles.', 'providing greater breadth and depth of study', 'eight possible achievement levels (1 to 8)', 'at least 50 hours of teaching time', 'are available in mathematics and extended mathematics', 'Investigating patterns', 'promotes sustained inquiry in mathematics'],
    sources: [
      { claim: 'IB MYP Subject Brief, Mathematics, from 2014: framework, levels, concepts, contexts, hours, criteria, eAssessment tasks and marks, certificate.', url: 'https://www.hwa.edu.sg/wp-content/uploads/2021/04/myp-brief_mathematics_2015.pdf' },
      { claim: 'IB MYP mathematics programme page (403 to curl; listed for readers, not used as a source).', url: 'https://www.ibo.org/programmes/middle-years-programme/curriculum/mathematics/' },
      { claim: 'IB, MYP brief listing on ibo.org (403 to curl; the school-hosted copy is the same IB document).', url: 'https://www.ibo.org/globalassets/new-structure/brochures-and-infographics/pdfs/myp-brief-mathematics-en.pdf' }
    ],
    rejectedClaims: [
      'Any change to the MYP mathematics framework after this brief: ibo.org returned 403; not retried; the page tells families to check the school\'s current guide.',
      'A list of extended-only topics: not in the brief read; our table is labelled as our own planning view.',
      'MYP 1 to 7 grade boundaries and eAssessment session dates: not verified; not stated.',
      'The brief\'s sample examination question: IB copyright; not reproduced.',
      'Commercial summaries of MYP criteria from tutoring blogs: not used.',
      'Any achievement level, grade or Diploma placement promise.'
    ]
  }
};
