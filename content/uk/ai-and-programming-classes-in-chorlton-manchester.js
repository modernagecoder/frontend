'use strict';
// Chorlton, Manchester (cg- district page, UK cluster Phase 9, row 456). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if an AI is right 98% of the time, is it any
// good? (Cohen's kappa: agreement corrected for chance, on a lopsided labelling task).
// Data (read 30 September 2026): OpenStreetMap buildings in the box 53.428 to 53.448 N, 2.290 to 2.250 W around Chorlton
// (scratchpad g4/crt.json): 3,829 building outlines; 3,292 carry a specific type tag (3,226 homes, 66 anything else),
// 537 are tagged only "building=yes" and are left out.
// Our run (scratchpad crt/kappa.py), five labellers scored against the mappers' tags on the 3,292:
//   always "home":                agreement 98.0%, chance agreement 98.0%, kappa 0.00, finds 0 of 66
//   coin weighted 98 to 2:        96.3%, 96.3%, 0.01, finds 2 of 66
//   rule "over 300 sq m = other": 97.1%, 95.5%, 0.34, finds 27 of 66 (85 flagged)
//   shape model (gradient boosting on 7 outline features, trained on Wythenshawe buildings): 98.2%, 96.4%, 0.52,
//                                 finds 32 of 66 (56 flagged)
//   same model, classes balanced: 94.7%, 91.9%, 0.34, finds 49 of 66 (208 flagged)
// Lesson family: Cohen's kappa / chance-corrected agreement. Screened with rm.js: "Cohen's kappa" 0 hits; claimed.
// Manchester city page = cross-correlation of river levels; Didsbury = quasi-Monte Carlo; Withington = hex binning.
// Place facts: Census 2021 TS001: Chorlton ward 12,843; Chorlton Park ward 17,592 (not summed). postcodes.io: place
// Chorlton-cum-Hardy (M21); outcode M21 Manchester wards: Chorlton, Chorlton Park, Whalley Range.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CHORLTON', label: 'Chorlton, Manchester', blurb: 'AI and programming classes for Chorlton in Manchester, with a project that scores five building labellers and shows why 98% agreement can be worth nothing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-chorlton-manchester',
  code: 'crt',
  accent: '#8A1F5C',
  accentRationale: 'Chorlton: a deep mulberry (hand-picked for hue distance from other Phase 9 pages, contrast above 7:1)',
  pageType: 'city',
  place: {
    name: 'Chorlton',
    eyebrow: 'Chorlton, Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-manchester', name: 'Manchester' }],
  nav: [
    { label: 'Manchester', href: '/best-coding-class-in-manchester' },
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Chorlton, Manchester',
  title: 'AI and Programming Classes in Chorlton, Manchester | Ages 6 to 67',
  description: 'Live online AI, programming, Python and vibe coding tuition for Chorlton, Chorlton Park and Whalley Range in Manchester M21, ages 6 to 67. First lesson free.',
  ogDescription: 'AI and programming classes for Chorlton, Manchester, with a project that scores five ways of labelling 3,292 mapped buildings and explains Cohen\'s kappa.',
  twitterDescription: 'Chorlton, Manchester: AI, programming, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Chorlton, Manchester',
    description: 'Online AI, programming, Python, vibe coding and maths for children, teenagers and adults in Chorlton and the M21 district, taught live, thinking habits first.'
  },

  h1: 'AI and programming classes in Chorlton',
  capsuleQ: 'Which are the best AI and programming classes for Chorlton families?',
  capsule: 'Chorlton ward in Manchester counted 12,843 usual residents in the 2021 census and the neighbouring Chorlton Park ward 17,592; postcodes.io files the place as Chorlton-cum-Hardy, in M21. Our tutors, who work from India, teach AI, programming, Python, vibe coding and maths by live video to anyone from six to 67, one-to-one or in a group of five to ten matched by level. Thinking is taught before tools: a learner should be able to say why a score is impressive, or why it is not. A free lesson comes first and closes with a course recommendation. In the Chorlton project, five different labellers decide which mapped buildings are homes, and a number called Cohen\'s kappa shows that the one with 98.0% agreement has learned nothing at all. Monthly fees are USD 100 for a group seat and USD 150 for private lessons.',
  lead: 'Suppose someone sells you an AI that labels buildings on a map and is "98% accurate". It sounds excellent. Now suppose almost every building in the area is a house. A machine that says "house" every single time, without looking, would also score about 98%. The headline figure cannot tell these two apart. In 1960 the psychologist Jacob Cohen published a correction for exactly this problem, and it fits in one line of arithmetic. This project applies it to the buildings that volunteer mappers have drawn around Chorlton.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a learner in Chorlton, Manchester.',

  picks: {
    eyebrow: 'Chorlton course picks',
    h2: 'Chorlton courses in thinking, programming and AI',
    intro: 'Four starting points by age. Whichever you choose, the opening lesson is live, free and booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: fair tests, lucky guesses and how to tell them apart.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children describe a game to an AI, then hunt for the cases where it gets things wrong.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning with honest scoring, including the Chorlton kappa test.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI is built and evaluated, then agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Chorlton and M21',
      h2: 'Two Chorlton wards in the census',
      intro: 'Two separate published ward counts. We do not add them together.',
      body: [
        { kind: 'table', caption: 'Chorlton wards, Census 2021 (ONS table TS001, via Nomis)', head: ['Ward', 'Usual residents'], rows: [
          ['Chorlton', '12,843'],
          ['Chorlton Park', '17,592']
        ] },
        { kind: 'p', text: 'The M21 postcode district takes in the Manchester wards of Chorlton, Chorlton Park and Whalley Range, according to postcodes.io, which gives the place its older name of Chorlton-cum-Hardy. Pupils follow the national curriculum for England, and our timetable stops for the school breaks you tell us about.' },
        { kind: 'callout', h3: 'Where this page sits', p: 'It belongs under <a class="cg-inline-link" href="/best-coding-class-in-manchester">coding classes in Manchester</a>. The thinking-first approach has its own page: <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Chorlton project',
      h2: 'Cohen\'s kappa on 3,292 mapped buildings around Chorlton',
      intro: 'Five labellers, one question: is this building a home or something else?',
      body: [
        { kind: 'p', text: 'OpenStreetMap volunteers have traced 3,829 buildings in a box around Chorlton. For 3,292 of them they also recorded a type: 3,226 are homes of some kind and 66 are anything else, such as shops, schools and churches. Those tags are the reference. The learner then builds five labellers in Python and compares each with the mappers, counting how often they agree and, separately, how often they would agree by luck alone given how often each side says "home".' },
        { kind: 'table', caption: 'Five labellers against the mappers\' tags on 3,292 Chorlton buildings, our Python run', head: ['Labeller', 'Agreement', 'Expected by chance', 'Kappa', 'Non-homes found'], rows: [
          ['Says "home" every time', '98.0%', '98.0%', '0.00', '0 of 66'],
          ['Weighted coin, 98 to 2', '96.3%', '96.3%', '0.01', '2 of 66'],
          ['Rule: over 300 square metres is not a home', '97.1%', '95.5%', '0.34', '27 of 66'],
          ['Shape model trained elsewhere in Manchester', '98.2%', '96.4%', '0.52', '32 of 66'],
          ['Same model, told to weigh both classes equally', '94.7%', '91.9%', '0.34', '49 of 66']
        ] },
        { kind: 'p', text: 'Kappa is the agreement you got beyond chance, divided by the most you could have got beyond chance. The lazy labeller agrees 98.0% of the time, chance predicts 98.0%, so its kappa is zero. The shape model agrees only a fifth of a point more often, 98.2%, yet its kappa is 0.52, because it found 32 of the 66 buildings that matter. Agreement hid the whole difference; kappa shows it.' },
        { kind: 'p', text: 'The last row carries a second lesson. Rebalancing the model finds more non-homes, 49 of 66, but it flags 208 buildings to do so, and kappa drops back to 0.34. One number never settles the matter. Which labeller you want depends on whether a missed shop or a wrongly flagged house costs more.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A bag with 49 red counters and one blue. Guess "red" every time, score 98%, and discuss whether that was clever.' },
          { h3: 'Ages 11 to 15', p: 'Fill in the two-by-two table for a labeller by hand and work out its kappa with a calculator.' },
          { h3: 'Ages 15 and up', p: 'Measure building outlines in Python, train the shape model on another district and score it on Chorlton.' }
        ] },
        { kind: 'callout', h3: 'Whose data, whose labels', p: 'Building outlines and tags are from OpenStreetMap contributors, used under the Open Database Licence. The tags are volunteers\' work and can be wrong or missing, so "agreement with the mappers" is what we measure, not truth. We publish no guess about any individual building.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Scores and AI',
      h2: 'Why this matters for vibe coding and AI agents',
      intro: 'Most AI is sold on a percentage. Kappa is one way to ask what the percentage is made of.',
      body: [
        { kind: 'table', caption: 'From Chorlton buildings to everyday AI claims', head: ['In the kappa project', 'In an AI product'], rows: [
          ['98.0% from never looking', 'High accuracy on a lopsided task'],
          ['Chance agreement worked out first', 'Ask what a do-nothing baseline scores'],
          ['32 of 66 rare cases found', 'The rare cases are usually the point'],
          ['Mappers\' tags as reference', 'The "right answers" were made by people too'],
          ['Rebalancing traded misses for false alarms', 'Every setting is a trade']
        ] },
        { kind: 'p', text: 'Spam filters, fraud checks and medical screening all face lopsided tasks where the rare case is the one that matters. Chorlton learners who vibe code, steering an AI in ordinary English while it writes the program, make it report a baseline next to every score it claims. When they later assemble AI agents that sort or label things without supervision, they already know to check the agent against a lazy rival. Agents are taught once Python is secure, as a rule from around sixteen, and Copilot Studio agents only in one-to-one lessons. Further reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>; <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no affiliation with OpenStreetMap, the Office for National Statistics or postcodes.io. We used their open data and the sums are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From lucky guesses to scored models',
    intro: 'A rough guide by school year, adjusted after the trial.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, patterns and spotting a fluke.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Building with an AI helper and checking its work.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Programming and AI', p: 'Python, models and evaluation beside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI in practice', p: 'Generative AI, evaluation and agents.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Measuring AI',
    h2: 'Is an AI that is 98% accurate actually good?',
    intro: 'Not necessarily: if 98% of cases share one answer, a system that always gives that answer is 98% accurate while knowing nothing, so accuracy has to be compared with what chance alone would score.',
    p1: 'Among 3,292 typed buildings around Chorlton, always answering "home" agreed with the mappers 98.0% of the time and had a kappa of 0.00; a model at 98.2% had a kappa of 0.52.',
    p2: 'Learners who have done that sum ask of any AI claim: accurate compared with what?',
    closer: 'A Chorlton student who can compute kappa by hand will not be dazzled by a percentage, from a vendor or from a chatbot.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'How Chorlton lessons are taught',
    intro: 'All you need is a laptop or desktop with a webcam and a connection steady enough for video.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The pupil types every line. The tutor watches the shared screen and keeps asking what the line is for.' },
      { h3: 'A trial to place the learner', p: 'In the free session we gauge the level and ask which exam board applies, if any.' },
      { h3: 'No card to start', p: 'The first session costs nothing and ends with a recommended course.' },
      { h3: 'Groups by level', p: 'Between five and ten learners at a similar stage, joining from around the UK.' },
      { h3: 'Two sessions weekly', p: 'Paused over the holidays.' },
      { h3: 'Fixed UK time', p: 'When the clocks change in Britain, our tutors shift so your slot does not.' }
    ],
    spec: { title: 'Why not a local room', p: 'A single district seldom has five people of one level who are free at the same hour. Online, that group can be gathered from anywhere.' }
  },

  fees: {
    h2: 'Fees for Chorlton',
    intro: 'Chorlton is charged the international rate that applies everywhere outside India.',
    first: 'One complete lesson free, followed by our recommendation.',
    group: 'Roughly eight live group sessions a month.',
    private: 'Roughly eight live one-to-one sessions a month.',
    closer: 'All prices are in US dollars. Nothing is billed until the trial has settled the course and the weekly slot; the pricing page sets out how holidays, absences and switching format are handled.'
  },

  reviewsH2: 'Google reviews from Manchester and the wider UK',

  book: {
    h2: 'Book a free Chorlton lesson',
    intro: 'Send an age or year group and one thing the learner likes doing. Depending on the answer, the trial could be a red-and-blue counter experiment, an AI-assisted Scratch game, a first Python script, or a tiny model scored properly.',
    success: 'Thanks. We have your Chorlton request.'
  },

  faq: {
    h2: 'Chorlton questions',
    intro: 'Kappa, the building project, vibe coding and the practical details.',
    items: [
      { q: 'How many people live in Chorlton?', a: 'At the 2021 census, Chorlton ward had 12,843 usual residents and Chorlton Park ward had 17,592.' },
      { q: 'Are there online AI and programming classes in Chorlton?', a: 'Yes. We teach ages 6 to 67 in Chorlton and across Manchester by live video call.' },
      { q: 'What is Cohen\'s kappa?', a: 'A score for how far two labellers agree beyond what chance would produce. Zero means no better than chance and one means complete agreement.' },
      { q: 'Why is accuracy misleading on imbalanced data?', a: 'Because always picking the common answer scores highly. Around Chorlton, saying "home" for every building agreed with mappers 98.0% of the time and found none of the 66 other buildings.' },
      { q: 'What is the Chorlton project?', a: 'Scoring five labellers against OpenStreetMap tags on 3,292 buildings, using both plain agreement and Cohen\'s kappa, to see which number tells the truth.' },
      { q: 'Is vibe coding part of the course?', a: 'Yes, for all ages. The learner directs an AI in plain English and is responsible for testing what comes back.' },
      { q: 'At what age do you teach AI agents?', a: 'After Python is secure, as a rule from around sixteen. Copilot Studio agents are taught one-to-one only.' },
      { q: 'Do you cover GCSE and A level computer science?', a: 'Yes, and maths as well. We teach for understanding and do not guarantee grades.' },
      { q: 'How much are the classes?', a: 'Nothing for the first lesson, then USD 100 a month for a group or USD 150 a month for one-to-one.' },
      { q: 'What happens in the school holidays?', a: 'Lessons stop and resume afterwards. Tell us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Other Manchester districts',
    html: 'Different district, different experiment: <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-withington-manchester">Withington</a> (hexagon maps), <a class="cg-inline-link" href="/online-coding-and-python-classes-in-didsbury-manchester">Didsbury</a> (measuring with random points) and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-wythenshawe-manchester">Wythenshawe</a> (rule-writing agents). The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everywhere else.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Chorlton and Manchester',
  footerPlaces: [
    { href: '/best-coding-class-in-manchester', label: 'Manchester' },
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-crt .cg-hero-grid { align-items: start; gap: clamp(1.4rem, 3.6vw, 3.2rem); }
.cg-root.cg-crt .cg-hero h1 { font-weight: 690; letter-spacing: -0.015em; line-height: 1.1; }
.cg-root.cg-crt .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1rem; border-radius: 0 0 8px 8px; }
.cg-root.cg-crt .cg-eyebrow { letter-spacing: 0.1em; font-weight: 600; }
.cg-root.cg-crt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.012em; }
.cg-root.cg-crt .cg-table caption { font-weight: 700; text-align: left; font-size: 0.92rem; }
.cg-root.cg-crt .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.6rem; }
.cg-root.cg-crt .cg-table th { letter-spacing: 0.03em; font-weight: 700; font-size: 0.82rem; }
.cg-root.cg-crt .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-crt .cg-callout { border-left-width: 3px; border-radius: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Manchester (E08000003). Census 2021 TS001: Chorlton ward 12,843; Chorlton Park ward 17,592 (not summed). postcodes.io: place Chorlton-cum-Hardy (M21); M21 Manchester wards Chorlton, Chorlton Park, Whalley Range. England national curriculum, GCSE and A level.',
    localProject: 'OpenStreetMap buildings in a box around Chorlton: 3,829 outlines, 3,292 typed (3,226 homes, 66 other), 537 untyped excluded. Five labellers vs tags: always home 98.0% agreement / 98.0% chance / kappa 0.00 / 0 of 66; weighted coin 96.3 / 96.3 / 0.01 / 2; 300 sq m rule 97.1 / 95.5 / 0.34 / 27; shape model trained on Wythenshawe buildings 98.2 / 96.4 / 0.52 / 32; balanced model 94.7 / 91.9 / 0.34 / 49 (208 flagged). Lesson family: Cohen\'s kappa, chance-corrected agreement.',
    requiredMentions: [
      '12,843',
      '17,592',
      'Chorlton-cum-Hardy',
      'Whalley Range',
      '3,292',
      '3,226',
      'Cohen\'s kappa',
      '0.52',
      'Jacob Cohen'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap building outlines and tags, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io place Chorlton-cum-Hardy and outcode M21 ward list.', url: 'https://api.postcodes.io/outcodes/M21' },
      { claim: 'Cohen, J. (1960), A coefficient of agreement for nominal scales, Educational and Psychological Measurement 20(1).', url: 'https://doi.org/10.1177/001316446002000104' }
    ],
    rejectedClaims: [
      'A combined Chorlton population: two ward figures are published separately and not added.',
      'Any claim about what an individual building is: only aggregate agreement with volunteer tags is reported.',
      'That OSM tags are ground truth: described as the reference, with their limits stated.',
      'Descriptions of Chorlton shops, cafes, character or history: not read from a source; not made.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
