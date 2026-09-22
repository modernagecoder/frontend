'use strict';
// Plymouth (cg- city page, UK cluster Phase 4). Spine: how wide should the blur be?
// Kernel density estimation over Plymouth's listed buildings: Historic England National Heritage List for England,
// Listed Building points (ArcGIS FeatureServer NHLE_v02_VIEW layer 0, OGL, read 22 September 2026), clipped to the
// ONS Plymouth local authority boundary (LAD DEC 2025 BFC, E06000026) by point in polygon (scratchpad ply/kde.py,
// k175.py). 782 list entries: 669 Grade II, 91 Grade II*, 22 Grade I, of which 9 Grade I entries are in the Royal
// William Victualling Yard. Listed by decade: 1950s 94, 1960s 27, 1970s 322, 1980s 12, 1990s 271, 2000s 44, 2010s
// 11, 2020s 1. By ward (ONS Wards December 2024 BGC): St Peter and the Waterfront 305, Devonport 104, Plympton Erle
// 80, Stoke 61, Plymstock Radford 47, Drake 27. Histogram: busiest 1 km cell holds 109, 144, 113 or 170 entries as
// the grid origin shifts by half a cell; busiest 500 m cell 94, 84, 76 or 66. Gaussian KDE on a 50 m lattice,
// local maxima above 5 percent of the top: bandwidth 75 m 62 peaks, 150 m 28, 175 m 24, 200 m 18, 300 m 12, 600 m
// 7, 736 m (rule of thumb from the standard deviations, n^-1/6) 4, 1500 m 2. Leave-one-out log-likelihood
// cross-validation: best 175 m (mean log-likelihood -16.781; 200 m -16.783; 150 m -16.819; 300 m -16.920; 736 m
// between 600 m -17.335 and 800 m -17.518). At 175 m, peaks fall in 11 wards; top 388 entries per square km near
// Southside Street on the Barbican, second 242 near Fore Street in Plympton; Devonport and Stoke have peaks. At
// 736 m, 4 peaks in St Peter and the Waterfront, Plympton Erle, Plymstock Radford and Southway only: Devonport's
// peak is gone. A list entry can cover several buildings (a terrace, a yard wall), so counts are entries.
// Lesson family: kernel density estimation and bandwidth selection (histogram anchor dependence, oversmoothing,
// leave-one-out cross-validation). Screened free site-wide 22 September 2026 (kernel density 0 hits; bandwidth
// appears only as internet speed on two Irish pages).
// Place facts read raw 22 September 2026: Census 2021 via Nomis, Plymouth E06000026: TS001 264,695 usual residents,
// 257,494 in households, 7,201 in communal establishments; TS007A 15,919 aged 15 to 19 (6.0 percent), 21,172 aged
// 20 to 24 (8.0), 17,938 aged 25 to 29 (6.8), against England 5.7, 6.0, 6.6; TS068 54,709 students of 251,490 aged
// 5 and over (21.8 percent, England 20.4); TS006 3,314.8 usual residents per square km (England 433.5). The Box,
// Smeaton's Tower: built on the Eddystone reef in 1759, taken down in the early 1880s when the sea was found to be
// eroding the rock beneath it, about two thirds moved stone by stone to Plymouth Hoe, 72 foot high. Royal William
// Yard, History: designed by Sir John Rennie, built in 1825, named after King William IV, a Royal Navy victualling
// facility from 1825 for over a century, "Europe's largest collection of Grade I Listed military buildings".

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'PLYMOUTH', blurb: 'Britain\'s Ocean City, with a project that maps 782 listed buildings and asks how much a density map should blur.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-plymouth',
  code: 'ply',
  accent: '#224F37',
  accentRationale: 'Plymouth: a deep Hoe green from the solver (7.60:1 on every paper tint, dE 6.2 from the nearest used accent), darker than the Cardiff green and warmer than the Brighton teal',
  pageType: 'city',
  place: {
    name: 'Plymouth',
    eyebrow: 'Plymouth, Devon',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Plymouth' },
      { type: 'AdministrativeArea', name: 'Devon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Plymouth, England',
  title: 'Best Coding Classes in Plymouth | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Plymouth learners aged 6 to 67, from the Barbican and Stoke to Plympton. Book a free first lesson today.',
  ogDescription: 'Coding and AI lessons for Plymouth, on a page that turns 782 listed buildings into a density map and shows how the choice of blur changes the story.',
  twitterDescription: 'Plymouth learners from six to sixty-seven can learn coding, Python and AI live online with us, and the first lesson is on the house.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 September 2026',
  courseSchema: {
    name: 'Plymouth Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics, AI and mathematics taught live online in English to Plymouth children, teenagers and adults, in small groups matched by level or one to one.'
  },

  h1: 'Coding classes in Plymouth',
  capsuleQ: 'What are the best coding classes in Plymouth?',
  capsule: 'Census 2021 found 264,695 usual residents in Plymouth, and 21.8% of those aged five and over were in school or full-time study, above the English figure of 20.4%. Smeaton\'s Tower, which stood on the Eddystone reef from 1759, now stands on Plymouth Hoe. Modern Age Coders teaches Plymouth learners between six and sixty-seven in live online lessons, either one to one or in a group of five to ten at the same level, with teachers in India working to UK hours. The opening lesson is free; afterwards, a group place is USD 100 a month and one-to-one teaching is USD 150 a month.',
  lead: 'Historic England lists 782 entries inside Plymouth, from Smeaton\'s Tower to a K6 telephone kiosk in Plympton. Where are they concentrated? Count them in one-kilometre squares and the busiest square holds 109 entries, or 170, depending only on where the grid happens to start. A kernel density map avoids the grid by placing a small smooth hill over every entry and adding the hills up. That swaps one arbitrary choice for another: the width of each hill, called the bandwidth. At 175 metres Plymouth shows 24 separate peaks, from the Barbican to Devonport and Plympton. At the 736 metres a textbook rule suggests, only four survive and Devonport disappears. Our teenagers learn to choose that width from the data rather than from habit.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Plymouth.',

  picks: {
    eyebrow: 'Course picks for Plymouth',
    h2: 'Four courses for the Ocean City',
    intro: 'Choose by what the learner likes doing. Each course opens with a live lesson that costs nothing, and booking one needs no card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Sprites, loops and simple maps built from blocks, including a game that drops counters on a harbour grid.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real datasets in Python, from reading a file of coordinates to drawing the smooth density map this page describes.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 13 to 18', note: 'Secondary maths in depth, including the probability, distributions and averages that sit underneath a density estimate.' },
      { course: 'statistics-probability-maths-course', band: 'University and adult', note: 'Statistics for adults without a programming background, from histograms and spread to estimating a distribution honestly.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Plymouth today',
      h2: 'A studying city on Plymouth Sound',
      intro: 'Figures from the 2021 census for the Plymouth council area, downloaded from Nomis and shown exactly as the Office for National Statistics published them.',
      body: [
        { kind: 'table', caption: 'Plymouth, Census 2021', head: ['Measure', 'Plymouth', 'England'], rows: [
          ['Usual residents', '264,695', '56,490,048'],
          ['Living in households', '257,494', 'Not compared'],
          ['Living in communal establishments', '7,201', 'Not compared'],
          ['Aged 15 to 19', '15,919 (6.0%)', '5.7%'],
          ['Aged 20 to 24', '21,172 (8.0%)', '6.0%'],
          ['Aged 25 to 29', '17,938 (6.8%)', '6.6%'],
          ['Students among residents aged 5 and over', '54,709 (21.8%)', '20.4%'],
          ['Usual residents per square kilometre', '3,314.8', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Students everywhere', p: 'Among 251,490 residents aged five and over, 54,709 were schoolchildren or full-time students in 2021, a larger share than across England.' },
          { h3: 'The early twenties', p: 'People aged 20 to 24 made up 8.0% of Plymouth\'s residents against 6.0% nationally, and the late teens 6.0% against 5.7%.' },
          { h3: 'A dense waterfront', p: 'With 3,314.8 residents to each square kilometre, Plymouth is packed between the Tamar and the Plym, several times the density of England as a whole.' }
        ] },
        { kind: 'p', text: 'That spread of ages shows up in our classes. A Year 4 child in Plympton might be building a first Scratch game, a Year 12 student in Mutley studying A level Computer Science, and an adult in Devonport learning Python to handle spreadsheets at work, each in a small group of learners at a matching level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Stone that moved',
      h2: 'A lighthouse brought ashore and a victualling yard in granite',
      intro: 'From The Box, which looks after Smeaton\'s Tower, and from Royal William Yard\'s own history.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1759', p: 'Smeaton\'s Tower was first built on the Eddystone reef, out in the Channel. In the early 1880s it was found that the sea was eroding the rock beneath it, and it was taken down.' },
          { h3: 'Stone by stone', p: 'The Box says about two thirds of the lighthouse was moved, one stone at a time, to Plymouth Hoe, where it now stands 72 foot high with its lantern room restored.' },
          { h3: '1825', p: 'Royal William Yard, designed by Sir John Rennie and named after King William IV, began supplying the Royal Navy with food and drink and did so for over a century.' }
        ] },
        { kind: 'p', text: 'We have no connection with The Box or Royal William Yard. Both belong here because they are a large part of why Plymouth\'s historic buildings sit where they do. Of the city\'s 22 Grade I list entries, nine are in Royal William Yard alone, which its owners describe as Europe\'s largest collection of Grade I listed military buildings. A map of listed buildings is partly a map of the navy.' },
        { kind: 'spec', title: 'Where the points come from', p: 'Historic England publishes the National Heritage List for England as open data under the Open Government Licence, with a grid reference for every listed building entry. Clipped to the Plymouth boundary it gives 782 entries: 669 at Grade II, 91 at Grade II* and 22 at Grade I. One entry can cover a whole terrace or a long wall, so the counts are entries, not buildings.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Plymouth\'s listed buildings as a density map',
      intro: 'A kernel density estimate replaces each point with a smooth bump and sums them. The one decision that matters is how wide the bumps are.',
      body: [
        { kind: 'table', caption: 'Peaks in a kernel density map of Plymouth\'s 782 list entries at different bandwidths (local maxima above 5% of the highest)', head: ['Bandwidth', 'Peaks', 'What the map shows'], rows: [
          ['75 m', '62', 'Almost every cluster of a few entries becomes its own peak'],
          ['175 m', '24', 'Peaks in 11 wards, the Barbican, Stoke, Devonport and Plympton among them'],
          ['300 m', '12', 'Neighbouring clusters begin to merge'],
          ['600 m', '7', 'Fewer, broader hills, with the small clusters gone'],
          ['736 m, the rule of thumb', '4', 'Only four wards keep a peak, and Devonport is not one of them'],
          ['1,500 m', '2', 'One hill over the city centre and one over Plympton']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Try a grid first', p: 'Count entries in one-kilometre squares. Slide the grid 500 metres east and north and the busiest square jumps from 109 entries to 170, with no change to the data.' },
          { h3: '2. Swap squares for bumps', p: 'Place a Gaussian bump over each entry and add them on a 50-metre lattice. The map no longer depends on where a grid begins, only on the bump width.' },
          { h3: '3. Let the data choose', p: 'Leave one entry out, ask how likely the map built from the rest makes it, and repeat for all 782. The width with the highest score is 175 metres.' }
        ] },
        { kind: 'callout', h3: 'The rule of thumb that erased a district', p: 'A common shortcut sets the bandwidth from the spread of the points. For Plymouth it gives 736 metres, four times the cross-validated width, because the entries are spread over a long, narrow city. At that width Devonport, with 104 list entries and the second-largest count of any ward, has no peak of its own and melts into the slope running down from the Barbican.' },
        { kind: 'p', text: 'At 175 metres the tallest peak, about 388 entries per square kilometre, sits near Southside Street on the Barbican, and the second, about 242, near Fore Street in Plympton. The ward with the most entries, St Peter and the Waterfront, holds 305 of the 782. Those are the numbers a learner can defend, because the width that produced them was tested rather than assumed.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Smoothing with care',
      h2: 'Five checks before trusting a heat map',
      intro: 'Practised on listed buildings, then applied to open data of every kind: bus stops, trees, sensor readings, shop visits and the density plots inside data science notebooks.',
      body: [
        { kind: 'table', caption: 'Questions to ask of any density map', head: ['Check', 'On the Plymouth map', 'What it catches'], rows: [
          ['Move the grid', 'The busiest square changes from 109 to 170 entries', 'A hotspot that is only an accident of where the lines fall'],
          ['Vary the width', 'Peaks fall from 62 to 2 as the width grows', 'A story that depends on one unexamined setting'],
          ['Cross-validate', 'Leave-one-out scoring picks 175 metres', 'A width chosen because it looked nice'],
          ['Know the unit', 'Counts are list entries, and one entry can be a terrace', 'Mistaking a record for a building'],
          ['Watch the edges', 'Bumps near the coast spill onto the sea', 'Density claimed where nothing can stand']
        ] },
        { kind: 'p', text: 'The last check matters on a coastline. A bump centred on a quay spreads half its weight over Plymouth Sound, so densities along the water are understated and some density sits on the sea. Learners fix it the simple way, by reporting peaks rather than totals near the shore, and then read about the corrections statisticians use.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Dots of paint dropped on a map, blurred with a sponge, and the discovery that a wide sponge hides the small clusters.' },
          { h3: 'Teenagers', p: 'The heritage list clipped to Plymouth in Python, a density map written by hand, and the bandwidth chosen by cross-validation.' },
          { h3: 'Adults', p: 'Density plots in analysis tools at work, with the bandwidth reported and justified instead of left at its default.' }
        ] },
        { kind: 'p', text: 'We are not connected with Historic England, The Box, Royal William Yard or Plymouth City Council. The heritage list and ward boundaries are open data under the Open Government Licence and the census tables are public; the density maps, peaks and cross-validation are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From paint dots to a cross-validated map',
    intro: 'The age bands give a rough idea only; the free lesson finds the right first step.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Dots and blurs', p: 'Plotting points on a simple map, counting them in squares, and seeing how moving the squares changes the count.', courses: ['scratch-programming-complete-course', 'elementary-mathematics-complete-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Histograms', p: 'Drawing bar charts from lists of numbers in code and noticing that the bar width changes the picture.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Density maps in Python', p: 'Gaussian kernels, a lattice of grid points and leave-one-out cross-validation on real open data.', courses: ['data-science-course-for-teens-python-data', 'complete-high-school-mathematics-mastery'] },
      { band: 'Ages 18 to 67', h3: 'Estimating distributions', p: 'Kernel density, smoothing choices and clear reporting for adults analysing data in their work.', courses: ['statistics-probability-maths-course', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A plotting library draws a density map by default. Why should a Plymouth teenager choose the bandwidth?',
    intro: 'Because the default made Devonport vanish, and nobody would have noticed.',
    p1: 'Ask an AI assistant for a heat map of these points and it will produce one in seconds, usually with a bandwidth picked by a rule of thumb. The picture will look authoritative. A learner who has tried several widths and scored them knows that the same 782 points can show four peaks or twenty-four, and knows how to decide which to believe.',
    p2: 'Machine learning is full of the same trade. Every model has a setting that controls how smooth or how detailed it is allowed to be, and cross-validation is the standard way to choose it without fooling yourself. Kernel density is one of the clearest places to see that idea at work, because the effect of the choice is visible on a map of streets the learner knows.',
    closer: 'So a Plymouth teenager should still learn to program in 2026, in a city that moved a lighthouse ashore stone by stone: software makes the map instantly, but deciding how much detail it is allowed to keep is still a human judgement.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Stoke, Plymstock or Southway, from home',
    intro: 'Crossing Plymouth at the end of a school day takes time, and a live online lesson simply removes the journey.',
    cells: [
      { h3: 'Either side of the Plym', p: 'A learner in Plymstock and another in St Budeaux can join the same lesson without anyone crossing the river.' },
      { h3: 'Reception to A level', p: 'Reception, Key Stages 1 to 4, GCSE options and A levels, named as Plymouth schools name them, with all teaching in English.' },
      { h3: 'A lesson, not a pitch', p: 'The free session teaches a real piece of work, then suggests a level, a course and a weekly slot. There is nothing to pay and no card to enter.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at the same level, drawn from Plymouth, other parts of Britain and abroad, so each stage has a time that suits.' },
      { h3: 'A steady rhythm', p: 'Two regular lessons a week, roughly eight a month, with half terms and exam periods arranged with the teacher beforehand.' },
      { h3: 'Clocks that do not move', p: 'India keeps the same time all year, four and a half hours ahead of Plymouth during British Summer Time and five and a half in winter, so UK afternoon and evening lessons stay within the teaching day.' }
    ],
    spec: { title: 'Across the Tamar and beyond', p: 'Families in Saltash, Ivybridge, Tavistock or Torpoint join the very same classes, because groups are built around level and every lesson happens online.' }
  },

  fees: {
    h2: 'Plymouth lesson fees',
    intro: 'The first lesson is free, and then there is one monthly fee.',
    first: 'A whole lesson at no charge, closing with a suggested level, course and weekly time.',
    group: 'Roughly eight live lessons a month in a class of five to ten learners at one level.',
    private: 'Roughly eight live lessons a month, with the teacher focused on your learner alone.',
    closer: 'Outside India every family pays one US dollar fee, so Mannamead and Efford pay the same, and no prices are shown in pounds. We take no payment until the free lesson has settled a course and a slot; details on pausing, missed lessons and changing between group and private teaching are on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, exactly as posted',

  book: {
    h2: 'Book a free lesson for a Plymouth learner',
    intro: 'The first task matches the learner: a dot-counting map game for a young child, a short Python histogram for a beginner, or the heritage list and a density map for a teenager ready to work with real data.',
    success: 'Thank you. We will be in touch soon to set up a lesson for your Plymouth learner.'
  },

  faq: {
    h2: 'Plymouth coding class questions',
    intro: 'What Plymouth families most often want to know.',
    items: [
      { q: 'How many people live in Plymouth?', a: 'Census 2021 recorded 264,695 usual residents in the Plymouth council area: 257,494 living in households and 7,201 in communal establishments such as halls of residence and care homes.' },
      { q: 'How does Plymouth compare with England?', a: 'In 2021, 8.0% of residents were aged 20 to 24 against 6.0% for England, 21.8% of residents aged five and over were students against 20.4%, and there were 3,314.8 residents per square kilometre against 433.5.' },
      { q: 'What is kernel density estimation?', a: 'A way of turning a set of points into a smooth map of where they are concentrated, by placing a small bump over each point and adding the bumps together. The bump width, called the bandwidth, controls how much detail survives.' },
      { q: 'Why does the bandwidth matter so much?', a: 'On Plymouth\'s 782 listed building entries, a 175-metre width shows 24 peaks and a 736-metre width shows four, losing Devonport entirely. Cross-validation chose 175 metres as the width that most accurately predicts entries left out.' },
      { q: 'Where does the listed building data come from?', a: 'Historic England\'s National Heritage List for England, published as open data under the Open Government Licence. Inside the Plymouth boundary it has 782 entries, 22 of them Grade I.' },
      { q: 'What is the story of Smeaton\'s Tower?', a: 'The Box says it was built on the Eddystone reef in 1759, taken down in the early 1880s because the sea was eroding the rock beneath it, and largely rebuilt on Plymouth Hoe. We are not connected with The Box.' },
      { q: 'What times are Plymouth lessons?', a: 'Weekday afternoons and evenings or weekends, at a UK time chosen during the free lesson. India is four and a half hours ahead of Plymouth in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a Modern Age Coders centre in Plymouth?', a: 'No. There is no Plymouth centre and we have no premises anywhere in the UK; all lessons are live online. Learners need a computer with working sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much do Plymouth lessons cost?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for two live lessons a week, about eight a month, in a group of five to ten, and one-to-one lessons on the same pattern cost USD 150 a month. Course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are Plymouth groups arranged?', a: 'By level, pace and aims rather than age or where a family lives, with five to ten learners at one stage. When no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'West Country neighbours and other cities',
    html: 'Up the M5, the <a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol page</a> divides its city into library catchments with a Voronoi diagram, and along the south coast <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> slides an eight-hour window over its ozone readings. <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a> builds a hash table from postcodes. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> covers the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> gathers every city in one place.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Plymouth and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-bristol', label: 'Bristol' },
    { href: '/best-coding-class-in-brighton-and-hove', label: 'Brighton and Hove' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-ply .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.9vw, 2.45rem); }
.cg-root.cg-ply .cg-hero h1 { font-weight: 700; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-ply .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-ply .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ply .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.018em; }
.cg-root.cg-ply .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.25rem); }
.cg-root.cg-ply .cg-table th { letter-spacing: 0.02em; }
.cg-root.cg-ply .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ply .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ply .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Plymouth, Census 2021 via Nomis (E06000026): TS001 264,695 usual residents, 257,494 in households, 7,201 in communal establishments; TS007A 15,919 aged 15 to 19 (6.0 percent), 21,172 aged 20 to 24 (8.0 percent), 17,938 aged 25 to 29 (6.8 percent), against England 5.7, 6.0 and 6.6 percent; TS068 54,709 students of 251,490 residents aged 5 and over (21.8 percent, England 20.4); TS006 3,314.8 usual residents per square kilometre (England 433.5). The Box, Smeaton\'s Tower: built on the Eddystone reef in 1759, taken down in the early 1880s when the sea was found eroding the rock, about two thirds moved stone by stone to Plymouth Hoe, 72 foot high. Royal William Yard, History: designed by Sir John Rennie, built 1825, named after King William IV, Royal Navy victualling facility for over a century, Europe\'s largest collection of Grade I listed military buildings.',
    localProject: 'Plymouth\'s listed buildings as a density map. Historic England NHLE Listed Building points (OGL, read 22 September 2026) clipped to ONS LAD E06000026: 782 entries (669 II, 91 II*, 22 I; 9 Grade I in Royal William Victualling Yard). Wards: St Peter and the Waterfront 305, Devonport 104, Plympton Erle 80, Stoke 61. Busiest 1 km cell 109, 144, 113 or 170 as the origin shifts half a cell. Gaussian KDE on a 50 m lattice, peaks above 5 percent of max: 75 m 62, 175 m 24, 300 m 12, 600 m 7, 736 m (rule of thumb) 4, 1,500 m 2. Leave-one-out likelihood cross-validation best at 175 m. At 175 m top peak about 388 entries per square km near Southside Street, second about 242 near Fore Street, Plympton; at 736 m Devonport has no peak. Lesson family: kernel density estimation and bandwidth selection by cross-validation; distinct from Bristol Voronoi, Nottingham convex hull and Milton Keynes Monte Carlo.',
    requiredMentions: [
      '264,695',
      '257,494',
      '7,201',
      '3,314.8',
      '21,172',
      '54,709',
      'Smeaton',
      'Royal William',
      'kernel density',
      'Southside Street',
      'Rennie',
      'Devonport'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Plymouth: 264,695 usual residents; 257,494 in households; 7,201 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000026' },
      { claim: 'Nomis, Census 2021 TS007A: Plymouth and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000026,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Plymouth 54,709 students of 251,490 aged 5 and over (21.8 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000026,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Plymouth 3,314.8 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000026,E92000001' },
      { claim: 'Historic England, National Heritage List for England open data, Listed Building points (OGL).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'ONS, Local Authority Districts December 2025 boundaries (BFC) and Wards December 2024 boundaries (BGC), OGL.', url: 'https://services1.arcgis.com/ESMARspQHYMw9BZ9/arcgis/rest/services/Local_Authority_Districts_DEC_2025_Boundaries_UK_BFC/FeatureServer' },
      { claim: 'The Box, Smeaton\'s Tower: Eddystone reef 1759, taken down in the early 1880s, two thirds moved to Plymouth Hoe, 72 foot high.', url: 'https://www.theboxplymouth.com/outside-the-box/smeatons-tower' },
      { claim: 'Royal William Yard, History: Sir John Rennie, built 1825, King William IV, largest collection of Grade I listed military buildings in Europe.', url: 'https://royalwilliamyard.com/history' }
    ],
    rejectedClaims: [
      'Historic England list entry pages: the website returned 403, so no list entry description is quoted; only the open data fields are used.',
      'The cost of Smeaton\'s Tower in 1759: money figures are excluded by the cluster rules.',
      'Visitor numbers for Royal William Yard: not needed and not independently checked.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Historic England, The Box, Royal William Yard or Plymouth City Council.'
    ]
  }
};
