'use strict';
// Denbighshire (cg- county page, UK cluster Phase 7, row 290). One principal area; St Asaph city page exists (Sobel
// hillshading lesson) and registers Rhyl, Prestatyn, Denbigh, Ruthin and Rhuddlan as mentions, so this page avoids them.
// Spine: why build a weir as a curve, and how long is a curved crest? Anchor (read raw 26 September 2026): Cadw listed
// building record 19684, Grade II, Horseshoe Falls and canal entry pounds with sluices: "a near-crescent shaped weir placed
// in the abraided bed of the River Dee at a sharp bend above rapids, originally promoted by William Jessop, engineer to
// the Ellesmere Canal Company, in 1795, and constructed by Thomas Telford, chief engineer from 1804 to 1806 to impound
// water to feed, via sluices, into the head of the Llangollen Branch"; "controlled at distance by sluices on the
// headwaters of the river at Llyn Tegid"; "the 'falls' is considerably larger, at approx 54m radius"; "The crescentic
// shaped weir is built of stone, 140.2m long with an upstream slope and a vertical downstream face of approximately 1.2m";
// "capping of bullnosed cast iron sections in 2.75m lengths". (The record's bracketed conversions "6 million gallons
// (13200 Litres)" and "6 mile (3.73 km)" do not match standard conversions; not used on this page.)
// Our model (computed inline, scratchpad notes): circle radius 54 m, arc 140.2 m: central angle 2.596 rad (148.8 deg),
// chord 104.0 m, sagitta (depth of the curve) 39.5 m, arc/chord 1.348. Weir equation Q = C L H^1.5 with invented C 1.7:
// head over a curved crest is (chord/arc)^(2/3) = 0.82 of a straight one, 18.0 per cent lower at every flow (Q 5 m3/s:
// 0.093 vs 0.076 m; 20: 0.234 vs 0.192; 60: 0.487 vs 0.399; 150: 0.896 vs 0.734). Doubling flow raises head x1.587.
// Lesson family: circle geometry (arc, chord, sagitta from radius and arc length) and inverting a power law; screened
// (sagitta, chord length, arc length: 0 hits). Distinct from Ealing (fitting a stage-discharge rating curve).
// Place facts: ONS Census 2021 TS001 via Nomis: Denbighshire W06000004 95,817. ONS built-up areas (published; OA sums
// within 10): Rhyl 26,990; Prestatyn 16,675; Denbigh 8,075; Ruthin 5,700; Rhuddlan 3,790; St Asaph 3,485; Llangollen 3,050;
// Dyserth 2,040; Meliden 2,000. No Welsh-language statistics. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'DENBIGHSHIRE', blurb: 'Rhyl, Prestatyn, Denbigh, Ruthin and Llangollen, and a Horseshoe Falls lesson on why a weir is built as a curve.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-denbighshire',
  code: 'dnh',
  accent: '#3B416B',
  accentRationale: 'Denbighshire: a slate blue for Dee valley stone, picked by the solver (7.85:1 on the darkest paper tint), greyer than the South Lanarkshire indigo',
  pageType: 'governorate',
  place: {
    name: 'Denbighshire',
    eyebrow: 'Denbighshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Wales', href: '/coding-and-ai-classes-in-wales' },
    { label: 'St Asaph', href: '/best-coding-class-in-st-asaph' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Denbighshire',
  title: 'Coding Classes in Denbighshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Denbighshire, from Rhyl and Prestatyn to Denbigh, Ruthin, Llangollen, Rhuddlan, Dyserth and Corwen.',
  ogDescription: 'Coding classes for all of Denbighshire, and a Horseshoe Falls project: work out a curved weir\'s geometry in Python and why the curve keeps water levels lower.',
  twitterDescription: 'Denbighshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Denbighshire',
    description: 'Ability-placed online coding, Python, geometry and mathematics for children, teenagers and adults across Denbighshire, taught live in English.'
  },

  h1: 'Coding classes in Denbighshire',
  capsuleQ: 'What are the best coding classes in Denbighshire?',
  capsule: 'Denbighshire had 95,817 usual residents at the 2021 census. Rhyl is its largest built-up area, followed by Prestatyn, Denbigh and Ruthin, then Rhuddlan, St Asaph and Llangollen, with Dyserth, Meliden and Corwen among the smaller places. Every lesson is live on video with our teachers in India, and the first is free, used to place a Year 2 pupil, a Year 11 student or an adult at the right level. People aged 6 to 67 can learn coding, Python and maths, one-to-one or in a class of five to ten. The Denbighshire project comes from a weir on the Dee at Llantysilio. After the free lesson, group places are USD 100 a month and one-to-one lessons USD 150 a month.',
  lead: 'At Llantysilio, the River Dee pours over a weir built not straight across the river but in a curve. Cadw lists Horseshoe Falls and records that the near-crescent weir was promoted by William Jessop in 1795 and built under Thomas Telford between 1804 and 1806 to feed water, through sluices, into the Llangollen branch of the Ellesmere Canal. The record gives two numbers that make a lovely puzzle: the curve has a radius of about 54 metres, and the stone crest is 140.2 metres long. From those alone, a program can work out how wide a stretch of river the weir spans, how deep the curve is, and why engineers bother to curve a weir at all. This page\'s project does exactly that in Python.',
  wa: 'Hello Modern Age Coders, we are in Denbighshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Denbighshire',
    h2: 'Usual first courses in Denbighshire',
    intro: 'A Year 1 pupil in Prestatyn who loves drawing circles, a Year 6 in Rhyl ready to type code, a Year 11 in Ruthin preparing for WJEC GCSE maths, and an adult in Denbigh learning Python for work. A free lesson starts each of them.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with arcs, circles and turning a set amount.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Radians, arcs and chords, understood by drawing them in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from circle theorems to trigonometry and powers.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first line, up to geometry and data scripts.' }
    ]
  },

  sections: [
    {
      id: 'denbighshire', tint: '', eyebrow: 'Denbighshire in figures',
      h2: '95,817 people in Denbighshire',
      intro: 'This total is the 2021 census count of usual residents, published by ONS and read via Nomis. The places listed are ONS built-up areas from the same census.',
      body: [
        { kind: 'table', caption: 'Denbighshire built-up areas of 2,000 people or more, ONS Census 2021', head: ['Built-up area', 'Residents', 'Built-up area', 'Residents'], rows: [
          ['Rhyl', '26,990', 'St Asaph', '3,485'],
          ['Prestatyn', '16,675', 'Llangollen', '3,050'],
          ['Denbigh', '8,075', 'Dyserth', '2,040'],
          ['Ruthin', '5,700', 'Meliden', '2,000'],
          ['Rhuddlan', '3,790', '', '']
        ] },
        { kind: 'p', text: 'Output-area sums we ran ourselves agree with each published figure to within about ten people. Pupils follow the Curriculum for Wales and take WJEC GCSEs and A levels. Denbighshire County Council sets term dates; rather than guess them, we ask each family for its own holiday weeks.' },
        { kind: 'callout', h3: 'St Asaph and WJEC help', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> has its own page. For exams, see <a class="cg-inline-link" href="/gcse-maths-and-numeracy-wales-help">GCSE Maths and Numeracy in Wales</a> and <a class="cg-inline-link" href="/wjec-gcse-digital-technology-help-wales">WJEC GCSE Digital Technology</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Denbighshire project',
      h2: 'Radius 54 metres, crest 140.2 metres',
      intro: 'Arc, chord and sagitta, then the weir equation.',
      body: [
        { kind: 'p', text: 'The record gives a radius of about 54 metres and a crest length of 140.2 metres. If the crest is an arc of a circle, its angle in radians is simply the arc length divided by the radius: 140.2 over 54 is about 2.596 radians, or 148.8 degrees, well short of a full semicircle, which fits the record\'s description of a near-crescent. From the angle the learner computes the chord, the straight line between the two ends, which is roughly the width of river the weir spans, and the sagitta, how far the curve bulges upstream from that line.' },
        { kind: 'table', caption: 'Our geometry of the Horseshoe Falls crest, treated as a circular arc, 26 September 2026', head: ['Quantity', 'Value', 'How it is found'], rows: [
          ['Angle at the centre', '2.596 radians, 148.8 degrees', 'Arc length divided by radius'],
          ['Chord across the ends', 'About 104.0 m', '2 x radius x sine of half the angle'],
          ['Depth of the curve (sagitta)', 'About 39.5 m', 'Radius x (1 minus cosine of half the angle)'],
          ['Crest longer than the chord by', '35 per cent', '140.2 divided by 104.0']
        ] },
        { kind: 'p', text: 'Why curve it? Water flowing over a weir obeys a power law: the flow grows with the crest length times the height of water above the crest raised to the power one and a half. Turn that around and, for the same flow, the water above a longer crest stands lower. The learner inverts the formula in Python: with a crest 35 per cent longer than a straight one across the same river, the water over the crest stands 18 per cent lower, at every flow. The flows and weir constant in our example are invented, but the 18 per cent depends only on the ratio of lengths, which comes from the record.' },
        { kind: 'p', text: 'One more property of power laws appears: doubling the flow does not double the height over the crest; it multiplies it by two to the power two thirds, about 1.59. The learner checks every step with a known case, a crest that is a full semicircle, where the chord must equal twice the radius exactly.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Bend a strip of card into curves of different depths between two fixed pins and measure how its length changes.' },
          { h3: 'Ages 11 to 15', p: 'Use radians in Python to find the angle, chord and depth of an arc from its radius and length.' },
          { h3: 'Ages 15 and up', p: 'Invert the weir equation, show the head ratio depends only on lengths, and test with the semicircle case.' }
        ] },
        { kind: 'callout', h3: 'Record figures, modelled flow', p: 'The radius, crest length and history come from Cadw\'s record. Treating the crest as a perfect circular arc is our simplification, and the flows and weir constant are invented, so the head values illustrate the idea rather than describe the real weir.' }
      ]
    },
    {
      id: 'horseshoe-falls', tint: 'deep', eyebrow: 'Why Horseshoe Falls',
      h2: 'A weir that feeds a canal',
      intro: 'What Cadw\'s record describes.',
      body: [
        { kind: 'table', caption: 'Horseshoe Falls and canal entry pounds with sluices, Cadw listed building record 19684', head: ['Record detail', 'What it says'], rows: [
          ['Purpose', 'To impound the Dee and feed water, via sluices, into the head of the Llangollen branch of the canal'],
          ['Engineers', 'Promoted by William Jessop in 1795; built under Thomas Telford from 1804 to 1806'],
          ['Shape', 'A near-crescent weir of approximately 54 m radius'],
          ['Crest', '140.2 m long, 1.2 m square stones capped with bullnosed cast iron in 2.75 m lengths'],
          ['Control', 'River levels managed at a distance by sluices at Llyn Tegid'],
          ['Community', 'Llantysilio, partly in Llangollen']
        ] },
        { kind: 'p', text: 'Arcs, chords and power laws appear throughout engineering and computing: in road and rail curves, in lens design, in the curves drawn on every screen and in flood-modelling software that decides how rivers behave. Inverting a formula to ask what it implies, rather than just plugging in numbers, is the step that turns calculation into design. A Denbighshire student who has found the 18 per cent from two numbers in a record has taken that step.' },
        { kind: 'p', text: 'We have no connection with Cadw or Denbighshire County Council. The record\'s content is Cadw\'s; the geometry, the model and any errors are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From card strips to power laws',
    intro: 'The year bands are rough; the trial lesson sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Curves and turns', p: 'Block coding drawing arcs, circles and turning shapes.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Angles in Python', p: 'Typed Python with degrees, radians and simple geometry.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Trigonometry and powers', p: 'Circle geometry, trigonometry and power laws alongside WJEC GCSE and A level maths.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Geometry in code', p: 'Python for adults, from measurements to engineering sums.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and design',
    h2: 'An AI can quote a weir formula in seconds. Will it show why the curve helps?',
    intro: 'A formula used forwards answers a question; used backwards it explains a design.',
    p1: 'Ask a chatbot why Horseshoe Falls is curved and it may say it looks better or spreads the flow. Asked to prove it, it may not think to invert the weir equation or to compute the chord from the radius and crest length in the record.',
    p2: 'A Denbighshire learner who has turned two numbers into an 18 per cent lower water level knows how to test an explanation instead of repeating it. That is exactly the scrutiny AI answers need.',
    closer: 'Turning a design into numbers you can check is why a Denbighshire teenager should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Rhyl to Corwen, lessons at home',
    intro: 'Towns and villages across the county all join lessons by video.',
    cells: [
      { h3: 'The learner types', p: 'Pupils write the code; the teacher follows on the shared screen and prompts when stuck.' },
      { h3: 'Welsh school years', p: 'A Dyserth Year 4 or a Llangollen Year 10 is placed by year and the Curriculum for Wales, with WJEC exam names. Lessons are in English.' },
      { h3: 'A free trial lesson', p: 'One full lesson at no cost, then a candid recommendation.' },
      { h3: 'Five to ten per class', p: 'Classmates share a level and join from many places.' },
      { h3: 'Term time schedule', p: 'Two lessons a week in term; no lessons in the holidays.' },
      { h3: 'UK time held', p: 'Your lesson keeps its UK time through the clock changes; teachers on India time shift.' }
    ],
    spec: { title: 'Why groups span the county', p: 'Five learners at one level, free at the same hour, rarely live in one town. Grouping by level gives a pupil in Meliden or Corwen a class that fits.' }
  },

  fees: {
    h2: 'Fees in Denbighshire',
    intro: 'Rhyl or Ruthin, the fee is the same, as everywhere we teach outside India.',
    first: 'A full lesson, free, then a clear suggestion.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with a teacher to yourself.',
    closer: 'We price in US dollars and keep no sterling list. Invoices start once the trial has fixed a course and a weekly time; the pricing page explains breaks, absences and changing format.'
  },

  reviewsH2: 'Families rate us on Google',

  book: {
    h2: 'Book a free Denbighshire lesson',
    intro: 'Tell us the age or school year and one thing the learner enjoys. The first lesson might be a Scratch circle, a Python program, or the Horseshoe Falls geometry.',
    success: 'Thank you. Your Denbighshire request has been received.'
  },

  faq: {
    h2: 'Denbighshire questions',
    intro: 'The county, the Horseshoe Falls project and practical details.',
    items: [
      { q: 'How many people live in Denbighshire?', a: 'The 2021 census counted 95,817 usual residents.' },
      { q: 'What are the largest towns in Denbighshire?', a: 'ONS 2021 built-up areas: Rhyl 26,990, Prestatyn 16,675, Denbigh 8,075 and Ruthin 5,700.' },
      { q: 'What is the Horseshoe Falls project?', a: 'Learners treat the 140.2 metre crest as an arc of radius 54 metres, compute its angle, chord and depth in Python, and invert the weir equation to show the curve keeps water over the crest about 18 per cent lower.' },
      { q: 'What is a sagitta?', a: 'The depth of an arc: the distance from the middle of the chord to the curve itself.' },
      { q: 'Who built Horseshoe Falls?', a: 'Cadw records that it was promoted by William Jessop in 1795 and built under Thomas Telford from 1804 to 1806.' },
      { q: 'Are lessons held in Denbighshire?', a: 'No; lessons happen on video, so pupils join from home anywhere in the county.' },
      { q: 'Can you help with GCSE maths in Wales?', a: 'Yes, along with WJEC GCSE Computer Science and Digital Technology. We aim for understanding and do not promise grades.' },
      { q: 'What ages do you teach?', a: 'Every age from six to 67, from blocks for children to Python for adults.' },
      { q: 'How much are lessons?', a: 'The trial lesson is free; afterwards USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons stop in the holidays?', a: 'Yes. Tell us when your school breaks up and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More North Wales pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-st-asaph">St Asaph</a> reads slopes from a height map, <a class="cg-inline-link" href="/coding-classes-in-conwy">Conwy</a> compares iron boxes and bars, and <a class="cg-inline-link" href="/best-coding-class-in-wrexham">Wrexham</a> has a city page. See the full Welsh list on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a> page, or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Denbighshire and North Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/best-coding-class-in-st-asaph', label: 'St Asaph' },
    { href: '/gcse-maths-and-numeracy-wales-help', label: 'GCSE Maths and Numeracy in Wales' }
  ],

  personalityCss: `
.cg-root.cg-dnh .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-dnh .cg-hero h1 { font-weight: 710; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-dnh .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-dnh .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dnh .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-dnh .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-dnh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dnh .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-dnh .cg-ladder-col { border-bottom: 5px solid var(--cg-accent); padding-bottom: 0.85rem; }
.cg-root.cg-dnh .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Denbighshire (W06000004), Denbighshire County Council. ONS Census 2021 TS001 via Nomis: 95,817. ONS built-up areas (published; OA sums within 10): Rhyl 26,990; Prestatyn 16,675; Denbigh 8,075; Ruthin 5,700; Rhuddlan 3,790; St Asaph 3,485; Llangollen 3,050; Dyserth 2,040; Meliden 2,000. Cadw listed building record 19684 (Grade II), Horseshoe Falls and canal entry pounds with sluices: "a near-crescent shaped weir placed in the abraided bed of the River Dee at a sharp bend above rapids, originally promoted by William Jessop, engineer to the Ellesmere Canal Company, in 1795, and constructed by Thomas Telford, chief engineer from 1804 to 1806 to impound water to feed, via sluices, into the head of the Llangollen Branch"; "controlled at distance by sluices on the headwaters of the river at Llyn Tegid"; "approx 54m radius"; "140.2m long"; "1.2m square stones with a capping of bullnosed cast iron sections in 2.75m lengths". Corwen named as a place (Cadw listings, Denbighshire).',
    localProject: 'Arc R 54 m, L 140.2 m: angle 2.596 rad (148.8 deg); chord 104.0 m; sagitta 39.5 m; L/chord 1.348. Weir Q = C L H^1.5, C 1.7 invented: head ratio (chord/L)^(2/3) = 0.82, 18.0 per cent lower; Q 5: 0.093/0.076 m; 20: 0.234/0.192; 60: 0.487/0.399; 150: 0.896/0.734. Doubling Q: head x1.587. Semicircle check chord = 2R. Record conversion slips (gallons, miles) noted, not used. Lesson family: circle geometry and inverting a power law.',
    requiredMentions: [
      'Dyserth',
      'Meliden',
      'Corwen',
      'Horseshoe Falls',
      'Jessop',
      'Llantysilio',
      'Ellesmere Canal',
      'Llyn Tegid',
      '140.2',
      'sagitta'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents, Denbighshire, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Cadw listed building full report 19684: Horseshoe Falls and canal entry pounds with sluices.', url: 'https://cadwpublic-api.azurewebsites.net/reports/listedbuilding/FullReport?lang=en&id=19684' }
    ],
    rejectedClaims: [
      'Real flows over the weir: not used; flows and weir constant invented.',
      'The record\'s gallons-to-litres and miles-to-km conversions: do not match standard values; not repeated on the page.',
      'That the crest is an exact circular arc: our simplification, stated on the page.',
      'Pontcysyllte Aqueduct and World Heritage status: not used here.',
      'Welsh-language statistics: excluded by rule.',
      'Named schools and school term dates: none named or read.'
    ]
  }
};
