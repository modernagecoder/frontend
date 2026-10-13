'use strict';
// Coding classes near me, Australia: online or local? (ag- topic door; AU cluster Phase 2, row 30).
// Demand: en-AU autocomplete "coding classes for kids near me", "coding classes for kids near me fees",
// "coding classes for kids near me reviews", "coding school for kids near sydney".
// Sources, read raw on 7 October 2026:
//  - ABS, Regional population, 2024-25 (released 31 March 2026): capital cities total 18,750,888 at 30 June 2025;
//    population density 3.6 people per square kilometre; centre of population around 30 kilometres east of the
//    Ivanhoe township in western New South Wales, moved 2.0 kilometres west in 2024-25.
//  - Digital Technologies Hub, After school activities and courses: "see what is on offer close to you".
//  - ABN Lookup (abr.business.gov.au): free access to public ABN information from the Australian Business Register.
//  - Wineburg and McGrew (2019), "Lateral Reading and the Nature of Expertise", Teachers College Record 121(11),
//    DOI 10.1177/016146811912101102 (metadata confirmed via Crossref).
// Lesson family: lateral reading (judging a provider by leaving its own website and reading what others say).

module.exports = {
  cluster: 'ag',
  clusterName: 'Australia',
  hub: { group: 'guide', tag: 'NEAR ME, ONLINE OR LOCAL', blurb: 'An honest answer to "coding classes near me" in Australia: what local and online classes each offer, and how to check any provider before you book.' },
  slug: 'coding-classes-near-me-australia-online-or-local',
  code: 'nmau',
  accent: '#305068',
  accentRationale: 'Coding classes near me, Australia: a muted harbour slate chosen by hand, at least 11 RGB units from every accent in use and outside the cyan band',
  pageType: 'market',
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  routeLabel: 'Coding classes near me, Australia',
  title: 'Coding Classes Near Me in Australia: Online or Local?',
  description: 'Searching coding classes near me in Australia? An honest guide to local versus online classes, what each suits, and how to check any provider before you book.',
  ogDescription: 'Local or online coding classes for an Australian child? What each format gives, where distance matters, and a five-minute method for checking any provider, us included.',
  twitterDescription: 'Coding classes near me in Australia: local or online, what each suits, and how to check a provider before booking.',
  pageName: 'Coding Classes Near Me in Australia',
  webPageDescription: 'A guide for Australian families searching for coding classes nearby: comparing local and online formats and checking providers with lateral reading.',
  courseDescription: 'Live online coding classes for Australian children and teens, taught by a teacher over video in small groups or one to one, at times set for each state.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Australia', href: '/coding-classes-in-australia' }],
  crumbLabel: 'Coding classes near me',
  navLinks: [
    { href: '#straight-answer', label: 'Straight answer' },
    { href: '#distance', label: 'Distance' },
    { href: '#compare', label: 'Local or online' },
    { href: '#check', label: 'Check any provider' },
    { href: '#questions', label: 'Questions to ask' }
  ],
  eyebrow: 'Australia &middot; Kids, teens and adults &middot; Local or online',
  h1: 'Coding classes near me in Australia',
  lede: 'Type "coding classes near me" into a phone in Australia and the results mix three different things: a room down the road, a holiday program in the next suburb, and online classes that are "near" only in the sense that they come to your kitchen table. We belong to the third group, and we would rather say so in the first line than pretend otherwise. This page explains what a local class gives that an online one cannot, what online gives that local cannot, how much distance really matters across a country this spread out, and a five-minute method any parent can use to check a provider before handing over a child\'s afternoons.',
  secondaryCta: { href: '#compare', label: 'Local or online' },
  wa: 'Hello Modern Age Coders, I was searching for coding classes near me in Australia. Could we try a free online lesson to compare?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; online, so no drive across town',
  spec: [
    ['We are', 'Online only, taught from India'],
    ['Near you', 'Wherever you have internet'],
    ['Ages', '6 to 67'],
    ['Subjects', 'Coding, AI and maths'],
    ['Format', 'Live video lessons'],
    ['Group', 'Five to ten, or one to one'],
    ['Times', 'Set for your state'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: '"Coding classes near me" can mean a local room or a live online class. A local class offers face-to-face contact and no screen between teacher and child; an online class offers a wider choice of teachers and levels, no travel, and equal access in regional Australia. Modern Age Coders teaches online only, from India. Before booking any provider, local or online, check what other sources say about it.',

  picks: {
    eyebrow: 'If online suits you',
    h2: 'Three places Australian families start online',
    lede: 'Chosen by age. Each comes to you, wherever you live; the free first lesson settles which one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'NMAU / 01', title: 'Primary years coding', note: 'Ages 6 to 12. Blocks to apps over a school year, with the same teacher each week.' },
      { course: 'python-complete-masterclass-teens', code: 'NMAU / 02', title: 'Python for secondary students', note: 'Ages 13 to 18. Real Python from the first lesson, at a pace set by the group.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'NMAU / 03', title: 'Python for adults', note: 'Adults and university students. Evenings or weekends, from zero to useful.' }
    ]
  },

  sections: [
    {
      id: 'straight-answer', tint: 'tint', eyebrow: 'Straight answer',
      h2: 'Are we near you?',
      lede: 'Only in the online sense. We have no classroom, office or shopfront in Australia. Every lesson is taught live over video by a teacher in India.',
      body: [
        { kind: 'two',
          leftH3: 'What that means in practice',
          left: [
            'Your child joins from home on a laptop or desktop with a webcam. A teacher is on the call for the whole lesson, and the group is small enough for everyone to share a screen.',
            'Lesson times are set in your own state\'s time. Our teachers\' working day overlaps with Australian afternoons and evenings, which is what makes after-school slots possible.'
          ],
          rightH3: 'What it does not mean',
          right: [
            'It does not mean recorded videos. Every lesson is live, and children are never left alone in a session.',
            'It does not mean we are a local business. If face-to-face teaching in your suburb is what you want, a local provider is the right search, and the rest of this page will help you check one.'
          ] },
        { kind: 'p', mt: true, html: 'The Australian Government\'s Digital Technologies Hub keeps a short family guide to after-school coding programs, saying some "can be completed online in the comfort of your own home" and inviting families to "see what is on offer close to you". That is a fair way to frame the search: start with what exists near you, then decide whether online fills a gap.' },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://www.digitaltechnologieshub.edu.au/for-families/ideas-to-get-started/after-school-activities-and-courses/" rel="noopener" target="_blank">Digital Technologies Hub, After school activities and courses</a>.' }
      ]
    },
    {
      id: 'distance', tint: 'deep', eyebrow: 'Distance',
      h2: 'How far "near" is in Australia',
      lede: 'Most Australians live in a capital city, but a large share do not, and the country is so spread out that "near me" means very different things in Parramatta and in Parkes.',
      body: [
        { kind: 'table', caption: 'Australia\'s capital cities, estimated resident population at 30 June 2025 (ABS)', head: ['Capital city', 'Population'], rows: [
          ['Sydney', '5,638,830'],
          ['Melbourne', '5,435,590'],
          ['Brisbane', '2,833,524'],
          ['Perth', '2,452,765'],
          ['Adelaide', '1,491,015'],
          ['Canberra', '484,630'],
          ['Hobart', '255,250'],
          ['Darwin', '159,284'],
          ['Total capital cities, as published', '18,750,888']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A thinly spread country',
          left: [
            'The ABS puts Australia\'s population density at 3.6 people per square kilometre. Even in big cities, a specialist class can mean an hour in traffic each way.',
            'Outside the capitals, the nearest coding class with a child\'s exact level and interest may simply not exist within driving distance.'
          ],
          rightH3: 'Where the middle is',
          right: [
            'The ABS calculates a centre of population, the point Australians are, on average, gathered around. In 2025 it was "around 30 kilometres east of the Ivanhoe township in western New South Wales", having moved 2.0 kilometres west in a year.',
            'It is a reminder that the average Australian is far from any single city, and that a class "near me" is a different promise in every postcode.'
          ] },
        { kind: 'source', html: 'Source, read 7 October 2026: <a class="ag-inline-link" href="https://www.abs.gov.au/statistics/people/population/regional-population/latest-release" rel="noopener" target="_blank">ABS, Regional population, 2024-25</a>, released 31 March 2026. The total is the ABS\'s own published figure.' }
      ]
    },
    {
      id: 'compare', tint: 'tint', eyebrow: 'Local or online',
      h2: 'What each format is genuinely better at',
      lede: 'Neither format wins on everything. A fair comparison helps you pick for your child rather than for convenience alone.',
      body: [
        { kind: 'table', caption: 'Local and online coding classes compared, by what each tends to do well', head: ['Factor', 'A local class tends to', 'An online class tends to'], rows: [
          ['Contact', 'Give face-to-face time and a shared room', 'Give one-to-one attention through a shared screen'],
          ['Choice', 'Offer what suits the local group', 'Offer more levels, languages and subjects'],
          ['Travel', 'Need a drop-off and pick-up', 'Need only a laptop and a quiet corner'],
          ['Regional families', 'Be scarce outside big centres', 'Be the same everywhere with internet'],
          ['Very young children', 'Suit those who struggle to focus on a screen', 'Suit those comfortable with a mouse and a call'],
          ['Social life', 'Build local friendships', 'Mix children from many places']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Choose local when', p: 'Your child is very young, finds screens tiring, or needs the social side of a club in their own suburb, and a good class runs close by.' },
          { h3: 'Choose online when', p: 'The local options do not match your child\'s level, interest or timetable, or the nearest class is a long drive away.' },
          { h3: 'Use both when', p: 'A free local club gives friends and fun, while a weekly online class gives a planned sequence and feedback. Many families do exactly this.' }
        ] },
        { kind: 'p', mt: true, html: 'If cost is part of the decision, our <a class="ag-inline-link" href="/coding-classes-cost-australia">guide to what coding classes cost in Australia</a> works it out per lesson and per term, and our page on <a class="ag-inline-link" href="/free-coding-classes-for-kids-australia-what-you-get">free coding options for kids</a> covers volunteer clubs and self-guided projects.' }
      ]
    },
    {
      id: 'check', tint: 'deep', eyebrow: 'Check any provider',
      h2: 'Lateral reading: the five-minute check',
      lede: 'Researchers who studied how professional fact-checkers judge websites found that experts leave a site quickly and read what other sources say about it. They called the habit lateral reading. It works just as well for choosing a coding class.',
      body: [
        { kind: 'table', caption: 'A lateral reading check for any coding provider, local or online', head: ['Step', 'What to do', 'What you learn'], rows: [
          ['1. Leave the website', 'Open a new tab instead of reading the provider\'s own claims', 'A provider\'s site will always say it is excellent'],
          ['2. Search the name', 'Search the provider\'s name with the word "reviews"', 'What families say when the provider is not choosing the quotes'],
          ['3. Check the business', 'For an Australian business, look up its ABN on ABN Lookup', 'Whether the business is registered and active'],
          ['4. Ask where teachers are', 'Ask who teaches and from where', 'Whether lessons are local, interstate or overseas'],
          ['5. Try before paying', 'Book a free or trial lesson', 'How a real lesson feels for your child']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Where the idea comes from',
          left: [
            'Sam Wineburg and Sarah McGrew described the method in a 2019 paper in the journal Teachers College Record titled "Lateral Reading and the Nature of Expertise: Reading Less and Learning More When Evaluating Digital Information".',
            'The key move is the first one: read less of the site itself, and more of what is said about it elsewhere.'
          ],
          rightH3: 'The register to use',
          right: [
            'ABN Lookup, run by the Australian Government, "gives you free access to public Australian Business Number (ABN) information from the Australian Business Register", and lists among its users "The public - to check a business before buying".',
            'An overseas provider may not appear there at all, which is not a red flag in itself, but it is a reason to ask more questions. Apply the same check to us.'
          ] },
        { kind: 'p', mt: true, html: 'Lateral reading also makes a fine first project for an older child: give them three providers, a timer, and the five steps, and ask them to report back. They practise searching, judging sources and writing a short summary, all skills the Digital Technologies curriculum values.' },
        { kind: 'source', html: 'Sources: Wineburg, S. and McGrew, S. (2019), Teachers College Record 121(11), <a class="ag-inline-link" href="https://doi.org/10.1177/016146811912101102" rel="noopener" target="_blank">doi.org/10.1177/016146811912101102</a> (details confirmed via Crossref); <a class="ag-inline-link" href="https://abr.business.gov.au/" rel="noopener" target="_blank">ABN Lookup</a>, read 7 October 2026.' }
      ]
    },
    {
      id: 'questions', tint: '', eyebrow: 'Questions to ask',
      h2: 'Questions worth asking any coding class',
      lede: 'Whether the class is in your suburb or on a screen, these questions separate a good fit from a good brochure.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Who teaches?', p: 'One named teacher each week, or whoever is free? Children learn far more from a teacher who remembers last week.' },
          { h3: 'How big is the group?', p: 'Ask for the maximum, not the average. Our groups are fifteen to twenty, or one to one.' },
          { h3: 'What will my child build?', p: 'Ask to see projects from children of the same age, not just the most impressive ones.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'What happens when they are stuck?', p: 'Help in the lesson, or a wait until next week? Momentum matters at every age.' },
          { h3: 'How are parents kept in the loop?', p: 'Seeing the finished project each week is the simplest form of reporting.' },
          { h3: 'Can we leave easily?', p: 'Monthly payment with no lock-in is a sign a provider expects children to stay because they enjoy it.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From a search to a settled routine',
    lede: 'How most families we talk to move from typing "near me" to a weekly habit.',
    table: { caption: 'Four steps from searching to a routine', head: ['Step', 'What happens'], rows: [
      ['1. Search', 'A list of local rooms, holiday programs and online classes'],
      ['2. Check', 'Five minutes of lateral reading on the two or three that look right'],
      ['3. Try', 'A free or trial lesson, ideally with your child choosing what to build'],
      ['4. Settle', 'A weekly slot that survives sport, holidays and homework']
    ] },
    left: { h3: 'If you find a great local class', ps: [
      'Take it, especially for a young child who enjoys being in a room with others.',
      'Online can always come later, for a language or level the local class does not offer.'
    ] },
    right: { h3: 'If nothing local fits', ps: [
      'That is common outside the big cities and for less usual interests such as AI agents or app development.',
      'Online removes the distance problem entirely, as long as the connection is steady.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine online courses that come to you',
    lede: 'Arranged by age group. The free first lesson places your child.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'Ages 6 to 12', courses: [
        { code: 'NMAU / PRI / 01', slug: 'scratch-programming-complete-course', title: 'Games in Scratch', blurb: 'Block coding that ends in a playable game.' },
        { code: 'NMAU / PRI / 02', slug: 'python-ai-kids-masterclass', title: 'First Python for children', blurb: 'Typed code from about age nine.' },
        { code: 'NMAU / PRI / 03', slug: 'minecraft-coding-for-kids-course', title: 'Coding inside Minecraft', blurb: 'MakeCode in a familiar world.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Ages 13 to 18', courses: [
        { code: 'NMAU / SEC / 01', slug: 'python-complete-masterclass-teens', title: 'Python, beginner to advanced', blurb: 'A full course for teenagers.' },
        { code: 'NMAU / SEC / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Websites and web apps', blurb: 'React and Node.js for teens.' },
        { code: 'NMAU / SEC / 03', slug: 'ai-ml-masterclass-teens', title: 'Machine learning for teens', blurb: 'From Python to real models.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'NMAU / ADL / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'For adults starting fresh.' },
        { code: 'NMAU / ADL / 02', slug: 'data-analysis-mastery-course-college', title: 'Data analysis', blurb: 'Excel, SQL and Python together.' },
        { code: 'NMAU / ADL / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI and agents', blurb: 'LLMs, retrieval and agents.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'An online class that behaves like a local one',
    lede: 'The things that make a local class work, a regular teacher, a regular slot and a small group, are the things we keep.',
    slots: [
      { time: 'After school', l: 'Weekday afternoons in your state\'s time.' },
      { time: 'Evenings', l: 'Popular with teens and adults.' },
      { time: 'Weekends', l: 'Saturday and Sunday slots for busy weeks.' }
    ],
    cells: [
      { h3: 'One teacher', p: 'The same person each week, who knows your child\'s projects.' },
      { h3: 'One slot', p: 'A fixed weekly time, like a local class, so it becomes routine.' },
      { h3: 'One small group', p: 'Fifteen to twenty learners at a similar level, or private lessons.' },
      { h3: 'No travel', p: 'No drop-off, no car park, no waiting in a foyer.' },
      { h3: 'Every postcode', p: 'The same class in Broome, Ballarat or Bondi.' },
      { h3: 'Parents welcome', p: 'Sit in on any lesson, especially at the start.' }
    ]
  },

  projectsH2: 'What our online students have made',
  projectsLede: 'Projects finished by learners who joined from home. A larger, sortable set lives on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from families, reproduced exactly, typos and all.',

  fees: {
    h2: 'Fees for online classes',
    lede: 'One price in US dollars applies in every country outside India, billed month by month. There is no enrolment fee, and you can finish after any month without breaking a term contract.',
    free: ['A live first lesson at no charge', 'A teacher\'s honest view of fit', 'No payment details needed'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Matched by age and level', 'Month to month'],
    one: ['A teacher to yourself', 'Times around your week', 'Pace set by the learner']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'What Australian families ask about classes near them',
    items: [
      { q: 'Do you have coding classes near me in Australia?', a: 'Not in person. We teach online only, live over video, from India. That means the same class is available in every Australian city and town with a reliable internet connection.' },
      { q: 'What is lateral reading?', a: 'Lateral reading is a way of judging a website by leaving it and reading what other sources say about it, rather than trusting its own claims. Researchers found professional fact-checkers do this, and it works well for checking any provider.' },
      { q: 'Is an online coding class as good as a local one?', a: 'For many children, yes, especially when the online class is live, small and run by a regular teacher. Very young children or those who tire of screens may do better in a room. A free first lesson is the quickest way to tell.' },
      { q: 'How do I check whether a coding provider is legitimate?', a: 'Leave its website and read what others say: search its name with "reviews", check an Australian business on ABN Lookup, ask who teaches and from where, and book a trial lesson before paying.' },
      { q: 'Do you have an Australian office or phone number?', a: 'No. We are based in India, so WhatsApp replies come from a +91 number, and there is no Australian office, address or shopfront.' },
      { q: 'What if I live in regional Australia?', a: 'Online works the same in regional towns as in capital cities, provided the internet connection is steady enough for a video call.' },
      { q: 'What times are online lessons in my state?', a: 'Lessons are set in your local time on weekday afternoons, evenings or weekends. Our teachers\' day overlaps with Australian afternoons because India runs between two and a half and five and a half hours behind Australian clocks.' },
      { q: 'Can my child do a local club and an online class?', a: 'Yes. Many families combine a free local club for friends and fun with a weekly online class for a planned sequence and feedback.' },
      { q: 'What do I need for an online class?', a: 'A laptop or desktop with a keyboard, a mouse or trackpad, a webcam, headphones and a steady connection. A tablet alone is not enough for most courses.' },
      { q: 'How much do your online classes cost?', a: 'The first lesson is free and needs no card. After that, families pay monthly with no joining fee and no term lock-in; the fees section on this page shows the group and one-to-one prices.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Next steps for families weighing local against online.',
    items: [
      { href: '/coding-classes-in-australia', label: 'Coding classes in Australia', p: 'Our main page for Australian families.' },
      { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free coding options for kids', p: 'Clubs, projects and one-off activities.' },
      { href: '/coding-classes-cost-australia', label: 'What coding classes cost', p: 'Per lesson and per term.' },
      { href: '/online-coding-classes-for-kids-australia', label: 'Online classes for kids', p: 'Year levels and time zones by state.' },
      { href: '/best-coding-classes-in-sydney', label: 'Coding classes in Sydney', p: 'For families in Greater Sydney.' },
      { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Vibe coding and AI agents in Melbourne', p: 'For Melbourne teens and adults.' }
    ]
  },

  start: {
    h2: 'Try an online class before you decide',
    lede: 'Leave your number and a good time to call. Your child joins a real lesson with a teacher, and you can judge for yourself whether online works for your family.',
    readFirst: 'Want to read more first? See <a class="ag-inline-link" href="/how-we-teach">how a lesson runs</a> or look through <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'Messages on WhatsApp from Australia are answered fastest, from a +91 Indian number. We have no Australian office, address or phone line.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Choosing a class', links: [
        { href: '/free-coding-classes-for-kids-australia-what-you-get', label: 'Free options' },
        { href: '/coding-classes-cost-australia', label: 'What classes cost' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Australia', links: [
        { href: '/coding-classes-in-australia', label: 'Coding classes in Australia' },
        { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
        { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
        { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
      ] }
    ],
    bottomRight: 'Near is a connection, not a postcode'
  },

  personalityCss: `
.ag-root.ag-nmau .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-nmau .ag-capsule { border-left-width: 2px; border-radius: 10px; }
.ag-root.ag-nmau .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-nmau .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-nmau .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-nmau .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Australia, local versus online coding classes. ABS, Regional population, 2024-25 (released 31 March 2026): capital cities at 30 June 2025 Sydney 5,638,830, Melbourne 5,435,590, Brisbane 2,833,524, Adelaide 1,491,015, Perth 2,452,765, Hobart 255,250, Darwin 159,284, Canberra 484,630, total capital cities 18,750,888 (published total); density 3.6 people per square kilometre; centre of population "around 30 kilometres east of the Ivanhoe township in western New South Wales", moved 2.0 kilometres west in 2024-25. Digital Technologies Hub: "see what is on offer close to you". ABN Lookup: free access to public ABN information from the Australian Business Register.',
    localProject: 'Lateral reading for choosing a provider: a five-step check (leave the site, search the name with reviews, check an Australian business on ABN Lookup, ask where teachers are, try before paying), grounded in Wineburg and McGrew (2019), and set as a timed research task for an older child comparing three providers. Lesson family: lateral reading.',
    requiredMentions: ['lateral reading', 'Wineburg', 'Teachers College Record', '18,750,888', '3.6 people per square kilometre', 'Ivanhoe township', 'ABN Lookup', 'Australian Business Register', 'see what is on offer close to you'],
    sources: [
      { claim: 'ABS, Regional population, 2024-25: capital city populations, total capital cities 18,750,888, density 3.6 people per square kilometre, centre of population near Ivanhoe.', url: 'https://www.abs.gov.au/statistics/people/population/regional-population/latest-release' },
      { claim: 'Digital Technologies Hub, After school activities and courses: quoted wording.', url: 'https://www.digitaltechnologieshub.edu.au/for-families/ideas-to-get-started/after-school-activities-and-courses/' },
      { claim: 'ABN Lookup home page: quoted description and intended users.', url: 'https://abr.business.gov.au/' },
      { claim: 'Wineburg and McGrew (2019), Lateral Reading and the Nature of Expertise, Teachers College Record 121(11) (Crossref metadata).', url: 'https://doi.org/10.1177/016146811912101102' }
    ],
    rejectedClaims: [
      'Whether Modern Age Coders holds an Australian Business Number: not stated; the page says an overseas provider may not appear on ABN Lookup and asks families to check us too.',
      'The share of Australians living outside capital cities: not computed, because no national total was read on the same page and parts are never summed into a share.',
      'Findings of the Wineburg and McGrew paper beyond its title and the lateral reading habit: the full text was not read raw, so no statistics from it are quoted.',
      'Any count of local coding providers in a city: no primary source.',
      'Internet speed or NBN coverage figures: no primary source read raw.'
    ]
  }
};
