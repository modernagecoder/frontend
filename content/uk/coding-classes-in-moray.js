'use strict';
// Moray (cg- council area page, UK cluster Phase 7, row 270). One council. Spine: what should a program do with a Roman
// numeral that is not quite right? Anchor (read raw 26 September 2026): Historic Environment Scotland LB37605, Category A,
// Covesea Skerries Lighthouse, Keepers' Cottages and Steading, burgh Lossiemouth: "LIGHTHOUSE: Alan Stevenson, engineer,
// James Smith, contractor, dated 1844"; "Tall circular 7-storey lighthouse/tower"; "pair single storey, Egyptian style
// cottages"; inscription transcribed as "'In salutem omnium Northern Lights. Alan Stevenson, LLB, Engineer, James Smith,
// Contractor, William Middlemiss, Superintendent. MDLCC XL1V'"; "The lighthouse now with automated light, the original
// light in Lossiemouth Fisheries Museum". We have not seen the stone; we only say the listing's transcription is not a
// standard numeral.
// Our model (scratchpad mor/roman.py): naive parser (drops unknown characters, subtracts a smaller value before a larger
// one) vs strict regex ^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$. "MDLCC XL1V" naive 1695, strict reject;
// "MDLCCXLIV" (1 read as I) naive 1694, strict reject; "MDCCCXLIV" 1844, valid; "MDCCCXLIIII" naive 1844, strict reject;
// "IM" naive 999, reject; "VX" naive 5, reject. Round trip 1 to 3,999: 0 failures. 19,607 strings of 1 to 5 symbols: 735
// strict-valid. Naive maps IV, IVX and IIII to 4. Longest numeral under 4,000: 3,888 = MMMDCCCLXXXVIII (15 symbols).
// Lesson family: parsing and validation, Roman numerals; screened (Roman numerals: one KS2 curriculum mention on an 11+
// page, not a lesson; Covesea: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Moray S12000020 93,400; 43,100 households; 41.7 per square
// kilometre; 0 to 14 14,500 (15.5 per cent), 65+ 21,400 (22.9 per cent) by our addition. NRS mid-2020 localities.
// Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'MORAY', blurb: 'Elgin, Forres, Buckie and Lossiemouth, and a Covesea Skerries lesson on parsing Roman numerals that refuse to add up.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-moray',
  code: 'mry',
  accent: '#1B254C',
  accentRationale: 'Moray: a night-sea navy from the solver (11.95:1 on the darkest paper tint), darker and bluer than the Dumfries and Galloway indigo',
  pageType: 'governorate',
  place: {
    name: 'Moray',
    eyebrow: 'Moray',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Aberdeenshire', href: '/coding-classes-in-aberdeenshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Moray',
  title: 'Coding Classes in Moray | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Moray, from Elgin, Forres and Buckie to Lossiemouth, Keith, Fochabers, Burghead and Dufftown.',
  ogDescription: 'Coding classes for all of Moray, and a Covesea Skerries lighthouse project: write a Roman numeral parser in Python and teach it when to say no.',
  twitterDescription: 'Moray coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Moray',
    description: 'Ability-placed online coding, Python, parsing and validation and mathematics for children, teenagers and adults across Moray, taught live in English.'
  },

  h1: 'Coding classes in Moray',
  capsuleQ: 'What are the best coding classes in Moray?',
  capsule: 'Moray had about 93,400 residents in roughly 43,100 households at the 2022 census, spread thinly at 41.7 people per square kilometre. Elgin is the main town, with Forres, Buckie and Lossiemouth next and smaller places such as Keith, Fochabers and Dufftown. Our teachers in India give every lesson live over video, and a free first session places each learner, from P1 to S6 or beyond school. Anyone from 6 to 67 can study coding, Python or maths here, either one-to-one or in a group of five to ten. The Moray project begins with a lighthouse inscription near Lossiemouth. Following the free lesson, groups cost USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'Near Lossiemouth, Historic Environment Scotland lists the Covesea Skerries Lighthouse at Category A: a tall circular tower by the engineer Alan Stevenson, dated 1844, with Egyptian-style keepers\' cottages. The listing transcribes the inscription over the entrance, which ends with a date in Roman numerals, and the characters it gives are MDLCC XL1V. That is not a standard Roman numeral, and it contains a digit 1 where a letter I would be expected. We have not seen the stone, so we cannot say what is carved there. But the transcription makes a perfect test for a program. Feed it to a careless parser and it cheerfully prints a date almost 150 years out. This page\'s project builds a Roman numeral reader in Python that knows when to refuse.',
  wa: 'Hello Modern Age Coders, we are in Moray and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Moray',
    h2: 'Common first courses in Moray',
    intro: 'A six-year-old in Buckie, a P7 in Forres who likes puzzles, an S3 in Elgin ready for proper Python, and an adult in Lossiemouth cleaning up data at work. These are their usual starting courses, each after a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with number puzzles, codes and games that check the player\'s answers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, including programs that read and check what people type.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, with strings, validation and testing done properly.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, including cleaning and checking messy real-world data.' }
    ]
  },

  sections: [
    {
      id: 'moray', tint: '', eyebrow: 'Moray in numbers',
      h2: 'About 93,400 people across Moray',
      intro: 'Totals for the council come from the rounded first results of the 2022 census, published by National Records of Scotland. Town sizes are NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Moray localities above 1,500 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Elgin', '25,040', 'Burghead', '1,840'],
          ['Forres', '9,900', 'Lhanbryde', '1,830'],
          ['Buckie', '9,010', 'Fochabers', '1,770'],
          ['Lossiemouth', '6,840', 'Hopeman', '1,710'],
          ['Keith', '4,610', 'Dufftown', '1,590']
        ] },
        { kind: 'p', text: 'At 41.7 residents per square kilometre, Moray is more thinly settled than Scotland overall (69.8). Adding the census age bands ourselves, we find 15.5 per cent of Moray\'s people are under 15, close to the Scottish 15.3, and 22.9 per cent are 65 or older, above Scotland\'s 20.1. Moray Council sets its own school terms; we have not read them and fit breaks around what each family tells us.' },
        { kind: 'callout', h3: 'Related pages and exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-aberdeenshire">Aberdeenshire</a> and <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a>. For exam support: <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Moray project',
      h2: 'A parser that knows when to say no',
      intro: 'Seven letters, a handful of rules, and a date that should not come out as 1695.',
      body: [
        { kind: 'p', text: 'Roman numerals use seven letters, I, V, X, L, C, D and M, worth 1, 5, 10, 50, 100, 500 and 1,000. Most of the time you add them up, but a smaller value placed before a larger one is subtracted, as in IV for 4. The learner\'s first program does exactly that and nothing more: it skips any character it does not recognise, then walks along the letters, adding or subtracting. It is short, and it is dangerously polite, because it never refuses an input.' },
        { kind: 'table', caption: 'Our parsers on the listing\'s transcription and friends, 26 September 2026', head: ['Input', 'Naive parser says', 'Strict validator says'], rows: [
          ['MDLCC XL1V (as transcribed)', '1695', 'Not a valid numeral'],
          ['MDLCCXLIV (1 read as I)', '1694', 'Not a valid numeral'],
          ['MDCCCXLIV (1844 written the standard way)', '1844', 'Valid'],
          ['MDCCCXLIIII (four I\'s, as on some clock faces)', '1844', 'Not standard'],
          ['IM', '999', 'Not a valid numeral'],
          ['VX', '5', 'Not a valid numeral']
        ] },
        { kind: 'p', text: 'The naive parser turns the transcription into 1695, or 1694 if the 1 is read as an I, even though the listing itself says the lighthouse is dated 1844. The problem is the L before the C, which it treats as "subtract 50". Standard Roman numerals never put L before C, and a strict validator knows that. The learner writes one as a pattern: up to three M\'s, then a hundreds part, a tens part and a units part, each from a short list of allowed forms. Anything else is rejected with a clear message instead of a confident wrong number.' },
        { kind: 'p', text: 'Then the checks. Converting every number from 1 to 3,999 into Roman numerals and back gives zero mismatches, so the two directions agree. Of all 19,607 possible strings of one to five Roman letters, only 735 are valid numerals, fewer than 4 per cent, yet the naive parser gives a number for every one of them. It even reads IV, IIII and the nonsense IVX as 4. The longest standard numeral below 4,000 is 3,888, MMMDCCCLXXXVIII, fifteen letters.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build a Scratch quiz that converts numbers to Roman numerals and back, and find inputs that trick it.' },
          { h3: 'Ages 11 to 15', p: 'Write the add-and-subtract parser in Python, then list five inputs it gets wrong and explain why.' },
          { h3: 'Ages 15 and up', p: 'Write the strict validator as a regular expression, test every number to 3,999, and count how many random strings pass.' }
        ] },
        { kind: 'callout', h3: 'About the inscription', p: 'We are using the listing\'s typed transcription as test data. We have not seen the carved stone, and the characters on it may well differ from the transcription. Nothing here says the inscription itself is wrong.' }
      ]
    },
    {
      id: 'covesea', tint: 'deep', eyebrow: 'Why Covesea Skerries',
      h2: 'A Stevenson lighthouse from 1844',
      intro: 'What Historic Environment Scotland records about it.',
      body: [
        { kind: 'table', caption: 'Covesea Skerries Lighthouse, Keepers\' Cottages and Steading, HES listing LB37605', head: ['Listing detail', 'What it records'], rows: [
          ['Category', 'A, listed in 1971'],
          ['Engineer and date', 'Alan Stevenson, engineer; James Smith, contractor; dated 1844'],
          ['Tower', 'Tall circular 7-storey lighthouse tower'],
          ['Cottages', 'A pair of single-storey Egyptian-style keepers\' cottages'],
          ['Inscription', 'Names the engineer, contractor and superintendent William Middlemiss, ending MDLCC XL1V as transcribed'],
          ['Today', 'The light is automated; the original light is in Lossiemouth Fisheries Museum']
        ] },
        { kind: 'p', text: 'Every form on the internet faces the same question as the Roman numeral parser: accept what was typed, or refuse it with a helpful message. Dates, postcodes, phone numbers and prices all arrive messy, and code that silently guesses creates quiet errors that surface months later. A Moray pupil who has watched a parser invent the date 1695 will write validation first from now on.' },
        { kind: 'p', text: 'We have no link with Historic Environment Scotland or Moray Council. The listing and its transcription are theirs; the parsers, tests and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From number puzzles to validators',
    intro: 'Stages are guides only; the free lesson settles the starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Puzzles and codes', p: 'Block coding with number games, secret codes and answer checking.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Reading input', p: 'Typed Python that reads what users type and handles mistakes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Strings and testing', p: 'Parsing, patterns and systematic testing beside National 5, Higher and Advanced Higher Computing Science.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Clean data', p: 'Python for adults who need to check and tidy real data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and messy input',
    h2: 'An AI will read almost anything. Will it tell you when it should not?',
    intro: 'Always producing an answer is not the same as being right.',
    p1: 'Give a chatbot MDLCC XL1V and ask for the year. Some answers will correct it to 1844 without saying so, others will compute something else, and few will explain that the string is not a valid numeral. Either way the uncertainty disappears from view.',
    p2: 'A Moray learner who has written a strict validator knows that refusing bad input, and saying why, is part of a correct program. It is the same judgement needed to check anything an AI returns.',
    closer: 'That is why a Moray teenager should still learn to code in 2026: to build programs that know the difference between an answer and a guess.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practical details',
    h2: 'Lessons from Elgin to Dufftown, online',
    intro: 'With towns spread across the county, online classes save the evening journey.',
    cells: [
      { h3: 'Typing, not watching', p: 'Learners write every line themselves while the teacher follows the shared screen.' },
      { h3: 'Scottish stages', p: 'We work in P6, S3, National 5, Higher and Advanced Higher, as Moray schools do, in English.' },
      { h3: 'A free first session', p: 'A real lesson with no charge, followed by a straight recommendation.' },
      { h3: 'Stage-matched groups', p: 'Five to ten learners at one stage, often from several countries.' },
      { h3: 'Breaks for holidays', p: 'Twice a week in term; nothing during school holidays.' },
      { h3: 'Fixed in UK time', p: 'Your slot keeps its UK time when the clocks change; teachers in India time adapt instead.' }
    ],
    spec: { title: 'Why not group by town?', p: 'Five learners at one stage, free at the same hour, rarely live in one Moray town. Grouping by stage across a wider pool finds a real class for a pupil in Hopeman or Lhanbryde.' }
  },

  fees: {
    h2: 'Fees in Moray',
    intro: 'Buckie or Burghead, the fee is identical, and the same everywhere we teach outside India.',
    first: 'A complete free lesson, then a clear suggestion.',
    group: 'About eight lessons a month with five to ten learners at one stage.',
    private: 'About eight lessons a month with a teacher of your own.',
    closer: 'Our prices are in US dollars, and we have no sterling price list. Charges begin only once the free lesson has fixed a course and a weekly time; the pricing page details holidays, missed lessons and moving between formats.'
  },

  reviewsH2: 'Reviews from Google',

  book: {
    h2: 'Book a free Moray lesson',
    intro: 'Say who is learning, their age or S stage, and a favourite interest. The first lesson could be a Scratch game, a Python program, or the Roman numeral reader on this page.',
    success: 'Thank you. Your Moray request has come through.'
  },

  faq: {
    h2: 'Moray questions',
    intro: 'Moray in figures, the lighthouse project and the practicalities.',
    items: [
      { q: 'How many people live in Moray?', a: 'The 2022 census counted about 93,400 residents in roughly 43,100 households, rounded by NRS to the nearest hundred.' },
      { q: 'What are the main towns in Moray?', a: 'NRS mid-2020 estimates give Elgin 25,040, Forres 9,900, Buckie 9,010, Lossiemouth 6,840 and Keith 4,610.' },
      { q: 'What is the Covesea Skerries project?', a: 'Learners write a Roman numeral parser in Python, test it on the listing\'s transcription MDLCC XL1V, see a naive parser output 1695, and build a strict validator that rejects it.' },
      { q: 'What is 1844 in Roman numerals?', a: 'In the standard form, MDCCCXLIV: M for 1,000, DCCC for 800, XL for 40 and IV for 4.' },
      { q: 'How old is Covesea Skerries Lighthouse?', a: 'Historic Environment Scotland says it is dated 1844, by the engineer Alan Stevenson, and lists it at Category A.' },
      { q: 'Do lessons happen in Elgin?', a: 'Lessons are online, so learners join from home anywhere in Moray.' },
      { q: 'Do you teach Higher Computing Science?', a: 'Yes, alongside National 5 Computing Science and maths at both levels. We teach understanding and make no promises about grades.' },
      { q: 'Which ages can learn?', a: 'Ages 6 to 67. Young children start with blocks, secondary pupils with Python and exam work, and adults wherever they need to.' },
      { q: 'What does it cost?', a: 'The first lesson is free; afterwards USD 100 a month for a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'No, we pause. Tell us your school\'s holiday dates and we work around them.' }
    ]
  },

  next: {
    eyebrow: 'Related pages',
    h2: 'Beyond Moray',
    html: 'Try <a class="cg-inline-link" href="/coding-classes-in-aberdeenshire">Aberdeenshire</a>, <a class="cg-inline-link" href="/coding-classes-in-highland">the Highlands</a> and <a class="cg-inline-link" href="/best-coding-class-in-inverness">Inverness</a>, or every council on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Moray and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-aberdeenshire', label: 'Aberdeenshire' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-mry .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-mry .cg-hero h1 { font-weight: 760; letter-spacing: -0.03em; line-height: 1.02; }
.cg-root.cg-mry .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-mry .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mry .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.022em; }
.cg-root.cg-mry .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-mry .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mry .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-mry .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-mry .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'Moray (S12000020), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 93,400 (females 47,400, males 46,000); households 43,100; density 41.7 per square kilometre (Scotland 69.8); ages 0 to 14 14,500 (15.5 per cent), 65+ 21,400 (22.9 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Elgin 25,040; Forres 9,900; Buckie 9,010; Lossiemouth 6,840; Keith 4,610; Burghead 1,840; Lhanbryde 1,830; Fochabers 1,770; Hopeman 1,710; Dufftown 1,590. HES LB37605 (Category A, added 26/01/1971), Covesea Skerries Lighthouse, Keepers\' Cottages and Steading, burgh Lossiemouth: "LIGHTHOUSE: Alan Stevenson, engineer, James Smith, contractor, dated 1844"; "Tall circular 7-storey lighthouse/tower"; "pair single storey, Egyptian style cottages"; inscription "In salutem omnium Northern Lights. Alan Stevenson, LLB, Engineer, James Smith, Contractor, William Middlemiss, Superintendent. MDLCC XL1V"; "The lighthouse now with automated light, the original light in Lossiemouth Fisheries Museum".',
    localProject: 'Naive parser (drop unknown chars, subtractive rule) vs strict regex. MDLCC XL1V 1695/invalid; MDLCCXLIV 1694/invalid; MDCCCXLIV 1844/valid; MDCCCXLIIII 1844/invalid; IM 999/invalid; VX 5/invalid. Round trip 1..3999: 0 failures. 19,607 strings of length 1-5, 735 valid (3.7 per cent). Naive maps IV, IVX, IIII to 4. Longest: 3,888 MMMDCCCLXXXVIII (15). Page states we have not seen the stone and do not claim the inscription is wrong. AI angle: silent correction or confident misparse. Lesson family: parsing and input validation.',
    requiredMentions: [
      '93,400',
      '43,100',
      'Elgin',
      'Forres',
      'Buckie',
      'Lossiemouth',
      'Burghead',
      'Lhanbryde',
      'Fochabers',
      'Hopeman',
      'Dufftown',
      'Covesea',
      'LB37605'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB37605: Covesea Skerries Lighthouse, Keepers\' Cottages and Steading.', url: 'https://portal.historicenvironment.scot/designation/LB37605' }
    ],
    rejectedClaims: [
      'What is actually carved on the inscription stone: not seen, not claimed; only the listing transcription is used.',
      'That the inscription or listing contains an error: not claimed; the page says the transcription is not a standard numeral.',
      'Light characteristics, range or current operation: not in the listing, not claimed.',
      'Whisky distillery facts: not researched for this page.',
      'Named Moray schools and school term dates: none named or read.',
      'Directions or distances between Moray towns: not claimed.'
    ]
  }
};
