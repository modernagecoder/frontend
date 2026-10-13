'use strict';
// Melton (cg- city page, Australia cluster Phase 7, row 153). Shaped page: AI and programming for teenagers and
// adults. Melton is not a Significant Urban Area of its own in the ABS list (between Melbourne 2011 and Mildura -
// Buronga 2012 there is no Melton code), so place facts are for the Melton City Council area (LGA24650).
// Spine: when a tiny language model writes school names, how much is invention and how much is copying? Data:
// Victorian Department of Education, "School Locations 2025" (DataVic, discover.data.vic.gov.au, Creative
// Commons Attribution 4.0), dv402-SchoolLocations2025.csv downloaded 7 October 2026: 2,301 schools, 1,575 of them
// Government; Melton LGA 48 schools (Primary 29, Secondary 9, Pri/Sec 8, Special 2), 32 Government. Model:
// character-level Markov chain trained on the 1,575 government school names (all unique), order k = 2 to 6,
// 1,000 names generated per order with seed 20261007 (our calculation, scratchpad au/r3/mlt_markov.py). Exact
// copies of a training name among 1,000 outputs: k=2 0, k=3 39, k=4 218, k=5 519, k=6 698. Contexts learned:
// 700, 3,235, 6,485, 8,959, 11,006. Novel outputs ending in a school-type word: k=2 555, k=3 899, k=4 765,
// k=5 469, k=6 291. Example outputs (checked absent from all 2,301 names): order 2 "Cre Colle Sechoolege";
// order 4 "Irympleston Primary School" and "Banmira College"; order 6 "Katandra Rise Primary School".
// Lesson family: character-level Markov text generation and the memorisation versus novelty trade-off;
// screened free site-wide on 7 October 2026 ("Markov text": 0 page hits; claimed by AU-R3).
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Melton (C) LGA24650: 178,960 people;
// median age 33 (Victoria 38, Australia 38); 46,567 families; 60,338 private dwellings; 3.1 people per household;
// separate house 49,974 (91.0%; Victoria 73.4%; Australia 72.3%); flat or apartment 409 (0.7%; Victoria 12.1%);
// aged 5 to 9 15,297 (8.5%; Victoria 6.2%); aged 10 to 14 13,832 (7.7%; Victoria 6.0%); aged 15 to 19 11,568
// (6.5%); Professionals 13,993 (17.2%; Victoria 25.0%); Bachelor Degree level and above 29,286 (21.6%;
// Victoria 29.2%; Australia 26.3%). Victorian Government, 2027 school term dates: Term 1 Wednesday 27 January
// (students start Thursday 28 January in government schools) to Thursday 25 March; Term 4 Monday 4 October to
// Friday 17 December. IANA tz: Australia/Melbourne daylight saving 4 October 2026 to 4 April 2027.
// Excluded by the cluster rules: income, rent, mortgage, ancestry, birthplace, language, religion, health; and
// non-government school sectors, so that the model's training names carry no religious affiliation.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'MELTON', label: 'Melton', blurb: 'AI and programming for Melton teens and adults, and a tiny language model that invents Victorian school names.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-melton',
  code: 'mlt',
  accent: '#446C30',
  accentRationale: 'Melton: a basalt-plains olive green (HSV saturation 0.56, value 0.42, hue 100), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.1:1 on white and 5.0:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Melton',
    eyebrow: 'Melton, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-australia', name: 'Australia' }, { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Melton, Victoria',
  title: 'AI and Programming Classes in Melton | Live Online Lessons',
  description: 'Live online AI and programming classes for Melton teenagers and adults: Python, language models and machine learning, taught by a real teacher. First lesson free.',
  ogDescription: 'AI classes for Melton, with a project in which a small language model writes Victorian school names, and learners measure how much it simply copies.',
  twitterDescription: 'Melton AI and programming classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Melton Learners',
    description: 'Level-matched online Python, language models, machine learning and responsible AI for teenagers and adults across the City of Melton, taught live in English.'
  },

  h1: 'AI and programming classes in Melton',
  capsuleQ: 'What are the best AI and programming classes in Melton?',
  capsule: 'Classes where a Melton teenager or adult builds AI from its parts in Python, with a teacher alongside, instead of only typing prompts into a chat window. The 2021 Census counted 178,960 people in the City of Melton, with a median age of 33. Lessons run live over video, one to one or with a small group at your level, and the first is free.',
  lead: 'Train a computer on 1,575 Victorian government school names and ask it to write new ones. With a short memory of two letters it produces gibberish such as "Cre Colle Sechoolege". With six letters of memory the names become fluent, and 698 of 1,000 turn out to be real schools copied word for word. Somewhere in between, at four letters, it writes believable inventions like "Irympleston Primary School". Our Melton project builds this small language model in Python and measures that trade-off, the same tension between creativity and copying that the largest AI systems face.',
  wa: 'Hello Modern Age Coders, I would like a free AI and programming class for a learner in Melton.',

  picks: {
    eyebrow: 'Course picks for Melton',
    h2: 'AI and programming courses for Melton learners',
    intro: 'All four connect to the language-model project. The free opening lesson works out which one fits, without asking for a card.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning and language models built step by step in Python, starting from counting letters.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python foundations every AI project rests on, taught with real Victorian data.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'A thorough tour of AI methods, from probability models to neural networks, with code throughout.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'University and adult', note: 'How generative models work, how to evaluate them, and how to use them responsibly in real projects.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The City of Melton in the Census',
      h2: 'A young, fast-growing city of family homes',
      intro: 'Figures for the Melton City Council area from the 2021 Census QuickStats. The statistics bureau does not list Melton as a separate urban area, so the council area is the natural unit.',
      body: [
        { kind: 'table', caption: 'Melton City Council area, 2021 Census QuickStats', head: ['Census count', 'Melton'], rows: [
          ['Residents', '178,960'],
          ['Families', '46,567'],
          ['Private dwellings', '60,338'],
          ['People per household, on average', '3.1']
        ] },
        { kind: 'table', mt: true, caption: 'Shares in Melton beside Victoria', head: ['Share', 'Melton', 'Victoria'], rows: [
          ['Median age in years', '33', '38'],
          ['Residents aged 5 to 9', '8.5% (15,297)', '6.2%'],
          ['Residents aged 10 to 14', '7.7% (13,832)', '6.0%'],
          ['Occupied homes that are separate houses', '91.0% (49,974)', '73.4%'],
          ['Residents 15 and over with a bachelor degree or above', '21.6% (29,286)', '29.2%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Five years younger', p: 'The median Melton resident was 33, five years younger than the Victorian median of 38.' },
          { h3: 'Children everywhere', p: 'Residents aged 5 to 9 were 8.5% of Melton, against 6.2% across Victoria, and the 10 to 14 band was 7.7% against 6.0%.' },
          { h3: 'Almost all houses', p: 'Only 409 occupied homes, 0.7%, were flats or apartments; separate houses made up 91.0%.' }
        ] },
        { kind: 'p', text: 'About our use of census data: the bureau adds tiny random changes to each figure to keep individuals private, so parts of a table may not add up to its total. We quote the published totals and percentages and never manufacture a total by summing rows.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When a small language model writes school names, is it inventing or copying?',
      intro: 'The Victorian Department of Education publishes the name and location of every school in the state. We trained character-level models on the 1,575 government school names and generated 1,000 names at each memory length.',
      body: [
        { kind: 'table', caption: '1,000 generated names per model (our calculation, fixed random seed)', head: ['Letters of memory', 'Patterns learned', 'Exact copies of real names', 'New names that end like a school'], rows: [
          ['2', '700', '0', '555'],
          ['3', '3,235', '39', '899'],
          ['4', '6,485', '218', '765'],
          ['5', '8,959', '519', '469'],
          ['6', '11,006', '698', '291']
        ] },
        { kind: 'table', mt: true, caption: 'What the outputs look like (each checked against all 2,301 school names)', head: ['Memory', 'Example output', 'What happened'], rows: [
          ['2 letters', 'Cre Colle Sechoolege', 'Fragments of real words, stitched without sense'],
          ['4 letters', 'Irympleston Primary School', 'Irymple, a real place, extended into a plausible new one'],
          ['4 letters', 'Banmira College', 'A real name with a different ending'],
          ['6 letters', 'Katandra Rise Primary School', 'Fluent, but built almost entirely from existing pieces']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Count what follows', p: 'For every run of k letters in the training names, count which letter comes next. With k = 4, the model learns 6,485 such patterns.' },
          { h3: '2. Write one letter at a time', p: 'Start from a blank context, pick the next letter in proportion to those counts, slide the window forward, and stop at the end-of-name marker.' },
          { h3: '3. Measure the copying', p: 'Compare every output with the training list. The share of exact copies climbs from none at two letters to 698 in 1,000 at six.' }
        ] },
        { kind: 'callout', h3: 'More memory means more fluency and more copying', p: 'The order-three model writes the most new, well-formed names, 899 in 1,000, but many read oddly. By order six, outputs are smooth because most of them are real schools reproduced from memory. Large language models face the same tension at enormous scale, which is why researchers test whether a model is reproducing its training data. Learners who have measured it on school names understand the question from the inside.' },
        { kind: 'p', text: 'All of these counts are ours, from the department\'s 2025 file and a fixed random seed; a different seed changes individual names but not the pattern. The model only rearranges letters, so it knows nothing about real schools, and an invented name is not a suggestion that any such school exists.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'From a tiny model to a large one',
      h2: 'What the school-name model has in common with ChatGPT',
      intro: 'The Melton project is deliberately small, but each idea in it reappears in modern AI.',
      body: [
        { kind: 'table', caption: 'Ideas the project introduces', head: ['Idea', 'In the school-name model', 'In large language models'], rows: [
          ['Predict the next symbol', 'The next letter after four letters', 'The next token after thousands of tokens'],
          ['Context length', 'Two to six letters', 'Very long windows of text'],
          ['Sampling', 'Pick a letter in proportion to its count', 'Pick a token, often with a temperature setting'],
          ['Memorisation', 'Up to 698 exact copies in 1,000', 'Tests for reproduced training text'],
          ['Evaluation', 'Copies, novelty and well-formed endings', 'Many benchmarks and human review']
        ] },
        { kind: 'p', text: 'We filtered the training list to government schools for a practical reason: those names are mostly places and school types, which keeps the model\'s output about geography rather than any organisation. Making that choice, and writing it down, is itself part of responsible AI work, because what a model learns depends entirely on what it is given.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build the counting model in plain Python, generate names, then compare memory lengths and decide which outputs would suit a story or a game.' },
          { h3: 'University students', p: 'Probability, entropy and smoothing, then the leap from count tables to neural networks that predict the next token.' },
          { h3: 'Adults', p: 'Understand what generative tools are doing under the hood, so you can judge their output at work with confidence.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the Victorian Department of Education, Melton City Council or the Australian Bureau of Statistics. Their open data feeds the project; the models, counts and example names are entirely the output of our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Melton',
      h2: 'Forty-eight schools and a city on Melbourne\'s western edge',
      intro: 'Details drawn from the same school file and from Victoria\'s calendar.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Schools in the council area', p: 'The 2025 file lists 48 schools in the City of Melton: 29 primary, 9 secondary, 8 combined primary and secondary, and 2 specialist schools.' },
          { h3: 'Terms in 2027', p: 'Victorian government school students start on Thursday 28 January 2027, and Term 4 finishes on Friday 17 December 2027.' },
          { h3: 'Daylight saving', p: 'Victoria moves its clocks forward on Sunday 4 October 2026 and back on Sunday 4 April 2027.' }
        ] },
        { kind: 'spec', title: 'Why a list of names is a good first AI dataset', p: 'Names are short, plentiful and easy to judge by eye. A learner can see in seconds whether a generated name is nonsense, plausible or a copy, which makes the abstract ideas of overfitting and generalisation concrete long before any neural network appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting letters to understanding language models',
    intro: 'The ages are only a guide; the free lesson settles where to begin.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Counting and chance', p: 'Python dictionaries that count letters, and simple random choices that turn counts into new text.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'First machine learning', p: 'Markov models, classifiers and the habit of testing a model on data it has not seen.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Models in depth', p: 'Probabilistic models, neural networks and evaluation, with the maths explained and coded.', courses: ['artificial-intelligence-complete-masterclass-college', 'ai-ml-masterclass-complete-college'] },
      { band: 'Adults', h3: 'Generative AI at work', p: 'How generative systems work and fail, and how to check their output before relying on it.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Melton learner build a language model from scratch?',
    intro: 'Because a model you have built yourself is the quickest route to understanding the ones you use.',
    p1: 'Chat assistants feel like magic until you have written their simplest ancestor. Our school-name model predicts one letter at a time from counts, nothing more, yet it already shows the behaviours people worry about in large systems: it can produce confident nonsense, and with enough memory it can reproduce its training data exactly. Seeing 698 copies in 1,000 outputs is a far more memorable lesson about memorisation than any warning in a terms-of-use page.',
    p2: 'Learners who have built the model ask better questions of real AI tools. Is this answer new or remembered? What was this system trained on, and what was left out? How would I test it? Those questions are the core of using AI well, and they come most naturally to people who have looked inside one.',
    closer: 'AI tools in 2026 are everywhere, and a Melton learner who has built a small one from counts will understand, question and use them better than someone who has only typed prompts.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Caroline Springs, Kurunjang or Rockbank, the same lesson',
    intro: 'The City of Melton spreads across new suburbs on Melbourne\'s western fringe, and an online class reaches each of them equally.',
    cells: [
      { h3: 'Across a growing city', p: 'A learner in Taylors Hill and another in Eynesbury sit in one virtual classroom, with no travel between suburbs.' },
      { h3: 'Victorian year levels', p: 'Teachers plan around Victorian year levels and the state\'s four terms, and senior students can link projects to VCE computing and maths. Teaching is in English.' },
      { h3: 'Try a lesson first', p: 'Your first class is a real lesson rather than a pitch, and it finishes with a suggested level, course and time slot; payment details are not taken.' },
      { h3: 'Small groups', p: 'Between five and ten learners at a matching stage, from Melton and elsewhere, so groups fill at every level.' },
      { h3: 'A regular rhythm', p: 'Lessons twice a week in the same slot, close to eight per month, with breaks for holidays and exams arranged ahead.' },
      { h3: 'Teachers in India', p: 'A 5pm Melton lesson in winter is 12:30pm in India; after the clocks change in October, it starts at 11:30am there.' }
    ],
    spec: { title: 'Clock changes in Victoria', p: 'Victoria uses daylight saving and India does not, so the time difference to our teachers changes by an hour twice a year. Every lesson is booked and confirmed in Melbourne time so families never need to convert.' }
  },

  fees: {
    h2: 'Fees for Melton learners',
    intro: 'Three figures and nothing else.',
    first: 'One complete lesson free, ending with a level, a course suggestion and a proposed time.',
    group: 'A month of classes, usually eight, with fifteen to twenty learners at your stage.',
    private: 'Roughly eight lessons a month in the same pattern, taught one to one.',
    closer: 'Every country outside India is invoiced in US dollars, so a family in Aintree pays exactly what one in Diggers Rest pays and no local price list exists. Billing starts only once the trial has fixed a course and a time, and the pricing page explains holidays, absences and format changes.'
  },

  reviewsH2: 'Reviews from families, on Google',

  book: {
    h2: 'Tell us what the learner is curious about',
    intro: 'An age and one interest are enough to plan a first lesson: generating names for a fantasy map for a Year 8 student, or the full memorisation experiment for an adult.',
    success: 'Thank you. We will be in touch shortly about a Melton class.'
  },

  faq: {
    h2: 'Melton AI and programming class questions',
    intro: 'Questions Melton learners and parents ask most often.',
    items: [
      { q: 'How many people live in the City of Melton?', a: '178,960, according to the 2021 Census QuickStats for the Melton City Council area. The median age was 33, five years below the Victorian figure.' },
      { q: 'What is a character-level Markov model?', a: 'A model that writes text one character at a time, choosing each next character based on the few characters before it, using counts learned from example text. It is one of the oldest and simplest language models.' },
      { q: 'What is the Melton school-name project?', a: 'Learners train character-level models on 1,575 Victorian government school names and generate 1,000 new names at each memory length. They find that longer memory gives more fluent names but more exact copies, rising to 698 copies in 1,000 at six letters.' },
      { q: 'Are the invented school names real places?', a: 'No. Each example on this page was checked against all 2,301 schools in the 2025 file and appears in none of them. The model rearranges letters and has no knowledge of real schools.' },
      { q: 'Do you support VCE students?', a: 'Yes. We follow Victorian year levels and terms and help students taking computing and maths in Years 11 and 12. School-assessed work stays the student\'s own; we teach the ideas behind it.' },
      { q: 'What time are lessons for Melton learners?', a: 'Most choose an after-school or weekend slot, fixed during the trial and given in Melbourne time. India is four and a half hours behind Melton in winter and five and a half in summer.' },
      { q: 'Can younger children start AI and coding?', a: 'Yes, from six, with Scratch and visual projects first and typed code later; the Melton project on this page is designed for older learners.' },
      { q: 'Is there a Modern Age Coders centre in Melton?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Melton AI classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and what they want to build rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Melton and Victorian learners',
    html: 'Senior students heading for Year 12 computing can read <a class="cg-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics help</a> and <a class="cg-inline-link" href="/vce-applied-computing-data-analytics-help">VCE Applied Computing: Data Analytics help</a>. Melbourne\'s own page is <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">vibe coding and AI agents in Melbourne</a>, and the state guide is <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">coding and AI classes in Victoria</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Melton and Australia',
  footerPlaces: [
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/online-coding-and-python-classes-in-ballarat', label: 'Ballarat' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-mlt .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.4rem); }
.cg-root.cg-mlt .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-mlt .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-mlt .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.81rem; text-transform: uppercase; }
.cg-root.cg-mlt .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.011em; }
.cg-root.cg-mlt .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.1rem); }
.cg-root.cg-mlt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-mlt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mlt .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-mlt .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'City of Melton, ABS Census 2021 QuickStats, Melton (C) LGA24650 (read 7 October 2026): 178,960 people; median age 33 (Victoria 38, Australia 38); 46,567 families; 60,338 private dwellings; average 3.1 people per household; dwelling structure, occupied private dwellings: separate house 49,974 (91.0 percent; Victoria 73.4; Australia 72.3), flat or apartment 409 (0.7 percent; Victoria 12.1; Australia 14.2); age: 5 to 9 15,297 (8.5 percent; Victoria 6.2), 10 to 14 13,832 (7.7 percent; Victoria 6.0), 15 to 19 11,568 (6.5 percent; Victoria 5.6); occupation: Professionals 13,993 (17.2 percent; Victoria 25.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 29,286 (21.6 percent; Victoria 29.2; Australia 26.3). ABS Significant Urban Area list 2021: codes 2011 Melbourne and 2012 Mildura - Buronga, no separate Melton SUA. Victorian Government, school term dates 2027: Term 1 Wednesday 27 January (students start Thursday 28 January in government schools) to Thursday 25 March; Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September; Term 4 Monday 4 October to Friday 17 December. IANA tz database: Australia/Melbourne, daylight saving Sunday 4 October 2026 to Sunday 4 April 2027; Asia/Kolkata UTC+5:30.',
    localProject: 'Character-level Markov text model. Victorian Department of Education, School Locations 2025 (DataVic, CC BY 4.0), dv402-SchoolLocations2025.csv downloaded 7 October 2026: 2,301 rows; Education_Sector Government 1,575, Catholic 493, Independent 233; LGA_Name Melton (C): 48 schools (School_Type Primary 29, Secondary 9, Pri/Sec 8, Special 2), 32 Government. Training set: the 1,575 Government School_Name values (all unique). Model: order-k character Markov chain with start padding and an end marker, k = 2 to 6; 1,000 samples per k from random.Random(20261007). Contexts learned 700 / 3,235 / 6,485 / 8,959 / 11,006. Exact copies of a training name in 1,000 outputs 0 / 39 / 218 / 519 / 698. Novel outputs ending in School or College 555 / 899 / 765 / 469 / 291. Example outputs, each absent from all 2,301 names: Cre Colle Sechoolege (k=2), Irympleston Primary School and Banmira College (k=4), Katandra Rise Primary School (k=6). Lesson family: character-level Markov text and the memorisation versus novelty trade-off; distinct from the n-gram and Markov chain pages elsewhere on the site, which do not generate text.',
    requiredMentions: [
      '178,960',
      '46,567',
      '60,338',
      '49,974',
      '29,286',
      '1,575',
      'Irympleston Primary School',
      'Katandra Rise Primary School',
      '698 copies in 1,000'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Melton (C) local government area (LGA24650): people, median age, families, private dwellings, dwelling structure, age, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA24650' },
      { claim: 'Victorian Department of Education, School Locations 2025 on DataVic (Creative Commons Attribution 4.0).', url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025' },
      { claim: 'Victorian Government, school term dates and holidays, 2027 dates.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'That any generated name refers to a real or planned school: each example was checked against the full 2025 list and none matches.',
      'Catholic and independent school names in the training set: left out so the model learns place and school-type words rather than any affiliation.',
      'A Melton Significant Urban Area: the ABS list has none, so council-area figures are used and labelled as such.',
      'Melton City Council open datasets (playgrounds, libraries, kindergartens): available under CC BY 2.5 AU but not needed for this project.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the Victorian Department of Education, Melton City Council or the ABS.'
    ]
  }
};
