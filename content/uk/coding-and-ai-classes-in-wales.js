'use strict';
// Wales (cg- nation page, UK cluster Phase 3). The third of the four nations, after the UK hub and
// Scotland. Facts read on 20 September 2026:
//  - WJEC, GCSE Computer Science Qualification Outline v1.4, "Made for Wales. Ready for the world.",
//    first teaching September 2025, built to Qualifications Wales's Approval Criteria:
//    * "This is a unitised qualification."
//    * Unit 1 Understanding Computer Science: "digital only examination, marked by WJEC", 50 per cent,
//      "an examination no longer than 1 hour and 45 minutes", first available 2026.
//    * Unit 2 Computer Programming: "on-screen examination, marked by WJEC", 50 per cent, "no longer
//      than 2 hours", first available 2027, and it "must be completed in the final year of study".
//    * "The language used in the examination will be Python."
//    * "There will be no optionality and no tiering."
//    * Assessment objectives: Unit 1 is AO1 30, AO2 15, AO3 5; Unit 2 is AO1 0, AO2 25, AO3 25.
//    * The pre-release brief: "issued to centres in the academic year before the assessment is
//      scheduled to take place (for example, September 2025 for the 2027 examination)"; it "will consist
//      of a scenario containing a list of requirements and provides information about all tasks learners
//      must undertake both individually and in groups"; "Work completed on the pre-release brief prior
//      to the assessment will not be formally assessed and nor will it contribute to the final grade";
//      and "Learners may not take any work already done on the pre-release brief into the assessment".
//  - WJEC: GCSE Digital Technology, teaching from 2026, first award 2028.
//  - Hwb (Welsh Government): the Curriculum for Wales runs on six Areas of Learning and Experience and
//    progression steps rather than key stages; Science and Technology "draws on the disciplines of
//    biology, chemistry, computer science, design and technology, and physics".
//  - ONS, Population and household estimates, England and Wales: Census 2021: "3,107,500 people in
//    Wales" on census day 21 March 2021, with ONS's own note that rounded figures "may not add exactly
//    because of this rounding". Principal-area figures pulled from Nomis table NM_2021_1 on the same
//    day: Cardiff 362,308 down to Merthyr Tydfil 58,836. Those 22 rows sum to 3,107,491, three short of
//    the 3,107,494 the same dataset gives for Wales as a whole, because disclosure control is applied to
//    each geography independently. The page therefore prints ONS's published Wales figure, prints the
//    principal areas as published, and never adds them up.
// Spine: a year with the brief, and nothing you may carry in. Wales hands Unit 2 candidates the scenario
// a full academic year early, lets them work on it individually and in groups, and then bars every page
// of that work from the examination room. Preparation that lives on paper is wasted; preparation that
// lives in a student's hands is not.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'nation', tag: 'WALES', blurb: 'The only UK nation that sits computing on screen, in Python, from a brief released a year early.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-wales',
  code: 'wal',
  accent: '#19763D',
  accentRationale: 'Wales: a true mid green from the solver (4.61:1 on every paper tint), a different green from the near-black Surrey, the olive Scottish Challenge, the forest intermediate olympiad and the green-teal Coolest Projects accents',
  pageType: 'governorate',
  place: {
    name: 'Wales',
    eyebrow: 'Wales, United Kingdom',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wales',
  title: 'Coding and AI Classes in Wales | Made-for-Wales GCSE, Python',
  description: 'Live online coding, Python, AI and maths classes for families across Wales, built around the Curriculum for Wales and the new Made-for-Wales Computer Science GCSE.',
  ogDescription: 'Wales sits its Computer Science GCSE on screen, in Python, from a brief released a year early, and lets candidates take none of their preparation into the room.',
  twitterDescription: 'Coding and AI classes in Wales for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Wales',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the twenty-two principal areas of Wales, taught live in English.'
  },

  h1: 'Coding and AI classes in Wales',
  capsuleQ: 'What are the best coding classes in Wales?',
  capsule: 'Wales has just rebuilt its computing qualification and almost nobody has explained what changed. The Made-for-Wales GCSE Computer Science, first taught from September 2025, is "a unitised qualification" in two halves: Unit 1, a "digital only examination, marked by WJEC" worth 50 per cent and first available in 2026, and Unit 2, an "on-screen examination" also worth 50 per cent, first available in 2027, in which "the language used in the examination will be Python". There is "no optionality and no tiering". Unit 2 runs from a pre-release brief issued a full academic year in advance, and no work done on that brief may be taken into the room. A class that helps a Welsh learner has to teach what survives that door: Python they can write unaided. We teach live online from India, ages 6 to 67, in groups of five to ten or one to one. The first lesson is free; a group place is then USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Every other nation in Britain marks a computing project a student brings with them. Wales does the opposite, and the design is worth reading twice. Candidates for Unit 2 receive a pre-release brief in the academic year before the exam, a scenario with requirements and tasks to work through "both individually and in groups". They may spend a year on it. Then WJEC says two things in the same paragraph: work done on the brief "will not be formally assessed and nor will it contribute to the final grade", and "learners may not take any work already done on the pre-release brief into the assessment". A year of preparation, and not one page of it crosses the threshold. That single rule decides what a useful class in Wales looks like.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Wales.',

  picks: {
    eyebrow: 'Course picks for Wales',
    h2: 'Four courses for learners in Wales',
    intro: 'A Year 4 child in Swansea who wants to make a game, a Year 10 in Wrexham starting the new GCSE, a sixth former in Cardiff looking past it, and a parent in Bridgend who wants to understand what their child is learning. Each begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A first language, where a child builds something that works and can explain how, which is what the Welsh progression steps are built around.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Typed Python before the GCSE starts, so that Year 10 is spent on problems rather than on syntax.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The language the Welsh Unit 2 examination is written in, taught until a student can produce a working program with nothing to copy from.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who want the vocabulary their children are being taught, without becoming programmers.' }
    ]
  },

  sections: [
    {
      id: 'gcse', tint: '', eyebrow: 'The new GCSE',
      h2: 'Two units, both on a screen, and Python named in the rules',
      intro: 'Every figure below is from WJEC\'s own qualification outline, read on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'Made-for-Wales GCSE Computer Science, as WJEC describes it', head: ['', 'Unit 1: Understanding Computer Science', 'Unit 2: Computer Programming'], rows: [
          ['Weighting', '50 per cent', '50 per cent'],
          ['How it is sat', '"Digital only examination, marked by WJEC"', '"On-screen examination, marked by WJEC"'],
          ['Suggested length', '"No longer than 1 hour and 45 minutes"', '"No longer than 2 hours"'],
          ['First available', '2026', '2027'],
          ['When in the course', 'Unitised, so it can be sat earlier', '"Must be completed in the final year of study"'],
          ['Assessment objectives', 'AO1 30 per cent, AO2 15, AO3 5', 'AO1 0 per cent, AO2 25, AO3 25'],
          ['Language', 'Not applicable', '"The language used in the examination will be Python"'],
          ['Tiers', '"There will be no optionality and no tiering"', 'The same']
        ] },
        { kind: 'p', text: 'Read the assessment objectives across the two columns and the design becomes obvious. Unit 1 carries all of the recall: thirty per cent of the whole qualification is AO1, demonstrating knowledge. Unit 2 carries none of it. Every mark in Unit 2 is for applying and analysing, which is to say for writing and refining a program while somebody watches the clock.' },
        { kind: 'p', text: 'That is why "no optionality and no tiering" matters more here than it sounds. Every candidate in Wales sits the same paper, and half of the qualification is a practical exercise that cannot be revised for in the ordinary sense.' },
        { kind: 'p', text: 'The qualification is unitised, so Unit 1 can be taken before the final year while Unit 2 cannot. For a school that means the theory and the programming can be separated in time, and for a family it means a Year 10 who is behind on Python still has a year to fix it.' },
        { kind: 'p', text: 'Alongside it, WJEC has a second qualification: GCSE Digital Technology, teaching from 2026 with a first award in 2028. A school may offer either, and they are not the same subject.' },
        { kind: 'p', text: 'One consequence worth naming for parents: because Unit 2 is assessed on screen in Python, a Welsh student who has only ever used block-based coding arrives at a disadvantage that has nothing to do with ability. The gap is keyboard fluency in one specific language, and it closes in a term.' }
      ]
    },
    {
      id: 'brief', tint: 'tint', eyebrow: 'The pre-release brief',
      h2: 'A year with the brief, and nothing you may carry in',
      intro: 'This is the most unusual rule in British computing assessment, and it is stated plainly in the qualification outline.',
      body: [
        { kind: 'table', caption: 'What WJEC says about the pre-release brief', head: ['Rule', 'In WJEC\'s words'], rows: [
          ['When it arrives', '"Issued to centres in the academic year before the assessment is scheduled to take place (for example, September 2025 for the 2027 examination)"'],
          ['What is in it', '"A scenario containing a list of requirements and provides information about all tasks learners must undertake both individually and in groups"'],
          ['Whether it is marked', '"Work completed on the pre-release brief prior to the assessment will not be formally assessed and nor will it contribute to the final grade"'],
          ['What you may bring', '"Learners may not take any work already done on the pre-release brief into the assessment"']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why a year, then?', p: 'Because the point is familiarity with the problem, not a portfolio. A candidate who has modelled the scenario, argued about it in a group and built it badly once will read the examination paper differently from one meeting it cold.' },
          { h3: 'What actually crosses the door', p: 'Only what is in the student\'s head and hands. Not a file, not a printout, not a half-finished program. The preparation has to become fluency or it becomes nothing.' },
          { h3: 'How to prepare for that', p: 'Build the brief, throw it away, build it again from memory. A student who can reproduce a working structure twice has converted the year into something the rule cannot confiscate.' }
        ] },
        { kind: 'p', text: 'It is a genuinely thoughtful piece of assessment design. Coursework anywhere in Britain has the same well-known weakness, that nobody can be certain whose work it is, and the <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A-level project pages</a> on this site set out what the English boards now say about AI and acknowledgement. Wales has sidestepped the problem by making the preparation unassessable and the assessment unprepared-for in the literal sense.' },
        { kind: 'p', text: 'The cost falls on students who prepare in the wrong shape. Hours spent producing a beautiful document are hours that do not survive, because the document stays outside.' },
        { kind: 'p', text: 'The group work mentioned in the brief is worth planning for too. Tasks are set to be undertaken "both individually and in groups", which means a student who only ever works alone has not done what the brief asked, even though the examination itself is sat alone.' },
        { kind: 'p', text: 'None of this is guesswork on our part. Every sentence in the table is quoted from WJEC\'s published outline, and a school will have the full specification.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with WJEC or Qualifications Wales. We do not see pre-release briefs, we do not work on a candidate\'s brief with them, and we would decline if asked: the whole design depends on the preparation being the student\'s own.' }
      ]
    },
    {
      id: 'curriculum', tint: 'deep', eyebrow: 'Before the GCSE',
      h2: 'Progression steps, not key stages',
      intro: 'Wales reorganised its whole curriculum, and the vocabulary a Welsh parent meets is different from the one used across the border.',
      body: [
        { kind: 'table', caption: 'How the Curriculum for Wales is put together', head: ['Term', 'What it means', 'The English equivalent'], rows: [
          ['Areas of Learning and Experience', 'Six broad areas rather than a list of subjects', 'Subjects and the national curriculum'],
          ['Science and Technology', 'The area that "draws on the disciplines of biology, chemistry, computer science, design and technology, and physics"', 'Computing, science and design technology, separately'],
          ['Progression steps', 'Broad points in a learner\'s journey, not year-group boundaries', 'Key stages 1 to 4'],
          ['Statements of what matters', 'What the area is fundamentally about, used to design a school\'s own curriculum', 'Programmes of study']
        ] },
        { kind: 'p', text: 'The practical effect is that two Welsh schools can teach rather different computing in the same year group and both be right, because each designs its own curriculum against the same statements. A parent comparing notes across the school gate will find more variation here than in England.' },
        { kind: 'p', text: 'It also means "what should my nine-year-old know by now" has no national answer in Wales. The honest reply is to ask the school what it teaches, and to judge a child against last term rather than against a table.' },
        { kind: 'p', text: 'For us it changes how we place a learner. We do not ask which key stage a child in Wales is in, because the answer does not exist; we ask what they can do, and the free lesson settles it in forty minutes.' },
        { kind: 'p', text: 'The same approach runs through every nation on this site. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> sets out all four school systems and what a single birthday does under each of them.' }
      ]
    },
    {
      id: 'wales', tint: '', eyebrow: 'Across Wales',
      h2: 'Twenty-two principal areas, 3,107,500 people, one lesson',
      intro: 'Usual residents at Census 2021, from the Office for National Statistics. Online teaching puts all twenty-two the same distance from a teacher.',
      body: [
        { kind: 'table', caption: 'The largest Welsh principal areas at Census 2021', head: ['Principal area', 'Usual residents', 'Principal area', 'Usual residents'], rows: [
          ['Cardiff', '362,308', 'Powys', '133,169'],
          ['Swansea', '238,490', 'Vale of Glamorgan', '131,939'],
          ['Rhondda Cynon Taff', '237,651', 'Pembrokeshire', '123,360'],
          ['Carmarthenshire', '187,897', 'Gwynedd', '117,393'],
          ['Caerphilly', '175,952', 'Conwy', '114,741'],
          ['Newport', '159,592', 'Denbighshire', '95,817'],
          ['Flintshire', '154,962', 'Monmouthshire', '92,957'],
          ['Bridgend', '145,488', 'Torfaen', '92,276'],
          ['Neath Port Talbot', '142,289', 'Ceredigion', '71,475'],
          ['Wrexham', '135,117', 'Isle of Anglesey', '68,878']
        ] },
        { kind: 'p', text: 'ONS puts the population of Wales at 3,107,500 on census day, 21 March 2021, and warns that its rounded figures "may not add exactly because of this rounding". The twenty principal areas above are reproduced as the census publishes them and are deliberately not totalled here, because adding published parts to assert a whole is how a tidy sentence turns into a false one. What the distribution shows is clear enough without arithmetic: Cardiff and Swansea together are under a fifth of the country, and the rest is spread down valleys and along coastline where a class within driving distance is a genuine constraint.' },
        { kind: 'p', text: 'A learner in Ceredigion or on Anglesey has the same teacher, at the same hour, as one in Cardiff. That is the whole argument, and it is a stronger one here than in most places.' },
        { kind: 'p', text: 'We teach in English. Welsh-medium and bilingual education is a substantial part of Welsh schooling and we are not equipped to teach through Welsh, which we would rather say plainly than leave a family to discover.' },
        { kind: 'p', text: 'Everything else about the offer is as elsewhere: <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the UK page</a> lists every page in this series, and the <a class="cg-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> covers what a Welsh pupil can enter.' },
        { kind: 'spec', title: 'Source', p: 'Population: Office for National Statistics, Population and household estimates, England and Wales, Census 2021, for the figure for Wales, and ONS Census 2021 usual residents by local authority via Nomis for the principal areas. Qualification facts: WJEC\'s GCSE Computer Science qualification outline and its GCSE Digital Technology pages. Curriculum structure: Hwb, Welsh Government. All read 20 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first program to a Python exam sat on screen',
    intro: 'A learner is placed by what they can write unaided, which in Wales is exactly what the qualification measures.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Making things work', p: 'Block-based programs a child can explain, matching the progression steps rather than any year group.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Into typed Python', p: 'The crossing that decides how Year 10 feels, made early and slowly rather than late and fast.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 16', h3: 'Python without a crutch', p: 'Writing, testing and refining a program with nothing to copy from, which is the Unit 2 room.', courses: ['python-complete-masterclass-teens', 'gcse-computer-science-course'] },
      { band: 'Ages 16 to 67', h3: 'Beyond the GCSE', p: 'A levels, data, AI and adult retraining, for learners who found they liked it.', courses: ['ai-ml-masterclass-teens', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will write the pre-release solution for you. Why should a Welsh teenager learn to write it themselves?',
    intro: 'Because the one place it cannot help is the only place the marks are.',
    p1: 'Give an assistant the scenario from a pre-release brief and it will produce a plausible program in seconds. That is genuinely useful during the year: a student can read it, argue with it, find where it is wrong. What it cannot do is sit the examination. WJEC says no work done on the brief may be taken into the assessment, so the student walks into an on-screen Python paper with whatever they personally can type, and an assistant\'s program left outside is worth precisely nothing.',
    p2: 'That makes Wales an unusually honest test of what a student actually knows, and it changes what preparation should look like. Reading generated code is fine. Relying on it is a plan that fails on one specific morning, in a room, with no internet.',
    closer: 'So the case for a Welsh teenager learning to code in 2026 is not abstract. Half their Computer Science GCSE is a program they must produce from their own hands, and the qualification was designed that way on purpose.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Holyhead to Chepstow, taught at your desk',
    intro: 'A scattered country is the strongest case there is for a lesson that does not need a journey.',
    cells: [
      { h3: 'Wherever the learner is', p: 'Valleys, coast or city. The lesson travels to the child instead of a parent driving across a county.' },
      { h3: 'Welsh vocabulary used', p: 'Progression steps, Areas of Learning and Experience and the Made-for-Wales GCSE, called what Wales calls them.' },
      { h3: 'A free lesson first', p: 'A real piece of teaching that ends with an honest view of level and course. No card needed.' },
      { h3: 'Small groups by level', p: 'Five to ten learners at the same stage, drawn from Wales and beyond so a group exists at a sensible hour.' },
      { h3: 'Taught in English', p: 'We do not teach through Welsh. A bilingual learner is very welcome; a Welsh-medium lesson is not something we can offer.' },
      { h3: 'Times in UK time', p: 'Teachers work from India, five and a half hours ahead in winter and four and a half in summer, and every lesson is agreed in UK time.' }
    ],
    spec: { title: 'Python early, not late', p: 'Unit 2 is sat on screen in Python in the final year of the course. A learner who reaches Year 10 already typing Python spends that year on problems instead of on syntax, which is the single most useful thing a Welsh family can arrange in advance.' }
  },

  fees: {
    h2: 'What classes cost in Wales',
    intro: 'The same three prices everywhere, from Cardiff to Anglesey.',
    first: 'A full lesson on real work, ending with a suggested level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month with a teacher for one learner.',
    closer: 'Fees are set in US dollars, the rate for every family outside India, and there is no pound price list. Nothing is charged until the free lesson has settled a course and a regular slot; the pricing page covers pauses, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews, printed as families wrote them',

  book: {
    h2: 'Tell us about the learner',
    intro: 'A school year and what they enjoy is enough. A first task might be a Scratch game, a first Python program, or a look at what Unit 2 actually asks for.',
    success: 'Thank you. Your class request from Wales has reached the team.'
  },

  faq: {
    h2: 'Coding classes in Wales: questions',
    intro: 'About the new GCSE, the curriculum and how lessons work.',
    items: [
      { q: 'What is the Made-for-Wales Computer Science GCSE?', a: 'A WJEC qualification first taught from September 2025, built to Qualifications Wales approval criteria. It is unitised, with Unit 1 a digital-only examination worth 50 per cent, first available in 2026, and Unit 2 an on-screen examination also worth 50 per cent, first available in 2027.' },
      { q: 'Which programming language does it use?', a: 'Python. WJEC states that "the language used in the examination will be Python" for Unit 2.' },
      { q: 'How long are the examinations?', a: 'WJEC suggests no longer than 1 hour and 45 minutes for Unit 1 and no longer than 2 hours for Unit 2.' },
      { q: 'Are there tiers or options?', a: 'No. WJEC says plainly that "there will be no optionality and no tiering", so every candidate in Wales sits the same paper.' },
      { q: 'What is the pre-release brief?', a: 'A scenario issued to centres in the academic year before the examination, for example September 2025 for the 2027 paper. It lists requirements and tasks learners work through individually and in groups.' },
      { q: 'Can my child take their brief work into the exam?', a: 'No. WJEC says work on the brief "will not be formally assessed and nor will it contribute to the final grade", and that "learners may not take any work already done on the pre-release brief into the assessment". Only what the student can produce themselves on the day counts.' },
      { q: 'How should a student prepare for that?', a: 'By converting the year into fluency rather than into files. Build the scenario, set it aside, and build it again from memory. Anything that only exists on paper stays outside the room.' },
      { q: 'Is GCSE Digital Technology the same thing?', a: 'No. It is a separate WJEC qualification, teaching from 2026 with a first award in 2028. A school may offer either and they cover different ground.' },
      { q: 'Why does nobody mention key stages in Wales?', a: 'Because the Curriculum for Wales uses progression steps and six Areas of Learning and Experience instead. Computing sits inside Science and Technology, which draws on biology, chemistry, computer science, design and technology, and physics.' },
      { q: 'Do you teach through the medium of Welsh?', a: 'No. Our lessons are in English. We say so plainly rather than let a Welsh-medium family find out after booking.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> covers all four school systems and links every UK page as it goes live, <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> has its own qualifications and stages, and the <a class="cg-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what a Welsh pupil can enter this year.',
    h2: 'The other nations',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wales and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-online-coding-classes-uk', label: 'Choosing a class, UK' }
  ],

  personalityCss: `
.cg-root.cg-wal .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-wal .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; }
.cg-root.cg-wal .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-wal .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wal .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.012em; }
.cg-root.cg-wal .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-wal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wal .cg-table th:first-child { width: 24%; }
.cg-root.cg-wal .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-wal .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wales. WJEC GCSE Computer Science Qualification Outline version 1.4, "Made for Wales. Ready for the world.", first teaching September 2025, written to Qualifications Wales approval criteria: "This is a unitised qualification"; Unit 1 Understanding Computer Science is a "digital only examination, marked by WJEC" worth 50 per cent, suggested "no longer than 1 hour and 45 minutes", first available 2026; Unit 2 Computer Programming is an "on-screen examination, marked by WJEC" worth 50 per cent, suggested "no longer than 2 hours", first available 2027, and "must be completed in the final year of study"; "The language used in the examination will be Python"; "There will be no optionality and no tiering"; assessment objectives Unit 1 AO1 30 per cent, AO2 15, AO3 5 and Unit 2 AO1 0, AO2 25, AO3 25; the pre-release brief is "issued to centres in the academic year before the assessment is scheduled to take place (for example, September 2025 for the 2027 examination)", "will consist of a scenario containing a list of requirements and provides information about all tasks learners must undertake both individually and in groups", "Work completed on the pre-release brief prior to the assessment will not be formally assessed and nor will it contribute to the final grade", and "Learners may not take any work already done on the pre-release brief into the assessment". WJEC GCSE Digital Technology: teaching from 2026, first award 2028. Hwb, Welsh Government: the Curriculum for Wales uses six Areas of Learning and Experience and progression steps rather than key stages; Science and Technology "draws on the disciplines of biology, chemistry, computer science, design and technology, and physics". ONS, Population and household estimates, England and Wales: Census 2021: "3,107,500 people in Wales" on census day 21 March 2021, published with the note that rounded figures "may not add exactly because of this rounding". ONS Census 2021 usual residents by local authority via Nomis (NM_2021_1) for the 22 Welsh principal areas: Cardiff 362,308; Swansea 238,490; Rhondda Cynon Taff 237,651; Carmarthenshire 187,897; Caerphilly 175,952; Newport 159,592; Flintshire 154,962; Bridgend 145,488; Neath Port Talbot 142,289; Wrexham 135,117; Powys 133,169; Vale of Glamorgan 131,939; Pembrokeshire 123,360; Gwynedd 117,393; Conwy 114,741; Denbighshire 95,817; Monmouthshire 92,957; Torfaen 92,276; Ceredigion 71,475; Isle of Anglesey 68,878; Blaenau Gwent 66,904; Merthyr Tydfil 58,836. Those rows sum to 3,107,491 against the 3,107,494 the same dataset returns for Wales, because disclosure control is applied per geography, so the page never totals them.',
    localProject: 'A year with the brief, and nothing you may carry in. Wales issues the Unit 2 pre-release scenario a full academic year before the examination, invites individual and group work on it, then bars every page of that work from the room and awards it no marks. The page turns that rule into a method: build the scenario, set it aside, rebuild it from memory, because only fluency survives the door. It also reads the assessment objectives across the two units to show why, Unit 1 carrying all 30 per cent of the AO1 recall and Unit 2 carrying none, so every Unit 2 mark is for applying and analysing under a clock. AI angle: an assistant can write the pre-release solution and cannot sit the examination, which makes Wales an unusually honest test of what a student can produce unaided. Lesson family: an assessment that separates preparation from performance; distinct from the English NEA pages, which concern acknowledgement and malpractice rather than confiscation.',
    requiredMentions: [
      '3,107,500',
      'no optionality and no tiering',
      'the language used in the examination will be Python',
      'September 2025 for the 2027 examination',
      'may not take any work already done',
      'digital only examination',
      'progression steps',
      'Areas of Learning and Experience',
      '1 hour and 45 minutes',
      'first award in 2028'
    ],
    sources: [
      { claim: 'WJEC GCSE Computer Science qualification outline v1.4: units, weightings, digital and on-screen assessment, suggested durations, Python, no optionality or tiering, assessment objectives, and the pre-release brief rules.', url: 'https://www.wjec.co.uk/media/rualogvs/gcse-computer-science-qualification-outline.pdf' },
      { claim: 'WJEC: GCSE Computer Science teaching from 2025, supporting the Curriculum for Wales.', url: 'https://www.wjec.co.uk/qualifications/gcse-computer-science-teaching-from-2025/' },
      { claim: 'WJEC: GCSE Digital Technology, teaching from 2026, first award 2028.', url: 'https://www.wjec.co.uk/qualifications/gcse-digital-technology-teaching-from-2026/' },
      { claim: 'Hwb, Welsh Government: Curriculum for Wales, Areas of Learning and Experience, progression steps, and the disciplines Science and Technology draws on.', url: 'https://hwb.gov.wales/curriculum-for-wales/science-and-technology/' },
      { claim: 'ONS Census 2021 usual residents for the 22 Welsh principal areas, via Nomis table NM_2021_1.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS published figure for Wales at Census 2021 and the rounding note.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/populationandhouseholdestimatesenglandandwales/census2021' }
    ],
    rejectedClaims: [
      'The exact number of Welsh-medium and bilingual schools: not read at a primary source for this build, so the page says only that we teach in English and does not quantify Welsh-medium provision.',
      'Welsh school term dates: not read at a primary source for this build, so no term dates are printed.',
      'The statements of what matters for Science and Technology in full: the Hwb introduction names six but lists them on a separate page we did not read, so only the disciplines sentence is quoted.',
      'Entry fees for either WJEC qualification: published in pounds, and this site prices in one currency.',
      'Any claim about how Welsh schools actually teach computing: the Curriculum for Wales lets each school design its own, so no national norm is asserted.'
    ]
  }
};
