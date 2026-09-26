'use strict';
// 11 plus maths tuition in Essex (ag- maths door by area, UK cluster Phase 6). Southend has its own page.
// Read on 26 September 2026 by curl, quotes grepped from the raw text. Essex County Council's secondary admissions
// page returned 403 (CloudFront "Request blocked"); not retried.
//  - CSSE home page and 11+ Information Guide, 2027 entry: ten CSSE schools including Colchester County High School for
//    Girls, Colchester Royal Grammar School and King Edward VI Grammar School (the three outside Southend); two tests,
//    English (sixty minutes plus ten minutes' reading) and Mathematics (sixty minutes), each worth 50%; Key Stage 2;
//    no calculators; minimum total standardised score 303; registration 12 May to 19 June 2026; tests 19 September
//    2026; results 12 October 2026; 2028-entry dates "published by Easter 2027".
//  - CSSE "Preparing for the 11+ / statistical information for guidance" (October 2016, still linked from the CSSE
//    examination page): qualities the CSSE headteachers look for include "appreciation of numerical conventions" and
//    "ability to apply mathematical concepts"; "it is advisable for children to spend a few hours familiarising
//    themselves with the style of responses required in the papers, this can be done at home"; "Headteachers share a
//    concern that extensive coaching for the 11+ is inappropriate, ultimately counterproductive". (Its 2016 score
//    guidance and statistics are NOT used: out of date.)
//  - Chelmsford County High School for Girls, Admission to Year 7 September 2027, and admissions arrangements 2027/28:
//    "a selective, non-denominational girls' school with Academy Status"; FSCE entrance test adopted; registration 9am
//    Monday 13 April to 4pm Wednesday 3 June 2026; "The CCHS Entrance Test took place on Thursday 3rd September 2026";
//    tests KS2 subjects "up to and including the Year 5 programme of study", subjects "may include" Mathematics among
//    others; papers apart from Creativity marked and age standardised, a qualifying standard agreed, then Creativity
//    judged. FSCE parents' guide: maths "through written and mental methods of calculation (no calculators)".
//  - National curriculum in England, mathematics, Year 5: "recognise and use square numbers and cube numbers, and the
//    notation for squared (²) and cubed (³)"; area in cm² and m²; volume with 1 cm³ blocks.
// Spine: the CSSE headteachers name "appreciation of numerical conventions" among what they look for. Lesson family:
// mathematical notation and conventions, squares and cubes, ², ³, cm², cm³.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'ESSEX: CSSE AND CCHS', label: '11 plus maths in Essex', blurb: 'The CSSE heads look for an "appreciation of numerical conventions". What that means in Year 5 maths, from squared numbers to units.' },
  slug: '11-plus-maths-tuition-essex',
  code: 'exm',
  accent: '#8A4C7D',
  accentRationale: 'Essex 11 plus maths: a muted mauve, chosen by colour distance from every accent on the site (4.96:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Essex',
  title: '11 Plus Maths Tuition Essex | CSSE and CCHS Tests, Online',
  description: 'Live online 11 plus maths for Essex: the CSSE test for Colchester and Chelmsford grammar schools, the separate CCHS test, and numerical conventions taught well.',
  ogDescription: 'The CSSE headteachers list an "appreciation of numerical conventions" among what they look for. What that means in Year 5 maths, and how we teach it for Essex.',
  twitterDescription: 'Essex 11 plus maths, taught live online: CSSE and CCHS tests, Year 5 maths, notation done right.',
  pageName: '11 Plus Maths Tuition in Essex',
  webPageDescription: 'Live online mathematics teaching for children preparing for the CSSE 11+ used by Colchester Royal Grammar School, Colchester County High School for Girls and King Edward VI Grammar School, and for the Chelmsford County High School for Girls test.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Essex selective tests, teaching Key Stage 2 maths to Year 5 with close attention to notation and conventions.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Essex',
  navLinks: [
    { href: '#tests', label: 'The tests' },
    { href: '#heads', label: 'What heads look for' },
    { href: '#notation', label: 'Conventions' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Essex &middot; CSSE 11+ and the CCHS entrance test &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Essex',
  lede: 'The headteachers of the CSSE schools once wrote down, in a short document still linked from the consortium\'s own website, the qualities they hope the 11+ will find. Most are what you would expect: curiosity, perseverance, "understanding of all concepts taught at primary school". Two are about maths, and one of those is unusual: "appreciation of numerical conventions". It is a phrase worth unpacking. Conventions are the agreed ways maths is written: what 3² means and why it is not 6, where the comma goes in 405,090, why area is in cm² and volume in cm³. They are small, they are in the Year 5 curriculum, and a child who is shaky on them loses marks on questions they otherwise understand. This page sets out the two Essex tests, the CSSE test for Colchester and Chelmsford\'s grammar schools and the separate test at Chelmsford County High School for Girls, and then teaches the conventions.',
  secondaryCta: { href: '#notation', label: 'See the conventions lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Essex 11 plus.',
  heroNote: 'Maths only &middot; We do not teach English or creative tasks &middot; No connection with the CSSE or any Essex school',
  spec: [
    ['CSSE schools in Essex', 'CRGS, CCHSG (Colchester), KEGS (Chelmsford)'],
    ['CSSE maths', 'A sixty-minute paper, half the total'],
    ['CSSE date', 'September of Year 6'],
    ['CCHS test', 'FSCE, its own test'],
    ['CCHS date', 'Early September of Year 6'],
    ['Content', 'Key Stage 2, up to Year 5'],
    ['Calculators', 'Not allowed in either'],
    ['We teach', 'Year 5 maths, conventions included']
  ],
  capsuleQ: 'In short',
  capsule: 'Essex has two selective tests. The CSSE test is used by Colchester Royal Grammar School, Colchester County High School for Girls and King Edward VI Grammar School in Chelmsford, along with seven Southend schools: an English paper and a sixty-minute Mathematics paper, each worth half the marks, based on Key Stage 2, with no calculators and a minimum total standardised score of 303. For 2027 entry it was sat on Saturday 19 September 2026, and the CSSE says 2028-entry dates will be published by Easter 2027. Chelmsford County High School for Girls runs its own FSCE test, sat this cycle on Thursday 3 September 2026, drawing on Key Stage 2 subjects up to Year 5, which may include maths. We teach the maths for both, live online. The first lesson costs nothing; regular tuition is USD 100 monthly in a small group or USD 150 monthly one to one.',

  picks: {
    eyebrow: 'Starting points in Essex',
    h2: 'Three courses for the Essex tests',
    lede: 'Choose by whether your child\'s errors are about ideas or about how maths is written down.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'ESSEX / 1', title: 'Essex 11 plus maths', note: 'Key Stage 2 to Year 5, with the notation and conventions that cost careless marks.' },
      { course: 'mental-maths-mastery-kids', code: 'ESSEX / 2', title: 'Squares, cubes and quick facts', note: 'Square numbers to 144 and small cubes known instantly, for a paper with no calculator.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'ESSEX / 3', title: 'Groundwork, Years 1 to 5', note: 'For Year 4 children whose place value and tables are not yet secure.' }
    ]
  },

  sections: [
    {
      id: 'tests', tint: 'tint', eyebrow: 'Two Essex tests',
      h2: 'The CSSE test, and the CCHS test',
      lede: 'Essex County Council\'s admissions page returned an error to our reader, so this page relies on the CSSE and on Chelmsford County High School for Girls. Both read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The two Essex selective tests for September 2027 entry', head: ['', 'CSSE 11+', 'Chelmsford County High School for Girls'], rows: [
          ['Schools', 'CRGS, CCHSG, KEGS in Essex; seven more in Southend', 'CCHS only'],
          ['Provider', 'Set by the consortium', 'Future Stories Community Enterprise (FSCE)'],
          ['Maths', 'A sixty-minute Mathematics paper, 50% of the total', 'Maths may be among the subjects tested'],
          ['Registration', '12 May to 19 June 2026', '13 April to 3 June 2026'],
          ['Test', 'Saturday 19 September 2026', 'Thursday 3 September 2026'],
          ['After the test', 'Results emailed 12 October 2026', 'Qualifying standard set, then the Creativity paper judged']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The CSSE describes its test as "two tests. One in English and one in Mathematics", with "The Mathematics paper" lasting sixty minutes. The papers are standardised and weighted, each worth 50% of the marks, and based on Key Stage 2. Calculators of any description are not permitted. Offers are not made to any child with a total standardised score under 303.',
            'The three Essex CSSE schools are Colchester County High School for Girls, Colchester Royal Grammar School and King Edward VI Grammar School in Chelmsford. The other seven CSSE schools are in Southend, and share the same test.'
          ],
          right: [
            'Chelmsford County High School for Girls describes itself as "a selective, non-denominational girls\' school with Academy Status" and has adopted the FSCE test. FSCE says its content comes from Key Stage 2 subjects "up to and including the Year 5 programme of study", that subjects "may include" mathematics among several others, and that maths is tested through written and mental methods, with no calculators.',
            'The school\'s arrangements say papers other than Creativity are marked and age-standardised, a qualifying standard is agreed, and then Creativity is judged by trained staff. Places after that are for each school to explain, and we leave them to their own documents.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://csse.org.uk/" rel="noopener" target="_blank">CSSE</a>, home page, <em>11+ Information Guide, Selective Test 2027 Entry</em>, and "Preparing for the 11+" (October 2016); <a class="ag-inline-link" href="https://www.cchs.co.uk/admissions/admission-to-year-7-september-2027/" rel="noopener" target="_blank">Chelmsford County High School for Girls, Admission to Year 7 September 2027</a>, its admissions arrangements and FSCE guide. Essex County Council\'s admissions page returned HTTP 403. Modern Age Coders has no connection with the CSSE, FSCE, the council or any Essex school.' }
      ]
    },
    {
      id: 'heads', tint: 'plain', eyebrow: 'What the heads look for',
      h2: 'A headteachers\' list, and what it says about maths',
      lede: 'The CSSE\'s "Preparing for the 11+" note dates from October 2016, but it is still linked from the consortium\'s examination page, and its description of what the schools value has not been withdrawn.',
      body: [
        { kind: 'two',
          leftH3: 'The two maths items',
          left: [
            'Among the qualities the CSSE headteachers list are "understanding of all concepts taught at primary school", "ability to work at pace and assimilate information quickly", "appreciation of numerical conventions" and "ability to apply mathematical concepts".',
            'The last is familiar: using what you know in a new setting. The third is less often discussed. Numerical conventions are the shared rules for writing and reading maths, and "appreciation" suggests understanding why they exist, not just obeying them.'
          ],
          rightH3: 'What they say about coaching',
          right: [
            'The same note says a few hours spent getting familiar with "the style of responses required in the papers" is advisable, and "can be done at home, using materials and papers available on the CSSE website". It adds that "Headteachers share a concern that extensive coaching for the 11+ is inappropriate, ultimately counterproductive".',
            'We take that seriously. What we offer is not coaching to a paper but teaching of the primary curriculum, with the conventions properly understood. A child who understands the maths will cope with any paper; a child drilled on papers will not necessarily cope with secondary school.'
          ] },
        { kind: 'p', html: 'The note also contains score guidance and statistics from 2016. We do not repeat them: they are ten years old, the CSSE sets cut-offs from each year\'s results, and quoting old numbers as if they were targets would mislead.' }
      ]
    },
    {
      id: 'notation', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Numerical conventions in Year 5: squares, cubes and units',
      lede: 'The Year 5 curriculum asks children to "recognise and use square numbers and cube numbers, and the notation for squared (²) and cubed (³)". Around that sit other conventions worth securing.',
      body: [
        { kind: 'table', caption: 'Conventions Year 5 children meet, with questions of our own', head: ['Convention', 'Our question', 'Answer and the point'], rows: [
          ['Squared', 'What is 3²? Is it 6 or 9?', '9: 3 × 3, not 3 × 2'],
          ['Cubed', 'What is 2³?', '8: 2 × 2 × 2. Writing 6 means reading ³ as × 3'],
          ['Square numbers', 'Which of 36, 48 and 64 are square numbers?', '36 and 64: 6² and 8²'],
          ['Area units', 'A square has sides of 5 cm. Is its area 20 cm, 25 cm or 25 cm²?', '25 cm²: area is always in square units'],
          ['Volume units', 'A cube has edges of 4 cm. What is its volume?', '64 cm³, the cube of 4, in cubic units'],
          ['Place-value commas', 'Write four hundred and five thousand and ninety in digits.', '405,090: commas group digits in threes']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Most of these look trivial to an adult. For a ten-year-old under time pressure they are exactly where marks go. The classic slip is reading 3² as 3 × 2. Another is writing an area in cm, or a volume in cm². The number is right and the answer is wrong, because the convention was missed.',
            'Understanding why helps it stick. 5 cm × 5 cm is 25 square centimetres because the answer counts squares with 1 cm sides. A cube of 4 cm has 4 × 4 × 4 small cubes inside it, which is why cubic centimetres and cube numbers share a name.'
          ],
          right: [
            'Squares and cubes also link to the rest of Year 5. Square numbers have an odd number of factors; cube numbers turn up when counting cubes in a solid; both appear in the curriculum\'s own examples of equivalence, such as 4 × 35 = 2 × 2 × 35.',
            'We teach conventions a little every week rather than in one lesson. Each set of practice questions includes one or two where the notation or the unit matters, so the habit of reading symbols carefully becomes automatic.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 multiplication and division, and measurement (statutory requirements and guidance). The questions are written by Modern Age Coders.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Teaching, not coaching',
      lede: 'Given what the CSSE heads have written, here is exactly what we do and do not do for Essex families.',
      body: [
        { kind: 'three', cells: [
          { h3: 'We teach the curriculum', p: 'Key Stage 2 maths to Year 5, every strand, until it is secure. Conventions and notation are part of every lesson, not an afterthought.' },
          { h3: 'We keep format brief', p: 'A few timed practice sessions late on, to get used to an hour-long paper. The CSSE\'s free papers are the right place to see the real format.' },
          { h3: 'We never copy papers', p: 'Our questions are our own. We do not reproduce CSSE or FSCE material, and FSCE says its question types change each year anyway.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'For the CSSE test, maths is a whole paper of sixty minutes and half the total, so breadth and stamina matter. For the CCHS test, maths may be one subject among several, and the content is again Year 5 and earlier. The same teaching serves both.',
            'We do not teach English, creative writing or the other subjects FSCE may include. Families should plan for those separately.'
          ],
          right: [
            'FSCE\'s guide says the types of questions, subjects, content and format change from year to year, so that no tutor or company can claim to know the test. We agree, and we do not claim to.',
            'We give no advice on the choice between schools, priority areas, or places. The schools and the council publish those rules.'
          ] }
      ]
    },
    {
      id: 'county', tint: 'plain', eyebrow: 'Colchester, Chelmsford and beyond',
      h2: 'Four Essex schools, two tests, one online lesson',
      lede: 'The CSSE names its Essex schools, and CCHS runs its own test. We list them only to show what this page covers.',
      body: [
        { kind: 'table', caption: 'Essex selective schools covered by this page', head: ['School', 'Test used'], rows: [
          ['Colchester Royal Grammar School', 'CSSE 11+'],
          ['Colchester County High School for Girls', 'CSSE 11+'],
          ['King Edward VI Grammar School, Chelmsford', 'CSSE 11+'],
          ['Chelmsford County High School for Girls', 'Its own FSCE test']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Southend\'s seven CSSE schools use the same test as the three here; our <a class="ag-inline-link" href="/11-plus-maths-tuition-southend">Southend 11 plus page</a> covers them.',
            'For coding in the county towns, see our pages for <a class="ag-inline-link" href="/best-coding-class-in-colchester">Colchester</a> and <a class="ag-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a>.'
          ],
          right: [
            'Lessons are live on video, in groups of five to ten matched by level, so a child in Witham, Braintree or Maldon is taught exactly as a child in Colchester or Chelmsford.',
            'We have no connection with the CSSE, FSCE, Essex County Council or any of these schools.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages for an Essex test',
    lede: 'For a child now in Year 5, both tests should fall in September 2027; the CSSE and CCHS will publish exact dates.',
    table: { caption: 'Understanding first, then speed, then stamina', head: ['When', 'Stage', 'You will notice'], rows: [
      ['Autumn, Year 5', '1. Number and notation', 'Squares, cubes and large numbers written and read correctly'],
      ['Winter, Year 5', '2. Operations and fractions', 'No-calculator methods fast and accurate'],
      ['Spring and summer, Year 5', '3. Measures and shape', 'Units always right: cm, cm², cm³'],
      ['Summer holiday', '4. An hour of maths', 'A full paper finished with care to the end']
    ] },
    left: { h3: 'Starting later', ps: [
      'A late start still helps if the order holds: understanding before speed.',
      'We will say honestly at the free lesson what the time allows.'
    ] },
    right: { h3: 'After the tests', ps: [
      'Notation is the language of secondary maths. Many children continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where symbols must be exactly right for a program to run.',
      'Some go on to the challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Maths and coding for Essex families',
    lede: 'Grouped by stage, each linked to its syllabus.',
    bands: [
      { num: 'I', h3: 'For the Essex tests', sub: 'Years 3 to 5', courses: [
        { code: 'EXM / A', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths for Essex', blurb: 'Key Stage 2 to Year 5, conventions included.' },
        { code: 'EXM / B', slug: 'mental-maths-mastery-kids', title: 'Quick-recall mental maths', blurb: 'Squares, cubes and tables on demand.' },
        { code: 'EXM / C', slug: 'elementary-mathematics-complete-masterclass', title: 'Foundations of primary maths', blurb: 'Earlier years, made secure.' },
        { code: 'EXM / D', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus calculation', blurb: 'Number sense for younger children.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 on', courses: [
        { code: 'EXM / E', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 6 to 8 maths', blurb: 'Indices, algebra and geometry.' },
        { code: 'EXM / F', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics', blurb: 'Foundation and higher, all boards.' },
        { code: 'EXM / G', slug: 'olympiad-competition-mathematics-mastery', title: 'Maths olympiad preparation', blurb: 'Non-routine problems for keen minds.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Precise notation in code', courses: [
        { code: 'EXM / H', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Exponents and units in Python.' },
        { code: 'EXM / I', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Logic for younger coders.' },
        { code: 'EXM / J', slug: 'python-ai-kids-masterclass', title: 'Python with AI, for children', blurb: 'The first typed language.' }
      ] },
      { num: 'IV', h3: 'Beyond', sub: 'Teenagers', courses: [
        { code: 'EXM / K', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic speed maths', blurb: 'Shortcuts for fluent calculators.' },
        { code: 'EXM / L', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teenagers', blurb: 'Mathematics behind modern tools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timing',
    h2: 'Scheduled around an Essex school day',
    lede: 'We teach live from India. Primary lessons sit in the early evening or on weekend mornings by UK time, and our teachers move their hours when the UK clocks change.',
    slots: [
      { time: 'Early weekday evenings', l: 'Soon after the school day.' },
      { time: 'Weekend mornings', l: 'When children are freshest.' },
      { time: 'School holidays', l: 'Short, extra sessions.' }
    ],
    cells: [
      { h3: 'One teacher all year', p: 'Who knows your child\'s habits by the second week.' },
      { h3: 'Honest reporting', p: 'A few frank lines after lessons.' },
      { h3: 'Five to ten children', p: 'Grouped by level.' },
      { h3: 'Original material', p: 'No CSSE or FSCE content copied.' },
      { h3: 'Private lessons', p: 'When one child needs focused help.' },
      { h3: 'Maths only', p: 'No English or creativity coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Where our students take their maths',
  projectsLede: 'Four projects built by students at our school, grounded in the primary maths they once learned. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'One US dollar rate per month for every family outside India. Nothing to join, cancel whenever you like.',
    free: ['A taught lesson', 'An honest verdict', 'No card needed'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Work reviewed with the child', 'A certificate at the end'],
    one: ['A teacher for one child', 'Aimed at weak spots', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Essex questions',
    h2: 'What Essex families ask us',
    items: [
      { q: 'Which Essex schools use the CSSE 11+?', a: 'Colchester Royal Grammar School, Colchester County High School for Girls and King Edward VI Grammar School in Chelmsford, together with seven schools in Southend.' },
      { q: 'What is the CSSE maths paper?', a: 'A sixty-minute Mathematics paper, worth half the total, based on Key Stage 2 of the National Curriculum, with no calculators allowed, according to the CSSE.' },
      { q: 'Does Chelmsford County High School for Girls use the CSSE test?', a: 'No. It has its own entrance test from Future Stories Community Enterprise (FSCE). For 2027 entry it was sat on Thursday 3 September 2026.' },
      { q: 'Is there maths in the CCHS test?', a: 'FSCE says the subjects tested may include mathematics among others, drawn from Key Stage 2 up to the Year 5 programme of study, with written and mental calculation and no calculators.' },
      { q: 'What does "appreciation of numerical conventions" mean?', a: 'It is one of the qualities the CSSE headteachers list in their "Preparing for the 11+" note. In Year 5 maths it covers things like squared and cubed notation, units of area and volume, and how large numbers are written.' },
      { q: 'Do the CSSE heads recommend tutoring?', a: 'Their note says a few hours of familiarisation at home is advisable and that extensive coaching is inappropriate and ultimately counterproductive. We teach the maths curriculum rather than coach to a paper.' },
      { q: 'When are the tests for September 2028 entry?', a: 'The CSSE says dates will be published by Easter 2027. CCHS publishes its own. For 2027 entry, the CSSE test was on 19 September 2026.' },
      { q: 'Do you teach English or creative writing?', a: 'No. We teach maths only, and we do not advise on applications or places.' },
      { q: 'Do you use CSSE papers?', a: 'No. The CSSE offers its own free familiarisation papers; we write our own questions.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Essex families',
    lede: 'The Southend CSSE schools, coding in Essex towns, and our national page.',
    items: [
      { href: '/11-plus-maths-tuition-southend', label: '11 plus maths in Southend', p: 'The seven Southend schools using the CSSE test.' },
      { href: '/best-coding-class-in-colchester', label: 'Coding classes in Colchester', p: 'Programming for Colchester children.' },
      { href: '/best-coding-class-in-chelmsford', label: 'Coding classes in Chelmsford', p: 'Programming for Chelmsford children.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'Our general 11 plus maths page.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Dated maths challenges.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area covered.' }
    ]
  },

  start: {
    h2: 'Book a free lesson for your child',
    lede: 'Tell us the year group and which test you are thinking about. We teach a real lesson, then give you a plain account of what we saw.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses">course pages</a> hold every syllabus, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a lesson, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows the route onward.',
    note: 'WhatsApp is the quickest route. We are an Indian school with an Indian number, and we have no premises in Essex.',
    formNote: 'No card details. A single reply to agree a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Essex and national', links: [
        { href: '/11-plus-maths-tuition-southend', label: '11 plus maths in Southend' },
        { href: '/best-coding-class-in-colchester', label: 'Coding in Colchester' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The CSSE and CCHS set the tests; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-exm .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-exm .ag-capsule { border-left-width: 6px; border-radius: 0 4px 4px 0; }
.ag-root.ag-exm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-exm .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.014em; }
.ag-root.ag-exm .ag-table td:first-child { font-weight: 650; }
.ag-root.ag-exm .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-exm .ag-three h3 { letter-spacing: -0.008em; }
.ag-root.ag-exm .ag-slots { gap: 1.02rem; }
`,

  mustMention: ['Colchester Royal Grammar School', 'Colchester County High School for Girls', 'King Edward VI Grammar School', 'Chelmsford County High School for Girls', 'numerical conventions', 'counterproductive', 'notation for squared', 'Thursday 3 September 2026']
};
