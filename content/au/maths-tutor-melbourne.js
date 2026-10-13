'use strict';
// Maths tutor in Melbourne (ag- maths by city; AU cluster Phase 10, row 372).
// Intent: Greater Melbourne families and adults searching for a maths tutor: Prep to Year 12 and adults, the four VCE
// mathematics studies, and how online lessons run in Melbourne time. Links the VCE maths doors and the Victorian selective
// entry page instead of repeating them.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - VCAA, VCE Mathematics Study Design (Word download, 2023MathematicsSD.docx): Foundation Mathematics, General
//    Mathematics, Mathematical Methods and Specialist Mathematics, Units 1 and 2 and Units 3 and 4; "Accreditation
//    period Units 1-4: 1 January 2023" (printed without the dash).
//  - ABS, 2021 Census QuickStats, Greater Melbourne (2GMEL): primary 397,053; secondary 314,772; vocational 121,479;
//    university or other higher education 283,275; highest attainment Bachelor Degree level and above 1,319,895 (32.8%),
//    Year 12 637,407 (15.8%), Advanced Diploma and Diploma 400,602, Certificate III 380,352. Preschool figure not used
//    (on coding-classes-for-kids-melbourne).
//  - MAV (Mathematical Association of Victoria) home page: workshop "Evaluating and Prioritising Mathematics Improvement"
//    for school leaders.
//  - OpenStreetMap, one Overpass query (osm_base 2026-10-13T10:00:35Z): 740 highway ways named for the five
//    east-west and nine north-south streets of the central city grid.
// Lesson family: imperial survey units. Our calculation: grid bearing 20.08 degrees; median perpendicular
// offset of each street; 12 gaps between neighbouring street centrelines, mean 232.7 m = 11.57 chains (1 chain =
// 66 feet = 20.1168 m). Flinders to La Trobe 937.2 m; Spencer to Spring 1855.0 m. The quick rule
// 1 chain about 20 m gives 11.63 chains, close enough: the simple conversion wins. History of the survey is not claimed.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'MELBOURNE MATHS',
    label: 'Maths tutor in Melbourne',
    blurb: 'A maths tutor for Melbourne learners from Prep to VCE and adults, with the four VCE maths studies and a measuring project on the central city grid.'
  },
  slug: 'maths-tutor-melbourne',
  code: 'mtme',
  accent: '#7B281A',
  accentRationale: 'Melbourne maths: a muted brick red computed for Victoria, at least 20 RGB from every Victorian page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor in Melbourne',
  title: 'Maths Tutor in Melbourne | Prep to VCE and Adults, Online',
  description: 'Online maths tutor for Melbourne learners, Prep to Year 12 and adults: VCE Foundation, General, Methods and Specialist Mathematics, live in Melbourne time.',
  ogDescription: 'Measure the gaps between Melbourne\'s central city streets and convert them to chains. A Melbourne maths tutor turns an old unit into a modern lesson.',
  twitterDescription: 'Melbourne maths tutoring, live online: Prep to VCE and adult maths, in Melbourne time, with a real measuring project.',
  pageName: 'Maths Tutor in Melbourne',
  webPageDescription: 'Live online maths tutoring for learners in Greater Melbourne, from Prep to the four VCE mathematics studies and adult maths, with a unit-conversion project on the central city street grid.',
  courseDescription: 'Live online maths lessons for Melbourne learners, one to one or in level-matched groups of five to ten, from early number to VCE Specialist Mathematics and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Melbourne',
  navLinks: [
    { href: '#years', label: 'Year levels' },
    { href: '#vce', label: 'VCE maths' },
    { href: '#grid', label: 'A worked example' },
    { href: '#melbourne', label: 'Melbourne learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Melbourne &middot; Prep to VCE and adults &middot; Live online maths',
  h1: 'Maths tutor in Melbourne',
  lede: 'Stand on Swanston Street and walk one block west to Elizabeth Street. Most people would guess the distance; a map will tell you it is about 225 metres between the middle of one street and the middle of the next. Measure all twelve gaps across the central city grid and the average comes to 232.7 metres, which is almost exactly eleven and a half chains, an old surveying unit few Melburnians have heard of. That small investigation uses maps, averages, unit conversion and judgement about measurement error, which is the kind of maths we teach. Our live online maths tutoring serves Melbourne learners from Prep to Year 12, the four VCE mathematics studies and adults, in Melbourne time.',
  secondaryCta: { href: '#grid', label: 'See the street measurements' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Melbourne.',
  heroNote: 'Maths only on this page &middot; Prep to adult &middot; Independent of every Melbourne school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Prep to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['VCE', 'Foundation, General, Methods, Specialist'],
    ['Adults', 'Refreshers and bridging maths'],
    ['How', 'Live video, private or five to ten'],
    ['Time', 'Melbourne time, all year'],
    ['City project', 'The central city grid in chains']
  ],
  capsuleQ: 'Maths tutor in Melbourne, in brief',
  capsule: 'Modern Age Coders is an online maths tutor for Melbourne learners aged 6 to 67. We teach primary and secondary maths and the four VCE mathematics studies, Foundation Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics, as well as adult maths. Lessons are live over video in Melbourne time, privately or in level-matched groups of five to ten, and the first lesson is free.',
  picks: {
    eyebrow: 'Popular with Melbourne families',
    h2: 'Three maths courses to start from',
    lede: 'One for the primary years, one for the middle years where algebra arrives, and one built around senior functions and calculus. The full list follows below.',
    items: [
      {
        course: 'mental-maths-mastery-kids',
        code: 'MEL / 1',
        title: 'Mental maths and number sense',
        note: 'For Prep to Year 6: estimating, calculating in the head and checking whether an answer makes sense.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'MEL / 2',
        title: 'Middle years maths',
        note: 'Years 7 to 10: ratio, algebra, measurement and geometry, the groundwork for VCE.'
      },
      {
        course: 'complete-high-school-mathematics-mastery',
        code: 'MEL / 3',
        title: 'Senior maths',
        note: 'Functions, calculus and probability for students taking Mathematical Methods or Specialist Mathematics.'
      }
    ]
  },
  sections: [
    {
      id: 'years',
      tint: 'tint',
      eyebrow: 'Prep to Year 12',
      h2: 'Maths lessons for every Melbourne year level',
      lede: 'Victorian schools begin with Prep and finish with the VCE. We teach every stage between, and adults who want to return to any of them.',
      body: [
        {
          kind: 'table',
          caption: 'Year levels and the focus of lessons',
          head: ['Stage', 'Years', 'What we concentrate on'],
          rows: [
            ['Early primary', 'Prep to Year 2', 'Counting, number facts and the meaning of the equals sign'],
            ['Upper primary', 'Years 3 to 6', 'Multiplication, fractions, decimals and measurement in real units'],
            ['Lower secondary', 'Years 7 and 8', 'Integers, ratio, the first algebra and geometry'],
            ['Middle secondary', 'Years 9 and 10', 'Linear and quadratic functions, trigonometry and statistics'],
            ['VCE', 'Years 11 and 12', 'The VCE mathematics study the student has chosen'],
            ['Adults', 'Up to 67', 'Anything missed, rebuilt at a sensible pace']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Entry tests and national tests',
          left: [
            'Families preparing for a selective school test can use our <a class="ag-inline-link" href="/victorian-selective-entry-exam-maths-practice">Victorian selective entry maths</a> page. NAPLAN numeracy has its own <a class="ag-inline-link" href="/naplan-numeracy-practice-online">practice page</a>.',
            'This page is for everyday maths at every level.'
          ],
          rightH3: 'Year 10 and the step up',
          right: [
            'The jump from Year 10 to Mathematical Methods catches many students. Our <a class="ag-inline-link" href="/year-10-maths-methods-preparation">Year 10 Methods preparation</a> page explains what to strengthen first.',
            'Adults study in adult groups or privately, never alongside school students.'
          ]
        }
      ]
    },
    {
      id: 'vce',
      tint: 'deep',
      eyebrow: 'VCE mathematics',
      h2: 'The four VCE maths studies a Melbourne student can take',
      lede: 'The Victorian Curriculum and Assessment Authority sets out all four studies in one study design, whose accreditation for Units 1 to 4 began on 1 January 2023.',
      body: [
        {
          kind: 'table',
          caption: 'VCE mathematics studies in the VCAA study design',
          head: ['Study', 'Units', 'Our detailed page'],
          rows: [
            [
              'Foundation Mathematics',
              'Units 1 and 2, Units 3 and 4',
              '<a class="ag-inline-link" href="/vce-foundation-maths-help">VCE Foundation Maths</a>'
            ],
            [
              'General Mathematics',
              'Units 1 and 2, Units 3 and 4',
              '<a class="ag-inline-link" href="/vce-general-maths-tutoring">VCE General Maths</a>'
            ],
            [
              'Mathematical Methods',
              'Units 1 and 2, Units 3 and 4',
              '<a class="ag-inline-link" href="/vce-maths-methods-tutoring">VCE Maths Methods</a>'
            ],
            [
              'Specialist Mathematics',
              'Units 1 and 2, Units 3 and 4',
              '<a class="ag-inline-link" href="/vce-specialist-maths-tutoring">VCE Specialist Maths</a>'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Which study suits whom',
          left: [
            'Methods is the usual route to calculus-based courses after school, and Specialist goes further. General Mathematics suits students who want data, networks and financial modelling; Foundation focuses on maths for everyday life and work.',
            'We help students judge the fit early, before a difficult Unit 3 begins.'
          ],
          rightH3: 'No score promises',
          right: [
            'We teach the content and good exam habits. We never promise a study score or an ATAR, and school-assessed coursework stays the student\'s own work.',
            'Revision blocks before exams are available as a short private run.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: Victorian Curriculum and Assessment Authority, <a class="ag-inline-link" href="https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx" rel="noopener" target="_blank">VCE Mathematics Study Design</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'grid',
      tint: 'tint',
      eyebrow: 'A Melbourne worked example',
      h2: 'How many chains apart are Melbourne\'s central city streets?',
      lede: 'A chain is an old surveying length: 66 feet, which is exactly 20.1168 metres. We measured the central city grid from the map and asked whether its spacing looks like a whole number of chains.',
      body: [
        {
          kind: 'p',
          html: 'From OpenStreetMap we took every mapped piece of the five main streets running across the grid (Flinders, Collins, Bourke, Lonsdale and La Trobe) and the nine running up it (Spencer to Spring). The grid is tilted about 20.08 degrees from east-west, so we rotated our axes to match, then found the middle line of each street. The table shows the gap between each pair of neighbouring streets, centre to centre.'
        },
        {
          kind: 'table',
          caption: 'Gaps between neighbouring street centrelines, central city grid (our calculation from OpenStreetMap)',
          head: ['From', 'To', 'Metres', 'Chains'],
          numCols: [
            2,
            3
          ],
          rows: [
            ['Flinders', 'Collins', '242.5', '12.06'],
            ['Collins', 'Bourke', '225.4', '11.20'],
            ['Bourke', 'Lonsdale', '227.4', '11.30'],
            ['Lonsdale', 'La Trobe', '241.9', '12.03'],
            ['Spencer', 'King', '221.5', '11.01'],
            ['King', 'William', '245.6', '12.21'],
            ['William', 'Queen', '230.9', '11.48'],
            ['Queen', 'Elizabeth', '231.4', '11.50'],
            ['Elizabeth', 'Swanston', '225.4', '11.20'],
            ['Swanston', 'Russell', '236.0', '11.73'],
            ['Russell', 'Exhibition', '223.8', '11.13'],
            ['Exhibition', 'Spring', '240.5', '11.95']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The average',
              p: 'The twelve gaps average 232.7 metres, or 11.57 chains. Eleven and a half chains is 231.3 metres, only 1.4 metres from our average.'
            },
            {
              h3: 'Why single gaps disagree',
              p: 'Individual gaps run from 221.5 to 245.6 metres. Wide streets, dual carriageways and the way the map draws a street\'s middle line all move a single reading. Averaging many readings cancels much of that noise.'
            },
            {
              h3: 'The simple conversion wins',
              p: 'Using "a chain is about 20 metres" gives 11.63 chains instead of 11.57. For this question the rough conversion is close enough; the exact one matters only when the answer is tight.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Converting between units, rotating axes, finding a median to resist outliers, averaging repeated measurements and judging whether a pattern is real.',
            'Primary learners can measure one block with an online map; VCE students can model the measurement error properly.'
          ],
          rightH3: 'What we did not claim',
          right: [
            'We do not claim anything about how or why the grid was surveyed; we only report what the map measures today. Across the whole grid, Flinders to La Trobe is 937.2 metres and Spencer to Spring 1855.0 metres between centrelines.',
            'A good lesson keeps the measurement and the story separate.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Try it at home: the same investigation in five steps',
          head: ['Step', 'What to do', 'The maths inside'],
          rows: [
            ['1', 'Open any online map and find two parallel streets one block apart', 'Recognising parallel lines on a plan'],
            [
              '2',
              'Use the map\'s measuring tool from the middle of one street to the middle of the next, at right angles',
              'Perpendicular distance between lines'
            ],
            ['3', 'Repeat for four or five other pairs', 'Why one reading is not enough'],
            ['4', 'Find the mean and the median of your readings', 'Two kinds of average, and which resists an odd reading'],
            ['5', 'Divide by 20.1168 to convert to chains, then by 20 for the quick version', 'Unit conversion and estimating error']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'A Year 5 student can do the first three steps with a parent. A Year 9 student can add the averages and explain why the median barely moves when one strange reading is included. A VCE student can go further and estimate how far the true spacing could be from the measured one, given how the map was drawn. The same short task scales from primary school to senior study, which is exactly why we like it.'
        },
        {
          kind: 'source',
          html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap contributors</a>, one Overpass query on 13 October 2026, ODbL. All rotations, medians and conversions are our calculation.'
        }
      ]
    },
    {
      id: 'melbourne',
      tint: 'deep',
      eyebrow: 'Melbourne learners',
      h2: 'Learning in Greater Melbourne, from the 2021 Census',
      lede: 'The Census shows how many Melbourne residents were studying and what education adults had completed.',
      body: [
        {
          kind: 'table',
          caption: 'Greater Melbourne, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '397,053'],
            ['Attending secondary school', '314,772'],
            ['Attending vocational education, including TAFE', '121,479'],
            ['Attending university or other higher education', '283,275'],
            ['Highest level Bachelor Degree or above', '1,319,895 (32.8%)'],
            ['Highest level Year 12', '637,407 (15.8%)'],
            ['Highest level Advanced Diploma or Diploma', '400,602'],
            ['Highest level Certificate III', '380,352']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What the numbers suggest',
          left: [
            'Hundreds of thousands of Melbourne children are at school at any time, and a large adult population has studied beyond Year 12. Both groups ask us for maths help, for very different reasons.',
            'Figures are shown as published and are never added together.'
          ],
          rightH3: 'Maths teaching in Victoria',
          right: [
            'The Mathematical Association of Victoria supports maths teachers and school leaders, with workshops such as one on evaluating and prioritising mathematics improvement.',
            'Tutoring complements school teaching; it does not replace it. A good tutor asks what the class is doing this term and builds lessons around it, rather than running a separate syllabus that pulls a student two ways.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/2GMEL" rel="noopener" target="_blank">2021 Census QuickStats, Greater Melbourne</a>, CC BY 4.0; <a class="ag-inline-link" href="https://www.mav.vic.edu.au/" rel="noopener" target="_blank">Mathematical Association of Victoria</a>.'
        }
      ]
    },
    {
      id: 'live',
      tint: '',
      eyebrow: 'Online in Melbourne time',
      h2: 'How live online maths lessons work for Melbourne',
      lede: 'Melbourne runs on Australian Eastern time and changes its clocks for daylight saving each October and April. Our India-based teachers do not, so we keep every booking anchored to Melbourne time.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Private', p: 'One learner and one teacher, ideal before a SAC block or exam, or to rebuild a single topic.' },
            { h3: 'Small group', p: 'Five to ten learners at one level, with discussion that often makes the idea click.' },
            { h3: 'Working on screen', p: 'Learners write on a shared whiteboard so the teacher sees every step, not only the answer.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'From number facts to VCE confidence',
    lede: 'Learners begin wherever they are. The free lesson finds the right rung.',
    table: {
      caption: 'Four rungs',
      head: ['Usually', 'Rung', 'Secure when'],
      rows: [
        ['Prep to Year 2', '1. Facts', 'They know pairs that make 10 and use them without counting'],
        ['Years 3 to 6', '2. Measurement', 'They convert between metres and kilometres and estimate first'],
        ['Years 7 to 10', '3. Algebra', 'They rearrange a formula to make a different letter the subject'],
        ['VCE', '4. Analysis', 'They interpret a graph, a derivative or a distribution in words']
      ]
    },
    left: {
      h3: 'Starting in Year 11',
      ps: [
        'Students who start lessons in Year 11 often need a few junior skills reinforced. We say how long that will take at the start.',
        'Algebra and function notation are the usual gaps.'
      ]
    },
    right: {
      h3: 'Adult learners',
      ps: ['Adults return for study, work or curiosity, and usually move quickly.', 'We start from what is needed now.']
    }
  },
  catalogue: {
    eyebrow: 'The full list',
    h2: 'Maths courses for Melbourne learners',
    lede: 'Course titles are international; lessons follow Victorian stages and the VCE study a learner is taking.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Prep to Year 6',
        courses: [
          { code: 'MEL / P1', slug: 'early-math-foundations', title: 'First maths', blurb: 'Hands-on number and shape.' },
          { code: 'MEL / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every primary topic, carefully.' },
          { code: 'MEL / P3', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Fast and accurate in the head.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'MEL / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Number, algebra, geometry.' },
          { code: 'MEL / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rebuilding algebra from the start.' },
          { code: 'MEL / S3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems that stretch.' }
        ]
      },
      {
        num: 'III',
        h3: 'VCE and adults',
        sub: 'Years 11, 12 and beyond',
        courses: [
          { code: 'MEL / H1', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Functions and calculus.' },
          { code: 'MEL / H2', slug: 'ap-calculus-exam-prep', title: 'Calculus in depth', blurb: 'Derivatives and integrals.' },
          { code: 'MEL / H3', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Data and chance.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Timetabling',
    h2: 'Lessons that suit a Melbourne week',
    lede: 'We fix lessons in Melbourne time and handle the October and April clock changes ourselves.',
    slots: [
      { time: 'After school', l: 'Primary and middle years.' },
      { time: 'Weeknight evenings', l: 'VCE students and adults.' },
      { time: 'Weekends', l: 'Unhurried catch-up or extension.' }
    ],
    cells: [
      { h3: 'A familiar teacher', p: 'The same person each week.' },
      { h3: 'Brief updates', p: 'Parents hear what changed.' },
      { h3: 'Groups by stage', p: 'Five to ten per class.' },
      { h3: 'Maps and data', p: 'Real measurements beside textbook work.' },
      { h3: 'Private lessons', p: 'For one goal or deadline.' },
      { h3: 'Understanding first', p: 'Methods explained, then practised.' }
    ]
  },
  projectsH2: 'Projects our learners went on to build',
  projectsLede: 'Work by students whose maths grew into making things. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for others.',
  reviewsLede: 'Google reviews, quoted as written by families and learners.',
  fees: {
    h2: 'Fees for maths tutoring in Melbourne',
    lede: 'Melbourne families pay a flat monthly fee in US dollars, with no joining fee and no lock-in.',
    free: ['A full first lesson', 'A frank summary afterwards', 'No card needed'],
    group: ['Five to ten learners per class', 'One regular teacher', 'Practice marked and discussed', 'Stop any month'],
    one: ['Private lessons', 'Shaped around one learner', 'Useful before SACs and exams']
  },
  faq: {
    eyebrow: 'Melbourne maths questions',
    h2: 'Questions Melbourne families ask about a maths tutor',
    items: [
      {
        q: 'What does a maths tutor in Melbourne do?',
        a: 'A tutor diagnoses gaps, teaches the missing ideas and builds confidence through practice. Our lessons are live online in Melbourne time, privately or in small groups matched by level.'
      },
      {
        q: 'Which VCE maths studies do you cover?',
        a: 'All four in the VCAA study design: Foundation Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics.'
      },
      {
        q: 'What is a chain?',
        a: 'An old unit of length used in land surveying, equal to 66 feet or exactly 20.1168 metres. Our measurements put neighbouring central Melbourne streets about 11.6 chains apart, centre to centre.'
      },
      { q: 'Do you guarantee a study score?', a: 'No. We teach thoroughly and help with exam habits, but we make no score or ATAR promises.' },
      { q: 'Can Prep children have lessons?', a: 'Yes. Early lessons use objects, pictures and short games around number.' },
      { q: 'Are lessons in Melbourne time?', a: 'Yes, and we adjust when daylight saving starts and ends.' },
      {
        q: 'Do you teach adults?',
        a: 'Yes, in adult groups or privately, for bridging units, work, or simply to understand the maths that school rushed past.'
      },
      {
        q: 'Why measure streets in a maths lesson?',
        a: 'Because real measurements are messy. Students learn to repeat readings, choose a sensible average, convert units and decide how accurate an answer needs to be, which textbook exercises with tidy numbers rarely teach.'
      },
      { q: 'How much does it cost?', a: 'The first lesson is free. Monthly fees appear in the fees section on this page.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Melbourne',
    h2: 'Related pages',
    lede: 'VCE, tests and costs.',
    items: [
      { href: '/vce-maths-methods-tutoring', label: 'VCE Maths Methods', p: 'Functions and calculus.' },
      { href: '/vce-specialist-maths-tutoring', label: 'VCE Specialist Maths', p: 'The most demanding VCE maths.' },
      { href: '/vce-general-maths-tutoring', label: 'VCE General Maths', p: 'Data, networks and finance.' },
      { href: '/victorian-selective-entry-exam-maths-practice', label: 'Selective entry maths', p: 'Practice for the Year 9 test.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'Problems by year.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'What lessons cost.' }
    ]
  },
  start: {
    h2: 'Book a free Melbourne maths lesson',
    lede: 'Give us a number and a time. The first lesson is a proper lesson at the learner\'s level, with honest advice afterwards.',
    readFirst: 'Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or explore <a class="ag-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>.',
    note: 'Our staff are in India, so our number starts +91, and we have no Melbourne office. WhatsApp from an Australian phone reaches us fastest.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Victoria',
        links: [
          { href: '/vce-foundation-maths-help', label: 'VCE Foundation Maths' },
          { href: '/year-10-maths-methods-preparation', label: 'Year 10 Methods preparation' },
          { href: '/victorian-selective-entry-exam-maths-practice', label: 'Selective entry maths' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
          { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad' }
        ]
      }
    ],
    bottomRight: 'Measure twice, average once'
  },
  personalityCss: `
.ag-root.ag-mtme .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-mtme .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-mtme .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mtme .ag-table caption { text-align: left; font-weight: 605; }
.ag-root.ag-mtme .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-mtme .ag-slots { gap: 1.15rem; }
`,
  dossier: {
    curriculumAuthority: 'Victoria: VCAA, VCE Mathematics Study Design (Foundation Mathematics, General Mathematics, Mathematical Methods, Specialist Mathematics; Units 1 to 4 accredited from 1 January 2023).',
    localProject: 'Central city street grid from OpenStreetMap (2026-10-13T10:00:35Z): grid bearing 20.08 degrees; 12 centreline gaps, mean 232.7 m = 11.57 chains (11.5 chains = 231.3 m); Flinders to La Trobe 937.2 m, Spencer to Spring 1855.0 m. The rough rule 1 chain = 20 m gives 11.63 chains (simple conversion wins). Lesson family: chains and links to metres.',
    requiredMentions: [
      'Foundation Mathematics',
      '1 January 2023',
      '397,053',
      '314,772',
      '121,479',
      '283,275',
      '1,319,895',
      '637,407',
      'evaluating and prioritising mathematics improvement',
      'How many chains apart are Melbourne\'s central city streets?'
    ],
    sources: [
      {
        claim: 'VCAA, VCE Mathematics Study Design: four studies; accreditation from 1 January 2023.',
        url: 'https://www.vcaa.vic.edu.au/sites/default/files/2025-10/2023MathematicsSD.docx'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Greater Melbourne: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2GMEL'
      },
      { claim: 'Mathematical Association of Victoria: workshop on evaluating and prioritising mathematics improvement.', url: 'https://www.mav.vic.edu.au/' },
      {
        claim: 'OpenStreetMap, highway ways for the central city grid streets, Overpass query 13 October 2026.',
        url: 'https://www.openstreetmap.org/copyright'
      }
    ],
    rejectedClaims: [
      'The historical survey of Melbourne\'s grid, street widths in feet and the surveyor\'s name: the City of Melbourne page returned no content, so no history is claimed.',
      'Preschool attendance for Greater Melbourne: already on our Melbourne kids coding page.',
      'University of Melbourne maths outreach: its pages refuse curl with a bot challenge; not used.',
      'VCE results, study score distributions or school rankings: none on this page.',
      'Named tutoring businesses in Melbourne: none.'
    ]
  }
};
