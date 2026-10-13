'use strict';
// Bendigo (cg- regional city page, Australia cluster Phase 7, row 145). Shaped page: AI and programming, leading
// with teenagers and adults.
// Spine: does a model score better if you judge it at a coarser label? Data: City of Greater Bendigo,
// "Environment - Trees" (data.gov.au package city-of-greater-bendigo-environment-trees, Creative Commons
// Attribution 2.5 Australia), zipped shapefile downloaded 7 October 2026: 121,481 records; fields AssetID, Desc,
// Type, Genus, Species, Cultivar, House, St_Name, St_Type, St_Suffix, Suburb; 55 suburb values; 664 species
// labels; 198 genus labels; every species label maps to exactly one genus label. The genus field splits
// eucalypts into 'Eucalyptus A to L' (22,193) and 'Eucalyptus M to Z' (37,457); eucalypts together 59,650 (49.1%).
// 249 records where the species name's first word differs from the genus label (214 written as the hybrid
// 'x Cupressocyparis'; the rest spelling differences between the two columns, for example 'Myoprum' in a species
// name under the genus label 'Myoporum'). Baseline model (our code, scratchpad au/r2/bdg_tax.py): in each suburb,
// predict that suburb's most common species. Scored against the species label 18.57% correct; against the
// published genus label 31.26%; against genus with the two eucalyptus buckets merged 48.83%. 42 of the 55 suburbs
// have a eucalypt as their commonest species. Lesson family: label hierarchies (taxonomy), fine versus coarse
// labels and hierarchical scoring; screened 0 location-page hits on 7 October 2026; claimed by AU-R2.
// Place facts read raw on 7 October 2026: ABS Census 2021 QuickStats, Significant Urban Area 2004 Bendigo:
// 103,034 people; median age 39; 27,171 families; 44,922 private dwellings; 2.4 people per household; separate
// house 36,178 (90.4%; Victoria 73.4%; Australia 72.3%); flat or apartment 429 (1.1%; Victoria 12.1%; Australia
// 14.2%); Professionals 10,576 (22.1%; Victoria 25.0%; Australia 24.0%); Bachelor Degree level and above 16,983
// (20.3%; Victoria 29.2%; Australia 26.3%); aged 15 to 19 5,980 (5.8%; Victoria 5.6%; Australia 5.7%).
// vic.gov.au 2027 term dates: Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday
// 17 September. IANA tz: Australia/Melbourne rule AV. Excluded: income, rent, mortgage, ancestry, birthplace,
// language, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'BENDIGO', label: 'Bendigo', blurb: 'Bendigo, a council register of 121,481 street trees, and why the level you score a model at changes its grade.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-bendigo',
  code: 'bdgo',
  accent: '#526830',
  accentRationale: 'Bendigo: a dry olive (HSV saturation 0.54, value 0.41, hue 83), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, and 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Bendigo',
    eyebrow: 'Bendigo, Victoria, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Victoria', href: '/coding-and-ai-classes-in-victoria' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Bendigo, Victoria',
  title: 'AI and Programming Classes in Bendigo | Live Online Lessons',
  description: 'Live online AI, machine learning and programming classes for Bendigo teens and adults, built on real council data, one to one or in small groups. First lesson free.',
  ogDescription: 'AI classes for Bendigo teens and adults, with a project on the council\'s 121,481 trees showing how label hierarchies change a model\'s score.',
  twitterDescription: 'Bendigo AI and programming classes for teens and adults, live online, first lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '7 October 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Bendigo Learners',
    description: 'Level-matched online Python, machine learning, data labelling and AI evaluation for teenagers and adults in Bendigo and central Victoria, taught live in English.'
  },

  h1: 'AI and programming classes in Bendigo',
  capsuleQ: 'What are the best AI and programming classes in Bendigo?',
  capsule: 'For Bendigo teenagers and adults, live lessons in Python and machine learning where you build and judge models on real local data, not canned demos. The Bendigo urban area had 103,034 residents at the 2021 Census, and nine in ten occupied homes were separate houses. We teach over video, one to one or with a small group at your stage, and the opening lesson is free.',
  lead: 'Every AI model is graded against labels, and labels come in layers. A tree is a species, its species belongs to a genus, and a model that guesses the wrong species but the right genus is not wholly wrong. The City of Greater Bendigo publishes both layers for 121,481 street and park trees. We built the simplest possible model, one that predicts the commonest species in each suburb, and scored it three ways. Against species it is right 18.57% of the time. Against the published genus it reaches 31.26%. Merge the two buckets the file uses for eucalypts and it climbs to 48.83%. Same predictions, three grades. Learners find out why.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Bendigo.',

  picks: {
    eyebrow: 'Course picks for Bendigo',
    h2: 'Where Bendigo learners begin with AI',
    intro: 'Four courses that match the tree-label project. The free lesson places you on one, and no card is needed to book it.',
    items: [
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning for teenagers, from sorting data by hand to training and testing real models in Python.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python foundations that every AI project rests on, written and tested line by line.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'University and adult', note: 'Search, learning and evaluation, with models built from scratch before any library does the work.' },
      { course: 'data-science-complete-masterclass-college', band: 'Adults', note: 'Data preparation, labelling and model evaluation on public datasets, with honest reporting of results.' }
    ]
  },

  sections: [
    {
      id: 'people', tint: '', eyebrow: 'Bendigo in the 2021 Census',
      h2: 'A city of detached houses in central Victoria',
      intro: 'Figures the statistics bureau publishes for the Bendigo Significant Urban Area, alongside Victoria and the nation.',
      body: [
        { kind: 'table', caption: 'QuickStats 2021 for the Bendigo urban area, with Victorian and national comparisons', head: ['Measure', 'Bendigo', 'Victoria', 'Australia'], rows: [
          ['Population', '103,034', 'see note', 'see note'],
          ['Median age', '39', 'see note', 'see note'],
          ['Families', '27,171', 'see note', 'see note'],
          ['Separate houses as a share of occupied homes', '90.4%', '73.4%', '72.3%'],
          ['Flats and apartments as a share of occupied homes', '1.1%', '12.1%', '14.2%'],
          ['Holders of a bachelor degree or higher, aged 15 and over', '16,983 (20.3%)', '29.2%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Nine in ten', p: '36,178 occupied homes in urban Bendigo were separate houses. Only 429 were flats or apartments.' },
          { h3: 'Professionals', p: '10,576 employed residents worked as professionals, 22.1% of workers, a little below Victoria\'s 25.0%.' },
          { h3: 'Fifteen to nineteen', p: 'The Census counted 5,980 Bendigo residents aged 15 to 19, 5.8% of the urban population.' }
        ] },
        { kind: 'p', text: 'Note on the comparison columns: the bureau publishes state and national figures as shares, so only the percentage rows are compared here. It also adds small random adjustments to protect privacy, which means parts of a table can disagree slightly with its total. We report what is printed and never build totals from parts.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Same predictions, three different scores',
      intro: 'A deliberately simple model on the City of Greater Bendigo tree register, judged at species level, at the published genus level and at a corrected genus level.',
      body: [
        { kind: 'table', caption: 'The register as downloaded on 7 October 2026 (our count)', head: ['Item', 'Figure'], rows: [
          ['Tree records', '121,481'],
          ['Suburbs named', '55'],
          ['Species labels', '664'],
          ['Genus labels', '198'],
          ['Species labels that map to more than one genus label', '0'],
          ['Eucalypts, across the two eucalyptus buckets', '59,650, or 49.1%']
        ] },
        { kind: 'table', mt: true, caption: 'Score of the "commonest species in your suburb" model (our calculation)', head: ['Judged against', 'Correct'], rows: [
          ['Species label', '18.57%'],
          ['Genus label as published', '31.26%'],
          ['Genus, with "Eucalyptus A to L" and "Eucalyptus M to Z" merged', '48.83%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the baseline', p: 'For each of the 55 suburbs, find the species that appears most often and predict it for every tree there. No learning, just counting.' },
          { h3: '2. Score at each level', p: 'Count a prediction correct if the species matches, then again if only the genus matches. A near miss earns credit at the coarse level.' },
          { h3: '3. Question the labels', p: 'The file files eucalypts under two genus labels split by the alphabet. Treating them as one genus moves the score by more than seventeen points.' }
        ] },
        { kind: 'callout', h3: 'A label scheme is a design decision', p: 'Splitting the eucalypts alphabetically is sensible for anyone browsing a long list, and the register is consistent about it: every one of the 664 species labels belongs to exactly one genus label. But a split made for convenience is not a biological grouping, and a model judged against it looks worse than it is. Before trusting any accuracy figure, learners ask what the labels mean and who designed them for what.' },
        { kind: 'p', text: 'Every percentage here is ours, computed from the council file downloaded on 7 October 2026. The baseline model is a teaching device, not a tool for managing trees, and nothing on this page describes the health, value or management of any tree.' }
      ]
    },
    {
      id: 'labels', tint: 'tint', eyebrow: 'Checking a taxonomy',
      h2: 'Four checks to run on any set of labels',
      intro: 'Learned on trees, then used on product categories, job titles, library subjects or any data that comes in layers.',
      body: [
        { kind: 'table', caption: 'Hierarchy checks and what they found in the Bendigo register', head: ['Check', 'Result in Bendigo', 'Why it matters for AI'], rows: [
          ['Every fine label has exactly one parent', 'Yes, 0 conflicts across 664 species', 'Coarse scores are well defined'],
          ['Parent names match the fine labels', '249 records disagree, 214 of them hybrid notation', 'Lookups by name silently miss records'],
          ['Parents are real groupings', 'Eucalypts split into two alphabetical buckets', 'Coarse scores understate the model'],
          ['One class dominates', 'Eucalypts are 49.1% of all records', 'Always guessing "eucalypt" already scores high'],
          ['Local patterns', '42 of 55 suburbs have a eucalypt as their top species', 'A location-based model has an easy head start']
        ] },
        { kind: 'p', text: 'The 249 mismatches are worth a look. Most come from a hybrid written with a leading "x", where the species reads "x Cupressocyparis" and the genus reads as one word. The rest are spelling differences between the two columns, such as a species written "Myoprum" under the genus "Myoporum". A model never sees those as the same thing unless someone tidies them first.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Build the counting model in Python, score it by hand on a small sample, then on all 121,481 records.' },
          { h3: 'University students', p: 'Hierarchical classification, top-k accuracy and confusion matrices that respect a taxonomy.' },
          { h3: 'Adults', p: 'Audit the categories in your own work data before anyone trains a model on them.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is independent of the City of Greater Bendigo, the Victorian Government and the statistics bureau, and claims no partnership. Census figures are the bureau\'s; all tree counts and scores come from our own code.' }
      ]
    },
    {
      id: 'year', tint: '', eyebrow: 'Bendigo\'s calendar',
      h2: 'Victorian terms and daylight saving',
      intro: 'When Bendigo students are in school during 2027, and what that means for lesson times.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 2 of 2027', p: 'Runs from Monday 12 April to Friday 25 June, according to Victoria\'s published term dates.' },
          { h3: 'Term 3 of 2027', p: 'Runs from Monday 12 July to Friday 17 September, with the spring break after it.' },
          { h3: 'Clocks', p: 'Victoria shifts to daylight saving on the first Sunday of October and returns on the first Sunday of April.' }
        ] },
        { kind: 'spec', title: 'Why a baseline comes first', p: 'Before training anything clever, build the dumbest model that could work and score it honestly. The Bendigo suburb baseline sets the bar every real model has to clear, and it already shows how much the choice of label level matters.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting labels to evaluating real models',
    intro: 'Ages are only guides; the free lesson sets the starting point.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Counting and sorting', p: 'Python dictionaries and counters that find the commonest label in any group of records.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'First models', p: 'Baselines, train and test splits and accuracy, measured on real data such as the Bendigo register.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'University', h3: 'Evaluation done properly', p: 'Hierarchical labels, class imbalance and metrics that tell the truth about a model.', courses: ['artificial-intelligence-complete-masterclass-college', 'ai-ml-masterclass-complete-college'] },
      { band: 'Adults', h3: 'AI on your own data', p: 'Preparing, labelling and checking workplace data so models built on it behave as expected.', courses: ['data-science-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools report an accuracy number instantly. Why should a Bendigo learner question it?',
    intro: 'Because the same model scored 18.57%, 31.26% and 48.83% on the same trees, depending only on which labels were used.',
    p1: 'Ask an AI assistant to train a classifier on the Bendigo register and report its accuracy, and you will get a single, confident figure. Which figure depends on choices the tool makes without telling you: species or genus, whether the alphabetical eucalyptus buckets count as one group, whether the 249 mismatched names were tidied. Each choice is defensible. Together they swing the result by thirty points.',
    p2: 'Learners who have scored the baseline by hand see these choices instantly. They ask what the labels are, how they are grouped, how common the largest class is, and what a trivial model already achieves. Those questions turn an impressive-sounding accuracy into an honest one, whether the code came from a person or an AI.',
    closer: 'In 2026 anyone can train a model; a Bendigo learner who knows what the score is actually measuring is the one whose results others can rely on.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Kangaroo Flat, Golden Square or Strathfieldsaye, the same lesson',
    intro: 'Greater Bendigo stretches across old goldfields and new estates, and a live video lesson reaches every one of them.',
    cells: [
      { h3: 'From Eaglehawk to Kennington', p: 'Two learners on opposite sides of the city can sit in the same class without either of them driving anywhere.' },
      { h3: 'Fitted to Victorian schooling', p: 'We use Victorian year levels, work around the four terms and help senior students connect projects to their studies. Teaching is in English.' },
      { h3: 'First lesson, real content', p: 'Your trial is a proper lesson that finishes with a suggested level, course and time. No card is taken.' },
      { h3: 'Groups of fifteen to twenty', p: 'Learners at the same level from Bendigo and beyond, so regional students always have classmates at their stage.' },
      { h3: 'Steady weekly rhythm', p: 'About eight lessons a month at a set time, with breaks for holidays and exams agreed with your teacher.' },
      { h3: 'India-based teachers', p: 'A 7pm lesson in Bendigo is 1:30pm for our teachers during daylight saving and 2:30pm once Victoria\'s clocks go back in April.' }
    ],
    spec: { title: 'Lesson times across the year', p: 'Victoria changes its clocks and India does not, so the gap to our teachers is five and a half hours in summer and four and a half in winter. Times are always set in Bendigo time.' }
  },

  fees: {
    h2: 'What classes cost in Bendigo',
    intro: 'Three prices and nothing hidden.',
    first: 'A full lesson without charge, ending with a recommended level, course and regular slot.',
    group: 'A month of lessons, normally eight, in a class of fifteen to twenty learners at your level.',
    private: 'Roughly eight lessons a month at the same pace, with a teacher working only with you.',
    closer: 'We charge in US dollars in every country apart from India, so a learner in Epsom and one in Spring Gully receive identical invoices. You are billed only after the trial agrees a course and a time, and the pricing page explains holidays, missed lessons and changing between group and private.'
  },

  reviewsH2: 'Google reviews left by our families',

  book: {
    h2: 'Book a free AI or programming lesson',
    intro: 'Tell us an age and what interests the learner. A Year 9 student might count labels in a small sample first; an adult might start straight away on scoring the full register.',
    success: 'Thank you. We will contact you shortly about a Bendigo class.'
  },

  faq: {
    h2: 'Bendigo AI class questions',
    intro: 'What Bendigo learners and parents usually want to know.',
    items: [
      { q: 'How many people live in Bendigo?', a: 'The statistics bureau counted 103,034 people in the Bendigo urban area at the 2021 Census. The median age was 39.' },
      { q: 'What is a label hierarchy in machine learning?', a: 'A set of categories arranged in layers, such as species within genus. It lets you judge a model at more than one level, so a guess that gets the genus right but the species wrong can be scored as partly correct.' },
      { q: 'What is the Bendigo tree project?', a: 'Learners take the City of Greater Bendigo\'s open register of 121,481 trees, build a model that predicts each suburb\'s commonest species, and score it at species and genus level. The same predictions score 18.57%, 31.26% or 48.83% depending on the labels used.' },
      { q: 'What is a baseline model?', a: 'The simplest model that could reasonably work, such as always predicting the most common answer. It sets the minimum any real model must beat, and it often reveals how easy or hard a problem truly is.' },
      { q: 'Do you support VCE students?', a: 'Yes, as tuition alongside school. We follow Victorian year levels and help senior students with computing and maths, while anything submitted for assessment remains the student\'s own work.' },
      { q: 'When are lessons for Bendigo learners?', a: 'After school, in the evening or at weekends, agreed during the trial and always stated in Bendigo time. Our teachers are five and a half hours behind in summer and four and a half in winter.' },
      { q: 'Can younger children learn AI?', a: 'Yes. From age six children start with Scratch and simple sorting and pattern games, and older children move on to Python. This page is written for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Bendigo?', a: 'No, and none is claimed. All teaching is live and online, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a reliable connection, and the contact number shown is an Indian one.', boiler: true },
      { q: 'What do Bendigo AI classes cost?', a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, around eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before anything is paid.', boiler: true },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners, matched on level, pace and goals rather than on age or suburb. If no suitable group meets at a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'More for Bendigo and Victorian learners',
    html: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria coding page</a> covers the whole state, and Ballarat learners have their own <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ballarat">Ballarat Python page</a>. Anyone curious about how models learn should read <a class="cg-inline-link" href="/learn-to-train-ai-not-just-prompt-it-australia">learn to train AI, not just prompt it</a>, and senior students will find <a class="cg-inline-link" href="/vce-algorithmics-hess-help">VCE Algorithmics help</a>. Every Australian page is listed on the <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bendigo and Victoria',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-ballarat', label: 'Ballarat' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/vce-algorithmics-hess-help', label: 'VCE Algorithmics' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-bdgo .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.2rem); }
.cg-root.cg-bdgo .cg-hero h1 { font-weight: 800; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-bdgo .cg-capsule { border-top: 3px solid var(--cg-accent); padding: 0.9rem 0 0 0; }
.cg-root.cg-bdgo .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-bdgo .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.014em; }
.cg-root.cg-bdgo .cg-grid-3 { gap: clamp(1rem, 2.6vw, 2.1rem); }
.cg-root.cg-bdgo .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-bdgo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bdgo .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bdgo .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Bendigo, ABS Census 2021 QuickStats, Significant Urban Area 2004 (read 7 October 2026): 103,034 people; median age 39; 27,171 families; 44,922 private dwellings; average 2.4 people per household; dwelling structure, occupied private dwellings: separate house 36,178 (90.4 percent; Victoria 73.4; Australia 72.3), flat or apartment 429 (1.1 percent; Victoria 12.1; Australia 14.2); occupation: Professionals 10,576 (22.1 percent; Victoria 25.0; Australia 24.0); highest educational attainment, people aged 15 and over: Bachelor Degree level and above 16,983 (20.3 percent; Victoria 29.2; Australia 26.3); aged 15 to 19 5,980 (5.8 percent; Victoria 5.6; Australia 5.7). vic.gov.au 2027 Victorian school term dates: Term 2 Monday 12 April to Friday 25 June; Term 3 Monday 12 July to Friday 17 September. IANA tz database: Australia/Melbourne rule AV, daylight saving from the first Sunday in October to the first Sunday in April; Asia/Kolkata UTC+5:30.',
    localProject: 'Label hierarchies and hierarchical scoring. City of Greater Bendigo, Environment - Trees (data.gov.au city-of-greater-bendigo-environment-trees, CC BY 2.5 AU), cogb-environment-trees.shz downloaded 7 October 2026, read as cp1252: 121,481 records; 55 Suburb values; 664 Species values; 198 Genus values; species to genus label mapping has 0 conflicts. Genus "Eucalyptus A to L" 22,193 and "Eucalyptus M to Z" 37,457 (together 59,650, 49.1 percent). Species first word versus genus label: 249 mismatches (214 hybrid written "x Cupressocyparis"; 25 "Myoprum" under "Myoporum"; 4 "Livistona" under "Livistonia"; 3 "Eucalyptus" under "Eorbifolia"; 2 "Eucalytpus" under "Eucalyptus A to L"; 1 "X" under "Catalpa"). Suburb-majority species baseline: species accuracy 18.568 percent; published genus accuracy 31.261 percent; genus accuracy with the two eucalyptus buckets merged 48.829 percent. Suburbs whose commonest species is a eucalypt: 42 of 55. Suburb Bendigo: 9,076 records, commonest Ulmus procera - English Elm 1,867.',
    requiredMentions: [
      '103,034',
      '27,171',
      '36,178',
      '16,983',
      '10,576',
      '121,481',
      '18.57%',
      '31.26%',
      '48.83%',
      '42 of 55 suburbs have a eucalypt'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Bendigo Significant Urban Area (2004): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/2004' },
      { claim: 'City of Greater Bendigo, Environment - Trees open dataset (CC BY 2.5 AU) on data.gov.au.', url: 'https://data.gov.au/data/dataset/city-of-greater-bendigo-environment-trees' },
      { claim: 'Victorian Government, school term dates and holidays, 2027.', url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria' },
      { claim: 'IANA time zone database, australasia file: Australia/Melbourne and rule AV.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Which spelling in each mismatched pair is botanically correct: not checked against a botanical authority, so the page only reports that the columns differ.',
      'Why the council splits eucalypts alphabetically: not stated in the dataset, so only the split itself is reported.',
      'The health, value or management of any tree: the register has no such fields in this download, and no claim is made.',
      'Bureau of Meteorology station data: the observations feed returned 403 and was not circumvented.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the City of Greater Bendigo, the Victorian Government or the ABS.'
    ]
  }
};
