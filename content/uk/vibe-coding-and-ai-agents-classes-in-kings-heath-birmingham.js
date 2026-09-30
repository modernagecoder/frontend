'use strict';
// Kings Heath, Birmingham (cg- district page, UK cluster Phase 9, row 454). Keyword slug per the owner's rotation (vibe
// coding and AI agents door). Spine: how does a program with a tiny memory find the most common items in a long stream?
// (Misra-Gries heavy hitters with k counters and its N/k undercount guarantee; the Count-Min sketch and its one-sided
// overcount; versus an exact dictionary.)
// Data (read 30 September 2026): OpenStreetMap API 0.6 over bbox -1.975,52.420,-1.870,52.480 (24 tiles, ODbL). Elements
// (tagged nodes and ways) positioned inside the ONS Brandwood & King's Heath ward boundary (Wards December 2022): 7,377.
// Their key=value tags, skipping identifying keys (name, addr:*, ref, source, website, phone and similar), form a stream
// of 20,708 tags with 1,291 distinct values, shuffled with seed 2026.
// Our run (scratchpad khh/khh.py). Exact top: building=residential 3,330; building=yes 1,028; natural=tree 893;
// leaf_type=broadleaved 782. Misra-Gries, counters / true top-10 present / largest undercount / bound N/k: 10 / 2 / 1,929 /
// 2,071; 20 / 7 / 907 / 1,035; 50 / 10 / 289 / 414; 100 / 10 / 121 / 207; 200 / 10 / 45 / 104. Count-Min sketch, 4 hash
// rows, total cells / largest overcount on any item / mean overcount: 200 / 337 / 137.1; 800 / 41 / 15.8; 4,000 / 2 / 0.5;
// top-10 by estimate correct in all three. Exact dictionary: 1,291 entries.
// Lesson family: streaming heavy hitters (Misra-Gries) and the Count-Min sketch. Screened: "Misra-Gries", "heavy hitters",
// "Count-Min" absent from content/ and src/pages; claimed in claims.txt. Bloom filter and HyperLogLog are owned elsewhere
// and are not taught here.
// Place facts: Census 2021 TS001, Brandwood & King's Heath ward 18,786 (Nomis). postcodes.io (Birmingham): King's Heath,
// Brandwood End, Yardley Wood (B14); Billesley (B13).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'KINGS HEATH', label: 'Kings Heath, Birmingham', blurb: 'Vibe coding and AI agents classes for Kings Heath, with a project that gives a program ten counters and asks it to find the commonest tags in a stream of 20,708.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-kings-heath-birmingham',
  code: 'khh',
  accent: '#9A3412',
  accentRationale: 'Kings Heath: a burnt orange-brown (7.3:1 contrast), hand-picked to differ in hue from recent pages',
  pageType: 'city',
  place: {
    name: 'Kings Heath',
    eyebrow: 'Kings Heath, Birmingham, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Birmingham', href: '/coding-classes-in-birmingham' },
    { label: 'Moseley', href: '/best-coding-and-ai-classes-in-moseley-birmingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kings Heath, Birmingham',
  title: 'Vibe Coding and AI Agents Classes in Kings Heath | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and maths classes for Kings Heath, Brandwood End and Yardley Wood in Birmingham, ages 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Kings Heath, Birmingham, with a streaming project that finds the commonest map tags using only a handful of counters.',
  twitterDescription: 'Kings Heath vibe coding, AI agents and Python classes online, ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Kings Heath, Birmingham',
    description: 'Online vibe coding, AI agents, Python and maths for children, teenagers and adults in Kings Heath and south Birmingham, taught live with the reasoning behind every tool.'
  },

  h1: 'Vibe coding and AI agents classes in Kings Heath, Birmingham',
  capsuleQ: 'Which are the best vibe coding and AI agents classes for Kings Heath learners?',
  capsule: 'Brandwood and King\'s Heath is a Birmingham ward that counted 18,786 usual residents in the 2021 census. King\'s Heath, Brandwood End and Yardley Wood are listed as suburban areas in the B14 postcode district. Modern Age Coders teaches vibe coding, AI agents, Python and maths over live video from India, to anyone aged six to 67, in private lessons or in a class of five to ten who are at the same stage. Learners are taught why a technique works before they lean on an AI to write it. You try a full lesson free, and we propose a course afterwards. In the Kings Heath project a program reads 20,708 map tags one at a time with room to remember only a few, and still has to name the commonest. From then on the fee is USD 100 monthly for a class place, USD 150 monthly for private tuition.',
  lead: 'An AI agent that watches a stream, such as log lines, messages or sensor readings, cannot keep everything it sees. Its memory is limited and the stream does not stop. Yet people ask it simple questions: what comes up most? Counting everything in a dictionary answers that exactly, as long as the dictionary fits. When it does not, there are two classic tricks. One keeps a small fixed set of counters and gives up a bounded amount of accuracy. The other squeezes all the counts into a small grid using hash functions. This project runs both on a real stream built from the open map of Kings Heath, and checks each against the exact answer.',
  wa: 'Hello Modern Age Coders, we are in Kings Heath and would like a free trial lesson in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Kings Heath course picks',
    h2: 'Vibe coding, agents and thinking courses for Kings Heath',
    intro: 'One suggestion per age group. The opening live lesson of any of them is free, with no payment details taken.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a Scratch game to an AI, then test and mend it themselves.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: tallying, estimating and knowing how wrong a shortcut can be.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects made with AI help, including the Kings Heath counters.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How generative AI and agents work in Python, with memory limits and evaluation.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Kings Heath',
      h2: 'Kings Heath, Brandwood End and Yardley Wood',
      intro: 'One census figure for the ward, and the B14 place names on record.',
      body: [
        { kind: 'table', caption: 'Brandwood and King\'s Heath ward, Birmingham, Census 2021 via Nomis', head: ['Area', 'Usual residents, 2021'], rows: [
          ['Brandwood and King\'s Heath ward', '18,786']
        ] },
        { kind: 'p', text: 'The project uses the ONS boundary of that ward. Postcodes.io records King\'s Heath, Brandwood End and Yardley Wood as suburban areas of Birmingham in B14, and Billesley in B13. Schools here work to the national curriculum for England, and we plan lessons around whatever term dates a family gives us.' },
        { kind: 'callout', h3: 'Birmingham, Moseley and the thinking behind the lessons', p: 'Read about <a class="cg-inline-link" href="/coding-classes-in-birmingham">coding classes in Birmingham</a> or the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-moseley-birmingham">Moseley page</a>. Our view on AI tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Kings Heath project',
      h2: 'Heavy hitters: finding the commonest tags with almost no memory',
      intro: 'A stream of 20,708 tags, 1,291 different values, and a budget of ten counters.',
      body: [
        { kind: 'p', text: 'The learner downloads OpenStreetMap data and keeps the 7,377 mapped elements that sit inside the ward. Each carries descriptive tags such as building=residential or natural=tree. Identifying tags, such as names, addresses and reference numbers, are thrown away, and the remaining 20,708 tags are shuffled into one long stream with 1,291 distinct values. Counted exactly, the commonest is building=residential with 3,330, then building=yes with 1,028 and natural=tree with 893.' },
        { kind: 'p', text: 'The Misra-Gries algorithm reads the stream once with a fixed number of counters. A tag that already has a counter adds one. A new tag takes a free counter if there is one. If there is none, every counter drops by one and the new tag is forgotten. At the end, the surviving tags are the candidates for "heavy hitters", and each count is too low by at most the stream length divided by the number of counters.' },
        { kind: 'table', caption: 'Misra-Gries on 20,708 Kings Heath map tags, our Python run on OpenStreetMap data', head: ['Counters', 'True top ten found', 'Largest undercount', 'Guaranteed limit'], rows: [
          ['10', '2 of 10', '1,929', '2,071'],
          ['20', '7 of 10', '907', '1,035'],
          ['50', '10 of 10', '289', '414'],
          ['100', '10 of 10', '121', '207'],
          ['200', '10 of 10', '45', '104']
        ] },
        { kind: 'p', text: 'With ten counters the algorithm kept only two of the true top ten, which is exactly what the guarantee allows: only a tag that appears more than 2,071 times is certain to survive, and just one does. With fifty counters, under 4% of the 1,291 an exact dictionary needs, all ten were there, and no count was off by more than 289. The errors always ran one way, too low, and always stayed inside the promised limit.' },
        { kind: 'p', text: 'The Count-Min sketch makes the opposite mistake. It spreads counts across a small grid using four hash functions and answers a query with the smallest of four cells, so collisions can only push an estimate up. With 200 cells the worst overcount on any tag was 337; with 800 cells it was 41; with 4,000 it was 2. All three sizes still ranked the top ten correctly. One method undercounts, the other overcounts, and knowing which way the error leans is what makes either usable.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Tally coloured counters from a bag using only three tally boxes, and see which colours survive.' },
          { h3: 'Ages 11 to 15', p: 'Code Misra-Gries in Python and compare its answers with an exact count of the Kings Heath tags.' },
          { h3: 'Ages 15 and up', p: 'Add a Count-Min sketch, measure both errors and give an agent a memory budget.' }
        ] },
        { kind: 'callout', h3: 'Open map data, our counting', p: 'Tags come from OpenStreetMap and its contributors under the Open Database Licence, and the ward outline from the ONS Open Geography Portal. The stream, the algorithms and the measurements are ours. Tag counts describe what volunteers have mapped, not a survey of Kings Heath.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents and memory',
      h2: 'What the counters teach about AI agents and vibe coding',
      intro: 'An agent\'s memory is a budget, and every budget comes with an error you should be able to state.',
      body: [
        { kind: 'table', caption: 'The Kings Heath stream beside the agent a learner will later build', head: ['In the tag stream', 'In an agent'], rows: [
          ['Ten counters kept 2 of the top ten', 'Too little memory quietly loses things'],
          ['Fifty counters kept all ten', 'A modest, well-chosen budget is often enough'],
          ['Misra-Gries only undercounts', 'Know which way your summary is wrong'],
          ['Count-Min only overcounts', 'Different shortcuts fail in different directions'],
          ['The limit was known in advance', 'Prefer tools that state their error up front']
        ] },
        { kind: 'p', text: 'Vibe coding is building software by telling an AI what you want in plain language and steering what it writes. Asked to "track the most common events", an assistant will nearly always reach for an exact dictionary, which is right until the stream outgrows the machine. A Kings Heath learner knows there are alternatives, can ask for one by name, and can test that the error stays inside its bound. AI agents meet this constantly: a context window is a fixed budget, and what an agent summarises or drops decides what it can later answer. Our agents courses start once Python is secure, typically from Year 12 onwards or for adults, and anything involving Copilot Studio is taught one-to-one only. The syllabus is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for students in the UK</a>; the principle is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no link with OpenStreetMap, the ONS, Nomis or postcodes.io. We used their open data, and every count on this page came from our own program.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From tally boxes to agents with a memory budget',
    intro: 'The year groups are a rough guide; the trial lesson places each learner properly.',
    cols: [
      { band: 'Years 2 to 7', h3: 'Thinking first', p: 'Tallies, estimates and asking how far off a shortcut might be.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for children', p: 'Games and small tools built with an AI and tested by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and agents', p: 'Dictionaries, hashing and streams next to GCSE and A level work.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Agents in practice', p: 'State, memory limits, evaluation and streaming data.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents',
    h2: 'What is a heavy hitters algorithm, and why would an AI agent need one?',
    intro: 'A heavy hitters algorithm finds the most frequent items in a stream using far less memory than counting everything, and an AI agent needs one whenever the data it watches is larger than the memory it is allowed.',
    p1: 'On 20,708 map tags from Kings Heath, the Misra-Gries method with 50 counters found all ten of the commonest values with no count more than 289 too low, against 1,291 entries for an exact count.',
    p2: 'A learner who has built that asks any AI-written summary the same two things: what was dropped, and how wrong can the rest be?',
    closer: 'Teenagers in Kings Heath who can answer those questions are directing the AI, not following it, and that comes from writing the counters by hand first.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons',
    h2: 'How Kings Heath lessons are taught',
    intro: 'Any laptop or desktop with a webcam and a connection good enough for video will do.',
    cells: [
      { h3: 'The learner does the building', p: 'Code and prompts come from the student. The tutor, watching the shared screen, asks what would break it.' },
      { h3: 'Starting point found early', p: 'In the free lesson we gauge the level and note any exam specification.' },
      { h3: 'No charge to try', p: 'The trial is a full lesson and closes with a course recommendation.' },
      { h3: 'Same-stage classes', p: 'Between five and ten learners from across the UK, grouped by level.' },
      { h3: 'Two sessions a week', p: 'School holidays are kept clear.' },
      { h3: 'A slot that stays put', p: 'Our tutors absorb the UK clock changes.' }
    ],
    spec: { title: 'Why it is online', p: 'Matching learners by stage needs a wide pool, and a video class draws on the whole country instead of one postcode.' }
  },

  fees: {
    h2: 'Fees for Kings Heath',
    intro: 'Kings Heath sits on our international fee scale, the one used for every learner outside India.',
    first: 'One complete lesson at no cost, with a course proposed at the end.',
    group: 'Roughly eight live class lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'All fees are quoted in US dollars, with no sterling figure published. Payment starts once the trial has fixed a course and a regular time; see the pricing page for how holidays, absences and a change from class to private tuition are handled.'
  },

  reviewsH2: 'Google reviews from Birmingham and the rest of the UK',

  book: {
    h2: 'Book a free Kings Heath lesson',
    intro: 'Give us an age or school year and something the learner enjoys. The trial might be a tally game with too few boxes, a Scratch project steered through an AI, a first Python loop, or counting real map tags.',
    success: 'Thanks. We have your Kings Heath request.'
  },

  faq: {
    h2: 'Kings Heath questions',
    intro: 'Counters, sketches, agents, vibe coding and the practical side.',
    items: [
      { q: 'What is the population of Kings Heath, Birmingham?', a: 'The ward of Brandwood and King\'s Heath had 18,786 usual residents at the 2021 census.' },
      { q: 'Can I take vibe coding and AI agents classes in Kings Heath?', a: 'Yes. Lessons are live and online for ages 6 to 67, so Kings Heath, Brandwood End, Yardley Wood and all of Birmingham can join.' },
      { q: 'What is the Misra-Gries algorithm?', a: 'A one-pass method that finds frequent items in a stream with a fixed number of counters. Each count can be too low by at most the stream length divided by the number of counters.' },
      { q: 'What is a Count-Min sketch?', a: 'A small grid of counters filled using several hash functions. It estimates how often an item has appeared and can overcount but never undercount.' },
      { q: 'What is the Kings Heath project?', a: 'Learners turn open map data for the ward into a stream of 20,708 tags and find the commonest with Misra-Gries and a Count-Min sketch, checking both against an exact count.' },
      { q: 'What is vibe coding?', a: 'Describing software to an AI in plain language, then reading, testing and correcting what it produces. We teach it at every age.' },
      { q: 'At what stage are AI agents taught?', a: 'After Python is secure, so usually Year 12 upwards or adults. Copilot Studio agents are only taught one-to-one.' },
      { q: 'Is GCSE or A level computer science covered?', a: 'Yes, along with maths. We teach for understanding and make no promise about grades.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the first lesson. A class place is USD 100 a month and private tuition is USD 150 a month.' },
      { q: 'What happens in school holidays?', a: 'Tell us the dates and lessons pause.' }
    ]
  },

  next: {
    eyebrow: 'Birmingham',
    h2: 'Other Birmingham districts',
    html: 'Each district page has a project of its own: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-moseley-birmingham">Moseley</a> (how many clusters?), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-sutton-coldfield-birmingham">Sutton Coldfield</a> (a polite agent), <a class="cg-inline-link" href="/ai-and-programming-classes-in-harborne-birmingham">Harborne</a>, and the city-wide <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham page</a>. Everything else is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Kings Heath and Birmingham',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-khh .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3.6vw, 3rem); }
.cg-root.cg-khh .cg-hero h1 { font-weight: 730; letter-spacing: -0.03em; line-height: 1.07; }
.cg-root.cg-khh .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-khh .cg-eyebrow { letter-spacing: 0.12em; font-weight: 800; text-transform: uppercase; }
.cg-root.cg-khh .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.016em; }
.cg-root.cg-khh .cg-table caption { font-weight: 700; text-align: left; font-size: 0.91rem; }
.cg-root.cg-khh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-khh .cg-table th { letter-spacing: 0.035em; font-weight: 800; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-khh .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-khh .cg-callout { border-left-width: 4px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Birmingham (E08000025). Census 2021 TS001, Brandwood & King\'s Heath ward 18,786 (Nomis). ONS Wards (December 2022) boundary. postcodes.io (Birmingham): King\'s Heath, Brandwood End, Yardley Wood (B14); Billesley (B13).',
    localProject: 'OSM tagged elements inside the ward: 7,377; stream of 20,708 non-identifying tags, 1,291 distinct (seed 2026). Exact top: building=residential 3,330, building=yes 1,028, natural=tree 893. Misra-Gries k / top-10 found / max undercount / N/k: 10/2/1,929/2,071; 20/7/907/1,035; 50/10/289/414; 100/10/121/207; 200/10/45/104. Count-Min (4 rows) cells / max overcount: 200/337; 800/41; 4,000/2; top-10 correct in all. Lesson family: streaming heavy hitters, Misra-Gries, Count-Min sketch.',
    requiredMentions: [
      '18,786',
      '20,708',
      '1,291',
      '7,377',
      'Brandwood End',
      'Yardley Wood',
      'Misra-Gries',
      'Count-Min sketch',
      'Heavy hitters'
    ],
    sources: [
      { claim: 'OpenStreetMap tags for Kings Heath, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 by ward via Nomis; ONS Wards (December 2022) boundaries, Open Geography Portal.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Birmingham (B14, B13).', url: 'https://api.postcodes.io/places?q=Brandwood%20End' }
    ],
    rejectedClaims: [
      'High street, park or venue claims about Kings Heath: not read from a source; not claimed.',
      'That tag counts measure real numbers of houses or trees: they are what is mapped on OpenStreetMap.',
      'That 18,786 is the population of Kings Heath alone: it is the Brandwood and King\'s Heath ward figure.',
      'Bloom filters and HyperLogLog: owned by other pages; not taught here.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
