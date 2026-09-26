'use strict';
// Clackmannanshire (cg- council area page, UK cluster Phase 7, row 259). One council. Spine: where does a beam balance?
// Anchor: Historic Environment Scotland LB52529 (Category A, added 24 October 2019), "Beam engine house, excluding late
// 20th century office interiors, former Devon Colliery, Fishcross" (portal text read raw 26 September 2026): "the beam
// engine pumping house of the former Devon Colliery, built in 1864 by Neilson & Company of Glasgow"; "The cast iron
// pumping beam and cast iron girders of the pumping engine machinery survive in situ"; beam inscribed "No.189 / Neilson
// & Co. / Glasgow / 1864"; pumps "fully installed and operational by 1879"; electric pumps and a steam turbine pump
// replaced it in 1932, "although the beam engine continued in occasional use to supplement the new pumps until the
// 1950s"; "one of only two surviving historic beam engine houses within Scotland"; "the Cornish-type pumping engine was
// an important advance in the development of steam power". Official electoral pages probed for another idea returned
// 404 or 403 (logged).
// Our model (scratchpad clk/beam.py; every number invented, not the Devon engine): beam 10 m, pivot at 5 m, mass per
// metre 1.0 to 2.0 t: total 15 t, centre of mass 5.5556 m (sum of 100,000 slices and the exact integral agree). Loads:
// 12 t at 0.5 m, 3 t at 9.5 m. Net moment about the pivot -32.167 t m. A 4 t counterweight would need to sit 13.042 m
// from the pump end, off the beam; bisection on [5, 10] silently returns 10 because both ends give the same sign.
// Smallest counterweight that balances at 9.5 m: 7.148 t; 8 t balances at 9.021 m; with 2 t more at the pump end the 8 t
// must move to 10.146 m, off the beam again.
// Lesson family: moments and centre of mass (numerical integration against the exact answer), feasibility checks, and a
// bisection that fails without a sign change; screened (centre of mass: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Clackmannanshire S12000005 51,800; 24,100 households; 325.4
// per square kilometre; ages 0 to 14 8,200 (15.8 per cent), 65+ 10,700 (20.7 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'CLACKMANNANSHIRE', blurb: 'Alloa, Tullibody and the Hillfoots villages, and a Fishcross lesson on balancing a beam, and noticing when balance is impossible.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-clackmannanshire',
  code: 'clk',
  accent: '#7A2B2B',
  accentRationale: 'Clackmannanshire: a red-sandstone brick red from the solver (7.66:1 on the darkest paper tint), for the Devon Colliery engine house, brighter than the Angus and Shropshire reds',
  pageType: 'governorate',
  place: {
    name: 'Clackmannanshire',
    eyebrow: 'Clackmannanshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Stirling', href: '/best-coding-class-in-stirling' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Clackmannanshire',
  title: 'Coding Classes in Clackmannanshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Clackmannanshire, from Alloa, Tullibody and Sauchie to Alva, Tillicoultry, Clackmannan, Menstrie and Dollar.',
  ogDescription: 'Coding classes for all of Clackmannanshire, and a beam engine project: find where a loaded beam balances in Python, and catch the answer that falls off the end of the beam.',
  twitterDescription: 'Clackmannanshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Clackmannanshire',
    description: 'Ability-placed online coding, Python, physics-style modelling and mathematics for children, teenagers and adults across Clackmannanshire, taught live in English.'
  },

  h1: 'Coding classes in Clackmannanshire',
  capsuleQ: 'What are the best coding classes in Clackmannanshire?',
  capsule: 'Clackmannanshire is one compact council area: Scotland\'s Census 2022 counted about 51,800 people in some 24,100 households, packed at 325.4 people per square kilometre. Alloa is the main town, with Tullibody and Sauchie close by and the Hillfoots villages of Menstrie, Alva, Tillicoultry and Dollar along the foot of the Ochils. Lessons are taught live over video from India, and every learner joins the class that fits their ability, from Primary 1 to S6 and adults. Ages 6 to 67 learn coding, Python and maths with us in groups of five to ten or one-to-one. The Clackmannanshire project comes from a beam engine house at Fishcross. Try one lesson free; after that, groups cost USD 100 a month and one-to-one lessons USD 150.',
  lead: 'At Fishcross, a red sandstone engine house still holds the cast iron beam that once pumped water out of the Devon Colliery. Historic Environment Scotland\'s listing says it was built in 1864 by Neilson and Company of Glasgow, with the beam itself inscribed "No.189", and that it is one of only two surviving historic beam engine houses in Scotland. A beam engine is, at heart, an enormous see-saw, and a see-saw raises a question physics and programming share: where does it balance? This page\'s project works out the balance point of a loaded model beam in Python, checks the answer two ways, and then meets the most useful surprise in the whole exercise: an answer that falls off the end of the beam.',
  wa: 'Hello Modern Age Coders, we are in Clackmannanshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Clackmannanshire',
    h2: 'Where Clackmannanshire learners begin',
    intro: 'A P4 pupil in Tullibody who loves see-saws and balance puzzles, an S1 in Alloa starting Python, an S4 in Alva preparing for National 5 Maths, and an adult in Dollar who wants to model things at work. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including balance puzzles and moving objects.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, with moments, averages and models checked in Python.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, up to models and calculations that are checked properly.' }
    ]
  },

  sections: [
    {
      id: 'clackmannanshire', tint: '', eyebrow: 'Clackmannanshire in figures',
      h2: 'About 51,800 people between the Forth and the Ochils',
      intro: 'The 2022 census figures are first results rounded to hundreds by the National Records of Scotland. The town list uses NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Clackmannanshire localities above 1,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Alloa', '14,440'],
          ['Tullibody', '8,490'],
          ['Sauchie', '6,310'],
          ['Alva', '4,630'],
          ['Tillicoultry', '4,620'],
          ['Clackmannan', '3,260'],
          ['Menstrie', '2,870'],
          ['Dollar', '2,840'],
          ['Coalsnaughton', '1,290']
        ] },
        { kind: 'p', text: 'With 325.4 residents per square kilometre, Clackmannanshire is far more densely settled than Scotland overall, at 69.8, because most people live in a handful of towns close together. By our addition of the census age groups, 15.8 per cent of residents are under 15 and 20.7 per cent are 65 or older, very close to the Scottish figures of 15.3 and 20.1. Clackmannanshire Council sets school term dates; we did not read them and plan breaks with each family instead.' },
        { kind: 'callout', h3: 'Stirling next door', p: 'The city of <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> has its own page. For exams, our <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> pages describe support.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Clackmannanshire project',
      h2: 'Balancing a beam, and a balance that cannot happen',
      intro: 'Moments, a centre of mass found two ways, and an answer that lies beyond the end of the beam.',
      body: [
        { kind: 'p', text: 'The model is invented, not the Fishcross engine. A 10 metre beam pivots at its middle and is cast thicker at one end, so its mass per metre rises steadily from 1 to 2 tonnes. The learner finds its centre of mass two ways: by slicing it into 100,000 thin pieces and adding up each piece\'s mass times its position, and by the exact formula from calculus. Both give a total of 15 tonnes balancing at 5.5556 metres from the lighter end. A numerical answer and an exact one that agree to four places is a good sign both are right.' },
        { kind: 'p', text: 'Now the loads: 12 tonnes hanging half a metre from one end, where the pump rods would be, and 3 tonnes half a metre from the other. Each load turns the beam with a moment, its mass times its distance from the pivot, and the moments do not cancel: the pump end is heavier by 32.2 tonne-metres. Where should a 4 tonne counterweight go to balance it? The formula answers instantly: 13.04 metres from the pump end. But the beam is only 10 metres long.' },
        { kind: 'table', caption: 'Balancing our model beam, calculations of 26 September 2026', head: ['Counterweight', 'Where it must sit', 'Possible?'], rows: [
          ['4 tonnes', '13.04 m from the pump end', 'No: beyond the end of the beam'],
          ['7.15 tonnes', '9.5 m, the last useful point', 'Just'],
          ['8 tonnes', '9.02 m', 'Yes'],
          ['8 tonnes, with 2 tonnes more at the pump end', '10.15 m', 'No: off the beam again']
        ] },
        { kind: 'p', text: 'The lesson is about checking answers against reality. Algebra happily returned a position that does not exist. A search method did something worse: bisection, which halves a range until it finds where the moments cancel, was told to look between the pivot and the end of the beam and quietly returned 10 metres, the end itself, because the moments never changed sign in that range. A program that reports "10 metres" with no warning is more dangerous than one that crashes. Good code checks that a solution exists before trusting the number it prints.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Balance a ruler on a pencil with coins at different distances, and predict where one more coin must go before trying it.' },
          { h3: 'Ages 11 to 15', p: 'Write Python that adds up moments for a list of loads and says which way the beam will tip.' },
          { h3: 'Ages 15 and up', p: 'Compute a centre of mass by slicing and by calculus, then write a bisection search that refuses to answer when there is no sign change.' }
        ] },
        { kind: 'callout', h3: 'What is recorded and what is invented', p: 'The facts about the engine house are from its Historic Environment Scotland listing. The beam, its loads and every number on this page are invented for teaching and do not describe how the Devon Colliery engine was built or worked.' }
      ]
    },
    {
      id: 'fishcross', tint: 'deep', eyebrow: 'Why Fishcross',
      h2: 'A pumping beam from 1864, still in place',
      intro: 'The Clackmannanshire link, in the words of its Category A listing.',
      body: [
        { kind: 'table', caption: 'Historic Environment Scotland listing LB52529, former Devon Colliery, Fishcross', head: ['Point', 'The listing says'], rows: [
          ['Built', 'In 1864 by Neilson and Company of Glasgow.'],
          ['The beam', 'The cast iron pumping beam survives in place, inscribed "No.189 / Neilson & Co. / Glasgow / 1864".'],
          ['Working life', 'Pumps fully operational by 1879; replaced in 1932, but used occasionally until the 1950s.'],
          ['Rarity', 'One of only two surviving historic beam engine houses within Scotland.'],
          ['Why it matters', 'Its Cornish-type pumping engine was an important advance in steam power for deep mining.']
        ] },
        { kind: 'p', text: 'Centres of mass matter wherever things must balance or not tip: cranes, bridges, lorries on a slope, robots, even the characters in a video game. Engineers compute them with exactly the two methods on this page, and check every answer for whether it can physically happen. A Clackmannanshire student who has watched a formula point off the end of a beam has learned a habit that separates careful programmers from careless ones.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland or Clackmannanshire Council. The listing\'s facts are theirs; the model and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a> is west, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> east across the county line, and <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a> over the Ochils. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From balance puzzles to checked models',
    intro: 'The free lesson shows where to begin. The school stage is only a hint.',
    cols: [
      { band: 'P1 to P4', h3: 'Tipping and balancing', p: 'Block coding games where objects tip, slide and balance.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Sums that model things', p: 'Typed Python and maths with moments, averages and simple physics.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Modelling properly', p: 'Full Python with numerical methods, alongside National 5, Higher and Advanced Higher Maths.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Calculations you can trust', p: 'Python for adults who build models and spreadsheets and need them to be right.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and impossible answers',
    h2: 'An AI will give you a number. Will it check the number can exist?',
    intro: 'The most dangerous wrong answer is a confident one that looks reasonable.',
    p1: 'Ask an assistant where a 4 tonne counterweight should go on our model beam and it may well work out 13.04 metres correctly, without noticing that the beam is only 10 metres long. Code that it writes to search for the answer may return the end of the beam with no warning, as our bisection did. Neither answer is useful, and neither announces that it is wrong.',
    p2: 'A Clackmannanshire student who has met this knows to ask the physical question after every calculation: can this happen? Checking feasibility is part of the answer, whether the number comes from a formula, a program or an AI.',
    closer: 'So a young person in Clackmannanshire should learn to code in 2026 to check that an answer can actually happen before trusting it.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The practical side',
    h2: 'Alloa to Dollar, no bus needed',
    intro: 'Even in a compact council area, evening classes at the right level can mean a journey. Online lessons remove it.',
    cells: [
      { h3: 'From home in the Hillfoots', p: 'A house in Menstrie, a flat in Alloa, a cottage near Dollar. The pupil writes the code while the teacher watches the same screen.' },
      { h3: 'Scottish school terms', p: 'Teachers know P1 to P7, S1 to S6 and the National 5, Higher and Advanced Higher courses by those names, and lessons are in English.' },
      { h3: 'First lesson free', p: 'A genuine lesson, then an honest suggestion of level and course, with no card details requested.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at the same point, wherever in the world they join from.' },
      { h3: 'Holiday breaks', p: 'Two lessons a week in term, pausing for Clackmannanshire school holidays.' },
      { h3: 'A fixed UK slot', p: 'Your lesson keeps the same UK time when the clocks change; the teacher, several hours ahead on India time, adapts.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even with 51,800 people close together, five learners at one stage free on the same evening are hard to find. Level-based groups let a pupil in Coalsnaughton or Sauchie join a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Clackmannanshire',
    intro: 'Tillicoultry or Tullibody, the fee is the same, as it is in every country we teach except India.',
    first: 'A full lesson of real work, followed by advice on level and course.',
    group: 'About eight lessons a month in a group of five to ten at one level.',
    private: 'About eight lessons a month, taught one-to-one.',
    closer: 'Fees are charged in US dollars only. Billing starts once the free lesson has agreed a course and weekly time; holidays, missed lessons and format changes are all covered on the pricing page.'
  },

  reviewsH2: 'Families rate us on Google',

  book: {
    h2: 'Book a free Clackmannanshire lesson',
    intro: 'Tell us the pupil\'s stage or an adult\'s goal and what they like. A first lesson might be a Scratch balance game, a Python moment calculator, or the beam on this page.',
    success: 'Thank you. Your Clackmannanshire request is in.'
  },

  faq: {
    h2: 'Clackmannanshire questions',
    intro: 'The council area, the beam project and the details.',
    items: [
      { q: 'How many people live in Clackmannanshire?', a: 'About 51,800 usual residents in roughly 24,100 households, from Scotland\'s Census 2022 first results as rounded by the National Records of Scotland.' },
      { q: 'What are the largest towns in Clackmannanshire?', a: 'By NRS mid-2020 locality estimates: Alloa 14,440, Tullibody 8,490, Sauchie 6,310, Alva 4,630 and Tillicoultry 4,620.' },
      { q: 'What is the beam engine project?', a: 'Learners find the centre of mass of a model beam two ways, compute the moments of its loads, and discover that the counterweight position the formula gives can lie off the end of the beam, and that a search can hide this.' },
      { q: 'What is a centre of mass?', a: 'The single point where an object\'s weight can be treated as acting, so it balances if supported there. For a beam with loads it is found by adding up each mass times its distance and dividing by the total mass.' },
      { q: 'What is the Fishcross beam engine house?', a: 'Historic Environment Scotland lists it at Category A: built in 1864 by Neilson and Company of Glasgow for the Devon Colliery, it still holds its cast iron pumping beam and is one of only two surviving historic beam engine houses in Scotland.' },
      { q: 'Are lessons held in Clackmannanshire?', a: 'No. We teach live online only, so pupils join from home anywhere in the council area.' },
      { q: 'Do you teach National 5 and Higher Maths?', a: 'Yes. Our National 5 and Higher Maths pages describe the support; we help pupils learn and do not promise grades.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67: block coding for young pupils, Python from around P6, full Python and exam maths in secondary, and Python for adults.' },
      { q: 'What do lessons cost?', a: 'The first lesson is free. Groups are USD 100 a month and one-to-one lessons USD 150 a month after that, with no joining fee.' },
      { q: 'Do you pause for Clackmannanshire school holidays?', a: 'Yes. Clackmannanshire Council publishes term dates; share yours and we plan breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Clackmannanshire',
    html: 'See <a class="cg-inline-link" href="/best-coding-class-in-stirling">Stirling</a>, <a class="cg-inline-link" href="/best-coding-class-in-dunfermline">Dunfermline</a> and <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a>, or our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page for all 32 councils. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Clackmannanshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-stirling', label: 'Stirling' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-clk .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-clk .cg-hero h1 { font-weight: 800; letter-spacing: -0.027em; line-height: 1.02; }
.cg-root.cg-clk .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-clk .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-clk .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-clk .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-clk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-clk .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-clk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-clk .cg-callout { border-left-width: 5px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Clackmannanshire (S12000005), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 51,800 (females 26,400, males 25,400); households 24,100; density 325.4 per square kilometre (Scotland 69.8); ages 0 to 14 8,200 (15.8 per cent), 65+ 10,700 (20.7 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Alloa 14,440; Tullibody 8,490; Sauchie 6,310; Alva 4,630; Tillicoultry 4,620; Clackmannan 3,260; Menstrie 2,870; Dollar 2,840; Coalsnaughton 1,290. HES LB52529 (Category A, 24 October 2019), former Devon Colliery, Fishcross: "built in 1864 by Neilson & Company of Glasgow"; "The cast iron pumping beam and cast iron girders of the pumping engine machinery survive in situ"; "No.189 / Neilson & Co. / Glasgow / 1864"; "operational by 1879"; replaced "in 1932"; "occasional use ... until the 1950s"; "one of only two surviving historic beam engine houses within Scotland"; "the Cornish-type pumping engine was an important advance in the development of steam power and the technology used in deep mining work".',
    localProject: 'Moments and centre of mass on an invented beam: 10 m, pivot 5 m, mass per metre 1 + 0.1x t/m; total 15 t, centre of mass 5.5556 m by 100,000-slice sum and exact integral. Loads 12 t at 0.5 m and 3 t at 9.5 m; net moment -32.167 t m. Counterweight 4 t: 13.042 m (off beam); bisection on [5, 10] returns 10.000000 after 23 halvings with no sign change (f(5) -32.167, f(10) -12.167). Minimum at 9.5 m: 7.148 t; 8 t at 9.021 m; 10 t at 8.217 m; 8 t with +2 t at pump end: 10.146 m (off beam). Page labels model as invented. AI angle: feasibility checks. Lesson family: centre of mass, moments, numeric vs exact, feasibility, bisection sign-change precondition.',
    requiredMentions: [
      '51,800',
      '24,100',
      'LB52529',
      'Neilson',
      'Devon Colliery',
      'Fishcross',
      'centre of mass',
      'Tullibody',
      'Tillicoultry',
      'Menstrie',
      'Sauchie'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Clackmannanshire and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB52529: beam engine house, former Devon Colliery, Fishcross.', url: 'https://portal.historicenvironment.scot/designation/LB52529' }
    ],
    rejectedClaims: [
      'How the Devon Colliery engine was rigged, its dimensions and loads: not in the listing, so the model is invented and says so.',
      'Voting-system facts for Scottish council elections: official pages probed returned 404 or 403, so that idea was dropped.',
      'That Clackmannanshire is the smallest council area in Scotland: not read from a source, not claimed.',
      'Clackmannanshire school term dates: none read.',
      'Named Clackmannanshire schools: none named, although one appears in the HES list of Category A buildings.',
      'Coal mining employment or history beyond the listing: not researched.'
    ]
  }
};
