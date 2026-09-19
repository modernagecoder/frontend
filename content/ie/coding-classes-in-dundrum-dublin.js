'use strict';
// Dundrum, Dublin 14 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: Met Eireann closed station "Dublin
// (Dundrum)" (dly8023: 61 m, 53.289 N, 6.250 W, December 1975 to November 1995) via
// data.gov.ie; Met Eireann exceptional weather events: August 1986 (Hurricane Charley)
// and June 1993 scanned bulletins, read as page images; Airfield Estate; Holy Cross
// School; TII Luas stops list; DLR development plan boundary data. Spine: return periods
// from annual maxima and how much one storm moves them. 19 complete years 1976-1994;
// largest day 86.3 mm on 25 August 1986, second 70.2 mm on 11 June 1993. Gumbel by
// moments: mean 38.4, sd 16.1, 100-year 88.9 mm; without 1986, 71.7 mm; first decade
// 61.3, second decade 110.8. Charley's own return period: 82 years with it in the fit,
// 509 without. June 1993: 23 and 85. All 19 maxima flagged satisfactory. Scratchpad
// dist/rp.js. A data.gov.ie search for Dundrum returns five Met stations, four in
// Co Tipperary: noted, not the lesson (name matching is Longford's and Rush's family).
// The DLR page owns Dundrum Library (D14 VP97) and the shopping-complex description.

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'DUNDRUM', blurb: 'Twenty years of rain at a Dundrum gauge, and a storm that changes how rare it looks depending on whether it is counted. A page on return periods.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-dundrum-dublin',
  code: 'ddr',
  accent: '#151B47',
  accentRationale: 'Dundrum: a storm-sky navy from the widened solver search, the most distant colour left and apart from the Sandyford green and the DLR blue',
  pageType: 'district',
  place: {
    name: 'Dundrum',
    eyebrow: 'Dundrum, Dublin 14',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dun Laoghaire-Rathdown' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'coding-classes-in-dun-laoghaire-rathdown', name: 'Dún Laoghaire-Rathdown' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dún Laoghaire-Rathdown', href: '/coding-classes-in-dun-laoghaire-rathdown' },
    { label: 'Sandyford', href: '/coding-classes-in-sandyford-dublin' }
  ],
  routeLabel: 'Dundrum, Dublin 14, Ireland',
  title: 'Coding Classes in Dundrum, Dublin 14 | Modern Age Coders',
  description: 'Coding, Python, AI and data classes for Dundrum learners aged 6 to 67, taught live online in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Dundrum, with a data project on a local rain gauge, Hurricane Charley and how rare a storm really is.',
  twitterDescription: 'Live online coding, Python and AI for Dundrum, Dublin 14, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Dundrum',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Dundrum, Dublin 14, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Dundrum',
  capsuleQ: 'What are the best coding classes in Dundrum?',
  capsule: 'Dundrum learners are taught by a live teacher over video, either with a few others working at the same level or on a one-to-one basis, two times in a typical week, and learners of any age between six and sixty-seven can take part. There is nothing to travel to. A first lesson is free of charge; then a group place costs USD 100 a month and one-to-one lessons cost USD 150 a month.',
  lead: 'Met Éireann ran a rain gauge in Dundrum from December 1975 to November 1995, and on 25 August 1986 it caught 86.3 millimetres in a single day, the day an offshoot of Hurricane Charley reached Ireland. People ask of storms like that how often they come: once in 50 years, once in 100? The honest answer depends on the data, and here it depends on the storm itself. Fit the standard curve for yearly maximum rainfall to the gauge\'s 19 complete years and Charley looks like a 1-in-82-year day. Leave 1986 out and the same method calls it 1-in-509. This page shows a learner how return periods are estimated, and why twenty years of records cannot settle a hundred-year question.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Dundrum.',

  picks: {
    eyebrow: 'Courses for Dundrum',
    h2: 'Starting courses for Dundrum learners',
    intro: 'Each course suits an age band; the free first lesson with its teacher confirms it, or finds a better starting point.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and records: a game that remembers the highest score and asks how often it gets beaten.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'Python with lists of yearly values, sorting them and finding the biggest, the second biggest and the rest.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Weather records in Python: yearly maxima, ranking, fitted curves and testing how stable they are.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults planning for rare events at work, from outages to peak demand, who need to know what the data can support.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How rare was Hurricane Charley? It depends on whether Charley is counted',
      intro: 'The wettest day of each complete year, 1976 to 1994, at Met Éireann\'s closed Dublin (Dundrum) gauge, fitted with the Gumbel curve used for yearly maxima. Rainfall in millimetres; a return period of 100 years means a 1 percent chance in any year.',
      body: [
        { kind: 'table', caption: 'Dublin (Dundrum) gauge, estimated from 19 yearly maxima', head: ['Estimate', 'All 19 years', 'Without 1986'], rows: [
          ['100-year daily rainfall', '88.9 mm', '71.7 mm'],
          ['Return period of 86.3 mm (1986)', '82 years', '509 years'],
          ['Return period of 70.2 mm (1993)', '23 years', '85 years']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The two big days', p: 'The gauge\'s wettest day was 86.3 mm on 25 August 1986; Met Éireann\'s bulletin that month reads "Offshoot of Hurricane Charley hits Ireland on 25th". Next came 70.2 mm on 11 June 1993, which Met Éireann\'s notes on that month call "record rainfall on 11th" in parts of the Dublin and Kildare area.' },
          { h3: 'One storm, one estimate', p: 'With 1986 included, the fitted 100-year day is 88.9 mm and Charley sits just inside it. Without 1986 the 100-year day drops to 71.7 mm and Charley becomes a 1-in-509-year event. The storm is part of the evidence used to judge how unusual the storm was.' },
          { h3: 'Two decades, two answers', p: 'Fit the first ten years alone and the 100-year day is 61.3 mm; fit the last nine, which contain both big storms, and it is 110.8 mm. Same gauge, same method, and a gap of almost 50 mm between the answers.' }
        ] },
        { kind: 'callout', h3: 'A return period is an estimate with the data\'s fingerprints on it', p: 'The simplest estimate ranks the yearly maxima and gives the largest a return period of the number of years plus one, which here is 20 years. No amount of ranking can say more about the far tail, so a curve is fitted and stretched beyond the data. That stretch is where the uncertainty lives. With 19 years, the 100-year estimate moves by tens of millimetres depending on which years happen to be included. An honest report gives the estimate, says how many years of data sit behind it, and shows how much it changes when one year is left out.' },
        { kind: 'p', text: 'The learner\'s program reads the gauge\'s daily file, checks that a year is complete before using it (1975 and 1995 are partial and left out), and picks each year\'s wettest day. It then sorts the 19 values, gives each a simple return period from its rank, and fits the Gumbel curve from their average of 38.4 mm and spread of 16.1 mm. The same few lines run again with one year removed at a time, and again on each decade separately. The output is not one number but a small table showing how far the numbers move. Every one of the 19 yearly maxima carries Met Éireann\'s satisfactory code, so nothing in the table rests on an estimated value.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Which day is the 25th?', p: 'Met Éireann\'s daily rainfall runs from 09:00 to 09:00 UTC, so the value dated 25 August covers the night of the 25th into the 26th. The bulletin\'s photograph of the Dodder at Ballsbridge is captioned the night of August 25th and 26th, which fits.' },
          { h3: 'Worst in 100 years?', p: 'The 1986 bulletin also called it the "Worst flooding in Dublin for 100 years". That is a statement about floods across the city, not a return period for this gauge, and the two should not be confused.' },
          { h3: 'The right Dundrum', p: 'A search of the national open data portal for Dundrum returns five Met Éireann stations, and four of them are in County Tipperary. This page uses only Dublin (Dundrum), at 61 metres, 53.289 north and 6.250 west.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Dundrum, named',
      h2: 'Dundrum, described by those who run its places',
      intro: 'Each entry below comes from the organisation\'s own site or data, with the eircode where it publishes one.',
      body: [
        { kind: 'table', caption: 'Named places in Dundrum', head: ['Place', 'What its own source says'], rows: [
          ['Airfield Estate', 'Overend Way, Dundrum, D14 EE77, 38 acres'],
          ['Holy Cross School', 'Upper Kilmacud Road, Dundrum, D14 AD66'],
          ['Dundrum Luas stop', 'Cycle and ride on TII\'s stop list'],
          ['Dundrum Local Area Plan', '149 hectares, proposed, in the council\'s data'],
          ['Dublin (Dundrum) gauge', 'Closed; 61 metres; 1975 to 1995']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A farm in the suburbs', p: 'Airfield Estate describes itself as 38 acres of farm, gardens and family activities, and is a registered charity. Its published coordinates put it about 0.87 km from the old Met Éireann gauge, a distance the learner can check with the haversine formula.' },
          { h3: 'The plan boundary', p: 'A proposed Dundrum Local Area Plan covers 149 hectares, according to the plan-area file the county council published with its development plan for 2022 to 2028, where it appears on maps 1 and 5.' },
          { h3: 'On the Green Line', p: 'TII\'s list of Luas stops flags Dundrum for cycle and ride but not park and ride. Passenger numbers for the line belong to the Sandyford page\'s project.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is printed for Dundrum, because the page uses only facts published by named organisations about the place itself. The rainfall figures describe one gauge that closed in 1995; they are not a flood-risk assessment for any street or property, and nothing here replaces advice from the responsible authorities.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'The shape of a week for Dundrum learners',
      intro: 'Normally two lessons a week, and in each one a teacher is live and teaching from beginning to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children open with block code and games that keep a high score, which is where the idea of a record, and how often it falls, first appears.' },
          { h3: 'Teenagers', p: 'Older learners take up Python, build websites and AI projects, and analyse real records such as the Dundrum rain gauge.' },
          { h3: 'Adults', p: 'Adults may begin with no background in code; the first lesson picks the course.' }
        ] },
        { kind: 'p', text: 'Rainfall values, codes and the storm bulletins are Met Éireann\'s; the rankings, fitted curves and return periods are our own calculations, run on 20 September 2026. Airfield Estate, Holy Cross School, TII and the council are quoted from their own sites and data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a high score to a hundred-year storm',
    intro: 'Age bands are approximate, and the first lesson places each learner properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'High scores', p: 'Block-coded games that store the top score and count how often it is beaten.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Sorting and ranking', p: 'Python that sorts yearly values and gives each one a rank.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Fitting the tail', p: 'Yearly maxima, fitted curves and leave-one-out checks on real rainfall.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Planning for rare events', p: 'Estimating rare peaks at work and reporting how much the estimate depends on a few data points.', courses: ['data-analysis-mastery-course-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant how rare Hurricane Charley\'s rainfall was',
    intro: 'It will usually fit a curve and quote a return period.',
    p1: 'Give an AI assistant the Dundrum gauge\'s yearly maxima and ask how rare the 1986 rainfall was, and it may fit a Gumbel curve and answer about 80 years. The fit is done correctly. The answer still hides that the storm helped shape the curve, that 19 years is a short record, and that one year left out changes the result more than sixfold.',
    p2: 'Having run the leave-one-out checks, the learner asks the assistant how many years the estimate rests on, what happens without the largest value, and whether the two halves of the record agree. An estimate that has not faced those questions is not ready to be quoted.',
    closer: 'Fitting a curve takes a few lines. Knowing how far to trust its tail is the skill.',
    blogAnchor: 'why learning to code still repays the work'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Dundrum',
    intro: 'What to expect.',
    cells: [
      { h3: 'Live, not recorded', p: 'Every lesson has a teacher present, following and correcting each learner\'s code in real time.' },
      { h3: 'Level first', p: 'Groups of five to ten learners at one level, from Dundrum, other parts of Ireland and abroad.' },
      { h3: 'Twice weekly', p: 'About eight lessons a month, on two set days chosen at the start of the course.' },
      { h3: 'Term breaks', p: 'The plan allows for school holidays, mid-term breaks and the weeks of exams.' },
      { h3: 'Home setup', p: 'A laptop or desktop, headphones or speakers with a microphone, and a connection steady enough for video.' },
      { h3: 'One to one', p: 'Private lessons for learners who are well ahead, need more time on each idea, or can only make hours no group uses.' }
    ],
    spec: { title: 'Online everywhere', p: 'We have no centre in Dundrum, in Dún Laoghaire-Rathdown or anywhere in Ireland. Lessons are given over video, and they are the same wherever the learner connects from.' }
  },

  fees: {
    h2: 'Dundrum lesson fees',
    intro: 'Plainly set out.',
    first: 'An opening lesson with a check of the learner\'s level, free.',
    group: 'A month in a group of five to ten learners at one level, around eight live lessons.',
    private: 'A month of private lessons on the same weekly rhythm.',
    closer: 'Outside India, every family pays the same monthly fee in US dollars. The free lesson commits no one, the first payment comes when the course begins, and the pricing page covers holidays, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Google reviews from six of our families, unaltered',

  book: {
    h2: 'Book a free first lesson in Dundrum',
    intro: 'Give us the learner\'s age and a sense of what they enjoy, and we will plan the first hour around them. The hour might end on a small game, a working first program, or twenty years of rainfall records put in order.',
    success: 'Thank you. We will be in touch soon about the lesson.'
  },

  faq: {
    h2: 'Dundrum coding class questions',
    intro: 'What Dundrum families most often want to know.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Dundrum?', a: 'No. All lessons are live on video and we have no premises in Ireland. A learner needs a computer, working sound and a microphone, and a stable connection. The phone number on this page is in India.', boiler: true },
      { q: 'What does the rain gauge project involve?', a: 'Estimating how rare heavy rain is from the old Dublin (Dundrum) gauge. With all 19 complete years the 100-year daily rainfall comes out at 88.9 mm; without 1986, the year of Hurricane Charley, it is 71.7 mm. Learners fit the curve, then test how much one year moves it.' },
      { q: 'Does this tell me the flood risk for my street?', a: 'No. The gauge closed in 1995 and the project is about how estimates are made and how uncertain they are. Flood risk for a particular place is a matter for the responsible authorities.' },
      { q: 'Why is there no population for Dundrum here?', a: 'Every fact on a district page comes from a named body writing about the place directly: here Airfield Estate, Holy Cross School, TII, Met Éireann and the council. None of them publishes a head count for Dundrum.' },
      { q: 'What hours are lessons?', a: 'After school and in the evening on weekdays, and daytime at weekends. Lesson times are set in Irish time. With our teaching team based in India, the clocks there run five and a half hours ahead of Dublin in winter and four and a half in summer, which is why only mutually workable hours are offered.' },
      { q: 'Can adults take classes?', a: 'Yes, up to sixty-seven and at any level. After the first lesson an adult decides between a small group at the same level and private lessons.' },
      { q: 'Will the other learners be from Dundrum?', a: 'Possibly, but grouping is by level only, so others in the class may be from Dublin 14, elsewhere in Ireland or overseas.' },
      { q: 'What do coding classes in Dundrum cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month for around eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule are USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How big is a group?', a: 'Five to ten learners, grouped by level, pace and goal rather than by age or address. If no group suits at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Dundrum and the Green Line',
    html: '<a class="cg-inline-link" href="/coding-classes-in-sandyford-dublin">Sandyford</a> is a few stops south on the Green Line, the <a class="cg-inline-link" href="/coding-classes-in-dun-laoghaire-rathdown">Dún Laoghaire-Rathdown</a> page covers the whole council area, and the <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city to the north. Across the county, <a class="cg-inline-link" href="/coding-classes-in-lucan-dublin">Lucan</a> has a rain gauge project of its own, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links everything else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dundrum, Dún Laoghaire-Rathdown and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-sandyford-dublin', label: 'Sandyford' },
    { href: '/coding-classes-in-dun-laoghaire-rathdown', label: 'Dún Laoghaire-Rathdown' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-ddr .cg-hero-grid { align-items: center; gap: clamp(1.06rem, 3.24vw, 2.49rem); }
.cg-root.cg-ddr .cg-hero h1 { font-weight: 700; letter-spacing: -0.0174em; line-height: 1.06; }
.cg-root.cg-ddr .cg-capsule { border-top: 6px double var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-ddr .cg-eyebrow { letter-spacing: 0.126em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ddr .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0138em; }
.cg-root.cg-ddr .cg-grid-3 { gap: clamp(1.13rem, 2.79vw, 2.2rem); }
.cg-root.cg-ddr .cg-table caption { letter-spacing: 0.031em; font-weight: 700; }
.cg-root.cg-ddr .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-ddr .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-ddr .cg-ladder-col { border-bottom: 6px double var(--cg-accent); padding-bottom: 1.07rem; }
.cg-root.cg-ddr .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Dundrum, Dublin 14, named sources only (owner rule for districts), read 20 September 2026. Met Eireann via data.gov.ie, "Dublin (Dundrum) Rainfall Data": "Daily and monthly rainfall records for our station at Dublin (Dundrum) in Co. Dublin. This station is now closed."; dly8023.csv header "Station Name: DUBLIN (DUNDRUM)", "Station Height: 61 M", "Latitude:53.289 ,Longitude: -6.250", date 09 to 09 utc; 7,305 daily rows 01-dec-1975 to 30-nov-1995; indicators 0 x6,233, 1 x64, 4 x1,007, 5 x1. Our arithmetic (dist/rp.js): complete years 1976-1994 (19); yearly maxima largest to smallest 86.3 (25/8/1986), 70.2 (11/6/1993), 51.7, 44.6, 41.8, 39.9, 36.9, 34.8, 34.5, 34.4, 33.5, 32.6, 31.5, 30.2, 28.0, 27.4, 26.1, 24.0, 20.4 mm, all indicator 0; mean 38.4, standard deviation 16.1; Gumbel by moments mu 31.1, beta 12.6; return levels 2 years 35.7, 10 years 59.4, 20 years 68.4, 50 years 80.1, 100 years 88.9 mm; without 1986, 100 years 71.7; first ten years (1976-1985) 100 years 61.3, last nine (1986-1994) 110.8; return period of 86.3 mm 82 years with all years, 509 without 1986; of 70.2 mm 23 and 85. Met Eireann "Exceptional weather events: Storm- Hurricane Charley, August 1986" (Aug1986_HurCharlie.pdf, scanned; read as page image): Monthly Weather Bulletin supplement to August 1986, "Offshoot of Hurricane Charley hits Ireland on 25th", "Worst flooding in Dublin for 100 years", "New rainfall records", photograph captioned "The scene during the night of August 25th/26th on the bridge over the Dodder at Ballsbridge in Dublin". Met Eireann "Exceptional weather events: Rainfall, June 1993" (June1993_Rain.pdf, scanned): "Highest percentage totals were recorded in the east over parts of the Dublin" and Kildare area "where they exceeded 3 times normal", "this was due to record rainfall on 11th". data.gov.ie search "Dundrum": five Met Eireann stations, Dundrum (Garryduff), Dundrum (Knockavilla), Dundrum G.S. and Dundrum (Stook W.W.) in Co. Tipperary, and Dublin (Dundrum). Airfield Estate: "Airfield Estate, Overend Way, Dundrum, Dublin 14, Ireland, D14 EE77", coordinates 53 17 17.5 N, 6 14 13.4 W (0.87 km from the gauge by haversine), "38 Acres of Farm, Gardens and Family Fun", Registered Charity No. 20012670. Holy Cross School: "Upper Kilmacud Road, Dundrum, D14 AD66". TII Luas stops list: Dundrum (DUN) isParkRide 0, isCycleRide 1. DLR development plan 2022-2028 boundary plan areas: "Boundary of Dundrum Local Area Plan - Proposed", maps "1, 5", 149 hectares.',
    localProject: 'Return periods from yearly maxima and their sensitivity. From Met Eireann\'s closed Dublin (Dundrum) gauge, the learner takes the wettest day of each complete year 1976-1994, ranks them (the largest gets a simple return period of 20 years), fits a Gumbel curve by moments (mean 38.4, sd 16.1) and reads off the 100-year day, 88.9 mm. Leaving out 1986, the year of Hurricane Charley (86.3 mm on 25 August), gives 71.7 mm; the two decades separately give 61.3 and 110.8. Charley itself is a 1-in-82 day with 1986 in the fit and 1-in-509 without; 11 June 1993 (70.2 mm) is 1-in-23 or 1-in-85. Lessons: tail estimates beyond the record come from a stretched curve; report the record length and a leave-one-out range; a storm is part of the evidence about its own rarity. New family for the cluster: extremes and return periods.',
    requiredMentions: [
      '86.3',
      '70.2',
      '88.9',
      '71.7',
      '509',
      '61.3',
      '110.8',
      '82 years',
      '38 acres',
      '149 hectares',
      'D14 EE77',
      'D14 AD66'
    ],
    sources: [
      { claim: 'Met Eireann via data.gov.ie, Dublin (Dundrum) Rainfall Data (station now closed): daily rainfall December 1975 to November 1995, 61 m, 53.289 N, 6.250 W, 09 to 09 UTC days, indicator on each day.', url: 'https://clidata.met.ie/cli/climate_data/webdatac/dly8023.csv' },
      { claim: 'Met Eireann exceptional weather events, Storm, Hurricane Charley, August 1986: Monthly Weather Bulletin supplement, "Offshoot of Hurricane Charley hits Ireland on 25th", "Worst flooding in Dublin for 100 years", photograph of the Dodder at Ballsbridge on the night of 25 to 26 August.', url: 'https://www.met.ie/cms/assets/uploads/2017/08/Aug1986_HurCharlie.pdf' },
      { claim: 'Met Eireann exceptional weather events, Rainfall, June 1993: totals in parts of the Dublin and Kildare area exceeded three times normal "due to record rainfall on 11th".', url: 'https://www.met.ie/cms/assets/uploads/2017/08/June1993_Rain.pdf' },
      { claim: 'Met Eireann major weather events index, listing both events.', url: 'https://www.met.ie/climate/major-weather-events' },
      { claim: 'Airfield Estate: Overend Way, Dundrum, Dublin 14, D14 EE77; 38 acres of farm and gardens; registered charity.', url: 'https://www.airfield.ie/' },
      { claim: 'Holy Cross School: Upper Kilmacud Road, Dundrum, D14 AD66.', url: 'https://www.holycrossschool.ie/' },
      { claim: 'TII Luas stops list: Dundrum flagged cycle and ride, not park and ride.', url: 'http://luasforecasts.rpa.ie/xml/get.ashx?action=stops&encrypt=false' },
      { claim: 'Dun Laoghaire-Rathdown County Council development plan 2022-2028 boundary plan areas: Dundrum Local Area Plan, proposed, 149 hectares, maps 1 and 5.', url: 'https://data.smartdublin.ie/dataset/70f527be-1f31-4c37-9c88-c1e757e5140b/resource/8da69700-a03e-429a-abcf-346850a30ddf/download/devplan_2022_2028_boundary_plan_areas.csv' }
    ],
    rejectedClaims: [
      'Any flood-risk statement for a street, property or area today: the gauge closed in 1995 and the page is about estimation.',
      'Treating the bulletin\'s "worst flooding in Dublin for 100 years" as a return period for this gauge.',
      'The four Tipperary stations named Dundrum as Dublin data; name matching as the lesson (Longford and Rush own it).',
      'Luas passenger numbers: the Sandyford page owns them.',
      'Dundrum Library and the shopping-complex description: the Dun Laoghaire-Rathdown page owns them.',
      'Any population figure for Dundrum and any aggregation of census small areas: owner rule for district pages.',
      'Grinds providers in the area: never named or ranked.'
    ]
  }
};
