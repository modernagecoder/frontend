'use strict';
// Coding classes for teens, Netherlands (ag- age door, national).
// Spine: a third of Dutch 12-to-18-year-olds already make things with AI
// (CBS, 3 September 2024: 34.0 percent), and three lines are drawn around a
// Dutch teenager and a screen: the law (GDPR Article 8(1) sets 16 for online
// services offered directly to a child, member states may go no lower than
// 13; UAVG Article 5 extends parental consent to under-sixteens where Article
// 8 does not apply), the school (no phones in secondary classrooms since
// 1 January 2024, with a mediawijsheid exception; nearly 600 secondary
// schools surveyed), and each tool's own age terms. The hub owns the SLO
// informatica figures; they are linked, not repeated.

module.exports = {
  cluster: 'ag',
  slug: 'coding-classes-for-teens-netherlands',
  code: 'ctn',
  accent: '#2D4515',
  accentRationale: 'Teens door: a dark green from the solver, twenty-six units or more from every academy page it links to and from both Dutch oranges, with an unlinked town as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'Coding classes for teens, Netherlands',
  title: 'Coding Classes for Teens in the Netherlands | Live Online',
  description: 'Live online coding for Dutch teenagers aged 12 to 18: Python, AI, apps, Java and the web, in English beside havo, vwo or international school. First lesson free.',
  ogDescription: 'A third of Dutch 12-to-18-year-olds already make things with AI. Coding classes that teach them to build it instead, within the lines Dutch law and schools draw. Live online, first lesson free.',
  twitterDescription: 'Python, AI, apps, Java and the web for Dutch teenagers, live online in English. First lesson free.',
  pageName: 'Coding Classes for Teenagers in the Netherlands',
  webPageDescription: 'Live online coding classes for teenagers in the Netherlands aged 12 to 18: Python, AI and machine learning, app and web development, Java and AI coding tools, taught in English.',
  courseDescription: 'A live online coding programme for Dutch teenagers aged 12 to 18, from typed Python through data, machine learning, apps, the web and Java to AI coding agents, placed by ability and taught in English in small groups or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the Netherlands', href: '/coding-classes-in-netherlands' }],
  crumbLabel: 'For teens',
  navLinks: [
    { href: '#third', label: 'Teens and AI' },
    { href: '#lines', label: 'Three lines' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Netherlands &middot; Ages 12 to 18 &middot; Live online',
  h1: 'Coding classes for teenagers in the Netherlands',
  lede: 'In 2024 more than a third of Dutch 12-to-18-year-olds had used an AI program to make text, images or video, the national statistics office found. Very few of them had built anything with code. That gap is what these classes are for. A teenager who can write Python, train a small model, build an app or read what an AI coding tool has produced is in a different position from one who can only ask a chatbot for help. The Netherlands also draws some firm lines around teenagers and screens: parental consent below sixteen for many online services, no phones in secondary classrooms since January 2024, and age limits set by the tools themselves. A good course fits inside those lines. This page sets out what a Dutch teenager can learn with us, from the brugklas to the eindexamen year, live online and in English, alongside havo, vwo or an international school.',
  secondaryCta: { href: '#catalogue', label: 'See the teen courses' },
  wa: 'Hello Modern Age Coders, I want a free coding class for a teenager in the Netherlands.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; every class with a teacher, never a recording',
  spec: [
    ['Ages', '12 to 18'],
    ['Subjects', 'Python, AI, apps, web, Java, AI coding tools'],
    ['Alongside', 'Havo, vwo, vmbo or an international school'],
    ['Format', 'Live video, a teacher every lesson'],
    ['Groups', '5 to 10 at one level, or one to one'],
    ['Times', 'After school, evenings, weekends'],
    ['Language', 'English'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches coding live online to teenagers across the Netherlands, aged twelve to eighteen: Python first, then data and machine learning, app and web development, Java, and AI coding tools used with care. Teenagers are placed by what they can already do, not by school year, in groups of five to ten or one to one, and every lesson is taught in English by a real teacher. Classes run after school, in the evening or at the weekend, at home on a laptop rather than on a phone in class. The first lesson is free; after it a group place is USD 100 a month and one-to-one lessons USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses most Dutch teenagers start with',
    lede: 'One foundation, one for the teenager who wants AI itself, one for the teenager who wants to ship an app. Each opens its own page with syllabus, timetable and fee.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'TEEN / 01', title: 'Python for Teens', note: 'The foundation: two years from an empty file to confident, well-structured Python, the base every other teen course here builds on.' },
      { course: 'ai-ml-masterclass-teens', code: 'TEEN / 02', title: 'AI and Machine Learning for Teens', note: 'For the teenager who uses AI tools and wants to know how they work: statistics, models, neural networks, images and text, each trained and tested by hand.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'TEEN / 03', title: 'App Development for Teens', note: 'Real apps with React Native, from the first screen to something a friend can install and use, for the teenager who wants to make something people touch.' }
    ]
  },

  sections: [
    {
      id: 'third', tint: 'tint', eyebrow: 'Teens and AI',
      h2: 'A third of Dutch teenagers already make things with AI',
      lede: 'The figures below come from the national statistics office, CBS, published on 3 September 2024. They measure who used an AI program to make text, video or images in 2024, and they show teenagers among the heaviest users in the country.',
      body: [
        { kind: 'table', caption: 'Share of each age group that made text, video or images with an AI program in 2024 (CBS)', head: ['Age group', 'Share', 'What it suggests'], rows: [
          ['12 to 18', '34.0 percent', 'More than one teenager in three already uses AI to produce work'],
          ['18 to 25', '48.7 percent', 'The heaviest users of all, a few years older'],
          ['25 to 35', '41.5 percent', 'Still well above average'],
          ['35 to 45', '27.6 percent', 'A little above the national figure'],
          ['45 to 55', '21.0 percent', 'Many parents of teenagers'],
          ['55 to 65', '12.1 percent', ''],
          ['65 to 75', '5.2 percent', ''],
          ['75 and over', '1.3 percent', ''],
          ['Everyone aged 12 and over', '23 percent', 'The national figure']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Two things stand out. Teenagers use these tools far more than most of the adults around them: a 12-to-18-year-old was more than one and a half times as likely as someone aged 45 to 55 to have made something with AI, 34.0 percent against 21.0. And the peak comes just after school, at 48.7 percent among 18-to-25-year-olds, which is roughly where many of today\'s teenagers will be in five years.',
            'Using an AI program to make a text or an image is a skill of a sort. It is not the same as understanding how the program works, spotting when it is wrong, or building something of your own.'
          ],
          right: [
            'That second set of skills is what school timetables rarely provide. Informatica is optional in Dutch secondary schools and offered by a minority of them; the <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> sets out the figures, so they are not repeated here.',
            'Our classes start from the other end. A teenager writes the code, then trains the model, then builds the app, and only then asks what an AI tool can add. Used that way, the tools speed a teenager up instead of standing in for what they have not learned.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.cbs.nl/nl-nl/nieuws/2024/36/bijna-kwart-nederlanders-gebruikt-kunstmatige-intelligentie-zoals-chatgpt" rel="noopener" target="_blank">CBS, Bijna kwart Nederlanders gebruikt kunstmatige intelligentie zoals ChatGPT, 3 September 2024</a>. Read 15 September 2026; the figures are quoted as published. The comparisons in the text are our own arithmetic.' }
      ]
    },
    {
      id: 'lines', tint: 'deep', eyebrow: 'Three lines',
      h2: 'Three lines drawn around a Dutch teenager and a screen',
      lede: 'The law, the school and the tools each set limits on how teenagers use technology. None of them stands in the way of learning to code, and a course that respects all three is easier for parents to trust.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The law: sixteen', p: 'Under Article 8 of the GDPR, a child can consent alone to an online service offered directly to them from the age of 16; member states may lower that age, but not below 13. The Dutch implementing act, the UAVG, adds in its article 5 that where Article 8 does not apply, the consent of a parent or guardian is still required for anyone under sixteen. In practice, a Dutch parent is part of the decision whenever a young teenager signs up for an online tool.' },
          { h3: 'The school: no phones in class', p: 'Since 1 January 2024 mobile phones have not been allowed in Dutch secondary school classrooms, under a national agreement. Phones may still be used when the lesson needs them, for example in a lesson on mediawijsheid, and by pupils who depend on them for medical reasons or a disability. Each school agrees the details with its teachers, pupils and parents, and from the 2024 to 2025 school year the rule reached primary and special schools too.' },
          { h3: 'The tools: their own age limits', p: 'Every AI tool sets a minimum age in its own terms, and the limits differ from tool to tool and change over time. Before a teenager opens an account, a parent should read that line. On our AI coding agents course for teens, the student uses tools on their own account and within those tools\' age rules, never around them.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The ministry of education had the effect of the phone rule surveyed at nearly 600 secondary schools, and reported the result on 12 July 2024 under the headline that pupils were more social and more focused because of it. Whatever one makes of that, it tells a parent something useful: the school day is increasingly screen-free by design.',
            'Learning to code does not need a phone at all. Our classes happen at home, on a laptop or desktop, at a fixed hour after school or at the weekend.'
          ],
          right: [
            'The consent rule tells parents something too. A teenager under sixteen joining our classes does so with a parent involved from the first call: we speak to the family, not only the learner, and nothing is booked without them.',
            'None of these lines is an obstacle to building. They are a reminder that a teenager learning to create with technology should also learn where the edges are, which is part of what we teach.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://gdpr-info.eu/art-8-gdpr/" rel="noopener" target="_blank">GDPR Article 8(1), full text</a>; <a class="ag-inline-link" href="https://wetten.overheid.nl/BWBR0040940/2021-07-01#Hoofdstuk2_Paragraaf2.1_Artikel5" rel="noopener" target="_blank">Uitvoeringswet AVG, artikel 5</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs/mobiele-apparaten-in-de-klas" rel="noopener" target="_blank">Rijksoverheid, mobile phones not allowed in the classroom</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/ministeries/ministerie-van-onderwijs-cultuur-en-wetenschap/nieuws/2024/07/12/ocw-onderzoek-leerlingen-socialer-en-geconcentreerder-door-mobieltjesafspraak" rel="noopener" target="_blank">OCW research news, 12 July 2024</a>. Read 15 September 2026. This is general information, not legal advice.' }
      ]
    },
    {
      id: 'track', tint: '', eyebrow: 'What teens build',
      h2: 'What a teenager actually builds, from the brugklas to the exam year',
      lede: 'Teenagers arrive with very different starting points and very different goals. The courses below are grouped by what a teenager wants to make, and the free lesson decides where each one starts.',
      body: [
        { kind: 'two',
          left: [
            'Most start with Python. It is the language of data and AI, it reads almost like English, and a twelve-year-old can write something useful in the first month. From there, the teenager who wants AI moves on to data and machine learning; the one who wants to make things people use moves on to apps and the web.',
            'For AI specifically, the global page on <a class="ag-inline-link" href="/ai-classes-for-teenagers">AI classes for teenagers</a> goes further into the machine learning route, and <a class="ag-inline-link" href="/ai-ml-course-for-teens">the AI and ML course for teens</a> sets out its syllabus.'
          ],
          right: [
            'Java suits the teenager heading for computer science, or a pupil at an American-curriculum school preparing for AP Computer Science A; our <a class="ag-inline-link" href="/java-classes-for-teens">Java classes for teens</a> cover it. AI coding agents, covered on <a class="ag-inline-link" href="/ai-agents-for-teens">AI agents for teens</a>, come last, when a teenager can read code well enough to check what an agent writes.',
            'The city academy pages, for example <a class="ag-inline-link" href="/ai-and-python-academy-eindhoven">Eindhoven</a> and <a class="ag-inline-link" href="/ai-and-python-academy-utrecht">Utrecht</a>, show how the same track looks through a local lens.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'The teenage route, one rung at a time',
    lede: 'The order is fixed because each rung needs the last. A teenager who jumps straight to AI tools can produce something that looks impressive and cannot say why it works; one who climbs in order can.',
    table: { caption: 'The five rungs for a Dutch teenager, with the school years they usually fall in', head: ['Rung', 'Usually', 'What the teenager does'], rows: [
      ['1. Python by hand', 'Brugklas and the second year', 'Writes programs from a blank file and fixes their own errors'],
      ['2. Data', 'Second to fourth year', 'Works with real datasets: cleaning, plotting, finding the odd one out'],
      ['3. Models or apps', 'Havo 4 to vwo 6', 'Trains a model and measures it, or builds an app someone can install'],
      ['4. Agents and tools', 'Upper school', 'Uses AI coding agents and checks every line they produce'],
      ['5. A public portfolio', 'Throughout', 'Keeps a GitHub repository a university or employer can open']
    ] },
    left: { h3: 'Why teenagers climb faster than they expect', ps: [
      'A teenager who writes code twice a week for a year is usually well ahead of where they thought they would be. The first rung takes patience; after it, each new subject arrives on a foundation instead of from nothing.',
      'The complete order of subjects is laid out on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'Around the Dutch school calendar', ps: [
      'The profielkeuze in the third year is a good moment to test rung 2, because it shows quickly whether data and technology appeal. In the eindexamen year, most families keep lessons light or pause them around the exams, and pick up again after.',
      'Pupils at international schools following IB, IGCSE or an American curriculum join the same rungs, by ability rather than grade. Younger brothers and sisters start on <a class="ag-inline-link" href="/coding-classes-for-kids-netherlands">coding classes for kids in the Netherlands</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Twelve live courses for teenagers, grouped by what they build',
    lede: 'Every card leads to the full course with its own schedule and fee. The free first lesson, not the list, decides where a teenager begins.',
    bands: [
      { num: 'I', h3: 'Python, data and AI', sub: 'The foundation, and the route into machine learning', courses: [
        { code: 'TEEN / PY / 01', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'Two years of Python from the first line to object-oriented programs, the course most teenagers start with.' },
        { code: 'TEEN / PY / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Statistics, classical models, neural networks, image and text work, each project trained, tested and explained.' },
        { code: 'TEEN / PY / 03', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Real datasets handled in Python: reading, cleaning, joining, plotting and a first predictive model.' },
        { code: 'TEEN / PY / 04', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Orange Data Mining for Teens', blurb: 'Machine learning through visual workflows, a gentle way in for a teenager not yet comfortable with code.' }
      ] },
      { num: 'II', h3: 'Apps and the web', sub: 'Things other people can open and use', courses: [
        { code: 'TEEN / APP / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App Development for Teens', blurb: 'React Native apps for phones, from the first screen to a finished app a friend can install.' },
        { code: 'TEEN / APP / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full Stack Web Development for Teens', blurb: 'Front end and back end together with React and Node.js, ending in a working site with its own data.' },
        { code: 'TEEN / APP / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for Teens', blurb: 'JavaScript and React from scratch, building interactive pages that respond to the user.' },
        { code: 'TEEN / APP / 04', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for Teens', blurb: 'The language of the browser, taught through interactive sites and small games.' }
      ] },
      { num: 'III', h3: 'Java, tools and safe practice', sub: 'For future computer scientists and careful tool users', courses: [
        { code: 'TEEN / JAVA / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for Teens', blurb: 'Java from the beginning, including the object-oriented thinking that AP Computer Science A and university courses expect.' },
        { code: 'TEEN / TOOL / 01', slug: 'codex-and-claude-code-ai-coding-agents-course-for-teens', title: 'Coding Agents: Codex and Claude Code', blurb: 'Working with AI coding agents on real code and reading every change they make, within each tool\'s own age rules.' },
        { code: 'TEEN / TOOL / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for Teens', blurb: 'Version control from zero, so every project has a history and a portfolio grows lesson by lesson.' },
        { code: 'TEEN / TOOL / 03', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber Security for Teens', blurb: 'Ethical, defensive security: passwords, keys, encryption and how attacks are stopped, practised only on systems the learner owns.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'After school, at home, on a laptop',
    lede: 'Teachers work from India, where the clocks never change, while the Netherlands switches to summer time and back. The difference is three and a half hours from late March to late October and four and a half in winter. For teenagers that puts lessons naturally in the late afternoon, early evening or at the weekend; the regular time is fixed with the family at the free lesson.',
    slots: [
      { time: 'After school', l: 'Late afternoon in the Netherlands, once the school day is done. The most common slot for younger teenagers.' },
      { time: 'Early evening', l: 'After dinner, arranged with the teacher. Suits older teenagers with afternoon sport or jobs.' },
      { time: 'Weekend', l: 'Saturday or Sunday. Useful in busy school periods and for teenagers who prefer a longer weekly session.' }
    ],
    cells: [
      { h3: 'A free first lesson', p: 'The teenager works on a real problem while the teacher watches how they think. That places them far better than a test or a school report.' },
      { h3: 'Five to ten in a group', p: 'Teenagers from several countries at the same level, which means a keen twelve-year-old and a beginner of sixteen can both be in the right class.' },
      { h3: 'One to one when needed', p: 'For exam years, very specific goals, irregular timetables, or a teenager who simply works better alone with a teacher.' },
      { h3: 'Parents in the loop', p: 'We talk to the family before anything is booked, which also keeps us within the Dutch rule on consent for under-sixteens.' },
      { h3: 'In English', p: 'Lessons are in English, the language of programming. Dutch school words such as brugklas, havo and vwo are used as families use them.' },
      { h3: 'A portfolio from the start', p: 'Every lesson\'s code goes into the teenager\'s own GitHub repository, which becomes a record a university or employer can see.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Four projects our students published online, open to anyone. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reproduced from Google as their authors wrote them. We do not write, edit or pay for reviews.',

  fees: {
    h2: 'What it costs for a teenager',
    lede: 'Monthly, in US dollars, at the same rates for every country outside India. There is no separate Dutch price, no enrolment fee and no contract for the year. The Copilot Studio courses are one to one only and use that rate.',
    free: ['A real lesson, not a sales call', 'Places the teenager at the right level', 'No card or bank details asked'],
    group: ['Five to ten teenagers at one level', 'The same live teacher each week', 'Code reviewed every week', 'A certificate at the end'],
    one: ['A teacher for one teenager', 'Pace set by the goal', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from Dutch families',
    h2: 'What parents of teenagers in the Netherlands ask us',
    items: [
      { q: 'My teenager already uses ChatGPT. Why learn to code?', a: 'Because using an AI tool and building with code are different skills. CBS found that 34.0 percent of Dutch 12-to-18-year-olds made text, video or images with AI in 2024. Far fewer can write a program, train a model or check what an AI tool produced. Those skills last longer than any single tool.' },
      { q: 'Does our school\'s phone rule affect the classes?', a: 'No. The national rule, in force in secondary schools since 1 January 2024, concerns phones in the classroom. Our lessons happen at home on a laptop or desktop, outside school hours.' },
      { q: 'My child is under sixteen. What about consent?', a: 'Under Dutch law a parent or guardian is involved in consent for many online services until a child turns sixteen. We always speak with the family before a lesson is booked, and a parent decides whether a teenager continues after the free lesson.' },
      { q: 'Which language should my teenager learn first?', a: 'Usually Python. It is readable, widely used and the language of data and AI. Java suits a teenager heading for computer science or AP Computer Science A, and JavaScript suits one who wants to build for the web.' },
      { q: 'Can a teenager use AI coding tools on your courses?', a: 'On the coding agents course, yes, on their own account and within each tool\'s age rules. On every other course the teenager writes the code themselves first, which is the point.' },
      { q: 'Does it help with informatica at school?', a: 'It can sit alongside it and often goes further. For a teenager whose school does not offer informatica, it provides the subject. We follow what a teenager can do rather than the school programme.' },
      { q: 'We are at an international school. Is that a problem?', a: 'Not at all. Lessons are in English and teenagers are placed by ability, whether they follow IB, IGCSE, an American curriculum or the Dutch system.' },
      { q: 'What does it cost?', a: 'USD 100 a month for a place in a group and USD 150 a month for one-to-one lessons, billed in US dollars, with no joining fee and no yearly contract. The first lesson is free.' },
      { q: 'When are the lessons?', a: 'After school, in the early evening or at the weekend, Dutch time. Teachers are three and a half hours ahead in summer and four and a half in winter, and the regular slot is agreed at the free lesson.' },
      { q: 'What happens after we send the form?', a: 'We call a parent at a Dutch hour to arrange the free lesson. Nothing is charged and nothing is booked until the family has seen that lesson and decided.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for Dutch teenagers and their parents',
    lede: 'Pages that go deeper into one subject or one place.',
    items: [
      { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers', p: 'The global page on learning AI as a teenager, from Python to models.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'Java for teenagers, including preparation for AP Computer Science A.' },
      { href: '/ai-agents-for-teens', label: 'AI agents for teens', p: 'How teenagers can learn to use and build AI agents responsibly.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The national academy page, with the informatica figures for Dutch schools.' },
      { href: '/coding-classes-in-netherlands', label: 'Coding classes in the Netherlands', p: 'The country page, with every city and province page listed.' },
      { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and machine learning in the Netherlands', p: 'Machine learning worked on published Dutch data.' }
    ]
  },

  start: {
    h2: 'Book a free lesson for your teenager',
    lede: 'Leave a parent\'s number and we will call at a Dutch hour. The first lesson is taught by a real teacher on real material, and by the end of it we know where your teenager should start.',
    readFirst: 'Want to read more first? See the <a class="ag-inline-link" href="/courses">full course list</a>, <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.',
    note: 'WhatsApp is free from a Dutch phone and usually quickest. Our number is Indian; we have no office or premises in the Netherlands.',
    formNote: 'No card, no commitment. One call with a parent to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'Netherlands', links: [
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and ML, Netherlands' },
        { href: '/ai-classes-for-teenagers', label: 'AI classes for teenagers' }
      ] },
      { h4: 'For teens', links: [
        { href: '/java-classes-for-teens', label: 'Java for teens' },
        { href: '/ai-agents-for-teens', label: 'AI agents for teens' },
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching Dutch teenagers on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-ctn .ag-hero-grid { gap: clamp(1.2rem, 3.3vw, 2.9rem); }
.ag-root.ag-ctn .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-ctn .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ctn .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ctn .ag-band-head h3 { letter-spacing: -0.01em; }
.ag-root.ag-ctn .ag-table caption { text-align: left; }
.ag-root.ag-ctn .ag-spec dt { letter-spacing: 0.13em; }
.ag-root.ag-ctn .ag-slots { gap: 1.25rem; }
`,

  mustMention: ['34.0 percent', '48.7 percent', '3 September 2024', 'Article 8', 'not below 13', 'UAVG', '1 January 2024', 'mediawijsheid', 'nearly 600 secondary schools', 'AP Computer Science A']
};
