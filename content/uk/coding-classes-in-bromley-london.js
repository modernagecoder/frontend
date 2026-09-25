'use strict';
// Bromley (cg- London borough page, UK cluster Phase 5, row 166). Named sources only.
// Spine: Darwin's maize. Historic England list entry 1038325 (Down House, Grade I) says the house was occupied by
// Charles Darwin from 1842 to 1882. His book The Effects of Cross and Self Fertilisation in the Vegetable Kingdom
// (1876; archive.org holds 1876 printings; we read the Project Gutenberg text, eBook 4346) prints Galton's Table 1/1:
// 15 pairs of Zea mays, crossed and self-fertilised, sown "on opposite sides of the same pots". Heights in inches and
// eighths, pairs as recorded by Darwin (columns 2 and 3). Crossed mean 20.19 in, self 17.58 in (raw ratio 100 to 87;
// Galton's revised figure "as 100 to 84"). Differences: 13 of 15 positive, mean 2.62 in, median 3.0 in, range -67/8
// to +75/8 in. Exact sign-flip test over all 2^15 = 32,768 sign patterns: 863 give a total at least as large (2.6%
// one-sided), 1,726 two-sided (5.3%). Sign test 13/15: 0.37% one-sided. Paired t: two-sided p 0.0497. Unpaired t
// (ignoring pots): 0.021, the wrong design. Dropping the two 12-inch crossed plants lifts the mean difference to 4.1 in.
// Lesson family: exact randomisation (sign-flip) test on a paired design, and choosing the test before looking.
// Distinct from St Albans (two-way ANOVA with blocks) and Newry (Fisher's exact on counts). Screened 25 September 2026.
// Libraries: Bromley's service is run through better.org.uk, whose branch list loads by script; not captured, so none
// are named.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'borough', tag: 'BROMLEY', blurb: 'Down House, the Crystal Palace Park dinosaurs and a project that re-tests Darwin\'s own maize measurements.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-bromley-london',
  code: 'brm',
  accent: '#317259',
  accentRationale: 'Bromley: a greenhouse green from the solver (4.63:1 on every paper tint), for Darwin\'s potted maize, greener than the Croydon teal next door',
  pageType: 'governorate',
  place: {
    name: 'Bromley',
    eyebrow: 'London Borough of Bromley',
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
  routeLabel: 'Bromley, London',
  title: 'Coding Classes in Bromley and Beckenham | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Bromley: Beckenham, Orpington, Chislehurst, Penge, West Wickham and Biggin Hill. Ages 6 to 67.',
  ogDescription: 'Bromley coding and Python classes, with a project where learners re-test Charles Darwin\'s own maize measurements using every one of 32,768 possible outcomes.',
  twitterDescription: 'Bromley coding classes for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '25 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Bromley Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults in the London Borough of Bromley, taught live in English.'
  },

  h1: 'Coding classes in Bromley',
  capsuleQ: 'What are the best coding classes in Bromley?',
  capsule: 'Bromley is the south east London borough of Beckenham, Orpington, Chislehurst, Penge, West Wickham, Hayes, Petts Wood and Biggin Hill, with 329,992 residents at the 2021 Census and Down House, Charles Darwin\'s home, at Downe. A course worth its fee teaches a learner to decide how a question should be tested before seeing the answer, and this page does that with Darwin\'s own data: fifteen pairs of maize plants from his 1876 book, tested by a program that tries every possible outcome. Our teachers, based in India, teach live on video to anyone from 6 to 67, individually or in a small group of five to ten at the same stage. A first lesson is free of charge; continuing costs USD 100 a month in a group or USD 150 a month one to one.',
  lead: 'Charles Darwin lived at Down House, in what is now the London Borough of Bromley, from 1842 until 1882, according to Historic England. In 1876 he published a book on whether plants grown from crossed parents do better than plants from self-fertilised ones, and he printed his measurements in full. One small table, fifteen pairs of maize plants grown on opposite sides of the same pots, became a favourite of statisticians. Our learners type it in and ask Darwin\'s question with a computer: if crossing made no difference, how often would chance alone produce a gap this large? With fifteen pairs there are exactly 32,768 ways the signs could have fallen, and a short program checks every one. The answer depends, uncomfortably, on which test you pick, and that is the real lesson.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Bromley.',

  picks: {
    eyebrow: 'Course picks for Bromley',
    h2: 'Four ways into coding from Bromley',
    intro: 'Picture a Year 2 child in Penge who grows cress on the windowsill, a Year 9 pupil in Beckenham who asks "but how do you know?" in every science lesson, a Year 13 student in Orpington heading for biology or medicine, and a keen gardener in Chislehurst who would like to test their own planting trials properly. All four can start with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'A Scratch garden where two rows of plants grow at different speeds, and a first fair comparison.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'First Python with Darwin\'s table: average heights, the tallest plant, and how many pairs the crossed plant won.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python for Key Stages 3 to 5, including the full 32,768-outcome test on this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'For adults who read trial results or A/B tests at work and want to know what makes a comparison fair.' }
    ]
  },

  sections: [
    {
      id: 'bromley', tint: '', eyebrow: 'Bromley in figures',
      h2: '329,992 residents and eight Grade I entries',
      intro: 'Each figure is published by the organisation named with it, or counted by us from that organisation\'s open data.',
      body: [
        { kind: 'table', caption: 'Bromley in four figures and their sources', head: ['Figure', 'Value', 'Source'], rows: [
          ['Usual residents, 2021 Census', '329,992', 'ONS table TS001, via Nomis'],
          ['National Heritage List entries inside the borough', '415: 8 Grade I, 23 Grade II*, 384 Grade II', 'Historic England data, counted 25 September 2026'],
          ['Services at Bromley South', 'Southeastern and Thameslink', 'TfL open data, checked 25 September 2026'],
          ['Pairs of maize plants in Darwin\'s table', '15', 'Darwin, 1876, Table 1/1, drawn up by Francis Galton']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Darwin\'s house', p: 'Down House is listed at Grade I. Historic England\'s entry records that Darwin occupied it from 1842 to 1882 and died there.' },
          { h3: 'Dinosaurs and a windmill', p: 'Also at Grade I: the prehistoric animal sculptures by the lower lake in Crystal Palace Park, and Keston Windmill, which the list entry says was built in 1716.' },
          { h3: 'Houses and a college', p: 'The rest of the Grade I list is Wickham Court, Holwood Mansion, Sundridge Park, Bromley College and its gateway.' }
        ] }
      ]
    },
    {
      id: 'table', tint: 'tint', eyebrow: 'The data',
      h2: 'Fifteen pairs of Zea mays, printed in 1876',
      intro: 'Darwin asked the statistician Francis Galton to examine his measurements, and Galton\'s report, with the maize table, appears in the book. Heights were recorded in inches and eighths of an inch.',
      body: [
        { kind: 'table', caption: 'Five of the fifteen pairs, heights in inches, as recorded by Darwin', head: ['Pair', 'Crossed plant', 'Self-fertilised plant', 'Crossed minus self'], rows: [
          ['1', '23 4/8', '17 3/8', '+6 1/8'],
          ['2', '12', '20 3/8', '-8 3/8'],
          ['7', '22 1/8', '18 5/8', '+3 4/8'],
          ['13', '22 1/8', '12 6/8', '+9 3/8'],
          ['15', '12', '18', '-6']
        ] },
        { kind: 'p', text: 'Across all fifteen pairs the crossed plants average 20.19 inches and the self-fertilised ones 17.58 inches, and the crossed plant is taller in 13 pairs out of 15. In his report Galton smoothed the figures and gave the ratio of heights as 100 to 84; from the raw numbers we get 100 to 87. The book says the seeds were sown on opposite sides of the same pots, so each pair shared soil, light and water. That design choice is what makes the pairs worth keeping together.' },
        { kind: 'p', text: 'We read the book in its public-domain Project Gutenberg text; printed copies from 1876 are held by the Internet Archive. Bromley\'s library branches are listed on its operator\'s website by a script our reader could not follow, so we do not name them here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Every possible outcome: 32,768 sign patterns',
      intro: 'Learners write an exact randomisation test, one of the purest ideas in statistics, in about ten lines of Python.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Suppose no effect', p: 'If crossing made no difference, then in each pair it was luck which plant grew taller. Each difference could just as well have had the opposite sign.' },
          { h3: '2. Try them all', p: 'Fifteen pairs, two signs each: 2 to the power 15 is 32,768 patterns. The program adds up the differences under every one of them.' },
          { h3: '3. Count the extremes', p: 'How many patterns give a total at least as large as Darwin\'s real one? That share is the chance of seeing his result if crossing did nothing.' }
        ] },
        { kind: 'table', caption: 'Four tests on the same fifteen pairs, run 25 September 2026', head: ['Test', 'What it uses', 'Chance of a result this strong with no real effect'], rows: [
          ['Exact sign-flip test', 'The size and sign of every difference', '863 of 32,768 one way, 2.6%; 5.3% counting both directions'],
          ['Sign test', 'Only whether the crossed plant won: 13 of 15', '0.37% one way'],
          ['Paired t-test', 'Differences, assuming a bell-shaped spread', '5.0% counting both directions'],
          ['Unpaired t-test', 'All heights, ignoring which pot they shared', '2.1% counting both directions']
        ] },
        { kind: 'p', text: 'The same data give answers from under half a per cent to over five per cent. The sign test looks strongest because it ignores the two pairs where the crossed plant lost badly, by over 8 inches and by 6. The unpaired test looks stronger than the paired one here, but it throws away the fact that each pair grew in the same pot, so it answers a question about a different experiment. The exact test uses everything and assumes nothing beyond "no effect means random signs", and it lands right on the edge of the conventional 5% line. A learner who sees this understands why a test must be chosen before looking at the results.' },
        { kind: 'callout', h3: 'Why an AI answer is not enough here', p: 'Give a chatbot these fifteen pairs and ask whether crossing helped. It may run whichever test is most common in its examples and report a tidy verdict. It will rarely point out that four reasonable tests disagree, that the choice should follow from how the plants were grown, or that dropping the two stunted 12-inch crossed plants would lift the average gap from 2.6 to 4.1 inches, which is tempting and wrong. Those judgements belong to the person, and they are what our learners practise.' }
      ]
    },
    {
      id: 'honest', tint: 'tint', eyebrow: 'Doing it fairly',
      h2: 'Three rules the maize table teaches',
      intro: 'The code is short. The discipline around it is the part that transfers to every subject.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Keep the design', p: 'Plants that shared a pot stay paired. Analyse the experiment that was actually run, not a simpler one that gives a nicer number.' },
          { h3: 'Choose first', p: 'Decide on the test before looking at results. Picking whichever of four tests looks most convincing afterwards is a way of fooling yourself.' },
          { h3: 'Keep awkward data', p: 'The two 12-inch crossed plants are inconvenient, not wrong. Removing them without a reason decided in advance changes the answer and the honesty of the work.' }
        ] },
        { kind: 'p', text: 'Pupils preparing for GCSE science can follow the fair-test ideas and the counting; sixth formers can go on to write the exact test and compare it with the t-test, which assumes a bell-shaped spread of differences. Darwin\'s measurements belong to history; the tests, counts and percentages on this page are our own work, run on 25 September 2026. None of Historic England, Bromley Council, TfL, the ONS, the Internet Archive or Project Gutenberg is linked to Modern Age Coders in any way.' }
      ]
    },
    {
      id: 'around', tint: '', eyebrow: 'Getting around',
      h2: 'From Bromley South to Biggin Hill, at home',
      intro: 'Bromley stretches from Penge in the north to Biggin Hill in the south. Our classes shrink that to the width of a screen.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Bromley South', p: 'TfL\'s open data lists Southeastern and Thameslink trains at Bromley South.' },
          { h3: 'Penge to Biggin Hill', p: 'Learners at opposite ends of the borough can sit in the same online class with no journey for either.' },
          { h3: 'Paired by level', p: 'Like Darwin\'s plants, our learners are grouped with like: five to ten at the same stage, at an agreed UK time.' }
        ] },
        { kind: 'spec', title: 'Bromley among the boroughs', p: 'Bromley is one of London\'s 32 boroughs. The <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a> names each of them and the City, and links every page as it goes up, including <a class="cg-inline-link" href="/coding-classes-in-croydon-london">Croydon</a> and <a class="cg-inline-link" href="/coding-classes-in-sutton-london">Sutton</a> to the west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a fair race to an exact test',
    intro: 'We place learners by what they do in the free lesson; a school year is a hint, not a rule.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair races', p: 'Children build games where two sprites race under the same rules and learn what makes a comparison fair.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Counting outcomes', p: 'Python loops that list every outcome of coin tosses and count the ones that match.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'Tests that match the design', p: 'Paired data, exact randomisation tests and t-tests compared honestly, excellent material for a science or maths project.', courses: ['python-complete-masterclass-teens', 'full-stack-web-development-teens-masterclass'] },
      { band: 'Ages 18 to 67', h3: 'Judging a trial', p: 'Adults learn to read a trial or experiment critically: the design, the test chosen, and what was left out.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI can run any statistical test instantly. Why should a Bromley teenager learn to write one?',
    intro: 'Because the danger is not a wrong calculation; it is the wrong question asked confidently.',
    p1: 'Statistical software, and now AI assistants, can produce a p-value from any dataset in a second. On Darwin\'s fifteen pairs they could produce four different ones, from 0.37% to 5.3%, all correctly calculated. Which is right depends on how the plants were grown and on a decision that should have been made before the data were seen. A person who has written the exact test by hand, counting all 32,768 patterns, knows what a p-value means and can tell when a tool has answered the wrong question.',
    p2: 'That understanding carries far beyond botany: medical trials, product experiments and exam research all depend on it. Learners come away knowing to respect the design, to fix the test in advance and to keep inconvenient data. Machines will keep calculating faster. Deciding what is worth calculating stays with people.',
    closer: 'Darwin checked his own conclusions by asking a statistician for help. A Bromley learner who can do that checking themselves carries on a very local tradition.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Beckenham to Orpington, every lesson live',
    intro: 'However far a learner is from central Bromley, the lesson is only a click away.',
    cells: [
      { h3: 'Home is the classroom', p: 'Learners take part from home with a laptop or desktop, headphones and a steady internet connection.' },
      { h3: 'Stages used in England', p: 'We describe progress in the Key Stages of English schools, from Key Stage 1 to sixth form, with GCSE and A level where they are relevant. Lessons are in English throughout.' },
      { h3: 'A free lesson first', p: 'Real teaching from a real teacher, never a sales pitch. By the end we can recommend a starting level and a course, and nobody asks for a card.' },
      { h3: 'Matched classmates', p: 'Each group gathers five to ten learners who have reached one stage, drawn from all over the UK and abroad, which keeps a sensible hour within reach.' },
      { h3: 'Twice a week', p: 'Most groups meet on two evenings a week, taking breaks for half terms, holidays and exams by agreement.' },
      { h3: 'Local times', p: 'Our teachers work from India, but every time we send you is written in UK time.' }
    ],
    spec: { title: 'A spread-out borough, one class', p: 'Around 330,000 people live in Bromley, yet a strong class still needs five learners at one level free at one hour, so our groups reach well beyond the borough.' }
  },

  fees: {
    h2: 'Fees for Bromley families',
    intro: 'A free first lesson, then a single monthly fee that does not change from Penge to Biggin Hill.',
    first: 'A full first lesson with a teacher at no charge, ending with our recommendation of level, course and time.',
    group: 'About eight live lessons a month in a class of five to ten at the same stage.',
    private: 'About eight live lessons a month, just the learner and the teacher.',
    closer: 'Families in Bromley pay in US dollars, as all families outside India do, and no pound prices appear on the site. Nothing is due until the free lesson has taken place and a course and weekly time are settled. The pricing page sets out how pauses, missed lessons and a move between class and one-to-one teaching work.'
  },

  reviewsH2: 'Google reviews from families, unedited',

  book: {
    h2: 'Arrange a free lesson',
    intro: 'Let us know the learner\'s age or year group and one thing they enjoy. We might start with a Scratch plant race, a Python count of coin tosses, or Darwin\'s maize test from this page.',
    success: 'Thank you. Your Bromley lesson request has arrived with our team.'
  },

  faq: {
    h2: 'Questions from Bromley families',
    intro: 'About the borough, the Darwin project and our lessons.',
    items: [
      { q: 'How many people live in Bromley?', a: 'At the 2021 Census Bromley had 329,992 usual residents. The figure is in ONS table TS001, which we read through the Nomis service.' },
      { q: 'Did Darwin really live in Bromley?', a: 'Yes. Historic England\'s list entry for Down House, at Downe in the borough, records that Charles Darwin occupied it from 1842 to 1882 and died there. The house is listed at Grade I.' },
      { q: 'Where do the maize measurements come from?', a: 'From Darwin\'s book The Effects of Cross and Self Fertilisation in the Vegetable Kingdom, published in 1876, in a table drawn up by Francis Galton. We used the public-domain Project Gutenberg text.' },
      { q: 'What is an exact sign-flip test?', a: 'A test that assumes no real effect, so each pair\'s difference could equally have been positive or negative, and then checks every possible pattern of signs. With 15 pairs that is 32,768 patterns; 863 of them give a total at least as large as Darwin\'s.' },
      { q: 'So did crossing make the plants taller?', a: 'The crossed plant was taller in 13 of 15 pairs, by 2.6 inches on average. The exact test puts the chance of a gap this large with no real effect at 2.6% one way or 5.3% counting both directions, so on this table alone the evidence is suggestive rather than overwhelming.' },
      { q: 'When would a Bromley learner have lessons?', a: 'Once the free lesson is done we offer a weekly slot in a class at the right level with a seat free. Teachers sit in India; the times in our messages are always Bromley times.' },
      { q: 'Which equipment is required?', a: 'Any laptop or desktop computer with sound through headphones or speakers, plus a steady connection. For the Darwin project, Python and fifteen pairs of numbers are all that is required.' },
      { q: 'Is there a Modern Age Coders centre in Bromley?', a: 'No. There is no Bromley centre and no premises anywhere in the UK, because every lesson is live online. A learner needs a computer with sound and a stable connection, and our phone number is Indian.', boiler: true },
      { q: 'What do coding classes in Bromley cost?', a: 'The first lesson is free. After that, a group place costs USD 100 a month for two live lessons a week, about eight a month, with five to ten learners, and one-to-one teaching on the same timetable costs USD 150 a month. Nothing is charged until the course, format and time are agreed.', boiler: true },
      { q: 'How are the groups made up?', a: 'By level, pace and goals rather than by age or neighbourhood, with five to ten learners at one stage. Where no group fits the learner\'s week, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore London',
    h2: 'Across London and the wider UK',
    html: 'Every borough and the City sit on the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>, each linked once its own page exists, from <a class="cg-inline-link" href="/coding-classes-in-sutton-london">Sutton</a> in the south to <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> in the north. Learners curious about statistics and prediction can continue with our <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-london">AI and machine learning classes for London</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> compares school stages across the four nations.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Bromley and London',
  footerPlaces: [
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-sutton-london', label: 'Sutton' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-brm .cg-hero-grid { align-items: end; gap: clamp(1.2rem, 3.5vw, 2.9rem); }
.cg-root.cg-brm .cg-hero h1 { font-weight: 760; letter-spacing: -0.016em; line-height: 1.03; }
.cg-root.cg-brm .cg-capsule { border-bottom: 2px dashed var(--cg-accent); padding-bottom: 1.1rem; }
.cg-root.cg-brm .cg-eyebrow { letter-spacing: 0.14em; font-weight: 650; text-transform: uppercase; }
.cg-root.cg-brm .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.014em; }
.cg-root.cg-brm .cg-grid-3 { gap: clamp(1rem, 2.8vw, 2rem); }
.cg-root.cg-brm .cg-table caption { font-weight: 700; letter-spacing: 0.012em; }
.cg-root.cg-brm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-brm .cg-table td:nth-child(3) { font-weight: 600; }
.cg-root.cg-brm .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.7rem; }
.cg-root.cg-brm .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Bromley. ONS Census 2021 TS001 via Nomis (NM_2021_1, E09000006): 329,992 usual residents (328,202 households, 1,790 communal). Historic England NHLE listed points inside the ONS LAD Dec 2024 BFC boundary, 25 September 2026: 415 (I 8, II* 23, II 384); Grade I 1038325 DOWN HOUSE, 1055809 WICKHAM COURT, 1064369 KESTON WINDMILL, 1064374 GATEWAY AT BROMLEY COLLEGE, 1067798 PREHISTORIC ANIMAL SCULPTURES, GEOLOGICAL FORMATIONS AND LEAD MINE ON ISLANDS AND ON LAND FACING THE LOWER LAKE (list entry address: CRYSTAL PALACE PARK SE19), 1281097 HOLWOOD MANSION, 1299044 SUNDRIDGE PARK, 1359324 BROMLEY COLLEGE. List entry 1038325 text: occupied by Charles Darwin from 1842-1882; Darwin died in the house on 19 April 1882. List entry 1064369: built in 1716. TfL Unified API StopPoint 910GBROMLYS (Bromley South), 25 September 2026: Southeastern, Thameslink. Bromley Council /libraries links to better.org.uk/library/london/bromley, whose branch list is script-rendered; not captured.',
    localProject: 'Darwin, The Effects of Cross and Self Fertilisation in the Vegetable Kingdom (Project Gutenberg eBook 4346, text read 25 September 2026; archive.org identifiers effectscrossand00darwgoog and b21723916 dated 1876). Table 1/1 Zea mays (young plants) (Mr. Galton), columns 2 and 3 "as recorded by Mr. Darwin", 15 pairs (inches): 23 4/8-17 3/8, 12-20 3/8, 21-20, 22-20, 19 1/8-18 3/8, 21 4/8-18 5/8, 22 1/8-18 5/8, 20 3/8-15 2/8, 18 2/8-16 4/8, 21 5/8-18, 23 2/8-16 2/8, 21-18, 22 1/8-12 6/8, 23-15 4/8, 12-18 (pot assignment ambiguous in the transcription; pairs as printed). Text line 526: seeds "sown on opposite sides of the same pots". Galton: "In Zea mays it is as 100 to 84" (revised means). Our results: crossed mean 20.192, self 17.575 (100 to 87.0); differences in eighths -67, -48, 6, 8, 14, 16, 23, 24, 28, 29, 41, 49, 56, 60, 75; mean 2.617 in, median 3.0, 13 of 15 positive. Exact sign-flip 2^15 = 32,768: 863 at least observed sum (0.0263), 1,726 |sum| (0.0527). Sign test binomial 13/15 one-sided 0.00369, two-sided 0.00739. Paired t 2.148, df 14, p 0.0497. Welch unpaired t 2.437, p 0.0214. Without the two 12-inch crossed plants mean difference 4.125 in. Lesson family: exact randomisation (sign-flip) test on paired data, pre-registration of the test; screened 25 September 2026 (Zea mays 0, sign-flip 0, Galton 0).',
    requiredMentions: [
      '329,992',
      'Down House',
      'Zea mays',
      '32,768',
      'Keston Windmill',
      'Wickham Court',
      'Holwood Mansion',
      'Sundridge Park',
      'Bromley College'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 (Nomis NM_2021_1), Bromley E09000006: 329,992 usual residents.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E09000006&measures=20100' },
      { claim: 'Darwin, The Effects of Cross and Self Fertilisation in the Vegetable Kingdom, Table 1/1 (Zea mays, Galton), public-domain text.', url: 'https://www.gutenberg.org/ebooks/4346' },
      { claim: 'Historic England list entry 1038325, Down House: occupied by Charles Darwin from 1842 to 1882.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1038325' },
      { claim: 'Historic England NHLE listed building points inside the ONS boundary of Bromley on 25 September 2026: 415 (8 I, 23 II*, 384 II).', url: 'https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer/0' },
      { claim: 'TfL Unified API, StopPoint 910GBROMLYS (Bromley South), 25 September 2026: Southeastern, Thameslink.', url: 'https://api.tfl.gov.uk/StopPoint/910GBROMLYS' }
    ],
    rejectedClaims: [
      'That Darwin grew this maize at Down House: the book does not say where these pots stood in the text we read, so the page links Darwin to Down House and to the book separately.',
      'Later famous re-analyses of this table by other statisticians: not read at a primary source for this build, so not attributed; all tests are presented as our own run.',
      'Bromley library branch list: script-rendered on the operator site and not captured; no libraries named.',
      'Biggin Hill airfield history and Crystal Palace history: not verified at a primary source for this build beyond the list entries used.',
      'Bromley schools and admissions: not read at their own sites and not used.',
      'Census ethnicity, religion or country of birth for Bromley: never a standout; used only to order the build.'
    ]
  }
};
