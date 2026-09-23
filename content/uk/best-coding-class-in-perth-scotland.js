'use strict';
// Perth (cg- city page, UK cluster Phase 4, Scotland). Spine: can a name-filing code find the names in The Fair Maid of
// Perth? Soundex, as specified by the US National Archives ('The Soundex Indexing System', archives.gov, read raw 23
// September 2026), applied to Walter Scott's novel (Project Gutenberg ebook 7987, read raw; body 185,409 words;
// scratchpad per/sx.py, novel.py). Implementation checked against all seven National Archives examples: Washington
// W252, Lee L000, Gutierrez G362, Pfister P236, Jackson J250, Tymczak T522, Ashcraft A261. Y treated as a separator like
// a vowel (the Archives list Y among letters to disregard but name only A, E, I, O, U as separators). Name-like words:
// capitalised words of 3+ letters never seen in lower case in the novel and appearing 3 or more times: 212 spellings,
// 5,170 occurrences, 180 Soundex codes, 19 codes shared by 2 or more spellings. Shared codes include: J523 Johnston 13,
// Johnstone 6 (true variant); D552 Dwining 107, Dominican 19, Dominicans 18, Dominic 5, Dominus 3; J500 John 147, Joan 3;
// C623 Craigdallie 35, Christian 23, Chrystal 3, Christians 3; L535 London 4, Lundin 3; P620 Percy 4, Paris 3; M242
// MacLouis 20, MacGillis 3; L200 Louise 63, Louis 5, Logie 3; H245 Highland 73, Highlanders 33, Highlands 28, Highlander
// 22, Highlandmen 8, Highlandman 7. Catharine 357 and Catherine 1, both C365. Henry 372 (H560), Perth 224 (P630), Ramorny
// 259 (R565), Simon 211 (S550). The text: 'Henbane Dwining, the apothecary'; Scott's opening: 'Perth, so eminent for the
// beauty of its situation, is a place of great antiquity'; the North Inch named.
// Lesson family: Soundex and phonetic matching, false positives and false negatives in fuzzy matching. Screened 23
// September 2026: Soundex and phonetic 0 hits in src/pages and content/uk.
// Heritage from Historic Environment Scotland portal (read raw): LB39300 St John's Kirk, Category A, added 20 May 1965:
// choir completed by 1448; central tower with leaded broach spire completed by 1511, 155 feet high. LB39339 Perth Bridge
// over the River Tay, Category A, added 20 May 1965: John Smeaton, 1766-1771, widened by A D Stewart, 1869; pink Perth
// sandstone ashlar; ferries used until the bridge was built in 1771. Other Category A listings: St Ninian's Cathedral, the
// A K Bell Library, the former King James VI Hospital, Greyfriars Burial Ground, Lower City Mills.
// Census: National Records of Scotland, Scotland's Census 2022 first results, rounded to the nearest hundred: Perth and
// Kinross S12000048 150,800 usual residents (2011: 146,652), 70,000 households (2011: 64,777), 28.5 per square km, 14.7
// percent aged 0 to 14, 60.6 percent 15 to 64, 24.7 percent 65 and over; Scotland 5,436,600, 69.8, 15.3, 64.6, 20.1
// percent. Places in OS Open Names (NO02): Perth (City, Perth and Kinross); Kinnoull, Craigie, Cherrybank, Letham,
// Muirton, Gannochy, Moncreiffe, North Inch, Scone, Kinfauns, Huntingtower.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'PERTH', blurb: 'The city on the Tay where Walter Scott set The Fair Maid of Perth, with a project that tests how well Soundex finds the names in his novel.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-perth-scotland',
  code: 'pth',
  accent: '#734561',
  accentRationale: 'Perth: a dusky rose, after the pink Perth sandstone Historic Environment Scotland records for Smeaton\'s bridge; from the solver (6.19:1 on every paper tint, dE 7.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Perth',
    eyebrow: 'Perth, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Perth and Kinross' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Perth, Scotland',
  title: 'Best Coding Classes in Perth, Scotland | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Perth learners aged 6 to 67, from Kinnoull and Craigie to Letham and Scone. The first lesson is free of charge.',
  ogDescription: 'Coding and AI lessons for Perth, on a page that runs Soundex over Walter Scott\'s The Fair Maid of Perth and counts the names it matches, merges and misses.',
  twitterDescription: 'Perth learners from six to sixty-seven can study coding, Python, maths and AI with us in live online lessons, and the first one is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Perth Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, text processing and algorithms, mathematics and AI taught live online in English to Perth children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Perth, Scotland',
  capsuleQ: 'What are the best coding classes in Perth, Scotland?',
  capsule: 'Perth and Kinross had about 150,800 usual residents at Scotland\'s 2022 census, a figure National Records of Scotland rounds to the nearest hundred, with 24.7% of them aged 65 or over. Historic Environment Scotland records that John Smeaton built Perth Bridge over the Tay between 1766 and 1771. Perth learners aged six to sixty-seven join live video classes led by our teachers in India, taught privately or with five to ten others at their level, and timed to suit the Scottish school week and working day. There is no fee for lesson one, and afterwards a class place is USD 100 a month while one-to-one lessons are USD 150.',
  lead: 'Walter Scott set The Fair Maid of Perth in the city, and wrote that Perth was "so eminent for the beauty of its situation". His novel is full of names: Catharine, Henry, Simon, the apothecary Henbane Dwining. Our Perth project asks whether a computer can recognise those names when they are spelt differently, using Soundex, a code that turns a name into a letter and three digits by how it sounds. Teenagers build Soundex from the US National Archives\' rules, test it on the Archives\' own examples, then run it over the whole book. It correctly pairs Johnston with Johnstone, but it also files Dwining with Dominican, and John with Joan.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Perth, Scotland.',

  picks: {
    eyebrow: 'Course picks for Perth',
    h2: 'Four courses for the city on the Tay',
    intro: 'Match the course to whatever the learner is already keen on. All four open with a free live lesson, booked without a card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from word games to a secret-code machine that turns names into numbers.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python with strings and lists, enough to split a book into words and count the ones that begin with a capital.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to build Soundex from its official rules and run it over a whole novel.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults who match names, addresses or records that are spelt differently in different places.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Perth today',
      h2: 'A city at the centre of a wide council area',
      intro: 'Perth sits in the Perth and Kinross council area. The first results of Scotland\'s 2022 census, from National Records of Scotland, are published by council area with every figure rounded to the nearest hundred.',
      body: [
        { kind: 'table', caption: 'Perth and Kinross beside Scotland: census counts for 2011, and rounded counts for 2022', head: ['Council area or country', 'Residents counted in 2011', 'Residents in 2022, rounded', 'Residents to each square kilometre, 2022'], rows: [
          ['Perth and Kinross', '146,652', '150,800', '28.5'],
          ['Scotland', '5,295,403', '5,436,600', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'More households', p: 'The council area had around 70,000 households with at least one usual resident in 2022, compared with 64,777 counted in 2011.' },
          { h3: 'An older profile', p: 'Residents aged 65 and above made up 24.7% of Perth and Kinross in 2022, the Scottish figure being 20.1%; children up to 14 were 14.7%, against 15.3%.' },
          { h3: 'Space between places', p: 'With 28.5 residents to the square kilometre, Perth and Kinross is well below the Scottish average of 69.8.' }
        ] },
        { kind: 'p', text: 'Since National Records of Scotland rounds each 2022 figure independently, we give every number exactly as published rather than adding them up. Our Perth classes gather learners from the city and the villages around it. A Letham seven-year-old coding a first quiz, an S4 pupil from Craigie heading for National 5 Computing Science and a Kinnoull adult learning Python to clean up a mailing list might each find a class at a different level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Kirk, bridge and novel',
      h2: 'A medieval kirk, Smeaton\'s bridge and Scott\'s Perth',
      intro: 'From Historic Environment Scotland\'s listing records, and from the text of Walter Scott\'s novel as published by Project Gutenberg.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'By 1448', p: 'Historic Environment Scotland records that the choir of St John\'s Kirk was completed by 1448, and that its central tower and spire, 155 feet high, were completed by 1511. The kirk is listed at Category A.' },
          { h3: '1766 to 1771', p: 'Perth Bridge was built by John Smeaton in these years, of pink Perth sandstone, and widened in 1869. The listing notes that ferries carried people across the river until the bridge was finished in 1771.' },
          { h3: 'The North Inch', p: 'Scott writes that, by old tradition, the Romans likened the Tay to the Tiber, and the large level space known as the North Inch to an open field of their own city.' }
        ] },
        { kind: 'p', text: 'Historic Environment Scotland also lists St Ninian\'s Cathedral, the A K Bell Library, the former King James VI Hospital, Greyfriars Burial Ground and the Lower City Mills at Category A. Scott\'s novel, free on Project Gutenberg, runs to 185,409 words and mentions Perth 224 times. We have no connection with Historic Environment Scotland or Project Gutenberg, and the dates and quotations here are theirs.' },
        { kind: 'spec', title: 'Where the rules come from', p: 'The US National Archives publishes the Soundex coding guide on its page about the Soundex indexing system: B, F, P and V become 1; C, G, J, K, Q, S, X and Z become 2; D and T become 3; L becomes 4; M and N become 5; R becomes 6; vowels, H, W and Y are dropped, with rules for doubled letters and neighbours sharing a number.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Can Soundex find the names in The Fair Maid of Perth?',
      intro: 'Soundex keeps a name\'s first letter and turns the next three consonant sounds into digits, so names that sound alike get the same code. It was designed for surname indexes. The question is how well it copes with a real book.',
      body: [
        { kind: 'table', caption: 'Some Soundex codes shared by more than one name-like word in The Fair Maid of Perth, with the number of times each appears', head: ['Code', 'Words that share it', 'What the match really is'], rows: [
          ['J523', 'Johnston 13, Johnstone 6', 'The same name spelt two ways'],
          ['C365', 'Catharine 357, Catherine 1', 'The same name spelt two ways'],
          ['D552', 'Dwining 107, Dominican 19, Dominic 5', 'A character and an order of friars'],
          ['J500', 'John 147, Joan 3', 'Two different names'],
          ['C623', 'Craigdallie 35, Christian 23', 'A surname and a word of faith'],
          ['L535', 'London 4, Lundin 3', 'A city and a surname']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build and test', p: 'Code the rules exactly as the National Archives state them, then check all seven of their worked examples, from Washington (W252) to Ashcraft (A261). All seven must match before the book is touched.' },
          { h3: '2. Find the names', p: 'Split the novel into 185,409 words and keep capitalised words that never appear in lower case and occur at least three times: 212 spellings, used 5,170 times.' },
          { h3: '3. Group by sound', p: 'Give each spelling its code. The 212 spellings fall into 180 codes, and 19 codes are shared by two or more spellings. Then read every group and decide whether the match is real.' }
        ] },
        { kind: 'callout', h3: 'Right, wrong and missed', p: 'Soundex gets the easy cases: Johnston and Johnstone, Catharine and the single Catherine, and plurals such as Highland, Highlanders and Highlandmen. But many shared codes are coincidences. The apothecary Dwining lands with Dominican friars, John with Joan, Craigdallie with Christian, Percy with Paris and London with Lundin. And because the first letter is kept, Soundex can never pair names that start differently, however alike they sound. A tool that is right about some matches and wrong about others needs a person to check its output.' },
        { kind: 'p', text: 'The implementation also exposed a gap in the rules. The Archives list Y among the letters to ignore but name only A, E, I, O and U as the vowels that separate two consonants with the same number. Our code treats Y like a vowel there, and says so. Writing down an assumption where the specification is silent is part of building anything from rules.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Fuzzy matching',
      h2: 'Five checks before trusting a name match',
      intro: 'Learned on Scott\'s Perth, then used for customer records, family history, school registers, address lists and any database where one person appears under several spellings.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Soundex study', head: ['Question', 'For The Fair Maid of Perth', 'What goes wrong if you skip it'], rows: [
          ['Does the code follow the specification?', 'All seven National Archives examples reproduced', 'A matcher that is subtly wrong from the start'],
          ['What counts as a name?', 'Capitalised, never lower case, three or more uses', 'Ordinary words swamping the groups'],
          ['Which matches are real?', 'Every shared code read by a person', 'John and Joan merged into one record'],
          ['What can it never find?', 'Names with different first letters', 'Missed matches nobody knows about'],
          ['Where are the rules unclear?', 'The Y rule written down as an assumption', 'Two programs giving different answers']
        ] },
        { kind: 'p', text: 'The third row is the heart of it. A matching tool produces two kinds of mistake: false matches, where different names share a code, and misses, where the same name gets two codes. Soundex makes both. Counting them honestly on a real text shows a learner why no automatic matcher should merge records without a check.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Inventing a secret code for names, then finding two classmates whose names come out the same.' },
          { h3: 'Teenagers', p: 'String handling, rule-based algorithms and error counting in Python, on a 185,409-word novel.' },
          { h3: 'Adults', p: 'Matching names and records across systems, and deciding where a person must review the result.' }
        ] },
        { kind: 'p', text: 'We have no connection with the US National Archives, Project Gutenberg, Historic Environment Scotland or Perth and Kinross Council. The novel, rules, listing records and census tables are published openly; the code, groupings and counts on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From secret codes to fuzzy matching',
    intro: 'Treat the ages as a starting guess; the free lesson settles the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes for names', p: 'Turning names into codes with simple rules in block code, and spotting when two names clash.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Text in Python', p: 'Strings, loops and dictionaries in Python, counting words and grouping them by a rule.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Algorithms from specifications', p: 'Soundex built from its official rules, tested on examples, then measured on a real novel.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Records at work', p: 'Matching and cleaning names and addresses, with false matches and misses counted rather than hidden.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can guess that two names are the same. Why should a Perth teenager learn Soundex?',
    intro: 'Because every matching method, from a simple rule-based code to a modern model, makes both kinds of mistake, and someone has to count them.',
    p1: 'Soundex is simple enough to understand completely: a learner can say exactly why it put Dwining with Dominican. Modern AI matchers are far more capable, but their reasons are much harder to see. Having measured the mistakes of a transparent method first, a learner knows what questions to ask of an opaque one.',
    p2: 'The project also practises building from a specification: reading the rules, testing on the official examples and writing down the one place the rules leave open. That discipline matters more, not less, when code is written with AI help.',
    closer: 'So a Perth teenager should keep learning to code in 2026, in the city where Scott set a novel full of names: AI can suggest a match in an instant, but people still decide whether John really is Joan.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kinnoull, Cherrybank or Scone, and the same class',
    intro: 'Perth learners live on both banks of the Tay and in villages across a council area with 28.5 people to the square kilometre. Online, all of them are the same short step from the lesson.',
    cells: [
      { h3: 'Both banks of the Tay', p: 'A learner in Muirton and another in Kinfauns can sit in the same class without either crossing the river.' },
      { h3: 'In step with Scottish schools', p: 'Placement follows the Scottish stages, primary to S6 with National 5, Higher and Advanced Higher along the way; lessons themselves are in English.' },
      { h3: 'The opening lesson', p: 'No slides and no sales pitch: the learner writes real code, and the teacher then proposes a level, a course and a regular weekly time. We never take card details.' },
      { h3: 'Level, not age', p: 'Five to ten learners at one level, drawn from Perth, the rest of the UK and further afield, keeping good times open at each stage.' },
      { h3: 'A twice-weekly rhythm', p: 'Two set lessons every week, about eight a month, with holidays and exam study worked out with the teacher ahead of time.' },
      { h3: 'Late evenings in India', p: 'India stays on one time zone all year, so a class at five in the afternoon in Perth begins at half past nine at night for our teachers in summer, and half past ten in winter.' }
    ],
    spec: { title: 'Around Perth and Kinross', p: 'Learners in Crieff, Blairgowrie, Kinross or Pitlochry join exactly the same classes, since every lesson is online and classes are set by level.' }
  },

  fees: {
    h2: 'Perth lesson fees',
    intro: 'No charge for the first lesson, and a single monthly fee after that.',
    first: 'A full lesson free of charge, closing with a recommended level, course and weekly time.',
    group: 'Roughly eight live lessons a month, in a class of five to ten learners at the same stage.',
    private: 'Roughly eight live lessons a month, the teacher working with your learner alone.',
    closer: 'Families in Gannochy or Moncreiffe are billed in US dollars, like everyone outside India, and our site never quotes pound prices. Billing starts only after the free lesson, when a course and a weekly time have been agreed with us; the pricing page explains pausing, missed lessons and changing between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families, copied exactly',

  book: {
    h2: 'Book a free lesson for a Perth learner',
    intro: 'We shape the first lesson to the learner: a name-code game for a young child, a short Python program that counts capital letters in a paragraph for a beginner, or Scott\'s novel and Soundex for a teenager ready to build an algorithm from its specification.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Perth learner.'
  },

  faq: {
    h2: 'Perth coding class questions',
    intro: 'The questions Perth families most often ask.',
    items: [
      { q: 'How many people live in Perth and Kinross?', a: 'Scotland\'s Census 2022 counted about 150,800 usual residents in Perth and Kinross, rounded to the nearest hundred by National Records of Scotland, against 146,652 at the 2011 census.' },
      { q: 'How does Perth and Kinross compare with Scotland?', a: 'It is far less crowded, with 28.5 residents per square kilometre where Scotland has 69.8, and its population is older, with 24.7% aged 65 or over in 2022 compared with 20.1% nationally.' },
      { q: 'What is Soundex?', a: 'A code for names: keep the first letter, turn the next consonant sounds into digits by a fixed table, drop vowels and a few other letters, and pad or cut to four characters. Names that sound alike often, but not always, get the same code.' },
      { q: 'How well does Soundex work on The Fair Maid of Perth?', a: 'It groups the novel\'s 212 name-like spellings into 180 codes. It correctly pairs Johnston with Johnstone, but it also puts Dwining with Dominican and John with Joan, so every match needs checking.' },
      { q: 'Where do the rules and the text come from?', a: 'The Soundex rules and worked examples come from the US National Archives, and the novel from Project Gutenberg\'s free ebook of The Fair Maid of Perth. We are not connected with either.' },
      { q: 'Who built Perth Bridge?', a: 'Historic Environment Scotland records that John Smeaton built it between 1766 and 1771, in pink Perth sandstone, and that it was widened in 1869. It is listed at Category A.' },
      { q: 'When are Perth lessons?', a: 'Families in Perth usually pick a time after school, on a weekday evening or at the weekend, agreed in the free lesson. For our teachers in India the lesson falls late in the evening: they are four and a half hours ahead of Scotland in summer and five and a half in winter.' },
      { q: 'Is there a centre in Perth?', a: 'No. We have no Perth centre and no premises anywhere in the UK, since every lesson is live online. Learners need a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Perth lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or where they live, with five to ten learners at the same stage. When no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scotland and beyond',
    html: 'Down the Tay, the <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee page</a> tests weather forecasts against plain baselines, and in Fife <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> mends Carnegie\'s autobiography with a Hamming code. For exam years there are dedicated pages for <a class="cg-inline-link" href="/national-5-computing-science-help">National 5</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>; how our stages sit alongside the Curriculum for Excellence is explained in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> leads to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Perth and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-dundee', label: 'Dundee' },
    { href: '/best-coding-class-in-dunfermline', label: 'Dunfermline' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-pth .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3.2vw, 2.55rem); }
.cg-root.cg-pth .cg-hero h1 { font-weight: 735; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-pth .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-pth .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pth .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.013em; }
.cg-root.cg-pth .cg-grid-3 { gap: clamp(1.05rem, 2.7vw, 2.25rem); }
.cg-root.cg-pth .cg-table th { letter-spacing: 0.023em; }
.cg-root.cg-pth .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pth .cg-ladder-col { border-top: 3px solid var(--cg-accent); border-bottom: 1px dotted var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-pth .cg-callout { border-left-width: 5px; border-radius: 1px; }
`,

  dossier: {
    curriculumAuthority: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded to the nearest hundred: Perth and Kinross S12000048 150,800 (2011: 146,652), 70,000 households (2011: 64,777), 28.5 per square kilometre, 14.7 percent aged 0 to 14, 24.7 percent 65 and over; Scotland 5,436,600 (2011: 5,295,403), 69.8, 15.3 and 20.1 percent. HES LB39300 St John\'s Kirk (Category A; choir by 1448; spire by 1511, 155 feet), LB39339 Perth Bridge (Category A; John Smeaton 1766-1771; widened 1869; pink Perth sandstone; ferries before 1771); other Category A: St Ninian\'s Cathedral, A K Bell Library, former King James VI Hospital, Greyfriars Burial Ground, Lower City Mills. Scott: Perth \'so eminent for the beauty of its situation\'; North Inch; Henbane Dwining, the apothecary.',
    localProject: 'Can Soundex find the names in The Fair Maid of Perth? US National Archives Soundex rules; all seven worked examples reproduced. Gutenberg 7987, 185,409 words; 212 name-like spellings (5,170 uses), 180 codes, 19 shared. True: Johnston/Johnstone J523, Catharine/Catherine C365, Highland family H245. False: Dwining/Dominican D552, John/Joan J500, Craigdallie/Christian C623, London/Lundin L535, Percy/Paris P620, MacLouis/MacGillis M242. Y treated as a separator (rules silent). Lesson family: Soundex and fuzzy matching.',
    requiredMentions: [
      '150,800',
      'Soundex',
      'Dwining',
      'Henbane',
      'Craigdallie',
      'Gannochy',
      'St John\'s Kirk',
      'North Inch',
      'Kinnoull',
      'Cherrybank',
      'Letham',
      'Muirton'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Perth and Kinross and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'US National Archives, The Soundex Indexing System: coding guide, rules and worked examples.', url: 'https://www.archives.gov/research/census/soundex' },
      { claim: 'Project Gutenberg, The Fair Maid of Perth by Walter Scott (ebook 7987).', url: 'https://www.gutenberg.org/ebooks/7987' },
      { claim: 'Historic Environment Scotland, LB39300 St John\'s Kirk.', url: 'https://portal.historicenvironment.scot/designation/LB39300' },
      { claim: 'Historic Environment Scotland, LB39339 Perth Bridge over River Tay.', url: 'https://portal.historicenvironment.scot/designation/LB39339' },
      { claim: 'Historic Environment Scotland, designations data (listed buildings layer): Category A listings in central Perth.', url: 'https://inspire.hes.scot/arcgis/rest/services/HES/HES_Designations/MapServer' },
      { claim: 'Ordnance Survey, OS Open Names: Perth and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'The history of Soundex (who devised it and when): not taken from a fetched source, so the page gives none beyond the National Archives rules.',
      'A population figure for Perth itself: the census first results are for council areas, so only Perth and Kinross is quoted.',
      'A percentage growth since 2011: the 2022 figure is rounded, so both numbers are given without a derived rate.',
      'Scott\'s historical claims in the novel\'s opening (Roman tradition, royal residence): quoted only as Scott\'s words.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the US National Archives, Project Gutenberg, Historic Environment Scotland, National Records of Scotland or Perth and Kinross Council.'
    ]
  }
};
