'use strict';
// Truro (cg- city page, UK cluster Phase 4). Spine: where do the Tre- names stop? A two-sample Kolmogorov-Smirnov test on
// the eastings of settlement names in OS Open Names (tiles SW, SX, SS, SY and ST read 23 September 2026; types City, Town,
// Village, Hamlet, Suburban Area and Other Settlement; exact duplicates removed; scratchpad tru/ks.py and ks2.py).
// Cornwall, Devon and Torbay: 2,385 settlement names (Cornwall 1,121, Devon 1,228, Torbay 36; Plymouth and the Isles of
// Scilly not in the extract). A prefix counts when the name starts with it and the next letter is lower case. Tre-: 183
// names, 182 in Cornwall, 1 in Devon (Trentishoe). Pen-: 39, 34 in Cornwall, 5 outside (Pennsylvania, Pennymoor, Penquit,
// Penstone twice). Pol-: 16, 12 in Cornwall, 4 in Devon (Polsloe, Polsloe Bridge, Polsloe Priory, Poltimore). KS on
// eastings: all three prefixes vs the rest, 238 vs 2,147, D 0.536; Tre- D 0.557 (median easting 198,988 vs 245,145),
// permutation 0 of 2,000 random draws as large; Pen- D 0.463; Pol- D 0.297, p 0.097. Within Cornwall only: Tre- 182 vs
// 939 other names, D 0.096, p 0.113, medians 198,988 vs 196,708. Tre- share of Cornwall names 16.2 percent (182 of
// 1,121); by 20 km easting band from 130,000: 23.8, 7.8, 14.1, 24.3, 16.8, 8.4 percent. Near Truro (Open Names): Treliske
// 3.1 km, Tresillian 4.1, Penelewey 4.5, Trelissick 5.3; also Kenwyn, Highertown, Threemilestone, Idless, Calenick.
// Lesson family: Kolmogorov-Smirnov two-sample test and empirical cumulative distributions, permutation check, false
// positives in string prefixes. Screened 23 September 2026: Kolmogorov, ECDF and empirical distribution 0 hits in
// src/pages and content/uk. Chi-squared avoided (used on the cipher challenge page).
// Heritage read raw 23 September 2026 from Truro Cathedral's history pages: Diocese of Truro established 1876; Edward
// White Benson consecrated first bishop on 25 April 1877 at St Paul's Cathedral; foundation stones laid 20 May 1880 by
// the Duke of Cornwall, later King Edward VII; final services in St Mary's on 3 October 1880, its south aisle kept in the
// new building; central tower finished by 1905; completed with the opening of the two western towers in 1910; John
// Loughborough Pearson died 1897, his son Frank Loughborough Pearson completed the work; a copy of the original Nine
// Lessons and Carols service sheet from 1880 is on display. NHLE: Truro Cathedral 1205377, Grade I, listed 29 December
// 1950.
// Census 2021 via Nomis: Cornwall E06000052 570,305 usual residents, 562,448 in households, 7,857 communal; 94,591
// students of 544,773 aged 5 and over (17.4 percent); 160.9 per square km; 40,401 aged 70 to 74 of 570,302 (7.1 percent;
// England 5.0). MSOAs (House of Commons Library names): Truro East E02003908 8,458, 1,576 students of 8,070 (19.5
// percent), 2,364.8 per square km; Truro West E02003909 10,739, 417 communal, 1,954 of 10,203 (19.2 percent), 950.2;
// Truro South and Central E02003910 6,968, 1,109 of 6,650 (16.7 percent), 2,108.6, 277 aged 85 and over of 6,967 (4.0
// percent). England 20.4 percent, 433.5.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'TRURO', blurb: 'Cornwall\'s cathedral city, with a project that tests where the Tre-, Pol- and Pen- place names really stop.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-truro',
  code: 'tru',
  accent: '#174D82',
  accentRationale: 'Truro: an estuary blue, from the solver (7.04:1 on every paper tint, dE 6.9 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Truro',
    eyebrow: 'Truro, Cornwall',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Cornwall' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Truro',
  title: 'Best Coding Classes in Truro | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Truro learners aged 6 to 67, from Kenwyn and Highertown to Threemilestone. We teach the first lesson free.',
  ogDescription: 'Coding and AI lessons for Truro, on a page that tests 2,385 Ordnance Survey place names to find where the Tre-, Pol- and Pen- names stop.',
  twitterDescription: 'Truro learners from six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, and the first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Truro Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, text and data analysis, statistics, mathematics and AI taught live online in English to Truro children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Truro',
  capsuleQ: 'What are the best coding classes in Truro?',
  capsule: 'Cornwall had 570,305 usual residents at the 2021 census, and Truro West, the largest of three middle-layer areas named after the city, had 10,739. Truro Cathedral records that its foundation stones were laid on 20 May 1880. Truro learners between six and sixty-seven study with us live over video, taught by teachers in India either alone or in a class of five to ten at one level, with lesson times built around English school hours and the working day. The opening lesson is on us; from then on, a group place is USD 100 a month, or USD 150 a month for one-to-one teaching.',
  lead: 'Look at a map around Truro and the names begin with the same few letters: Treliske, Tresillian, Trelissick, Penelewey. Our Truro project asks where those names stop. Teenagers take every settlement Ordnance Survey names in Cornwall, Devon and Torbay, 2,385 in all, and pull out those beginning Tre-, Pol- and Pen-. Of the 183 Tre- names, 182 are in Cornwall. Then they use the Kolmogorov-Smirnov test to compare where the Tre- names sit from west to east with where every other name sits, and find the gap is far too large to be chance. The surprise comes when they run the same test inside Cornwall alone.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Truro.',

  picks: {
    eyebrow: 'Course picks for Truro',
    h2: 'Four courses for Cornwall\'s cathedral city',
    intro: 'Choose the course that sits closest to what the learner enjoys already. Each one opens with a free live lesson, and booking asks for no payment card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from word games that check how a name begins to simple maps with markers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'First Python with text and lists, the skills needed to sort place names and count the ones that start the same way.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including how to compare two whole distributions rather than two averages.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'University and adult', note: 'Data analysis for adults without a programming background, from cleaning a list to testing whether a pattern is real.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Truro today',
      h2: 'Three city areas and a large county',
      intro: 'Figures come from the 2021 census, downloaded through Nomis, and cover Truro East, Truro West, and Truro South and Central (the names the House of Commons Library gives these middle-layer areas), set beside Cornwall and England.',
      body: [
        { kind: 'table', caption: 'Truro in the 2021 census', head: ['Area', 'People usually resident', 'Share of those aged 5 and over in full-time education', 'People per square kilometre'], rows: [
          ['Truro East', '8,458', '19.5%', '2,364.8'],
          ['Truro West', '10,739', '19.2%', '950.2'],
          ['Truro South and Central', '6,968', '16.7%', '2,108.6'],
          ['Cornwall', '570,305', '17.4%', '160.9'],
          ['England', '56,490,048', '20.4%', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'West of the centre', p: 'Truro West, the largest area, had 417 residents in communal establishments, and 1,954 of its 10,203 residents aged five and over were in full-time education.' },
          { h3: 'The centre', p: 'Truro South and Central had 277 residents aged 85 or over, 4.0% of its age table, and 1,109 students among 6,650 residents aged five and over.' },
          { h3: 'The county', p: 'Across Cornwall, 7.1% of residents were aged 70 to 74 in 2021, against 5.0% in England, and the county averaged 160.9 residents per square kilometre.' }
        ] },
        { kind: 'p', text: 'Percentages are calculated from each table\'s own total, since the census adjusts every table separately to protect privacy. Our Truro classes bring together the city and the villages round it. A Highertown six-year-old making a first animation, a Year 9 student from Threemilestone choosing GCSE options and a Kenwyn adult learning Python to automate a small business\'s records could each join a different class, grouped by level rather than by age.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The cathedral',
      h2: 'A cathedral built between 1880 and 1910',
      intro: 'Dates below are from Truro Cathedral\'s own history pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1876 and 1877', p: 'The cathedral records that the Diocese of Truro was established in 1876, and that Edward White Benson was consecrated its first bishop at St Paul\'s Cathedral on 25 April 1877.' },
          { h3: '20 May 1880', p: 'Foundation stones were laid by the Duke of Cornwall, later King Edward VII. The old church of St Mary held its final services on 3 October 1880, and its south aisle was kept inside the new building.' },
          { h3: '1905 and 1910', p: 'The central tower was finished by 1905, and the building was completed with the opening of the two western towers in 1910.' }
        ] },
        { kind: 'p', text: 'The cathedral names John Loughborough Pearson as its architect and records that he died in 1897, before the work was finished, and that his son Frank Loughborough Pearson saw it through. It also displays a copy of the original Nine Lessons and Carols service sheet from 1880. We have no connection with Truro Cathedral, and the dates and descriptions here are its own.' },
        { kind: 'spec', title: 'On the National Heritage List', p: 'Historic England lists Truro Cathedral (list entry 1205377) at Grade I, with a list date of 29 December 1950.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Where do the Tre- names stop?',
      intro: 'The Kolmogorov-Smirnov test compares two whole distributions, not just their averages. Line up each group from west to east, draw the running share of names reached so far, and measure the widest vertical gap between the two curves. That gap is called D.',
      body: [
        { kind: 'table', caption: 'Settlement names in Cornwall, Devon and Torbay, OS Open Names: where each prefix is found, and how different its west-to-east spread is from all other names', head: ['Names beginning', 'Count', 'In Cornwall', 'Outside Cornwall', 'Gap D', 'Could chance explain it?'], rows: [
          ['Tre-', '183', '182', '1', '0.557', 'No'],
          ['Pen-', '39', '34', '5', '0.463', 'No'],
          ['Pol-', '16', '12', '4', '0.297', 'Yes, p of 0.097']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Collect the names', p: 'Read every city, town, village, hamlet and suburb that Ordnance Survey names in Cornwall, Devon and Torbay: 2,385 places, each with its easting, the distance east on the national grid.' },
          { h3: '2. Match with care', p: 'Count a prefix only when a lower-case letter follows, then read the matches. Devon\'s Pen- names include Pennsylvania and its only Tre- name is Trentishoe, neither of them Cornish.' },
          { h3: '3. Compare the curves', p: 'Draw the running share of Tre- names from west to east beside the running share of all other names. At the widest point the curves are 0.557 apart; none of 2,000 random groups of 183 names reached a gap that wide.' }
        ] },
        { kind: 'callout', h3: 'The test inside Cornwall', p: 'If Tre- names were simply more common the further west you go, they should sit west of other names inside Cornwall too. They do not. Comparing the 182 Cornish Tre- names with the other 939 Cornish names gives a gap of only 0.096 and a p-value of 0.113, and the middle Tre- name lies at almost the same easting as the middle of the rest. Across Cornwall, the share of names beginning Tre- rises and falls, from 7.8% to 24.3% between 20 kilometre bands, with no steady trend. The line that matters is the county boundary: 16.2% of Cornish settlement names begin Tre-, against 1 of the 1,228 in Devon.' },
        { kind: 'p', text: 'Pol- is the honest exception. With only 16 names, and 4 of them near Exeter in Devon (Polsloe, Polsloe Bridge, Polsloe Priory and Poltimore), its gap of 0.297 could arise by chance about one time in ten. A small group needs a large difference before a test can see it, and saying so is part of the result.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Comparing distributions',
      h2: 'Five checks before comparing two groups',
      intro: 'Learned on Cornish place names, then used for delivery times, exam marks, website load times, prices and any two groups whose whole spread matters, not just their average.',
      body: [
        { kind: 'table', caption: 'Decisions behind the place-name test', head: ['Question', 'For the Tre- names', 'What goes wrong if you skip it'], rows: [
          ['Does the rule catch the right words?', 'Every match outside Cornwall read by eye', 'Pennsylvania counted as a Cornish name'],
          ['Are you comparing whole spreads?', 'Kolmogorov-Smirnov on every easting', 'Two groups with the same average treated as alike'],
          ['Could chance do it?', 'P-values and 2,000 random groups', 'A gap in a small group read as real'],
          ['Is the group big enough?', 'Pol- reported as inconclusive with 16 names', 'A weak result presented as strong'],
          ['What is the real boundary?', 'Tested again inside Cornwall alone', 'A county line mistaken for a steady west-to-east trend']
        ] },
        { kind: 'p', text: 'The last row is where the project earns its keep. The first test shows that Tre- names are found further west than other names in the two counties, but it cannot say why. Repeating the test inside Cornwall separates two explanations: a gradual rise towards the west, which the data do not show, and a sharp change at the county boundary, which they do.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Sorting a pile of place-name cards by their first letters and building a chart of which beginnings are most common.' },
          { h3: 'Teenagers', p: 'String matching, empirical cumulative distributions and the Kolmogorov-Smirnov test in Python, on 2,385 real place names.' },
          { h3: 'Adults', p: 'Comparing two groups by their whole spread, cleaning text matches first, and saying plainly when a sample is too small.' }
        ] },
        { kind: 'p', text: 'We have no connection with Ordnance Survey, Truro Cathedral, Historic England or Cornwall Council. The place names and census tables are published openly; the prefix matching, distributions and tests on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting name cards to comparing distributions',
    intro: 'Ages are a starting point only; the free lesson tells us the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Letters and lists', p: 'Sorting words by how they begin and counting each group in block code.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Text in Python', p: 'Strings, lists and simple charts in Python, with a program that counts names by their first letters.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Whole distributions', p: 'Cumulative distributions, the Kolmogorov-Smirnov test and permutation checks on real Ordnance Survey data.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Groups at work', p: 'Comparing customers, sites or time periods by their full spread, with careful matching and honest sample sizes.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can sort millions of words at once. Why should a Truro teenager check a list by eye?',
    intro: 'Because a rule that looks right can still count Pennsylvania as a Cornish village, and only someone who reads the matches will notice.',
    p1: 'AI tools match patterns at enormous speed, and they make the same mistake as a careless prefix rule: they find what looks like the pattern, not what is. A learner who has read every Devon match and found Trentishoe and Pennsylvania learns to check a sample of any automatic result before trusting it.',
    p2: 'The second test, inside Cornwall, teaches something AI will not volunteer: a strong result can have more than one explanation, and the right follow-up test can tell them apart. Knowing which question to ask next is the part of the work that stays with people.',
    closer: 'So a Truro teenager should keep learning to code in 2026, in a city ringed by Tre- and Pen- names: AI can do the counting, but it takes a person to see what the count really means.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kenwyn, Malpas or Threemilestone, and one online class',
    intro: 'Truro has villages on every side, from Idless to Playing Place. Online, each of them is just as near to the lesson as the cathedral close.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Idless and another in Playing Place can be in the same class without anyone driving into the city.' },
      { h3: 'School years in England', p: 'Our levels are set out to match English school years, from primary to GCSE and A level, and every lesson is delivered in English.' },
      { h3: 'What happens first', p: 'The free session has the learner make something real, and closes with the teacher\'s suggestion of level, course and a weekly time. Card details are never requested.' },
      { h3: 'One level per class', p: 'Classes of five to ten learners at the same stage, from Truro, elsewhere in the UK and overseas, so there are workable times at every level.' },
      { h3: 'Twice a week', p: 'Two set lessons weekly, around eight a month, with holidays and exam weeks planned together with the teacher.' },
      { h3: 'Evenings in India', p: 'Our teachers live on Indian time, which never changes for summer, so an early-evening class in Cornwall falls late in their evening: half past nine there for a 5 pm start here in summer, half past ten once the clocks go back.' }
    ],
    spec: { title: 'Across Cornwall', p: 'Learners in Falmouth, Newquay, St Austell or Penzance join exactly the same classes, since everything is taught online and classes are formed by level.' }
  },

  fees: {
    h2: 'Truro lesson fees',
    intro: 'Nothing to pay for the first lesson, then one fee a month.',
    first: 'A full lesson with no charge, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons each month, in a class of five to ten learners at one stage.',
    private: 'Around eight live lessons each month, with a teacher devoted to your learner alone.',
    closer: 'Families in Tresillian or Shortlanesend pay in US dollars, as every family outside India does, and no pound prices appear anywhere on our site. The first bill comes only after the free lesson and only once a course and a regular slot are settled; the pricing page answers questions on breaks, lessons a learner cannot attend and moving between group and private teaching.'
  },

  reviewsH2: 'Six families\' Google reviews in their own words',

  book: {
    h2: 'Book a free lesson for a Truro learner',
    intro: 'The first lesson suits the learner: a first-letters sorting game for a young child, a short Python program that counts words by how they begin for a beginner, or 2,385 Ordnance Survey place names and the Kolmogorov-Smirnov test for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Truro learner.'
  },

  faq: {
    h2: 'Truro coding class questions',
    intro: 'The questions Truro families put to us most.',
    items: [
      { q: 'How many people live in Truro?', a: 'Census 2021 counted 8,458 usual residents in Truro East, 10,739 in Truro West and 6,968 in Truro South and Central, the three middle-layer areas the House of Commons Library names after the city. Cornwall as a whole had 570,305.' },
      { q: 'How does Cornwall compare with England?', a: 'Cornwall is more thinly settled, at 160.9 residents per square kilometre against 433.5, and has more residents in their early seventies: 7.1% were aged 70 to 74 in 2021, against 5.0% in England.' },
      { q: 'What is the Kolmogorov-Smirnov test?', a: 'A test that compares two groups by their whole spread. It lines each group up, draws the running share of values reached so far, and measures the widest gap between the two curves. A large gap in large groups is very unlikely to happen by chance.' },
      { q: 'Are Tre- place names really Cornish?', a: 'In Ordnance Survey\'s names for Cornwall, Devon and Torbay, 182 of the 183 settlements beginning Tre- are in Cornwall; the one in Devon is Trentishoe. Inside Cornwall, though, Tre- names are no further west than other names, so the sharp change is at the county boundary.' },
      { q: 'Where does the place-name data come from?', a: 'From OS Open Names, Ordnance Survey\'s free gazetteer of Great Britain, which gives each named place a type, a county and a national grid position. We are not connected with Ordnance Survey.' },
      { q: 'When was Truro Cathedral built?', a: 'The cathedral records that its foundation stones were laid on 20 May 1880, that the central tower was finished by 1905 and that the building was completed with the opening of the western towers in 1910. We are not connected with the cathedral.' },
      { q: 'When are Truro lessons?', a: 'Truro families usually choose a slot after school, on a weekday evening or on a weekend morning, and we agree it in the free lesson. Since our teachers are in India, a Cornish evening is their late night, a gap of four and a half hours while British Summer Time runs and five and a half hours outside it.' },
      { q: 'Is there a Truro centre?', a: 'No. There is no centre in Truro or anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are Truro lessons?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one lessons on the same timetable cost USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or location, with five to ten learners at the same stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The South West and beyond',
    html: 'Up the peninsula, the <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth page</a> maps where listed buildings crowd together with kernel density, and <a class="cg-inline-link" href="/best-coding-class-in-exeter">Exeter</a> puts a river network in order with a topological sort. <a class="cg-inline-link" href="/best-coding-class-in-wells">Wells</a> tests an average month against real full moons. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> shows how our levels fit English schooling, and every other city is reached from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Truro and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-plymouth', label: 'Plymouth' },
    { href: '/best-coding-class-in-exeter', label: 'Exeter' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-tru .cg-hero-grid { align-items: center; gap: clamp(0.95rem, 3vw, 2.4rem); }
.cg-root.cg-tru .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-tru .cg-capsule { border-left: 2px solid var(--cg-accent); border-top: 2px solid var(--cg-accent); padding: 0.85rem 0 0 0.9rem; }
.cg-root.cg-tru .cg-eyebrow { letter-spacing: 0.16em; font-weight: 690; text-transform: uppercase; }
.cg-root.cg-tru .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-tru .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.05rem); }
.cg-root.cg-tru .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-tru .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-tru .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-tru .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Census 2021 via Nomis. Cornwall E06000052: TS001 570,305 usual residents, 562,448 in households, 7,857 communal; TS068 94,591 students of 544,773 aged 5 and over (17.4 percent); TS006 160.9 per square kilometre; TS007A 40,401 aged 70 to 74 of 570,302 (7.1 percent; England 5.0). Truro East E02003908 8,458, 1,576 of 8,070 (19.5 percent), 2,364.8; Truro West E02003909 10,739, 417 communal, 1,954 of 10,203 (19.2 percent), 950.2; Truro South and Central E02003910 6,968, 1,109 of 6,650 (16.7 percent), 2,108.6, 277 aged 85 and over of 6,967 (4.0 percent). England 20.4 percent, 433.5. Truro Cathedral: diocese 1876; Benson 25 April 1877; foundation stones 20 May 1880; St Mary\'s last services 3 October 1880; central tower by 1905; completed 1910; Pearson died 1897; Nine Lessons and Carols sheet 1880. NHLE 1205377, Grade I, 29 December 1950.',
    localProject: 'Where do the Tre- names stop? OS Open Names settlements in Cornwall, Devon and Torbay (2,385). Tre- 183 (182 Cornwall, Trentishoe in Devon), Pen- 39 (34, 5 incl. Pennsylvania), Pol- 16 (12, 4 around Polsloe and Poltimore). KS on eastings vs all other names: Tre- D 0.557, permutation 0 of 2,000; Pen- D 0.463; Pol- D 0.297, p 0.097. Inside Cornwall: Tre- vs other names D 0.096, p 0.113; Tre- share 16.2 percent, 7.8 to 24.3 percent by 20 km band. Lesson family: Kolmogorov-Smirnov two-sample test.',
    requiredMentions: [
      '570,305',
      '10,739',
      '2,364.8',
      'Kolmogorov-Smirnov',
      'Trentishoe',
      'Polsloe',
      'Treliske',
      'Tresillian',
      'Penelewey',
      'Trelissick',
      'Kenwyn',
      'Threemilestone'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001: Cornwall 570,305; Truro East 8,458; Truro West 10,739; Truro South and Central 6,968.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E02003908,E02003909,E02003910,E06000052' },
      { claim: 'Nomis, Census 2021 TS007A: age bands for the three Truro areas and Cornwall.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E02003908,E02003909,E02003910,E06000052' },
      { claim: 'Nomis, Census 2021 TS068: students among usual residents aged 5 and over.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E02003908,E02003909,E02003910,E06000052,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E02003908,E02003909,E02003910,E06000052,E92000001' },
      { claim: 'House of Commons Library, MSOA Names: Truro East, Truro West, Truro South and Central.', url: 'https://houseofcommonslibrary.github.io/msoanames/' },
      { claim: 'Ordnance Survey, OS Open Names: settlement names, types, counties and grid positions for Cornwall, Devon and Torbay.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' },
      { claim: 'Truro Cathedral, Cathedral Story: diocese 1876; Benson 1877; foundation stones 20 May 1880; central tower by 1905; completed 1910.', url: 'https://www.trurocathedral.org.uk/history/cathedral-story' },
      { claim: 'Truro Cathedral, Building the Cathedral: last services in St Mary\'s 3 October 1880; south aisle kept; Pearson died 1897; completed 1910.', url: 'https://www.trurocathedral.org.uk/history/cathedral-story/building-the-cathedral' },
      { claim: 'Truro Cathedral, Bishop Benson: consecrated 25 April 1877; Nine Lessons and Carols service sheet from 1880.', url: 'https://www.trurocathedral.org.uk/history/cathedral-story/bishop-benson' },
      { claim: 'Historic England, National Heritage List for England: Truro Cathedral 1205377.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1205377' }
    ],
    rejectedClaims: [
      'The traditional rhyme about Tre, Pol and Pen, and any claim about the Cornish language or the meaning of the prefixes: not taken from a fetched source.',
      'That the county boundary follows the River Tamar: not used, since no fetched source was read for it; the page speaks of the county boundary.',
      'The length and dates of the pause in building the cathedral: the cathedral\'s two history pages give different accounts (1887 to 1898, and a restart eleven years after 1898), so the pause is left out.',
      'That Tre- names grow commoner towards the west of Cornwall: the within-Cornwall test does not support it, and the page says so.',
      'Plymouth and the Isles of Scilly: not in the Open Names extract used, so the counts cover Cornwall, Devon and Torbay only.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Ordnance Survey, Truro Cathedral, Historic England or Cornwall Council.'
    ]
  }
};
