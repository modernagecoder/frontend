'use strict';
// West Dunbartonshire (cg- council area page, UK cluster Phase 7, row 281). One council. Spine: how can a 4 metre model
// in a tank tell you how hard a 100 metre ship must push? Anchor (read raw 26 September 2026): Historic Environment
// Scotland LB24873, Category A, Castle Street, Ship Model Experiment Tank, Dumbarton: "1882-3. E R Mumford, Superintendent
// of the works (Mumford, together with William Froude, naval architect (d. 1879), had previously established a tank at
// Torquay)"; "parapet swept up in centre containing carved panel of William Froude"; "Long narrow brick-lined tank";
// "Brick extension at south end dates from 1920s and contains a wavemaker"; "Built for Denny's of Dumbarton"; "The first
// privately owned experimental tank built in the world, and said to now be the oldest still in existence"; "Experiment
// Book No. 1 dates the first experiment to 21 February 1883".
// Our model (scratchpad wdb/froude.py; every size invented): ship 100 m at 15 knots (7.72 m/s), model 1:25 (4 m).
// Froude scaling: model 1.543 m/s; Froude numbers both 0.2464. Reynolds numbers ship 6.48e8 (sea, nu 1.19e-6), model
// 5.42e6 (fresh, nu 1.14e-6), ratio 120; matching Reynolds would need the model at 185 m/s. ITTC-1957 friction
// coefficients: ship 0.00162, model 0.00335. Invented measured model resistance 30.0 N: friction 15.94 N (53 per cent),
// rest 14.06 N. Ship: rest 225.1 kN, friction 123.3 kN, total 348.4 kN; naive cube scaling of the whole 480.5 kN (38 per
// cent too high); effective power 2.69 MW versus naive 3.71 MW. Model speed at 1:10 2.440, 1:25 1.543, 1:50 1.091 m/s.
// Lesson family: similarity laws (Froude and Reynolds numbers), splitting a quantity before scaling; distinct from
// Oxfordshire (energy versus power units). Screened: Froude, towing tank 0 hits outside that page's unit-analysis phrase.
// Place facts: NRS, Scotland's Census 2022 rounded estimates: West Dunbartonshire S12000039 88,400; 42,600 households;
// 556.8 per square kilometre; 0 to 14 13,900 (15.7 per cent), 65+ 17,600 (19.9 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'WEST DUNBARTONSHIRE', blurb: 'Clydebank, Dumbarton, Alexandria and Balloch, and a Denny tank lesson on scaling a model ship up to the real thing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-west-dunbartonshire',
  code: 'wdb',
  accent: '#20505C',
  accentRationale: 'West Dunbartonshire: a test-tank water blue from the solver (7.16:1 on the darkest paper tint), greener than the Orkney slate and bluer than the Shetland teal',
  pageType: 'governorate',
  place: {
    name: 'West Dunbartonshire',
    eyebrow: 'West Dunbartonshire',
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
  routeLabel: 'West Dunbartonshire',
  title: 'Coding Classes in West Dunbartonshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across West Dunbartonshire, from Clydebank and Dumbarton to Alexandria, Bonhill, Balloch and Old Kilpatrick.',
  ogDescription: 'Coding classes for all of West Dunbartonshire, and a Denny tank project: scale a model ship test up to a full ship in Python and see why one number cannot do it all.',
  twitterDescription: 'West Dunbartonshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for West Dunbartonshire',
    description: 'Ability-placed online coding, Python, engineering maths and mathematics for children, teenagers and adults across West Dunbartonshire, taught live in English.'
  },

  h1: 'Coding classes in West Dunbartonshire',
  capsuleQ: 'What are the best coding classes in West Dunbartonshire?',
  capsule: 'West Dunbartonshire is a compact council area with about 88,400 residents in roughly 42,600 households at the 2022 census, living at 556.8 people per square kilometre. Clydebank and Dumbarton are the two main towns, with Bonhill, Alexandria, Duntocher and Hardgate, and Balloch next in size. Our teachers in India give every class live over video, and a free trial lesson finds each learner\'s stage, whether P1, S6 or long after school. Learners aged 6 to 67 study coding, Python and maths, in a group of five to ten or alone with a teacher. The West Dunbartonshire project starts in a long brick shed in Dumbarton. Carrying on after the trial costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Behind a narrow stone frontage on Castle Street in Dumbarton lies a long, narrow tank of water. Historic Environment Scotland lists it at Category A as the first privately owned ship model experiment tank built in the world, said to be the oldest still in existence. It was built in 1882 and 1883 for Denny\'s shipyard, the first experiment is dated 21 February 1883, and a carved panel on the front honours William Froude, the naval architect whose methods it used. The idea is bold: tow a small model, measure the drag, and predict what a full-sized ship will need. But a model is not simply a small ship, and scaling it up naively gives the wrong answer. This page\'s project shows why, in Python.',
  wa: 'Hello Modern Age Coders, we are in West Dunbartonshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for West Dunbartonshire',
    h2: 'First courses in West Dunbartonshire',
    intro: 'A P3 in Clydebank who builds boats in the bath, a P6 in Alexandria ready for typed code, an S5 in Dumbarton taking Higher Maths, and an adult in Balloch retraining in engineering. A free lesson comes first for each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch projects with floating, sinking and racing boats.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Ratios, square roots and scale drawings brought to life in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, including logarithms and the algebra of scaling.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, up to engineering calculations and plots.' }
    ]
  },

  sections: [
    {
      id: 'west-dunbartonshire', tint: '', eyebrow: 'West Dunbartonshire figures',
      h2: 'About 88,400 people in West Dunbartonshire',
      intro: 'National Records of Scotland publishes the rounded council total from the first 2022 census results. The town figures belong to a different NRS series, dated mid-2020.',
      body: [
        { kind: 'table', caption: 'West Dunbartonshire localities above 2,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Clydebank', '25,620', 'Balloch and Haldane', '6,010'],
          ['Dumbarton', '20,480', 'Faifley', '4,740'],
          ['Bonhill', '9,060', 'Old Kilpatrick', '4,470'],
          ['Alexandria', '6,710', 'Renton', '2,350'],
          ['Duntocher and Hardgate', '6,680', '', '']
        ] },
        { kind: 'p', text: 'West Dunbartonshire packs 556.8 residents into each square kilometre, eight times the Scottish 69.8. The age mix is close to the national one: by our addition of the census bands, 15.7 per cent of residents are under 15 and 19.9 per cent are 65 or over, against 15.3 and 20.1 for Scotland. We have not read West Dunbartonshire Council\'s term dates, so each family simply tells us when school is out.' },
        { kind: 'callout', h3: 'Glasgow and qualifications', p: 'The <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> page covers the city. For Scottish exams, see <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The West Dunbartonshire project',
      h2: 'A four-metre model, a hundred-metre ship',
      intro: 'Two dimensionless numbers, one that can be matched and one that cannot.',
      body: [
        { kind: 'p', text: 'The ship and model are invented. The ship is 100 metres long and should cruise at 15 knots, about 7.7 metres a second. The model is built at a scale of 1 to 25, so it is 4 metres long. How fast should it be towed? The waves a hull makes depend on the Froude number, speed divided by the square root of gravity times length. For the model to make the same pattern of waves as the ship, the two Froude numbers must match, which means the model runs at the ship\'s speed divided by the square root of 25: about 1.54 metres a second. The learner checks it in Python: both Froude numbers come out at 0.2464.' },
        { kind: 'table', caption: 'Our invented ship and 1:25 model, 26 September 2026', head: ['Quantity', 'Model', 'Ship'], rows: [
          ['Length', '4 m', '100 m'],
          ['Speed', '1.54 m/s', '7.72 m/s'],
          ['Froude number', '0.2464', '0.2464'],
          ['Reynolds number', '5.4 million', '648 million'],
          ['Friction coefficient', '0.00335', '0.00162'],
          ['Resistance', '30.0 N measured (invented)', '348 kN predicted; 481 kN if scaled naively']
        ] },
        { kind: 'p', text: 'The catch is friction. Friction along the hull depends on a different quantity, the Reynolds number, speed times length divided by the water\'s viscosity. The model\'s Reynolds number is 120 times smaller than the ship\'s, and matching it would mean towing the 4 metre model at about 185 metres a second, which is impossible and would wreck the wave pattern anyway. So the model has proportionally about twice as much friction as the ship. Froude\'s solution, still the basis of practice, is to split the measured drag: estimate the friction part from a formula, scale only the remainder by the cube of the scale, and add back the ship\'s own, smaller friction.' },
        { kind: 'p', text: 'With an invented measured drag of 30 newtons, friction accounts for about 16 of them. Splitting and rebuilding gives a ship resistance of about 348 kilonewtons. Scaling the whole 30 newtons by the cube of 25 instead gives 481, 38 per cent too high, which would mean specifying engines far bigger than needed. The learner also sees how the tow speed changes with scale: a 1 to 10 model runs at 2.44 metres a second, a 1 to 50 model at just 1.09.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Race paper boats of different sizes along a gutter of water and time them, then build a Scratch race with the results.' },
          { h3: 'Ages 11 to 15', p: 'Compute Froude numbers in Python and find the right tow speed for models at several scales.' },
          { h3: 'Ages 15 and up', p: 'Add Reynolds numbers and the friction formula, split the drag properly, and compare with naive cube scaling.' }
        ] },
        { kind: 'callout', h3: 'A real tank, an imaginary ship', p: 'The tank\'s history comes from the Historic Environment Scotland listing. The ship, the model, the measured drag and every result are invented or calculated by us, using standard formulas and typical water properties, and do not describe any test carried out at Dumbarton.' }
      ]
    },
    {
      id: 'denny-tank', tint: 'deep', eyebrow: 'Why the Denny tank',
      h2: 'The world\'s first privately owned test tank',
      intro: 'What the Category A listing records.',
      body: [
        { kind: 'table', caption: 'Ship Model Experiment Tank, Castle Street, Dumbarton, HES listing LB24873', head: ['Listing detail', 'What it records'], rows: [
          ['Built', '1882 to 1883, for Denny\'s of Dumbarton'],
          ['People', 'E R Mumford, superintendent; he and William Froude had earlier set up a tank at Torquay'],
          ['Frontage', 'A carved panel of William Froude; inscribed Leven Ship Yard Experimental Tank'],
          ['Inside', 'A long narrow brick-lined tank with teak walkways and tracks for sliding platforms'],
          ['First experiment', '21 February 1883, according to Experiment Book No. 1'],
          ['Significance', 'The first privately owned experimental tank in the world, said to be the oldest still in existence']
        ] },
        { kind: 'p', text: 'Scaling from a model is everywhere in engineering and science: wind tunnels for cars and buildings, wave tanks for offshore wind turbines, lab reactors for chemical plants, and small computer simulations that stand in for big ones. In each case some quantities scale neatly and others refuse to. A West Dunbartonshire student who has split a model\'s drag before scaling it knows to ask which parts of any model really carry over.' },
        { kind: 'p', text: 'We have no link with Historic Environment Scotland or West Dunbartonshire Council. The listing\'s facts belong to them; the model ship, the calculations and any errors belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From paper boats to similarity laws',
    intro: 'Stages are guides; the free trial decides where to begin.',
    cols: [
      { band: 'P1 to P4', h3: 'Races and timers', p: 'Block coding with moving objects, speeds and stopwatches.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'P5 to S2', h3: 'Ratios in Python', p: 'Typed Python with scale, ratios and square roots.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Physics in code', p: 'Formulas, logarithms and models beside National 5, Higher and Advanced Higher courses.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Engineering Python', p: 'Python for adults, from quick calculations to full simulations.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and scaling',
    h2: 'An AI can scale a test result in seconds. Will it split the friction first?',
    intro: 'Multiplying by the cube of the scale is simple, confident and 38 per cent wrong here.',
    p1: 'Ask a chatbot to turn a model ship\'s measured drag into a full-size figure and it may simply multiply by the cube of the scale. The arithmetic is tidy, the answer looks authoritative, and the engines it implies are far bigger than the ship needs.',
    p2: 'A West Dunbartonshire learner who has matched one dimensionless number and corrected for the other knows which scaling rule applies to which part. That judgement is what turns AI arithmetic into sound engineering.',
    closer: 'Knowing what a model can and cannot tell you is the reason a West Dunbartonshire teenager should still learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How classes work',
    h2: 'From Clydebank to Balloch, lessons at home',
    intro: 'Every town in the council area joins classes in exactly the same way.',
    cells: [
      { h3: 'Real typing, real bugs', p: 'The learner writes each program; the teacher sees the shared screen and helps at the right moment.' },
      { h3: 'School stage names', p: 'A Faifley P5 or a Dumbarton S4 hears the stages they already use, up to Advanced Higher. Lessons are in English.' },
      { h3: 'Free trial lesson', p: 'A full lesson with no charge, then straightforward advice.' },
      { h3: 'Groups matched by stage', p: 'Five to ten learners at one stage in each group, some local and some far away.' },
      { h3: 'Term time schedule', p: 'Two lessons a week in term; the holidays are free.' },
      { h3: 'UK time that holds', p: 'Your lesson stays at its UK hour through the clock changes; our teachers on India time shift instead.' }
    ],
    spec: { title: 'Why groups reach beyond one town', p: 'Five learners at the same stage, free at the same hour, rarely live in one small town. Grouping by stage across a wide pool gives a pupil in Renton or Old Kilpatrick a class that fits.' }
  },

  fees: {
    h2: 'Fees in West Dunbartonshire',
    intro: 'Clydebank or Alexandria, the fee is identical, our standard rate for every country outside India.',
    first: 'A full trial lesson at no cost, then a recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one-to-one.',
    closer: 'Fees are in US dollars; there is no sterling price. We bill only once the trial has settled a course and a weekly time, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Google reviewers on our teaching',

  book: {
    h2: 'Book a free West Dunbartonshire lesson',
    intro: 'Give us the learner\'s age or stage and one interest, and we will build a first lesson around it: a Scratch boat race, a Python program, or the model ship on this page.',
    success: 'Thank you. Your West Dunbartonshire request has been received.'
  },

  faq: {
    h2: 'West Dunbartonshire questions',
    intro: 'The council area, the test tank project and practical points.',
    items: [
      { q: 'What is the population of West Dunbartonshire?', a: 'Roughly 88,400 residents in about 42,600 households, according to NRS\'s rounded 2022 census figures.' },
      { q: 'What are the main towns in West Dunbartonshire?', a: 'NRS mid-2020 estimates: Clydebank 25,620, Dumbarton 20,480, Bonhill 9,060, Alexandria 6,710 and Duntocher and Hardgate 6,680.' },
      { q: 'What is the Denny tank project?', a: 'Learners scale an invented 1:25 model ship test up to a 100 metre ship in Python, match Froude numbers, correct for friction using Reynolds numbers, and find naive scaling 38 per cent too high.' },
      { q: 'What is a Froude number?', a: 'Speed divided by the square root of gravity times length. Ships and models with the same Froude number make similar wave patterns.' },
      { q: 'How old is the Dumbarton ship model tank?', a: 'Historic Environment Scotland dates it to 1882 and 1883, with the first experiment on 21 February 1883, and lists it at Category A.' },
      { q: 'Where do lessons take place?', a: 'Online only, so learners join from home anywhere in West Dunbartonshire.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes, along with National 5 Maths and Computing Science. We teach for understanding and never guarantee grades.' },
      { q: 'What ages can learn?', a: 'From 6 to 67, from block coding for young children to Python for adults.' },
      { q: 'What does it cost?', a: 'The trial lesson is free, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Are there lessons in the school holidays?', a: 'No, lessons pause. Send us your school\'s holiday weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Pages near West Dunbartonshire',
    html: '<a class="cg-inline-link" href="/coding-classes-in-east-dunbartonshire">East Dunbartonshire</a> splits the West Highland Way into fair days, <a class="cg-inline-link" href="/coding-classes-in-inverclyde">Inverclyde</a> floods a dry dock and <a class="cg-inline-link" href="/coding-classes-in-renfrewshire">Renfrewshire</a> rolls a lifting bridge. All councils are on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'West Dunbartonshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-wdb .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wdb .cg-hero h1 { font-weight: 720; letter-spacing: -0.027em; line-height: 1.04; }
.cg-root.cg-wdb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-wdb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wdb .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-wdb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wdb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wdb .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.79rem; }
.cg-root.cg-wdb .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-wdb .cg-callout { border-left-width: 5px; border-radius: 0 9px 9px 0; }
`,

  dossier: {
    curriculumAuthority: 'West Dunbartonshire (S12000039), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 88,400 (females 45,900, males 42,400); households 42,600; density 556.8 per square kilometre (Scotland 69.8); ages 0 to 14 13,900 (15.7 per cent), 65+ 17,600 (19.9 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Clydebank 25,620; Dumbarton 20,480; Bonhill 9,060; Alexandria 6,710; Duntocher and Hardgate 6,680; Balloch and Haldane 6,010; Faifley 4,740; Old Kilpatrick 4,470; Renton 2,350. HES LB24873 (Category A, added 21/10/1976), Castle Street, Ship Model Experiment Tank, burgh Dumbarton: "1882-3. E R Mumford, Superintendent of the works (Mumford, together with William Froude, naval architect (d. 1879), had previously established a tank at Torquay)"; "carved panel of William Froude"; "Long narrow brick-lined tank"; "Double teak walkways"; "contains a wavemaker"; "Built for Denny\'s of Dumbarton"; "Leven Ship Yard Experimental Tank"; "The first privately owned experimental tank built in the world, and said to now be the oldest still in existence"; "first experiment to 21 February 1883".',
    localProject: 'Invented ship 100 m, 15 kn (7.72 m/s); model 1:25, 4 m, 1.543 m/s; Fn 0.2464 both. Re ship 6.48e8 (nu 1.19e-6), model 5.42e6 (nu 1.14e-6), ratio 120; Re match needs 185 m/s. ITTC-1957 Cf ship 0.00162, model 0.00335. Model 30.0 N: friction 15.94 (53 per cent), rest 14.06. Ship rest 225.1 kN, friction 123.3 kN, total 348.4 kN; naive 480.5 kN (+38 per cent); power 2.69 vs 3.71 MW. 1:10 2.440, 1:50 1.091 m/s. Lesson family: similarity laws, Froude vs Reynolds, split before scaling.',
    requiredMentions: [
      '88,400',
      '556.8',
      'Clydebank',
      'Dumbarton',
      'Bonhill',
      'Alexandria',
      'Duntocher',
      'Faifley',
      'Old Kilpatrick',
      'Renton',
      'LB24873',
      'Froude',
      'Reynolds number'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB24873: Ship Model Experiment Tank, Castle Street, Dumbarton.', url: 'https://portal.historicenvironment.scot/designation/LB24873' }
    ],
    rejectedClaims: [
      'Any real test, ship or result from the Denny tank: not claimed; the ship and model are invented.',
      'Current use or opening of the tank: not claimed.',
      'Clydebank shipbuilding and Titan crane facts: not used (statics already covered elsewhere).',
      'Water viscosity and density figures are typical values, labelled as ours.',
      'Named West Dunbartonshire schools and school term dates: none named or read.',
      'Distances between towns: not claimed.'
    ]
  }
};
