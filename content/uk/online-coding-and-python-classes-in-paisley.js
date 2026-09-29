'use strict';
// Paisley (cg- town page, UK cluster Phase 8, towns band A, row 407; first Scottish town of the band). Keyword slug per the
// owner's rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when should you stop
// looking and choose? (optimal stopping, the secretary problem and its 37% rule, and what happens when the data is not in
// random order).
// Data (read 29 September 2026): Met Office historic station data, Paisley (247800E 664200N, 32 m amsl), monthly sunshine
// hours, file paisleydata.txt, January 1959 to March 2011, "Site closed". 52 complete years 1959 to 2010 used; no missing
// or estimated sunshine months in them. Sunniest month of the year: May 27 years, June 13, July 5, August 4, April 3.
// Our run (scratchpad pai/stop.py): the classic rule, look at the first r months without choosing, then take the first
// month sunnier than all of those; success = picking that year's sunniest month. Months in random order (200 shuffles per
// year): r 3 37.8%, r 4 38.8%, r 5 39.2%, r 6 37.3%, r 0 8.1%. Months in calendar order: r 3 19.2%, r 4 65.4%, r 5 36.5%,
// r 6 13.5%, r 0 to 2 and 8 to 11 0%. Always choosing May: 51.9%; always June: 25.0%.
// Lesson family: optimal stopping (secretary problem, 37% rule) and the random-order assumption. Screened: "secretary
// problem", "optimal stopping", "37% rule" 0 hits anywhere in content/. Earlier Paisley candidates rejected as spent:
// compression (Chelmsford LZW, York entropy), error detection (Dunfermline Hamming), max-flow (Portsmouth), ODE time
// stepping (East Lothian, Leidschendam), seasonal lag (South East England).
// Place facts: NRS mid-2020 settlement and locality estimates: Paisley 77,270 (Renfrewshire 183,800 is registered by the
// Renfrewshire page, not a mention here). postcodes.io (Renfrewshire, PA1 to PA3 districts) suburban areas: Ferguslie
// Park, Glenburn, Ralston, Gallowhill, Dykebar, Hunterhill, Williamsburgh, Seedhill, Oldhall, Lochfield, Shortroods,
// Blackhall.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'PAISLEY', label: 'Paisley', blurb: 'Online coding and Python classes for Paisley, with a project that tests the famous 37% rule on 52 years of Paisley sunshine records.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-paisley',
  code: 'psy',
  accent: '#5C3C58',
  accentRationale: 'Paisley: a dusky mauve (7.55:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Paisley',
    eyebrow: 'Paisley, Renfrewshire, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Renfrewshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Renfrewshire', href: '/coding-classes-in-renfrewshire' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Paisley, Scotland',
  title: 'Online Coding and Python Classes in Paisley | AI, Ages 6 to 67',
  description: 'Live online coding, Python, AI and vibe coding lessons for Paisley, Ralston, Glenburn and Gallowhill learners aged 6 to 67, from P1 to adult. First lesson free.',
  ogDescription: 'Online coding and Python classes for Paisley, with a project that puts the 37% rule for choosing to the test on 52 years of local sunshine records.',
  twitterDescription: 'Paisley online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Paisley',
    description: 'Online coding, Python, AI, vibe coding and maths for children, teenagers and adults in Paisley and Renfrewshire, taught live with reasoning first.'
  },

  h1: 'Online coding and Python classes in Paisley',
  capsuleQ: 'Which are the best online coding and Python classes in Paisley?',
  capsule: 'At mid-2020 National Records of Scotland put Paisley\'s locality population at 77,270, more than any other settlement in Renfrewshire. Ralston, Glenburn, Gallowhill, Ferguslie Park and Williamsburgh are among the suburbs recorded in the town\'s PA1 to PA3 postcode districts. From P1 pupils to adults of 67, anyone in Renfrewshire can join our India-based tutors on video for coding, Python, AI, vibe coding and maths, taught privately or with five to ten classmates working at one stage. We teach reasoning first, so a learner can check any answer an AI hands them. The first lesson is free and ends with a course recommendation. The Paisley project uses 52 years of sunshine records from the Met Office\'s former Paisley weather station to test a famous rule for deciding when to stop looking and choose. Carrying on costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Suppose you must pick the sunniest month of the year, but you see the months one at a time and cannot go back. Mathematicians have a celebrated answer to puzzles like this, called the secretary problem: watch the first 37% of the options without choosing, then take the first one that beats everything you have seen. If the options arrive in random order, no strategy does better on average. Paisley happens to have the data to test it. The Met Office weather station there recorded sunshine every month from 1959 until it closed in 2011, and months, of course, do not arrive in random order.',
  wa: 'Hello Modern Age Coders, could we book a free coding or Python lesson for a learner in Paisley?',

  picks: {
    eyebrow: 'Paisley course picks',
    h2: 'Paisley courses in thinking, Python and AI',
    intro: 'Four starting points by age. Whichever you pick, lesson one is live and free, and we take no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: when to keep looking, when to choose, and why rules have conditions.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, built with AI help and tested fully.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python from the ground up, with simulations such as the Paisley sunshine test.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through data work, simulation and building AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Paisley and Renfrewshire',
      h2: 'Paisley, Ralston, Glenburn and Ferguslie Park',
      intro: 'The NRS locality estimate for Paisley, and suburbs recorded in its postcode districts.',
      body: [
        { kind: 'table', caption: 'Paisley in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Paisley locality, mid-2020 estimate', '77,270']
        ] },
        { kind: 'p', text: 'Postcodes.io lists Ferguslie Park, Glenburn, Ralston, Gallowhill, Dykebar, Hunterhill, Williamsburgh, Seedhill, Oldhall, Lochfield, Shortroods and Blackhall as suburban areas in Renfrewshire, all within the PA1, PA2 and PA3 postcode districts. Schools here follow Scotland\'s Curriculum for Excellence, so we use P and S stages and support National 5, Higher and Advanced Higher. Send us your school\'s holiday dates and lessons will fit around them.' },
        { kind: 'callout', h3: 'Renfrewshire, Glasgow and Scottish qualifications', p: 'See <a class="cg-inline-link" href="/coding-classes-in-renfrewshire">coding classes in Renfrewshire</a>, <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths tuition</a>. Our reasons for teaching thinking first are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Paisley project',
      h2: 'The 37% rule and Paisley sunshine: optimal stopping meets real data',
      intro: 'A famous rule for choosing, 52 years of records, and one assumption that decides everything.',
      body: [
        { kind: 'p', text: 'The learner downloads the Met Office\'s historic data file for the Paisley station and keeps the 52 complete years from 1959 to 2010, each with twelve monthly sunshine totals and none missing. May was the sunniest month in 27 of those years, June in 13, July in 5, August in 4 and April in 3. The game: see the months one at a time, choose one, and win if it is that year\'s sunniest. The strategy: skip the first few months, note the highest total among them, then take the first month that beats it.' },
        { kind: 'table', caption: 'How often the skip-then-choose rule picks the sunniest month, our Python run on Met Office Paisley data, 1959 to 2010', head: ['Months skipped first', 'Months in random order', 'Months in calendar order'], rows: [
          ['0 (take the first)', '8.1%', '0%'],
          ['3', '37.8%', '19.2%'],
          ['4', '38.8%', '65.4%'],
          ['5', '39.2%', '36.5%'],
          ['6', '37.3%', '13.5%']
        ] },
        { kind: 'p', text: 'Shuffle the months and the theory holds: skipping four or five of the twelve, about the 37% the rule suggests, wins close to 39% of the time, far better than the 8.1% from grabbing the first month. In calendar order the picture changes completely. Skip January to April and the first month to beat them is usually May, which is so often the sunniest that the rule wins 65.4% of years. Skip one month too many, though, and May has already gone by: success drops to 36.5%, and to 13.5% if six are skipped. A person who simply always chooses May wins 51.9% of the time without looking at anything.' },
        { kind: 'p', text: 'The 37% rule is optimal only when the order is random and nothing else is known. Real data rarely looks like that. The skill worth learning is to ask what a rule assumes, then test those assumptions against the data in front of you.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Turn over cards one at a time, try to stop on the biggest, and compare skipping two, four and six.' },
          { h3: 'S1 to S3', p: 'Read the Paisley sunshine file in Python and find each year\'s sunniest month.' },
          { h3: 'S4 and up', p: 'Simulate the stopping rule on shuffled and real orders and explain the difference.' }
        ] },
        { kind: 'callout', h3: 'Met Office records, our simulation', p: 'Sunshine totals are from the Met Office historic station data for Paisley, published under the Open Government Licence. The games, the shuffles and all the percentages are our own calculations.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Rules and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Every rule of thumb smuggles in assumptions; find them before you lean on it.',
      body: [
        { kind: 'table', caption: 'From the Paisley stopping game to working with AI', head: ['In the sunshine project', 'When AI suggests a method'], rows: [
          ['Random order gave about 39%', 'Textbook results hold under textbook conditions'],
          ['Calendar order gave 65.4% or 13.5%', 'The same rule can shine or fail on real data'],
          ['Always choosing May won 51.9%', 'Domain knowledge can beat a clever general rule'],
          ['Skipping one extra month missed May', 'Small settings can matter enormously'],
          ['52 years gave a fair test', 'Check a rule on real history before trusting it']
        ] },
        { kind: 'p', text: 'Ask an AI assistant how to make a choose-once decision and it will very likely recite the 37% rule, correctly, without asking whether your options arrive in random order. In vibe coding the learner describes a program and an AI writes it; our Paisley learners then test the suggested method on real data before relying on it. AI agents making decisions on your behalf apply rules in the same way, so the assumptions need spelling out. Agents are built once a learner is comfortable in Python, typically from S5 or as an adult, and Copilot Studio agents are one-to-one lessons only. The steps are on our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents pathway for UK learners</a>, and the principle on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Met Office, National Records of Scotland or postcodes.io. We used only their open data; the simulation and any errors in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From card games to decision algorithms',
    intro: 'Your P or S stage is a first guide; the free lesson confirms where to start.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Choosing, comparing and asking what a rule assumes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P4 to S2', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and simulation', p: 'Real data, probability and simulation beside National 5, Higher and Advanced Higher.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python, data and agents', p: 'Data handling, simulation and AI agents, stage by stage.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and decisions',
    h2: 'What is the 37% rule, and does it work on real data?',
    intro: 'The 37% rule says to look at the first 37% of options without choosing, then take the first one better than all of those; no other strategy beats it on average, but only when the options come in random order.',
    p1: 'On 52 years of Paisley sunshine records it picked the sunniest month about 39% of the time with the months shuffled, but between 13.5% and 65.4% in real calendar order depending on how many months were skipped.',
    p2: 'Learners who have run that test ask of any rule an AI recommends: what does it assume, and is that true here?',
    closer: 'A Paisley S4 who habitually tests a rule before using it will not be misled by a chatbot\'s confident advice, and Python is where that habit gets built.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Ralston to Ferguslie Park, all online',
    intro: 'A computer, a webcam and a connection that manages video calls are all that is needed.',
    cells: [
      { h3: 'Learner-led coding', p: 'Students type, prompt and run every step; the tutor watches the shared screen and asks for reasons.' },
      { h3: 'Pitched by the trial', p: 'The free lesson shows the starting point; SQA courses are noted where relevant.' },
      { h3: 'Free opening lesson', p: 'Lesson one has no charge and ends with a course recommendation.' },
      { h3: 'Stage-matched classes', p: 'Five to ten learners from around the UK at one stage per class.' },
      { h3: 'Two each week', p: 'None during Scottish school holidays.' },
      { h3: 'Fixed hour', p: 'Tutors move with UK clock changes so your time does not shift.' }
    ],
    spec: { title: 'Why online', p: 'Five learners at one level, all free on the same evening, rarely live near each other. Over video, distance stops mattering.' }
  },

  fees: {
    h2: 'Paisley fees',
    intro: 'Paisley learners pay our international prices, which apply outside India.',
    first: 'A full lesson free, followed by our recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'We charge in US dollars, with no sterling price list, and send no invoice until the trial has agreed a course and a weekly time. The pricing page covers holidays, missed lessons and moving between private and group.'
  },

  reviewsH2: 'Renfrewshire families and learners across the UK, on Google',

  book: {
    h2: 'Book a free Paisley lesson',
    intro: 'Tell us the learner\'s age or P or S stage and a couple of interests. The trial might be a card-stopping game, a Scratch game planned with an AI, a first Python program, or exploring real weather records.',
    success: 'Thank you. Your Paisley request has reached us.'
  },

  faq: {
    h2: 'Paisley questions',
    intro: 'The 37% rule, Paisley sunshine records, Python, vibe coding and how lessons run.',
    items: [
      { q: 'What is the population of Paisley?', a: 'National Records of Scotland estimated 77,270 people in the Paisley locality in mid-2020.' },
      { q: 'Are online Python classes available in Paisley?', a: 'Yes, live on video for ages 6 to 67 in Paisley and across Renfrewshire.' },
      { q: 'What is the secretary problem?', a: 'A puzzle about picking the top option from a sequence seen one at a time with no going back. When the order is random, the winning strategy is to skip about 37% and then take the first option that beats all of those skipped.' },
      { q: 'Why did the 37% rule behave differently on real months?', a: 'Because months come in calendar order, not random order, and May was the sunniest month in 27 of 52 years. The rule assumes nothing is known about the order.' },
      { q: 'What does the Paisley project involve?', a: 'Reading 52 years of Met Office Paisley sunshine data in Python and testing the skip-then-choose rule on shuffled and real month orders.' },
      { q: 'Is vibe coding on offer?', a: 'It is, for every age group; learners plan the program themselves and check whatever the AI produces.' },
      { q: 'When can learners build AI agents?', a: 'Once Python is comfortable, usually from S5 or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you help with National 5 and Higher?', a: 'Yes, in Computing Science and Maths, taught for understanding; we never promise grades.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Then USD 100 a month in a group or USD 150 a month privately.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes, for Scottish school holidays; just send the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Renfrewshire and west of Scotland pages',
    html: 'Other pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-renfrewshire">Renfrewshire</a> (a rolling lift bridge), <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, <a class="cg-inline-link" href="/coding-classes-in-east-renfrewshire">East Renfrewshire</a> and <a class="cg-inline-link" href="/coding-classes-in-inverclyde">Inverclyde</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> cover everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Paisley and Renfrewshire',
  footerPlaces: [
    { href: '/coding-classes-in-renfrewshire', label: 'Renfrewshire' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-psy .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-psy .cg-hero h1 { font-weight: 760; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-psy .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-psy .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-psy .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.019em; }
.cg-root.cg-psy .cg-table caption { font-weight: 600; text-align: left; font-style: italic; font-size: 0.9rem; }
.cg-root.cg-psy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-psy .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-psy .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-psy .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Renfrewshire (S12000038). Scotland: Curriculum for Excellence, SQA National 5, Higher, Advanced Higher. NRS mid-2020 settlement and locality estimates: Paisley 77,270. postcodes.io (Renfrewshire, PA1 to PA3): Ferguslie Park, Glenburn, Ralston, Gallowhill, Dykebar, Hunterhill, Williamsburgh, Seedhill, Oldhall, Lochfield, Shortroods, Blackhall (suburban areas).',
    localProject: 'Met Office historic station data, Paisley (32 m amsl), sunshine 1959 to 2010 (52 complete years; site closed 2011). Sunniest month: May 27, June 13, July 5, August 4, April 3. Skip-r-then-choose success, random order / calendar order: r 0 8.1 / 0; r 3 37.8 / 19.2; r 4 38.8 / 65.4; r 5 39.2 / 36.5; r 6 37.3 / 13.5. Always May 51.9%. Lesson family: optimal stopping, secretary problem, random-order assumption.',
    requiredMentions: [
      '77,270',
      'Ralston',
      'Glenburn',
      'Gallowhill',
      'Ferguslie Park',
      'Williamsburgh',
      'Dykebar',
      'secretary problem',
      'optimal stopping',
      '37% rule'
    ],
    sources: [
      { claim: 'Met Office historic station data, Paisley, monthly sunshine hours (Open Government Licence).', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/paisleydata.txt' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas in Renfrewshire.', url: 'https://api.postcodes.io/places?q=Ralston' }
    ],
    rejectedClaims: [
      'Paisley pattern, thread mills or abbey history: not read from a source; not claimed.',
      'Why May is sunny in Paisley: no cause claimed; only the counts from the records.',
      'Any sunshine after 2011: the station closed; no later data used or implied.',
      'Largest settlement in Renfrewshire: per the NRS mid-2020 locality figures (Paisley 77,270, Renfrew 24,270, Johnstone 15,930, Erskine 15,010).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
