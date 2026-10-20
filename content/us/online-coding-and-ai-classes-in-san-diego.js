'use strict';
// San Diego (cg- metro page, US cluster Phase 5, row 118). Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md.
// Spine: live online coding and AI classes for San Diego students, with a project on the City's traffic count data:
// some street segments were counted several times, so students keep the latest count per location before ranking.
// Sources read raw on 18 October 2026 (copies in keyword-research-2026-09/us/src/online-coding-and-ai-classes-in-san-diego/):
//  - City of San Diego Open Data, "Traffic Counts" (publisher Transportation Department, licence ODC PDDL via
//    opendefinition.org/licenses/odc-pddl, "Date Issued May 17, 2016", page says "Last Updated Apr 1, 2023"): "The census
//    count of vehicles on city streets is normally reported in the form of Average Daily Traffic (ADT) counts. These
//    counts provide a good estimate for the actual number of vehicles on an average weekday at select street segments.";
//    "This report covers the counts taken in our City during the past 12 years approximately."
//  - Our counts from traffic_counts_datasd.csv (seshat.datasd.org), 18 October 2026 (ours): 2,594 rows; dates
//    2023-01-04 to 2026-09-24 (2023 469, 2024 1,270, 2025 525, 2026 330); 2,436 distinct location strings; 118 counted
//    more than once, up to 5 times; adt_ab plus adt_ba equals adt_total on every row; latest count per location: median
//    3,426.5, highest N Harbor Dr btwn Harbor Island Dr & Spanish Landing 91,208 (2024-06-25), then N Harbor Dr btwn
//    Laurel St & Coast Guard Gt 87,458, Fairmount Ave btwn Montezuma Rd & Camino del Rio S 80,643.
//  - geo.sandag.org (where the City's GIS downloads are hosted) returned 403; not retried, so no GIS dataset is used.
//  - Code.org (2025), 2025 State of AI + CS Education, Most Recent Access Data: National* 14,805 of 24,405 (60%),
//    "Combined Years"; California latest value 58.1% (1,325 of 2,282, "School Course Catalogs and Teacher Surveys"),
//    year withheld because the tabs disagree.
//  - cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) could not be read; not retried.
//  - IANA tzdb: America/Los_Angeles; Rule US 2007 max Mar Sun>=8, Nov Sun>=1.
// Lesson family: de-duplicating repeated measurements by keeping the latest per key, then ranking.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  clusterName: 'United States',
  hub: { group: 'city', tag: 'SAN DIEGO', label: 'San Diego', blurb: 'Live online coding and AI classes for San Diego students, with a busiest-street project on the City&rsquo;s traffic counts.' },
  market: US,
  slug: 'online-coding-and-ai-classes-in-san-diego',
  code: 'ais',
  accent: '#801F2F',
  accentRationale: 'San Diego: #801F2F, the allocated deep garnet, darker and cooler than the Los Angeles terracotta so the two California pages read apart, contrast-safe on every paper',
  pageType: 'city',
  place: {
    name: 'San Diego',
    eyebrow: 'San Diego, California',
    schemaType: 'City',
    chain: [
      { type: 'State', name: 'California' },
      { type: 'Country', name: 'United States' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-united-states', name: 'United States' },
    { slug: 'coding-classes-in-california', name: 'California' }
  ],
  nav: [
    { label: 'United States', href: '/coding-classes-in-united-states' },
    { label: 'California', href: '/coding-classes-in-california' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'San Diego',
  title: 'Online Coding and AI Classes in San Diego | Live, Pacific Time',
  description: 'Live online coding and AI classes for San Diego students, from Scratch to Python and machine learning, with a project ranking city streets by traffic counts.',
  ogDescription: 'San Diego students learn coding and AI live online, then clean 2,594 City traffic counts to find the busiest street segment, keeping only the latest count per location.',
  twitterDescription: 'Live coding and AI classes for San Diego students, with a City traffic data project.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '18 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for San Diego Students',
    description: 'Scratch, Python, web development, data science and AI for San Diego students from elementary school through high school, taught live online in small level-matched groups or one to one.'
  },

  h1: 'Online coding and AI classes for San Diego students',
  capsuleQ: 'Can San Diego students take live coding and AI classes online?',
  capsule: 'Yes. Modern Age Coders teaches San Diego students live online on Pacific Time, from Scratch at age 6 to Python, data science and AI for teens, in groups of fifteen to twenty at one level or privately. The first class is free. Our San Diego project ranks the city&rsquo;s busiest street segments from the Transportation Department&rsquo;s own traffic counts.',
  lead: 'San Diego families tend to protect their afternoons: there is the beach, the practice field, the drive up the 5. A class that runs at the kitchen table fits around all of that, provided the teaching is real. Below is what our students actually do with data the City of San Diego publishes, how class times work on Pacific Time, and the one published figure we can give on computer science in California high schools.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI class for a student in San Diego.',

  picks: {
    eyebrow: 'Course picks for San Diego',
    h2: 'Four courses most San Diego students start with',
    intro: 'Ages are guides. The free class looks at what a student can already do and recommends from there.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 11', note: 'Games and animations in Scratch, built in stages and shown to the class when finished.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 17', note: 'A full grounding in Python, including the dictionaries and sorting the traffic project needs.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Real datasets cleaned, summarised and charted in pandas, with every step explained.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 14 to 18', note: 'Machine learning built from the ground up in Python, then tested on data it has not seen.' }
    ]
  },

  sections: [
    {
      id: 'traffic', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which San Diego street is busiest? Cleaning the City&rsquo;s traffic counts first',
      intro: 'The City of San Diego Transportation Department publishes its Average Daily Traffic counts, one row per count. Some streets were counted more than once, so a naive ranking would mix old and new measurements.',
      body: [
        { kind: 'table', caption: 'Highest Average Daily Traffic, keeping only the latest count for each location (our calculation from the City&rsquo;s Traffic Counts CSV, downloaded 18 October 2026)', head: ['Street segment (as written in the data)', 'Latest ADT total', 'Count date'], rows: [
          ['N Harbor Dr btwn Harbor Island Dr &amp; Spanish Landing', '91,208', '2024-06-25'],
          ['N Harbor Dr btwn Laurel St &amp; Coast Guard Gt', '87,458', '2024-06-27'],
          ['Fairmount Ave btwn Montezuma Rd &amp; Camino del Rio S', '80,643', '2024-05-01']
        ] },
        { kind: 'table', mt: true, caption: 'What the file contains (our counts)', head: ['Check', 'Result'], rows: [
          ['Rows', '2,594'],
          ['Earliest and latest count date', '2023-01-04 and 2026-09-24'],
          ['Distinct location strings', '2,436'],
          ['Locations counted more than once', '118, some up to 5 times'],
          ['Rows where both directions add up to the total', 'all 2,594'],
          ['Median of the latest count per location', '3,426.5 vehicles']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Spot the repeats', p: 'Counting rows per location shows 118 locations appearing more than once. Three short streets near Kettner Boulevard were each counted five times; the file does not say why.' },
          { h3: 'Keep the newest', p: 'A dictionary keyed by location holds one row each; a new row replaces the stored one only if its date is later. ISO dates such as 2024-06-25 compare correctly even as text, which students verify rather than assume.' },
          { h3: 'Check the arithmetic', p: 'Each row splits traffic into two directions. Adding adt_ab and adt_ba and comparing with adt_total is a cheap test that the file is internally consistent, and on this download it passes on every row.' }
        ] },
        { kind: 'p', text: 'The project then turns into a reading exercise. The City&rsquo;s description says ADT counts give a good estimate for the actual number of vehicles on an average weekday at select street segments, and that segments are chosen to represent a longer stretch of the same road. So the top of our table means &ldquo;the busiest counted segments&rdquo;, not the busiest roads in San Diego. Freeways, which the City does not count here, are missing entirely.' },
        { kind: 'p', text: 'The description also says the report covers roughly the past 12 years, yet every row in our download falls between January 2023 and September 2026, and the page lists a last update of April 1, 2023 while holding counts from 2026. Students note both mismatches in their write-up. Documentation drifts away from data all the time, and an analyst who reads only one of them will eventually be caught out.' },
        { kind: 'callout', h3: 'Ours, not the City&rsquo;s', p: 'The rankings and counts on this page are ours, computed from one download on 18 October 2026. The City publishes the file under the Open Data Commons Public Domain Dedication and License; location strings are printed exactly as the file spells them.' }
      ]
    },
    {
      id: 'california', tint: 'tint', eyebrow: 'California numbers',
      h2: 'California high school computer science, against the national figure',
      intro: 'One comparison from a single published dataset.',
      body: [
        { kind: 'p', text: 'The same spreadsheet gives both numbers. Code.org (2025). 2025 State of AI + CS Education shows 60% of US high schools offering computer science nationally, 14,805 of 24,405 across combined years, and a most recent California value of 58.1%, slightly under the national share. The California figure comes from school course catalogs and teacher surveys, and its school year is labelled differently on two tabs, so we print no year. The California Department of Education site was unreadable to us on 18 October 2026, so no state rule appears here; the statewide overview is on our <a class="cg-inline-link" href="/coding-classes-in-california">California page</a>.' },
        { kind: 'p', text: 'Neither number says what a particular San Diego campus teaches this year, or whether a ninth grader can get into the course. That local detail is usually where an outside class earns its place.' }
      ]
    },
    {
      id: 'time', tint: '', eyebrow: 'Class times',
      h2: 'Pacific Time, the San Diego way',
      intro: 'Teachers are based in India. Families see and book times in Pacific Time only.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'You choose', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
          { h3: 'Half-hour offset', p: 'India runs on a half-hour offset, so the gap to San Diego is 12.5 hours during daylight time and 13.5 hours during standard time.' },
          { h3: 'Two Sundays', p: 'Standard time starts on Sunday, November 1, 2026, and daylight time on Sunday, March 14, 2027. Our reminders go out the week before.' }
        ] },
        { kind: 'spec', title: 'Dates and zones in one project', p: 'The traffic file stores plain dates. Students who later add times of day must attach a zone, and the IANA database gives San Diego the identifier America/Los_Angeles, shared with every Pacific city in California.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'Scratch at seven to machine learning at seventeen',
    intro: 'The teacher recommends a rung after the free class. Students move up on evidence, not on birthdays.',
    cols: [
      { band: 'Ages 6 to 8', h3: 'Blocks', p: 'Sequences, loops and events in a visual editor.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 11', h3: 'Games', p: 'Scratch and first Python games with scores and levels.', courses: ['scratch-programming-complete-course', 'python-ai-kids-masterclass'] },
      { band: 'Ages 12 to 15', h3: 'Code and data', p: 'Python, dictionaries and files, then the traffic project.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 15 to 18', h3: 'AI and the web', p: 'Machine learning and full web apps, with honest evaluation.', courses: ['ai-ml-masterclass-teens', 'full-stack-web-development-teens-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'AI and judgment',
    h2: 'Coding in San Diego when AI can write the code',
    intro: 'AI tools make cleaning data faster. They do not decide what clean means.',
    p1: 'Hand the raw traffic file to an AI assistant and ask for the busiest street, and it may return a confident ranking that mixes counts taken years apart. It is unlikely to point out, unprompted, that the description promises twelve years of data while the file holds less than four. Noticing that takes someone who has looked.',
    p2: 'So our teens write the de-duplication themselves before they ever ask an AI tool to speed it up, and they use such tools only within the provider&rsquo;s age rules. The goal is a student who can tell a correct answer from a plausible one.',
    closer: 'Machine learning is mostly data work, and data work is mostly deciding which rows to trust.',
    blogAnchor: 'is coding worth learning now'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Point Loma to Rancho Bernardo, one class',
    intro: 'San Diego is a large city to drive across; a live online class is not.',
    cells: [
      { h3: 'No commute', p: 'Students in Point Loma and Rancho Bernardo can share a group, each joining from their own room.' },
      { h3: 'Live help', p: 'The teacher watches each student&rsquo;s shared screen and asks questions until the student finds the bug.' },
      { h3: 'Free first class', p: 'A real coding task, a short talk with the parent, and a clear recommendation. No card at this stage.' },
      { h3: 'Groups by level', p: 'Fifteen to twenty students working at the same stage, from San Diego and around the country.' },
      { h3: 'Private lessons', p: 'One teacher for one student, timed around sports, surf or a part-time job.' },
      { h3: 'Fits the school year', p: 'Teachers plan by US grade and school calendar, and never complete graded schoolwork for a student.' }
    ],
    spec: { title: 'Online only', p: 'There is no Modern Age Coders location in San Diego and none is claimed. All teaching is live online from India; a student needs a computer, a headset and reliable internet.' }
  },

  fees: {
    h2: 'What San Diego families pay',
    intro: 'Free to start, then one of two monthly options.',
    first: 'A full first class with a teacher, free, ending with a suggested course and time.',
    group: 'A month of live classes in a group of fifteen to twenty students at one level.',
    private: 'A month of one-to-one classes, at times that suit the student.',
    closer: 'San Diego families pay in US dollars, at the same rate as any family in the United States. We bill only after the free class, once course and schedule are agreed; details on breaks are on the pricing page.'
  },

  reviewsH2: 'Reviews left on Google by families',

  book: {
    h2: 'Book a free class in San Diego',
    intro: 'Tell us the student&rsquo;s age and goal. Younger students start with blocks; teens with some Python might start on the traffic file.',
    success: 'Thank you. We will be in touch soon to set up a free class for your San Diego student.'
  },

  faq: {
    h2: 'San Diego family questions',
    intro: 'Short answers for San Diego parents and students.',
    items: [
      { q: 'Do you teach in person in San Diego?', a: 'No. Students join a live teacher over video from home, wherever they are in the city or county.' },
      { q: 'What ages do you teach?', a: 'From about six with block coding, through Python in the tweens, to data science and AI courses for teens.' },
      { q: 'When do classes run?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience. All times are in Pacific Time.' },
      { q: 'What is the traffic count project?', a: 'Students take the City of San Diego Traffic Counts file, keep the latest count for each location, check that the two directions add up, and rank the busiest counted segments.' },
      { q: 'Is the busiest segment on this page the busiest road in San Diego?', a: 'No. It is the busiest of the segments the City counted in our download. Freeways and uncounted streets are not in the file.' },
      { q: 'What does California require in computer science?', a: 'This page states no rule, because the California Department of Education site refused our direct reading on 18 October 2026. Our California page has the statewide picture.' },
      { q: 'Are AI assistants allowed in teen classes?', a: 'Later in a course, yes, as a way to work faster on code a teen already understands, and never a tool below the minimum age its maker sets.' },
      { q: 'How many students are in a group?', a: 'Fifteen to twenty, all at a similar level. Private one-to-one classes are the alternative.' },
      { q: 'Is there AP Computer Science preparation?', a: 'There is, for AP Computer Science A and for Principles, taken alongside the school course. Graded school work remains the student\'s own.' },
      { q: 'Are you connected with the City of San Diego?', a: 'No. Teaching with a public City file gives us no link to the City of San Diego, its Transportation Department or any school district.' }
    ]
  },

  next: {
    eyebrow: 'Read next',
    h2: 'More for San Diego students',
    html: 'For the state as a whole, see <a class="cg-inline-link" href="/coding-classes-in-california">coding classes in California</a>. Data-minded teens can read <a class="cg-inline-link" href="/ai-projects-for-high-school-students">AI projects for high school students</a>, and builders can look at <a class="cg-inline-link" href="/hackathons-for-high-school-students">hackathons for high school students</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'San Diego and the US',
  footerPlaces: [
    { href: '/coding-classes-in-united-states', label: 'United States hub' },
    { href: '/coding-classes-in-california', label: 'California' },
    { href: '/hackathons-for-high-school-students', label: 'High school hackathons' },
    { href: '/ai-projects-for-high-school-students', label: 'AI projects for teens' }
  ],

  personalityCss: `
.cg-root.cg-ais .cg-hero h1 { font-weight: 740; letter-spacing: -0.024em; line-height: 1.07; max-width: 20ch; }
.cg-root.cg-ais .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding-top: 0.8rem; padding-bottom: 0.8rem; }
.cg-root.cg-ais .cg-eyebrow { letter-spacing: 0.11em; font-size: 0.79rem; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ais .cg-section-head h2 { max-width: 29ch; }
.cg-root.cg-ais .cg-table caption { text-align: left; font-weight: 700; letter-spacing: 0.01em; }
.cg-root.cg-ais .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ais .cg-grid-3 { gap: clamp(0.85rem, 2.3vw, 1.75rem); }
.cg-root.cg-ais .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-ais .cg-faq-item h3 { letter-spacing: -0.005em; }
`,

  dossier: {
    curriculumAuthority: 'California, 18 October 2026: cde.ca.gov (WAF redirect) and leginfo.legislature.ca.gov (403) unreadable, so no state rule is quoted; Code.org (2025) Most Recent Access Data: National 14,805 of 24,405 (60%, combined years) and California 58.1% (School Course Catalogs and Teacher Surveys), California year withheld because the tabs disagree. IANA America/Los_Angeles and the US DST rule.',
    localProject: 'City of San Diego Open Data, Traffic Counts (Transportation Department, ODC PDDL, issued May 17, 2016), traffic_counts_datasd.csv downloaded 18 October 2026: 2,594 rows dated 2023-01-04 to 2026-09-24; 2,436 locations, 118 counted more than once (up to 5); adt_ab plus adt_ba equals adt_total on all rows; latest-per-location median 3,426.5; top N Harbor Dr (Harbor Island Dr to Spanish Landing) 91,208, N Harbor Dr (Laurel St to Coast Guard Gt) 87,458, Fairmount Ave 80,643. Description says roughly 12 years; page says last updated April 1, 2023. All counts ours. Lesson family: de-duplicating repeated measurements by keeping the latest per key, then ranking.',
    requiredMentions: [
      '91,208',
      '87,458',
      '80,643',
      '2,594',
      '2,436',
      '118 locations appearing more than once',
      '3,426.5 vehicles',
      'average weekday at select street segments',
      'roughly the past 12 years',
      'Kettner Boulevard'
    ],
    sources: [
      { claim: 'City of San Diego Open Data: Traffic Counts dataset page (description, publisher, licence, dates).', url: 'https://data.sandiego.gov/datasets/traffic-adt-counts/' },
      { claim: 'City of San Diego: traffic_counts_datasd.csv used for our counts.', url: 'https://seshat.datasd.org/traffic_adt_counts/traffic_counts_datasd.csv' },
      { claim: 'Open Data Commons Public Domain Dedication and License, as linked from the dataset page.', url: 'https://opendefinition.org/licenses/odc-pddl/' },
      { claim: 'Code.org (2025), State of AI + CS Education data: national and California high school access.', url: 'https://advocacy.code.org/report-data/' },
      { claim: 'IANA tzdb: America/Los_Angeles and the US daylight saving rule.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'California state CS rules: cde.ca.gov and leginfo.legislature.ca.gov could not be read; not retried, nothing quoted.',
      'City GIS layers (parks, libraries, transit stops, city boundary): hosted on geo.sandag.org, which returned 403; not retried, not used.',
      'That the top segment is the busiest road in San Diego: refused; it is the busiest counted segment in one download.',
      'The reason some locations were counted five times: not stated by the City; not guessed on the page.',
      'Any affiliation with the City of San Diego, its Transportation Department or Code.org.'
    ]
  }
};
