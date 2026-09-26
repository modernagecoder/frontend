'use strict';
// 11 plus maths tuition in Calderdale (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text. Calderdale Council's admissions pages returned a
// page titled "Blocked" (a bot block); not retried. Sources are the two schools and FSCE.
//  - North Halifax Grammar School, school admissions: "To apply for a place at the Halifax Grammar Schools children have
//    to sit the admissions tests"; joint North Halifax Grammar School / Crossley Heath School tests in September of Year 6;
//    "The tests comprise four elements across two tests."
//  - NHGS and Crossley Heath, admissions test format: FSCE test adopted; "The Test evaluates application of knowledge and
//    skills in English and Maths as well as exploring imaginative flair through Creative Writing"; "The Test consists of
//    both multiple-choice and written response questions"; familiarisation guide "NOT definitive"; "All papers with the
//    exception of Creative Writing are marked by computer and age-standardised. Students with an eligible score from the
//    English and Maths papers will have their Creative Writing task assessed"; "a child may only take the test once";
//    focus on KS2 "taught up to the end of Year 5"; aims "to remove any need for tutoring".
//  - Crossley Heath admissions policy (entry 2027): "Paper 1 - a test in Mathematics and English", "Paper 2 - a test in
//    Mathematics and English", "Paper 3 - a test in Creative Writing"; a qualifying standard agreed for papers 1 and 2;
//    "Students meeting the qualifying standard for English and Mathematics will then have their Creative Writing paper
//    judged"; "Children are not tested beyond the Year 5 curriculum or on non-verbal reasoning, as these subjects are not
//    taught in school."
//  - Halifax Grammar Schools timeline for September 2027: registration from Friday 20 March 2026 (10am) to Friday 26 June
//    2026 (11pm at Crossley Heath); venue information by 7 September; tests Saturday 19 September 2026; supplementary test
//    at Crossley Heath (Friday 25 September on the NHGS timeline); results by Friday 16 October 2026. Crossley Heath FAQ:
//    registration usually opens around the end of March in Year 5 and closes in late June; "There is no pass mark".
//  - FSCE FAQ (hosted by Crossley Heath): OMR marking of maths and English with human checks; "There is NO non-verbal
//    reasoning"; tutor not needed. FSCE parents' guide: maths "through written and mental methods of calculation (no
//    calculators)".
//  - National curriculum in England, mathematics, Year 5: "add and subtract whole numbers with more than 4 digits,
//    including using formal written methods (columnar addition and subtraction)"; "add and subtract numbers mentally with
//    increasingly large numbers"; rounding to check.
// Spine: maths shares two papers with English and must clear a qualifying standard before the writing is even read;
// nothing beyond Year 5 because, the school says, the rest is not taught. Lesson family: mental and written addition
// and subtraction with large numbers (compensation, counting up, columns).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'HALIFAX GRAMMAR SCHOOLS', label: '11 plus maths in Calderdale', blurb: 'In Halifax, maths and English are marked first, and only children who meet the standard have their creative writing read.' },
  slug: '11-plus-maths-tuition-calderdale',
  code: 'cdm',
  accent: '#4C3C22',
  accentRationale: 'Calderdale 11 plus maths: a millstone-grit brown, chosen by colour distance from every accent on the site (8.56:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Calderdale',
  title: '11 Plus Maths Tuition Calderdale | Halifax Grammar Schools',
  description: 'Live online 11 plus maths for the Halifax Grammar Schools test: maths and English marked first, no content beyond Year 5, and large-number calculation taught well.',
  ogDescription: 'The Halifax Grammar Schools mark maths and English first; only children who meet the standard have their creative writing judged. How we teach the maths.',
  twitterDescription: 'Halifax 11 plus maths, taught live online: two mixed papers, a Year 5 ceiling, calculation done right.',
  pageName: '11 Plus Maths Tuition in Calderdale',
  webPageDescription: 'Live online mathematics teaching for children preparing for the joint admissions test of North Halifax Grammar School and The Crossley Heath School, based on what the schools and FSCE publish.',
  courseDescription: 'Live online maths classes for Calderdale children in Years 4 and 5, teaching Year 5 maths for two mixed English and maths papers with multiple-choice and written answers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Calderdale',
  navLinks: [
    { href: '#halifax', label: 'The test' },
    { href: '#first', label: 'Maths first' },
    { href: '#large', label: 'Large numbers' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Calderdale &middot; Halifax Grammar Schools admissions test &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Calderdale',
  lede: 'Calderdale\'s two grammar schools, North Halifax Grammar School and The Crossley Heath School, share one admissions test, and the order in which it is marked says a great deal about the maths. Crossley Heath\'s policy lists three papers: two that each mix "Mathematics and English", and a third in creative writing. The first two are marked by computer and standardised, a qualifying standard is agreed, and only then are the creative writing papers of children who met it read. Maths, in other words, is part of the gate. The same policy is unusually clear about content: children "are not tested beyond the Year 5 curriculum or on non-verbal reasoning, as these subjects are not taught in school." This page sets out what the schools and the test provider, FSCE, publish, then teaches a Year 5 skill that runs through almost every question: calculating with large numbers, mentally and on paper.',
  secondaryCta: { href: '#first', label: 'See why maths comes first' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Halifax Grammar Schools test.',
  heroNote: 'Maths only &middot; We do not teach English or creative writing &middot; No connection with either Halifax school',
  spec: [
    ['Schools', 'North Halifax Grammar School; Crossley Heath'],
    ['Provider', 'Future Stories Community Enterprise (FSCE)'],
    ['Papers', 'Two maths-and-English papers, one creative writing'],
    ['Answers', 'Multiple choice and written responses'],
    ['Marking order', 'Maths and English first, writing after'],
    ['Non-verbal reasoning', 'Not tested'],
    ['Content', 'Nothing beyond Year 5'],
    ['We teach', 'Year 5 maths for the gate']
  ],
  capsuleQ: 'In short',
  capsule: 'The Halifax Grammar Schools, North Halifax Grammar School and The Crossley Heath School, run one joint admissions test in September of Year 6. The provider is FSCE, and Crossley Heath\'s policy lists Paper 1 and Paper 2, each a test in mathematics and English, and Paper 3 in creative writing. The schools say the test has both multiple-choice and written-response questions, that the maths and English are computer-marked and age-standardised, and that only children with an eligible score have their creative writing assessed. Nothing beyond Year 5 is tested, and there is no non-verbal reasoning. For September 2027 entry, registration ran from 20 March to 26 June 2026 and the test was on Saturday 19 September 2026, with results by 16 October. We teach the maths, live online. We charge nothing for the first lesson; regular tuition is USD 100 per month in a group or USD 150 per month individually.',

  picks: {
    eyebrow: 'Calderdale starting points',
    h2: 'Three courses for the Halifax test',
    lede: 'Maths is part of the gate that decides whether the writing is read. Choose by where the maths is least secure.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'HALIFAX / 1', title: 'Halifax 11 plus maths', note: 'Year 5 maths for mixed papers with multiple-choice and written answers.' },
      { course: 'mental-maths-mastery-kids', code: 'HALIFAX / 2', title: 'Mental calculation with big numbers', note: 'FSCE tests maths through written and mental methods, with no calculators.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'HALIFAX / 3', title: 'Primary maths, secured', note: 'For children whose place value needs work before Year 5 topics.' }
    ]
  },

  sections: [
    {
      id: 'halifax', tint: 'tint', eyebrow: 'The Halifax test',
      h2: 'What the two schools and FSCE publish',
      lede: 'Calderdale Council\'s admissions pages blocked our reader, so this page relies on the schools\' own pages, Crossley Heath\'s admissions policy and FSCE\'s documents. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Halifax Grammar Schools admissions test for September 2027 entry', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration opens', 'Friday 20 March 2026', 'Online, through either school\'s website.'],
          ['Registration closes', 'Friday 26 June 2026', 'Crossley Heath gives 11pm that day.'],
          ['Test information', 'By Monday 7 September 2026', 'Venue and timetable sent to parents.'],
          ['Admissions tests', 'Saturday 19 September 2026', 'At the Halifax Grammar Schools.'],
          ['Supplementary test', 'Later in September 2026', 'At The Crossley Heath School.'],
          ['Results', 'By Friday 16 October 2026', 'Not an offer of a place.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The schools say "The Test evaluates application of knowledge and skills in English and Maths as well as exploring imaginative flair through Creative Writing" and that it "consists of both multiple-choice and written response questions". North Halifax Grammar School describes the tests as "four elements across two tests".',
            'Crossley Heath\'s admissions policy spells out the papers: "Paper 1 - a test in Mathematics and English", "Paper 2 - a test in Mathematics and English", and Paper 3 in creative writing. A child may only take the test once.'
          ],
          right: [
            'FSCE\'s FAQ says the maths and English are marked using optical mark recognition, with people checking unclear or amended answers, and that "There is NO non-verbal reasoning in our tests". Its parents\' guide says maths is tested "through written and mental methods of calculation (no calculators)".',
            'Crossley Heath\'s FAQ says "There is no pass mark": a qualifying standard is agreed each year and candidates are ranked. Ranking rules and priorities are the schools\' to publish and explain.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.nhgs.co.uk/" rel="noopener" target="_blank">North Halifax Grammar School</a>, school admissions, admissions test format and 2027 timeline; <a class="ag-inline-link" href="https://www.crossleyheath.org.uk/school-information/admissions" rel="noopener" target="_blank">The Crossley Heath School, admissions</a>, its admissions policy for entry in 2027 and FAQ; FSCE\'s FAQ and parents\' familiarisation guide. Calderdale Council\'s pages were not readable to us. Modern Age Coders has no connection with either school, FSCE or the council.' }
      ]
    },
    {
      id: 'first', tint: 'plain', eyebrow: 'Maths first',
      h2: 'The papers that decide whether the writing is read',
      lede: 'Crossley Heath\'s policy sets out the marking order, and it puts maths near the front of the queue.',
      body: [
        { kind: 'two',
          leftH3: 'The order, as published',
          left: [
            'The policy says that after the tests "paper 1 and paper 2 are marked, age weighted and standardised and awarded a score. A qualifying standard will then be agreed by the Halifax Grammar Schools for these papers." Then: "Students meeting the qualifying standard for English and Mathematics will then have their Creative Writing paper judged."',
            'So the maths and English in Papers 1 and 2 come first. A child\'s creative writing, however good, is only read if those papers reach the standard.'
          ],
          rightH3: 'What that means for preparation',
          right: [
            'Maths cannot be the weak link. A child who writes beautifully but loses marks on arithmetic may never have the writing seen. That is the practical reason to make Year 5 maths secure, not the only reason, but a clear one.',
            'Because maths and English are mixed within each paper, a child also has to switch between them without losing accuracy. We practise short mixed sessions so the first maths question after an English passage is answered as carefully as any other.'
          ] },
        { kind: 'p', html: 'The policy\'s content statement is also worth quoting in full: "Children are not tested beyond the Year 5 curriculum or on non-verbal reasoning, as these subjects are not taught in school. This means that all children who take the test in the autumn term of Year 6 will have learnt the content covered in the exam." That is a promise about fairness, and a clear instruction about what to prepare: the Year 5 curriculum, and nothing beyond it.' }
      ]
    },
    {
      id: 'large', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Adding and subtracting large numbers, in the head and on paper',
      lede: 'The Year 5 curriculum asks children to "add and subtract whole numbers with more than 4 digits, including using formal written methods" and to "add and subtract numbers mentally with increasingly large numbers". FSCE tests maths without calculators, so both matter.',
      body: [
        { kind: 'table', caption: 'Mental and written strategies for large numbers (our own examples)', head: ['Calculation', 'Strategy', 'Answer'], rows: [
          ['46,300 + 8,900', 'Add 9,000, then take away 100', '55,200'],
          ['70,000 - 26,450', 'Count up: 26,450 to 30,000 is 3,550; then 40,000 more', '43,550'],
          ['128,475 - 99,999', 'Take away 100,000, then add 1 back', '28,476'],
          ['3,600 + 2,850 + 400', 'Reorder: 3,600 + 400 = 4,000 first', '6,850'],
          ['305,062 - 187,395', 'Columns, exchanging across the zeros; check 305,000 - 187,000 = 118,000', '117,667']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The first four rows are mental strategies, and each one turns an awkward number into an easy one. Adding 8,900 is adding 9,000 and taking 100 away. Subtracting from 70,000 is easier by counting up. Taking 99,999 away is taking 100,000 and giving one back. These are not tricks; they are place value used well.',
            'Children who know two or three such strategies choose between them in a second, and they rarely need a written method for numbers like these. That saves time for the questions that do need writing out.'
          ],
          right: [
            'The last row does need a written method: columnar subtraction, which Year 5 formalises, with exchanges across zeros. That is where errors live, so we practise it until it is dull, and always pair it with an estimate: 305,000 minus 187,000 is about 118,000, so an answer of 217,667 or 11,767 is wrong before it is checked.',
            'On multiple-choice questions the estimate often finds the answer on its own. On written-response questions it catches the slip before it becomes a lost mark.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 addition and subtraction (statutory requirements). The examples are our own.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Teaching the curriculum the test is built on',
      lede: 'FSCE says its test aims to remove any need for tutoring, and the schools say it covers only what school teaches. Here is where we fit.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The Year 5 curriculum', p: 'Every strand taught to depth, because the policy says that is exactly what the test covers.' },
          { h3: 'Two kinds of answer', p: 'Multiple-choice and written responses, practised on the same topics so neither is a weakness.' },
          { h3: 'Mixed papers', p: 'Short sessions switching between reading and maths, to match two papers that mix English and maths.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'FSCE\'s FAQ says a tutor is not needed and that it does not endorse commercial practice papers. We think families should hear that clearly. What we offer is good teaching of Year 5 maths, which many families want for its own sake; if you can provide it at home, you do not need us for this test.',
            'The schools publish an FSCE familiarisation guide with sample questions. Use it to see the format. We do not reproduce it.'
          ],
          right: [
            'We do not teach English or creative writing. Both matter here, especially since the writing is judged for those who reach the standard, so families should plan for them separately.',
            'We give no advice on applications, ranking or places. The schools\' admissions policies set those out.'
          ] }
      ]
    },
    {
      id: 'valley', tint: 'plain', eyebrow: 'Halifax and the Calder valley',
      h2: 'Two grammar schools, one test, taught from home',
      lede: 'The two schools run the test jointly. We list them only to show which test this page covers.',
      body: [
        { kind: 'table', caption: 'Who shares the Halifax admissions test', head: ['Grammar school', 'Part in the joint process'], rows: [
          ['North Halifax Grammar School', 'Registration and main testing'],
          ['The Crossley Heath School', 'Registration, main testing and the supplementary sitting']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, so a child in Brighouse, Sowerby Bridge, Hebden Bridge or Elland is taught the same way, in groups of five to ten matched by level.',
            'For coding lessons in West Yorkshire and beyond, our <a class="ag-inline-link" href="/best-coding-class-in-leeds">Leeds coding page</a> and <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> cover more.'
          ],
          right: [
            'Crossley Heath says it has no defined catchment area. How that affects places is for the school to explain.',
            'Neither school, FSCE nor Calderdale Council has any link with Modern Age Coders, and we keep out of applications and places.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages before the Halifax test',
    lede: 'Registration usually opens at the end of March in Year 5 and closes in late June, the schools say; the test follows in September of Year 6.',
    table: { caption: 'From place value to mixed papers', head: ['When', 'Stage', 'You will see'], rows: [
      ['Autumn, Year 5', '1. Place value to a million', 'Large numbers read, compared and rounded correctly'],
      ['Winter, Year 5', '2. Calculation', 'Mental strategies chosen well; columnar methods right first time'],
      ['Spring, Year 5 (register by late June)', '3. The rest of Year 5', 'Fractions, measures, shape and data secure'],
      ['Summer holiday', '4. Mixed papers', 'Maths answered accurately between English sections, in both answer styles']
    ] },
    left: { h3: 'Starting later', ps: [
      'Calculation runs through so many questions that it earns the first weeks when time is short.',
      'The trial lesson ends with a straight answer on what the remaining months can realistically achieve.'
    ] },
    right: { h3: 'After October', ps: [
      'Fluent calculation underpins everything in secondary maths. Some pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>.',
      'Others try the national maths challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Calderdale families',
    lede: 'Grouped by stage, each opening its syllabus.',
    bands: [
      { num: 'I', h3: 'For the Halifax test', sub: 'Years 3 to 5', courses: [
        { code: 'CDM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Halifax', blurb: 'Year 5 maths for mixed papers.' },
        { code: 'CDM / 02', slug: 'mental-maths-mastery-kids', title: 'Big-number mental maths', blurb: 'Strategies that save the written method for when it is needed.' },
        { code: 'CDM / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths core', blurb: 'Place value first.' },
        { code: 'CDM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus calculation', blurb: 'For younger children.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'CDM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Secondary maths, early years', blurb: 'Number, algebra and geometry.' },
        { code: 'CDM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, all tiers', blurb: 'For every exam board.' },
        { code: 'CDM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad course', blurb: 'For children who want harder problems.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Numbers at scale', courses: [
        { code: 'CDM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Big-number arithmetic in Python.' },
        { code: 'CDM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch for primary coders', blurb: 'Logic in blocks.' },
        { code: 'CDM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI, primary', blurb: 'The first typed language.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'CDM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths for teens', blurb: 'Speed on secure foundations.' },
        { code: 'CDM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for secondary pupils', blurb: 'Maths in software.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'After school and at weekends, UK time',
    lede: 'Lessons come live from India. Calderdale primary pupils have early-evening or weekend-morning slots, fixed by the UK clock; any clock-change adjustment happens on our side.',
    slots: [
      { time: 'Early evening', l: 'Soon after school finishes.' },
      { time: 'Weekend mornings', l: 'A fresh hour.' },
      { time: 'Holidays', l: 'Short extra sessions.' }
    ],
    cells: [
      { h3: 'Continuity', p: 'The same teacher all year.' },
      { h3: 'Candour', p: 'Short notes that say what needs work.' },
      { h3: 'Small classes', p: 'Five to ten, grouped by level.' },
      { h3: 'Original questions', p: 'No FSCE material reproduced.' },
      { h3: 'Private option', p: 'One to one for a particular gap.' },
      { h3: 'Maths alone', p: 'No English or writing coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Where fluent calculation leads',
  projectsLede: 'Years after their own Year 5, our students publish software of their own; four samples follow, with more on our <a class="ag-inline-link" href="/student-labs">student labs</a> showcase.',
  reviewsLede: 'Families\' Google reviews, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly US dollar fee for families outside India. No joining fee; you may stop at any time.',
    free: ['A taught lesson', 'A frank verdict', 'No card needed'],
    group: ['Five to ten pupils at one level', 'A regular teacher', 'Work checked together', 'Certificate at the end'],
    one: ['One child, one teacher', 'Aimed at weak spots', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Halifax test questions',
    h2: 'What Calderdale families ask us',
    items: [
      { q: 'What is in the Halifax Grammar Schools test?', a: 'Crossley Heath\'s policy lists Paper 1 and Paper 2, each a test in mathematics and English, and Paper 3 in creative writing. The schools say there are multiple-choice and written-response questions.' },
      { q: 'Is maths a separate paper?', a: 'No. Maths is mixed with English in Papers 1 and 2. North Halifax Grammar School describes the tests as four elements across two tests.' },
      { q: 'How are the papers marked?', a: 'The schools say all papers except creative writing are marked by computer and age-standardised, and only students with an eligible score from the English and maths papers have their creative writing assessed.' },
      { q: 'What maths is tested?', a: 'Crossley Heath\'s policy says children are not tested beyond the Year 5 curriculum or on non-verbal reasoning. FSCE says maths is tested through written and mental calculation, with no calculators.' },
      { q: 'Is there a pass mark?', a: 'Crossley Heath\'s FAQ says there is no pass mark; a qualifying standard is agreed and candidates are ranked.' },
      { q: 'When is the next Halifax test?', a: 'Nothing for 2028 entry was online at our 26 September 2026 check. Crossley Heath\'s FAQ describes the usual pattern: registration from about the end of March in Year 5 until late June, then the test early in Year 6.' },
      { q: 'Does FSCE recommend a tutor?', a: 'No. FSCE says a tutor is not needed and that it does not endorse commercial practice papers. We teach Year 5 maths and make no claim to know the test.' },
      { q: 'Do you teach English or creative writing?', a: 'No. Our lessons are maths lessons; the English sections, the creative writing paper and the admissions process are outside what we do.' },
      { q: 'Which schools use the test?', a: 'North Halifax Grammar School and The Crossley Heath School, jointly.' },
      { q: 'What do lessons cost?', a: 'A trial lesson is on us. Families who stay pay monthly: USD 100 for a class of five to ten, USD 150 for lessons with a teacher to themselves.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for West Yorkshire families',
    lede: 'Coding in Leeds, another FSCE area, and our national page.',
    items: [
      { href: '/best-coding-class-in-leeds', label: 'Coding classes in Leeds', p: 'Programming for West Yorkshire children.' },
      { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire', p: 'Another area moving to the FSCE test.' },
      { href: '/11-plus-maths-tuition-trafford', label: '11 plus maths in Trafford', p: 'Over the Pennines, a GL consortium test.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges through the year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we write about.' }
    ]
  },

  start: {
    h2: 'Ask for a free Halifax maths lesson',
    lede: 'Tell us the school year and how calculation is going. We teach a proper lesson and then say plainly what we saw.',
    readFirst: 'Browsing first? See each <a class="ag-inline-link" href="/courses">course syllabus</a>, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or follow the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'Messages on WhatsApp get answered soonest. Everything runs from India, the phone number included; there is no West Yorkshire office.',
    formNote: 'No card details. One reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Yorkshire and national', links: [
        { href: '/best-coding-class-in-leeds', label: 'Coding in Leeds' },
        { href: '/11-plus-maths-tuition-gloucestershire', label: '11 plus maths in Gloucestershire' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-cdm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-cdm .ag-capsule { border-left-width: 7px; border-radius: 0 5px 5px 0; }
.ag-root.ag-cdm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cdm .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.ag-root.ag-cdm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-cdm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-cdm .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-cdm .ag-slots { gap: 1.07rem; }
`,

  mustMention: ['North Halifax Grammar School', 'Crossley Heath', 'Halifax Grammar Schools', 'as these subjects are not taught in school', 'increasingly large numbers', 'Paper 2 - a test in Mathematics and English', 'four elements across two tests', '305,062']
};
