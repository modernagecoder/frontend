'use strict';
// Bloxwich (cg- town page, UK cluster Phase 10, towns band B, row 504). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why does the next junction along the road
// usually have more roads than the one you are standing at? (The friendship paradox, measured on a street network.)
// Data (read 30 September 2026): one Overpass query, highway ways of classes motorway to residential and living_street
// (service roads, tracks and paths excluded) in the rectangle around the ONS centroids of the Bloxwich built-up area
// (52.5973 to 52.6320 N, 2.0263 to 1.9716 W): 1,308 ways. Ways are returned whole, so points inside the box have
// complete road counts. Our run (scratchpad blx/fp2.py): shape points with exactly two roads merged away, leaving ends
// and junctions; 1,738 lie inside the box; 1,676 of those have every neighbour inside the box too and are the sample.
// Of the 1,676: 527 ends (31.4%), 1,087 three-way, 62 four-way; mean roads per point 2.41; mean over points of the
// average road count of their neighbours 2.85; 671 (40.0%) below their neighbours' average, 626 (37.4%) equal, 379
// (22.6%) above. Random point is an end 31.4% of the time; one step along a random road from a random point lands on an
// end 10.3% of the time (exact expectation 10.27%).
// Lesson family: friendship paradox, sampling by following links. Screened: "friendship paradox", "friends have more"
// 0 hits in content/; claimed in claims.txt. Walsall page = word embeddings; West Midlands county = linear programming;
// Wellingborough (k-core) and Banbury (spectral partition) use street graphs for different lessons.
// Place facts: Walsall TS001 284,124. ONS 2021 BUA (published): Bloxwich 51,875. postcodes.io suburban areas whose
// closest postcode is in the Bloxwich BUA: Leamore (WS2), Blakenall Heath, Little Bloxwich, Wallington Heath, Harden,
// Coal Pool (WS3).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BLOXWICH', label: 'Bloxwich', blurb: 'AI and programming classes for Bloxwich, with a street-network project that measures the friendship paradox at 1,676 junctions and road ends.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-bloxwich',
  code: 'blx',
  accent: '#47220E',
  accentRationale: 'Bloxwich: a very dark leather brown (14.0:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Bloxwich',
    eyebrow: 'Bloxwich, Walsall, West Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'West Midlands', href: '/coding-classes-in-the-west-midlands' },
    { label: 'Walsall', href: '/best-coding-and-ai-classes-in-walsall' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bloxwich, West Midlands',
  title: 'AI and Programming Classes in Bloxwich | Python, Ages 6 to 67',
  description: 'Live online AI and programming classes for Bloxwich, Leamore, Blakenall Heath and Little Bloxwich: Python, vibe coding and agents, ages 6 to 67. Free first lesson.',
  ogDescription: 'AI and programming classes for Bloxwich, with a street-network project on the friendship paradox and biased sampling.',
  twitterDescription: 'Bloxwich AI, Python and programming lessons, live online, ages 6 to 67. The first one is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Bloxwich',
    description: 'AI, Python, programming and maths lessons given live online to children, teenagers and adults in Bloxwich and the borough of Walsall, built around how data is gathered and what that does to conclusions.'
  },

  h1: 'AI and programming classes in Bloxwich',
  capsuleQ: 'Where can Bloxwich learners find the best AI and programming classes?',
  capsule: 'At the 2021 census the ONS recorded 51,875 usual residents in the Bloxwich built-up area and 284,124 across the borough of Walsall. The gazetteer suburbs of Leamore, Blakenall Heath, Little Bloxwich, Wallington Heath, Harden and Coal Pool all sit within that built-up area. Modern Age Coders teaches AI, programming, Python, vibe coding and maths to Bloxwich learners from age six to 67. Lessons are live on video with a tutor in India, in private or in a small class of five to ten at the same stage. We want learners to ask how a dataset was collected before they trust what it says. The Bloxwich project maps the town\'s roads as a network and shows that a point reached by following a road has, on average, more roads than a point picked at random. One lesson is free to begin with. Continuing costs USD 100 a month for a group place or USD 150 a month for a private tutor.',
  lead: 'In 1991 the sociologist Scott Feld published a paper with a title nobody forgets: why your friends have more friends than you do. It is true for most people, and it is not an insult. Popular people appear on many friends lists, so when you look along a friendship you are more likely to arrive at one of them. The same arithmetic applies to anything joined by links, including junctions joined by roads. It matters for AI because a great deal of training data is gathered by following links, and whatever is reached that way is not a fair sample of what exists.',
  wa: 'Hello Modern Age Coders, I am in Bloxwich and interested in a free AI or programming trial lesson.',

  picks: {
    eyebrow: 'Choose a start',
    h2: 'AI and programming courses chosen for Bloxwich',
    intro: 'Four ways in, by age. A live first lesson comes free with each and no card is needed to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: networks, counting and fair sampling explored with string, pins and paper.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for younger learners, making Scratch games with an AI and testing them properly.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, with the Bloxwich road network as a lesson in biased data.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from scratch through graphs, data and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Place and numbers',
      h2: 'Bloxwich, Leamore, Blakenall Heath and Little Bloxwich',
      intro: 'What the census counted and which suburb names the gazetteer places in the town.',
      body: [
        { kind: 'table', caption: 'Usual residents, Census 2021 (ONS)', head: ['Area', 'People'], rows: [
          ['Bloxwich built-up area', '51,875'],
          ['Walsall borough', '284,124']
        ] },
        { kind: 'p', text: 'The first row is the built-up area the ONS names Bloxwich; the second is the whole borough, which also contains Walsall itself, Willenhall, Brownhills and Aldridge. They are two different boundaries and should not be added. postcodes.io holds Blakenall Heath, Little Bloxwich, Wallington Heath, Harden and Coal Pool as suburban areas in the WS3 postcode district and Leamore in WS2, and the postcode closest to each of those points is in the Bloxwich built-up area. Bloxwich pupils follow the English national curriculum, so a year group between Year 2 and Year 13 tells us where to pitch a first lesson, and we can support GCSE and A level computer science.' },
        { kind: 'callout', h3: 'Pages close to this one', p: 'Read <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a>, <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> or the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands county page</a>. The thinking behind our teaching is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bloxwich project',
      h2: 'The friendship paradox, measured on Bloxwich roads',
      intro: 'Junctions stand in for people and roads for friendships. The counting is the same.',
      body: [
        { kind: 'p', text: 'The learner downloads from OpenStreetMap every public road, from residential streets up to main roads, in a rectangle around the census centres of the Bloxwich built-up area: 1,308 mapped stretches. Service roads, tracks and footpaths are left out. Points where a road merely bends are removed, which leaves two kinds of point, road ends and junctions. Each point gets a number: how many roads meet there. To keep the count fair, the sample is the 1,676 points inside the rectangle whose neighbouring points are inside it as well, so nothing is cut off at the edge.' },
        { kind: 'table', caption: 'The 1,676 sampled points on the Bloxwich road network, our Python run', head: ['Kind of point', 'How many', 'Share'], rows: [
          ['Road end (one road)', '527', '31.4%'],
          ['Three-way junction', '1,087', '64.9%'],
          ['Four-way junction', '62', '3.7%']
        ] },
        { kind: 'p', text: 'Average over all the points and you get 2.41 roads each. Now ask each point a different question: what is the average for the points one road away from you? Average those answers and the figure is 2.85. The neighbours are, on the whole, better connected. Counting point by point, 671 of them (40.0%) have fewer roads than their neighbours\' average, 626 (37.4%) have exactly the same, and only 379 (22.6%) have more.' },
        { kind: 'p', text: 'The reason is easiest to see with road ends. Pick a point at random and it is a road end 31.4% of the time. Pick a point at random, then travel along one of its roads chosen at random, and you arrive at a road end only 10.3% of the time. A road end has just one road leading to it, so it is hard to reach by travelling; a junction has three or four, so it is easy. Anything that explores by following links will meet the well-connected places far more often than their numbers deserve.' },
        { kind: 'p', text: 'Some cautions. OpenStreetMap is drawn by volunteers and a "road end" here means the end of the mapped public road, which may continue as a drive or a path. The rectangle is a box around the town and not its boundary. Eight loop roads that return to their own junction were left in.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a small street map, count the roads at every dot, then compare each dot with its neighbours.' },
          { h3: 'Ages 11 to 15', p: 'Store a network as a Python dictionary and compute both averages for a made-up estate.' },
          { h3: 'Ages 15 and up', p: 'Build the graph from the OpenStreetMap download, run the two sampling methods 10,000 times and compare.' }
        ] },
        { kind: 'callout', h3: 'Credit and responsibility', p: 'Road data is from OpenStreetMap contributors under the Open Database Licence, fetched in a single Overpass query. The idea is from Feld (1991). The choice of road classes, the sample and all the figures are ours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Data and AI',
      h2: 'What a road network teaches about AI training data',
      intro: 'A model learns from what was collected, and collection has a shape.',
      body: [
        { kind: 'table', caption: 'From Bloxwich junctions to AI systems', head: ['On the road network', 'In AI and programming'], rows: [
          ['Following a road led to junctions, not road ends', 'A web crawler reaches heavily linked pages first'],
          ['Road ends were 31.4% of points but 10.3% of arrivals', 'Quiet sources are under-represented in scraped data'],
          ['Two ways of sampling gave two averages', 'State how the data was gathered before quoting it'],
          ['Points cut off at the edge were excluded', 'Decide what counts before you count'],
          ['The map is volunteer-drawn', 'Know who made a dataset and what they left out']
        ] },
        { kind: 'p', text: 'Language models are trained largely on text found by following links, and recommendation systems learn from whoever is most connected. Both inherit the tilt this project measures. Bloxwich learners write the two samplers themselves, so when an AI system claims to represent "the web" or "users" they know to ask how it got there. They also use vibe coding, describing a program to an AI and correcting its draft, and quickly discover that an assistant asked for "a random junction" may quietly sample by road. AI agents come once Python is secure, usually for older teenagers and adults, and Copilot Studio agents are taught one-to-one only. Related reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io are not connected with Modern Age Coders. The data is theirs and openly licensed; the measurements and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'Dots and string first, graphs and AI later',
    intro: 'Give us a year group and we will suggest a rung; the trial lesson lets us check it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Counting, linking and sampling with things you can touch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Making with AI', p: 'Scratch projects drafted with an AI and fixed by the child.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'AI and Python', p: 'Models, graphs and data, with attention to where data comes from.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Programming in depth', p: 'Python, generative AI and agents you can explain line by line.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and sampling',
    h2: 'What is the friendship paradox, and why does it matter for AI?',
    intro: 'The friendship paradox is the finding that, in almost any network, the things you reach by following a link have more links on average than things picked at random; it matters for AI because data collected by following links over-represents whatever is most connected.',
    p1: 'On 1,676 junctions and road ends in Bloxwich the average point had 2.41 roads, the average neighbour had 2.85, and road ends fell from 31.4% of points to 10.3% of arrivals when we sampled by travelling.',
    p2: 'Someone who has measured that gap will not read "trained on the internet" as "trained on everything" again.',
    closer: 'Bloxwich teenagers who understand how data is gathered can question an AI system instead of deferring to it, and programming is how they get there.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Bloxwich lessons, taught live over video',
    intro: 'You need a computer with a camera and a connection stable enough for a video call. Nothing has to be installed before the trial.',
    cells: [
      { h3: 'Learners do the work', p: 'The tutor sees the learner\'s screen and asks questions while they write and run their own code.' },
      { h3: 'Course chosen after the trial', p: 'We recommend a starting point once we have watched the learner think.' },
      { h3: 'Free to try', p: 'The trial is a real lesson, not a sales call, and it is not charged.' },
      { h3: 'Classes kept small', p: 'Between five and ten learners, grouped by level, joining from all over the UK.' },
      { h3: 'Term-time rhythm', p: 'Two lessons a week as a rule; we leave out Walsall school holidays if you send dates.' },
      { h3: 'Same UK hour all year', p: 'British Summer Time changes are absorbed by the tutor\'s timetable.' }
    ],
    spec: { title: 'Why not a room in Bloxwich?', p: 'A local room would mix ages and levels to fill seats. Online, each class is built from learners at one stage, and a live tutor can still look at every screen.' }
  },

  fees: {
    h2: 'Bloxwich fees',
    intro: 'Bloxwich is charged on the same international list as every country apart from India.',
    first: 'The first lesson, full length and free, with a recommendation at the end.',
    group: 'Group lessons, about eight in a month.',
    private: 'One-to-one lessons, about eight in a month.',
    closer: 'We price in US dollars and do not give a figure in pounds. No payment is taken for the trial, and invoices start only after a course and time slot have been agreed. See the pricing page for holidays, absences and changing format.'
  },

  reviewsH2: 'What West Midlands and other UK families say on Google',

  book: {
    h2: 'Arrange a free lesson for Bloxwich',
    intro: 'An age or school year and a favourite subject or hobby is all we need. The trial could be a dots-and-roads puzzle, an AI-assisted Scratch game, a first Python script, or a small network in code.',
    success: 'Thank you. We have received your Bloxwich request.'
  },

  faq: {
    h2: 'Questions from Bloxwich',
    intro: 'The paradox, the road project, AI, vibe coding and how lessons work.',
    items: [
      { q: 'What is the population of Bloxwich?', a: 'The ONS built-up area of Bloxwich had 51,875 usual residents at the 2021 census. The borough of Walsall had 284,124.' },
      { q: 'Are AI and programming classes available in Bloxwich?', a: 'Yes. They are live online lessons for ages 6 to 67 in Bloxwich, Leamore, Blakenall Heath, Little Bloxwich, Harden and the rest of Walsall borough.' },
      { q: 'What is sampling bias?', a: 'Sampling bias is when the way data is collected makes some things more likely to be included than others, so the sample does not look like the whole.' },
      { q: 'What did the Bloxwich project find?', a: 'Points on the road network averaged 2.41 roads, but their neighbours averaged 2.85. Road ends were 31.4% of points and only 10.3% of the places reached by following a road.' },
      { q: 'Is it really a paradox?', a: 'Not a contradiction, just a surprise. Well-connected points are counted once as themselves but many times as someone\'s neighbour, which lifts the neighbour average.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is making software by explaining what you want to an AI and then checking and correcting what it writes. We teach it together with the coding knowledge needed to do the checking.' },
      { q: 'At what age do learners build AI agents?', a: 'Once they can program in Python without help, which is typically in the later teens or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you cover GCSE computer science?', a: 'Yes, and A level, by teaching programming and the ideas behind it. We give no guarantee of grades.' },
      { q: 'What do lessons cost?', a: 'The first is free. After that it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'Yes, when you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More West Midlands towns and their projects',
    html: 'Go to <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> (word meanings from text), <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-west-bromwich">West Bromwich</a> or <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a>. All of them are linked from the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Bloxwich and the West Midlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-west-midlands', label: 'West Midlands' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-blx .cg-hero-grid { align-items: end; gap: clamp(1.3rem, 3.2vw, 2.6rem); }
.cg-root.cg-blx .cg-hero h1 { font-weight: 755; letter-spacing: -0.029em; line-height: 1.07; }
.cg-root.cg-blx .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-blx .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; font-size: 0.82rem; }
.cg-root.cg-blx .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-blx .cg-table caption { font-weight: 620; text-align: left; font-size: 0.9rem; letter-spacing: 0.01em; }
.cg-root.cg-blx .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-blx .cg-table th { font-weight: 690; text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.05em; }
.cg-root.cg-blx .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-blx .cg-callout { border-left-width: 3px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Walsall (E08000030), Census 2021 TS001 usual residents 284,124. ONS 2021 BUA (published): Bloxwich 51,875. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Bloxwich BUA: Leamore (WS2), Blakenall Heath, Little Bloxwich, Wallington Heath, Harden, Coal Pool (WS3).',
    localProject: 'One Overpass query, public road ways (residential to motorway, no service roads or paths) in the rectangle around the Bloxwich BUA centroids: 1,308 ways. Bends merged away; sample = 1,676 ends and junctions inside the box whose neighbours are all inside. 527 ends (31.4%), 1,087 three-way, 62 four-way. Mean roads per point 2.41; mean of neighbours\' averages 2.85; 671 below (40.0%), 626 equal, 379 above (22.6%). Random point is an end 31.4%; one random road step from a random point lands on an end 10.3%. Lesson family: friendship paradox, sampling by following links.',
    requiredMentions: [
      'Leamore',
      'Blakenall Heath',
      'Little Bloxwich',
      'Wallington Heath',
      'Coal Pool',
      'friendship paradox',
      '1,676',
      '1,087',
      '2.85',
      '10.3%'
    ],
    sources: [
      { claim: 'Feld S. L. (1991), Why your friends have more friends than you do, American Journal of Sociology 96(6), 1464 to 1477.', url: 'https://doi.org/10.1086/229693' },
      { claim: 'OpenStreetMap contributors, highway ways via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output area centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Walsall.', url: 'https://api.postcodes.io/places?q=Blakenall%20Heath' }
    ],
    rejectedClaims: [
      'That the sample is the road network of Bloxwich exactly: it is a rectangle around the town, and the page says so.',
      'That a mapped road end is a true dead end on the ground: drives and paths were excluded, and the page says so.',
      'That Goscote and Birchills are in the Bloxwich built-up area: the nearest-postcode check did not confirm it; left out.',
      'Any statement about traffic, safety or journey times: none made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
