'use strict';
// Student hackathons in Australia (ag- competition door, Australia cluster Phase 3, row 99).
// Facts read raw on 7 October 2026 (curl default agent): unihack.net (UNIHACK 2027, March 12-14, 2027;
// 48-hour hybrid; 1000+ students; must be 18 or older and a university or TAFE student in Australia or
// New Zealand; no official theme; four judging criteria; code of conduct) and govhack.org (annual open
// government data competition in Australia and New Zealand; 46 hours; proof of concept plus a video;
// open from high school and first-year university students to experienced developers; "A refresh is
// on the way" with what is coming in 2027). School-age alternatives cross-linked to our own pages,
// whose facts were checked at their organisers the same day. Spine: walking skeleton, the thinnest
// end-to-end path first (family checked free site-wide on 7 October 2026; team timelines invented).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'competition', tag: 'STUDENT HACKATHONS', label: 'Student hackathons in Australia', blurb: 'Which hackathons Australian students can enter, who is eligible, and how a team builds something that works by the deadline.' },
  slug: 'australian-student-hackathons',
  code: 'hkau',
  accent: '#241060',
  accentRationale: 'Student hackathons in Australia: a late-night ink indigo chosen by hand, muted, at least 10 RGB from every accent in use or claimed',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Student hackathons in Australia',
  title: 'Student Hackathons in Australia: Who Can Enter, How to Prepare',
  description: 'Student hackathons in Australia, checked at the organisers: UNIHACK, GovHack, who can enter, school-age alternatives, and how a team ships a working demo in time.',
  ogDescription: 'An honest guide to hackathons for Australian students: what is actually running, who is eligible, what school-age students can do instead, and the build habit that gets a working demo finished.',
  twitterDescription: 'Australian student hackathons: who can enter, school-age options and how to finish a working demo.',
  pageName: 'Student Hackathons in Australia',
  webPageDescription: 'A guide to hackathons for students in Australia: UNIHACK and GovHack as their organisers describe them, eligibility and timing, project competitions for school-age students, and a worked lesson on building a walking skeleton first so a team always has something to demonstrate.',
  courseDescription: 'Live online coding classes that prepare Australian students for hackathons and team builds: rapid prototyping, Python and JavaScript, using APIs, teamwork and pitching.',
  crumbs: [{ name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Student hackathons',
  navLinks: [
    { href: '#events', label: 'What is on' },
    { href: '#school-age', label: 'Under 18' },
    { href: '#skeleton', label: 'Build lesson' },
    { href: '#ready', label: 'Getting ready' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Australia &middot; Secondary, TAFE and university &middot; Checked at the organisers',
  h1: 'Student hackathons in Australia',
  lede: 'A hackathon squeezes a whole software project into a weekend: form a team, pick a problem, build something that works, and show it to judges before the clock runs out. Lists of "student hackathons" online are often out of date, and many events have age or enrolment rules that rule out school students. This page sets out what the main Australian events say about themselves, who can actually enter, what school-age students can do instead, and the single build habit that most often decides whether a team has a demo at the end. Every detail was checked at the organiser on 7 October 2026. We are independent of all of them.',
  secondaryCta: { href: '#skeleton', label: 'See the build lesson' },
  wa: 'Hello Modern Age Coders, I would like a free class about preparing for a hackathon in Australia.',
  heroNote: 'Checked at each organiser on 7 October 2026 &middot; Independent of every event &middot; Eligibility stated honestly',
  spec: [
    ['UNIHACK 2027', 'March 12 to 14, 2027, 48 hours, hybrid'],
    ['UNIHACK eligibility', '18 or older, university or TAFE student'],
    ['GovHack', 'Open government data, 46 hours; refreshing for 2027'],
    ['Under 18?', 'Project competitions and workshops instead'],
    ['Typical team', 'Mixed skills: code, design, story'],
    ['Core habit', 'A working end-to-end path first'],
    ['We provide', 'Preparation classes in building fast'],
    ['We are not', 'An organiser of these events']
  ],
  capsuleQ: 'In short',
  capsule: 'The biggest student hackathon in Australia, by its own description, is UNIHACK: 48 hours, hybrid, next held March 12 to 14, 2027, open to university and TAFE students aged 18 or older. GovHack, an open government data competition open from high school students upwards, is refreshing its format and says more is coming in 2027. School-age students can enter project competitions such as Young ICT Explorers instead.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses that build hackathon skills',
    lede: 'Building fast and well is a skill that can be practised, and these courses practise it.',
    items: [
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', code: 'HKA / 01', title: 'Hackathon prep for teens', note: 'Python, JavaScript, AI APIs and pitching for ages 13 to 17, built around short team projects.' },
      { course: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', code: 'HKA / 02', title: 'Hackathon prep for adults', note: 'For university and TAFE students heading to events like UNIHACK.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'HKA / 03', title: 'App development for teens', note: 'Mobile apps with React Native, the format many hackathon teams choose.' }
    ]
  },

  sections: [
    {
      id: 'events', tint: 'tint', eyebrow: 'What is on',
      h2: 'UNIHACK and GovHack, as their organisers describe them',
      lede: 'These are the two large Australian hackathons whose own sites we could verify on 7 October 2026. Always confirm details with the organiser before planning around a date.',
      body: [
        { kind: 'table', caption: 'Two Australian hackathons, from their own websites', head: ['', 'UNIHACK', 'GovHack'], rows: [
          ['What it is', '"Australia\'s biggest student hackathon", by its own description', 'An annual open government data competition in Australia and New Zealand'],
          ['Length', '48-hour hybrid weekend', '46 hours'],
          ['Next event', 'March 12 to 14, 2027 (pre-registration open)', 'Refresh under way; the organisers say they will share what is coming in 2027'],
          ['Who can enter', '18 or older and studying at a university or TAFE in Australia or New Zealand', 'Everyone, from high school and first-year university students to experienced developers'],
          ['Theme', 'No official theme; some prizes set their own challenges', 'Reusing official government data sets'],
          ['What teams produce', 'A working hack, judged on polish, difficulty, originality and "wow factor"', 'A proof of concept and a video telling the story of how the data can be reused']
        ] },
        { kind: 'two', mt: true,
          left: [
            'UNIHACK lists four judging criteria: polish, design and execution; technical difficulty; originality and creativity; and what it calls the wow factor. It asks whether the project actually works and whether it does more than put a pretty front end on an existing service.',
            'UNIHACK says everyone is welcome whether just starting or experienced, and that graduates who have finished but not yet had a graduation ceremony are still eligible.'
          ],
          right: [
            'GovHack encourages mixed teams: entrepreneurs, developers, designers, digital media creators, artists, storytellers, researchers and open data enthusiasts. Categories are announced on the Friday night and teams work through the weekend with official data sets.',
            'On its home page GovHack says it is taking time to refresh the event after sixteen years, which is why no 2026 event is listed. Students interested in open data can still explore government data portals in the meantime.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.unihack.net/" rel="noopener" target="_blank">UNIHACK</a>; <a class="ag-inline-link" href="https://govhack.org/" rel="noopener" target="_blank">GovHack</a>. Both read on 7 October 2026. We have no tie to either organiser.' }
      ]
    },
    {
      id: 'school-age', tint: 'deep', eyebrow: 'Under 18',
      h2: 'What school-age students can enter instead',
      lede: 'Most large public hackathons in Australia set age or enrolment rules that leave out school students. These events offer a similar build-and-present experience with rules written for school years.',
      body: [
        { kind: 'table', caption: 'School-age alternatives with similar skills, linked to our checked guides', head: ['Event or program', 'Who it is for', 'How it resembles a hackathon'], rows: [
          ['Young ICT Explorers', 'Years 3 to 12, alone or in teams of up to four', 'Build a digital solution, write it up and pitch it to judges'],
          ['RoboCup Junior Australia', 'Primary and secondary teams, generally 2 to 4 students', 'Design, build and program a robot against a deadline'],
          ['FIRST LEGO League', 'Ages 6 to 16 in three divisions', 'A season-long team project with a robot game and presentation'],
          ['Girls\' Programming Network workshops', 'High school students, as the organisers define them', 'A free full day of building a project with mentors'],
          ['Raspberry Pi Foundation Coding Challenge', 'Years 5 to 12, by skill level', 'Short timed programming tasks, run through the AMT']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Our guides to <a class="ag-inline-link" href="/young-ict-explorers-project-help">Young ICT Explorers</a>, <a class="ag-inline-link" href="/robocup-junior-australia-coding-help">RoboCup Junior Australia</a>, <a class="ag-inline-link" href="/first-lego-league-australia-coding-help">FIRST LEGO League</a> and the <a class="ag-inline-link" href="/girls-programming-network-next-step-australia">Girls\' Programming Network</a> set out each one\'s rules and dates, all checked at source.',
            'Universities and schools also run their own one-day coding events and holiday programs. They change often, so check each host\'s own page for age limits, supervision and dates.'
          ],
          right: [
            'For a student under 18, an event\'s rules on age, supervision and parental consent matter as much as its prize list. Read the code of conduct before registering; UNIHACK and GovHack both publish one.',
            'A school-age student who learns to build a small working thing in a short time will be well placed for UNIHACK or GovHack later, once old enough or enrolled.'
          ] }
      ]
    },
    {
      id: 'skeleton', tint: 'tint', eyebrow: 'Worked lesson',
      h2: 'The walking skeleton: something that works, first',
      lede: 'The most common way to lose a hackathon is to build three impressive parts that never join up. A walking skeleton avoids that: the thinnest possible version of the whole project, working end to end, built before anything else. The two teams below are invented to show the idea.',
      body: [
        { kind: 'three', cells: [
          { h3: 'What a skeleton is', p: 'Every layer of the project exists in its simplest form and is connected: a screen that takes input, code that does one real step with it, and a visible result. It is ugly but it runs.' },
          { h3: 'Why first', p: 'Joining parts is where hidden problems live: data in the wrong format, a service that rejects requests, a page that cannot reach the code. A skeleton finds them in hour five, not hour forty.' },
          { h3: 'Then thicken', p: 'Once the skeleton walks, every hour adds muscle to a working body. If time runs out, the team still has a demo; it is just thinner than planned.' }
        ] },
        { kind: 'table', mt: true, caption: 'Two invented teams in a 48-hour hackathon building an app that suggests a study timetable', head: ['Hours in', 'Team A: build parts separately', 'Team B: skeleton first'], rows: [
          ['0 to 4', 'Idea chosen; each member starts their own part', 'Idea chosen; one-sentence demo script written'],
          ['4 to 8', 'Login screen, database and scheduling code under way', 'Skeleton: type one subject, get one suggested slot on screen'],
          ['8 to 30', 'Each part grows, tested alone', 'Real scheduling rules added to the working path'],
          ['30 to 40', 'First attempt to join the parts; formats do not match', 'Second and third subjects, a calendar view, clean-up'],
          ['40 to 46', 'Fixing the joins; no time to rehearse', 'Feature freeze, testing, pitch rehearsed twice'],
          ['46 to 48', 'Demo crashes on one path', 'Demo runs the scripted path smoothly']
        ] },
        { kind: 'p', mt: true, text: 'Team A was not less talented; it simply discovered its biggest risk last. Team B wrote the demo script at the start, which told it exactly which path through the app had to work, and built that path before adding anything else. The same approach works at school scale: in a six-hour classroom build, the skeleton should run within the first hour. A useful rule of thumb is a feature freeze two hours before the end of a 48-hour event, after which only fixes and rehearsal are allowed.' },
        { kind: 'two', mt: true,
          leftH3: 'Practising it before an event',
          left: [
            'Run a two-hour mini hackathon at home: pick a tiny idea, write a one-sentence demo, and build the skeleton in the first thirty minutes. Repeat monthly with different ideas until starting this way feels natural.',
            'Keep a short list of starters a team knows how to use quickly, such as a basic web page that calls a function, so the skeleton does not burn the first hours.'
          ],
          rightH3: 'What judges see',
          right: [
            'Criteria such as UNIHACK\'s "does it actually work" reward the skeleton habit directly. A modest project that runs during judging usually lands better than an ambitious one that does not.',
            'The habit also suits project competitions like Young ICT Explorers, where judges welcome prototypes but need to see a working core.'
          ] }
      ]
    },
    {
      id: 'ready', tint: '', eyebrow: 'Getting ready',
      h2: 'How we prepare students for team builds',
      lede: 'Hackathon readiness is a mix of coding fluency, teamwork and calm under time pressure. Each can be practised.',
      body: [
        { kind: 'two',
          left: [
            'Lessons cover quick prototyping in Python and JavaScript, calling a public data source or API, building a simple web or mobile front end, splitting work across a team without losing track, and pitching a project in a few minutes.',
            'Students practise in short timed builds with the skeleton rule from the first minute, then review what slowed them down.'
          ],
          right: [
            'We do not build projects for teams at events, and we follow each event\'s rules on outside help. Hackathon work belongs to the team that builds it during the event.',
            'We make no promise of a prize or a placing. We teach students to ship something that works, which is the part they control.'
          ] },
        { kind: 'table', mt: true, caption: 'An eight-week build-up to a first hackathon', head: ['Weeks', 'Focus', 'Ready when'], rows: [
          ['1 and 2', 'A quick starter project the student knows by heart', 'Can create it from scratch in under 20 minutes'],
          ['3 and 4', 'Using a public data source or API', 'Shows real data on screen from a live request'],
          ['5 and 6', 'Team splits and joining work', 'Two students join their parts without breaking either'],
          ['7', 'Two-hour mini hackathon with a skeleton first', 'Has a working demo at the end, however small'],
          ['8', 'Pitching and handling questions', 'Presents in three minutes and answers calmly']
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Growing as a builder',
    h2: 'Four rungs from first project to hackathon team',
    lede: 'Age decides eligibility; these rungs decide readiness.',
    table: { caption: 'From finishing a small project to building fast in a team', head: ['Around', 'Rung', 'The sign it is secure'], rows: [
      ['Years 5 to 8', '1. Finishes small projects', 'Completes a working project in a few sessions'],
      ['Years 7 to 10', '2. Builds against a deadline', 'Has a demo ready on time in a timed build'],
      ['Years 9 to 12', '3. Works in a team', 'Splits and joins work with others smoothly'],
      ['TAFE and university', '4. Ships under pressure', 'Delivers a working, pitched project in a weekend']
    ] },
    left: { h3: 'If a build falls apart', ps: [
      'Go back to the last version that worked and rebuild the path from there. Version control makes this painless.',
      'Shrink the demo, not the quality. A smaller thing that works is still a real result.'
    ] },
    right: { h3: 'Related reading', ps: [
      'The <a class="ag-inline-link" href="/australian-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists coding and maths contests by month.',
      'For the coding habit behind good team code, see <a class="ag-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy-paste</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who build',
    lede: 'Grouped by stage. Each card opens a full course outline.',
    bands: [
      { num: 'I', h3: 'Hackathon preparation', sub: 'Kids, teens and adults', courses: [
        { code: 'HKA / HP / 01', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep for kids', blurb: 'Ages 8 to 12, projects and pitching.' },
        { code: 'HKA / HP / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep for teens', blurb: 'Ages 13 to 17, apps and AI APIs.' },
        { code: 'HKA / HP / 03', slug: 'hackathon-prep-for-adults-professionals-coding-ai-innovation-course', title: 'Hackathon prep for adults', blurb: 'University, TAFE and beyond.' }
      ] },
      { num: 'II', h3: 'Building blocks', sub: 'Fast front ends and logic', courses: [
        { code: 'HKA / BB / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'React Native mobile apps.' },
        { code: 'HKA / BB / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Quick, readable back-end code.' },
        { code: 'HKA / BB / 03', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Pages that look finished fast.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Data and AI', courses: [
        { code: 'HKA / GF / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Working with real data sets.' },
        { code: 'HKA / GF / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Clean logic under time pressure.' },
        { code: 'HKA / GF / 03', slug: 'creative-coding-animation-mastery', title: 'Creative coding', blurb: 'Visual demos with p5.js.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live online practice builds',
    lede: 'Lessons are taught live from India, which runs behind Australia: Canberra is four and a half hours ahead of India time in winter and five and a half in summer, and Perth two and a half hours all year. Australian afternoons and evenings fall in Indian working hours, which suits timed practice builds after school or university.',
    slots: [
      { time: 'Weekday evening', l: 'Short builds with the skeleton rule.' },
      { time: 'Weekend', l: 'A two-hour mini hackathon with review.' },
      { time: 'Before an event', l: 'Pitch practice and starter projects polished.' }
    ],
    cells: [
      { h3: 'Working first', p: 'Every build starts with a path that runs end to end.' },
      { h3: 'Real data', p: 'Practice with public data sources and APIs.' },
      { h3: 'Team habits', p: 'Splitting and joining work without breaking it.' },
      { h3: 'Groups of five to ten', p: 'Peers to build and pitch alongside.' },
      { h3: 'One-to-one option', p: 'For a student preparing for a specific event.' },
      { h3: 'No prize promised', p: 'Judges decide; we teach students to ship.' }
    ]
  },

  projectsH2: 'Projects our students shipped',
  projectsLede: 'Built by students on their own time. Browse them in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews, reproduced exactly as their authors wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Lessons are billed monthly in US dollars at our international rate, with no joining fee and no lock-in. Hackathon registration is handled by each event\'s organiser, separately from us.',
    free: ['A first practice build with a teacher, free', 'An honest view of readiness for a first event', 'No card needed'],
    group: ['Five to ten students at a similar level', 'One teacher for the term', 'Timed builds reviewed together', 'A certificate when finished'],
    one: ['A teacher for one student', 'Preparation aimed at a chosen event', 'Weekly times that fit study']
  },

  faq: {
    eyebrow: 'Questions about hackathons',
    h2: 'What students and parents ask',
    items: [
      { q: 'What is a hackathon?', a: 'An event where teams build a working software project from scratch in a fixed time, often a weekend, and present it to judges at the end.' },
      { q: 'What is a walking skeleton?', a: 'The thinnest version of a whole project that works end to end, from input to visible result, built before any other feature so the team always has something to demonstrate.' },
      { q: 'Can school students enter UNIHACK?', a: 'No. UNIHACK says entrants must be 18 or older and studying at a university or TAFE in Australia or New Zealand at the time of the event.' },
      { q: 'When is the next UNIHACK?', a: 'UNIHACK lists March 12 to 14, 2027 for its next event, a 48-hour hybrid hackathon, with pre-registration open.' },
      { q: 'Is GovHack running in 2026?', a: 'GovHack\'s site says it is refreshing the event after sixteen years and will share what is coming in 2027, so no 2026 event is listed.' },
      { q: 'What can under-18s do instead?', a: 'Project competitions and workshops written for school years, such as Young ICT Explorers, RoboCup Junior Australia, FIRST LEGO League and Girls\' Programming Network workshops.' },
      { q: 'Do you need to be an expert coder?', a: 'No. Both UNIHACK and GovHack welcome mixed experience and mixed skills, including design and storytelling. Being able to build a small thing quickly helps most.' },
      { q: 'Will you help my team during the event?', a: 'No. We prepare students beforehand. During an event, the work belongs to the team and each event\'s rules on outside help apply.' },
      { q: 'How long does preparation take?', a: 'Our eight-week build-up suits a first event: a starter project, using an API, team habits, a mini hackathon and pitch practice.' },
      { q: 'What should a team decide first at a hackathon?', a: 'The demo: one sentence describing exactly what will be shown working at the end. Everything else follows from that path.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for Australian students',
    lede: 'Project competitions and coding pathways.',
    items: [
      { href: '/young-ict-explorers-project-help', label: 'Young ICT Explorers', p: 'A national project competition for Years 3 to 12.' },
      { href: '/robocup-junior-australia-coding-help', label: 'RoboCup Junior Australia', p: 'Team robotics with deadlines.' },
      { href: '/first-lego-league-australia-coding-help', label: 'FIRST LEGO League', p: 'A season-long team build.' },
      { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar', p: 'Every contest by month.' },
      { href: '/ai-classes-for-teens-australia', label: 'AI classes for teens', p: 'Using and building with AI.' },
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Every state and every age.' }
    ]
  },

  start: {
    h2: 'Book a free practice build',
    lede: 'Tell us the student\'s age, what they can already build and which event they have in mind. The free class runs a short build with the skeleton rule and ends with a preparation plan.',
    readFirst: 'Want more detail first? Course outlines are on the <a class="ag-inline-link" href="/course-atlas">course atlas</a>, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> explains our approach.',
    note: 'The quickest way to reach us is usually WhatsApp. The number is Indian since we are based in India; we have no office in Australia.',
    formNote: 'No card and no commitment. We reply once to book a time.'
  },

  footer: {
    cols: [
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/ai-classes-for-teens-australia', label: 'AI for teens' },
        { href: '/game-programming-course-australia', label: 'Game programming' },
        { href: '/online-maths-tutoring-australia', label: 'Maths tutoring' }
      ] },
      { h4: 'Build events', links: [
        { href: '/young-ict-explorers-project-help', label: 'Young ICT Explorers' },
        { href: '/australian-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/course-atlas', label: 'Course atlas' }
      ] }
    ],
    bottomRight: 'Independent of UNIHACK, GovHack and every event named; checked at source'
  },

  personalityCss: `
.ag-root.ag-hkau .ag-hero-grid { gap: clamp(1rem, 2.3vw, 2rem); }
.ag-root.ag-hkau .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-hkau .ag-capsule { border-left-width: 8px; }
.ag-root.ag-hkau .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-hkau .ag-table caption { font-style: italic; }
.ag-root.ag-hkau .ag-table th { letter-spacing: 0.01em; }
.ag-root.ag-hkau .ag-spec dt { letter-spacing: 0.12em; }
.ag-root.ag-hkau .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Organisers\' own sites, read 7 October 2026. UNIHACK: "UNIHACK 2027 - March 12-14, 2027"; "Welcome to Australia\'s biggest student hackathon"; "Join 1000+ students for a 48-hour hybrid hackathon weekend"; "You must be 18 years or older, and studying as a university/TAFE student in Australia or New Zealand at the time of the event"; "Officially, we do not have a theme or prompt"; judging criteria Polish, Design, and Execution; Technical Difficulty; Originality and Creativity; Wow Factor; Code of Conduct linked. GovHack: "A refresh is on the way"; "We can\'t wait to share what\'s coming in 2027"; "GovHack is an annual open government data competition held all over Australia and New Zealand"; "In 46 hours teams create a proof of concept and a video"; "From high school and 1st year university students through to hardened developers"; categories announced on the Friday night; Code of Conduct linked.',
    localProject: 'An invented comparison of two teams in a 48-hour hackathon building a study timetable app: Team A builds parts separately and first joins them at hours 30 to 40, ending with a demo that crashes; Team B writes a one-sentence demo script, builds a walking skeleton (one subject in, one suggested slot out) by hour 8, thickens it, freezes features at hour 46 and rehearses twice. School-scale rule: skeleton within the first hour of a six-hour build.',
    requiredMentions: ['UNIHACK', 'March 12 to 14, 2027', 'GovHack', '46 hours', 'walking skeleton', 'feature freeze', 'TAFE', 'open government data', 'study timetable'],
    sources: [
      { claim: 'UNIHACK home page: 2027 dates, format, eligibility, theme, judging criteria.', url: 'https://www.unihack.net/' },
      { claim: 'GovHack home page: refresh notice, 2027, description, 46-hour format, who should come.', url: 'https://govhack.org/' },
      { claim: 'Young ICT Explorers: Years 3 to 12 project competition used as a school-age alternative.', url: 'https://www.youngictexplorers.net.au/' },
      { claim: 'Australian Maths Trust, Raspberry Pi Foundation Coding Challenge: Years 5 to 12, divisions by skill.', url: 'https://amt.edu.au/rpfcc' }
    ],
    rejectedClaims: [
      'Lists of other "student hackathons" found in summaries: not used unless the organiser\'s own page could be read.',
      'Any GovHack 2026 date: none published; the site describes a refresh with 2027 to come.',
      'Prize values for any event: not shown (one-currency rule; not needed).',
      'Claims about our own free hackathon events beyond what each course page states: not repeated here.',
      'Any promise of a prize or placing: none made.',
      'Affiliation with UNIHACK, GovHack or any event named: none; stated on the page.'
    ]
  }
};
