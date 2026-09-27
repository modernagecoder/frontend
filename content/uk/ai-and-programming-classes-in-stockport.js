'use strict';
// Stockport (cg- town page, UK cluster Phase 8, towns band A, row 343). Keyword slug per the owner's 2026-09-27
// instruction. Spine: when did Stockport station really turn? Anchor (read 27 September 2026, file already downloaded for
// the Watford page): Office of Rail and Road Table 1415a, time series of passenger entries and exits by station, April
// 1997 to March 2025; row "Stockport", TLC SPT, local authority "Stockport": 1997-98 1,977,369; 1998-99 1,892,235; 1999-00
// 1,955,232; 2000-01 1,784,507; 2001-02 1,733,057; 2002-03 1,795,460; 2003-04 [x]; 2004-05 1,608,240; 2005-06 2,011,910.22;
// 2006-07 2,237,758; 2007-08 2,439,503; 2008-09 2,824,472; ... 2013-14 3,505,408; 2014-15 3,411,494; ... 2018-19 4,437,070;
// 2019-20 4,305,068; 2020-21 913,096; 2021-22 2,786,214; 2022-23 3,142,678; 2023-24 3,777,068; 2024-25 4,295,970. 19 stations
// in the table carry the local authority "Stockport".
// Our run (scratchpad stk/zz.py, 27 September 2026): 27 years with data (2003-04 missing). Naive strict local extrema:
// peaks 1999-00, 2002-03, 2013-14, 2018-19; troughs 1998-99, 2001-02, 2004-05, 2014-15, 2020-21 (9 turning points; 2002-03 is a
// "peak" only because its neighbour 2003-04 is missing). Zigzag rule (confirm a turn only after a reversal of at least T):
// T 2%: 10 points; T 5%, 10%, 20% and 50%: the same 3 points, trough 2004-05 (1,608,240), peak 2018-19 (4,437,070), trough
// 2020-21 (913,096). 2020-21 was 78.8% below 2019-20; 2024-25 is 3.2% below the 2018-19 peak.
// Lesson family: turning-point detection, naive local extrema vs a zigzag threshold, missing values creating false turns;
// screened (zigzag, turning point, local extrema, prominence: 0 hits). Watford used the same table for an index since 2020;
// this page asks a different question and does not index to 2020. Network Rail's viaduct page returned 403; not used.
// Place facts: Nomis Census 2021 TS007A, Stockport E08000007: total 294,776; 20 to 24 13,367 (4.5%; England 6.0%); 25 to 29
// 16,943 (5.7%; 6.6%); 40 to 44 19,504 (6.6%; 6.3%); 65 to 69 15,298 (5.2%; 4.9%); 75 to 79 11,483 (3.9%; 3.6%); 85+ 8,262
// (2.8%; 2.4%). ONS 2021 BUAs wholly inside: Stockport 117,935; Cheadle Hulme 24,785; Reddish 22,200; Hazel Grove 20,170;
// Bramhall 17,195.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STOCKPORT', label: 'Stockport', blurb: 'AI and programming classes for Stockport, with a project that finds the real turning points in 28 years of station passenger numbers.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-stockport',
  code: 'stk',
  accent: '#53175C',
  accentRationale: 'Stockport: a felt-hat plum (10.29:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Stockport',
    eyebrow: 'Stockport, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stockport, England',
  title: 'AI and Programming Classes in Stockport | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Stockport, Cheadle Hulme, Bramhall and Hazel Grove learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Stockport, and a Python project that separates real turning points from noise in 28 years of station usage.',
  twitterDescription: 'Stockport AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Stockport',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Stockport, taught live and matched to level.'
  },

  h1: 'AI and programming classes in Stockport',
  capsuleQ: 'Where are the best AI and programming classes for Stockport?',
  capsule: 'Stockport borough counted 294,776 people in the 2021 census; the ONS gives 117,935 for the Stockport built-up area, with Cheadle Hulme at 24,785 and Reddish at 22,200. People in their twenties are a much smaller share than in England, while those over 65 are a larger one. Our tutors in India teach AI, programming, Python and maths live over video to learners from 6 up to 67, one-to-one or in classes of five to ten sharing a level. A no-cost first lesson settles the course. The Stockport project reads 28 years of passenger numbers for the town\'s main station. After the trial, class places are USD 100 monthly and private tuition USD 150 monthly.',
  lead: 'Every year the Office of Rail and Road estimates how many journeys start or end at each station in Great Britain. For Stockport station it has published a figure for every year from April 1997 to March 2025, bar one: 2003-04 is marked with an x. Put the numbers on a chart and the story looks obvious, a long rise, a collapse, a recovery. But ask a program to mark every point where the line turns and it finds nine of them, several caused by tiny wobbles and one created entirely by the missing year. A Stockport learner can write a smarter rule in Python, one that only accepts a turn when the line really reverses, and watch nine turning points shrink to the three that matter.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Stockport learner.',

  picks: {
    eyebrow: 'Stockport course picks',
    h2: 'First courses for Stockport learners',
    intro: 'Choose by age and interest. Every course starts with a free live session, and booking needs no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with charts, trains and up-and-down games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real numbers, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teens, including the station turning-point project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from the first line to time series and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stockport borough',
      h2: 'Fewer twenty-somethings, more retirees',
      intro: 'Six bands for Stockport from the 2021 census age table on Nomis, with England alongside.',
      body: [
        { kind: 'table', caption: 'Stockport borough and England, six age bands, Census 2021 TS007A', head: ['Ages', 'Stockport residents', 'Stockport %', 'England %'], rows: [
          ['20 to 24', '13,367', '4.5%', '6.0%'],
          ['25 to 29', '16,943', '5.7%', '6.6%'],
          ['40 to 44', '19,504', '6.6%', '6.3%'],
          ['65 to 69', '15,298', '5.2%', '4.9%'],
          ['75 to 79', '11,483', '3.9%', '3.6%'],
          ['85 and over', '8,262', '2.8%', '2.4%']
        ] },
        { kind: 'p', text: 'Young adults are noticeably scarce compared with England, and every band over 65 is above the national share. Besides the main built-up area the ONS lists Cheadle Hulme, Reddish, Hazel Grove at 20,170 and Bramhall at 17,195, all within the borough. Stockport schools teach England\'s national curriculum, and our lessons stop for whichever holiday weeks you give us.' },
        { kind: 'callout', h3: 'County and region', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> page covers the county; <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> gathers the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stockport project',
      h2: 'Finding the real turning points',
      intro: 'A naive rule, a missing year, and a threshold that separates signal from wobble.',
      body: [
        { kind: 'p', text: 'The learner reads the Stockport row of the ORR\'s Table 1415a into Python: 28 financial years, one of them, 2003-04, shown as x. The first program skips the missing year and marks a peak wherever a year beats both neighbours, and a trough wherever it is lower than both. It finds four peaks and five troughs. Some are real. Others, like the dip in 2014-15 from 3,505,408 to 3,411,494 journeys, are wobbles of under 3 per cent. And the "peak" in 2002-03 exists only because its neighbour, the missing year, was skipped.' },
        { kind: 'table', caption: 'Our Python turning points for Stockport station, ORR Table 1415a, 27 September 2026', head: ['Rule', 'Turning points found', 'Which years', 'Comment'], rows: [
          ['Any year higher or lower than both neighbours', '9', 'From 1998-99 to 2020-21', 'Tiny wobbles count; the gap makes one'],
          ['Zigzag, reversal of at least 2%', '10', 'Includes the very start', 'Still noisy'],
          ['Zigzag, reversal of at least 5%', '3', '2004-05, 2018-19, 2020-21', 'The real shape'],
          ['Zigzag, at least 10%, 20% or 50%', '3', 'The same three years', 'Stable, so trustworthy']
        ] },
        { kind: 'p', text: 'The fix is a zigzag rule, borrowed from people who study charts. The program follows the line and only confirms a turning point once it has moved back by a set percentage from the most extreme value so far. With a threshold of 5 per cent the answer drops to three: a low of 1,608,240 journeys in 2004-05, a high of 4,437,070 in 2018-19, and a collapse to 913,096 in 2020-21, 78.8 per cent below the year before. Raising the threshold to 10, 20 or even 50 per cent leaves the same three, which is strong evidence they are real.' },
        { kind: 'p', text: 'The learner writes the lessons down. A missing value should never be quietly skipped when looking for turns, because it can invent one; the report marks 2003-04 as unknown instead. A threshold turns a fussy answer into a useful one, but it must be tested at several values to show the result does not depend on one lucky choice. Tests include a made-up zigzag series whose turning points are known in advance. The table also holds 18 other stations in the borough, from Cheadle Hulme to Bramhall, for anyone who wants to compare.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a line graph of daily temperatures and circle the highs and lows that really matter.' },
          { h3: 'Ages 11 to 15', p: 'Write the neighbour rule in Python, then see what the missing year does.' },
          { h3: 'Ages 15 and up', p: 'Build the zigzag rule, sweep the threshold, and compare several stations.' }
        ] },
        { kind: 'callout', h3: 'ORR figures, our turning points', p: 'The station estimates come from the Office of Rail and Road\'s Table 1415a. The turning points, thresholds and percentages are our own calculations.' }
      ]
    },
    {
      id: 'station', tint: 'deep', eyebrow: 'Why the station',
      h2: 'Twenty-eight years of journeys',
      intro: 'Stockport station in the ORR time series.',
      body: [
        { kind: 'table', caption: 'Stockport station entries and exits, selected years, ORR Table 1415a', head: ['Year to March', 'Entries and exits', 'Role in our analysis'], rows: [
          ['1998', '1,977,369', 'Start of the series'],
          ['2004', 'x (not published)', 'The missing year'],
          ['2005', '1,608,240', 'Low point (zigzag)'],
          ['2019', '4,437,070', 'High point (zigzag)'],
          ['2021', '913,096', 'Low point (zigzag)'],
          ['2025', '4,295,970', 'Latest year, 3.2% below the 2019 high']
        ] },
        { kind: 'p', text: 'Turning-point detection sits behind a great deal of software. Fitness watches decide when a run starts and stops, music apps find the beats in a song, and business dashboards flag when a trend has genuinely reversed rather than wobbled. All of them face Stockport\'s two problems: small noise that looks like a change, and gaps in the data that can invent one. A Stockport learner who has tamed nine turning points into three has solved both.' },
        { kind: 'p', text: 'We are independent of the Office of Rail and Road and the census office. Their figures stay theirs; the analysis, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From temperature graphs to trend detection',
    intro: 'School years are a guide; the free lesson sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Graphs in blocks', p: 'Block coding with charts and up-and-down patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and data', p: 'Lists, comparisons and first charts in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Trends and AI', p: 'Time series and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data at work', p: 'Adult Python for trends and reports.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and trends',
    h2: 'Does an AI know a wobble from a turn?',
    intro: 'Describing a chart is easy; describing it correctly is harder.',
    p1: 'Ask a chatbot to describe the trend in a series of numbers and it may point to every small dip as a change of direction, or skip over a missing year as if it were not there.',
    p2: 'A Stockport learner who has tested a threshold at five values knows to ask whether a claimed turning point survives a stricter rule.',
    closer: 'Telling a real change from noise is a skill that makes coding worth learning for Stockport teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'Reddish to Hazel Grove, all online',
    intro: 'Every part of the borough joins by live video.',
    cells: [
      { h3: 'Learners do the typing', p: 'Programs are written by the student; the tutor watches over screen share and asks guiding questions.' },
      { h3: 'Pitched correctly', p: 'Year 3 or Year 13, the school year plus the trial decide where a learner begins, with the exam board noted.' },
      { h3: 'Opening lesson free', p: 'You pay nothing for the first full lesson and leave with a clear suggestion.' },
      { h3: 'Classmates at one level', p: 'Five to ten UK learners who have reached the same stage.' },
      { h3: 'Term-time rhythm', p: 'Two lessons a week; nothing in school holidays.' },
      { h3: 'Unchanging hour', p: 'When clocks change, our tutors move and your lesson does not.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Stockport learners at one stage, free at the same hour, rarely share a street. Online classes give everyone the right group.' }
  },

  fees: {
    h2: 'Stockport fees',
    intro: 'Stockport is charged the same single rate as every country outside India.',
    first: 'A full lesson free, ending with a recommendation.',
    group: 'Roughly eight live group lessons each month.',
    private: 'Roughly eight live private lessons each month.',
    closer: 'Fees are in US dollars and never sterling. Payment begins once the trial has settled a course and a weekly slot; holidays, absences and a change of format are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from families we teach',

  book: {
    h2: 'Book a free Stockport lesson',
    intro: 'Send an age or school year and one interest. The trial might be a Scratch chart game, a first Python script, an AI mini-project, or the station turning-point puzzle.',
    success: 'Thank you. Your Stockport request has arrived.'
  },

  faq: {
    h2: 'Stockport questions',
    intro: 'Station data, local figures and lesson arrangements.',
    items: [
      { q: 'What is the population of Stockport?', a: 'The 2021 census counted 294,776 in Stockport borough; the ONS gives 117,935 for the Stockport built-up area.' },
      { q: 'Are online AI and programming lessons available in Stockport?', a: 'Yes. Our live AI, programming, Python and maths lessons take Stockport learners from 6 to 67.' },
      { q: 'What is the station project?', a: 'Learners find turning points in 28 years of ORR passenger estimates for Stockport station and use a zigzag threshold to separate real turns from noise.' },
      { q: 'What is a zigzag rule?', a: 'A rule that only confirms a peak or trough after the numbers have moved back by a set percentage.' },
      { q: 'Why does a missing year matter?', a: 'Skipping it can make a year look like a peak or trough that never existed; here 2002-03 became a false peak.' },
      { q: 'Are lessons held in person?', a: 'No, every lesson is live online.' },
      { q: 'Is there help for exam years?', a: 'Yes, GCSE and A level maths and computing, taught for understanding with no grade promised.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'The trial is free; then USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes, once you share your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Stockport',
    html: 'County choices are on the <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> page; <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a> prices Samuel Crompton\'s yarn, and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a> covers the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stockport and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-stk .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-stk .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-stk .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stk .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.021em; }
.cg-root.cg-stk .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-stk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stk .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-stk .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-stk .cg-callout { border-radius: 0 10px 10px 0; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Stockport (E08000007). Nomis Census 2021 TS007A: total 294,776; 20 to 24 13,367 (4.5%, England 6.0%); 25 to 29 16,943 (5.7%, 6.6%); 40 to 44 19,504 (6.6%, 6.3%); 65 to 69 15,298 (5.2%, 4.9%); 75 to 79 11,483 (3.9%, 3.6%); 85+ 8,262 (2.8%, 2.4%). ONS 2021 BUAs: Stockport 117,935; Cheadle Hulme 24,785; Reddish 22,200; Hazel Grove 20,170; Bramhall 17,195. ORR Table 1415a, Stockport (SPT): 1997-98 1,977,369; 2003-04 [x]; 2004-05 1,608,240; 2013-14 3,505,408; 2014-15 3,411,494; 2018-19 4,437,070; 2019-20 4,305,068; 2020-21 913,096; 2024-25 4,295,970; 19 stations with local authority Stockport.',
    localProject: 'Turning points: naive neighbour rule 9 (peaks 1999-00, 2002-03 false via gap, 2013-14, 2018-19; troughs 1998-99, 2001-02, 2004-05, 2014-15, 2020-21); zigzag 2% 10; 5%, 10%, 20%, 50% the same 3 (2004-05, 2018-19, 2020-21). 2020-21 78.8% below 2019-20; 2024-25 3.2% below 2018-19. Lesson family: turning-point detection, zigzag threshold, missing values.',
    requiredMentions: [
      '117,935',
      '294,776',
      'Cheadle Hulme',
      'Bramhall',
      'zigzag',
      'turning point',
      '4,437,070',
      '913,096',
      '1,608,240'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Stockport and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Office of Rail and Road, Table 1415 time series of passenger entries and exits by station.', url: 'https://dataportal.orr.gov.uk/statistics/usage/estimates-of-station-usage/' }
    ],
    rejectedClaims: [
      'Stockport Viaduct facts: Network Rail page returned 403; not claimed.',
      'Hat Works and hatting history: not used on the page.',
      'Reasons for any rise or fall in station use: not claimed.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
