'use strict';
// Sale (cg- town page, UK cluster Phase 8, towns band A, row 392). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does "people who liked this
// also liked that" work, and how do you tell a real pattern from chance? (association rules: support, confidence, lift,
// shuffle test).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map calls over bbox -2.345,53.412,-2.300,53.438 in 6 tiles (ODbL).
// Kept: shop=* (excluding alcohol, tobacco, gambling, money-lending, health-related and similar types, and "yes") and
// amenity in {cafe, restaurant, fast_food, ice_cream, library, post_office, community_centre, school, kindergarten,
// cinema, theatre}: 308 places. Street-name baskets were too sparse (only 14 streets with two or more types), so baskets
// are 200 m grid squares: 68 squares with places, 30 with two or more types.
// Our run (scratchpad sal/ar2.py): commonest types by square: restaurant 17, hairdresser 15, cafe 13, fast food 12,
// convenience 10. Pairs in at least 6 squares: 26 rules. Highest confidence: clothes shop -> restaurant 7 of 7 (1.00, lift
// 1.76); hairdresser -> restaurant 13 of 15 (0.87, lift 1.53). Highest lift: restaurant and clothes 1.76; fast food and
// convenience 1.75; clothes and hairdresser 1.71; cafe and convenience 1.62. Rules with lift at least 1.5: 12 real; 300
// shuffles keeping square sizes and type counts: median 2, 95th percentile 8, maximum 12.
// Lesson family: association rule mining (market basket), support/confidence/lift, popularity trap, permutation test,
// choice of basket. Screened: association rule, Apriori, market basket 0 hits; "lift" hits elsewhere are unrelated.
// Place facts: Trafford (E08000009) TS001 235,052. ONS 2021 BUAs (published): Sale 62,550; Altrincham 49,680; Urmston
// 41,740; Stretford 28,015. postcodes.io (Trafford) suburban areas: Brooklands, Ashton upon Mersey, Timperley.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SALE', label: 'Sale', blurb: 'AI and programming classes for Sale, with a data-mining project that finds which kinds of shop cluster together in town, and tests whether the patterns are real.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-sale',
  code: 'sle',
  accent: '#4C3232',
  accentRationale: 'Sale: a deep mahogany (9.35:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Sale',
    eyebrow: 'Sale, Trafford, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sale, England',
  title: 'AI and Programming Classes in Sale | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Sale, Brooklands, Ashton upon Mersey and Timperley learners aged 6 to 67. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Sale, and a Python data-mining project on which kinds of shop turn up together in town.',
  twitterDescription: 'Sale AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Sale',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Sale and across Trafford, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Sale',
  capsuleQ: 'Which are the best AI and programming classes in Sale?',
  capsule: 'Sale\'s built-up area counted 62,550 residents at the 2021 census, one of several Trafford towns listed by the ONS alongside Altrincham, Urmston and Stretford, in a borough of 235,052. Brooklands, Ashton upon Mersey and Timperley appear among the recorded suburbs. Whatever their age between 6 and 67, learners here can work with our India-based tutors over video on AI, programming, Python, vibe coding and maths, in one-to-one sessions or in small classes of five to ten grouped by level. Reasoning is taught before any tool, which keeps the learner in charge of what an AI suggests. Lesson one is free and wraps up with a course we think fits. In Sale the project digs into the maths behind every "you might also like" box, using the town\'s own shops. Staying on costs USD 100 a month for group tuition or USD 150 a month for private tuition.',
  lead: 'Online shops, streaming services and AI assistants all make suggestions of the form "people who chose this also chose that". Behind many of them sits an old data-mining idea called association rules, most familiar from analysing what shoppers buy together, which is called market basket analysis. This project applies it to a real town: 308 shops, cafés and other places in and around Sale town centre, taken from OpenStreetMap. Which kinds of shop turn up in the same small patch of town? The learner finds patterns that look striking, then puts them through the test most people skip: would patterns that strong appear if the shops had been scattered at random?',
  wa: 'Hello Modern Age Coders, may we book a free AI or programming lesson for a learner in Sale?',

  picks: {
    eyebrow: 'Sale course picks',
    h2: 'Thinking, vibe coding and AI courses in Sale',
    intro: 'Pick by age and what the learner is curious about; every course opens with a no-cost live lesson and no card is asked for.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: spotting patterns, then asking whether they could be luck.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by describing them to an AI and trying them out.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Data mining and machine learning in Python, including this shop-pattern project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'Recommendations, retrieval, language models and agents, with honest evaluation.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sale and Trafford',
      h2: 'Sale and the other Trafford towns',
      intro: 'ONS 2021 census counts for four Trafford built-up areas, and suburbs recorded around Sale.',
      body: [
        { kind: 'table', caption: 'Four Trafford built-up areas, 2021 census counts from the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Sale', '62,550'],
          ['Altrincham', '49,680'],
          ['Urmston', '41,740'],
          ['Stretford', '28,015']
        ] },
        { kind: 'p', text: 'Each figure is published separately by the ONS and is shown here without a total; the borough count of 235,052 comes from its own table. Brooklands, Ashton upon Mersey and Timperley are recorded as suburban areas in Trafford. Local schools teach England\'s national curriculum, and lessons simply pause for whatever holiday dates you send.' },
        { kind: 'callout', h3: 'Greater Manchester, the North West and our approach', p: 'Other options are on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">coding classes in Greater Manchester</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. Why thinking comes before prompting is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Sale project',
      h2: '"Also likes": association rules on Sale\'s shops',
      intro: 'Group the town into baskets, measure support, confidence and lift, and then check the patterns against chance.',
      body: [
        { kind: 'p', text: 'The learner downloads central Sale from the OpenStreetMap API in six tiles and keeps shops and a short list of everyday places such as cafés, restaurants, schools and the post office, leaving out categories this project does not need to discuss: 308 places in all. The first plan was to treat each street as a shopping basket, but only 14 streets had two or more kinds of place tagged, too few to learn from. So the town is cut into squares 200 m across instead, and each square\'s set of shop types becomes a basket: 68 squares have places, 30 of them two or more kinds.' },
        { kind: 'p', text: 'Three numbers describe a rule such as "if a square has a clothes shop, it has a restaurant". Support is how many baskets contain both. Confidence is the share of clothes-shop squares that also have a restaurant. Lift compares that confidence with how common restaurants are anyway: a lift of 1 means no connection, above 1 means they turn up together more often than chance would suggest. The learner keeps pairs found in at least six squares, which gives 26 rules.' },
        { kind: 'table', caption: 'Strongest shop-pairings in Sale by 200 m square, our Python run on OpenStreetMap data, 29 September 2026', head: ['Rule', 'Squares with both', 'Confidence', 'Lift'], rows: [
          ['Clothes shop, so restaurant', '7', '1.00', '1.76'],
          ['Hairdresser, so restaurant', '13', '0.87', '1.53'],
          ['Fast food, so convenience shop', '7', '0.58', '1.75'],
          ['Clothes shop, so hairdresser', '6', '0.86', '1.71'],
          ['Café, so convenience shop', '7', '0.54', '1.62']
        ] },
        { kind: 'p', text: 'Confidence alone misleads. "Hairdresser, so restaurant" looks very strong at 0.87, but restaurants are the commonest kind of place, found in 17 of the 30 baskets, so a high confidence is almost guaranteed. Lift corrects for that popularity, and it ranks the rules differently: clothes shops and restaurants, fast food and convenience shops, clothes shops and hairdressers.' },
        { kind: 'p', text: 'Then the honest check. The learner shuffles which kinds of place sit in which square 300 times, keeping every square\'s size and every type\'s count, and counts how many rules reach a lift of 1.5 or more by pure chance. The real town has 12 such rules. The shuffled towns have a median of 2 and a 95th percentile of 8, so Sale\'s patterns are stronger than chance usually produces. But one shuffle out of 300 also reached 12. With only 30 baskets, the evidence is real but modest, and no single rule should be treated as a law of shopping.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Record what is in five lunchboxes, find items that go together, then shuffle and see if it still happens.' },
          { h3: 'Ages 11 to 15', p: 'Count pairs of shop types per square in Python and work out support and confidence.' },
          { h3: 'Ages 15 and up', p: 'Compute lift for every rule, run the shuffle test and decide which rules deserve trust.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap places, our rules', p: 'Shops and places are from OpenStreetMap and its contributors under the Open Database Licence. The baskets, rules and shuffle tests are our own work; no individual business is named or judged.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Patterns and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Recommendation engines find patterns; good engineers check they are not luck.',
      body: [
        { kind: 'table', caption: 'From Sale\'s shop patterns to AI suggestions', head: ['In the Sale project', 'In recommendations and AI tools'], rows: [
          ['Streets were too sparse, so squares were used', 'How data is grouped shapes what is found'],
          ['Confidence flattered popular types', 'Popular items look related to everything'],
          ['Lift corrected for popularity', 'Compare with what you would expect anyway'],
          ['A shuffle test measured chance', 'Check whether a pattern would appear at random'],
          ['30 baskets gave modest evidence', 'Small data calls for cautious claims']
        ] },
        { kind: 'p', text: 'Ask an AI for a suggestions feature and it will happily write association-rule code that sorts by confidence and stops there. In our vibe coding lessons, where the learner describes an app and the AI drafts it, Sale learners add lift and a shuffle test before they believe a single suggestion. AI agents that recommend products, articles or next steps are only as good as the checks behind their patterns. Building agents follows once Python is steady, usually for older teenagers and adults, and Copilot Studio agents are covered in private lessons only. Explore <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents route for UK students</a> and the reasoning in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of OpenStreetMap, the ONS and postcodes.io, and of every business in the data. We used open records only; the analysis, including any mistakes, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From lunchbox patterns to data mining',
    intro: 'A learner\'s school year points us in a direction, and the trial lesson sets the actual level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, grouping and asking whether something is just luck.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tried out by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data mining', p: 'Data, patterns and statistical checks alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Recommendations and agents', p: 'Data mining, recommendations, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and suggestions',
    h2: 'How do "you might also like" recommendations work?',
    intro: 'Many start from patterns of things that appear together, measured with support, confidence and lift.',
    p1: 'In Sale, clothes shops and restaurants shared a square more often than chance would suggest, with a lift of 1.76. But a shuffle test showed that with only 30 baskets, chance alone can occasionally produce patterns almost as strong.',
    p2: 'Learners who have run that test treat every suggestion engine, including AI ones, as a pattern that needs evidence, not a fact.',
    closer: 'Knowing how suggestions are made, and how to test them, gives Sale teenagers an edge with every AI tool; that alone makes 2026 a good year to start coding.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Brooklands to Ashton upon Mersey, online',
    intro: 'No special kit: a computer and broadband that handles a video call.',
    cells: [
      { h3: 'Learner-driven sessions', p: 'All typing, prompting and running is done by the learner, with the tutor watching through screen share and questioning each step.' },
      { h3: 'Levelled by the trial', p: 'The free session reveals where to start, regardless of year group, and we note any exam board.' },
      { h3: 'Opening lesson free', p: 'Nothing to pay for session one, which finishes with our suggestion.' },
      { h3: 'Stage-matched classes', p: 'Groups hold five to ten learners from around Britain at one level.' },
      { h3: 'Twice weekly', p: 'No lessons over school holidays.' },
      { h3: 'Time kept steady', p: 'Our tutors move with the UK clocks, so your slot does not shift.' }
    ],
    spec: { title: 'Why teaching happens online', p: 'Five learners at the same stage, all free on the same evening, rarely share a postcode. Online, they share a class.' }
  },

  fees: {
    h2: 'Sale fees',
    intro: 'Sale learners pay our international prices, used for every country apart from India.',
    first: 'Lesson one in full, free, ending with a course recommendation.',
    group: 'Around eight live small-group lessons per month.',
    private: 'Around eight live private lessons per month.',
    closer: 'Prices are quoted in US dollars, not sterling. Billing only starts once the trial has agreed a course and a regular weekly time; holidays away, missed lessons and changes of format are covered on our pricing page.'
  },

  reviewsH2: 'What Greater Manchester and other UK families say on Google',

  book: {
    h2: 'Book a free Sale lesson',
    intro: 'Give us an age or school year and one thing the learner enjoys. Possible trials: a pattern-spotting game, a Scratch game built with an AI, a first Python script, or counting what goes together in a real list.',
    success: 'Thank you. Your Sale request is with us.'
  },

  faq: {
    h2: 'Sale questions',
    intro: 'Association rules, the shop-pattern project, vibe coding, agents and fees.',
    items: [
      { q: 'What is the population of Sale?', a: 'At the 2021 census the Sale built-up area had 62,550 residents, according to the ONS.' },
      { q: 'Are AI and programming lessons available for Sale learners?', a: 'Yes, over live video, for anyone aged 6 to 67 in Sale or elsewhere in Trafford.' },
      { q: 'What is an association rule?', a: 'A pattern of the form "if A appears, B tends to appear too", measured by support, confidence and lift; it is a classic way to build simple recommendations.' },
      { q: 'What is the Sale project?', a: 'Learners mine 308 real places around Sale town centre for kinds of shop that appear together, rank the patterns by lift and use a shuffle test to see which could be chance.' },
      { q: 'Can learners in Sale try vibe coding?', a: 'Yes, at any age: they plan the app, an AI drafts it, and they test every part.' },
      { q: 'Do you teach AI agents?', a: 'Yes, once Python is comfortable, usually from the late teens; Copilot Studio agent lessons are private only.' },
      { q: 'Is there a classroom in Sale?', a: 'No; everything is taught online.' },
      { q: 'Is there support for GCSE and A level?', a: 'Computer science and maths are both covered, aimed at understanding rather than a promised grade.' },
      { q: 'How much are lessons?', a: 'The first is free, then USD 100 monthly in a class or USD 150 monthly one-to-one.' },
      { q: 'What happens in school holidays?', a: 'Lessons pause; just tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Greater Manchester pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> has a page of its own, and so do <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bury">Bury</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-wigan">Wigan</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-oldham">Oldham</a>, each with a different project. Families preparing for grammar school tests can see <a class="cg-inline-link" href="/11-plus-maths-tuition-trafford">11 plus maths tuition in Trafford</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sale and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sle .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-sle .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-sle .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-sle .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sle .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.02em; }
.cg-root.cg-sle .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-sle .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sle .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-sle .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-sle .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Trafford (E08000009), Census 2021 TS001 usual residents 235,052. ONS 2021 BUAs (published): Sale 62,550; Altrincham 49,680; Urmston 41,740; Stretford 28,015. postcodes.io (Trafford) suburban areas: Brooklands, Ashton upon Mersey, Timperley.',
    localProject: 'OSM bbox -2.345,53.412,-2.300,53.438 (6 tiles): 308 shops and everyday places (sensitive categories excluded). 200 m squares: 68 with places, 30 with 2+ types. Commonest: restaurant 17, hairdresser 15, cafe 13, fast food 12, convenience 10. 26 rules (support >= 6). Clothes -> restaurant 7/7 conf 1.00 lift 1.76; hairdresser -> restaurant 13 conf 0.87 lift 1.53; fast food & convenience 1.75; clothes & hairdresser 1.71; cafe & convenience 1.62. Lift >= 1.5: real 12, 300 shuffles median 2, 95th pct 8, max 12. Lesson family: association rules, support/confidence/lift, permutation test, basket choice.',
    requiredMentions: [
      '62,550',
      '235,052',
      'Altrincham',
      'Urmston',
      'Stretford',
      'Brooklands',
      'Ashton upon Mersey',
      'Timperley',
      'association rule',
      'market basket'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap map data for central Sale, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas in Trafford.', url: 'https://api.postcodes.io/places?q=Brooklands' }
    ],
    rejectedClaims: [
      'Why shops cluster: not studied; patterns are described only as co-occurrence.',
      'Named businesses: none named or assessed.',
      'Sensitive shop categories (alcohol, tobacco, gambling, money-lending, health-related): excluded from the data by design.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
