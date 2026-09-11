'use strict';
// Hengelo: the metaalstad of Twente, Stork since 1868, Hazemeyer's signal
// apparatus factory since 1922. 84,045 residents.
// Spine (modest, per the Phase 5 method): a radar built to track aircraft
// treats the echo from rain as clutter to be removed; a weather radar is built
// to measure exactly that echo. Noise is defined by the question being asked,
// and a data-cleaning step written for one question can delete the signal
// another question needs.

module.exports = {
  slug: 'coding-classes-in-hengelo',
  code: 'hgl',
  accent: '#147175',
  accentRationale: 'Hengelo: a deep instrument teal for the town of the signal-apparatus factory, placed by the solver more than twenty-seven units from every page it links to, with an unlinked district as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Hengelo',
    eyebrow: 'Hengelo, Overijssel',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Overijssel' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Hengelo, Netherlands',
  title: 'Coding Classes in Hengelo | Modern Age Coders',
  description: 'Live coding, Python, AI and app lessons online for Hengelo, ages 6 to 67, from the Binnenstad and Hasseler Es to Woolde and Groot Driene. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the metaalstad of Twente, on a page about why one team\'s noise is another team\'s signal.',
  twitterDescription: 'Classes in Hengelo for learners from 6 to 67, live online, starting with a free lesson.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Hengelo Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Hengelo, taught in English.'
  },

  h1: 'Coding classes in Hengelo, the metaalstad, where what counts as noise depends on the question',
  capsuleQ: 'What are the best coding classes in Hengelo?',
  capsule: 'Hengelo, 84,045 residents on 1 January 2026 by the national statistics count, grew into the metaalstad of Twente after C.T. Stork set up a machine-parts factory here in 1868, and Hazemeyer, Heemaf, the salt industry and Hollandse Signaalapparaten followed. The last of those began in 1922 as Hazemeyer\'s factory of signal apparatus and today makes advanced radar. Radar is a good teacher for programmers, because the echo from rain that an aircraft-tracking set must remove is the very echo a weather radar exists to measure. Noise is defined by the question, and a data-cleaning step written for one question can erase what another question needed. Lessons here are live, online and in English for anyone from 6 to 67; the first one is free, and after it a group place costs USD 100 a month, or USD 150 one to one.',
  lead: 'Every measuring instrument collects more than its makers want. A radar sends out a pulse and hears back from everything it touches: aircraft, ships, hills, waves and falling rain. For a set that tracks aircraft, the rain is clutter, and a great deal of engineering goes into suppressing it. For a weather radar, the rain is the whole point, and the aircraft are the nuisance. Neither is wrong. The echo is the same; only the question has changed. Data work runs into this constantly. A cleaning script that removes outliers, silences background sound or drops duplicate rows was written with one question in mind, and it quietly throws away what someone else, asking a different question later, will need. Hengelo, where Hazemeyer\'s signal-apparatus factory opened in 1922, is a fitting place to learn to ask what the noise is noise for.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hengelo.',

  picks: {
    eyebrow: 'Course picks for Hengelo',
    h2: 'Four courses for the town of Stork and Signaal',
    intro: 'A child in Woolde who wants to make sounds and games, a teenager in the Hasseler Es cleaning a messy dataset for a school project, a student in the Binnenstad building a first anomaly detector, and an adult in Groot Driene whose reports all start from someone else\'s filtered export. The opening lesson costs any of them nothing.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Projects with sound, where a child records a room, decides which noises to keep and which to cut, and hears why that depends on the game.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real datasets cleaned in Python with every removed row kept and inspected, never simply deleted.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Filters, anomaly detection and pipelines written with a stated purpose, so the next user knows what was removed and why.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Exports and dashboards questioned for what their filters took out before any number is trusted.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hengelo today',
      h2: 'From Stork in 1868 to a centre rebuilt after October 1944',
      intro: 'Hengelo is a single woonplaats, which the statistics office divides into ten wijken and 62 buurten: the Binnenstad, the Hengelose Es, Noord, the Hasseler Es, Groot Driene, Wilderinkshoek, Woolde, Slangenbeek, the Berflo Es and the Buitengebied. The municipality has 6,084 hectares of land and 99 of water within 6,183, and a published density of 1,375 residents to the square kilometre.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The metaalstad', p: 'In 1868 C.T. Stork moved from Borne and set up a factory for machine parts in Hengelo, Gebr. Stork and Co. After it came other large works: Hazemeyer, Heemaf, the Koninklijke Nederlandse Zoutindustrie and Hollandse Signaalapparaten. Textiles were made here too at first, but over the century that industry concentrated more and more in Enschede, and Hengelo acquired the nickname metaalstad.' },
          { h3: 'October 1944', p: 'As a junction of railway lines towards Germany, Hengelo was bombed during the war, and on 6 and 7 October 1944 the centre of the town was almost entirely destroyed. Later the characteristic white town hall also disappeared, to make way for a modern design with a tower.' },
          { h3: 'Station and canal', p: 'Under the western part of the station platform runs the Europatunnel. On the Twentekanaal, the Hengelo lock forms part of the De Waarbeek lock complex.' }
        ] },
        { kind: 'spec', title: 'Hollandse Signaalapparaten, from 1922', p: 'Hollandse Signaal Apparaten was founded in 1922 as NV Hazemeyers fabriek van signaalapparaten, a factory of signal apparatus. It was taken over from Philips in 1990, and the company, now part of the Thales group, makes advanced radar and infrared equipment and fire-control systems, among them the Active Phased Array Radar and SMART-L, according to the encyclopaedia entry for Thales Nederland.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Signal and clutter',
      h2: 'The same echo, two opposite jobs',
      intro: 'The table describes how radar works in general. It makes no claim about any particular product made in Hengelo; the encyclopaedia says only that the firm makes advanced radar.',
      body: [
        { kind: 'table', caption: 'One set of echoes, read for two different questions', head: ['Echo received', 'For a radar tracking aircraft', 'For a weather radar', 'What decides'], rows: [
          ['Rain and hail', 'clutter, to be suppressed', 'the signal, to be measured', 'the question'],
          ['An aircraft', 'the signal', 'a nuisance in the picture', 'the question'],
          ['Waves on the sea', 'clutter for air tracking', 'of little interest', 'the question'],
          ['Birds', 'false targets to reject', 'contamination to remove', 'both treat them as noise, for different reasons']
        ] },
        { kind: 'p', text: 'The lesson is simple and easy to forget. Nothing in the echo itself says whether it is signal or noise; the label is added by whoever decides what the instrument is for. Data carries the same property. A spike in a sales series is an error to one analyst and the only interesting thing to another; background chatter in an audio file ruins a transcript and is exactly what a model detecting breaking glass must hear; duplicated orders are clutter for revenue and evidence for a study of how often customers re-order. Every filter that removes something is therefore a decision about a question, and it should be written down as one, because the next person to use the data may be asking something else.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'What the national figures say about Hengelo',
      intro: 'Figures from the national statistics service as republished for the municipality, each with its year; then the encyclopaedia history; then the handful of sums made here.',
      body: [
        { kind: 'table', caption: 'Residents by age on 1 January 2026', head: ['Age group', 'Residents'], rows: [
          ['Under 15', '11,422'],
          ['15 to 25', '10,150'],
          ['25 to 45', '21,831'],
          ['45 to 65', '22,525'],
          ['65 and over', '18,117'],
          ['Total', '84,045']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Over time', p: '84,045 residents in 2026 against 77,409 in 1995, which the site gives as growth of 8.6 percent. In 2025 there were 42,352 men and 41,303 women.' },
          { h3: 'Households', p: '39,972 in 2025, averaging 2.05 people: 16,485 of one person, 11,278 of several people without children and 12,209 with children, which add up to the total.' },
          { h3: 'Homes and incomes', p: '40,426 dwellings in 2025, 23,043 bought and 17,383 rented; estimated average value 313,000 euro. Average income 32,600 euro per resident and 38,500 per income recipient in 2024, with 3 percent of residents in poverty.' },
          { h3: 'Schools and students', p: '26 primary establishments with 6,369 pupils, about 245 each, and 8 secondary establishments with 5,612, about 702 each. At institutions in the municipality the site counts 6,723 MBO, 2,260 higher professional and 860 university students.' },
          { h3: 'Origin', p: 'In 2025, 71,699 residents were born in the Netherlands and 11,956 abroad; by origin, 61,095 were Dutch, 6,131 European and 16,429 from outside Europe. Both splits come to 83,655, the same as the men and women of that year.' },
          { h3: 'The sums', p: '84,045 minus 77,409 is 6,636. 6,369 over 26 is about 245 and 5,612 over 8 about 702. Every group table above was totalled only as a completeness check, and none of the encyclopaedia figures is combined with the statistics.' }
        ] },
        { kind: 'p', text: 'No part of this page is connected with Stork, Thales, the municipality of Hengelo or any school in Twente, and Modern Age Coders does not suggest otherwise. Population, homes, income and schools are the national statistics as published for Hengelo in the years shown. Stork, the other factories, the textile industry, the bombing of October 1944, the town hall, the Europatunnel and the De Waarbeek lock come from the encyclopaedia entry for Hengelo; the history of Hollandse Signaalapparaten comes from the entry for Thales Nederland. That entry gives 84,038 residents for 1 January 2026, a different source from the figure used here, and the two are not combined.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Name the question before you clean the data',
      intro: 'Most data pipelines begin with cleaning, and most cleaning removes things. The removal is only correct relative to a question, and the question is rarely written down.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. State what the data is for', p: 'Before any filter, write one sentence: this dataset is being prepared to answer this question. The sentence decides what counts as noise, and without it no filter can be judged.' },
          { h3: '2. Keep what you remove', p: 'Send every removed row, sample or sound to a separate store instead of deleting it. Count it, look at it, and ask whether any of it would matter to a different question.' },
          { h3: '3. Label the filter by purpose', p: 'Name each cleaning step after the question it serves, for example removed for revenue reporting. The next user then knows the step belongs to someone else\'s question and can undo it.' }
        ] },
        { kind: 'table', caption: 'Signal for one question, clutter for another', head: ['In the data', 'Removed as noise when asking', 'Essential when asking', 'What goes wrong if the filter is reused'], rows: [
          ['Extreme values in transactions', 'what does a normal customer spend?', 'where is fraud happening?', 'the fraud model is trained without any fraud'],
          ['Background sound in audio', 'what did the speaker say?', 'did glass break in the room?', 'the event detector never hears the event'],
          ['Repeat orders from one customer', 'how much revenue came in?', 'how often do customers come back?', 'loyalty looks lower than it is'],
          ['Annotators who disagree on a label', 'what is the correct label?', 'which examples are genuinely ambiguous?', 'the model is trained to be sure where nobody is'],
          ['Rain echoes on a radar', 'where are the aircraft?', 'where is it raining?', 'the forecast has no rain in it']
        ] },
        { kind: 'callout', h3: 'Why cleaned data is a decision, not a fact', p: 'A dataset that has been through a cleaning pipeline looks tidier and more trustworthy than the raw version, and it is usually handed on without its history. The next person sees rows and columns, not the rows that are missing or the reasons they went. In machine learning this matters twice over. Filters written to make a model train smoothly often remove exactly the rare, awkward cases a model will meet in real use, and the model then performs well on clean tests and badly in the world. Anomaly detection is the sharpest example: a system meant to find unusual events is sometimes trained on data from which unusual events were removed as noise. The defence is not to stop cleaning. It is to treat every filter as an answer to a named question, to keep what it removed, and to rebuild the cleaning when the question changes. Radar engineers have always understood this, because the same echo from the same cloud is clutter on one screen and the forecast on another.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five rules for filters that someone else will reuse',
      intro: 'For cleaning scripts, audio processing, outlier rules, deduplication and labelling. Learned in the town that built signal apparatus for a century.',
      body: [
        { kind: 'table', caption: 'Cleaning with the question in view', head: ['Rule', 'In practice', 'The trap it avoids', 'The result'], rows: [
          ['Purpose first', 'Write the question at the top of every cleaning script', 'Filters that nobody can judge', 'Cleaning that can be argued about'],
          ['Quarantine, do not delete', 'Move removed records to a separate table with the reason', 'Evidence destroyed for good', 'A removed set you can study'],
          ['Count every step', 'Log how many records each filter took out', 'A filter silently removing a third of the data', 'Visible cleaning'],
          ['Keep the raw layer', 'Store untouched source data beside every cleaned version', 'No way back when the question changes', 'Cleaning that can be redone'],
          ['Re-clean for new questions', 'Build a fresh cleaned set for each new purpose', 'One team\'s noise becoming another\'s blind spot', 'Data fit for the question asked']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game with a microphone, where the child decides which sounds should make the character jump and which to ignore. Then the rules change, and yesterday\'s ignored sound becomes the one that matters.' },
          { h3: 'For teenagers', p: 'A messy dataset cleaned in Python twice, for two different questions. The teenager keeps what each cleaning removed and shows how the two answers would differ if the wrong cleaned set were used.' },
          { h3: 'For adults', p: 'An export from a work system traced back to the filters applied before it arrived. Adults often find that the rows they most needed were removed long ago for somebody else\'s report.' }
        ] },
        { kind: 'p', text: 'This section rests on the encyclopaedia\'s account of Hollandse Signaalapparaten and on general knowledge of how radar and data cleaning work. It describes no specific system made in Hengelo and makes no claim about how any company there processes its data.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From choosing which sounds to ignore to cleaning data for the right question',
    intro: 'Nobody is placed by age or postcode alone. The free lesson shows the teacher how the learner tackles a real task, and the level follows from that.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which sounds count', p: 'Children decide which noises a game should react to, and then the rules change.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Keep what you cut', p: 'Learners clean a small table and look at every row they removed.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two questions, two cleanings', p: 'Teenagers clean one dataset twice and compare the answers.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Whose filter?', p: 'Adults trace a work export back through the filters it passed.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will clean a dataset in seconds. Why should a teenager in Hengelo ask what the cleaning was for?',
    intro: 'Because in the town of the signal-apparatus factory, the same echo can be clutter or the whole point.',
    p1: 'Ask an AI assistant to tidy a dataset and it will remove outliers, drop duplicates and fill gaps in a few lines, following the conventions it has seen most often. Those conventions were written for common questions, usually about averages and totals. If the real question is about the rare case, the fraud, the fault or the unusual customer, the assistant has just deleted the answer, and the cleaned file gives no sign of it. Models trained on such cleaned data then learn a world with the interesting parts removed.',
    p2: 'A learner who has cleaned one dataset twice for two different questions, and seen how differently the two versions answer, stops treating cleaning as housekeeping. Deciding what counts as noise, keeping what was removed and rebuilding the cleaning when the question changes are judgements about purpose. An assistant can carry them out once they are made. It cannot make them, because it does not know what the data is for.',
    closer: 'So the reason for a child in Hengelo to learn to code in 2026 is not the town\'s engineering past. It is that someone who asks what the noise is noise for will be needed wherever AI tidies data before anybody has said what the data should answer.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons for every wijk of Hengelo',
    intro: 'From the Binnenstad to the Buitengebied, a Hengelo learner joins from home and the lesson is identical wherever the laptop happens to be.',
    cells: [
      { h3: 'Home is the classroom', p: 'Someone in Slangenbeek and someone in Noord open the same session at the same minute. There is no trip across town and nobody waiting outside a building afterwards.' },
      { h3: 'Havo stays havo', p: 'The Dutch labels for school, from groep and brugklas through vmbo, havo and vwo to the profielkeuze, are used untranslated, while explanations are given in English.' },
      { h3: 'Free, and a real lesson', p: 'The first session is taught properly on a genuine task rather than demonstrated. It closes with a recommended level, a course and a proposed weekly slot; no payment details are requested.' },
      { h3: 'Matched classmates', p: 'Groups hold five to ten learners at one stage. Hengelo has 11,422 residents under fifteen, and finding five of them at an identical point, free at an identical hour, is unusual, so classmates can come from other countries.' },
      { h3: 'Holidays of regio Noord', p: 'Sessions run twice a week, roughly eight times a month, at one fixed slot, and stop for the regio Noord school holidays that Overijssel follows.' },
      { h3: 'Teachers on Indian time', p: 'The teaching team works in India, three and a half hours later than Dutch summer time and four and a half later in winter, which puts late afternoons, evenings and weekend mornings within easy reach.' }
    ],
    spec: { title: 'Thirty-four schools in one town, and a group drawn wider', p: 'Hengelo has 26 primary establishments with 6,369 pupils and 8 secondary establishments with 5,612. A good coding group depends on a match of subject, stage and hour among five or more learners, and across every age from 6 to 67 and many countries that match is found far more readily than inside one town.' }
  },

  fees: {
    h2: 'Hengelo fees at a glance',
    intro: 'What a family pays, in full, before booking anything.',
    first: 'One genuine lesson on a genuine task, finishing with a level and the course that fits.',
    group: 'A month of classes, normally eight, in a group of five to ten at the same level.',
    private: 'A month of classes, normally eight, with a teacher to oneself.',
    closer: 'There is one dollar price for every country and no euro tariff alongside it, so a family in Wilderinkshoek pays the same as one in the Binnenstad. Nothing is charged before the free lesson has fixed the course and the slot, and payment is then set up over WhatsApp. For pauses, a switch of format or missed sessions, see the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as their authors left them',

  book: {
    h2: 'How far has the learner got?',
    intro: 'The first task might be deciding which sounds a game should hear, cleaning a small table while keeping what was removed, or preparing one dataset for two different questions.',
    success: 'Thank you. Your Hengelo class request has been sent.'
  },

  faq: {
    h2: 'Hengelo coding class questions',
    intro: 'The metaalstad, its factories, its figures, and how lessons run.',
    items: [
      { q: 'Which parts of Hengelo are there?', a: 'Hengelo is a single woonplaats. The statistics office divides it into ten wijken, the Binnenstad, the Hengelose Es, Noord, the Hasseler Es, Groot Driene, Wilderinkshoek, Woolde, Slangenbeek, the Berflo Es and the Buitengebied, with 62 buurten between them.' },
      { q: 'How many people live in Hengelo?', a: 'The national statistics count 84,045 residents on 1 January 2026, in 39,972 households in 2025. The count for 1995 was 77,409, and the figures site gives the growth since then as 8.6 percent.' },
      { q: 'Why is Hengelo called the metaalstad?', a: 'After C.T. Stork moved his machine-parts factory from Borne to Hengelo in 1868, other large works followed, among them Hazemeyer, Heemaf, the Koninklijke Nederlandse Zoutindustrie and Hollandse Signaalapparaten, and the town became known for metal and engineering rather than textiles.' },
      { q: 'What does Hollandse Signaalapparaten make?', a: 'Founded in 1922 as Hazemeyer\'s factory of signal apparatus and now part of the Thales group, it makes advanced radar and infrared equipment and fire-control systems, according to the encyclopaedia entry for Thales Nederland.' },
      { q: 'What happened to Hengelo in the war?', a: 'As a railway junction towards Germany the town was bombed, and on 6 and 7 October 1944 its centre was almost entirely destroyed. The characteristic white town hall later gave way to a modern design with a tower.' },
      { q: 'How many schools does Hengelo have?', a: 'The statistics count 26 primary establishments with 6,369 pupils and 8 secondary establishments with 5,612, plus 6,723 MBO, 2,260 higher professional and 860 university students at institutions in the municipality. No school is rated here.' },
      { q: 'Are lessons in English or Dutch, and when do they happen?', a: 'The teaching language is English, and Dutch school words like vmbo, havo and brugklas are left as they are. Teachers work on Indian time, three and a half hours ahead of the Netherlands in summer and four and a half in winter, so late-afternoon, evening and weekend slots are easy to arrange. The slot is fixed in the free lesson, and breaks follow the regio Noord holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Hengelo?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Hengelo coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Twente and beyond',
    h2: 'Next door to Enschede, and across Overijssel',
    html: 'The largest city in the province and Hengelo\'s neighbour in Twente has a page at <a class="cg-inline-link" href="/coding-classes-in-enschede">coding classes in Enschede</a>. Further west are <a class="cg-inline-link" href="/coding-classes-in-deventer">Deventer</a> and the provincial capital <a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a>, and all 25 municipalities of the province appear on <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>. Anyone who wants to go straight into machine learning can start at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Hengelo, Overijssel and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-enschede', label: 'Enschede' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hgl .cg-hero-grid { grid-template-columns: 1.12fr 0.88fr; align-items: end; gap: clamp(1.15rem, 3.1vw, 2.45rem); }
.cg-root.cg-hgl .cg-hero h1 { font-weight: 680; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-hgl .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-hgl .cg-eyebrow { letter-spacing: 0.22em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-hgl .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.018em; }
.cg-root.cg-hgl .cg-grid-3 { gap: clamp(0.85rem, 1.8vw, 1.45rem); }
.cg-root.cg-hgl .cg-card { border-radius: 0; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-hgl .cg-table caption { letter-spacing: 0.07em; font-weight: 700; }
.cg-root.cg-hgl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hgl .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-hgl .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Hengelo, Overijssel: 84,045 residents (statistics, 1 January 2026) and 77,409 (1995), growth given by the site as 8.6 percent; 42,352 men and 41,303 women (2025); ages (2026) 11,422 under fifteen, 10,150 fifteen to twenty-five, 21,831 twenty-five to forty-five, 22,525 forty-five to sixty-five, 18,117 sixty-five or over; 39,972 households (2025) averaging 2.05, 16,485 one-person, 11,278 multi-person without children, 12,209 with children; 6,183 hectares, 6,084 land, 99 water, published density 1,375; 40,426 dwellings (2025), 23,043 owner-occupied at 57 percent, 17,383 rented at 43 percent; estimated average value 313,000 euro; income 32,600 euro per resident and 38,500 per recipient (2024); 3 percent in poverty; 71,699 born in the Netherlands and 11,956 abroad, origin 61,095 Dutch, 6,131 European, 16,429 non-European (2025); one woonplaats, ten wijken (Binnenstad, Hengelose Es, Noord, Hasseler Es, Groot Driene, Wilderinkshoek, Woolde, Slangenbeek, Berflo Es, Buitengebied), 62 buurten; 26 primary establishments with 6,369 pupils, 8 secondary with 5,612, 6,723 MBO, 2,260 HBO and 860 WO students at institutions. Encyclopaedia (Hengelo): in 1868 C.T. Stork set up a machine-parts factory from Borne, Gebr. Stork and Co; Hazemeyer, Heemaf, the Koninklijke Nederlandse Zoutindustrie and Hollandse Signaalapparaten followed; textiles concentrated in Enschede; the nickname metaalstad; a railway junction towards Germany; the centre almost entirely destroyed on 6 and 7 October 1944; the white town hall gave way to a modern design with a tower; the Europatunnel under the western platform; the Hengelo lock in the De Waarbeek complex on the Twentekanaal; infobox 84,038 on 1 January 2026 and 61.83 square kilometres. Encyclopaedia (Thales Nederland): founded 1922 as NV Hazemeyers fabriek van signaalapparaten; taken over from Philips in 1990; advanced radar and infrared equipment and fire-control systems including APAR and SMART-L. Regio Noord holidays. The city page teaches that noise is defined by the question.',
    localProject: 'Noise is defined by the question. A radar hears echoes from aircraft, ships, waves, birds and rain; for aircraft tracking the rain is clutter to suppress, and for a weather radar it is the signal, so the same echo takes opposite labels depending on purpose. The page describes radar in general and makes no claim about any product made in Hengelo beyond the encyclopaedia line that the firm founded in 1922 as Hazemeyer\'s signal-apparatus factory makes advanced radar. The programming form is purpose-relative cleaning: outlier rules that remove the fraud a fraud model needs, audio noise suppression that deletes the event an event detector must hear, deduplication that hides repeat custom, and annotator disagreement flattened into false certainty. The defences are stating the question at the top of every cleaning script, quarantining removed records with reasons, counting what each filter removes, keeping the raw layer, and re-cleaning for each new question. Chosen after a case-sensitive check found no page using clutter or radar. Distinct from Segbroek, which treats a value beyond a published ceiling as a possible finding, from Escamp, which concerns the two failure directions of a condition, and from Oss, which concerns which fields of reused data were kept accurate by use.',
    requiredMentions: [
      '77,409',
      '39,972',
      '12,209',
      '40,426',
      '23,043',
      '17,383',
      '6,369',
      '5,612',
      '6,723',
      '18,117',
      'Hazemeyer',
      'Heemaf',
      'Europatunnel',
      'Wilderinkshoek'
    ],
    sources: [
      { claim: 'Gemeente Hengelo (Overijssel): 84,045 inwoners (2026), 77,409 (1995), growth 8.6 percent over 31 years; mannen 42,352, vrouwen 41,303 (2025); ages 0-15 11,422, 15-25 10,150, 25-45 21,831, 45-65 22,525, 65+ 18,117 (2026); 39,972 huishoudens, 16,485 eenpersoons (41 percent), 11,278 meerpersoons zonder kinderen (28 percent), 12,209 met kinderen (31 percent), gemiddeld 2.05 (2025); 6,183 hectare, land 6,084, water 99; bevolkingsdichtheid 1,375; woningvoorraad 40,426, koopwoningen 23,043 (57 percent), huurwoningen 17,383 (43 percent) (2025); gemiddelde WOZ 313,000 euro; gemiddeld inkomen per inwoner 32,600 and per inkomensontvanger 38,500 euro (2024); personen in armoede 3 percent; geboren in Nederland 71,699, buiten Nederland 11,956, herkomst Nederland 61,095, Europa 6,131, buiten Europa 16,429 (2025); basisonderwijs 26 vestigingen 6,369 leerlingen, voortgezet onderwijs 8 vestigingen 5,612 leerlingen, MBO 6,723, HBO 2,260, WO 860; 1 woonplaats, 10 wijken (Binnenstad, Hengelose Es, Noord, Hasseler Es, Groot Driene, Wilderinkshoek, Woolde, Slangenbeek, Berflo Es, Buitengebied), 62 buurten.', url: 'https://allecijfers.nl/gemeente/hengelo/' },
      { claim: 'Hengelo (encyclopaedia): In 1868 vestigde vanuit Borne C.T. Stork een fabriek voor machineonderdelen in Hengelo, Gebr. Stork en co. Na de komst van dit bedrijf volgden andere grote fabrieken als Hazemeyer, Heemaf, Koninklijke Nederlandse Zoutindustrie en Hollandse Signaalapparaten. Aanvankelijk was er ook in Hengelo textielindustrie, maar deze ging zich in de loop van de eeuw steeds meer concentreren in Enschede. Hengelo wordt gezien als een (voormalige) industriestad en heeft de bijnaam metaalstad gekregen. Knooppunt van spoorlijnen richting Duitsland; daarbij werd het centrum van de stad op 6 en 7 oktober 1944 zo goed als geheel vernietigd. Zo verdween het karakteristieke witte gemeentehuis om plaats te maken voor een modern ontwerp met een toren. Onder het westelijk deel van het perron loopt de Europatunnel. Schutsluis Hengelo als onderdeel van het sluiscomplex De Waarbeek in het Twentekanaal. Infobox: 84.038 inwoners (1 januari 2026), 61,83 km2.', url: 'https://nl.wikipedia.org/wiki/Hengelo_(Overijssel)' },
      { claim: 'Thales Nederland (encyclopaedia): Hollandse Signaal Apparaten (HSA) werd in 1922 opgericht als NV Hazemeyers fabriek van signaalapparaten; in 1990 overgenomen van Philips; located in Hengelo (Overijssel); geavanceerde radar- en infraroodapparatuur en vuurgeleidingssystemen, waaronder de Active Phased Array Radar (APAR) en SMART-L.', url: 'https://nl.wikipedia.org/wiki/Thales_Nederland' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any claim about how a particular Hengelo radar product handles clutter, or about its customers. The page describes radar in general.',
      'Any comparison of the encyclopaedia figure of 84,038 with the statistics figure of 84,045. Two sources that disagree is the Breda argument.',
      'A date for the rebuilding of the town hall. The source does not give one in the sentence read.',
      'Staff numbers for any Hengelo employer. None was given for the Hengelo site in the sources read.',
      'The number of the 2025 total population as a printed figure. It is stated only as the total both 2025 splits reach.',
      'Anything the Enschede, Deventer, Zwolle and Overijssel pages own, including their figures and arguments.'
    ]
  }
};
