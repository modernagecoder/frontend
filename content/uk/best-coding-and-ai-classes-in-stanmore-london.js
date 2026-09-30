'use strict';
// Stanmore, Harrow (cg- district page, UK cluster Phase 9, row 441). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: if an AI
// copies an expert's choice almost every time, why does it still fail the whole task? (imitation learning / behaviour
// cloning, compounding errors over long sequences, states the expert never visited, and what a memory adds).
// Data (read 30 September 2026): OpenStreetMap via one Overpass API query over bbox -0.340,51.600,-0.285,51.632 (ODbL):
// walkable ways simplified to 2,943 junctions, 203.7 km, 829 dead ends.
// Our run (scratchpad g1/stn.py): the expert walks the true shortest route. 300 training trips (at least 700 m apart)
// give 48,373 labelled choices (each neighbour at each junction: is it the expert's next step?). Learner: gradient
// boosted trees on five features (angle between a street and the goal, change in straight-line distance, street length,
// junctions at the far end, distance left). 200 unseen test trips, median 35 junctions, 9,762 expert decisions.
// Per-decision agreement with the expert: 88.1%. Whole trips completed by the cloned policy acting alone: 12.5% (26.3% of
// the 38 trips of up to 25 junctions, 14.4% of the 97 trips of 26 to 40, 1.5% of the 65 longer ones). Three rounds of
// corrective demonstrations (expert labels on the states the learner itself reached, up to 340,722 rows) left success at
// 6.0% to 7.5%. The same first policy with a memory (never re-enter a visited junction, back up when stuck): 97.0%
// completed, routes a median 1.392 times the shortest, 90th percentile 2.265.
// Lesson family: imitation learning / behaviour cloning, compounding errors. Screened 30 September 2026: "imitation
// learning", "behaviour cloning", "behavior cloning" 0 hits; claimed as stn. Harrow borough page = input validation; its
// mentions (Stanmore Hill, Kenton Lane and others) not reused. Southall owns beam search on similar data.
// Place facts: Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153), per ward, not summed: Stanmore
// 13,501; Canons 9,735; Belmont (Harrow) 9,021; Harrow Weald 14,341. postcodes.io (Harrow): Belmont, Harrow Weald (HA3),
// Little Stanmore (HA8) suburban areas; Stanmore recorded as a settlement (HA7).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'STANMORE', label: 'Stanmore', blurb: 'Coding and AI classes for Stanmore in Harrow, with a project on why an AI that copies an expert 88% of the time still fails most whole journeys.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-stanmore-london',
  code: 'stn',
  accent: '#2F3F8F',
  accentRationale: 'Stanmore: a deep ultramarine (9.42:1 contrast), chosen by hand to differ from the pages around it',
  pageType: 'city',
  place: {
    name: 'Stanmore',
    eyebrow: 'Stanmore, Harrow, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Harrow', href: '/coding-classes-in-harrow-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stanmore, London',
  title: 'Coding and AI Classes in Stanmore, London | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Stanmore, Belmont, Harrow Weald and Little Stanmore learners aged 6 to 67, taught live. First lesson free.',
  ogDescription: 'Coding and AI classes for Stanmore, with an imitation learning project showing how small copying errors add up over a long task.',
  twitterDescription: 'Stanmore coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Stanmore',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Stanmore and Harrow, taught live with understanding before imitation.'
  },

  h1: 'Coding and AI classes in Stanmore',
  capsuleQ: 'Where can Stanmore learners find the best coding and AI classes?',
  capsule: 'At Census 2021 the Stanmore ward of Harrow had 13,501 usual residents, with 9,735 in Canons and 14,341 in Harrow Weald, each an ONS figure for one 2022 ward. Belmont, Harrow Weald and Little Stanmore are suburban areas on record in the borough. Coding, AI, Python, vibe coding and maths are taught here on live video by tutors in India, for ages six to 67, either privately or in a small group of five to ten at one level. We want learners to understand a method, not just copy it, and the local project shows why. A program learns to walk Stanmore\'s streets by imitating an expert, matches the expert\'s choice 88.1% of the time, and still finishes only one journey in eight. The first lesson costs nothing and closes with our course advice; after it, a group place is USD 100 a month and private lessons USD 150 a month.',
  lead: 'The simplest way to teach a machine a skill is to show it an expert and ask it to copy: see this situation, make this move. It is called imitation learning, or behaviour cloning, and it is how many driving and robot systems start out, and close to how language models learn to continue text. It has a famous weakness. A copy that is nearly perfect at each step can be hopeless over a long task, because one wrong move lands it somewhere the expert never went, where it has no idea what to do. This project measures that on walking routes through Stanmore from OpenStreetMap, and then tests two possible cures.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Stanmore?',

  picks: {
    eyebrow: 'Stanmore course picks',
    h2: 'Stanmore courses in understanding, Python and AI',
    intro: 'Four courses by age. Start any of them with a live lesson that is free to take and needs no card to book.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: the gap between copying a worked answer and knowing why it works.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games the learner designs, builds with an AI and then tries hard to break.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the copy-the-expert experiment on Stanmore streets.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'Python through machine learning to AI agents that act over many steps.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stanmore and Harrow',
      h2: 'Stanmore, Canons, Belmont and Harrow Weald',
      intro: 'Census 2021 ward counts in the north of Harrow, and places recorded there.',
      body: [
        { kind: 'table', caption: 'Usual residents by 2022 ward, Census 2021, ONS via Nomis', head: ['Ward', 'Residents (2021)'], rows: [
          ['Harrow Weald', '14,341'],
          ['Stanmore', '13,501'],
          ['Canons', '9,735'],
          ['Belmont', '9,021']
        ] },
        { kind: 'p', text: 'These four numbers are separate ward counts and should not be added; the Stanmore ward is not the same as everything people call Stanmore. Postcodes.io records Belmont and Harrow Weald in HA3 and Little Stanmore in HA8 as suburban areas of Harrow, with Stanmore itself listed as a settlement in HA7. Harrow schools follow the national curriculum for England, so our planning runs by school year towards GCSE and A level, and stops for whichever holiday weeks you name.' },
        { kind: 'callout', h3: 'Harrow, London and our approach', p: 'The borough page is <a class="cg-inline-link" href="/coding-classes-in-harrow-london">coding classes in Harrow</a>, and the city page <a class="cg-inline-link" href="/best-coding-class-in-london">London</a>. Why understanding beats copying is argued on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Stanmore project',
      h2: 'Imitation learning: 88% right at every step, 12.5% right overall',
      intro: 'An expert, a copier, 200 unseen journeys, and the arithmetic of small mistakes.',
      body: [
        { kind: 'p', text: 'The map is OpenStreetMap\'s walking network over Stanmore: 2,943 junctions and 203.7 km of streets and paths. The expert is simply the true shortest route. From 300 expert journeys the learner collects 48,373 examples of the form "at this junction, heading for that goal, was this street the expert\'s choice?", described by five numbers such as how closely the street points at the goal. A gradient boosting model learns from them. It is then tested on 200 journeys it has never seen, typically 35 junctions long.' },
        { kind: 'table', caption: 'Copying an expert walker across Stanmore, our Python run on OpenStreetMap data', head: ['Measure', 'Result'], rows: [
          ['Agreement with the expert, junction by junction', '88.1%'],
          ['Whole journeys completed when acting alone', '12.5%'],
          ['Journeys of up to 25 junctions', '26.3%'],
          ['Journeys of more than 40 junctions', '1.5%'],
          ['After three rounds of extra expert corrections', '6.0% to 7.5%'],
          ['Same copier, given a memory of where it has been', '97.0%']
        ] },
        { kind: 'p', text: 'Matching the expert 88.1% of the time sounds impressive, but a 35-junction journey needs about 35 correct choices in a row, and the first wrong turn often leads into a loop: the copier walks up a cul-de-sac, turns round, and makes the same mistake again, because nothing in what it sees tells it that it has been there before. Longer journeys fail far more often than short ones. The textbook cure, asking the expert to label the odd places the copier actually ends up, did not help here; success stayed between 6.0% and 7.5%, because the missing ingredient was not more examples but information. Giving the same copier a memory, so that it never re-enters a junction and backs out when stuck, lifted completion to 97.0%. Its routes were then a median 1.39 times the shortest: it arrives, but not elegantly.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Copy a friend\'s route through a maze one move at a time, then try it from a square they never visited.' },
          { h3: 'Ages 11 to 15', p: 'Record expert routes on a few Stanmore streets in Python and train a simple copier.' },
          { h3: 'Ages 15 and up', p: 'Measure step accuracy against whole-journey success, then add corrections and memory and compare.' }
        ] },
        { kind: 'callout', h3: 'OpenStreetMap data, our learner', p: 'Streets and paths are from OpenStreetMap and its contributors under the Open Database Licence, fetched with the Overpass API. The expert, the learner, the journeys and all percentages are our own work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Imitation and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Small slips multiply when every step depends on the one before.',
      body: [
        { kind: 'table', caption: 'From the Stanmore copier to real AI systems', head: ['In the imitation project', 'When an AI works over many steps'], rows: [
          ['88.1% per step gave 12.5% per journey', 'Per-step scores overstate long-task reliability'],
          ['Long journeys failed most', 'The longer the task, the more checking it needs'],
          ['More corrections did not help', 'More data cannot replace missing information'],
          ['A memory raised completion to 97.0%', 'State and context often matter more than training'],
          ['Routes were still 1.39 times the shortest', 'Finishing is not the same as doing it well']
        ] },
        { kind: 'p', text: 'A language model writes one word at a time, each chosen from what came before, and an AI agent takes one action after another. Both inherit this weakness: a tiny error rate per step compounds across a long answer or a long task, and an early slip can send the rest off course. In vibe coding the learner asks an AI to write a program; our Stanmore learners break big requests into short, checkable steps and test after each one. Agents given long jobs need checkpoints and a record of what they have already tried. Learners begin building agents once their Python is fluent, which for most means the later teens or adulthood, and Copilot Studio agents are private lessons only. There is more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents page for UK students</a> and on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the ONS, Nomis and postcodes.io supplied open data and nothing more; Modern Age Coders alone is responsible for the experiment and any mistake in it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From copying moves to learning policies',
    intro: 'A school year tells us roughly where to begin, and the trial tells us exactly.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Copying, understanding and what to do somewhere new.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and apps designed by the learner and built with AI help.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Learning from examples and testing over whole tasks, with GCSE and A level in view.', courses: ['ai-ml-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Agents over many steps', p: 'Policies, memory and checkpoints for AI agents in Python.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and imitation',
    h2: 'What is imitation learning, and why do small errors compound?',
    intro: 'Imitation learning trains a model to copy an expert\'s choice in each situation; small errors compound because one wrong step takes the model into situations the expert never showed it, where further mistakes become more likely.',
    p1: 'A model copying shortest walking routes across Stanmore agreed with the expert at 88.1% of junctions but completed only 12.5% of 200 unseen journeys, and 1.5% of those longer than 40 junctions; giving it a memory of visited junctions raised completion to 97.0%.',
    p2: 'Learners who have watched that gap open ask of any AI agent: how reliable is it over the whole job, not just the next step?',
    closer: 'Testing the whole task rather than one step is how Stanmore teenagers keep long AI jobs honest, and they learn it by building one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Belmont to Harrow Weald, online',
    intro: 'What you need: a computer, a camera, and broadband that will carry a video lesson.',
    cells: [
      { h3: 'Doing, not watching', p: 'The learner writes every line and runs every test, while the tutor on screen share asks what would happen somewhere the code has not been.' },
      { h3: 'Trial first, plan second', p: 'The free lesson shows what is secure and what is not; exam boards are recorded.' },
      { h3: 'A free opening lesson', p: 'Lesson one is not charged and finishes with a course recommendation.' },
      { h3: 'One level per class', p: 'Five to ten learners, all at a similar stage, drawn from across the UK.' },
      { h3: 'Two lessons each week', p: 'With breaks for school holidays.' },
      { h3: 'The same hour all year', p: 'Our tutors shift when British clocks change; your slot does not.' }
    ],
    spec: { title: 'Why online', p: 'In any one neighbourhood there are rarely five learners at the same level who can all meet on the same evening. Online there are.' }
  },

  fees: {
    h2: 'Stanmore fees',
    intro: 'Learners in Stanmore pay our international prices, the rate card for everywhere outside India.',
    first: 'One complete lesson free, followed by our advice.',
    group: 'Roughly eight live lessons a month in a small group.',
    private: 'Roughly eight live one-to-one lessons a month.',
    closer: 'Fees are quoted and charged in US dollars, not pounds. We invoice only after the trial has fixed a course and a weekly time, and the pricing page explains holidays, missed lessons and swapping between group and private.'
  },

  reviewsH2: 'Harrow families and learners around the country, on Google',

  book: {
    h2: 'Book a free Stanmore lesson',
    intro: 'Let us know an age or school year and what the learner enjoys. We might begin with a copy-my-route maze, a Scratch game built with an AI, a first Python program, or a small learner trained on real journeys.',
    success: 'Thank you. Your Stanmore request is with us.'
  },

  faq: {
    h2: 'Stanmore questions',
    intro: 'Imitation, compounding errors, vibe coding and the practical side of lessons.',
    items: [
      { q: 'How many people live in Stanmore?', a: 'Census 2021 counted 13,501 usual residents in the Stanmore ward of Harrow. The wider area people call Stanmore has no separate official figure.' },
      { q: 'Are coding and AI classes available online in Stanmore?', a: 'Yes, on live video for ages 6 to 67 in Stanmore, Belmont, Harrow Weald and across Harrow.' },
      { q: 'What is behaviour cloning?', a: 'The simplest kind of imitation learning: record what an expert does in each situation and train a model to predict the same action. It needs no reward signal, only examples.' },
      { q: 'What are compounding errors?', a: 'Mistakes that build on each other across a sequence. A model right 88.1% of the time per step completed only 12.5% of our Stanmore journeys, because one slip changes everything that follows.' },
      { q: 'What does the Stanmore project involve?', a: 'Training a model on 300 expert walking routes, testing it alone on 200 new journeys, then trying extra corrections and a memory of visited junctions.' },
      { q: 'Is vibe coding part of lessons?', a: 'Yes, for every age. Learners say what they want built, then check and fix the AI\'s work in small steps.' },
      { q: 'At what point do learners build AI agents?', a: 'When their Python is fluent, usually in the later teens or as adults; Copilot Studio agents are taught privately.' },
      { q: 'Do you teach GCSE and A level content?', a: 'Yes, computer science and maths, with the aim of real understanding; grades are never guaranteed.' },
      { q: 'What are the fees?', a: 'No charge for the first lesson, then USD 100 a month in a group or USD 150 a month for private lessons.' },
      { q: 'Do lessons stop for the holidays?', a: 'They do; tell us the school holiday dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More Harrow and north-west London pages',
    html: 'Close by, each with a different experiment: <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> (checking inputs properly), <a class="cg-inline-link" href="/ai-and-programming-classes-in-edgware-london">Edgware</a> (wrong training labels), <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-wembley-london">Wembley</a> (trade-offs) and <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a>. Further afield, use the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stanmore and Harrow',
  footerPlaces: [
    { href: '/coding-classes-in-harrow-london', label: 'Harrow' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-stn .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.3vw, 2.7rem); }
.cg-root.cg-stn .cg-hero h1 { font-weight: 760; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-stn .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-stn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stn .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.019em; }
.cg-root.cg-stn .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-stn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stn .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-stn .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-stn .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Harrow (E09000015), London. England: national curriculum, GCSE and A level. Census 2021 usual residents by 2022 ward (Nomis NM_2021_1, TYPE153): Stanmore 13,501; Canons 9,735; Belmont (Harrow) 9,021; Harrow Weald 14,341. postcodes.io (Harrow): Belmont, Harrow Weald (HA3), Little Stanmore (HA8) suburban areas; Stanmore settlement (HA7).',
    localProject: 'OSM via Overpass, bbox -0.340,51.600,-0.285,51.632: 2,943 junctions, 203.7 km, 829 dead ends. Expert = shortest path; 300 training trips, 48,373 rows; gradient boosting on 5 features; 200 test trips (median 35 junctions, 9,762 decisions). Step agreement 88.1%; unaided completion 12.5% (<=25 junctions 26.3%, 26-40 14.4%, >40 1.5%); 3 corrective rounds 6.0-7.5%; with visited-junction memory 97.0%, median ratio 1.392, p90 2.265. Lesson family: imitation learning, compounding errors.',
    requiredMentions: [
      '13,501',
      '9,735',
      '14,341',
      '2,943',
      '48,373',
      'Belmont',
      'Harrow Weald',
      'Little Stanmore',
      'imitation learning',
      'behaviour cloning'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by 2022 ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'OpenStreetMap streets and paths in Stanmore via the Overpass API, OpenStreetMap and contributors, Open Database Licence.', url: 'https://www.openstreetmap.org/copyright' },
      { claim: 'postcodes.io places: suburban areas and settlements in Harrow.', url: 'https://api.postcodes.io/places?q=Harrow%20Weald' }
    ],
    rejectedClaims: [
      'A population for Stanmore beyond the ward: no published figure for exactly that area.',
      'Bentley Priory, wartime or other local history: not read from a source; not claimed.',
      'That corrective demonstrations never help: reported only as not helping in this experiment.',
      'How any named driving or robot system is trained: described in general terms only.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
