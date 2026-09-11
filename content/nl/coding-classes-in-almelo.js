'use strict';
// Almelo: textile town of Twente, town rights by 1420 at the latest, Huis
// Almelo in one family since probably the twelfth century. 75,166 residents.
// Spine (modest, per the Phase 5 method): weaving is where machines first
// read patterns from cards; Jacquard's loom of 1804 was controlled by cards
// with holes. A woven pattern is a grid of up and down, which is a bitmap,
// and describing it by its runs is run-length encoding. Whether that makes
// it smaller depends entirely on the pattern: no method shrinks everything.

module.exports = {
  slug: 'coding-classes-in-almelo',
  code: 'amo',
  accent: '#28621A',
  accentRationale: 'Almelo: a deep loom-thread green for the textile town of Twente, placed by the solver more than forty units from every page it links to, with an unlinked province as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Almelo',
    eyebrow: 'Almelo, Overijssel',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Overijssel' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Almelo, Netherlands',
  title: 'Coding Classes in Almelo | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Almelo, ages 6 to 67, from the Binnenstad and De Riet to Aadorp and Bornerbroek. First lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the textile town of Twente, on a page about patterns stored as numbers.',
  twitterDescription: 'Almelo classes for learners aged 6 to 67, live online, starting with a free lesson.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Almelo Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Almelo, Aadorp and Bornerbroek, taught in English.'
  },

  h1: 'Coding classes in Almelo, the weaving town, where a pattern becomes a program',
  capsuleQ: 'What are the best coding classes in Almelo?',
  capsule: 'Almelo counted 75,166 residents on 1 January 2026, the national statistics record. Old documents show it had town rights by 1420 at the latest, Huis Almelo has probably stood since the twelfth century and is still owned by the Van Rechteren Limpurg family, and from the seventeenth century home weaving grew into the textile industry that made Twente. Weaving is where machines first read instructions from cards: Joseph-Marie Jacquard\'s loom of 1804 was controlled by cards punched with holes. A woven pattern is a grid of threads up and down, which is exactly how a computer stores a picture, and describing it by its runs is one of the oldest ways to compress data. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'Look closely at a woven cloth and the pattern is a grid. At every crossing a thread either passes over or under, and a row of the design can be written as a row of choices: over, over, over, under, under. Jacquard\'s loom, invented in 1804, read those choices from cards with holes, one card for each pass of the shuttle, so that a machine could weave a complicated pattern without a weaver deciding every thread. Almelo grew on weaving, first in homes and later in mills, and it is a good place to learn what the loom already knew. A picture on a screen is the same grid, with pixels instead of threads. A row such as over five times, under five times can be written far more briefly by counting the runs, and that trick, run-length encoding, still shrinks images and files today. It also has a limit worth learning early: some patterns get longer, not shorter, when you try to describe them this way.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Almelo.',

  picks: {
    eyebrow: 'Course picks for Almelo',
    h2: 'Four courses for the textile town of Twente',
    intro: 'A child in the Schelfhorst who wants to draw pixel art, a teenager in De Riet building a game with a tiled map, a student in the Binnenstad squeezing a dataset into less space, and an adult in Aadorp who wonders why some files will not compress at all. The first lesson is free for each of them.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Pixel pictures built square by square, where a child learns that every image is a grid of numbers.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Tiled game maps stored as rows of numbers, then shortened by counting repeated tiles.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python that turns a pattern into runs and back again, and checks the copy matches the original.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Encoding and compression in Python, including measuring when a method helps and when it makes data bigger.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Almelo today',
      h2: 'Town rights by 1420, a house from the twelfth century, and the looms of Twente',
      intro: 'Almelo is three woonplaatsen, Almelo, Aadorp and Bornerbroek, divided by the statistics office into 12 wijken and 71 buurten: among them the Binnenstad, the Schelfhorst, Sluitersveld, the Noorderkwartier, the Wierdense Hoek, the Hofkamp, De Riet, the Windmolenbroek and the Ossenkoppelerhoek. The municipality covers 6,718 hectares of land and 223 of water, with a published density of 1,113 residents per square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Rights and a house', p: 'Old documents show that the settlement had town rights in 1420 at the latest. Huis Almelo probably dates from the twelfth century and is still, today, in the hands of the Van Rechteren Limpurg family.' },
          { h3: 'From homes to mills', p: 'In the seventeenth and eighteenth centuries home weaving grew steadily in Almelo, and textile firms such as H. ten Cate Hzn. and Co. later became major employers in the town, according to the encyclopaedia.' },
          { h3: 'Water and football', p: 'The Overijssels Kanaal of 1855 and the Twentekanaal served the town\'s industry. Heracles Almelo has been national champion twice and has played at the highest level since 2006, except for the 2022 to 2023 season.' }
        ] },
        { kind: 'spec', title: 'The Jacquard loom', p: 'The Jacquard loom was invented in 1804 by Joseph-Marie Jacquard. A card selects which of the hooks are caught and which are not, and so which threads are lifted, and originally the machines were controlled by cards with holes in them, according to the encyclopaedia entry for the loom. Almelo\'s own weaving began long before, in homes; the page uses the loom as the clearest picture of a pattern stored as data.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'A pattern as numbers',
      h2: 'Three rows of cloth, written two ways',
      intro: 'Each row below is ten threads wide. In the grid, 1 means the thread passes over and 0 means under. Run-length encoding writes each run as one pair: the value and how many times it repeats.',
      body: [
        { kind: 'table', caption: 'The same rows as a grid and as runs', head: ['Row', 'As a grid of ten', 'As runs', 'Pairs needed'], rows: [
          ['A broad stripe', '1111100000', 'five 1s, then five 0s', '2 pairs for 10 cells'],
          ['A narrow stripe', '1110011100', 'three 1s, two 0s, three 1s, two 0s', '4 pairs for 10 cells'],
          ['A checkerboard', '1010101010', 'one 1, one 0, repeated ten times', '10 pairs for 10 cells']
        ] },
        { kind: 'p', text: 'For the broad stripe, two pairs replace ten cells, a large saving. For the narrow stripe the saving is smaller. For the checkerboard, every run is one cell long, so run-length encoding needs ten pairs, and since each pair holds both a value and a count, the encoded row is larger than the grid it came from. This is not a flaw in one method. It is a rule of all compression: a method shrinks the patterns it was designed for and cannot shrink every possible pattern, because there are more long patterns than short descriptions to go round. That is why a photograph compresses well in one format and badly in another, why a file that is already compressed will not shrink again, and why choosing an encoding means knowing what the data looks like.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Almelo in the national statistics',
      intro: 'The figures published for the municipality, each with its year, followed by the encyclopaedia history and the calculations this page makes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '65,019 in 1995, 72,729 in 2013, 74,776 in 2025 and 75,166 on 1 January 2026. The 2025 figure splits into 37,644 men and 37,132 women.' },
          { h3: 'Ages in 2026', p: '10,821 under fifteen; 9,153 aged fifteen to twenty-five; 18,902 aged twenty-five to forty-five; 20,300 aged forty-five to sixty-five; and 15,990 aged sixty-five and over.' },
          { h3: 'Households', p: 'In 2025 there were 33,859 households, averaging 2.15 people, of which 12,879 consisted of one person and 11,534 included children.' },
          { h3: 'Homes and income', p: '34,709 dwellings in 2025: 19,090 owner-occupied and 15,619 rented, at an estimated average value of 295,000 euro. Average income was 29,900 euro per resident and 36,000 per income recipient in 2024, and 4.2 percent of residents were in poverty.' },
          { h3: 'Schools and students', p: '29 primary establishments teach 6,490 pupils, around 224 each, and 12 secondary establishments teach 5,802, around 484 each. Institutions in the municipality count 6,964 MBO, 1,730 higher professional and 350 university students.' },
          { h3: 'Origin and arithmetic', p: 'In 2025, 52,576 residents were of Dutch origin, 6,409 of European and 15,791 of non-European origin; 62,520 were born in the Netherlands. 75,166 minus 65,019 is 10,147. 6,490 over 29 is about 224 and 5,802 over 12 about 484. The groups on this card and those above were each added up only to check they are complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with the municipality of Almelo, Huis Almelo, any textile firm, Heracles Almelo or any school in Twente, and the page implies none. The statistics are those published for Almelo for the years stated. The town rights, Huis Almelo, home weaving, the textile firms, the canals and the football club come from the encyclopaedia entry for Almelo, and the Jacquard loom from the entry for the loom. The Almelo entry gives 75,158 residents, a different source from the statistics, and the two are not combined.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Weave a picture, then squeeze it',
      intro: 'A learner can build a whole compression experiment from a single woven pattern: store it, encode it, decode it, and measure what was saved.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Store the grid', p: 'Draw a pattern on a grid of zeros and ones, row by row, exactly as a loom card would hold it. This is the uncompressed picture: one number for every crossing.' },
          { h3: '2. Encode and decode', p: 'Turn each row into runs, then write the program that turns runs back into a grid. Compare the rebuilt grid with the original cell by cell; lossless compression must give back exactly what went in.' },
          { h3: '3. Measure honestly', p: 'Count the space used before and after, for several patterns. Keep the results for the patterns that grew as well as the ones that shrank, and say which kinds of pattern the method suits.' }
        ] },
        { kind: 'table', caption: 'Where run-length thinking still turns up', head: ['Where', 'What repeats', 'How it is used', 'When it stops helping'], rows: [
          ['Simple images and icons', 'long runs of one colour', 'runs stored instead of every pixel', 'photographs full of fine detail'],
          ['Fax and scanned text', 'long stretches of white paper', 'runs of white and black encoded briefly', 'pages covered in grey tones'],
          ['Game maps', 'rows of the same tile', 'maps saved as tile and count', 'maps with a different tile at every step'],
          ['Data columns', 'the same value row after row', 'sorted columns stored as value and length', 'columns of unsorted, all-different values'],
          ['A woven cloth', 'threads over or under in long runs', 'a pattern described by its runs', 'a fine checkerboard']
        ] },
        { kind: 'callout', h3: 'Why compression still matters in the age of AI', p: 'Every AI model is trained on data that has been stored, moved and read many times, and nearly all of it is compressed along the way: images, audio, text archives, the models themselves. The ideas underneath are the ones a learner meets with a woven row. A method works because the data has structure, long runs, repeated words, smooth colours, and it fails where the structure is missing. Modern tools also shrink models by storing their numbers with fewer digits, which is a lossy kind of compression, and the same question applies: what has been thrown away, and does it matter for the task? A learner who has watched a checkerboard double in size under an encoding meant for stripes will not be surprised when a clever method disappoints on the wrong data. Almelo\'s looms turned patterns into instructions long before anyone called them data, and the town is a fitting place to see that a pattern, a picture and a program are all, in the end, rows of choices.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for storing and shrinking data',
      intro: 'For images, game maps, datasets, logs and model files. Worked through in the town that grew on weaving.',
      body: [
        { kind: 'table', caption: 'Encoding data with your eyes open', head: ['Rule', 'How', 'Pitfall avoided', 'Result'], rows: [
          ['Know the pattern', 'Look at what repeats before choosing an encoding', 'A method mismatched to the data', 'An encoding that actually helps'],
          ['Round-trip test', 'Decode everything you encode and compare with the original', 'Silent corruption', 'Proven lossless storage'],
          ['Measure both ways', 'Record size before and after for varied samples', 'Assuming compression always saves', 'An honest picture of the gain'],
          ['Name lossy steps', 'Mark any step that throws information away, and what it drops', 'Quality lost without anyone knowing', 'Loss you have chosen'],
          ['Do not compress twice', 'Leave already-compressed data alone', 'Time spent making files larger', 'Effort where it pays']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A pixel picture drawn on squared paper and then described aloud in runs, three black, two white. The child rebuilds a friend\'s picture from the runs alone.' },
          { h3: 'For teenagers', p: 'A Python program that run-length encodes and decodes small images, tested on stripes, checks and noise. The teenager charts which patterns shrink and which grow.' },
          { h3: 'For adults', p: 'A folder of work files compressed and measured by type. Adults are often surprised which files shrink by nine tenths and which barely change.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia entries for Almelo and for the Jacquard loom as its setting, and standard computing knowledge for the rest. It says nothing about how any Almelo mill made its cloth.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a pixel picture on squared paper to measuring compression honestly',
    intro: 'The starting level is chosen in the free lesson by watching the learner at a real task. Age alone does not choose it, and neither does which wijk they live in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Pictures as grids', p: 'Children draw in squares and describe the picture by its runs.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Encode, decode', p: 'Learners write both directions and check the copy is exact.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Stripes and checks', p: 'Teenagers find which patterns an encoding shrinks and which it grows.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Lossy or not', p: 'Adults decide what a compression step may throw away, and check it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model is a very large pattern stored as numbers. Why should a teenager in Almelo learn how patterns are stored?',
    intro: 'Because the town\'s looms show that a pattern, a picture and a program are all rows of choices.',
    p1: 'Behind every AI image generator, speech tool and language model are enormous grids of numbers, and behind every dataset they learn from are files that were encoded and compressed to be stored at all. People who use these tools rarely think about any of it, until a file will not shrink, a picture comes back blurred, or a smaller version of a model gives worse answers than the original. Each of those surprises has the same root: an encoding suits some patterns and not others, and lossy steps throw something away.',
    p2: 'A learner who has woven a checkerboard into runs and watched it grow understands, in a small and memorable way, that no method compresses everything, and that the right choice depends on what the data looks like. That judgement, knowing what structure a dataset has and what can safely be discarded, sits with the person building the system. A model cannot make it about its own inputs. People have to.',
    closer: 'So the case for a child in Almelo learning to code in 2026 is not the town\'s textile past for its own sake. It is that someone who understands how patterns become numbers will be needed wherever AI systems are built from data that has to be stored, moved and shrunk.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes for Almelo, Aadorp and Bornerbroek',
    intro: 'The municipality reaches from the Binnenstad out to the villages of Aadorp and Bornerbroek, and a lesson taken from home is the same lesson in each of them.',
    cells: [
      { h3: 'At home, wherever home is', p: 'A learner in Bornerbroek and a learner in the Hofkamp join at the same minute from their own homes. No evening drive into town and no wait at a door afterwards.' },
      { h3: 'School words stay in Dutch', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze are kept as Twente schools write them, while the explanation around them is in English.' },
      { h3: 'A proper first lesson', p: 'The free lesson is a real one on a real task. At the end the teacher suggests a level, a course and a weekly time, and asks for no payment details.' },
      { h3: 'A group at one stage', p: 'Five to ten learners who have reached the same point. Almelo has 10,821 residents under fifteen, and five who match on subject, level and hour are unusual in one town, so a group may bring in learners from other countries.' },
      { h3: 'Regio Noord breaks', p: 'Two lessons a week, about eight each month, at a fixed time, stopping for the regio Noord school holidays that Overijssel follows.' },
      { h3: 'Teachers a few hours ahead', p: 'The teachers are in India, three and a half hours ahead of Almelo in summer and four and a half in winter, so late-afternoon, evening and weekend-morning lessons all fit.' }
    ],
    spec: { title: 'Forty-one schools, three woonplaatsen, and one group online', p: 'Almelo has 29 primary establishments teaching 6,490 pupils and 12 secondary establishments teaching 5,802. Five learners matched on subject, stage and hour are far easier to find across every age from 6 to 67 and many countries than inside one municipality.' }
  },

  fees: {
    h2: 'What Almelo families pay',
    intro: 'All the prices, before anything is booked.',
    first: 'One real lesson on a real task, ending with a level and a course that suits it.',
    group: 'A month of lessons, usually eight, in a group of five to ten at one level.',
    private: 'A month of lessons, usually eight, taught to one learner alone.',
    closer: 'The fee is set in dollars and is the same for every country, with no euro list to weigh against it, so a family in Aadorp pays exactly what a family in De Riet pays. Nothing is charged until the free lesson has fixed a course and a time, and payment is then arranged through WhatsApp. The pricing page explains pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, printed as written',

  book: {
    h2: 'What can the learner already do?',
    intro: 'The first task might be a pixel picture described by its runs, a small encoder and decoder that must give back the exact original, or a test of which patterns an encoding grows.',
    success: 'Thank you. Your Almelo class request has been sent.'
  },

  faq: {
    h2: 'Almelo coding class questions',
    intro: 'The town, its weaving, its figures, and the lessons.',
    items: [
      { q: 'What does the municipality of Almelo include?', a: 'Three woonplaatsen, Almelo, Aadorp and Bornerbroek, divided by the statistics office into 12 wijken and 71 buurten, among them the Binnenstad, the Schelfhorst, Sluitersveld, De Riet and the Windmolenbroek.' },
      { q: 'How many people live in Almelo?', a: 'The national count was 75,166 on 1 January 2026, in 33,859 households in 2025. In 1995 it was 65,019.' },
      { q: 'How old is Almelo?', a: 'Old documents show the settlement had town rights in 1420 at the latest, according to the encyclopaedia, and Huis Almelo probably dates from the twelfth century. The house is still owned by the Van Rechteren Limpurg family.' },
      { q: 'Why is Almelo linked with textiles?', a: 'Home weaving grew in Almelo in the seventeenth and eighteenth centuries, and textile firms such as H. ten Cate Hzn. and Co. later became large employers, the encyclopaedia records. The Overijssels Kanaal of 1855 and the Twentekanaal served the town\'s industry.' },
      { q: 'What was the Jacquard loom?', a: 'A loom invented in 1804 by Joseph-Marie Jacquard, in which cards with holes selected which threads were lifted, so that a pattern could be woven from a set of cards, according to the encyclopaedia entry for the loom.' },
      { q: 'How many schools are there in Almelo?', a: 'The statistics count 29 primary establishments teaching 6,490 pupils and 12 secondary establishments teaching 5,802, together with 6,964 MBO, 1,730 higher professional and 350 university students at institutions in the municipality. No school is rated on this page.' },
      { q: 'Which language are the lessons in, and at what times?', a: 'English, with Dutch school terms such as brugklas, havo and vwo left as they are. The teachers work from India, three and a half hours ahead of Almelo in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to arrange. The time is agreed in the free lesson, and lessons pause for the regio Noord holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Almelo?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Almelo coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Twente and beyond',
    h2: 'Across Twente, and out to the rest of Overijssel',
    html: 'East along the Twentekanaal, <a class="cg-inline-link" href="/coding-classes-in-hengelo">coding classes in Hengelo</a> covers the metal town next door, and <a class="cg-inline-link" href="/coding-classes-in-enschede">Enschede</a>, the largest city of the province, has its own page. To the west lie <a class="cg-inline-link" href="/coding-classes-in-deventer">Deventer</a> and the capital <a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a>, and all 25 municipalities of the province are listed on <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Almelo, Overijssel and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-enschede', label: 'Enschede' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-amo .cg-hero-grid { align-items: center; gap: clamp(1.15rem, 3vw, 2.4rem); }
.cg-root.cg-amo .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-amo .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-amo .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-amo .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.015em; }
.cg-root.cg-amo .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.6rem); }
.cg-root.cg-amo .cg-card { border-radius: 4px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-amo .cg-table caption { letter-spacing: 0.05em; font-weight: 700; }
.cg-root.cg-amo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-amo .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-amo .cg-ladder-col { border-left: 2px solid var(--cg-accent-soft); padding-left: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Almelo, Overijssel: 75,166 residents (statistics, 1 January 2026), 74,776 (2025), 72,729 (2013), 65,019 (1995); 37,644 men and 37,132 women (2025); ages (2026) 10,821 under fifteen, 9,153 fifteen to twenty-five, 18,902 twenty-five to forty-five, 20,300 forty-five to sixty-five, 15,990 sixty-five or over; 33,859 households (2025) averaging 2.15, 12,879 one-person, 11,534 with children; 6,941 hectares, 6,718 land, 223 water, published density 1,113; 34,709 dwellings (2025), 19,090 owner-occupied at 55 percent, 15,619 rented at 45 percent; estimated average value 295,000 euro; income 29,900 euro per resident and 36,000 per recipient (2024); 4.2 percent in poverty; origin (2025) 52,576 Dutch, 6,409 European, 15,791 non-European, 62,520 born in the Netherlands; 3 woonplaatsen, 12 wijken (Binnenstad, Schelfhorst, Sluitersveld, Noorderkwartier, Aadorp, Wierdense Hoek, Hofkamp, Nieuwstraat-Kwartier, Ossenkoppelerhoek, De Riet, Windmolenbroek, Bornerbroek), 71 buurten; 29 primary establishments with 6,490 pupils, 12 secondary with 5,802; 6,964 MBO, 1,730 HBO and 350 WO students at institutions. Encyclopaedia (Almelo): old documents show the settlement had town rights in 1420 at the latest; Huis Almelo probably exists since the twelfth century and is still owned by the Van Rechteren Limpurg family; home weaving rose in the seventeenth and eighteenth centuries; textile firms including H. ten Cate Hzn. and Co.; the Overijssels Kanaal (1855) and the Twentekanaal; Heracles Almelo twice national champion, at the highest level since 2006 except 2022/2023; infobox 75,158 and 69.41 square kilometres, not combined with the statistics. Encyclopaedia (Jacquard loom): invented in 1804 by Joseph-Marie Jacquard; a card selects the hooks that are or are not caught; originally controlled by cards with holes. Regio Noord holidays. The city page teaches patterns as data and run-length encoding.',
    localProject: 'A pattern is data, and no encoding shrinks every pattern. Almelo grew on weaving, and the Jacquard loom of 1804 read its pattern from cards with holes; a woven row is a grid of over and under, which is a bitmap, and describing it by runs is run-length encoding. A worked table of three ten-thread rows shows a broad stripe needing 2 pairs, a narrow stripe 4, and a checkerboard 10 pairs for 10 cells, larger than the grid because each pair holds a value and a count; the general rule is that a method shrinks the patterns it suits and cannot shrink all, so already-compressed data will not shrink again and lossy steps must be named. The programming form is encoding and compression: icons, fax, game maps, sorted data columns, and model files stored with fewer digits. The defences are looking at what repeats before choosing, round-trip decoding tests, measuring size both ways across varied samples, marking lossy steps, and not compressing twice. Chosen after a case-sensitive check found no page using Jacquard, punch cards, bitmaps, weaving or run-length. The page uses the loom only as an image and says nothing about how Almelo mills worked. Distinct from Schiedam, which concerns a model copied into a smaller model and evaluated against truth, and from Hilversum, which concerns whether a stored format can still be read.',
    requiredMentions: [
      '65,019',
      '72,729',
      '33,859',
      '12,879',
      '11,534',
      '34,709',
      '19,090',
      '15,619',
      '6,490',
      '5,802',
      '15,990',
      'Rechteren',
      'Jacquard',
      'Bornerbroek'
    ],
    sources: [
      { claim: 'Gemeente Almelo: 75,166 inwoners (2026), 74,776 (2025), 72,729 (2013), 65,019 (1995); mannen 37,644, vrouwen 37,132 (2025); 33,859 huishoudens, 12,879 eenpersoons (38 percent), 11,534 met kinderen (34 percent), gemiddeld 2.15 (2025); ages 0-15 10,821, 15-25 9,153, 25-45 18,902, 45-65 20,300, 65+ 15,990 (2026); 6,941 hectare, land 6,718, water 223; bevolkingsdichtheid 1,113; woningvoorraad 34,709, koop 19,090 (55 percent), huur 15,619 (45 percent) (2025); gemiddelde WOZ 295,000 euro; gemiddeld inkomen per inwoner 29,900 and per inkomensontvanger 36,000 euro (2024); personen in armoede 4.2 percent; basisonderwijs 29 vestigingen 6,490 leerlingen, voortgezet onderwijs 12 vestigingen 5,802 leerlingen, MBO 6,964, HBO 1,730, WO 350; herkomst Nederland 52,576, Europa 6,409, buiten Europa 15,791, geboren in Nederland 62,520 (2025); 3 woonplaatsen, 12 wijken (Binnenstad, Schelfhorst, Sluitersveld, Noorderkwartier, Aadorp, Wierdense Hoek, Hofkamp, Nieuwstraat-Kwartier, Ossenkoppelerhoek, De Riet, Windmolenbroek, Bornerbroek), 71 buurten.', url: 'https://allecijfers.nl/gemeente/almelo/' },
      { claim: 'Almelo (encyclopaedia): Uit oude documenten blijkt dat de nederzetting in ieder geval in 1420 al stadsrechten had. In de 17e en 18e eeuw kwam de huisweverij steeds meer op. H. ten Cate Hzn. en Co. among the textile firms. Huis Almelo bestaat waarschijnlijk al sinds de 12e eeuw en is tot op de dag van vandaag in handen van de familie Van Rechteren Limpurg. Het Twentekanaal en het Overijssels Kanaal (in 1855). Heracles Almelo: de club werd tweemaal landskampioen en speelt sinds 2006 met uitzondering van het seizoen 2022/2023 op het hoogste niveau in Nederland. Infobox: 75.158 inwoners, 69,41 km2.', url: 'https://nl.wikipedia.org/wiki/Almelo' },
      { claim: 'Jacquardweefgetouw (encyclopaedia): Dit apparaat werd in 1804 uitgevonden door Joseph-Marie Jacquard. Door een kaart worden de platines geselecteerd en wel of niet achter het mes gehaakt. Oorspronkelijk werden de machines via kaarten met gaatjes bestuurd.', url: 'https://nl.wikipedia.org/wiki/Jacquardweefgetouw' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Jacquard looms were used in Almelo, or how any Almelo mill wove. The sources read do not say.',
      'Any claim that the Jacquard cards led directly to computers. The loom entry read does not make that link, so the page states only how the loom was controlled.',
      'Employee numbers for any textile firm. The figure in the source was not clearly labelled.',
      'The years of Heracles Almelo\'s two championships. Not in the sentence read.',
      'Any comparison of the encyclopaedia figure of 75,158 with the statistics figure of 75,166. Two sources that disagree is the Breda argument.',
      'Anything the Hengelo, Enschede, Deventer, Zwolle and Overijssel pages own, including their figures and arguments.'
    ]
  }
};
