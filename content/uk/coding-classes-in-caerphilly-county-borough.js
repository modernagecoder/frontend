'use strict';
// Caerphilly county borough (cg- county page, UK cluster Phase 7, row 286). One principal area; titled with the short name.
// Spine: can a program read a text and catch a unit conversion that does not add up? Anchor (read raw 26 September 2026):
// Cadw listed building record 25495, Grade II*, Elliot Colliery Winding Engine House and Engine, New Tredegar: "the East and
// West Elliot pits developed during 1880s"; "The winding engine by Thornewill and Warham of Burton on Trent was installed
// 1891"; quoted description "a typical horizontal steam engine of the period..with two 42" (1.4m) horizontal cylinders of
// 6' (1.82m) stroke..Cornish valves..parallel drum 24' (7.3m) diameter"; "the engine was used to lift c 6000 tons (6120
// tonnes) of water per day"; "In 1904 high pressure boilers were installed"; "these cylinders were 28" (711mm) diameter";
// "c 2000 Hp"; "at full production c 3000 tons (3060 tonnes) per day"; "the surviving unusual lighter semi-spiral drum,
// known as a diabolo, with a reverse taper"; "The pit closed in 1967".
// Our checker (scratchpad wal/units.py): regex finds 6 imperial (metric) pairs in the record text. 42" = 1.067 m vs stated
// 1.4 m (+31.2 per cent, flagged); 6' = 1.829 m vs 1.82 (-0.5); 24' = 7.315 vs 7.3 (-0.2); 28" = 0.711 m vs 711 mm (0.0).
// 6000 tons: long tons 6,096 t, short tons 5,443 t, stated 6,120 (implied factor 1.020); 3000 tons: 3,048 / 2,722 / 3,060
// (1.020). We do not claim which figure is wrong or which ton was meant.
// Lesson family: automated consistency checking of paired values in text (regular expressions, unit conversion,
// tolerance), definitions of the ton; distinct from Moray (validating one numeral), Oxfordshire (energy vs power).
// Place facts: ONS Census 2021 TS001 via Nomis: Caerphilly W06000018 175,952. ONS built-up areas (published; OA sums within
// 5): Caerphilly 33,105; Risca 15,195; Blackwood 12,620; Ystrad Mynach 11,855; Pontllanfraith 9,360; Bargod 8,035;
// Newbridge 7,585; Bedwas 6,460; Oakdale 6,130; Abertridwr and Senghenydd 5,640; Abercarn 5,125; Rhymney 4,995. No
// Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CAERPHILLY', blurb: 'Caerphilly, Risca, Blackwood and Ystrad Mynach, and an Elliot Colliery lesson on catching unit conversions that do not add up.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-caerphilly-county-borough',
  code: 'cph',
  accent: '#32134C',
  accentRationale: 'Caerphilly: a coal-seam purple-black from the solver (12.69:1 on the darkest paper tint), redder and darker than the Inverclyde violet',
  pageType: 'governorate',
  place: {
    name: 'Caerphilly county borough',
    eyebrow: 'Caerphilly county borough',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Cardiff', href: '/best-coding-class-in-cardiff' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Caerphilly',
  title: 'Coding Classes in Caerphilly | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Caerphilly county borough, from Caerphilly, Risca and Blackwood to Ystrad Mynach, Bargod and Rhymney.',
  ogDescription: 'Coding classes for all of Caerphilly county borough, and an Elliot Colliery project: write a Python checker that reads a text and flags unit conversions that do not add up.',
  twitterDescription: 'Caerphilly coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Caerphilly County Borough',
    description: 'Ability-placed online coding, Python, data checking and mathematics for children, teenagers and adults across Caerphilly county borough, taught live in English.'
  },

  h1: 'Coding classes in Caerphilly county borough',
  capsuleQ: 'What are the best coding classes in Caerphilly?',
  capsule: 'Caerphilly county borough had 175,952 usual residents at the 2021 census, spread across many towns. Caerphilly itself is the largest built-up area, then Risca, Blackwood and Ystrad Mynach, with Pontllanfraith, Bargod, Newbridge and Bedwas next and many smaller places, from Oakdale to Rhymney. Our teachers work from India and every lesson is live on video; the first one is free and settles the right level for a Year 4 pupil, a Year 13 student or an adult alike. Coding, Python and maths are taught to learners from six to 67, alone with a teacher or among five to ten classmates. The Caerphilly project comes from a colliery engine house at New Tredegar. Continuing costs a monthly USD 100 in a class, or USD 150 with a tutor to yourself.',
  lead: 'At New Tredegar, Cadw lists the Elliot Colliery winding engine house at Grade II*, with its engine by Thornewill and Warham, installed in 1891. The record quotes a description full of numbers, each in old units with a modern conversion in brackets: cylinders of 42 inches, a stroke of 6 feet, a drum of 24 feet, and a daily lift of about 6,000 tons of water. Numbers written twice in two systems are a gift to a programmer, because each pair can be checked. Do the conversions agree? This page\'s project writes a short Python program that reads the record\'s text, finds every pair, converts the old figure itself and flags any that disagree. One pair stands out, and the tons raise a question of definitions.',
  wa: 'Hello Modern Age Coders, we are in Caerphilly county borough and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Caerphilly',
    h2: 'Starting points for Caerphilly learners',
    intro: 'Think of a seven-year-old in Risca who counts everything, a Blackwood Year 6 eager to type code, an Ystrad Mynach teenager beginning WJEC GCSE Computer Science, and a Caerphilly adult who checks spreadsheets for a living. Each of them would open with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with measuring, converting and checking games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Units, ratios and percentages practised by writing code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including text processing and tests.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis for adults who need to check figures they did not produce.' }
    ]
  },

  sections: [
    {
      id: 'caerphilly', tint: '', eyebrow: 'The county borough in figures',
      h2: '175,952 people in Caerphilly county borough',
      intro: 'ONS counted 175,952 usual residents at the 2021 census, a figure we read through Nomis. Figures for individual towns are the matching ONS built-up areas.',
      body: [
        { kind: 'table', caption: 'Largest built-up areas in Caerphilly county borough (ONS, Census 2021)', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Caerphilly', '33,105', 'Bargod', '8,035'],
          ['Risca', '15,195', 'Newbridge', '7,585'],
          ['Blackwood', '12,620', 'Bedwas', '6,460'],
          ['Ystrad Mynach', '11,855', 'Oakdale', '6,130'],
          ['Pontllanfraith', '9,360', 'Abertridwr and Senghenydd', '5,640']
        ] },
        { kind: 'p', text: 'Beyond the table come Abercarn, Rhymney, Aberbargoed, Llanbradach and New Tredegar, among others; our own output-area sums agree with every published figure to within five people. Pupils here follow the Curriculum for Wales before WJEC exam courses take over at GCSE and A level. Caerphilly County Borough Council sets the school holidays; we have not read them and plan breaks from each family\'s own dates.' },
        { kind: 'callout', h3: 'Cardiff and WJEC exams', p: 'The capital has its own page at <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a>. For exam help, see <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Caerphilly project',
      h2: 'A program that checks the brackets',
      intro: 'Find every pair of figures, convert, compare, flag.',
      body: [
        { kind: 'p', text: 'The learner saves the text of Cadw\'s record and writes a regular expression, a compact search pattern, that picks out every place where a number with an imperial unit is followed by a metric figure in brackets: inches with metres, feet with metres, tons with tonnes. For each pair, the program converts the imperial figure itself, one inch being 0.0254 metres and one foot 0.3048, and compares the result with the bracketed number. Anything more than 3 per cent apart is flagged for a human to look at. The program finds six pairs.' },
        { kind: 'table', caption: 'Our checker on the Elliot Colliery record, 26 September 2026', head: ['Pair in the record', 'Our conversion', 'Difference', 'Verdict'], rows: [
          ['42" (1.4m)', '1.067 m', '+31.2 per cent', 'Flagged'],
          ['6\' (1.82m)', '1.829 m', '-0.5 per cent', 'Agrees'],
          ['24\' (7.3m)', '7.315 m', '-0.2 per cent', 'Agrees'],
          ['28" (711mm)', '0.711 m', '0.0 per cent', 'Agrees'],
          ['6000 tons (6120 tonnes)', '6,096 long tons or 5,443 short tons', 'Factor 1.020', 'Definition question'],
          ['3000 tons (3060 tonnes)', '3,048 long tons or 2,722 short tons', 'Factor 1.020', 'Definition question']
        ] },
        { kind: 'p', text: 'Four pairs agree to well within rounding. The cylinder figure does not: 42 inches works out at 1.067 metres, while the bracket says 1.4, almost a third more. The program cannot say which half is the slip, only that the two cannot both be right, which is exactly what a good checker should report. The tons are subtler. Britain\'s traditional long ton is about 1.016 tonnes and the American short ton about 0.907; the record\'s conversions multiply by 1.020, close to the long ton but not exact. Nothing is necessarily wrong here: rounded figures such as c 6,000 were converted roughly. But it shows why a program handling tons must ask which ton is meant.' },
        { kind: 'p', text: 'The learner then makes the checker sturdier: it must cope with commas in numbers, with mm as well as m, and with a pair written the other way round. Each new rule gets a small test of its own, so that fixing one case never quietly breaks another.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Measure things in inches and centimetres, write both down, and build a Scratch quiz that spots a wrong pair.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python function that converts inches and feet to metres and checks a list of pairs by hand-entered values.' },
          { h3: 'Ages 15 and up', p: 'Use regular expressions to extract pairs from real text, set a tolerance, add tests, and handle the long ton and short ton.' }
        ] },
        { kind: 'callout', h3: 'Checking, not blaming', p: 'The figures are quoted as they appear in Cadw\'s record, which itself quotes an earlier description. Our program only reports that one pair is inconsistent; we do not claim which number is the mistake, or say anything about the engine beyond the record.' }
      ]
    },
    {
      id: 'elliot-colliery', tint: 'deep', eyebrow: 'Why the Elliot Colliery',
      h2: 'A winding engine from 1891',
      intro: 'What Cadw\'s record describes.',
      body: [
        { kind: 'table', caption: 'Elliot Colliery Winding Engine House and Engine, Cadw listed building record 25495, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['Pits', 'East and West Elliot pits, developed during the 1880s'],
          ['Engine', 'By Thornewill and Warham of Burton on Trent, installed 1891'],
          ['Water', 'Used to lift about 6,000 tons of water a day soon after coal production began'],
          ['Upgrade', 'High pressure boilers and two extra cylinders added in 1904, about 2,000 horsepower'],
          ['Drum', 'A lighter semi-spiral drum known as a diabolo, with a reverse taper'],
          ['Later life', 'The pit closed in 1967; the building became a museum in the mid 1990s']
        ] },
        { kind: 'p', text: 'Automatic consistency checks run through modern software everywhere: spreadsheets that flag totals, engineering tools that insist on units, and data pipelines that refuse figures that cannot both be true. Mixed units have caused expensive failures in engineering, which is why many teams now make the computer check every conversion. A Caerphilly pupil who has built one has a genuinely professional habit.' },
        { kind: 'p', text: 'We have no connection with Cadw or Caerphilly County Borough Council. The record\'s text belongs to Cadw; the checker, its conversions and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From rulers to regular expressions',
    intro: 'Year bands are a starting guess; the trial lesson confirms it.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Measuring games', p: 'Block coding with lengths, weights and simple comparisons.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Units in code', p: 'Typed Python converting units and checking answers.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Text and tests', p: 'String processing, patterns and testing alongside WJEC GCSE and A level courses.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Checking data', p: 'Python and data analysis for adults who validate figures at work.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and conversions',
    h2: 'An AI can convert units in seconds. Will it notice a pair that does not match?',
    intro: 'Reading past an inconsistency is easier than flagging it.',
    p1: 'Give a chatbot a paragraph full of paired figures and ask for a summary, and it will usually repeat them faithfully, including a pair that cannot be right. Unless asked to check, it rarely stops to recompute, and it may not ask which ton was meant.',
    p2: 'A Caerphilly learner who has written a checker knows to make the computer verify, not just repeat. That discipline is exactly what AI-generated summaries of technical material need.',
    closer: 'Teenagers in Caerphilly should still learn to code in 2026 so they can make the machine check numbers instead of just repeating them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'From Rhymney to Risca, lessons at home',
    intro: 'Towns throughout the county borough join by video in the same way.',
    cells: [
      { h3: 'Learners write the code', p: 'Each program is typed by the pupil while the teacher watches the shared screen and nudges when needed.' },
      { h3: 'Matched to Welsh schooling', p: 'Whether it is Year 5 in Oakdale or Year 12 in Bargod, we look at the year and the Curriculum for Wales, and exam work follows the WJEC specifications. Lessons are in English.' },
      { h3: 'Free trial lesson', p: 'A full lesson without charge, then an honest recommendation.' },
      { h3: 'Small classes at one level', p: 'Five to ten learners at the same level, from many places.' },
      { h3: 'Term-time timetable', p: 'Two lessons a week in term, with holidays off.' },
      { h3: 'Stays at UK time', p: 'Clock changes do not move your lesson; our teachers on India time adjust instead.' }
    ],
    spec: { title: 'Why groups span several towns', p: 'Five learners at one level, all free at the same hour, rarely live in one town. Grouping by level gives a pupil in Bedwas or Abercarn a class that fits.' }
  },

  fees: {
    h2: 'Fees in Caerphilly county borough',
    intro: 'Blackwood or Caerphilly, the fee is the same, as it is in every country we teach outside India.',
    first: 'A complete trial lesson, free, followed by advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'All fees are in US dollars, with no sterling price list. We start billing only after the trial has fixed a course and a weekly time; the pricing page explains holidays, absences and switching formats.'
  },

  reviewsH2: 'Google reviews from families and learners',

  book: {
    h2: 'Book a free Caerphilly lesson',
    intro: 'Send the learner\'s age or school year and an interest, and we will plan the trial around it: a Scratch game, a Python program, or the unit checker on this page.',
    success: 'Thank you. Your Caerphilly request has been received.'
  },

  faq: {
    h2: 'Caerphilly questions',
    intro: 'The county borough, the colliery project and practical points.',
    items: [
      { q: 'How many people live in Caerphilly county borough?', a: 'The 2021 census counted 175,952 usual residents.' },
      { q: 'What are the largest towns in Caerphilly county borough?', a: 'ONS 2021 built-up areas: Caerphilly 33,105, Risca 15,195, Blackwood 12,620 and Ystrad Mynach 11,855.' },
      { q: 'What is the Elliot Colliery project?', a: 'Learners write a Python checker that finds every imperial and metric pair in Cadw\'s record, converts each one, and flags a cylinder size where 42 inches is bracketed as 1.4 m, though 42 inches is 1.07 m.' },
      { q: 'What is the difference between a ton and a tonne?', a: 'A tonne is 1,000 kilograms. The British long ton is about 1,016 kg and the American short ton about 907 kg, so tons must always be defined.' },
      { q: 'When was the Elliot Colliery winding engine installed?', a: 'In 1891, according to Cadw, which lists the engine house and engine at Grade II*.' },
      { q: 'Are lessons held in Caerphilly?', a: 'No building is involved: a learner in Rhymney and one in Risca each log in from home.' },
      { q: 'Is WJEC GCSE Computer Science covered?', a: 'It is, as is GCSE maths in Wales. Grades depend on the learner, so we promise understanding, not results.' },
      { q: 'What ages can learn?', a: 'We teach every age between six and 67. Younger children build with blocks, teenagers move on to Python and exam preparation, and adults usually want Python with real data.' },
      { q: 'What does it cost?', a: 'Lesson one costs nothing. From then on it is USD 100 per month for a group place or USD 150 per month for individual tuition.' },
      { q: 'Do lessons stop in the school holidays?', a: 'Yes. Send us your school\'s holiday weeks and we leave them free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More South Wales pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> models a water-balance lift, <a class="cg-inline-link" href="/coding-classes-in-blaenau-gwent">Blaenau Gwent</a> photographs a town clock with a pinhole camera, and <a class="cg-inline-link" href="/best-coding-class-in-cardiff">Cardiff</a> has a city page. Our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page links each Welsh area as it is published, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Caerphilly and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-cardiff', label: 'Cardiff' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-cph .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-cph .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-cph .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-cph .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-cph .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-cph .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-cph .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cph .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-cph .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-cph .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Caerphilly (W06000018), Caerphilly County Borough Council. ONS Census 2021 TS001 via Nomis: 175,952. ONS built-up areas (published; OA sums within 5): Caerphilly 33,105; Risca 15,195; Blackwood 12,620; Ystrad Mynach 11,855; Pontllanfraith 9,360; Bargod 8,035; Newbridge 7,585; Bedwas 6,460; Oakdale 6,130; Abertridwr and Senghenydd 5,640; Abercarn 5,125; Rhymney 4,995; Aberbargoed 4,415; Llanbradach 3,765; New Tredegar 3,285. Cadw listed building record 25495, Grade II*, Elliot Colliery Winding Engine House and Engine: "the East and West Elliot pits developed during 1880s"; "The winding engine by Thornewill and Warham of Burton on Trent was installed 1891"; "two 42" (1.4m) horizontal cylinders of 6\' (1.82m) stroke"; "parallel drum 24\' (7.3m) diameter"; "lift c 6000 tons (6120 tonnes) of water per day"; "In 1904 high pressure boilers were installed"; "28" (711mm) diameter"; "c 2000 Hp"; "c 3000 tons (3060 tonnes) per day"; "semi-spiral drum, known as a diabolo, with a reverse taper"; "The pit closed in 1967".',
    localProject: 'Regex over record text finds 6 pairs. 42" -> 1.067 m vs 1.4 m (+31.2 per cent, flagged); 6\' -> 1.829 vs 1.82 (-0.5); 24\' -> 7.315 vs 7.3 (-0.2); 28" -> 0.711 vs 711 mm (0.0). Tons: 6000 -> long 6,096 t, short 5,443 t, stated 6,120 (1.020); 3000 -> 3,048 / 2,722 / 3,060 (1.020). No claim which figure is wrong. Lesson family: consistency checking of paired values, regex, tolerance, ton definitions.',
    requiredMentions: [
      'Risca',
      'Blackwood',
      'Ystrad Mynach',
      'Pontllanfraith',
      'Bargod',
      'Bedwas',
      'Oakdale',
      'Senghenydd',
      'Elliot Colliery',
      'Thornewill',
      'diabolo',
      'long ton'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Caerphilly, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 25495: Elliot Colliery Winding Engine House and Engine.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=25495' }
    ],
    rejectedClaims: [
      'Which figure in the 42 inch pair is the error: not claimed.',
      'Which ton the original description meant: not claimed.',
      'Caerphilly Castle leaning tower: considered, not used (centre-of-mass lesson exists elsewhere).',
      'Named mining disasters or casualties: not discussed.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
