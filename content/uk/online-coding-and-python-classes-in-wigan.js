'use strict';
// Wigan (cg- town page, UK cluster Phase 8, towns band A, row 367). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should a machine learning model
// see a category? Anchor (read 28 September 2026): Nomis Census 2021 TS063 Occupation (NM_2080_1), Wigan E08000010 and
// England, nine SOC 2020 major groups for usual residents aged 16+ in employment. Wigan 154,614: 1. Managers 16,153; 2.
// Professional 25,062; 3. Associate professional 19,252; 4. Administrative 15,038; 5. Skilled trades 18,014; 6. Caring,
// leisure and other service 16,478; 7. Sales and customer service 12,747; 8. Process, plant and machine operatives 14,327;
// 9. Elementary 17,543. England 26,405,214.
// Our run (scratchpad wig/): mean of the group numbers 1 to 9: Wigan 4.753, England 4.387; renumber the same groups
// alphabetically and the means become 5.041 and 5.047 (the gap reverses). One-hot view (shares of each group, percentage
// points Wigan minus England): managers -2.4, professional -4.1, associate professional -0.8, administrative +0.5, skilled
// trades +1.5, caring +1.4, sales +0.8, process and plant +2.3, elementary +0.9.
// Lesson family: encoding categorical data for machine learning (label encoding vs one-hot), arbitrary codes, comparing
// category shares. Screened: one-hot, label encoding, TS063 0 hits (Noord-Holland read ranks as intervals; Amsterdam-Centrum
// was about denominators).
// Place facts: Nomis TS001 Wigan 329,330; TS007A: 20 to 24 17,057 (5.2%; England 6.0%); 25 to 29 20,834 (6.3%; 6.6%); 50 to
// 54 24,984 (7.6%; 6.9%); 55 to 59 23,248 (7.1%; 6.7%); 70 to 74 18,340 (5.6%; 5.0%); 75 to 79 13,482 (4.1%; 3.6%). ONS 2021
// BUAs wholly inside: Wigan 81,580; Leigh 45,495; Golborne 25,555; Hindley 24,490; Tyldesley 16,205; Standish 12,940;
// Shevington 5,320.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WIGAN', label: 'Wigan', blurb: 'Online coding and Python classes for Wigan, with a machine learning project on how to turn job categories into numbers without inventing false differences.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-wigan',
  code: 'wig',
  accent: '#533C5C',
  accentRationale: 'Wigan: a muted slate plum (7.80:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Wigan',
    eyebrow: 'Wigan, Greater Manchester, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Wigan, England',
  title: 'Online Coding and Python Classes in Wigan | AI, Ages 6 to 67',
  description: 'Live online coding, Python, vibe coding and AI classes for Wigan, Leigh, Golborne and Hindley learners aged 6 to 67, one-to-one or in groups. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Wigan, and a machine learning project on encoding job categories without inventing false differences.',
  twitterDescription: 'Wigan online coding, Python, vibe coding and AI classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Wigan',
    description: 'Online coding, Python, vibe coding, AI and mathematics for children, teenagers and adults in Wigan borough, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Wigan',
  capsuleQ: 'Which are the best online coding and Python classes in Wigan?',
  capsule: 'Wigan borough counted 329,330 usual residents in 2021, and the ONS gives 81,580 for the Wigan built-up area and 45,495 for Leigh, with Golborne, Hindley, Tyldesley and Standish among the other towns. The borough has more people in their fifties and seventies than England\'s average, and fewer in their early twenties. Leigh, Golborne, Hindley and the rest are all in reach: learners from primary age to 67 take coding, Python, vibe coding, AI and maths with us through live video, taught by tutors in India individually or in small classes of five to ten who move at the same pace. Everything starts from sound reasoning, so AI tools extend a learner\'s skills rather than stand in for them. The opening lesson is free, and monthly fees after it are USD 100 in a group or USD 150 one-to-one.',
  lead: 'Machine learning models only understand numbers, so every category has to be turned into numbers first. It sounds trivial, and it hides one of the commonest mistakes in AI. The 2021 census sorts Wigan\'s 154,614 working residents into nine occupation groups, numbered 1 for managers to 9 for elementary occupations. Take those numbers at face value and Wigan\'s "average occupation" is 4.753, England\'s 4.387, and it looks like a finding. Number the same groups alphabetically instead and Wigan\'s average drops below England\'s. Our Wigan project uses this to teach how AI systems should really see categories, through a technique called one-hot encoding.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding or Python lesson for a learner in Wigan.',

  picks: {
    eyebrow: 'Wigan course picks',
    h2: 'How-to-think, vibe coding and Python courses',
    intro: 'Start from what suits the learner\'s age and appetite; a free live lesson opens every course, and nothing is asked in advance.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: sorting, grouping and careful logic.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then small apps produced with AI and checked by hand.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI work for teenagers, including the encoding project.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How modern AI represents data, from encodings to agents, in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wigan borough',
      h2: 'A borough with many towns',
      intro: 'Nomis age figures from the 2021 census for Wigan borough, with England for comparison.',
      body: [
        { kind: 'table', caption: 'Wigan borough and England across six age bands (TS007A)', head: ['Age band', 'In Wigan', 'Wigan %', 'England %'], rows: [
          ['20 to 24', '17,057', '5.2%', '6.0%'],
          ['25 to 29', '20,834', '6.3%', '6.6%'],
          ['50 to 54', '24,984', '7.6%', '6.9%'],
          ['55 to 59', '23,248', '7.1%', '6.7%'],
          ['70 to 74', '18,340', '5.6%', '5.0%'],
          ['75 to 79', '13,482', '4.1%', '3.6%']
        ] },
        { kind: 'p', text: 'The fifty-somethings stand out most, 0.7 points ahead of England, and the early twenties trail by 0.8. The ONS counts Golborne at 25,555, Hindley at 24,490, Tyldesley at 16,205, Standish at 12,940 and Shevington at 5,320 as built-up areas wholly inside the borough, alongside Wigan and Leigh. Children here study the English national curriculum, and our tutors leave the school holiday weeks you tell us about untouched.' },
        { kind: 'callout', h3: 'Why reasoning comes first', p: 'The thinking behind our lessons is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. County-wide options sit on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Wigan project',
      h2: 'One-hot encoding Wigan\'s jobs',
      intro: 'Turn nine occupation groups into numbers two ways, and see which one tells the truth.',
      body: [
        { kind: 'p', text: 'The learner downloads the census occupation table for Wigan and for England. It gives nine groups, from managers, directors and senior officials to elementary occupations, each with a number in its name. The quickest way to feed this to a model, called label encoding, is to use those numbers directly. The learner does exactly that and averages them: 4.753 for Wigan, 4.387 for England. Then comes the test. The numbers are only labels, so the learner renumbers the same nine groups in alphabetical order and repeats the calculation. Wigan now scores 5.041 and England 5.047, so the gap has vanished and even reversed.' },
        { kind: 'table', caption: 'Occupation groups in Wigan against England, share of working residents, TS063, our Python run, 28 September 2026', head: ['Occupation group', 'Wigan', 'England', 'Difference (points)'], rows: [
          ['Professional occupations', '16.2%', '20.3%', '-4.1'],
          ['Managers, directors and senior officials', '10.4%', '12.9%', '-2.4'],
          ['Process, plant and machine operatives', '9.3%', '6.9%', '+2.3'],
          ['Skilled trades occupations', '11.7%', '10.2%', '+1.5'],
          ['Caring, leisure and other service', '10.7%', '9.3%', '+1.4'],
          ['Average of the group numbers (label encoding)', '4.753', '4.387', 'Meaningless']
        ] },
        { kind: 'p', text: 'A result that changes when you rename the categories cannot be telling you anything about the categories. With label encoding, a model would also "learn" that elementary occupations are nine times managers, or that administrative work sits exactly halfway between two other groups, just because of the numbering. One-hot encoding avoids this. Each person becomes nine columns, all zero except a single 1 in their own group\'s column. Averaged over a place, those columns become the share of workers in each group, which is exactly the table above, and no group is bigger, smaller or between any other.' },
        { kind: 'p', text: 'Read that way, the real picture is clear and does not depend on any numbering: Wigan has 4.1 points fewer professionals than England and 2.3 points more process, plant and machine operatives. The learner finishes by feeding both encodings to a tiny model that tries to tell Wigan workers from English ones, and watches the label-encoded version draw conclusions from the order of the list. The same care applies to every category an AI sees, from postcodes to product types.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Give colours numbers, add them up, and discover why "red plus blue equals green" makes no sense.' },
          { h3: 'Ages 11 to 15', p: 'Build one-hot columns for the nine groups in Python and turn them into shares.' },
          { h3: 'Ages 15 and up', p: 'Compare label and one-hot encodings in a small model and explain the difference.' }
        ] },
        { kind: 'callout', h3: 'Census groups, our encodings', p: 'Counts come from the Census 2021 occupation table TS063 on Nomis. The encodings, averages and the comparison are our own work.' }
      ]
    },
    {
      id: 'agents', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Data preparation is where AI goes right or wrong',
      intro: 'Encodings are invisible in the final app, and decisive for what it learns.',
      body: [
        { kind: 'table', caption: 'Built-up areas inside Wigan borough, ONS 2021 published figures', head: ['Built-up area', 'People'], rows: [
          ['Wigan', '81,580'],
          ['Leigh', '45,495'],
          ['Golborne', '25,555'],
          ['Hindley', '24,490'],
          ['Tyldesley', '16,205'],
          ['Standish', '12,940']
        ] },
        { kind: 'p', text: 'Ask an AI assistant to prepare data for a model and it may well pass category numbers straight through. That is the moment a learner who understands encoding steps in. In our courses the habit starts early, with sorting and grouping puzzles in the how-to-think programme; teenagers then vibe code data projects and are expected to question every column; older teenagers and adults go on to AI agents built in Python, and agent work on Copilot Studio is arranged as private lessons. You can read about <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teens</a> and our <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents course for students in the UK</a>.' },
        { kind: 'p', text: 'The census figures belong to the Office for National Statistics and Nomis, neither of which is connected to Modern Age Coders. How we encoded and compared them is our doing, errors included.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From colour codes to machine learning',
    intro: 'A year group is a first estimate, refined by the trial lesson.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, grouping and logical steps.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps built with AI, then checked.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Data and machine learning', p: 'Encoding, models and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'AI in practice', p: 'Data preparation, models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and categories',
    h2: 'Does your model think managers are "less" than cleaners?',
    intro: 'With the wrong encoding, it might.',
    p1: 'Label encoding quietly tells a model that category 9 is bigger than category 1. Nothing crashes, and the model simply learns patterns from the order of a list.',
    p2: 'A Wigan learner who has renumbered the groups and watched the "result" reverse will always check how categories were encoded before trusting a model.',
    closer: 'Getting data preparation right is where good AI begins, and it is a strong reason for Wigan teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Leigh to Standish, all online',
    intro: 'Across the borough, a computer and a steady connection are the only kit needed.',
    cells: [
      { h3: 'Learners drive the code', p: 'Every line, prompt and test comes from the student; the tutor watches the shared screen and asks.' },
      { h3: 'The right first topic', p: 'The trial shows where a Year 4 or Year 13 should begin, with exam boards noted.' },
      { h3: 'Trial on us', p: 'A full lesson, free, with a clear recommendation afterwards.' },
      { h3: 'Five to ten per class', p: 'UK learners grouped by level.' },
      { h3: 'Two a week', p: 'Holidays are left clear.' },
      { h3: 'Same slot all year', p: 'The UK clock changes are handled by our tutors.' }
    ],
    spec: { title: 'Why online classes', p: 'Five learners across Wigan at one level and free at one time seldom live close together. Online, each finds the right group.' }
  },

  fees: {
    h2: 'Wigan fees',
    intro: 'Wigan families pay our standard rate for learners outside India.',
    first: 'A free trial lesson, then a course recommendation.',
    group: 'Around eight live group lessons monthly.',
    private: 'Around eight live one-to-one lessons monthly.',
    closer: 'Fees are billed in US dollars. Payment starts after the trial confirms a course and a regular time, and the pricing page explains how holidays, absences and format changes work.'
  },

  reviewsH2: 'Reviews on Google from Wigan and across the country',

  book: {
    h2: 'Book a free Wigan lesson',
    intro: 'A sentence about the learner\'s age or year and their interests is plenty. We could start with a sorting-and-grouping puzzle, a Scratch game made with AI, beginner Python, or encoding real census categories.',
    success: 'Thank you. We have your Wigan request.'
  },

  faq: {
    h2: 'Wigan questions',
    intro: 'Encoding, vibe coding, AI agents and the practical details.',
    items: [
      { q: 'What is the population of Wigan?', a: 'The 2021 census counted 329,330 in Wigan borough; the ONS gives 81,580 for the Wigan built-up area.' },
      { q: 'Can Wigan learners take coding and Python classes online?', a: 'Yes. Lessons run on live video for all ages from 6 to 67 across the borough.' },
      { q: 'What is one-hot encoding?', a: 'A way of turning a category into numbers for machine learning: one column per category, with a 1 in the matching column and 0 elsewhere.' },
      { q: 'Do you teach vibe coding?', a: 'Yes. Learners describe what they want to an AI, then read, test and improve what it writes.' },
      { q: 'Are AI agents part of your teaching?', a: 'Yes, for older teenagers and adults with some Python; Copilot Studio agent lessons are arranged one-to-one.' },
      { q: 'Are classes in person?', a: 'No, all teaching is online and live.' },
      { q: 'Can you help with exam courses?', a: 'Yes, GCSE and A level computer science and maths, aimed at understanding, with no grade promises.' },
      { q: 'Who can join?', a: 'Anyone aged 6 to 67.' },
      { q: 'What are the fees?', a: 'The first lesson is free. Afterwards, a group place costs USD 100 a month and one-to-one tuition USD 150 a month.' },
      { q: 'Do lessons take a break for school holidays?', a: 'Yes; send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Other pages in the North West',
    html: 'Nearby, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-st-helens">St Helens</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-warrington">Warrington</a> have their own pages. The county is on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>, the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>, and every page is reachable from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wigan and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wig .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.7rem); }
.cg-root.cg-wig .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wig .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-wig .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wig .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-wig .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wig .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wig .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wig .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-wig .cg-callout { border-left-width: 6px; border-radius: 0 11px 11px 0; }
`,

  dossier: {
    curriculumAuthority: 'Wigan (E08000010). Nomis Census 2021 TS001 329,330. TS007A: 20 to 24 17,057 (5.2%, England 6.0%); 25 to 29 20,834 (6.3%, 6.6%); 50 to 54 24,984 (7.6%, 6.9%); 55 to 59 23,248 (7.1%, 6.7%); 70 to 74 18,340 (5.6%, 5.0%); 75 to 79 13,482 (4.1%, 3.6%). ONS 2021 BUAs: Wigan 81,580; Leigh 45,495; Golborne 25,555; Hindley 24,490; Tyldesley 16,205; Standish 12,940; Shevington 5,320. TS063 Occupation (NM_2080_1): Wigan 154,614 in employment by nine SOC 2020 major groups; England 26,405,214.',
    localProject: 'Label encoding mean of group numbers: Wigan 4.753, England 4.387; alphabetical renumbering 5.041 vs 5.047 (reverses). One-hot shares differences (pts): professional -4.1, managers -2.4, associate -0.8, admin +0.5, skilled trades +1.5, caring +1.4, sales +0.8, process +2.3, elementary +0.9. Lesson family: label vs one-hot encoding, arbitrary codes, category shares.',
    requiredMentions: [
      '329,330',
      '81,580',
      'Golborne',
      'Hindley',
      'Tyldesley',
      'Standish',
      'Shevington',
      'one-hot',
      'label encoding',
      '154,614'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS063 Occupation, Wigan and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Nomis Census 2021 TS001 and TS007A, Wigan and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' }
    ],
    rejectedClaims: [
      'Whether SOC major groups follow a skill order: not needed; the page treats the numbers as labels only.',
      'Pier and literary history: not read from a source; not claimed.',
      'The tiny classifier is described as a learner exercise; no accuracy figures are claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
