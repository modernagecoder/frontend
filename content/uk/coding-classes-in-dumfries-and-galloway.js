'use strict';
// Dumfries and Galloway (cg- council area page, UK cluster Phase 7, row 260). One council. Spine: how many stars can you
// really see? Anchor: Forestry and Land Scotland, Galloway International Dark Sky Park page (read raw 26 September 2026):
// "In 2009, it became one of the first in the world to be designated an International Dark Sky Park. It was also awarded
// a Gold Tier Park"; "On a clear night, over 7000 stars and planets are visible with the naked eye, and the bright band of
// the Milky Way is usually easy to see". Data: Yale Bright Star Catalogue, 5th revised edition (Hoffleit and others,
// 1991), VizieR V/50, HR, Vmag, RA and Dec (J2000).
// Our analysis (scratchpad dng/stars.py): 9,096 catalogue stars with magnitude and position; brighter than magnitude 1:
// 15; 2: 50; 3: 174; 4: 518; 5: 1,630; 6: 5,080; 6.5: 8,404 (whole sky). Growth per magnitude 3.48, 2.98, 3.15, 3.12.
// At latitude 55 N, stars that ever rise (declination above -35): 6,814 catalogue stars, 3,764 of them brighter than 6.0.
// Above the horizon at one moment, averaged over 24 sidereal times: magnitude 6.5 or brighter 4,074 (3,918 to 4,201),
// above 10 degrees 3,387; magnitude 6.0 or brighter 2,433, above 10 degrees 2,022.
// Lesson family: counting against a threshold on a logarithmic scale, and testing a published claim by making its
// definition explicit; screened (Bright Star, dark sky: 0 hits; magnitude and logarithms appear elsewhere for other data).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Dumfries and Galloway S12000006 145,900; 70,600 households;
// 22.7 per square kilometre; ages 0 to 14 20,600 (14.1 per cent), 65+ 39,600 (27.1 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'DUMFRIES AND GALLOWAY', blurb: 'Dumfries, Stranraer, Annan and the Galloway hills, and a dark sky lesson: test the claim that over 7,000 stars are visible.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-dumfries-and-galloway',
  code: 'dng',
  accent: '#28224C',
  accentRationale: 'Dumfries and Galloway: a dark-sky indigo from the solver (11.89:1 on the darkest paper tint), deeper and bluer than the Somerset and West Sussex purples',
  pageType: 'governorate',
  place: {
    name: 'Dumfries and Galloway',
    eyebrow: 'Dumfries and Galloway',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Carlisle', href: '/best-coding-class-in-carlisle' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dumfries and Galloway',
  title: 'Coding Classes in Dumfries and Galloway | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Dumfries and Galloway, from Dumfries, Stranraer and Annan to Lockerbie, Castle Douglas and Kirkcudbright.',
  ogDescription: 'Coding classes for all of Dumfries and Galloway, and a dark sky project: count the stars in a real catalogue to test the claim that over 7,000 are visible from Galloway.',
  twitterDescription: 'Dumfries and Galloway coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Dumfries and Galloway',
    description: 'Ability-placed online coding, Python, data science and mathematics for children, teenagers and adults across Dumfries and Galloway, taught live in English.'
  },

  h1: 'Coding classes in Dumfries and Galloway',
  capsuleQ: 'What are the best coding classes in Dumfries and Galloway?',
  capsule: 'Dumfries and Galloway is a single, sprawling council area, where Scotland\'s Census 2022 found about 145,900 people in some 70,600 households, at 22.7 people per square kilometre. Dumfries is by far the largest town, then Stranraer and Annan, with Lockerbie, Dalbeattie, Newton Stewart, Castle Douglas and Kirkcudbright after. Every class runs live over video from India, and learners are grouped by ability, from Primary 1 through S6 and on to adults. We teach coding, Python, data science and maths to everyone between 6 and 67, privately or in small classes of five to ten. The Dumfries and Galloway project looks up at the Galloway sky. Lesson one is free; after that it is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Forestry and Land Scotland says that in 2009 Galloway Forest Park became one of the first places in the world to be named an International Dark Sky Park, and that on a clear night over 7,000 stars and planets are visible with the naked eye. That is a claim a programmer can test. Astronomers have catalogued every star bright enough to see without a telescope, with its brightness and its position. This page\'s project loads that catalogue into Python, works out which stars ever rise over Galloway and how many are above the horizon at any one moment, and finds that the answer depends entirely on what "visible" is taken to mean.',
  wa: 'Hello Modern Age Coders, we are in Dumfries and Galloway and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Dumfries and Galloway',
    h2: 'Where Dumfries and Galloway learners start',
    intro: 'A P5 pupil in Castle Douglas who loves the stars, an S2 in Annan starting Python, an S5 in Dumfries working with data, and an adult in Stranraer building new skills. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including night-sky scenes and counting games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python for teenagers, from loading a catalogue to testing a claim against it.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Spreadsheets, statistics and SQL, then Python and dashboards, for adults working with real data.' }
    ]
  },

  sections: [
    {
      id: 'dumfries-and-galloway', tint: '', eyebrow: 'Dumfries and Galloway in figures',
      h2: 'About 145,900 people from the Solway to the Galloway hills',
      intro: 'Population, households and density come from the 2022 census as first published, in hundreds; the town list is from the NRS mid-2020 locality estimates.',
      body: [
        { kind: 'table', caption: 'Dumfries and Galloway localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Dumfries', '33,470', 'Dalbeattie', '4,160'],
          ['Stranraer', '10,110', 'Newton Stewart', '4,030'],
          ['Annan', '8,760', 'Castle Douglas', '4,000'],
          ['Locharbriggs', '5,610', 'Kirkcudbright', '3,350'],
          ['Lockerbie', '4,190', 'Gretna', '3,110']
        ] },
        { kind: 'p', text: 'At 22.7 residents per square kilometre, the council area is about a third as densely settled as Scotland overall. Our addition of the census age groups gives 14.1 per cent under 15 and 27.1 per cent aged 65 or over, compared with 15.3 and 20.1 per cent for Scotland. Moffat and Lochmaben are the next towns after the table. Dumfries and Galloway Council sets school term dates, which we have not read; we fit breaks around each family\'s calendar.' },
        { kind: 'callout', h3: 'Over the border', p: 'Many families look across the Solway to <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a>. For Scottish exams, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dumfries and Galloway project',
      h2: 'How many stars can you really see?',
      intro: 'A real star catalogue, a few lines of spherical geometry, and a claim that depends on its definition.',
      body: [
        { kind: 'p', text: 'The learner downloads the Yale Bright Star Catalogue, which lists the brightness and position of every star bright enough to see without a telescope: 9,096 entries with both values. Astronomers measure brightness in magnitudes, where bigger numbers are fainter, and the usual naked-eye limit under a dark sky is around magnitude 6 to 6.5. First the program counts stars brighter than each magnitude, and a pattern jumps out: each step fainter roughly triples the count, from 174 stars brighter than 3 to 518 brighter than 4, 1,630 brighter than 5 and 5,080 brighter than 6.' },
        { kind: 'table', caption: 'Our counts from the Bright Star Catalogue for a place at latitude 55 degrees north', head: ['What "visible" means', 'Stars counted'], rows: [
          ['Whole sky, brighter than magnitude 6.5', '8,404'],
          ['Every star in the catalogue that ever rises at 55 degrees north', '6,814'],
          ['Above the horizon at one moment, brighter than 6.5 (average of 24 times)', 'About 4,074'],
          ['The same, but at least 10 degrees above the horizon', 'About 3,387'],
          ['Above the horizon at one moment, brighter than 6.0', 'About 2,433']
        ] },
        { kind: 'p', text: 'Now the claim. From Galloway, at about 55 degrees north, stars far enough south never rise, so the program keeps only those with a declination above minus 35 degrees: 6,814 catalogue stars. But at any single moment only the half of the sky above you counts. Using a little spherical geometry to work out each star\'s height, the program finds on average about 4,074 stars brighter than magnitude 6.5 above the horizon at once, and about 3,387 if the murky lowest ten degrees are left out. Seeing over 7,000 would need a different definition: counting over the whole year, including planets, or seeing stars fainter than 6.5 under an exceptional sky.' },
        { kind: 'p', text: 'That is the real lesson. The claim may well be true in the sense its authors intended; our program cannot tell. What it does show is that a number like "over 7,000 visible" means very little until you know over what time, down to what brightness, and from what height above the horizon. Making those choices explicit, and seeing how much each one moves the answer, is exactly what data work is.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Count the stars inside a cardboard tube on a clear night, then multiply up for the whole sky, and discuss why guesses vary so much.' },
          { h3: 'Ages 12 to 15', p: 'Load the catalogue in Python, count stars brighter than each magnitude, and plot the counts to see the tripling.' },
          { h3: 'Ages 15 and up', p: 'Compute each star\'s altitude for a given time and latitude, average over the night, and write up what "visible" should mean.' }
        ] },
        { kind: 'callout', h3: 'Their claim and our counts', p: 'The Dark Sky Park facts and the 7,000 figure are Forestry and Land Scotland\'s. The Bright Star Catalogue is published by the Strasbourg astronomical data centre from Yale\'s work. Every count on this page is ours, and a different latitude, brightness limit or catalogue would give different numbers.' }
      ]
    },
    {
      id: 'galloway', tint: 'deep', eyebrow: 'Why Galloway',
      h2: 'One of the first Dark Sky Parks in the world',
      intro: 'The Dumfries and Galloway link, from Forestry and Land Scotland.',
      body: [
        { kind: 'table', caption: 'Galloway International Dark Sky Park, as Forestry and Land Scotland describes it', head: ['Point', 'The page says'], rows: [
          ['Designation', 'In 2009 Galloway Forest Park became one of the first in the world to be named an International Dark Sky Park.'],
          ['Tier', 'It was also awarded Gold Tier status.'],
          ['On a clear night', 'Over 7,000 stars and planets are visible with the naked eye.'],
          ['The Milky Way', 'Its bright band is usually easy to see arching across the sky.']
        ] },
        { kind: 'p', text: 'Astronomy was one of the first sciences to depend on large catalogues and careful counting, and today\'s sky surveys produce more data than any other science. The skills on this page, loading a catalogue, applying a threshold, doing geometry on every row and defining terms precisely, are the same ones used in genetics, finance and AI. A Dumfries and Galloway student who has checked a claim about their own sky has done real data science.' },
        { kind: 'p', text: 'We have no connection with Forestry and Land Scotland, the Strasbourg data centre or Dumfries and Galloway Council. Their facts and data are theirs; our analysis and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a> are over the border; <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> is to the north. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From counting stars to testing claims with data',
    intro: 'The free lesson settles where to start. The school stage is a clue, and ability is the answer.',
    cols: [
      { band: 'P1 to P4', h3: 'Counting games', p: 'Block coding with counting, sorting and simple night-sky scenes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Lists and thresholds', p: 'Typed Python that filters a list by a rule and counts what passes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Real datasets', p: 'Data science with real catalogues, useful alongside National 5 and Higher courses.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data you can defend', p: 'Spreadsheets, SQL and Python for adults who need numbers that stand up to questions.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and definitions',
    h2: 'An AI can repeat "over 7,000 stars". Can it tell you what that number counts?',
    intro: 'Numbers without definitions travel easily and mean little.',
    p1: 'AI assistants are very good at repeating figures they have read, and a figure like "over 7,000 stars visible" will be repeated widely. What they rarely do, unless asked, is unpack it: at one moment or over a year, down to which brightness, above what height. Our own count gives about 4,074 at one moment, 6,814 over the year, and 8,404 over the whole sky, all from the same catalogue.',
    p2: 'A Dumfries and Galloway student who has run those numbers knows to ask what a figure counts before trusting or repeating it. That question is essential for anyone using AI to research anything, from health statistics to school results.',
    closer: 'So a young person in Dumfries and Galloway should learn to code in 2026 to find out what a number really counts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From the Rhins to Annandale, no long drive',
    intro: 'Dumfries and Galloway is wide and rural, and a weekly class at the right level can be far from home. Online lessons remove the distance.',
    cells: [
      { h3: 'Home is the classroom', p: 'A farmhouse near Newton Stewart, a flat in Dumfries, a house in Stranraer. The pupil types the code while the teacher watches the shared screen.' },
      { h3: 'Scottish stages', p: 'Teachers know where a P7 or an S4 pupil is in the Scottish system, from Primary to National 5, Higher and Advanced Higher, and teach in English.' },
      { h3: 'Free to start', p: 'A real first lesson, then clear advice on level and course. No card details are asked for.' },
      { h3: 'Groups by stage', p: 'Each class of five to ten shares a level, even if its members live in different countries.' },
      { h3: 'Term and holidays', p: 'A usual week has two lessons; when the school holidays start, so does our break.' },
      { h3: 'UK time, steady', p: 'Your slot stays at the same UK time all year; the teacher, on India time several hours ahead, adjusts when the clocks change.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Across a council area this large, five learners at one stage who are free on the same evening rarely live near each other. Grouping by level lets a pupil in Moffat or Kirkcudbright join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Dumfries and Galloway',
    intro: 'Stranraer or Gretna, the fee is the same, and it is the fee in every country we teach apart from India.',
    first: 'A full lesson of genuine work, then a suggested level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Prices are set in US dollars, not pounds. Payment only begins after the free lesson has settled which course and which weekly hour; holiday pauses, missed lessons and changing between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Reviews from families on Google',

  book: {
    h2: 'Book a free Dumfries and Galloway lesson',
    intro: 'Give us the pupil\'s stage or the adult\'s aim, and one or two interests. A first lesson could be a Scratch night-sky scene, a Python counting program, or the star catalogue on this page.',
    success: 'Thank you. Your Dumfries and Galloway request has reached us.'
  },

  faq: {
    h2: 'Dumfries and Galloway questions',
    intro: 'The council area, the dark sky project and practical details.',
    items: [
      { q: 'How many people live in Dumfries and Galloway?', a: 'The 2022 census put it at about 145,900 usual residents living in some 70,600 households, figures the NRS rounds to hundreds.' },
      { q: 'What are the largest towns in Dumfries and Galloway?', a: 'By NRS mid-2020 locality estimates: Dumfries 33,470, Stranraer 10,110, Annan 8,760, Locharbriggs 5,610 and Lockerbie 4,190.' },
      { q: 'What is the dark sky project?', a: 'Learners use the Yale Bright Star Catalogue in Python to count stars by brightness, work out which rise at Galloway\'s latitude and how many are up at once, and test the claim that over 7,000 are visible.' },
      { q: 'How many stars can you see at once?', a: 'By our count from the catalogue, about 4,000 stars brighter than magnitude 6.5 are above the horizon at any moment at 55 degrees north, fewer near the horizon. Other definitions give larger numbers.' },
      { q: 'When did Galloway become a Dark Sky Park?', a: 'Forestry and Land Scotland says Galloway Forest Park became one of the first International Dark Sky Parks in 2009, with Gold Tier status.' },
      { q: 'Are lessons held in Dumfries and Galloway?', a: 'No. All lessons are live online, so pupils anywhere in the council area join from home.' },
      { q: 'Do you teach National 5 and Higher Computing Science?', a: 'Yes: exam support is set out on our National 5 and Higher Computing Science pages. Our aim is understanding, and we make no promise about results.' },
      { q: 'What ages do you teach?', a: 'Anyone from six to sixty-seven: blocks in the early primary years, Python and then data science through secondary, and practical data skills for adults.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. From then on it is USD 100 monthly in a group or USD 150 monthly for individual lessons.' },
      { q: 'Do you pause for Dumfries and Galloway school holidays?', a: 'Yes. Term dates are published by the council, and we arrange pauses once you send yours.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Dumfries and Galloway',
    html: 'South over the Solway are <a class="cg-inline-link" href="/best-coding-class-in-carlisle">Carlisle</a> and <a class="cg-inline-link" href="/coding-classes-in-cumbria">Cumbria</a>; north is <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>. All 32 Scottish councils appear on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dumfries and Galloway and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-carlisle', label: 'Carlisle' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing' }
  ],

  personalityCss: `
.cg-root.cg-dng .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-dng .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-dng .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-dng .cg-eyebrow { letter-spacing: 0.22em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-dng .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-dng .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-dng .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dng .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-dng .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-dng .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dumfries and Galloway (S12000006), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 145,900 (females 75,300, males 70,700); households 70,600; density 22.7 per square kilometre (Scotland 69.8); ages 0 to 14 20,600 (14.1 per cent), 65+ 39,600 (27.1 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Dumfries 33,470; Stranraer 10,110; Annan 8,760; Locharbriggs 5,610; Lockerbie 4,190; Dalbeattie 4,160; Newton Stewart 4,030; Castle Douglas 4,000; Kirkcudbright 3,350; Gretna 3,110; Moffat 2,410; Lochmaben 2,180. Forestry and Land Scotland, Galloway International Dark Sky Park: "In 2009, it became one of the first in the world to be designated an International Dark Sky Park. It was also awarded a Gold Tier Park"; "On a clear night, over 7000 stars and planets are visible with the naked eye, and the bright band of the Milky Way is usually easy to see arching across the sky". Yale Bright Star Catalogue 5th revised edition (Hoffleit and others 1991), CDS VizieR V/50.',
    localProject: 'Star counts from BSC5 (9,096 with magnitude and position): cumulative brighter than 1: 15; 2: 50; 3: 174; 4: 518; 5: 1,630; 6: 5,080; 6.5: 8,404. Ratios per magnitude 3.48, 2.98, 3.15, 3.12. Latitude 55 N: declination above -35: 6,814 (3,764 brighter than 6.0). Altitude computed for 24 sidereal times: V at most 6.5 above horizon mean 4,074 (3,918 to 4,201), above 10 degrees 3,387; V at most 6.0: 2,433 and 2,022. Page does not call the FLS figure wrong; it shows how definitions change the count. AI angle: repeated figures without definitions. Lesson family: threshold counts on a log scale, spherical altitude, testing a claim via explicit definitions.',
    requiredMentions: [
      '145,900',
      'Galloway Forest Park',
      'Dark Sky Park',
      'Bright Star Catalogue',
      '4,074',
      'Stranraer',
      'Locharbriggs',
      'Lockerbie',
      'Dalbeattie',
      'Newton Stewart',
      'Castle Douglas',
      'Kirkcudbright'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Forestry and Land Scotland: Galloway International Dark Sky Park (2009, Gold Tier, over 7000 visible).', url: 'https://forestryandland.gov.scot/visit/forest-parks/galloway-forest-park/dark-skies' },
      { claim: 'Yale Bright Star Catalogue, 5th revised edition, via CDS VizieR catalogue V/50.', url: 'https://cdsarc.cds.unistra.fr/viz-bin/cat/V/50' }
    ],
    rejectedClaims: [
      'That the 7,000 figure is wrong: not claimed; the page shows how different definitions give different counts.',
      'Robert Burns in Dumfries: not used here, reserved for another Scottish page.',
      'Exact latitude of the Dark Sky Park: 55 degrees north used as a round figure for the region, stated as such.',
      'Dumfries and Galloway school term dates: none read.',
      'Named schools: none named.',
      'Light pollution measurements: not read, not claimed.'
    ]
  }
};
