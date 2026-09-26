'use strict';
// 11 plus maths tuition in Hertfordshire (ag- maths door by area, UK cluster Phase 6).
// Hertfordshire has no grammar schools in the usual sense: some schools select a share of places by ability.
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Hertfordshire County Council, aptitude or ability testing: "Some schools also select a percentage of their places
//    based on academic ability"; "The South West Herts Schools Consortium also includes ability or aptitude testing":
//    Croxley Danes, Parmiter's, Queens, Rickmansworth, St Clement Danes, Watford Grammar School for Boys, Watford Grammar
//    School for Girls; Dame Alice Owen's among schools that test.
//  - South West Herts Schools Consortium: "a group of seven partially selective schools in Southwest Hertfordshire",
//    Croxley Danes music only; registration 1 April to 5 June 2026, no late registrations; calendar: academic test Saturday
//    5 September 2026, scores notified Thursday 15 October 2026 (around noon). Academic Ability Test page: "There are two
//    tests: Mathematics: Papers are prepared specifically for the Consortium and are based on the Key Stage 2 curriculum";
//    answer sheets OMR; "Two Correct Answers: Some questions may require marking two answers"; raw scores in verbal reasoning
//    and maths age-standardised. FAQ: "Children applying under the Academic Criterion will take Mathematics and Verbal
//    Reasoning tests, provided by GL Assessment"; familiarisation materials "are not intended to replicate the timings or
//    number of questions". Familiarisation page: "English and Non-Verbal Reasoning are not required for the test." Test
//    details page (not in the site menu): "two tests, Mathematics and Verbal Reasoning that will take approximately 45
//    minutes to one hour each".
//  - Dame Alice Owen's School, entrance exam information: Governors' Entrance Examination in two stages; Part I verbal
//    reasoning, "A 50 minute multiple choice paper which consists of 80 questions, provided by GL Assessment"; "Children ranked
//    within the top 325 will be invited to sit Part II"; Part II English and "Mathematics - A one-hour paper (written
//    internally)"; results combined and ranked. DAO determined arrangements 2027-28: PAN 200, admits children of all
//    abilities, "Up to 65 children selected by academic ability"; registration 10am 29 April to 4pm 10 June 2026; Part I on
//    1 September 2026; Part II on 26 September 2026.
//  - National curriculum in England, mathematics, Year 5: "multiply and divide numbers mentally, drawing upon known facts";
//    multiply and divide by 10, 100 and 1,000; factors and multiples.
// Spine: in Hertfordshire the maths decides a share of places at partially selective schools; the SWHERTS test is maths and
// verbal reasoning only, and some questions need two answers; at Dame Alice Owen's maths comes only in Part II. Lesson
// family: mental multiplication and division from known facts, including choose-two questions.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'HERTFORDSHIRE: SWHERTS AND DAME ALICE OWEN\'S', label: '11 plus maths in Hertfordshire', blurb: 'Hertfordshire\'s schools select only a share of places by ability. The South West Herts test is maths and verbal reasoning, and some questions need two answers.' },
  slug: '11-plus-maths-tuition-hertfordshire',
  code: 'htm',
  accent: '#40324C',
  accentRationale: 'Hertfordshire 11 plus maths: a dusk plum-grey, chosen by colour distance from every accent on the site (9.51:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Hertfordshire',
  title: '11 Plus Maths Tuition Hertfordshire | Watford, Dame Alice Owen\'s',
  description: 'Live online 11 plus maths for Hertfordshire\'s partially selective schools: the South West Herts maths test, Dame Alice Owen\'s Part II, and Year 5 mental maths.',
  ogDescription: 'Hertfordshire\'s schools select a share of places by ability. The South West Herts test is maths and verbal reasoning, with some two-answer questions. How we teach it.',
  twitterDescription: 'Hertfordshire 11 plus maths, taught live online: SWHERTS and Dame Alice Owen\'s, Year 5 maths.',
  pageName: '11 Plus Maths Tuition in Hertfordshire',
  webPageDescription: 'Live online mathematics teaching for children preparing for the South West Herts Schools Consortium academic test and the Dame Alice Owen\'s School entrance examination, based on what the council, consortium and school publish.',
  courseDescription: 'Live online maths classes for Hertfordshire children in Years 4 and 5, teaching Year 5 maths for the consortium\'s maths paper and for a one-hour school-written maths paper.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Hertfordshire',
  navLinks: [
    { href: '#share', label: 'A share of places' },
    { href: '#swherts', label: 'SW Herts test' },
    { href: '#facts', label: 'Known facts' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Hertfordshire &middot; Academic ability tests for partially selective schools &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Hertfordshire',
  lede: 'Hertfordshire does not have grammar schools in the Kent or Buckinghamshire sense. What it has, in the county council\'s words, are schools that "select a percentage of their places based on academic ability". Two routes matter most for maths. The South West Herts Schools Consortium, "a group of seven partially selective schools", runs one academic test for six of them: a maths paper and a verbal reasoning paper, with "English and Non-Verbal Reasoning ... not required". And Dame Alice Owen\'s School, which admits "Up to 65 children selected by academic ability" out of 200, runs its own two-part examination in which maths appears only in Part II. One small detail in the consortium\'s instructions shapes how we teach: "Some questions may require marking two answers." This page sets out what the council, the consortium and the school publish, then teaches the Year 5 mental maths that suits both routes.',
  secondaryCta: { href: '#swherts', label: 'See the consortium test' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Hertfordshire ability tests.',
  heroNote: 'Maths only &middot; We do not teach verbal reasoning or English &middot; No connection with any Hertfordshire school',
  spec: [
    ['Schools', 'Partially selective, a share of places by ability'],
    ['SW Herts academic test', 'Maths and verbal reasoning, GL'],
    ['SW Herts papers', 'About 45 minutes to an hour each'],
    ['Not tested (SW Herts)', 'English, non-verbal reasoning'],
    ['Question detail', 'Some need two answers marked'],
    ['Dame Alice Owen\'s maths', 'Part II, one hour, written by the school'],
    ['Content', 'Key Stage 2'],
    ['We teach', 'Year 5 maths, both routes']
  ],
  capsuleQ: 'In short',
  capsule: 'Hertfordshire County Council says some schools select a percentage of their places by academic ability. The South West Herts Schools Consortium runs an academic test for Parmiter\'s, Queens\', Rickmansworth, St Clement Danes, Watford Grammar School for Boys and Watford Grammar School for Girls: GL papers in mathematics and verbal reasoning of roughly 45 minutes to an hour each, answered on an OMR sheet, with some questions needing two answers. For 2027 entry, registration ran from 1 April to 5 June 2026, the test was on Saturday 5 September 2026, and scores arrive on 15 October. Dame Alice Owen\'s School runs its own examination: a verbal reasoning Part I on 1 September 2026, then, for the top 325, English and a one-hour maths paper written by the school on 26 September 2026. We teach the maths for both, live online. Try one lesson without charge; if you continue, a small-group place is USD 100 monthly and one to one teaching USD 150 monthly.',

  picks: {
    eyebrow: 'Hertfordshire starting points',
    h2: 'Three courses for Hertfordshire\'s tests',
    lede: 'One route has a GL multiple-choice maths paper; the other a paper the school writes itself. Choose by how flexible your child\'s maths is.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'HERTS / 1', title: 'Herts 11 plus maths', note: 'Year 5 maths for the consortium paper and Dame Alice Owen\'s Part II, both formats.' },
      { course: 'mental-maths-mastery-kids', code: 'HERTS / 2', title: 'Known facts, used cleverly', note: 'Mental multiplication and division that makes two-answer questions quick.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'HERTS / 3', title: 'Beyond routine problems', note: 'For confident children facing a school-written paper with no published samples.' }
    ]
  },

  sections: [
    {
      id: 'share', tint: 'tint', eyebrow: 'A share of places',
      h2: 'Partially selective, not grammar schools',
      lede: 'The distinction matters, because it changes what the test is for. Read on 26 September 2026 from Hertfordshire County Council, the South West Herts Schools Consortium and Dame Alice Owen\'s School.',
      body: [
        { kind: 'two',
          leftH3: 'What the council says',
          left: [
            'On its aptitude and ability testing page, Hertfordshire County Council explains that "Some schools offer a small percentage of their places to children with a particular aptitude. Some schools also select a percentage of their places based on academic ability." It lists the South West Herts Schools Consortium among those that test.',
            'So a Hertfordshire ability test fills some of a school\'s places, not all of them. The rest are allocated by each school\'s other criteria. That is admissions, which we leave to the schools, but it explains why the tests are described as ability tests rather than an 11 plus for a grammar school.'
          ],
          rightH3: 'Two main routes',
          right: [
            'The consortium describes itself as "a group of seven partially selective schools in Southwest Hertfordshire": Croxley Danes (music only), Parmiter\'s, Queens\', Rickmansworth, St Clement Danes, and the two Watford Grammar Schools. One academic test serves the six with an academic route.',
            'Dame Alice Owen\'s School in Potters Bar sets its own Governors\' Entrance Examination. Its determined arrangements for 2027-28 give a published admission number of 200 and "Up to 65 children selected by academic ability".'
          ] },
        { kind: 'source', html: 'Sources: Hertfordshire County Council, aptitude or ability testing; <a class="ag-inline-link" href="https://www.swhertsschools.org.uk/academic-ability-test/" rel="noopener" target="_blank">South West Herts Schools Consortium</a>, home page, academic ability test, FAQ, familiarisation and calendar pages; <a class="ag-inline-link" href="https://damealiceowens.herts.sch.uk/sixth-form/admissions/secondary-transfer/entrance-exam-information/" rel="noopener" target="_blank">Dame Alice Owen\'s School, entrance exam information</a> and determined admission arrangements 2027-28. Modern Age Coders has no connection with the council, the consortium, GL Assessment or any school.' }
      ]
    },
    {
      id: 'swherts', tint: 'plain', eyebrow: 'The consortium test',
      h2: 'Maths and verbal reasoning, and nothing else',
      lede: 'The South West Herts academic test is narrower than most 11 plus tests. That makes the maths paper a large part of it.',
      body: [
        { kind: 'table', caption: 'The South West Herts academic test for 2027 entry, and Dame Alice Owen\'s examination', head: ['', 'South West Herts Consortium', 'Dame Alice Owen\'s School'], rows: [
          ['Registration', '1 April to 5 June 2026; no late entries', '29 April to 10 June 2026'],
          ['Papers', 'Maths; verbal reasoning (GL)', 'Part I verbal reasoning (GL); Part II English and maths'],
          ['Maths paper', 'Prepared for the consortium, Key Stage 2', 'One hour, written by the school'],
          ['Test dates', 'Saturday 5 September 2026', 'Part I 1 September; Part II 26 September 2026'],
          ['Who sits the maths', 'Every academic candidate', 'The top 325 from Part I'],
          ['Scores', 'Notified 15 October 2026', 'Combined and ranked']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The consortium says: "Children applying under the Academic Criterion will take Mathematics and Verbal Reasoning tests, provided by GL Assessment." Maths papers "are prepared specifically for the Consortium and are based on the Key Stage 2 curriculum". Its test details page says each test takes "approximately 45 minutes to one hour", with a short break between.',
            'The familiarisation page is explicit: "English and Non-Verbal Reasoning are not required for the test." It also warns that the practice materials "are not intended to replicate the timings or number of questions on the papers candidates will take on test day".'
          ],
          right: [
            'Answers go on an OMR sheet, and the instructions include a line that deserves attention: "Two Correct Answers: Some questions may require marking two answers. Be sure to read the instructions carefully." A child who marks one answer on a two-answer question, or two on a one-answer question, loses the mark whatever their maths.',
            'At Dame Alice Owen\'s, maths is only in Part II, a one-hour paper written by the school for the 325 highest-ranked from the verbal reasoning in Part I. No samples of that paper are published, so depth across the Key Stage 2 curriculum is the only preparation.'
          ] }
      ]
    },
    {
      id: 'facts', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Mental maths from known facts, including choose-two questions',
      lede: 'The Year 5 curriculum asks children to "multiply and divide numbers mentally, drawing upon known facts". Known facts make ordinary questions quick, and they make two-answer questions manageable.',
      body: [
        { kind: 'table', caption: 'Mental multiplication and division from known facts (our own questions)', head: ['Question', 'Known fact used', 'Answer'], rows: [
          ['25 × 16', '25 × 4 = 100, and 16 = 4 × 4', '400'],
          ['36 × 5', '× 5 is half of × 10', '180'],
          ['4,800 ÷ 40', '48 ÷ 4 = 12, then adjust for the zeros', '120'],
          ['99 × 7', '100 × 7 minus 7', '693'],
          ['Choose two: which are multiples of 12? 84, 94, 108, 112', '12 × 7 = 84; 12 × 9 = 108', '84 and 108']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each of the first four rows can be done with long multiplication or division, slowly. Each can also be done in a few seconds from a fact the child already knows. 25 × 16 becomes 25 × 4 × 4, which is 100 × 4. Dividing 4,800 by 40 becomes 48 divided by 4, with the zeros handled by place value.',
            'That speed matters on a paper whose length and question count are not published, and it matters more on the two-answer questions, where every option has to be checked rather than just the first plausible one.'
          ],
          right: [
            'The last row shows the two-answer format. Looking at four numbers and deciding which two are multiples of 12 means testing all four: 84 and 108 are (12 × 7 and 12 × 9), while 94 is not even divisible by 4 and 112 is 12 × 9 plus 4. A child with the twelve times table secure does it in seconds; a child without it guesses.',
            'We practise two-answer questions deliberately, with the instruction in bold at first and then in ordinary type, so reading "choose two" becomes automatic. Marking exactly two, no more and no fewer, is part of the skill.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 multiplication and division (statutory requirements); South West Herts Schools Consortium, academic ability test instructions. The questions are our own.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Two routes, one curriculum',
      lede: 'A GL paper with published samples and a school paper with none need the same thing underneath: Year 5 maths known deeply.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Depth in Key Stage 2', p: 'Every Year 5 topic taught until it is quick and flexible, since neither route publishes question counts or weightings.' },
          { h3: 'Read the instruction', p: 'Two-answer questions, single-answer questions and written answers practised side by side, so the instruction always gets read.' },
          { h3: 'Unseen problems', p: 'For the school-written Dame Alice Owen\'s paper, problems in unfamiliar forms, so nothing on the day looks alien.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The consortium provides a free download of GL familiarisation booklets for maths and verbal reasoning. Use them to see the format; the consortium itself warns they do not match the real timing or question count. We do not reproduce them.',
            'Verbal reasoning is the other consortium paper, and Dame Alice Owen\'s Part I is verbal reasoning too. We do not teach it. Families should plan for it separately.'
          ],
          right: [
            'Dame Alice Owen\'s School describes its tests as designed to identify the most able candidates and warns that children of average or below average ability are likely to find them very challenging. We will be honest with you about where your child stands.',
            'We give no advice on which schools to apply to, the share of places each fills by ability, or priority areas. The council and schools publish those.'
          ] }
      ]
    },
    {
      id: 'county', tint: 'plain', eyebrow: 'Watford, Rickmansworth and Potters Bar',
      h2: 'The schools this page covers',
      lede: 'The council and the consortium name the schools. We list them only to make the scope of this page clear.',
      body: [
        { kind: 'table', caption: 'Schools using the tests described on this page', head: ['School', 'Ability route'], rows: [
          ['Parmiter\'s School', 'South West Herts academic test'],
          ['Queens\' School', 'South West Herts academic test'],
          ['Rickmansworth School', 'South West Herts academic test'],
          ['St Clement Danes School', 'South West Herts academic test'],
          ['Watford Grammar School for Boys', 'South West Herts academic test'],
          ['Watford Grammar School for Girls', 'South West Herts academic test'],
          ['Dame Alice Owen\'s School', 'Its own two-part examination']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Croxley Danes School belongs to the consortium but tests for music only, so it does not use the academic test. The council lists other Hertfordshire schools that test for aptitude or ability, and families should check each school\'s own arrangements.',
            'Whether home is Bushey, Abbots Langley, Chorleywood or Hatfield, the lesson arrives the same way: on a screen, live, in a class of up to ten children working at the same stage.'
          ],
          right: [
            'For families just over the London border, see our pages for <a class="ag-inline-link" href="/11-plus-maths-tuition-barnet">Barnet</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-enfield">Enfield</a>.',
            'None of these schools, nor the consortium, GL Assessment or the county council, is connected with Modern Age Coders.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages for early-September tests',
    lede: 'Both routes test in the first weeks of Year 6, and registration closes in June of Year 5. Here is the year before.',
    table: { caption: 'Known facts first, then unusual formats', head: ['When', 'Stage', 'You will see'], rows: [
      ['Autumn, Year 5', '1. Known facts', 'Tables to 12 × 12 and their divisions instant'],
      ['Winter, Year 5', '2. Mental strategies', 'Multiplies and divides mentally from facts, confidently'],
      ['Spring, Year 5 (register by early June)', '3. The rest of Year 5', 'Fractions, measures, shape and data as secure'],
      ['Summer holiday', '4. Formats', 'Two-answer questions, timed GL-style papers, and unseen written problems']
    ] },
    left: { h3: 'Starting late', ps: [
      'The consortium test falls in the first week of September, so the summer is the last chance. Facts first, formats second.',
      'By the end of the trial lesson you will know, frankly, how much of that summer is needed.'
    ] },
    right: { h3: 'After the tests', ps: [
      'Mental agility carries straight into secondary algebra. Some children continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Others try the national challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Hertfordshire families',
    lede: 'Arranged by stage, each linked to a syllabus.',
    bands: [
      { num: 'I', h3: 'For the ability tests', sub: 'Years 3 to 5', courses: [
        { code: 'HTM / 1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Hertfordshire', blurb: 'Year 5 maths for both routes.' },
        { code: 'HTM / 2', slug: 'mental-maths-mastery-kids', title: 'Mental maths from known facts', blurb: 'Speed for two-answer questions.' },
        { code: 'HTM / 3', slug: 'olympiad-competition-mathematics-mastery', title: 'Challenge problems', blurb: 'For a school-written paper.' },
        { code: 'HTM / 4', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary foundations', blurb: 'Years 1 to 5, secured.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'HTM / 5', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3 maths course', blurb: 'The first secondary years.' },
        { code: 'HTM / 6', slug: 'gcse-mathematics-mastery', title: 'GCSE maths across boards', blurb: 'Foundation and higher.' },
        { code: 'HTM / 7', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus for younger siblings', blurb: 'Number sense by hand.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Facts into programs', courses: [
        { code: 'HTM / 8', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Multiples and factors, found by code.' },
        { code: 'HTM / 9', slug: 'scratch-programming-complete-course', title: 'Scratch, first programs', blurb: 'Logic for young coders.' },
        { code: 'HTM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI, age 9 upwards', blurb: 'The first typed language.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'HTM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic mental methods', blurb: 'More shortcuts, built on facts.' },
        { code: 'HTM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI for 13 to 18 year olds', blurb: 'Maths in modern tools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'After school, or at the weekend',
    lede: 'We teach live from India and book Hertfordshire primary pupils into early-evening or weekend-morning slots on the UK clock; clock changes are handled by our teachers.',
    slots: [
      { time: 'After school', l: 'Early in the evening.' },
      { time: 'Weekend morning', l: 'When children are fresh.' },
      { time: 'Summer holidays', l: 'Useful before an early-September test.' }
    ],
    cells: [
      { h3: 'One teacher all year', p: 'Who knows your child\'s habits.' },
      { h3: 'Honest notes', p: 'A few frank lines after lessons.' },
      { h3: 'Classes of five to ten', p: 'Grouped by level.' },
      { h3: 'Our own questions', p: 'No GL or school material copied.' },
      { h3: 'One to one', p: 'For specific gaps.' },
      { h3: 'Maths only', p: 'No verbal reasoning or English coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Known facts, later put to work',
  projectsLede: 'Four published projects by our students, all of whom once learned their tables. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Straight from parents\' Google reviews.',

  fees: {
    h2: 'Fees',
    lede: 'Families outside India pay one monthly US dollar price. No joining fee; stop any month.',
    free: ['A taught lesson', 'A frank view', 'No card needed'],
    group: ['Five to ten children, one level', 'A regular teacher', 'Work reviewed together', 'Certificate at the end'],
    one: ['A teacher for one child', 'Aimed at gaps', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Hertfordshire questions',
    h2: 'What Hertfordshire families ask us',
    items: [
      { q: 'Does Hertfordshire have grammar schools?', a: 'Not in the usual sense. The county council says some schools select a percentage of their places based on academic ability. The South West Herts Schools Consortium describes its members as partially selective.' },
      { q: 'What is in the South West Herts academic test?', a: 'The consortium says academic candidates take mathematics and verbal reasoning tests from GL Assessment, of roughly 45 minutes to an hour each. English and non-verbal reasoning are not required.' },
      { q: 'What does "two correct answers" mean?', a: 'The consortium\'s instructions say some questions may require marking two answers, so children must read each question\'s instructions carefully.' },
      { q: 'When is the South West Herts test?', a: 'For 2027 entry it was on Saturday 5 September 2026, with registration from 1 April to 5 June 2026 and scores on 15 October 2026. Dates for 2028 entry are published by the consortium.' },
      { q: 'How is Dame Alice Owen\'s different?', a: 'It runs its own examination: Part I verbal reasoning for all candidates, then Part II English and a one-hour maths paper written by the school for the top 325. It admits up to 65 children by academic ability.' },
      { q: 'Which schools use the consortium test?', a: 'Parmiter\'s, Queens\', Rickmansworth, St Clement Danes and the two Watford Grammar Schools. Croxley Danes is in the consortium but tests for music only.' },
      { q: 'Are the familiarisation papers the real format?', a: 'The consortium says its familiarisation materials are generic and not intended to replicate the timings or number of questions on the day.' },
      { q: 'Do you teach verbal reasoning?', a: 'No. Verbal reasoning, English and every question about places sit outside our lessons, which are about mathematics.' },
      { q: 'Do you use GL or school papers?', a: 'No. We write our own questions.' },
      { q: 'What do lessons cost?', a: 'Lesson one is on us. Continuing pupils pay USD 100 per month for a class place or USD 150 per month for individual teaching, month to month.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Hertfordshire and north London',
    lede: 'Two boroughs over the border, a fully selective county next door, and the wider picture.',
    items: [
      { href: '/11-plus-maths-tuition-barnet', label: '11 plus maths in Barnet', p: 'Three schools just over the border.' },
      { href: '/11-plus-maths-tuition-enfield', label: '11 plus maths in Enfield', p: 'Latymer\'s test, changing for 2028 entry.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'A fully selective county to the west.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges through the year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we cover.' }
    ]
  },

  start: {
    h2: 'Book a free Hertfordshire maths lesson',
    lede: 'Tell us your child\'s year and which route you are considering. We teach a real lesson and then give you an honest account of it.',
    readFirst: 'If you would like to look around before talking to us, the <a class="ag-inline-link" href="/courses">courses</a> each carry a syllabus, <a class="ag-inline-link" href="/how-we-teach">our method</a> is written up, and a <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> links primary maths to programming.',
    note: 'WhatsApp reaches our admissions desk fastest. That desk, like our teachers and phone number, is in India; there is no Watford or Hertfordshire office.',
    formNote: 'No card details. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Challenge maths' }
      ] },
      { h4: 'Nearby and national', links: [
        { href: '/11-plus-maths-tuition-barnet', label: '11 plus maths in Barnet' },
        { href: '/11-plus-maths-tuition-enfield', label: '11 plus maths in Enfield' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the tests; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-htm .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-htm .ag-capsule { border-left-width: 6px; border-radius: 0 6px 6px 0; }
.ag-root.ag-htm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-htm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.017em; }
.ag-root.ag-htm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-htm .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-htm .ag-three h3 { letter-spacing: -0.011em; }
.ag-root.ag-htm .ag-slots { gap: 1.01rem; }
`,

  mustMention: ['Dame Alice Owen', 'St Clement Danes', 'Watford Grammar School for Girls', 'Parmiter', 'Rickmansworth School', 'top 325', 'Some questions may require marking two answers', 'Up to 65 children selected by academic ability']
};
