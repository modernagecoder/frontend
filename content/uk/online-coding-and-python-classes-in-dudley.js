'use strict';
// Dudley (cg- town page, UK cluster Phase 8, towns band A, row 387). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does some code slow to a crawl
// as data grows while other code barely notices? (time complexity measured on a real join: nested loops vs a dictionary).
// Data (read 29 September 2026): Nomis Census 2021 TS001 usual residents for all 1,033 output areas in Dudley borough
// (E08000027; scratchpad p7/cache/oa_E08000027.csv) and the ONS lookup OA21_BUA22_LAD22_RGN22_EW_LU for the same areas
// (1,033 rows, 1,029 with a built-up area). The lookup service reports 188,880 rows for England and Wales
// (returnCountOnly). Borough TS001 323,486.
// Our run (scratchpad dud/join.py): add up residents per built-up area by joining the two tables on the output-area code.
// Median of 5 timings, same machine: n areas / nested-loop comparisons / ms | dictionary steps / ms:
// 125 / 7,875 / 0.76 | 250 / 0.069; 250 / 31,375 / 3.11 | 500 / 0.153; 500 / 125,250 / 11.97 | 1,000 / 0.279;
// 1,033 / 534,061 / 51.0 | 2,066 / 0.635. Both give identical totals (e.g. Dudley (Dudley) 64,277, our OA sum; the ONS
// publishes 64,270). Extrapolated to 188,880 areas at the same rates: 17,837,921,640 comparisons, about 28 minutes, against
// 377,760 steps, about 0.12 seconds (estimate, not run).
// Lesson family: time complexity (Big O) measured, quadratic vs linear, nested-loop join vs hash join, extrapolation.
// Screened: Big O, complexity, nested loop, hash join 0 hits; Southampton owns hash-table internals (collisions, load
// factor); Basildon owns quicksort pivots.
// Place facts: ONS 2021 BUAs (published): Dudley (Dudley) 64,270; Halesowen 60,110; Stourbridge 56,950; Kingswinford
// 51,910; Brierley Hill 32,305; Sedgley 31,990; Coseley 25,205. Halesowen, Sedgley and Coseley are partly outside the
// borough by our OA sums (59,517; 31,655; 24,851); shown as published. Halesowen is kept unregistered for a later page.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DUDLEY', label: 'Dudley', blurb: 'Online coding and Python classes for Dudley, with a project that times two ways of joining census tables and shows why one grows 80 times slower.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-dudley',
  code: 'ddy',
  accent: '#0B374C',
  accentRationale: 'Dudley: a deep slate blue (10.16:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Dudley',
    eyebrow: 'Dudley, West Midlands, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dudley, England',
  title: 'Online Coding and Python Classes in Dudley | AI, 6 to 67',
  description: 'Online coding, Python, AI and vibe coding classes for Dudley, Stourbridge, Kingswinford and Brierley Hill learners aged 6 to 67, live online. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Dudley, and a project that times two ways of joining census tables to show how code slows as data grows.',
  twitterDescription: 'Dudley online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Dudley',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Dudley borough, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Dudley',
  capsuleQ: 'Which are the best online coding and Python classes in Dudley?',
  capsule: 'At the 2021 census, 323,486 people usually lived in Dudley borough. The ONS gives the Dudley built-up area 64,270, with Stourbridge, Kingswinford, Brierley Hill, Sedgley and Coseley listed separately. Whichever of these places they call home, children, teens and adults from 6 to 67 can join our India-based tutors on video for coding, Python, AI, vibe coding and maths, alone or with five to ten classmates of similar ability. Our courses start with how to think, so AI becomes something a learner can direct and check. Session one is free, and we end it by suggesting a course. The Dudley project measures something every programmer eventually meets: code that works on a small file and takes forever on a big one. After the trial, fees are USD 100 for each month of group lessons or USD 150 for each month of private ones.',
  lead: 'Two programs can give exactly the same answer and still be wildly different, because one gets slower much faster than the other as the data grows. Computer scientists describe this with Big O notation, and it is the difference between a report that runs in a blink and one that runs all afternoon. This project measures it on real data. The census publishes a population for each of Dudley\'s 1,033 output areas, and the ONS publishes a separate table saying which built-up area each output area belongs to. Joining the two tables gives the population of Dudley, Stourbridge, Kingswinford and the rest. The learner does the join two ways in Python, times both, and works out what would happen with all 188,880 output areas in England and Wales.',
  wa: 'Hello Modern Age Coders, may we book a free coding or Python lesson for a Dudley learner?',

  picks: {
    eyebrow: 'Dudley course picks',
    h2: 'Python, thinking and AI courses for Dudley',
    intro: 'Match the course to the learner\'s age and passions. A free live lesson opens every one, and there is nothing to pay to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: counting steps, spotting the faster method and explaining why.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then apps built by describing them to an AI and checking what it wrote.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the census join timing race.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning to data structures, efficiency, data work and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dudley borough',
      h2: 'Dudley, Stourbridge, Kingswinford and the other borough towns',
      intro: 'ONS 2021 census counts for the main built-up areas in the borough.',
      body: [
        { kind: 'table', caption: 'Main built-up areas in Dudley borough, 2021 census counts published by the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Dudley', '64,270'],
          ['Halesowen', '60,110'],
          ['Stourbridge', '56,950'],
          ['Kingswinford', '51,910'],
          ['Brierley Hill', '32,305'],
          ['Sedgley', '31,990'],
          ['Coseley', '25,205']
        ] },
        { kind: 'p', text: 'We print each ONS figure as released and leave them unadded; the borough total of 323,486 comes from a separate table. Our own sums of output areas show that Halesowen, Sedgley and Coseley each run slightly beyond the borough line, which is why their published counts are a little higher than the borough-only totals. The borough\'s schools teach England\'s national curriculum, and we timetable round whatever holiday dates you send.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">coding classes in the West Midlands</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region page</a>. Why reasoning comes before prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dudley project',
      h2: 'Nested loops against a dictionary: timing a real census join',
      intro: 'Join two real tables two ways, time both, and find out what happens as the data grows.',
      body: [
        { kind: 'p', text: 'Table one holds the 2021 census population of each of Dudley\'s 1,033 output areas, from Nomis. Table two is the ONS lookup saying which built-up area each output area sits in. The first method is the one most beginners write: for each row of the lookup, scan down the population table until the matching code turns up. The second loads the population table into a Python dictionary first, so every lookup is a single step. Both produce identical totals for every built-up area. The only question is speed.' },
        { kind: 'table', caption: 'Join timings as the number of output areas grows (median of five runs, one laptop, Python, 29 September 2026)', head: ['Output areas', 'Nested loops: comparisons', 'Nested loops: time', 'Dictionary: time'], rows: [
          ['125', '7,875', '0.76 ms', '0.069 ms'],
          ['250', '31,375', '3.11 ms', '0.153 ms'],
          ['500', '125,250', '11.97 ms', '0.279 ms'],
          ['1,033', '534,061', '51.0 ms', '0.635 ms']
        ] },
        { kind: 'p', text: 'Look at what happens each time the data doubles. The dictionary\'s time roughly doubles too, which is what "linear" or O(n) means. The nested loops\' time roughly quadruples, from 0.76 ms to 3.11 ms to 11.97 ms, because doubling the rows doubles both the number of searches and the length of each search. That is "quadratic", O(n squared), and the comparison counts show it exactly: 534,061 comparisons for 1,033 areas. With the whole borough, the dictionary is about 80 times faster.' },
        { kind: 'p', text: 'At the scale of one borough, 51 milliseconds hardly matters. The trouble comes with growth. Extending the same measured rates to all 188,880 output areas in England and Wales, the nested loops would need about 17.8 billion comparisons, roughly 28 minutes, while the dictionary would need about 377,760 steps, roughly a tenth of a second. Those are estimates, and real timings vary, but the gap between minutes and a blink is exactly what Big O predicts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find a name in a jumbled list, then in an alphabetical index, and count the steps each time.' },
          { h3: 'Ages 11 to 15', p: 'Write both joins in Python and time them on a small slice of the census data.' },
          { h3: 'Ages 15 and up', p: 'Fit the timings, estimate the full-country cost and explain it with Big O notation.' }
        ] },
        { kind: 'callout', h3: 'ONS tables, our timings', p: 'Population counts are Census 2021 figures from the Office for National Statistics via Nomis, and the area lookup is published by the ONS. The joins, the timings and the full-country estimates are our own work, measured on one computer.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Efficiency and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Right answers delivered too slowly are still a problem.',
      body: [
        { kind: 'table', caption: 'From the Dudley timing race to AI-written code', head: ['In the census join', 'When AI writes code for you'], rows: [
          ['Both methods gave the same totals', 'Passing a test does not prove the code is fast enough'],
          ['Doubling the data quadrupled the loops', 'Try the code on bigger inputs before trusting it'],
          ['The dictionary was 80 times faster', 'Know the standard data structures to recognise good code'],
          ['28 minutes against a tenth of a second, estimated', 'Estimate the cost before running on real scale'],
          ['Timings were measured, not guessed', 'Measure performance rather than assuming it']
        ] },
        { kind: 'p', text: 'An AI assistant can easily hand you the nested-loop version, and it will work perfectly on the small example you gave it. In our vibe coding lessons, where the learner describes what they want and an AI writes the first draft, Dudley learners test every draft on a larger input and ask what its Big O is. AI agents that process data for you can quietly run slow code for hours, so the same habit protects time and money. Learners graduate to building agents when their Python is strong, typically in the older teens or as adults, and Copilot Studio work is reserved for private lessons. Follow the thread on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK agents course page</a> and in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics and Nomis. Their published tables made this possible; the timings and estimates are ours, and any errors in them too.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counting steps to Big O',
    intro: 'School year is a starting estimate; the free lesson finds the real level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Counting steps, comparing methods and choosing the quicker one.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and efficiency', p: 'Data structures, algorithms and timing alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Efficient Python, data processing and AI agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and speed',
    h2: 'What is Big O notation, and does it still matter when AI writes the code?',
    intro: 'It describes how a program\'s work grows with its data, and it matters more, not less, when AI writes the code.',
    p1: 'In Dudley the nested-loop join and the dictionary join gave identical answers, yet one was 80 times slower on the full borough and would be thousands of times slower across the country. An AI can produce either without warning you.',
    p2: 'Learners who have timed both themselves ask the question that saves hours: what happens when the data is a hundred times bigger?',
    closer: 'Spotting slow code before it runs is a skill Dudley teenagers can use with every AI tool, and a good reason to learn Python in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Stourbridge to Sedgley, online',
    intro: 'Kit list: a laptop or desktop, and broadband good enough for a video call.',
    cells: [
      { h3: 'Learners write the code', p: 'The student types, prompts and runs every program while the tutor follows their screen and asks questions.' },
      { h3: 'Placed by the trial', p: 'What the learner can already do, seen in the free session, sets the starting topic; exam boards are recorded.' },
      { h3: 'Free to begin', p: 'The first lesson has no fee and ends with a course suggestion.' },
      { h3: 'Level-matched classes', p: 'Between five and ten UK students per class, all working at one level.' },
      { h3: 'Two a week', p: 'None in the school holidays.' },
      { h3: 'Reliable timing', p: 'Tutors adjust for UK clock changes, so your slot stays the same.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at the same level, all free on one evening, rarely live on the same street. Online, they can still share a class.' }
  },

  fees: {
    h2: 'Dudley fees',
    intro: 'Dudley learners pay our international rate, the same in every country outside India.',
    first: 'A full first lesson free, finishing with a course suggestion.',
    group: 'About eight live small-group lessons each month.',
    private: 'About eight live one-to-one lessons each month.',
    closer: 'Prices are in US dollars, never pounds. The first bill follows the trial, once a course and a weekly time are fixed, and holidays, absences and group-private swaps are all on the pricing page.'
  },

  reviewsH2: 'Google reviews from West Midlands homes and families nationwide',

  book: {
    h2: 'Book a free Dudley lesson',
    intro: 'Share how old the learner is, or their year, and what grabs them. A trial could be a count-the-steps puzzle, an AI-assisted Scratch game, some first Python, or a race between two ways of hunting through a list.',
    success: 'Thank you. Your Dudley request is with us.'
  },

  faq: {
    h2: 'Dudley questions',
    intro: 'The timing project, Big O, Python, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Dudley?', a: 'The ONS gives the Dudley built-up area 64,270 at the 2021 census, within a borough of 323,486.' },
      { q: 'Can Dudley learners take online Python classes?', a: 'Yes. Lessons are live on video for anyone aged 6 to 67 across the borough.' },
      { q: 'What is Big O notation?', a: 'A way of describing how the work a program does grows as its input grows; O(n) grows in step with the data, O(n squared) grows with its square.' },
      { q: 'What is the Dudley project?', a: 'Learners join two real census tables in Python using nested loops and then a dictionary, time both on Dudley\'s 1,033 output areas and estimate the cost for the whole of England and Wales.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for all ages, with the learner planning the program and testing what the AI writes, including how fast it runs.' },
      { q: 'When can learners move on to AI agents?', a: 'When Python has become second nature, most often in the late teens or adulthood; anything on Copilot Studio is private tuition.' },
      { q: 'Are lessons in person?', a: 'No, all lessons are live online.' },
      { q: 'What about GCSE and A level study?', a: 'We cover computer science and maths for both, aiming at genuine understanding; no grade is guaranteed.' },
      { q: 'How much are lessons?', a: 'Lesson one is on us. Carry on in a class for USD 100 monthly, or privately for USD 150 monthly.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More West Midlands pages',
    html: 'Other West Midlands pages: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> (word embeddings), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a> (a tool-using agent), <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dudley and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ddy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-ddy .cg-hero h1 { font-weight: 790; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-ddy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-ddy .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ddy .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-ddy .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ddy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ddy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-ddy .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-ddy .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Dudley (E08000027), Census 2021 TS001 usual residents 323,486. ONS 2021 BUAs (published): Dudley (Dudley) 64,270; Halesowen 60,110; Stourbridge 56,950; Kingswinford 51,910; Brierley Hill 32,305; Sedgley 31,990; Coseley 25,205. ONS OA21 to BUA22 lookup: 188,880 rows for England and Wales.',
    localProject: 'Join TS001 OA populations (1,033) with the OA to BUA lookup. Nested loops vs dictionary, median of 5 timings: 125 areas 7,875 comparisons 0.76 ms vs 0.069 ms; 250: 31,375, 3.11 vs 0.153; 500: 125,250, 11.97 vs 0.279; 1,033: 534,061, 51.0 vs 0.635 (about 80 times). Extrapolated to 188,880 areas: 17,837,921,640 comparisons, about 28 minutes, vs 377,760 steps, about 0.12 s (estimate). Lesson family: time complexity measured, quadratic vs linear, nested-loop vs hash join.',
    requiredMentions: [
      '323,486',
      '64,270',
      'Stourbridge',
      'Kingswinford',
      'Brierley Hill',
      'Sedgley',
      'Coseley',
      '188,880',
      'Big O',
      '534,061'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS001 usual residents by output area for Dudley, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS lookup of 2021 output areas to 2022 built-up areas, England and Wales (188,880 rows).', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/OA21_BUA22_LAD22_RGN22_EW_LU/FeatureServer' }
    ],
    rejectedClaims: [
      'Castle, zoo or industrial history: not read from a source; not claimed.',
      'Exact full-country timings: estimated from Dudley measurements, not run; stated as estimates.',
      'That AI assistants always write the slow version: stated only as "often", as a general tendency.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
