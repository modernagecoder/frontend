'use strict';
// Eccles (cg- town page, UK cluster Phase 10, towns band B, row 553). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how many triangles does a street network
// contain, how do you count them without checking every triple, and what does the answer say about the network?
// (Triangle counting and the clustering coefficient.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query (timestamp 2026-09-30T20:45Z), highways motorway to
// living_street and their link roads in 53.470 to 53.499 N, 2.386 to 2.324 W: 1,401 ways. Junction graph kept inside the
// rectangle round the Eccles BUA output-area centres (53.4730 to 53.4967 N, 2.3825 to 2.3271 W): 1,543 junctions and road
// ends, 1,781 links, mean degree 2.31; degree 1: 439, 2: 261, 3: 773, 4: 68, 5: 2.
// Our run (scratchpad ecc/tri.py, rew.py): 611,085,091 possible triples; brute force timed on 5,000,000 in 0.94 s, about
// 115 s for all (estimate). Neighbour-set intersection: 43 triangles, 4,119 set lookups, 0.002 s. Matrix trace(A^3)/6:
// 43, 0.13 s. Connected triples 3,008; transitivity 0.0429; mean local clustering 0.0264; 123 junctions in a triangle.
// Triangles by what closes them: 18 ordinary streets, 14 roundabout ways, 11 link roads. Degree-preserving random
// rewiring, 20 runs: mean 0.70 triangles (0 to 4); configuration-model expectation 0.80.
// Lesson family: triangle counting and clustering coefficient. Screened: "clustering coefficient", "triangle count"
// 0 hits; claimed in claims.txt. Salford = PCA; Greater Manchester = reformulating a search.
// Place facts: Salford TS001 269,923 (a required mention on the Salford page; printed only). ONS 2021 BUA (published):
// Eccles (Salford) 41,125. postcodes.io suburban areas whose nearest postcode is in the Eccles BUA, all M30: Patricroft,
// Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park, Barton upon Irwell.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ECCLES', label: 'Eccles', blurb: 'Coding and AI classes for Eccles, with a project that counts the triangles in the town\'s street network three ways and asks why there are any at all.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-eccles',
  code: 'ecc',
  accent: '#0F633C',
  accentRationale: 'Eccles: a canal green (7.32:1 contrast on white), chosen by hand as a muted tone kept clear of the other Greater Manchester pages',
  pageType: 'city',
  place: {
    name: 'Eccles',
    eyebrow: 'Eccles, Salford, Greater Manchester',
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
  routeLabel: 'Eccles, Salford',
  title: 'Coding and AI Classes in Eccles, Salford | Ages 6 to 67',
  description: 'Live online coding and AI classes for Eccles, Patricroft, Monton, Winton and Peel Green: Python, vibe coding and AI agents for ages 6 to 67. First lesson free.',
  ogDescription: 'Coding and AI lessons for Eccles, with a project that counts triangles in the street network and compares them with chance.',
  twitterDescription: 'Eccles coding, Python and AI classes, live online for ages 6 to 67. Try the first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Eccles',
    description: 'Coding, Python, AI and maths lessons taught live online to children, teenagers and adults in Eccles and Salford, including a graph project on the local street network.'
  },

  h1: 'Coding and AI classes in Eccles',
  capsuleQ: 'Which coding and AI classes are best for Eccles?',
  capsule: 'In March 2021 the census found 41,125 usual residents in the Eccles built-up area and 269,923 in the City of Salford around it. Suburbs listed in the gazetteer include Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park and Barton upon Irwell. Anyone in Eccles aged six to 67 can learn coding, AI, Python, vibe coding or maths with Modern Age Coders; our tutors, who are based in India, teach live over video, either one person at a time or five to ten people who are at the same point. The Eccles project treats the street map as a network and asks a question from network science: how often do three junctions all connect to each other? Learners count the triangles three ways, from hopelessly slow to instant, and then find out what creates them. A first lesson is free; a group costs USD 100 a month and one-to-one tuition USD 150 a month.',
  lead: 'In a group of friends, two of your friends are often friends with each other; that closes a triangle. Network scientists measure how common triangles are with a number called the clustering coefficient, and it has become a standard measure for networks of every kind, from friendships to power grids. A street network is a different creature. Eccles learners turn their town\'s roads into a graph of 1,543 junctions and road ends and discover that triangles are rare, but not nearly as rare as chance would make them, and that the ones that exist have a surprising source.',
  wa: 'Hello Modern Age Coders, we are in Eccles and would like to book a free coding or AI lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Coding and AI courses for Eccles',
    intro: 'Choose by age. Every course opens with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: counting shapes in a drawing without missing or double-counting any.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: a Scratch game built with AI help and checked by its designer.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers, with graphs, sets and the Eccles triangle project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Graphs and algorithm design in depth, the ground under machine learning on networks.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About Eccles',
      h2: 'Eccles, Patricroft, Monton and Winton',
      intro: 'Census counts and suburb names, each traced to its source.',
      body: [
        { kind: 'table', caption: 'People counted at the 2021 census (ONS)', head: ['Boundary', 'Usual residents'], rows: [
          ['Eccles built-up area', '41,125'],
          ['City of Salford', '269,923']
        ] },
        { kind: 'p', text: 'The city total is on a far wider boundary, taking in Salford itself, Swinton, Walkden, Irlam and more. The postcode gazetteer lists Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park and Barton upon Irwell as suburban areas under M30, and in each case the closest postcode lies in the Eccles built-up area. Salford schools work to the English national curriculum. A year group between Year 2 and Year 13 is all we need to plan the trial, and learners taking GCSE or A level computer science get support that runs beside their school course.' },
        { kind: 'callout', h3: 'Greater Manchester pages', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-salford">Salford page</a> covers the wider city and the <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester page</a> the county. For what AI tools cannot do for a learner, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Eccles project',
      h2: 'Counting triangles in the Eccles street network',
      intro: 'A graph of 1,543 points, three counting methods from two minutes to two milliseconds, and a comparison with chance.',
      body: [
        { kind: 'p', text: 'One query to OpenStreetMap returned 1,401 mapped roads, from the motorway to residential streets, around Eccles. The learner turns them into a graph: every junction or road end is a point, and every stretch of road between two of them is a link. Kept inside a rectangle around the town, that gives 1,543 points and 1,781 links. Most points, 773 of them, have three links, the mark of a T-junction; 439 have only one, which are dead ends or roads leaving the rectangle; 68 have four and just 2 have five.' },
        { kind: 'p', text: 'A triangle is three points that are all linked to one another. The first method checks every possible trio, and there are 611,085,091 of them. Timed on five million trios, that approach would take about two minutes in Python for the full count. The second method walks each link and asks which points are neighbours of both ends, using Python sets: 4,119 lookups and 0.002 seconds. The third writes the network as a table of zeros and ones, multiplies it by itself three times with NumPy and reads off the triangles from the diagonal. All three give the same answer: 43 triangles.' },
        { kind: 'table', caption: 'Eccles street network, our Python run', head: ['Measure', 'Value'], rows: [
          ['Triangles', '43'],
          ['Junctions in at least one triangle', '123 of 1,543'],
          ['Connected trios (two links sharing a point)', '3,008'],
          ['Clustering coefficient (share of trios that close)', '0.0429'],
          ['Triangles in the same network rewired at random, 20 runs', '0.70 on average, never more than 4']
        ] },
        { kind: 'p', text: 'Is 43 a lot? To find out, the learner shuffles the network: repeatedly take two links and swap their ends, so that every junction keeps exactly its number of roads but the connections become random. Across 20 shuffles the random networks had 0.70 triangles on average, never more than 4, which matches the textbook formula for this degree pattern. So Eccles has around sixty times as many triangles as chance would give it. Looking at which roads close each triangle explains why: 14 involve a roundabout, 11 a slip road or other link road, and 18 ordinary streets. Many of the triangles are made by the way junctions are built and mapped, not by the street plan itself.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw six dots and some lines, then count the triangles two ways and see which way misses fewer.' },
          { h3: 'Ages 11 to 15', p: 'Store a small network as Python sets and find triangles by checking shared neighbours.' },
          { h3: 'Ages 15 and up', p: 'Build the Eccles graph, count triangles three ways, time each, and compare with shuffled networks.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Roads are from OpenStreetMap under the Open Database Licence, as mapped on 30 September 2026. The rectangle is our approximation of the town, not its boundary, and roads that leave it become dead ends. The clustering coefficient follows Watts and Strogatz (1998). Timings are from one laptop.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'The AI connection',
      h2: 'What triangles in a network teach about AI',
      intro: 'Machine learning on networks starts from exactly these counts.',
      body: [
        { kind: 'table', caption: 'What the Eccles count carries into AI work', head: ['In the Eccles network', 'In AI and data science'], rows: [
          ['Three methods, one answer, very different speed', 'The algorithm matters more than the computer'],
          ['43 triangles against 0.70 by chance', 'Compare a number with a random baseline before calling it big'],
          ['Roundabouts and slip roads made 25 of 43', 'Check how data was recorded before explaining a pattern'],
          ['Only 123 of 1,543 junctions touch a triangle', 'An average can hide that most of the network is different'],
          ['The brute-force count would take minutes', 'Estimate a cost on a sample before running it in full']
        ] },
        { kind: 'p', text: 'Triangle counts are a common ingredient when machine learning is applied to networks of people or purchases, and whether graph neural networks, a kind of AI model built for networks, can count triangles at all is a question researchers study. A learner who has counted triangles by hand knows what those systems are measuring, and knows that a mapping habit can create a pattern. Eccles learners also practise vibe coding, where an AI drafts a program from a description and the learner tests it: ask an assistant to count triangles and it may give the slow method, and the learner can time it against the fast one. Once a learner\'s Python no longer needs propping up, usually somewhere in the late teens or beyond, agent building begins; Copilot Studio is reserved for private lessons. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The map data belongs to OpenStreetMap\'s volunteer mappers and the place data to the ONS and postcodes.io, and none of them works with Modern Age Coders; the network, the counts and the conclusions are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From dots and lines to network science in Python',
    intro: 'We start from the school year and confirm the level in the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Counting carefully, spotting shapes and checking answers another way.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and first Python, with AI suggestions the child tests.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and graphs', p: 'Sets, dictionaries, matrices and graph algorithms on real maps.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Data structures in depth, then AI agents built on them.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Networks and AI',
    h2: 'What is the clustering coefficient, and why does it matter for AI?',
    intro: 'The clustering coefficient is the share of connected trios in a network that close into triangles, and it matters for AI because models that recommend, flag unusual activity or learn from networks can use such counts to tell a tightly knit group from a loose chain.',
    p1: 'The Eccles street network scored 0.0429, with 43 triangles among 1,543 junctions, against 0.70 triangles on average when the same roads were rewired at random.',
    p2: 'Having counted them, learners ask of any network statistic an AI reports: compared with what baseline, and created by what kind of recording?',
    closer: 'An Eccles teenager who can tell a real pattern from a mapping habit will question what an AI finds in data, and coding is where that judgement is built.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'How Eccles learners are taught',
    intro: 'Learners sit at home at a laptop or desktop with a webcam. The connection needs to be steady more than fast.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The tutor asks and prompts; the learner types, runs and repairs the code.' },
      { h3: 'Course chosen after the trial', p: 'We only suggest a course once the free lesson has shown the learner\'s level.' },
      { h3: 'Trial at no charge', p: 'A complete lesson for free; we do not take card details to book it.' },
      { h3: 'Groups by level', p: 'Five to ten learners at the same stage, gathered from across the UK.' },
      { h3: 'Two per week in term', p: 'Tell us your Salford school holidays and we will pause for them.' },
      { h3: 'One UK time', p: 'When the clocks go forward or back, the tutor adapts and your slot stays.' }
    ],
    spec: { title: 'Why live and online', p: 'A tutor on a live call spots a misunderstanding as it forms. With learners from all over the UK, we can group people by level far more exactly than one town allows.' }
  },

  fees: {
    h2: 'Fees in Eccles',
    intro: 'Eccles learners pay our standard international fees.',
    first: 'A full first lesson free, with a course recommendation at the end.',
    group: 'Group lessons, about eight a month.',
    private: 'Private lessons, about eight a month.',
    closer: 'Fees are in US dollars; no sterling prices are quoted. There is no charge for the trial, and billing begins after you choose a course and a weekly time. Our pricing page sets out how holidays, missed lessons and format changes are handled.'
  },

  reviewsH2: 'Reviews on Google from Greater Manchester families and learners nationwide',

  book: {
    h2: 'Try a free lesson in Eccles',
    intro: 'Share an age or year group and one of the learner\'s interests. The trial could be a count-the-triangles puzzle, a Scratch game built with AI, a first Python program, or a small network drawn in code.',
    success: 'Thank you. Your Eccles request has reached us.'
  },

  faq: {
    h2: 'Eccles: frequently asked',
    intro: 'The triangle project, AI, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Eccles?', a: 'The ONS counted 41,125 usual residents in the Eccles built-up area at the 2021 census. The City of Salford counted 269,923.' },
      { q: 'Can Eccles learners join?', a: 'They can, from age 6 to 67, whether they live in Patricroft, Monton, Winton, Peel Green, Ellesmere Park or anywhere else in town; every lesson is online and live.' },
      { q: 'What is a triangle in a network?', a: 'Three points that are each linked to the other two. In a street network that means three junctions joined directly to one another in a loop.' },
      { q: 'What did the Eccles project find?', a: 'The street network had 43 triangles among 1,543 junctions and road ends, a clustering coefficient of 0.0429. Randomly rewired versions with the same number of roads at each junction had 0.70 on average.' },
      { q: 'Why does the street network have any triangles?', a: 'Mostly from the way junctions are built and mapped: 14 of the 43 involve a roundabout and 11 a slip road or other link road. The other 18 are ordinary streets.' },
      { q: 'What is vibe coding?', a: 'Describing a program to an AI, getting a draft, then running, testing and correcting it yourself. We teach it with the coding knowledge needed to judge the draft.' },
      { q: 'When do learners start building AI agents?', a: 'Not until they can write Python without help, which for most means the older teenage years or adulthood. Copilot Studio work is private lessons only.' },
      { q: 'Does this help with GCSE and A level computer science?', a: 'Yes. Graphs, algorithms and programming feature in both. We do not promise grades.' },
      { q: 'What are the fees?', a: 'No charge for the first lesson; from then on it is USD 100 per month with a class or USD 150 per month on your own.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes, if you want. Tell us the weeks and we skip them.' }
    ]
  },

  next: {
    eyebrow: 'Greater Manchester',
    h2: 'More Greater Manchester pages',
    html: 'Neighbouring pages include <a class="cg-inline-link" href="/best-coding-class-in-salford">Salford</a>, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bury">Bury</a>, and none of them repeats this project. The <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> have the rest.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Eccles and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ecc .cg-hero-grid { align-items: start; gap: clamp(1.3rem, 3.3vw, 2.75rem); }
.cg-root.cg-ecc .cg-hero h1 { font-weight: 680; letter-spacing: -0.025em; line-height: 1.08; }
.cg-root.cg-ecc .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent); padding: 0.3rem 1rem; }
.cg-root.cg-ecc .cg-eyebrow { letter-spacing: 0.18em; font-weight: 620; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-ecc .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.019em; }
.cg-root.cg-ecc .cg-table caption { font-weight: 600; text-align: left; font-size: 0.92rem; }
.cg-root.cg-ecc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ecc .cg-table th { font-weight: 700; border-bottom: 3px solid var(--cg-accent); }
.cg-root.cg-ecc .cg-ladder-col { border-radius: 6px; border-top: 2px solid var(--cg-accent); border-left: 2px solid var(--cg-accent); }
.cg-root.cg-ecc .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Salford (E08000006), Census 2021 TS001 usual residents 269,923 (printed; a required mention on the Salford page). ONS 2021 BUA (published): Eccles (Salford) 41,125. English national curriculum, GCSE and A level. postcodes.io suburban areas whose nearest postcode is in the Eccles BUA (M30): Patricroft, Monton, Winton, Peel Green, Ellesmere Park, Alder Forest, Westwood Park, Barton upon Irwell.',
    localProject: 'OpenStreetMap, one Overpass query (2026-09-30T20:45Z): 1,401 ways, motorway to living_street plus link roads. Junction graph inside the rectangle round the Eccles BUA OA centres: 1,543 points, 1,781 links, mean degree 2.31 (degree 1: 439, 3: 773, 4: 68, 5: 2). 611,085,091 triples; brute force about 115 s (timed on 5,000,000); set intersection 43 triangles, 4,119 lookups, 0.002 s; matrix trace 43, 0.13 s. Connected triples 3,008; transitivity 0.0429; mean local clustering 0.0264; 123 junctions in a triangle. Closing roads: roundabout 14, link road 11, ordinary 18. Degree-preserving rewiring, 20 runs: mean 0.70 triangles (0 to 4); configuration-model expectation 0.80. Lesson family: triangle counting, clustering coefficient, random baseline.',
    requiredMentions: [
      '41,125',
      'Patricroft',
      'Monton',
      'Peel Green',
      'Ellesmere Park',
      'Barton upon Irwell',
      'clustering coefficient',
      '611,085,091',
      '0.0429',
      '1,543 junctions'
    ],
    sources: [
      { claim: 'Watts D. J. and Strogatz S. H. (1998), Collective dynamics of small-world networks, Nature 393, 440 to 442.', url: 'https://doi.org/10.1038/30918' },
      { claim: 'OpenStreetMap roads around Eccles via the Overpass API, 30 September 2026 (Open Database Licence).', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and OA21 to BUA22 lookup and centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for M30 suburban areas.', url: 'https://api.postcodes.io/places?q=Patricroft' }
    ],
    rejectedClaims: [
      'That the rectangle is the Eccles boundary: stated as an approximation round the output-area centres.',
      'Social-network clustering values: no figure quoted; only the general contrast, with Watts and Strogatz as the source of the measure.',
      'That graph neural networks always fail on triangles: stated only that they are often tested on detecting them.',
      'History of the Eccles road network or its roundabouts: not used.',
      'Suburb names with nearest postcode outside the BUA: none of the eight tested fell outside.',
      'Sterling prices: none.'
    ]
  }
};
