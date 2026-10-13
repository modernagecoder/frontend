'use strict';
// Maths tutor in Perth, WA (ag- maths by city; AU cluster Phase 10, row 374).
// Intent: families and adults in Greater Perth looking for a maths tutor: primary to Year 12 and adults, the WA senior
// mathematics courses, and how live online lessons fit a city whose clock never changes. Links the WA GATE ASET page and
// the national maths doors. SCSA (WA's curriculum authority) returns 403 and is not cited; the senior course names come
// from the University of Western Australia's 2026 handbook, which states its own prerequisites.
// Sources, read raw on 13 October 2026 (curl, default agent):
//  - UWA Handbook 2026: MATH1721 Mathematics Foundations: Methods, prerequisite "Mathematics Applications ATAR" (or
//    Methods ATAR, conditions not printed); MATH1722 Mathematics Foundations: Specialist, prerequisite "Mathematics Methods
//    ATAR"; Mathematics major, "ATAR Subject(s) Mathematics Specialist ATAR".
//  - ABS, 2021 Census QuickStats, Greater Perth (5GPER): primary 178,400; secondary 142,947; vocational 49,233; university
//    or other higher education 104,270; highest attainment Year 12 274,849 (16.0%), Advanced Diploma and Diploma 167,344,
//    Certificate III 225,295, Year 10 177,208. (Preschool and Bachelor-level figures already appear on our Perth coding
//    pages; not used.)
//  - IANA tz database, australasia file: Rule AW lines for WA daylight saving in 1974-75, 1983-84, 1991-92 and 2006-09
//    ("Rule AW 2006 only - Dec 3"); Zone Australia/Eucla at 8:45; Rule AN 2008 to max, first Sunday in October to first
//    Sunday in April.
//  - MAWA (Mathematical Association of Western Australia) home page: the association's name and termly newsletters.
// Lesson family: piecewise functions. Our calculation with Python zoneinfo (tzdata from IANA) for every day of 2027 at
// 6:00 pm Perth time: Sydney ahead by 3 hours on 183 days and 2 hours on 182, switching on 4 April and 3
// October; Adelaide 2.5 or 1.5 hours; Brisbane 2 hours and Darwin 1.5 hours on all 365 days (the simple constant rule
// wins for those two); India 2.5 hours behind on all 365.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: {
    group: 'city',
    tag: 'PERTH MATHS',
    label: 'Maths tutor in Perth',
    blurb: 'A maths tutor for Perth learners from the early years to Year 12 and adults, with the WA ATAR maths courses and a time-zone function worked out in full.'
  },
  slug: 'maths-tutor-perth-wa',
  code: 'mtpe',
  accent: '#3E2494',
  accentRationale: 'Perth maths: a deep muted indigo computed for Western Australia, at least 20 RGB from every WA page accent, 10 from every AU accent and 6 from every colour in use',
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
  routeLabel: 'Maths tutor in Perth',
  title: 'Maths Tutor in Perth, WA | Primary to ATAR Maths, Online',
  description: 'Online maths tutor for Perth learners, primary to Year 12 and adults: Mathematics Applications, Methods and Specialist ATAR, taught live on Perth time.',
  ogDescription: 'Perth never changes its clocks, so its gap to Sydney is a piecewise function. A Perth maths tutor works it out for every day of 2027.',
  twitterDescription: 'Perth maths tutoring, live online: primary to ATAR maths and adults, booked on Perth time all year.',
  pageName: 'Maths Tutor in Perth, WA',
  webPageDescription: 'Live online maths tutoring for learners in Greater Perth, from primary school to the WA ATAR mathematics courses and adult maths, with a piecewise-function project on time zones.',
  courseDescription: 'Live online maths lessons for Perth learners, one to one or in level-matched groups of fifteen to twenty, from early number to Mathematics Specialist ATAR and adult maths.',
  crumbs: [
    { name: 'Courses', href: '/courses' },
    { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }
  ],
  crumbLabel: 'Maths tutor in Perth',
  navLinks: [
    { href: '#stages', label: 'School stages' },
    { href: '#atar', label: 'ATAR maths' },
    { href: '#clock', label: 'A worked example' },
    { href: '#learners', label: 'Perth learners' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Perth, Western Australia &middot; Primary to Year 12 and adults &middot; Online on Perth time',
  h1: 'Maths tutor in Perth',
  lede: 'Ask someone in Perth how far behind Sydney they are and you will usually hear "two hours". For about half of every year that is wrong. Perth keeps the same clock all year, while Sydney moves forward an hour each October, so the gap jumps from two hours to three and back again. Written as maths, the time difference is a piecewise function of the date, with two breakpoints a year. It is a neat example of something we care about in every lesson: a rule that sounds simple, tested properly against the real thing. Our live online maths tutoring for Perth learners covers primary school, the lower secondary years and the WA ATAR mathematics courses, plus adults returning to maths, all booked on Perth time.',
  secondaryCta: { href: '#clock', label: 'See the time-zone function' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in Perth.',
  heroNote: 'Maths only on this page &middot; Primary to adult &middot; Independent of every Perth school and university',
  spec: [
    ['Ages', '6 to 67'],
    ['Primary', 'The first years of school to Year 6'],
    ['Lower secondary', 'Years 7 to 10'],
    ['ATAR maths', 'Applications, Methods, Specialist'],
    ['Adults', 'Refreshers and bridging maths'],
    ['How', 'Live video, private or five to ten'],
    ['Clock', 'Perth time, which never shifts'],
    ['City project', 'A piecewise time-zone function']
  ],
  capsuleQ: 'Maths tutor in Perth, in brief',
  capsule: 'Modern Age Coders is an online maths tutor for learners in Perth, Western Australia, aged 6 to 67. We teach primary and lower secondary maths and the senior ATAR courses, Mathematics Applications, Mathematics Methods and Mathematics Specialist, plus adult maths. Lessons run live over video on Perth time, privately or in groups of fifteen to twenty matched by level, and the first lesson is free.',
  picks: {
    eyebrow: 'The usual starting points in Perth',
    h2: 'Three courses for Perth learners',
    lede: 'A solid primary course, a course for the algebra-heavy middle years, and a senior course that lines up with the ATAR maths subjects. The complete list sits lower on the page.',
    items: [
      {
        course: 'elementary-mathematics-complete-masterclass',
        code: 'PER / 1',
        title: 'Primary maths',
        note: 'Place value, the four operations, fractions and measurement, taught for understanding rather than speed alone.'
      },
      {
        course: 'algebra-foundations-masterclass',
        code: 'PER / 2',
        title: 'Algebra foundations',
        note: 'For Years 7 to 10: the algebra that every later maths course in WA assumes.'
      },
      {
        course: 'complete-high-school-mathematics-mastery',
        code: 'PER / 3',
        title: 'Senior maths',
        note: 'Functions, calculus and statistics for students in Mathematics Methods or Specialist.'
      }
    ]
  },
  sections: [
    {
      id: 'stages',
      tint: 'tint',
      eyebrow: 'School stages',
      h2: 'Maths tutoring for each stage of school in Perth',
      lede: 'Western Australian schools teach the Australian Curriculum through Year 10 and their own senior ATAR courses in Years 11 and 12. Lessons follow whichever stage a learner is at.',
      body: [
        {
          kind: 'table',
          caption: 'What lessons cover at each stage',
          head: ['Stage', 'Typical years', 'Our focus'],
          rows: [
            ['Early years', 'The first years of school', 'Counting, comparing, simple patterns and shapes'],
            ['Middle primary', 'Years 3 and 4', 'Times tables with meaning, place value to thousands'],
            ['Upper primary', 'Years 5 and 6', 'Fractions, decimals, percentages and angles'],
            ['Lower secondary', 'Years 7 to 10', 'Algebra, linear relations, geometry and probability'],
            ['Senior', 'Years 11 and 12', 'Mathematics Applications, Methods or Specialist ATAR'],
            ['Adults', 'Any age to 67', 'Bridging units, workplace maths, or maths for its own sake']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Gifted and talented testing',
          left: [
            'Perth families with a child sitting the Department of Education\'s academic selection test can read our <a class="ag-inline-link" href="/wa-gate-aset-maths-practice">GATE ASET maths practice</a> page, which covers the quantitative section in detail.',
            'For national tests, see <a class="ag-inline-link" href="/naplan-numeracy-practice-online">NAPLAN numeracy practice</a>.'
          ],
          rightH3: 'Who books lessons',
          right: [
            'Some learners want to catch up after a hard term; others want stretch beyond the classroom. Adults often come to us before a university bridging unit or a training course with a maths component.',
            'A free first lesson shows us which kind of help is needed.'
          ]
        }
      ]
    },
    {
      id: 'atar',
      tint: 'deep',
      eyebrow: 'ATAR maths in WA',
      h2: 'The three senior maths courses Perth students meet',
      lede: 'Western Australia\'s curriculum authority did not answer our request for its pages, so we take the course names from a source that has to state them precisely: the University of Western Australia\'s 2026 handbook, which lists them as prerequisites.',
      body: [
        {
          kind: 'table',
          caption: 'WA senior maths courses as UWA\'s 2026 handbook names them',
          head: ['Course', 'Where UWA names it', 'In general terms'],
          rows: [
            [
              'Mathematics Applications ATAR',
              'Prerequisite for MATH1721 Mathematics Foundations: Methods',
              'Applied and statistical maths'
            ],
            ['Mathematics Methods ATAR', 'Prerequisite for MATH1722 Mathematics Foundations: Specialist', 'Functions and calculus'],
            [
              'Mathematics Specialist ATAR',
              'Listed under the mathematics major as its ATAR subject',
              'Vectors, complex numbers, proof and further calculus'
            ]
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Picking a course',
          left: [
            'Students who enjoy algebra and want options in science or engineering usually take Methods, often with Specialist. Applications suits students who want useful, data-rich maths without heavy calculus.',
            'Universities set their own prerequisites, so we always suggest checking the institution\'s handbook, as we did here.'
          ],
          rightH3: 'Our promise',
          right: [
            'We teach the content and the exam habits: reading questions carefully, showing working and checking answers. We do not promise any score or ATAR.',
            'Assessed school tasks remain the student\'s own work.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: University of Western Australia, Handbook 2026, units <a class="ag-inline-link" href="https://www.handbooks.uwa.edu.au/unitdetails?code=MATH1721" rel="noopener" target="_blank">MATH1721</a> and <a class="ag-inline-link" href="https://www.handbooks.uwa.edu.au/unitdetails?code=MATH1722" rel="noopener" target="_blank">MATH1722</a> and the <a class="ag-inline-link" href="https://www.handbooks.uwa.edu.au/majordetails?code=MJD-MATHS" rel="noopener" target="_blank">mathematics major</a>, read 13 October 2026.'
        }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'A Perth worked example',
      h2: 'The gap between Perth and Sydney is a piecewise function',
      lede: 'A piecewise function uses different rules on different parts of its domain. Perth\'s time difference to the eastern states is a real one, with the date as input and the gap in hours as output.',
      body: [
        {
          kind: 'p',
          html: 'The international time zone database records the rules. New South Wales follows daylight saving from the first Sunday in October to the first Sunday in April. Western Australia does not, although the database shows it tried several times, most recently from 3 December 2006 until March 2009. We asked a computer to compare the clocks at 6:00 pm Perth time on every day of 2027.'
        },
        {
          kind: 'table',
          caption: 'How far ahead of Perth each place is, every day of 2027 at 6:00 pm Perth time (our calculation)',
          head: ['Place', 'Hours ahead', 'Days in 2027', 'When it changes'],
          rows: [
            ['Sydney, Melbourne, Hobart', '3', '183', 'Until 4 April and from 3 October'],
            ['Sydney, Melbourne, Hobart', '2', '182', 'From 4 April to 2 October'],
            ['Adelaide', '2.5 or 1.5', '183 and 182', 'Same dates as Sydney'],
            ['Brisbane', '2', '365', 'Never'],
            ['Darwin', '1.5', '365', 'Never'],
            ['India (our teachers)', 'Perth is 2.5 ahead', '365', 'Never']
          ]
        },
        {
          kind: 'three',
          mt: true,
          cells: [
            {
              h3: 'Writing it as a function',
              p: 'For 2027, the gap to Sydney is 3 hours for dates before 4 April, 2 hours from 4 April to 2 October, and 3 hours again from 3 October. Two breakpoints, three pieces, one function.'
            },
            {
              h3: 'When the simple rule wins',
              p: 'For Brisbane and Darwin, which keep one clock all year like Perth, "2 hours" and "1.5 hours" are right on all 365 days. There, the constant rule is the whole truth, and a piecewise version would add nothing.'
            },
            {
              h3: 'When it fails',
              p: '"Two hours behind Sydney" was right on only 182 of 365 days in 2027. A 4:00 pm Perth lesson is 7:00 pm in Sydney on 1 March but 6:00 pm on 1 July.'
            }
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'A border curiosity',
          left: [
            'The same database lists a zone for Eucla, near the South Australian border, at 8 hours 45 minutes ahead of UTC, three quarters of an hour from Perth. Students enjoy finding the one place in Australia whose offset is not a whole or half hour.',
            'It is a neat extension: add a third rule and draw the step graph.'
          ],
          rightH3: 'What students practise',
          right: [
            'Reading rules, defining a function in pieces, drawing step graphs, and checking every boundary case: what happens on the exact morning the clocks change?',
            'Senior students can write the function with set notation and an indicator for each interval.'
          ]
        },
        {
          kind: 'source',
          html: 'Source: IANA, <a class="ag-inline-link" href="https://data.iana.org/time-zones/tzdb/australasia" rel="noopener" target="_blank">time zone database, australasia file</a>, read 13 October 2026. The day counts are our calculation with Python\'s zoneinfo module.'
        }
      ]
    },
    {
      id: 'learners',
      tint: 'deep',
      eyebrow: 'Perth learners',
      h2: 'How many people in Perth were learning, and what they had finished',
      lede: 'The 2021 Census counted people at every stage of education in Greater Perth. These figures give a sense of how many learners a maths tutor in the city might meet.',
      body: [
        {
          kind: 'table',
          caption: 'Greater Perth, 2021 Census',
          head: ['Measure', 'People'],
          numCols: [
            1
          ],
          rows: [
            ['Attending primary school', '178,400'],
            ['Attending secondary school', '142,947'],
            ['Attending vocational education, including TAFE', '49,233'],
            ['Attending university or other higher education', '104,270'],
            ['Highest level Year 12 (aged 15 and over)', '274,849 (16.0%)'],
            ['Highest level Year 10', '177,208'],
            ['Highest level Certificate III', '225,295'],
            ['Highest level Advanced Diploma or Diploma', '167,344']
          ]
        },
        {
          kind: 'two',
          mt: true,
          leftH3: 'Reading the table',
          left: [
            'Many Perth adults list a trade certificate or a diploma as their highest qualification; the Certificate III row alone counts 225,295 people. Adult maths often starts from a trade or a diploma, and our lessons build on that experience.',
            'Rows are shown as published; we do not add them together.'
          ],
          rightH3: 'Maths teachers in WA',
          right: [
            'The Mathematical Association of Western Australia supports the state\'s maths teachers and publishes termly newsletters. School teaching and tutoring do most good together.',
            'Our teachers are independent of every Perth school.'
          ]
        },
        {
          kind: 'source',
          html: 'Sources, read 13 October 2026: ABS, <a class="ag-inline-link" href="https://abs.gov.au/census/find-census-data/quickstats/2021/5GPER" rel="noopener" target="_blank">2021 Census QuickStats, Greater Perth</a>, CC BY 4.0; <a class="ag-inline-link" href="https://mawainc.org.au/" rel="noopener" target="_blank">Mathematical Association of Western Australia</a>.'
        }
      ]
    },
    {
      id: 'online',
      tint: '',
      eyebrow: 'Online on Perth time',
      h2: 'Online lessons from a city two and a half hours ahead of India',
      lede: 'Perth is two and a half hours ahead of India all year, the steadiest gap of any Australian capital. That makes after-school and early-evening Perth lessons fall in the Indian working afternoon.',
      body: [
        {
          kind: 'three',
          cells: [
            {
              h3: 'Private lessons',
              p: 'One teacher and one learner, at a fixed weekly time that never moves with daylight saving because neither Perth nor India uses it.'
            },
            {
              h3: 'Level-matched groups',
              p: 'Fifteen to twenty learners at the same stage. Group members often come from several states, which is how a Perth student meets the Sydney time puzzle in the first place.'
            },
            { h3: 'Visible working', p: 'A shared whiteboard lets the teacher see each line of working, so mistakes are caught where they start.' }
          ]
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Progress',
    h2: 'Steps from early number to ATAR maths',
    lede: 'Learners join wherever they are. The first lesson places them.',
    table: {
      caption: 'Four steps',
      head: ['Usually', 'Step', 'Ready to move on when'],
      rows: [
        ['Early years to Year 3', '1. Counting with meaning', 'They can explain why 9 + 6 is the same as 10 + 5'],
        ['Years 4 to 6', '2. Rules and patterns', 'They describe a pattern in words and predict the next term'],
        ['Years 7 to 10', '3. Functions', 'They read a graph as a rule that turns inputs into outputs'],
        ['Years 11 and 12', '4. Modelling', 'They choose a function that fits a situation and test it']
      ]
    },
    left: {
      h3: 'Switching from Applications to Methods',
      ps: [
        'It can be done, but the gap is mainly algebra. We map what needs filling before the switch.',
        'A few focused weeks often make the difference.'
      ]
    },
    right: {
      h3: 'Coming back as an adult',
      ps: [
        'Adults are often surprised how much returns quickly.',
        'We begin with the maths the learner needs now, not where school left off.'
      ]
    }
  },
  catalogue: {
    eyebrow: 'All maths courses',
    h2: 'Maths courses for Perth learners',
    lede: 'International course titles, taught to WA stages. Three bands by age.',
    bands: [
      {
        num: 'I',
        h3: 'Primary',
        sub: 'Early years to Year 6',
        courses: [
          { code: 'PER / P1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Number, fractions, measurement.' },
          { code: 'PER / P2', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Beads first, then in the head.' },
          { code: 'PER / P3', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles that build reasoning.' }
        ]
      },
      {
        num: 'II',
        h3: 'Secondary',
        sub: 'Years 7 to 10',
        courses: [
          { code: 'PER / S1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'Ratio, algebra, geometry.' },
          { code: 'PER / S2', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The language of later maths.' },
          { code: 'PER / S3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Functions you can run.' }
        ]
      },
      {
        num: 'III',
        h3: 'Senior and adult',
        sub: 'Years 11, 12 and beyond',
        courses: [
          { code: 'PER / H1', slug: 'complete-high-school-mathematics-mastery', title: 'Senior maths', blurb: 'Calculus and statistics.' },
          { code: 'PER / H2', slug: 'ap-precalculus-exam-prep-course', title: 'Functions and precalculus', blurb: 'Strong function skills before calculus.' },
          { code: 'PER / H3', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data', blurb: 'Statistics and linear algebra.' }
        ]
      }
    ]
  },
  how: {
    eyebrow: 'Booking',
    h2: 'Fitting lessons into a Perth week',
    lede: 'Because Perth keeps one clock, a lesson booked for 4:30 pm stays at 4:30 pm all year. We confirm the time in writing when you book.',
    slots: [
      { time: 'Late afternoon', l: 'Primary and lower secondary.' },
      { time: 'Evening', l: 'ATAR students and adults.' },
      { time: 'Saturday', l: 'Longer sessions without the school rush.' }
    ],
    cells: [
      { h3: 'One regular teacher', p: 'Continuity from week to week.' },
      { h3: 'Short parent updates', p: 'What was covered, and what is next.' },
      { h3: 'Fifteen to twenty per group', p: 'Matched by level, not just age.' },
      { h3: 'Real-world problems', p: 'Clocks, maps and data from Census tables.' },
      { h3: 'Private lessons', p: 'For a test, a gap or a head start.' },
      { h3: 'Why before how', p: 'Methods are explained before they are drilled.' }
    ]
  },
  projectsH2: 'What our learners have gone on to build',
  projectsLede: 'Selected student projects that started from careful number work. The <a class="ag-inline-link" href="/student-labs">student labs</a> list more.',
  reviewsLede: 'Google reviews from families and learners, unchanged.',
  fees: {
    h2: 'Fees for maths tutoring in Perth',
    lede: 'Perth families are billed a single monthly fee in US dollars. Joining is free and there is no minimum term.',
    free: ['A real lesson at the right level', 'A clear note on next steps', 'No card required'],
    group: ['Fifteen to twenty learners', 'A regular teacher', 'Marked practice', 'Leave after any month'],
    one: ['Private lessons', 'Built around one goal', 'Good before exam season']
  },
  faq: {
    eyebrow: 'Perth maths questions',
    h2: 'Questions Perth families ask about maths tutoring',
    items: [
      {
        q: 'What does a maths tutor in Perth offer?',
        a: 'Regular live lessons with one teacher who finds gaps, teaches the missing ideas and gives practice, privately or in a small group, booked on Perth time.'
      },
      {
        q: 'Which ATAR maths courses do you teach?',
        a: 'Mathematics Applications, Mathematics Methods and Mathematics Specialist, the three senior courses named in UWA\'s 2026 handbook prerequisites.'
      },
      {
        q: 'What is a piecewise function?',
        a: 'A function made of different rules on different intervals. The time difference between Perth and Sydney is one: 3 hours in summer and 2 hours in winter, switching on set dates.'
      },
      {
        q: 'Is Perth always two hours behind Sydney?',
        a: 'No. By our calculation for 2027, Perth is 2 hours behind on 182 days and 3 hours behind on 183 days, because Sydney uses daylight saving and Perth does not.'
      },
      { q: 'Do you promise an ATAR or a score?', a: 'No. We teach carefully and help with exam habits, but we make no score or ATAR promises.' },
      {
        q: 'Can primary school children join?',
        a: 'Yes, from the first years of school, with lessons pitched at their level and plenty of hands-on number work.'
      },
      {
        q: 'Why use time zones in a maths lesson?',
        a: 'Because a time-zone gap is a function that students already live with. Turning it into rules, intervals and a step graph makes piecewise functions concrete, and checking the exact changeover dates teaches care at the boundaries.'
      },
      { q: 'Do lesson times change during the year?', a: 'No. Perth and India both keep one clock all year, so a Perth lesson time stays the same.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Monthly fees for group and private lessons are listed in the fees section on this page.' }
    ]
  },
  elsewhere: {
    eyebrow: 'More for Perth families',
    h2: 'Related pages',
    lede: 'Tests, curriculum help and costs.',
    items: [
      { href: '/wa-gate-aset-maths-practice', label: 'GATE ASET maths', p: 'Quantitative reasoning practice.' },
      { href: '/naplan-numeracy-practice-online', label: 'NAPLAN numeracy', p: 'Practice for Years 3 to 9.' },
      { href: '/australian-curriculum-maths-year-7-to-10-help', label: 'Years 7 to 10 maths', p: 'Australian Curriculum help.' },
      { href: '/australian-mathematics-competition-practice-by-year', label: 'Maths competition practice', p: 'By year level.' },
      { href: '/maths-tutor-cost-australia-explained', label: 'What maths tutoring costs', p: 'Prices explained.' },
      { href: '/online-maths-tutoring-australia', label: 'Online maths tutoring', p: 'How it works nationally.' }
    ]
  },
  start: {
    h2: 'Book a free Perth maths lesson',
    lede: 'Tell us when to call. The free lesson is taught at the learner\'s level, and afterwards we suggest a plan.',
    readFirst: 'Before booking: <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> and <a class="ag-inline-link" href="/courses">all courses</a>.',
    note: 'You will hear from our India-based team on a +91 number; we have no office in Perth. WhatsApp from an Australian mobile is usually quickest.',
    formNote: 'Free, no card, no obligation.'
  },
  footer: {
    cols: [
      {
        h4: 'Perth',
        links: [
          { href: '/wa-gate-aset-maths-practice', label: 'GATE ASET maths' },
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
    bottomRight: 'One clock, all year'
  },
  personalityCss: `
.ag-root.ag-mtpe .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-mtpe .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-mtpe .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mtpe .ag-table caption { text-align: left; font-weight: 640; }
.ag-root.ag-mtpe .ag-band-head h3 { letter-spacing: -0.012em; }
.ag-root.ag-mtpe .ag-slots { gap: 0.85rem; }
`,
  dossier: {
    curriculumAuthority: 'WA senior mathematics named via the University of Western Australia Handbook 2026 (MATH1721 and MATH1722 prerequisites; mathematics major ATAR subject): Mathematics Applications ATAR, Mathematics Methods ATAR, Mathematics Specialist ATAR. SCSA returned 403 and is not cited.',
    localProject: 'Piecewise time difference, Perth against other capitals, every day of 2027 at 6:00 pm Perth time (our calculation, Python zoneinfo, IANA tzdata): Sydney 3 h on 183 days and 2 h on 182 (changes 4 April and 3 October); Adelaide 2.5 or 1.5 h; Brisbane 2 h and Darwin 1.5 h all year (constant rule wins); India 2.5 h behind all year. Lesson family: piecewise functions.',
    requiredMentions: [
      'Mathematics Applications ATAR',
      'Mathematics Methods ATAR',
      'MATH1722',
      '178,400',
      '142,947',
      '104,270',
      '274,849',
      '3 December 2006',
      'Eucla',
      'The gap between Perth and Sydney is a piecewise function'
    ],
    sources: [
      {
        claim: 'UWA Handbook 2026: MATH1721 and MATH1722 prerequisites; mathematics major ATAR subject.',
        url: 'https://www.handbooks.uwa.edu.au/unitdetails?code=MATH1722'
      },
      {
        claim: 'ABS, 2021 Census QuickStats, Greater Perth: education attendance and highest attainment rows.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5GPER'
      },
      {
        claim: 'IANA tz database, australasia: WA daylight saving rules (1974-75, 1983-84, 1991-92, 2006-09), Australia/Eucla at 8:45, NSW rule from 2008.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      },
      { claim: 'Mathematical Association of Western Australia: association home page and termly newsletters.', url: 'https://mawainc.org.au/' }
    ],
    rejectedClaims: [
      'SCSA syllabus pages for the ATAR mathematics courses: 403 to curl\'s default agent; not used or circumvented.',
      'WA school year names (for example the year before Year 1): the Department of Education pages we tried returned 404, so the page says "the first years of school".',
      'Greater Perth preschool and bachelor-level counts: already printed on our Perth coding pages.',
      'ATAR scaling or score claims: no score talk on this page.',
      'Named tutoring businesses in Perth: none.'
    ]
  }
};
