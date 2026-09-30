'use strict';
// Sittingbourne (cg- town page, UK cluster Phase 10, towns band B, row 494). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a van can only carry so much; how should a
// delivery agent group its stops into trips? (Clarke-Wright savings algorithm for capacity-limited routing.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup and ONS population-weighted centroids (British National Grid)
// for the 162 output areas of the Sittingbourne built-up area in Swale (E07000113); Nomis Census 2021 TS017 household
// totals: 21,521 households, 65 to 243 per area.
// Our run (scratchpad sit/cw.py): invented leaflet drop, one leaflet per household, a bundle left at each area centre.
// Depot = the area centre closest to the average of all centres (our choice), so 161 stops and 21,414 leaflets.
// Straight-line distance. One out-and-back trip per stop: 161 trips, 478.2 km. Van capacity 3,000 leaflets: closest-next
// rule 8 trips, 64.7 km; Clarke-Wright savings (parallel, merging at route ends) 8 trips, 53.8 km, after 153 merges
// from 12,880 stop pairs. Capacity 2,000: closest-next 11 trips, 81.5 km; savings 12 trips, 64.1 km (fewest possible
// trips 11). Capacity 5,000: closest-next 5 trips, 56.8 km; savings 5 trips, 45.5 km. Largest single saving 5.09 km (two
// stops 2.57 and 3.07 km from the depot, 0.54 km apart).
// Lesson family: Clarke-Wright savings algorithm, capacitated vehicle routing, merge heuristic. Screened: "Clarke-Wright"
// and "savings algorithm" 0 hits in content/; claimed in claims.txt. Kent county page = rates and Little's law; Maidstone
// = shared text runs; Chatham and Gillingham have their own families. Huyton (another Phase 10 worker) holds tabu search.
// Place facts: Swale TS001 151,676. ONS 2021 BUA (published): Sittingbourne 54,390. postcodes.io (Swale) suburban areas:
// Milton Regis, Kemsley, Murston, Chalkwell, Snipeshill, Grove Park (ME10), Bapchild (ME9).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SITTINGBOURNE', label: 'Sittingbourne', blurb: 'Vibe coding and AI agents classes for Sittingbourne, with a delivery agent that groups 161 stops into van loads using the Clarke-Wright savings method.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-sittingbourne',
  code: 'sit',
  accent: '#5A4A2A',
  accentRationale: 'Sittingbourne: a dark paper-bag brown (8.58:1 contrast), chosen by hand to stand apart from recent accents',
  pageType: 'city',
  place: {
    name: 'Sittingbourne',
    eyebrow: 'Sittingbourne, Swale, Kent',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Sittingbourne, Kent',
  title: 'Vibe Coding and AI Agents Classes in Sittingbourne | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Sittingbourne, Milton Regis, Kemsley and Murston, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Sittingbourne, with a delivery routing project using the Clarke-Wright savings algorithm.',
  twitterDescription: 'Sittingbourne vibe coding, AI agents and Python classes online, ages 6 to 67. Free trial lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Sittingbourne',
    description: 'Online vibe coding, AI agents, Python and maths for children, teenagers and adults in Sittingbourne and Swale, taught live through planning problems with real constraints.'
  },

  h1: 'Vibe coding and AI agents classes in Sittingbourne',
  capsuleQ: 'Which are the best vibe coding and AI agents classes in Sittingbourne?',
  capsule: 'On the ONS figures from the 2021 census, 54,390 people lived in the Sittingbourne built-up area and 151,676 in the borough of Swale. The postcode gazetteer records Milton Regis, Kemsley, Murston, Chalkwell, Snipeshill and Bapchild as suburbs of the town. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to learners there from six years old to 67. A tutor in India runs each lesson live over video, for one learner alone or for a class of five to ten who are at the same point. We teach learners to give an AI a plan with its limits spelled out, then check that the limits were kept. A first lesson costs nothing and ends with the course we think fits. The Sittingbourne project builds a delivery agent that must drop leaflets at 161 stops with a van that holds only so many, and compares three ways of grouping the stops into trips. From then on it is USD 100 a month to learn in a group, or USD 150 a month one-to-one.',
  lead: 'Planning a single round trip is hard enough. Real deliveries add a twist that changes the problem: the van fills up. Once there is a capacity, the question is no longer only "in what order?" but "which stops belong on the same trip?". In 1964 two researchers, Clarke and Wright, published a method that fits in a few lines of arithmetic. Start with the most wasteful plan imaginable, a separate trip to every stop, then keep joining trips wherever joining saves the most distance, as long as the van can carry the combined load. This project runs their savings method on Sittingbourne and checks it against simpler rules.',
  wa: 'Hello Modern Age Coders, could we try a free vibe coding or AI agents lesson? We are in Sittingbourne.',

  picks: {
    eyebrow: 'Course choices',
    h2: 'Sittingbourne courses to start vibe coding and agents',
    intro: 'There is a course below for each age group. None needs a card to begin, and the first live lesson on each is free.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children direct an AI to help build Scratch games and learn to check its work against their plan.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: rules, limits and step-by-step plans, practised on puzzles before code.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Teen vibe coding in Python and the web, including the Sittingbourne delivery planner.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from zero through to algorithms, automation and agents that respect constraints.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Local facts',
      h2: 'Sittingbourne, Milton Regis, Kemsley and Murston',
      intro: 'Populations from the 2021 census and suburb names from the postcode gazetteer.',
      body: [
        { kind: 'table', caption: 'Sittingbourne and Swale at the 2021 census (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Sittingbourne built-up area', '54,390'],
          ['Swale borough', '151,676']
        ] },
        { kind: 'p', text: 'The town figure is the ONS built-up area and the borough figure is the whole of Swale; they are counted on different boundaries. postcodes.io records Milton Regis, Kemsley, Murston, Chalkwell, Snipeshill and Grove Park as suburban areas in the ME10 district and Bapchild as one in ME9. Children here are taught the English national curriculum, so a school year from Year 2 to Year 13 is a useful starting point, and we can work alongside GCSE and A level courses.' },
        { kind: 'callout', h3: 'Kent pages', p: 'Also in our Kent set: <a class="cg-inline-link" href="/coding-classes-in-kent">coding classes in Kent</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-gillingham">Gillingham</a>. The reasoning behind how we teach is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Sittingbourne project',
      h2: 'The Clarke-Wright savings algorithm: filling a van sensibly',
      intro: 'One depot, 161 stops, 21,414 leaflets and a van that cannot take them all at once.',
      body: [
        { kind: 'p', text: 'The ONS splits the Sittingbourne built-up area into 162 census output areas and publishes a centre point for each; by our sum of the area counts they hold 21,521 households. The learner sets up an imaginary leaflet drop: one leaflet per household, left as a bundle at each area\'s centre. The area whose centre is closest to the average of all the centres becomes the depot, leaving 161 stops that need 21,414 leaflets in all. The van holds 3,000. The worst plan is a separate out-and-back trip for every stop, which comes to 478.2 km in straight lines.' },
        { kind: 'p', text: 'The savings idea is one line of arithmetic. If stops A and B are each served alone, the van drives depot to A and back, then depot to B and back. Serve them on one trip and it drives depot, A, B, depot. The saving is the distance from the depot to A, plus the depot to B, minus A to B. The program works this out for all 12,880 pairs of stops, sorts them with the largest saving first, and goes down the list joining trips end to end whenever the combined load still fits. The largest saving was 5.09 km, for two stops about 2.6 km and 3.1 km from the depot and only 0.54 km from each other.' },
        { kind: 'table', caption: 'Total distance to serve all 161 stops, straight-line, our Python run', head: ['Van capacity', 'Closest-next rule', 'Clarke-Wright savings'], rows: [
          ['2,000 leaflets', '11 trips, 81.5 km', '12 trips, 64.1 km'],
          ['3,000 leaflets', '8 trips, 64.7 km', '8 trips, 53.8 km'],
          ['5,000 leaflets', '5 trips, 56.8 km', '5 trips, 45.5 km']
        ] },
        { kind: 'p', text: 'The closest-next rule is what most people would try first: drive to the closest stop that still fits in the van, and go home when nothing fits. With a capacity of 3,000 it needs 8 trips and 64.7 km. The savings method also needs 8 trips but covers 53.8 km, about 17% less, after 153 joins. The 2,000 row holds a surprise. Eleven trips are the fewest that could carry 21,414 leaflets, and the closest-next rule manages it, but the savings method uses 12 trips and still drives less: 64.1 km against 81.5 km. Fewer trips and less distance are different goals, and the algorithm only ever chased distance.' },
        { kind: 'p', text: 'Neither method is proved to give the shortest plan, and the distances are straight lines between area centres, not roads. The leaflet drop and the van sizes are invented for the exercise; the households and locations are real.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Plan deliveries on a paper map with a toy van that holds five parcels, and compare plans by total distance.' },
          { h3: 'Ages 11 to 15', p: 'Compute the saving for every pair of stops in Python and sort the list.' },
          { h3: 'Ages 15 and up', p: 'Code the full method with the capacity check, then test it against the closest-next rule at three van sizes.' }
        ] },
        { kind: 'callout', h3: 'What is real and what is ours', p: 'Household counts are Census 2021 figures from Nomis and the centre points are ONS population-weighted centroids, both Office for National Statistics data under the Open Government Licence. The depot choice, the leaflet scenario, the capacities and every distance are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Agents with limits',
      h2: 'What a full van teaches about vibe coding and AI agents',
      intro: 'An agent that plans without its constraints produces plans that cannot be carried out.',
      body: [
        { kind: 'table', caption: 'From the delivery agent to AI agents in general', head: ['In the Sittingbourne run', 'When building with AI'], rows: [
          ['The van held 3,000 leaflets', 'State every hard limit in the prompt'],
          ['Each join was checked against capacity', 'Make the code enforce limits, not the AI\'s promise'],
          ['Savings beat closest-next by about 17%', 'A named method often beats the first idea'],
          ['12 trips drove less than 11', 'Say which goal you are optimising'],
          ['Final loads were verified in code', 'Test the output, not the explanation']
        ] },
        { kind: 'p', text: 'Vibe coding is making software by talking an AI through what you want. Ask one for a delivery planner without mentioning capacity and you will get a tidy single loop that no van could drive. Our Sittingbourne learners practise writing the limits into the request, asking the AI which algorithm it used, and adding a check that fails loudly if any trip is overloaded. AI agents face the same structure constantly: a budget of tokens, a cap on tool calls, a time limit. Agent projects come after a learner is comfortable in Python, so they are mostly for older teenagers and adults, and Copilot Studio agents are one-to-one only. Two related pages are <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the Office for National Statistics, Nomis nor postcodes.io is associated with Modern Age Coders. Their open data was our starting point; the scenario and the sums are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning stages',
    h2: 'Paper maps first, constrained AI agents later',
    intro: 'Tell us the school year and we will propose a stage; the trial lesson settles it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Plans with rules and limits, tried by hand before any code.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch projects directed by the child and drafted with AI.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Planners, web apps and algorithms with tests attached.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Agents and automation', p: 'Python agents that plan inside budgets and prove they did.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and constraints',
    h2: 'What is the Clarke-Wright savings algorithm, and can an AI agent plan deliveries?',
    intro: 'The Clarke-Wright savings algorithm builds delivery routes by starting with one trip per stop and repeatedly joining the two trips whose merger saves the most distance without overloading the vehicle; an AI agent can plan deliveries well only if it is given such a method and the capacity limit to respect.',
    p1: 'For 161 stops in Sittingbourne and a van holding 3,000 leaflets, one trip per stop came to 478.2 km, a closest-next rule to 64.7 km and the savings algorithm to 53.8 km, each in straight lines.',
    p2: 'A learner who has built that planner asks an agent two things before trusting its plan: what limits it was given, and how the result was checked against them.',
    closer: 'Sittingbourne teenagers who can write the check themselves are the ones who can safely hand planning to an AI, which is a strong reason to learn to code now.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How we teach',
    h2: 'Sittingbourne lessons, live on screen',
    intro: 'Learners join from home on a computer with a camera. A steady connection matters more than a fast one.',
    cells: [
      { h3: 'Doing, not viewing', p: 'Each learner writes and runs their own code on a shared screen while the tutor asks questions and gives hints.' },
      { h3: 'We watch before we place', p: 'The free first session shows the learner\'s real level, and the course choice follows from it.' },
      { h3: 'Try it free', p: 'The opening lesson is not charged and no card is requested.' },
      { h3: 'Classes of five to ten', p: 'Everyone in a class is at one stage; classmates join from all parts of the UK.' },
      { h3: 'Twice a week, term time', p: 'Kent school holidays are left free when you give us the dates.' },
      { h3: 'One fixed UK time', p: 'The March and October clock changes are handled by the tutor.' }
    ],
    spec: { title: 'Why lessons are live and online', p: 'A live tutor can stop and ask "why that line?". An online class can be built from learners at exactly one level, wherever they live.' }
  },

  fees: {
    h2: 'Sittingbourne lesson fees',
    intro: 'Sittingbourne learners are on the price list we use for all countries except India.',
    first: 'A free, full-length first lesson that finishes with our recommendation.',
    group: 'Group teaching, in the region of eight lessons a month.',
    private: 'One-to-one teaching, in the region of eight lessons a month.',
    closer: 'We quote in US dollars only and give no price in sterling. Nothing is charged before the trial, and the first invoice follows once a course and a regular time are agreed. Details on holidays, missed lessons and changing between formats are on the pricing page.'
  },

  reviewsH2: 'Kent families and other UK learners on Google',

  book: {
    h2: 'Get a free Sittingbourne lesson',
    intro: 'Give us an age or school year and something the learner enjoys, and we will plan a trial around it: a toy-van delivery puzzle, a Scratch game built with AI help, first steps in Python, or a small route planner.',
    success: 'Thank you. Your Sittingbourne request has arrived.'
  },

  faq: {
    h2: 'Sittingbourne questions',
    intro: 'The savings method, the delivery project, vibe coding, agents and arrangements.',
    items: [
      { q: 'What is the population of Sittingbourne?', a: 'The ONS built-up area of Sittingbourne had 54,390 usual residents at the 2021 census. The borough of Swale had 151,676.' },
      { q: 'Are vibe coding and AI agents classes available in Sittingbourne?', a: 'Yes. They are live online lessons for ages 6 to 67 in Sittingbourne, Milton Regis, Kemsley, Murston and the rest of Swale.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is creating software by describing it to an AI in natural language, then testing and refining what the AI writes.' },
      { q: 'What is a vehicle routing problem?', a: 'It is the task of planning trips for one or more vehicles of limited capacity so that every stop is served and total distance or cost is low.' },
      { q: 'What did the Sittingbourne project find?', a: 'With a 3,000-leaflet van, the savings algorithm served 161 stops in 8 trips and 53.8 km, against 64.7 km for a closest-next rule and 478.2 km for one trip per stop.' },
      { q: 'Why did the savings method sometimes use more trips?', a: 'It only tries to reduce distance. At a capacity of 2,000 it used 12 trips where 11 were possible, yet drove 64.1 km instead of 81.5 km.' },
      { q: 'How old must a learner be for AI agents?', a: 'There is no fixed age, but agents need secure Python, so most start in their later teens or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Do you help with school computer science?', a: 'Yes, for GCSE and A level, by teaching the ideas properly. We never guarantee grades.' },
      { q: 'What do lessons cost?', a: 'The first is free. After it, group lessons cost USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes. Send the holiday dates and we leave those weeks out.' }
    ]
  },

  next: {
    eyebrow: 'More in Kent',
    h2: 'Kent towns with their own projects',
    html: 'Have a look at <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a> (finding repeated passages in old essays), <a class="cg-inline-link" href="/ai-and-programming-classes-in-chatham">Chatham</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-gillingham">Gillingham</a>. The <a class="cg-inline-link" href="/coding-classes-in-kent">Kent page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> link to all the others.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Sittingbourne and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-sit .cg-hero-grid { align-items: center; gap: clamp(1.25rem, 3vw, 2.5rem); }
.cg-root.cg-sit .cg-hero h1 { font-weight: 765; letter-spacing: -0.027em; line-height: 1.05; }
.cg-root.cg-sit .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 1.1rem; }
.cg-root.cg-sit .cg-eyebrow { letter-spacing: 0.15em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-sit .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.019em; }
.cg-root.cg-sit .cg-table caption { font-weight: 500; font-style: italic; text-align: left; font-size: 0.9rem; }
.cg-root.cg-sit .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sit .cg-table th { font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-sit .cg-ladder-col { border-top: 3px solid var(--cg-accent); border-radius: 3px; padding-top: 0.7rem; }
.cg-root.cg-sit .cg-callout { border-left-width: 5px; border-radius: 2px 12px 12px 2px; }
`,

  dossier: {
    curriculumAuthority: 'Swale (E07000113), Census 2021 TS001 usual residents 151,676. ONS 2021 BUA (published): Sittingbourne 54,390. English national curriculum, GCSE and A level. postcodes.io (Swale) suburban areas: Milton Regis, Kemsley, Murston, Chalkwell, Snipeshill, Grove Park (ME10), Bapchild (ME9).',
    localProject: 'Invented leaflet drop over the 162 ONS centroids of the Sittingbourne BUA (our sum of OA household counts 21,521, TS017); depot = centre closest to the mean; 161 stops, 21,414 leaflets; straight-line. One trip per stop 478.2 km. Capacity 3,000: closest-next 8 trips 64.7 km; Clarke-Wright savings 8 trips 53.8 km (153 merges, 12,880 pairs). Capacity 2,000: 11 trips 81.5 km against 12 trips 64.1 km. Capacity 5,000: 5 trips 56.8 km against 5 trips 45.5 km. Top saving 5.09 km. Lesson family: Clarke-Wright savings algorithm, capacitated vehicle routing.',
    requiredMentions: [
      '151,676',
      '54,390',
      '21,521',
      'Milton Regis',
      'Kemsley',
      'Murston',
      'Bapchild',
      'Chalkwell',
      'Snipeshill',
      'Clarke-Wright'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS017 and TS001 via Nomis; ONS 2021 built-up area populations; ONS output area centroids and lookups (Open Geography Portal).', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Clarke G. and Wright J. W. (1964), Scheduling of vehicles from a central depot to a number of delivery points, Operations Research 12(4), 568 to 581.', url: 'https://doi.org/10.1287/opre.12.4.568' },
      { claim: 'postcodes.io places: suburban areas in Swale.', url: 'https://api.postcodes.io/places?q=Milton%20Regis' }
    ],
    rejectedClaims: [
      'That any plan here is the shortest possible: not proved, not claimed.',
      'Road distances or driving times: none used; straight lines only.',
      'That a real leaflet drop or depot exists: the scenario is invented and the page says so.',
      'Paper mills, the creek and local industry: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
