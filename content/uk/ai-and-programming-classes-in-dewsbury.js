'use strict';
// Dewsbury (cg- town page, UK cluster Phase 8, towns band A, row 356). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: what is the smallest possible
// language model, and what does it teach about ChatGPT-style AI? Anchor (read raw 28 September 2026): Project Gutenberg
// 1827 and 1700, Elizabeth Cleghorn Gaskell, "The Life of Charlotte Bronte", Volumes 1 and 2. Volume 1: "Mr. Bronte remained
// for five years at Hartshead, in the parish of Dewsbury"; "Miss W--- removed her school from the fine, open, breezy
// situation of Roe Head, to Dewsbury Moor, only two or three miles distant"; "In the village of Heckmondwike, at one end
// of which Roe Head is situated".
// Our run (scratchpad dew/bigram.py, words lowercased, a sentence-start marker after . ! ?): first version treats "Mr." as a
// sentence end, so "mr" is followed by a new sentence 208 times out of 208; with Mr/Mrs/Dr/St/Messrs handled, "mr" is
// followed by "bronte" 55 times. Volume 1: 98,792 tokens, 9,978 word types, 54,305 distinct word pairs. "roe" -> "head"
// 24 of 24; "dewsbury" -> "moor" 9 of 11. Greedy generation from "she": "she was a little more than i have been a little
// more than i have". Volume 2 as test: 89,743 word pairs, 40,656 (45.3%) never seen in Volume 1. Perplexity on Volume 2:
// word-frequency (unigram, add-one) 824.6; bigram add-one 3,819.6; add-0.01 1,202.8; half-and-half blend of bigram and
// unigram 483.0 (blend weight tried on Volume 2 itself; noted as a shortcut).
// Lesson family: n-gram (bigram) language model, next-word prediction, greedy decoding loops, unseen pairs and smoothing,
// perplexity, held-out evaluation, abbreviation trap. Screened: bigram, next word, perplexity, Laplace, predictive text
// 0 hits (Veenendaal owns tokenization; Wolverhampton owns autocomplete prefixes; Worthing counts speaker turns).
// Place facts: ONS 2021 BUAs in Kirklees (published): Dewsbury 63,720; Batley 44,500; Mirfield 19,610; Liversedge 17,525;
// Heckmondwike 13,370; Cleckheaton 11,605 (Kirklees total 433,214 and its age table belong to the Huddersfield page; not
// repeated as a table here).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'DEWSBURY', label: 'Dewsbury', blurb: 'AI and programming classes for Dewsbury, with a project that builds a tiny next-word language model from Gaskell\'s Life of Charlotte Bronte.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-dewsbury',
  code: 'dew',
  accent: '#4C1B2F',
  accentRationale: 'Dewsbury: a deep blanket-wool maroon (11.24:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Dewsbury',
    eyebrow: 'Dewsbury, Kirklees, West Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'West Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'West Yorkshire', href: '/coding-classes-in-west-yorkshire' },
    { label: 'Yorkshire', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Dewsbury, England',
  title: 'AI and Programming Classes in Dewsbury | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Dewsbury, Batley, Mirfield and Heckmondwike learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Dewsbury, and a Python project that builds a tiny language model from Gaskell\'s Life of Charlotte Bronte.',
  twitterDescription: 'Dewsbury AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Dewsbury',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Dewsbury and across Kirklees, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Dewsbury',
  capsuleQ: 'Which are the best AI and programming classes in Dewsbury?',
  capsule: 'The ONS gives 63,720 people for the Dewsbury built-up area at the 2021 census, making it the largest town in Kirklees after Huddersfield, with Batley at 44,500 and Mirfield at 19,610 close by. Learners aged 6 to 67 in Dewsbury, Batley, Mirfield or Heckmondwike can take AI, programming, Python, vibe coding and maths live online with tutors based in India, one-to-one or in a same-level class of five to ten. We start with how to think, so that learners who build with AI tools also understand them. The free first lesson ends with a course suggestion. The Dewsbury project builds a language model, the idea at the heart of chatbots, from a book about the Brontes. Once the trial is done, a class place is USD 100 per month and solo lessons USD 150 per month.',
  lead: 'Before Patrick Bronte moved to Haworth, Elizabeth Gaskell tells us, he spent five years "at Hartshead, in the parish of Dewsbury", and his daughter Charlotte later taught at a school that moved from Roe Head "to Dewsbury Moor". Gaskell\'s Life of Charlotte Bronte is free on Project Gutenberg, and it makes a fine training set for one of the simplest language models there is. A bigram model reads the book and counts which word follows which, then predicts the next word from those counts. The chatbots learners use every day are vastly bigger, but they are built around the same question: given the words so far, what comes next? Building the tiny version shows what that question can and cannot answer.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Dewsbury learner.',

  picks: {
    eyebrow: 'Dewsbury course picks',
    h2: 'Thinking, vibe coding and AI courses for Dewsbury',
    intro: 'Pick by age and interest. Each course opens with a free live lesson, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: logic, patterns and step-by-step reasoning.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games and word games, then simple apps built by talking to AI.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, including the tiny language model.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How large language models, retrieval and AI agents really work.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Dewsbury and its neighbours',
      h2: 'Dewsbury and nearby Kirklees towns',
      intro: 'ONS built-up area populations from the 2021 census for Dewsbury and nearby Kirklees towns.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Kirklees near Dewsbury, ONS 2021 published populations', head: ['Built-up area', 'People (2021)'], rows: [
          ['Dewsbury', '63,720'],
          ['Batley', '44,500'],
          ['Mirfield', '19,610'],
          ['Liversedge', '17,525'],
          ['Heckmondwike', '13,370'],
          ['Cleckheaton', '11,605']
        ] },
        { kind: 'p', text: 'The ONS publishes each of these towns separately, and we quote them that way rather than adding them into a total the census never printed. Our Huddersfield page covers the borough-wide age figures for Kirklees. Kirklees schools use the English national curriculum, so tell us the half-term weeks and we will keep them lesson-free.' },
        { kind: 'callout', h3: 'County, region and our approach', p: 'The county is on <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a> and the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why every learner starts by thinking rather than prompting is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Dewsbury project',
      h2: 'A language model built from the Life of Charlotte Bronte',
      intro: 'Count word pairs in one volume, predict and generate text, then test on the other volume.',
      body: [
        { kind: 'p', text: 'The learner downloads both volumes, lowercases the words and marks where each sentence starts. The first run gives a strange result: after the word "mr", the model predicts a new sentence every single time, 208 out of 208. The cause is the full stop in "Mr.", which the program read as the end of a sentence. Once titles like Mr, Mrs and Dr are handled, "mr" is followed by "bronte" 55 times, the most common pair. Volume 1 then yields 98,792 tokens and 54,305 different word pairs. Some predictions are perfect: "roe" is followed by "head" all 24 times, and "dewsbury" by "moor" 9 times out of 11.' },
        { kind: 'table', caption: 'What the bigram model learned from Volume 1, and how it did on Volume 2, our Python run, 28 September 2026', head: ['Test', 'Result'], rows: [
          ['Word after "roe"', '"head", 24 times out of 24'],
          ['Word after "dewsbury"', '"moor", 9 times out of 11'],
          ['Greedy text from "she"', '"she was a little more than i have been a little more than i have"'],
          ['Word pairs in Volume 2 never seen in Volume 1', '40,656 of 89,743 (45.3%)'],
          ['Perplexity on Volume 2, word frequency only', '824.6'],
          ['Perplexity on Volume 2, bigram with add-one smoothing', '3,819.6'],
          ['Perplexity on Volume 2, half bigram and half word frequency', '483.0']
        ] },
        { kind: 'p', text: 'Asking the model to write shows its first weakness. Always choosing the single most likely next word, known as greedy decoding, traps it in a loop: "she was a little more than i have been a little more than i have". Chatbots usually add some controlled randomness when choosing words, partly for this reason. The second weakness appears on the held-out volume. Nearly half of the word pairs in Volume 2, 45.3%, never occur in Volume 1, so a raw bigram model would give those sentences a probability of zero, which is plainly wrong. The standard fix, pretending every pair was seen once more than it was, turns out to be too crude here.' },
        { kind: 'p', text: 'Perplexity measures how surprised a model is by new text, roughly how many words it is choosing between at each step, so lower is better. A model that ignores context and just uses word frequencies scores 824.6 on Volume 2. The bigram model with add-one smoothing does far worse, 3,819.6, because spreading probability over nearly 13,000 possible words drowns out what it learned. Mixing the two, half bigram and half word frequency, brings it down to 483.0, better than either alone. The mixing weight was tried on Volume 2 itself, a shortcut a careful learner would replace with a separate test slice.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play "what word comes next?" with a favourite story and tally the guesses.' },
          { h3: 'Ages 11 to 15', p: 'Count word pairs in Python and generate sentences from the counts.' },
          { h3: 'Ages 15 and up', p: 'Test on held-out text, measure perplexity and compare smoothing methods.' }
        ] },
        { kind: 'callout', h3: 'Gaskell\'s words, our model', p: 'The text is the Project Gutenberg edition of The Life of Charlotte Bronte by Elizabeth Cleghorn Gaskell. The counting, the model and every figure in the tables are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'From bigrams to chatbots',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'The tiny model and the big ones share the same basic question.',
      body: [
        { kind: 'table', caption: 'The Dewsbury model next to modern AI', head: ['Tiny bigram model', 'Modern AI tools'], rows: [
          ['Looks back one word', 'Look back over thousands of words of context'],
          ['Counts pairs in one book', 'Trained on vast amounts of text'],
          ['Loops when always choosing the top word', 'Use sampling to vary their output'],
          ['Unsure about unseen pairs', 'Can sound sure while being wrong'],
          ['Judged on a held-out volume', 'Should be judged on tasks you can check']
        ] },
        { kind: 'p', text: 'Knowing that a chatbot predicts likely text, rather than looking up facts, changes how a learner uses it. In our vibe coding lessons, where learners describe a program and let AI write it, that knowledge makes them read and test the code instead of trusting it. AI agents come next for older teenagers and adults: software in which a language model picks tools, runs them and reacts to what comes back. Python comes first, and Copilot Studio agent building is taught only one-to-one. More on both is on our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course page for UK students</a> and in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with Project Gutenberg or the Office for National Statistics. The book and the figures are theirs; the model and any mistakes in it are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From word games to language models',
    intro: 'The school year is only a first guess; the free lesson settles the level.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Logic, patterns and clear step-by-step reasoning.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and word projects, then small apps built with AI and checked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and AI', p: 'Text, data and language models beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Language models and agents', p: 'How LLMs, retrieval and AI agents work, built in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and language',
    h2: 'Does a chatbot know what it is saying?',
    intro: 'It predicts likely words; knowing that is the first skill.',
    p1: 'The Dewsbury model can finish "roe" with "head" every time and still write nonsense in loops. Large chatbots are far better at sounding right, which makes their mistakes harder to spot.',
    p2: 'A learner who has built next-word prediction from scratch checks AI output the way they checked their own model: against text and facts they can verify.',
    closer: 'A Dewsbury teenager who knows how a language model guesses words will use every AI tool more wisely, and that alone makes coding worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Batley to Mirfield, all online',
    intro: 'A computer and a good connection are all any Kirklees home needs.',
    cells: [
      { h3: 'The student at the keys', p: 'Learners type, prompt and test every program; the tutor follows over screen share and asks the next question.' },
      { h3: 'The trial finds the start', p: 'A Year 3 or a Year 12 begins where the free lesson places them, with their exam board in mind.' },
      { h3: 'A free start', p: 'Your opening lesson is on us and finishes with a suggested next step.' },
      { h3: 'Same-level groups', p: 'Five to ten UK learners at one stage per class.' },
      { h3: 'Two sessions a week', p: 'Paused in the school holidays.' },
      { h3: 'Your hour, all year', p: 'Tutors shift with the UK clocks, so the lesson time holds.' }
    ],
    spec: { title: 'Why classes meet online', p: 'Five Kirklees learners at one level who are free at one time seldom live near each other. Online, each finds a class that fits.' }
  },

  fees: {
    h2: 'Dewsbury fees',
    intro: 'Dewsbury pays the international rate we use in every country other than India.',
    first: 'One whole lesson for free, then a course recommendation.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live one-to-one lessons a month.',
    closer: 'Fees are in US dollars, not pounds. Invoices wait until the free lesson has agreed a course and a slot in the week. For breaks, absences and changing format, see the pricing page.'
  },

  reviewsH2: 'What West Yorkshire and UK families say on Google',

  book: {
    h2: 'Book a free Dewsbury lesson',
    intro: 'Send the learner\'s age or school year together with an interest or two. Trial lesson ideas: guess-the-next-word games, a Scratch game made with AI help, a first Python script, or reasoning puzzles.',
    success: 'Thank you. We have your Dewsbury request.'
  },

  faq: {
    h2: 'Dewsbury questions',
    intro: 'The language model project, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Dewsbury?', a: 'The ONS gives 63,720 for the Dewsbury built-up area at the 2021 census.' },
      { q: 'Are your AI and programming classes available to Dewsbury families?', a: 'Yes. They run live on video, so anyone aged 6 to 67 from Thornhill to Ravensthorpe can join.' },
      { q: 'Do you teach vibe coding in Dewsbury?', a: 'Yes, online for kids, teenagers and adults, always with learners planning first and testing the code the AI writes.' },
      { q: 'Can teenagers learn about AI agents?', a: 'Yes, once they have some Python; agents on Copilot Studio are taught one-to-one only.' },
      { q: 'What is the language model project?', a: 'Learners count word pairs in Gaskell\'s Life of Charlotte Bronte, predict and generate text, and measure how well it handles unseen text.' },
      { q: 'Are lessons in person?', a: 'No. We teach live online only.' },
      { q: 'Is there GCSE and A level support?', a: 'For computer science and maths, yes; we aim for understanding and do not promise grades.' },
      { q: 'What ages do you teach?', a: 'Learners from 6 to 67.' },
      { q: 'How much are lessons?', a: 'You pay nothing for the first lesson. Groups then cost USD 100 monthly, and one-to-one teaching USD 150 monthly.' },
      { q: 'Do you break for school holidays?', a: 'Yes; tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages in West Yorkshire',
    html: 'Next door, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-huddersfield">Huddersfield</a> has a river-sensor project, and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a>, <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> and <a class="cg-inline-link" href="/best-coding-class-in-bradford">Bradford</a> have their own pages. See <a class="cg-inline-link" href="/coding-classes-in-west-yorkshire">West Yorkshire</a> for the county, <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a> for the region, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> for every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Dewsbury and West Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-west-yorkshire', label: 'West Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-dew .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-dew .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-dew .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-dew .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dew .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-dew .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-dew .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dew .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-dew .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-dew .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Kirklees (E08000034). ONS 2021 BUAs (published): Dewsbury 63,720; Batley 44,500; Mirfield 19,610; Liversedge 17,525; Heckmondwike 13,370; Cleckheaton 11,605; Huddersfield 141,675 (largest). Project Gutenberg 1827 and 1700, Gaskell, The Life of Charlotte Bronte: "Mr. Bronte remained for five years at Hartshead, in the parish of Dewsbury"; "Roe Head, to Dewsbury Moor"; "In the village of Heckmondwike, at one end of which Roe Head is situated".',
    localProject: 'Bigram model, Volume 1 train (98,792 tokens, 9,978 types, 54,305 pairs), Volume 2 test (89,743 pairs, 40,656 = 45.3% unseen). "mr" -> sentence end 208/208 before abbreviation fix, -> "bronte" 55 after. roe->head 24/24; dewsbury->moor 9/11. Greedy loop "she was a little more than i have been a little more than i have". Perplexity: unigram add-one 824.6; bigram add-one 3,819.6; add-0.01 1,202.8; 0.5 blend 483.0 (weight tried on test). Lesson family: n-gram language model, next-word prediction, greedy decoding, smoothing, perplexity, held-out evaluation.',
    requiredMentions: [
      '63,720',
      '19,610',
      'Heckmondwike',
      'Liversedge',
      'Cleckheaton',
      'Roe Head',
      'Dewsbury Moor',
      'bigram',
      'perplexity',
      'Hartshead'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Elizabeth Cleghorn Gaskell, The Life of Charlotte Bronte, Volume 1 (ebook 1827).', url: 'https://www.gutenberg.org/ebooks/1827' },
      { claim: 'Project Gutenberg, Elizabeth Cleghorn Gaskell, The Life of Charlotte Bronte, Volume 2 (ebook 1700).', url: 'https://www.gutenberg.org/ebooks/1700' }
    ],
    rejectedClaims: [
      'Kirklees total and age table: owned by the Huddersfield page; not repeated.',
      'Woollen and shoddy trade history: not read from a source; not claimed.',
      'Sum of the six towns: not published by the ONS; deliberately not added.',
      'How modern chatbots are trained in detail: described only in general terms.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
