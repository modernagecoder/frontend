'use strict';
// Na h-Eileanan Siar (cg- council area page, UK cluster Phase 7, row 271), searched as the Western Isles and the Outer
// Hebrides. One council. Spine: is the month with the most sunshine hours really the sunniest? Anchor (read raw 26
// September 2026): Met Office historic station data, Stornoway: "Location: 146400E 933200N, Lat 58.214 Lon -6.318, 15
// metres amsl"; monthly tmax, tmin, air frost, rain and sun from 1873 (sun from January 1929); "Sunshine data taken from
// an automatic Kipp & Zonen sensor marked with a #, otherwise sunshine data taken from a Campbell Stokes recorder"; first
// # month September 2002. Bangor (Wales) already used this station family's sensor switch for regression discontinuity,
// so here the switch is only a caveat, not the lesson.
// Our analysis (scratchpad nes/sun.py): possible sunshine = sum of daily sunrise-to-sunset lengths at 58.214 N (sun
// centre -0.833 degrees; declination approximation). Longest day 18.25 h, shortest 6.40 h. 1991 to 2020 monthly means
// (provisional months excluded; Jan and May have 29 years, others 30): Jan 31.7 h of 223.6 possible (14.2 per cent);
// Feb 57.4/258.2 (22.2); Mar 100.7/362.5 (27.8); Apr 147.3/429.8 (34.3); May 193.1/518.9 (37.2); Jun 149.5/543.4 (27.5);
// Jul 126.7/540.8 (23.4); Aug 123.5/472.7 (26.1); Sep 102.1/379.4 (26.9); Oct 73.9/311.2 (23.7); Nov 42.5/232.0 (18.3);
// Dec 25.6/201.9 (12.7). Sunniest single month on record: May 1994, 294.1 h (Campbell-Stokes). Dullest: December 2024,
// 6.8 h (automatic sensor).
// Lesson family: rates versus counts, normalising by opportunity (possible sunshine), day length; screened (sunshine
// hours, possible sunshine: 0 hits). Excluded by rule: Gaelic-language statistics.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Na h-Eileanan Siar S12000013 26,200; 12,700 households; 8.6
// per square kilometre; 0 to 14 3,700 (14.1 per cent), 65+ 6,900 (26.3 per cent) by our addition. NRS mid-2020 localities
// (only four above 500). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WESTERN ISLES', blurb: 'Stornoway, Lewis, Harris, the Uists and Barra, and a Stornoway weather lesson on why May beats June for sunshine.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-na-h-eileanan-siar',
  code: 'nes',
  accent: '#4A2A4C',
  accentRationale: 'Western Isles: a muted heather purple from the solver (9.8:1 on the darkest paper tint), greyer and softer than the Somerset and Lancashire purples',
  pageType: 'governorate',
  place: {
    name: 'Na h-Eileanan Siar',
    eyebrow: 'Western Isles, Na h-Eileanan Siar',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Highlands', href: '/coding-classes-in-highland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Western Isles',
  title: 'Coding Classes in the Western Isles | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Western Isles and Outer Hebrides: Stornoway, Lewis, Harris, the Uists, Benbecula and Barra.',
  ogDescription: 'Coding classes for the Outer Hebrides, and a Stornoway project: compare over 90 years of sunshine records with the most the sky could give, in Python.',
  twitterDescription: 'Western Isles coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Western Isles',
    description: 'Ability-placed online coding, Python, data analysis and mathematics for children, teenagers and adults across Na h-Eileanan Siar, taught live in English.'
  },

  h1: 'Coding classes in the Western Isles',
  capsuleQ: 'What are the best coding classes in the Western Isles?',
  capsule: 'Na h-Eileanan Siar, the Western Isles or Outer Hebrides, had about 26,200 residents in roughly 12,700 households at the 2022 census, at just 8.6 people per square kilometre. Stornoway on Lewis is the only sizeable town, and the rest of the population is spread across Lewis, Harris, North Uist, Benbecula, South Uist and Barra. For islands, live online lessons are the natural fit: our teachers teach from India on video, and a free first lesson sets each learner\'s stage, from P1 to S6 or adult. Learners from 6 up to 67 take coding, Python or maths, either alone with a teacher or with five to ten others at their level. The island project uses Stornoway\'s long weather record. Beyond that free lesson, island families pay USD 100 a month for a group place or USD 150 for individual teaching.',
  lead: 'The Met Office publishes monthly records from its Stornoway station, at latitude 58.2 degrees north, going back to 1873, with sunshine hours from 1929. Many people would guess that June, when the days are longest, is the sunniest month in the Outer Hebrides. The record says otherwise. But hours of sunshine are only half the story, because a month can only have as much sunshine as it has daylight. This page\'s project works out, in Python, the most sunshine each month could possibly have at Stornoway, compares it with what was measured, and finds that the fairest answer and the obvious answer are not the same question.',
  wa: 'Hello Modern Age Coders, we are in the Western Isles and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for the Western Isles',
    h2: 'Island starting courses',
    intro: 'A P2 pupil on Barra, a P6 in Stornoway, an S4 on Benbecula thinking about National 5, and an adult on Harris who works with data. These are their usual first courses, each after a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects from the first click, including weather and day-and-night games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Percentages, rates and graphs made real by coding them with real data.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including reading data files and plotting results.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis for adults, from spreadsheets to Python and fair comparisons.' }
    ]
  },

  sections: [
    {
      id: 'western-isles', tint: '', eyebrow: 'The islands in numbers',
      h2: 'About 26,200 people across the Outer Hebrides',
      intro: 'The islands-wide count is from the first 2022 census release, which NRS rounds to hundreds. Settlement figures are NRS estimates for mid-2020; only four places pass 500 people.',
      body: [
        { kind: 'table', caption: 'Na h-Eileanan Siar localities above 500 people, NRS mid-2020 estimates', head: ['Locality (as NRS names it)', 'Residents'], rows: [
          ['Steòrnabhagh (Stornoway)', '4,800'],
          ['Margaidh Ùr, Lacasdal and Bruach Màiri (Newmarket, Laxdale and Marybank)', '1,610'],
          ['Sanndabhaig (Sandwick)', '870'],
          ['Baile a\'Mhanaich (Balivanich)', '510']
        ] },
        { kind: 'p', text: 'With 8.6 residents per square kilometre, the Western Isles are far more thinly peopled than Scotland as a whole, where the average is 69.8. The islands skew older than Scotland: by our sums of the census age bands, 26.3 per cent of islanders are 65 or over (Scotland 20.1) and 14.1 per cent are under 15 (Scotland 15.3). Comhairle nan Eilean Siar sets school terms, which we have not read; each family tells us its own dates.' },
        { kind: 'callout', h3: 'Mainland pages and exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a> and <a class="cg-inline-link" href="/coding-classes-in-argyll-and-bute">Argyll and Bute</a>. For qualifications: <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Western Isles project',
      h2: 'Is June really the sunniest month?',
      intro: 'More than ninety years of sunshine, one day-length formula, and a fair comparison.',
      body: [
        { kind: 'p', text: 'The learner downloads the Stornoway file, a plain text table of monthly readings, and writes Python to read it. That alone teaches a lot: some months are missing and marked with dashes, some are provisional, and some are flagged with a # because an automatic sensor replaced the old Campbell-Stokes glass-ball recorder in September 2002. To keep the comparison fair, the learner averages each calendar month over 1991 to 2020 and leaves provisional months out. Then comes the key step: for every day of the year, compute the time from sunrise to sunset at latitude 58.2 degrees, and add them up month by month. That is the most sunshine the sky could possibly give.' },
        { kind: 'table', caption: 'Stornoway sunshine, 1991 to 2020 averages, with possible hours from our day-length model, 26 September 2026', head: ['Month', 'Measured hours', 'Possible hours', 'Share of possible'], rows: [
          ['March', '100.7', '362.5', '27.8 per cent'],
          ['April', '147.3', '429.8', '34.3 per cent'],
          ['May', '193.1', '518.9', '37.2 per cent'],
          ['June', '149.5', '543.4', '27.5 per cent'],
          ['July', '126.7', '540.8', '23.4 per cent'],
          ['August', '123.5', '472.7', '26.1 per cent'],
          ['December', '25.6', '201.9', '12.7 per cent']
        ] },
        { kind: 'p', text: 'May wins on both counts. It averages 193.1 hours of measured sunshine, far ahead of June\'s 149.5, even though June offers more possible hours, 543.4 against 518.9. As a share of what was possible, May reaches 37.2 per cent and June only 27.5. July is even cloudier by share, at 23.4 per cent, despite nearly the longest days of the year. At the dark end, December averages 25.6 hours, about an eighth of what the sky could give. The single sunniest month in the whole record is May 1994, with 294.1 hours; the dullest is December 2024, with just 6.8.' },
        { kind: 'p', text: 'Why the share matters: comparing raw hours between June and December mixes two things, the weather and the length of the day. Dividing by the possible hours separates them, and that trick, dividing a count by its opportunity, runs through all good data work, from goals per match to reviews per sale. One caution the learner must keep: because the recording instrument changed in 2002, comparing decades across that switch mixes weather with equipment, so we compare months within the same period rather than across it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Chart the monthly sunshine hours in a spreadsheet or Scratch, then colour each bar by how long the days are.' },
          { h3: 'Ages 11 to 15', p: 'Read the Stornoway file in Python, skip missing months, and average each month over thirty years.' },
          { h3: 'Ages 15 and up', p: 'Code the day-length formula, compute possible sunshine, and rank months by share instead of raw hours.' }
        ] },
        { kind: 'callout', h3: 'Real data, our model', p: 'The sunshine figures are the Met Office\'s. The possible hours come from our own day-length calculation, a standard approximation that ignores hills, horizon and the recorder\'s blind spots at very low sun, so treat the shares as a fair comparison between months, not an exact percentage.' }
      ]
    },
    {
      id: 'stornoway', tint: 'deep', eyebrow: 'Why Stornoway',
      h2: 'A weather record that starts in 1873',
      intro: 'What the Met Office file itself states.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data, Stornoway', head: ['File detail', 'What it says'], rows: [
          ['Position', 'Latitude 58.214, longitude -6.318, 15 metres above mean sea level'],
          ['Measurements', 'Monthly maximum and minimum temperature, air frost days, rain and sunshine'],
          ['Start', 'Temperatures and rain from 1873; sunshine from 1929'],
          ['Instruments', 'Campbell-Stokes recorder, then an automatic sensor marked # (from September 2002 in the file)'],
          ['Flags', 'Estimated values marked *, missing months marked ---, recent months marked provisional']
        ] },
        { kind: 'p', text: 'Long, messy, honest records like this one are what real data science is built on: weather apps, crop planning, solar panel forecasts, flight planning and climate research all start by reading such a file correctly. A pupil in Stornoway or on the Uists who has turned decades of numbers into a fair answer has done the job professional analysts do every day.' },
        { kind: 'p', text: 'We have no connection with the Met Office or Comhairle nan Eilean Siar. The data belongs to the Met Office; the day-length model, the shares and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From bar charts to fair comparisons',
    intro: 'The stages are a rough guide; the free lesson decides where to begin.',
    cols: [
      { band: 'P1 to P4', h3: 'Weather games', p: 'Block coding with days, nights, seasons and simple charts.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Numbers and percentages', p: 'Typed Python with averages, percentages and graphs.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Real data files', p: 'Reading, cleaning and analysing data beside National 5, Higher and Advanced Higher courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Analysis for work', p: 'Python and data analysis for adults, with fair comparisons built in.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and data',
    h2: 'An AI can chart a data file in seconds. Will it ask whether the comparison is fair?',
    intro: 'A correct chart can still answer the wrong question.',
    p1: 'Hand a chatbot the Stornoway file and ask for the sunniest month and it will usually add up hours and report a winner. Whether it divides by daylight, skips provisional months or notices the change of instrument depends entirely on whether someone thought to ask.',
    p2: 'A Western Isles learner who has built the possible-sunshine column knows to question what is being compared before trusting the chart. That habit is worth more than any single answer an AI can produce.',
    closer: 'So young people in the Western Isles should still learn to code in 2026: to know which question the numbers are really answering.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Island logistics',
    h2: 'Lessons that reach every island',
    intro: 'On islands, an evening coding club is rarely an option. A video lesson at home is.',
    cells: [
      { h3: 'Any island, any township', p: 'Lewis, Harris, the Uists or Barra: a laptop and a reliable connection are all that is needed.' },
      { h3: 'Island school language', p: 'Our teachers talk in P and S stages and name National 5, Higher and Advanced Higher just as island teachers do; lessons are in English.' },
      { h3: 'First lesson free', p: 'A proper lesson at no cost, then a plain recommendation.' },
      { h3: 'Classmates at the right level', p: 'Each group has five to ten learners working at one stage, joining from all over.' },
      { h3: 'Term time rhythm', p: 'Two lessons a week in term; the holidays are breaks.' },
      { h3: 'A steady UK time', p: 'Your booked UK time stays put through the clock changes; teachers in India time adjust.' }
    ],
    spec: { title: 'Why island learners join wider groups', p: 'With so few learners at any one stage on each island, a local group is not realistic. Grouping by stage across a wider pool gives a pupil in Sandwick or on Benbecula a class that fits.' }
  },

  fees: {
    h2: 'Fees in the Western Isles',
    intro: 'Stornoway or Barra, the fee is the same, matching what we charge in every country outside India.',
    first: 'One complete lesson free, then honest advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one learner and one teacher.',
    closer: 'Fees are in US dollars, and there is no sterling price. Payment starts only after the free lesson, once a course and a weekly time are agreed; the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'What reviewers say on Google',

  book: {
    h2: 'Book a free Western Isles lesson',
    intro: 'Let us know which island you are on, the learner\'s age or stage, and their interests. We might open with a Scratch game, a Python chart, or the Stornoway sunshine project.',
    success: 'Thank you. Your Western Isles request has been received.'
  },

  faq: {
    h2: 'Western Isles questions',
    intro: 'The islands, the sunshine project and practical matters.',
    items: [
      { q: 'How many people live in the Western Isles?', a: 'The census of 2022 found roughly 26,200 residents and 12,700 households in Na h-Eileanan Siar, after NRS rounding.' },
      { q: 'What is the largest town in the Outer Hebrides?', a: 'Stornoway, with 4,800 people in the NRS mid-2020 estimates, followed by the Newmarket, Laxdale and Marybank locality with 1,610.' },
      { q: 'What is the Stornoway project?', a: 'Learners read the Met Office Stornoway record in Python, compute how much sunshine each month could possibly have at 58.2 degrees north, and find May is sunniest both in hours and as a share of possible sunshine.' },
      { q: 'Is May sunnier than June in Stornoway?', a: 'On 1991 to 2020 averages, yes: 193.1 hours in May against 149.5 in June, or 37.2 per cent of possible sunshine against 27.5.' },
      { q: 'How long is the longest day in Stornoway?', a: 'Our day-length model gives about 18 hours 15 minutes from sunrise to sunset at midsummer, and about 6 hours 24 minutes at midwinter.' },
      { q: 'Can island pupils really learn online?', a: 'Yes. Every lesson is live on video, so a pupil on Barra learns exactly as one in Stornoway does, as long as the connection holds a video call.' },
      { q: 'Do you teach National 5 Maths?', a: 'Yes, and Higher Maths and Computing Science. We aim for real understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'Every age from 6 to 67, from block coding for young children to Python and data for adults.' },
      { q: 'How much are lessons?', a: 'Nothing for the opening lesson. After it, USD 100 a month buys a group place and USD 150 a month buys one-to-one teaching.' },
      { q: 'Do you pause for island school holidays?', a: 'They do. Your school sets the dates; pass them on and we keep those weeks free.' }
    ]
  },

  next: {
    eyebrow: 'Also see',
    h2: 'More Scottish pages',
    html: 'Visit <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a>, <a class="cg-inline-link" href="/coding-classes-in-argyll-and-bute">Argyll and Bute</a> and <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, or see every council on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Western Isles and beyond',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-highland', label: 'Highlands' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-nes .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-nes .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-nes .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-nes .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nes .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.017em; }
.cg-root.cg-nes .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-nes .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nes .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-nes .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-nes .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Na h-Eileanan Siar (S12000013), one council (Comhairle nan Eilean Siar). NRS, Scotland\'s Census 2022 first results, rounded population estimates: 26,200 (females 13,200, males 13,000); households 12,700; density 8.6 per square kilometre (Scotland 69.8); ages 0 to 14 3,700 (14.1 per cent), 65+ 6,900 (26.3 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Steòrnabhagh (Stornoway) 4,800; Margaidh Ùr, Lacasdal and Bruach Màiri (Newmarket, Laxdale and Marybank) 1,610; Sanndabhaig (Sandwick) 870; Baile a\'Mhanaich (Balivanich) 510. Met Office historic station data, Stornoway: "Location: 146400E 933200N, Lat 58.214 Lon -6.318, 15 metres amsl"; "Sunshine data taken from an automatic Kipp & Zonen sensor marked with a #, otherwise sunshine data taken from a Campbell Stokes recorder"; data from 1873, sunshine from 1929; first # month 2002-09.',
    localProject: 'Possible sunshine from day length at 58.214 N (sun centre -0.833 deg). Longest 18.25 h, shortest 6.40 h. 1991-2020 means (provisional excluded): Jan 31.7/223.6 (14.2); Feb 57.4/258.2 (22.2); Mar 100.7/362.5 (27.8); Apr 147.3/429.8 (34.3); May 193.1/518.9 (37.2); Jun 149.5/543.4 (27.5); Jul 126.7/540.8 (23.4); Aug 123.5/472.7 (26.1); Sep 102.1/379.4 (26.9); Oct 73.9/311.2 (23.7); Nov 42.5/232.0 (18.3); Dec 25.6/201.9 (12.7). Sunniest month May 1994 294.1; dullest Dec 2024 6.8. Instrument switch only a caveat (Bangor used it for regression discontinuity). Lesson family: rates vs counts, normalising by opportunity.',
    requiredMentions: [
      'Stornoway',
      'Balivanich',
      'Laxdale',
      'Marybank',
      'Sandwick',
      'Outer Hebrides',
      'Benbecula',
      'Harris',
      'possible sunshine',
      'Steòrnabhagh'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Met Office historic station data: Stornoway.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/stornowaydata.txt' }
    ],
    rejectedClaims: [
      'Gaelic-language statistics: excluded by rule.',
      'That the 2002 sensor change caused any change in recorded sunshine: not claimed; noted only as a caveat.',
      'Ferry routes, crossing times or travel between islands: not claimed.',
      'Callanish and St Kilda facts: not researched for this page.',
      'Named island schools and school term dates: none named or read.',
      'Exact sunshine percentages: page labels shares as a comparison from an approximate model.'
    ]
  }
};
