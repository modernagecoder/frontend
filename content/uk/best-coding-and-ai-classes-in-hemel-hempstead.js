'use strict';
// Hemel Hempstead (cg- town page, UK cluster Phase 8, towns band A, row 332). Keyword slug per the owner's 2026-09-27
// instruction. Spine: why does an A4 sheet keep its shape when folded? Anchors (read raw 27 September 2026): Project
// Gutenberg ebook 55757, Alexander Watt, "The Art of Paper-Making" (preface dated January 1890): the Fourdriniers, with
// Bryan Donkin, "constructed a self-acting machine, or working model, in 1803"; "This machine was erected at Frogmore,
// Hertfordshire; and in 1804 a second machine was made and put up at Two-Waters, Herts, which was completely successful".
// postcodes.io /places (OS Open Names): "Two Waters" Suburban Area, Dacorum, Hertfordshire, HP3 (the only Hertfordshire
// match); Frogmore has three Hertfordshire matches (St Albans, North Hertfordshire, and Frogmore End in Dacorum), so the
// page does not say which Frogmore the book means. Project Gutenberg ebook 70338, Richard Herring, "Paper & paper making,
// ancient and modern" (Longman, 1855): list of fine paper sizes as sent from the mill, "Pot" 12½ by 15 inches to
// "Antiquarian, 53 by 31" (26 sizes used here, the "fine quality" list).
// Our run (scratchpad hh/paper.py, 27 September 2026): long/short ratio for 26 sizes; only Super Royal (27 by 19, 1.421)
// within 2 per cent of the square root of 2 (1.4142); mean distance 0.164. Folding Foolscap (17 by 13½): 1.259, 1.588,
// 1.259, 1.588; Demy 1.29/1.55; Imperial 1.364/1.467. A sheet of 1 square metre in ratio root 2: 1,189.2 by 840.9 mm;
// halved four times: 297.3 by 210.2 mm (A4 is 297 by 210). Double sizes: Double Foolscap exactly two Foolscaps; Double Post
// 2.03 times Post; Double Pot four times the area of Pot; Double Elephant 1.66 times Elephant.
// Lesson family: aspect ratio invariance under halving, root 2 (ISO 216 principle), data validation of named doubles;
// screened (ISO 216, square root of 2, aspect ratio, paper size, Fourdrinier: 0 hits; "A4" hits were road numbers).
// thepapertrail.org.uk (the Frogmore Mill trust domain) now serves spam; not used.
// Place facts: Nomis Census 2021 TS007A, Dacorum E07000096: total 155,081; under 5 9,581 (6.2%; England 5.4%); 5 to 9 9,929
// (6.4%; 5.9%); 20 to 24 7,104 (4.6%; 6.0%); 35 to 39 11,101 (7.2%; 6.7%); 40 to 44 11,030 (7.1%; 6.3%); 85+ 4,011 (2.6%;
// 2.4%). ONS 2021 BUAs: Hemel Hempstead 95,985; Berkhamsted 21,240; Tring 11,960; Bovingdon 5,310 (Abbots Langley and
// Kings Langley crosses the boundary; not quoted).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HEMEL HEMPSTEAD', label: 'Hemel Hempstead', blurb: 'Coding and AI classes for Hemel Hempstead, with a project on old paper sizes and why an A4 sheet keeps its shape when folded.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-hemel-hempstead',
  code: 'hhm',
  accent: '#321B4C',
  accentRationale: 'Hemel Hempstead: an iron-gall ink violet (12.11:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Hemel Hempstead',
    eyebrow: 'Hemel Hempstead, Hertfordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hemel Hempstead, England',
  title: 'Coding and AI Classes in Hemel Hempstead | Python, Ages 6 to 67',
  description: 'Online coding, AI and Python classes for Hemel Hempstead, Berkhamsted, Tring and Dacorum learners aged 6 to 67, taught live. The first lesson is free.',
  ogDescription: 'Live online coding and AI classes for Hemel Hempstead, and a Python project that tests 26 old paper sizes against the square root of 2.',
  twitterDescription: 'Hemel Hempstead coding, AI and Python classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hemel Hempstead',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Hemel Hempstead and Dacorum, taught live at the right level.'
  },

  h1: 'Coding and AI classes in Hemel Hempstead',
  capsuleQ: 'Where can Hemel Hempstead families find the best coding and AI classes?',
  capsule: 'In 2021 the census recorded 155,081 people across Dacorum, the borough around Hemel Hempstead, and 95,985 in the Hemel Hempstead built-up area. Young children and parents in their late thirties and early forties are above the England share, while people aged 20 to 24 are well below it. Coding, AI, Python and maths are taught live over video by our tutors in India, to anyone from 6 to 67, alone or alongside four to nine others working at the same stage. A free first lesson tells us the right course. The Hemel Hempstead project measures 26 paper sizes from 1855 in Python. Those who continue pay USD 100 monthly for a shared class or USD 150 monthly for a private one.',
  lead: 'In his 1890 book The Art of Paper-Making, Alexander Watt records that after a first working model in 1803, "in 1804 a second machine was made and put up at Two-Waters, Herts, which was completely successful". Two Waters is today a suburban area of Dacorum with a Hemel Hempstead postcode, and machines like that one made paper in long continuous rolls that then had to be cut into sheets. The sheets had wonderful names: Pot, Foolscap, Demy, Royal, Elephant, Atlas. Richard Herring listed 26 of them in inches in 1855. Today most home and school printers take one size, A4. Why that shape? A Hemel Hempstead learner can find out in Python by folding each old sheet in half, again and again, and watching what happens to its proportions.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Hemel Hempstead.',

  picks: {
    eyebrow: 'Hemel Hempstead picks',
    h2: 'Where Hemel Hempstead learners start',
    intro: 'Match the course to age and curiosity; all of them open with a free live session and need no payment card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with shapes, sizes and folding puzzles.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python and small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the paper-size project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from the first line, through data and algorithms.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dacorum today',
      h2: 'Families in Hemel and the market towns',
      intro: 'Dacorum in census table TS007A (2021), via Nomis, six bands next to England.',
      body: [
        { kind: 'table', caption: 'Selected age bands for Dacorum beside England (TS007A, 2021 census)', head: ['Age band', 'Dacorum residents', 'Dacorum share', 'England share'], rows: [
          ['Under 5', '9,581', '6.2%', '5.4%'],
          ['5 to 9', '9,929', '6.4%', '5.9%'],
          ['20 to 24', '7,104', '4.6%', '6.0%'],
          ['35 to 39', '11,101', '7.2%', '6.7%'],
          ['40 to 44', '11,030', '7.1%', '6.3%'],
          ['85 and over', '4,011', '2.6%', '2.4%']
        ] },
        { kind: 'p', text: 'Young children and their parents are above the national share, and people in their early twenties well below it. Beyond Hemel Hempstead, the ONS lists Berkhamsted at 21,240, Tring at 11,960 and Bovingdon at 5,310, all inside Dacorum. The national curriculum for England applies in local schools, and our timetable leaves out whichever holiday weeks you tell us about.' },
        { kind: 'callout', h3: 'County and region', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page for the county and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page for the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hemel Hempstead project',
      h2: 'Folding 26 sheets of 1855 paper',
      intro: 'Only one shape survives halving unchanged.',
      body: [
        { kind: 'p', text: 'The learner types Herring\'s 26 fine paper sizes into Python, converting fractions like 13½ into decimals, and works out each aspect ratio, the long side divided by the short. Then comes the folding function: halve the long side and swap if needed. For Foolscap, 17 by 13½ inches, the ratio starts at 1.259; fold it and it jumps to 1.588; fold again and it returns to 1.259. The sheet keeps flipping between two different shapes, so a folded Foolscap page never looks like a small Foolscap.' },
        { kind: 'table', caption: 'Our Python aspect ratios for Herring\'s 1855 paper sizes, 27 September 2026', head: ['Sheet', 'Size in inches', 'Ratio', 'After one fold'], rows: [
          ['Super Royal', '27 by 19', '1.421', '1.407'],
          ['Imperial', '30 by 22', '1.364', '1.467'],
          ['Demy', '20 by 15½', '1.290', '1.550'],
          ['Foolscap', '17 by 13½', '1.259', '1.588'],
          ['Pot', '15 by 12½', '1.200', '1.667'],
          ['Sheet-and-half Foolscap', '24½ by 13¼', '1.849', '1.082']
        ] },
        { kind: 'p', text: 'Algebra explains it. If a sheet has ratio r, folding it gives ratio 2 divided by r. The shape stays the same only when r equals 2 divided by r, which means r is the square root of 2, about 1.4142. Of Herring\'s 26 sizes, only Super Royal comes within 2 per cent of it. The learner then builds the modern answer: a sheet of exactly one square metre with sides in the ratio root 2 measures 1,189 by 841 millimetres, and halving it four times gives 297 by 210 millimetres, the familiar A4 page.' },
        { kind: 'p', text: 'The final step is data checking. Herring lists "Double" versions of some sizes, and the program tests whether each is really two of the original laid side by side. Double Foolscap, 27 by 17, is exactly two Foolscaps. Double Post is within 2 per cent. But Double Pot has four times the area of Pot, and Double Elephant only 1.66 times Elephant: the names are traditions, not rules. The learner writes tests for the fold function, including that a root-2 sheet returns its own ratio.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fold A4 and a square of paper in half several times and measure the shapes with a ruler.' },
          { h3: 'Ages 11 to 15', p: 'Write the ratio and fold functions in Python and test all 26 sizes.' },
          { h3: 'Ages 15 and up', p: 'Prove the root 2 result, build the A series, and check the named double sizes.' }
        ] },
        { kind: 'callout', h3: 'Old books, our code', p: 'The Two Waters quotation is from Alexander Watt\'s The Art of Paper-Making, and the sizes from Richard Herring\'s Paper & paper making, both on Project Gutenberg. The ratios, folds and checks are ours.' }
      ]
    },
    {
      id: 'mills', tint: 'deep', eyebrow: 'Why Two Waters',
      h2: 'Continuous paper and the Fourdrinier machine',
      intro: 'What the two Victorian books say.',
      body: [
        { kind: 'table', caption: 'From Watt (1890) and Herring (1855), Project Gutenberg editions', head: ['Detail', 'What the book says'], rows: [
          ['The machine', 'Named after the Fourdriniers, who improved an earlier French design'],
          ['The engineer', 'Built with the help of Bryan Donkin, according to Watt'],
          ['First working model', '1803, erected at Frogmore, Hertfordshire'],
          ['Second machine', '1804, at Two-Waters, Herts, completely successful'],
          ['Smallest fine size in Herring', 'Pot, 12½ by 15 inches'],
          ['Largest fine size in Herring', 'Antiquarian, 53 by 31 inches']
        ] },
        { kind: 'p', text: 'Aspect ratios matter far beyond paper. Screens, photographs, video frames and printed posters all have them, and code that resizes an image without keeping the ratio stretches every face in it. Web designers, game developers and anyone building a printing tool meet the same rule the learner found by folding Foolscap: scale both sides together, or the shape changes. Hertfordshire has more than one place called Frogmore, so the page says only what the books say about where the first model stood.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg or the ONS. Their books and figures belong to them; this program and whatever it gets wrong belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning stages',
    h2: 'From folding paper to image processing',
    intro: 'Years are a guide; the trial lesson decides the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Shapes in blocks', p: 'Block coding with shapes, scaling and simple games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and ratios', p: 'Functions, fractions and ratios in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Proof and AI', p: 'Algebra in code, data and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Useful programming', p: 'Adult Python with data and graphics.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and images',
    h2: 'Does an AI keep the shape when it resizes?',
    intro: 'Stretching is the most common image bug.',
    p1: 'Ask a chatbot to write code that resizes a picture and it may set the width and height separately. The code runs, and every face in the picture comes out slightly stretched.',
    p2: 'A Hemel Hempstead learner who has folded Foolscap in Python knows to check that the ratio survives any change of size.',
    closer: 'Making sure a picture keeps its proportions through the code is the kind of care that makes programming worth learning in Hemel Hempstead in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'Hemel, Berkhamsted and Tring, all online',
    intro: 'Anywhere in Dacorum joins by live video.',
    cells: [
      { h3: 'The student codes', p: 'Every program is typed by the learner; the tutor follows on the shared screen and guides with questions.' },
      { h3: 'Starting at the right rung', p: 'From Year 4 up to Year 12, placement follows the school year and what the trial reveals, with the correct exam board in mind.' },
      { h3: 'A trial on the house', p: 'You pay nothing for the first lesson, and you leave it with a plain answer about what fits.' },
      { h3: 'Peers at your stage', p: 'Each class gathers five to ten UK learners who have reached the same point.' },
      { h3: 'Term-time rhythm', p: 'Two lessons weekly in term; none in the holidays.' },
      { h3: 'Steady lesson time', p: 'Our teachers adjust for UK clock changes, so your slot does not move.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Hemel learners at one level and one free hour rarely live near each other. Online groups give everyone the right class.' }
  },

  fees: {
    h2: 'Fees in Hemel Hempstead',
    intro: 'One fee structure covers Hemel Hempstead and every other country we teach outside India.',
    first: 'A complete lesson free, with a clear course suggestion.',
    group: 'Roughly eight live small-class lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'Fees are charged in US dollars, never sterling. Invoicing begins only after the free session has matched the learner to a course and a regular weekday slot. Breaks, absences and any move from group to private are set out on our pricing page.'
  },

  reviewsH2: 'Reviews left on Google by our learners',

  book: {
    h2: 'Book a free Hemel Hempstead lesson',
    intro: 'Give us an age or school year and one interest. A trial might be a Scratch shape game, a first Python program, an AI project, or the paper-folding puzzle.',
    success: 'Thank you. Your Hemel Hempstead request is with us.'
  },

  faq: {
    h2: 'Hemel Hempstead questions',
    intro: 'The town, the paper project and how lessons work.',
    items: [
      { q: 'What is the population of Hemel Hempstead?', a: 'The ONS gives 95,985 for the Hemel Hempstead built-up area in 2021; Dacorum as a whole had 155,081.' },
      { q: 'Is online coding and AI tuition open to Hemel Hempstead residents?', a: 'Of course. Whether you live in Apsley, Berkhamsted, Tring or Bovingdon, anyone aged 6 to 67 can study coding, AI, Python and maths with us live online.' },
      { q: 'What is the paper size project?', a: 'Learners test 26 paper sizes from Richard Herring\'s 1855 book in Python and discover why only a root 2 shape survives folding.' },
      { q: 'Why is A4 the shape it is?', a: 'Its sides are in the ratio of the square root of 2, so folding it in half gives the same shape at half the size.' },
      { q: 'What is the Two Waters paper machine?', a: 'Alexander Watt\'s 1890 book records that in 1804 a second paper machine was put up at Two-Waters, Herts, and was completely successful.' },
      { q: 'Will we need to travel?', a: 'No, they are live online, so every part of Dacorum is covered.' },
      { q: 'Is there GCSE and A level help?', a: 'Yes, maths and computing, taught for understanding; grades are never promised.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67, including adults.' },
      { q: 'How much are lessons?', a: 'The trial is free of charge. Afterwards it is USD 100 monthly in a small class or USD 150 monthly on your own with a tutor.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages near Hemel Hempstead',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> page covers the county, <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a> answers census questions with prefix sums, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hemel Hempstead and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hhm .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-hhm .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-hhm .cg-capsule { border: 1px solid var(--cg-accent); border-left-width: 6px; padding: 0.9rem 1rem; }
.cg-root.cg-hhm .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hhm .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-hhm .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-hhm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hhm .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-hhm .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hhm .cg-callout { border-radius: 0 8px 8px 0; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Dacorum (E07000096). Nomis Census 2021 TS007A: total 155,081; under 5 9,581 (6.2%, England 5.4%); 5 to 9 9,929 (6.4%, 5.9%); 20 to 24 7,104 (4.6%, 6.0%); 35 to 39 11,101 (7.2%, 6.7%); 40 to 44 11,030 (7.1%, 6.3%); 85+ 4,011 (2.6%, 2.4%). ONS 2021 BUAs: Hemel Hempstead 95,985; Berkhamsted 21,240; Tring 11,960; Bovingdon 5,310. Project Gutenberg 55757, Alexander Watt, The Art of Paper-Making (1890): "in 1804 a second machine was made and put up at Two-Waters, Herts, which was completely successful". postcodes.io places: Two Waters, Suburban Area, Dacorum, HP3. Project Gutenberg 70338, Richard Herring, Paper & paper making (1855): fine sizes from "Pot" 12½ by 15 to "Antiquarian, 53 by 31".',
    localProject: 'Aspect ratio under folding: fold maps r to 2/r; fixed point root 2 = 1.4142. 26 Herring sizes, only Super Royal (1.421) within 2%; Foolscap 1.259/1.588; A-series from 1 m2: 1,189 by 841 mm, fourth half 297 by 210 mm. Doubles: Double Foolscap 2.00x, Double Post 2.03x, Double Pot 4.0x, Double Elephant 1.66x Elephant. Lesson family: aspect ratio invariance, root 2.',
    requiredMentions: [
      '95,985',
      'Berkhamsted',
      'Tring',
      'Two Waters',
      'Super Royal',
      'Foolscap',
      'Richard Herring',
      'aspect ratio',
      'Fourdrinier'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Dacorum and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Alexander Watt, The Art of Paper-Making (ebook 55757).', url: 'https://www.gutenberg.org/ebooks/55757' },
      { claim: 'Project Gutenberg, Richard Herring, Paper & paper making, ancient and modern (ebook 70338).', url: 'https://www.gutenberg.org/ebooks/70338' },
      { claim: 'postcodes.io places search (OS Open Names), Two Waters in Dacorum.', url: 'https://api.postcodes.io/places?q=Two%20Waters' }
    ],
    rejectedClaims: [
      'Which Frogmore the books mean: Hertfordshire has three; not claimed.',
      'Any named paper company or modern mill: not claimed.',
      'Other books give 1804 for the first successful Frogmore machine; the page follows Watt only.',
      'The Buncefield depot: not mentioned.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
