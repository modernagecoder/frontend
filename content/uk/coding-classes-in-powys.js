'use strict';
// Powys (cg- county page, UK cluster Phase 7, row 297). One principal area. Spine: why does a full theatre sound drier
// than an empty one? Anchor (read raw 26 September 2026): Cadw listed building record 7492, Grade I, Theatre at Craig-y-nos,
// Tawe-Uchaf: "Theatre was constructed in 1890 by Bucknall and Jennings of Swansea"; built "for the famous opera singer
// Adelina Patti following her acquisition of the property in 1879"; "Plan is a small version of the Bayreuth theatre and
// seats 150"; "At the opening in 1891 Madame Patti performed extracts of La Traviata and Faust"; curtain drop "depicting
// Madame Patti as Semiramide"; "Outstanding decorative interior, with fine plasterwork"; "glazed and louvred ventilator".
// Our model (computed inline; invented hall 15 x 9 x 8 m = 1,080 m3, surface 654 m2; typical mid-frequency textbook
// coefficients: plaster 0.03, wooden floor 0.10, empty wooden chair 0.02, empty upholstered seat 0.30, seated person 0.45
// m2 each). Sabine T = 0.161 V / A. Bare: A 29.1, 5.98 s (Eyring 5.85). Wooden chairs: 32.1, 5.42 s. Upholstered empty:
// 74.1, 2.35 s. Full, 150 people: 96.6, 1.80 s (Eyring 1.66). Half full on upholstered seats: 85.3, 2.04 s. All surfaces
// 0.6: Sabine 0.44, Eyring 0.29. All surfaces 1.0: Sabine 0.27 s though the answer must be 0. Bug: cubic feet into the metric
// formula gives 63.59 s.
// Lesson family: room acoustics, Sabine vs Eyring reverberation time; screened (Sabine, reverberation, RT60, acoustic:
// 0 hits; Islington used equal temperament, not rooms).
// Place facts: ONS Census 2021 TS001 via Nomis: Powys W06000023 133,169. ONS built-up areas wholly inside (published; OA
// sums within 5): Newtown (Powys) 10,885; Brecon 8,255; Welshpool 5,455; Llandrindod Wells 5,430; Ystradgynlais 4,030;
// Knighton 2,910; Builth Wells 2,620; Llanidloes 2,200; Machynlleth 2,160; Crickhowell 2,110. Straddling Ystalyfera and
// Hay-on-Wye not tabulated. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'POWYS', blurb: 'Newtown, Brecon, Welshpool and Llandrindod Wells, and a Craig-y-nos lesson on why an audience changes how a theatre sounds.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-powys',
  code: 'pow',
  accent: '#5C1757',
  accentRationale: 'Powys: an opera-velvet plum from the solver (9.87:1 on the darkest paper tint), for a gilded private theatre',
  pageType: 'governorate',
  place: {
    name: 'Powys',
    eyebrow: 'Powys',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Hereford', href: '/best-coding-class-in-hereford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Powys',
  title: 'Coding Classes in Powys | Live Online Coding, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Powys, from Newtown, Brecon and Welshpool to Llandrindod Wells, Knighton, Llanidloes and Machynlleth.',
  ogDescription: 'Coding classes for all of Powys, and a Craig-y-nos project: calculate in Python how long sound rings in a theatre, empty and full, and where the formula breaks.',
  twitterDescription: 'Powys coding, Python and maths classes for ages 6 to 67, taught live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Powys',
    description: 'Online coding, Python, acoustics-flavoured maths and mathematics for children, teenagers and adults in Powys, taught live in English and placed by ability.'
  },

  h1: 'Coding classes in Powys',
  capsuleQ: 'What are the best coding classes in Powys?',
  capsule: 'Powys had 133,169 residents in the 2021 census, spread across small towns. Newtown is the biggest, at 10,885, followed by Brecon, Welshpool and Llandrindod Wells, with Ystradgynlais, Knighton, Builth Wells, Llanidloes, Machynlleth and Crickhowell each above 2,000. Distance matters little to us, because all teaching is live on video from our teachers in India. From age 6 to 67, learners take coding, Python and maths privately or in a level-matched group of five to ten. The first lesson is free and decides the starting course. The Powys project begins in an opera singer\'s private theatre. Afterwards, fees are USD 100 a month for a group place or USD 150 a month one-to-one.',
  lead: 'In 1890 the opera star Adelina Patti added a private theatre to her home at Craig-y-nos. Cadw lists it at Grade I and records that it is a small version of the Bayreuth theatre, seats 150, and opened in 1891 with Patti singing extracts from La Traviata and Faust. Anyone who has sung in an empty hall and then a full one knows the room changes. With no audience, each note rings on; with every seat taken, the sound dies away faster. Why? Every surface soaks up a little sound, and people soak up a lot. A formula worked out by the physicist Wallace Sabine around 1900 turns that into numbers, and this page\'s project codes it in Python.',
  wa: 'Hello Modern Age Coders, we are in Powys and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Powys',
    h2: 'First courses for Powys learners',
    intro: 'A Year 2 pupil in Knighton who loves music, a Year 7 in Llandrindod Wells writing first Python, a Year 11 in Brecon with WJEC GCSE maths coming, and an adult in Welshpool picking up data skills. One free lesson points each to a course.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with sounds, echoes and musical instruments.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Area, volume and formulas tested by writing code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Rigorous secondary maths, from logarithms to modelling.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for data, from first tables to clear charts.' }
    ]
  },

  sections: [
    {
      id: 'powys', tint: '', eyebrow: 'Powys in numbers',
      h2: '133,169 residents across Powys',
      intro: 'ONS recorded 133,169 usual residents in Powys at the 2021 census; we read it through Nomis. The towns listed are ONS built-up areas lying wholly inside the county.',
      body: [
        { kind: 'table', caption: 'Powys built-up areas of 2,000 residents or more, ONS 2021', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Newtown', '10,885', 'Knighton', '2,910'],
          ['Brecon', '8,255', 'Builth Wells', '2,620'],
          ['Welshpool', '5,455', 'Llanidloes', '2,200'],
          ['Llandrindod Wells', '5,430', 'Machynlleth', '2,160'],
          ['Ystradgynlais', '4,030', 'Crickhowell', '2,110']
        ] },
        { kind: 'p', text: 'Ystalyfera and Hay-on-Wye reach across the county line, so they stay out of the table. Our own output-area sums land within five residents of each published figure. Powys schools use the Curriculum for Wales, and exam years take WJEC GCSE and A level courses. We have not looked up Powys holiday dates, so every family tells us its own.' },
        { kind: 'callout', h3: 'Hereford and WJEC support', p: 'In England, <a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford</a> has its own city page. For exams, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Powys project',
      h2: 'How long does a note hang in the air?',
      intro: 'Room volume on top, total absorption underneath, and one constant.',
      body: [
        { kind: 'p', text: 'Acousticians measure reverberation time: how many seconds a sound takes to fade by 60 decibels, to about a millionth of its power. Sabine\'s formula says it is 0.161 times the room\'s volume in cubic metres, divided by its total absorption. Absorption is each surface\'s area times a coefficient between 0, a perfect mirror for sound, and 1, an open window. The learner builds a model hall 15 by 9 by 8 metres, which is our invention and not the real theatre\'s size, gives plaster, wood, seats and people typical textbook coefficients, and lets Python add it all up.' },
        { kind: 'table', caption: 'Our reverberation sums for a 1,080 cubic metre model hall, mid frequencies, 26 September 2026', head: ['Hall setting', 'Total absorption', 'Sabine time', 'Eyring time'], rows: [
          ['Bare plaster and wood', '29 m²', '6.0 s', '5.9 s'],
          ['150 empty wooden chairs', '32 m²', '5.4 s', '5.3 s'],
          ['150 empty padded seats', '74 m²', '2.4 s', '2.2 s'],
          ['Half full, padded seats', '85 m²', '2.0 s', '1.9 s'],
          ['Full, 150 people', '97 m²', '1.8 s', '1.7 s']
        ] },
        { kind: 'p', text: 'A bare plaster room rings for about six seconds, far too long for words to stay clear. Wooden chairs barely help. An audience changes everything: 150 seated people bring the time down to 1.8 seconds. The table also shows a designer\'s trick. With padded seats, an empty hall already sounds close to a full one, so a rehearsal and a performance feel alike. That is one reason many concert halls choose well-padded seats.' },
        { kind: 'p', text: 'Then the learner breaks the formula on purpose. Line every surface with something that absorbs everything, like the open air, and the true answer must be zero seconds, since nothing comes back. Sabine\'s formula still says 0.27. A later formula by Carl Eyring uses a logarithm and gets zero right, which is why the last column differs most when rooms are very absorbent. The classic slip is units: put the volume in cubic feet but keep the metric constant, and the full hall rings for 63.6 seconds.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Clap in a bathroom and a bedroom, compare the echo, then make a sound-fading animation in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code the room volume, surface areas and absorption in Python, and print the reverberation time for each setting.' },
          { h3: 'Ages 15 and up', p: 'Add Eyring\'s logarithm, find where the two formulas part company, and test for the unit slip.' }
        ] },
        { kind: 'callout', h3: 'A real theatre, a model room', p: 'Date, seating and opening night come from Cadw\'s record. The room size and coefficients are ours, so the table shows how any small theatre behaves, not measured Craig-y-nos acoustics.' }
      ]
    },
    {
      id: 'craig-y-nos', tint: 'deep', eyebrow: 'Why Craig-y-nos',
      h2: 'An opera star\'s own stage',
      intro: 'What Cadw\'s record of the theatre says.',
      body: [
        { kind: 'table', caption: 'Theatre at Craig-y-nos, Tawe-Uchaf, Cadw listed building record 7492, Grade I', head: ['From the record', 'Detail'], rows: [
          ['Built', '1890, by Bucknall and Jennings of Swansea'],
          ['For', 'The opera singer Adelina Patti, who acquired the property in 1879'],
          ['Plan', 'A small version of the Bayreuth theatre, seating 150'],
          ['Opening', '1891, with Patti singing extracts of La Traviata and Faust'],
          ['Curtain', 'A drop showing Patti as Semiramide'],
          ['Interior', 'Outstanding plasterwork, painted and gilded, with composers\' names in the frieze']
        ] },
        { kind: 'p', text: 'Acoustic modelling is now software work. Architects simulate concert halls before they are built, sound engineers tune studios and cinemas, and phone makers model how voices bounce around a room so calls stay clear. They all start from the relation a Powys learner codes here, then refine it. Understanding where a trusted formula fails, and why a better one exists, is exactly the habit engineers need.' },
        { kind: 'p', text: 'Modern Age Coders has no tie to Cadw. The record is Cadw\'s own; the acoustics arithmetic, with any errors, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route through the years',
    h2: 'From clapping games to logarithms',
    intro: 'Bands are approximate; the free lesson decides where each learner starts.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sounds and blocks', p: 'Block coding with sound effects, music and timing.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Area and volume', p: 'Python that calculates rooms, surfaces and totals.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Logs and models', p: 'Logarithms, decibels and modelling with WJEC GCSE and A level in view.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Python for work', p: 'Adult Python and data skills, taught from the beginning.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and formulas',
    h2: 'An AI will happily give you Sabine\'s formula. Will it tell you where it fails?',
    intro: 'Knowing a formula\'s limits matters as much as knowing the formula.',
    p1: 'Ask a chatbot for a reverberation calculator and you will probably get Sabine\'s formula, neatly coded. Few answers mention that it gives nonsense for very absorbent rooms, or check whether the volume was in feet or metres.',
    p2: 'A Powys learner who has pushed a formula to its limit and watched it break knows to ask what a tool leaves out, whether the tool is a textbook or an AI.',
    closer: 'Testing a trusted formula until it breaks is good reason for a Powys teenager to go on coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical side',
    h2: 'From Machynlleth to Crickhowell, one video link',
    intro: 'A big rural county, and no travel at all.',
    cells: [
      { h3: 'Learners at the keys', p: 'Each student types their own code, while the teacher watches the shared screen and asks guiding questions.' },
      { h3: 'Welsh placement', p: 'A Builth Wells Year 3 or a Newtown Year 12 is placed by Welsh school year and progression step, with exams named the WJEC way. Lessons run in English.' },
      { h3: 'Free first session', p: 'A complete trial lesson, no charge, then a straight recommendation.' },
      { h3: 'Level, not location', p: 'Classes of five to ten at one level, from all over the UK.' },
      { h3: 'Termly timetable', p: 'Two lessons a week in term; holidays kept free.' },
      { h3: 'Clocks look after themselves', p: 'When the UK clocks change, your lesson stays at the same local time and our teachers move instead.' }
    ],
    spec: { title: 'Why distance does not matter', p: 'In a county this spread out, a keen coder may be the only one nearby. Online groups let a learner in Llanidloes or Ystradgynlais study beside peers at the same level.' }
  },

  fees: {
    h2: 'Fees in Powys',
    intro: 'Whether you live in Brecon or Welshpool, the fee is the same, and the same again in every country we teach outside India.',
    first: 'A whole trial lesson, free, then our honest view.',
    group: 'Close to eight classes a month in a group of five to ten.',
    private: 'Close to eight classes a month with your own tutor.',
    closer: 'Everything is priced in US dollars; there is no sterling price. Billing begins once the trial has agreed a course and a weekly time, and the pricing page explains holidays, missed classes and changes between group and private.'
  },

  reviewsH2: 'Our Google rating from families',

  book: {
    h2: 'Book a free Powys lesson',
    intro: 'Let us know the learner\'s age or school year and something they like. Their trial could be a Scratch music project, a first Python calculator, or the Craig-y-nos acoustics sums.',
    success: 'Thank you. We have received your Powys request.'
  },

  faq: {
    h2: 'Powys questions',
    intro: 'The county, the theatre project and how classes work.',
    items: [
      { q: 'What is the population of Powys?', a: 'Powys had 133,169 usual residents at the 2021 census.' },
      { q: 'What is the largest town in Powys?', a: 'Newtown, at 10,885 residents in the ONS 2021 built-up area, ahead of Brecon at 8,255.' },
      { q: 'What is the Craig-y-nos project?', a: 'Learners code Sabine\'s reverberation formula in Python to compare an empty and a full theatre, then find where Eyring\'s formula does better.' },
      { q: 'What is reverberation time?', a: 'The time a sound takes to fade by 60 decibels after it stops, which decides whether a room sounds clear or boomy.' },
      { q: 'Who built the theatre at Craig-y-nos?', a: 'Cadw records that it was built in 1890 for the opera singer Adelina Patti and seats 150.' },
      { q: 'Do lessons happen in Powys?', a: 'They are all online, so a learner anywhere in Powys joins from home.' },
      { q: 'Do you cover WJEC GCSE subjects?', a: 'Yes, maths and digital subjects. We aim for understanding, not grade guarantees.' },
      { q: 'What ages do you teach?', a: 'Six to 67, with courses from first blocks to adult Python.' },
      { q: 'How much do lessons cost?', a: 'The first is free. After that, USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Are there lessons during school holidays?', a: 'No. Send us the holiday weeks and those lessons are skipped.' }
    ]
  },

  next: {
    eyebrow: 'Neighbouring pages',
    h2: 'Nearby in Wales and the Marches',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford</a> has a city page, <a class="cg-inline-link" href="/coding-classes-in-monmouthshire">Monmouthshire</a> works out how much a hilltop telescope could see, and <a class="cg-inline-link" href="/coding-classes-in-ceredigion">Ceredigion</a> asks what a weather record of zero events proves. Every Welsh area we cover is gathered on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page; the rest of Britain starts at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp our team'
  },

  footerHeading: 'Powys and Mid Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-hereford', label: 'Hereford' },
    { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC GCSE Digital Technology' }
  ],

  personalityCss: `
.cg-root.cg-pow .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.4vw, 2.7rem); }
.cg-root.cg-pow .cg-hero h1 { font-weight: 720; letter-spacing: -0.026em; line-height: 1.04; font-style: italic; }
.cg-root.cg-pow .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-pow .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pow .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-pow .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-pow .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pow .cg-table th { letter-spacing: 0.055em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-pow .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-pow .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Powys (W06000023). ONS Census 2021 TS001 via Nomis: 133,169. ONS built-up areas wholly inside (published; OA sums within 5): Newtown (Powys) 10,885; Brecon 8,255; Welshpool 5,455; Llandrindod Wells 5,430; Ystradgynlais 4,030; Knighton 2,910; Builth Wells 2,620; Llanidloes 2,200; Machynlleth 2,160; Crickhowell 2,110. Straddling (not tabulated): Ystalyfera, Hay-on-Wye. Cadw listed building record 7492, Grade I, Theatre at Craig-y-nos: "constructed in 1890 by Bucknall and Jennings of Swansea"; for "the famous opera singer Adelina Patti following her acquisition of the property in 1879"; "Plan is a small version of the Bayreuth theatre and seats 150"; "At the opening in 1891 Madame Patti performed extracts of La Traviata and Faust"; curtain "depicting Madame Patti as Semiramide".',
    localProject: 'Sabine T = 0.161 V/A, invented hall 15 x 9 x 8 m (1,080 m3, 654 m2), coefficients plaster 0.03, wood floor 0.10, wooden chair 0.02, padded seat 0.30, person 0.45. Bare 29.1 m2 5.98 s (Eyring 5.85); wooden chairs 32.1 5.42; padded empty 74.1 2.35 (2.21); half full 85.3 2.04 (1.90); full 96.6 1.80 (1.66). All 0.6: 0.44 vs 0.29; all 1.0: Sabine 0.27 s vs true 0. Cubic-feet slip: 63.59 s. Lesson family: room acoustics, Sabine vs Eyring.',
    requiredMentions: [
      'Brecon',
      'Welshpool',
      'Llandrindod Wells',
      'Ystradgynlais',
      'Knighton',
      'Builth Wells',
      'Llanidloes',
      'Machynlleth',
      'Craig-y-nos',
      'Adelina Patti',
      'reverberation',
      'Sabine'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Powys, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 7492: Theatre at Craig-y-nos.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=7492' }
    ],
    rejectedClaims: [
      'Real dimensions or measured acoustics of the Craig-y-nos theatre: not in the record; the model hall is ours.',
      'Crickhowell Bridge arch counts (Cadw 7237): considered, not used.',
      'Largest county by area and valley location: not claimed.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.'
    ]
  }
};
