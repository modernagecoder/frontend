'use strict';
// Gateshead (cg- town page, UK cluster Phase 8, towns band A, row 346). Keyword slug per the owner's 2026-09-27
// instruction. Spine: what does a telescope's shape tell you? Anchor (read raw 27 September 2026): Project Gutenberg ebook
// 41538, Edward W. Byrn, "The Progress of Invention in the Nineteenth Century", list of great telescopes: "the great
// reflecting telescope of the Earl of Rosse, erected at Parsonstown, in Ireland, in 1842-45. This was 6 feet diameter, 54
// feet focal length"; "Foucault's reflecting telescope at Paris, 1862, whose mirror was 31½ inches diameter, and focal length
// 17¾ feet"; "Mr. R. S. Newall's telescope, set up at Gateshead by Cookes, of York, in 1870; object glass, 25 inches, tube, 30
// feet"; "Mr. A. Ainslie Common's reflecting telescope, Ealing, Middlesex, 1879, mirror, 37½ inches diameter, tube, 20 feet";
// "the telescope at the United States Observatory, at Washington, 1873, object glass, 26 inches, tube, 33 feet long".
// Our run (27 September 2026): focal ratio = length (converted to inches) / aperture. Rosse 54 ft / 72 in = 9.0; Foucault
// 17.75 ft / 31.5 in = 6.8; Newall 30 ft / 25 in = 14.4; Common 20 ft / 37.5 in = 6.4; Washington 33 ft / 26 in = 15.2.
// Without converting feet to inches: 0.75, 0.56, 1.2, 0.53, 1.27 (meaningless). Byrn gives focal length for two and tube
// length for three, so three ratios are approximate. The two "object glass" (refractor) telescopes come out at 14.4 and 15.2;
// the three reflectors at 6.4 to 9.0.
// Lesson family: focal ratio (derived feature), unit conversion inside a formula, mixed field definitions, and a derived
// feature separating two classes; screened (focal ratio, f-number, focal length, Newall: 0 hits; Slough's light-gathering
// used aperture squared and magnitudes, a different quantity). Gateshead Council's site returned 403; not used.
// Place facts: Nomis Census 2021 TS007A, Gateshead E08000037: total 196,151; 5 to 9 11,070 (5.6%; England 5.9%); 15 to 19
// 10,074 (5.1%; 5.7%); 20 to 24 10,411 (5.3%; 6.0%); 55 to 59 14,243 (7.3%; 6.7%); 60 to 64 12,555 (6.4%; 5.8%); 80 to 84
// 5,846 (3.0%; 2.5%). ONS 2021 BUAs wholly inside: Gateshead 115,280; Blaydon 14,240; Birtley 13,835; Ryton 8,805; Rowlands
// Gill 5,255 (Whickham, 15,685, is registered by the Tyne and Wear page and mentioned in text only).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GATESHEAD', label: 'Gateshead', blurb: 'AI and programming classes for Gateshead, with a project that compares the 1870 Newall telescope with the great telescopes of its century.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-gateshead',
  code: 'gat',
  accent: '#5F377A',
  accentRationale: 'Gateshead: a night-sky violet (7.31:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Gateshead',
    eyebrow: 'Gateshead, Tyne and Wear, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Tyne and Wear' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-east-england', name: 'North East England' }],
  nav: [
    { label: 'Tyne and Wear', href: '/coding-classes-in-tyne-and-wear' },
    { label: 'North East', href: '/coding-and-ai-classes-in-north-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Gateshead, England',
  title: 'AI and Programming Classes in Gateshead | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for Gateshead, Blaydon, Birtley and Ryton learners aged 6 to 67, live one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Gateshead, and a Python project that compares the 1870 Newall telescope with the great telescopes of its age.',
  twitterDescription: 'Gateshead AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Gateshead',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Gateshead, taught live and matched to level.'
  },

  h1: 'AI and programming classes in Gateshead',
  capsuleQ: 'Which are the best AI and programming classes in Gateshead?',
  capsule: 'The 2021 census found 196,151 residents in Gateshead borough; the ONS built-up area of Gateshead held 115,280, Blaydon 14,240 and Birtley 13,835. Adults in their late fifties and early sixties are above the England share, while teenagers and young adults are below it. From Ryton to Birtley, anyone between 6 and 67 can join our India-based tutors for live AI, programming, Python and maths, solo or in a same-level class of five to ten. A free first lesson points to the right course. The Gateshead project starts from a Victorian telescope set up in the town. Staying on means USD 100 per month in a shared class or USD 150 per month on your own.',
  lead: 'Edward W. Byrn\'s 1900 survey of nineteenth-century invention lists the great telescopes of the age, and one of them was in Gateshead: "Mr. R. S. Newall\'s telescope, set up at Gateshead by Cookes, of York, in 1870; object glass, 25 inches, tube, 30 feet". Beside it he lists giants at Parsonstown, Paris, Ealing and Washington, each with its width and its length. A table of five telescopes looks like dry reading, until a learner computes one extra number for each, the focal ratio. Suddenly the five split into two clear families, for a reason every astronomer knows. Getting there takes some care: the units change mid-sentence, and Byrn does not measure every telescope the same way.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Gateshead learner.',

  picks: {
    eyebrow: 'Gateshead course picks',
    h2: 'First courses for Gateshead learners',
    intro: 'Choose by age and interest. Each course starts with a free live lesson, booked with no card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with stars, planets and space games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with measurements, plus small AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the telescope project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from scratch, up to data and science tools.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gateshead borough',
      h2: 'An older-leaning Tyneside borough',
      intro: 'Nomis counts from the 2021 census for six age groups, Gateshead next to the national picture.',
      body: [
        { kind: 'table', caption: 'Gateshead against England, selected ages (TS007A, 2021)', head: ['Ages', 'Gateshead residents', 'Gateshead %', 'England %'], rows: [
          ['5 to 9', '11,070', '5.6%', '5.9%'],
          ['15 to 19', '10,074', '5.1%', '5.7%'],
          ['20 to 24', '10,411', '5.3%', '6.0%'],
          ['55 to 59', '14,243', '7.3%', '6.7%'],
          ['60 to 64', '12,555', '6.4%', '5.8%'],
          ['80 to 84', '5,846', '3.0%', '2.5%']
        ] },
        { kind: 'p', text: 'Residents in their late fifties and early sixties stand out against England, and teenagers and young adults are fewer. Around the town itself the ONS picks out Ryton (8,805) and Rowlands Gill (5,255), alongside Blaydon, Birtley and Whickham, every one of them inside the borough boundary. Tyneside schools follow the national curriculum for England; tell us the half-terms and our timetable leaves them clear.' },
        { kind: 'callout', h3: 'County and region', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">Tyne and Wear</a> page for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a> for the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Gateshead project',
      h2: 'Focal ratios for five great telescopes',
      intro: 'Parse the list, convert the units, compute one ratio, and look for groups.',
      body: [
        { kind: 'p', text: 'The learner copies Byrn\'s five telescopes into a Python list: where each stood, the year, whether its main optic was a mirror or an object glass (a large lens), its width and its length. Widths come in inches, except the Earl of Rosse\'s, which Byrn gives as 6 feet. Lengths come in feet, some with fractions like 17¾. The focal ratio is the length divided by the width. The first attempt divides 30 feet by 25 inches for the Newall telescope and gets 1.2, a number that means nothing, because the units never matched.' },
        { kind: 'table', caption: 'Our Python focal ratios from Byrn\'s list of great telescopes, 27 September 2026', head: ['Telescope (Byrn)', 'Main optic', 'Width and length', 'Focal ratio'], rows: [
          ['R. S. Newall, Gateshead, 1870', 'Object glass', '25 in, tube 30 ft', '14.4 (from tube)'],
          ['US Observatory, Washington, 1873', 'Object glass', '26 in, tube 33 ft', '15.2 (from tube)'],
          ['Earl of Rosse, Parsonstown, 1842-45', 'Mirror', '6 ft, focal length 54 ft', '9.0'],
          ['Foucault, Paris, 1862', 'Mirror', '31½ in, focal length 17¾ ft', '6.8'],
          ['A. Ainslie Common, Ealing, 1879', 'Mirror', '37½ in, tube 20 ft', '6.4 (from tube)']
        ] },
        { kind: 'p', text: 'Converting everything to inches fixes it: 360 inches of tube over 25 inches of lens gives 14.4 for Newall\'s telescope. Then the learner notices a second trap. Byrn gives the true focal length for Rosse and Foucault, but only the tube length for the other three. A tube is close to the focal length but not the same, so those three ratios are marked as approximate rather than silently mixed in. Recording which field each number came from is as important as the number.' },
        { kind: 'p', text: 'Sorting by focal ratio reveals the pattern. The two object-glass telescopes, Newall\'s and Washington\'s, come out at 14.4 and 15.2. The three mirror telescopes sit between 6.4 and 9.0. In this list the lens telescopes are long and slim, the mirror telescopes short and wide. One computed feature separated five objects into two families that Byrn\'s raw figures hid. The learner writes a test with an invented telescope given in metres and centimetres to prove the conversion works in any units.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Measure the length and width of cardboard tubes and work out how many widths fit along each.' },
          { h3: 'Ages 11 to 15', p: 'Type the five telescopes into Python, convert to inches and compute focal ratios.' },
          { h3: 'Ages 15 and up', p: 'Track which figures are tube lengths, sort, and plot the two families.' }
        ] },
        { kind: 'callout', h3: 'Byrn\'s figures, our ratios', p: 'The telescope details come from Edward W. Byrn\'s The Progress of Invention in the Nineteenth Century on Project Gutenberg. The conversions and ratios are ours.' }
      ]
    },
    {
      id: 'newall', tint: 'deep', eyebrow: 'Why the Newall telescope',
      h2: 'A 25-inch lens set up in Gateshead',
      intro: 'What Byrn records about the Gateshead instrument and its peers.',
      body: [
        { kind: 'table', caption: 'The Newall telescope in Byrn\'s list (Project Gutenberg)', head: ['Detail', 'Byrn\'s wording or our summary'], rows: [
          ['Owner', 'Mr. R. S. Newall'],
          ['Where and when', 'Set up at Gateshead in 1870'],
          ['Maker', 'Cookes, of York'],
          ['Object glass', '25 inches'],
          ['Tube', '30 feet'],
          ['Our focal ratio', 'About 14.4, the lens-telescope family']
        ] },
        { kind: 'p', text: 'Derived features like this drive much of data science. A spreadsheet of houses becomes useful once someone computes price per square metre; a list of athletes once someone divides distance by time. Machine learning systems often succeed or fail on whether the right ratio was calculated before training. A Gateshead learner who has turned Byrn\'s list into focal ratios, with the units and field meanings checked, has done exactly that job.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with Project Gutenberg or the census office. The book and figures are theirs; the calculations, and any mistake in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From cardboard tubes to data science',
    intro: 'Treat the years loosely; the trial places everyone.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Space in blocks', p: 'Block coding with planets, rockets and measuring games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python and units', p: 'Units, ratios and lists in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Science and AI', p: 'Derived features, data and AI beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Data work', p: 'Adult Python for data and analysis.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and features',
    h2: 'Would an AI spot the units mismatch?',
    intro: 'A formula applied to the wrong units still returns a number.',
    p1: 'Ask a chatbot for the focal ratio of a telescope described in feet and inches and it may divide straight away. The answer arrives confidently, and it can be twelve times too small.',
    p2: 'A Gateshead learner who has converted Byrn\'s figures by hand knows to check units and field meanings before trusting any computed number.',
    closer: 'Checking the units behind a formula is a sound reason for Gateshead teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Blaydon to Birtley, live online',
    intro: 'A laptop and a connection are all any home in the borough needs.',
    cells: [
      { h3: 'Their code, their keys', p: 'Tutors never type for the learner; they watch the shared screen and help with well-timed questions.' },
      { h3: 'A sensible first rung', p: 'Where a Year 3 or a Year 13 begins depends on what the trial shows as much as on the year, and the exam board is kept in mind.' },
      { h3: 'Opening lesson free', p: 'The trial costs nothing and ends with a clear recommendation.' },
      { h3: 'Same-stage classmates', p: 'Groups of five to ten UK learners at one level.' },
      { h3: 'Twice a week in term', p: 'School holidays stay free.' },
      { h3: 'Steady lesson hour', p: 'UK clock changes are absorbed by our tutors.' }
    ],
    spec: { title: 'Why the groups are online', p: 'Five Gateshead learners at one stage, free at the same hour, rarely live on one street. Online classes give each the right group.' }
  },

  fees: {
    h2: 'Gateshead fees',
    intro: 'Gateshead families pay the single rate we charge in every country outside India.',
    first: 'A full lesson at no cost, with a course suggestion afterwards.',
    group: 'Around eight live small-group lessons per month.',
    private: 'Around eight live one-to-one lessons per month.',
    closer: 'Fees are set in US dollars, not sterling. Billing starts only once the trial has agreed a course and a weekly slot; the pricing page covers holidays, absences and moving between formats.'
  },

  reviewsH2: 'Tyneside and UK families on Google',

  book: {
    h2: 'Book a free Gateshead lesson',
    intro: 'Tell us how old the learner is, or the year group, and one hobby. Trial ideas: a Scratch planet game, a first Python script, a short AI task, or computing Byrn\'s focal ratios.',
    success: 'Thank you. Your Gateshead request has arrived.'
  },

  faq: {
    h2: 'Gateshead questions',
    intro: 'Telescopes, local figures and lesson basics.',
    items: [
      { q: 'What is the population of Gateshead?', a: 'The 2021 census counted 196,151 in Gateshead borough; the ONS gives 115,280 for the Gateshead built-up area.' },
      { q: 'Can Gateshead learners take AI and programming classes online?', a: 'Yes. Learners from 6 to 67 across Gateshead join our live online AI, programming, Python and maths lessons.' },
      { q: 'What is the Newall telescope project?', a: 'Learners compute focal ratios for five great nineteenth-century telescopes listed by Edward W. Byrn, including the one set up at Gateshead in 1870.' },
      { q: 'What is a focal ratio?', a: 'A telescope\'s focal length divided by the width of its lens or mirror; lens telescopes of the period had much larger ratios.' },
      { q: 'Why did the first calculation go wrong?', a: 'It divided feet by inches; converting the 30-foot tube to 360 inches gives the real ratio of about 14.4.' },
      { q: 'Are lessons held in person?', a: 'No, all lessons are live online.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, in maths and computing, for understanding; we never promise grades.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67.' },
      { q: 'How much do lessons cost?', a: 'You pay nothing for the trial. A place in a class then costs USD 100 each month, and lessons alone with a tutor USD 150 each month.' },
      { q: 'Do lessons pause for school holidays?', a: 'Yes; send us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Gateshead',
    html: 'The wider county sits on our <a class="cg-inline-link" href="/coding-classes-in-tyne-and-wear">Tyne and Wear</a> page; <a class="cg-inline-link" href="/ai-and-programming-classes-in-middlesbrough">Middlesbrough</a> finds Captain Cook\'s Marton; the region is gathered under <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-east-england">North East England</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Gateshead and Tyne and Wear',
  footerPlaces: [
    { href: '/coding-classes-in-tyne-and-wear', label: 'Tyne and Wear' },
    { href: '/coding-and-ai-classes-in-north-east-england', label: 'North East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gat .cg-hero-grid { align-items: start; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-gat .cg-hero h1 { font-weight: 770; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-gat .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-gat .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gat .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-gat .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-gat .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gat .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-gat .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-gat .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Gateshead (E08000037). Nomis Census 2021 TS007A: total 196,151; 5 to 9 11,070 (5.6%, England 5.9%); 15 to 19 10,074 (5.1%, 5.7%); 20 to 24 10,411 (5.3%, 6.0%); 55 to 59 14,243 (7.3%, 6.7%); 60 to 64 12,555 (6.4%, 5.8%); 80 to 84 5,846 (3.0%, 2.5%). ONS 2021 BUAs: Gateshead 115,280; Blaydon 14,240; Birtley 13,835; Ryton 8,805; Rowlands Gill 5,255. Project Gutenberg 41538, Edward W. Byrn, The Progress of Invention in the Nineteenth Century: "Mr. R. S. Newall\'s telescope, set up at Gateshead by Cookes, of York, in 1870; object glass, 25 inches, tube, 30 feet"; Rosse "6 feet diameter, 54 feet focal length"; Foucault mirror "31½ inches", focal length "17¾ feet"; Common mirror "37½ inches", tube "20 feet"; Washington object glass "26 inches", tube "33 feet".',
    localProject: 'Focal ratio (length in inches / aperture in inches): Newall 14.4, Washington 15.2 (object glass, from tube); Rosse 9.0, Foucault 6.8 (mirror, true focal length); Common 6.4 (mirror, from tube). Unconverted feet over inches: 0.53 to 1.27. Lesson family: derived feature, unit conversion, mixed field definitions, two classes.',
    requiredMentions: [
      '115,280',
      '196,151',
      'Blaydon',
      'Birtley',
      'Newall',
      'focal ratio',
      'object glass',
      'Cookes',
      'Edward W. Byrn'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Gateshead and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Edward W. Byrn, The Progress of Invention in the Nineteenth Century (ebook 41538).', url: 'https://www.gutenberg.org/ebooks/41538' }
    ],
    rejectedClaims: [
      'Where the Newall telescope is today: not claimed.',
      'Angel of the North and bridge facts: Gateshead Council returned 403; not claimed.',
      'Modern telescope ratios or rankings: not claimed.',
      'Publication year 1900: from the book\'s own title page ("COPYRIGHTED, 1900, BY MUNN & CO.").',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none (Byrn\'s telescope costs are not quoted).'
    ]
  }
};
