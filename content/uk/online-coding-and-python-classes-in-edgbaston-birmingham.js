'use strict';
// Edgbaston, Birmingham (cg- district page, UK cluster Phase 9, row 451). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how do you find near-duplicates in a big list
// without comparing everything with everything? (Jaccard similarity on character shingles, MinHash signatures, and
// locality-sensitive hashing with bands and rows).
// Data (read 30 September 2026): OpenStreetMap API 0.6 over bbox -1.975,52.420,-1.870,52.480 (24 tiles, ODbL), a rectangle
// of south-west Birmingham that contains Edgbaston: every node or way with a name and a shop, amenity, office, leisure,
// tourism, craft or healthcare tag: 4,842 named places.
// Our run (scratchpad g3/egb.py, egb2.py): names lower-cased, punctuation removed, split into 3-character shingles. All
// pairs: 11,720,061 comparisons, 23.5 s in plain Python, 1,901 pairs with Jaccard similarity of 0.6 or more. MinHash with
// 128 hash functions: signatures built in 4.7 s. LSH candidates / true pairs found: 64 bands of 2 rows 310,693 / 1,901
// (100%); 32 bands of 4 rows 11,152 / 1,901 (100%), bucketing 0.5 s; 16 bands of 8 rows 1,820 / 1,635 (86.0%). Of the 1,901
// similar-name pairs, 288 lie within 100 m of each other; 208 of those share the same main tag and 90 are within 30 m.
// Lesson family: MinHash and locality-sensitive hashing for near-duplicate detection. Screened: "MinHash",
// "locality-sensitive" 0 hits; claimed in claims.txt. Jaccard appears on Salisbury and Wolverhampton as a plain set
// measure; West Bridgford (Phase 9) claims difflib fuzzy matching of addresses; Larne HyperLogLog counts distinct items.
// Place facts: Census 2021 TS001 by 2022 ward (Nomis): Edgbaston 18,730; North Edgbaston 22,565; Harborne 23,002 (registered
// by the Harborne page). postcodes.io (Birmingham): Edgbaston (B15), Lee Bank (B15), Harborne (B17), Selly Park (B29).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EDGBASTON', label: 'Edgbaston, Birmingham', blurb: 'Online coding and Python classes for Edgbaston, with a project that finds near-duplicate place names among thousands without comparing every pair.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-edgbaston-birmingham',
  code: 'egb',
  accent: '#0B5A78',
  accentRationale: 'Edgbaston: a deep petrol blue (7.64:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Edgbaston',
    eyebrow: 'Edgbaston, Birmingham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Edgbaston, Birmingham',
  title: 'Online Coding and Python Classes in Edgbaston, Birmingham | AI',
  description: 'Live online coding, Python, AI and vibe coding lessons for Edgbaston, North Edgbaston, Lee Bank and Harborne learners aged 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Edgbaston, Birmingham, with a MinHash project that finds near-duplicate names among 4,842 mapped places.',
  twitterDescription: 'Edgbaston online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Edgbaston, Birmingham',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Edgbaston and south-west Birmingham, taught live with algorithmic thinking first.'
  },

  h1: 'Online coding and Python classes in Edgbaston, Birmingham',
  capsuleQ: 'Which are the best online coding and Python classes in Edgbaston?',
  capsule: 'Edgbaston ward counted 18,730 usual residents at the 2021 census and North Edgbaston ward 22,565, both within Birmingham. Postcodes.io places Edgbaston and Lee Bank in the B15 district. Our tutors, who teach from India over live video, take learners aged six to 67 through coding, Python, AI, vibe coding and maths, one at a time or in classes of five to ten at a shared stage. Algorithmic thinking is taught first, so a learner can judge whether a clever shortcut is safe to use. There is no charge for lesson one, and it closes with a course suggestion. The Edgbaston project takes 4,842 named places from the map of south-west Birmingham and finds the near-duplicate names among 11.7 million possible pairs, first the slow way and then with MinHash. Monthly fees after the trial: USD 100 in a class, USD 150 for private lessons.',
  lead: 'Duplicate records are everywhere: the same shop entered twice with slightly different spelling, the same customer under two email addresses, the same article copied with a word changed. Finding exact copies is easy. Finding near copies seems to need every record compared with every other, and the number of pairs grows with the square of the list. With ten thousand records that is fifty million comparisons; with ten million it is hopeless. MinHash, together with a trick called locality-sensitive hashing, gets round this by giving similar items a good chance of landing in the same bucket. Search engines and plagiarism checkers have used it for years. This project tries it on real place names around Edgbaston.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Edgbaston?',

  picks: {
    eyebrow: 'Edgbaston course picks',
    h2: 'Edgbaston courses in algorithms, Python and AI',
    intro: 'Start from the learner\'s age. The opening lesson of any course is live and free, and we take no payment details for it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: sorting into buckets, spotting near-matches and avoiding wasted work.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games imagined by the learner, coded with an AI and tested properly.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the first program to sets, hashing and the Edgbaston duplicate finder.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Hashing, sketches and algorithms that scale, in depth.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Edgbaston',
      h2: 'Edgbaston, North Edgbaston and Lee Bank',
      intro: 'Census 2021 residents in two Birmingham wards, and places recorded in B15.',
      body: [
        { kind: 'table', caption: 'Usual residents by Birmingham ward, Census 2021 via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Edgbaston', '18,730'],
          ['North Edgbaston', '22,565']
        ] },
        { kind: 'p', text: 'The two wards are counted separately by the ONS, and we leave them as two figures. On postcodes.io, Edgbaston and Lee Bank are suburban areas of Birmingham in the B15 postcode district, with Harborne in B17 and Selly Park in B29. Birmingham schools follow England\'s national curriculum; once we know the holiday dates, lessons are timetabled to skip them.' },
        { kind: 'callout', h3: 'Birmingham, the region and our method', p: 'For the city as a whole see <a class="cg-inline-link" href="/coding-classes-in-birmingham">coding classes in Birmingham</a>, and for the county <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a>. Our reasons for teaching thinking before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Edgbaston project',
      h2: 'Finding near-duplicate names with MinHash and locality-sensitive hashing',
      intro: 'One list of real names, 11.7 million pairs, and a way to look at about a thousandth of them.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data for a rectangle of south-west Birmingham that includes Edgbaston, and collects every mapped place that has a name and is tagged as a shop, amenity, office, leisure, tourism, craft or healthcare site: 4,842 places. Each name is lower-cased, stripped of punctuation and cut into overlapping three-letter pieces called shingles. Two names are compared by their Jaccard similarity: the shingles they share divided by all the shingles either has. Comparing every pair takes 11,720,061 comparisons and 23.5 seconds in plain Python, and finds 1,901 pairs with a similarity of 0.6 or more.' },
        { kind: 'p', text: 'MinHash replaces each set of shingles with a short signature, here 128 numbers, built so that the chance two signatures agree in any one position equals the Jaccard similarity. Locality-sensitive hashing then chops each signature into bands, and only names that match exactly on at least one whole band become candidate pairs. More rows per band means stricter matching and fewer candidates.' },
        { kind: 'table', caption: 'Locality-sensitive hashing on 4,842 place names, 128 MinHash values, our Python run on OpenStreetMap data', head: ['Bands and rows', 'Candidate pairs checked', 'True similar pairs found'], rows: [
          ['Every pair (no hashing)', '11,720,061', '1,901 of 1,901'],
          ['64 bands of 2', '310,693', '1,901 (100%)'],
          ['32 bands of 4', '11,152', '1,901 (100%)'],
          ['16 bands of 8', '1,820', '1,635 (86.0%)']
        ] },
        { kind: 'p', text: 'With 32 bands of 4, the program examines 11,152 candidate pairs, about one in a thousand of the full set, and still finds every one of the 1,901 similar pairs; building the signatures took 4.7 seconds and the bucketing half a second. Push the setting further, to 16 bands of 8, and the candidates shrink to 1,820 but 14% of the true pairs slip through. That is the trade every user of the method has to make. Are the pairs really duplicates? Only some. Of the 1,901, just 288 are within 100 metres of each other, and 90 share the same type of place within 30 metres. Many of the rest look like branches sharing a brand name, or two features of one site such as an attraction and its car park. A similar name is evidence, not proof.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Cut two shop names into three-letter chunks on paper and count how many chunks they share.' },
          { h3: 'Ages 11 to 15', p: 'Write Jaccard similarity in Python with sets and test it on pairs of real place names.' },
          { h3: 'Ages 15 and up', p: 'Build MinHash signatures and banded buckets, then tune bands and rows against the exact answer.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap names, our matching', p: 'Place names and tags are from OpenStreetMap and its contributors under the Open Database Licence. The shingling, hashing and counts are our own work; no business is named here and no pair is claimed to be a mapping error.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Similarity and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Approximate methods are how big problems get solved at all; the skill is knowing what they miss.',
      body: [
        { kind: 'table', caption: 'From the Edgbaston duplicate finder to working with AI', head: ['In the MinHash project', 'When AI works with large data'], rows: [
          ['Every pair meant 11.7 million comparisons', 'Brute force stops scaling quickly'],
          ['32 bands of 4 checked about 0.1% of pairs', 'A good index prunes nearly all the work'],
          ['16 bands of 8 missed 14% of true pairs', 'Faster settings trade away recall'],
          ['Only 288 similar pairs were also close on the map', 'Similar is not the same as duplicate'],
          ['The exact answer was computed once as a check', 'Validate an approximation before relying on it']
        ] },
        { kind: 'p', text: 'The same family of ideas sits underneath AI search: when a chatbot looks up relevant documents, it uses approximate nearest-neighbour indexes that, like the banded buckets here, trade a little accuracy for a great deal of speed. Vibe coding puts the learner in the role of designer while an AI writes the code; our Edgbaston learners ask it for the brute-force version as well, on a small sample, so the fast version can be checked against the truth. Agents that deduplicate or merge records on your behalf need exactly that safeguard. Learners move on to agents once their Python is fluent, most often in Years 12 and 13 or as adults, and Copilot Studio agents are one-to-one lessons only. Read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the principle and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents course for UK students</a> for the route.' },
        { kind: 'p', text: 'This page has no link to OpenStreetMap, the ONS, Nomis or postcodes.io beyond using their open data; the code and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From matching chunks to scalable algorithms',
    intro: 'A year group tells us roughly where to start; the free lesson tells us exactly.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, matching and doing less work for the same answer.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps the learner plans and an AI helps to write.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Sets, hashing and efficiency alongside GCSE and A level computer science.', courses: ['python-complete-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Data engineering and AI', p: 'Scalable data work, search and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and similarity',
    h2: 'What is MinHash, and how does locality-sensitive hashing find similar items quickly?',
    intro: 'MinHash turns each item into a short signature whose agreement rate estimates Jaccard similarity, and locality-sensitive hashing groups items whose signatures match on a band, so only likely matches are compared instead of every pair.',
    p1: 'On 4,842 place names around Edgbaston, comparing every pair took 11,720,061 comparisons, while MinHash with 32 bands of 4 checked 11,152 candidates and still found all 1,901 similar pairs.',
    p2: 'Learners who have built both ask of any fast AI search: what did it skip, and how was that checked?',
    closer: 'Understanding the shortcut, and its price, lets Edgbaston teenagers use large-scale AI tools with their eyes open, which is what learning Python is for.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Edgbaston lessons, taught by video',
    intro: 'Any reasonably modern computer with a camera will do, given internet that can carry a call.',
    cells: [
      { h3: 'Learner writes, tutor asks', p: 'Code and prompts come from the student; the tutor watches the screen share and asks what each step is for.' },
      { h3: 'Level found in the trial', p: 'The free lesson shows what to teach first, and exam boards are recorded.' },
      { h3: 'Trial at no cost', p: 'The first lesson is free and ends with the course we recommend.' },
      { h3: 'Small matched classes', p: 'Five to ten learners at one level, from around the UK.' },
      { h3: 'Two a week', p: 'Not in school holidays.' },
      { h3: 'Your slot stays put', p: 'UK clock changes are absorbed at our end.' }
    ],
    spec: { title: 'Why online', p: 'Matching five learners by level and by free evening is far easier across the country than across one postcode.' }
  },

  fees: {
    h2: 'Edgbaston fees',
    intro: 'Edgbaston learners pay the international prices we use outside India.',
    first: 'A whole lesson free, then a recommendation.',
    group: 'About eight live lessons a month in a class.',
    private: 'About eight live lessons a month one-to-one.',
    closer: 'Prices are stated in US dollars and we publish none in pounds. No invoice is raised until the trial has agreed a course and a weekly hour; the pricing page covers holidays, absences and switching format.'
  },

  reviewsH2: 'Birmingham families and learners around the UK on Google',

  book: {
    h2: 'Book a free Edgbaston lesson',
    intro: 'Give us an age or school year and what the learner enjoys. A trial could be a paper matching game, a Scratch project built with AI help, a gentle start in Python, or comparing real names with sets.',
    success: 'Thank you. Your Edgbaston request has arrived.'
  },

  faq: {
    h2: 'Edgbaston questions',
    intro: 'MinHash, the duplicate project, Python, vibe coding and practical points.',
    items: [
      { q: 'How many people live in Edgbaston?', a: 'Edgbaston ward had 18,730 usual residents at the 2021 census, and the separate North Edgbaston ward 22,565.' },
      { q: 'Can I take online Python classes in Edgbaston?', a: 'Yes. Lessons are live video calls for ages 6 to 67 in Edgbaston, Harborne and the rest of Birmingham.' },
      { q: 'What is Jaccard similarity?', a: 'The size of the overlap between two sets divided by the size of their union. Two names that share most of their three-letter chunks score close to 1.' },
      { q: 'What is locality-sensitive hashing used for?', a: 'Finding similar items in very large collections: near-duplicate web pages, plagiarism, similar images and the nearest-neighbour search behind many AI systems.' },
      { q: 'What does the Edgbaston project involve?', a: 'Finding near-duplicate names among 4,842 mapped places by brute force and by MinHash with banded buckets, then comparing speed and what each setting misses.' },
      { q: 'Is vibe coding included?', a: 'Yes, at all ages: learners describe the program to an AI, then test and fix what comes back.' },
      { q: 'When do learners reach AI agents?', a: 'When Python is fluent, most often Years 12 and 13 or adulthood; Copilot Studio agents are private lessons only.' },
      { q: 'Do you help with GCSE and A level computer science?', a: 'Yes, and with maths, taught for understanding and with no promised grades.' },
      { q: 'How much do lessons cost?', a: 'The trial is free. Then USD 100 a month for a class or USD 150 a month for private lessons.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes, once you send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Birmingham pages',
    html: 'Neighbouring pages with their own projects: <a class="cg-inline-link" href="/ai-and-programming-classes-in-harborne-birmingham">Harborne</a> (a mixture model of building sizes), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-moseley-birmingham">Moseley</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham">Kings Heath</a> and <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Edgbaston and Birmingham',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-egb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-egb .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-egb .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-egb .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-egb .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.02em; }
.cg-root.cg-egb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-egb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-egb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-egb .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-egb .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Birmingham (E08000025). Census 2021 TS001 by 2022 ward via Nomis: Edgbaston 18,730; North Edgbaston 22,565. postcodes.io (Birmingham): Edgbaston (B15), Lee Bank (B15), Harborne (B17), Selly Park (B29).',
    localProject: 'OSM API 0.6 bbox -1.975,52.420,-1.870,52.480 (24 tiles): 4,842 named places. 3-char shingles, Jaccard >= 0.6: 11,720,061 pairs, 23.5 s, 1,901 true pairs. MinHash 128 (4.7 s). LSH: 64x2 310,693 candidates 100%; 32x4 11,152 candidates 100% (0.5 s); 16x8 1,820 candidates 86.0% (1,635). 288 pairs within 100 m; 90 same tag within 30 m. Lesson family: MinHash, LSH, near-duplicate detection.',
    requiredMentions: [
      '18,730',
      '22,565',
      '4,842',
      '11,720,061',
      'North Edgbaston',
      'Lee Bank',
      'Selly Park',
      'MinHash',
      'locality-sensitive hashing'
    ],
    sources: [
      { claim: 'OpenStreetMap named places in south-west Birmingham, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 by ward via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Birmingham (B15, B17, B29).', url: 'https://api.postcodes.io/places?q=Lee%20Bank' }
    ],
    rejectedClaims: [
      'Cricket ground, university or botanical garden claims: not read from a source; not claimed.',
      'That any similar-name pair is a mapping mistake: not claimed; no business or place is named.',
      'That the rectangle equals Edgbaston: it is a larger rectangle of south-west Birmingham and the page says so.',
      'Sum of the two ward counts: not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
