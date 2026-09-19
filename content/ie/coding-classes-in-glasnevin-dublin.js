'use strict';
// Glasnevin, Dublin 9 and 11 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: Met Eireann daily data for station 1823
// "DUBLIN (Glasnevin)" (clidata.met.ie dly1823.csv, via data.gov.ie "Dublin (Glasnevin) Climate
// Data"); OPW Heritage Ireland National Botanic Gardens page (botanicgardens.ie itself returns a
// Cloudflare 403 challenge, not circumvented); Dublin Cemeteries Trust Glasnevin page; DCU
// Eircodes and Postal Addresses page (NIAH buildingsofireland.ie returns 405 human verification).
// Spine: how many records chance alone would give, H_n = 1 + 1/2 + ... + 1/n. Scratchpad gln/rec.js.
// File: rain from 1941, temperatures from 1 January 1961; 1966 to 1988 every date twice (8,000
// dates), one row rain-only (temperature indicator 4), order varies by year; merged field by
// field, 0 conflicts. Complete years (>= 350 days of both max and min) 1961-2025: 58 (excluded
// 1963, 1965, 1966, 1969, 1971, 1991, 2020); keep-first gives 38, keep-last 42. H_58 = 4.646,
// last 20 = 0.418. Annual mean: 10 records (1961, 1973, 1975, 1983, 1989, 1995, 1997, 2006,
// 2022 11.70, 2023 11.80), 3 in last 20, shuffle P(>= 10) = 570/100,000. Hottest day: 6 records,
// last 2 August 1990 31.0 (2022: 29.8 on 18 July), P 0.27. Warmest night: 4 (last 2006 19.8).
// Coldest night: 2 (1961 -11.0, 1972 -11.5). Annual mean record lows: 2 (1961, 1962).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'GLASNEVIN', blurb: 'Sixty-five years at the Glasnevin weather station, and how many warm records chance alone would have set.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-glasnevin-dublin',
  code: 'gln',
  accent: '#8D5235',
  accentRationale: 'Glasnevin: a thermometer copper from the widened solver search, clear of the Ennis and Clonmel browns',
  pageType: 'district',
  place: {
    name: 'Glasnevin',
    eyebrow: 'Glasnevin, Dublin 9',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dublin City' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Drumcondra', href: '/coding-classes-in-drumcondra-dublin' }
  ],
  routeLabel: 'Glasnevin, Dublin 9, Ireland',
  title: 'Coding Classes in Glasnevin, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Glasnevin learners aged 6 to 67, in small groups at one level or one to one. The first lesson is free of charge.',
  ogDescription: 'Coding and AI classes for Glasnevin, with a data project on the Met Eireann station and how many warm records chance alone would set.',
  twitterDescription: 'Live online coding, Python, AI and maths for Glasnevin, ages 6 to 67. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Glasnevin',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Glasnevin, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Glasnevin',
  capsuleQ: 'What are the best coding classes in Glasnevin?',
  capsule: 'Glasnevin learners have a real teacher leading every lesson live over video, with a small group at their own level or one to one, two sessions in most weeks, and any age from six to sixty-seven is welcome. You never leave home for it. Lesson one is free; after that you pay USD 100 a month for a group place or USD 150 a month for private teaching.',
  lead: 'Met Éireann has measured temperature at its Glasnevin station since 1961, and 58 of the years since are complete. If nothing were changing, every year would be as likely as any other to be the warmest so far, and 58 years would set about 4.65 records for the warmest year by chance alone. Glasnevin\'s yearly average has set 10, three of them in the last 20 complete years, where chance would give less than half of one. This page teaches a learner where 4.65 comes from, how to test it by shuffling the years, and why the same test on the single hottest day tells a quieter story.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Glasnevin.',

  picks: {
    eyebrow: 'Courses for Glasnevin',
    h2: 'Four first courses for Glasnevin',
    intro: 'Age is the first filter; the teacher then checks the level during the free lesson and points to a different course if it would suit better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a dice game: how often a new high score turns up when every roll is luck.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Fractions that add up, 1 + 1/2 + 1/3 and onwards, computed and then tested in code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python with a 65-year weather file: merging duplicate rows, counting records and shuffling to test them.' },
      { course: 'data-analysis-mastery-course-college', band: 'College and adult', note: 'For adults who report records and firsts at work and want to know when one is really news.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many records should chance set? Sixty-five years at the Glasnevin station',
      intro: 'The data is Met Éireann\'s daily file for its Dublin (Glasnevin) station. A year counts here only if it has at least 350 days with both a maximum and a minimum temperature, which leaves 58 complete years between 1961 and 2025.',
      body: [
        { kind: 'table', caption: 'Records at Glasnevin in 58 complete years, 1961 to 2025', head: ['What is measured each year', 'Records set', 'Expected with no trend', 'Latest record'], rows: [
          ['Average temperature for the year', '10', '4.65', '2023, 11.80 degrees'],
          ['Hottest day', '6', '4.65', '1990, 31.0 degrees'],
          ['Warmest night', '4', '4.65', '2006, 19.8 degrees'],
          ['Coldest night (record lows)', '2', '4.65', '1972, minus 11.5 degrees']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where 4.65 comes from', p: 'If nothing is changing, each of the first k years is equally likely to be the warmest so far, so year k sets a record with a chance of 1 in k. The first year always counts. Add 1 + 1/2 + 1/3 and so on up to 1/58 and the total is 4.65. The same sum for just the last 20 of those years is 0.42.' },
          { h3: 'The warm years', p: 'Glasnevin\'s yearly average set records in 1961, 1973, 1975, 1983, 1989, 1995, 1997, 2006, 2022 and 2023, ten in all. Shuffling the 58 yearly averages into random order 100,000 times produced ten or more records only 570 times.' },
          { h3: 'The hottest day', p: 'The single hottest day of each year tells a quieter story: six records, the last on 2 August 1990 at 31.0 degrees, which still stands. One day a year is a noisy thing to track, and 2022 came closest, with 29.8 on 18 July.' }
        ] },
        { kind: 'callout', h3: 'A record means little until you know how many to expect', p: 'A new record sounds dramatic, yet in a short series records are common and in a long one they should grow rare. Counting them only means something beside the number expected if nothing were changing, and that number takes one line to compute and a few more to check by simulation. The same test works for race times, rainfall, sales figures or a video game\'s high scores.' },
        { kind: 'p', text: 'The learner\'s program reads Met Éireann\'s file, which opens with a key to its codes and then gives one row per day. It hits a trap before any maths. From 1966 to 1988 every date appears twice, 8,000 dates in all: one row carries rain only, the other rain and temperatures, and which comes first changes from year to year. Keeping the first row for each date leaves 38 complete years; keeping the last leaves 42; merging the pair field by field, which turns up no conflicting values, restores all 58. The program then works out each year\'s average, hottest day, warmest night and coldest night, counts the records in each, computes the expected count with the running sum above, and repeats the count on 100,000 shuffled orders to see how often chance matches it.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Years left out', p: 'Seven years between 1961 and 2025 have fewer than 350 days with both readings, 2020 among them because its rows stop at the end of November. They are left out rather than filled in with guesses.' },
          { h3: 'The cold side', p: 'Record lows turn up less often than chance would give. The coldest night set a record only twice, in 1961 and at minus 11.5 degrees in 1972, and the yearly average only twice, in 1961 and 1962.' },
          { h3: 'What it does not show', p: 'The records say recent years at Glasnevin have been warm; they do not say why, and one station is not the whole country. The shuffle test also treats years as independent, which neighbouring years are not quite.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Glasnevin, named',
      h2: 'Glasnevin through its weather station, gardens, cemetery and university',
      intro: 'Every entry below comes from the body responsible for it.',
      body: [
        { kind: 'table', caption: 'Named places in Glasnevin', head: ['Place', 'What its own source says'], rows: [
          ['Met Éireann weather station', 'Dublin (Glasnevin), 18 metres above sea level'],
          ['National Botanic Gardens', 'Glasnevin, Dublin 9, D09 VY63'],
          ['Glasnevin Cemetery', 'Finglas Road, D11 XA32'],
          ['DCU Glasnevin Campus', 'Collins Avenue Extension, D09 V209']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The gardens', p: 'The OPW\'s Heritage Ireland page says the gardens, 3 kilometres from the city centre, hold over 16,000 plant species and cultivars, over 300 of them endangered and 6 extinct in the wild. It names Richard Turner\'s Curvilinear Range and the Great Palm House as highlights, notes a link with Kilmacurragh in County Wicklow since 1854, and lists admission to the gardens as free.' },
          { h3: 'The cemetery', p: 'Dublin Cemeteries Trust says Glasnevin Cemetery was established in 1832, covers 124 acres and is the resting place of almost 1.5 million people.' },
          { h3: 'The university', p: 'DCU gives D09 V209 as the default eircode for its Glasnevin Campus, used for post to the mailroom at the John and Aileen O\'Reilly Library on Collins Avenue Extension.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Glasnevin, because the page prints only what named bodies publish about the place. The temperature records describe one station. The Botanic Gardens\' own website blocked automated reading, so its facts are taken from the OPW\'s Heritage Ireland page instead.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Two lessons in a Glasnevin learner\'s week',
      intro: 'Most weeks hold two lessons, and in each the teacher leads live throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin in block code with games of chance, and learn to tell a lucky streak from a real change.' },
          { h3: 'Teenagers', p: 'Teenagers progress to Python, websites, AI projects and long real files like the weather station\'s, where the maths becomes something they can run.' },
          { h3: 'Adults', p: 'Adults are welcome with no experience; the first lesson chooses the course.' }
        ] },
        { kind: 'p', text: 'Temperatures are Met Éireann\'s daily records for station 1823; the complete-year counts, record tallies, expected values and shuffle results were calculated by us on 20 September 2026. Garden, cemetery and university details come from the OPW, Dublin Cemeteries Trust and DCU.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a lucky high score to a tested claim',
    intro: 'Bands are approximate; the first lesson sets the actual level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'New high score', p: 'Block-coded games that keep the top score so far and count how often it changes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Adding fractions', p: 'Python that sums 1 + 1/2 + 1/3 and compares it with a simulated game.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Shuffle tests', p: 'Real weather files, merged rows, record counts and permutation tests.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Is it news?', p: 'Deciding whether a record, a first or an all-time high deserves attention.', courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant whether Glasnevin is getting warmer',
    intro: 'It may fit a trend line. It rarely asks how the file was built.',
    p1: 'Give an AI assistant the station file and ask for a warming trend, and a common first attempt reads the rows into a table keyed by date and fits a line. On this file a table keyed by date keeps whichever row came last, and from 1966 to 1988 that is often the row with no temperatures, so years of readings vanish without an error. The line that follows is fitted to the survivors.',
    p2: 'The learner who has built this project checks the keys first, merges the duplicate rows, and then asks a sharper question than a trend line: how many records would chance set in 58 years, and how does that compare with what happened? An assistant can help write the shuffle; the learner knows what it is for.',
    closer: 'A record is only news next to the number chance would produce. Code lets you work that number out.',
    blogAnchor: 'why a young learner should start coding now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Glasnevin',
    intro: 'What to expect.',
    cells: [
      { h3: 'Teacher present', p: 'Lessons are taught in real time, with the teacher reviewing each learner\'s code and helping as it is written.' },
      { h3: 'Matched groups', p: 'Five to ten learners at one level, whether from Glasnevin, elsewhere in Ireland or another country.' },
      { h3: 'Regular slots', p: 'Two agreed days every week, adding up to about eight lessons a month.' },
      { h3: 'Holidays covered', p: 'The school holidays, mid-term breaks and exam weeks are planned around.' },
      { h3: 'Set-up', p: 'A laptop or desktop, a working microphone, headphones or speakers, and broadband able to carry video.' },
      { h3: 'Private lessons', p: 'One-to-one teaching for learners who are ahead, want more time or keep hours no group runs.' }
    ],
    spec: { title: 'Taught online', p: 'Modern Age Coders has no building in Glasnevin or anywhere else in Ireland. Lessons take place live on video and are the same from any home.' }
  },

  fees: {
    h2: 'Fees for Glasnevin',
    intro: 'Straightforward.',
    first: 'An opening lesson free of charge, including a level check.',
    group: 'A month in a same-level group of five to ten, roughly eight live lessons.',
    private: 'A month of one-to-one lessons at the same pace.',
    closer: 'Families outside India all pay the same fee in US dollars, one month at a time. The free lesson carries no obligation, charges begin only with the course, and the pricing page explains holidays, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Six families on Google, in their own words',

  book: {
    h2: 'Book a free first lesson in Glasnevin',
    intro: 'Let us know the learner\'s age and what they are into, and the first lesson will be designed around it. They might finish with a small game, a working program, or a count of how often luck alone sets a record.',
    success: 'Thank you. We will get in touch soon to arrange the lesson.'
  },

  faq: {
    h2: 'Glasnevin coding class questions',
    intro: 'Common questions from Glasnevin families.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Glasnevin?', a: 'No. We teach live on video and have no premises in Ireland. The learner needs a computer, a microphone and sound, and a reliable internet connection. The phone number on this page belongs to India.', boiler: true },
      { q: 'What is the weather records project?', a: 'The learner takes Met Éireann\'s daily file for the Glasnevin station, repairs 8,000 duplicated dates, keeps the 58 complete years and counts records: the yearly average set 10 against the 4.65 chance would give, and 100,000 shuffles matched that only 570 times.' },
      { q: 'Does the project prove why it is warmer?', a: 'No. It shows how unusual the run of warm records is for one station. Explaining the cause takes much more than one station\'s file, and the page does not attempt it.' },
      { q: 'Why is no population shown for Glasnevin?', a: 'District pages here use only what named bodies publish about the place itself, in this case Met Éireann, the OPW, Dublin Cemeteries Trust and DCU, and none of them states a head count.' },
      { q: 'At what times are lessons held?', a: 'Weekdays from after school into the evening, and daytime at weekends. Lesson times are given in Irish time. Our teachers are in India, ahead of Glasnevin by four and a half hours in summer and by five and a half in winter, and we only offer hours that make sense on both sides.' },
      { q: 'Do you teach adults?', a: 'Yes, anyone up to sixty-seven, beginners included. After the free lesson an adult can pick a group at their level or one-to-one teaching.' },
      { q: 'Will my child be grouped with other Glasnevin children?', a: 'Only by chance, since groups are formed by level, so classmates can be from anywhere in Ireland or abroad.' },
      { q: 'What do coding classes in Glasnevin cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before anything is paid.', boiler: true },
      { q: 'How big is a group?', a: 'Five to ten learners, matched by level, pace and goals rather than by age or where they live. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Glasnevin',
    html: 'Next door, <a class="cg-inline-link" href="/coding-classes-in-drumcondra-dublin">Drumcondra</a> has a project on a year of noise readings. The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> collects every county, town and district.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Glasnevin, Dublin and Ireland',
  footerPlaces: [
    { href: '/coding-classes-in-drumcondra-dublin', label: 'Drumcondra' },
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-gln .cg-hero-grid { align-items: end; gap: clamp(1.12rem, 3.13vw, 2.56rem); }
.cg-root.cg-gln .cg-hero h1 { font-weight: 700; letter-spacing: -0.0176em; line-height: 1.07; }
.cg-root.cg-gln .cg-capsule { border-top: 5px double var(--cg-accent); padding-top: 1.09rem; }
.cg-root.cg-gln .cg-eyebrow { letter-spacing: 0.122em; font-weight: 630; text-transform: uppercase; }
.cg-root.cg-gln .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.0122em; }
.cg-root.cg-gln .cg-grid-3 { gap: clamp(1.1rem, 2.69vw, 2.17rem); }
.cg-root.cg-gln .cg-table caption { letter-spacing: 0.026em; font-weight: 670; }
.cg-root.cg-gln .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gln .cg-table tr:first-child td { font-weight: 650; }
.cg-root.cg-gln .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1.01rem; }
.cg-root.cg-gln .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Glasnevin, named sources only (owner rule for districts), read 20 September 2026. Met Eireann daily data, station 1823 (https://clidata.met.ie/cli/climate_data/webdata/dly1823.csv; data.gov.ie "Dublin (Glasnevin) Climate Data": "Daily and monthly climatalogical records for our station at Dublin (Glasnevin)"): header "Station Name: DUBLIN (Glasnevin)", "Station Height: 18 M", "Latitude:53.370 ,Longitude: -6.270"; columns date, ind, rain, ind, maxt, ind, mint, gmin, soil; key code 4 = "Not available" for temperature; rows from 1941 (rain) and temperatures from 01-jan-1961; 1966 to 1988: 8,000 dates appear twice, one row with temperature indicator 4 and blank temperatures, order varying by year; merging the pair field by field finds 0 conflicting values. 2020 rows end on 30-nov-2020. Our arithmetic (gln/rec.js): complete years (>= 350 days with both max and min) 1961 to 2025 = 58, excluding 1963, 1965, 1966, 1969, 1971, 1991, 2020; keep-first 38 complete years, keep-last 42. Harmonic sum H_58 = 4.646; last 20 = 0.418. Annual mean records: 1961 10.06, 1973 10.10, 1975 10.44, 1983 10.45, 1989 10.98, 1995 11.32, 1997 11.52, 2006 11.54, 2022 11.70, 2023 11.80 (10; 3 since 2005); 100,000 seeded shuffles, 570 with >= 10. Hottest day records: 1961 24.6, 1970 25.3, 1975 25.8, 1976 26.8, 1983 28.2, 1990 31.0 (02-aug-1990); 2022 29.8 on 18-jul-2022; shuffle P(>= 6) 0.267. Warmest night records: 1961 17.8, 1977 17.9, 1983 19.4, 2006 19.8. Coldest night records: 1961 -11.0, 1972 -11.5. Annual mean record lows: 1961, 1962 (8.95). OPW Heritage Ireland, National Botanic Gardens: "just 3 kilometres from Dublin city centre"; "home to over 16,000 plant species and cultivars"; "Richard Turner\'s Curvilinear Range and the Great Palm House"; "over 300 endangered plant species, 6 of which are already extinct in the wild"; "closely associated with their counterpart in Kilmacurragh, County Wicklow, since 1854"; "Free admission to Gardens"; "Glasnevin Dublin 9 D09 VY63". Dublin Cemeteries Trust, Glasnevin: "the final resting place for almost 1.5 million people"; "The grounds span 124 acres"; "Established ... in 1832"; "Glasnevin Cemetery & Crematorium Finglas Road Dublin, D11 XA32". DCU Eircodes and Postal Addresses: "DCU Glasnevin Campus D09 V209 The above is the default Eircode for all mail deliveries to the DCU Glasnevin Campus"; "DCU Mailroom John & Aileen O\'Reilly Library DCU Glasnevin Campus Collins Avenue Extension Dublin 9".',
    localProject: 'How many records should chance set? From Met Eireann\'s daily file for Dublin (Glasnevin), after merging 8,000 duplicated dates field by field (keep-first leaves 38 complete years, keep-last 42, merging 58), the learner counts records in the yearly average (10), hottest day (6, last 31.0 in 1990), warmest night (4) and coldest night (2), compares them with the harmonic sum H_58 = 4.65 (0.42 for the last 20 years) and with 100,000 shuffles (10 or more records in only 570). Lessons: a record count needs an expected count beside it; the expected count is 1/k per year when nothing changes; test a formula by simulation; check that keys are unique before trusting a table. New family site-wide: RECORDS AND THE HARMONIC EXPECTATION (harmonic number, record high, number of records had no prior hits). Dundrum owns return periods, which is a different question.',
    requiredMentions: [
      '11.80',
      '4.65',
      '58 complete years',
      '8,000',
      '570 times',
      '31.0',
      'D09 V209',
      'D11 XA32',
      'D09 VY63',
      '16,000',
      '124 acres',
      'Kilmacurragh'
    ],
    sources: [
      { claim: 'Met Éireann, daily data for station 1823, Dublin (Glasnevin): maximum and minimum temperatures from 1961; station height 18 metres.', url: 'https://clidata.met.ie/cli/climate_data/webdata/dly1823.csv' },
      { claim: 'Met Éireann key to the daily climate file codes (indicator 4: not available).', url: 'https://www.met.ie/cms/assets/uploads/2018/05/KeyDly_Rain.txt' },
      { claim: 'OPW Heritage Ireland, National Botanic Gardens: 3 kilometres from the city centre; over 16,000 plant species and cultivars; over 300 endangered species, 6 extinct in the wild; Turner\'s Curvilinear Range and the Great Palm House; linked with Kilmacurragh since 1854; free admission; D09 VY63.', url: 'https://heritageireland.ie/places-to-visit/national-botanic-gardens/' },
      { claim: 'Dublin Cemeteries Trust, Glasnevin Cemetery: established 1832; 124 acres; almost 1.5 million people buried; Finglas Road, D11 XA32.', url: 'https://www.dctrust.ie/location/glasnevin.html' },
      { claim: 'Dublin City University, Eircodes and Postal Addresses: DCU Glasnevin Campus default eircode D09 V209, Collins Avenue Extension.', url: 'https://www.dcu.ie/ocoo/dcu-eircodes-postal-addresses' }
    ],
    rejectedClaims: [
      'Any cause for the warm records: one station\'s file cannot establish it.',
      'Return periods and extreme-value fits: Dundrum owns them.',
      'Facts from botanicgardens.ie (Cloudflare 403) and the NIAH record for the Met Office building (405 human verification): not circumvented.',
      'Met Eireann\'s headquarters address: found only in search summaries, not on met.ie.',
      'Any euro price from the Heritage Ireland page (guided tours).',
      'Any population figure for Glasnevin and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
