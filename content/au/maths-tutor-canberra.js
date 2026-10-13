'use strict';
// Maths tutor in Canberra (ag- maths by city; AU cluster Phase 10, row 376).
// Intent: Canberra families and adults searching for a maths tutor: early primary to Year 12 and adults, the ACT senior
// mathematics courses, and online lessons in Canberra time. The ACT Board of Senior Secondary Studies returns 403 and
// is not cited; the ACT senior course names come from ANU's Bachelor of Science page (2026), which states assumed
// knowledge for first-year maths units in its own words.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - ANU Programs and Courses, Bachelor of Science (2026): MATH1003 assumed knowledge "ACT Mathematical Methods (major)/
//    Further Mathematics/Specialist Mathematics (major)/Specialist Methods or NSW HSC Mathematics Advanced or equivalent";
//    MATH1013 "A satisfactory pass in ACT Specialist Mathematics Major - Minor or NSW HSC Mathematics Extension 1 or
//    equivalent" (printed without the dash); MATH1115 refers to "ACT Specialist Mathematics double major".
//  - ABS, 2021 Census QuickStats, Australian Capital Territory (8ACTE): primary 38,251; secondary 27,930; vocational
//    11,821; university or other higher education 36,225 (24.6%); highest attainment Year 12 60,478 (16.3%), Year 10
//    22,725, Certificate III 27,849, Advanced Diploma and Diploma 34,370. Preschool and bachelor-level counts already on
//    our Canberra coding pages; not used.
//  - Canberra Mathematical Association home page: "together in building a strong community of teachers driving a rich
//    and diverse experience of mathematics in the ACT and surrounding region"; a primary teachers' workshop on fractions
//    with a professor from the ANU Mathematical Sciences Institute (name not printed).
//  - OpenStreetMap, one Overpass query (osm_base 2026-10-13T10:04:35Z): 92 highway ways named State Circle, 430 points.
// Lesson family: circle through three points (circumradius). Our calculation: least-squares circle radius 470.4 m
// (point distances 461.1 to 478.3 m); circumradius from three well-spread points 471.2, 466.9, 469.1, 468.4 m;
// from three points within 40 degrees 619.4 m. Mapped length 5930.3 m, about twice 2 pi R = 2955.5 m,
// because the road is mapped once per carriageway. Three spread points (the simple method) do as well as the fit.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'CANBERRA MATHS',
    label: 'Maths tutor in Canberra',
    blurb: 'A maths tutor for Canberra learners from early primary to Year 12 and adults, with the ACT senior maths courses and a circle project on State Circle.'
  },
  slug: 'maths-tutor-canberra',
  code: 'mtcb',
  accent: '#366F41',
  accentRationale: 'Canberra maths: a muted eucalyptus green computed for the ACT, at least 20 RGB from every ACT page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor in Canberra',
  title: 'Maths Tutor in Canberra | Primary to Year 12 and Adults, Online',
  description: 'Online maths tutor for Canberra learners from primary to Year 12 and adults: ACT Mathematical Methods, Specialist and Further Mathematics, live in Canberra time.',
  ogDescription: 'State Circle around Parliament House is almost a perfect circle. Three points pin its radius to within a few metres, unless you choose them badly.',
  twitterDescription: 'Canberra maths tutoring, live online: primary to Year 12 and adults, with a geometry project on State Circle.',
  pageName: 'Maths Tutor in Canberra',
  webPageDescription: 'Live online maths tutoring for Canberra learners from primary school to the ACT senior mathematics courses and adult maths, with a circle-geometry project on State Circle.',
  courseDescription: 'Live online maths lessons for Canberra learners, one to one or in level-matched groups of fifteen to twenty, from early number to ACT Specialist Mathematics and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Canberra',
  navLinks: [
    { href: '#act-years', label: 'Year levels' },
    { href: '#act-senior', label: 'Senior maths' },
    { href: '#circle', label: 'A worked example' },
    { href: '#canberra', label: 'Canberra learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Canberra, ACT &middot; Primary to Year 12 and adults &middot; Maths taught live online',
  h1: 'Maths tutor in Canberra',
  lede: 'Canberra is a city that was drawn before it was built, and its plan is full of geometry. State Circle, the road ringing Parliament House, is close to a perfect circle. Choose any three points on it and a little algebra gives the radius of the one circle passing through all three. Choose them well and you land within a few metres of 470.4 metres, the radius that fits every mapped point most closely. Choose three points bunched together and the answer drifts by more than a hundred metres. It is a small lesson in geometry, and a bigger one in how to measure. Our live online maths tutoring serves Canberra learners from primary school to the ACT senior courses and adults, in Canberra time.',
  secondaryCta: { href: '#circle', label: 'See the State Circle project' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Canberra.',
  heroNote: 'Maths only on this page &middot; Primary to adult &middot; Independent of every Canberra school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'The first year of school to Year 6'],
    ['High school', 'Years 7 to 10'],
    ['College', 'Years 11 and 12, ACT courses'],
    ['Adults', 'Bridging units and refreshers'],
    ['How', 'Live video, private or five to ten'],
    ['Time', 'Canberra time, with daylight saving'],
    ['City project', 'The radius of State Circle']
  ],
  capsuleQ: 'Maths tutor in Canberra, in brief',
  capsule: 'Canberra learners from age 6 to 67 can take live online maths lessons with Modern Age Coders. Primary and high school maths come first, then the ACT senior courses, which ANU names as Mathematical Methods, Specialist Mathematics, Specialist Methods and Further Mathematics, and adult maths. We schedule in Canberra time, teach privately or in level-matched groups of fifteen to twenty, and the first lesson is free.',
  picks: {
    eyebrow: 'Common first choices in Canberra',
    h2: 'Three maths courses that suit Canberra learners',
    lede: 'Primary number work, the geometry and algebra of high school, and calculus for college students. More courses are listed below.',
    items: [
      {
        course: 'early-math-foundations',
        code: 'CBR / 1',
        title: 'Early maths',
        note: 'For the first years of school: counting, comparing, shapes and patterns, learned with objects and pictures.'
      },
      {
        course: 'comprehensive-middle-school-mathematics-mastery',
        code: 'CBR / 2',
        title: 'High school maths',
        note: 'Years 7 to 10: algebra, geometry, circles and trigonometry, the ground under every college course.'
      },
      {
        course: 'ap-calculus-exam-prep',
        code: 'CBR / 3',
        title: 'Calculus for college',
        note: 'Derivatives and integrals for students in Mathematical Methods or Specialist Mathematics.'
      }
    ]
  },
  sections: [
    {
      id: 'act-years',
      tint: 'tint',
      eyebrow: 'Primary to college',
      h2: 'Maths tutoring for each stage of Canberra schooling',
      lede: 'Many Canberra students move from a high school to a separate college for Years 11 and 12. Our lessons follow the learner across that change.',
      body: [
        {
          kind: 'table',
          caption: 'Stages and lesson focus',
          head: ['Stage', 'Years', 'Lessons focus on'],
          rows: [
            ['Early primary', 'The first years of school to Year 2', 'Number sense, counting on, simple shapes'],
            ['Primary', 'Years 3 to 6', 'Multiplication facts, fractions, measurement and angles'],
            ['High school', 'Years 7 and 8', 'Integers, ratio, early algebra and geometry'],
            ['High school', 'Years 9 and 10', 'Functions, trigonometry, circles and probability'],
            ['College', 'Years 11 and 12', 'The ACT mathematics course a student is enrolled in'],
            ['Adults', 'To 67', 'University bridging and workplace maths']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Tests and competitions',
          left: [
            'For national tests see <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>, and for competitions the <a class="ag-inline-link" href="/australian-mathematics-competition-practice-by-year">Australian Mathematics Competition</a> page or <a class="ag-inline-link" href="/australian-mathematical-olympiad-preparation">Mathematical Olympiad preparation</a>.',
            'This page covers everyday maths learning in Canberra.'
          ],
          rightH3: 'Who asks us for help',
          right: [
            'High school students heading into college maths, college students who want more confidence, and adults returning to study.',
            'Each starts with a free lesson that shows us where they are.'
          ]
        }
      ]
    },
    {
      id: 'act-senior',
      tint: 'deep',
      eyebrow: 'Senior maths in the ACT',
      h2: 'The ACT senior maths courses, as ANU names them',
      lede: 'The ACT\'s senior secondary board did not answer our request for its pages, so we use the university\'s own wording. ANU\'s 2026 Bachelor of Science page lists ACT courses as assumed knowledge for its first-year maths units.',
      body: [
        {
          kind: 'table',
          caption: 'ACT senior maths courses named by ANU (read 13 October 2026)',
          head: ['ACT course', 'How ANU uses it', 'In general terms'],
          rows: [
            ['Mathematical Methods (major)', 'Assumed knowledge for MATH1003 and MATH1005', 'Functions, calculus and statistics'],
            ['Further Mathematics', 'Listed beside Methods for MATH1003', 'Applied and broader topics'],
            ['Specialist Methods', 'Listed beside Methods for MATH1003', 'Methods-level content with extension'],
            [
              'Specialist Mathematics major and minor',
              'Satisfactory pass expected for MATH1013',
              'Vectors, complex numbers and further calculus'
            ],
            ['Specialist Mathematics double major', 'Referred to for MATH1115', 'The most demanding senior maths']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'NSW equivalents on the same page',
          left: [
            'ANU lists NSW HSC Mathematics Advanced alongside the ACT Methods courses, and Mathematics Extension 1 alongside Specialist. Students who move between the two systems can use our <a class="ag-inline-link" href="/hsc-maths-advanced-tutoring">HSC Maths Advanced</a> page as a comparison.',
            'A tutor who knows both helps families who cross the border.'
          ],
          rightH3: 'What we promise',
          right: [
            'Clear teaching, steady practice and good exam habits. No promised grades, scores or ATAR, and assessed college work stays the student\'s own.',
            'Course choice is a conversation; we help students make it with good information.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: Australian National University, <a class="ag-inline-link" href="https://programsandcourses.anu.edu.au/2026/program/bsc" rel="noopener" target="_blank">Bachelor of Science, Programs and Courses 2026</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'circle',
      tint: 'tint',
      eyebrow: 'A Canberra worked example',
      h2: 'What is the radius of State Circle?',
      lede: 'Through any three points that are not in a line there passes exactly one circle. Its radius, the circumradius, takes a few lines of algebra. We used it on State Circle, and compared it with a fit to every mapped point.',
      body: [
        {
          kind: 'p',
          html: 'OpenStreetMap draws State Circle as 92 short pieces of road with 430 points between them. A least-squares fit, which finds the circle closest to all the points at once, gives a radius of 470.4 metres; individual points sit between 461.1 and 478.3 metres from its centre. Then we did what a student with a ruler would do: chose three points, found the circle through them, and repeated the exercise with different choices.'
        },
        {
          kind: 'table',
          caption: 'Radius of State Circle by different methods (our calculation from OpenStreetMap)',
          head: ['Method', 'Radius (metres)', 'Comment'],
          numCols: [
            1
          ],
          rows: [
            ['Fit to all 430 points', '470.4', 'The reference value'],
            ['Three points about 120 degrees apart, first choice', '471.2', 'Close to the fit'],
            ['Three points about 120 degrees apart, second choice', '466.9', 'Close to the fit'],
            ['Three points about 120 degrees apart, third choice', '469.1', 'Close to the fit'],
            ['Three points about 120 degrees apart, fourth choice', '468.4', 'Close to the fit'],
            ['Three points within a 40 degree arc', '619.4', 'Far too large']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Spread wins',
              p: 'Three points spread around the circle gave radii from 466.9 to 471.2 metres, within a few metres of the full fit. For this road, the simple three-point method is as good as fitting hundreds of points.'
            },
            {
              h3: 'Bunching fails',
              p: 'Three points on a short arc nearly lie on a straight line, and a straight line is a circle of infinite radius. Small bumps in the mapped road then swing the answer to 619.4 metres.'
            },
            {
              h3: 'Why the length doubles',
              p: 'Adding every mapped piece gives 5930.3 metres, about twice 2&pi;r = 2955.5 metres, because the map draws each direction of traffic as its own line.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'What students practise',
          left: [
            'Perpendicular bisectors, the circumcircle, distance between points, circumference, and the idea that a measurement method can be sound or fragile depending on how it is used.',
            'High school students construct the circle with a compass on a printed map; college students derive the circumradius algebraically.'
          ],
          rightH3: 'Honest limits',
          right: [
            'The map shows road centrelines, not a surveyed circle, so the radius describes the mapped road. We make no claim about how the road was designed.',
            'Map data: OpenStreetMap contributors, ODbL.'
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Three ways to find the centre of a circle through three points',
          head: ['Approach', 'How it works', 'Year level'],
          rows: [
            ['Compass and ruler', 'Draw the perpendicular bisector of two chords; they cross at the centre', 'Years 7 to 9'],
            ['Coordinates', 'Write each bisector as a line equation and solve the pair simultaneously', 'Years 9 and 10'],
            ['Formula', 'Use the circumradius formula: product of the three sides over four times the area', 'Years 11 and 12']
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'All three give the same centre when the arithmetic is exact. The compass version is the one most students remember, because they can see why it works: every point on a chord\'s perpendicular bisector is the same distance from both ends of the chord, so the point on two such bisectors is the same distance from all three points. Once that idea is secure, the algebra stops being a recipe and becomes a description of a picture the student already understands.'
        },
        {
          kind: 'source',
          html: 'Data: <a class="ag-inline-link" href="https://www.openstreetmap.org/copyright" rel="noopener" target="_blank">OpenStreetMap</a>, State Circle ways, one Overpass query on 13 October 2026; fits and circumradii are our calculation.'
        }
      ]
    },
    {
      id: 'canberra',
      tint: 'deep',
      eyebrow: 'Canberra learners',
      h2: 'The ACT in the 2021 Census: a territory of students',
      lede: 'One figure stands out: nearly a quarter of people attending an educational institution in the ACT were at university.',
      body: [
        {
          kind: 'table',
          caption: 'Australian Capital Territory, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '38,251'],
            ['Attending secondary school', '27,930'],
            ['Attending vocational education, including TAFE', '11,821'],
            ['Attending university or other higher education', '36,225 (24.6%)'],
            ['Highest level Year 12', '60,478 (16.3%)'],
            ['Highest level Year 10', '22,725'],
            ['Highest level Certificate III', '27,849'],
            ['Highest level Advanced Diploma or Diploma', '34,370']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'University-heavy, which matters for maths',
          left: [
            'With 24.6% of people in education attending university, many Canberra households include someone taking a first-year maths or statistics unit. Bridging and first-year support is a common request.',
            'Figures are shown as published; we do not add rows together.'
          ],
          rightH3: 'Maths teachers in the ACT',
          right: [
            'The Canberra Mathematical Association describes itself as "together in building a strong community of teachers driving a rich and diverse experience of mathematics in the ACT and surrounding region", and runs workshops such as one for primary teachers on fractions with a professor from the ANU Mathematical Sciences Institute.',
            'Tutoring sits alongside that school teaching.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/8ACTE" rel="noopener" target="_blank">2021 Census QuickStats, Australian Capital Territory</a>, CC BY 4.0; <a class="ag-inline-link" href="https://www.canberramaths.org.au/" rel="noopener" target="_blank">Canberra Mathematical Association</a>.'
        }
      ]
    },
    {
      id: 'act-online',
      tint: '',
      eyebrow: 'Online in Canberra time',
      h2: 'Online maths lessons that keep to Canberra\'s clock',
      lede: 'Canberra follows eastern Australian time with daylight saving from October to April, four and a half hours ahead of India in winter and five and a half in summer. Bookings are always in Canberra time.',
      body: [
        {
          kind: 'three',
          cells: [
            { h3: 'Private lessons', p: 'One learner with one teacher, for a specific course, unit or gap.' },
            { h3: 'Level-matched classes', p: 'Fifteen to twenty learners working on the same material, often from several states.' },
            { h3: 'Every step on screen', p: 'Each student\'s working appears on a common digital board, so mistakes are caught at the point they begin.' }
          ]
        },
        {
          kind: 'p',
          mt: true,
          html: 'College students often prefer evening lessons once their own classes finish; university students sometimes book a short block before a first-year exam. Both fit comfortably into the Indian working day.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Rungs from early number to college maths',
    lede: 'Learners join at the rung that fits.',
    table: {
      caption: 'Four rungs',
      head: ['Usually', 'Rung', 'Ready to climb when'],
      rows: [
        ['First years to Year 2', '1. Counting', 'They count on from a number instead of from one'],
        ['Years 3 to 6', '2. Shape', 'They measure and compare lengths and angles accurately'],
        ['Years 7 to 10', '3. Construction', 'They build a figure from rules, such as a circle through three points'],
        ['Years 11 and 12', '4. Proof', 'They show why a construction must work, not just that it does']
      ]
    },
    left: {
      h3: 'Moving to college',
      ps: [
        'The step from Year 10 to a college maths course is large. We check algebra and functions before it.',
        'A term of preparation is usually enough.'
      ]
    },
    right: {
      h3: 'First-year university',
      ps: ['Students starting at university often need calculus confidence fast.', 'We focus on the units they are taking.']
    }
  },
  catalogue: {
    eyebrow: 'All courses',
    h2: 'Maths courses for Canberra learners',
    lede: 'International course titles taught to ACT stages and courses.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'To Year 6',
        courses: [
          { code: 'CBR / P1', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Number with hands-on materials.' },
          { code: 'CBR / P2', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Every primary strand.' },
          { code: 'CBR / P3', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'Mental calculation, step by step.' }
        ]
      },
      {
        num: 'II',
        h3: 'High school',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'CBR / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'High school maths', blurb: 'Geometry and algebra.' },
          { code: 'CBR / S2', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'For keen problem solvers.' },
          { code: 'CBR / S3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Geometry you can program.' }
        ]
      },
      {
        num: 'III',
        h3: 'College and beyond',
        sub: 'Years 11, 12 and adults',
        courses: [
          { code: 'CBR / H1', slug: 'ap-calculus-exam-prep', title: 'Calculus', blurb: 'Derivatives and integrals.' },
          { code: 'CBR / H2', slug: 'ib-mathematics-aa-ai-masterclass', title: 'International maths', blurb: 'For students taking the IB Diploma.' },
          { code: 'CBR / H3', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Linear algebra and more.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Scheduling',
    h2: 'Lessons that fit a Canberra week',
    lede: 'We arrange times in Canberra time and take care of the October and April clock changes.',
    slots: [
      { time: 'After school', l: 'Primary and high school.' },
      { time: 'Evenings', l: 'College students and adults.' },
      { time: 'Weekends', l: 'Unhurried longer lessons.' }
    ],
    cells: [
      { h3: 'Steady teacher', p: 'One teacher, week after week.' },
      { h3: 'Family notes', p: 'What was covered and what is next.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty learners.' },
      { h3: 'Geometry from maps', p: 'Real shapes from the city plan.' },
      { h3: 'Private lessons', p: 'For one course or deadline.' },
      { h3: 'Explain, then practise', p: 'Ideas before drills.' }
    ]
  },
  projectsH2: 'Projects our learners built on their maths',
  projectsLede: 'Things students made after the number work clicked. Browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews, quoted as families wrote them.',
  fees: {
    h2: 'Fees for maths tutoring in Canberra',
    lede: 'Canberra families are charged a flat monthly fee in US dollars; there is nothing to pay to join and no minimum period.',
    free: ['A real first lesson', 'Advice on next steps', 'No card'],
    group: ['Classes of fifteen to twenty', 'The same teacher', 'Marked practice', 'Stop at any month'],
    one: ['One to one', 'One course or goal', 'Useful before exams']
  },
  faq: {
    eyebrow: 'Canberra maths questions',
    h2: 'Common questions from Canberra families',
    items: [
      {
        q: 'How can a maths tutor in Canberra help?',
        a: 'By finding what a learner has missed, teaching it clearly and building confidence through practice, in live online lessons on Canberra time, privately or in small groups.'
      },
      {
        q: 'Which ACT senior maths courses do you teach?',
        a: 'Mathematical Methods, Specialist Methods, Specialist Mathematics and Further Mathematics, the ACT courses named on ANU\'s 2026 Bachelor of Science page.'
      },
      {
        q: 'What is a circumradius?',
        a: 'The radius of the one circle that passes through three given points. For State Circle, three well-spread points give a radius of about 470 metres.'
      },
      {
        q: 'Why did three close points give the wrong radius?',
        a: 'Points on a short arc are nearly in a straight line, so tiny bumps in the mapped road change the circle a lot. Spreading the points fixes it.'
      },
      { q: 'Can you guarantee a grade or ATAR?', a: 'No. We teach thoroughly but make no grade, score or ATAR promises.' },
      { q: 'Do you help university students?', a: 'Yes, with first-year maths and statistics concepts, never with assessed work.' },
      { q: 'Are lessons in Canberra time?', a: 'Yes, including daylight saving changes.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Monthly fees are shown in the fees section of this page.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Canberra',
    h2: 'Related pages',
    lede: 'Tests, competitions and costs.',
    items: [
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Practice for Years 3 to 9.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'Problems by year.' },
      { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad', p: 'For the strongest students.' },
      { href: '/hsc-maths-advanced-tutoring', label: 'HSC Maths Advanced', p: 'The NSW comparison course.' },
      { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths', p: 'Curriculum help.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs', p: 'Prices explained.' }
    ]
  },
  start: {
    h2: 'Book a free Canberra maths lesson',
    lede: 'Leave your details and a time to ring. The first session is a genuine lesson, followed by a straightforward recommendation.',
    readFirst: 'Want to know more first? Read <a class="ag-inline-link" href="/how-we-teach">about our teaching</a> or <a class="ag-inline-link" href="/online-maths-tutoring-australia">online maths tutoring in Australia</a>.',
    note: 'Calls come from our team in India (a +91 number); there is no Canberra office. From an Australian mobile, WhatsApp is the quickest route to us.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Canberra',
        links: [
          { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy' },
          { href: '/australian-mathematical-olympiad-preparation', label: 'Mathematical Olympiad' },
          { href: '/maths-tutor-cost-australia-explained', label: 'Maths tutor costs' },
          { href: '/how-we-teach', label: 'How we teach' }
        ]
      },
      {
        h4: 'Australia',
        links: [
          { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
          { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring' },
          { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths' },
          { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competitions' }
        ]
      }
    ],
    bottomRight: 'Three points, well spread'
  },
  personalityCss: `
.ag-root.ag-mtcb .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-mtcb .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-mtcb .ag-section-head h2 { max-width: 35ch; }
.ag-root.ag-mtcb .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-mtcb .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-mtcb .ag-slots { gap: 1.05rem; }
`,
  dossier: {
    curriculumAuthority: 'ACT senior mathematics named via ANU Programs and Courses 2026, Bachelor of Science (assumed knowledge for MATH1003, MATH1005, MATH1013, MATH1115): ACT Mathematical Methods (major), Further Mathematics, Specialist Methods, Specialist Mathematics major-minor and double major. ACT BSSS returned 403 and is not cited.',
    localProject: 'State Circle radius from OpenStreetMap (2026-10-13T10:04:35Z): least-squares 470.4 m; three spread points 471.2, 466.9, 469.1, 468.4 m; three bunched points 619.4 m; mapped length 5930.3 m vs 2 pi r 2955.5 m (one line per carriageway). Three spread points (simple method) match the fit. Lesson family: circumradius.',
    requiredMentions: [
      'Specialist Methods',
      'Specialist Mathematics double major',
      'MATH1013',
      '38,251',
      '27,930',
      '36,225',
      '60,478',
      '34,370',
      'driving a rich and diverse experience of mathematics in the ACT and surrounding region',
      'What is the radius of State Circle?'
    ],
    sources: [
      {
        claim: 'ANU Programs and Courses 2026, Bachelor of Science: assumed knowledge naming ACT senior maths courses.',
        url: 'https://programsandcourses.anu.edu.au/2026/program/bsc'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Australian Capital Territory: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/8ACTE'
      },
      { claim: 'Canberra Mathematical Association: home page description and fractions workshop.', url: 'https://www.canberramaths.org.au/' },
      { claim: 'OpenStreetMap State Circle ways, Overpass query 13 October 2026.', url: 'https://www.openstreetmap.org/copyright' }
    ],
    rejectedClaims: [
      'ACT Board of Senior Secondary Studies course frameworks: 403 to curl\'s default agent; not used or circumvented.',
      'The design history of Canberra\'s plan and its designers: not read raw this week; no history claimed.',
      'ACT school year names: not confirmed at an ACT source, so the page says "the first years of school".',
      'Preschool and bachelor-level counts for the ACT: already on our Canberra coding pages.',
      'Named tutoring businesses in Canberra: none.'
    ]
  }
};
