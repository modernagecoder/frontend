'use strict';
// Hinckley (cg- town page, UK cluster Phase 10, towns band B, row 509). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can you count the loops in a network without
// tracing a single one? (Cyclomatic number, and the same formula as a measure of how tangled code is.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query (hkl/q.txt), bounding box
// 52.516,-1.418,52.562,-1.337 (the postcodes.io extent of the Hinckley place record). Ways tagged highway = motorway,
// trunk, primary, secondary, tertiary, unclassified, residential, living_street or a link road. 1,324 ways.
// Our run (scratchpad hkl/cyc.py): largest connected piece 8,524 mapped points and 8,805 segments. Points by number of
// segments meeting: 673 with one (dead ends, including roads cut by the box), 6,656 with two (bends), 1,156 with three,
// 38 with four, 1 with five. Merging bends: 1,868 points (673 dead ends + 1,195 junctions) joined by 2,149 street links.
// Cyclomatic number (links - points + connected pieces): 2,149 - 1,868 + 1 = 282; the same from the raw data,
// 8,805 - 8,524 + 1 = 282. Removing every dead-end branch (3,328 mapped points) leaves 5,196 points, 5,477 segments,
// still 282. networkx cycle_basis returns 282 cycles. A spanning tree uses 8,523 segments, leaving 282 outside it.
// 11 ways carry a bridge or tunnel tag, so "282 enclosed blocks" is only approximately true.
// Code: McCabe cyclomatic complexity (decision points + 1; if, for, while, comprehension clauses, except and each extra
// and/or counted) of the functions in our own scripts, via Python's ast module: rank 7, peel 8, complexity 4 (cyc.py);
// load 16, simplify 10 (h5/graph.py).
// Lesson family: cyclomatic number / circuit rank of a graph, McCabe cyclomatic complexity. Screened: "cyclomatic",
// "circuit rank", "cycle basis", "euler characteristic" 0 hits in content/, claims and spent lists; claimed in
// claims.txt. Leicestershire county page = change ringing; Loughborough = declustering; Wellingborough = k-core
// (peeling to find the looped part; here the question is how many independent loops, and the link to code metrics).
// Place facts: Hinckley and Bosworth TS001 113,642. ONS 2021 BUA (published): Hinckley 50,725. postcodes.io (Hinckley
// and Bosworth, Leicestershire): Burbage and Sketchley (suburban areas, LE10), Barwell (village, LE9), Earl Shilton
// (town, LE9), Stoke Golding (village, CV13).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HINCKLEY', label: 'Hinckley', blurb: 'Coding and AI classes for Hinckley, with a project that counts the loops in the street network using one subtraction, then turns the same formula on code.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-hinckley',
  code: 'hkl',
  accent: '#4338CA',
  accentRationale: 'Hinckley: a vivid indigo (7.90:1 on white), chosen by hand; more saturated and more violet than the navy blues used lately',
  pageType: 'city',
  place: {
    name: 'Hinckley',
    eyebrow: 'Hinckley, Leicestershire, East Midlands',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Leicestershire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hinckley, Leicestershire',
  title: 'Coding and AI Classes in Hinckley | Python, Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding classes for Hinckley, Burbage, Barwell and Earl Shilton learners aged 6 to 67. Live online with a tutor. First lesson free.',
  ogDescription: 'Coding and AI classes for Hinckley, with a graph project that finds 282 independent loops in the street network by arithmetic alone.',
  twitterDescription: 'Hinckley coding, AI, Python and vibe coding classes online for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hinckley',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Hinckley and the borough of Hinckley and Bosworth, taught live with projects on networks and on measuring code.'
  },

  h1: 'Coding and AI classes in Hinckley',
  capsuleQ: 'Which are the best coding and AI classes in Hinckley?',
  capsule: 'In the 2021 census the Office for National Statistics recorded 50,725 usual residents in the Hinckley built-up area, part of the Leicestershire borough of Hinckley and Bosworth. Burbage and Sketchley are listed in the postcode gazetteer as suburban areas in the LE10 district; Barwell is a village and Earl Shilton a town in LE9. Anyone there between six and 67 can learn coding, AI, Python, vibe coding or maths with us. They are live video lessons with tutors who teach from India, arranged one-to-one or for a small class of five to ten at a shared level. Our approach is that you should be able to reason your way to an answer before a computer, or an AI, confirms it. A free first lesson lets you try that out, and we end it with a course suggestion. For Hinckley, learners count how many separate loops the town\'s street network contains without tracing any of them, then use the very same formula to measure how tangled a piece of code is. Staying on costs USD 100 monthly for a class seat, or USD 150 monthly with your own tutor.',
  lead: 'Here is a puzzle. A street map has thousands of points and thousands of stretches of road between them. How many separate loops does it contain, counting only loops that cannot be made by joining others together? Tracing them all by hand would be a long job. A single subtraction answers it: take the number of links, subtract the number of points, add one for each connected piece. The result is called the cyclomatic number. It counts the independent loops in any network. In 1976 Thomas McCabe applied the same idea to the flowchart of a program, and cyclomatic complexity became one of the standard measures of how hard code is to test. This project starts on the streets of Hinckley and ends inside a Python file.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or AI lesson for a learner in Hinckley.',

  picks: {
    eyebrow: 'Choosing a course',
    h2: 'Hinckley courses by age',
    intro: 'Here are four common starting places. A free live lesson comes first on each, and booking it takes no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think with dots and lines: counting, spotting loops and finding a shortcut to the answer.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: a Scratch game planned by the child, drafted by AI and checked by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers from basics to graphs, with the Hinckley loop count as a project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Data structures and algorithms, including graph theory and how to keep code simple enough to test.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hinckley facts',
      h2: 'Hinckley, Burbage, Barwell and Earl Shilton',
      intro: 'Two published census figures and what the gazetteer says about the places round about.',
      body: [
        { kind: 'table', caption: 'Hinckley and its borough, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Hinckley built-up area', '50,725'],
          ['Hinckley and Bosworth borough', '113,642']
        ] },
        { kind: 'p', text: 'These are separate counts. The borough stretches well beyond the town and takes in other built-up areas, so one row cannot be worked out from the other. postcodes.io records Burbage and Sketchley as suburban areas in the LE10 postcode district, Barwell as a village and Earl Shilton as a town in LE9, and Stoke Golding as a village in CV13, all of them in Hinckley and Bosworth. Hinckley schools teach the English national curriculum. We fit lessons to the school year, from Year 2 through Year 13, and can follow GCSE and A level computer science and maths.' },
        { kind: 'callout', h3: 'More in Leicestershire', p: 'Have a look at <a class="cg-inline-link" href="/coding-classes-in-leicestershire">coding classes in Leicestershire</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a>. Our case for thinking before tools is made in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hinckley project',
      h2: 'The cyclomatic number: counting loops by subtraction',
      intro: 'Links, minus points, plus one.',
      body: [
        { kind: 'p', text: 'A single OpenStreetMap query returns 1,324 mapped roads in a box around Hinckley, from main roads to residential streets. Joined together, the largest connected piece has 8,524 mapped points and 8,805 short segments between them. Most of those points are just bends. Setting the bends aside leaves the points that matter: 673 dead ends and 1,195 junctions, of which 1,156 are three-way, 38 four-way and one five-way. That makes 1,868 points, and there are 2,149 stretches of street linking them.' },
        { kind: 'table', caption: 'Counting loops in the Hinckley street network three ways (our Python run on OpenStreetMap data)', head: ['How the network is described', 'Points', 'Links', 'Links - points + 1'], rows: [
          ['Every mapped point and segment', '8,524', '8,805', '282'],
          ['Dead ends and junctions only', '1,868', '2,149', '282'],
          ['After removing all dead-end branches', '5,196', '5,477', '282']
        ] },
        { kind: 'p', text: 'The answer is 282 every time, and that is the point. Adding a bend to a road adds one point and one link, so the subtraction does not notice. Cutting off a cul-de-sac removes one point and one link, so it does not notice that either. The number only changes when a loop is made or broken. To be sure the formula was not fooling us, the learner asks a graph library to list a full set of independent loops directly, and it returns 282 of them. Seen from the other side: a network with no loops at all, a tree, would need 8,523 of the segments to keep everything joined, and the remaining 282 are the ones that each close a loop.' },
        { kind: 'p', text: 'On a perfectly flat map, 282 would also be the number of enclosed blocks, the patches of land with streets all the way round. Hinckley is not perfectly flat in that sense: 11 of the mapped roads are tagged as a bridge or tunnel, where one road crosses another without joining it. So we describe 282 as the number of independent loops, which is exact, and only roughly as a count of blocks. A second limit: roads leaving the box are cut at its edge and counted as dead ends, which can hide loops that close outside it.' },
        { kind: 'p', text: 'Now the same idea on code. Draw a Python function as a flowchart and every if, every loop and every "and" or "or" adds a branch. McCabe\'s cyclomatic complexity is the number of independent routes through that chart, and the shortcut is to count the decision points and add one. The learner writes a small tool using Python\'s ast module and points it at the scripts that did the street analysis. The loop-counting function scores 7 and the branch-peeling function 8. The function that loads the map scores 16. McCabe\'s paper recommended splitting up any routine that scored above 10, so by our own measure that one deserves splitting, and we say so.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw dots and lines, count both, and check that lines minus dots plus one equals the loops you can see.' },
          { h3: 'Ages 11 to 15', p: 'Build the Hinckley network in Python and show that bends and dead ends do not change the answer.' },
          { h3: 'Ages 15 and up', p: 'Confirm 282 with a cycle basis, then write a complexity counter and run it on your own code.' }
        ] },
        { kind: 'callout', h3: 'Map credit and caveats', p: 'Street data (C) OpenStreetMap contributors, under the Open Database Licence, read 30 September 2026. The network, the counts and the complexity scores are our own calculations. The box also takes in ground beyond Hinckley itself, and a different box would give a different number.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Measuring code',
      h2: 'What counting loops teaches about vibe coding and AI agents',
      intro: 'When an AI writes the code, you still need a way to judge what you were given.',
      body: [
        { kind: 'table', caption: 'From Hinckley streets to code written with AI', head: ['What the project showed', 'Why it matters with AI'], rows: [
          ['One subtraction replaced tracing every loop', 'Look for the quantity that answers the question'],
          ['Bends and dead ends left 282 unchanged', 'Know what your measure ignores'],
          ['A library\'s list of loops also had 282', 'Check a formula by a second route'],
          ['Our map loader scored 16', 'Measure your own work by the same rule'],
          ['Each branch is a path that needs a test', 'Complex code needs more tests than it usually gets']
        ] },
        { kind: 'p', text: 'Vibe coding means describing what you want in plain English and letting an AI write the program. The AI does not tire, so it will cheerfully produce one enormous function with dozens of branches, and the result may even run. The cyclomatic number tells you, before you read a line, roughly how many separate test cases that function needs. A learner who knows this can give the AI a better instruction, such as keeping every function under a stated complexity, and can check that it obeyed. The idea matters for AI agents as well. An agent is a program that plans and takes steps toward a goal, and its plan is a graph of choices; the more independent paths through it, the more ways it can go wrong and the more there is to test. Agent projects wait until Python feels natural to the learner, which for most means sixth form or adulthood; anything built in Copilot Studio is taught privately and never to a group. Follow on with <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'None of OpenStreetMap, the Office for National Statistics or postcodes.io is connected to Modern Age Coders. The open data is theirs; the processing and the figures drawn from it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From start to advanced',
    h2: 'Dots and lines, then graphs, then code quality',
    intro: 'Year group points us to a stage, and a free lesson lets us confirm it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Counting, patterns and puzzles on paper maps and in Scratch.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games made with AI help and tested by their young designers.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Graphs, functions and testing, in line with GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Graph methods, clean code, machine learning and agents.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Code you can trust',
    h2: 'What is cyclomatic complexity, and how do you measure how complicated code is?',
    intro: 'Cyclomatic complexity is the number of independent paths through a piece of code, found by counting its decision points and adding one, and it measures how complicated code is by telling you the smallest number of test cases needed to exercise every branch.',
    p1: 'The network version of the idea, links minus points plus one, gave 282 independent loops for Hinckley\'s street network whether we counted 8,524 mapped points or only the 1,868 junctions and dead ends.',
    p2: 'Turned on our own scripts, it scored one function at 16, over the usual limit of 10, which is a prompt to simplify before anyone else has to test it.',
    closer: 'That habit of measuring what an AI hands you is why coding still matters for Hinckley teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'What to expect',
    h2: 'Inside a Hinckley lesson',
    intro: 'We teach through live video calls. The learner needs their own computer and camera and a space where they can work undisturbed.',
    cells: [
      { h3: 'The learner writes', p: 'Code goes in through the learner\'s keyboard on a shared screen; the tutor asks and advises.' },
      { h3: 'Begin with a free lesson', p: 'It is a full session, and it tells us which course to recommend.' },
      { h3: 'No card, no commitment', p: 'The trial is booked with contact details alone.' },
      { h3: 'One level per class', p: 'Five to ten learners, matched by stage, from across the United Kingdom.' },
      { h3: 'Twice a week', p: 'During term, with Leicestershire school holidays off when you tell us the dates.' },
      { h3: 'A fixed UK time', p: 'The seasonal clock change is handled by our tutors, not by you.' }
    ],
    spec: { title: 'Why online', p: 'With the learner\'s screen shared, the tutor follows each keystroke, and a countrywide intake means classes can be formed at one level.' }
  },

  fees: {
    h2: 'Hinckley fees',
    intro: 'The same international fees apply to all learners outside India.',
    first: 'One complete lesson free, with our course suggestion to finish.',
    group: 'A small group of five to ten, about eight lessons every month.',
    private: 'Private lessons with one tutor, about eight every month.',
    closer: 'We charge in US dollars and list no price in sterling. Payment starts after the free lesson, when a course and a lesson time have been agreed. For holidays, missed lessons and changes of format, see the pricing page.'
  },

  reviewsH2: 'Leicestershire families and UK learners on Google',

  book: {
    h2: 'Book a free Hinckley lesson',
    intro: 'Send the learner\'s age or school year and a hobby or interest. We might open with a dots-and-lines puzzle, an AI-assisted Scratch game, some first Python, or a network small enough to count by hand.',
    success: 'Thank you. Your Hinckley request is on its way to us.'
  },

  faq: {
    h2: 'Hinckley questions and answers',
    intro: 'Loops, code complexity, the courses, vibe coding and the practical points.',
    items: [
      { q: 'What is the population of Hinckley?', a: 'The ONS counted 50,725 usual residents in the Hinckley built-up area at the 2021 census, and 113,642 in the borough of Hinckley and Bosworth.' },
      { q: 'Can I get coding and AI classes in Hinckley?', a: 'Yes. They are live online lessons for ages 6 to 67, so Hinckley, Burbage, Sketchley, Barwell and Earl Shilton are all covered.' },
      { q: 'What is cyclomatic complexity?', a: 'It is a measure of how many independent paths run through a piece of code. You can find it by counting the decision points, such as if statements and loops, and adding one.' },
      { q: 'What is the circuit rank of a graph?', a: 'Circuit rank, also called the cyclomatic number, is the number of independent loops in a network: links minus points plus the number of connected pieces.' },
      { q: 'What did the Hinckley project find?', a: 'The town\'s street network, with 1,868 junctions and dead ends and 2,149 links, contains 282 independent loops, and the count is the same however the bends are treated.' },
      { q: 'Is vibe coding taught to children?', a: 'Yes. Children tell an AI what to make, then read and test what it wrote before keeping it.' },
      { q: 'When do learners meet AI agents?', a: 'When Python comes naturally, for most in sixth form or later. Copilot Studio is taught in private lessons.' },
      { q: 'Will this help with GCSE or A level computer science?', a: 'Those specifications cover graphs, algorithms, testing and programming. We aim at real understanding and never guarantee a result.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Group tuition is then USD 100 a month and one-to-one tuition USD 150 a month.' },
      { q: 'Are there breaks for school holidays?', a: 'Yes. Send us the dates and we will pause lessons.' }
    ]
  },

  next: {
    eyebrow: 'Onward',
    h2: 'Related pages',
    html: 'Compare another county project at <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a> (deciding when one event ends and the next begins) or a Warwickshire one at <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-nuneaton">Nuneaton</a>. For the full picture, go to <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">our East Midlands listing</a> or <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the United Kingdom hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hinckley and Leicestershire',
  footerPlaces: [
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hkl .cg-hero-grid { align-items: center; gap: clamp(1.25rem, 3.3vw, 2.85rem); }
.cg-root.cg-hkl .cg-hero h1 { font-weight: 760; letter-spacing: -0.03em; line-height: 1.06; }
.cg-root.cg-hkl .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-hkl .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; font-size: 0.8rem; }
.cg-root.cg-hkl .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.024em; }
.cg-root.cg-hkl .cg-table caption { font-weight: 600; text-align: left; font-size: 0.91rem; }
.cg-root.cg-hkl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hkl .cg-table th { font-weight: 700; border-bottom: 2px solid var(--cg-accent); letter-spacing: 0.01em; }
.cg-root.cg-hkl .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hkl .cg-callout { border-radius: 14px 2px 14px 2px; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Hinckley and Bosworth (E07000132), Leicestershire, Census 2021 TS001 usual residents 113,642. ONS 2021 BUA (published): Hinckley 50,725. English national curriculum, GCSE and A level. postcodes.io (Hinckley and Bosworth): Burbage, Sketchley (suburban areas, LE10), Barwell (village, LE9), Earl Shilton (town, LE9), Stoke Golding (village, CV13).',
    localProject: 'OSM via Overpass (read 30 September 2026), bbox 52.516,-1.418,52.562,-1.337, 1,324 highway ways (motorway to residential, living_street, link roads). Largest component 8,524 mapped points, 8,805 segments; degrees 1: 673, 2: 6,656, 3: 1,156, 4: 38, 5: 1. Bends merged: 1,868 points (673 dead ends, 1,195 junctions), 2,149 links. Cyclomatic number 2,149 - 1,868 + 1 = 282 = 8,805 - 8,524 + 1; after removing dead-end branches 5,477 - 5,196 + 1 = 282; networkx cycle basis 282; spanning tree 8,523 segments. 11 ways tagged bridge or tunnel, so 282 is only approximately a count of enclosed blocks. McCabe complexity of our own functions via ast: rank 7, peel 8, complexity 4, load 16, simplify 10. Lesson family: cyclomatic number, circuit rank, McCabe cyclomatic complexity.',
    requiredMentions: [
      '50,725',
      '113,642',
      'Burbage',
      'Sketchley',
      'Barwell',
      'Earl Shilton',
      'cyclomatic',
      '1,868',
      '2,149',
      '8,524'
    ],
    sources: [
      { claim: 'OpenStreetMap street data via the Overpass API, (C) OpenStreetMap contributors, ODbL.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: Hinckley extent and the named places in Hinckley and Bosworth.', url: 'https://api.postcodes.io/places?q=Hinckley' },
      { claim: 'T. J. McCabe, "A Complexity Measure", IEEE Transactions on Software Engineering, 1976 (cyclomatic complexity and the limit of 10).', url: 'https://doi.org/10.1109/TSE.1976.233837' }
    ],
    rejectedClaims: [
      'That Hinckley has exactly 282 street blocks: not claimed; 282 is the number of independent loops, and bridges and tunnels make the block reading approximate.',
      'That Hinckley streets are more or less looped than any other town: not compared.',
      'That a complexity above 10 means code is wrong: not claimed; it is a guideline for testability.',
      'Traffic, travel times or road quality: none used.',
      'That Burbage, Barwell or Earl Shilton are parts of Hinckley or close to it: not claimed; they are listed as recorded in the borough.',
      'Named schools, term dates and sterling prices: none.'
    ]
  }
};
