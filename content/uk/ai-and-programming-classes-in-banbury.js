'use strict';
// Banbury (cg- town page, UK cluster Phase 10, towns band B, row 500). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: where would you cut a network to split it
// into two balanced halves with the fewest broken links? (spectral clustering: the Fiedler vector of a street graph).
// Data (read 30 September 2026): OpenStreetMap roads (trunk down to residential and living streets, with link roads;
// the motorway is left out), railway lines, rivers and canals from one Overpass query for the box 52.035 to 52.085
// north, 1.375 to 1.295 west, around Banbury.
// Our run (scratchpad bnb/sp.py): 229.7 km of road in the largest connected network, reduced to 2,747 junctions and
// road ends joined by 3,129 links. Graph Laplacian, second-smallest eigenvalue 0.00035. Splitting by the sign of its
// eigenvector (the Fiedler vector): 1,515 and 1,232 junctions, 12 links cut. Splitting at its median: 1,373 and 1,374,
// 12 links cut. Straight-line halves at the median position: east/west 27 links cut, north/south 44. A random half and
// half: 1,535. Separately: 14 links cross a railway, river or canal; none of the 12 cut links is one of them; removing
// those 14 leaves pieces of 2,289 and 409 junctions plus a few fragments.
// Lesson family: spectral clustering / spectral graph partitioning (Fiedler vector).
// Place facts: Cherwell (E07000177) TS001 161,016. ONS 2021 BUAs of 6,000+ (published): Banbury 52,045; Bicester
// 37,755; Kidlington 14,640. postcodes.io (Cherwell): Grimsbury, Neithrop, Easington, Ruscote, Hardwick, Calthorpe
// (suburban areas); Bodicote, Adderbury (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BANBURY', label: 'Banbury', blurb: 'AI and programming classes for Banbury in Oxfordshire, with a graph project that splits the street network using one eigenvector.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-banbury',
  code: 'bnb',
  accent: '#864313',
  accentRationale: 'Banbury: a burnt sienna (7.4:1 contrast on white), chosen by hand as unused and distinct from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Banbury',
    eyebrow: 'Banbury, Cherwell, Oxfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Oxfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Oxfordshire', href: '/coding-classes-in-oxfordshire' },
    { label: 'Oxford', href: '/best-coding-class-in-oxford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Banbury, Oxfordshire',
  title: 'AI and Programming Classes in Banbury, Oxfordshire | Ages 6 to 67',
  description: 'AI, programming, Python and vibe coding lessons by live video for Banbury, Grimsbury, Neithrop, Ruscote and Bodicote learners aged 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Banbury, Oxfordshire, with a machine learning project: spectral clustering finds a 12-link cut through the street network.',
  twitterDescription: 'Banbury, Oxfordshire: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Banbury, Oxfordshire',
    description: 'AI, machine learning, programming, Python, vibe coding and maths for children, teenagers and adults in Banbury and Cherwell district, taught live online, reasoning first.'
  },

  h1: 'AI and programming classes in Banbury, Oxfordshire',
  capsuleQ: 'Where can Banbury learners find the best AI and programming classes?',
  capsule: 'Banbury\'s built-up area had 52,045 residents in the 2021 census and the Cherwell district around it 161,016, in ONS figures. Grimsbury, Neithrop, Ruscote and Calthorpe appear in postcode data as suburban areas and Bodicote as a village. Learners between six and 67 study AI, programming, Python, vibe coding and maths with us on live video; tutors work from India, teaching one learner at a time or a class of five to ten on the same level. Reasoning is taught ahead of any tool, so a student can weigh up what a model or a chatbot returns. The Banbury project turns the town\'s streets into a graph and uses spectral clustering, a technique from machine learning, to find the smallest set of links whose removal would split the network into two balanced halves. The first lesson is free and closes with course advice. Group lessons then cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'Suppose you had to divide a town\'s street network into two parts of similar size while breaking as few streets as possible. Trying every possible division is hopeless: a network of a few thousand junctions has more two-way splits than there are atoms in the universe. Spectral clustering sidesteps the search. It writes the network as a matrix, asks for one special list of numbers called the Fiedler vector, with one number per junction, and splits the junctions by whether their number is positive or negative. It sounds like a trick. On Banbury\'s streets, mapped by OpenStreetMap contributors, a learner can test whether the trick finds a good cut, and whether the cut is where they expected.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Banbury, Oxfordshire.',

  picks: {
    eyebrow: 'Banbury course picks',
    h2: 'AI, programming and thinking courses for Banbury',
    intro: 'Pick the age band that fits. Each course begins with a free live lesson, and booking it needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: split a dot-and-line puzzle into two teams while cutting the fewest lines.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Get an AI to draft a Scratch network game, then look for the bridge that holds it together.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning methods explained from the inside, including spectral clustering on Banbury\'s streets.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web work with an AI assistant, where results are checked against a simple baseline.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cherwell district',
      h2: 'Banbury, Bicester and Kidlington',
      intro: 'Cherwell\'s three built-up areas of 6,000 residents or more, and the Banbury places named in postcode data.',
      body: [
        { kind: 'table', caption: 'Built-up areas of 6,000 or more residents in Cherwell, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Banbury', '52,045'],
          ['Bicester', '37,755'],
          ['Kidlington', '14,640']
        ] },
        { kind: 'p', text: 'The ONS figures stand as published, and we have not combined them. Cherwell\'s total of 161,016 is its own census count. In Cherwell, postcodes.io records Grimsbury, Neithrop, Easington, Ruscote, Hardwick and Calthorpe as suburban areas, and Bodicote and Adderbury as villages. Oxfordshire schools follow the national curriculum for England; give us your term dates and the lesson plan will respect them.' },
        { kind: 'callout', h3: 'Oxfordshire, the South East and how we teach', p: 'Find the county on <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">coding classes in Oxfordshire</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our teaching philosophy is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Banbury project',
      h2: 'Spectral clustering of Banbury\'s streets: 2,747 junctions, one eigenvector',
      intro: 'Build the graph, compute the Fiedler vector, cut where it changes sign, and compare with simpler cuts.',
      body: [
        { kind: 'p', text: 'One Overpass request returns the roads in a box around Banbury, from trunk roads down to residential streets, along with the railway lines, rivers and canals. The learner keeps the largest connected road network, 229.7 km of it, and simplifies it to the places where roads meet or end: 2,747 junctions joined by 3,129 links. From that comes the Laplacian matrix, a table with one row per junction that records how many links each junction has and which junctions it touches. Its eigenvector for the second-smallest eigenvalue is the Fiedler vector. Junctions that are well connected to each other receive similar values, and the values drift from negative on one side of the network to positive on the other.' },
        { kind: 'table', caption: 'Ways of splitting Banbury\'s street graph in two, our Python run on OpenStreetMap data', head: ['How the split was made', 'Junctions on each side', 'Links cut'], rows: [
          ['Fiedler vector, by sign', '1,515 and 1,232', '12'],
          ['Fiedler vector, at its median', '1,373 and 1,374', '12'],
          ['Straight line, east and west halves', '1,373 and 1,374', '27'],
          ['Straight line, north and south halves', '1,373 and 1,374', '44'],
          ['Random halves', '1,349 and 1,398', '1,535']
        ] },
        { kind: 'p', text: 'The spectral split severs 12 links out of 3,129. A ruler-straight cut through the middle of the map severs 27 one way and 44 the other, and picking junctions at random breaks about half of all links. The eigenvector knows nothing about geography; it was given only the list of which junction connects to which, and it still found a line through the network far thinner than the obvious ones. The second-smallest eigenvalue itself, 0.00035, is a measure of how weakly the two sides hold together: the closer to zero, the easier the network is to pull apart.' },
        { kind: 'p', text: 'Here is the part the learner usually gets wrong in advance. Most people guess the cut will follow the railway, the river or the canal. We checked. Only 14 road links in the box cross one of those three, and not one of the 12 links in the spectral cut is among them. Removing all 14 crossings does separate the network, but into very unequal parts of 2,289 and 409 junctions. The method is looking for balance as well as a small cut, so it passed over the visible barrier and chose a different, less obvious seam. A prediction was made, tested against data and found wrong, which is how the project is meant to go.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'On a drawn network of dots and lines, find the fewest lines to snip to make two equal teams.' },
          { h3: 'Ages 11 to 15', p: 'Build a small graph in Python, try straight-line and random splits, and count the broken links.' },
          { h3: 'Ages 15 and up', p: 'Form the Laplacian with NumPy, compute the Fiedler vector and test the railway guess on the real graph.' }
        ] },
        { kind: 'callout', h3: 'Map data credit and caveats', p: 'Roads, railways and waterways are © OpenStreetMap contributors, under the Open Database Licence. The graph, the eigenvector and the counts are our work. The network ends at the edge of our box and omits the motorway, and a different box would give different numbers. Nothing here describes a real plan or boundary.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Structure and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'A method can be right for the question it was asked and still surprise the person who asked it.',
      body: [
        { kind: 'table', caption: 'From the Banbury cut to working with AI', head: ['On the street graph', 'In AI practice'], rows: [
          ['12 links cut, against 27 and 44 for straight lines', 'Compare any clever result with a plain baseline'],
          ['The cut ignored the railway', 'State your guess first, then let the data correct it'],
          ['Balance and cut size pulled against each other', 'Know what the method is optimising before judging its answer'],
          ['Only connections went in, no coordinates', 'Structure alone carries a great deal of information'],
          ['A different box changes the numbers', 'Results depend on where the data was clipped']
        ] },
        { kind: 'p', text: 'When a learner vibe codes this, the request to an AI assistant is a sentence: "split this graph in two with spectral clustering." The code comes back quickly and produces a coloured map. Without a baseline nobody can say whether the colouring is any good. Banbury students add the straight-line and random splits and write down their own prediction before running it. The same ideas sit inside larger AI systems, which group related documents, users or steps by the structure of their connections. Learners go on to build AI agents after they are writing Python independently, normally in the sixth form or as adults, and Copilot Studio agents are available through one-to-one lessons only. Continue with <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents: the UK student pathway</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'No endorsement by OpenStreetMap, the Office for National Statistics or postcodes.io is implied. Their open data fed the project; the analysis and any faults in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Path',
    h2: 'From dot puzzles to eigenvectors',
    intro: 'School years are a first guess only. We place learners by what the free lesson shows.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Networks on paper, fair splits and predictions checked by counting.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small projects drafted by an AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, graphs and AI', p: 'Machine learning on real data, next to GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Applied AI', p: 'Python foundations leading to generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and structure',
    h2: 'What is spectral clustering?',
    intro: 'Spectral clustering is a machine learning method that groups the points of a network by computing eigenvectors of a matrix built from its connections, then splitting the points according to the values those eigenvectors give them.',
    p1: 'Applied to 2,747 junctions of Banbury\'s street network, the Fiedler vector produced two groups of 1,515 and 1,232 separated by only 12 of 3,129 links, less than half the 27 cut by a straight east and west division.',
    p2: 'The cut did not follow the railway, river or canal, as most people predict, because the method also wants the two sides to be of similar size.',
    closer: 'Banbury teenagers who have programmed that test know to ask what an AI method is optimising before they accept its output, a habit formed by coding, and a reason to learn it in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'Grimsbury, Neithrop and Bodicote on one video call',
    intro: 'A working computer, a webcam and ordinary home broadband cover everything.',
    cells: [
      { h3: 'Learner-led screen', p: 'The student shares a screen and does the coding. The tutor observes and keeps asking how they know it is right.' },
      { h3: 'Placement in the trial', p: 'The free lesson shows us where to start, and we log the exam board when one applies.' },
      { h3: 'Free first session', p: 'Nothing to pay and no card to enter; it ends with a course we suggest.' },
      { h3: 'Grouped by ability', p: 'Classes of five to ten bring together UK learners at one stage.' },
      { h3: 'Two per week', p: 'Lessons skip the school holidays you let us know about.' },
      { h3: 'Constant UK time', p: 'Our tutors take on the British Summer Time shift so that your lesson hour never changes.' }
    ],
    spec: { title: 'Why the lessons are online', p: 'A class where everyone is at one level is only possible with a large catchment. Video gives us the entire UK.' }
  },

  fees: {
    h2: 'Banbury fees',
    intro: 'For Banbury we charge the international rates, which apply to learners anywhere outside India.',
    first: 'A full-length live lesson at no charge, ending with a recommended course.',
    group: 'In the region of eight live group lessons a month.',
    private: 'In the region of eight live private lessons a month.',
    closer: 'Prices are set and invoiced in US dollars, with no sterling figure. We send no invoice until a course and a weekly time have come out of the trial. The pricing page sets out what happens with holidays, absences and a change of format.'
  },

  reviewsH2: 'Oxfordshire families and UK learners: their Google reviews',

  book: {
    h2: 'Book a free Banbury lesson',
    intro: 'Share an age or year group and something the learner enjoys. Trials have included a snip-the-network puzzle, a Scratch game drafted by AI, opening steps in Python, and a first look at a graph of real streets.',
    success: 'Thanks. We have the Banbury request and will be in touch.'
  },

  faq: {
    h2: 'Banbury questions',
    intro: 'Spectral clustering, the street graph, AI, programming and practical matters.',
    items: [
      { q: 'What is the population of Banbury?', a: 'The ONS recorded 52,045 residents in the Banbury built-up area at the 2021 census. Cherwell district had 161,016.' },
      { q: 'Are AI and programming classes available online in Banbury?', a: 'Yes. We teach ages 6 to 67 on live video, covering Banbury, Grimsbury, Neithrop, Ruscote, Bodicote and the rest of Cherwell.' },
      { q: 'What is the Fiedler vector?', a: 'The eigenvector belonging to the second-smallest eigenvalue of a graph\'s Laplacian matrix. Splitting a network by the sign of its entries tends to give two parts joined by few links.' },
      { q: 'What is a graph in computer science?', a: 'A set of points, called nodes, and the links between them, called edges. Road networks, friendships and web pages can all be stored as graphs.' },
      { q: 'What do learners do in the Banbury project?', a: 'They build a graph of 2,747 junctions from open map data in Python, compute the Fiedler vector, and compare its 12-link cut with straight-line and random splits.' },
      { q: 'Do you teach vibe coding as well?', a: 'Yes, in every age group: the learner directs an AI to write code and is responsible for testing it.' },
      { q: 'How soon can a learner build AI agents?', a: 'When they program in Python independently, normally in sixth form or adulthood. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you help with GCSE and A level work?', a: 'In computer science and maths we do. The focus is understanding, and no grade is guaranteed.' },
      { q: 'What do lessons cost?', a: 'There is no charge for the first. Group lessons are USD 100 per month afterwards and private lessons USD 150 per month.' },
      { q: 'Are lessons paused for holidays?', a: 'Yes, whenever you send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Banbury',
    h2: 'More Oxfordshire and South East pages',
    html: 'Pages with other projects include <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> and the county page for <a class="cg-inline-link" href="/coding-classes-in-oxfordshire">Oxfordshire</a>. For the rest of the country, go to the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Banbury and Oxfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-oxfordshire', label: 'Oxfordshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bnb .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.5vw, 2.9rem); }
.cg-root.cg-bnb .cg-hero h1 { font-weight: 745; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-bnb .cg-capsule { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-bnb .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bnb .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.019em; }
.cg-root.cg-bnb .cg-table caption { text-align: left; font-size: 0.89rem; font-weight: 500; font-style: italic; }
.cg-root.cg-bnb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnb .cg-table th { font-size: 0.81rem; font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-bnb .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-bnb .cg-callout { border-left-width: 4px; border-radius: 12px; }
`,

  dossier: {
    curriculumAuthority: 'Cherwell (E07000177), Census 2021 TS001 usual residents 161,016. ONS 2021 BUAs of 6,000+ (published): Banbury 52,045; Bicester 37,755; Kidlington 14,640. postcodes.io (Cherwell): Grimsbury, Neithrop, Easington, Ruscote, Hardwick, Calthorpe (suburban areas); Bodicote, Adderbury (villages).',
    localProject: 'OpenStreetMap roads (trunk to residential, no motorway), rail, rivers and canals via one Overpass query, box 52.035-52.085 N, 1.375-1.295 W. Largest connected road network 229.7 km, 2,747 junctions and road ends, 3,129 links. Laplacian second-smallest eigenvalue 0.00035. Fiedler sign split 1,515 / 1,232, 12 links cut; median split 1,373 / 1,374, 12 cut. Straight-line median halves: east/west 27 cut, north/south 44. Random halves 1,349 / 1,398, 1,535 cut. 14 links cross rail, river or canal; none is among the 12; removing the 14 leaves 2,289 and 409 plus fragments. Lesson family: spectral clustering, Fiedler vector, graph partitioning.',
    requiredMentions: [
      '52,045',
      '161,016',
      '2,747',
      '3,129',
      'Grimsbury',
      'Neithrop',
      'Ruscote',
      'Bodicote',
      'Calthorpe',
      'Fiedler'
    ],
    sources: [
      { claim: 'OpenStreetMap roads, railways and waterways (ODbL) fetched through the Overpass API for a box around Banbury.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and villages in Cherwell.', url: 'https://api.postcodes.io/places?q=Grimsbury' }
    ],
    rejectedClaims: [
      'Which named streets or neighbourhoods fall on each side of the cut: not published; the cut is a property of our box and graph.',
      'Banbury Cross, market, motorway or rail service facts: not read from a source; not claimed.',
      'That the 12-link cut is the smallest possible balanced cut: not claimed; spectral methods give a good cut, not a proven optimum.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
