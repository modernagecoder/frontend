'use strict';
// Elgin (cg- town page, UK cluster Phase 8, towns band A, row 424). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does a program find a pattern in a long sequence,
// and why does it matter that it never looks back? (Knuth-Morris-Pratt string search, the failure function, comparison
// counts against naive search, one-pass streaming search).
// Data (read 29 September 2026): Met Office historic station data, Nairn (file nairndata.txt; header: site change in 1998;
// after 1998 291200E 857300N, Lat 57.593 Lon -3.821, 23 m amsl; before 1998 286900E 856800N, 8 m amsl; "Site closed" after
// December 2014). 1,000 monthly rainfall values 1931 to 2014. Longest unbroken run: January 1931 to June 1996, 786 months,
// all before the 1998 site change.
// Our run (scratchpad elg/kmp.py): each month coded L, M or H by the thirds of that calendar month's rainfall over all
// 1,000 months, giving a 786-letter text (L 272, M 263, H 251). Longest runs: L 6, M 6, H 5. Occurrences (overlapping):
// HHH 28, LLL 32, HHHH 6, LLLL 13, HHHHH 1, LLLLL 4, LLLLLH 2. Character comparisons naive / KMP: HHH 1,121 / 1,009;
// LLLL 1,176 / 1,044; LLLLLH 1,190 / 1,047 (1.51 against 1.33 per month). Constructed worst case (786 L letters, invented
// for contrast), pattern LLLLLH: naive 4,686, KMP 1,567.
// Lesson family: Knuth-Morris-Pratt string matching, failure (prefix) function, single-pass streaming search. Screened:
// "Knuth-Morris-Pratt", "failure function", "prefix function" 0 hits; "string matching" appears only on Dartford
// (quotation checking) and two non-lesson mentions.
// Place facts: NRS mid-2020 localities: Elgin 25,040 (largest in Moray; Forres 9,900 next, per the Moray page). postcodes.io
// (Moray, IV30): Bishopmill, New Elgin (suburban areas); Fogwatt, Lhanbryde (villages); Longhill (hamlet). Lhanbryde is
// registered by the Moray page and is not a mention here.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ELGIN', label: 'Elgin', blurb: 'AI and programming classes for Elgin, with a project that searches 786 months of Met Office weather records for patterns using the Knuth-Morris-Pratt algorithm.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-elgin',
  code: 'elg',
  accent: '#7A4A10',
  accentRationale: 'Elgin: a dark bronze (7.46:1 contrast), chosen by hand to stand apart from the purples and blues of recent Scottish pages',
  pageType: 'city',
  place: {
    name: 'Elgin',
    eyebrow: 'Elgin, Moray, Scotland',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Moray' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Moray', href: '/coding-classes-in-moray' },
    { label: 'Inverness', href: '/best-coding-class-in-inverness' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Elgin, Scotland',
  title: 'AI and Programming Classes in Elgin | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding lessons for Elgin, Bishopmill, New Elgin and Fogwatt learners in Moray, aged 6 to 67. The first lesson is free.',
  ogDescription: 'AI and programming classes for Elgin, with a project that hunts for wet and dry spells in 786 months of weather records using the Knuth-Morris-Pratt algorithm.',
  twitterDescription: 'Elgin AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Elgin',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Elgin and Moray, taught live with pattern-finding and reasoning first.'
  },

  h1: 'AI and programming classes in Elgin',
  capsuleQ: 'Which are the best AI and programming classes in Elgin?',
  capsule: 'Moray\'s biggest locality is Elgin, where National Records of Scotland estimated 25,040 people lived in mid-2020. Bishopmill and New Elgin are suburbs recorded in the IV30 district, alongside the villages of Fogwatt and Lhanbryde and the hamlet of Longhill. From the age of six up to 67, learners take AI, programming, Python, vibe coding and maths with tutors based in India, live on camera, in one-to-one lessons or in small classes grouped by stage. We teach pattern-finding and careful reasoning first, so a learner understands what a search or an AI model is really doing. Lesson one costs nothing and ends with our pick of course. The Elgin project turns 786 months of rainfall from the Met Office\'s former Nairn station into a string of letters and searches it for wet and dry spells with the Knuth-Morris-Pratt algorithm. Tuition after that is USD 100 a month in a class or USD 150 a month privately.',
  lead: 'Searching for a pattern inside a long sequence sounds simple: line the pattern up at every position and compare letter by letter. It works, but every time a partial match fails, that simple method slides forward one place and starts comparing again, re-reading letters it has already seen. In 1977 Knuth, Morris and Pratt published a method that never steps backwards. Before searching, it works out, for each position in the pattern, how much of the pattern would still match after a failure, a table called the failure function. This project applies it to real data: monthly rainfall recorded by the Met Office at Nairn from 1931 to 1996, coded as low, middle or high for the time of year.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Elgin?',

  picks: {
    eyebrow: 'Elgin course picks',
    h2: 'Elgin courses in patterns, Python and AI',
    intro: 'Choose a course to suit the learner\'s age. Every one opens with a free live lesson, booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: spotting repeats, coding weather as symbols and searching without starting over.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games planned by the learner, made with an AI and tested bit by bit.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning and sequence data in Python, including the Nairn pattern search.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python for algorithms, time series, AI and agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Elgin and Moray',
      h2: 'Elgin, Bishopmill, New Elgin and Fogwatt',
      intro: 'The NRS figure for Elgin, and places recorded in IV30.',
      body: [
        { kind: 'table', caption: 'Elgin in National Records of Scotland estimates', head: ['Area', 'People'], rows: [
          ['Elgin locality, mid-2020', '25,040']
        ] },
        { kind: 'p', text: 'For the IV30 district, postcodes.io lists Bishopmill and New Elgin as suburban areas of Moray, Fogwatt and Lhanbryde as villages and Longhill as a hamlet. Moray schools teach the Curriculum for Excellence, and so our planning follows Scottish P and S years, with SQA Computing Science and Maths support from National 5 up. Once we know the holiday dates, those weeks are left clear.' },
        { kind: 'callout', h3: 'Moray, Inverness and the SQA', p: 'More on <a class="cg-inline-link" href="/coding-classes-in-moray">coding classes in Moray</a>, <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science help</a>. Our reasons for teaching thinking before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Elgin project',
      h2: 'Searching 786 months of weather for patterns with Knuth-Morris-Pratt',
      intro: 'Turn rainfall into letters, look for runs of wet and dry months, and count every comparison.',
      body: [
        { kind: 'p', text: 'The Met Office publishes monthly records for its former Nairn weather station, which moved site in 1998 and closed at the end of 2014. The learner takes the longest stretch with no missing rainfall, January 1931 to June 1996, all at the original site: 786 months. Each month becomes a letter: L if its rain was in the lowest third for that calendar month, H if in the highest third, M otherwise. The result is a 786-letter string with 272 L, 263 M and 251 H. Now weather questions become text searches. How often did three high months come in a row? That is a search for HHH.' },
        { kind: 'table', caption: 'Patterns in the Nairn rainfall string, 1931 to 1996, and the comparisons each search needed, our Python run on Met Office data', head: ['Pattern', 'Meaning', 'Times found', 'Naive comparisons', 'KMP comparisons'], rows: [
          ['HHH', 'Three wet months in a row', '28', '1,121', '1,009'],
          ['LLLL', 'Four dry months in a row', '13', '1,176', '1,044'],
          ['LLLLLH', 'Five dry months, then a wet one', '2', '1,190', '1,047'],
          ['HHHHH', 'Five wet months in a row', '1', '1,153', '1,036']
        ] },
        { kind: 'p', text: 'On this data the saving is real but modest: KMP made about 10 to 12% fewer comparisons than the naive method. The bigger difference is behaviour. The naive search kept re-reading earlier months, 1.51 comparisons per month for LLLLLH, while KMP read each month once, in order, and never went back, 1.33 comparisons per month including the extra steps along its table. To see the worst case, the learner builds an invented string of 786 L letters: searching it for LLLLLH costs the naive method 4,686 comparisons and KMP 1,567. Real weather rarely looks like that, which is why the honest summary is that KMP guarantees good behaviour rather than always winning by a mile. The longest dry run in the real record was six months, and the longest wet run five.' },
        { kind: 'grid3', cells: [
          { h3: 'P5 to P7', p: 'Colour a year of weather as dry, middle or wet squares and hunt for three wet squares together.' },
          { h3: 'S1 to S3', p: 'Code Nairn\'s rainfall as L, M and H in Python and count the HHH runs with a simple loop.' },
          { h3: 'S4 and up', p: 'Build the KMP failure function, count comparisons against the naive search and test a worst case.' }
        ] },
        { kind: 'callout', h3: 'Met Office records, our coding', p: 'Rainfall comes from the Met Office historic station data for Nairn, published under the Open Government Licence. The letter coding, the searches and all counts are our own; the station is described only from its own file header.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Sequences and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Much of AI is pattern-finding in long sequences; how you search matters.',
      body: [
        { kind: 'table', caption: 'From the Nairn pattern search to working with AI', head: ['In the rainfall project', 'When AI works with sequences'], rows: [
          ['Rain became a string of L, M and H', 'AI turns text, sound and data into tokens'],
          ['KMP read each month once, in order', 'Single-pass methods suit live streams'],
          ['Savings on real data were about a tenth', 'Measure on your own data, not only the worst case'],
          ['The invented case showed 4,686 against 1,567', 'Know the worst case too'],
          ['Coding months as thirds was a choice', 'Every encoding shapes what can be found']
        ] },
        { kind: 'p', text: 'Language models read text as sequences of tokens, and monitoring agents watch streams of readings, alerts or logs for patterns as they arrive. An agent that must spot a pattern in a live feed cannot go back and re-read old data cheaply, which is exactly the property KMP provides. In vibe coding, the learner describes the search and an AI writes it; our Elgin learners then count the work it does on real data and on a nasty invented case before trusting it. Agents that watch data on your behalf need that same testing. Learners move on to building agents once their Python is self-sufficient, usually late in secondary or as adults, and Copilot Studio agents run as one-to-one lessons only. Our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">agents course for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> set out the path.' },
        { kind: 'p', text: 'None of the Met Office, National Records of Scotland or postcodes.io is linked to Modern Age Coders. We used their open data as published; the coding scheme, the searches and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From weather squares to string algorithms',
    intro: 'Primary or secondary year is our first guess; the free session sharpens it.',
    cols: [
      { band: 'P1 to P7', h3: 'How to think', p: 'Symbols, repeats and searching in order.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Vibe coding for kids', p: 'Games and apps the learner plans and an AI helps build.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Python and algorithms', p: 'Strings, searching and sequence data alongside SQA Computing Science.', courses: ['ai-ml-masterclass-teens', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Sequences, AI and agents', p: 'Time series, pattern search and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and patterns',
    h2: 'How does a computer search for a pattern in a long sequence?',
    intro: 'The simplest way checks the pattern at every position; the Knuth-Morris-Pratt algorithm does better by precomputing how much of the pattern still matches after a mismatch, so it reads the sequence once and never steps back.',
    p1: 'Searching 786 months of Nairn rainfall coded as letters, KMP needed about 10 to 12% fewer comparisons than the naive method on real patterns, and 1,567 against 4,686 on an invented worst case.',
    p2: 'Learners who have run both ask of any AI search or monitoring tool: does it re-read everything, and what is its worst case?',
    closer: 'Understanding how a search really works keeps Elgin teenagers in charge of the AI tools they use, and learning to code is how that understanding is built in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Bishopmill to Fogwatt, online',
    intro: 'Needed: a computer, a webcam and an internet connection steady enough for video.',
    cells: [
      { h3: 'Hands-on learner', p: 'Everything is typed and run by the student, while the tutor follows on screen share and asks what each count means.' },
      { h3: 'Trial shapes the plan', p: 'The free lesson shows where to start, and we note any SQA exam due.' },
      { h3: 'Free opening class', p: 'Class one has no charge and ends with a course suggestion.' },
      { h3: 'Same-stage groups', p: 'Five to ten learners from across Britain, matched by level.' },
      { h3: 'Two lessons a week', p: 'Paused for school holidays.' },
      { h3: 'Steady lesson time', p: 'British Summer Time changes are handled by our tutors, not your diary.' }
    ],
    spec: { title: 'Why online', p: 'In a region as spread out as Moray, five learners at one level on the same evening rarely live close together. Video brings them into one class.' }
  },

  fees: {
    h2: 'Elgin fees',
    intro: 'Elgin learners pay the international rate we use everywhere except India.',
    first: 'A complete free lesson, then a recommended course.',
    group: 'Around eight live lessons each month in a small class.',
    private: 'Around eight live private lessons each month.',
    closer: 'We bill in US dollars and never in pounds, starting only when the trial has fixed a course and a weekly slot. Holiday weeks, missed sessions and switching between private and group are explained on the pricing page.'
  },

  reviewsH2: 'Moray families and learners across the UK, reviewing us on Google',

  book: {
    h2: 'Book a free Elgin lesson',
    intro: 'Send us the learner\'s age or year and an interest or two. The trial could be a weather-squares pattern hunt, a Scratch game made with an AI, early Python, or searching a real sequence of data.',
    success: 'Thank you. Your Elgin request is with us.'
  },

  faq: {
    h2: 'Elgin questions',
    intro: 'Pattern search, the Nairn project, Python, vibe coding and lesson details.',
    items: [
      { q: 'What is the population of Elgin?', a: 'National Records of Scotland estimated 25,040 people in the Elgin locality in mid-2020.' },
      { q: 'Are AI and programming classes available online in Elgin?', a: 'Yes. Every lesson is live on video, for ages 6 to 67 in Elgin, Lhanbryde and across Moray.' },
      { q: 'What is the Knuth-Morris-Pratt algorithm?', a: 'A string search method, published in 1977, that finds a pattern in a text without ever moving backwards through the text, by using a precomputed table of how much of the pattern still matches after a mismatch.' },
      { q: 'What is a failure function?', a: 'The table KMP builds from the pattern alone. For each position it records the length of the longest start of the pattern that also ends the part matched so far, so after a mismatch the search resumes from there instead of starting again.' },
      { q: 'What does the Elgin project involve?', a: 'Coding 786 months of Met Office Nairn rainfall as low, middle or high, then searching the string for wet and dry spells with naive search and KMP and counting the work each does.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for every age; learners decide what the program should do and check what the AI writes.' },
      { q: 'When can learners build AI agents?', a: 'Once their Python is self-sufficient, usually late in secondary school or as adults; Copilot Studio agents are one-to-one only.' },
      { q: 'Do you support National 5 and Higher Computing Science?', a: 'Yes, and Advanced Higher and Maths too, taught for understanding without any promised grade.' },
      { q: 'How much are lessons?', a: 'The first is free; afterwards USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'No, we pause; send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More north of Scotland pages',
    html: 'Pages with projects of their own: <a class="cg-inline-link" href="/coding-classes-in-moray">Moray</a> (reading Roman numerals), <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, <a class="cg-inline-link" href="/coding-classes-in-highland">Highland</a> and <a class="cg-inline-link" href="/best-coding-class-in-aberdeen">Aberdeen</a>. For anywhere else, start from the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland page</a> or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Elgin and Moray',
  footerPlaces: [
    { href: '/coding-classes-in-moray', label: 'Moray' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-elg .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-elg .cg-hero h1 { font-weight: 790; letter-spacing: -0.028em; line-height: 1.04; }
.cg-root.cg-elg .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-elg .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-elg .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.021em; }
.cg-root.cg-elg .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-elg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-elg .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-elg .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-elg .cg-callout { border-left-width: 6px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Moray (S12000020). Scotland: Curriculum for Excellence, SQA National 5 to Advanced Higher. NRS mid-2020 settlement and locality estimates: Elgin 25,040 (Forres 9,900 next). postcodes.io (Moray, IV30): Bishopmill, New Elgin (suburban areas); Fogwatt, Lhanbryde (villages); Longhill (hamlet).',
    localProject: 'Met Office historic station data, Nairn (site change 1998; closed after December 2014): 1,000 rain months 1931 to 2014; longest unbroken run January 1931 to June 1996, 786 months. Calendar-month thirds coding: L 272, M 263, H 251. Hits: HHH 28, LLL 32, HHHH 6, LLLL 13, HHHHH 1, LLLLL 4, LLLLLH 2. Comparisons naive / KMP: HHH 1,121/1,009; LLLL 1,176/1,044; LLLLLH 1,190/1,047. Invented all-L worst case, LLLLLH: 4,686/1,567. Lesson family: KMP string matching, failure function, one-pass search.',
    requiredMentions: [
      '25,040',
      '4,686',
      'Bishopmill',
      'New Elgin',
      'Fogwatt',
      'Longhill',
      'Nairn station',
      'Knuth-Morris-Pratt',
      'failure function'
    ],
    sources: [
      { claim: 'Met Office historic station data, Nairn, monthly rainfall (Open Government Licence).', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/nairndata.txt' },
      { claim: 'National Records of Scotland, population estimates for settlements and localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'postcodes.io places: suburban areas, villages and hamlets in Moray (IV30).', url: 'https://api.postcodes.io/places?q=Bishopmill' }
    ],
    rejectedClaims: [
      'That the Nairn station is near Elgin or represents Elgin weather: not claimed; described only from its file header.',
      'Cathedral, distillery or river history: not read from a source; not claimed.',
      'Climate trends from the letter coding: none claimed; the coding is a teaching device.',
      'Largest locality in Moray: per NRS mid-2020 figures quoted on the Moray page (Elgin 25,040, Forres 9,900).',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
