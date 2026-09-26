'use strict';
// 11 plus maths tuition in Southend-on-Sea (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Southend-on-Sea City Council, secondary schools admissions booklet 2026-27 (last cycle, used for the selective
//    wording only): "Admission to some schools in Southend is determined by a selection test (the 11+)"; "The four
//    grammar schools, Southend High School for Boys, Southend High School for Girls, Westcliff High School for Boys and
//    Westcliff High School for Girls only admit pupils through the selection test"; Shoeburyness High School, St.
//    Bernard's High School and St. Thomas More High School "admit a proportion of their intake through the selection
//    test".
//  - CSSE (Consortium of Selective Schools in Essex) home page: "The candidates sit two tests. One in English and one in
//    Mathematics. The English paper will last sixty minutes with ten minutes additional reading time. The Mathematics
//    paper will last sixty minutes."; 2028 entry: "Registration will open next year. Important dates will be published
//    by Easter 2027."; results emailed after close of business Monday 12 October; the CSSE office "deals only with
//    examination administration"; English has had no Applied Reasoning questions since September 2024.
//  - CSSE 11+ Information Guide, 2027 entry: formed in 1993; "The same selective test is utilised by ten CSSE selective
//    schools"; papers standardised and weighted, "each being worth 50% of the marks"; registration opened 12 May 2026,
//    closed 19 June 2026; tests Saturday 19 September 2026; Tuesday 29 September 2026 for "religious, illness or
//    exceptional circumstances only"; "not made to any child who has scored under a total standardised score of 303";
//    tests "based on Key Stage 2 of the National Curriculum"; "electronic calculators of any description" not permitted;
//    free familiarisation papers downloadable from the CSSE website.
//  - National curriculum in England, mathematics, Year 5 number and place value: "read, write, order and compare numbers
//    to at least 1,000,000"; "round any number up to 1,000,000 to the nearest 10, 100, 1,000, 10,000 and 100,000";
//    "read Roman numerals to 1,000 (M) and recognise years written in Roman numerals".
// Spine: maths is a whole 60-minute paper and half the score, so breadth across every Year 5 strand matters, including
// the small ones. Lesson family: Roman numerals and place value to a million (CSSE's founding year 1993 as MCMXCIII).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'SOUTHEND, CSSE', label: '11 plus maths in Southend', blurb: 'In the CSSE test maths is a whole sixty-minute paper and half of the total, so no Year 5 topic can be skipped.' },
  slug: '11-plus-maths-tuition-southend',
  code: 'sem',
  accent: '#256B1B',
  accentRationale: 'Southend 11 plus maths: an estuary green, chosen by colour distance from every accent on the site (5.29:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Southend-on-Sea',
  title: '11 Plus Maths Tuition Southend | CSSE Maths Paper, Online',
  description: 'Live online 11 plus maths for Southend\'s CSSE test: a sixty-minute maths paper worth half the total, what the consortium publishes, and every Year 5 strand taught.',
  ogDescription: 'Southend\'s grammar schools use the CSSE test, where maths is its own sixty-minute paper and half the marks. Why that rewards breadth, and how we teach it.',
  twitterDescription: 'Southend CSSE 11 plus maths, taught live online: a full maths paper, half the total, every Year 5 topic.',
  pageName: '11 Plus Maths Tuition in Southend-on-Sea',
  webPageDescription: 'Live online mathematics teaching for children preparing for the CSSE 11+ used by Southend\'s grammar and partially selective schools, based on what the consortium and Southend-on-Sea City Council publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the CSSE mathematics paper, covering every Key Stage 2 strand up to Year 5, without a calculator.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Southend',
  navLinks: [
    { href: '#csse', label: 'The CSSE test' },
    { href: '#half', label: 'Half the marks' },
    { href: '#numerals', label: 'Roman numerals' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Southend-on-Sea &middot; CSSE 11+ mathematics paper &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Southend',
  lede: 'In Southend, the 11 plus is the test set by the Consortium of Selective Schools in Essex, the CSSE, and its structure is refreshingly plain. There are two papers. One is English. The other is mathematics, on its own, for sixty minutes. The consortium says the two are standardised and weighted "each being worth 50% of the marks". There is no reasoning paper for maths to hide inside and nothing else to share the clock with: an hour of Key Stage 2 maths, without a calculator, counting for half. A paper that long and that heavy has room for every strand of the primary curriculum, including the small statements that busy classrooms rush past. One of those, reading Roman numerals, sits in Year 5 alongside place value to a million. This page sets out what the CSSE and the council publish, then teaches that corner of Year 5 properly.',
  secondaryCta: { href: '#half', label: 'See why half matters' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Southend CSSE 11 plus.',
  heroNote: 'Maths only &middot; We do not teach the English paper &middot; No connection with the CSSE or any Southend school',
  spec: [
    ['Test', 'CSSE 11+, used by ten schools'],
    ['Papers', 'English and Mathematics'],
    ['Maths paper', 'Sixty minutes'],
    ['Maths weighting', 'Half of the total'],
    ['Content', 'Key Stage 2 of the National Curriculum'],
    ['Calculators', 'Not permitted'],
    ['Minimum total', 'A standardised 303'],
    ['We teach', 'Every Year 5 strand, no gaps']
  ],
  capsuleQ: 'In short',
  capsule: 'Southend-on-Sea City Council says four grammar schools, Southend High School for Boys, Southend High School for Girls, Westcliff High School for Boys and Westcliff High School for Girls, admit only through the 11+, while Shoeburyness High School, St Bernard\'s High School and St Thomas More High School take part of their intake that way. All use the CSSE test: an English paper of sixty minutes plus ten minutes\' reading, and a Mathematics paper of sixty minutes, each worth half the marks and based on Key Stage 2, with no calculators. The CSSE makes no offer to a child with a total standardised score under 303. For September 2027 entry the test was on Saturday 19 September 2026; the CSSE will publish 2028-entry dates by Easter 2027. We teach the maths, live online. Lesson one is on us; after it, lessons run at USD 100 a month in a group or USD 150 a month individually.',

  picks: {
    eyebrow: 'Starting in Southend',
    h2: 'Three courses for a full maths paper',
    lede: 'An hour of maths rewards breadth. Pick by which strands your child has not yet met properly.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'SOUTHEND / A', title: 'Whole-curriculum 11 plus maths', note: 'Every Key Stage 2 strand to Year 5, from place value and Roman numerals to measures and data.' },
      { course: 'mental-maths-mastery-kids', code: 'SOUTHEND / B', title: 'Arithmetic without a calculator', note: 'An hour without a calculator is a stamina test for mental and written methods alike.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SOUTHEND / C', title: 'Primary foundations', note: 'For children in Year 4 who need earlier strands secured before Year 5 work.' }
    ]
  },

  sections: [
    {
      id: 'csse', tint: 'tint', eyebrow: 'The CSSE test',
      h2: 'What the consortium and the council publish',
      lede: 'The CSSE runs the examination for ten schools in Southend and Essex; Southend-on-Sea City Council explains which Southend schools use it. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The CSSE 11+ for September 2027 entry, from the CSSE Information Guide and website', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration opened', 'Tuesday 12 May 2026', 'Online with the CSSE, not with each school.'],
          ['Registration closed', 'Friday 19 June 2026', 'The CSSE\'s absolute deadline.'],
          ['Tests', 'Saturday 19 September 2026', 'English and Mathematics, at the nominated test centre.'],
          ['Reserve day', 'Tuesday 29 September 2026', 'For religious, illness or exceptional circumstances only.'],
          ['Results', 'Monday 12 October 2026', 'Emailed after the close of business.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSSE describes its test in two sentences on its home page: "The candidates sit two tests. One in English and one in Mathematics." The English paper lasts sixty minutes with ten minutes of additional reading time; "The Mathematics paper will last sixty minutes." Its guide adds that the papers are standardised and weighted, "each being worth 50% of the marks", and that they are "based on Key Stage 2 of the National Curriculum".',
            'The consortium was formed in 1993 so that children applying to more than one selective school sit one test rather than several. Calculators "of any description" are not permitted. Free English and maths familiarisation papers are downloadable from the CSSE website.'
          ],
          right: [
            'Southend-on-Sea City Council\'s booklet explains the local picture: the four grammar schools "only admit pupils through the selection test", while three other schools admit a proportion of their intake through it, in addition to their main criteria.',
            'The CSSE says offers are not made to any child with a total standardised score under 303, and that its office "deals only with examination administration". For 2028 entry, it says registration opens next year and dates will be published by Easter 2027. Admissions after the test are for the schools and the council.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://csse.org.uk/" rel="noopener" target="_blank">CSSE, home page and CSSE 11+ Examination page</a>, with the <em>11+ Information Guide, Selective Test 2027 Entry</em>; Southend-on-Sea City Council, secondary schools admissions booklet 2026-27 (the most recent we could read). Modern Age Coders has no connection with the CSSE, the council or any Southend school.' }
      ]
    },
    {
      id: 'half', tint: 'plain', eyebrow: 'Half the marks',
      h2: 'A maths paper with room for everything',
      lede: 'In many 11 plus tests, maths is a section squeezed between others. In the CSSE test it is a paper of its own, and that changes what preparation should look like.',
      body: [
        { kind: 'two',
          leftH3: 'Why length matters',
          left: [
            'A short maths section has to be selective about topics. A sixty-minute paper does not. It can visit place value, all four operations, fractions, decimals and percentages, measures, geometry and statistics, and still have time for the smaller statements in the curriculum that rarely get a lesson of their own.',
            'So the risk in Southend is not unfamiliar content. It is a gap: one strand a child has never really learned because it only got a week in class. On an hour-long paper, gaps are found.'
          ],
          rightH3: 'Why weight matters',
          right: [
            'With each paper worth half the marks, a strong English score cannot carry a weak maths one as easily as it might where maths is a quarter. We say that not to predict anything, since the CSSE sets its cut-offs from each year\'s results, but to explain why maths deserves an equal share of preparation time.',
            'An hour without a calculator is also a matter of stamina. Children who are accurate for twenty minutes and careless for the last forty lose marks that have nothing to do with knowledge.'
          ] },
        { kind: 'p', html: 'Our answer is a checklist of every Year 5 statement in the national curriculum, ticked off only when a child can answer a fresh question on it correctly without help. The next section shows one of the statements families are most surprised to find on it.' }
      ]
    },
    {
      id: 'numerals', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Roman numerals and numbers to a million',
      lede: 'The Year 5 curriculum asks pupils to "read Roman numerals to 1,000 (M) and recognise years written in Roman numerals", right next to reading and comparing numbers to a million. Both are about place value.',
      body: [
        { kind: 'table', caption: 'Year 5 place value and Roman numerals, with questions of our own', head: ['Skill', 'Our question', 'Answer and reasoning'], rows: [
          ['Read a year', 'The CSSE was formed in 1993. Write 1993 in Roman numerals.', 'MCMXCIII: M (1,000) + CM (900) + XC (90) + III (3)'],
          ['Recognise a year', 'What year is MMXXVII?', '2027: MM (2,000) + XX (20) + VII (7)'],
          ['Compare', 'Which is larger: CDXLIV or CCCXCIX?', 'CDXLIV, which is 444; CCCXCIX is 399'],
          ['Order', 'Put 405,090, 450,009 and 409,500 in order, smallest first.', '405,090, then 409,500, then 450,009'],
          ['Round', 'Round 748,500 to the nearest 100,000.', '700,000: the ten-thousands digit is 4']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Roman numerals look like a history lesson, but the reason they are in Year 5 maths is place value. Our system uses position: the 9 in 1993 is worth 900 because of where it sits. Roman numerals use subtraction instead: C before M means a hundred less than a thousand. Working out why CM is 900 and MC is 1,100 makes children think hard about what each symbol is worth.',
            'The common errors are predictable. Children read IX as 11, or write 1993 as MDCCCCLXXXXIII by adding everything. On a multiple-choice or written paper, both lose the mark.'
          ],
          right: [
            'Numbers to a million go wrong in a different way. 405,090 and 450,009 have the same digits in a different order, and children who compare from the right, or who miss a zero, rank them wrongly. We teach comparing from the left, place by place, which works for any size of number.',
            'Rounding uses the same habit: look one place to the right of the place you are rounding to. For 748,500 to the nearest 100,000, the digit that decides is the 4 in the ten-thousands place, so it rounds down.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 number and place value (statutory requirements); CSSE Information Guide for the 1993 founding date. The questions are Modern Age Coders\' own.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'How we prepare',
      h2: 'An hour of maths, practised properly',
      lede: 'Three things matter for a sixty-minute, calculator-free paper worth half the score.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Coverage', p: 'Every Year 5 statement, taught and checked. Small ones like Roman numerals, thousandths and converting units of time get the same attention as long multiplication.' },
          { h3: 'Stamina', p: 'Timed practice grows from twenty minutes to a full hour over the summer, so accuracy in the last quarter matches accuracy in the first.' },
          { h3: 'Method', p: 'Without a calculator, written methods have to be quick and reliable, and mental arithmetic has to cover everything else.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSSE publishes free familiarisation papers and sells practice packs. Use the free papers to see the format. We do not reproduce CSSE material; our questions are our own, written to Key Stage 2.',
            'The CSSE guide also notes that practice tests sold by booksellers are "based at a similar level but are not of the same format as the 11+ papers". We treat all practice papers as practice, not as a forecast.'
          ],
          right: [
            'The English paper is the other half of the total. We do not teach English for the test and say so before any family books with us.',
            'We give no advice on the choice between the four grammar schools and the three partially selective ones, priority areas or places. The council and the schools publish those rules.'
          ] }
      ]
    },
    {
      id: 'city', tint: 'plain', eyebrow: 'Southend\'s schools',
      h2: 'Seven schools use the test; lessons come to you',
      lede: 'The council names the Southend schools that admit through the CSSE test. We list them only to show which test this page covers.',
      body: [
        { kind: 'table', caption: 'Southend schools that use the CSSE test, as Southend-on-Sea City Council describes them', head: ['School', 'Places through the test'], rows: [
          ['Southend High School for Boys', 'All'],
          ['Southend High School for Girls', 'All'],
          ['Westcliff High School for Boys', 'All'],
          ['Westcliff High School for Girls', 'All'],
          ['Shoeburyness High School', 'A proportion'],
          ['St Bernard\'s High School', 'A proportion'],
          ['St Thomas More High School', 'A proportion']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The other three CSSE schools are in Colchester and Chelmsford; see our <a class="ag-inline-link" href="/11-plus-maths-tuition-essex">Essex 11 plus page</a> for those. The test is the same.',
            'For coding and computing in the city, see our <a class="ag-inline-link" href="/best-coding-class-in-southend-on-sea">Southend coding page</a>.'
          ],
          right: [
            'Lessons are live on video. A child in Leigh-on-Sea, Westcliff or Shoeburyness is taught with children at the same level of Year 5 maths from across the country, in groups of five to ten.',
            'We have no connection with the CSSE, Southend-on-Sea City Council or any of these schools.'
          ] },
        { kind: 'source', html: 'Source: Southend-on-Sea City Council, secondary schools admissions booklet 2026-27.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages to a full hour of maths',
    lede: 'For a child in Year 5 now, the next CSSE test should fall in September 2027; the consortium will publish dates by Easter 2027.',
    table: { caption: 'Coverage first, then stamina', head: ['When', 'Stage', 'Evidence of progress'], rows: [
      ['Autumn, Year 5', '1. Number and place value', 'Numbers to a million, rounding and Roman numerals read without errors'],
      ['Winter, Year 5', '2. Operations and fractions', 'Written and mental methods fast and accurate, no calculator'],
      ['Spring and summer, Year 5', '3. Measures, shape, data', 'Every remaining Year 5 statement ticked off with a fresh question'],
      ['Summer holiday', '4. The full hour', 'Sixty minutes of mixed maths, as accurate at the end as at the start']
    ] },
    left: { h3: 'Short on time', ps: [
      'Coverage matters most on a long paper. If time is short, we find the gaps first and fill those before anything else.',
      'At the free lesson we will say honestly what can be done.'
    ] },
    right: { h3: 'After the results', ps: [
      'A child who can work for an hour without a calculator is ready for secondary maths. Some continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Others enjoy the problem-solving challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Course list',
    h2: 'Maths and coding for Southend families',
    lede: 'By stage, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'For the CSSE maths paper', sub: 'Years 3 to 5', courses: [
        { code: 'SEM / 1a', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation (CSSE)', blurb: 'All of Key Stage 2 to Year 5, for a full paper.' },
        { code: 'SEM / 1b', slug: 'mental-maths-mastery-kids', title: 'Mental maths for primary pupils', blurb: 'Fast, calculator-free arithmetic.' },
        { code: 'SEM / 1c', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'The earlier strands, secured.' },
        { code: 'SEM / 1d', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Place value made visible.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 and beyond', courses: [
        { code: 'SEM / 2a', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Key Stage 3 maths mastery', blurb: 'The step up from primary maths.' },
        { code: 'SEM / 2b', slug: 'gcse-mathematics-mastery', title: 'GCSE maths (all boards)', blurb: 'Foundation and higher tiers.' },
        { code: 'SEM / 2c', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths and olympiads', blurb: 'Problems beyond the syllabus.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Number in code', courses: [
        { code: 'SEM / 3a', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Write a Roman numeral converter.' },
        { code: 'SEM / 3b', slug: 'scratch-programming-complete-course', title: 'Scratch for beginners', blurb: 'Logic in blocks.' },
        { code: 'SEM / 3c', slug: 'python-ai-kids-masterclass', title: 'Python and AI, junior level', blurb: 'The first typed language.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'SEM / 4a', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Speed calculation (Vedic methods)', blurb: 'Faster arithmetic, on firm ground.' },
        { code: 'SEM / 4b', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teenagers', blurb: 'Maths put to work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Evenings and weekends, on UK time',
    lede: 'Our lessons are taught live from India. For primary children we use early evening and weekend morning slots by the UK clock, and adjust our own hours for British Summer Time.',
    slots: [
      { time: 'After school', l: 'Early in the evening, before fatigue.' },
      { time: 'Saturday and Sunday mornings', l: 'For fuller weekday diaries.' },
      { time: 'School holidays', l: 'Extra lessons to build stamina.' }
    ],
    cells: [
      { h3: 'Same teacher weekly', p: 'Continuity that catches recurring slips.' },
      { h3: 'Direct feedback', p: 'Short, honest notes to parents.' },
      { h3: 'Groups of five to ten', p: 'Children matched by level.' },
      { h3: 'No copied papers', p: 'CSSE material is never reproduced.' },
      { h3: 'One to one on offer', p: 'For filling particular gaps quickly.' },
      { h3: 'Maths, not English', p: 'No English coaching and no admissions advice.' }
    ]
  },

  projectsH2: 'Where our students go with maths',
  projectsLede: 'Four projects by students at our school, built on primary number work like this. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews from parents on Google, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Families outside India pay one monthly US dollar price. Nothing to join, and you can stop at any point.',
    free: ['A taught lesson, not a pitch', 'Our honest findings', 'No card needed'],
    group: ['Five to ten pupils, one level', 'A familiar teacher', 'Work marked in the lesson', 'A certificate on completion'],
    one: ['Individual teaching', 'Focused on the gaps', 'Useful for building stamina']
  },

  faq: {
    eyebrow: 'Southend CSSE questions',
    h2: 'What Southend families ask us',
    items: [
      { q: 'What is in the CSSE maths paper?', a: 'The CSSE says candidates sit two tests, one in English and one in Mathematics, and that the Mathematics paper lasts sixty minutes. Its guide says the tests are based on Key Stage 2 of the National Curriculum.' },
      { q: 'How much does maths count in the CSSE test?', a: 'The CSSE guide says the two papers are standardised and weighted, each being worth 50% of the marks.' },
      { q: 'Can my child use a calculator?', a: 'No. The CSSE guide says calculators of any description are not permitted.' },
      { q: 'Which Southend schools use the CSSE test?', a: 'The council says Southend High School for Boys, Southend High School for Girls, Westcliff High School for Boys and Westcliff High School for Girls admit only through it, and Shoeburyness, St Bernard\'s and St Thomas More admit a proportion of their intake through it.' },
      { q: 'Is there a minimum score?', a: 'The CSSE says offers are not made to any child who has scored under a total standardised score of 303. We never treat that as a target or predict scores.' },
      { q: 'When is the test for September 2028 entry?', a: 'The CSSE says registration opens next year and important dates will be published by Easter 2027. For 2027 entry the test was on Saturday 19 September 2026.' },
      { q: 'Are there practice papers?', a: 'The CSSE offers free familiarisation papers on its website and sells practice packs. We write our own questions and do not reproduce CSSE material.' },
      { q: 'Do you teach the English paper?', a: 'No, only the mathematics. We also do not advise on applications or places.' },
      { q: 'Why are Roman numerals on this page?', a: 'Because reading Roman numerals to 1,000 is a Year 5 statement in the national curriculum, and a sixty-minute paper has room for every Year 5 statement.' },
      { q: 'What are your fees?', a: 'There is no charge for the first lesson. After that it is USD 100 a month in a group or USD 150 a month for one to one, month by month.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Nearby',
    h2: 'More for Essex families',
    lede: 'The other CSSE schools, coding in Southend, and our national 11 plus page.',
    items: [
      { href: '/11-plus-maths-tuition-essex', label: '11 plus maths in Essex', p: 'The CSSE schools in Colchester and Chelmsford.' },
      { href: '/best-coding-class-in-southend-on-sea', label: 'Coding classes in Southend', p: 'Programming for the city\'s children and teens.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'An overview of 11 plus maths in England.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'Across the estuary, a different test.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges for enthusiasts, by date.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we write about.' }
    ]
  },

  start: {
    h2: 'Book a free lesson',
    lede: 'Share your child\'s year group and which maths topics feel shaky. We teach a real lesson, then give you an honest report.',
    readFirst: 'Prefer to explore? Each <a class="ag-inline-link" href="/courses">course page</a> has a full syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our lessons, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> charts what follows.',
    note: 'WhatsApp brings the quickest reply. Our team is in India, our phone number is Indian, and we have no office in Essex.',
    formNote: 'No payment details. We will reply once to find a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/gcse-mathematics-mastery', label: 'GCSE maths' }
      ] },
      { h4: 'Local and national', links: [
        { href: '/best-coding-class-in-southend-on-sea', label: 'Coding in Southend' },
        { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The CSSE sets the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-sem .ag-hero h1 { letter-spacing: -0.019em; }
.ag-root.ag-sem .ag-capsule { border-left-width: 5px; border-radius: 0 11px 11px 0; }
.ag-root.ag-sem .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-sem .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.016em; }
.ag-root.ag-sem .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-sem .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-sem .ag-three h3 { letter-spacing: -0.012em; }
.ag-root.ag-sem .ag-slots { gap: 1.08rem; }
`,

  mustMention: ['Westcliff High School for Boys', 'Southend High School for Girls', 'Consortium of Selective Schools in Essex', 'MCMXCIII', 'Tuesday 29 September 2026', 'Shoeburyness High School', 'The Mathematics paper will last sixty minutes', 'Roman numerals to 1,000']
};
