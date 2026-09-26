'use strict';
// 11 plus maths tuition on the Wirral (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Wirral Council, assessment for grammar school education starting in September 2027: "Children who want to attend
//    a non-Catholic grammar school in Wirral must take an assessment"; registration closed at 12 noon on 1 June 2026;
//    "The assessment has two papers taken on the same day. The assessment will be provided by Quest Assessments. It
//    will take place on Tuesday 15 September 2026."; papers include verbal reasoning, non-verbal reasoning and
//    mathematics; "The assessments do not include long written answers"; readers and scribes not provided; free
//    online resources (Atom Learning) for eligible pupils in Years 3 to 6.
//  - Wirral Council, secondary admissions timetable: 2027 entry registration 1 to 31 May 2026, results 21 October 2026;
//    "Admissions to Secondary School in September 2028": registrations open 1 May 2027, deadline 31 May 2027,
//    literature 1 September 2027. (Registration deadline for 2027 appears as 31 May on the timetable and 12 noon 1 June
//    on the assessment page; both are noted.)
//  - Quest Assessments with The Wirral Consortium (Calday Grange Grammar School, West Kirby Grammar School, Wirral
//    Grammar School for Boys, Wirral Grammar School for Girls): "Each paper lasts approximately 50 minutes"; "Paper One
//    Verbal reasoning"; "Paper Two Mathematics and non-verbal reasoning"; "All questions are multiple choice ... (usually
//    five: A, B, C, D or E)"; OMR sheet.
//  - Wirral registration form 2027 names the four schools. St Anselm's College admissions FAQ (undated): "The exam
//    consists of English, Maths and Verbal Reasoning papers. Each exam is an hour in length"; "passing all 3 papers";
//    lists "scientific calculator" among things to bring. Upton Hall School FCJ (2027): verbal reasoning and English
//    papers only (no maths).
//  - National curriculum in England, mathematics, Year 5: "interpret negative numbers in context, count forwards and
//    backwards with positive and negative whole numbers, including through zero".
// Spine: Paper Two is maths with non-verbal reasoning, five options, no long written answers; the council has already
// published the 2028-entry registration window. Lesson family: negative numbers through zero (invented temperatures).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'WIRRAL CONSORTIUM', label: '11 plus maths on the Wirral', blurb: 'The Wirral assessment\'s maths sits in Paper Two with non-verbal reasoning, and the council has already set the 2028 registration window.' },
  slug: '11-plus-maths-tuition-wirral',
  code: 'wrm',
  accent: '#0B3B4C',
  accentRationale: 'Wirral 11 plus maths: a deep Dee-estuary teal, chosen by colour distance from every accent on the site (9.7:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition on the Wirral',
  title: '11 Plus Maths Tuition Wirral | Grammar Assessment Maths',
  description: 'Live online 11 plus maths for the Wirral grammar school assessment: Paper Two maths with Quest, the 2028 registration window already set, and Year 5 maths taught.',
  ogDescription: 'The Wirral assessment puts maths in Paper Two with non-verbal reasoning, multiple choice from five options. The council has already set May 2027 for the next registration.',
  twitterDescription: 'Wirral 11 plus maths, taught live online: Paper Two, five options, and the Year 5 maths behind it.',
  pageName: '11 Plus Maths Tuition on the Wirral',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Wirral assessment used by Calday Grange, West Kirby and the two Wirral Grammar Schools, based on what Wirral Council and Quest Assessments publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Wirral grammar school assessment, teaching Year 5 maths for a multiple-choice paper shared with non-verbal reasoning.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths on the Wirral',
  navLinks: [
    { href: '#assessment', label: 'The assessment' },
    { href: '#calendar', label: '2028 dates' },
    { href: '#negatives', label: 'Negative numbers' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Wirral &middot; Grammar school assessment maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition on the Wirral',
  lede: 'Most areas have not yet said when families of children now in Year 5 should register for next year\'s 11 plus. Wirral Council has. Its admissions timetable already lists the window for September 2028 entry: registrations open on 1 May 2027 and close on 31 May 2027. That leaves this school year for the maths, and Quest Assessments, which provides the test with the four non-Catholic grammar schools, describes where the maths will be: Paper Two, "Mathematics and non-verbal reasoning", about fifty minutes, every question multiple choice from usually five options, and no long written answers. This page sets out what the council and Quest publish, notes the different arrangements at the two Catholic grammar schools, and then teaches one Year 5 topic that fits a short, multiple-choice maths section well: negative numbers.',
  secondaryCta: { href: '#calendar', label: 'See the 2028 dates' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Wirral 11 plus.',
  heroNote: 'Maths only &middot; We do not teach verbal or non-verbal reasoning &middot; No connection with Wirral Council or any school',
  spec: [
    ['Schools', 'Calday Grange, West Kirby, Wirral Grammar Boys and Girls'],
    ['Run by', 'Wirral Council, with Quest Assessments'],
    ['Papers', 'Two, about 50 minutes each, same day'],
    ['Maths', 'Paper Two, with non-verbal reasoning'],
    ['Answers', 'Multiple choice, usually five options'],
    ['Long written answers', 'None'],
    ['Next registration', '1 to 31 May 2027'],
    ['We teach', 'Year 5 maths for Paper Two']
  ],
  capsuleQ: 'In short',
  capsule: 'Wirral Council says children who want to attend a non-Catholic grammar school on the Wirral must take its assessment, used by Calday Grange Grammar School, West Kirby Grammar School, Wirral Grammar School for Boys and Wirral Grammar School for Girls. Quest Assessments provides two papers of about fifty minutes on the same day: Paper One verbal reasoning, Paper Two mathematics and non-verbal reasoning, all multiple choice from usually five options, with no long written answers. For 2027 entry the assessment was on Tuesday 15 September 2026, with results due on 21 October 2026. For 2028 entry, the council\'s timetable gives registration from 1 May to 31 May 2027. St Anselm\'s College and Upton Hall School run their own tests. We teach the maths, live online. Your first lesson is free; afterwards a group place is USD 100 per month and one to one USD 150 per month.',

  picks: {
    eyebrow: 'Wirral starting points',
    h2: 'Three courses for Paper Two',
    lede: 'Choose by how well your child copes with a short maths section followed by a switch to shapes and patterns.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'WIRRAL / 1', title: 'Paper Two maths course', note: 'Year 5 number, measures, geometry and data, practised as five-option questions.' },
      { course: 'mental-maths-mastery-kids', code: 'WIRRAL / 2', title: 'Quick, secure arithmetic', note: 'Fast recall so the maths in Paper Two leaves time for everything else.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'WIRRAL / 3', title: 'Core primary maths', note: 'For a Year 4 child whose number sense needs strengthening first.' }
    ]
  },

  sections: [
    {
      id: 'assessment', tint: 'tint', eyebrow: 'The assessment',
      h2: 'What Wirral Council and Quest publish',
      lede: 'Wirral Council runs registration and the assessment for the four non-Catholic grammar schools; Quest Assessments, the provider, publishes the paper structure with them. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Wirral non-Catholic grammar school assessment for September 2027 entry', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration', '1 May to 31 May 2026', 'The council\'s timetable gives 31 May; its assessment page says registration closed at 12 noon on 1 June 2026.'],
          ['Venue notice', 'End of August 2026', 'Parents told which test venue their child will attend.'],
          ['Assessment', 'Tuesday 15 September 2026', 'Two papers taken on the same day.'],
          ['Results', '21 October 2026', 'Sent to parents, according to the council\'s timetable.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The council says the papers "include questions on: verbal reasoning, non-verbal reasoning, mathematics" and that "The assessments do not include long written answers." Readers and scribes are not provided.',
            'Quest\'s page, produced with the four schools, gives the structure: "Each paper lasts approximately 50 minutes." Paper One is verbal reasoning; "Paper Two Mathematics and non-verbal reasoning". "All questions are multiple choice, with your child selecting from a set of options (usually five: A, B, C, D or E)", marked on an OMR sheet.'
          ],
          right: [
            'The two Catholic grammar schools have their own arrangements. St Anselm\'s College\'s admissions FAQ, undated when we read it, says its entrance exam consists of English, Maths and Verbal Reasoning papers, each an hour long, and that a child must pass all three. Upton Hall School FCJ\'s test for 2027 entry was verbal reasoning and English, with no maths paper.',
            'Allocation of places belongs to each school\'s published policy and the council\'s coordinated scheme; it is not something we comment on.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.wirral.gov.uk/schools-and-learning/school-admissions/step-by-step/apply-secondary-school-place/assessment-grammar" rel="noopener" target="_blank">Wirral Council, assessment for grammar school education</a> and its secondary admissions timetable; <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/wirral-consortium-11-assessment" rel="noopener" target="_blank">Quest Assessments, Wirral Consortium 11+ Assessment</a>; St Anselm\'s College admissions FAQs; Upton Hall School FCJ admission arrangements 2027. Modern Age Coders has no connection with Wirral Council, Quest or any Wirral school.' }
      ]
    },
    {
      id: 'calendar', tint: 'plain', eyebrow: 'Already published',
      h2: 'The 2028 registration window is already set',
      lede: 'For children now in Year 5, Wirral Council\'s timetable gives dates most areas have not yet announced.',
      body: [
        { kind: 'table', caption: 'Wirral Council\'s timetable for secondary admissions in September 2028', head: ['Date', 'Step'], rows: [
          ['1 May 2027', 'Online registrations for the selective assessments open'],
          ['31 May 2027', 'Deadline for registrations'],
          ['1 September 2027', 'Literature and application forms available']
        ] },
        { kind: 'two', mt: true,
          left: [
            'With registration in May of Year 5 and the assessment in September of Year 6, a family has the whole of this school year to prepare the maths, and a fixed month in which to register. The council\'s 2027 page added that late registrations are not accepted except for families who move to Wirral after the closing date.',
            'The exact assessment date for 2028 entry is not yet published. The 2027 pattern, a weekday in mid-September, is a guide but not a promise.'
          ],
          right: [
            'For maths, the useful point is the ceiling. A September assessment in Year 6 can only reasonably draw on work taught by the end of Year 5. So the plan is to make Year 5 content secure by the summer, then spend the holiday on short timed sections in the multiple-choice format.',
            'Quest publishes familiarisation booklets with OMR answer sheets, including a maths booklet of sample questions. Those are the right way to see the layout; we do not copy them.'
          ] },
        { kind: 'source', html: 'Source: Wirral Council, secondary admissions timetable (Admissions to Secondary School in September 2028), read 26 September 2026.' }
      ]
    },
    {
      id: 'negatives', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Negative numbers, counted through zero',
      lede: 'The Year 5 curriculum asks children to "interpret negative numbers in context, count forwards and backwards with positive and negative whole numbers, including through zero". Temperature is the classic context.',
      body: [
        { kind: 'table', caption: 'A week of night-time lows, invented for teaching (degrees Celsius)', head: ['Night', 'Low', 'Night', 'Low'], rows: [
          ['Monday', '3', 'Friday', '-4'],
          ['Tuesday', '-1', 'Saturday', '-2'],
          ['Wednesday', '-3', 'Sunday', '1'],
          ['Thursday', '0', '', '']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Order', p: 'Which night was coldest? Friday, at -4. Children who compare only the digits pick Monday\'s 3 or say -1 is colder than -4. On a number line, further left is colder.' },
          { h3: 'Difference', p: 'How much warmer was Monday than Friday? From -4 up to 0 is 4 degrees, then up to 3 is 3 more: 7 degrees. Counting through zero in two steps avoids the error of 3 - 4 = -1.' },
          { h3: 'Change', p: 'On Saturday it was -2. By Sunday it was 1. By how much did it rise? 3 degrees: two steps up to 0, one more to 1.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The whole topic rests on one picture: a number line with zero in the middle. Negative numbers get smaller as they move left, which means -4 is less than -1 even though 4 is more than 1. A child who has the picture in their head answers these questions quickly and correctly; a child relying on the digits makes the same mistake every time.',
            'Year 5 keeps negative numbers to whole numbers and to contexts like temperature, so the arithmetic is never hard. What is being tested is understanding, which is exactly what a five-option question can probe.'
          ],
          right: [
            'On a multiple-choice question, the wrong options are often the answers produced by the classic errors: 1 instead of 7 for the difference between 3 and -4, or -1 instead of 7 by subtracting the wrong way. A child who knows why those are wrong rejects them without calculating.',
            'The same number-line picture helps elsewhere in Paper Two maths: sequences that count down past zero, and coordinates, which children meet more fully in Year 6.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 number and place value (statutory requirements). The temperatures are invented; the questions are Modern Age Coders\' own.' }
      ]
    },
    {
      id: 'paper', tint: 'tint', eyebrow: 'Paper Two in practice',
      h2: 'Maths, then shapes: preparing for a shared paper',
      lede: 'Paper Two mixes maths with non-verbal reasoning. We teach the maths part, and we prepare children for the switch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Nothing past Year 5', p: 'Because the assessment falls in September of Year 6, we build on what Year 5 teaches: place value, the four operations, fractions, measures, shape and data, each made reliable.' },
          { h3: 'Five options', p: 'With usually five choices per question, children learn to estimate first and reject options that cannot be right, before calculating.' },
          { h3: 'Short sections', p: 'A fifty-minute paper shared with non-verbal reasoning leaves limited time for maths. We practise short, timed maths sets so speed and accuracy go together.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We do not teach non-verbal reasoning. Families wanting help with it, or with Paper One\'s verbal reasoning, should look elsewhere; we say so at the start.',
            'All the practice questions a child meets with us were written by our teachers. Quest\'s booklets stay Quest\'s, and we point families to them rather than copy them.'
          ],
          right: [
            'St Anselm\'s College\'s exam, as its FAQ describes it, includes a separate one-hour maths paper, and its list of things to bring mentions a scientific calculator. Because that FAQ is undated, families should check the current arrangements with the college directly. Our teaching covers written and mental methods either way.',
            'Upton Hall School\'s 2027 test had no maths paper, so this page does not apply to it.'
          ] }
      ]
    },
    {
      id: 'peninsula', tint: 'plain', eyebrow: 'Across the peninsula',
      h2: 'Four consortium schools, lessons at home',
      lede: 'Quest and the council name the four non-Catholic grammar schools that share the assessment. We list them only to make the scope clear.',
      body: [
        { kind: 'table', caption: 'The Wirral Consortium schools, as Quest Assessments and Wirral Council name them', head: ['School', 'Test'], rows: [
          ['Calday Grange Grammar School', 'Wirral assessment'],
          ['West Kirby Grammar School', 'Wirral assessment'],
          ['Wirral Grammar School for Boys', 'Wirral assessment'],
          ['Wirral Grammar School for Girls', 'Wirral assessment'],
          ['St Anselm\'s College', 'Its own entrance exam'],
          ['Upton Hall School FCJ', 'Its own test, no maths paper in 2026']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, so a child in Birkenhead, Wallasey, Heswall or Hoylake is taught exactly the same way, in groups of five to ten matched by level.',
            'For coding in the city across the Mersey, see our <a class="ag-inline-link" href="/best-coding-class-in-liverpool">Liverpool coding page</a>.'
          ],
          right: [
            'We teach children across the UK and beyond, and a Wirral pupil may share a class with children from anywhere at the same stage of Year 5 maths.',
            'We have no connection with Wirral Council, Quest Assessments or any of these schools, and we do not advise on applications or places.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Up to May 2027 and beyond',
    h2: 'Four stages for today\'s Year 5',
    lede: 'Register in May 2027, sit the assessment early in Year 6. Here is how the year before fits together.',
    table: { caption: 'Year 5 maths, secure by the summer', head: ['When', 'Stage', 'You will see'], rows: [
      ['Autumn, Year 5', '1. Number and place value', 'Numbers to a million, negatives through zero, rounding'],
      ['Winter, Year 5', '2. Operations and fractions', 'Written and mental methods quick and reliable'],
      ['Spring, Year 5 (register in May)', '3. Measures, shape, data', 'The rest of Year 5 as secure as number'],
      ['Summer holiday', '4. Five-option practice', 'Short timed maths sections answered calmly']
    ] },
    left: { h3: 'Later start', ps: [
      'Starting after registration still leaves the summer. Number first, then timed sets.',
      'We will tell you honestly at the free lesson what is realistic.'
    ] },
    right: { h3: 'After October', ps: [
      'Negative numbers lead on to algebra and coordinates. Many pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Children who liked the puzzles can look ahead to the Primary and Junior Maths Challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Wirral families',
    lede: 'Grouped by stage, each with a full syllabus.',
    bands: [
      { num: 'I', h3: 'For the Wirral assessment', sub: 'Years 3 to 5', courses: [
        { code: 'WRM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Wirral', blurb: 'Year 5 maths for Paper Two.' },
        { code: 'WRM / 02', slug: 'mental-maths-mastery-kids', title: 'Mental calculation for children', blurb: 'Speed and accuracy without a calculator.' },
        { code: 'WRM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Years 1 to 5 maths', blurb: 'Foundations before exam work.' },
        { code: 'WRM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus maths', blurb: 'A physical route to number sense.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'From Year 6', courses: [
        { code: 'WRM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3 maths', blurb: 'Negatives, algebra and graphs.' },
        { code: 'WRM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, every board', blurb: 'Foundation and higher.' },
        { code: 'WRM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad-style maths', blurb: 'Challenging problems for enthusiasts.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Numbers that run', courses: [
        { code: 'WRM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Plot temperatures below zero in Python.' },
        { code: 'WRM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'First programs, block by block.' },
        { code: 'WRM / 10', slug: 'python-ai-kids-masterclass', title: 'Junior Python and AI', blurb: 'Typed code for ready children.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'WRM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic speed calculation', blurb: 'Faster methods on firm ground.' },
        { code: 'WRM / 12', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'Data and models, a few years on.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson hours',
    h2: 'Early evenings and weekends, UK time',
    lede: 'Teaching happens live from India. For ten-year-olds on the Wirral that means after-school or Saturday and Sunday morning slots, fixed in UK time, with any clock-change shuffling done by us.',
    slots: [
      { time: 'Weekday evenings, early', l: 'Soon after school.' },
      { time: 'Weekend mornings', l: 'When children are fresh.' },
      { time: 'Holidays', l: 'Short extra sessions.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person every week.' },
      { h3: 'Honest notes', p: 'Brief, frank updates for parents.' },
      { h3: 'Five to ten per group', p: 'Matched by level.' },
      { h3: 'Our own questions', p: 'Nothing copied from Quest material.' },
      { h3: 'One to one', p: 'For a particular gap.' },
      { h3: 'Maths only', p: 'No reasoning coaching, no admissions advice.' }
    ]
  },

  projectsH2: 'From the number line to real projects',
  projectsLede: 'Four things our students have built and published; each started, years earlier, with arithmetic like Paper Two\'s. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Parents\' Google reviews, quoted as written.',

  fees: {
    h2: 'Fees',
    lede: 'A single US dollar price each month for families outside India. No sign-up fee; stop when you like.',
    free: ['A lesson that teaches', 'An honest verdict', 'No card required'],
    group: ['Five to ten children, one level', 'A regular teacher', 'Work checked together', 'A certificate at the end'],
    one: ['A teacher for one child', 'Targeted at gaps', 'Handy in the summer before']
  },

  faq: {
    eyebrow: 'Wirral questions',
    h2: 'What Wirral families ask us',
    items: [
      { q: 'What is in the Wirral 11 plus?', a: 'Wirral Council says the assessment has two papers taken on the same day, with questions on verbal reasoning, non-verbal reasoning and mathematics. Quest says each lasts about 50 minutes, with Paper Two covering mathematics and non-verbal reasoning.' },
      { q: 'Is the Wirral assessment multiple choice?', a: 'Yes. Quest says all questions are multiple choice, usually from five options, A to E, marked on an OMR sheet. The council says there are no long written answers.' },
      { q: 'When do we register for September 2028 entry?', a: 'Wirral Council\'s timetable gives 1 May 2027 for registrations opening and 31 May 2027 as the deadline.' },
      { q: 'When was the last assessment?', a: 'For September 2027 entry it was on Tuesday 15 September 2026, with results due on 21 October 2026.' },
      { q: 'Which schools use the Wirral assessment?', a: 'Calday Grange Grammar School, West Kirby Grammar School, Wirral Grammar School for Boys and Wirral Grammar School for Girls.' },
      { q: 'What about St Anselm\'s and Upton Hall?', a: 'They run their own tests. St Anselm\'s FAQ describes English, Maths and Verbal Reasoning papers of an hour each; Upton Hall\'s 2027 test was verbal reasoning and English, with no maths.' },
      { q: 'What maths should my child know?', a: 'For a September test early in Year 6, the primary curriculum up to the end of Year 5: number, fractions, measures, geometry and statistics.' },
      { q: 'Do you teach non-verbal reasoning?', a: 'No. We teach maths only, and we do not advise on applications or places.' },
      { q: 'Do you use Quest papers?', a: 'No. We write our own questions and do not reproduce familiarisation material.' },
      { q: 'What do lessons cost?', a: 'There is no charge for lesson one. After that, USD 100 per month buys a group place and USD 150 per month one to one tuition.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Merseyside and Cheshire families',
    lede: 'Coding in Liverpool, our national 11 plus page, and another north-west selective area.',
    items: [
      { href: '/best-coding-class-in-liverpool', label: 'Coding classes in Liverpool', p: 'Programming for children across the Mersey.' },
      { href: '/11-plus-maths-tuition-trafford', label: '11 plus maths in Trafford', p: 'Greater Manchester\'s consortium test.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The broad picture of 11 plus maths.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'Where primary pupils begin.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges, dated.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area.' }
    ]
  },

  start: {
    h2: 'Ask for a free lesson',
    lede: 'Give us the school year and a line on maths at home. The trial is a genuine lesson, followed by our candid view of where your child stands.',
    readFirst: 'Browsing first? Our <a class="ag-inline-link" href="/courses">courses</a> each have a syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes the lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows.',
    note: 'A WhatsApp message tends to get the swiftest answer. Our staff and phone line are in India; there is no office on Merseyside or elsewhere in Britain.',
    formNote: 'No card needed. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'North west and national', links: [
        { href: '/best-coding-class-in-liverpool', label: 'Coding in Liverpool' },
        { href: '/11-plus-maths-tuition-trafford', label: '11 plus maths in Trafford' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The council runs the assessment; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-wrm .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-wrm .ag-capsule { border-left-width: 5px; border-radius: 0 13px 13px 0; }
.ag-root.ag-wrm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-wrm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.018em; }
.ag-root.ag-wrm .ag-table td:nth-child(2), .ag-root.ag-wrm .ag-table td:nth-child(4) { font-variant-numeric: tabular-nums; }
.ag-root.ag-wrm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-wrm .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-wrm .ag-slots { gap: 0.98rem; }
`,

  mustMention: ['Calday Grange Grammar School', 'West Kirby Grammar School', 'Wirral Grammar School for Girls', 'long written answers', 'negative numbers in context', '31 May 2027', 'Upton Hall', 'Paper Two Mathematics and non-verbal reasoning']
};
