'use strict';
// Llanelli (cg- town page, UK cluster Phase 10, towns band B, row 548). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: a model that predicts dead-end streets from
// their names scores well on "Close" and "Street"; what has it actually learned, and what happens on names without that
// cue? (Shortcut learning: a proxy feature that works in training and fails when the cue is absent.)
// Data (read 1 October 2026): one Overpass query for every highway way in 51.658 to 51.712 N, 4.192 to 4.078 W (37,342
// elements). Named streets (trunk, primary, secondary, tertiary, unclassified, residential, living_street) whose nodes all
// lie in 51.665 to 51.707 N, 4.1797 to 4.0875 W: 559 names. Label (scratchpad lli/sc.py): dead end if an end of the
// street is a node joined to no other drivable way (car network includes service roads; footpaths ignored): 215 of 559
// (38.5%). English-pattern names (last word Road, Street, Close, Court, Terrace...): 293, 71 dead ends (24.2%);
// Welsh-pattern names (first word Heol, Clos, Llys, Maes...): 122, 72 dead ends (59.0%); other 144. Within English
// pattern: Close 9 of 11, Court 8 of 9, Road 16 of 81, Street 7 of 83. Welsh: Clos 15 of 23, Llys 11 of 15, Heol 11 of 31.
// Model (lli/model.py, scikit-learn LogisticRegression, 200 random 70/30 splits of the English-pattern streets): last-word
// model English test accuracy 82.3% (always "not a dead end" 75.5%), finds 33.1% of English dead ends; on the 122
// Welsh-pattern streets 41.0% accuracy, identical to always "no", and 0 of 72 dead ends found in every split. All-words
// model: 80.2% / 41.0%, Welsh recall 0.3%. Seed-0 split: weights close +1.47, street -1.59; Clos streets predicted dead
// ends: 0 of 23 (15 are). Reading the map (degree check) is exact by construction.
// Lesson family: shortcut learning. Screened: "shortcut learn" 0 hits; claimed in claims.txt. Dumfries = concept drift;
// Strabane = label propagation; different families.
// Place facts: Carmarthenshire TS001 187,897. ONS 2021 BUA (published): Llanelli 42,155. postcodes.io suburban areas with
// nearest postcode in the Llanelli BUA: Felinfoel, Dafen, Llwynhendy, Bynea, Morfa (SA15), Seaside, Furnace (SA15),
// Pemberton, Bigyn, Pen-y-fan, Cwmcarnhywel, Sandy, Swiss Valley. Machynys, Pwll and Llangennech left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LLANELLI', label: 'Llanelli', blurb: 'AI and programming classes for Llanelli, with a machine learning project that learns the wrong lesson from street names.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-llanelli',
  code: 'lli',
  accent: '#572E18',
  accentRationale: 'Llanelli: a dark tinplate brown (11.61:1 on white, 9.42:1 on the ledger beige), picked by hand at least 40 RGB steps from every Welsh page',
  pageType: 'city',
  place: {
    name: 'Llanelli',
    eyebrow: 'Llanelli, Carmarthenshire, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Carmarthenshire' },
      { type: 'Country', name: 'Wales' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Carmarthenshire', href: '/coding-classes-in-carmarthenshire' },
    { label: 'Swansea', href: '/best-coding-class-in-swansea' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Llanelli, Carmarthenshire',
  title: 'AI and Programming Classes in Llanelli, Carmarthenshire',
  description: 'AI and programming classes for Llanelli, Felinfoel, Dafen, Llwynhendy and Bynea, live on video for ages 6 to 67: Python, machine learning and agents. Try it free.',
  ogDescription: 'AI and programming classes for Llanelli, with a machine learning project on what a model really learns from street names.',
  twitterDescription: 'Llanelli AI and programming lessons, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '1 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Llanelli',
    description: 'Online programming, AI, Python and maths lessons for children, teenagers and adults in Llanelli and Carmarthenshire, with machine learning projects tested on local open data.'
  },

  h1: 'AI and programming classes in Llanelli',
  capsuleQ: 'Which are the best AI and programming classes for Llanelli?',
  capsule: 'The ONS recorded 42,155 usual residents in the Llanelli built-up area at the 2021 census, within a Carmarthenshire total of 187,897. Felinfoel, Dafen, Llwynhendy, Bynea, Pemberton, Bigyn, Seaside and Swiss Valley are among the gazetteer suburbs whose nearest postcode lies inside that built-up area. Modern Age Coders teaches programming, AI, Python, vibe coding and maths to Llanelli learners from six to 67 on live video, with India-based tutors working one-to-one or with a group of five to ten at the same level. Every learner starts with a free lesson, and a course is suggested only after it. The Llanelli project trains a small machine learning model to spot dead-end streets from their names and then tests it on the town\'s Welsh street names, where the clue it learned is not there. From the second lesson on, a group place is USD 100 per month and individual tuition USD 150 per month.',
  lead: 'Machine learning models are very good at finding the easiest clue that fits their training data, and very bad at telling you which clue they found. Researchers call it shortcut learning. It is easy to demonstrate in Llanelli, where street names come in two patterns: English names that end with the kind of road, and Welsh names that begin with it. A model that learns from the first pattern meets the second with nothing to go on.',
  wa: 'Hello Modern Age Coders, we are in Llanelli and would like to book a free AI or programming lesson.',

  picks: {
    eyebrow: 'Course ideas',
    h2: 'AI and programming courses for Llanelli learners',
    intro: 'Our usual first course for each age. Every course opens with a free live lesson and no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Sorting, grouping and spotting rules, the thinking behind both coding and machine learning.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Children build Scratch games with an AI, then check and correct them.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Python machine learning with real data, including the Llanelli street-name model.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Graphs and algorithms in depth, the tools that answered the question the model could not.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Llanelli and Carmarthenshire',
      h2: 'Llanelli, Felinfoel, Dafen, Llwynhendy and Bynea',
      intro: 'Two census totals and the suburb list, each tied to a source.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents (ONS)', head: ['Area', 'Residents'], rows: [
          ['Llanelli built-up area', '42,155'],
          ['Carmarthenshire', '187,897']
        ] },
        { kind: 'p', text: 'Carmarthenshire also includes Carmarthen, Ammanford, Burry Port and a great deal of countryside, so its total is not something to add the town to. The full list of suburbs we could place inside the Llanelli built-up area, by checking the postcode nearest to each gazetteer point, is Felinfoel, Dafen, Llwynhendy, Bynea, Morfa, Seaside, Furnace, Pemberton, Bigyn, Pen-y-fan, Cwmcarnhywel, Sandy and Swiss Valley. Machynys, Pwll and Llangennech did not pass that check, so they are not listed. Schools in Llanelli teach the Curriculum for Wales, and older learners can take WJEC GCSE and A level computer science alongside our lessons.' },
        { kind: 'callout', h3: 'West Wales pages', p: 'See also <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>, <a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a>, <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC GCSE computer science help</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">coding across Wales</a>. We explain why reasoning comes before AI on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">thinking skills before AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Llanelli project',
      h2: 'A model that learned the name, not the street',
      intro: '559 named streets, one honest label for each, and a model that only reads names.',
      body: [
        { kind: 'p', text: 'The learner downloads every mapped road and path around Llanelli from OpenStreetMap in one query and keeps the 559 named streets that lie wholly inside a rectangle drawn around the town. For each one the program answers a question from the map itself: does either end of the street stop at a point joined to no other road a car could use? By that test 215 streets, 38.5%, are dead ends. Footpaths are ignored, so a cul-de-sac with a path out of it still counts as a dead end for cars.' },
        { kind: 'p', text: 'Next the streets are split by naming pattern. 293 follow the English pattern, with the kind of road as the last word: Road, Street, Close, Court. Only 71 of them, 24.2%, are dead ends, and the last word is a strong clue: 9 of the 11 Closes and 8 of the 9 Courts are dead ends, against 7 of 83 Streets. Another 122 follow the Welsh pattern, with the kind of road first: Heol, Clos, Llys, Maes. Here 72, or 59.0%, are dead ends, including 15 of the 23 streets starting with Clos and 11 of the 15 starting with Llys. The remaining 144 names fit neither pattern and are set aside.' },
        { kind: 'table', caption: 'Predicting dead ends from street names, trained on English-pattern names only, average of 200 random 70/30 splits, our scikit-learn run', head: ['Tested on', 'Model accuracy', 'Always guessing "not a dead end"', 'Dead ends the model found'], rows: [
          ['Unseen English-pattern streets', '82.3%', '75.5%', '33.1% of them'],
          ['All 122 Welsh-pattern streets', '41.0%', '41.0%', '0 of 72, in every split']
        ] },
        { kind: 'p', text: 'On new English names the model looks useful, beating the lazy guess by 6.8 points. Its heaviest weights explain why: "close" pushes hard towards dead end and "street" hard away from it. On the Welsh names it is exactly as good as saying no every time, and in all 200 runs it does not find a single one of the 72 Welsh-pattern dead ends. Clos, the Welsh word for close, sits at the front of the name where a last-word model never looks, and every word after it is new to the model. Nothing about the streets changed; the clue disappeared. The map answers the question perfectly in a few lines of code, because the map, unlike the name, is the thing itself.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort picture cards by a rule, then try the rule on cards drawn in a different style.' },
          { h3: 'Ages 11 to 15', p: 'Count dead ends by name ending in Python, then check the counts against the map.' },
          { h3: 'Ages 15 and up', p: 'Train the model, inspect its weights, and design a test that exposes the shortcut.' }
        ] },
        { kind: 'callout', h3: 'Data and method', p: 'Streets and road connections are from OpenStreetMap contributors under the Open Database Licence, read with one Overpass query on 1 October 2026. The term shortcut learning follows Geirhos and colleagues, Nature Machine Intelligence, 2020. The dead-end rule, the naming patterns and every percentage here are our own work, and footpaths were deliberately left out of the test.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Programming with AI',
      h2: 'What the street-name model teaches about AI',
      intro: 'A high score on familiar data says little about unfamiliar data.',
      body: [
        { kind: 'table', caption: 'From Llanelli streets to trusting AI models', head: ['What the model did', 'The lesson for any AI'], rows: [
          ['Scored 82.3% on English names by leaning on "close"', 'Ask which clue a model is really using'],
          ['Found 0 of 72 Welsh-pattern dead ends', 'Test on data unlike the training data'],
          ['Matched a guess that always says no', 'Compare every model with a lazy baseline'],
          ['The map gave the exact answer', 'If a direct method exists, prefer it to a prediction'],
          ['Footpaths were left out on purpose', 'State the definition behind every label']
        ] },
        { kind: 'p', text: 'Large language models take shortcuts too, and their confident tone hides it. In Llanelli lessons, vibe coding means getting an AI to draft the classifier, then probing it with names it has never seen and explaining its mistakes from its weights. We hold agent-building back until a learner\'s own Python is dependable, which for most comes around age sixteen or later, and anything involving Copilot Studio agents is private tuition. There is more on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">reading code before trusting it</a> and on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents route for UK students</a>.' },
        { kind: 'p', text: 'This page uses open data from OpenStreetMap, the ONS and postcodes.io. They are not connected with Modern Age Coders, and the model and its results are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'From sorting cards at seven to testing models at seventeen',
    intro: 'The trial lesson places each learner; school year is only a rough first guess.',
    cols: [
      { band: 'Years 2 to 6', h3: 'Rules and patterns', p: 'Sorting, grouping and step-by-step thinking, often away from the screen.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'First code with AI', p: 'Scratch built with an AI, then early Python.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Machine learning', p: 'Training, testing and questioning models beside WJEC courses.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms, then agents', p: 'Solid algorithms and Python, then agents you can explain.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Models and AI',
    h2: 'What is shortcut learning, and why does it matter for AI?',
    intro: 'Shortcut learning is when a machine learning model relies on an easy clue that happens to work in its training data instead of the real property it was meant to learn, and it matters because such a model can score well in testing and then fail completely when the clue is missing.',
    p1: 'Trained on Llanelli\'s English-pattern street names, a model reached 82.3% accuracy on new English names but found 0 of the 72 dead ends among Welsh-pattern names, where Clos comes first instead of Close coming last.',
    p2: 'A learner who has caught a model doing this asks of any AI result which clue produced it, and whether that clue will still be there next time.',
    closer: 'Llanelli teenagers who can test a model like this are ready to question AI rather than simply use it, and that confidence is built by writing code.',
    blogAnchor: 'why code is still worth learning for teenagers in 2026'
  },

  delivery: {
    eyebrow: 'Lesson details',
    h2: 'How Llanelli lessons are taught',
    intro: 'Lessons are live video sessions. Please join from a computer with a physical keyboard, as phones and tablets make programming hard going.',
    cells: [
      { h3: 'Learner at the controls', p: 'The learner writes and runs the code while the tutor asks the questions.' },
      { h3: 'Placed by the trial', p: 'The free lesson shows where to begin, and the course suggestion follows.' },
      { h3: 'Trial without payment', p: 'The first lesson is free and needs no card.' },
      { h3: 'Groups by level', p: 'Each class holds five to ten people at a shared stage, from all corners of Britain.' },
      { h3: 'About eight a month', p: 'Two lessons a week in term time, with holiday weeks dropped when you ask.' },
      { h3: 'A fixed UK slot', p: 'We handle the clock changes, so the lesson hour does not move.' }
    ],
    spec: { title: 'Why we teach online', p: 'Finding five to ten learners at one exact level is realistic across the whole UK, and video means no one travels.' }
  },

  fees: {
    h2: 'Fees for Llanelli learners',
    intro: 'Llanelli learners pay the rate that applies to all our students outside India.',
    first: 'First lesson: free, full length, closing with a course suggestion.',
    group: 'Group lessons, around eight a month.',
    private: 'Private one-to-one lessons, around eight a month.',
    closer: 'Every fee is set in US dollars; there is no sterling price list. Nothing is charged for the trial, and billing starts once a course and a weekly time are fixed. Holidays, missed lessons and moving between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from families in Wales and learners across the UK',

  book: {
    h2: 'Book a free Llanelli lesson',
    intro: 'An age or school year and one or two interests are all we need. Expect something like a card-sorting puzzle, an AI-assisted Scratch game, a first Python script or a small model trained on real Llanelli data.',
    success: 'Diolch. Your Llanelli request has reached us.'
  },

  faq: {
    h2: 'Llanelli questions answered',
    intro: 'The street-name model, machine learning, programming and the practical side.',
    items: [
      { q: 'What is the population of Llanelli?', a: 'The ONS counted 42,155 usual residents in the Llanelli built-up area at the 2021 census. Carmarthenshire had 187,897.' },
      { q: 'Are AI and programming classes available in Llanelli?', a: 'Yes. Anyone aged 6 to 67 in Llanelli, Felinfoel, Dafen, Llwynhendy, Bynea or elsewhere in Carmarthenshire can join, since every lesson is a live video call.' },
      { q: 'What is a shortcut in machine learning?', a: 'A feature that predicts the answer in the training data without being the real reason, like the word Close predicting a dead end. When the feature is absent, the model fails.' },
      { q: 'How do you catch a model taking a shortcut?', a: 'Look at which inputs carry the most weight, and test the model on data where that input is missing or different, such as Welsh-pattern street names.' },
      { q: 'What did the Llanelli project find?', a: 'A model trained on English-pattern names scored 82.3% on new English names, but on 122 Welsh-pattern streets it matched a guess of always no and found 0 of the 72 dead ends.' },
      { q: 'What is vibe coding?', a: 'Describing a program to an AI in everyday language, then reading, running and correcting its code. We teach it together with hand-written Python.' },
      { q: 'At what point do agents come in?', a: 'When their Python stands up without support, for most learners somewhere from sixteen onwards. Copilot Studio agent work is private only.' },
      { q: 'Can lessons support WJEC GCSE computer science?', a: 'Yes. Algorithms, data and the ethics of automated decisions appear in WJEC GCSE and A level computer science, and this project touches all three. Grades are never promised.' },
      { q: 'How much are lessons?', a: 'The first lesson is free. After that, USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can we pause lessons for the school holidays?', a: 'Yes. Send the holiday dates and we skip those weeks.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages for West Wales',
    html: 'Explore <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>, <a class="cg-inline-link" href="/coding-classes-in-carmarthenshire">Carmarthenshire</a>, <a class="cg-inline-link" href="/coding-classes-in-neath-port-talbot">Neath Port Talbot</a> and <a class="cg-inline-link" href="/wjec-gcse-computer-science-help-wales">WJEC computer science help</a>. For the rest of Wales and the UK, go to <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">our Wales page</a> or <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">the UK overview</a>.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Llanelli and Carmarthenshire',
  footerPlaces: [
    { href: '/coding-classes-in-carmarthenshire', label: 'Carmarthenshire' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lli .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.3vw, 2.1rem); }
.cg-root.cg-lli .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.06; }
.cg-root.cg-lli .cg-capsule { background: color-mix(in srgb, var(--cg-accent) 5%, transparent); border-radius: 10px; padding: 0.9rem 1.1rem; }
.cg-root.cg-lli .cg-eyebrow { letter-spacing: 0.15em; font-weight: 720; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-lli .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.019em; }
.cg-root.cg-lli .cg-table caption { font-weight: 600; text-align: left; font-size: 0.89rem; }
.cg-root.cg-lli .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lli .cg-table thead th { border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-lli .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.65rem; }
.cg-root.cg-lli .cg-callout { border-left-width: 6px; border-radius: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Carmarthenshire (W06000010), Census 2021 TS001 usual residents 187,897. ONS 2021 BUA (published): Llanelli 42,155. Curriculum for Wales, WJEC GCSE and A level. postcodes.io suburban areas with nearest postcode in the Llanelli BUA: Felinfoel, Dafen, Llwynhendy, Bynea, Morfa, Seaside, Furnace, Pemberton, Bigyn, Pen-y-fan, Cwmcarnhywel, Sandy, Swiss Valley.',
    localProject: 'Shortcut learning on Llanelli street names. One Overpass query, all highway ways in 51.658 to 51.712 N, 4.192 to 4.078 W; 559 named streets inside the town box; dead end if an end node joins no other drivable way: 215 (38.5%). English pattern 293 (71 dead, 24.2%): Close 9/11, Court 8/9, Street 7/83. Welsh pattern 122 (72 dead, 59.0%): Clos 15/23, Llys 11/15, Heol 11/31. Logistic regression on last word, 200 splits: English test 82.3% (baseline 75.5%, recall 33.1%); Welsh 41.0% (= baseline), 0 of 72 dead ends found.',
    requiredMentions: [
      '42,155',
      'Felinfoel',
      'Llwynhendy',
      'Cwmcarnhywel',
      'Swiss Valley',
      'shortcut learning',
      '559 named streets',
      '0 of 72',
      '15 of the 23'
    ],
    sources: [
      { claim: 'OpenStreetMap contributors, roads and street names via the Overpass API, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Geirhos R. and others (2020), Shortcut learning in deep neural networks, Nature Machine Intelligence 2, 665 to 673.', url: 'https://doi.org/10.1038/s42256-020-00257-z' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations and output-area lookup.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for Carmarthenshire.', url: 'https://api.postcodes.io/places?q=Felinfoel' }
    ],
    rejectedClaims: [
      'Anything about the Welsh language, its speakers or its use in Llanelli: not the subject; not claimed.',
      'That every Welsh-pattern name is in Welsh or every English-pattern name in English: patterns were defined by first or last word only.',
      'Dead ends for walkers: footpaths ignored; the label is for cars only, stated.',
      'Machynys, Pwll and Llangennech as Llanelli suburbs: nearest postcodes outside the BUA; left out.',
      'Named schools and term dates: none read or named.',
      'Sterling prices: none.'
    ]
  }
};
