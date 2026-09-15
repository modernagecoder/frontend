'use strict';
// Coding classes for kids, Netherlands (ag- age door, national).
// Spine: screens with a purpose. The national guidelines on healthy and
// responsible screen and social media use, presented on 17 June 2025 by the
// State Secretary for Youth, Prevention and Sport, advise no screens under 2,
// at most 30 minutes a day at 2 to 4, no more than 3 hours a day from 12,
// no social media before 15 and a first smartphone from groep 8, and stress
// balance and using media together, not only minutes. The school frame:
// compulsory schooling from 5 to 16, at least 7,520 hours of primary teaching
// over eight years, and one national doorstroomtoets planned from 2029/2030.
// The hub owns the general doorstroomtoets timing advice and the cg-nl hub owns
// the SLO digital literacy objectives; neither is repeated. Age-banded screen
// limits for 4 to 12 seen in search summaries were not on the Dutch primary
// pages and are left out.

module.exports = {
  cluster: 'ag',
  slug: 'coding-classes-for-kids-netherlands',
  code: 'ckn',
  accent: '#60292B',
  accentRationale: 'Kids door: a deep brick from the solver, more than thirty-four units from every page it links to, the academy pages, the teens door and both Dutch oranges among them, with an unlinked city as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Coding classes for kids, Netherlands',
  title: 'Coding Classes for Kids in the Netherlands | Live Online',
  description: 'Live online coding for Dutch children aged 6 to 12, groep 3 to 8: Scratch, first Python and an honest look at AI, in English with a real teacher. First lesson free.',
  ogDescription: 'The Dutch screen guidelines of 2025 ask for balance and for screens used together, not just fewer minutes. Coding is that kind of screen time. Live online classes for children aged 6 to 12.',
  twitterDescription: 'Scratch, first Python and AI explained honestly, for Dutch children aged 6 to 12. Live online, first lesson free.',
  pageName: 'Coding Classes for Kids in the Netherlands',
  webPageDescription: 'Live online coding classes for children in the Netherlands aged 6 to 12: Scratch, app building, typed Python and AI literacy, taught in English by a live teacher.',
  courseDescription: 'A live online coding programme for Dutch children aged 6 to 12, from block-based games in Scratch through app building and AI literacy to typed Python, placed by ability and taught in English in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'For kids',
  navLinks: [
    { href: '#screens', label: 'Screens with a purpose' },
    { href: '#school', label: 'The school years' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Ages 6 to 12 &middot; Live online',
  h1: 'Coding classes for kids in the Netherlands',
  lede: 'In June 2025 the Dutch government published its first national guidelines on children, screens and social media. They set limits, no screens at all under two and no social media before fifteen, but their main message is about the kind of screen time, not only the amount: balance it with play and movement, use media together, and look for positive experiences. A coding lesson is about as far from scrolling as a screen can get. A child plans something, builds it, sees it go wrong, works out why and fixes it, with a teacher on the other side of the screen and, often, a parent in the room. This page is for Dutch families with a child in groep 3 to 8 who want that kind of screen time: Scratch and games first, then apps, then typed Python and an honest picture of what AI is, live online and in English.',
  secondaryCta: { href: '#catalogue', label: 'See the courses for kids' },
  wa: 'Hello Modern Age Coders, I want a free coding class for my child in the Netherlands.',
  heroNote: 'Teaching children live since 2020 &middot; 10,000+ students &middot; a real teacher in every lesson',
  spec: [
    ['Ages', '6 to 12, groep 3 to 8'],
    ['First steps', 'Scratch and games'],
    ['Then', 'Apps, typed Python, AI explained'],
    ['Format', 'Live video with a teacher'],
    ['Groups', '5 to 10 at one level, or one to one'],
    ['Times', 'After school and weekends'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding live online to children in the Netherlands aged six to twelve. The youngest start with Scratch, building games from blocks; children from about eight build simple apps and learn what AI tools are and when not to trust them; from about nine, most move on to typed Python. Every lesson has a live teacher, children are grouped by what they can do, and a parent is involved from the first call. Lessons fit after school or at the weekend and need a laptop or desktop, not a phone or a social media account. The first lesson is free; after that a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses most Dutch children start with',
    lede: 'One for the youngest, one for the child ready to type real code, and one for any child who uses AI tools and should understand them. Each opens its own page with syllabus, timetable and fee.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'KIDS / 01', title: 'Scratch Coding for Kids', note: 'Games built from blocks for children from six: characters that move, score points and react, and the first experience of finding and fixing a bug.' },
      { course: 'python-ai-kids-masterclass', code: 'KIDS / 02', title: 'Python and AI for Kids', note: 'For children of nine to twelve ready to type: turtle drawings, small games and a program that learns from examples, in real Python.' },
      { course: 'ai-literacy-for-kids-course', code: 'KIDS / 03', title: 'AI Literacy for Kids', note: 'What a chatbot really is, why it can be confidently wrong, and what a child should never type into one, for children from eight.' }
    ]
  },

  sections: [
    {
      id: 'screens', tint: 'tint', eyebrow: 'Screens with a purpose',
      h2: 'What the 2025 Dutch screen guidelines say, and where coding fits',
      lede: 'On 17 June 2025 the State Secretary for Youth, Prevention and Sport, Vincent Karremans, presented the Richtlijnen gezond en verantwoord scherm- en sociale mediagebruik. They were drawn up from research by scientists, experts and civil-society organisations, and they are advice to parents, not law.',
      body: [
        { kind: 'table', caption: 'The main points of the 2025 guidelines, as the government and the national early-childhood centre report them', head: ['Guideline', 'What it says'], rows: [
          ['Under 2', 'Screen use is advised against'],
          ['2 to 4', 'At most 30 minutes a day'],
          ['12 and over', 'No more than 3 hours a day behind a screen'],
          ['First smartphone', 'From groep 8'],
          ['Social media such as Instagram and TikTok', 'From 15'],
          ['Beyond the minutes', 'Balance screens with other activities, use media together, look for positive experiences'],
          ['For young children', 'Calm media without violence; encourage play, movement and screen-free activities']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The guidelines are careful not to treat every minute on a screen as the same. Healthy use, they say, is more than limiting time: it means balancing screens with other things, using media together and helping children have positive experiences online. They also stage the steps: chat apps such as WhatsApp in secondary school first, social media later.',
            'Coding classes sit comfortably inside that advice. A child needs no phone and no social media account to learn to code, only a laptop or desktop at home. The screen is used to make something, not to scroll, and a teacher is present for the whole lesson.'
          ],
          right: [
            'For children aged six to twelve, where the guidelines give no single number, the guidance on balance and shared use matters most. Two short lessons a week are a small part of a child\'s screen time, and they can replace a less purposeful part of it rather than add to it.',
            'Many parents sit with a younger child for the first few lessons, which is exactly the shared use the guidelines encourage. Older children usually want to work alone, and the teacher keeps them on task.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2025/06/16/duidelijk-advies-voor-ouders-wacht-met-sociale-media-tot-15-jaar" rel="noopener" target="_blank">Rijksoverheid, Duidelijk advies voor ouders: wacht met sociale media tot 15 jaar</a> (17 June 2025); <a class="ag-inline-link" href="https://www.lejk.nl/leestafel-publicaties/advies-schermgebruik" rel="noopener" target="_blank">Landelijk Expertisecentrum Jonge Kind, advies schermgebruik</a> (2 to 4 years, calm media, screen-free play). Read 15 September 2026. The view that coding is purposeful screen time is ours, not the guidelines\'.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'The school years',
      h2: 'Eight years of basisschool, and where coding classes sit beside them',
      lede: 'Dutch children usually start school at four and must attend from five. Coding at home fits around the school years; it does not compete with them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'From four, compulsory at five', p: 'Every child living in the Netherlands is leerplichtig between 5 and 16. Leerplicht starts on the first day of the month after the fifth birthday, although most children already go to school at four. Our classes start at six, around groep 3, when reading takes off and a child can follow a simple instruction on screen.' },
          { h3: 'At least 7,520 hours', p: 'Over eight school years a primary school must give at least 7,520 hours of teaching, with at least 3,520 in the first four years and 240 hours that schools may place where they choose. There is no legal maximum per day. Two short coding lessons a week at home are a very small addition to that.' },
          { h3: 'One test at the end, changing', p: 'In groep 8 every pupil takes the doorstroomtoets, as a second opinion on the provisional school advice. In 2027 it falls between 25 January and 12 February. On 2 July 2026 the State Secretary, Judith Tielen, announced a plan for all pupils to take the same single test from the 2029/2030 school year, instead of a choice of six.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'None of those school milestones involves coding, and none needs to. What a child builds with us is extra: something made for fun and for its own sake, which is also how most programmers started.',
            'The most useful thing a parent can do is keep it light and regular. A child who codes for a short while twice a week for a year usually surprises everyone, including themselves.'
          ],
          right: [
            'In the groep 8 year, many families slow down around the doorstroomtoets and pick up again afterwards. That is a sensible rhythm, and lessons can pause without losing a place.',
            'For older children, the page on <a class="ag-inline-link" href="/coding-classes-for-teens-netherlands">coding classes for teens in the Netherlands</a> continues the route from the brugklas onwards.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.rijksoverheid.nl/onderwerpen/leerplicht/leerplicht-en-kwalificatieplicht" rel="noopener" target="_blank">Rijksoverheid, leerplicht</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/themas/onderwijs/schooltijden-en-onderwijstijd/overzicht-aantal-uren-onderwijstijd" rel="noopener" target="_blank">Rijksoverheid, onderwijstijd</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/vraag-en-antwoord/schooladvies-en-doorstroomtoets-basisschool/wanneer-doorstroomtoets-basisonderwijs" rel="noopener" target="_blank">Rijksoverheid, when the doorstroomtoets is taken</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/actueel/nieuws/2026/07/02/staatssecretaris-wil-van-zes-naar-een-doorstroomtoets" rel="noopener" target="_blank">Rijksoverheid news, 2 July 2026</a>. All read 15 September 2026.' }
      ]
    },
    {
      id: 'build', tint: '', eyebrow: 'What children build',
      h2: 'From a cat that moves to a program that learns',
      lede: 'Children progress by making things. Each stage below produces something a child can show a parent, a grandparent or a friend.',
      body: [
        { kind: 'two',
          left: [
            'At six or seven, a child in Scratch makes a character move, then makes it jump when a key is pressed, then turns that into a game with a score. The ideas underneath, sequences, loops and conditions, are the same ones every programmer uses, dressed as play.',
            'From about eight, children can build simple apps with blocks and start to learn what AI tools are: where their answers come from, why they are sometimes wrong, and why personal details never go into them. More on these routes is on <a class="ag-inline-link" href="/scratch-coding-classes-for-kids">Scratch coding classes for kids</a> and <a class="ag-inline-link" href="/ai-classes-for-kids">AI classes for kids</a>.'
          ],
          right: [
            'From about nine, most children are ready to type real code. In Python they draw with a turtle, build small games and write a first program that learns a pattern from examples and then gets one wrong, which teaches more about AI than any explanation.',
            'Ideas for projects at home are on <a class="ag-inline-link" href="/python-projects-for-kids">Python projects for kids</a>. The national <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> shows where the route leads later.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The rungs for children',
    h2: 'Blocks first, then apps, then real code',
    lede: 'Children move up when they are ready, not when a birthday says so. The free lesson places each child, and the teacher moves them on when the current rung is comfortable.',
    table: { caption: 'The route for Dutch children aged 6 to 12', head: ['Stage', 'Usually', 'What the child makes'], rows: [
      ['1. Blocks', 'Groep 3 to 5, ages 6 to 8', 'Games and animations in Scratch'],
      ['2. Apps and AI literacy', 'Groep 5 to 6, ages 8 to 10', 'Simple apps with blocks, and a clear idea of what AI tools are'],
      ['3. Typed Python', 'Groep 6 to 8, ages 9 to 12', 'Drawings, games and a first learning program in real code'],
      ['4. Small projects', 'Groep 7 to 8', 'A finished project of their own, shown to the family'],
      ['5. On to the teen route', 'From the brugklas', 'The next course, picked up without a gap']
    ] },
    left: { h3: 'Why blocks come before typing', ps: [
      'Young children can think logically long before they can type quickly or spell commands correctly. Blocks remove the typing and keep the thinking, so a six-year-old spends the lesson solving problems rather than hunting for keys.',
      'The complete order of subjects is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Fitting it around the basisschool', ps: [
      'Most families choose a late-afternoon or weekend slot that avoids sport, music and homework. In groep 8, lessons are often kept light around the doorstroomtoets.',
      'Children at international schools follow the same stages; the free lesson places them by what they can do.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Seven live courses for children aged 6 to 12',
    lede: 'Grouped by age and stage. Each card opens the full course page with its schedule and fee, and the free lesson decides where a child actually begins.',
    bands: [
      { num: 'I', h3: 'Ages 6 to 8: blocks and first games', sub: 'Playing with logic before typing anything', courses: [
        { code: 'KIDS / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'From a moving character to complete games with levels and scores, all in blocks, over about three months.' },
        { code: 'KIDS / BLOCK / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft Coding for Kids', blurb: 'Coding lessons set in a game world many children already know, a familiar place to practise loops, conditions and events.' }
      ] },
      { num: 'II', h3: 'Ages 8 to 10: apps, the web and AI explained', sub: 'Making things other people can use, and understanding the tools', courses: [
        { code: 'KIDS / APP / 01', slug: 'block-coding-app-development-masterclass', title: 'App Making for Kids', blurb: 'Real apps built with blocks, such as a quiz, a timer or a drawing app, that a child can show on a tablet.' },
        { code: 'KIDS / AI / 01', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'How AI tools produce their answers, how to check them, and what stays private, for children from eight.' },
        { code: 'KIDS / AI / 02', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe Coding for Kids', blurb: 'A child describes a game to an AI tool, gets a first version back, and learns to find and fix what it got wrong.' }
      ] },
      { num: 'III', h3: 'Ages 9 to 12: typed Python and first AI', sub: 'Real code, real projects', courses: [
        { code: 'KIDS / PY / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Typed Python from the first line: turtle art, games and a small program that learns from examples.' },
        { code: 'KIDS / WEB / 01', slug: 'kids-ai-web-development-course', title: 'Web Development for Kids', blurb: 'Real websites built from HTML and CSS, from a first page to a small site about the child\'s own interests.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'After school or at the weekend, with a teacher on screen',
    lede: 'Our teachers work from India, which keeps one time all year while the Netherlands switches to summer time and back. The gap is three and a half hours in summer and four and a half in winter, which puts children\'s lessons naturally in the late afternoon or at the weekend. The regular time is agreed with the family during the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon, Dutch time, once school and a snack are done. The favourite slot for most children.' },
      { time: 'Wednesday afternoon', l: 'Where a school finishes early, some families use the free afternoon. We arrange it where a teacher is available.' },
      { time: 'Weekend', l: 'Saturday or Sunday morning. Popular with families whose weekdays are full of sport and music.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The child makes something real while the teacher watches how they think. By the end, the teacher knows where to start and the child usually wants to come back.' },
      { h3: 'Small groups by level', p: 'Five to ten children who can already do the same things, from several countries, so a quick seven-year-old and a careful ten-year-old can each be in the right group.' },
      { h3: 'One to one if it suits', p: 'For a child who is shy in groups, needs extra attention, or is racing ahead and wants their own pace.' },
      { h3: 'A parent in the loop', p: 'We speak with a parent before anything is booked, and younger children often have a parent nearby for the first lessons.' },
      { h3: 'In English', p: 'Lessons are in English. Children at Dutch schools usually pick up the programming words quickly, and teachers keep instructions simple and visual.' },
      { h3: 'Things to show', p: 'Every few lessons a child finishes something they can show the family, which does more for motivation than any certificate.' }
    ]
  },

  projectsH2: 'What students have made',
  projectsLede: 'Four projects our students published online. More, including work by younger children, are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews as parents and students posted them on Google. We do not write, change or pay for any of them.',

  fees: {
    h2: 'What it costs for a child',
    lede: 'Monthly, in US dollars, at the same rates as every other country outside India. No separate Dutch price, no enrolment fee and no year-long contract.',
    free: ['A real lesson, not a sales call', 'Places the child at the right level', 'No card or bank details asked'],
    group: ['Five to ten children at one level', 'The same live teacher each week', 'Work reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one child', 'Pace set around the child', 'Extra support where needed']
  },

  faq: {
    eyebrow: 'Questions from Dutch parents',
    h2: 'What parents of young children in the Netherlands ask us',
    items: [
      { q: 'Does coding count as screen time?', a: 'Yes, and the 2025 Dutch guidelines say healthy use is about more than minutes: balance, using media together and positive experiences. A coding lesson is active and creative, with a teacher present, and it needs no phone or social media account.' },
      { q: 'What age can my child start?', a: 'From six, around groep 3, with Scratch. Children usually move to typed Python from about nine, and some earlier if they are ready.' },
      { q: 'My child cannot type quickly yet. Is that a problem?', a: 'Not at all. Young children start with blocks, which need no typing. Typing comes later, when a child is ready for it.' },
      { q: 'Should my child use AI tools?', a: 'Understanding them matters more than using them. Our AI literacy course teaches children from eight how these tools work, why they can be wrong and what never to type into them. Social media, which the Dutch guidelines advise waiting with until 15, plays no part in our lessons.' },
      { q: 'Should we pause in groep 8?', a: 'Many families slow down around the doorstroomtoets, which in 2027 falls between 25 January and 12 February, and pick up again afterwards. A place is kept during a pause.' },
      { q: 'Are the lessons in Dutch?', a: 'No, in English. Children at Dutch schools usually manage well, because the programming words are English anyway and teachers keep instructions short and visual.' },
      { q: 'Do I need to sit with my child?', a: 'For the youngest, in the first few lessons, it helps. Older children usually prefer to work alone, and the teacher keeps them focused.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a place in a small group and USD 150 a month for one-to-one lessons, billed in US dollars, with no joining fee and no yearly contract. The first lesson is free.' },
      { q: 'When are the lessons?', a: 'After school or at the weekend, Dutch time. Teachers are three and a half hours ahead in summer and four and a half in winter, and the regular slot is agreed at the free lesson.' },
      { q: 'What happens after I send the form?', a: 'We call you at a Dutch hour to arrange the free lesson. Nothing is charged and nothing is booked until you have seen the lesson and decided.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Dutch families with young children',
    lede: 'Pages that go deeper into one subject or the next stage.',
    items: [
      { href: '/coding-classes-for-teens-netherlands', label: 'Coding classes for teens in the Netherlands', p: 'The next stage, from the brugklas to the exam year.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch coding classes for kids', p: 'The block-based start, explained in detail.' },
      { href: '/ai-classes-for-kids', label: 'AI classes for kids', p: 'How children can learn what AI is and how to use it safely.' },
      { href: '/python-projects-for-kids', label: 'Python projects for kids', p: 'Project ideas for children who have started typing code.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'Where the route leads, from Python to building AI.' },
      { href: '/coding-classes-in-netherlands', label: 'Coding classes in the Netherlands', p: 'Every Dutch city and province page in one place.' }
    ]
  },

  start: {
    h2: 'Book a free lesson for your child',
    lede: 'Leave your number and we will call at a Dutch hour. The first lesson is taught by a real teacher, your child makes something real, and by the end we know where they should start.',
    readFirst: 'Want to read more first? See the <a class="ag-inline-link" href="/courses">course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp from a Dutch number is free and usually quickest. Our number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call with a parent to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/coding-classes-for-teens-netherlands', label: 'Coding for teens' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/ai-classes-for-kids', label: 'AI classes for kids' }
      ] },
      { h4: 'For kids', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-projects-for-kids', label: 'Python projects for kids' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Dutch children on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ckn .ag-hero-grid { gap: clamp(1.3rem, 3.5vw, 3rem); }
.ag-root.ag-ckn .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ckn .ag-capsule { border-left-width: 6px; }
.ag-root.ag-ckn .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ckn .ag-band-head h3 { letter-spacing: 0; }
.ag-root.ag-ckn .ag-table caption { text-align: left; }
.ag-root.ag-ckn .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-ckn .ag-slots { gap: 1.35rem; }
`,

  mustMention: ['17 June 2025', 'Vincent Karremans', 'Richtlijnen gezond en verantwoord scherm- en sociale mediagebruik', 'At most 30 minutes a day', 'From groep 8', 'leerplichtig', '7,520 hours', '3,520', 'Judith Tielen', '2029/2030', '25 January and 12 February']
};
