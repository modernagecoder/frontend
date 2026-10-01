'use strict';
// Hatfield (cg- town page, UK cluster Phase 10, towns band B, row 551). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when a text changes, what is the smallest
// honest description of the change? (Myers diff: shortest edit script, against difflib and a position-by-position check.)
// Data (read 30 September 2026): English Wikipedia, article "Hatfield, Hertfordshire", three revisions fetched through the
// MediaWiki API: oldid 996519968 (27 December 2020, 26,938 bytes), 1313908684 (28 September 2025, 44,916 bytes) and
// 1377423271 (29 September 2026, 45,300 bytes). Only counts are used; no article text is reproduced.
// Our run (scratchpad htf/diff.py, verify.py, timing.py). One year, 2025 to 2026: 274 wikitext lines each; LCS 258, Myers
// D 32 (16 out, 16 in); position-by-position 263 of 274 differ. Words 4,594 to 4,601; LCS 4,544; D 107; position check 4,550.
// Five years, 2020 to 2025: lines 256 to 274, LCS 160, D 210; difflib default 224, difflib autojunk=False 210. Words 3,174 to
// 4,594, LCS 2,856, D 2,056 (not a required mention, used on another page); difflib default 2,202, autojunk=False 2,066.
// autojunk marked 6 words popular: the, and, of, in, Hatfield, "=". Every D checked against a full LCS table. Timing on
// this laptop: one-year word diff Myers 0.005 s vs table 6.18 s (21,136,994 cells); five-year Myers 2.1 s vs table 5.0 s.
// Lesson family: Myers O(ND) diff, shortest edit script. Screened: "myers" 0 hits in content/; claimed in claims.txt.
// Place facts: Welwyn Hatfield TS001 119,836 (a required mention on the Welwyn Garden City page, printed here only).
// ONS 2021 BUA (published): Hatfield 41,560. postcodes.io suburban areas whose closest postcode is in the Hatfield BUA:
// South Hatfield, Roe Green, Oxlease, Birchwood, Old Hatfield, Ellenbrook, Hatfield Garden Village (all AL10).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HATFIELD', label: 'Hatfield', blurb: 'Online coding and Python classes for Hatfield, with a project that writes the Myers diff in Python and runs it on three versions of a public article about the town.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-hatfield',
  code: 'htf',
  accent: '#36549C',
  accentRationale: 'Hatfield: a dusk blue (7.23:1 contrast on white), chosen by hand as a muted tone kept clear of the other Hertfordshire pages',
  pageType: 'city',
  place: {
    name: 'Hatfield',
    eyebrow: 'Hatfield, Welwyn Hatfield, Hertfordshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-of-england', name: 'East of England' }],
  nav: [
    { label: 'Hertfordshire', href: '/coding-classes-in-hertfordshire' },
    { label: 'East of England', href: '/coding-and-ai-classes-in-east-of-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Hatfield, Hertfordshire',
  title: 'Online Coding and Python Classes in Hatfield | Ages 6 to 67',
  description: 'Online coding and Python classes for Hatfield, South Hatfield, Roe Green and Oxlease: live lessons, vibe coding and AI agents for ages 6 to 67. First lesson free.',
  ogDescription: 'Python lessons for Hatfield, with a project that writes a text diff from scratch and tests it on three versions of a real article.',
  twitterDescription: 'Hatfield coding and Python classes, taught live online for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Online Coding and Python Classes for Hatfield',
    description: 'Live online coding, Python, AI and maths lessons for children, teenagers and adults in Hatfield and Welwyn Hatfield, including a project on how programs work out what changed between two versions of a text.'
  },

  h1: 'Online coding and Python classes in Hatfield',
  capsuleQ: 'Which online coding and Python classes are best for Hatfield learners?',
  capsule: 'Hatfield counted 41,560 usual residents as an ONS built-up area at the 2021 census. The wider borough of Welwyn Hatfield counted 119,836. Gazetteer suburbs inside the town include South Hatfield, Roe Green, Oxlease, Birchwood, Old Hatfield, Ellenbrook and Hatfield Garden Village. Modern Age Coders teaches coding, Python, AI, vibe coding and maths to Hatfield learners aged six to 67, live on video, with a tutor based in India, either one-to-one or in a group of five to ten at the same level. Our Hatfield project asks a question every programmer meets daily: when a file changes, what exactly changed? Learners write the Myers diff in Python and test it against the library that ships with Python. Your opening lesson is on us. Carrying on costs USD 100 per month for a seat in a small class, or USD 150 per month for a tutor to yourself.',
  lead: 'Every time a programmer saves a change, a tool compares the old file with the new one and reports what was added and what was removed. The report looks simple, yet producing the shortest possible report is a real search problem. In 1986 Eugene Myers published a method that finds it quickly when the two versions are mostly alike, and a version of his algorithm is still the default in Git. Hatfield learners code it themselves, then point it at three versions of the public encyclopedia article about their own town.',
  wa: 'Hello Modern Age Coders, we live in Hatfield and would like to book a free coding or Python lesson.',

  picks: {
    eyebrow: 'Suggested courses',
    h2: 'Python and coding courses for Hatfield',
    intro: 'Pick by age. Each course begins with a free live lesson, and no payment card is needed to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: comparing two lists by hand and spotting what moved, before any code.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children: an AI helps build a Scratch game, and the child checks every change it makes.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Complete Python for teenagers, with the Hatfield diff project as a milestone.' },
      { course: 'git-github-version-control-course-for-teens', band: 'Ages 13 and up', note: 'Git and GitHub, where diffs are read every day; the natural next step after this project.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town in numbers',
      h2: 'Hatfield, South Hatfield, Roe Green and Oxlease',
      intro: 'Two census counts and seven gazetteer names, each with its source.',
      body: [
        { kind: 'table', caption: 'Census 2021 usual residents, Office for National Statistics', head: ['Area', 'Residents'], rows: [
          ['Hatfield built-up area', '41,560'],
          ['Welwyn Hatfield borough', '119,836']
        ] },
        { kind: 'p', text: 'The borough figure is a separate count on a wider boundary: it also covers Welwyn Garden City, Welwyn, Brookmans Park and Cuffley. In the postcode gazetteer, South Hatfield, Roe Green, Oxlease, Birchwood, Old Hatfield, Ellenbrook and Hatfield Garden Village are all listed under AL10, and for each one the nearest postcode falls inside the Hatfield built-up area. Learners here follow the English national curriculum, so telling us a school year from Year 2 to Year 13 is the quickest way to place them. We support GCSE and A level computer science without replacing the school course.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a> covers the county, and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-welwyn-garden-city">Welwyn Garden City</a> shares the borough with Hatfield. Our view on why the basics still matter is in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Hatfield project',
      h2: 'The Myers diff: the shortest list of changes between two texts',
      intro: 'Three versions of one public article, one algorithm written by hand, and two ways of getting it wrong.',
      body: [
        { kind: 'p', text: 'The English Wikipedia article on Hatfield, Hertfordshire keeps every saved version. We fetched three through its public interface: 27 December 2020, 28 September 2025 and 29 September 2026. The page quotes none of the article; the learner only counts. Split into lines, the 2025 and 2026 versions each have 274. Split into words, they have 4,594 and 4,601. The question is how to describe the difference between them in as few insertions and deletions as possible.' },
        { kind: 'p', text: 'The first attempt most people make is to compare the texts position by position: line 1 with line 1, line 2 with line 2, and so on. On the one-year change that reports 263 of the 274 lines as different, although the two versions share 258 lines unchanged. One line added near the top shifts everything after it by one place, and a position check cannot see a shift. At word level the same check reports 4,550 differences, while 4,544 words in fact survive the year in order.' },
        { kind: 'p', text: 'Myers treats the problem as a walk across a grid: moving right deletes a word from the old version, moving down inserts one from the new version, and a diagonal step is free wherever the two words match. The shortest edit script is the path with the fewest non-diagonal steps. His algorithm explores the grid by number of edits, one extra edit at a time, and stops as soon as a path reaches the corner. When two versions are close, that happens early. In Python the core is a loop over a dictionary of how far each diagonal has reached, about twenty lines in all.' },
        { kind: 'table', caption: 'Hatfield article, edits needed to turn one revision into the next, our Python run', head: ['Comparison', 'Myers (shortest)', 'difflib, default settings', 'Position by position'], rows: [
          ['2025 to 2026, lines', '32', '32', '263 lines differ'],
          ['2025 to 2026, words', '107', '107', '4,550 words differ'],
          ['2020 to 2025, lines', '210', '224', 'not meaningful'],
          ['2020 to 2025, words', '2,056', '2,202', 'not meaningful']
        ] },
        { kind: 'p', text: 'For the close one-year pair, Python\'s built-in difflib agrees with Myers exactly. For the five-year pair it reports 14 more line edits and 146 more word edits than the shortest possible. The reason is a setting called autojunk. For long inputs, difflib ignores any item that is too common to be a useful anchor, and in the newer of the two texts that meant six words, including "the", "and", "of" and the name Hatfield itself. Switched off, difflib matches Myers on lines, 210 each, but is still 10 edits longer on words, because its method looks for long matching blocks first and never promised the shortest answer.' },
        { kind: 'p', text: 'Every Myers count was checked against the slow method: a full table of every word against every word, 21,136,994 cells for the one-year pair. On this laptop that took 6.18 seconds. Myers took 0.005 seconds on the same pair, because only a handful of edits separated the versions. On the five-year pair, with 2,056 edits, Myers needed 2.1 seconds against 5.0 for the table, so the speed advantage shrinks as the difference grows, which is exactly what the O(ND) in the paper\'s title predicts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Two lists of ten fruit, one with an item slipped in. Line them up by position, then by matching, and count the changes each way.' },
          { h3: 'Ages 11 to 15', p: 'Write a longest-common-subsequence table in Python for short sentences and read the edits back off it.' },
          { h3: 'Ages 15 and up', p: 'Code the Myers loop, test it against the table, then time both on the three Hatfield revisions.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Revision texts are from English Wikipedia, used under its Creative Commons licence; we report counts only. The algorithm is from Myers (1986) in Algorithmica. Timings depend on the machine. The splits into lines and words are our choice, and a different split would give different counts.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why this matters with AI',
      h2: 'Diffs are how people check what an AI changed',
      intro: 'When an assistant edits code, the change arrives as a diff, and reading it is the review.',
      body: [
        { kind: 'table', caption: 'From the Hatfield diffs to working with AI', head: ['In the project', 'When coding with AI'], rows: [
          ['A position check called 263 of 274 lines different', 'Never judge an AI edit by eye alone; let a real diff show what moved'],
          ['Myers found only 32 line edits', 'A short, clean diff is easier to review, so ask the assistant for small changes'],
          ['difflib added 146 word edits by default', 'A library setting you never read can change the answer; check the defaults'],
          ['The table confirmed every count', 'Test a clever method against a slow, obvious one before trusting it'],
          ['Speed fell as differences grew', 'Know when a tool is fast, and when it is not']
        ] },
        { kind: 'p', text: 'Coding assistants and AI agents propose their work as edits to existing files, and most tools show those edits as a diff for a person to accept or reject. A learner who has built a diff reads one differently: they know a moved block can look like a deletion plus an insertion, and that a long, noisy diff often hides a small real change. That is the core of vibe coding done properly, where the AI drafts and the learner decides. Agent-building comes later, when Python flows without prompting, which for most people means the late teens or adulthood; Copilot Studio agents are private-lesson work only. See <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Wikipedia, the Office for National Statistics and postcodes.io have no connection with Modern Age Coders. We used their public data; the code, the counts and the conclusions are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progression',
    h2: 'From matching lists by hand to diffs in Python',
    intro: 'A school year suggests where to start; the free lesson settles it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Comparing, sorting and spotting changes in lists and pictures.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and a first taste of Python, with an AI helper whose changes the child reviews.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and version control', p: 'Strings, tables and algorithms in Python, then Git for real projects.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Adults', h3: 'Algorithms and AI agents', p: 'Dynamic programming and search in depth, then agents built on top.', courses: ['data-structures-algorithms-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Diffs and AI',
    h2: 'What is a diff algorithm, and why does it matter for AI coding tools?',
    intro: 'A diff algorithm lists the insertions and deletions that turn one text into another, ideally as few as possible, and it matters for AI coding tools because their suggestions reach people as diffs that must be reviewed before they are accepted.',
    p1: 'On two versions of the Hatfield article a year apart, the Myers diff needed 32 line edits where a position-by-position check reported 263 of 274 lines as different.',
    p2: 'After this project, learners ask of any AI edit: how big is the real change, and what did the tool hide by showing it this way?',
    closer: 'A Hatfield teenager who has written a diff can review an assistant\'s work instead of trusting it, and that skill is built by learning to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons for Hatfield learners, week to week',
    intro: 'Learners join from home on a laptop or desktop with a camera. A steady connection matters more than a fast one.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner types and runs every line. The tutor asks questions and points at bugs rather than fixing them.' },
      { h3: 'Placed by what they can do', p: 'The free lesson shows the level; the course suggestion comes afterwards, not before.' },
      { h3: 'Nothing to pay up front', p: 'The trial is a complete lesson, it is free, and booking it needs no card.' },
      { h3: 'Five to ten per group', p: 'Groups are matched on level and pace, with classmates from across the UK.' },
      { h3: 'Two sessions a week', p: 'Share your school term dates and we leave the holiday weeks out.' },
      { h3: 'One UK start time', p: 'British clock changes are handled by the tutor; the slot stays at the same UK time all year.' }
    ],
    spec: { title: 'Why live and online', p: 'On a live call the tutor sees a mistake as it is typed and can ask why. A national pool of learners also lets groups be matched far more closely by level than any single town could manage.' }
  },

  fees: {
    h2: 'What Hatfield families pay',
    intro: 'Learners in Hatfield pay our standard international fees.',
    first: 'One complete lesson free, ending with a course suggestion.',
    group: 'Small-group tuition, about eight lessons a month.',
    private: 'One-to-one tuition, about eight lessons a month.',
    closer: 'Fees are set in US dollars and are not converted into sterling. The trial is unbilled; invoices begin after the trial, once you have chosen a course and a weekly slot with us. The pricing page covers breaks, absences and moving from a class to private tuition or back.'
  },

  reviewsH2: 'What families in Hertfordshire and across the UK say on Google',

  book: {
    h2: 'Book a free lesson in Hatfield',
    intro: 'Tell us an age or school year and something the learner enjoys. The trial might be spotting the differences between two lists, a Scratch game built with AI help, a first Python program, or a small diff written in code.',
    success: 'Thank you. We have your Hatfield booking request.'
  },

  faq: {
    h2: 'Hatfield: questions and answers',
    intro: 'Diffs, Python, AI, vibe coding, fees and timings.',
    items: [
      { q: 'How many people live in Hatfield?', a: 'The ONS counted 41,560 usual residents in the Hatfield built-up area at the 2021 census. The borough of Welwyn Hatfield counted 119,836.' },
      { q: 'Do you teach Python and coding in Hatfield?', a: 'Yes. Lessons are live online for ages 6 to 67, so learners in South Hatfield, Roe Green, Oxlease, Old Hatfield and the rest of the town join from home.' },
      { q: 'What is the Myers diff algorithm?', a: 'It finds the shortest list of insertions and deletions that turns one sequence into another, by exploring paths with one more edit at a time until one reaches the end. Eugene Myers published it in 1986.' },
      { q: 'What did the Hatfield project find?', a: 'Between the 2025 and 2026 versions of the article, Myers needed 32 line edits while a position-by-position check reported 263 of 274 lines as changed. Over five years, Python\'s difflib with default settings was 146 word edits longer than the shortest.' },
      { q: 'Why was difflib longer?', a: 'Its autojunk setting ignores very common items on long inputs, and it looks for long matching blocks rather than the minimum number of edits. It is fast and usually close, but not guaranteed shortest.' },
      { q: 'What is vibe coding?', a: 'Describing the program you want to an AI, letting it write a draft, and then reading, testing and correcting that draft yourself. We teach it alongside enough real coding to judge the draft.' },
      { q: 'At what stage do agents come in?', a: 'After a learner can write Python with no scaffolding, typically in the late teens or as an adult. Copilot Studio agent work is private tuition only.' },
      { q: 'Is the project relevant to GCSE and A level computer science?', a: 'Algorithms, strings and programming appear in both, so it is useful practice. No grade outcome is promised.' },
      { q: 'How much are the lessons?', a: 'The first lesson is free. After that it is USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Can we stop for the school holidays?', a: 'Of course. List the weeks you will be away and no lessons are booked in them.' }
    ]
  },

  next: {
    eyebrow: 'More in Hertfordshire',
    h2: 'Other Hertfordshire towns we teach',
    html: 'Try <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-welwyn-garden-city">Welwyn Garden City</a>, <a class="cg-inline-link" href="/best-coding-class-in-st-albans">St Albans</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-stevenage">Stevenage</a>, each with its own project. The <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> list the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hatfield and Hertfordshire',
  footerPlaces: [
    { href: '/coding-classes-in-hertfordshire', label: 'Hertfordshire' },
    { href: '/coding-and-ai-classes-in-east-of-england', label: 'East of England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-htf .cg-hero-grid { align-items: start; gap: clamp(1.4rem, 3.2vw, 2.7rem); }
.cg-root.cg-htf .cg-hero h1 { font-weight: 690; letter-spacing: -0.028em; line-height: 1.07; }
.cg-root.cg-htf .cg-capsule { border-top: 2px solid var(--cg-accent); padding: 0.85rem 0 0 0; }
.cg-root.cg-htf .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; text-transform: uppercase; font-size: 0.82rem; }
.cg-root.cg-htf .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.018em; }
.cg-root.cg-htf .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-htf .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-htf .cg-table th { font-weight: 680; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-htf .cg-ladder-col { border-radius: 4px; border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-htf .cg-callout { border-radius: 6px; border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Welwyn Hatfield (E07000241), Census 2021 TS001 usual residents 119,836 (printed; a required mention on the Welwyn Garden City page). ONS 2021 BUA (published): Hatfield 41,560. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Hatfield BUA: South Hatfield, Roe Green, Oxlease, Birchwood, Old Hatfield, Ellenbrook, Hatfield Garden Village (AL10).',
    localProject: 'English Wikipedia, Hatfield, Hertfordshire, revisions 996519968 (2020-12-27), 1313908684 (2025-09-28), 1377423271 (2026-09-29); counts only. 2025 to 2026: lines 274/274, LCS 258, Myers D 32, position check 263 of 274; words 4,594/4,601, LCS 4,544, D 107, position check 4,550. 2020 to 2025: lines 256/274, LCS 160, D 210, difflib default 224, autojunk off 210; words 3,174/4,594, LCS 2,856, D 2,056, difflib default 2,202, autojunk off 2,066; autojunk popular words 6. Every D verified by a full LCS table (21,136,994 cells for the one-year word pair). Timing: Myers 0.005 s vs table 6.18 s (one year, words); 2.1 s vs 5.0 s (five years). Lesson family: Myers O(ND) diff, shortest edit script, versus difflib and a position-by-position comparison.',
    requiredMentions: [
      '41,560',
      'South Hatfield',
      'Roe Green',
      'Oxlease',
      'Old Hatfield',
      'Hatfield Garden Village',
      'Myers',
      '4,544',
      'autojunk',
      '21,136,994'
    ],
    sources: [
      { claim: 'Myers E. W. (1986), An O(ND) difference algorithm and its variations, Algorithmica 1, 251 to 266.', url: 'https://doi.org/10.1007/BF01840446' },
      { claim: 'Git documentation, git diff, --diff-algorithm: myers is described as "The basic greedy diff algorithm. Currently, this is the default."', url: 'https://git-scm.com/docs/git-diff' },
      { claim: 'Python documentation, difflib.SequenceMatcher and the autojunk heuristic.', url: 'https://docs.python.org/3/library/difflib.html' },
      { claim: 'English Wikipedia, Hatfield, Hertfordshire, revision 1377423271 (29 September 2026), and earlier revisions 1313908684 and 996519968, fetched through the MediaWiki API.', url: 'https://en.wikipedia.org/w/index.php?oldid=1377423271' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations; postcodes.io places and nearest-postcode lookups.', url: 'https://www.nomisweb.co.uk/sources/census_2021' }
    ],
    rejectedClaims: [
      'Any statement about what the Hatfield article says or how it changed in substance: counts only, no text quoted or summarised.',
      'That Git uses exactly the textbook Myers algorithm: Git calls its default "the basic greedy diff algorithm" and offers a separate minimal option; the page says a version of Myers is the default.',
      'That difflib is wrong or buggy: it is documented as a matching heuristic, not a minimal diff; presented that way.',
      'That the timings hold on other machines: stated as this laptop only.',
      'Suburb names whose nearest postcode is outside the Hatfield BUA (Lemsford falls in Welwyn Garden City): left out.',
      'Sterling prices: none.'
    ]
  }
};
