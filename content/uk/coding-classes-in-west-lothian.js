'use strict';
// West Lothian (cg- council area page, UK cluster Phase 7, row 282, the last Scottish council area). One council. Spine:
// how do five tipping points make a heap with five lobes? Anchors (read raw 26 September 2026): Historic Environment
// Scotland scheduled monument SM6254, Five Sisters, shale bing SE of Mid Breich: "a substantial shale bing, the evidence of
// former extraction and processing of oil-shale"; "The Five Sisters bing is the best-known example of a shale bing. It is
// of rather unusual form, with five distinct lobes formed by the method of tipping employed"; "the most widely-known
// reminder of the important pioneering oil industry based on the mining of the West Lothian shales"; "It is an element in
// the 'Paraffin Young' industrial heritage trail". SM6186, Greendykes shale bing, Broxburn: "The bing is a waste heap
// composed of residue from the destructive distillation of shale to extract oil"; "about 920m from W of N to E of S by
// 580m from E to W"; "its pioneer, James Young, developed refining techniques still used in the oil industry"; "the
// Broxburn Oil Co, active from the 1860s to c. 1940".
// Our model (scratchpad wlo/heap.py; everything invented): 161 x 161 grid; a grain dropped at a tipping point slides to
// its lowest neighbour while the step down is at least T = 2; 40,000 grains. One point: peak 62, width 61 cells, slope
// 2.03 per cell, 1,918 cells covered; reach 30 cells along the axes but 15 diagonal steps (21.2 cells), a diamond, an
// artefact of four-direction moves. Five points 30 cells apart: five peaks of 36 each, saddles of 6 between, five lobes;
// 3,252 cells covered. Five points 10 apart: peaks 39, 44, 44, 44, 39, saddles 32 to 34, a single ridge. Mean slide per
// grain: 4.5 cells (first 1,000), 16.1 (grains 19,001 to 20,000), 19.6 (last 1,000), max 31. Grains conserved (40,000).
// An abelian sandpile was tried first and rejected: its cell values stay 0 to 3, so it cannot show a heap's shape.
// Lesson family: granular heap simulation, angle of repose, grid artefacts; screened (sandpile, avalanche, angle of
// repose, topple: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: West Lothian S12000040 181,300; 79,800 households; 423.9
// per square kilometre; 0 to 14 31,500 (17.4 per cent), 65+ 31,700 (17.5 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WEST LOTHIAN', blurb: 'Livingston, Bathgate, Linlithgow and Broxburn, and a Five Sisters lesson on how tipping from five points builds five lobes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-west-lothian',
  code: 'wlo',
  accent: '#7A4B43',
  accentRationale: 'West Lothian: a burnt-shale brown from the solver (5.81:1 on the darkest paper tint), pinker than the Borders stone and softer than the Fife red',
  pageType: 'governorate',
  place: {
    name: 'West Lothian',
    eyebrow: 'West Lothian',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Edinburgh', href: '/best-coding-class-in-edinburgh' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'West Lothian',
  title: 'Coding Classes in West Lothian | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across West Lothian, from Livingston, Bathgate and Broxburn to Linlithgow, Armadale, Whitburn and East Calder.',
  ogDescription: 'Coding classes for all of West Lothian, and a Five Sisters project: tip grains from five points in a Python simulation and watch a heap grow five lobes.',
  twitterDescription: 'West Lothian coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for West Lothian',
    description: 'Ability-placed online coding, Python, simulation and mathematics for children, teenagers and adults across West Lothian, taught live in English.'
  },

  h1: 'Coding classes in West Lothian',
  capsuleQ: 'What are the best coding classes in West Lothian?',
  capsule: 'West Lothian had about 181,300 residents in roughly 79,800 households at the 2022 census, at 423.9 people per square kilometre. Livingston is by far the largest town, followed by Bathgate, Broxburn, Linlithgow, Armadale and Whitburn, with East Calder, Fauldhouse and Winchburgh among the smaller places. Lessons are live on video with teachers in India, and a free first lesson places each learner at the right stage, from P1 to S6 or as an adult. Coding, Python and maths are taught to people from six up to 67, individually or in small classes of five to ten. The West Lothian project starts with a famous heap of shale. West Lothian families who stay on pay a monthly USD 100 for a shared class, or USD 150 for a tutor to themselves.',
  lead: 'Historic Environment Scotland names the Five Sisters as the most widely known shale bing, a heap of waste left from the oil-shale industry that James Young pioneered. It has an unusual form, with five distinct lobes that the record says were formed by the method of tipping. Other bings are huge: the scheduled area at Greendykes near Broxburn measures about 920 by 580 metres. How does tipping create a shape? Every grain dropped on a heap either stays or slides downhill until the slope is gentle enough, and those simple rules, repeated thousands of times, build cones, ridges and lobes. This page\'s project simulates it in Python.',
  wa: 'Hello Modern Age Coders, we are in West Lothian and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for West Lothian',
    h2: 'Where West Lothian learners start',
    intro: 'A P2 in Livingston who loves sandpits, a P6 in Bathgate ready to type code, an S4 in Linlithgow studying National 5, and an adult in Broxburn moving into data work. Each one begins with a free trial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with falling objects, piles and simple physics rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, with grids, loops and small simulations.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including 2D grids and simulation.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis for adults, from spreadsheets to Python models and charts.' }
    ]
  },

  sections: [
    {
      id: 'west-lothian', tint: '', eyebrow: 'West Lothian figures',
      h2: 'About 181,300 people in West Lothian',
      intro: 'The council total is a rounded first result from Scotland\'s 2022 census, published by National Records of Scotland. Town figures are NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'West Lothian localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Livingston', '56,840', 'East Calder', '6,430'],
          ['Bathgate', '23,600', 'Blackburn', '5,730'],
          ['Broxburn', '15,970', 'Fauldhouse', '4,900'],
          ['Linlithgow', '12,840', 'Winchburgh', '3,840'],
          ['Armadale', '12,720', 'Mid Calder', '3,300'],
          ['Whitburn', '11,490', 'West Calder', '3,250']
        ] },
        { kind: 'p', text: 'West Lothian has 423.9 residents per square kilometre, about six times the Scottish 69.8. It is a young council area by Scottish standards: our sums of the census age bands give 17.4 per cent of residents under 15, above Scotland\'s 15.3, and 17.5 per cent aged 65 or over, well below the national 20.1. Holiday weeks are set by West Lothian Council; rather than guess them, we take each family\'s dates.' },
        { kind: 'callout', h3: 'Edinburgh and exams', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> page covers the capital. For qualifications: <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Lothian project',
      h2: 'Forty thousand grains, five tipping points',
      intro: 'A grid, a slide rule for grains, and shapes nobody programmed.',
      body: [
        { kind: 'p', text: 'The heap is imaginary. The ground is a grid of 161 by 161 squares, each holding a column of grains. A grain is dropped at a tipping point and then obeys one rule: if a neighbouring square is at least two grains lower, it slides to the lowest such neighbour, and keeps going until no step down is that steep. Real spoil settles at a natural slope called the angle of repose; the rule builds the same idea into the grid. The learner drops 40,000 grains, first all at one point and then shared among five points in a row, and prints the heights.' },
        { kind: 'table', caption: 'Our simulated heaps, 40,000 grains each, 26 September 2026', head: ['Tipping plan', 'What forms', 'Peak height', 'Low point between peaks'], rows: [
          ['One point', 'A single cone, 61 squares wide', '62', 'Not applicable'],
          ['Five points, 30 squares apart', 'Five separate lobes', '36 each', '6'],
          ['Five points, 10 squares apart', 'One long ridge', '39 to 44', '32 to 34']
        ] },
        { kind: 'p', text: 'The results match the idea in the record. Tipping from one place builds one cone whose sides settle at exactly the slope the rule allows, about 2 grains per square. Tipping from five places far enough apart builds five lobes, each about 36 grains high with shallow saddles between. Bring the points closer and the lobes merge into a single ridge with only slight bumps. The shape of the heap is written in the tipping plan, even though no line of code mentions lobes.' },
        { kind: 'p', text: 'Then the learner looks harder and finds a surprise. The single heap reaches 30 squares from its centre along the grid lines but only about 21 squares along the diagonals: it is shaped like a diamond, not a circle. A real heap tipped from one point is roughly round. The diamond comes from the model letting grains slide only north, south, east or west, a grid artefact, and fixing it means adding diagonal moves with the right distances. The learner also finds that late grains travel much further, about 20 squares on average against 4 or 5 at the start, because they must run down a much larger slope.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Pour dry rice from one cup and then from five, compare the shapes, and code falling grains in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Build the grain-sliding rule on a grid in Python and print a heap as a picture of numbers.' },
          { h3: 'Ages 15 and up', p: 'Run the five-point and ridge experiments, detect the diamond artefact, and add diagonal moves to fix it.' }
        ] },
        { kind: 'callout', h3: 'Real bing, model heaps', p: 'The Five Sisters and Greendykes descriptions come from Historic Environment Scotland records. The grid, the rule, the grain counts and every result are invented for teaching and say nothing about how the real bings were tipped or measured.' }
      ]
    },
    {
      id: 'five-sisters', tint: 'deep', eyebrow: 'Why the Five Sisters',
      h2: 'A heap that remembers an industry',
      intro: 'What the scheduled monument records say.',
      body: [
        { kind: 'table', caption: 'Five Sisters (SM6254) and Greendykes (SM6186) shale bings, Historic Environment Scotland', head: ['Record detail', 'What it says'], rows: [
          ['What a bing is', 'A waste heap of residue from the destructive distillation of shale to extract oil'],
          ['Five Sisters form', 'Rather unusual, with five distinct lobes formed by the method of tipping'],
          ['Five Sisters importance', 'The most widely known reminder of the pioneering West Lothian shale oil industry'],
          ['Greendykes size', 'A scheduled area about 920 metres by 580 metres'],
          ['Greendykes operator', 'The Broxburn Oil Company, active from the 1860s to about 1940'],
          ['Pioneer', 'James Young, whose refining techniques are still used in the oil industry']
        ] },
        { kind: 'p', text: 'Simulations built from tiny local rules explain landslides, snowdrifts, sand dunes, grain silos and the way powders flow in factories. They also teach a lasting lesson about models: every model has artefacts, like the diamond-shaped heap, and good modellers look for them before trusting a picture. A West Lothian pupil who has caught one has a skill that carries into any simulation.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland or West Lothian Council. The records\' facts are theirs; the heap simulation and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From pouring rice to grid simulations',
    intro: 'The stages are a guide; the free trial settles the real starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Falling and piling', p: 'Block coding with falling sprites and simple rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Grids and loops', p: 'Typed Python with 2D lists and step-by-step rules.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Simulation and modelling', p: 'Larger simulations beside National 5, Higher and Advanced Higher courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Models and data', p: 'Python and data analysis for adults working with models.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and models',
    h2: 'An AI can write a heap simulation in seconds. Will it notice the heap is a diamond?',
    intro: 'Model artefacts hide in plain sight.',
    p1: 'Ask a chatbot for a sand-pile simulation and it will happily produce a grid and a rule, and the pictures will look like piles. Whether the heaps come out diamond-shaped because of the grid, and whether that matters for your question, is something it rarely raises.',
    p2: 'A West Lothian learner who has measured a heap along the axis and the diagonal knows to test a model for artefacts before believing it. That is the kind of checking AI-built models need.',
    closer: 'A model that looks right can still be wrong in shape, and catching that is a reason for West Lothian teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From Linlithgow to West Calder, lessons at home',
    intro: 'Every town and village in West Lothian joins by video in the same way.',
    cells: [
      { h3: 'Learner at the keys', p: 'Pupils write and run their own code; the teacher follows the shared screen and steps in when needed.' },
      { h3: 'Stages you already know', p: 'An Armadale P4 or a Whitburn S3 hears the Curriculum for Excellence names used at school, up to Advanced Higher. Lessons are in English.' },
      { h3: 'Trial lesson, free', p: 'One complete lesson with no charge, then honest advice.' },
      { h3: 'Classes by stage', p: 'Five to ten learners sharing a stage, from several countries.' },
      { h3: 'Two a week in term', p: 'Lessons run through term and pause for the holidays.' },
      { h3: 'UK time throughout', p: 'Your slot stays at its UK time as the clocks change; the teachers in India time adjust.' }
    ],
    spec: { title: 'Why groups span towns', p: 'Even in Livingston, five learners at one stage free at the same hour are hard to find. Grouping by stage across a wider pool gives a pupil in Fauldhouse or Winchburgh a class that fits.' }
  },

  fees: {
    h2: 'Fees in West Lothian',
    intro: 'Bathgate or Mid Calder, the fee is the same, as in every country we teach outside India.',
    first: 'A full free trial, then a clear recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with your own teacher.',
    closer: 'Every fee is quoted in US dollars, never sterling. Once the trial has settled a course and a weekday, invoices begin; the pricing page answers questions about breaks, absences and moving between formats.'
  },

  reviewsH2: 'Google star ratings from learners',

  book: {
    h2: 'Book a free West Lothian lesson',
    intro: 'Send a note with the learner\'s age or stage and a favourite pastime. The trial could then be a Scratch game, a first Python grid, or the heap simulation on this page.',
    success: 'Thank you. Your West Lothian request has been received.'
  },

  faq: {
    h2: 'West Lothian questions',
    intro: 'The council area, the Five Sisters project and practical points.',
    items: [
      { q: 'What is the population of West Lothian?', a: 'About 181,300 residents in roughly 79,800 households, from NRS\'s rounded 2022 census results.' },
      { q: 'What are the biggest towns in West Lothian?', a: 'NRS mid-2020 estimates: Livingston 56,840, Bathgate 23,600, Broxburn 15,970, Linlithgow 12,840 and Armadale 12,720.' },
      { q: 'What is the Five Sisters project?', a: 'Learners simulate 40,000 grains tipped from one or five points on a grid in Python, see five separate lobes form when the points are far apart, and discover that their model makes diamond-shaped heaps.' },
      { q: 'What is the angle of repose?', a: 'The steepest slope at which loose material such as sand or spoil stays put. Add more and it slides until the slope is back to that angle.' },
      { q: 'What is a shale bing?', a: 'Historic Environment Scotland describes it as a waste heap of residue from the destructive distillation of shale to extract oil.' },
      { q: 'Are lessons held in Livingston?', a: 'No venue is involved: a pupil in Fauldhouse and one in Linlithgow both join from home by video.' },
      { q: 'Do you teach National 5 Computing Science?', a: 'Yes, and Higher too, with maths at both levels. We teach understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'Anyone between six and 67: block coding suits the youngest, Python and exam maths suit secondary pupils, and adults often choose Python with data.' },
      { q: 'How much are lessons?', a: 'There is no charge for the trial. Afterwards, group tuition is USD 100 monthly and one-to-one USD 150 monthly.' },
      { q: 'Do you pause for school holidays?', a: 'Yes. Let us know your school\'s holiday weeks and we leave them free.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Around West Lothian',
    html: '<a class="cg-inline-link" href="/coding-classes-in-falkirk">Falkirk</a> grows seeds at the golden angle, <a class="cg-inline-link" href="/coding-classes-in-midlothian">Midlothian</a> finds sunlit faces on a sundial, and <a class="cg-inline-link" href="/best-coding-class-in-edinburgh">Edinburgh</a> has its own page. See every council on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Lothian and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-edinburgh', label: 'Edinburgh' },
    { href: '/national-5-computing-science-help', label: 'National 5 Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-wlo .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-wlo .cg-hero h1 { font-weight: 700; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wlo .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wlo .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wlo .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-wlo .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-wlo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wlo .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-wlo .cg-ladder-col { border-left: 5px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-wlo .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Lothian (S12000040), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 181,300 (females 92,700, males 88,700); households 79,800; density 423.9 per square kilometre (Scotland 69.8); ages 0 to 14 31,500 (17.4 per cent), 65+ 31,700 (17.5 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Livingston 56,840; Bathgate 23,600; Broxburn 15,970; Linlithgow 12,840; Armadale 12,720; Whitburn 11,490; East Calder 6,430; Blackburn 5,730; Fauldhouse 4,900; Winchburgh 3,840; Mid Calder 3,300; West Calder 3,250. HES SM6254, Five Sisters, shale bing: "The Five Sisters bing is the best-known example of a shale bing. It is of rather unusual form, with five distinct lobes formed by the method of tipping employed"; "the most widely-known reminder of the important pioneering oil industry based on the mining of the West Lothian shales"; "\'Paraffin Young\' industrial heritage trail". HES SM6186, Greendykes shale bing, Broxburn: "a waste heap composed of residue from the destructive distillation of shale to extract oil"; "about 920m ... by 580m"; "James Young, developed refining techniques still used in the oil industry"; "the Broxburn Oil Co, active from the 1860s to c. 1940".',
    localProject: 'Grid 161 x 161, slide while step >= 2, 40,000 grains. One point: peak 62, width 61, slope 2.03, 1,918 cells; axis reach 30, diagonal 15 steps (21.2 cells) = diamond artefact. Five points 30 apart: peaks 36 x5, saddles 6, 3,252 cells. Ten apart: peaks 39/44/44/44/39, saddles 32-34. Mean slide 4.5, 16.1, 19.6 (max 31). Abelian sandpile rejected (values stay 0-3). Lesson family: granular heap simulation, angle of repose, grid artefacts.',
    requiredMentions: [
      '181,300',
      '79,800',
      '423.9',
      'Bathgate',
      'Broxburn',
      'Linlithgow',
      'Armadale',
      'Whitburn',
      'East Calder',
      'Fauldhouse',
      'Winchburgh',
      'Five Sisters',
      'SM6254',
      'shale bing',
      'angle of repose'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, SM6254: Five Sisters, shale bing SE of Mid Breich.', url: 'https://portal.historicenvironment.scot/designation/SM6254' },
      { claim: 'Historic Environment Scotland, SM6186: Greendykes, shale bing, Broxburn.', url: 'https://portal.historicenvironment.scot/designation/SM6186' }
    ],
    rejectedClaims: [
      'Height, volume or tipping details of the real Five Sisters: not in the record, not claimed.',
      'Current land use or access to the bings: not claimed.',
      'Linlithgow Palace facts: not researched for this page.',
      'Health or environmental effects of shale oil: excluded.',
      'Named West Lothian schools and school term dates: none named or read.',
      'Directions or distances between towns: not claimed.'
    ]
  }
};
