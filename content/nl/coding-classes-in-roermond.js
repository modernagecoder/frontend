'use strict';
// Roermond: 61,431 residents, where the Roer flows into the Maas, a
// municipality that also takes in Swalmen, Herten, Maasniel and smaller
// villages. Spine (modest, per the Phase 5 method): its own place names show
// that a text search pattern matches letters, not meaning. Herten is also the
// Dutch word for deer, Leeuwen the word for lions, and Ool sits inside school.
// Every pattern trades precision (only right matches) against recall (all of
// them), and an AI-written pattern needs the same tests as a human one.

module.exports = {
  slug: 'coding-classes-in-roermond',
  code: 'rmd',
  accent: '#8D5E00',
  accentRationale: 'Roermond: a river-gravel ochre for the town of the Maasplassen, at least thirteen units from every page it links to, Limburg and its four other city pages among them, with an unlinked Amsterdam district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Roermond',
    eyebrow: 'Roermond, Limburg',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Limburg' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Roermond, Netherlands',
  title: 'Coding Classes in Roermond | Modern Age Coders',
  description: 'Live online coding, Python, AI and data classes for Roermond, Swalmen, Herten and Maasniel, ages 6 to 67, taught in English at a fixed hour. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and data in Roermond, on a page about village names, deer and lions, and why a search pattern matches letters, not meaning.',
  twitterDescription: 'Roermond classes for learners aged 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Roermond Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Roermond, taught in English.'
  },

  h1: 'Coding classes in Roermond, where the Roer meets the Maas',
  capsuleQ: 'What are the best coding classes in Roermond?',
  capsule: 'Roermond had 61,431 residents on 1 January 2026, the national statistics record, in a municipality that also takes in Swalmen, Herten, Maasniel, Merum, Leeuwen, Boukoul, Asenray, Ool and Asselt. The town lies where the Roer flows into the Maas. It received town rights in 1232, building of the Sint-Christoffelkathedraal began in 1410, and the Maasplassen, lakes left behind by gravel digging, are busy with visitors above all in summer. Its village names make a neat lesson in how computers search text. A pattern that looks for Herten also finds herten, the Dutch word for deer. One for Leeuwen finds lions and everyone called Van Leeuwen, and one for Ool finds school. A search pattern matches letters, not meaning, and every search trades catching everything against catching only the right things. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'Programmers search text with patterns, and the most common way to write them is the regular expression, a compact notation that every serious programming language understands. A pattern can say: find Herten, but only as a whole word, only with a capital H, only after in, naar or uit. Each extra rule removes some wrong matches and, very often, some right ones too. Engineers measure the result in two ways. Precision asks how much of what the search found was right. Recall asks how much of what it should have found it actually found. A loose pattern has high recall and poor precision; a strict one the reverse; and no pattern can read the sentence and know whether the writer meant a village or a herd of deer. That limit matters far beyond Roermond. It decides whether a spam filter blocks real mail, whether a school system flags the right pupils and whether a search through thousands of documents misses the one that counts, and AI assistants now write such patterns in seconds, confidently, often with exactly these gaps.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Roermond.',

  picks: {
    eyebrow: 'Course picks for Roermond',
    h2: 'Four courses for the town on the Roer and the Maas',
    intro: 'A child in Swalmen who wants to make a word game, a teenager in Maasniel curious about how search engines and spam filters work, a student in the centre building data tools, and an adult in Herten whose job means sifting through spreadsheets and email. Each one begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Word games in Scratch, where a child teaches the computer to spot a hidden word and finds out how easily it is fooled.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 14 to 18', note: 'Python for real data, including searching and cleaning text, with precision and recall measured instead of guessed.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Automation that reads files, mail and web pages, with every search pattern tested on examples that must and must not match.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Filters, lookups and AI tools in spreadsheets, and a clear sense of what a text search can and cannot tell apart.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Roermond today',
      h2: 'Town rights in 1232, a cathedral begun in 1410, and lakes dug from gravel',
      intro: 'The municipality covers 7,105 hectares, 6,064 of them land and 1,042 water, with a published density of 1,009 residents per square kilometre. The statistics office lists ten wijken: Centrum, Roermond-Oost, Roermond-Zuid, Maasniel, Donderberg, Hoogvonderen, Asenray, Herten, Swalmen and Maasplassen.',
      body: [
        { kind: 'table', caption: 'Roermond in the encyclopaedia, by date', head: ['Date', 'What happened'], rows: [
          ['1232', 'Roermond received town rights from Count Otto II'],
          ['13th century', 'the Munsterkerk was built, a cruciform basilica'],
          ['1410', 'building began on the church that is now the Sint-Christoffelkathedraal'],
          ['1864 to 1891', 'the Munsterkerk was restored by the architect Pierre Cuypers'],
          ['From the 19th century', 'gravel deposited by the Maas was dug out, on a large scale after the Second World War, and the pits became the Maasplassen'],
          ['2001', 'the Designer Outlet Roermond of McArthurGlen opened in the town'],
          ['1 January 2007', 'Swalmen joined Roermond, creating a central municipality of about 54,000 residents']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where two rivers meet', p: 'Roermond lies at the confluence of the Roer and the Maas, the encyclopaedia says, and the town takes its name from the smaller river.' },
          { h3: 'The Maasplassen', p: 'Gravel digging was scaled down after 1990 and the pits found a new use in water recreation, with beaches, marinas and campsites. Between Thorn and Roermond they form one recreation area of 15 square kilometres.' },
          { h3: 'An older population', p: 'Of the 61,431 residents counted for 2026, 14,243 are sixty-five or over and 16,409 are aged forty-five to sixty-five, together more than half.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Searching for a village',
      h2: 'Five names, and what a simple pattern finds instead',
      intro: 'Imagine a program asked to pick out every message that mentions a village in the municipality. The names are real; the problems they cause are ones every text search meets.',
      body: [
        { kind: 'table', caption: 'Village names as search patterns', head: ['Looking for', 'Loose pattern also finds', 'Tighter pattern', 'What no pattern can decide'], rows: [
          ['Swalmen', 'almost nothing else, because the word is rare', 'Swalmen', 'nothing, some names are simply easy'],
          ['Herten', 'herten, the Dutch word for deer', 'Herten, with a capital, as a whole word', 'a sentence that begins with Herten and is about deer'],
          ['Leeuwen', 'leeuwen, the word for lions, and the surname Van Leeuwen', 'Leeuwen as a whole word, not straight after van', 'which Leeuwen a message means'],
          ['Ool', 'school, pool and any word containing the letters', 'Ool as a whole word', 'whether a capitalised Ool is the village or a typing error'],
          ['Roermond', 'Roermondse, the adjective, inside longer words', 'Roermond as a whole word', 'whether the adjective should count at all']
        ] },
        { kind: 'p', text: 'In a regular expression, the marker \\b means a word boundary, so \\bOol\\b finds Ool but not school. Case rules, boundaries and the words around a match can all be written into the pattern, and each rule makes the search stricter. What cannot be written in is meaning. A computer reading we zagen herten in het bos sees the same six letters as one reading ik woon in Herten. People resolve the difference from context without noticing; a pattern resolves it only if someone foresaw it and wrote a rule, and every rule has exceptions of its own. That is why good programmers treat a search pattern as a claim to be tested. They collect examples that must match and examples that must not, run the pattern over both, and count what goes wrong before trusting it with thousands of messages.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Roermond in the national statistics',
      intro: 'The published figures for the municipality with their years, the encyclopaedia history, and the page\'s own checks at the end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '51,666 in 1995, 56,690 in 2013, 61,210 in 2025 and 61,431 on 1 January 2026. The 2025 count is 30,406 men and 30,804 women.' },
          { h3: 'Ages in 2026', p: '8,509 under fifteen, 6,447 aged fifteen to twenty-five, 15,823 aged twenty-five to forty-five, 16,409 aged forty-five to sixty-five, and 14,243 aged sixty-five and over.' },
          { h3: 'Households', p: '29,585 households in 2025, averaging 2.03 people: 12,340 of a single person and 17,245 of more, 8,848 of them with children.' },
          { h3: 'Homes and income', p: '29,894 dwellings in 2025, 16,143 owner-occupied and 13,452 rented, with an estimated average value of 311,000 euro. Average income was 33,200 euro per resident and 39,500 per income recipient in 2024, and 3.5 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '24 primary establishments teach 5,176 pupils and 6 secondary establishments teach 4,633; institutions in the municipality count 5,414 MBO, higher professional and university students together. By origin, 66 percent of residents are Dutch, 15 percent European and 19 percent from outside Europe; 81 percent were born in the Netherlands.' },
          { h3: 'The checks', p: 'The five age groups add up to 61,431 and the men and women to 61,210; the household types make 29,585. The owner-occupied and rented homes together are 299 short of the dwelling total, a gap the published row leaves unexplained, so the page does not fill it. The search example uses an invented set of messages.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Roermond, the Designer Outlet, the Maasplassen operators or any school in Limburg, and nothing on this page implies one. The statistics are those published for Roermond for the years stated. The town rights, the churches, the confluence, the Maasplassen, the outlet, the villages and the 2007 merger come from the encyclopaedia entries for the town, the municipality and the Maasplassen, which give their own population figures from other sources; those are not combined with the statistics here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Write the search, then measure how wrong it is',
      intro: 'Learners build a small program that picks out messages about the village of Herten, and discover that the honest answer to how good is it comes in two numbers, not one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Make a test set', p: 'Write twenty short messages by hand and label each one: about the village, about deer, or about neither. The labels are the truth the program will be judged against, and writing them shows how often people disagree.' },
          { h3: '2. Try three patterns', p: 'Run a loose pattern, a whole-word pattern and a strict one over the messages, and record for each what it found and how many of those it got right.' },
          { h3: '3. Work out both scores', p: 'Precision is right matches divided by everything found. Recall is right matches divided by everything that should have been found. Then decide which mistake costs more in the job the search is for.' }
        ] },
        { kind: 'table', caption: 'Twenty invented messages: 8 about the village (one headed HERTEN in capitals), 5 about deer (one starting a sentence), 7 about neither', head: ['Pattern', 'Found', 'Right', 'Precision', 'Recall'], rows: [
          ['herten, in any capitals', '13', '8', '61.5 percent', '100 percent'],
          ['Herten, capital H, whole word', '8', '7', '87.5 percent', '87.5 percent'],
          ['Herten straight after in, naar or uit', '5', '5', '100 percent', '62.5 percent']
        ] },
        { kind: 'callout', h3: 'Why AI does not make the problem go away', p: 'Ask an AI assistant for a regular expression and it will produce one in seconds, usually neat, often correct for the example you gave, and rarely tested against the cases you did not think of. It may catch school when you asked for Ool, or miss HERTEN in a heading, and it will present either result with the same confidence. The newer approach, asking a language model to judge whether each message is about the village, handles meaning far better than any pattern, yet it still makes mistakes, costs more per message and can give different answers on different days. Both approaches need the same discipline: a labelled test set, a count of what was found and what was missed, and a decision about which error matters more. A filter for urgent complaints should favour recall and accept some extra messages; a filter that deletes mail should favour precision and let doubtful cases through. A learner who has scored three patterns on twenty messages about Herten understands that choice, and can hold an AI tool to it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for searching text without fooling yourself',
      intro: 'For spam filters, school projects, spreadsheets, logs and AI-built tools. Taught from a municipality whose own village names double as ordinary Dutch words.',
      body: [
        { kind: 'table', caption: 'Text search you can trust', head: ['Habit', 'In practice', 'What it avoids', 'What it gives'], rows: [
          ['Examples before patterns', 'List what must match and what must not before writing anything', 'Patterns tuned to a single example', 'A test that shows the gaps'],
          ['Mark word boundaries', 'Match whole words unless parts of words are really wanted', 'School found when Ool was meant', 'Fewer accidental matches'],
          ['Decide on capitals', 'Choose deliberately whether case matters', 'Headings in capitals silently missed', 'Predictable behaviour'],
          ['Measure both scores', 'Report precision and recall, not a vague sense that it works', 'A search that looks fine and is not', 'Honest numbers to improve'],
          ['Keep a person for meaning', 'Send doubtful matches to a human, or to a tested AI check', 'Deer counted as villagers', 'Decisions where they belong']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A hidden-word game in Scratch: the child hides village names inside longer words and sees which ones the computer spots, and which ones fool it.' },
          { h3: 'For teenagers', p: 'Regular expressions in Python on a labelled set of messages, then the same task given to an AI model, with precision and recall worked out for both.' },
          { h3: 'For adults', p: 'The filters and lookups already in use at work, rebuilt with a test list, so that a weekly report or a mail rule does what everyone assumes it does.' }
        ] },
        { kind: 'p', text: 'This section uses the municipality\'s village names as its examples and an invented set of messages for the scores. It says nothing about how any organisation in Roermond searches or filters its text.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a hidden-word game to searches with measured accuracy',
    intro: 'The free lesson sets the starting level by watching the learner at work on a real task. Age and school year are not what decide it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Hidden words', p: 'Children hide words in games and discover how a computer spots them.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Finding patterns', p: 'Learners write their first searches in Python and test them on examples.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Scoring a search', p: 'Teenagers write regular expressions and measure precision and recall.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Filters that work', p: 'Adults build and test the searches and AI checks their work depends on.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can write a search pattern in seconds. Why should a teenager in Roermond learn to test one?',
    intro: 'Because a pattern that looks right and a pattern that is right can only be told apart by counting.',
    p1: 'A regular expression is dense, and most people cannot tell by reading it what it will catch. That makes AI help very welcome, and slightly dangerous: the assistant writes something plausible, checks it against the one example in the question, and hands it over. Whether it also catches school, misses a heading in capitals or treats deer as villagers only shows up when it runs on real text, and by then its results may already be in a report or a deleted folder.',
    p2: 'A learner who has labelled twenty messages, run three patterns over them and worked out precision and recall knows what to ask of any search, written by a person or a model. Deciding what counts as a correct match, choosing which mistake is cheaper and insisting on a test set are human decisions. The model can write the pattern. Knowing how good it is remains the programmer\'s job.',
    closer: 'So the case for a child in Roermond learning to code in 2026 is not the outlet or the lakes. It is that people who can measure whether a search, a filter or an AI check actually works will be needed wherever computers sort through words, which is everywhere.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A live class for every village in the municipality',
    intro: 'From Swalmen in the north to Herten in the south, the municipality stretches along the Maas, and an online lesson reaches each village at the same moment.',
    cells: [
      { h3: 'From the kitchen table', p: 'A learner in Boukoul and a learner in the centre of Roermond join the same class from home, and nobody crosses a bridge to get there.' },
      { h3: 'Dutch school terms kept', p: 'Groep 8, brugklas, vmbo, havo, vwo and the profiel stay in Dutch, as Roermond families say them, while all teaching is in English.' },
      { h3: 'The first lesson costs nothing', p: 'It is a proper lesson on a proper task. Afterwards the teacher suggests a level, a course and a regular hour, and asks for no card or bank details.' },
      { h3: 'Groups across borders', p: 'Five to ten learners at one level. Roermond has 8,509 residents under fifteen, too few to fill every stage at every hour, so groups include learners from elsewhere in the Netherlands and abroad.' },
      { h3: 'Regio Zuid holidays', p: 'Two lessons a week, around eight a month, at a fixed time, with breaks for the regio Zuid school holidays that Limburg follows.' },
      { h3: 'Teaching from India', p: 'The teachers are three and a half hours ahead of Roermond in summer and four and a half in winter, so late afternoons, evenings and weekend mornings all suit.' }
    ],
    spec: { title: 'Thirty schools, ten villages, and one group online', p: 'Roermond has 24 primary establishments teaching 5,176 pupils and 6 secondary establishments teaching 4,633. A coding group needs five learners who match on stage, subject and hour, and they are found far more easily among learners aged 6 to 67 in many countries than within one municipality.' }
  },

  fees: {
    h2: 'What classes cost in Roermond',
    intro: 'Every price, in one place.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'The fee is set in US dollars and is the same in every country, with no separate euro price, so a family in Swalmen pays what a family in Maasniel pays. Nothing is due until the free lesson has fixed a course and an hour, and payment is then arranged on WhatsApp. Pausing, changing format and missed lessons are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, word for word',

  book: {
    h2: 'What can the learner already do?',
    intro: 'The first task might be a hidden-word game, a first search written in Python, or a regular expression scored against a set of test messages.',
    success: 'Thank you. Your Roermond class request has been sent.'
  },

  faq: {
    h2: 'Roermond coding class questions',
    intro: 'The town, its villages, its figures, and the lessons.',
    items: [
      { q: 'Which villages belong to the municipality of Roermond?', a: 'The encyclopaedia lists Roermond itself with Swalmen, Herten, Maasniel, Merum, Leeuwen, Boukoul, Asenray, Ool and Asselt. Swalmen joined on 1 January 2007.' },
      { q: 'How many people live in Roermond?', a: 'The national count was 61,431 on 1 January 2026, in 29,585 households in 2025. It was 56,690 in 2013.' },
      { q: 'How old is Roermond?', a: 'Roermond received town rights in 1232 from Count Otto II, the encyclopaedia records. The Munsterkerk dates from the 13th century, and building of the church that is now the Sint-Christoffelkathedraal began in 1410.' },
      { q: 'How were the Maasplassen made?', a: 'They are pits left by digging gravel that the Maas had deposited. Digging began in the 19th century, grew after the Second World War and was scaled down after 1990, and the lakes became an area for water sports, beaches, marinas and campsites.' },
      { q: 'How many schools are there in Roermond?', a: 'The statistics count 24 primary establishments teaching 5,176 pupils and 6 secondary establishments teaching 4,633, with 5,414 MBO, higher professional and university students at institutions in the municipality. This page rates no school.' },
      { q: 'What is a regular expression?', a: 'A short pattern that describes text to search for, such as a word with a capital letter that stands on its own. Almost every programming language supports them, and learners on this page use them to find village names without catching deer, lions or school.' },
      { q: 'What language are lessons in, and when do they happen?', a: 'In English, with Dutch school terms such as brugklas, havo and vwo kept as they are. The teachers work from India, three and a half hours ahead of Roermond in summer and four and a half in winter, so lessons fit late afternoons, evenings and weekend mornings. The time is agreed in the free lesson, and regio Zuid holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Roermond?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Roermond coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Limburg and beyond',
    h2: 'Down the Maas, up the Maas, and back to the hub',
    html: 'Roermond is the town of Midden-Limburg on the province page, <a class="cg-inline-link" href="/coding-classes-in-limburg">coding classes in Limburg</a>, which lists all 31 municipalities. Upstream on the Maas lies <a class="cg-inline-link" href="/coding-classes-in-maastricht">Maastricht</a>, downstream <a class="cg-inline-link" href="/coding-classes-in-venlo">Venlo</a>, and the south of the province has pages for <a class="cg-inline-link" href="/coding-classes-in-sittard-geleen">Sittard-Geleen</a> and <a class="cg-inline-link" href="/coding-classes-in-heerlen">Heerlen</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Roermond, Limburg and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-limburg', label: 'Limburg' },
    { href: '/coding-classes-in-venlo', label: 'Venlo' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-rmd .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3vw, 2.4rem); }
.cg-root.cg-rmd .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.04; }
.cg-root.cg-rmd .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-rmd .cg-eyebrow { letter-spacing: 0.2em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rmd .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.014em; }
.cg-root.cg-rmd .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-rmd .cg-card { border-radius: 12px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-rmd .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-rmd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rmd .cg-table td:nth-child(2) { font-style: italic; }
.cg-root.cg-rmd .cg-ladder-col { border-left: 2px solid var(--cg-accent); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Roermond, Limburg: 61,431 residents (statistics, 1 January 2026), 61,210 (2025), 56,690 (2013), 51,666 (1995); 30,406 men and 30,804 women (2025); ages (2026) 8,509 under fifteen, 6,447 fifteen to twenty-five, 15,823 twenty-five to forty-five, 16,409 forty-five to sixty-five, 14,243 sixty-five or over (summing to 61,431); 29,585 households (2025) averaging 2.03, 12,340 one-person, 17,245 multi-person, 8,848 with children; 7,105 hectares, 6,064 land, 1,042 water, published density 1,009; 29,894 dwellings (2025), 16,143 owner-occupied at 54 percent, 13,452 rented at 45 percent, 299 unaccounted for in the row; estimated average value 311,000 euro; income 33,200 euro per resident and 39,500 per recipient (2024); 3.5 percent in poverty; origin (2025) 66 percent Dutch, 15 percent European, 19 percent non-European, 81 percent born in the Netherlands; 10 wijken (Centrum, Roermond-Oost, Roermond-Zuid, Maasniel, Donderberg, Hoogvonderen, Asenray, Herten, Swalmen, Maasplassen); 24 primary establishments with 5,176 pupils, 6 secondary with 4,633; 5,414 MBO, HBO and WO students together. Encyclopaedia (town): town rights in 1232 from Count Otto II; the Munsterkerk a cruciform basilica of the 13th century, restored by Pierre Cuypers 1864 to 1891; building of the church now the Sint-Christoffelkathedraal began in 1410; the Designer Outlet Roermond of McArthurGlen established in 2001; the Maasplassen formed by dredging gravel and used above all in summer by many recreationists; Roermond lies at the confluence of the Roer and the Maas; the town figure of 42,880 (2023) and 45.01 square kilometres not combined with the statistics. Encyclopaedia (municipality): villages Roermond, Swalmen, Herten, Maasniel, Merum, Leeuwen, Boukoul, Asenray, Ool, Asselt; on 1 January 2007 Swalmen joined, creating a central municipality of about 54,000; infobox 61,439 not combined. Encyclopaedia (Maasplassen): gravel pits from gravel deposited by the Maas; digging began in the 19th century, large-scale after the Second World War, scaled down after 1990; about 30 square kilometres in all; the area between Thorn and Roermond a contiguous recreation area of 15 square kilometres; beaches, water sports areas, nature areas, marinas and campsites. Regio Zuid holidays. The city page teaches text search, regular expressions and precision versus recall.',
    localProject: 'A search pattern matches letters, not meaning. Roermond\'s villages make the examples: Herten is also the Dutch word for deer, Leeuwen the word for lions and a common surname, Ool sits inside school and pool, and Roermond inside the adjective Roermondse, while Swalmen is simply rare. Regular expressions add word boundaries, case rules and context, each trading recall for precision. A worked set of twenty invented messages (8 about the village with one headed HERTEN, 5 about deer with one starting a sentence, 7 neither) scores three patterns: any-case herten finds 13 with 8 right (precision 61.5, recall 100), capitalised whole word finds 8 with 7 right (87.5 and 87.5), after in, naar or uit finds 5 with 5 right (100 and 62.5). For AI, assistant-written patterns are plausible and rarely tested, and model-based classification handles meaning better but still errs, costs more and varies; both need a labelled test set and a decision about which error costs more (recall for urgent complaints, precision for deletion). Chosen after a case-sensitive check found no page using regex, regular expression, pattern match, false positive or word boundary. Distinct from Veenendaal, which concerns how language models cut text into tokens, from Hengelo, which concerns noise defined by the question, and from Bergen op Zoom, which concerns what tests can prove.',
    requiredMentions: [
      '51,666',
      '56,690',
      '30,406',
      '30,804',
      '8,509',
      '6,447',
      '15,823',
      '16,409',
      '14,243',
      '29,585',
      '12,340',
      '17,245',
      'Munsterkerk',
      'Boukoul'
    ],
    sources: [
      { claim: 'Gemeente Roermond: 61,431 inwoners (2026), 61,210 (2025), 56,690 (2013), 51,666 (1995); mannen 30,406, vrouwen 30,804 (2025); ages 0-15 8,509, 15-25 6,447, 25-45 15,823, 45-65 16,409, 65+ 14,243 (2026); 29,585 huishoudens, 12,340 eenpersoons, 17,245 meerpersoons, 8,848 met kinderen, gemiddeld 2.03; 7,105 hectare, land 6,064, water 1,042; bevolkingsdichtheid 1,009; woningvoorraad 29,894, koop 16,143 (54 percent), huur 13,452 (45 percent); gemiddelde WOZ 311,000 euro (2025); gemiddeld inkomen per inwoner 33,200 and per inkomensontvanger 39,500 euro (2024); personen in armoede 3.5 percent; basisonderwijs 24 vestigingen 5,176 leerlingen, voortgezet onderwijs 6 vestigingen 4,633 leerlingen; MBO, HBO and WO 5,414 together; geboren in Nederland 81 percent; herkomst Nederland 66 percent, Europa 15 percent, buiten Europa 19 percent; 10 wijken: Centrum, Roermond-Oost, Roermond-Zuid, Maasniel, Donderberg, Hoogvonderen, Asenray, Herten, Swalmen, Maasplassen.', url: 'https://allecijfers.nl/gemeente/roermond/' },
      { claim: 'Roermond (town, encyclopaedia): In 1232 verkreeg de plaats stadsrechten van graaf Otto II. Munsterkerk, een kruisbasiliek, gebouwd in de 13e eeuw en gerestaureerd door de beroemde architect Pierre Cuypers in de jaren 1864-1891. In 2001 werd in de stad het Designer Outlet Roermond van McArthurGlen gevestigd. Deze plassen, die ontstaan zijn door het baggeren van grind, worden vooral in de zomer gebruikt door veel recreanten. Roermond ligt aan de samenvloeiing van de Roer en de Maas. In 1410 werd begonnen met de bouw van deze kerk (Sint-Christoffelkathedraal). Infobox: 42.880 inwoners (2023-01-01), 45,01 km2.', url: 'https://nl.wikipedia.org/wiki/Roermond_(stad)' },
      { claim: 'Roermond (municipality, encyclopaedia): kernen Roermond, Swalmen, Herten, Maasniel, Merum, Leeuwen, Boukoul, Asenray, Ool, Asselt; per 1 januari 2007 een centrumgemeente van ca. 54.000 inwoners is ontstaan (Swalmen and Roermond); infobox 61.439 inwoners (1 jan 2026), 71,05 km2.', url: 'https://nl.wikipedia.org/wiki/Roermond_(gemeente)' },
      { claim: 'Maasplassen (encyclopaedia): De Maasplassen zijn grindgaten, ze ontstonden door de winning van grind dat er voorkomt dankzij afzetting door de Maas. Grindwinning aan de Maas begon al in de 19e eeuw. Na de Tweede Wereldoorlog begonnen ondernemingen de uiterwaarden grootschalig af te graven. Na 1990 is de grindwinning afgebouwd. Hun gezamenlijke oppervlakte bedraagt ongeveer 30 km2. Een nieuwe bestemming werd gevonden in de waterrecreatie. Er kwamen stranden, watersportgebieden, natuurgebieden, jachthavens en campings. Het plassengebied tussen Thorn en Roermond vormt een 15 km2 groot aaneengesloten recreatiegebied.', url: 'https://nl.wikipedia.org/wiki/Maasplassen' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Village population figures. The encyclopaedia lists figures for each village, but they sum to more than the municipal total, so they are left out rather than explained.',
      'Visitor numbers for the Designer Outlet. The source read gives none.',
      'The dates of earlier mergers of Maasniel and Herten. Only the 2007 Swalmen merger was read in a quoted sentence.',
      'Any comparison of the encyclopaedia figures (42,880 for the town, 61,439 for the municipality) with the statistics. Two sources that disagree is the Breda argument.',
      'Any claim about how any organisation, school or company in Roermond searches or filters text.',
      'Anything the Limburg, Maastricht, Venlo, Sittard-Geleen and Heerlen pages own, including their figures and arguments.'
    ]
  }
};
