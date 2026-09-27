'use strict';
// Guildford (cg- town page, UK cluster Phase 8, towns band A, row 322). Keyword slug per the owner's 2026-09-27
// instruction. Spine: can a computer solve Lewis Carroll's logic puzzles? Anchors (read raw 27 September 2026): Surrey
// History Centre, Exploring Surrey's Past, "Lewis Carroll (1832 - 1898)": "a frequent visitor to Guildford"; "He installed
// his sisters in a house called The Chestnuts on Castle Hill in September 1868 and he always spent Christmas with them";
// "Occasionally he preached in St Mary's church"; "the line of verse which was to become the last line in 'The Hunting of the
// Snark' came into his head" on a walk; "Guildford has a good claim to be, after Oxford, the place most associated with his
// adult life"; plaque "on one of the gateposts in Castle Hill" unveiled "on 24 May 1933"; letter to Mary Manners, 7 Feb 1895,
// SHC ref G103/1/32. Project Gutenberg ebook 28696, Lewis Carroll, "Symbolic Logic", problem 60 (ten premises, "Univ.
// 'animals'") and answer "60. I always avoid a kangaroo"; problem 1 "Babies are illogical; Nobody is despised who can manage a
// crocodile; Illogical persons are despised" with answer "Babies cannot manage crocodiles".
// Our model (computed inline): each premise as an implication plus its contrapositive, 20 directed edges; breadth-first
// search from "kangaroo" reaches "avoided by me" in 10 steps: kangaroo -> not pet -> not moon-gazer -> not prowling -> not
// carnivore -> not mouse-killer -> not cat -> not in this house -> not taking to me -> detested -> avoided. Without
// contrapositives: no path. Valid extra: cat -> pet in 5 steps. Converse slip: allowing reversed implications "proves" every
// pet is a cat (pet -> moon -> prowl -> carnivore -> kill mice -> cat).
// Lesson family: logical implication as graph search, contrapositive vs converse; screened (syllogism, sorites, Lewis
// Carroll, contrapositive: 0 hits; Lincolnshire used Boolean algebra truth tables, not implication chains).
// Page avoids any discussion of Carroll's photography and later controversies (not relevant; sensitive).
// Place facts: Nomis Census 2021 TS007A, Guildford E07000209: total 143,650; 15 to 19 10,766 (7.5%; England 5.7%); 20 to 24
// 13,147 (9.2%; 6.0%); 5 to 9 7,810 (5.4%; 5.9%); 85+ 3,817 (2.7%; 2.4%). ONS 2021 BUAs: Guildford 77,880; East Horsley
// 5,840; Send 4,095; Pirbright 3,920; Shalford 2,510 (Ash and Ash Vale, Farncombe, Great Bookham cross the boundary).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'GUILDFORD', label: 'Guildford', blurb: 'AI and programming classes for Guildford, with a project that solves Lewis Carroll\'s ten-step logic puzzle by computer.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-guildford',
  code: 'gfd',
  accent: '#6C308A',
  accentRationale: 'Guildford: a looking-glass violet from the solver (6.97:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Guildford',
    eyebrow: 'Guildford, Surrey, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Surrey' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Surrey', href: '/coding-classes-in-surrey' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Guildford, England',
  title: 'AI and Programming Classes in Guildford | Coding for 6 to 67',
  description: 'Online AI, programming, Python and coding classes for learners in Guildford, East Horsley, Send and Shalford, aged 6 to 67, taught live. The first lesson is free.',
  ogDescription: 'Live online AI and programming classes for Guildford, and a Python project that solves Lewis Carroll\'s ten-premise logic puzzle as a search through a graph.',
  twitterDescription: 'Guildford AI, programming and coding classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Guildford',
    description: 'Online AI, programming, Python, logic and mathematics for children, teenagers and adults in Guildford, placed by level and taught live in English.'
  },

  h1: 'AI and programming classes in Guildford',
  capsuleQ: 'What are the best AI and programming classes in Guildford?',
  capsule: 'The Borough of Guildford had 143,650 residents at the 2021 census, with Guildford itself a built-up area of 77,880. It is a place full of students: people aged 20 to 24 made up 9.2 per cent of residents against 6.0 per cent in England, and 15 to 19 year olds 7.5 against 5.7. It is also the town where Lewis Carroll spent his Christmases. For learners of every age from 6 to 67 we teach AI, programming, Python and maths live online from India, one-to-one or in classes of five to ten at matching levels. The first lesson is free and fixes the course. The Guildford project hands one of Carroll\'s logic puzzles to a computer. Carrying on costs USD 100 a month for a group or USD 150 a month privately.',
  lead: 'Surrey History Centre records that Lewis Carroll settled his sisters in a house called The Chestnuts on Castle Hill, Guildford, in September 1868 and always spent Christmas there; it suggests Guildford is, after Oxford, the place most associated with his adult life. Carroll was a mathematician, and his book Symbolic Logic is full of puzzles in which a list of odd statements hides one surprising conclusion. In one, ten premises about cats, kangaroos and animals that gaze at the moon lead, after a long chain, to "I always avoid a kangaroo". People solve these slowly, rearranging sentences. A computer can do it in milliseconds, if it is taught one rule of logic that even clever humans forget. This page\'s project builds that solver in Python.',
  wa: 'Hello Modern Age Coders, I would like a free AI or programming class for a learner in Guildford.',

  picks: {
    eyebrow: 'Course picks for Guildford',
    h2: 'Popular starting courses in Guildford',
    intro: 'Pick whatever matches the learner\'s curiosity. The first live lesson of every course is free, with no card details asked.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Block coding with puzzles, riddles and if-then rules.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python and AI basics, from simple rules to programs that reason.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'In-depth Python for teenagers, including graphs, search and the logic solver.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Programming from scratch for adults and university students, up to algorithms.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Guildford today',
      h2: 'A town of students and families',
      intro: 'Borough figures from table TS007A of the 2021 census, reached through Nomis, quoted band by band.',
      body: [
        { kind: 'table', caption: 'Borough of Guildford and England, selected ages, 2021 census TS007A', head: ['Ages', 'Guildford borough', 'Borough share', 'England share'], rows: [
          ['5 to 9', '7,810', '5.4%', '5.9%'],
          ['15 to 19', '10,766', '7.5%', '5.7%'],
          ['20 to 24', '13,147', '9.2%', '6.0%'],
          ['25 to 29', '8,578', '6.0%', '6.6%'],
          ['45 to 49', '9,635', '6.7%', '6.4%'],
          ['85 and over', '3,817', '2.7%', '2.4%']
        ] },
        { kind: 'p', text: 'Late teens and early twenties stand far above the national share, while young children are a little below it. Around the town the ONS counts several smaller built-up areas inside the borough, among them East Horsley at 5,840, Send at 4,095, Pirbright at 3,920 and Shalford at 2,510. Schools follow the national curriculum for England; tell us your holiday weeks and lessons pause for them.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'Our <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Guildford project',
      h2: 'Teaching a computer Carroll\'s logic',
      intro: 'Each premise is an arrow; the answer is a path.',
      body: [
        { kind: 'p', text: 'The learner writes each of Carroll\'s ten premises as an if-then arrow: cat leads to kills mice, kills mice leads to carnivore, and so on, with "kangaroo leads to not suitable as a pet". The arrows form a graph, and a conclusion is simply a path through it. Python\'s breadth-first search looks for a path from "kangaroo" to "avoided by me". At first it finds nothing, because most of Carroll\'s arrows point the wrong way for this question.' },
        { kind: 'table', caption: 'Our solver on Symbolic Logic problem 60, 27 September 2026', head: ['What the program is allowed to use', 'Arrows in the graph', 'Kangaroo to avoided?', 'Verdict'], rows: [
          ['The ten premises only', '10', 'No path', 'Stuck, though the answer exists'],
          ['Premises plus their contrapositives', '20', 'Found in 10 steps', 'Matches Carroll\'s printed answer'],
          ['Premises plus their converses', 'More', 'Also "proves" every pet is a cat', 'Invalid: a false conclusion']
        ] },
        { kind: 'p', text: 'The missing rule is the contrapositive: if cats kill mice, then anything that does not kill mice is not a cat. Adding each premise\'s contrapositive gives 20 arrows, and now the search walks from kangaroo, through not a pet, not a moon-gazer, not a night prowler, not a carnivore, not a mouse-killer, not a cat, not in this house, and not one that takes to me, to detested and finally avoided: ten steps, exactly Carroll\'s printed answer. The same graph also proves, correctly, that every cat in the puzzle is suitable for a pet.' },
        { kind: 'p', text: 'The tempting slip is to add the converse instead, turning "cats kill mice" into "mouse-killers are cats". That makes the graph richer and the program more confident, but wrong: it then "proves" that every pet is a cat, which the premises never say. The learner writes a test with Carroll\'s shorter problem, where babies, crocodiles and despised persons lead to "Babies cannot manage crocodiles", and a second test that a converse-only chain must never be accepted.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Play if-then card chains, then build a Scratch game where each clue unlocks the next.' },
          { h3: 'Ages 11 to 15', p: 'Store the premises as a Python dictionary of arrows and search for a path.' },
          { h3: 'Ages 15 and up', p: 'Add contrapositives, compare with converses, and test the solver on more of Carroll\'s puzzles.' }
        ] },
        { kind: 'callout', h3: 'Carroll\'s puzzles, our solver', p: 'The Guildford history comes from Surrey History Centre, and the puzzles and answers from Carroll\'s Symbolic Logic on Project Gutenberg. The solver, the graph and its results are ours.' }
      ]
    },
    {
      id: 'carroll', tint: 'deep', eyebrow: 'Why Lewis Carroll',
      h2: 'Christmas at The Chestnuts',
      intro: 'What Surrey History Centre says about Carroll and Guildford.',
      body: [
        { kind: 'table', caption: 'Lewis Carroll and Guildford, from Surrey History Centre\'s Exploring Surrey\'s Past', head: ['Detail', 'What it says'], rows: [
          ['The house', 'Carroll installed his sisters at The Chestnuts on Castle Hill in September 1868'],
          ['Christmas', 'He always spent Christmas there with them'],
          ['Church', 'He occasionally preached in St Mary\'s church'],
          ['A poem', 'The last line of The Hunting of the Snark came to him on a walk'],
          ['The claim', 'After Oxford, the place most associated with his adult life'],
          ['The plaque', 'Placed on a Castle Hill gatepost and unveiled on 24 May 1933']
        ] },
        { kind: 'p', text: 'Logic of this kind sits underneath real software: database query engines chain facts, business rule engines follow chains of if-then rules, and AI planners search graphs of possible steps. Knowing which inferences are valid, and which only look valid, is a daily concern for anyone building them. A Guildford learner who has taught a computer to avoid the converse trap has met the foundations of automated reasoning.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Surrey History Centre, Project Gutenberg and the ONS. Their material is theirs; the solver, and any error in it, is ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From riddle cards to automated reasoning',
    intro: 'The year bands are a guide; the free lesson settles the level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'If-then games', p: 'Block coding with rules, conditions and puzzles.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Rules in Python', p: 'Typed Python with conditions, dictionaries and simple searches.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Logic and AI', p: 'Graphs, logic and AI basics, alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Programming depth', p: 'Adult Python up to algorithms and data structures.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and logic',
    h2: 'An AI can sound logical. Does it know a converse from a contrapositive?',
    intro: 'Fluent reasoning and valid reasoning are not the same thing.',
    p1: 'Ask a chatbot to solve a logic puzzle and it may produce a smooth chain of steps that quietly uses a converse somewhere. The answer reads convincingly and can still be wrong.',
    p2: 'A Guildford learner who has built a solver that refuses converses knows to check each step of any argument, human or machine.',
    closer: 'Checking every step of a confident argument is a strong reason for a Guildford teenager to keep learning programming in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'From Send to Shalford, live online',
    intro: 'Anywhere in the borough joins by video.',
    cells: [
      { h3: 'The learner codes', p: 'Students write their own programs, with the teacher following on screen and asking guiding questions.' },
      { h3: 'Matched to the year', p: 'A Year 6 or a Year 13 begins at the stage their school year and trial lesson point to, with exam board names used.' },
      { h3: 'A free trial', p: 'The first full lesson costs nothing and ends with honest advice.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at the same level, from across the UK.' },
      { h3: 'Term pattern', p: 'Two lessons each week during term, with holidays kept free.' },
      { h3: 'Fixed local time', p: 'Clock changes never move your lesson; our teachers shift instead.' }
    ],
    spec: { title: 'Why the groups meet online', p: 'Five Guildford learners at one level and one free hour are rarely neighbours. Online groups give each learner the right classmates.' }
  },

  fees: {
    h2: 'Fees in Guildford',
    intro: 'Guildford learners pay the same fee we charge across every country outside India.',
    first: 'A whole lesson free, with a clear recommendation.',
    group: 'About eight live lessons a month in a small class.',
    private: 'About eight live lessons a month with one tutor.',
    closer: 'Everything is priced in US dollars, never sterling. Billing starts once the trial has agreed a course and a weekly time; the pricing page covers breaks, absences and switching formats.'
  },

  reviewsH2: 'Google reviews from families',

  book: {
    h2: 'Book a free Guildford lesson',
    intro: 'Tell us the learner\'s age or year and one interest. A trial could be a Scratch riddle game, a first Python program, an AI project, or Carroll\'s kangaroo puzzle.',
    success: 'Thank you. Your Guildford request has reached us.'
  },

  faq: {
    h2: 'Guildford questions',
    intro: 'The town, the logic project and practical details.',
    items: [
      { q: 'How many people live in Guildford?', a: 'The Guildford built-up area had 77,880 residents in the 2021 census, and the whole borough 143,650.' },
      { q: 'Can Guildford learners study AI and programming online?', a: 'Yes. We teach AI, programming, Python and coding live online to Guildford learners aged 6 to 67.' },
      { q: 'What is the Lewis Carroll logic project?', a: 'Learners turn Carroll\'s ten premises into a graph in Python and search it to reach his answer, "I always avoid a kangaroo".' },
      { q: 'What is a contrapositive?', a: 'The version of "if A then B" that says "if not B then not A"; it is always equally true, unlike the converse "if B then A".' },
      { q: 'What is Lewis Carroll\'s link with Guildford?', a: 'Surrey History Centre records that he settled his sisters at The Chestnuts on Castle Hill in 1868 and spent every Christmas there.' },
      { q: 'Are lessons held in Guildford?', a: 'They run online, so learners join from home anywhere in the borough.' },
      { q: 'Do you help with GCSE and A level?', a: 'Yes, maths and computing, with understanding as the aim; we never promise grades.' },
      { q: 'What ages can join?', a: 'From 6 to 67, including university students.' },
      { q: 'How much are lessons?', a: 'The first is free; then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do lessons continue in school holidays?', a: 'No. Send your holiday dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More pages near Guildford',
    html: 'Our <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> page covers the county, <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-high-wycombe">High Wycombe</a> counts chair records with missing places, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East</a> page indexes the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Guildford and Surrey',
  footerPlaces: [
    { href: '/coding-classes-in-surrey', label: 'Surrey' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-gfd .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-gfd .cg-hero h1 { font-weight: 720; letter-spacing: -0.025em; line-height: 1.05; font-style: italic; }
.cg-root.cg-gfd .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-gfd .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-gfd .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-gfd .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-gfd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-gfd .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-gfd .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-gfd .cg-callout { border-left-width: 5px; border-radius: 0 12px 12px 0; }
`,

  dossier: {
    curriculumAuthority: 'Guildford (E07000209). Nomis Census 2021 TS007A: total 143,650; 5 to 9 7,810 (5.4%, England 5.9%); 15 to 19 10,766 (7.5%, 5.7%); 20 to 24 13,147 (9.2%, 6.0%); 25 to 29 8,578 (6.0%, 6.6%); 45 to 49 9,635 (6.7%, 6.4%); 85+ 3,817 (2.7%, 2.4%). ONS 2021 BUAs: Guildford 77,880; East Horsley 5,840; Send 4,095; Pirbright 3,920; Shalford 2,510. Surrey History Centre, Exploring Surrey\'s Past, Lewis Carroll: "a frequent visitor to Guildford"; "He installed his sisters in a house called The Chestnuts on Castle Hill in September 1868 and he always spent Christmas with them"; "Occasionally he preached in St Mary\'s church"; "after Oxford, the place most associated with his adult life"; plaque unveiled "24 May 1933". Project Gutenberg 28696, Symbolic Logic, problem 60 answer "I always avoid a kangaroo"; problem 1 answer "Babies cannot manage crocodiles".',
    localProject: 'Implication graph: 10 premises + 10 contrapositives = 20 arrows; BFS kangaroo -> avoided in 10 steps (not pet, not moon, not prowl, not carnivore, not kill mice, not cat, not in house, not take to me, detest, avoid). Premises only: no path. Valid: cat -> pet in 5 steps. Converse slip: "every pet is a cat". Lesson family: implication chains as graph search, contrapositive vs converse.',
    requiredMentions: [
      'The Chestnuts',
      'Castle Hill',
      'Lewis Carroll',
      'Symbolic Logic',
      'contrapositive',
      'Surrey History Centre',
      'East Horsley',
      'Pirbright',
      '77,880'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Guildford and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Surrey History Centre, Exploring Surrey\'s Past, Lewis Carroll.', url: 'https://www.exploringsurreyspast.org.uk/themes/people/writers/lewis-carroll/' },
      { claim: 'Project Gutenberg, Lewis Carroll, Symbolic Logic (ebook 28696).', url: 'https://www.gutenberg.org/ebooks/28696' }
    ],
    rejectedClaims: [
      'Carroll\'s photography and later controversies: not discussed; not relevant to the lesson.',
      'University names and student numbers: not claimed; the age table is the evidence.',
      'Ash and Ash Vale, Farncombe and Great Bookham built-up areas: cross the boundary, not tabulated.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
