'use strict';
// Southwark (cg- London borough page, UK cluster Phase 5, row 184). Named sources only.
// Spine: is the golden ratio really everywhere in art? Historic England list entry 1385543 (Dulwich Picture Gallery and
// Mausoleum, Grade II*): 1811-14 by Sir John Soane, repaired after severe Second World War damage and reopened in 1953.
// Data: Tate collection metadata, artwork_data.csv from Tate's public GitHub repository (CC0): 69,201 records; 65,833
// with width and height in mm. Ratio = long side / short side. Within 1% of the golden ratio (1.618): all works 8.61%,
// the most common of the ratios tested (square 1.98, 5:4 4.33, 4:3 4.03, root 2 6.17, 3:2 5.36, 5:3 7.94, 2:1 0.26);
// most common 0.01 bin 1.63 (2,486 works). But Turner, Joseph Mallord William = 39,389 records (56.9%), 37,713 with
// credit line "Accepted by the nation as part of the Turner Bequest 1856", 32,693 on paper. Excluding Turner (27,267
// works): golden ratio 1.89%, below 4:3 7.29, root 2 6.60, 3:2 6.15, 5:4 5.56, square 4.71. Oil on canvas (3,591):
// golden 1.87%; 5:4 9.64, 4:3 8.49; top bins 1.19, 1.33, 1.20. Lesson family: testing a popular claim against data and
// spotting one group that dominates a dataset (composition bias); screened 25 September 2026 (golden ratio 0).
// Southwark Council's libraries page returned HTTP 202 with an empty body (a challenge): not circumvented, no list.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'SOUTHWARK', blurb: 'Dulwich Picture Gallery, Southwark Cathedral and a project that tests whether the golden ratio really rules art.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-southwark-london',
  code: 'swk',
  accent: '#57440F',
  accentRationale: 'Southwark: a gilt-frame bronze from the solver (7.61:1 on every paper tint), for a page about pictures, browner than the Havering ochre',
  pageType: 'governorate',
  place: {
    name: 'Southwark',
    eyebrow: 'London Borough of Southwark',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Southwark, London',
  title: 'Coding Classes in Southwark and Peckham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Southwark: Peckham, Bermondsey, Camberwell, Dulwich, Rotherhithe, Walworth and Borough. Ages 6 to 67.',
  ogDescription: 'Southwark coding and Python classes, with a project on 65,000 artworks where the golden ratio seems to win, until learners notice one artist makes up most of the data.',
  twitterDescription: 'Southwark coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Southwark Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Southwark, taught live in English.'
  },

  h1: 'Coding classes in Southwark',
  capsuleQ: 'What are the best coding classes in Southwark?',
  capsule: 'Southwark is the south London borough of Peckham, Bermondsey, Camberwell, Dulwich, Rotherhithe, Borough, Walworth and Nunhead, with 307,637 residents at the 2021 Census, Southwark Cathedral and Sir John Soane\'s Dulwich Picture Gallery. A class worth your time teaches a learner to check a famous claim before repeating it, and this page does exactly that with art: is the golden ratio really hidden in the shapes of pictures? Tested on 65,833 artworks, it first seems to win, then learners discover why the result is misleading. Lessons happen live on video with teachers in India; learners anywhere from six to sixty-seven study one to one or join a group of five to ten who share a stage. The first lesson is free. Afterwards a group place costs USD 100 a month, and one-to-one teaching USD 150 a month.',
  lead: 'Dulwich Picture Gallery, designed by Sir John Soane and built between 1811 and 1814, is listed at Grade II* by Historic England. Galleries like it are full of rectangles: canvases, panels, sheets of paper. A claim you will meet in books and online says that artists favour the golden ratio, about 1.618 to 1, because it looks most pleasing. Our learners test it on the Tate\'s published collection data, which gives the width and height of tens of thousands of works. The first result seems to prove the claim: more works sit close to the golden ratio than to 4:3, 3:2 or a square. Then learners count who made the works. More than half of all the records are by a single artist, J. M. W. Turner. Take him out and the golden ratio sinks near the bottom.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Southwark.',

  picks: {
    eyebrow: 'Course picks for Southwark',
    h2: 'Where Southwark learners begin',
    intro: 'Imagine a Year 2 child in Peckham who draws on every scrap of paper, a Year 9 pupil in Dulwich who has heard the golden ratio is "everywhere", a Year 13 student in Bermondsey heading for maths or art history, and a gallery volunteer in Camberwell who wants to understand collection data. A free first lesson is open to each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch picture-frame maker that tries tall, wide and square shapes, and asks which one children like most.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with real measurements: width divided by height for a list of pictures, and the most common shape.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the golden ratio test and the Turner check on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who work with collections or surveys and want to spot when one group dominates the data.' }
    ]
  },

  sections: [
    {
      id: 'southwark', tint: '', eyebrow: 'Southwark in numbers',
      h2: '307,637 residents and 905 listed entries',
      intro: 'Each figure is the named organisation\'s own, or our count of its published data.',
      body: [
        { kind: 'table', caption: 'Southwark facts, with sources', head: ['Fact', 'Number', 'Source'], rows: [
          ['Residents on Census night 2021', '307,637', 'ONS table TS001'],
          ['Listed entries inside the borough, our count', '905, including 3 Grade I and 29 Grade II*', 'Historic England list data, 25 September 2026'],
          ['Dulwich Picture Gallery built', '1811 to 1814, by Sir John Soane', 'Historic England list entry 1385543'],
          ['Services at London Bridge', 'Jubilee line, Southeastern, Southern and Thameslink', 'TfL open data, checked 25 September 2026']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Three at Grade I', p: 'Southwark\'s Grade I entries are the Cathedral Church of St Saviour and St Mary Overie, the George Inn and the Church of St Peter.' },
          { h3: 'The gallery', p: 'Dulwich Picture Gallery and its mausoleum are Grade II*; the list entry records severe damage in the Second World War and reopening in 1953.' },
          { h3: 'Under the river', p: 'The Surrey portal of the Rotherhithe Tunnel, its air shaft and the archway to its approach are among the borough\'s Grade II entries.' }
        ] }
      ]
    },
    {
      id: 'data', tint: 'tint', eyebrow: 'The data',
      h2: 'Sixty-nine thousand records of width and height',
      intro: 'The Tate publishes metadata about its collection, free to reuse, including each work\'s dimensions. We divide the long side by the short side, so tall and wide pictures are compared fairly.',
      body: [
        { kind: 'table', caption: 'Share of works within 1% of each ratio, all 65,833 with dimensions, run 25 September 2026', head: ['Ratio', 'Share of works'], rows: [
          ['Golden ratio, about 1.618', '8.61%'],
          ['5:3', '7.94%'],
          ['Square root of 2, the shape of A4 paper', '6.17%'],
          ['3:2', '5.36%'],
          ['5:4', '4.33%'],
          ['4:3', '4.03%'],
          ['Square', '1.98%']
        ] },
        { kind: 'p', text: 'On the face of it, the golden ratio wins, and the single most common 1% band sits right next to it, at 1.63. Many people would stop here and announce that art proves the claim. Learners are taught to ask one more question before believing any result: who, or what, is in this data? We could not add a list of Southwark\'s libraries; the council\'s libraries page answered our automated reader with an empty challenge, and we never work around such checks.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One artist, more than half the data',
      intro: 'Learners count records by artist, then rerun the test without the largest group. The answer flips.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Count the makers', p: 'J. M. W. Turner accounts for 39,389 of the 69,201 records, 56.9%. Most are works on paper accepted by the nation as part of the Turner Bequest in 1856.' },
          { h3: '2. Test again', p: 'Remove Turner and recompute the shares for the remaining 27,267 works. Then look only at oil paintings on canvas, 3,591 of them.' },
          { h3: '3. Compare honestly', p: 'Check neighbouring ratios too: is 1.618 special, or just part of a broad hump shared by 1.55 or 1.65?' }
        ] },
        { kind: 'table', caption: 'Share within 1% of each ratio, once the dominant group is removed', head: ['Ratio', 'All works except Turner', 'Oil on canvas only'], rows: [
          ['4:3', '7.29%', '8.49%'],
          ['Square root of 2', '6.60%', '3.48%'],
          ['3:2', '6.15%', '5.26%'],
          ['5:4', '5.56%', '9.64%'],
          ['Square', '4.71%', '3.95%'],
          ['Golden ratio', '1.89%', '1.87%']
        ] },
        { kind: 'p', text: 'Without Turner, the golden ratio falls from first place to near the bottom, behind simple ratios such as 4:3, 3:2 and 5:4. Among oil paintings on canvas, 5:4 and 4:3 lead clearly, and the most common shapes cluster around 1.19 to 1.33. The apparent golden-ratio result came from one enormous group of works on paper in similar proportions, not from a preference shared across artists. It is a textbook case of a dataset dominated by one group, and it shows why the first answer is so often the wrong one.' },
        { kind: 'callout', h3: 'Why an AI answer is not enough', p: 'Ask an AI about the golden ratio in art and you may get a confident paragraph repeating the popular claim. Learners who have tested it on tens of thousands of real works, and seen it collapse when one artist is set aside, have learned something no summary can teach: always check what your data is made of. That habit protects against misleading results in medicine, polling and machine learning, where a model trained on unbalanced data can learn the wrong lesson.' }
      ]
    },
    {
      id: 'lessons', tint: 'tint', eyebrow: 'What to take away',
      h2: 'Three questions for any surprising result',
      intro: 'The golden ratio test ends with a checklist learners can use on any claim backed by data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Who is in the data?', p: 'Count by the obvious groups first. If one group is half the data, results for "everyone" are mostly results for that group.' },
          { h3: 'Compared with what?', p: 'A share of 8% means little alone. Compare nearby ratios and simpler rivals before calling anything special.' },
          { h3: 'Does it survive a split?', p: 'Rerun on a sensible subset, such as oil paintings, and see whether the finding holds.' }
        ] },
        { kind: 'p', text: 'GCSE maths students can follow ratios, percentages and the idea of a biased sample; A-level students can go further with histograms, confidence intervals and formal tests. Every width and height comes from the Tate\'s openly licensed metadata; the ratios, the group counts and the splits were worked out by us on 25 September 2026. We are not linked to the Tate, Dulwich Picture Gallery, Southwark Council, Historic England, TfL or the ONS.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'London Bridge, and a desk at home',
      intro: 'Southwark has some of London\'s busiest crossings and stations. Our classes need none of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'London Bridge', p: 'TfL\'s open data lists the Jubilee line, Southeastern, Southern and Thameslink at London Bridge.' },
          { h3: 'Rotherhithe to Dulwich', p: 'A learner by the river in Rotherhithe and another in Dulwich can share the same class without a journey.' },
          { h3: 'A balanced class', p: 'Groups are built the opposite way to the Tate list: no single member dominates, just five to ten learners at a shared stage.' }
        ] },
        { kind: 'spec', title: 'Southwark in London', p: 'Southwark is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> covers them all and the City, linking each page as it goes live, including <a class="cg-inline-link" href="/coding-classes-in-lambeth-london">Lambeth</a> to the west and <a class="cg-inline-link" href="/coding-classes-in-lewisham-london">Lewisham</a> to the east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From drawing frames to testing famous claims',
    intro: 'The free lesson shows where a learner really stands, and that sets their first rung.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Shapes and ratios', p: 'Children draw rectangles in Scratch, compare tall and wide, and vote on favourites.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Dividing and counting', p: 'Python that divides width by height for a list of works and counts how many land near each ratio.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Testing claims', p: 'Large real datasets, group counts and splits that expose misleading results, ideal for maths or statistics projects.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Reading data critically', p: 'Adults learn to question headline findings by asking what the data is made of.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI repeats popular claims. Why should a Southwark teenager learn to test them?',
    intro: 'Because a claim repeated often enough starts to sound like data, even when it is not.',
    p1: 'The golden ratio story is everywhere, and AI tools trained on the internet repeat it fluently. A learner who has tested it on 65,833 artworks knows two things most people do not: that it seems to be true on the full dataset, and that the effect disappears once one artist is set aside. That is exactly the kind of skew that trips up machine learning models trained on unbalanced data, and exactly what a thoughtful person can catch.',
    p2: 'The lesson carries into every field that uses data: count the groups, compare with rivals, split and retest. Machines will keep producing confident answers. People who check what those answers rest on will keep being needed.',
    closer: 'Southwark has had a picture gallery designed by Sir John Soane for more than two centuries. A learner here who can test a claim about pictures with real data is looking at art the way a scientist would.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Peckham to Bermondsey, taught live',
    intro: 'From any corner of Southwark, a lesson starts the moment the video call does.',
    cells: [
      { h3: 'Home is fine', p: 'Learners take part from home on a laptop or desktop, with headphones and broadband that copes with video.' },
      { h3: 'England\'s stages', p: 'We use the Key Stages of English schools to describe progress, up to sixth form, and bring in GCSE and A level where relevant. Everything is taught in English.' },
      { h3: 'A free start', p: 'Lesson one costs nothing, teaches properly, and ends with the teacher\'s suggestion of level and course; nobody asks for a card.' },
      { h3: 'Matched by stage', p: 'Each class is five to ten learners at the same stage, gathered from across the UK and beyond so a suitable evening is available.' },
      { h3: 'Twice weekly', p: 'Classes generally meet on two evenings each week, with agreed breaks for holidays and exams.' },
      { h3: 'On UK time', p: 'All lesson times reach you already in London time, so there is nothing to convert.' }
    ],
    spec: { title: 'A big borough, a matched class', p: 'More than 300,000 people live in Southwark, and a strong class still needs five learners at one stage free at the same time, so ours reach well beyond it.' }
  },

  fees: {
    h2: 'Fees for Southwark families',
    intro: 'A free first lesson, then one monthly fee, the same in Walworth as in Dulwich.',
    first: 'A full lesson with a teacher, free, ending with a recommended level, course and time.',
    group: 'Around eight live lessons a month in a class of five to ten at one stage.',
    private: 'Around eight live lessons a month, one to one.',
    closer: 'Southwark families pay in US dollars, like all families outside India, so no pound prices appear on the site. Billing begins only after the free lesson, when the course and the weekly evening are fixed. If you need to pause, miss a week or move to private lessons, the pricing page shows how.'
  },

  reviewsH2: 'Six Google reviews from families',

  book: {
    h2: 'Book a free lesson',
    intro: 'Let us know the learner\'s age or year and something they enjoy. We might start with a Scratch frame maker, a Python ratio counter, or the golden ratio test on this page.',
    success: 'Thank you. Your Southwark lesson request has reached us.'
  },

  faq: {
    h2: 'Questions from Southwark',
    intro: 'About the borough, the golden ratio project and our lessons.',
    items: [
      { q: 'How many people live in Southwark?', a: 'The 2021 Census counted 307,637 usual residents in the London Borough of Southwark, in ONS table TS001.' },
      { q: 'Who designed Dulwich Picture Gallery?', a: 'Sir John Soane, according to Historic England\'s list entry, which dates the building to 1811 to 1814 and records its reopening in 1953 after severe Second World War damage.' },
      { q: 'Do artists really use the golden ratio?', a: 'In the Tate\'s collection data, not especially. It looks common across all 65,833 works with dimensions, but that is because more than half the records are by Turner. Without Turner, only 1.89% of works are within 1% of the golden ratio, fewer than for 4:3, 3:2 or 5:4.' },
      { q: 'Where does the data come from?', a: 'From the Tate\'s collection metadata, which it publishes openly for anyone to reuse, including each work\'s width and height in millimetres.' },
      { q: 'What is the main lesson?', a: 'Always check what a dataset is made of. If one group makes up most of the data, a result for everyone may really be a result for that group.' },
      { q: 'When are lessons for Southwark learners?', a: 'Your free lesson settles the level. From there we match the learner to a class with a seat and a set evening, and every time we quote is London time, whatever the teacher\'s own clock says in India.' },
      { q: 'Which equipment helps?', a: 'Nothing special: any computer with sound and a connection that does not drop. The golden ratio project needs Python and the Tate\'s free data file.' },
      { q: 'Is there a Modern Age Coders centre in Southwark?', a: 'No. There is no Southwark centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Southwark cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Around London and the UK',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> lists every borough and the City, each linked as its page is published, from <a class="cg-inline-link" href="/coding-classes-in-merton-london">Merton</a> to <a class="cg-inline-link" href="/coding-classes-in-hackney-london">Hackney</a>. Unbalanced data is also one of the first dangers covered in our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">London machine learning lessons</a>, a natural next step after this project; families moving across Britain can line up school years on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Southwark and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-lambeth-london', label: 'Lambeth' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-swk .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-swk .cg-hero h1 { font-weight: 780; letter-spacing: -0.018em; line-height: 1.04; }
.cg-root.cg-swk .cg-capsule { border: 1px solid var(--cg-accent); border-left-width: 6px; padding: 0.8rem 1rem; }
.cg-root.cg-swk .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-swk .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.012em; }
.cg-root.cg-swk .cg-grid-3 { gap: clamp(1rem, 2.6vw, 1.85rem); }
.cg-root.cg-swk .cg-table caption { font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-swk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-swk .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-swk .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-swk .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Southwark. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000028): 307,637 usual residents. Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 905 (I 3, II* 29, II 873); Grade I 1378460 CATHEDRAL CHURCH OF ST SAVIOUR AND ST MARY OVERIE, 1378357 THE GEORGE INN, 1385662 Church of St Peter; II* 1385543 DULWICH PICTURE GALLERY AND MAUSOLEUM (1811-14, Sir John Soane; severe WWII damage; reopened 1953); II include 1385849 SURREY PORTAL OF THE ROTHERHITHE TUNNEL, 1385839 AIR SHAFT TO THE ROTHERHITHE TUNNEL, 1385848 ARCHWAY TO ROTHERHITHE TUNNEL APPROACH. TfL HUBLBG (London Bridge): Jubilee, Southeastern, Southern, Thameslink. southwark.gov.uk/libraries returned HTTP 202 with empty body on 25 September 2026: not circumvented.',
    localProject: 'Tate collection metadata, github.com/tategallery/collection (CC0), artwork_data.csv: 69,201 rows; 65,833 with width, height > 0 and units mm. r = max/min. Within 1% of target (all / excluding Turner 27,267 / oil on canvas 3,591): 1:1 1.98 / 4.71 / 3.95; 5:4 4.33 / 5.56 / 9.64; 4:3 4.03 / 7.29 / 8.49; root 2 6.17 / 6.60 / 3.48; 3:2 5.36 / 6.15 / 5.26; golden 8.61 / 1.89 / 1.87; 5:3 7.94 / 1.03 / 1.28; 2:1 0.26 / 0.59 / 1.03. Local windows (all): 1.55 5.19, 1.58 4.87, 1.618 8.61, 1.65 6.26, 1.68 6.51. Top 0.01 bins all: 1.63 (2,486), 1.55, 1.67, 1.59, 1.41; oil: 1.19, 1.33, 1.20, 1.24, 1.00. Turner, Joseph Mallord William 39,389 rows (56.9%); credit line "Accepted by the nation as part of the Turner Bequest 1856" 37,713; medium ending "on paper" 32,693. Lesson family: testing the golden ratio claim; composition bias from one dominant group; screened 25 September 2026.',
    requiredMentions: [
      '307,637',
      'golden ratio',
      'Turner Bequest',
      'Dulwich Picture Gallery',
      'George Inn',
      'St Mary Overie',
      'Rotherhithe Tunnel',
      '65,833',
      'Walworth'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Southwark E09000028: 307,637 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000028&measures=20100' },
      { claim: 'Tate collection metadata (CC0), artwork dimensions and credit lines.', url: 'https://github.com/tategallery/collection' },
      { claim: 'Historic England list entry 1385543, Dulwich Picture Gallery and Mausoleum: 1811-14, Sir John Soane; reopened 1953.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1385543' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Southwark on 25 September 2026: 905 (3 I, 29 II*, 873 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint HUBLBG (London Bridge).', url: 'https://api.tfl.gov.uk/StopPoint/HUBLBG' }
    ],
    rejectedClaims: [
      'That Tate Modern is in Southwark: not listed and not verified at a primary source reachable to us; the page does not say where the Tate is, only that it publishes the data.',
      'That Turner\'s records are sketchbook pages: the data shows credit line and medium (mostly on paper); the page describes them that way only.',
      'Dulwich Picture Gallery as the first or oldest public gallery: not in the list entry text read; not stated.',
      'Southwark library list: council page returned a challenge; none named.',
      'Southwark schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth: never a standout; used only to order the build.'
    ]
  }
};
