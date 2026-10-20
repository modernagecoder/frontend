'use strict';
// Portland, Oregon (cg- metro page, US cluster Phase 5, row 137). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: Portland counts its street trees one by one and publishes the list, which makes the city a natural classroom
// for frequency counts and diversity measures, the statistics behind a lot of everyday machine learning. Sources read
// raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/ai-and-python-classes-for-teens-in-portland-oregon/):
//  - City of Portland Urban Forestry, Explore Portland's Canopy (portland.gov/trees/get-involved/explore-portlands-canopy):
//    "the 1.2 million trees in parks and natural areas, 333,000 street trees, and 2.9 million trees on private
//    property"; "252,180 trees along streets"; "81,000 trees in natural areas beside roads"; "354 different tree
//    species"; "more than 18,000 Norway maple trees, they are about 7%"; Norway maple designated "a nuisance plant";
//    "32% of Portland's land area is covered by tree canopy"; "Tree canopy in the Central City is only 12%"; goal "45%
//    over the next 40 years"; 2019 park inventory "25,734 trees across 174 parks"; parks "303 different tree species";
//    "Nearly 7,000 Douglas-firs ... about 27% of inventoried park trees"; trees "towering more than 240 feet high".
//  - City of Portland open data (gis-pdx.opendata.arcgis.com, linked from that page as "Portland Open GeoData"), Street
//    Tree Inventory - Active Records (item c2b02440053f459db71e1109b9947e51, owner cgis.maps). Item licenseInfo empty;
//    the hub site record states licenseInfo "CC-BY-SA". The map server www.portlandmaps.com timed out, so the hub CSV
//    download was used, 18 October 2026, 57,485,331 bytes. Our counts: 252,205 records; 354 distinct SPECIES values (one
//    is "Unknown"); top species Norway maple 18,150 (7.20%), cherry 9,718, red-silver maple hybrid 9,326, flowering
//    plum 7,472, flowering pear 6,880, ornamental crabapple 6,805, Japanese maple 5,705, red maple 5,647, dogwood 5,619,
//    Japanese snowbell 5,171; top 10 species 31.92% of records; 158 genus labels, Acer 58,650 (23.25%), top 10 genera
//    60.51%; 37 species with one tree; Unknown species 2,875, exactly the 2,875 rows with Condition Dead; inventory dates
//    2022 (64,120), 2023 (87,109), 2024 (100,976); 95 neighborhood values; Gini-Simpson index 0.9818. Addresses not used.
//  - Oregon Department of Education, Generative Artificial Intelligence (AI) for K-12 Schools: foundational computer
//    science knowledge, including computational thinking, "underpins information and AI literacy"; information and AI
//    literacy "not as optional enrichment, but as foundational"; "Navigating Now: A Practical Toolkit for Information
//    Literacy in the Age of AI"; "AI Assessment Scale (AIAS)"; "shift the classroom culture from policing to coaching".
//  - Code.org (2025), 2025 State of AI + CS Education raw sheet, Access tabs only: OR 2023-2024, 195 of 347 high schools
//    (56.2%), source State Education Agency; 54% (2018-19), 63% (2020-21), 64% (2021-22), 60.2% (2022-23).
//  - IANA tzdb northamerica: America/Los_Angeles; US rule, back 1 November 2026, forward 14 March 2027.
// Not found: a current ODE computer science standards page (the addresses we tried returned 404), so no Oregon CS
// standards are summarised.
// Lesson family: frequency counting and diversity (Counter, top-10 share, Simpson index), and grouping level.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'PORTLAND', label: 'Portland, Oregon', blurb: 'AI and Python for Portland teens, with a street tree diversity project on the city&rsquo;s own inventory.' },
  market: US,
  slug: 'ai-and-python-classes-for-teens-in-portland-oregon',
  code: 'aptp',
  accent: '#291C9E',
  accentRationale: 'Portland, Oregon: a deep muted violet-blue, #291C9E, as allocated in alloc.tsv for row 137, distinct from the other US metro accents and readable on the paper',
  pageType: 'city',
  place: {
    name: 'Portland, Oregon',
    eyebrow: 'Portland, Oregon',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'Oregon' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-states', name: 'United States' }],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Portland, Oregon',
  title: 'AI and Python Classes for Teens in Portland, Oregon | Live',
  description: 'AI and Python classes for teens in Portland, Oregon, taught live online: Pacific Time planning, Oregon\'s AI literacy guidance, and a street tree data project.',
  ogDescription: 'Live online AI and Python for Portland teenagers: count the city&rsquo;s 354 street tree species in Python, then learn what a diversity score really measures.',
  twitterDescription: 'Portland teens: live online AI and Python, with a street tree data project.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online AI and Python Classes for Portland, Oregon Teens',
    description: 'Python, data science and machine learning for Portland students in grades 7 to 12, taught live online by a teacher, in level-matched groups or one to one.'
  },

  h1: 'AI and Python classes for teens in Portland, Oregon',
  capsuleQ: 'Can a Portland teenager learn AI and Python live online after school?',
  capsule: 'Yes. Our live online teachers take Portland, Oregon teenagers, roughly seventh through twelfth grade, from first Python lines to data science and machine learning, either in a group of peers at their level or one to one, with every session booked on Pacific Time. Teens start with real code on real data, such as the city&rsquo;s street tree inventory of 354 species, and move on to building and testing their own AI models. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',
  lead: 'Portland is one of the few American cities where a teenager can download a list of nearly every tree planted along its streets, with species, size and condition for each one. That list is a better introduction to artificial intelligence than any chatbot, because the questions it raises (which kinds are most common, how varied is the mix, what does "Unknown" mean) are the same ones a machine learning engineer asks about training data. This page explains how the Oregon Department of Education frames AI literacy, what the published figures say about computer science in Oregon high schools, how our teen classes work on Pacific Time, and the street tree project a Portland student can build in Python with us.',
  wa: 'Hello Modern Age Coders, I would like a free AI or Python class for a teenager in Portland, Oregon.',

  picks: {
    eyebrow: 'Course picks for Portland teens',
    h2: 'Four courses that start with real data',
    intro: 'Chosen by grade and interest; the free first class settles where a teen starts.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'Grades 7 to 10', note: 'Python from first principles, with counting, sorting and file work that a tree inventory needs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Grades 8 to 12', note: 'pandas, charts and careful summaries, with the Portland street tree file as a running example.' },
      { course: 'ai-ml-masterclass-teens', band: 'Grades 9 to 12', note: 'Machine learning built step by step, starting from why class balance in the data matters.' },
      { course: 'orange-data-mining-visual-machine-learning-course-for-teens', band: 'Grades 8 to 11', note: 'Visual machine learning workflows for teens who want to see models work before coding them.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: '', eyebrow: 'Signature project',
      h2: 'Which street trees does Portland plant most, and how diverse is the mix?',
      intro: 'The City of Portland publishes its Street Tree Inventory as open data. We downloaded the active records on 18 October 2026 and counted them the way a teen does in class: one species at a time.',
      body: [
        { kind: 'table', caption: 'The ten most common species in Portland&rsquo;s Street Tree Inventory (our counts from the city&rsquo;s active records, downloaded 18 October 2026; 252,205 records)', head: ['Rank', 'Species as recorded', 'Trees', 'Share of records'], rows: [
          ['1', 'Acer platanoides, Norway maple', '18,150', '7.20%'],
          ['2', 'Prunus, cherry species and cultivars', '9,718', '3.85%'],
          ['3', 'Acer x freemanii, red-silver maple hybrid', '9,326', '3.70%'],
          ['4', 'Prunus cerasifera, flowering plum', '7,472', '2.96%'],
          ['5', 'Pyrus calleryana, flowering pear', '6,880', '2.73%'],
          ['6', 'Malus spp., ornamental crabapple', '6,805', '2.70%'],
          ['7', 'Acer palmatum, Japanese maple', '5,705', '2.26%'],
          ['8', 'Acer rubrum, red maple', '5,647', '2.24%'],
          ['9', 'Cornus spp., dogwood', '5,619', '2.23%'],
          ['10', 'Styrax japonicus, Japanese snowbell', '5,171', '2.05%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count with a Counter', p: 'One pass through the file with collections.Counter gives every species and its tally. The ten largest together hold 31.92% of all records in our download, so no single species dominates.' },
          { h3: '2. Change the grouping level', p: 'Group by genus instead, the first word of each name, and the picture shifts: maples (Acer) alone are 58,650 trees, or 23.25%, and the top ten genera reach 60.51%. Same data, a different answer.' },
          { h3: '3. Score the diversity', p: 'The Gini-Simpson index asks how likely two random trees are to differ in species. Our value is 0.9818, high, yet it hides 37 species represented by a single tree each.' }
        ] },
        { kind: 'callout', h3: 'Check against the city', p: 'Urban Forestry writes that Portland&rsquo;s streets feature 354 different tree species, and our count of distinct species values is also 354. It says more than 18,000 Norway maples make up about 7% of street trees; we count 18,150, or 7.20%. The page gives 252,180 trees along streets, while our file has 252,205 records, a gap of 25 worth investigating rather than ignoring.' },
        { kind: 'p', text: 'One label needs care. The species list includes "Unknown", and it appears on exactly 2,875 rows, the same number as rows whose Condition is Dead. That is not a coincidence a student should paper over: it means 354 includes one category that is not a species at all, and a diversity score computed with it is very slightly off. Deciding whether to drop it, and saying so, is the honest move.' },
        { kind: 'p', text: 'All figures in this section are ours, computed from one download. The city&rsquo;s open data site lists a CC BY-SA licence, the inventory dates in our file run from 2022 to 2024, and the city may update records at any time, so a later download will give slightly different counts. We use species, size and condition only; the file also holds street addresses, which we do not print or analyse.' }
      ]
    },
    {
      id: 'canopy', tint: 'deep', eyebrow: 'Portland&rsquo;s urban forest',
      h2: 'The city&rsquo;s own numbers, and the questions they invite',
      intro: 'Figures published by the City of Portland&rsquo;s Urban Forestry team, read on 18 October 2026.',
      body: [
        { kind: 'table', caption: 'Portland&rsquo;s trees, as Urban Forestry describes them', head: ['Measure', 'City of Portland figure'], rows: [
          ['Street trees', '333,000, including 252,180 along streets and 81,000 in natural areas beside roads'],
          ['Trees in parks and natural areas', '1.2 million'],
          ['Trees on private property', '2.9 million'],
          ['Tree canopy cover', '32% of Portland&rsquo;s land area; 12% in the Central City'],
          ['Canopy goal', '45% over the next 40 years'],
          ['2019 park tree inventory', '25,734 trees across 174 parks, 303 species'],
          ['Douglas-firs in that inventory', 'Nearly 7,000, about 27% of inventoried park trees']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Streets versus parks', p: 'Douglas-fir is about 27% of inventoried park trees but only a small share of street trees in our count. A teen can chart both and explain why planting rules differ between a sidewalk strip and a park.' },
          { h3: 'A nuisance at number one', p: 'The city has designated the Norway maple a nuisance plant and does not recommend it for streets, yet it tops the inventory. Data records the past; policy aims at the future.' },
          { h3: 'A goal you can model', p: 'Going from 32% to 45% canopy over 40 years is a growth problem. Older students build a simple projection and then list every assumption it makes.' }
        ] }
      ]
    },
    {
      id: 'oregon', tint: 'tint', eyebrow: 'Oregon schools and AI',
      h2: 'How Oregon&rsquo;s education department talks about AI literacy',
      intro: 'The Oregon Department of Education (ODE) publishes guidance on generative AI for K-12 schools, and the published access figures show where computer science stands.',
      body: [
        { kind: 'p', text: 'ODE&rsquo;s guidance says that foundational computer science knowledge, including computational thinking, underpins information and AI literacy, and that educational leaders should treat those literacies not as optional enrichment, but as foundational. It points districts to the AI Assessment Scale (AIAS) when planning policy, recommends writing assignments that put process ahead of product, and asks schools to shift the classroom culture from policing to coaching. ODE has also released Navigating Now: A Practical Toolkit for Information Literacy in the Age of AI. Our classes fit that framing: teens learn how AI systems are built, and their school work stays their own.' },
        { kind: 'table', mt: true, caption: 'Oregon high schools offering foundational computer science, by year (Code.org, 2025, Access data)', head: ['Year', 'Oregon'], rows: [
          ['2018 to 2019', '54%'],
          ['2020 to 2021', '63%'],
          ['2021 to 2022', '64%'],
          ['2022 to 2023', '60.2%'],
          ['2023 to 2024', '56.2%, 195 of 347 high schools']
        ] },
        { kind: 'p', text: 'Unusually, the Oregon figures fall after 2021 to 2022, from 64% to 56.2% in the most recent year, and the sheet has no 2019 to 2020 or 2024 to 2025 value. We report the numbers without guessing at a cause. Please cite them as Code.org (2025). 2025 State of AI + CS Education. We looked for a current ODE computer science standards page and could not find one at the addresses we tried, so this page does not summarise Oregon CS standards.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Pacific Time',
      h2: 'Class times for Portland, and the two weekends that matter',
      intro: 'Portland uses America/Los_Angeles in the IANA time zone database, on Pacific Time, and India keeps one time all year.',
      body: [
        { kind: 'table', caption: 'Where a 6:30 pm Portland lesson falls for a teacher in India, season by season (worked out by us from the IANA rules)', head: ['Season in Portland', 'Clock', 'Gap', 'Teacher&rsquo;s local time'], rows: [
          ['Late summer and October 2026', 'Pacific Daylight', 'India twelve and a half hours later', '7:00 am, following day'],
          ['Winter, from November 1, 2026', 'Pacific Standard', 'India 13 hours 30 minutes later', '8:00 am, following day'],
          ['Spring, from March 14, 2027', 'Pacific Daylight', 'India twelve and a half hours later', '7:00 am, following day']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pick your rhythm', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Why evenings suit', p: 'Pacific evenings land on Indian mornings, which is why early-evening slots after school and practice are often easy to arrange for Portland teens.' },
          { h3: 'Confirmed in Pacific Time', p: 'Each slot is written in Pacific Time, and we check it again the week the clocks change in early November and mid March, because the gap to India changes by an hour.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting trees to training models',
    intro: 'The grades are guidance only; the free class with a teacher sets the starting rung.',
    cols: [
      { band: 'Grades 6 to 8', h3: 'Python basics', p: 'Variables, loops and lists, with small games and first tallies of real data.', courses: ['python-ai-kids-masterclass', 'python-complete-masterclass-teens'] },
      { band: 'Grades 8 to 10', h3: 'Data skills', p: 'Files, Counters and pandas, with charts that tell the truth about a dataset.', courses: ['data-science-course-for-teens-python-data', 'mysql-mastery-for-teens'] },
      { band: 'Grades 9 to 12', h3: 'Machine learning', p: 'Classifiers, train and test splits, and what imbalanced classes do to a model.', courses: ['ai-ml-masterclass-teens', 'orange-data-mining-visual-machine-learning-course-for-teens'] },
      { band: 'Grades 10 to 12', h3: 'Building with AI', p: 'Web apps that use AI services responsibly, and AP Computer Science A for students who want it.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ap-computer-science-a-java-exam-prep-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'What a tree count teaches about AI training data',
    intro: 'Machine learning models inherit the shape of their data, and the street tree file shows that shape plainly.',
    p1: 'Train a model to identify Portland street trees from photos and it will see Norway maples more than seven times as often as Japanese snowbells, and some species only once. A model trained that way tends to guess the common answer. Teens who have counted the classes themselves understand why, and know to ask about balance before trusting an accuracy score.',
    p2: 'The same goes for labels. "Unknown" sits in the species column on rows marked Dead, and a careless pipeline would treat it as one more kind of tree. Our AI lessons begin with this kind of inspection, then move to building and evaluating models, with AI assistants used for drafting code and every suggestion tested before it stays.',
    closer: 'Oregon&rsquo;s guidance calls computer science the foundation of AI literacy; counting the trees on your own street is a very Portland way to lay it.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From St. Johns to Lents, a class at the kitchen table',
    intro: 'Portland teens join from home, so a class needs no bus ride across the river.',
    cells: [
      { h3: 'Taught live', p: 'A teacher shares the screen, watches code run and answers questions in the moment. Recorded lectures are not the course.' },
      { h3: 'US school aware', p: 'Teachers plan around US grades and the Oregon school year, and keep graded school work clearly the student&rsquo;s own.' },
      { h3: 'Free trial class', p: 'A full first lesson, then a suggestion for level, course and slot. No payment details are taken for it.' },
      { h3: 'Level-matched groups', p: 'A typical group seats fifteen to twenty teenagers who placed at a similar stage, some from Oregon and others from elsewhere in the country.' },
      { h3: 'One to one', p: 'A private teacher for teens with a project, a portfolio or AP preparation in mind.' },
      { h3: 'Pacific Time slots', p: 'Weekdays or weekends, flexible, always agreed in Pacific Time.' }
    ],
    spec: { title: 'Online, not local', p: 'Our teachers work from India and every lesson streams live. There is no Modern Age Coders building anywhere in Oregon, we do not pretend otherwise, and we have no link with the City of Portland, its Urban Forestry team or the Oregon Department of Education.' }
  },

  fees: {
    h2: 'Fees for Portland families',
    intro: 'A free start, then a monthly fee in US dollars.',
    first: 'A free lesson with a teacher, ending with a suggested level, course and Pacific Time slot.',
    group: 'A month in a group of fifteen to twenty teens at the same level.',
    private: 'A month of private lessons with one teacher.',
    closer: 'Portland pays the same US dollar fee as every other US city. Nothing is charged before the free lesson, and the pricing page sets out how holidays and missed lessons work.'
  },

  reviewsH2: 'Families on Google about their classes',

  book: {
    h2: 'Book a free class for a Portland teen',
    intro: 'Tell us the grade and what excites them. Younger teens often begin by coding a small quiz or game, while juniors and seniors usually ask to jump straight into the tree inventory or a first classifier.',
    success: 'Thanks. Someone from our team will be in touch shortly to set up the Portland trial lesson.'
  },

  faq: {
    h2: 'Portland parents ask',
    intro: 'What Portland parents and teens ask before starting.',
    items: [
      { q: 'What is the Portland street tree project?', a: 'Teens download the City of Portland Street Tree Inventory, count species with Python, compare species and genus groupings, and compute a diversity index, checking each result against the city\'s own figures.' },
      { q: 'How many street tree species does Portland have?', a: 'The city says its streets feature 354 different tree species. Our count of distinct species values in the open data also came to 354, one of which is the label Unknown.' },
      { q: 'What is the most common street tree in Portland?', a: 'The Norway maple. The city puts it at more than 18,000 trees, about 7%; our count of the active records was 18,150. The city has designated it a nuisance plant.' },
      { q: 'What does Oregon say about AI in schools?', a: 'ODE guidance says foundational computer science knowledge, including computational thinking, underpins information and AI literacy, and treats those literacies as foundational rather than optional.' },
      { q: 'What share of Oregon high schools teach computer science?', a: 'In its 2025 data Code.org counts 195 of 347 Oregon high schools, or 56.2%, with a foundational CS course in the 2023 to 2024 school year, a drop from 64% two years earlier.' },
      { q: 'What time are classes for Portland teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Slots are set in Pacific Time.' },
      { q: 'Does the class time change in November?', a: 'Portland moves to Pacific Standard Time on November 1, 2026, and India does not change, so we reconfirm each slot that week and again before March 14, 2027.' },
      { q: 'Does my teen need to know Python already?', a: 'Not at all. The beginner group assumes no experience, and teens who already write code are moved up after the trial lesson.' },
      { q: 'Which AI tools will my teen use?', a: 'We check the published age limit of each service first and use it only if the student\'s age. is old enough; anything restricted to adults is off the table, and the bulk of lessons is hand-written Python.' },
      { q: 'Is there an office in Portland?', a: 'No. Classes run live online from India, so a laptop, a headset and a reliable connection at home are all that is needed.' }
    ]
  },

  next: {
    eyebrow: 'Explore the United States',
    h2: 'More for Portland and US teens',
    html: 'Teens who like a deadline can read the <a class="cg-inline-link" href="/congressional-app-challenge-guide">Congressional App Challenge guide</a>, and future AP students can look at <a class="cg-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a>. For every US option in one place, open <a class="cg-inline-link" href="/coding-classes-in-united-states">the United States hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Portland and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-and-ai-classes-in-north-carolina', label: 'North Carolina' },
    { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
    { href: '/ap-computer-science-a-online-classes', label: 'AP CS A classes' },
    { href: '/coding-and-ai-classes-in-oregon', label: 'Oregon' }
  ],

  personalityCss: `
.cg-root.cg-aptp .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.8vw, 2.3rem); }
.cg-root.cg-aptp .cg-hero h1 { font-weight: 740; letter-spacing: -0.016em; line-height: 1.08; }
.cg-root.cg-aptp .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-aptp .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-aptp .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.011em; }
.cg-root.cg-aptp .cg-grid-3 { gap: clamp(0.85rem, 2vw, 1.6rem); }
.cg-root.cg-aptp .cg-table caption { font-weight: 700; text-align: left; letter-spacing: 0.01em; }
.cg-root.cg-aptp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-aptp .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-aptp .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Oregon, read raw on 18 October 2026: ODE Generative Artificial Intelligence (AI) for K-12 Schools (CS underpins information and AI literacy; literacies foundational, not optional enrichment; AI Assessment Scale (AIAS); policing to coaching; Navigating Now toolkit); Code.org (2025) raw sheet Access tabs (OR 2023-2024, 195 of 347, 56.2%; 54%, 63%, 64%, 60.2%); IANA America/Los_Angeles and the US DST rule. No current ODE CS standards page found.',
    localProject: 'City of Portland Street Tree Inventory - Active Records (Portland Open GeoData, site licence CC BY-SA), hub CSV downloaded 18 October 2026: 252,205 records; 354 distinct species values incl. Unknown; Norway maple 18,150 (7.20%); top 10 species 31.92%; Acer 58,650 (23.25%), top 10 genera 60.51%; Gini-Simpson 0.9818; 37 single-tree species; Unknown = Dead = 2,875. Cross-checked with Urban Forestry (354 species, 18,000+ Norway maples, 252,180 along streets). Lesson family: frequency counting and diversity.',
    requiredMentions: [
      '252,205 records',
      '18,150',
      '31.92%',
      '58,650',
      '0.9818',
      '2,875',
      '252,180 along streets',
      '25,734 trees across 174 parks',
      '45% over the next 40 years',
      '37 species represented by a single tree each',
      '81,000 in natural areas beside roads',
      'designated the Norway maple a nuisance plant'
    ],
    sources: [
      { claim: 'City of Portland Urban Forestry, Explore Portland\'s Canopy: tree counts, species, canopy figures, park inventory.', url: 'https://www.portland.gov/trees/get-involved/explore-portlands-canopy' },
      { claim: 'City of Portland open data: Street Tree Inventory - Active Records.', url: 'https://gis-pdx.opendata.arcgis.com/' },
      { claim: 'Oregon Department of Education: Generative Artificial Intelligence (AI) for K-12 Schools.', url: 'https://www.oregon.gov/ode/educator-resources/teachingcontent/Pages/Generative-Artificial-Intelligence-(AI)-for-K-12-Schools.aspx' },
      { claim: 'Code.org (2025), State of AI + CS Education data: Oregon access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb northamerica: America/Los_Angeles and the US DST rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Oregon computer science standards: no current ODE page found at the addresses tried (404); not summarised.',
      'Item-level licence for the tree inventory: the item licenceInfo field is empty; only the site-level CC BY-SA statement is cited.',
      'Street addresses in the inventory: not printed or analysed; counts only.',
      'Employment, layoff and environmental statistics quoted inside the ODE guidance: off-topic and money or job content, left out.',
      'An explanation for the fall in Oregon CS access: none published in what we read; not guessed.',
      'Any affiliation with the City of Portland, Portland Urban Forestry, ODE, Code.org or the College Board.'
    ]
  }
};
