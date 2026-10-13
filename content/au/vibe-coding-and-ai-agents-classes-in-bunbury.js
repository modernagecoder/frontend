'use strict';
// Bunbury (cg- regional city page, Australia cluster Phase 7, row 150). Shaped page: vibe coding and AI agents,
// leading with teenagers and adults.
// Spine: how should an agent's lookup tool match a misspelt place name? Data: WA Department of Education,
// "Western Australian Schools Lists" (catalogue.data.wa.gov.au, Creative Commons Attribution 4.0), Alphabetical
// List of Western Australian Schools, Excel version as downloaded on 7 October 2026: 1,152 school rows with
// suburb and coordinates. Schools within 25 km of the listed coordinates of Bunbury Senior High School: 44, in 16
// distinct suburb names (AUSTRALIND, BOYANUP, BRUNSWICK JUNCTION, BUNBURY, BUREKUP, CAPEL, CAREY PARK, CLIFTON PARK,
// DALYELLUP, DARDANUP, EAST BUNBURY, EATON, GELORUP, GLEN IRIS, ROELANDS, SOUTH BUNBURY). Our code (scratchpad
// au/r2/bnb_jw.py): Jaro-Winkler similarity written from the definition and checked on the textbook pairs
// MARTHA/MARHTA 0.9611 and DWAYNE/DUANE 0.84; 192 test typos (each name, 3 kinds: swapped, dropped and doubled
// letter, 4 each, seeded generator). Top match is correct for 192 of 192 with Jaro-Winkler and with Levenshtein.
// Lowest score for a true typo 0.8905 (BUUREKUP for BUREKUP). Of 483 suburb names in the list that are not among
// the 16, the closest call scores 0.89 (SOUTH YUNDERUP against SOUTH BUNBURY). Thresholds: 0.85 accepts all 192
// typos and 6 outside names; 0.90 accepts 191 and 0 outside names; 0.95 accepts 182 and 0 outside names.
// BUSSELTON's closest local match is BUREKUP at 0.67; PERTH's is EATON at 0.60; SOUTH BUNBURY against EAST BUNBURY
// 0.7675. Lesson family: Jaro-Winkler string similarity and acceptance thresholds for an agent's place-name
// lookup; screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 5003 Bunbury: 76,452
// people; median age 39; 20,598 families; 32,807 private dwellings; 2.5 people per household; separate house
// 24,294 (85.5%; Western Australia 79.7%; Australia 72.3%); flat or apartment 610 (2.1%; Western Australia 6.5%);
// Technicians and Trades Workers 6,573 (18.4%; Western Australia 15.3%; Australia 12.9%); Professionals 5,826
// (16.3%; Western Australia 22.0%); Bachelor Degree level and above 8,911 (14.5%; Western Australia 23.8%); aged
// 15 to 19 4,749 (6.2%; Western Australia 5.8%). WA Department of Education 2027 term dates: Term 1 Monday
// 1 February to Friday 9 April; Term 4 Monday 11 October to Thursday 16 December. IANA tz: Australia/Perth, no
// daylight saving. Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health; school
// enrolment counts in the list are not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BUNBURY', label: 'Bunbury', blurb: 'Bunbury in the South West, a list of 44 nearby schools, and how an AI agent should match a misspelt suburb.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-bunbury',
  code: 'bnby',
  accent: '#624E9E',
  accentRationale: 'Bunbury: a dusk-over-the-bay indigo (HSV saturation 0.51, value 0.62, hue 254), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bunbury',
    eyebrow: 'Bunbury, Western Australia, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Western Australia' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-western-australia', name: 'Western Australia' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Western Australia', href: '/coding-and-ai-classes-in-western-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bunbury, Western Australia',
  title: 'Vibe Coding and AI Agents Classes in Bunbury | Live Online',
  description: 'Live online vibe coding and AI agents classes for Bunbury teenagers and adults: build agents, test their tools and understand the code. First lesson free.',
  ogDescription: 'AI agents classes for Bunbury teens and adults, with a project tuning how an agent\'s lookup tool matches misspelt South West suburb names.',
  twitterDescription: 'Bunbury vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Bunbury Learners',
    description: 'Level-matched online vibe coding, AI agents, Python and tool design for teenagers and adults in Bunbury and the South West, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Bunbury',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Bunbury?',
  capsule: 'Bunbury teenagers and adults learn to build software alongside an AI assistant, then to check and correct its work until their agents behave as intended. Bunbury\'s urban area counted 76,452 people at the 2021 Census, and 18.4% of employed residents worked in trades and technical jobs. Lessons run online, one to one or in small level-matched groups, and the first is free.',
  lead: 'People type place names badly. An AI agent that answers "which schools are near Austrlind?" needs a lookup tool that forgives the missing letter and still refuses to invent a match for a town it has never heard of. Our Bunbury project builds that tool from the Western Australian Department of Education\'s open list of schools: 44 schools within 25 kilometres of central Bunbury, in 16 suburbs. We wrote the Jaro-Winkler similarity score from its definition, generated 192 deliberate typos and tested. Every typo found its right suburb. The hard part turned out to be elsewhere: the weakest genuine typo scored 0.8905, and an unrelated suburb from elsewhere in the state scored 0.89.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Bunbury.',

  picks: {
    eyebrow: 'Course picks for Bunbury',
    h2: 'Courses for Bunbury\'s agent builders',
    intro: 'All four connect to the suburb-matching project. The free lesson chooses the right one, and booking requires no card.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects built with an AI assistant, then read, tested and repaired line by line.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Strings, functions and tests, the Python that every agent tool is made from.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'Language models, tool calling and agents, designed and measured rather than taken on trust.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'Adults', note: 'Full applications built alongside AI, with the data structures and testing that keep them correct.' }
    ]
  },

  sections: [
    {
      id: 'southwest', tint: '', eyebrow: 'Bunbury in the 2021 Census',
      h2: 'The South West\'s city of houses and trades',
      intro: 'The bureau\'s QuickStats for the Bunbury Significant Urban Area, set against Western Australia and Australia.',
      body: [
        { kind: 'table', caption: 'Bunbury urban area, QuickStats 2021, with Western Australian and national shares', head: ['Measure', 'Bunbury', 'Western Australia', 'Australia'], rows: [
          ['Population', '76,452', 'no figure here', 'no figure here'],
          ['Median age', '39', 'no figure here', 'no figure here'],
          ['Families', '20,598', 'no figure here', 'no figure here'],
          ['Technicians and trades workers, share of employed', '6,573 (18.4%)', '15.3%', '12.9%'],
          ['Separate houses, share of occupied homes', '24,294 (85.5%)', '79.7%', '72.3%'],
          ['Teenagers aged 15 to 19', '4,749 (6.2%)', '5.8%', '5.7%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades and technical work', p: '6,573 employed residents worked as technicians or trades workers, a larger share than in Western Australia overall.' },
          { h3: 'Homes', p: 'The urban area had 32,807 private dwellings and 2.5 people per household; only 610 occupied homes were flats or apartments.' },
          { h3: 'Degrees', p: 'A bachelor degree or above was held by 8,911 residents aged 15 or older, 14.5%, while 5,826 of those in work were classed as professionals.' }
        ] },
        { kind: 'p', text: 'Census counts are nudged slightly at random by the bureau to protect privacy, so the parts of a table do not always add up to its total. We use each published figure as it stands and never produce our own totals by summing parts.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How should an agent match a misspelt suburb?',
      intro: 'A place-name lookup tool for an AI agent, built on the Department of Education\'s open schools list and scored with Jaro-Winkler similarity.',
      body: [
        { kind: 'table', caption: 'The test set, built on 7 October 2026 (our working)', head: ['Item', 'Figure'], rows: [
          ['Schools in the statewide list', '1,152'],
          ['Schools within 25 km of central Bunbury', '44'],
          ['Distinct suburb names among them', '16'],
          ['Deliberate typos generated: swapped, dropped and doubled letters', '192'],
          ['Suburb names elsewhere in the list, used as impostors', '483']
        ] },
        { kind: 'table', mt: true, caption: 'What happens at each acceptance threshold (our calculation)', head: ['Accept a match scoring at least', 'Typos correctly accepted', 'Impostors wrongly accepted'], rows: [
          ['0.85', '192 of 192', '6 of 483'],
          ['0.90', '191 of 192', '0 of 483'],
          ['0.95', '182 of 192', '0 of 483']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Score', p: 'Jaro-Winkler compares two words by their shared letters, how far those letters moved and whether the first few match. Identical names score 1.' },
          { h3: '2. Rank', p: 'For each query, find the closest of the 16 local suburbs. On all 192 typos the closest was the right one, for Jaro-Winkler and for edit distance alike.' },
          { h3: '3. Decide', p: 'Ranking always returns something. The real design question is the cut-off below which the tool says "no match" instead.' }
        ] },
        { kind: 'callout', h3: 'A gap of one ten-thousandth', p: 'The weakest genuine typo, BUUREKUP for BUREKUP, scored 0.8905. The strongest impostor, SOUTH YUNDERUP from elsewhere in the state, scored 0.89 against SOUTH BUNBURY because the two share a long opening. There is almost no clear water between them. A threshold of 0.90 rejects every impostor and loses one real typo; 0.85 keeps every typo and admits six strangers. Choosing between those is a product decision, and an agent builder has to make it deliberately.' },
        { kind: 'p', text: 'All scores are ours: Jaro-Winkler written from its definition, checked against the standard textbook examples, and run on the department\'s list as downloaded on 7 October 2026 with typos generated by a fixed random seed. A query for BUSSELTON still returns BUREKUP as its closest local name, at 0.67, which is exactly why a threshold is needed. We use school locations only to define the area; no school information beyond suburb names appears in the project.' }
      ]
    },
    {
      id: 'tool', tint: 'tint', eyebrow: 'Designing the tool',
      h2: 'What a trustworthy lookup tool returns',
      intro: 'An agent cannot see inside its tools. Everything it needs to behave well has to come back in the result.',
      body: [
        { kind: 'table', caption: 'Lookup tool behaviour, tested on Bunbury names', head: ['Situation', 'Example', 'What the tool should return'], rows: [
          ['Exact name', 'EATON', 'The match, with a score of 1'],
          ['Small typo', 'BUNBRY', 'BUNBURY, scored 0.971, flagged as corrected'],
          ['Missing letter', 'AUSTRLIND', 'AUSTRALIND, scored 0.98, flagged as corrected'],
          ['Unknown town', 'PERTH', 'No match: the closest, EATON, scores only 0.60'],
          ['Near neighbours', 'SOUTH BUNBURY and EAST BUNBURY', 'Kept apart: they score 0.7675 against each other']
        ] },
        { kind: 'p', text: 'Vibe coding gets the first version of this tool written in moments: describe it, and an AI produces a fuzzy matcher. Our learners then do the engineering. They build the typo set, find the impostors, plot where the scores of each fall and pick a threshold with their eyes open. The tool returns the score and a "corrected" flag, so the agent can tell the user it assumed AUSTRALIND rather than silently changing the question.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Write Jaro-Winkler from its definition in Python, test it on famous examples, then on Bunbury suburb names.' },
          { h3: 'University students', p: 'Compare similarity measures, build evaluation sets with impostors and choose thresholds with precision and recall.' },
          { h3: 'Adults', p: 'Clean messy names in work data and build lookups that say when they are unsure.' }
        ] },
        { kind: 'p', text: 'We have no tie to the WA Department of Education, the state government, the City of Bunbury or the statistics bureau, and do not suggest one. The bureau supplied the population figures; our scripts produced every distance, score and threshold on this page.' }
      ]
    },
    {
      id: 'wa', tint: '', eyebrow: 'Bunbury\'s calendar',
      h2: 'Western Australian terms and Western time',
      intro: 'Two calendar facts that matter for a Bunbury learner\'s week.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'First term of 2027', p: 'Runs from Monday 1 February to Friday 9 April, according to the WA Department of Education\'s published dates.' },
          { h3: 'Last term of 2027', p: 'Runs from Monday 11 October to Thursday 16 December, finishing on a Thursday.' },
          { h3: 'No daylight saving', p: 'Western Australia keeps Western Standard Time all year, so lesson times never shift with the seasons.' }
        ] },
        { kind: 'spec', title: 'Names are data too', p: 'Suburb names in the department\'s list are stored in capitals, with spaces inside some, such as GLEN IRIS and BRUNSWICK JUNCTION. A matcher that ignores spaces or case differently from the data will score names inconsistently, so learners normalise both sides the same way before comparing anything.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From comparing words to designing agent tools',
    intro: 'Ages give a rough idea; the free lesson decides where each learner starts.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Words in code', p: 'Python strings, loops and functions that compare names letter by letter and count the differences.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Ages 15 to 18', h3: 'Fuzzy matching', p: 'Jaro-Winkler and edit distance, built by hand and tested on Bunbury typos and impostors.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'teens-ai-tools-mastery-course'] },
      { band: 'University', h3: 'Tools for agents', p: 'Tool interfaces, evaluation sets and thresholds for agents that call real data.', courses: ['complete-generative-ai-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Coding agents and automation for professional tasks, with tests that keep them honest.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI agent can guess what you meant to type. Why should a Bunbury learner decide how it guesses?',
    intro: 'Because without a threshold the agent will happily turn BUSSELTON into BUREKUP and answer a question nobody asked.',
    p1: 'A fuzzy lookup always has a closest match. Ask about a town outside the list and the tool still returns its nearest neighbour, and an agent built on it will pass that answer on confidently. Our Bunbury tests show how thin the line can be: a real typo at 0.8905 and an impostor at 0.89. Where the cut-off sits decides whether the agent occasionally refuses a fair question or occasionally answers the wrong one.',
    p2: 'That decision is invisible to anyone who only vibe codes the matcher. Learners who have built the test set see it immediately and design around it: return the score, flag corrections, refuse below the threshold, and tell the user what was assumed. Those are the habits that make an agent safe to put in front of other people.',
    closer: 'In 2026 any AI can produce a fuzzy matcher; a Bunbury learner who can show where it is safe to trust is the one others will want building their agents.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Australind, Eaton or Dalyellup, the same live lesson',
    intro: 'Greater Bunbury spreads around Koombana Bay and the estuary, and a video lesson reaches every suburb on it.',
    cells: [
      { h3: 'Around the bay', p: 'A learner in Carey Park and another in Gelorup can work in the same class without either travelling.' },
      { h3: 'Western Australian schooling', p: 'Teachers follow WA year levels and the state\'s four terms, and senior students can relate projects to their own courses. Teaching is in English.' },
      { h3: 'The trial is real teaching', p: 'Your free first session is a proper lesson that ends with a level, a course suggestion and a time. No card is ever requested.' },
      { h3: 'Groups at one level', p: 'Fifteen to twenty learners at the same stage, from Bunbury and elsewhere, so regional learners always find classmates.' },
      { h3: 'Two lessons a week', p: 'Around eight a month in a fixed slot, with school holidays and exam periods planned with the teacher.' },
      { h3: 'Teachers two and a half hours behind', p: 'Western Australia and India both skip daylight saving, so a 6pm lesson in Bunbury is 3:30pm for our teachers all year round.' }
    ],
    spec: { title: 'The smallest gap in Australia', p: 'Bunbury runs on Western Standard Time, just two and a half hours ahead of India, the shortest difference of any Australian state. Lesson times are always confirmed in Bunbury time.' }
  },

  fees: {
    h2: 'What classes cost in Bunbury',
    intro: 'Three straightforward prices.',
    first: 'A full first lesson for free, after which you get a level, a suggested course and a time.',
    group: 'A month of lessons, usually eight, in a group of fifteen to twenty learners at your level.',
    private: 'About eight lessons a month with your own teacher, one to one.',
    closer: 'Outside India all our fees are set in US dollars, which means Withers and College Grove households receive matching invoices and WA has no price list of its own. Payment begins once the trial has pinned down a course and a lesson slot, and our pricing page answers questions about breaks, absences and changing format.'
  },

  reviewsH2: 'Google reviews written by our families',

  book: {
    h2: 'Book a free vibe coding or AI agents lesson',
    intro: 'Share an age and an interest. A Year 9 student might begin by comparing two misspelt names letter by letter; an adult might build the whole lookup tool and its tests.',
    success: 'Thank you. We will contact you soon about a Bunbury class.'
  },

  faq: {
    h2: 'Questions from Bunbury',
    intro: 'Answers to what Bunbury learners and parents raise most.',
    items: [
      { q: 'How many people live in Bunbury?', a: 'The 2021 Census counted 76,452 people in the Bunbury urban area, according to the statistics bureau\'s QuickStats. The median age was 39.' },
      { q: 'What is Jaro-Winkler similarity?', a: 'A score between 0 and 1 for how alike two short strings are, such as names. It counts matching letters, penalises letters that appear out of order and gives extra weight to a shared beginning, which suits typing mistakes.' },
      { q: 'What is the Bunbury suburb-matching project?', a: 'Learners take the WA Department of Education\'s open schools list, collect the 16 suburb names within 25 km of central Bunbury, generate 192 typos and test a Jaro-Winkler lookup. Every typo finds its suburb; the challenge is choosing a threshold that rejects names from elsewhere.' },
      { q: 'What is vibe coding?', a: 'Building software by explaining the goal to an AI assistant in ordinary words and letting it draft the code. Our lessons add the part that matters: reading that draft, testing it and repairing it.' },
      { q: 'Do you teach Western Australian senior students?', a: 'Yes. We follow WA year levels and help senior students with computing and maths. Anything submitted for school assessment is the student\'s own work.' },
      { q: 'What time are lessons for Bunbury learners?', a: 'Usually after school or at weekends, agreed at the trial and quoted in Bunbury time. Neither WA nor India changes its clocks, so the two and a half hour gap to our teachers never moves.' },
      { q: 'Can younger children learn about AI?', a: 'Yes. From age six children use Scratch and simple AI activities, moving to Python later. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Bunbury?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Bunbury classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Where Bunbury learners can go next',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-western-australia">Western Australia page</a> covers the whole state, and Perth has its own <a class="cg-inline-link" href="/online-coding-and-python-classes-in-perth-western-australia">Perth Python page</a>. For more on keeping AI-written code honest, read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>. The <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a> lists every page we have written for Australian learners.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bunbury and Western Australia',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-perth-western-australia', label: 'Perth' },
    { href: '/coding-and-ai-classes-in-western-australia', label: 'Western Australia' },
    { href: '/wa-gate-aset-maths-practice', label: 'WA GATE and ASET maths' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bnby .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.3vw, 2.5rem); }
.cg-root.cg-bnby .cg-hero h1 { font-weight: 780; letter-spacing: -0.017em; line-height: 1.08; }
.cg-root.cg-bnby .cg-capsule { border-right: 4px solid var(--cg-accent); padding: 0.4rem 1rem 0.4rem 0; }
.cg-root.cg-bnby .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-bnby .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.016em; }
.cg-root.cg-bnby .cg-grid-3 { gap: clamp(1rem, 2.4vw, 1.9rem); }
.cg-root.cg-bnby .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bnby .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bnby .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bnby .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Bunbury, ABS Census 2021 QuickStats, Significant Urban Area 5003 (read 7 October 2026): 76,452 people; median age 39; 20,598 families; 32,807 private dwellings; average 2.5 people per household; dwelling structure, occupied private dwellings: separate house 24,294 (85.5 percent; Western Australia 79.7; Australia 72.3), flat or apartment 610 (2.1 percent; Western Australia 6.5); occupation: Technicians and Trades Workers 6,573 (18.4 percent; Western Australia 15.3; Australia 12.9), Professionals 5,826 (16.3 percent; Western Australia 22.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 8,911 (14.5 percent; Western Australia 23.8); aged 15 to 19 4,749 (6.2 percent; Western Australia 5.8). WA Department of Education future term dates, 2027: Term 1 Monday 1 February to Friday 9 April; Term 4 Monday 11 October to Thursday 16 December. IANA tz database: Australia/Perth has no daylight saving; Asia/Kolkata UTC+5:30.',
    localProject: 'Jaro-Winkler string similarity and acceptance thresholds for an agent lookup tool. WA Department of Education, Western Australian Schools Lists (catalogue.data.wa.gov.au western-australian-schools-lists, CC BY 4.0, metadata modified 2025-11-04), SchoolsListExcel0880.xlsx as downloaded 7 October 2026: 1,152 school rows. Reference point: listed coordinates of Bunbury Senior High School (-33.32746917, 115.6326077); 44 schools within 25 km (haversine); 16 distinct suburb names. Jaro-Winkler (prefix scale 0.1, up to 4 characters) checked: MARTHA/MARHTA 0.9611, DWAYNE/DUANE 0.84, DIXON/DICKSONX 0.8133. Typos: random.Random(2026), for each name 4 swaps, 4 drops, 4 doubles = 192. Top-1 correct: Jaro-Winkler 192, Levenshtein 192. Minimum Jaro-Winkler of a typo to its source 0.8905 (BUUREKUP/BUREKUP). Impostors: 483 suburb names in the list outside the 16; highest best-match 0.89 (SOUTH YUNDERUP to SOUTH BUNBURY). Thresholds: 0.85 accepts 192 typos, 6 impostors; 0.90 accepts 191, 0; 0.95 accepts 182, 0. Queries: BUSSELTON to BUREKUP 0.67; PERTH to EATON 0.6; BUNBRY to BUNBURY 0.971; AUSTRLIND to AUSTRALIND 0.98; SOUTH BUNBURY vs EAST BUNBURY 0.7675.',
    requiredMentions: [
      '76,452',
      '20,598',
      '32,807',
      '6,573',
      '5,826',
      '8,911',
      'SOUTH YUNDERUP',
      '0.8905',
      '6 of 483',
      'Monday 1 February to Friday 9 April'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bunbury Significant Urban Area (5003): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/5003' },
      { claim: 'WA Department of Education, Western Australian Schools Lists (CC BY 4.0).', url: 'https://catalogue.data.wa.gov.au/dataset/western-australian-schools-lists' },
      { claim: 'WA Department of Education, future term dates 2027.', url: 'https://www.education.wa.edu.au/future-term-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Perth.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'School enrolment figures in the list: not used, since the project needs only suburb names and locations.',
      'Any ranking or comparison of schools: none is made; schools only define the area.',
      'That 0.90 is the right threshold for every application: it suits this test set only, and the page says the choice is a product decision.',
      'Bureau of Meteorology station data: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the WA Department of Education, the Western Australian Government, the City of Bunbury or the ABS.'
    ]
  }
};
