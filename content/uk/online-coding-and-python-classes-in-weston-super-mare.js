'use strict';
// Weston-super-Mare (cg- town page, UK cluster Phase 8, towns band A, row 383). Keyword slug per the owner's rotation,
// with the 2026-09-28 vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how should you group data
// into bands, and why does a clever algorithm beat trying every option? (optimal binning by dynamic programming).
// Data (read 29 September 2026): Nomis API, Census 2021 TS007 age by single year (NM_2027_1) for North Somerset
// (E06000024): 101 ages (0 to 99, then 100 and over), total 216,727 (TS001 gives 216,726; the ONS adjusts small counts);
// the largest single-year group is 3,373 people aged 55.
// Our run (scratchpad wsm/dp.py): describe the curve with k contiguous bands, each age replaced by its band's average;
// error = root mean square difference per age (people). The ONS five-year layout (0 to 4 ... 80 to 84, then 85 and over,
// 18 bands): 196.9. Optimal bands by dynamic programming: 3 bands 340.9; 4: 265.9; 6: 223.2; 8: 176.7 (0-17, 18-28,
// 29-47, 48-59, 60-77, 78-83, 84-90, 91-100); 10: 150.2; 12: 132.0; 15: 107.7; 18: 90.8. Fewest optimal bands that beat the
// ONS layout: 8. Dynamic programming for 18 bands: 78,081 inner steps; possible ways to cut 101 ages into 18 bands:
// 6,650,134,872,937,201,800 (C(100,17)).
// Lesson family: optimal binning / segmentation by dynamic programming, brute force vs DP, fitted vs standard (comparable)
// bands. Screened: natural breaks, binning, segmentation 0 hits; Scotland uses dynamic programming only inside edit
// distance; Rutland owns tree roll-ups; "grouped data open-ended band" (another page) is about reading a top band.
// Place facts: North Somerset (E06000024) TS001 216,726. ONS 2021 BUAs (published): Weston-super-Mare 84,605; Portishead
// 26,355; Clevedon 21,085; Nailsea 15,925; Locking 3,820. postcodes.io (North Somerset): Worle, Uphill, Oldmixon,
// St Georges (suburban areas); Kewstoke, Hutton, West Wick (villages).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'WESTON-SUPER-MARE', label: 'Weston-super-Mare', blurb: 'Online coding and Python classes for Weston-super-Mare, with a dynamic programming project that finds the optimal way to group North Somerset\'s ages.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-weston-super-mare',
  code: 'wsm',
  accent: '#1B434C',
  accentRationale: 'Weston-super-Mare: a deep slate teal (8.66:1 contrast), picked by colour distance from recent accents',
  pageType: 'city',
  place: {
    name: 'Weston-super-Mare',
    eyebrow: 'Weston-super-Mare, North Somerset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Somerset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Somerset', href: '/coding-classes-in-somerset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Weston-super-Mare, England',
  title: 'Online Coding and Python Classes in Weston-super-Mare | Ages 6-67',
  description: 'Online coding, Python, AI and vibe coding classes for Weston-super-Mare, Worle, Uphill and Clevedon learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Live online coding and Python classes for Weston-super-Mare, and a dynamic programming project that finds the optimal age bands for North Somerset.',
  twitterDescription: 'Weston-super-Mare online coding, Python, AI and vibe coding classes for ages 6 to 67. First lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '29 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Weston-super-Mare',
    description: 'Online coding, Python, AI, vibe coding and mathematics for children, teenagers and adults in Weston-super-Mare and North Somerset, taught live with thinking skills first.'
  },

  h1: 'Online coding and Python classes in Weston-super-Mare',
  capsuleQ: 'Which are the best online coding and Python classes in Weston-super-Mare?',
  capsule: 'The ONS gives the Weston-super-Mare built-up area 84,605 people at the 2021 census, inside a North Somerset of 216,726 that also counts Portishead, Clevedon and Nailsea. Worle, Uphill, Oldmixon and the rest of the town are all within reach: our India-based tutors teach coding, Python, AI, vibe coding and maths over a live video link to anyone aged 6 to 67, one-to-one or with five to ten learners of a similar standard. Every course begins with how to think, so that AI output is something learners can test rather than simply accept. We close the free first lesson by recommending a course. The Weston-super-Mare project uses dynamic programming, a classic idea in computer science, to find the optimal way to group a whole district\'s ages. After that, continuing costs USD 100 per month in a class or USD 150 per month one-to-one.',
  lead: 'Census tables usually group people into five-year age bands: 0 to 4, 5 to 9 and so on. That is tidy, but is it the most faithful way to summarise a real population? For North Somerset the census also publishes a count for every single year of age, 101 numbers peaking at 3,373 people aged 55, so the question can be answered exactly. The catch is that there are more ways to cut 101 ages into 18 bands than anyone could ever check. This project solves it in Python with dynamic programming, a technique that turns an impossible search into a few seconds of work, and then asks why the ONS keeps its five-year bands anyway.',
  wa: 'Hello Modern Age Coders, may we book a free coding or Python lesson for a learner in Weston-super-Mare?',

  picks: {
    eyebrow: 'Weston-super-Mare course picks',
    h2: 'Python, thinking and AI courses for Weston-super-Mare',
    intro: 'Choose by age and what the learner is curious about. Lesson one of any course is live, free and booked without payment details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think programme: grouping, patterns and finding the smartest way through a problem.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch projects, then small apps built by describing them to AI and checking the result.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects with AI help, including the age-band optimiser.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from first steps to algorithms, data work and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Weston-super-Mare and North Somerset',
      h2: 'Weston-super-Mare and neighbouring North Somerset towns',
      intro: 'Published 2021 census counts for Weston-super-Mare and four other built-up areas in the district.',
      body: [
        { kind: 'table', caption: 'Weston-super-Mare and four more North Somerset built-up areas, 2021 census counts published by the ONS', head: ['Built-up area', 'People (2021)'], rows: [
          ['Weston-super-Mare', '84,605'],
          ['Portishead', '26,355'],
          ['Clevedon', '21,085'],
          ['Nailsea', '15,925'],
          ['Locking', '3,820']
        ] },
        { kind: 'p', text: 'These are separate ONS figures, so we print them individually and do not add them up; the district total of 216,726 comes from its own table and includes many smaller places. Worle, Uphill, Oldmixon and St Georges are recorded as suburban areas and Kewstoke, Hutton and West Wick as villages in North Somerset. Schools here work to the English national curriculum; just share your holiday weeks and lessons will skip them.' },
        { kind: 'callout', h3: 'The county, the region and our approach', p: 'For the wider area see <a class="cg-inline-link" href="/coding-classes-in-somerset">coding classes in Somerset</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. Why learners think before they prompt is explained on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Weston-super-Mare project',
      h2: 'The optimal age bands for North Somerset, found by dynamic programming',
      intro: 'Measure how well a set of bands describes 101 single-year counts, then find the set that does it most faithfully.',
      body: [
        { kind: 'p', text: 'The learner downloads Census 2021 table TS007 for North Somerset from the Nomis API: a count for every age from 0 to 99, plus 100 and over. A banding replaces every age in a band with the band\'s average, and the error is how far those averages sit from the real counts, measured as the root mean square difference in people per year of age. The standard ONS layout, seventeen five-year bands plus one for 85 and over, has an error of 196.9. The question is whether a different set of 18 bands could do better, and by how much.' },
        { kind: 'p', text: 'Trying every option is hopeless. There are 6,650,134,872,937,201,800 ways to cut 101 ages into 18 bands; checking a billion a second would take over two hundred years. Dynamic programming avoids that by solving small versions of the problem first and reusing the answers. The optimal way to cover ages 0 to 60 with five bands is built from the optimal ways to cover shorter ranges with four bands, which have already been worked out and stored. The whole search for 18 bands takes 78,081 steps and finds the guaranteed optimal answer.' },
        { kind: 'table', caption: 'How well each banding describes North Somerset\'s single-year ages, error in people per year of age, our Python run on Census 2021 TS007, 29 September 2026', head: ['Banding', 'Number of bands', 'Error'], rows: [
          ['ONS five-year bands plus 85 and over', '18', '196.9'],
          ['Optimal, found by dynamic programming', '3', '340.9'],
          ['Optimal', '6', '223.2'],
          ['Optimal', '8', '176.7'],
          ['Optimal', '12', '132.0'],
          ['Optimal', '18', '90.8']
        ] },
        { kind: 'p', text: 'With the same 18 bands, the optimal layout more than halves the error, from 196.9 to 90.8. Just 8 well-placed bands already beat the standard 18: 0 to 17, 18 to 28, 29 to 47, 48 to 59, 60 to 77, 78 to 83, 84 to 90 and 91 to 100. The optimal bands are narrow where the curve changes quickly and wide where it is flat, which is exactly what a good summary should do.' },
        { kind: 'p', text: 'So why does the ONS not use them? Because these bands are optimal for North Somerset\'s curve alone. Every other district would get different optimal bands, and then nobody could compare one place with another. Standard five-year bands trade a little accuracy for comparability, and that trade is usually worth it. Knowing which kind of optimum a situation needs is as important as the algorithm.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Sort a class\'s birthdays into groups and discuss which grouping tells the story more fairly.' },
          { h3: 'Ages 11 to 15', p: 'Compare the five-year bands with a few hand-picked bands in Python and measure the error.' },
          { h3: 'Ages 15 and up', p: 'Write the dynamic programming solution, count its steps and compare with brute force.' }
        ] },
        { kind: 'callout', h3: 'ONS counts, our algorithm', p: 'The single-year counts are Census 2021 figures from the Office for National Statistics, published through Nomis. The bandings, the errors and the dynamic programming are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Clever algorithms and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Pick the right method and years of computing shrink to seconds.',
      body: [
        { kind: 'table', caption: 'From North Somerset\'s age bands to AI work', head: ['In the banding project', 'When AI helps you code'], rows: [
          ['Brute force would take centuries', 'Check whether AI-written code will finish in time'],
          ['Dynamic programming reused smaller answers', 'Know the standard techniques so you can recognise them'],
          ['Optimal bands halved the error', 'Measure improvements instead of assuming them'],
          ['Standard bands kept places comparable', 'The right answer depends on what it is for'],
          ['Errors counted in people per year of age', 'Choose a measure that means something']
        ] },
        { kind: 'p', text: 'Ask an AI assistant for code that finds the optimal age bands and it may produce a brute-force search that would never finish, or a correct dynamic programming solution, and a learner who has not studied algorithms cannot tell which. In our vibe coding lessons, where the learner describes the program and the AI writes a draft, recognising the difference is exactly the skill we build. AI agents, which can write and run code for you, are only as good as the plans they choose, so the same judgement applies. Agent building waits until Python is second nature, typically for older teens and adults, and Copilot Studio agents are kept for private sessions. The route is laid out on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our agents course page for UK learners</a>, and the reasoning behind it in <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We are not part of, or endorsed by, the ONS, Nomis or postcodes.io; we simply used their open data, and the algorithm with any slips in it belongs to us.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From sorting birthdays to dynamic programming',
    intro: 'The school year is a first estimate, and the free lesson shows the real starting point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Grouping, patterns and smarter ways to solve a puzzle.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps built with AI help and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and algorithms', p: 'Data, efficiency and classic algorithms alongside GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Adults', h3: 'Python, algorithms and agents', p: 'Data structures, algorithms, data work and AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and algorithms',
    h2: 'What is dynamic programming, and do you still need it with AI?',
    intro: 'It is solving a big problem by storing the answers to smaller ones, and yes, you still need to recognise it.',
    p1: 'In Weston-super-Mare it turned more than six quintillion possible bandings into 78,081 steps. AI tools can write that code, but only someone who understands it can tell whether they have written the fast version or the one that never finishes.',
    p2: 'Learners who have built it by hand read AI-generated code with a sharper eye for efficiency and correctness.',
    closer: 'A Weston-super-Mare teenager who knows the classic algorithms will steer AI tools instead of being steered by them, which makes 2026 a fine year to learn to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Worle to Uphill, online',
    intro: 'A computer and dependable broadband are all that a North Somerset home needs.',
    cells: [
      { h3: 'Student-led coding', p: 'The learner types, prompts and runs everything, and the tutor watches their screen and asks what comes next.' },
      { h3: 'Starting from the trial', p: 'We look at what a learner can actually do in the free session, not just their school year, and record any exam board.' },
      { h3: 'A free first lesson', p: 'There is no charge for lesson one, which finishes with a course suggestion.' },
      { h3: 'Groups by level', p: 'Five to ten UK learners at the same stage in each class.' },
      { h3: 'Twice a week', p: 'Paused over school holidays.' },
      { h3: 'Consistent timing', p: 'Tutors follow UK clock changes, so the lesson hour stays the same.' }
    ],
    spec: { title: 'Why the classes run online', p: 'Five learners at one stage who are all free on the same evening rarely live near one another. Online, they can still be classmates.' }
  },

  fees: {
    h2: 'Weston-super-Mare fees',
    intro: 'Learners here pay our international rate, which covers every country except India.',
    first: 'A full free first lesson, with a suggested course at the end.',
    group: 'Roughly eight live small-group lessons each month.',
    private: 'Roughly eight live one-to-one lessons each month.',
    closer: 'We charge in US dollars and never in sterling. No bill arrives before the trial has fixed a course and a slot in the week, and our pricing page walks through holidays away, missed classes and swapping between group and private.'
  },

  reviewsH2: 'Google reviews: Somerset households and families across Britain',

  book: {
    h2: 'Book a free Weston-super-Mare lesson',
    intro: 'An age, or a school year, plus one thing the learner loves is all we ask. Trial sessions might involve a sorting-into-groups puzzle, building a Scratch game alongside an AI, first lines of Python, or a miniature optimiser.',
    success: 'Thank you. We have your Weston-super-Mare request.'
  },

  faq: {
    h2: 'Weston-super-Mare questions',
    intro: 'The dynamic programming project, Python, vibe coding and practical details.',
    items: [
      { q: 'What is the population of Weston-super-Mare?', a: 'The ONS gives 84,605 for the Weston-super-Mare built-up area at the 2021 census; North Somerset had 216,726 usual residents.' },
      { q: 'Can Weston-super-Mare learners take online Python classes?', a: 'They can, through live video sessions, from age 6 right up to 67, wherever they are in North Somerset.' },
      { q: 'What is dynamic programming?', a: 'A way of solving a large problem by breaking it into smaller overlapping problems, solving each once and reusing the stored answers.' },
      { q: 'What is the project?', a: 'Learners use dynamic programming to find the optimal age bands for North Somerset\'s single-year census counts and compare them with the standard five-year bands.' },
      { q: 'Do you teach vibe coding?', a: 'Yes, for all ages, with the learner planning first and testing what the AI writes.' },
      { q: 'At what stage do AI agents come in?', a: 'Python has to come first, so for most people that means the late teens or adulthood; Copilot Studio agents are covered only in private lessons.' },
      { q: 'Are lessons in person?', a: 'No, all teaching is live online.' },
      { q: 'Is there help for exam years?', a: 'GCSE and A level computer science and maths, yes; we build understanding and never guarantee a grade.' },
      { q: 'What do lessons cost?', a: 'Lesson one is free. From then on a class seat is USD 100 monthly, and a tutor to yourself is USD 150 monthly.' },
      { q: 'Do lessons pause in the holidays?', a: 'Yes. Tell us the dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More South West pages',
    html: '<a class="cg-inline-link" href="/best-coding-class-in-bristol">Bristol</a> has its own page and project, and <a class="cg-inline-link" href="/11-plus-maths-tuition-torbay">11 plus maths tuition in Torbay</a> serves families preparing for grammar school tests in Devon. Every area we cover is listed from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Weston-super-Mare and Somerset',
  footerPlaces: [
    { href: '/coding-classes-in-somerset', label: 'Somerset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-wsm .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-wsm .cg-hero h1 { font-weight: 770; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-wsm .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-wsm .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-wsm .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-wsm .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-wsm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-wsm .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-wsm .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-wsm .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'North Somerset (E06000024), Census 2021 TS001 usual residents 216,726. ONS 2021 BUAs (published): Weston-super-Mare 84,605; Portishead 26,355; Clevedon 21,085; Nailsea 15,925; Locking 3,820. postcodes.io (North Somerset): Worle, Uphill, Oldmixon, St Georges (suburban areas); Kewstoke, Hutton, West Wick (villages).',
    localProject: 'TS007 single year (NM_2027_1), North Somerset, 101 ages, total 216,727, max 3,373 at 55. RMSE per age: ONS 18 bands 196.9; optimal by DP: 3 bands 340.9, 6: 223.2, 8: 176.7 (0-17, 18-28, 29-47, 48-59, 60-77, 78-83, 84-90, 91-100), 12: 132.0, 18: 90.8. 8 optimal bands beat the ONS 18. DP 78,081 steps vs 6,650,134,872,937,201,800 possible 18-band cuts. Lesson family: optimal binning by dynamic programming, brute force vs DP, fitted vs standard bands.',
    requiredMentions: [
      '84,605',
      '216,726',
      'Clevedon',
      'Worle',
      'Uphill',
      'Oldmixon',
      'Kewstoke',
      'dynamic programming',
      '3,373',
      '78,081'
    ],
    sources: [
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Census 2021 TS007, age by single year, and TS001 usual residents for North Somerset, via the Nomis API.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2027_1.data.csv?geography=E06000024&measures=20100' },
      { claim: 'postcodes.io places in North Somerset (suburban areas and villages).', url: 'https://api.postcodes.io/places?q=Worle' }
    ],
    rejectedClaims: [
      'Seaside, pier or resort history: not read from a source; not claimed.',
      'Why the age curve has its shape: not measured; not claimed.',
      'Why the ONS chose five-year bands: stated only as the general comparability trade-off, not as an ONS quote.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
