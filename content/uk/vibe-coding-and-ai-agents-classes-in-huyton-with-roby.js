'use strict';
// Huyton with Roby (cg- town page, UK cluster Phase 10, towns band B, row 482). Keyword slug per the owner's rotation,
// with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an agent get unstuck when
// every small change makes things worse? (tabu search: accept the least-bad move and remember recent moves so the search
// cannot slide straight back; compared with plain local search, and with memories that are too short or too long).
// Data (read 30 September 2026): Census 2021 usual residents by output area for Knowsley (E08000011, 507 OAs) via Nomis;
// ONS OA December 2021 population-weighted centroids; ONS OA21 to BUA22 lookup: 193 Knowsley OAs in the Huyton with Roby
// built-up area, 58,998 residents by our OA sum (the ONS published BUA figure is 59,845).
// Our run (scratchpad hyr/tabu2.py): place 6 sites on OA centroids to minimise the population-weighted mean
// straight-line distance from each area to its closest site. A move shifts one site to one of the 8 areas closest to it.
// 40 random starts (numpy seed 2026). Random placements average 832.7 m. Plain local search (take the most improving
// move until none improves): mean 576.6 m, lowest 573.0, worst 597.2, 31 of 40 within 1% of 573.0, median 1,072 layouts
// scored. Tabu search, 150 moves, about 7,199 layouts scored: memory 0 mean 576.1 (worst 597.2); memory 3 575.3 (587.0);
// memory 10 573.2 (573.4; 40 of 40 within 1%); memory 25 573.0 (573.4); memory 60 573.4 (580.4). 573.0 is the lowest we
// found, not a proven optimum.
// Lesson family: tabu search (memory in metaheuristics). Screened: "tabu search" 0 hits. Simulated annealing and
// hill-climbing pages exist (different escape mechanism); facility placement is only the test problem.
// Place facts: ONS 2021 BUAs (published): Huyton with Roby 59,845; Kirkby 45,560; Prescot 39,225. postcodes.io suburban
// areas whose nearest OA centroid lies in the Huyton with Roby BUA (our check): Roby, Page Moss, Bowring Park, Longview,
// Huyton Park, Woolfall Heath, Court Hey, Stockbridge Village. Swanside falls in the Liverpool BUA and is not claimed.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'HUYTON WITH ROBY', label: 'Huyton with Roby', blurb: 'Vibe coding and AI agents classes for Huyton with Roby, with a search agent that needs a memory to escape a dead end.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-huyton-with-roby',
  code: 'hyr',
  accent: '#0F5E4A',
  accentRationale: 'Huyton with Roby: a deep pine green (7.28:1 contrast), hand-picked and unused elsewhere',
  pageType: 'city',
  place: {
    name: 'Huyton with Roby',
    eyebrow: 'Huyton with Roby, Knowsley, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Merseyside' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Merseyside', href: '/coding-classes-in-merseyside' },
    { label: 'Liverpool', href: '/best-coding-class-in-liverpool' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Huyton with Roby, England',
  title: 'Vibe Coding and AI Agents Classes in Huyton with Roby | 6 to 67',
  description: 'Vibe coding, AI agents, Python and maths taught live online for Huyton, Roby, Page Moss, Longview and Court Hey learners aged 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Huyton with Roby, with a project where a search agent only escapes a dead end once it is given a memory.',
  twitterDescription: 'Huyton with Roby vibe coding, AI agents and Python classes online, ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Huyton with Roby',
    description: 'Live online lessons in vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Huyton with Roby and the rest of Knowsley.'
  },

  h1: 'Vibe coding and AI agents classes in Huyton with Roby',
  capsuleQ: 'Which vibe coding and AI agents classes are best for Huyton with Roby learners?',
  capsule: 'Huyton with Roby is an ONS built-up area in Knowsley, and the 2021 census put 59,845 residents in it. Roby, Page Moss, Longview, Bowring Park, Court Hey and Woolfall Heath are recorded suburbs within it. From age six to 67, learners here study vibe coding, AI agents, Python, coding and maths over live video with tutors based in India, either alone with a tutor or in a group of five to ten who share a level. Every course puts clear thinking before tools, so a learner can say why an agent did what it did. You can try a lesson free and hear which course we would choose. From then on the fee is USD 100 a month for a group place or USD 150 a month for private lessons. In the Huyton project a search agent places six sites across 193 Census areas, gets stuck, and is rescued by one addition: a short memory of where it has just been.',
  lead: 'An agent that improves a plan one small step at a time will sooner or later reach a plan that no single step can improve. That is not the same as the right answer. It may simply be a dead end, a layout that looks fine from where the agent stands and is beaten by one it cannot reach without first getting worse. The obvious fix, allowing a step backwards, fails at once, because the next step forwards undoes it. Tabu search adds the missing piece: the agent keeps a list of recent moves and refuses to reverse them for a while. The Huyton project measures how much that list is worth and how long it should be.',
  wa: 'Hello Modern Age Coders, please could we arrange a free vibe coding or AI agents lesson for a learner in Huyton?',

  picks: {
    eyebrow: 'Huyton course picks',
    h2: 'Huyton with Roby courses in thinking, vibe coding and agents',
    intro: 'Four starting points by age, each opening with a free live lesson. We do not take card details to book it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: step-by-step plans, dead ends and ways of backing out of them.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'A child explains a game to an AI, sees it built in Scratch and then hunts for what is wrong.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects, including search agents like the one on this page.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Students and adults', note: 'Algorithms in depth: search, heuristics and knowing what a method can and cannot guarantee.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Huyton with Roby and Knowsley',
      h2: 'Huyton, Roby, Page Moss, Longview and Bowring Park',
      intro: 'Three ONS built-up areas in Knowsley, and the suburbs recorded inside the first of them.',
      body: [
        { kind: 'table', caption: 'ONS built-up areas in Knowsley, residents at the 2021 census', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Huyton with Roby', '59,845'],
          ['Kirkby', '45,560'],
          ['Prescot', '39,225']
        ] },
        { kind: 'p', text: 'These are three separate ONS figures, shown side by side and not added together. Postcodes.io lists Roby, Page Moss, Bowring Park, Longview, Huyton Park, Woolfall Heath, Court Hey and Stockbridge Village as suburban areas; for every one of them, the Census output area closest to the recorded point is part of the Huyton with Roby built-up area. Knowsley schools work to England\'s national curriculum, with GCSE and A level ahead, and lessons with us stop for any holiday weeks you name.' },
        { kind: 'callout', h3: 'Merseyside, the North West and how we teach', p: 'Other pages cover <a class="cg-inline-link" href="/coding-classes-in-merseyside">Merseyside as a whole</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. The case for learning to reason before leaning on AI is made on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Huyton project',
      h2: 'Tabu search: an agent that remembers where it has just been',
      intro: 'Six sites, 193 areas, forty attempts, and a memory that changes the result.',
      body: [
        { kind: 'p', text: 'The learner sets the agent a placement puzzle. The Census output areas that make up Huyton with Roby number 193 within Knowsley, holding 58,998 residents by our count, and the ONS publishes a population-weighted centre point for each. Six sites must be put on six of those points so that the average resident is as close as possible to one of them, measured in a straight line. There are far too many layouts to try them all. So the agent starts from six random points and improves: a move shifts one site to one of the eight areas closest to it.' },
        { kind: 'p', text: 'Plain local search takes whichever move helps most and stops when none helps. Tabu search never stops early. At every turn it takes the least harmful move available, even when that move makes the layout worse, and it writes the area it has just left onto a tabu list so that it cannot step straight back. The length of that list is the agent\'s memory. Both methods were run from the same 40 random starts.' },
        { kind: 'table', caption: 'Average straight-line distance from a resident to the closest of six sites, in metres, over 40 random starts (our Python run)', head: ['Method', 'Mean result', 'Worst of 40'], rows: [
          ['Six random sites, no search', '832.7', 'not recorded'],
          ['Plain local search', '576.6', '597.2'],
          ['Tabu search, no memory', '576.1', '597.2'],
          ['Tabu search, memory of 3 moves', '575.3', '587.0'],
          ['Tabu search, memory of 10 moves', '573.2', '573.4'],
          ['Tabu search, memory of 25 moves', '573.0', '573.4'],
          ['Tabu search, memory of 60 moves', '573.4', '580.4']
        ] },
        { kind: 'p', text: 'Local search ends within 1% of 573.0 metres, the lowest figure any run reached, in 31 of the 40 attempts; the other nine are dead ends, the worst at 597.2. Letting the agent move downhill without a memory changes almost nothing, because it steps out of the dead end and straight back in. A memory of ten moves brings all 40 runs within 1%. A memory of 60 does slightly worse again, since so many moves are forbidden that good ones are blocked. The price is effort: about 7,199 layouts scored per run against a median of 1,072 for local search. And 573.0 is only the lowest we found. Nothing here proves a better layout does not exist.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Solve a sliding puzzle with the rule "never undo your last three moves" and see how it changes the game.' },
          { h3: 'Ages 11 to 15', p: 'Code local search for two sites on a small grid in Python and find a start that traps it.' },
          { h3: 'Ages 15 and up', p: 'Add the tabu list, vary its length across 40 starts and chart the worst result for each.' }
        ] },
        { kind: 'callout', h3: 'Data credit', p: 'Resident counts are ONS Census 2021 figures from Nomis, and the centre points and area lookups come from the ONS Open Geography Portal, all under the Open Government Licence. The sites are imaginary, and the search code and its results are ours.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Memory in agents',
      h2: 'What the tabu list teaches about vibe coding and AI agents',
      intro: 'An agent with no record of its own steps will repeat them.',
      body: [
        { kind: 'table', caption: 'From the Huyton placement puzzle to AI agents in general', head: ['In the tabu project', 'When you build or use an agent'], rows: [
          ['Nine of 40 local searches hit a dead end', 'Stopping when nothing improves is not proof of success'],
          ['No memory: out of the trap and straight back', 'Agents loop when they cannot see their own history'],
          ['Ten remembered moves fixed all 40 runs', 'A small, well-chosen memory can be enough'],
          ['Sixty remembered moves did worse', 'More memory is not automatically better'],
          ['7,199 layouts scored against 1,072', 'Ask what the extra reliability costs']
        ] },
        { kind: 'p', text: 'Anyone who has watched an AI coding assistant apply a fix, break something, undo the fix and then suggest it again has seen the no-memory row of that table. With vibe coding, where the learner sets out what is wanted and the AI produces the code, Huyton students learn to keep their own list of what has been tried so the conversation cannot circle. AI agents that plan over many steps need the same thing built in, and deciding what to remember and for how long is a design choice. Agent building with us starts once Python is comfortable, which tends to mean age sixteen and above, and any Copilot Studio agent work is done in one-to-one lessons. There is more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents route for UK students</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'We have no link with the ONS, Nomis or postcodes.io. Their open data is used as published, and they have not checked this page.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Steps',
    h2: 'From sliding puzzles to agents with a memory',
    intro: 'Treat the year bands loosely; a free lesson shows where to begin.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Plans, dead ends and rules for backing out of them.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch and first Python, built with an AI and tested by hand.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and search', p: 'Projects with search and heuristics, in step with GCSE and A level.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Algorithms and agents', p: 'Search methods, generative AI and agents that plan.', courses: ['data-structures-algorithms-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and memory',
    h2: 'What is tabu search, and why does an AI agent need a memory of its moves?',
    intro: 'Tabu search is a method that keeps improving a solution by always taking the least-bad available move while forbidding recently reversed ones, and an agent needs that memory because without it a step out of a dead end is undone by the very next step.',
    p1: 'Placing six sites across 193 Census areas in Huyton with Roby, plain local search averaged 576.6 metres with a worst case of 597.2, while tabu search with a ten-move memory averaged 573.2 with a worst case of 573.4.',
    p2: 'Students who have built it ask two things of any agent: what does it remember, and what happens when it gets stuck?',
    closer: 'Teenagers in Huyton who can code a memory into an agent understand why an assistant goes round in circles, and that understanding comes from writing the code themselves.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'Online lessons for Roby, Page Moss and Longview',
    intro: 'You need a computer with a keyboard and an internet line that can hold a video call.',
    cells: [
      { h3: 'Learner in control', p: 'The student writes the prompts and the code while sharing a screen. The tutor\'s job is to question and to explain.' },
      { h3: 'Placed by a trial', p: 'A free first lesson shows what the learner can already do, so nothing is repeated and nothing is skipped.' },
      { h3: 'Free to begin', p: 'That first lesson costs nothing and we recommend a course at the end of it.' },
      { h3: 'Matched groups', p: 'A group means five to ten UK learners working at one level.' },
      { h3: 'Two sessions weekly', p: 'Lessons run twice a week and halt during school holidays.' },
      { h3: 'Same hour all year', p: 'Our tutors shift with British Summer Time so that your slot does not.' }
    ],
    spec: { title: 'Why video', p: 'Filling a class with learners at one stage, all available on one evening, is hard within a single borough. Drawing on the whole UK makes it easy.' }
  },

  fees: {
    h2: 'Huyton with Roby fees',
    intro: 'Learners in Huyton pay the international rate that applies outside India.',
    first: 'A free lesson of full length, followed by our course advice.',
    group: 'Around eight live group lessons each month.',
    private: 'Around eight live one-to-one lessons each month.',
    closer: 'All amounts are in US dollars; we do not quote in pounds. The first invoice follows the trial, once a course and a regular time are agreed. See the pricing page for holiday breaks, absences and changes of format.'
  },

  reviewsH2: 'Reviews left on Google by parents and learners in the UK, Merseyside included',

  book: {
    h2: 'Book a free Huyton lesson',
    intro: 'Send an age or school year and a favourite interest. The trial may be a puzzle with a no-undo rule, a Scratch game built with AI help, some first Python, or a small search agent.',
    success: 'Thank you. Your Huyton request is with us.'
  },

  faq: {
    h2: 'Huyton with Roby questions',
    intro: 'Tabu search, the placement project, vibe coding, agents and practical points.',
    items: [
      { q: 'What is the population of Huyton with Roby?', a: 'The ONS published 59,845 residents for the Huyton with Roby built-up area at the 2021 census.' },
      { q: 'Can learners in Huyton take vibe coding and AI agents classes?', a: 'Yes, by live video. Ages 6 to 67 are welcome from Roby, Page Moss, Longview, Court Hey and anywhere else in Knowsley.' },
      { q: 'What is a local optimum?', a: 'A solution that no single small change can improve, even though a better solution exists elsewhere. In the Huyton project, nine of 40 local searches ended in one.' },
      { q: 'How long should a tabu list be?', a: 'Long enough to stop the search stepping back into the trap it just left, and short enough not to forbid useful moves. In our test a memory of 10 to 25 moves worked well, and 3 or 60 worked less well.' },
      { q: 'What happens in the Huyton project?', a: 'A Python agent places six sites on 193 Census areas to shorten the average straight-line distance for residents, first by plain local search and then by tabu search with different memory lengths.' },
      { q: 'What is vibe coding, in your lessons?', a: 'The learner says in plain words what a program should do, an AI writes it, and the learner reads, tests and fixes the result.' },
      { q: 'When can a student begin building AI agents?', a: 'Once Python is comfortable, which is mostly from age sixteen. Copilot Studio agents are offered in private lessons only.' },
      { q: 'Do you cover GCSE and A level computer science topics?', a: 'We do, including algorithms and search, taught for understanding. Grades are never guaranteed.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first one. Group lessons are then USD 100 per month and private lessons USD 150 per month.' },
      { q: 'Do classes run in school holidays?', a: 'No, we stop for the weeks you give us and start again afterwards.' }
    ]
  },

  next: {
    eyebrow: 'More places',
    h2: 'Other Merseyside pages',
    html: 'Separate pages, each with its own project, cover <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a>, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-st-helens">St Helens</a>, <a class="cg-inline-link" href="/ai-and-programming-classes-in-bootle">Bootle</a> and <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-widnes">Widnes</a> (the 80/20 rule). All UK pages are listed on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Huyton with Roby and Knowsley',
  footerPlaces: [
    { href: '/coding-classes-in-merseyside', label: 'Merseyside' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-hyr .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.6vw, 2.2rem); }
.cg-root.cg-hyr .cg-hero h1 { font-weight: 800; letter-spacing: -0.034em; line-height: 1.02; }
.cg-root.cg-hyr .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 1.1rem; }
.cg-root.cg-hyr .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-hyr .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.026em; }
.cg-root.cg-hyr .cg-table caption { font-weight: 500; text-align: left; font-size: 0.88rem; color: var(--cg-accent); }
.cg-root.cg-hyr .cg-table td { font-variant-numeric: tabular-nums; padding-block: 0.7rem; }
.cg-root.cg-hyr .cg-table th { font-weight: 700; font-size: 0.8rem; letter-spacing: 0.03em; }
.cg-root.cg-hyr .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-hyr .cg-callout { border-left-width: 3px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Knowsley (E08000011). ONS 2021 BUAs (published): Huyton with Roby 59,845; Kirkby 45,560; Prescot 39,225. postcodes.io suburban areas (nearest OA centroid in the Huyton with Roby BUA, our check): Roby, Page Moss, Bowring Park, Longview, Huyton Park, Woolfall Heath, Court Hey, Stockbridge Village.',
    localProject: 'Census 2021 OA residents and ONS OA PWC for the 193 Knowsley OAs in the Huyton with Roby BUA (58,998 residents, our sum). 6 sites on OA centroids minimising population-weighted mean straight-line distance; moves to the 8 closest areas; 40 random starts, seed 2026. Random 832.7 m; local search mean 576.6 (lowest 573.0, worst 597.2; 31/40 within 1%; median 1,072 evaluations); tabu 150 moves (~7,199 evaluations): memory 0 576.1/597.2; 3 575.3/587.0; 10 573.2/573.4 (40/40); 25 573.0/573.4; 60 573.4/580.4. Lesson family: tabu search.',
    requiredMentions: [
      'tabu search',
      '832.7',
      '576.6',
      '59,845',
      '58,998',
      'Page Moss',
      'Bowring Park',
      'Longview',
      'Woolfall Heath',
      'Court Hey'
    ],
    sources: [
      { claim: 'ONS Census 2021 usual residents at output area level via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'ONS Output Areas (December 2021) population-weighted centroids and OA to built-up area lookup, Open Geography Portal.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'postcodes.io places: suburban areas in Knowsley.', url: 'https://api.postcodes.io/places?q=Page%20Moss' }
    ],
    rejectedClaims: [
      'That 573.0 m is the optimal layout: it is only the lowest value our runs reached.',
      'Real facilities, shops or services at the six sites: the sites are imaginary points.',
      'Travel times or road distances: only straight-line distances between centre points were computed.',
      'Swanside as part of Huyton with Roby: its closest output area is in the Liverpool built-up area.',
      'Sum of the Knowsley built-up areas: not added.',
      'Local history or notable residents: not read from a source; not claimed.',
      'Sterling prices and exam results: none.'
    ]
  }
};
