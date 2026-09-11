'use strict';
// Rijswijk: the town of the Peace of 1697, Shell's research laboratory since
// 1959 and the new Rijswijk Buiten. 61,857 residents.
// Spine (modest, per the Phase 5 method): a peace treaty is a set of promises
// each side relies on. An API is the same thing in software: a published
// promise about how a system can be used, and changing it without warning
// breaks everyone who relied on it. Versioning, deprecation and contract
// tests exist to keep the promise, and AI models add a new kind of silent
// change.

module.exports = {
  slug: 'coding-classes-in-rijswijk',
  code: 'rjw',
  accent: '#6B1E1F',
  accentRationale: 'Rijswijk: a deep treaty-seal red placed by the solver more than twenty units from every page it links to, The Hague, Delft and Leidschendam-Voorburg among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Rijswijk',
    eyebrow: 'Rijswijk, Zuid-Holland',
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
  routeLabel: 'Rijswijk, Netherlands',
  title: 'Coding Classes in Rijswijk | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes for Rijswijk, ages 6 to 67, from Oud-Rijswijk and Te Werve to Rijswijk Buiten. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the town of the 1697 peace, on a page about the promises software makes to other software.',
  twitterDescription: 'Rijswijk classes for learners aged 6 to 67, live online, starting with a free lesson.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Rijswijk Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Rijswijk, taught in English.'
  },

  h1: 'Coding classes in Rijswijk, the town of a treaty, and the promises inside every program',
  capsuleQ: 'What are the best coding classes in Rijswijk?',
  capsule: 'Rijswijk, 61,857 residents on 1 January 2026 in the national count, lies between The Hague and Delft. In 1697 the Peace of Rijswijk was signed here, at Huis ter Nieuwburg; in 1959 Shell began building a research laboratory in the Plaspoelpolder; and from 2009 the last farmland in the municipality became the new wijk of Rijswijk Buiten. A treaty is a set of promises that each side relies on. Software is built on promises too. An API, the published way one program talks to another, is a promise about what it will accept and return, and changing it without warning breaks every program that relied on it. Versions, deprecation notices and contract tests exist to keep those promises, and AI models, which can change their answers after an update, have made them more important. Live lessons in English run online for ages 6 to 67; the first is free, then a group costs USD 100 a month and one-to-one tuition USD 150.',
  lead: 'A treaty works because every party knows what the others have agreed to do, and plans around it. Break a term without notice and the whole arrangement is in doubt. Programs depend on one another in exactly the same way. A weather app relies on a weather service to send the temperature in a field called temperature, in degrees Celsius; a shop relies on a payment service to answer in a known format; a thousand projects rely on the same small library to behave the same way tomorrow as today. Each of those dependencies is an unwritten treaty, and when one side changes its terms, renaming a field or changing a unit or dropping a feature, the other side breaks, often in production and often at night. Rijswijk, which gave its name to a peace signed in 1697, is a good place to learn how software keeps its promises: by writing them down, numbering its versions, announcing changes before making them, and testing that the promise still holds.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Rijswijk.',

  picks: {
    eyebrow: 'Course picks for Rijswijk',
    h2: 'Four courses for the town between The Hague and Delft',
    intro: 'A child in the Bomenbuurt making a game that loads levels from a file, a teenager in Te Werve building an app on a public weather service, a student in Oud-Rijswijk whose project broke when a library updated, and an adult at work in the Plaspoelpolder whose reports depend on another team\'s data feed. For each of them the first lesson is free.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games that read their levels from a file with an agreed format, so a child learns what happens when the format changes.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Apps built on real outside services, with the agreed request and response checked by tests before anything ships.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Designing and versioning APIs in Python, pinning dependencies and AI model versions, and handling change without breaking users.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reports and dashboards that depend on other systems, with a clear record of what each source has promised.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Rijswijk today',
      h2: 'A peace of 1697, a laboratory of 1959, and a new wijk from 2009',
      intro: 'Rijswijk lies on the southern side of The Hague and the northern edge of Delft. The statistics office divides it into 11 wijken and 32 buurten, and the encyclopaedia names many neighbourhoods, among them Oud-Rijswijk, Te Werve, Hoornwijck, Welgelegen, the Bomenbuurt, Cromvliet and Stervoorde. The municipality has 1,398 hectares of land and 53 of water, at a published density of 4,343 residents per square kilometre.',
      body: [
        { kind: 'table', caption: 'Rijswijk in three dates from the encyclopaedia', head: ['Year', 'What happened'], rows: [
          ['1697', 'the Peace of Rijswijk was signed at Huis ter Nieuwburg'],
          ['5 January 1959', 'Shell began building its research laboratory in the Plaspoelpolder, which became an industrial and office district'],
          ['2009 onwards', 'Sion, \'t Haantje and Pasgeld, the last farmland in Rijswijk, began to be turned into the residential and business area of Rijswijk Buiten']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Between two cities', p: 'Rijswijk is bounded by The Hague to the north and Delft to the south, and many of its neighbourhoods run straight on into theirs.' },
          { h3: 'A population that jumped', p: 'The statistics give 46,415 residents in 1995, 47,372 in 2013 and 61,857 on 1 January 2026. The page places these figures beside the start of Rijswijk Buiten in 2009 without claiming how much of the rise it explains.' },
          { h3: 'Work and study', p: 'The Plaspoelpolder grew into a district of offices and industry after 1959. The statistics also count higher professional and university students at institutions in the municipality, 1,220 and 1,130.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Promises between programs',
      h2: 'What an API promises, and how a change breaks it',
      intro: 'The table shows the kinds of change a service can make, and what each does to the programs relying on it. It is written as a general guide, not about any Rijswijk company.',
      body: [
        { kind: 'table', caption: 'Changes to a published interface, from harmless to breaking', head: ['The change', 'Example', 'Effect on programs that rely on it', 'How careful services handle it'], rows: [
          ['Add something new', 'a new optional field, windspeed', 'none, old programs ignore it', 'a minor version number goes up'],
          ['Fix a bug without changing the format', 'rounding corrected', 'usually none', 'a patch version number goes up'],
          ['Rename a field', 'temperature becomes temp', 'programs reading temperature get nothing, and may crash', 'a major version, with the old name kept for a while'],
          ['Change a unit', 'Celsius becomes Fahrenheit, same field name', 'programs show wrong numbers without any error', 'a new field or a new major version, never a silent swap'],
          ['Remove a feature', 'an old endpoint switched off', 'every program still using it stops working', 'a deprecation notice months before, then removal']
        ] },
        { kind: 'p', text: 'The most dangerous row is the unit change, because nothing fails loudly: the field is still there, the number still arrives, and it is simply wrong. The usual discipline for avoiding all of this is called semantic versioning. A version number has three parts, major, minor and patch; the patch number rises for fixes, the minor number for additions that break nothing, and the major number, the only one that warns of broken promises, rises for any change that could stop existing programs working. Around it sit the other habits of a trustworthy service: write the promise down, announce breaking changes well in advance, keep the old version running while people move, and test automatically that every promise still holds. A treaty signed at Huis ter Nieuwburg in 1697 held because its terms were written down and known. So do good interfaces.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Rijswijk in the national statistics',
      intro: 'The figures published for the municipality, each with its year, then the encyclopaedia history and the page\'s arithmetic.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '46,415 in 1995, 47,372 in 2013, 60,717 in 2025 and 61,857 on 1 January 2026. The 2025 figure is 29,413 men and 31,304 women.' },
          { h3: 'Ages in 2026', p: '10,444 under fifteen, 6,437 aged fifteen to twenty-five, 17,918 aged twenty-five to forty-five, 14,420 aged forty-five to sixty-five, and 12,638 aged sixty-five and over.' },
          { h3: 'Households', p: '29,579 households in 2025, averaging 2.03 people, of which 12,865 are single-person households and 9,182 include children.' },
          { h3: 'Homes and income', p: '29,310 dwellings in 2025, 14,362 owner-occupied and 14,948 rented, with an estimated average value of 358,000 euro. Income averaged 36,000 euro per resident and 45,200 per income recipient in 2024, and 3.7 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '18 primary establishments and 5 secondary establishments with 2,001 pupils, about 400 each, plus 588 MBO, 1,220 higher professional and 1,130 university students at institutions in the municipality. In 2025, 34,125 residents were of Dutch origin, 7,155 of European and 19,437 of non-European origin; 45,866 were born in the Netherlands and 14,851 abroad.' },
          { h3: 'The arithmetic', p: '61,857 minus 47,372 is 14,485, a rise of 30.6 percent since 2013, against 957 between 1995 and 2013. 2,001 over 5 is about 400. The age groups, the origin groups, the birthplaces, the men and women and the tenure groups were each totalled only to confirm them.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Rijswijk, Shell, Huis ter Nieuwburg or any school in the area, and nothing on the page implies one. The statistics are those published for Rijswijk for the years stated. The Peace of Rijswijk, the Shell laboratory, Rijswijk Buiten, the town\'s position and the neighbourhoods come from the encyclopaedia entry for Rijswijk, which gives 61,874 residents on 1 January 2026 and 14.50 square kilometres, from a different source, not combined with the statistics.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Write the promise down, then test that it holds',
      intro: 'A learner can build both sides of a promise: a small service that makes one, and a program that relies on it, then watch what happens when the promise changes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Publish a contract', p: 'Build a tiny service that returns, say, a temperature in Celsius, and write down exactly what it promises: the field names, the types, the units and what happens on bad input.' },
          { h3: '2. Test the contract', p: 'Write tests from the user\'s side that check every promise. Run them automatically whenever the service changes, so a broken promise is caught before anyone relies on the new version.' },
          { h3: '3. Change it properly', p: 'Now make a breaking change the right way: a new major version, the old one kept running, a notice to users, and a date for switching the old version off.' }
        ] },
        { kind: 'table', caption: 'Silent changes and what guards against them', head: ['What changed', 'Where it happens', 'What goes wrong', 'The guard'], rows: [
          ['A library\'s behaviour after an update', 'every project with dependencies', 'code that worked yesterday fails today', 'pinned versions and reading the change log before upgrading'],
          ['A field renamed in a data feed', 'reports built on another team\'s data', 'empty columns or crashes', 'a contract test run on every delivery'],
          ['A unit changed without a new name', 'sensor data, prices, measurements', 'numbers that are wrong but look fine', 'units written into the contract and checked'],
          ['An AI model updated by its provider', 'apps built on a hosted model', 'the same prompt gives different answers', 'pinning the model version and re-running evaluations on change'],
          ['A treaty broken without notice', 'Europe, 1697 and after', 'the whole arrangement in doubt', 'terms written down and known to all parties']
        ] },
        { kind: 'callout', h3: 'Why AI models need contracts too', p: 'Traditional software changes only when someone releases a new version. AI models blur that. A hosted model can be updated by its provider, and the same question, sent the same way, can produce a noticeably different answer the next week. An app that relied on the model returning a neat list, a particular tone or a certain level of caution may quietly stop working as intended, with no error and no change on its own side. The discipline that protects ordinary interfaces applies here with extra force. Pin the model version where the provider allows it. Keep a set of test prompts with the answers you rely on, and run them whenever anything changes. Treat the format you need from a model as a contract and check every response against it before using it. Rijswijk\'s name is attached to a peace that depended on written terms; programs that depend on AI need their terms written down just as clearly, because the other party can change without telling them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for keeping promises between programs',
      intro: 'For APIs, data feeds, libraries, file formats and AI models. Practised in the town that gave its name to the Peace of 1697.',
      body: [
        { kind: 'table', caption: 'Changing software without breaking its users', head: ['Habit', 'In practice', 'What it prevents', 'The result'], rows: [
          ['Write the contract', 'Document fields, types, units and error behaviour', 'Users guessing what was promised', 'A shared understanding'],
          ['Version meaningfully', 'Use major, minor and patch numbers honestly', 'Breaking changes hidden in small updates', 'Upgrades users can judge'],
          ['Deprecate before removing', 'Announce, keep the old version running, then switch off', 'Sudden breakage', 'Time for everyone to move'],
          ['Test the contract', 'Run consumer-side tests on every change', 'Promises broken by accident', 'Breaks caught before release'],
          ['Pin what you depend on', 'Fix library and AI model versions, upgrade deliberately', 'Surprises from other people\'s changes', 'Behaviour you control']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game that loads its levels from a small file. The child changes the file format and watches the game break, then adds a version number so the game knows which format it is reading.' },
          { h3: 'For teenagers', p: 'A small web service and a separate app that uses it. The teenager renames a field, watches the app fail, then makes the change properly with a new version and a test that would have caught it.' },
          { h3: 'For adults', p: 'A list of every outside system a report or tool depends on, with what each one promises and when it last changed. Adults often find dependencies nobody knew were there.' }
        ] },
        { kind: 'p', text: 'This section uses the Peace of Rijswijk only as an image, together with standard practice in software engineering. It says nothing about the terms of the treaty or about any system used by a Rijswijk company.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a level file with a version number to contracts with AI models',
    intro: 'The free lesson sets the starting level, from how the learner handles a real task. Age alone does not set it, and neither does whether home is in Oud-Rijswijk or Rijswijk Buiten.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Agreed formats', p: 'Children see a game break when a file format changes without warning.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Version numbers', p: 'Learners add versions to their files and check them when loading.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Service and client', p: 'Teenagers build both sides of an API and test the promise between them.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Pinned and tested', p: 'Adults pin library and AI versions and test every contract.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model can change its answers after an update. Why should a teenager in Rijswijk learn to write contracts?',
    intro: 'Because programs rely on each other the way parties to a treaty do, and an AI model is a party that can change without notice.',
    p1: 'Applications built on AI models depend on those models behaving consistently: returning answers in a usable format, following instructions reliably, keeping a certain tone. Providers improve their models, and an improvement for most users can be a breaking change for one application, which finds its carefully tuned prompt now produces something different. Unlike a renamed field, the change raises no error. The app keeps running and quietly gets worse.',
    p2: 'A learner who has built a small service and a client, renamed one field and watched the client fail, and then made the same change properly with a version number and a test, understands what it means to keep a promise in software. Deciding what a system promises, pinning the versions it relies on and testing those promises whenever anything changes are choices a person makes. The model will keep improving. Making sure improvements do not break the people who depend on it is human work.',
    closer: 'So the case for a child in Rijswijk learning to code in 2026 is not the treaty or the laboratory. It is that someone who writes down what a system promises, and tests that the promise holds, will be needed wherever software is built on AI models and services that other people can change.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for every part of Rijswijk',
    intro: 'From Oud-Rijswijk to the new streets of Rijswijk Buiten, and from the edge of The Hague to the edge of Delft, a learner joins the same class from home.',
    cells: [
      { h3: 'Home, not a classroom', p: 'A learner in Stervoorde and a learner in Hoornwijck start the lesson together, each from home, with no journey through the evening traffic between two cities.' },
      { h3: 'Dutch school terms stay Dutch', p: 'Brugklas, groep, vmbo, havo, vwo and the profielkeuze are kept as Rijswijk schools write them, while the teaching is in English.' },
      { h3: 'A real first lesson, free', p: 'The first hour is a full lesson on a genuine task. The teacher then recommends a level, a course and a weekly time, with no payment details requested.' },
      { h3: 'Matched groups', p: 'Five to ten learners at the same stage. Rijswijk has 10,444 residents under fifteen, but five who match on subject, level and hour are rare, so groups also draw on learners in other countries.' },
      { h3: 'Regio Midden breaks', p: 'Two lessons a week, about eight a month, at one fixed hour, pausing for the regio Midden holidays that Zuid-Holland schools keep.' },
      { h3: 'Teachers ahead in time', p: 'The teachers are in India, three and a half hours ahead of Rijswijk in summer and four and a half in winter, so late afternoons, evenings and weekend mornings are all available.' }
    ],
    spec: { title: 'Twenty-three schools between two cities, and one group online', p: 'Rijswijk has 18 primary establishments and 5 secondary establishments teaching 2,001 pupils. A coding group needs five learners who match on subject, stage and hour, and across all ages from 6 to 67 and many countries they are much easier to find than inside one municipality.' }
  },

  fees: {
    h2: 'Fees for Rijswijk families',
    intro: 'Three prices, stated in full.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Monthly, normally eight lessons, five to ten learners at one level.',
    private: 'Monthly, normally eight lessons, one teacher and one learner.',
    closer: 'The dollar fee is the same in every country, with no euro list beside it, so a family in Welgelegen pays what a family in Rijswijk Buiten pays. Nothing is charged until the free lesson has settled a course and a time; payment is then arranged over WhatsApp. The pricing page covers pauses, format changes and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, word for word',

  book: {
    h2: 'Where is the learner up to?',
    intro: 'The first task might be a game that reads levels from a versioned file, a small service with a written promise, or a test that catches a renamed field before it breaks anything.',
    success: 'Thank you. Your Rijswijk class request has been sent.'
  },

  faq: {
    h2: 'Rijswijk coding class questions',
    intro: 'The town, its treaty, its figures, and the lessons.',
    items: [
      { q: 'Where is Rijswijk?', a: 'On the southern side of The Hague and the northern edge of Delft, according to the encyclopaedia. The statistics office divides it into 11 wijken and 32 buurten.' },
      { q: 'How many people live in Rijswijk?', a: 'The national count was 61,857 on 1 January 2026, in 29,579 households in 2025. It was 46,415 in 1995 and 47,372 in 2013.' },
      { q: 'What was the Peace of Rijswijk?', a: 'A peace treaty signed in 1697 at Huis ter Nieuwburg in Rijswijk, according to the encyclopaedia.' },
      { q: 'What is the Plaspoelpolder?', a: 'An industrial and office district in Rijswijk. On 5 January 1959 Shell began building its research laboratory there, and the area grew around it, the encyclopaedia records.' },
      { q: 'What is Rijswijk Buiten?', a: 'A new residential and business area. From 2009, Sion, \'t Haantje and Pasgeld, the last farmland in Rijswijk, began to be turned into Rijswijk Buiten.' },
      { q: 'How many schools are there in Rijswijk?', a: 'The statistics count 18 primary establishments and 5 secondary establishments teaching 2,001 pupils, with 588 MBO, 1,220 higher professional and 1,130 university students at institutions in the municipality. No school is rated here.' },
      { q: 'Which language are the lessons in, and when are they held?', a: 'English, with Dutch school words such as brugklas, havo and vwo kept in Dutch. The teachers work from India, three and a half hours ahead of Rijswijk in summer and four and a half in winter, so late-afternoon, evening and weekend times are easy to arrange. The time is agreed in the free lesson, and regio Midden holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Rijswijk?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Rijswijk coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Haaglanden and beyond',
    h2: 'Between The Hague and Delft, and across the province',
    html: 'To the north lies the city covered by <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, and to the south <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a> has its own page; <a class="cg-inline-link" href="/coding-classes-in-leidschendam-voorburg">Leidschendam-Voorburg</a> is close by to the east. Every town and city in the province with a page is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the complete series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Rijswijk, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-rjw .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 2.8vw, 2.3rem); }
.cg-root.cg-rjw .cg-hero h1 { font-weight: 670; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-rjw .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-rjw .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-rjw .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.017em; }
.cg-root.cg-rjw .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-rjw .cg-card { border-radius: 6px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-rjw .cg-table caption { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-rjw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rjw .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-rjw .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Rijswijk, Zuid-Holland: 61,857 residents (statistics, 1 January 2026), 60,717 (2025), 47,372 (2013), 46,415 (1995), historical data recalculated for administrative changes; 29,413 men and 31,304 women (2025); ages (2026) 10,444 under fifteen, 6,437 fifteen to twenty-five, 17,918 twenty-five to forty-five, 14,420 forty-five to sixty-five, 12,638 sixty-five or over; 29,579 households (2025) averaging 2.03, 12,865 one-person, 9,182 with children; 1,450 hectares, 1,398 land, 53 water, published density 4,343; 29,310 dwellings (2025), 14,362 owner-occupied at 49 percent, 14,948 rented at 51 percent; estimated average value 358,000 euro; income 36,000 euro per resident and 45,200 per recipient (2024); 3.7 percent in poverty; origin (2025) 34,125 Dutch, 7,155 European, 19,437 non-European, 45,866 born in the Netherlands and 14,851 abroad; 11 wijken, 32 buurten; 18 primary establishments and 5 secondary with 2,001 pupils; 588 MBO, 1,220 HBO and 1,130 WO students at institutions. Encyclopaedia: in 1697 the Peace of Rijswijk was signed at Huis ter Nieuwburg; on 5 January 1959 Shell began building its research laboratory in the Plaspoelpolder, which became an industrial and office district; from 2009 Sion, t Haantje and Pasgeld, the last farmland in Rijswijk, began to be turned into the residential and business area Rijswijk Buiten; the municipality lies on the south side of The Hague and the northern edge of Delft; neighbourhoods including Oud-Rijswijk, Te Werve, Hoornwijck, Welgelegen, Bomenbuurt, Cromvliet and Stervoorde; 61,874 residents on 1 January 2026 and 14.50 square kilometres, not combined with the statistics. Regio Midden holidays. The city page teaches API contracts and versioning.',
    localProject: 'Write the promise down, then test that it holds. The Peace of Rijswijk, signed at Huis ter Nieuwburg in 1697, is used as an image for the promises programs make to each other through APIs and other interfaces. A table grades changes from harmless additions to breaking renames, silent unit changes and removed features, and explains semantic versioning (major for breaking, minor for additions, patch for fixes), deprecation notices, keeping old versions running and contract tests. The programming form covers libraries that change on update, renamed fields in data feeds, units changed without a new name, and AI models updated by their providers so that the same prompt gives different answers without any error. The defences are a written contract with fields, types, units and error behaviour, honest version numbers, deprecation before removal, consumer-side contract tests, and pinning library and AI model versions with evaluations re-run on change. The page places the 1995, 2013 and 2026 counts beside the start of Rijswijk Buiten in 2009 without claiming how much of the rise it explains. Chosen after a case-sensitive check found no page using versioning, breaking change or deprecation. Distinct from Roosendaal, which validates untrusted input at a trust boundary, from Vlaardingen, which concerns references that no longer resolve, and from Hilversum, which concerns whether stored formats stay readable.',
    requiredMentions: [
      '46,415',
      '47,372',
      '29,579',
      '12,865',
      '9,182',
      '29,310',
      '14,362',
      '14,948',
      '2,001',
      '12,638',
      'Nieuwburg',
      'Plaspoelpolder',
      'Rijswijk Buiten',
      'Hoornwijck'
    ],
    sources: [
      { claim: 'Gemeente Rijswijk (Zuid-Holland): 61,857 inwoners (2026), 60,717 (2025), 47,372 (2013), 46,415 (1995), historical data recalculated for administrative changes; mannen 29,413, vrouwen 31,304 (2025); ages 0-15 10,444, 15-25 6,437, 25-45 17,918, 45-65 14,420, 65+ 12,638 (2026); 29,579 huishoudens, 12,865 eenpersoons, 9,182 met kinderen, gemiddeld 2.03 (2025); 1,450 hectare, land 1,398, water 53; bevolkingsdichtheid 4,343; woningvoorraad 29,310, koop 14,362 (49 percent), huur 14,948 (51 percent) (2025); gemiddelde WOZ 358,000 euro; gemiddeld inkomen per inwoner 36,000 and per inkomensontvanger 45,200 euro (2024); personen in armoede 3.7 percent; basisonderwijs 18 vestigingen, voortgezet onderwijs 5 vestigingen 2,001 leerlingen, MBO 588, HBO 1,220, WO 1,130; geboren in Nederland 45,866, buiten Nederland 14,851, herkomst Nederland 34,125, Europa 7,155, buiten Europa 19,437 (2025); 11 wijken, 32 buurten.', url: 'https://allecijfers.nl/gemeente/rijswijk/' },
      { claim: 'Rijswijk (encyclopaedia): In 1697 werd de Vrede van Rijswijk getekend in Huis ter Nieuwburg. Op 5 januari 1959 werd met de bouw van het onderzoekslaboratorium van Shell in de Plaspoelpolder begonnen. In 2009 werd een begin gemaakt met de omvorming van Sion, t Haantje en Pasgeld, de laatste agrarische terreinen in Rijswijk, tot woonwijk en bedrijventerrein Rijswijk Buiten. De gemeente ligt aan de zuidkant van Den Haag en aan de noordrand van Delft. Neighbourhoods include Cromvliet, Leeuwendaal, Oud-Rijswijk, Bomenbuurt, Welgelegen, Te Werve, Hoornwijck, Stervoorde, Plaspoelpolder, Sion, Pasgeld, Haantje. Infobox: 14,50 km2, 61.874 inwoners (1 jan 2026).', url: 'https://nl.wikipedia.org/wiki/Rijswijk_(Zuid-Holland)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The parties to or terms of the Peace of Rijswijk. The page uses the treaty only as an image and states only where and when it was signed.',
      'How much of the population rise since 2013 is due to Rijswijk Buiten. The figures are placed side by side without a causal claim.',
      'Primary pupil count as a requiredMention. The figure 4,790 is used elsewhere in the series and is left out of the page.',
      'Anything about software or systems used by Shell or any Rijswijk company.',
      'Any comparison of the encyclopaedia figure of 61,874 with the statistics figure of 61,857. Two sources that disagree is the Breda argument.',
      'Anything The Hague, Delft, Leidschendam-Voorburg and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
