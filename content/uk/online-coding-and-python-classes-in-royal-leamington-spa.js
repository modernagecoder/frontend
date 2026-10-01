'use strict';
// Royal Leamington Spa (cg- town page, UK cluster Phase 10, towns band B, row 507). Keyword slug per the owner's
// rotation, with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if you know every row
// total and every column total of a table, can a program rebuild what is inside? (Iterative proportional fitting.)
// Data (read 30 September 2026): ONS OA21 to BUA22 lookup and centroids for the 172 output areas of the Royal
// Leamington Spa built-up area in Warwick district (E07000222); Nomis Census 2021 TS044 accommodation type by output
// area. Our sums over the 172 areas: 22,096 households; detached 2,932, semi-detached 6,348, terraced 5,156,
// purpose-built flats 5,602, all other types 2,058. Table of 172 rows by 5 columns = 860 cells; row totals 45 to 236.
// Our run (scratchpad lms/ipf.py): hide the inside, keep the 172 row totals and 5 column totals, refit from a seed.
// Flat seed (all ones): fitted in 1 pass; 9,224 households in the wrong cell (41.7%); 238 of 860 cells within 10 of the
// truth. Seed = housing mix of the wider census zone (8 MSOAs, summed by us from output areas): 2 passes; 8,569 wrong
// (38.8%); 298 cells within 10. Seed = true row of the closest other area: 5 passes; 7,994 wrong (36.2%); 416 cells
// within 10; 86 zero cells in that seed, 53 of them truly non-zero and holding 694 households, stay zero.
// Example area (236 households): truth 3, 4, 0, 157, 72; flat-seed fit 31, 68, 55, 60, 22.
// "Wrong cell" = half the sum of absolute cell differences. Margins match in every fit.
// Lesson family: iterative proportional fitting (rebuilding a table from its margins; the seed decides the inside).
// Screened: "iterative proportional", "biproportional", "seed table", "synthetic population" 0 hits in content/;
// claimed in claims.txt (first choice, Stern-Brocot fractions, dropped as too close to a continued-fractions page).
// Warwickshire county page = projectile motion; Rugby = state-machine parsing; Nuneaton = retrieval agent.
// Place facts: Warwick district TS001 148,453. ONS 2021 BUA (published): Royal Leamington Spa 51,310. postcodes.io
// suburban areas whose closest postcode is in the BUA: Lillington, Milverton (CV32), Sydenham (CV31).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'ROYAL LEAMINGTON SPA', label: 'Royal Leamington Spa', blurb: 'Online coding and Python classes for Royal Leamington Spa, with a project that tries to rebuild an 860-cell housing table from its totals alone.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-royal-leamington-spa',
  code: 'lms',
  accent: '#85565E',
  accentRationale: 'Royal Leamington Spa: a dusty rose brown (6.02:1 contrast), picked by hand and checked for distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Royal Leamington Spa',
    eyebrow: 'Royal Leamington Spa, Warwick district, Warwickshire',
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
  routeLabel: 'Royal Leamington Spa, Warwickshire',
  title: 'Online Coding and Python Classes in Royal Leamington Spa',
  description: 'Live online coding and Python classes for Royal Leamington Spa, Lillington, Milverton and Sydenham, with vibe coding and AI, ages 6 to 67. First lesson free.',
  ogDescription: 'Online coding and Python classes for Royal Leamington Spa, with a data project on rebuilding a table from its totals.',
  twitterDescription: 'Royal Leamington Spa coding and Python lessons, live online, ages 6 to 67. Your first is free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Royal Leamington Spa',
    description: 'Python, coding, AI and maths taught live online to children, teenagers and adults in Royal Leamington Spa and Warwick district, with data projects that are checked against a known answer.'
  },

  h1: 'Online coding and Python classes in Royal Leamington Spa',
  capsuleQ: 'Which online coding and Python classes are best for Royal Leamington Spa?',
  capsule: 'The ONS built-up area of Royal Leamington Spa held 51,310 usual residents at the 2021 census, and Warwick district as a whole held 148,453. Lillington, Milverton and Sydenham are suburban areas of the town in the postcode gazetteer. Learners there, from age six to 67, study Python, coding, vibe coding, AI and maths with Modern Age Coders over live video. A tutor in India leads every session, taken privately or as one of a group of five to ten at the same level. We like projects where the true answer is known, so a learner can see exactly how wrong a clever method is. In the Leamington project the learner hides the inside of a real census table, rebuilds it in Python from the totals, and then compares. Lesson one carries no charge. From the second lesson the price is USD 100 per month in a class and USD 150 per month for individual tuition.',
  lead: 'Published statistics often give you the edges of a table and keep the middle back. You are told how many homes each neighbourhood has, and how many homes of each type the town has, but not how many of each type are in each neighbourhood. In 1940 W. Edwards Deming and Frederick Stephan described a procedure for filling in the middle: start with a guess, scale every row to its total, scale every column to its total, and repeat until both fit. It is a dozen lines of Python. Whether the result deserves to be believed is a separate question, and this project answers it with data where the middle is in fact known.',
  wa: 'Hello Modern Age Coders, we are in Leamington Spa and would like a free Python or coding trial lesson.',

  picks: {
    eyebrow: 'Recommended courses',
    h2: 'Python and coding courses for Leamington Spa',
    intro: 'A course for every age group. Each opens with a live lesson that is free to take and needs no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: tables, totals and "does this add up?" puzzles solved by reasoning.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Vibe coding for children, with Scratch games drafted by AI and checked by the child.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python for teenagers from basics to data work, including the Leamington table project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python from the beginning through data analysis, automation and AI agents.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town',
      h2: 'Royal Leamington Spa, Lillington, Milverton and Sydenham',
      intro: 'Census counts on two boundaries and the three suburb names the gazetteer confirms.',
      body: [
        { kind: 'table', caption: 'Usual residents, Census 2021 (ONS)', head: ['Area', 'Usual residents'], rows: [
          ['Royal Leamington Spa built-up area', '51,310'],
          ['Warwick district', '148,453']
        ] },
        { kind: 'p', text: 'Warwick district takes in Warwick, Kenilworth and Whitnash as well as Leamington, so its figure is a separate count and the two rows should not be combined. postcodes.io records Lillington and Milverton as suburban areas in the CV32 postcode district and Sydenham in CV31; the postcode closest to each gazetteer point is assigned to the Royal Leamington Spa built-up area. Whitnash and Cubbington are counted by the ONS as built-up areas of their own and are not included in the town figure. Pupils follow the English national curriculum, so a year group from Year 2 to Year 13 gives us a starting level, and lessons can run alongside GCSE and A level computer science.' },
        { kind: 'callout', h3: 'Warwickshire pages', p: 'The Warwickshire set includes the <a class="cg-inline-link" href="/coding-classes-in-warwickshire">county page</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rugby">Rugby</a> and <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-nuneaton">Nuneaton</a>. Why we put reasoning ahead of tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Leamington project',
      h2: 'Iterative proportional fitting: rebuilding a table from its edges',
      intro: 'A real table with 860 cells, its inside hidden, and three attempts to put it back.',
      body: [
        { kind: 'p', text: 'The census gives the type of home for every household in each of the 172 output areas of the Royal Leamington Spa built-up area. Summed by us, that is 22,096 households: 2,932 in detached houses, 6,348 semi-detached, 5,156 terraced, 5,602 in purpose-built flats and 2,058 in every other kind of home. Set out as a table of 172 areas by five types it has 860 cells. The learner keeps the 172 row totals and the five column totals, hides the cells, and asks a program to recover them.' },
        { kind: 'p', text: 'The procedure needs a first guess, called the seed. With every cell set to 1, the program scales each row to its total, then each column to its total, and in this case it is finished after a single pass. Every total now matches to the household. Then the hidden table is uncovered and the two are compared cell by cell.' },
        { kind: 'table', caption: 'Rebuilding the Leamington housing table from its totals, our Python run', head: ['Seed', 'Passes needed', 'Households in the wrong cell', 'Cells within 10 of the truth'], rows: [
          ['Every cell the same', '1', '9,224 (41.7%)', '238 of 860'],
          ['Housing mix of the wider census zone', '2', '8,569 (38.8%)', '298 of 860'],
          ['True figures of the closest other area', '5', '7,994 (36.2%)', '416 of 860']
        ] },
        { kind: 'p', text: 'All three rebuilt tables have perfect totals, and all three put more than a third of households in the wrong cell. One area of 236 households shows why. Its true row is 3 detached, 4 semi-detached, no terraced, 157 flats and 72 other. The flat-seed fit gives it 31, 68, 55, 60 and 22, which is simply the town average stretched to 236. The procedure cannot know that the area is mostly flats, because nothing in the totals says so. Better seeds helped a little: borrowing the housing mix of the wider zone cut the error to 38.8%, and copying the area next door cut it to 36.2%.' },
        { kind: 'p', text: 'The copy-your-neighbour seed exposed a second trap. A cell that starts at zero is only ever multiplied, so it stays at zero for good. That seed held 86 zeros, and 53 of them were wrong: the true table has 694 households in those cells, and no amount of scaling could put them back. These results are for one town and one table; the method does better where rows resemble each other, and that is exactly what cannot be assumed.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'A three by three grid with only the totals shown. Find one way to fill it in, then a second. Which is right?' },
          { h3: 'Ages 11 to 15', p: 'Code the row step and the column step in Python for a small table and watch the totals settle.' },
          { h3: 'Ages 15 and up', p: 'Run all three seeds on the 860-cell table, measure the error, and find the zeros that never recover.' }
        ] },
        { kind: 'callout', h3: 'Provenance', p: 'Housing counts are Census 2021 table TS044 from Nomis, published by the Office for National Statistics under the Open Government Licence. The procedure is from Deming and Stephan (1940). The choice of seeds, the error measure and the results are our own.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Code, data and AI',
      h2: 'What a rebuilt table teaches about Python and AI',
      intro: 'Output that satisfies every check you thought of can still be wrong in every way you did not.',
      body: [
        { kind: 'table', caption: 'From the Leamington table to AI-assisted coding', head: ['In the project', 'The wider lesson'], rows: [
          ['Totals matched in every rebuild', 'Passing a check is not the same as being right'],
          ['Over a third of households were misplaced', 'Test against known answers whenever they exist'],
          ['A better seed gave a slightly better table', 'What goes in limits what can come out'],
          ['Zeros in the seed never recovered', 'Look for values a method can never change'],
          ['The flat seed returned the town average', 'Smooth, plausible output may hide no information']
        ] },
        { kind: 'p', text: 'This matters beyond statistics. Ask an AI assistant to "estimate the breakdown" of something and it will often return a neat table whose rows and columns add up, produced in much the same spirit as the flat seed: reasonable shares applied evenly. Leamington learners write the fitting loop themselves in Python, then practise vibe coding by asking an AI for the same thing and comparing both with the truth. They learn to ask what information a result is built on. Agents are introduced once a learner programs in Python without help, generally from sixteen upwards, and Copilot Studio agent lessons are private only. The route to agent building is described on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a>, and the case for reading what you run is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Modern Age Coders is separate from the Office for National Statistics, Nomis and postcodes.io. The figures are theirs; the experiment and its faults are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From grids and totals to data work in Python',
    intro: 'We start from the school year you give us and adjust after seeing the learner at work.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Grids, totals and logic puzzles, reasoning aloud before coding.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Code with an AI helper', p: 'Scratch games and early Python, with the child as the checker.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python for data', p: 'Loops, tables and real datasets, tested against known answers.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Analysis and agents', p: 'Python, statistics and AI agents that show their working.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Python, tables and AI',
    h2: 'What is iterative proportional fitting, and can a table be rebuilt from its totals?',
    intro: 'Iterative proportional fitting fills in a table by repeatedly scaling a starting guess until every row and column matches its known total, and no, the totals alone cannot rebuild the inside: many different tables share the same edges.',
    p1: 'On an 860-cell table of home types in Royal Leamington Spa, the fitted tables matched every total yet placed between 36.2% and 41.7% of the 22,096 households in the wrong cell, depending on the seed.',
    p2: 'A learner who has watched perfect totals sit on top of a wrong table becomes much harder to impress with output that merely adds up.',
    closer: 'Leamington teenagers who can test a method against the truth will use AI tools with their eyes open, and writing the code is how that judgement is formed.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The format',
    h2: 'Leamington lessons, live and online',
    intro: 'Join from any room with a computer, keyboard and camera. Python needs a proper keyboard, so a phone will not do.',
    cells: [
      { h3: 'Typing, not watching', p: 'Learners build and run their own programs with the tutor looking on and asking them to explain.' },
      { h3: 'Level set by the trial', p: 'We hold the course recommendation until the free lesson has shown us where the learner stands.' },
      { h3: 'Trial at no cost', p: 'There is no fee and no card request for the first lesson.' },
      { h3: 'Five to ten learners', p: 'Every group is made of learners at one stage, wherever in the UK they live.' },
      { h3: 'Roughly eight lessons monthly', p: 'Two a week in term; Warwickshire holiday weeks are dropped if you send the dates.' },
      { h3: 'UK time, all year', p: 'Tutors absorb the spring and autumn clock changes so your slot holds.' }
    ],
    spec: { title: 'Why we teach online and live', p: 'Grouping by level works only when you can draw on learners from many towns. A live tutor then does what no recording can: notices confusion and asks the next question.' }
  },

  fees: {
    h2: 'Fees for Leamington Spa',
    intro: 'Leamington learners pay the rates that apply in every country other than India.',
    first: 'The first lesson is free, full length, and ends with a course suggestion.',
    group: 'Group lessons: around eight a month.',
    private: 'One-to-one lessons: around eight a month.',
    closer: 'We set prices in US dollars and do not convert them to pounds on this page. You are charged nothing for the trial, and the first invoice is raised after you agree a course and a time. For holidays, absences and switching format, see the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Warwickshire families and UK learners',

  book: {
    h2: 'Book a free lesson from Leamington Spa',
    intro: 'Give us the learner\'s age or school year and an interest. A trial could be a totals puzzle on paper, a Scratch game with AI help, first Python, or a small table fitted in code.',
    success: 'Thank you. Your Leamington Spa request has come through.'
  },

  faq: {
    h2: 'Leamington Spa questions',
    intro: 'Table fitting, the housing project, Python, vibe coding and arrangements.',
    items: [
      { q: 'What is the population of Royal Leamington Spa?', a: 'The ONS built-up area had 51,310 usual residents at the 2021 census. Warwick district, which contains it, had 148,453.' },
      { q: 'Are online coding and Python classes available in Leamington Spa?', a: 'They are, as live video lessons for anyone aged 6 to 67 in Royal Leamington Spa, Lillington, Milverton, Sydenham and the rest of Warwick district.' },
      { q: 'What is a seed table?', a: 'It is the starting guess that table fitting scales up or down. The finished table keeps the pattern of the seed, so a poor seed gives a poor result with correct totals.' },
      { q: 'What did the Leamington project find?', a: 'Rebuilding a table of 22,096 households by home type from its totals put 41.7% in the wrong cell with a flat seed, 38.8% with a zone-level seed and 36.2% with a neighbour seed.' },
      { q: 'So is the method useless?', a: 'No. It is widely used and works well when the seed is close to the truth. The lesson is that matching totals proves nothing about the cells.' },
      { q: 'What is vibe coding?', a: 'It means getting an AI to write a program from your description, then reading the code, running it and fixing what is wrong. Alongside it we teach typed Python, so learners can judge what the AI produced.' },
      { q: 'Do you teach AI agents?', a: 'Yes, to learners who already program in Python on their own, generally from about sixteen. Copilot Studio agent lessons are private only.' },
      { q: 'Will this help with GCSE or A level?', a: 'It supports computer science and the data handling in maths. We teach understanding and do not guarantee results.' },
      { q: 'What are the fees?', a: 'A free first lesson, then USD 100 a month for group lessons or USD 150 a month for one-to-one.' },
      { q: 'Do lessons run in the holidays?', a: 'They pause for any weeks you ask us to leave out.' }
    ]
  },

  next: {
    eyebrow: 'Across Warwickshire',
    h2: 'Other Warwickshire pages and their projects',
    html: 'Read about <a class="cg-inline-link" href="/online-coding-and-python-classes-in-rugby">Rugby</a>, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-nuneaton">Nuneaton</a> or <a class="cg-inline-link" href="/best-coding-class-in-coventry">Coventry</a>. The <a class="cg-inline-link" href="/coding-classes-in-warwickshire">Warwickshire page</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> connect to every other page.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Leamington Spa and Warwickshire',
  footerPlaces: [
    { href: '/coding-classes-in-warwickshire', label: 'Warwickshire' },
    { href: '/coding-and-ai-classes-in-west-midlands-region', label: 'West Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lms .cg-hero-grid { align-items: center; gap: clamp(1.35rem, 3vw, 2.7rem); }
.cg-root.cg-lms .cg-hero h1 { font-weight: 720; letter-spacing: -0.03em; line-height: 1.07; }
.cg-root.cg-lms .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-lms .cg-eyebrow { letter-spacing: 0.16em; font-weight: 660; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-lms .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.018em; }
.cg-root.cg-lms .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-lms .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lms .cg-table th { font-weight: 700; letter-spacing: 0.025em; }
.cg-root.cg-lms .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-lms .cg-callout { border-left-width: 4px; border-radius: 2px; }
`,

  dossier: {
    curriculumAuthority: 'Warwick district (E07000222), Census 2021 TS001 usual residents 148,453. ONS 2021 BUA (published): Royal Leamington Spa 51,310. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the BUA: Lillington, Milverton (CV32), Sydenham (CV31). Whitnash and Cubbington are separate ONS built-up areas.',
    localProject: 'Census 2021 TS044 accommodation type for the 172 output areas of the Royal Leamington Spa BUA; our sums 22,096 households: detached 2,932, semi-detached 6,348, terraced 5,156, purpose-built flats 5,602, other 2,058; 860 cells. Inside hidden, refitted from the 172 row and 5 column totals. Flat seed: 1 pass, 9,224 households in the wrong cell (41.7%), 238 cells within 10. Zone-mix seed (8 MSOAs): 2 passes, 8,569 (38.8%), 298 cells. Closest-area seed: 5 passes, 7,994 (36.2%), 416 cells; 53 wrong zeros holding 694 households never recover. Lesson family: iterative proportional fitting, margins against cells, the seed decides the inside.',
    requiredMentions: [
      '51,310',
      '148,453',
      'Lillington',
      'Milverton',
      'Sydenham',
      'Iterative proportional fitting',
      '22,096',
      '41.7%',
      '36.2%',
      '5,602'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS044 accommodation type and TS001 via Nomis; ONS 2021 built-up area populations; ONS output area lookups and centroids.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Deming W. E. and Stephan F. F. (1940), On a least squares adjustment of a sampled frequency table when the expected marginal totals are known, Annals of Mathematical Statistics 11(4), 427 to 444.', url: 'https://doi.org/10.1214/aoms/1177731829' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Warwick district.', url: 'https://api.postcodes.io/places?q=Lillington' }
    ],
    rejectedClaims: [
      'That the fitted tables are estimates anyone should use: they are shown to be wrong against the published cells.',
      'That table fitting always fails: the page says it works when the seed is close to the truth.',
      'Spa history, Regency architecture and the royal prefix: not read from a source; not claimed.',
      'That Whitnash, Cubbington or Heathcote are inside the Leamington built-up area: the ONS and the postcode check say otherwise; left out.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
