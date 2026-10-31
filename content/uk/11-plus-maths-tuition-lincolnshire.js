'use strict';
// 11 plus maths tuition in Lincolnshire (ag- maths door by area, UK cluster row UK057).
// Read raw with curl on 31 October 2026 (copies under keyword-research-2026-09/uk-us-gap/src/
// 11-plus-maths-tuition-lincolnshire/):
//  - Lincolnshire Consortium of Grammar Schools (grammarschools.lincs.sch.uk), Testing Arrangements:
//    "The Lincolnshire Consortium of Grammar Schools currently uses GL Assessment to provide 11+ Testing, this
//    arrangement may change over time."; "Candidates are asked to take a Verbal Reasoning Test and a
//    Non-Verbal Reasoning Test, either in their own Primary Schools or in the Grammar School where they have
//    registered, according to area."; OMR sheet; "Qualification represents a score of 220 which is set to
//    identify the most able 25% of pupils in the age group in primary schools in the selective areas of
//    Lincolnshire."; "the Verbal Reasoning Test is preceded by a ten-minute Preliminary Practice Test";
//    buy "the Multiple Choice Format, NOT the Standard Format".
//  - Consortium, 11+ Key Dates 2026: registration opens Wed 07 January 2026; forms back to the grammar
//    schools by Tue 31 March 2026; familiarisation materials to primaries by Fri 26 June 2026; "First 11+
//    Test – Verbal Reasoning" Fri 11 or Sat 12 September 2026; "Second 11+ Test – Non-Verbal Reasoning and
//    Spatial Awareness" Fri 18 or Sat 19 September 2026; results emailed to parents Fri 09 October 2026 at
//    12:00 (midday); local authority closing date Sat 31 October 2026; National Offer Day Mon 01 March 2027.
//  - Consortium, Selection Process FAQ: tests "are not tests of attainment"; "The qualifying level is a total
//    standardised score of at least 220 on both papers."; "The selection tests may only be taken once in the
//    academic year."; age allowance "is not fixed in advance"; "There is no adjustment for the sex of the
//    pupil"; "It is possible to return a high standardised score without answering every question";
//    passing elsewhere: "In most circumstances, it will still be necessary to take the Lincolnshire tests.";
//    commercial practice "unnecessary and may be unhelpful"; "The Consortium has therefore resolved not to
//    give parents the raw scores."
//  - Consortium, How to Prepare: "No special preparation is needed."; "Too much preparation puts children
//    under pressure and may be counter-productive."; "does not endorse tutoring".
//  - Consortium, What are Grammar Schools: "Lincolnshire's 15 Grammar schools are 11-18 selective schools";
//    "non-fee paying state schools"; selective academies vs community schools; "The Local Authority is not
//    responsible for selection arrangements and testing". Admissions page: "parents can choose up to three
//    secondary schools". Atom Learning page: free access for pupils eligible for pupil premium. Data pages:
//    2025 standardised scores and ages "published on 09 November 2025", values of five or fewer suppressed.
//  - Lincolnshire County Council, Going to school in Lincolnshire guide: "Grammar school tests take place in
//    September. The results are posted before 31 October."; "If your child does not meet the required
//    standard at a grammar school, a place will not be offered."; "There are no primary schools that are
//    grammar schools in Lincolnshire."; reaching the standard is not an automatic offer; reserve list rule.
//    Applying to secondary schools: "you can select up to four schools"; key dates 7 September 2026 to
//    31 October 2026.
// No school is named: the consortium's members are referred to as "the consortium's grammar schools".
// Our own, labelled on the page: the warm-up puzzles (broad reasoning and spatial play, not imitation
// items) and the Year 7 readiness list. Spine: there is no maths paper. The Lincolnshire 11 plus is two
// reasoning tests; an honest maths page says so first and offers maths for what it actually helps.
// Lesson family: an area page where the right answer to "maths tuition for the test?" is mostly no.

const TIMING = 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.';

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'LINCOLNSHIRE', label: '11 plus maths in Lincolnshire', blurb: 'The Lincolnshire 11 plus has no maths paper: two reasoning tests, a total of 220 to qualify. What maths is still for.' },
  slug: '11-plus-maths-tuition-lincolnshire',
  code: 'gak',
  accent: '#634558',
  accentRationale: 'Lincolnshire 11 plus: a dusky plum (#634558), 7.85:1 on #FBF8F2 and 6.76:1 on the deepest paper tint, distinct from the olive GL page and the teal Kent page it links to',
  pageType: 'market',
  priceSubject: 'maths',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Lincolnshire',
  title: '11 Plus Maths Tuition Lincolnshire | There Is No Maths Paper',
  description: '11 plus maths tuition in Lincolnshire: the consortium\'s test is verbal and non-verbal reasoning, with no maths paper. Dates, the 220 score, and what maths is for.',
  ogDescription: 'Lincolnshire\'s grammar school test has no maths section. Before paying for 11 plus maths tuition, read what the consortium actually sets.',
  twitterDescription: 'Lincolnshire 11 plus: two reasoning tests, a total of 220 to qualify, raw scores never released, tutoring not endorsed. An honest maths page.',
  pageName: '11 Plus Maths Tuition in Lincolnshire',
  webPageDescription: 'An honest guide for Lincolnshire families searching for 11 plus maths tuition: what the Lincolnshire Consortium of Grammar Schools tests, how it scores, and where maths teaching does and does not help.',
  courseDescription: 'Live online maths lessons for Lincolnshire children in Years 5 and 6, focused on secure Year 5 and 6 maths and readiness for Year 7, not on the reasoning papers of the 11 plus.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus in Lincolnshire',
  navLinks: [
    { href: '#test', label: 'The test' },
    { href: '#nomaths', label: 'No maths paper' },
    { href: '#score', label: 'The 220 line' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Lincolnshire &middot; LCGS 11 plus &middot; Years 5 and 6',
  h1: '11 plus maths tuition in Lincolnshire',
  lede: 'Lincolnshire\'s 11 plus is set by the Lincolnshire Consortium of Grammar Schools, with papers from GL Assessment, for the county\'s 15 grammar schools. It is two tests: verbal reasoning, and non-verbal reasoning with spatial awareness. There is no maths paper. Modern Age Coders teaches maths live online, in a group or one to one, and we would rather say that plainly than sell 11 plus maths tuition for a test that does not set any. This page explains what the consortium tests, how the qualifying total of 220 works, what the council and consortium say about preparation, and where good maths teaching still earns its place for a Lincolnshire child.',
  secondaryCta: { href: '#nomaths', label: 'Why no maths paper matters' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child in Lincolnshire.',
  heroNote: 'From the consortium and Lincolnshire County Council, read 31 October 2026 &middot; Not connected with any school or the council',
  spec: [
    ['Set by', 'Lincolnshire Consortium of Grammar Schools'],
    ['Papers from', 'GL Assessment, for now'],
    ['Test one', 'Verbal reasoning'],
    ['Test two', 'Non-verbal reasoning and spatial awareness'],
    ['Maths paper', 'None'],
    ['To qualify', 'Total standardised score of 220'],
    ['Results 2026', 'Emailed Friday 9 October, midday'],
    ['We teach', 'Maths for Years 5 to 7, honestly scoped']
  ],
  capsuleQ: 'Is there maths in the Lincolnshire 11 plus?',
  capsule: 'Not as a paper. The Lincolnshire Consortium of Grammar Schools says candidates "take a Verbal Reasoning Test and a Non-Verbal Reasoning Test", supplied for now by GL Assessment. For the 2026 sitting the verbal reasoning test fell on Friday 11 or Saturday 12 September and the non-verbal reasoning and spatial awareness test on Friday 18 or Saturday 19 September, with results emailed at midday on Friday 9 October 2026. A child qualifies with a total standardised score of at least 220 across both papers, a line the consortium says is set to identify the most able 25 per cent of pupils in Lincolnshire\'s selective areas. The consortium does not endorse tutoring and says no special preparation is needed. Modern Age Coders teaches maths live online for Years 5 to 7; for the test itself, we point families to the consortium\'s own familiarisation materials.',

  picks: {
    eyebrow: 'If you still want maths',
    h2: 'Three courses, for school maths rather than the test',
    lede: 'These help with Year 5 and 6 maths and the step into Year 7, which matter whatever the 11 plus result. Each card opens a syllabus.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'LINCS / 01', title: '11 plus maths preparation', note: 'Upper primary number, fractions and problem solving; for families also sitting a test elsewhere that does include maths.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'LINCS / 02', title: 'Lower secondary maths', note: 'Pre-algebra and geometry for Year 6 and the first years of any secondary school.' },
      { course: 'mental-maths-mastery-kids', code: 'LINCS / 03', title: 'Mental maths, number sense first', note: 'Calm, quick arithmetic for a child whose confidence with number is low.' }
    ]
  },

  sections: [
    {
      id: 'test', tint: 'tint', eyebrow: 'The test',
      h2: 'What is in the Lincolnshire 11 plus?',
      lede: 'Two reasoning tests on two days, a week apart, marked by machine and standardised for age. The dates below are the consortium\'s own for the September 2026 sitting.',
      body: [
        { kind: 'table', caption: 'Lincolnshire Consortium of Grammar Schools, 11+ key dates 2026', head: ['Date', 'What happens'], rows: [
          ['Wednesday 7 January 2026', 'Registration for the September tests opens on the consortium and grammar school websites'],
          ['Tuesday 31 March 2026', 'Deadline for registration forms to reach the individual grammar schools'],
          ['Friday 26 June 2026', 'Familiarisation materials due at primary schools'],
          ['Friday 11 or Saturday 12 September 2026', 'First test: verbal reasoning'],
          ['Friday 18 or Saturday 19 September 2026', 'Second test, which the consortium calls Non-Verbal Reasoning and Spatial Awareness'],
          ['Friday 9 October 2026', 'Results emailed to parents at 12:00 midday, and to primary schools at 16:00'],
          ['Saturday 31 October 2026', 'Closing date for Lincolnshire local authority secondary applications'],
          ['Monday 1 March 2027', 'National Offer Day']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How the papers are sat',
          left: [
            'Children answer by shading choices on an optical mark reading sheet. The verbal reasoning test opens with a ten-minute Preliminary Practice Test, and the non-verbal test is split into sections, each with a few practice questions that are not marked.',
            'Depending on the area of the county, children sit in their own primary school or in the grammar school where they registered. The consortium explains the split as a local decision made when the County Council delegated selection to the schools.'
          ],
          rightH3: 'Who runs what',
          right: [
            'The consortium runs the test. Lincolnshire County Council runs admissions. The consortium says "The Local Authority is not responsible for selection arrangements and testing", and the council\'s own guide sends parents to the grammar schools for testing questions.',
            'The consortium says it "currently uses GL Assessment to provide 11+ Testing, this arrangement may change over time." Check the consortium\'s site each year rather than assuming last year\'s format.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://grammarschools.lincs.sch.uk/the-11-plus/11-key-dates-2026/" rel="noopener" target="_blank">LCGS 11+ Key Dates 2026</a> and <a class="ag-inline-link" href="https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/" rel="noopener" target="_blank">Testing Arrangements</a>, read 31 October 2026. Modern Age Coders has no connection with the consortium, any of its schools, GL Assessment or Lincolnshire County Council.' }
      ]
    },
    {
      id: 'nomaths', tint: 'deep', eyebrow: 'The honest part',
      h2: 'Does my child need 11 plus maths tuition in Lincolnshire?',
      lede: 'For the test, no. The papers are verbal and non-verbal reasoning. Maths teaching helps a Lincolnshire child in other, real ways, and we would rather sell those honestly.',
      body: [
        { kind: 'p', html: 'Families who know the 11 plus from Kent, Buckinghamshire or Birmingham may expect a maths section, because GL Assessment writes those tests too and they include one. Lincolnshire\'s consortium orders a different shape. Its list of recommended practice packs, published on its own site, names verbal reasoning and non-verbal reasoning packs only. A family who buys maths practice papers for the Lincolnshire test is preparing for something the child will not sit.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'What the test measures', p: 'The consortium says the tests "are designed to identify potential. They are not tests of attainment and do not reflect the amount of work done or the teaching styles of different primary schools."' },
          { h3: 'What it advises', p: '"No special preparation is needed." The consortium adds that "Too much preparation puts children under pressure and may be counter-productive" and that it "does not endorse tutoring".' },
          { h3: 'What we therefore offer', p: 'Not test coaching. Maths for school, for children who also sit a test elsewhere that includes maths, and for the step into a grammar or any other secondary school in Year 7.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'When our maths lessons make sense',
          left: [
            'A child who is anxious about number, behind on Year 5 or Year 6 maths, or sitting another area\'s test that does set maths. The consortium notes that passing an 11 plus elsewhere does not usually exempt a child: "In most circumstances, it will still be necessary to take the Lincolnshire tests." Some families therefore sit two different tests.',
            'A child who has qualified and wants to start Year 7 secure. The consortium describes its 15 schools as offering "a distinctive academic curriculum that stretches able children", and secure arithmetic is part of being ready for that.'
          ],
          rightH3: 'When they do not',
          right: [
            'As a way to raise the Lincolnshire 11 plus score. Nothing we teach is aimed at verbal or non-verbal reasoning items, and we will not claim that maths lessons move a reasoning score.',
            'As a substitute for the consortium\'s free familiarisation materials, which come through Lincolnshire feeder primary schools. Those are the right way for a child to see the format.'
          ] }
      ]
    },
    {
      id: 'score', tint: '', eyebrow: 'The 220 line',
      h2: 'What is the Lincolnshire 11 plus pass mark?',
      lede: 'The consortium calls it a qualifying level, not a pass mark: a total standardised score of at least 220 across the two papers.',
      body: [
        { kind: 'table', caption: 'How the consortium explains its scores', head: ['Question', 'The consortium\'s answer'], rows: [
          ['What is the qualifying level?', '"a total standardised score of at least 220 on both papers"'],
          ['Why 220?', 'It is "set to identify the most able 25% of pupils in the age group in primary schools in the selective areas of Lincolnshire"'],
          ['Is there an age allowance?', 'Yes, comparing a pupil only with pupils of the same age; it "is not fixed in advance"'],
          ['Are boys and girls treated differently?', '"There is no adjustment for the sex of the pupil taking the test."'],
          ['Must every question be answered?', '"It is possible to return a high standardised score without answering every question"'],
          ['Can parents see raw scores?', 'No: "The Consortium has therefore resolved not to give parents the raw scores."'],
          ['Can a child sit twice?', '"The selection tests may only be taken once in the academic year."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Standardisation in plain terms',
          left: [
            'A raw score is the number of correct answers. The consortium converts it to a scale that compares a child with children of the same age, so that a child born in July or August is not at a disadvantage against one born the previous September. Because the allowance is based on how older pupils actually scored that year, it cannot be known before the test.',
            'The two standardised scores are then added, and a total of 220 or more qualifies.'
          ],
          rightH3: 'What the consortium publishes',
          right: [
            'After each sitting the consortium publishes the spread of total scores and pupil ages; its 2025 table was published on 9 November 2025, with counts of five or fewer pupils suppressed so no child can be identified. It also lists how many pupils completed both papers at each test venue.',
            'It does not publish an individual breakdown, and says giving separate paper scores "did not help parents understand or come to terms with their child\'s overall score".'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://grammarschools.lincs.sch.uk/the-11-plus/selection-process-faq/" rel="noopener" target="_blank">LCGS Selection Process FAQ</a> and the consortium\'s 11+ data pages, read 31 October 2026. We print no prediction of any child\'s score.' }
      ]
    },
    {
      id: 'admissions', tint: 'tint', eyebrow: 'Admissions',
      h2: 'Does qualifying guarantee a Lincolnshire grammar school place?',
      lede: 'No. Qualifying makes a child eligible; the place comes through the council\'s normal application, judged against each school\'s oversubscription criteria.',
      body: [
        { kind: 'ol', items: [
          'Register for the test with a grammar school in Year 5, by the consortium\'s deadline (31 March in 2026).',
          'Sit both tests in September of Year 6.',
          'Receive the total score by email in early October (9 October in 2026), before applications close.',
          'Apply through Lincolnshire County Council between early September and 31 October of Year 6, naming any grammar school you want; the council says "you can select up to four schools".',
          'Receive the offer on National Offer Day (1 March 2027 for this cohort).'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'From the council\'s guide',
          left: [
            '"If your child reaches the required standard in the 11+, they will not automatically be offered a place. You must still name the grammar school on your application."',
            'And the other direction: "If your child does not meet the required standard at a grammar school, a place will not be offered." Children who did not qualify cannot be added to a grammar school\'s reserve list unless found qualified at appeal.'
          ],
          rightH3: 'Two small things families miss',
          right: [
            'The council\'s application page allows up to four preferences, while the consortium\'s admissions page still says "up to three". The council runs admissions, so its number is the one to plan around; ask the council if in doubt.',
            'Selective and non-selective areas differ. The consortium notes that families outside Lincolnshire, or in non-selective parts of the county, make their own transport arrangements to grammar schools.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.lincolnshire.gov.uk/school-admissions/going-school-lincolnshire-guide" rel="noopener" target="_blank">Lincolnshire County Council, Going to school in Lincolnshire</a>; <a class="ag-inline-link" href="https://www.lincolnshire.gov.uk/school-admissions/apply-school" rel="noopener" target="_blank">Apply for a school</a>; <a class="ag-inline-link" href="https://grammarschools.lincs.sch.uk/admissions/" rel="noopener" target="_blank">LCGS Admissions</a>. Admissions questions belong with the council and the schools; we do not advise on them.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Readiness, not drilling',
      h2: 'What can families do at home instead of test coaching?',
      lede: 'Broad thinking and spatial play, the kind of everyday habit that helps any child and imitates no test. The warm-ups below are ours; they are not verbal or non-verbal reasoning items.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Fold and predict', p: 'Our warm-up: draw a cross of six squares on paper, mark one square with a star, and ask which square will be opposite the star when it folds into a cube. Then fold it and check. Being wrong and seeing why is the point.' },
          { h3: 'Turn it in your head', p: 'Our warm-up: write a capital F on card, then ask what it looks like after a quarter turn clockwise, then in a mirror. Draw the prediction before turning the card. Two minutes, at the kitchen table.' },
          { h3: 'Say the rule', p: 'Our warm-up: one person makes a number sequence with a secret rule, the other finds the rule and must say it in a full sentence. "Add three" is fine; "it goes up" is not. Precise words are a reasoning habit.' }
        ] },
        { kind: 'table', mt: true, caption: 'Maths that pays off in Year 7, our readiness list for Lincolnshire families', head: ['Skill (ours)', 'Why it matters in Year 7'], rows: [
          ['Times tables to 12, recalled instantly', 'Every fraction, ratio and algebra lesson leans on them'],
          ['Fractions, decimals and percentages as one idea', 'Secondary maths moves between the three constantly'],
          ['Written long multiplication and division', 'Needed before calculators arrive in secondary lessons'],
          ['Reading a word problem for the operation', 'The habit behind every multi-step question that follows'],
          ['Explaining a method in words', 'Grammar and comprehensive schools alike ask pupils to justify answers']
        ] },
        { kind: 'p', mt: true, html: 'Children who enjoy that kind of pattern hunting often enjoy logic in code as well; our <a class="ag-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire coding page</a> starts from truth tables and puzzles. For areas whose GL test does set maths, see <a class="ag-inline-link" href="/gl-assessment-11-plus-maths-practice">GL Assessment 11 plus maths, area by area</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'A calm route from Year 5 to Year 7',
    lede: 'Registration falls early in Year 5\'s spring; everything else is ordinary good schooling.',
    table: { caption: 'What matters when, for a Lincolnshire child', head: ['When', 'Focus', 'Secure when'], rows: [
      ['Spring of Year 5', 'Register for the test if you choose to', 'The grammar school has the form before the deadline'],
      ['Summer of Year 5', 'Familiarisation from the primary school', 'The child knows how the answer sheet works'],
      ['September of Year 6', 'Two tests, a week apart', 'Sat calmly, well rested'],
      ['Rest of Year 6', 'Year 6 maths and the move to secondary', 'Arithmetic and fractions secure for Year 7']
    ] },
    left: { h3: 'Whatever the result', ps: [
      'The line is set at the most able quarter of pupils in the selective areas, so most children there will not reach it. That is the design, not a failure.',
      'Good maths in Year 6 serves every route.'
    ] },
    right: { h3: 'Later on', ps: [
      'Our <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths page</a> covers the next big exam.',
      'For puzzle lovers, the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">UK competitions calendar</a> lists challenges by month.'
    ] }
  },

  catalogue: {
    eyebrow: 'All related courses',
    h2: 'Maths and coding courses for Lincolnshire children',
    lede: 'By age and purpose. Each card opens its syllabus.',
    bands: [
      { num: 'I', h3: 'Primary maths', sub: 'Years 3 to 6', courses: [
        { code: 'UK / GAK / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Place value, tables and fractions built properly.' },
        { code: 'UK / GAK / 02', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense for children who freeze at sums.' },
        { code: 'UK / GAK / 03', slug: 'ks2-sats-maths-course', title: 'KS2 SATs maths', blurb: 'The national tests at the end of Year 6.' },
        { code: 'UK / GAK / 04', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'For a second test elsewhere that includes maths.' }
      ] },
      { num: 'II', h3: 'Into secondary', sub: 'Years 6 to 8', courses: [
        { code: 'UK / GAK / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths', blurb: 'Pre-algebra and geometry for Year 7.' },
        { code: 'UK / GAK / 06', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Harder problems for keen mathematicians.' }
      ] },
      { num: 'III', h3: 'Thinking in code', sub: 'Ages 8 and up', courses: [
        { code: 'UK / GAK / 07', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Patterns and number explored in Python.' },
        { code: 'UK / GAK / 08', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Logic and sequence, built visually.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online, so every corner of the county is equal',
    lede: TIMING + ' Teaching comes from India, where clocks do not change: India time is four and a half hours ahead of UK time in summer and five and a half in winter. Lessons are booked in UK time.',
    slots: [
      { time: 'After school', l: 'For Years 5 and 6, early in the evening.' },
      { time: 'Weekend morning', l: 'For families who keep weeknights clear.' },
      { time: 'Holidays', l: 'Short refreshers before Year 7.' }
    ],
    cells: [
      { h3: 'Honest scope', p: 'Maths for school and Year 7, never sold as Lincolnshire test coaching.' },
      { h3: 'No travel', p: 'The same lesson in Skegness, Stamford or Gainsborough.' },
      { h3: 'Group or 1-on-1', p: 'A batch of 15 to 20 at one level, or a teacher for one child.' },
      { h3: 'Own material', p: 'Our questions and warm-ups, never copied test items.' },
      { h3: 'Plain reports', p: 'A short note on what improved and what did not.' },
      { h3: 'No promises', p: 'Qualification and places belong to the consortium and the council.' }
    ]
  },

  projectsH2: 'What our students go on to make',
  projectsLede: 'Projects from children in our classes, most of them older now. More on <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents on our Google profile, in their own words.',

  fees: {
    h2: 'Fees for maths lessons',
    lede: 'One monthly fee, in the currency we use for UK families, paid month by month with nothing upfront. The first lesson is free.',
    free: ['A real lesson at your child\'s level', 'A clear view of where the maths is', 'Only a phone number needed'],
    group: ['15 to 20 children at one level', 'The same teacher across the year', 'Work marked and talked through', 'A certificate at the end'],
    one: ['One child, one teacher', 'Built around one gap or goal', 'Good for a child who is anxious about maths']
  },

  faq: {
    eyebrow: 'Lincolnshire 11 plus questions',
    h2: 'What Lincolnshire parents ask',
    items: [
      { q: 'Is there a maths paper in the Lincolnshire 11 plus?', a: 'No. The consortium sets a verbal reasoning test and a non-verbal reasoning and spatial awareness test. Its recommended practice packs are verbal and non-verbal reasoning only.' },
      { q: 'What is the Lincolnshire 11 plus pass mark?', a: 'The consortium calls it a qualifying level: a total standardised score of at least 220 across the two papers. It says the line is set to identify the most able 25 per cent of pupils in the selective areas of Lincolnshire.' },
      { q: 'When are the Lincolnshire 11 plus dates for 2026?', a: 'Registration opened on 7 January 2026 and forms were due by 31 March 2026. The verbal reasoning test was on 11 or 12 September 2026, the non-verbal test on 18 or 19 September 2026, and results were emailed at midday on 9 October 2026.' },
      { q: 'Who provides the Lincolnshire 11 plus test?', a: 'The consortium says it currently uses GL Assessment and that this arrangement may change over time. Check the consortium site each year.' },
      { q: 'Should I hire an 11 plus tutor in Lincolnshire?', a: 'The consortium says no special preparation is needed and that it does not endorse tutoring. We do not offer Lincolnshire test coaching; we teach maths for school and for Year 7.' },
      { q: 'Can I see my child\'s raw scores?', a: 'No. The consortium says it has resolved not to give parents raw scores, and issues the overall standardised score only.' },
      { q: 'My child passed an 11 plus in another county. Is that enough?', a: 'Usually not. The consortium says that in most circumstances it will still be necessary to take the Lincolnshire tests.' },
      { q: 'Does qualifying guarantee a place?', a: 'No. Lincolnshire County Council says a child who reaches the standard is not automatically offered a place; you must still name the grammar school on your application, and oversubscription criteria apply.' },
      { q: 'How many schools can I list on the application?', a: 'Lincolnshire County Council\'s application page says up to four, while the consortium\'s admissions page says up to three. The council runs admissions, so check with the council.' },
      { q: 'When are your maths lessons?', a: TIMING + ' All times are given in UK time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Lincolnshire families',
    lede: 'Other tests, coding nearby, and the wider UK picture.',
    items: [
      { href: '/gl-assessment-11-plus-maths-practice', label: 'GL Assessment 11 plus maths', p: 'Where GL tests do set maths, area by area.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national page on the subject.' },
      { href: '/coding-classes-in-lincolnshire', label: 'Coding classes in Lincolnshire', p: 'Logic, truth tables and code across the county.' },
      { href: '/best-coding-class-in-lincoln', label: 'Coding classes in Lincoln', p: 'For families in and around the city.' },
      { href: '/ks2-sats-maths-papers-explained', label: 'KS2 SATs maths papers', p: 'The tests every Year 6 child sits.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Our hub for every UK page.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson',
    lede: 'Tell us your child\'s year and what worries you about maths. If what you need is test familiarisation, we will say so and point you to the consortium.',
    readFirst: 'Reading first? Every <a class="ag-inline-link" href="/courses">course page</a> sets out its syllabus, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'WhatsApp is quickest and free from a UK phone. We answer from India, on a number beginning +91, and keep no office in Lincolnshire.',
    formNote: 'No card, no contract. One reply with a time.'
  },

  footer: {
    cols: [
      { h4: 'Lincolnshire', links: [
        { href: '/coding-classes-in-lincolnshire', label: 'Coding in Lincolnshire' },
        { href: '/best-coding-class-in-lincoln', label: 'Coding in Lincoln' },
        { href: '/gl-assessment-11-plus-maths-practice', label: 'GL 11 plus maths' },
        { href: '/11-plus-maths-tuition', label: '11 plus maths' }
      ] },
      { h4: 'More', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Two reasoning papers, no maths paper, said plainly'
  },

  personalityCss: `
.ag-root.ag-gak .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-gak .ag-capsule { border-left-width: 6px; border-radius: 4px; }
.ag-root.ag-gak .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-gak .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-gak .ag-table th:first-child { width: 34%; }
`,

  dossier: {
    curriculumAuthority: 'Lincolnshire Consortium of Grammar Schools, read 31 October 2026: GL Assessment "currently" provides testing; candidates "take a Verbal Reasoning Test and a Non-Verbal Reasoning Test"; 2026 dates (registration 7 January to 31 March 2026; VR 11 or 12 September; NVR and spatial awareness 18 or 19 September; results 9 October 2026 at midday); qualifying "total standardised score of at least 220 on both papers", set for the most able 25 per cent; once per academic year; age allowance not fixed in advance; no adjustment by sex; raw scores withheld; other counties\' passes usually not accepted; "No special preparation is needed"; "does not endorse tutoring"; 15 grammar schools, 11 to 18, non-fee paying; up to three preferences on its admissions page. Lincolnshire County Council: grammar tests in September, results before 31 October; no automatic offer; no place below the standard; no primary grammar schools; reserve list rule; up to four preferences.',
    localProject: 'There is no maths paper. The page tells Lincolnshire families searching for 11 plus maths tuition that the consortium\'s test is verbal reasoning plus non-verbal reasoning and spatial awareness, with the 2026 dates, the sitting arrangements and the GL supply arrangement. It explains the 220 qualifying total from the consortium\'s FAQ, including the age allowance, the refusal to release raw scores and the once-a-year rule, then the council\'s admissions route, including the four-versus-three preference discrepancy. It quotes the consortium\'s view that no special preparation is needed, scopes our maths honestly to school maths, a second test elsewhere and Year 7 readiness, and offers three original home warm-ups labelled ours. Lesson family: an area page where the right answer to "maths tuition for the test?" is mostly no.',
    requiredMentions: ['There is no maths paper', 'Non-Verbal Reasoning and Spatial Awareness', 'total standardised score of at least 220 on both papers', 'most able 25%', 'resolved not to give parents the raw scores', 'No special preparation is needed', 'you can select up to four schools', 'ten-minute Preliminary Practice Test'],
    sources: [
      { claim: 'LCGS Testing Arrangements: GL provider, two reasoning tests, 220 and the top 25 per cent, OMR, practice elements, multiple choice packs.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/testing-arrangements/' },
      { claim: 'LCGS 11+ Key Dates 2026.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/11-key-dates-2026/' },
      { claim: 'LCGS Selection Process FAQ: potential not attainment, qualifying level, once a year, age allowance, raw scores, other counties.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/selection-process-faq/' },
      { claim: 'LCGS How to Prepare: no special preparation, tutoring not endorsed.', url: 'https://grammarschools.lincs.sch.uk/the-11-plus/how-to-prepare-your-children/' },
      { claim: 'Lincolnshire County Council guide: September tests, no automatic offer, no place below the standard, reserve lists.', url: 'https://www.lincolnshire.gov.uk/school-admissions/going-school-lincolnshire-guide' },
      { claim: 'Lincolnshire County Council, Applying to secondary schools: up to four preferences, 2026 dates.', url: 'https://www.lincolnshire.gov.uk/school-admissions/apply-school' }
    ],
    rejectedClaims: [
      'Names of the 15 grammar schools: the council\'s pages do not list consortium members, so the page names none.',
      'Per-venue counts of completed papers and any total of them: venue names are schools, and published parts are never summed.',
      'Any claim that maths teaching raises a verbal or non-verbal reasoning score: not supported, not made.',
      'Content of the verbal reasoning test (for example whether it includes number items): not described by the consortium; not stated.',
      'Past qualifying rates or the share of pupils reaching 220 in a given year: not computed from the frequency table.',
      'Any score prediction or place promise.'
    ]
  }
};
