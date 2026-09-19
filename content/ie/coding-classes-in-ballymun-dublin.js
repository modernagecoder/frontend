'use strict';
// Ballymun, Dublin 9 and 11 (cg- district page, Ireland cluster, Phase 6). Named sources only
// (owner rule for districts), read 20 September 2026: Dublin City Council "Ambient Sound Monitoring
// Network DCC" (ballymun2015.zip, unit DCC-NOISE-001004 at 53.398888N 6.264610W; drumcondra2015.zip
// for comparison), with the dataset note defining Leq, L10 and L95; DCC Ballymun Library and
// Poppintree Park pages; Axis Ballymun's own site; the Rediscovery Centre's own site. Spine: compare
// places by background and peaks, not by one average. Scratchpad bmn/sum.js (parsing as dcd/db.js).
// 2015 Ballymun: 104,254 readings (99.2%); all: energy Leq 63.02, median L10 66.54, median L95
// 54.65; day 07-19: 64.57 / 67.82 / 57.22; night 23-07: 57.98 / 62.66 / 46.65. Drumcondra 2015:
// all 55.83 / 60.07 / 47.04; day 57.70 / 62.13 / 48.79; night 50.50 / 50.17 / 44.88. Night gaps
// Ballymun minus Drumcondra: energy Leq 7.48, L10 12.49, L95 1.77. Hourly L10-L95 at 02:00:
// Ballymun 16.2, Drumcondra 3.4; midday Ballymun about 10.2, Drumcondra about 12.3. Ballymun gap
// widest at night (16.3 at 01:00, 03:00, 04:00), Drumcondra narrowest at night (3.4 at 02:00).
// No reading has L95 above Leq or L10 below L95 at either site. 24 Ballymun files carry a header
// position of 53.278938N 6.315392W (not used, not taught; Drumcondra owns the wrong-header note).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'BALLYMUN', blurb: 'Two sound monitors, one average apart, and a night when the backgrounds almost match while the peaks do not.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-ballymun-dublin',
  code: 'bmn',
  accent: '#365659',
  accentRationale: 'Ballymun: a slate teal from the widened solver search, clear of the Carlow and Cavan blue-greens',
  pageType: 'district',
  place: {
    name: 'Ballymun',
    eyebrow: 'Ballymun, Dublin 9 and 11',
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
  routeLabel: 'Ballymun, Dublin, Ireland',
  title: 'Coding Classes in Ballymun, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Ballymun learners aged 6 to 67, taught live online in small same-level groups or one to one. The opening lesson is free.',
  ogDescription: 'Coding and AI classes for Ballymun, with a data project on two sound monitors and why a single average cannot say how two places differ.',
  twitterDescription: 'Live online coding, Python, AI and maths for Ballymun, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Ballymun',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Ballymun, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Ballymun',
  capsuleQ: 'What are the best coding classes in Ballymun?',
  capsule: 'Every Ballymun learner is taught live on a video call by a teacher, in a small same-level group or alone with the teacher, typically on two days a week, and they can be any age from six to sixty-seven. There is no journey involved. No fee applies to the first lesson; later months are billed at USD 100 in a shared group or USD 150 with a teacher to oneself.',
  lead: 'Dublin City Council\'s sound monitor in Ballymun recorded the noise level every five minutes through 2015, as its monitor in Drumcondra did. Each reading comes with three numbers: an average level, the level exceeded 10 percent of the time, and the level exceeded 95 percent of the time. Compare the two places on the average alone and Ballymun is about 7.5 decibels louder at night. Compare them on the quiet background and the gap shrinks to 1.77. Compare them on the peaks and it grows to 12.49. This page teaches a learner why one number cannot describe a difference, and how the three together do.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Ballymun.',

  picks: {
    eyebrow: 'Courses for Ballymun',
    h2: 'Four first courses for Ballymun',
    intro: 'The age bands below are where most learners begin, and the opening lesson is when the teacher confirms the fit or proposes a different course.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and a sound game: the quietest moment, the loudest moment and the usual moment of a noisy room.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Sorting lists and reading off the value at 10 percent and 95 percent, then asking what each one means.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Two real sensor files in Python: parsing, percentile summaries by hour, and comparisons that say which part differs.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who compare sites, shops or services and need more than an average to explain the difference.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Louder how? Ballymun and Drumcondra by background and by peaks',
      intro: 'Both series are Dublin City Council\'s 2015 files from its ambient sound monitors, one reading every five minutes. Night means readings that start between 23:00 and 07:00. Levels are in A-weighted decibels, and the council defines L10 and L95 as the levels exceeded for 10 percent and 95 percent of the time.',
      body: [
        { kind: 'table', caption: 'Nights in 2015: the same comparison three ways (decibels)', head: ['Measure', 'Ballymun', 'Drumcondra', 'Gap'], rows: [
          ['Energy average (Leq)', '57.98', '50.50', '7.48'],
          ['Peaks: median of L10', '62.66', '50.17', '12.49'],
          ['Background: median of L95', '46.65', '44.88', '1.77']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Almost the same background', p: 'On a typical night the level the Ballymun monitor stays above 95 percent of the time is 46.65 decibels, against 44.88 in Drumcondra. Measured by that steady floor, the two places are nearly alike after dark.' },
          { h3: 'Very different peaks', p: 'The level exceeded 10 percent of the time tells another story: 62.66 at Ballymun against 50.17 at Drumcondra, a gap of 12.49 decibels. Whatever the difference between the nights is, it lives in the louder moments, not the background.' },
          { h3: 'The average blurs both', p: 'The energy average puts the gap at 7.48, between the other two. It is a correct number that hides the shape: it cannot say whether a place is louder all the time or louder in bursts, and those are very different nights.' }
        ] },
        { kind: 'callout', h3: 'One number summarises; several describe', p: 'An average answers one question and throws the rest away. Readings that come with percentiles let a learner ask two more: what is the floor, and how high do the peaks reach? When two places differ, comparing each percentile separately shows where they differ, and the distance between the peaks and the floor, here L10 minus L95, shows how steady or bursty each place is.' },
        { kind: 'p', text: 'The learner\'s program reads both years of daily text files, applying the same care as for any messy sensor file: tabs where commas were expected, a repeated hour when the clocks go back, and overlapping files. It keeps 104,254 Ballymun readings, 99.2 percent of the year, and checks a rule that must always hold, that the background level can never exceed the peaks or the average, which no reading breaks at either site. It then summarises each hour of the day with the median L95, the median L10 and the energy average, and compares the places hour by hour. The comparison turns up a mirror image: at Ballymun the gap between peaks and background is widest in the small hours, about 16 decibels at 2 am, and narrowest around midday, near 10; at Drumcondra it is narrowest at 2 am, 3.4, and widest in the evening.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The whole year', p: 'Over all of 2015 the Ballymun monitor\'s energy average was 63.02 decibels, its typical peak level 66.54 and its typical background 54.65. Every one of those is higher than at Drumcondra, so here the three measures agree on which place is louder; they disagree about by how much.' },
          { h3: 'Steady or bursty', p: 'A small gap between L10 and L95 means the level barely changes; a large one means quiet stretches broken by louder ones. Drumcondra\'s nights are steady, Ballymun\'s are bursty, and the average alone would have painted both the same way.' },
          { h3: 'What the readings cannot say', p: 'The monitors record levels at one point each, not what made the sound. The page describes the two sites and the shape of their readings, and makes no claim about the sources of noise in either place.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Ballymun, named',
      h2: 'Ballymun from its library, arts centre, park and Boiler House',
      intro: 'Each fact is taken from the body that runs the place.',
      body: [
        { kind: 'table', caption: 'Named places in Ballymun', head: ['Place', 'What its own source says'], rows: [
          ['Ballymun Library', 'Ballymun Road, Dublin 11, D11 DCR7'],
          ['Axis Ballymun', 'Main Street, Ballymun, Dublin 9, D09 Y9W0'],
          ['The Rediscovery Centre', 'The Boiler House, Ballymun Road, D09 HK58'],
          ['Council sound monitor', '53.398888 N, 6.264610 W, a reading every five minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Library and park', p: 'The council lists Ballymun Library as open 10:00 to 20:00 Monday to Thursday, with an induction loop and full wheelchair access. Nearby Poppintree Park has an amphitheatre, a feature pond and a native tree trail in English or Irish.' },
          { h3: 'Axis', p: 'Axis describes itself as an arts and community centre on Main Street with a theatre, dance studio, gallery, recording studio, music rehearsal rooms and a conference centre, open 8am to 8pm on weekdays.' },
          { h3: 'The Boiler House', p: 'The Rediscovery Centre calls itself the National Centre for the Circular Economy. From the Boiler House on Ballymun Road it runs social enterprises that recondition furniture, bicycles, paint and clothing.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Ballymun, since the page uses only what named bodies publish about the place. The sound figures describe one monitor in 2015 at the position the files give, and nothing here names a source of noise.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'Two lessons in a Ballymun learner\'s week',
      intro: 'A normal week holds two lessons, each taught live by the teacher throughout.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'The youngest learners work in block code with sound games that pick out the quietest, loudest and most usual moment in a list.' },
          { h3: 'Teenagers', p: 'Older students go on to Python, web pages, AI work and real council sensor files, letting the code do the percentile arithmetic.' },
          { h3: 'Adults', p: 'Adults can join with no background; the first lesson settles the course.' }
        ] },
        { kind: 'p', text: 'The 2015 readings come from Dublin City Council\'s open data portal, and every median, percentile, energy average and site comparison on this page is our own working, done on 20 September 2026. Library and park details are the council\'s, and the arts centre and Boiler House details come from their own websites.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the loudest moment to a full description',
    intro: 'Bands are a rough guide; the first lesson finds the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Quiet, loud, usual', p: 'Block-coded games that find the extremes and the middle of a list of sounds.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Percentiles by hand', p: 'Python that sorts values and reads off the 10 and 95 percent points.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Shape, not just size', p: 'Hour-by-hour percentile summaries of two real sensor files and a fair comparison.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Explaining a difference', p: 'Comparing sites or services by floor, peaks and spread, not a single average.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant which place is noisier',
    intro: 'It will compare averages. Averages answer only part of the question.',
    p1: 'Give an AI assistant both monitors\' files and ask which place is noisier at night, and it will likely average the levels and report that Ballymun is louder by about seven and a half decibels. True, and incomplete: it does not say that the quiet background is almost identical, or that the whole difference sits in the louder moments.',
    p2: 'The learner who has built this project asks for the background and the peaks separately, hour by hour, and for the gap between them. An assistant can then help draw the chart; the learner already knows which question the chart has to answer.',
    closer: 'An average tells you how much. Percentiles tell you where. Good analysis reports both.',
    blogAnchor: 'why every learner should try coding at least once'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Ballymun',
    intro: 'Briefly.',
    cells: [
      { h3: 'Live with a teacher', p: 'The teacher runs each lesson live, looking over each learner\'s code as they build it.' },
      { h3: 'Same-level groups', p: 'Groups of five to ten at one level, from Ballymun, other parts of Ireland or overseas.' },
      { h3: 'Set days', p: 'The same two days every week, roughly eight lessons a month.' },
      { h3: 'Around school', p: 'The plan makes room for holidays, mid-terms and exam periods.' },
      { h3: 'Home kit', p: 'Any computer with a keyboard, plus a mic, some way to hear, and a line fast enough that video does not stall.' },
      { h3: 'A teacher to yourself', p: 'Private teaching suits a learner who has outpaced the groups, wants a slower pace, or can only study at odd hours.' }
    ],
    spec: { title: 'Taught remotely', p: 'Modern Age Coders has no premises in Ballymun or elsewhere in Ireland. Lessons are live on video and run the same for every learner.' }
  },

  fees: {
    h2: 'Fees for Ballymun',
    intro: 'The short version.',
    first: 'A free first lesson that includes a level check.',
    group: 'A month in a same-level group of five to ten, close to eight live lessons.',
    private: 'A month of private lessons at the same frequency.',
    closer: 'Outside India the fee is one US dollar amount for everyone, paid month by month. Trying the free lesson creates no obligation, billing only starts alongside the course, and holidays, missed sessions and moves between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews left by families, reproduced as written',

  book: {
    h2: 'Book a free first lesson in Ballymun',
    intro: 'Share the learner\'s age and interests, and the first lesson will be built around them. Some first lessons finish with a tiny game, some with a program that works first time, some with a chart showing exactly where two sets of numbers part company.',
    success: 'Thank you. We will be in touch to set up the lesson soon.'
  },

  faq: {
    h2: 'Ballymun coding class questions',
    intro: 'What Ballymun families tend to ask.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Ballymun?', a: 'No. Every lesson is live on video, and we have no premises in Ireland. The learner needs a computer, a microphone and sound, and a dependable connection. The number shown on this page is in India.', boiler: true },
      { q: 'What is the sound monitor project?', a: 'The learner compares Dublin City Council\'s 2015 sound readings from Ballymun and Drumcondra three ways. At night the energy average puts Ballymun 7.48 decibels louder, the background (L95) only 1.77, and the peaks (L10) 12.49, so the difference sits in the louder moments.' },
      { q: 'Does the page say what the noise in Ballymun is?', a: 'No. The monitor measures levels at one spot and cannot identify sources. The page reports the readings and their shape only.' },
      { q: 'Why is there no population figure for Ballymun?', a: 'This page prints only facts that named organisations publish about Ballymun itself: Dublin City Council, Axis and the Rediscovery Centre. None of them publishes a head count.' },
      { q: 'What are the lesson times?', a: 'Weekdays after school and into the evening, and weekend daytimes. We schedule in Irish time. Because the teaching team sits in India, the clock gap with Ballymun is five and a half hours from late October to late March and four and a half for the rest of the year, and every slot we list is one that suits both sides.' },
      { q: 'Can an adult learn with you?', a: 'Yes, at any age up to sixty-seven and from any starting point. After the free lesson an adult chooses a same-level group or private lessons.' },
      { q: 'Will my child be with other children from Ballymun?', a: 'Possibly, but groups are made by level, so the rest of the class may be anywhere in Ireland or beyond.' },
      { q: 'What do coding classes in Ballymun cost?', a: 'The first lesson is free. Then a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by level, pace and goals rather than by age or address. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Ballymun',
    html: 'To the south, <a class="cg-inline-link" href="/coding-classes-in-drumcondra-dublin">Drumcondra</a> teaches how to average decibels at all, and <a class="cg-inline-link" href="/coding-classes-in-glasnevin-dublin">Glasnevin</a> has a project on temperature records. West of here, <a class="cg-inline-link" href="/coding-classes-in-finglas-dublin">Finglas</a> looks at particle spikes, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> covers everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Ballymun, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-drumcondra-dublin', label: 'Drumcondra' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-bmn .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.27vw, 2.59rem); }
.cg-root.cg-bmn .cg-hero h1 { font-weight: 700; letter-spacing: -0.0194em; line-height: 1.08; }
.cg-root.cg-bmn .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.18rem; }
.cg-root.cg-bmn .cg-eyebrow { letter-spacing: 0.125em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-bmn .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.0119em; }
.cg-root.cg-bmn .cg-grid-3 { gap: clamp(1.04rem, 2.92vw, 2.26rem); }
.cg-root.cg-bmn .cg-table caption { letter-spacing: 0.034em; font-weight: 690; }
.cg-root.cg-bmn .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bmn .cg-table td:last-child { font-weight: 660; }
.cg-root.cg-bmn .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.98rem; }
.cg-root.cg-bmn .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Ballymun, named sources only (owner rule for districts), read 20 September 2026. Dublin City Council, "Ambient Sound Monitoring Network DCC" (data.smartdublin.ie dataset a52fbbe2...; notes: "The results of the sound level meter are given in Leq, which is the average sound level over the period of measurement. L95 and the L10 data is also provided. This is the sound level exceeded for 95% and 10% of the time respectively."), ballymun2015.zip (370 daily files from unit DCC-NOISE-001004, header "Monitoring unit located at 53.398888N 6.264610W" in 346 files and "53.278938N 6.315392W" in 24) and drumcondra2015.zip; columns "dd/mm/yyyy hh:mm:ss, A Leq, A L10, A L95, C Leq, C L10, C L95". Our arithmetic (bmn/sum.js), 2015, readings stamped at the end of each five-minute interval, periods by interval start: Ballymun 104,254 readings (99.2% of 105,132); all readings: energy Leq 63.02, median L10 66.54, median L95 54.65; day 07:00 to 19:00: 64.57, 67.82, 57.22; night 23:00 to 07:00: 57.98, 62.66, 46.65. Drumcondra: all 55.83, 60.07, 47.04; day 57.70, 62.13, 48.79; night 50.50, 50.17, 44.88. Night differences Ballymun minus Drumcondra: energy Leq 7.48, L10 12.49, L95 1.77. Hourly median L10 minus median L95: Ballymun 16.2 at 02:00, 16.3 at 01:00, 03:00 and 04:00, 10.0 to 10.5 from 09:00 to 16:00; Drumcondra 3.4 at 02:00, 12.3 to 13.2 midday, 15.4 at 18:00. No reading at either site has L95 above Leq or L10 below L95. DCC Ballymun Library: "Ballymun Road Dublin 11 Co. Dublin D11 DCR7", "Locate 53.390431, -6.265039", Monday to Thursday 10:00 to 20:00, "wheelchair accessible, and an induction loop system for use with hearing aids is available". DCC Poppintree Park: facilities "Amphitheatre ... Feature Pond GAA Pitch Playground Rugby Pitch Soccer Pitch"; "Poppintree Park Native Tree Trail in English or Irish". Axis Ballymun: "Axis Ballymun Main Street, Ballymun, Dublin 9, D09 Y9W0"; "Axis Opening Hours: Monday - Friday 8am - 8pm"; spaces "Theatre Dance Studio Gallery Art Room Recording Studio Music Rehearsal Rooms Conference Centre". The Rediscovery Centre: "The National Centre for the Circular Economy The Boiler House, Ballymun Road, Dublin 9 D09 HK58"; "Our programs are focused on training, reconditioning, and upcycling furniture, bicycles, paint and clothing."',
    localProject: 'Louder how? From Dublin City Council\'s 2015 five-minute sound readings at Ballymun (104,254) and Drumcondra, the learner compares the places by three summaries. At night the energy average puts Ballymun 7.48 decibels louder, the background (median L95) only 1.77, the peaks (median L10) 12.49. Hour by hour, the peak-to-background gap at Ballymun is widest in the small hours (about 16 at 2 am) and narrowest at midday (about 10), the mirror of Drumcondra (3.4 at 2 am). Checks: the background never exceeds the peaks or the average. Lessons: one number summarises, several describe; compare distributions part by part; a gap between percentiles measures steadiness. New family site-wide: PERCENTILE PROFILES / COMPARING DISTRIBUTIONS PART BY PART (box plot, interquartile, five-number, L10, L95 had no prior hits; Drumcondra owns energy averaging, Portmarnock the misleading mean of two groups).',
    requiredMentions: [
      '104,254',
      '63.02',
      '54.65',
      '66.54',
      '46.65',
      '44.88',
      '62.66',
      '50.17',
      '12.49',
      'D11 DCR7',
      'D09 Y9W0',
      'D09 HK58'
    ],
    sources: [
      { claim: 'Dublin City Council, Ambient Sound Monitoring Network: Ballymun 2015 five-minute Leq, L10 and L95 readings; dataset note defining L10 and L95.', url: 'https://data.smartdublin.ie/dataset/a52fbbe2-1bff-4897-84af-34945f6fc8de/resource/0db54d6b-7ecc-492f-a9d9-cdd883d59e11/download/ballymun2015.zip' },
      { claim: 'Dublin City Council, Ambient Sound Monitoring Network: Drumcondra 2015 readings for comparison.', url: 'https://data.smartdublin.ie/dataset/a52fbbe2-1bff-4897-84af-34945f6fc8de/resource/24219dc4-b933-42eb-b1c8-ce25c76d07ed/download/drumcondra2015.zip' },
      { claim: 'Dublin City Council, Ballymun Library: Ballymun Road, D11 DCR7; opening hours; accessibility.', url: 'https://www.dublincity.ie/libraries/find-library/ballymun-library' },
      { claim: 'Dublin City Council, Poppintree Park: amphitheatre, feature pond, pitches, native tree trail in English or Irish.', url: 'https://www.dublincity.ie/residential/parks/dublin-city-parks/visit-park/poppintree-park' },
      { claim: 'Axis Ballymun: Main Street, D09 Y9W0; weekday opening 8am to 8pm; theatre, studios, gallery and conference centre.', url: 'https://axisballymun.ie/' },
      { claim: 'The Rediscovery Centre: the National Centre for the Circular Economy, The Boiler House, Ballymun Road, D09 HK58; reconditioning furniture, bicycles, paint and clothing.', url: 'https://www.rediscoverycentre.ie/about/' }
    ],
    rejectedClaims: [
      'Any source of noise at either monitor: the readings record levels, not causes.',
      'Energy averaging as the lesson: Drumcondra owns it; used here only as one of the three summaries.',
      'The wrong header position in 24 Ballymun files: noted in the dossier only; Drumcondra owns that side lesson.',
      'CSO small-area tables on crime and welfare payments for Ballymun: excluded topics under the owner rules.',
      'Any population figure for Ballymun and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
