'use strict';
// Roosendaal: the last Dutch station before Belgium, a town that absorbed
// Nispen and Wouw in 1997. 78,165 residents.
// Spine (modest, per the Phase 5 method): a border is where one set of rules
// ends and another begins. Software has borders too, called trust
// boundaries, and anything that crosses one, from a form field to the text
// an AI model reads on a web page, has to be checked at the border and not
// trusted because it arrived.

module.exports = {
  slug: 'coding-classes-in-roosendaal',
  code: 'rsd',
  accent: '#A24B3B',
  accentRationale: 'Roosendaal: a rose-brick red for the town whose name may mean a valley of roses, placed by the solver nineteen units or more from every page it links to, with an unlinked province as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Roosendaal',
    eyebrow: 'Roosendaal, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Roosendaal, Netherlands',
  title: 'Coding Classes in Roosendaal | Modern Age Coders',
  description: 'Coding, Python, AI and app classes taught live online for Roosendaal, ages 6 to 67, from Tolberg and De Kroeven to Wouw and Nispen. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics at the last Dutch station before Belgium, on a page about checking what crosses a border.',
  twitterDescription: 'Roosendaal classes for learners aged 6 to 67, live online, with a free first lesson.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Roosendaal Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Roosendaal, Nispen, Wouw and the surrounding villages, taught in English.'
  },

  h1: 'Coding classes in Roosendaal, the last station before the border, and the borders inside every program',
  capsuleQ: 'What are the best coding classes in Roosendaal?',
  capsule: 'Roosendaal, with 78,165 residents on 1 January 2026 by the national count, is the last station on Dutch territory before the border with Belgium, seen from the north, and its present station building dates from 1904 to 1907. Since 1997 the municipality has included Nispen and Wouw, and its villages reach to Heerle, Moerstraten and Wouwse Plantage. A border is the place where one set of rules stops and another starts, and software has borders of its own, which programmers call trust boundaries. Whatever crosses one, a typed form field, a file, a reply from another service or a web page that an AI model is asked to read, has to be checked at that boundary and never trusted simply because it arrived. Modern Age Coders teaches live online in English from age 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'Every border has two sides and a line where the rules change. A train leaving Roosendaal for Belgium passes the last Dutch station and enters a different system, and for most of the history of railways that change mattered. Programs are built the same way, although their borders are invisible. On one side is code the programmer wrote and controls; on the other is everything that comes from outside: what a user types, what a file contains, what another company\'s service replies, and now what an AI model reads on a web page before it acts. Most serious security failures come from treating outside data as though it had been written inside. The habit that prevents them is to know where the border is, and to check everything at the moment it crosses.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Roosendaal.',

  picks: {
    eyebrow: 'Course picks for Roosendaal',
    h2: 'Four courses for a town on the line to Belgium',
    intro: 'A child in Wouw who wants to make a game with a name box, a teenager in Tolberg building a website with a sign-up form, a student at De Kroeven wiring an AI assistant to read web pages, and an adult whose team imports spreadsheets from suppliers every week. For each of them, the first lesson is free.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games with a name box, where a child finds out what happens when someone types something unexpected, and makes the game cope.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Web and mobile apps whose forms, uploads and database queries treat every input as untrusted until checked.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python automations and AI agents built so that text from outside can inform them but never command them.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Imported files and supplier data checked at the point of entry, before anything downstream relies on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Roosendaal today',
      h2: 'A station of 1904 to 1907, a church of 1839, and six woonplaatsen',
      intro: 'The statistics office counts six woonplaatsen, 14 wijken and 55 buurten in the municipality, on 10,650 hectares of land with 67 of water, and a published density of 730 residents to the square kilometre. Besides the town itself, the encyclopaedia names five villages: Heerle, Moerstraten, Nispen, Wouw and Wouwse Plantage.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The border station', p: 'Station Roosendaal was built between 1904 and 1907 to replace an older and smaller building. Seen from the north, Roosendaal is the last station on Dutch territory before the border with Belgium.' },
          { h3: 'The old Markt', p: 'The Sint-Janskerk on the old Markt is a waterstaatskerk of 1839 with a tower that dates originally from the fifteenth century. Among the neighbourhoods of the town are Tolberg and De Kroeven.' },
          { h3: 'The outlet', p: 'On the west side of the town there has been a factory outlet centre since 2006. It opened as Rosada and was renamed Designer Outlet Roosendaal in 2017, after McArthurGlen became its owner.' }
        ] },
        { kind: 'spec', title: 'Two explanations for one name', p: 'The encyclopaedia offers two origins for the name. One reads it as a valley of roses, a reference to the Virgin Mary; the other reads it as a valley of reeds, since risse is another word for reed. Nothing in the sources read settles which is right, and this page does not try to.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Trust boundaries',
      h2: 'Where outside data becomes inside data',
      intro: 'A trust boundary is any point where data passes from something you do not control to something you do. The table shows common ones, from the oldest to the newest.',
      body: [
        { kind: 'table', caption: 'Borders inside software, and what has to happen at each', head: ['Boundary', 'What crosses it', 'What goes wrong if it is trusted', 'The check at the border'], rows: [
          ['A form on a website', 'whatever a visitor types', 'text that is run as a database command, the attack called SQL injection', 'parameterised queries, so input is only ever data'],
          ['A page that shows user content', 'names, comments, reviews', 'script that runs in other visitors\' browsers', 'escaping everything before it is displayed'],
          ['A file upload', 'files of any type and size', 'a program disguised as a picture, or a file large enough to stop the server', 'checks on type, size and content, stored apart from the code'],
          ['A reply from another service', 'data in a format that can change without warning', 'crashes or silent corruption when a field is missing', 'validation of the reply against an agreed schema'],
          ['A web page read by an AI agent', 'text written by anyone', 'hidden instructions the model follows, called prompt injection', 'treating the text as data only, and limiting what the agent may do']
        ] },
        { kind: 'p', text: 'The rows share one idea. Inside a program, code can rely on what it knows: a number is a number, a name contains no commands, a record has the fields it should. That confidence is only justified if something checked the data on its way in. The check belongs at the boundary, once, because code further inside has no way of knowing where its data came from. Validation scattered through a program fails at the one place it was forgotten; validation at the border protects everything behind it. The newest row is the one most learners have not met. A language model asked to summarise a web page cannot reliably tell the page\'s content from instructions hidden inside it, so whatever the model reads has crossed a trust boundary, and so has whatever it writes, if that output is about to be run, stored or sent.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Roosendaal in the national statistics',
      intro: 'The figures the national statistics publish for the municipality, with years; then the history from the encyclopaedia; then the page\'s own arithmetic, in one place.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '78,165 on 1 January 2026, 77,721 a year before, 77,155 in 2013 and 71,724 in 1995, the earlier years recalculated to the boundaries of the 1997 merger. There were 38,940 men and 38,781 women in 2025.' },
          { h3: 'Age groups, 2026', p: 'Under fifteen, 10,880; fifteen to twenty-five, 8,581; twenty-five to forty-five, 19,202; forty-five to sixty-five, 21,242; sixty-five and above, 18,260.' },
          { h3: 'Households', p: '36,425 households in 2025, averaging 2.1 people: 14,197 of one person and 22,228 of more, 11,319 of them with children.' },
          { h3: 'Housing and income', p: '35,981 dwellings, 22,308 owner-occupied and 13,313 rented, with an estimated average value of 323,000 euro in 2025. Average income 33,100 euro per resident and 39,600 per income recipient in 2024; 3.4 percent of residents in poverty.' },
          { h3: 'Schools and origin', p: '33 primary establishments teach 6,367 pupils, about 193 each, and 6 secondary establishments teach 4,345, about 724 each. At institutions in the municipality there are 2,680 MBO, 690 higher professional and 480 university students. By origin, 70 percent of residents are Dutch, 12 percent European and 18 percent from outside Europe; 83 percent were born in the Netherlands.' },
          { h3: 'The arithmetic', p: '78,165 minus 71,724 is 6,441. The owner-occupied and rented counts come to 35,621, so 360 dwellings fall in neither published group. 6,367 over 33 is about 193 and 4,345 over 6 about 724. The age groups were totalled to confirm they reach 78,165.' }
        ] },
        { kind: 'p', text: 'Nothing on this page implies any tie between Modern Age Coders and the municipality of Roosendaal, the railway, the outlet centre or any school in the area, and there is none. The statistics are those published for Roosendaal in the years stated. The station, the border, the villages, the Sint-Janskerk, the neighbourhoods, the outlet and the two explanations of the name come from the encyclopaedia entry for Roosendaal, whose own infobox describes the town alone, with 67,320 residents in 2023; that figure is not set against the municipal count.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Draw the border, then guard it',
      intro: 'Secure code does not start with clever defences. It starts with a drawing of where outside data enters, and a rule that nothing crosses unchecked.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Mark every entrance', p: 'On a diagram of the program, circle every place data arrives from outside: forms, uploads, links, other services, files, messages, and any text an AI model reads or writes. Each circle is a border crossing.' },
          { h3: '2. Allow, do not forbid', p: 'At each crossing, define what acceptable input looks like, a number in a range, a date, a known file type, and accept only that. Lists of forbidden things are always incomplete; lists of allowed things are not.' },
          { h3: '3. Keep data from becoming commands', p: 'Wherever outside text could be run, whether in a database query, a page, a shell or an AI agent\'s actions, keep it separate from the instructions: parameterised queries, escaping, and agents that may read freely but act only within fixed limits.' }
        ] },
        { kind: 'table', caption: 'Trusted because it arrived, and what followed', head: ['What was trusted', 'Where it came from', 'The failure', 'The border check that prevents it'], rows: [
          ['A search box entry', 'a visitor', 'the database runs part of it as a command', 'a parameterised query'],
          ['A user\'s display name', 'the sign-up form', 'a script in the name runs for everyone who sees it', 'escaping on output'],
          ['A supplier spreadsheet', 'an email attachment', 'wrong or missing columns flow into reports for months', 'a schema check on import'],
          ['An AI agent\'s summary of a web page', 'text anyone could write', 'hidden instructions make the agent leak data or take an action', 'read-only permissions and output treated as untrusted'],
          ['Code suggested by an assistant', 'a model trained on public code', 'an unchecked input slips into production', 'review of every entrance the code creates']
        ] },
        { kind: 'callout', h3: 'Why AI makes the border more important, not less', p: 'For decades the main trust boundary in a program was the user. AI adds two new ones and blurs both. The first is what a model reads. An assistant that browses, reads email or summarises documents is taking in text written by strangers, and because language models follow instructions written in ordinary language, a sentence hidden in a web page can redirect them. The second is what a model writes. Output that is shown to a person is one thing; output that is run as code, sent as an email or inserted into a database has crossed back into the trusted side and must be checked like any other outside input. The defences are old ideas applied to a new component: know where the borders are, let outside text inform but never command, give agents the fewest permissions that do the job, and validate what they produce before anything relies on it. Roosendaal, where the line from the north reaches its last Dutch station, is a good place to learn that the most important moment in a journey is the crossing.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for data that comes from outside',
      intro: 'For websites, apps, imports, integrations and AI agents. Taught in the town at the end of the Dutch line to Belgium.',
      body: [
        { kind: 'table', caption: 'Guarding every crossing', head: ['Rule', 'Applied', 'Stops', 'Leaves you with'], rows: [
          ['Map the entrances', 'List every point where outside data enters', 'A forgotten entrance nobody checks', 'A complete border'],
          ['Validate once, at the border', 'Check input where it arrives, against an allowed shape', 'Checks scattered and missed', 'Clean data inside'],
          ['Separate data from code', 'Use parameterised queries, escaping and fixed agent actions', 'Input that runs as a command', 'Injection closed off'],
          ['Least privilege', 'Give each component, including AI agents, only the access it needs', 'One trick becoming a disaster', 'Damage that stays small'],
          ['Treat output as input', 'Check what AI or other services produce before using it', 'Untrusted text re-entering as trusted', 'A border in both directions']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game that asks for the player\'s age. The child types words, huge numbers and nothing at all, then teaches the game to accept only sensible answers and to say so kindly when it gets something else.' },
          { h3: 'For teenagers', p: 'A small web app with a search box and a comment wall. The teenager tries the classic attacks on a practice copy, then closes each one at the border and writes a test that proves it stays closed.' },
          { h3: 'For adults', p: 'A map of where outside data enters a team\'s work, from supplier files to AI tools. Adults often discover entrances that nobody had thought of as entrances at all.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s description of Roosendaal as the last Dutch station before the Belgian border as an image only, together with standard practice in software security. It says nothing about any real border procedure, then or now.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From an age box that copes with nonsense to an AI agent that cannot be redirected',
    intro: 'The starting level is decided in the free lesson, by watching the learner on a genuine task. Age and village are not what decide it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Unexpected answers', p: 'Children make a game cope when someone types something strange.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Allowed shapes', p: 'Learners write rules for what an input may look like and test them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Close the attack', p: 'Teenagers find and fix injection holes in a practice web app.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Agents with limits', p: 'Adults build AI tools that read outside text without obeying it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI agent will read any web page you give it. Why should a teenager in Roosendaal ask who wrote that page?',
    intro: 'Because text that crosses a border into a program has to be checked, and a web page is the widest border there is.',
    p1: 'AI agents that browse, read documents and send messages are becoming ordinary tools. They are useful because they follow instructions written in plain language, and that is exactly the weakness: a web page, an email or a document can contain instructions of its own, written by someone the user has never met, and the model has no reliable way to tell the page\'s content from an order. The same agent may then write code, fill in a form or query a database, and whatever it produces is only as trustworthy as the least trustworthy text it read.',
    p2: 'A learner who has typed a line of code into a practice search box and watched a database obey it understands trust boundaries for life. Applying the same thinking to an AI agent, letting it read outside text but act only within fixed limits and checking its output before anything relies on it, is a design decision people have to make. The model cannot draw its own borders. Drawing them remains a human job.',
    closer: 'So the case for a child in Roosendaal learning to code in 2026 is not the station or the outlet. It is that someone who knows where the borders of a program are, and checks everything that crosses them, will be needed wherever AI agents are allowed to read the open web and act on what they find.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Classes that reach Roosendaal and its five villages',
    intro: 'From the town centre out to Wouwse Plantage and Moerstraten, a learner joins the same live class from home, wherever in the municipality home is.',
    cells: [
      { h3: 'Village or town, same class', p: 'A pupil in Heerle and a pupil near the old Markt start at the same moment from their own homes, with no drive between villages in the evening.' },
      { h3: 'Brabant school terms kept', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze stay in Dutch as a Brabant school writes them, and the lesson itself is in English.' },
      { h3: 'The free lesson is real', p: 'The first session is taught on an actual task. The teacher sees how the learner goes about it and then proposes a level, a course and a weekly slot, with nothing to pay and no card to give.' },
      { h3: 'Classmates at your level', p: 'Groups are five to ten learners at one stage. Roosendaal has 10,880 residents under fifteen, and five of them matched on subject, level and hour is unlikely, so a group may include learners from other countries.' },
      { h3: 'The southern holidays', p: 'Classes run twice a week, about eight a month, at one agreed hour, and stop for the regio Zuid holidays that Noord-Brabant schools follow.' },
      { h3: 'Hours that suit families', p: 'The teachers are in India, three and a half hours ahead in Dutch summer and four and a half in winter, so late afternoons, evenings and weekend mornings are all realistic.' }
    ],
    spec: { title: 'Thirty-nine schools, six woonplaatsen, and a group from further away', p: 'Roosendaal has 33 primary establishments teaching 6,367 pupils and 6 secondary establishments teaching 4,345. Five learners who match on subject, stage and hour are much easier to find across every age from 6 to 67 and many countries than inside one municipality, however many villages it has.' }
  },

  fees: {
    h2: 'Roosendaal fees in full',
    intro: 'Three prices, and no others.',
    first: 'A genuine lesson on a genuine task, ending in a level and a named course.',
    group: 'Per month, normally eight lessons, in a group of five to ten learners at the same level.',
    private: 'Per month, normally eight lessons, taught to one learner alone.',
    closer: 'The price is set in dollars and is the same for every country, with no euro list to compare, so a family in Nispen pays what a family in Tolberg pays. Nothing is charged until the free lesson has fixed a course and a slot, and payment is then arranged over WhatsApp. The pricing page explains pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, unedited',

  book: {
    h2: 'Tell us what the learner can do already',
    intro: 'The first task might be an age box that copes with nonsense, a set of rules for what input may look like, or a practice web form that has to survive the classic attacks.',
    success: 'Thank you. Your Roosendaal class request has been sent.'
  },

  faq: {
    h2: 'Roosendaal coding class questions',
    intro: 'The town, the border station, the villages, and the lessons.',
    items: [
      { q: 'What does the municipality of Roosendaal include?', a: 'The town of Roosendaal and the villages of Heerle, Moerstraten, Nispen, Wouw and Wouwse Plantage. The present municipality dates from 1997, when Roosendaal merged with Nispen and Wouw, and the statistics office counts six woonplaatsen, 14 wijken and 55 buurten.' },
      { q: 'How many people live in Roosendaal?', a: 'The national count was 78,165 on 1 January 2026, in 36,425 households in 2025. On the boundaries of the 1997 merger the count was 71,724 in 1995.' },
      { q: 'Why is Roosendaal station important?', a: 'According to the encyclopaedia, seen from the north it is the last station on Dutch territory before the border with Belgium. The present building was put up between 1904 and 1907 to replace an older, smaller one.' },
      { q: 'Where does the name Roosendaal come from?', a: 'The encyclopaedia gives two explanations: a valley of roses, referring to the Virgin Mary, or a valley of reeds, from risse, another word for reed. The sources read do not decide between them.' },
      { q: 'What was Rosada?', a: 'The original name of the factory outlet centre on the west side of Roosendaal, open since 2006. It became Designer Outlet Roosendaal in 2017, when McArthurGlen took it over.' },
      { q: 'How many schools does Roosendaal have?', a: 'The statistics count 33 primary establishments teaching 6,367 pupils and 6 secondary establishments teaching 4,345, with 2,680 MBO, 690 higher professional and 480 university students at institutions in the municipality. This page rates no school.' },
      { q: 'Are the lessons in English, and at what times?', a: 'Yes, in English, with Dutch school words like brugklas, havo and vwo left untranslated. The teachers work from India, three and a half hours ahead of Roosendaal in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to find. The time is set in the free lesson, and the regio Zuid holidays are observed.' },
      { q: 'Is there a Modern Age Coders classroom in Roosendaal?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Roosendaal coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore West-Brabant and beyond',
    h2: 'Along the line to Breda, and across the province',
    html: 'Eastward along the railway, <a class="cg-inline-link" href="/coding-classes-in-breda">coding classes in Breda</a> covers the largest city of West-Brabant, and beyond it <a class="cg-inline-link" href="/coding-classes-in-tilburg">Tilburg</a> and the provincial capital <a class="cg-inline-link" href="/coding-classes-in-den-bosch">Den Bosch</a> have pages of their own. Every Brabant page is gathered on <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner going straight to machine learning there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Roosendaal, Noord-Brabant and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-breda', label: 'Breda' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-rsd .cg-hero-grid { grid-template-columns: 0.9fr 1.1fr; align-items: end; gap: clamp(1.05rem, 2.7vw, 2.2rem); }
.cg-root.cg-rsd .cg-hero h1 { font-weight: 670; letter-spacing: -0.02em; line-height: 1.06; }
.cg-root.cg-rsd .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-rsd .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-rsd .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.019em; }
.cg-root.cg-rsd .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.7rem); }
.cg-root.cg-rsd .cg-card { border-radius: 9px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-rsd .cg-table caption { letter-spacing: 0.05em; font-weight: 700; }
.cg-root.cg-rsd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rsd .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-rsd .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Roosendaal, Noord-Brabant: 78,165 residents (statistics, 1 January 2026), 77,721 (2025), 77,155 (2013), 71,724 (1995), recalculated to the boundaries of the 1997 merger; 38,940 men and 38,781 women (2025); ages (2026) 10,880 under fifteen, 8,581 fifteen to twenty-five, 19,202 twenty-five to forty-five, 21,242 forty-five to sixty-five, 18,260 sixty-five or over; 36,425 households (2025) averaging 2.1, 14,197 one-person, 22,228 multi-person, 11,319 with children; 10,716 hectares, 10,650 land, 67 water, published density 730; 35,981 dwellings, 22,308 owner-occupied at 62 percent, 13,313 rented at 37 percent, 360 in neither group; estimated average value 323,000 euro (2025); income 33,100 euro per resident and 39,600 per recipient (2024); 3.4 percent in poverty; 83 percent born in the Netherlands, origin 70 percent Dutch, 12 percent European, 18 percent non-European; 6 woonplaatsen, 14 wijken, 55 buurten; 33 primary establishments with 6,367 pupils and 6 secondary with 4,345; 2,680 MBO, 690 HBO and 480 WO students at institutions; merger in 1997 of Roosendaal, Nispen and Wouw. Encyclopaedia: station built 1904 to 1907 replacing an older and smaller building; seen from the north the last station on Dutch territory before the border with Belgium; Designer Outlet Roosendaal on the west side since 2006, originally Rosada, renamed in 2017 when McArthurGlen became owner; two etymologies, a valley of roses referring to the Virgin Mary or a valley of reeds from risse; villages Heerle, Moerstraten, Nispen, Wouw, Wouwse Plantage; the Sint-Janskerk on the old Markt, a waterstaatskerk of 1839 with an originally fifteenth-century tower; neighbourhoods Tolberg and De Kroeven; town infobox 67,320 in 2023, 46.45 square kilometres, not combined with the municipal row. Regio Zuid holidays. The city page teaches trust boundaries.',
    localProject: 'Check at the border, once, everything that crosses. Roosendaal is, seen from the north, the last station on Dutch territory before the border with Belgium; the page uses the image of a border as the line where rules change and describes no real border procedure. The programming form is the trust boundary: form input run as SQL, user content run as script, uploads disguised as images, other services\' replies whose format shifts, and now web text read by AI agents carrying hidden instructions (prompt injection), plus model output re-entering as trusted when it is run, stored or sent. The defences are mapping every entrance, validating once at the border against an allow-list of shapes, keeping data from becoming commands (parameterised queries, escaping, fixed agent actions), least privilege for every component including agents, and treating AI and service output as untrusted input. Chosen after a case-sensitive check found no page using trust boundaries, injection or untrusted input. Distinct from Den Bosch, which validates relationships between fields inside a record rather than where to validate, from Lelystad, which concerns single points of failure, and from Escamp, which concerns the two failure directions of a condition.',
    requiredMentions: [
      '71,724',
      '77,155',
      '36,425',
      '14,197',
      '11,319',
      '35,981',
      '22,308',
      '13,313',
      '6,367',
      '18,260',
      'Wouwse Plantage',
      'Moerstraten',
      'Nispen',
      'Rosada'
    ],
    sources: [
      { claim: 'Gemeente Roosendaal: 78,165 inwoners (2026), 77,721 (2025), 77,155 (2013), 71,724 (1995), recalculated to current boundaries (merger in 1997: Roosendaal, Nispen, Wouw); mannen 38,940, vrouwen 38,781 (2025); ages 0-15 10,880, 15-25 8,581, 25-45 19,202, 45-65 21,242, 65+ 18,260; 36,425 huishoudens, 14,197 eenpersoons, 22,228 meerpersoons, 11,319 met kinderen, gemiddeld 2.1; 10,716 hectare, land 10,650, water 67; bevolkingsdichtheid 730; woningvoorraad 35,981, koop 22,308 (62 percent), huur 13,313 (37 percent); gemiddelde WOZ 323,000 euro (2025); gemiddeld inkomen per inwoner 33,100 and per inkomensontvanger 39,600 euro (2024); personen in armoede 3.4 percent; basisonderwijs 33 vestigingen 6,367 leerlingen, voortgezet onderwijs 6 vestigingen 4,345 leerlingen, MBO 2,680, HBO 690, WO 480; geboren in Nederland 83 percent, herkomst Nederland 70 percent, Europa 12 percent, buiten Europa 18 percent; 6 woonplaatsen, 14 wijken, 55 buurten.', url: 'https://allecijfers.nl/gemeente/roosendaal/' },
      { claim: 'Roosendaal (encyclopaedia): Station Roosendaal werd gebouwd van 1904-1907 ter vervanging van een ouder en kleiner gebouw. Roosendaal is gezien vanuit het noorden het laatste station op Nederlands grondgebied voor de grens met Belgie. Aan de westkant bevindt zich sinds 2006 het factory outlet center Designer Outlet Roosendaal; de oorspronkelijke naam Rosada is in 2017 veranderd nadat McArthur Glen de nieuwe eigenaar van het outlet center werd. Het dal der rozen zou dan verwijzen naar de Heilige Maria; de naam Roosendaal als rietdal: risse is een andere naam voor riet. Heerle, Moerstraten, Nispen, Wouw, Wouwse Plantage. De Sint-Janskerk op de oude Markt is een waterstaatskerk uit 1839 met een oorspronkelijk 15e-eeuwse toren. Tolberg en De Kroeven. Infobox: 67.320 inwoners (2023-01-01), 46,45 km2.', url: 'https://nl.wikipedia.org/wiki/Roosendaal' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any description of customs, passport or railway procedures at the border, past or present. The source says only that Roosendaal is the last Dutch station before it.',
      'Which of the two explanations of the name is right. The sources read do not decide.',
      'Any comparison of the town infobox figure of 67,320 with the municipal count. Town against municipality is the Zeeland argument.',
      'Origin counts as numbers. Only percentages were published in the row read.',
      'Any claim about the outlet centre beyond its opening, original name and change of owner.',
      'Anything the Breda, Tilburg, Den Bosch and Noord-Brabant pages own, including their figures and arguments.'
    ]
  }
};
