'use strict';
// Neath Port Talbot (cg- county page, UK cluster Phase 7, row 295). One principal area. Spine: can warm air alone move air
// through a 732 metre mine? Anchor (read raw 26 September 2026): Cadw listed building record 11858, Grade II*, Cefn Coed
// Colliery, No. 1 Shaft Headframe, Crynant: "Cefn Coed Colliery was sunk in 1926-7 at that time being the deepest anthracite
// mine in the world with two shafts over 732m deep"; "began production of high-quality anthracite in 1930, employed over
// 900 men in 1945 and closed in 1968"; "Both structures are some 18m high, with winding sheaves still in place at their
// tops"; "tops the upcast shaft, which was connected underground to the nearby fan house"; "boxed in with steel plates in
// order to control ventilation and cause air to be drawn in down No 2 shaft"; reason: "one of two of the only surviving
// pre-war headframes in the anthracite coalfield". Museum established 1978 (record). No accident content used.
// Our model (computed inline; invented temperatures; ideal gas, 101,325 Pa, dry air, ignores density rise with depth):
// draught = g h (rho_down - rho_up), h = 732 m. 10 vs 15 C: 155 Pa. 10 vs 20: 305 Pa. 10 vs 25: 450 Pa (1.2467 vs 1.1839
// kg/m3). 0 vs 25: 778 Pa. Summer 25 surface vs 20 upcast: -145 Pa (reverses). Depth 100 m: 62 Pa; 300 m: 185 Pa. Bug:
// Celsius in the gas law gives densities 35.30 and 14.12 kg/m3 and a draught of 152,089 Pa.
// Lesson family: stack effect / natural ventilation draught with the ideal gas law; screened (stack effect, draught,
// natural ventilation, upcast, downcast: 0 hits).
// Place facts: ONS Census 2021 TS001 via Nomis: Neath Port Talbot W06000012 142,289. ONS built-up areas wholly or almost
// wholly inside (published; OA sums within 8): Neath 40,730; Port Talbot 31,555; Baglan 10,510; Pontardawe 5,540; Cwmavon
// 4,525; Glyn-neath 3,925; Gwaun-Cae-Gurwen 2,745; Alltwen 2,720; Cilfrew 2,180; Resolven 2,160. Straddling areas
// (Swansea, Clydach, Ystalyfera, Brynamman) not tabulated. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'NEATH PORT TALBOT', blurb: 'Neath, Port Talbot, Baglan and Pontardawe, and a Cefn Coed lesson on how warm air moves itself through a deep mine.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-neath-port-talbot',
  code: 'npt',
  accent: '#4C0B2E',
  accentRationale: 'Neath Port Talbot: a deep red-brick maroon from the solver (12.13:1 on the darkest paper tint), for the colliery engine house',
  pageType: 'governorate',
  place: {
    name: 'Neath Port Talbot',
    eyebrow: 'Neath Port Talbot',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'Swansea', href: '/best-coding-class-in-swansea' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Neath Port Talbot',
  title: 'Coding Classes in Neath Port Talbot | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Neath Port Talbot, for Neath, Port Talbot, Baglan, Pontardawe, Cwmavon, Glyn-neath and Resolven.',
  ogDescription: 'Coding classes for Neath Port Talbot, and a Cefn Coed project: use the gas law in Python to find how hard warm air pushes through a 732 metre shaft.',
  twitterDescription: 'Neath Port Talbot coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Neath Port Talbot',
    description: 'Online coding, Python, physics-flavoured maths and mathematics for children, teenagers and adults across Neath Port Talbot, placed by ability and taught live in English.'
  },

  h1: 'Coding classes in Neath Port Talbot',
  capsuleQ: 'What are the best coding classes in Neath Port Talbot?',
  capsule: 'Neath Port Talbot counted 142,289 residents in the 2021 census. Neath, at 40,730, and Port Talbot, at 31,555, are its two big towns, with Baglan above 10,000 and a string of valley places such as Pontardawe, Cwmavon, Glyn-neath and Resolven. Our teachers work from India and meet every learner on a live video call. Children from 6, teenagers and adults up to 67 study coding, Python or maths, either in a level-matched class of five to ten or alone with a tutor. It begins with one free lesson that fixes the right starting course. The local project climbs down a colliery shaft at Crynant. Carrying on costs USD 100 per month in a class, or USD 150 per month for private tuition.',
  lead: 'Cefn Coed Colliery was sunk in 1926 and 1927 with two shafts, both deeper than 732 metres, and Cadw records that it was then the deepest anthracite mine in the world. Its two steel lattice headframes, about 18 metres high, still stand at Crynant and are listed at Grade II*. The record explains something clever about the No. 1 frame: it sat over the upcast shaft, and its tower was boxed in with steel plates so that fresh air would be drawn down the other shaft instead. Hundreds of men needed that air. Warm air rises, so a deep shaft full of warmer air acts like a chimney and pulls cooler air through the workings on its own. How strong is that pull, and why did the colliery still need a fan house? The gas law answers both, in a few lines of Python.',
  wa: 'Hello Modern Age Coders, we are in Neath Port Talbot and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Neath Port Talbot',
    h2: 'Where Neath Port Talbot learners begin',
    intro: 'A Year 2 pupil in Glyn-neath who loves building blocks, a Year 7 in Baglan starting to type Python, a Year 10 in Neath with WJEC GCSE maths ahead, and an adult in Port Talbot learning to code after a shift. The free lesson finds the course for each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Scratch projects with rising bubbles, fans and moving air.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Density, temperature scales and formulas brought to life in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Deep secondary maths, from rearranging formulas to rates and graphs.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from a blank screen up to tools for engineering and data.' }
    ]
  },

  sections: [
    {
      id: 'neath-port-talbot', tint: '', eyebrow: 'The county borough in numbers',
      h2: '142,289 residents, two big towns',
      intro: 'The total is the ONS 2021 census count of usual residents, read through Nomis. The towns are ONS built-up areas that sit wholly, or all but wholly, inside the county borough.',
      body: [
        { kind: 'table', caption: 'Neath Port Talbot built-up areas of 2,000 or more residents, ONS 2021', head: ['Place', 'Residents', 'Place', 'Residents'], rows: [
          ['Neath', '40,730', 'Glyn-neath', '3,925'],
          ['Port Talbot', '31,555', 'Gwaun-Cae-Gurwen', '2,745'],
          ['Baglan', '10,510', 'Alltwen', '2,720'],
          ['Pontardawe', '5,540', 'Cilfrew', '2,180'],
          ['Cwmavon', '4,525', 'Resolven', '2,160']
        ] },
        { kind: 'p', text: 'Ystalyfera, Brynamman and the Swansea and Clydach areas cross the county boundary, so they are left out of the table rather than counted only in part. Our own output-area totals agree with each published figure to within eight residents. Schools across the county borough follow the Curriculum for Wales and enter pupils for WJEC GCSE and A level exams. We have not read the council\'s holiday list, so families simply tell us which weeks to skip.' },
        { kind: 'callout', h3: 'Swansea and WJEC help', p: 'Next door, <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> has a city page of its own. Exam support lives on <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a> and <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Neath Port Talbot project',
      h2: 'How hard does warm air push?',
      intro: 'Two columns of air, 732 metres tall, one slightly warmer than the other.',
      body: [
        { kind: 'p', text: 'Picture the two shafts as tall columns of air joined at the bottom. Warm air is lighter than cool air, so the cool column presses down harder and shoves air round and up the warm one. This is the stack effect, the same thing that makes a chimney draw. The learner codes the ideal gas law to find air density at each temperature, subtracts, and multiplies by gravity and the 732 metre depth. The temperatures below are our own guesses, not colliery readings, and the model skips the fact that air gets denser deeper down.' },
        { kind: 'table', caption: 'Our stack effect sums for a 732 metre shaft, sea-level air pressure, 26 September 2026', head: ['Downcast air', 'Upcast air', 'Natural draught', 'In water gauge'], rows: [
          ['10 C', '15 C', '155 Pa', '16 mm'],
          ['10 C', '20 C', '305 Pa', '31 mm'],
          ['10 C', '25 C', '450 Pa', '46 mm'],
          ['0 C, a cold winter day', '25 C', '778 Pa', '79 mm'],
          ['25 C, a hot summer day', '20 C', 'minus 145 Pa', 'flow reverses']
        ] },
        { kind: 'p', text: 'A difference of 15 degrees gives about 450 pascals, the weight of a 46 millimetre column of water. That is real, useful suction, and the deeper the shaft, the stronger it gets: the same temperatures give about 62 pascals at 100 metres and 185 at 300. But the last row shows the catch. On a hot day the surface air can be warmer than the air coming up, the push drops to nothing or runs backwards, and the mine would stop breathing. That is why the record mentions a fan house: a fan keeps the flow steady whatever the weather.' },
        { kind: 'p', text: 'The code also has a trap. The gas law needs temperature in kelvin, that is Celsius plus 273.15. Feed it Celsius instead and the program says air at 10 degrees is about 35 kilograms per cubic metre, nearly thirty times its real weight, and the draught comes out above 150,000 pascals. Learners write a check that any air density must sit near 1.2, so the slip is caught the moment it happens.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Watch paper spirals turn above a warm radiator, then animate rising warm air in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Code the density formula in Python and fill in the draught table for different temperatures.' },
          { h3: 'Ages 15 and up', p: 'Plot draught against depth and season, and test the kelvin check against deliberate mistakes.' }
        ] },
        { kind: 'callout', h3: 'Record facts, model weather', p: 'Depth, the upcast shaft, the steel boxing and the fan house all come from Cadw\'s record. The temperatures are ours, so the table explains how the principle works, not how much air Cefn Coed actually moved.' }
      ]
    },
    {
      id: 'cefn-coed', tint: 'deep', eyebrow: 'Why Cefn Coed',
      h2: 'A headframe that steered the air',
      intro: 'What Cadw\'s record of the No. 1 Shaft Headframe says.',
      body: [
        { kind: 'table', caption: 'Cefn Coed Colliery, No. 1 Shaft Headframe, Crynant, Cadw listed building record 11858, Grade II*', head: ['From the record', 'Detail'], rows: [
          ['Sunk', '1926 to 1927, two shafts over 732 m deep'],
          ['Claim', 'Then the deepest anthracite mine in the world'],
          ['Working life', 'Production from 1930, over 900 men in 1945, closed 1968'],
          ['Structure', 'Steel lattice girders, some 18 m high, winding sheaves still at the top'],
          ['Air', 'Upcast shaft boxed in with steel plates; air drawn down No 2 shaft; linked to a fan house'],
          ['Later', 'Cefn Coed Colliery Museum established in 1978']
        ] },
        { kind: 'p', text: 'Buoyancy-driven airflow is a live engineering topic well beyond mining. Designers of tall buildings, tunnels and data centres model the stack effect in software to decide where air will move without help and where fans must take over. A learner in Neath Port Talbot who has watched one formula flip sign between winter and summer already understands why engineers test models across every season.' },
        { kind: 'p', text: 'Modern Age Coders is not linked in any way to Cadw. Cadw holds the record; the draught arithmetic, and any slip in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From paper spirals to the gas law',
    intro: 'Treat these bands as a first guess; the trial lesson does the real placing.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Air on the move', p: 'Block projects about floating, rising and blowing things.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 5 to 8', h3: 'Formulas in code', p: 'Python with temperature scales, density and substitution.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Physics maths', p: 'Rearranging, rates and graphs alongside WJEC GCSE and A level study.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Practical Python', p: 'Adult Python from the first line to scripts for real work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and units',
    h2: 'An AI can write the gas law for you. Will it notice a density of 35?',
    intro: 'A chatbot types the formula fluently; checking the answer makes sense is still your job.',
    p1: 'Code assistants often produce physics functions that look perfect and quietly mix up units, such as Celsius where kelvin belongs. The program runs, prints a number, and nothing warns you that the air now weighs thirty times too much.',
    p2: 'A Neath Port Talbot student who has built a sanity check for air density knows to ask whether a number is even possible before trusting it.',
    closer: 'Catching an impossible number before it spreads is a strong reason for a Neath Port Talbot teenager to keep coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lessons in practice',
    h2: 'From Resolven to Baglan, lessons by video',
    intro: 'Anywhere in the county borough with a connection can join.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner does the typing; the teacher reads along on the shared screen and gives hints rather than answers.' },
      { h3: 'Placed the Welsh way', p: 'A Pontardawe Year 6 or a Neath Year 13 is placed by Welsh school year and progression step, and exams go by their WJEC names. We teach in English.' },
      { h3: 'Trial before fees', p: 'The opening lesson is free and ends with an honest course suggestion.' },
      { h3: 'Classes by level', p: 'Groups of five to ten who share a level, drawn from across the UK.' },
      { h3: 'During term', p: 'Usually two lessons weekly; school holidays stay free.' },
      { h3: 'Clock changes handled', p: 'We move with British Summer Time so your lesson hour on the kitchen clock never shifts.' }
    ],
    spec: { title: 'Why level beats postcode', p: 'In a valley village there may be one keen coder at a given level. Online groups put a Cilfrew or Gwaun-Cae-Gurwen learner alongside others who are exactly as far along.' }
  },

  fees: {
    h2: 'What Neath Port Talbot families pay',
    intro: 'Port Talbot and Pontardawe pay the same fee, as do families in every country we teach outside India.',
    first: 'One full trial lesson, free, then our advice.',
    group: 'Roughly eight classes each month with five to ten learners.',
    private: 'Roughly eight classes each month with a tutor of your own.',
    closer: 'Fees are in US dollars and nothing else; we give no sterling price. You are charged only once the trial has agreed a course and a regular slot, and our pricing page explains holidays, missed classes and moving between group and private.'
  },

  reviewsH2: 'Google ratings from our families',

  book: {
    h2: 'Book a free lesson in Neath Port Talbot',
    intro: 'Share the learner\'s age or school year and one thing they enjoy. The trial might be a Scratch animation, a first Python program, or the Cefn Coed air sums.',
    success: 'Thank you. We have your Neath Port Talbot request.'
  },

  faq: {
    h2: 'Neath Port Talbot questions',
    intro: 'The county borough, the colliery project and how lessons run.',
    items: [
      { q: 'What is the population of Neath Port Talbot?', a: 'At the 2021 census Neath Port Talbot had 142,289 usual residents.' },
      { q: 'Which are the biggest towns in Neath Port Talbot?', a: 'Among ONS 2021 built-up areas inside the county borough: Neath 40,730, Port Talbot 31,555 and Baglan 10,510.' },
      { q: 'What is the Cefn Coed project?', a: 'Learners use the ideal gas law in Python to find how hard warmer air in a 732 metre upcast shaft pulls fresh air through a mine, and why the pull fails in summer.' },
      { q: 'What is the stack effect?', a: 'The flow created when a column of warm, light air sits beside a column of cooler, heavier air, as in a chimney or a pair of mine shafts.' },
      { q: 'How deep was Cefn Coed Colliery?', a: 'Cadw\'s record says its two shafts, sunk in 1926 and 1927, were each over 732 metres deep.' },
      { q: 'Where are the lessons?', a: 'Online, by live video, so a learner in Glyn-neath and one in Baglan join the same way.' },
      { q: 'Can you help with WJEC GCSE subjects?', a: 'Yes: maths, Computer Science and Digital Technology. We build understanding and do not promise particular grades.' },
      { q: 'Who can join?', a: 'Children from 6, teenagers and adults up to 67, each on a course that fits.' },
      { q: 'What does it cost?', a: 'The trial is free. After it, a group costs USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Are there lessons in school holidays?', a: 'Not unless you ask. Give us your holiday weeks and we pause for them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'More pages for South Wales',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> has its own city page, <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> lifts loads with water and gravity, and <a class="cg-inline-link" href="/coding-classes-in-merthyr-tydfil-county-borough">Merthyr Tydfil</a> measures an iron bridge growing in the sun. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page lists every Welsh area we cover, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">United Kingdom</a> hub leads further afield.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Neath Port Talbot and South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/wjec-gcse-digital-technology-help-wales', label: 'WJEC GCSE Digital Technology' }
  ],

  personalityCss: `
.cg-root.cg-npt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-npt .cg-hero h1 { font-weight: 760; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-npt .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-npt .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-npt .cg-section-head h2 { max-width: 20ch; letter-spacing: -0.018em; }
.cg-root.cg-npt .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-npt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-npt .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-npt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-npt .cg-callout { border-left-width: 6px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Neath Port Talbot (W06000012). ONS Census 2021 TS001 via Nomis: 142,289. ONS built-up areas inside the county borough (published; OA sums within 8): Neath 40,730; Port Talbot 31,555; Baglan 10,510; Pontardawe 5,540; Cwmavon 4,525; Glyn-neath 3,925; Gwaun-Cae-Gurwen 2,745; Alltwen 2,720; Cilfrew 2,180; Resolven 2,160. Straddling (not tabulated): Swansea, Clydach, Ystalyfera, Brynamman. Cadw listed building record 11858, Grade II*, Cefn Coed Colliery No. 1 Shaft Headframe, Crynant: "sunk in 1926-7 at that time being the deepest anthracite mine in the world with two shafts over 732m deep"; "employed over 900 men in 1945 and closed in 1968"; "some 18m high, with winding sheaves still in place"; "tops the upcast shaft, which was connected underground to the nearby fan house"; "boxed in with steel plates in order to control ventilation and cause air to be drawn in down No 2 shaft"; museum established 1978.',
    localProject: 'Stack effect, draught = g h (rho_down - rho_up), h 732 m, ideal gas at 101,325 Pa, dry air. 10/15 C: 155 Pa; 10/20: 305; 10/25: 450 (1.2467 vs 1.1839 kg/m3); 0/25: 778; summer 25/20: -145. 100 m: 62 Pa; 300 m: 185 Pa. Celsius bug: 35.30 and 14.12 kg/m3, draught 152,089 Pa. Lesson family: stack effect / natural ventilation draught.',
    requiredMentions: [
      'Baglan',
      'Pontardawe',
      'Cwmavon',
      'Glyn-neath',
      'Gwaun-Cae-Gurwen',
      'Cilfrew',
      'Resolven',
      'Cefn Coed',
      'Crynant',
      'upcast shaft',
      'stack effect'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Neath Port Talbot, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 11858: Cefn Coed Colliery, No. 1 Shaft Headframe.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=11858' }
    ],
    rejectedClaims: [
      'Actual shaft air temperatures or airflow at Cefn Coed: not in the record; temperatures are ours.',
      'Colliery accidents and deaths: excluded, no disaster content.',
      'Museum opening times or current access: not read, not claimed.',
      'Margam Orangery "longest in Britain": considered, not used.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
