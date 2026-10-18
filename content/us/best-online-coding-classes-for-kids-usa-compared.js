'use strict';
// Online coding classes for kids in the USA, compared (ag- comparison door; US cluster Phase 3, row 61).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Every competitor fact read raw on each provider's own site on
// 17 October 2026 (copies in keyword-research-2026-09/us/src/<provider>-alternative/ and this slug's folder). No prices
// printed (US gate; and the brief allows only prices published by the provider, which we chose not to repeat).
//  - CodeWizardsHQ (codewizardshq.com home): programs Elementary (Ages 7-10), Middle (Ages 11-13), High School (Ages
//    14-18); "live, instructor-led sessions with just 4-6 students per class" (en dash on site); "not pre-recorded videos
//    or self-paced tutorials"; "spending 90% of class time coding"; "100% of our instructors are based in the United
//    States"; "We record all classes"; daily homework help; 1-on-1 office hours "In advanced courses"; "100% Money-Back
//    Guarantee for the first four sessions", "Does not apply to summer camps"; "10+ YEARS OF TEACHING EXCLUSIVELY ONLINE".
//  - Create & Learn (create-learn.us home, about, private page): "Live Online Small-Group Classes"; "just 3-5 students per
//    class"; grades K-2 to 9-12; "6 free intro classes on diverse topics"; "100% Satisfaction Guarantee"; "Less than 5% of
//    teacher candidates are selected"; about: "100% US Based", founded 2017, headquartered in Palo Alto; private classes
//    page: instructors "US-based, background checked".
//  - iD Tech (idtech.com home, /tutoring, /virtual, private lessons pack): founded 1999; serves ages 7-19; summer camps
//    7-17 at "75+ universities"; teen academies 13-18, two weeks; private lessons "live, 1-on-1 online lessons for kids and
//    teens ages 7-19", "60-minute", over Zoom, "1, 4, 8, or 12 lessons per month", "50+ topics"; virtual camps ages 7-17,
//    "1 week, daily for 2 hours", "Small-group"; "100% USA-based adult instructors".
//  - CodaKid (codakid.com home, FAQ, private, camps): "Ages 6 to 18"; "115+ self-study courses"; "24/7 AI-powered learning
//    support"; private "Live 50-minute lessons over Zoom"; camps "One week. Two hours a day.", "A video recording of every
//    session"; self-study "14 day free trial"; private "a free session to every new family"; based in Scottsdale, Arizona.
//  - Coding with Kids (codingwithkids.com llms.txt, about-our-programs): "students ages 5-18"; "Live instruction only; not
//    self-paced video courses"; online and in person; group "Once per week (approximately 1 hour 15 minutes)"; private
//    "Once per week (50 minutes)", "One-on-one or small private group"; camps "Typically 5 days"; operating "since 2014",
//    "900+ schools".
//  - Modern Age Coders: scripts/brand-facts.json (ages 6 to 67; groups 15 to 20, mini batch up to 6, 1:1; founded 2020).
// Our own material, labelled: the criteria list, the trial checklist, the weighted-score method and the Python example on
// three made-up options (Option A 5 of 7, B 1 of 7, C 4 of 7), deliberately not real companies.
// Lesson family: weighted scoring (a sum of weight times value) for a decision.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPARISON', blurb: 'Six online coding class providers for US kids side by side: format, ages, group size and trials, from each provider&rsquo;s own site.' },
  slug: 'best-online-coding-classes-for-kids-usa-compared',
  code: 'bkuc',
  accent: '#2C3385',
  accentRationale: 'Online coding classes compared: a steady comparison blue, #2C3385 as allocated, distinct from the data-page accents and strong on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Online coding classes for kids, compared',
  title: 'Online Coding Classes for Kids in the USA, Compared (2026)',
  description: 'Six online coding class providers for US kids compared on format, ages, group size, teachers and trials, using facts from each provider site, read October 2026.',
  ogDescription: 'CodeWizardsHQ, Create & Learn, iD Tech, CodaKid, Coding with Kids and Modern Age Coders, side by side on the facts each publishes. No rankings: criteria, dates and a way to decide.',
  twitterDescription: 'Six US online coding class providers for kids, compared on their own published facts.',
  pageName: 'Online Coding Classes for Kids in the USA, Compared',
  webPageDescription: 'A neutral comparison of online coding class providers for US children and teens, built from facts on each provider&rsquo;s own website read on 17 October 2026, with a method for choosing.',
  courseDescription: 'Live online coding classes for US children and teens aged 6 to 18, in batches, mini batches or one to one, from Modern Age Coders.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Online coding classes compared',
  navLinks: [
    { href: '#compare', label: 'Side by side' },
    { href: '#teaching', label: 'Live or self-paced' },
    { href: '#trials', label: 'Trials' },
    { href: '#decide', label: 'How to decide' },
    { href: '#score', label: 'Score it' },
    { href: '#fees', label: 'Our fees' }
  ],
  eyebrow: 'United States &middot; Ages 5 to 18 &middot; Facts read 17 October 2026',
  h1: 'The best online coding classes for kids in the USA, compared',
  lede: 'There is no single best online coding class for every child, and any page that names one without asking about your child is selling something. This comparison puts six providers that teach US kids side by side, using only what each one publishes on its own website, read on 17 October 2026: how they teach, which ages they take, how big the groups are, who the teachers are and what a trial looks like. We are one of the six, so we have kept our own row to the same plain facts and left the choosing to you.',
  secondaryCta: { href: '#compare', label: 'See the comparison table' },
  wa: 'Hello Modern Age Coders, I am comparing online coding classes for my child in the US. Could we book a free first lesson?',
  heroNote: 'Facts from each provider&rsquo;s own site &middot; read 17 October 2026 &middot; no rankings',
  spec: [
    ['Providers compared', 'Six'],
    ['Facts from', 'Each provider&rsquo;s own site'],
    ['Read on', '17 October 2026'],
    ['Prices', 'Not compared here'],
    ['Our classes', 'Live, ages 6 to 18 and up'],
    ['Our formats', 'Batch, mini batch or 1-on-1'],
    ['Timing', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The main US online coding class options differ most in format. CodeWizardsHQ runs live classes of four to six students; Create & Learn runs live groups of three to five; iD Tech offers live 1-on-1 lessons and week-long camps; CodaKid centres on self-paced video courses plus 1-on-1 lessons; Coding with Kids teaches live online and in person. Modern Age Coders teaches live online in batches of 15 to 20, mini batches of up to 6, or 1-on-1.',

  picks: {
    eyebrow: 'Our own starting points',
    h2: 'If you want to try us: three first courses',
    lede: 'Our three most common first courses for US families, by age. Each one starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'BKUC / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Scratch to games, apps and AI.' },
      { course: 'python-ai-kids-masterclass', code: 'BKUC / 02', title: 'Python and AI for kids', note: 'Upper elementary and middle school. The first typed language.' },
      { course: 'python-complete-masterclass-teens', code: 'BKUC / 03', title: 'Python for teens', note: 'Ages 13 to 18. Real projects, beginner to advanced.' }
    ]
  },

  sections: [
    {
      id: 'compare', tint: 'tint', eyebrow: 'Side by side',
      h2: 'Six providers on four facts that shape a child&rsquo;s week',
      lede: 'Format, ages and published group size, as each provider states them. Where a provider does not publish a number, the table says so instead of estimating.',
      body: [
        { kind: 'table', caption: 'Online coding class providers for US kids, from each provider&rsquo;s own website (read 17 October 2026)', head: ['Provider', 'Main formats', 'Ages', 'Group size published'], rows: [
          ['CodeWizardsHQ', 'Live online classes in a year-by-year track; summer camps', '7 to 18', 'Four to six students per class'],
          ['Create &amp; Learn', 'Live online small groups; private classes', 'Grades K to 12', 'Three to five students per class'],
          ['iD Tech', 'Live 1-on-1 online lessons; virtual and on-campus summer camps', '7 to 19', 'Virtual camps "small-group"; no number found'],
          ['CodaKid', 'Self-paced video courses; live 1-on-1 lessons; live camps', '6 to 18', 'Camps in "small groups"; no number found'],
          ['Coding with Kids', 'Live classes online and in person; private classes; camps', '5 to 18', '"Small class sizes"; no number found'],
          ['Modern Age Coders', 'Live online batches, mini batches and 1-on-1', '6 to 67', '15 to 20, mini batches up to 6, or 1-on-1']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.codewizardshq.com/" rel="noopener" target="_blank">codewizardshq.com</a>, <a class="ag-inline-link" href="https://www.create-learn.us/" rel="noopener" target="_blank">create-learn.us</a>, <a class="ag-inline-link" href="https://www.idtech.com/" rel="noopener" target="_blank">idtech.com</a>, <a class="ag-inline-link" href="https://codakid.com/" rel="noopener" target="_blank">codakid.com</a>, <a class="ag-inline-link" href="https://www.codingwithkids.com/about-our-programs" rel="noopener" target="_blank">codingwithkids.com</a>, each read on 17 October 2026. Providers change their programs often; check the provider&rsquo;s site before you decide. Modern Age Coders is not connected with any of the other five.' },
        { kind: 'two', mt: true,
          leftH3: 'What the table already tells you',
          left: [
            'The six are not really the same product. Two are built around small live groups, one around private lessons and summer camps, one around self-paced video, one mixes online with in-person classes, and one around larger live batches with smaller and private options.',
            'So the first question is not "which is best" but "which format suits my child": a group to learn alongside, a private teacher, or the freedom to work at any hour.'
          ],
          rightH3: 'What it cannot tell you',
          right: [
            'Group size on paper is not attention in practice. A class of five with a distracted teacher can give less help than a class of fifteen with a sharp one, and the reverse is just as possible.',
            'Use the table to shortlist, then use a trial lesson to judge. The trials section below sets out what each provider publishes about trying first.'
          ] }
      ]
    },
    {
      id: 'teaching', tint: 'deep', eyebrow: 'Live or self-paced',
      h2: 'Who teaches, for how long, and what happens when you miss a class',
      lede: 'The details that decide how a week actually feels, again from each provider&rsquo;s own pages.',
      body: [
        { kind: 'table', caption: 'Teaching model by provider, from their own sites (read 17 October 2026)', head: ['Provider', 'Live or self-paced', 'Session length stated', 'Teachers, as described'], rows: [
          ['CodeWizardsHQ', 'Live; all classes recorded for review', 'Four sessions equal four hours of live instruction', 'All based in the United States'],
          ['Create &amp; Learn', 'Live', 'Intro sessions are one hour', 'US-based; under 5% of candidates selected'],
          ['iD Tech', 'Live lessons and camps', 'Lessons 60 minutes; virtual camps 2 hours a day for a week', 'USA-based adult instructors'],
          ['CodaKid', 'Mainly self-paced video; live 1-on-1 and camps', 'Private lessons 50 minutes; camps 2 hours a day', 'Certified instructors from top universities'],
          ['Coding with Kids', 'Live only', 'Group about 75 minutes weekly; private 50 minutes', 'Selected, trained and coached; location not stated'],
          ['Modern Age Coders', 'Live only', 'Regular live classes each week', 'Our own teachers, teaching live from India']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Live teaching',
          left: [
            'Five of the six are mainly live. CodeWizardsHQ says students spend 90% of class time coding, and that its classes are not pre-recorded videos or self-paced tutorials. Coding with Kids says its instruction is live only.',
            'A live class gives a child someone to ask at the moment they are stuck, and a fixed time that keeps the habit going. The cost is less flexibility: the class happens when it happens.'
          ],
          rightH3: 'Self-paced learning',
          right: [
            'CodaKid&rsquo;s main program is the opposite model: more than 115 self-study courses with video lessons, 24/7 AI-powered learning support and scheduled sessions with a real teacher. A child can work at midnight or for ten minutes before school.',
            'Self-paced suits a self-starting child and a busy calendar. It asks more of the child&rsquo;s own motivation, which is worth being honest about before you subscribe.'
          ] },
        { kind: 'p', mt: true, html: 'A note on teachers: three providers stress that their instructors are based in the United States. Ours are not; our teachers work live from India and schedule around US school days and time zones. Whether that matters is a family choice, and a free first lesson is the simplest way to judge a teacher for yourself.' }
      ]
    },
    {
      id: 'trials', tint: 'tint', eyebrow: 'Trying first',
      h2: 'What each provider publishes about trials and guarantees',
      lede: 'Every provider offers some way to test before committing, but the terms differ a lot. Read the full policy on each site; these are summaries.',
      body: [
        { kind: 'table', caption: 'Trial and guarantee terms as published (read 17 October 2026)', head: ['Provider', 'Published trial or guarantee'], rows: [
          ['CodeWizardsHQ', 'A money-back guarantee covering the first four sessions instead of a free trial class; does not apply to summer camps'],
          ['Create &amp; Learn', 'Free intro classes on a range of topics, and a satisfaction guarantee with a full refund'],
          ['iD Tech', 'A paid, commitment-free Discovery Lesson for private lessons; camp cancellations at no cost up to 72 hours before the start'],
          ['CodaKid', 'A 14-day free trial of the self-paced courses; the first private session free for new families'],
          ['Coding with Kids', 'A Welcome Class before joining a group; cancel before the next payment'],
          ['Modern Age Coders', 'A free first lesson with no card details']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Book the trial in the format you would actually buy.</b> A free group intro tells you little about private lessons, and the other way round.',
          '<b>Watch, do not just listen.</b> Sit nearby for the first ten minutes and notice whether your child is writing code or watching someone else do it.',
          '<b>Count the questions.</b> After the trial, ask your child how many times they asked for help and what happened.',
          '<b>Ask what happens next.</b> What level would they start at, how is progress reported, and what if a class is missed?',
          '<b>Read the renewal terms.</b> Note when a card is first charged and how to cancel, before you give it.'
        ] }
      ]
    },
    {
      id: 'decide', tint: 'deep', eyebrow: 'How to decide',
      h2: 'Five questions that narrow six providers to one or two',
      lede: 'Our own list. Answer them before you look at any marketing, and the shortlist usually writes itself.',
      body: [
        { kind: 'table', caption: 'Questions that point to a format (ours)', head: ['If the honest answer is...', 'Look first at...'], rows: [
          ['My child needs a person to ask, often', 'Live small groups or 1-on-1'],
          ['Our week is unpredictable', 'Self-paced courses, or 1-on-1 booked week by week'],
          ['We want a classroom near home', 'Providers with in-person locations in your area'],
          ['We only want summer', 'Week-long camps, online or on campus'],
          ['We want years of steady progress', 'A level-based track with weekly classes']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ages 5 to 8', p: 'Short sessions, blocks and a patient adult nearby. Check the provider&rsquo;s lowest age; it ranges from 5 to 7 across the six.' },
          { h3: 'Ages 9 to 12', p: 'The move from blocks to typed code. Ask when each provider introduces Python or JavaScript.' },
          { h3: 'Ages 13 to 18', p: 'Look for real languages, AP preparation and projects worth showing. Several providers run AP CS tracks.' }
        ] },
        { kind: 'p', mt: true, html: 'One more honest point: siblings and friends change the answer. A shared group class can work well for two children of similar level; a private teacher can split time between siblings who are not. Ask each provider how they handle it.' }
      ]
    },
    {
      id: 'score', tint: 'tint', eyebrow: 'Score it yourself',
      h2: 'A weighted score in Python, on made-up options',
      lede: 'Our worked example of a simple decision method. It uses three invented options, not real companies, because the weights are yours to set, not ours.',
      body: [
        { kind: 'code', label: 'score_options.py (our example)', lang: 'Python 3', code: '# What one family cares about, from 0 (not at all) to 3 (a lot): our example\nweights = {"live teacher": 3, "small group": 2, "one to one": 1,\n           "in person": 0, "work any time": 1}\n\n# 1 if an option offers it, 0 if not: three made-up options, not real companies\noptions = {\n    "Option A": {"live teacher": 1, "small group": 1, "one to one": 0, "in person": 0, "work any time": 0},\n    "Option B": {"live teacher": 0, "small group": 0, "one to one": 0, "in person": 0, "work any time": 1},\n    "Option C": {"live teacher": 1, "small group": 0, "one to one": 1, "in person": 1, "work any time": 0},\n}\n\nfor name, has in options.items():\n    score = sum(weights[c] * has[c] for c in weights)\n    print(name, score, "of", sum(weights.values()))', note: 'Output: Option A 5 of 7, Option B 1 of 7, Option C 4 of 7. Option C offers the most features but scores lower than A, because this family gave "in person" a weight of zero.' },
        { kind: 'two', mt: true,
          leftH3: 'Why the method works',
          left: [
            'Each criterion is multiplied by how much you care about it, then added up. Something an option offers but you do not value adds nothing, which stops a long feature list from looking better than it is.',
            'It is the same idea as a weighted grade: homework worth 20%, tests worth 50%. Children who have met weighted averages in school can follow it line by line.'
          ],
          rightH3: 'Try it with your own facts',
          right: [
            'Copy the facts from the tables above into the <code>options</code> dictionary, set your own weights, and run it. Then change one weight and see whether the answer moves.',
            'If the top two are close, the method has done its job: it has told you to let the trial lessons decide.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your child is',
    h2: 'Match the format to the stage, not to the brand',
    lede: 'The same child often needs different formats at different stages.',
    table: { caption: 'Stage and the format that tends to fit (ours)', head: ['Stage', 'Format that often fits'], rows: [
      ['1. Curious, never coded', 'A short live group or a free intro to see if it sticks'],
      ['2. Hooked on blocks', 'Weekly live classes with a steady teacher'],
      ['3. Ready for typed code', 'Small groups or 1-on-1 for the hard switch'],
      ['4. Independent builder', 'Projects, camps, self-paced depth or AP prep']
    ] },
    left: { h3: 'For parents', ps: [
      'Switching format is not failure. Many children start in a group and move to private lessons for one hard term, or the other way round.',
      'Keep the projects your child makes; they travel between providers.'
    ] },
    right: { h3: 'For kids', ps: [
      'Tell your parents honestly whether you liked the class or just the game you made in it. Both answers are useful.',
      'If you are stuck more than you are building, ask for a different format.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our catalogue',
    h2: 'Nine Modern Age Coders courses for US kids and teens',
    lede: 'So you can compare our syllabuses with the others directly. All live online, in groups, mini batches or privately.',
    bands: [
      { num: 'I', h3: 'Younger kids', sub: 'Ages 6 to 10', courses: [
        { code: 'BKUC / Y / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games in blocks, from zero.' },
        { code: 'BKUC / Y / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code inside a game they know.' },
        { code: 'BKUC / Y / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding', blurb: 'Luau in Roblox Studio.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 10 to 13', courses: [
        { code: 'BKUC / M / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language.' },
        { code: 'BKUC / M / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Three game engines.' },
        { code: 'BKUC / M / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Real code, games and puzzles.' }
      ] },
      { num: 'III', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'BKUC / T / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Beginner to advanced.' },
        { code: 'BKUC / T / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java and the exam.' },
        { code: 'BKUC / T / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Models they train themselves.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our lessons run',
    h2: 'Our row in the table, explained',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Batches after school in US time zones.' },
      { time: 'Weekends', l: 'Weekend mornings suit many families.' },
      { time: '1-on-1', l: 'Set around your own calendar.' }
    ],
    cells: [
      { h3: 'Live only', p: 'No pre-recorded course in place of a teacher.' },
      { h3: 'Three sizes', p: 'Batches of 15 to 20, up to 6, or one.' },
      { h3: 'Coding and maths', p: 'Both subjects from one school.' },
      { h3: 'Ages 6 to 67', p: 'Children, teens and adults.' },
      { h3: 'From India', p: 'Teachers work live across time zones.' },
      { h3: 'Monthly', p: 'No year-long contract.' }
    ]
  },

  projectsH2: 'Projects from our own students',
  projectsLede: 'What our learners have built, for comparison with any portfolio another provider shows you. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews from our parents, copied as written. Read other providers&rsquo; reviews on their own pages too.',

  fees: {
    h2: 'Our fees',
    lede: 'We show our own fees here in US dollars and do not quote anyone else&rsquo;s; each provider publishes its prices on its own site. Ours are billed monthly with no long contract.',
    free: ['A free first lesson', 'Any of our courses', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A teacher to yourself', 'Your own pace', 'Times you choose']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Comparing online coding classes: common questions',
    items: [
      { q: 'What is the best online coding class for kids in the USA?', a: 'It depends on the format your child needs. Small live groups, private lessons, self-paced courses and in-person classes all have strong providers. Shortlist by format, then use trial lessons to choose.' },
      { q: 'Which providers teach live rather than by video?', a: 'From their own sites, CodeWizardsHQ, Create & Learn, Coding with Kids and Modern Age Coders teach live classes, and iD Tech teaches live lessons and camps. CodaKid\'s main program is self-paced video, with live private lessons and camps as well.' },
      { q: 'Which has the smallest groups?', a: 'Of the providers that publish a number, Create & Learn states three to five students and CodeWizardsHQ four to six. Modern Age Coders offers mini batches of up to six as well as larger batches and 1-on-1.' },
      { q: 'Which providers offer 1-on-1 lessons?', a: 'Five list private lessons on their sites: iD Tech, CodaKid, Create & Learn, Coding with Kids and Modern Age Coders. CodeWizardsHQ offers 1-on-1 office hours with the instructor within its advanced courses rather than a separate private-lesson program.' },
      { q: 'Are the teachers based in the US?', a: 'CodeWizardsHQ, Create & Learn and iD Tech say their instructors are US-based. Modern Age Coders teachers work live from India. The others do not state a location on the pages we read.' },
      { q: 'Why does this page not compare prices?', a: 'Prices change often and differ by format, so we link to each provider instead. Our own fees are shown in US dollars in the fees section.' },
      { q: 'Is there an in-person option?', a: 'Coding with Kids lists in-person classes in several US regions, and iD Tech runs summer camps on university campuses. The others compared here are online.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you connected with any of these companies?', a: 'No. Modern Age Coders is independent of CodeWizardsHQ, Create & Learn, iD Tech, CodaKid and Coding with Kids. We read their public pages on 17 October 2026 and link to them.' },
      { q: 'How current is this comparison?', a: 'Every fact was read on the providers\' sites on 17 October 2026. Programs change, so confirm details on each site before you enroll.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More help for US families choosing coding classes.',
    items: [
      { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded classes', p: 'The format question in depth.' },
      { href: '/online-coding-classes-cost', label: 'Online coding class costs', p: 'How fees are usually structured.' },
      { href: '/modern-age-coders-vs-juni-learning', label: 'Compared with Juni Learning', p: 'Another provider, side by side.' },
      { href: '/modern-age-coders-vs-outschool', label: 'Compared with Outschool', p: 'A marketplace vs a school.' },
      { href: '/online-coding-classes-for-kids-usa', label: 'Online coding classes, USA', p: 'Our classes for US kids.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page for US families.' }
    ]
  },

  start: {
    h2: 'Add us to your trial list',
    lede: 'If our row looks worth testing, book a free first lesson and compare it honestly with the others&rsquo; trials. Tell us your child&rsquo;s age and what they have tried before.',
    readFirst: 'To compare methods properly, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> and open any syllabus from the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'We are an online school with teachers in India and families across the US. WhatsApp is the quickest way to ask us anything.',
    formNote: 'Free first lesson; no card asked.'
  },

  footer: {
    cols: [
      { h4: 'Comparisons', links: [
        { href: '/modern-age-coders-vs-juni-learning', label: 'vs Juni Learning' },
        { href: '/modern-age-coders-vs-outschool', label: 'vs Outschool' },
        { href: '/modern-age-coders-vs-tynker', label: 'vs Tynker' },
        { href: '/live-vs-recorded-coding-classes', label: 'Live vs recorded' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for US kids' },
        { href: '/coding-classes-for-kids-cost', label: 'Coding class costs' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Six providers, your weights'
  },

  personalityCss: `
.ag-root.ag-bkuc .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-bkuc .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-bkuc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-bkuc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-bkuc .ag-steps { gap: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Provider sites read raw 17 October 2026: CodeWizardsHQ (ages 7-10, 11-13, 14-18; 4 to 6 students; recorded classes; 90% coding; US-based instructors; four-session money-back guarantee, not summer camps); Create & Learn (3 to 5 students; grades K-12; free intro classes; satisfaction guarantee; under 5% of candidates; US-based); iD Tech (ages 7-19; 60-minute 1-on-1 lessons on Zoom, 1, 4, 8 or 12 a month; virtual camps 7-17, a week of 2 hours daily; 75+ universities; USA-based adult instructors; 72-hour cancellation); CodaKid (ages 6 to 18; 115+ self-study courses; 24/7 AI-powered support; 50-minute private lessons; camps 2 hours a day, recorded; 14-day trial; first private session free); Coding with Kids (ages 5-18; live only; online and in person; group about 75 minutes, private 50 minutes; since 2014). Modern Age Coders from brand facts.',
    localProject: 'Our weighted-score method and Python example on three made-up options (A 5 of 7, B 1 of 7, C 4 of 7), our trial checklist and question-to-format table. Lesson family: weighted scoring.',
    requiredMentions: ['Four to six students per class', 'Three to five students per class', '115 self-study courses', '24/7 AI-powered learning support', 'Lessons 60 minutes', 'Group about 75 minutes weekly', 'up to 72 hours before the start', '14-day free trial', 'Option A 5 of 7', 'read on 17 October 2026', 'not connected with any of the other five', '90% of class time coding'],
    sources: [
      { claim: 'CodeWizardsHQ: programs, class size, recordings, instructors, guarantee.', url: 'https://www.codewizardshq.com/' },
      { claim: 'Create & Learn: class size, grades, free intros, guarantee, teachers.', url: 'https://www.create-learn.us/' },
      { claim: 'iD Tech: ages, private lessons, camps, instructors.', url: 'https://www.idtech.com/tutoring' },
      { claim: 'CodaKid: ages, self-paced courses, private lessons, camps, trials.', url: 'https://codakid.com/faq/' },
      { claim: 'Coding with Kids: ages, live-only model, schedules, formats.', url: 'https://www.codingwithkids.com/about-our-programs' }
    ],
    rejectedClaims: [
      'Any ranking or claim that one provider, including us, is better: refused; the page compares published facts and gives a method.',
      'Competitor prices: not printed; each provider\'s own site is linked.',
      'Competitor review scores, success rates and student totals: not used; they are each provider\'s own marketing figures and not comparable.',
      'Names of founders, staff or reviewers: not used.',
      'Group sizes for iD Tech, CodaKid and Coding with Kids: no number published on the pages read, so the table says so.',
      'Any affiliation with the five other providers: none.'
    ]
  }
};
