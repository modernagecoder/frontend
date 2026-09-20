'use strict';
// Sentinus Young Innovators coding help (ag- competition spoke, UK cluster Phase 2).
// Facts read at sentinus.co.uk on 20 September 2026:
//  - Sentinus Young Innovators 2026 chooses Northern Ireland's young scientist, engineer, mathematician
//    and coder of the year, with an overall Sentinus Young Innovator 2026 above them.
//  - "Applications must be aged under 19 on July 1st 2027".
//  - Scientists submit a poster by 29 September 2026 and engineers by 30 September 2026; for the
//    mathematics and coding categories there is "an assessment in late September 2026, to select the
//    finalists".
//  - Entries in the scientist and engineer categories may be "Individuals" or "Teams of up to 3 people";
//    the mathematics and coding categories are individual.
//  - The final is "Thursday 26th November 2026" at Ulster University, Belfast, where mathematics
//    finalists face "a 90 minutes live maths challenge" and coders "a 90 minute coding challenge",
//    judged by a panel of industry experts.
//  - The overall winner receives "a funded trip to take part in International Science and Engineering
//    Fair 2027, in the USA"; the other category winners receive a cash prize, published in pounds and
//    NOT printed here.
// Spine: the age rule is the Northern Ireland school-year rule. Our arithmetic of 20 September 2026:
// under 19 on 1 July 2027 means born after 1 July 2008. Northern Ireland's compulsory school age
// cut-off is 2 July (read at the Department of Education for the UK hub page on 19 September 2026), so
// an NI school year runs from 2 July to 1 July. The Sentinus window therefore lines up exactly with an
// NI year-group boundary: a pupil born 30 June 2008 is too old and one born 2 July 2008 is eligible,
// and they are a school year apart. The same rule applied in England, where the cut-off is 1 September,
// would cut across a year group instead.
// No Sentinus task is reproduced.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'competition', tag: 'SENTINUS', label: 'Sentinus Young Innovators', blurb: 'Northern Ireland\'s own STEM final, where the coding round is ninety live minutes in Belfast.' },
  slug: 'sentinus-young-innovators-coding-help',
  code: 'syi',
  accent: '#5B115F',
  accentRationale: 'Sentinus: a deep purple-magenta from the solver (10.08:1 on every paper tint), darker than the Perse magenta and redder than the cipher indigo-violet',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Sentinus Young Innovators coding help',
  title: 'Sentinus Young Innovators Coding Help | Young Coder of the Year',
  description: 'Help for Northern Ireland students entering Sentinus Young Innovators: who is eligible, the poster stage, and the 90-minute live coding final in Belfast.',
  ogDescription: 'The Sentinus coding final is ninety live minutes at Ulster University. Its age rule turns out to line up exactly with a Northern Ireland school year.',
  twitterDescription: 'Sentinus Young Innovators help: Young Coder of the Year, and a live ninety-minute final in Belfast.',
  pageName: 'Sentinus Young Innovators Coding Help',
  webPageDescription: 'Guidance for Northern Ireland students entering Sentinus Young Innovators, covering eligibility, the four category titles, the poster and assessment stages and the live ninety-minute coding and mathematics finals at Ulster University.',
  courseDescription: 'Live online coding and mathematics classes for Northern Ireland students preparing for a live timed STEM final.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'UK competitions calendar', href: '/uk-coding-maths-and-ai-competitions-calendar' }],
  crumbLabel: 'Sentinus Young Innovators',
  navLinks: [
    { href: '#competition', label: 'The competition' },
    { href: '#agerule', label: 'The age rule' },
    { href: '#live', label: 'Ninety live minutes' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Northern Ireland &middot; Under 19 &middot; Final 26 November 2026',
  h1: 'Sentinus Young Innovators coding help',
  lede: 'Northern Ireland runs its own STEM competition and almost nobody outside it knows. Sentinus Young Innovators picks a Young Scientist, a Young Engineer, a Young Mathematician and a Young Coder of the Year, and unlike almost every project competition in Britain, the coding and mathematics titles are not decided by something submitted from home. Finalists come to Ulster University in Belfast on a Thursday in November and are given ninety minutes, live, in front of a panel. You cannot polish that, and you cannot outsource it, which makes preparing for it a completely different job.',
  secondaryCta: { href: '#live', label: 'See what ninety live minutes needs' },
  wa: 'Hello Modern Age Coders, my child is entering Sentinus Young Innovators and I would like a free class.',
  heroNote: 'Quoted from Sentinus with the date we read it &middot; Our own arithmetic on the age rule &middot; No prize money printed',
  spec: [
    ['Organiser', 'Sentinus, Northern Ireland'],
    ['Eligibility', 'Under 19 on 1 July 2027'],
    ['Titles', 'Scientist, Engineer, Mathematician, Coder'],
    ['Plus', 'Overall Young Innovator 2026'],
    ['First stage', 'A poster or an assessment'],
    ['Final', 'Thursday 26 November 2026'],
    ['Venue', 'Ulster University, Belfast'],
    ['Coding final', '90 minutes, live']
  ],
  capsuleQ: 'In short',
  capsule: 'Sentinus Young Innovators 2026 chooses Northern Ireland\'s Young Scientist, Young Engineer, Young Mathematician and Young Coder of the Year, with an overall Sentinus Young Innovator above them. "Applications must be aged under 19 on July 1st 2027." Scientists submit a poster by 29 September 2026 and engineers by 30 September 2026, while the mathematics and coding categories run "an assessment in late September 2026, to select the finalists"; the first two allow individuals or "teams of up to 3 people" and the second two are individual. The final is "Thursday 26th November 2026" at Ulster University, Belfast, where mathematics finalists face "a 90 minutes live maths challenge" and coders "a 90 minute coding challenge", judged by a panel of industry experts. The overall winner receives a funded trip to the International Science and Engineering Fair 2027 in the USA. We teach the coding and the mathematics. A first class is free; a group place is USD 100 a month and one-to-one teaching USD 150.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a Sentinus finalist',
    lede: 'A live challenge rewards what a student can produce unaided, which is a narrower thing than what they know.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'SYI / 01', title: 'Python from start to finish', note: 'For the coding final: writing and debugging without looking things up, which is the whole skill on the day.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'SYI / 02', title: 'Olympiad and competition maths', note: 'For the mathematics final: unfamiliar problems worked to an answer under a clock.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'SYI / 03', title: 'Algorithms and data structures', note: 'For choosing a method quickly and knowing it will finish inside the time.' }
    ]
  },

  sections: [
    {
      id: 'competition', tint: 'tint', eyebrow: 'The competition',
      h2: 'Four titles, two routes in, one day in Belfast',
      lede: 'Facts read at the organiser\'s own pages on 20 September 2026.',
      body: [
        { kind: 'table', caption: 'Sentinus Young Innovators 2026 as its organiser describes it', head: ['Part', 'Scientist and Engineer', 'Mathematician and Coder'], rows: [
          ['How you get in', 'An online poster submission', '"An assessment in late September 2026, to select the finalists"'],
          ['Deadline', '29 September 2026 for scientists, 30 September for engineers', 'The assessment, in late September'],
          ['Who can enter', '"Individuals" or "teams of up to 3 people"', 'Individual entries'],
          ['At the final', 'The project is judged', 'A live 90-minute challenge'],
          ['Judged by', 'A panel of industry experts', 'A panel of industry experts'],
          ['The date', 'Thursday 26 November 2026', 'Thursday 26 November 2026'],
          ['The venue', 'Ulster University, Belfast', 'Ulster University, Belfast'],
          ['Eligibility', '"Aged under 19 on July 1st 2027"', '"Aged under 19 on July 1st 2027"']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The split between the two columns is the thing to understand first. A scientist or engineer prepares work at home and brings it; a mathematician or coder sits an assessment to qualify and then performs on the day. They are different competitions wearing one name, and a student should know which one they are entering before September.',
            'Above the four titles sits the overall Sentinus Young Innovator, whose prize is a funded trip to the International Science and Engineering Fair in the USA in 2027. The other category winners receive a cash prize, which the organiser publishes in pounds and we do not print.'
          ],
          right: [
            'For a school in Northern Ireland this is the nearest thing to a home fixture on our whole <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>. Almost everything else on it is run from England and sat at a desk; this one ends with a day at Ulster University and a panel who work in the field.',
            'It also runs early. The assessment is in late September and the final in November, so a student thinking about it in October has already missed the first stage. That is worth knowing in the summer term, not the autumn.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="http://www.sentinus.co.uk/programmes/sentinus-young-innovators/" rel="noopener" target="_blank">Sentinus Young Innovators</a>, read 20 September 2026. Modern Age Coders is not connected with Sentinus or Ulster University.' }
      ]
    },
    {
      id: 'agerule', tint: 'deep', eyebrow: 'The method',
      h2: 'The age rule is a Northern Ireland school-year rule',
      lede: 'Sentinus sets eligibility by birthday rather than by year group. In Northern Ireland, and only there, those two things come to almost exactly the same thing.',
      body: [
        { kind: 'p', html: 'The rule is "aged under 19 on July 1st 2027". Turn that into a birth date and something interesting appears.' },
        { kind: 'table', caption: 'Our arithmetic of 20 September 2026', head: ['Step', 'Result'], rows: [
          ['"Under 19 on 1 July 2027" means born after', '1 July 2008'],
          ['Northern Ireland\'s compulsory school age cut-off', '2 July'],
          ['So a Northern Ireland school year runs from', '2 July to 1 July'],
          ['A pupil born 30 June 2008 is', 'Too old, and a school year above'],
          ['A pupil born 2 July 2008 is', 'Eligible, and in the year below']
        ] },
        { kind: 'three', cells: [
          { h3: 'Why this is unusual', p: 'An age rule normally cuts across a year group, so a class contains some eligible pupils and some not. Here the rule falls on the school-year boundary itself, so whole year groups are in or out together.' },
          { h3: 'Why only in NI', p: 'England uses 1 September. The same "under 19 on 1 July" rule applied to an English school would split a year group roughly in half, which is exactly the confusion this avoids in Belfast.' },
          { h3: 'What a teacher can do with it', p: 'Check one pupil\'s birthday and you know about the whole class. That is worth thirty separate checks in a busy September.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'None of this is an accident of luck; it is what happens when a Northern Ireland organisation writes a rule for Northern Ireland schools. It is also the kind of detail that gets lost when a UK-wide site copies an eligibility line without asking which school system it was written for.',
            'It matters practically because sixth form in Northern Ireland runs to Year 14 rather than Year 13, and students assume an under-19 rule excludes them. Often it does not.'
          ],
          right: [
            'The wider lesson, for anyone who writes rules, is that a date is never just a date: it belongs to a system. Our <a class="ag-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> works through the four different school-start rules in Britain and what one birthday does under each of them.',
            'The Northern Ireland cut-off we use here was read at the Department of Education for that page on 19 September 2026, and our own first draft of the rule was a year out, which is recorded there too.'
          ] },
        { kind: 'source', html: 'The arithmetic is ours, computed on 20 September 2026 from the organiser\'s published eligibility rule and the Northern Ireland compulsory school age cut-off.' }
      ]
    },
    {
      id: 'live', tint: 'plain', eyebrow: 'The final',
      h2: 'Ninety minutes, live, with nothing brought in',
      lede: 'A live final is not a harder version of a take-home task. It tests a different thing, and it can be practised.',
      body: [
        { kind: 'table', caption: 'What a live challenge rewards, and what it does not', head: ['Rewarded', 'Why', 'Not rewarded'], rows: [
          ['Writing code from memory', 'There is no time to look up how a thing is spelled', 'Knowing where to find an answer'],
          ['Choosing a method quickly', 'Ninety minutes is enough for one good plan and not two', 'Exploring three approaches'],
          ['Starting with something that runs', 'A partial working program beats an unfinished elegant one', 'Designing before typing anything'],
          ['Reading the whole task first', 'Late requirements change early decisions', 'Starting at the first sentence'],
          ['Calm under observation', 'A panel is watching, and that is a skill of its own', 'Anything practised only alone and untimed']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The single most useful practice is the least fashionable: sit down with a clock, no internet, and a problem you have not seen, for ninety minutes, once a week. Everything else follows from finding out what you actually reach for when nothing can be looked up.',
            'The second is to get something running in the first fifteen minutes, even if it only handles the simplest case. A student with a working partial answer at minute eighty is in a far better position than one with an ambitious half-finished design.'
          ],
          right: [
            'For the mathematics final the shape is the same: ninety live minutes, unfamiliar problems, no reference. The <a class="ag-inline-link" href="/british-mathematical-olympiad-bmo-preparation">olympiad pages</a> on this site are about exactly that kind of work.',
            'And whether or not a student reaches Belfast, practising under a clock without a search engine is the rarest and most useful habit we teach. Most young programmers have never once worked without one.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four rungs to a live final',
    lede: 'Each rung is something a student can do without help, which is the only thing a live challenge can see.',
    table: { caption: 'From working with help to working alone', head: ['Stage', 'Rung', 'The sign it is secure'], rows: [
      ['Years 8 to 10', '1. Fluent basics', 'Writes input, loops and conditions without looking anything up'],
      ['Years 10 to 11', '2. Unaided debugging', 'Finds and fixes an error without asking or searching'],
      ['Years 11 to 13', '3. Under a clock', 'Produces a working partial answer inside the first quarter of the time'],
      ['Years 12 to 14', '4. Under observation', 'Does all of the above with somebody watching']
    ] },
    left: { h3: 'If September is close', ps: [
      'The assessment that selects finalists is in late September, so an entry has to be decided in the summer term rather than the autumn.',
      'Practise one ninety-minute sitting a week with no internet. Nothing else prepares for a live final.'
    ] },
    right: { h3: 'Whatever happens in November', ps: [
      'Working without a search engine is a skill almost no young programmer has, and it is the one employers notice first.',
      'The rest of the season is on the <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>, including several open across all four nations.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'Courses for a Northern Ireland finalist',
    lede: 'Grouped by which final a student is heading for, with the syllabus behind each card.',
    bands: [
      { num: 'I', h3: 'The coding final', sub: 'Working unaided', courses: [
        { code: 'SYI / A / 01', slug: 'python-complete-masterclass-teens', title: 'Python from start to finish', blurb: 'Fluency, so nothing has to be looked up.' },
        { code: 'SYI / A / 02', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Correct code against a clock.' },
        { code: 'SYI / A / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithms and data structures', blurb: 'Picking a method that will finish in time.' }
      ] },
      { num: 'II', h3: 'The maths final', sub: 'Ninety live minutes', courses: [
        { code: 'SYI / B / 01', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Unfamiliar problems, worked to an answer.' },
        { code: 'SYI / B / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Technique that should never slow the thinking.' },
        { code: 'SYI / B / 03', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Careful counting under time pressure.' }
      ] },
      { num: 'III', h3: 'The project titles', sub: 'Scientist and engineer', courses: [
        { code: 'SYI / C / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science with Python', blurb: 'Evidence a poster can actually carry.' },
        { code: 'SYI / C / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'A trained model, honestly reported.' },
        { code: 'SYI / C / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web development', blurb: 'Building something people can try.' }
      ] },
      { num: 'IV', h3: 'Younger students', sub: 'Before Year 11', courses: [
        { code: 'SYI / D / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language, taught patiently.' },
        { code: 'SYI / D / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Logic first, typing later.' },
        { code: 'SYI / D / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that show why a method works.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Weekly practice, sometimes with a clock on the table',
    lede: 'Lessons are live on video from India, five and a half hours ahead of the UK in winter and four and a half in summer, at a time agreed and kept in UK time.',
    slots: [
      { time: 'Weekday evening', l: 'The usual slot for Years 11 to 14.' },
      { time: 'Weekend morning', l: 'Long enough for a full ninety-minute sitting.' },
      { time: 'September weeks', l: 'For the run-up to the selection assessment.' }
    ],
    cells: [
      { h3: 'Timed sittings', p: 'We run ninety-minute practices with nothing to look up, because that is the round.' },
      { h3: 'Unaided debugging', p: 'A student finds their own error while a teacher watches and says nothing, which is uncomfortable and works.' },
      { h3: 'Five to ten students', p: 'Enough for two approaches to meet, small enough for every program to be read.' },
      { h3: 'Northern Ireland years used', p: 'Year 12 and Year 14 mean what they mean in Belfast, not what they mean in Birmingham.' },
      { h3: 'One to one when useful', p: 'For a finalist in the weeks before November.' },
      { h3: 'No role in the competition', p: 'We do not enter students, and we have no relationship with Sentinus.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four pieces of finished, published work by students here, made for their own reasons. More of them sit on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What families have written about us on Google, unedited.',

  fees: {
    h2: 'Fees',
    lede: 'A single monthly rate in US dollars outside India, no registration charge, and you can stop whenever a month ends.',
    free: ['A genuine lesson on the work itself', 'A plain view of where the gaps are', 'No card, no details beyond a number'],
    group: ['Five to ten students at one level', 'The same teacher weekly', 'Work read closely', 'A certificate at the end'],
    one: ['A teacher working with one student', 'Shaped around the final they are sitting', 'Useful in the weeks before November']
  },

  faq: {
    eyebrow: 'Sentinus Young Innovators questions',
    h2: 'What Northern Ireland families ask',
    items: [
      { q: 'What is Sentinus Young Innovators?', a: 'Northern Ireland\'s STEM competition, choosing a Young Scientist, Young Engineer, Young Mathematician and Young Coder of the Year, with an overall Sentinus Young Innovator above them.' },
      { q: 'Who can enter?', a: 'The organiser says applications must be aged under 19 on 1 July 2027. That works out as born after 1 July 2008.' },
      { q: 'Does the age rule match school years?', a: 'In Northern Ireland, almost exactly. The compulsory school age cut-off there is 2 July, so an NI school year runs 2 July to 1 July and the eligibility window falls on the boundary. A pupil born 30 June 2008 is too old and one born 2 July 2008 is eligible, and they are a school year apart.' },
      { q: 'How does a coder qualify for the final?', a: 'Through an assessment in late September 2026 that selects the finalists. Scientists and engineers instead submit a poster, by 29 and 30 September 2026 respectively.' },
      { q: 'Can students enter as a team?', a: 'In the scientist and engineer categories, yes: individuals or teams of up to three people. The mathematics and coding categories are individual.' },
      { q: 'What happens at the final?', a: 'It is on Thursday 26 November 2026 at Ulster University, Belfast. Mathematics finalists face a 90-minute live maths challenge and coders a 90-minute coding challenge, judged by a panel of industry experts.' },
      { q: 'What does the winner get?', a: 'The overall Sentinus Young Innovator receives a funded trip to the International Science and Engineering Fair 2027 in the USA. Category winners receive a cash prize, which the organiser publishes in pounds and we do not print.' },
      { q: 'How should a student prepare for a live coding round?', a: 'By sitting ninety minutes a week with a clock and no internet, and by aiming to have something running in the first fifteen minutes. A working partial answer beats an unfinished elegant one.' },
      { q: 'Is it only for Northern Ireland students?', a: 'Sentinus is a Northern Ireland organisation and the competition and its final are run there. Check the organiser for anything outside that.' },
      { q: 'Do you enter students or coach them for the final?', a: 'We teach coding and mathematics in live online classes, including timed practice. We do not enter anyone and have no relationship with Sentinus.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for students in Northern Ireland',
    lede: 'The UK-wide contests open to the same students, and where the whole year is set out.',
    items: [
      { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK', p: 'Four school systems, and what one birthday does under each.' },
      { href: '/british-informatics-olympiad-preparation', label: 'British Informatics Olympiad', p: 'Sat in school in December and January.' },
      { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'UK competitions calendar 2026-27', p: 'The season in one table, with each organiser named.' },
      { href: '/british-mathematical-olympiad-bmo-preparation', label: 'British Mathematical Olympiad', p: 'Three and a half hours, and marked by hand.' },
      { href: '/big-bang-competition-project-help', label: 'Big Bang Competition', p: 'Project entries from teams of any size.' },
      { href: '/best-online-coding-classes-uk', label: 'Choosing an online class', p: 'How to tell a serious provider from a well-designed one.' }
    ]
  },

  start: {
    h2: 'Book a free lesson',
    lede: 'Tell us the year group and which title your child is aiming at. The free lesson is real work, and afterwards we say honestly what we saw.',
    readFirst: 'Rather read first? Syllabuses are on the <a class="ag-inline-link" href="/courses">course pages</a>, the method on <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the topic order on the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a>.',
    note: 'A WhatsApp message reaches us quickest and is free from a UK mobile. Our number is Indian, which we say on every page, and no British office exists.',
    formNote: 'No card, no obligation. One reply to arrange a time.'
  },

  footer: {
    cols: [
      { h4: 'Competitions', links: [
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' },
        { href: '/british-informatics-olympiad-preparation', label: 'Informatics olympiad' },
        { href: '/big-bang-competition-project-help', label: 'Big Bang Competition' },
        { href: '/british-mathematical-olympiad-bmo-preparation', label: 'Mathematical olympiad' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Olympiad maths' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Competitive programming' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' }
      ] }
    ],
    bottomRight: 'We teach the work; the ninety minutes are yours'
  },

  personalityCss: `
.ag-root.ag-syi .ag-hero h1 { letter-spacing: -0.0185em; }
.ag-root.ag-syi .ag-capsule { border-left-width: 4px; border-radius: 0 13px 13px 0; }
.ag-root.ag-syi .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-syi .ag-table caption { text-align: left; font-weight: 700; font-style: italic; font-size: 0.96em; }
.ag-root.ag-syi .ag-table th:first-child { width: 28%; }
.ag-root.ag-syi .ag-spec dt { letter-spacing: 0.126em; }
.ag-root.ag-syi .ag-three h3 { letter-spacing: -0.0055em; }
.ag-root.ag-syi .ag-slots { gap: 1.16rem; }
`,

  mustMention: ['under 19 on July 1st 2027', 'Young Coder of the Year', 'Ulster University', '26th November 2026', 'born after 1 July 2008', 'teams of up to 3 people', '90 minute coding challenge']
};
