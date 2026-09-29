'use strict';
// Cannock (cg- town page, UK cluster Phase 8, towns band A, row 397). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when an AI groups things into
// "similar" families, how much does the method decide the answer? (hierarchical clustering, linkage choice, dendrograms).
// Data (read 28 September 2026, reused): Nomis API, Census 2021 TS007A age by five-year bands for all 296 English local
// authority districts as of April 2023 (scratchpad hal/ages.json, also used for Halifax's nearest-centroid page, which
// is a different method). Features: the share of residents in each of 18 age bands. Cannock Chase (E07000192) 100,519.
// Our run (scratchpad cnk/hc.py): SciPy hierarchical clustering, Euclidean distance. Group sizes when cut into 4 groups:
// single linkage 293, 1, 1, 1 (the three singletons: Isles of Scilly, City of London, Tower Hamlets); complete 162, 93, 32,
// 9; average 229, 57, 9, 1; Ward 159, 77, 33, 27. Cut into 8 groups with Ward: largest groups 92, 64, 47, 27, 24, 20;
// Cannock Chase sits in the 92-district group, which spans all eight English regions outside London (South East 23, East
// Midlands 16, North West 14, East 13, West Midlands 10, North East 7, Yorkshire and The Humber 7, South West 2).
// Cophenetic correlation: single 0.714, complete 0.562, average 0.797, Ward 0.696. Closest single districts by age
// profile (distance x1000): Barnsley 5.81, Wakefield 8.08, Ashfield 9.19, Wigan 9.47, Bolsover 9.92.
// Lesson family: hierarchical clustering, linkage choice (chaining), dendrogram cut level, cophenetic correlation.
// Screened: hierarchical clustering, dendrogram, single linkage 0 hits. Halifax owns nearest centroid on the same data;
// Runcorn owns DBSCAN; k-means is used on two other pages.
// Place facts: ONS 2021 BUAs (published): Cannock 63,065; Norton Canes 8,150; Rawnsley 2,470; Rugeley straddles the
// district boundary and is not tabled. postcodes.io (Cannock Chase) suburban areas: Hednesford, Heath Hayes, Chadsmoor,
// Bridgtown, Pye Green, Wimblebury, Hawks Green.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CANNOCK', label: 'Cannock', blurb: 'Coding and AI classes for Cannock, with a clustering project showing how the choice of method decides which districts count as Cannock Chase\'s look-alikes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-cannock',
  code: 'cnc',
  accent: '#5A228A',
  accentRationale: 'Cannock: a deep heather violet (8.33:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Cannock',
    eyebrow: 'Cannock, Cannock Chase, Staffordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands region' }],
  nav: [
    { label: 'Staffordshire', href: '/coding-classes-in-staffordshire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cannock, England',
  title: 'Coding and AI Classes in Cannock | Python, Vibe Coding, 6-67',
  description: 'Online coding, AI, Python and vibe coding classes for Cannock, Hednesford, Heath Hayes and Norton Canes learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Cannock, and a Python clustering project on which districts Cannock Chase most resembles, and why the answer depends on the method.',
  twitterDescription: 'Cannock coding, AI, Python and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Cannock',
    description: 'Online coding, AI, Python, vibe coding and mathematics for children, teenagers and adults in Cannock and Cannock Chase district, taught live with thinking skills first.'
  },

  h1: 'Coding and AI classes in Cannock',
  capsuleQ: 'Where can Cannock learners find the best coding and AI classes?',
  capsule: 'At the 2021 census 100,519 people lived in Cannock Chase district, and the ONS gives the Cannock built-up area 63,065, with Norton Canes and Rawnsley listed separately; Hednesford, Heath Hayes, Chadsmoor and Bridgtown are among the recorded suburbs. From primary age to 67, Cannock Chase learners can take coding, AI, Python, vibe coding and maths on camera with an India-based tutor, privately or among five to ten classmates of similar ability. We teach thinking before tools, so a learner can question how an AI grouped or ranked something. Lesson one is free and finishes with a course recommendation. Cannock\'s project asks which English districts are most like Cannock Chase, and shows how much the answer depends on the method. Continuing costs USD 100 for each month in a class or USD 150 for each month of private lessons.',
  lead: 'Recommendation engines, customer segmentation and many AI tools group things into families of "similar" items without being told what the families are. One classic way to do it is hierarchical clustering: start with every item on its own, repeatedly merge the two closest groups, and draw the whole history as a tree called a dendrogram. The catch is that "closest groups" can be defined in several ways, called linkages. This project clusters all 296 districts of England by the age make-up of their residents from the 2021 census, looks at where Cannock Chase lands, and finds that changing the linkage can turn a sensible set of families into one enormous group and three outcasts.',
  wa: 'Hello Modern Age Coders, can we book a free coding or AI lesson for a learner in Cannock?',

  picks: {
    eyebrow: 'Cannock course picks',
    h2: 'Cannock courses in thinking, vibe coding and AI',
    intro: 'Pick by age; each course opens with a free live lesson, reserved without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: sorting into families and explaining what makes things similar.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by describing them to AI and testing them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, from clustering to classifiers, including this district family tree.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI groups, ranks and recommends, through to language models and agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Cannock Chase',
      h2: 'Cannock, Norton Canes and the district',
      intro: 'ONS 2021 census counts for built-up areas inside Cannock Chase, and suburbs recorded around Cannock.',
      body: [
        { kind: 'table', caption: 'Built-up areas within Cannock Chase district, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Cannock', '63,065'],
          ['Norton Canes', '8,150'],
          ['Rawnsley', '2,470']
        ] },
        { kind: 'p', text: 'These ONS figures are shown separately, as published; the district total of 100,519 comes from its own table, and Rugeley is left out of the table because its built-up area runs across the district boundary. Hednesford, Heath Hayes, Chadsmoor, Bridgtown, Pye Green, Wimblebury and Hawks Green are all recorded as suburban areas in Cannock Chase. Schools follow England\'s national curriculum, and we will fit lessons around any holiday dates you send.' },
        { kind: 'callout', h3: 'Staffordshire, the region and our approach', p: 'For more options see <a class="cg-inline-link" href="/coding-classes-in-staffordshire">coding classes in Staffordshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">the West Midlands region page</a>. Why reasoning comes before prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cannock project',
      h2: 'Which districts are like Cannock Chase? Hierarchical clustering and its linkages',
      intro: 'Describe every district by its age make-up, build a family tree of districts four ways, and compare the families.',
      body: [
        { kind: 'p', text: 'Using the Nomis API, the learner describes all 296 English districts by the same 18 numbers: what fraction of residents falls in each five-year age band at the 2021 census. On that measure, the single districts closest to Cannock Chase are Barnsley, Wakefield, Ashfield, Wigan and Bolsover, none of them in the West Midlands. Hierarchical clustering then goes further than nearest neighbours: it builds a complete family tree, merging the two most similar groups again and again until only one is left.' },
        { kind: 'p', text: 'The linkage decides what "most similar groups" means. Single linkage uses the closest pair of members, complete linkage the furthest pair, average linkage the average of all pairs, and Ward\'s method merges whichever pair of groups adds least spread. Cutting each tree into four families gives startlingly different results.' },
        { kind: 'table', caption: 'Family sizes when England\'s 296 districts are cut into four groups by age profile, our Python run on Census 2021 TS007A, 29 September 2026', head: ['Linkage', 'Sizes of the four families'], rows: [
          ['Single', '293, 1, 1, 1'],
          ['Complete', '162, 93, 32, 9'],
          ['Average', '229, 57, 9, 1'],
          ['Ward', '159, 77, 33, 27']
        ] },
        { kind: 'p', text: 'Single linkage suffers from chaining: districts join the big group one after another through a chain of close neighbours, so almost everything ends up in one family and the only other "families" are three districts with unusual age profiles, the Isles of Scilly, the City of London and Tower Hamlets. That is technically correct and practically useless. Ward\'s method gives families of comparable size, one reason it is a common choice for this kind of task. With Ward and eight families, Cannock Chase sits in a family of 92 districts drawn from every English region outside London, including 23 from the South East and 16 from the East Midlands.' },
        { kind: 'p', text: 'There is also a way to score how faithfully each tree reflects the original distances, the cophenetic correlation: 0.797 for average linkage, 0.714 for single, 0.696 for Ward and 0.562 for complete. The tree that looks most useful is not the one that scores highest. Choosing a clustering method means deciding what the groups are for, not just reading off a number.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pair up the two most alike cards, then the next two, and keep merging until one family remains.' },
          { h3: 'Ages 11 to 15', p: 'Turn census age counts into shares in Python and find the districts most like Cannock Chase.' },
          { h3: 'Ages 15 and up', p: 'Build dendrograms with four linkages, cut them and compare the families you get.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our family trees', p: 'The age counts are Census 2021 figures from the Office for National Statistics, read through Nomis. The shares, distances, trees and family sizes are our own work, and "similar" here means similar age make-up only.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Grouping and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Groupings say as much about the method as about the data.',
      body: [
        { kind: 'table', caption: 'From Cannock\'s district families to AI groupings', head: ['In the clustering project', 'When AI groups or recommends'], rows: [
          ['Single linkage made one giant family', 'A default method can give a useless answer'],
          ['Ward gave balanced families', 'The right method depends on the purpose'],
          ['Cannock Chase\'s closest match was Barnsley', 'Similar on one measure is not similar on all'],
          ['The highest-scoring tree was not the most useful', 'Scores need judgement to interpret'],
          ['Three districts were outliers', 'Unusual cases can dominate some methods']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to "group these into similar clusters" and it will pick a method for you, often without saying which. When Cannock learners vibe code, describing a program for an AI to write, they look up which linkage and distance it used and rerun with at least one other. AI agents that segment customers or sort documents make the same hidden choices, so knowing what to ask about is valuable. Older teens and adults move on to agent building when their Python is secure; Copilot Studio agents are always taught privately. The progression is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents page for UK learners</a>; the thinking is in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io. We used only their openly published figures; the trees, and any slips in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting cards to dendrograms',
    intro: 'School year gives a starting idea, and the trial lesson confirms the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, similarity and explaining a grouping.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Data, distances and clustering alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Unsupervised learning and agents', p: 'Clustering, recommendations, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and similarity',
    h2: 'What is hierarchical clustering, and why does the linkage matter?',
    intro: 'It builds a family tree by merging the most similar groups step by step; the linkage decides what "most similar" means.',
    p1: 'On England\'s 296 districts, single linkage produced one family of 293 and three outliers, while Ward\'s method produced four balanced families. Same data, same distances, very different stories.',
    p2: 'Learners who have seen that happen ask which method sits behind any AI grouping before they believe what it says.',
    closer: 'Understanding how AI decides what counts as similar gives Cannock teenagers an advantage with every tool they use, a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hednesford to Norton Canes, online',
    intro: 'A laptop or desktop and a connection good enough for video calls are enough.',
    cells: [
      { h3: 'Students at the keyboard', p: 'Learners type, prompt and run their own code, and the tutor follows through screen share with questions.' },
      { h3: 'Placed by the trial', p: 'The free session, rather than year group alone, shows where to begin; exam boards are recorded.' },
      { h3: 'Opening lesson free', p: 'No fee for the first session, which ends with our course advice.' },
      { h3: 'Groups by stage', p: 'Five to ten learners from around Britain at a similar level in each class.' },
      { h3: 'Twice a week', p: 'No lessons over the school holidays.' },
      { h3: 'Unchanging slots', p: 'Tutors follow the UK clock changes so your lesson time stays fixed.' }
    ],
    spec: { title: 'Why classes are online', p: 'Five learners at one level, all free on the same evening, are unlikely to live close together. Online, they can share a class.' }
  },

  fees: {
    h2: 'Cannock fees',
    intro: 'In Cannock, as in every country bar India, our international prices apply.',
    first: 'A full free first lesson, ending with a course recommendation.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'We charge in US dollars, not sterling, and invoice only after the trial has settled a course and a regular weekly time. The pricing page explains holidays, absences and switching between group and private.'
  },

  reviewsH2: 'Google reviews from Staffordshire and further afield',

  book: {
    h2: 'Book a free Cannock lesson',
    intro: 'An age or year group plus one interest is all we need to plan. For the trial we might sort picture cards into families, build a Scratch game with an AI, write some first Python, or group real towns by their figures.',
    success: 'Thank you. Your Cannock request has been received.'
  },

  faq: {
    h2: 'Cannock questions',
    intro: 'Clustering, the district-families project, vibe coding and practical details.',
    items: [
      { q: 'How many people live in Cannock?', a: 'The 2021 census counted 63,065 in the Cannock built-up area (ONS) and 100,519 across Cannock Chase district.' },
      { q: 'Are coding and AI classes available in Cannock?', a: 'Yes, live online, for learners aged 6 to 67 across Cannock Chase.' },
      { q: 'What is a dendrogram?', a: 'A tree diagram showing the order in which a hierarchical clustering merged items and groups, and how far apart they were when merged.' },
      { q: 'What is the Cannock project?', a: 'Learners cluster all 296 English districts by the age make-up of their residents, see where Cannock Chase lands, and compare four linkage methods.' },
      { q: 'Is vibe coding included?', a: 'Yes, at every age, with the learner planning and testing what the AI produces.' },
      { q: 'When can learners start on AI agents?', a: 'Python first, then agents, which for most means the late teens or later; Copilot Studio agents are private lessons.' },
      { q: 'Are lessons in person?', a: 'No, all lessons are live online.' },
      { q: 'Is exam-year support available?', a: 'For GCSE and A level computer science and maths, yes; we build understanding and promise no grades.' },
      { q: 'What are the fees?', a: 'Lesson one has no fee; ongoing lessons are USD 100 monthly in a class or USD 150 monthly one-to-one.' },
      { q: 'Do lessons stop in school holidays?', a: 'Yes. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Staffordshire and West Midlands pages',
    html: 'In Staffordshire, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-tamworth">Tamworth</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-stafford">Stafford</a> and <a class="cg-inline-link" href="/best-coding-class-in-lichfield">Lichfield</a> have their own pages and projects, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-walsall">Walsall</a> is covered too. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cannock and Staffordshire',
  footerPlaces: [
    { href: '/coding-classes-in-staffordshire', label: 'Staffordshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands region' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cnc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-cnc .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-cnc .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-cnc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cnc .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.02em; }
.cg-root.cg-cnc .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-cnc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cnc .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-cnc .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-cnc .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cannock Chase (E07000192), Census 2021 TS001 usual residents 100,519. ONS 2021 BUAs (published): Cannock 63,065; Norton Canes 8,150; Rawnsley 2,470; Rugeley straddles. postcodes.io (Cannock Chase) suburban areas: Hednesford, Heath Hayes, Chadsmoor, Bridgtown, Pye Green, Wimblebury, Hawks Green.',
    localProject: 'Hierarchical clustering of 296 English districts on 18 TS007A age shares. Four-group sizes: single 293/1/1/1 (Isles of Scilly, City of London, Tower Hamlets); complete 162/93/32/9; average 229/57/9/1; Ward 159/77/33/27. Ward 8 groups: Cannock Chase in a 92-district group spanning all regions outside London. Cophenetic: average 0.797, single 0.714, Ward 0.696, complete 0.562. Closest districts: Barnsley, Wakefield, Ashfield, Wigan, Bolsover. Lesson family: hierarchical clustering, linkage and chaining, dendrogram cuts, cophenetic correlation.',
    requiredMentions: [
      '100,519',
      '63,065',
      'Norton Canes',
      'Rawnsley',
      'Hednesford',
      'Heath Hayes',
      'Chadsmoor',
      'hierarchical clustering',
      'dendrogram',
      'single linkage'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS007A age by five-year bands for English districts, and TS001 usual residents, via the Nomis API.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas in Cannock Chase.', url: 'https://api.postcodes.io/places?q=Hednesford' }
    ],
    rejectedClaims: [
      'Mining, forest or heritage claims about Cannock Chase: not read from a source; not claimed.',
      'Why districts share age profiles: not measured; not claimed.',
      'Rugeley population: built-up area crosses the district boundary; not tabled.',
      'That any clustering is the "true" grouping: explicitly not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
