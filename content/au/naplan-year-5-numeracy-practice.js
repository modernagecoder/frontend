'use strict';
// NAPLAN Year 5 numeracy practice (ag- exam door, Australia cluster Phase 3, row 41).
// Facts read raw on 7 October 2026 at nap.edu.au: test window page (numeracy after conventions of
// language; "Year 5: 50 minutes"), what's in the tests (strands, item types, "Year 7 and 9 numeracy tests
// have 2 sections", Year 5 writes online), key dates (2027 window 10 to 22 March), and the Year 5 numeracy
// proficiency level descriptions (quoted lines below). Practice items are our own.
// Lesson family: compensation by rounding, adjust then correct (checked free site-wide on 7 October 2026).
// Parent page: /naplan-numeracy-practice-online (not repeated here). No score or level is promised.

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'exam', tag: 'NAPLAN YEAR 5', label: 'NAPLAN Year 5 numeracy', blurb: 'The 50-minute Year 5 numeracy test, what ACARA says separates Developing from Strong, and compensation: round, calculate, then correct.' },
  slug: 'naplan-year-5-numeracy-practice',
  code: 'nyfi',
  accent: '#785414',
  accentRationale: 'Year 5 numeracy: a warm ochre (5.5:1 on #EDE7DA), at least 11 RGB from every accent on the site',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'NAPLAN Year 5 numeracy practice',
  title: 'NAPLAN Year 5 Numeracy Practice | Levels and Strategies',
  description: 'NAPLAN Year 5 numeracy practice: the 50-minute test, what moves a Year 5 student from Developing to Strong, and original compensation questions with full answers.',
  ogDescription: 'Year 5 NAPLAN numeracy from ACARA\'s own descriptions: the 50-minute test, the jump from Developing to Strong, and compensation practice (round, calculate, correct) we wrote ourselves.',
  twitterDescription: 'Year 5 NAPLAN numeracy: the test, the levels, and the round-then-correct strategy.',
  pageName: 'NAPLAN Year 5 Numeracy Practice',
  webPageDescription: 'A Year 5 guide to NAPLAN numeracy for Australian families: the 50-minute online test, what ACARA describes at each proficiency level in Year 5, and original compensation practice with decimals, money-free measurement and timetables.',
  courseDescription: 'Live online maths classes for Australian students in Years 4 to 6 that build place value to ten thousand, decimals, fractions and flexible mental calculation, without promising any NAPLAN result.',
  crumbs: [{ name: 'NAPLAN numeracy practice', href: '/naplan-numeracy-practice-online' }],
  crumbLabel: 'Year 5 numeracy',
  navLinks: [
    { href: '#year5', label: 'Year 5 test' },
    { href: '#step', label: 'Developing to Strong' },
    { href: '#compensate', label: 'Compensation' },
    { href: '#mistakes', label: 'Common slips' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; NAPLAN Year 5 numeracy &middot; Live online',
  h1: 'NAPLAN Year 5 numeracy practice',
  lede: 'By Year 5 the numbers in NAPLAN numeracy reach the tens of thousands, decimals arrive in hundredths, and many questions take two or three steps. The test runs 50 minutes, online. This page compares what ACARA says a Year 5 student at the Developing and Strong levels can do, because the gap between those two levels explains where most effort pays off. Then it teaches compensation, the habit of rounding to a friendly number, calculating, and correcting the difference, with practice questions we wrote. We teach numeracy only, not the literacy tests, and we promise no level.',
  secondaryCta: { href: '#compensate', label: 'Try the compensation questions' },
  wa: 'Hello Modern Age Coders, I would like a free maths class for my Year 5 child, on mental calculation and decimals.',
  heroNote: 'Year 5 facts from ACARA &middot; Questions written by us &middot; Numeracy only',
  spec: [
    ['Year level', 'Year 5'],
    ['Numeracy time', '50 minutes'],
    ['2027 window', '10 to 22 March'],
    ['Format', 'Online, tailored testlets'],
    ['Number range', 'Beyond 10 000 at Strong'],
    ['Our focus', 'Flexible calculation and decimals'],
    ['Not covered', 'Reading, writing, conventions'],
    ['Promise', 'None about results']
  ],
  capsuleQ: 'In short',
  capsule: 'Year 5 NAPLAN numeracy runs for 50 minutes online. Students sit it straight after conventions of language, on a day their school picks inside the national window, 10 to 22 March in 2027. For the Strong level, ACARA\'s Year 5 description lists comparing numbers beyond 10 000, representing hundredths as decimals, spotting equivalent fractions and solving simple multi-step problems.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Three courses for the Year 5 stretch',
    lede: 'Chosen for the skills that separate the middle levels in Year 5.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'NY5 / 01', title: 'Primary maths, upper years', note: 'Place value to ten thousand, fractions and decimals, measurement and data.' },
      { course: 'mental-maths-mastery-kids', code: 'NY5 / 02', title: 'Mental maths', note: 'Compensation, partitioning and estimation, practised until they feel natural.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'NY5 / 03', title: 'Problem solving', note: 'Multi-step questions broken into calm, checkable stages.' }
    ]
  },

  sections: [
    {
      id: 'year5', tint: 'tint', eyebrow: 'The Year 5 numeracy test',
      h2: 'Fifty minutes, online, and longer chains of reasoning',
      lede: 'Taken from the NAPLAN site run by ACARA; we checked each line on 7 October 2026.',
      body: [
        { kind: 'table', caption: 'Year 5 numeracy facts', head: ['Feature', 'ACARA\'s description'], rows: [
          ['Length', '50 minutes'],
          ['Order', 'Straight after conventions of language'],
          ['Maths covered', 'Number and algebra, measurement and space, statistics and probability'],
          ['Question types', 'Multiple choice, text entry, drag-and-drop and hot-spot'],
          ['Calculator', 'A non-calculator section followed by an online calculator is described for Years 7 and 9 only'],
          ['Writing test format', 'Online from Year 5 (Year 3 writes on paper)']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Year 5 is the first NAPLAN in which every test is done online, including writing. For numeracy that means tailored testlets: each student starts on the same first set of questions, and the next set depends on how the first went. A careless error early on matters more than a slow answer.',
            'Five extra minutes compared with Year 3 does not mean five extra minutes of rest. Questions now chain operations together, so reading carefully and checking each step is where time goes.'
          ],
          right: [
            'ACARA notes that a few questions reach content from the year of testing and the year after. For Year 5 that can include ideas many classes finish in Year 6, such as adding fractions with the same denominator.',
            'Its advice on preparation is short: teach the curriculum. The practice on this page follows that advice. It is one strategy, taught properly, rather than a pile of mock tests.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/key-dates/naplan-test-window" rel="noopener" target="_blank">NAPLAN test window and durations</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/whats-in-the-tests" rel="noopener" target="_blank">What\'s in the tests</a>; <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests" rel="noopener" target="_blank">Tailored tests</a>. Read at source on 7 October 2026; Modern Age Coders is independent of ACARA.' }
      ]
    },
    {
      id: 'step', tint: 'deep', eyebrow: 'Reading the Year 5 descriptions',
      h2: 'What changes between Developing and Strong',
      lede: 'Quoted from ACARA\'s Year 5 numeracy descriptions. The pairing of lines is our own, to show the step.',
      body: [
        { kind: 'table', caption: 'Year 5 numeracy, Developing beside Strong (ACARA wording)', head: ['Idea', 'Developing: the student can', 'Strong: the student can'], rows: [
          ['Size of numbers', 'compare, order and represent numbers to 10 000', 'compare, order and represent numbers beyond 10 000'],
          ['Decimals', 'represent tenths as decimal numbers', 'represent hundredths as decimals'],
          ['Fractions', 'compare fractions and identify the fraction to complete a whole', 'identify equivalent fractions'],
          ['Operations', 'solve single-step problems with operations including division, where there are no remainders', 'solve simple multi-step problems with operations'],
          ['Patterns', 'continue number patterns using addition or multiplication with whole numbers', 'continue number patterns using addition and multiplication with whole numbers, simple fractions and decimals'],
          ['Time', 'determine and order the duration of an event using clocks and calendars', 'calculate duration including am/pm notation and conversion between units']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two words carry most of the step: hundredths and multi-step. A Developing student handles one operation on whole numbers; a Strong student strings operations together and works in decimals to two places.',
            'At the Exceeding level ACARA adds skills such as "add and subtract decimals and fractions with the same denominator", "calculate areas and perimeters of rectangles" and "interpret timetables in context". Each of those is a multi-step task in disguise.'
          ],
          right: [
            'Compensation helps with both words. It turns an awkward number into a friendly one, so a two-step problem becomes two easy steps, and it works the same way for 3.99 as for 399.',
            'It also builds the checking habit. The correction at the end forces a child to ask what they changed, and by how much, which is the reasoning a multi-step question demands.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions" rel="noopener" target="_blank">NAPLAN proficiency level descriptions, Numeracy Year 5</a>. Checked on 7 October 2026.' }
      ]
    },
    {
      id: 'compensate', tint: '', eyebrow: 'Practice we wrote',
      h2: 'Compensation: round, calculate, then correct',
      lede: 'Change one number to something easy, do the easy calculation, then undo the change. The method is the same for whole numbers, decimals, multiplication and time.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Round up, then take back', p: '299 + 146: add 300 instead, giving 446, then take back the extra 1. The answer is 445.' },
          { h3: 'Subtract too much, then give back', p: '504 minus 198: subtract 200 to get 304, then give back the 2 you over-subtracted. The answer is 306.' },
          { h3: 'Multiply the friendly number', p: '6 times 49: 6 times 50 is 300, but that counts one extra 6, so subtract 6. The answer is 294.' }
        ] },
        { kind: 'table', caption: 'Original Year 5 practice with the compensation step written out', head: ['Question', 'Friendly version', 'Correction', 'Answer'], rows: [
          ['A school prints 299 newsletters on Monday and 146 on Tuesday. How many in total?', '300 + 146 = 446', 'Used 1 too many, so subtract 1', '445'],
          ['A tank holds 504 litres. 198 litres are drained. How much is left?', '504 minus 200 = 304', 'Took 2 too many, so add 2', '306 litres'],
          ['Each of 6 teams runs 49 laps. How many laps altogether?', '6 times 50 = 300', 'Counted 6 extra laps, so subtract 6', '294 laps'],
          ['A ribbon of 3.99 m is joined to one of 2.45 m. Total length?', '4 + 2.45 = 6.45', 'Added 0.01 too much, so subtract 0.01', '6.44 m'],
          ['A garden bed is 19 m by 6 m. What is its area?', '20 times 6 = 120', 'One extra strip of 6 square metres, so subtract 6', '114 square metres'],
          ['How far is 637 from 1 000?', '999 minus 637 = 362, with no regrouping', '999 is 1 short of 1 000, so add 1', '363'],
          ['A train leaves at 9:52 am and arrives at 11:17 am. How long is the trip?', '9:52 to 10:00 is 8 minutes; 10:00 to 11:17 is 1 hour 17 minutes', 'Add the two parts', '1 hour 25 minutes']
        ] },
        { kind: 'p', text: 'The sixth question is a favourite of teachers because it removes the regrouping that causes so many slips. Subtracting from 999 never needs borrowing, and the correction of one is easy to remember. The last question is compensation with time: instead of counting minutes across the hour, a student rounds to 10:00 first, which is the timetable skill ACARA lists at the Exceeding level.' },
        { kind: 'p', text: 'Every answer also comes with a free check. If 6 times 49 came out larger than 300, something went wrong, because 49 is smaller than 50. Estimation and compensation are two sides of the same idea.' }
      ]
    },
    {
      id: 'mistakes', tint: 'tint', eyebrow: 'Where Year 5 marks slip away',
      h2: 'Four slips we see, and the habit that prevents each',
      lede: 'From our own teaching, not from NAPLAN data.',
      body: [
        { kind: 'two',
          leftH3: 'The slips',
          left: [
            'Correcting in the wrong direction: rounding 198 up to 200 when subtracting, then subtracting the extra 2 instead of adding it back.',
            'Lining up decimals by the last digit, so 3.99 + 2.4 is treated as 3.99 + 0.24.',
            'Answering the first step of a two-step question and stopping there.',
            'Reading 9:52 to 11:17 as 1 hour 65 minutes, by subtracting the clock digits separately.'
          ],
          rightH3: 'The habits',
          right: [
            'Say the change out loud: "I took away 2 too many." The sentence tells you which way to correct.',
            'Write whole numbers with a decimal point and zeros, so 2.4 becomes 2.40 before adding.',
            'Before answering, reread the question and circle what it asks for.',
            'Bridge to the next whole hour first, then count the rest, exactly as in the timetable question above.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Calculation, flexibly',
    h2: 'Four rungs through Year 5',
    lede: 'A child climbs these at their own pace; the year level is only a rough guide.',
    table: { caption: 'Mental calculation rungs for upper primary', head: ['Rung', 'In practice', 'Ready to move on when'], rows: [
      ['1. Partitioning', 'Splits numbers into hundreds, tens and ones', 'Add 346 and 238 in their head, place by place'],
      ['2. Compensation', 'Rounds, calculates, corrects', 'Explain why 504 minus 198 means adding 2 back'],
      ['3. Decimals', 'Uses the same moves with tenths and hundredths', 'Add 3.99 and 2.45 without a written method'],
      ['4. Multi-step', 'Chains operations and checks each one', 'Solve the garden-bed area and its perimeter in one go']
    ] },
    left: { h3: 'If maths has become a worry', ps: [
      'By Year 5 some children have decided they are "not a maths person". Small wins with a reliable strategy change that story faster than extra homework.',
      'Praise the explanation, not just the answer.'
    ] },
    right: { h3: 'What comes next', ps: [
      'Year 7 adds the non-calculator section and proportional reasoning; our <a class="ag-inline-link" href="/naplan-year-7-numeracy-practice">Year 7 numeracy page</a> continues the story.',
      'For Year 3 strategies, see <a class="ag-inline-link" href="/naplan-year-3-numeracy-practice">NAPLAN Year 3 numeracy</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses for upper primary',
    h2: 'Maths courses that fit Years 4 to 6',
    lede: 'Arranged by need. The full syllabus sits behind each card.',
    bands: [
      { num: 'I', h3: 'Core maths', sub: 'Place value, fractions, decimals', courses: [
        { code: 'NY5 / C / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'The whole upper-primary curriculum, explained.' },
        { code: 'NY5 / C / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths', blurb: 'Strategies that make calculation flexible.' },
        { code: 'NY5 / C / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Graphs, tables and chance experiments.' }
      ] },
      { num: 'II', h3: 'Reasoning', sub: 'Multi-step thinking', courses: [
        { code: 'NY5 / R / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving and computational thinking', blurb: 'Breaking big questions into small steps.' },
        { code: 'NY5 / R / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus mental maths', blurb: 'Visual place value for children who think in pictures.' },
        { code: 'NY5 / R / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Calculation patterns, always paired with a check.' }
      ] },
      { num: 'III', h3: 'Stretch', sub: 'For students ready for more', courses: [
        { code: 'NY5 / X / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problems from contests for upper primary.' },
        { code: 'NY5 / X / 02', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle years maths', blurb: 'An early start on Years 7 to 9 content.' },
        { code: 'NY5 / X / 03', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Number sentences grow into equations.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes work',
    h2: 'Live, small and timed for Australian afternoons',
    lede: 'Our teachers are in India, behind every Australian capital. In Adelaide during daylight saving, a 4.30 pm class starts at 11.30 am India time, which keeps after-school slots easy to staff.',
    slots: [
      { time: 'Weekday afternoon', l: 'The most popular time for Years 4 to 6.' },
      { time: 'Weekend morning', l: 'Good for families with sport after school.' },
      { time: 'School holidays', l: 'Short blocks on one topic, such as decimals.' }
    ],
    cells: [
      { h3: 'One strategy at a time', p: 'Each lesson builds a single method until it is reliable.' },
      { h3: 'Explain the correction', p: 'Students say what they changed and how they undid it.' },
      { h3: 'Five to ten per group', p: 'Grouped by skill, so the pace suits everyone.' },
      { h3: 'Private option', p: 'One-to-one lessons for a particular gap or a confidence rebuild.' },
      { h3: 'Short parent updates', p: 'What was covered, and one question to try at the dinner table.' },
      { h3: 'No level promised', p: 'We teach the mathematics; NAPLAN reports what the child shows on the day.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Work our learners made because they wanted to. See more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'What parents wrote on Google, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Australian families are charged monthly in US dollars, our rate for every country outside India. Nothing is paid in advance, and you can stop at any month end.',
    free: ['A full lesson with a teacher', 'Advice on where your child stands', 'No card required'],
    group: ['Five to ten students at the same stage', 'One regular teacher', 'Feedback on every task', 'A certificate on completion'],
    one: ['A teacher for one student', 'Work on the exact gaps that matter', 'Times that suit your family']
  },

  faq: {
    eyebrow: 'Questions about Year 5 NAPLAN numeracy',
    h2: 'What Year 5 families ask us',
    items: [
      { q: 'How long is the Year 5 NAPLAN numeracy test?', a: '50 minutes, taken after the conventions of language test within the national window.' },
      { q: 'When does Year 5 sit NAPLAN in 2027?', a: 'Inside the national window of 10 to 22 March 2027. Your school chooses the day.' },
      { q: 'Is Year 5 NAPLAN online?', a: 'Yes. From Year 5 every NAPLAN test is online, writing included; only Year 3 writes on paper. Numeracy uses item types such as drag-and-drop and hot-spot.' },
      { q: 'Can Year 5 students use a calculator?', a: 'ACARA describes the non-calculator section and online calculator for Years 7 and 9 only; it describes no calculator for Year 5.' },
      { q: 'What is compensation in maths?', a: 'A mental strategy: change a number to a friendly one, calculate with it, then correct for the change. For example, 299 + 146 becomes 300 + 146, then subtract 1, giving 445.' },
      { q: 'What does Strong mean in Year 5?', a: 'Among other skills, ACARA lists comparing numbers beyond 10 000, representing hundredths as decimals, identifying equivalent fractions and solving simple multi-step problems.' },
      { q: 'How is Developing different from Strong?', a: 'In ACARA\'s wording, Developing students work with numbers to 10 000, tenths and single-step problems; Strong students work beyond 10 000, with hundredths and with simple multi-step problems.' },
      { q: 'Do you prepare students for the reading or writing tests?', a: 'No. We teach mathematics only.' },
      { q: 'Will classes lift my child\'s NAPLAN level?', a: 'We promise no level or score. We teach the mathematics carefully, and that is what the test asks students to use.' },
      { q: 'What time would lessons be?', a: 'We agree a weekly time after the free trial. Adelaide is five hours ahead of India time during daylight saving, so a 4.30 pm class begins at 11.30 am India time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Keep exploring',
    lede: 'Other NAPLAN years, competitions and maths support in Australia.',
    items: [
      { href: '/naplan-numeracy-practice-online', label: 'Every NAPLAN year level', p: 'The national overview: test windows and tailored testlets.' },
      { href: '/naplan-year-3-numeracy-practice', label: 'NAPLAN Year 3 numeracy', p: 'The number line strategies Year 5 builds on.' },
      { href: '/naplan-year-7-numeracy-practice', label: 'NAPLAN Year 7 numeracy', p: 'Calculator rules and proportional reasoning.' },
      { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia', p: 'Live classes for every year level.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Contests for upper primary students.' },
      { href: '/coding-classes-for-9-and-10-year-olds-australia', label: 'Coding for 9 and 10 year olds', p: 'Where maths meets programming.' }
    ]
  },

  start: {
    h2: 'Book a free Year 5 maths class',
    lede: 'Let us know the year level and the topic that feels hardest. The trial lesson works on that topic and ends with clear, honest advice.',
    readFirst: 'Want to see the options first? The <a class="ag-inline-link" href="/course-atlas">course atlas</a> shows every course side by side, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson minute by minute.',
    note: 'A WhatsApp message usually gets the quickest answer. The number has India\'s +91 code because our school is based there; there is no Australian office.',
    formNote: 'No payment details, no lock-in. One reply sets up the class.'
  },

  footer: {
    cols: [
      { h4: 'NAPLAN numeracy', links: [
        { href: '/naplan-numeracy-practice-online', label: 'All year levels' },
        { href: '/naplan-year-3-numeracy-practice', label: 'Year 3' },
        { href: '/naplan-year-7-numeracy-practice', label: 'Year 7' },
        { href: '/naplan-year-9-numeracy-practice', label: 'Year 9' }
      ] },
      { h4: 'More from us', links: [
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring in Australia' },
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/maths-challenges', label: 'Maths challenges' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Upper-primary maths taught well; no NAPLAN level promised'
  },

  personalityCss: `
.ag-root.ag-nyfi .ag-hero-grid { gap: clamp(1.1rem, 2.6vw, 2.3rem); }
.ag-root.ag-nyfi .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-nyfi .ag-capsule { border-left-width: 4px; }
.ag-root.ag-nyfi .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-nyfi .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-nyfi .ag-table th { letter-spacing: 0.02em; }
.ag-root.ag-nyfi .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-nyfi .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'ACARA, NAPLAN (nap.edu.au), read 7 October 2026. Test window: numeracy "To be completed after the conventions of language test"; "Year 5: 50 minutes". What\'s in the tests: strands; item types incl. drag-and-drop and hot-spot; "Year 7 and 9 numeracy tests have 2 sections"; writing on paper for Year 3, online for Years 5, 7 and 9; "The best preparation for NAPLAN is to teach the curriculum." Key dates: 2027 window 10 to 22 March. Proficiency level descriptions, Numeracy Year 5 (quoted): Developing "compare, order and represent numbers to 10 000", "represent tenths as decimal numbers", "compare fractions and identify the fraction to complete a whole", "solve single-step problems with operations including division, where there are no remainders", "determine and order the duration of an event using clocks and calendars"; Strong "compare, order and represent numbers beyond 10 000", "represent hundredths as decimals", "identify equivalent fractions", "solve simple multi-step problems with operations", "calculate duration including am/pm notation and conversion between units"; Exceeding "add and subtract decimals and fractions with the same denominator", "calculate areas and perimeters of rectangles", "interpret timetables in context".',
    localProject: 'Original Year 5 compensation practice with worked corrections: 299 + 146 = 445, 504 minus 198 = 306, 6 times 49 = 294, 3.99 m + 2.45 m = 6.44 m, a 19 m by 6 m bed has area 114 square metres, 1 000 minus 637 = 363 via 999, and a 9:52 am to 11:17 am trip lasts 1 hour 25 minutes.',
    requiredMentions: ['Round up, then take back', 'represent hundredths as decimals', 'solve simple multi-step problems with operations', 'compare, order and represent numbers to 10 000', 'interpret timetables in context', '1 hour 25 minutes', '6.44 m', '504 minus 198', 'round, calculate, then correct'],
    sources: [
      { claim: 'NAPLAN test window: Year 5 numeracy 50 minutes, after conventions of language.', url: 'https://www.nap.edu.au/naplan/key-dates/naplan-test-window' },
      { claim: 'NAPLAN, What\'s in the tests: strands, item types, Years 7 and 9 sections, writing format by year, preparation advice.', url: 'https://www.nap.edu.au/naplan/whats-in-the-tests' },
      { claim: 'NAPLAN tailored tests: testlet pathways.', url: 'https://www.nap.edu.au/naplan/understanding-online-assessment/tailored-tests' },
      { claim: 'NAPLAN proficiency level descriptions, Numeracy Year 5.', url: 'https://www.nap.edu.au/naplan/results-and-reports/proficiency-level-descriptions' },
      { claim: 'NAPLAN key dates: 2027 window 10 to 22 March.', url: 'https://www.nap.edu.au/naplan/key-dates' }
    ],
    rejectedClaims: [
      'Number of questions in the Year 5 numeracy test: not stated on the pages read.',
      'Percentages of Year 5 students at each level: not quoted.',
      'That Year 5 numeracy has a calculator section: ACARA describes one only for Years 7 and 9, so none is claimed.',
      'Money problems in the practice: avoided so no currency symbol appears on the page.',
      'Any promise that tutoring lifts a NAPLAN level: refused.'
    ]
  }
};
