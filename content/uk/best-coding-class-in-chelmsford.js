'use strict';
// Chelmsford (cg- city page, UK cluster Phase 4). Spine: how small can a year of river readings get? LZW
// compression written by hand and compared with zlib on the River Chelmer at Springfield, Environment Agency
// Hydrology API measure 8dfc9b31-d090-4988-acfc-562ee23bb9d7-level-i-900-m-qualified, 15-minute stage,
// 1 January to 31 December 2024, read 23 September 2026 (scratchpad chm/lzw.py). 35,136 readings, no gaps in the
// 15-minute clock, all quality Good, 12,428 with qcode Edited; stage 0.122 m (31 August 10:45) to 0.874 m
// (10 February 01:30); values to 3 decimals so millimetres are exact. Sizes in bytes, LZW = variable width 9 to 16
// bit codes with reset when full, zlib level 9: as downloaded 6,114,054, LZW 313,504, zlib 127,285; time and level
// only 909,576, LZW 158,436, zlib 105,627; level in mm only 140,544, LZW 34,933, zlib 19,398; change in mm only
// 78,964, LZW 11,596, zlib 11,970. Round trip decode verified for time-and-level and change files. Changes: 0 mm
// 18,980 of 35,135 (54.0 percent); within 2 mm 93.5 percent. Longest LZW phrase: 153 bytes in the downloaded file
// (the repeated measure address), 70 bytes in the change file (35 unchanged readings). Code cap on the change file:
// 12 bits 12,243; 14 and 16 bits 11,596. On time and level, 20 bits 159,866 against 16 bits 158,436.
// Lesson family: LZW dictionary compression and delta encoding (lossless round trip, representation before
// algorithm, dictionary size limits). Screened 23 September 2026: LZW, Lempel, Chelmer and Marconi 0 hits; distinct
// from York entropy/Huffman (which only names compression as an application).
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Chelmsford E07000070: TS001 181,523 usual residents,
// 179,087 in households, 2,436 in communal establishments; TS007A 9,107 aged 20 to 24 (5.0 percent, England 6.0),
// 12,147 aged 40 to 44 (6.7, England 6.3), 12,449 aged 45 to 49 (6.9, England 6.4); TS068 32,304 students of 171,642
// aged 5 and over (18.8 percent, England 20.4); TS006 535.9 per square km (England 433.5). Essex Record Office blog,
// 18 October 2012, Sharing Our History: Marconi in Chelmsford: company first established in a former silk works in
// Hall Street in 1898; February 1912 work began on the 70,000 square foot New Street factory, opened June that year;
// eight years later the factory hosted the first experimental wireless broadcast, Dame Nellie Melba singing two
// arias, received throughout Europe and as far away as Newfoundland. Historic England NHLE (ArcGIS layer):
// 1141330 MARCONI'S FIRST RADIO FACTORY, Grade II, listed 6 February 1974, TL 71002 06305 (nearest named road in OS
// Open Names: Hall Street); 1031538 MARCONIS, Grade II, listed 21 November 1997, TL 70892 07337. Places (Writtle,
// Great Baddow, South Woodham Ferrers, Danbury, Galleywood, Broomfield, Springfield) all in Chelmsford district per
// OS Open Names.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'CHELMSFORD', blurb: 'Marconi\'s radio city, with a project that squeezes a year of River Chelmer readings using a compressor learners write themselves.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-chelmsford',
  code: 'chm',
  accent: '#724A31',
  accentRationale: 'Chelmsford: a copper brown for coil windings and valve-era radio, from the solver (6.22:1 on every paper tint, dE 7.4 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Chelmsford',
    eyebrow: 'Chelmsford, Essex',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Chelmsford' },
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chelmsford, England',
  title: 'Best Coding Classes in Chelmsford | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Chelmsford learners aged 6 to 67, from Writtle and Great Baddow to South Woodham Ferrers. First lesson free.',
  ogDescription: 'Coding and AI lessons for Chelmsford, on a page where learners write their own compressor and shrink a year of River Chelmer readings.',
  twitterDescription: 'Chelmsford learners from six to sixty-seven can learn coding, Python and AI with us in live online lessons. The first one costs nothing.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Chelmsford Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, data compression, AI and mathematics taught live online in English to Chelmsford children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Chelmsford',
  capsuleQ: 'What are the best coding classes in Chelmsford?',
  capsule: 'Census 2021 counted 181,523 usual residents in the Chelmsford district, at 535.9 people per square kilometre against 433.5 across England. The Essex Record Office tells how Marconi set up his company in a former silk works in Hall Street in 1898 and later built the New Street works. With us, a Chelmsford learner of any age from six to sixty-seven joins a live video lesson taught from India, either one to one or in a group of five to ten at the same level, scheduled around the British school and working day. The first lesson is free; after that a group place costs USD 100 a month and private lessons USD 150.',
  lead: 'The Environment Agency gauge at Springfield recorded the River Chelmer every 15 minutes through 2024: 35,136 readings with no gaps, which arrive as a 6.1 megabyte file. Our teenagers write LZW, the dictionary compressor that learns repeated patterns as it reads, and race it against zlib. On the file as downloaded, zlib wins easily. Then they change the representation instead of the algorithm: drop what the clock already tells you, store millimetres, and keep only how much the river moved since the last reading. The file falls to 78,964 bytes before any compressor runs, and on that file their own LZW comes in at 11,596 bytes, ahead of zlib\'s 11,970.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Chelmsford.',

  picks: {
    eyebrow: 'Course picks for Chelmsford',
    h2: 'Four courses for Marconi\'s city',
    intro: 'Start from whatever the learner already likes doing. There is a free live lesson at the front of every course, and booking it needs no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, the first step towards games that turn a message into a code and back again.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first line to full projects, the grounding a teenager needs to read a large data file and write a compressor for it.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real measurements handled in Python: cleaning them, storing them sensibly and checking nothing was lost on the way.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for working adults who move large exports around and want smaller files without losing a single value.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chelmsford today',
      h2: 'A city with more people in their forties',
      intro: 'Census 2021 figures for the City of Chelmsford district, which stretches from Writtle to South Woodham Ferrers, as published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Chelmsford district, Census 2021', head: ['Measure', 'Chelmsford', 'England'], rows: [
          ['Usual residents', '181,523', '56,490,048'],
          ['Living in households', '179,087', 'Not compared'],
          ['Living in communal establishments', '2,436', 'Not compared'],
          ['Aged 20 to 24', '9,107 (5.0%)', '6.0%'],
          ['Aged 40 to 44', '12,147 (6.7%)', '6.3%'],
          ['Aged 45 to 49', '12,449 (6.9%)', '6.4%'],
          ['Students among residents aged 5 and over', '32,304 (18.8%)', '20.4%'],
          ['Usual residents per square kilometre', '535.9', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Parents\' generation', p: 'Residents aged 40 to 44 made up 6.7% of the district and those aged 45 to 49 made up 6.9%, both above the figures for England.' },
          { h3: 'Fewer in their early twenties', p: 'Only 5.0% were aged 20 to 24, against 6.0% nationally, and 18.8% of residents aged five and over were studying.' },
          { h3: 'Mostly households', p: 'Of the 181,523 residents, 179,087 lived in households; 2,436 lived in communal establishments such as care homes and halls.' }
        ] },
        { kind: 'p', text: 'Our Chelmsford classes reflect that mix of families. A Year 4 pupil in Galleywood might be building a first game in blocks, a Year 11 student in Great Baddow revising GCSE Computer Science, and a parent in Danbury learning Python to tidy the spreadsheets at work, each placed in a small group at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The radio city',
      h2: 'From a silk works to a broadcast heard in Newfoundland',
      intro: 'Taken from the Essex Record Office and from Historic England\'s listing records.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1898', p: 'The Essex Record Office says Marconi, often credited as the inventor of radio, first established his company in a former silk works in Hall Street, Chelmsford.' },
          { h3: '1912', p: 'Hall Street soon became too small. Work began in February 1912 on a 70,000 square foot factory in New Street, and the works opened that June.' },
          { h3: 'Eight years on', p: 'The New Street factory hosted what the Record Office calls the first experimental wireless broadcast: Dame Nellie Melba singing two arias, heard across Europe and as far away as Newfoundland.' }
        ] },
        { kind: 'p', text: 'Historic England lists both sites at Grade II. The entry named Marconi\'s First Radio Factory, beside Hall Street, was listed on 6 February 1974, and a second entry, simply named Marconis, was added on 21 November 1997. We have no link with Historic England, the Essex Record Office or any Marconi business. Radio earns its place here because it made every bit of a signal precious, and squeezing more information into fewer bits is exactly what this page\'s project is about.' },
        { kind: 'spec', title: 'Where the river data comes from', p: 'The Environment Agency\'s Hydrology service publishes the Springfield gauge on the River Chelmer as open data: the water level, in metres above the gauge\'s own zero, every 15 minutes, with a quality grade on each reading.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How small can a year of the River Chelmer get?',
      intro: 'LZW builds a dictionary of the strings it has already seen and sends a short code whenever one repeats. zlib, the compressor inside zip files and web pages, combines a different pattern matcher with Huffman coding.',
      body: [
        { kind: 'table', caption: 'River Chelmer at Springfield, 35,136 fifteen-minute readings from 2024, size in bytes under four representations', head: ['What the file holds', 'Uncompressed', 'Our LZW', 'zlib, level 9'], rows: [
          ['Everything, as downloaded', '6,114,054', '313,504', '127,285'],
          ['Time and level only', '909,576', '158,436', '105,627'],
          ['Level in millimetres only', '140,544', '34,933', '19,398'],
          ['Change in millimetres only', '78,964', '11,596', '11,970']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Write LZW', p: 'Start with a dictionary of all 256 single bytes. Read until the string stops matching, send the code for the part that matched, and add the longer string as a new entry.' },
          { h3: '2. Prove nothing is lost', p: 'Write the decoder too, rebuild the file from the codes and compare it byte for byte. A compressor that changes one reading has failed, however small its output.' },
          { h3: '3. Change the representation', p: 'There are no gaps, so every timestamp can be worked out from the first one. Levels have three decimals, so millimetres are exact. Then store only the change from one reading to the next.' }
        ] },
        { kind: 'callout', h3: 'Representation beat the algorithm', p: 'On the file as downloaded, zlib is well ahead of a hand-written LZW. But the biggest saving came before either compressor ran: removing what the clock already implies and storing changes took 6,114,054 bytes down to 78,964. On that file the river sat still for 54.0% of the steps and moved by 2 millimetres or less for 93.5%, and plain LZW finished slightly ahead of zlib.' },
        { kind: 'p', text: 'Watching the dictionary shows why. In the downloaded file, the longest phrase LZW learned was 153 bytes long and made mostly of the same web address repeated on every line. In the file of changes, the longest was a run of 35 unchanged readings. The river is at its highest in February, 0.874 metres on the 10th, and at its lowest in late August, 0.122 metres, and the Environment Agency flags 12,428 of the year\'s readings as edited; we compress them exactly as published.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Compression in practice',
      h2: 'Five questions to ask before compressing any data',
      intro: 'Worked through on the Chelmer, then applied to sensor logs, photographs, backups, and the traffic crossing every website.',
      body: [
        { kind: 'table', caption: 'Decisions that shape how small a file can get', head: ['Question', 'For the Chelmer year', 'What goes wrong if you skip it'], rows: [
          ['Must it come back exactly?', 'Yes, every reading, checked by decoding', 'A smaller file with quietly altered values'],
          ['What is repeated for no reason?', 'The web address on every line', 'Compressing the same text 35,136 times'],
          ['What can be worked out instead?', 'Timestamps, from a gap-free 15-minute clock', 'Storing a column that carries no information'],
          ['What precision is real?', 'Three decimals, so whole millimetres', 'Rounding away real changes, or storing noise'],
          ['How large a dictionary?', '16-bit codes, reset when full', 'Codes wider than the patterns they save']
        ] },
        { kind: 'p', text: 'The last row surprised our learners. Limiting LZW to 12-bit codes made the file of changes a little bigger, 12,243 bytes, but raising the limit beyond 14 bits saved nothing more, and on the time-and-level file 20-bit codes did slightly worse than 16. A bigger dictionary costs a longer code for every entry, and it only pays when there are more patterns worth remembering.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Shortening a message by hand, swapping repeated words for numbers and checking a friend can turn it back into the original.' },
          { h3: 'Teenagers', p: 'LZW and its decoder in Python, a round-trip test, and the Chelmer file under four representations measured against zlib.' },
          { h3: 'Adults', p: 'Storing and sending large exports sensibly: what to drop, what to keep exactly, and how to check that nothing went missing.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Historic England, the Essex Record Office or Chelmsford City Council. The river readings and census tables are open data; the compressor, the representations and the measured sizes are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From secret codes to a compressor that works',
    intro: 'The ages are only a starting point; the free lesson shows where a learner fits.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and messages', p: 'Swapping repeated words for short symbols, then decoding a partner\'s message to see whether anything was lost.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Dictionaries in code', p: 'Using a Python dictionary to count repeated words and replace them with numbers in a short text.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'LZW and representation', p: 'Writing LZW with its decoder, testing the round trip and comparing four versions of the river file against zlib.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Data that travels well', p: 'Choosing formats, precision and compression for the files a job produces, with every saving checked.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI models are compressed and streamed every day. Why write a compressor in Chelmsford?',
    intro: 'Because a learner who has built one knows what is kept, what is thrown away and how to check.',
    p1: 'Compression runs under almost everything an AI system touches: training data is stored compressed, models are shrunk so they fit on phones, and answers reach the screen as compressed web traffic. A learner who has written LZW and watched it learn a river\'s repeated patterns understands that a compressor only ever finds structure that is really there.',
    p2: 'The Chelmer project also teaches the difference between lossless and lossy. Our files come back exactly, checked byte by byte, while shrinking a model usually gives up a little accuracy for a lot of size. Knowing which kind of saving you are making, and testing it, is a habit that matters far beyond compression.',
    closer: 'So yes, a Chelmsford teenager should learn to program in 2026, in the city where Marconi made radio signals worth every bit: the tools will keep getting smarter, but someone still has to check that nothing important went missing.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Writtle, Springfield or South Woodham Ferrers, all from home',
    intro: 'The district runs from Writtle in the west to South Woodham Ferrers in the south east. Online, every village and suburb is the same distance from the lesson.',
    cells: [
      { h3: 'Villages and the city', p: 'A learner in Broomfield and another in Bicknacre can sit in one class, with no drive into the centre and no parking to find.' },
      { h3: 'The school stages you know', p: 'Lessons follow the English stages Essex schools use, from Reception and Key Stages 1 to 4 up to GCSE and A level, all taught in English.' },
      { h3: 'The first lesson teaches', p: 'The free session is a proper lesson on a real task, finishing with a recommended level, course and weekly time. No card is asked for.' },
      { h3: 'Classes set by level', p: 'Five to ten learners at one stage, drawn from Chelmsford, other parts of the UK and further afield, so each level has workable times.' },
      { h3: 'A steady weekly rhythm', p: 'Two fixed lessons a week, roughly eight a month, with half terms and exam periods agreed with the teacher in advance.' },
      { h3: 'Teachers on India time', p: 'A 6 pm class in Chelmsford begins at 10.30 pm in India while British Summer Time runs and 11.30 pm in winter, since India never changes its clocks; our teachers keep late hours for UK families.' }
    ],
    spec: { title: 'Across mid Essex', p: 'Families in Maldon, Braintree, Witham or Billericay can join the very same classes, because every group is online and set by level rather than postcode.' }
  },

  fees: {
    h2: 'Chelmsford lesson fees',
    intro: 'One free lesson, then a single monthly fee.',
    first: 'A complete lesson that costs nothing, finishing with our advice on level, course and a weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at the same stage.',
    private: 'About eight live lessons a month with the teacher\'s attention on your learner only.',
    closer: 'A family in Chelmer Village is billed exactly as any family outside India is: a single US dollar fee, and no pound prices anywhere on the site. Nothing is charged until after the free lesson, once the course and the weekly slot are settled; the pricing page covers pauses, missed lessons and switching between a group and private teaching.'
  },

  reviewsH2: 'What six families wrote on Google, unedited',

  book: {
    h2: 'Book a free lesson for a Chelmsford learner',
    intro: 'The first task matches the learner: a secret-message game for a young child, a short Python program that spots repeated words for a beginner, or the Chelmer readings and a first go at LZW for a teenager who is ready.',
    success: 'Thank you. We will contact you shortly to set up a lesson for your Chelmsford learner.'
  },

  faq: {
    h2: 'Chelmsford coding class questions',
    intro: 'The questions Chelmsford families put to us most.',
    items: [
      { q: 'How many people live in the Chelmsford district?', a: 'The 2021 census counted 181,523 usual residents in the City of Chelmsford district: 179,087 in households and 2,436 in communal establishments.' },
      { q: 'How is Chelmsford different from England as a whole?', a: 'It has relatively more people in their forties and fewer in their early twenties: 6.9% were aged 45 to 49 (England 6.4%) and 5.0% were 20 to 24 (England 6.0%). It had 535.9 residents per square kilometre, against 433.5 for England.' },
      { q: 'What is LZW compression?', a: 'A lossless method, published by Terry Welch in 1984 and built on work by Abraham Lempel and Jacob Ziv, that builds a dictionary of strings as it reads and replaces each repeat with a short code. The decoder rebuilds the same dictionary, so no dictionary needs to be sent.' },
      { q: 'Why did storing changes shrink the river file so much?', a: 'Because the river usually moves very little in 15 minutes. In 2024 the level at Springfield was unchanged from one reading to the next in 54.0% of steps, so the file of changes is mostly zeros and small numbers, which any compressor handles well.' },
      { q: 'Where does the river data come from?', a: 'From the Environment Agency\'s Hydrology open data service: the 15-minute level record for the River Chelmer at Springfield, all of 2024, downloaded as published.' },
      { q: 'What did Marconi do in Chelmsford?', a: 'The Essex Record Office says he first established his company in a former silk works in Hall Street in 1898 and opened the New Street works in 1912, where Dame Nellie Melba later sang in an experimental broadcast. We have no connection with any Marconi organisation.' },
      { q: 'When are the Chelmsford lessons?', a: 'Families choose a weekday after school, a weekday evening or a weekend, and we settle the exact UK time during the free lesson. Our teachers in India are four and a half hours ahead of Chelmsford in summer and five and a half in winter.' },
      { q: 'Is there a building in Chelmsford we can visit?', a: 'No. We have no Chelmsford centre and no UK premises at all, because every lesson happens live online. A learner needs a computer with sound and a reliable connection, and our contact number is an Indian one.', boiler: true },
      { q: 'What do Chelmsford lessons cost?', a: 'Nothing for the first lesson. After that, a group place is USD 100 a month for two live lessons a week, around eight a month, with five to ten learners; one-to-one teaching on the same schedule is USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'Who will my child learn alongside?', a: 'Five to ten learners at the same stage, matched on level, pace and goals rather than age or where they live. When no group suits the learner\'s week, we offer one-to-one lessons instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'East of England and beyond',
    html: 'Up the road, the <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich page</a> asks whether points on a map are clustered or spread out, and <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge</a> keeps a top ten from decades of weather records without sorting them all. <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> measures entropy, the limit that every lossless compressor is chasing. School stages are laid out in the <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Chelmsford and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-norwich', label: 'Norwich' },
    { href: '/best-coding-class-in-york', label: 'York' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-chm .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-chm .cg-hero h1 { font-weight: 650; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-chm .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-chm .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-chm .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-chm .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.9rem); }
.cg-root.cg-chm .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-chm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-chm .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-chm .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Chelmsford, Census 2021 via Nomis (E07000070): TS001 181,523 usual residents, 179,087 in households, 2,436 in communal establishments; TS007A 9,107 aged 20 to 24 (5.0 percent, England 6.0), 12,147 aged 40 to 44 (6.7 percent, England 6.3), 12,449 aged 45 to 49 (6.9 percent, England 6.4); TS068 32,304 students of 171,642 residents aged 5 and over (18.8 percent, England 20.4); TS006 535.9 usual residents per square kilometre (England 433.5). Essex Record Office blog, Sharing Our History: Marconi in Chelmsford (18 October 2012): Hall Street former silk works 1898; New Street factory begun February 1912, opened June 1912, 70,000 square feet; eight years later the first experimental wireless broadcast, Dame Nellie Melba, received as far as Newfoundland. Historic England NHLE 1141330 (Grade II, listed 6 February 1974) and 1031538 (Grade II, listed 21 November 1997).',
    localProject: 'How small can a year of the River Chelmer get? Environment Agency Hydrology, Springfield level, 15-minute, 2024: 35,136 readings, no gaps, 12,428 flagged Edited, range 0.122 to 0.874 m. Bytes (uncompressed / hand-written LZW 9 to 16 bit / zlib 9): as downloaded 6,114,054 / 313,504 / 127,285; time and level 909,576 / 158,436 / 105,627; level mm 140,544 / 34,933 / 19,398; change mm 78,964 / 11,596 / 11,970. Round trip verified. Zero change 54.0 percent; within 2 mm 93.5 percent. Longest phrases 153 and 70 bytes. 12-bit cap 12,243. Lesson family: LZW dictionary compression and delta encoding; distinct from York entropy/Huffman.',
    requiredMentions: [
      '181,523',
      '179,087',
      '535.9',
      '32,304',
      'Marconi',
      'Melba',
      'Hall Street',
      'LZW',
      '11,596',
      'Chelmer',
      '12,428',
      'Newfoundland'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Chelmsford: 181,523 usual residents; 179,087 in households; 2,436 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000070' },
      { claim: 'Nomis, Census 2021 TS007A: Chelmsford and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000070,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Chelmsford 32,304 students of 171,642 aged 5 and over (18.8 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000070,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Chelmsford 535.9 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000070,E92000001' },
      { claim: 'Environment Agency Hydrology API, River Chelmer at Springfield, 15-minute level readings, 2024.', url: 'https://environment.data.gov.uk/hydrology/id/measures/8dfc9b31-d090-4988-acfc-562ee23bb9d7-level-i-900-m-qualified' },
      { claim: 'Essex Record Office blog, Sharing Our History: Marconi in Chelmsford: Hall Street 1898, New Street 1912, Melba broadcast.', url: 'https://www.essexrecordofficeblog.co.uk/sharing-our-history-marconi-in-chelmsford/' },
      { claim: 'Historic England NHLE list entry 1141330, Marconi\'s First Radio Factory, Grade II, listed 6 February 1974 (read from the NHLE open data layer).', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1141330' },
      { claim: 'Historic England NHLE list entry 1031538, Marconis, Grade II, listed 21 November 1997 (read from the NHLE open data layer).', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1031538' }
    ],
    rejectedClaims: [
      'The Historic England list entry text: the Historic England website returns 403 to scripted requests and was not circumvented; names, grades, dates and grid references come from the NHLE open data layer, and the street is the nearest named road in OS Open Names.',
      'Chelmsford City Council museum pages on Marconi: every candidate path returned 404 and chelmsfordmuseums.co.uk did not resolve; the Essex Record Office blog is used instead.',
      'A claim that LZW beats zlib in general: it wins only on the file of changes and by a small margin; the table shows zlib ahead on the other three.',
      'Treating the Springfield level as water depth: it is stage above the gauge datum, and the page says so.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Historic England, the Essex Record Office, Chelmsford City Council or any Marconi organisation.'
    ]
  }
};
