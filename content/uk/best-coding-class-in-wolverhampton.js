'use strict';
// Wolverhampton (cg- city page, UK cluster Phase 4). Spine: the city's own name is its most expensive prefix.
// NaPTAN (DfT API, administrative area 430, read 21 September 2026), filtered to locality or parent locality
// Wolverhampton (scratchpad cov/trie.py): 1,363 active bus stops (1,335 on-street, 28 bus station bays) across
// 71 localities, 655 distinct stop names, mean name length 13.89 characters. A trie of the lower-cased names
// has 7,003 nodes against 9,095 letters in all the names. Shortest unique prefix (letters a passenger must type
// before one name is the only match): mean 5.12, median 4, maximum 15; 183 names become unique at 3 letters,
// 133 at 4; six names can never be singled out by typing alone because each is the start of a longer name
// (Bentley Bridge and Bentley Bridge Retail Park, Goldthorn Hill and Goldthorn Hill Road, Hall La and Hall Lane,
// Lord Street and Lord Street West, Park Lane and Park Lane Bus Garage, Parkfield and Parkfield Road); the
// names that need all 15 letters begin "Wolverhampton " (Science Park, Road, Grammar School, Bus Station),
// with Goldthorn Hill Road and Bentley Bridge Retail Park. Lesson family: tries (prefix trees) and shortest
// unique prefixes for autocomplete. Screened free site-wide on 21 September 2026 (trie, prefix tree: 0 hits).
// Place facts read raw on 21 September 2026: Nomis Census 2021 TS001 (263,727 usual residents; 260,321 in
// households; 3,406 in communal establishments), TS007A (aged 5 to 9 6.7% and 10 to 14 6.8%, 17,997 people,
// against England 5.9% and 6.0%; aged 20 to 24 6.0%, equal to England; band total 263,726, never summed),
// TS068 (55,885 schoolchildren and full-time students of 247,402 residents aged 5 and over, 22.6%; England
// 20.4%); University of Wolverhampton key facts and campus pages (over 30,200 students and almost 2,000 staff;
// campuses in Wolverhampton, Walsall and Telford; City Campus in the city centre; the Springfield site, where
// the Springfield brewery once stood, with the School of Architecture, Computing and Engineering and the
// National Brownfield Institute). City status dates appeared only in search summaries and are not used; the
// Wolverhampton Art Gallery and Bantock House pages returned 404.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'WOLVERHAMPTON', blurb: 'A city of young families, with a project that builds a trie of 655 bus stop names and finds its own name costs the most.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-wolverhampton',
  code: 'wlv',
  accent: '#711414',
  accentRationale: 'Wolverhampton: a deep claret from the solver (9.40:1 on every paper tint, dE 7.9 from the nearest used accent), strong and warm for a Black Country city',
  pageType: 'city',
  place: {
    name: 'Wolverhampton',
    eyebrow: 'Wolverhampton, West Midlands, England',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Wolverhampton, England',
  title: 'Best Coding Classes in Wolverhampton | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Wolverhampton learners aged 6 to 67, from Tettenhall to Bilston, taught live each week. First lesson free.',
  ogDescription: 'Coding and AI classes for Wolverhampton, on a page where a trie of 655 bus stop names shows the city\'s own name takes fifteen letters to type.',
  twitterDescription: 'Wolverhampton coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '21 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Wolverhampton Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in Wolverhampton, taught live in English.'
  },

  h1: 'Coding classes in Wolverhampton',
  capsuleQ: 'What are the best coding classes in Wolverhampton?',
  capsule: 'Wolverhampton counted 263,727 residents at the 2021 Census, and more school-age children than England as a whole: children aged 5 to 9 were 6.7% of the city and those aged 10 to 14 were 6.8%, where England\'s figures were 5.9% and 6.0%. The University of Wolverhampton teaches over 30,200 students, with computing on its Springfield site. Modern Age Coders runs live online lessons for Wolverhampton learners aged six to sixty-seven: small groups of five to ten sorted by ability, or one-to-one teaching, from teachers in India at a weekly time fixed on the UK clock. The first lesson is on us; after it, USD 100 a month covers a group place and USD 150 a month a private one.',
  lead: 'Start typing a bus stop name into a journey planner and it offers suggestions after a letter or two. How many letters do you actually need before only one stop matches? For Wolverhampton\'s 655 distinct stop names, the answer comes from a trie, a tree where every name is spelled out one letter per branch and names that begin alike share their first branches. Build it and the average comes out at just over five letters. But the names that need the most typing are not the long, obscure ones. They are the stops that start with the word Wolverhampton: Wolverhampton Science Park, Wolverhampton Road, Wolverhampton Grammar School and Wolverhampton Bus Station all need fifteen letters, because the city\'s name, plus the space after it, tells you nothing until the next word begins. Six stops can never be picked out by typing at all. Finding them, and understanding why, is the lesson Wolverhampton\'s own bus network teaches our teenage learners here.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for a learner in Wolverhampton.',

  picks: {
    eyebrow: 'Course picks for Wolverhampton',
    h2: 'Four courses for a city with plenty of young coders',
    intro: 'Choose by what the learner enjoys making. A free live lesson comes first in every case, with no payment details.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 11', note: 'Scratch stories and games, including a word game that guesses a stop name from its first few letters.' },
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'From blocks to simple apps and AI, grouped by age, for Wolverhampton\'s many primary-age learners.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Trees and tries built by hand, and the question of how few letters identify a name.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Ages 13 to 18', note: 'An autocomplete box for a web page, written in JavaScript and powered by the learner\'s own trie.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Wolverhampton today',
      h2: 'A city with more children than the national average',
      intro: 'From the 2021 Census for the City of Wolverhampton local authority, via the Office for National Statistics tables on Nomis.',
      body: [
        { kind: 'table', caption: 'Wolverhampton in the 2021 Census', head: ['Figure', 'Wolverhampton', 'England'], rows: [
          ['People usually resident', '263,727', 'Not compared'],
          ['In households', '260,321', 'Not compared'],
          ['In communal establishments', '3,406', 'Not compared'],
          ['Children aged 5 to 9', '6.7% of residents', '5.9%'],
          ['Children aged 10 to 14', '17,997, or 6.8%', '6.0%'],
          ['Aged 20 to 24', '6.0%', '6.0%'],
          ['In school or full-time education, of the 247,402 aged five and over', '55,885, or 22.6%', '20.4%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Primary and lower secondary', p: 'Children aged 5 to 14 make up a noticeably larger slice of Wolverhampton than of England: 6.7% and 6.8% in the two five-year bands, against 5.9% and 6.0%.' },
          { h3: 'Early twenties, just average', p: 'Unlike some university cities, Wolverhampton\'s 20 to 24 age band sits exactly at the national 6.0%.' },
          { h3: 'The headline wins', p: 'The five-year age bands total 263,726, one below the headline count, because census tables are each adjusted for privacy. We use the headline figure and never total the bands.' }
        ] },
        { kind: 'p', text: 'For a coding class, that shape matters. A city with many children in primary school and the first years of secondary wants a strong start in Scratch and block coding, then a clear route into Python and GCSE computer science, and those are the stages we most often teach here.' }
      ]
    },
    {
      id: 'university', tint: 'tint', eyebrow: 'Computing in the city',
      h2: 'A university campus in the centre and a brewery turned engineering site',
      intro: 'From the University of Wolverhampton\'s own key facts and campus pages.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Over 30,200 students', p: 'The university says it has over 30,200 students and almost 2,000 staff, based at campuses in Wolverhampton and Walsall and also teaching at Telford.' },
          { h3: 'City Campus', p: 'Its Wolverhampton City Campus sits right in the centre of the city, which the university calls the beating heart of its operation.' },
          { h3: 'Springfield', p: 'On the Springfield site, where the Springfield brewery once stood, the university has placed its School of Architecture, Computing and Engineering and the National Brownfield Institute.' }
        ] },
        { kind: 'p', text: 'We have no connection with the university. We mention it because computing is taught on a former brewery site a short walk from the city centre, which makes a useful point for a child choosing GCSE options: the subject is not remote or abstract, it is part of the city\'s working life.' },
        { kind: 'spec', title: 'Where our lessons fit', p: 'Our classes do not replace school or university courses, and do not teach the exam specifications word for word. They build the programming and problem solving those courses assume, at an hour that works around the school day.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many letters to find a Wolverhampton bus stop?',
      intro: 'The Department for Transport\'s NaPTAN register lists every stop. We built a trie of Wolverhampton\'s stop names and measured the shortest unique prefix of each.',
      body: [
        { kind: 'table', caption: 'What the trie showed, from NaPTAN read 21 September 2026', head: ['Measure', 'Figure'], rows: [
          ['Active bus stops', '1,363, in 71 localities'],
          ['Distinct stop names', '655, averaging 13.89 characters'],
          ['Letters to make a name unique, on average', '5.12 (median 4)'],
          ['Names unique after three letters', '183'],
          ['Most letters needed', '15, for four names starting Wolverhampton and two others'],
          ['Names that typing alone can never single out', 'Six']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Build the tree', p: 'Each name is added letter by letter. Names that begin the same way share branches, so the 655 names need 7,003 nodes where the letters written out in full number 9,095.' },
          { h3: '2. Count at each branch', p: 'Every node records how many names pass through it. The first node on a name\'s path with a count of one is where that name becomes unique.' },
          { h3: '3. Find the stuck ones', p: 'Some names never reach a count of one, because a longer name continues past them: Park Lane sits inside Park Lane Bus Garage, Lord Street inside Lord Street West.' }
        ] },
        { kind: 'callout', h3: 'The city\'s own name is the dearest prefix', p: 'Wolverhampton Science Park, Wolverhampton Road, Wolverhampton Grammar School and Wolverhampton Bus Station each need fifteen letters. Thirteen letters of the city\'s name and a space identify nothing, because all four share them; only the first letter of the next word separates them. Goldthorn Hill Road and Bentley Bridge Retail Park also need fifteen, for a different reason: a shorter stop name, Goldthorn Hill or Bentley Bridge, sits inside each, so the longer name only becomes unique at the space that follows.' },
        { kind: 'p', text: 'One pair shows how a trie exposes untidy data. Hall La and Hall Lane both appear as stop names. A person reads them as the same street; a trie treats them as different, with Hall La permanently inside Hall Lane. Whether they are one street, two stops on one street or two different places is something only the register\'s other fields can answer, and learners check them rather than guess.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Building autocomplete',
      h2: 'Five habits for search boxes that behave',
      intro: 'Learned on bus stop names, used afterwards in search boxes, contact lists, code editors and any system that finishes a word for you.',
      body: [
        { kind: 'table', caption: 'How to build autocomplete that people can trust', head: ['Habit', 'What it looks like', 'What it prevents'], rows: [
          ['Normalise first', 'Lower-case the names and decide how to treat abbreviations such as La and Lane', 'Two spellings of one place competing'],
          ['Share the prefixes', 'Store names in a trie so common beginnings are held once', 'Scanning every name on every keystroke'],
          ['Count through each node', 'Keep a count of names below every branch', 'Guessing when a prefix is unique'],
          ['Handle names inside names', 'Mark where a whole name ends, even inside a longer one', 'Park Lane becoming impossible to select'],
          ['Rank the suggestions', 'Order the offered names by a sensible rule, such as how often each is chosen', 'Fifteen letters of typing for the busiest stop']
        ] },
        { kind: 'p', text: 'The last habit answers the callout. A well-built autocomplete does not make you type fifteen letters for the bus station; it can rank the stops people choose most often first, so a few letters are enough. A trie tells you what is unique; ranking decides what is useful, and learners write both.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'A guessing game where a program asks for one letter at a time and names the stop as soon as it can.' },
          { h3: 'Teenagers', p: 'A real trie in Python or JavaScript from the register, the shortest-prefix measurements, and a working autocomplete box.' },
          { h3: 'Adults', p: 'Cleaning and indexing a list of names at work, with the normalising rules written down before anything is searched.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Department for Transport, the City of Wolverhampton Council, the University of Wolverhampton or any bus operator, and nothing on this page suggests otherwise. The register is published for anyone to use.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a guessing game to an autocomplete you built',
    intro: 'Age bands are rough. A learner\'s first free lesson sets the real starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Letters and guesses', p: 'Programs that take one letter at a time and narrow down a list of words.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Lists and searching', p: 'Searching a list of names and counting how many match what has been typed so far.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Trees and tries', p: 'Building a trie, counting through its nodes and measuring shortest unique prefixes.', courses: ['problem-solving-dsa-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Ages 18 to 67', h3: 'Search at work', p: 'Indexing and searching real lists, with normalising rules and ranking that users notice.', courses: ['data-structures-algorithms-masterclass-college', 'full-stack-web-development-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Autocomplete is everywhere. Why should a Wolverhampton teenager learn to build it?',
    intro: 'Because the tool that finishes your words is making choices you cannot see.',
    p1: 'Every phone keyboard, search engine and AI assistant predicts the next letters or words. A trie is the simplest honest version of that idea: it can tell you exactly which names are still possible after each letter, and nothing more. Modern AI models go further and guess what you probably mean, which is useful and also opaque. A learner who has built the honest version understands what the clever version is adding, and what it might be hiding.',
    p2: 'The Wolverhampton names make the point concrete. A trie will never let you pick Park Lane by typing, because Park Lane Bus Garage always matches too. A ranked system solves that by choosing for you. Knowing that a choice has been made, and on what basis, is the difference between using a tool and trusting it blindly.',
    closer: 'So the case for a Wolverhampton child learning to code in 2026 is simple: the systems that complete our sentences are built from ideas a teenager can build in a few weeks, and building them is the surest way to understand what they do.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tettenhall, Bilston or Wednesfield, one screen away',
    intro: 'The city\'s stops spread across 71 localities, and a live online lesson reaches every one of them.',
    cells: [
      { h3: 'Straight from home', p: 'A learner in Penn and another in Whitmore Reans can join the same class from their own homes, with nobody crossing the ring road.' },
      { h3: 'English school stages', p: 'Reception, Key Stages 1 to 4, Year 9 options, GCSEs and A levels are named as Wolverhampton schools name them, and lessons are taught in English.' },
      { h3: 'Try it properly first', p: 'The first session is a real lesson with a real task, then honest advice on level, course and weekly time, and no request for card details.' },
      { h3: 'Classes by level', p: 'Five to ten learners at the same stage, from Wolverhampton, other parts of the UK and other countries, so every level has a practical time.' },
      { h3: 'A regular slot', p: 'Two lessons a week at the same time, about eight a month, with breaks around school holidays and revision decided with the teacher.' },
      { h3: 'Teaching from India', p: 'Our teachers keep Indian time all year, which runs four and a half hours ahead of Wolverhampton in summer and five and a half in winter, so after-school and evening slots fall inside their working hours.' }
    ],
    spec: { title: 'Plenty of younger learners', p: 'With more children aged 5 to 14 than the national average, Wolverhampton families ask us for early after-school slots more than most, and our teachers\' timetable suits that well.' }
  },

  fees: {
    h2: 'What classes cost in Wolverhampton',
    intro: 'Three prices, stated in full.',
    first: 'A complete first lesson at no charge, ending with a level, a suggested course and a proposed time.',
    group: 'Monthly teaching, usually eight lessons, in a group of five to ten learners of similar ability.',
    private: 'About eight lessons a month on the same pattern, with one teacher for one learner.',
    closer: 'The fees are in US dollars at the single rate we charge outside India, so families in Tettenhall and Bilston pay precisely the same, and we publish no pound prices. Charges begin only once the trial lesson has fixed the course and the weekly slot, and the pricing page covers breaks, missed lessons and switching between group and private teaching.'
  },

  reviewsH2: 'Six Google reviews, copied exactly',

  book: {
    h2: 'Request a first lesson in Wolverhampton',
    intro: 'We choose the first task for the learner: a letter-guessing game for a young child, a program that searches a list, or the stop register and a trie for a teenager who likes a challenge.',
    success: 'Thank you. A member of the team will be in touch about a Wolverhampton class.'
  },

  faq: {
    h2: 'Wolverhampton coding class questions',
    intro: 'What Wolverhampton parents and learners ask us most often.',
    items: [
      { q: 'How many people live in Wolverhampton?', a: 'The 2021 Census counted 263,727 usual residents in the City of Wolverhampton, 260,321 in households and 3,406 in communal establishments.' },
      { q: 'Does Wolverhampton have a lot of children?', a: 'More than average. In 2021, children aged 5 to 9 were 6.7% of residents and those aged 10 to 14 were 6.8%, against 5.9% and 6.0% across England.' },
      { q: 'What is the bus stop trie project?', a: 'Learners build a trie of Wolverhampton\'s 655 distinct bus stop names from the national NaPTAN register and measure how many letters each name needs before it is the only match. The average is 5.12.' },
      { q: 'Why do some stops need fifteen letters?', a: 'Because several names begin with the word Wolverhampton, so the city\'s name and the space after it do not tell them apart. Only the next word does.' },
      { q: 'Where does the university teach computing?', a: 'The University of Wolverhampton says its School of Architecture, Computing and Engineering is on its Springfield site, where the Springfield brewery once stood. We are not connected with the university.' },
      { q: 'What times are Wolverhampton lessons?', a: 'After school, in the evening or at weekends, with the time agreed in UK terms at the trial lesson. India runs four and a half hours ahead of Wolverhampton in summer and five and a half in winter.' },
      { q: 'Can lessons stop for exams or holidays?', a: 'Yes. Families regularly pause for GCSE and A level revision, the exam weeks and school holidays, arranging the dates with the teacher in advance.' },
      { q: 'Do you have a centre in Wolverhampton?', a: 'No. We run no premises in Wolverhampton or elsewhere in the UK, and teach entirely live online. A learner needs a computer with sound and a steady connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are Wolverhampton lessons?', a: 'The first is free. Then USD 100 a month for a place in a group of five to ten, with two live lessons a week or around eight a month, or USD 150 a month for private lessons on the same schedule. The course, format and slot are agreed first.', boiler: true },
      { q: 'How are learners grouped?', a: 'By ability and pace: five to ten learners working towards similar goals, regardless of age or where they live. If no group at the right level suits your time, we recommend one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Other West Midlands cities and beyond',
    html: 'Close by, <a class="cg-inline-link" href="/coding-classes-in-birmingham">Birmingham</a> and <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a> have their own pages, and Coventry uses the same stop register to teach a different lesson. Further north, <a class="cg-inline-link" href="/best-coding-class-in-manchester">Manchester</a> and <a class="cg-inline-link" href="/best-coding-class-in-leeds">Leeds</a> work with rivers and footfall. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out the school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links everything.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Wolverhampton and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-birmingham', label: 'Birmingham' },
    { href: '/best-coding-class-in-coventry', label: 'Coventry' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-wlv .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.75rem); }
.cg-root.cg-wlv .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.08; }
.cg-root.cg-wlv .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-wlv .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wlv .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.013em; }
.cg-root.cg-wlv .cg-grid-3 { gap: clamp(1.1rem, 2.8vw, 2.15rem); }
.cg-root.cg-wlv .cg-table caption { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-wlv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wlv .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-wlv .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Wolverhampton, Census 2021 via Nomis: TS001 City of Wolverhampton local authority (E08000031) 263,727 usual residents, 260,321 in households, 3,406 in communal establishments; TS007A aged 5 to 9 6.7 percent against England 5.9 percent, aged 10 to 14 17,997 (6.8 percent) against 6.0 percent, aged 20 to 24 6.0 percent equal to England (band total 263,726, never summed on the page); TS068 55,885 schoolchildren and full-time students of 247,402 residents aged 5 and over, 22.6 percent, against 20.4 percent in England. University of Wolverhampton key facts: over 30,200 students and almost 2,000 staff, campuses in Wolverhampton and Walsall and courses through partners; campus page adds Telford and describes Wolverhampton City Campus as right in the centre of the city; the Springfield site, where the Springfield brewery once stood, hosts the School of Architecture, Computing and Engineering and the National Brownfield Institute.',
    localProject: 'The city\'s own name is its most expensive prefix. NaPTAN, DfT API area 430, read 21 September 2026, locality or parent locality Wolverhampton: 1,363 active bus stops (1,335 BCT, 28 BCS) in 71 localities; 655 distinct CommonName values, mean 13.89 characters; lower-cased trie of 7,003 nodes against 9,095 letters; shortest unique prefix mean 5.12, median 4, maximum 15, distribution 1 letter 1, 2 letters 40, 3 letters 183, 4 letters 133, 5 letters 85, 6 letters 69; six names are proper prefixes of another name and can never be unique by typing (Bentley Bridge / Bentley Bridge Retail Park, Goldthorn Hill / Goldthorn Hill Road, Hall La / Hall Lane, Lord Street / Lord Street West, Park Lane / Park Lane Bus Garage, Parkfield / Parkfield Road); 15 letters needed for Wolverhampton Science Park, Wolverhampton Road, Wolverhampton Grammar School, Wolverhampton Bus Station, Goldthorn Hill Road and Bentley Bridge Retail Park. Lesson family: tries and shortest unique prefixes for autocomplete; distinct from union-find (Coventry, same register), fuzzy matching and Jaccard.',
    requiredMentions: [
      '263,727',
      '260,321',
      '3,406',
      '55,885',
      '247,402',
      '17,997',
      '5.12',
      'Springfield brewery',
      'National Brownfield Institute',
      '30,200',
      'Goldthorn Hill',
      'Bentley Bridge'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Wolverhampton: 263,727 usual residents; 260,321 in households; 3,406 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E08000031&measures=20100' },
      { claim: 'Nomis, Census 2021 TS007A: Wolverhampton and England five-year age bands (5 to 9, 10 to 14, 20 to 24).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E08000031,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Wolverhampton 55,885 students of 247,402 aged 5 and over (22.6 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E08000031,E92000001' },
      { claim: 'Department for Transport, NaPTAN access nodes API, area 430: Wolverhampton stop names, types, status and localities.', url: 'https://naptan.api.dft.gov.uk/v1/access-nodes?dataFormat=csv&atcoAreaCodes=430' },
      { claim: 'University of Wolverhampton key facts: over 30,200 students, almost 2,000 staff, campuses, the Springfield site and its schools.', url: 'https://www.wlv.ac.uk/university-life/key-facts/' },
      { claim: 'University of Wolverhampton campus page: Wolverhampton, Walsall and Telford campuses; City Campus in the city centre.', url: 'https://www.wlv.ac.uk/university-life/our-campus/' }
    ],
    rejectedClaims: [
      'The date Wolverhampton became a city: seen only in search summaries, so not stated.',
      'Wolverhampton Art Gallery and Bantock House facts: their pages returned 404.',
      'Whether Hall La and Hall Lane are the same street: not determined from the names alone, as the page says.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Department for Transport, the council, the University of Wolverhampton or any bus operator.'
    ]
  }
};
