'use strict';
// Warrington (cg- town page, UK cluster Phase 8, towns band A, row 336). Keyword slug per the owner's 2026-09-27
// instruction. Spine: can a program catch a wrong date in an old book? Anchors (read raw 27 September 2026): Project
// Gutenberg ebook 75111, "Memoirs of Dr. Joseph Priestley, to the year 1795, written by himself": "I, the oldest, was born
// on the thirteenth of March, old style 1733"; "My removal to Warrington was in September, 1761 ... In this new situation
// I continued six years"; "The academy at Warrington was instituted when I was at Needham"; "It was while I was at
// Warrington that I published my Chart of Biography". Project Gutenberg ebook 56648, William Walker, "Memoirs of the
// Distinguished Men of Science of Great Britain Living in the Years 1807-8": each memoir opens "Born ... Died ..."; its
// entry "JOSEPH PRIESTLY, LL.D." reads "Born March 24, 1773. Died February 26, 1804."; preface: an Appendix added "the
// Memoirs of Black, Cort, Ivory, and Priestly, who unfortunately were, from different reasons, unable to be included in
// the group in the Engraving".
// Our run (scratchpad wrr/parse.py, val.py, 27 September 2026): 54 Born/Died records (one, Joseph Black "Born 1728.[50]",
// needed a fix for its footnote marker). Rule "died before 1807": 3 flags (Black 1799, Cort 1800, Priestly 1804), all in the
// Appendix the preface describes. Rule "age at death under 40": 1 flag, Priestly at 31; cross-check with his own memoir
// gives 1733 (Old Style), so the printed 1773 is a wrong year; 13 March Old Style is 24 March New Style (11-day shift), so
// the printed day matches the calendar change. Ages at death as printed: mean 71.50, median 73.5, youngest 31; corrected:
// mean 72.24, median 73.5, youngest 42; oldest Peter Dollond, 1731 to 1820.
// Lesson family: data validation rules, explained vs real flags, cross-source checks, mean vs median under one bad record,
// Old Style dates; screened (data validation, plausibility, Old Style, validation rule: 0 hits; "consistency check" hits
// Caerphilly (units) and Bedford (double mass), different techniques).
// Place facts: Nomis Census 2021 TS007A, Warrington E06000007: total 210,977; 20 to 24 10,502 (5.0%; England 6.0%); 25 to
// 29 12,510 (5.9%; 6.6%); 45 to 49 14,319 (6.8%; 6.4%); 50 to 54 16,074 (7.6%; 6.9%); 55 to 59 15,881 (7.5%; 6.7%); 75 to 79
// 8,206 (3.9%; 3.6%). ONS 2021 BUAs wholly inside: Warrington 174,970; Lymm 11,545; Culcheth 6,720; Burtonwood 3,505 (Irlam
// crosses the boundary; not quoted).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WARRINGTON', label: 'Warrington', blurb: 'Online coding and Python classes for Warrington, with a project that catches a wrong birth year for Joseph Priestley in an old book.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-warrington',
  code: 'wrr',
  accent: '#4B3B6B',
  accentRationale: 'Warrington: a dusk slate violet (7.92:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Warrington',
    eyebrow: 'Warrington, Cheshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Cheshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Cheshire', href: '/coding-classes-in-cheshire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Warrington, England',
  title: 'Online Coding and Python Classes in Warrington | AI, 6 to 67',
  description: 'Live online coding, Python and AI lessons for Warrington, Lymm, Culcheth and Burtonwood learners aged 6 to 67, one-to-one or in small groups. First lesson free.',
  ogDescription: 'Online coding and Python classes for Warrington, and a data validation project that catches a wrong birth year for Joseph Priestley in an old book.',
  twitterDescription: 'Warrington online coding, Python and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Warrington',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Warrington, taught live in English at the right level.'
  },

  h1: 'Online coding and Python classes in Warrington',
  capsuleQ: 'Which are the best online coding and Python classes for Warrington?',
  capsule: 'In 2021 the census put Warrington borough at 210,977 people, of whom 174,970 lived in the Warrington built-up area and 11,545 in Lymm. Adults from 45 to 59 are well above the England share here, while people in their twenties are below it. Our India-based tutors teach coding, Python, AI and maths over live video to learners between 6 and 67, individually or in small same-level classes of five to ten. A free opening lesson chooses the course. The Warrington project checks the dates in an old book of scientists, and catches one that cannot be right. After the trial, groups cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'Joseph Priestley, the chemist, wrote in his memoirs that he moved to Warrington in September 1761 to teach at the academy there, stayed six years, and published his Chart of Biography while in the town. Later, William Walker compiled Memoirs of the Distinguished Men of Science of Great Britain, a book of 54 short lives, each opening with a line like "Born ... Died ...". Its entry for Priestley says he was born on 24 March 1773 and died in 1804. That would make him 31 at his death, and would mean he moved to Warrington twelve years before he was born. A few lines of Python can catch this without anyone reading all 54 lives, and can also show why not every warning is an error.',
  wa: 'Hello Modern Age Coders, please book a free online coding or Python lesson for a Warrington learner.',

  picks: {
    eyebrow: 'Warrington starting points',
    h2: 'First courses for Warrington',
    intro: 'Let age and curiosity decide. All courses begin with a free live session; no payment card is requested.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with timelines, dates and sorting games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'A first typed language, with small AI experiments.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the date-checking project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from the start, up to cleaning and checking data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Warrington borough',
      h2: 'A borough in its middle years',
      intro: 'Census table TS007A (2021) for Warrington, from Nomis, six bands set against England.',
      body: [
        { kind: 'table', caption: 'Six age bands, Warrington against England (2021 census, TS007A)', head: ['Age band', 'Warrington residents', 'Warrington %', 'England %'], rows: [
          ['20 to 24', '10,502', '5.0%', '6.0%'],
          ['25 to 29', '12,510', '5.9%', '6.6%'],
          ['45 to 49', '14,319', '6.8%', '6.4%'],
          ['50 to 54', '16,074', '7.6%', '6.9%'],
          ['55 to 59', '15,881', '7.5%', '6.7%'],
          ['75 to 79', '8,206', '3.9%', '3.6%']
        ] },
        { kind: 'p', text: 'People in their fifties stand out against England, and young adults are fewer. Besides the main built-up area the ONS lists Lymm at 11,545, Culcheth at 6,720 and Burtonwood at 3,505, all inside the borough. Warrington schools work to England\'s national curriculum; our lessons simply stop in the holiday weeks you mark.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Warrington project',
      h2: 'Validation rules for 54 old records',
      intro: 'Write simple rules, let the program flag records, then think about every flag.',
      body: [
        { kind: 'p', text: 'The learner writes a Python pattern that finds each "Born ... Died ..." line in Walker\'s book and pulls out the two years. One record, Joseph Black\'s, has a footnote marker straight after the year and slips past the first version, which is itself a lesson: 53 found, 54 expected. Once all 54 are in, the program applies data validation rules, simple tests every sensible record should pass. The first rule follows the title: everyone should have been alive in 1807 or 1808.' },
        { kind: 'table', caption: 'Our Python validation run on Walker\'s 54 records, 27 September 2026', head: ['Rule', 'Records flagged', 'Who', 'Verdict after checking'], rows: [
          ['Died before 1807', '3', 'Black 1799, Cort 1800, Priestly 1804', 'Explained: the book\'s appendix, per its preface'],
          ['Age at death under 40', '1', 'Priestly, 31', 'Real error: his own memoir gives 1733'],
          ['Mean age at death, as printed', '71.50', 'All 54', 'Pulled down by the error'],
          ['Mean age at death, corrected', '72.24', 'All 54', 'The error moved it by 0.74 years'],
          ['Median age at death', '73.5', 'Both versions', 'Unchanged by one bad record']
        ] },
        { kind: 'p', text: 'Three people fail the 1807 rule: Joseph Black, Henry Cort and Priestley, spelled Priestly in the book. A careless program would delete them. But the preface explains that an appendix was added for Black, Cort, Ivory and Priestly, who could not be included in the engraving the book was written to accompany. The flags are real, and the records are fine. The second rule, age at death under 40, flags only Priestley, at 31. That one is a genuine error, and a second source proves it.' },
        { kind: 'p', text: 'Priestley\'s own memoir says he was born "on the thirteenth of March, old style 1733". Britain switched from the Old Style calendar to the new one in 1752, which moved dates on by 11 days, so 13 March Old Style is 24 March in the new reckoning. Walker had the day exactly right and the year wrong: 1773 for 1733. The learner writes both findings into the report, fixes only the proven error, and notes that the median age at death did not move at all, while the mean did.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'List family birthdays, then write rules that would spot an impossible one, such as a birthday in the future.' },
          { h3: 'Ages 11 to 15', p: 'Extract the Born and Died years in Python and apply two validation rules.' },
          { h3: 'Ages 15 and up', p: 'Handle the footnote case, cross-check against Priestley\'s memoir, and compare mean and median.' }
        ] },
        { kind: 'callout', h3: 'Two old books, our checks', p: 'Priestley\'s memoirs and Walker\'s Memoirs of the Distinguished Men of Science are Project Gutenberg editions. The rules, flags and averages are ours.' }
      ]
    },
    {
      id: 'priestley', tint: 'deep', eyebrow: 'Why Priestley',
      h2: 'Six years at the Warrington academy',
      intro: 'What Priestley\'s memoirs say about Warrington.',
      body: [
        { kind: 'table', caption: 'Joseph Priestley and Warrington, from his memoirs (Project Gutenberg)', head: ['Detail', 'In his own words or summary'], rows: [
          ['Born', 'On the thirteenth of March, Old Style, 1733'],
          ['Moved to Warrington', 'September 1761, after three years at Nantwich'],
          ['Stayed', 'Six years'],
          ['Chart of Biography', 'Published while he was at Warrington'],
          ['His colleagues', 'The other tutors, with whom he had tea every Saturday'],
          ['Oldest life in Walker\'s book', 'Peter Dollond, 1731 to 1820']
        ] },
        { kind: 'p', text: 'Data validation is one of the least glamorous and most valuable jobs in computing. Banks check that dates of birth are possible, hospitals that doses are within range, and online forms that postcodes have the right shape. The hard part is not writing the rule but deciding what to do with each flag, because some are real errors and some are explained exceptions. A Warrington learner who has worked through Walker\'s 54 records has learned to check before deleting.' },
        { kind: 'p', text: 'We are independent of Project Gutenberg and of the census office. The books and figures remain theirs; these checks, errors included, are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From impossible birthdays to data cleaning',
    intro: 'The years are only indicative; the free lesson sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Rules in blocks', p: 'Block coding with if-then checks and simple lists.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python with dates', p: 'Text patterns, numbers and rules in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Cleaning and checking data, with AI, beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data at work', p: 'Adult Python for real-world data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and old facts',
    h2: 'Would an AI repeat the wrong date?',
    intro: 'Errors in old books travel into new answers.',
    p1: 'A chatbot trained on text that includes Walker\'s book might one day repeat 1773. Or it might silently "correct" a date that was actually right. Either way it rarely shows you which rule it used.',
    p2: 'A Warrington learner who has cross-checked two sources knows to ask for the evidence behind any date.',
    closer: 'Looking for a second source before believing a date is the kind of habit that makes code worth learning for Warrington teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How we teach',
    h2: 'Lymm to Culcheth, all online',
    intro: 'Any part of the borough joins the same live lesson.',
    cells: [
      { h3: 'Learner writes the code', p: 'Every line comes from the student, with the tutor following on screen share and asking questions.' },
      { h3: 'Right level from the start', p: 'Year 4 or Year 13, placement follows the school year and the trial, with the exam board in mind.' },
      { h3: 'First lesson free', p: 'Nothing to pay for the trial, which ends with a clear recommendation.' },
      { h3: 'Stage-matched groups', p: 'Five to ten UK learners, all working at one level.' },
      { h3: 'Term-time lessons', p: 'Two a week in term, none in the holidays.' },
      { h3: 'Same hour all year', p: 'When UK clocks change, our tutors move, not your lesson.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Warrington learners at one stage, free on the same evening, rarely live on one street. Online classes fix that.' }
  },

  fees: {
    h2: 'Warrington fees',
    intro: 'Warrington pays the same fee as every family we teach outside India.',
    first: 'A free full lesson with a course recommendation.',
    group: 'Roughly eight live small-class lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Fees are set in US dollars, never sterling. Payment starts after the free lesson has settled the course and a regular weekly time. Holidays, missed classes and changing from group to private are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews: parents and learners',

  book: {
    h2: 'Book a free Warrington lesson',
    intro: 'Give us an age or year group and a favourite subject or hobby. Trials can be a Scratch timeline, a first Python script, a small AI build, or hunting the wrong year in Walker\'s book.',
    success: 'Thank you. Your Warrington request is with us.'
  },

  faq: {
    h2: 'Warrington questions',
    intro: 'Answers about Warrington, the date-checking work and the practical side.',
    items: [
      { q: 'What is the population of Warrington?', a: 'The 2021 census counted 210,977 in Warrington borough and 174,970 in the Warrington built-up area.' },
      { q: 'Can Warrington learners take coding and Python classes online?', a: 'Yes. Learners from 6 to 67 in Warrington, Lymm and Culcheth join our live online coding, Python, AI and maths lessons.' },
      { q: 'What is the Priestley project?', a: 'Learners apply validation rules to 54 birth and death records in an old book of scientists and catch a wrong year for Joseph Priestley.' },
      { q: 'What is data validation?', a: 'Checking data against rules it should always obey, then investigating every record that breaks one.' },
      { q: 'What is Old Style dating?', a: 'The calendar Britain used before 1752; changing to the new one moved dates on by 11 days.' },
      { q: 'Are lessons held in Warrington?', a: 'They are live online, so the whole borough is covered.' },
      { q: 'Is exam support offered?', a: 'For GCSE and A level maths and computing, yes, aimed at understanding rather than any promised result.' },
      { q: 'Who can join?', a: 'Learners from 6 to 67.' },
      { q: 'How much are lessons?', a: 'No charge for the first session. After it, a shared class is USD 100 per month and one-to-one tuition USD 150 per month.' },
      { q: 'Are there lessons in the holidays?', a: 'No; send us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages near Warrington',
    html: 'For Cheshire as a whole see our <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> page; the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-woking">Woking</a> page checks a novelist\'s Mars numbers, another old-text puzzle, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> gathers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Warrington and Cheshire',
  footerPlaces: [
    { href: '/coding-classes-in-cheshire', label: 'Cheshire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wrr .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-wrr .cg-hero h1 { font-weight: 740; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wrr .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-wrr .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wrr .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-wrr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wrr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wrr .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; }
.cg-root.cg-wrr .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-wrr .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Warrington (E06000007). Nomis Census 2021 TS007A: total 210,977; 20 to 24 10,502 (5.0%, England 6.0%); 25 to 29 12,510 (5.9%, 6.6%); 45 to 49 14,319 (6.8%, 6.4%); 50 to 54 16,074 (7.6%, 6.9%); 55 to 59 15,881 (7.5%, 6.7%); 75 to 79 8,206 (3.9%, 3.6%). ONS 2021 BUAs: Warrington 174,970; Lymm 11,545; Culcheth 6,720; Burtonwood 3,505. Project Gutenberg 75111, Memoirs of Dr. Joseph Priestley: born "on the thirteenth of March, old style 1733"; "My removal to Warrington was in September, 1761"; "I continued six years"; published the Chart of Biography while at Warrington. Project Gutenberg 56648, William Walker, Memoirs of the Distinguished Men of Science (1807-8): "JOSEPH PRIESTLY, LL.D. Born March 24, 1773. Died February 26, 1804."; Appendix for "Black, Cort, Ivory, and Priestly".',
    localProject: 'Data validation on 54 Born/Died records: died before 1807 flags 3 (Black 1799, Cort 1800, Priestly 1804), explained by the preface; age under 40 flags Priestly 31, a real error (1773 for 1733; 13 March OS = 24 March NS). Mean age at death 71.50 printed, 72.24 corrected; median 73.5 both; oldest Peter Dollond 1731 to 1820. Lesson family: validation rules, explained vs real flags, cross-source check.',
    requiredMentions: [
      '174,970',
      'Lymm',
      'Culcheth',
      'Burtonwood',
      'Chart of Biography',
      'Old Style',
      'data validation',
      'Henry Cort',
      'Peter Dollond'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Warrington and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Memoirs of Dr. Joseph Priestley (ebook 75111).', url: 'https://www.gutenberg.org/ebooks/75111' },
      { claim: 'Project Gutenberg, William Walker, Memoirs of the Distinguished Men of Science of Great Britain Living in the Years 1807-8 (ebook 56648).', url: 'https://www.gutenberg.org/ebooks/56648' }
    ],
    rejectedClaims: [
      'Priestley\'s religious and political controversies: not discussed.',
      'Where the Warrington academy stood today: not claimed.',
      'The title page of this Gutenberg edition reads London, 1864; the page does not rely on the year.',
      'Irlam built-up area: crosses the boundary, not quoted.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
