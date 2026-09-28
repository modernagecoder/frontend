'use strict';
// Grimsby (cg- town page, UK cluster Phase 8, towns band A, row 364). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can AI training data be made up from
// published tables? Anchors (read 28 September 2026): Nomis Census 2021 TS061 Method used to travel to work (NM_2078_1) and
// TS058 Distance travelled to work (NM_2075_1), North East Lincolnshire E06000012. TS061 total 68,850: from home 9,605;
// underground/metro 19; train 157; bus 2,272; taxi 567; motorcycle 359; driving 41,180; passenger 4,040; bicycle 3,423; on
// foot 6,360; other 868. TS058 total 68,849: under 2km 11,295; 2-5 17,800; 5-10 8,712; 10-20 5,179; 20-30 1,997; 30-40
// 1,220; 40-60 742; 60km and over 1,233; from home 9,605; offshore/no fixed place/outside UK 11,066.
// Our run (scratchpad gri/, random.Random(20260928)): 68,850 synthetic workers, mode and distance drawn independently from
// the two tables: 16,446 (23.9%) contradict themselves on home working (analytic expectation 16,530); 124 walk 60km and
// over; 76 cycle 60km and over; 460 walk 20km or more; 6,848 drive under 2km (plausible, kept). With a rule forcing home
// working to match in both fields: still 132 walk 60km and over and 547 walk 20km or more. Totals differ by one between
// the tables (68,850 vs 68,849).
// Lesson family: synthetic data generation from marginal tables, independence assumption, consistency rules, realism
// checks. Screened: synthetic data, joint distribution, data augmentation, weighted sampling 0 hits.
// Place facts: TS001 North East Lincolnshire 156,966 (county.py); TS007A: 20 to 24 7,968 (5.1%; England 6.0%); 40 to 44 8,416
// (5.4%; 6.3%); 55 to 59 11,803 (7.5%; 6.7%); 60 to 64 10,218 (6.5%; 5.8%); 70 to 74 8,856 (5.6%; 5.0%); 80 to 84 4,660
// (3.0%; 2.5%). ONS 2021 BUAs: Grimsby 85,925; Cleethorpes 29,670; Humberston and New Waltham 14,860; Immingham 9,770;
// Waltham 6,200; Laceby 3,285; Healing 3,200.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GRIMSBY', label: 'Grimsby', blurb: 'AI and programming classes for Grimsby, with a project that builds synthetic data from census tables and catches the impossible workers it invents.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-grimsby',
  code: 'gri',
  accent: '#0B4C32',
  accentRationale: 'Grimsby: a deep North Sea green (8.08:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Grimsby',
    eyebrow: 'Grimsby, North East Lincolnshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Lincolnshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'Lincolnshire', href: '/coding-classes-in-lincolnshire' },
    { label: 'Yorkshire and Humber', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Grimsby, England',
  title: 'AI and Programming Classes in Grimsby | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for learners aged 6 to 67 in Grimsby, Cleethorpes, Immingham and Humberston, live. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Grimsby, and a Python project that builds synthetic workers from census tables and catches the impossible ones.',
  twitterDescription: 'Grimsby AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '28 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Grimsby',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Grimsby and North East Lincolnshire, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Grimsby',
  capsuleQ: 'Which are the best AI and programming classes in Grimsby?',
  capsule: 'North East Lincolnshire had 156,966 residents at the 2021 census. The ONS puts the Grimsby built-up area at 85,925 and Cleethorpes at 29,670, with Humberston and New Waltham, Immingham and Waltham next. Older working-age and retired people make up more of the population than across England, and people in their early twenties less. Children, teenagers and adults up to 67, in Grimsby, Cleethorpes or Immingham, can learn AI, programming, Python, vibe coding and maths through live video lessons with our tutors in India, taught individually or in groups of five to ten at a common level. Reasoning comes first in every course, so AI stays a tool rather than a crutch. Your first lesson costs nothing; then it is USD 100 per month for a group or USD 150 per month for private teaching.',
  lead: 'Modern AI systems are hungry for data, and when real data are scarce or private, developers often turn to synthetic data: made-up records generated to look like the real thing. The 2021 census offers a perfect test. For North East Lincolnshire, Nomis publishes how people travel to work and, separately, how far they travel. A Python learner can generate 68,850 synthetic workers, one for every real one, by drawing a travel method from the first table and a distance from the second. The overall shares match the census closely. Then the learner looks at individual records, and finds people walking more than 60 kilometres to work, and others who work from home while commuting across town.',
  wa: 'Hello Modern Age Coders, we would like a free AI or programming lesson for a learner in Grimsby.',

  picks: {
    eyebrow: 'Grimsby course picks',
    h2: 'Thinking, vibe coding and AI courses for Grimsby',
    intro: 'Follow the learner\'s age and curiosity; each course starts with a no-cost live lesson, booked without card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: sense-checking, logic and step-by-step plans.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then little apps built by chatting with AI and tried out carefully.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and AI projects for teenagers, the synthetic data project among them.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How language models are trained, grounded and turned into AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'North East Lincolnshire',
      h2: 'A borough weighted towards later life',
      intro: 'Census age figures are published for North East Lincolnshire as a whole; six bands from Nomis next to England.',
      body: [
        { kind: 'table', caption: 'North East Lincolnshire against England: six age bands, Census 2021 TS007A', head: ['Band', 'Residents', 'Borough %', 'England %'], rows: [
          ['20 to 24', '7,968', '5.1%', '6.0%'],
          ['40 to 44', '8,416', '5.4%', '6.3%'],
          ['55 to 59', '11,803', '7.5%', '6.7%'],
          ['60 to 64', '10,218', '6.5%', '5.8%'],
          ['70 to 74', '8,856', '5.6%', '5.0%'],
          ['80 to 84', '4,660', '3.0%', '2.5%']
        ] },
        { kind: 'p', text: 'The early twenties and early forties fall almost a point short of England, while the late fifties run almost a point ahead. Beyond Grimsby and Cleethorpes, the ONS lists Immingham at 9,770, Waltham at 6,200, Laceby at 3,285 and Healing at 3,200 among the borough\'s built-up areas. Children here are taught to England\'s national curriculum, and we keep lessons away from whatever holiday weeks you pass on.' },
        { kind: 'callout', h3: 'Why reasoning comes first', p: 'Our thinking-first approach is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>. For the county see <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Grimsby project',
      h2: 'Synthetic workers from two census tables',
      intro: 'Generate data that match every published total, then read the individual records.',
      body: [
        { kind: 'p', text: 'The learner downloads two tables for the borough. One splits 68,850 working residents by method of travel: 41,180 drivers, 6,360 on foot, 3,423 by bicycle, 9,605 mainly at home, and so on. The other splits 68,849 by distance travelled. The totals differ by one person, because the census adds small privacy noise to each table separately. Using Python\'s random module with a fixed seed so the run can be repeated, the program creates 68,850 synthetic workers, choosing each one\'s method and distance by the shares in the two tables. Count them up again and the proportions match the census almost perfectly. By the usual summary checks, this looks like excellent training data.' },
        { kind: 'table', caption: 'Implausible records among 68,850 synthetic North East Lincolnshire workers, our Python run, 28 September 2026', head: ['Check', 'Methods drawn independently', 'With a home-working rule'], rows: [
          ['Home working in one field but not the other', '16,446 (23.9%)', '0'],
          ['On foot, 60km and over', '124', '132'],
          ['By bicycle, 60km and over', '76', 'Not re-counted'],
          ['On foot, 20km or more', '460', '547'],
          ['Driving under 2km', '6,848', 'Plausible, kept']
        ] },
        { kind: 'p', text: 'Reading actual rows tells a different story. Because method and distance were drawn separately, 16,446 synthetic people, almost a quarter, work mainly from home according to one field while commuting some distance according to the other, or the reverse. The learner checks that against a quick calculation: independence predicts about 16,530, so the program is behaving exactly as designed. The design is the problem. There are also 124 people who walk 60 kilometres or more to work every day, and 76 who cycle that far. None of these break the published shares.' },
        { kind: 'p', text: 'The first fix is a rule: anyone who works from home in one field must do so in the other. That removes the contradiction completely, but the long-distance walkers remain, 132 of them in the second run, because the two tables never say how method and distance relate. That information lives in the joint distribution, a cross-table of method by distance, which the learner would need before generating realistic records. The conclusion is the valuable part: synthetic data can match every summary and still be nonsense record by record, and a model trained on it would learn that walking 60 kilometres to work is normal.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Make "people cards" by picking a travel method and a distance from two hats, and spot the silly ones.' },
          { h3: 'Ages 11 to 15', p: 'Generate synthetic workers in Python and write checks that flag impossible pairs.' },
          { h3: 'Ages 15 and up', p: 'Compare independent sampling with rule-based fixes and explain why joint data are needed.' }
        ] },
        { kind: 'callout', h3: 'Census tables, our synthetic records', p: 'Counts come from the Census 2021 tables TS061 and TS058 on Nomis. Every synthetic worker, check and count in the table above is our own work.' }
      ]
    },
    {
      id: 'aidata', tint: 'deep', eyebrow: 'Vibe coding and AI agents',
      h2: 'Data quality behind vibe coding and AI agents',
      intro: 'What goes into an AI system decides what comes out.',
      body: [
        { kind: 'table', caption: 'How North East Lincolnshire\'s workers travelled, Census 2021 TS061', head: ['Method', 'People'], rows: [
          ['Driving a car or van', '41,180'],
          ['Mainly at or from home', '9,605'],
          ['On foot', '6,360'],
          ['Passenger in a car or van', '4,040'],
          ['Bicycle', '3,423'],
          ['Bus, minibus or coach', '2,272']
        ] },
        { kind: 'p', text: 'A vibe-coded data generator like this takes minutes to write with an AI assistant, and it will pass every test that only looks at totals. Spotting the walkers who cover 60 kilometres needs a person who thinks about what the data mean. We build that habit early with the how-to-think programme, keep it central when teenagers vibe code their own projects, and rely on it when older students and adults build AI agents that fetch and act on data in Python. Copilot Studio agent work is taught only in one-to-one lessons. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">about our AI agents course for UK students</a> or <a class="cg-inline-link" href="/vibe-coding-for-teens">vibe coding for teenagers</a>.' },
        { kind: 'p', text: 'The Office for National Statistics and Nomis are independent of Modern Age Coders. The published counts belong to them; the synthetic records we generated, and any fault in them, belong to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From picking cards to training data',
    intro: 'The year group gives a rough start, and the free lesson pins it down.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sense-checking, logic and clear plans.', courses: ['problem-solving-and-computational-thinking-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps made with AI, then tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Python, data and AI', p: 'Randomness, data quality and AI beside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Adults', h3: 'AI systems and agents', p: 'Training data, language models and agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and training data',
    h2: 'Would you train an AI on these workers?',
    intro: 'Only after reading some of them.',
    p1: 'The synthetic workers matched every census total and still included more than a hundred people walking 60 kilometres to work. A model trained on them would treat that as ordinary.',
    p2: 'A Grimsby learner who has generated data and then read it row by row checks training data before trusting any model built from it.',
    closer: 'Understanding the data behind AI is becoming as important as writing code, and it is a strong reason for Grimsby teenagers to keep learning to program in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Cleethorpes to Immingham, taught online',
    intro: 'One computer and a solid internet connection are enough for any home in the borough.',
    cells: [
      { h3: 'Hands on, always', p: 'The learner does the typing, prompting and testing; the tutor watches through screen share and replies with questions.' },
      { h3: 'Pitched by the trial', p: 'The free lesson, rather than the year group alone, decides the first topic for a Year 5 or Year 12 learner.' },
      { h3: 'No cost to begin', p: 'The trial is a full lesson and ends with a plain recommendation.' },
      { h3: 'Five to ten per group', p: 'UK learners grouped by stage, not age alone.' },
      { h3: 'Twice weekly', p: 'Holidays are left free.' },
      { h3: 'Stable lesson time', p: 'We absorb the UK clock changes on our side.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five learners in North East Lincolnshire at the same stage and free at one hour rarely live near one another. Online classes give each the right company.' }
  },

  fees: {
    h2: 'Grimsby fees',
    intro: 'Grimsby families pay our international price, the same in every country except India.',
    first: 'A complete trial lesson, free, followed by a course recommendation.',
    group: 'Close to eight live lessons a month in a small group.',
    private: 'Close to eight live one-to-one lessons a month.',
    closer: 'Prices are set in US dollars, not pounds. We send no bill until the free lesson has fixed a course and a regular weekly slot, and the pricing page deals with holidays, missed sessions and moving between group and private.'
  },

  reviewsH2: 'Lincolnshire families, and families across the UK, on Google',

  book: {
    h2: 'Book a free Grimsby lesson',
    intro: 'Just tell us the learner\'s age or school year and what they are into. The trial might be a sense-check puzzle, a Scratch game built with AI, first steps in Python, or making some synthetic data of their own.',
    success: 'Thank you. The Grimsby request has come through.'
  },

  faq: {
    h2: 'Grimsby questions',
    intro: 'Synthetic data, vibe coding, AI agents and the practical side.',
    items: [
      { q: 'What is the population of Grimsby?', a: 'The ONS gives 85,925 for the Grimsby built-up area at the 2021 census; North East Lincolnshire as a whole had 156,966.' },
      { q: 'Are your AI and programming classes open to Grimsby learners?', a: 'Yes. Everything runs on live video, so Grimsby, Cleethorpes and Immingham are all covered.' },
      { q: 'What is synthetic data?', a: 'Made-up records generated to resemble real ones, often used to train or test AI when real data are private or scarce.' },
      { q: 'Is vibe coding taught?', a: 'Yes. Learners describe what they want to an AI, then read, test and correct what it writes.' },
      { q: 'Can students learn to build AI agents?', a: 'Yes, once they have some Python; Copilot Studio agents are covered one-to-one only.' },
      { q: 'Is any teaching face to face?', a: 'No; it is all online and live.' },
      { q: 'Do you support GCSE and A level students?', a: 'Yes, in computer science and maths. Understanding is the goal; grades are never promised.' },
      { q: 'Who can join?', a: 'Learners from 6 years old up to 67.' },
      { q: 'What are the fees?', a: 'The trial is free. Group lessons are USD 100 a month after that, and private lessons USD 150 a month.' },
      { q: 'Do lessons run in school holidays?', a: 'No; send us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Across the Humber and Lincolnshire',
    html: 'Other pages close by include <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a> and <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a>. The county has its <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> page, the region is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists everything.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Grimsby and North East Lincolnshire',
  footerPlaces: [
    { href: '/coding-classes-in-lincolnshire', label: 'Lincolnshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gri .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-gri .cg-hero h1 { font-weight: 770; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-gri .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-gri .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gri .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.02em; }
.cg-root.cg-gri .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-gri .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gri .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-gri .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-gri .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North East Lincolnshire (E06000012). TS001 156,966. TS007A: 20 to 24 7,968 (5.1%, England 6.0%); 40 to 44 8,416 (5.4%, 6.3%); 55 to 59 11,803 (7.5%, 6.7%); 60 to 64 10,218 (6.5%, 5.8%); 70 to 74 8,856 (5.6%, 5.0%); 80 to 84 4,660 (3.0%, 2.5%). ONS 2021 BUAs: Grimsby 85,925; Cleethorpes 29,670; Humberston and New Waltham 14,860; Immingham 9,770; Waltham 6,200; Laceby 3,285; Healing 3,200. TS061 (NM_2078_1) total 68,850; TS058 (NM_2075_1) total 68,849.',
    localProject: '68,850 synthetic workers, seed 20260928, method and distance drawn independently: 16,446 (23.9%) home-working contradictions (expected 16,530); walk 60km+ 124; cycle 60km+ 76; walk 20km+ 460; drive under 2km 6,848. With home rule: walk 60km+ 132, walk 20km+ 547. Lesson family: synthetic data from marginals, independence assumption, consistency rules, realism checks, joint distribution.',
    requiredMentions: [
      '156,966',
      '85,925',
      'Cleethorpes',
      'Immingham',
      'Laceby',
      'Healing',
      'synthetic data',
      'joint distribution',
      '68,850'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS061 Method used to travel to work and TS058 Distance travelled to work, North East Lincolnshire.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'Nomis Census 2021 TS001 and TS007A, North East Lincolnshire and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS methodology, Protecting personal data in Census 2021 results (why table totals can differ slightly).', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' }
    ],
    rejectedClaims: [
      'Fishing and docks history: not read from a source; not claimed.',
      'The real joint distribution of method by distance: not downloaded; the page says it would be needed.',
      'Why 11,066 work offshore or in no fixed place: not analysed; not claimed.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
