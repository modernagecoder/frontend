'use strict';
// Flintshire (cg- county page, UK cluster Phase 7, row 291). One principal area. Spine: how does a barcode on a book store
// thirteen digits when only twelve are drawn? Anchor (read raw 26 September 2026): Cadw listed building record 15025,
// Grade I, St Deiniol's Library, Hawarden: "The library was founded by W.E. Gladstone in 1890 as a centre for Christian
// learning and as a place for study"; "some 25,000 of his own books were donated and lodged initially in a temporary
// building on the present site"; "designed by Douglas and Minshull of Chester and was erected between 1899 and 1902"; "A
// further, accommodation wing was added 1904-6"; "Of red sandstone under a medium-pitched slate roof".
// Our model (scratchpad wal/ean.py; an invented 978 number, not a real book): EAN-13 check digit (weights 1 and 3) gives
// 9780000000019. Encoding: 3 + 5 + 3 guard modules and 12 digits x 7 = 95 modules; left digits drawn with L or G codes,
// right with R codes. The first digit is not drawn: it is carried by the L/G pattern of the left six (for 9: LGGLGL).
// Every L code has an odd number of dark modules, every G an even number. Decoder round trip correct. Reversed scan: our
// decoder rejects it. Flipping each of the 95 modules once: all 95 rejected by the code patterns before the check digit is
// needed.
// Lesson family: barcode encoding (EAN-13 structure, implicit digit via parity pattern, error detection); screened
// (barcode, QR code: 0 hits). Distinct from Enfield (Luhn check digit): the check digit is mentioned only in passing.
// Place facts: ONS Census 2021 TS001 via Nomis: Flintshire W06000005 154,962. ONS built-up areas (published; OA sums within
// 6 except as noted): Connah's Quay 16,770; Hawarden 14,280; Buckley 13,560; Flint 12,780; Mold 9,890; Holywell 7,735;
// Broughton 6,530; Shotton 6,500; Bagillt 5,945; Mynydd Isa 4,735; Penyffordd 3,825. Chester BUA (5,140 of 92,760 inside
// Flintshire) and Hope (4,000 of 4,420) straddle the boundary and are left out. No Welsh-language statistics. Term dates:
// none read. Religious content of the anchor not discussed beyond the record's founding description.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'FLINTSHIRE', blurb: 'Connah\'s Quay, Hawarden, Buckley, Flint and Mold, and a Gladstone\'s library lesson on how book barcodes hide a digit.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-flintshire',
  code: 'fls',
  accent: '#7B3E8A',
  accentRationale: 'Flintshire: a library-binding purple from the solver (5.84:1 on the darkest paper tint), redder and lighter than the Caerphilly purple-black',
  pageType: 'governorate',
  place: {
    name: 'Flintshire',
    eyebrow: 'Flintshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Wrexham', href: '/best-coding-class-in-wrexham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Flintshire',
  title: 'Coding Classes in Flintshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Flintshire, from Connah\'s Quay, Hawarden and Buckley to Flint, Mold, Holywell, Shotton and Bagillt.',
  ogDescription: 'Coding classes for all of Flintshire, and a Hawarden library project: build and decode a book barcode in Python and find the digit that is never drawn.',
  twitterDescription: 'Flintshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Flintshire',
    description: 'Ability-placed online coding, Python, data encoding and mathematics for children, teenagers and adults across Flintshire, taught live in English.'
  },

  h1: 'Coding classes in Flintshire',
  capsuleQ: 'What are the best coding classes in Flintshire?',
  capsule: 'Flintshire had 154,962 usual residents at the 2021 census. Its biggest built-up areas are Connah\'s Quay, Hawarden, Buckley and Flint, followed by Mold, Holywell, Broughton and Shotton, with Bagillt, Mynydd Isa and Penyffordd among the smaller places. We teach entirely live on video, with teachers in India, and a first lesson at no cost places each learner, from a Year 2 pupil to a Year 13 student or an adult. Coding, Python and maths are taught to anyone between six and 67, privately or in a small class of five to ten. The Flintshire project starts at a library in Hawarden. Those who stay on pay USD 100 per month for a shared class, or USD 150 per month for private tuition.',
  lead: 'In Hawarden, Cadw lists St Deiniol\'s Library at Grade I. Its record says W. E. Gladstone founded it in 1890 and gave some 25,000 of his own books, and that the red sandstone library wing was built between 1899 and 1902. Libraries today track their books with barcodes, and every modern book carries one on its back cover: the thirteen-digit EAN-13, which for books starts 978. Look closely and there is a small mystery. The barcode has bars for only twelve of the thirteen digits. The first digit is never drawn, yet every scanner reads it. Where does it hide? This page\'s project builds a barcode in Python, decodes it again, and finds out.',
  wa: 'Hello Modern Age Coders, we are in Flintshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Flintshire',
    h2: 'Common first courses in Flintshire',
    intro: 'A Year 3 pupil in Buckley who loves secret codes, a Year 7 in Mold ready for typed code, a Year 11 in Flint preparing for WJEC GCSE Computer Science, and an adult in Connah\'s Quay who works with stock systems. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with secret codes, patterns of ones and zeros, and decoders.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, including strings, lists and simple encoders.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, with binary data, encoding and tests.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, up to reading and checking real data formats.' }
    ]
  },

  sections: [
    {
      id: 'flintshire', tint: '', eyebrow: 'Flintshire in figures',
      h2: '154,962 people in Flintshire',
      intro: 'ONS counted 154,962 usual residents at the 2021 census; we read the figure through Nomis. The town list uses ONS built-up areas from that count.',
      body: [
        { kind: 'table', caption: 'Flintshire built-up areas over 4,000 people, ONS 2021 (boundary-straddling areas left out)', head: ['Place', 'People', 'Place', 'People'], rows: [
          ['Connah\'s Quay', '16,770', 'Broughton', '6,530'],
          ['Hawarden', '14,280', 'Shotton', '6,500'],
          ['Buckley', '13,560', 'Bagillt', '5,945'],
          ['Flint', '12,780', 'Mynydd Isa', '4,735'],
          ['Mold', '9,890', '', ''],
          ['Holywell', '7,735', '', '']
        ] },
        { kind: 'p', text: 'Two built-up areas cross the county boundary and are left out: about 5,140 people inside Flintshire belong to the Chester built-up area, and most of Hope\'s 4,420 live on the Flintshire side. Penyffordd is next in size after the table. Flintshire pupils learn under the Curriculum for Wales and sit WJEC papers at GCSE and A level. Flintshire County Council sets school terms; we have not read them, so families share their own dates.' },
        { kind: 'callout', h3: 'Wrexham and WJEC exams', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-wrexham">Wrexham</a> has its own page. For exam help: <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Flintshire project',
      h2: 'Thirteen digits, twelve drawn',
      intro: 'Stripes of seven, three code tables, and a hidden digit.',
      body: [
        { kind: 'p', text: 'The number is invented, not a real book. The learner takes twelve digits starting 978, adds a thirteenth check digit using the standard sum with weights of one and three, and gets 9780000000019. Then comes the barcode. Each drawn digit becomes a pattern of seven narrow stripes, dark or light, written in Python as ones and zeros. There are three pattern tables, called L, G and R. The right-hand six digits always use R. The left-hand six use a mixture of L and G, and here is the trick: the choice of L or G for those six digits spells out the first digit. For a first digit of 9, the left six follow the pattern L, G, G, L, G, L.' },
        { kind: 'table', caption: 'Our EAN-13 barcode for an invented book number, 26 September 2026', head: ['Part', 'What it holds', 'Stripes'], rows: [
          ['Start guard', 'A fixed pattern so the scanner can find the edge', '3'],
          ['Left six digits', 'Each in L or G code; the L/G mix encodes the first digit', '42'],
          ['Centre guard', 'A fixed pattern in the middle', '5'],
          ['Right six digits', 'Each in R code, including the check digit', '42'],
          ['End guard', 'The same as the start', '3'],
          ['Total', 'Thirteen digits carried by twelve drawn ones', '95']
        ] },
        { kind: 'p', text: 'How can a scanner tell an L pattern from a G pattern? The learner counts the dark stripes: every L code has an odd number, every G code an even number. So a scanner reads the six left-hand digits, notes odd or even for each, and looks up the first digit from that pattern of six. The program decodes its own barcode and gets back 9780000000019. Read backwards, the patterns do not match the tables, so our decoder refuses it rather than returning a wrong number.' },
        { kind: 'p', text: 'Then the learner damages the barcode on purpose, flipping one stripe at a time, all 95 of them. Every single-stripe error is caught by the patterns themselves, because a flipped stripe changes the odd-or-even count or produces a pattern in no table, so the check digit is not even needed for these. It is a neat demonstration that careful design, not luck, lets a scanner say "I cannot read that" instead of guessing.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a barcode on squared paper from a code table, swap with a friend, and decode each other\'s.' },
          { h3: 'Ages 11 to 15', p: 'Write Python that turns digits into stripes of ones and zeros and prints a barcode as text.' },
          { h3: 'Ages 15 and up', p: 'Build the full encoder and decoder, hide the first digit in the L/G pattern, and test every single-stripe error.' }
        ] },
        { kind: 'callout', h3: 'A real library, an invented number', p: 'The library\'s history comes from Cadw\'s record. The barcode number is invented and belongs to no real book, and nothing here describes the library\'s own catalogue or systems.' }
      ]
    },
    {
      id: 'st-deiniols-library', tint: 'deep', eyebrow: 'Why Hawarden\'s library',
      h2: 'Gladstone\'s gift of 25,000 books',
      intro: 'What Cadw\'s record says about the building.',
      body: [
        { kind: 'table', caption: 'St Deiniol\'s Library, Hawarden, Cadw listed building record 15025, Grade I', head: ['Record detail', 'What it says'], rows: [
          ['Founded', '1890, by W. E. Gladstone'],
          ['Books', 'Some 25,000 of his own books, first lodged in a temporary building on the site'],
          ['Library wing', 'Built 1899 to 1902 as part of the National Gladstone Memorial'],
          ['Architects', 'Douglas and Minshull of Chester'],
          ['Later addition', 'An accommodation wing, 1904 to 1906'],
          ['Materials', 'Red sandstone under a medium-pitched slate roof']
        ] },
        { kind: 'p', text: 'Barcodes are one of the most successful pieces of everyday computing: they sit on groceries, parcels, tickets and library books, and the same ideas of fixed-width patterns, guard marks and built-in error detection reappear in QR codes, network packets and storage formats. A Flintshire pupil who has hidden a digit in odd and even stripes understands how clever encoding makes machines reliable.' },
        { kind: 'p', text: 'We have no connection with Cadw, the library or Flintshire County Council. Cadw wrote the record; we wrote the barcode program and chose the invented number, so any slips are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From secret codes to data formats',
    intro: 'Year bands are guides; the trial lesson finds the right level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Codes and patterns', p: 'Block coding with secret messages and simple patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Ones and zeros', p: 'Typed Python with binary, strings and lookup tables.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Encoding and testing', p: 'Data representation and systematic testing alongside WJEC GCSE and A level Computer Science.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Real formats', p: 'Python for adults working with barcodes, files and data standards.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and formats',
    h2: 'An AI can write a barcode generator in seconds. Will it test the damaged cases?',
    intro: 'A generator that works on one example is not yet a reliable encoder.',
    p1: 'Ask a chatbot for EAN-13 code and it will usually produce something that draws a plausible barcode. Whether it handles the hidden first digit correctly, rejects a backwards read, and catches a damaged stripe is only known after systematic tests.',
    p2: 'A Flintshire learner who has flipped all 95 stripes one by one knows how to test a format properly. That habit is what turns AI-written code into code other people can depend on.',
    closer: 'Breaking your own code on purpose, every way you can, is a habit worth learning, and a reason Flintshire teenagers should code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Holywell to Penyffordd, lessons at home',
    intro: 'Every town and village in the county joins by video.',
    cells: [
      { h3: 'Hands on, from the start', p: 'Pupils build every program themselves, and the teacher, watching the shared screen, steps in only when a nudge will help.' },
      { h3: 'Fitted to Welsh schooling', p: 'We match Shotton Year 5s and Buckley sixth-formers alike to their school year and Curriculum for Wales stage, and follow WJEC for exams. Lessons are in English.' },
      { h3: 'A free first lesson', p: 'One complete lesson without charge, then honest advice.' },
      { h3: 'Groups at one level', p: 'Five to ten learners at the same level, joining from many places.' },
      { h3: 'Term-time lessons', p: 'Two lessons weekly in term, with holidays off.' },
      { h3: 'Same hour, all year', p: 'British summer time or not, the lesson stays put at its UK hour; teachers working on India time adjust.' }
    ],
    spec: { title: 'Why groups span towns', p: 'Five learners at one level, free at the same time, rarely live in one Flintshire town. Grouping by level gives a pupil in Bagillt or Mynydd Isa a class that fits.' }
  },

  fees: {
    h2: 'Fees in Flintshire',
    intro: 'Mold or Connah\'s Quay, the fee is identical, the same as in every country we teach outside India.',
    first: 'A complete lesson, free, followed by a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are in US dollars; there is no sterling list. We start billing only after the free lesson has fixed a course and weekly time; the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Reviews left on Google',

  book: {
    h2: 'Book a free Flintshire lesson',
    intro: 'Tell us the learner\'s age or school year and an interest. The first lesson could be a Scratch secret-code game, some Python, or the barcode project on this page.',
    success: 'Thank you. Your Flintshire request has been received.'
  },

  faq: {
    h2: 'Flintshire questions',
    intro: 'The county, the barcode project and practical points.',
    items: [
      { q: 'How many people live in Flintshire?', a: 'The 2021 census counted 154,962 usual residents in Flintshire.' },
      { q: 'What are the largest towns in Flintshire?', a: 'ONS 2021 built-up areas: Connah\'s Quay 16,770, Hawarden 14,280, Buckley 13,560 and Flint 12,780.' },
      { q: 'What is the barcode project?', a: 'Learners encode an invented 13-digit book number as an EAN-13 barcode in Python, decode it again, discover that the first digit is hidden in the odd and even pattern of the left-hand stripes, and test all 95 single-stripe errors.' },
      { q: 'What is an EAN-13 barcode?', a: 'The 13-digit barcode on most retail products and books. Books use numbers starting 978 or 979.' },
      { q: 'When was St Deiniol\'s Library founded?', a: 'In 1890, by W. E. Gladstone, according to Cadw, which lists the building at Grade I.' },
      { q: 'Are lessons held in Flintshire?', a: 'They happen over video, so a Holywell pupil and a Buckley pupil join from their own homes.' },
      { q: 'Do you teach WJEC GCSE Computer Science?', a: 'Yes, along with Digital Technology and GCSE maths in Wales. Our aim is genuine understanding; grades are never promised.' },
      { q: 'What ages can learn?', a: 'From 6 to 67: blocks for young children, Python for teenagers, and Python for adults from scratch.' },
      { q: 'What does it cost?', a: 'Nothing for the trial; after it, USD 100 a month for a group or USD 150 a month for a personal teacher.' },
      { q: 'Do lessons pause in school holidays?', a: 'Yes. Send us your school\'s holiday weeks and we leave them free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More North Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-wrexham">Wrexham</a> and <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> have city pages, and <a class="cg-inline-link" href="/coding-classes-in-denbighshire">Denbighshire</a> works out the geometry of a curved weir. Every Welsh area is linked from our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page as it goes live, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Flintshire and North Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-wrexham', label: 'Wrexham' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-fls .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-fls .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-fls .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-fls .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fls .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-fls .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-fls .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fls .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-fls .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-fls .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Flintshire (W06000005), Flintshire County Council. ONS Census 2021 TS001 via Nomis: 154,962. ONS built-up areas (published; OA sums within 6): Connah\'s Quay 16,770; Hawarden 14,280; Buckley 13,560; Flint 12,780; Mold 9,890; Holywell 7,735; Broughton 6,530; Shotton 6,500; Bagillt 5,945; Mynydd Isa 4,735; Penyffordd 3,825; Chester BUA 92,760 with 5,140 inside Flintshire (excluded); Hope 4,420 with 4,000 inside (excluded). Cadw listed building record 15025, Grade I, St Deiniol\'s Library, Hawarden: "founded by W.E. Gladstone in 1890 as a centre for Christian learning and as a place for study"; "some 25,000 of his own books were donated and lodged initially in a temporary building on the present site"; "designed by Douglas and Minshull of Chester and was erected between 1899 and 1902"; "A further, accommodation wing was added 1904-6"; "Of red sandstone under a medium-pitched slate roof". EAN-13 structure (L, G, R codes; parity pattern; 95 modules) and the 978/979 book prefix are standard published barcode facts.',
    localProject: 'Invented 978000000001 + check digit 9 = 9780000000019. 95 modules (3+42+5+42+3). First digit 9 encoded by parity LGGLGL. L codes odd dark count, G even. Round trip OK. Reversed read rejected by our decoder. 95 single-module flips: 95 rejected by pattern, 0 reaching the check digit. Lesson family: barcode encoding (EAN-13), implicit digit via parity, error detection by structure.',
    requiredMentions: [
      'Connah\'s Quay',
      'Buckley',
      'Holywell',
      'Shotton',
      'Bagillt',
      'Mynydd Isa',
      'Penyffordd',
      'St Deiniol',
      'EAN-13',
      '25,000 of his own books'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Flintshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 15025: St Deiniol\'s Library, Hawarden.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=15025' }
    ],
    rejectedClaims: [
      'The library\'s current name, catalogue, barcodes or systems: not researched, not claimed.',
      'Any real ISBN: the number used is invented.',
      'Religious history beyond the record\'s founding description: not discussed.',
      'Flint Castle and St Winefride\'s Well: considered; not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
