'use strict';
// 11 plus maths tuition in Torbay (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Torbay Council, secondary applications: "Children who want to attend a selective school need to sit a selective
//    test", also for "the selective stream at The Spires College"; "All selective schools in Torbay use the same test
//    results. Students only need to sit the test once."; registration form to the school by midday Wednesday 15 July
//    2026, "At the very latest ... by midday on Wednesday 2 September 2026"; schools listed: Churston Ferrers Grammar
//    School, The Spires College, Torquay Boys' Grammar School, Torquay Girls' Grammar School.
//  - Torbay Council, secondary application timetable: "2 September 2026 (midday) Closing date for receipt of
//    Registration Forms for selective schools"; "19 September 2026 Selective testing day for all grammar schools and The
//    Spires selective places in Torbay".
//  - Torquay Boys' Grammar School, apply to join us: tests Saturday 19 September 2026; registration opened 1 March 2026;
//    "by Wednesday 15 July 2026, if possible (or by midday on Friday 4 September 2026 at the latest)"; "There are two tests
//    (approx. 50 minutes each), one for English and one for Maths"; outcome on or soon after 12 October 2026, "not the
//    actual scores, but a Yes or No". TBGS admission policy 2027-8: "testing before preference"; "Parents will not be told
//    their child's actual scores, they will be given a `Yes' or `No' indicating whether the child met the academic
//    threshold"; scores "will not be disclosed at any point".
//  - Torquay Girls' Grammar School, admissions test: "papers designed by an external assessment authority (GL) in English
//    and Maths"; only English and maths familiarisation needed; alternative date Friday 25th September 2026 for illness or
//    other acceptable reason.
//  - Churston Ferrers Grammar School, entry requirements: "the test is administered by GL Assessment and evaluates English
//    and Maths. It is designed around standard primary school learning up to the end of Year 5"; "There are no verbal or
//    non-verbal reasoning papers"; "There is a standardised pass mark, but the exact threshold changes year on year".
//  - National curriculum in England, mathematics, Year 5 measurement: "measure and calculate the perimeter of composite
//    rectilinear shapes in centimetres and metres"; "calculate and compare the area of rectangles (including squares) ...
//    and estimate the area of irregular shapes".
// Spine: an English-and-maths-only test whose outcome is a plain Yes or No, never a score; nothing to chase but secure
// maths. Lesson family: area and perimeter of rectangles and composite shapes (same area, different perimeter).

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'TORBAY SELECTIVE TEST', label: '11 plus maths in Torbay', blurb: 'Torbay tests English and maths only, and parents hear a Yes or a No, never a score. So there is no number to chase, only secure maths.' },
  slug: '11-plus-maths-tuition-torbay',
  code: 'tbm',
  accent: '#8A544C',
  accentRationale: 'Torbay 11 plus maths: a red-cliff sandstone, chosen by colour distance from every accent on the site (4.9:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Torbay',
  title: '11 Plus Maths Tuition Torbay | Torquay and Churston 11+ Maths',
  description: 'Live online 11 plus maths for Torbay\'s selective test: English and maths only, a Yes or No outcome, what the schools publish, and Year 5 area and perimeter taught.',
  ogDescription: 'Torbay\'s grammar schools test English and maths only, and parents are told Yes or No, never a score. What that means for preparing the maths.',
  twitterDescription: 'Torbay 11 plus maths, taught live online: an English-and-maths test with a Yes or No outcome.',
  pageName: '11 Plus Maths Tuition in Torbay',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Torbay selective test used by Churston Ferrers Grammar School, Torquay Boys\' and Torquay Girls\' Grammar Schools and The Spires College, based on what the schools and Torbay Council publish.',
  courseDescription: 'Live online maths classes for Torbay children in Years 4 and 5, teaching Year 5 maths for a GL maths paper of about fifty minutes, with measurement and geometry given full weight.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Torbay',
  navLinks: [
    { href: '#torbay', label: 'The test' },
    { href: '#yesno', label: 'Yes or No' },
    { href: '#area', label: 'Area' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Torbay &middot; Selective test maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Torbay',
  lede: 'Torbay\'s selective test is one of the simplest in England to describe. The schools say it is two papers of about fifty minutes, one English and one maths, set by GL Assessment, and Churston Ferrers Grammar School adds: "There are no verbal or non-verbal reasoning papers." What families receive afterwards is simpler still. Torquay Boys\' Grammar School\'s admission policy says parents "will not be told their child\'s actual scores"; they get a Yes or a No, and the scores "will not be disclosed at any point". There is no mark to aim at and no number to compare with a neighbour\'s child. The only sensible target is maths that is secure across the whole of Year 5. This page sets out what the four schools and Torbay Council publish, then teaches a Year 5 area where many children are less secure than they look: area and perimeter.',
  secondaryCta: { href: '#yesno', label: 'See what Yes or No means' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Torbay 11 plus.',
  heroNote: 'Maths only &middot; We do not teach English for the test &middot; No connection with any Torbay school',
  spec: [
    ['Schools', 'Churston Ferrers, Torquay Boys\', Torquay Girls\', Spires selective stream'],
    ['Provider', 'GL Assessment'],
    ['Papers', 'English and Maths, about 50 minutes each'],
    ['Reasoning papers', 'None'],
    ['Content', 'Primary learning up to the end of Year 5'],
    ['Outcome', 'Yes or No, no scores given'],
    ['Test day', 'One shared day in September'],
    ['We teach', 'Year 5 maths, securely']
  ],
  capsuleQ: 'In short',
  capsule: 'Torbay Council says all the selective schools in Torbay use the same test results, so children sit the test once: Churston Ferrers Grammar School, Torquay Boys\' Grammar School, Torquay Girls\' Grammar School and the selective stream at The Spires College. The schools describe two GL Assessment papers of about fifty minutes, English and Maths, with no verbal or non-verbal reasoning, designed around primary learning up to the end of Year 5. For September 2027 entry the test was on Saturday 19 September 2026, with registration from 1 March and a preferred deadline of 15 July 2026. Families are told whether their child met the academic threshold, as a Yes or No, and not the scores. We teach the maths, live online. Lesson one costs nothing; after that tuition is USD 100 a month in a small group or USD 150 a month one to one.',

  picks: {
    eyebrow: 'Torbay starting points',
    h2: 'Three courses for an English-and-maths test',
    lede: 'Maths is one of only two papers. Choose by which parts of Year 5 your child is least sure of.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'TORBAY / A', title: 'Torbay 11 plus maths', note: 'Every Year 5 strand, with measures and shape given as much time as number.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'TORBAY / B', title: 'Shoring up the basics', note: 'For children whose Year 3 and 4 maths needs settling first.' },
      { course: 'mental-maths-mastery-kids', code: 'TORBAY / C', title: 'Calculation without a calculator', note: 'Quick, reliable arithmetic for a fifty-minute paper.' }
    ]
  },

  sections: [
    {
      id: 'torbay', tint: 'tint', eyebrow: 'The Torbay test',
      h2: 'What the schools and Torbay Council publish',
      lede: 'Torbay Council explains the shared arrangement; the schools publish the details. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Torbay selective test for September 2027 entry', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration opens', '1 March 2026', 'Registration forms go to the schools, not the council.'],
          ['Preferred deadline', 'Midday, Wednesday 15 July 2026', 'The council and Torquay Boys\' Grammar both give this date.'],
          ['Latest deadline', 'Early September 2026', 'The council gives midday 2 September; Torquay Boys\' Grammar gives midday 4 September.'],
          ['Test', 'Saturday 19 September 2026', 'One day for all the grammar schools and The Spires selective places.'],
          ['Alternative date', 'Friday 25 September 2026', 'Offered by Torquay Girls\' Grammar for illness or another accepted reason.'],
          ['Outcome', 'On or soon after 12 October 2026', 'Yes or No, according to Torquay Boys\' Grammar.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Torbay Council says "All selective schools in Torbay use the same test results. Students only need to sit the test once." The schools list the papers: Torquay Boys\' Grammar describes "two tests (approx. 50 minutes each), one for English and one for Maths"; Torquay Girls\' Grammar describes "papers designed by an external assessment authority (GL) in English and Maths".',
            'Churston Ferrers Grammar School says the test "evaluates English and Maths. It is designed around standard primary school learning up to the end of Year 5", and that "There are no verbal or non-verbal reasoning papers". It adds that there is a standardised pass mark and that "the exact threshold changes year on year".'
          ],
          right: [
            'The latest registration deadline differs slightly between sources: the council gives midday on 2 September 2026, Torquay Boys\' Grammar midday on 4 September. Both say 15 July is the date to aim for. Families should follow the school they register with and not rely on the later date.',
            'Torquay Boys\' Grammar describes its process as "testing before preference": children sit the test before families complete the council application. Places are then decided under each school\'s published policy, which we do not advise on.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.torbay.gov.uk/schools-and-learning/admissions/secondary-applications/" rel="noopener" target="_blank">Torbay Council, secondary applications</a> and its application timetable; <a class="ag-inline-link" href="https://www.tbgs.co.uk/join-us/apply-to-join-us/" rel="noopener" target="_blank">Torquay Boys\' Grammar School, apply to join us</a>, and its admission policy for 2027-8; <a class="ag-inline-link" href="https://www.tggsacademy.org/tggsadmissionstest" rel="noopener" target="_blank">Torquay Girls\' Grammar School, admissions test</a>; Churston Ferrers Grammar School, entry requirements. Modern Age Coders has no connection with any Torbay school, GL Assessment or Torbay Council.' }
      ]
    },
    {
      id: 'yesno', tint: 'plain', eyebrow: 'A Yes or a No',
      h2: 'No score to chase, so chase understanding',
      lede: 'Most areas send families a number. Torquay Boys\' Grammar\'s policy says Torbay families get a word.',
      body: [
        { kind: 'two',
          leftH3: 'What is published',
          left: [
            'The policy says parents "will not be told their child\'s actual scores, they will be given a \'Yes\' or \'No\' indicating whether the child met the academic threshold to be eligible for admission". The selection test score "will not be disclosed at any point, including when places are formally offered in March".',
            'Churston Ferrers adds that the threshold changes year to year with the cohort, and prefers to talk families through it rather than "reduce it to a number on a page".'
          ],
          rightH3: 'What it means for maths',
          right: [
            'With no score ever shown, there is nothing to compare, predict or chase. Families sometimes find that unsettling. We find it clarifying: the one thing worth working on is the maths itself, across every part of Year 5, until it is secure.',
            'It also removes a trap. Where scores are published, preparation drifts towards squeezing extra marks from favourite topics. Where they are not, breadth matters more: a child with no weak strands is the child most likely to hear Yes.'
          ] },
        { kind: 'p', html: 'Because English and maths are the only two papers, the maths is a large part of what the schools see. We do not know how the two are combined, and the schools do not publish it. We simply make sure the maths half is as strong as it can be.' }
      ]
    },
    {
      id: 'area', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Area and perimeter: same shape, different questions',
      lede: 'The Year 5 curriculum asks children to "measure and calculate the perimeter of composite rectilinear shapes" and to "calculate and compare the area of rectangles". Mixing the two up is one of the commonest primary errors.',
      body: [
        { kind: 'table', caption: 'Area and perimeter in Year 5, with questions of our own', head: ['Idea', 'Our question', 'Answer'], rows: [
          ['Rectangle', 'A rectangle is 7 cm by 4 cm. Find its perimeter and its area.', 'Perimeter 22 cm; area 28 cm²'],
          ['Same area, different perimeter', 'Rectangles of 6 by 4, 12 by 2 and 24 by 1. Which has the longest perimeter?', '24 by 1: perimeters 20, 28 and 50, all with area 24'],
          ['Composite shape', 'A 10 m by 4 m rectangle has a 3 m square joined to the middle of one long side. Find the total area.', '40 + 9 = 49 m²'],
          ['Its perimeter', 'What is the perimeter of that same shape?', '34 m: the rectangle\'s 28 m, plus the square\'s three outer sides, minus the 3 m they share'],
          ['Estimating', 'An irregular shape covers 18 whole squares and 8 half squares on 1 cm paper. Estimate its area.', 'About 22 cm²']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The second row carries the big idea: area and perimeter are different measurements, and one does not decide the other. Three rectangles with the same area of 24 have perimeters of 20, 28 and 50. The long, thin one has the longest edge. Children who believe "bigger area means bigger perimeter" get questions like this wrong confidently.',
            'Units make the difference visible. Perimeter is a length, in cm or m. Area counts squares, in cm² or m². Writing the unit before the number forces the child to decide which one they are finding.'
          ],
          right: [
            'The composite shape is where care pays off. Area is easy to add up. Perimeter needs a walk round the outside: the 3 m edge where the square meets the rectangle is inside the shape now, so it no longer counts. We teach children to trace the outline with a finger, or a pencil, and add only what they touch.',
            'Estimating irregular areas, the last row, uses the Year 5 approach of counting whole squares and pairing up halves. It is quick and sensible, and it guards against answers that are wildly too big or small.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 measurement (statutory requirements). The questions are our own.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Breadth for a test with no published score',
      lede: 'When the result is Yes or No, gaps matter more than peaks. This is how we plan a Torbay child\'s year.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Map the gaps', p: 'The first lessons find which Year 5 strands are shaky: number, fractions, measures, shape or data.' },
          { h3: 'Fill them in order', p: 'Weakest strands first, then the rest, so nothing is left thin by the summer.' },
          { h3: 'Fifty-minute practice', p: 'Timed practice papers only in the last weeks, once the content is secure.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'Torquay Girls\' Grammar points families to GL\'s free familiarisation material for English and maths, noting those are the only two areas tested. That is the right way to see the format. We do not reproduce GL material; our questions are our own.',
            'English is the other paper. We do not teach it for the test, and families should plan for it separately.'
          ],
          right: [
            'The Spires College uses the same test for its selective stream. The schools\' results process and admissions rules are theirs; we give no advice on them.',
            'If your child is ill on test day, Torquay Girls\' Grammar describes an alternative date for accepted reasons. Check the school you registered with.'
          ] }
      ]
    },
    {
      id: 'bay', tint: 'plain', eyebrow: 'Torquay, Paignton and Brixham',
      h2: 'Four selective routes, one test, one online lesson',
      lede: 'Torbay Council names the four schools that use the shared test. We list them only to show what this page covers.',
      body: [
        { kind: 'table', caption: 'Schools using the Torbay selective test, as Torbay Council lists them', head: ['School', 'Selective places'], rows: [
          ['Churston Ferrers Grammar School', 'Grammar school'],
          ['Torquay Boys\' Grammar School', 'Grammar school'],
          ['Torquay Girls\' Grammar School', 'Grammar school'],
          ['The Spires College', 'A selective stream']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, so a child in Paignton, Brixham, Torquay or across the Dart is taught the same way, in groups of five to ten matched by level.',
            'For Plymouth\'s grammar schools, which use a different test, see our <a class="ag-inline-link" href="/11-plus-maths-tuition-plymouth">Plymouth 11 plus page</a>.'
          ],
          right: [
            'For coding lessons across the south west and the rest of the country, our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> lists every area.',
            'We have no connection with any of these schools, GL Assessment or Torbay Council, and we do not advise on applications or places.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages, no strand left thin',
    lede: 'For today\'s Year 5, registration should open around March 2027 and the test fall in September of Year 6. The schools publish the dates.',
    table: { caption: 'From finding gaps to a full paper', head: ['When', 'Stage', 'Evidence'], rows: [
      ['Autumn, Year 5', '1. Find the gaps', 'A clear picture of which Year 5 strands are weak'],
      ['Winter and spring', '2. Fill them', 'Each weak strand brought up to secure, one at a time'],
      ['Summer term', '3. Measures and shape', 'Area, perimeter, angles and conversions as reliable as number'],
      ['Summer holiday', '4. Fifty minutes', 'A timed maths paper completed calmly']
    ] },
    left: { h3: 'A late start', ps: [
      'The later the start, the more important it is to find the gaps first rather than practise papers.',
      'We will tell you honestly at the free lesson what the time allows.'
    ] },
    right: { h3: 'After the Yes or No', ps: [
      'Measurement and geometry grow into secondary maths and science. Some pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, calculating areas in code.',
      'Others enjoy the problems on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Torbay families',
    lede: 'Grouped by stage, each linked to a full syllabus.',
    bands: [
      { num: 'I', h3: 'For the Torbay test', sub: 'Years 3 to 5', courses: [
        { code: 'TBM / 01', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Torbay', blurb: 'Every Year 5 strand, no gaps.' },
        { code: 'TBM / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths catch-up', blurb: 'Earlier years, made secure.' },
        { code: 'TBM / 03', slug: 'mental-maths-mastery-kids', title: 'Mental arithmetic practice', blurb: 'Quick calculation, no calculator.' },
        { code: 'TBM / 04', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus-based maths', blurb: 'A tactile start for younger children.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'TBM / 05', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Lower secondary maths course', blurb: 'Area, volume and algebra.' },
        { code: 'TBM / 06', slug: 'gcse-mathematics-mastery', title: 'GCSE mathematics (all boards)', blurb: 'Foundation and higher.' },
        { code: 'TBM / 07', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad maths', blurb: 'Hard problems for enthusiasts.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Shapes in code', courses: [
        { code: 'TBM / 08', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Compute area and perimeter in Python.' },
        { code: 'TBM / 09', slug: 'scratch-programming-complete-course', title: 'Scratch, start to finish', blurb: 'Draw shapes with code.' },
        { code: 'TBM / 10', slug: 'python-ai-kids-masterclass', title: 'Python and AI for juniors', blurb: 'A first typed language.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'TBM / 11', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic speed maths course', blurb: 'Fast methods, firmly founded.' },
        { code: 'TBM / 12', slug: 'ai-ml-masterclass-teens', title: 'AI and ML (teenagers)', blurb: 'Maths behind modern tools.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timetable',
    h2: 'After-school and weekend lessons',
    lede: 'Our teachers are in India and teach live. Torbay primary pupils are booked into after-school or Saturday and Sunday morning slots, fixed in UK time; when the clocks change, we move, not you.',
    slots: [
      { time: 'After school', l: 'An early-evening hour.' },
      { time: 'Weekend mornings', l: 'A calm start to the day.' },
      { time: 'Summer holiday', l: 'Extra sessions before September.' }
    ],
    cells: [
      { h3: 'A familiar face', p: 'One teacher for the year.' },
      { h3: 'Honest words', p: 'What is secure and what is not, briefly.' },
      { h3: 'Small, matched classes', p: 'Five to ten, grouped by level.' },
      { h3: 'Written in-house', p: 'No GL papers copied.' },
      { h3: 'Private sessions', p: 'For a specific strand.' },
      { h3: 'Maths is our job', p: 'No English coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Shapes today, projects later',
  projectsLede: 'Four things our students have built and published, each resting on primary maths like area and number. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews by parents on Google, copied exactly.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly US dollar price for families outside India. Nothing to join; stop at any time.',
    free: ['A taught lesson', 'A frank view', 'No card required'],
    group: ['Five to ten pupils, one level', 'A regular teacher', 'Work checked together', 'Certificate at the end'],
    one: ['One child, one teacher', 'Gaps first', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Torbay questions',
    h2: 'What Torbay families ask us',
    items: [
      { q: 'What is in the Torbay 11 plus?', a: 'The schools describe two GL Assessment papers of about 50 minutes each, one English and one Maths. Churston Ferrers says there are no verbal or non-verbal reasoning papers.' },
      { q: 'Do we sit the test for each school?', a: 'No. Torbay Council says all selective schools in Torbay use the same test results, so children only sit it once.' },
      { q: 'Will we be told our child\'s score?', a: 'Torquay Boys\' Grammar\'s policy says parents are told Yes or No, whether the child met the academic threshold, and that scores are not disclosed at any point.' },
      { q: 'What maths is tested?', a: 'Churston Ferrers says the test is designed around standard primary school learning up to the end of Year 5.' },
      { q: 'When is the registration deadline?', a: 'For 2027 entry, the council and Torquay Boys\' Grammar asked for registration by 15 July 2026, with a latest date in early September (2 September according to the council, 4 September according to the school).' },
      { q: 'When is the next test?', a: 'Dates for 2028 entry had not been published when we checked on 26 September 2026. For 2027 entry, the test was on Saturday 19 September 2026.' },
      { q: 'Does The Spires College use the same test?', a: 'Yes, for its selective stream, according to Torbay Council.' },
      { q: 'Do you teach English?', a: 'No. We teach maths only, and we do not advise on applications or places.' },
      { q: 'Do you use GL papers?', a: 'No. We write our own questions. GL publishes free familiarisation material for the format.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. After that, USD 100 per month in a small group or USD 150 per month individually.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Devon families',
    lede: 'Plymouth\'s test, our national page, and coding for children.',
    items: [
      { href: '/11-plus-maths-tuition-plymouth', label: '11 plus maths in Plymouth', p: 'A different test, with maths on its own Saturday.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national picture.' },
      { href: '/best-coding-class-in-exeter', label: 'Coding classes in Exeter', p: 'Programming for Devon children.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding for UK children', p: 'A primary child\'s first steps in code.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges, dated.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every nation, city and county we cover.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson for Torbay',
    lede: 'Tell us your child\'s year and which parts of maths feel least secure. We teach a real lesson and give you an honest verdict afterwards.',
    readFirst: 'Reading first? See every <a class="ag-inline-link" href="/courses">syllabus</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is the quickest route. We are in India, with an Indian number and no office in Devon.',
    formNote: 'No card details. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Primary maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'Devon and national', links: [
        { href: '/11-plus-maths-tuition-plymouth', label: '11 plus maths in Plymouth' },
        { href: '/best-coding-class-in-exeter', label: 'Coding in Exeter' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the test; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-tbm .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-tbm .ag-capsule { border-left-width: 6px; border-radius: 0 7px 7px 0; }
.ag-root.ag-tbm .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-tbm .ag-table caption { text-align: left; font-weight: 650; letter-spacing: 0.015em; }
.ag-root.ag-tbm .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-tbm .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-tbm .ag-three h3 { letter-spacing: -0.01em; }
.ag-root.ag-tbm .ag-slots { gap: 1.09rem; }
`,

  mustMention: ['Churston Ferrers Grammar School', 'Torquay Boys\' Grammar School', 'Torquay Girls\' Grammar School', 'The Spires College', 'testing before preference', 'same test results', 'will not be disclosed at any point', 'Same area, different perimeter']
};
