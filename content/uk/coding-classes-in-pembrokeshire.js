'use strict';
// Pembrokeshire (cg- county page, UK cluster Phase 7, row 296). One principal area. Spine: when could a tide mill grind?
// Anchor (read raw 26 September 2026): Cadw listed building record 6038, Grade II*, French Mill and Tidal Barrier, Carew:
// "The first mention of mills here is in 1541"; "In 1615 there is mention of a causeway with floodgates"; "at high tide
// shipping used the causeway as a wharf"; Rex Wailes "described the two undershot wheels ... both 4.8 m diameter, one
// 1.65 m and the other 2.1 m wide; each drove three pairs of stones"; "He also reported that the mills were semi-tidal";
// "It ceased production in 1937"; "The mill is the only remaining tidal mill in Wales"; "opened to the public in 1985
// after restoration"; name perhaps from "imported French millstones".
// Our model (computed inline, 1-minute steps; every number invented): sea = (range/2) cos(2 pi t / 12.42 h); one-way gates
// fill the pond while the sea is higher; wheels draw a fixed 2 m3/s while pond minus sea >= 0.6 m; pond 20,000 m2, bed 1 m
// below mean sea level. Grinding per tide: range 2.5 m 5.0 h; 4.0 m 6.7 h; 6.0 m 7.78 h (hourly steps say 8.0, 15-minute
// steps 7.75). Pond of 60,000 m2: 7.0 / 8.17 / 8.95 h. Start times with high water at midnight on day 1, range 4 m:
// 01:35, 14:00, 02:25, 14:50, 03:16, 15:41, 04:06, 16:31 (about 50 minutes later each day). Bug: gates without the one-way
// check let the pond drain back to the sea, so the mill never grinds.
// Lesson family: tide mill time-stepping simulation with state (one-way gates), step size, lunar drift; screened
// (Newham used CAA passengers, Merton polygon tilings; Liverpool/Gloucester/Southend tide lessons are gauge signal analysis).
// Place facts: ONS Census 2021 TS001 via Nomis: Pembrokeshire W06000009 123,360. ONS built-up areas (published; OA sums
// within 4): Milford Haven 14,250; Haverfordwest 12,085; Pembroke Dock 9,655; Pembroke 7,965; Tenby 4,090; Fishguard 3,420;
// Neyland 3,250; Saundersfoot 2,515; Narberth 2,365; Merlin's Bridge 2,220; Goodwick 2,020. No Welsh-language statistics.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'PEMBROKESHIRE', blurb: 'Milford Haven, Haverfordwest, Pembroke Dock and Tenby, and a Carew lesson simulating a mill that waits for the tide.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-pembrokeshire',
  code: 'pem',
  accent: '#4C3240',
  accentRationale: 'Pembrokeshire: a slate-plum from the solver (9.21:1 on the darkest paper tint), like wet limestone at low water',
  pageType: 'governorate',
  place: {
    name: 'Pembrokeshire',
    eyebrow: 'Pembrokeshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'St Davids', href: '/best-coding-class-in-st-davids' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Pembrokeshire',
  title: 'Coding Classes in Pembrokeshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes for all of Pembrokeshire: Milford Haven, Haverfordwest, Pembroke Dock, Tenby, Saundersfoot and Goodwick.',
  ogDescription: 'Pembrokeshire coding classes and a Carew project: simulate a tide mill in Python, find its grinding hours on big and small tides, and watch them drift each day.',
  twitterDescription: 'Pembrokeshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Pembrokeshire',
    description: 'Online coding, Python, simulation and mathematics for children, teenagers and adults across Pembrokeshire, with learners placed by level and taught live in English.'
  },

  h1: 'Coding classes in Pembrokeshire',
  capsuleQ: 'What are the best coding classes in Pembrokeshire?',
  capsule: 'There were 123,360 people living in Pembrokeshire on census day 2021. Milford Haven, with 14,250, is the largest town, ahead of Haverfordwest, Pembroke Dock and Pembroke; Tenby, Fishguard, Neyland, Saundersfoot, Narberth, Merlin\'s Bridge and Goodwick follow. Every class we run happens live over video, taught from India. Ages 6 to 67 are welcome for coding, Python and maths, one-to-one or in a small class of five to ten matched by level. A free first lesson works out the starting point. The county project is a mill at Carew that could only work when the tide allowed. If you stay, a class place is USD 100 a month and a personal tutor USD 150 a month.',
  lead: 'Cadw describes the French Mill at Carew as the only remaining tidal mill in Wales. Mills are recorded on the site from 1541, and by 1615 there was a causeway with floodgates. The idea is simple and clever. As the tide rises, sea water pushes through gates into a pond behind the causeway. When the tide turns, the gates swing shut, the water is trapped, and once the sea has fallen far enough it pours out through the wheels and turns the millstones. The miller did not choose the working hours; the Moon did. So how many hours could the mill grind on each tide, why did that change through the month, and why did the start time keep slipping later? A short Python simulation answers all three.',
  wa: 'Hello Modern Age Coders, we are in Pembrokeshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Pembrokeshire',
    h2: 'Pembrokeshire starting courses',
    intro: 'A Year 3 pupil in Saundersfoot who counts waves, a Year 8 in Milford Haven ready for real Python, a Year 12 in Haverfordwest taking WJEC A level maths, and a Tenby adult who wants to automate spreadsheets. A free lesson places each one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with tides, boats and water wheels that move.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 14', note: 'Typed Python for younger learners, with loops that run simulations.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Thorough Python for teenagers, up to models with state and time.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Python for data work, from tables and charts to simple models.' }
    ]
  },

  sections: [
    {
      id: 'pembrokeshire', tint: '', eyebrow: 'Pembrokeshire by the numbers',
      h2: 'Pembrokeshire: 123,360 people',
      intro: 'That total is the ONS 2021 census count of usual residents, taken from Nomis. Towns in the table are ONS built-up areas from the same census.',
      body: [
        { kind: 'table', caption: 'Pembrokeshire built-up areas above 2,000 residents, ONS 2021', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Milford Haven', '14,250', 'Neyland', '3,250'],
          ['Haverfordwest', '12,085', 'Saundersfoot', '2,515'],
          ['Pembroke Dock', '9,655', 'Narberth', '2,365'],
          ['Pembroke', '7,965', 'Merlin\'s Bridge', '2,220'],
          ['Tenby', '4,090', 'Goodwick', '2,020'],
          ['Fishguard', '3,420', '', '']
        ] },
        { kind: 'p', text: 'We rebuilt every town figure from output areas, and none is out by more than four people. Pembrokeshire classrooms work to the Curriculum for Wales, and older pupils sit WJEC GCSEs and A levels. School holiday dates come from the council, which we have not checked, so each family simply gives us theirs.' },
        { kind: 'callout', h3: 'St Davids and exam help', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-st-davids">St Davids</a> has a page of its own. For exams, read <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE Computer Science</a> or <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Pembrokeshire project',
      h2: 'A mill that keeps the Moon\'s hours',
      intro: 'A loop, a few if statements, and one gate that only opens one way.',
      body: [
        { kind: 'p', text: 'The learner models the sea as a smooth wave that peaks every 12.42 hours, the usual gap between high tides. Each minute the program checks three things. If the sea is above the pond, the gates are open and the pond rises with it. If the pond is at least 0.6 metres above the sea, the wheels can turn, so water leaves at a steady 2 cubic metres a second and the pond drops. Otherwise nothing happens. Every figure here, the pond size, the flow, the minimum drop, is our own invention, and the real Carew mill was, according to the record, only partly tidal.' },
        { kind: 'table', caption: 'Our tide mill model, a 20,000 square metre pond, 1-minute steps, 26 September 2026', head: ['Tidal range', 'Kind of tide', 'Grinding per tide', 'Grinding per day'], rows: [
          ['2.5 m', 'Small, like a neap', '5.0 hours', 'about 10 hours'],
          ['4.0 m', 'Middling', '6.7 hours', 'about 13.4 hours'],
          ['6.0 m', 'Large, like a spring', '7.8 hours', 'about 15.6 hours']
        ] },
        { kind: 'p', text: 'Bigger tides fill the pond higher and drop the sea lower, so the mill works longer. With a pond three times the size, the same tides give 7.0, 8.2 and 9.0 hours. Next the learner prints when each grinding spell begins. Setting high water at midnight on the first day, the spells start at 01:35 and 14:00, then 02:25 and 14:50, then 03:16 and 15:41. Each day the work begins about 50 minutes later, because two tides take close to 24 hours 50 minutes. A miller\'s timetable crept around the clock through every month.' },
        { kind: 'p', text: 'Two lessons about simulation come for free. Run the loop in one-hour steps and the big-tide answer becomes 8.0 hours, not 7.8, because each step assumes nothing changes for sixty minutes. Shrink the step and the answer settles. And drop the check that makes the gates one-way, so water can flow back out as the tide falls, and the pond simply follows the sea down: the mill never grinds at all. One missing condition wrecks the whole model, which is exactly why the gates mattered in 1615.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fill and empty a tub with a flap valve, then build a rising and falling tide in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Write the minute-by-minute loop in Python and print grinding hours for three tides.' },
          { h3: 'Ages 15 and up', p: 'Compare step sizes, plot the daily drift, and test what breaks without the one-way gate.' }
        ] },
        { kind: 'callout', h3: 'History from Cadw, numbers from us', p: 'Dates, wheels and the tidal claim come from Cadw\'s record. The pond, flow and tides are invented, so the table teaches how any tide mill behaves, not what Carew produced.' }
      ]
    },
    {
      id: 'carew', tint: 'deep', eyebrow: 'Why Carew',
      h2: 'Two wheels behind a causeway',
      intro: 'What Cadw\'s record of the French Mill says.',
      body: [
        { kind: 'table', caption: 'French Mill and Tidal Barrier, Carew, Cadw listed building record 6038, Grade II*', head: ['Record detail', 'What it says'], rows: [
          ['First mention', 'Mills on the site in 1541'],
          ['Floodgates', 'A causeway with floodgates mentioned in 1615, used as a wharf at high tide'],
          ['Wheels', 'Two undershot wheels, both 4.8 m across, 1.65 m and 2.1 m wide, as described by Rex Wailes'],
          ['Stones', 'Each wheel drove three pairs of millstones'],
          ['Working life', 'Mainly a corn mill; production ceased in 1937'],
          ['Today', 'The only remaining tidal mill in Wales, opened to the public in 1985 after restoration']
        ] },
        { kind: 'p', text: 'Simulations built from simple rules checked every tick run weather forecasts, traffic lights, flood warnings and computer games. The same habits apply everywhere: keep track of state, choose a sensible time step, and test that each rule does what you think. A Pembrokeshire learner who has watched one missing condition stop a whole mill has learned why programmers test the edge cases first.' },
        { kind: 'p', text: 'We are independent of Cadw and have no link to it. The mill record is Cadw\'s; the simulation, and any mistake in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing skills',
    h2: 'From tubs of water to full simulations',
    intro: 'These year bands only sketch the route; placement happens in the free lesson.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Cause and effect', p: 'Blocks that fill, empty and move in response to events.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Loops over time', p: 'Python loops that step a model forward minute by minute.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Models and graphs', p: 'Trigonometric waves, rates and plotting, alongside WJEC GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Python that works', p: 'Adult Python for data, automation and small models.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and edge cases',
    h2: 'An AI can write a simulation loop. Will it remember the gate only opens one way?',
    intro: 'Generated code usually handles the main case and forgets the small rule that makes it true.',
    p1: 'Ask a chatbot for a tide mill model and you may get tidy code in which water flows freely both ways. It runs, prints numbers and looks finished, yet the mill it describes could never work.',
    p2: 'A learner who has broken their own model by removing that one condition knows to look for the missing rule before trusting any output, whoever wrote the code.',
    closer: 'Hunting for the rule a program has forgotten is a skill a Pembrokeshire teenager gains by coding through 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'Goodwick to Tenby, joined by video',
    intro: 'Coast or countryside, a laptop and a connection are enough.',
    cells: [
      { h3: 'The learner types', p: 'Students write their programs themselves, and the teacher follows the shared screen, nudging with questions.' },
      { h3: 'Welsh placement', p: 'A Neyland Year 4 or a Pembroke Year 11 is placed by Welsh year and progression step; exam talk uses WJEC names. Teaching is in English.' },
      { h3: 'Try first, free', p: 'The first full lesson costs nothing, and you leave with clear advice.' },
      { h3: 'Matched classes', p: 'Five to ten learners at the same level, gathered from around the UK.' },
      { h3: 'Term rhythm', p: 'Twice a week in term, with school holidays left clear.' },
      { h3: 'Same local hour', p: 'The lesson follows British clocks through spring and autumn changes; our India-based teachers adjust around you.' }
    ],
    spec: { title: 'Why groups are online', p: 'A small town may have only one learner at a given level. Online, a Merlin\'s Bridge or Narberth pupil joins a class of peers at exactly the same stage.' }
  },

  fees: {
    h2: 'Fees for Pembrokeshire',
    intro: 'Milford Haven or Fishguard, the price does not change, and it matches every other country we teach outside India.',
    first: 'A full free trial lesson, with a clear next step.',
    group: 'Around eight classes a month among five to ten classmates.',
    private: 'Around eight classes a month with one dedicated tutor.',
    closer: 'Prices are set in US dollars only, never sterling. The first payment waits until the trial has chosen a course and a weekly time, and the pricing page covers breaks, missed lessons and swapping between group and one-to-one.'
  },

  reviewsH2: 'How families rate us on Google',

  book: {
    h2: 'Book a free Pembrokeshire lesson',
    intro: 'Tell us the learner\'s age or school year and a subject they like. Their trial might be a Scratch tide, a first Python loop, or the Carew mill simulation.',
    success: 'Thank you. Your Pembrokeshire request has arrived.'
  },

  faq: {
    h2: 'Pembrokeshire questions',
    intro: 'The county, the tide mill project and the practical side.',
    items: [
      { q: 'How many people live in Pembrokeshire?', a: 'The 2021 census recorded 123,360 usual residents in Pembrokeshire.' },
      { q: 'What is the largest town in Pembrokeshire?', a: 'Milford Haven, with 14,250 residents in its ONS 2021 built-up area, then Haverfordwest with 12,085.' },
      { q: 'What is the Carew tide mill project?', a: 'Learners simulate a tide mill minute by minute in Python, measure its grinding hours on small and large tides, and see the start time drift about 50 minutes a day.' },
      { q: 'How does a tide mill work?', a: 'Rising tide fills a pond through one-way gates; when the sea has fallen enough, the trapped water runs out through the wheels.' },
      { q: 'Is Carew the only tidal mill in Wales?', a: 'Cadw\'s record describes the French Mill at Carew as the only remaining tidal mill in Wales.' },
      { q: 'Are the classes held in Pembrokeshire?', a: 'They run online by video, so learners join from home in any Pembrokeshire town or village.' },
      { q: 'Do you help with WJEC GCSE and A level?', a: 'Yes, in maths and computing subjects. We teach for real understanding and never promise results.' },
      { q: 'How old do learners have to be?', a: 'Anyone from 6 up to 67 can join, with a course fitted to their level.' },
      { q: 'What are the fees?', a: 'Free for the first lesson; then USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'What happens in school holidays?', a: 'Lessons pause. Let us know your holiday weeks when you book.' }
    ]
  },

  next: {
    eyebrow: 'Further west Wales',
    h2: 'Other West Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-st-davids">St Davids</a> has a city page, <a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a> measures an elliptical bridge arch, and <a class="cg-inline-link" href="/coding-classes-in-ceredigion">Ceredigion</a> asks what a weather record of zero events really proves. See every Welsh county on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, or browse the whole country list from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK</a> hub.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Pembrokeshire and West Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-st-davids', label: 'St Davids' },
    { href: '/wjec-gcse-computer-science-help-wales', label: 'WJEC GCSE Computer Science' }
  ],

  personalityCss: `
.cg-root.cg-pem .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-pem .cg-hero h1 { font-weight: 690; letter-spacing: -0.021em; line-height: 1.07; }
.cg-root.cg-pem .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-pem .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pem .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.016em; }
.cg-root.cg-pem .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-pem .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pem .cg-table th { letter-spacing: 0.045em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-pem .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-pem .cg-callout { border-left-width: 4px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Pembrokeshire (W06000009). ONS Census 2021 TS001 via Nomis: 123,360. ONS built-up areas (published; OA sums within 4): Milford Haven 14,250; Haverfordwest 12,085; Pembroke Dock 9,655; Pembroke 7,965; Tenby 4,090; Fishguard 3,420; Neyland 3,250; Saundersfoot 2,515; Narberth 2,365; Merlin\'s Bridge 2,220; Goodwick 2,020. Cadw listed building record 6038, Grade II*, French Mill and Tidal Barrier, Carew: mills first mentioned 1541; "In 1615 there is mention of a causeway with floodgates"; Rex Wailes: two undershot wheels "both 4.8 m diameter, one 1.65 m and the other 2.1 m wide; each drove three pairs of stones", "semi-tidal"; "ceased production in 1937"; "the only remaining tidal mill in Wales"; "opened to the public in 1985 after restoration".',
    localProject: 'Tide mill time-stepping simulation (all invented): tide period 12.42 h; one-way gates; 2 m3/s while head >= 0.6 m; pond 20,000 m2, bed 1 m below mean. Grinding per tide: 2.5 m range 5.0 h; 4.0 m 6.7 h; 6.0 m 7.78 h (hourly steps 8.0, 15-min 7.75). Pond 60,000 m2: 7.0/8.17/8.95 h. Starts, HW midnight, range 4 m: 01:35, 14:00, 02:25, 14:50, 03:16, 15:41 (about 50 min later daily). Bug: two-way gates, pond follows the sea, no grinding. Lesson family: tide mill simulation with state, step size, lunar drift.',
    requiredMentions: [
      'Milford Haven',
      'Pembroke Dock',
      'Tenby',
      'Saundersfoot',
      'Goodwick',
      'Merlin\'s Bridge',
      'Carew',
      'French Mill',
      'Rex Wailes',
      'floodgates',
      'tidal mill'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Pembrokeshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 6038: French Mill and Tidal Barrier, Carew.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=6038' }
    ],
    rejectedClaims: [
      'Actual pond size, flow or output of the Carew mill: not in the record; model numbers are ours.',
      'Real tidal ranges or high water times at Carew: not read; ranges and times are invented.',
      'Opening times and who manages the mill today: not claimed beyond the record.',
      'Milford Haven Observatory (Cadw 12922): considered, not used (telescope lesson already spent).',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
