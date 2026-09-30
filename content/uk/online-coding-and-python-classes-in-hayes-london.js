'use strict';
// Hayes, Hillingdon (cg- district page, UK cluster Phase 9, row 443). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: which
// average can you trust when the data contains freak values or typing mistakes? (robust statistics: median, trimmed
// mean, winsorised mean, median absolute deviation, breakdown point, modified z-scores).
// Data (read 30 September 2026): Nomis Census 2021 TS006 population density (NM_2026_1) for every output area in
// Hillingdon (838), with the ONS OA to LSOA lookup (OA_LSOA_MSOA_EW_DEC_2021_LU_v3) and the ONS LSOA 2021 to ward (May
// 2022) best-fit lookup. Study area chosen by us: the 201 output areas best-fitted to the wards Hayes Town (35), Pinkwell
// (43), Wood End (48), Yeading (40) and Belmore (35).
// Our run (scratchpad g2/hys.py), people per square km: minimum 386.4, maximum 96,585.4 (next highest 53,928.6); mean
// 9,520.5; median 9,177.6; 10% trimmed mean 8,711.8; 10% winsorised mean 8,659.4; standard deviation 8,319.4; scaled
// median absolute deviation (x 1.4826) 3,503.2; skewness 6.65. Simulated typing mistakes (k middle values multiplied by
// 100): k 1: mean 14,040.8, median 9,262.1, trimmed 8,738.3; k 5: 32,412.3 / 9,409.4 / 8,842.1; k 20 (about 10%):
// 103,643.4 / 9,851.5 / 10,483.6 (winsorised 18,354.4); k 50 (about 25%): 258,462.3 / 11,120.4 / 189,757.3. Outlier
// flags on the real data: classic z-score beyond 3: 2 areas; modified z-score (median and MAD) beyond 3.5: 7 areas.
// Ward medians: Hayes Town 10,356; Pinkwell 9,646; Wood End 9,220; Belmore 8,877; Yeading 7,002.
// Lesson family: robust statistics (trimmed and winsorised means, MAD, breakdown point). Screened 30 September 2026:
// "trimmed mean", "Winsor", "robust statistics" 0 hits in content; claimed in claims.txt as hys. Hillingdon borough page =
// LOESS smoothing, not reused; its mentions (305,909, Botwell Green, Charville, Yiewsley) are not used here.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), published per ward, never summed:
// Hayes Town 14,998; Pinkwell 16,709; Wood End 19,802; Yeading 13,416; Belmore 17,493. postcodes.io (Hillingdon): Hayes
// (UB3), Harlington (UB3) and Hayes End (UB10).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HAYES', label: 'Hayes', blurb: 'Online coding and Python classes for Hayes in Hillingdon, with a project on which average survives freak values and typing mistakes in real Census data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-hayes-london',
  code: 'hys',
  accent: '#8A4B00',
  accentRationale: 'Hayes: a burnt amber brown (6.8:1 contrast), chosen by hand to sit apart from the blues and purples of other London pages',
  pageType: 'city',
  place: {
    name: 'Hayes',
    eyebrow: 'Hayes, Hillingdon, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Hillingdon', href: '/coding-classes-in-hillingdon-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hayes, London',
  title: 'Online Coding and Python Classes in Hayes, London | 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Hayes, Yeading, Pinkwell and Harlington learners aged 6 to 67, private or in groups. First lesson free.',
  ogDescription: 'Online coding and Python classes for Hayes in Hillingdon, with a robust statistics project on which average survives outliers in real Census data.',
  twitterDescription: 'Hayes, London: online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Hayes, London',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Hayes and the London Borough of Hillingdon, taught live with careful reasoning about data first.'
  },

  h1: 'Online coding and Python classes in Hayes',
  capsuleQ: 'Which are the best online coding and Python classes in Hayes, London?',
  capsule: 'Hayes sits in the London Borough of Hillingdon, where the 2021 census counted 14,998 residents in Hayes Town ward, 16,709 in Pinkwell, 19,802 in Wood End, 13,416 in Yeading and 17,493 in Belmore. Harlington and Hayes End are recorded by postcodes.io as suburban areas of the borough. Coding, Python, AI, vibe coding and maths are taught to Hayes learners from six years old to 67, by India-based tutors on a live video call, either alone or in a class of five to ten at one level. We teach how to reason about data before how to use tools, so a learner can tell a sound number from a distorted one. Nobody pays for the opening lesson, and we close it by naming the course that fits. The Hayes project takes the population density of 201 small Census areas and asks which kind of average still tells the truth when one value is wildly out. For Hayes families who continue, the monthly fee is USD 100 for a seat in a class and USD 150 for a tutor of their own.',
  lead: 'The mean is the average everyone learns first, and it has one serious weakness: a single extreme value can drag it anywhere. Real data is full of extreme values, some genuine and some typing mistakes, so statisticians use robust alternatives. The median ignores how far out the extremes are. A trimmed mean throws away a fixed share at each end before averaging. A winsorised mean pulls the extremes in to the nearest ordinary value. Each has a breakdown point, the share of bad data it can take before it fails. This project measures all of them on real numbers: how densely people live in the small Census areas that make up five Hayes wards.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Hayes, Hillingdon?',

  picks: {
    eyebrow: 'Hayes course picks',
    h2: 'Hayes courses in thinking, Python and AI',
    intro: 'Age decides the starting course. Each of the four begins with one live lesson at no charge, and no card is taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair averages, odd ones out and asking whether a number makes sense.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, an AI helps build and the learner then tests to destruction.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from first lines to real data, including the Hayes averages experiment.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for data cleaning, statistics, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hayes and Hillingdon',
      h2: 'Hayes Town, Pinkwell, Wood End, Yeading and Belmore',
      intro: 'Census 2021 counts for five Hillingdon wards, and places recorded around Hayes.',
      body: [
        { kind: 'table', caption: 'Usual residents by ward, Census 2021 (ONS, via Nomis), 2022 ward boundaries', head: ['Ward', 'Residents (2021)'], rows: [
          ['Hayes Town', '14,998'],
          ['Pinkwell', '16,709'],
          ['Wood End', '19,802'],
          ['Yeading', '13,416'],
          ['Belmore', '17,493']
        ] },
        { kind: 'p', text: 'Each count is the ONS figure for that ward alone, and we do not add them into a total for Hayes, which has no single official boundary. Postcodes.io lists Hayes itself in the UB3 district, with Harlington and Hayes End as suburban areas of Hillingdon. Hillingdon schools work to the national curriculum for England, and once we have your term dates no lesson is booked into a holiday.' },
        { kind: 'callout', h3: 'Hillingdon, London and our approach', p: 'More choices are on <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">coding classes in Hillingdon</a> and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>. Why we put reasoning before tools is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hayes project',
      h2: 'Mean, median or trimmed mean? Robust statistics on Hayes Census areas',
      intro: '201 real densities, one freak value, then a flood of deliberate typing mistakes.',
      body: [
        { kind: 'p', text: 'The learner downloads Census 2021 population density from the Nomis API for every output area in Hillingdon and uses ONS lookups to keep the 201 areas that belong to the five wards in the table above. Density runs from 386.4 people per square kilometre to 96,585.4; the next highest is 53,928.6. Python then computes four averages: the mean, the median, a 10% trimmed mean (drop the lowest and highest tenth, average the rest) and a 10% winsorised mean (replace those tenths with the nearest remaining value).' },
        { kind: 'table', caption: 'Averages and spreads of population density across 201 Hayes output areas, people per square km, our Python run on Census 2021 data', head: ['Measure', 'Value'], rows: [
          ['Mean', '9,520.5'],
          ['Median', '9,177.6'],
          ['10% trimmed mean', '8,711.8'],
          ['10% winsorised mean', '8,659.4'],
          ['Standard deviation', '8,319.4'],
          ['Median absolute deviation, scaled', '3,503.2']
        ] },
        { kind: 'p', text: 'On the real data the averages roughly agree, but the two measures of spread do not: the standard deviation is more than twice the robust one, because it squares the distance of a handful of extreme areas. Next the learner simulates a common accident. A chosen number of middling values are multiplied by 100, as if a decimal point had been lost.' },
        { kind: 'table', caption: 'The same averages after simulated typing mistakes (values multiplied by 100), our Python simulation', head: ['Values corrupted', 'Mean', 'Median', '10% trimmed mean'], rows: [
          ['None', '9,520.5', '9,177.6', '8,711.8'],
          ['1 of 201', '14,040.8', '9,262.1', '8,738.3'],
          ['5', '32,412.3', '9,409.4', '8,842.1'],
          ['20 (about 10%)', '103,643.4', '9,851.5', '10,483.6'],
          ['50 (about 25%)', '258,462.3', '11,120.4', '189,757.3']
        ] },
        { kind: 'p', text: 'One bad value in 201 moves the mean by nearly half while the median moves by under 1%. The trimmed mean holds until the share of bad values passes what it trims, then collapses: at 25% corrupted it is almost as wrong as the mean, and only the median, whose breakdown point is 50%, still looks like Hayes. Outlier hunting shows the same effect. The classic rule, more than three standard deviations from the mean, flags 2 areas in the real data; the robust version built on the median and the median absolute deviation flags 7, because the extremes inflate the very standard deviation that is supposed to catch them.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Find the average height of a class, then add one giant and see which kind of average hardly notices.' },
          { h3: 'Ages 11 to 15', p: 'Load the Hayes densities in Python and compare the mean and the median before and after one typo.' },
          { h3: 'Ages 15 and up', p: 'Code trimmed and winsorised means, measure their breakdown points and build a robust outlier rule.' }
        ] },
        { kind: 'callout', h3: 'Census figures, our experiment', p: 'Densities are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The choice of wards, the simulated mistakes and every average are our own calculations; the published data contains no such errors.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Averages and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Some averages shatter at the first bad value; others shrug it off.',
      body: [
        { kind: 'table', caption: 'From the Hayes averages to working with AI', head: ['In the density project', 'When AI summarises data for you'], rows: [
          ['One typo moved the mean by nearly half', 'Ask which average was used, and why'],
          ['The median moved by under 1%', 'Robust summaries survive dirty data'],
          ['Trimming failed past its limit', 'Every method has a breaking point'],
          ['The standard deviation hid outliers', 'A check can be fooled by what it checks'],
          ['The mistakes were ours, the data clean', 'Test tools on errors you planted yourself']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for "the average" of a column and it will almost always return the mean, without looking for a lost decimal point. In a Hayes vibe coding lesson the learner words the request, the AI produces the Python, and then comes the sabotage: a wrong value is slipped into a copy of the data to find out whether the answer flinches. AI agents that clean and summarise spreadsheets on their own need the same test before they are trusted. Our agent-building work is held back until Python is secure, so it suits sixteen-plus and adult learners, and anything in Copilot Studio is reserved for private lessons. Two further reads: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> for the habit, and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a> for what follows it.' },
        { kind: 'p', text: 'Modern Age Coders is independent of the Office for National Statistics, Nomis and postcodes.io. We used their open data only; the experiment and any faults in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From class averages to robust statistics',
    intro: 'The school year is a first guess at level; the free lesson settles it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Averages, odd ones out and checking whether an answer is sensible.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games and apps made with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and statistics', p: 'Real data, robust averages and outlier rules alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Data work and agents', p: 'Cleaning, summarising and automating data work in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and statistics',
    h2: 'What is a trimmed mean, and when should you use the median instead of the mean?',
    intro: 'A trimmed mean drops a fixed share of the lowest and highest values before averaging; use it, or the median, whenever the data may contain extreme values or mistakes, because the ordinary mean can be moved by a single one.',
    p1: 'Across 201 Hayes Census areas, one simulated typo shifted the mean density from 9,520.5 to 14,040.8 people per square km, while the median moved from 9,177.6 to 9,262.1 and the 10% trimmed mean from 8,711.8 to 8,738.3.',
    p2: 'A learner who has broken a mean on purpose reads every AI summary differently: is that the mean or the median, and how far would a single typo push it?',
    closer: 'That instinct for a fragile number is what lets a Hayes teenager audit an AI report, and it is built by writing the Python yourself.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Hayes Town to Yeading, taught online',
    intro: 'A computer and an internet connection good enough for video are all that is needed.',
    cells: [
      { h3: 'Keyboard stays with the learner', p: 'Our tutor watches a shared screen and mostly asks one thing: does that number look believable to you?' },
      { h3: 'Trial first, plan second', p: 'The free session shows what the learner already knows, and we note any exam board.' },
      { h3: 'No fee to try', p: 'Lesson one is free and finishes with our course suggestion.' },
      { h3: 'Classmates at your level', p: 'A Hayes learner joins five to ten others from around Britain who are at the same point.' },
      { h3: 'Two lessons a week', p: 'None in the school holidays.' },
      { h3: 'Fixed slot', p: 'Tutors shift with the UK clock changes, so your time does not.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, free on the same evening and living close by, are hard to find. Online, they can be anywhere.' }
  },

  fees: {
    h2: 'Hayes fees',
    intro: 'Hayes learners pay our international rate, the one that applies everywhere outside India.',
    first: 'A full lesson free, then a recommendation.',
    group: 'About eight live group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Hayes fees are quoted and billed in US dollars; there is no sterling price. Billing waits for the trial to settle which course and which evening, and the pricing page answers questions on holidays, absences and changing format.'
  },

  reviewsH2: 'What Hillingdon parents and UK learners have written on Google',

  book: {
    h2: 'Book a free Hayes lesson',
    intro: 'Two facts get us started: how old the learner is (or their school year) and what they like. From there a Hayes trial may turn into an averages puzzle, an AI-built Scratch game, a starter Python script or a dig through real Census figures.',
    success: 'Thank you. Your Hayes request is with us.'
  },

  faq: {
    h2: 'Hayes questions',
    intro: 'Medians, trimmed means, the 201 Census areas, vibe coding and how a Hayes lesson is arranged.',
    items: [
      { q: 'How many people live in Hayes Town ward?', a: 'The 2021 census counted 14,998 usual residents in Hayes Town ward in Hillingdon; the other wards are published separately.' },
      { q: 'Are online Python classes available in Hayes?', a: 'They are. A learner in Yeading, Harlington or anywhere else in Hillingdon joins by live video, and we take ages 6 to 67.' },
      { q: 'What is the median absolute deviation?', a: 'A robust measure of spread: take each value\'s distance from the median, then take the median of those distances. Unlike the standard deviation, a few extreme values barely change it.' },
      { q: 'What is a breakdown point?', a: 'The share of bad values a statistic can take before it becomes meaningless. For the mean it is effectively zero, for a 10% trimmed mean about 10%, and for the median 50%.' },
      { q: 'What does the Hayes project involve?', a: 'Comparing the mean, median, trimmed mean and winsorised mean of population density in 201 Hayes Census areas, then corrupting the data on purpose to see which survive.' },
      { q: 'Is vibe coding on the timetable?', a: 'For every age group. The learner says what should be built, an AI drafts it, and the learner proves it works.' },
      { q: 'What about building AI agents?', a: 'Python has to come first and be solid, so agents are mostly for sixteen and over; Copilot Studio agents are private-lesson work.' },
      { q: 'Can exam-year pupils get help?', a: 'Both GCSE and A level computer science and maths are supported. Our aim is that the learner understands the work; a grade is never promised.' },
      { q: 'What will it cost a Hayes family?', a: 'Hayes learners try one lesson free. Staying on costs USD 100 each month in a class, or USD 150 each month for private teaching.' },
      { q: 'What happens at half term and in the summer?', a: 'Lessons stop for school holidays once you tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Hillingdon and London pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-southall-london">Southall</a>, <a class="cg-inline-link" href="/coding-classes-in-hillingdon-london">Hillingdon</a>, <a class="cg-inline-link" href="/coding-classes-in-ealing-london">Ealing</a> and <a class="cg-inline-link" href="/coding-classes-in-hounslow-london">Hounslow</a>. Anywhere else in the capital is on <a class="cg-inline-link" href="/best-coding-class-in-london">our London page</a>; the rest of the country is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hayes and Hillingdon',
  footerPlaces: [
    { href: '/coding-classes-in-hillingdon-london', label: 'Hillingdon' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hys .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-hys .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-hys .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-hys .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hys .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.02em; }
.cg-root.cg-hys .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-hys .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hys .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hys .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-hys .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Hillingdon (E09000017). Census 2021 usual residents by 2022 ward (published per ward, not summed): Hayes Town 14,998; Pinkwell 16,709; Wood End 19,802; Yeading 13,416; Belmore 17,493. postcodes.io (Hillingdon): Hayes (UB3), Harlington (UB3), Hayes End (UB10).',
    localProject: 'Census 2021 TS006 density for 201 OAs best-fitted to Hayes Town, Pinkwell, Wood End, Yeading, Belmore. Mean 9,520.5; median 9,177.6; 10% trimmed 8,711.8; winsorised 8,659.4; SD 8,319.4; scaled MAD 3,503.2; max 96,585.4. x100 typos: 1 -> mean 14,040.8, median 9,262.1, trimmed 8,738.3; 5 -> 32,412.3 / 9,409.4 / 8,842.1; 20 -> 103,643.4 / 9,851.5 / 10,483.6; 50 -> 258,462.3 / 11,120.4 / 189,757.3. z > 3 flags 2; modified z > 3.5 flags 7. Lesson family: robust statistics, breakdown point.',
    requiredMentions: [
      '14,998',
      '16,709',
      '19,802',
      '13,416',
      'Pinkwell',
      'Yeading',
      'Harlington',
      'Hayes End',
      'trimmed mean',
      'median absolute deviation'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS006 population density and TS001 usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS output area to LSOA lookup and LSOA 2021 to ward (May 2022) best-fit lookup, ONS Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: Hayes, Harlington and Hayes End in Hillingdon.', url: 'https://api.postcodes.io/places?q=Harlington' }
    ],
    rejectedClaims: [
      'A population for "Hayes": no single official boundary; ward figures are given separately and never summed.',
      'That these five wards are the definition of Hayes: stated as our chosen study area.',
      'Errors in the Census data: none claimed; every mistake in the experiment was planted by us.',
      'Industrial, canal or airport history: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
