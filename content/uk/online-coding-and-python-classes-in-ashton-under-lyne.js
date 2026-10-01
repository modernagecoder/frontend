'use strict';
// Ashton-under-Lyne (cg- town page, UK cluster Phase 10, towns band B, row 519). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if one character of a
// postcode is mistyped, how would a program know? (a cyclic redundancy check written in Python with bit operations,
// tested against a lookup of real postcodes and against adding up the character codes).
// Data (read 30 September 2026): OS Code-Point Open, dataset version 2026.3.0. OL area file, plus the AL, BL, DL, GL,
// LL, ML, PL, SL and OX files so that a typo in the area letters can also be looked up (145,933 postcodes in all).
// Our run (scratchpad aul/crc.py): 1,319 postcodes in districts OL6 (898) and OL7 (421), spaces removed, six
// characters each. Single-character typos (each character replaced by each of the 35 other letters and digits):
// 276,990 tried; 41,866 (15.1%) are another real postcode; by position, last character 43.1%, second-last 29.0%.
// Adjacent swaps of two different characters: 6,309 tried; 983 (15.6%) are real, e.g. OL6 6AD and OL6 6DA.
// One-byte sum of character codes: misses 0 typos and all 6,309 swaps. CRC-8 (polynomial 0x07): misses 0 and 0.
// CRC-16-CCITT: misses 0 and 0. Pairs of different postcodes sharing a check value, of 869,221 pairs: sum 22,503
// (2.59%; only 55 distinct sums); CRC-8 3,855 (0.44%; 233 distinct values); CRC-16 none. Our CRC-32 agrees with
// Python's zlib.crc32 on all 1,319. Standard test string "123456789": CRC-8 0xF4, CRC-16 0x29B1.
// Lesson family: cyclic redundancy check (CRC), error detection by polynomial division.
// Place facts: Tameside (E08000008) TS001 231,071. ONS 2021 BUAs wholly inside Tameside (published):
// Ashton-under-Lyne 48,600; Hyde 35,895; Stalybridge 26,830; Droylsden 23,915; Dukinfield 21,155.
// postcodes.io outcodes: OL6 wards include Ashton Hurst, Ashton St Michael's and Ashton Waterloo; OL7 is in Tameside.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ASHTON', label: 'Ashton-under-Lyne', blurb: 'Online coding and Python classes for Ashton-under-Lyne in Tameside, with a project that catches mistyped postcodes using a check written in a few lines of Python.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-ashton-under-lyne',
  code: 'aul',
  accent: '#990921',
  accentRationale: 'Ashton-under-Lyne: a strong crimson (8.7:1 contrast on white), hand-picked with clear distance from existing accents',
  pageType: 'city',
  place: {
    name: 'Ashton-under-Lyne',
    eyebrow: 'Ashton-under-Lyne, Tameside, Greater Manchester',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Ashton-under-Lyne, Tameside',
  title: 'Online Coding and Python Classes in Ashton-under-Lyne, Tameside',
  description: 'Python, coding, AI and vibe coding lessons live online for Ashton-under-Lyne, Hurst, Smallshaw, Waterloo and Guide Bridge, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Ashton-under-Lyne, with a Python project: a cyclic redundancy check catches mistyped OL6 and OL7 postcodes.',
  twitterDescription: 'Ashton-under-Lyne, Tameside: Python, coding, AI and vibe coding classes on live video for ages 6 to 67. Try one lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Ashton-under-Lyne, Tameside',
    description: 'Python, coding, data handling, AI, vibe coding and maths for children, teenagers and adults in Ashton-under-Lyne and across Tameside, taught live online with every result tested.'
  },

  h1: 'Online coding and Python classes in Ashton-under-Lyne',
  capsuleQ: 'Which online coding and Python classes are best for Ashton-under-Lyne learners?',
  capsule: 'The Ashton-under-Lyne built-up area held 48,600 people at the 2021 census, and the borough of Tameside 231,071, on ONS counts. Postcode data names Hurst, Smallshaw, Limehurst, Hazelhurst, Cockbrook and Guide Bridge as suburban areas of the borough. Our tutors, who work from India, teach Python, coding, AI, vibe coding and maths to learners of six to 67 on live video, one learner at a time or in a class of five to ten at the same stage. Working out why code is right comes first in every lesson, because that is the skill that lets someone check a chatbot. The Ashton project uses all 1,319 postcodes in the OL6 and OL7 districts to find out how often a typing slip turns one real postcode into another, then writes a check in Python that catches it. The opening lesson is free and ends with a recommended course. Group lessons are then USD 100 a month, private lessons USD 150 a month.',
  lead: 'A form asks for a postcode and the user hits the key next to the one they meant. Most programs would catch the slip by looking the postcode up. That works only if the mistake produces nonsense. Often it produces a perfectly good postcode that belongs to somebody else, and the parcel, the letter or the engineer goes there instead. The remedy is older than the web: send a small check value along with the data, worked out from every bit of it. The version used in Ethernet networks, zip files and PNG images is the cyclic redundancy check, and its core fits in a few lines of Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or Python lesson for a learner in Ashton-under-Lyne.',

  picks: {
    eyebrow: 'Courses for Ashton',
    h2: 'Python, coding and AI courses for Ashton-under-Lyne',
    intro: 'Choose by age. All four begin with a live class that costs nothing, and we never ask for card details to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: invent a secret extra digit that gives away a copied-down number with a mistake in it.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Get an AI to draft a Scratch code-breaking game, then try to sneak a wrong code past it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through files, bytes and bit operations, with the OL6 and OL7 postcode check as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects made with AI help, where the learner breaks the input on purpose.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Tameside',
      h2: 'Ashton-under-Lyne and the towns of Tameside',
      intro: 'Five built-up areas that sit wholly in the borough, and the neighbourhoods that postcode data records.',
      body: [
        { kind: 'table', caption: 'Built-up areas entirely within Tameside, ONS, Census 2021', head: ['Built-up area', 'People counted in 2021'], rows: [
          ['Ashton-under-Lyne', '48,600'],
          ['Hyde', '35,895'],
          ['Stalybridge', '26,830'],
          ['Droylsden', '23,915'],
          ['Dukinfield', '21,155']
        ] },
        { kind: 'p', text: 'We quote each figure as the ONS rounded it and do not add them; Tameside\'s 231,071 comes from the census table for the whole borough. Areas that cross the borough boundary are not shown. According to postcodes.io, Hurst, Hurst Knoll, Waterloo, Smallshaw, Limehurst, Hazelhurst, Cockbrook, Crowhill and Guide Bridge are suburban areas of Tameside and Park Bridge is a village. The same service lists Ashton Hurst, Ashton St Michael\'s and Ashton Waterloo among the wards of postcode district OL6. Tameside schools teach the national curriculum for England, and our timetable bends around the holidays you tell us about.' },
        { kind: 'callout', h3: 'Greater Manchester, the North West and our approach', p: 'There is a county page at <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">coding classes in Greater Manchester</a> and a regional one at <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. What we mean by thinking first is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Ashton project',
      h2: 'A cyclic redundancy check on 1,319 postcodes',
      intro: 'First measure how often a slip goes unnoticed, then write three checks and try to fool each one.',
      body: [
        { kind: 'p', text: 'Ordnance Survey publishes every postcode in Great Britain as open data in Code-Point Open. The learner loads the OL file with Python\'s csv module and keeps the 1,319 postcodes in districts OL6 and OL7. Then comes the damage. Each character of each postcode is replaced, in turn, by every other letter and digit, and each pair of neighbouring characters is swapped. After every change the program asks one question: is the result still a real postcode?' },
        { kind: 'table', caption: 'Typing slips applied to the OL6 and OL7 postcodes, and how many land on another real postcode (our Python run on Code-Point Open)', head: ['Kind of slip', 'Slips tried', 'Still a real postcode'], rows: [
          ['One character replaced', '276,990', '41,866 (15.1%)'],
          ['Two neighbouring characters swapped', '6,309', '983 (15.6%)']
        ] },
        { kind: 'p', text: 'About one slip in seven goes straight through a lookup, because the wrong postcode exists. The danger is not spread evenly. A mistake in the final letter lands on a real postcode 43.1% of the time, and in the letter before it 29.0%. Swaps do the same: OL6 6AD and OL6 6DA are both in the file. So the learner writes three checks that travel with the postcode. The first adds up the character codes and keeps the last eight bits. The second and third are cyclic redundancy checks of 8 and 16 bits. Each one treats the postcode as a long string of bits, shifts through it one bit at a time with the << operator, and uses ^, Python\'s exclusive-or, to subtract a fixed pattern whenever the top bit is set. What is left at the end is the check value.' },
        { kind: 'table', caption: 'Errors each check failed to notice', head: ['Check', 'Replaced characters missed', 'Swaps missed', 'Pairs of different postcodes with the same check value'], rows: [
          ['Lookup in the real list', '41,866 of 276,990', '983 of 6,309', 'Does not apply'],
          ['Sum of character codes, 8 bits', '0', '6,309 of 6,309', '22,503 of 869,221'],
          ['CRC-8', '0', '0', '3,855 of 869,221'],
          ['CRC-16', '0', '0', '0 of 869,221']
        ] },
        { kind: 'p', text: 'The sum catches every replaced character and not one swap, since adding numbers gives the same total in any order. A CRC is a remainder after division, and in division position matters, so both kinds of slip change it. The last column is the honest limit. Eight bits can hold only 256 values, so some unrelated postcodes are bound to share one: 3,855 pairs for CRC-8, or about 1 in 225. The sum is far worse at 1 in 39, because the 1,319 postcodes produce only 55 different totals. Sixteen bits left no pair matching. As a final test the learner writes CRC-32 the same way and compares it with zlib.crc32 from Python\'s standard library. The two agree on all 1,319 postcodes.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Add a check digit to a six-digit number, swap two digits, and see whether the check notices.' },
          { h3: 'Ages 11 to 15', p: 'Write the character-sum check in Python, then hunt for two postcodes that fool it.' },
          { h3: 'Ages 15 and up', p: 'Code CRC-8 with shifts and exclusive-or, prove it against a published test value, and match zlib on CRC-32.' }
        ] },
        { kind: 'callout', h3: 'Data note and caveats', p: 'Contains OS data © Crown copyright and database right 2026, and Royal Mail data © Royal Mail copyright and database right 2026, from Code-Point Open. The slips are simulated and the counts are ours; no real address or delivery was involved. Postcodes are created and withdrawn over time, so a later release would shift the figures. A CRC detects accidents. It offers no defence against someone changing data on purpose.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Checking the checker',
      h2: 'What a CRC teaches about vibe coding and AI',
      intro: 'A validation step is only as good as the mistakes you have thrown at it.',
      body: [
        { kind: 'table', caption: 'From mistyped postcodes to AI-written code', head: ['In the Ashton run', 'When coding with AI'], rows: [
          ['15.1% of slips were valid postcodes', 'Valid is not the same as correct'],
          ['The sum missed every swap', 'Ask which errors a check cannot see'],
          ['Our CRC-32 matched zlib on 1,319 inputs', 'Test your own code against a trusted library'],
          ['CRC-8 let 1 pair in 225 through', 'Know the failure rate, not just that it works'],
          ['Errors were injected on purpose', 'Break the input before a user does']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "validate a UK postcode" and the usual reply is a pattern that checks the shape: letters here, digits there. Every one of the 41,866 slips above has the right shape. A learner who vibe codes the form and stops at the first green tick ships that weakness. One who has injected errors knows to ask what the check is blind to, and can read the few lines of bit operations well enough to see why the CRC is not. When their Python is dependable without help, most often in sixth form or adult life, learners go on to AI agents; agents in Copilot Studio are taught one-to-one only. More is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents: the pathway for UK students</a>.' },
        { kind: 'p', text: 'Ordnance Survey, Royal Mail, the Office for National Statistics and postcodes.io are not partners of ours and have not approved this page. We used their open data, and the experiment is our work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route',
    h2: 'From check digits to bit operations',
    intro: 'Year groups are only a starting estimate. The free lesson tells us where a learner really is.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Codes, check digits and catching a mistake with a rule.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small AI-assisted builds that the child then tries to break.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Files, bytes and tests on real data, in step with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Python for work, then data structures and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and errors',
    h2: 'What is a cyclic redundancy check?',
    intro: 'A cyclic redundancy check, or CRC, is a short value worked out from a piece of data by treating its bits as one long number, dividing by a fixed pattern and keeping the remainder, so that almost any accidental change to the data gives a different value.',
    p1: 'Across 1,319 Ashton-under-Lyne postcodes, 41,866 single-character slips and 983 swaps produced another real postcode; an 8-bit CRC caught every one of them, while a simple sum of the characters missed all 6,309 swaps.',
    p2: 'An 8-bit check still let about 1 pair of unrelated postcodes in 225 share a value, and 16 bits removed those too.',
    closer: 'An Ashton-under-Lyne teenager who has written those few lines and attacked them can tell when AI-written validation is only checking the shape of the data. That comes from programming, not prompting, and it is why coding remains worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'On the day',
    h2: 'Hurst, Smallshaw and Guide Bridge, one live class',
    intro: 'You need a computer with a camera and a home connection that can carry video.',
    cells: [
      { h3: 'Typed by the learner', p: 'Code is written and run on the student\'s own shared screen. The tutor\'s part is to ask why it should work.' },
      { h3: 'Level from the trial', p: 'What we see in the free session decides the first unit, and we note an exam board where relevant.' },
      { h3: 'Nothing to pay at first', p: 'The first lesson is complete, free and card-free, with a course suggestion to finish.' },
      { h3: 'Matched groups', p: 'A class is five to ten people at one stage, joining from all over the UK.' },
      { h3: 'Twice a week', p: 'Two lessons weekly, with your holiday dates left clear.' },
      { h3: 'Steady UK slot', p: 'When the clocks go forward or back, the tutor shifts and you do not.' }
    ],
    spec: { title: 'Why it is online', p: 'Matching learners by level needs a large pool. A video class can draw on the whole of the UK, which no single hall in Tameside could.' }
  },

  fees: {
    h2: 'Ashton-under-Lyne fees',
    intro: 'The rates for Ashton-under-Lyne are our international ones, used for all learners outside India.',
    first: 'A free live lesson, full length, finishing with the course we recommend.',
    group: 'Close to eight live group lessons each month.',
    private: 'Close to eight live one-to-one lessons each month.',
    closer: 'We invoice in US dollars and do not publish sterling prices. No invoice is raised before the trial has led to an agreed course and weekly time. For holidays, missed sessions and changing format, see the pricing page.'
  },

  reviewsH2: 'Google reviews by Greater Manchester families and UK learners',

  book: {
    h2: 'Book a free lesson from Ashton-under-Lyne',
    intro: 'Tell us how old the learner is, or their school year, and one thing they enjoy. Trials have ranged from a check-digit trick and an AI-built Scratch game to a first Python script and a first look at bits.',
    success: 'Thank you. We have received the Ashton-under-Lyne request and will reply shortly.'
  },

  faq: {
    h2: 'Ashton-under-Lyne questions',
    intro: 'CRCs, the postcode project, Python, AI and how the lessons are arranged.',
    items: [
      { q: 'How many people live in Ashton-under-Lyne?', a: 'The ONS counted 48,600 in the Ashton-under-Lyne built-up area at the 2021 census, and 231,071 in Tameside.' },
      { q: 'Can I learn Python online in Ashton-under-Lyne?', a: 'Yes. We teach live on video for ages 6 to 67, so learners in Ashton-under-Lyne, Hurst, Smallshaw, Waterloo, Guide Bridge and the rest of Tameside can all join.' },
      { q: 'What is a bitwise operator in Python?', a: 'An operator that works on the individual bits of a whole number. Examples are << to shift bits left, & for and, | for or, and ^ for exclusive-or.' },
      { q: 'How is a CRC different from a cryptographic hash?', a: 'A CRC is quick and built to catch accidental damage such as a flipped bit. A cryptographic hash is slower and built so that nobody can craft different data with the same value on purpose.' },
      { q: 'What is the Ashton project?', a: 'Learners damage 1,319 real postcodes in Python, find that 15.1% of single-character slips give another valid postcode, and write a CRC that catches every one.' },
      { q: 'Is vibe coding covered?', a: 'Yes, at all ages. Students direct an AI to write code and are expected to test and explain what comes back.' },
      { q: 'When do AI agents come into it?', a: 'After a learner can program in Python without help, typically in sixth form or as an adult. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you cover GCSE and A level computer science?', a: 'Yes, and maths as well. We teach the ideas properly and do not guarantee any grade.' },
      { q: 'What do the classes cost?', a: 'The first lesson is free. Then it is USD 100 monthly for group lessons or USD 150 monthly for private ones.' },
      { q: 'Do lessons run in the holidays?', a: 'Not on dates you ask us to leave free.' }
    ]
  },

  next: {
    eyebrow: 'Across Greater Manchester',
    h2: 'Other Greater Manchester pages',
    html: 'See the projects on <a class="cg-inline-link" href="/ai-and-programming-classes-in-oldham">Oldham</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stockport">Stockport</a>, or the county page for <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>. All other areas are on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Ashton-under-Lyne and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-aul .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 3.4vw, 2.8rem); }
.cg-root.cg-aul .cg-hero h1 { font-weight: 735; letter-spacing: -0.023em; line-height: 1.06; }
.cg-root.cg-aul .cg-capsule { border-right: 3px solid var(--cg-accent); padding-right: 1rem; }
.cg-root.cg-aul .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-aul .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.017em; }
.cg-root.cg-aul .cg-table caption { text-align: left; font-size: 0.89rem; font-weight: 600; font-style: italic; }
.cg-root.cg-aul .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aul .cg-table th { font-size: 0.81rem; font-weight: 700; letter-spacing: 0.025em; }
.cg-root.cg-aul .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-aul .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Tameside (E08000008), Census 2021 TS001 usual residents 231,071. ONS 2021 BUAs wholly inside Tameside (published): Ashton-under-Lyne 48,600; Hyde 35,895; Stalybridge 26,830; Droylsden 23,915; Dukinfield 21,155. Denton and Hadfield straddle the boundary and are excluded. postcodes.io (Tameside): Ashton-under-Lyne (town); Hurst, Hurst Knoll, Waterloo, Smallshaw, Limehurst, Hazelhurst, Cockbrook, Crowhill, Guide Bridge (suburban areas); Park Bridge (village). postcodes.io outcodes: OL6 wards include Ashton Hurst, Ashton St Michael\'s, Ashton Waterloo (the district also reaches into Oldham); OL7 lies in Tameside.',
    localProject: 'OS Code-Point Open 2026.3.0. 1,319 postcodes in OL6 (898) and OL7 (421). Valid set for lookups: OL plus AL, BL, DL, GL, LL, ML, PL, SL, OX (145,933). Single-character replacements (35 alternatives per position): 276,990 tried, 41,866 (15.1%) real; last character 43.1%, second-last 29.0%. Adjacent swaps: 6,309 tried, 983 (15.6%) real (OL6 6AD / OL6 6DA). 8-bit sum of character codes: 0 replacements missed, 6,309 swaps missed. CRC-8 poly 0x07: 0 and 0. CRC-16-CCITT: 0 and 0. Pairs of distinct postcodes sharing a check, of 869,221: sum 22,503 (55 distinct sums), CRC-8 3,855 (233 values), CRC-16 0. Own CRC-32 equals zlib.crc32 on all 1,319. Test string 123456789: CRC-8 0xF4, CRC-16 0x29B1. Lesson family: cyclic redundancy check (CRC), error detection, bit operations in Python.',
    requiredMentions: [
      '231,071',
      'Smallshaw',
      'Limehurst',
      'Hazelhurst',
      'Cockbrook',
      'Guide Bridge',
      'Hurst Knoll',
      'cyclic redundancy check',
      '41,866',
      '1,319',
      'CRC-8'
    ],
    sources: [
      { claim: 'OS Code-Point Open, dataset version 2026.3.0: postcode units for the OL and neighbouring-letter areas.', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places in Tameside and the ward lists for outcodes OL6 and OL7.', url: 'https://api.postcodes.io/outcodes/OL6' },
      { claim: 'Python standard library zlib.crc32, used as the reference for our CRC-32.', url: 'https://docs.python.org/3/library/zlib.html#zlib.crc32' }
    ],
    rejectedClaims: [
      'That OL6 and OL7 cover exactly Ashton-under-Lyne: not claimed; OL6 also reaches into Oldham borough.',
      'Real misdelivery rates or Royal Mail error statistics: not read; the slips are simulated.',
      'That a CRC makes data secure: explicitly denied on the page.',
      'Ashton market, canals or history: not read from a source; not claimed.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
