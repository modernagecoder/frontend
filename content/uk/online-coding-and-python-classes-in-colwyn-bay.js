'use strict';
// Colwyn Bay (cg- town page, UK cluster Phase 10, towns band B, row 563). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what happens when two lists that should
// line up do not, and Python pairs them anyway? (zip() truncating silently, misalignment after filtering, zip strict=True,
// joining by key with a dict.)
// Local data (read 1 October 2026): OS Code-Point Open 2026.3.0, LL28 (448) and LL29 (618) postcodes, 1,066, all in
// Conwy; positions from postcodes.io bulk lookup; heights from OpenTopoData eudem25m (EU-DEM, Copernicus), 1,064
// numbers and 2 nulls: LL28 4EN and LL28 4PR (Llandrillo-yn-Rhos ward, on the Rhos shore). Our run (scratchpad
// cwn/zipcheck.py, Python 3.13): drop the nulls, then zip with the postcode list: 1,064 pairs; LL29 9YP and LL29 9YW
// silently dropped; from index 61 on, 1,003 postcodes paired with a neighbour's height, 991 of them with a different
// number; error where truth known: mean 23.28 m, median 8.77 m, max 221.3 m, 459 over 10 m. Highest postcode by the
// broken pairs: LL29 6AW at 306.2 m; its true height 158.3 m; true highest LL29 6BA 306.2 m. zip(..., strict=True)
// raises "zip() argument 2 is shorter than argument 1". dict(zip(postcodes, heights, strict=True)) before filtering
// keeps the 2 missing values visible. Mean known height 55.3 m, min 3.1 m.
// Lesson family: zip() truncation / list misalignment. Screened: zip_longest, strict=True, misalign (Eindhoven: a
// Wikipedia summary, not code), paired by position: 0 hits; Woensel-Zuid mentions lists zipped after one was sorted as one
// example of mutation testing; this page uses a different cause (filtering one list) and a different fix (strict, keys);
// claimed. Conwy county page = beam stiffness; Bangor, St Asaph and Denbighshire checked.
// Place facts: Conwy TS001 114,741. ONS 2021 BUA (published): Colwyn Bay 29,275. postcodes.io suburban areas whose
// nearest postcode is in the Colwyn Bay BUA: Rhôs-on-Sea, Old Colwyn, Mochdre, Tan-y-Lan. Llysfaen (Mynydd Marian BUA),
// Bryn-y-Maen (no BUA) and Penrhyn Bay (own BUA) are outside. LL28 and LL29 also reach rural wards beyond the town.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'COLWYN BAY', label: 'Colwyn Bay', blurb: 'Online coding and Python classes for Colwyn Bay, with a project in which two missing heights quietly shift a thousand postcodes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-colwyn-bay',
  code: 'cwn',
  accent: '#304C94',
  accentRationale: 'Colwyn Bay: a muted bay blue (8.12:1 contrast on white), chosen by hand and kept clear of the other North Wales pages',
  pageType: 'city',
  place: {
    name: 'Colwyn Bay',
    eyebrow: 'Colwyn Bay (Bae Colwyn), Conwy, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Conwy' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Conwy', href: '/coding-classes-in-conwy' },
    { label: 'Bangor', href: '/best-coding-class-in-bangor-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Colwyn Bay, Conwy',
  title: 'Online Coding and Python Classes in Colwyn Bay | Ages 6 to 67',
  description: 'Live online coding and Python classes for Colwyn Bay, Rhos-on-Sea, Old Colwyn and Mochdre, ages 6 to 67, plus AI and maths. Your first lesson is free.',
  ogDescription: 'Online coding and Python classes for Colwyn Bay, with a project on zip(), missing values and silently shifted data.',
  twitterDescription: 'Colwyn Bay online coding and Python lessons, live for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Colwyn Bay',
    description: 'Online coding, Python, AI and maths lessons for children, teenagers and adults in Colwyn Bay and Conwy, built around real data and the quiet bugs that spoil it.'
  },

  h1: 'Online coding and Python classes in Colwyn Bay',
  capsuleQ: 'What are the best online coding and Python classes in Colwyn Bay?',
  capsule: 'Conwy county borough recorded 114,741 usual residents in the 2021 census, and the ONS built-up area of Colwyn Bay, Bae Colwyn in Welsh, recorded 29,275. Rhôs-on-Sea, Old Colwyn, Mochdre and Tan-y-Lan all fall inside it. Our tutors in India teach coding, Python, AI, vibe coding and maths over live video to Colwyn Bay pupils and adults from six up to 67, singly or in classes of five to ten pitched at a single level. Everyone starts with a free trial lesson that ends in a course recommendation. In the Colwyn Bay project a learner pairs every LL28 and LL29 postcode with a height from a terrain model, finds that two heights are missing, and watches one innocent line of Python shift a thousand answers by one place. Past the free session, expect USD 100 monthly in a class or USD 150 monthly on your own with a tutor.',
  lead: 'Python\'s <code>zip</code> is one of the friendliest tools in the language: give it two lists and it walks along them together, pairing the first with the first, the second with the second. It has one habit that catches out beginners and professionals alike. If the lists are different lengths, it stops at the end of the shorter one and says nothing. In Colwyn Bay, two missing numbers out of 1,066 were enough to make that habit wreck a dataset without a single error message.',
  wa: 'Hello Modern Age Coders, we would like to book a free online coding or Python trial lesson. We are in Colwyn Bay.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Python and coding courses for Colwyn Bay learners',
    intro: 'Choose the course by age. Its first live lesson is free and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Matching, pairing and spot-the-mistake puzzles before any typing.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then try it and repair it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python for real data, including the Colwyn Bay postcode heights project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from nothing to dependable data work, with the habits that catch silent errors.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Colwyn Bay today',
      h2: 'Colwyn Bay, Rhôs-on-Sea, Old Colwyn and Mochdre',
      intro: 'Census headline counts, the places inside the town, and the postcode districts we use.',
      body: [
        { kind: 'table', caption: 'Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Colwyn Bay built-up area', '29,275'],
          ['Conwy county borough', '114,741']
        ] },
        { kind: 'p', text: 'Conwy also includes Llandudno, Abergele, Conwy town and the upland villages, so the county figure is counted separately and not by adding towns. On postcodes.io, Rhôs-on-Sea, Old Colwyn, Mochdre and Tan-y-Lan are suburban areas whose nearest postcode is inside the Colwyn Bay built-up area. Llysfaen falls in a different built-up area, Bryn-y-Maen sits outside any, and Penrhyn Bay has its own. The LL28 and LL29 postcode districts used in the project are wider than the town too, running into rural wards such as Betws-yn-Rhos. Schools here follow the Curriculum for Wales, from progression step 1 up to WJEC GCSE and A level, and we teach in English, treating the Welsh school year as a first guess that the trial lesson then checks.' },
        { kind: 'callout', h3: 'North Wales pages', p: 'See <a class="cg-inline-link" href="/coding-classes-in-conwy">Conwy</a>, <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a>, <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science help</a>. Our reasons for insisting learners read every line are in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Colwyn Bay project',
      h2: 'Two missing heights and a thousand wrong answers',
      intro: 'Postcodes, a terrain model, one tidy-looking filter, and what zip does with lists that no longer match.',
      body: [
        { kind: 'p', text: 'The learner starts with all 1,066 postcodes in the LL28 and LL29 districts from Ordnance Survey\'s Code-Point Open, looks up the position of each one, and asks a terrain service, OpenTopoData, for the ground height at that point from the EU-DEM elevation model. The service returns the heights in the same order the positions were sent. 1,064 come back as numbers; two come back empty. Both belong to postcodes on the shore at Rhos, LL28 4EN and LL28 4PR. Our reading is that the points sit where the model has no land value, but either way the gap is real.' },
        { kind: 'p', text: 'Now the tidy-looking line. A common first instinct is to remove missing values before doing anything else, for example <code>heights = [h for h in heights if h is not None]</code>, and then pair the results with the postcodes using <code>zip(postcodes, heights)</code>. Python accepts it. It produces 1,064 pairs without complaint. It is also badly wrong.' },
        { kind: 'table', caption: 'What one filtered list does to the pairing, our Python run', head: ['Measure', 'Result'], rows: [
          ['Pairs produced by zip', '1,064 of 1,066'],
          ['Postcodes silently left out', 'LL29 9YP and LL29 9YW'],
          ['Postcodes given a neighbour\'s height', '1,003 (from the 62nd onwards)'],
          ['Of those, given a different number', '991'],
          ['Typical error (median)', '8.77 m'],
          ['Errors over 10 m', '459'],
          ['Largest error', '221.3 m']
        ] },
        { kind: 'p', text: 'Removing the first missing height slid every later height up by one place, so from the 62nd postcode onwards each one was paired with its neighbour\'s height, and after the second gap, with the one two places on. The two postcodes at the end of the list simply vanished, because <code>zip</code> stops when the shorter list runs out. The damage then spreads into every answer built on the pairs. Ask which postcode stands highest and the broken pairs say LL29 6AW at 306.2 m; its real height is 158.3 m. The true highest point in the list, LL29 6BA, sits two places further down the sorted list, which is exactly why its height was handed over.' },
        { kind: 'p', text: 'There are two clean fixes, and the learner writes both. Since Python 3.10, <code>zip(postcodes, heights, strict=True)</code> refuses to pair lists of different lengths and stops with <code>ValueError: zip() argument 2 is shorter than argument 1</code>, which turns a silent bug into a loud one. Better still, pair each height with its postcode before cleaning anything, in a dictionary built straight from the service\'s reply, so the two missing values stay attached to their own postcodes and can be dealt with deliberately.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two columns of cards: take one card out of the second column and see who ends up with the wrong partner.' },
          { h3: 'Ages 11 to 15', p: 'Zip two short lists of different lengths in Python and find out what disappears.' },
          { h3: 'Ages 15 and up', p: 'Reproduce the postcode bug, measure the damage, then fix it with strict=True and with a dictionary.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Postcodes are from Ordnance Survey Code-Point Open 2026.3.0, with Royal Mail and OS data under the Open Government Licence; positions come from postcodes.io. Heights are from OpenTopoData, serving the Copernicus EU-DEM model at 25 m resolution; they describe the ground model, not any building. The filter, the pairing and every count in the table come from our own Python run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Python and AI together',
      h2: 'What a silent zip teaches about code an AI writes',
      intro: 'No error, plausible numbers, and a thousand wrong answers: the worst kind of bug.',
      body: [
        { kind: 'table', caption: 'Postcode heights and the code assistants write', head: ['Seen in the heights data', 'Carried over to AI suggestions'], rows: [
          ['zip paired lists of different lengths quietly', 'Code can run cleanly and still be wrong'],
          ['Two gaps shifted 1,003 answers', 'Small data problems can have large effects'],
          ['The highest postcode came out wrong', 'Check headline answers against the source'],
          ['strict=True turned silence into an error', 'Prefer code that fails loudly'],
          ['A dictionary kept each height with its postcode', 'Join data by key, not by position']
        ] },
        { kind: 'p', text: 'This exact pattern, clean the list then zip it back, is something AI assistants produce all the time, because it is short and looks sensible. A learner who has watched LL29 6AW grow by nearly 150 m reads such code differently: they count the lengths, ask what was dropped, and reach for <code>strict=True</code>. That is the heart of how we teach vibe coding. Agents come later in the course: a learner designs one when unaided Python feels routine, commonly in Year 12 or beyond, and Copilot Studio work happens solely in private sessions. Background reading: <a class="cg-inline-link" href="/problem-solving-skills-through-coding-uk">problem-solving skills through coding</a>, and <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-uk">learn to train AI, not just prompt it</a>.' },
        { kind: 'p', text: 'Ordnance Survey, postcodes.io, OpenTopoData and the Copernicus programme have no connection with Modern Age Coders. We use their open data; the experiment is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Next steps',
    h2: 'From matching cards at seven to bug-proof data pipelines at seventeen',
    intro: 'The Welsh school year is where we start guessing; the trial lesson settles it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Pairs and patterns', p: 'Matching, ordering and spotting mistakes, often with cards before code.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Programs with AI', p: 'Scratch games made with an AI helper, then the step into Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Real data in Python', p: 'Lists, dictionaries and joins, checked against the source every time.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Data you can rely on', p: 'Python for work, with careful joins, missing values and tests.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Pairing data safely',
    h2: 'What does zip() do in Python when the lists are different lengths?',
    intro: 'By default zip() stops as soon as the shorter list runs out and gives no warning, so any items left over in the longer list are silently ignored and, if the lists were meant to line up, every pair after a missing item can be wrong; passing strict=True makes it raise an error instead.',
    p1: 'Pairing 1,066 Colwyn Bay postcodes with 1,064 heights after two missing values were removed dropped two postcodes and gave 1,003 others a neighbour\'s height, with a median error of 8.77 m and a worst of 221.3 m.',
    p2: 'A learner who has seen that checks list lengths and joins by key from then on, whether the code came from them or from an AI.',
    closer: 'For a teenager in Colwyn Bay, catching the bugs that make no noise is what puts them in charge of AI-written code, and that comes from writing and testing Python themselves.',
    blogAnchor: 'what coding still offers a young person in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Lessons for a Colwyn Bay learner',
    intro: 'Lessons are live video classes. A computer with a keyboard is needed, as Python does not run well on a tablet alone.',
    cells: [
      { h3: 'Code typed by the learner', p: 'The learner writes and runs each program; the tutor asks how they know it is right.' },
      { h3: 'Level before course', p: 'The trial lesson shows us where to start before any recommendation.' },
      { h3: 'Free to try', p: 'Your opening session is unpaid, and we never take card details for it.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same level, from all over the UK.' },
      { h3: 'Twice weekly', p: 'Around eight lessons a month, with Conwy school holidays kept free on request.' },
      { h3: 'One UK time', p: 'The lesson keeps its UK time through the spring and autumn clock changes.' }
    ],
    spec: { title: 'Why we teach online', p: 'It is much easier to gather five to ten learners at one exact level across the UK than along one stretch of coast, and video means nobody travels.' }
  },

  fees: {
    h2: 'Fees for Colwyn Bay families',
    intro: 'Colwyn Bay learners pay the same as all learners outside India.',
    first: 'First lesson: free, full length, ending with a course recommendation.',
    group: 'Group class, usually eight lessons a month.',
    private: 'One-to-one tuition, usually eight lessons a month.',
    closer: 'We charge in US dollars and list no price in pounds. The trial is free, and billing begins only once a course and a weekly slot are agreed. For holidays, missed sessions and moving from group to private or back, see the pricing page.'
  },

  reviewsH2: 'Google reviews from North Wales families and UK learners',

  book: {
    h2: 'Book a free Colwyn Bay lesson',
    intro: 'A note of the learner\'s age, or Welsh school year, and a hobby is all we need. The trial could be a card-matching puzzle, a Scratch game built with an AI, a first Python program, or the postcode heights project.',
    success: 'Thank you. We have your Colwyn Bay request.'
  },

  faq: {
    h2: 'Colwyn Bay questions',
    intro: 'The heights project, zip and missing data, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Colwyn Bay?', a: 'Census 2021 gives the Colwyn Bay built-up area 29,275 usual residents; Conwy county borough as a whole had 114,741.' },
      { q: 'Can Colwyn Bay learners take online Python classes?', a: 'Yes. Learners from 6 to 67 log in live from Colwyn Bay, Rhos-on-Sea, Old Colwyn, Mochdre and the rest of Conwy.' },
      { q: 'What does strict=True do in zip()?', a: 'It makes zip() raise a ValueError if the iterables have different lengths, instead of quietly stopping at the shortest. It was added in Python 3.10.' },
      { q: 'What is the difference between zip() and itertools.zip_longest()?', a: 'zip() stops at the shortest input. zip_longest() carries on to the longest and fills the gaps with a value you choose, None by default.' },
      { q: 'What went wrong in the Colwyn Bay project?', a: 'Two missing heights were removed before pairing, so zip matched 1,003 postcodes with a neighbour\'s height and dropped LL29 9YP and LL29 9YW without any error.' },
      { q: 'What is vibe coding?', a: 'Telling an AI what you want a program to do, then running, checking and repairing what it writes. Learners here type genuine Python, which is how they learn to spot traps like this one.' },
      { q: 'Is agent building part of the course?', a: 'Yes, near the end: when independent Python is comfortable, normally Year 12 onward. Copilot Studio only runs as private tuition.' },
      { q: 'Will this help with WJEC GCSE computer science?', a: 'Programming, data handling and testing are part of WJEC GCSE and A level computer science, and lessons cover them carefully. No grade is promised.' },
      { q: 'What are the fees?', a: 'The trial is free. After it, group classes are USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Can lessons stop for school holidays?', a: 'Yes. Send us the Conwy term dates and we keep the holidays clear.' }
    ]
  },

  next: {
    eyebrow: 'Close to Colwyn Bay',
    h2: 'More pages for North Wales',
    html: 'Visit <a class="cg-inline-link" href="/coding-classes-in-conwy">Conwy</a>, <a class="cg-inline-link" href="/best-coding-class-in-bangor-wales">Bangor</a>, <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> and <a class="cg-inline-link" href="/coding-classes-in-denbighshire">Denbighshire</a>. Every other Welsh page is listed on <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">our Wales page</a>, and the rest of the country on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Colwyn Bay and Conwy',
  footerPlaces: [
    { href: '/coding-classes-in-conwy', label: 'Conwy' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cwn .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 2.3vw, 2.1rem); }
.cg-root.cg-cwn .cg-hero h1 { font-weight: 745; letter-spacing: -0.019em; line-height: 1.11; }
.cg-root.cg-cwn .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-cwn .cg-eyebrow { letter-spacing: 0.125em; font-weight: 705; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-cwn .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.013em; }
.cg-root.cg-cwn .cg-table caption { font-weight: 545; text-align: left; font-size: 0.91rem; }
.cg-root.cg-cwn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cwn .cg-table th { font-weight: 705; letter-spacing: 0.025em; }
.cg-root.cg-cwn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-cwn .cg-callout { border-left-width: 6px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Conwy (W06000003), Census 2021 TS001 usual residents 114,741. ONS 2021 BUA (published): Colwyn Bay 29,275. Curriculum for Wales, progression steps, WJEC GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Colwyn Bay BUA: Rhôs-on-Sea, Old Colwyn, Mochdre, Tan-y-Lan. LL28 and LL29 also include rural wards outside the town.',
    localProject: 'OS Code-Point Open 2026.3.0, LL28 (448) and LL29 (618): 1,066 postcodes in Conwy. postcodes.io positions; OpenTopoData eudem25m heights: 1,064 values, 2 null (LL28 4EN, LL28 4PR). Filter nulls then zip with postcodes: 1,064 pairs; LL29 9YP and LL29 9YW dropped; 1,003 postcodes from the 62nd onwards given a neighbour\'s height, 991 a different number; errors where truth known: median 8.77 m, mean 23.28 m, max 221.3 m, 459 over 10 m. Highest by broken pairs LL29 6AW 306.2 m (true 158.3 m); true highest LL29 6BA 306.2 m. zip strict=True raises ValueError; dict join keeps the 2 nulls. Lesson family: zip() truncation, misalignment after filtering, strict=True, join by key.',
    requiredMentions: [
      '29,275',
      'Rhôs-on-Sea',
      'Old Colwyn',
      'Tan-y-Lan',
      'LL29 6AW',
      'LL28 4EN',
      'strict=True',
      '1,003',
      '8.77'
    ],
    sources: [
      { claim: 'Python documentation, built-in zip() including strict=True (added in Python 3.10).', url: 'https://docs.python.org/3/library/functions.html#zip' },
      { claim: 'PEP 618, Add optional length-checking to zip.', url: 'https://peps.python.org/pep-0618/' },
      { claim: 'Ordnance Survey Code-Point Open 2026.3.0 (contains Royal Mail and OS data, Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'OpenTopoData, EU-DEM 25 m dataset (Copernicus Land Monitoring Service).', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io lookups.', url: 'https://api.postcodes.io/places?q=Old%20Colwyn' }
    ],
    rejectedClaims: [
      'That the two missing heights are an error in OpenTopoData: the reason is our reading (shoreline points); stated as such.',
      'That LL28 and LL29 equal the town: they also cover rural wards; the page says so.',
      'Any flood or sea-level claim about Rhos or the shore: none made.',
      'That Llysfaen, Bryn-y-Maen or Penrhyn Bay are part of the Colwyn Bay built-up area: they are not; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
