'use strict';
// Northampton (cg- town page, UK cluster Phase 8, towns band A, row 329). Keyword slug per the owner's 2026-09-27
// instruction. Spine: how big a reservoir would the Nene need? Anchors (read raw 27 September 2026): EA Hydrology API
// station "Upton Mill Total" (361104f3-589a-457f-aa4e-0a99257c6431; lat 52.225335, long -0.944102; opened 1939-11-01),
// daily mean flow; postcodes.io nearest NN4 9QL and NN4 9FF, both West Northamptonshire. NRFA station 32006 "Nene/Kislingbury
// at Upton Total": catchment 223.0 km2; gdf-mean-flow 1.482; "Compound site of main channel and bypass channel with long POR
// gauging a rural catchment on clay, with some artificial influences"; "Main channel flow measured in 3.2m wide standing wave
// flume under mill. Flow in bypass channel measured at Crump profile weir (crest 6.12m) since 1969 and flows summed to
// produce total"; "No major abstractions but several sewage work effluent returns"; catchment "Mostly clay".
// Our run (scratchpad nth2/sp.py, 27 September 2026): water years 1941 to 2021 (1940-10-01 to 2021-09-30), 29,585 days, 4
// one- or two-day gaps filled by straight-line interpolation (1995-08-01/02, 1998-04-10, 2012-11-25); the 103-day gap in
// 2022 is why the run stops at 2021. Mean 1.456 m3/s. Sequent peak storage for a steady draft (million m3):
// 50% of mean 19.82 (critical 1943-04-02 to 1944-11-06), 70% 43.11 (1942-04-13 to 1946-11-13), 90% 120.11 (1942-03-28 to
// 1965-11-17). WY1992 to 2021 only (mean 1.563): 50% 12.74, 70% 33.11, 90% 59.05 (critical 1995 to 1997). Worst single
// water year only (WY1944): 50% 13.21, 70% 22.42, 90% 31.63.
// Lesson family: reservoir storage-yield by the sequent peak algorithm (running deficit, reset at zero, maximum), record
// length and critical period; screened (sequent peak, mass curve, reservoir storage, Rippl: 0 hits). The lift tower is the
// Northamptonshire page anchor and is not reused. No claim is made about any real reservoir or water company.
// Place facts: Nomis Census 2021 TS007A, West Northamptonshire E06000062: total 425,725; 5 to 9 26,379 (6.2%; England 5.9%);
// 10 to 14 26,866 (6.3%; 6.0%); 20 to 24 24,155 (5.7%; 6.0%); 40 to 44 28,518 (6.7%; 6.3%); 45 to 49 28,796 (6.8%; 6.4%); 85+
// 8,786 (2.1%; 2.4%). ONS 2021 BUAs wholly in West Northamptonshire: Northampton 243,520; Daventry 27,790; Brackley 16,190;
// Towcester 11,330; Brixworth 5,770.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NORTHAMPTON', label: 'Northampton', blurb: 'Coding and AI classes for Northampton, with a project that sizes an imaginary reservoir on the River Nene from 81 years of flows.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-northampton',
  code: 'nhp',
  accent: '#56325C',
  accentRationale: 'Northampton: a dark heather plum (8.43:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Northampton',
    eyebrow: 'Northampton, Northamptonshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Northamptonshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Northamptonshire', href: '/coding-classes-in-northamptonshire' },
    { label: 'East Midlands', href: '/coding-and-ai-classes-in-east-midlands' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Northampton, England',
  title: 'Coding and AI Classes in Northampton | Online Python, 6 to 67',
  description: 'Online coding, AI and Python classes for Northampton, Daventry, Towcester and Brackley, ages 6 to 67, taught live in small groups or one-to-one. First lesson free.',
  ogDescription: 'Live online coding and AI classes for Northampton, and a Python project that sizes a reservoir on the River Nene with the sequent peak algorithm.',
  twitterDescription: 'Northampton coding, AI and Python classes online for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Northampton',
    description: 'Online coding, AI, Python and mathematics for children, teenagers and adults in Northampton and West Northamptonshire, taught live at the right level.'
  },

  h1: 'Coding and AI classes in Northampton',
  capsuleQ: 'Where can Northampton families find the best coding and AI classes?',
  capsule: 'The 2021 census put West Northamptonshire at 425,725 people, with 243,520 of them in the Northampton built-up area. Its age profile tilts to families, with children aged 5 to 14 and adults aged 40 to 49 above the England share. Northampton learners from 6 to 67 study coding, AI, Python and maths with our India-based tutors over live video, one-to-one or in groups of five to ten at a single stage. A free opening lesson points to the right course. The Northampton project turns 81 years of River Nene flows into an engineering answer. After the trial, a group place costs USD 100 a month and a private tutor USD 150 a month.',
  lead: 'Since November 1939 the River Nene has been measured every day at Upton Mill, on the Kislingbury branch in West Northamptonshire, where a flume under the mill and a weir on the bypass channel are added together to give the total flow. That record now holds more than 80 years of wet winters and dry summers. Here is an engineer\'s question a teenager can answer with it: if you wanted to take a steady flow from this river, every single day, how large a reservoir would you need to keep it going through the dry spells? The answer comes from a short algorithm called the sequent peak method, and it holds two surprises about how much history you need to look at.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or AI lesson for a Northampton learner.',

  picks: {
    eyebrow: 'Course picks',
    h2: 'First courses Northampton learners choose',
    intro: 'Go by age and interest. Every course begins with a free live lesson, and you will not be asked for card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with water tanks, levels and simple simulations.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Beginner Python and first AI experiments.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teens, where the Nene reservoir project sits.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from the very start, through to real data analysis.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'West Northamptonshire',
      h2: 'Families at the centre',
      intro: 'Six bands for West Northamptonshire from census table TS007A (2021), via Nomis, each beside England.',
      body: [
        { kind: 'table', caption: 'Selected ages, West Northamptonshire against England (TS007A, 2021)', head: ['Age band', 'West Northants people', 'West Northants %', 'England %'], rows: [
          ['5 to 9', '26,379', '6.2%', '5.9%'],
          ['10 to 14', '26,866', '6.3%', '6.0%'],
          ['20 to 24', '24,155', '5.7%', '6.0%'],
          ['40 to 44', '28,518', '6.7%', '6.3%'],
          ['45 to 49', '28,796', '6.8%', '6.4%'],
          ['85 and over', '8,786', '2.1%', '2.4%']
        ] },
        { kind: 'p', text: 'School-age children and their parents in their forties are above the national share, and the oldest residents a little below. Beyond Northampton, the ONS lists Daventry at 27,790, Brackley at 16,190, Towcester at 11,330 and Brixworth at 5,770, all inside West Northamptonshire. Learners here follow the national curriculum for England; our timetable simply skips the holiday weeks you give us.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire</a> page covers both councils, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Northampton project',
      h2: 'Sizing a reservoir on the Nene',
      intro: 'A running deficit that never goes below zero, and the largest value it ever reaches.',
      body: [
        { kind: 'p', text: 'The learner downloads the Environment Agency\'s daily flows for Upton Mill and keeps 81 complete water years, October 1940 to September 2021; a long gap in 2022 is why the run stops there, and four missing days elsewhere are filled by drawing a straight line. The average flow is 1.456 cubic metres per second. The sequent peak algorithm then walks through the days one by one, adding the shortfall whenever the river gives less than the steady amount we want to take, subtracting the surplus when it gives more, and never letting the running total fall below zero. The largest total it ever reaches is the storage a reservoir would need.' },
        { kind: 'table', caption: 'Our sequent peak storage for a steady draft from the Nene at Upton, million cubic metres', head: ['Steady draft', 'Full record, 81 years', 'Last 30 years only', 'Worst single year only'], rows: [
          ['50% of mean flow', '19.82', '12.74', '13.21'],
          ['70% of mean flow', '43.11', '33.11', '22.42'],
          ['90% of mean flow', '120.11', '59.05', '31.63']
        ] },
        { kind: 'p', text: 'The first surprise is the critical period. For a draft of 70 per cent of the average, the worst stretch runs from April 1942 to November 1946, more than four years in which the storage kept falling overall. Asking the program only for the worst single water year gives 22.42 million cubic metres, barely half the true 43.11. Dry years that follow one another are what empty reservoirs, and a year-by-year view cannot see them. At 90 per cent, the critical period runs for more than 23 years.' },
        { kind: 'p', text: 'The second surprise is record length. Using only the last 30 years, a common window for climate averages, the answer at 70 per cent falls to 33.11, because the dry 1940s are left out. Neither number is dishonest, but a design built on the shorter one would have failed in a repeat of the 1940s. The learner tests the function on a tiny invented river where the answer can be worked out on paper, then prints each result with its critical dates. The archive notes treated sewage returns upstream, so the record is not a purely natural river, and our reservoir is imaginary.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fill and empty a jug from a bowl each day using a dice for rain, and record the lowest level.' },
          { h3: 'Ages 11 to 15', p: 'Write the running deficit in Python and find the largest value.' },
          { h3: 'Ages 15 and up', p: 'Compare record lengths, find critical periods and plot storage against draft.' }
        ] },
        { kind: 'callout', h3: 'Agency flows, our reservoir', p: 'The daily flows come from the Environment Agency hydrology service and the station description from the National River Flow Archive. The reservoir, the algorithm run and every storage figure are ours.' }
      ]
    },
    {
      id: 'upton', tint: 'deep', eyebrow: 'Why Upton Mill',
      h2: 'A gauge with an 80-year memory',
      intro: 'Station 32006 as the flow archive describes it.',
      body: [
        { kind: 'table', caption: 'Nene/Kislingbury at Upton Total, National River Flow Archive', head: ['Detail', 'Recorded'], rows: [
          ['Station', '32006, Nene/Kislingbury at Upton Total'],
          ['Record starts', '1 November 1939'],
          ['Catchment area', '223.0 square kilometres, mostly clay'],
          ['How flow is measured', 'A 3.2 m standing wave flume under the mill, plus a Crump weir on the bypass since 1969, summed'],
          ['Mean flow', '1.482 cubic metres per second'],
          ['Influences', 'No major abstractions but several sewage works effluent returns']
        ] },
        { kind: 'p', text: 'Running totals that reset at zero appear throughout computing. Buffering in video streaming, stock control in warehouses, battery sizing for solar power and memory management all ask the same question: what is the largest backlog this system will ever have to hold? A Northampton learner who has sized a reservoir from 81 years of Nene data knows to look for the longest bad run, not the worst single day.' },
        { kind: 'p', text: 'We are an independent teaching company, unrelated to the Environment Agency, the flow archive or the census office. Their measurements stay theirs, while this imaginary reservoir, errors included, belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From jugs and dice to engineering models',
    intro: 'Years are a rough guide; the trial settles where to start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Levels and loops', p: 'Block coding with counters that rise and fall.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python totals', p: 'Loops, running totals and simple data in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and AI', p: 'Simulations, data and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Working with data', p: 'Adult Python and data analysis.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and design',
    h2: 'Would an AI look far enough back?',
    intro: 'An answer is only as good as the history it sees.',
    p1: 'Ask a chatbot how large a reservoir a small river needs and it may reason from an average year, or from whatever figures it happens to recall. It rarely asks how many dry years can come in a row.',
    p2: 'A Northampton learner who has run the sequent peak method on 81 years asks which period the answer rests on.',
    closer: 'Asking how many years sit behind a number is exactly the habit that makes code worth learning for Northampton teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'Daventry to Towcester, all live online',
    intro: 'Anywhere in West Northamptonshire joins the same way.',
    cells: [
      { h3: 'The learner types', p: 'All code is written by the student; the tutor reads along on the shared screen and asks guiding questions.' },
      { h3: 'Right year, right start', p: 'Year 6 or Year 12, each learner starts where their year and trial indicate, with their exam board named.' },
      { h3: 'First lesson on us', p: 'The trial is free and ends with a straight recommendation.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at one level, gathered from around the UK.' },
      { h3: 'Two per week', p: 'Two weekly lessons during term time; holidays stay free.' },
      { h3: 'Time that stays put', p: 'UK clock changes are absorbed by our teachers, so your lesson hour is unchanged.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Northampton learners at one level, free at the same hour, rarely live close together. Online groups give each the right class.' }
  },

  fees: {
    h2: 'Fees for Northampton',
    intro: 'Northampton families pay the fee we use in all countries outside India.',
    first: 'A full lesson free, with a clear recommendation afterwards.',
    group: 'Around eight live lessons a month in a small group.',
    private: 'Around eight live one-to-one lessons a month.',
    closer: 'Prices are set in US dollars and never in sterling. You are not billed until the trial has agreed a course and a weekly time; the pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Northampton and beyond: Google reviews',

  book: {
    h2: 'Book a free Northampton lesson',
    intro: 'Send the learner\'s age, or year group, and a subject or hobby they like. A trial might be a Scratch water-tank game, a first Python script, an AI project, or the Nene reservoir puzzle.',
    success: 'Thank you. Your Northampton request has reached us.'
  },

  faq: {
    h2: 'Northampton questions',
    intro: 'The area, the river project and practical points.',
    items: [
      { q: 'What is the population of Northampton?', a: 'The ONS gives 243,520 for the Northampton built-up area in 2021; West Northamptonshire as a whole had 425,725.' },
      { q: 'Are your coding and AI lessons open to Northampton learners online?', a: 'Certainly. From Brixworth to Brackley, anyone between 6 and 67 can take our live online lessons in coding, AI, Python and maths.' },
      { q: 'What is the River Nene project?', a: 'Learners use 81 years of Environment Agency flows from Upton Mill and the sequent peak algorithm to size an imaginary reservoir.' },
      { q: 'What is the sequent peak algorithm?', a: 'A running total of shortfalls that resets at zero; its largest value is the storage needed to keep a steady supply going.' },
      { q: 'Why does the answer change with the years used?', a: 'Using only the last 30 years leaves out the dry 1940s and cuts the storage needed at 70 per cent of mean flow from 43.11 to 33.11 million cubic metres.' },
      { q: 'Where are lessons held?', a: 'Online, so Daventry, Brackley, Towcester and Northampton are all equally close.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing, aiming for understanding; we never promise grades.' },
      { q: 'Which ages do you teach?', a: 'Every age from 6 to 67, adults included.' },
      { q: 'What does it cost?', a: 'You pay nothing for the trial. After that it is USD 100 monthly in a group, or USD 150 monthly for private tuition.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes. Share your dates and we stop for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages near Northampton',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire</a> page covers the county, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-loughborough">Loughborough</a> counts high flows on the Soar, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Northampton and Northamptonshire',
  footerPlaces: [
    { href: '/coding-classes-in-northamptonshire', label: 'Northamptonshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-nhp .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.6rem); }
.cg-root.cg-nhp .cg-hero h1 { font-weight: 730; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-nhp .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-nhp .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nhp .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-nhp .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-nhp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nhp .cg-table th { letter-spacing: 0.04em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-nhp .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-nhp .cg-callout { border-left-width: 5px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Northamptonshire (E06000062). Nomis Census 2021 TS007A: total 425,725; 5 to 9 26,379 (6.2%, England 5.9%); 10 to 14 26,866 (6.3%, 6.0%); 20 to 24 24,155 (5.7%, 6.0%); 40 to 44 28,518 (6.7%, 6.3%); 45 to 49 28,796 (6.8%, 6.4%); 85+ 8,786 (2.1%, 2.4%). ONS 2021 BUAs: Northampton 243,520; Daventry 27,790; Brackley 16,190; Towcester 11,330; Brixworth 5,770. EA Hydrology Upton Mill Total daily mean flow (postcodes.io nearest NN4 9QL, West Northamptonshire). NRFA 32006 Nene/Kislingbury at Upton Total: catchment 223.0 km2; mean 1.482; start 1939-11-01; flume under mill plus Crump weir on bypass since 1969, summed; "No major abstractions but several sewage work effluent returns".',
    localProject: 'Sequent peak storage (million m3), WY1941 to 2021 (4 short gaps interpolated; 2022 gap excluded), mean 1.456: 50% 19.82, 70% 43.11 (critical 1942-04 to 1946-11), 90% 120.11 (1942 to 1965). WY1992 to 2021: 12.74, 33.11, 59.05. Worst single water year (1944): 13.21, 22.42, 31.63. Lesson family: storage-yield by sequent peak, critical period, record length.',
    requiredMentions: [
      '243,520',
      'Daventry',
      'Brackley',
      'Towcester',
      'Kislingbury',
      'Upton Mill',
      'sequent peak',
      '425,725',
      '43.11'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, West Northamptonshire and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Environment Agency hydrology data, Upton Mill Total daily mean flow.', url: 'https://environment.data.gov.uk/hydrology/' },
      { claim: 'National River Flow Archive, station 32006 Nene/Kislingbury at Upton Total.', url: 'https://nrfa.ceh.ac.uk/data/station/info/32006' }
    ],
    rejectedClaims: [
      'Any real reservoir, water company or supply plan: not claimed; the reservoir is imaginary.',
      'Express Lift Tower: the Northamptonshire page anchor; not reused.',
      'Drought impacts and hosepipe bans: not mentioned.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
