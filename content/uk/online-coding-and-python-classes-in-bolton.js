'use strict';
// Bolton (cg- town page, UK cluster Phase 8, towns band A, row 324). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: was fine yarn really so much dearer? Anchors (read raw 27 September 2026): Project Gutenberg ebook 70140, George W.
// Daniels, "The early English cotton industry" (introduction by George Unwin): Crompton born "on the 3rd of December 1753"
// at "Firwood Fold, a hamlet in the township of Tonge, in the parish of Bolton"; family lived at "Hall-i'-th'-Wood" from about
// age five; began in 1778 to build the machine known first as the "Hall-i'-th' Wood Wheel" and the "Muslin Wheel", later the
// "Mule", "completed in 1779"; "he obtained as much as 14s. per lb. for 40's yarn, and as much as 25s. for 60's"; mule yarn
// "could be spun thinner or of higher 'counts'"; count defined in the text as "numbers up to 40 hanks in the pound".
// Our model (computed inline): 14s = 168d, 25s = 300d (12 pence to the shilling); price per hank 168/40 = 4.2d, 300/60 =
// 5.0d; per pound 60's costs 1.79x, per hank 1.19x. Blend of equal lengths (60 hanks each): 120 hanks / 2.5 lb = count 48
// (harmonic mean), not 50. Lesson family: indirect units (count = hanks per pound) and the harmonic mean of rates; screened
// (yarn count, linear density, harmonic mean, price per: 0 hits; harmonic series/expectation used elsewhere is a different
// idea; pre-decimal money was Westminster's family and appears here only as a conversion).
// SMG collection search and Historic England list entries returned 403 on 27 September 2026; not circumvented, not used.
// Place facts: Nomis Census 2021 TS007A, Bolton E08000001: total 295,961; 0 to 4 18,458 (6.2%; England 5.4%); 5 to 9 20,434
// (6.9%; 5.9%); 10 to 14 20,817 (7.0%; 6.0%); 15 to 19 18,319 (6.2%; 5.7%); 25 to 29 17,768 (6.0%; 6.6%); 85+ 5,794 (2.0%;
// 2.4%). ONS 2021 BUAs wholly in Bolton: Bolton 184,090; Farnworth 28,760; Westhoughton 21,960; Horwich 20,700.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BOLTON', label: 'Bolton', blurb: 'Online coding and Python classes for Bolton, with a project on Samuel Crompton\'s yarn prices and how counts measure thread.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-bolton',
  code: 'bol',
  accent: '#6B255D',
  accentRationale: 'Bolton: a madder-dyed cotton plum (8.26:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Bolton',
    eyebrow: 'Bolton, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Bolton, England',
  title: 'Online Coding and Python Classes in Bolton | AI, Ages 6 to 67',
  description: 'Online coding, Python and AI lessons for Bolton, Farnworth, Horwich and Westhoughton learners aged 6 to 67, taught live by real teachers. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Bolton, plus a project that uses Samuel Crompton\'s own yarn prices to teach indirect units and the harmonic mean.',
  twitterDescription: 'Bolton online coding, Python and AI classes for ages 6 to 67. The first live lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Bolton',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Bolton, taught live in English and placed by level.'
  },

  h1: 'Online coding and Python classes in Bolton',
  capsuleQ: 'Which are the best online coding and Python classes for Bolton?',
  capsule: 'At the 2021 census Bolton borough had 295,961 residents and the Bolton built-up area 184,090. It is a young borough: every five-year band from birth to 19 makes up a larger share than in England as a whole. Coding, Python, AI and maths reach Bolton by live video from our teachers in India, for learners aged 6 to 67, either solo with a tutor or in same-stage classes of five to ten. The opening lesson is free and points to the right course. The Bolton project works through the prices Samuel Crompton was paid for yarn from his spinning mule. Carrying on costs USD 100 each month in a group or USD 150 each month one-to-one.',
  lead: 'Samuel Crompton was born in 1753 at Firwood Fold in the township of Tonge, in the parish of Bolton, and grew up at Hall-i\'-th\'-Wood. There, George W. Daniels records, he built the spinning mule, completed in 1779, and sold its yarn at 14 shillings a pound for 40\'s and 25 shillings a pound for 60\'s. Those numbers look simple, and they hide a trap. A yarn\'s count is how many hanks weigh a pound, so a bigger count means a thinner thread, and a pound of 60\'s is far longer than a pound of 40\'s. Was the fine yarn really nearly twice the price? A Bolton learner can answer with a few lines of Python, and meet the harmonic mean on the way.',
  wa: 'Hello Modern Age Coders, please book a free online coding or Python lesson for a Bolton learner.',

  picks: {
    eyebrow: 'Where Bolton learners start',
    h2: 'First courses for Bolton',
    intro: 'Choose by age and interest. The first live lesson on each is free, and we never ask for card details to book it.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with patterns, loops and a weaving game.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Real Python code, plus gentle first steps into AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Thorough Python for teens, where the Crompton yarn project lives.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from the very beginning, up to data and algorithms.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bolton by age',
      h2: 'Plenty of children and teenagers',
      intro: 'Six bands from census table TS007A for Bolton borough, taken from Nomis and shown beside the England share.',
      body: [
        { kind: 'table', caption: 'Bolton borough against England, six age bands, Census 2021 (TS007A)', head: ['Age', 'People in Bolton', 'Share in Bolton', 'Share in England'], rows: [
          ['Under 5', '18,458', '6.2%', '5.4%'],
          ['5 to 9', '20,434', '6.9%', '5.9%'],
          ['10 to 14', '20,817', '7.0%', '6.0%'],
          ['15 to 19', '18,319', '6.2%', '5.7%'],
          ['25 to 29', '17,768', '6.0%', '6.6%'],
          ['85 and over', '5,794', '2.0%', '2.4%']
        ] },
        { kind: 'p', text: 'School-age children stand a full point above the national share in several bands. Beyond the Bolton built-up area itself, the ONS lists Farnworth at 28,760, Westhoughton at 21,960 and Horwich at 20,700, all inside the borough. Children here follow the national curriculum for England, and lessons pause whenever your school breaks up.' },
        { kind: 'callout', h3: 'Wider area', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page gathers the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Bolton project',
      h2: 'Pricing Crompton\'s yarn by length',
      intro: 'A count is a backwards unit, and the program has to respect that.',
      body: [
        { kind: 'p', text: 'Daniels\'s book gives the definition in passing: counts are "hanks in the pound". So 40\'s means 40 hanks weigh one pound, and 60\'s means 60 hanks weigh one pound. The learner first converts the prices into pence, at 12 pence to the shilling: 14 shillings is 168d and 25 shillings is 300d. Per pound, the fine yarn costs 300 / 168, or 1.79 times as much. That is the number most people stop at.' },
        { kind: 'table', caption: 'Our Python results from Crompton\'s prices, 27 September 2026', head: ['Yarn', 'Price per pound', 'Hanks per pound', 'Price per hank'], rows: [
          ['40\'s', '14s (168d)', '40', '4.2d'],
          ['60\'s', '25s (300d)', '60', '5.0d'],
          ['Ratio, fine to coarse', '1.79 times', '1.5 times', '1.19 times']
        ] },
        { kind: 'p', text: 'But a weaver buys thread to cover cloth, and cloth is measured by length. Dividing each price by its count gives the price per hank: 4.2d for 40\'s and 5.0d for 60\'s. Measured by length, Crompton\'s finer yarn cost only about 19 per cent more, even though a pound of it cost 79 per cent more. The program prints both, labels each clearly, and the learner writes one sentence saying which comparison answers which question.' },
        { kind: 'p', text: 'The second trap is averaging. Blend 60 hanks of 40\'s with 60 hanks of 60\'s. The learner\'s first guess is a count of 50. The code weighs it instead: the 40\'s weighs 1.5 pounds, the 60\'s weighs 1 pound, so 120 hanks weigh 2.5 pounds, a count of 48. Averaging rates over equal lengths needs the harmonic mean, the same rule that governs average speed over equal distances. A test checks that the function returns 48, and another that an equal-weight blend correctly returns 50.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Weigh equal lengths of thick and thin string on kitchen scales and count how many fit a fixed weight.' },
          { h3: 'Ages 11 to 15', p: 'Write price_per_hank() in Python and compare it with the price per pound.' },
          { h3: 'Ages 15 and up', p: 'Write blend_count() for any mix and prove when it equals the harmonic mean.' }
        ] },
        { kind: 'callout', h3: 'Daniels\'s numbers, our arithmetic', p: 'Crompton\'s prices and the definition of a count are quoted from The early English cotton industry by George W. Daniels, on Project Gutenberg. The conversions, the comparison and the blend calculation are ours.' }
      ]
    },
    {
      id: 'crompton', tint: 'deep', eyebrow: 'Why Crompton',
      h2: 'From Firwood Fold to the mule',
      intro: 'Dates and details from Daniels\'s chapter on the mule.',
      body: [
        { kind: 'table', caption: 'Samuel Crompton in The early English cotton industry', head: ['What', 'According to the book'], rows: [
          ['Birth', '3 December 1753, at Firwood Fold in the township of Tonge'],
          ['Childhood home', 'Hall-i\'-th\'-Wood, from about the age of five'],
          ['First efforts', 'From 1772, to make better yarn for his own weaving'],
          ['The machine', 'Begun in 1778, first called the Hall-i\'-th\' Wood Wheel or Muslin Wheel'],
          ['Completed', '1779'],
          ['What it did better', 'Spun thinner yarn, of higher counts, than earlier machines']
        ] },
        { kind: 'p', text: 'Indirect units like the yarn count are everywhere in computing. Screen resolution is quoted as pixels per inch, fuel economy as miles per gallon rather than gallons per mile, and data rates as bits per second. Every time a program averages one of these, it has to decide whether an arithmetic or harmonic mean fits. A Bolton learner who has priced Crompton\'s yarn correctly will ask that question automatically.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg or the ONS. The book and the census data are theirs; the code, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps by school year',
    h2: 'From string on scales to data science',
    intro: 'Years are a guide only; the trial settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Patterns and loops', p: 'Block coding with repeating patterns and simple games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and units', p: 'First Python programs, measurements and conversions.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Averages, data and AI projects, beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Practical programming', p: 'Python and data analysis for adult learners.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and averages',
    h2: 'Does an AI know which average to take?',
    intro: 'A mean is only right if it matches the question.',
    p1: 'Give a chatbot two yarn counts and ask for the blend, and it may simply add and halve. The answer sounds sure of itself, and it can be wrong in exactly the way Crompton\'s customers would have noticed.',
    p2: 'A Bolton learner who has written blend_count() knows to ask what is being held equal before trusting any average.',
    closer: 'Spotting the wrong average is one strong reason for Bolton teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Running the lessons',
    h2: 'Farnworth to Horwich, one video link',
    intro: 'Every part of the borough joins the same way.',
    cells: [
      { h3: 'The student drives', p: 'Every line is typed by the learner, while the tutor reads along and prompts with questions.' },
      { h3: 'Pitched to the year', p: 'Year 3 or Year 11, each learner begins where their year and trial point, and we use the right exam board.' },
      { h3: 'No-cost trial', p: 'The opening lesson is free, followed by honest advice on what suits.' },
      { h3: 'Same-stage classes', p: 'Five to ten learners at one level, gathered from across the UK.' },
      { h3: 'Weekly rhythm', p: 'Two lessons a week in term time, with school holidays kept clear.' },
      { h3: 'Steady time slot', p: 'Clock changes in spring and autumn are absorbed by our teachers; your time stays the same.' }
    ],
    spec: { title: 'Why classes happen online', p: 'Five Bolton learners at one stage who are all free on the same evening seldom share a street. Online, everyone gets a class that fits.' }
  },

  fees: {
    h2: 'Fees for Bolton learners',
    intro: 'Bolton families pay what every family outside India pays.',
    first: 'A complete lesson at no charge, with a recommendation at the end.',
    group: 'About eight live lessons per month in a small class.',
    private: 'About eight live lessons per month, one-to-one.',
    closer: 'All fees are in US dollars; we do not bill in sterling. Payment begins only once the trial has fixed a course and a regular weekly time, and the pricing page covers holidays, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Google reviews from our families',

  book: {
    h2: 'Book a free Bolton lesson',
    intro: 'Give us the learner\'s age or school year and one thing they like. A trial might be a Scratch pattern game, a first Python script, an AI mini-project, or the Crompton yarn puzzle.',
    success: 'Thank you. We have your Bolton booking request.'
  },

  faq: {
    h2: 'Bolton questions answered',
    intro: 'The town, the yarn project and the practical side.',
    items: [
      { q: 'How many people live in Bolton?', a: 'The 2021 census counted 295,961 in Bolton borough and 184,090 in the Bolton built-up area.' },
      { q: 'Are there online coding and Python classes for Bolton?', a: 'Yes. We teach coding, Python, AI and maths live online to Bolton learners from age 6 to 67.' },
      { q: 'What is the Samuel Crompton project?', a: 'Learners use Crompton\'s own yarn prices to compare cost by weight and by length, and to calculate the count of a blended yarn.' },
      { q: 'What does 40\'s yarn mean?', a: 'It means 40 hanks weigh one pound; a higher count means thinner yarn.' },
      { q: 'Where did Samuel Crompton invent the spinning mule?', a: 'At Hall-i\'-th\'-Wood in Bolton, according to George W. Daniels, completing it in 1779.' },
      { q: 'Do lessons happen in Bolton itself?', a: 'No, they are live online, so Farnworth, Horwich, Westhoughton and the town centre are all covered.' },
      { q: 'Can you help with GCSE and A level?', a: 'Yes, in maths and computing, aimed at understanding; we do not promise grades.' },
      { q: 'How old do learners need to be?', a: 'Between 6 and 67, and adults are welcome.' },
      { q: 'What does it cost?', a: 'Nothing for the first lesson, then USD 100 monthly for a group or USD 150 monthly for one-to-one.' },
      { q: 'What happens in school holidays?', a: 'Lessons pause. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages around Bolton',
    html: 'Our <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page lists every area in the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links them all.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Bolton and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bol .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-bol .cg-hero h1 { font-weight: 760; letter-spacing: -0.028em; line-height: 1.04; }
.cg-root.cg-bol .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bol .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bol .cg-section-head h2 { max-width: 21ch; letter-spacing: -0.02em; }
.cg-root.cg-bol .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-bol .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bol .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.76rem; }
.cg-root.cg-bol .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-bol .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bolton (E08000001). Nomis Census 2021 TS007A: total 295,961; 0 to 4 18,458 (6.2%, England 5.4%); 5 to 9 20,434 (6.9%, 5.9%); 10 to 14 20,817 (7.0%, 6.0%); 15 to 19 18,319 (6.2%, 5.7%); 25 to 29 17,768 (6.0%, 6.6%); 85+ 5,794 (2.0%, 2.4%). ONS 2021 BUAs: Bolton 184,090; Farnworth 28,760; Westhoughton 21,960; Horwich 20,700. Project Gutenberg 70140, George W. Daniels, The early English cotton industry: Crompton born "on the 3rd of December 1753" at "Firwood Fold, a hamlet in the township of Tonge, in the parish of Bolton"; Hall-i-th-Wood; machine begun 1778, "completed in 1779"; "14s. per lb. for 40\'s yarn, and as much as 25s. for 60\'s"; "numbers up to 40 hanks in the pound".',
    localProject: 'Indirect units and harmonic mean: 168d/40 = 4.2d per hank, 300d/60 = 5.0d per hank; per pound 1.79x, per hank 1.19x; equal-length blend of 60 hanks each = 120 hanks / 2.5 lb = count 48, equal-weight blend = 50. Lesson family: yarn count as inverse linear density; harmonic mean of rates.',
    requiredMentions: [
      '184,090',
      'Farnworth',
      'Westhoughton',
      'Horwich',
      'Samuel Crompton',
      'Firwood Fold',
      'hanks in the pound',
      'George W. Daniels',
      'harmonic mean'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Bolton and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, George W. Daniels, The early English cotton industry (ebook 70140).', url: 'https://www.gutenberg.org/ebooks/70140' }
    ],
    rejectedClaims: [
      'Science Museum Group and Historic England records: both returned 403 on 27 September 2026; not used.',
      'Crompton\'s later petitions and Parliamentary grant: not discussed.',
      'Atherton and Clifton built-up areas: cross the boundary, not quoted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices for our lessons: none; historic shillings appear only as Crompton\'s yarn prices.'
    ]
  }
};
