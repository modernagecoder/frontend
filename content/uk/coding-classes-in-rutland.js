'use strict';
// Rutland (cg- county index, UK cluster Phase 7, row 245). One unitary council. Spine: a whole county small enough to
// hold as one tree in a program. Data read raw 26 September 2026: Nomis Census 2021 TS001, Rutland 41,049 (LAD) and
// 128 output-area counts; ONS OA21 to PAR22 to LTLA22 lookup (Open Geography Portal) for Rutland: 128 OAs, each in
// exactly one of 39 parishes. Our tree (scratchpad rut/tree.py): 168 nodes (1 county, 39 parishes, 128 output areas);
// leaves sum to 41,048, one fewer than the published county count. ONS, "Protecting personal data in Census 2021
// results": "We used a cell key method to protect against disclosure by differencing by adding "noise" to every
// dataset"; "a typical dataset would have around 14% of cell counts perturbed by a small amount"; "The noise can be
// positive or negative and, across a dataset, should approximately balance out. However, the randomness may mean small
// changes to totals." Parishes by our leaf sums: Oakham 11,165 (36 OAs), Uppingham 4,722 (15), Cottesmore 3,084 (8),
// Barleythorpe 2,338 (8), Ketton 1,951 (6), Ryhall 1,634 (6), Stretton 1,437 (2), Langham 1,400 (4); smallest Lyndon
// 117, Tixover 160, Clipsham 194; 23 parishes have a single OA. OA sizes 103 to 1,221, mean 320.7.
// Place anchors: Oakham Castle site ("The Great Hall of Oakham Castle is the finest surviving example of Norman domestic
// architecture in Europe. It was built between 1180 and 1190"; "a stunning aristocratic display of gilded horseshoes").
// Discover Rutland: "Rutland is England's smallest and arguably prettiest county"; motto "Multum in Parvo (much in
// little)". Anglian Water Rutland Water page 403 (logged, not retried).
// Lesson family: trees and traversal (pre-order print, post-order sums, level order, search), with a published total
// that differs from the sum of its parts; screened (tree traversal, post-order: 0 hits).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'RUTLAND', blurb: 'Oakham, Uppingham and 37 more parishes, and a project that holds the whole county as one tree in a Python program.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-rutland',
  code: 'rut',
  accent: '#6B5425',
  accentRationale: 'Rutland: a dark gilt bronze from the solver (5.8:1 on the darkest paper tint), for the Oakham Castle horseshoes, clear of the Essex and Merseyside browns',
  pageType: 'governorate',
  place: {
    name: 'Rutland',
    eyebrow: 'Rutland',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Leicestershire', href: '/coding-classes-in-leicestershire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Rutland',
  title: 'Coding Classes in Rutland | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Rutland, from Oakham and Uppingham to Cottesmore, Ketton, Ryhall, Empingham, Whissendine and Edith Weston.',
  ogDescription: 'Coding classes for all of Rutland, and a project that builds the whole county as a tree of parishes and census areas, then finds out why its branches add up to one person fewer.',
  twitterDescription: 'Rutland coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Rutland',
    description: 'Ability-placed online coding, Python, data structures and mathematics for children, teenagers and adults across Rutland, taught live in English.'
  },

  h1: 'Coding classes in Rutland',
  capsuleQ: 'What are the best coding classes in Rutland?',
  capsule: 'Rutland is a single council area, and the 2021 Census counted 41,049 people there. Oakham is the county town and much the largest parish, with Uppingham second, then villages such as Cottesmore, Ketton and Ryhall. In a county this small, finding a local class at exactly the right level is hard, which is where live online teaching helps. We teach over video from India and match each learner to a class by ability, not age, for anyone from 6 to 67, in groups of five to ten or one-to-one, across coding, Python, data structures and maths. The Rutland project turns the whole county into a tree. There is no fee for the first lesson; after that it is USD 100 a month for a group place or USD 150 a month for one-to-one teaching.',
  lead: 'Rutland\'s motto is Multum in Parvo, much in little, and Discover Rutland calls it England\'s smallest county. Small is useful for a programmer, because it means the whole county fits into one data structure you can print on a page. This project builds Rutland as a tree: the county at the root, its parishes as branches, and the 2021 Census output areas as leaves, each holding a count of people. The learner walks the tree in different orders to print it, total it and search it, and then meets a real surprise: the leaves add up to one person fewer than the county total the ONS publishes, for a reason the ONS explains itself.',
  wa: 'Hello Modern Age Coders, we live in Rutland and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Rutland',
    h2: 'Where Rutland learners begin',
    intro: 'A seven-year-old in Ketton who loves sorting things into groups, a Year 7 in Oakham curious about how family trees work, a Year 12 in Uppingham preparing for computer science, and an adult in Empingham getting to grips with data. Each starts with a free lesson.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Logic, sorting and grouping puzzles, including Venn diagrams and step-by-step problem solving.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms and data structures for teenagers, from lists to trees and the orders you can walk them in.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'Adults', note: 'Data structures and algorithms for adults, from stacks and queues to trees, heaps and graphs.' }
    ]
  },

  sections: [
    {
      id: 'rutland', tint: '', eyebrow: 'Rutland in figures',
      h2: '41,049 people in 39 parish branches',
      intro: 'The county count is the 2021 Census figure on Nomis. Parish figures are our own sums of the census output areas that the ONS assigns to each parish.',
      body: [
        { kind: 'table', caption: 'Rutland\'s largest parishes by our sum of 2021 Census output areas', head: ['Parish', 'Residents', 'Output areas'], rows: [
          ['Oakham', '11,165', '36'],
          ['Uppingham', '4,722', '15'],
          ['Cottesmore', '3,084', '8'],
          ['Barleythorpe', '2,338', '8'],
          ['Ketton', '1,951', '6'],
          ['Ryhall', '1,634', '6'],
          ['Stretton', '1,437', '2'],
          ['Langham', '1,400', '4']
        ] },
        { kind: 'p', text: 'Oakham holds about 27 per cent of the county on its own, and Oakham and Uppingham together nearly 39 per cent. Most parishes are villages: 23 of the 39 contain just one output area, and the smallest by our sums are Lyndon with 117 residents, Tixover with 160 and Clipsham with 194. Other names on the list include Empingham, Whissendine, Edith Weston, Great Casterton, Market Overton and North and South Luffenham. Any parish too small to contain an output area of its own does not appear as a separate branch. Rutland County Council and academy trusts set school holidays; we did not read their calendars and fit breaks to each family.' },
        { kind: 'callout', h3: 'Close neighbours', p: 'Rutland sits between <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> and <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire</a>, with <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> a short way east.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Rutland project',
      h2: 'A whole county as one tree',
      intro: 'Real census data, four ways to walk a tree, and a total that is one person out.',
      body: [
        { kind: 'p', text: 'The learner downloads two things: the 2021 Census count for each of Rutland\'s 128 output areas from Nomis, and the ONS lookup that says which parish each output area belongs to. Every output area appears exactly once, so the pieces fit into a tree with 168 nodes: one root for the county, 39 parish branches and 128 leaves. Output areas range from 103 residents to 1,221, averaging about 321. Now the program walks the tree in different orders, each useful for a different job.' },
        { kind: 'table', caption: 'Four ways our program walks the Rutland tree', head: ['Walk', 'Order it visits', 'What it is good for'], rows: [
          ['Pre-order', 'Parent first, then its children', 'Printing the tree as an indented list, county at the top'],
          ['Post-order', 'Children first, then the parent', 'Adding up: each parish total needs its areas first'],
          ['Level order', 'Root, then all parishes, then all areas', 'Counting nodes at each depth: 1, 39 and 128'],
          ['Search', 'Stop when the target is found', 'Answering which parish a given output area is in']
        ] },
        { kind: 'p', text: 'The post-order walk adds the leaves up to parishes and the parishes up to the root, and the root comes to 41,048. The published county figure is 41,049. The program is right and so is the census; the gap comes from how the ONS protects privacy. Its own methodology says it added "noise" to every Census 2021 dataset, that a typical dataset has around 14 per cent of its counts changed by a small amount, and that "the randomness may mean small changes to totals". A county and its 128 areas are separate published counts, each with its own tiny adjustment, so their sums need not match exactly.' },
        { kind: 'p', text: 'That is the lesson most worth keeping. When the sum of the parts and the published total disagree slightly, the right move is not to force them to agree, and not to add up the parts and call it the official figure. You report the published total as published, label your own sum as yours, and explain the difference. Every figure on this page follows that rule.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Draw a family tree of Rutland on paper, county at the top, a few parishes below, and add up the numbers from the bottom.' },
          { h3: 'Ages 11 to 15', p: 'Store the tree as a Python dictionary of lists, print it with indentation, and total each parish with a loop.' },
          { h3: 'Ages 15 and up', p: 'Write recursive pre-order and post-order functions, a level-order walk with a queue, and a search, then explain the one-person gap.' }
        ] },
        { kind: 'callout', h3: 'Where the numbers come from', p: 'Every count is the ONS\'s, from Census 2021 on Nomis, and the parish assignments come from the ONS lookup. The tree, its totals and the traversal code are ours. The explanation of the gap is quoted from the ONS page on protecting personal data in Census 2021 results.' }
      ]
    },
    {
      id: 'multum', tint: 'deep', eyebrow: 'Why Rutland',
      h2: 'Much in little, from a Norman hall to a data structure',
      intro: 'The Rutland link, from the county\'s own sites.',
      body: [
        { kind: 'table', caption: 'Rutland in its own words', head: ['Source', 'What it says'], rows: [
          ['Discover Rutland', 'Rutland is England\'s smallest county, with the motto Multum in Parvo, much in little.'],
          ['Oakham Castle', 'Its Great Hall was built between 1180 and 1190.'],
          ['Oakham Castle', 'It calls the hall the finest surviving example of Norman domestic architecture in Europe.'],
          ['Oakham Castle', 'The hall holds a display of gilded horseshoes.'],
          ['ONS', 'Census 2021 counts carry small random adjustments to protect privacy, which can change totals slightly.']
        ] },
        { kind: 'p', text: 'Trees are everywhere in computing: folders on a disk, the structure of a web page, a family tree, the menu of an app, and the way an AI model splits a decision into questions. A county small enough to print whole is a friendly first tree, and real census data gives it a real puzzle. A Rutland student who has walked it four ways and chased down one missing person has met one of the most important structures in computer science, and one of the most important habits in handling official data.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Rutland County Council, Oakham Castle, Discover Rutland and the Office for National Statistics. Their facts are theirs; the tree, our sums and any slips in them are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a> wraps round the west, with <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a> north-east, <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire</a> south and <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a> east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From sorting games to recursive trees',
    intro: 'The free lesson settles where each learner starts. Age suggests, ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sort and group', p: 'Block coding and puzzles that sort things into groups, the first step towards thinking in trees.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 8 to 13', h3: 'Lists of lists', p: 'Typed Python with lists and dictionaries, building small nested structures and adding them up.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Trees and recursion', p: 'Data structures and algorithms for teenagers, including recursion, trees and traversal orders.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Structures for work', p: 'Trees, heaps, graphs and the rest for adults, whether for interviews, study or work with data.', courses: ['data-structures-algorithms-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and official data',
    h2: 'An AI will happily add up the parts. Will it tell you they should not match?',
    intro: 'Knowing why numbers disagree matters as much as adding them.',
    p1: 'Give an assistant the 128 output-area counts and ask for Rutland\'s population, and it will add them to 41,048 and present that as the answer. It will not usually know that the ONS publishes 41,049, or that the difference is deliberate noise added to protect privacy. It may even offer to fix the small discrepancy, which is exactly the wrong thing to do with official statistics.',
    p2: 'A Rutland student who has read the ONS explanation knows to quote the published figure, label any recalculation as their own, and say why they differ. As more reports are drafted with AI help, that habit keeps numbers honest.',
    closer: 'So a young person in Rutland should learn to code in 2026 to understand where numbers come from, not only how to add them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'The everyday details',
    h2: 'From Oakham to the smallest parish',
    intro: 'In a county of villages, a weekly class at the right level might mean a long drive out of the county. Online lessons remove the drive.',
    cells: [
      { h3: 'Lessons in your own home', p: 'A cottage in Lyddington, a new house in Barleythorpe, a farmhouse near Clipsham. The screen is shared and the learner does the coding.' },
      { h3: 'The school words, unchanged', p: 'Key stages, year groups, GCSEs and A levels are used as Rutland schools use them, and the teaching is in English.' },
      { h3: 'The first lesson is free', p: 'A proper lesson with real work, then a straight answer on level and course, without card details.' },
      { h3: 'A group that matches you', p: 'Five to ten learners at one stage, from Rutland, the rest of the UK and abroad.' },
      { h3: 'Breaks when you need them', p: 'Two lessons a week for most learners, with pauses for your own school holidays.' },
      { h3: 'UK time, clock change or not', p: 'Your slot is fixed in UK time all year; the teacher, whose day runs on India time a few hours ahead, adapts when the UK clocks move.' }
    ],
    spec: { title: 'Why groups are built on level', p: 'With about 41,000 people across the whole county, five learners at one stage on the same evening are almost impossible to find locally. Level-based groups mean a learner in Whissendine or Morcott still joins the right class.' }
  },

  fees: {
    h2: 'Fees in Rutland',
    intro: 'Uppingham or Tinwell, the price is the same, and it is the same in every country we teach other than India.',
    first: 'One real lesson with genuine work, then advice on level and course.',
    group: 'About eight lessons a month with a group of five to ten at one level.',
    private: 'About eight lessons a month, one-to-one with a teacher.',
    closer: 'We price and bill in US dollars, not pounds. There is no charge until the free lesson has settled a course and a weekly time, and the pricing page explains pauses, missed lessons and switching between group and private.'
  },

  reviewsH2: 'Families on Google, in brief',

  book: {
    h2: 'Book a free lesson in Rutland',
    intro: 'Send the learner\'s age or year group and a couple of interests. A first lesson might be a sorting game, a first Python dictionary, or the Rutland tree on this page.',
    success: 'Thank you. Your Rutland request has been received.'
  },

  faq: {
    h2: 'Rutland questions',
    intro: 'The county, the tree project and how lessons work.',
    items: [
      { q: 'How many people live in Rutland?', a: 'Rutland had 41,049 usual residents at the 2021 Census, from ONS figures on Nomis. Adding its 128 output areas gives 41,048, one fewer, because of the small random adjustments the ONS makes to protect privacy.' },
      { q: 'What are the largest places in Rutland?', a: 'By our sums of census output areas, the largest parishes are Oakham with 11,165 residents, Uppingham 4,722, Cottesmore 3,084, Barleythorpe 2,338 and Ketton 1,951.' },
      { q: 'What is the Rutland tree project?', a: 'Learners build Rutland as a tree of 168 nodes, the county, 39 parishes and 128 census output areas, walk it in pre-order, post-order and level order, search it, and explain why the leaves add to one fewer than the published total.' },
      { q: 'What is tree traversal?', a: 'The order in which a program visits every node of a tree. Pre-order visits a parent before its children, post-order after them, and level order goes one depth at a time.' },
      { q: 'Why do census numbers not always add up?', a: 'The ONS says it added small random noise to Census 2021 tables to protect privacy. Each published count is adjusted separately, so a total and the sum of its parts can differ slightly.' },
      { q: 'Do you teach anywhere in Rutland?', a: 'Not in person. All lessons are live online, so learners anywhere in the county join from home.' },
      { q: 'What ages do you teach?', a: 'Ages 6 to 67. Young children start with blocks and puzzles, Python usually follows around eight to ten, teenagers move on to data structures and advanced Python, and adults choose Python, data or algorithms. The free lesson decides the level.' },
      { q: 'Do you teach data structures and algorithms?', a: 'Yes, to teenagers and adults, including trees, recursion and traversal, as on this page.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. After that, a group place is USD 100 per month and one-to-one lessons USD 150 per month, with no joining fee and no fixed term.' },
      { q: 'Do lessons fit around Rutland school holidays?', a: 'Yes. Rutland County Council and academy trusts publish their own dates; tell us yours and we will plan breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Neighbours',
    h2: 'Pages around Rutland',
    html: 'Try <a class="cg-inline-link" href="/coding-classes-in-leicestershire">Leicestershire</a>, <a class="cg-inline-link" href="/coding-classes-in-lincolnshire">Lincolnshire</a>, <a class="cg-inline-link" href="/coding-classes-in-northamptonshire">Northamptonshire</a> or <a class="cg-inline-link" href="/best-coding-class-in-peterborough">Peterborough</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rutland and neighbours',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-leicestershire', label: 'Leicestershire' },
    { href: '/best-coding-class-in-peterborough', label: 'Peterborough' }
  ],

  personalityCss: `
.cg-root.cg-rut .cg-hero-grid { align-items: center; gap: clamp(0.9rem, 2.7vw, 2.3rem); }
.cg-root.cg-rut .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-rut .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.3rem; }
.cg-root.cg-rut .cg-eyebrow { letter-spacing: 0.24em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-rut .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.014em; }
.cg-root.cg-rut .cg-table caption { font-weight: 500; font-style: italic; text-align: left; }
.cg-root.cg-rut .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rut .cg-table th { letter-spacing: 0.06em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-rut .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-rut .cg-callout { border-left-width: 4px; border-radius: 0 16px 16px 0; }
`,

  dossier: {
    curriculumAuthority: 'Rutland: one unitary council. ONS Census 2021 TS001 via Nomis: Rutland 41,049; 128 output-area counts summing to 41,048 (our sum). ONS OA21 to PAR22 lookup: 128 OAs in 39 parishes, each OA once. ONS, Protecting personal data in Census 2021 results: "We used a cell key method to protect against disclosure by differencing by adding "noise" to every dataset"; "a typical dataset would have around 14% of cell counts perturbed by a small amount"; "The noise can be positive or negative and, across a dataset, should approximately balance out. However, the randomness may mean small changes to totals." Oakham Castle: "The Great Hall of Oakham Castle is the finest surviving example of Norman domestic architecture in Europe. It was built between 1180 and 1190"; "a stunning aristocratic display of gilded horseshoes". Discover Rutland: "Rutland is England\'s smallest and arguably prettiest county"; "Multum in Parvo (much in little)".',
    localProject: 'Tree of Rutland: root county, 39 parish nodes, 128 OA leaves (168 nodes); level counts 1, 39, 128. Post-order sum 41,048 vs published 41,049, explained by ONS cell key perturbation (quoted). Parish sums: Oakham 11,165 (36 OAs), Uppingham 4,722 (15), Cottesmore 3,084 (8), Barleythorpe 2,338 (8), Ketton 1,951 (6), Ryhall 1,634 (6), Stretton 1,437 (2), Langham 1,400 (4); smallest Lyndon 117, Tixover 160, Clipsham 194; 23 single-OA parishes; OA 103 to 1,221, mean 320.7; Oakham 27.2 per cent, Oakham plus Uppingham 38.7. Page labels parish sums as ours and quotes the published total. AI angle: an assistant sums parts and offers to fix the gap. Lesson family: tree traversal (pre-order, post-order, level order, search), published totals vs sums of parts.',
    requiredMentions: [
      '41,049',
      '41,048',
      'Multum in Parvo',
      'Oakham Castle',
      'Barleythorpe',
      'Cottesmore',
      'Ketton',
      'Ryhall',
      'Lyndon',
      'Tixover',
      'Clipsham',
      'post-order'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Rutland and its output areas, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal: output area to parish lookup (OA21 to PAR22 to LTLA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS: Protecting personal data in Census 2021 results (cell key perturbation, small changes to totals).', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/methodologies/protectingpersonaldataincensus2021results' },
      { claim: 'Oakham Castle: Great Hall dates and horseshoe display.', url: 'https://www.oakhamcastle.org/' },
      { claim: 'Discover Rutland: smallest county and the Multum in Parvo motto.', url: 'https://www.discover-rutland.co.uk/' }
    ],
    rejectedClaims: [
      'Rutland Water facts: the Anglian Water page returned 403 and was not retried, so none are used.',
      'How many civil parishes Rutland has in total: not read; the page speaks only of the 39 in the ONS output-area lookup.',
      'Reasons for the two largest output areas: not researched, not stated.',
      'The history of the horseshoe custom: not read beyond the display itself, not described.',
      'Rutland school term dates: none read.',
      'Named Rutland schools: none named.'
    ]
  }
};
