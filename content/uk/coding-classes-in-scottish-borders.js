'use strict';
// Scottish Borders (cg- council area page, UK cluster Phase 7, row 277). One council. Spine: how do you work out the date
// of Easter, and how do you know your formula is right? Anchor (read raw 26 September 2026): Historic Environment
// Scotland SM90214, scheduled monument, Melrose Abbey: "founded in 1136/7 by King David I"; "a lade that brought water to
// the abbey from a weir in the River Tweed about 500m to the west-northwest"; "about 80m above sea level"; "a barrel vault
// inserted in around 1621 when the abbey was used as a parish church after the Reformation"; "a phase of rebuilding
// conducted after the abbey was severely damaged by an invading English army in 1385"; "Unusually, Melrose's cloister lies
// to the north of the church to take advantage of the diverted waters of the Tweed".
// Our model (scratchpad bor/easter.py): anonymous Gregorian algorithm (Meeus/Jones/Butcher) and Gauss's formula, checked
// against python-dateutil easter (EASTER_WESTERN) for every year 1583 to 4099 (2,517 years): anonymous 0 wrong; Gauss with
// its two exception rules 0 wrong; Gauss without them 23 wrong, in 1583 to 2199: 1609, 1954, 1981, 2049, 2076, 2106, 2133
// (e.g. 1981 raw gives 26 April, correct 19 April; 1954 raw 25 April, correct 18 April). Easter 2026: 5 April; 2027: 28
// March. 1900 to 2099: earliest 23 March (1913), latest 25 April (2038). Full 5,700,000-year cycle: 35 possible dates,
// 22 March to 25 April; most common 19 April (3.867 per cent), then 18 April (3.463), 15 April (3.383); least common
// 22 March (0.483), 25 April (0.737), 23 March (0.950); March share 23.32 per cent.
// Lesson family: Easter computus, rare-case exceptions, exhaustive testing against a library; screened (computus: one
// Shannon page uses Easter only as a calendar effect on airport data, not the algorithm).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Scottish Borders S12000026 116,900; 55,600 households; 24.7
// per square kilometre; 0 to 14 16,800 (14.4 per cent), 65+ 30,800 (26.3 per cent) by our addition. NRS mid-2020
// localities. No calendar-change claims (legislation.gov.uk blocked earlier). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SCOTTISH BORDERS', blurb: 'Hawick, Galashiels, Peebles, Kelso and Melrose, and a Melrose Abbey lesson on calculating the date of Easter.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-scottish-borders',
  code: 'sbo',
  accent: '#7A5943',
  accentRationale: 'Scottish Borders: a warm stone brown from the solver (5.07:1 on the darkest paper tint), lighter and redder than the East Ayrshire and Falkirk browns',
  pageType: 'governorate',
  place: {
    name: 'Scottish Borders',
    eyebrow: 'Scottish Borders',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Scottish Borders',
  title: 'Coding Classes in the Scottish Borders | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Scottish Borders, from Hawick, Galashiels and Peebles to Kelso, Selkirk, Jedburgh and Melrose.',
  ogDescription: 'Coding classes for the whole Scottish Borders, and a Melrose Abbey project: calculate the date of Easter in Python and test it against every year to 4099.',
  twitterDescription: 'Scottish Borders coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Scottish Borders',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across the Scottish Borders, taught live in English.'
  },

  h1: 'Coding classes in the Scottish Borders',
  capsuleQ: 'What are the best coding classes in the Scottish Borders?',
  capsule: 'The Scottish Borders had about 116,900 residents in roughly 55,600 households at the 2022 census, living at 24.7 people per square kilometre. It has no single dominant town: Hawick and Galashiels are close in size, with Peebles, Kelso, Selkirk and Jedburgh next, and Eyemouth, Duns and Melrose among the rest. Lessons are given live over video by teachers in India, and a free first lesson places every learner, whether in P1, S6 or long out of school. Coding, Python and maths are open to anyone between six and 67, whether in a small class of five to ten or alone with a tutor. The Borders project begins at Melrose Abbey. Beyond the trial, Borders learners pay a monthly USD 100 for a class place or USD 150 for private lessons.',
  lead: 'Historic Environment Scotland records that Melrose Abbey was founded in 1136 or 1137 by King David I, and that its monks even took a lade of water from a weir on the Tweed about 500 metres away. For a medieval religious house, one of the hardest recurring calculations was the date of Easter, which moves between March and April every year. It depends on a full moon and a Sunday, but in practice on arithmetic tables rather than the real sky. Today the rule fits in a dozen lines of code. This page\'s project writes those lines in Python and then does what any good programmer should: tests them against every year from 1583 to 4099, and finds that one famous formula needs two special cases to survive.',
  wa: 'Hello Modern Age Coders, we are in the Scottish Borders and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for the Borders',
    h2: 'How Borders learners start',
    intro: 'A P2 in Hawick who loves calendars, a P6 in Peebles ready to type code, an S4 in Galashiels working towards National 5, and an adult in Kelso learning to automate. All of them start with the same free trial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with counting, calendars and patterns that repeat.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Remainders, cycles and number puzzles, made concrete with code.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, with testing built in from the first program.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the start, including dates, data and automation.' }
    ]
  },

  sections: [
    {
      id: 'scottish-borders', tint: '', eyebrow: 'The Borders in numbers',
      h2: 'About 116,900 people across the Borders',
      intro: 'Council totals are rounded first results from the 2022 census, published by National Records of Scotland. Town sizes come from a separate NRS series for mid-2020.',
      body: [
        { kind: 'table', caption: 'Scottish Borders localities above 2,500 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Hawick', '10,630', 'Eyemouth', '3,580'],
          ['Galashiels', '10,060', 'Langlee', '3,410'],
          ['Peebles', '9,000', 'Innerleithen', '3,180'],
          ['Kelso', '6,870', 'Burnfoot', '2,990'],
          ['Selkirk', '4,540', 'Duns', '2,820'],
          ['Jedburgh', '3,860', 'Melrose', '2,500']
        ] },
        { kind: 'p', text: 'At 24.7 residents per square kilometre, the Borders are about a third as densely settled as Scotland overall, where the figure is 69.8. Summing the census age bands ourselves, we find 14.4 per cent of residents under 15 and 26.3 per cent aged 65 or over, against 15.3 and 20.1 for Scotland. Tweedbank is the next locality after the table. Term and holiday dates come from Scottish Borders Council, and rather than guess them we ask each household for its own.' },
        { kind: 'callout', h3: 'Edinburgh and exams', p: 'The capital has its own <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> page. For qualifications, see <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Borders project',
      h2: 'When is Easter, and can you prove it?',
      intro: 'Two formulas, a trusted library, and 2,517 years of tests.',
      body: [
        { kind: 'p', text: 'Easter Sunday is set by a rule: the first Sunday after the church\'s calculated full moon on or after 21 March. The calculated moon follows tables, not the real sky, so the whole thing reduces to whole-number arithmetic with remainders. The learner codes two famous versions. One, often called the anonymous Gregorian algorithm, is a chain of about a dozen divisions and remainders. The other, by the mathematician Carl Friedrich Gauss, is shorter but comes with two special exceptions. Both are then compared with the Easter function in a well-tested Python library, year by year from 1583 to 4099.' },
        { kind: 'table', caption: 'Our Easter tests, every year from 1583 to 4099, 26 September 2026', head: ['Method', 'Years checked', 'Years wrong', 'Examples'], rows: [
          ['Anonymous algorithm', '2,517', '0', 'None'],
          ['Gauss, with both exceptions', '2,517', '0', 'None'],
          ['Gauss, exceptions left out', '2,517', '23', '1954, 1981, 2049, 2076'],
          ['Easter 2026 and 2027', 'Our code', 'Not applicable', '5 April 2026, 28 March 2027']
        ] },
        { kind: 'p', text: 'Gauss\'s formula without its exceptions looks perfect for decades at a time, then fails. In 1981 it gives 26 April; the real date was 19 April. In 1954 it gives 25 April instead of 18 April, and the next failure is 2049. Only 23 years in more than 2,500 go wrong, which is exactly why the bug survives casual testing: try a handful of recent years and every answer is right. The two exception rules exist precisely to catch those cases.' },
        { kind: 'p', text: 'With a trusted function, the learner can ask bigger questions. The Gregorian Easter pattern repeats only after 5,700,000 years, and a modern laptop can run the whole cycle in seconds. Easter can fall on 35 dates, from 22 March to 25 April. The most common is 19 April, 3.9 per cent of years; the rarest is 22 March, under half a per cent. Within 1900 to 2099, the earliest Easter was 23 March 1913 and the latest will be 25 April 2038. Fewer than a quarter of Easters fall in March.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Look up Easter for the last ten years, spot the pattern of moving dates, and build a Scratch quiz on them.' },
          { h3: 'Ages 11 to 15', p: 'Code the anonymous algorithm in Python and compare its answers with a calendar for twenty years.' },
          { h3: 'Ages 15 and up', p: 'Implement Gauss with and without exceptions, test every year against the library, and count dates across the full cycle.' }
        ] },
        { kind: 'callout', h3: 'Abbey history, our arithmetic', p: 'The abbey facts come from the Historic Environment Scotland record. The Easter dates, test counts and percentages come from our own program checked against the python-dateutil library; they do not describe how Melrose itself kept its calendar.' }
      ]
    },
    {
      id: 'melrose-abbey', tint: 'deep', eyebrow: 'Why Melrose Abbey',
      h2: 'Founded in 1136 or 1137',
      intro: 'What the scheduled monument record says.',
      body: [
        { kind: 'table', caption: 'Melrose Abbey, HES scheduled monument SM90214', head: ['Record detail', 'What it says'], rows: [
          ['Founded', '1136 or 1137, by King David I'],
          ['Water', 'A lade from a weir on the River Tweed about 500 metres to the west-northwest'],
          ['Cloister', 'Unusually north of the church, to use the diverted waters of the Tweed'],
          ['Rebuilding', 'After severe damage by an invading English army in 1385'],
          ['Later use', 'A barrel vault inserted around 1621, when the abbey served as a parish church'],
          ['Setting', 'Beside the historic centre of Melrose, about 80 metres above sea level']
        ] },
        { kind: 'p', text: 'Rare-case bugs like Gauss\'s missing exceptions are the ones that reach real software: leap years, daylight saving changes, the last day of a month, the rollover to 2000. Calendars, booking systems and payroll programs all depend on date rules that are right almost always. A Borders pupil who has watched a formula fail in 1981 yet pass every year around it knows why professional code is tested against every case, not a sample.' },
        { kind: 'p', text: 'Historic Environment Scotland and Scottish Borders Council have no connection with us. The record\'s facts are theirs; the Easter code, the tests and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From calendars to tested algorithms',
    intro: 'Stages are a starting guide; the free lesson confirms the level.',
    cols: [
      { band: 'P1 to P4', h3: 'Patterns and dates', p: 'Block coding with counting, days and repeating patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Remainders and rules', p: 'Typed Python with division, remainders and simple date puzzles.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Algorithms and proof', p: 'Algorithms and systematic testing beside National 5, Higher and Advanced Higher Computing Science.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Dates in real code', p: 'Python for adults, including dates, schedules and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and edge cases',
    h2: 'An AI can write an Easter function in seconds. Will it remember 1981?',
    intro: 'A formula that is right almost every year is still wrong.',
    p1: 'Ask a chatbot for a function that finds Easter and it may produce Gauss\'s short formula, sometimes without the two exceptions. Spot-checking recent years will not reveal the problem; only a full comparison against a trusted source does.',
    p2: 'A Borders learner who has run the full test knows to check generated code exhaustively whenever the domain allows it. That discipline is the most valuable thing a person brings to AI-written code.',
    closer: 'Hunting down the rare year where the answer breaks is a skill no AI supplies, and it is why a Borders teenager should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Eyemouth to Peebles, lessons at home',
    intro: 'Across a large rural council area, online lessons remove the drive to an evening club.',
    cells: [
      { h3: 'Type, run, fix', p: 'The learner writes every line; the teacher follows the shared screen and helps when it breaks.' },
      { h3: 'The same stage names as school', p: 'A Galashiels S3 or a Hawick P6 hears the Curriculum for Excellence terms they already know, up to Advanced Higher. We teach in English.' },
      { h3: 'A free first lesson', p: 'A real lesson, no payment, and then honest advice.' },
      { h3: 'Peers at your level', p: 'Classes gather five to ten learners who share a stage, wherever in the world they happen to live.' },
      { h3: 'Term time only', p: 'Two lessons a week in term; none during the school holidays.' },
      { h3: 'Clock changes handled', p: 'When British clocks go forward or back, your class stays at its usual UK hour; the teachers in India time are the ones who shift.' }
    ],
    spec: { title: 'Why groups reach beyond one town', p: 'Five learners at the same stage, free at the same hour, rarely live in one Borders town. Grouping by stage across a wider pool gives a pupil in Duns or Innerleithen a class that fits.' }
  },

  fees: {
    h2: 'Fees in the Scottish Borders',
    intro: 'Hawick or Eyemouth, the fee is the same, and it matches every country we teach outside India.',
    first: 'A complete free lesson, followed by a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with one teacher.',
    closer: 'All fees are in US dollars; there is no sterling price list. We bill only after the free lesson has set a course and weekly time, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Star ratings and comments on Google',

  book: {
    h2: 'Book a free Borders lesson',
    intro: 'A line about the learner is enough: age or stage, plus something they enjoy. From that we plan a first lesson such as a Scratch game, some Python, or the Easter calculation on this page.',
    success: 'Thank you. Your Scottish Borders request has been received.'
  },

  faq: {
    h2: 'Scottish Borders questions',
    intro: 'The council area, the Melrose Abbey project and practical points.',
    items: [
      { q: 'How many people live in the Scottish Borders?', a: 'NRS rounds the 2022 census count to about 116,900 residents, in around 55,600 households.' },
      { q: 'What are the largest towns in the Scottish Borders?', a: 'NRS mid-2020 estimates: Hawick 10,630, Galashiels 10,060, Peebles 9,000, Kelso 6,870 and Selkirk 4,540.' },
      { q: 'What is the Melrose Abbey project?', a: 'Learners code two Easter formulas in Python, test both against a trusted library for every year from 1583 to 4099, and find that Gauss\'s formula without its exceptions is wrong in 23 years, including 1981.' },
      { q: 'What is the most common date for Easter?', a: 'Across the full 5,700,000-year Gregorian cycle, 19 April, in about 3.9 per cent of years, by our calculation.' },
      { q: 'When was Melrose Abbey founded?', a: 'Historic Environment Scotland says it was founded in 1136 or 1137 by King David I.' },
      { q: 'Are lessons held in the Borders?', a: 'No building is involved. Pupils in Jedburgh, Selkirk or a farm near Duns connect by video from home.' },
      { q: 'Do you teach National 5 Maths?', a: 'Yes, along with Higher Maths and Computing Science. We teach understanding and make no promises about grades.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67, from young children using blocks to adults starting Python.' },
      { q: 'What does it cost?', a: 'One trial lesson at no charge; after it, a group seat is USD 100 per month and one-to-one tuition USD 150 per month.' },
      { q: 'Do lessons stop for school holidays?', a: 'We follow your school\'s calendar: when the Borders holidays begin, lessons stop, and they pick up again in the new term.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages near the Borders',
    html: 'Next door in our series, <a class="cg-inline-link" href="/coding-classes-in-midlothian">Midlothian</a> works out which faces of a sundial catch the sun, <a class="cg-inline-link" href="/coding-classes-in-east-lothian">East Lothian</a> models Bass Rock gannets and <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">Dumfries and Galloway</a> counts dark-sky stars. The full list is on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Scottish Borders and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-sbo .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-sbo .cg-hero h1 { font-weight: 690; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-sbo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-sbo .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sbo .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.018em; }
.cg-root.cg-sbo .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-sbo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sbo .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-sbo .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-sbo .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Scottish Borders (S12000026), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 116,900 (females 60,100, males 56,800); households 55,600; density 24.7 per square kilometre (Scotland 69.8); ages 0 to 14 16,800 (14.4 per cent), 65+ 30,800 (26.3 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Hawick 10,630; Galashiels 10,060; Peebles 9,000; Kelso 6,870; Selkirk 4,540; Jedburgh 3,860; Eyemouth 3,580; Langlee 3,410; Innerleithen 3,180; Burnfoot 2,990; Duns 2,820; Melrose 2,500; Tweedbank 2,020. HES SM90214 (scheduled monument), Melrose Abbey: "founded in 1136/7 by King David I"; "a lade that brought water to the abbey from a weir in the River Tweed about 500m to the west-northwest"; "about 80m above sea level"; "barrel vault inserted in around 1621 when the abbey was used as a parish church after the Reformation"; "severely damaged by an invading English army in 1385"; "Unusually, Melrose\'s cloister lies to the north of the church to take advantage of the diverted waters of the Tweed". Easter rule (first Sunday after the ecclesiastical full moon on or after 21 March) and Gauss authorship are general knowledge.',
    localProject: 'Anonymous Gregorian (Meeus/Jones/Butcher) and Gauss vs python-dateutil easter(EASTER_WESTERN), 1583-4099 (2,517 years): anon 0 wrong; Gauss+exceptions 0; Gauss raw 23 wrong (1609, 1954, 1981, 2049, 2076, 2106, 2133 before 2200). 1981 raw 26 Apr vs 19 Apr; 1954 raw 25 Apr vs 18 Apr. 2026: 5 Apr; 2027: 28 Mar. 1900-2099 earliest 23 Mar 1913, latest 25 Apr 2038. 5.7M-year cycle: 35 dates; 19 Apr 3.867 per cent, 18 Apr 3.463, 15 Apr 3.383; 22 Mar 0.483, 25 Apr 0.737, 23 Mar 0.950; March 23.32 per cent. Lesson family: Easter computus, exceptions, exhaustive testing.',
    requiredMentions: [
      '116,900',
      '55,600',
      'Hawick',
      'Galashiels',
      'Peebles',
      'Kelso',
      'Selkirk',
      'Jedburgh',
      'Eyemouth',
      'Innerleithen',
      'Tweedbank',
      'SM90214',
      'Melrose Abbey'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, SM90214: Melrose Abbey.', url: 'https://portal.historicenvironment.scot/designation/SM90214' }
    ],
    rejectedClaims: [
      'How Melrose Abbey actually calculated Easter or kept its calendar: not in the record, not claimed.',
      'Calendar changes in Britain (Julian to Gregorian): not claimed; the source used earlier was blocked.',
      'Orthodox or Julian Easter dates: not discussed.',
      'Common Riding and textile history: not researched for this page.',
      'Named Borders schools and school term dates: none named or read.',
      'Directions or distances between Borders towns: not claimed.'
    ]
  }
};
