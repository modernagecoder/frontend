'use strict';
// Beeston (cg- town page, UK cluster Phase 10, towns band B, row 499). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: when two lists share a key, what is the
// cheapest way to match them up? (sort-merge join with two pointers versus a nested-loop join, and what fails to join).
// Data (read 30 September 2026): Food Standards Agency food hygiene ratings API, authority Broxtowe (id 79): 812
// records, 801 with a postcode field, 535 of those in the NG9 district. Of the 535, 91 carry only the partial postcode
// "NG9" (the FSA withholds full addresses for some records) and 444 a full postcode. No business is named on the page.
// OS Code-Point Open (August 2026 release): 1,671 postcodes in NG9.
// Our run (scratchpad bst/join.py): nested-loop join, stopping at the first match: 482,587 comparisons (893,985 if it
// never stops early, 535 x 1,671). Sort-merge join: 4,011 comparisons to sort the 535 keys, 1,701 to sort the 1,671
// (already nearly in order), 3,858 in the two-pointer merge; 9,570 in total, about 50 times fewer. Both joins match the
// same 442 records; 93 do not match: the 91 partial "NG9" keys and 2 full postcodes absent from Code-Point Open.
// Lesson family: sort-merge join with two pointers vs nested-loop join.
// Place facts: Broxtowe (E07000172) TS001 110,940. ONS 2021 BUAs (published): Beeston (Broxtowe) 52,355; Eastwood
// 18,890; Stapleford 15,045; Nuthall and Watnall 9,585. postcodes.io (Broxtowe): Chilwell, Bramcote, Attenborough,
// Toton (suburban areas); Stapleford, Kimberley, Eastwood (towns).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BEESTON', label: 'Beeston', blurb: 'Online coding and Python classes for Beeston in Broxtowe, Nottinghamshire, with a data project on joining two real tables by postcode.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'online-coding-and-python-classes-in-beeston',
  code: 'bst',
  accent: '#6A5A00',
  accentRationale: 'Beeston: a dark olive gold (6.8:1 contrast on white), chosen by hand as unused and well apart from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Beeston',
    eyebrow: 'Beeston, Broxtowe, Nottinghamshire',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Nottinghamshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-east-midlands', name: 'East Midlands' }],
  nav: [
    { label: 'Nottinghamshire', href: '/coding-classes-in-nottinghamshire' },
    { label: 'Nottingham', href: '/best-coding-class-in-nottingham' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Beeston, Nottinghamshire',
  title: 'Online Coding and Python Classes in Beeston, Nottinghamshire',
  description: 'Python, coding, AI and vibe coding taught live online to learners aged 6 to 67 in Beeston, Chilwell, Bramcote, Attenborough and Toton. The first lesson is free.',
  ogDescription: 'Online coding and Python classes for Beeston, Nottinghamshire, with a project that joins food hygiene records to postcodes two ways and counts the work.',
  twitterDescription: 'Beeston, Nottinghamshire: Python, coding, AI and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Beeston, Nottinghamshire',
    description: 'Python, data handling, coding, AI, vibe coding and maths for children, teenagers and adults in Beeston and Broxtowe, taught live online and built on reasoning.'
  },

  h1: 'Online coding and Python classes in Beeston, Nottinghamshire',
  capsuleQ: 'Where are the best online coding and Python classes for Beeston?',
  capsule: 'At the 2021 census the Beeston built-up area had 52,355 residents and Broxtowe borough 110,940, by ONS count. Chilwell, Bramcote, Attenborough and Toton are recorded as suburban areas of the borough, and Stapleford as a town. Our tutors teach Python, coding, AI, vibe coding and maths from India by live video, to ages six to 67, in private lessons or classes of five to ten at one level. The teaching puts reasoning first, which is what allows a learner to check a program, or a chatbot, instead of trusting it. For the Beeston project a learner joins two real tables by postcode in Python, first the slow obvious way and then with a sort-merge join, and counts every comparison. Your first lesson is free and ends with a course recommendation, after which a group place is USD 100 a month and one-to-one lessons are USD 150 a month.',
  lead: 'Almost every useful piece of data work involves a join: two tables that share a key, such as a postcode, matched row to row. The obvious method takes each row of the first table and scans the whole second table for a partner. It is easy to write and painfully slow as tables grow. Databases usually do something smarter. One classic method sorts both tables by the key and then walks down them together with two pointers, never looking back. Beeston\'s NG9 postcode district offers two open tables to try this on, and the real data adds a twist that no textbook example has: some rows refuse to join at all.',
  wa: 'Hello Modern Age Coders, please may I book a free Python or coding lesson for a learner in Beeston, Nottinghamshire?',

  picks: {
    eyebrow: 'Beeston course picks',
    h2: 'Python, data and AI courses for Beeston learners',
    intro: 'Match the course to the learner\'s age. The opening live class is free on all four, and we take no card details.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: pair up two shuffled sets of cards, then sort them first and feel the difference.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch matching game and test what happens when a card has no partner.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python through to files, sorting and dictionaries, with the NG9 join as a real-data project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'AI-assisted Python and web projects in which the learner counts what the code actually does.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Broxtowe borough',
      h2: 'Beeston, Stapleford, Eastwood and the Broxtowe suburbs',
      intro: 'Four built-up areas of Broxtowe from the ONS, and the places postcode data attaches to the borough.',
      body: [
        { kind: 'table', caption: 'Selected built-up areas in Broxtowe, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Beeston', '52,355'],
          ['Eastwood', '18,890'],
          ['Stapleford', '15,045'],
          ['Nuthall and Watnall', '9,585']
        ] },
        { kind: 'p', text: 'These are the ONS\'s published figures, quoted singly and never totalled. The borough population, 110,940, is taken from census table TS001. Postcodes.io places Chilwell, Bramcote, Attenborough and Toton in Broxtowe as suburban areas, and Stapleford, Kimberley and Eastwood as towns. Schools in the borough teach England\'s national curriculum, and our lessons stop for the holidays a family tells us about.' },
        { kind: 'callout', h3: 'Nottinghamshire, the East Midlands and our method', p: 'Wider coverage is on <a class="cg-inline-link" href="/coding-classes-in-nottinghamshire">coding classes in Nottinghamshire</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">the East Midlands</a>. What "reasoning first" means in practice is described on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Beeston project',
      h2: 'A sort-merge join on NG9: 535 records against 1,671 postcodes',
      intro: 'Two open tables, one shared key, two ways to match them, and a count of the work each way takes.',
      body: [
        { kind: 'p', text: 'The first table comes from the Food Standards Agency\'s open ratings service. For Broxtowe it returned 812 records on the day we read it, and 535 of them carry a postcode beginning NG9. The learner keeps only the postcode from each record; no business is named or rated in this project. The second table is Ordnance Survey\'s Code-Point Open, which lists 1,671 postcodes in NG9, each with a map position. Joining the two would give every record a location. The task is to find, for each of the 535 records, its row in the postcode list.' },
        { kind: 'table', caption: 'Joining 535 NG9 records to 1,671 NG9 postcodes, comparisons counted in our Python run', head: ['Method', 'Comparisons', 'Records matched'], rows: [
          ['Nested loop, never stopping early', '893,985', '442'],
          ['Nested loop, stopping at the first match', '482,587', '442'],
          ['Sort-merge: sort the 535 keys', '4,011', ''],
          ['Sort-merge: sort the 1,671 keys', '1,701', ''],
          ['Sort-merge: two-pointer merge', '3,858', '442'],
          ['Sort-merge, all three steps', '9,570', '442']
        ] },
        { kind: 'p', text: 'The nested loop compares every record with every postcode until it finds a partner: 482,587 comparisons even when it stops at the first match. The sort-merge join sorts both lists, then places one pointer at the top of each. If the two keys are equal, that is a match. If not, the pointer on the smaller key moves down one row, because a sorted list guarantees nothing earlier can match it. Neither pointer ever moves backwards, so the merge needs only 3,858 comparisons. Adding the cost of both sorts gives 9,570, roughly 50 times fewer than the nested loop. Sorting the postcode list was cheap, 1,701 comparisons for 1,671 keys, because the file arrives almost in order and Python\'s built-in sort takes advantage of that.' },
        { kind: 'p', text: 'Both methods agree on the result: 442 records matched and 93 did not. The 93 are the interesting part. In 91 of them the postcode field holds only "NG9", because the agency publishes a partial address for some records, and a partial key can never equal a full one. The other 2 have a full postcode that the current Code-Point Open release does not list. A learner who reports "535 records joined" without checking has silently lost one row in six. Counting the unmatched rows, and finding out why, is part of the join.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Match two piles of numbered cards unsorted, then sorted, and count how many looks each takes.' },
          { h3: 'Ages 11 to 15', p: 'Write the nested loop in Python with a comparison counter and watch it grow as the lists lengthen.' },
          { h3: 'Ages 15 and up', p: 'Code the two-pointer merge, confirm it matches the nested loop, and explain every unmatched row.' }
        ] },
        { kind: 'callout', h3: 'Open data, used carefully', p: 'Ratings records are Food Standards Agency open data and postcodes are from OS Code-Point Open, both under the Open Government Licence (Code-Point Open contains OS data © Crown copyright and database right 2026, and Royal Mail data © Royal Mail copyright and database right 2026). We used postcodes only. The comparison counts are ours and will change as either table is updated.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Joins and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Code that runs is not the same as code that scales, or code that kept all your rows.',
      body: [
        { kind: 'table', caption: 'From the NG9 join to AI-written code', head: ['In the Beeston join', 'When an AI writes the code'], rows: [
          ['Nested loop: 482,587 comparisons', 'The first draft is often the slow, obvious one'],
          ['Sort-merge: 9,570', 'Ask what happens when the tables are 100 times larger'],
          ['Both matched the same 442', 'Verify a faster method against a simple one'],
          ['93 rows did not join', 'Always count what went in and what came out'],
          ['91 keys were only "NG9"', 'Look at the failures; they have a cause']
        ] },
        { kind: 'p', text: 'Vibe coding hands the typing to an AI: the learner says "join these two files on postcode" and code appears. It will usually work on a small sample. Whether it is a nested loop in disguise, and whether it quietly drops rows that fail to match, are questions the learner has to ask. Beeston students add a comparison counter and an unmatched-row report to whatever the AI writes. AI agents that assemble data from several sources perform joins constantly, and the same two checks apply to them. We begin agent projects when a learner can write and debug Python unaided, usually from about 16 or as an adult, and Copilot Studio agents are taught in private lessons, not in groups. Two pages go further: <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the agents course for UK students</a>.' },
        { kind: 'p', text: 'Modern Age Coders is not connected with the Food Standards Agency, Ordnance Survey, the Office for National Statistics or postcodes.io. We worked from their open data, and the counts and any errors in them are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From matching cards to joining tables',
    intro: 'The school years shown are a rough fit; the free lesson tells us more.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, matching and counting the steps a method takes.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Simple games written with an AI and checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and data', p: 'Files, sorting and real tables, beside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course'] },
      { band: 'Adults', h3: 'Data structures and AI', p: 'Python from scratch, then algorithms and generative AI.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-structures-algorithms-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and data',
    h2: 'What is a sort-merge join?',
    intro: 'A sort-merge join matches two tables on a shared key by sorting both on that key and then stepping through them together with two pointers, so that no row is compared more often than necessary.',
    p1: 'Joining 535 NG9 food hygiene records to 1,671 NG9 postcodes took 482,587 comparisons with a nested loop and 9,570 with a sort-merge join, and both found the same 442 matches.',
    p2: 'The 93 records that did not match, 91 of them holding only a partial postcode, taught as much as the speed-up.',
    closer: 'A Beeston teenager who has counted those comparisons can tell when AI-generated code is wasteful or lossy, a skill that comes from writing programs, which is why coding is still worth learning in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons work',
    h2: 'Chilwell, Bramcote and Toton, all by live video',
    intro: 'Any computer that can run a video call over home broadband is suitable.',
    cells: [
      { h3: 'The learner codes', p: 'Students do the typing and the testing; the tutor sees the shared screen and asks for the reasoning behind it.' },
      { h3: 'Trial finds the level', p: 'We choose the first topic from what the free lesson shows and record the exam board if there is one.' },
      { h3: 'No cost to begin', p: 'Lesson one is free, with no card, and ends with our suggested course.' },
      { h3: 'Same-stage groups', p: 'Five to ten learners at a common level, from anywhere in the UK.' },
      { h3: 'Two lessons each week', p: 'Holiday weeks are left out once you give us the dates.' },
      { h3: 'Fixed lesson hour', p: 'Clock changes for British Summer Time are handled by the tutor, not by moving your slot.' }
    ],
    spec: { title: 'Why we teach by video', p: 'To form a class at one level we need many learners to draw from. Online, that pool is the whole of the UK.' }
  },

  fees: {
    h2: 'Beeston fees',
    intro: 'Beeston learners pay the international rates that apply in every country but India.',
    first: 'One complete live lesson without charge, then our course recommendation.',
    group: 'Approximately eight live lessons a month in a small group.',
    private: 'Approximately eight live lessons a month, one-to-one.',
    closer: 'Invoices are raised in US dollars, and there is no price in pounds. The first invoice comes after the trial, when a course and a regular weekly time have been agreed. See the pricing page for holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Google reviews by Nottinghamshire families and UK learners',

  book: {
    h2: 'Book a free Beeston lesson',
    intro: 'An age or school year plus one interest is all we ask. The trial may be a card-matching race, a Scratch game built with AI, a first Python script, or a join on two small real tables.',
    success: 'Thank you. We have your Beeston request.'
  },

  faq: {
    h2: 'Beeston questions',
    intro: 'Joins, the NG9 project, Python, vibe coding and the everyday details.',
    items: [
      { q: 'How many people live in Beeston, Nottinghamshire?', a: 'The ONS counted 52,355 residents in the Beeston built-up area in 2021, and 110,940 in Broxtowe borough.' },
      { q: 'Do you run online Python classes for Beeston?', a: 'Yes. They are live video lessons for ages 6 to 67, open to Beeston, Chilwell, Bramcote, Attenborough, Toton and Stapleford.' },
      { q: 'What is a join in data?', a: 'Combining two tables by matching rows that share a key value, such as the same postcode or the same ID number.' },
      { q: 'What is the two-pointer technique?', a: 'Keeping one position marker in each of two sorted lists and advancing whichever points at the smaller value, so both lists are read once from top to bottom.' },
      { q: 'What happens in the Beeston project?', a: 'Learners join food hygiene records to postcodes for NG9 with a nested loop and a sort-merge join in Python, count comparisons, and explain the rows that did not match.' },
      { q: 'Do lessons include vibe coding?', a: 'Yes, from the youngest group up. Learners describe the program, read what the AI wrote, and test it.' },
      { q: 'When are AI agents introduced?', a: 'Once a learner writes and debugs Python alone, typically from about 16. Copilot Studio agents are one-to-one only.' },
      { q: 'Can you help with GCSE or A level computer science?', a: 'Yes, and with maths. Our aim is understanding, and we do not promise grades.' },
      { q: 'What are the prices?', a: 'The first lesson is free of charge. After it, group classes cost USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'What happens in school holidays?', a: 'We pause on request; send us your dates.' }
    ]
  },

  next: {
    eyebrow: 'Around Beeston',
    h2: 'More Nottinghamshire and East Midlands pages',
    html: 'Other pages, each with its own project: <a class="cg-inline-link" href="/best-coding-class-in-nottingham">Nottingham</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-west-bridgford-nottingham">West Bridgford</a>, <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-mansfield">Mansfield</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the rest.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Beeston and Nottinghamshire',
  footerPlaces: [
    { href: '/coding-classes-in-nottinghamshire', label: 'Nottinghamshire' },
    { href: '/coding-and-ai-classes-in-east-midlands', label: 'East Midlands' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bst .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3.3vw, 2.7rem); }
.cg-root.cg-bst .cg-hero h1 { font-weight: 710; letter-spacing: -0.019em; line-height: 1.09; }
.cg-root.cg-bst .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-bst .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; }
.cg-root.cg-bst .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.013em; }
.cg-root.cg-bst .cg-table caption { text-align: left; font-size: 0.87rem; font-weight: 600; }
.cg-root.cg-bst .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-bst .cg-table th { font-size: 0.8rem; font-weight: 700; border-bottom: 3px solid var(--cg-accent); }
.cg-root.cg-bst .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.8rem; }
.cg-root.cg-bst .cg-callout { border-left-width: 3px; border-radius: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Broxtowe (E07000172), Census 2021 TS001 usual residents 110,940. ONS 2021 BUAs (published): Beeston (Broxtowe) 52,355; Eastwood 18,890; Stapleford 15,045; Nuthall and Watnall 9,585. postcodes.io (Broxtowe): Chilwell, Bramcote, Attenborough, Toton (suburban areas); Stapleford, Kimberley, Eastwood (towns).',
    localProject: 'FSA food hygiene ratings API, Broxtowe (authority id 79), read 30 September 2026: 812 records, 535 with an NG9 postcode field (91 of them the partial "NG9" only). OS Code-Point Open: 1,671 NG9 postcodes. Nested-loop join with early exit 482,587 comparisons (893,985 without). Sort-merge: 4,011 + 1,701 to sort, 3,858 to merge, 9,570 total, about 50 times fewer. Both match 442; 93 unmatched (91 partial keys, 2 full postcodes not in Code-Point Open). Postcodes only; no business named. Lesson family: sort-merge join, two pointers, nested-loop join.',
    requiredMentions: [
      '52,355',
      '110,940',
      '482,587',
      '9,570',
      'Chilwell',
      'Bramcote',
      'Attenborough',
      'Toton',
      'Stapleford',
      'sort-merge'
    ],
    sources: [
      { claim: 'Food Standards Agency food hygiene ratings open data API, establishments for Broxtowe.', url: 'https://api.ratings.food.gov.uk/help' },
      { claim: 'Ordnance Survey Code-Point Open postcode data (Open Government Licence).', url: 'https://www.ordnancesurvey.co.uk/products/code-point-open' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas and towns in Broxtowe.', url: 'https://api.postcodes.io/places?q=Chilwell' }
    ],
    rejectedClaims: [
      'Any named business or any hygiene rating: not used; postcodes only.',
      'Why some records carry a partial postcode: stated only as the agency publishing a partial address, no further reason claimed.',
      'University, tram or employer facts: not read from a source; not claimed.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
