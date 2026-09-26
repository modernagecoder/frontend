'use strict';
// Cheshire (cg- county index, UK cluster Phase 7, row 224). Ceremonial Cheshire: four unitary councils (Cheshire East,
// Cheshire West and Chester, Halton, Warrington). Spine: a derivative you can measure yourself. Jodrell Bank Crab
// Pulsar Monthly Ephemeris (jb.man.ac.uk/pulsar/crab/crab2.txt, read raw 26 September 2026; acknowledgement requested:
// Lyne, Pritchard and Graham-Smith 1993, MNRAS 265, 1003): 482 dated entries, 15 May 1988 (29.9843723662 Hz) to
// 24 July 2026 (29.5357554730 Hz), 13,949 days (38.19 years); period 33.3507 ms to 33.8573 ms. Our run (scratchpad
// chs/crab.py): finite differences between consecutive entries agree with the published spin-down column to a
// median 0.001 per cent over 481 pairs; overall mean spin-down 3.7224 x 10^-10 Hz per second; the largest excess,
// 4 to 11 November 2017, is 6.6 per cent (a glitch); characteristic age nu / (2 |nudot|) 1,255 years at the start
// and 1,279 at the end, against a true age of 972 years since the 1054 supernova (NASA Messier 1 page); about 35.9
// billion rotations in the span. Lesson family: numerical differentiation from a long record (finite differences
// checked against a published derivative) and a model's age estimate tested against history; screened 26
// September 2026 (finite difference, characteristic age: 0 hits; glitch appears only on Stoke-on-Trent as a data word).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (1,095,374, our sum); ONS built-up areas with our
// OA check (Wythenshawe, Irlam and New Mills excluded as mostly outside; Chester 92,760 with about 5,100 in Wales);
// Jodrell Bank Discovery Centre: Lovell Telescope, 76 metre reflecting surface, completed 1957; UNESCO World Heritage
// inscription 2019. Term dates: four councils, none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CHESHIRE', blurb: 'Four councils, thirty-one towns, and 38 years of Jodrell Bank measurements of a star that spins thirty times a second.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-cheshire',
  code: 'chc',
  accent: '#352B7A',
  accentRationale: 'Cheshire: a radio-night indigo from the solver (9.52:1 on the lightest paper), bluer than the UK purples and lighter than the Kent indigo',
  pageType: 'governorate',
  place: {
    name: 'Cheshire',
    eyebrow: 'County of Cheshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'North West England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Chester', href: '/best-coding-class-in-chester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Cheshire',
  title: 'Coding Classes in Cheshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python, data science and maths classes across Cheshire, from Warrington and Chester to Crewe, Macclesfield, Runcorn, Widnes and Northwich.',
  ogDescription: 'Coding classes for every Cheshire town, and a project on Jodrell Bank\'s Crab pulsar record: measure how fast a dead star is slowing down, and test what that says about its age.',
  twitterDescription: 'Cheshire coding, Python and data classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Data Classes for Cheshire',
    description: 'Ability-placed online coding, Python, data science, AI and mathematics for children, teenagers and adults across the four Cheshire councils, taught live in English.'
  },

  h1: 'Coding classes in Cheshire',
  capsuleQ: 'What are the best coding classes in Cheshire?',
  capsule: 'Cheshire, as a ceremonial county, is four councils with 1,095,374 residents at the 2021 Census: Cheshire East, Cheshire West and Chester, Warrington and Halton. Warrington is the biggest town, then Chester, Crewe, Ellesmere Port, Runcorn, Widnes and Macclesfield, with salt towns, market towns and commuter villages between. Our classes reach them all in exactly the same way: taught live over video by teachers in India, grouping learners by skill and never simply by birthday, for anyone aged 6 to 67, with five to ten in a group or one learner with one teacher. Programming, Python, data science, AI and maths are all available. The Cheshire project uses a record kept at Jodrell Bank. There is no charge for the first lesson; after it, group places are USD 100 a month and private lessons USD 150.',
  lead: 'About 6,500 light-years away, the collapsed core of a star that exploded in 1054 is spinning roughly thirty times a second, and it is slowing down. Since 1988, astronomers at Jodrell Bank, under the 76 metre Lovell Telescope on the Cheshire plain, have published its exact spin rate month by month. That record is a gift to a learner, because it contains a derivative you can measure yourself. Subtract one month\'s spin from the next, divide by the time between them, and you have the rate at which a dead star is losing speed. This page\'s project does that for every pair of months in 38 years, checks the result against Jodrell\'s own figure, and then asks what the slowdown says about the star\'s age.',
  wa: 'Hello Modern Age Coders, may I book a free lesson for a learner in Cheshire?',

  picks: {
    eyebrow: 'Courses for Cheshire',
    h2: 'Four first courses for Cheshire learners',
    intro: 'A seven-year-old in Nantwich who wants to animate the planets, an eleven-year-old in Knutsford who asks how telescopes work, a Year 12 in Wilmslow who likes physics and data, and a lab analyst in Runcorn moving into data science. One free lesson each to start.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch animations and games, including orbits and spinning objects that children build frame by frame.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, where a list of measurements becomes something a child can loop over and question.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'pandas, cleaning real datasets, matplotlib and statistics, with scientific records such as this one.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Python, statistics and SQL, then machine learning done honestly, finishing with a deployed capstone.' }
    ]
  },

  sections: [
    {
      id: 'cheshire', tint: '', eyebrow: 'Cheshire in the census',
      h2: 'Four councils, 1,095,374 people and a Chester that crosses into Wales',
      intro: 'Council populations are 2021 Census counts from Nomis. Town sizes are ONS built-up areas, each checked against our own sum of census output areas inside Cheshire.',
      body: [
        { kind: 'table', caption: 'The four councils of ceremonial Cheshire, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Cheshire East', '398,772', 'Crewe, Macclesfield, Congleton, Wilmslow, Nantwich, Alsager'],
          ['Cheshire West and Chester', '357,150', 'Chester, Ellesmere Port, Winsford, Northwich, Neston'],
          ['Warrington', '210,974', 'Warrington, Lymm, Culcheth'],
          ['Halton', '128,478', 'Runcorn, Widnes']
        ] },
        { kind: 'p', text: 'The county\'s biggest town is not its county town. Warrington\'s built-up area, 174,970 people, is nearly twice Chester\'s. And Chester\'s built-up area, 92,760 in all, does not stop at the English border: our count puts about 5,100 of its residents in Wales. At the other end of the county, the ONS lists a slice of Wythenshawe against Cheshire East, and small parts of Irlam and New Mills against Warrington and Cheshire East, but those are Greater Manchester and Derbyshire places and we leave them out.' },
        { kind: 'table', caption: 'Cheshire\'s built-up areas above 5,000 residents at the 2021 Census, biggest first', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Warrington', '174,970', 'Knutsford', '13,255'],
          ['Chester', '92,760', 'Poynton', '13,010'],
          ['Crewe', '74,120', 'Lymm', '11,545'],
          ['Ellesmere Port', '65,430', 'Sandbach', '11,290'],
          ['Runcorn', '61,645', 'Frodsham', '9,100'],
          ['Widnes', '59,935', 'Elworth', '7,645'],
          ['Macclesfield', '54,345', 'Bollington', '7,235'],
          ['Winsford', '32,530', 'Culcheth', '6,720'],
          ['Congleton', '30,005', 'Hartford', '6,695'],
          ['Wilmslow', '25,725', 'Holmes Chapel', '6,670'],
          ['Nantwich', '18,740', 'Weaverham', '6,265'],
          ['Northwich', '18,640', 'Barnton', '6,255'],
          ['Alsager', '15,505', 'Cuddington', '5,860'],
          ['Neston', '14,960', 'Helsby', '5,275'],
          ['Middlewich', '14,425', 'Haslington', '5,040'],
          ['Davenham', '13,835', '', '']
        ] },
        { kind: 'p', text: 'All thirty-one rows except Chester agree with our output-area count to within rounding. Each of the four councils sets term dates for its own community schools, and academies may set theirs; we did not read those calendars for this page, so we print none and agree lesson breaks with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Cheshire project',
      h2: 'Measuring how fast a dead star slows down',
      intro: 'Thirty-eight years of Jodrell Bank measurements, one subtraction and one division per month, and a check against the observatory\'s own figure.',
      body: [
        { kind: 'p', text: 'Jodrell Bank\'s Crab Pulsar Monthly Ephemeris is a plain text file anyone can download. Each line gives a date and the pulsar\'s spin rate in turns per second, measured to ten decimal places, plus the observatory\'s own figure for how fast that rate is falling. The learner reads the 482 dated lines from 15 May 1988 to 24 July 2026, then, for each neighbouring pair, subtracts the spin rates and divides by the seconds between the dates. That is a finite difference, the simplest possible estimate of a derivative, and it can be checked, because Jodrell publishes the answer.' },
        { kind: 'table', caption: 'Our run of 26 September 2026 on the Jodrell Bank Crab pulsar record', head: ['What we measured', 'Result'], rows: [
          ['Spin rate, May 1988', '29.9843723662 turns a second, a period of 33.3507 ms'],
          ['Spin rate, July 2026', '29.5357554730 turns a second, a period of 33.8573 ms'],
          ['Our finite differences against Jodrell\'s spin-down column', 'Agree to a median of 0.001 per cent over 481 pairs'],
          ['Largest disagreement', '4 to 11 November 2017, 6.6 per cent: the pulsar suddenly spun up'],
          ['Turns completed in the 13,949 days', 'About 35.9 billion'],
          ['Age implied by the slowdown', '1,255 years in 1988, 1,279 years in 2026'],
          ['Actual age since the 1054 supernova', '972 years in 2026']
        ] },
        { kind: 'p', text: 'The first result is reassuring: a one-line calculation, done by a learner, agrees with a world-class observatory to about one part in a hundred thousand. The fourth is the interesting failure. For one week in November 2017 our finite difference disagrees by 6.6 per cent, because the pulsar abruptly sped up, an event astronomers call a glitch. A derivative estimated across a sudden jump is not a derivative at all, and a learner who plots the differences sees the glitch stand out like a spike.' },
        { kind: 'p', text: 'The last two rows are the deepest lesson. Astronomers use a simple formula, spin rate divided by twice the spin-down rate, to estimate a pulsar\'s age from its slowdown alone. For the Crab it gives 1,279 years. But NASA records the supernova that made it in 1054, only 972 years ago. The formula assumes the star was born spinning far faster and has always braked in one particular way; the mismatch says at least one assumption is wrong. Even stranger, the estimate got older by 24 years during a 38-year record. A model is useful exactly when you know where it fails.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Take five dates from the record, work out the change in spin between each pair by hand, and say whether it is speeding up or slowing down.' },
          { h3: 'Ages 13 to 16', p: 'Load the whole file in Python, compute every finite difference, compare with the published column, and plot both on one chart.' },
          { h3: 'Ages 16 and up', p: 'Find the glitches automatically, compute the characteristic age through time, and write a paragraph on why it disagrees with 972 years.' }
        ] },
        { kind: 'callout', h3: 'Credit and limits', p: 'The spin rates and spin-down figures are Jodrell Bank\'s, from its Crab Pulsar Monthly Ephemeris, which asks users to cite Lyne, Pritchard and Graham-Smith, 1993, Monthly Notices of the Royal Astronomical Society, volume 265, page 1003. The 1054 date and the distance are from NASA. The differences, ages and rotation count are our own arithmetic on that data.' }
      ]
    },
    {
      id: 'jodrell', tint: 'deep', eyebrow: 'Why Jodrell Bank',
      h2: 'A 76 metre dish on the Cheshire plain since 1957',
      intro: 'The Cheshire link, from Jodrell Bank\'s own pages and NASA.',
      body: [
        { kind: 'table', caption: 'Jodrell Bank and the Crab, from the organisations that describe them', head: ['Source', 'What it says'], rows: [
          ['Jodrell Bank', 'The Lovell Telescope, with its 76 metre diameter reflecting surface, has stood over the Cheshire plain since construction was completed in 1957.'],
          ['Jodrell Bank', 'In 2019 Jodrell Bank was inscribed on the UNESCO World Heritage Site list as a site of Outstanding Universal Value.'],
          ['Jodrell Bank Centre for Astrophysics', 'Publishes the Crab Pulsar Monthly Ephemeris, from February 1982 and in plain text from May 1988 onwards.'],
          ['NASA', 'In 1054 astronomers recorded a "guest star" visible in daytime for nearly a month; it was the supernova that made the Crab Nebula, about 6,500 light-years away.'],
          ['NASA', 'The neutron star at its heart appears to pulse 30 times per second as it rotates.']
        ] },
        { kind: 'p', text: 'Few places let a teenager work with genuinely current research data, and Cheshire has one. The pulsar file is updated as observations come in, its format is plain enough to read in an afternoon, and every number has been checked by professionals, which makes it the ideal first scientific dataset: real, precise, and honest about its gaps and glitches.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Jodrell Bank, the University of Manchester, NASA or any Cheshire council, and nothing on this page implies one. The measurements are theirs; the calculations and any mistake in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> has its own page, <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> is to the north-east, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every other county and city.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress through the levels',
    h2: 'From a spinning sprite to a scientific record',
    intro: 'Starting level comes from the free lesson. Age is a hint; what a learner can do is the rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Things that turn', p: 'Scratch projects with spinning planets and ticking clocks, where turns per second first becomes an idea.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Lists of measurements', p: 'Python that reads numbers from a file, finds differences and averages, and checks its own arithmetic.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Real scientific data', p: 'Data science with pandas and charts, applied to records like the pulsar file, with anomalies treated as findings.', courses: ['data-science-course-for-teens-python-data', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Data work that holds up', p: 'Adults learn Python, statistics and machine learning, and the discipline of checking results against an independent source.', courses: ['data-science-complete-masterclass-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scientific data',
    h2: 'An AI can tell you the Crab pulsar is slowing. Can it tell you when its own formula is wrong?',
    intro: 'Only if someone asks it to test the formula against something independent.',
    p1: 'Ask a chatbot for the Crab pulsar\'s age from its spin-down and it will apply the standard formula and give a number near 1,300 years, perhaps with a caveat. What it is unlikely to do is download the actual record, compute the differences, notice the 2017 glitch, and set the formula\'s answer against the 1054 supernova. Those steps are where the insight lives, and they need someone who knows to ask for them.',
    p2: 'A Cheshire student who has done the calculation understands what the formula assumes and what the data can and cannot confirm. They ask where a number came from, whether it has been checked, and what an independent source says. That habit is what separates using AI to go faster from using AI to be wrong faster.',
    closer: 'So a Cheshire teenager should learn to code in 2026, a short drive from the Lovell Telescope, to be able to test a formula against reality rather than repeat it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works in practice',
    h2: 'Neston to Bollington with no journey at all',
    intro: 'Cheshire\'s towns are spread across a wide, rural county. Online lessons remove every mile.',
    cells: [
      { h3: 'Home is the classroom', p: 'A bedroom in Frodsham, a kitchen in Holmes Chapel, a study in Lymm. The teacher shares a screen and the learner writes the code.' },
      { h3: 'English, and UK school terms', p: 'Year 9 options, GCSEs and A levels are named the way Cheshire schools name them, and all teaching is in English.' },
      { h3: 'A free lesson first', p: 'A complete lesson of real work, then an honest recommendation. We never ask for card details at this stage.' },
      { h3: 'Matched to your level', p: 'Groups of five to ten learners at the same point, from many towns and countries, meeting at a sensible hour.' },
      { h3: 'Breaks to suit', p: 'Typically two lessons a week, paused for your own school\'s holidays, since the four councils and academies differ.' },
      { h3: 'Timetables in UK time', p: 'India, our teachers\' base, runs 5.5 hours ahead of UK winter time and 4.5 hours ahead of UK summer time; every lesson is fixed in UK time.' }
    ],
    spec: { title: 'Why groups follow level, not postcode', p: 'Thirty-one towns and wide stretches of countryside mean few places have enough learners at one stage on one evening. Level-based groups let a Middlewich learner and a Widnes learner study together.' }
  },

  fees: {
    h2: 'What lessons cost in Cheshire',
    intro: 'One price list for all four councils and every country outside India.',
    first: 'A full lesson of real work, ending in a recommended level and course.',
    group: 'About eight lessons a month, in a group of five to ten at the same level.',
    private: 'About eight lessons a month with one teacher and one learner.',
    closer: 'We bill in US dollars everywhere except India and have no sterling price list. The first charge comes after the free lesson, once a course and a regular slot are agreed; the pricing page explains pausing, missed lessons and changing between group and private places.'
  },

  reviewsH2: 'What families wrote on Google',

  book: {
    h2: 'Arrange a free lesson',
    intro: 'Tell us an age or school year and one interest. Lesson one could be a spinning-planet animation, a first Python file reader, or the pulsar record on this page.',
    success: 'Thank you. Your Cheshire request has arrived.'
  },

  faq: {
    h2: 'Cheshire questions',
    intro: 'The county, the pulsar project and our lessons.',
    items: [
      { q: 'How many people live in Cheshire?', a: 'Cheshire East, Cheshire West and Chester, Warrington and Halton held 1,095,374 usual residents between them at the 2021 Census, using ONS figures on Nomis. Cheshire East was the largest at 398,772.' },
      { q: 'What are the largest towns in Cheshire?', a: 'By ONS built-up area: Warrington 174,970, Chester 92,760, Crewe 74,120, Ellesmere Port 65,430 and Runcorn 61,645. The page lists thirty-one Cheshire towns above five thousand residents.' },
      { q: 'What is the pulsar project?', a: 'Learners download Jodrell Bank\'s Crab Pulsar Monthly Ephemeris, compute how fast the spin rate falls between each pair of dates, check the result against the published figure, find the glitches, and compare the formula age of 1,279 years with the true 972.' },
      { q: 'How fast does the Crab pulsar spin?', a: 'Jodrell Bank\'s record gives 29.5357554730 turns a second on 24 July 2026, down from 29.9843723662 in May 1988. Its period grew from 33.3507 to 33.8573 milliseconds.' },
      { q: 'What is the Lovell Telescope?', a: 'Jodrell Bank\'s radio telescope in Cheshire, with a 76 metre diameter reflecting surface, completed in 1957. Jodrell Bank was inscribed as a UNESCO World Heritage Site in 2019.' },
      { q: 'Is there a classroom in Chester or Warrington?', a: 'No. All teaching is live online, so a learner in Alsager and one in Ellesmere Port can join one class without travelling.' },
      { q: 'What ages do you teach?', a: 'From six to sixty-seven. Scratch for young children, typed Python from about ten, data science, maths and AI for teenagers, and data or software routes for adults. The free lesson settles the starting level.' },
      { q: 'Do you teach data science to teenagers?', a: 'Yes. The teen data science course, for ages 14 to 18, covers pandas, cleaning real datasets, matplotlib, statistics and a first machine learning model.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month and private lessons USD 150 a month, with no joining fee and no fixed term.' },
      { q: 'When are Cheshire school holidays?', a: 'Each of the four councils sets dates for its own schools, and academies can differ. We arrange lesson breaks around the dates your school gives you.' }
    ]
  },

  next: {
    eyebrow: 'More UK pages',
    h2: 'Beyond Cheshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> for the city itself, or <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> and <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">the West Midlands</a> for other county pages. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the full list.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Cheshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-chester', label: 'Chester' },
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' }
  ],

  personalityCss: `
.cg-root.cg-chc .cg-hero-grid { align-items: start; gap: clamp(1.2rem, 3.3vw, 2.9rem); }
.cg-root.cg-chc .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.05; }
.cg-root.cg-chc .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-chc .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-chc .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.015em; }
.cg-root.cg-chc .cg-table caption { font-weight: 600; letter-spacing: 0.012em; }
.cg-root.cg-chc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chc .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-chc .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-chc .cg-callout { border-left-width: 6px; border-radius: 0 7px 7px 0; }
`,

  dossier: {
    curriculumAuthority: 'Cheshire (ceremonial: Cheshire East, Cheshire West and Chester, Halton, Warrington). ONS Census 2021 TS001 via Nomis: Cheshire East 398,772; Cheshire West and Chester 357,150; Warrington 210,974; Halton 128,478; total 1,095,374 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Warrington 174,970; Chester 92,760 (87,616 inside England); Crewe 74,120; Ellesmere Port 65,430; Runcorn 61,645; Widnes 59,935; Macclesfield 54,345; Winsford 32,530; Congleton 30,005; Wilmslow 25,725; Nantwich 18,740; Northwich 18,640; Alsager 15,505; Neston 14,960; Middlewich 14,425; Davenham 13,835; Knutsford 13,255; Poynton 13,010; Lymm 11,545; Sandbach 11,290; Frodsham 9,100; Elworth 7,645; Bollington 7,235; Culcheth 6,720; Hartford 6,695; Holmes Chapel 6,670; Weaverham 6,265; Barnton 6,255; Cuddington 5,860; Helsby 5,275; Haslington 5,040. Excluded: Wythenshawe (6,729 in Cheshire East), Irlam (304 in Warrington), New Mills (497 in Cheshire East). Jodrell Bank Discovery Centre: "The Lovell telescope, with its 76 metre diameter reflecting surface, has stood over the Cheshire plain since construction was completed in 1957"; "In 2019 Jodrell Bank was recognised as a site of Outstanding Universal Value and inscribed on the UNESCO World Heritage Site list". Jodrell Bank Centre for Astrophysics, Crab Pulsar Monthly Ephemeris: plain text "Feb 1982 to Apr 1988 and May 1988 onwards"; users asked to reference Lyne, A. G., Pritchard, R. S. and Graham-Smith, F. 1993, MNRAS, 265, 1003. NASA Messier 1: "In 1054, Chinese astronomers took notice of a \'guest star\' that was, for nearly a month, visible in the daytime sky"; distance 6,500 light-years; "appear to pulse 30 times per second".',
    localProject: 'Numerical differentiation from a long record. crab2.txt parsed: 482 dated entries, 15 May 1988 nu 29.9843723662 Hz (period 33.3507 ms) to 24 July 2026 nu 29.5357554730 Hz (33.8573 ms), 13,949 days (38.19 years). Finite differences (nu[i+1] - nu[i]) / dt over 481 pairs vs mean of the published nudot at the two dates: median relative gap 0.001 per cent. Largest excess 6.6 per cent, 4 to 11 November 2017 (glitch; nu rose relative to trend); others 1.1 per cent Feb-Mar 2004, 0.6 per cent Nov 2011, 0.5 per cent Aug-Sep 1989. Overall mean spin-down 3.7224 x 10^-10 Hz per second. Characteristic age nu / (2 |nudot|): 1,255 years (1988), 1,279 years (2026); true age 972 years (1054 supernova, NASA). Rotations in the span about 3.5865 x 10^10 (35.9 billion). AI angle: an assistant applies the age formula without testing it against the historical record. Lesson family: numerical differentiation (finite differences checked against a published derivative) and a model estimate tested against history.',
    requiredMentions: [
      '1,095,374',
      '33.3507',
      '33.8573',
      '1,279 years',
      '35.9 billion',
      'guest star',
      '13,949 days',
      '0.001 per cent',
      'Lyne, Pritchard and Graham-Smith',
      'Davenham'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the four Cheshire councils, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Cheshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Jodrell Bank Centre for Astrophysics: Crab Pulsar Monthly Ephemeris, plain text from May 1988.', url: 'https://www.jb.man.ac.uk/pulsar/crab.html' },
      { claim: 'Jodrell Bank Discovery Centre: Lovell Telescope, 76 metre surface, completed 1957.', url: 'https://www.jodrellbank.net/visit/whats-here/lovell-telescope/' },
      { claim: 'Jodrell Bank: UNESCO World Heritage inscription in 2019.', url: 'https://www.jodrellbank.net/about/' },
      { claim: 'NASA, Messier 1: the 1054 guest star, 6,500 light-years, pulses 30 times per second.', url: 'https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-1/' }
    ],
    rejectedClaims: [
      'The physical cause of pulsar glitches and braking indices: not read at a primary source for this build; the page says only that the formula\'s assumptions fail.',
      'Cheshire school term dates: set by four councils and academies; none read.',
      'Wythenshawe, Irlam and New Mills as Cheshire towns: most of each lies in Greater Manchester or Derbyshire.',
      'Visitor numbers or admission details for Jodrell Bank: not needed and not claimed.',
      'The nationality of the astronomers who recorded the 1054 guest star: not repeated on the page; the date is what the lesson uses.',
      'Named Cheshire schools: none is named.'
    ]
  }
};
