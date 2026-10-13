'use strict';
// Maths tutor on the Gold Coast (ag- maths by city; AU cluster Phase 10, row 377).
// Intent: Gold Coast families and adults searching for a maths tutor: Prep to Year 12 and adults, Queensland senior
// maths, and online lessons on Queensland time. QCAA returns 403 and is not cited; Year 12 subject names come from UQ
// course pages (shared with the Brisbane page, written fresh here).
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - UQ MATH1051 and MATH1050 course pages: Queensland Year 12 Mathematical Methods (Units 3 & 4) and Specialist
//    Mathematics (Units 3 & 4) as prerequisite routes.
//  - ABS, 2021 Census QuickStats, Gold Coast (SA4 309): primary 49,914; secondary 41,917; vocational 16,391; university or
//    other higher education 29,000; highest attainment Bachelor Degree level and above 115,008 (21.8%), Year 12 85,515
//    (16.2%), Advanced Diploma and Diploma 60,070 (11.4%), Certificate III 80,100 (15.2%). None of these appears on our Gold
//    Coast coding pages.
//  - OpenStreetMap, one Overpass query (osm_base 2026-10-13T10:20:53Z): buildings with a height tag in a small Surfers Paradise
//    rectangle; six at 50 m or more, tallest tagged 158 m (Circle on Cavill South Tower, 50 levels). Heights are as tagged,
//    not official.
// Lesson family: shadow length from height and sun elevation (tangent ratio). Our calculation (NOAA solar position
// approximation, latitude -28.0): solar noon elevation 38.55 degrees on the June solstice (simple rule 90 - |lat - decl| gives
// 38.55, the simple rule wins at noon), 61.58 at the September equinox, 85.41 at the December solstice; at
// 3:00 pm AEST 20.73, 34.12 and 45.9. Shadow per metre of height = 1 / tan(elevation).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'GOLD COAST MATHS',
    label: 'Maths tutor on the Gold Coast',
    blurb: 'A maths tutor for Gold Coast learners from Prep to Year 12 and adults, with Queensland senior maths and a trigonometry project on tower shadows.'
  },
  slug: 'maths-tutor-gold-coast',
  code: 'mtgc',
  accent: '#141481',
  accentRationale: 'Gold Coast maths: a deep muted ultramarine computed for Queensland, at least 20 RGB from every Queensland page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor on the Gold Coast',
  title: 'Maths Tutor Gold Coast | Prep to Year 12 and Adults, Online',
  description: 'Online maths tutor for Gold Coast learners, Prep to Year 12 and adults: Queensland Mathematical Methods and Specialist Mathematics, live on Queensland time.',
  ogDescription: 'How long is a Surfers Paradise tower\'s shadow at 3 pm in winter? A Gold Coast maths tutor works it out with one ratio, and checks it in summer too.',
  twitterDescription: 'Gold Coast maths tutoring, live online: Prep to Year 12 and adults, with a trigonometry project on beachfront shadows.',
  pageName: 'Maths Tutor on the Gold Coast',
  webPageDescription: 'Live online maths tutoring for Gold Coast learners from Prep to Queensland senior maths and adult maths, with a trigonometry project on the shadows of Surfers Paradise towers.',
  courseDescription: 'Live online maths lessons for Gold Coast learners, one to one or in level-matched groups of five to ten, from early number to Specialist Mathematics and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor on the Gold Coast',
  navLinks: [
    { href: '#gc-levels', label: 'Year levels' },
    { href: '#gc-senior', label: 'Senior maths' },
    { href: '#shadows', label: 'A worked example' },
    { href: '#goldcoast', label: 'Gold Coast learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Gold Coast, Queensland &middot; Prep to Year 12 and adults &middot; Live maths lessons online',
  h1: 'Maths tutor on the Gold Coast',
  lede: 'On a winter afternoon in Surfers Paradise, the tall towers along the beachfront throw long shadows towards the sand. How long? The answer needs just two numbers, the height of the building and the angle of the sun above the horizon, and one ratio from trigonometry. A 158 metre tower on the June solstice at 3:00 pm casts a shadow about 417 metres long; at noon in December, barely 13. Working it out is a perfect Year 10 problem with a real place behind it. We teach Gold Coast learners live online from Prep right through to Year 12, plus adults, with every lesson set in Queensland time.',
  secondaryCta: { href: '#shadows', label: 'See the shadow calculations' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner on the Gold Coast.',
  heroNote: 'Maths only on this page &middot; Prep to adult &middot; Independent of every Gold Coast school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'Prep to Year 6'],
    ['Secondary', 'Years 7 to 10'],
    ['Senior', 'Methods, Specialist and other subjects'],
    ['Adults', 'Bridging and workplace maths'],
    ['How', 'Live video, one to one or five to ten'],
    ['Time', 'Queensland time, all year'],
    ['City project', 'Tower shadows with trigonometry']
  ],
  capsuleQ: 'Maths tutor on the Gold Coast, in brief',
  capsule: 'Gold Coast families can book live online maths lessons with Modern Age Coders for anyone aged 6 to 67. We teach everything from early number to senior calculus: the primary years, the secondary years, Queensland Year 12 subjects including Mathematical Methods and Specialist Mathematics, and maths for grown-ups. Times are set in Queensland time, which has no daylight saving, and learners choose private lessons or a group of five to ten at their level. Trying a first lesson costs nothing.',
  picks: {
    eyebrow: 'A good place to start on the Gold Coast',
    h2: 'Three maths courses Gold Coast learners choose',
    lede: 'Mental arithmetic and number sense for younger children, the trigonometry and algebra of Years 7 to 10, and precalculus for students moving into senior maths. The complete range is lower down.',
    items: [
      {
        course: 'mental-maths-mastery-kids',
        code: 'GC / 1',
        title: 'Number sense and mental maths',
        note: 'Prep to Year 6: calculating, estimating and checking, so that written methods make sense later.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'GC / 2',
        title: 'Secondary maths, Years 7 to 10',
        note: 'Equations, Pythagoras and first trigonometry: exactly the toolkit the shadow problem on this page needs.'
      },
      {
        course: 'ap-precalculus-exam-prep-course',
        code: 'GC / 3',
        title: 'Functions and precalculus',
        note: 'Strong function skills and trigonometric graphs for students heading into Mathematical Methods.'
      }
    ]
  },
  sections: [
    {
      id: 'gc-levels',
      tint: 'tint',
      eyebrow: 'Prep to Year 12',
      h2: 'Maths lessons for every Gold Coast year level',
      lede: 'Gold Coast schools follow Queensland\'s structure, from Prep through to Year 12. Lessons match the year and the topic a learner is working on.',
      body: [
        {
          kind: 'table',
          caption: 'Year levels and lesson focus',
          head: ['Years', 'Stage', 'Typical lesson topics'],
          rows: [
            ['Prep to Year 2', 'Early years', 'Counting, number bonds, simple measuring'],
            ['Years 3 to 6', 'Primary', 'Multiplication, fractions, angles, time and timetables'],
            ['Years 7 and 8', 'Lower secondary', 'Integers, equations, area and volume'],
            ['Years 9 and 10', 'Upper secondary', 'Pythagoras, trigonometry, functions and probability'],
            ['Years 11 and 12', 'Senior', 'The senior maths subject the student is taking'],
            ['Adults', 'Any age to 67', 'Bridging units, trade maths and refreshers']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Tests along the way',
          left: [
            'Students aiming for a Queensland Academy can use our <a class="ag-inline-link" href="/queensland-academies-entry-maths-practice">Queensland Academies entry maths</a> page. For NAPLAN, see <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>.',
            'Competition-minded students can try <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">Australian Mathematics Competition practice</a>.'
          ],
          rightH3: 'Who books lessons',
          right: [
            'Students who have fallen behind after a move or a busy term, students who want more challenge than class provides, and adults returning to study.',
            'Each starts with a free lesson pitched at their level.'
          ]
        }
      ]
    },
    {
      id: 'gc-senior',
      tint: 'deep',
      eyebrow: 'Senior maths in Queensland',
      h2: 'Senior maths for Gold Coast students',
      lede: 'Queensland\'s curriculum authority did not respond to our requests, so for subject names we rely on a university that must state them exactly: The University of Queensland names two Year 12 maths subjects in its course prerequisites.',
      body: [
        {
          kind: 'table',
          caption: 'Queensland Year 12 subjects in UQ prerequisites (read 13 October 2026)',
          head: ['Year 12 subject', 'Role in UQ prerequisites', 'Main topics'],
          rows: [
            [
              'Mathematical Methods (Units 3 and 4)',
              'Required for MATH1051, the first-year calculus and linear algebra course',
              'Calculus, functions, probability'
            ],
            [
              'Specialist Mathematics (Units 3 and 4)',
              'An alternative route into MATH1050',
              'Vectors, complex numbers, further calculus and proof'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Other options',
          left: [
            'Gold Coast schools also offer other senior maths subjects, and we teach those too; check your school\'s handbook for its list. Students without Methods can still reach university maths through a bridging course such as UQ\'s MATH1040.',
            'The trigonometry in our shadow project sits right at the start of Methods.'
          ],
          rightH3: 'Straight talk',
          right: [
            'We teach thoroughly and build exam habits, but we promise no results and no ATAR. Internal assessments are the student\'s own work, always.',
            'If a subject is the wrong fit, we say so early.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources: The University of Queensland course pages <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=MATH1051" rel="noopener" target="_blank">MATH1051</a> and <a class="ag-inline-link" href="https://programs-courses.uq.edu.au/course.html?course_code=MATH1050" rel="noopener" target="_blank">MATH1050</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'shadows',
      tint: 'tint',
      eyebrow: 'A Gold Coast worked example',
      h2: 'How long are the shadows of Surfers Paradise towers?',
      lede: 'If the sun is a certain angle above the horizon, a building of height h casts a shadow of length h divided by the tangent of that angle. The hard part is finding the angle.',
      body: [
        {
          kind: 'p',
          html: 'We took building heights from OpenStreetMap for a small area of Surfers Paradise; six buildings there are tagged as 50 metres or taller. Then we calculated the sun\'s height in the sky at latitude 28 degrees south using the standard approximation published for solar position, for three dates in 2026 and two times of day: solar noon, when the sun is highest, and 3:00 pm Queensland time.'
        },
        {
          kind: 'table',
          caption: 'Sun elevation above the horizon at latitude 28 degrees south, 2026 (our calculation)',
          head: ['Date', 'Solar noon (AEST)', 'Elevation at noon', 'Elevation at 3:00 pm', 'Shadow per metre at 3:00 pm'],
          rows: [
            ['21 June (winter solstice)', '11:48', '38.55&deg;', '20.73&deg;', '2.64 m'],
            ['23 September (equinox)', '11:39', '61.58&deg;', '34.12&deg;', '1.48 m'],
            ['21 December (summer solstice)', '11:44', '85.41&deg;', '45.9&deg;', '0.97 m']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Shadow lengths for the six tallest tagged buildings (our calculation; heights as mapped)',
          head: ['Building', 'Height (m)', 'June noon (m)', 'June 3 pm (m)', 'December noon (m)'],
          numCols: [
            1,
            2,
            3,
            4
          ],
          rows: [
            ['Circle on Cavill South Tower', '158', '198', '417', '13'],
            ['Unnamed tower', '150', '188', '396', '12'],
            ['Unnamed tower', '130', '163', '343', '10'],
            ['Unnamed tower', '130', '163', '343', '10'],
            ['Focus Apartments', '103', '129', '272', '8'],
            ['Spectrum Holiday Apartments', '57', '72', '151', '5']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'The simple rule wins at noon',
              p: 'At solar noon, the sun\'s elevation is simply 90 degrees minus the gap between your latitude and the sun\'s declination. That shortcut gives 38.55 degrees in June, exactly matching the full calculation. For noon questions, the short rule is all you need.'
            },
            {
              h3: 'Afternoon needs the full method',
              p: 'At 3:00 pm the sun has moved west and dropped to 20.73 degrees in June. No simple rule gives that; it needs the hour angle. The shadow then stretches to 2.64 metres for every metre of height.'
            },
            {
              h3: 'Summer shrinks shadows',
              p: 'Near the December solstice the noon sun is almost overhead at 85.41 degrees, so a 158 metre tower casts a noon shadow of only about 13 metres.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Right-angled triangles, the tangent ratio, angles of elevation, rearranging a formula, and reading the effect of the seasons from a table.',
            'Senior students can derive the noon rule from a diagram of the Earth and sun, and explore the full formula with the hour angle. Younger students can check the idea outdoors: measure a friend\'s height and shadow at lunchtime, divide, and compare the ratio with the table.'
          ],
          rightH3: 'Honest limits',
          right: [
            'Heights are as tagged on the map, not official figures, and we assume flat ground in front of each building. Real shadows also depend on direction and on what they fall across.',
            'Map data: OpenStreetMap contributors, ODbL.'
          ]
        },
        {
          kind: 'source',
          html: 'Heights: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a>, building height tags, one Overpass query on 13 October 2026. Sun angles and shadow lengths are our calculation using the widely used NOAA solar-position approximation.'
        }
      ]
    },
    {
      id: 'goldcoast',
      tint: 'deep',
      eyebrow: 'Gold Coast learners',
      h2: 'Gold Coast learners and qualifications, 2021 Census',
      lede: 'The ABS publishes figures for the Gold Coast statistical region. They show a large school population and many adults with trade and diploma qualifications.',
      body: [
        {
          kind: 'table',
          caption: 'Gold Coast (statistical area level 4), 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '49,914'],
            ['Attending secondary school', '41,917'],
            ['Attending vocational education, including TAFE', '16,391'],
            ['Attending university or other higher education', '29,000'],
            ['Highest level Bachelor Degree or above', '115,008 (21.8%)'],
            ['Highest level Year 12', '85,515 (16.2%)'],
            ['Highest level Certificate III', '80,100 (15.2%)'],
            ['Highest level Advanced Diploma or Diploma', '60,070 (11.4%)']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What it means for maths tutoring',
          left: [
            'Certificate III is the highest qualification for 15.2% of Gold Coast residents aged 15 and over, against 9.1% in Greater Sydney and 9.4% in Greater Melbourne in the same Census. We meet many adults whose maths is practical and strong but who want the formal language that further study requires.',
            'All figures are printed as published, without adding rows.'
          ],
          rightH3: 'For younger learners',
          right: [
            'Tens of thousands of Gold Coast children were at school on Census night, and our lessons for them span everything from early counting to senior calculus.',
            'A teacher reads the current school unit before planning lessons.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/309" rel="noopener" target="_blank">2021 Census QuickStats, Gold Coast</a>, read 13 October 2026, CC BY 4.0.'
        }
      ]
    },
    {
      id: 'gc-online',
      tint: '',
      eyebrow: 'Online on Queensland time',
      h2: 'Online maths lessons for the Gold Coast',
      lede: 'The Gold Coast keeps Queensland time all year, four and a half hours ahead of India. In summer that puts it an hour behind New South Wales just across the border, which matters to families who work or study on both sides; our bookings always follow Queensland time.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Private', p: 'One learner, one teacher, a fixed time each week.' },
            { h3: 'Small classes', p: 'Five to ten learners at one level, working through the same topic together.' },
            { h3: 'Visible thinking', p: 'Students write their steps on a shared screen so the teacher can respond to each one.' }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'Online lessons suit Gold Coast families with sport, surf club or part-time work commitments: there is no travel, and a lesson can sit straight after training without a rush across town.'
        },
        {
          kind: 'p',
          mt: true,
          html: 'Parents sometimes ask whether a teacher on a screen can really tell when a child is stuck. In practice the shared whiteboard shows more than a classroom does: every pause, crossed-out line and second attempt is visible, and the teacher can ask about it straight away. Quieter students, who might not raise a hand in a class of twenty-five, often speak up far more in a small online group.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'From counting to trigonometry',
    lede: 'Learners come in at any level; the free lesson tells us which.',
    table: {
      caption: 'Four levels',
      head: ['Usually', 'Level', 'Secure when'],
      rows: [
        ['Prep to Year 2', '1. Number', 'They add within 20 without counting on fingers'],
        ['Years 3 to 6', '2. Angles and time', 'They read clocks, measure angles and estimate both'],
        ['Years 7 to 10', '3. Triangles', 'They use Pythagoras and tangent to find unknown sides'],
        ['Years 11 and 12', '4. Models', 'They build a formula from a situation and test it against data']
      ]
    },
    left: {
      h3: 'Late to senior maths',
      ps: [
        'Starting in Year 11 is common. We check algebra first and plan the catch-up.',
        'Trigonometry and functions are the usual gaps.'
      ]
    },
    right: {
      h3: 'Adults',
      ps: ['Adults often want bridging maths for university or a trade upgrade.', 'Lessons start from what they need now.']
    }
  },
  catalogue: {
    eyebrow: 'Full course list',
    h2: 'Maths courses for Gold Coast learners',
    lede: 'International course names, taught to Queensland years and subjects.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Prep to Year 6',
        courses: [
          { code: 'GC / P1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Hands-on counting.' },
          { code: 'GC / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number, shape, data, measurement.' },
          { code: 'GC / P3', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed arithmetic', blurb: 'Once foundations are firm.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'GC / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 7 to 10 maths', blurb: 'Triangles, algebra, data.' },
          { code: 'GC / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra rebuilt', blurb: 'Confidence restored.' },
          { code: 'GC / S3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Calculate shadows in code.' }
        ]
      },
      {
        num: 'III',
        h3: 'Senior and adults',
        sub: 'Years 11, 12 and beyond',
        courses: [
          { code: 'GC / H1', slug: 'ap-precalculus-exam-prep-course', title: 'Precalculus', blurb: 'Trig and functions.' },
          { code: 'GC / H2', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Calculus and statistics.' },
          { code: 'GC / H3', slug: 'statistics-probability-maths-course', title: 'Statistics', blurb: 'Data and probability.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'When lessons happen',
    h2: 'A Gold Coast lesson timetable',
    lede: 'Queensland time is steady all year, so once a lesson time is set it stays put.',
    slots: [
      { time: 'After school', l: 'Primary and lower secondary.' },
      { time: 'Evening', l: 'Senior students and adults.' },
      { time: 'Weekend', l: 'Longer, relaxed sessions.' }
    ],
    cells: [
      { h3: 'Consistent teacher', p: 'Same person each week.' },
      { h3: 'Parent notes', p: 'Brief and honest.' },
      { h3: 'Classes by level', p: 'Five to ten learners.' },
      { h3: 'Local problems', p: 'Shadows, beaches and timetables.' },
      { h3: 'Private option', p: 'For tests and gaps.' },
      { h3: 'Meaning first', p: 'Why, then how.' }
    ]
  },
  projectsH2: 'Things our learners have made',
  projectsLede: 'Projects by students who began with careful maths. The <a class="ag-inline-link" href="/student-labs">student labs</a> list others.',
  reviewsLede: 'Reviews from Google, unchanged.',
  fees: {
    h2: 'Fees for maths tutoring on the Gold Coast',
    lede: 'Gold Coast families pay a monthly fee in US dollars, with nothing to pay at sign-up and no fixed term.',
    free: ['A first lesson at the right level', 'Advice afterwards', 'No card details'],
    group: ['Five to ten learners per class', 'Same teacher weekly', 'Marked practice', 'Stop any month'],
    one: ['Private lessons', 'Built around one learner', 'Helpful before exams']
  },
  faq: {
    eyebrow: 'Gold Coast maths questions',
    h2: 'Questions Gold Coast families ask about maths tutoring',
    items: [
      {
        q: 'What does a Gold Coast maths tutor do?',
        a: 'Finds the gaps in a learner\'s maths, teaches the missing ideas and builds confidence with practice, in live online lessons on Queensland time, privately or in a small group.'
      },
      {
        q: 'Can you help with Year 11 and 12 maths on the Gold Coast?',
        a: 'Yes. We cover Mathematical Methods and Specialist Mathematics, both named in UQ prerequisites, as well as any other senior maths subject a Gold Coast school runs.'
      },
      {
        q: 'How do you find the length of a shadow?',
        a: 'Divide the object\'s height by the tangent of the sun\'s elevation angle. On the June solstice at 3:00 pm on the Gold Coast, each metre of height casts about 2.64 metres of shadow.'
      },
      {
        q: 'Is there a quick way to find the noon sun angle?',
        a: 'Yes: 90 degrees minus the difference between your latitude and the sun\'s declination. It matched the full calculation exactly at noon in our tests.'
      },
      {
        q: 'Will lessons guarantee a particular result?',
        a: 'They will not. Our job is clear teaching and regular, well-targeted practice; final results and any ATAR depend on the student and the exams.'
      },
      { q: 'Do lesson times change with daylight saving?', a: 'No. Queensland does not use daylight saving, so Gold Coast lessons stay at the same time.' },
      { q: 'Can adults learn with you?', a: 'Yes, in adult groups or privately.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Monthly fees are listed in the fees section.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Gold Coast families',
    h2: 'Related pages',
    lede: 'Tests, curriculum and costs.',
    items: [
      { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies maths', p: 'Entry test practice.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Practice by year.' },
      {
        href: '/australian-curriculum-maths-year-7-to-10-help',
        label: 'Australian Curriculum maths, Years 7 to 10',
        p: 'Topic-by-topic support for the middle years.'
      },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'Problems by year.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'Prices explained.' },
      { href: '/maths-tutor-brisbane', label: 'Maths tutor in Brisbane', p: 'For learners up the highway.' }
    ]
  },
  start: {
    h2: 'Book a free Gold Coast maths lesson',
    lede: 'Share a phone number and a good time. The first lesson is a real one, at the learner\'s level, with clear advice afterwards.',
    readFirst: 'Have a look at <a class="ag-inline-link" href="/how-we-teach">our approach</a> or <a class="ag-inline-link" href="/online-maths-tutoring-australia">online maths tutoring across Australia</a> first if you like.',
    note: 'The team that replies works from India and uses a +91 number; we do not run a Gold Coast office. A WhatsApp message sent from an Australian mobile normally gets the fastest answer.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Queensland',
        links: [
          { href: '/maths-tutor-brisbane', label: 'Maths tutor in Brisbane' },
          { href: '/queensland-academies-entry-maths-practice', label: 'Queensland Academies maths' },
          { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs' },
          { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competitions' }
        ]
      }
    ],
    bottomRight: 'Height over tangent'
  },
  personalityCss: `
.ag-root.ag-mtgc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-mtgc .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-mtgc .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-mtgc .ag-table caption { text-align: left; font-weight: 610; }
.ag-root.ag-mtgc .ag-band-head h3 { letter-spacing: -0.013em; }
.ag-root.ag-mtgc .ag-slots { gap: 1.2rem; }
`,
  dossier: {
    curriculumAuthority: 'Queensland senior mathematics named via The University of Queensland course pages (MATH1051, MATH1050): Year 12 Mathematical Methods and Specialist Mathematics (Units 3 and 4). QCAA returned 403 and is not cited.',
    localProject: 'Tower shadows in Surfers Paradise: six buildings tagged 50 m or more on OpenStreetMap (2026-10-13T10:20:53Z), tallest 158 m; sun elevation by the NOAA approximation at latitude 28 S: June noon 38.55 (simple rule 38.55), 3 pm 20.73; September noon 61.58, 3 pm 34.12; December noon 85.41, 3 pm 45.9. Shadow = height / tan(elevation). Simple noon rule wins at noon. Lesson family: tangent-ratio shadows.',
    requiredMentions: [
      'Circle on Cavill South Tower',
      '49,914',
      '41,917',
      '16,391',
      '60,070',
      '115,008',
      '85,515',
      '80,100',
      'How long are the shadows of Surfers Paradise towers?',
      '20.73'
    ],
    sources: [
      {
        claim: 'UQ MATH1051 and MATH1050: Queensland Year 12 Mathematical Methods and Specialist Mathematics as prerequisite routes.',
        url: 'https://programs-courses.uq.edu.au/course.html?course_code=MATH1050'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Gold Coast SA4: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/309'
      },
      { claim: 'OpenStreetMap building height tags in Surfers Paradise, Overpass query 13 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'QCAA senior syllabuses: 403; not used or circumvented.',
      'Official building heights and the tallest building on the Gold Coast: not read at a primary source; the page uses map tags and says so.',
      'Griffith University Gold Coast campus pages: 403 to curl\'s default agent; not used.',
      'Any claim about beach shadow regulations or planning rules: not read raw; not mentioned.',
      'Named tutoring businesses on the Gold Coast: none.'
    ]
  }
};
