'use strict';
// Scotland (cg- nation page, UK cluster Phase 1 preview; index for the Scottish councils and cities).
// Spine: thirty-two councils and a name box. Fuzzy matching with edit distance (Levenshtein, dynamic
// programming) against the 32 council names exactly as mygov.scot lists them (read 20 September 2026),
// after lower-casing, "&" to "and" and dropping the word "council". Typos are rescued (Fyfe, Anguss,
// Highlands at distance 1; Perth & Kinross exact), but the matcher is confidently wrong on shortened
// names (Shetland -> Highland, Orkney and Borders -> Moray, Lanarkshire -> Renfrewshire), ties on shared
// words (Glasgow: Angus and Glasgow City both 5; Aberdeen: both Aberdeen councils 5; Dunbartonshire:
// East and West both 5) and cannot bridge English and Gaelic (Western Isles, Na h-Eileanan Siar, Eilean
// Siar all miss Comhairle nan Eilean Siar). Fixes: an alias list, a threshold relative to length, and
// asking when two candidates tie. Lesson family (edit distance, fuzzy matching) checked free site-wide
// on 20 September 2026. Place facts at primary sources: Scotland's Census (5,436,600 on 20 March 2022,
// up 141,200 or 2.7% since 2011), Scottish Government Pupil and teacher characteristics 2025 (695,923
// pupils, 2,435 publicly funded schools, pupil teacher ratio 13.2), Education Scotland (broad general
// education to the end of S3), Qualifications Scotland course pages, mygov.scot (32 councils), gov.uk
// list of cities (8 in Scotland). The school start cut-off (1 March) belongs to the UK hub and is only
// linked here.

const COUNCILS = [
  ['Aberdeen City Council', 'best-coding-class-in-aberdeen'], ['Aberdeenshire Council', 'coding-classes-in-aberdeenshire'], ['Angus Council', 'coding-classes-in-angus'],
  ['Argyll and Bute Council', 'coding-classes-in-argyll-and-bute'], ['Clackmannanshire Council', 'coding-classes-in-clackmannanshire'], ['Comhairle nan Eilean Siar', 'coding-classes-in-na-h-eileanan-siar'],
  ['Dumfries and Galloway Council', 'coding-classes-in-dumfries-and-galloway'], ['Dundee City Council', 'best-coding-class-in-dundee'], ['East Ayrshire Council', 'coding-classes-in-east-ayrshire'],
  ['East Dunbartonshire Council', 'coding-classes-in-east-dunbartonshire'], ['East Lothian Council', 'coding-classes-in-east-lothian'], ['East Renfrewshire Council', 'coding-classes-in-east-renfrewshire'],
  ['Edinburgh Council', 'best-coding-class-in-edinburgh'], ['Falkirk Council', 'coding-classes-in-falkirk'], ['Fife Council', 'coding-classes-in-fife'],
  ['Glasgow City Council', 'best-coding-class-in-glasgow'], ['Highland Council', 'coding-classes-in-highland'], ['Inverclyde Council', 'coding-classes-in-inverclyde'],
  ['Midlothian Council', 'coding-classes-in-midlothian'], ['Moray Council', 'coding-classes-in-moray'], ['North Ayrshire Council', 'coding-classes-in-north-ayrshire'],
  ['North Lanarkshire Council', 'coding-classes-in-north-lanarkshire'], ['Orkney Islands Council', 'coding-classes-in-orkney'], ['Perth and Kinross Council', 'coding-classes-in-perth-and-kinross'],
  ['Renfrewshire Council', 'coding-classes-in-renfrewshire'], ['Scottish Borders Council', 'coding-classes-in-scottish-borders'], ['Shetland Islands Council', 'coding-classes-in-shetland'],
  ['South Ayrshire Council', 'coding-classes-in-south-ayrshire'], ['South Lanarkshire Council', 'coding-classes-in-south-lanarkshire'], ['Stirling Council', 'best-coding-class-in-stirling'],
  ['West Dunbartonshire Council', 'coding-classes-in-west-dunbartonshire'], ['West Lothian Council', 'coding-classes-in-west-lothian']
];
const CITIES = [['Aberdeen', 'best-coding-class-in-aberdeen'], ['Dundee', 'best-coding-class-in-dundee'], ['Dunfermline', 'best-coding-class-in-dunfermline'], ['Edinburgh', 'best-coding-class-in-edinburgh'],
  ['Glasgow', 'best-coding-class-in-glasgow'], ['Inverness', 'best-coding-class-in-inverness'], ['Perth', 'best-coding-class-in-perth-scotland'], ['Stirling', 'best-coding-class-in-stirling']];
// Name each council and city; link the ones whose UK page has been built.
function linked(list) {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return list.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'nation', tag: 'SCOTLAND', label: 'Scotland', blurb: 'Curriculum for Excellence, the 32 councils, and a project on matching what people type to official names.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School stage (P1 to S6) or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-scotland',
  code: 'sco',
  accent: '#2B1DA5',
  accentRationale: 'Scotland: a deep saltire blue-violet from the solver (9.36:1 on every paper tint), a different hue family from the UK hub blue',
  pageType: 'city',
  place: {
    name: 'Scotland',
    eyebrow: 'Scotland, United Kingdom',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Scotland',
  title: 'Coding and AI Classes in Scotland | National 5 and Highers',
  description: 'Live online coding, Python and AI classes for learners in Scotland, from P1 to S6, National 5, Higher and beyond, ages 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Scotland, on a page about 32 councils, a name box, and why fuzzy matching sends Shetland to the Highland Council.',
  twitterDescription: 'Coding and AI classes in Scotland for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Scotland',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Scotland, fitted to Curriculum for Excellence and taught live in English.'
  },

  h1: 'Coding and AI classes in Scotland',
  capsuleQ: 'What are the best coding classes in Scotland?',
  capsule: 'Scotland runs its own school system, so a class for a Scottish learner has to speak its language: primary 1 to 7, S1 to S6, a broad general education that Education Scotland says continues to the end of S3, and then National 5, Higher and Advanced Higher, now awarded by Qualifications Scotland. The scale is national: 695,923 pupils in 2,435 publicly funded schools in 2025, in a country of 5,436,600 people on Census Day 2022, served by 32 councils. Modern Age Coders teaches live online from India, so a learner in Lerwick and one in Largs join a class at the same level at the same moment, anyone from 6 to 67, in groups of five to ten or one to one. There is no charge for the opening lesson; afterwards a group place is USD 100 a month and private lessons USD 150.',
  lead: 'Almost every Scottish website with a form has a box asking for your council, and people fill it in the way they speak. Western Isles, not Comhairle nan Eilean Siar. Glasgow, not Glasgow City Council. Borders, Lanarkshire, Edinburgh City. A programmer who wants to be kind accepts near misses, and the standard tool for that is edit distance: count the fewest single-letter changes that turn one string into another, and pick the council with the smallest count. We ran it against the 32 names on mygov.scot. It fixed Fyfe, Anguss and Highlands in one letter each. It also sent Shetland to the Highland Council, Orkney to Moray, and Lanarkshire to Renfrewshire, each time with total confidence, and it could not decide whether Glasgow meant Glasgow City or Angus. Kindness without judgement produces confident mistakes, and learning to tell the two apart is the thread of this page.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Scotland.',

  picks: {
    eyebrow: 'Course picks for Scotland',
    h2: 'Four courses from P1 to the senior phase and beyond',
    intro: 'A P3 child in Inverness who wants to make a game, an S2 pupil in Dundee ready for proper code, an S5 student in Stirling thinking about Higher Computing Science, and an adult in Paisley who spends too long tidying spreadsheets. Each starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'P1 to P5', note: 'Scratch games built from a plan, including a menu that understands what a player meant even when they mistype it.' },
      { course: 'python-ai-kids-masterclass', band: 'P6 to S2', note: 'The step from blocks to typed Python during the later years of the broad general education.' },
      { course: 'python-complete-masterclass-teens', band: 'S3 to S6', note: 'Python in depth for the senior phase, where learners write a council-name matcher and learn when it should refuse to guess.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For grown-ups who clean lists at work: matching names that are spelled a dozen ways without inventing matches.' }
    ]
  },

  sections: [
    {
      id: 'scotland', tint: '', eyebrow: 'Scotland in figures',
      h2: '5,436,600 people, 695,923 pupils and 32 councils',
      intro: 'Each figure comes from the body that publishes it. They measure different things at different dates, and the table keeps them apart.',
      body: [
        { kind: 'table', caption: 'Scotland from its own sources', head: ['Measure', 'Figure', 'Published by'], rows: [
          ['Population on Census Day, 20 March 2022 (rounded estimate)', '5,436,600', 'National Records of Scotland, Scotland\'s Census'],
          ['Growth since the 2011 census', '141,200, or 2.7 percent', 'National Records of Scotland, Scotland\'s Census'],
          ['Pupils in publicly funded schools, 2025', '695,923', 'Scottish Government, Pupil and teacher characteristics 2025'],
          ['Publicly funded schools, 2025', '2,435', 'Scottish Government, the same release'],
          ['Pupil to teacher ratio, 2025', '13.2', 'Scottish Government, the same release'],
          ['Councils', '32', 'mygov.scot']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A broad general education', p: 'Education Scotland describes the broad general education as beginning in early learning and childcare and continuing to the end of S3, the third year of secondary school. Computing is part of it, taught through the technologies curriculum rather than as an exam subject.' },
          { h3: 'The senior phase', p: 'From S4, pupils work towards qualifications. Qualifications Scotland publishes courses in National 5, Higher and Advanced Higher Computing Science, and says the existing course documents remain current since it replaced SQA on 1 February 2026.' },
          { h3: 'Thirty-two councils', p: 'Every Scottish council runs its own schools, admissions and holidays. mygov.scot lists all 32, and one of them, Comhairle nan Eilean Siar, uses its Gaelic name as its official one.' }
        ] },
        { kind: 'p', text: 'The date a Scottish child starts school, split at 1 March rather than 1 September, is set out with England and Northern Ireland on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>, which is where its project lives.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Thirty-two councils and a name box',
      intro: 'Learners write a matcher that takes whatever a person types and finds the council they meant, using edit distance, then test it on the ways Scots actually refer to their councils.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Tidy both sides', p: 'Lower-case everything, turn an ampersand into and, and drop the word council, so that Perth & Kinross and Perth and Kinross Council become the same string before any comparison.' },
          { h3: '2. Measure the distance', p: 'Edit distance, often called Levenshtein distance, counts the fewest insertions, deletions and substitutions between two strings. It is computed with a small table filled in cell by cell, a classic piece of dynamic programming.' },
          { h3: '3. Refuse to guess', p: 'The closest name is not always right. Learners add an alias list, a threshold that grows with the length of the input, and a rule that two equally close councils mean asking the person, not picking one.' }
        ] },
        { kind: 'table', caption: 'Our run against the 32 names on mygov.scot, 20 September 2026 (d = edit distance)', head: ['Typed', 'Closest council', 'd', 'Verdict'], rows: [
          ['Fyfe', 'Fife Council', '1', 'Right: a one-letter typo'],
          ['Anguss', 'Angus Council', '1', 'Right'],
          ['Highlands', 'Highland Council', '1', 'Right'],
          ['Perth & Kinross', 'Perth and Kinross Council', '0', 'Right, once the ampersand is tidied'],
          ['Glasgow', 'Angus Council and Glasgow City Council', '5 each', 'A tie, and half of it absurd'],
          ['Aberdeen', 'Aberdeen City Council and Aberdeenshire Council', '5 each', 'A genuine tie: ask'],
          ['Dunbartonshire', 'East and West Dunbartonshire', '5 each', 'A genuine tie: ask'],
          ['Shetland', 'Highland Council', '4', 'Wrong: Shetland Islands Council is further away'],
          ['Orkney', 'Moray Council', '4', 'Wrong'],
          ['Borders', 'Moray Council', '5', 'Wrong: Scottish Borders Council is further away'],
          ['Lanarkshire', 'Renfrewshire Council', '5', 'Wrong: North and South Lanarkshire both lose'],
          ['Western Isles', 'A four-way tie of unrelated councils', '9', 'Wrong: no letters in common with the Gaelic name']
        ] },
        { kind: 'callout', h3: 'Why an AI does not settle this for you', p: 'Ask an assistant for a fuzzy matcher and it will write a correct edit-distance function and pick the lowest score, which is exactly what produced Shetland to Highland. The function is not faulty; it measures letters, and letters are not meaning. Only someone who knows that people say Western Isles for Comhairle nan Eilean Siar, and Borders for the Scottish Borders, can write the alias list that fixes it, and only someone who has watched a tie get broken arbitrarily knows to make the program ask. That judgement is the part of the job that does not move to the machine.' }
      ]
    },
    {
      id: 'habits', tint: 'tint', eyebrow: 'Matching names safely',
      h2: 'Five rules for matching what people type',
      intro: 'For forms, spreadsheets, mailing lists and any data where the same place or person is spelled more than one way.',
      body: [
        { kind: 'table', caption: 'Fuzzy matching without inventing matches', head: ['Rule', 'In practice', 'What it prevents'], rows: [
          ['Normalise both sides first', 'Case, punctuation, ampersands and filler words such as council or city', 'Real names failing on formatting alone'],
          ['Keep an alias list', 'Common names, old names and names in other languages, taken from the organisations themselves', 'Western Isles never finding Comhairle nan Eilean Siar'],
          ['Scale the threshold', 'Allow a distance of one or two for long names, less for short ones', 'Shetland matching Highland at a distance of four'],
          ['Treat ties as questions', 'If two candidates are equally close, show both and ask', 'Glasgow being silently filed under Angus'],
          ['Keep the evidence', 'Store what was typed, what it matched and the distance', 'Mistakes that nobody can trace later']
        ] },
        { kind: 'p', text: 'The scale is the reason this matters. With 695,923 pupils in Scottish schools and a council box on most forms that touch them, a matcher that is right nine times in ten still files tens of thousands of records under the wrong council. A few lines of care at the start cost far less than cleaning up afterwards.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Scottish Government, Education Scotland, Qualifications Scotland, National Records of Scotland, mygov.scot or any Scottish council, and nothing here suggests one. The council names are quoted as mygov.scot lists them; the matching results are our own run on 20 September 2026.' }
      ]
    },
    {
      id: 'places', tint: '', eyebrow: 'Scotland, place by place',
      h2: 'Thirty-two councils and eight cities',
      intro: 'Each council area and city will have a page of its own as this series grows, written for its own schools, libraries and places. Linked names are live now.',
      body: [
        { kind: 'p', text: '<strong>Councils, as mygov.scot lists them:</strong> ' + linked(COUNCILS) + '.' },
        { kind: 'p', text: '<strong>Cities with city status:</strong> ' + linked(CITIES) + '. The UK government\'s list of cities, published on 29 August 2022, names these eight in Scotland.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a menu that forgives typos to a matcher that knows when to ask',
    intro: 'Where a learner starts is set in the free lesson, from what they can do, whatever their stage at school.',
    cols: [
      { band: 'P1 to P5', h3: 'Forgiving menus', p: 'Children build games with menus and questions that cope with small mistakes, and notice when a guess goes wrong.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P6 to S2', h3: 'Strings and loops', p: 'Python strings, loops and comparisons: the pieces an edit-distance table is built from.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Algorithms with judgement', p: 'Dynamic programming, thresholds and alias lists, alongside National 5 and Higher Computing Science work.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Cleaner data at work', p: 'Adults match and merge the lists they inherit, without letting a clever tool make up matches.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a fuzzy matcher in seconds. Why should a Scottish pupil learn when to distrust it?',
    intro: 'Because the matcher will be confident about Shetland being in the Highlands.',
    p1: 'The code an assistant produces for this job is usually textbook: an edit-distance function, a loop over the candidates, the smallest score wins. Run on Scottish council names it rescues typos neatly and then files Shetland under the Highland Council, Orkney under Moray, and Glasgow somewhere between Glasgow City and Angus. Nothing in the output looks uncertain. The mistakes only appear when a person who knows Scotland reads the results.',
    p2: 'A learner who has built and broken this matcher carries the lesson into every job that involves messy names: school lists, club registers, customer records, the columns an AI is asked to tidy. Measure similarity, yes, but keep an alias list, scale the threshold, and ask when two answers are equally good. The machine does the arithmetic. Deciding what counts as the same thing is the human part.',
    closer: 'So the case for a Scottish child learning to code in 2026 is not that computers are hard to use. It is that they are easy to use badly, and a country of 32 councils and two languages on its road signs needs people who can tell a close match from a correct one.',
    blogAnchor: 'the case for learning to program in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the Borders to Shetland, the same lesson at the same time',
    intro: 'An online class reaches the islands as easily as the Central Belt.',
    cells: [
      { h3: 'Island or city', p: 'A learner on Orkney and a learner in Glasgow share one group, and neither needs a ferry, a train or a lift.' },
      { h3: 'Scottish stages kept', p: 'P1 to P7, S1 to S6, Nationals and Highers keep their Scottish names; teaching is in English.' },
      { h3: 'Start with a free lesson', p: 'A proper task with a teacher, then a recommended level, course and regular time. No card details are taken.' },
      { h3: 'Groups that fit', p: 'Five to ten learners at the same level, from across Scotland and beyond, so that each stage has a group at a sensible hour.' },
      { h3: 'Council holidays', p: 'Each Scottish council publishes its own term dates, and the exam diet has its own timetable; families and teachers agree breaks around both.' },
      { h3: 'Two clocks', p: 'India is five and a half hours ahead of Scotland in winter and four and a half in summer, and every lesson is booked in UK time.' }
    ],
    spec: { title: '2,435 schools, one online group', p: 'A group needs five learners who match on level, subject and hour, which is easier across a whole country than in any single town, especially in the islands and the rural council areas.' }
  },

  fees: {
    h2: 'What classes cost in Scotland',
    intro: 'One price list for the whole country, from the Central Belt to the islands.',
    first: 'A full lesson on a real task, ending with a recommended level and course.',
    group: 'Around eight lessons a month in a group of five to ten at one level.',
    private: 'Around eight lessons a month with a teacher for one learner.',
    closer: 'Fees are in US dollars, the rate for every family outside India, with no pound price list and no difference between councils. Nothing is paid until the free lesson has agreed a course and a regular time; the pricing page covers pauses, missed lessons and changing format.'
  },

  reviewsH2: 'Six Google reviews, unedited',

  book: {
    h2: 'Which stage is the learner at?',
    intro: 'P-stage, S-stage or age, and what they like, is all we need. The first task might be a Scratch game, a first Python string comparison, or the council matcher on this page.',
    success: 'Thank you. Your class request from Scotland is with the team.'
  },

  faq: {
    h2: 'Coding classes in Scotland: common questions',
    intro: 'The school system, the councils, the project and the lessons.',
    items: [
      { q: 'How many pupils and schools are there in Scotland?', a: 'The Scottish Government counted 695,923 pupils in 2,435 publicly funded schools in 2025, with a pupil to teacher ratio of 13.2, in its Pupil and teacher characteristics release of 9 December 2025.' },
      { q: 'What is the broad general education?', a: 'Education Scotland describes it as the part of Curriculum for Excellence that begins in early learning and childcare and continues to the end of S3. The senior phase, with National 5, Higher and Advanced Higher, follows.' },
      { q: 'Who awards National 5 and Higher Computing Science now?', a: 'Qualifications Scotland, which replaced SQA on 1 February 2026. Its course pages say the existing National 5 Computing Science documents remain current.' },
      { q: 'How many councils does Scotland have?', a: 'Thirty-two. mygov.scot lists them all, and Comhairle nan Eilean Siar is the one whose official name is in Gaelic.' },
      { q: 'What is the council-name project?', a: 'Learners match typed council names to the 32 official ones with edit distance. It fixes typos such as Fyfe and Anguss, but sends Shetland to Highland and Lanarkshire to Renfrewshire and ties Glasgow with Angus, so learners add an alias list, a length-based threshold and a rule to ask on a tie.' },
      { q: 'Do you teach National 5 and Higher Computing Science?', a: 'Teachers work with the content of National 5, Higher and Advanced Higher Computing Science alongside school, as tutoring and extra practice; they do not replace the school course or its assessment.' },
      { q: 'What time are lessons for learners in Scotland?', a: 'A regular time is agreed after the free lesson, depending on which groups have space at the learner\'s level. India is five and a half hours ahead of the UK in winter and four and a half in summer, and times are always given in UK time.' },
      { q: 'Is there a Modern Age Coders centre in Scotland?', a: 'No. All teaching is live and online, and no Scottish premises or UK office is claimed anywhere. A learner needs a laptop or desktop, working audio and a steady connection, and the phone number on this page is Indian and described as such.', boiler: true },
      { q: 'What do coding classes in Scotland cost?', a: 'Nothing for the first lesson. After that, a group place costs USD 100 a month for two live lessons a week, around eight in a month, in a group of five to ten, and one-to-one teaching costs USD 150 a month on the same rhythm. Course, format and weekly hour are settled before any payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched by level, pace and goal rather than by age or postcode. If no group at the right level runs at a workable hour, one-to-one lessons are the alternative.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore',
    h2: 'The rest of the UK',
    html: 'The four school systems of the UK, and the date each one starts children at school, are on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>. For what any class should offer, read <a class="cg-inline-link" href="/best-online-coding-classes-uk">choosing an online coding class in the UK</a>, and for AI built from the ground up, <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-uk">AI and machine learning classes in the UK</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Scotland and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-online-coding-classes-uk', label: 'Choosing a class, UK' },
    { href: '/ai-and-machine-learning-classes-in-uk', label: 'AI classes, UK' }
  ],

  personalityCss: `
.cg-root.cg-sco .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-sco .cg-hero h1 { font-weight: 800; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-sco .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-sco .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sco .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.014em; }
.cg-root.cg-sco .cg-grid-3 { gap: clamp(1rem, 2.3vw, 1.85rem); }
.cg-root.cg-sco .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-sco .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sco .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-sco .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-sco .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Scotland. Scotland\'s Census 2022, rounded population estimates (National Records of Scotland): "On Census Day, 20 March 2022" the population "was estimated to be 5,436,600"; "The population grew by 141,200 (2.7%) since the previous census in 2011". Scottish Government, Pupil and teacher characteristics 2025, headline statistics (first published 9 December 2025): 695,923 pupils; 2,435 publicly funded schools; pupil teacher ratio 13.2. Education Scotland, broad general education: "The broad general education begins in early learning and childcare and continues to the end of S3 (the third year of secondary school)." Qualifications Scotland (sqa.org.uk): National 5, Higher and Advanced Higher Computing Science course pages; "On 1 February 2026, Qualifications Scotland replaced SQA and became Scotland\'s new national awarding body"; "The documents on this page remain current". mygov.scot, Find your local council: 32 councils, listed as Aberdeen City Council, Aberdeenshire Council, Angus Council, Argyll and Bute Council, Clackmannanshire Council, Comhairle nan Eilean Siar, Dumfries and Galloway Council, Dundee City Council, East Ayrshire Council, East Dunbartonshire Council, East Lothian Council, East Renfrewshire Council, Edinburgh Council, Falkirk Council, Fife Council, Glasgow City Council, Highland Council, Inverclyde Council, Midlothian Council, Moray Council, North Ayrshire Council, North Lanarkshire Council, Orkney Islands Council, Perth and Kinross Council, Renfrewshire Council, Scottish Borders Council, Shetland Islands Council, South Ayrshire Council, South Lanarkshire Council, Stirling Council, West Dunbartonshire Council, West Lothian Council. gov.uk List of cities (29 August 2022): Scotland 8, Aberdeen, Dundee, Dunfermline, Edinburgh, Glasgow, Inverness, Perth, Stirling.',
    localProject: 'Thirty-two councils and a name box: edit distance (Levenshtein, dynamic programming) against the 32 council names as mygov.scot lists them, after lower-casing, ampersand to and, and dropping council. Our run of 20 September 2026: Fyfe, Anguss, Highlands at distance 1 (right); Perth & Kinross and Argyll & Bute at 0 once tidied; Glasgow ties Angus and Glasgow City at 5; Aberdeen ties both Aberdeen councils at 5; Dunbartonshire ties East and West at 5; Shetland goes to Highland (4), Orkney to Moray (4), Borders to Moray (5), Lanarkshire to Renfrewshire (5); Western Isles, Na h-Eileanan Siar and Eilean Siar never reach Comhairle nan Eilean Siar. Fixes: alias list, length-scaled threshold, ask on ties, keep the evidence. Lesson family: fuzzy matching and edit distance; checked free on 20 September 2026 against every dossier (edit distance, Levenshtein, fuzzy, string similarity: 0) and distinct from name versus identifier (Longford, Friesland), joining on a name (Liang) and bilingual placenames with a missing licence (Waterford).',
    requiredMentions: [
      '5,436,600',
      '141,200',
      '695,923',
      '2,435',
      '20 March 2022',
      'end of S3',
      'Comhairle nan Eilean Siar',
      'Glasgow City Council',
      'Renfrewshire Council',
      'East Dunbartonshire Council',
      'Levenshtein',
      'edit distance'
    ],
    sources: [
      { claim: 'Scotland\'s Census 2022, rounded population estimates: 5,436,600 on Census Day, 20 March 2022; up 141,200 (2.7%) since 2011.', url: 'https://www.scotlandscensus.gov.uk/2022-reports/scotlands-census-2022-rounded-population-estimates/' },
      { claim: 'Scottish Government, Pupil and teacher characteristics 2025, headline statistics (9 December 2025): 695,923 pupils, 2,435 publicly funded schools, pupil teacher ratio 13.2.', url: 'https://www.gov.scot/publications/pupil-and-teacher-characteristics-2025/pages/headline-statistics/' },
      { claim: 'Education Scotland: the broad general education begins in early learning and childcare and continues to the end of S3.', url: 'https://education.gov.scot/curriculum-for-excellence/about-curriculum-for-excellence/curriculum-stages/broad-general-education/' },
      { claim: 'Qualifications Scotland, National 5 Computing Science: replaced SQA on 1 February 2026; course documents remain current.', url: 'https://www.sqa.org.uk/sqa/56923.html' },
      { claim: 'mygov.scot, Find your local council: the 32 councils as listed, including Comhairle nan Eilean Siar and Edinburgh Council.', url: 'https://www.mygov.scot/find-your-local-council' },
      { claim: 'gov.uk, List of cities (29 August 2022): eight cities in Scotland.', url: 'https://www.gov.uk/government/publications/list-of-cities/list-of-cities-html' }
    ],
    rejectedClaims: [
      'The school start cut-off at 1 March: owned by the UK hub, linked rather than repeated.',
      'Teacher headcount and FTE for 2025: two different figures appeared (52,779 and 53,475) between the release and a search summary; neither is printed.',
      'National 5 Computing Science marks and assessment structure: the course specification PDF was not read for this build; it belongs to the National 5 page.',
      'NRS\'s own form of the Western Isles council area name: not read at NRS for this build; only the mygov.scot form is used.',
      'The Scottish Index of Multiple Deprivation or any economic measure: excluded as a standout.'
    ]
  }
};
