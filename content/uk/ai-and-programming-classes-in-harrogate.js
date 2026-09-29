'use strict';
// Harrogate (cg- town page, UK cluster Phase 8, towns band A, row 384). Keyword slug per the owner's rotation, with the
// 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an app or an AI agent
// answer "is it open now?", and what happens when real data is messier than the examples? (regular expressions and
// parsing a real format against its specification).
// Data (read 29 September 2026): OpenStreetMap API 0.6 map call, bbox -1.548,53.988,-1.532,53.998 (ODbL). 60 shops,
// cafes, restaurants, banks and other amenities carry an opening_hours tag (55 distinct strings). Business names are not
// published on the page; only counts and formats.
// Specification (read raw 29 September 2026): OpenStreetMap Wiki, Key:opening_hours/specification. Verbatim: "the earlier
// rule is overridden" (example "Mo-Sa 09:00-12:00; We 15:00-18:00" is closed on Wednesday morning); the comma is the
// "additional_rule_separator"; rule modifier "closed" or "off"; "PH off" appears in an example (public holidays).
// Our run (scratchpad hgt/oh.py): naive single-rule regex (days range, one time range) matches 12 of 60; a parser for the
// common subset (semicolon-separated rules, day lists and ranges, several time ranges, off, later rules override) reads
// 54 of 60. The 6 unread: public holidays PH (2), extra rules joined by a comma (2), the word closed (1), a time with no
// days (1). 42 of the 54 have more than one rule; reading only the first rule gives the wrong open-or-closed answer for
// 755 of 9,072 place-hours (8.3%). Open at 16:30 on a Sunday: 17 of 54; at 20:00 on a Monday: 10 of 54.
// Lesson family: regular expressions, parsing a real-world format, specification vs examples, rule precedence, testing
// on real data. Screened: regular expression, regex, opening_hours 0 hits.
// Place facts: ONS 2021 BUAs (published): Harrogate 75,515; Knaresborough 15,785; Pannal 2,530. postcodes.io (North
// Yorkshire): Starbeck, Bilton, Jennyfield, Harlow Hill, Oatlands, New Park (suburban areas); Pannal, Killinghall
// (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HARROGATE', label: 'Harrogate', blurb: 'AI and programming classes for Harrogate, with a regular-expression project that teaches a program to answer "is it open now?" from real town-centre data.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-harrogate',
  code: 'hgt',
  accent: '#175C32',
  accentRationale: 'Harrogate: a deep valley green (6.48:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Harrogate',
    eyebrow: 'Harrogate, North Yorkshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'North Yorkshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber', name: 'Yorkshire and the Humber' }],
  nav: [
    { label: 'North Yorkshire', href: '/coding-classes-in-north-yorkshire' },
    { label: 'Yorkshire', href: '/coding-and-ai-classes-in-yorkshire-and-the-humber' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Harrogate, England',
  title: 'AI and Programming Classes in Harrogate | Coding for 6 to 67',
  description: 'Online AI, programming, Python and vibe coding classes for Harrogate, Knaresborough, Starbeck and Bilton learners aged 6 to 67, live online. First lesson free.',
  ogDescription: 'Live online AI and programming classes for Harrogate, and a Python project that parses real opening hours to answer "is it open now?".',
  twitterDescription: 'Harrogate AI, programming and vibe coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Harrogate',
    description: 'Online AI, programming, Python, vibe coding and mathematics for children, teenagers and adults in Harrogate and Knaresborough, taught live with thinking skills first.'
  },

  h1: 'AI and programming classes in Harrogate',
  capsuleQ: 'Which are the best AI and programming classes in Harrogate?',
  capsule: 'The ONS counted 75,515 people in the Harrogate built-up area at the 2021 census and 15,785 in Knaresborough, with Starbeck, Bilton, Jennyfield and Harlow Hill among the suburbs recorded around the town. From six-year-olds to adults of 67, anyone in the district can learn AI, programming, Python, vibe coding and maths on a live video link, taught by our India-based team one-to-one or in a group of five to ten sharing a level. We teach how to think before any tool, so learners stay in charge of the AI they use. The free first lesson ends with a course recommendation. Harrogate\'s project tackles a question people ask phones and AI assistants every day, "is it open now?", by parsing the real opening hours recorded for the town centre. Staying on after that is USD 100 per month in a shared class, or USD 150 per month with a tutor to yourself.',
  lead: 'Ask a phone or an AI assistant whether a café is open and, behind the scenes, a program has to read a line like "Mo-Fr 08:00-17:00; Sa,Su 09:00-17:00" and work out the answer. OpenStreetMap stores opening hours for places in central Harrogate in exactly this format, and the format has an official specification. This project uses regular expressions in Python, the standard tool for matching text patterns, to teach a program to read those lines. The first attempt looks fine on tidy examples and fails on four out of five real ones, which is precisely the lesson: real data is always messier than the examples, and software, whether written by a person or an AI, has to be tested on the real thing.',
  wa: 'Hello Modern Age Coders, could we book a free AI or programming lesson for a learner in Harrogate?',

  picks: {
    eyebrow: 'Harrogate course picks',
    h2: 'Harrogate courses for thinking, vibe coding and AI',
    intro: 'Four age-matched starting points, each opening with a no-cost live lesson that needs no card to reserve.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Our how-to-think programme: spotting patterns in text, rules and the exceptions to them.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games, then little apps made by describing them to AI and testing each feature.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the "is it open now?" parser.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python in depth: text processing, regular expressions, data and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Harrogate and Knaresborough',
      h2: 'Harrogate, Knaresborough and the surrounding villages',
      intro: 'Published ONS census counts and the neighbourhoods recorded around the town.',
      body: [
        { kind: 'table', caption: 'Harrogate and two other North Yorkshire built-up areas, ONS 2021 census counts', head: ['Built-up area', 'People (2021)'], rows: [
          ['Harrogate', '75,515'],
          ['Knaresborough', '15,785'],
          ['Pannal', '2,530']
        ] },
        { kind: 'p', text: 'We show these ONS figures as published and do not add them together. Starbeck, Bilton, Jennyfield, Harlow Hill, Oatlands and New Park are recorded as suburban areas, and Killinghall as a village, in North Yorkshire. Schools here follow the national curriculum for England; tell us the holiday weeks and we will leave them free of lessons.' },
        { kind: 'callout', h3: 'North Yorkshire, the region and our approach', p: 'More options are on <a class="cg-inline-link" href="/coding-classes-in-north-yorkshire">coding classes in North Yorkshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-yorkshire-and-the-humber">Yorkshire and the Humber</a>. Why every course starts with reasoning rather than prompting is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Harrogate project',
      h2: 'Is it open now? Parsing real opening hours with regular expressions',
      intro: 'Write a pattern, test it on the town centre\'s real data, then read the specification and find what you missed.',
      body: [
        { kind: 'p', text: 'From an OpenStreetMap API download covering the middle of Harrogate, the learner extracts every shop, café, restaurant and other amenity that has an opening_hours tag: 60 places, written in 55 different ways. The first regular expression matches the obvious pattern, a day range and one time range such as "Mo-Sa 10:00-17:30". It reads just 12 of the 60. Most places are more complicated: different hours on different days, lunchtime breaks, Sundays shown separately.' },
        { kind: 'p', text: 'The second version splits the text at semicolons into separate rules, understands day lists like "Sa,Su" and ranges like "Mo-Fr", allows more than one time range in a day, and treats "off" as closed. It also follows a rule from the official specification on the OpenStreetMap Wiki: when two rules cover the same day, the later one wins, or in the specification\'s words, "the earlier rule is overridden". This parser reads 54 of the 60 places.' },
        { kind: 'table', caption: 'How much of central Harrogate\'s opening-hours data each approach can read, 60 places from OpenStreetMap, our Python run, 29 September 2026', head: ['Approach', 'Places read'], rows: [
          ['One simple regular expression', '12 of 60'],
          ['Rule-by-rule parser for the common cases', '54 of 60'],
          ['Left over: public holidays marked PH', '2'],
          ['Left over: extra rules joined by a comma', '2'],
          ['Left over: the word "closed"', '1'],
          ['Left over: a time with no days given', '1']
        ] },
        { kind: 'p', text: 'The six left over are not mistakes in the data. Checking the specification shows that public holidays, the word "closed" and extra rules joined by a comma are all part of the official format; the parser simply does not handle them yet. That is a lesson every programmer meets: a format is always bigger than the examples you first looked at, and the specification is the place to find out how much bigger.' },
        { kind: 'p', text: 'Getting it wrong has a real cost. Of the 54 places the parser can read, 42 list more than one rule. A lazy program that reads only the first rule gives the wrong open-or-closed answer for 755 of the 9,072 hours in a week across those places, 8.3%. With the full parser, 17 of the 54 are open at half past four on a Sunday afternoon and 10 at eight on a Monday evening.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Read opening-hours signs, write them in a shared code, and spot which ones break the code.' },
          { h3: 'Ages 11 to 15', p: 'Write a first regular expression in Python and count how many real entries it matches.' },
          { h3: 'Ages 15 and up', p: 'Build the rule parser, test "open now" across the week and extend it from the specification.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our parser', p: 'Opening hours are from OpenStreetMap and its contributors under the Open Database Licence, and the format is defined on the OpenStreetMap Wiki. The parser, the counts and the open-now checks are our own work; we do not name individual businesses.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Messy data and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Passing on tidy examples proves little; passing on real data proves more.',
      body: [
        { kind: 'table', caption: 'From Harrogate\'s opening hours to AI-written software', head: ['In the opening-hours project', 'When AI writes or runs code'], rows: [
          ['One regex read 12 of 60', 'A neat-looking answer can fail on most real inputs'],
          ['The parser still missed 6', 'Keep a list of cases the code cannot handle'],
          ['The specification settled it', 'Check the official source, not just examples'],
          ['First-rule-only was wrong 8.3% of the time', 'Small shortcuts create real wrong answers'],
          ['Later rules override earlier ones', 'Order and precedence matter in rules']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for a regular expression that reads opening hours and it will usually give you something like the first attempt: tidy, confident and wrong for most of the town. In our vibe coding lessons, where the learner describes a program and the AI drafts it, Harrogate learners run every draft against the real 60 entries before trusting it. AI agents that answer questions such as "is it open now?" for you depend on exactly this kind of parsing, so a wrong rule turns into a wasted journey. Learners reach agents once Python feels easy, typically late in their teens or as adults, and anything involving Copilot Studio is taught privately. You can read about that route on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the page for UK students learning to build agents</a>, and our thinking on it in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS and the businesses in the data are all independent of Modern Age Coders; we only used openly published records, and the parser, flaws included, is our responsibility.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From reading signs to writing parsers',
    intro: 'We start from the school year, then the free lesson places the learner properly.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Patterns, rules and the exceptions that break them.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and text', p: 'Strings, regular expressions and testing alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python and agents', p: 'Text processing, data and AI agents, built properly in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and real data',
    h2: 'What is a regular expression, and can AI write one for you?',
    intro: 'It is a compact pattern for matching text, and AI can write one, but only testing shows whether it works.',
    p1: 'In Harrogate the obvious regular expression read 12 of 60 real entries. An AI would likely have produced something similar, and it would have looked just as convincing.',
    p2: 'Learners who have tested patterns on real data, and then checked the specification, know to ask for evidence before trusting any code, including code an AI wrote.',
    closer: 'A Harrogate teenager who can test code against messy real data will use AI tools with real confidence, and that is a strong reason to learn to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Starbeck to Harlow Hill, online',
    intro: 'Any home with a computer and broadband good enough for video can join.',
    cells: [
      { h3: 'The learner codes', p: 'Students write, prompt and run their programs themselves, while the tutor follows on screen share and asks questions.' },
      { h3: 'Placed by ability', p: 'The free lesson shows where to begin, whatever the school year, and any exam board is noted.' },
      { h3: 'First lesson free', p: 'No fee for lesson one, which closes with our suggestion of a course.' },
      { h3: 'Same-stage groups', p: 'A class brings together between five and ten learners from around Britain who have reached the same point.' },
      { h3: 'Twice weekly', p: 'Lessons stop for the school holidays.' },
      { h3: 'Set times', p: 'Our tutors follow the UK clock changes, so your lesson hour does not move.' }
    ],
    spec: { title: 'Why we teach online', p: 'Five learners at the same stage and free at the same hour are unlikely to live near each other. Online, that does not matter.' }
  },

  fees: {
    h2: 'Harrogate fees',
    intro: 'Harrogate learners pay our international rate, which applies in every country except India.',
    first: 'A complete first lesson free of charge, with a course suggestion at the end.',
    group: 'Roughly eight live small-group lessons a month.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'Fees are charged in US dollars rather than pounds. Invoicing begins after the free lesson, once a course and a regular time are agreed; see the pricing page for holidays, missed sessions and changes of format.'
  },

  reviewsH2: 'Google reviews from Yorkshire households and further afield',

  book: {
    h2: 'Book a free Harrogate lesson',
    intro: 'Share a year group or age and what the learner is into. Possible trial activities: a pattern-hunting puzzle, an AI-assisted Scratch game, a first go at Python, or a mini parser for real text.',
    success: 'Thank you. Your Harrogate request has been received.'
  },

  faq: {
    h2: 'Harrogate questions',
    intro: 'The opening-hours project, regular expressions, vibe coding and practical points.',
    items: [
      { q: 'What is the population of Harrogate?', a: 'The ONS gives 75,515 for the Harrogate built-up area at the 2021 census, and 15,785 for Knaresborough.' },
      { q: 'Do you run AI and programming classes for Harrogate?', a: 'Yes, live online, for learners aged 6 to 67 in Harrogate, Knaresborough and the villages around them.' },
      { q: 'What is a regular expression?', a: 'A short pattern that describes text to find or check, such as "a day range followed by a time range"; most programming languages, including Python, support them.' },
      { q: 'What is the Harrogate project?', a: 'Learners parse the real opening hours of places in central Harrogate from OpenStreetMap, test their code against the official specification and answer "is it open now?" for every hour of the week.' },
      { q: 'Can Harrogate learners try vibe coding?', a: 'Yes, at any age: the learner decides what to build, an AI drafts it, and the learner tests every part.' },
      { q: 'How soon can someone start building AI agents?', a: 'As soon as they are comfortable in Python, which for most means the later teens or adulthood; Copilot Studio agent lessons are private only.' },
      { q: 'Are lessons in person?', a: 'No, all lessons are live online.' },
      { q: 'Is there support for GCSE or A level students?', a: 'Computer science and maths are both covered, aimed at genuine understanding rather than a promised grade.' },
      { q: 'What are the fees?', a: 'Lesson one: nothing. Afterwards: USD 100 monthly in a class of peers, or USD 150 monthly on your own.' },
      { q: 'Do lessons run in school holidays?', a: 'No, they pause. Send us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More North Yorkshire and Yorkshire pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-ripon">Ripon</a> and <a class="cg-inline-link" href="/best-coding-class-in-york">York</a> have pages and projects of their own, and so do <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-halifax">Halifax</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every area we cover.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Harrogate and North Yorkshire',
  footerPlaces: [
    { href: '/coding-classes-in-north-yorkshire', label: 'North Yorkshire' },
    { href: '/coding-and-ai-classes-in-yorkshire-and-the-humber', label: 'Yorkshire and the Humber' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hgt .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.6rem); }
.cg-root.cg-hgt .cg-hero h1 { font-weight: 780; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-hgt .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-hgt .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hgt .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.019em; }
.cg-root.cg-hgt .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-hgt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hgt .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-hgt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-hgt .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'ONS 2021 BUAs (published): Harrogate 75,515; Knaresborough 15,785; Pannal 2,530 (North Yorkshire). postcodes.io (North Yorkshire): Starbeck, Bilton, Jennyfield, Harlow Hill, Oatlands, New Park (suburban areas); Killinghall, Pannal (villages). OpenStreetMap Wiki, Key:opening_hours/specification: "the earlier rule is overridden".',
    localProject: 'OSM bbox -1.548,53.988,-1.532,53.998: 60 places with opening_hours (55 distinct). Naive regex 12/60; subset parser 54/60; unread: PH 2, comma-joined rules 2, closed 1, time with no days 1 (PH, closed and comma separator are in the specification). 42 of 54 multi-rule; first-rule-only wrong on 755 of 9,072 place-hours (8.3%). Open Sunday 16:30: 17 of 54; Monday 20:00: 10. Lesson family: regular expressions, parsing a real format, spec vs examples, rule precedence.',
    requiredMentions: [
      '75,515',
      '15,785',
      'Knaresborough',
      'Starbeck',
      'Bilton',
      'Jennyfield',
      'Harlow Hill',
      'opening_hours',
      'regular expression',
      'the earlier rule is overridden'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'OpenStreetMap map data for central Harrogate, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'OpenStreetMap Wiki, Key:opening_hours/specification.', url: 'https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification' },
      { claim: 'postcodes.io places in North Yorkshire (suburban areas and villages around Harrogate).', url: 'https://api.postcodes.io/places?q=Starbeck' }
    ],
    rejectedClaims: [
      'Spa, conference or tea-room history: not read from a source; not claimed.',
      'Names of individual businesses: deliberately not published.',
      'That the OpenStreetMap hours are current or complete: not verified with the businesses; treated only as data to parse.',
      'That a time with no days is valid under the specification: not claimed; only listed as unread.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
