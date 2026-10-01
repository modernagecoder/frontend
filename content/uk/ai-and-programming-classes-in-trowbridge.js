'use strict';
// Trowbridge (cg- town page, UK cluster Phase 10, towns band B, row 540). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how big is a stream, measured by a rule
// a computer can apply by recursion, and what happens when the network is not quite a tree? (Strahler stream order;
// the same rule as the Ershov number that counts registers for an expression tree).
// Data (read 30 September 2026): OpenStreetMap via one Overpass query, waterway=river and waterway=stream in the box
// 51.22 to 51.37 N, 2.32 to 2.10 W: 350 ways. Directed by the OSM drawing convention (downstream). Outlet: last River
// Biss node before its confluence with the River Avon (51.33675 N, 2.21554 W). Our run (scratchpad trw/st.py):
// upstream network 1,931 nodes, 34.3 km of mapped channel; one place where the Biss splits and rejoins (split at
// 51.33071 N 2.21149 W, side channel about 62 m). Naive recursion gives order 4 at the outlet; with the side channel
// treated as part of the main channel, order 3. Corrected network: 1,929 nodes, 34.2 km; 16 sources; streams of order
// 1: 16, order 2: 5, order 3: 1; bifurcation ratios 3.2 (1 to 2) and 5.0 (2 to 3); channel length by order 12.0,
// 10.9 and 11.3 km; longest channel from a source to the outlet 16.0 km. Order 3 begins at 51.2798 N 2.1865 W where
// Bitham Brook (as named in OSM) meets an unnamed order-2 stream; Biss Brook (order 2) joins at 51.2907 N 2.2014 W;
// Lambrok Stream (order 2) joins the River Biss at 51.3216 N 2.2204 W. Ershov numbers checked in Python:
// a*b + c needs 2 registers, (a+b)*(c+d) needs 3, (a+b)*(c+d) + (e+f)*(g+h) needs 4.
// Lesson family: Strahler stream order (recursion on trees; networks that are not trees; Ershov number).
// Place facts: Wiltshire (E06000054) TS001 510,333 (printed, not a requiredMention); ONS 2021 BUA Trowbridge 43,750.
// postcodes.io suburban areas with nearest postcode in the Trowbridge BUA: Hilperton, Hilperton Marsh, Paxcroft Mead,
// Studley Green, Trowle Common, Longfield, Lower Studley, Upper Studley. Villages outside it: Staverton, North Bradley,
// Southwick, Holt, Semington.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TROWBRIDGE', label: 'Trowbridge', blurb: 'AI and programming classes for Trowbridge in Wiltshire, with a recursion project on the streams that feed the River Biss.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-trowbridge',
  code: 'trw',
  accent: '#546416',
  accentRationale: 'Trowbridge: a muted water-meadow olive (6.54:1 contrast on white, 5.31:1 on the darkest paper tint), picked by hand under the muted-accent rule, at least 40 RGB steps from South West pages and neighbouring rows',
  pageType: 'city',
  place: {
    name: 'Trowbridge',
    eyebrow: 'Trowbridge, Wiltshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Wiltshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Wiltshire', href: '/coding-classes-in-wiltshire' },
    { label: 'Bath', href: '/best-coding-class-in-bath' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Trowbridge, Wiltshire',
  title: 'AI and Programming Classes in Trowbridge | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding classes for Trowbridge, Hilperton, Paxcroft Mead, Studley Green and Staverton, ages 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Trowbridge, Wiltshire, with a recursion project: Strahler order for the streams of the River Biss, and one split channel that breaks the tree.',
  twitterDescription: 'Trowbridge, Wiltshire: AI, programming, Python and vibe coding on live video for ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Trowbridge, Wiltshire',
    description: 'AI, programming, Python, algorithms, vibe coding and maths for children, teenagers and adults in Trowbridge and west Wiltshire, taught live online by tutors who make learners trace what their code does.'
  },

  h1: 'AI and programming classes in Trowbridge',
  capsuleQ: 'Where can a Trowbridge learner find the best AI and programming classes?',
  capsule: 'ONS figures give the Trowbridge built-up area 43,750 residents at the 2021 census, in a Wiltshire unitary area of 510,333. Hilperton, Paxcroft Mead, Studley Green, Trowle Common and Longfield are among its suburban areas in postcode data, with Staverton and North Bradley as villages nearby. Learners in Trowbridge aged six to 67 study AI, programming, Python, vibe coding and maths with us live over video, with tutors based in India, alone or in a group of five to ten at the same stage. We teach learners to trace what a program does step by step, because that is how they find out when an AI-written one goes wrong. The Trowbridge project gives every stream feeding the River Biss a size, using a rule a computer applies by recursion, and meets one spot where the river refuses to behave like a tree. A first lesson costs nothing and ends with a course suggestion; later months are USD 100 in a group or USD 150 one-to-one.',
  lead: 'Programmers love trees. Folders inside folders, replies inside replies, the parse tree a compiler builds from every line of code: each item hangs from exactly one parent, and a short recursive function can walk the lot. Rivers look like the same structure turned upside down, with small streams joining into bigger ones until one channel leaves the valley. In the 1950s the geographer Arthur Strahler set out a rule for ranking every stream in such a network, and it turned out to be the same rule that tells a compiler how many registers an arithmetic expression needs. The streams that feed the River Biss through Trowbridge let learners write that rule, run it on open map data, and discover what happens when real data is not quite a tree.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Trowbridge.',

  picks: {
    eyebrow: 'Trowbridge course picks',
    h2: 'AI, programming and thinking courses for Trowbridge',
    intro: 'A single route per age group, each opening with a free live lesson that takes no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: draw a family of streams on paper and give each one a number using a simple joining rule.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children get an AI to build a branching Scratch maze, then check every path by hand.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Trees in data and in machine learning, with the River Biss stream orders as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web builds with AI help, including a recursive function tested on messy real data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Trowbridge, Hilperton and the villages around them',
      intro: 'Places named in postcode data, and whether each one\'s nearest postcode lies in the Trowbridge built-up area.',
      body: [
        { kind: 'table', caption: 'Places near Trowbridge in postcodes.io, and whether the postcode nearest each one is in the ONS Trowbridge built-up area', head: ['Place', 'Type in postcodes.io', 'In the Trowbridge built-up area?'], rows: [
          ['Hilperton', 'Suburban area', 'Yes'],
          ['Hilperton Marsh', 'Suburban area', 'Yes'],
          ['Paxcroft Mead', 'Suburban area', 'Yes'],
          ['Studley Green', 'Suburban area', 'Yes'],
          ['Trowle Common', 'Suburban area', 'Yes'],
          ['Lower Studley', 'Suburban area', 'Yes'],
          ['Staverton', 'Village', 'No'],
          ['North Bradley', 'Village', 'No'],
          ['Southwick', 'Village', 'No'],
          ['Semington', 'Village', 'No']
        ] },
        { kind: 'p', text: 'For the built-up area the ONS published 43,750 people in 2021, a rounded number; Wiltshire as a whole, the unitary area, had 510,333. Longfield and Upper Studley are also suburban areas of the town in the same data. Wiltshire schools teach England\'s national curriculum; give us your holiday weeks and we plan around them.' },
        { kind: 'callout', h3: 'Wiltshire, the South West and our teaching', p: 'County-wide classes are on <a class="cg-inline-link" href="/coding-classes-in-wiltshire">coding classes in Wiltshire</a>, and the region is covered on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. We explain why reasoning comes before tools on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Trowbridge project',
      h2: 'Strahler stream order for the River Biss network',
      intro: 'Load the mapped streams, turn them into a network, and let a recursive function rank every stream from the headwaters down.',
      body: [
        { kind: 'p', text: 'The learner downloads every river and stream that OpenStreetMap volunteers have mapped in a box around Trowbridge, 350 lines in all, and joins them into a network in which each point knows the point downstream of it. Walking upstream from the spot just before the River Biss meets the River Avon collects the whole Biss network: 34.3 km of mapped channel. Strahler\'s rule is then three lines of recursion. A stream with nothing flowing into it has order 1. Where two streams of the same order meet, the order goes up by one. Where a smaller stream joins a larger one, the larger order simply carries on.' },
        { kind: 'table', caption: 'Streams of each Strahler order in the mapped River Biss network, after the split channel is handled (our Python run)', head: ['Strahler order', 'Number of streams', 'Mapped channel length'], rows: [
          ['1', '16', '12.0 km'],
          ['2', '5', '10.9 km'],
          ['3', '1', '11.3 km']
        ] },
        { kind: 'p', text: 'The first run said the Biss reaches order 4 where it meets the Avon. That was wrong, and finding out why is the real lesson. Less than a kilometre, in a straight line, before it reaches the Avon, the mapped river splits into two channels for about 62 m and then rejoins. The recursive function saw two order-3 streams meeting and duly raised the order. But they were one river, not two tributaries: the network was not a tree. Once the short side channel is treated as part of the main one, the Biss is order 3 at the Avon. Sixteen headwater streams feed it; five order-2 streams form where they meet, including Biss Brook and Lambrok Stream as named on the map, and order 3 begins south of the town where Bitham Brook meets another order-2 stream. The longest path from a headwater to the Avon runs 16.0 km.' },
        { kind: 'p', text: 'The same rule counts registers. A compiler turns a line such as (a+b)*(c+d) into a tree, and the Strahler number of that tree, known in computing as the Ershov number, is the fewest processor registers needed to work it out without saving anything to memory. Our Python version gives 2 for a*b + c, 3 for (a+b)*(c+d), and 4 for (a+b)*(c+d) + (e+f)*(g+h). The streams of the Biss and the arithmetic of a compiler are, to a recursive function, the same shape.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a tree of streams on paper, label the sources 1, and apply the joining rule until you reach the sea.' },
          { h3: 'Ages 11 to 15', p: 'Write the rule as a recursive Python function, test it on small drawn trees, then on the Biss network.' },
          { h3: 'Ages 15 and up', p: 'Load the map data, find the split channel, fix the network, and compare stream order with register counting.' }
        ] },
        { kind: 'callout', h3: 'Where the data comes from, and the limits', p: 'Map data is from OpenStreetMap contributors, available under the Open Database Licence. Only lines tagged as rivers or streams were used; ditches, drains and canals were left out, and anything unmapped is missing, so the counts describe the map rather than the ground. Direction comes from the mapping convention that waterways are drawn downstream. The network building, the fix for the split and all counts are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Trees in code and AI',
      h2: 'Why this matters for AI and programming',
      intro: 'Recursion is short and powerful, and it trusts that the data has the shape it expects.',
      body: [
        { kind: 'table', caption: 'From the River Biss to everyday programming and AI', head: ['In the Trowbridge run', 'In programming and AI'], rows: [
          ['Three lines of recursion ranked every stream', 'Recursive code is short when data is a tree'],
          ['One 62 m split made the answer 4 instead of 3', 'Code that assumes a tree fails quietly on a graph'],
          ['The error looked plausible', 'Check a result that surprises you against the data'],
          ['Stream order equals register count', 'One idea often solves problems in different fields'],
          ['The map shapes the answer', 'A model reflects the data it was given, gaps included']
        ] },
        { kind: 'p', text: 'Trees run through AI as well as rivers. Decision trees and tree ensembles make predictions by walking from a root to a leaf, parsers turn code into trees before anything runs, and an AI coding assistant will produce a tidy recursive function in seconds. What it will not do is notice that your data has a loop or a split in it. The Biss exercise trains exactly that instinct: when a recursive answer is off by one, check whether the input really is a tree. Agents come after independent Python, usually from sixth form, and Copilot Studio agents are only taught privately. Two longer reads: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents for UK students</a>, and why we insist learners <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code rather than copy-paste it</a>.' },
        { kind: 'p', text: 'OpenStreetMap contributors, the Office for National Statistics and postcodes.io provide the data we used and do not endorse this page. The analysis and code are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From paper streams to compilers',
    intro: 'Age suggests a starting point, and the free lesson confirms it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Rules, patterns and following a rule exactly, every time.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Branching games made with an AI helper and checked path by path.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, recursion and AI', p: 'Trees, graphs and models, alongside GCSE and A level computer science.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and AI', p: 'Solid Python, then data structures and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Programming and AI',
    h2: 'What is a tree data structure in programming?',
    intro: 'A tree is a way of organising data in which each item links to child items below it and never loops back, so every item can be reached from one root by exactly one path; folders, web pages, parsed code and river networks all take this shape.',
    p1: 'For the mapped River Biss network, a three-line recursive function ranked 16 headwater streams, 5 order-2 streams and one order-3 river, once one 62 m split channel had been treated as part of the main river.',
    p2: 'Before that fix the same function reported order 4, because a single split turned the tree into a graph and the code never checked.',
    closer: 'Trowbridge teenagers who have chased down that error will treat a neat AI-written function with healthy suspicion. The habit comes from writing and testing code yourself, which is why learning to program still matters in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'On the call',
    h2: 'Hilperton, Studley Green and Paxcroft Mead on a live call',
    intro: 'Any laptop or desktop with a webcam, on a standard home connection, will do.',
    cells: [
      { h3: 'The learner writes', p: 'Our tutors keep their hands off the keyboard: the learner types, and explains each part before running it.' },
      { h3: 'Levelled by the trial', p: 'The free lesson tells us the starting point, and we note any exam board.' },
      { h3: 'Start free', p: 'The trial is free, no card is taken, and it ends with a course we suggest.' },
      { h3: 'One level per group', p: 'Groups of five to ten learners at the same stage, from across the UK.' },
      { h3: 'Two a week', p: 'Holiday weeks you tell us about stay clear.' },
      { h3: 'A fixed local time', p: 'Our tutors adjust for the spring and autumn clock changes so you never have to.' }
    ],
    spec: { title: 'Why lessons are online', p: 'A group where everyone is at one level needs many learners to choose from. A single town rarely has enough; the UK as a whole does.' }
  },

  fees: {
    h2: 'Trowbridge fees',
    intro: 'Trowbridge learners pay our international rates, which apply everywhere except India.',
    first: 'A free lesson of normal length with a course recommendation at the end.',
    group: 'About eight live lessons a month in a group.',
    private: 'About eight live lessons a month with your own tutor.',
    closer: 'All fees are in US dollars and no pound figure is quoted. Billing waits until after the trial, once you have picked a course and a weekly time; for holidays, absences or a switch between group and private, see the pricing page.'
  },

  reviewsH2: 'What Wiltshire parents and UK learners say on Google',

  book: {
    h2: 'Book a free lesson for Trowbridge',
    intro: 'Tell us an age or school year and something the learner enjoys. The trial might be a stream-numbering puzzle, a branching Scratch game built with AI, first Python, or a recursive function on real map data.',
    success: 'Thank you. Your Trowbridge request is in and we will reply soon.'
  },

  faq: {
    h2: 'Trowbridge questions',
    intro: 'Stream order, recursion, coding, AI and the practical side.',
    items: [
      { q: 'How many people live in Trowbridge?', a: 'The ONS counted 43,750 residents in the Trowbridge built-up area at the 2021 census, within Wiltshire\'s 510,333.' },
      { q: 'Do you teach AI and programming online in Trowbridge?', a: 'Yes. Every lesson is a live video call, so learners aged 6 to 67 in Hilperton, Paxcroft Mead, Studley Green, Staverton and beyond can all join.' },
      { q: 'What is Strahler stream order?', a: 'A way of ranking streams: headwaters are order 1, two streams of equal order meeting make the next order up, and a smaller stream joining a larger one leaves the order unchanged.' },
      { q: 'What is recursion used for?', a: 'Solving a problem by solving smaller copies of it, which suits anything shaped like a tree: folders, menus, parsed code and river networks.' },
      { q: 'What happens in the Trowbridge project?', a: 'Learners load the mapped streams of the River Biss in Python, rank them with a recursive function, and find the 62 m split channel that made the first answer wrong.' },
      { q: 'Is vibe coding part of it?', a: 'Yes, at every age. The learner asks an AI for code and then tests it, here on data that does not match what the code assumed.' },
      { q: 'At what stage do agents come in?', a: 'After a learner can write Python unaided, typically sixth form or later. Copilot Studio agent work happens in private lessons only.' },
      { q: 'Do you cover GCSE and A level computer science?', a: 'Yes, and maths, with understanding as the aim. We do not promise grades.' },
      { q: 'What are the fees?', a: 'The first lesson is free; then USD 100 a month for a group place or USD 150 a month for private lessons.' },
      { q: 'Do lessons pause in the holidays?', a: 'If you want them to. Send the dates and we keep them free.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Trowbridge',
    h2: 'More pages for Wiltshire and the South West',
    html: 'Further projects are on the <a class="cg-inline-link" href="/best-coding-class-in-bath">Bath</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-swindon">Swindon</a> and <a class="cg-inline-link" href="/best-coding-class-in-salisbury">Salisbury</a> pages, with the county on <a class="cg-inline-link" href="/coding-classes-in-wiltshire">Wiltshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to every other town.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Trowbridge and Wiltshire',
  footerPlaces: [
    { href: '/coding-classes-in-wiltshire', label: 'Wiltshire' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-trw .cg-hero-grid { align-items: stretch; gap: clamp(1.15rem, 3.4vw, 2.9rem); }
.cg-root.cg-trw .cg-hero h1 { font-weight: 740; letter-spacing: -0.028em; line-height: 1.06; }
.cg-root.cg-trw .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.8rem 0.95rem; }
.cg-root.cg-trw .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-trw .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.017em; }
.cg-root.cg-trw .cg-table caption { text-align: left; font-size: 0.89rem; font-weight: 600; }
.cg-root.cg-trw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-trw .cg-table th { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.045em; }
.cg-root.cg-trw .cg-ladder-col { border-top: 1px solid var(--cg-accent); border-left: 3px solid var(--cg-accent); padding: 0.6rem 0 0 0.8rem; }
.cg-root.cg-trw .cg-callout { border-left-width: 7px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Wiltshire (E06000054), Census 2021 TS001 usual residents 510,333 (printed on the page; already a requiredMention elsewhere). ONS 2021 BUA Trowbridge 43,750 (published). postcodes.io: suburban areas with nearest postcode in the Trowbridge BUA: Hilperton, Hilperton Marsh, Paxcroft Mead, Studley Green, Trowle Common, Longfield, Lower Studley, Upper Studley. Villages whose nearest postcode is outside it: Staverton (none), North Bradley (North Bradley BUA), Southwick (Southwick BUA), Semington (Semington BUA), Holt (Holt BUA).',
    localProject: 'OpenStreetMap via one Overpass query: waterway=river|stream in 51.22 to 51.37 N, 2.32 to 2.10 W, 350 ways, directed downstream by mapping convention. Outlet: last River Biss node before the River Avon confluence, 51.33675 N 2.21554 W. Upstream network 1,931 nodes, 34.3 km. One bifurcation: split at 51.33071 N 2.21149 W, side channel about 62 m rejoining at 51.33108 N 2.21074 W. Naive recursive Strahler order at outlet 4; with the side channel merged into the main channel, 3. Corrected: 1,929 nodes, 34.2 km; 16 sources; streams by order 16 / 5 / 1; bifurcation ratios 3.2 and 5.0; length by order 12.0 / 10.9 / 11.3 km; longest source-to-outlet channel 16.0 km. Order 3 begins at 51.2798 N 2.1865 W (Bitham Brook as named in OSM meets an unnamed order-2 stream); Biss Brook (order 2) joins at 51.2907 N 2.2014 W; Lambrok Stream (order 2) joins at 51.3216 N 2.2204 W. Ershov numbers: a*b + c = 2, (a+b)*(c+d) = 3, (a+b)*(c+d) + (e+f)*(g+h) = 4. Lesson family: Strahler stream order by recursion; tree vs graph; Ershov number and register allocation.',
    requiredMentions: [
      '43,750',
      'Hilperton',
      'Paxcroft Mead',
      'Studley Green',
      'Trowle Common',
      'Strahler',
      'Ershov',
      'River Biss',
      'Lambrok Stream',
      'Bitham Brook',
      '34.3 km'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors: rivers and streams around Trowbridge, via the Overpass API, under the Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Strahler A. N. (1957), Quantitative analysis of watershed geomorphology, Transactions American Geophysical Union 38(6), 913 to 920.', url: 'https://doi.org/10.1029/TR038i006p00913' },
      { claim: 'Flajolet P., Raoult J.-C. and Vuillemin J. (1979), The number of registers required for evaluating arithmetic expressions, Theoretical Computer Science 9(1), 99 to 125.', url: 'https://doi.org/10.1016/0304-3975(79)90009-4' },
      { claim: 'ONS Census 2021 TS001 usual residents and 2021 built-up area populations; postcodes.io places and nearest postcodes.', url: 'https://www.nomisweb.co.uk/sources/census_2021' }
    ],
    rejectedClaims: [
      'Why the River Biss splits at that point (mill, weir or park channel): not read from a source; only the mapped split is reported.',
      'That Trowbridge is the county town of Wiltshire: not claimed on this page.',
      'That the counts describe every stream on the ground: rejected; they describe mapped rivers and streams only.',
      'Wool or cloth history of Trowbridge: not read from a source; not claimed.',
      'Rank of Trowbridge among Wiltshire towns: not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
