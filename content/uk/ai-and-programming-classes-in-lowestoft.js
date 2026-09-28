'use strict';
// Lowestoft (cg- town page, UK cluster Phase 8, towns band A, row 376). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: does data augmentation really give a
// model more to learn from, and how can it fool you?
// Anchors (read raw 28 September 2026): Project Gutenberg 51654, "Gillingwater's History of Lowestoft", transcribed from
// the 1897 (Lowestoft) edition, a reprint with a chapter of more recent events by A. E. Murton: "THIS island (lately
// become a peninsula)"; "of which Lowestoft is the principal". Project Gutenberg 53858, Francis Davy Longe, "Lowestoft in
// olden times", transcribed from the [1899] edition: "lectures read before the members of St. Margaret's Institute, at
// Lowestoft"; "The most ancient record in which we find any mention of Lowestoft is" (Domesday Book). Project Gutenberg
// 42350, The New Hand-Book to Lowestoft (1849 T. Crowe edition), title page: "COMPILED FROM GILLINGWATER'S HISTORY".
// Our run (scratchpad lwt/aug.py, aug2.py): sentences of 8 to 60 words, lowercased letters only; Gillingwater Sections I
// to XIV (Murton's chapter and footnotes excluded) 1,922; Longe Lectures I to IV (footnotes excluded) 938. Test 300 per
// author; train n per author; word-count naive Bayes (scikit-learn); augmentation = 4 extra copies per training sentence,
// each deleting about 10% of words at random and swapping about one word pair per ten words; 200 random splits.
// Mean accuracy plain vs augmented: n=5 55.1 / 55.7; 10: 57.6 / 58.4; 20: 61.8 / 62.6 (augmented better in 133 of 200
// splits, worse 56); 50: 68.6 / 68.9. Controls at n=20: 4 exact copies 62.6; swaps only 62.6 (identical to exact copies in
// every split: word order is invisible to a word-count model); deletions only 62.6; both 62.6.
// Leakage (95 originals per author, 80/20): augment first then split 99.2%; split first then augment 71.5%.
// Lesson family: data augmentation, the "just copy it" control, invariance of bag-of-words to order, augmentation leakage.
// Screened: augmentation 0 hits. Cumbria owns naive Bayes authorship with editorial-token leakage; Dundee owns walk-forward
// leakage in forecasts.
// Place facts: East Suffolk (E07000244) TS001 246,058. ONS 2021 BUAs (published): Lowestoft 71,315; Beccles 9,810; Bungay
// 5,010; Halesworth 4,925; Kessingland 4,240. postcodes.io suburban areas in East Suffolk district: Oulton Broad,
// Pakefield, Carlton Colville, Gunton, Kirkley.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LOWESTOFT', label: 'Lowestoft', blurb: 'AI and programming classes for Lowestoft, with a project that tests data augmentation on two old histories of the town, and catches it cheating.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-lowestoft',
  code: 'lwt',
  accent: '#34158A',
  accentRationale: 'Lowestoft: a deep indigo (10.44:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Lowestoft',
    eyebrow: 'Lowestoft, East Suffolk, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Suffolk' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Suffolk', href: '/coding-classes-in-suffolk' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lowestoft, England',
  title: 'AI and Programming Classes in Lowestoft | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Lowestoft, Oulton Broad, Pakefield and Carlton Colville learners aged 6 to 67. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Lowestoft, and a Python project that tests data augmentation on two old histories of the town.',
  twitterDescription: 'Lowestoft AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Lowestoft',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Lowestoft and across East Suffolk, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Lowestoft',
  capsuleQ: 'Which are the best AI and programming classes in Lowestoft?',
  capsule: 'The ONS counted 71,315 people in the Lowestoft built-up area at the 2021 census, within an East Suffolk district of 246,058 that also includes Beccles, Bungay, Halesworth and Kessingland. Whether home is Pakefield, Oulton Broad, Carlton Colville or the town centre, a learner of 6, 16 or 67 can join our India-based tutors on live video for AI, programming, Python, vibe coding and maths, privately or as one of five to ten classmates at a similar point. We teach how to think first, so that learners stay in charge of the AI tools they use. The free first lesson ends with our course suggestion. For Lowestoft the project puts a popular AI trick, data augmentation, to a fair test using two old histories of the town. Beyond the trial, lessons cost USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Two histories of Lowestoft are free on Project Gutenberg. Edmund Gillingwater\'s, reprinted in 1897, opens with the Island of Lothingland: "THIS island (lately become a peninsula)". Francis Davy Longe\'s Lowestoft in Olden Times began as "lectures read before the members of St. Margaret\'s Institute, at Lowestoft". A computer can learn to tell their sentences apart, but only if it has enough examples. When examples are scarce, AI builders often use data augmentation: making extra, slightly altered copies of the examples they have. This project tests whether that really helps, and finds two ways it can mislead anyone who does not check.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a Lowestoft learner.',

  picks: {
    eyebrow: 'Lowestoft course picks',
    h2: 'Lowestoft courses in thinking, vibe coding and AI',
    intro: 'Let age and curiosity steer the choice. The first live lesson on every course is free, and booking needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: fair tests, clues and spotting when a result is too good to be true.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps built by describing them to AI and testing them carefully.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, from a first text classifier to honest testing, including this project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI is trained and evaluated, plus language models, retrieval and agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Lowestoft and East Suffolk',
      h2: 'Lowestoft and other East Suffolk towns',
      intro: 'ONS 2021 census populations for Lowestoft and some of the district\'s smaller built-up areas.',
      body: [
        { kind: 'table', caption: 'Lowestoft beside four smaller East Suffolk settlements, 2021 census (ONS)', head: ['Built-up area', 'People (2021)'], rows: [
          ['Lowestoft', '71,315'],
          ['Beccles', '9,810'],
          ['Bungay', '5,010'],
          ['Halesworth', '4,925'],
          ['Kessingland', '4,240']
        ] },
        { kind: 'p', text: 'These are individual ONS figures, printed as released and never added together; the district count of 246,058 comes from its own census table and covers many places not listed here. Oulton Broad, Pakefield, Carlton Colville, Gunton and Kirkley are all within East Suffolk district. Suffolk schools follow the English national curriculum; send us your holiday dates and we will keep those weeks free of lessons.' },
        { kind: 'callout', h3: 'Suffolk, the region and how we teach', p: 'For the rest of the county see <a class="cg-inline-link" href="/coding-classes-in-suffolk">coding classes in Suffolk</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">the East of England page</a>. The thinking behind judgement before prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Lowestoft project',
      h2: 'Does data augmentation really help? Two histories as a test',
      intro: 'Teach a model to tell Gillingwater from Longe with very few examples, then add altered copies and measure fairly.',
      body: [
        { kind: 'p', text: 'The learner splits each book into sentences, keeping those of 8 to 60 words and leaving out later additions and footnotes: 1,922 sentences from Gillingwater and 938 from Longe. A simple word-count classifier, known as naive Bayes, learns which words each author favours. To imitate a shortage of data, it is trained on only a handful of sentences per author and tested on 300 unseen sentences from each. The augmented version gets four extra copies of every training sentence, each with about one word in ten deleted and a pair of words swapped. Longe\'s remark that the oldest record naming the town is Domesday Book, lowercased as "the most ancient record in which we find any mention of lowestoft is domesday book" becomes, for example, "the most ancient record which of find any mention we lowestoft is domesday book". Every result is averaged over 200 random splits.' },
        { kind: 'table', caption: 'Mean accuracy on 600 unseen sentences, 200 random splits, our Python run, 28 September 2026', head: ['Training sentences per author', 'Without augmentation', 'With augmentation'], rows: [
          ['5', '55.1%', '55.7%'],
          ['10', '57.6%', '58.4%'],
          ['20', '61.8%', '62.6%'],
          ['50', '68.6%', '68.9%']
        ] },
        { kind: 'p', text: 'At first glance augmentation works. It adds a little under a point at every size, and at 20 sentences per author it wins in 133 of the 200 splits and loses in 56. A beginner might stop there and report success. The careful next step is a control: what happens if, instead of altered copies, the program simply adds four exact copies of each sentence? That changes nothing about the information available, only how heavily the training examples count.' },
        { kind: 'table', caption: 'Controls at 20 training sentences per author, same 600 test sentences and 200 splits', head: ['Training data', 'Mean accuracy'], rows: [
          ['Original sentences only', '61.8%'],
          ['Plus four exact copies of each', '62.6%'],
          ['Plus four copies with words swapped only', '62.6%'],
          ['Plus four copies with words deleted only', '62.6%'],
          ['Plus four copies with both changes', '62.6%']
        ] },
        { kind: 'p', text: 'Every version lands on the same figure. Exact copies do just as well as the clever ones, so the small gain comes from giving the training examples more weight, not from new information. The swapped copies are the clearest case: their results match the exact copies in every one of the 200 splits, because a word-count model never sees word order at all. An augmentation only helps if it changes something the model can actually notice.' },
        { kind: 'table', caption: 'The leakage trap, 95 original sentences per author, 80% train and 20% test', head: ['Order of steps', 'Mean accuracy'], rows: [
          ['Augment all sentences, then split into train and test', '99.2%'],
          ['Split first, then augment only the training sentences', '71.5%']
        ] },
        { kind: 'p', text: 'The second trap is far more dangerous. If every sentence is augmented first and the copies are then shuffled into training and test sets, near-identical versions of test sentences sit in the training data. The model recognises them and scores 99.2%, a result that looks spectacular and means nothing. Split first, augment only the training part, and the honest figure is 71.5%. Order matters: set the test data aside before doing anything else.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Run a fair-test experiment with a control group and see why the control matters.' },
          { h3: 'Ages 11 to 15', p: 'Split two texts into sentences in Python and count which words each writer prefers.' },
          { h3: 'Ages 15 and up', p: 'Build the augmentation, add the copy control, then reproduce and fix the leakage.' }
        ] },
        { kind: 'callout', h3: 'Their histories, our experiment', p: 'The texts are the Project Gutenberg transcriptions of Gillingwater\'s History of Lowestoft and Lowestoft in Olden Times by Francis Davy Longe. The sentence splits, the classifier, the augmentations and every accuracy figure are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Fair tests for AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Treat any striking result as a prompt to dig further.',
      body: [
        { kind: 'table', caption: 'From the Lowestoft experiment to everyday AI', head: ['In the history project', 'When AI builds or reports something'], rows: [
          ['Augmentation looked like a win', 'A reported improvement needs a control'],
          ['Exact copies scored the same', 'Ask whether the simplest version does just as well'],
          ['Swaps were invisible to the model', 'Check that a change touches what the system uses'],
          ['99.2% came from test data leaking in', 'A near-perfect score is a reason to look for a leak'],
          ['Set the test aside first', 'Keep some checks the AI never sees']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to improve a model and it may well suggest data augmentation, write the code and report a better score. Vibe coding means explaining the program you want and letting an AI write a draft; for our learners, this project becomes the prompt to ask what the score was compared with and whether test data could have slipped into training. AI agents can run whole experiments without a person watching each step, which makes built-in controls and a sealed test set even more important. Agent building comes after Python for older teenagers and adults, and Copilot Studio agents are taught in one-to-one lessons only. Follow-up reading: <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course for students in the UK</a>, and the guide <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders has no connection with Project Gutenberg, the Office for National Statistics or postcodes.io. We borrowed their words and numbers; the testing, and whatever we got wrong, is down to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From fair tests to honest AI',
    intro: 'We use the school year as a first estimate and let the free lesson decide the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Fair tests, patterns and checking a surprising answer.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps made with AI help, each tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Text, data and fair model testing alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Models and agents', p: 'Training, evaluation, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and evidence',
    h2: 'Can you trust a score an AI reports?',
    intro: 'Only after asking what it was compared with and what it was tested on.',
    p1: 'In the Lowestoft project the same model scored 99.2% or 71.5% depending only on the order of two steps. Nothing about the model changed; only the test did.',
    p2: 'Learners who have produced a fake 99.2% themselves become quick to spot one elsewhere, including in results that AI tools present with confidence.',
    closer: 'Spotting a leaky test is a habit that serves Lowestoft teenagers with every AI tool they touch, which makes coding well worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Pakefield to Oulton Broad, online',
    intro: 'All a Lowestoft home needs is a computer and a dependable connection.',
    cells: [
      { h3: 'Students at the controls', p: 'Learners write, prompt and run the code; the tutor watches on screen share and asks the questions that move them on.' },
      { h3: 'The trial sets the level', p: 'From Year 3 to Year 13, the free lesson decides where to begin, and we record any exam board.' },
      { h3: 'No cost to start', p: 'The first lesson is free and ends with a suggested course.' },
      { h3: 'Groups by stage', p: 'Five to ten UK learners at a similar level in each class.' },
      { h3: 'Two sessions weekly', p: 'Lessons are paused over school holidays.' },
      { h3: 'Stable lesson hours', p: 'Tutors follow UK clock changes, so the time you chose stays the same.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Five East Suffolk learners at the same stage, all free on the same evening, seldom live near each other. Online, they can share a class.' }
  },

  fees: {
    h2: 'Lowestoft fees',
    intro: 'Lowestoft learners pay our international rate, which covers every country but India.',
    first: 'A full lesson at no charge first, followed by our course suggestion.',
    group: 'Around eight live group lessons per month.',
    private: 'Around eight live private lessons per month.',
    closer: 'Fees are in US dollars rather than pounds. Billing begins only after the trial fixes the course and the regular slot, and our pricing page deals with holidays away, missed sessions and moving between formats.'
  },

  reviewsH2: 'What Suffolk households, and others across Britain, write on Google',

  book: {
    h2: 'Book a free Lowestoft lesson',
    intro: 'Mention how old the learner is, or their year at school, plus what they are into. A trial could be a puzzle about fair experiments, a Scratch game put together with an AI, some opening Python, or a mini program that sorts sentences.',
    success: 'Thank you. We have your Lowestoft request.'
  },

  faq: {
    h2: 'Lowestoft questions',
    intro: 'The data augmentation project, vibe coding, agents and the practical details.',
    items: [
      { q: 'What is the population of Lowestoft?', a: 'The ONS gives 71,315 for the Lowestoft built-up area at the 2021 census, and 246,058 for East Suffolk district.' },
      { q: 'Are the AI and programming lessons open to families in Lowestoft?', a: 'Yes. Everything is taught live online, so learners aged 6 to 67 across East Suffolk can take part.' },
      { q: 'Is vibe coding on offer?', a: 'Yes, for children, teenagers and adults, with learners planning first and testing what the AI writes.' },
      { q: 'At what point do AI agents come in?', a: 'Python comes first, so agents usually begin in the later teens or adulthood; anything on Copilot Studio is taught privately.' },
      { q: 'What is the data augmentation project?', a: 'Learners teach a classifier to tell two Lowestoft histories apart, add altered copies of the training sentences, and test whether that really helps or just looks as if it does.' },
      { q: 'Do you teach in person?', a: 'No, only live online.' },
      { q: 'Do you cover GCSE and A level?', a: 'Yes, computer science and maths, with the focus on understanding rather than promised grades.' },
      { q: 'What ages can learn with you?', a: 'From 6 up to 67.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first. Then USD 100 a month for a group place or USD 150 a month for one-to-one.' },
      { q: 'What happens in school holidays?', a: 'We stop for them; just let us know when they fall.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More East Anglia pages',
    html: 'In Suffolk, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-ipswich">Ipswich</a> has its own page and project, and across the county line <a class="cg-inline-link" href="/best-coding-class-in-norwich">Norwich</a> and <a class="cg-inline-link" href="/coding-classes-in-norfolk">Norfolk</a> are covered too. Our <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to every area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lowestoft and Suffolk',
  footerPlaces: [
    { href: '/coding-classes-in-suffolk', label: 'Suffolk' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lwt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-lwt .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.03; }
.cg-root.cg-lwt .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-lwt .cg-eyebrow { letter-spacing: 0.18em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-lwt .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.017em; }
.cg-root.cg-lwt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-lwt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lwt .cg-table th { letter-spacing: 0.045em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-lwt .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.6rem; }
.cg-root.cg-lwt .cg-callout { border-left-width: 3px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Suffolk (E07000244), Census 2021 TS001 usual residents 246,058. ONS 2021 BUAs (published): Lowestoft 71,315; Beccles 9,810; Bungay 5,010; Halesworth 4,925; Kessingland 4,240. postcodes.io suburban areas in East Suffolk district: Oulton Broad, Pakefield, Carlton Colville, Gunton, Kirkley. Gutenberg 51654 Gillingwater (1897 reprint): "THIS island (lately become a peninsula)". Gutenberg 53858 Longe ([1899]): "lectures read before the members of St. Margaret\'s Institute, at Lowestoft".',
    localProject: 'Sentences 8 to 60 words: Gillingwater 1,922, Longe 938. Naive Bayes, test 300 per author, 200 splits. Plain vs augmented (4 copies, ~10% deletion + swaps): 5 per author 55.1/55.7; 10: 57.6/58.4; 20: 61.8/62.6 (better 133, worse 56); 50: 68.6/68.9. Controls at 20: exact copies 62.6, swaps only 62.6 (identical to exact copies in all 200 splits), deletions only 62.6, both 62.6. Leakage (95 per author, 80/20): augment then split 99.2; split then augment 71.5. Lesson family: data augmentation, copy control, order invariance, augmentation leakage.',
    requiredMentions: [
      '71,315',
      '246,058',
      'Kessingland',
      'Pakefield',
      'Oulton Broad',
      'Carlton Colville',
      'Gillingwater',
      'Longe',
      'data augmentation',
      'Domesday'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations and TS001 usual residents via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Project Gutenberg, Gillingwater\'s History of Lowestoft (ebook 51654), from the 1897 Lowestoft edition.', url: 'https://www.gutenberg.org/ebooks/51654' },
      { claim: 'Project Gutenberg, Francis Davy Longe, Lowestoft in Olden Times (ebook 53858).', url: 'https://www.gutenberg.org/ebooks/53858' },
      { claim: 'postcodes.io places: suburban areas within East Suffolk district.', url: 'https://api.postcodes.io/places?q=Pakefield' }
    ],
    rejectedClaims: [
      'Date of Gillingwater\'s first edition: not stated on the transcription\'s title page; only the 1897 reprint is named.',
      'Fishing, herring or port history: not read beyond the quoted lines; not claimed.',
      'Easternmost-town or other superlative geography: not verified; not claimed.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
