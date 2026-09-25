'use strict';
// Hackney (cg- London borough page, UK cluster Phase 5, row 176). Named sources only.
// Spine: how many kinds of tree are there? London Datastore (GLA), Local Authority Maintained Trees, Borough_tree_list
// _2025Nov.csv (1,136,049 rows across London; coverage varies by borough, so no cross-borough comparison). Hackney rows:
// 33,085 (LB Hackney 32,035, TfL 466, LLDC 438). Named to species: 21,719; genus only 11,181 (e.g. Prunus 3,282,
// Tilia 1,127, Malus 901, Acer 634); "Unknown Tree Species" 185. Species S = 229; singletons 24, doubletons 11; Chao1 =
// 229 + 24^2/(2 x 11) = 255.2. Simpson diversity 0.964. Top: London Plane (Platanus hispanica) 2,981 = 13.7% of
// species-named trees; Silver Birch 1,058; Sycamore 986; Ash 932; Field Maple 930. Accumulation (50 random draws each,
// seed 20260925): 100 trees 47.1 species, 500 103.3, 1,000 130.4, 2,000 157.2, 5,000 189.5, 10,000 209.7, 20,000
// 226.8. Chao1 from 200 subsamples: 1,000 trees 172.2 (5-95% 145-204), 2,000 194.5 (172-226), 5,000 216.6 (198-238),
// against 229 found in the full list: a lower bound that is too low from small samples.
// Lesson family: species accumulation curves and the Chao1 richness estimator; screened 25 September 2026 (Chao 0,
// rarefaction 0, species richness 0).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'HACKNEY', blurb: 'St Augustine\'s tower, 33,000 street trees and a project on estimating how many kinds you have not found yet.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-hackney-london',
  code: 'hck',
  accent: '#0E4E26',
  accentRationale: 'Hackney: a deep canopy green from the solver (7.98:1 on every paper tint), for a street-tree page, darker and cooler than the Hounslow green',
  pageType: 'governorate',
  place: {
    name: 'Hackney',
    eyebrow: 'London Borough of Hackney',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hackney, London',
  title: 'Coding Classes in Hackney and Shoreditch | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Hackney: Shoreditch, Dalston, Stoke Newington, Clapton, Homerton and Stamford Hill. Ages 6 to 67.',
  ogDescription: 'Hackney coding and Python classes, with a project on 33,000 street trees where learners estimate how many tree species there are, including the ones nobody has recorded yet.',
  twitterDescription: 'Hackney coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Hackney Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Hackney, taught live in English.'
  },

  h1: 'Coding classes in Hackney',
  capsuleQ: 'What are the best coding classes in Hackney?',
  capsule: 'Hackney is the east London borough of Shoreditch, Dalston, Stoke Newington, Clapton, Homerton, Hackney Wick and Stamford Hill, home to 259,146 people at the 2021 Census and to more than 33,000 trees on the public list of trees looked after by councils and other public bodies. A class worth its fee teaches a learner to estimate what they cannot yet see from what they can, and this page does that with Hackney\'s trees: how many species appear as you look at more and more trees, and a famous formula that guesses how many are still unrecorded. Teachers in India teach live over video, for learners aged 6 to 67, either one to one or in small classes of five to ten sharing a level. The first lesson is free. Group places then cost USD 100 a month; private lessons USD 150 a month.',
  lead: 'The Greater London Authority publishes a list of trees maintained by London\'s councils and other public bodies, with the species of each where it is known. Hackney has 33,085 entries. Walk down a Hackney street and you will soon have seen London planes, silver birches and sycamores; keep walking and new species appear more and more rarely. Ecologists call the graph of that slowing discovery a species accumulation curve, and our learners draw it by sampling the list at random. Then they meet Chao1, a short formula that uses only the species seen once or twice to estimate how many were never seen at all. On the full list it suggests about 255 species where 229 are named. On small samples, learners find it guesses far too low.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hackney.',

  picks: {
    eyebrow: 'Course picks for Hackney',
    h2: 'Courses to begin with in Hackney',
    intro: 'Think of a Year 2 child in Stoke Newington who collects conkers and leaves, a Year 8 pupil in Dalston who likes Pokémon-style collecting games, a Year 13 student in Clapton headed for biology or ecology, and a volunteer in Homerton who counts birds and trees on weekends. Each of them can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch collecting game where new kinds of tree turn up less and less often, and a counter of how many you have found.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with a real list: count each kind of tree and find the most common.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including accumulation curves and the Chao1 estimate on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who survey, audit or catalogue things and want to estimate what their sample has missed.' }
    ]
  },

  sections: [
    {
      id: 'hackney', tint: '', eyebrow: 'Hackney in numbers',
      h2: '259,146 residents and 33,085 listed trees',
      intro: 'Every figure below is published by the organisation named, or counted by us from its open data.',
      body: [
        { kind: 'table', caption: 'Four Hackney numbers', head: ['Subject', 'Number', 'Publisher or source'], rows: [
          ['People living in Hackney on Census day, March 2021', '259,146', 'Office for National Statistics'],
          ['Trees in Hackney on the London tree list', '33,085', 'Greater London Authority, November 2025 file'],
          ['Heritage List entries inside the borough', '552: 8 Grade I, 30 Grade II*, 514 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Council libraries', '9', 'Hackney Council, read 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Churches at Grade I', p: 'Six of Hackney\'s eight Grade I entries are churches or church buildings, including St Leonard in Shoreditch, St Matthias, St Michael, St Chad and St Columba with its vicarage.' },
          { h3: 'A tower on its own', p: 'The old tower of the former Church of St Augustine is listed at Grade I in its own right.' },
          { h3: 'A museum', p: 'The building the list names as the Geffrye Museum completes Hackney\'s Grade I entries.' }
        ] },
        { kind: 'p', text: 'Hackney Council runs libraries at Clapton, Dalston CLR James, Hackney Central, Homerton, Shoreditch, Stamford Hill, Stoke Newington and Woodberry Down, and lists a community library service too.' }
      ]
    },
    {
      id: 'trees', tint: 'tint', eyebrow: 'The data',
      h2: 'Cleaning the list before counting it',
      intro: 'Before counting species, learners have to decide what counts as one. The list is honest about what it does not know.',
      body: [
        { kind: 'table', caption: 'Hackney\'s 33,085 tree records, by how precisely they are named', head: ['How the tree is recorded', 'Trees', 'Example'], rows: [
          ['Named to species', '21,719', 'Platanus hispanica, London Plane'],
          ['Named only to genus', '11,181', 'Prunus, cherry of some kind'],
          ['Recorded as unknown', '185', 'Unknown Tree Species']
        ] },
        { kind: 'p', text: 'A third of Hackney\'s trees are named only to genus: "a cherry", "a lime", "a maple". Counting "Prunus" as a species would be wrong, because it might hide several. So learners keep only the 21,719 trees named to species, and find 229 species among them. The most common by far is the London Plane, 2,981 trees or 13.7% of the species-named total, followed by silver birch, sycamore, ash and field maple. Most records are the council\'s own, with a few hundred each from Transport for London and the body that looks after the Olympic Park area.' },
        { kind: 'p', text: 'The London list covers boroughs very unevenly, with over 100,000 trees for one borough and around a thousand for another, so this project never compares Hackney with anywhere else. It is a study of one list and what it can tell us.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Estimating the species nobody has recorded',
      intro: 'Learners draw a species accumulation curve, then test a formula that estimates what the survey missed.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Sample and count', p: 'Pick 100 trees at random and count the species; then 500, 1,000, 10,000. Repeat each size 50 times and average. The curve rises fast, then flattens.' },
          { h3: '2. Singletons matter', p: 'Species seen exactly once, and exactly twice, are the clue. Many singletons means many rare species, and probably more that were never seen at all.' },
          { h3: '3. Chao1', p: 'The estimate is the number observed, plus the number of singletons squared, divided by twice the number of doubletons. It is designed as a lower bound.' }
        ] },
        { kind: 'table', caption: 'Species found as more trees are sampled, run 25 September 2026', head: ['Trees sampled', 'Species found, on average', 'Chao1 estimate from that sample'], rows: [
          ['1,000', '130', '172 (145 to 204 in 90% of samples)'],
          ['2,000', '157', '195 (172 to 226)'],
          ['5,000', '189', '217 (198 to 238)'],
          ['All 21,719', '229', '255']
        ] },
        { kind: 'p', text: 'On the full list there are 24 species represented by a single tree and 11 by exactly two, which lifts the estimate to about 255: perhaps two dozen more species out there than the list names, planted in private gardens, or hidden among the trees recorded only to genus. The small-sample test is the sobering part. From 1,000 trees, Chao1 estimates 172 species, yet the full list already contains 229. The formula is honest about being a lower bound, and learners see exactly how low it can be when a sample is small.' },
        { kind: 'callout', h3: 'Why this is a lesson AI cannot shortcut', p: 'Ask an AI how many tree species grow in Hackney and it will produce a number, perhaps confidently. A learner who has built the accumulation curve and tested Chao1 knows that every such number depends on how much was looked at, what counted as a species, and which estimator was used, and that some estimators always err on the low side. The same reasoning is used for rare words in a language, unseen bugs in software and undiscovered species in the ocean.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Doing it properly',
      h2: 'Three decisions learners write down first',
      intro: 'Choices made before counting shape every answer that follows.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'What is a species?', p: 'Records named only to genus are set aside, and the number set aside is reported, not hidden.' },
          { h3: 'Random, repeated', p: 'Each sample size is drawn 50 times with a fixed random seed, so anyone can rerun the curve and get the same result.' },
          { h3: 'Say what it estimates', p: 'Chao1 estimates species among trees like these, on lists like this. It says nothing about gardens, parks or trees never surveyed.' }
        ] },
        { kind: 'p', text: 'GCSE biology and maths students can follow sampling, counting and the curve; A-level students can derive why singletons and doubletons carry the information and compare Chao1 with other estimators. The tree records are the Greater London Authority\'s, compiled from the bodies that maintain the trees; the cleaning, sampling, curves and estimates are ours, computed on 25 September 2026. Modern Age Coders works independently of the GLA, Hackney Council, Transport for London, Historic England and the ONS.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Hackney Central, the Overground and a quiet room',
      intro: 'Much of Hackney is served by the Overground rather than the Tube. For our lessons, a good connection of a different kind is what counts.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hackney Central', p: 'TfL\'s open data lists the Mildmay line at Hackney Central.' },
          { h3: 'Stamford Hill to Shoreditch', p: 'A learner at the northern tip of the borough and one near Shoreditch can share a class without a single journey.' },
          { h3: 'No one left unrecorded', p: 'In groups of five to ten at one stage, the teacher knows every learner by name and by progress.' }
        ] },
        { kind: 'spec', title: 'Hackney among London\'s boroughs', p: 'Hackney is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers every borough and the City, linking each page as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-newham-london">Newham</a> to the east and <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From leaf collecting to estimating the unseen',
    intro: 'Where a learner starts depends on what they show us in the free lesson; a school year only hints at it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Collect and count', p: 'Children make collecting games in Scratch and notice that new items get rarer the more they find.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Tallies in Python', p: 'Python dictionaries that count each kind of tree and find the most and least common.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Sampling and estimation', p: 'Random sampling, accumulation curves and Chao1 on a real public list, an excellent biology, geography or computing project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Surveys that know their limits', p: 'Adults learn to estimate what a survey or audit missed, and to say how uncertain that estimate is.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can count anything. Why should a Hackney teenager learn to estimate what was never counted?',
    intro: 'Because every real dataset is incomplete, and the missing part is often what matters.',
    p1: 'AI tools can tally a list in a moment. What they will not volunteer is that a third of this list is recorded only to genus, that the count depends on how many trees you look at, and that the standard estimate of unseen species undershoots badly on small samples. A learner who has run the curve and the estimator themselves knows to ask those questions of any count, including counts produced by AI.',
    p2: 'Estimating the unseen runs through ecology, security testing, quality control and language technology. Machines will keep producing counts. People who understand what a count leaves out will keep being needed.',
    closer: 'Hackney\'s streets hold more than 30,000 trees and at least 229 kinds of them. A Hackney learner who can estimate how many more are out there is doing real science on their own doorstep.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Dalston to Hackney Wick, lessons live',
    intro: 'From any corner of Hackney, a lesson starts the moment the video call does.',
    cells: [
      { h3: 'Learn where you are', p: 'All that is needed is a laptop or desktop, headphones and an internet connection steady enough for video.' },
      { h3: 'English Key Stages', p: 'Parents hear about progress in the vocabulary of a Hackney school report: which Key Stage, and, for older learners, how it links to GCSE or A level. Every lesson is taught in English.' },
      { h3: 'The first lesson is free', p: 'Genuine teaching with a teacher, finishing with a suggested level and course, and no request for card details.' },
      { h3: 'Classes by level', p: 'Classmates share a stage rather than a postcode: five to ten of them, from anywhere in the UK or beyond, which keeps a reasonable evening hour available.' },
      { h3: 'Twice a week', p: 'A standard week has two evening lessons; the class takes breaks for school holidays and exam season once everyone has agreed.' },
      { h3: 'UK times only', p: 'Invitations and reminders show London time, even though your teacher is working from India.' }
    ],
    spec: { title: 'A dense borough, a matched class', p: 'Around 259,000 people live in Hackney, and a good class still needs five learners at the same stage free at the same time, so our classes draw from far beyond it.' }
  },

  fees: {
    h2: 'Fees for Hackney families',
    intro: 'Nothing for lesson one; afterwards a single monthly fee that does not vary between Shoreditch and Stamford Hill.',
    first: 'A full first lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one with a teacher.',
    closer: 'Fees for Hackney, like everywhere outside India, are set in US dollars, which is why no pound figures appear anywhere on the site. Money only changes hands once the free lesson is over and a course and a regular slot have been agreed. The pricing page explains pauses, missed lessons and switching between group and private lessons.'
  },

  reviewsH2: 'Reviews families gave us on Google',

  book: {
    h2: 'Book a free lesson',
    intro: 'An age or school year and one interest help us plan. Lesson one might be a Scratch collecting game, a Python tree tally, or the species project on this page.',
    success: 'Thank you. Your Hackney lesson request is with us.'
  },

  faq: {
    h2: 'Hackney families\' questions',
    intro: 'About the borough, the tree project and how our lessons work.',
    items: [
      { q: 'How many people live in Hackney?', a: 'The 2021 Census counted 259,146 usual residents in the London Borough of Hackney, in ONS table TS001.' },
      { q: 'Where does the tree data come from?', a: 'From the Greater London Authority\'s list of trees maintained by local authorities and other public bodies, published on the London Datastore. The November 2025 file has 33,085 entries for Hackney.' },
      { q: 'What is the most common tree in the list?', a: 'The London Plane, Platanus hispanica: 2,981 trees, or 13.7% of the trees named to species. Silver birch, sycamore, ash and field maple come next.' },
      { q: 'What is the Chao1 estimate?', a: 'A formula for estimating how many species exist, including unseen ones, from the number observed and the numbers seen exactly once and exactly twice. For Hackney\'s list it gives about 255, against 229 species named.' },
      { q: 'Why did Chao1 guess too low on small samples?', a: 'It is designed as a lower bound, and a small sample contains few of the rarer species. From 1,000 trees it estimated about 172 species, but the full list already names 229.' },
      { q: 'When do Hackney learners have lessons?', a: 'Once the free lesson has placed the learner, we name a class at that level with a seat available and its fixed weekly evening, written in UK time; the teacher is in India.' },
      { q: 'What equipment is needed?', a: 'A computer with sound and a reliable connection. The tree project needs Python and one free download from the London Datastore.' },
      { q: 'Is there a Modern Age Coders centre in Hackney?', a: 'No. There is no Hackney centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Hackney cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'More boroughs, more data',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> brings every borough and the City together, with a link to each page once published, such as <a class="cg-inline-link" href="/coding-classes-in-enfield-london">Enfield</a> and <a class="cg-inline-link" href="/coding-classes-in-greenwich-london">Greenwich</a>. Sampling and estimation are a short step from machine learning, taught in our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">classes for London learners</a>; a family relocating within Britain can check equivalent school years on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hackney and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-newham-london', label: 'Newham' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-hck .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-hck .cg-hero h1 { font-weight: 790; letter-spacing: -0.021em; line-height: 1.02; }
.cg-root.cg-hck .cg-capsule { border-left: 3px dotted var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-hck .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hck .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-hck .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.85rem); }
.cg-root.cg-hck .cg-table caption { font-weight: 700; letter-spacing: 0.014em; }
.cg-root.cg-hck .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hck .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-hck .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-hck .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Hackney. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000012): 259,146 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 552 (I 8, II* 30, II 514); Grade I 1226772 THE GEFFRYE MUSEUM, 1226862 CHURCH OF ST COLUMBA, 1265658 ST COLUMBA\'S VICARAGE, WITH LINK TO CHURCH, 1235382 CHURCH OF ST LEONARD, 1265031 CHURCH OF ST MATTHIAS, 1265204 CHURCH OF ST MICHAEL, 1265635 OLD TOWER OF FORMER CHURCH OF ST AUGUSTINE, 1265793 CHURCH OF ST CHAD. Hackney Council libraries pages, 25 September 2026: Clapton, Dalston CLR James, Hackney Central, Homerton, Shoreditch, Stamford Hill, Stoke Newington, Woodberry Down, plus a community library service. TfL Unified API 910GHACKNYC (Hackney Central): Mildmay.',
    localProject: 'London Datastore dataset local-authority-maintained-trees, file Borough_tree_list_2025Nov.csv (1,136,049 rows; per-borough counts range from 1,209 (Croydon) to 109,897 (Enfield), so no comparison made). Hackney rows 33,085; maintainer LB Hackney 32,035, Transport for London 466, London Legacy Development Corporation 438. taxon_species: 291 raw values; "Unknown Tree Species" 185; genus-only (single word) 11,181 incl. Prunus 3,282, Tilia 1,127, Malus 901, Acer 634; species-level 21,719 in 229 species. f1 24, f2 11, Chao1 255.2; Gini-Simpson 0.964. Top species: Platanus hispanica London Plane 2,981 (13.7%), Betula pendula Silver Birch 1,058, Acer pseudoplatanus Sycamore 986, Fraxinus excelsior Ash 932, Acer campestre Field Maple 930. Accumulation (random.Random(20260925), 50 draws): 100 47.1; 500 103.3; 1,000 130.4; 2,000 157.2; 5,000 189.5; 10,000 209.7; 20,000 226.8; 21,719 229. Chao1 on 200 subsamples: 1,000 172.2 (5%-95% 145-204); 2,000 194.5 (172-226); 5,000 216.6 (198-238). Lesson family: species accumulation and Chao1 richness estimation, screened 25 September 2026.',
    requiredMentions: [
      '259,146',
      '33,085',
      'Chao1',
      'species accumulation curve',
      'London Plane',
      'Geffrye Museum',
      'St Matthias',
      'Woodberry Down',
      'Dalston CLR James'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Hackney E09000012: 259,146 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000012&measures=20100' },
      { claim: 'Greater London Authority, Local Authority Maintained Trees, borough tree list November 2025.', url: 'https://data.london.gov.uk/dataset/local-authority-maintained-trees' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Hackney on 25 September 2026: 552 (8 I, 30 II*, 514 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'Hackney Council libraries.', url: 'https://hackney.gov.uk/libraries' },
      { claim: 'TfL Unified API, StopPoint 910GHACKNYC (Hackney Central): Mildmay.', url: 'https://api.tfl.gov.uk/StopPoint/910GHACKNYC' }
    ],
    rejectedClaims: [
      'Comparisons of tree numbers or diversity with other boroughs: the list\'s coverage differs hugely by borough, so none are made.',
      'The Geffrye Museum\'s current name and use: the page uses the list entry name only.',
      'Trees in private gardens and parks not on the list: outside the data; the page says so.',
      'Hackney schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Hackney: never a standout; used only to order the build.'
    ]
  }
};
