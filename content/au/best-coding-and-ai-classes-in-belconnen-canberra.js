'use strict';
// Belconnen, Canberra (cg- district page, Australia cluster Phase 8, row 327). Keyword slug best-coding-and-ai-classes-in-*,
// district page (ABS SA3 80101 Belconnen) under Canberra and the ACT.
// Spine: Aho-Corasick searches 27 Belconnen suburb names across 1,951 ACT Government asset location strings (artworks, shelters,
// barbecues, parking sensors, basketball courts) in one pass: 75,491 automaton steps against 1,156,712 character comparisons for
// 27 separate naive scans; both find 101 matches, 51 of them outside Belconnen (Captain Cook Crescent, Flynn Drive...).
// Script: scratchpad au/b16/a_blcn.py. Lesson family: Aho-Corasick multi-pattern search; claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'BELCONNEN',
    label: 'Belconnen, Canberra',
    blurb: 'Coding and AI classes for Belconnen, with an algorithm that looks for 27 suburb names at once and finds Cook mostly in Griffith.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'best-coding-and-ai-classes-in-belconnen-canberra',
  code: 'blcn',
  accent: '#2E519B',
  accentRationale: 'Belconnen: a muted lake blue (hue 220.7, s 0.70, v 0.61), at least 38.1 RGB from every ACT and Canberra page accent, 13.3 from other AU accents and 8.5 from every other site colour; 6.2:1 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Belconnen',
    eyebrow: 'Belconnen district, north-west Canberra, ACT',
    schemaType: 'Place',
    chain: [
      { type: 'Place', name: 'Belconnen' },
      { type: 'City', name: 'Canberra' },
      { type: 'AdministrativeArea', name: 'Australian Capital Territory' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-australian-capital-territory', name: 'Australian Capital Territory' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-canberra', name: 'Canberra' }
  ],
  nav: [
    { label: 'Canberra', href: '/vibe-coding-and-ai-agents-classes-in-canberra' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Belconnen, Canberra',
  title: 'Best Coding and AI Classes in Belconnen, Canberra',
  description: 'Live online coding and AI classes for Belconnen learners aged 6 to adult, with an algorithms project that searches ACT open data for 27 suburb names in one pass.',
  ogDescription: 'Searching ACT asset records for 27 Belconnen suburb names: 1.16 million comparisons the slow way, 75,491 steps with Aho-Corasick.',
  twitterDescription: 'Belconnen coding and AI classes, taught live online, with a free first lesson.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '13 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Belconnen',
    description: 'Algorithms, Python and AI lessons for children, teenagers and adults across the Belconnen district of Canberra, placed by level and taught live.'
  },
  h1: 'Coding and AI classes in Belconnen',
  capsuleQ: 'How can a Belconnen family judge the best coding and AI classes?',
  capsule: 'Look for a course that teaches why one program is faster than another, not only how to write it. In our Belconnen project, learners search public ACT records for all 27 Belconnen suburb names. Twenty-seven separate scans need over a million character comparisons. One Aho-Corasick pass needs about 75,000 steps and finds the same 101 matches.',
  lead: 'Belconnen is Canberra\'s biggest district by population, a ring of suburbs from Aranda and Weetangera out to Strathnairn and Macnamara on the western edge. Many of its suburb names also turn up elsewhere in Canberra, on streets, parks and parking bays. That makes them a good test set for fast text search.',
  wa: 'Hi Modern Age Coders, could we book a free coding or AI lesson for a learner in Belconnen?',
  picks: {
    eyebrow: 'Course picks for Belconnen',
    h2: 'Algorithms, Python and AI',
    intro: 'Courses that suit the string-search project below. A free trial lesson sets the level.',
    items: [
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Tries, automata and the cost of every loop.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 17', note: 'Contest-style problems where the faster idea really matters.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, dictionaries and queues in clear Python.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Pattern-spotting puzzles that build search instincts.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Belconnen in the Census',
      h2: 'Canberra\'s largest district',
      intro: 'Figures for the Belconnen statistical area (ABS SA3 80101) from 2021 Census QuickStats, read on 13 October 2026, with the ABS estimate for 2025.',
      body: [
        {
          kind: 'table',
          caption: 'Belconnen district counts',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents, 2021 Census', '106,061'],
            ['Estimated residents, 2025', '110,132'],
            ['Median age', '35'],
            ['Families', '28,377'],
            ['Private dwellings', '43,206'],
            ['Bedrooms per dwelling', '3.1']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Belconnen shares beside the ACT',
          head: ['Share', 'Belconnen', 'ACT'],
          rows: [
            ['Separate houses', '69.4% (27,414)', '63.2%'],
            ['Bus to work', '5.1% (2,887)', '3.6%'],
            ['Residents aged 5 to 9', '6.3% (6,713)', '6.4%'],
            ['Professionals among workers', '29.2% (16,499)', '31.4%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Buses matter', p: 'One Belconnen worker in twenty took a bus to work in 2021, a higher share than the territory as a whole.' },
            {
              h3: 'Two population figures',
              p: 'The 2021 count and the 2025 estimate come from different ABS methods, so both are shown and neither is subtracted from the other.'
            },
            {
              h3: 'District outline',
              p: 'We place 27 named suburbs in Belconnen by testing each ABS suburb outline against the ABS district outline, about 112.3 square kilometres.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Census night fell during the pandemic, so travel answers describe that week. The ABS rounds shares and slightly perturbs small counts, so table parts may not sum to totals; we quote its numbers unchanged.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Twenty-seven names, one pass',
      intro: 'ACT Government open data lists artworks, shelters, barbecues, parking sensors and basketball courts with a short location description each. Learners ask: which of those 1,951 descriptions mention a Belconnen suburb name? The obvious method scans every description once per name. Aho-Corasick builds a small machine from all 27 names and reads each description once.',
      body: [
        {
          kind: 'table',
          caption: 'Two ways to search 52,603 characters of location text (our measurement)',
          head: ['Method', 'Work done', 'Matches'],
          rows: [
            ['27 separate scans, character by character', '1,156,712 comparisons', '101'],
            ['Aho-Corasick automaton, 164 states', '75,491 steps', '101']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Why it is faster',
              p: 'The automaton shares prefixes, so MACGREGOR, MACNAMARA and MACQUARIE begin on one path. When a match fails, a failure link jumps to the longest part already seen, so no character is reread.'
            },
            {
              h3: 'Same answers',
              p: 'Both methods find exactly 101 matches. Speed changes nothing about correctness here, which is what a learner should verify before celebrating.'
            },
            {
              h3: 'Scale',
              p: 'Add more names and the naive cost grows with every one; the single pass barely changes. That is why the idea suits any tool that scans text for a long list of keywords.'
            }
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Where the most frequent matches actually are (asset suburbs from the source data)',
          head: ['Name', 'Matches', 'What they are'],
          rows: [
            ['COOK', '46', 'All of them parking sensors on Captain Cook Crescent in Griffith'],
            ['HAWKER', '13', 'Hawker shopping centre and Hawker Place, two spelt CETRE and CNETRE'],
            ['KALEEN and BELCONNEN', '6 each', 'Kaleen shops; Belconnen library, town centre and interchange']
          ]
        },
        {
          kind: 'callout',
          h3: 'A fast search is not a smart search',
          p: 'Exactly half the story is outside the district: 51 of the 101 matches belong to assets in other suburbs, such as Flynn Drive in Yarralumla and Melba Street in Downer. The algorithm finds strings; deciding what they mean is a separate job.'
        },
        {
          kind: 'p',
          text: 'Text comes from five ACT Government datasets downloaded on 13 October 2026. The automaton, the naive matcher, the step counts and the match locations are our own script and measurements.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'Building the automaton',
      h2: 'A trie, failure links and one loop',
      intro: 'The build has three parts: insert every name into a trie, add failure links with a breadth-first pass, then walk each description once.',
      body: [
        {
          kind: 'table',
          caption: 'Lesson steps',
          head: ['Step', 'Learner task'],
          rows: [
            ['1', 'Write the naive matcher and count its comparisons on the Belconnen names.'],
            ['2', 'Build the trie and count its states; check that shared prefixes save space.'],
            ['3', 'Add failure links with a queue and output lists that inherit along those links.'],
            ['4', 'Run both methods, confirm identical matches, then compare the work counts.']
          ]
        },
        {
          kind: 'p',
          text: 'Step 3 is where most bugs live. A failure link that points to the wrong state misses names hidden inside longer ones, so learners write a test with overlapping patterns before trusting the 101. Counting operations instead of timing them keeps the comparison fair on any laptop.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Hunt for several hidden words in one word search at once, then talk about which strategy saved time.' },
            { h3: 'Teenagers', p: 'Code the automaton in Python and compare its work with str.find in a loop.' },
            { h3: 'Adults', p: 'Use multi-pattern search for log scanning, keyword filters or document tagging at work.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Belconnen',
      h2: 'Trees, artworks and the 2027 school year',
      intro: 'Local facts from ACT Government open data.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Public trees', p: 'The ACT tree asset list holds 171,820 records in Belconnen suburbs by our count, with 102,119 of them labelled native.' },
            { h3: 'Public art', p: 'Ninety-six artworks are recorded in the district, 40 of them sculptures and 18 street art pieces.' },
            { h3: 'School year', p: 'ACT public school Term 1, 2027 begins on Monday 1 February for new students; Canberra Day falls on Monday 8 March.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Bin day note',
          p: 'In the ACT NOWaste collection list, 22 of Belconnen\'s 30 listed suburbs put their garbage out on a Thursday.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From word searches to automata',
    intro: 'Ages are a guide; the trial lesson decides.',
    cols: [
      {
        band: 'Ages 6 to 9',
        h3: 'Finding patterns',
        p: 'Block-code games about spotting and matching.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 9 to 12',
        h3: 'First Python',
        p: 'Strings, loops and simple search programs.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'Algorithms',
        p: 'Tries, queues and why some searches scale.',
        courses: ['problem-solving-dsa-masterclass-teens', 'competitive-programming-for-teens-course']
      },
      {
        band: 'University and adult',
        h3: 'Efficient code',
        p: 'Data structures and algorithms for work.',
        courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Do algorithms still matter with AI around?',
    intro: 'Yes, because AI tools often produce the simple version first.',
    p1: 'Ask an assistant to find many keywords in text and it will usually loop over the keywords. That works on 27 names and crawls on 27,000.',
    p2: 'A Belconnen learner who has counted 1.16 million comparisons against 75,491 steps knows to ask for a better algorithm, and knows how to check that it returns the same matches.',
    closer: 'In our classes, AI suggests code and learners measure it.',
    blogAnchor: 'why learning to code still matters when AI can write it'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for Belconnen',
    intro: 'Classes are live over video, so learners join from home anywhere from Kaleen to Holt.',
    cells: [
      { h3: 'Live teacher', p: 'Each lesson is taught in real time, with code reviewed as it is written.' },
      { h3: 'ACT terms', p: 'Classes follow the ACT school terms and pause in the holidays.' },
      { h3: 'Free start', p: 'One free lesson, then a written course plan.' },
      { h3: 'Groups or private', p: 'Fifteen to twenty learners at one level, or one to one.' },
      { h3: 'Two a week', p: 'About eight lessons a month.' },
      { h3: 'India time', p: 'Until 4 April 2027, a 5pm Belconnen lesson is 11:30am in India.' }
    ],
    spec: {
      title: 'Canberra clocks',
      p: 'Canberra follows Sydney time in the IANA time zone database, with daylight saving from the first Sunday in October to the first Sunday in April, so the gap with India is five and a half hours in summer and four and a half in winter.'
    }
  },
  fees: {
    h2: 'Belconnen class fees',
    intro: 'The same fees for every learner.',
    first: 'The first lesson is free and ends with a plan.',
    group: 'Group classes: about eight lessons a month, fifteen to twenty learners.',
    private: 'Private classes: about eight lessons a month with one teacher.',
    closer: 'Fees are charged in US dollars and start only after the free lesson has set a course and weekly time. The pricing page covers holidays and missed lessons.'
  },
  reviewsH2: 'Family reviews on Google',
  book: {
    h2: 'Book a free Belconnen lesson',
    intro: 'Tell us the learner\'s age and interests. A primary student might race through a multi-word search; a teenager might build the automaton.',
    success: 'Thank you. We will be in touch about a Belconnen lesson.'
  },
  faq: {
    h2: 'Belconnen coding and AI questions',
    intro: 'Questions from Belconnen families and adult learners.',
    items: [
      {
        q: 'How many people live in Belconnen?',
        a: 'The 2021 Census counted 106,061 residents in the Belconnen district, and the ABS estimate for 2025 is 110,132.'
      },
      {
        q: 'What is the Aho-Corasick algorithm?',
        a: 'A way to search for many words at once. It builds a trie of the words with extra failure links, then reads the text a single time.'
      },
      {
        q: 'Why did COOK match so often?',
        a: 'Because Captain Cook Crescent in Griffith has many parking sensors with the street in their description. The search finds text, not suburbs.'
      },
      {
        q: 'Is this too advanced for school students?',
        a: 'The full automaton suits strong teenagers and adults. Younger learners explore the same idea with word searches and simple loops.'
      },
      { q: 'Where does the data come from?', a: 'From ACT Government open data on data.act.gov.au, licensed CC BY 4.0, downloaded on 13 October 2026.' },
      { q: 'How many suburbs are in Belconnen?', a: 'Our test of ABS outlines places 27 named suburbs in the Belconnen district, from Aranda to Weetangera.' },
      {
        q: 'Do you have a centre in Belconnen?',
        a: 'No. Lessons are live online only, we have no Australian office, and our listed phone number is Indian.',
        boiler: true
      },
      {
        q: 'What do Belconnen classes cost?',
        a: 'The first lesson is free. Group classes cost USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, and one-to-one classes cost USD 150 a month. You agree the course and time before paying.',
        boiler: true
      },
      {
        q: 'How are groups formed?',
        a: 'By level and pace, fifteen to twenty learners each, not by age or suburb. One-to-one lessons suit anyone no group time fits.',
        boiler: true
      },
      { q: 'Can adults join?', a: 'Yes. Adults learn in adult groups or privately, often to speed up text processing at work.' }
    ]
  },
  next: {
    eyebrow: 'More for Canberra learners',
    h2: 'Keep exploring',
    html: 'See the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canberra">Canberra page</a> for the whole city, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-australian-capital-territory">ACT guide</a> for the territory, and <a class="cg-inline-link" href="/coding-classes-for-kids-canberra">coding for Canberra kids</a> for younger learners.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Belconnen and Canberra',
  footerPlaces: [
    { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canberra', label: 'Canberra' },
    { href: '/coding-and-ai-classes-in-australian-capital-territory', label: 'ACT' },
    { href: '/coding-classes-for-kids-canberra', label: 'Kids in Canberra' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-blcn .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-blcn .cg-hero h1 { font-weight: 660; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-blcn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-blcn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.78rem; }
.cg-root.cg-blcn .cg-section-head h2 { max-width: 20ch; }
.cg-root.cg-blcn .cg-grid-3 { gap: clamp(0.9rem, 2.5vw, 1.7rem); }
.cg-root.cg-blcn .cg-table caption { text-align: left; font-weight: 620; font-size: 0.88rem; }
.cg-root.cg-blcn .cg-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.cg-root.cg-blcn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.75rem; }
.cg-root.cg-blcn .cg-callout { border-radius: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Belconnen SA3 80101, ABS Census 2021 QuickStats (read 13 October 2026): 106,061 people; median age 35; 28,377 families; 43,206 private dwellings; 3.1 bedrooms per dwelling; separate houses 27,414 (69.4%, ACT 63.2%); bus to work 2,887 (5.1%, ACT 3.6%); aged 5-9 6,713 (6.3%, ACT 6.4%); professionals 16,499 (29.2%, ACT 31.4%). ABS ERP 2025 (ABS_ANNUAL_ERP_ASGS2021, SA3 80101): 110,132. ABS SA3 area 112.2636 sq km; 27 named suburbs by our SAL-centroid test. ACT open data (CC BY 4.0, downloaded 13 October 2026): tree assets 171,820 records in Belconnen suburbs, 102,119 native; artworks 96 (40 sculpture, 18 street art); ACT NOWaste list 30 Belconnen rows, 22 Thursday garbage. ACT 2027 Term 1 begins Monday 1 February (new students); Canberra Day Monday 8 March 2027. Canberra = Australia/Sydney (IANA 2026e), DST 4 October 2026 to 4 April 2027.',
    localProject: 'Aho-Corasick over 27 Belconnen suburb names (164 trie states) and 1,951 location strings (52,603 characters) from ACT artwork, shelter, barbecue, smart parking sensor and basketball court data: 75,491 automaton steps vs 1,156,712 character comparisons for 27 naive scans; 101 matches each, all whole words; COOK 46 (Captain Cook Crescent, Griffith), HAWKER 13, KALEEN 6, BELCONNEN 6; 51 matches on assets outside Belconnen (Flynn Drive Yarralumla, Melba Street Downer, Bruce Dittmar park Forde). Our script. Script: scratchpad au/b16/a_blcn.py.',
    requiredMentions: ['110,132', '43,206', '69.4% (27,414)', '5.1% (2,887)', '1,156,712', '75,491', 'Captain Cook Crescent', '164 states', '171,820'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Belconnen statistical area level 3 (SA3 80101), read 13 October 2026.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/80101'
      },
      {
        claim: 'ABS Data API, Estimated Resident Population by ASGS 2021 regions (ABS_ANNUAL_ERP_ASGS2021), SA3 80101 Belconnen, 2025.',
        url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_ASGS2021,1.2.0/ERP.SA3.80101.A?startPeriod=2024&format=csvfilewithlabels'
      },
      {
        claim: 'ABS ASGS 2021 Statistical Area Level 3 boundary service (district outlines and areas).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SA3/MapServer'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (suburb outlines, used to place each suburb in a district).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      {
        claim: 'ACT Government open data, ACTGOV Artwork Assets (data.act.gov.au a69k-qah8), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/a69k-qah8'
      },
      {
        claim: 'ACT Government open data, ACTGOV Shelter Assets (data.act.gov.au pf5q-vheg), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/pf5q-vheg'
      },
      {
        claim: 'ACT Government open data, ACTGOV Barbecue Assets (data.act.gov.au qxhv-bxbv), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/qxhv-bxbv'
      },
      {
        claim: 'ACT Government open data, ACTGOV Smart Parking Sensor Assets (data.act.gov.au wret-g63c), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/wret-g63c'
      },
      {
        claim: 'ACT Government open data, Basketball Courts (data.act.gov.au igti-4f4a), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/igti-4f4a'
      },
      {
        claim: 'ACT Government open data, ACTGOV Tree Assets (data.act.gov.au 9qch-rvqr), Creative Commons Attribution 4.0, grouped counts by suburb queried 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/9qch-rvqr'
      },
      {
        claim: 'ACT Government open data, ACT Suburb Next Garbage, Recycling and Green Waste Collection Dates (data.act.gov.au jzzy-44un), Creative Commons Attribution 4.0, downloaded 13 October 2026.',
        url: 'https://www.data.act.gov.au/d/jzzy-44un'
      },
      {
        claim: 'ACT Government open data, ACT Education Public Holidays and Term Dates (data.act.gov.au 4kcq-44ad): 2027 Term 1 begins Monday 1 February (new students), Canberra Day Monday 8 March, Term 3 Tuesday 20 July to Friday 24 September, Term 4 Tuesday 12 October to Friday 17 December.',
        url: 'https://www.data.act.gov.au/d/4kcq-44ad'
      },
      {
        claim: 'IANA time zone database 2026e, backward file: Australia/Canberra links to Australia/Sydney.',
        url: 'https://data.iana.org/time-zones/tzdb/backward'
      },
      {
        claim: 'IANA time zone database 2026e, australasia file: rule AN, daylight saving from the first Sunday in October to the first Sunday in April.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Belconnen suburb (SAL) Census figures: not used; the page uses the SA3 district.',
      'Adding suburb tree counts into a published district total: the tree figure is our count of records, not a published total.',
      'Naming schools: not used.',
      'Income, rent, ancestry, language and religion figures: excluded by the cluster rules.',
      'Any link with the ACT Government or Transport Canberra.'
    ]
  }
};
