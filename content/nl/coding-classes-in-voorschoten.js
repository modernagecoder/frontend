'use strict';
// Voorschoten: a green village between Leiden and The Hague, with a castle in
// private hands since 1226 and a church that is the fourth on its site.
// 25,975 residents.
// Spine (modest, per the Phase 5 method): Duivenvoorde has been kept and
// altered for eight centuries; the Dorpskerk of 1868 replaced three earlier
// churches on the same spot. Software faces the same choice every year:
// improve what is there step by step, or tear it down and rebuild. Each has
// a place, and AI makes the rewrite dangerously easy.

module.exports = {
  slug: 'coding-classes-in-voorschoten',
  code: 'vsc',
  accent: '#74052F',
  accentRationale: 'Voorschoten: a deep castle-brick red placed by the solver more than twenty-six units from every page it links to, Leiden, The Hague and Leidschendam-Voorburg among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Voorschoten',
    eyebrow: 'Voorschoten, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Voorschoten, Netherlands',
  title: 'Coding Classes in Voorschoten | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Voorschoten, ages 6 to 67, from Starrenburg and Boschgeest to Noord-Hofland. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in Voorschoten, on a page about when to repair a program and when to rebuild it.',
  twitterDescription: 'Voorschoten classes for ages 6 to 67, taught live online, first lesson free.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Voorschoten Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Voorschoten, taught in English.'
  },

  h1: 'Coding classes in Voorschoten, where one castle was kept and one church was rebuilt four times',
  capsuleQ: 'What are the best coding classes in Voorschoten?',
  capsule: 'Voorschoten, 25,975 residents on 1 January 2026 in the national count, lies on the Vliet between Leiden and The Hague, where soil finds show a settlement as early as 2000 years before Christ. On its southern side stands Kasteel Duivenvoorde, in private ownership since 1226. In the village, the Dorpskerk completed in 1868 is the fourth church on its site. One building was kept and altered for eight centuries; the other was replaced three times. Programmers face that same choice constantly: improve the code that exists, one careful step at a time, or tear it down and write it again. Both are sometimes right, and AI has made the second option look far easier than it is. Classes are live, online and in English for ages 6 to 67; the first lesson is free, then a group place costs USD 100 a month and a private place USD 150.',
  lead: 'Every old building in Voorschoten carries a decision. Kasteel Duivenvoorde has been privately owned since 1226, adapted and repaired rather than replaced, so that what stands today still holds the choices of many earlier owners. The village church went the other way: the building completed in 1868 in the English neo-Gothic style is the fourth on its spot, each predecessor taken down to make room for the next. Software projects make the same decision under pressure. A tangled program can be improved in small steps, keeping it working throughout, a practice programmers call refactoring. Or it can be rewritten from scratch, which feels clean and fast and very often is neither, because old code is full of small fixes for problems nobody remembers, and a rewrite quietly throws them away. The skill is knowing which situation you are in, and making a rewrite safe when it really is the right call.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Voorschoten.',

  picks: {
    eyebrow: 'Course picks for Voorschoten',
    h2: 'Four courses for the village between Leiden and The Hague',
    intro: 'A child in the Bloemenwijk improving last month\'s game instead of starting again, a teenager in Starrenburg untangling an app that grew too fast, a student in Boschgeest deciding whether to rewrite a messy project, and an adult in Noord-Hofland whose team has been offered an AI-generated replacement for an old system. Each of them can begin with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Projects a child returns to and improves week by week, learning that good programs grow rather than restart.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps that are cleaned up in small, tested steps as they grow, so they never have to be thrown away.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Refactoring in Python with tests as a safety net, and a plan for the rare rewrite that is truly needed.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Deciding whether to repair or replace a spreadsheet, report or tool, with an eye on what the old one quietly handles.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Voorschoten today',
      h2: 'Four thousand years of settlement, a castle, a corridor of green',
      intro: 'Voorschoten is a single woonplaats and a single wijk, divided by the statistics office into 12 buurten: Noord-Hofland, Adegeest, Krimwijk, Dobbewijk, Nassauwijk, Vlietwijk, Centrum, Bloemenwijk, Bijdorp, Boschgeest, Starrenburg and the Buitengebied. Its 1,111 hectares of land and 45 of water hold a published 2,331 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'Kept, and rebuilt, in the encyclopaedia\'s account', head: ['Place', 'What the entry says', 'Kept or rebuilt'], rows: [
          ['Boschgeest', 'soil finds show a settlement here as early as 2000 years before Christ', 'a very old place, lived in again'],
          ['Kasteel Duivenvoorde', 'on the south side of Voorschoten, in private ownership since 1226', 'kept and adapted'],
          ['The Dorpskerk', 'completed in 1868 in the English neo-Gothic style, the fourth church on this site', 'rebuilt, three times over'],
          ['The Duivenvoordecorridor', 'on the south and west, part of the national ecological network, giving the municipality its green character', 'kept as open land']
        ] },
        { kind: 'p', text: 'The Vliet, the Rijn-Schiekanaal, forms a boundary of the municipality. Between Leiden to the north-east and The Hague to the south-west, Voorschoten keeps a village scale, with a population that has grown gently from 22,683 in 1995 to 25,975 today.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Repair or rebuild',
      h2: 'Two ways to deal with old code',
      intro: 'Neither column is always right. The table sets out what each approach keeps, what it risks and when it tends to be the better choice.',
      body: [
        { kind: 'table', caption: 'Refactoring and rewriting compared', head: ['Question', 'Improve step by step', 'Rewrite from scratch', 'In the village'], rows: [
          ['Does it keep working meanwhile?', 'yes, every step leaves a working program', 'no, the old one runs until the new one is ready, often for a long time', 'the castle stayed lived in while it was altered'],
          ['What happens to old fixes?', 'kept, because the code that holds them stays', 'at risk, because nobody remembers why many lines exist', 'each old church took its history with it'],
          ['How risky is each change?', 'small, and easy to undo', 'large, all arriving at once', 'one wing at a time, against a whole new building'],
          ['When is it the better choice?', 'almost always, while the structure can still carry the load', 'when the foundation itself cannot do what is now needed', 'the fourth church was built when the third would no longer serve'],
          ['What makes it safe?', 'tests written before each step', 'tests that capture what the old program really does, written first', 'knowing exactly what the old building did before pulling it down']
        ] },
        { kind: 'p', text: 'The last row matters most. Before either approach, careful programmers write tests that pin down what the existing program actually does, including its odd behaviours, because some of those oddities are fixes for real problems and some are bugs, and nobody can tell which without looking. With those tests in place, small improvements can be made confidently, and a rewrite, if it is truly needed, can be checked against the old behaviour case by case instead of trusted on sight. The castle and the church are both honest answers to the same question. The mistake is to tear down a building that only needed repair, or to keep patching one whose foundations have gone.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Voorschoten in the national statistics',
      intro: 'Figures published for the municipality with their years, the encyclopaedia history, and a note of every calculation the page makes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'People', p: '22,683 residents in 1995, 24,658 in 2013, 25,900 in 2025 and 25,975 on 1 January 2026. In 2025 there were 12,617 men and 13,283 women.' },
          { h3: 'Ages in 2026', p: '4,048 residents were under fifteen, 2,996 between fifteen and twenty-five, 5,348 between twenty-five and forty-five, 7,038 between forty-five and sixty-five, and 6,545 sixty-five or over.' },
          { h3: 'Households', p: 'In 2025 there were 11,518 households, averaging 2.2 people: 7,413 of more than one person, and 4,021 with children at home.' },
          { h3: 'Homes and incomes', p: '11,650 dwellings in 2025, 7,572 owner-occupied and 4,078 rented, at an estimated average value of 528,000 euro. Average income was 42,100 euro per resident and 51,600 per income recipient in 2024, and 2.1 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: 'The statistics list 8 primary establishments with 2,165 pupils in the municipality, and no secondary establishment. In 2025, 19,039 residents were of Dutch origin, 2,476 of European and 4,385 of non-European origin; 21,950 were born in the Netherlands and 3,950 abroad.' },
          { h3: 'Calculations', p: '25,975 minus 22,683 is 3,292. The age groups add to 25,975, and the origin groups, the birthplaces and the men and women each add to 25,900. The two tenure groups make 11,650.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no link with the municipality of Voorschoten, Kasteel Duivenvoorde, the Dorpskerk or any school in the area, and the page implies none. The statistics are those published for Voorschoten for the years stated. The early settlement, the castle, the church, the corridor, the Vliet and the wijken come from the encyclopaedia entry for Voorschoten, which gives 25,978 residents on 1 January 2026 and an area of 11.59 square kilometres, from a different source, not combined with the statistics.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Pin down what the old code does before you touch it',
      intro: 'The safest way to improve a program, or to replace one, starts with the same step: record exactly what it does now.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Capture current behaviour', p: 'Feed the existing program a wide range of inputs, including strange ones, and record every output as a test. These tests describe the program as it is, oddities included.' },
          { h3: '2. Improve in small steps', p: 'Rename, split and tidy one piece at a time, running the tests after every change. If a test fails, the step changed behaviour, and you decide whether that was a bug fix or a mistake.' },
          { h3: '3. Replace piece by piece', p: 'If a part must be rebuilt, build the new version beside the old one and move traffic over gradually, comparing results, rather than switching everything at once on a single day.' }
        ] },
        { kind: 'table', caption: 'What a rewrite can quietly lose', head: ['Hidden in the old code', 'Why it was there', 'What the rewrite may do', 'What catches it'], rows: [
          ['A strange special case for one customer', 'a real problem fixed years ago', 'drop it as clutter', 'a behaviour test recorded before the rewrite'],
          ['A rounding rule in a calculation', 'a legal or accounting requirement', 'use the obvious rule instead', 'comparing old and new outputs on real data'],
          ['A check for an empty field', 'a crash that once happened', 'leave it out as unnecessary', 'tests with empty and missing inputs'],
          ['A slow but careful step', 'a data problem it guards against', 'replace it with a fast, careless one', 'running old and new side by side'],
          ['A church\'s place in the village', 'centuries of use', 'begin again on the same site', 'knowing what the old building did']
        ] },
        { kind: 'callout', h3: 'Why AI makes rewriting tempting, and risky', p: 'AI assistants can produce a clean, modern version of an old module in seconds, and the result usually looks better than what it replaces. That is exactly the danger. The assistant sees the old code and writes something that does what the code appears to do, and appearances omit the special cases, workarounds and hard-won fixes that make old software reliable. A rewrite that took a team months used to be a serious decision; a rewrite that takes a minute is easy to accept without the checks it needs. The protection is the same as ever and now more important: before replacing anything, write tests that capture what the old program really does, run the new version against them, and move over in small steps with the old version still available. AI can then be a genuinely useful tool for refactoring, suggesting small improvements that the tests confirm. Voorschoten offers the two outcomes side by side, a castle kept since 1226 and a church in its fourth version, and the lesson of both is to know what you have before you decide what to do with it.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for changing code that already works',
      intro: 'For old programs, inherited spreadsheets, AI-suggested rewrites and anything that already does a job. Practised between a kept castle and a rebuilt church.',
      body: [
        { kind: 'table', caption: 'Improving without losing what works', head: ['Habit', 'In practice', 'What it avoids', 'What it gives'], rows: [
          ['Tests first', 'Record current behaviour as tests before any change', 'Silent loss of old fixes', 'A safety net for every step'],
          ['Small steps', 'Make one change at a time and run the tests', 'Big changes that are hard to undo', 'Progress you can trust'],
          ['Ask why before deleting', 'Find out why a strange line exists before removing it', 'Removing a fix mistaken for clutter', 'Knowledge kept'],
          ['Side by side', 'Run old and new versions together and compare outputs', 'Surprises on switch-over day', 'Evidence the new version matches'],
          ['Review AI rewrites', 'Treat a generated rewrite like any other big change', 'Clean-looking code that lost behaviour', 'Help from AI without new risk']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Last month\'s Scratch game, improved rather than restarted. The child fixes one thing at a time and plays the game after each change to check nothing else broke.' },
          { h3: 'For teenagers', p: 'A messy Python program given to them with its quirks. The teenager writes tests of what it does, tidies it step by step, and explains which quirk turned out to be a hidden fix.' },
          { h3: 'For adults', p: 'An old spreadsheet or tool at work compared with an AI-generated replacement on real data. Adults usually find at least one case the old one handled and the new one does not.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of Kasteel Duivenvoorde and the Dorpskerk as images, together with standard practice in software maintenance. It says nothing about how either building was altered or why earlier churches were replaced.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From improving last month\'s game to judging an AI rewrite',
    intro: 'The free lesson is where each learner\'s level is set, by watching how they handle a real task. Age alone does not set it, and neither does which buurt they live in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Improve, do not restart', p: 'Children fix one thing at a time in a game they already built.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Tests as a net', p: 'Learners write tests before changing a small Python program.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Tidy a tangle', p: 'Teenagers refactor a messy program step by step and find its hidden fixes.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Repair or replace', p: 'Adults judge whether to rebuild a tool, and test any rewrite first.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can rewrite an old program in a minute. Why should a teenager in Voorschoten ask what the old one was doing?',
    intro: 'Because a village with a castle kept since 1226 and a church in its fourth version shows that keeping and rebuilding are both choices, with different costs.',
    p1: 'AI assistants have made rewriting code almost effortless. Paste in an old module and ask for a cleaner version, and a tidy replacement appears. What the assistant cannot see is the history: the special case added after a customer complaint, the rounding rule required by an auditor, the check added after a crash years ago. Those look like clutter, and a rewrite based on appearances tends to remove them. The new code passes a quick look and fails on the day one of those old situations comes back.',
    p2: 'A learner who has written tests for a messy program before tidying it, and watched one strange line turn out to be the only thing preventing a crash, will never again accept a rewrite without asking what the old code did. Deciding whether to repair or replace, capturing current behaviour first and moving over in small steps are judgements a person makes. The assistant can produce the new code. Knowing what must survive the change is a human task.',
    closer: 'So the case for a child in Voorschoten learning to code in 2026 is not the castle or the church. It is that someone who knows when to repair and when to rebuild, and how to make either safe, will be needed wherever AI makes it effortless to replace code that took years to get right.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A class for every buurt of Voorschoten',
    intro: 'From the Vlietwijk by the canal to Boschgeest and the green south, the village is compact, and a lesson that starts at home is equally close to all of it.',
    cells: [
      { h3: 'A short walk to nowhere', p: 'A learner in Adegeest and a learner in Dobbewijk begin the lesson together, each at home. Nobody bikes to Leiden or The Hague for it, and nobody waits to be collected.' },
      { h3: 'Dutch school labels kept', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze are used as Voorschoten families know them, while the teaching is in English.' },
      { h3: 'The first hour costs nothing', p: 'It is a full lesson on a real task. The teacher then recommends a level, a course and a weekly time, and no payment details are asked for.' },
      { h3: 'Classmates at your stage', p: 'Five to ten learners at the same point in the same subject. Voorschoten has 4,048 residents under fifteen, too few to fill every stage and hour locally, so groups include learners from other places.' },
      { h3: 'Regio Midden weeks off', p: 'Twice a week, around eight lessons a month, at one set hour, pausing for the regio Midden holidays that Zuid-Holland schools keep.' },
      { h3: 'Time in India, evenings here', p: 'The teachers are three and a half hours ahead of Voorschoten in summer and four and a half in winter, so late afternoons, evenings and weekend mornings are all open.' }
    ],
    spec: { title: 'Eight primary schools, a village scale, and one group online', p: 'Voorschoten has 8 primary establishments teaching 2,165 pupils. A coding group needs five learners who match on subject, stage and hour, and in a village of this size they are found far more easily across every age from 6 to 67 and many countries than close to home.' }
  },

  fees: {
    h2: 'What Voorschoten families pay',
    intro: 'The whole price, in three lines.',
    first: 'A genuine lesson on a genuine task, finishing with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one teacher for one learner.',
    closer: 'The dollar fee is the same in every country and there is no euro list, so a household in Krimwijk pays what a household in Starrenburg pays. Nothing is charged until the free lesson has fixed a course and a time, and payment is then arranged on WhatsApp. The pricing page explains pauses, changes of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, shown as written',

  book: {
    h2: 'How far has the learner got?',
    intro: 'The first task might be improving a game one change at a time, writing tests before tidying a small program, or checking an AI rewrite against what the old code really did.',
    success: 'Thank you. Your Voorschoten class request has been sent.'
  },

  faq: {
    h2: 'Voorschoten coding class questions',
    intro: 'The village, its castle and church, its figures, and the lessons.',
    items: [
      { q: 'Which buurten does Voorschoten have?', a: 'The statistics office divides the single wijk of Voorschoten into 12 buurten: Noord-Hofland, Adegeest, Krimwijk, Dobbewijk, Nassauwijk, Vlietwijk, Centrum, Bloemenwijk, Bijdorp, Boschgeest, Starrenburg and the Buitengebied.' },
      { q: 'How many people live in Voorschoten?', a: 'The national count was 25,975 on 1 January 2026, in 11,518 households in 2025. In 1995 it was 22,683.' },
      { q: 'How old is Voorschoten?', a: 'Soil finds show a settlement at the site of the present Boschgeest as early as 2000 years before Christ, according to the encyclopaedia.' },
      { q: 'What is Kasteel Duivenvoorde?', a: 'A castle on the south side of Voorschoten that has been privately owned since 1226. The green Duivenvoordecorridor on the south and west of the municipality is part of the national ecological network.' },
      { q: 'How old is the Dorpskerk?', a: 'The present church was completed in 1868 in the English neo-Gothic style and is the fourth church on its site, the encyclopaedia records.' },
      { q: 'How many schools are there in Voorschoten?', a: 'The statistics count 8 primary establishments teaching 2,165 pupils in the municipality and list no secondary establishment. This page rates no school.' },
      { q: 'Are the lessons in English, and when are they?', a: 'Lessons are in English, with Dutch school words such as brugklas, havo and vwo left untranslated. The teachers work from India, three and a half hours ahead of Voorschoten in summer and four and a half in winter, so late-afternoon, evening and weekend slots are easy to arrange. The slot is agreed in the free lesson, and regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Voorschoten?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Voorschoten coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Leiden region and beyond',
    h2: 'Up the Vliet to Leiden, down it to The Hague, and back to the hub',
    html: 'North-east along the Vliet, <a class="cg-inline-link" href="/coding-classes-in-leiden">coding classes in Leiden</a> covers the university city, and to the south-west lies <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>, with <a class="cg-inline-link" href="/coding-classes-in-leidschendam-voorburg">Leidschendam-Voorburg</a> in between. The whole province is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and every page in the series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Reach us on WhatsApp'
  },

  footerHeading: 'Voorschoten, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-leiden', label: 'Leiden' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-vsc .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 2.7vw, 2.2rem); }
.cg-root.cg-vsc .cg-hero h1 { font-weight: 660; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-vsc .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-vsc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-vsc .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.017em; }
.cg-root.cg-vsc .cg-grid-3 { gap: clamp(0.95rem, 2.2vw, 1.75rem); }
.cg-root.cg-vsc .cg-card { border-radius: 4px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-vsc .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-vsc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vsc .cg-table td:nth-child(4) { font-weight: 600; }
.cg-root.cg-vsc .cg-ladder-col { border-top: 2px solid var(--cg-accent-soft); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Voorschoten, Zuid-Holland: 25,975 residents (statistics, 1 January 2026), 25,900 (2025), 24,658 (2013), 22,683 (1995); 12,617 men and 13,283 women (2025); ages (2026) 4,048 under fifteen, 2,996 fifteen to twenty-five, 5,348 twenty-five to forty-five, 7,038 forty-five to sixty-five, 6,545 sixty-five or over; 11,518 households (2025) averaging 2.2, 7,413 multi-person, 4,021 with children; 1,156 hectares, 1,111 land, 45 water, published density 2,331; 11,650 dwellings (2025), 7,572 owner-occupied at 65 percent, 4,078 rented at 35 percent; estimated average value 528,000 euro; income 42,100 euro per resident and 51,600 per recipient (2024); 2.1 percent in poverty; origin (2025) 19,039 Dutch, 2,476 European, 4,385 non-European, 21,950 born in the Netherlands and 3,950 abroad; 1 woonplaats, 1 wijk, 12 buurten (Noord-Hofland, Adegeest, Krimwijk, Dobbewijk, Nassauwijk, Vlietwijk, Centrum, Bloemenwijk, Bijdorp, Boschgeest, Buitengebied, Starrenburg); 8 primary establishments with 2,165 pupils; no secondary establishment listed. Encyclopaedia: soil finds show a settlement near present Boschgeest as early as 2000 years before Christ; Kasteel Duivenvoorde on the south side, privately owned since 1226; the Duivenvoordecorridor on the south and west, part of the national ecological network, giving a green character; the present church completed in 1868 in English neo-Gothic style, the fourth on its site; the Rijn-Schiekanaal (the Vliet) as a boundary; 25,978 residents on 1 January 2026 and 11.59 square kilometres, not combined with the statistics. Regio Midden holidays. The city page teaches refactoring versus rewriting.',
    localProject: 'Know what you have before you decide to keep or rebuild it. Kasteel Duivenvoorde in Voorschoten has been privately owned since 1226, adapted rather than replaced, while the Dorpskerk completed in 1868 is the fourth church on its site; the page uses the two as images for the software choice between refactoring in small tested steps and rewriting from scratch. A comparison table sets out that step-by-step improvement keeps the program working and preserves old fixes, while a rewrite risks losing special cases, rounding rules and crash guards nobody remembers, and is right mainly when the foundation cannot carry what is now needed. The defences are characterisation tests capturing current behaviour first, small steps with tests run after each, asking why before deleting a strange line, running old and new side by side, and reviewing AI-generated rewrites like any large change, since AI makes rewriting effortless and appearances omit hidden fixes. Chosen after a case-sensitive check found no page using refactoring or rewrite in this sense (Scheveningen mentions refactor in passing). The page says nothing about how either building was altered. Distinct from Hilversum, which concerns whether stored files stay readable, from Bergen op Zoom, which concerns what passing tests prove, and from Amsterdam-West, which concerns when an identifier should stay the same.',
    requiredMentions: [
      '22,683',
      '24,658',
      '11,518',
      '4,021',
      '11,650',
      '4,078',
      '2,996',
      '7,038',
      'Duivenvoorde',
      'Duivenvoordecorridor',
      'Boschgeest',
      'Starrenburg',
      'Noord-Hofland',
      'Krimwijk'
    ],
    sources: [
      { claim: 'Gemeente Voorschoten: 25,975 inwoners (2026), 25,900 (2025), 24,658 (2013), 22,683 (1995); mannen 12,617, vrouwen 13,283 (2025); ages 0-15 4,048, 15-25 2,996, 25-45 5,348, 45-65 7,038, 65+ 6,545 (2026); 11,518 huishoudens, 4,105 eenpersoons, 7,413 meerpersoons, 4,021 met kinderen, gemiddeld 2.2 (2025); 1,156 hectare, land 1,111, water 45; bevolkingsdichtheid 2,331; woningvoorraad 11,650, koop 7,572 (65 percent), huur 4,078 (35 percent) (2025); gemiddelde WOZ 528,000 euro; gemiddeld inkomen per inwoner 42,100 and per inkomensontvanger 51,600 euro (2024); personen in armoede 2.1 percent; basisonderwijs 8 vestigingen 2,165 leerlingen, voortgezet onderwijs 0; geboren in Nederland 21,950, buiten Nederland 3,950, herkomst Nederland 19,039, Europa 2,476, buiten Europa 4,385 (2025); 1 woonplaats, 1 wijk, 12 buurten (Noord-Hofland, Adegeest, Krimwijk, Dobbewijk, Nassauwijk, Vlietwijk, Centrum, Bloemenwijk, Bijdorp, Boschgeest, Buitengebied, Starrenburg).', url: 'https://allecijfers.nl/gemeente/voorschoten/' },
      { claim: 'Voorschoten (encyclopaedia): Bodemvondsten tonen aan dat reeds 2000 jaar voor Christus, ter hoogte van de huidige Voorschotense wijk Boschgeest, een nederzetting bestond. Aan de zuidkant van Voorschoten ligt het kasteel Duivenvoorde dat sinds 1226 particulier bezit is. De gemeente heeft een groen karakter, vooral aan de zuid- en westkant, waar de Duivenvoordecorridor een onderdeel is van de ecologische hoofdstructuur. In 1868 werd de huidige kerk, de vierde op deze plaats, in Engels Neogotische stijl opgeleverd. Het Rijn-Schiekanaal (de Vliet) as a boundary. 25.978 inwoners (peildatum 1 januari 2026, bron: CBS) en een oppervlakte van 11,59 vierkante kilometer.', url: 'https://nl.wikipedia.org/wiki/Voorschoten' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Who has owned Kasteel Duivenvoorde, or how it was altered over the centuries. The source says only that it has been in private ownership since 1226.',
      'Why the earlier churches were replaced. The source says only that the 1868 church is the fourth on its site.',
      'Any reading of the absence of a secondary establishment, or where Voorschoten pupils go to secondary school. Reading a zero from missing institutions is the Westland argument.',
      'Higher-education student counts. The row read gave identical HBO and WO figures that look unreliable, so neither is used.',
      'Any comparison of the encyclopaedia figure of 25,978 with the statistics figure of 25,975. Two sources that disagree is the Breda argument.',
      'Anything the Leiden, The Hague, Leidschendam-Voorburg and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
