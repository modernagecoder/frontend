'use strict';
// Student hackathons in the UK (ag- competition spoke, UK cluster Phase 2).
// Facts read on 20 September 2026:
//  - hackathons.org.uk: "a growing, community-led non-profit focused on supporting hackathon organisers
//    and student tech societies in the United Kingdom"; a registered charity in England, number 1195243,
//    and a company limited by guarantee, number 12530692; it reports 5,000+ hackers reached, 1,000+
//    projects judged, 60+ events supported and five years in operation; it gives organisers free support
//    through the whole process of running an event.
//  - hackuk.network: "We Host Free Hackathons & Tech Events for Sixth Form Students Across the United
//    Kingdom", for "young people aged 16-18 across Britain"; events are "workshops and build sessions
//    where you'll learn from mentors, work on your own ideas, and actually finish something you can show
//    people"; Counterspell Wolverhampton was "a weekend-long game-making hackathon" where participants
//    "had two days to ship a playable game"; Hack4Health is listed for 19 December 2026 in Central London.
//  - mlh.com: Major League Hacking calls itself "The World's Largest Developer Community", with
//    "5 million software creators" and "1000+ Annual Events" across "100 Countries". Its published code
//    of conduct does not state age rules, and we do not assert any.
// We could find no single national listing of hackathons open to under-16s, and the page says so rather
// than implying one exists.
// Spine: two people, one file, three in the morning. Our run of 20 September 2026, in a real repository:
// two branches each add one line to the same part of the same file, and merging produces
// "CONFLICT (content): Merge conflict in game.py" with the file rewritten to carry both versions between
// conflict markers. Nothing was wrong with either change. Lesson family: merge conflicts and integrating
// work from several people, screened free against all dossiers on 20 September 2026.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'HACKATHONS', label: 'Student hackathons in the UK', blurb: 'Weekend events where the deliverable is a working thing, and the hard part is joining the work up.' },
  slug: 'student-hackathons-uk',
  code: 'hak',
  accent: '#223239',
  accentRationale: 'Student hackathons: a near-black slate-cyan from the solver (10.76:1 on every paper tint), the quietest accent in the competition set and unlike the Kent and CyberFirst teals',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Student hackathons in the UK',
  title: 'Student Hackathons UK | Who Can Go and What Happens',
  description: 'Student hackathons in the UK: who runs them, which events accept sixth formers, what a weekend actually involves, and the thing that breaks most teams at 3am.',
  ogDescription: 'Most UK student hackathons are run by university societies, and a smaller number take sixth formers. The hard part is never the idea; it is joining four people\'s work together.',
  twitterDescription: 'Student hackathons in the UK: who can attend, what a weekend involves, and how teams break at 3am.',
  pageName: 'Student Hackathons in the UK',
  webPageDescription: 'A guide to student hackathons in the United Kingdom, covering the organisations that support them, which events accept sixth-form students, what a weekend event involves and how teams integrate their work.',
  courseDescription: 'Live online coding classes that prepare students to build and finish something in a team under a deadline, including version control and integration.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Student hackathons',
  navLinks: [
    { href: '#who', label: 'Who runs them' },
    { href: '#merge', label: 'Three in the morning' },
    { href: '#weekend', label: 'The weekend' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Mostly 16 and over &middot; Weekend events',
  h1: 'Student hackathons in the UK',
  lede: 'A hackathon is the only competition on this site where nobody tells you what to build. You arrive on a Friday evening, usually with people you have not met, and by Sunday afternoon there has to be a working thing to show. Everything else, the pizza, the sleeping bags, the lanyards, is decoration around that one constraint. Which makes the useful questions narrower than parents expect: who is actually allowed in at sixteen, what a weekend really contains, and why four capable people so often arrive at Sunday with four half-finished pieces that do not fit together.',
  secondaryCta: { href: '#merge', label: 'See four people collide in one file' },
  wa: 'Hello Modern Age Coders, my child wants to do a hackathon and I would like a free coding class.',
  heroNote: 'Quoted from each organisation with the date we read it &middot; No age rule asserted without a source &middot; Our own merge run',
  spec: [
    ['Typical length', 'A weekend'],
    ['Sixth formers', 'HackUK events, ages 16 to 18'],
    ['University level', 'Society-run events across the UK'],
    ['Support charity', 'Hackathons UK, number 1195243'],
    ['International network', 'Major League Hacking'],
    ['Cost', 'Often free to attend'],
    ['Deliverable', 'Something that works, demonstrated'],
    ['Under 16', 'No national listing we could find']
  ],
  capsuleQ: 'In short',
  capsule: 'Most student hackathons in the UK are run by university tech societies, supported by Hackathons UK, "a growing, community-led non-profit focused on supporting hackathon organisers and student tech societies in the United Kingdom", a registered charity in England, number 1195243, which reports 5,000 or more hackers reached, 1,000 or more projects judged and 60 or more events supported over five years. For school-age students, HackUK says it hosts "free hackathons and tech events for sixth form students across the United Kingdom" for "young people aged 16-18 across Britain", with events described as workshops and build sessions with mentors; its Counterspell Wolverhampton was "a weekend-long game-making hackathon" where participants "had two days to ship a playable game", and Hack4Health is listed for 19 December 2026 in Central London. Internationally, Major League Hacking describes itself as "the world\'s largest developer community" with "1000+ annual events" across "100 countries". We teach the building. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a first hackathon',
    lede: 'The skill a hackathon rewards is finishing something with other people, which is narrower and harder than it sounds.',
    items: [
      { course: 'full-stack-web-development-teens-masterclass', code: 'HAK / 01', title: 'Full stack web development', note: 'The most useful hackathon skill set: a working interface with something real behind it, built in slices.' },
      { course: 'python-complete-masterclass-teens', code: 'HAK / 02', title: 'Python from start to finish', note: 'For students who want to build the logic rather than the screens, and to debug it at speed.' },
      { course: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', code: 'HAK / 03', title: 'Hackathon preparation for kids', note: 'For younger students, ages 8 to 12: the same habits, at a pace that suits a child who is years away from a real event.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Who runs them',
      h2: 'Societies, a charity, and one route in at sixteen',
      lede: 'Facts read at each organisation\'s own site on 20 September 2026, attributed in the row.',
      body: [
        { kind: 'table', caption: 'The organisations behind UK student hackathons', head: ['Organisation', 'What it says about itself', 'What it means for a student'], rows: [
          ['Hackathons UK', '"A growing, community-led non-profit focused on supporting hackathon organisers and student tech societies in the United Kingdom"', 'The support layer behind many university events'],
          ['Its status', 'A registered charity in England, number 1195243, and a company limited by guarantee, number 12530692', 'A real organisation, not a brand'],
          ['Its scale', '5,000 or more hackers reached, 1,000 or more projects judged, 60 or more events supported, over five years', 'A busy calendar, mostly at universities'],
          ['HackUK', '"We Host Free Hackathons & Tech Events for Sixth Form Students Across the United Kingdom", for "young people aged 16-18 across Britain"', 'The clearest route in for a school-age student'],
          ['A HackUK event', '"Workshops and build sessions where you\'ll learn from mentors, work on your own ideas, and actually finish something you can show people"', 'Taught and supported, not thrown in at the deep end'],
          ['An example', 'Counterspell Wolverhampton, "a weekend-long game-making hackathon", where participants "had two days to ship a playable game"', 'Two days, one finished thing'],
          ['Listed next', 'Hack4Health, 19 December 2026, Central London', 'A concrete date to plan around'],
          ['Major League Hacking', '"The World\'s Largest Developer Community", with "5 million software creators" and "1000+ Annual Events" across "100 Countries"', 'The international network many university events belong to']
        ] },
        { kind: 'two', mt: true,
          left: [
            'One thing this page will not do is tell you the minimum age for a hackathon in general, because there is no such thing. Each event sets its own rules, and Major League Hacking\'s published code of conduct, which we read, does not state an age policy. Anyone who tells you that hackathons are open from thirteen, or closed below eighteen, is generalising from one event they went to.',
            'What we can say is what we found. HackUK publishes an age range of 16 to 18. University society events are, in practice, for students at that university or visiting from another. And we could find no national listing of hackathons open to under-16s at all.'
          ],
          right: [
            'That gap is worth naming rather than papering over. A thirteen-year-old who wants the hackathon experience in Britain has no obvious front door, which is part of why we run our own event alongside a preparation course for ages 8 to 12.',
            'For a sixteen-year-old the picture is much better, and it is free. HackUK charges nothing, and university events typically charge nothing either, which makes travel the only real cost.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.hackathons.org.uk/" rel="noopener" target="_blank">Hackathons UK</a>, <a class="ag-inline-link" href="https://www.hackuk.network/" rel="noopener" target="_blank">HackUK</a> and <a class="ag-inline-link" href="https://www.mlh.com/" rel="noopener" target="_blank">Major League Hacking</a>, all read 20 September 2026. Modern Age Coders is not connected with any of them.' }
      ]
    },
    {
      id: 'merge', tint: 'deep', eyebrow: 'The method',
      h2: 'Two people, one file, three in the morning',
      lede: 'Teams do not usually fail because the idea was bad. They fail at the point where four people\'s work has to become one program, and here is that moment, reproduced.',
      body: [
        { kind: 'p', html: 'We made a repository with a two-line program, then had two people each add one line near the top: Ana added a variable for lives, Ben added one for the level. Both changes are correct. Both work. Then Ben merged Ana\'s work into his.' },
        { kind: 'table', caption: 'Our run of 20 September 2026, in a real repository', head: ['Step', 'What happened'], rows: [
          ['Ana\'s branch', 'She adds a line for lives, and her copy runs'],
          ['Ben\'s branch', 'He adds a line for level, and his copy runs'],
          ['Ben merges Ana\'s work', '"CONFLICT (content): Merge conflict in game.py"'],
          ['The file afterwards', 'Rewritten to hold both versions, separated by conflict markers, and it no longer runs']
        ] },
        { kind: 'three', cells: [
          { h3: 'Nobody did anything wrong', p: 'Two correct changes to nearby lines is all it takes. The tool cannot know which one should come first, so it stops and asks, in a format that terrifies anyone meeting it for the first time at 3am.' },
          { h3: 'Why it always happens then', p: 'Teams work separately all Saturday and integrate on Sunday morning, so every conflict in the weekend arrives at once, in the hours when nobody is thinking clearly.' },
          { h3: 'The fix is scheduling', p: 'Merge early and often. A team that joins its work together every two hours meets conflicts one at a time, awake, with time to fix them.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'This is the single most valuable thing a student can learn before their first hackathon, and almost nobody teaches it, because school projects are written by one person. The first time most young programmers see conflict markers is in an event, under a deadline, with three teammates watching.',
            'Ten minutes of practice removes the fear entirely. Make a repository, create the conflict on purpose, resolve it, and it stops being an emergency and becomes a chore.'
          ],
          right: [
            'The second habit is to divide the work by file rather than by feature where possible. Two people editing different files almost never collide; two people editing the same function collide constantly, however carefully they talk.',
            'And agree before Friday night who merges. A team with one person responsible for integration finishes; a team where everyone merges into everyone spends Sunday morning untangling.'
          ] },
        { kind: 'source', html: 'The repository, both branches, the conflict and the resulting file are ours, produced on 20 September 2026. The error text is exactly what the tool printed.' }
      ]
    },
    {
      id: 'weekend', tint: 'plain', eyebrow: 'The weekend',
      h2: 'What forty-eight hours actually contains',
      lede: 'The advertised number and the usable number are not the same, and knowing the difference is most of a good plan.',
      body: [
        { kind: 'table', caption: 'A weekend event, honestly accounted for. The allowances are ours, not any organiser\'s.', head: ['Goes on', 'Roughly', 'Note'], rows: [
          ['Opening, briefing and team forming', '2 hours', 'Longer than anyone expects, and it matters'],
          ['Sleep, across two nights', '12 hours', 'Teams that skip this demo badly on Sunday'],
          ['Eating, breaks and moving about', '5 hours', 'Including the walk to find food at midnight'],
          ['Workshops and mentor sessions', '3 hours', 'Optional, and usually worth it for a first-timer'],
          ['Judging, demos and the closing', '3 hours', 'Nothing gets built in this time'],
          ['What is left to build in', 'About 23 hours', 'Per person, minus every minute spent integrating']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Twenty-three hours is a useful number to hold in your head on Friday evening, because it is roughly three school days of work, not a fortnight. Teams that plan a product plan badly; teams that plan one feature that works, with a screen somebody can press, finish.',
            'The other consequence is that the demo is the deliverable. Judges see what can be shown in a few minutes, so anything clever that is invisible on screen may as well not exist. Build the visible thing first and the clever thing after, not the other way round.'
          ],
          right: [
            'For a first-timer the most useful advice we can give is to go without a team and without an idea. Events are built to match people up and most of them run sessions for exactly that, and arriving with a fixed plan makes it harder to join anyone.',
            'And go for the weekend rather than for the prize. Almost everything a student takes away from a hackathon, including the version control they will use for the rest of their life, has nothing to do with who won.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a useful weekend',
    lede: 'Each rung is something to have done once before Friday, not something to learn during it.',
    table: { caption: 'From building alone to building with three strangers', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Before 14', '1. Finishing something', 'Has built a small thing end to end and shown it to somebody'],
      ['14 to 16', '2. Version control', 'Can make a repository, branch, merge and resolve a conflict without panic'],
      ['16 to 18', '3. Building in slices', 'Gets something on screen in the first hours, then improves it'],
      ['16 and up', '4. Working with strangers', 'Can divide work, agree an integrator, and demo in three minutes']
    ] },
    left: { h3: 'Before a first event', ps: [
      'Create a merge conflict on purpose and resolve it. Ten minutes now saves the worst hour of the weekend.',
      'Decide who merges before anyone writes any code, and divide the work by file rather than by feature.'
    ] },
    right: { h3: 'If under sixteen', ps: [
      'We could find no national listing of UK hackathons open to under-16s, which is why we run our own event alongside a preparation course for ages 8 to 12.',
      'The <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> has plenty that is open at any age, including showcases with no ranking.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for someone who wants to build in a weekend',
    lede: 'Grouped by what a student will actually be doing at the table.',
    bands: [
      { num: 'I', h3: 'Building fast', sub: 'The core skill', courses: [
        { code: 'HAK / A / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'A screen and a database, built in slices.' },
        { code: 'HAK / A / 02', slug: 'complete-app-development-masterclass-for-teens', title: 'App development', blurb: 'Something on a phone that a judge can press.' },
        { code: 'HAK / A / 03', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'The logic, and debugging it at speed.' }
      ] },
      { num: 'II', h3: 'Working together', sub: 'Where weekends break', courses: [
        { code: 'HAK / B / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Choosing a method that will finish tonight.' },
        { code: 'HAK / B / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Writing correct code when the clock is unkind.' },
        { code: 'HAK / B / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon preparation for kids', blurb: 'The same habits for ages 8 to 12.' }
      ] },
      { num: 'III', h3: 'Something to show', sub: 'The demo is the deliverable', courses: [
        { code: 'HAK / C / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'A model that does something visible.' },
        { code: 'HAK / C / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Real data, shown convincingly.' },
        { code: 'HAK / C / 03', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'For a game-making weekend, at a younger age.' }
      ] },
      { num: 'IV', h3: 'Before all that', sub: 'Younger students', courses: [
        { code: 'HAK / D / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'A first typed language, taught patiently.' },
        { code: 'HAK / D / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Finishing something, which is the real skill.' },
        { code: 'HAK / D / 03', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'The qualification running alongside.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly building, with the integration practised',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot for teenagers.' },
      { time: 'Weekend morning', l: 'For a long build session, start to finish.' },
      { time: 'Holiday weeks', l: 'For a project run like a small hackathon.' }
    ],
    cells: [
      { h3: 'Version control taught', p: 'Branches, merges and conflicts practised deliberately, before anyone meets one under pressure.' },
      { h3: 'Something on screen first', p: 'We teach building in slices, so there is always a demonstrable thing.' },
      { h3: 'Five to ten learners', p: 'Enough that work has to be divided, few enough that everyone is heard.' },
      { h3: 'Our own hackathon', p: 'We run an event for younger students alongside a twelve-week preparation course for ages 8 to 12.' },
      { h3: 'One to one when useful', p: 'For a student preparing for a specific event.' },
      { h3: 'No affiliation', p: 'We have no relationship with Hackathons UK, HackUK or Major League Hacking.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four finished, published projects from students here, built in their own time. There are more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews left by families on Google, printed with nothing changed.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly price in US dollars for families outside India, nothing to pay to register, and no term you are locked into.',
    free: ['A real lesson building something', 'An honest read on the level', 'No card details taken'],
    group: ['Five to ten learners at one level', 'The same teacher weekly', 'Code reviewed as it grows', 'A certificate at the end'],
    one: ['A teacher working with one learner', 'Shaped around what they are building', 'Useful before a first event']
  },

  faq: {
    eyebrow: 'Student hackathon questions',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is a hackathon?', a: 'A weekend event where students build something working and demonstrate it at the end. Nobody tells you what to build, and the deadline is the only fixed thing.' },
      { q: 'How old do you have to be?', a: 'It depends on the event, and there is no general rule. HackUK publishes an age range of 16 to 18 for its free events. University society events are in practice for students at a university. Major League Hacking\'s published code of conduct, which we read, does not state an age policy.' },
      { q: 'Are there hackathons for under-16s in the UK?', a: 'We could find no national listing of them. That gap is real, and it is why we run our own event for younger students alongside a preparation course for ages 8 to 12.' },
      { q: 'Who supports UK student hackathons?', a: 'Hackathons UK, which describes itself as a community-led non-profit supporting hackathon organisers and student tech societies, and is a registered charity in England, number 1195243. It reports supporting more than 60 events over five years.' },
      { q: 'Do they cost anything?', a: 'HackUK says its hackathons and tech events are free, and university events are typically free to attend, so travel is usually the only cost.' },
      { q: 'What actually happens over a weekend?', a: 'Less building than the advertised hours suggest. Once opening, sleep, food, workshops and judging are accounted for, our own allowance leaves about 23 hours to build in, which is roughly three school days.' },
      { q: 'Why do good teams fail?', a: 'Usually at integration. Two people making correct changes near the same lines produce a merge conflict, and teams that work separately all Saturday meet every conflict at once on Sunday morning.' },
      { q: 'How do we avoid that?', a: 'Merge early and often, divide work by file rather than by feature, and agree before anyone writes code who is responsible for integrating. Practising a conflict on purpose beforehand takes ten minutes.' },
      { q: 'Should my child go with a team and an idea?', a: 'Not necessarily. Events are built to match people up and run sessions for it, and arriving with a fixed plan can make joining a team harder.' },
      { q: 'Is it worth going without winning?', a: 'Almost everything a student takes away, including the version control they will use for the rest of their life, has nothing to do with who won.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'Other ways to build and show',
    lede: 'Showcases, project competitions and the whole competition year.',
    items: [
      { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK', p: 'Any age, no ranking, every checked entry shown.' },
      { href: '/big-bang-competition-project-help', label: 'Big Bang Competition', p: 'Project entries from teams of any size.' },
      { href: '/first-lego-league-uk-coding-help', label: 'FIRST LEGO League', p: 'Autonomous robots and an innovation project.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'The season in one table, with each organiser named.' },
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'The four school systems, and every UK page.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our own students have finished and published.' }
    ]
  },

  start: {
    h2: 'Book a free coding lesson',
    lede: 'Tell us the age and what your child wants to build. The free lesson makes a start on it, and we say afterwards what a weekend would realistically hold.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'WhatsApp is free from a UK mobile and usually the fastest way to us. Our number is an Indian one, which we always state, and there is no office in Britain.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Build and show', links: [
        { href: '/coolest-projects-uk-project-ideas', label: 'Coolest Projects UK' },
        { href: '/big-bang-competition-project-help', label: 'Big Bang Competition' },
        { href: '/first-lego-league-uk-coding-help', label: 'FIRST LEGO League' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/full-stack-web-development-teens-masterclass', label: 'Full stack web development' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course', label: 'Hackathon prep for kids' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the building; the weekend is theirs'
  },

  personalityCss: `
.ag-root.ag-hak .ag-hero h1 { letter-spacing: -0.021em; }
.ag-root.ag-hak .ag-capsule { border-left-width: 7px; border-radius: 0 1px 1px 0; }
.ag-root.ag-hak .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-hak .ag-table caption { text-align: left; font-weight: 600; font-size: 0.93em; }
.ag-root.ag-hak .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-hak .ag-spec dt { letter-spacing: 0.14em; }
.ag-root.ag-hak .ag-three h3 { letter-spacing: -0.0095em; }
.ag-root.ag-hak .ag-slots { gap: 1.38rem; }
`,

  mustMention: ['1195243', 'aged 16-18 across Britain', 'CONFLICT (content): Merge conflict', 'Hack4Health', '1000+ Annual Events', 'about 23 hours', 'Counterspell Wolverhampton']
};
