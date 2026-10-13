'use strict';
// Maths tutor in Brisbane (ag- maths by city; AU cluster Phase 10, row 373).
// Intent: Greater Brisbane families and adults searching for a maths tutor: Prep to Year 12 and adults, Queensland senior
// maths, and online lessons on Brisbane time (no daylight saving). Links the Queensland Academies entry page and the
// national maths doors. QCAA returns 403 and is not cited; the Queensland Year 12 subject names come from The University of
// Queensland's own course pages.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - UQ, MATH1051 course page: prerequisite "Queensland Year 12 ... Mathematical Methods (Units 3 & 4, C)"; MATH1050:
//    "a grade of B or higher in Queensland Year 12 Specialist Mathematics (Units 3 & 4) (or equivalent)" as an alternative
//    route; MATH1040 named as the bridging alternative to Mathematical Methods. Grades are not printed on the page.
//  - ABS, 2021 Census QuickStats, Greater Brisbane (3GBRI): primary 214,799; secondary 176,965; vocational 58,186;
//    university or other higher education 138,872; highest attainment Year 12 335,842 (16.4%), Year 10 210,511 (10.3%),
//    Certificate III 277,477 (13.6%), Advanced Diploma and Diploma 200,443. Preschool and bachelor-level counts already
//    on our Brisbane coding pages; not used.
//  - OpenStreetMap, one Overpass query (osm_base 2026-10-13T10:18:51Z): 6 waterway=river ways named Brisbane River crossing
//    our rectangle (-27.60 to -27.35, 152.85 to 153.20).
// Lesson family: sinuosity. Our calculation: the mapped reach from [-27.5558, 152.7992] to [-27.3993, 153.153] runs
// 83.92 km along the channel against 39.0 km in a straight line, sinuosity 2.15; five equal sections
// from 1.27 to 2.62. Ruler steps: 100 m 83.64 km, 1 km 78.79, 5 km 56.44, 10 km 47.81. A 100 m
// ruler is already within half a per cent, so finer detail adds nothing: the simple method is enough there.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'BRISBANE MATHS',
    label: 'Maths tutor in Brisbane',
    blurb: 'A maths tutor for Brisbane learners from Prep to Year 12 and adults, with Queensland senior maths and a measuring project on the winding Brisbane River.'
  },
  slug: 'maths-tutor-brisbane',
  code: 'mtbr',
  accent: '#173E90',
  accentRationale: 'Brisbane maths: a muted river blue computed for Queensland, at least 20 RGB from every Queensland page accent, 10 from every AU accent and 6 from every colour in use',
  pageType: 'city',
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  routeLabel: 'Maths tutor in Brisbane',
  title: 'Maths Tutor in Brisbane | Prep to Year 12 and Adults, Online',
  description: 'Online maths tutor for Brisbane learners, Prep to Year 12 and adults: Queensland Mathematical Methods and Specialist Mathematics, live on Brisbane time all year.',
  ogDescription: 'The Brisbane River travels 83.92 km to cover 39.0 km. A Brisbane maths tutor measures how much it winds, and why the ruler matters.',
  twitterDescription: 'Brisbane maths tutoring, live online: Prep to Year 12 and adults, on Brisbane time, with a river-measuring project.',
  pageName: 'Maths Tutor in Brisbane',
  webPageDescription: 'Live online maths tutoring for Greater Brisbane learners from Prep to Queensland senior maths and adult maths, with a measurement project on the sinuosity of the Brisbane River.',
  courseDescription: 'Live online maths lessons for Brisbane learners, privately or in level-matched groups of fifteen to twenty, from early number to Specialist Mathematics and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Brisbane',
  navLinks: [
    { href: '#qld-years', label: 'Year levels' },
    { href: '#qld-senior', label: 'Senior maths' },
    { href: '#river', label: 'A worked example' },
    { href: '#brisbane', label: 'Brisbane learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Brisbane &middot; Prep to Year 12 and adults &middot; Maths online, on Brisbane time',
  h1: 'Maths tutor in Brisbane',
  lede: 'Look at the Brisbane River on a map and it barely seems to go anywhere. It loops round St Lucia, bends back past the city and doubles on itself again before reaching the bay. On the stretch we measured, the water travels 83.92 kilometres to make progress of only 39.0 kilometres as the crow flies, a ratio geographers call sinuosity. Measuring it raises real questions: which ruler, which endpoints, and how much detail is enough? Those are the questions good maths teaching asks. Our live online maths tutoring serves Brisbane learners from Prep to Year 12 and adults, with lessons on Brisbane time, which never changes for daylight saving.',
  secondaryCta: { href: '#river', label: 'See the river measurements' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Brisbane.',
  heroNote: 'Maths only on this page &middot; Prep to adult &middot; Independent of every Brisbane school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Prep to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['Senior', 'Mathematical Methods, Specialist and more'],
    ['Adults', 'Bridging units and refreshers'],
    ['How', 'Live video, private or five to ten'],
    ['Time', 'Brisbane time, no clock changes'],
    ['City project', 'How much the river winds']
  ],
  capsuleQ: 'Maths tutor in Brisbane, in brief',
  capsule: 'Brisbane learners aged 6 to 67 can study maths live online with Modern Age Coders: primary and secondary maths, Queensland senior subjects including Mathematical Methods and Specialist Mathematics, and adult maths. Lessons are timed in Brisbane, where clocks never change, and run either privately or with fifteen to twenty learners at the same level. The opening lesson is free.',
  picks: {
    eyebrow: 'How Brisbane families usually begin',
    h2: 'Three courses for Brisbane learners',
    lede: 'Primary number and measurement, algebra for the junior secondary years, and senior functions and calculus. The complete list appears below.',
    items: [
      {
        course: 'elementary-mathematics-complete-masterclass',
        code: 'BNE / 1',
        title: 'Primary maths',
        note: 'Prep to Year 6: number, fractions and measurement, with plenty of estimating before calculating.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'BNE / 2',
        title: 'Junior secondary maths',
        note: 'Years 7 to 10: algebra, ratio, measurement and geometry, ready for senior subjects.'
      },
      {
        course: 'complete-high-school-mathematics-mastery',
        code: 'BNE / 3',
        title: 'Senior maths',
        note: 'For Years 11 and 12: functions, calculus and statistics for Mathematical Methods and Specialist Mathematics.'
      }
    ]
  },
  sections: [
    {
      id: 'qld-years',
      tint: 'tint',
      eyebrow: 'Prep to Year 12',
      h2: 'A Brisbane maths tutor for each stage of school',
      lede: 'Queensland children start with Prep and finish with Year 12. We teach every year in between, and adults who want to revisit any of it.',
      body: [
        {
          kind: 'table',
          caption: 'What lessons emphasise at each stage',
          head: ['Stage', 'Years', 'Emphasis'],
          rows: [
            ['Prep and early primary', 'Prep to Year 2', 'Counting, comparing and first addition'],
            ['Primary', 'Years 3 to 6', 'Times tables, fractions, area and length'],
            ['Junior secondary', 'Years 7 to 9', 'Integers, algebra, geometry and statistics'],
            ['Year 10', 'Year 10', 'Getting ready for a senior maths subject'],
            ['Senior', 'Years 11 and 12', 'Methods, Specialist or another senior maths subject'],
            ['Adults', 'Up to 67', 'Bridging, workplace and interest-led maths']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Entrance tests and national tests',
          left: [
            'Families looking at the Queensland Academies can read our <a class="ag-inline-link" href="/queensland-academies-entry-maths-practice">Queensland Academies entry maths</a> page. For national tests there is <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>.',
            'This page is about maths at every stage.'
          ],
          rightH3: 'Typical requests',
          right: [
            'Catching up after a difficult unit, extension for a keen student, and adults preparing for a university bridging course.',
            'The free first lesson shows which applies.'
          ]
        }
      ]
    },
    {
      id: 'qld-senior',
      tint: 'deep',
      eyebrow: 'Senior maths in Queensland',
      h2: 'Queensland senior maths, as The University of Queensland names it',
      lede: 'Queensland\'s curriculum authority did not answer our requests, so we use the subject names that UQ itself prints in its course prerequisites. Those name two Queensland Year 12 subjects directly.',
      body: [
        {
          kind: 'table',
          caption: 'Queensland Year 12 subjects named in UQ course pages (read 13 October 2026)',
          head: ['Subject', 'Where UQ names it', 'In general terms'],
          rows: [
            [
              'Mathematical Methods (Units 3 and 4)',
              'Prerequisite for MATH1051 Calculus and Linear Algebra I, and for MATH1050 if MATH1040 is not taken',
              'Functions, calculus and statistics'
            ],
            [
              'Specialist Mathematics (Units 3 and 4)',
              'One route into MATH1050 Mathematical Foundations II',
              'Vectors, complex numbers, proof and further calculus'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Other senior maths subjects',
          left: [
            'Queensland schools offer other senior maths subjects as well, which we also teach. We do not list them here because we could not read the authority\'s own pages; your school\'s subject guide is the place to check.',
            'UQ also offers a bridging unit, MATH1040, for students who did not take Methods.'
          ],
          rightH3: 'Our promise',
          right: [
            'Careful teaching, practice and exam habits. No promised results or ATAR, and internal assessments remain the student\'s own work.',
            'We help students weigh up subject choices honestly.'
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Reading a prerequisite carefully is itself a maths skill. The University of Queensland pages specify the units of the subject (Units 3 and 4), a minimum result, and an "or equivalent" clause, and they offer a bridging course for students who took a different path. Students who learn to read conditions like these precisely, with every "and" and "or" in its place, find the logic sections of senior maths far less mysterious. We often use real prerequisite statements as reading practice before a unit on logic or sets.'
        },
        {
          kind: 'source',
          html: 'Sources: The University of Queensland, <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=MATH1051" rel="noopener" target="_blank">MATH1051</a> and <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=MATH1050" rel="noopener" target="_blank">MATH1050</a> course pages, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'river',
      tint: 'tint',
      eyebrow: 'A Brisbane worked example',
      h2: 'How much does the Brisbane River wind?',
      lede: 'Sinuosity is the length of a river\'s channel divided by the straight-line distance between its ends. A perfectly straight river scores 1; the more it winds, the higher the number.',
      body: [
        {
          kind: 'p',
          html: 'We downloaded the centre line of the Brisbane River from OpenStreetMap wherever it crosses a rectangle around the city, then followed the channel from its western end to its eastern end near the bay. The channel runs 83.92 kilometres; the straight line between the two ends is 39.0 kilometres. The sinuosity of the whole stretch is therefore 2.15. We then cut the channel into five sections of equal length and measured each one.'
        },
        {
          kind: 'table',
          caption: 'Five equal sections of the mapped channel, west to east (our calculation)',
          head: ['Section', 'Channel (km)', 'Straight line (km)', 'Sinuosity'],
          numCols: [
            1,
            2,
            3
          ],
          rows: [
            ['Section 1', '16.78', '7.69', '2.18'],
            ['Section 2', '16.78', '8.72', '1.92'],
            ['Section 3', '16.78', '8.00', '2.10'],
            ['Section 4', '16.78', '6.41', '2.62'],
            ['Section 5', '16.78', '13.22', '1.27']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Measuring the same channel with rulers of different lengths (our calculation)',
          head: ['Ruler step', 'Measured length (km)'],
          numCols: [
            1
          ],
          rows: [
            ['100 metres', '83.64'],
            ['1 kilometre', '78.79'],
            ['5 kilometres', '56.44'],
            ['10 kilometres', '47.81']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Where it winds most',
              p: 'Section 4 scores 2.62: its water travels more than two and a half times as far as a straight line would. Section 5, nearest the bay, is the straightest at 1.27.'
            },
            {
              h3: 'Longer rulers cut corners',
              p: 'A 10 kilometre ruler skips every bend and measures only 47.81 kilometres, little more than half the channel. Every measured length depends on the step size.'
            },
            {
              h3: 'When the simple ruler is enough',
              p: 'A 100 metre ruler gives 83.64 kilometres, within half a per cent of the full mapped line. Past that point, extra detail changes nothing worth knowing.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Ratios, distance between points, adding many short lengths, and how a measurement depends on the instrument. Senior students connect it to arc length and limits.',
            'Primary learners can trace the river with string on a printed map and compare it with a ruler.'
          ],
          rightH3: 'Honest limits',
          right: [
            'The result depends on our rectangle and on how the map draws the river, so it describes this mapped stretch, not an official river length. We make no claim about the river\'s total length.',
            'Map data: OpenStreetMap contributors, ODbL.'
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'The ruler table is the heart of the lesson for older students. It shows that "the length of a river" is not one fixed number but depends on how closely you follow it. The idea leads naturally to limits in senior calculus: as the steps get shorter, the measured length settles towards a value, and the question becomes how short is short enough. For a wandering river on a map, 100 metres already is.'
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How the same idea is taught at different ages',
          head: ['Year level', 'Task', 'Big idea'],
          rows: [
            [
              'Years 3 to 5',
              'Lay string along the river on a printed map, then straighten it against a ruler',
              'Curved and straight distance differ'
            ],
            ['Years 6 to 8', 'Divide channel length by straight distance for three sections', 'Ratios compare shapes, not sizes'],
            ['Years 9 and 10', 'Add Pythagoras distances between map points', 'Length of a path from coordinates'],
            ['Years 11 and 12', 'Shrink the step and watch the total settle', 'Limits and arc length']
          ]
        },
        {
          kind: 'source',
          html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a>, Brisbane River waterway ways, one Overpass query on 13 October 2026. Lengths, sections and ratios are our calculation.'
        }
      ]
    },
    {
      id: 'brisbane',
      tint: 'deep',
      eyebrow: 'Brisbane learners',
      h2: 'Greater Brisbane learners in the 2021 Census',
      lede: 'How many people in Greater Brisbane were studying in 2021, and the highest level of schooling or training adults had completed.',
      body: [
        {
          kind: 'table',
          caption: 'Greater Brisbane, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '214,799'],
            ['Attending secondary school', '176,965'],
            ['Attending vocational education, including TAFE', '58,186'],
            ['Attending university or other higher education', '138,872'],
            ['Highest level Year 12', '335,842 (16.4%)'],
            ['Highest level Year 10', '210,511 (10.3%)'],
            ['Highest level Certificate III', '277,477 (13.6%)'],
            ['Highest level Advanced Diploma or Diploma', '200,443']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Trades and maths',
          left: [
            'Certificate III is the highest qualification for 13.6% of Brisbane residents aged 15 and over. Trade work uses a great deal of practical maths, and adults from trades often want to formalise what they already do well.',
            'We print each figure as the ABS publishes it and never add rows together.'
          ],
          rightH3: 'School-age learners',
          right: [
            'With hundreds of thousands of Brisbane children at school, the requests we see range from Prep counting to Year 12 calculus.',
            'Each learner starts with a free lesson at their level, and the teacher reads the school\'s current unit before planning anything, so that lessons support classwork instead of competing with it.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/3GBRI" rel="noopener" target="_blank">2021 Census QuickStats, Greater Brisbane</a>, read 13 October 2026, CC BY 4.0.'
        }
      ]
    },
    {
      id: 'qld-online',
      tint: '',
      eyebrow: 'Online on Brisbane time',
      h2: 'Live online lessons on a clock that never moves',
      lede: 'Queensland does not use daylight saving, so Brisbane is four and a half hours ahead of India all year round. Lesson times stay put from January to December.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Private tutoring', p: 'One teacher, one learner, at a weekly time that suits the family.' },
            { h3: 'Small classes', p: 'Between five and ten learners at a similar level, with a regular teacher.' },
            { h3: 'Shared workspace', p: 'Learners write their working where the teacher can see it, so each slip is spotted early.' }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Families with relatives in Sydney or Melbourne will know that Brisbane is an hour behind them in summer and level with them in winter. We fix every lesson in Brisbane time, so that change never affects your booking.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Stepping stones in maths',
    lede: 'A learner steps on wherever they are.',
    table: {
      caption: 'Four stepping stones',
      head: ['Usually', 'Stone', 'Secure when'],
      rows: [
        ['Prep to Year 2', '1. Comparing', 'They can say which of two lengths is longer, and by how much'],
        ['Years 3 to 6', '2. Measuring', 'They choose sensible units and read scales accurately'],
        ['Years 7 to 10', '3. Relating', 'They express one quantity as a ratio of another'],
        ['Years 11 and 12', '4. Limiting', 'They see how many small steps approach a true value']
      ]
    },
    left: {
      h3: 'Starting in Year 11',
      ps: [
        'Late starters often need algebra repaired first. We estimate how long that will take.',
        'Most catch up within a term of focused work.'
      ]
    },
    right: {
      h3: 'Adults',
      ps: ['Adults often come for UQ or other university bridging maths.', 'We start from what is needed now.']
    }
  },
  catalogue: {
    eyebrow: 'Every maths course',
    h2: 'Maths courses for Brisbane learners',
    lede: 'International course names, taught to Queensland stages and senior subjects.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Prep to Year 6',
        courses: [
          { code: 'BNE / P1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting with objects.' },
          { code: 'BNE / P2', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Quick, accurate number work.' },
          { code: 'BNE / P3', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every primary topic.' }
        ]
      },
      {
        num: 'II',
        h3: 'Junior secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'BNE / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 7 to 10 maths', blurb: 'Algebra and measurement.' },
          { code: 'BNE / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra rebuilt', blurb: 'For lost confidence.' },
          { code: 'BNE / S3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Challenging problems.' }
        ]
      },
      {
        num: 'III',
        h3: 'Senior and adults',
        sub: 'Years 11, 12 and beyond',
        courses: [
          { code: 'BNE / H1', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Methods-level content.' },
          { code: 'BNE / H2', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'For Methods and Specialist.' },
          { code: 'BNE / H3', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data and chance.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Lesson times',
    h2: 'Fitting lessons into a Brisbane week',
    lede: 'Since Brisbane keeps the same clock all year, a lesson booked once stays at the same time.',
    slots: [
      { time: 'After school', l: 'Primary and junior secondary.' },
      { time: 'Evenings', l: 'Senior students and adults.' },
      { time: 'Saturday or Sunday', l: 'Longer sessions.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'Week after week.' },
      { h3: 'Progress notes', p: 'Short and honest.' },
      { h3: 'Groups of fifteen to twenty', p: 'Matched by level.' },
      { h3: 'Maps and measurement', p: 'Real data beside exercises.' },
      { h3: 'One to one', p: 'For a test or a gap.' },
      { h3: 'Understanding first', p: 'Then practice.' }
    ]
  },
  projectsH2: 'Projects built by our learners',
  projectsLede: 'What students made once the maths was secure. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, unedited.',
  fees: {
    h2: 'Fees for maths tutoring in Brisbane',
    lede: 'Brisbane families pay one monthly fee in US dollars. There is no joining fee and no contract.',
    free: ['A real lesson at the right level', 'An honest summary', 'No card'],
    group: ['Fifteen to twenty learners', 'One teacher', 'Marked practice', 'Stop any month'],
    one: ['Private lessons', 'Built around one learner', 'Good before exams']
  },
  faq: {
    eyebrow: 'Brisbane maths questions',
    h2: 'What Brisbane families ask about maths tutoring',
    items: [
      {
        q: 'What can a maths tutor in Brisbane do?',
        a: 'Identify gaps, explain the missing ideas clearly and build confidence through practice, in live online lessons on Brisbane time, privately or in small groups.'
      },
      {
        q: 'Which senior maths subjects do you teach?',
        a: 'Mathematical Methods and Specialist Mathematics, which UQ names in its course prerequisites, and the other senior maths subjects Queensland schools offer.'
      },
      {
        q: 'What is sinuosity?',
        a: 'The length of a river\'s channel divided by the straight-line distance between its ends. Our measured stretch of the Brisbane River scores 2.15.'
      },
      {
        q: 'Why does the measured length depend on the ruler?',
        a: 'A long ruler cuts across bends. With 10 kilometre steps we measured 47.81 km; with 100 metre steps, 83.64 km.'
      },
      { q: 'Do you guarantee results or an ATAR?', a: 'No. We teach carefully but make no result or ATAR promises.' },
      { q: 'Do lesson times change in summer?', a: 'No. Queensland does not use daylight saving, so Brisbane lessons stay at the same time all year.' },
      { q: 'Do you teach adults?', a: 'Yes, often for university bridging maths or work.' },
      {
        q: 'Can a Year 10 student get ready for Mathematical Methods?',
        a: 'Yes. Algebra, functions and confident graph reading are the usual preparation, and a term of steady weekly lessons is often enough to make the step into Year 11 feel manageable.'
      },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. Monthly fees are shown in the fees section.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Brisbane',
    h2: 'Related pages',
    lede: 'Entry tests, curriculum help and costs.',
    items: [
      { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies entry maths', p: 'Practice for the entry test.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Years 3 to 9.' },
      { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths', p: 'Curriculum help.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'By year level.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'Prices explained.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring', p: 'Across Australia.' }
    ]
  },
  start: {
    h2: 'Book a free Brisbane maths lesson',
    lede: 'Tell us how to reach you. The first lesson is taught at the learner\'s level and ends with clear advice.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how lessons work</a> or <a class="ag-inline-link" href="/courses">browse the courses</a>.',
    note: 'Our team works from India, so our number begins +91, and we have no Brisbane office. WhatsApp from an Australian mobile is quickest.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Queensland',
        links: [
          { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies maths' },
          { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
          { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad' },
          { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competitions' }
        ]
      }
    ],
    bottomRight: 'Every length depends on the ruler'
  },
  personalityCss: `
.ag-root.ag-mtbr .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-mtbr .ag-capsule { border-left-width: 6px; border-radius: 5px; }
.ag-root.ag-mtbr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-mtbr .ag-table caption { text-align: left; font-weight: 630; }
.ag-root.ag-mtbr .ag-band-head h3 { letter-spacing: -0.011em; }
.ag-root.ag-mtbr .ag-slots { gap: 0.9rem; }
`,
  dossier: {
    curriculumAuthority: 'Queensland senior mathematics named via The University of Queensland course pages (MATH1051 and MATH1050 prerequisites): Queensland Year 12 Mathematical Methods (Units 3 and 4) and Specialist Mathematics (Units 3 and 4). QCAA returned 403 and is not cited.',
    localProject: 'Sinuosity of the Brisbane River from OpenStreetMap (2026-10-13T10:18:51Z): channel 83.92 km, straight line 39.0 km, sinuosity 2.15; five sections 2.18, 1.92, 2.1, 2.62, 1.27; ruler steps 100 m 83.64, 1 km 78.79, 5 km 56.44, 10 km 47.81 km (a 100 m ruler is enough). Lesson family: sinuosity.',
    requiredMentions: [
      'MATH1051',
      'Mathematical Foundations II',
      '214,799',
      '176,965',
      '58,186',
      '138,872',
      '335,842',
      '277,477',
      'How much does the Brisbane River wind?',
      '83.92'
    ],
    sources: [
      {
        claim: 'UQ MATH1051 and MATH1050 course pages: Queensland Year 12 Mathematical Methods and Specialist Mathematics (Units 3 and 4) as prerequisites.',
        url: 'https://programs-courses.uq.edu.au/course.html?course_code=MATH1051'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Greater Brisbane: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/3GBRI'
      },
      { claim: 'OpenStreetMap Brisbane River waterway ways, Overpass query 13 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'QCAA syllabuses for Queensland senior maths subjects: 403 to curl\'s default agent; not used or circumvented. Subjects not named by UQ are not listed.',
      'The total length of the Brisbane River: no primary source read; only our mapped stretch is reported.',
      'Queensland Association of Mathematics Teachers: its old domain now hosts an unrelated business; not used.',
      'Preschool and bachelor-level counts for Greater Brisbane: already on our Brisbane coding pages.',
      'Named tutoring businesses in Brisbane: none.'
    ]
  }
};
