'use strict';
// South Ayrshire (cg- council area page, UK cluster Phase 7, row 279). One council. Spine: how much fuel does it take to
// boil the sea down to a tonne of salt, and which guess matters most? Anchor (read raw 26 September 2026): Historic
// Environment Scotland LB40332, Category A, Salt Pan Houses at St Nicholas Golf Course, burgh Prestwick: "Built circa 1760
// for the salt boiling industry, as the Maryburgh Salt Works, probably salt pans with housing above"; "certainly the most
// complete upstanding remains of the (saltboiling) industry on the west coast"; "In fact, they appear to be most complete
// to survive in Scotland"; "The Prestwick burgh/records of 12th February 1480 uses the term 'salt pan hous'"; applications
// for salt pans "on 25th June 1763 and 7th Sept. 1765".
// Our model (scratchpad say/salt.py; every input an assumption of ours): salinity 35 g per kg, sea at 10 C, heat capacity
// 4.18 kJ/kg/K, latent heat 2,257 kJ/kg, coal 25 MJ/kg, pan efficiency 20 per cent. One tonne of salt: seawater 28,571
// kg; water boiled 27,571 kg; heat 73.0 GJ (warming 10.7, boiling 62.2, 85 per cent); coal 14,595 kg; a perfect pan
// 2,919 kg. One-at-a-time swings in coal: efficiency 10 to 30 per cent 29,191 to 9,730 (swing 19,461); coal 20 to 30
// MJ/kg 18,244 to 12,163 (6,081); salinity 30 to 38 g/kg 17,103 to 13,408 (3,696); sea 5 to 15 C 14,715 to 14,476
// (239). Bug: salinity entered as 3.5 (per cent) where the code expects g/kg: seawater 285,714 kg, coal 150,017 kg.
// Lesson family: mass and energy balance, sensitivity analysis, unit-of-measure input bug; screened (latent heat, energy
// balance, salt pan: 0 hits; salinity appears in Castletroy only as a sensor channel).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: South Ayrshire S12000028 111,600; 52,500 households; 91.3
// per square kilometre; 0 to 14 15,700 (14.1 per cent), 65+ 29,400 (26.3 per cent) by our addition. NRS mid-2020
// localities. Burns anchors avoided (East Ayrshire). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SOUTH AYRSHIRE', blurb: 'Ayr, Troon, Prestwick, Girvan and Maybole, and a Prestwick salt pan lesson on how much coal it takes to boil the sea.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-south-ayrshire',
  code: 'say',
  accent: '#6B4650',
  accentRationale: 'South Ayrshire: a muted rose-brown from the solver (6.47:1 on the darkest paper tint), softer than the Midlothian plum and redder than the Borders stone',
  pageType: 'governorate',
  place: {
    name: 'South Ayrshire',
    eyebrow: 'South Ayrshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'North Ayrshire', href: '/coding-classes-in-north-ayrshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'South Ayrshire',
  title: 'Coding Classes in South Ayrshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across South Ayrshire, from Ayr, Troon and Prestwick to Girvan, Maybole, Coylton, Tarbolton and Symington.',
  ogDescription: 'Coding classes for all of South Ayrshire, and a Prestwick salt pan project: build an energy budget for boiling seawater in Python and find the guess that matters most.',
  twitterDescription: 'South Ayrshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for South Ayrshire',
    description: 'Ability-placed online coding, Python, science modelling and mathematics for children, teenagers and adults across South Ayrshire, taught live in English.'
  },

  h1: 'Coding classes in South Ayrshire',
  capsuleQ: 'What are the best coding classes in South Ayrshire?',
  capsule: 'Scotland\'s 2022 census counted about 111,600 people in South Ayrshire, in roughly 52,500 households, at 91.3 people per square kilometre. Ayr is much the largest place, with Troon and Prestwick close behind each other, then Girvan and Maybole, and villages such as Coylton, Tarbolton and Symington. We teach every class in real time over video from India; a first lesson, free, works out where each learner belongs, anywhere from P1 to S6 or adult study. Coding, Python and maths are available to ages 6 to 67, taught one-to-one or in a small group of five to ten. The South Ayrshire project begins at Prestwick\'s old salt works. Families who carry on pay USD 100 a month for a group or USD 150 a month for one-to-one.',
  lead: 'Beside a golf course in Prestwick stand two plain stone buildings that Historic Environment Scotland lists at Category A. They were built around 1760 as the Maryburgh Salt Works, with salt pans below and housing above, and the listing says they appear to be the most complete remains of salt boiling to survive in Scotland. The idea was simple: heat seawater in a big iron pan until the water has gone and salt is left. The cost was fuel, lots of it. How much, and which of the many unknowns really decides the answer? This page\'s project builds a mass and energy budget in Python, then pushes every assumption up and down to see which one moves the result most.',
  wa: 'Hello Modern Age Coders, we are in South Ayrshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for South Ayrshire',
    h2: 'Typical first courses in South Ayrshire',
    intro: 'A P3 in Troon who likes experiments, a P7 in Prestwick about to try typed code, an S5 in Ayr taking Higher, and an adult in Girvan learning to model costs at work. For each, the first step is a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with heating, cooling and simple science simulations.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Ratios, percentages and units handled properly, by writing code.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 12 to 18', note: 'Complete Python for teenagers, including physics models and checks.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Data analysis for adults, from spreadsheets to what-if models in Python.' }
    ]
  },

  sections: [
    {
      id: 'south-ayrshire', tint: '', eyebrow: 'South Ayrshire figures',
      h2: 'About 111,600 people in South Ayrshire',
      intro: 'The council-wide count is National Records of Scotland\'s rounded first result from the 2022 census. Figures for individual towns come from an NRS series for mid-2020.',
      body: [
        { kind: 'table', caption: 'South Ayrshire localities above 1,500 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Ayr', '46,260', 'Dundonald', '2,570'],
          ['Troon', '14,950', 'Coylton', '2,160'],
          ['Prestwick', '14,880', 'Mossblown', '2,100'],
          ['Girvan', '6,330', 'Tarbolton', '1,860'],
          ['Maybole', '4,580', 'Symington', '1,510']
        ] },
        { kind: 'p', text: 'South Ayrshire has 91.3 residents per square kilometre, a little above the Scottish 69.8. Its population is older than the national average: our sums of the census age bands give 26.3 per cent of residents aged 65 or over, against Scotland\'s 20.1, and 14.1 per cent under 15, against 15.3. Nobody here has read South Ayrshire Council\'s term dates, so families tell us their holidays directly.' },
        { kind: 'callout', h3: 'Ayrshire neighbours and exams', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">North Ayrshire</a> page rotates the stars back to 1638. For Scottish exams, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The South Ayrshire project',
      h2: 'Boiling the sea, on paper first',
      intro: 'A budget for water, heat and coal, and a test of every assumption.',
      body: [
        { kind: 'p', text: 'Every number in the model is an assumption, labelled as one. Seawater is taken to hold 35 grams of salt per kilogram, a typical figure for the open sea. To get one tonne of salt, the pan must take in about 28,571 kilograms of seawater and boil off 27,571 kilograms of water. The water first has to be warmed from 10 degrees to boiling, and then turned into steam, which needs far more energy per kilogram than the warming. The learner adds the two parts, divides by the energy in a kilogram of coal, taken as 25 megajoules, and allows for a pan that turns only a fifth of the coal\'s heat into useful work.' },
        { kind: 'table', caption: 'Our salt budget for one tonne of salt, assumptions ours, 26 September 2026', head: ['Quantity', 'Result'], rows: [
          ['Seawater needed', '28,571 kg'],
          ['Water boiled away', '27,571 kg'],
          ['Heat needed', '73.0 gigajoules, 85 per cent of it for boiling rather than warming'],
          ['Coal for a perfect pan', 'About 2.9 tonnes'],
          ['Coal for a pan 20 per cent efficient', 'About 14.6 tonnes'],
          ['Salinity typed as 3.5 instead of 35', '285,714 kg of seawater, ten times too much']
        ] },
        { kind: 'p', text: 'Then the sensitivity check. The learner moves one assumption at a time between a low and a high value and records how much the coal changes. Pan efficiency, from 10 to 30 per cent, swings the answer by about 19.5 tonnes. The energy in the coal, from 20 to 30 megajoules per kilogram, swings it by about 6 tonnes, and the saltiness of the sea, from 30 to 38 grams per kilogram, by about 3.7 tonnes. The temperature of the incoming sea, from 5 to 15 degrees, barely matters: less than a quarter of a tonne. So if a historian wanted a better estimate, the first thing to find out would be how efficient the pans were, not how warm the sea was.' },
        { kind: 'p', text: 'The last row is the bug. Salinity is often quoted as 3.5 per cent, and typing 3.5 into code that expects grams per kilogram silently makes everything ten times too large. Two simple checks, that the seawater must weigh more than the salt and the water boiled must weigh less than the seawater, will not catch it. A better test compares the answer with a rough figure worked out by hand, which is the habit this project builds.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Dissolve salt in warm water, leave it to evaporate, and build a Scratch animation of a pan boiling dry.' },
          { h3: 'Ages 11 to 15', p: 'Write the mass budget in Python for one tonne of salt and try different saltiness values.' },
          { h3: 'Ages 15 and up', p: 'Add the energy terms, run the one-at-a-time sensitivity check, and draw a bar chart ranking the assumptions.' }
        ] },
        { kind: 'callout', h3: 'Real salt works, invented numbers', p: 'The buildings and their history come from the Historic Environment Scotland listing. Salinity, temperatures, coal energy, pan efficiency and every result are assumptions or outputs of our own model, not records of how the Maryburgh Salt Works operated.' }
      ]
    },
    {
      id: 'salt-pans', tint: 'deep', eyebrow: 'Why the Prestwick salt pans',
      h2: 'Salt boiling on the Ayrshire coast',
      intro: 'What the Category A listing records.',
      body: [
        { kind: 'table', caption: 'Salt Pan Houses at St Nicholas Golf Course, Prestwick, HES listing LB40332', head: ['Listing detail', 'What it records'], rows: [
          ['Built', 'Circa 1760, for the salt boiling industry, as the Maryburgh Salt Works'],
          ['Form', 'A pair of parallel two-storey blocks, probably salt pans with housing above'],
          ['Rarity', 'Appear to be the most complete salt-boiling remains to survive in Scotland'],
          ['Early mention', 'Prestwick burgh records use the term salt pan hous on 12 February 1480'],
          ['Later records', 'Applications for salt pans discussed on 25 June 1763 and 7 September 1765']
        ] },
        { kind: 'p', text: 'Energy budgets and sensitivity checks sit behind decisions about heating homes, running data centres, planning solar farms and designing batteries. The question is always the same: which assumption, if wrong, would change the answer most? A South Ayrshire student who has ranked the guesses in a salt budget has learned where to spend effort when checking any model.' },
        { kind: 'p', text: 'Neither Historic Environment Scotland nor South Ayrshire Council has any link with us. The listing facts are theirs; the salt budget and any slips in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From evaporating dishes to energy models',
    intro: 'A rough guide; the free lesson sets the actual starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Science games', p: 'Block coding with simple experiments, timers and changing states.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Units and ratios', p: 'Typed Python with units, percentages and conversions.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Models and checks', p: 'Physics and data models beside National 5, Higher and Advanced Higher courses.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'What-if analysis', p: 'Python and data analysis for adults building estimates and scenarios.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and estimates',
    h2: 'An AI can build an energy model in seconds. Will it tell you which guess matters?',
    intro: 'A precise-looking answer can rest on one shaky number.',
    p1: 'Ask a chatbot how much coal it takes to make a tonne of salt and it will give a figure, perhaps with a formula. It rarely shows how much that figure would move if the efficiency were half or double, and it will not know whether you meant per cent or grams per kilogram.',
    p2: 'A South Ayrshire learner who has run a sensitivity check knows to ask which input drives the result, and to check units before trusting a number. Those two questions turn an AI\'s answer into something you can defend.',
    closer: 'Knowing which assumption drives an answer is why a young person in South Ayrshire should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it runs',
    h2: 'From Troon to Girvan, lessons over video',
    intro: 'Coastal towns and inland villages alike join from a laptop at home.',
    cells: [
      { h3: 'Hands-on from minute one', p: 'The learner writes the code; the teacher watches the shared screen and guides the next step.' },
      { h3: 'Stages as schools name them', p: 'A Prestwick S2 or an Ayr P5 will hear the Curriculum for Excellence names they know, through to Advanced Higher. Lessons are in English.' },
      { h3: 'Try it free', p: 'One whole lesson without charge, then an honest word on what fits.' },
      { h3: 'Five to ten per class', p: 'Classmates are grouped by stage and come from several countries.' },
      { h3: 'Term time, twice weekly', p: 'Lessons run twice a week in term and stop for the holidays.' },
      { h3: 'Clock changes covered', p: 'Your lesson holds its UK time when the clocks move; the teachers in India time adjust.' }
    ],
    spec: { title: 'Why classes mix towns', p: 'Five learners at one stage, all free at the same hour, rarely live in one Ayrshire town. Grouping by stage across a wide pool gives someone in Maybole or Coylton a class that suits.' }
  },

  fees: {
    h2: 'Fees in South Ayrshire',
    intro: 'Ayr or Maybole, the fee is identical, and the same everywhere we teach apart from India.',
    first: 'A complete trial lesson, free, then a clear suggestion.',
    group: 'About eight lessons a month with five to ten classmates.',
    private: 'About eight lessons a month, just you and the teacher.',
    closer: 'Fees are set in US dollars, and there is no sterling list. Payment starts only after the trial has fixed a course and a weekly time; the pricing page explains holidays, missed lessons and switching between group and one-to-one.'
  },

  reviewsH2: 'Comments and ratings on Google',

  book: {
    h2: 'Book a free South Ayrshire lesson',
    intro: 'Let us know the learner\'s age or school stage and what they enjoy, and we will plan a first lesson around it, perhaps a Scratch experiment, a Python program or the salt budget on this page.',
    success: 'Thank you. Your South Ayrshire request is with us.'
  },

  faq: {
    h2: 'South Ayrshire questions',
    intro: 'The council area, the salt pan project and how lessons work.',
    items: [
      { q: 'What is the population of South Ayrshire?', a: 'Rounded census figures for 2022 put South Ayrshire at about 111,600 residents in roughly 52,500 households.' },
      { q: 'What are the biggest towns in South Ayrshire?', a: 'NRS mid-2020 estimates give Ayr 46,260, Troon 14,950, Prestwick 14,880, Girvan 6,330 and Maybole 4,580.' },
      { q: 'What is the salt pan project?', a: 'Learners build a Python budget for boiling seawater down to a tonne of salt, find it needs about 73 gigajoules of heat, and use a sensitivity check to show that pan efficiency matters far more than sea temperature.' },
      { q: 'What is latent heat?', a: 'The energy needed to change a substance from one state to another without changing its temperature, such as turning boiling water into steam.' },
      { q: 'How old are the Prestwick salt pan houses?', a: 'Historic Environment Scotland dates them to about 1760, built as the Maryburgh Salt Works, and lists them at Category A.' },
      { q: 'Are classes held in Ayr?', a: 'No; everything is online, so a learner in Tarbolton joins in exactly the way one in Ayr does.' },
      { q: 'Can you help with Higher Maths?', a: 'Yes, along with National 5 Maths and Computing Science. We build understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'From 6 up to 67: blocks for young children, Python and exam maths for secondary pupils, and Python or data skills for adults.' },
      { q: 'What does it cost?', a: 'Nothing for the trial lesson. After that it is USD 100 per month in a group or USD 150 per month one-to-one.' },
      { q: 'What happens during school holidays?', a: 'Classes pause. Tell us your school\'s holiday weeks and we leave them clear.' }
    ]
  },

  next: {
    eyebrow: 'Close at hand',
    h2: 'More Ayrshire and south-west pages',
    html: '<a class="cg-inline-link" href="/coding-classes-in-east-ayrshire">East Ayrshire</a> hunts for a verse form in Burns, <a class="cg-inline-link" href="/coding-classes-in-north-ayrshire">North Ayrshire</a> rotates star positions, and <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">Dumfries and Galloway</a> counts stars under dark skies. See all councils on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, or the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for everywhere else.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'South Ayrshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-north-ayrshire', label: 'North Ayrshire' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-say .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-say .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-say .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-say .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-say .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-say .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-say .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-say .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-say .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-say .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'South Ayrshire (S12000028), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 111,600 (females 58,100, males 53,500); households 52,500; density 91.3 per square kilometre (Scotland 69.8); ages 0 to 14 15,700 (14.1 per cent), 65+ 29,400 (26.3 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Ayr 46,260; Troon 14,950; Prestwick 14,880; Girvan 6,330; Maybole 4,580; Dundonald 2,570; Coylton 2,160; Mossblown 2,100; Tarbolton 1,860; Symington 1,510. HES LB40332 (Category A, added 20/01/1989), Salt Pan Houses at St Nicholas Golf Course, burgh Prestwick: "Built circa 1760 for the salt boiling industry, as the Maryburgh Salt Works, probably salt pans with housing above"; "Pair parellel blocks"; "certainly the most complete upstanding remains of the (saltboiling) industry on the west coast"; "they appear to be most complete to survive in Scotland"; "records of 12th February 1480 uses the term \'salt pan hous\'"; applications "on 25th June 1763 and 7th Sept. 1765".',
    localProject: 'Assumptions: salinity 35 g/kg, sea 10 C, cp 4.18 kJ/kg/K, latent heat 2,257 kJ/kg, coal 25 MJ/kg, efficiency 20 per cent. Seawater 28,571 kg; water boiled 27,571 kg; heat 73.0 GJ (10.7 warming, 62.2 boiling, 85 per cent); coal 14,595 kg; perfect pan 2,919 kg. Swings: efficiency 29,191 to 9,730 (19,461); coal energy 18,244 to 12,163 (6,081); salinity 17,103 to 13,408 (3,696); sea temp 14,715 to 14,476 (239). Bug 3.5 as g/kg: seawater 285,714 kg, coal 150,017 kg. Lesson family: energy balance and sensitivity analysis.',
    requiredMentions: [
      '52,500',
      'Troon',
      'Prestwick',
      'Girvan',
      'Maybole',
      'Coylton',
      'Mossblown',
      'Tarbolton',
      'Symington',
      'LB40332',
      'Maryburgh',
      'salt pan',
      'latent heat'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB40332: Salt Pan Houses at St Nicholas Golf Course, Prestwick.', url: 'https://portal.historicenvironment.scot/designation/LB40332' }
    ],
    rejectedClaims: [
      'How much coal the Maryburgh Salt Works actually used, or its output: not in the listing, not claimed.',
      'Salinity of the Firth of Clyde: not measured; 35 g/kg is labelled a typical open-sea assumption.',
      'Burns heritage sites: avoided to keep the Burns anchor with East Ayrshire.',
      'Golf course and Open Championship facts: not researched for this page.',
      'Named South Ayrshire schools and school term dates: none named or read.',
      'Directions or distances between towns: not claimed.'
    ]
  }
};
