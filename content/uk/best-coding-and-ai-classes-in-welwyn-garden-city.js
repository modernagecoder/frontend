'use strict';
// Welwyn Garden City (cg- town page, UK cluster Phase 10, towns band B, row 505). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which places count as
// neighbours, if you refuse to pick a number or a distance? (Gabriel graph and relative neighbourhood graph.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup and ONS population-weighted centroids (British National
// Grid) for the 170 output areas of the Welwyn Garden City built-up area in Welwyn Hatfield (E07000241).
// Our run (scratchpad wgc/gg.py), straight-line distance, 14,365 pairs of centres. Gabriel graph: 344 links, 94.7 km
// in total, mean 275 m, longest 866 m, 4.05 links per centre on average, most 6, fewest 1, one connected piece.
// Relative neighbourhood graph: 213 links, 50.1 km, mean 235 m, longest 751 m, 2.51 per centre, most 4, one piece; every
// one of its links is also a Gabriel link. Closest-only rule: 116 links, 54 separate pieces. Three closest: 308 links,
// longest 1,142 m, most 7, one piece. Everything within 300 m: 283 links, 12 pieces, 5 centres with no link. Within
// 500 m: 775 links, 3 pieces, 2 with no link, most 17. Closest two centres 58 m apart.
// Lesson family: Gabriel graph and relative neighbourhood graph (proximity graphs). Screened: "gabriel graph",
// "relative neighbourhood graph", "proximity graph" 0 hits in content/; claimed in claims.txt. Hertfordshire county
// page = latency and the control loop; Stevenage, Watford, Hemel Hempstead and St Albans hold other families.
// Place facts: Welwyn Hatfield TS001 119,836. ONS 2021 BUA (published): Welwyn Garden City 51,505. postcodes.io
// suburban areas whose closest postcode is in the BUA: Panshanger, Haldens, Peartree, Hatfield Hyde, Woodhall,
// Hall Grove (AL7), Handside, Sherrardspark (AL8), Digswell (AL6).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WELWYN GARDEN CITY', label: 'Welwyn Garden City', blurb: 'Coding and AI classes for Welwyn Garden City, with a project that asks which of 170 neighbourhood centres count as neighbours and answers it with Gabriel graphs.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-welwyn-garden-city',
  code: 'wgc',
  accent: '#0E1147',
  accentRationale: 'Welwyn Garden City: a midnight blue (17.6:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Welwyn Garden City',
    eyebrow: 'Welwyn Garden City, Welwyn Hatfield, Hertfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Welwyn Garden City, Hertfordshire',
  title: 'Coding and AI Classes in Welwyn Garden City | Ages 6 to 67',
  description: 'Live online coding and AI classes for Welwyn Garden City, Panshanger, Haldens and Handside: Python, vibe coding and agents, ages 6 to 67. Free first lesson.',
  ogDescription: 'Coding and AI classes for Welwyn Garden City, with a neighbour-graph project on 170 census area centres.',
  twitterDescription: 'Welwyn Garden City coding, Python and AI lessons, live online, ages 6 to 67. Try one free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Welwyn Garden City',
    description: 'Coding, Python, AI and maths lessons taught live online to children, teenagers and adults in Welwyn Garden City and Welwyn Hatfield, with geometry problems where the definition is the hard part.'
  },

  h1: 'Coding and AI classes in Welwyn Garden City',
  capsuleQ: 'Which coding and AI classes are best in Welwyn Garden City?',
  capsule: 'Welwyn Garden City had 51,505 usual residents as an ONS built-up area in 2021, and the borough of Welwyn Hatfield had 119,836. Its gazetteer suburbs include Panshanger, Haldens, Peartree, Hatfield Hyde, Woodhall, Handside and Sherrardspark. Modern Age Coders teaches coding, AI, Python, vibe coding and maths to people there between six and 67 years old. A tutor in India leads every lesson by live video, for a single learner or for five to ten learners of matching level. We spend time on definitions, because a program can only do what has been defined. In the Welwyn Garden City project, learners decide what "neighbouring" means for 170 census area centres and compare two rules from geometry with the usual shortcuts. You can try a lesson free, then join a group for USD 100 a month or learn one-to-one for USD 150 a month.',
  lead: 'Ask which places are neighbours and most people reach for a number: the three closest, or everything within 500 metres. Both answers need someone to choose the number, and the choice is arbitrary. In 1969 Ruben Gabriel and Robert Sokal, who were studying how animal populations vary from place to place, proposed a rule with no number in it at all. Two places are neighbours if the circle drawn with them at opposite ends of a diameter has nobody else inside. Eleven years later Godfried Toussaint proposed a stricter cousin. Learners code both and see what each one decides about a real town.',
  wa: 'Hello Modern Age Coders, we are in Welwyn Garden City and would like to try a free coding or AI lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Coding and AI courses for Welwyn Garden City',
    intro: 'Choose the age band that fits. The first live lesson of any course is free and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: turning a fuzzy word such as "near" into a rule that can be checked.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: Scratch games built with AI help, tested by the child who designed them.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including geometry in code and the neighbour-graph project.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Graphs, trees and algorithm design, the groundwork for machine learning and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Town facts',
      h2: 'Welwyn Garden City, Panshanger, Haldens and Handside',
      intro: 'Two census figures and nine suburb names, with their sources.',
      body: [
        { kind: 'table', caption: 'Census 2021, usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Welwyn Garden City built-up area', '51,505'],
          ['Welwyn Hatfield borough', '119,836']
        ] },
        { kind: 'p', text: 'The borough total also covers Hatfield, Welwyn, Brookmans Park and Cuffley, so it is a separate count on a wider boundary. In the postcode gazetteer, Panshanger, Haldens, Peartree, Hatfield Hyde, Woodhall and Hall Grove are suburban areas in AL7, Handside and Sherrardspark are in AL8 and Digswell is in AL6; for each one, the closest postcode is assigned to the Welwyn Garden City built-up area. Schools teach the English national curriculum, and a year group from Year 2 to Year 13 is a good way to tell us where a learner is. We work alongside GCSE and A level computer science.' },
        { kind: 'callout', h3: 'Hertfordshire pages', p: 'Our Hertfordshire set has the <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">county page</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a> and <a class="cg-inline-link" href="/best-coding-class-in-st-albans">St Albans</a>. For the idea behind our lessons, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Welwyn Garden City project',
      h2: 'Gabriel graphs: deciding who is a neighbour without picking a number',
      intro: 'One set of 170 points and six different answers to the same plain question.',
      body: [
        { kind: 'p', text: 'The ONS divides the Welwyn Garden City built-up area into 170 census output areas and publishes a centre for each one, weighted by where people live. That makes 14,365 possible pairs. The learner starts with the obvious rules. Link each centre to its single closest centre and the map shatters into 54 separate pieces. Link everything within 300 metres and five centres have no neighbour at all while the town is in 12 pieces. Stretch that to 500 metres and the opposite problem appears: one centre has 17 neighbours.' },
        { kind: 'p', text: 'The Gabriel rule needs no setting. For a pair A and B, imagine the circle with A and B at opposite ends of its diameter. If any third centre is inside, A and B are not neighbours, because something stands between them. In Python this is a single comparison of squared distances. Toussaint\'s relative neighbourhood rule is stricter: A and B are linked only if no third centre is closer to both of them than they are to each other.' },
        { kind: 'table', caption: 'Six neighbour rules on the same 170 centres, straight-line distance, our Python run', head: ['Rule', 'Links', 'Separate pieces', 'Most links at one centre'], rows: [
          ['Closest one only', '116', '54', '3'],
          ['Closest three', '308', '1', '7'],
          ['All within 300 m', '283', '12', '7'],
          ['All within 500 m', '775', '3', '17'],
          ['Gabriel graph', '344', '1', '6'],
          ['Relative neighbourhood graph', '213', '1', '4']
        ] },
        { kind: 'p', text: 'Both geometric rules joined the whole town into one piece and kept the links even: between one and six per centre for Gabriel, averaging 4.05, and between one and four for the relative neighbourhood graph, averaging 2.51. The Gabriel links total 94.7 km with a mean of 275 metres and a longest of 866 metres; the rule stretches where centres are sparse and tightens where they are dense, which a fixed radius cannot do. Every relative neighbourhood link is also a Gabriel link, and every closest-one link is in both. The learner checks that in code instead of taking it on trust.' },
        { kind: 'p', text: 'The closest-three rule happened to give one piece here too, but nothing guarantees it, and its longest link was 1,142 metres. These are straight lines between area centres and say nothing about roads, paths or what lies between. The closest two centres are 58 metres apart.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pins on a board, a loop of string as the circle: is anyone inside? Link the pair if not.' },
          { h3: 'Ages 11 to 15', p: 'Write the circle test in Python with squared distances and draw the links for twenty points.' },
          { h3: 'Ages 15 and up', p: 'Build all six graphs for the 170 centres, count their pieces, and test which graphs contain which.' }
        ] },
        { kind: 'callout', h3: 'Data and credit', p: 'The centres are ONS population-weighted centroids for 2021 output areas, published under the Open Government Licence. The two rules are from Gabriel and Sokal (1969) and Toussaint (1980). The comparison and every number in the table are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'The AI connection',
      h2: 'What neighbour rules teach about AI and vibe coding',
      intro: 'Many AI methods begin by deciding which examples are close to which.',
      body: [
        { kind: 'table', caption: 'From the Welwyn Garden City graphs to AI work', head: ['In the project', 'In AI and coding'], rows: [
          ['"Closest one" broke the town into 54 pieces', 'A plausible default can fail badly; run it and look'],
          ['300 m and 500 m gave opposite problems', 'A fixed setting rarely suits dense and sparse data at once'],
          ['Gabriel needed no setting', 'Prefer definitions over tuned numbers when one exists'],
          ['Six rules gave six different maps', 'Ask which definition a tool used before trusting its output'],
          ['Containment was checked in code', 'Verify a claimed property instead of assuming it']
        ] },
        { kind: 'p', text: 'Recommendation engines, clustering tools and nearest-neighbour classifiers all start from a rule about who is near whom, and the number of neighbours is usually a setting somebody picked. Welwyn Garden City learners see how much rides on it. They also practise vibe coding, where you describe the program to an AI and refine its draft: ask for "a neighbour graph" and the assistant will choose a rule and a number without saying so, and the learner\'s job is to notice. AI agents are taught once Python is solid, generally to older teenagers and adults, and Copilot Studio agents are one-to-one only. More on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'The Office for National Statistics and postcodes.io are unconnected with Modern Age Coders. We used their published data; the graphs and the conclusions are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners move up',
    h2: 'From pins and string to graphs in Python',
    intro: 'The school year suggests a level; twenty minutes of the trial lesson tells us for sure.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Turning everyday words into rules, by hand and on paper.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and first Python, with an AI as a helper to be checked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Geometry, graphs and machine learning written from first principles.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Data structures in depth, then AI agents on top of them.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and neighbours',
    h2: 'What is a Gabriel graph, and why would an AI need one?',
    intro: 'A Gabriel graph links two points whenever the circle with those points at opposite ends of a diameter contains no other point, and AI methods that depend on "nearby" examples can use it to define neighbours without anyone choosing a number.',
    p1: 'For 170 census area centres in Welwyn Garden City it produced 344 links in one connected piece with at most six per centre, where a 500-metre radius produced 775 links, three pieces and up to 17 per centre.',
    p2: 'After building it, learners ask of any AI tool that groups or recommends: what did you treat as close, and who decided?',
    closer: 'A Welwyn Garden City teenager who can define a term precisely enough for a computer is well placed to direct AI tools, and coding is where that precision is learned.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In practice',
    h2: 'How we teach Welwyn Garden City learners',
    intro: 'Each learner joins from home. A laptop or desktop with a camera is what matters; connection speed matters less than reliability.',
    cells: [
      { h3: 'Code written by the learner', p: 'Tutors prompt and question. The typing, running and fixing is done by the person learning.' },
      { h3: 'A recommendation after we have met', p: 'The free session is where we find the right level and then name a course.' },
      { h3: 'First lesson on us', p: 'It is a full lesson, it is free, and we take no card details for it.' },
      { h3: 'Groups of five to ten', p: 'Everyone in a group is at the same point; members come from around the UK.' },
      { h3: 'Twice weekly in term', p: 'Send the Hertfordshire term dates you follow and holiday weeks are skipped.' },
      { h3: 'A fixed UK time', p: 'When the clocks change in March and October the tutor moves, the lesson does not.' }
    ],
    spec: { title: 'Why this is live and online', p: 'A tutor on a live call can see a wrong idea forming and ask about it. And a class drawn from the whole country can be matched by level far more closely than one drawn from a single town.' }
  },

  fees: {
    h2: 'Fees for Welwyn Garden City',
    intro: 'Families in Welwyn Garden City pay our standard international rate.',
    first: 'A full first lesson at no charge, finishing with a suggested course.',
    group: 'Group tuition, close to eight lessons per month.',
    private: 'Private tuition, close to eight lessons per month.',
    closer: 'Fees are given in US dollars only; we do not quote them in sterling. The trial is free and the first bill comes after a course and a regular time are settled. How holidays, absences and format changes work is on the pricing page.'
  },

  reviewsH2: 'Hertfordshire parents and UK learners reviewing us on Google',

  book: {
    h2: 'Try a free lesson in Welwyn Garden City',
    intro: 'Let us know an age or school year and an interest. The trial can be a pins-and-string puzzle, a Scratch game built with AI, first Python, or a small graph drawn in code.',
    success: 'Thank you. Your Welwyn Garden City request has reached us.'
  },

  faq: {
    h2: 'Welwyn Garden City: common questions',
    intro: 'About neighbour graphs, the project, AI, vibe coding and lesson arrangements.',
    items: [
      { q: 'What is the population of Welwyn Garden City?', a: 'The ONS built-up area had 51,505 usual residents at the 2021 census. The borough of Welwyn Hatfield had 119,836.' },
      { q: 'Do you teach coding and AI in Welwyn Garden City?', a: 'Yes, live online, for ages 6 to 67 in Welwyn Garden City, Panshanger, Haldens, Handside, Peartree and the rest of Welwyn Hatfield.' },
      { q: 'What is a relative neighbourhood graph?', a: 'It links two points only if no third point is closer to both of them than they are to each other. It is a stricter version of the Gabriel graph.' },
      { q: 'What did the Welwyn Garden City project show?', a: 'On 170 area centres, linking each to its closest centre left 54 separate pieces. The Gabriel graph joined everything with 344 links and the relative neighbourhood graph with 213.' },
      { q: 'Why not just use the three closest?', a: 'It worked on this data, but it needs someone to choose three, it does not guarantee one connected piece, and here it created a link 1,142 metres long.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is building programs by describing them to an AI and then testing and adjusting the code it writes. We teach it with enough real coding for learners to judge the result.' },
      { q: 'When do learners start on AI agents?', a: 'After they can write Python on their own, which usually means older teenagers and adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is this useful for GCSE and A level?', a: 'Yes. Graphs, algorithms and programming are in both courses. We do not promise particular grades.' },
      { q: 'How much does it cost?', a: 'The first lesson is free. Then it is USD 100 a month for group lessons or USD 150 a month for one-to-one.' },
      { q: 'Are there lessons in the holidays?', a: 'Only if you want them. Tell us the dates to skip.' }
    ]
  },

  next: {
    eyebrow: 'Around Hertfordshire',
    h2: 'Other Hertfordshire pages to explore',
    html: 'See <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-watford">Watford</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-hemel-hempstead">Hemel Hempstead</a>, each with a project of its own. The <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> link to the full set.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Welwyn Garden City and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wgc .cg-hero-grid { align-items: center; gap: clamp(1.5rem, 3.6vw, 3rem); }
.cg-root.cg-wgc .cg-hero h1 { font-weight: 730; letter-spacing: -0.033em; line-height: 1.04; }
.cg-root.cg-wgc .cg-capsule { border-left: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0 0 0.8rem 1rem; }
.cg-root.cg-wgc .cg-eyebrow { letter-spacing: 0.19em; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wgc .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.023em; }
.cg-root.cg-wgc .cg-table caption { font-weight: 500; text-align: left; font-size: 0.93rem; font-style: italic; }
.cg-root.cg-wgc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wgc .cg-table th { font-weight: 710; letter-spacing: 0.015em; }
.cg-root.cg-wgc .cg-ladder-col { border-radius: 10px; border-top: 4px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-wgc .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Welwyn Hatfield (E07000241), Census 2021 TS001 usual residents 119,836. ONS 2021 BUA (published): Welwyn Garden City 51,505. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the BUA: Panshanger, Haldens, Peartree, Hatfield Hyde, Woodhall, Hall Grove (AL7), Handside, Sherrardspark (AL8), Digswell (AL6).',
    localProject: '170 ONS population-weighted centroids of the Welwyn Garden City BUA, 14,365 pairs, straight-line. Gabriel graph 344 links, 94.7 km, mean 275 m, longest 866 m, 1 to 6 links per centre (mean 4.05), one piece. Relative neighbourhood graph 213 links, 50.1 km, 1 to 4 per centre (mean 2.51), one piece, a subset of Gabriel. Closest-one 116 links in 54 pieces; closest-three 308 links, longest 1,142 m; within 300 m 283 links, 12 pieces, 5 unlinked; within 500 m 775 links, 3 pieces, up to 17 per centre. Lesson family: Gabriel graph and relative neighbourhood graph (proximity graphs, neighbour definitions).',
    requiredMentions: [
      '51,505',
      '119,836',
      'Panshanger',
      'Haldens',
      'Handside',
      'Sherrardspark',
      'Hatfield Hyde',
      'Gabriel graph',
      '14,365',
      '94.7 km'
    ],
    sources: [
      { claim: 'Gabriel K. R. and Sokal R. R. (1969), A new statistical approach to geographic variation analysis, Systematic Zoology 18(3), 259 to 278.', url: 'https://doi.org/10.2307/2412323' },
      { claim: 'Toussaint G. T. (1980), The relative neighbourhood graph of a finite planar set, Pattern Recognition 12(4), 261 to 268.', url: 'https://doi.org/10.1016/0031-3203(80)90066-7' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; ONS output area centroids and lookups (Open Geography Portal).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Welwyn Hatfield.', url: 'https://api.postcodes.io/places?q=Panshanger' }
    ],
    rejectedClaims: [
      'The founding and planning history of the garden city: not read from a source for this page; not claimed.',
      'That linked centres are connected by a road or path: links are straight lines between centroids, and the page says so.',
      'That the closest-three rule always gives one piece: it did here; no general claim.',
      'That either geometric rule is the correct definition of neighbour: presented as definitions, not truths.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
