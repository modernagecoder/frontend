'use strict';
// Orkney Islands (cg- council area page, UK cluster Phase 7, row 274). One council. Spine: how do you share out jobs so
// nobody has a reason to swap? Anchor (read raw 26 September 2026): Historic Environment Scotland LB46400, Category A,
// North Ronaldsay, Sheep Dyke and Associated Punds: "Circa 1832 with later alterations. 12-13 mile-long, roughly 6 foot
// high drystone island perimeter wall"; "probably the largest drystone construction conceived of as a single entity in
// the world"; "Ownership of sheep was common with crofters being allocated numbers according to the size of the
// smallholding"; "The dyke was designed to keep the sheep, for the majority of the year, on the foreshore where they would
// 'graze' on seaweed"; "A sheep court was set up to oversee the maintenance of the flock"; "regulations ... were worked out
// and agreed between the laird and the crofters in 1839"; "The nine circular 'punds'"; "'Punding' was carried out six
// times a year"; "The maintenance of the dyke was traditionally overseen by the sheep court"; "each farmer took a hand in
// the repairs".
// Our model (scratchpad ork/match_v2.py, seed 1832; everything invented): 9 crofters, 9 repair sections round an island;
// crofters prefer near, easy sections; sections (via an invented court) prefer experienced crofters. Gale-Shapley,
// crofters proposing: 32 proposals, stable, no blocking pairs; crofter choice ranks 2, 7, 1, 4, 3, 6, 1, 3, 5 (sum 32).
// Sections proposing: 40 proposals, same matching. Exhaustive check of all 362,880 matchings: exactly 1 stable. First-come
// greedy (crofters in list order take favourite free section): rank sum 34, 10 blocking pairs; last crofter gets 9th
// choice. Cyclic 3 x 3 example (ork/cyc.py): 3 stable matchings; crofters proposing gives every crofter first choice,
// sections proposing gives every crofter third choice.
// Lesson family: stable matching (Gale-Shapley), blocking pairs, proposer advantage; screened (stable marriage, Gale-
// Shapley, stable matching: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Orkney Islands S12000023 22,000; 10,600 households; 22.2 per
// square kilometre; 0 to 14 3,300 (15.0 per cent), 65+ 5,500 (25.0 per cent) by our addition. NRS mid-2020 localities:
// Kirkwall 7,500; Stromness 1,790; Finstown 500. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ORKNEY ISLANDS', blurb: 'Kirkwall, Stromness and the isles, and a North Ronaldsay sheep dyke lesson on sharing out jobs so nobody wants to swap.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-orkney',
  code: 'ork',
  accent: '#223E4C',
  accentRationale: 'Orkney: a North Sea slate blue from the solver (9.09:1 on the darkest paper tint), greyer than the Moray navy and bluer than the East Lothian teal',
  pageType: 'governorate',
  place: {
    name: 'Orkney Islands',
    eyebrow: 'Orkney Islands',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Highlands', href: '/coding-classes-in-highland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Orkney',
  title: 'Coding Classes in the Orkney Islands | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Orkney Islands, from Kirkwall and Stromness to Finstown, Hoy, Sanday, Westray and North Ronaldsay.',
  ogDescription: 'Coding classes for all of Orkney, and a North Ronaldsay sheep dyke project: share out repair jobs with the Gale-Shapley algorithm so nobody has a reason to swap.',
  twitterDescription: 'Orkney coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Orkney Islands',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across the Orkney Islands, taught live in English.'
  },

  h1: 'Coding classes in the Orkney Islands',
  capsuleQ: 'What are the best coding classes in Orkney?',
  capsule: 'The Orkney Islands council area had about 22,000 residents in roughly 10,600 households at Scotland\'s 2022 census, at 22.2 people per square kilometre. Kirkwall is the main town, with Stromness second and Finstown the only other settlement NRS counts as a locality; many islanders live on farms and in smaller isles. Because every lesson is live online from India, an island address makes no difference, and a free first lesson decides where each learner starts, P1 to S6 or adult. Ages 6 to 67 learn coding, Python and maths, either one-to-one or in groups of five to ten. The Orkney project comes from North Ronaldsay\'s sheep dyke. After the free lesson, fees are USD 100 a month for a group or USD 150 a month one-to-one.',
  lead: 'Around the edge of North Ronaldsay runs a drystone wall 12 to 13 miles long and roughly six feet high, built around 1832. Historic Environment Scotland lists it at Category A and calls it probably the largest drystone construction conceived as a single entity in the world. It keeps the island\'s sheep on the shore, where they eat seaweed, and a sheep court oversaw its upkeep, with every farmer taking a hand in the repairs. Sharing out jobs among people with different wishes is a real computing problem. Give everyone their first choice and some sections go unrepaired; assign them carelessly and people quietly swap. This page\'s project solves it in Python with a famous algorithm that guarantees nobody has a reason to break the deal.',
  wa: 'Hello Modern Age Coders, we are in Orkney and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Orkney',
    h2: 'Island starting points',
    intro: 'A P3 pupil in Stromness who likes puzzles, a P7 in Kirkwall ready for Python, an S4 on Hoy thinking about Computing Science, and an adult in Finstown learning to automate. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with sorting games, pairing puzzles and simple rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, with lists, loops and small decision programs.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and data structures for teenagers, including matching and scheduling problems.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, through to planning and allocation scripts.' }
    ]
  },

  sections: [
    {
      id: 'orkney', tint: '', eyebrow: 'Orkney figures',
      h2: 'About 22,000 people across the islands',
      intro: 'The islands-wide totals are 2022 census first results, rounded by National Records of Scotland. Settlement figures are NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Orkney localities, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Kirkwall', '7,500'],
          ['Stromness', '1,790'],
          ['Finstown', '500']
        ] },
        { kind: 'p', text: 'Orkney has 22.2 residents per square kilometre, about a third of Scotland\'s 69.8. From the census age bands, added up by us, 15.0 per cent of islanders are under 15, close to Scotland\'s 15.3, and 25.0 per cent are 65 or over, well above the national 20.1. Orkney Islands Council sets school terms; we have not read them and fit lessons around each family\'s dates.' },
        { kind: 'callout', h3: 'Other island and exam pages', p: 'See <a class="cg-inline-link" href="/coding-classes-in-na-h-eileanan-siar">the Western Isles</a> and <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a>. For qualifications: <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Orkney project',
      h2: 'Nine crofters, nine stretches of wall',
      intro: 'Everyone has preferences, and the job is to find a deal nobody wants to break.',
      body: [
        { kind: 'p', text: 'The model is invented. Nine crofters must each take one of nine stretches of an island wall to repair. Each crofter ranks the stretches, preferring ones near home and ones that are easier. An imaginary court ranks the crofters for each stretch, preferring experienced wallers. A pairing is unstable if some crofter and some stretch both prefer each other to what they were given, because then that crofter has every reason to swap. Computer scientists call such a pair a blocking pair. The goal is a stable matching with none.' },
        { kind: 'table', caption: 'Our invented dyke repairs, three ways of sharing out nine jobs, 26 September 2026', head: ['Method', 'Blocking pairs', 'Crofters\' choice ranks added up', 'Worst-off crofter'], rows: [
          ['First come, first served', '10', '34', 'Ninth choice'],
          ['Gale-Shapley, crofters propose', '0', '32', 'Seventh choice'],
          ['Gale-Shapley, sections propose', '0', '32', 'Seventh choice']
        ] },
        { kind: 'p', text: 'First come, first served feels fair: crofters pick in turn, each taking their favourite free stretch. The early pickers do well, the last one gets their ninth choice, and ten pairs of crofter and stretch would both rather be together, so the arrangement would not last. The Gale-Shapley algorithm, invented in 1962, does better. Unmatched crofters propose to their favourite stretch not yet tried; each stretch holds on to its most preferred offer so far and drops the rest. It always ends, here after 32 proposals, and always gives a stable matching. The learner confirms it by brute force: of all 362,880 possible ways to pair nine crofters with nine stretches, exactly one is stable, and the algorithm found it. Stability even helped the crofters overall, with a lower rank total than first come, first served.' },
        { kind: 'p', text: 'Who proposes can matter enormously. The learner builds a tiny three-by-three example with circular preferences. When crofters propose, all three get their first choice. When the stretches propose, all three crofters get their third choice. Both results are stable. The algorithm always favours the side that proposes, a fact with real consequences when it is used to place doctors in hospitals or pupils in schools.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play the matching game with cards for jobs and people, then spot any pair that would rather swap.' },
          { h3: 'Ages 11 to 15', p: 'Code first come, first served in Python and write a function that finds every blocking pair.' },
          { h3: 'Ages 15 and up', p: 'Implement Gale-Shapley, check stability by brute force, and build the example where proposing changes everything.' }
        ] },
        { kind: 'callout', h3: 'A real wall, an imaginary rota', p: 'The dyke, the sheep court and the shared repairs come from the Historic Environment Scotland listing. How repairs were actually shared out is not described there; the crofters, stretches and preferences here are all invented.' }
      ]
    },
    {
      id: 'sheep-dyke', tint: 'deep', eyebrow: 'Why the North Ronaldsay dyke',
      h2: 'A wall around a whole island',
      intro: 'What Historic Environment Scotland records.',
      body: [
        { kind: 'table', caption: 'North Ronaldsay, Sheep Dyke and Associated Punds, HES listing LB46400', head: ['Listing detail', 'What it records'], rows: [
          ['Date', 'Circa 1832, with later alterations'],
          ['Size', '12 to 13 miles long, roughly six feet high, drystone, around the island\'s perimeter'],
          ['Purpose', 'Keeping sheep on the foreshore, grazing on seaweed, for most of the year'],
          ['Pens', 'Nine circular punds at the north end, near Dennis Head'],
          ['Punding', 'A communal gathering six times a year, for numbering, clipping, dipping and selection'],
          ['Upkeep', 'Overseen by a sheep court; regulations agreed between laird and crofters in 1839']
        ] },
        { kind: 'p', text: 'Stable matching is not a toy. Versions of Gale-Shapley are used to allocate school places, match trainee doctors to hospitals and assign students to university housing, and Lloyd Shapley later shared a Nobel prize in economics for this line of work. An Orkney pupil who has built it from scratch understands one of the most useful algorithms ever written, and why the rules of an allocation matter as much as the code.' },
        { kind: 'p', text: 'We are not connected with Historic Environment Scotland or Orkney Islands Council. The listing facts are theirs; the crofters, the stretches, the preferences and any errors belong to our model.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From card games to algorithms',
    intro: 'Stages are a rough guide. The free lesson places each learner properly.',
    cols: [
      { band: 'P1 to P4', h3: 'Pairs and puzzles', p: 'Block coding with matching games and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Lists and loops', p: 'Typed Python with lists, choices and small simulations.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Algorithms', p: 'Classic algorithms and proofs beside National 5, Higher and Advanced Higher Computing Science.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Planning with code', p: 'Python for adults who schedule, allocate and plan.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fairness',
    h2: 'An AI can produce a rota in seconds. Will anyone want to swap?',
    intro: 'A neat-looking allocation can hide ten reasons to break it.',
    p1: 'Ask a chatbot to allocate people to jobs from a list of preferences and it will produce a tidy table. Whether any pair would both rather be together, and whose side the method quietly favours, is rarely checked unless someone asks.',
    p2: 'An Orkney learner who has written a blocking-pair checker can test any allocation in seconds, and knows that choosing who proposes is a decision about fairness, not a detail. That is the kind of scrutiny AI output needs.',
    closer: 'An Orkney teenager should still learn to code in 2026 for exactly this reason: to check whether a clever-looking answer is also a fair one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Island lessons',
    h2: 'From Kirkwall to the North Isles, online',
    intro: 'For learners on Mainland and on the smaller isles alike, lessons arrive by video.',
    cells: [
      { h3: 'A connection is the only commute', p: 'Any island home with a laptop and steady internet works; the teacher follows the learner\'s screen live.' },
      { h3: 'Scottish stages in use', p: 'We talk in P and S stages and National 5, Higher and Advanced Higher, like Orkney schools, and teach in English.' },
      { h3: 'No-cost first lesson', p: 'A real lesson, free, followed by honest advice.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at the same stage, from many different places.' },
      { h3: 'Lessons in term time', p: 'Two lessons a week during term, with breaks for the holidays.' },
      { h3: 'Same UK time year-round', p: 'Your lesson keeps its UK time through the clock changes; our teachers on India time adapt.' }
    ],
    spec: { title: 'Why island groups are wide', p: 'On any one island there may be no other learner at your stage. Grouping by stage across a wide pool gives a pupil in Stromness or on Sanday a class that fits.' }
  },

  fees: {
    h2: 'Fees in Orkney',
    intro: 'Kirkwall or Westray, the fee is the same, matching every country we teach outside India.',
    first: 'A whole lesson at no charge, then a clear suggestion.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Prices are in US dollars and we have no sterling list. We bill only once a course and a weekly time are agreed after the free lesson; holidays, missed lessons and format changes are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews of our teaching',

  book: {
    h2: 'Book a free Orkney lesson',
    intro: 'Tell us which island, the learner\'s age or stage, and what they enjoy. The first lesson could be a Scratch puzzle, a first Python program, or the matching problem on this page.',
    success: 'Thank you. Your Orkney request has reached us.'
  },

  faq: {
    h2: 'Orkney questions',
    intro: 'The islands, the sheep dyke project and how lessons work.',
    items: [
      { q: 'How many people live in Orkney?', a: 'About 22,000 residents in roughly 10,600 households, from the rounded first results of Scotland\'s 2022 census.' },
      { q: 'What are the main towns in Orkney?', a: 'NRS mid-2020 estimates give Kirkwall 7,500 and Stromness 1,790, with Finstown at 500.' },
      { q: 'What is the North Ronaldsay project?', a: 'Learners share out nine invented repair jobs on an island wall using the Gale-Shapley algorithm in Python, check that no pair would rather swap, and see how first come, first served leaves ten such pairs.' },
      { q: 'What is a stable matching?', a: 'A pairing in which no two sides would both prefer each other to the partners they were given, so nobody has a reason to break the arrangement.' },
      { q: 'How long is the North Ronaldsay sheep dyke?', a: 'Historic Environment Scotland describes it as 12 to 13 miles long and roughly six feet high, built around 1832, and lists it at Category A.' },
      { q: 'Can learners on the smaller isles join?', a: 'Yes. Lessons are online, so anyone with a reliable internet connection can take part.' },
      { q: 'Do you teach Higher Computing Science?', a: 'Yes, along with National 5 Computing Science and maths. We teach understanding and do not promise grades.' },
      { q: 'What ages can learn?', a: 'Anyone aged 6 to 67, from block coding for children to algorithms for teenagers and Python for adults.' },
      { q: 'What does it cost?', a: 'The first lesson is free. After that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes. Send us your school\'s holiday dates and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Further pages',
    h2: 'Beyond Orkney',
    html: 'See <a class="cg-inline-link" href="/coding-classes-in-na-h-eileanan-siar">the Western Isles</a>, <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a> and <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, or every council on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Orkney and beyond',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-highland', label: 'Highlands' },
    { href: '/higher-computing-science-help', label: 'Higher Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-ork .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.7vw, 2.3rem); }
.cg-root.cg-ork .cg-hero h1 { font-weight: 720; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-ork .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-ork .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ork .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-ork .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-ork .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ork .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-ork .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-ork .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Orkney Islands (S12000023), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 22,000 (females 11,200, males 10,800); households 10,600; density 22.2 per square kilometre (Scotland 69.8); ages 0 to 14 3,300 (15.0 per cent), 65+ 5,500 (25.0 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Kirkwall 7,500; Stromness 1,790; Finstown 500. HES LB46400 (Category A, added 16/09/1999), North Ronaldsay, Sheep Dyke and Associated Punds, parish Cross and Burness: "Circa 1832 with later alterations. 12-13 mile-long, roughly 6 foot high drystone island perimeter wall"; "probably the largest drystone construction conceived of as a single entity in the world"; "crofters being allocated numbers according to the size of the smallholding"; "keep the sheep, for the majority of the year, on the foreshore where they would \'graze\' on seaweed"; "A sheep court was set up"; "worked out and agreed between the laird and the crofters in 1839"; "The nine circular \'punds\'"; "\'Punding\' was carried out six times a year"; "each farmer took a hand in the repairs". Hoy, Sanday and Westray are Orkney islands (HES Orkney listings include Hoy; islands named only as places).',
    localProject: 'Invented: 9 crofters, 9 sections; crofter prefs = 0.5 x distance + section difficulty + noise; section prefs = -experience + noise + 2 x distance; seed 1832. Crofter-proposing Gale-Shapley: 32 proposals, 0 blocking, ranks 2,7,1,4,3,6,1,3,5 (sum 32, worst 7th). Section-proposing: 40 proposals, same matching. Exhaustive 362,880 matchings: 1 stable. Greedy first come: rank sum 34, worst 9th, 10 blocking pairs. Cyclic 3x3: 3 stable matchings; crofters propose all 1st choice; sections propose all 3rd. Gale-Shapley 1962 and Nobel (economics, 2012) are general knowledge. Lesson family: stable matching.',
    requiredMentions: [
      '10,600',
      'Kirkwall',
      'Stromness',
      'Finstown',
      'North Ronaldsay',
      'sheep dyke',
      'LB46400',
      'Gale-Shapley',
      'stable matching',
      'punds',
      'Dennis Head'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB46400: North Ronaldsay, Sheep Dyke and Associated Punds.', url: 'https://portal.historicenvironment.scot/designation/LB46400' }
    ],
    rejectedClaims: [
      'How dyke repairs were actually allocated: not in the listing; the model is invented.',
      'Current sheep numbers or the island\'s current population: not read, not claimed.',
      'Skara Brae dates: HES visitor page gives about 5,000 years; not used here.',
      'Ferry or air links between islands: not claimed.',
      'Named Orkney schools and school term dates: none named or read.',
      'That North Ronaldsay is the most northerly isle: not claimed.'
    ]
  }
};
