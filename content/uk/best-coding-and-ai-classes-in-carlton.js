'use strict';
// Carlton (cg- town page, UK cluster Phase 10, towns band B, row 497). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: once a model is trained, how do you find out
// what it has learned about one input? (partial dependence plots, and why they describe the model, not the world).
// Data (read 30 September 2026): Nomis Census 2021 output-area tables for Gedling (E07000173): TS045 car or van
// availability, TS017 household size, TS006 density, TS044 accommodation type. 399 output areas, 51,536 households,
// 9,763 with no car or van (18.94%).
// Our run (scratchpad cto/pd.py): random forest, 500 trees, minimum leaf 3, predicting the no-car share of an area from
// log10 density, one-person share, detached share, purpose-built flat share. 5-fold cross-validated R2 0.733; R2 on the
// training areas 0.923. Partial dependence of the prediction on the one-person share (average over all 399 areas):
// 15% 14.8; 20% 15.8; 25% 17.2; 30% 19.3; 35% 20.3; 40% 24.7; 45% 27.1; 50% 29.2. On the detached share: 0% 24.5;
// 10% 23.0; 20% 20.2; 40% 16.1; 60% 16.1; 80% 15.3. Raw averages by one-person share: 15-25% (126 areas) 12.3;
// 25-35% (170) 17.6; 35-45% (64) 25.9; 45%+ (30) 45.2. Mean detached share 49.8% in the first group, 23.2% in the third.
// Correlations: one-person vs no-car 0.77; one-person vs detached -0.42; one-person vs flats 0.73.
// Lesson family: partial dependence plots / model interpretation (raw gap 13.6 points vs partial dependence gap 8.9).
// Place facts: Gedling (E07000173) TS001 117,264. ONS 2021 BUAs: Carlton (Gedling) 53,555; Arnold 40,010; Calverton
// 7,320. The Carlton and Arnold BUAs are not cut at the borough boundary (our OA sums inside Gedling are lower), so no
// "wholly in Gedling" claim. postcodes.io (Gedling): Gedling, Netherfield, Colwick, Porchester (suburban areas);
// Burton Joyce (village).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'CARLTON', label: 'Carlton', blurb: 'Coding and AI classes for Carlton in Gedling, Nottinghamshire, with a project that opens up a trained model using partial dependence plots.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-carlton',
  code: 'cto',
  accent: '#1D4E2B',
  accentRationale: 'Carlton: a deep forest green (9.6:1 contrast on white), chosen by hand as unused and distinct from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Carlton',
    eyebrow: 'Carlton, Gedling, Nottinghamshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Carlton, Nottinghamshire',
  title: 'Coding and AI Classes in Carlton, Nottinghamshire | Ages 6 to 67',
  description: 'Online coding, AI, Python and vibe coding classes taught live for Carlton, Gedling, Netherfield and Colwick learners aged 6 to 67. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Carlton in Nottinghamshire, with a machine learning project on what a partial dependence plot can and cannot tell you.',
  twitterDescription: 'Carlton, Nottinghamshire: coding, AI, Python and vibe coding classes on live video, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Carlton, Nottinghamshire',
    description: 'Coding, AI, machine learning, Python, vibe coding and maths for children, teenagers and adults in Carlton and Gedling borough, taught live with reasoning first.'
  },

  h1: 'Coding and AI classes in Carlton, Nottinghamshire',
  capsuleQ: 'Where will a Carlton learner find the best coding and AI classes?',
  capsule: 'The ONS counted 53,555 residents in the Carlton built-up area at the 2021 census, and 117,264 in Gedling borough. Gedling, Netherfield, Colwick and Porchester are recorded as suburban areas of the borough, and Burton Joyce as a village. Anyone from six to 67 can study coding, AI, Python, vibe coding and maths with our India-based tutors over live video, in private lessons or in a group of five to ten learners at a shared level. Thinking comes before tools in every course, so a learner can question what a model or a chatbot says. For the Carlton project a learner trains a random forest on Gedling census areas and then uses partial dependence plots to ask what the model believes about one input at a time. Lesson one is free and ends with a course suggestion. After it, a group seat costs USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'A trained model is a black box until someone interrogates it. One standard way to do that is a partial dependence plot: choose a single input, force it to a fixed value for every row of the data, average the model\'s predictions, then repeat for the next value. The resulting line shows how the model\'s answer moves as that one input changes. Gedling borough has 399 census output areas, which is enough for a Carlton learner to train a model in Python, draw these plots, and then discover the catch that careful analysts always mention: the plot describes the model, and inputs that travel together can make it misleading.',
  wa: 'Hello Modern Age Coders, please could you arrange a free coding or AI lesson for a learner in Carlton, Nottinghamshire?',

  picks: {
    eyebrow: 'Carlton course picks',
    h2: 'Courses in thinking, vibe coding and AI for Carlton',
    intro: 'Choose by age. Whichever course fits, the first live class is free and no payment details are taken.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: change one thing at a time and watch what happens to the answer.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch game, then test one setting at a time to see what each does.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Train models on real data and open them up, including the Gedling partial dependence plots.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'AI-assisted Python and web projects where the learner must explain every part.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Carlton and Gedling borough',
      h2: 'Carlton, Arnold, Calverton and the places between',
      intro: 'Three built-up areas linked to Gedling borough, and the smaller places that postcode data records there.',
      body: [
        { kind: 'table', caption: 'Built-up areas associated with Gedling borough, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Carlton', '53,555'],
          ['Arnold', '40,010'],
          ['Calverton', '7,320']
        ] },
        { kind: 'p', text: 'The ONS draws built-up areas around continuous building, not around council boundaries, so the Carlton and Arnold figures should not be read as "inside Gedling only", and we do not add the three rows together. The borough total of 117,264 is a separate census figure. Postcodes.io lists Gedling, Netherfield, Colwick and Porchester as suburban areas within the borough and Burton Joyce as a village. Local schools teach the national curriculum for England; tell us your term dates and lessons will sit inside them.' },
        { kind: 'callout', h3: 'Nottinghamshire, the East Midlands and how we teach', p: 'See <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">coding classes in Nottinghamshire</a> for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands page</a> for the region. Our approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Carlton project',
      h2: 'Partial dependence plots on a model of 399 Gedling areas',
      intro: 'Train a model, then ask it one question at a time, and check its answers against the raw data.',
      body: [
        { kind: 'p', text: 'The learner fetches four Census 2021 tables from Nomis for each of Gedling\'s 399 output areas. Together the areas hold 51,536 households, and 9,763 of them, 18.94%, had no car or van. A random forest of 500 trees is trained to predict that share for an area from four inputs: population density, the share of one-person households, the share of detached homes and the share of purpose-built flats. Checked by five-fold cross-validation, the forest explains about 73% of the variation between areas it was not trained on (R squared 0.733), against 0.923 on the areas it had seen.' },
        { kind: 'table', caption: 'Partial dependence: average predicted no-car share across all 399 areas when one input is fixed, our Python run on Census 2021 data from Nomis', head: ['One-person households set to', 'Average prediction', 'Detached homes set to', 'Average prediction'], rows: [
          ['15%', '14.8%', '0%', '24.5%'],
          ['20%', '15.8%', '10%', '23.0%'],
          ['30%', '19.3%', '20%', '20.2%'],
          ['40%', '24.7%', '40%', '16.1%'],
          ['50%', '29.2%', '60%', '16.1%']
        ] },
        { kind: 'p', text: 'Read down the left pair of columns. With every other input left as it really is, the forest predicts 15.8% when the one-person share is set to 20% and 24.7% when it is set to 40%, a rise of 8.9 points. The right pair falls from 24.5% to 16.1% as the detached share goes from none to 40%, and then stops moving: the model has learned a curve with a flat end, which a straight-line model could not show. Now compare with the raw data. Areas where 15% to 25% of households are one person average 12.3% without a car; areas at 35% to 45% average 25.9%, a gap of 13.6 points. The raw gap is wider than the partial dependence gap because those two groups differ in other ways as well. In the first group about half of homes are detached (49.8%); in the second, under a quarter (23.2%). The plot holds that difference still, and the raw comparison does not.' },
        { kind: 'p', text: 'There is a catch in holding things still. Setting an area to 50% one-person households while leaving it with mostly detached houses describes a place that barely exists in Gedling, since the two inputs are correlated (minus 0.42). The forest still gives an answer, but it is guessing outside its experience. And in every case the plot reports what the model predicts, not what would happen if households changed. Nothing here shows a cause.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A recipe game: change only the sugar, taste-score each batch, and draw the line.' },
          { h3: 'Ages 11 to 15', p: 'Chart no-car share against one-person share for Gedling areas in Python and describe the pattern.' },
          { h3: 'Ages 15 and up', p: 'Train the forest, code partial dependence by hand, and explain why it differs from the raw averages.' }
        ] },
        { kind: 'callout', h3: 'Official counts, our model', p: 'All household counts are Office for National Statistics Census 2021 data taken from Nomis under the Open Government Licence. The forest, its scores and the partial dependence figures are our calculations and are published nowhere else. They concern areas, never individual households.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Opening the box',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'An explanation of a model is a claim too, and it deserves the same checking as a prediction.',
      body: [
        { kind: 'table', caption: 'From the Gedling forest to everyday AI use', head: ['In the project', 'With AI tools'], rows: [
          ['The plot showed 8.9 points, the raw data 13.6', 'An explanation can disagree with a simple chart; find out why'],
          ['Inputs moved together', 'Changing "one thing" may create a case the model never saw'],
          ['Detached curve went flat after 40%', 'Models learn shapes; ask to see them'],
          ['0.923 on seen areas, 0.733 on unseen', 'Judge a model on data it did not train on'],
          ['The plot described the forest', 'A model\'s behaviour is not proof of cause']
        ] },
        { kind: 'p', text: 'Vibe coding means describing a program in ordinary words and letting an AI write the first version. Ask a chatbot to "explain the model" and it will happily produce a plot and a confident paragraph about what drives the result. Carlton students learn to request the raw comparison next to it and to ask which inputs are correlated before trusting the story. The same discipline applies to AI agents that analyse data without supervision. We introduce agent building when a learner writes Python unaided, which tends to be in the last years of school or later, and Copilot Studio agents are reserved for one-to-one lessons. Further reading: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>.' },
        { kind: 'p', text: 'This page has no connection to the Office for National Statistics, Nomis or postcodes.io beyond using their open data. The model and every figure derived from it are our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'From one-change experiments to explaining models',
    intro: 'The year bands are approximate; a free lesson finds the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Change one thing, keep the rest, and record what happened.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Small games made with AI help, tested by the child who asked for them.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Machine learning projects that sit alongside GCSE and A level work.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'Models at work', p: 'Python, then generative AI and agents you can explain to a colleague.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and explanation',
    h2: 'What is a partial dependence plot?',
    intro: 'A partial dependence plot shows how a trained model\'s average prediction changes as one input is varied while the other inputs are left at their real values.',
    p1: 'For a random forest trained on 399 Gedling census areas, raising the one-person household share from 20% to 40% moved the average predicted no-car share from 15.8% to 24.7%, less than the 13.6-point gap in the raw averages.',
    p2: 'Learners who have built the plot by hand know it reports the model\'s view, and that correlated inputs can push it into cases no real area matches.',
    closer: 'Carlton teenagers who can code that check are equipped to challenge an AI\'s explanation, which is a strong argument for learning to program in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Netherfield, Colwick and Gedling, by video',
    intro: 'Any reasonably recent computer with a camera and steady internet will do.',
    cells: [
      { h3: 'The learner drives', p: 'Code is typed and run by the student while the tutor watches the screen share and probes the reasoning.' },
      { h3: 'Level found first', p: 'We use the trial to see where to begin and to write down the exam board if there is one.' },
      { h3: 'Trial without payment', p: 'Session one costs nothing and ends with the course we think fits.' },
      { h3: 'Small matched classes', p: 'Groups are five to ten learners at a similar stage, drawn from all over the UK.' },
      { h3: 'Two sessions a week', p: 'Term-time rhythm, with school holidays left free on request.' },
      { h3: 'One fixed hour', p: 'Tutors move their own clocks when British Summer Time changes; yours stays as booked.' }
    ],
    spec: { title: 'Why we teach online', p: 'Matching learners by level across the country gives every class a sensible pace, something a single neighbourhood rarely has the numbers for.' }
  },

  fees: {
    h2: 'Carlton fees',
    intro: 'Families in Carlton pay the international rate that applies to all learners outside India.',
    first: 'One full live lesson, free, ending with a suggested course.',
    group: 'Roughly eight live small-group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Charges are made in US dollars and we publish no figure in pounds. Billing begins only when the trial has led to a chosen course and a weekly time. The pricing page explains holiday pauses, missed sessions and changing between formats.'
  },

  reviewsH2: 'Nottinghamshire families and learners across the UK, on Google',

  book: {
    h2: 'Book a free Carlton lesson',
    intro: 'Send an age or school year and a hobby. The trial may be a change-one-thing experiment, a Scratch game drafted by an AI, a first Python program, or a look inside a small model.',
    success: 'Thanks. Your Carlton request is with us.'
  },

  faq: {
    h2: 'Carlton questions',
    intro: 'Partial dependence, the Gedling model, coding, AI and the practical details.',
    items: [
      { q: 'How many people live in Carlton, Nottinghamshire?', a: 'The Carlton built-up area had 53,555 residents at the 2021 census according to the ONS. Gedling borough had 117,264.' },
      { q: 'Do you teach Carlton learners online?', a: 'Yes. Classes are live on video for ages 6 to 67, whether you are in Carlton, Netherfield, Colwick, Gedling village or Burton Joyce.' },
      { q: 'What is a partial dependence plot?', a: 'A chart of a model\'s average prediction as one input is changed and the others are kept as they are. It shows what the model has learned about that input.' },
      { q: 'What is a random forest?', a: 'A model made of many decision trees, each trained on a slightly different sample of the data, whose predictions are averaged.' },
      { q: 'What is the Carlton project?', a: 'Training a forest on Census data for 399 Gedling areas, drawing partial dependence plots, and comparing them with plain averages to see where they differ.' },
      { q: 'Does vibe coding feature in lessons?', a: 'At every level. The learner sets the goal, an AI writes a draft, and the learner tests and corrects it.' },
      { q: 'When do learners start on AI agents?', a: 'Once they can write Python without help, usually late in secondary school or as adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is there help for GCSE or A level?', a: 'For computer science and maths, yes. The goal is real understanding; no grade is promised.' },
      { q: 'What are the fees?', a: 'Nothing for the first lesson. Then USD 100 each month for a group seat, or USD 150 each month for private lessons.' },
      { q: 'What about school holidays?', a: 'Lessons pause for them if you give us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Around Nottinghamshire',
    h2: 'More Nottinghamshire and East Midlands pages',
    html: 'Different projects run on the pages for <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mansfield">Mansfield</a> and <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a>. For everywhere else, start at the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Carlton and Nottinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-cto .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-cto .cg-hero h1 { font-weight: 740; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-cto .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-cto .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; }
.cg-root.cg-cto .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.016em; }
.cg-root.cg-cto .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-cto .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cto .cg-table th { font-size: 0.8rem; letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-cto .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-cto .cg-callout { border-radius: 4px 14px 14px 4px; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Gedling (E07000173), Census 2021 TS001 usual residents 117,264. ONS 2021 BUAs (published): Carlton (Gedling) 53,555; Arnold 40,010; Calverton 7,320. Carlton and Arnold BUAs are not cut at the borough boundary, so no "wholly in Gedling" claim. postcodes.io (Gedling): Gedling, Netherfield, Colwick, Porchester (suburban areas); Burton Joyce (village).',
    localProject: 'Census 2021 OA tables for Gedling via Nomis (TS045, TS017, TS006, TS044): 399 OAs, 51,536 households, 9,763 no car or van (18.94%). Random forest, 500 trees, min leaf 3; 5-fold CV R2 0.733, train R2 0.923. Partial dependence on one-person share: 15% 14.8; 20% 15.8; 30% 19.3; 40% 24.7; 50% 29.2. On detached share: 0% 24.5; 10% 23.0; 20% 20.2; 40% 16.1; 60% 16.1. Raw averages: 15-25% one-person 12.3 (detached 49.8%); 35-45% 25.9 (detached 23.2%). Raw gap 13.6 vs PD gap 8.9. Correlation one-person vs detached -0.42. Lesson family: partial dependence plots.',
    requiredMentions: [
      '53,555',
      '117,264',
      '51,536',
      '9,763',
      'Netherfield',
      'Colwick',
      'Porchester',
      'Burton Joyce',
      'partial dependence',
      'random forest'
    ],
    sources: [
      { claim: 'ONS Census 2021 tables TS045, TS017, TS006, TS044 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis Census 2021 TS017 household size.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts017' },
      { claim: 'postcodes.io places: suburban areas and villages in Gedling.', url: 'https://api.postcodes.io/places?q=Netherfield' }
    ],
    rejectedClaims: [
      'That living alone causes lower car ownership: not claimed; the plot describes the model only.',
      'Carlton built-up area lying wholly inside Gedling: not claimed; ONS BUAs ignore council boundaries.',
      'Sum of the three built-up areas: not published as a total; not added.',
      'Transport, tram or bus facts: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
