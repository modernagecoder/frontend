'use strict';
// Stirling (cg- city page, UK cluster Phase 4, Scotland). Spine: how close is Stirling's formula to the real n!?
// Exact factorials (Python integers) against Stirling's formula, ln n! ~ n ln n - n + 0.5 ln(2 pi n), with and without
// the 1/(12n) correction (read 23 September 2026; scratchpad stl/st.py). Relative error of the plain formula: n 1 7.79
// percent, 2 4.05, 5 1.65, 10 0.83, 20 0.416, 50 0.167, 100 0.0833, 1,000 0.00833, 10,000 0.000833, 92,600 0.00009. With
// the 1/(12n) term: n 10 0.000277 percent, 100 0.000000278, 1,000 0.000000000273 (next term 1/(360 n^3)); beyond that the
// remaining error is below double-precision resolution. 92,600! exactly: 419,696 digits, leading digits 245888560428,
// 23,147 trailing zeros (count of factors of 5); Stirling log10 419695.3907 gives the same digit count and leading digits
// 2.45888339. 90,247! has 408,023 digits. 170 is the largest n whose factorial fits in a double (about 1.8 x 10^308).
// MacTutor History of Mathematics, James Stirling (read raw): born May 1692 at Garden, about 20 km west of the town of
// Stirling; died 5 December 1770, Edinburgh; Methodus Differentialis 1730; 'The asymptotic formula for n! now known as
// Stirling's formula ... appears as Example 2 to Proposition 28 of the Methodus Differentialis'; he wrote to De Moivre
// about errors in a table of logarithms of factorials, and De Moivre extended his results using Stirling's ideas.
// Lesson family: asymptotic approximation, Stirling's formula, logarithms of huge numbers, floating-point limits.
// Screened 23 September 2026: Stirling's approximation, Stirling's formula and MacTutor 0 hits in src/pages and content/uk.
// Heritage from Historic Environment Scotland (portal, read raw): LB41083 Church of the Holy Rude, St John Street,
// Category A, added 4 November 1965: west tower and nave 1456 to about 1470; St Mary's Aisle 1484; James VI (1567-1629)
// crowned in the church on 29 July 1567. LB41101 Cowane's Hospital (Guildhall), Category A: to a design by John Mylne,
// dated 1639. Other Category A: Stirling Old Town Jail, the Tolbooth, Argyll Lodging, the Athenaeum, Stirling railway
// station. Census: National Records of Scotland, Scotland's Census 2022 first results, rounded to the nearest hundred:
// Stirling S12000030 92,600 usual residents (2011: 90,247), 40,300 households (2011: 37,566), 42.4 per square km, 14.6
// percent aged 0 to 14, 64.9 percent 15 to 64, 20.5 percent 65 and over, 6,500 aged 15 to 19 and 7,500 aged 20 to 24;
// Scotland 5,436,600, 69.8, 15.3, 64.6, 20.1 percent. Places in OS Open Names (NS68, NS88): Stirling (City, Stirling);
// Raploch, Cambuskenneth, Torbrex, Causewayhead, Cambusbarron, Cornton, Borestone, Bannockburn, Bridge of Allan.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'STIRLING', blurb: 'The city on the River Forth that shares its name with a famous formula, with a project that tests Stirling\'s formula against exact factorials of up to 419,696 digits.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-stirling',
  code: 'sti',
  accent: '#143071',
  accentRationale: 'Stirling: a deep navy, from the solver (10.08:1 on every paper tint, dE 6.9 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Stirling',
    eyebrow: 'Stirling, Scotland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Stirling' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stirling',
  title: 'Best Coding Classes in Stirling | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Stirling learners aged 6 to 67, from Raploch and Torbrex to Causewayhead and Cornton. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Stirling, on a page that tests Stirling\'s formula for factorials against the exact value of 92,600!, all 419,696 digits of it.',
  twitterDescription: 'Stirling learners aged six to sixty-seven can learn coding, Python, maths and AI with us in live online lessons, beginning with a free one.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Stirling Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, mathematics and numerical methods, and AI taught live online in English to Stirling children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Stirling',
  capsuleQ: 'What are the best coding classes in Stirling?',
  capsule: 'Stirling council area had about 92,600 usual residents at Scotland\'s 2022 census, rounded to the nearest hundred by National Records of Scotland, and 42.4 people per square kilometre. The MacTutor history of mathematics records that the mathematician James Stirling was born in 1692 at Garden, about 20 kilometres west of the town. Stirling learners aged six to sixty-seven have live video lessons with our teachers in India, one to one or in a small class of five to ten at one level, arranged around the Scottish school day and working hours. The first lesson costs nothing; after that it is USD 100 a month for a class place or USD 150 a month for one-to-one teaching.',
  lead: 'A factorial multiplies every whole number up to n: 5! is 120, and 20! is already 2,432,902,008,176,640,000. The formula named after James Stirling, born near the town in 1692, estimates n! without multiplying at all. Our Stirling project asks how good that estimate is. Teenagers compute factorials exactly in Python, including 92,600!, one for every resident of Stirling council area in the 2022 census, a number with 419,696 digits, and compare each with Stirling\'s formula. At n = 10 the formula is 0.83% too low. At n = 92,600 it is out by less than one part in a million, and it predicts the digit count exactly.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Stirling.',

  picks: {
    eyebrow: 'Course picks for Stirling',
    h2: 'Four courses for the city of the formula',
    intro: 'Pick the course nearest to what the learner already enjoys. Each one begins with a free live lesson, and there is no card to give when you book.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, from games to counting how many ways a set of cards can be arranged.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Multiplication, powers and logarithms explored in short programs, the arithmetic behind enormous numbers.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 13 to 18', note: 'Secondary mathematics in depth, including logarithms, series and approximations used far beyond the classroom.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python for adults who work with very large or very small numbers and need to know where a computer\'s arithmetic runs out.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stirling today',
      h2: 'A city in a compact council area',
      intro: 'The first results of Scotland\'s 2022 census, published by National Records of Scotland for each council area and rounded to the nearest hundred, for Stirling and for Scotland.',
      body: [
        { kind: 'table', caption: 'Stirling council area and Scotland: the 2011 count and the rounded 2022 count', head: ['Place', 'Counted in 2011', 'Counted in 2022, to the nearest hundred', 'People for each square kilometre in 2022'], rows: [
          ['Stirling', '90,247', '92,600', '42.4'],
          ['Scotland', '5,295,403', '5,436,600', '69.8']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teens and twenties', p: 'The 2022 figures put about 6,500 Stirling residents at ages 15 to 19 and about 7,500 at ages 20 to 24, each rounded to the nearest hundred.' },
          { h3: 'Homes', p: 'There were about 40,300 households with at least one usual resident in 2022, compared with 37,566 at the 2011 census.' },
          { h3: 'Age balance', p: 'In 2022, 14.6% of Stirling residents were 14 or under and 20.5% were 65 or over; for Scotland the shares were 15.3% and 20.1%.' }
        ] },
        { kind: 'p', text: 'Every 2022 figure is rounded on its own by National Records of Scotland, so we print each one as published and never add them together. Our Stirling classes take in the city and the villages around it. A Raploch eight-year-old building a first game, an S5 pupil from Torbrex working through Higher Mathematics and a Causewayhead adult learning Python to automate reports could each join a class at a different level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Kirk, hospital and a mathematician',
      h2: 'A coronation church and a scholar from the west',
      intro: 'From Historic Environment Scotland\'s listing records, and from the MacTutor History of Mathematics biography of James Stirling at the University of St Andrews.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '29 July 1567', p: 'Historic Environment Scotland\'s listing for the Church of the Holy Rude records that James VI was crowned in the church on this date. Its west tower and nave date from 1456 to about 1470.' },
          { h3: '1639', p: 'Cowane\'s Hospital, the Guildhall on St John Street, was built to a design by John Mylne and is dated 1639, with a statue of John Cowane in a niche on its tower. Both buildings are listed at Category A.' },
          { h3: '1730', p: 'MacTutor records that James Stirling, born at Garden in 1692, published Methodus Differentialis in 1730, and that the formula for n! now known as Stirling\'s formula appears there as Example 2 to Proposition 28.' }
        ] },
        { kind: 'p', text: 'MacTutor also records that Stirling wrote to the mathematician De Moivre about errors in a table of logarithms of factorials, and that De Moivre extended his own results using Stirling\'s ideas. Historic Environment Scotland lists the Old Town Jail, the Tolbooth, Argyll Lodging, the Athenaeum and Stirling railway station at Category A too. We have no connection with Historic Environment Scotland or the University of St Andrews, and the dates and descriptions here are theirs.' },
        { kind: 'spec', title: 'How the numbers were checked', p: 'Python can hold whole numbers of any size, so every factorial on this page up to 92,600! was computed exactly, digit by digit, and compared with Stirling\'s formula. The census figure of 92,600 is the rounded 2022 count for Stirling council area.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How close is Stirling\'s formula?',
      intro: 'Stirling\'s formula says that n! is close to the square root of 2 pi n, multiplied by n divided by e, raised to the power n. It needs no multiplication of the numbers from 1 to n at all, only a power, a square root and a few constants.',
      body: [
        { kind: 'table', caption: 'How far Stirling\'s formula falls below the exact factorial, and how far it falls with the next correction added', head: ['n', 'Exact n!', 'Formula too low by', 'Adding 1/(12n) leaves'], rows: [
          ['5', '120', '1.65%', '0.0022%'],
          ['10', '3,628,800', '0.83%', '0.000277%'],
          ['100', 'a 158-digit number', '0.0833%', '0.000000278%'],
          ['1,000', 'a 2,568-digit number', '0.00833%', 'too small to measure in ordinary floating point'],
          ['92,600', 'a 419,696-digit number', '0.00009%', 'too small to measure in ordinary floating point']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Compute exactly', p: 'Multiply 1 by 2 by 3 all the way to n with Python\'s unlimited whole numbers. 92,600! takes under a second and ends in 23,147 zeros, one for each factor of 5 hiding in the numbers.' },
          { h3: '2. Work in logarithms', p: 'The formula\'s answer for 92,600 is far too big for a normal decimal number, so compare logarithms instead: the logarithm tells you the number of digits and the leading digits.' },
          { h3: '3. Watch the error shrink', p: 'The error falls roughly in proportion to one over 12n: 0.83% at 10, 0.0833% at 100, 0.00833% at 1,000. Adding that term as a correction makes the formula far more accurate again.' }
        ] },
        { kind: 'callout', h3: 'Where the computer runs out', p: 'An ordinary floating-point number, the kind most calculators and spreadsheets use, can hold nothing larger than about 1.8 times 10 to the power 308. The largest factorial that fits is 170!. Anything bigger has to be handled through logarithms, and that is exactly what Stirling\'s formula provides: for 92,600! it gives a logarithm of 419,695.39, so the number has 419,696 digits and begins 2.45888, matching the exact calculation.' },
        { kind: 'p', text: 'The corrected formula is so accurate that at n = 1,000 and above, the remaining gap is smaller than ordinary floating-point arithmetic can resolve. A learner who reports "zero error" there has found the limit of the computer, not a perfect formula. Knowing which of those two things you are looking at is the most useful lesson on this page.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Approximations',
      h2: 'Five checks before trusting an approximation',
      intro: 'Learned on factorials in Stirling, then used for probability, statistics, physics, finance models and any calculation too large to do exactly.',
      body: [
        { kind: 'table', caption: 'Decisions behind the Stirling factorial study', head: ['Question', 'For Stirling\'s formula', 'What goes wrong if you skip it'], rows: [
          ['Is there an exact answer to compare?', 'Python computes every factorial exactly', 'An approximation checked only against itself'],
          ['How is the error measured?', 'As a percentage of the exact value', 'Huge absolute errors that are actually tiny'],
          ['Does the error behave as theory says?', 'It shrinks like 1 over 12n', 'An unnoticed bug hiding in a plausible number'],
          ['Where does the computer give out?', 'Floating point stops at 170!', 'Overflow reported as infinity or an error'],
          ['Is a tiny error real or rounding?', 'Below double precision past n = 1,000', 'Rounding noise mistaken for a result']
        ] },
        { kind: 'p', text: 'The second row is the surprise for most learners. At n = 92,600 the formula is off by an absolute amount that is itself a number with more than 419,000 digits, yet as a share of the answer the error is less than one part in a million. Whether an approximation is good depends entirely on how the error is measured.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Counting how many ways three, four and five cards can be arranged, and seeing how fast the numbers grow.' },
          { h3: 'Teenagers', p: 'Factorials, logarithms, asymptotic formulas and floating-point limits in Python, checked against exact arithmetic.' },
          { h3: 'Adults', p: 'Judging when an approximation is good enough for work, with the error measured the right way.' }
        ] },
        { kind: 'p', text: 'We have no connection with the University of St Andrews, Historic Environment Scotland, National Records of Scotland or Stirling Council. The biography, listing records and census tables are published openly; the factorials, errors and comparisons on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From arranging cards to Stirling\'s formula',
    intro: 'The age bands are a guide; the free lesson shows the right place to start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counting arrangements', p: 'Arranging and counting objects in block code, and noticing how quickly the totals grow.', courses: ['scratch-programming-complete-course', 'mental-maths-mastery-kids'] },
      { band: 'Ages 11 to 13', h3: 'Big numbers in Python', p: 'Loops, multiplication and very large whole numbers in Python, with a program that prints factorials.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Approximations', p: 'Logarithms, Stirling\'s formula and floating-point limits, with every estimate tested against an exact answer.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Numbers at work', p: 'Handling very large and very small values in Python without silent overflow or rounding errors.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'college-mathematics-complete-masterclass'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI works with enormous numbers constantly. Why should a Stirling teenager learn where arithmetic breaks?',
    intro: 'Because models are built on floating-point numbers, and knowing their limits explains many of the tricks inside them.',
    p1: 'Machine learning systems multiply and add millions of numbers, and they routinely work with logarithms of probabilities rather than the probabilities themselves, for the same reason this project does: the raw values would overflow or vanish. A learner who has watched 171! break a calculator understands why.',
    p2: 'The project also teaches honest error reporting. An approximation that is 0.00009% out sounds perfect until you notice the true answer has 419,696 digits. Saying clearly how an error was measured is a habit that matters whenever a machine hands you a number.',
    closer: 'So a Stirling teenager should keep learning to code in 2026, a short ride from where James Stirling was born in 1692: computers do the multiplying, but people still need to know when the answer can be trusted.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Raploch, Cambuskenneth or Bannockburn, one class for all',
    intro: 'Stirling learners live on both sides of the River Forth and out towards Bannockburn and Bridge of Allan. Online, each of them is the same distance from the lesson.',
    cells: [
      { h3: 'Both sides of the Forth', p: 'A learner in Cornton and another in Cambusbarron can take the same class without either of them making the trip into town.' },
      { h3: 'Scottish school stages', p: 'Classes follow the stages Scottish families know, from the P years through S1 to S6, with National 5, Higher and Advanced Higher courses named as schools name them; teaching is in English.' },
      { h3: 'First lesson, real work', p: 'The free session is spent coding, not listening to a pitch, and ends with the teacher suggesting a level, a course and a weekly time. No card details are taken.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at a single level, from Stirling, elsewhere in the UK and overseas, which keeps sensible times open for every stage.' },
      { h3: 'Two a week', p: 'Two fixed lessons weekly, around eight a month, with holidays and exam study planned together with the teacher.' },
      { h3: 'Teachers in India', p: 'India keeps one clock all year, so a Stirling lesson at five in the afternoon starts at 21:30 for our teachers during British Summer Time and 22:30 once the clocks go back.' }
    ],
    spec: { title: 'Across central Scotland', p: 'Learners in Dunblane, Callander, Falkirk or Alloa join exactly the same classes, because every lesson is online and classes are arranged by level.' }
  },

  fees: {
    h2: 'Stirling lesson fees',
    intro: 'The opening lesson is free, and a single monthly fee follows.',
    first: 'A whole lesson at no charge, finishing with a recommended level, course and weekly time.',
    group: 'About eight live lessons a month, in a class of five to ten learners at one level.',
    private: 'About eight live lessons a month, with a teacher giving your learner their full attention.',
    closer: 'Families in Borestone or Causewayhead pay in US dollars, as every family outside India does, and our site never shows pound prices. Payment starts only after the free lesson, once you have settled a course and a weekly time with us; pauses, missed lessons and changes between group and private teaching are explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, unedited',

  book: {
    h2: 'Book a free lesson for a Stirling learner',
    intro: 'We match the first lesson to the learner: a card-arranging counting game for a young child, a short Python program that prints factorials for a beginner, or exact factorials and Stirling\'s formula for a teenager ready for real numerical mathematics.',
    success: 'Thank you. We will be in touch soon to arrange the lesson for your Stirling learner.'
  },

  faq: {
    h2: 'Stirling coding class questions',
    intro: 'What Stirling families most often ask us.',
    items: [
      { q: 'How many people live in Stirling?', a: 'Scotland\'s Census 2022 counted about 92,600 usual residents in Stirling council area, rounded to the nearest hundred by National Records of Scotland, against 90,247 at the 2011 census.' },
      { q: 'How does Stirling compare with Scotland?', a: 'The council area has 42.4 residents per square kilometre against 69.8 for Scotland, and in 2022 20.5% of its residents were 65 or over, close to the Scottish figure of 20.1%.' },
      { q: 'What is Stirling\'s formula?', a: 'An approximation for n!, the product of all whole numbers up to n: the square root of 2 pi n times n over e to the power n. It becomes more accurate as n grows, and adding a small correction of 1/(12n) improves it further.' },
      { q: 'How accurate is Stirling\'s formula?', a: 'For n = 10 it is 0.83% below the exact 3,628,800; for n = 1,000 it is 0.00833% below; for n = 92,600 it is less than one part in a million below, and it gives the exact number of digits, 419,696.' },
      { q: 'Who was James Stirling?', a: 'The MacTutor History of Mathematics records that he was born in May 1692 at Garden, about 20 km west of Stirling, and published Methodus Differentialis in 1730, where the formula now named after him appears. We are not connected with MacTutor or the University of St Andrews.' },
      { q: 'Where was James VI crowned?', a: 'Historic Environment Scotland\'s listing for the Church of the Holy Rude in Stirling records that James VI was crowned there on 29 July 1567. The church is listed at Category A.' },
      { q: 'When do Stirling lessons happen?', a: 'Most Stirling families choose a time after school, on a weekday evening or at the weekend, agreed in the free lesson. For our teachers in India that is late evening: they are four and a half hours ahead of Scotland in summer and five and a half in winter.' },
      { q: 'Is there a centre in Stirling?', a: 'No. We have no Stirling centre and no premises anywhere in the UK, because every lesson is live online. Learners need a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do Stirling lessons cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are learners grouped?', a: 'By level, pace and goals rather than by age or address, with five to ten learners at the same stage. If no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Scotland and the UK',
    h2: 'Scotland and beyond',
    html: 'Up the road, the <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth page</a> runs Soundex over Walter Scott\'s The Fair Maid of Perth, and to the south-west <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> has its own project. Scottish exam years are covered on the <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> pages. Read the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland guide</a> for how our stages match the Curriculum for Excellence, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> for every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stirling and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-perth-scotland', label: 'Perth' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sti .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.45rem); }
.cg-root.cg-sti .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-sti .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding: 0.95rem 0; }
.cg-root.cg-sti .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sti .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.016em; }
.cg-root.cg-sti .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.15rem); }
.cg-root.cg-sti .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-sti .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sti .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-sti .cg-callout { border-left-width: 5px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded to the nearest hundred: Stirling S12000030 92,600 (2011: 90,247), 40,300 households (2011: 37,566), 42.4 per square kilometre, 14.6 percent aged 0 to 14, 20.5 percent 65 and over, 6,500 aged 15 to 19, 7,500 aged 20 to 24; Scotland 5,436,600 (2011: 5,295,403), 69.8, 15.3 and 20.1 percent. HES LB41083 Church of the Holy Rude (Category A; 1456 to about 1470; St Mary\'s Aisle 1484; James VI crowned 29 July 1567), LB41101 Cowane\'s Hospital (Category A; John Mylne design, 1639). MacTutor: James Stirling born May 1692 at Garden, about 20 km west of Stirling; Methodus Differentialis 1730; formula at Example 2 to Proposition 28; correspondence with De Moivre.',
    localProject: 'How close is Stirling\'s formula? Exact factorials in Python vs n ln n - n + 0.5 ln(2 pi n). Plain error: 1.65 percent at 5, 0.83 at 10, 0.0833 at 100, 0.00833 at 1,000, 0.00009 at 92,600. With 1/(12n): 0.0022, 0.000277, 0.000000278 percent at 5, 10, 100; below double precision from 1,000. 92,600!: 419,696 digits, leading 2.45888, 23,147 trailing zeros; formula gives the same digit count. 170! the largest factorial in a double. Lesson family: Stirling\'s formula and asymptotic approximation.',
    requiredMentions: [
      '92,600',
      '419,696',
      'Methodus Differentialis',
      'Holy Rude',
      'Cowane',
      'Raploch',
      'Cambuskenneth',
      'Torbrex',
      'Causewayhead',
      'Cambusbarron',
      'Cornton',
      'Borestone'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Stirling and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'MacTutor History of Mathematics (University of St Andrews), James Stirling biography.', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Stirling/' },
      { claim: 'Historic Environment Scotland, LB41083 Church of the Holy Rude.', url: 'https://portal.historicenvironment.scot/designation/LB41083' },
      { claim: 'Historic Environment Scotland, LB41101 Cowane\'s Hospital (Guildhall).', url: 'https://portal.historicenvironment.scot/designation/LB41101' },
      { claim: 'Historic Environment Scotland, designations data (listed buildings layer): Category A listings in central Stirling.', url: 'https://inspire.hes.scot/arcgis/rest/services/HES/HES_Designations/MapServer' },
      { claim: 'Ordnance Survey, OS Open Names: Stirling and nearby places.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-names' },
      { claim: 'Ordnance Survey, OS Open Rivers: River Forth passes within about 0.5 km of the Stirling point.', url: 'https://www.ordnancesurvey.co.uk/products/os-open-rivers' }
    ],
    rejectedClaims: [
      'That Stirling the town and Stirling the mathematician share more than a name: MacTutor gives only his birthplace, Garden, about 20 km west of the town, so no further link is claimed.',
      'Who first discovered the factorial approximation: MacTutor notes the correspondence with De Moivre; the page does not settle any priority question.',
      'Stirling Castle: not read from a fetched listing record, so it is not described on the page.',
      'A percentage growth since 2011: the 2022 figure is rounded, so both counts are given without a derived rate.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the University of St Andrews, Historic Environment Scotland, National Records of Scotland or Stirling Council.'
    ]
  }
};
