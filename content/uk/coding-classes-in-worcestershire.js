'use strict';
// Worcestershire (cg- county index, UK cluster Phase 7, row 255). Worcestershire County Council over six districts:
// Bromsgrove, Malvern Hills, Redditch, Worcester, Wychavon, Wyre Forest. Spine: how do you write a year on a teacup?
// Source: Museum of Royal Worcester, "Royal Worcester factory marks" (read raw 26 September 2026): company formed 1862;
// "the number 51 in the centre that refers to the year 1751 when the Worcester Porcelain Company was founded by Dr John
// Wall"; letters from 1867 (A = 1867 ... E = 1871, G = 1872 ... Z = 1888, O = 1889, a = 1890); "From 1891 pieces were
// coded with a system of dots and/or symbols"; 1892 one dot ... "until 1915 when 24 dots are arranged around the
// standard printed mark"; 1916 star, star plus dots to 1927 (11 dots); 1928 oblong, 1929 diamond, 1930 division mark,
// 1931 two circles, 1932 three circles, then dots to 1941 (9 dots); "Between 1942 and 1948 no date code was used";
// 1949 V, 1950 W, W with one to six dots 1951 to 1956; from 1990 a lithographer number with a suffix, "39-0 = 1990",
// "39-00 = 2000" to 2006. Museum address Severn Street, Worcester WR1 2ND; porcelain made in the city "from 1751-2008".
// Museum of Carpet (Kidderminster) returned 429 (logged, not retried).
// Our decoder (scratchpad wor/marks.py): 100 coded years (1867 to 1941, 1949 to 1956, 1990 to 2006), no two years share
// a code; F, J and Q unused in 1867 to 1889 and O placed last; 1892 to 1915 need 300 dots in total and up to 24 on one
// mark, while a 5-position binary pattern would need at most 5 and 54 in total; 1991 (39-1) and 2001 (39-01) differ
// only in digit count.
// Lesson family: number representation and encoding (unary, symbol resets as carries, lookup tables with gaps, digit
// length as information); screened (base conversion appears on several pages as binary, not this).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 603,676); ONS built-up areas checked against
// our OA sums (Birmingham area reaches into Bromsgrove, about 10,000 residents by our count; Great Malvern straddles
// slightly). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WORCESTERSHIRE', blurb: 'Worcester, Redditch, Kidderminster and the Malverns, and a porcelain lesson: decode the dots, stars and letters that date Royal Worcester.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-worcestershire',
  code: 'wcs',
  accent: '#3E438A',
  accentRationale: 'Worcestershire: a Worcester porcelain cobalt from the solver (7.13:1 on the darkest paper tint), brighter and more violet than the Staffordshire and Bedfordshire blues',
  pageType: 'governorate',
  place: {
    name: 'Worcestershire',
    eyebrow: 'Worcestershire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Worcester', href: '/best-coding-class-in-worcester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Worcestershire',
  title: 'Coding Classes in Worcestershire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Worcestershire, from Worcester, Redditch and Kidderminster to Bromsgrove, Malvern, Evesham and Droitwich Spa.',
  ogDescription: 'Coding classes for all of Worcestershire, and a Royal Worcester project: turn a century of date marks into a Python decoder and see how dots, stars and letters count the years.',
  twitterDescription: 'Worcestershire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Worcestershire',
    description: 'Ability-placed online coding, Python, computer science and mathematics for children, teenagers and adults across Worcestershire, taught live in English.'
  },

  h1: 'Coding classes in Worcestershire',
  capsuleQ: 'What are the best coding classes in Worcestershire?',
  capsule: 'Worcestershire is governed by a county council over six district councils, and our total of their six 2021 Census counts is 603,676 people. Worcester is the largest town, then Redditch, Kidderminster, Bromsgrove and Great Malvern. We teach every class live over video from India, and each learner joins the group that fits their level rather than their age. Coding, Python, computer science and maths are open to learners from 6 to 67, taught privately or in groups of five to ten. The Worcestershire project comes from the Museum of Royal Worcester and the marks on the bottom of its porcelain. Lesson one is free; from lesson two it is USD 100 monthly for a group or USD 150 monthly for one-to-one.',
  lead: 'Turn over a piece of Royal Worcester porcelain and the factory mark often tells you when it was made, in a code that changed many times. The Museum of Royal Worcester explains it: letters for the years from 1867, then one dot for 1892, two for 1893, and so on until 24 dots crowd round the mark in 1915, then a star, new shapes, more dots, letters again, and finally short numbers. It is a real, working system for writing numbers, invented piece by piece by people solving a practical problem. This page\'s project turns it into a Python decoder and uses it to explore the ideas every programmer meets when choosing how to represent information.',
  wa: 'Hello Modern Age Coders, we are in Worcestershire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Worcestershire',
    h2: 'Where Worcestershire learners begin',
    intro: 'A six-year-old in Evesham who loves codes and secret messages, a Year 8 in Bromsgrove learning binary, a Year 10 in Worcester taking GCSE Computer Science, and an adult in Kidderminster starting Python. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, with codes, patterns and secret messages.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including number bases, binary and patterns in sequences.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'GCSE Computer Science for AQA, OCR and Edexcel, with the Python and problem solving the exams test.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, from first lines to projects with real data.' }
    ]
  },

  sections: [
    {
      id: 'worcestershire', tint: '', eyebrow: 'Worcestershire in figures',
      h2: '603,676 people across six districts',
      intro: 'District counts are 2021 Census figures on Nomis; the total is our own addition. Towns are ONS built-up areas, which we checked against our sum of census output areas.',
      body: [
        { kind: 'table', caption: 'Worcestershire built-up areas with at least 8,000 residents, 2021 Census', head: ['Town', 'Residents'], rows: [
          ['Worcester', '105,465'],
          ['Redditch', '81,635'],
          ['Kidderminster', '57,560'],
          ['Bromsgrove', '34,755'],
          ['Great Malvern', '33,185'],
          ['Evesham', '28,250'],
          ['Droitwich Spa', '26,420'],
          ['Stourport-on-Severn', '20,305'],
          ['Catshill', '10,170'],
          ['Bewdley', '8,280'],
          ['Pershore', '8,210']
        ] },
        { kind: 'p', text: 'Wychavon is the largest district at 132,492 and Malvern Hills the smallest at 79,486. The ONS Worcester area reaches from the city into Wychavon, and Great Malvern has a few hundred residents over the county edge. More strikingly, by our count about 10,000 people in Bromsgrove district live on the edge of the Birmingham built-up area, which is why Birmingham is left out of the table even though part of it lies in Worcestershire. Holiday dates are fixed by Worcestershire County Council and by academy trusts. We have not read them, so families simply tell us theirs.' },
        { kind: 'callout', h3: 'Worcester has its own page', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a> page is about finding the shortest route. <a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a> lies over the Malverns to the west.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Worcestershire project',
      h2: 'Decoding a century of porcelain marks',
      intro: 'Letters with gaps, dots that pile up, stars that reset the count, and two numbers that differ only in length.',
      body: [
        { kind: 'p', text: 'The learner copies the museum\'s rules into Python as a dictionary from year to mark, then builds the reverse dictionary from mark to year. The first test is whether any two years share a mark; across the 100 years the page codes, from 1867 to 1941, 1949 to 1956 and 1990 to 2006, none do. The second test is to look for surprises, and there are several.' },
        { kind: 'table', caption: 'What the museum\'s date-mark rules teach about representing numbers', head: ['Years', 'Mark', 'The coding idea'], rows: [
          ['1867 to 1890', 'A letter: A, B, C, D, E, G ... Z, then O, then a', 'A lookup table: F, J and Q are never used, and O comes last, so you cannot just count letters'],
          ['1892 to 1915', 'One dot for 1892, up to 24 dots for 1915', 'Unary counting: simple, but it needs one mark per year and 300 dots over 24 years'],
          ['1916 to 1927', 'A star, then a star with 1 to 11 dots', 'A reset, like carrying into a new column: the star stands for many dots at once'],
          ['1928 to 1941', 'New shapes, then three circles with 1 to 9 dots', 'Another reset with a new symbol when the dots grow too many'],
          ['1942 to 1948', 'No date code', 'A gap: some years simply cannot be decoded'],
          ['1990 to 2006', '39-0 for 1990, 39-00 for 2000', 'Length carries meaning: 39-1 is 1991 and 39-01 is 2001']
        ] },
        { kind: 'p', text: 'The dots are the most instructive part. Adding a dot each year is easy for a worker to apply and to check, but it grows without limit: by 1915 the mark carried 24 dots. A binary pattern, where each of five fixed positions is either dotted or blank, could show any year up to 31 with at most five dots, and would have used 54 dots in total over those 24 years instead of 300. The factory\'s answer was different but clever: when the dots grew too many, it introduced a new symbol and started counting again. That is the same idea as a digit carrying into the next column.' },
        { kind: 'p', text: 'The last row is a small lesson for the computer age. After 1990 a single digit gave the year within the decade, so 1991 and 2001 would both be "1". The solution was to write 2001 as "01": the number of digits carries the information. Programmers who stored years as just two digits met a similar kind of problem around the year 2000.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 7 to 11', p: 'Invent a dot code for your own birthdays, then find out how many dots you would need for your age next year and in ten years.' },
          { h3: 'Ages 11 to 15', p: 'Write the year-to-mark and mark-to-year dictionaries in Python and test that every year decodes back to itself.' },
          { h3: 'Ages 15 and up', p: 'Compare unary, the factory\'s resets and binary for the same years, count symbols, and design a better mark that stays short forever.' }
        ] },
        { kind: 'callout', h3: 'The museum\'s rules and our code', p: 'Every rule and date on this page comes from the Museum of Royal Worcester\'s factory marks page, which also notes that some later marks show the year a design was introduced. The decoder, the counts and the binary comparison are ours. Anyone dating a real piece should use the museum\'s guidance and experts, not our table.' }
      ]
    },
    {
      id: 'porcelain', tint: 'deep', eyebrow: 'Why Worcester',
      h2: 'Porcelain from 1751, and a mark full of numbers',
      intro: 'The Worcestershire link, from the museum on the old factory site.',
      body: [
        { kind: 'table', caption: 'Royal Worcester, as the Museum of Royal Worcester describes it', head: ['Point', 'The museum says'], rows: [
          ['Founding', 'The Worcester Porcelain Company was founded in 1751 by Dr John Wall.'],
          ['The number 51', 'The standard printed mark has 51 in the centre, for 1751.'],
          ['The company', 'The Worcester Royal Porcelain Company was formed in 1862.'],
          ['Porcelain in the city', 'Made in Worcester from 1751 to 2008.'],
          ['The museum', 'Severn Street, Worcester WR1 2ND.']
        ] },
        { kind: 'p', text: 'Choosing how to represent information is one of the first decisions in any program: numbers as text or as binary, dates in one format or another, colours as names or as codes. The Royal Worcester marks show real people making those choices over more than a century, meeting the same problems of growth, gaps and ambiguity that programmers meet today. A Worcestershire student who has decoded them has learned why representation matters before writing a single complicated line.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Museum of Royal Worcester, Worcestershire County Council or any company that made or sells Royal Worcester. The museum\'s rules are its own; our decoder and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a> has its own page; <a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a> is west, <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a> south, <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> east and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a> north.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From secret codes to data representation',
    intro: 'The free lesson settles the first step. Age suggests; skill decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Codes and patterns', p: 'Block coding with secret codes, repeating patterns and simple counting games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 10 to 13', h3: 'Binary and bases', p: 'Python and maths with binary numbers, number bases and dictionaries.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'How computers store things', p: 'GCSE Computer Science topics such as data representation, alongside full Python.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Data done right', p: 'Python and data skills for adults, including dates, formats and clean records.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and encodings',
    h2: 'An AI can date a teacup mark. Would it notice the years with no code at all?',
    intro: 'Real encodings have gaps and exceptions, and confident answers can skip over them.',
    p1: 'Describe a Royal Worcester mark to an assistant and it may give you a year straight away. The museum\'s rules show why that can go wrong: letters skip F, J and Q, O comes out of order, 1942 to 1948 have no code at all, and later marks may show a design\'s launch year rather than when the piece was made. A tidy-sounding answer can hide every one of those traps.',
    p2: 'A Worcestershire student who has coded the rules and tested every year knows to ask what the encoding allows and what it cannot tell you. The same question matters for AI systems themselves, which turn words, images and sounds into numbers and can lose information along the way.',
    closer: 'So a young person in Worcestershire should learn to code in 2026 to understand how information is represented before trusting what a machine reads from it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From the Malverns to the Vale of Evesham, online',
    intro: 'Worcestershire mixes towns and wide farmland, and a weekly class in the right place and at the right level can be a long way off. Online lessons solve it.',
    cells: [
      { h3: 'At home, anywhere', p: 'A house in Droitwich, a flat in Redditch, a farmhouse near Pershore. The learner codes while the teacher follows the shared screen.' },
      { h3: 'The school words', p: 'Whether it is a Key Stage 3 project or a GCSE practice paper, teachers use the terms Worcestershire pupils hear at school, in English.' },
      { h3: 'Start free', p: 'The first lesson is real teaching, not a sales call, and ends with a plain suggestion of level and course. You give no card details.' },
      { h3: 'A group at your level', p: 'Five to ten learners at the same stage, wherever in the world they join from.' },
      { h3: 'Breaks for holidays', p: 'Two lessons a week is usual, with pauses for your school\'s own holidays.' },
      { h3: 'UK time, fixed', p: 'We give your slot in UK time and keep it steady through the clock changes; the teacher, several hours ahead on India time, adapts.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Five learners at one stage free on the same evening are hard to find in any one Worcestershire town. Level-based groups let a learner in Bewdley or Catshill join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Worcestershire',
    intro: 'Stourport or Malvern, the fee is identical, and it is the fee in every country we teach except India.',
    first: 'A complete lesson with real work, then a suggested level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month, one-to-one.',
    closer: 'All fees are in US dollars, with no pound prices. There is no charge until the free lesson has agreed a course and a weekly time; the pricing page explains pauses, missed lessons and changing between group and private.'
  },

  reviewsH2: 'What families say, on Google',

  book: {
    h2: 'Book a free Worcestershire lesson',
    intro: 'Let us know how old the learner is, or which school year, and what gets them excited. A first lesson could be a Scratch code game, a Python binary counter, or the porcelain decoder on this page.',
    success: 'Thank you. Your Worcestershire request is with us.'
  },

  faq: {
    h2: 'Worcestershire questions',
    intro: 'The county, the porcelain project and the details.',
    items: [
      { q: 'How many people live in Worcestershire?', a: '603,676 usual residents in the 2021 Census. The six district figures are the ONS\'s, published on Nomis, and the total is our addition.' },
      { q: 'What are the largest towns in Worcestershire?', a: 'By ONS built-up area: Worcester 105,465, Redditch 81,635, Kidderminster 57,560, Bromsgrove 34,755 and Great Malvern 33,185.' },
      { q: 'What is the Royal Worcester project?', a: 'Learners turn the Museum of Royal Worcester\'s date-mark rules into a Python decoder, check that 100 coded years never clash, and study the letters, dots, stars and digits as ways of representing numbers.' },
      { q: 'How were Royal Worcester pieces dated?', a: 'According to the museum, letters marked the years from 1867, dots were added one per year from 1892 up to 24 in 1915, then stars, shapes and more dots followed, with no date code from 1942 to 1948 and numeric suffixes from 1990.' },
      { q: 'Why compare the dots with binary?', a: 'Adding a dot each year is unary counting and grows without limit. Five fixed positions used as binary could show any year up to 31 with at most five dots, which shows why positional systems are so efficient.' },
      { q: 'Is there a Worcestershire classroom?', a: 'No. Classes run live on video, so a learner in Tenbury is as near to class as one in Worcester.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67. Young children start with blocks, Python usually begins around eight to ten, teenagers take GCSE Computer Science and advanced Python, and adults learn Python and data. Where each person starts is agreed in the free lesson.' },
      { q: 'Do you teach GCSE Computer Science?', a: 'Yes, for AQA, OCR and Edexcel, including data representation and Python. We support learning; we do not promise grades.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. Once you decide to carry on, you pay USD 100 per month for group lessons or USD 150 per month for private ones; joining is free.' },
      { q: 'Do you pause for Worcestershire school holidays?', a: 'Yes, if you wish. Worcestershire County Council and academy trusts publish their dates; share yours and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Worcestershire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-worcester">Worcester</a>, then <a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a>, <a class="cg-inline-link" href="/coding-classes-in-gloucestershire">Gloucestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Worcestershire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-worcester', label: 'Worcester' },
    { href: '/coding-classes-in-herefordshire', label: 'Herefordshire' }
  ],

  personalityCss: `
.cg-root.cg-wcs .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wcs .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-wcs .cg-capsule { border-left: 4px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-wcs .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wcs .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-wcs .cg-table caption { font-style: italic; font-weight: 500; text-align: left; }
.cg-root.cg-wcs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wcs .cg-table th { letter-spacing: 0.05em; font-weight: 700; }
.cg-root.cg-wcs .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-wcs .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Worcestershire: Worcestershire County Council over Bromsgrove, Malvern Hills, Redditch, Worcester, Wychavon, Wyre Forest. ONS Census 2021 TS001 via Nomis: Wychavon 132,492; Worcester 103,872; Wyre Forest 101,607; Bromsgrove 99,183; Redditch 87,036; Malvern Hills 79,486; our sum 603,676. ONS built-up areas (published; agree with our OA sums except Great Malvern 33,185 with 32,935 inside): Worcester 105,465 (Worcester, Wychavon); Redditch 81,635; Kidderminster 57,560; Bromsgrove 34,755; Great Malvern 33,185; Evesham 28,250; Droitwich Spa 26,420; Stourport-on-Severn 20,305; Catshill 10,170; Bewdley 8,280; Pershore 8,210. Birmingham BUA 1,121,375 with 10,068 inside Bromsgrove (excluded). Museum of Royal Worcester factory marks: "The Worcester Royal Porcelain Co Ltd was formed in 1862"; "the number 51 in the centre that refers to the year 1751 when the Worcester Porcelain Company was founded by Dr John Wall"; "From 1867 a letter system was also used"; letter list A = 1867 ... Z = 1888, O = 1889, a = 1890; "1892 = One dot"; "until 1915 when 24 dots are arranged around the standard printed mark"; "1916 = * below the mark"; 1927 11 dots; 1928 oblong to 1932 three circles; 1941 nine dots; "Between 1942 and 1948 no date code was used"; 1949 V; 1950 W; 1951 to 1956 W with dots; "39-0 = 1990", "39-00 = 2000" to 2006; "The date included is the year of introduction of the design, not the date of manufacture" (for later tableware); Severn Street, Worcester WR1 2ND; porcelain "from 1751-2008".',
    localProject: 'Encoding study of Royal Worcester date marks: year-to-mark and mark-to-year dictionaries over 100 coded years (1867 to 1941, 1949 to 1956, 1990 to 2006), 0 clashes; letters skip F, J, Q and put O last; unary dots 1892 to 1915 total 300, max 24 (1915); 5-position binary total 54, max 5; resets by new symbols (star 1916, shapes 1928 to 1932) as carries; 1942 to 1948 undecodable; 1991 "39-1" vs 2001 "39-01" by digit count. Page tells readers to use museum guidance for real dating. AI angle: encodings with gaps and exceptions. Lesson family: number representation (unary, resets as carries, lookup tables with gaps, length as information).',
    requiredMentions: [
      '603,676',
      'Museum of Royal Worcester',
      'Dr John Wall',
      'WR1 2ND',
      '24 dots',
      'Kidderminster',
      'Redditch',
      'Droitwich Spa',
      'Stourport-on-Severn',
      'Catshill',
      'Bewdley'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the six Worcestershire districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Worcestershire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Museum of Royal Worcester: Royal Worcester factory marks and date codes.', url: 'https://www.museumofroyalworcester.org/discover-learn/royal-worcester-factory-marks/' }
    ],
    rejectedClaims: [
      'Museum of Carpet facts about Kidderminster weaving: the site returned 429 and was not retried, so none are used.',
      'Date codes for 1957 to 1989: the page gives no year-by-year rule for this period, so the decoder leaves them out.',
      'Valuation or authentication of any piece: not offered; the page points to the museum and experts.',
      'Elgar and Malvern radar history: not researched for this page, not mentioned.',
      'Worcestershire school term dates: none read.',
      'Named Worcestershire schools: none named.'
    ]
  }
};
