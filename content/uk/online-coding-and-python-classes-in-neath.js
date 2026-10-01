'use strict';
// Neath (cg- town page, UK cluster Phase 10, towns band B, row 555). Keyword slug per the owner's rotation, with the vibe
// coding / AI agents / how-to-think picks, FAQ and door links. Spine: what does "alphabetical order" mean when the
// alphabet is not English? (Collation: sorting Welsh street names by the Welsh alphabet with a custom Python sort key.)
// Data (read 30 September 2026): OpenStreetMap via one Overpass query, named highways in 51.635 to 51.70 N, 3.87 to
// 3.74 W: 1,197 ways, 678 distinct names; 413 ways carry name:cy, 240 distinct Welsh names. Three carry an accent
// (Clôs Llwyneryr, Glòs Santes Catrin, Stryd y Dŵr). Most common first words: Heol 70, Stryd 47, Clos 25, Rhodfa 10.
// Reference order: CLDR Welsh tailoring (ch, dd, ff, ng, ll, ph, rh, th after c, d, f, g, l, p, r, t; other letters in
// root order), case and accents ignored at the first level. Our run (scratchpad ntb/cy.py, cy2.py): Python sorted()
// puts 67 of 240 names in a different position and 79 pairs in the opposite order; casefold plus accent stripping still
// leaves 39 names and 42 pairs wrong. Five names contain "ng": Bryngwyn, Heol Llangatwg, Heol Longford, Stryd Whittington,
// Teras Rockingham; in none is it the Welsh letter ng, yet treating ng as n plus g changes no position in this list.
// Lesson family: collation / custom sort keys. Screened: "collation", "welsh alphabet", "digraph" 0 hits as a family;
// claimed in claims.txt. Neath Port Talbot county page = stack effect; Swansea = CUSUM.
// Place facts: Neath Port Talbot TS001 142,289. ONS 2021 BUA (published): Neath 40,730. postcodes.io: Neath (Welsh
// Castell-nedd, Town); suburban areas whose nearest postcode is in the Neath BUA: Cimla, Llantwit, Skewen (Sgiwen),
// Penrhiwtyn, Neath Abbey, Bryn-coch. Briton Ferry falls in the Baglan BUA and is left out.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'NEATH', label: 'Neath', blurb: 'Online coding and Python classes for Neath, with a project that sorts 240 Welsh street names by the Welsh alphabet and catches where Python gets it wrong.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-neath',
  code: 'ntb',
  accent: '#21600F',
  accentRationale: 'Neath: a valley green (7.65:1 contrast on white), chosen by hand as a muted tone kept clear of the other south Wales pages',
  pageType: 'city',
  place: {
    name: 'Neath',
    eyebrow: 'Neath, Neath Port Talbot, Wales',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Neath Port Talbot' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-wales', name: 'Wales' }],
  nav: [
    { label: 'Neath Port Talbot', href: '/coding-classes-in-neath-port-talbot' },
    { label: 'Swansea', href: '/best-coding-class-in-swansea' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Neath, Neath Port Talbot',
  title: 'Online Coding and Python Classes in Neath | Ages 6 to 67',
  description: 'Online coding and Python classes for Neath, Skewen, Cimla, Llantwit and Bryn-coch: live lessons with vibe coding and AI agents for ages 6 to 67. First lesson free.',
  ogDescription: 'Python lessons for Neath, with a project that sorts Welsh street names the Welsh way and finds where Python goes wrong.',
  twitterDescription: 'Neath coding and Python classes, live online for ages 6 to 67. Try the first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Online Coding and Python Classes for Neath',
    description: 'Live online coding, Python, AI and maths lessons for children, teenagers and adults in Neath and Neath Port Talbot, including a project on sorting text by the Welsh alphabet.'
  },

  h1: 'Online coding and Python classes in Neath',
  capsuleQ: 'Which online coding and Python classes are best for learners in Neath?',
  capsule: 'At the 2021 census the ONS built-up area of Neath (Castell-nedd) held 40,730 usual residents; Neath Port Talbot county borough as a whole held 142,289. Its suburbs in the gazetteer include Cimla, Llantwit, Skewen, Penrhiwtyn, Neath Abbey and Bryn-coch. Anyone in Neath from six to 67 can learn coding, Python, AI, vibe coding or maths with us; a tutor in India teaches each lesson live on camera, either privately or to a class of five to ten who share a level. The Neath project starts from something everyone assumes is solved: putting words in alphabetical order. Welsh has its own alphabet, with letters such as ll and dd, and Python\'s sort does not know it. Learners write a sort key that does. Try one lesson at no cost; staying on is USD 100 a month in a class or USD 150 a month for private sessions.',
  lead: 'Ask Python to sort a list of names and it compares them character by character, using the number each character has inside the computer. For English that mostly works. For Welsh it does not, because ll, dd, ff, ch, rh, th, ph and ng are single letters of the Welsh alphabet with their own places in it. Street signs in Neath are bilingual, and OpenStreetMap records the Welsh form of many street names. Learners take 240 of them and find out how far the computer\'s idea of order is from a Welsh reader\'s.',
  wa: 'Hello Modern Age Coders, we are in Neath and would like to try a free coding or Python lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Coding and Python courses for Neath',
    intro: 'Choose the one that fits the learner\'s age. Each starts with a free live lesson and needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: writing down the exact rule for putting things in order.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: a Scratch game made with AI help, then tested by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, with strings, sorting and the Neath collation project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to advanced work, including text handling and Unicode.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'About Neath',
      h2: 'Neath, Skewen, Cimla and Bryn-coch',
      intro: 'Census counts and gazetteer suburbs, each with a source.',
      body: [
        { kind: 'table', caption: 'People counted in March 2021 (ONS census)', head: ['Place', 'Usual residents'], rows: [
          ['Neath built-up area', '40,730'],
          ['Neath Port Talbot county borough', '142,289']
        ] },
        { kind: 'p', text: 'The county borough is a wider area that also includes Port Talbot, Baglan and the valleys to the north, so its total is a separate count, not a sum of towns. In the postcode gazetteer Cimla, Llantwit, Skewen (Sgiwen in Welsh), Penrhiwtyn, Neath Abbey and Bryn-coch are suburban areas, and for each the nearest postcode lies in the Neath built-up area; Briton Ferry falls in the neighbouring Baglan area and is left out. Schools teach the Curriculum for Wales and enter learners for WJEC GCSE and A level, so a Welsh school year is the easiest way to tell us where a learner is. Our lessons are taught in English.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'See the <a class="cg-inline-link" href="/coding-classes-in-neath-port-talbot">Neath Port Talbot page</a> and <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>. For why the thinking still matters when AI can write code, read <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Neath project',
      h2: 'Sorting Welsh street names by the Welsh alphabet',
      intro: '240 street names, one line of Python that gets them wrong, and a sort key that gets them right.',
      body: [
        { kind: 'p', text: 'One query to OpenStreetMap for named roads in and around Neath returned 1,197 road sections with 678 different names. On 413 of those sections mappers had also recorded a Welsh name, giving 240 distinct Welsh street names. Heol begins 70 of them, Stryd 47, Clos 25 and Rhodfa 10. Three contain an accented letter, among them Stryd y Dŵr. The learner\'s first move is the obvious one, sorted(names), and the second is to ask what a Welsh reader would expect instead.' },
        { kind: 'p', text: 'The expected order comes from the Welsh alphabet as the Unicode Common Locale Data Repository sets it out for computers: ch comes after c, dd after d, ff after f, ng after g, ll after l, ph after p, rh after r and th after t, each counting as one letter. Capital letters and accents are ignored when deciding order. In Python this becomes a key function: fold the case, strip the accents, then walk through each word taking two characters at a time whenever they form one of those letters, and turn every letter into its position in the alphabet.' },
        { kind: 'table', caption: '240 Welsh street names in Neath, compared with the Welsh alphabetical order, our Python run', head: ['Method', 'Names in the wrong position', 'Pairs in the wrong order'], rows: [
          ['sorted() with no key', '67', '79'],
          ['Lower case and accents removed', '39', '42'],
          ['Welsh letters as single units', '0', '0']
        ] },
        { kind: 'p', text: 'Plain sorted() failed in three separate ways. Capitals: it puts every capital Y before every small y, so Cwrt Y Gollen lands ahead of Cwrt y Cadno. Accents: the ô in Clôs Llwyneryr has a larger character number than any plain letter, so that street drops below every Clos name. And the Welsh letters themselves, which cause most of what is left once case and accents are cleaned up (a few more come from hyphens and apostrophes, which our key treats like spaces): in Welsh, Lon Fedwen comes before Llys Andrew, because l is an earlier letter than ll, and Heol Forster comes before Heol Ffranc. Python\'s character-by-character order sees two letter ls and puts Llys first.' },
        { kind: 'p', text: 'Five names contain the characters n and g together: Bryngwyn, Heol Llangatwg, Heol Longford, Stryd Whittington and Teras Rockingham. In none of them is it the Welsh letter ng. Bryngwyn joins bryn and gwyn, Llangatwg joins llan and a form of Catwg, and the other three are English names. A key that always reads ng as one letter is wrong five times here. Yet treating ng as n followed by g changes no position in the sorted list, because no two of these names differ only at that point. The learner writes that down as a lesson about testing: a bug that no current data exposes is still a bug.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Cards with Welsh words: sort them English style, then Welsh style, and count the swaps.' },
          { h3: 'Ages 11 to 15', p: 'Use sorted() with key=str.lower, then explain the names it still puts in the wrong place.' },
          { h3: 'Ages 15 and up', p: 'Write the full Welsh sort key, test it on all 240 names and design a test that catches the ng problem.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Street names are from OpenStreetMap under the Open Database Licence, as mapped on 30 September 2026; some Welsh names may be missing or mistyped. The letter order is the CLDR Welsh collation. The word splits in Bryngwyn and Llangatwg are standard Welsh, and the counts are from our own code.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why it matters for AI',
      h2: 'What Welsh sorting teaches about AI and text',
      intro: 'Language models, search boxes and spreadsheets all have to decide what "in order" and "the same word" mean.',
      body: [
        { kind: 'table', caption: 'From the Neath street list to AI and software', head: ['In the project', 'In AI and coding'], rows: [
          ['sorted() put 67 of 240 names out of place', 'A default that suits English can quietly fail other languages'],
          ['Case and accents fixed only part of it', 'Clean the obvious problems, then look for the real one'],
          ['ll and ng look alike but behave differently', 'Rules about text need knowledge of the language, not just the characters'],
          ['The ng error changed nothing in this list', 'Passing tests may only mean the data never triggered the bug'],
          ['CLDR already defines Welsh order', 'Check for an existing standard before inventing your own']
        ] },
        { kind: 'p', text: 'AI systems break text into pieces before they can work with it, and those pieces are often chosen from data that is mostly English. A learner who has handled ll and dd by hand understands why a model might split a Welsh word strangely or rank Welsh search results oddly. In vibe coding, where the learner asks an AI assistant for a program and then checks it, the Neath list is an excellent test: ask the assistant to "sort these alphabetically" and see which of the three failures it avoids. Agents come after that, for learners whose Python is independent, usually in the later teens or as adults, and Copilot Studio agents are one-to-one only. Read <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We relied on open work by OpenStreetMap mappers, the Unicode Consortium, the ONS and postcodes.io, none of whom has any tie to Modern Age Coders; the sorting code and what we conclude from it are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From sorting cards to sort keys in Python',
    intro: 'We start from the Welsh school year and adjust after the free lesson.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Ordering, grouping and stating a rule precisely.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and early Python, with an AI helper whose output is tested.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and text', p: 'Strings, Unicode and sorting, alongside WJEC GCSE and A level.', courses: ['python-complete-masterclass-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python and AI agents', p: 'Serious Python first, then agents that read and write text.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Text and AI',
    h2: 'What is collation, and why does it matter for AI and search?',
    intro: 'Collation is the set of rules a computer uses to decide the order of words in a particular language, and it matters for AI and search because sorting, matching and ranking text all go wrong when a system applies English rules to a language such as Welsh.',
    p1: 'Sorting 240 Welsh street names in Neath with Python\'s default put 67 in the wrong place, and even after removing capitals and accents 39 were still out of order, because ll and ff are single Welsh letters.',
    p2: 'Having built the sort key, learners ask of any AI text tool: whose language rules is it following, and what does it do with mine?',
    closer: 'A Neath teenager who can make a computer respect the Welsh alphabet has learned to question defaults, and writing code is where that habit forms.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'How Neath learners are taught',
    intro: 'Learners take part from home with a laptop or desktop and a camera. A connection that stays up matters more than a fast one.',
    cells: [
      { h3: 'Learners write the code', p: 'Tutors explain and ask; the keyboard stays with the learner the whole time.' },
      { h3: 'Recommendation after the trial', p: 'We watch the learner work in the free lesson and only then suggest a course.' },
      { h3: 'The first session is free', p: 'It is a proper lesson, free of charge, and we do not ask for payment details.' },
      { h3: 'Classes of five to ten', p: 'Group members share a level, not a postcode, and come from all over the UK.' },
      { h3: 'Two lessons weekly', p: 'Let us know the Neath Port Talbot term dates and holiday weeks are left free.' },
      { h3: 'UK time, all year', p: 'When the clocks change, our tutor moves; your lesson time does not.' }
    ],
    spec: { title: 'Why live online lessons', p: 'A tutor on a live call can spot a wrong turn the moment it happens and ask about it. Drawing learners from across the UK also lets us put together groups that really are at one level.' }
  },

  fees: {
    h2: 'Fees for Neath learners',
    intro: 'Neath families pay our normal international fees.',
    first: 'A full first lesson free, closing with a course suggestion.',
    group: 'Group lessons, roughly eight each month.',
    private: 'One-to-one lessons, roughly eight each month.',
    closer: 'We charge in US dollars only and do not quote pounds. The trial is never billed; payment starts once the course and a fixed weekly time have been chosen. For holidays, absences and switching format, see the pricing page.'
  },

  reviewsH2: 'What Welsh and other UK families write about us on Google',

  book: {
    h2: 'Book a free lesson in Neath',
    intro: 'Share the learner\'s age or Welsh school year and a hobby. From that we plan the free session: perhaps putting Welsh word cards in order, a quick Scratch game with an AI sidekick, first lines of Python, or a sort key of their own.',
    success: 'Thank you. Your Neath request has arrived.'
  },

  faq: {
    h2: 'Neath: your questions',
    intro: 'On the Welsh sorting project, Python, AI and how lessons are organised.',
    items: [
      { q: 'How many people live in Neath?', a: 'Census 2021 found 40,730 usual residents in the Neath built-up area, and 142,289 in Neath Port Talbot county borough.' },
      { q: 'Do you teach coding and Python in Neath?', a: 'We do, over live video, to anyone aged 6 to 67 in Skewen, Cimla, Llantwit, Neath Abbey, Bryn-coch or elsewhere in town.' },
      { q: 'What is a sort key in Python?', a: 'A function you pass to sorted() that turns each item into the value Python should compare. For Welsh, the key turns each word into a list of Welsh alphabet positions.' },
      { q: 'What did the Neath project find?', a: 'Python\'s default sort put 67 of 240 Welsh street names in the wrong position. Ignoring capitals and accents still left 39 wrong, all because of Welsh letters such as ll and ff.' },
      { q: 'Why is Lon Fedwen before Llys Andrew in Welsh?', a: 'Because l and ll are different letters in the Welsh alphabet and l comes first. English order compares the second l with the o and puts Llys first.' },
      { q: 'What is vibe coding?', a: 'A way of making software in which you explain the goal to an AI, take the code it offers, and then run, probe and repair it yourself. Our learners do it with enough real coding behind them to spot a bad draft.' },
      { q: 'When can learners start on AI agents?', a: 'After they can write Python without support, which usually means older teenagers and adults. Copilot Studio agents are one-to-one only.' },
      { q: 'Is this useful for WJEC GCSE and A level?', a: 'Yes. Both involve programming, strings and algorithms. We do not promise any grade.' },
      { q: 'How much do lessons cost?', a: 'Nothing for the opening lesson. Continuing means USD 100 monthly as part of a class, or USD 150 monthly with your own tutor.' },
      { q: 'Can lessons pause in the holidays?', a: 'Yes. Tell us which weeks and we will not schedule them.' }
    ]
  },

  next: {
    eyebrow: 'South Wales',
    h2: 'More pages in south Wales',
    html: 'Visit <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a>, <a class="cg-inline-link" href="/coding-classes-in-bridgend">Bridgend</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-barry">Barry</a>, each with its own project. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> have the full list.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Neath and Neath Port Talbot',
  footerPlaces: [
    { href: '/coding-classes-in-neath-port-talbot', label: 'Neath Port Talbot' },
    { href: '/coding-and-ai-classes-in-wales', label: 'Wales' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-ntb .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3.4vw, 2.8rem); }
.cg-root.cg-ntb .cg-hero h1 { font-weight: 720; letter-spacing: -0.03em; line-height: 1.05; }
.cg-root.cg-ntb .cg-capsule { border-left: 2px solid var(--cg-accent); border-top: 2px solid var(--cg-accent); padding: 0.75rem 0 0 0.9rem; }
.cg-root.cg-ntb .cg-eyebrow { letter-spacing: 0.21em; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-ntb .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.021em; }
.cg-root.cg-ntb .cg-table caption { font-weight: 600; text-align: left; font-size: 0.91rem; }
.cg-root.cg-ntb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ntb .cg-table th { font-weight: 700; text-transform: none; letter-spacing: 0.02em; }
.cg-root.cg-ntb .cg-ladder-col { border-radius: 0; border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); }
.cg-root.cg-ntb .cg-callout { border-radius: 0 16px 0 16px; border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Neath Port Talbot (W06000012), Census 2021 TS001 usual residents 142,289. ONS 2021 BUA (published): Neath 40,730. Curriculum for Wales, WJEC GCSE and A level. postcodes.io: Neath (Castell-nedd, Town); suburban areas whose nearest postcode is in the Neath BUA: Cimla, Llantwit, Skewen (Sgiwen), Penrhiwtyn, Neath Abbey, Bryn-coch. Briton Ferry falls in the Baglan BUA.',
    localProject: 'OpenStreetMap, one Overpass query, named highways 51.635 to 51.70 N, 3.87 to 3.74 W: 1,197 ways, 678 names; 413 ways with name:cy, 240 distinct Welsh names; Heol 70, Stryd 47, Clos 25, Rhodfa 10; 3 with accents. Reference order CLDR Welsh collation (digraph letters after their first letter; case and accents ignored at primary level). Python sorted(): 67 of 240 out of position, 79 pairs reversed; casefold plus accent stripping: 39 and 42; Welsh key: 0. Five names contain n g (Bryngwyn, Heol Llangatwg, Heol Longford, Stryd Whittington, Teras Rockingham), none the Welsh letter ng; ng as one letter vs n plus g changes 0 positions. Lesson family: collation, custom sort keys, digraph tokenising.',
    requiredMentions: [
      '40,730',
      '142,289',
      'Cimla',
      'Skewen',
      'Penrhiwtyn',
      'Neath Abbey',
      'Bryn-coch',
      'Castell-nedd',
      'Lon Fedwen',
      'Bryngwyn'
    ],
    sources: [
      { claim: 'Unicode CLDR, Welsh (cy) collation tailoring: ch, dd, ff, ng, ll, ph, rh, th as letters after c, d, f, g, l, p, r, t.', url: 'https://github.com/unicode-org/cldr/blob/main/common/collation/cy.xml' },
      { claim: 'OpenStreetMap highway names and name:cy tags around Neath, via the Overpass API, 30 September 2026 (Open Database Licence).', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'Python documentation, sorting HOW TO and key functions.', url: 'https://docs.python.org/3/howto/sorting.html' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io places with Welsh names.', url: 'https://www.nomisweb.co.uk/sources/census_2021' }
    ],
    rejectedClaims: [
      'That every Neath street has a Welsh name recorded: only 413 of 1,197 mapped sections carry one.',
      'That the CLDR order is the only correct Welsh order: presented as the published computing standard; dictionaries treat compounds such as Bryngwyn by meaning, as the page explains.',
      'That any AI model mishandles Welsh in a specific way: stated as a reason to test, not a measured claim.',
      'Language statistics for Neath residents: none used.',
      'Suburbs outside the Neath BUA (Briton Ferry in Baglan; Aberdulais, Tonna, Llandarcy outside): left out.',
      'Sterling prices: none.'
    ]
  }
};
