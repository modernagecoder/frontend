'use strict';
// City of London (cg- page, UK cluster Phase 5, row 188). Named sources only.
// Spine: what shape should an arch be? Historic England list entries: 1079157 Cathedral Church of St Paul (Grade I),
// 1675 to 1710 by Sir Christopher Wren, rebuilding the medieval cathedral burnt in the Great Fire, Portland stone, central
// dome; 1193901 The Monument (Grade I), 1671 to 77 by Wren, built to commemorate the Great Fire of 1666 which began
// nearby, spiral staircase round an open well. Physics project: a hanging chain takes the curve that carries its own
// weight in pure tension; turned upside down, the same curve carries its weight in pure compression. Computed 26
// September 2026 by minimising the potential energy of a 60-link chain, 3 m long, pinned at points 2 m apart (SciPy
// SLSQP, exact link lengths): sag 1.0055 m against 1.0053 m for the exact catenary (a = 0.61647); catenary fits within
// 0.18 mm (rms 0.11 mm); best parabola misses by up to 35 mm (rms 25 mm), 224 times worse. Shallow chain (2.1 m on the
// same pins): parabola within 1.25 mm. Semicircular arch versus inverted catenary of the same rise (half the span):
// up to 0.214 of the half-span apart near the springing. No claim is made that St Paul's dome or any City arch is a
// catenary. Lesson family: catenary and energy minimisation with constraints; screened 26 September 2026 (catenary 0).
// City of London libraries pages returned 404 at the URLs tried, so none are named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'CITY OF LONDON', blurb: 'St Paul\'s Cathedral, the Monument and a project that finds the ideal shape for an arch by hanging a chain.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-the-city-of-london',
  code: 'col',
  accent: '#A33E59',
  accentRationale: 'City of London: a muted rose-red chosen by colour distance from every accent already on the site (4.73:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'City of London',
    eyebrow: 'The City of London',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'City of London',
  title: 'Coding Classes in the City of London | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for the City of London: the Barbican, Smithfield, Aldgate, Bank, Temple and Blackfriars. Ages 6 to 67.',
  ogDescription: 'City of London coding and Python classes, with a physics project near St Paul\'s where learners hang a virtual chain and discover the ideal shape for an arch.',
  twitterDescription: 'City of London coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for City of London Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the City of London, taught live in English.'
  },

  h1: 'Coding classes in the City of London',
  capsuleQ: 'What are the best coding classes in the City of London?',
  capsule: 'The City of London is the Square Mile of the Barbican, Smithfield, Aldgate, Bank, Temple, Blackfriars and Liverpool Street, home to only 8,583 residents at the 2021 Census, the fewest of any London local authority, yet to 86 Grade I buildings including St Paul\'s Cathedral and the Monument. A class worth joining lets a learner discover a law of nature with code rather than read it in a book, and this page does that with arches: hang a virtual chain, let the computer find the shape of least energy, and turn it upside down to get the ideal arch. Teaching happens live on video from India, for anyone aged 6 to 67, one to one or in a group of five to ten learners at the same stage. Lesson one is free; from then on, group places cost USD 100 a month and private lessons USD 150 a month.',
  lead: 'Historic England\'s list entry for St Paul\'s Cathedral records a rebuilding by Sir Christopher Wren between 1675 and 1710, in Portland stone, with a great central dome, after the medieval cathedral burnt in the Great Fire. Nearby stands Wren\'s Monument to that fire, built between 1671 and 1677. Buildings like these raise a question every engineer faces: what shape should an arch or a dome be, so that it carries its own weight without bending? There is a beautifully simple answer, and learners find it themselves. Hang a chain between two points and it settles into a curve where every link pulls purely along the chain. Flip that curve upside down and every stone would push purely along the arch. Our learners let a computer hang a chain of 60 links, compare the result with the curves they know, and see which one nature chose.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in the City of London.',

  picks: {
    eyebrow: 'Course picks for the City',
    h2: 'Courses City learners begin with',
    intro: 'Picture a Year 3 child in the Barbican who builds towers of blocks until they topple, a Year 10 pupil at a City school fascinated by old buildings, a Year 13 student heading for architecture or engineering, and an office worker near Bank who walks past St Paul\'s every day and wonders how it stands up. Each can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch chain of beads that swings and settles, and a first look at shapes that gravity makes.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with curves: plot a parabola, then a hanging rope, and compare them on the same chart.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the energy-minimising chain and catenary fit on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who enjoy architecture and engineering and want to see the maths behind the shapes.' }
    ]
  },

  sections: [
    {
      id: 'city', tint: '', eyebrow: 'The Square Mile in figures',
      h2: '8,583 residents and 613 listed buildings',
      intro: 'Each number here is the named organisation\'s own, or our count of its open data.',
      body: [
        { kind: 'table', caption: 'The City of London, by the numbers', head: ['Measure', 'Figure', 'Where it comes from'], rows: [
          ['Residents at the 2021 Census', '8,583, the fewest of London\'s 33 local authorities', 'ONS table TS001'],
          ['Heritage List entries we counted inside the City', '613: 86 Grade I, 83 Grade II*, 444 Grade II', 'Historic England data, 26 September 2026'],
          ['St Paul\'s Cathedral built', '1675 to 1710, by Sir Christopher Wren', 'Historic England list entry 1079157'],
          ['Lines at Bank', 'Central, Northern and Waterloo & City on the Underground, plus the DLR', 'TfL open data, checked 26 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Wren\'s City', p: 'St Paul\'s Cathedral and the Monument are both Grade I, as are many City churches such as St Mary le Bow, St Bride and St Mary Woolnoth.' },
          { h3: 'Halls and institutions', p: 'The Guildhall, Mansion House, the Royal Exchange and the Bank of England building are all listed at Grade I.' },
          { h3: 'Temple and Smithfield', p: 'Middle Temple Hall, Temple Church, St Bartholomew the Great and the gatehouse of St Bartholomew\'s Hospital complete a remarkable Grade I list.' }
        ] }
      ]
    },
    {
      id: 'question', tint: 'tint', eyebrow: 'The question',
      h2: 'Which curve carries its own weight?',
      intro: 'A hanging chain cannot push; each link can only pull. Whatever shape it settles into must carry its weight in pure pulling, or tension.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hang it', p: 'Pin a chain at two points and let go. It settles into a smooth curve that sags in the middle.' },
          { h3: 'Flip it', p: 'Turn that curve upside down and the pulls become pushes. An arch built to that shape carries its weight in pure compression, which stone handles well.' },
          { h3: 'Name it', p: 'The curve is called a catenary. It looks like a parabola, but it is not one, and the project shows exactly how different they are.' }
        ] },
        { kind: 'p', text: 'We make no claim about the exact shape of St Paul\'s dome or any particular City arch; the list entries do not describe their geometry. The project uses the City\'s buildings as the question, and physics and code to find the answer. We looked for a list of the City\'s lending libraries, but the pages we tried returned "not found", so none are named here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Let a computer hang a chain',
      intro: 'Learners describe a chain as 60 equal links and ask the computer for the position of lowest total energy, with every link kept exactly the same length.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Energy', p: 'A chain settles where its total gravitational energy is as small as possible: the lower the links, the lower the energy.' },
          { h3: '2. Constraints', p: 'Every link must keep its length, and the ends must stay pinned. An optimiser searches for the lowest-energy shape that obeys those rules.' },
          { h3: '3. Compare', p: 'Fit the exact catenary formula and the closest parabola to the chain the computer found, and measure how far each misses.' }
        ] },
        { kind: 'table', caption: 'A 3 metre chain pinned at points 2 metres apart, computed 26 September 2026', head: ['Curve', 'Largest miss from the chain', 'Typical miss'], rows: [
          ['Catenary formula', '0.18 mm', '0.11 mm'],
          ['Closest parabola', '35 mm', '25 mm'],
          ['Sag at the middle', 'chain 1.0055 m', 'catenary 1.0053 m']
        ] },
        { kind: 'p', text: 'The catenary matches the computed chain to within a fifth of a millimetre over a two-metre span; the closest parabola misses by up to three and a half centimetres, about two hundred times worse. Yet when the chain hangs only slightly, 2.1 metres of chain on the same pins, the parabola comes within 1.3 millimetres, which is why the two are so easily confused. The flip side shows why the shape matters for building: a semicircular arch of the same height strays far from the ideal curve, by about a fifth of the half-span near its base.' },
        { kind: 'callout', h3: 'Why do this when an AI can state the answer?', p: 'Ask an AI what shape a hanging chain makes and it will say "a catenary". A learner who has made a computer find that shape from nothing but energy and constraints, then measured how far a parabola misses, has seen physics emerge from a calculation. That skill, turning a principle into a program and testing the result, is how engineers and scientists work with or without AI.' }
      ]
    },
    {
      id: 'optimise', tint: 'tint', eyebrow: 'The wider idea',
      h2: 'Nature as an optimiser',
      intro: 'Many shapes in the physical world are the answer to a "least energy" question. Code lets learners ask such questions directly.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Minimise', p: 'Soap films, hanging cables and settling structures all find low-energy shapes. Writing the energy down is the first step.' },
          { h3: 'Respect the rules', p: 'Constraints, like fixed link lengths and pinned ends, turn a simple minimum into a real engineering problem.' },
          { h3: 'Check the answer', p: 'A good program is tested against a known exact solution, as the chain is tested against the catenary formula here.' }
        ] },
        { kind: 'p', text: 'GCSE maths and physics students can follow energy, curves and the idea of fitting a curve to points; A-level students can meet the hyperbolic cosine, constrained optimisation and why the catenary satisfies the equilibrium of forces. The building details come from Historic England; the chain, fits and comparisons are our own, computed on 26 September 2026. Historic England, the City of London Corporation, TfL and the ONS have no connection with Modern Age Coders.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'Bank station, and a desk at home',
      intro: 'The City is criss-crossed by Tube, DLR and rail lines. Our lessons need none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Bank', p: 'TfL\'s open data lists the Central, Northern and Waterloo & City lines at Bank Underground station, with the DLR alongside.' },
          { h3: 'Barbican to Aldgate', p: 'Families in the Barbican estate and near Aldgate can join the same class without stepping outside.' },
          { h3: 'Small and steady', p: 'The City has few residents, so our classes gather learners from everywhere: five to ten at one stage, two evenings a week.' }
        ] },
        { kind: 'spec', title: 'The City among London\'s authorities', p: 'The City of London sits alongside London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> now links a page for every one of them, including <a class="cg-inline-link" href="/coding-classes-in-westminster-london">Westminster</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-tower-hamlets-london">Tower Hamlets</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From stacking blocks to constrained optimisation',
    intro: 'We set each learner\'s starting point from what they show in the free lesson, not from their year group alone.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Shapes and gravity', p: 'Children animate swinging chains and towers in Scratch and see which shapes stay up.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Plotting curves', p: 'Python that plots parabolas and other curves and compares them point by point.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Energy and fitting', p: 'Energy minimisation with constraints and exact-solution checks, strong preparation for physics, engineering and maths.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Engineering intuition', p: 'Adults learn to read the shapes of structures around them through the maths that governs them.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can name the curve. Why should a City learner derive it?',
    intro: 'Because knowing the name is not the same as knowing why, and why is what builds judgement.',
    p1: 'AI tools answer physics questions fluently. What they cannot give is the experience of setting up a problem from first principles, energy and constraints, and watching a computer arrive at a shape that matches an exact formula to a fifth of a millimetre. A learner who has done that understands optimisation, the idea at the heart of both engineering design and machine learning, where models are trained by minimising an error just as the chain minimises its energy.',
    p2: 'That link is worth stressing: every AI model is found by an optimiser searching for a low point. Learners who have seen an optimiser find a catenary have seen, in miniature, how AI itself is made.',
    closer: 'The City has been rebuilt in stone more than once. A learner here who can find the ideal arch with code has joined a very old conversation between builders and mathematicians.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Temple to Liverpool Street, taught live',
    intro: 'For City families, lessons happen at home, whatever the office hours around them.',
    cells: [
      { h3: 'A screen at home', p: 'A laptop or desktop, a headset and broadband that handles video are all that is required.' },
      { h3: 'Key Stages in England', p: 'Progress reports use English Key Stages, from the start of primary to sixth form, with GCSE and A level where they apply. Lessons are in English.' },
      { h3: 'Nothing to pay first', p: 'The opening lesson is free and properly taught, ending with the teacher\'s advice on level and course; no card is taken.' },
      { h3: 'Classmates from everywhere', p: 'With so few City residents, each class of five to ten at one stage is drawn from across the UK and beyond.' },
      { h3: 'Two evening sessions', p: 'Most classes meet on two evenings a week and break for holidays and exams by agreement.' },
      { h3: 'London time', p: 'Teachers work from India; every time we send is already in UK time.' }
    ],
    spec: { title: 'The smallest authority, a full class', p: 'Fewer than 9,000 people live in the City, so our classes are always drawn far more widely: five learners at the same stage and hour are found across the country.' }
  },

  fees: {
    h2: 'Fees for City families',
    intro: 'A free first lesson, then one monthly fee, the same as everywhere else in London.',
    first: 'A complete first lesson with a teacher, free, closing with a recommended level, course and time.',
    group: 'About eight live lessons a month, in a class of five to ten at one stage.',
    private: 'About eight live lessons a month, one to one.',
    closer: 'Families in the City are billed in US dollars, as every family outside India is, and the site shows no pound prices. Billing starts only after the free lesson, once a course and a regular evening are agreed. The pricing page explains pauses, missed lessons and changes between class and private teaching.'
  },

  reviewsH2: 'Six Google reviews from families we teach',

  book: {
    h2: 'Request a free lesson',
    intro: 'An age or school year and one interest is all we need to prepare. Lesson one might be a Scratch swinging chain, a Python curve plotter, or the arch project on this page.',
    success: 'Thank you. Your City of London lesson request has reached our team.'
  },

  faq: {
    h2: 'City of London questions',
    intro: 'About the Square Mile, the arch project and our lessons.',
    items: [
      { q: 'How many people live in the City of London?', a: 'The 2021 Census counted 8,583 usual residents, the smallest population of London\'s 33 local authorities, in ONS table TS001.' },
      { q: 'When was St Paul\'s Cathedral built?', a: 'Historic England\'s list entry dates Sir Christopher Wren\'s cathedral to 1675 to 1710, a rebuilding of the medieval cathedral burnt in the Great Fire.' },
      { q: 'What is a catenary?', a: 'The curve a chain or cable makes when it hangs freely between two points under its own weight. Its formula uses the hyperbolic cosine, and upside down it gives an arch that carries its own weight in pure compression.' },
      { q: 'Is a catenary the same as a parabola?', a: 'No. For a 3 metre chain between pins 2 metres apart, the closest parabola misses the true shape by up to 35 mm, while the catenary formula matches our computed chain to within 0.18 mm. For shallow chains the two look almost identical.' },
      { q: 'Is St Paul\'s dome a catenary?', a: 'We do not claim that. Historic England\'s list entry does not describe the dome\'s geometry, and the project uses the cathedral only as the question that starts the investigation.' },
      { q: 'When would City lessons happen?', a: 'After the free lesson we suggest a class at the right level with a free place and its regular evening, given in UK time; the teacher is in India.' },
      { q: 'What does a learner need?', a: 'A computer with sound and a reliable connection. The arch project needs Python with its standard scientific libraries.' },
      { q: 'Is there a Modern Age Coders centre in the City of London?', a: 'No. There is no City of London centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in the City of London cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'The rest of London',
    html: 'Every borough now has its own page on our <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, from <a class="cg-inline-link" href="/coding-classes-in-southwark-london">Southwark</a> across the river to <a class="cg-inline-link" href="/coding-classes-in-islington-london">Islington</a> to the north. Optimisation leads directly into our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes in London</a>, where models are trained by the same search for a minimum, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> sets out school stages across the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'The City and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-westminster-london', label: 'Westminster' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-col .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.8rem); }
.cg-root.cg-col .cg-hero h1 { font-weight: 770; letter-spacing: -0.02em; line-height: 1.03; }
.cg-root.cg-col .cg-capsule { border-left: 3px solid var(--cg-accent); border-top: 3px solid var(--cg-accent); padding: 0.9rem 0 0 1rem; }
.cg-root.cg-col .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-col .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-col .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.9rem); }
.cg-root.cg-col .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-col .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-col .cg-table td:nth-child(2) { font-weight: 650; }
.cg-root.cg-col .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.75rem; }
.cg-root.cg-col .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'City of London. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000001): 8,583 usual residents; smallest of E09000001-33. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 26 September 2026: 613 (I 86, II* 83, II 444); Grade I include 1079157 Cathedral Church of St Paul (1675 to 1710, Sir Christopher Wren, rebuilding after the Great Fire, Portland stone, central dome), 1193901 The Monument (1671 to 77 by Wren, commemorating the Great Fire of 1666 which began nearby), 1064696 CHURCH OF ST MARY LE BOW, 1064657 CHURCH OF ST BRIDE, 1064620 CHURCH OF ST MARY WOOLNOTH, 1064675 GUILDHALL, 1064604 Mansion House, 1064713 Royal Exchange, 1079134 BANK OF ENGLAND, 1064609 MIDDLE TEMPLE HALL, 1064646 TEMPLE CHURCH (ST MARY\'S), 1180873 CHURCH OF ST BARTHOLOMEW THE GREAT, 1079115 The Gatehouse, St Bartholomew\'s Hospital. TfL HUBBAN (Bank): Underground child 940GZZLUBNK = Central, Northern, Waterloo & City; 940GZZDLBNK = DLR. cityoflondon.gov.uk library URLs tried returned 404 on 26 September 2026; none named.',
    localProject: 'Chain of n = 60 equal links, total length 3.0 m, ends pinned at (-1, 0) and (1, 0); link angles as variables; minimise gravitational potential (sum of link midpoint heights) subject to end constraints, SciPy SLSQP (ftol 1e-14): converged, sag 1.00545 m. Exact catenary a from 2a sinh(1/a) = 3: a = 0.61647, sag 1.00527. Catenary vs chain: rms 0.00011 m, max 0.00018 m. Best parabola y = k(x^2 - 1): rms 0.02482, max 0.03536 (224x catenary rms). Shallow chain length 2.1: sag 0.2786, best parabola max gap 0.00125. Rise equal to half-span (a = 0.6188): semicircle minus inverted catenary up to 0.2144 at x = -0.895. No geometric claim about any real City structure. Lesson family: catenary via constrained energy minimisation; screened 26 September 2026.',
    requiredMentions: [
      '8,583',
      'catenary',
      'St Paul\'s Cathedral',
      'the Monument',
      'St Mary le Bow',
      'Middle Temple Hall',
      'St Bartholomew the Great',
      'Royal Exchange',
      'Barbican'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), City of London E09000001: 8,583 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000001&measures=20100' },
      { claim: 'Historic England list entry 1079157, Cathedral Church of St Paul: 1675 to 1710 by Wren.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1079157' },
      { claim: 'Historic England list entry 1193901, The Monument: 1671 to 77 by Wren, commemorating the Great Fire of 1666.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1193901' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of the City of London on 26 September 2026: 613 (86 I, 83 II*, 444 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBBAN (Bank): Central, Northern and Waterloo & City (940GZZLUBNK) plus DLR (940GZZDLBNK).', url: 'https://api.tfl.gov.uk/StopPoint/HUBBAN' }
    ],
    rejectedClaims: [
      'That St Paul\'s dome, or any City arch, follows a catenary: not in the list entries read; explicitly not claimed.',
      'Robert Hooke\'s hanging-chain principle and his work with Wren: not read at a primary source for this build; not stated.',
      'The Monument\'s height and its use as a scientific instrument: not in the list entry text read; not stated.',
      'City of London library list: the URLs tried returned 404; none named.',
      'City schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
