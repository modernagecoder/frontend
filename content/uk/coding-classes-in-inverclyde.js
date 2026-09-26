'use strict';
// Inverclyde (cg- council area page, UK cluster Phase 7, row 268). One council. Spine: why does the last metre of water
// take longest to flow into a dock? Anchor (read raw 26 September 2026): Historic Environment Scotland LB50131, Category A,
// Scott's Dry Dock with Outer Basin, Greenock: "Oblong dry dock roughly 110m long and 20m wide, with semi-octagonal S end,
// stepped sides, later steel gates, and outer basin to N"; "Also known as the Submarine Dock. Situated in Cartsdyke";
// "It is believed to be the oldest surviving dry (or graving) dock in Scotland"; "Built for Steele's shipyard, which
// occupied this site until it closed in 1883, at which point it was taken over by Scott's"; shown on John Wood's town plan
// of 1825; "Remains of cast-iron operating machinery including capstan with Stothert & Pitt of Bath maker's plate".
// Our model (scratchpad inv/flood.py; the listing's 110 m by 20 m treated as a rectangle, everything else invented):
// river held 6 m above the dock floor, sluice opening 1 square metre, discharge coefficient 0.6, Torricelli inflow
// c a sqrt(2 g (H - h)). Volume 13,200 cubic metres (ours). Analytic fill 67.6 minutes; first 3 m 19.8 minutes (29.3 per
// cent); second 3 m 47.8; last 0.6 m 21.4 minutes (31.6 per cent); last 10 cm 8.7 minutes. Initial flow 6.51 cubic metres
// a second; naive constant-flow estimate 33.8 minutes, exactly half. Euler step 10 s: within 1 mm at 66.5 min; 60 s:
// overshoots to 6.0005 m (above the river) at 65.0; 300 s: 6.0276 m then square root of a negative, crash at 60.0.
// Clamped 300 s: claims full at 60.0 minutes, 7.6 minutes early.
// Lesson family: Torricelli draining/filling, square-root slowdown, overshoot and domain errors; screened (Torricelli,
// orifice: 0 hits). Deliberately avoided: the Watt Institution (listing records Watt's slave-trade involvement; not a
// celebratory anchor), Titan crane (third statics lesson in a row).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Inverclyde S12000018 78,400; 37,400 households; 488.7 per
// square kilometre; 0 to 14 11,200 (14.3 per cent), 65+ 17,600 (22.4 per cent) by our addition. NRS mid-2020 localities.
// Blocked: inverclyde.gov.uk election results page (connection failed, not retried). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'INVERCLYDE', blurb: 'Greenock, Port Glasgow, Gourock and Kilmacolm, and a dry dock lesson on why the last metre of water takes the longest.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-inverclyde',
  code: 'ivc',
  accent: '#52377A',
  accentRationale: 'Inverclyde: a muted dusk violet from the solver (7.74:1 on the darkest paper tint), well away from the blues and teals used for the other Clyde and Forth pages',
  pageType: 'governorate',
  place: {
    name: 'Inverclyde',
    eyebrow: 'Inverclyde',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Inverclyde',
  title: 'Coding Classes in Inverclyde | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Inverclyde, from Greenock, Port Glasgow and Gourock to Kilmacolm, Inverkip and Wemyss Bay. Free first lesson.',
  ogDescription: 'Coding classes for all of Inverclyde, and a Greenock dry dock project: flood a dock in Python, find why the last metre is slowest, and catch a crash from a square root.',
  twitterDescription: 'Inverclyde coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Inverclyde',
    description: 'Ability-placed online coding, Python, physics simulation and mathematics for children, teenagers and adults across Inverclyde, taught live in English.'
  },

  h1: 'Coding classes in Inverclyde',
  capsuleQ: 'What are the best coding classes in Inverclyde?',
  capsule: 'Inverclyde is a compact council area on the Firth of Clyde with about 78,400 residents in roughly 37,400 households, according to the 2022 census. Greenock is by far the largest town, and Port Glasgow and Gourock are the other large towns, with Kilmacolm, Inverkip and Wemyss Bay smaller. Every class is taught live by video from India; a free first lesson finds the right starting stage, anything from P1 to S6 or adult. Learners aged 6 to 67 take coding, Python and maths in a group of five to ten or individually. The Inverclyde project starts at an old Greenock dry dock. After the free lesson, a group costs USD 100 a month and one-to-one USD 150 a month.',
  lead: 'In Cartsdyke, Greenock, Historic Environment Scotland lists Scott\'s Dry Dock at Category A and says it is believed to be the oldest surviving dry, or graving, dock in Scotland. Roughly 110 metres long and 20 metres wide, it was built for Steele\'s shipyard and already appears on a town plan of 1825. A dry dock works by letting the river in and pumping it out: gates open, water floods the basin, a ship floats in, and the water is removed so workers can reach the hull. How long does the flooding take? The obvious calculation is wrong by a factor of two, and the last metre of water behaves in a way that surprises almost everyone. This page\'s project finds out in Python.',
  wa: 'Hello Modern Age Coders, we are in Inverclyde and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Inverclyde',
    h2: 'First courses that suit Inverclyde learners',
    intro: 'A seven-year-old in Gourock, a P7 in Port Glasgow, an S5 in Greenock working towards Higher, and an adult in Kilmacolm who wants to automate spreadsheets. Here is where each typically begins, after a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch from the start, with games where water rises, tanks fill and timers count.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 13', note: 'A first typed language, with small simulations that change step by step.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including physics simulations and debugging them.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first line, through to data, automation and models.' }
    ]
  },

  sections: [
    {
      id: 'inverclyde', tint: '', eyebrow: 'Inverclyde facts',
      h2: 'About 78,400 people on the Firth of Clyde',
      intro: 'Council-level figures are the 2022 census first results from National Records of Scotland, rounded to hundreds. Town sizes are NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Inverclyde localities, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Greenock', '41,280'],
          ['Port Glasgow', '14,200'],
          ['Gourock', '10,210'],
          ['Kilmacolm', '3,930'],
          ['Inverkip', '3,490'],
          ['Wemyss Bay', '2,390']
        ] },
        { kind: 'p', text: 'Inverclyde packs 488.7 residents into each square kilometre, seven times Scotland\'s 69.8. From our own addition of the census age bands, 14.3 per cent of people are under 15, a little below Scotland\'s 15.3, and 22.4 per cent are 65 or over, against 20.1. Inverclyde Council sets its own school terms; we have not checked them, so families tell us their break dates.' },
        { kind: 'callout', h3: 'Glasgow and exams', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page covers the city. For qualifications, see <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a> and <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Inverclyde project',
      h2: 'Flooding a dock, one second at a time',
      intro: 'A basin, a sluice, and a law of physics from the 1600s.',
      body: [
        { kind: 'p', text: 'The model uses the listing\'s rough size, 110 by 20 metres, as a plain rectangle; everything else is invented. The river stands 6 metres above the dock floor and, for simplicity, stays there. Water enters through a sluice with an opening of 1 square metre. Torricelli\'s law says water rushes through an opening at a speed that depends on the square root of the height difference: a big drop means fast flow, a small drop slow flow. As the dock fills, the difference shrinks, so the flow slows down. The learner computes the volume, 13,200 cubic metres by our arithmetic, and then works out how long filling really takes.' },
        { kind: 'table', caption: 'Our flooded dock, invented sluice and river level, 26 September 2026', head: ['Question', 'Answer from the model'], rows: [
          ['Flow at the start', '6.51 cubic metres a second'],
          ['Naive estimate: volume divided by starting flow', '33.8 minutes'],
          ['True time to fill completely', '67.6 minutes, exactly twice the naive estimate'],
          ['First 3 metres of depth', '19.8 minutes (29 per cent of the time)'],
          ['Last 3 metres', '47.8 minutes'],
          ['Last 10 centimetres alone', '8.7 minutes']
        ] },
        { kind: 'p', text: 'The first half of the depth fills in under 20 minutes; the second half needs almost 48. The last 10 centimetres, a tiny fraction of the water, take nearly 9 minutes, because the height difference driving them is almost zero. The naive sum assumes the opening flow continues all the way, and for this kind of flow the true answer comes out at exactly twice as long. Learners can prove the factor of two with a little calculus, or simply trust the simulation once it agrees with the formula.' },
        { kind: 'p', text: 'The simulation is where coding earns its keep. Stepping forward 10 seconds at a time matches the formula closely. With 60-second steps the water level overshoots and ends above the river, which is physically impossible. With 5-minute steps it overshoots further, and on the next step the program asks for the square root of a negative number and crashes. A quick fix, clamping the level at the river height, stops the crash but then reports the dock full at 60 minutes, more than 7 minutes early. The lesson: silencing an error is not the same as fixing the model.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Fill a Scratch tank from a tap whose flow drops as the tank fills, and time how long each quarter takes.' },
          { h3: 'Ages 11 to 15', p: 'Step the dock forward in Python, plot depth against time, and compare with the naive straight-line guess.' },
          { h3: 'Ages 15 and up', p: 'Derive the fill time with calculus, reproduce the overshoot and the crash, and choose a step size or method that avoids both.' }
        ] },
        { kind: 'callout', h3: 'A thought experiment in a real dock', p: 'Only the dock\'s rough size and history come from the listing. The river level, sluice size, flow coefficient and every time in the table are invented, and say nothing about how Scott\'s dock was actually flooded.' }
      ]
    },
    {
      id: 'dry-dock', tint: 'deep', eyebrow: 'Why Scott\'s Dry Dock',
      h2: 'Possibly Scotland\'s oldest graving dock',
      intro: 'What Historic Environment Scotland records, in its own careful words.',
      body: [
        { kind: 'table', caption: 'Scott\'s Dry Dock with Outer Basin, HES listing LB50131', head: ['Listing detail', 'What it records'], rows: [
          ['Size and shape', 'Roughly 110 m long and 20 m wide, with a semi-octagonal south end and stepped sides'],
          ['Also known as', 'The Submarine Dock'],
          ['Age', 'Early 19th century; believed to be the oldest surviving dry dock in Scotland'],
          ['Evidence', 'Shown on John Wood\'s town plan of Greenock, 1825'],
          ['Owners', 'Built for Steele\'s shipyard; taken over by Scott\'s when Steele\'s closed in 1883'],
          ['Machinery', 'Remains of a cast-iron capstan with a Stothert and Pitt of Bath maker\'s plate']
        ] },
        { kind: 'p', text: 'The listing is careful: the dock is believed to be the oldest, and a date in the 1790s is called possible although unlikely. That caution is worth copying. The same physics runs through modern software for flood warnings, reservoir outflows, fuel tanks and the water levels in game engines, and the same mistakes, a naive rate and a step that overshoots, catch out professional code too. An Inverclyde student who has watched their program crash on a square root and then found the real cause is ready for bigger models.' },
        { kind: 'p', text: 'Historic Environment Scotland, the owners of the dock and Inverclyde Council are not linked to us in any way. The listing facts are theirs; the model, its numbers and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a Scratch tank to a working model',
    intro: 'These stages are a rough guide; the free lesson decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Things that fill', p: 'Block coding games with levels that rise, timers and simple rules.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Step-by-step Python', p: 'Loops that change a value over time, with graphs to show it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'S3 to S6', h3: 'Rates and models', p: 'Simulation and calculus ideas alongside National 5, Higher and Advanced Higher courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Models for work', p: 'Python for adults building estimates, forecasts and checks.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and simulations',
    h2: 'An AI can fix a crash in seconds. Will it fix the cause?',
    intro: 'Making an error disappear can make the answer wrong.',
    p1: 'Paste the square-root crash into a chatbot and the likely suggestion is to wrap the value in max(0, ...) or catch the error. The program then runs and prints a tidy answer: full at 60 minutes. The answer is more than 7 minutes out, and nothing on screen says so.',
    p2: 'An Inverclyde learner who knows why the level overshot will reduce the step or change the method instead of hiding the symptom. Knowing the difference between a fix and a patch is exactly the judgement AI cannot supply for you.',
    closer: 'That is why an Inverclyde teenager should still learn to code in 2026: to recognise when a quick fix has only hidden the real mistake.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson logistics',
    h2: 'From Greenock to Kilmacolm, lessons at home',
    intro: 'Online classes remove the journey to an evening club.',
    cells: [
      { h3: 'Learner at the keyboard', p: 'The learner writes the code; the teacher watches the shared screen and helps at the right moment.' },
      { h3: 'Our words match school', p: 'We use P3, S4, National 5, Higher and Advanced Higher, like Inverclyde schools, and teach in English.' },
      { h3: 'First lesson free', p: 'A real lesson, at no cost, and then plain advice on which course comes next.' },
      { h3: 'Groups by stage', p: 'Five to ten learners at the same stage in each class, often from several countries.' },
      { h3: 'Term-time rhythm', p: 'Two lessons a week in term, with the school holidays off.' },
      { h3: 'Booked in UK time', p: 'Once set, your lesson keeps its UK time through the clock changes; teachers in India time adapt.' }
    ],
    spec: { title: 'Why stage beats location', p: 'Even in Greenock, finding five learners at one stage free at the same hour is unlikely. Grouping by stage across a wider pool means a pupil from Inverkip or Wemyss Bay gets a proper class.' }
  },

  fees: {
    h2: 'Inverclyde fees',
    intro: 'Gourock or Port Glasgow, the fee is the same, and so it is in every country outside India where we teach.',
    first: 'A full lesson at no charge, with a recommendation at the end.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one teacher and one learner.',
    closer: 'All fees are in US dollars; there is no sterling price. Payment starts only after the free lesson, when a course and weekly time have been agreed, and the pricing page explains holidays, missed lessons and changing between group and individual lessons.'
  },

  reviewsH2: 'Families on Google',

  book: {
    h2: 'Book a free Inverclyde lesson',
    intro: 'Tell us how old the learner is, or their school stage, and something they like. A first lesson could be a Scratch game, some Python, or the dry dock on this page.',
    success: 'Thank you. Your Inverclyde request has been received.'
  },

  faq: {
    h2: 'Inverclyde questions',
    intro: 'Figures, the dry dock project, and how classes work.',
    items: [
      { q: 'What is the population of Inverclyde?', a: 'About 78,400 people in roughly 37,400 households, from the rounded first results of Scotland\'s 2022 census.' },
      { q: 'What are the main towns in Inverclyde?', a: 'NRS mid-2020 estimates: Greenock 41,280, Port Glasgow 14,200, Gourock 10,210, Kilmacolm 3,930, Inverkip 3,490 and Wemyss Bay 2,390.' },
      { q: 'What is the dry dock project?', a: 'Learners flood an invented dock the size of Scott\'s Dry Dock in Python using Torricelli\'s law, find the true time is twice the naive estimate, and see how a large time step overshoots and crashes.' },
      { q: 'What is Torricelli\'s law?', a: 'A rule that water flows out of, or through, an opening at a speed proportional to the square root of the height difference driving it.' },
      { q: 'How old is Scott\'s Dry Dock?', a: 'Historic Environment Scotland dates it to the early 19th century, notes it on a town plan of 1825, and says it is believed to be Scotland\'s oldest surviving dry dock.' },
      { q: 'Are classes held in Greenock?', a: 'Classes are online, so learners join from home anywhere in Inverclyde.' },
      { q: 'Do you teach Higher Computing Science?', a: 'Yes, and National 5 too, with maths at both levels. We teach for understanding and do not promise grades.' },
      { q: 'Which ages do you teach?', a: 'From 6 to 67: block coding for young children, Python and exam maths in secondary, and Python for adults at any starting point.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first lesson, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons pause in the holidays?', a: 'They do. Give us your school\'s holiday dates and we fit around them.' }
    ]
  },

  next: {
    eyebrow: 'Around the Clyde',
    h2: 'Pages near Inverclyde',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, <a class="cg-inline-link" href="/coding-classes-in-east-renfrewshire">East Renfrewshire</a> with its sluice project, and <a class="cg-inline-link" href="/coding-classes-in-argyll-and-bute">Argyll and Bute</a>. Every council is listed on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Talk to us on WhatsApp'
  },

  footerHeading: 'Inverclyde and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-computing-science-help', label: 'Higher Computing Science' }
  ],

  personalityCss: `
.cg-root.cg-ivc .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.2rem); }
.cg-root.cg-ivc .cg-hero h1 { font-weight: 680; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-ivc .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-ivc .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ivc .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-ivc .cg-table caption { font-weight: 600; text-align: left; padding-bottom: 0.35rem; }
.cg-root.cg-ivc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ivc .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-ivc .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ivc .cg-callout { border-left-width: 5px; border-radius: 0 6px 6px 0; }
`,

  dossier: {
    curriculumAuthority: 'Inverclyde (S12000018), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 78,400 (females 40,700, males 37,700); households 37,400; density 488.7 per square kilometre (Scotland 69.8); ages 0 to 14 11,200 (14.3 per cent), 65+ 17,600 (22.4 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Greenock 41,280; Port Glasgow 14,200; Gourock 10,210; Kilmacolm 3,930; Inverkip 3,490; Wemyss Bay 2,390. HES LB50131 (Category A, added 18/07/2005), Scott\'s Dry Dock with Outer Basin, burgh Greenock: "Oblong dry dock roughly 110m long and 20m wide, with semi-octagonal S end, stepped sides, later steel gates, and outer basin to N"; "Remains of cast-iron operating machinery including capstan with Stothert & Pitt of Bath maker\'s plate"; "Also known as the Submarine Dock. Situated in Cartsdyke"; "It is believed to be the oldest surviving dry (or graving) dock in Scotland"; "Built for Steele\'s shipyard, which occupied this site until it closed in 1883, at which point it was taken over by Scott\'s"; "It is therefore possible (although unlikely) that the dry dock dates from this time" (1796); shown on John Wood\'s Town Plan of 1825.',
    localProject: 'Rectangle 110 x 20 m (ours), H 6 m constant, a 1 m2, c 0.6. V 13,200 m3; q0 6.51 m3/s; naive 33.8 min; analytic 67.6 min (T = 2V/q0); 0-3 m 19.8 min (29.3 per cent); 3-6 m 47.8; last 0.6 m 21.4 (31.6 per cent); last 10 cm 8.7. Euler 10 s: 66.5 min within 1 mm; 60 s: 6.0005 m at 65.0 min; 300 s: 6.0276 m then ValueError at 60.0 min; clamped 300 s: 60.0 min. AI angle: max(0, ...) patch hides a 7.6 minute error. Lesson family: Torricelli filling, square-root slowdown, overshoot and domain error.',
    requiredMentions: [
      '78,400',
      'Greenock',
      'Port Glasgow',
      'Gourock',
      'Kilmacolm',
      'Inverkip',
      'Wemyss Bay',
      'LB50131',
      'Torricelli',
      'Cartsdyke',
      'graving dock'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB50131: Scott\'s Dry Dock with Outer Basin, Greenock.', url: 'https://portal.historicenvironment.scot/designation/LB50131' }
    ],
    rejectedClaims: [
      'How the dock was flooded or emptied historically, its sluice sizes or tide levels: not in the listing, not claimed.',
      'James Watt and the Watt Institution as anchor: not used; the listing records his involvement in the slave trade.',
      'Titan crane: considered, not used.',
      'Council election results: source page did not connect, not retried.',
      'Named Inverclyde schools and school term dates: none named or read.',
      'Travel directions or distances from Inverclyde towns: not claimed.'
    ]
  }
};
