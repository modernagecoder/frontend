'use strict';
// Coolest Projects UK project ideas (ag- competition spoke, UK cluster Phase 2).
// Facts read at coolestprojects.org, which redirects to online.coolestprojects.org, on 20 September 2026:
//  - Run by the Raspberry Pi Foundation, a UK registered charity, number 1129409.
//  - Open to young people of all ages; those under 13 need an adult to register them, and those 13 and
//    older can register themselves or be registered by an adult.
//  - Seven categories: Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial
//    Intelligence, which the organiser marks as new for 2026.
//  - "We check every entry, and then we'll let you know when your project is in our online gallery or has
//    a place at an in-person event", after which participants "join your in-person event or the online
//    celebration and share your project with the world". VIP judges pick out favourites.
//  - Entries are open; the organiser had not published 2027 event dates on the pages we read.
//  - Raspberry Pi Foundation blog, 21 July 2026: Coolest Projects UK 2026 took place in Bradford in May,
//    with more than 200 young people taking part.
// Spine: it has to run on somebody else's machine. Our demonstration of 20 September 2026: a five-line
// Python program that opens scores.txt and prints the highest score. Run from the folder it was written
// in, it prints "highest score: 40". Run from one folder along, as a judge with a laptop would, the same
// program raises FileNotFoundError: No such file or directory: 'scores.txt'. Nothing about the code
// changed; only where it was started from. Lesson family: a program that assumes where it is being run,
// screened free against all dossiers on 20 September 2026 (0 hits).
// This is a showcase rather than a contest, and the page says so.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'COOLEST PROJECTS', label: 'Coolest Projects UK', blurb: 'Seven categories, every age, and a showcase rather than a contest.' },
  slug: 'coolest-projects-uk-project-ideas',
  code: 'cpr',
  accent: '#19765A',
  accentRationale: 'Coolest Projects: a mid green-teal from the solver (4.51:1 on every paper tint), brighter than the Mathematical Olympiad for Girls teal and the Surrey forest green',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Coolest Projects UK project ideas',
  title: 'Coolest Projects UK | Project Ideas and How to Enter',
  description: 'Coolest Projects UK explained: seven categories including a new AI one, open to all ages, every checked entry shown, and how to build for a stranger.',
  ogDescription: 'Coolest Projects is a showcase, not a contest: every entry that passes the check is shown. The hard part is making a project that runs on somebody else\'s machine.',
  twitterDescription: 'Coolest Projects UK: seven categories, all ages, and project ideas that survive being handed over.',
  pageName: 'Coolest Projects UK Project Ideas',
  webPageDescription: 'Guidance for young people entering Coolest Projects, the Raspberry Pi Foundation showcase, covering the seven categories, who can register, what happens to an entry and how to build a project that works away from its own computer.',
  courseDescription: 'Live online coding classes for children and teenagers building projects in Scratch, Python, web, apps, hardware and AI for a showcase.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Coolest Projects UK',
  navLinks: [
    { href: '#showcase', label: 'The showcase' },
    { href: '#handover', label: 'Somebody else\'s machine' },
    { href: '#ideas', label: 'Ideas by category' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; All ages &middot; Seven categories',
  h1: 'Coolest Projects UK project ideas',
  lede: 'Coolest Projects is the least competitive thing on our competitions calendar, and that is its point. The Raspberry Pi Foundation checks every entry and then puts it in the online gallery or gives it a place at an event; there is no ranking, no elimination and no minimum standard of ambition. A seven-year-old\'s Scratch animation and a sixteen-year-old\'s hardware build stand in the same room. Which moves the interesting question away from whether a project is good enough and onto something harder: whether it still works when somebody who did not build it sits down in front of it.',
  secondaryCta: { href: '#handover', label: 'See a project break in one step' },
  wa: 'Hello Modern Age Coders, my child wants to build something for Coolest Projects and I would like a free class.',
  heroNote: 'Quoted from the organiser with the date we read it &middot; A showcase, not a contest &middot; We help with skills, not with entries',
  spec: [
    ['Organiser', 'The Raspberry Pi Foundation'],
    ['Charity number', '1129409'],
    ['Ages', 'All, with adults registering under 13s'],
    ['Categories', 'Seven'],
    ['New for 2026', 'Artificial Intelligence'],
    ['Every checked entry', 'Goes in the gallery or to an event'],
    ['UK event 2026', 'Bradford, in May'],
    ['Ranking', 'None']
  ],
  capsuleQ: 'In short',
  capsule: 'Coolest Projects is run by the Raspberry Pi Foundation, a UK registered charity, number 1129409, and is open to young people of all ages: those under 13 are registered by an adult and those 13 and over may register themselves. There are seven categories: Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence, which the organiser marks as new for 2026. The organiser says "we check every entry, and then we\'ll let you know when your project is in our online gallery or has a place at an in-person event", after which participants join an event or the online celebration and share the project; VIP judges pick out favourites. Coolest Projects UK 2026 took place in Bradford in May with more than 200 young people. We teach the building, live online for ages 6 to 67. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a project builder',
    lede: 'Pick by what the child wants to make, not by their age.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CPR / 01', title: 'Coding for kids, blocks to AI', note: 'For the Scratch and Games categories: a first project taken all the way to something that works without you.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'CPR / 02', title: 'App development', note: 'For the Mobile apps category: screens, taps and saving what the user did.' },
      { course: 'ai-ml-masterclass-teens', code: 'CPR / 03', title: 'AI and machine learning for teens', note: 'For the AI category, new in 2026: a model trained on real data, and an honest account of how well it works.' }
    ]
  },

  sections: [
    {
      id: 'showcase', tint: 'tint', eyebrow: 'The showcase',
      h2: 'Seven categories, no ranking, everybody shown',
      lede: 'Facts read at the organiser\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'Coolest Projects as the Raspberry Pi Foundation describes it', head: ['Part', 'What the organiser says', 'What it means for a family'], rows: [
          ['Who runs it', 'The Raspberry Pi Foundation, a UK registered charity, number 1129409', 'The same charity behind Bebras and Astro Pi'],
          ['Who can enter', 'Young people of all ages; under 13s are registered by an adult, 13 and over may register themselves', 'No lower age limit at all'],
          ['Categories', 'Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence', 'Seven, so almost anything a child builds has a home'],
          ['New for 2026', 'The Artificial Intelligence category', 'The first year an AI project has a category of its own'],
          ['What happens next', '"We check every entry, and then we\'ll let you know when your project is in our online gallery or has a place at an in-person event"', 'Checked, not judged against a bar'],
          ['Then', 'Participants join an in-person event or the online celebration and share the project', 'The showing is the event'],
          ['Judging', 'VIP judges pick out favourites to highlight', 'Recognition without a ranking'],
          ['The UK event in 2026', 'Bradford, in May, with more than 200 young people', 'A real hall, with real tables']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The absence of a ranking changes who should enter, and the answer is almost everybody. A child who would never sit a timed paper, or who finds competition unpleasant, can put a project in a gallery and be treated exactly like everyone else. We have not found another UK technology event that is this open.',
            'It also means the entry deadline matters more than the quality. A finished small thing submitted on time beats an ambitious thing that was not ready, because there is no category for nearly.'
          ],
          right: [
            'The AI category being new in 2026 is worth knowing for a family deciding what to build this year. A project that uses a trained model now has somewhere obvious to go, and the field is less crowded than Scratch or Games.',
            'Dates move. The organiser had not published 2027 event dates on the pages we read, so check the organiser rather than a page like this one, including ours. What we can say is that entries were open when we looked and that the UK event in 2026 was in Bradford in May.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://online.coolestprojects.org/" rel="noopener" target="_blank">Coolest Projects</a>, read 20 September 2026, and the Raspberry Pi Foundation\'s blog post of 21 July 2026 on the Bradford event. Modern Age Coders is not connected with the Raspberry Pi Foundation.' }
      ]
    },
    {
      id: 'handover', tint: 'deep', eyebrow: 'The method',
      h2: 'It has to run on somebody else\'s machine',
      lede: 'The commonest way a good project fails at a showcase table has nothing to do with the idea. Here it is, in five lines and one step.',
      body: [
        { kind: 'p', html: 'We wrote a tiny program: open a file called scores.txt, read the numbers in it, print the highest. Five lines, correct, and it does exactly what it should. Then we did the only thing a judge or a visitor ever does, which is run it from somewhere other than the folder it was written in.' },
        { kind: 'table', caption: 'Our run of 20 September 2026: the same program, two places', head: ['Where it was run from', 'What happened'], rows: [
          ['The folder the program lives in', 'highest score: 40'],
          ['One folder along', 'FileNotFoundError: No such file or directory: \'scores.txt\'']
        ] },
        { kind: 'three', cells: [
          { h3: 'Nothing in the code changed', p: 'Not a character. The program assumed it would be started from its own folder, and nobody ever tells you that assumption is there until it breaks.' },
          { h3: 'Why it always happens at the table', p: 'At home a project is run the same way every time. At an event it is run from a different computer, a different folder, sometimes by somebody who does not know where the files are.' },
          { h3: 'The five-minute fix', p: 'Ask the program where it lives and look for its files there, rather than wherever the shell happens to be. In Python that is a single line near the top.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The general form of the lesson is worth more than the fix. A project carries assumptions about the world it will run in: this folder, this screen size, this internet connection, this version of the language, this file that only exists on the machine where it was written.',
            'Testing means breaking those assumptions on purpose, once, before someone else does it by accident. Move the folder. Try it on a different computer. Turn the wifi off. Hand the laptop to a sibling and say nothing.'
          ],
          right: [
            'That last test is the one we recommend hardest. A child who watches somebody else use their project without help learns more in two minutes than in a week of building, and every single time there is something they did not expect.',
            'It is also exactly what happens at an event in Bradford in May, in front of a stranger, with a queue behind them.'
          ] },
        { kind: 'source', html: 'The program, both runs and the error message are ours, produced on 20 September 2026. Nothing here is taken from any Coolest Projects entry.' }
      ]
    },
    {
      id: 'ideas', tint: 'plain', eyebrow: 'What to build',
      h2: 'One idea per category, and why each one finishes',
      lede: 'The ideas below are ours, written to be small enough to complete and interesting enough to explain at a table.',
      body: [
        { kind: 'table', caption: 'Seven categories, seven projects that fit in a term', head: ['Category', 'An idea that finishes', 'Why it works at a showcase'], rows: [
          ['Scratch', 'A quiz about the child\'s own town that refuses silly answers and says why', 'Visitors can play it in thirty seconds and it never breaks'],
          ['Games', 'A one-screen game with a scoreboard that survives being closed and reopened', 'Saving state is the hard part and the part worth explaining'],
          ['Web', 'A page that shows one real public dataset, with a sentence saying where the data came from', 'Small, honest, and a good answer to "how do you know?"'],
          ['Mobile apps', 'A timer or habit tracker the child actually uses', 'Something used daily is always more convincing than something impressive'],
          ['Hardware', 'A sensor that lights up when a room gets too dark or too loud', 'Physical, obvious, and demonstrable without a screen'],
          ['Advanced programming', 'A tool that solves a problem the child has, like renaming a hundred photos properly', 'Explains itself in one sentence and shows real work'],
          ['Artificial intelligence', 'A classifier trained on the child\'s own labelled photos, with its mistakes shown too', 'Showing where it fails is more impressive than showing where it works']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Every idea in that table is deliberately modest, because the thing that stops projects is scope rather than skill. A finished small project gets shown; an unfinished big one does not, and no showcase has a category for what you meant to build.',
            'The last row is worth dwelling on now that AI has its own category. A project that says "it gets this right about eight times in ten, and here are the ones it gets wrong" is better work, and better science, than one that only shows the successes.'
          ],
          right: [
            'For the write-up, three sentences do more than three paragraphs: what it does, what was hard, and what you would do next. Children under-sell the second one, which is the one adults find most interesting.',
            'And whatever gets built, test it away from the machine it was made on. That is the single piece of advice on this page that comes from watching projects fail rather than from a rule.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a project that survives a stranger',
    lede: 'The rungs are about finishing and handing over, not about difficulty.',
    table: { caption: 'From an idea to something somebody else can use', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Any age', '1. It works for you', 'Runs start to finish on the machine it was built on'],
      ['Any age', '2. It works elsewhere', 'Runs from a different folder, on a different computer'],
      ['Any age', '3. It survives a user', 'A sibling can use it without being told anything'],
      ['Any age', '4. It explains itself', 'The builder can say what it does, what was hard and what is next']
    ] },
    left: { h3: 'If the deadline is close', ps: [
      'Cut a feature rather than miss the date. Every checked entry is shown, and an unfinished project is not an entry.',
      'Spend the last hour testing it somewhere else rather than adding to it.'
    ] },
    right: { h3: 'After the showcase', ps: [
      'The same project usually makes a good starting point for the next year, one category up.',
      'Other things a young builder can enter are on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses by what a child wants to make',
    lede: 'Grouped to match the categories, with each syllabus a click away.',
    bands: [
      { num: 'I', h3: 'Scratch and games', sub: 'Ages 6 to 11', courses: [
        { code: 'CPR / A / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first language and a first finished project.' },
        { code: 'CPR / A / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, Roblox and Minecraft, properly.' },
        { code: 'CPR / A / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids, blocks to AI', blurb: 'Building things that move, before anything is typed.' }
      ] },
      { num: 'II', h3: 'Apps and web', sub: 'Ages 10 to 16', courses: [
        { code: 'CPR / B / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Screens, taps and what the app remembers.' },
        { code: 'CPR / B / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A site with its own data behind it.' },
        { code: 'CPR / B / 03', slug: 'block-coding-app-development-masterclass', title: 'App making with blocks', blurb: 'Real apps without a semicolon in sight.' }
      ] },
      { num: 'III', h3: 'Advanced and AI', sub: 'Ages 12 to 18', courses: [
        { code: 'CPR / C / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'The language most advanced projects use.' },
        { code: 'CPR / C / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'A trained model, and where it goes wrong.' },
        { code: 'CPR / C / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real data, honestly presented.' }
      ] },
      { num: 'IV', h3: 'Younger and wider', sub: 'Starting out', courses: [
        { code: 'CPR / D / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, taught patiently.' },
        { code: 'CPR / D / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding for kids', blurb: 'Real code, in a world a child already knows.' },
        { code: 'CPR / D / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that show why a method works.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Project lessons, weekly, with a deadline in mind',
    lede: 'Teaching is live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Early weekday evening', l: 'For primary-age builders.' },
      { time: 'Later weekday evening', l: 'For teenagers working on something larger.' },
      { time: 'Weekend morning', l: 'For a long stretch on one project.' }
    ],
    cells: [
      { h3: 'Finishing taught explicitly', p: 'We help a child cut a project down to something that can actually be completed, which is most of the work.' },
      { h3: 'Handover tested', p: 'Every project is run somewhere other than where it was built before we call it done.' },
      { h3: 'Five to ten learners', p: 'Enough that ideas cross the room, few enough that every project gets looked at.' },
      { h3: 'The child builds it', p: 'We teach and review. The project belongs to the young person and is theirs to submit.' },
      { h3: 'One to one when useful', p: 'For an ambitious build, or a child who would rather work alone.' },
      { h3: 'No role in the showcase', p: 'We do not register entries or have any relationship with the organiser.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four finished projects from students here, published and running. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more of them.',
  reviewsLede: 'Google reviews from families, quoted exactly as they were left.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee in US dollars, identical in every country but India, with no registration charge and no tie-in.',
    free: ['A proper lesson with a teacher', 'A frank view of what a project needs', 'No payment details requested'],
    group: ['Five to ten learners at one level', 'The same teacher weekly', 'Projects reviewed as they grow', 'A certificate at the end'],
    one: ['A teacher working with one builder', 'Shaped around the project', 'Useful in the weeks before a deadline']
  },

  faq: {
    eyebrow: 'Coolest Projects questions',
    h2: 'What parents and young builders ask',
    items: [
      { q: 'Who runs Coolest Projects?', a: 'The Raspberry Pi Foundation, a UK registered charity, number 1129409. It is the same charity behind the UK Bebras Challenge and Astro Pi.' },
      { q: 'What age do you have to be?', a: 'Any age. Young people under 13 are registered by an adult, and those aged 13 and over can register themselves or be registered by an adult.' },
      { q: 'What are the categories?', a: 'Seven: Scratch, Games, Web, Mobile apps, Hardware, Advanced programming and Artificial Intelligence, which the organiser marks as new for 2026.' },
      { q: 'Is it a competition?', a: 'Not in the usual sense. The organiser says every entry is checked and then placed in the online gallery or given a place at an in-person event, and VIP judges pick out favourites to highlight. There is no ranking to fall out of.' },
      { q: 'Where was the UK event?', a: 'Coolest Projects UK 2026 took place in Bradford in May, with more than 200 young people taking part. Dates for the next one were not published on the pages we read.' },
      { q: 'What makes a good project?', a: 'One that is finished and can be used by a stranger. Scope is what stops projects, not skill, and there is no category for what you meant to build.' },
      { q: 'Why does my child\'s project break at events?', a: 'Usually because it assumes where it is being run from. We ran a five-line program that printed the right answer in its own folder and raised FileNotFoundError one folder along, with not a character of the code changed.' },
      { q: 'How do we test for that?', a: 'Move the folder, run it on another computer, turn the wifi off, and hand it to a sibling without explaining anything. The last one finds the most.' },
      { q: 'Should we enter an AI project?', a: 'If the child wants to, yes: the category is new for 2026 and less crowded than Scratch or Games. A project that shows where the model gets things wrong is better work than one that only shows successes.' },
      { q: 'Do you enter projects for students?', a: 'No. We teach and review, the young person builds and submits, and we have no relationship with the organiser.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young builders',
    lede: 'Other things from the same charity, and the whole competition year.',
    items: [
      { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi Mission Zero', p: 'Run a Python program on the space station.' },
      { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge', p: 'November, free, and no programming at all.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'Every competition we could confirm, laid out by month.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our own students have finished and published.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/online-coding-classes-for-kids-uk', label: 'Coding classes for UK children', p: 'What a primary-age child learns first, and in what order.' }
    ]
  },

  start: {
    h2: 'Book a free project lesson',
    lede: 'Tell us your child\'s age and what they want to make. The free lesson starts building it, and we say afterwards how big a term of work would need to be.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp usually gets an answer fastest and is free from a UK mobile. Our number is registered in India, which we state openly, and there is no UK office behind it.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Showcases and challenges', links: [
        { href: '/astro-pi-mission-zero-and-space-lab-help', label: 'Astro Pi' },
        { href: '/bebras-computational-thinking-challenge-practice-uk', label: 'UK Bebras Challenge' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/student-labs', label: 'Student labs' }
      ] },
      { h4: 'Building things', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch for kids' },
        { href: '/courses/complete-app-development-masterclass-for-teens', label: 'App development' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'AI and machine learning' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the building; the project is the child\'s'
  },

  personalityCss: `
.ag-root.ag-cpr .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-cpr .ag-capsule { border-left-width: 5px; border-radius: 0 18px 18px 0; }
.ag-root.ag-cpr .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cpr .ag-table caption { text-align: left; font-weight: 600; font-style: italic; letter-spacing: 0.01em; }
.ag-root.ag-cpr .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-cpr .ag-spec dt { letter-spacing: 0.118em; }
.ag-root.ag-cpr .ag-three h3 { letter-spacing: -0.0045em; }
.ag-root.ag-cpr .ag-slots { gap: 1.32rem; }
`,

  mustMention: ['Raspberry Pi Foundation', '1129409', 'Artificial Intelligence', 'we check every entry', 'FileNotFoundError', 'Bradford', 'more than 200 young people']
};
