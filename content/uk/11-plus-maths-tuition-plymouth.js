'use strict';
// 11 plus maths tuition in Plymouth (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - Plymouth City Council, 11 Plus: "Plymouth has 3 Grammar Schools": Devonport High School for Boys, Devonport High
//    School for Girls, Plymouth High School for Girls; go to each school's website for the exam.
//  - Plymouth City Council, school admissions parent's guide: those three schools "admit students based on academic
//    ability demonstrated through an entrance exam"; "The 11+ examination will take place over two Saturdays within
//    September: Saturday 12 September 2026 Saturday 19 September 2026"; results 9 October 2026 by post (boys' school),
//    15 October 2026 by email (girls' schools).
//  - Plymouth High School for Girls, The 11 Plus Examination Process: "Our 11 Plus assessment is provided by Quest
//    Assessments. Your child will sit an English paper and Maths paper."; "English: 40 minutes, 60 questions / Maths: 40
//    minutes, 60 questions / Both papers are split into two sections"; optional July practice examination; DHSB adds a
//    creative writing task; "No content beyond Year 5 of the National Curriculum will be assessed"; note to tutors:
//    "Deep comprehension of Year 5 English and Maths topics", "Confident application of skills in unfamiliar contexts",
//    "Development of reasoning and problem-solving abilities within the Year 5 framework for mathematics".
//  - PHSG FAQ: "English Comprehension and Mathematics - multiple choice papers. Verbal reasoning, non-verbal reasoning and
//    spatial reasoning are not tested."; "In 2026 ... 40 minutes each"; "60 questions each. The number of questions can
//    vary year-on-year."; practice exam optional and not counted; registration from mid/late April to noon 31 August.
//  - PHSG / DHSG timelines 2027: registration 27 April to 31 August 2026; practice exam (maths and English together) and
//    results by 17 July 2026; "12 September 2026 - Saturday 11 Plus real test - date 1 Quest Assessment English
//    comprehension (no writing)"; "19 September 2026 - Saturday ... date 2 Quest Assessment Maths"; results 15 October 2026.
//  - DHSB 11+ familiarisation: "Regrettably, we are unable to share Quest familiarisation Maths paper."
//  - National curriculum in England, mathematics, Year 5 geometry (position and direction): "identify, describe and
//    represent the position of a shape following a reflection or translation, using the appropriate language, and know
//    that the shape has not changed"; guidance: first-quadrant grids, reflection in lines parallel to the axes.
// Spine: Plymouth gives maths a Saturday of its own, 60 questions in 40 minutes, and the schools run their own July
// practice exam. Lesson family: reflection and translation on a grid. Allocation rules (278, cut-offs): not used.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'PLYMOUTH 11+', label: '11 plus maths in Plymouth', blurb: 'Plymouth sets maths on its own Saturday: sixty questions in forty minutes, with the schools\' own practice exam in July.' },
  slug: '11-plus-maths-tuition-plymouth',
  code: 'plm',
  accent: '#37687A',
  accentRationale: 'Plymouth 11 plus maths: a Sound sea-blue, chosen by colour distance from every accent on the site (4.94:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Plymouth',
  title: '11 Plus Maths Tuition Plymouth | Quest Maths Paper, Online',
  description: 'Live online 11 plus maths for Plymouth\'s three grammar schools: a 40-minute, 60-question maths paper on its own Saturday, and Year 5 geometry taught properly.',
  ogDescription: 'Plymouth\'s 11 plus puts maths on a Saturday of its own: sixty multiple-choice questions in forty minutes. What that means, and the Year 5 maths behind it.',
  twitterDescription: 'Plymouth 11 plus maths, taught live online: 60 questions, 40 minutes, Year 5 content.',
  pageName: '11 Plus Maths Tuition in Plymouth',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Plymouth 11 plus used by Devonport High School for Boys, Devonport High School for Girls and Plymouth High School for Girls, based on what the schools and Plymouth City Council publish.',
  courseDescription: 'Live online maths classes for Plymouth children in Years 4 and 5, teaching Year 5 maths for a fast multiple-choice paper of about sixty questions in forty minutes.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Plymouth',
  navLinks: [
    { href: '#plymouth', label: 'The exam' },
    { href: '#saturday', label: 'Maths Saturday' },
    { href: '#grid', label: 'Reflections' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Plymouth &middot; 11 plus maths with Quest Assessments &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Plymouth',
  lede: 'In Plymouth the 11 plus is split across two Saturdays, and the second one belongs to maths. On the first, children sit English comprehension. A week later they come back for a Quest Assessments maths paper which, in Plymouth High School for Girls\' words, is "40 minutes, 60 questions", in two sections. There is no verbal, non-verbal or spatial reasoning at all. Sixty questions in forty minutes is about forty seconds each, which tells you what kind of questions they must be: short, direct, and answerable quickly by a child who really knows Year 5 maths. The schools also say, in a note aimed at tutors, what they want: "full understanding and application of Year 5 content", and nothing beyond it. This page sets out what the schools and the council publish, then teaches one Year 5 topic that suits quick, visual questions: reflection and translation on a grid.',
  secondaryCta: { href: '#saturday', label: 'See the maths Saturday' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Plymouth 11 plus.',
  heroNote: 'Maths only &middot; We do not teach English or the DHSB writing task &middot; No connection with any Plymouth school',
  spec: [
    ['Schools', 'DHSB, DHSG, Plymouth High School for Girls'],
    ['Provider', 'Quest Assessments'],
    ['Papers', 'English, then Maths, a week apart'],
    ['Maths paper', '40 minutes, 60 questions in 2026'],
    ['Format', 'Multiple choice'],
    ['Reasoning papers', 'None'],
    ['Content', 'Nothing beyond Year 5'],
    ['We teach', 'Year 5 maths, quick and secure']
  ],
  capsuleQ: 'In short',
  capsule: 'Plymouth City Council says the city has three grammar schools, Devonport High School for Boys, Devonport High School for Girls and Plymouth High School for Girls, admitting by an entrance exam. The schools use Quest Assessments: an English comprehension paper and a maths paper, both multiple choice, with no verbal, non-verbal or spatial reasoning; the boys\' school adds a creative writing task. In 2026 the maths paper was 40 minutes and 60 questions, in two sections. For September 2027 entry, registration ran from 27 April to 31 August 2026, English was sat on Saturday 12 September and maths on Saturday 19 September 2026. The schools say no content beyond Year 5 is assessed, and they also run an optional practice exam each July. We teach the maths, live online. A first session is free of charge; ongoing Plymouth pupils pay USD 100 monthly for a place in a small class, or USD 150 monthly for private teaching.',

  picks: {
    eyebrow: 'Plymouth starting points',
    h2: 'Three courses for a fast maths paper',
    lede: 'At about forty seconds a question, secure knowledge matters more than clever tricks. Choose by what slows your child down.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'PLYM / 1', title: 'Plymouth 11 plus maths', note: 'Year 5 content made quick and certain for a sixty-question paper.' },
      { course: 'mental-maths-mastery-kids', code: 'PLYM / 2', title: 'Rapid recall', note: 'Facts that come without counting, so forty seconds is plenty.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'PLYM / 3', title: 'Years 1 to 5, secured', note: 'For children who need earlier maths settled before speed.' }
    ]
  },

  sections: [
    {
      id: 'plymouth', tint: 'tint', eyebrow: 'The Plymouth exam',
      h2: 'What the schools and the council publish',
      lede: 'Plymouth City Council points families to the schools, which publish the details. Plymouth High School for Girls\' pages and Devonport High School for Girls\' timeline were our main sources, read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'The Plymouth 11 plus for September 2027 entry', head: ['Step', 'Date', 'As published'], rows: [
          ['Registration', '27 April to noon, 31 August 2026', 'With PHSG or DHSG directly; DHSB has its own registration.'],
          ['Practice exam (optional)', 'July 2026', 'Maths and English together; results by 17 July; not counted.'],
          ['English', 'Saturday 12 September 2026', 'Quest English comprehension, no writing.'],
          ['Maths', 'Saturday 19 September 2026', 'Quest maths paper.'],
          ['Results', '9 October (boys) and 15 October 2026 (girls)', 'By post for DHSB and by email for the girls\' schools, according to the council.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Plymouth High School for Girls states the format plainly: "Our 11 Plus assessment is provided by Quest Assessments. Your child will sit an English paper and Maths paper." Then: "Maths: 40 minutes, 60 questions. Both papers are split into two sections." Its FAQ adds that the papers are multiple choice and that "Verbal reasoning, non-verbal reasoning and spatial reasoning are not tested."',
            'The FAQ also warns that "The number of questions can vary year-on-year". Sixty is the 2026 figure, not a promise for 2027.'
          ],
          right: [
            'The schools run an optional practice exam in July, before the real tests, "to familiarise themselves with the test and exam venues". Its result does not count towards anything. For a child who has never sat a formal paper, that is a genuinely useful rehearsal, and it is the schools\' own.',
            'Devonport High School for Boys adds a creative writing task and says it cannot share the Quest maths familiarisation paper. Places are allocated under Plymouth City Council\'s coordinated scheme and each school\'s published criteria; we stay out of that.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.plymouth.gov.uk/11-plus" rel="noopener" target="_blank">Plymouth City Council, 11 Plus</a> and school admissions parent\'s guide; <a class="ag-inline-link" href="https://www.phsg.org/page/?title=The+11+Plus+Examination+Process&amp;pid=418" rel="noopener" target="_blank">Plymouth High School for Girls, the 11 Plus examination process</a>, FAQ and timeline; Devonport High School for Girls, the application process; Devonport High School for Boys, 11+ familiarisation. Modern Age Coders has no connection with any Plymouth school, Quest Assessments or the council.' }
      ]
    },
    {
      id: 'saturday', tint: 'plain', eyebrow: 'A Saturday for maths',
      h2: 'Sixty questions, forty minutes, nothing else that day',
      lede: 'Most 11 plus tests fold maths into a paper with other subjects. Plymouth gives it a day of its own, which changes how a child should prepare.',
      body: [
        { kind: 'two',
          leftH3: 'What the numbers imply',
          left: [
            'Sixty questions in forty minutes is an average of forty seconds a question. Nobody writes a four-step problem for a forty-second slot. The questions must mostly be short and direct: one idea, one calculation, one answer to choose.',
            'That rewards secure recall and quick recognition. A child who has to work out 8 × 7, or count squares to find a reflected point, spends their forty seconds on the mechanics. A child who simply knows does the question in fifteen and banks the rest.'
          ],
          rightH3: 'What the schools asked for',
          right: [
            'The schools\' note to tutors asks for "Deep comprehension of Year 5 English and Maths topics", "Confident application of skills in unfamiliar contexts" and "Development of reasoning and problem-solving abilities within the Year 5 framework for mathematics".',
            'We read that as depth within Year 5, not breadth beyond it. So our lessons go deep into each Year 5 topic, and make the common questions on it fast, rather than straying into Year 6.'
          ] },
        { kind: 'p', html: 'Because maths sits on its own Saturday, a child\'s maths is not affected by how the English went a week earlier, for better or worse. We tell children that explicitly: the maths day is a fresh start. Short practice sessions in the week between help keep it warm without adding pressure.' }
      ]
    },
    {
      id: 'grid', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Reflection and translation on a grid',
      lede: 'The Year 5 curriculum asks children to "identify, describe and represent the position of a shape following a reflection or translation, using the appropriate language, and know that the shape has not changed". These are ideal forty-second questions.',
      body: [
        { kind: 'table', caption: 'Year 5 position and direction, with questions of our own (first-quadrant grid)', head: ['Move', 'Our question', 'Answer and the idea'], rows: [
          ['Translation', 'The point (2, 3) moves 4 right and 1 down. Where is it now?', '(6, 2): add 4 across, take 1 up'],
          ['Reflection, vertical line', 'Reflect (4, 5) in the line x = 6.', '(8, 5): 2 squares left of the line becomes 2 squares right'],
          ['Reflection, horizontal line', 'Reflect (4, 1) in the line y = 3.', '(4, 5): 2 below the line becomes 2 above'],
          ['A whole shape', 'A square with corners (1, 1), (3, 1), (3, 3), (1, 3) moves 5 right. Where are its corners?', '(6, 1), (8, 1), (8, 3), (6, 3); same size, same shape'],
          ['What changes?', 'After a reflection, which changes: the size, the shape, or the way it faces?', 'Only the way it faces']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The curriculum\'s guidance keeps Year 5 reflections in lines parallel to the axes, on a first-quadrant grid. That makes every reflection a counting job: how far is the point from the mirror line, and put it the same distance on the other side.',
            'The trap is counting from the wrong place. Reflecting (4, 5) in x = 6, some children count six squares on from the point and write (10, 5); others leave it where it is. Asking "how far from the line?" first fixes both: two squares away, so two squares the other side.'
          ],
          right: [
            'Translations go wrong through direction words. "4 right and 1 down" changes the first coordinate by 4 and the second by 1, in that order. Children who move up instead of down land on (6, 4) instead of (6, 2), a likely wrong option on a multiple-choice paper.',
            'The last row is the idea the curriculum insists on: the shape "has not changed". A translated or reflected shape keeps its size and angles. Knowing that lets a child reject any option where a moved square has become a rectangle.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 geometry, position and direction (statutory requirement and guidance). The questions are our own.' }
      ]
    },
    {
      id: 'prepare', tint: 'tint', eyebrow: 'Our approach',
      h2: 'Quick because secure, not quick because rushed',
      lede: 'A forty-second average invites the wrong kind of practice. Here is what we do instead.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Depth first', p: 'Each Year 5 topic taught until a child can explain it, as the schools ask, before any speed work.' },
          { h3: 'Then recognition', p: 'Short sets of one-idea questions, so a child sees at once what a question needs.' },
          { h3: 'Then the clock', p: 'Timed sections that build towards the forty-minute paper, with steady accuracy as the goal.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'We do not reproduce Quest material, and DHSB says it cannot share its maths familiarisation paper. Our questions are written for the Year 5 curriculum and the published format: multiple choice, two sections, around sixty questions.',
            'The July practice exam run by the schools is the right rehearsal of the real room and papers. We encourage families to use it.'
          ],
          right: [
            'We do not teach English comprehension or the DHSB creative writing task. Families should prepare those separately.',
            'We also do not comment on how places are allocated between the schools. The council and the schools publish those rules.'
          ] }
      ]
    },
    {
      id: 'city', tint: 'plain', eyebrow: 'Plymouth\'s three schools',
      h2: 'Three grammar schools, taught from home',
      lede: 'Plymouth City Council names the three grammar schools. We list them only to show which exam this page covers.',
      body: [
        { kind: 'table', caption: 'The three selective schools the city council lists, and the papers each asks for', head: ['Grammar school', 'Papers sat'], rows: [
          ['Devonport High School for Boys', 'Quest papers plus a creative writing task'],
          ['Devonport High School for Girls', 'Quest English and maths papers'],
          ['Plymouth High School for Girls', 'Quest English and maths papers']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Lessons are live on video, so a child in Plympton, Plymstock, Saltash or Ivybridge is taught the same way, in groups of five to ten matched by level.',
            'For coding in the city, see our <a class="ag-inline-link" href="/best-coding-class-in-plymouth">Plymouth coding page</a>.'
          ],
          right: [
            'The girls\' schools ask families not to register at both, and to register directly on one school\'s website. The boys\' school has its own process.',
            'We have no connection with any of these schools, Quest Assessments or Plymouth City Council, and we do not advise on applications or places.'
          ] },
        { kind: 'source', html: 'Sources: Plymouth City Council, 11 Plus; PHSG and DHSG timelines for 2027 entry.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Towards September 2027',
    h2: 'Four stages to a sixty-question paper',
    lede: 'For today\'s Year 5, registration should open in spring 2027 and the maths Saturday fall in September of Year 6. The schools publish exact dates.',
    table: { caption: 'Depth, then recognition, then speed', head: ['When', 'Stage', 'You will see'], rows: [
      ['Autumn, Year 5', '1. Deep number work', 'Explains why methods work, not just how'],
      ['Winter, Year 5', '2. Geometry and measures', 'Reflections, translations and conversions done confidently'],
      ['Spring, Year 5', '3. Recognition', 'Sees what a one-idea question needs within seconds'],
      ['July practice exam and summer', '4. Forty minutes', 'Sixty-question practice finished calmly and accurately']
    ] },
    left: { h3: 'A later start', ps: [
      'Recognition and speed build on depth. If time is short, we secure the most common Year 5 topics first.',
      'At the free lesson we will say honestly what can be done.'
    ] },
    right: { h3: 'After October', ps: [
      'Coordinates and transformations run all the way to GCSE. Some pupils continue with <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and program their own reflections.',
      'Children who enjoyed the grids can look for geometry puzzles in the UKMT challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Courses',
    h2: 'Maths and coding for Plymouth families',
    lede: 'Grouped by stage, each linked to its syllabus.',
    bands: [
      { num: 'I', h3: 'For the Plymouth 11+', sub: 'Years 3 to 5', courses: [
        { code: 'PLM / A', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths, Plymouth', blurb: 'Year 5 maths, deep and quick.' },
        { code: 'PLM / B', slug: 'mental-maths-mastery-kids', title: 'Speedy mental maths', blurb: 'Recall for forty-second questions.' },
        { code: 'PLM / C', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths basics', blurb: 'Foundations before speed.' },
        { code: 'PLM / D', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus number work', blurb: 'For younger siblings.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 onwards', courses: [
        { code: 'PLM / E', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Years 6 to 8 mathematics', blurb: 'All four quadrants and beyond.' },
        { code: 'PLM / F', slug: 'gcse-mathematics-mastery', title: 'GCSE maths course', blurb: 'Transformations to GCSE level.' },
        { code: 'PLM / G', slug: 'olympiad-competition-mathematics-mastery', title: 'Problem-solving club maths', blurb: 'Harder puzzles for keen pupils.' }
      ] },
      { num: 'III', h3: 'Coding', sub: 'Shapes that move', courses: [
        { code: 'PLM / H', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Translate and reflect shapes in Python.' },
        { code: 'PLM / I', slug: 'scratch-programming-complete-course', title: 'Scratch sprites and grids', blurb: 'Coordinates in a visual language.' },
        { code: 'PLM / J', slug: 'python-ai-kids-masterclass', title: 'Python for primary pupils', blurb: 'The first typed language.' }
      ] },
      { num: 'IV', h3: 'Later', sub: 'Teenagers', courses: [
        { code: 'PLM / K', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic arithmetic', blurb: 'Speed on solid ground.' },
        { code: 'PLM / L', slug: 'ai-ml-masterclass-teens', title: 'AI for teenagers', blurb: 'Geometry and data at work.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Fitted around a Plymouth school week',
    lede: 'Our teachers work from India and teach live. Plymouth primary pupils get after-school or weekend-morning lessons at fixed UK times, and we move our own hours when the clocks go forward or back.',
    slots: [
      { time: 'Straight after school', l: 'Before the evening fills up.' },
      { time: 'Saturday or Sunday, early', l: 'Good practice for a Saturday exam.' },
      { time: 'Summer holidays', l: 'Useful around the July practice exam.' }
    ],
    cells: [
      { h3: 'A teacher who knows your child', p: 'The same person every week, tracking progress.' },
      { h3: 'Plain-spoken updates', p: 'What is secure and what is not, in a few lines.' },
      { h3: 'Classes of five to ten', p: 'Matched on level, not postcode.' },
      { h3: 'Questions we write', p: 'No Quest material copied.' },
      { h3: 'Individual lessons', p: 'For a gap that needs close work.' },
      { h3: 'Our remit: maths', p: 'No English or writing coaching; no admissions advice.' }
    ]
  },

  projectsH2: 'Grids today, projects tomorrow',
  projectsLede: 'Our students later build and publish real things; these four started with the same coordinate grids a Year 5 child meets. Browse others on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents\' Google reviews, quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Every family outside India pays one monthly price in US dollars. No sign-up cost; stop whenever you want.',
    free: ['A proper lesson', 'An honest verdict', 'No card needed'],
    group: ['Five to ten children at one level', 'A regular teacher', 'Work reviewed in class', 'A certificate at the end'],
    one: ['A teacher for one child', 'Focused on speed and accuracy', 'Flexible timing']
  },

  faq: {
    eyebrow: 'Plymouth questions',
    h2: 'What Plymouth families ask us',
    items: [
      { q: 'What is in the Plymouth 11 plus?', a: 'Plymouth High School for Girls says children sit an English paper and a maths paper from Quest Assessments, both multiple choice. Verbal, non-verbal and spatial reasoning are not tested. DHSB adds a creative writing task.' },
      { q: 'How long is the maths paper?', a: 'In 2026 it was 40 minutes with 60 questions, in two sections. The school says the number of questions can vary from year to year.' },
      { q: 'Is maths on a separate day?', a: 'Yes. For 2027 entry, English was sat on Saturday 12 September 2026 and maths on Saturday 19 September 2026.' },
      { q: 'What maths is tested?', a: 'The schools say no content beyond Year 5 of the National Curriculum is assessed, and that the focus is on full understanding and application of Year 5 content.' },
      { q: 'Is there a practice exam?', a: 'Yes. The schools run an optional practice exam in July, with maths and English together. Its result does not count towards allocation.' },
      { q: 'When is the next Plymouth 11 plus?', a: 'Dates for 2028 entry had not been published when we checked on 26 September 2026. The PHSG FAQ says registration normally opens in mid or late April and closes at noon on 31 August.' },
      { q: 'Are there Quest maths practice papers?', a: 'DHSB says it is unable to share the Quest familiarisation maths paper. Quest publishes general guidance. We write our own questions.' },
      { q: 'Do you teach English or the DHSB writing task?', a: 'No. The English paper and the boys\' school writing task fall outside our lessons, as do questions about applications and places.' },
      { q: 'Which schools use the test?', a: 'Devonport High School for Boys, Devonport High School for Girls and Plymouth High School for Girls.' },
      { q: 'What do lessons cost?', a: 'We do not charge for the trial. Continuing costs USD 100 per month in a group of five to ten, or USD 150 per month taught individually.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related',
    h2: 'More for Devon and Cornwall families',
    lede: 'Coding in Plymouth, the Torbay test up the coast, and our national page.',
    items: [
      { href: '/best-coding-class-in-plymouth', label: 'Coding classes in Plymouth', p: 'Programming for the city\'s children.' },
      { href: '/11-plus-maths-tuition-torbay', label: '11 plus maths in Torbay', p: 'Torbay\'s grammar schools, a short way along the coast.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national overview.' },
      { href: '/best-coding-class-in-truro', label: 'Coding classes in Truro', p: 'For families across the Tamar.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar', p: 'Maths challenges, dated.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every nation, city and borough we have written about.' }
    ]
  },

  start: {
    h2: 'Book your free lesson',
    lede: 'Mention the school year and whether speed or accuracy is the worry. The trial is taught like any other lesson, and you hear afterwards exactly what the teacher noticed.',
    readFirst: 'Looking before you book? Syllabuses sit on every <a class="ag-inline-link" href="/courses">course page</a>, a typical session is described on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> charts the years after the 11 plus.',
    note: 'Send a WhatsApp for the fastest answer. The team and the phone line are Indian; nobody works from an office in Plymouth or anywhere in England.',
    formNote: 'No card details. We reply once to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/maths-through-coding', label: 'Maths through coding' }
      ] },
      { h4: 'South west and national', links: [
        { href: '/best-coding-class-in-plymouth', label: 'Coding in Plymouth' },
        { href: '/11-plus-maths-tuition-torbay', label: '11 plus maths in Torbay' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the exam; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-plm .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-plm .ag-capsule { border-left-width: 6px; border-radius: 0 12px 12px 0; }
.ag-root.ag-plm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-plm .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.016em; }
.ag-root.ag-plm .ag-table td:nth-child(3) { font-variant-numeric: tabular-nums; }
.ag-root.ag-plm .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-plm .ag-three h3 { letter-spacing: -0.011em; }
.ag-root.ag-plm .ag-slots { gap: 1.1rem; }
`,

  mustMention: ['Devonport High School for Girls', 'Plymouth High School for Girls', '60 questions', 'reflection or translation', 'Year 5 framework for mathematics', 'unable to share', 'Saturday 19 September 2026', 'spatial reasoning are not tested']
};
