'use strict';
// High Wycombe (cg- town page, UK cluster Phase 8, towns band A, row 320). Keyword slug per the owner's 2026-09-27
// instruction. Spine: what share of a museum's chairs were made in High Wycombe, when some records have no place?
// Anchors (read raw 27 September 2026): Science Museum Group co45872, collection of chair-maker's tools: "This lathe was
// used for turning the legs of Windsor chairs by a 'bodger' working in the neighbourhood of High Wycombe"; "in use until
// around 1953". Wycombe Museum, Chair Discovery Centre page: "Wycombe Museum announced the opening of our band new Chair
// Discovery Centre in February 2026"; "The Chair Discovery Centre holds almost 250 chairs". Wycombe Museum, Search our Chair
// Collection page: "In 2020, about 12% (34 records) of our chair collection records were made available for the first time
// with funding from Arts Council England"; "In 2025, we added a further 21 chair records, thanks to funding from The
// Regional Furniture Society"; record text quoted: a champion chair "Entered at the Great Exhibition in 1851"; a 1917 "1st
// World War military chair, stamped Elliot and Son"; a chair "from a private pew in Lincoln Cathedral".
// Our count of the online search page (54 records parsed): Place Made "High Wycombe" 25; blank 12; "Unknown" 4; other named
// places 13 (Oxford 3, London 2, one each Cheshire, Naphill, West Wycombe, Nottinghamshire, Oxfordshire, Addingham,
// Uxbridge, Slough). Share made in High Wycombe: of all 54 = 46.3%; of the 38 with a known place = 65.8%; bounds if every
// missing place were or were not High Wycombe: 46.3% to 75.9%. Dates: 48 with a year (6 without), 1685 to 1974, median 1875.
// Lesson family: missing-data bounds (worst and best case) versus complete-case shares; screened (complete-case, Manski,
// unknown values: 0 hits; Galway/Wexford were data-cleaning traps, not bounds).
// Place facts: ONS 2021 BUAs (published): High Wycombe 83,535; Hazlemere 20,005; Beaconsfield 14,145; Princes Risborough
// 7,530. Nomis Census 2021 TS007A, Buckinghamshire E06000060 (the council area; no BUA-level age table used): total 553,078;
// 5 to 9 35,155 (6.4%; England 5.9%); 10 to 14 36,807 (6.7%; 6.0%); 20 to 24 25,646 (4.6%; 6.0%); 25 to 29 30,240 (5.5%;
// 6.6%); 45 to 49 38,481 (7.0%; 6.4%); 50 to 54 40,665 (7.4%; 6.9%). No schools named; the 11+ page is separate.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HIGH WYCOMBE', label: 'High Wycombe', blurb: 'Coding and AI classes for High Wycombe, with a project on the town\'s chair-making records and the chairs whose origin is missing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-high-wycombe',
  code: 'hwy',
  accent: '#8A1582',
  accentRationale: 'High Wycombe: a beech-stain magenta from the solver (6.74:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'High Wycombe',
    eyebrow: 'High Wycombe, Buckinghamshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Buckinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Buckinghamshire', href: '/coding-classes-in-buckinghamshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'High Wycombe, England',
  title: 'Coding and AI Classes in High Wycombe | Online, Ages 6 to 67',
  description: 'Online coding, AI, Python and programming lessons for High Wycombe, Hazlemere and Beaconsfield learners aged 6 to 67, taught live. First lesson free of charge.',
  ogDescription: 'Live online coding and AI classes for High Wycombe, and a Python project on the town\'s chair-making records: what share were made here when some have no place?',
  twitterDescription: 'High Wycombe coding, AI and Python classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for High Wycombe',
    description: 'Online coding, AI, Python programming, data skills and mathematics for children, teenagers and adults in High Wycombe, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in High Wycombe',
  capsuleQ: 'What are the best coding and AI classes in High Wycombe?',
  capsule: 'High Wycombe is a built-up area of 83,535 people in the 2021 census, with Hazlemere at 20,005 and Beaconsfield at 14,145 nearby in Buckinghamshire, a county where 10 to 14 year olds make up 6.7 per cent of residents against 6.0 in England. The town built its name on chairs, and Wycombe Museum opened a Chair Discovery Centre in 2026. Learners anywhere from 6 to 67 can join our live online lessons in coding, AI, Python programming and maths, taught by teachers in India, either privately or in a group of five to ten matched by level. Your first lesson is free and shapes the plan. The High Wycombe project uses the museum\'s own chair records. Staying on is USD 100 a month for a class or USD 150 a month with a personal tutor.',
  lead: 'A Science Museum Group record describes a lathe once used near High Wycombe by a bodger, a craftsman who turned the legs of Windsor chairs, still working until around 1953. Wycombe Museum now holds almost 250 chairs in its Chair Discovery Centre and is putting its chair records online: about 12 per cent, 34 records, in 2020, and a further 21 in 2025. Look through those online records and a simple question gets tricky. What share of these chairs were made in High Wycombe? Some records name the town, some name other places, and some leave the place blank or write "Unknown". How you treat those gaps changes the answer by almost thirty percentage points. This page\'s project works through it in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a learner in High Wycombe.',

  picks: {
    eyebrow: 'Course picks for High Wycombe',
    h2: 'Good first courses for High Wycombe',
    intro: 'Choose by what excites the learner. The first live session of any course is free, and we never ask for a card to start.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with design and building games, including a chair-maker\'s workshop.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and beginner AI, sorting and counting real museum-style records.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Serious Python for teenagers, from files and dictionaries to data projects.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis in Python for adults, including handling messy and missing values.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'High Wycombe today',
      h2: 'The chair town and its neighbours',
      intro: 'Town sizes are ONS 2021 built-up areas. Age shares are for the whole Buckinghamshire council area from census table TS007A, because we did not use a town-level age table.',
      body: [
        { kind: 'table', caption: 'Buckinghamshire against England, selected ages, 2021 census TS007A', head: ['Ages', 'Buckinghamshire', 'County share', 'England share'], rows: [
          ['5 to 9', '35,155', '6.4%', '5.9%'],
          ['10 to 14', '36,807', '6.7%', '6.0%'],
          ['20 to 24', '25,646', '4.6%', '6.0%'],
          ['25 to 29', '30,240', '5.5%', '6.6%'],
          ['45 to 49', '38,481', '7.0%', '6.4%'],
          ['50 to 54', '40,665', '7.4%', '6.9%']
        ] },
        { kind: 'p', text: 'Across Buckinghamshire, school-age children and parents in their late forties and early fifties are above the national share, and young adults below it. Around High Wycombe the ONS counts several separate built-up areas, including Hazlemere and Beaconsfield, and Princes Risborough at 7,530. Local schools teach the national curriculum for England; tell us your holiday weeks and lessons pause for them.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> page covers the county, and families looking at selective schools can read our <a class="cg-inline-link" href="/11-plus-maths-tuition-buckinghamshire">Buckinghamshire 11+ maths</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The High Wycombe project',
      h2: 'Made in High Wycombe? It depends on the gaps',
      intro: 'Two honest shares, and the range the truth must lie in.',
      body: [
        { kind: 'p', text: 'We read the museum\'s online chair search page and counted its records ourselves: 54 in all. The place made reads High Wycombe on 25, names another place on 13, says "Unknown" on 4 and is blank on 12. The learner stores the records as a list of dictionaries in Python and counts them with a single loop. Then comes the real question: what fraction of these chairs were made in High Wycombe?' },
        { kind: 'table', caption: 'Our shares from the Wycombe Museum online chair records, 54 records counted on 27 September 2026', head: ['How the gaps are treated', 'High Wycombe chairs', 'Out of', 'Share'], rows: [
          ['Count every record, gaps as "not High Wycombe"', '25', '54', '46.3%'],
          ['Drop records with no known place', '25', '38', '65.8%'],
          ['Highest possible: every gap was High Wycombe', '41', '54', '75.9%'],
          ['Honest summary', '', '', 'Between 46% and 76%']
        ] },
        { kind: 'p', text: 'Both of the first two answers are easy to compute and easy to defend, yet they differ by almost 20 points. The first quietly assumes every missing place was somewhere else; the second assumes the missing records look just like the known ones. Neither assumption is checked. Working out the highest and lowest possible shares gives a range that needs no assumption at all: whatever the gaps hide, the true share among these records lies between about 46 and 76 per cent. Reporting that range, with the reason, is more honest than either single number.' },
        { kind: 'p', text: 'The learner then checks the dates: 48 records have a year, 6 do not, running from 1685 to 1974 with a middle value of 1875. Two traps come up. Treating "Unknown" as a real place called Unknown puts it in the league table of towns; and "High Wycombe" with a trailing space or different capitals splits one town into two. The code normalises names before counting and tests that the three groups always add back to 54. These are our own counts of one web page, not the museum\'s full catalogue.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort picture cards of chairs into known and unknown piles, then build the tally in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Store records as Python dictionaries, count places, and compute the two shares.' },
          { h3: 'Ages 15 and up', p: 'Compute the highest and lowest possible shares, write the normalising function, and test that the groups add up.' }
        ] },
        { kind: 'callout', h3: 'Museum records, our counts', p: 'The records and history come from Wycombe Museum and the Science Museum Group. The counts, shares and range are our own reading of one online search page on one day, so they describe that page, not every chair the museum owns.' }
      ]
    },
    {
      id: 'chairs', tint: 'deep', eyebrow: 'Why chairs',
      h2: 'Bodgers, lathes and a discovery centre',
      intro: 'What the sources say.',
      body: [
        { kind: 'table', caption: 'High Wycombe chair-making, from the Science Museum Group (co45872) and Wycombe Museum', head: ['Source', 'What it says'], rows: [
          ['Science Museum Group', 'A lathe used by a bodger near High Wycombe to turn Windsor chair legs, in use until around 1953'],
          ['Wycombe Museum', 'Opening of a Chair Discovery Centre announced in February 2026'],
          ['Wycombe Museum', 'The Chair Discovery Centre holds almost 250 chairs'],
          ['Wycombe Museum', 'About 12 per cent of chair records, 34, went online in 2020; 21 more in 2025'],
          ['A record in the collection', 'A champion chair entered at the Great Exhibition in 1851'],
          ['A record in the collection', 'A First World War military chair stamped Elliot and Son, 1917']
        ] },
        { kind: 'p', text: 'Missing values are everywhere in real data: surveys with skipped questions, sensors that drop out, forms left blank. Data scientists and AI engineers spend a large part of their time deciding how to treat them, and the honest answer is often a range. A High Wycombe learner who has turned 25 chairs and 16 gaps into a clear, defensible range has done a real data scientist\'s job.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Wycombe Museum, the Science Museum Group or the ONS. The records belong to them; our counts, and any error in them, belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From picture sorting to data science',
    intro: 'Treat the bands as a guide; the trial lesson confirms the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Sorting and counting', p: 'Block coding that sorts, groups and tallies.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Lists and dictionaries', p: 'Python data structures with real records.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Statistics, missing data and machine learning basics, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data for work', p: 'Adult Python for cleaning and analysing real datasets.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and missing data',
    h2: 'An AI can give you a percentage. Did it say what it did with the blanks?',
    intro: 'Missing values quietly decide many headline figures.',
    p1: 'Ask a chatbot to analyse a spreadsheet and it will usually drop blank rows or count them as zero without mentioning it. Either choice can move the answer by twenty points, and the output never shows which was used.',
    p2: 'A High Wycombe learner who has computed the highest and lowest possible shares knows to ask how missing values were handled before trusting any percentage.',
    closer: 'Asking what happened to the blanks is a practical reason for a High Wycombe teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'From Hazlemere to the town centre, on video',
    intro: 'Wherever you live around High Wycombe, the class comes to you.',
    cells: [
      { h3: 'Student-written code', p: 'Each learner types their own programs; the tutor studies the shared screen and prompts at the right moments.' },
      { h3: 'Year-group placement', p: 'A Year 2 or a Year 11 starts at the point their year and trial lesson suggest, using exam board wording.' },
      { h3: 'No-cost first lesson', p: 'A full trial with nothing to pay, and a plain recommendation at the end.' },
      { h3: 'Level-matched classes', p: 'Five to ten learners at one stage, gathered from all over Britain.' },
      { h3: 'Termly rhythm', p: 'Two sessions a week while schools are in, none during breaks.' },
      { h3: 'Stable UK time', p: 'The March and October clock changes leave your slot where it was.' }
    ],
    spec: { title: 'Why classes meet online', p: 'Five learners at one level and one free hour are rarely neighbours in any single town. Online groups give each High Wycombe learner the right classmates.' }
  },

  fees: {
    h2: 'High Wycombe fees',
    intro: 'Families here pay exactly what we charge in every country outside India.',
    first: 'A complete trial lesson free, with clear next steps.',
    group: 'Near eight live lessons a month in a small class.',
    private: 'Near eight live lessons a month, one-to-one.',
    closer: 'Fees are set in US dollars and never quoted in sterling. We start billing only when the trial has chosen a course and a regular slot, and the pricing page explains breaks, absences and moving between class and private lessons.'
  },

  reviewsH2: 'Parents\' reviews on Google',

  book: {
    h2: 'Book a free High Wycombe lesson',
    intro: 'Share the learner\'s year group and a favourite hobby. A first lesson might be a Scratch design game, a short Python script, an AI mini-project, or the chair records puzzle.',
    success: 'Thank you. Your High Wycombe request is with us.'
  },

  faq: {
    h2: 'High Wycombe questions',
    intro: 'The town, the chair project and how lessons run.',
    items: [
      { q: 'How many people live in High Wycombe?', a: 'The High Wycombe built-up area had 83,535 residents in the 2021 census.' },
      { q: 'Can learners in High Wycombe study AI and Python online?', a: 'Yes. We teach AI, Python and coding in live online lessons to High Wycombe learners from age 6 to adults.' },
      { q: 'What is the High Wycombe chair project?', a: 'Learners count Wycombe Museum\'s online chair records in Python and find the share made in High Wycombe lies between about 46 and 76 per cent, depending on the missing places.' },
      { q: 'What is a bodger?', a: 'A craftsman who turned chair legs on a lathe; the Science Museum Group holds one such lathe used near High Wycombe.' },
      { q: 'What is the Chair Discovery Centre?', a: 'A Wycombe Museum centre, announced in February 2026, that holds almost 250 chairs.' },
      { q: 'Do lessons take place in High Wycombe?', a: 'Lessons are live online, so there is no travel at all.' },
      { q: 'Is GCSE and A level support available?', a: 'Yes, for maths and computing, always teaching for understanding; we never promise grades.' },
      { q: 'Who can learn?', a: 'Anyone aged 6 to 67.' },
      { q: 'What does it cost?', a: 'The trial is free. Then it is USD 100 a month for group lessons or USD 150 a month for private ones.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Give us your holiday weeks and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near High Wycombe',
    html: '<a class="cg-inline-link" href="/ai-and-programming-classes-in-maidenhead">Maidenhead</a> works out the push of Brunel\'s arches, <a class="cg-inline-link" href="/best-coding-class-in-slough">Slough</a> measures Herschel\'s mirror, and the <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> page has its own county project. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'High Wycombe and Buckinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-buckinghamshire', label: 'Buckinghamshire' },
    { href: '/11-plus-maths-tuition-buckinghamshire', label: 'Buckinghamshire 11+ maths' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' }
  ],

  personalityCss: `
.cg-root.cg-hwy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hwy .cg-hero h1 { font-weight: 725; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-hwy .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hwy .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hwy .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-hwy .cg-table caption { font-weight: 650; text-align: left; font-style: italic; }
.cg-root.cg-hwy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hwy .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-hwy .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hwy .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'High Wycombe, Buckinghamshire (E06000060). ONS 2021 BUAs: High Wycombe 83,535; Hazlemere 20,005; Beaconsfield 14,145; Princes Risborough 7,530. Nomis Census 2021 TS007A Buckinghamshire: total 553,078; 5 to 9 35,155 (6.4%, England 5.9%); 10 to 14 36,807 (6.7%, 6.0%); 20 to 24 25,646 (4.6%, 6.0%); 25 to 29 30,240 (5.5%, 6.6%); 45 to 49 38,481 (7.0%, 6.4%); 50 to 54 40,665 (7.4%, 6.9%). Science Museum Group co45872: "This lathe was used for turning the legs of Windsor chairs by a \'bodger\' working in the neighbourhood of High Wycombe"; "in use until around 1953". Wycombe Museum: Chair Discovery Centre announced February 2026; "holds almost 250 chairs"; "In 2020, about 12% (34 records) of our chair collection records were made available"; "In 2025, we added a further 21 chair records".',
    localProject: 'Our count of the online chair search page, 54 records: High Wycombe 25; blank 12; Unknown 4; other places 13. Shares: all 46.3%; known-place 65.8% (25/38); bounds 46.3% to 75.9%. Dates: 48 with year, 1685 to 1974, median 1875. Lesson family: missing-data bounds vs complete-case share, name normalising.',
    requiredMentions: [
      'Wycombe Museum',
      'Chair Discovery Centre',
      'Windsor chair',
      'bodger',
      'Hazlemere',
      'Princes Risborough',
      'Beaconsfield',
      '83,535'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Buckinghamshire and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Science Museum Group collection, collection of chair-maker\'s tools (co45872).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co45872' },
      { claim: 'Wycombe Museum, Chair Discovery Centre.', url: 'https://wycombemuseum.org.uk/chair-discovery-centre' },
      { claim: 'Wycombe Museum, Search our Chair Collection.', url: 'https://wycombemuseum.org.uk/search-our-chair-collection' }
    ],
    rejectedClaims: [
      'The museum\'s full chair catalogue: not counted; our figures describe one online page only.',
      'Town-level age shares for High Wycombe: not used; ages are county-wide and labelled.',
      'Industry employment and factory counts: not read, not claimed.',
      'Named schools, admissions and term dates: none; the 11+ page is separate.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
