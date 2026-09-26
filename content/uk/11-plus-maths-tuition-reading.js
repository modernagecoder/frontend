'use strict';
// 11 plus maths tuition in Reading (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Brighter Futures for Children (Reading's children's services company), secondary admissions: "Reading has two
//    selective state grammar schools which use entrance tests as a basis for selecting pupils: Reading School (boys)
//    Kendrick School (girls)"; register directly with the school; registration "usually between April and June".
//  - Kendrick School, admission into Year 7 in September 2027, admissions procedure summary and Guide to the Admission
//    Procedure: registration 1 May to midnight 1 July 2026; test Friday 18 September 2026, morning and afternoon
//    sessions (candidates outside the designated area on a later date); "two test papers, each approximately one
//    hour, with questions covering a combination of verbal and non-verbal reasoning, English and mathematics"; marking
//    and standardisation by GL Assessment; "There is no creative writing element"; multiple-choice layout; ranking by
//    the aggregate of age-standardised scores of both papers; a qualifying score "determined (to two decimal places)";
//    familiarisation material "is NOT definitive"; must not bring rulers, calculators, scrap paper, protractors,
//    compasses; "Wrist watches/digital watches must NOT be worn. Clocks are clearly displayed"; results before 31
//    October 2026.
//  - Reading School, Year 7 entry: FSCE test adopted; key dates for 2027 entry: registration 27 March to midnight
//    Sunday 17 May 2026; SEN applicants Wednesday 15 July; "Testing date for Day and Boarding applicants: Thursday 16th
//    July"; out-of-catchment day applicants Friday 25 September; results mid-October; "To be eligible, a candidate must
//    be 'of the standard' in each of the elements of the entrance test. They may score highly on one area but if they
//    perform poorly on another, they will not be classed as eligible."; "there are no commercially available practice
//    test papers for the FSCE Ltd tests"; FSCE information: subjects "may include" mathematics among others; the test
//    has multiple-choice and written response questions.
//  - FSCE Familiarisation Guide for Parents (Reading School edition): content "from KS2 subjects taught up to and
//    including the Year 5 programme of study"; maths through "written and mental methods of calculation (no
//    calculators)"; skills listed include measuring, calculating, estimating and comparing "perimeters, volumes, areas
//    and capacity", and geometry with "2D/3D" shapes.
//  - National curriculum in England, mathematics, Year 5: "identify 3-D shapes, including cubes and other cuboids, from
//    2-D representations"; "estimate volume [for example, using 1 cm³ blocks to build cuboids (including cubes)] and
//    capacity".
// Spine: one town, two tests on two calendars; Reading School's FSCE test fell in July of Year 5 and requires the
// standard in each element, so maths must stand alone. Lesson family: cuboids, volume by counting cubes, 2-D pictures
// of 3-D shapes.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'READING: KENDRICK, READING SCHOOL', label: '11 plus maths in Reading', blurb: 'Two schools, two tests, two calendars: one in July of Year 5 where maths must reach the standard on its own, one in September.' },
  slug: '11-plus-maths-tuition-reading',
  code: 'rdm',
  accent: '#4C2A0B',
  accentRationale: 'Reading 11 plus maths: a dark chestnut, chosen by colour distance from every accent on the site (10.3:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Reading',
  title: '11 Plus Maths Tuition Reading | Kendrick and Reading School',
  description: 'Live online 11 plus maths for Kendrick School and Reading School: two different tests on two calendars, one sat in July of Year 5, and Year 5 volume taught well.',
  ogDescription: 'Reading\'s two grammar schools test on different calendars with different providers. At Reading School maths must reach the standard on its own. How we prepare for both.',
  twitterDescription: 'Kendrick and Reading School 11 plus maths, taught live online: two tests, two calendars, one curriculum.',
  pageName: '11 Plus Maths Tuition in Reading',
  webPageDescription: 'Live online mathematics teaching for children preparing for the entrance tests of Kendrick School and Reading School, based on what the schools and Brighter Futures for Children publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Kendrick or Reading School tests, teaching the Year 5 curriculum early enough for a July test.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Reading',
  navLinks: [
    { href: '#twotests', label: 'Two tests' },
    { href: '#july', label: 'A July test' },
    { href: '#volume', label: 'Volume' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Reading &middot; Kendrick School and Reading School entrance tests &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Reading',
  lede: 'Reading has two grammar schools, and they do not share a test, a provider or even a season. Kendrick School, for girls, sets two one-hour GL Assessment papers in September of Year 6. Reading School, for boys, uses a test from Future Stories Community Enterprise (FSCE), and for 2027 entry its main sitting was on Thursday 16 July 2026, in the final weeks of Year 5. Reading School also says a candidate must be "of the standard" in each element of the test: a high score in one area does not rescue a low one in another. Put those two facts together and the maths plan for a Reading School applicant has to be finished earlier, and has to stand on its own, than almost anywhere else in England. This page sets out what both schools publish, and then teaches a Year 5 topic that FSCE names explicitly: volume and the three-dimensional shapes behind it.',
  secondaryCta: { href: '#july', label: 'See why July changes the plan' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Reading grammar school tests.',
  heroNote: 'Maths only &middot; We do not teach English, reasoning or creative tasks &middot; No link with either school',
  spec: [
    ['Schools', 'Kendrick School (girls); Reading School (boys)'],
    ['Kendrick test', 'GL, two papers of about an hour'],
    ['Kendrick date', 'September of Year 6'],
    ['Reading School test', 'FSCE, multiple choice and written'],
    ['Reading School date', 'July of Year 5, this cycle'],
    ['Reading School rule', '"Of the standard" in each element'],
    ['Content', 'Up to the end of Year 5'],
    ['We teach', 'Year 5 maths, finished early']
  ],
  capsuleQ: 'In short',
  capsule: 'Brighter Futures for Children, which runs children\'s services for Reading, says the town has two selective state grammar schools, Reading School (boys) and Kendrick School (girls), and that families register with each school directly. Kendrick\'s test is two papers of about an hour, marked and standardised by GL Assessment, covering verbal and non-verbal reasoning, English and mathematics, with no creative writing; for 2027 entry it was on Friday 18 September 2026. Reading School uses an FSCE test with multiple-choice and written questions; for 2027 entry its main sitting was on Thursday 16 July 2026, and the school says candidates must reach the standard in each element. FSCE draws on Key Stage 2 up to the end of Year 5, with no calculators. We teach that maths, live online, on a timetable that works for a July test. A trial lesson is on the house; ongoing tuition is billed monthly at USD 100 for a small group or USD 150 for individual lessons.',

  picks: {
    eyebrow: 'Where to start in Reading',
    h2: 'Three courses for two different tests',
    lede: 'For a Reading School applicant, start by spring of Year 5 at the latest. For Kendrick, the summer is still usable.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'READING / 01', title: 'Year 5 maths, completed early', note: 'The whole Year 5 curriculum, paced to be secure by July, including the measures and shape FSCE names.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'READING / 02', title: 'Firm primary foundations', note: 'For Year 4 children who need number and shape settled before the Year 5 work begins.' },
      { course: 'mental-maths-mastery-kids', code: 'READING / 03', title: 'Written and mental calculation', note: 'FSCE tests maths "through written and mental methods of calculation (no calculators)".' }
    ]
  },

  sections: [
    {
      id: 'twotests', tint: 'tint', eyebrow: 'Two schools, two tests',
      h2: 'What Kendrick School and Reading School publish',
      lede: 'Each school sets and publishes its own arrangements. Read on 26 September 2026, together with Brighter Futures for Children\'s admissions guidance.',
      body: [
        { kind: 'table', caption: 'The two Reading entrance tests for September 2027 entry, as each school publishes them', head: ['', 'Kendrick School', 'Reading School'], rows: [
          ['Provider', 'GL Assessment', 'Future Stories Community Enterprise (FSCE)'],
          ['Registration', '1 May to midnight, 1 July 2026', '27 March to midnight, 17 May 2026'],
          ['Main test date', 'Friday 18 September 2026 (Year 6)', 'Thursday 16 July 2026 (Year 5)'],
          ['Papers', 'Two, about an hour each', 'Multiple-choice and written questions, plus a creativity element'],
          ['Maths', 'Assessed alongside English and reasoning', 'Among the subjects FSCE may include'],
          ['How results work', 'Aggregate of both age-standardised papers', 'Must be "of the standard" in each element']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Kendrick describes "two test papers, each approximately one hour, with questions covering a combination of verbal and non-verbal reasoning, English and mathematics". GL Assessment marks and standardises them, the layout is multiple choice, and "There is no creative writing element". Ranking is by the aggregate of the two age-standardised scores, and a qualifying score is set to two decimal places.',
            'Kendrick\'s guide warns that its GL familiarisation material "is NOT definitive", and its what-to-bring list rules out rulers, calculators, protractors, compasses and scrap paper. Unusually, it also says wrist watches must not be worn; clocks are displayed in the rooms.'
          ],
          right: [
            'Reading School uses FSCE\'s test, which mixes multiple-choice and written response questions. FSCE says subjects "may include" mathematics among several, and its familiarisation guide has a full section on what it looks for in maths. The school notes that "there are no commercially available practice test papers for the FSCE Ltd tests".',
            'The rule that matters most for maths is Reading School\'s: "To be eligible, a candidate must be \'of the standard\' in each of the elements of the entrance test. They may score highly on one area but if they perform poorly on another, they will not be classed as eligible." Places and priorities after that are for each school to explain.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://brighterfuturesforchildren.org/for-parents-carers/schools/secondary-admissions/" rel="noopener" target="_blank">Brighter Futures for Children, secondary admissions</a>; <a class="ag-inline-link" href="https://www.kendrick.reading.sch.uk/page/?title=Admission+into+Year+7+in+September+2027&amp;pid=72" rel="noopener" target="_blank">Kendrick School, admission into Year 7 in September 2027</a>, with its admissions procedure summary and guide; <a class="ag-inline-link" href="https://www.reading-school.co.uk/admissions/year-7-entry" rel="noopener" target="_blank">Reading School, Year 7 entry</a>, with FSCE\'s information and familiarisation guide. Modern Age Coders has no connection with either school, FSCE, GL Assessment or Brighter Futures for Children.' }
      ]
    },
    {
      id: 'july', tint: 'plain', eyebrow: 'A test before Year 5 ends',
      h2: 'Why a July sitting changes the whole plan',
      lede: 'Most 11 plus tests fall in September of Year 6, after a summer of practice. Reading School\'s main sitting this cycle came in July of Year 5.',
      body: [
        { kind: 'two',
          leftH3: 'What FSCE covers',
          left: [
            'FSCE\'s guide says its content comes "from KS2 subjects taught up to and including the Year 5 programme of study". For a test in mid-July, that means the whole of Year 5 has to be secure while Year 5 is still going on. Topics that a primary school teaches in the summer term may only just have been met.',
            'That is the reverse of the problem in many areas, where a September test leaves families wondering whether Year 6 content will appear. At Reading School the question is whether the last of Year 5 will be ready in time.'
          ],
          rightH3: 'What we change',
          right: [
            'For a Reading School applicant, we plan to finish the Year 5 maths curriculum by the spring half term, leaving the summer term for mixed practice and written answers. That means starting Year 5 topics in the autumn, or earlier for children who are ready.',
            'Because each element must reach the standard, we do not let maths be the weak one. A child who is excellent at English and adequate at maths is, under this rule, at risk in a way an aggregate score would hide.'
          ] },
        { kind: 'p', html: 'Kendrick applicants have the usual September rhythm, with the summer holiday for practice. Families applying to both schools, which happens with siblings, are effectively preparing for two tests three months apart. The maths underneath is the same; only the calendar differs. For children now in Year 5, both schools will publish their own 2028-entry dates, and we do not assume them.' }
      ]
    },
    {
      id: 'volume', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Volume and 3-D shapes, the Year 5 way',
      lede: 'FSCE lists measuring, estimating and comparing "perimeters, volumes, areas and capacity" and geometry with 2D and 3D shapes. Year 5 is where volume is first built from cubes.',
      body: [
        { kind: 'table', caption: 'Year 5 volume and 3-D shape, with questions of our own', head: ['Year 5 idea', 'Our question', 'Answer and reasoning'], rows: [
          ['Volume by counting cubes', 'A cuboid is built from 1 cm cubes: 4 cubes long, 3 wide, 2 high. What is its volume?', '24 cm³: 4 × 3 = 12 in one layer, two layers'],
          ['Same volume, different shape', 'Which cuboid has more cubes: 6 by 2 by 2, or 4 by 3 by 2?', 'Both have 24 cubes'],
          ['Cuboids from pictures', 'A drawing shows a cuboid with 5 cubes visible along the front edge, 2 along the side and 3 high. How many cubes if it is solid?', '30: the hidden cubes count too'],
          ['Capacity', 'A tank 10 cm by 10 cm by 10 cm holds how many millilitres?', '1,000 ml: 1,000 cm³ is one litre'],
          ['Estimating', 'Is a shoebox nearer 5 cm³, 5,000 cm³ or 5 m³?', 'About 5,000 cm³: roughly 30 by 20 by 10 cm'],
          ['Cube numbers', 'A cube has edges of 3 cm. How many 1 cm cubes make it?', '27: 3 × 3 × 3, a cube number']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The Year 5 curriculum asks pupils to "identify 3-D shapes, including cubes and other cuboids, from 2-D representations" and to "estimate volume [for example, using 1 cm³ blocks to build cuboids (including cubes)] and capacity". Formal volume formulae arrive in Year 6. So the Year 5 way is layers: count one layer, multiply by the number of layers.',
            'That matters for a test pitched at the end of Year 5. A child who has only ever been told "length times width times height" may get the right number without understanding it, and fail the first question that shows a picture rather than giving three numbers.'
          ],
          right: [
            'The "hidden cubes" row is the classic trap. In a drawing of a solid cuboid, some cubes are behind others and cannot be seen. Children who count only what they can see always undercount. Thinking in layers, a front face times the depth, fixes it.',
            'The capacity row connects two units children often keep apart: 1 cm³ holds 1 ml, so 1,000 cm³ is a litre. It is one of the most useful single facts in primary measures, and it turns up in science too.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 geometry and measurement (statutory requirements); FSCE Familiarisation Guide for Parents, maths section, published by Reading School. The questions are our own.' }
      ]
    },
    {
      id: 'written', tint: 'tint', eyebrow: 'Formats',
      h2: 'Multiple choice at Kendrick, both kinds at Reading School',
      lede: 'The two tests ask for answers in different ways. Preparation has to cover both.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Kendrick', p: 'GL multiple choice on an answer sheet, maths mixed with English and reasoning across two papers. We practise short, varied sets with a clock on the wall and no watch, as Kendrick requires.' },
          { h3: 'Reading School', p: 'FSCE mixes multiple-choice with written responses. For maths we practise both: choosing from options, and writing a full answer with no options to check against.' },
          { h3: 'Both', p: 'No calculator at either. FSCE says its maths uses "written and mental methods of calculation", so compact written methods and quick mental arithmetic carry both tests.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We do not reproduce GL familiarisation booklets or FSCE guide material. Our questions are our own, written to the Year 5 curriculum and to the formats the schools describe. Kendrick and Reading School both warn that familiarisation material is not definitive, which is one more reason to prepare the content rather than a paper style.',
            'Reading School\'s note that there are no commercial FSCE practice papers is worth repeating to families who have been offered them. Anything sold as an FSCE paper is someone else\'s imitation.'
          ],
          right: [
            'Reading School\'s test also includes creative and non-maths elements, and Kendrick\'s includes English and reasoning. We teach only the maths. Under Reading School\'s each-element rule, the other elements need their own preparation, and we say so plainly at the start.',
            'We give no advice on catchment, designated areas or places. Those are published by the schools and by Brighter Futures for Children.'
          ] }
      ]
    },
    {
      id: 'town', tint: 'plain', eyebrow: 'Reading and around it',
      h2: 'Two schools in one town, taught from anywhere',
      lede: 'Both schools are in Reading itself, yet their tests are entirely separate, with separate registration, dates and providers.',
      body: [
        { kind: 'two',
          left: [
            'Some families consider both schools for different children, and some also look at the Slough Consortium schools to the east, which set a different test again. We teach the same curriculum for all of them, adjusted to each calendar.',
            'Lessons are live on video, so a child in Caversham, Earley or Tilehurst is taught alongside children at the same level of Year 5 maths from across the country, five to ten in a group.'
          ],
          right: [
            'For the Slough schools\' test, see our <a class="ag-inline-link" href="/11-plus-maths-tuition-slough">Slough 11 plus page</a>. For Buckinghamshire\'s county test, see the <a class="ag-inline-link" href="/11-plus-maths-tuition-buckinghamshire">Buckinghamshire page</a>.',
            'We have no connection with Kendrick School, Reading School, FSCE, GL Assessment or Brighter Futures for Children.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Working back from July',
    h2: 'Four stages, finished by early summer',
    lede: 'Planned for a Reading School test in July of Year 5; Kendrick applicants have the summer as well.',
    table: { caption: 'From number facts to both answer formats, ready for July', head: ['When', 'Stage', 'You will see'], rows: [
      ['Year 4', '1. Foundations', 'Tables, place value and the four operations secure'],
      ['Autumn, Year 5', '2. Year 5 number and fractions', 'Large numbers, primes, fractions and decimals done without calculators'],
      ['Spring, Year 5', '3. Measures and shape', 'Volume by layers, 3-D shapes from pictures, area and perimeter'],
      ['Summer term, Year 5', '4. Both formats', 'Multiple-choice and written maths answered accurately under time']
    ] },
    left: { h3: 'Late in the year?', ps: [
      'For a July test, a spring start is tight but workable if the child is already secure in number. For Kendrick, a later start is more forgiving.',
      'We will tell you honestly at the free lesson what is realistic.'
    ] },
    right: { h3: 'After the tests', ps: [
      'Volume and shape grow into secondary geometry and science. Many children continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, building 3-D shapes in code.',
      'Others take on the national challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Maths and coding for Reading families',
    lede: 'Grouped by stage; every card opens a full syllabus.',
    bands: [
      { num: 'I', h3: 'For Kendrick and Reading School', sub: 'Years 3 to 5', courses: [
        { code: 'RDM / I', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 maths, paced for a July or September test.' },
        { code: 'RDM / II', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Number and shape foundations first.' },
        { code: 'RDM / III', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation without a calculator.' },
        { code: 'RDM / IV', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A tactile route to confident arithmetic.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'From Year 6', courses: [
        { code: 'RDM / V', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Volume formulae, algebra and proof.' },
        { code: 'RDM / VI', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Taught to AQA, Edexcel and OCR.' },
        { code: 'RDM / VII', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Spatial and number puzzles that stretch.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Shapes and numbers in code', courses: [
        { code: 'RDM / VIII', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Compute volumes; draw nets.' },
        { code: 'RDM / IX', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Visual programming with real logic.' },
        { code: 'RDM / X', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'When blocks feel too easy, real syntax.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'RDM / XI', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Clever shortcuts, once the standard methods are fluent.' },
        { code: 'RDM / XII', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Mathematics in working software.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'After school or at the weekend, UK time',
    lede: 'We teach live from India, and for primary children we keep to early evenings and weekend mornings by the UK clock. When Britain changes its clocks, our teachers move their hours.',
    slots: [
      { time: 'Weekdays, just after school', l: 'Before homework and tea.' },
      { time: 'Weekend mornings', l: 'A fresh hour at the start of the day.' },
      { time: 'School holidays', l: 'Short extra sessions, useful before a July test.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'The same person weekly, who learns how your child thinks.' },
      { h3: 'Candid notes home', p: 'Brief reports that include what is not working yet.' },
      { h3: 'Groups of five to ten', p: 'Matched by level for the right pace.' },
      { h3: 'Our own questions', p: 'Nothing from GL or FSCE is reproduced.' },
      { h3: 'One to one if helpful', p: 'For a child racing a July deadline.' },
      { h3: 'Maths only', p: 'No English, reasoning or creativity coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Where our students take their maths',
  projectsLede: 'Four projects built and published by students at our school, all on foundations laid in primary maths. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'Families outside India all pay the same US dollar rate, month by month. There is nothing to join and nothing to sign.',
    free: ['A proper lesson with a teacher', 'An honest view afterwards', 'No card required'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Marked work, explained', 'A certificate at the end'],
    one: ['One child, one teacher', 'Paced to a July or September test', 'Focused on weaker topics']
  },

  faq: {
    eyebrow: 'Reading questions',
    h2: 'What Reading families ask us',
    items: [
      { q: 'Do Kendrick and Reading School use the same test?', a: 'No. Kendrick School uses GL Assessment papers; Reading School uses a test from Future Stories Community Enterprise (FSCE). They have different dates, formats and rules.' },
      { q: 'When is the Reading School test?', a: 'For September 2027 entry, the main sitting for day and boarding applicants was on Thursday 16 July 2026, in Year 5. Dates for 2028 entry are published by the school.' },
      { q: 'When is the Kendrick test?', a: 'For September 2027 entry it was on Friday 18 September 2026, with registration from 1 May to 1 July 2026. Dates for 2028 entry are published by the school.' },
      { q: 'What maths is in the Kendrick test?', a: 'Kendrick says its two papers of about an hour cover verbal and non-verbal reasoning, English and mathematics, marked and standardised by GL Assessment, with no creative writing.' },
      { q: 'What maths does FSCE test?', a: 'FSCE says its content comes from Key Stage 2 up to and including the Year 5 programme of study, with written and mental calculation and no calculators. Its guide lists topics from large numbers and fractions to measures, volume and shape.' },
      { q: 'What does "of the standard in each element" mean?', a: 'Reading School says a candidate must reach the standard in every element of its test; a high score in one cannot make up for a poor score in another. So maths needs to be secure on its own.' },
      { q: 'Are there FSCE practice papers?', a: 'Reading School says there are no commercially available practice test papers for the FSCE tests. FSCE publishes familiarisation guides instead.' },
      { q: 'Can my child wear a watch at Kendrick?', a: 'No. Kendrick\'s guide says wrist watches and digital watches must not be worn, and that clocks are displayed in the rooms.' },
      { q: 'Do you teach the English and creative parts?', a: 'No. Our lessons cover the mathematics; the English, reasoning and creativity elements, and every question about places or catchment, lie outside what we do.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free of charge. Continuing costs USD 100 a month for a group place or USD 150 a month one to one, and there is no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Berkshire families',
    lede: 'Neighbouring selective areas, our national 11 plus page, and coding for UK children.',
    items: [
      { href: '/11-plus-maths-tuition-slough', label: '11 plus maths in Slough', p: 'The Slough Consortium test, a short drive east.' },
      { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire', p: 'A county test with published weightings.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The general picture of 11 plus maths in England.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'First steps in programming for primary pupils.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges through the school year.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we cover.' }
    ]
  },

  start: {
    h2: 'Arrange a free maths lesson',
    lede: 'Tell us which school, your child\'s year, and how maths is going. We teach a proper lesson and then tell you straight what we saw and what the calendar allows.',
    readFirst: 'Weighing things up? Our <a class="ag-inline-link" href="/courses">catalogue</a> carries a syllabus for each course, the <a class="ag-inline-link" href="/how-we-teach">teaching page</a> describes a typical lesson, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> sets out a route from primary maths into programming.',
    note: 'Messages on WhatsApp are answered quickest. The school behind this page is Indian, as is the phone number, and there are no premises in Berkshire or anywhere in the UK.',
    formNote: 'No card details. We reply once to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' }
      ] },
      { h4: 'Nearby and national', links: [
        { href: '/11-plus-maths-tuition-slough', label: '11 plus maths in Slough' },
        { href: '/11-plus-maths-tuition-buckinghamshire', label: '11 plus maths in Buckinghamshire' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the tests; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-rdm .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-rdm .ag-capsule { border-left-width: 7px; border-radius: 0 6px 6px 0; }
.ag-root.ag-rdm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-rdm .ag-table caption { text-align: left; font-weight: 700; letter-spacing: 0.012em; }
.ag-root.ag-rdm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-rdm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-rdm .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-rdm .ag-slots { gap: 0.95rem; }
`,

  mustMention: ['Kendrick School', 'Reading School', 'Future Stories Community Enterprise', 'Thursday 16 July 2026', 'no commercially available practice test papers', '1 cm³ blocks', 'Brighter Futures for Children', 'wrist watches']
};
