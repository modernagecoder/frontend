'use strict';
// Newry (cg- city page, UK cluster Phase 4, Northern Ireland). Spine: what is unusual about Newry's industrial heritage?
// Fisher's exact test on record types in the Department for Communities Historic Environment Division's Industrial
// Heritage Record (OpenDataNI GeoJSON ihr_10082026, EPSG:29902 Irish Grid; 14,778 located records; read 23 September
// 2026; scratchpad nwy/fx2.py). Near = within 5 km of Newry rail station (Translink station coordinates 306933E
// 327830N): 281 records; rest of Northern Ireland 14,497. Most common near types: Bridge 38, Millrace 13, Dam 13, Level
// Crossing 11, Mill Buildings 11, Flax Mill 11, Tannery 7; locations include Newry Canal (55 records) and GNR lines.
// Tests (near vs rest): canal, lock and quay types 33 of 281 (11.7 percent) vs 222 of 14,497 (1.5), expected near 4.8,
// Fisher p 2.1e-18 (chi-squared without correction 9.4e-39); tannery 11 (3.9) vs 27 (0.2), expected 0.7, Fisher p
// 7.4e-11, chi-squared 2.3e-34 with a smallest expected count of 0.72; flax 23 (8.2) vs 1,827 (12.6), Fisher 0.028;
// corn 15 (5.3) vs 1,399 (9.7), 0.0135; milepost 4 (1.4) vs 621 (4.3), 0.0153; bridge 50 (17.8) vs 2,380 (16.4), 0.52.
// Six tests: at a threshold of 0.05 divided by 6 (0.0083), only the canal and tannery results remain.
// Lesson family: Fisher's exact test (hypergeometric), small expected counts, chi-squared failure, multiple testing.
// Screened 23 September 2026: Fisher's exact 0 hits in src/pages and content/uk.
// Heritage from HED Listed Buildings NI (GeoJSON of 10 September 2026): HB16/28/036 Cathedral of St Patrick and St Colman,
// Hill Street, Grade A, 1820-1839; HB16/28/001 A St Patrick's Church (Church of Ireland), Church Street, Grade B+, Pre
// 1600; HB16/30/001 Parish Church of St Mary (Church of Ireland), John Mitchel Place, Grade A, 1800-1819; HB16/24/004
// Craigmore Viaduct, Bessbrook, Grade A, 1840-1859; HB16/23/010 Derrymore House, Bessbrook, Grade A, 1760-1779; HB16/28/018
// B Town Hall, Bank Parade, Grade B1, 1880-1899.
// Census: NISRA Census 2021 MS-A01 and MS-A02: settlement NEWRY 28,530; DEAs Newry 27,913, Crotlieve 28,668, Slieve
// Gullion 30,744, The Mournes 30,203; LGD Newry, Mourne and Down 182,074; Northern Ireland 1,903,175. Newry settlement age
// shares: 0-4 6.6, 30-34 7.4, 90+ 0.6 percent; Northern Ireland 6.0, 6.6, 0.7. Places from the HED and IHR records:
// Bessbrook, Camlough, Warrenpoint, Donaghmore, Goraghwood, Craigmore, Derrymore.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'NEWRY', blurb: 'The city on the Newry Canal, with a project that finds what is unusual about its industrial heritage using Fisher\'s exact test.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-newry',
  code: 'nwy',
  accent: '#604124',
  accentRationale: 'Newry: a leather brown, after the tanneries in its industrial heritage record; from the solver (7.48:1 on every paper tint, dE 6.6 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Newry',
    eyebrow: 'Newry, Northern Ireland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Newry, Mourne and Down' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Newry',
  title: 'Best Coding Classes in Newry | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Newry learners aged 6 to 67, from Bessbrook and Camlough to Warrenpoint and Donaghmore. First lesson free.',
  ogDescription: 'Coding and AI lessons for Newry, on a page that runs Fisher\'s exact test on Northern Ireland\'s industrial heritage record to find what sets Newry apart.',
  twitterDescription: 'Newry learners from six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'statistics-probability-maths-course',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Newry Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and heritage data, mathematics and AI taught live online in English to Newry children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Newry',
  capsuleQ: 'What are the best coding classes in Newry?',
  capsule: 'The Newry settlement had 28,530 usual residents at the 2021 census, NISRA records, in the council area of Newry, Mourne and Down. The Historic Environment Division lists the Cathedral of St Patrick and St Colman on Hill Street at Grade A. Newry learners from six to sixty-seven study with teachers in India on live video, either one to one or with a class of five to ten at the same level, at times that suit school and work in Northern Ireland. The opening lesson carries no charge; afterwards it is USD 100 a month for a class place and USD 150 a month for private lessons.',
  lead: 'Northern Ireland keeps a register of its industrial past: 14,778 mills, bridges, dams, locks and other sites with a location, in the Historic Environment Division\'s Industrial Heritage Record. Our Newry project asks what is unusual about the 281 within 5 kilometres of the city\'s railway station. Canal features stand out, as you might guess: 33 locks, lock houses, quays and canal bridges, where an average stretch of the country would have fewer than 5. The surprise is tanneries: 11 near Newry against 27 in the whole of the rest of Northern Ireland. Teenagers test both with Fisher\'s exact test, and learn why the usual shortcut gives absurd answers here.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Newry.',

  picks: {
    eyebrow: 'Course picks for Newry',
    h2: 'Four courses for the canal city',
    intro: 'Every course here opens with a free live lesson, booked without payment details, so start with whichever sounds most like the learner.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to a sorting machine that counts different kinds of buildings.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python with lists and counting, enough to tally a register by type and compare two places.' },
      { course: 'statistics-probability-maths-course', band: 'Ages 14 to 18', note: 'Statistics and probability, including exact tests for small counts and what to do when you run many tests at once.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Data analysis for adults who compare rare events between groups and need a test that stays honest with small numbers.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Newry today',
      h2: 'A city and its surrounding districts',
      intro: 'Figures from NISRA\'s Census 2021: the Newry settlement, the four district electoral areas around it, the Newry, Mourne and Down council area, and Northern Ireland as a whole.',
      body: [
        { kind: 'table', caption: 'Newry in the 2021 census, usual residents (NISRA)', head: ['Place', 'Census geography', 'Usual residents'], rows: [
          ['Newry', 'Settlement', '28,530'],
          ['Newry', 'District electoral area', '27,913'],
          ['Crotlieve', 'District electoral area', '28,668'],
          ['Slieve Gullion', 'District electoral area', '30,744'],
          ['The Mournes', 'District electoral area', '30,203'],
          ['Newry, Mourne and Down', 'Council area', '182,074'],
          ['Northern Ireland', 'Country', '1,903,175']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Under-fives', p: 'In the Newry settlement, 6.6% of residents were under five in 2021; across Northern Ireland the share was 6.0%.' },
          { h3: 'Early thirties', p: 'Adults aged 30 to 34 made up 7.4% of Newry\'s residents, against 6.6% for Northern Ireland, on NISRA\'s published table.' },
          { h3: 'Over ninety', p: 'People aged 90 and over were 0.6% of the settlement, close to Northern Ireland\'s 0.7%.' }
        ] },
        { kind: 'p', text: 'The settlement and the electoral area of the same name are different geographies, so their totals differ; we quote both as NISRA publishes them. Our Newry learners come from the city and the villages around it. On a given evening a Bessbrook seven-year-old could be making a first game, a Year 11 student from Warrenpoint revising for CCEA GCSE Digital Technology and a Camlough adult learning Python for work, each in a class set to their level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Churches, viaduct, canal',
      h2: 'From a church before 1600 to a railway viaduct',
      intro: 'From the Historic Environment Division\'s Listed Buildings Northern Ireland and Industrial Heritage Record datasets, published on OpenDataNI.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Before 1600', p: 'St Patrick\'s Church (Church of Ireland) on Church Street is listed at Grade B+ with a construction date of Pre 1600, the earliest band the listing record uses.' },
          { h3: '1800 to 1839', p: 'The Parish Church of St Mary on John Mitchel Place, from 1800 to 1819, and the Cathedral of St Patrick and St Colman on Hill Street, from 1820 to 1839, are both listed at Grade A.' },
          { h3: '1840 to 1859', p: 'Craigmore Viaduct near Bessbrook is listed at Grade A with a construction date in these years; the heritage record also includes Derrymore House, from 1760 to 1779, at Grade A.' }
        ] },
        { kind: 'p', text: 'The Industrial Heritage Record lists 55 features along the Newry Canal within 5 km of the station, among them lock houses, canal locks, spill weirs and canal bridges, as well as records on the railway lines towards Belfast and Warrenpoint. The Town Hall on Bank Parade is listed at Grade B1, from 1880 to 1899. We have no connection with the Department for Communities, NISRA or Newry, Mourne and Down District Council, and these records are theirs.' },
        { kind: 'spec', title: 'Where the heritage data comes from', p: 'The Department for Communities publishes the Industrial Heritage Record on OpenDataNI as map data in the Irish Grid, 14,778 records with a type and a position. The version used here is dated 10 August 2026.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What is unusual about Newry\'s industrial heritage?',
      intro: 'Fisher\'s exact test takes a two-by-two table, near Newry or not, of one type or not, and works out exactly how likely a split at least this uneven would be if type and place had nothing to do with each other. Unlike the common chi-squared test, it stays accurate when some counts are tiny.',
      body: [
        { kind: 'table', caption: 'Industrial Heritage Record: records within 5 km of Newry station (281) against the rest of Northern Ireland (14,497)', head: ['Type of record', 'Near Newry', 'Rest of Northern Ireland', 'Expected near Newry', 'Fisher\'s exact p-value'], rows: [
          ['Canal, lock or quay', '33 (11.7%)', '222 (1.5%)', '4.8', '2.1 x 10^-18'],
          ['Tannery', '11 (3.9%)', '27 (0.2%)', '0.7', '7.4 x 10^-11'],
          ['Flax mill', '23 (8.2%)', '1,827 (12.6%)', '35.2', '0.028'],
          ['Corn mill', '15 (5.3%)', '1,399 (9.7%)', '26.9', '0.014'],
          ['Milepost', '4 (1.4%)', '621 (4.3%)', '11.9', '0.015'],
          ['Bridge', '50 (17.8%)', '2,380 (16.4%)', '46.2', '0.52']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Draw the circle', p: 'Take every record with a position in the Irish Grid and measure its distance from Newry station. 281 lie within 5 km; 14,497 lie further away.' },
          { h3: '2. Build the tables', p: 'For each type, count how many near and far records are of that type and how many are not, giving a two-by-two table.' },
          { h3: '3. Test exactly', p: 'Fisher\'s test adds up the probabilities of every table as extreme as the real one, using the hypergeometric distribution, with no approximations at all.' }
        ] },
        { kind: 'callout', h3: 'When the shortcut breaks', p: 'For tanneries, only 0.7 would be expected near Newry. The chi-squared test, which relies on expected counts of about five or more, reports a p-value of about 10 to the power minus 34. Fisher\'s exact test gives about 10 to the power minus 11. Both say the result is far from chance, but the chi-squared figure is off by a factor of more than 10 to the power 23, because its approximation does not hold with such small numbers. Knowing when a quick method stops working is half of statistics.' },
        { kind: 'p', text: 'Running six tests at once also raises the chance of a fluke. Dividing the usual 0.05 threshold by six gives 0.0083, and by that standard only the canal and tannery results survive: the lower shares of flax mills, corn mills and mileposts near Newry could be chance. Bridges show no difference at all. The honest summary is that Newry\'s surroundings stand out for canal features and tanneries, and possibly have fewer flax and corn mills than elsewhere, though that needs more evidence.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Rare events',
      h2: 'Five checks before calling something unusual',
      intro: 'Learned on Newry\'s industrial record, then used for rare manufacturing faults, unusual species counts, spelling errors in documents, website errors and any comparison involving small numbers.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Newry heritage study', head: ['Question', 'For the Industrial Heritage Record', 'What goes wrong if you skip it'], rows: [
          ['How is "near" defined?', 'Within 5 km of the station, by grid position', 'A name-based filter that picks canal records by their name'],
          ['Are the counts small?', 'Expected tanneries: 0.7', 'A chi-squared p-value that is wildly wrong'],
          ['How many tests were run?', 'Six, with the threshold divided by six', 'A chance result reported as a discovery'],
          ['Does a big effect need a reason?', 'Tanneries noted, no cause claimed', 'A story invented to fit a number'],
          ['Is the register complete?', 'Only what the record contains is counted', 'Gaps in recording read as gaps in history']
        ] },
        { kind: 'p', text: 'The first row matters more than it looks. A first look at the data picked records by the word Newry in their location, which meant every Newry Canal record was counted, canal features were bound to look common, and the test was circular. Using distance from a fixed point instead lets the canal compete fairly with every other kind of feature.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Drawing coloured counters from two bags and deciding whether one bag really has more red ones.' },
          { h3: 'Teenagers', p: 'Counting, two-by-two tables, Fisher\'s exact test and multiple-testing corrections in Python on real heritage data.' },
          { h3: 'Adults', p: 'Comparing rare events between groups at work, with exact tests and an honest account of how many comparisons were made.' }
        ] },
        { kind: 'p', text: 'We have no connection with the Department for Communities, Translink, NISRA or Newry, Mourne and Down District Council. The heritage records, station coordinates and census tables are published openly; the distances, tables and tests on this page are our own analysis.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counters in a bag to Fisher\'s exact test',
    intro: 'Treat the ages as a rough guide; the free lesson shows where to start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting and comparing', p: 'Sorting and counting objects in block code, and asking whether one pile really has more of something.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Tallies in Python', p: 'Counting categories and building simple tables in Python, with percentages that compare two groups.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Exact tests', p: 'Two-by-two tables, Fisher\'s exact test, chi-squared limits and multiple testing on real heritage records.', courses: ['statistics-probability-maths-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rare events at work', p: 'Comparing uncommon outcomes between groups with methods that stay honest when numbers are small.', courses: ['data-analysis-mastery-course-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI will run a test for you. Why should a Newry teenager know which test to run?',
    intro: 'Because the quick chi-squared test and the exact test can disagree by more than twenty powers of ten, and nothing in the output warns you.',
    p1: 'Ask an AI tool to compare counts between two places and it will often reach for the most common test and report its p-value without comment. With 0.7 tanneries expected, that p-value is badly wrong. A learner who has seen both results side by side knows to check the expected counts before trusting any test.',
    p2: 'The project also practises the discipline of counting your own tests. Six comparisons make a chance result much more likely, and AI summaries rarely mention how many were tried. Asking that question is what separates a finding from a fluke.',
    closer: 'So a Newry teenager should keep learning to code in 2026, beside a canal whose locks fill the heritage record: AI can run the numbers, but people still have to choose the right test and say how many they ran.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Bessbrook, Warrenpoint or Donaghmore, all in one class',
    intro: 'Newry learners live in the city and in the towns and villages across a large council area. Online, each of them is the same distance from the lesson.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Camlough and another in Goraghwood can join the same class without a long drive in the dark.' },
      { h3: 'Northern Ireland stages', p: 'Learners are placed from primary through the transfer test years and CCEA GCSEs to A level in Year 14, with every lesson given in English.' },
      { h3: 'What the free lesson is', p: 'A real coding session with a teacher, after which you get a recommended level, course and weekly time. We take no card details.' },
      { h3: 'Classes of one level', p: 'Five to ten learners at a single stage, from Newry, the rest of the UK and abroad, keeping good times available for everyone.' },
      { h3: 'Two a week', p: 'Two lessons on fixed days each week, around eight a month, with holidays and exams arranged with the teacher.' },
      { h3: 'The time difference', p: 'Our teachers keep Indian time all year, so a class starting at five in the afternoon in Newry is at half past nine in the evening for them in summer and half past ten in winter.' }
    ],
    spec: { title: 'Across Newry, Mourne and Down', p: 'Learners in Kilkeel, Downpatrick, Newcastle or Rostrevor join exactly the same classes, since every lesson is online and classes are grouped by level.' }
  },

  fees: {
    h2: 'Newry lesson fees',
    intro: 'Your first lesson is free; after that there is one monthly fee.',
    first: 'A full lesson without charge, ending with a suggested level, course and weekly time.',
    group: 'Roughly eight live lessons a month, in a class of five to ten learners at the same stage.',
    private: 'Roughly eight live lessons a month, with the teacher\'s full attention on your learner.',
    closer: 'Families in Derrymore or Craigmore are billed in US dollars, as are all families outside India, and the site never displays pound prices. You pay nothing until the free lesson is done and a course and weekly slot are fixed; the pricing page sets out how pauses, missed lessons and changes between group and private teaching are handled.'
  },

  reviewsH2: 'Six family reviews from Google, left exactly as written',

  book: {
    h2: 'Book a free lesson for a Newry learner',
    intro: 'The first lesson depends on who is learning: a counters-in-a-bag game for a young child, a short Python program that tallies a list by type for a beginner, or Northern Ireland\'s Industrial Heritage Record and Fisher\'s exact test for a teenager ready for real statistics.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Newry learner.'
  },

  faq: {
    h2: 'Newry coding class questions',
    intro: 'The questions Newry families ask us most often.',
    items: [
      { q: 'How many people live in Newry?', a: 'NISRA\'s Census 2021 counted 28,530 usual residents in the Newry settlement and 27,913 in the Newry district electoral area, which has different boundaries. The council area of Newry, Mourne and Down had 182,074.' },
      { q: 'How does Newry compare with Northern Ireland?', a: 'It has a slightly younger profile on NISRA\'s figures: 6.6% of residents were under five in 2021, against 6.0% across Northern Ireland, and 7.4% were aged 30 to 34, against 6.6%.' },
      { q: 'What is Fisher\'s exact test?', a: 'A test for a two-by-two table of counts that works out exactly how likely a split at least this uneven would be by chance. It stays accurate when counts are small, where the more common chi-squared test does not.' },
      { q: 'What stands out in Newry\'s industrial heritage?', a: 'Within 5 km of Newry station, canal features and tanneries appear far more often than in the rest of Northern Ireland: 33 canal-related records against about 5 expected, and 11 tanneries against less than 1 expected.' },
      { q: 'Where does the heritage data come from?', a: 'From the Industrial Heritage Record and the Listed Buildings Northern Ireland dataset of the Department for Communities\' Historic Environment Division, published on OpenDataNI. We are not connected with the Department for Communities.' },
      { q: 'Which Newry buildings are listed at Grade A?', a: 'The Historic Environment Division lists the Cathedral of St Patrick and St Colman on Hill Street and the Parish Church of St Mary on John Mitchel Place at Grade A, and Craigmore Viaduct near Bessbrook too.' },
      { q: 'When are Newry lessons?', a: 'Most Newry families choose a time after school, on a weekday evening or at the weekend, confirmed in the free lesson. Our teachers are in India, four and a half hours ahead of Northern Ireland in summer and five and a half hours ahead in winter.' },
      { q: 'Is there a centre in Newry?', a: 'No. We have no Newry centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Newry lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Northern Ireland and the UK',
    h2: 'Northern Ireland and beyond',
    html: 'To the north, the <a class="cg-inline-link" href="/best-coding-class-in-armagh">Armagh page</a> counts how far a star catalogue is out of order, and <a class="cg-inline-link" href="/best-coding-class-in-lisburn">Lisburn</a> asks whether the fire of 1707 left a gap in its listed buildings. Revision help for CCEA exams is on our pages for <a class="cg-inline-link" href="/ccea-gcse-digital-technology-programming-help">GCSE Digital Technology programming</a> and <a class="cg-inline-link" href="/ccea-a-level-software-systems-development-help">A level Software Systems Development</a>. For how our levels relate to schooling in Northern Ireland, read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland guide</a>; every other city is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Newry and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-armagh', label: 'Armagh' },
    { href: '/best-coding-class-in-lisburn', label: 'Lisburn' },
    { href: '/coding-and-ai-classes-in-northern-ireland', label: 'Northern Ireland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-nwy .cg-hero-grid { align-items: end; gap: clamp(1.05rem, 3.2vw, 2.55rem); }
.cg-root.cg-nwy .cg-hero h1 { font-weight: 740; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-nwy .cg-capsule { border-top: 2px solid var(--cg-accent); border-left: 2px solid var(--cg-accent); padding: 0.9rem 0 0 0.95rem; }
.cg-root.cg-nwy .cg-eyebrow { letter-spacing: 0.16em; font-weight: 680; text-transform: uppercase; }
.cg-root.cg-nwy .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-nwy .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-nwy .cg-table th { letter-spacing: 0.023em; }
.cg-root.cg-nwy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nwy .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-nwy .cg-callout { border-left-width: 6px; border-radius: 1px; }
`,

  dossier: {
    curriculumAuthority: 'NISRA Census 2021 MS-A01: settlement NEWRY 28,530; DEAs Newry 27,913, Crotlieve 28,668, Slieve Gullion 30,744, The Mournes 30,203; LGD Newry, Mourne and Down 182,074; Northern Ireland 1,903,175. MS-A02 shares: Newry 0-4 6.6, 30-34 7.4, 90+ 0.6 percent; Northern Ireland 6.0, 6.6, 0.7. HED Listed Buildings NI: Cathedral of St Patrick and St Colman (A, 1820-1839); St Patrick\'s Church (B+, Pre 1600); Parish Church of St Mary (A, 1800-1819); Craigmore Viaduct (A, 1840-1859); Derrymore House (A, 1760-1779); Town Hall, Bank Parade (B1, 1880-1899).',
    localProject: 'What is unusual about Newry\'s industrial heritage? HED Industrial Heritage Record (14,778 located records, 10 August 2026). Within 5 km of Newry station 281, rest 14,497. Canal, lock or quay 33 vs 222, expected 4.8, Fisher p 2.1e-18; tannery 11 vs 27, expected 0.7, Fisher 7.4e-11, chi-squared 2.3e-34; flax 0.028; corn 0.014; milepost 0.015; bridge 0.52. Six tests, threshold 0.0083: canal and tannery remain. Lesson family: Fisher\'s exact test.',
    requiredMentions: [
      '28,530',
      'Fisher\'s exact',
      'Industrial Heritage Record',
      'Craigmore',
      'St Colman',
      'Bessbrook',
      'Camlough',
      'Warrenpoint',
      'Donaghmore',
      'Goraghwood',
      'Derrymore',
      'Slieve Gullion'
    ],
    sources: [
      { claim: 'NISRA, Census 2021 MS-A01 usual resident population: settlement, DEA, LGD and Northern Ireland tables.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a01.xlsx' },
      { claim: 'NISRA, Census 2021 MS-A02 usual residents by age: Newry and Northern Ireland.', url: 'https://www.nisra.gov.uk/system/files/statistics/census-2021-ms-a02.xlsx' },
      { claim: 'OpenDataNI, Industrial Heritage Record (Department for Communities, Historic Environment Division), GeoJSON of 10 August 2026.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/industrial-heritage-record' },
      { claim: 'OpenDataNI, Listed Buildings Northern Ireland (Department for Communities, Historic Environment Division), GeoJSON of 10 September 2026.', url: 'https://www.opendatani.gov.uk/@department-for-communities-historic-environment-division/listed-buildings-northern-ireland' },
      { claim: 'OpenDataNI, Translink rail stations: coordinates of Newry station.', url: 'https://www.opendatani.gov.uk/@translink/northern-ireland-railways-stations' }
    ],
    rejectedClaims: [
      'Why there were tanneries near Newry, or any history of the Newry Canal (such as claims about its age or rank): not taken from a fetched source, so no cause or history is given.',
      'That flax and corn mills are rarer near Newry: the p-values do not survive a correction for six tests, so the page calls this unconfirmed.',
      'Selecting records by the word Newry in their location: rejected as circular, since every Newry Canal record would be counted.',
      'Adding the settlement and district electoral area totals, or any areas together: NISRA figures are quoted as published.',
      'Nationality, ethnicity, religion, birthplace, national identity and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Communities, Translink, NISRA or Newry, Mourne and Down District Council.'
    ]
  }
};
