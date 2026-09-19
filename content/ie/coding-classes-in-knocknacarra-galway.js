'use strict';
// Knocknacarra, Galway (cg- district page, Ireland cluster, Phase 6, last). Named sources only (owner
// rule for districts), read 20 September 2026: Marine Institute ERDDAP IrishNationalTideGaugeNetwork,
// stations "Galway Port" (53.269, -9.048) and "Galway Port 2" (53.26926, -9.047911), 30 m apart,
// 5.50 km from the Knocknacarra Community Centre point; Galway City Council open data (community
// centres, playgrounds); Gaelscoil Mhic Amhlaigh's and Knocknacarra Educate Together NS's own sites.
// Spine: agreement is not correlation (Bland-Altman). Scratchpad knc/agree.js.
// 1 Jan to 31 Aug 2026, OD Malin, all QC 0: 69,913 and 69,515 readings; 69,478 paired; two impossible
// readings of -32.753 m (Galway Port 2026-07-12T14:45Z; Galway Port 2 2026-08-19T13:30Z) removed ->
// 69,476 pairs (99.3%). Correlation 0.99995. Difference (Galway Port minus Galway Port 2): bias
// -17.4 mm, sd 13.1 mm, limits of agreement -43.2 to +8.3 mm; with the two junk readings sd 179.5,
// limits -369 to +334 mm. Bias by level: -3 to -1.5 m -37.9 mm; -1.5 to -0.5 -20.7; -0.5 to 0.5
// -13.5; 0.5 to 1.5 -13.2; 1.5 to 3 -12.9; slope 5.21 mm per m. Median |difference| 15.0 mm;
// 71.4% within 2 cm; 59 pairs beyond 10 cm; largest real 254 mm (2026-04-04T16:20Z).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'KNOCKNACARRA', blurb: 'Two tide gauges thirty metres apart, a correlation of 0.99995, and a steady disagreement that the correlation cannot see.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-knocknacarra-galway',
  code: 'knc',
  accent: '#3F298E',
  accentRationale: 'Knocknacarra: an Atlantic violet from the widened solver search, clear of the Tramore blue',
  pageType: 'district',
  place: {
    name: 'Knocknacarra',
    eyebrow: 'Knocknacarra, Galway',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Galway City' },
      { type: 'AdministrativeArea', name: 'County Galway' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-galway', name: 'Galway' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Galway', href: '/best-coding-class-in-galway' },
    { label: 'County Galway', href: '/coding-classes-in-county-galway' }
  ],
  routeLabel: 'Knocknacarra, Galway, Ireland',
  title: 'Coding Classes in Knocknacarra, Galway | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Knocknacarra learners aged 6 to 67, in small same-level groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Knocknacarra, with a data project on two Galway Port tide gauges and why a near-perfect correlation is not agreement.',
  twitterDescription: 'Live online coding, Python, AI and maths for Knocknacarra, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Knocknacarra',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Knocknacarra, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Knocknacarra',
  capsuleQ: 'What are the best coding classes in Knocknacarra?',
  capsule: 'A Knocknacarra learner meets a real teacher in every lesson, live on a video call, either with a handful of others at the same stage or alone, generally on two days a week, and anyone from six to sixty-seven can join. It all happens at home. Lesson one is free, and each month from then on is USD 100 for a shared group or USD 150 for private lessons.',
  lead: 'At Galway Port, 5.5 kilometres from Knocknacarra\'s community centre, the Marine Institute runs two tide gauges about thirty metres apart, each logging the sea level every five minutes. Do they agree? Their readings correlate at 0.99995, which sounds like perfect agreement. It is not. One gauge reads 17.4 millimetres lower than the other on average, the gap nearly triples at low water, and two impossible readings, each claiming the sea stood 32.753 metres below datum, would on their own make the gauges seem to disagree by a third of a metre. This page teaches a learner how to measure agreement properly, and why correlation cannot.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Knocknacarra.',

  picks: {
    eyebrow: 'Courses for Knocknacarra',
    h2: 'Four first courses for Knocknacarra',
    intro: 'Choose by age to begin; the teacher uses the free first lesson to check the level and moves the learner if another course fits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and two rulers: measuring the same things twice and spotting which ruler reads long.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Differences, averages and spread in code, and why two lists can rise and fall together yet still disagree.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real sensor data in Python: pairing readings, cleaning impossible values, and agreement plots.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who compare instruments, methods or suppliers and need more than a correlation.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two gauges, one sea: agreement is not correlation',
      intro: 'Both gauges sit in Galway Port and report the sea level every five minutes to the Marine Institute; the comparison covers 1 January to 31 August 2026, with both series on the Ordnance Datum Malin scale. The program pairs readings taken at the same moment and compares them.',
      body: [
        { kind: 'table', caption: 'Galway Port and Galway Port 2, January to August 2026', head: ['Measure', 'Result'], rows: [
          ['Readings paired at the same moment', '69,476, or 99.3 percent'],
          ['Correlation between the two gauges', '0.99995'],
          ['Average difference (first minus second)', 'minus 17.4 millimetres'],
          ['Limits of agreement (average plus or minus 1.96 standard deviations)', 'minus 43.2 to plus 8.3 millimetres'],
          ['Average difference at the lowest water', 'minus 37.9 millimetres'],
          ['Average difference at the highest water', 'minus 12.9 millimetres']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Near-perfect correlation', p: 'The two gauges correlate at 0.99995, because both follow the same tide up and down by metres every few hours. Correlation measures whether they move together. It would stay that high if one gauge read ten centimetres higher all the time.' },
          { h3: 'A steady offset', p: 'Subtract one gauge from the other and the answer is not zero: the first reads 17.4 millimetres lower than the second on average, and the limits of agreement, the average plus or minus 1.96 standard deviations, run from minus 43.2 to plus 8.3 millimetres. In practice 93.6 percent of the differences fall inside them, a little under the textbook 95 because the differences are not perfectly bell-shaped.' },
          { h3: 'Worse at low water', p: 'The difference depends on the level. When the sea is lowest, between 1.5 and 3 metres below datum, the average gap is 37.9 millimetres; at high water it is 12.9. A single average difference hides that the gauges disagree most when the tide is out.' }
        ] },
        { kind: 'callout', h3: 'To compare two ways of measuring, look at the differences', p: 'Two instruments can rise and fall together perfectly and still disagree, because correlation ignores any constant offset or scale error. The fairer method, often drawn as a Bland-Altman plot, puts the difference between paired readings against their average and reports the typical difference with limits meant to hold about 95 percent of them, then checks how many actually fall inside. It also shows at a glance whether the disagreement changes with the size of what is being measured, as it does here.' },
        { kind: 'p', text: 'Step one of the learner\'s code fetches the two gauge records and matches every reading on one to the reading on the other taken at the same five-minute mark, which yields 69,478 matched pairs. Before any statistics it checks the values against what is physically possible, and finds two readings of minus 32.753 metres, one from each gauge on different days in July and August. Left in, those two numbers alone would stretch the standard deviation of the differences from 13.1 millimetres to 179.5 and make the limits of agreement about a third of a metre either way. With them removed, the program computes the average difference, the limits of agreement, the correlation, and the difference in bands of water level, and fits a line to show the gap growing by about 5 millimetres for every metre the sea falls.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two readings out of 69,000', p: 'Each gauge produced one reading of minus 32.753 metres, far below any possible tide. Two bad values among tens of thousands would barely move an average, but a spread is built from squared differences, so they dominated it until they were removed.' },
          { h3: 'Unknown quality', p: 'Every reading in both files carries quality flag 0, which the network defines as unknown rather than good. The impossible values show why a program has to check readings for itself.' },
          { h3: 'Which gauge is right?', p: 'Comparing two gauges shows how far apart they are, not which one is correct. That would need a third reference, and the page does not say either gauge is in error.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Knocknacarra, named',
      h2: 'Knocknacarra from its community centre, playgrounds and schools',
      intro: 'Each fact below comes from the organisation that publishes it.',
      body: [
        { kind: 'table', caption: 'Named places in Knocknacarra', head: ['Place', 'What its own source says'], rows: [
          ['Knocknacarra Community Centre', 'Cappagh Road, Knocknacarra'],
          ['McGrath\'s Field Playground', 'Shangort Road, Knocknacarra'],
          ['Cappagh Park Playground', 'Cappagh Road, beside the community centre'],
          ['Gaelscoil Mhic Amhlaigh', 'Miller\'s Lane, Knocknacarra, H91 FV4D']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Playgrounds', p: 'Galway City Council\'s open data lists McGrath\'s Field Playground with a rubber wet-pour surface and no restricted opening hours, and Cappagh Park Playground with a wood bark surface and toilets at the adjacent community centre. The council\'s own file spells that second address Knockanacarra.' },
          { h3: 'An Irish-medium school', p: 'Gaelscoil Mhic Amhlaigh says it spent 1993 to 1999 in temporary accommodation in Knocknacarra, moved into an eight-classroom building in 1999, and moved again in January 2018 to a new 24-classroom school at Miller\'s Lane.' },
          { h3: 'A primary school', p: 'Knocknacarra Educate Together National School describes itself as a primary school in Galway City, and its website lists a STEM committee, Green Schools and an active schools programme.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Knocknacarra, because the page prints only what named bodies publish about the place. The tide readings come from the port, 5.5 kilometres away, and the page makes no claim about flooding or water levels on the Knocknacarra shore.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'How a Knocknacarra learner\'s week goes',
      intro: 'A usual week has two lessons, and the teacher leads each live from the first minute to the last.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The youngest start with block code and measuring games, finding out that two rulers can disagree in a steady way.' },
          { h3: 'Teenagers', p: 'Teenage learners work towards Python, building for the web, AI tasks and genuine sensor feeds from Galway Bay, testing every reading as they go.' },
          { h3: 'Adults', p: 'No background is assumed for grown-up learners; the opening lesson points them to the right course.' }
        ] },
        { kind: 'p', text: 'Sea levels are the Marine Institute\'s published readings; the pairing, cleaning, correlation, differences and limits of agreement were calculated by us on 20 September 2026. Community centre and playground details come from Galway City Council\'s open data, and school details from the schools\' own websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two rulers to an agreement plot',
    intro: 'Treat each band as a first guess; lesson one sets the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Measure twice', p: 'Block-coded games that measure the same objects two ways and compare.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Differences', p: 'Python that pairs two lists and studies the differences, not just the values.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Agreement analysis', p: 'Real sensor pairs, impossible-value checks and limits of agreement.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Comparing methods', p: 'Deciding whether two instruments, labs or systems can be used interchangeably.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether the two gauges agree',
    intro: 'It may report the correlation and stop.',
    p1: 'Give an AI assistant both gauges\' readings and ask whether they agree, and a common first answer computes the correlation, finds 0.99995 and declares near-perfect agreement. Correlation is the wrong tool for the question: it would be just as high if one gauge read ten centimetres low all year.',
    p2: 'Someone who has done this project asks instead for the paired differences, their mean and limits of agreement, whether the gap shifts with the tide, and a check for impossible values before anything else. With those questions an assistant is a quick helper; without them it can produce a confident wrong answer.',
    closer: 'Moving together is not the same as agreeing. The difference is one subtraction away.',
    blogAnchor: 'the case for young people learning to program'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Knocknacarra',
    intro: 'The details that matter.',
    cells: [
      { h3: 'With a teacher, live', p: 'The teacher runs every lesson in real time and works through each learner\'s code with them.' },
      { h3: 'Matched by ability', p: 'Each group has five to ten members at a similar stage, whether they log in from Knocknacarra, another county or another country.' },
      { h3: 'Fixed days', p: 'Lessons on the same two days each week, roughly eight in a month.' },
      { h3: 'Term-friendly', p: 'The plan allows for school holidays, mid-terms and exam weeks.' },
      { h3: 'What to have', p: 'A laptop or desktop computer, a microphone, headphones or speakers, and broadband that handles video.' },
      { h3: 'Private teaching', p: 'One-to-one lessons for learners who are ahead, need more time, or keep unusual hours.' }
    ],
    spec: { title: 'Online, not local', p: 'Modern Age Coders has no premises in Knocknacarra, in Galway or anywhere in Ireland. Every lesson is live on video and runs the same from any home.' }
  },

  fees: {
    h2: 'Fees for Knocknacarra',
    intro: 'Briefly.',
    first: 'A free first lesson with a level check.',
    group: 'A month in a group of five to ten at the same level, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same frequency.',
    closer: 'The fee is one amount in US dollars for every family outside India, paid a month at a time. No payment is due for the trial, the first charge comes with the start of the course, and the pricing page spells out what happens around holidays, absences and a move from group to private lessons or back.'
  },

  reviewsH2: 'Parents\' Google reviews, word for word and unedited',

  book: {
    h2: 'Book a free first lesson in Knocknacarra',
    intro: 'Send a line about the learner\'s age and what they like, and we will prepare an opening lesson to match. It may finish with a small game, a working program, or two sets of measurements compared the proper way.',
    success: 'Thank you. We will be in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Knocknacarra coding class questions',
    intro: 'What Knocknacarra families usually ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Knocknacarra?', a: 'No. We teach live over video and have no premises in Ireland. A learner needs a computer, a microphone and sound, and a dependable connection. The phone number on the page is in India.', boiler: true },
      { q: 'What does the Galway Port project involve?', a: 'The learner compares the Marine Institute\'s two Galway Port gauges over eight months: they correlate at 0.99995, yet one reads 17.4 millimetres lower on average, the gap reaches 37.9 at low water, and two impossible readings of minus 32.753 metres would have made them look a third of a metre apart.' },
      { q: 'Is this page about flood risk in Knocknacarra?', a: 'No. The gauges are at the port and the project is about comparing measurements. Flood risk on the Knocknacarra shore is a separate question the page does not address.' },
      { q: 'Why is there no population figure for Knocknacarra?', a: 'District pages here repeat only what named organisations say about the place; for Knocknacarra that means Galway City Council and two schools, plus the Marine Institute for the port readings, and no resident count appears in any of them.' },
      { q: 'When are lessons held?', a: 'School days have slots from mid-afternoon to evening, and Saturdays and Sundays have daytime ones, all listed in Irish time. Our teachers are in India, five and a half hours ahead of Knocknacarra in the Irish winter and four and a half in summer, so we offer only hours that work in both places.' },
      { q: 'Do you teach adults?', a: 'We do, from complete beginners up to learners of sixty-seven; once the free lesson is done they settle on a same-level group or one-to-one teaching.' },
      { q: 'Will my child be with other Knocknacarra children?', a: 'Possibly, but groups are made by level, so classmates may be anywhere in Ireland or abroad.' },
      { q: 'What do coding classes in Knocknacarra cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched by level, pace and goals rather than age or address. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Knocknacarra',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-galway">Galway</a> page covers the city, and the <a class="cg-inline-link" href="/coding-classes-in-county-galway">County Galway</a> page the wider county. For every other county, town and district, start from the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Knocknacarra, Galway and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-galway', label: 'Galway' },
    { href: '/coding-classes-in-county-galway', label: 'County Galway' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-knc .cg-hero-grid { align-items: end; gap: clamp(1.13rem, 3.2vw, 2.49rem); }
.cg-root.cg-knc .cg-hero h1 { font-weight: 725; letter-spacing: -0.0193em; line-height: 1.06; }
.cg-root.cg-knc .cg-capsule { border-top: 4px double var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-knc .cg-eyebrow { letter-spacing: 0.136em; font-weight: 625; text-transform: uppercase; }
.cg-root.cg-knc .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0134em; }
.cg-root.cg-knc .cg-grid-3 { gap: clamp(1.1rem, 2.72vw, 2.16rem); }
.cg-root.cg-knc .cg-table caption { letter-spacing: 0.036em; font-weight: 670; }
.cg-root.cg-knc .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-knc .cg-table tr:nth-child(2) td { font-style: italic; }
.cg-root.cg-knc .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 1.02rem; }
.cg-root.cg-knc .cg-callout { border-left-width: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Knocknacarra, named sources only (owner rule for districts), read 20 September 2026. Marine Institute ERDDAP IrishNationalTideGaugeNetwork (PT5M; QC_Flag values 0, 1, 9 = unknown, good, missing): station_id "Galway Port" at 53.269, -9.048 and "Galway Port 2" at 53.26926, -9.047911 (30 m apart by haversine), Water_Level_OD_Malin, 1 January to 31 August 2026; 69,913 and 69,515 readings, all QC_Flag 0. Our arithmetic (knc/agree.js): 69,478 pairs with identical time stamps; values of -32.753 m at Galway Port 2026-07-12T14:45Z and Galway Port 2 2026-08-19T13:30Z removed, leaving 69,476 pairs (99.3% of 69,984 slots). Correlation 0.99995. Difference Galway Port minus Galway Port 2: mean -17.4 mm, standard deviation 13.1 mm, limits of agreement -43.2 to +8.3 mm (93.6% of clean differences inside); with the two impossible values standard deviation 179.5 mm and limits -369 to +334 mm. Mean difference by mean level: -3 to -1.5 m -37.9 mm (n 6,481); -1.5 to -0.5 m -20.7; -0.5 to 0.5 m -13.5; 0.5 to 1.5 m -13.2; 1.5 to 3 m -12.9 (n 8,640); regression slope of difference on mean 0.00521 (5.21 mm per metre). Median absolute difference 15.0 mm; 71.4% within 2 cm; 59 pairs beyond 10 cm; largest real difference 254 mm at 2026-04-04T16:20Z. Distance from the gauges to the Knocknacarra Community Centre point (Galway City Council data: -9.13013694732768, 53.2634599924555) 5.50 km. Galway City Council open data: Community Centre Locations "Knocknacarra Community Centre","Cappagh Road, Knocknacarra."; Playgrounds "McGrath\'s Field Playground","Shangort Road, Knocknacarra", surface "Rubber Wet-pour surface", parking "Parking along public road", "No restricted opening hours"; "Cappagh Park Playground","Cappagh Road, Knockanacarra", "Wood Bark Surface", "Car park in Cappagh Park", toilets "Yes- At adjacent Knocknacarra Community Centre". Gaelscoil Mhic Amhlaigh: "Gaelscoil Mhic Amhlaigh, Lána an Mhuilleora, Cnoc na Cathrach, Gaillimh, H91 FV4D"; "Between 1993 - 1999 we were housed in temporary accommodation in the Knocknacarra area. In 1999 we moved into a new school building of eight classrooms"; "a brand new state of the art 24 classroom school ... We moved into our new school in January 2018 at Miller\'s Lane, Knocknacarra." Knocknacarra Educate Together NS: "Knocknacarra Educate Together National School is a primary school in Galway City"; site menu "STEM Committee", "Green Schools", "Active School".',
    localProject: 'Agreement is not correlation. From the Marine Institute\'s two Galway Port tide gauges, 30 metres apart, the learner pairs 69,476 five-minute readings from January to August 2026 after removing two physically impossible values of -32.753 m (which alone inflate the standard deviation of differences from 13.1 to 179.5 mm). The gauges correlate at 0.99995, yet differ by -17.4 mm on average with limits of agreement -43.2 to +8.3 mm, and the gap grows to -37.9 mm at the lowest water against -12.9 mm at the highest. Lessons: correlation ignores offsets; compare methods by their differences (Bland-Altman); check whether disagreement depends on size; check physical limits before statistics; comparison cannot say which instrument is right. New family site-wide: METHOD COMPARISON / LIMITS OF AGREEMENT (Bland, limits of agreement, method comparison had no prior hits); distinct from Castletroy (identical copied channels) and Clontarf (observed minus predicted).',
    requiredMentions: [
      '0.99995',
      '17.4 millimetres',
      '43.2',
      '37.9',
      '12.9',
      '32.753',
      '69,476',
      '13.1 millimetres',
      'H91 FV4D',
      'January 2018',
      'Shangort Road',
      'Knockanacarra'
    ],
    sources: [
      { claim: 'Marine Institute, Irish National Tide Gauge Network: Galway Port and Galway Port 2 five-minute water levels, OD Malin, January to August 2026, with positions and quality flags.', url: 'https://erddap.marine.ie/erddap/tabledap/IrishNationalTideGaugeNetwork.html' },
      { claim: 'Galway City Council, Community Centre Locations: Knocknacarra Community Centre, Cappagh Road, with coordinates.', url: 'https://galway-city-council-opendata-galwaycityco.hub.arcgis.com/api/download/v1/items/e13246bd0f094647be1ae053c8a87034/csv?layers=0' },
      { claim: 'Galway City Council, Playgrounds in Galway City: McGrath\'s Field Playground (Shangort Road) and Cappagh Park Playground, surfaces, parking, hours and toilets.', url: 'https://galway-city-council-opendata-galwaycityco.hub.arcgis.com/api/download/v1/items/1e92e7e7ab474a06a060f5e846dbd3c5/csv?layers=0' },
      { claim: 'Gaelscoil Mhic Amhlaigh: Miller\'s Lane, Knocknacarra, H91 FV4D; temporary accommodation 1993 to 1999; new 24-classroom school from January 2018.', url: 'https://gsmhicamhlaigh.ie/en/school-history-information/' },
      { claim: 'Knocknacarra Educate Together National School: a primary school in Galway City; STEM committee and school programmes.', url: 'https://www.ketns.ie/' }
    ],
    rejectedClaims: [
      'Which gauge is correct: a two-way comparison cannot say.',
      'Flooding or coastal risk on the Knocknacarra shore; the OPW Galway City coastal study tables are images, not data, and are not used.',
      'Residuals and aliasing on tide data: Clontarf and Douglas own them.',
      'Salthill parking and other Galway city facts: the Galway page owns them.',
      'Any population figure for Knocknacarra and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
