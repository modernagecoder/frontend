'use strict';
// Lincolnshire (cg- county index, UK cluster Phase 7, row 238). Ceremonial county: Lincolnshire County Council's
// seven districts plus the unitaries North Lincolnshire and North East Lincolnshire. Spine: George Boole, born in
// Lincoln, turned "and", "or" and "not" into arithmetic on 0 and 1. MacTutor biography (read raw 26 September 2026):
// born 2 November 1815, Lincoln; father's cobbler's shop at 34 Silver Street; Hall's Academy in Waddington, "four miles
// from Lincoln"; opened his own school in Lincoln in 1834 at 19; first Professor of Mathematics at Queen's College, Cork
// (announced August 1849); Laws of Thought 1854. Boole, An Investigation of the Laws of Thought (Project Gutenberg
// 15114, TeX source read raw): "the symbols of Logic are subject to the special law, x^2 = x"; "of the symbols of Number
// there are but two, viz. 0 and 1, which are subject to the same formal law"; x(1 - x) = 0 as the principle of
// contradiction; "The expression x + y seems indeed uninterpretable, unless it be assumed that the things represented
// by x and the things represented by y are entirely separate"; preface thanks "the Rev. George Stephens Dickson, of
// Lincoln", signed Cork, 30 November 1853.
// Our model (scratchpad lin/boole.py): an invented fete rule with four switches (dry, warm, marquee up, field
// waterlogged), 16 rows. Organiser's rule A = D(W or G)(not F) in Boole-style arithmetic, true on 3 rows; poster wording
// B = (DW or G)(not F), true on 5; they differ on exactly 2 rows (not dry, marquee up, field fine, warm or not). Factored
// rule C = D(1-F)(W+G-WG) matches A on all 16. OR written as plain addition gives the value 2 on one row. Row counts:
// 20 switches 1,048,576; 40 switches 1,099,511,627,776.
// Lesson family: Boolean algebra and equivalence checking by exhaustive truth table, with exponential growth;
// screened (Boole, truth table, Karnaugh, logic gate, De Morgan, SAT: 0 hits).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 for the nine councils (our sum 1,095,014); ONS
// built-up areas checked against our OA sums, all inside. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'LINCOLNSHIRE', blurb: 'Nine councils from the Humber to the Fens, and a lesson from Lincoln\'s George Boole: how to prove two rules say the same thing.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-lincolnshire',
  code: 'lsh',
  accent: '#2E5C17',
  accentRationale: 'Lincolnshire: a Lincoln green from the solver (6.36:1 on the darkest paper tint), darker and yellower than the Hampshire and Warwickshire greens',
  pageType: 'governorate',
  place: {
    name: 'Lincolnshire',
    eyebrow: 'Lincolnshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Lincoln', href: '/best-coding-class-in-lincoln' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Lincolnshire',
  title: 'Coding Classes in Lincolnshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Lincolnshire, from Lincoln, Grimsby and Scunthorpe to Boston, Grantham, Spalding, Stamford and Skegness.',
  ogDescription: 'Coding classes for all of Lincolnshire, and a project from Lincoln-born George Boole: turn two wordings of a rule into 0s and 1s and let Python find where they disagree.',
  twitterDescription: 'Lincolnshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'gcse-computer-science-course',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Lincolnshire',
    description: 'Ability-placed online coding, Python, logic, computer science and mathematics for children, teenagers and adults across Lincolnshire, taught live in English.'
  },

  h1: 'Coding classes in Lincolnshire',
  capsuleQ: 'What are the best coding classes in Lincolnshire?',
  capsule: 'Lincolnshire, as a county, is nine councils: the seven districts run with Lincolnshire County Council plus North Lincolnshire and North East Lincolnshire. Their 2021 Census counts add up, by our own sum, to 1,095,014 people. The largest towns are Lincoln, Grimsby and Scunthorpe, then Boston and Grantham. We teach every lesson live over video from India and group learners by what they can do, so a quick eleven-year-old and a careful adult beginner each land in the right class. Ages run from 6 to 67, in groups of five to ten or one-to-one, across coding, Python, computer science and maths. The Lincolnshire project begins with George Boole, born in Lincoln. A first lesson is free of charge; staying on costs USD 100 a month for a group or USD 150 a month for private lessons.',
  lead: 'Every "if" in every program runs on an idea written down by a man from Lincoln. George Boole, born in the city in 1815, where his father kept a cobbler\'s shop on Silver Street, showed in his 1854 book that "and", "or" and "not" obey the rules of an algebra whose only numbers are 0 and 1. This page\'s project uses his algebra for a very practical job: taking two wordings of the same rule, turning each into arithmetic, and letting Python check every possible case to find out whether they really mean the same thing. They do not, and the program finds exactly where.',
  wa: 'Hello Modern Age Coders, we live in Lincolnshire and would like to try a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Lincolnshire',
    h2: 'Where Lincolnshire learners tend to begin',
    intro: 'A ten-year-old in Spalding who loves logic puzzles, a Year 10 in Grantham taking GCSE Computer Science, a Year 12 in Louth ready for serious Python, and an adult in Grimsby starting from nothing. Each one starts with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic puzzles and computational thinking, including AND, OR and NOT, truth tables and Venn diagrams.' },
      { course: 'gcse-computer-science-course', band: 'GCSE years', note: 'GCSE Computer Science for AQA, OCR and Edexcel, including Boolean operators and the compound conditions students misread under time.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero, for adults who want to write programs that make decisions correctly.' }
    ]
  },

  sections: [
    {
      id: 'lincolnshire', tint: '', eyebrow: 'Lincolnshire in figures',
      h2: '1,095,014 people between the Humber and the Fens',
      intro: 'Council populations are 2021 Census figures from Nomis; the county figure is our addition of them. Towns are ONS built-up areas, each checked against our own count from census output areas.',
      body: [
        { kind: 'table', caption: 'Lincolnshire\'s twelve largest built-up areas, 2021 Census', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Lincoln', '104,555', 'Cleethorpes', '29,670'],
          ['Grimsby', '85,925', 'Gainsborough', '21,910'],
          ['Scunthorpe', '81,265', 'Stamford', '20,750'],
          ['Boston', '45,340', 'Skegness', '20,700'],
          ['Grantham', '44,905', 'Sleaford', '18,030'],
          ['Spalding', '30,550', 'Bourne', '17,495']
        ] },
        { kind: 'p', text: 'This is a county of many middle-sized towns rather than one dominant city. North Lincolnshire is the largest council at 169,680, and Boston the smallest at 70,502. Beyond the table come Louth, North Hykeham, Humberston and New Waltham, Barton-upon-Humber, Immingham, Holbeach, Mablethorpe, Horncastle and Deeping St James. Lincoln\'s built-up area runs a little way into West Lindsey, and the ONS counts it whole. Lincolnshire County Council, the two northern unitary councils and academy trusts decide school holidays; we did not read their calendars and fit breaks to each family\'s dates.' },
        { kind: 'callout', h3: 'The city has its own page', p: 'Our <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a> page has a different project, on frost records. This page is for the rest of the county, from Barton-upon-Humber down to Stamford.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Lincolnshire project',
      h2: 'Do two wordings of a rule mean the same thing?',
      intro: 'Boole\'s arithmetic of 0 and 1, an invented village fete, and a program that checks all sixteen cases.',
      body: [
        { kind: 'p', text: 'Boole wrote that the symbols of logic obey the law x² = x, and that among numbers "there are but two, viz. 0 and 1" that do the same. The learner begins by checking this in Python: of every whole number from minus five to five, only 0 and 1 equal their own square. So true becomes 1 and false 0, "not x" becomes 1 minus x, "x and y" becomes x times y, and "x or y" becomes x plus y minus x times y.' },
        { kind: 'p', text: 'Now the rule. A fete committee agrees that the fete goes outdoors "if it is dry and warm, or dry with the marquee up, as long as the field is not waterlogged". The poster printed a shorter version: "outdoors if it is dry and warm, or the marquee is up, as long as the field is not waterlogged". Four yes-or-no facts give sixteen possible days, and the program tries every one.' },
        { kind: 'table', caption: 'Our invented rules, checked over all 16 cases, 26 September 2026', head: ['Wording', 'Written in 0s and 1s', 'Days it says outdoors', 'Disagrees with the committee'], rows: [
          ['Committee', 'D(W or G)(1 − F)', '3 of 16', 'Not at all'],
          ['Poster', '(DW or G)(1 − F)', '5 of 16', 'On 2 days'],
          ['Tidied by algebra', 'D(1 − F)(W or G)', '3 of 16', 'Not at all'],
          ['OR written as +', '(DW + DG)(1 − F)', 'Gives a 2 once', 'Not a yes or no']
        ] },
        { kind: 'p', text: 'The two days of disagreement are both rainy days with the marquee up and the field fine: the committee says indoors, the poster says outdoors. Nobody reading the two sentences quickly would notice. The tidied version, which takes "dry" out as a common factor exactly as you would in ordinary algebra, agrees with the committee on all sixteen days. And the last row shows a classic bug. Writing "or" as plain addition gives the value 2 on the one day that is dry, warm, with the marquee up and the field fine, which is neither true nor false. Boole saw the same trap: he wrote that x + y "seems indeed uninterpretable" unless the two classes share nothing.' },
        { kind: 'p', text: 'Checking every case is completely reliable, but it doubles with each new yes-or-no fact. Twenty facts mean 1,048,576 cases and forty mean 1,099,511,627,776. That is why engineers who check the logic inside chips use cleverer methods than listing every row, and why simplifying a condition by algebra first is a skill worth having.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 7 to 11', p: 'Sort picture cards with two yes-or-no questions into a grid, then write AND, OR and NOT rules in Scratch.' },
          { h3: 'Ages 11 to 15', p: 'Build a truth table in Python with nested loops, compare the committee and the poster, and print the days they disagree.' },
          { h3: 'Ages 15 and up', p: 'Write a general equivalence checker for any number of facts, apply De Morgan\'s laws, and time how the row count grows.' }
        ] },
        { kind: 'callout', h3: 'Real and invented parts', p: 'Boole\'s words are quoted from his 1854 book, and the facts of his life from the MacTutor biography at the University of St Andrews. The fete, its rules and its sixteen days are invented for teaching.' }
      ]
    },
    {
      id: 'boole', tint: 'deep', eyebrow: 'Why Lincoln',
      h2: 'A cobbler\'s son, a Lincoln school, and the laws of thought',
      intro: 'The Lincolnshire link, from MacTutor and from Boole\'s own preface.',
      body: [
        { kind: 'table', caption: 'George Boole and Lincolnshire', head: ['When', 'What the sources say'], rows: [
          ['2 November 1815', 'Born in Lincoln, where his father ran a cobbler\'s shop at 34 Silver Street (MacTutor).'],
          ['1833 to 1834', 'Taught at Hall\'s Academy, about four miles from Lincoln, then opened his own school in Lincoln at 19 (MacTutor).'],
          ['1849', 'Named the first Professor of Mathematics at Queen\'s College, Cork (MacTutor).'],
          ['30 November 1853', 'Signs the preface to his book in Cork, thanking the Rev. George Stephens Dickson, of Lincoln, for help with its revision.'],
          ['1854', 'Publishes An Investigation of the Laws of Thought, reducing logic to an algebra of 0 and 1.']
        ] },
        { kind: 'p', text: 'MacTutor records that Boole spent about five years trying to teach himself calculus while working as a teacher, and later felt he had almost wasted them for want of a skilled teacher. It is an honest reminder that even a brilliant learner goes faster with someone to explain. His algebra waited decades to become practical; today every comparison, search filter and safety interlock in software is written in it. A Lincolnshire student who has checked a rule with Boole\'s arithmetic has handled the same logic that decides whether a program\'s "if" goes one way or the other.' },
        { kind: 'p', text: 'We are an independent tutoring company with no tie to Lincolnshire County Council, the University of St Andrews, Project Gutenberg or any Boole society. The quotations are theirs and Boole\'s; the fete example and any slip in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a> has its own page; across the Humber is the <a class="cg-inline-link" href="/coding-classes-in-east-riding-of-yorkshire">East Riding</a> with <a class="cg-inline-link" href="/best-coding-class-in-hull">Hull</a>, and to the south <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> and <a class="cg-inline-link" href="/coding-classes-in-cambridgeshire">Cambridgeshire</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From yes-or-no puzzles to programs that decide',
    intro: 'The free lesson finds the right starting rung. Age is only a first guess.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'If this, then that', p: 'Block coding where a sprite reacts only when two things are true, the first taste of AND and OR.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 7 to 13', h3: 'Logic on paper and screen', p: 'Truth tables, Venn diagrams and logic puzzles, then Python that tests each case.', courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Conditions under pressure', p: 'GCSE Computer Science and full Python, where compound conditions and careful testing earn marks.', courses: ['gcse-computer-science-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rules that hold', p: 'Python for adults, from first variables to programs that apply rules to real records without surprises.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and checking logic',
    h2: 'An AI can rewrite a rule neatly. Does the new version mean the same?',
    intro: 'Tidy wording and equal meaning are different things, and only checking tells them apart.',
    p1: 'Ask an assistant to shorten the committee\'s rule and it may well produce something close to the poster: shorter, clearer and wrong on two days out of sixteen. It will usually sound certain. The quickest way to know is not to argue with the wording but to turn both versions into 0s and 1s and compare every case, which takes a few lines of Python.',
    p2: 'The same check applies whenever an AI tool rewrites a condition in code, a filter in a spreadsheet or a rule in a policy. A Lincolnshire learner who has found the two rainy days by testing, not by reading, has a habit that catches errors people and machines both make.',
    closer: 'So a young person in Lincolnshire should learn to code in 2026 to check whether a neat rewrite still says what was meant.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Wolds, Fens and coast, all a click away',
    intro: 'Lincolnshire is wide and thinly spread in places, so an evening class across the county is a real journey. Online lessons remove it.',
    cells: [
      { h3: 'Wherever you live', p: 'A farmhouse near Holbeach, a terrace in Scunthorpe, a flat in Skegness. The teacher shares a screen; the learner types and runs the code.' },
      { h3: 'School terms in English', p: 'Year groups, key stages, GCSEs and A levels are named the way Lincolnshire schools name them, and we teach in English.' },
      { h3: 'Start with a free lesson', p: 'A proper lesson, then a clear suggestion of level and course. Card details are not requested.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at the same point, gathered from Lincolnshire, the rest of the UK and elsewhere.' },
      { h3: 'Breaks you choose', p: 'Two lessons a week suits most learners, and we stop for the holidays your school sets.' },
      { h3: 'Always UK time for you', p: 'You get a slot in UK time that does not move when the clocks change; our teachers keep India time, several hours ahead, and handle the shift.' }
    ],
    spec: { title: 'Why we group by level', p: 'Even in Lincoln or Grimsby, five learners at one level free on the same evening are hard to find. Grouping by level puts a learner from Horncastle or Bourne in a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Lincolnshire',
    intro: 'Gainsborough or Deeping St James, the price is the same, and it matches every country we teach except India.',
    first: 'A complete lesson with genuine work, then our advice on level and course.',
    group: 'About eight lessons a month with five to ten learners at one level.',
    private: 'About eight lessons a month, taught one-to-one.',
    closer: 'Fees are set in US dollars only, not pounds. We bill nothing until the free lesson has fixed a course and a weekly time, and the pricing page sets out how pauses, missed lessons and switching between group and private work.'
  },

  reviewsH2: 'Families on Google, in their own words',

  book: {
    h2: 'Book a free lesson from Lincolnshire',
    intro: 'Tell us the learner\'s age or year and an interest or two. A first lesson could be a Scratch logic game, a Python truth table, or the fete rules on this page.',
    success: 'Thank you. Your Lincolnshire request is with us.'
  },

  faq: {
    h2: 'Lincolnshire questions',
    intro: 'The county, the Boole project and how lessons work.',
    items: [
      { q: 'How many people live in Lincolnshire?', a: 'The nine councils of the ceremonial county had 1,095,014 usual residents at the 2021 Census, by our own sum of the ONS figures on Nomis.' },
      { q: 'What are the largest towns in Lincolnshire?', a: 'By ONS built-up area: Lincoln 104,555, Grimsby 85,925, Scunthorpe 81,265, Boston 45,340 and Grantham 44,905.' },
      { q: 'What is the Boole project?', a: 'Learners turn two wordings of a fete rule into Boole\'s arithmetic of 0 and 1, check all 16 cases in Python, and find the 2 days on which the short poster wording disagrees with the committee\'s rule.' },
      { q: 'Was George Boole from Lincolnshire?', a: 'Yes. The MacTutor biography gives his birth as 2 November 1815 in Lincoln, where he later opened his own school at 19, before becoming a professor in Cork.' },
      { q: 'What is a truth table?', a: 'A list of every combination of true and false for the inputs of a rule, with the rule\'s answer for each. With four inputs there are sixteen rows; each extra input doubles the count.' },
      { q: 'Where are your lessons held?', a: 'Online only, live over video. There is no Lincolnshire centre, so nobody has to drive to a class.' },
      { q: 'Which ages do you teach?', a: 'Six to sixty-seven. Block coding and logic puzzles for young children, Python from about ten, GCSE and advanced Python for teenagers, and Python or data for adults. The free lesson sets the level.' },
      { q: 'Do you help with GCSE Computer Science?', a: 'Yes. The GCSE Computer Science course covers AQA, OCR and Edexcel, including Boolean operators and compound conditions. It supports learning; it does not promise grades.' },
      { q: 'How much are lessons?', a: 'The first is free. After that, group classes are USD 100 per month and one-to-one lessons USD 150 per month, with no sign-up fee and no fixed term.' },
      { q: 'Do lessons stop for Lincolnshire school holidays?', a: 'They can. Lincolnshire County Council, North Lincolnshire, North East Lincolnshire and academy trusts each publish dates, and we plan breaks around yours.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Lincolnshire',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-lincoln">Lincoln</a> page covers the city. Over the Humber there is the <a class="cg-inline-link" href="/coding-classes-in-east-riding-of-yorkshire">East Riding</a>, and to the west <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a> and <a class="cg-inline-link" href="/best-coding-class-in-doncaster">Doncaster</a>. Everything else is on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Lincolnshire and around',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-lincoln', label: 'Lincoln' },
    { href: '/coding-classes-in-east-riding-of-yorkshire', label: 'East Riding' }
  ],

  personalityCss: `
.cg-root.cg-lsh .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.8vw, 2.4rem); }
.cg-root.cg-lsh .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-lsh .cg-capsule { border-left: 3px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-lsh .cg-eyebrow { letter-spacing: 0.22em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lsh .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.015em; }
.cg-root.cg-lsh .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-lsh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lsh .cg-table th { letter-spacing: 0.05em; font-weight: 600; }
.cg-root.cg-lsh .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-lsh .cg-callout { border-left-width: 4px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Ceremonial Lincolnshire: Lincolnshire County Council districts (Boston, East Lindsey, Lincoln, North Kesteven, South Holland, South Kesteven, West Lindsey) plus unitaries North Lincolnshire and North East Lincolnshire. ONS Census 2021 TS001 via Nomis: North Lincolnshire 169,680; North East Lincolnshire 156,966; South Kesteven 143,404; East Lindsey 142,296; North Kesteven 118,075; Lincoln 103,813; West Lindsey 95,156; South Holland 95,122; Boston 70,502; our sum 1,095,014. ONS built-up areas (published; agree with our OA sums): Lincoln 104,555 (spans Lincoln and West Lindsey); Grimsby 85,925; Scunthorpe 81,265; Boston 45,340; Grantham 44,905; Spalding 30,550; Cleethorpes 29,670; Gainsborough 21,910; Stamford 20,750; Skegness 20,700; Sleaford 18,030; Bourne 17,495; Louth 17,420; North Hykeham 16,845; Humberston and New Waltham 14,860; Barton-upon-Humber 11,920; Immingham 9,770; Holbeach 8,755; Mablethorpe 7,630; Horncastle 7,295; Deeping St James 7,255. MacTutor (St Andrews) Boole biography: "Born 2 November 1815 Lincoln"; "John opened a cobbler\'s shop at 34 Silver Street"; "Hall\'s Academy in Waddington, four miles from Lincoln"; "In 1834 he opened his own school in Lincoln although he was only 19"; first Professor of Mathematics at Queen\'s College, Cork, 1849; Laws of Thought 1854. Boole, Laws of Thought (Gutenberg 15114): "the symbols of Logic are subject to the special law, x^2 = x"; "of the symbols of Number there are but two, viz. 0 and 1"; x(1 - x) = 0; "The expression x + y seems indeed uninterpretable, unless ..."; preface thanks "the Rev. George Stephens Dickson, of Lincoln", dated Cork, 30 November 1853.',
    localProject: 'Boolean algebra as arithmetic on 0 and 1, and equivalence checking by exhaustive truth table. x*x == x for integers -5..5 only at 0 and 1. NOT = 1 - x, AND = xy, OR = x + y - xy. Invented fete rule with D dry, W warm, G marquee up, F waterlogged: committee A = D(W or G)(1 - F), true on 3 of 16; poster B = (DW or G)(1 - F), true on 5; A and B differ on (D0 W0 G1 F0) and (D0 W1 G1 F0); factored C = D(1 - F)(W or G) equals A on all 16; OR as plain + gives 2 on (D1 W1 G1 F0). Row growth: 20 facts 1,048,576; 40 facts 1,099,511,627,776. Page labels the fete as invented. AI angle: an assistant shortens a rule into the poster wording; test by truth table, not by reading. Lesson family: Boolean algebra and equivalence checking, exponential case growth.',
    requiredMentions: [
      '1,095,014',
      '34 Silver Street',
      'George Stephens Dickson',
      'Queen\'s College, Cork',
      'Laws of Thought',
      'Humberston and New Waltham',
      'Barton-upon-Humber',
      'Deeping St James',
      '1,099,511,627,776',
      'seems indeed uninterpretable'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the nine Lincolnshire councils, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Lincolnshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'MacTutor History of Mathematics, University of St Andrews: George Boole biography (birth, Silver Street, Lincoln school, Cork chair, 1854 book).', url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Boole/' },
      { claim: 'George Boole, An Investigation of the Laws of Thought (1854), Project Gutenberg eBook 15114: x^2 = x, 0 and 1, x + y interpretation, preface.', url: 'https://www.gutenberg.org/ebooks/15114' }
    ],
    rejectedClaims: [
      'Boole\'s worked example on "clean beasts" from Jewish law: religious content, not used.',
      'Lincoln Cathedral memorial to Boole: not read from a primary source this session, so not mentioned.',
      'Claims about how modern chip designers verify logic in detail: only the general point that they avoid listing every row is made.',
      'Dates for De Morgan\'s laws or Boole\'s influence on computing pioneers: not read, not dated.',
      'Lincolnshire school term dates: none read.',
      'Named Lincolnshire schools, grammar schools or selection tests: none named.'
    ]
  }
};
