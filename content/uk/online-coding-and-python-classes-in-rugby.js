'use strict';
// Rugby (cg- town page, UK cluster Phase 8, towns band A, row 327). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: how much of Tom Brown's School Days is dialogue? Anchors (read raw 27 September 2026): Project Gutenberg ebook
// 1480, Thomas Hughes, "Tom Brown's School Days" (release date February 15, 2006): "CHAPTER V--RUGBY AND FOOTBALL"; the
// Birmingham coaches "did not pass through Rugby, but deposited their passengers at Dunchurch, a village three miles distant
// on the main road"; the Tally-ho "passed through Rugby itself"; "the School-house". The novel never uses the words
// "Rugby School", so the page does not quote them.
// Our run (scratchpad lgh/tb.py, 27 September 2026): text between the Gutenberg START and END markers; 1,424 paragraphs;
// 1,522 opening double quotes, 1,513 closing, 2,538 straight apostrophes (also used as inner quotes). 9 paragraphs open more
// quotes than they close: 8 are speeches or verse carried on into the next paragraph (the next paragraph opens with a fresh
// opening mark), 1 (Tom's father, "Is your money all safe?") is followed by Tom's reply, so the e-text appears to lack a
// closing mark. Finite state machine that resets at each paragraph: 23.0% of 443,853 letters inside double quotes, no
// errors. Without the reset: same share, 9 open-while-inside warnings. Naive toggle on any double-quote mark: 54.2%.
// Toggle that also flips on apostrophes: 49.5%.
// Lesson family: finite state machine parsing, paragraph-continuation convention; screened (state machine, finite state,
// readability, Flesch: 0 hits; Veenendaal tokenizer and Roermond regex are different techniques; Zipf/Heaps spent elsewhere
// and not used). The page avoids the novel's fights and bullying.
// Place facts: Nomis Census 2021 TS007A, Rugby E07000220: total 114,364; 5 to 9 7,112 (6.2%; England 5.9%); 20 to 24 5,570
// (4.9%; 6.0%); 30 to 34 8,353 (7.3%; 7.0%); 35 to 39 8,200 (7.2%; 6.7%); 40 to 44 7,652 (6.7%; 6.3%); 75 to 79 4,470 (3.9%;
// 3.6%). ONS 2021 BUAs wholly in Rugby borough: Rugby 78,120; Cawston 6,470; Long Lawford 4,370; Wolston 2,695; Dunchurch
// 2,605; Binley Woods 2,570.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'RUGBY', label: 'Rugby', blurb: 'Online coding and Python classes for Rugby, with a project that measures how much of Tom Brown\'s School Days is dialogue.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-rugby',
  code: 'rgb',
  accent: '#53158A',
  accentRationale: 'Rugby: an ink violet for a Victorian novel (9.19:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Rugby',
    eyebrow: 'Rugby, Warwickshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Warwickshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-west-midlands-region', name: 'West Midlands' }],
  nav: [
    { label: 'Warwickshire', href: '/coding-classes-in-warwickshire' },
    { label: 'West Midlands', href: '/coding-and-ai-classes-in-west-midlands-region' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rugby, England',
  title: 'Online Coding and Python Classes in Rugby | AI for 6 to 67',
  description: 'Live online coding, Python and AI classes for Rugby, Cawston, Long Lawford and Dunchurch, for learners aged 6 to 67 in small groups or one-to-one. First lesson free.',
  ogDescription: 'Online coding and Python classes for Rugby, and a project that builds a state machine to measure the dialogue in Tom Brown\'s School Days.',
  twitterDescription: 'Rugby online coding, Python and AI classes for ages 6 to 67. Try the first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Rugby',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Rugby, Warwickshire, taught live and placed by level.'
  },

  h1: 'Online coding and Python classes in Rugby',
  capsuleQ: 'What are the best online coding and Python classes for Rugby?',
  capsule: 'The 2021 census found 114,364 residents in Rugby borough, 78,120 of them in the Rugby built-up area. Families with young children are well represented, with adults in their thirties and early forties above the England share. Anyone from 6 to 67 can learn coding, Python, AI or maths with us over live video; our India-based tutors teach privately or in level-matched classes of five to ten. A free first lesson tells us where to begin. The Rugby project turns a well-known Victorian novel set in the town into data. Continuing costs USD 100 per month for group lessons or USD 150 per month for private ones.',
  lead: 'Thomas Hughes\'s novel Tom Brown\'s School Days follows a boy who travels to Rugby by the Tally-ho coach and has his luggage carried up to the School-house. It is also a large block of text: 1,424 paragraphs in the Project Gutenberg edition. How much of it is people talking? The question sounds like counting quotation marks, and that is exactly where most first programs go wrong. The book opens 1,522 quotations but closes only 1,513. Nine speeches seem never to end. A Rugby learner who works out why will build a finite state machine, one of the most useful ideas in computing, and get an answer less than half of the naive one.',
  wa: 'Hello Modern Age Coders, please arrange a free online coding or Python lesson for a Rugby learner.',

  picks: {
    eyebrow: 'Rugby favourites',
    h2: 'Where Rugby learners begin',
    intro: 'Choose by age and curiosity. Each course starts with a free live lesson, with no payment details needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with stories, characters and speech bubbles.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python, working with words and sentences, plus a taste of AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teens, including the state machine project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for adults from zero, on to text processing and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rugby borough',
      h2: 'A town of young families',
      intro: 'Rugby borough in the 2021 census age table TS007A on Nomis: six bands next to England.',
      body: [
        { kind: 'table', caption: 'Rugby borough compared with England, six bands, Census 2021 TS007A', head: ['Age group', 'Rugby residents', 'Rugby %', 'England %'], rows: [
          ['5 to 9', '7,112', '6.2%', '5.9%'],
          ['20 to 24', '5,570', '4.9%', '6.0%'],
          ['30 to 34', '8,353', '7.3%', '7.0%'],
          ['35 to 39', '8,200', '7.2%', '6.7%'],
          ['40 to 44', '7,652', '6.7%', '6.3%'],
          ['75 to 79', '4,470', '3.9%', '3.6%']
        ] },
        { kind: 'p', text: 'People in their early twenties are scarcer than nationally, while parents in their thirties and forties and their primary-age children are more common. Outside the town, the ONS lists Cawston at 6,470, Long Lawford at 4,370, Wolston at 2,695 and Dunchurch at 2,605, all inside the borough. Schools follow the national curriculum for England; tell us your holiday dates and we pause.' },
        { kind: 'callout', h3: 'Around Rugby', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands</a> page links the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rugby project',
      h2: 'A state machine for quotation marks',
      intro: 'Four ways to measure the dialogue, and why three of them are wrong.',
      body: [
        { kind: 'p', text: 'The learner downloads the plain text and keeps only the novel between Project Gutenberg\'s start and end markers. The first idea is a toggle: every time a double quotation mark appears, flip between "inside speech" and "outside speech", and count the letters on each side. It reports that 54.2 per cent of the book is dialogue. That feels too high, and the learner is right to be suspicious.' },
        { kind: 'table', caption: 'Our Python measurements of dialogue in Tom Brown\'s School Days, 27 September 2026', head: ['Method', 'Share of letters in dialogue', 'Problems found', 'Verdict'], rows: [
          ['Toggle on every double quote', '54.2%', 'Nine unclosed speeches flip the rest of the book', 'Wrong'],
          ['Toggle that also flips on apostrophes', '49.5%', '2,538 apostrophes treated as quotes', 'Wrong'],
          ['State machine, no paragraph reset', '23.0%', 'Nine warnings, but the count survives', 'Close, noisy'],
          ['State machine with paragraph reset', '23.0%', 'None', 'Right']
        ] },
        { kind: 'p', text: 'The fix is a finite state machine with two states, outside and inside, where an opening mark always means inside and a closing mark always means outside, whatever came before. The machine also resets to outside at every new paragraph. That matters because Victorian printers used a convention: when one person\'s speech runs over several paragraphs, each new paragraph opens with a quotation mark but the previous one is left without a closing mark. Eight of the nine unclosed speeches are exactly that, including two passages of verse. The toggle never recovers from them; the state machine never notices.' },
        { kind: 'p', text: 'The ninth is different. Tom\'s father asks, "Is your money all safe?" and the next paragraph is Tom\'s reply, so the closing mark seems simply to be missing from the e-text. The learner\'s program prints every paragraph where the counts disagree, and a human reads them. Then come the tests: a made-up paragraph with a continued speech, one with a missing close, and one full of apostrophes such as "Tom\'s" and "isn\'t", which must not change the answer.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Highlight the speech in one page of a book with a pen, then count highlighted words.' },
          { h3: 'Ages 11 to 15', p: 'Write the toggle, see it fail, then write the two-state machine in Python.' },
          { h3: 'Ages 15 and up', p: 'Add the paragraph reset, report suspicious paragraphs and test edge cases.' }
        ] },
        { kind: 'callout', h3: 'Hughes\'s text, our parser', p: 'The novel is the Project Gutenberg edition of Tom Brown\'s School Days by Thomas Hughes. The parser, the measurements and the reading of the nine paragraphs are ours.' }
      ]
    },
    {
      id: 'novel', tint: 'deep', eyebrow: 'Why Tom Brown',
      h2: 'Coaches, Dunchurch and the School-house',
      intro: 'Rugby details in the text of the novel.',
      body: [
        { kind: 'table', caption: 'Rugby in Tom Brown\'s School Days, Project Gutenberg edition', head: ['Detail', 'What the novel says'], rows: [
          ['The journey', 'Tom travels by the Tally-ho coach, which passed through Rugby itself'],
          ['Dunchurch', 'Where Birmingham coaches set down Rugby passengers, called "a village three miles distant on the main road"'],
          ['Arrival', 'A man nicknamed Cooey carries Tom\'s luggage up to the School-house for sixpence'],
          ['Chapter five', 'Titled "Rugby and Football"'],
          ['Paragraphs', '1,424 in the Gutenberg text'],
          ['Quotation marks', '1,522 opening and 1,513 closing']
        ] },
        { kind: 'p', text: 'State machines run far beyond novels. Every web browser reads HTML with one, traffic lights and lifts are programmed as them, compilers use them to split code into words, and chatbots use them to track where a conversation has got to. Once a learner has seen a two-state machine beat a clever toggle, they start seeing states everywhere. A Rugby learner who has parsed Hughes\'s dialogue has built the core of a real parser.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with Project Gutenberg or the ONS. The novel and the census data are theirs; the parser, and any bug in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing skills',
    h2: 'From highlighter pens to real parsers',
    intro: 'Years are a rough guide; the free lesson finds the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Stories in blocks', p: 'Block coding with characters, speech and simple events.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python with words', p: 'Strings, loops and counting in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Text and AI', p: 'Parsing, data and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Useful programming', p: 'Adult Python through text and data work.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and text',
    h2: 'Can an AI count the dialogue in a book?',
    intro: 'Language models read text; that does not mean they measure it well.',
    p1: 'Ask a chatbot what share of a novel is dialogue and it will usually offer a round, plausible guess. It will not have walked through 1,424 paragraphs checking every quotation mark.',
    p2: 'A Rugby learner who has written the state machine knows the real figure, and knows why the easy method more than doubles it.',
    closer: 'For Rugby teenagers, the habit of measuring instead of guessing makes a solid case for staying with code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'From Cawston to Dunchurch by video',
    intro: 'The whole borough is covered, since everything happens online.',
    cells: [
      { h3: 'Learners write the code', p: 'Each line is the student\'s own; the tutor watches the shared screen and prompts with questions.' },
      { h3: 'Placed by year', p: 'A Year 3 and a Year 12 each begin where their school year and trial suggest, with their exam board in mind.' },
      { h3: 'Opening lesson free', p: 'The trial is free, and ends with honest advice about the next step.' },
      { h3: 'Stage-matched classes', p: 'Groups of five to ten learners at the same point, from across the UK.' },
      { h3: 'Twice weekly', p: 'Two lessons a week through term time, paused in the holidays.' },
      { h3: 'Fixed hour', p: 'When clocks change in the UK, our teachers adjust and your lesson time holds.' }
    ],
    spec: { title: 'Why groups are online', p: 'Five Rugby learners at one level, all free at the same time, rarely live near each other. Online, each finds a matching class.' }
  },

  fees: {
    h2: 'Fees in Rugby',
    intro: 'Rugby families pay our standard fee for every country outside India.',
    first: 'A full lesson at no cost, ending with a clear recommendation.',
    group: 'Roughly eight live group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Fees are in US dollars, never in sterling. The first invoice comes after the trial has agreed a course and a regular slot. Holidays, missed sessions and moving from group to private are set out on the pricing page.'
  },

  reviewsH2: 'What Rugby-area families and others say on Google',

  book: {
    h2: 'Book a free lesson in Rugby',
    intro: 'Share how old the learner is, or their year group, plus one thing they enjoy. The trial could be a Scratch story, a first Python program, an AI experiment, or the Tom Brown dialogue count.',
    success: 'Thank you. Your Rugby request is on its way to us.'
  },

  faq: {
    h2: 'Rugby FAQs',
    intro: 'The town, the novel project and the practical details.',
    items: [
      { q: 'What is the population of Rugby?', a: 'The 2021 census recorded 114,364 in Rugby borough and 78,120 in the Rugby built-up area.' },
      { q: 'Can someone in Rugby learn coding and Python online with you?', a: 'Yes. Learners aged 6 to 67 in Rugby join live online classes in coding, Python, AI and maths.' },
      { q: 'What is the Tom Brown\'s School Days project?', a: 'Learners build a finite state machine in Python to measure how much of the novel is dialogue, finding 23.0 per cent.' },
      { q: 'What is a finite state machine?', a: 'A program that is always in one of a few named states and changes state according to fixed rules as it reads input.' },
      { q: 'Why does counting quotation marks go wrong?', a: 'Speeches that run across paragraphs leave marks unclosed, so a simple on-off toggle gets out of step for the rest of the book.' },
      { q: 'Do learners travel for lessons?', a: 'No, lessons are online, so Long Lawford, Wolston and the town are all the same.' },
      { q: 'Is there support for GCSE and A level students?', a: 'We cover maths and computing for exam years, aiming at understanding and never guaranteeing grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67, including adults.' },
      { q: 'How much are the lessons?', a: 'The first is free; afterwards USD 100 monthly in a group or USD 150 monthly one-to-one.' },
      { q: 'Do lessons run over school holidays?', a: 'No. Tell us the dates and we stop.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'Pages near Rugby',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire</a> page covers the county, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-solihull">Solihull</a> studies a jet car\'s slow response, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'Contact us on WhatsApp'
  },

  footerHeading: 'Rugby and Warwickshire',
  footerPlaces: [
    { href: '/coding-classes-in-warwickshire', label: 'Warwickshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-rgb .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.6vw, 2.3rem); }
.cg-root.cg-rgb .cg-hero h1 { font-weight: 780; letter-spacing: -0.027em; line-height: 1.03; }
.cg-root.cg-rgb .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.05rem; font-style: italic; }
.cg-root.cg-rgb .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rgb .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.021em; }
.cg-root.cg-rgb .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-rgb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rgb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-rgb .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.75rem; }
.cg-root.cg-rgb .cg-callout { border-radius: 0 12px 12px 0; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Rugby (E07000220). Nomis Census 2021 TS007A: total 114,364; 5 to 9 7,112 (6.2%, England 5.9%); 20 to 24 5,570 (4.9%, 6.0%); 30 to 34 8,353 (7.3%, 7.0%); 35 to 39 8,200 (7.2%, 6.7%); 40 to 44 7,652 (6.7%, 6.3%); 75 to 79 4,470 (3.9%, 3.6%). ONS 2021 BUAs: Rugby 78,120; Cawston 6,470; Long Lawford 4,370; Wolston 2,695; Dunchurch 2,605; Binley Woods 2,570. Project Gutenberg 1480, Thomas Hughes, Tom Brown\'s School Days: "CHAPTER V--RUGBY AND FOOTBALL"; coaches "deposited their passengers at Dunchurch, a village three miles distant on the main road"; the Tally-ho "passed through Rugby itself"; "the School-house".',
    localProject: 'Finite state machine: 1,424 paragraphs; 1,522 opening vs 1,513 closing double quotes; 2,538 apostrophes; 9 paragraphs unclosed (8 continuation incl. 2 verse, 1 missing close). FSM with paragraph reset 23.0% of 443,853 letters, 0 errors; toggle 54.2%; toggle with apostrophes 49.5%.',
    requiredMentions: [
      '78,120',
      'Cawston',
      'Long Lawford',
      'Dunchurch',
      'Tom Brown',
      'Thomas Hughes',
      'finite state machine',
      '1,513',
      'Tally-ho'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Rugby and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Thomas Hughes, Tom Brown\'s School Days (ebook 1480).', url: 'https://www.gutenberg.org/ebooks/1480' }
    ],
    rejectedClaims: [
      'The origin of rugby football and William Webb Ellis: not in the novel, not claimed.',
      'The school\'s name: the novel does not print "Rugby School", so the page does not quote it.',
      'The novel\'s fights and bullying: not described.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: only the novel\'s own phrase about Dunchurch, quoted as the novel\'s.',
      'Sterling prices: none.'
    ]
  }
};
