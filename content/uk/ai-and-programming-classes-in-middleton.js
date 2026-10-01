'use strict';
// Middleton (cg- town page, UK cluster Phase 10, towns band B, row 528). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: an explorer visiting places one at a time
// cannot know what it has not seen; how can it estimate the chance that the next place is a kind it has never met,
// and when is it safe to stop? (Good-Turing missing mass: singletons divided by visits.)
// Data (read 1 October 2026): one Overpass query for shop and amenity tags (nodes, ways, relations) in the rectangle
// 53.533 to 53.567 N, 2.228 to 2.170 W, drawn round the census centres of the Middleton (Rochdale) BUA: 362 tagged
// places, 73 kinds. Excluded as sensitive or unknown (19 kinds): place of worship, grave yard, crematorium, funeral
// directors, doctors, clinic, dentist, pharmacy, chemist, social facility, police, ATM, bank, bookmaker, pawnbroker,
// alcohol shop, veterinary, animal boarding, shop=yes. Kept: 301 places of 54 kinds; parking 121, school 27, pub 21;
// 28 kinds occur once.
// Our run (scratchpad mdl/gt.py, seed 20260930, 2,000 random visiting orders). Good-Turing estimate N1/n against the
// true share of unvisited places whose kind is unseen, averaged: after 10 visits 0.467 vs 0.452 (mean absolute error
// 0.157, kinds seen 6.2 of 54); 25: 0.340 vs 0.333 (0.099, 12.1); 50: 0.248 vs 0.246 (0.066, 19.2); 100: 0.174 vs 0.172
// (0.043, 29.4); 200: 0.119 vs 0.117 (0.035, 43.5). Rule "stop once the estimate is under 5%" (from 10 visits): fired in
// 11 of 2,000 orders, median after 15 visits, 4.5 kinds seen on average, true chance of a new kind then 0.4584 on
// average (largest 0.5601).
// Lesson family: Good-Turing estimation of unseen kinds. Screened: "good-turing", "missing mass" 0 hits in content/;
// claimed in claims.txt. Dewsbury measured unseen bigram share; Southport = byte-pair encoding; neither estimates missing
// mass. Rochdale page = parsing numbers in text; Greater Manchester page = search reformulation.
// Place facts: Rochdale TS001 223,773 (a requiredMention on the Rochdale page, printed but not listed here). ONS 2021
// BUA (published): Middleton (Rochdale) 46,630. postcodes.io suburban areas whose closest postcode is in the Middleton BUA:
// Langley, Alkrington Garden Village, Moorclose (M24). Rhodes and Slattocks have their own BUAs; Hopwood's closest
// postcode is in Heywood. Not listed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MIDDLETON', label: 'Middleton', blurb: 'AI and programming classes for Middleton, with a project that estimates what an explorer has not yet seen, using 301 local places.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-middleton',
  code: 'mdl',
  accent: '#7A5D31',
  accentRationale: 'Middleton: a dark ochre (6.11:1 contrast), picked by hand and checked for distance from every accent in use and from the other Greater Manchester pages',
  pageType: 'city',
  place: {
    name: 'Middleton',
    eyebrow: 'Middleton, Rochdale, Greater Manchester',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Rochdale', href: '/online-coding-and-python-classes-in-rochdale' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Middleton, Greater Manchester',
  title: 'AI and Programming Classes in Middleton, Rochdale | Ages 6 to 67',
  description: 'Live online AI and programming classes for Middleton, Langley, Alkrington and Moorclose, ages 6 to 67, with Python, vibe coding and AI agents. First lesson free.',
  ogDescription: 'AI and programming classes for Middleton, with a project on estimating what an explorer has not seen yet.',
  twitterDescription: 'Middleton AI and programming lessons, live online for ages 6 to 67. The first one is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Middleton',
    description: 'Online programming, AI, Python and maths lessons for children, teenagers and adults in Middleton and the borough of Rochdale, built on probability and simulations the learner codes.'
  },

  h1: 'AI and programming classes in Middleton',
  capsuleQ: 'What are the best AI and programming classes in Middleton?',
  capsule: 'The ONS built-up area of Middleton, in the borough of Rochdale, had 46,630 usual residents at the 2021 census. Langley, Alkrington Garden Village and Moorclose are gazetteer suburbs whose nearest postcodes lie inside it. Modern Age Coders offers live online lessons in programming, AI, Python, vibe coding and maths to Middleton learners aged six to 67, taught by tutors in India to individuals or to groups of five to ten learners at one level. Learners are asked to estimate, then check. The first lesson is free and ends with a course suggestion. The Middleton project gives the learner 301 shops and everyday places from OpenStreetMap and asks a question every exploring agent faces: having seen some of them, what is the chance the next one is a kind you have never met? From then on it is USD 100 per month in a group or USD 150 per month for private lessons.',
  lead: 'An agent that explores, whether it is reading web pages, testing a program or visiting shops, keeps meeting new kinds of thing and then, gradually, fewer of them. At some point it has to decide it has seen enough. But how can you estimate what you have not seen? The answer I. J. Good published in 1953, crediting the idea to Alan Turing, with whom he had worked on wartime codebreaking, is startlingly simple: count the kinds you have met exactly once, and divide by the number of things you have looked at. The Middleton project tests that rule on real local data and then shows how it can still mislead an agent that stops too soon.',
  wa: 'Hello Modern Age Coders, could we have a free AI or programming trial lesson? We live in Middleton.',

  picks: {
    eyebrow: 'Course ideas',
    h2: 'Programming and AI courses for Middleton learners',
    intro: 'A suggested start for each age. The first lesson is live, free and taken without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think like a programmer: counting, guessing and checking, and clear instructions.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an AI helps make a Scratch game and the child tests it.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'AI and machine learning in Python, with probability projects like the Middleton explorer.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first principles to data work and AI agents that know when to stop.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About Middleton',
      h2: 'Middleton, Langley, Alkrington and Moorclose',
      intro: 'The census count for the built-up area, the borough around it, and the suburbs inside.',
      body: [
        { kind: 'table', caption: 'Usual residents, 2021 census (ONS)', head: ['Area', 'Residents'], rows: [
          ['Middleton built-up area', '46,630'],
          ['Rochdale borough', '223,773']
        ] },
        { kind: 'p', text: 'The borough figure also includes Rochdale town, Heywood, Littleborough and Milnrow, so it is a separate count and not a total to add to. postcodes.io records Langley, Alkrington Garden Village and Moorclose as suburban areas in M24 whose nearest postcodes sit in the Middleton built-up area. Rhodes and Slattocks are counted as built-up areas of their own, and the nearest postcode to Hopwood falls in Heywood, so none of those is listed as part of Middleton here. Local schools follow the national curriculum for England; give us the year group, from Year 2 through Year 13, and lessons can line up with GCSE or A level computer science.' },
        { kind: 'callout', h3: 'Greater Manchester pages', p: 'See <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rochdale">Rochdale</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-oldham">Oldham</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bury">Bury</a> and the <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester page</a>. Our reasons for teaching thinking before tools are in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Middleton project',
      h2: 'How much has the explorer not seen yet?',
      intro: 'Three hundred and one local places, two thousand random tours, and a formula from 1953.',
      body: [
        { kind: 'p', text: 'One OpenStreetMap query returns every shop and amenity tagged in a rectangle drawn round the census centres of the Middleton built-up area: 362 places of 73 kinds. The rectangle takes in some ground beyond the town. The learner removes 19 kinds that would be out of place in a school exercise or say nothing useful, including places of worship, medical services, banks and betting shops, and places tagged only as a shop of unknown type. That leaves 301 places of 54 kinds. Parking areas lead with 121, then schools with 27 and pubs with 21, while 28 kinds appear only once.' },
        { kind: 'p', text: 'The explorer is a Python program that visits the 301 places in a random order. After each visit it counts the kinds it has met exactly once, calls that number N1, and divides by the visits so far. That fraction is the Good-Turing estimate of the missing mass, the chance that the next place visited will be a kind not yet seen. Because the learner holds the full list, the program can also compute the true answer: the share of unvisited places whose kind is still unseen. The whole tour is repeated 2,000 times with different random orders.' },
        { kind: 'table', caption: 'Good-Turing estimate against the true chance of a new kind, averages over 2,000 random tours, our Python run', head: ['After this many visits', 'Estimate', 'Truth', 'Typical miss', 'Kinds seen, of 54'], rows: [
          ['10', '0.467', '0.452', '0.157', '6.2'],
          ['25', '0.340', '0.333', '0.099', '12.1'],
          ['50', '0.248', '0.246', '0.066', '19.2'],
          ['100', '0.174', '0.172', '0.043', '29.4'],
          ['200', '0.119', '0.117', '0.035', '43.5']
        ] },
        { kind: 'p', text: 'On average the one-line formula is remarkably close to the truth at every stage, even though the explorer never sees the full list. Individual tours miss by more early on, 0.157 on average after ten visits, shrinking to 0.035 after two hundred. Then the learner gives the explorer a stopping rule an agent designer might reach for: stop as soon as the estimated chance of anything new drops below 5%, from the tenth visit onwards. In 11 of the 2,000 tours the rule fired early, after 15 visits at the median, usually because a run of car parks left no singletons. The explorer had met about four or five kinds. The true chance of something new at that moment averaged 0.4584.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw coloured counters from a bag one at a time and guess, as you go, whether a new colour is coming.' },
          { h3: 'Ages 11 to 15', p: 'Use a Python dictionary to count kinds as a random tour goes, and print the estimate after each visit.' },
          { h3: 'Ages 15 and up', p: 'Run 2,000 tours, compare estimate with truth, then design a safer stopping rule and test it.' }
        ] },
        { kind: 'callout', h3: 'Sources', p: 'Places and their tags come from OpenStreetMap contributors under the Open Database Licence, fetched with one Overpass query. The estimator is from I. J. Good\'s 1953 paper in Biometrika. The exclusions, the 2,000 tours (seed 20260930) and all figures in the table are from our own run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Programming alongside AI',
      h2: 'What an exploring program teaches about AI agents',
      intro: 'Knowing when you have seen enough is a design decision, and it can be tested.',
      body: [
        { kind: 'table', caption: 'From Middleton places to AI agents', head: ['What the tours showed', 'What agent builders should take from it'], rows: [
          ['A one-line estimate tracked the truth on average', 'Simple statistics can guide an agent'],
          ['Single tours missed by 0.157 after ten visits', 'Averages hide the bad individual runs'],
          ['A 5% stopping rule fired after 15 visits in 11 tours', 'Add a minimum effort before any early stop'],
          ['Car parks crowded out everything else early', 'Common things can make an agent overconfident'],
          ['19 sensitive or empty kinds were removed first', 'Decide what data belongs in the task']
        ] },
        { kind: 'p', text: 'AI agents that search, test or gather information all need a rule for stopping, and a language model asked to write one will often produce a plausible threshold with no test behind it. Middleton learners practise vibe coding by asking an AI for exactly that kind of rule, then running it thousands of times against a case where the truth is known. The failures they find, rare but serious, are the lesson. Agent design begins when a learner can already write Python unaided, which tends to be around sixth form or later, and any Copilot Studio agent work is private tuition only. Related reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents route for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and postcodes.io are independent of Modern Age Coders. We built on their open data; the analysis belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'Counter games at seven, probability in Python at seventeen',
    intro: 'We choose a starting point from the trial lesson, with the school year as a rough guide.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Guess and check', p: 'Counting, chance and clear steps, often with real objects.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Building with help', p: 'Scratch games made with an AI, then first Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Probability and AI', p: 'Simulations, dictionaries and machine learning basics in Python.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents with judgement', p: 'Solid Python, then agents with tested rules for when to act and stop.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Unseen things and AI',
    h2: 'What is Good-Turing estimation, and why does it matter for AI agents?',
    intro: 'Good-Turing estimation predicts the chance that the next observation is something never seen before by dividing the number of kinds seen exactly once by the number of observations, and it matters because every exploring AI agent must judge how much it is still missing before it stops.',
    p1: 'Across 2,000 random tours of 301 Middleton places the estimate averaged 0.174 after 100 visits against a true 0.172, yet a rule that stopped below 5% quit after 15 visits in 11 tours while the true chance of something new was 0.4584.',
    p2: 'Having seen both results, learners ask of any agent, their own or one an AI wrote, when it stops and how that rule was tested.',
    closer: 'For Middleton teenagers, knowing how to test a stopping rule is part of running AI agents rather than trusting them blindly, and it starts with writing the code.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'What a Middleton lesson involves',
    intro: 'Lessons are held live over video. A computer with a keyboard is required; a tablet alone is not suitable for programming.',
    cells: [
      { h3: 'The learner codes', p: 'The learner does all the typing and running, with the tutor probing each choice.' },
      { h3: 'Trial shows the level', p: 'We see what the learner can do before suggesting a course.' },
      { h3: 'Trial costs nothing', p: 'There is no charge and no card for the first lesson.' },
      { h3: 'Five to ten per class', p: 'Each class shares a stage, with learners joining from around the UK.' },
      { h3: 'Roughly eight monthly', p: 'Twice a week in term, with Rochdale school holidays left free if you ask.' },
      { h3: 'Fixed lesson time', p: 'Tutors handle the clock changes so your UK time stays the same.' }
    ],
    spec: { title: 'Why online classes', p: 'Learners progress fastest with others at their exact level, and that is far easier to arrange across the UK than within one town.' }
  },

  fees: {
    h2: 'Fees for Middleton families',
    intro: 'Middleton learners are on the same prices as everyone we teach outside India.',
    first: 'First lesson: free, full length, and closing with a course suggestion.',
    group: 'Group class, about eight lessons monthly.',
    private: 'Private lessons, about eight monthly.',
    closer: 'Fees are charged in US dollars; we do not give a pound figure. The trial is free of charge, and billing begins only after a course and a weekly slot are agreed. The pricing page covers pauses for holidays, missed lessons and swapping between group and private.'
  },

  reviewsH2: 'Greater Manchester families and UK learners, on Google',

  book: {
    h2: 'Book a free Middleton trial',
    intro: 'Tell us an age or school year and something the learner enjoys. Trials range from a counters-in-a-bag game and an AI-built Scratch game to first Python or a first probability simulation.',
    success: 'Thank you. Your Middleton request has been received.'
  },

  faq: {
    h2: 'Middleton questions',
    intro: 'The explorer project, Good-Turing, programming, vibe coding and practical arrangements.',
    items: [
      { q: 'What is the population of Middleton?', a: 'The ONS counted 46,630 usual residents in the Middleton built-up area in the borough of Rochdale at the 2021 census.' },
      { q: 'Can Middleton learners take these AI and programming classes?', a: 'They can. Classes are delivered live over video to learners aged 6 to 67 in Middleton, Langley, Alkrington, Moorclose and nearby.' },
      { q: 'What is a singleton in counting?', a: 'A kind that has been seen exactly once so far. Good-Turing estimation uses the number of singletons to predict how likely the next observation is to be new.' },
      { q: 'What did the Middleton project find?', a: 'Averaged over 2,000 random tours of 301 places, the Good-Turing estimate stayed close to the truth, for example 0.174 against 0.172 after 100 visits. A rule stopping below 5% quit far too early in 11 tours.' },
      { q: 'Why remove some kinds of place?', a: 'Places of worship, medical services, banks and betting shops were taken out as unsuitable for a school exercise, and untyped shops because they say nothing. That left 301 places.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is asking an AI to write code from a description, then running it, reading it and fixing it. We teach it alongside typed Python.' },
      { q: 'When do learners start on AI agents?', a: 'After they can write Python unaided, usually around sixth form or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is this useful for GCSE or A level?', a: 'Probability, algorithms and programming all feature, and the project uses each of them. We make no promises about grades.' },
      { q: 'What does it cost?', a: 'The trial is free. Then USD 100 each month for a group place or USD 150 each month one-to-one.' },
      { q: 'Can we skip weeks for holidays?', a: 'Yes. Give us the dates and those weeks are dropped.' }
    ]
  },

  next: {
    eyebrow: 'Close to Middleton',
    h2: 'More Greater Manchester pages',
    html: 'Read <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rochdale">Rochdale</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-oldham">Oldham</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bury">Bury</a> and <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> show the rest.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Middleton and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mdl .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 2.6vw, 2.2rem); }
.cg-root.cg-mdl .cg-hero h1 { font-weight: 755; letter-spacing: -0.022em; line-height: 1.09; }
.cg-root.cg-mdl .cg-capsule { border-left: 4px dotted var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-mdl .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; font-size: 0.83rem; }
.cg-root.cg-mdl .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.013em; }
.cg-root.cg-mdl .cg-table caption { font-weight: 560; text-align: left; font-size: 0.91rem; }
.cg-root.cg-mdl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdl .cg-table th { font-weight: 700; letter-spacing: 0.022em; }
.cg-root.cg-mdl .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-mdl .cg-callout { border-left-width: 5px; border-radius: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Rochdale (E08000005), Census 2021 TS001 usual residents 223,773. ONS 2021 BUA (published): Middleton (Rochdale) 46,630. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Middleton BUA: Langley, Alkrington Garden Village, Moorclose (M24).',
    localProject: 'One Overpass query, shop and amenity tags in 53.533 to 53.567 N, 2.228 to 2.170 W: 362 places, 73 kinds; 19 sensitive or untyped kinds removed, leaving 301 places of 54 kinds (parking 121, school 27, pub 21; 28 kinds once). 2,000 random tours, seed 20260930. Good-Turing N1/n vs true unseen share: 10 visits 0.467 / 0.452; 25 0.340 / 0.333; 50 0.248 / 0.246; 100 0.174 / 0.172; 200 0.119 / 0.117. Stop below 5% (from visit 10): fired in 11 tours, median 15 visits, 4.5 kinds seen, true new chance 0.4584 on average. Lesson family: Good-Turing missing mass and stopping rules for exploring agents.',
    requiredMentions: [
      '46,630',
      'Langley',
      'Alkrington Garden Village',
      'Moorclose',
      'Good-Turing',
      'missing mass',
      '301 places',
      '0.4584',
      '2,000 random'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, shop and amenity tags via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Good I. J. (1953), The population frequencies of species and the estimation of population parameters, Biometrika 40(3-4), 237 to 264.', url: 'https://doi.org/10.1093/biomet/40.3-4.237' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output area centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Rochdale borough.', url: 'https://api.postcodes.io/places?q=Moorclose' }
    ],
    rejectedClaims: [
      'That the 301 places are all inside Middleton: the query was a rectangle, and the page says it reaches beyond the town.',
      'That OpenStreetMap lists every shop in Middleton: coverage depends on volunteer mapping; not claimed.',
      'Details of Turing\'s wartime use beyond the published attribution: only that Good credited the idea to Turing.',
      'That Rhodes, Slattocks or Hopwood are inside the Middleton built-up area: left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
