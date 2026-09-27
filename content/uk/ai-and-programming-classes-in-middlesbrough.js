'use strict';
// Middlesbrough (cg- town page, UK cluster Phase 8, towns band A, row 340). Keyword slug per the owner's 2026-09-27
// instruction. Spine: which Marton was Captain Cook born in? Anchors (read raw 27 September 2026): Project Gutenberg ebook
// 10842, Arthur Kitson, "The Life of Captain James Cook, the Circumnavigator": the parents "resided for some time at
// Morton, in the parish of Ormsby"; "Shortly after the birth of John, the Cooks left Morton for Marton, a village a few
// miles away, and the similarity of the two names has caused some confusion"; "a small cottage built of mud, called in the
// district a clay biggin"; "James Cook, the Circumnavigator, was born on 27th October 1728, and was registered as baptised
// on 3rd November in the Marton church records"; his sister Margaret "married a Redcar fisherman"; mother "a native of
// Cleveland". postcodes.io /places (OS Open Names), q=Marton: 25 results, 12 named exactly "Marton" (Middlesbrough suburban
// area; North Yorkshire x2; East Riding x2; Westmorland and Furness; West Lindsey; Cheshire East; Cheshire West and Chester;
// Shropshire x2; Rugby); q=Redcar: Redcar, Town, Redcar and Cleveland, 54.6178, -1.0700; q=Morton: 23 results, none in
// Redcar and Cleveland or Middlesbrough.
// Our run (27 September 2026): straight-line distance from Redcar to each exact Marton (haversine, 6,371.0088 km sphere):
// Middlesbrough 12.8 km; North Yorkshire 43.9 and 64.9; East Riding 81.5 and 103.4; Westmorland and Furness 143.9; West
// Lindsey 145.2; Cheshire East 173.7; Cheshire West and Chester 185.0; Shropshire 231.9 and 258.3; Rugby 256.8.
// Lesson family: place-name disambiguation with a gazetteer (exact vs partial matches, context scoring), and a name that has
// left the gazetteer; screened (disambiguation, gazetteer, geocoding, record linkage: 0 hits; Scotland's edit distance and
// Aberdeen's place names are different tasks). "Redcar" is registered elsewhere, so it is not a required mention.
// Place facts: Nomis Census 2021 TS007A, Middlesbrough E06000002: total 143,926; under 5 8,928 (6.2%; England 5.4%); 5 to 9
// 9,795 (6.8%; 5.9%); 20 to 24 10,171 (7.1%; 6.0%); 25 to 29 10,322 (7.2%; 6.6%); 45 to 49 7,930 (5.5%; 6.4%); 50 to 54 8,736
// (6.1%; 6.9%). ONS 2021 BUAs: Middlesbrough 148,215 (reaches beyond the borough); Stainton 1,815.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'MIDDLESBROUGH', label: 'Middlesbrough', blurb: 'AI and programming classes for Middlesbrough, with a project that works out which of twelve Martons was Captain Cook\'s birthplace.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-middlesbrough',
  code: 'mbr',
  accent: '#6B1028',
  accentRationale: 'Middlesbrough: a Teesside ironstone red (9.78:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Middlesbrough',
    eyebrow: 'Middlesbrough, North Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'North Yorkshire', href: '/coding-classes-in-north-yorkshire' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Middlesbrough, England',
  title: 'AI and Programming Classes in Middlesbrough | Coding, 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Middlesbrough, Marton and Stainton learners aged 6 to 67, live one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Middlesbrough, and a Python project that uses a gazetteer to decide which Marton was Captain Cook\'s birthplace.',
  twitterDescription: 'Middlesbrough AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Middlesbrough',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Middlesbrough, taught live and placed by level.'
  },

  h1: 'AI and programming classes in Middlesbrough',
  capsuleQ: 'What are the best AI and programming classes in Middlesbrough?',
  capsule: 'Middlesbrough borough had 143,926 residents in the 2021 census, and the ONS gives 148,215 for the Middlesbrough built-up area, which reaches past the borough edge. It is young: children under ten and adults aged 20 to 29 are above the England share, while people in their late forties and early fifties are fewer. Our tutors in India teach AI, programming, Python and maths over live video to anyone aged 6 to 67, privately or in groups of five to ten at the same stage. The first lesson is free and decides the course. The Middlesbrough project asks a computer to find Captain Cook\'s birthplace among a dozen places with the same name. Group lessons then cost USD 100 a month and private ones USD 150 a month.',
  lead: 'Arthur Kitson\'s biography of Captain Cook records that the explorer was born on 27 October 1728 in a mud cottage, "called in the district a clay biggin", at Marton, and that his parents had earlier lived at Morton, in the parish of Ormsby, adding that "the similarity of the two names has caused some confusion". Today Marton is a suburban area of Middlesbrough. But type "Marton" into a gazetteer, a database of place names, and it returns 25 results, 12 of them named exactly Marton, from Shropshire to Cheshire to the East Riding. How would a program know which one the biography means? A Middlesbrough learner can solve it with the clues in the book itself, and discover why the Morton half of the story is even harder.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Middlesbrough.',

  picks: {
    eyebrow: 'Middlesbrough course picks',
    h2: 'Courses Middlesbrough learners start with',
    intro: 'Choose one by age and interest. Every course opens with a free live lesson, with no card required.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with maps, journeys and treasure hunts.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with lists and searches, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the Marton gazetteer project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from the first line, up to APIs and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Middlesbrough borough',
      h2: 'Children and young adults',
      intro: 'Census table TS007A (2021) for Middlesbrough, from Nomis, six bands beside England.',
      body: [
        { kind: 'table', caption: 'Middlesbrough borough and England, six age bands, Census 2021 TS007A', head: ['Age', 'Middlesbrough residents', 'Middlesbrough %', 'England %'], rows: [
          ['Under 5', '8,928', '6.2%', '5.4%'],
          ['5 to 9', '9,795', '6.8%', '5.9%'],
          ['20 to 24', '10,171', '7.1%', '6.0%'],
          ['25 to 29', '10,322', '7.2%', '6.6%'],
          ['45 to 49', '7,930', '5.5%', '6.4%'],
          ['50 to 54', '8,736', '6.1%', '6.9%']
        ] },
        { kind: 'p', text: 'Young children and people in their twenties are well above the national share, and the middle-aged below it. Besides the main built-up area, the ONS lists Stainton at 1,815 inside the borough. Schools in Middlesbrough teach the national curriculum for England, and we pause lessons for the holidays you send.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">North Yorkshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Middlesbrough project',
      h2: 'Twelve Martons and one birthplace',
      intro: 'Search a gazetteer, filter exact matches, then score candidates with clues from the text.',
      body: [
        { kind: 'p', text: 'The learner sends the word Marton to a free public place-name search built on Ordnance Survey data and gets 25 results back. The first step is filtering: Long Marton, Marton-le-Moor, Great Marton and the rest share the letters but are different names, so the program keeps only exact matches. That leaves 12. Each comes with a county, a type such as village or suburban area, and a latitude and longitude. The question is how to choose.' },
        { kind: 'table', caption: 'Our Python ranking of exact Martons by straight-line distance from Redcar, 27 September 2026', head: ['Candidate Marton', 'Type', 'Distance from Redcar', 'Rank'], rows: [
          ['Middlesbrough', 'Suburban area', '12.8 km', '1'],
          ['North Yorkshire (nearer)', 'Village', '43.9 km', '2'],
          ['North Yorkshire (farther)', 'Village', '64.9 km', '3'],
          ['East Riding of Yorkshire', 'Suburban area', '81.5 km', '4'],
          ['Westmorland and Furness', 'Village', '143.9 km', '6'],
          ['Warwickshire, near Rugby', 'Village', '256.8 km', '11']
        ] },
        { kind: 'p', text: 'The biography supplies context: Cook\'s mother was a native of Cleveland, and his sister married a Redcar fisherman. The learner looks up Redcar, a single unambiguous town, and computes the straight-line distance from it to each Marton. Middlesbrough\'s Marton comes first at 12.8 kilometres; the next is 43.9 kilometres away in North Yorkshire. A margin that wide makes the answer convincing, though the learner writes down that it is an inference from clues, not a fact the gazetteer states.' },
        { kind: 'p', text: 'Then comes the harder half. The same search for Morton returns 23 places, and none of them is in Middlesbrough or Redcar and Cleveland. The Morton in the parish of Ormsby that Kitson mentions is simply not in the modern gazetteer under that name. The learner\'s program must be able to say "no confident match" instead of picking the nearest wrong one, and a test checks that it does. That is the real lesson in disambiguation: knowing when to refuse.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find three places with the same name on a map and decide which one a story means from its clues.' },
          { h3: 'Ages 11 to 15', p: 'Query the gazetteer in Python, filter exact matches, and rank them by distance.' },
          { h3: 'Ages 15 and up', p: 'Score several clues at once, set a confidence threshold, and handle the Morton case.' }
        ] },
        { kind: 'callout', h3: 'Kitson\'s clues, our ranking', p: 'The biography is the Project Gutenberg edition of Arthur Kitson\'s Life of Captain James Cook, and the place names come from the postcodes.io places service built on Ordnance Survey Open Names. The distances and ranking are ours.' }
      ]
    },
    {
      id: 'cook', tint: 'deep', eyebrow: 'Why Captain Cook',
      h2: 'A clay biggin at Marton',
      intro: 'What Arthur Kitson records about Cook\'s birthplace.',
      body: [
        { kind: 'table', caption: 'Captain Cook\'s early years, from Kitson\'s biography (Project Gutenberg)', head: ['Detail', 'According to Kitson'], rows: [
          ['Born', '27 October 1728, at Marton'],
          ['Baptised', '3 November, recorded in the Marton church records'],
          ['The cottage', 'Built of mud, called locally a clay biggin'],
          ['Earlier family home', 'Morton, in the parish of Ormsby'],
          ['The confusion', 'The similarity of the two names'],
          ['A family clue', 'His sister married a Redcar fisherman']
        ] },
        { kind: 'p', text: 'Disambiguation is everywhere in software. Map apps decide which Springfield you mean, search engines decide whether Jaguar is a car or a cat, and hospital systems must never merge two patients who share a name. Good programs weigh the evidence, show how sure they are, and stop when they are not sure. A Middlesbrough learner who has matched Kitson\'s Marton and refused to guess his Morton has practised exactly that judgement.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg, Ordnance Survey, postcodes.io or the ONS. Their records remain theirs, and the ranking with its possible errors is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From map clues to real data services',
    intro: 'Years are a rough guide; the free lesson finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Maps and blocks', p: 'Block coding with grids, maps and simple searches.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and lists', p: 'Lists, filtering and distances in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'APIs, scoring and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Real-world data', p: 'Adult Python working with live data services.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and names',
    h2: 'Does an AI admit when it cannot tell?',
    intro: 'Picking the nearest guess is not the same as being right.',
    p1: 'Ask a chatbot where a Morton in the parish of Ormsby is and it may well name a place confidently. The modern gazetteer has no such entry, and an honest answer would say so.',
    p2: 'A Middlesbrough learner who has written a program that can refuse knows to value "not sure" over a confident guess.',
    closer: 'Knowing when a program should refuse to guess is the kind of judgement that makes coding worth learning for Middlesbrough teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Marton to Stainton, all online',
    intro: 'Every neighbourhood in the borough joins by video.',
    cells: [
      { h3: 'Typed by the student', p: 'Each program is the learner\'s own work; the tutor follows the shared screen and prompts with questions.' },
      { h3: 'The right entry point', p: 'Year 4 or Year 13, where a learner starts depends on school year and the trial, with their exam board named.' },
      { h3: 'Trial without charge', p: 'The opening lesson is free and ends with honest advice.' },
      { h3: 'Stage-matched groups', p: 'Five to ten learners from across the UK, all at one level.' },
      { h3: 'Term-time pattern', p: 'Two lessons a week during term; holidays stay clear.' },
      { h3: 'Constant lesson time', p: 'UK clock changes shift our tutors, not your slot.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Middlesbrough learners at one stage, free at the same time, rarely live on one street. Online groups fix that.' }
  },

  fees: {
    h2: 'Middlesbrough fees',
    intro: 'Teesside families are charged the single rate we use for every country outside India.',
    first: 'A whole lesson free, finishing with a recommendation.',
    group: 'Around eight live small-group lessons a month.',
    private: 'Around eight live private lessons a month.',
    closer: 'All fees are in US dollars rather than sterling. There is no bill until the trial has fixed a course and a weekly time; holidays, absences and format changes are explained on the pricing page.'
  },

  reviewsH2: 'What families write on Google',

  book: {
    h2: 'Book a free Middlesbrough lesson',
    intro: 'Share the learner\'s age or year group and something they enjoy. Trial ideas: a Scratch treasure map, a first Python script, a short AI task, or ranking the twelve Martons.',
    success: 'Thank you. Your Middlesbrough request has arrived.'
  },

  faq: {
    h2: 'Middlesbrough questions',
    intro: 'The borough, the Cook project and practical details.',
    items: [
      { q: 'What is the population of Middlesbrough?', a: 'The 2021 census counted 143,926 in Middlesbrough borough; the ONS gives 148,215 for the Middlesbrough built-up area.' },
      { q: 'Can Middlesbrough learners take AI and programming classes online?', a: 'Yes. Learners aged 6 to 67 in Middlesbrough join live online AI, programming, Python and maths lessons.' },
      { q: 'What is the Captain Cook project?', a: 'Learners search a gazetteer for Marton, filter 25 results to 12 exact matches, and use clues from Kitson\'s biography to pick the right one.' },
      { q: 'What is a gazetteer?', a: 'A database of place names with their locations and types, like the index of an atlas.' },
      { q: 'Where was Captain Cook born?', a: 'Kitson\'s biography says at Marton, on 27 October 1728; Marton is today a suburban area of Middlesbrough.' },
      { q: 'Are lessons held locally?', a: 'No, they run live online.' },
      { q: 'Do you teach GCSE and A level topics?', a: 'Yes, maths and computing, for understanding; grades are never promised.' },
      { q: 'Who can join?', a: 'Learners aged 6 to 67.' },
      { q: 'What do lessons cost?', a: 'A trial costs nothing. From then on it is USD 100 per month for a class place, or USD 150 per month for lessons on your own.' },
      { q: 'Are there lessons in the holidays?', a: 'No; we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Middlesbrough',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">North Yorkshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Middlesbrough and North Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-yorkshire', label: 'North Yorkshire' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-mbr .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-mbr .cg-hero h1 { font-weight: 760; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-mbr .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-mbr .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mbr .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-mbr .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-mbr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mbr .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-mbr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-mbr .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Middlesbrough (E06000002). Nomis Census 2021 TS007A: total 143,926; under 5 8,928 (6.2%, England 5.4%); 5 to 9 9,795 (6.8%, 5.9%); 20 to 24 10,171 (7.1%, 6.0%); 25 to 29 10,322 (7.2%, 6.6%); 45 to 49 7,930 (5.5%, 6.4%); 50 to 54 8,736 (6.1%, 6.9%). ONS 2021 BUAs: Middlesbrough 148,215; Stainton 1,815. Project Gutenberg 10842, Arthur Kitson, Life of Captain James Cook: Morton "in the parish of Ormsby"; "the similarity of the two names has caused some confusion"; "clay biggin"; "born on 27th October 1728"; sister married "a Redcar fisherman". postcodes.io places: Marton 25 results, 12 exact; Middlesbrough Marton = Suburban Area; Redcar town 54.6178, -1.0700; Morton 23 results, none in Middlesbrough or Redcar and Cleveland.',
    localProject: 'Gazetteer disambiguation: 25 Marton results, 12 exact; distance from Redcar: Middlesbrough 12.8 km, North Yorkshire 43.9 and 64.9, East Riding 81.5 and 103.4, Westmorland and Furness 143.9, West Lindsey 145.2, Cheshire East 173.7, Cheshire West and Chester 185.0, Shropshire 231.9 and 258.3, Rugby 256.8. Morton: no confident match. Lesson family: disambiguation, exact vs partial matching, context scoring, refusal.',
    requiredMentions: [
      '148,215',
      '143,926',
      'Stainton',
      'Marton',
      'Arthur Kitson',
      'Ormsby',
      'gazetteer',
      'disambiguation',
      'clay biggin'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Middlesbrough and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Arthur Kitson, The Life of Captain James Cook (ebook 10842).', url: 'https://www.gutenberg.org/ebooks/10842' },
      { claim: 'postcodes.io places search (Ordnance Survey Open Names), Marton, Morton and Redcar.', url: 'https://api.postcodes.io/places?q=Marton' }
    ],
    rejectedClaims: [
      'Where the Ormsby Morton lies today: not in the gazetteer; not claimed.',
      'That the Middlesbrough Marton is certainly the birthplace: presented as the inference from the biography\'s clues, matching Kitson.',
      'Cook\'s voyages and later life: not discussed.',
      'Transporter Bridge and industrial history: not claimed (Historic England returned 403).',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
