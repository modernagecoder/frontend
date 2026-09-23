'use strict';
// Dunfermline (cg- city page, UK cluster Phase 4, Scotland). Spine: could Carnegie's own story survive a noisy telegraph
// line? A Hamming (7,4) error-correcting code applied to the full text of the Autobiography of Andrew Carnegie (Project
// Gutenberg ebook 17976, read raw 23 September 2026; body 669,829 bytes, 117,001 words; scratchpad dfl/ham.py). Each byte
// split into two 4-bit halves, each sent as a 7-bit Hamming codeword; channel flips each bit independently with
// probability p (seeded, 1835). Characters wrong out of 669,829: p 0.001 raw 5,223 (theory 0.797 percent), Hamming 32,
// triple repetition 9; p 0.01 raw 51,518 (7.69 percent; theory 7.73), Hamming 2,682 (0.40 percent; theory about 0.41),
// triple 1,616 (0.24 percent; theory 0.24); p 0.05 raw 224,375 (33.5 percent), Hamming 58,266 (8.7 percent), triple
// 37,687 (5.6 percent). Bits sent: raw 5,358,632; Hamming 9,377,606 (75 percent more); triple 16,075,896 (200 percent
// more). Theory: raw 1-(1-p)^8; Hamming block fails with 2 or more flips, 1-(1-p)^7-7p(1-p)^6; triple 3p^2(1-p)+p^3 per bit.
// Lesson family: Hamming code (parity, syndromes, error correction), code rate versus protection, simulation against
// formulas. Screened 23 September 2026: 'Hamming code' 0 hits (the only 'Hamming' is a Dutch mayor on the Zaanstad page).
// Carnegie text read raw: 'I was born in Dunfermline, in the attic of the small one-story house, corner of Moodie Street
// and Priory Lane, on the 25th of November, 1835'; 'Dunfermline had long been noted as the center of the damask trade in
// Scotland'; father William Carnegie a damask weaver; life as a telegraph messenger; a man in the West 'had learned to
// read by sound and could really take a message by ear', which led him to practise the new method.
// Historic Environment Scotland (HES Designations ArcGIS layer and portal, read raw): LB25961 Dunfermline Abbey, New
// Abbey Parish Church, Category A, added 12 January 1971: William Burn, 1818-21; alterations R R Anderson, 1905; tower
// balustrade of open stonework lettering 'KING ROBERT THE BRUCE'. LB25960 Dunfermline Abbey, nave and memorials,
// Category A. LB26026 2-4 Moodie Street and 5 Priory Lane, Andrew Carnegie Birthplace Memorial, Category B: lintel
// inscribed 1835-1919; porch inscription, gift of his wife Louise Whitfield Carnegie to his native town; first sod turned
// 25 June 1925 by Margaret Carnegie Miller; properties transferred to the Carnegie Dunfermline Trustees in 1910.
// LB25970 statue of Andrew Carnegie, Pittencrieff Park, Category B; LB25972 Louise Carnegie Memorial Gateway, Category A.
// Census: National Records of Scotland, Scotland's Census 2022 first results, rounded to the nearest hundred: Fife
// S12000047 370,400 usual residents (2011: 365,198), 169,600 households (2011: 160,952), 279.5 per square km, 15.6
// percent aged 0 to 14, 62.8 percent 15 to 64, 21.6 percent 65 and over; Scotland 5,436,600, 69.8 per square km, 15.3,
// 64.6 and 20.1 percent. Places in OS Open Names (NT08): Dunfermline (City, Fife); Abbey Parks, Headwell, Brucefield,
// Garvock Hill, Townhill, Bellyeoman, Crossford, Cairneyhill, Limekilns, Kingseat, Halbeath.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'DUNFERMLINE', blurb: 'Andrew Carnegie\'s birthplace in Fife, with a project that sends his autobiography down a noisy telegraph line and repairs it with a Hamming code.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-dunfermline',
  code: 'dfl',
  accent: '#1D46A5',
  accentRationale: 'Dunfermline: a strong royal blue, from the solver (6.90:1 on every paper tint, dE 7.1 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Dunfermline',
    eyebrow: 'Dunfermline, Fife',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Fife' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dunfermline',
  title: 'Best Coding Classes in Dunfermline | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Dunfermline learners aged 6 to 67, from Abbey Parks and Headwell to Crossford. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Dunfermline, on a page that sends Andrew Carnegie\'s autobiography down a noisy line and mends it with a Hamming code.',
  twitterDescription: 'Dunfermline learners aged six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Dunfermline Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, algorithms and information theory, mathematics and AI taught live online in English to Dunfermline children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Dunfermline',
  capsuleQ: 'What are the best coding classes in Dunfermline?',
  capsule: 'Fife, the council area that includes Dunfermline, had about 370,400 usual residents at Scotland\'s 2022 census, rounded to the nearest hundred by National Records of Scotland. Andrew Carnegie wrote that he was born in Dunfermline on 25 November 1835, in a house at the corner of Moodie Street and Priory Lane. Dunfermline learners aged six to sixty-seven meet our teachers in India in live video lessons, one to one or in a class of five to ten at the same stage, at times fitted around Scottish school days and working hours. The first lesson is free; after that a group place costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Before his fortune, Andrew Carnegie was a telegraph messenger, and in his autobiography he describes learning to take a message by ear. A telegraph line could garble a message; so can any cable or radio link today. Our Dunfermline project sends Carnegie\'s entire autobiography, 669,829 characters, through a simulated line that flips one bit in every hundred at random. Sent plainly, 51,518 characters arrive wrong. Wrapped in a Hamming code, which adds three check bits to every four and can find and fix any single flipped bit, only 2,682 do. Teenagers build the code, run the line and check every result against the formula that predicts it.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Dunfermline.',

  picks: {
    eyebrow: 'Course picks for Dunfermline',
    h2: 'Four courses for Carnegie\'s birthplace',
    intro: 'Start from what the learner already enjoys and choose the nearest course. Every one begins with a free live lesson, and booking it asks for no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from secret-message games to animations that send signals between sprites.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First Python with text and binary numbers, the building blocks of every message a computer sends.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and problem solving for teenagers, including the bit tricks behind codes that repair their own errors.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'University and adult', note: 'Algorithms for adults who work with networks, storage or data transfer and want to know how errors are caught.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dunfermline today',
      h2: 'A city within a closely settled Fife',
      intro: 'Scotland\'s Census 2022 first results from National Records of Scotland, which publishes figures for council areas rounded to the nearest hundred. Dunfermline sits within Fife.',
      body: [
        { kind: 'table', caption: 'Fife and Scotland, Scotland\'s Census 2022 (rounded) and 2011', head: ['Area', 'Usual residents, 2022', 'Usual residents, 2011', 'Residents per square kilometre, 2022'], rows: [
          ['Fife', '370,400', '365,198', '279.5'],
          ['Scotland', '5,436,600', '5,295,403', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Households', p: 'Fife had about 169,600 households with at least one usual resident in 2022, against 160,952 at the 2011 census.' },
          { h3: 'Children and older residents', p: 'In Fife, 15.6% of residents were aged 0 to 14 and 21.6% were 65 or over, against 15.3% and 20.1% across Scotland.' },
          { h3: 'Closely settled', p: 'At 279.5 residents per square kilometre, Fife is far more densely settled than Scotland as a whole, which averages 69.8.' }
        ] },
        { kind: 'p', text: 'Because National Records of Scotland rounds every 2022 figure separately to the nearest hundred, the parts may not add exactly to the totals, and we quote each as published. Our Dunfermline classes draw on the city and the Fife villages around it. A Brucefield eight-year-old making a first game, an S4 pupil from Townhill working towards National 5 Computing Science and a Crossford adult learning Python for a new role could each join a different class, placed by level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Carnegie\'s town',
      h2: 'A weaver\'s son, an abbey and a birthplace museum',
      intro: 'From Andrew Carnegie\'s own autobiography, and from Historic Environment Scotland\'s listing records.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '25 November 1835', p: 'Carnegie writes that he was born in the attic of a small one-storey house at the corner of Moodie Street and Priory Lane, that his father was a damask weaver, and that Dunfermline had long been noted as the centre of Scotland\'s damask trade.' },
          { h3: '1818 to 1821', p: 'Historic Environment Scotland dates the New Abbey Parish Church at Dunfermline Abbey to William Burn in these years, with alterations in 1905; its tower balustrade spells out the words KING ROBERT THE BRUCE in stone.' },
          { h3: '25 June 1925', p: 'The Andrew Carnegie Birthplace Memorial carries an inscription recording that the first sod was turned on this date by his daughter, Margaret Carnegie Miller, and that the building was the gift of his wife, Louise Whitfield Carnegie.' }
        ] },
        { kind: 'p', text: 'Historic Environment Scotland lists the Abbey church and the nave at Category A, and the birthplace memorial at 2-4 Moodie Street and 5 Priory Lane at Category B, recording that the properties passed to the Carnegie Dunfermline Trustees in 1910 and that a lintel is inscribed with the years 1835 to 1919. It also lists a statue of Carnegie and the Louise Carnegie Memorial Gateway in Pittencrieff Park. We have no connection with Historic Environment Scotland, the Abbey or the Carnegie trusts, and the history here is taken from their published records and from Carnegie\'s own words.' },
        { kind: 'spec', title: 'Where the text comes from', p: 'Project Gutenberg publishes the Autobiography of Andrew Carnegie as a free ebook, number 17976. We use the body of the book, 117,001 words and 669,829 characters, exactly as published.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Could Carnegie\'s story survive a noisy line?',
      intro: 'A Hamming code sends every four data bits with three extra check bits, each checking a different overlapping group. If one bit flips on the way, the pattern of failed checks, called the syndrome, points to exactly which bit it was, and the receiver flips it back.',
      body: [
        { kind: 'table', caption: 'Characters of Carnegie\'s autobiography (669,829 in all) that arrive wrong, when each bit is flipped at random with the stated chance', head: ['Chance a bit flips', 'Sent plainly', 'Hamming code (75% more bits)', 'Every bit sent three times (200% more bits)'], rows: [
          ['1 in 1,000', '5,223', '32', '9'],
          ['1 in 100', '51,518', '2,682', '1,616'],
          ['1 in 20', '224,375', '58,266', '37,687']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Text to bits', p: 'Turn every character of the book into eight bits, 5,358,632 bits in all, and split each character into two halves of four bits.' },
          { h3: '2. Add the checks', p: 'Give each half three parity bits, so every group of four becomes a codeword of seven. On arrival, recompute the checks; a mismatch names the bit to flip back.' },
          { h3: '3. Compare with theory', p: 'A plain character fails if any of its eight bits flips; a Hamming codeword fails only if two or more of its seven do. At 1 in 100 the formulas predict 7.73% and about 0.41% of characters wrong; the simulation gives 7.69% and 0.40%.' }
        ] },
        { kind: 'callout', h3: 'Why not just send everything three times?', p: 'Repetition works: send each bit three times and take the majority, and at 1 in 100 only 1,616 characters arrive wrong. But it triples the message, 16,075,896 bits instead of 5,358,632. The Hamming code sends 9,377,606 bits, 75% more rather than 200% more, and still cuts the errors from 51,518 to 2,682. It is not the strongest protection here, but it buys most of the benefit for far less extra traffic, which is the trade-off every error-correcting code has to strike.' },
        { kind: 'p', text: 'The last row shows the limit. When one bit in twenty flips, two errors in the same seven-bit codeword become common, and a Hamming code, built to fix one, gets them wrong: 58,266 characters still arrive damaged. Every code is designed for a certain level of noise, and choosing the right one means measuring the line first. That, rather than any single number, is the engineering lesson.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Error-correcting codes',
      h2: 'Five checks before trusting a code',
      intro: 'Learned on Carnegie\'s autobiography, then used for QR codes, memory chips, satellite links, file storage and any message that has to arrive intact.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Dunfermline telegraph simulation', head: ['Question', 'For the Carnegie text', 'What goes wrong if you skip it'], rows: [
          ['Does the code fix every single error?', 'All seven single-bit flips tested by syndrome', 'A mis-wired check bit that fixes the wrong bit'],
          ['Does the simulation match the maths?', 'Every result compared with its formula', 'A bug that looks like a result'],
          ['How much extra does it cost?', '75% more bits for Hamming, 200% for repetition', 'Protection bought at any price'],
          ['What noise is it built for?', 'Tested at 1 in 1,000, 1 in 100 and 1 in 20', 'A code used beyond the noise it can handle'],
          ['Is the randomness repeatable?', 'A fixed seed, so every run gives the same counts', 'Results nobody else can reproduce']
        ] },
        { kind: 'p', text: 'The second row carries the project. At every noise level the simulated counts sit close to what probability predicts, and where they differ slightly, as at 1 in 1,000 with 32 Hamming errors against about 28 expected, the gap is the ordinary wobble of a random experiment of this size. A simulation that disagreed badly with its own theory would point to a bug, not a discovery.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Sending secret messages with a parity rule, and catching the one card a friend secretly turned over.' },
          { h3: 'Teenagers', p: 'Binary, parity, matrices and the Hamming (7,4) code in Python, with a simulated noisy line and probability checks.' },
          { h3: 'Adults', p: 'How storage, networks and QR codes survive errors, and how to weigh protection against extra cost.' }
        ] },
        { kind: 'p', text: 'We have no connection with Project Gutenberg, Historic Environment Scotland, National Records of Scotland or Fife Council. The book, listing records and census tables are published openly; the encoding, simulated noise and counts on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From secret messages to Hamming codes',
    intro: 'Think of the ages as rough bands; the free lesson places each learner properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and signals', p: 'Secret-message games and simple signals between sprites in block code.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Binary and parity', p: 'Turning letters into bits in Python and adding a parity bit to catch a single mistake.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Codes that correct', p: 'Hamming codes, syndromes, simulation and probability, checked against exact formulas.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Reliable data', p: 'Error detection and correction in networks, storage and file formats, and the cost of each safeguard.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI moves enormous amounts of data. Why should a Dunfermline teenager learn how a single bit is saved?',
    intro: 'Because every model, file and message depends on data arriving exactly as sent, and the tricks that guarantee it are simple enough to build by hand.',
    p1: 'Data moving between machines is protected by error-correcting codes of this general kind, adding check bits so that damage can be found and repaired. A learner who has flipped bits in Carnegie\'s book and watched three check bits repair them understands something most users of technology never see.',
    p2: 'The project also teaches a habit AI rarely models: compare every experimental result with a theoretical prediction. When the simulation says 0.40% and the formula says about 0.41%, you can trust both. When they disagree, you have found a bug, and finding it is the valuable part.',
    closer: 'So a Dunfermline teenager should keep learning to code in 2026, in the town where Carnegie was born in 1835: machines send the data, but people design the codes that keep it whole.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Abbey Parks, Headwell or Crossford, all in one class',
    intro: 'Dunfermline\'s learners live across the city and in the Fife villages around it. Online, every one of them is equally close to the lesson.',
    cells: [
      { h3: 'City and villages', p: 'A learner in Garvock Hill and another in Cairneyhill can share a class without anyone taking a bus.' },
      { h3: 'Scottish stages', p: 'P1 to P7, S1 to S6, then National 5, Higher and Advanced Higher: our levels use the names Scottish schools use, and every lesson is taught in English.' },
      { h3: 'The free lesson', p: 'The learner builds something real in the first session, and the teacher then suggests a level, a course and a weekly time. No card is ever needed.' },
      { h3: 'Classes by level', p: 'Five to ten learners at one stage, from Dunfermline, the rest of the UK and abroad, so every level has good times to choose from.' },
      { h3: 'Two lessons a week', p: 'Two fixed lessons weekly, around eight a month, with school holidays and exam leave agreed with the teacher well ahead.' },
      { h3: 'Evening in India', p: 'India keeps one time all year, so a 5 pm class in Fife starts at 21:30 for our teachers during British Summer Time and 22:30 in winter.' }
    ],
    spec: { title: 'Across Fife', p: 'Learners in Rosyth, Limekilns, Kingseat or Halbeath join exactly the same classes, since every lesson is online and classes are grouped by level.' }
  },

  fees: {
    h2: 'Dunfermline lesson fees',
    intro: 'A free first lesson, then one fee each month.',
    first: 'A complete lesson without charge, ending with a suggested level, course and weekly time.',
    group: 'About eight live lessons a month in a class of five to ten learners at one stage.',
    private: 'About eight live lessons a month, with a teacher for your learner alone.',
    closer: 'Families in Bellyeoman or Townhill pay in US dollars, like every family outside India, and our site shows no pound prices. No charge is made until after the free lesson, once a course and weekly time are agreed with us; the pricing page explains pauses, missed lessons and changes between group and one-to-one teaching.'
  },

  reviewsH2: 'Six family reviews from Google, word for word',

  book: {
    h2: 'Book a free lesson for a Dunfermline learner',
    intro: 'The first lesson fits the learner: a secret-message parity game for a young child, a short Python program that turns a name into binary for a beginner, or Carnegie\'s autobiography and a Hamming code for a teenager ready for real engineering.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Dunfermline learner.'
  },

  faq: {
    h2: 'Dunfermline coding class questions',
    intro: 'What Dunfermline families most often ask us.',
    items: [
      { q: 'How many people live in Fife?', a: 'Scotland\'s Census 2022 counted about 370,400 usual residents in Fife, the council area that includes Dunfermline, rounded to the nearest hundred, against 365,198 in 2011. National Records of Scotland publishes these first results for council areas.' },
      { q: 'How does Fife compare with Scotland?', a: 'Fife is far more densely settled, at 279.5 residents per square kilometre against 69.8 for Scotland, and 21.6% of its residents were 65 or over in 2022, against 20.1% across Scotland.' },
      { q: 'What is a Hamming code?', a: 'A way of adding check bits to data so that a single flipped bit can be found and corrected. The (7,4) version sends every four data bits as seven, and the pattern of failed checks points to the bit that went wrong.' },
      { q: 'How much does a Hamming code help?', a: 'Sending Carnegie\'s autobiography through a line that flips one bit in a hundred, 51,518 of its 669,829 characters arrive wrong when sent plainly, and 2,682 with a Hamming code, at the cost of 75% more bits.' },
      { q: 'Where does the text come from?', a: 'From Project Gutenberg\'s free ebook of the Autobiography of Andrew Carnegie, number 17976. We are not connected with Project Gutenberg.' },
      { q: 'Where was Andrew Carnegie born?', a: 'In his autobiography Carnegie writes that he was born in Dunfermline on 25 November 1835, in the attic of a small house at the corner of Moodie Street and Priory Lane. Historic Environment Scotland lists the birthplace memorial there at Category B.' },
      { q: 'When do Dunfermline lessons run?', a: 'Dunfermline families usually choose a time after school, on a weekday evening or at the weekend, and we settle it in the free lesson. Our teachers in India are four and a half hours ahead of Scotland in British Summer Time and five and a half hours ahead in winter.' },
      { q: 'Is there a Dunfermline centre?', a: 'No. We have no centre in Dunfermline or anywhere else in the UK, as every lesson is live online. Learners need a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Dunfermline lessons cost?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than age or where they live, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scotland and beyond',
    html: 'Across the Forth, the <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh page</a> works out why summer nights there never go properly dark, and up the coast <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> tests weather forecasts against plain baselines. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> covers the Curriculum for Excellence, with exam support on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages, and every other city is linked from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dunfermline and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/best-coding-class-in-dundee', label: 'Dundee' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-dfl .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-dfl .cg-hero h1 { font-weight: 765; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-dfl .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-dfl .cg-eyebrow { letter-spacing: 0.15em; font-weight: 690; text-transform: uppercase; }
.cg-root.cg-dfl .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.015em; }
.cg-root.cg-dfl .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-dfl .cg-table th { letter-spacing: 0.027em; }
.cg-root.cg-dfl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dfl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-dfl .cg-callout { border-left-width: 5px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded to the nearest hundred: Fife S12000047 370,400 usual residents (2011: 365,198), 169,600 households (2011: 160,952), 279.5 per square kilometre, 15.6 percent aged 0 to 14, 21.6 percent 65 and over; Scotland 5,436,600 (2011: 5,295,403), 69.8, 15.3 and 20.1 percent. Carnegie autobiography: born 25 November 1835, Moodie Street and Priory Lane; damask trade; telegraph messenger; message by ear. HES: LB25961 (Category A; William Burn 1818-21; 1905; KING ROBERT THE BRUCE balustrade), LB25960 (A), LB26026 (B; 1835-1919 lintel; 25 June 1925; Louise Whitfield Carnegie; trustees 1910), LB25970 (B), LB25972 (A).',
    localProject: 'Could Carnegie\'s story survive a noisy line? Gutenberg 17976, 669,829 characters. Hamming (7,4) vs plain vs triple repetition, bit-flip chance 1 in 1,000, 1 in 100, 1 in 20: plain 5,223, 51,518, 224,375 wrong; Hamming 32, 2,682, 58,266; triple 9, 1,616, 37,687. Bits: 5,358,632; 9,377,606 (+75 percent); 16,075,896 (+200 percent). Theory at 1 in 100: plain 7.73 percent, Hamming about 0.41 percent; simulated 7.69 and 0.40. Lesson family: Hamming code.',
    requiredMentions: [
      '370,400',
      '279.5',
      'Hamming',
      'syndrome',
      'Moodie Street',
      'damask',
      'Pittencrieff',
      'Abbey Parks',
      'Headwell',
      'Brucefield',
      'Crossford',
      'Townhill'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Fife and Scotland population, households, age shares and density; 2011 comparisons.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'Project Gutenberg, Autobiography of Andrew Carnegie (ebook 17976): birth, damask trade, telegraph messenger, message by ear.', url: 'https://www.gutenberg.org/ebooks/17976' },
      { claim: 'Historic Environment Scotland, LB25961 Dunfermline Abbey, New Abbey Parish Church.', url: 'https://portal.historicenvironment.scot/designation/LB25961' },
      { claim: 'Historic Environment Scotland, LB26026 Andrew Carnegie Birthplace Memorial.', url: 'https://portal.historicenvironment.scot/designation/LB26026' },
      { claim: 'Historic Environment Scotland, designations data (listed buildings layer): LB25960, LB25970, LB25972.', url: 'https://inspire.hes.scot/arcgis/rest/services/HES/HES_Designations/MapServer' },
      { claim: 'Ordnance Survey, OS Open Names: Dunfermline and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' }
    ],
    rejectedClaims: [
      'Who invented the Hamming code and when: not taken from a fetched source, so no history of the code is given.',
      'That Robert the Bruce is buried at the Abbey: not stated in the fetched records; the page mentions only the lettering on the tower.',
      'A population figure for Dunfermline itself: the census first results are published for council areas, so only Fife is quoted.',
      'A percentage growth for Fife since 2011: the 2022 figure is rounded, so both numbers are given without a derived rate.',
      'Carnegie\'s later life and wealth: not needed for the page; his own words about Dunfermline and the telegraph are used instead.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Project Gutenberg, Historic Environment Scotland, National Records of Scotland, the Carnegie trusts or Fife Council.'
    ]
  }
};
