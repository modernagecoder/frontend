'use strict';
// Slough (cg- town page, UK cluster Phase 8, towns band A, row 314). Spine: how much more light did the world's largest
// telescope of its day gather than a human eye? Anchor (read raw 27 September 2026 from the Science Museum Group collection
// JSON): co56632, photographic print: "the only photograph ever taken of William Herschel's 40-foot telescope at Slough just
// prior to its dismantling in 1839. Completed in 1787, the massive reflecting telescope used a metal mirror four feet in
// diameter and weighing over a ton. A wonder of the age, it quickly became a landmark visited by the rich and famous";
// "one of 25 prints made from the first permanent negative taken by Sir John F.W. Herschel in 1839". co56400, Caroline
// Herschel's telescope: "6 1/8-inch diameter speculum mirror of 7-foot focal length"; "made by Sir William Herschel for his
// sister Caroline Herschel around 1795 when they lived in Slough"; "an astronomer in her own right having discovered eight
// comets"; "thought to be similar to the telescope that William Herschel used to discover the planet Uranus in 1781";
// "speculum metal, a bronze alloy with arsenic added for a more reflective surface".
// Our model (computed inline): light gathered scales with mirror area, the square of the diameter; magnitude gain =
// 5 log10(D1/D2). 40-foot (4 ft = 1,219.2 mm) vs Caroline's (6 1/8 in = 155.6 mm): diameter x7.84, area x61.4, 4.47 mag.
// 40-foot vs a 7 mm dark-adapted pupil (typical, hedged): x174, area x30,336, 11.20 mag. Caroline's vs pupil: x22.2, area
// x494, 6.73 mag. Slip: using the diameter ratio instead of the area ratio halves the gain (5.60 mag). Mirror and eyepiece
// losses ignored, said on the page. Diffraction (resolution) was Monmouthshire's lesson; this is light-gathering only.
// Lesson family: area scaling of light-gathering and the logarithmic magnitude scale; screened (magnitude scale, apparent
// magnitude, Pogson, light-gathering, Herschel: 0 hits).
// Place facts: Nomis Census 2021 TS007A (NM_2020_1), Slough E06000039: total 158,500; aged 4 and under 11,772 (7.4%;
// England 5.4%); 5 to 9 12,690 (8.0%; 5.9%); 10 to 14 12,823 (8.1%; 6.0%); 35 to 39 14,492 (9.1%; 6.7%); 85 and over 1,909
// (1.2%; 2.4%). Bands never summed. TS001 counts can differ by a person or two between tables (158,498 in another table):
// only TS007A is used. ONS 2021 BUAs inside the LAD: Slough BUA 166,855 (crosses the LAD boundary), Colnbrook 1,900, Poyle
// 1,735. No named schools, no term dates, no admissions advice (the 11+ page is separate).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'SLOUGH', blurb: 'A young town where Herschel built his giant 40-foot telescope, with a project on how much more light a bigger mirror collects.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-slough',
  code: 'slo',
  accent: '#210B4C',
  accentRationale: 'Slough: a deep night-sky violet from the solver (13.91:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Slough',
    eyebrow: 'Slough, Berkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Berkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Berkshire', href: '/coding-classes-in-berkshire' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Slough, England',
  title: 'Best Coding Classes in Slough | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Slough learners aged 6 to 67, from the town centre to Colnbrook and Poyle, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Slough, where Herschel built his 40-foot telescope, and a Python project on how much more light a four-foot mirror gathers than an eye.',
  twitterDescription: 'Slough coding and AI classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Slough Learners',
    description: 'Ability-placed online coding, Python, AI, physics-flavoured maths and mathematics for children, teenagers and adults in Slough, taught live in English.'
  },

  h1: 'Coding classes in Slough',
  capsuleQ: 'What are the best coding classes in Slough?',
  capsule: 'Slough has an unusually young population. At the 2021 census it had 158,500 residents, and children aged 5 to 9 made up 8.0 per cent of them against 5.9 per cent across England, with 10 to 14 year olds at 8.1 per cent against 6.0. It is also where William Herschel built his giant 40-foot telescope. Our teachers in India run each lesson live on camera, and learners anywhere from 6 to 67 can study coding, Python, AI or maths alone with a tutor or alongside five to nine others at their level. The first lesson is free and decides the right course. The Slough project measures how much light a giant mirror collects. Staying on costs USD 100 each month in a small class, or USD 150 each month with a personal tutor.',
  lead: 'In 1787 William Herschel finished a telescope at Slough so large it became a sight in its own right. The Science Museum Group\'s record describes it: a reflecting telescope with a metal mirror four feet across, weighing over a ton, visited by the rich and famous. It is known as the 40-foot telescope. His sister Caroline, an astronomer who discovered eight comets, used a much smaller instrument with a mirror six and an eighth inches across, made for her around 1795 while they lived in Slough. Why build something so enormous? Mostly to collect light: a bigger mirror catches more of it, and faint objects that are invisible to the eye appear. How much more light, exactly, and how much fainter could Herschel see? This page\'s project works it out in Python.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Slough.',

  picks: {
    eyebrow: 'Course picks for Slough',
    h2: 'Four courses for Herschel\'s town',
    intro: 'Choose by what the learner wants to build. Every course starts with a free live lesson, and no card details are needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with stars, telescopes and space games for the youngest learners.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and first AI ideas, including a program that compares mirrors and counts stars.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE depth and beyond, with logarithms and the telescope project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'University and adult', note: 'Python from zero for adults, up to scientific calculations and data work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Slough today',
      h2: 'A town full of children',
      intro: 'All figures are from the 2021 census age table TS007A, read through Nomis, and each age band is printed as published rather than added up.',
      body: [
        { kind: 'table', caption: 'Slough and England age shares, Census 2021 table TS007A', head: ['Age band', 'Slough residents', 'Share in Slough', 'Share in England'], rows: [
          ['Under 5', '11,772', '7.4%', '5.4%'],
          ['5 to 9', '12,690', '8.0%', '5.9%'],
          ['10 to 14', '12,823', '8.1%', '6.0%'],
          ['35 to 39', '14,492', '9.1%', '6.7%'],
          ['85 and over', '1,909', '1.2%', '2.4%']
        ] },
        { kind: 'p', text: 'Put together, those rows describe a borough of young families: many more primary and early secondary children than the national pattern, many more parents in their late thirties, and half the national share of the very old. The ONS also counts two small built-up areas inside the borough, Colnbrook with 1,900 residents and Poyle with 1,735, while the Slough built-up area itself, 166,855, spreads over the borough boundary. Schools follow the national curriculum for England, and families tell us their own term dates.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region, and families preparing for the local selective test can read our <a class="cg-inline-link" href="/11-plus-maths-tuition-slough">Slough 11+ maths</a> page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Slough project',
      h2: 'How much light does a four-foot mirror catch?',
      intro: 'Area goes up with the square of the width, and astronomers count brightness in logarithms.',
      body: [
        { kind: 'p', text: 'A telescope mirror is a light bucket. Double its diameter and its area, and so the light it gathers, goes up four times. The learner converts all three openings to millimetres: Herschel\'s four-foot mirror is 1,219 millimetres, Caroline\'s six and an eighth inches is about 156, and a dark-adapted human pupil is typically about 7, a textbook figure rather than a measurement. Squaring the ratio of diameters gives the ratio of light collected. Then comes the astronomer\'s scale: every factor of 100 in brightness is 5 steps of magnitude, so the gain in magnitudes is 5 times the logarithm of the diameter ratio.' },
        { kind: 'table', caption: 'Our light-gathering sums from the Science Museum Group mirror sizes, 27 September 2026', head: ['Comparison', 'Width ratio', 'Light gathered', 'Fainter by (magnitudes)'], rows: [
          ['Caroline\'s telescope vs the eye', '22 times', '494 times', '6.7'],
          ['40-foot telescope vs Caroline\'s', '7.8 times', '61 times', '4.5'],
          ['40-foot telescope vs the eye', '174 times', 'about 30,000 times', '11.2']
        ] },
        { kind: 'p', text: 'So the 40-foot telescope collected about thirty thousand times as much light as an eye, enough in principle to show objects more than eleven magnitudes fainter. Caroline\'s smaller instrument already gathered nearly five hundred times as much as an eye, which is one reason a patient observer with a modest telescope could find comets. The magnitudes also add up neatly: 6.7 plus 4.5 is 11.2, because logarithms turn multiplying into adding, and the learner\'s code checks that the two routes agree.' },
        { kind: 'p', text: 'The slip is forgetting the square. Compare widths instead of areas and the 40-foot telescope seems only 174 times better, worth 5.6 magnitudes instead of 11.2. Learners test that doubling the width must quadruple the light. Our sums also ignore losses: metal mirrors, eyepieces and the air all waste some light, so real gains were smaller, and seeing fine detail is a separate matter of resolution. The record facts come from the Science Museum Group; the arithmetic is ours.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Compare the area of small and large paper circles, then build a Scratch game where bigger buckets catch more falling stars.' },
          { h3: 'Ages 11 to 15', p: 'Convert inches and feet to millimetres in Python, square the ratios and print the light table.' },
          { h3: 'Ages 15 and up', p: 'Use logarithms for magnitudes, check that the gains add, and write the test that catches the missing square.' }
        ] },
        { kind: 'callout', h3: 'Museum records, our arithmetic', p: 'Mirror sizes, dates and the history come from the Science Museum Group\'s collection records. The pupil size is a typical textbook figure, and every ratio in the table is our own calculation.' }
      ]
    },
    {
      id: 'herschel', tint: 'deep', eyebrow: 'Why Herschel',
      h2: 'Slough\'s giant telescope',
      intro: 'What the Science Museum Group records say.',
      body: [
        { kind: 'table', caption: 'William and Caroline Herschel\'s telescopes at Slough, Science Museum Group collection records co56632 and co56400', head: ['Record detail', 'What it says'], rows: [
          ['The 40-foot telescope', 'Completed in 1787 at Slough, with a metal mirror four feet across weighing over a ton'],
          ['Its fame', 'A wonder of the age and a landmark visited by the rich and famous'],
          ['Its end', 'Photographed by Sir John Herschel just before it was dismantled in 1839, the only photograph ever taken of it'],
          ['Caroline\'s telescope', 'A 6 1/8-inch speculum mirror of 7-foot focal length, made around 1795 when they lived in Slough'],
          ['Caroline Herschel', 'An astronomer in her own right who discovered eight comets'],
          ['A family likeness', 'Thought similar to the telescope William used to discover Uranus in 1781']
        ] },
        { kind: 'p', text: 'The same squaring rule designs modern telescopes, camera sensors, solar panels and radio dishes: collecting area sets how much signal arrives. Engineers still quote brightness, loudness and signal strength on logarithmic scales because they turn huge ratios into manageable numbers. A Slough learner who has turned a four-foot mirror into eleven magnitudes has met both ideas at once.' },
        { kind: 'p', text: 'Modern Age Coders is independent of both the Science Museum Group and the ONS. The records are theirs; the calculations on this page, and any errors, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From star games to logarithms',
    intro: 'Rough year bands only; the free lesson finds the right start.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Space and shapes', p: 'Block coding with circles, stars and simple space games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Area and units', p: 'Python with unit conversions, areas and ratios.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Logs and science', p: 'Logarithms, powers and scientific computing alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python from zero', p: 'Adult Python, from first lines to scientific scripts.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scale',
    h2: 'An AI can compare two telescopes. Will it square the ratio?',
    intro: 'A missing square halves the answer and still looks plausible.',
    p1: 'Ask a chatbot how much better a big telescope is than a small one and it may compare diameters, not areas, or mix up magnitudes and brightness. The answer arrives in confident sentences either way.',
    p2: 'A Slough learner who has tested that doubling the width quadruples the light knows to check the scaling rule behind any comparison.',
    closer: 'Spotting a missing square in a confident answer is a habit a Slough teenager builds by writing code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From the town centre to Colnbrook, online',
    intro: 'Every part of the borough joins by live video.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'Learners type their own programs while the teacher watches the shared screen and helps with questions.' },
      { h3: 'School years in England', p: 'A Year 4 or a Year 12 in Slough is placed by year group and key stage, with each exam board\'s own names.' },
      { h3: 'Free trial', p: 'One full lesson at no cost, then a clear recommendation.' },
      { h3: 'Grouped by stage', p: 'A class holds five to ten learners who are at the same point, living anywhere in Britain.' },
      { h3: 'Through the school year', p: 'Lessons run twice weekly while schools are open and stop for the holidays.' },
      { h3: 'UK clock kept', p: 'Your lesson keeps its UK time when the clocks change; our teachers adjust.' }
    ],
    spec: { title: 'Why groups mix towns', p: 'Even in a young town, five learners at the same level and free at the same hour are rarely neighbours. Online groups put a Slough learner with exactly the right classmates.' }
  },

  fees: {
    h2: 'Fees in Slough',
    intro: 'Slough pays the same fee as everywhere else we teach outside India.',
    first: 'A full free lesson with a clear next step.',
    group: 'About eight lessons a month in a class of five to ten.',
    private: 'About eight lessons a month with your own tutor.',
    closer: 'Fees are in US dollars only; we do not quote sterling. We ask for nothing until the trial has matched a course and a regular weekly slot; breaks, absences and moving between group and one-to-one are all explained on the pricing page.'
  },

  reviewsH2: 'What Slough-area families say on Google',

  book: {
    h2: 'Book a free Slough lesson',
    intro: 'An age or school year and one favourite hobby is all we need. The trial could be a Scratch space game, a first Python program, or the Herschel telescope sums.',
    success: 'Thank you. Your Slough request has arrived.'
  },

  faq: {
    h2: 'Slough questions',
    intro: 'The town, the telescope project and the practical details.',
    items: [
      { q: 'How many people live in Slough?', a: 'The 2021 census age table records 158,500 residents in the Borough of Slough.' },
      { q: 'Is Slough a young place?', a: 'Yes. Children aged 5 to 9 are 8.0 per cent of residents against 5.9 per cent in England, on the 2021 census.' },
      { q: 'What is the Slough telescope project?', a: 'Learners compare Herschel\'s four-foot mirror, Caroline Herschel\'s six-inch one and the human eye in Python, using areas and the magnitude scale.' },
      { q: 'What was the 40-foot telescope?', a: 'A reflecting telescope with a four-foot metal mirror that William Herschel completed at Slough in 1787, according to the Science Museum Group.' },
      { q: 'How much more light did it gather than an eye?', a: 'About thirty thousand times as much, on our sums using a typical 7 mm pupil and ignoring losses.' },
      { q: 'Are the classes held in Slough?', a: 'All lessons are online, so learners join from home anywhere in the borough.' },
      { q: 'Is there support for GCSE and A level?', a: 'Yes, maths and computing for exam years, focused on genuine understanding; no tutor can honestly promise a grade, and we do not.' },
      { q: 'What ages do you teach?', a: 'Anyone from six years old up to 67, each on a course matched to their level.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the trial lesson; afterwards USD 100 per month in a class, or USD 150 per month for private tuition.' },
      { q: 'Do lessons run in school holidays?', a: 'Lessons pause for school breaks; just send us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Slough',
    html: 'Our <a class="cg-inline-link" href="/coding-classes-in-berkshire">Berkshire</a> page covers the county, <a class="cg-inline-link" href="/coding-classes-in-buckinghamshire">Buckinghamshire</a> next door has its own project, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the whole region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Slough and Berkshire',
  footerPlaces: [
    { href: '/coding-classes-in-berkshire', label: 'Berkshire' },
    { href: '/11-plus-maths-tuition-slough', label: 'Slough 11+ maths' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' }
  ],

  personalityCss: `
.cg-root.cg-slo .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-slo .cg-hero h1 { font-weight: 725; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-slo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-slo .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-slo .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-slo .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-slo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-slo .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-slo .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-slo .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Slough (E06000039). Nomis Census 2021 TS007A: total 158,500; under 5 11,772 (7.4%, England 5.4%); 5 to 9 12,690 (8.0%, 5.9%); 10 to 14 12,823 (8.1%, 6.0%); 35 to 39 14,492 (9.1%, 6.7%); 85 and over 1,909 (1.2%, 2.4%). ONS 2021 BUAs: Slough 166,855 (crosses the boundary), Colnbrook 1,900, Poyle 1,735. Science Museum Group co56632: "the only photograph ever taken of William Herschel\'s 40-foot telescope at Slough just prior to its dismantling in 1839. Completed in 1787, the massive reflecting telescope used a metal mirror four feet in diameter and weighing over a ton"; co56400: Caroline Herschel\'s "6 1/8-inch diameter speculum mirror of 7-foot focal length", made "around 1795 when they lived in Slough"; "discovered eight comets"; "similar to the telescope that William Herschel used to discover the planet Uranus in 1781".',
    localProject: 'Light-gathering = (D1/D2)^2; magnitudes = 5 log10(D1/D2). 1,219.2 mm vs 155.6 mm: x7.84, x61.4, 4.47 mag. 1,219.2 vs 7 mm pupil: x174, x30,336, 11.20. 155.6 vs 7: x22.2, x494, 6.73. Slip: width ratio only, 5.60 mag. Losses ignored. Lesson family: area scaling and the logarithmic magnitude scale.',
    requiredMentions: [
      'Colnbrook',
      'Poyle',
      '40-foot telescope',
      'Caroline Herschel',
      'William Herschel',
      'speculum',
      'light-gathering',
      'magnitudes',
      '158,500'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Slough and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Science Museum Group collection, photographic print of Herschel\'s 40-foot telescope (co56632).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co56632' },
      { claim: 'Science Museum Group collection, Caroline Herschel\'s telescope (co56400).', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co56400' }
    ],
    rejectedClaims: [
      'Limiting magnitudes actually reached by Herschel: not claimed; gains are ours and ignore losses.',
      'The exact pupil size of any observer: a typical 7 mm figure, labelled.',
      'Named schools, admissions and school term dates: none named or read; the 11+ page is separate.',
      'Heathrow, trading estate and employer facts: not used.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
