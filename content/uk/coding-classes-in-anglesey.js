'use strict';
// Isle of Anglesey (cg- county page, UK cluster Phase 7, row 283, first Welsh principal area). Searched as Anglesey and
// Ynys Môn. Spine: is a castle plan really symmetrical, and how would a program decide? Anchor (read raw 26 September 2026):
// Cadw listed building record 5574, Grade I, Beaumaris Castle (Cadw full report via cadwpublic-api): "Beaumaris Castle was
// begun in 1295, the last of the castles built by Edward I"; "The master mason was probably James of St George"; "built on
// a flat site and was designed on the concentric principle to have 4 defensive rings - moat, outer curtain wall, outer ward
// and inner curtain wall"; "work ceased c1330 before the castle was complete"; "an inner ward, which is square in plan";
// "an outer curtain wall which is nearly square in plan but has shallow facets to form an octagon"; "The main entrance was
// the S side, or Gate Next the Sea"; "On the N side, in the eastern facet, is the N or Llanfaes Gate. This was unfinished";
// "Since 1925 it has been in the guardianship of the state".
// Our model (scratchpad wal/sym.py; an invented simplified plan, not a survey): points for 4 inner towers and 8 outer
// turrets on two squares; test the 8 symmetries of a square. Rings only: all 8. Plus central north and south gates: 4
// (identity, rotate 180, the two axis mirrors); group closed under composition; two mirrors compose to rotate 180. North
// gate moved into the eastern part of its side: only the identity. Order matters: rotate 90 after the north-south mirror
// is the other-diagonal mirror; the mirror after the rotation is the diagonal mirror.
// Lesson family: symmetry groups (dihedral group of the square), composition tables, non-commuting operations; screened
// (symmetry group, wallpaper: 0 hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Isle of Anglesey W06000001 68,878. ONS built-up areas (published, agree
// with our output-area sums within 4): Holyhead 11,755; Llangefni 5,260; Amlwch 3,150; Menai Bridge 3,045; Llanfair
// Pwllgwyngyll 2,905; Benllech 2,075; Valley 2,005. No Welsh-language statistics (excluded by rule). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ANGLESEY', blurb: 'Holyhead, Llangefni, Amlwch and Menai Bridge on Ynys Môn, and a Beaumaris Castle lesson on how a program tests symmetry.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-anglesey',
  code: 'agy',
  accent: '#464C2A',
  accentRationale: 'Anglesey: a lichen olive on castle limestone, picked by the solver (7.27:1 on the darkest paper tint), greyer than the Highland olive',
  pageType: 'governorate',
  place: {
    name: 'Isle of Anglesey',
    eyebrow: 'Anglesey, Ynys Môn',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Bangor', href: '/best-coding-class-in-bangor-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Anglesey',
  title: 'Coding Classes in Anglesey, Ynys Môn | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Anglesey (Ynys Môn), from Holyhead and Llangefni to Amlwch, Menai Bridge, Beaumaris and Benllech.',
  ogDescription: 'Coding classes for all of Anglesey, and a Beaumaris Castle project: test a concentric castle plan against the eight symmetries of a square in Python.',
  twitterDescription: 'Anglesey coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Anglesey',
    description: 'Ability-placed online coding, Python, geometry and mathematics for children, teenagers and adults across the Isle of Anglesey, taught live in English.'
  },

  h1: 'Coding classes in Anglesey',
  capsuleQ: 'What are the best coding classes in Anglesey?',
  capsule: 'The Isle of Anglesey, Ynys Môn, had 68,878 usual residents at the 2021 census. Holyhead is by far its largest built-up area, followed by Llangefni, Amlwch, Menai Bridge and Llanfair Pwllgwyngyll, with Benllech, Valley and Beaumaris among the smaller places. All our teaching is live on video from India, and a free first lesson places each learner, whether in Year 2, Year 11 preparing for WJEC GCSEs, or long after school. People aged 6 to 67 learn coding, Python and maths with a teacher of their own or in a group of five to ten. The Anglesey project starts at Beaumaris Castle. After the free lesson, it is USD 100 a month for a group or USD 150 a month one-to-one.',
  lead: 'Cadw\'s record for Beaumaris Castle, listed at Grade I, says it was begun in 1295 as the last of the castles Edward I built in North Wales, and that it was designed on the concentric principle: moat, outer wall, outer ward and inner wall, one inside another. The inner ward is square; the outer wall is nearly square, with shallow facets that make an octagon. It looks like a textbook of symmetry, yet the record also notes the main entrance on the south side and a northern gate placed in the eastern facet, and says the castle was never finished. How symmetrical is it, exactly, and how could a program decide? This page\'s project answers with the maths of symmetry groups, in Python.',
  wa: 'Hello Modern Age Coders, we are on Anglesey and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Anglesey',
    h2: 'How Anglesey learners usually begin',
    intro: 'A Year 3 pupil in Holyhead who loves drawing castles, a Year 7 in Llangefni ready for typed code, a Year 11 in Amlwch preparing for WJEC GCSE Computer Science, and an adult in Menai Bridge learning Python. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with turning, flipping and repeating patterns.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Rotations, reflections and coordinates, understood by coding them.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from transformations to matrices and proof.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the start, up to geometry and data projects.' }
    ]
  },

  sections: [
    {
      id: 'anglesey', tint: '', eyebrow: 'Anglesey in figures',
      h2: '68,878 people on Ynys Môn',
      intro: 'The island total is the 2021 census count of usual residents, from ONS through Nomis. Town sizes are ONS built-up area figures from the same census.',
      body: [
        { kind: 'table', caption: 'Anglesey built-up areas above 2,000 people, ONS Census 2021', head: ['Built-up area', 'Residents', 'Built-up area', 'Residents'], rows: [
          ['Holyhead', '11,755', 'Llanfair Pwllgwyngyll', '2,905'],
          ['Llangefni', '5,260', 'Benllech', '2,075'],
          ['Amlwch', '3,150', 'Valley', '2,005'],
          ['Menai Bridge', '3,045', '', '']
        ] },
        { kind: 'p', text: 'We checked each built-up area figure against our own sum of census output areas, and the two agree to within a handful of people. Beaumaris, the castle town, falls below the table. Schools on Anglesey follow the Curriculum for Wales, which describes learning in progression steps rather than key stages, and older pupils sit WJEC GCSE and A level courses. Isle of Anglesey County Council sets term dates; we have not read them, so each family tells us its own.' },
        { kind: 'callout', h3: 'Bangor and Welsh exams', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> has its own page. For qualifications, see <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Anglesey project',
      h2: 'Eight ways to move a square',
      intro: 'Rotations, reflections, and a plan that loses its symmetry one feature at a time.',
      body: [
        { kind: 'p', text: 'The plan is a simplified model inspired by the record, not a survey. The learner places points for four towers on an inner square and eight turrets on an outer square around it. A square can be moved onto itself in exactly eight ways: turn it by 0, 90, 180 or 270 degrees, or flip it across one of four lines, the north-south line, the east-west line and the two diagonals. For each of the eight moves, the program transforms every point and checks whether the moved plan lands exactly on the original. The moves that pass are the plan\'s symmetries.' },
        { kind: 'table', caption: 'Our simplified concentric plan, symmetries found, 26 September 2026', head: ['Plan', 'Symmetries that survive', 'How many'], rows: [
          ['Two square rings of towers', 'All four turns and all four flips', '8'],
          ['Add a gate in the middle of the north and south sides', 'No turn, the half turn, and the flips across the north-south and east-west lines', '4'],
          ['Move the north gate into the eastern part of its side', 'Only doing nothing', '1']
        ] },
        { kind: 'p', text: 'The bare rings have the full symmetry of a square, eight moves. Add a gate to the middle of the north and south sides and the quarter turns fail, because a quarter turn would carry the north gate to the east side, where there is none, and the diagonal flips fail for the same reason. Four symmetries remain. Shift the north gate towards the east, as the record describes the real one, and even those fail: only the identity, the move that changes nothing, survives. A plan that looks symmetrical at a glance can have no symmetry at all.' },
        { kind: 'p', text: 'The symmetries also form a group, which the learner checks by composing every pair. For the four-move plan, doing any two in a row always gives one of the same four, and flipping across both axes gives the half turn. In the full set of eight, order matters: turning a quarter and then flipping is not the same as flipping and then turning, a first meeting with operations that do not commute, just like rotations in 3D graphics.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fold and turn a paper castle plan to find which moves fit it exactly, then draw it in Scratch with rotated stamps.' },
          { h3: 'Ages 11 to 15', p: 'Write Python that rotates and reflects a list of points and tests the eight moves of a square.' },
          { h3: 'Ages 15 and up', p: 'Build the composition table, prove the four-move set is closed, and find the pair of moves that do not commute.' }
        ] },
        { kind: 'callout', h3: 'A real castle, a model plan', p: 'The castle facts come from Cadw\'s listed building record. The coordinates in the model are invented and simplified; they do not claim to measure Beaumaris or to say exactly where its gates or towers stand.' }
      ]
    },
    {
      id: 'beaumaris-castle', tint: 'deep', eyebrow: 'Why Beaumaris Castle',
      h2: 'A concentric castle that was never finished',
      intro: 'What Cadw\'s listed building record says.',
      body: [
        { kind: 'table', caption: 'Beaumaris Castle, Cadw listed building record 5574, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Begun', '1295, the last of the castles built by Edward I in the North Wales defensive ring'],
          ['Master mason', 'Probably James of St George'],
          ['Design', 'Concentric: moat, outer curtain wall, outer ward and inner curtain wall'],
          ['Plan', 'Square inner ward; outer wall nearly square with shallow facets forming an octagon'],
          ['Gates', 'The Gate Next the Sea on the south side; the unfinished Llanfaes Gate in the eastern facet of the north side'],
          ['Unfinished', 'Work ceased around 1330 before completion; in state guardianship since 1925']
        ] },
        { kind: 'p', text: 'Symmetry is a working tool in computing: image recognition checks for mirrored shapes, 3D engines reuse one symmetric model many times, chemists classify molecules by their symmetry groups, and compression schemes save space by storing only one half of a symmetric pattern. An Anglesey pupil who has tested a castle plan with eight moves has met the same mathematics.' },
        { kind: 'p', text: 'We have no link with Cadw or Isle of Anglesey County Council. The record\'s facts are theirs; the model plan, the code and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From paper folding to group theory',
    intro: 'Year groups are only a guide; the free lesson finds the right level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Turns and flips', p: 'Block coding with rotated stamps, mirrors and patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Coordinates in Python', p: 'Typed Python moving points on a grid with simple rules.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Transformations and proof', p: 'Transformations, matrices and bigger programs alongside WJEC GCSE and A level work.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python with purpose', p: 'Python for adults, from geometry to data and automation.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and symmetry',
    h2: 'An AI can call a building symmetrical in seconds. Will it check every move?',
    intro: 'Looking symmetrical and being symmetrical are different claims.',
    p1: 'Describe a castle plan to a chatbot and it may confidently call it symmetrical, because most castles in its training look that way. Whether a quarter turn or a diagonal flip really maps the plan onto itself is something only a careful test settles.',
    p2: 'An Anglesey learner who has tested all eight moves knows to turn a vague claim into checks a program can run. That habit is exactly what AI-generated descriptions need.',
    closer: 'Turning a confident claim into a test is why a young person on Anglesey should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Holyhead to Beaumaris, lessons at home',
    intro: 'Towns and villages across the island join by video in the same way.',
    cells: [
      { h3: 'Your own screen', p: 'The learner types and runs the code while the teacher follows the shared screen.' },
      { h3: 'Set to the Welsh system', p: 'We place learners by Welsh school year and the Curriculum for Wales, and use WJEC names for GCSE and A level. Teaching is in English.' },
      { h3: 'Free first lesson', p: 'A complete lesson at no cost, then honest advice.' },
      { h3: 'Groups by level', p: 'Five to ten learners working at one level, joining from many places.' },
      { h3: 'Term time rhythm', p: 'Two lessons a week in term, with the school holidays off.' },
      { h3: 'A fixed UK time', p: 'Your lesson stays at the same UK time through the clock changes; our teachers in India time adjust.' }
    ],
    spec: { title: 'Why groups reach beyond the island', p: 'On an island of 68,878 people, five learners at one level free at the same hour are rare. Grouping by level across a wider pool gives a pupil in Amlwch or Benllech a class that fits.' }
  },

  fees: {
    h2: 'Fees on Anglesey',
    intro: 'Holyhead or Menai Bridge, the fee is the same, matching every country we teach outside India.',
    first: 'A full free lesson, then a clear recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with a teacher of your own.',
    closer: 'Fees are in US dollars and we publish no sterling prices. Billing starts only after the free lesson has fixed a course and weekly time; the pricing page covers holidays, missed lessons and changing formats.'
  },

  reviewsH2: 'Google reviews from our learners',

  book: {
    h2: 'Book a free Anglesey lesson',
    intro: 'Tell us the learner\'s age or school year and what they enjoy, and we will plan the free lesson around it: a Scratch pattern, some Python, or the castle symmetry on this page.',
    success: 'Thank you. Your Anglesey request has been received.'
  },

  faq: {
    h2: 'Anglesey questions',
    intro: 'The island, the Beaumaris project and practical details.',
    items: [
      { q: 'How many people live on Anglesey?', a: 'The 2021 census counted 68,878 usual residents in the Isle of Anglesey.' },
      { q: 'What are the largest towns on Anglesey?', a: 'By ONS 2021 built-up area figures: Holyhead 11,755, Llangefni 5,260, Amlwch 3,150 and Menai Bridge 3,045.' },
      { q: 'What is the Beaumaris Castle project?', a: 'Learners test a simplified concentric castle plan against the eight symmetries of a square in Python, and watch the count fall from 8 to 4 to 1 as gates are added and moved.' },
      { q: 'What is a symmetry group?', a: 'The set of all moves, such as turns and flips, that leave a shape looking exactly the same. Doing any two of them in a row always gives another one in the set.' },
      { q: 'When was Beaumaris Castle begun?', a: 'In 1295, according to Cadw, which lists it at Grade I as the last of the castles built by Edward I in North Wales.' },
      { q: 'Are lessons held on Anglesey?', a: 'Lessons are online, so learners join from home anywhere on the island.' },
      { q: 'Do you teach WJEC GCSE Computer Science?', a: 'Yes, and GCSE maths in Wales too. We aim for real understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'Six to 67, from block coding for young children to Python and exam work for teenagers and Python for adults.' },
      { q: 'How much are lessons?', a: 'The first lesson is free, then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the school holidays?', a: 'Yes. Send us your school\'s holiday dates and we stop for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More North Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a> tests a sunshine record for a hidden jump, and <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> and <a class="cg-inline-link" href="/best-coding-class-in-wrexham">Wrexham</a> have pages of their own. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page gathers every Welsh page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Anglesey and North Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-bangor-wales', label: 'Bangor' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-agy .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-agy .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.04; }
.cg-root.cg-agy .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-agy .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-agy .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-agy .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-agy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-agy .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-agy .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-agy .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Isle of Anglesey (W06000001), Isle of Anglesey County Council. ONS Census 2021 TS001 usual residents via Nomis: 68,878. ONS Census 2021 built-up areas (published; our output-area sums within 4): Holyhead 11,755; Llangefni 5,260; Amlwch 3,150; Menai Bridge 3,045; Llanfair Pwllgwyngyll 2,905; Benllech 2,075; Valley 2,005. Curriculum for Wales uses progression steps rather than key stages (Hwb, cited on the Wales hub page). Cadw listed building record 5574, Grade I, Beaumaris Castle: "begun in 1295, the last of the castles built by Edward I to create a defensive ring around the N Wales coast"; "The master mason was probably James of St George"; "designed on the concentric principle to have 4 defensive rings - moat, outer curtain wall, outer ward and inner curtain wall"; "work ceased c1330 before the castle was complete"; "an inner ward, which is square in plan"; "an outer curtain wall which is nearly square in plan but has shallow facets to form an octagon"; "The main entrance was the S side, or Gate Next the Sea"; "On the N side, in the eastern facet, is the N or Llanfaes Gate. This was unfinished"; "Since 1925 it has been in the guardianship of the state".',
    localProject: 'Invented plan: inner towers (+-2, +-2), outer turrets on the square of side 8 (8 points). Symmetries of the square group: rings 8; plus central N and S gates 4 (identity, rotate 180, NS mirror, EW mirror), closed; north gate shifted east 1 (identity); dock added 1. Two axis mirrors compose to rotate 180. Rotate 90 after NS mirror = other diagonal mirror; NS mirror after rotate 90 = diagonal mirror (non-commuting). Lesson family: symmetry groups.',
    requiredMentions: [
      'Llangefni',
      'Amlwch',
      'Menai Bridge',
      'Llanfair Pwllgwyngyll',
      'Benllech',
      'Beaumaris',
      'Ynys Môn',
      'Llanfaes',
      'Gate Next the Sea',
      'symmetry group'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Isle of Anglesey, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 5574: Beaumaris Castle.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=5574' }
    ],
    rejectedClaims: [
      'Real coordinates, tower counts or gate positions of Beaumaris Castle: model plan is invented and simplified.',
      'World Heritage Site status: not read from a primary source today, not claimed.',
      'Welsh-language statistics: excluded by rule.',
      'Menai Suspension Bridge facts: not used (suspension lessons exist elsewhere).',
      'Named Anglesey schools and school term dates: none named or read.',
      'Ferry details from Holyhead: not claimed.'
    ]
  }
};
