'use strict';
// 11 plus maths tuition in Bexley (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - London Borough of Bexley, "About the test" (Bexley Selection Test 2026, information for parents): the test
//    "assesses verbal ability and English comprehension, numerical reasoning, and non-verbal reasoning"; "two separate
//    booklets", each divided into timed sections; multiple-choice questions; "each paper lasts approximately 50 minutes,
//    plus additional time for instructions"; "numerical reasoning measures the ability to solve mathematical problems,
//    with content not exceeding what children are expected to learn by the end of Year 5"; Bexley has 4 grammar schools
//    (Beths Grammar School (boys), Bexley Grammar School (mixed), Chislehurst and Sidcup Grammar School (mixed), Townley
//    Grammar School (girls)); scoring 50% verbal, 25% numerical, 25% non-verbal; "the average total weighted
//    age-standardised score is 200, with approximately two-thirds of candidates scoring between 170 and 230"; "no
//    additional equipment is required or allowed"; Year 6 pupils take the test once.
//  - Council, "Register for the secondary selection test": registration 1 March to midnight 31 March 2026, late
//    registrations not accepted; Bexley primary pupils are not registered automatically; test at primary-school centres
//    between 2 and 10 September 2026, at grammar school centres 7 to 10 September 2026; results October 2026 (date to be
//    confirmed); eligible: children in Year 5 born 1 September 2015 to 31 August 2016.
//  - Bexley Grammar School, the Bexley Selection Test: "two papers containing a mixture of questions"; "Each paper is
//    divided into timed sections"; answers on "a separate machine-readable answer sheet"; test sessions in September
//    on weekdays only.
//  - Quest Assessments and the London Borough of Bexley, Bexley Selection Test page: "two non-adaptive paper
//    assessments. Each paper lasts around 50 minutes"; Paper One verbal ability and English comprehension; Paper Two
//    numerical reasoning and non-verbal reasoning; "All questions are multiple choice ... (usually five: A, B, C, D or
//    E)"; OMR answer sheet.
//  - National curriculum in England, mathematics, Year 5: "solve problems involving addition, subtraction,
//    multiplication and division and a combination of these, including understanding the meaning of the equals sign";
//    non-statutory guidance: "Pupils use and explain the equals sign to indicate equivalence, including in missing
//    number problems (for example 13 + 24 = 12 + 25; 33 = 5 x ?)".
// Spine: the maths section is called "numerical reasoning", and the council defines it. Lesson family: the equals sign
// as balance, missing-number problems solved by working backwards. Admissions (top 180, distance, places): not used.
// The 2025 sitting figures are on the Bexley borough page and are deliberately not repeated here.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'BEXLEY SELECTION TEST', label: '11 plus maths in Bexley', blurb: 'Bexley calls its maths "numerical reasoning". What the council says that means, and why the equals sign is at its heart.' },
  slug: '11-plus-maths-tuition-bexley',
  code: 'bxm',
  accent: '#8A4C50',
  accentRationale: 'Bexley 11 plus maths: a dusky rose-brown, chosen by colour distance from every accent already on the site (5.24:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Bexley',
  title: '11 Plus Maths Tuition Bexley | Numerical Reasoning, Online',
  description: 'Live online 11 plus maths for the Bexley Selection Test: what the council means by numerical reasoning, the Year 5 ceiling, and missing-number problems taught well.',
  ogDescription: 'The Bexley Selection Test calls its maths "numerical reasoning" and caps it at Year 5. What that means in practice, and why the equals sign matters so much.',
  twitterDescription: 'Bexley Selection Test numerical reasoning, taught live online: Year 5 maths, missing numbers, the equals sign.',
  pageName: '11 Plus Maths Tuition in Bexley',
  webPageDescription: 'Live online mathematics teaching for children preparing for the numerical reasoning section of the Bexley Selection Test, built on what the London Borough of Bexley, Quest Assessments and Bexley Grammar School publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 preparing for the Bexley Selection Test, teaching Year 5 number and problem solving, with missing-number reasoning at the centre.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Bexley',
  navLinks: [
    { href: '#selection', label: 'The test' },
    { href: '#numerical', label: 'Numerical reasoning' },
    { href: '#balance', label: 'The equals sign' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Bexley &middot; Bexley Selection Test, numerical reasoning &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Bexley',
  lede: 'Bexley does not call the maths in its selection test "maths". It calls it numerical reasoning, and families sometimes take the word reasoning to mean puzzles that sit outside school work. The council\'s own definition says otherwise: numerical reasoning "measures the ability to solve mathematical problems, with content not exceeding what children are expected to learn by the end of Year 5". So it is Year 5 maths, used to solve problems. The Year 5 curriculum has a line that sits right at the centre of that: children should solve problems "including understanding the meaning of the equals sign". This page covers what the council, Quest Assessments and the grammar schools publish about the test, and then that one idea, taught properly.',
  secondaryCta: { href: '#balance', label: 'See the equals-sign lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Bexley Selection Test.',
  heroNote: 'Maths only &middot; We do not teach verbal or non-verbal reasoning &middot; No link with Bexley\'s schools or council',
  spec: [
    ['Test', 'Bexley Selection Test'],
    ['Run by', 'London Borough of Bexley, with Quest Assessments'],
    ['Papers', 'Two, about 50 minutes each'],
    ['Maths is in', 'Paper Two, with non-verbal reasoning'],
    ['Called', 'Numerical reasoning'],
    ['Content ceiling', 'The end of Year 5'],
    ['Registration', 'March of Year 5'],
    ['We teach', 'Year 5 number for problem solving']
  ],
  capsuleQ: 'In short',
  capsule: 'The London Borough of Bexley runs one selection test for its four grammar schools, Beths, Bexley Grammar, Chislehurst and Sidcup, and Townley, with Quest Assessments as the provider. Children sit two multiple-choice papers of around 50 minutes; according to Quest, Paper One covers verbal ability and English comprehension and Paper Two numerical reasoning and non-verbal reasoning. The council defines numerical reasoning as solving mathematical problems with content no later than the end of Year 5, and weights it at 25% of the total. Registration is unusually early: for September 2027 entry it ran from 1 to 31 March 2026, in Year 5, and children at Bexley primaries were not entered automatically. The test itself was sat between 2 and 10 September 2026. We teach the Year 5 maths behind numerical reasoning, live online. Lesson one is free, then fees are USD 100 per month for a group place or USD 150 per month one to one.',

  picks: {
    eyebrow: 'Starting in Bexley',
    h2: 'Three courses behind numerical reasoning',
    lede: 'The right one depends on whether your child calculates well but stalls on problems, or the other way round.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'BEXLEY / 01', title: 'Numerical reasoning, taught as maths', note: 'Year 5 number and problem solving, with missing-number and equals-sign work every week.' },
      { course: 'mental-maths-mastery-kids', code: 'BEXLEY / 02', title: 'Fast, flexible arithmetic', note: 'Number facts that let a child see that 13 + 24 and 12 + 25 are the same without adding either.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'BEXLEY / 03', title: 'Solid primary foundations', note: 'For children in Year 4 whose place value and tables need to be secure first.' }
    ]
  },

  sections: [
    {
      id: 'selection', tint: 'tint', eyebrow: 'The Bexley Selection Test',
      h2: 'What the council, Quest and the schools publish',
      lede: 'The London Borough of Bexley publishes the arrangements and the content; Quest Assessments, the provider, publishes the paper structure with the council and the four schools. All read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Bexley Selection Test for September 2027 entry, from the London Borough of Bexley and Quest Assessments', head: ['Stage', 'Dates', 'As published'], rows: [
          ['Registration', '1 March to midnight 31 March 2026', 'Online, for children in Year 5 born 1 September 2015 to 31 August 2016. Late registrations are not accepted.'],
          ['Test at primary school centres', 'Wednesday 2 to Thursday 10 September 2026', 'For pupils at primary schools that act as test centres.'],
          ['Test at grammar school centres', 'Monday 7 to Thursday 10 September 2026', 'For all other registered pupils.'],
          ['Results', 'October 2026', 'The council gave the date as to be confirmed; Quest said early October.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The test is two booklets, each divided into timed sections, with multiple-choice questions and a set time for every section. The council says each paper "lasts approximately 50 minutes, plus additional time for instructions". Quest describes them as "two non-adaptive paper assessments": the same printed questions for every child, not a computer test that changes with each answer.',
            'Quest puts the numerical reasoning in Paper Two, alongside non-verbal reasoning. Answers are usually one of five options, A to E, marked on an answer sheet that a machine reads. Bexley Grammar School\'s own page says most questions are multiple choice, so we prepare children for the occasional question that asks for something else.'
          ],
          right: [
            'The registration window is worth underlining. In Bexley it is one month, in the March of Year 5, and the council says children at Bexley primary schools are not registered automatically. A family who assumes the school handles it can miss the test entirely. Tests are held in September on weekdays only, at primary schools acting as test centres or at the grammar schools.',
            'On equipment, the council is brief: "no additional equipment is required or allowed". On scoring, it says the total is weighted 50% verbal, 25% numerical and 25% non-verbal, and that the average total weighted age-standardised score is 200. Admissions after that are for the council and the schools to explain, and we do not.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.bexley.gov.uk/services/schools-and-education/selection-tests/about-test" rel="noopener" target="_blank">London Borough of Bexley, about the test</a> and <a class="ag-inline-link" href="https://www.bexley.gov.uk/services/schools-and-education/selection-tests/register-secondary-selection-test" rel="noopener" target="_blank">register for the secondary selection test</a>; <a class="ag-inline-link" href="https://www.questassessments.com/parent-guidance-consortium/bexley-selection-test" rel="noopener" target="_blank">Quest Assessments, Bexley Selection Test</a>; Bexley Grammar School, the Bexley Selection Test. Modern Age Coders has no connection with the council, Quest Assessments or any Bexley school.' }
      ]
    },
    {
      id: 'numerical', tint: 'plain', eyebrow: 'The word "reasoning"',
      h2: 'Numerical reasoning is Year 5 maths, used to solve problems',
      lede: 'The label causes more confusion than any other part of the Bexley test. The council\'s own sentence clears it up.',
      body: [
        { kind: 'two',
          leftH3: 'What the council says',
          left: [
            'In its information for parents, the London Borough of Bexley writes that "numerical reasoning measures the ability to solve mathematical problems, with content not exceeding what children are expected to learn by the end of Year 5". Two things are in that sentence: the content is ordinary school maths, and the skill is using it on problems.',
            'That rules out two common mistakes. One is buying books of number puzzles that have little to do with the curriculum. The other is racing into Year 6 topics, which the content ceiling says will not be needed.'
          ],
          rightH3: 'What reasoning adds',
          right: [
            'The reasoning part is the step between reading a question and calculating. Which operation? In which order? What is the question actually asking for? A child who calculates perfectly but guesses at the operation will score poorly on a numerical reasoning section.',
            'Much of that step comes down to one idea that Year 5 names directly: the equals sign. Children who see = as "the answer comes next" struggle with problems that are built backwards. Children who see it as "both sides are worth the same" can work in any direction.'
          ] },
        { kind: 'p', html: 'A note on the scale, because families ask. The council says the average total weighted age-standardised score is 200, "with approximately two-thirds of candidates scoring between 170 and 230". That is a description of how scores spread across all children, 30 points either side of the middle for most of them. It is not a target, and we do not treat it as one.' }
      ]
    },
    {
      id: 'balance', tint: 'deep', eyebrow: 'The lesson',
      h2: 'The equals sign as a balance, not a signal',
      lede: 'The national curriculum\'s own example is a good place to start: "13 + 24 = 12 + 25; 33 = 5 x ?". Neither has an answer sitting alone on the right.',
      body: [
        { kind: 'table', caption: 'Missing-number problems of the kind we teach for numerical reasoning (our own examples)', head: ['Problem', 'The reasoning', 'Answer'], rows: [
          ['48 + 27 = 50 + ?', 'The left number went up by 2, so the right must go down by 2', '25'],
          ['6 × 35 = 3 × ?', 'Halving one factor means doubling the other', '70'],
          ['? × 7 - 15 = 48', 'Work backwards: add 15 to get 63, then divide by 7', '9'],
          ['125 ÷ 5 = 250 ÷ ?', 'Doubling the first number means doubling the divisor too', '10'],
          ['1,000 - 382 = ? - 400', 'Add 18 to both numbers: the difference does not change', '1,018']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Each row can be done the long way, by working out one side and then finding the missing number. Each can also be done in seconds by keeping the balance: whatever happens to one side must be matched on the other. The curriculum\'s non-statutory guidance says Year 5 pupils "use and explain the equals sign to indicate equivalence, including in missing number problems", which is exactly this.',
            'On a multiple-choice paper the quick route has a second benefit. A child who knows that the missing number in 48 + 27 = 50 + ? must be a little less than 27 can discard any option that is not, before doing any sum at all.'
          ],
          right: [
            'The third row is the one that looks most like a puzzle and is most like algebra. Working backwards through operations, undoing the last step first, is the whole skill. We teach it with a simple picture: the number goes through a machine, times 7 then minus 15, and to find it we run the machine in reverse.',
            'None of this is beyond Year 5. All of it is what the word reasoning is pointing at. We practise it weekly, mixed in with ordinary calculation, so that a problem written backwards stops looking unusual.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 multiplication and division, statutory requirement and non-statutory guidance. The problems in the table are written by Modern Age Coders.' }
      ]
    },
    {
      id: 'spring', tint: 'tint', eyebrow: 'The Bexley calendar',
      h2: 'A March registration changes the plan',
      lede: 'Most selective areas register families in late spring or summer. Bexley\'s one-month window in March of Year 5 moves the decision earlier, and the preparation with it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Decide in winter', p: 'Families need to have decided about the test by March of Year 5, so any conversation about maths readiness belongs in the autumn or winter before.' },
          { h3: 'Build through spring', p: 'After registration there are roughly five months to the test. That is enough to make Year 5 number quick and to embed missing-number reasoning, if the time is used steadily.' },
          { h3: 'Rehearse in summer', p: 'Timed sections and the answer sheet come last. Quest publishes familiarisation booklets, which families receive a link to after registering. Use them.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Because tests take place on school weekdays in early September, sometimes in a child\'s own primary school, the day itself can feel ordinary. Children tend to cope well when the paper feels like a familiar kind of work rather than an event.',
            'We do not reproduce Quest material or any test questions. Our questions are written to the Year 5 curriculum and to the published structure of the test: timed sections, multiple choice, one paper mixing numerical and non-verbal reasoning.'
          ],
          right: [
            'The council notes that Year 6 pupils can take the test only once. There is no second go in the same year, which is another reason to prepare the content calmly across Year 5 rather than in a summer rush.',
            'Paper Two mixes numerical and non-verbal reasoning. We teach only the numerical part. For non-verbal reasoning, the familiarisation booklets show the question types; we are not the right people to coach them.'
          ] }
      ]
    },
    {
      id: 'schools', tint: 'plain', eyebrow: 'Bexley\'s grammar schools',
      h2: 'Four schools, one test, lessons at home',
      lede: 'The council names the four grammar schools that use the Bexley Selection Test. We list them to make the scope of this page clear.',
      body: [
        { kind: 'table', caption: 'Bexley\'s grammar schools, as the London Borough of Bexley lists them', head: ['School', 'As the council describes it'], rows: [
          ['Beths Grammar School', 'Boys'],
          ['Bexley Grammar School', 'Mixed'],
          ['Chislehurst and Sidcup Grammar School', 'Mixed'],
          ['Townley Grammar School', 'Girls']
        ] },
        { kind: 'two', mt: true,
          left: [
            'A single test is used for all four schools. Children whose primary school is not a test centre, including those from outside the borough, sit it at one of the four grammar schools.',
            'For coding and computing in the borough, see our <a class="ag-inline-link" href="/coding-classes-in-bexley-london">Bexley coding page</a>.'
          ],
          right: [
            'Our classes are grouped by level. A Bexley child is taught with children at the same stage of Year 5 maths from across the UK, five to ten in a group, all online.',
            'We have no connection with these schools, the council or Quest Assessments, and we do not advise on applications, oversubscription or places.'
          ] },
        { kind: 'source', html: 'Source: London Borough of Bexley, about the test, read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Timeline',
    h2: 'From the autumn of Year 5 to a September test',
    lede: 'For a child in Year 5 now, the next registration window is expected in March 2027. The council publishes the dates.',
    table: { caption: 'Four stages around a March registration', head: ['When', 'Stage', 'You will notice'], rows: [
      ['Autumn, Year 5', '1. Number facts', 'Tables, place value and doubling and halving are instant'],
      ['Winter, Year 5', '2. The equals sign', 'Missing-number problems solved by balancing, not by long calculation'],
      ['Spring and early summer', '3. Problems', 'Wordy questions turned into the right calculation first time'],
      ['Summer holiday', '4. Sections', 'Timed sections of numerical reasoning finished calmly, answers marked cleanly']
    ] },
    left: { h3: 'After registration', ps: [
      'If you registered in March and are starting now, there is still time. Keep the order: facts, then balance, then problems, then timing.',
      'At the trial lesson we will say honestly how far a few months can go.'
    ] },
    right: { h3: 'Beyond the test', ps: [
      'Missing-number reasoning is the first step into algebra. Many pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where variables make the idea concrete.',
      'Children who enjoy it often move on to the challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Bexley families',
    lede: 'By stage, with a link to every syllabus.',
    bands: [
      { num: 'I', h3: 'Towards the Bexley test', sub: 'Years 3 to 5', courses: [
        { code: 'BXM / 1', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Year 5 maths for numerical reasoning problems.' },
        { code: 'BXM / 2', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Balance tricks, doubling, halving and quick facts.' },
        { code: 'BXM / 3', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Core number sense for younger children.' },
        { code: 'BXM / 4', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'A physical start to calculating in the head.' }
      ] },
      { num: 'II', h3: 'Secondary maths', sub: 'Year 6 and up', courses: [
        { code: 'BXM / 5', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Where missing numbers become equations.' },
        { code: 'BXM / 6', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Algebra and problem solving to GCSE standard.' },
        { code: 'BXM / 7', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Reasoning with numbers at its most demanding.' }
      ] },
      { num: 'III', h3: 'Coding with numbers', sub: 'Maths you can run', courses: [
        { code: 'BXM / 8', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Variables and equations brought to life in Python.' },
        { code: 'BXM / 9', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Logic and sequence in a visual language.' },
        { code: 'BXM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first text language, once blocks feel easy.' }
      ] },
      { num: 'IV', h3: 'Later on', sub: 'Teenagers', courses: [
        { code: 'BXM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Faster calculation for secure mathematicians.' },
        { code: 'BXM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Equations that learn from data.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Scheduling',
    h2: 'Lesson times that suit a primary child',
    lede: 'We are an Indian school teaching live over video. India keeps the same clock all year while the UK moves between Greenwich Mean Time and British Summer Time, so we schedule by UK time: late afternoon and early evening on weekdays, and weekend mornings.',
    slots: [
      { time: 'Weekday, after school', l: 'Before the evening gets late.' },
      { time: 'Weekend, morning', l: 'A fresh start for tired children.' },
      { time: 'Holidays', l: 'Extra short lessons when school is out.' }
    ],
    cells: [
      { h3: 'Same teacher weekly', p: 'Mistakes are remembered and followed up.' },
      { h3: 'Honest updates', p: 'A few frank lines to parents, not glossy reports.' },
      { h3: 'Five to ten learners', p: 'Grouped by level, so the lesson fits each child.' },
      { h3: 'Our own material', p: 'Questions written by us; no Quest or test material reproduced.' },
      { h3: 'One to one available', p: 'For focused help on a particular weakness.' },
      { h3: 'Numerical only', p: 'No verbal or non-verbal coaching, no advice on admissions.' }
    ]
  },

  projectsH2: 'What our students build later',
  projectsLede: 'Four projects published by students at our school; every one began with the arithmetic of Year 5. More on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' reviews from our Google profile, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly fee in US dollars, the same for every family outside India. You can stop at any time.',
    free: ['A proper lesson from a teacher', 'Our straight assessment afterwards', 'No payment card required'],
    group: ['Five to ten children at one level', 'A familiar teacher every week', 'Work reviewed together', 'A course certificate'],
    one: ['A teacher for your child only', 'Aimed precisely at the gaps', 'Useful in the months after registration']
  },

  faq: {
    eyebrow: 'Bexley test questions',
    h2: 'What Bexley families ask us',
    items: [
      { q: 'What is numerical reasoning in the Bexley test?', a: 'The London Borough of Bexley says numerical reasoning measures the ability to solve mathematical problems, with content not exceeding what children are expected to learn by the end of Year 5. In practice it is Year 5 maths applied to problems.' },
      { q: 'Which paper has the maths?', a: 'According to Quest Assessments, Paper Two covers numerical reasoning and non-verbal reasoning. Paper One covers verbal ability and English comprehension. Each paper lasts around 50 minutes.' },
      { q: 'How much does numerical reasoning count?', a: 'The council says the total is weighted 50% verbal ability, 25% numerical ability and 25% non-verbal ability, with scores age-standardised.' },
      { q: 'When do we register for the Bexley test?', a: 'In March of Year 5. For September 2027 entry the window was 1 to 31 March 2026, and the council says children at Bexley primary schools are not registered automatically. Dates for 2028 entry are published by the council.' },
      { q: 'When is the test sat?', a: 'In early September of Year 6, on weekdays. For 2027 entry it ran between 2 and 10 September 2026 at primary school centres and 7 to 10 September 2026 at grammar school centres.' },
      { q: 'Is the Bexley test multiple choice?', a: 'Quest says all questions are multiple choice, usually with five options, marked on an answer sheet. Bexley Grammar School says most are. We prepare children for both possibilities.' },
      { q: 'Can my child bring a calculator or ruler?', a: 'The council says no additional equipment is required or allowed.' },
      { q: 'Do you teach non-verbal reasoning as well?', a: 'No. We teach the numerical reasoning, which is maths, and nothing else in the test. We do not advise on school places.' },
      { q: 'Do you use Quest papers?', a: 'No. We write our own questions and do not reproduce familiarisation or test material.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. After that, USD 100 a month for a group place or USD 150 a month for one to one, with no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Also for Bexley',
    h2: 'Related pages',
    lede: 'Coding in Bexley, the national 11 plus page, and a neighbouring county test.',
    items: [
      { href: '/coding-classes-in-bexley-london', label: 'Coding classes in Bexley', p: 'Our coding page for the borough.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national page on 11 plus maths.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'The county next door, with its own test.' },
      { href: '/11-plus-maths-tuition-sutton', label: '11 plus maths in Sutton', p: 'A two-stage test elsewhere in south London.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges month by month.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we write about.' }
    ]
  },

  start: {
    h2: 'Request a free lesson',
    lede: 'Just tell us the year group and whether numbers or word problems are the sticking point. We teach a genuine lesson and then tell you plainly what we found.',
    readFirst: 'Browsing first? See the <a class="ag-inline-link" href="/courses">courses and syllabuses</a>, our <a class="ag-inline-link" href="/how-we-teach">teaching approach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> through maths and coding.',
    note: 'WhatsApp is quickest. We are based in India, our number is Indian, and we have no UK premises.',
    formNote: 'We never ask for card details here. You will get one reply to fix a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Competition maths' }
      ] },
      { h4: 'Local and national', links: [
        { href: '/coding-classes-in-bexley-london', label: 'Coding in Bexley' },
        { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The council sets the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-bxm .ag-hero h1 { letter-spacing: -0.017em; }
.ag-root.ag-bxm .ag-capsule { border-left-width: 6px; border-radius: 0 8px 8px 0; }
.ag-root.ag-bxm .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-bxm .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.015em; }
.ag-root.ag-bxm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; font-weight: 600; }
.ag-root.ag-bxm .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-bxm .ag-three h3 { letter-spacing: -0.009em; }
.ag-root.ag-bxm .ag-slots { gap: 0.9rem; }
`,

  mustMention: ['Bexley Selection Test', 'numerical reasoning', 'Chislehurst and Sidcup Grammar School', 'Townley Grammar School', 'Beths Grammar School', '170 and 230', 'meaning of the equals sign', 'non-adaptive']
};
