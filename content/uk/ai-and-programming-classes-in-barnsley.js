'use strict';
// Barnsley (cg- town page, UK cluster Phase 8, towns band A, row 368). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how surprised is an AI model by data
// from a different place? Anchor (read 28 September 2026): Nomis Census 2021 TS045 Car or van availability (NM_2063_1),
// households: Barnsley 108,054 (no car 24,580; one 44,800; two 29,576; three or more 9,098); England 23,436,085 (5,516,098;
// 9,674,645; 6,106,970; 2,138,372); Camden 92,759 (59,037; 27,983; 4,809; 930).
// Our run (scratchpad bns/, log base 2): shares Barnsley 22.7/41.5/27.4/8.4%, England 23.5/41.3/26.1/9.1%, Camden
// 63.6/30.2/5.2/1.0%. Entropy Barnsley 1.8248 bits per household. Cross-entropy of Barnsley under an England model
// 1.8259; KL(Barnsley||England) 0.00107 bits (about 116 bits across all 108,054 households); KL(England||Barnsley)
// 0.00108. Under a Camden model: cross-entropy 2.5929, KL 0.7681, worse than a know-nothing uniform model (2.0 bits).
// KL(Camden||England) 0.6242 vs KL(England||Camden) 0.7467 (asymmetric). A model that never saw "three or more" gives
// infinite cross-entropy; adding 0.001 to every share and renormalising gives 2.2495. Mixing England and Barnsley shares
// (fine-tuning style): weight 0 -> 1.82587, 0.5 -> 1.82507, 1 -> 1.8248.
// Lesson family: cross-entropy and KL divergence as model surprise, distribution shift, zero-probability smoothing,
// fine-tuning by mixing. Screened: KL divergence, cross-entropy, distribution shift, fine-tun, TS045 0 hits (entropy as a
// diversity index is used elsewhere; Dewsbury used perplexity for a text model; Camden's own page is not about cars).
// Place facts: TS001 Barnsley 244,572; TS007A: 15 to 19 12,256 (5.0%; England 5.7%); 20 to 24 12,450 (5.1%; 6.0%); 40 to 44
// 13,825 (5.7%; 6.3%); 50 to 54 18,720 (7.7%; 6.9%); 55 to 59 17,962 (7.3%; 6.7%); 60 to 64 15,603 (6.4%; 5.8%). ONS 2021
// BUAs: Barnsley 71,405; Wombwell 16,765; Hoyland 15,535; Cudworth and Shafton 12,470; Royston 10,755; Thurnscoe 9,135;
// Worsbrough 8,835; Penistone 8,540.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BARNSLEY', label: 'Barnsley', blurb: 'AI and programming classes for Barnsley, with a project that measures how surprised an AI model is by households from a different place.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-barnsley',
  code: 'bns',
  accent: '#3A2A4C',
  accentRationale: 'Barnsley: a deep coal-seam violet (10.47:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Barnsley',
    eyebrow: 'Barnsley, South Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'South Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'South Yorkshire', href: '/coding-classes-in-south-yorkshire' },
    { label: 'Yorkshire', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Barnsley, England',
  title: 'AI and Programming Classes in Barnsley | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Barnsley, Penistone, Royston and Cudworth learners aged 6 to 67, solo or in groups. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Barnsley, and a Python project measuring how surprised an AI model is by households from somewhere else.',
  twitterDescription: 'Barnsley AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Barnsley',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Barnsley borough, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Barnsley',
  capsuleQ: 'Which are the best AI and programming classes in Barnsley?',
  capsule: 'Barnsley borough had 244,572 usual residents at the 2021 census, and the ONS gives 71,405 for the Barnsley built-up area itself, with Cudworth and Shafton, Royston, Thurnscoe and Penistone among the smaller towns. Compared with England, the borough has more people in their fifties and early sixties and fewer aged 15 to 24. Families in Penistone, Royston, Cudworth or the town itself can sign any learner from 6 to 67 up for live online lessons in AI, programming, Python, vibe coding and maths, taught by our India-based tutors privately or with a group of five to ten learners at the same level. We train reasoning before tools, so a learner stays the one in charge of the AI. The trial lesson is free, and afterwards it costs USD 100 a month in a group or USD 150 a month solo.',
  lead: 'Every AI model is trained on data from somewhere, and it is scored by how surprised it is when it meets new data. That surprise has a precise measure, cross-entropy, and it is exactly what the companies behind chatbots try to drive down. Our Barnsley project measures it with something everyday: how many cars or vans each household has. The 2021 census gives the answer for all 108,054 Barnsley households, for England, and for Camden in central London. A model trained on England turns out to be almost perfectly prepared for Barnsley. A model trained on Camden does worse than a model that knows nothing at all, which is a vivid lesson about training data.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming lesson for a Barnsley learner, please.',

  picks: {
    eyebrow: 'Barnsley course picks',
    h2: 'How-to-think, vibe coding and AI courses for Barnsley',
    intro: 'Let age and enthusiasm steer the choice. Each course begins with a live lesson at no charge, and booking asks for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: chance, patterns and step-by-step logic.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps made by chatting to AI and checking the results.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, among them the model-surprise project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models are trained, measured and used inside AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Barnsley borough',
      h2: 'More people in their fifties, fewer in their early twenties',
      intro: 'Six age groups for Barnsley from the 2021 census on Nomis, each with England\'s share beside it.',
      body: [
        { kind: 'table', caption: 'Barnsley borough compared with England, six age groups (TS007A)', head: ['Age group', 'Barnsley residents', 'Barnsley %', 'England %'], rows: [
          ['15 to 19', '12,256', '5.0%', '5.7%'],
          ['20 to 24', '12,450', '5.1%', '6.0%'],
          ['40 to 44', '13,825', '5.7%', '6.3%'],
          ['50 to 54', '18,720', '7.7%', '6.9%'],
          ['55 to 59', '17,962', '7.3%', '6.7%'],
          ['60 to 64', '15,603', '6.4%', '5.8%']
        ] },
        { kind: 'p', text: 'The early fifties lead England by 0.8 points and the early twenties trail by 0.9. Beyond the main town, the ONS counts Wombwell, Hoyland, Cudworth and Shafton, Royston, Thurnscoe, Worsbrough and Penistone among the borough\'s built-up areas. Pupils learn under the English national curriculum, and our lesson calendar steps around the half-terms you let us know about.' },
        { kind: 'callout', h3: 'Thinking before tools', p: 'Our approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. For the county, visit <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Barnsley project',
      h2: 'How surprised is a model by Barnsley?',
      intro: 'Train three simple models on three places and score them on Barnsley\'s households.',
      body: [
        { kind: 'p', text: 'The learner downloads the census table on car or van availability. Of Barnsley\'s 108,054 households, 22.7 percent have no car or van, 41.5 percent one, 27.4 percent two and 8.4 percent three or more. The simplest possible model of a household is just a set of probabilities for those four answers, and each place gives a different model: England\'s shares, Camden\'s shares, or a know-nothing model that says a quarter each. Cross-entropy measures how many bits, on average, a model needs to describe each Barnsley household. The lowest possible figure is Barnsley\'s own entropy, 1.8248 bits, reached only by a model that knows Barnsley\'s shares exactly.' },
        { kind: 'table', caption: 'Cross-entropy of Barnsley households under different models, TS045, our Python run, 28 September 2026', head: ['Model trained on', 'Bits per Barnsley household', 'Extra bits (KL divergence)'], rows: [
          ['Barnsley itself', '1.8248', '0'],
          ['England', '1.8259', '0.0011'],
          ['Know-nothing (a quarter each)', '2.0000', '0.1752'],
          ['Camden', '2.5929', '0.7681'],
          ['England, but never saw "three or more"', 'Infinite', 'Infinite']
        ] },
        { kind: 'p', text: 'The England model costs only 0.0011 extra bits per household, about 116 bits across the whole borough, because Barnsley\'s car ownership is very close to the national pattern. Camden, where 63.6 percent of households have no car or van, is a different world. A model trained there is so confidently wrong about Barnsley that it does worse than the model that knows nothing, 2.59 bits against 2.00. The extra cost is called the KL divergence, and it is not symmetrical: judging England by Camden\'s model costs 0.747 extra bits, but judging Camden by England\'s costs 0.624.' },
        { kind: 'p', text: 'Two more lessons come from the table. A model that has never seen a household with three or more vehicles assigns that answer zero probability, and one such household makes its cross-entropy infinite; adding a tiny amount, 0.001, to every share fixes the crash but still costs 2.25 bits. And gradually mixing Barnsley\'s own shares into the England model, the simplest version of what AI builders call fine-tuning, lowers the score step by step from 1.8259 towards 1.8248. Each of these ideas applies directly to the language models behind chatbots.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess the next card from a bag, then see how guessing gets worse when the bag changes.' },
          { h3: 'Ages 11 to 15', p: 'Turn census counts into probabilities in Python and score each model on Barnsley.' },
          { h3: 'Ages 15 and up', p: 'Compute cross-entropy and KL divergence, handle zeros and try mixing models.' }
        ] },
        { kind: 'callout', h3: 'Census households, our models', p: 'Household counts come from the Census 2021 table TS045 on Nomis for Barnsley, England and Camden. The models and every bit count are our own calculation.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Training data decides what an AI expects',
      intro: 'Why the Camden model matters for anyone using or building AI.',
      body: [
        { kind: 'table', caption: 'Car or van availability, share of households, Census 2021 TS045', head: ['Households with', 'Barnsley', 'England', 'Camden'], rows: [
          ['No car or van', '22.7%', '23.5%', '63.6%'],
          ['One', '41.5%', '41.3%', '30.2%'],
          ['Two', '27.4%', '26.1%', '5.2%'],
          ['Three or more', '8.4%', '9.1%', '1.0%']
        ] },
        { kind: 'p', text: 'An AI system trained mostly on one kind of place, language or group will be confidently wrong elsewhere, just as the Camden model was about Barnsley. Knowing that shapes how learners vibe code, since the AI assistant writing their code learned from someone else\'s data, and how they later build AI agents that act on real information. Our younger learners practise probability and prediction in the how-to-think programme, teenagers vibe code and test projects like this one, and older teenagers and adults build agents in Python; agent-building on Copilot Studio is taught privately. Read about <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teenagers</a> and the <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for UK students</a>.' },
        { kind: 'p', text: 'The Office for National Statistics and Nomis are unconnected with Modern Age Coders. The household counts are theirs; the models and any mistakes in them are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From guessing games to model training',
    intro: 'Year group is the first clue; the free lesson settles the start.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Chance, patterns and logic through games.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Probability and AI', p: 'Probability, logarithms and machine learning beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'How models learn', p: 'Training, evaluation and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and training data',
    h2: 'Was your AI trained on somewhere else?',
    intro: 'Its confidence says nothing about whether it fits your world.',
    p1: 'The Camden model was sure most households have no car, and it was badly surprised by Barnsley. Every AI model carries the assumptions of the data it learned from.',
    p2: 'A Barnsley learner who has measured that surprise in bits understands why the source of training data matters, and how fine-tuning adjusts a model to new data.',
    closer: 'Understanding what training data does to a model is a powerful reason for Barnsley teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Penistone to Thurnscoe, online',
    intro: 'Wherever you are in the borough, a computer and a reliable connection are all it takes.',
    cells: [
      { h3: 'Student-led coding', p: 'The learner writes, prompts and tests; the tutor follows the shared screen and poses questions.' },
      { h3: 'Start at the right level', p: 'The free lesson decides the first topic for anyone from Year 4 to Year 13, with exam boards noted.' },
      { h3: 'Trial at no cost', p: 'A full first lesson free, ending in a course suggestion.' },
      { h3: 'Level-based groups', p: 'Five to ten UK learners at the same stage.' },
      { h3: 'Twice weekly', p: 'School holidays stay free.' },
      { h3: 'Fixed UK time', p: 'Clock changes are handled on our side.' }
    ],
    spec: { title: 'Why the classes meet online', p: 'Five Barnsley learners at the same level and free at one hour rarely live close together. Online, each gets the right class.' }
  },

  fees: {
    h2: 'Barnsley fees',
    intro: 'Barnsley pays the international rate we set for all countries except India.',
    first: 'The trial lesson is free and ends with a recommendation.',
    group: 'About eight live small-group lessons each month.',
    private: 'About eight live individual lessons each month.',
    closer: 'Fees are payable in US dollars, not sterling. We start billing only once the trial has confirmed a course and a weekly time, and the pricing page explains holidays, missed lessons and switching formats.'
  },

  reviewsH2: 'Google reviews from South Yorkshire and beyond',

  book: {
    h2: 'Book a free Barnsley lesson',
    intro: 'Let us know the learner\'s age or school year and what they like doing. The trial could be a guess-the-next-card game, a Scratch project made with AI, starter Python, or scoring a tiny model on real census data.',
    success: 'Thank you. Your Barnsley request has arrived.'
  },

  faq: {
    h2: 'Barnsley questions',
    intro: 'Model surprise, vibe coding, AI agents and practical points.',
    items: [
      { q: 'What is the population of Barnsley?', a: 'The 2021 census counted 244,572 usual residents in Barnsley borough; the ONS gives 71,405 for the Barnsley built-up area.' },
      { q: 'Are online AI and programming classes available in Barnsley?', a: 'Yes. All lessons are on live video, for learners aged 6 to 67 anywhere in the borough.' },
      { q: 'What is cross-entropy?', a: 'A measure of how surprised a model is by real data, in bits; lower is better, and training an AI model means pushing it down.' },
      { q: 'Do you teach vibe coding?', a: 'Yes. Learners describe what they want to an AI, then test and improve the code it writes.' },
      { q: 'Can teenagers learn to build AI agents?', a: 'Yes, once they know some Python; Copilot Studio agent lessons are one-to-one.' },
      { q: 'Is teaching done in person?', a: 'No. We only teach online, live.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in computer science and maths, for understanding rather than any promised grade.' },
      { q: 'What ages can join?', a: 'From 6 years old to 67.' },
      { q: 'How much are lessons?', a: 'The trial is free. Groups then cost USD 100 a month and individual lessons USD 150 a month.' },
      { q: 'Are lessons held in school holidays?', a: 'No; tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other South Yorkshire pages',
    html: 'Close by, <a class="cg-inline-link" href="/best-coding-class-in-sheffield">Sheffield</a>, <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a> and <a class="cg-inline-link" href="/best-coding-class-in-wakefield">Wakefield</a> have their own pages. The county is on <a class="cg-inline-link" href="/coding-classes-in-south-yorkshire">South Yorkshire</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> reaches every page.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Barnsley and South Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-south-yorkshire', label: 'South Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bns .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-bns .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-bns .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-bns .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bns .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-bns .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bns .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bns .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-bns .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-bns .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Barnsley (E08000016). Nomis Census 2021 TS001 244,572. TS007A: 15 to 19 12,256 (5.0%, England 5.7%); 20 to 24 12,450 (5.1%, 6.0%); 40 to 44 13,825 (5.7%, 6.3%); 50 to 54 18,720 (7.7%, 6.9%); 55 to 59 17,962 (7.3%, 6.7%); 60 to 64 15,603 (6.4%, 5.8%). ONS 2021 BUAs: Barnsley 71,405; Wombwell 16,765; Hoyland 15,535; Cudworth and Shafton 12,470; Royston 10,755; Thurnscoe 9,135; Worsbrough 8,835; Penistone 8,540. TS045 (NM_2063_1) households: Barnsley 108,054 (24,580 / 44,800 / 29,576 / 9,098); England 23,436,085; Camden 92,759 (59,037 / 27,983 / 4,809 / 930).',
    localProject: 'Bits per Barnsley household: own entropy 1.8248; England model 1.8259 (KL 0.00107, about 116 bits over all households); uniform 2.0000; Camden model 2.5929 (KL 0.7681). KL(Camden||England) 0.6242 vs KL(England||Camden) 0.7467. Model without "three or more": infinite; eps 0.001 smoothing 2.2495. Mixing England->Barnsley: 1.82587 -> 1.8248. Lesson family: cross-entropy, KL divergence, distribution shift, zero-probability smoothing, fine-tuning by mixing.',
    requiredMentions: [
      '244,572',
      '71,405',
      'Penistone',
      'Royston',
      'Thurnscoe',
      'Worsbrough',
      '108,054',
      'cross-entropy',
      'KL divergence'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS045 Car or van availability, Barnsley, England and Camden.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Nomis Census 2021 TS001 and TS007A, Barnsley and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'Reasons for car ownership differences between places: not analysed; not claimed.',
      'Mining and industrial history: not read from a source; not claimed.',
      'Loss values of any real AI product: not claimed; only our toy models are measured.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
