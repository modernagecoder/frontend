'use strict';
// Bedford (cg- town page, UK cluster Phase 8, towns band A, row 330). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: is a river record consistent with its neighbour? Anchors (read raw 27 September 2026): EA Hydrology API stations
// "Roxton" (3c43b72d-03a7-46e1-86c7-76dd97808544; lat 52.167371, long -0.305422; opened 1972-10-23) and "Newport Pagnell
// Total" (35b916f9-d420-425f-807f-f927415db702), daily mean flow; postcodes.io nearest to Roxton MK44 3EN, Bedford, Roxton
// parish. NRFA 33039 "Bedford Ouse at Roxton": catchment 1660.0 km2; mean 11.828; "Flat V Crump profile weir (26m broad)
// with downstream recorder, situated immediately u/s of confluence with R. Ivel"; "Data quality issues from April 2025".
// NRFA 33037 "Bedford Ouse at Newport Pagnell Total": catchment 800.0 km2; mean 4.956; "Compound site of main weir and mill
// weir"; its record stops in September 2024.
// Our run (scratchpad bdf/dm.py, 27 September 2026): water years with 360+ daily values at BOTH gauges, 1984 to 2023: 27
// years (1985, 1986, 1988, 1990, 1991, 1993 to 1995, 1998, 2000, 2001, 2021, 2022 fail the test). Sum of yearly mean flows:
// Roxton 290.0, Newport Pagnell 142.7; double-mass slope 2.036; ratio of totals 2.032; catchment area ratio 1660/800 =
// 2.075. Single-year ratio from 1.718 (WY2020) to 3.068 (WY2002). Best two-line split at 2002: slopes 2.055 and 1.986
// (about 3 per cent change). The earlier idea (daily mean vs 15-minute peaks at Roxton) was dropped: the high flows are
// flagged Suspect and the largest peak is a flood, which the page does not discuss.
// Lesson family: double mass curve (cumulative vs cumulative, slope breaks, noise of single-year ratios, paired years);
// screened (double mass: 0 hits).
// Place facts: Nomis Census 2021 TS007A, Bedford E06000055: total 185,231; under 5 11,163 (6.0%; England 5.4%); 5 to 9
// 11,742 (6.3%; 5.9%); 10 to 14 11,975 (6.5%; 6.0%); 20 to 24 9,999 (5.4%; 6.0%); 40 to 44 12,954 (7.0%; 6.3%); 70 to 74
// 8,337 (4.5%; 5.0%). ONS 2021 BUAs wholly in Bedford borough: Bedford 97,235; Kempston 22,785; Wootton 7,565; Shortstown
// 4,840; Bromham 4,650; Great Denham 4,360 (Wixams crosses the boundary; not quoted).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BEDFORD', label: 'Bedford', blurb: 'Online coding and Python classes for Bedford, with a project that checks one river gauge against another using a double mass curve.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bedford',
  code: 'bdd',
  accent: '#73127A',
  accentRationale: 'Bedford: a deep mulberry (8.07:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Bedford',
    eyebrow: 'Bedford, Bedfordshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Bedfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Bedfordshire', href: '/coding-classes-in-bedfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bedford, England',
  title: 'Online Coding and Python Classes in Bedford | AI, 6 to 67',
  description: 'Live online coding, Python and AI lessons for Bedford, Kempston, Wootton and Bromham learners from 6 to 67, one-to-one or in small groups. First lesson free.',
  ogDescription: 'Online coding and Python classes for Bedford, and a project that tests one River Great Ouse gauge against another with a double mass curve in Python.',
  twitterDescription: 'Bedford online coding, Python and AI classes for ages 6 to 67. First live lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bedford',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Bedford borough, taught live in English at a suitable level.'
  },

  h1: 'Online coding and Python classes in Bedford',
  capsuleQ: 'What are the best online coding and Python classes for Bedford?',
  capsule: 'Bedford borough had 185,231 residents at the 2021 census, and the Bedford built-up area 97,235, with Kempston next in size at 22,785. The borough skews young: each band from birth to 14 is above the England share, as are adults in their early forties. We run live online lessons in coding, Python, AI and maths for anyone aged 6 to 67, with tutors in India teaching privately or in classes of five to ten at one stage. The opening lesson is free and chooses the course. The Bedford project asks whether a river gauge can be trusted, using its neighbour upstream. Group lessons then cost USD 100 each month and one-to-one lessons USD 150 each month.',
  lead: 'Two Environment Agency gauges watch the Great Ouse, one upstream of Bedford at Newport Pagnell, in Milton Keynes, and one downstream at Roxton, in Bedford borough, just above where the River Ivel joins. Roxton drains 1,660 square kilometres, Newport Pagnell 800. If both gauges measure honestly, their flows should rise and fall together, with Roxton carrying roughly twice as much. But how would you spot the moment a gauge quietly changed, perhaps a weir altered or a new calculation adopted? Hydrologists use a simple, clever picture called a double mass curve. A Bedford learner can draw it in Python from 27 years of data and see why adding things up can reveal what single years hide.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python lesson for a learner in Bedford.',

  picks: {
    eyebrow: 'Bedford starting courses',
    h2: 'Courses Bedford learners begin with',
    intro: 'Choose whatever suits the learner; every course starts with a free live session and needs no payment card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with counters, graphs and simple games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Real Python for younger learners, plus friendly AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the river consistency project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch, through data handling and charts.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bedford borough',
      h2: 'Young families across the borough',
      intro: 'Figures drawn from Nomis for the 2021 census age table, borough against nation.',
      body: [
        { kind: 'table', caption: 'Six age bands for Bedford borough beside England (TS007A, 2021 census)', head: ['Age', 'Bedford count', 'Bedford share', 'England share'], rows: [
          ['Under 5', '11,163', '6.0%', '5.4%'],
          ['5 to 9', '11,742', '6.3%', '5.9%'],
          ['10 to 14', '11,975', '6.5%', '6.0%'],
          ['20 to 24', '9,999', '5.4%', '6.0%'],
          ['40 to 44', '12,954', '7.0%', '6.3%'],
          ['70 to 74', '8,337', '4.5%', '5.0%']
        ] },
        { kind: 'p', text: 'Children and parents in their early forties stand above England, while young adults and people in their early seventies are fewer. Besides Bedford and Kempston, the ONS counts Wootton at 7,565, Shortstown at 4,840, Bromham at 4,650 and Great Denham at 4,360, all inside the borough. Schools here teach the national curriculum for England, and our lessons pause for the holidays you send us.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bedford project',
      h2: 'A double mass curve for the Great Ouse',
      intro: 'Plot running totals against running totals, and look for a bend.',
      body: [
        { kind: 'p', text: 'The learner downloads daily flows for both gauges and keeps only water years where each has at least 360 days of data. That leaves 27 years between 1984 and 2023; many years drop out because one gauge or the other has gaps, which is the first lesson in itself. For each year the program works out the mean flow at each gauge, then keeps a running total of those yearly means. By 2023 the running totals reach 290.0 at Roxton and 142.7 at Newport Pagnell.' },
        { kind: 'table', caption: 'Our Python double mass results, Roxton against Newport Pagnell, 27 water years 1984 to 2023', head: ['Measure', 'Value', 'What it tells us'], rows: [
          ['Slope of running totals', '2.036', 'Roxton carries about twice the flow'],
          ['Ratio of final totals', '2.032', 'Agrees with the slope'],
          ['Ratio of catchment areas', '2.075', 'A sensible physical check'],
          ['Single-year ratio, lowest', '1.718 (2020)', 'One year alone can mislead'],
          ['Single-year ratio, highest', '3.068 (2002)', 'Noise, not necessarily an error'],
          ['Slopes either side of 2002', '2.055 then 1.986', 'A change of about 3 per cent']
        ] },
        { kind: 'p', text: 'Plotted against each other, the two running totals make an almost straight line with a slope of 2.036, very close to the ratio of the catchment areas, 1,660 to 800. That straightness is the point. Individual years swing wildly, from 1.72 times the upstream flow in 2020 to 3.07 in 2002, because rain falls unevenly and groundwater responds slowly. A learner who compared single years would see alarms everywhere. The running totals smooth the noise, so only a lasting change bends the line.' },
        { kind: 'p', text: 'Next the learner hunts for the single most likely bend by fitting two straight lines, trying every possible break year. The strongest split is at 2002, with slopes of 2.055 before and 1.986 after, a change of about 3 per cent. The archive notes that the Roxton record was reprocessed in 2018, and that the station has some artificial influences, so small shifts are expected. The learner reports it carefully: a small bend, worth a question, not proof of a fault. Tests use a made-up pair of gauges where a 10 per cent change is planted in a known year, to check the program finds it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Keep running totals of two dice for twenty throws and plot one against the other.' },
          { h3: 'Ages 11 to 15', p: 'Write the running totals in Python and draw the double mass line.' },
          { h3: 'Ages 15 and up', p: 'Fit two lines, search for the likeliest break, and test with a planted change.' }
        ] },
        { kind: 'callout', h3: 'Agency flows, our curve', p: 'The daily flows come from the Environment Agency hydrology service and the station details from the National River Flow Archive. The running totals, slopes and break search are ours.' }
      ]
    },
    {
      id: 'gauges', tint: 'deep', eyebrow: 'Why two gauges',
      h2: 'Roxton and Newport Pagnell',
      intro: 'Station notes for both gauges, as the flow archive gives them.',
      body: [
        { kind: 'table', caption: 'The two Great Ouse gauges, from the National River Flow Archive', head: ['Detail', 'Roxton (33039)', 'Newport Pagnell Total (33037)'], rows: [
          ['Catchment area', '1,660 square kilometres', '800 square kilometres'],
          ['Mean flow', '11.828 cubic metres per second', '4.956 cubic metres per second'],
          ['How it measures', 'A 26 m flat V Crump weir', 'A main weir and a mill weir together'],
          ['Position', 'Just upstream of the River Ivel confluence', 'Upstream of Bedford, in Milton Keynes'],
          ['Record starts', '1972', '1969'],
          ['Council area', 'Bedford borough', 'Outside Bedford borough']
        ] },
        { kind: 'p', text: 'The same idea checks data far from rivers. Engineers compare two sensors on a machine, accountants compare running totals from two ledgers, and data teams compare a new pipeline against the old one day by day. When two measures should move together, plotting their running totals exposes a drift that daily noise would hide. A Bedford learner who has drawn a double mass curve has a tool for trusting, or questioning, any dataset.' },
        { kind: 'p', text: 'We have no tie to the Environment Agency, the flow archive or the census office. Their measurements remain theirs; responsibility for this curve and its errors rests with us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning stages',
    h2: 'From dice totals to data checks',
    intro: 'Years are only a guide; the free lesson finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Counting games', p: 'Block coding with scores, totals and simple charts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and graphs', p: 'Loops, running totals and first plots.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Real datasets, line fitting and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data skills', p: 'Python and data analysis for adults.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and data quality',
    h2: 'Does an AI check its data before it answers?',
    intro: 'A confident answer built on a drifting record is still wrong.',
    p1: 'Ask a chatbot about a river\'s flow and it will quote a figure. It will not usually ask whether the gauge was moved, rebuilt or recalculated along the way.',
    p2: 'A Bedford learner who has drawn a double mass curve knows how to check whether a record stayed consistent before trusting it.',
    closer: 'Questioning a record before quoting it is exactly why Bedford teenagers should keep up their coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Kempston to Great Denham, one video link',
    intro: 'Everywhere in the borough joins the same way.',
    cells: [
      { h3: 'Student at the keyboard', p: 'The learner types each program; the tutor watches the shared screen and prompts with questions.' },
      { h3: 'Started at the right year', p: 'A Year 5 or a Year 12 begins where their school year and trial point, with their exam board used.' },
      { h3: 'Free trial', p: 'The first full lesson is free and ends with honest advice.' },
      { h3: 'Classmates who match', p: 'A group is five to ten UK learners who have all reached the same point.' },
      { h3: 'Two lessons weekly', p: 'Twice a week in term; nothing in school holidays.' },
      { h3: 'Fixed local time', p: 'UK clock changes move our teachers, not your slot.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Bedford learners at one level, all free at the same time, seldom live nearby. Online, each joins a class at their stage.' }
  },

  fees: {
    h2: 'Bedford fees',
    intro: 'Bedford pays the same fee as families in every country outside India.',
    first: 'A full lesson free, with a clear course suggestion afterwards.',
    group: 'About eight live small-group lessons per month.',
    private: 'About eight live one-to-one lessons per month.',
    closer: 'Fees are in US dollars and never in sterling. Nothing is billed until the trial has settled a course and a weekly time; see the pricing page for holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Google reviews from our learners',

  book: {
    h2: 'Book a free Bedford lesson',
    intro: 'Tell us the learner\'s age or year group and something they like. A trial might be a Scratch counting game, a first Python script, an AI mini-project, or the two-gauge puzzle.',
    success: 'Thank you. Your Bedford request is with us.'
  },

  faq: {
    h2: 'Bedford questions',
    intro: 'Answers on the place, the Great Ouse work and how we teach.',
    items: [
      { q: 'How many people live in Bedford?', a: 'The 2021 census counted 185,231 in Bedford borough, with 97,235 in the Bedford built-up area.' },
      { q: 'Can Bedford learners join coding and Python lessons online?', a: 'Yes. Learners aged 6 to 67 in Bedford, Kempston and nearby villages take live online coding, Python, AI and maths lessons.' },
      { q: 'What is the Great Ouse project?', a: 'Learners compare 27 years of Environment Agency flows at Roxton and Newport Pagnell with a double mass curve in Python.' },
      { q: 'What is a double mass curve?', a: 'A plot of one running total against another; a straight line means the two records stay consistent, and a bend marks a lasting change.' },
      { q: 'Why not just compare single years?', a: 'Single-year ratios swing from 1.72 to 3.07 through weather alone, so running totals are needed to see real changes.' },
      { q: 'Are lessons held in Bedford?', a: 'No, they are online, so Kempston, Wootton, Bromham and the town centre are all covered.' },
      { q: 'Is GCSE and A level support available?', a: 'For maths and computing, yes. We aim at real understanding and make no promises about grades.' },
      { q: 'Which ages do you teach?', a: 'Learners from 6 to 67, adults included.' },
      { q: 'How much are lessons?', a: 'Your trial lesson costs nothing. Group places are USD 100 monthly afterwards; private tuition is USD 150 monthly.' },
      { q: 'Do lessons run in school holidays?', a: 'They stop for the break; just give us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Bedford',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-bedfordshire">Bedfordshire</a> page covers the county, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-northampton">Northampton</a> sizes a reservoir on the Nene, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">East of England</a> page lists the region. Every UK page is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bedford and Bedfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-bedfordshire', label: 'Bedfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bdd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-bdd .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-bdd .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-bdd .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bdd .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-bdd .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bdd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bdd .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bdd .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bdd .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bedford (E06000055). Nomis Census 2021 TS007A: total 185,231; under 5 11,163 (6.0%, England 5.4%); 5 to 9 11,742 (6.3%, 5.9%); 10 to 14 11,975 (6.5%, 6.0%); 20 to 24 9,999 (5.4%, 6.0%); 40 to 44 12,954 (7.0%, 6.3%); 70 to 74 8,337 (4.5%, 5.0%). ONS 2021 BUAs: Bedford 97,235; Kempston 22,785; Wootton 7,565; Shortstown 4,840; Bromham 4,650; Great Denham 4,360. EA Hydrology daily mean flow, Roxton (postcodes.io MK44 3EN, Bedford, Roxton parish) and Newport Pagnell Total. NRFA 33039 Roxton: 1660.0 km2, mean 11.828, "Flat V Crump profile weir (26m broad)", "immediately u/s of confluence with R. Ivel". NRFA 33037 Newport Pagnell Total: 800.0 km2, mean 4.956, "Compound site of main weir and mill weir".',
    localProject: 'Double mass curve: 27 paired water years 1984 to 2023 (360+ days at both); running totals 290.0 and 142.7; slope 2.036; ratio of totals 2.032; area ratio 2.075; single-year ratio 1.718 (2020) to 3.068 (2002); best break 2002, slopes 2.055 then 1.986. Lesson family: double mass curve, consistency checking.',
    requiredMentions: [
      '97,235',
      'Kempston',
      'Wootton',
      'Great Denham',
      'Roxton',
      'Newport Pagnell',
      'double mass',
      '185,231',
      'Ivel'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Bedford and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Environment Agency hydrology data, Roxton and Newport Pagnell Total daily mean flows.', url: 'https://environment.data.gov.uk/hydrology/' },
      { claim: 'National River Flow Archive, stations 33039 and 33037.', url: 'https://nrfa.ceh.ac.uk/data/station/info/33039' }
    ],
    rejectedClaims: [
      'High-flow peaks and flood events: not discussed; Roxton high flows are flagged Suspect.',
      'That the 2002 bend is a gauge fault: not claimed; reported as a small change worth a question.',
      'Wixams built-up area: crosses the boundary, not quoted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
