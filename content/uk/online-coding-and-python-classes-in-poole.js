'use strict';
// Poole (cg- town page, UK cluster Phase 8, towns band A, row 342). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: how do you split scouts into fair patrols? Anchor (read raw 27 September 2026): Project Gutenberg ebook 65993,
// Baden-Powell, "Scouting for Boys": "EXPERIMENTAL CAMP"; "I have already made a preliminary trial of the scheme with a camp
// of boys"; "A large island was lent for the purpose by the late Mr. Charles Van Raalte, Brownsea Island, near Poole";
// "PATROL SYSTEM"; "The troop of boys was divided up into 'Patrols' of five, the senior boy in each being Patrol Leader";
// "Every night one patrol went on duty as night picket".
// Our run (scratchpad pol/part.py, 27 September 2026) on an INVENTED camp, labelled as such on the page: 15 scouts with
// tracking-test scores 18, 17, 17, 15, 14, 13, 13, 12, 11, 10, 9, 8, 7, 6, 4 (total 174, fair share 58 per patrol of five).
// Split in list order: 81, 59, 34 (gap 47). Snake draft: 59, 58, 57 (gap 2). Greedy, strongest first, to the weakest patrol
// with room: 59, 57, 58 (gap 2). Same greedy, weakest first: 53, 58, 63 (gap 10). Exhaustive over all 126,126 splits into
// three patrols of five: perfect 58, 58, 58 exists, 342 perfect splits. 20 scouts into four patrols of five: 488,864,376
// possible splits (exact count).
// Lesson family: number partitioning into equal-size groups (greedy order dependence vs exhaustive search, combinatorial
// explosion); screened (number partitioning, partition problem, Karmarkar, team balancing, snake draft: 0 hits; Suffolk's bin
// packing has a capacity not a group count; East Dunbartonshire's linear partition keeps order). Radio and Morse avoided:
// Cornwall registered Marconi and Morse.
// Place facts: Nomis Census 2021 TS007A, Bournemouth, Christchurch and Poole E06000058: total 400,198; under 5 18,878 (4.7%;
// England 5.4%); 10 to 14 21,342 (5.3%; 6.0%); 15 to 19 22,257 (5.6%; 5.7%); 55 to 59 26,526 (6.6%; 6.7%); 65 to 69 20,818
// (5.2%; 4.9%); 80 to 84 12,204 (3.0%; 2.5%). ONS 2021 BUAs: Poole 141,005; Bearwood 4,135 (bands and areas chosen to differ
// from the Bournemouth page, which uses 5 to 9, 20 to 24, 30 to 34, 70 to 74, 75 to 79, 85+ and Bournemouth, Christchurch,
// Merley).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'POOLE', label: 'Poole', blurb: 'Online coding and Python classes for Poole, with a project that splits a scout camp into fair patrols, inspired by the Brownsea Island camp.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-poole',
  code: 'pol',
  accent: '#63306B',
  accentRationale: 'Poole: a heathland heather purple (7.81:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Poole',
    eyebrow: 'Poole, Dorset, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dorset' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Dorset', href: '/coding-classes-in-dorset' },
    { label: 'South West', href: '/coding-and-ai-classes-in-south-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Poole, England',
  title: 'Online Coding and Python Classes in Poole | AI, Ages 6 to 67',
  description: 'Live online coding, Python and AI lessons for Poole children, teenagers and adults aged 6 to 67, taught one-to-one or in small groups. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Poole, and a project that splits a scout camp into fair patrols of five, the way the Brownsea Island camp was organised.',
  twitterDescription: 'Poole online coding, Python and AI classes for ages 6 to 67. First live lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Poole',
    description: 'Online coding, Python, AI and mathematics for children, teenagers and adults in Poole, taught live in English and placed by level.'
  },

  h1: 'Online coding and Python classes in Poole',
  capsuleQ: 'What are the best online coding and Python classes in Poole?',
  capsule: 'Poole is part of the Bournemouth, Christchurch and Poole council area, which had 400,198 residents in the 2021 census; the ONS counts 141,005 in the Poole built-up area. Across the council area young children and teenagers are a smaller share than in England, and people in their late sixties and early eighties a larger one. Python, coding, AI and maths lessons reach Poole live over video from our teachers in India, for learners aged 6 to 67, taught solo or in groups of five to ten at one stage. A free first lesson decides where to begin. The Poole project borrows an idea from a famous camp held just off the town. Staying on costs USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'In Scouting for Boys, Robert Baden-Powell describes an experimental camp held on "Brownsea Island, near Poole", on an island lent for the purpose by Charles Van Raalte. The secret of its success, he wrote, was the patrol system: "The troop of boys was divided up into Patrols of five", each with its own leader, and patrols competed with one another. That only works if the patrols are fairly matched. So here is a question for a programmer. Given a group of scouts with different skill scores, how should they be split into patrols of five so that no patrol is much stronger than another? It sounds like common sense. A Poole learner who tries it in Python finds that the order you pick in changes everything.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python lesson for a learner in Poole.',

  picks: {
    eyebrow: 'Poole starting courses',
    h2: 'First courses for Poole learners',
    intro: 'Match the course to the learner. The first live lesson of each one is free and needs no payment card.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with teams, scores and fair-play games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with lists and totals, plus simple AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Full Python for teenagers, including the patrol-splitting project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Adult Python from zero, through algorithms and data.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Bournemouth, Christchurch and Poole',
      h2: 'An older population by the harbour',
      intro: 'Six further bands from the 2021 census age table on Nomis for the council area, set against England.',
      body: [
        { kind: 'table', caption: 'Bournemouth, Christchurch and Poole compared with England, six more age bands (TS007A, 2021)', head: ['Band', 'Council area residents', 'Council area %', 'England %'], rows: [
          ['Under 5', '18,878', '4.7%', '5.4%'],
          ['10 to 14', '21,342', '5.3%', '6.0%'],
          ['15 to 19', '22,257', '5.6%', '5.7%'],
          ['55 to 59', '26,526', '6.6%', '6.7%'],
          ['65 to 69', '20,818', '5.2%', '4.9%'],
          ['80 to 84', '12,204', '3.0%', '2.5%']
        ] },
        { kind: 'p', text: 'Young children and early teens are a noticeably smaller share than nationally, and people in their late sixties and early eighties a larger one. The ONS places 141,005 people in the Poole built-up area and 4,135 in Bearwood, both inside the council area. Poole schools teach England\'s national curriculum, and our lessons pause in whichever holiday weeks you send us.' },
        { kind: 'callout', h3: 'County and region', p: 'See our <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a> page for the county and <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a> for the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Poole project',
      h2: 'Fair patrols of five',
      intro: 'An invented camp of 15 scouts, three patrols, and four ways to split them.',
      body: [
        { kind: 'p', text: 'The learner invents a camp of 15 scouts, each with a tracking-test score out of 20: 18, 17, 17, 15, 14, 13, 13, 12, 11, 10, 9, 8, 7, 6 and 4. They add up to 174, so a perfectly fair split into three patrols of five would give each patrol 58. The first attempt simply takes the scouts in list order, five at a time. It produces patrols worth 81, 59 and 34, a gap of 47 between strongest and weakest, the kind of mismatch that would spoil any competition.' },
        { kind: 'table', caption: 'Our Python splits of an invented 15-scout camp into three patrols of five, 27 September 2026', head: ['Method', 'Patrol totals', 'Gap, strongest to weakest', 'Comment'], rows: [
          ['List order, five at a time', '81, 59, 34', '47', 'Strongest scouts land together'],
          ['Snake draft', '59, 58, 57', '2', 'Pick order 1-2-3, then 3-2-1'],
          ['Greedy, strongest scout first', '59, 57, 58', '2', 'Each scout joins the weakest patrol with room'],
          ['Greedy, weakest scout first', '53, 58, 63', '10', 'Same rule, worse order'],
          ['Try every split', '58, 58, 58', '0', '126,126 splits checked; 342 are perfect']
        ] },
        { kind: 'p', text: 'Two quick fixes do far better. A snake draft, where the captains pick 1-2-3 then 3-2-1, gives 59, 58 and 57. A greedy rule that puts each scout, strongest first, into the weakest patrol that still has room gives the same gap of 2. But run the very same greedy rule starting from the weakest scout and the gap jumps to 10. The rule did not change; only the order did. That is the most important idea on the page: greedy methods can be excellent or poor depending on the order they see the data.' },
        { kind: 'p', text: 'Can anyone do better than a gap of 2? The learner writes a program that tries every possible way to form three patrols of five: 126,126 splits. It finds that a perfect split, 58, 58 and 58, exists, in fact 342 of them. Then comes the warning. With 20 scouts in four patrols the number of possible splits is 488,864,376, and it keeps exploding as camps grow, which is why real programs use clever shortcuts rather than checking everything. This is the number partitioning problem, one of computer science\'s famous hard problems.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Split a pile of numbered cards into three piles of five with equal totals, by hand.' },
          { h3: 'Ages 11 to 15', p: 'Write the snake draft and the greedy rule in Python, and try different orders.' },
          { h3: 'Ages 15 and up', p: 'Search every split, count the perfect ones, and see how fast the numbers grow.' }
        ] },
        { kind: 'callout', h3: 'Baden-Powell\'s idea, our invented camp', p: 'The quotations come from the Project Gutenberg edition of Scouting for Boys. The scouts and their scores are invented for the lesson; the splits and counts are ours.' }
      ]
    },
    {
      id: 'brownsea', tint: 'deep', eyebrow: 'Why Brownsea',
      h2: 'An experimental camp near Poole',
      intro: 'What Scouting for Boys says about the first trial.',
      body: [
        { kind: 'table', caption: 'The experimental camp in Scouting for Boys, Project Gutenberg edition', head: ['Detail', 'In Baden-Powell\'s words or summary'], rows: [
          ['Where', 'Brownsea Island, near Poole'],
          ['Who lent it', 'The late Mr. Charles Van Raalte'],
          ['What it was', 'A preliminary trial of the scheme with a camp of boys'],
          ['Patrols', 'Patrols of five, the senior boy in each the Patrol Leader'],
          ['Night duty', 'Each night one patrol went on duty as night picket'],
          ['Why it worked', 'The patrol organisation was the secret of their success']
        ] },
        { kind: 'p', text: 'Splitting things fairly is a daily job for software. Cloud systems spread work across servers so none is overloaded, schools balance class sizes and abilities, and games match players into even teams. Most of these use quick rules like the snake draft or greedy method, because checking every possibility is impossible at scale. A Poole learner who has seen one rule succeed and fail on the same scouts knows to test the order of any greedy algorithm.' },
        { kind: 'p', text: 'We have no connection with Project Gutenberg, the Scout movement or the census office. The book and figures are theirs; the invented camp and any error in the splits are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From card piles to hard problems',
    intro: 'School years are only indicative; the trial sets the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Teams in blocks', p: 'Block coding with scores, teams and simple fairness rules.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python lists', p: 'Sorting, totals and first algorithms in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Algorithms and AI', p: 'Search, optimisation and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Problem solving', p: 'Adult Python up to algorithms and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fairness',
    h2: 'Would an AI check whether its split was fair?',
    intro: 'A plausible answer can hide an unfair one.',
    p1: 'Ask a chatbot to split a list into balanced groups and it will usually return a tidy answer. Whether a better split exists, or whether its method depended on the order of the list, it rarely says.',
    p2: 'A Poole learner who has watched the same greedy rule give a gap of 2 or 10 knows to test the order before trusting the result.',
    closer: 'Testing whether a quick answer is really fair is exactly the sort of thinking that makes coding worth learning for Poole teenagers in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Poole and Bearwood, by live video',
    intro: 'Anywhere in the town joins the same lesson.',
    cells: [
      { h3: 'Code by the learner', p: 'The student writes each program; the tutor follows over screen share and guides with questions.' },
      { h3: 'Placed carefully', p: 'From Year 4 to Year 12, the school year and the trial together decide the starting topic, with the exam board noted.' },
      { h3: 'Trial at no cost', p: 'The first lesson is free and closes with an honest recommendation.' },
      { h3: 'Patrols of peers', p: 'Classes gather five to ten UK learners who are at the same stage.' },
      { h3: 'Twice weekly', p: 'Two lessons a week in term; holidays stay free.' },
      { h3: 'Same time all year', p: 'UK clock changes are absorbed by our teachers.' }
    ],
    spec: { title: 'Why groups meet online', p: 'Five Poole learners at one level, free at the same time, rarely live on one road. Online classes give everyone matching classmates.' }
  },

  fees: {
    h2: 'Poole fees',
    intro: 'Poole families pay the one rate we use for every country outside India.',
    first: 'A full lesson without charge, ending with a course suggestion.',
    group: 'Roughly eight live small-group lessons a month.',
    private: 'Roughly eight live private lessons a month.',
    closer: 'Fees are set in US dollars, not sterling. Payment begins after the trial has settled a course and a regular weekly slot; holidays, missed sessions and changing format are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from Poole and beyond',

  book: {
    h2: 'Book a free Poole lesson',
    intro: 'Send an age or school year and one interest. The trial could be a Scratch team game, a first Python program, an AI mini-project, or the fair-patrols puzzle.',
    success: 'Thank you. Your Poole request is with us.'
  },

  faq: {
    h2: 'Poole questions',
    intro: 'Patrols, population figures and lesson basics.',
    items: [
      { q: 'What is the population of Poole?', a: 'The ONS gives 141,005 for the Poole built-up area in 2021; the wider council area of Bournemouth, Christchurch and Poole had 400,198.' },
      { q: 'Are online coding and Python classes open to Poole learners?', a: 'Yes. Our live coding, Python, AI and maths lessons take learners in Poole from age 6 up to 67.' },
      { q: 'What is the patrol project?', a: 'Learners split an invented camp of 15 scouts into three fair patrols of five in Python, comparing quick rules with a search of all 126,126 splits.' },
      { q: 'What is number partitioning?', a: 'Dividing a set of numbers into groups whose totals are as equal as possible, a famous hard problem in computer science.' },
      { q: 'What is the Brownsea Island link?', a: 'Scouting for Boys describes Baden-Powell\'s experimental camp on Brownsea Island, near Poole, with boys divided into patrols of five.' },
      { q: 'Do lessons take place in person?', a: 'No, everything is live online.' },
      { q: 'Is there exam support?', a: 'Yes, for GCSE and A level maths and computing, aimed at understanding and never at a promised grade.' },
      { q: 'Who can join?', a: 'Learners between 6 and 67.' },
      { q: 'What does it cost?', a: 'The opening lesson is free, then USD 100 monthly for a group or USD 150 monthly for private lessons.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes, once we have your dates.' }
    ]
  },

  next: {
    eyebrow: 'Nearby',
    h2: 'More pages near Poole',
    html: 'Next door, the <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-bournemouth">Bournemouth</a> page finds the first-person chapters of Jekyll and Hyde. For the county see <a class="cg-inline-link" href="/coding-classes-in-dorset">Dorset</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links every page.',
    waLabel: 'WhatsApp us'
  },

  footerHeading: 'Poole and Dorset',
  footerPlaces: [
    { href: '/coding-classes-in-dorset', label: 'Dorset' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-pol .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3vw, 2.5rem); }
.cg-root.cg-pol .cg-hero h1 { font-weight: 730; letter-spacing: -0.025em; line-height: 1.06; }
.cg-root.cg-pol .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-pol .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pol .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.02em; }
.cg-root.cg-pol .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-pol .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pol .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; }
.cg-root.cg-pol .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-pol .cg-callout { border-left-width: 6px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Bournemouth, Christchurch and Poole (E06000058). Nomis Census 2021 TS007A: total 400,198; under 5 18,878 (4.7%, England 5.4%); 10 to 14 21,342 (5.3%, 6.0%); 15 to 19 22,257 (5.6%, 5.7%); 55 to 59 26,526 (6.6%, 6.7%); 65 to 69 20,818 (5.2%, 4.9%); 80 to 84 12,204 (3.0%, 2.5%). ONS 2021 BUAs: Poole 141,005; Bearwood 4,135. Project Gutenberg 65993, Baden-Powell, Scouting for Boys: "Brownsea Island, near Poole"; lent by "the late Mr. Charles Van Raalte"; "divided up into Patrols of five, the senior boy in each being Patrol Leader"; "one patrol went on duty as night picket".',
    localProject: 'Number partitioning on an INVENTED camp: 15 scores total 174 (58 each); list order 81/59/34 (gap 47); snake draft 59/58/57 (2); greedy strongest first 59/57/58 (2); greedy weakest first 53/58/63 (10); exhaustive 126,126 splits, perfect 58/58/58, 342 perfect; 20 scouts in 4 patrols 488,864,376 splits. Lesson family: number partitioning, greedy order dependence, combinatorial explosion.',
    requiredMentions: [
      '141,005',
      'Bearwood',
      'Brownsea Island',
      'Baden-Powell',
      'Scouting for Boys',
      'Charles Van Raalte',
      'number partitioning',
      '126,126',
      'snake draft'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Bournemouth, Christchurch and Poole and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, Robert Baden-Powell, Scouting for Boys (ebook 65993).', url: 'https://www.gutenberg.org/ebooks/65993' }
    ],
    rejectedClaims: [
      'The camp\'s year and the number of boys: not stated in the passage read; not claimed.',
      'Harbour size rankings and ownership of Brownsea Island today: not claimed.',
      'The book\'s remarks about social class: not repeated.',
      'Marconi and Morse at Poole: Cornwall already uses them; not used.',
      'Named schools and school term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
