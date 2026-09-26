'use strict';
// Fife (cg- council area page, UK cluster Phase 7, row 266). One council. Spine: how does a bridge made of straight bars
// hold up a train, and how can a computer tell whether it will? Anchor (read raw 26 September 2026): Historic Environment
// Scotland LB9977, Category A, Forth Bridge (Fife listing; also listed in Edinburgh as LB40370): "Sir John Fowler and Sir
// Benjamin Baker, 1883-90"; "2.5 kilometre, painted steel, cantilever railway bridge"; "3 giant, cross-braced, steel tower
// structures"; "2 full cantilevered spans (each being 521 metres long with a 107 metre suspended span truss to centre)";
// "It took a five thousand strong workforce seven years to build it using more than fifty thousand tonnes of Siemens-
// Martin open-hearth steel and 8 million rivets"; "Benjamin Baker conducted experiments on wind pressure using a set of
// gauges"; "spans nearly four times larger than any railway bridge previously built"; "opened seven years later, on 4th
// March 1890"; "around 200 trains passing over it each day (2013)"; "Forth Bridge Red"; "Similar in shade to iron oxide".
// Our model (scratchpad fif/truss.py; an invented 3-bay cantilever frame, not the bridge): bays 4 m wide and 4 m tall,
// pinned to a wall top and bottom, 10 kN hanging at the tip. Method of joints: 16 equations, 16 unknowns (12 bars and 4
// support forces), full rank. Top chord 20, 10, 0 kN tension from the wall out; bottom chord 30, 20, 10 kN compression;
// diagonals 14.14 kN tension each; verticals 10, 10, 0 kN compression; two zero-force bars. Hand check by moments: bottom
// chord at the wall = 10 x 12 / 4 = 30. Remove diagonal T1-B2: 16 equations, 15 unknowns, inconsistent (mechanism).
// Add bar B1-T2: 17 unknowns, rank 16, one free unknown (statically indeterminate). Height 2 m: chords 40 and 60.
// Lesson family: truss statics as a linear system, rank and solvability; screened (cantilever, truss: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Fife S12000047 370,400; 169,600 households; 279.5 per square
// kilometre; 0 to 14 57,600 (15.6 per cent), 65+ 80,000 (21.6 per cent) by our addition. NRS mid-2020 localities.
// Dunfermline has its own city page (Carnegie lesson); linked, not repeated. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'FIFE', blurb: 'Kirkcaldy, Glenrothes, St Andrews and Dunfermline, and a Forth Bridge lesson on how a frame of straight bars carries a load.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-fife',
  code: 'fif',
  accent: '#7A3512',
  accentRationale: 'Fife: a rust red after the listing\'s note that Forth Bridge Red is similar in shade to iron oxide; solver pick at 7.21:1 on the darkest paper tint, oranger than the Clackmannanshire and Shropshire reds',
  pageType: 'governorate',
  place: {
    name: 'Fife',
    eyebrow: 'Fife',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Dunfermline', href: '/best-coding-class-in-dunfermline' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Fife',
  title: 'Coding Classes in Fife | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Fife, from Kirkcaldy, Glenrothes and Dunfermline to St Andrews, Rosyth, Methil, Cupar and Lochgelly.',
  ogDescription: 'Coding classes for all of Fife, and a Forth Bridge project: solve a cantilever frame as equations in Python and learn how a computer spots a structure that cannot stand.',
  twitterDescription: 'Fife coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Fife',
    description: 'Ability-placed online coding, Python, engineering maths and simulation for children, teenagers and adults across Fife, taught live in English.'
  },

  h1: 'Coding classes in Fife',
  capsuleQ: 'What are the best coding classes in Fife?',
  capsule: 'Fife is one of Scotland\'s larger council areas, with about 370,400 residents in roughly 169,600 households at the 2022 census. Dunfermline and Kirkcaldy are the two largest places, followed by Glenrothes and St Andrews, and there are dozens of smaller places from Burntisland to Cupar. Teachers in India run every class live on camera, and a free first lesson shows which stage suits each learner, from P1 through S6 and into adult life. Learners aged 6 to 67 study coding, Python and maths, either one-to-one or in groups of five to ten. The Fife project is built around the Forth Bridge. Once the free lesson is done, fees are USD 100 a month in a group or USD 150 a month for one-to-one.',
  lead: 'Historic Environment Scotland lists the Forth Bridge at Category A and gives its designers as Sir John Fowler and Sir Benjamin Baker, building from 1883 until it opened on 4 March 1890. The listing describes a 2.5 kilometre steel cantilever railway bridge with three giant cross-braced towers, and says the design allowed spans nearly four times larger than any railway bridge before it. Every part of a bridge like that is a straight bar, pulled or pushed along its length, joined to others at the ends. How do engineers know how hard each bar is pulled or pushed, and how would they know if a frame could not stand at all? This page\'s project does the calculation in Python for a small, invented cantilever.',
  wa: 'Hello Modern Age Coders, we are in Fife and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Fife',
    h2: 'Four good first courses in Fife',
    intro: 'A P2 pupil in Kirkcaldy, an S1 in Glenrothes who likes building things, an S5 in Cupar taking Higher Maths, an adult in Rosyth moving into engineering software. Each starts with one free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects from the first click, including games where things stack, balance and fall.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Python for teenagers, from lists and loops to programs that solve systems of equations.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth: vectors, trigonometry and simultaneous equations, all used on bridges.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults starting from nothing, up to scientific and engineering scripts.' }
    ]
  },

  sections: [
    {
      id: 'fife', tint: '', eyebrow: 'Fife by numbers',
      h2: 'About 370,400 people across the Kingdom',
      intro: 'Headline figures are National Records of Scotland\'s rounded first results from the 2022 census. Town populations are separate NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Fife localities above 7,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Dunfermline', '54,990', 'Methil', '10,890'],
          ['Kirkcaldy and Dysart', '50,370', 'Dalgety Bay and Hillend', '9,710'],
          ['Glenrothes', '38,360', 'Leven', '9,420'],
          ['St Andrews', '18,410', 'Cupar', '8,960'],
          ['Rosyth', '13,570', 'Lochgelly', '7,300'],
          ['Cowdenbeath and Lumphinnans', '12,030', '', '']
        ] },
        { kind: 'p', text: 'At 279.5 residents per square kilometre, Fife is four times as densely settled as Scotland overall (69.8). Our own addition of the census age bands gives 15.6 per cent of Fife residents under 15, almost exactly the Scottish 15.3, and 21.6 per cent aged 65 or more, above Scotland\'s 20.1. Burntisland, Inverkeithing, Kelty and Cardenden are among the many towns below the table. Fife Council sets the school terms; we have not read its calendar, so families give us their own holiday dates.' },
        { kind: 'callout', h3: 'Dunfermline and the exams', p: 'Dunfermline has its own page, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a>, with a different project. For the senior phase see <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Fife project',
      h2: 'Twelve bars, sixteen equations',
      intro: 'A frame sticking out from a wall, a weight at the tip, and a computer that works out every force.',
      body: [
        { kind: 'p', text: 'The frame is invented and far simpler than the real bridge. It sticks straight out from a wall in three square bays, each 4 metres wide and 4 metres tall, with a top rail, a bottom rail, an upright at the end of each bay and one diagonal across each. It is pinned to the wall at the top and bottom, and a load of 10 kilonewtons, roughly the weight of a tonne, hangs from the tip. At every joint the pushes and pulls must balance, left against right and up against down. That gives two equations per joint: sixteen equations for sixteen unknowns, the forces in twelve bars plus four forces from the wall.' },
        { kind: 'table', caption: 'Our solved cantilever frame, forces in kilonewtons, 26 September 2026', head: ['Bars', 'Nearest the wall', 'Middle bay', 'Tip bay'], rows: [
          ['Top rail', '20 pulled (tension)', '10 pulled', '0'],
          ['Bottom rail', '30 pushed (compression)', '20 pushed', '10 pushed'],
          ['Diagonal', '14.14 pulled', '14.14 pulled', '14.14 pulled'],
          ['Upright', '10 pushed', '10 pushed', '0']
        ] },
        { kind: 'p', text: 'The learner builds the equations in Python and solves them with Gaussian elimination, the same method taught for simultaneous equations, only bigger. The pattern makes sense: the top rail is stretched and the bottom rail squashed, both most strongly near the wall where the bending is greatest. A hand check confirms it: taking moments about the top wall pin, 10 kilonewtons at 12 metres out must be resisted by the bottom rail 4 metres below, so 10 times 12 divided by 4 gives 30. Two bars at the tip carry nothing under this load, yet they matter as soon as the load moves.' },
        { kind: 'p', text: 'Now the real lesson. Delete one diagonal and try again. There are still sixteen equations but only fifteen unknowns, and elimination finds a contradiction: no set of forces can balance the load. The frame has become a mechanism and would fold. Add an extra diagonal instead and the opposite happens: seventeen unknowns, only sixteen independent equations, and one force is left undetermined, because the answer now depends on how stretchy each bar is. The rank of the system tells the computer which of the three cases it is in. Halve the height of the frame to 2 metres and the rail forces double to 40 and 60, which is why deep frames are efficient.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build square and triangular frames from straws and pins, push the corners, and record which shapes hold.' },
          { h3: 'Ages 11 to 15', p: 'Balance forces at a single joint in Python using angles, then solve a two-bay frame with simultaneous equations.' },
          { h3: 'Ages 15 and up', p: 'Assemble the full matrix, write Gaussian elimination, and use the rank to classify stable, collapsing and over-braced frames.' }
        ] },
        { kind: 'callout', h3: 'A classroom frame, not the bridge', p: 'The dimensions, the load and every force in the table are invented for teaching. They say nothing about the Forth Bridge\'s real members or loads, which the listing does not give.' }
      ]
    },
    {
      id: 'forth-bridge', tint: 'deep', eyebrow: 'Why the Forth Bridge',
      h2: 'Steel, rivets and a famous red',
      intro: 'Figures quoted from the Historic Environment Scotland listing, each on its own terms.',
      body: [
        { kind: 'table', caption: 'The Forth Bridge in its listing, HES LB9977', head: ['Listing says', 'Detail'], rows: [
          ['Length and type', '2.5 kilometre painted steel cantilever railway bridge'],
          ['Main spans', 'Two full cantilevered spans, each 521 metres, with a 107 metre suspended truss at the centre'],
          ['Building it', 'A workforce of five thousand, seven years, more than fifty thousand tonnes of steel and 8 million rivets'],
          ['Testing', 'Benjamin Baker measured wind pressure with gauges on the Forth shoreline'],
          ['Use', 'Around 200 trains a day (the listing\'s 2013 figure)'],
          ['Colour', 'Forth Bridge Red, similar in shade to iron oxide']
        ] },
        { kind: 'p', text: 'The same arithmetic that balances a classroom frame runs inside structural engineering software, crane controllers, game physics engines and the apps that check roof trusses before a builder orders timber. The step that turns a drawing into equations, and the check on whether those equations can be solved at all, is where coding meets engineering. A Fife pupil who has watched one missing bar make the maths impossible will look at bridges differently.' },
        { kind: 'p', text: 'Historic Environment Scotland and Fife Council have no link with us. The listing facts are theirs; the frame, the calculations and any mistakes in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From straw frames to matrices',
    intro: 'A free lesson finds the right rung. The stages below are only a starting guess.',
    cols: [
      { band: 'P1 to P4', h3: 'Build and test', p: 'Block coding games about stacking, balancing and falling.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Numbers that balance', p: 'Typed Python with angles, forces and simple equations turned into code.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Systems of equations', p: 'Matrices, vectors and bigger programs alongside National 5, Higher and Advanced Higher Maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Engineering scripts', p: 'Python for adults who calculate, model and check at work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and structures',
    h2: 'An AI can solve a frame in seconds. Will it tell you when there is no answer?',
    intro: 'A number printed on screen is not always a solution.',
    p1: 'Ask a chatbot to solve a set of truss equations and it may reach for a least-squares routine that always returns numbers, even for a frame that would collapse. The output looks exactly like a real answer. Only a check of the rank, or of whether the forces really balance, reveals the problem.',
    p2: 'A Fife student who has deleted a diagonal and seen elimination fail knows to ask whether a solution exists before trusting what a program prints. That instinct protects them whenever AI writes their code.',
    closer: 'So for a teenager in Fife, learning to code in 2026 means being able to tell an answer from a number.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Online across the Kingdom of Fife',
    intro: 'From Burntisland to the East Neuk, a laptop at home is all a learner needs.',
    cells: [
      { h3: 'Code on your own screen', p: 'The learner types, runs and fixes the program, and the teacher sees each step through screen sharing.' },
      { h3: 'We speak Curriculum for Excellence', p: 'P4, S3, National 5, Higher, Advanced Higher: we use the stages Fife schools use, and we teach in English.' },
      { h3: 'Free lesson, honest advice', p: 'The first lesson is a proper lesson and costs nothing. Afterwards we say which course fits.' },
      { h3: 'Groups sorted by stage', p: 'Five to ten learners at one level in each group, often from several countries.' },
      { h3: 'Holidays off', p: 'Two lessons a week in term time, with breaks in the school holidays you tell us.' },
      { h3: 'Same UK time all year', p: 'Your lesson stays at its UK time through both clock changes; the India time side is ours to adjust.' }
    ],
    spec: { title: 'Why classes are not by town', p: 'Kirkcaldy is large, but five pupils at one stage free on the same evening is still a long shot. Grouping by stage across a bigger pool finds the right class for someone in Methil or Lochgelly too.' }
  },

  fees: {
    h2: 'What lessons cost in Fife',
    intro: 'St Andrews or Cowdenbeath, the price is the same, and it is the price outside India everywhere we teach.',
    first: 'A full, free lesson, then a clear suggestion for what comes next.',
    group: 'About eight lessons a month in a group of five to ten at one stage.',
    private: 'About eight lessons a month with the teacher\'s full attention.',
    closer: 'Our fees are set in US dollars, and we have no sterling price list. We charge only after the free lesson, once a course and weekly time are fixed; the pricing page covers holidays, missed lessons and moving between group and one-to-one.'
  },

  reviewsH2: 'Google reviews of our classes',

  book: {
    h2: 'Book a free Fife lesson',
    intro: 'Let us know the learner\'s age or school stage and one interest. The free lesson could be a Scratch balancing game, a first Python program, or the cantilever frame on this page.',
    success: 'Thank you. We have received your Fife request.'
  },

  faq: {
    h2: 'Fife questions',
    intro: 'Fife in numbers, the Forth Bridge project, and how classes run.',
    items: [
      { q: 'What is the population of Fife?', a: 'About 370,400 people in roughly 169,600 households, from the rounded first results of Scotland\'s 2022 census.' },
      { q: 'Which are the largest towns in Fife?', a: 'By NRS mid-2020 locality estimates, Dunfermline (54,990), Kirkcaldy and Dysart (50,370), Glenrothes (38,360) and St Andrews (18,410).' },
      { q: 'What is the Forth Bridge project?', a: 'Learners solve an invented three-bay cantilever frame as sixteen equations in Python, find which bars are pulled and pushed, then remove or add a bar and use the rank of the system to see why the frame collapses or becomes over-braced.' },
      { q: 'What is a cantilever?', a: 'A structure fixed at one end and free at the other, like a diving board. The Forth Bridge listing describes three towers each balancing two cantilevered arms.' },
      { q: 'When did the Forth Bridge open?', a: 'On 4 March 1890, according to its Historic Environment Scotland listing, which gives the designers as Sir John Fowler and Sir Benjamin Baker.' },
      { q: 'Where do lessons take place?', a: 'Online. Learners in Glenrothes, Inverkeithing or the East Neuk all join from home.' },
      { q: 'Do you teach Higher Maths in Fife?', a: 'Yes, online, along with National 5 Maths and Computing Science. We focus on understanding and never promise results.' },
      { q: 'What ages do you teach?', a: 'Every age from 6 to 67. Blocks for young children, Python and exam maths for secondary pupils, and Python for adults from scratch.' },
      { q: 'How much are lessons?', a: 'A free first lesson, then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'What about Fife school holidays?', a: 'We stop for them. Just send us your school\'s holiday dates.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages around Fife',
    html: 'Try <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a>, <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> and <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a>, or the complete council list on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Fife and around',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-dunfermline', label: 'Dunfermline' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-fif .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.4vw, 2.8rem); }
.cg-root.cg-fif .cg-hero h1 { font-weight: 750; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-fif .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-fif .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fif .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.02em; }
.cg-root.cg-fif .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-fif .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fif .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-fif .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-fif .cg-callout { border-left-width: 6px; border-radius: 0 4px 4px 0; }
`,

  dossier: {
    curriculumAuthority: 'Fife (S12000047), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 370,400 (females 190,900, males 179,500); households 169,600; density 279.5 per square kilometre (Scotland 69.8); ages 0 to 14 57,600 (15.6 per cent), 65+ 80,000 (21.6 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Dunfermline 54,990; Kirkcaldy and Dysart 50,370; Glenrothes 38,360; St Andrews 18,410; Rosyth 13,570; Cowdenbeath and Lumphinnans 12,030; Methil 10,890; Dalgety Bay and Hillend 9,710; Leven 9,420; Cupar 8,960; Lochgelly 7,300; Kelty (part) 6,760; Burntisland 6,630. HES LB9977 (Category A, added 18/06/1973), Forth Bridge, parish Inverkeithing: "Sir John Fowler and Sir Benjamin Baker, 1883-90"; "2.5 kilometre, painted steel, cantilever railway bridge"; "3 giant, cross-braced, steel tower structures"; "each being 521 metres long with a 107 metre suspended span truss to centre"; "five thousand strong workforce seven years ... more than fifty thousand tonnes of Siemens-Martin open-hearth steel and 8 million rivets"; "Benjamin Baker conducted experiments on wind pressure using a set of gauges that he installed on the Forth shoreline"; "spans nearly four times larger than any railway bridge previously built"; "on 4th March 1890"; "around 200 trains passing over it each day (2013)"; "Forth Bridge Red"; "Similar in shade to iron oxide".',
    localProject: 'Invented 3-bay cantilever, bays 4 m x 4 m, pinned top and bottom at wall, 10 kN at tip bottom. 16 equations, 16 unknowns, rank 16. Top chord 20/10/0 T; bottom 30/20/10 C; diagonals 14.14 T; verticals 10/10/0 C; zero-force T2-T3, T3-B3. Hand check moments about T0: 10 x 12 / 4 = 30. Remove T1-B2: 15 unknowns, inconsistent. Add B1-T2: 17 unknowns, rank 16, one free. Height 2 m: 40 and 60. AI angle: least squares returns numbers for a mechanism. Lesson family: truss statics, Gaussian elimination, rank.',
    requiredMentions: [
      'Burntisland',
      'Kelty',
      'Forth Bridge',
      'LB9977',
      'cantilever',
      'Benjamin Baker',
      'Kirkcaldy',
      'Glenrothes',
      'Cowdenbeath',
      'Methil',
      'Cupar',
      'Lochgelly',
      'Dalgety Bay'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB9977: Forth Bridge.', url: 'https://portal.historicenvironment.scot/designation/LB9977' }
    ],
    rejectedClaims: [
      'Member forces or loads in the real Forth Bridge: not in the listing, not claimed.',
      'Tay Bridge disaster details: in the listing but not used on this page.',
      'UNESCO World Heritage status: not read from a primary source today, not claimed.',
      'Painting cycle myths: only the listing\'s paint facts considered; not used.',
      'Named Fife schools and school term dates: none named or read.'
    ]
  }
};
